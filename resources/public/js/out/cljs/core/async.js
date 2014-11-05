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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20885 = (function (f,fn_handler,meta20886){
this.f = f;
this.fn_handler = fn_handler;
this.meta20886 = meta20886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20885.cljs$lang$type = true;
cljs.core.async.t20885.cljs$lang$ctorStr = "cljs.core.async/t20885";
cljs.core.async.t20885.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t20885");
});
cljs.core.async.t20885.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20887){var self__ = this;
var _20887__$1 = this;return self__.meta20886;
});
cljs.core.async.t20885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20887,meta20886__$1){var self__ = this;
var _20887__$1 = this;return (new cljs.core.async.t20885(self__.f,self__.fn_handler,meta20886__$1));
});
cljs.core.async.__GT_t20885 = (function __GT_t20885(f__$1,fn_handler__$1,meta20886){return (new cljs.core.async.t20885(f__$1,fn_handler__$1,meta20886));
});
}
return (new cljs.core.async.t20885(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20889 = buff;if(G__20889)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__20889.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20889.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20889);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20889);
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
{var val_20890 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20890);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20890,ret){
return (function (){return fn1.call(null,val_20890);
});})(val_20890,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___20891 = n;var x_20892 = (0);while(true){
if((x_20892 < n__13416__auto___20891))
{(a[x_20892] = (0));
{
var G__20893 = (x_20892 + (1));
x_20892 = G__20893;
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
var G__20894 = (i + (1));
i = G__20894;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20898 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20898 = (function (flag,alt_flag,meta20899){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20899 = meta20899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20898.cljs$lang$type = true;
cljs.core.async.t20898.cljs$lang$ctorStr = "cljs.core.async/t20898";
cljs.core.async.t20898.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t20898");
});})(flag))
;
cljs.core.async.t20898.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20900){var self__ = this;
var _20900__$1 = this;return self__.meta20899;
});})(flag))
;
cljs.core.async.t20898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20900,meta20899__$1){var self__ = this;
var _20900__$1 = this;return (new cljs.core.async.t20898(self__.flag,self__.alt_flag,meta20899__$1));
});})(flag))
;
cljs.core.async.__GT_t20898 = ((function (flag){
return (function __GT_t20898(flag__$1,alt_flag__$1,meta20899){return (new cljs.core.async.t20898(flag__$1,alt_flag__$1,meta20899));
});})(flag))
;
}
return (new cljs.core.async.t20898(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20904 = (function (cb,flag,alt_handler,meta20905){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20905 = meta20905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20904.cljs$lang$type = true;
cljs.core.async.t20904.cljs$lang$ctorStr = "cljs.core.async/t20904";
cljs.core.async.t20904.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t20904");
});
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20906){var self__ = this;
var _20906__$1 = this;return self__.meta20905;
});
cljs.core.async.t20904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20906,meta20905__$1){var self__ = this;
var _20906__$1 = this;return (new cljs.core.async.t20904(self__.cb,self__.flag,self__.alt_handler,meta20905__$1));
});
cljs.core.async.__GT_t20904 = (function __GT_t20904(cb__$1,flag__$1,alt_handler__$1,meta20905){return (new cljs.core.async.t20904(cb__$1,flag__$1,alt_handler__$1,meta20905));
});
}
return (new cljs.core.async.t20904(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20907_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20907_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20908_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20908_SHARP_,port], null));
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
var G__20909 = (i + (1));
i = G__20909;
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
var alts_BANG___delegate = function (ports,p__20910){var map__20912 = p__20910;var map__20912__$1 = ((cljs.core.seq_QMARK_.call(null,map__20912))?cljs.core.apply.call(null,cljs.core.hash_map,map__20912):map__20912);var opts = map__20912__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20910 = null;if (arguments.length > 1) {
  p__20910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20910);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20913){
var ports = cljs.core.first(arglist__20913);
var p__20910 = cljs.core.rest(arglist__20913);
return alts_BANG___delegate(ports,p__20910);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15086__auto___21008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21008){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21008){
return (function (state_20984){var state_val_20985 = (state_20984[(1)]);if((state_val_20985 === (7)))
{var inst_20980 = (state_20984[(2)]);var state_20984__$1 = state_20984;var statearr_20986_21009 = state_20984__$1;(statearr_20986_21009[(2)] = inst_20980);
(statearr_20986_21009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (1)))
{var state_20984__$1 = state_20984;var statearr_20987_21010 = state_20984__$1;(statearr_20987_21010[(2)] = null);
(statearr_20987_21010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (4)))
{var inst_20963 = (state_20984[(7)]);var inst_20963__$1 = (state_20984[(2)]);var inst_20964 = (inst_20963__$1 == null);var state_20984__$1 = (function (){var statearr_20988 = state_20984;(statearr_20988[(7)] = inst_20963__$1);
return statearr_20988;
})();if(cljs.core.truth_(inst_20964))
{var statearr_20989_21011 = state_20984__$1;(statearr_20989_21011[(1)] = (5));
} else
{var statearr_20990_21012 = state_20984__$1;(statearr_20990_21012[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (13)))
{var state_20984__$1 = state_20984;var statearr_20991_21013 = state_20984__$1;(statearr_20991_21013[(2)] = null);
(statearr_20991_21013[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (6)))
{var inst_20963 = (state_20984[(7)]);var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20984__$1,(11),to,inst_20963);
} else
{if((state_val_20985 === (3)))
{var inst_20982 = (state_20984[(2)]);var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20984__$1,inst_20982);
} else
{if((state_val_20985 === (12)))
{var state_20984__$1 = state_20984;var statearr_20992_21014 = state_20984__$1;(statearr_20992_21014[(2)] = null);
(statearr_20992_21014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (2)))
{var state_20984__$1 = state_20984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20984__$1,(4),from);
} else
{if((state_val_20985 === (11)))
{var inst_20973 = (state_20984[(2)]);var state_20984__$1 = state_20984;if(cljs.core.truth_(inst_20973))
{var statearr_20993_21015 = state_20984__$1;(statearr_20993_21015[(1)] = (12));
} else
{var statearr_20994_21016 = state_20984__$1;(statearr_20994_21016[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (9)))
{var state_20984__$1 = state_20984;var statearr_20995_21017 = state_20984__$1;(statearr_20995_21017[(2)] = null);
(statearr_20995_21017[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (5)))
{var state_20984__$1 = state_20984;if(cljs.core.truth_(close_QMARK_))
{var statearr_20996_21018 = state_20984__$1;(statearr_20996_21018[(1)] = (8));
} else
{var statearr_20997_21019 = state_20984__$1;(statearr_20997_21019[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (14)))
{var inst_20978 = (state_20984[(2)]);var state_20984__$1 = state_20984;var statearr_20998_21020 = state_20984__$1;(statearr_20998_21020[(2)] = inst_20978);
(statearr_20998_21020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (10)))
{var inst_20970 = (state_20984[(2)]);var state_20984__$1 = state_20984;var statearr_20999_21021 = state_20984__$1;(statearr_20999_21021[(2)] = inst_20970);
(statearr_20999_21021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20985 === (8)))
{var inst_20967 = cljs.core.async.close_BANG_.call(null,to);var state_20984__$1 = state_20984;var statearr_21000_21022 = state_20984__$1;(statearr_21000_21022[(2)] = inst_20967);
(statearr_21000_21022[(1)] = (10));
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
});})(c__15086__auto___21008))
;return ((function (switch__15071__auto__,c__15086__auto___21008){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21004 = [null,null,null,null,null,null,null,null];(statearr_21004[(0)] = state_machine__15072__auto__);
(statearr_21004[(1)] = (1));
return statearr_21004;
});
var state_machine__15072__auto____1 = (function (state_20984){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_20984);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21005){if((e21005 instanceof Object))
{var ex__15075__auto__ = e21005;var statearr_21006_21023 = state_20984;(statearr_21006_21023[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21005;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21024 = state_20984;
state_20984 = G__21024;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_20984){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_20984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21008))
})();var state__15088__auto__ = (function (){var statearr_21007 = f__15087__auto__.call(null);(statearr_21007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21008);
return statearr_21007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21008))
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
return (function (p__21208){var vec__21209 = p__21208;var v = cljs.core.nth.call(null,vec__21209,(0),null);var p = cljs.core.nth.call(null,vec__21209,(1),null);var job = vec__21209;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15086__auto___21391 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results){
return (function (state_21214){var state_val_21215 = (state_21214[(1)]);if((state_val_21215 === (2)))
{var inst_21211 = (state_21214[(2)]);var inst_21212 = cljs.core.async.close_BANG_.call(null,res);var state_21214__$1 = (function (){var statearr_21216 = state_21214;(statearr_21216[(7)] = inst_21211);
return statearr_21216;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21214__$1,inst_21212);
} else
{if((state_val_21215 === (1)))
{var state_21214__$1 = state_21214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21214__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results))
;return ((function (switch__15071__auto__,c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21220 = [null,null,null,null,null,null,null,null];(statearr_21220[(0)] = state_machine__15072__auto__);
(statearr_21220[(1)] = (1));
return statearr_21220;
});
var state_machine__15072__auto____1 = (function (state_21214){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21214);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21221){if((e21221 instanceof Object))
{var ex__15075__auto__ = e21221;var statearr_21222_21392 = state_21214;(statearr_21222_21392[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21393 = state_21214;
state_21214 = G__21393;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21214){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results))
})();var state__15088__auto__ = (function (){var statearr_21223 = f__15087__auto__.call(null);(statearr_21223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21391);
return statearr_21223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21391,res,vec__21209,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21224){var vec__21225 = p__21224;var v = cljs.core.nth.call(null,vec__21225,(0),null);var p = cljs.core.nth.call(null,vec__21225,(1),null);var job = vec__21225;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___21394 = n;var __21395 = (0);while(true){
if((__21395 < n__13416__auto___21394))
{var G__21226_21396 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21226_21396) {
case "async":
var c__15086__auto___21398 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21395,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__21395,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function (state_21239){var state_val_21240 = (state_21239[(1)]);if((state_val_21240 === (7)))
{var inst_21235 = (state_21239[(2)]);var state_21239__$1 = state_21239;var statearr_21241_21399 = state_21239__$1;(statearr_21241_21399[(2)] = inst_21235);
(statearr_21241_21399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21240 === (6)))
{var state_21239__$1 = state_21239;var statearr_21242_21400 = state_21239__$1;(statearr_21242_21400[(2)] = null);
(statearr_21242_21400[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21240 === (5)))
{var state_21239__$1 = state_21239;var statearr_21243_21401 = state_21239__$1;(statearr_21243_21401[(2)] = null);
(statearr_21243_21401[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21240 === (4)))
{var inst_21229 = (state_21239[(2)]);var inst_21230 = async.call(null,inst_21229);var state_21239__$1 = state_21239;if(cljs.core.truth_(inst_21230))
{var statearr_21244_21402 = state_21239__$1;(statearr_21244_21402[(1)] = (5));
} else
{var statearr_21245_21403 = state_21239__$1;(statearr_21245_21403[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21240 === (3)))
{var inst_21237 = (state_21239[(2)]);var state_21239__$1 = state_21239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21239__$1,inst_21237);
} else
{if((state_val_21240 === (2)))
{var state_21239__$1 = state_21239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21239__$1,(4),jobs);
} else
{if((state_val_21240 === (1)))
{var state_21239__$1 = state_21239;var statearr_21246_21404 = state_21239__$1;(statearr_21246_21404[(2)] = null);
(statearr_21246_21404[(1)] = (2));
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
});})(__21395,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
;return ((function (__21395,switch__15071__auto__,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21250 = [null,null,null,null,null,null,null];(statearr_21250[(0)] = state_machine__15072__auto__);
(statearr_21250[(1)] = (1));
return statearr_21250;
});
var state_machine__15072__auto____1 = (function (state_21239){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21239);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21251){if((e21251 instanceof Object))
{var ex__15075__auto__ = e21251;var statearr_21252_21405 = state_21239;(statearr_21252_21405[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21406 = state_21239;
state_21239 = G__21406;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21239){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__21395,switch__15071__auto__,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21253 = f__15087__auto__.call(null);(statearr_21253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21398);
return statearr_21253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__21395,c__15086__auto___21398,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
);

break;
case "compute":
var c__15086__auto___21407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21395,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (__21395,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function (state_21266){var state_val_21267 = (state_21266[(1)]);if((state_val_21267 === (7)))
{var inst_21262 = (state_21266[(2)]);var state_21266__$1 = state_21266;var statearr_21268_21408 = state_21266__$1;(statearr_21268_21408[(2)] = inst_21262);
(statearr_21268_21408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21267 === (6)))
{var state_21266__$1 = state_21266;var statearr_21269_21409 = state_21266__$1;(statearr_21269_21409[(2)] = null);
(statearr_21269_21409[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21267 === (5)))
{var state_21266__$1 = state_21266;var statearr_21270_21410 = state_21266__$1;(statearr_21270_21410[(2)] = null);
(statearr_21270_21410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21267 === (4)))
{var inst_21256 = (state_21266[(2)]);var inst_21257 = process.call(null,inst_21256);var state_21266__$1 = state_21266;if(cljs.core.truth_(inst_21257))
{var statearr_21271_21411 = state_21266__$1;(statearr_21271_21411[(1)] = (5));
} else
{var statearr_21272_21412 = state_21266__$1;(statearr_21272_21412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21267 === (3)))
{var inst_21264 = (state_21266[(2)]);var state_21266__$1 = state_21266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21266__$1,inst_21264);
} else
{if((state_val_21267 === (2)))
{var state_21266__$1 = state_21266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21266__$1,(4),jobs);
} else
{if((state_val_21267 === (1)))
{var state_21266__$1 = state_21266;var statearr_21273_21413 = state_21266__$1;(statearr_21273_21413[(2)] = null);
(statearr_21273_21413[(1)] = (2));
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
});})(__21395,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
;return ((function (__21395,switch__15071__auto__,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21277 = [null,null,null,null,null,null,null];(statearr_21277[(0)] = state_machine__15072__auto__);
(statearr_21277[(1)] = (1));
return statearr_21277;
});
var state_machine__15072__auto____1 = (function (state_21266){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21266);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21278){if((e21278 instanceof Object))
{var ex__15075__auto__ = e21278;var statearr_21279_21414 = state_21266;(statearr_21279_21414[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21266);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21278;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21415 = state_21266;
state_21266 = G__21415;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21266){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(__21395,switch__15071__auto__,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21280 = f__15087__auto__.call(null);(statearr_21280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21407);
return statearr_21280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(__21395,c__15086__auto___21407,G__21226_21396,n__13416__auto___21394,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21416 = (__21395 + (1));
__21395 = G__21416;
continue;
}
} else
{}
break;
}
var c__15086__auto___21417 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21417,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21417,jobs,results,process,async){
return (function (state_21302){var state_val_21303 = (state_21302[(1)]);if((state_val_21303 === (9)))
{var inst_21295 = (state_21302[(2)]);var state_21302__$1 = (function (){var statearr_21304 = state_21302;(statearr_21304[(7)] = inst_21295);
return statearr_21304;
})();var statearr_21305_21418 = state_21302__$1;(statearr_21305_21418[(2)] = null);
(statearr_21305_21418[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (8)))
{var inst_21288 = (state_21302[(8)]);var inst_21293 = (state_21302[(2)]);var state_21302__$1 = (function (){var statearr_21306 = state_21302;(statearr_21306[(9)] = inst_21293);
return statearr_21306;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21302__$1,(9),results,inst_21288);
} else
{if((state_val_21303 === (7)))
{var inst_21298 = (state_21302[(2)]);var state_21302__$1 = state_21302;var statearr_21307_21419 = state_21302__$1;(statearr_21307_21419[(2)] = inst_21298);
(statearr_21307_21419[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (6)))
{var inst_21288 = (state_21302[(8)]);var inst_21283 = (state_21302[(10)]);var inst_21288__$1 = cljs.core.async.chan.call(null,(1));var inst_21289 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21290 = [inst_21283,inst_21288__$1];var inst_21291 = (new cljs.core.PersistentVector(null,2,(5),inst_21289,inst_21290,null));var state_21302__$1 = (function (){var statearr_21308 = state_21302;(statearr_21308[(8)] = inst_21288__$1);
return statearr_21308;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21302__$1,(8),jobs,inst_21291);
} else
{if((state_val_21303 === (5)))
{var inst_21286 = cljs.core.async.close_BANG_.call(null,jobs);var state_21302__$1 = state_21302;var statearr_21309_21420 = state_21302__$1;(statearr_21309_21420[(2)] = inst_21286);
(statearr_21309_21420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (4)))
{var inst_21283 = (state_21302[(10)]);var inst_21283__$1 = (state_21302[(2)]);var inst_21284 = (inst_21283__$1 == null);var state_21302__$1 = (function (){var statearr_21310 = state_21302;(statearr_21310[(10)] = inst_21283__$1);
return statearr_21310;
})();if(cljs.core.truth_(inst_21284))
{var statearr_21311_21421 = state_21302__$1;(statearr_21311_21421[(1)] = (5));
} else
{var statearr_21312_21422 = state_21302__$1;(statearr_21312_21422[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21303 === (3)))
{var inst_21300 = (state_21302[(2)]);var state_21302__$1 = state_21302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21302__$1,inst_21300);
} else
{if((state_val_21303 === (2)))
{var state_21302__$1 = state_21302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21302__$1,(4),from);
} else
{if((state_val_21303 === (1)))
{var state_21302__$1 = state_21302;var statearr_21313_21423 = state_21302__$1;(statearr_21313_21423[(2)] = null);
(statearr_21313_21423[(1)] = (2));
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
});})(c__15086__auto___21417,jobs,results,process,async))
;return ((function (switch__15071__auto__,c__15086__auto___21417,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21317 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21317[(0)] = state_machine__15072__auto__);
(statearr_21317[(1)] = (1));
return statearr_21317;
});
var state_machine__15072__auto____1 = (function (state_21302){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21302);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21318){if((e21318 instanceof Object))
{var ex__15075__auto__ = e21318;var statearr_21319_21424 = state_21302;(statearr_21319_21424[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21318;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21425 = state_21302;
state_21302 = G__21425;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21302){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21417,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21320 = f__15087__auto__.call(null);(statearr_21320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21417);
return statearr_21320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21417,jobs,results,process,async))
);
var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__,jobs,results,process,async){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__,jobs,results,process,async){
return (function (state_21358){var state_val_21359 = (state_21358[(1)]);if((state_val_21359 === (7)))
{var inst_21354 = (state_21358[(2)]);var state_21358__$1 = state_21358;var statearr_21360_21426 = state_21358__$1;(statearr_21360_21426[(2)] = inst_21354);
(statearr_21360_21426[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (20)))
{var state_21358__$1 = state_21358;var statearr_21361_21427 = state_21358__$1;(statearr_21361_21427[(2)] = null);
(statearr_21361_21427[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (1)))
{var state_21358__$1 = state_21358;var statearr_21362_21428 = state_21358__$1;(statearr_21362_21428[(2)] = null);
(statearr_21362_21428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (4)))
{var inst_21323 = (state_21358[(7)]);var inst_21323__$1 = (state_21358[(2)]);var inst_21324 = (inst_21323__$1 == null);var state_21358__$1 = (function (){var statearr_21363 = state_21358;(statearr_21363[(7)] = inst_21323__$1);
return statearr_21363;
})();if(cljs.core.truth_(inst_21324))
{var statearr_21364_21429 = state_21358__$1;(statearr_21364_21429[(1)] = (5));
} else
{var statearr_21365_21430 = state_21358__$1;(statearr_21365_21430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (15)))
{var inst_21336 = (state_21358[(8)]);var state_21358__$1 = state_21358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21358__$1,(18),to,inst_21336);
} else
{if((state_val_21359 === (21)))
{var inst_21349 = (state_21358[(2)]);var state_21358__$1 = state_21358;var statearr_21366_21431 = state_21358__$1;(statearr_21366_21431[(2)] = inst_21349);
(statearr_21366_21431[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (13)))
{var inst_21351 = (state_21358[(2)]);var state_21358__$1 = (function (){var statearr_21367 = state_21358;(statearr_21367[(9)] = inst_21351);
return statearr_21367;
})();var statearr_21368_21432 = state_21358__$1;(statearr_21368_21432[(2)] = null);
(statearr_21368_21432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (6)))
{var inst_21323 = (state_21358[(7)]);var state_21358__$1 = state_21358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21358__$1,(11),inst_21323);
} else
{if((state_val_21359 === (17)))
{var inst_21344 = (state_21358[(2)]);var state_21358__$1 = state_21358;if(cljs.core.truth_(inst_21344))
{var statearr_21369_21433 = state_21358__$1;(statearr_21369_21433[(1)] = (19));
} else
{var statearr_21370_21434 = state_21358__$1;(statearr_21370_21434[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (3)))
{var inst_21356 = (state_21358[(2)]);var state_21358__$1 = state_21358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21358__$1,inst_21356);
} else
{if((state_val_21359 === (12)))
{var inst_21333 = (state_21358[(10)]);var state_21358__$1 = state_21358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21358__$1,(14),inst_21333);
} else
{if((state_val_21359 === (2)))
{var state_21358__$1 = state_21358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21358__$1,(4),results);
} else
{if((state_val_21359 === (19)))
{var state_21358__$1 = state_21358;var statearr_21371_21435 = state_21358__$1;(statearr_21371_21435[(2)] = null);
(statearr_21371_21435[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (11)))
{var inst_21333 = (state_21358[(2)]);var state_21358__$1 = (function (){var statearr_21372 = state_21358;(statearr_21372[(10)] = inst_21333);
return statearr_21372;
})();var statearr_21373_21436 = state_21358__$1;(statearr_21373_21436[(2)] = null);
(statearr_21373_21436[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (9)))
{var state_21358__$1 = state_21358;var statearr_21374_21437 = state_21358__$1;(statearr_21374_21437[(2)] = null);
(statearr_21374_21437[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (5)))
{var state_21358__$1 = state_21358;if(cljs.core.truth_(close_QMARK_))
{var statearr_21375_21438 = state_21358__$1;(statearr_21375_21438[(1)] = (8));
} else
{var statearr_21376_21439 = state_21358__$1;(statearr_21376_21439[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (14)))
{var inst_21338 = (state_21358[(11)]);var inst_21336 = (state_21358[(8)]);var inst_21336__$1 = (state_21358[(2)]);var inst_21337 = (inst_21336__$1 == null);var inst_21338__$1 = cljs.core.not.call(null,inst_21337);var state_21358__$1 = (function (){var statearr_21377 = state_21358;(statearr_21377[(11)] = inst_21338__$1);
(statearr_21377[(8)] = inst_21336__$1);
return statearr_21377;
})();if(inst_21338__$1)
{var statearr_21378_21440 = state_21358__$1;(statearr_21378_21440[(1)] = (15));
} else
{var statearr_21379_21441 = state_21358__$1;(statearr_21379_21441[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (16)))
{var inst_21338 = (state_21358[(11)]);var state_21358__$1 = state_21358;var statearr_21380_21442 = state_21358__$1;(statearr_21380_21442[(2)] = inst_21338);
(statearr_21380_21442[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (10)))
{var inst_21330 = (state_21358[(2)]);var state_21358__$1 = state_21358;var statearr_21381_21443 = state_21358__$1;(statearr_21381_21443[(2)] = inst_21330);
(statearr_21381_21443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (18)))
{var inst_21341 = (state_21358[(2)]);var state_21358__$1 = state_21358;var statearr_21382_21444 = state_21358__$1;(statearr_21382_21444[(2)] = inst_21341);
(statearr_21382_21444[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21359 === (8)))
{var inst_21327 = cljs.core.async.close_BANG_.call(null,to);var state_21358__$1 = state_21358;var statearr_21383_21445 = state_21358__$1;(statearr_21383_21445[(2)] = inst_21327);
(statearr_21383_21445[(1)] = (10));
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
});})(c__15086__auto__,jobs,results,process,async))
;return ((function (switch__15071__auto__,c__15086__auto__,jobs,results,process,async){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21387 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21387[(0)] = state_machine__15072__auto__);
(statearr_21387[(1)] = (1));
return statearr_21387;
});
var state_machine__15072__auto____1 = (function (state_21358){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21358);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21388){if((e21388 instanceof Object))
{var ex__15075__auto__ = e21388;var statearr_21389_21446 = state_21358;(statearr_21389_21446[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21447 = state_21358;
state_21358 = G__21447;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21358){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__,jobs,results,process,async))
})();var state__15088__auto__ = (function (){var statearr_21390 = f__15087__auto__.call(null);(statearr_21390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__,jobs,results,process,async))
);
return c__15086__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15086__auto___21548 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___21548,tc,fc){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___21548,tc,fc){
return (function (state_21523){var state_val_21524 = (state_21523[(1)]);if((state_val_21524 === (7)))
{var inst_21519 = (state_21523[(2)]);var state_21523__$1 = state_21523;var statearr_21525_21549 = state_21523__$1;(statearr_21525_21549[(2)] = inst_21519);
(statearr_21525_21549[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (1)))
{var state_21523__$1 = state_21523;var statearr_21526_21550 = state_21523__$1;(statearr_21526_21550[(2)] = null);
(statearr_21526_21550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (4)))
{var inst_21500 = (state_21523[(7)]);var inst_21500__$1 = (state_21523[(2)]);var inst_21501 = (inst_21500__$1 == null);var state_21523__$1 = (function (){var statearr_21527 = state_21523;(statearr_21527[(7)] = inst_21500__$1);
return statearr_21527;
})();if(cljs.core.truth_(inst_21501))
{var statearr_21528_21551 = state_21523__$1;(statearr_21528_21551[(1)] = (5));
} else
{var statearr_21529_21552 = state_21523__$1;(statearr_21529_21552[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (13)))
{var state_21523__$1 = state_21523;var statearr_21530_21553 = state_21523__$1;(statearr_21530_21553[(2)] = null);
(statearr_21530_21553[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (6)))
{var inst_21500 = (state_21523[(7)]);var inst_21506 = p.call(null,inst_21500);var state_21523__$1 = state_21523;if(cljs.core.truth_(inst_21506))
{var statearr_21531_21554 = state_21523__$1;(statearr_21531_21554[(1)] = (9));
} else
{var statearr_21532_21555 = state_21523__$1;(statearr_21532_21555[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (3)))
{var inst_21521 = (state_21523[(2)]);var state_21523__$1 = state_21523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21523__$1,inst_21521);
} else
{if((state_val_21524 === (12)))
{var state_21523__$1 = state_21523;var statearr_21533_21556 = state_21523__$1;(statearr_21533_21556[(2)] = null);
(statearr_21533_21556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (2)))
{var state_21523__$1 = state_21523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21523__$1,(4),ch);
} else
{if((state_val_21524 === (11)))
{var inst_21500 = (state_21523[(7)]);var inst_21510 = (state_21523[(2)]);var state_21523__$1 = state_21523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21523__$1,(8),inst_21510,inst_21500);
} else
{if((state_val_21524 === (9)))
{var state_21523__$1 = state_21523;var statearr_21534_21557 = state_21523__$1;(statearr_21534_21557[(2)] = tc);
(statearr_21534_21557[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (5)))
{var inst_21503 = cljs.core.async.close_BANG_.call(null,tc);var inst_21504 = cljs.core.async.close_BANG_.call(null,fc);var state_21523__$1 = (function (){var statearr_21535 = state_21523;(statearr_21535[(8)] = inst_21503);
return statearr_21535;
})();var statearr_21536_21558 = state_21523__$1;(statearr_21536_21558[(2)] = inst_21504);
(statearr_21536_21558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (14)))
{var inst_21517 = (state_21523[(2)]);var state_21523__$1 = state_21523;var statearr_21537_21559 = state_21523__$1;(statearr_21537_21559[(2)] = inst_21517);
(statearr_21537_21559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (10)))
{var state_21523__$1 = state_21523;var statearr_21538_21560 = state_21523__$1;(statearr_21538_21560[(2)] = fc);
(statearr_21538_21560[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21524 === (8)))
{var inst_21512 = (state_21523[(2)]);var state_21523__$1 = state_21523;if(cljs.core.truth_(inst_21512))
{var statearr_21539_21561 = state_21523__$1;(statearr_21539_21561[(1)] = (12));
} else
{var statearr_21540_21562 = state_21523__$1;(statearr_21540_21562[(1)] = (13));
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
});})(c__15086__auto___21548,tc,fc))
;return ((function (switch__15071__auto__,c__15086__auto___21548,tc,fc){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21544 = [null,null,null,null,null,null,null,null,null];(statearr_21544[(0)] = state_machine__15072__auto__);
(statearr_21544[(1)] = (1));
return statearr_21544;
});
var state_machine__15072__auto____1 = (function (state_21523){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21523);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21545){if((e21545 instanceof Object))
{var ex__15075__auto__ = e21545;var statearr_21546_21563 = state_21523;(statearr_21546_21563[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21545;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21564 = state_21523;
state_21523 = G__21564;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21523){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___21548,tc,fc))
})();var state__15088__auto__ = (function (){var statearr_21547 = f__15087__auto__.call(null);(statearr_21547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___21548);
return statearr_21547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___21548,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_21611){var state_val_21612 = (state_21611[(1)]);if((state_val_21612 === (7)))
{var inst_21607 = (state_21611[(2)]);var state_21611__$1 = state_21611;var statearr_21613_21629 = state_21611__$1;(statearr_21613_21629[(2)] = inst_21607);
(statearr_21613_21629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21612 === (6)))
{var inst_21597 = (state_21611[(7)]);var inst_21600 = (state_21611[(8)]);var inst_21604 = f.call(null,inst_21597,inst_21600);var inst_21597__$1 = inst_21604;var state_21611__$1 = (function (){var statearr_21614 = state_21611;(statearr_21614[(7)] = inst_21597__$1);
return statearr_21614;
})();var statearr_21615_21630 = state_21611__$1;(statearr_21615_21630[(2)] = null);
(statearr_21615_21630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21612 === (5)))
{var inst_21597 = (state_21611[(7)]);var state_21611__$1 = state_21611;var statearr_21616_21631 = state_21611__$1;(statearr_21616_21631[(2)] = inst_21597);
(statearr_21616_21631[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21612 === (4)))
{var inst_21600 = (state_21611[(8)]);var inst_21600__$1 = (state_21611[(2)]);var inst_21601 = (inst_21600__$1 == null);var state_21611__$1 = (function (){var statearr_21617 = state_21611;(statearr_21617[(8)] = inst_21600__$1);
return statearr_21617;
})();if(cljs.core.truth_(inst_21601))
{var statearr_21618_21632 = state_21611__$1;(statearr_21618_21632[(1)] = (5));
} else
{var statearr_21619_21633 = state_21611__$1;(statearr_21619_21633[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21612 === (3)))
{var inst_21609 = (state_21611[(2)]);var state_21611__$1 = state_21611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21611__$1,inst_21609);
} else
{if((state_val_21612 === (2)))
{var state_21611__$1 = state_21611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21611__$1,(4),ch);
} else
{if((state_val_21612 === (1)))
{var inst_21597 = init;var state_21611__$1 = (function (){var statearr_21620 = state_21611;(statearr_21620[(7)] = inst_21597);
return statearr_21620;
})();var statearr_21621_21634 = state_21611__$1;(statearr_21621_21634[(2)] = null);
(statearr_21621_21634[(1)] = (2));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21625 = [null,null,null,null,null,null,null,null,null];(statearr_21625[(0)] = state_machine__15072__auto__);
(statearr_21625[(1)] = (1));
return statearr_21625;
});
var state_machine__15072__auto____1 = (function (state_21611){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21611);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21626){if((e21626 instanceof Object))
{var ex__15075__auto__ = e21626;var statearr_21627_21635 = state_21611;(statearr_21627_21635[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21636 = state_21611;
state_21611 = G__21636;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21611){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_21628 = f__15087__auto__.call(null);(statearr_21628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_21710){var state_val_21711 = (state_21710[(1)]);if((state_val_21711 === (7)))
{var inst_21692 = (state_21710[(2)]);var state_21710__$1 = state_21710;var statearr_21712_21735 = state_21710__$1;(statearr_21712_21735[(2)] = inst_21692);
(statearr_21712_21735[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (1)))
{var inst_21686 = cljs.core.seq.call(null,coll);var inst_21687 = inst_21686;var state_21710__$1 = (function (){var statearr_21713 = state_21710;(statearr_21713[(7)] = inst_21687);
return statearr_21713;
})();var statearr_21714_21736 = state_21710__$1;(statearr_21714_21736[(2)] = null);
(statearr_21714_21736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (4)))
{var inst_21687 = (state_21710[(7)]);var inst_21690 = cljs.core.first.call(null,inst_21687);var state_21710__$1 = state_21710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21710__$1,(7),ch,inst_21690);
} else
{if((state_val_21711 === (13)))
{var inst_21704 = (state_21710[(2)]);var state_21710__$1 = state_21710;var statearr_21715_21737 = state_21710__$1;(statearr_21715_21737[(2)] = inst_21704);
(statearr_21715_21737[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (6)))
{var inst_21695 = (state_21710[(2)]);var state_21710__$1 = state_21710;if(cljs.core.truth_(inst_21695))
{var statearr_21716_21738 = state_21710__$1;(statearr_21716_21738[(1)] = (8));
} else
{var statearr_21717_21739 = state_21710__$1;(statearr_21717_21739[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (3)))
{var inst_21708 = (state_21710[(2)]);var state_21710__$1 = state_21710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21710__$1,inst_21708);
} else
{if((state_val_21711 === (12)))
{var state_21710__$1 = state_21710;var statearr_21718_21740 = state_21710__$1;(statearr_21718_21740[(2)] = null);
(statearr_21718_21740[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (2)))
{var inst_21687 = (state_21710[(7)]);var state_21710__$1 = state_21710;if(cljs.core.truth_(inst_21687))
{var statearr_21719_21741 = state_21710__$1;(statearr_21719_21741[(1)] = (4));
} else
{var statearr_21720_21742 = state_21710__$1;(statearr_21720_21742[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (11)))
{var inst_21701 = cljs.core.async.close_BANG_.call(null,ch);var state_21710__$1 = state_21710;var statearr_21721_21743 = state_21710__$1;(statearr_21721_21743[(2)] = inst_21701);
(statearr_21721_21743[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (9)))
{var state_21710__$1 = state_21710;if(cljs.core.truth_(close_QMARK_))
{var statearr_21722_21744 = state_21710__$1;(statearr_21722_21744[(1)] = (11));
} else
{var statearr_21723_21745 = state_21710__$1;(statearr_21723_21745[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (5)))
{var inst_21687 = (state_21710[(7)]);var state_21710__$1 = state_21710;var statearr_21724_21746 = state_21710__$1;(statearr_21724_21746[(2)] = inst_21687);
(statearr_21724_21746[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (10)))
{var inst_21706 = (state_21710[(2)]);var state_21710__$1 = state_21710;var statearr_21725_21747 = state_21710__$1;(statearr_21725_21747[(2)] = inst_21706);
(statearr_21725_21747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (8)))
{var inst_21687 = (state_21710[(7)]);var inst_21697 = cljs.core.next.call(null,inst_21687);var inst_21687__$1 = inst_21697;var state_21710__$1 = (function (){var statearr_21726 = state_21710;(statearr_21726[(7)] = inst_21687__$1);
return statearr_21726;
})();var statearr_21727_21748 = state_21710__$1;(statearr_21727_21748[(2)] = null);
(statearr_21727_21748[(1)] = (2));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_21731 = [null,null,null,null,null,null,null,null];(statearr_21731[(0)] = state_machine__15072__auto__);
(statearr_21731[(1)] = (1));
return statearr_21731;
});
var state_machine__15072__auto____1 = (function (state_21710){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_21710);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e21732){if((e21732 instanceof Object))
{var ex__15075__auto__ = e21732;var statearr_21733_21749 = state_21710;(statearr_21733_21749[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21732;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21750 = state_21710;
state_21710 = G__21750;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_21710){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_21710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_21734 = f__15087__auto__.call(null);(statearr_21734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_21734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
cljs.core.async.Mux = (function (){var obj21752 = {};return obj21752;
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
cljs.core.async.Mult = (function (){var obj21754 = {};return obj21754;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21976 = (function (cs,ch,mult,meta21977){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21977 = meta21977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21976.cljs$lang$type = true;
cljs.core.async.t21976.cljs$lang$ctorStr = "cljs.core.async/t21976";
cljs.core.async.t21976.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21976");
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21976.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21978){var self__ = this;
var _21978__$1 = this;return self__.meta21977;
});})(cs))
;
cljs.core.async.t21976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21978,meta21977__$1){var self__ = this;
var _21978__$1 = this;return (new cljs.core.async.t21976(self__.cs,self__.ch,self__.mult,meta21977__$1));
});})(cs))
;
cljs.core.async.__GT_t21976 = ((function (cs){
return (function __GT_t21976(cs__$1,ch__$1,mult__$1,meta21977){return (new cljs.core.async.t21976(cs__$1,ch__$1,mult__$1,meta21977));
});})(cs))
;
}
return (new cljs.core.async.t21976(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15086__auto___22197 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22197,cs,m,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22197,cs,m,dchan,dctr,done){
return (function (state_22109){var state_val_22110 = (state_22109[(1)]);if((state_val_22110 === (7)))
{var inst_22105 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22111_22198 = state_22109__$1;(statearr_22111_22198[(2)] = inst_22105);
(statearr_22111_22198[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (20)))
{var inst_22010 = (state_22109[(7)]);var inst_22020 = cljs.core.first.call(null,inst_22010);var inst_22021 = cljs.core.nth.call(null,inst_22020,(0),null);var inst_22022 = cljs.core.nth.call(null,inst_22020,(1),null);var state_22109__$1 = (function (){var statearr_22112 = state_22109;(statearr_22112[(8)] = inst_22021);
return statearr_22112;
})();if(cljs.core.truth_(inst_22022))
{var statearr_22113_22199 = state_22109__$1;(statearr_22113_22199[(1)] = (22));
} else
{var statearr_22114_22200 = state_22109__$1;(statearr_22114_22200[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (27)))
{var inst_22052 = (state_22109[(9)]);var inst_22050 = (state_22109[(10)]);var inst_21981 = (state_22109[(11)]);var inst_22057 = (state_22109[(12)]);var inst_22057__$1 = cljs.core._nth.call(null,inst_22050,inst_22052);var inst_22058 = cljs.core.async.put_BANG_.call(null,inst_22057__$1,inst_21981,done);var state_22109__$1 = (function (){var statearr_22115 = state_22109;(statearr_22115[(12)] = inst_22057__$1);
return statearr_22115;
})();if(cljs.core.truth_(inst_22058))
{var statearr_22116_22201 = state_22109__$1;(statearr_22116_22201[(1)] = (30));
} else
{var statearr_22117_22202 = state_22109__$1;(statearr_22117_22202[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (1)))
{var state_22109__$1 = state_22109;var statearr_22118_22203 = state_22109__$1;(statearr_22118_22203[(2)] = null);
(statearr_22118_22203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (24)))
{var inst_22010 = (state_22109[(7)]);var inst_22027 = (state_22109[(2)]);var inst_22028 = cljs.core.next.call(null,inst_22010);var inst_21990 = inst_22028;var inst_21991 = null;var inst_21992 = (0);var inst_21993 = (0);var state_22109__$1 = (function (){var statearr_22119 = state_22109;(statearr_22119[(13)] = inst_21990);
(statearr_22119[(14)] = inst_21992);
(statearr_22119[(15)] = inst_21991);
(statearr_22119[(16)] = inst_22027);
(statearr_22119[(17)] = inst_21993);
return statearr_22119;
})();var statearr_22120_22204 = state_22109__$1;(statearr_22120_22204[(2)] = null);
(statearr_22120_22204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (39)))
{var state_22109__$1 = state_22109;var statearr_22124_22205 = state_22109__$1;(statearr_22124_22205[(2)] = null);
(statearr_22124_22205[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (4)))
{var inst_21981 = (state_22109[(11)]);var inst_21981__$1 = (state_22109[(2)]);var inst_21982 = (inst_21981__$1 == null);var state_22109__$1 = (function (){var statearr_22125 = state_22109;(statearr_22125[(11)] = inst_21981__$1);
return statearr_22125;
})();if(cljs.core.truth_(inst_21982))
{var statearr_22126_22206 = state_22109__$1;(statearr_22126_22206[(1)] = (5));
} else
{var statearr_22127_22207 = state_22109__$1;(statearr_22127_22207[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (15)))
{var inst_21990 = (state_22109[(13)]);var inst_21992 = (state_22109[(14)]);var inst_21991 = (state_22109[(15)]);var inst_21993 = (state_22109[(17)]);var inst_22006 = (state_22109[(2)]);var inst_22007 = (inst_21993 + (1));var tmp22121 = inst_21990;var tmp22122 = inst_21992;var tmp22123 = inst_21991;var inst_21990__$1 = tmp22121;var inst_21991__$1 = tmp22123;var inst_21992__$1 = tmp22122;var inst_21993__$1 = inst_22007;var state_22109__$1 = (function (){var statearr_22128 = state_22109;(statearr_22128[(18)] = inst_22006);
(statearr_22128[(13)] = inst_21990__$1);
(statearr_22128[(14)] = inst_21992__$1);
(statearr_22128[(15)] = inst_21991__$1);
(statearr_22128[(17)] = inst_21993__$1);
return statearr_22128;
})();var statearr_22129_22208 = state_22109__$1;(statearr_22129_22208[(2)] = null);
(statearr_22129_22208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (21)))
{var inst_22031 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22133_22209 = state_22109__$1;(statearr_22133_22209[(2)] = inst_22031);
(statearr_22133_22209[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (31)))
{var inst_22057 = (state_22109[(12)]);var inst_22061 = done.call(null,null);var inst_22062 = cljs.core.async.untap_STAR_.call(null,m,inst_22057);var state_22109__$1 = (function (){var statearr_22134 = state_22109;(statearr_22134[(19)] = inst_22061);
return statearr_22134;
})();var statearr_22135_22210 = state_22109__$1;(statearr_22135_22210[(2)] = inst_22062);
(statearr_22135_22210[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (32)))
{var inst_22052 = (state_22109[(9)]);var inst_22050 = (state_22109[(10)]);var inst_22051 = (state_22109[(20)]);var inst_22049 = (state_22109[(21)]);var inst_22064 = (state_22109[(2)]);var inst_22065 = (inst_22052 + (1));var tmp22130 = inst_22050;var tmp22131 = inst_22051;var tmp22132 = inst_22049;var inst_22049__$1 = tmp22132;var inst_22050__$1 = tmp22130;var inst_22051__$1 = tmp22131;var inst_22052__$1 = inst_22065;var state_22109__$1 = (function (){var statearr_22136 = state_22109;(statearr_22136[(9)] = inst_22052__$1);
(statearr_22136[(22)] = inst_22064);
(statearr_22136[(10)] = inst_22050__$1);
(statearr_22136[(20)] = inst_22051__$1);
(statearr_22136[(21)] = inst_22049__$1);
return statearr_22136;
})();var statearr_22137_22211 = state_22109__$1;(statearr_22137_22211[(2)] = null);
(statearr_22137_22211[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (40)))
{var inst_22077 = (state_22109[(23)]);var inst_22081 = done.call(null,null);var inst_22082 = cljs.core.async.untap_STAR_.call(null,m,inst_22077);var state_22109__$1 = (function (){var statearr_22138 = state_22109;(statearr_22138[(24)] = inst_22081);
return statearr_22138;
})();var statearr_22139_22212 = state_22109__$1;(statearr_22139_22212[(2)] = inst_22082);
(statearr_22139_22212[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (33)))
{var inst_22068 = (state_22109[(25)]);var inst_22070 = cljs.core.chunked_seq_QMARK_.call(null,inst_22068);var state_22109__$1 = state_22109;if(inst_22070)
{var statearr_22140_22213 = state_22109__$1;(statearr_22140_22213[(1)] = (36));
} else
{var statearr_22141_22214 = state_22109__$1;(statearr_22141_22214[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (13)))
{var inst_22000 = (state_22109[(26)]);var inst_22003 = cljs.core.async.close_BANG_.call(null,inst_22000);var state_22109__$1 = state_22109;var statearr_22142_22215 = state_22109__$1;(statearr_22142_22215[(2)] = inst_22003);
(statearr_22142_22215[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (22)))
{var inst_22021 = (state_22109[(8)]);var inst_22024 = cljs.core.async.close_BANG_.call(null,inst_22021);var state_22109__$1 = state_22109;var statearr_22143_22216 = state_22109__$1;(statearr_22143_22216[(2)] = inst_22024);
(statearr_22143_22216[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (36)))
{var inst_22068 = (state_22109[(25)]);var inst_22072 = cljs.core.chunk_first.call(null,inst_22068);var inst_22073 = cljs.core.chunk_rest.call(null,inst_22068);var inst_22074 = cljs.core.count.call(null,inst_22072);var inst_22049 = inst_22073;var inst_22050 = inst_22072;var inst_22051 = inst_22074;var inst_22052 = (0);var state_22109__$1 = (function (){var statearr_22144 = state_22109;(statearr_22144[(9)] = inst_22052);
(statearr_22144[(10)] = inst_22050);
(statearr_22144[(20)] = inst_22051);
(statearr_22144[(21)] = inst_22049);
return statearr_22144;
})();var statearr_22145_22217 = state_22109__$1;(statearr_22145_22217[(2)] = null);
(statearr_22145_22217[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (41)))
{var inst_22068 = (state_22109[(25)]);var inst_22084 = (state_22109[(2)]);var inst_22085 = cljs.core.next.call(null,inst_22068);var inst_22049 = inst_22085;var inst_22050 = null;var inst_22051 = (0);var inst_22052 = (0);var state_22109__$1 = (function (){var statearr_22146 = state_22109;(statearr_22146[(9)] = inst_22052);
(statearr_22146[(10)] = inst_22050);
(statearr_22146[(20)] = inst_22051);
(statearr_22146[(21)] = inst_22049);
(statearr_22146[(27)] = inst_22084);
return statearr_22146;
})();var statearr_22147_22218 = state_22109__$1;(statearr_22147_22218[(2)] = null);
(statearr_22147_22218[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (43)))
{var state_22109__$1 = state_22109;var statearr_22148_22219 = state_22109__$1;(statearr_22148_22219[(2)] = null);
(statearr_22148_22219[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (29)))
{var inst_22093 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22149_22220 = state_22109__$1;(statearr_22149_22220[(2)] = inst_22093);
(statearr_22149_22220[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (44)))
{var inst_22102 = (state_22109[(2)]);var state_22109__$1 = (function (){var statearr_22150 = state_22109;(statearr_22150[(28)] = inst_22102);
return statearr_22150;
})();var statearr_22151_22221 = state_22109__$1;(statearr_22151_22221[(2)] = null);
(statearr_22151_22221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (6)))
{var inst_22041 = (state_22109[(29)]);var inst_22040 = cljs.core.deref.call(null,cs);var inst_22041__$1 = cljs.core.keys.call(null,inst_22040);var inst_22042 = cljs.core.count.call(null,inst_22041__$1);var inst_22043 = cljs.core.reset_BANG_.call(null,dctr,inst_22042);var inst_22048 = cljs.core.seq.call(null,inst_22041__$1);var inst_22049 = inst_22048;var inst_22050 = null;var inst_22051 = (0);var inst_22052 = (0);var state_22109__$1 = (function (){var statearr_22152 = state_22109;(statearr_22152[(29)] = inst_22041__$1);
(statearr_22152[(9)] = inst_22052);
(statearr_22152[(10)] = inst_22050);
(statearr_22152[(20)] = inst_22051);
(statearr_22152[(30)] = inst_22043);
(statearr_22152[(21)] = inst_22049);
return statearr_22152;
})();var statearr_22153_22222 = state_22109__$1;(statearr_22153_22222[(2)] = null);
(statearr_22153_22222[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (28)))
{var inst_22068 = (state_22109[(25)]);var inst_22049 = (state_22109[(21)]);var inst_22068__$1 = cljs.core.seq.call(null,inst_22049);var state_22109__$1 = (function (){var statearr_22154 = state_22109;(statearr_22154[(25)] = inst_22068__$1);
return statearr_22154;
})();if(inst_22068__$1)
{var statearr_22155_22223 = state_22109__$1;(statearr_22155_22223[(1)] = (33));
} else
{var statearr_22156_22224 = state_22109__$1;(statearr_22156_22224[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (25)))
{var inst_22052 = (state_22109[(9)]);var inst_22051 = (state_22109[(20)]);var inst_22054 = (inst_22052 < inst_22051);var inst_22055 = inst_22054;var state_22109__$1 = state_22109;if(cljs.core.truth_(inst_22055))
{var statearr_22157_22225 = state_22109__$1;(statearr_22157_22225[(1)] = (27));
} else
{var statearr_22158_22226 = state_22109__$1;(statearr_22158_22226[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (34)))
{var state_22109__$1 = state_22109;var statearr_22159_22227 = state_22109__$1;(statearr_22159_22227[(2)] = null);
(statearr_22159_22227[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (17)))
{var state_22109__$1 = state_22109;var statearr_22160_22228 = state_22109__$1;(statearr_22160_22228[(2)] = null);
(statearr_22160_22228[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (3)))
{var inst_22107 = (state_22109[(2)]);var state_22109__$1 = state_22109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22109__$1,inst_22107);
} else
{if((state_val_22110 === (12)))
{var inst_22036 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22161_22229 = state_22109__$1;(statearr_22161_22229[(2)] = inst_22036);
(statearr_22161_22229[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (2)))
{var state_22109__$1 = state_22109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22109__$1,(4),ch);
} else
{if((state_val_22110 === (23)))
{var state_22109__$1 = state_22109;var statearr_22162_22230 = state_22109__$1;(statearr_22162_22230[(2)] = null);
(statearr_22162_22230[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (35)))
{var inst_22091 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22163_22231 = state_22109__$1;(statearr_22163_22231[(2)] = inst_22091);
(statearr_22163_22231[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (19)))
{var inst_22010 = (state_22109[(7)]);var inst_22014 = cljs.core.chunk_first.call(null,inst_22010);var inst_22015 = cljs.core.chunk_rest.call(null,inst_22010);var inst_22016 = cljs.core.count.call(null,inst_22014);var inst_21990 = inst_22015;var inst_21991 = inst_22014;var inst_21992 = inst_22016;var inst_21993 = (0);var state_22109__$1 = (function (){var statearr_22164 = state_22109;(statearr_22164[(13)] = inst_21990);
(statearr_22164[(14)] = inst_21992);
(statearr_22164[(15)] = inst_21991);
(statearr_22164[(17)] = inst_21993);
return statearr_22164;
})();var statearr_22165_22232 = state_22109__$1;(statearr_22165_22232[(2)] = null);
(statearr_22165_22232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (11)))
{var inst_21990 = (state_22109[(13)]);var inst_22010 = (state_22109[(7)]);var inst_22010__$1 = cljs.core.seq.call(null,inst_21990);var state_22109__$1 = (function (){var statearr_22166 = state_22109;(statearr_22166[(7)] = inst_22010__$1);
return statearr_22166;
})();if(inst_22010__$1)
{var statearr_22167_22233 = state_22109__$1;(statearr_22167_22233[(1)] = (16));
} else
{var statearr_22168_22234 = state_22109__$1;(statearr_22168_22234[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (9)))
{var inst_22038 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22169_22235 = state_22109__$1;(statearr_22169_22235[(2)] = inst_22038);
(statearr_22169_22235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (5)))
{var inst_21988 = cljs.core.deref.call(null,cs);var inst_21989 = cljs.core.seq.call(null,inst_21988);var inst_21990 = inst_21989;var inst_21991 = null;var inst_21992 = (0);var inst_21993 = (0);var state_22109__$1 = (function (){var statearr_22170 = state_22109;(statearr_22170[(13)] = inst_21990);
(statearr_22170[(14)] = inst_21992);
(statearr_22170[(15)] = inst_21991);
(statearr_22170[(17)] = inst_21993);
return statearr_22170;
})();var statearr_22171_22236 = state_22109__$1;(statearr_22171_22236[(2)] = null);
(statearr_22171_22236[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (14)))
{var state_22109__$1 = state_22109;var statearr_22172_22237 = state_22109__$1;(statearr_22172_22237[(2)] = null);
(statearr_22172_22237[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (45)))
{var inst_22099 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22173_22238 = state_22109__$1;(statearr_22173_22238[(2)] = inst_22099);
(statearr_22173_22238[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (26)))
{var inst_22041 = (state_22109[(29)]);var inst_22095 = (state_22109[(2)]);var inst_22096 = cljs.core.seq.call(null,inst_22041);var state_22109__$1 = (function (){var statearr_22174 = state_22109;(statearr_22174[(31)] = inst_22095);
return statearr_22174;
})();if(inst_22096)
{var statearr_22175_22239 = state_22109__$1;(statearr_22175_22239[(1)] = (42));
} else
{var statearr_22176_22240 = state_22109__$1;(statearr_22176_22240[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (16)))
{var inst_22010 = (state_22109[(7)]);var inst_22012 = cljs.core.chunked_seq_QMARK_.call(null,inst_22010);var state_22109__$1 = state_22109;if(inst_22012)
{var statearr_22177_22241 = state_22109__$1;(statearr_22177_22241[(1)] = (19));
} else
{var statearr_22178_22242 = state_22109__$1;(statearr_22178_22242[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (38)))
{var inst_22088 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22179_22243 = state_22109__$1;(statearr_22179_22243[(2)] = inst_22088);
(statearr_22179_22243[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (30)))
{var state_22109__$1 = state_22109;var statearr_22180_22244 = state_22109__$1;(statearr_22180_22244[(2)] = null);
(statearr_22180_22244[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (10)))
{var inst_21991 = (state_22109[(15)]);var inst_21993 = (state_22109[(17)]);var inst_21999 = cljs.core._nth.call(null,inst_21991,inst_21993);var inst_22000 = cljs.core.nth.call(null,inst_21999,(0),null);var inst_22001 = cljs.core.nth.call(null,inst_21999,(1),null);var state_22109__$1 = (function (){var statearr_22181 = state_22109;(statearr_22181[(26)] = inst_22000);
return statearr_22181;
})();if(cljs.core.truth_(inst_22001))
{var statearr_22182_22245 = state_22109__$1;(statearr_22182_22245[(1)] = (13));
} else
{var statearr_22183_22246 = state_22109__$1;(statearr_22183_22246[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (18)))
{var inst_22034 = (state_22109[(2)]);var state_22109__$1 = state_22109;var statearr_22184_22247 = state_22109__$1;(statearr_22184_22247[(2)] = inst_22034);
(statearr_22184_22247[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (42)))
{var state_22109__$1 = state_22109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22109__$1,(45),dchan);
} else
{if((state_val_22110 === (37)))
{var inst_22068 = (state_22109[(25)]);var inst_22077 = (state_22109[(23)]);var inst_21981 = (state_22109[(11)]);var inst_22077__$1 = cljs.core.first.call(null,inst_22068);var inst_22078 = cljs.core.async.put_BANG_.call(null,inst_22077__$1,inst_21981,done);var state_22109__$1 = (function (){var statearr_22185 = state_22109;(statearr_22185[(23)] = inst_22077__$1);
return statearr_22185;
})();if(cljs.core.truth_(inst_22078))
{var statearr_22186_22248 = state_22109__$1;(statearr_22186_22248[(1)] = (39));
} else
{var statearr_22187_22249 = state_22109__$1;(statearr_22187_22249[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22110 === (8)))
{var inst_21992 = (state_22109[(14)]);var inst_21993 = (state_22109[(17)]);var inst_21995 = (inst_21993 < inst_21992);var inst_21996 = inst_21995;var state_22109__$1 = state_22109;if(cljs.core.truth_(inst_21996))
{var statearr_22188_22250 = state_22109__$1;(statearr_22188_22250[(1)] = (10));
} else
{var statearr_22189_22251 = state_22109__$1;(statearr_22189_22251[(1)] = (11));
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
});})(c__15086__auto___22197,cs,m,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___22197,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22193[(0)] = state_machine__15072__auto__);
(statearr_22193[(1)] = (1));
return statearr_22193;
});
var state_machine__15072__auto____1 = (function (state_22109){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22109);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22194){if((e22194 instanceof Object))
{var ex__15075__auto__ = e22194;var statearr_22195_22252 = state_22109;(statearr_22195_22252[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22194;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22253 = state_22109;
state_22109 = G__22253;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22109){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22197,cs,m,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_22196 = f__15087__auto__.call(null);(statearr_22196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22197);
return statearr_22196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22197,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj22255 = {};return obj22255;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22256){var map__22261 = p__22256;var map__22261__$1 = ((cljs.core.seq_QMARK_.call(null,map__22261))?cljs.core.apply.call(null,cljs.core.hash_map,map__22261):map__22261);var opts = map__22261__$1;var statearr_22262_22265 = state;(statearr_22262_22265[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22261,map__22261__$1,opts){
return (function (val){var statearr_22263_22266 = state;(statearr_22263_22266[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22261,map__22261__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_22264_22267 = state;(statearr_22264_22267[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22256 = null;if (arguments.length > 3) {
  p__22256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22256);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22268){
var state = cljs.core.first(arglist__22268);
arglist__22268 = cljs.core.next(arglist__22268);
var cont_block = cljs.core.first(arglist__22268);
arglist__22268 = cljs.core.next(arglist__22268);
var ports = cljs.core.first(arglist__22268);
var p__22256 = cljs.core.rest(arglist__22268);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22256);
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
;var m = (function (){if(typeof cljs.core.async.t22388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22388 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22389){
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
this.meta22389 = meta22389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22388.cljs$lang$type = true;
cljs.core.async.t22388.cljs$lang$ctorStr = "cljs.core.async/t22388";
cljs.core.async.t22388.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22388");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22390){var self__ = this;
var _22390__$1 = this;return self__.meta22389;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22390,meta22389__$1){var self__ = this;
var _22390__$1 = this;return (new cljs.core.async.t22388(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22389__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22388 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22389){return (new cljs.core.async.t22388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22389));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22388(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15086__auto___22507 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22460){var state_val_22461 = (state_22460[(1)]);if((state_val_22461 === (7)))
{var inst_22404 = (state_22460[(7)]);var inst_22409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22404);var state_22460__$1 = state_22460;var statearr_22462_22508 = state_22460__$1;(statearr_22462_22508[(2)] = inst_22409);
(statearr_22462_22508[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (20)))
{var inst_22419 = (state_22460[(8)]);var state_22460__$1 = state_22460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22460__$1,(23),out,inst_22419);
} else
{if((state_val_22461 === (1)))
{var inst_22394 = (state_22460[(9)]);var inst_22394__$1 = calc_state.call(null);var inst_22395 = cljs.core.seq_QMARK_.call(null,inst_22394__$1);var state_22460__$1 = (function (){var statearr_22463 = state_22460;(statearr_22463[(9)] = inst_22394__$1);
return statearr_22463;
})();if(inst_22395)
{var statearr_22464_22509 = state_22460__$1;(statearr_22464_22509[(1)] = (2));
} else
{var statearr_22465_22510 = state_22460__$1;(statearr_22465_22510[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (24)))
{var inst_22412 = (state_22460[(10)]);var inst_22404 = inst_22412;var state_22460__$1 = (function (){var statearr_22466 = state_22460;(statearr_22466[(7)] = inst_22404);
return statearr_22466;
})();var statearr_22467_22511 = state_22460__$1;(statearr_22467_22511[(2)] = null);
(statearr_22467_22511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (4)))
{var inst_22394 = (state_22460[(9)]);var inst_22400 = (state_22460[(2)]);var inst_22401 = cljs.core.get.call(null,inst_22400,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22402 = cljs.core.get.call(null,inst_22400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22403 = cljs.core.get.call(null,inst_22400,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22404 = inst_22394;var state_22460__$1 = (function (){var statearr_22468 = state_22460;(statearr_22468[(11)] = inst_22403);
(statearr_22468[(12)] = inst_22401);
(statearr_22468[(13)] = inst_22402);
(statearr_22468[(7)] = inst_22404);
return statearr_22468;
})();var statearr_22469_22512 = state_22460__$1;(statearr_22469_22512[(2)] = null);
(statearr_22469_22512[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (15)))
{var state_22460__$1 = state_22460;var statearr_22470_22513 = state_22460__$1;(statearr_22470_22513[(2)] = null);
(statearr_22470_22513[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (21)))
{var inst_22412 = (state_22460[(10)]);var inst_22404 = inst_22412;var state_22460__$1 = (function (){var statearr_22471 = state_22460;(statearr_22471[(7)] = inst_22404);
return statearr_22471;
})();var statearr_22472_22514 = state_22460__$1;(statearr_22472_22514[(2)] = null);
(statearr_22472_22514[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (13)))
{var inst_22456 = (state_22460[(2)]);var state_22460__$1 = state_22460;var statearr_22473_22515 = state_22460__$1;(statearr_22473_22515[(2)] = inst_22456);
(statearr_22473_22515[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (22)))
{var inst_22454 = (state_22460[(2)]);var state_22460__$1 = state_22460;var statearr_22474_22516 = state_22460__$1;(statearr_22474_22516[(2)] = inst_22454);
(statearr_22474_22516[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (6)))
{var inst_22458 = (state_22460[(2)]);var state_22460__$1 = state_22460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22460__$1,inst_22458);
} else
{if((state_val_22461 === (25)))
{var state_22460__$1 = state_22460;var statearr_22475_22517 = state_22460__$1;(statearr_22475_22517[(2)] = null);
(statearr_22475_22517[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (17)))
{var inst_22434 = (state_22460[(14)]);var state_22460__$1 = state_22460;var statearr_22476_22518 = state_22460__$1;(statearr_22476_22518[(2)] = inst_22434);
(statearr_22476_22518[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (3)))
{var inst_22394 = (state_22460[(9)]);var state_22460__$1 = state_22460;var statearr_22477_22519 = state_22460__$1;(statearr_22477_22519[(2)] = inst_22394);
(statearr_22477_22519[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (12)))
{var inst_22434 = (state_22460[(14)]);var inst_22420 = (state_22460[(15)]);var inst_22415 = (state_22460[(16)]);var inst_22434__$1 = inst_22415.call(null,inst_22420);var state_22460__$1 = (function (){var statearr_22478 = state_22460;(statearr_22478[(14)] = inst_22434__$1);
return statearr_22478;
})();if(cljs.core.truth_(inst_22434__$1))
{var statearr_22479_22520 = state_22460__$1;(statearr_22479_22520[(1)] = (17));
} else
{var statearr_22480_22521 = state_22460__$1;(statearr_22480_22521[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (2)))
{var inst_22394 = (state_22460[(9)]);var inst_22397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22394);var state_22460__$1 = state_22460;var statearr_22481_22522 = state_22460__$1;(statearr_22481_22522[(2)] = inst_22397);
(statearr_22481_22522[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (23)))
{var inst_22445 = (state_22460[(2)]);var state_22460__$1 = state_22460;if(cljs.core.truth_(inst_22445))
{var statearr_22482_22523 = state_22460__$1;(statearr_22482_22523[(1)] = (24));
} else
{var statearr_22483_22524 = state_22460__$1;(statearr_22483_22524[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (19)))
{var inst_22442 = (state_22460[(2)]);var state_22460__$1 = state_22460;if(cljs.core.truth_(inst_22442))
{var statearr_22484_22525 = state_22460__$1;(statearr_22484_22525[(1)] = (20));
} else
{var statearr_22485_22526 = state_22460__$1;(statearr_22485_22526[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (11)))
{var inst_22419 = (state_22460[(8)]);var inst_22425 = (inst_22419 == null);var state_22460__$1 = state_22460;if(cljs.core.truth_(inst_22425))
{var statearr_22486_22527 = state_22460__$1;(statearr_22486_22527[(1)] = (14));
} else
{var statearr_22487_22528 = state_22460__$1;(statearr_22487_22528[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (9)))
{var inst_22412 = (state_22460[(10)]);var inst_22412__$1 = (state_22460[(2)]);var inst_22413 = cljs.core.get.call(null,inst_22412__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22414 = cljs.core.get.call(null,inst_22412__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22415 = cljs.core.get.call(null,inst_22412__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22460__$1 = (function (){var statearr_22488 = state_22460;(statearr_22488[(10)] = inst_22412__$1);
(statearr_22488[(17)] = inst_22414);
(statearr_22488[(16)] = inst_22415);
return statearr_22488;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_22460__$1,(10),inst_22413);
} else
{if((state_val_22461 === (5)))
{var inst_22404 = (state_22460[(7)]);var inst_22407 = cljs.core.seq_QMARK_.call(null,inst_22404);var state_22460__$1 = state_22460;if(inst_22407)
{var statearr_22489_22529 = state_22460__$1;(statearr_22489_22529[(1)] = (7));
} else
{var statearr_22490_22530 = state_22460__$1;(statearr_22490_22530[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (14)))
{var inst_22420 = (state_22460[(15)]);var inst_22427 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22420);var state_22460__$1 = state_22460;var statearr_22491_22531 = state_22460__$1;(statearr_22491_22531[(2)] = inst_22427);
(statearr_22491_22531[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (26)))
{var inst_22450 = (state_22460[(2)]);var state_22460__$1 = state_22460;var statearr_22492_22532 = state_22460__$1;(statearr_22492_22532[(2)] = inst_22450);
(statearr_22492_22532[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (16)))
{var inst_22430 = (state_22460[(2)]);var inst_22431 = calc_state.call(null);var inst_22404 = inst_22431;var state_22460__$1 = (function (){var statearr_22493 = state_22460;(statearr_22493[(18)] = inst_22430);
(statearr_22493[(7)] = inst_22404);
return statearr_22493;
})();var statearr_22494_22533 = state_22460__$1;(statearr_22494_22533[(2)] = null);
(statearr_22494_22533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (10)))
{var inst_22419 = (state_22460[(8)]);var inst_22420 = (state_22460[(15)]);var inst_22418 = (state_22460[(2)]);var inst_22419__$1 = cljs.core.nth.call(null,inst_22418,(0),null);var inst_22420__$1 = cljs.core.nth.call(null,inst_22418,(1),null);var inst_22421 = (inst_22419__$1 == null);var inst_22422 = cljs.core._EQ_.call(null,inst_22420__$1,change);var inst_22423 = (inst_22421) || (inst_22422);var state_22460__$1 = (function (){var statearr_22495 = state_22460;(statearr_22495[(8)] = inst_22419__$1);
(statearr_22495[(15)] = inst_22420__$1);
return statearr_22495;
})();if(cljs.core.truth_(inst_22423))
{var statearr_22496_22534 = state_22460__$1;(statearr_22496_22534[(1)] = (11));
} else
{var statearr_22497_22535 = state_22460__$1;(statearr_22497_22535[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (18)))
{var inst_22414 = (state_22460[(17)]);var inst_22420 = (state_22460[(15)]);var inst_22415 = (state_22460[(16)]);var inst_22437 = cljs.core.empty_QMARK_.call(null,inst_22415);var inst_22438 = inst_22414.call(null,inst_22420);var inst_22439 = cljs.core.not.call(null,inst_22438);var inst_22440 = (inst_22437) && (inst_22439);var state_22460__$1 = state_22460;var statearr_22498_22536 = state_22460__$1;(statearr_22498_22536[(2)] = inst_22440);
(statearr_22498_22536[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22461 === (8)))
{var inst_22404 = (state_22460[(7)]);var state_22460__$1 = state_22460;var statearr_22499_22537 = state_22460__$1;(statearr_22499_22537[(2)] = inst_22404);
(statearr_22499_22537[(1)] = (9));
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
});})(c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15071__auto__,c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22503[(0)] = state_machine__15072__auto__);
(statearr_22503[(1)] = (1));
return statearr_22503;
});
var state_machine__15072__auto____1 = (function (state_22460){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22460);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22504){if((e22504 instanceof Object))
{var ex__15075__auto__ = e22504;var statearr_22505_22538 = state_22460;(statearr_22505_22538[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22460);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22504;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22539 = state_22460;
state_22460 = G__22539;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22460){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15088__auto__ = (function (){var statearr_22506 = f__15087__auto__.call(null);(statearr_22506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22507);
return statearr_22506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj22541 = {};return obj22541;
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
return (function (p1__22542_SHARP_){if(cljs.core.truth_(p1__22542_SHARP_.call(null,topic)))
{return p1__22542_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22542_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22665 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22666){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22666 = meta22666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22665.cljs$lang$type = true;
cljs.core.async.t22665.cljs$lang$ctorStr = "cljs.core.async/t22665";
cljs.core.async.t22665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22665");
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22667){var self__ = this;
var _22667__$1 = this;return self__.meta22666;
});})(mults,ensure_mult))
;
cljs.core.async.t22665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22667,meta22666__$1){var self__ = this;
var _22667__$1 = this;return (new cljs.core.async.t22665(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22666__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22665 = ((function (mults,ensure_mult){
return (function __GT_t22665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22666){return (new cljs.core.async.t22665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22666));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22665(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15086__auto___22787 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22787,mults,ensure_mult,p){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22787,mults,ensure_mult,p){
return (function (state_22739){var state_val_22740 = (state_22739[(1)]);if((state_val_22740 === (7)))
{var inst_22735 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22741_22788 = state_22739__$1;(statearr_22741_22788[(2)] = inst_22735);
(statearr_22741_22788[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (20)))
{var state_22739__$1 = state_22739;var statearr_22742_22789 = state_22739__$1;(statearr_22742_22789[(2)] = null);
(statearr_22742_22789[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (1)))
{var state_22739__$1 = state_22739;var statearr_22743_22790 = state_22739__$1;(statearr_22743_22790[(2)] = null);
(statearr_22743_22790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (24)))
{var inst_22718 = (state_22739[(7)]);var inst_22727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22718);var state_22739__$1 = state_22739;var statearr_22744_22791 = state_22739__$1;(statearr_22744_22791[(2)] = inst_22727);
(statearr_22744_22791[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (4)))
{var inst_22670 = (state_22739[(8)]);var inst_22670__$1 = (state_22739[(2)]);var inst_22671 = (inst_22670__$1 == null);var state_22739__$1 = (function (){var statearr_22745 = state_22739;(statearr_22745[(8)] = inst_22670__$1);
return statearr_22745;
})();if(cljs.core.truth_(inst_22671))
{var statearr_22746_22792 = state_22739__$1;(statearr_22746_22792[(1)] = (5));
} else
{var statearr_22747_22793 = state_22739__$1;(statearr_22747_22793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (15)))
{var inst_22712 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22748_22794 = state_22739__$1;(statearr_22748_22794[(2)] = inst_22712);
(statearr_22748_22794[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (21)))
{var inst_22732 = (state_22739[(2)]);var state_22739__$1 = (function (){var statearr_22749 = state_22739;(statearr_22749[(9)] = inst_22732);
return statearr_22749;
})();var statearr_22750_22795 = state_22739__$1;(statearr_22750_22795[(2)] = null);
(statearr_22750_22795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (13)))
{var inst_22694 = (state_22739[(10)]);var inst_22696 = cljs.core.chunked_seq_QMARK_.call(null,inst_22694);var state_22739__$1 = state_22739;if(inst_22696)
{var statearr_22751_22796 = state_22739__$1;(statearr_22751_22796[(1)] = (16));
} else
{var statearr_22752_22797 = state_22739__$1;(statearr_22752_22797[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (22)))
{var inst_22724 = (state_22739[(2)]);var state_22739__$1 = state_22739;if(cljs.core.truth_(inst_22724))
{var statearr_22753_22798 = state_22739__$1;(statearr_22753_22798[(1)] = (23));
} else
{var statearr_22754_22799 = state_22739__$1;(statearr_22754_22799[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (6)))
{var inst_22718 = (state_22739[(7)]);var inst_22720 = (state_22739[(11)]);var inst_22670 = (state_22739[(8)]);var inst_22718__$1 = topic_fn.call(null,inst_22670);var inst_22719 = cljs.core.deref.call(null,mults);var inst_22720__$1 = cljs.core.get.call(null,inst_22719,inst_22718__$1);var state_22739__$1 = (function (){var statearr_22755 = state_22739;(statearr_22755[(7)] = inst_22718__$1);
(statearr_22755[(11)] = inst_22720__$1);
return statearr_22755;
})();if(cljs.core.truth_(inst_22720__$1))
{var statearr_22756_22800 = state_22739__$1;(statearr_22756_22800[(1)] = (19));
} else
{var statearr_22757_22801 = state_22739__$1;(statearr_22757_22801[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (25)))
{var inst_22729 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22758_22802 = state_22739__$1;(statearr_22758_22802[(2)] = inst_22729);
(statearr_22758_22802[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (17)))
{var inst_22694 = (state_22739[(10)]);var inst_22703 = cljs.core.first.call(null,inst_22694);var inst_22704 = cljs.core.async.muxch_STAR_.call(null,inst_22703);var inst_22705 = cljs.core.async.close_BANG_.call(null,inst_22704);var inst_22706 = cljs.core.next.call(null,inst_22694);var inst_22680 = inst_22706;var inst_22681 = null;var inst_22682 = (0);var inst_22683 = (0);var state_22739__$1 = (function (){var statearr_22759 = state_22739;(statearr_22759[(12)] = inst_22680);
(statearr_22759[(13)] = inst_22682);
(statearr_22759[(14)] = inst_22705);
(statearr_22759[(15)] = inst_22683);
(statearr_22759[(16)] = inst_22681);
return statearr_22759;
})();var statearr_22760_22803 = state_22739__$1;(statearr_22760_22803[(2)] = null);
(statearr_22760_22803[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (3)))
{var inst_22737 = (state_22739[(2)]);var state_22739__$1 = state_22739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22739__$1,inst_22737);
} else
{if((state_val_22740 === (12)))
{var inst_22714 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22761_22804 = state_22739__$1;(statearr_22761_22804[(2)] = inst_22714);
(statearr_22761_22804[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (2)))
{var state_22739__$1 = state_22739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22739__$1,(4),ch);
} else
{if((state_val_22740 === (23)))
{var state_22739__$1 = state_22739;var statearr_22762_22805 = state_22739__$1;(statearr_22762_22805[(2)] = null);
(statearr_22762_22805[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (19)))
{var inst_22720 = (state_22739[(11)]);var inst_22670 = (state_22739[(8)]);var inst_22722 = cljs.core.async.muxch_STAR_.call(null,inst_22720);var state_22739__$1 = state_22739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22739__$1,(22),inst_22722,inst_22670);
} else
{if((state_val_22740 === (11)))
{var inst_22680 = (state_22739[(12)]);var inst_22694 = (state_22739[(10)]);var inst_22694__$1 = cljs.core.seq.call(null,inst_22680);var state_22739__$1 = (function (){var statearr_22763 = state_22739;(statearr_22763[(10)] = inst_22694__$1);
return statearr_22763;
})();if(inst_22694__$1)
{var statearr_22764_22806 = state_22739__$1;(statearr_22764_22806[(1)] = (13));
} else
{var statearr_22765_22807 = state_22739__$1;(statearr_22765_22807[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (9)))
{var inst_22716 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22766_22808 = state_22739__$1;(statearr_22766_22808[(2)] = inst_22716);
(statearr_22766_22808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (5)))
{var inst_22677 = cljs.core.deref.call(null,mults);var inst_22678 = cljs.core.vals.call(null,inst_22677);var inst_22679 = cljs.core.seq.call(null,inst_22678);var inst_22680 = inst_22679;var inst_22681 = null;var inst_22682 = (0);var inst_22683 = (0);var state_22739__$1 = (function (){var statearr_22767 = state_22739;(statearr_22767[(12)] = inst_22680);
(statearr_22767[(13)] = inst_22682);
(statearr_22767[(15)] = inst_22683);
(statearr_22767[(16)] = inst_22681);
return statearr_22767;
})();var statearr_22768_22809 = state_22739__$1;(statearr_22768_22809[(2)] = null);
(statearr_22768_22809[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (14)))
{var state_22739__$1 = state_22739;var statearr_22772_22810 = state_22739__$1;(statearr_22772_22810[(2)] = null);
(statearr_22772_22810[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (16)))
{var inst_22694 = (state_22739[(10)]);var inst_22698 = cljs.core.chunk_first.call(null,inst_22694);var inst_22699 = cljs.core.chunk_rest.call(null,inst_22694);var inst_22700 = cljs.core.count.call(null,inst_22698);var inst_22680 = inst_22699;var inst_22681 = inst_22698;var inst_22682 = inst_22700;var inst_22683 = (0);var state_22739__$1 = (function (){var statearr_22773 = state_22739;(statearr_22773[(12)] = inst_22680);
(statearr_22773[(13)] = inst_22682);
(statearr_22773[(15)] = inst_22683);
(statearr_22773[(16)] = inst_22681);
return statearr_22773;
})();var statearr_22774_22811 = state_22739__$1;(statearr_22774_22811[(2)] = null);
(statearr_22774_22811[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (10)))
{var inst_22680 = (state_22739[(12)]);var inst_22682 = (state_22739[(13)]);var inst_22683 = (state_22739[(15)]);var inst_22681 = (state_22739[(16)]);var inst_22688 = cljs.core._nth.call(null,inst_22681,inst_22683);var inst_22689 = cljs.core.async.muxch_STAR_.call(null,inst_22688);var inst_22690 = cljs.core.async.close_BANG_.call(null,inst_22689);var inst_22691 = (inst_22683 + (1));var tmp22769 = inst_22680;var tmp22770 = inst_22682;var tmp22771 = inst_22681;var inst_22680__$1 = tmp22769;var inst_22681__$1 = tmp22771;var inst_22682__$1 = tmp22770;var inst_22683__$1 = inst_22691;var state_22739__$1 = (function (){var statearr_22775 = state_22739;(statearr_22775[(12)] = inst_22680__$1);
(statearr_22775[(17)] = inst_22690);
(statearr_22775[(13)] = inst_22682__$1);
(statearr_22775[(15)] = inst_22683__$1);
(statearr_22775[(16)] = inst_22681__$1);
return statearr_22775;
})();var statearr_22776_22812 = state_22739__$1;(statearr_22776_22812[(2)] = null);
(statearr_22776_22812[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (18)))
{var inst_22709 = (state_22739[(2)]);var state_22739__$1 = state_22739;var statearr_22777_22813 = state_22739__$1;(statearr_22777_22813[(2)] = inst_22709);
(statearr_22777_22813[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22740 === (8)))
{var inst_22682 = (state_22739[(13)]);var inst_22683 = (state_22739[(15)]);var inst_22685 = (inst_22683 < inst_22682);var inst_22686 = inst_22685;var state_22739__$1 = state_22739;if(cljs.core.truth_(inst_22686))
{var statearr_22778_22814 = state_22739__$1;(statearr_22778_22814[(1)] = (10));
} else
{var statearr_22779_22815 = state_22739__$1;(statearr_22779_22815[(1)] = (11));
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
});})(c__15086__auto___22787,mults,ensure_mult,p))
;return ((function (switch__15071__auto__,c__15086__auto___22787,mults,ensure_mult,p){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22783[(0)] = state_machine__15072__auto__);
(statearr_22783[(1)] = (1));
return statearr_22783;
});
var state_machine__15072__auto____1 = (function (state_22739){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22739);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object))
{var ex__15075__auto__ = e22784;var statearr_22785_22816 = state_22739;(statearr_22785_22816[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22784;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22817 = state_22739;
state_22739 = G__22817;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22739){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22787,mults,ensure_mult,p))
})();var state__15088__auto__ = (function (){var statearr_22786 = f__15087__auto__.call(null);(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22787);
return statearr_22786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22787,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15086__auto___22954 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22924){var state_val_22925 = (state_22924[(1)]);if((state_val_22925 === (7)))
{var state_22924__$1 = state_22924;var statearr_22926_22955 = state_22924__$1;(statearr_22926_22955[(2)] = null);
(statearr_22926_22955[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (1)))
{var state_22924__$1 = state_22924;var statearr_22927_22956 = state_22924__$1;(statearr_22927_22956[(2)] = null);
(statearr_22927_22956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (4)))
{var inst_22888 = (state_22924[(7)]);var inst_22890 = (inst_22888 < cnt);var state_22924__$1 = state_22924;if(cljs.core.truth_(inst_22890))
{var statearr_22928_22957 = state_22924__$1;(statearr_22928_22957[(1)] = (6));
} else
{var statearr_22929_22958 = state_22924__$1;(statearr_22929_22958[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (15)))
{var inst_22920 = (state_22924[(2)]);var state_22924__$1 = state_22924;var statearr_22930_22959 = state_22924__$1;(statearr_22930_22959[(2)] = inst_22920);
(statearr_22930_22959[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (13)))
{var inst_22913 = cljs.core.async.close_BANG_.call(null,out);var state_22924__$1 = state_22924;var statearr_22931_22960 = state_22924__$1;(statearr_22931_22960[(2)] = inst_22913);
(statearr_22931_22960[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (6)))
{var state_22924__$1 = state_22924;var statearr_22932_22961 = state_22924__$1;(statearr_22932_22961[(2)] = null);
(statearr_22932_22961[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (3)))
{var inst_22922 = (state_22924[(2)]);var state_22924__$1 = state_22924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else
{if((state_val_22925 === (12)))
{var inst_22910 = (state_22924[(8)]);var inst_22910__$1 = (state_22924[(2)]);var inst_22911 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22910__$1);var state_22924__$1 = (function (){var statearr_22933 = state_22924;(statearr_22933[(8)] = inst_22910__$1);
return statearr_22933;
})();if(cljs.core.truth_(inst_22911))
{var statearr_22934_22962 = state_22924__$1;(statearr_22934_22962[(1)] = (13));
} else
{var statearr_22935_22963 = state_22924__$1;(statearr_22935_22963[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (2)))
{var inst_22887 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22888 = (0);var state_22924__$1 = (function (){var statearr_22936 = state_22924;(statearr_22936[(9)] = inst_22887);
(statearr_22936[(7)] = inst_22888);
return statearr_22936;
})();var statearr_22937_22964 = state_22924__$1;(statearr_22937_22964[(2)] = null);
(statearr_22937_22964[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (11)))
{var inst_22888 = (state_22924[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22924,(10),Object,null,(9));var inst_22897 = chs__$1.call(null,inst_22888);var inst_22898 = done.call(null,inst_22888);var inst_22899 = cljs.core.async.take_BANG_.call(null,inst_22897,inst_22898);var state_22924__$1 = state_22924;var statearr_22938_22965 = state_22924__$1;(statearr_22938_22965[(2)] = inst_22899);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (9)))
{var inst_22888 = (state_22924[(7)]);var inst_22901 = (state_22924[(2)]);var inst_22902 = (inst_22888 + (1));var inst_22888__$1 = inst_22902;var state_22924__$1 = (function (){var statearr_22939 = state_22924;(statearr_22939[(10)] = inst_22901);
(statearr_22939[(7)] = inst_22888__$1);
return statearr_22939;
})();var statearr_22940_22966 = state_22924__$1;(statearr_22940_22966[(2)] = null);
(statearr_22940_22966[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (5)))
{var inst_22908 = (state_22924[(2)]);var state_22924__$1 = (function (){var statearr_22941 = state_22924;(statearr_22941[(11)] = inst_22908);
return statearr_22941;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(12),dchan);
} else
{if((state_val_22925 === (14)))
{var inst_22910 = (state_22924[(8)]);var inst_22915 = cljs.core.apply.call(null,f,inst_22910);var state_22924__$1 = state_22924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(16),out,inst_22915);
} else
{if((state_val_22925 === (16)))
{var inst_22917 = (state_22924[(2)]);var state_22924__$1 = (function (){var statearr_22942 = state_22924;(statearr_22942[(12)] = inst_22917);
return statearr_22942;
})();var statearr_22943_22967 = state_22924__$1;(statearr_22943_22967[(2)] = null);
(statearr_22943_22967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (10)))
{var inst_22892 = (state_22924[(2)]);var inst_22893 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22924__$1 = (function (){var statearr_22944 = state_22924;(statearr_22944[(13)] = inst_22892);
return statearr_22944;
})();var statearr_22945_22968 = state_22924__$1;(statearr_22945_22968[(2)] = inst_22893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22925 === (8)))
{var inst_22906 = (state_22924[(2)]);var state_22924__$1 = state_22924;var statearr_22946_22969 = state_22924__$1;(statearr_22946_22969[(2)] = inst_22906);
(statearr_22946_22969[(1)] = (5));
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
});})(c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15071__auto__,c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_22950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22950[(0)] = state_machine__15072__auto__);
(statearr_22950[(1)] = (1));
return statearr_22950;
});
var state_machine__15072__auto____1 = (function (state_22924){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_22924);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e22951){if((e22951 instanceof Object))
{var ex__15075__auto__ = e22951;var statearr_22952_22970 = state_22924;(statearr_22952_22970[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22951;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22971 = state_22924;
state_22924 = G__22971;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15088__auto__ = (function (){var statearr_22953 = f__15087__auto__.call(null);(statearr_22953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___22954);
return statearr_22953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___22954,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23079 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23079,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23079,out){
return (function (state_23055){var state_val_23056 = (state_23055[(1)]);if((state_val_23056 === (7)))
{var inst_23034 = (state_23055[(7)]);var inst_23035 = (state_23055[(8)]);var inst_23034__$1 = (state_23055[(2)]);var inst_23035__$1 = cljs.core.nth.call(null,inst_23034__$1,(0),null);var inst_23036 = cljs.core.nth.call(null,inst_23034__$1,(1),null);var inst_23037 = (inst_23035__$1 == null);var state_23055__$1 = (function (){var statearr_23057 = state_23055;(statearr_23057[(7)] = inst_23034__$1);
(statearr_23057[(8)] = inst_23035__$1);
(statearr_23057[(9)] = inst_23036);
return statearr_23057;
})();if(cljs.core.truth_(inst_23037))
{var statearr_23058_23080 = state_23055__$1;(statearr_23058_23080[(1)] = (8));
} else
{var statearr_23059_23081 = state_23055__$1;(statearr_23059_23081[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (1)))
{var inst_23026 = cljs.core.vec.call(null,chs);var inst_23027 = inst_23026;var state_23055__$1 = (function (){var statearr_23060 = state_23055;(statearr_23060[(10)] = inst_23027);
return statearr_23060;
})();var statearr_23061_23082 = state_23055__$1;(statearr_23061_23082[(2)] = null);
(statearr_23061_23082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (4)))
{var inst_23027 = (state_23055[(10)]);var state_23055__$1 = state_23055;return cljs.core.async.ioc_alts_BANG_.call(null,state_23055__$1,(7),inst_23027);
} else
{if((state_val_23056 === (6)))
{var inst_23051 = (state_23055[(2)]);var state_23055__$1 = state_23055;var statearr_23062_23083 = state_23055__$1;(statearr_23062_23083[(2)] = inst_23051);
(statearr_23062_23083[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (3)))
{var inst_23053 = (state_23055[(2)]);var state_23055__$1 = state_23055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23055__$1,inst_23053);
} else
{if((state_val_23056 === (2)))
{var inst_23027 = (state_23055[(10)]);var inst_23029 = cljs.core.count.call(null,inst_23027);var inst_23030 = (inst_23029 > (0));var state_23055__$1 = state_23055;if(cljs.core.truth_(inst_23030))
{var statearr_23064_23084 = state_23055__$1;(statearr_23064_23084[(1)] = (4));
} else
{var statearr_23065_23085 = state_23055__$1;(statearr_23065_23085[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (11)))
{var inst_23027 = (state_23055[(10)]);var inst_23044 = (state_23055[(2)]);var tmp23063 = inst_23027;var inst_23027__$1 = tmp23063;var state_23055__$1 = (function (){var statearr_23066 = state_23055;(statearr_23066[(10)] = inst_23027__$1);
(statearr_23066[(11)] = inst_23044);
return statearr_23066;
})();var statearr_23067_23086 = state_23055__$1;(statearr_23067_23086[(2)] = null);
(statearr_23067_23086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (9)))
{var inst_23035 = (state_23055[(8)]);var state_23055__$1 = state_23055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23055__$1,(11),out,inst_23035);
} else
{if((state_val_23056 === (5)))
{var inst_23049 = cljs.core.async.close_BANG_.call(null,out);var state_23055__$1 = state_23055;var statearr_23068_23087 = state_23055__$1;(statearr_23068_23087[(2)] = inst_23049);
(statearr_23068_23087[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (10)))
{var inst_23047 = (state_23055[(2)]);var state_23055__$1 = state_23055;var statearr_23069_23088 = state_23055__$1;(statearr_23069_23088[(2)] = inst_23047);
(statearr_23069_23088[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23056 === (8)))
{var inst_23027 = (state_23055[(10)]);var inst_23034 = (state_23055[(7)]);var inst_23035 = (state_23055[(8)]);var inst_23036 = (state_23055[(9)]);var inst_23039 = (function (){var c = inst_23036;var v = inst_23035;var vec__23032 = inst_23034;var cs = inst_23027;return ((function (c,v,vec__23032,cs,inst_23027,inst_23034,inst_23035,inst_23036,state_val_23056,c__15086__auto___23079,out){
return (function (p1__22972_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22972_SHARP_);
});
;})(c,v,vec__23032,cs,inst_23027,inst_23034,inst_23035,inst_23036,state_val_23056,c__15086__auto___23079,out))
})();var inst_23040 = cljs.core.filterv.call(null,inst_23039,inst_23027);var inst_23027__$1 = inst_23040;var state_23055__$1 = (function (){var statearr_23070 = state_23055;(statearr_23070[(10)] = inst_23027__$1);
return statearr_23070;
})();var statearr_23071_23089 = state_23055__$1;(statearr_23071_23089[(2)] = null);
(statearr_23071_23089[(1)] = (2));
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
});})(c__15086__auto___23079,out))
;return ((function (switch__15071__auto__,c__15086__auto___23079,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23075 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23075[(0)] = state_machine__15072__auto__);
(statearr_23075[(1)] = (1));
return statearr_23075;
});
var state_machine__15072__auto____1 = (function (state_23055){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23055);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23076){if((e23076 instanceof Object))
{var ex__15075__auto__ = e23076;var statearr_23077_23090 = state_23055;(statearr_23077_23090[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23076;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23091 = state_23055;
state_23055 = G__23091;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23055){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23079,out))
})();var state__15088__auto__ = (function (){var statearr_23078 = f__15087__auto__.call(null);(statearr_23078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23079);
return statearr_23078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23079,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23184 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23184,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23184,out){
return (function (state_23161){var state_val_23162 = (state_23161[(1)]);if((state_val_23162 === (7)))
{var inst_23143 = (state_23161[(7)]);var inst_23143__$1 = (state_23161[(2)]);var inst_23144 = (inst_23143__$1 == null);var inst_23145 = cljs.core.not.call(null,inst_23144);var state_23161__$1 = (function (){var statearr_23163 = state_23161;(statearr_23163[(7)] = inst_23143__$1);
return statearr_23163;
})();if(inst_23145)
{var statearr_23164_23185 = state_23161__$1;(statearr_23164_23185[(1)] = (8));
} else
{var statearr_23165_23186 = state_23161__$1;(statearr_23165_23186[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (1)))
{var inst_23138 = (0);var state_23161__$1 = (function (){var statearr_23166 = state_23161;(statearr_23166[(8)] = inst_23138);
return statearr_23166;
})();var statearr_23167_23187 = state_23161__$1;(statearr_23167_23187[(2)] = null);
(statearr_23167_23187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (4)))
{var state_23161__$1 = state_23161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23161__$1,(7),ch);
} else
{if((state_val_23162 === (6)))
{var inst_23156 = (state_23161[(2)]);var state_23161__$1 = state_23161;var statearr_23168_23188 = state_23161__$1;(statearr_23168_23188[(2)] = inst_23156);
(statearr_23168_23188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (3)))
{var inst_23158 = (state_23161[(2)]);var inst_23159 = cljs.core.async.close_BANG_.call(null,out);var state_23161__$1 = (function (){var statearr_23169 = state_23161;(statearr_23169[(9)] = inst_23158);
return statearr_23169;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23161__$1,inst_23159);
} else
{if((state_val_23162 === (2)))
{var inst_23138 = (state_23161[(8)]);var inst_23140 = (inst_23138 < n);var state_23161__$1 = state_23161;if(cljs.core.truth_(inst_23140))
{var statearr_23170_23189 = state_23161__$1;(statearr_23170_23189[(1)] = (4));
} else
{var statearr_23171_23190 = state_23161__$1;(statearr_23171_23190[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (11)))
{var inst_23138 = (state_23161[(8)]);var inst_23148 = (state_23161[(2)]);var inst_23149 = (inst_23138 + (1));var inst_23138__$1 = inst_23149;var state_23161__$1 = (function (){var statearr_23172 = state_23161;(statearr_23172[(10)] = inst_23148);
(statearr_23172[(8)] = inst_23138__$1);
return statearr_23172;
})();var statearr_23173_23191 = state_23161__$1;(statearr_23173_23191[(2)] = null);
(statearr_23173_23191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (9)))
{var state_23161__$1 = state_23161;var statearr_23174_23192 = state_23161__$1;(statearr_23174_23192[(2)] = null);
(statearr_23174_23192[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (5)))
{var state_23161__$1 = state_23161;var statearr_23175_23193 = state_23161__$1;(statearr_23175_23193[(2)] = null);
(statearr_23175_23193[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (10)))
{var inst_23153 = (state_23161[(2)]);var state_23161__$1 = state_23161;var statearr_23176_23194 = state_23161__$1;(statearr_23176_23194[(2)] = inst_23153);
(statearr_23176_23194[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23162 === (8)))
{var inst_23143 = (state_23161[(7)]);var state_23161__$1 = state_23161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23161__$1,(11),out,inst_23143);
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
});})(c__15086__auto___23184,out))
;return ((function (switch__15071__auto__,c__15086__auto___23184,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23180 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23180[(0)] = state_machine__15072__auto__);
(statearr_23180[(1)] = (1));
return statearr_23180;
});
var state_machine__15072__auto____1 = (function (state_23161){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23161);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object))
{var ex__15075__auto__ = e23181;var statearr_23182_23195 = state_23161;(statearr_23182_23195[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23181;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23196 = state_23161;
state_23161 = G__23196;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23161){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23184,out))
})();var state__15088__auto__ = (function (){var statearr_23183 = f__15087__auto__.call(null);(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23184);
return statearr_23183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23184,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23204 = (function (ch,f,map_LT_,meta23205){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23205 = meta23205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23204.cljs$lang$type = true;
cljs.core.async.t23204.cljs$lang$ctorStr = "cljs.core.async/t23204";
cljs.core.async.t23204.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23204");
});
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23207 = (function (fn1,_,meta23205,ch,f,map_LT_,meta23208){
this.fn1 = fn1;
this._ = _;
this.meta23205 = meta23205;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23208 = meta23208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23207.cljs$lang$type = true;
cljs.core.async.t23207.cljs$lang$ctorStr = "cljs.core.async/t23207";
cljs.core.async.t23207.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23207");
});})(___$1))
;
cljs.core.async.t23207.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23197_SHARP_){return f1.call(null,(((p1__23197_SHARP_ == null))?null:self__.f.call(null,p1__23197_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23209){var self__ = this;
var _23209__$1 = this;return self__.meta23208;
});})(___$1))
;
cljs.core.async.t23207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23209,meta23208__$1){var self__ = this;
var _23209__$1 = this;return (new cljs.core.async.t23207(self__.fn1,self__._,self__.meta23205,self__.ch,self__.f,self__.map_LT_,meta23208__$1));
});})(___$1))
;
cljs.core.async.__GT_t23207 = ((function (___$1){
return (function __GT_t23207(fn1__$1,___$2,meta23205__$1,ch__$2,f__$2,map_LT___$2,meta23208){return (new cljs.core.async.t23207(fn1__$1,___$2,meta23205__$1,ch__$2,f__$2,map_LT___$2,meta23208));
});})(___$1))
;
}
return (new cljs.core.async.t23207(fn1,___$1,self__.meta23205,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23204.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23206){var self__ = this;
var _23206__$1 = this;return self__.meta23205;
});
cljs.core.async.t23204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23206,meta23205__$1){var self__ = this;
var _23206__$1 = this;return (new cljs.core.async.t23204(self__.ch,self__.f,self__.map_LT_,meta23205__$1));
});
cljs.core.async.__GT_t23204 = (function __GT_t23204(ch__$1,f__$1,map_LT___$1,meta23205){return (new cljs.core.async.t23204(ch__$1,f__$1,map_LT___$1,meta23205));
});
}
return (new cljs.core.async.t23204(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23213 = (function (ch,f,map_GT_,meta23214){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23214 = meta23214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23213.cljs$lang$type = true;
cljs.core.async.t23213.cljs$lang$ctorStr = "cljs.core.async/t23213";
cljs.core.async.t23213.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23213");
});
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23215){var self__ = this;
var _23215__$1 = this;return self__.meta23214;
});
cljs.core.async.t23213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23215,meta23214__$1){var self__ = this;
var _23215__$1 = this;return (new cljs.core.async.t23213(self__.ch,self__.f,self__.map_GT_,meta23214__$1));
});
cljs.core.async.__GT_t23213 = (function __GT_t23213(ch__$1,f__$1,map_GT___$1,meta23214){return (new cljs.core.async.t23213(ch__$1,f__$1,map_GT___$1,meta23214));
});
}
return (new cljs.core.async.t23213(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23219 = (function (ch,p,filter_GT_,meta23220){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23220 = meta23220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23219.cljs$lang$type = true;
cljs.core.async.t23219.cljs$lang$ctorStr = "cljs.core.async/t23219";
cljs.core.async.t23219.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23219");
});
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23221){var self__ = this;
var _23221__$1 = this;return self__.meta23220;
});
cljs.core.async.t23219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23221,meta23220__$1){var self__ = this;
var _23221__$1 = this;return (new cljs.core.async.t23219(self__.ch,self__.p,self__.filter_GT_,meta23220__$1));
});
cljs.core.async.__GT_t23219 = (function __GT_t23219(ch__$1,p__$1,filter_GT___$1,meta23220){return (new cljs.core.async.t23219(ch__$1,p__$1,filter_GT___$1,meta23220));
});
}
return (new cljs.core.async.t23219(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23304 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23304,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23304,out){
return (function (state_23283){var state_val_23284 = (state_23283[(1)]);if((state_val_23284 === (7)))
{var inst_23279 = (state_23283[(2)]);var state_23283__$1 = state_23283;var statearr_23285_23305 = state_23283__$1;(statearr_23285_23305[(2)] = inst_23279);
(statearr_23285_23305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (1)))
{var state_23283__$1 = state_23283;var statearr_23286_23306 = state_23283__$1;(statearr_23286_23306[(2)] = null);
(statearr_23286_23306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (4)))
{var inst_23265 = (state_23283[(7)]);var inst_23265__$1 = (state_23283[(2)]);var inst_23266 = (inst_23265__$1 == null);var state_23283__$1 = (function (){var statearr_23287 = state_23283;(statearr_23287[(7)] = inst_23265__$1);
return statearr_23287;
})();if(cljs.core.truth_(inst_23266))
{var statearr_23288_23307 = state_23283__$1;(statearr_23288_23307[(1)] = (5));
} else
{var statearr_23289_23308 = state_23283__$1;(statearr_23289_23308[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (6)))
{var inst_23265 = (state_23283[(7)]);var inst_23270 = p.call(null,inst_23265);var state_23283__$1 = state_23283;if(cljs.core.truth_(inst_23270))
{var statearr_23290_23309 = state_23283__$1;(statearr_23290_23309[(1)] = (8));
} else
{var statearr_23291_23310 = state_23283__$1;(statearr_23291_23310[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (3)))
{var inst_23281 = (state_23283[(2)]);var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23283__$1,inst_23281);
} else
{if((state_val_23284 === (2)))
{var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,(4),ch);
} else
{if((state_val_23284 === (11)))
{var inst_23273 = (state_23283[(2)]);var state_23283__$1 = state_23283;var statearr_23292_23311 = state_23283__$1;(statearr_23292_23311[(2)] = inst_23273);
(statearr_23292_23311[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (9)))
{var state_23283__$1 = state_23283;var statearr_23293_23312 = state_23283__$1;(statearr_23293_23312[(2)] = null);
(statearr_23293_23312[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (5)))
{var inst_23268 = cljs.core.async.close_BANG_.call(null,out);var state_23283__$1 = state_23283;var statearr_23294_23313 = state_23283__$1;(statearr_23294_23313[(2)] = inst_23268);
(statearr_23294_23313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (10)))
{var inst_23276 = (state_23283[(2)]);var state_23283__$1 = (function (){var statearr_23295 = state_23283;(statearr_23295[(8)] = inst_23276);
return statearr_23295;
})();var statearr_23296_23314 = state_23283__$1;(statearr_23296_23314[(2)] = null);
(statearr_23296_23314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23284 === (8)))
{var inst_23265 = (state_23283[(7)]);var state_23283__$1 = state_23283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23283__$1,(11),out,inst_23265);
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
});})(c__15086__auto___23304,out))
;return ((function (switch__15071__auto__,c__15086__auto___23304,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23300 = [null,null,null,null,null,null,null,null,null];(statearr_23300[(0)] = state_machine__15072__auto__);
(statearr_23300[(1)] = (1));
return statearr_23300;
});
var state_machine__15072__auto____1 = (function (state_23283){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23283);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23301){if((e23301 instanceof Object))
{var ex__15075__auto__ = e23301;var statearr_23302_23315 = state_23283;(statearr_23302_23315[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23301;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23316 = state_23283;
state_23283 = G__23316;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23304,out))
})();var state__15088__auto__ = (function (){var statearr_23303 = f__15087__auto__.call(null);(statearr_23303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23304);
return statearr_23303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23304,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15086__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto__){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto__){
return (function (state_23482){var state_val_23483 = (state_23482[(1)]);if((state_val_23483 === (7)))
{var inst_23478 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23484_23525 = state_23482__$1;(statearr_23484_23525[(2)] = inst_23478);
(statearr_23484_23525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (20)))
{var inst_23448 = (state_23482[(7)]);var inst_23459 = (state_23482[(2)]);var inst_23460 = cljs.core.next.call(null,inst_23448);var inst_23434 = inst_23460;var inst_23435 = null;var inst_23436 = (0);var inst_23437 = (0);var state_23482__$1 = (function (){var statearr_23485 = state_23482;(statearr_23485[(8)] = inst_23437);
(statearr_23485[(9)] = inst_23434);
(statearr_23485[(10)] = inst_23459);
(statearr_23485[(11)] = inst_23436);
(statearr_23485[(12)] = inst_23435);
return statearr_23485;
})();var statearr_23486_23526 = state_23482__$1;(statearr_23486_23526[(2)] = null);
(statearr_23486_23526[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (1)))
{var state_23482__$1 = state_23482;var statearr_23487_23527 = state_23482__$1;(statearr_23487_23527[(2)] = null);
(statearr_23487_23527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (4)))
{var inst_23423 = (state_23482[(13)]);var inst_23423__$1 = (state_23482[(2)]);var inst_23424 = (inst_23423__$1 == null);var state_23482__$1 = (function (){var statearr_23488 = state_23482;(statearr_23488[(13)] = inst_23423__$1);
return statearr_23488;
})();if(cljs.core.truth_(inst_23424))
{var statearr_23489_23528 = state_23482__$1;(statearr_23489_23528[(1)] = (5));
} else
{var statearr_23490_23529 = state_23482__$1;(statearr_23490_23529[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (15)))
{var state_23482__$1 = state_23482;var statearr_23494_23530 = state_23482__$1;(statearr_23494_23530[(2)] = null);
(statearr_23494_23530[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (21)))
{var state_23482__$1 = state_23482;var statearr_23495_23531 = state_23482__$1;(statearr_23495_23531[(2)] = null);
(statearr_23495_23531[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (13)))
{var inst_23437 = (state_23482[(8)]);var inst_23434 = (state_23482[(9)]);var inst_23436 = (state_23482[(11)]);var inst_23435 = (state_23482[(12)]);var inst_23444 = (state_23482[(2)]);var inst_23445 = (inst_23437 + (1));var tmp23491 = inst_23434;var tmp23492 = inst_23436;var tmp23493 = inst_23435;var inst_23434__$1 = tmp23491;var inst_23435__$1 = tmp23493;var inst_23436__$1 = tmp23492;var inst_23437__$1 = inst_23445;var state_23482__$1 = (function (){var statearr_23496 = state_23482;(statearr_23496[(8)] = inst_23437__$1);
(statearr_23496[(14)] = inst_23444);
(statearr_23496[(9)] = inst_23434__$1);
(statearr_23496[(11)] = inst_23436__$1);
(statearr_23496[(12)] = inst_23435__$1);
return statearr_23496;
})();var statearr_23497_23532 = state_23482__$1;(statearr_23497_23532[(2)] = null);
(statearr_23497_23532[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (22)))
{var state_23482__$1 = state_23482;var statearr_23498_23533 = state_23482__$1;(statearr_23498_23533[(2)] = null);
(statearr_23498_23533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (6)))
{var inst_23423 = (state_23482[(13)]);var inst_23432 = f.call(null,inst_23423);var inst_23433 = cljs.core.seq.call(null,inst_23432);var inst_23434 = inst_23433;var inst_23435 = null;var inst_23436 = (0);var inst_23437 = (0);var state_23482__$1 = (function (){var statearr_23499 = state_23482;(statearr_23499[(8)] = inst_23437);
(statearr_23499[(9)] = inst_23434);
(statearr_23499[(11)] = inst_23436);
(statearr_23499[(12)] = inst_23435);
return statearr_23499;
})();var statearr_23500_23534 = state_23482__$1;(statearr_23500_23534[(2)] = null);
(statearr_23500_23534[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (17)))
{var inst_23448 = (state_23482[(7)]);var inst_23452 = cljs.core.chunk_first.call(null,inst_23448);var inst_23453 = cljs.core.chunk_rest.call(null,inst_23448);var inst_23454 = cljs.core.count.call(null,inst_23452);var inst_23434 = inst_23453;var inst_23435 = inst_23452;var inst_23436 = inst_23454;var inst_23437 = (0);var state_23482__$1 = (function (){var statearr_23501 = state_23482;(statearr_23501[(8)] = inst_23437);
(statearr_23501[(9)] = inst_23434);
(statearr_23501[(11)] = inst_23436);
(statearr_23501[(12)] = inst_23435);
return statearr_23501;
})();var statearr_23502_23535 = state_23482__$1;(statearr_23502_23535[(2)] = null);
(statearr_23502_23535[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (3)))
{var inst_23480 = (state_23482[(2)]);var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else
{if((state_val_23483 === (12)))
{var inst_23468 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23503_23536 = state_23482__$1;(statearr_23503_23536[(2)] = inst_23468);
(statearr_23503_23536[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (2)))
{var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23482__$1,(4),in$);
} else
{if((state_val_23483 === (23)))
{var inst_23476 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23504_23537 = state_23482__$1;(statearr_23504_23537[(2)] = inst_23476);
(statearr_23504_23537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (19)))
{var inst_23463 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23505_23538 = state_23482__$1;(statearr_23505_23538[(2)] = inst_23463);
(statearr_23505_23538[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (11)))
{var inst_23448 = (state_23482[(7)]);var inst_23434 = (state_23482[(9)]);var inst_23448__$1 = cljs.core.seq.call(null,inst_23434);var state_23482__$1 = (function (){var statearr_23506 = state_23482;(statearr_23506[(7)] = inst_23448__$1);
return statearr_23506;
})();if(inst_23448__$1)
{var statearr_23507_23539 = state_23482__$1;(statearr_23507_23539[(1)] = (14));
} else
{var statearr_23508_23540 = state_23482__$1;(statearr_23508_23540[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (9)))
{var inst_23470 = (state_23482[(2)]);var inst_23471 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23482__$1 = (function (){var statearr_23509 = state_23482;(statearr_23509[(15)] = inst_23470);
return statearr_23509;
})();if(cljs.core.truth_(inst_23471))
{var statearr_23510_23541 = state_23482__$1;(statearr_23510_23541[(1)] = (21));
} else
{var statearr_23511_23542 = state_23482__$1;(statearr_23511_23542[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (5)))
{var inst_23426 = cljs.core.async.close_BANG_.call(null,out);var state_23482__$1 = state_23482;var statearr_23512_23543 = state_23482__$1;(statearr_23512_23543[(2)] = inst_23426);
(statearr_23512_23543[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (14)))
{var inst_23448 = (state_23482[(7)]);var inst_23450 = cljs.core.chunked_seq_QMARK_.call(null,inst_23448);var state_23482__$1 = state_23482;if(inst_23450)
{var statearr_23513_23544 = state_23482__$1;(statearr_23513_23544[(1)] = (17));
} else
{var statearr_23514_23545 = state_23482__$1;(statearr_23514_23545[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (16)))
{var inst_23466 = (state_23482[(2)]);var state_23482__$1 = state_23482;var statearr_23515_23546 = state_23482__$1;(statearr_23515_23546[(2)] = inst_23466);
(statearr_23515_23546[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23483 === (10)))
{var inst_23437 = (state_23482[(8)]);var inst_23435 = (state_23482[(12)]);var inst_23442 = cljs.core._nth.call(null,inst_23435,inst_23437);var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23482__$1,(13),out,inst_23442);
} else
{if((state_val_23483 === (18)))
{var inst_23448 = (state_23482[(7)]);var inst_23457 = cljs.core.first.call(null,inst_23448);var state_23482__$1 = state_23482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23482__$1,(20),out,inst_23457);
} else
{if((state_val_23483 === (8)))
{var inst_23437 = (state_23482[(8)]);var inst_23436 = (state_23482[(11)]);var inst_23439 = (inst_23437 < inst_23436);var inst_23440 = inst_23439;var state_23482__$1 = state_23482;if(cljs.core.truth_(inst_23440))
{var statearr_23516_23547 = state_23482__$1;(statearr_23516_23547[(1)] = (10));
} else
{var statearr_23517_23548 = state_23482__$1;(statearr_23517_23548[(1)] = (11));
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
});})(c__15086__auto__))
;return ((function (switch__15071__auto__,c__15086__auto__){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23521[(0)] = state_machine__15072__auto__);
(statearr_23521[(1)] = (1));
return statearr_23521;
});
var state_machine__15072__auto____1 = (function (state_23482){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23482);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object))
{var ex__15075__auto__ = e23522;var statearr_23523_23549 = state_23482;(statearr_23523_23549[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23550 = state_23482;
state_23482 = G__23550;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto__))
})();var state__15088__auto__ = (function (){var statearr_23524 = f__15087__auto__.call(null);(statearr_23524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto__);
return statearr_23524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto__))
);
return c__15086__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23647 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23647,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23647,out){
return (function (state_23622){var state_val_23623 = (state_23622[(1)]);if((state_val_23623 === (7)))
{var inst_23617 = (state_23622[(2)]);var state_23622__$1 = state_23622;var statearr_23624_23648 = state_23622__$1;(statearr_23624_23648[(2)] = inst_23617);
(statearr_23624_23648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (1)))
{var inst_23599 = null;var state_23622__$1 = (function (){var statearr_23625 = state_23622;(statearr_23625[(7)] = inst_23599);
return statearr_23625;
})();var statearr_23626_23649 = state_23622__$1;(statearr_23626_23649[(2)] = null);
(statearr_23626_23649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (4)))
{var inst_23602 = (state_23622[(8)]);var inst_23602__$1 = (state_23622[(2)]);var inst_23603 = (inst_23602__$1 == null);var inst_23604 = cljs.core.not.call(null,inst_23603);var state_23622__$1 = (function (){var statearr_23627 = state_23622;(statearr_23627[(8)] = inst_23602__$1);
return statearr_23627;
})();if(inst_23604)
{var statearr_23628_23650 = state_23622__$1;(statearr_23628_23650[(1)] = (5));
} else
{var statearr_23629_23651 = state_23622__$1;(statearr_23629_23651[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (6)))
{var state_23622__$1 = state_23622;var statearr_23630_23652 = state_23622__$1;(statearr_23630_23652[(2)] = null);
(statearr_23630_23652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (3)))
{var inst_23619 = (state_23622[(2)]);var inst_23620 = cljs.core.async.close_BANG_.call(null,out);var state_23622__$1 = (function (){var statearr_23631 = state_23622;(statearr_23631[(9)] = inst_23619);
return statearr_23631;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23622__$1,inst_23620);
} else
{if((state_val_23623 === (2)))
{var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23622__$1,(4),ch);
} else
{if((state_val_23623 === (11)))
{var inst_23602 = (state_23622[(8)]);var inst_23611 = (state_23622[(2)]);var inst_23599 = inst_23602;var state_23622__$1 = (function (){var statearr_23632 = state_23622;(statearr_23632[(10)] = inst_23611);
(statearr_23632[(7)] = inst_23599);
return statearr_23632;
})();var statearr_23633_23653 = state_23622__$1;(statearr_23633_23653[(2)] = null);
(statearr_23633_23653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (9)))
{var inst_23602 = (state_23622[(8)]);var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23622__$1,(11),out,inst_23602);
} else
{if((state_val_23623 === (5)))
{var inst_23602 = (state_23622[(8)]);var inst_23599 = (state_23622[(7)]);var inst_23606 = cljs.core._EQ_.call(null,inst_23602,inst_23599);var state_23622__$1 = state_23622;if(inst_23606)
{var statearr_23635_23654 = state_23622__$1;(statearr_23635_23654[(1)] = (8));
} else
{var statearr_23636_23655 = state_23622__$1;(statearr_23636_23655[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (10)))
{var inst_23614 = (state_23622[(2)]);var state_23622__$1 = state_23622;var statearr_23637_23656 = state_23622__$1;(statearr_23637_23656[(2)] = inst_23614);
(statearr_23637_23656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23623 === (8)))
{var inst_23599 = (state_23622[(7)]);var tmp23634 = inst_23599;var inst_23599__$1 = tmp23634;var state_23622__$1 = (function (){var statearr_23638 = state_23622;(statearr_23638[(7)] = inst_23599__$1);
return statearr_23638;
})();var statearr_23639_23657 = state_23622__$1;(statearr_23639_23657[(2)] = null);
(statearr_23639_23657[(1)] = (2));
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
});})(c__15086__auto___23647,out))
;return ((function (switch__15071__auto__,c__15086__auto___23647,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23643 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23643[(0)] = state_machine__15072__auto__);
(statearr_23643[(1)] = (1));
return statearr_23643;
});
var state_machine__15072__auto____1 = (function (state_23622){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23622);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23644){if((e23644 instanceof Object))
{var ex__15075__auto__ = e23644;var statearr_23645_23658 = state_23622;(statearr_23645_23658[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23659 = state_23622;
state_23622 = G__23659;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23622){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23647,out))
})();var state__15088__auto__ = (function (){var statearr_23646 = f__15087__auto__.call(null);(statearr_23646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23647);
return statearr_23646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23647,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23794 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23794,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23794,out){
return (function (state_23764){var state_val_23765 = (state_23764[(1)]);if((state_val_23765 === (7)))
{var inst_23760 = (state_23764[(2)]);var state_23764__$1 = state_23764;var statearr_23766_23795 = state_23764__$1;(statearr_23766_23795[(2)] = inst_23760);
(statearr_23766_23795[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (1)))
{var inst_23727 = (new Array(n));var inst_23728 = inst_23727;var inst_23729 = (0);var state_23764__$1 = (function (){var statearr_23767 = state_23764;(statearr_23767[(7)] = inst_23729);
(statearr_23767[(8)] = inst_23728);
return statearr_23767;
})();var statearr_23768_23796 = state_23764__$1;(statearr_23768_23796[(2)] = null);
(statearr_23768_23796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (4)))
{var inst_23732 = (state_23764[(9)]);var inst_23732__$1 = (state_23764[(2)]);var inst_23733 = (inst_23732__$1 == null);var inst_23734 = cljs.core.not.call(null,inst_23733);var state_23764__$1 = (function (){var statearr_23769 = state_23764;(statearr_23769[(9)] = inst_23732__$1);
return statearr_23769;
})();if(inst_23734)
{var statearr_23770_23797 = state_23764__$1;(statearr_23770_23797[(1)] = (5));
} else
{var statearr_23771_23798 = state_23764__$1;(statearr_23771_23798[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (15)))
{var inst_23754 = (state_23764[(2)]);var state_23764__$1 = state_23764;var statearr_23772_23799 = state_23764__$1;(statearr_23772_23799[(2)] = inst_23754);
(statearr_23772_23799[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (13)))
{var state_23764__$1 = state_23764;var statearr_23773_23800 = state_23764__$1;(statearr_23773_23800[(2)] = null);
(statearr_23773_23800[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (6)))
{var inst_23729 = (state_23764[(7)]);var inst_23750 = (inst_23729 > (0));var state_23764__$1 = state_23764;if(cljs.core.truth_(inst_23750))
{var statearr_23774_23801 = state_23764__$1;(statearr_23774_23801[(1)] = (12));
} else
{var statearr_23775_23802 = state_23764__$1;(statearr_23775_23802[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (3)))
{var inst_23762 = (state_23764[(2)]);var state_23764__$1 = state_23764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23764__$1,inst_23762);
} else
{if((state_val_23765 === (12)))
{var inst_23728 = (state_23764[(8)]);var inst_23752 = cljs.core.vec.call(null,inst_23728);var state_23764__$1 = state_23764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23764__$1,(15),out,inst_23752);
} else
{if((state_val_23765 === (2)))
{var state_23764__$1 = state_23764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23764__$1,(4),ch);
} else
{if((state_val_23765 === (11)))
{var inst_23744 = (state_23764[(2)]);var inst_23745 = (new Array(n));var inst_23728 = inst_23745;var inst_23729 = (0);var state_23764__$1 = (function (){var statearr_23776 = state_23764;(statearr_23776[(7)] = inst_23729);
(statearr_23776[(10)] = inst_23744);
(statearr_23776[(8)] = inst_23728);
return statearr_23776;
})();var statearr_23777_23803 = state_23764__$1;(statearr_23777_23803[(2)] = null);
(statearr_23777_23803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (9)))
{var inst_23728 = (state_23764[(8)]);var inst_23742 = cljs.core.vec.call(null,inst_23728);var state_23764__$1 = state_23764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23764__$1,(11),out,inst_23742);
} else
{if((state_val_23765 === (5)))
{var inst_23729 = (state_23764[(7)]);var inst_23732 = (state_23764[(9)]);var inst_23737 = (state_23764[(11)]);var inst_23728 = (state_23764[(8)]);var inst_23736 = (inst_23728[inst_23729] = inst_23732);var inst_23737__$1 = (inst_23729 + (1));var inst_23738 = (inst_23737__$1 < n);var state_23764__$1 = (function (){var statearr_23778 = state_23764;(statearr_23778[(12)] = inst_23736);
(statearr_23778[(11)] = inst_23737__$1);
return statearr_23778;
})();if(cljs.core.truth_(inst_23738))
{var statearr_23779_23804 = state_23764__$1;(statearr_23779_23804[(1)] = (8));
} else
{var statearr_23780_23805 = state_23764__$1;(statearr_23780_23805[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (14)))
{var inst_23757 = (state_23764[(2)]);var inst_23758 = cljs.core.async.close_BANG_.call(null,out);var state_23764__$1 = (function (){var statearr_23782 = state_23764;(statearr_23782[(13)] = inst_23757);
return statearr_23782;
})();var statearr_23783_23806 = state_23764__$1;(statearr_23783_23806[(2)] = inst_23758);
(statearr_23783_23806[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (10)))
{var inst_23748 = (state_23764[(2)]);var state_23764__$1 = state_23764;var statearr_23784_23807 = state_23764__$1;(statearr_23784_23807[(2)] = inst_23748);
(statearr_23784_23807[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23765 === (8)))
{var inst_23737 = (state_23764[(11)]);var inst_23728 = (state_23764[(8)]);var tmp23781 = inst_23728;var inst_23728__$1 = tmp23781;var inst_23729 = inst_23737;var state_23764__$1 = (function (){var statearr_23785 = state_23764;(statearr_23785[(7)] = inst_23729);
(statearr_23785[(8)] = inst_23728__$1);
return statearr_23785;
})();var statearr_23786_23808 = state_23764__$1;(statearr_23786_23808[(2)] = null);
(statearr_23786_23808[(1)] = (2));
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
});})(c__15086__auto___23794,out))
;return ((function (switch__15071__auto__,c__15086__auto___23794,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23790[(0)] = state_machine__15072__auto__);
(statearr_23790[(1)] = (1));
return statearr_23790;
});
var state_machine__15072__auto____1 = (function (state_23764){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23764);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object))
{var ex__15075__auto__ = e23791;var statearr_23792_23809 = state_23764;(statearr_23792_23809[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23764);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23791;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23810 = state_23764;
state_23764 = G__23810;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23764){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23794,out))
})();var state__15088__auto__ = (function (){var statearr_23793 = f__15087__auto__.call(null);(statearr_23793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23794);
return statearr_23793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23794,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15086__auto___23953 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15086__auto___23953,out){
return (function (){var f__15087__auto__ = (function (){var switch__15071__auto__ = ((function (c__15086__auto___23953,out){
return (function (state_23923){var state_val_23924 = (state_23923[(1)]);if((state_val_23924 === (7)))
{var inst_23919 = (state_23923[(2)]);var state_23923__$1 = state_23923;var statearr_23925_23954 = state_23923__$1;(statearr_23925_23954[(2)] = inst_23919);
(statearr_23925_23954[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (1)))
{var inst_23882 = [];var inst_23883 = inst_23882;var inst_23884 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23923__$1 = (function (){var statearr_23926 = state_23923;(statearr_23926[(7)] = inst_23883);
(statearr_23926[(8)] = inst_23884);
return statearr_23926;
})();var statearr_23927_23955 = state_23923__$1;(statearr_23927_23955[(2)] = null);
(statearr_23927_23955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (4)))
{var inst_23887 = (state_23923[(9)]);var inst_23887__$1 = (state_23923[(2)]);var inst_23888 = (inst_23887__$1 == null);var inst_23889 = cljs.core.not.call(null,inst_23888);var state_23923__$1 = (function (){var statearr_23928 = state_23923;(statearr_23928[(9)] = inst_23887__$1);
return statearr_23928;
})();if(inst_23889)
{var statearr_23929_23956 = state_23923__$1;(statearr_23929_23956[(1)] = (5));
} else
{var statearr_23930_23957 = state_23923__$1;(statearr_23930_23957[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (15)))
{var inst_23913 = (state_23923[(2)]);var state_23923__$1 = state_23923;var statearr_23931_23958 = state_23923__$1;(statearr_23931_23958[(2)] = inst_23913);
(statearr_23931_23958[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (13)))
{var state_23923__$1 = state_23923;var statearr_23932_23959 = state_23923__$1;(statearr_23932_23959[(2)] = null);
(statearr_23932_23959[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (6)))
{var inst_23883 = (state_23923[(7)]);var inst_23908 = inst_23883.length;var inst_23909 = (inst_23908 > (0));var state_23923__$1 = state_23923;if(cljs.core.truth_(inst_23909))
{var statearr_23933_23960 = state_23923__$1;(statearr_23933_23960[(1)] = (12));
} else
{var statearr_23934_23961 = state_23923__$1;(statearr_23934_23961[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (3)))
{var inst_23921 = (state_23923[(2)]);var state_23923__$1 = state_23923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23923__$1,inst_23921);
} else
{if((state_val_23924 === (12)))
{var inst_23883 = (state_23923[(7)]);var inst_23911 = cljs.core.vec.call(null,inst_23883);var state_23923__$1 = state_23923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23923__$1,(15),out,inst_23911);
} else
{if((state_val_23924 === (2)))
{var state_23923__$1 = state_23923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23923__$1,(4),ch);
} else
{if((state_val_23924 === (11)))
{var inst_23891 = (state_23923[(10)]);var inst_23887 = (state_23923[(9)]);var inst_23901 = (state_23923[(2)]);var inst_23902 = [];var inst_23903 = inst_23902.push(inst_23887);var inst_23883 = inst_23902;var inst_23884 = inst_23891;var state_23923__$1 = (function (){var statearr_23935 = state_23923;(statearr_23935[(11)] = inst_23903);
(statearr_23935[(12)] = inst_23901);
(statearr_23935[(7)] = inst_23883);
(statearr_23935[(8)] = inst_23884);
return statearr_23935;
})();var statearr_23936_23962 = state_23923__$1;(statearr_23936_23962[(2)] = null);
(statearr_23936_23962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (9)))
{var inst_23883 = (state_23923[(7)]);var inst_23899 = cljs.core.vec.call(null,inst_23883);var state_23923__$1 = state_23923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23923__$1,(11),out,inst_23899);
} else
{if((state_val_23924 === (5)))
{var inst_23891 = (state_23923[(10)]);var inst_23887 = (state_23923[(9)]);var inst_23884 = (state_23923[(8)]);var inst_23891__$1 = f.call(null,inst_23887);var inst_23892 = cljs.core._EQ_.call(null,inst_23891__$1,inst_23884);var inst_23893 = cljs.core.keyword_identical_QMARK_.call(null,inst_23884,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23894 = (inst_23892) || (inst_23893);var state_23923__$1 = (function (){var statearr_23937 = state_23923;(statearr_23937[(10)] = inst_23891__$1);
return statearr_23937;
})();if(cljs.core.truth_(inst_23894))
{var statearr_23938_23963 = state_23923__$1;(statearr_23938_23963[(1)] = (8));
} else
{var statearr_23939_23964 = state_23923__$1;(statearr_23939_23964[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (14)))
{var inst_23916 = (state_23923[(2)]);var inst_23917 = cljs.core.async.close_BANG_.call(null,out);var state_23923__$1 = (function (){var statearr_23941 = state_23923;(statearr_23941[(13)] = inst_23916);
return statearr_23941;
})();var statearr_23942_23965 = state_23923__$1;(statearr_23942_23965[(2)] = inst_23917);
(statearr_23942_23965[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (10)))
{var inst_23906 = (state_23923[(2)]);var state_23923__$1 = state_23923;var statearr_23943_23966 = state_23923__$1;(statearr_23943_23966[(2)] = inst_23906);
(statearr_23943_23966[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23924 === (8)))
{var inst_23891 = (state_23923[(10)]);var inst_23887 = (state_23923[(9)]);var inst_23883 = (state_23923[(7)]);var inst_23896 = inst_23883.push(inst_23887);var tmp23940 = inst_23883;var inst_23883__$1 = tmp23940;var inst_23884 = inst_23891;var state_23923__$1 = (function (){var statearr_23944 = state_23923;(statearr_23944[(14)] = inst_23896);
(statearr_23944[(7)] = inst_23883__$1);
(statearr_23944[(8)] = inst_23884);
return statearr_23944;
})();var statearr_23945_23967 = state_23923__$1;(statearr_23945_23967[(2)] = null);
(statearr_23945_23967[(1)] = (2));
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
});})(c__15086__auto___23953,out))
;return ((function (switch__15071__auto__,c__15086__auto___23953,out){
return (function() {
var state_machine__15072__auto__ = null;
var state_machine__15072__auto____0 = (function (){var statearr_23949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23949[(0)] = state_machine__15072__auto__);
(statearr_23949[(1)] = (1));
return statearr_23949;
});
var state_machine__15072__auto____1 = (function (state_23923){while(true){
var ret_value__15073__auto__ = (function (){try{while(true){
var result__15074__auto__ = switch__15071__auto__.call(null,state_23923);if(cljs.core.keyword_identical_QMARK_.call(null,result__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15074__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object))
{var ex__15075__auto__ = e23950;var statearr_23951_23968 = state_23923;(statearr_23951_23968[(5)] = ex__15075__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23969 = state_23923;
state_23923 = G__23969;
continue;
}
} else
{return ret_value__15073__auto__;
}
break;
}
});
state_machine__15072__auto__ = function(state_23923){
switch(arguments.length){
case 0:
return state_machine__15072__auto____0.call(this);
case 1:
return state_machine__15072__auto____1.call(this,state_23923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15072__auto____0;
state_machine__15072__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15072__auto____1;
return state_machine__15072__auto__;
})()
;})(switch__15071__auto__,c__15086__auto___23953,out))
})();var state__15088__auto__ = (function (){var statearr_23952 = f__15087__auto__.call(null);(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15086__auto___23953);
return statearr_23952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15088__auto__);
});})(c__15086__auto___23953,out))
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