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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27913 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27913 = (function (f,fn_handler,meta27914){
this.f = f;
this.fn_handler = fn_handler;
this.meta27914 = meta27914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27913.cljs$lang$type = true;
cljs.core.async.t27913.cljs$lang$ctorStr = "cljs.core.async/t27913";
cljs.core.async.t27913.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27913");
});
cljs.core.async.t27913.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27915){var self__ = this;
var _27915__$1 = this;return self__.meta27914;
});
cljs.core.async.t27913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27915,meta27914__$1){var self__ = this;
var _27915__$1 = this;return (new cljs.core.async.t27913(self__.f,self__.fn_handler,meta27914__$1));
});
cljs.core.async.__GT_t27913 = (function __GT_t27913(f__$1,fn_handler__$1,meta27914){return (new cljs.core.async.t27913(f__$1,fn_handler__$1,meta27914));
});
}
return (new cljs.core.async.t27913(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27917 = buff;if(G__27917)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__27917.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27917.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27917);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27917);
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
{var val_27918 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27918);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27918,ret){
return (function (){return fn1.call(null,val_27918);
});})(val_27918,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___27919 = n;var x_27920 = (0);while(true){
if((x_27920 < n__13416__auto___27919))
{(a[x_27920] = (0));
{
var G__27921 = (x_27920 + (1));
x_27920 = G__27921;
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
var G__27922 = (i + (1));
i = G__27922;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27926 = (function (flag,alt_flag,meta27927){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27927 = meta27927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27926.cljs$lang$type = true;
cljs.core.async.t27926.cljs$lang$ctorStr = "cljs.core.async/t27926";
cljs.core.async.t27926.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27926");
});})(flag))
;
cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27928){var self__ = this;
var _27928__$1 = this;return self__.meta27927;
});})(flag))
;
cljs.core.async.t27926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27928,meta27927__$1){var self__ = this;
var _27928__$1 = this;return (new cljs.core.async.t27926(self__.flag,self__.alt_flag,meta27927__$1));
});})(flag))
;
cljs.core.async.__GT_t27926 = ((function (flag){
return (function __GT_t27926(flag__$1,alt_flag__$1,meta27927){return (new cljs.core.async.t27926(flag__$1,alt_flag__$1,meta27927));
});})(flag))
;
}
return (new cljs.core.async.t27926(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27932 = (function (cb,flag,alt_handler,meta27933){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27932.cljs$lang$type = true;
cljs.core.async.t27932.cljs$lang$ctorStr = "cljs.core.async/t27932";
cljs.core.async.t27932.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27932");
});
cljs.core.async.t27932.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27934){var self__ = this;
var _27934__$1 = this;return self__.meta27933;
});
cljs.core.async.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27934,meta27933__$1){var self__ = this;
var _27934__$1 = this;return (new cljs.core.async.t27932(self__.cb,self__.flag,self__.alt_handler,meta27933__$1));
});
cljs.core.async.__GT_t27932 = (function __GT_t27932(cb__$1,flag__$1,alt_handler__$1,meta27933){return (new cljs.core.async.t27932(cb__$1,flag__$1,alt_handler__$1,meta27933));
});
}
return (new cljs.core.async.t27932(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27935_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27935_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27936_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27936_SHARP_,port], null));
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
var G__27937 = (i + (1));
i = G__27937;
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
var alts_BANG___delegate = function (ports,p__27938){var map__27940 = p__27938;var map__27940__$1 = ((cljs.core.seq_QMARK_.call(null,map__27940))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940):map__27940);var opts = map__27940__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27938 = null;if (arguments.length > 1) {
  p__27938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27938);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27941){
var ports = cljs.core.first(arglist__27941);
var p__27938 = cljs.core.rest(arglist__27941);
return alts_BANG___delegate(ports,p__27938);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___28036 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28036){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28036){
return (function (state_28012){var state_val_28013 = (state_28012[(1)]);if((state_val_28013 === (7)))
{var inst_28008 = (state_28012[(2)]);var state_28012__$1 = state_28012;var statearr_28014_28037 = state_28012__$1;(statearr_28014_28037[(2)] = inst_28008);
(statearr_28014_28037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (1)))
{var state_28012__$1 = state_28012;var statearr_28015_28038 = state_28012__$1;(statearr_28015_28038[(2)] = null);
(statearr_28015_28038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (4)))
{var inst_27991 = (state_28012[(7)]);var inst_27991__$1 = (state_28012[(2)]);var inst_27992 = (inst_27991__$1 == null);var state_28012__$1 = (function (){var statearr_28016 = state_28012;(statearr_28016[(7)] = inst_27991__$1);
return statearr_28016;
})();if(cljs.core.truth_(inst_27992))
{var statearr_28017_28039 = state_28012__$1;(statearr_28017_28039[(1)] = (5));
} else
{var statearr_28018_28040 = state_28012__$1;(statearr_28018_28040[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (13)))
{var state_28012__$1 = state_28012;var statearr_28019_28041 = state_28012__$1;(statearr_28019_28041[(2)] = null);
(statearr_28019_28041[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (6)))
{var inst_27991 = (state_28012[(7)]);var state_28012__$1 = state_28012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28012__$1,(11),to,inst_27991);
} else
{if((state_val_28013 === (3)))
{var inst_28010 = (state_28012[(2)]);var state_28012__$1 = state_28012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28012__$1,inst_28010);
} else
{if((state_val_28013 === (12)))
{var state_28012__$1 = state_28012;var statearr_28020_28042 = state_28012__$1;(statearr_28020_28042[(2)] = null);
(statearr_28020_28042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (2)))
{var state_28012__$1 = state_28012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28012__$1,(4),from);
} else
{if((state_val_28013 === (11)))
{var inst_28001 = (state_28012[(2)]);var state_28012__$1 = state_28012;if(cljs.core.truth_(inst_28001))
{var statearr_28021_28043 = state_28012__$1;(statearr_28021_28043[(1)] = (12));
} else
{var statearr_28022_28044 = state_28012__$1;(statearr_28022_28044[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (9)))
{var state_28012__$1 = state_28012;var statearr_28023_28045 = state_28012__$1;(statearr_28023_28045[(2)] = null);
(statearr_28023_28045[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (5)))
{var state_28012__$1 = state_28012;if(cljs.core.truth_(close_QMARK_))
{var statearr_28024_28046 = state_28012__$1;(statearr_28024_28046[(1)] = (8));
} else
{var statearr_28025_28047 = state_28012__$1;(statearr_28025_28047[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (14)))
{var inst_28006 = (state_28012[(2)]);var state_28012__$1 = state_28012;var statearr_28026_28048 = state_28012__$1;(statearr_28026_28048[(2)] = inst_28006);
(statearr_28026_28048[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (10)))
{var inst_27998 = (state_28012[(2)]);var state_28012__$1 = state_28012;var statearr_28027_28049 = state_28012__$1;(statearr_28027_28049[(2)] = inst_27998);
(statearr_28027_28049[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28013 === (8)))
{var inst_27995 = cljs.core.async.close_BANG_.call(null,to);var state_28012__$1 = state_28012;var statearr_28028_28050 = state_28012__$1;(statearr_28028_28050[(2)] = inst_27995);
(statearr_28028_28050[(1)] = (10));
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
});})(c__15989__auto___28036))
;return ((function (switch__15974__auto__,c__15989__auto___28036){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28032 = [null,null,null,null,null,null,null,null];(statearr_28032[(0)] = state_machine__15975__auto__);
(statearr_28032[(1)] = (1));
return statearr_28032;
});
var state_machine__15975__auto____1 = (function (state_28012){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28012);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28033){if((e28033 instanceof Object))
{var ex__15978__auto__ = e28033;var statearr_28034_28051 = state_28012;(statearr_28034_28051[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28052 = state_28012;
state_28012 = G__28052;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28012){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28036))
})();var state__15991__auto__ = (function (){var statearr_28035 = f__15990__auto__.call(null);(statearr_28035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28036);
return statearr_28035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28036))
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
return (function (p__28236){var vec__28237 = p__28236;var v = cljs.core.nth.call(null,vec__28237,(0),null);var p = cljs.core.nth.call(null,vec__28237,(1),null);var job = vec__28237;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___28419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results){
return (function (state_28242){var state_val_28243 = (state_28242[(1)]);if((state_val_28243 === (2)))
{var inst_28239 = (state_28242[(2)]);var inst_28240 = cljs.core.async.close_BANG_.call(null,res);var state_28242__$1 = (function (){var statearr_28244 = state_28242;(statearr_28244[(7)] = inst_28239);
return statearr_28244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28242__$1,inst_28240);
} else
{if((state_val_28243 === (1)))
{var state_28242__$1 = state_28242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28242__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28248 = [null,null,null,null,null,null,null,null];(statearr_28248[(0)] = state_machine__15975__auto__);
(statearr_28248[(1)] = (1));
return statearr_28248;
});
var state_machine__15975__auto____1 = (function (state_28242){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28242);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28249){if((e28249 instanceof Object))
{var ex__15978__auto__ = e28249;var statearr_28250_28420 = state_28242;(statearr_28250_28420[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28421 = state_28242;
state_28242 = G__28421;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28242){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_28251 = f__15990__auto__.call(null);(statearr_28251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28419);
return statearr_28251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28419,res,vec__28237,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__28252){var vec__28253 = p__28252;var v = cljs.core.nth.call(null,vec__28253,(0),null);var p = cljs.core.nth.call(null,vec__28253,(1),null);var job = vec__28253;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___28422 = n;var __28423 = (0);while(true){
if((__28423 < n__13416__auto___28422))
{var G__28254_28424 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__28254_28424) {
case "async":
var c__15989__auto___28426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28423,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__28423,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function (state_28267){var state_val_28268 = (state_28267[(1)]);if((state_val_28268 === (7)))
{var inst_28263 = (state_28267[(2)]);var state_28267__$1 = state_28267;var statearr_28269_28427 = state_28267__$1;(statearr_28269_28427[(2)] = inst_28263);
(statearr_28269_28427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (6)))
{var state_28267__$1 = state_28267;var statearr_28270_28428 = state_28267__$1;(statearr_28270_28428[(2)] = null);
(statearr_28270_28428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (5)))
{var state_28267__$1 = state_28267;var statearr_28271_28429 = state_28267__$1;(statearr_28271_28429[(2)] = null);
(statearr_28271_28429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (4)))
{var inst_28257 = (state_28267[(2)]);var inst_28258 = async.call(null,inst_28257);var state_28267__$1 = state_28267;if(cljs.core.truth_(inst_28258))
{var statearr_28272_28430 = state_28267__$1;(statearr_28272_28430[(1)] = (5));
} else
{var statearr_28273_28431 = state_28267__$1;(statearr_28273_28431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28268 === (3)))
{var inst_28265 = (state_28267[(2)]);var state_28267__$1 = state_28267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28267__$1,inst_28265);
} else
{if((state_val_28268 === (2)))
{var state_28267__$1 = state_28267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28267__$1,(4),jobs);
} else
{if((state_val_28268 === (1)))
{var state_28267__$1 = state_28267;var statearr_28274_28432 = state_28267__$1;(statearr_28274_28432[(2)] = null);
(statearr_28274_28432[(1)] = (2));
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
});})(__28423,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
;return ((function (__28423,switch__15974__auto__,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28278 = [null,null,null,null,null,null,null];(statearr_28278[(0)] = state_machine__15975__auto__);
(statearr_28278[(1)] = (1));
return statearr_28278;
});
var state_machine__15975__auto____1 = (function (state_28267){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28267);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object))
{var ex__15978__auto__ = e28279;var statearr_28280_28433 = state_28267;(statearr_28280_28433[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28434 = state_28267;
state_28267 = G__28434;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28267){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__28423,switch__15974__auto__,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28281 = f__15990__auto__.call(null);(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28426);
return statearr_28281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__28423,c__15989__auto___28426,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___28435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28423,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__28423,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function (state_28294){var state_val_28295 = (state_28294[(1)]);if((state_val_28295 === (7)))
{var inst_28290 = (state_28294[(2)]);var state_28294__$1 = state_28294;var statearr_28296_28436 = state_28294__$1;(statearr_28296_28436[(2)] = inst_28290);
(statearr_28296_28436[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28295 === (6)))
{var state_28294__$1 = state_28294;var statearr_28297_28437 = state_28294__$1;(statearr_28297_28437[(2)] = null);
(statearr_28297_28437[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28295 === (5)))
{var state_28294__$1 = state_28294;var statearr_28298_28438 = state_28294__$1;(statearr_28298_28438[(2)] = null);
(statearr_28298_28438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28295 === (4)))
{var inst_28284 = (state_28294[(2)]);var inst_28285 = process.call(null,inst_28284);var state_28294__$1 = state_28294;if(cljs.core.truth_(inst_28285))
{var statearr_28299_28439 = state_28294__$1;(statearr_28299_28439[(1)] = (5));
} else
{var statearr_28300_28440 = state_28294__$1;(statearr_28300_28440[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28295 === (3)))
{var inst_28292 = (state_28294[(2)]);var state_28294__$1 = state_28294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28294__$1,inst_28292);
} else
{if((state_val_28295 === (2)))
{var state_28294__$1 = state_28294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28294__$1,(4),jobs);
} else
{if((state_val_28295 === (1)))
{var state_28294__$1 = state_28294;var statearr_28301_28441 = state_28294__$1;(statearr_28301_28441[(2)] = null);
(statearr_28301_28441[(1)] = (2));
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
});})(__28423,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
;return ((function (__28423,switch__15974__auto__,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28305 = [null,null,null,null,null,null,null];(statearr_28305[(0)] = state_machine__15975__auto__);
(statearr_28305[(1)] = (1));
return statearr_28305;
});
var state_machine__15975__auto____1 = (function (state_28294){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28294);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28306){if((e28306 instanceof Object))
{var ex__15978__auto__ = e28306;var statearr_28307_28442 = state_28294;(statearr_28307_28442[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28294);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28306;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28443 = state_28294;
state_28294 = G__28443;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28294){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__28423,switch__15974__auto__,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28308 = f__15990__auto__.call(null);(statearr_28308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28435);
return statearr_28308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__28423,c__15989__auto___28435,G__28254_28424,n__13416__auto___28422,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__28444 = (__28423 + (1));
__28423 = G__28444;
continue;
}
} else
{}
break;
}
var c__15989__auto___28445 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28445,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28445,jobs,results,process,async){
return (function (state_28330){var state_val_28331 = (state_28330[(1)]);if((state_val_28331 === (9)))
{var inst_28323 = (state_28330[(2)]);var state_28330__$1 = (function (){var statearr_28332 = state_28330;(statearr_28332[(7)] = inst_28323);
return statearr_28332;
})();var statearr_28333_28446 = state_28330__$1;(statearr_28333_28446[(2)] = null);
(statearr_28333_28446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28331 === (8)))
{var inst_28316 = (state_28330[(8)]);var inst_28321 = (state_28330[(2)]);var state_28330__$1 = (function (){var statearr_28334 = state_28330;(statearr_28334[(9)] = inst_28321);
return statearr_28334;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28330__$1,(9),results,inst_28316);
} else
{if((state_val_28331 === (7)))
{var inst_28326 = (state_28330[(2)]);var state_28330__$1 = state_28330;var statearr_28335_28447 = state_28330__$1;(statearr_28335_28447[(2)] = inst_28326);
(statearr_28335_28447[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28331 === (6)))
{var inst_28316 = (state_28330[(8)]);var inst_28311 = (state_28330[(10)]);var inst_28316__$1 = cljs.core.async.chan.call(null,(1));var inst_28317 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28318 = [inst_28311,inst_28316__$1];var inst_28319 = (new cljs.core.PersistentVector(null,2,(5),inst_28317,inst_28318,null));var state_28330__$1 = (function (){var statearr_28336 = state_28330;(statearr_28336[(8)] = inst_28316__$1);
return statearr_28336;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28330__$1,(8),jobs,inst_28319);
} else
{if((state_val_28331 === (5)))
{var inst_28314 = cljs.core.async.close_BANG_.call(null,jobs);var state_28330__$1 = state_28330;var statearr_28337_28448 = state_28330__$1;(statearr_28337_28448[(2)] = inst_28314);
(statearr_28337_28448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28331 === (4)))
{var inst_28311 = (state_28330[(10)]);var inst_28311__$1 = (state_28330[(2)]);var inst_28312 = (inst_28311__$1 == null);var state_28330__$1 = (function (){var statearr_28338 = state_28330;(statearr_28338[(10)] = inst_28311__$1);
return statearr_28338;
})();if(cljs.core.truth_(inst_28312))
{var statearr_28339_28449 = state_28330__$1;(statearr_28339_28449[(1)] = (5));
} else
{var statearr_28340_28450 = state_28330__$1;(statearr_28340_28450[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28331 === (3)))
{var inst_28328 = (state_28330[(2)]);var state_28330__$1 = state_28330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28330__$1,inst_28328);
} else
{if((state_val_28331 === (2)))
{var state_28330__$1 = state_28330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(4),from);
} else
{if((state_val_28331 === (1)))
{var state_28330__$1 = state_28330;var statearr_28341_28451 = state_28330__$1;(statearr_28341_28451[(2)] = null);
(statearr_28341_28451[(1)] = (2));
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
});})(c__15989__auto___28445,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___28445,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28345 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28345[(0)] = state_machine__15975__auto__);
(statearr_28345[(1)] = (1));
return statearr_28345;
});
var state_machine__15975__auto____1 = (function (state_28330){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28330);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28346){if((e28346 instanceof Object))
{var ex__15978__auto__ = e28346;var statearr_28347_28452 = state_28330;(statearr_28347_28452[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28453 = state_28330;
state_28330 = G__28453;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28330){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28445,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28348 = f__15990__auto__.call(null);(statearr_28348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28445);
return statearr_28348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28445,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_28386){var state_val_28387 = (state_28386[(1)]);if((state_val_28387 === (7)))
{var inst_28382 = (state_28386[(2)]);var state_28386__$1 = state_28386;var statearr_28388_28454 = state_28386__$1;(statearr_28388_28454[(2)] = inst_28382);
(statearr_28388_28454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (20)))
{var state_28386__$1 = state_28386;var statearr_28389_28455 = state_28386__$1;(statearr_28389_28455[(2)] = null);
(statearr_28389_28455[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (1)))
{var state_28386__$1 = state_28386;var statearr_28390_28456 = state_28386__$1;(statearr_28390_28456[(2)] = null);
(statearr_28390_28456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (4)))
{var inst_28351 = (state_28386[(7)]);var inst_28351__$1 = (state_28386[(2)]);var inst_28352 = (inst_28351__$1 == null);var state_28386__$1 = (function (){var statearr_28391 = state_28386;(statearr_28391[(7)] = inst_28351__$1);
return statearr_28391;
})();if(cljs.core.truth_(inst_28352))
{var statearr_28392_28457 = state_28386__$1;(statearr_28392_28457[(1)] = (5));
} else
{var statearr_28393_28458 = state_28386__$1;(statearr_28393_28458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (15)))
{var inst_28364 = (state_28386[(8)]);var state_28386__$1 = state_28386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28386__$1,(18),to,inst_28364);
} else
{if((state_val_28387 === (21)))
{var inst_28377 = (state_28386[(2)]);var state_28386__$1 = state_28386;var statearr_28394_28459 = state_28386__$1;(statearr_28394_28459[(2)] = inst_28377);
(statearr_28394_28459[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (13)))
{var inst_28379 = (state_28386[(2)]);var state_28386__$1 = (function (){var statearr_28395 = state_28386;(statearr_28395[(9)] = inst_28379);
return statearr_28395;
})();var statearr_28396_28460 = state_28386__$1;(statearr_28396_28460[(2)] = null);
(statearr_28396_28460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (6)))
{var inst_28351 = (state_28386[(7)]);var state_28386__$1 = state_28386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28386__$1,(11),inst_28351);
} else
{if((state_val_28387 === (17)))
{var inst_28372 = (state_28386[(2)]);var state_28386__$1 = state_28386;if(cljs.core.truth_(inst_28372))
{var statearr_28397_28461 = state_28386__$1;(statearr_28397_28461[(1)] = (19));
} else
{var statearr_28398_28462 = state_28386__$1;(statearr_28398_28462[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (3)))
{var inst_28384 = (state_28386[(2)]);var state_28386__$1 = state_28386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28386__$1,inst_28384);
} else
{if((state_val_28387 === (12)))
{var inst_28361 = (state_28386[(10)]);var state_28386__$1 = state_28386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28386__$1,(14),inst_28361);
} else
{if((state_val_28387 === (2)))
{var state_28386__$1 = state_28386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28386__$1,(4),results);
} else
{if((state_val_28387 === (19)))
{var state_28386__$1 = state_28386;var statearr_28399_28463 = state_28386__$1;(statearr_28399_28463[(2)] = null);
(statearr_28399_28463[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (11)))
{var inst_28361 = (state_28386[(2)]);var state_28386__$1 = (function (){var statearr_28400 = state_28386;(statearr_28400[(10)] = inst_28361);
return statearr_28400;
})();var statearr_28401_28464 = state_28386__$1;(statearr_28401_28464[(2)] = null);
(statearr_28401_28464[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (9)))
{var state_28386__$1 = state_28386;var statearr_28402_28465 = state_28386__$1;(statearr_28402_28465[(2)] = null);
(statearr_28402_28465[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (5)))
{var state_28386__$1 = state_28386;if(cljs.core.truth_(close_QMARK_))
{var statearr_28403_28466 = state_28386__$1;(statearr_28403_28466[(1)] = (8));
} else
{var statearr_28404_28467 = state_28386__$1;(statearr_28404_28467[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (14)))
{var inst_28366 = (state_28386[(11)]);var inst_28364 = (state_28386[(8)]);var inst_28364__$1 = (state_28386[(2)]);var inst_28365 = (inst_28364__$1 == null);var inst_28366__$1 = cljs.core.not.call(null,inst_28365);var state_28386__$1 = (function (){var statearr_28405 = state_28386;(statearr_28405[(11)] = inst_28366__$1);
(statearr_28405[(8)] = inst_28364__$1);
return statearr_28405;
})();if(inst_28366__$1)
{var statearr_28406_28468 = state_28386__$1;(statearr_28406_28468[(1)] = (15));
} else
{var statearr_28407_28469 = state_28386__$1;(statearr_28407_28469[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (16)))
{var inst_28366 = (state_28386[(11)]);var state_28386__$1 = state_28386;var statearr_28408_28470 = state_28386__$1;(statearr_28408_28470[(2)] = inst_28366);
(statearr_28408_28470[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (10)))
{var inst_28358 = (state_28386[(2)]);var state_28386__$1 = state_28386;var statearr_28409_28471 = state_28386__$1;(statearr_28409_28471[(2)] = inst_28358);
(statearr_28409_28471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (18)))
{var inst_28369 = (state_28386[(2)]);var state_28386__$1 = state_28386;var statearr_28410_28472 = state_28386__$1;(statearr_28410_28472[(2)] = inst_28369);
(statearr_28410_28472[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28387 === (8)))
{var inst_28355 = cljs.core.async.close_BANG_.call(null,to);var state_28386__$1 = state_28386;var statearr_28411_28473 = state_28386__$1;(statearr_28411_28473[(2)] = inst_28355);
(statearr_28411_28473[(1)] = (10));
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
});})(c__15989__auto__,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto__,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28415 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28415[(0)] = state_machine__15975__auto__);
(statearr_28415[(1)] = (1));
return statearr_28415;
});
var state_machine__15975__auto____1 = (function (state_28386){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28386);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28416){if((e28416 instanceof Object))
{var ex__15978__auto__ = e28416;var statearr_28417_28474 = state_28386;(statearr_28417_28474[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28416;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28475 = state_28386;
state_28386 = G__28475;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28386){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_28418 = f__15990__auto__.call(null);(statearr_28418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__,jobs,results,process,async))
);
return c__15989__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___28576 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28576,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28576,tc,fc){
return (function (state_28551){var state_val_28552 = (state_28551[(1)]);if((state_val_28552 === (7)))
{var inst_28547 = (state_28551[(2)]);var state_28551__$1 = state_28551;var statearr_28553_28577 = state_28551__$1;(statearr_28553_28577[(2)] = inst_28547);
(statearr_28553_28577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (1)))
{var state_28551__$1 = state_28551;var statearr_28554_28578 = state_28551__$1;(statearr_28554_28578[(2)] = null);
(statearr_28554_28578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (4)))
{var inst_28528 = (state_28551[(7)]);var inst_28528__$1 = (state_28551[(2)]);var inst_28529 = (inst_28528__$1 == null);var state_28551__$1 = (function (){var statearr_28555 = state_28551;(statearr_28555[(7)] = inst_28528__$1);
return statearr_28555;
})();if(cljs.core.truth_(inst_28529))
{var statearr_28556_28579 = state_28551__$1;(statearr_28556_28579[(1)] = (5));
} else
{var statearr_28557_28580 = state_28551__$1;(statearr_28557_28580[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (13)))
{var state_28551__$1 = state_28551;var statearr_28558_28581 = state_28551__$1;(statearr_28558_28581[(2)] = null);
(statearr_28558_28581[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (6)))
{var inst_28528 = (state_28551[(7)]);var inst_28534 = p.call(null,inst_28528);var state_28551__$1 = state_28551;if(cljs.core.truth_(inst_28534))
{var statearr_28559_28582 = state_28551__$1;(statearr_28559_28582[(1)] = (9));
} else
{var statearr_28560_28583 = state_28551__$1;(statearr_28560_28583[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (3)))
{var inst_28549 = (state_28551[(2)]);var state_28551__$1 = state_28551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28551__$1,inst_28549);
} else
{if((state_val_28552 === (12)))
{var state_28551__$1 = state_28551;var statearr_28561_28584 = state_28551__$1;(statearr_28561_28584[(2)] = null);
(statearr_28561_28584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (2)))
{var state_28551__$1 = state_28551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28551__$1,(4),ch);
} else
{if((state_val_28552 === (11)))
{var inst_28528 = (state_28551[(7)]);var inst_28538 = (state_28551[(2)]);var state_28551__$1 = state_28551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28551__$1,(8),inst_28538,inst_28528);
} else
{if((state_val_28552 === (9)))
{var state_28551__$1 = state_28551;var statearr_28562_28585 = state_28551__$1;(statearr_28562_28585[(2)] = tc);
(statearr_28562_28585[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (5)))
{var inst_28531 = cljs.core.async.close_BANG_.call(null,tc);var inst_28532 = cljs.core.async.close_BANG_.call(null,fc);var state_28551__$1 = (function (){var statearr_28563 = state_28551;(statearr_28563[(8)] = inst_28531);
return statearr_28563;
})();var statearr_28564_28586 = state_28551__$1;(statearr_28564_28586[(2)] = inst_28532);
(statearr_28564_28586[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (14)))
{var inst_28545 = (state_28551[(2)]);var state_28551__$1 = state_28551;var statearr_28565_28587 = state_28551__$1;(statearr_28565_28587[(2)] = inst_28545);
(statearr_28565_28587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (10)))
{var state_28551__$1 = state_28551;var statearr_28566_28588 = state_28551__$1;(statearr_28566_28588[(2)] = fc);
(statearr_28566_28588[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28552 === (8)))
{var inst_28540 = (state_28551[(2)]);var state_28551__$1 = state_28551;if(cljs.core.truth_(inst_28540))
{var statearr_28567_28589 = state_28551__$1;(statearr_28567_28589[(1)] = (12));
} else
{var statearr_28568_28590 = state_28551__$1;(statearr_28568_28590[(1)] = (13));
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
});})(c__15989__auto___28576,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___28576,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28572 = [null,null,null,null,null,null,null,null,null];(statearr_28572[(0)] = state_machine__15975__auto__);
(statearr_28572[(1)] = (1));
return statearr_28572;
});
var state_machine__15975__auto____1 = (function (state_28551){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28551);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28573){if((e28573 instanceof Object))
{var ex__15978__auto__ = e28573;var statearr_28574_28591 = state_28551;(statearr_28574_28591[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28573;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28592 = state_28551;
state_28551 = G__28592;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28551){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28576,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_28575 = f__15990__auto__.call(null);(statearr_28575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28576);
return statearr_28575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28576,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_28639){var state_val_28640 = (state_28639[(1)]);if((state_val_28640 === (7)))
{var inst_28635 = (state_28639[(2)]);var state_28639__$1 = state_28639;var statearr_28641_28657 = state_28639__$1;(statearr_28641_28657[(2)] = inst_28635);
(statearr_28641_28657[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (6)))
{var inst_28628 = (state_28639[(7)]);var inst_28625 = (state_28639[(8)]);var inst_28632 = f.call(null,inst_28625,inst_28628);var inst_28625__$1 = inst_28632;var state_28639__$1 = (function (){var statearr_28642 = state_28639;(statearr_28642[(8)] = inst_28625__$1);
return statearr_28642;
})();var statearr_28643_28658 = state_28639__$1;(statearr_28643_28658[(2)] = null);
(statearr_28643_28658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (5)))
{var inst_28625 = (state_28639[(8)]);var state_28639__$1 = state_28639;var statearr_28644_28659 = state_28639__$1;(statearr_28644_28659[(2)] = inst_28625);
(statearr_28644_28659[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (4)))
{var inst_28628 = (state_28639[(7)]);var inst_28628__$1 = (state_28639[(2)]);var inst_28629 = (inst_28628__$1 == null);var state_28639__$1 = (function (){var statearr_28645 = state_28639;(statearr_28645[(7)] = inst_28628__$1);
return statearr_28645;
})();if(cljs.core.truth_(inst_28629))
{var statearr_28646_28660 = state_28639__$1;(statearr_28646_28660[(1)] = (5));
} else
{var statearr_28647_28661 = state_28639__$1;(statearr_28647_28661[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28640 === (3)))
{var inst_28637 = (state_28639[(2)]);var state_28639__$1 = state_28639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28639__$1,inst_28637);
} else
{if((state_val_28640 === (2)))
{var state_28639__$1 = state_28639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28639__$1,(4),ch);
} else
{if((state_val_28640 === (1)))
{var inst_28625 = init;var state_28639__$1 = (function (){var statearr_28648 = state_28639;(statearr_28648[(8)] = inst_28625);
return statearr_28648;
})();var statearr_28649_28662 = state_28639__$1;(statearr_28649_28662[(2)] = null);
(statearr_28649_28662[(1)] = (2));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28653 = [null,null,null,null,null,null,null,null,null];(statearr_28653[(0)] = state_machine__15975__auto__);
(statearr_28653[(1)] = (1));
return statearr_28653;
});
var state_machine__15975__auto____1 = (function (state_28639){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28639);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28654){if((e28654 instanceof Object))
{var ex__15978__auto__ = e28654;var statearr_28655_28663 = state_28639;(statearr_28655_28663[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28654;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28664 = state_28639;
state_28639 = G__28664;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28639){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_28656 = f__15990__auto__.call(null);(statearr_28656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_28738){var state_val_28739 = (state_28738[(1)]);if((state_val_28739 === (7)))
{var inst_28720 = (state_28738[(2)]);var state_28738__$1 = state_28738;var statearr_28740_28763 = state_28738__$1;(statearr_28740_28763[(2)] = inst_28720);
(statearr_28740_28763[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (1)))
{var inst_28714 = cljs.core.seq.call(null,coll);var inst_28715 = inst_28714;var state_28738__$1 = (function (){var statearr_28741 = state_28738;(statearr_28741[(7)] = inst_28715);
return statearr_28741;
})();var statearr_28742_28764 = state_28738__$1;(statearr_28742_28764[(2)] = null);
(statearr_28742_28764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (4)))
{var inst_28715 = (state_28738[(7)]);var inst_28718 = cljs.core.first.call(null,inst_28715);var state_28738__$1 = state_28738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28738__$1,(7),ch,inst_28718);
} else
{if((state_val_28739 === (13)))
{var inst_28732 = (state_28738[(2)]);var state_28738__$1 = state_28738;var statearr_28743_28765 = state_28738__$1;(statearr_28743_28765[(2)] = inst_28732);
(statearr_28743_28765[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (6)))
{var inst_28723 = (state_28738[(2)]);var state_28738__$1 = state_28738;if(cljs.core.truth_(inst_28723))
{var statearr_28744_28766 = state_28738__$1;(statearr_28744_28766[(1)] = (8));
} else
{var statearr_28745_28767 = state_28738__$1;(statearr_28745_28767[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (3)))
{var inst_28736 = (state_28738[(2)]);var state_28738__$1 = state_28738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28738__$1,inst_28736);
} else
{if((state_val_28739 === (12)))
{var state_28738__$1 = state_28738;var statearr_28746_28768 = state_28738__$1;(statearr_28746_28768[(2)] = null);
(statearr_28746_28768[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (2)))
{var inst_28715 = (state_28738[(7)]);var state_28738__$1 = state_28738;if(cljs.core.truth_(inst_28715))
{var statearr_28747_28769 = state_28738__$1;(statearr_28747_28769[(1)] = (4));
} else
{var statearr_28748_28770 = state_28738__$1;(statearr_28748_28770[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (11)))
{var inst_28729 = cljs.core.async.close_BANG_.call(null,ch);var state_28738__$1 = state_28738;var statearr_28749_28771 = state_28738__$1;(statearr_28749_28771[(2)] = inst_28729);
(statearr_28749_28771[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (9)))
{var state_28738__$1 = state_28738;if(cljs.core.truth_(close_QMARK_))
{var statearr_28750_28772 = state_28738__$1;(statearr_28750_28772[(1)] = (11));
} else
{var statearr_28751_28773 = state_28738__$1;(statearr_28751_28773[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (5)))
{var inst_28715 = (state_28738[(7)]);var state_28738__$1 = state_28738;var statearr_28752_28774 = state_28738__$1;(statearr_28752_28774[(2)] = inst_28715);
(statearr_28752_28774[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (10)))
{var inst_28734 = (state_28738[(2)]);var state_28738__$1 = state_28738;var statearr_28753_28775 = state_28738__$1;(statearr_28753_28775[(2)] = inst_28734);
(statearr_28753_28775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28739 === (8)))
{var inst_28715 = (state_28738[(7)]);var inst_28725 = cljs.core.next.call(null,inst_28715);var inst_28715__$1 = inst_28725;var state_28738__$1 = (function (){var statearr_28754 = state_28738;(statearr_28754[(7)] = inst_28715__$1);
return statearr_28754;
})();var statearr_28755_28776 = state_28738__$1;(statearr_28755_28776[(2)] = null);
(statearr_28755_28776[(1)] = (2));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28759 = [null,null,null,null,null,null,null,null];(statearr_28759[(0)] = state_machine__15975__auto__);
(statearr_28759[(1)] = (1));
return statearr_28759;
});
var state_machine__15975__auto____1 = (function (state_28738){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28738);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28760){if((e28760 instanceof Object))
{var ex__15978__auto__ = e28760;var statearr_28761_28777 = state_28738;(statearr_28761_28777[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28760;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28778 = state_28738;
state_28738 = G__28778;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28738){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_28762 = f__15990__auto__.call(null);(statearr_28762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_28762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
cljs.core.async.Mux = (function (){var obj28780 = {};return obj28780;
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
cljs.core.async.Mult = (function (){var obj28782 = {};return obj28782;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29004 = (function (cs,ch,mult,meta29005){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29005 = meta29005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29004.cljs$lang$type = true;
cljs.core.async.t29004.cljs$lang$ctorStr = "cljs.core.async/t29004";
cljs.core.async.t29004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t29004");
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29006){var self__ = this;
var _29006__$1 = this;return self__.meta29005;
});})(cs))
;
cljs.core.async.t29004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29006,meta29005__$1){var self__ = this;
var _29006__$1 = this;return (new cljs.core.async.t29004(self__.cs,self__.ch,self__.mult,meta29005__$1));
});})(cs))
;
cljs.core.async.__GT_t29004 = ((function (cs){
return (function __GT_t29004(cs__$1,ch__$1,mult__$1,meta29005){return (new cljs.core.async.t29004(cs__$1,ch__$1,mult__$1,meta29005));
});})(cs))
;
}
return (new cljs.core.async.t29004(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___29225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29225,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29225,cs,m,dchan,dctr,done){
return (function (state_29137){var state_val_29138 = (state_29137[(1)]);if((state_val_29138 === (7)))
{var inst_29133 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29139_29226 = state_29137__$1;(statearr_29139_29226[(2)] = inst_29133);
(statearr_29139_29226[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (20)))
{var inst_29038 = (state_29137[(7)]);var inst_29048 = cljs.core.first.call(null,inst_29038);var inst_29049 = cljs.core.nth.call(null,inst_29048,(0),null);var inst_29050 = cljs.core.nth.call(null,inst_29048,(1),null);var state_29137__$1 = (function (){var statearr_29140 = state_29137;(statearr_29140[(8)] = inst_29049);
return statearr_29140;
})();if(cljs.core.truth_(inst_29050))
{var statearr_29141_29227 = state_29137__$1;(statearr_29141_29227[(1)] = (22));
} else
{var statearr_29142_29228 = state_29137__$1;(statearr_29142_29228[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (27)))
{var inst_29009 = (state_29137[(9)]);var inst_29085 = (state_29137[(10)]);var inst_29080 = (state_29137[(11)]);var inst_29078 = (state_29137[(12)]);var inst_29085__$1 = cljs.core._nth.call(null,inst_29078,inst_29080);var inst_29086 = cljs.core.async.put_BANG_.call(null,inst_29085__$1,inst_29009,done);var state_29137__$1 = (function (){var statearr_29143 = state_29137;(statearr_29143[(10)] = inst_29085__$1);
return statearr_29143;
})();if(cljs.core.truth_(inst_29086))
{var statearr_29144_29229 = state_29137__$1;(statearr_29144_29229[(1)] = (30));
} else
{var statearr_29145_29230 = state_29137__$1;(statearr_29145_29230[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (1)))
{var state_29137__$1 = state_29137;var statearr_29146_29231 = state_29137__$1;(statearr_29146_29231[(2)] = null);
(statearr_29146_29231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (24)))
{var inst_29038 = (state_29137[(7)]);var inst_29055 = (state_29137[(2)]);var inst_29056 = cljs.core.next.call(null,inst_29038);var inst_29018 = inst_29056;var inst_29019 = null;var inst_29020 = (0);var inst_29021 = (0);var state_29137__$1 = (function (){var statearr_29147 = state_29137;(statearr_29147[(13)] = inst_29018);
(statearr_29147[(14)] = inst_29021);
(statearr_29147[(15)] = inst_29019);
(statearr_29147[(16)] = inst_29020);
(statearr_29147[(17)] = inst_29055);
return statearr_29147;
})();var statearr_29148_29232 = state_29137__$1;(statearr_29148_29232[(2)] = null);
(statearr_29148_29232[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (39)))
{var state_29137__$1 = state_29137;var statearr_29152_29233 = state_29137__$1;(statearr_29152_29233[(2)] = null);
(statearr_29152_29233[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (4)))
{var inst_29009 = (state_29137[(9)]);var inst_29009__$1 = (state_29137[(2)]);var inst_29010 = (inst_29009__$1 == null);var state_29137__$1 = (function (){var statearr_29153 = state_29137;(statearr_29153[(9)] = inst_29009__$1);
return statearr_29153;
})();if(cljs.core.truth_(inst_29010))
{var statearr_29154_29234 = state_29137__$1;(statearr_29154_29234[(1)] = (5));
} else
{var statearr_29155_29235 = state_29137__$1;(statearr_29155_29235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (15)))
{var inst_29018 = (state_29137[(13)]);var inst_29021 = (state_29137[(14)]);var inst_29019 = (state_29137[(15)]);var inst_29020 = (state_29137[(16)]);var inst_29034 = (state_29137[(2)]);var inst_29035 = (inst_29021 + (1));var tmp29149 = inst_29018;var tmp29150 = inst_29019;var tmp29151 = inst_29020;var inst_29018__$1 = tmp29149;var inst_29019__$1 = tmp29150;var inst_29020__$1 = tmp29151;var inst_29021__$1 = inst_29035;var state_29137__$1 = (function (){var statearr_29156 = state_29137;(statearr_29156[(18)] = inst_29034);
(statearr_29156[(13)] = inst_29018__$1);
(statearr_29156[(14)] = inst_29021__$1);
(statearr_29156[(15)] = inst_29019__$1);
(statearr_29156[(16)] = inst_29020__$1);
return statearr_29156;
})();var statearr_29157_29236 = state_29137__$1;(statearr_29157_29236[(2)] = null);
(statearr_29157_29236[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (21)))
{var inst_29059 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29161_29237 = state_29137__$1;(statearr_29161_29237[(2)] = inst_29059);
(statearr_29161_29237[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (31)))
{var inst_29085 = (state_29137[(10)]);var inst_29089 = done.call(null,null);var inst_29090 = cljs.core.async.untap_STAR_.call(null,m,inst_29085);var state_29137__$1 = (function (){var statearr_29162 = state_29137;(statearr_29162[(19)] = inst_29089);
return statearr_29162;
})();var statearr_29163_29238 = state_29137__$1;(statearr_29163_29238[(2)] = inst_29090);
(statearr_29163_29238[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (32)))
{var inst_29080 = (state_29137[(11)]);var inst_29078 = (state_29137[(12)]);var inst_29077 = (state_29137[(20)]);var inst_29079 = (state_29137[(21)]);var inst_29092 = (state_29137[(2)]);var inst_29093 = (inst_29080 + (1));var tmp29158 = inst_29078;var tmp29159 = inst_29077;var tmp29160 = inst_29079;var inst_29077__$1 = tmp29159;var inst_29078__$1 = tmp29158;var inst_29079__$1 = tmp29160;var inst_29080__$1 = inst_29093;var state_29137__$1 = (function (){var statearr_29164 = state_29137;(statearr_29164[(11)] = inst_29080__$1);
(statearr_29164[(12)] = inst_29078__$1);
(statearr_29164[(20)] = inst_29077__$1);
(statearr_29164[(21)] = inst_29079__$1);
(statearr_29164[(22)] = inst_29092);
return statearr_29164;
})();var statearr_29165_29239 = state_29137__$1;(statearr_29165_29239[(2)] = null);
(statearr_29165_29239[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (40)))
{var inst_29105 = (state_29137[(23)]);var inst_29109 = done.call(null,null);var inst_29110 = cljs.core.async.untap_STAR_.call(null,m,inst_29105);var state_29137__$1 = (function (){var statearr_29166 = state_29137;(statearr_29166[(24)] = inst_29109);
return statearr_29166;
})();var statearr_29167_29240 = state_29137__$1;(statearr_29167_29240[(2)] = inst_29110);
(statearr_29167_29240[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (33)))
{var inst_29096 = (state_29137[(25)]);var inst_29098 = cljs.core.chunked_seq_QMARK_.call(null,inst_29096);var state_29137__$1 = state_29137;if(inst_29098)
{var statearr_29168_29241 = state_29137__$1;(statearr_29168_29241[(1)] = (36));
} else
{var statearr_29169_29242 = state_29137__$1;(statearr_29169_29242[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (13)))
{var inst_29028 = (state_29137[(26)]);var inst_29031 = cljs.core.async.close_BANG_.call(null,inst_29028);var state_29137__$1 = state_29137;var statearr_29170_29243 = state_29137__$1;(statearr_29170_29243[(2)] = inst_29031);
(statearr_29170_29243[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (22)))
{var inst_29049 = (state_29137[(8)]);var inst_29052 = cljs.core.async.close_BANG_.call(null,inst_29049);var state_29137__$1 = state_29137;var statearr_29171_29244 = state_29137__$1;(statearr_29171_29244[(2)] = inst_29052);
(statearr_29171_29244[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (36)))
{var inst_29096 = (state_29137[(25)]);var inst_29100 = cljs.core.chunk_first.call(null,inst_29096);var inst_29101 = cljs.core.chunk_rest.call(null,inst_29096);var inst_29102 = cljs.core.count.call(null,inst_29100);var inst_29077 = inst_29101;var inst_29078 = inst_29100;var inst_29079 = inst_29102;var inst_29080 = (0);var state_29137__$1 = (function (){var statearr_29172 = state_29137;(statearr_29172[(11)] = inst_29080);
(statearr_29172[(12)] = inst_29078);
(statearr_29172[(20)] = inst_29077);
(statearr_29172[(21)] = inst_29079);
return statearr_29172;
})();var statearr_29173_29245 = state_29137__$1;(statearr_29173_29245[(2)] = null);
(statearr_29173_29245[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (41)))
{var inst_29096 = (state_29137[(25)]);var inst_29112 = (state_29137[(2)]);var inst_29113 = cljs.core.next.call(null,inst_29096);var inst_29077 = inst_29113;var inst_29078 = null;var inst_29079 = (0);var inst_29080 = (0);var state_29137__$1 = (function (){var statearr_29174 = state_29137;(statearr_29174[(11)] = inst_29080);
(statearr_29174[(27)] = inst_29112);
(statearr_29174[(12)] = inst_29078);
(statearr_29174[(20)] = inst_29077);
(statearr_29174[(21)] = inst_29079);
return statearr_29174;
})();var statearr_29175_29246 = state_29137__$1;(statearr_29175_29246[(2)] = null);
(statearr_29175_29246[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (43)))
{var state_29137__$1 = state_29137;var statearr_29176_29247 = state_29137__$1;(statearr_29176_29247[(2)] = null);
(statearr_29176_29247[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (29)))
{var inst_29121 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29177_29248 = state_29137__$1;(statearr_29177_29248[(2)] = inst_29121);
(statearr_29177_29248[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (44)))
{var inst_29130 = (state_29137[(2)]);var state_29137__$1 = (function (){var statearr_29178 = state_29137;(statearr_29178[(28)] = inst_29130);
return statearr_29178;
})();var statearr_29179_29249 = state_29137__$1;(statearr_29179_29249[(2)] = null);
(statearr_29179_29249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (6)))
{var inst_29069 = (state_29137[(29)]);var inst_29068 = cljs.core.deref.call(null,cs);var inst_29069__$1 = cljs.core.keys.call(null,inst_29068);var inst_29070 = cljs.core.count.call(null,inst_29069__$1);var inst_29071 = cljs.core.reset_BANG_.call(null,dctr,inst_29070);var inst_29076 = cljs.core.seq.call(null,inst_29069__$1);var inst_29077 = inst_29076;var inst_29078 = null;var inst_29079 = (0);var inst_29080 = (0);var state_29137__$1 = (function (){var statearr_29180 = state_29137;(statearr_29180[(11)] = inst_29080);
(statearr_29180[(29)] = inst_29069__$1);
(statearr_29180[(12)] = inst_29078);
(statearr_29180[(30)] = inst_29071);
(statearr_29180[(20)] = inst_29077);
(statearr_29180[(21)] = inst_29079);
return statearr_29180;
})();var statearr_29181_29250 = state_29137__$1;(statearr_29181_29250[(2)] = null);
(statearr_29181_29250[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (28)))
{var inst_29096 = (state_29137[(25)]);var inst_29077 = (state_29137[(20)]);var inst_29096__$1 = cljs.core.seq.call(null,inst_29077);var state_29137__$1 = (function (){var statearr_29182 = state_29137;(statearr_29182[(25)] = inst_29096__$1);
return statearr_29182;
})();if(inst_29096__$1)
{var statearr_29183_29251 = state_29137__$1;(statearr_29183_29251[(1)] = (33));
} else
{var statearr_29184_29252 = state_29137__$1;(statearr_29184_29252[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (25)))
{var inst_29080 = (state_29137[(11)]);var inst_29079 = (state_29137[(21)]);var inst_29082 = (inst_29080 < inst_29079);var inst_29083 = inst_29082;var state_29137__$1 = state_29137;if(cljs.core.truth_(inst_29083))
{var statearr_29185_29253 = state_29137__$1;(statearr_29185_29253[(1)] = (27));
} else
{var statearr_29186_29254 = state_29137__$1;(statearr_29186_29254[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (34)))
{var state_29137__$1 = state_29137;var statearr_29187_29255 = state_29137__$1;(statearr_29187_29255[(2)] = null);
(statearr_29187_29255[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (17)))
{var state_29137__$1 = state_29137;var statearr_29188_29256 = state_29137__$1;(statearr_29188_29256[(2)] = null);
(statearr_29188_29256[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (3)))
{var inst_29135 = (state_29137[(2)]);var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else
{if((state_val_29138 === (12)))
{var inst_29064 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29189_29257 = state_29137__$1;(statearr_29189_29257[(2)] = inst_29064);
(statearr_29189_29257[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (2)))
{var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(4),ch);
} else
{if((state_val_29138 === (23)))
{var state_29137__$1 = state_29137;var statearr_29190_29258 = state_29137__$1;(statearr_29190_29258[(2)] = null);
(statearr_29190_29258[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (35)))
{var inst_29119 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29191_29259 = state_29137__$1;(statearr_29191_29259[(2)] = inst_29119);
(statearr_29191_29259[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (19)))
{var inst_29038 = (state_29137[(7)]);var inst_29042 = cljs.core.chunk_first.call(null,inst_29038);var inst_29043 = cljs.core.chunk_rest.call(null,inst_29038);var inst_29044 = cljs.core.count.call(null,inst_29042);var inst_29018 = inst_29043;var inst_29019 = inst_29042;var inst_29020 = inst_29044;var inst_29021 = (0);var state_29137__$1 = (function (){var statearr_29192 = state_29137;(statearr_29192[(13)] = inst_29018);
(statearr_29192[(14)] = inst_29021);
(statearr_29192[(15)] = inst_29019);
(statearr_29192[(16)] = inst_29020);
return statearr_29192;
})();var statearr_29193_29260 = state_29137__$1;(statearr_29193_29260[(2)] = null);
(statearr_29193_29260[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (11)))
{var inst_29018 = (state_29137[(13)]);var inst_29038 = (state_29137[(7)]);var inst_29038__$1 = cljs.core.seq.call(null,inst_29018);var state_29137__$1 = (function (){var statearr_29194 = state_29137;(statearr_29194[(7)] = inst_29038__$1);
return statearr_29194;
})();if(inst_29038__$1)
{var statearr_29195_29261 = state_29137__$1;(statearr_29195_29261[(1)] = (16));
} else
{var statearr_29196_29262 = state_29137__$1;(statearr_29196_29262[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (9)))
{var inst_29066 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29197_29263 = state_29137__$1;(statearr_29197_29263[(2)] = inst_29066);
(statearr_29197_29263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (5)))
{var inst_29016 = cljs.core.deref.call(null,cs);var inst_29017 = cljs.core.seq.call(null,inst_29016);var inst_29018 = inst_29017;var inst_29019 = null;var inst_29020 = (0);var inst_29021 = (0);var state_29137__$1 = (function (){var statearr_29198 = state_29137;(statearr_29198[(13)] = inst_29018);
(statearr_29198[(14)] = inst_29021);
(statearr_29198[(15)] = inst_29019);
(statearr_29198[(16)] = inst_29020);
return statearr_29198;
})();var statearr_29199_29264 = state_29137__$1;(statearr_29199_29264[(2)] = null);
(statearr_29199_29264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (14)))
{var state_29137__$1 = state_29137;var statearr_29200_29265 = state_29137__$1;(statearr_29200_29265[(2)] = null);
(statearr_29200_29265[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (45)))
{var inst_29127 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29201_29266 = state_29137__$1;(statearr_29201_29266[(2)] = inst_29127);
(statearr_29201_29266[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (26)))
{var inst_29069 = (state_29137[(29)]);var inst_29123 = (state_29137[(2)]);var inst_29124 = cljs.core.seq.call(null,inst_29069);var state_29137__$1 = (function (){var statearr_29202 = state_29137;(statearr_29202[(31)] = inst_29123);
return statearr_29202;
})();if(inst_29124)
{var statearr_29203_29267 = state_29137__$1;(statearr_29203_29267[(1)] = (42));
} else
{var statearr_29204_29268 = state_29137__$1;(statearr_29204_29268[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (16)))
{var inst_29038 = (state_29137[(7)]);var inst_29040 = cljs.core.chunked_seq_QMARK_.call(null,inst_29038);var state_29137__$1 = state_29137;if(inst_29040)
{var statearr_29205_29269 = state_29137__$1;(statearr_29205_29269[(1)] = (19));
} else
{var statearr_29206_29270 = state_29137__$1;(statearr_29206_29270[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (38)))
{var inst_29116 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29207_29271 = state_29137__$1;(statearr_29207_29271[(2)] = inst_29116);
(statearr_29207_29271[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (30)))
{var state_29137__$1 = state_29137;var statearr_29208_29272 = state_29137__$1;(statearr_29208_29272[(2)] = null);
(statearr_29208_29272[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (10)))
{var inst_29021 = (state_29137[(14)]);var inst_29019 = (state_29137[(15)]);var inst_29027 = cljs.core._nth.call(null,inst_29019,inst_29021);var inst_29028 = cljs.core.nth.call(null,inst_29027,(0),null);var inst_29029 = cljs.core.nth.call(null,inst_29027,(1),null);var state_29137__$1 = (function (){var statearr_29209 = state_29137;(statearr_29209[(26)] = inst_29028);
return statearr_29209;
})();if(cljs.core.truth_(inst_29029))
{var statearr_29210_29273 = state_29137__$1;(statearr_29210_29273[(1)] = (13));
} else
{var statearr_29211_29274 = state_29137__$1;(statearr_29211_29274[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (18)))
{var inst_29062 = (state_29137[(2)]);var state_29137__$1 = state_29137;var statearr_29212_29275 = state_29137__$1;(statearr_29212_29275[(2)] = inst_29062);
(statearr_29212_29275[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (42)))
{var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(45),dchan);
} else
{if((state_val_29138 === (37)))
{var inst_29105 = (state_29137[(23)]);var inst_29009 = (state_29137[(9)]);var inst_29096 = (state_29137[(25)]);var inst_29105__$1 = cljs.core.first.call(null,inst_29096);var inst_29106 = cljs.core.async.put_BANG_.call(null,inst_29105__$1,inst_29009,done);var state_29137__$1 = (function (){var statearr_29213 = state_29137;(statearr_29213[(23)] = inst_29105__$1);
return statearr_29213;
})();if(cljs.core.truth_(inst_29106))
{var statearr_29214_29276 = state_29137__$1;(statearr_29214_29276[(1)] = (39));
} else
{var statearr_29215_29277 = state_29137__$1;(statearr_29215_29277[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29138 === (8)))
{var inst_29021 = (state_29137[(14)]);var inst_29020 = (state_29137[(16)]);var inst_29023 = (inst_29021 < inst_29020);var inst_29024 = inst_29023;var state_29137__$1 = state_29137;if(cljs.core.truth_(inst_29024))
{var statearr_29216_29278 = state_29137__$1;(statearr_29216_29278[(1)] = (10));
} else
{var statearr_29217_29279 = state_29137__$1;(statearr_29217_29279[(1)] = (11));
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
});})(c__15989__auto___29225,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___29225,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29221[(0)] = state_machine__15975__auto__);
(statearr_29221[(1)] = (1));
return statearr_29221;
});
var state_machine__15975__auto____1 = (function (state_29137){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29137);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object))
{var ex__15978__auto__ = e29222;var statearr_29223_29280 = state_29137;(statearr_29223_29280[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29281 = state_29137;
state_29137 = G__29281;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29225,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_29224 = f__15990__auto__.call(null);(statearr_29224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29225);
return statearr_29224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29225,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj29283 = {};return obj29283;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29284){var map__29289 = p__29284;var map__29289__$1 = ((cljs.core.seq_QMARK_.call(null,map__29289))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289):map__29289);var opts = map__29289__$1;var statearr_29290_29293 = state;(statearr_29290_29293[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29289,map__29289__$1,opts){
return (function (val){var statearr_29291_29294 = state;(statearr_29291_29294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29289,map__29289__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_29292_29295 = state;(statearr_29292_29295[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29284 = null;if (arguments.length > 3) {
  p__29284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29284);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29296){
var state = cljs.core.first(arglist__29296);
arglist__29296 = cljs.core.next(arglist__29296);
var cont_block = cljs.core.first(arglist__29296);
arglist__29296 = cljs.core.next(arglist__29296);
var ports = cljs.core.first(arglist__29296);
var p__29284 = cljs.core.rest(arglist__29296);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29284);
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
;var m = (function (){if(typeof cljs.core.async.t29416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29416 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29417){
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
this.meta29417 = meta29417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29416.cljs$lang$type = true;
cljs.core.async.t29416.cljs$lang$ctorStr = "cljs.core.async/t29416";
cljs.core.async.t29416.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t29416");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29418){var self__ = this;
var _29418__$1 = this;return self__.meta29417;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29418,meta29417__$1){var self__ = this;
var _29418__$1 = this;return (new cljs.core.async.t29416(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29417__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29416 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29416(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29417){return (new cljs.core.async.t29416(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29417));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29416(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___29535 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29488){var state_val_29489 = (state_29488[(1)]);if((state_val_29489 === (7)))
{var inst_29432 = (state_29488[(7)]);var inst_29437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29432);var state_29488__$1 = state_29488;var statearr_29490_29536 = state_29488__$1;(statearr_29490_29536[(2)] = inst_29437);
(statearr_29490_29536[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (20)))
{var inst_29447 = (state_29488[(8)]);var state_29488__$1 = state_29488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29488__$1,(23),out,inst_29447);
} else
{if((state_val_29489 === (1)))
{var inst_29422 = (state_29488[(9)]);var inst_29422__$1 = calc_state.call(null);var inst_29423 = cljs.core.seq_QMARK_.call(null,inst_29422__$1);var state_29488__$1 = (function (){var statearr_29491 = state_29488;(statearr_29491[(9)] = inst_29422__$1);
return statearr_29491;
})();if(inst_29423)
{var statearr_29492_29537 = state_29488__$1;(statearr_29492_29537[(1)] = (2));
} else
{var statearr_29493_29538 = state_29488__$1;(statearr_29493_29538[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (24)))
{var inst_29440 = (state_29488[(10)]);var inst_29432 = inst_29440;var state_29488__$1 = (function (){var statearr_29494 = state_29488;(statearr_29494[(7)] = inst_29432);
return statearr_29494;
})();var statearr_29495_29539 = state_29488__$1;(statearr_29495_29539[(2)] = null);
(statearr_29495_29539[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (4)))
{var inst_29422 = (state_29488[(9)]);var inst_29428 = (state_29488[(2)]);var inst_29429 = cljs.core.get.call(null,inst_29428,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29430 = cljs.core.get.call(null,inst_29428,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29431 = cljs.core.get.call(null,inst_29428,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29432 = inst_29422;var state_29488__$1 = (function (){var statearr_29496 = state_29488;(statearr_29496[(11)] = inst_29431);
(statearr_29496[(12)] = inst_29430);
(statearr_29496[(7)] = inst_29432);
(statearr_29496[(13)] = inst_29429);
return statearr_29496;
})();var statearr_29497_29540 = state_29488__$1;(statearr_29497_29540[(2)] = null);
(statearr_29497_29540[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (15)))
{var state_29488__$1 = state_29488;var statearr_29498_29541 = state_29488__$1;(statearr_29498_29541[(2)] = null);
(statearr_29498_29541[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (21)))
{var inst_29440 = (state_29488[(10)]);var inst_29432 = inst_29440;var state_29488__$1 = (function (){var statearr_29499 = state_29488;(statearr_29499[(7)] = inst_29432);
return statearr_29499;
})();var statearr_29500_29542 = state_29488__$1;(statearr_29500_29542[(2)] = null);
(statearr_29500_29542[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (13)))
{var inst_29484 = (state_29488[(2)]);var state_29488__$1 = state_29488;var statearr_29501_29543 = state_29488__$1;(statearr_29501_29543[(2)] = inst_29484);
(statearr_29501_29543[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (22)))
{var inst_29482 = (state_29488[(2)]);var state_29488__$1 = state_29488;var statearr_29502_29544 = state_29488__$1;(statearr_29502_29544[(2)] = inst_29482);
(statearr_29502_29544[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (6)))
{var inst_29486 = (state_29488[(2)]);var state_29488__$1 = state_29488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29488__$1,inst_29486);
} else
{if((state_val_29489 === (25)))
{var state_29488__$1 = state_29488;var statearr_29503_29545 = state_29488__$1;(statearr_29503_29545[(2)] = null);
(statearr_29503_29545[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (17)))
{var inst_29462 = (state_29488[(14)]);var state_29488__$1 = state_29488;var statearr_29504_29546 = state_29488__$1;(statearr_29504_29546[(2)] = inst_29462);
(statearr_29504_29546[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (3)))
{var inst_29422 = (state_29488[(9)]);var state_29488__$1 = state_29488;var statearr_29505_29547 = state_29488__$1;(statearr_29505_29547[(2)] = inst_29422);
(statearr_29505_29547[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (12)))
{var inst_29462 = (state_29488[(14)]);var inst_29443 = (state_29488[(15)]);var inst_29448 = (state_29488[(16)]);var inst_29462__$1 = inst_29443.call(null,inst_29448);var state_29488__$1 = (function (){var statearr_29506 = state_29488;(statearr_29506[(14)] = inst_29462__$1);
return statearr_29506;
})();if(cljs.core.truth_(inst_29462__$1))
{var statearr_29507_29548 = state_29488__$1;(statearr_29507_29548[(1)] = (17));
} else
{var statearr_29508_29549 = state_29488__$1;(statearr_29508_29549[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (2)))
{var inst_29422 = (state_29488[(9)]);var inst_29425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29422);var state_29488__$1 = state_29488;var statearr_29509_29550 = state_29488__$1;(statearr_29509_29550[(2)] = inst_29425);
(statearr_29509_29550[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (23)))
{var inst_29473 = (state_29488[(2)]);var state_29488__$1 = state_29488;if(cljs.core.truth_(inst_29473))
{var statearr_29510_29551 = state_29488__$1;(statearr_29510_29551[(1)] = (24));
} else
{var statearr_29511_29552 = state_29488__$1;(statearr_29511_29552[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (19)))
{var inst_29470 = (state_29488[(2)]);var state_29488__$1 = state_29488;if(cljs.core.truth_(inst_29470))
{var statearr_29512_29553 = state_29488__$1;(statearr_29512_29553[(1)] = (20));
} else
{var statearr_29513_29554 = state_29488__$1;(statearr_29513_29554[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (11)))
{var inst_29447 = (state_29488[(8)]);var inst_29453 = (inst_29447 == null);var state_29488__$1 = state_29488;if(cljs.core.truth_(inst_29453))
{var statearr_29514_29555 = state_29488__$1;(statearr_29514_29555[(1)] = (14));
} else
{var statearr_29515_29556 = state_29488__$1;(statearr_29515_29556[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (9)))
{var inst_29440 = (state_29488[(10)]);var inst_29440__$1 = (state_29488[(2)]);var inst_29441 = cljs.core.get.call(null,inst_29440__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29442 = cljs.core.get.call(null,inst_29440__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29443 = cljs.core.get.call(null,inst_29440__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29488__$1 = (function (){var statearr_29516 = state_29488;(statearr_29516[(17)] = inst_29442);
(statearr_29516[(15)] = inst_29443);
(statearr_29516[(10)] = inst_29440__$1);
return statearr_29516;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_29488__$1,(10),inst_29441);
} else
{if((state_val_29489 === (5)))
{var inst_29432 = (state_29488[(7)]);var inst_29435 = cljs.core.seq_QMARK_.call(null,inst_29432);var state_29488__$1 = state_29488;if(inst_29435)
{var statearr_29517_29557 = state_29488__$1;(statearr_29517_29557[(1)] = (7));
} else
{var statearr_29518_29558 = state_29488__$1;(statearr_29518_29558[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (14)))
{var inst_29448 = (state_29488[(16)]);var inst_29455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29448);var state_29488__$1 = state_29488;var statearr_29519_29559 = state_29488__$1;(statearr_29519_29559[(2)] = inst_29455);
(statearr_29519_29559[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (26)))
{var inst_29478 = (state_29488[(2)]);var state_29488__$1 = state_29488;var statearr_29520_29560 = state_29488__$1;(statearr_29520_29560[(2)] = inst_29478);
(statearr_29520_29560[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (16)))
{var inst_29458 = (state_29488[(2)]);var inst_29459 = calc_state.call(null);var inst_29432 = inst_29459;var state_29488__$1 = (function (){var statearr_29521 = state_29488;(statearr_29521[(7)] = inst_29432);
(statearr_29521[(18)] = inst_29458);
return statearr_29521;
})();var statearr_29522_29561 = state_29488__$1;(statearr_29522_29561[(2)] = null);
(statearr_29522_29561[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (10)))
{var inst_29447 = (state_29488[(8)]);var inst_29448 = (state_29488[(16)]);var inst_29446 = (state_29488[(2)]);var inst_29447__$1 = cljs.core.nth.call(null,inst_29446,(0),null);var inst_29448__$1 = cljs.core.nth.call(null,inst_29446,(1),null);var inst_29449 = (inst_29447__$1 == null);var inst_29450 = cljs.core._EQ_.call(null,inst_29448__$1,change);var inst_29451 = (inst_29449) || (inst_29450);var state_29488__$1 = (function (){var statearr_29523 = state_29488;(statearr_29523[(8)] = inst_29447__$1);
(statearr_29523[(16)] = inst_29448__$1);
return statearr_29523;
})();if(cljs.core.truth_(inst_29451))
{var statearr_29524_29562 = state_29488__$1;(statearr_29524_29562[(1)] = (11));
} else
{var statearr_29525_29563 = state_29488__$1;(statearr_29525_29563[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (18)))
{var inst_29442 = (state_29488[(17)]);var inst_29443 = (state_29488[(15)]);var inst_29448 = (state_29488[(16)]);var inst_29465 = cljs.core.empty_QMARK_.call(null,inst_29443);var inst_29466 = inst_29442.call(null,inst_29448);var inst_29467 = cljs.core.not.call(null,inst_29466);var inst_29468 = (inst_29465) && (inst_29467);var state_29488__$1 = state_29488;var statearr_29526_29564 = state_29488__$1;(statearr_29526_29564[(2)] = inst_29468);
(statearr_29526_29564[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29489 === (8)))
{var inst_29432 = (state_29488[(7)]);var state_29488__$1 = state_29488;var statearr_29527_29565 = state_29488__$1;(statearr_29527_29565[(2)] = inst_29432);
(statearr_29527_29565[(1)] = (9));
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
});})(c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29531[(0)] = state_machine__15975__auto__);
(statearr_29531[(1)] = (1));
return statearr_29531;
});
var state_machine__15975__auto____1 = (function (state_29488){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29488);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29532){if((e29532 instanceof Object))
{var ex__15978__auto__ = e29532;var statearr_29533_29566 = state_29488;(statearr_29533_29566[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29532;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29567 = state_29488;
state_29488 = G__29567;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29488){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_29534 = f__15990__auto__.call(null);(statearr_29534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29535);
return statearr_29534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29535,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29569 = {};return obj29569;
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
return (function (p1__29570_SHARP_){if(cljs.core.truth_(p1__29570_SHARP_.call(null,topic)))
{return p1__29570_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29570_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29693 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29694){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29694 = meta29694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29693.cljs$lang$type = true;
cljs.core.async.t29693.cljs$lang$ctorStr = "cljs.core.async/t29693";
cljs.core.async.t29693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t29693");
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29695){var self__ = this;
var _29695__$1 = this;return self__.meta29694;
});})(mults,ensure_mult))
;
cljs.core.async.t29693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29695,meta29694__$1){var self__ = this;
var _29695__$1 = this;return (new cljs.core.async.t29693(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29694__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29693 = ((function (mults,ensure_mult){
return (function __GT_t29693(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29694){return (new cljs.core.async.t29693(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29694));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29693(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___29815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29815,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29815,mults,ensure_mult,p){
return (function (state_29767){var state_val_29768 = (state_29767[(1)]);if((state_val_29768 === (7)))
{var inst_29763 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29769_29816 = state_29767__$1;(statearr_29769_29816[(2)] = inst_29763);
(statearr_29769_29816[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (20)))
{var state_29767__$1 = state_29767;var statearr_29770_29817 = state_29767__$1;(statearr_29770_29817[(2)] = null);
(statearr_29770_29817[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (1)))
{var state_29767__$1 = state_29767;var statearr_29771_29818 = state_29767__$1;(statearr_29771_29818[(2)] = null);
(statearr_29771_29818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (24)))
{var inst_29746 = (state_29767[(7)]);var inst_29755 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29746);var state_29767__$1 = state_29767;var statearr_29772_29819 = state_29767__$1;(statearr_29772_29819[(2)] = inst_29755);
(statearr_29772_29819[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (4)))
{var inst_29698 = (state_29767[(8)]);var inst_29698__$1 = (state_29767[(2)]);var inst_29699 = (inst_29698__$1 == null);var state_29767__$1 = (function (){var statearr_29773 = state_29767;(statearr_29773[(8)] = inst_29698__$1);
return statearr_29773;
})();if(cljs.core.truth_(inst_29699))
{var statearr_29774_29820 = state_29767__$1;(statearr_29774_29820[(1)] = (5));
} else
{var statearr_29775_29821 = state_29767__$1;(statearr_29775_29821[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (15)))
{var inst_29740 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29776_29822 = state_29767__$1;(statearr_29776_29822[(2)] = inst_29740);
(statearr_29776_29822[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (21)))
{var inst_29760 = (state_29767[(2)]);var state_29767__$1 = (function (){var statearr_29777 = state_29767;(statearr_29777[(9)] = inst_29760);
return statearr_29777;
})();var statearr_29778_29823 = state_29767__$1;(statearr_29778_29823[(2)] = null);
(statearr_29778_29823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (13)))
{var inst_29722 = (state_29767[(10)]);var inst_29724 = cljs.core.chunked_seq_QMARK_.call(null,inst_29722);var state_29767__$1 = state_29767;if(inst_29724)
{var statearr_29779_29824 = state_29767__$1;(statearr_29779_29824[(1)] = (16));
} else
{var statearr_29780_29825 = state_29767__$1;(statearr_29780_29825[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (22)))
{var inst_29752 = (state_29767[(2)]);var state_29767__$1 = state_29767;if(cljs.core.truth_(inst_29752))
{var statearr_29781_29826 = state_29767__$1;(statearr_29781_29826[(1)] = (23));
} else
{var statearr_29782_29827 = state_29767__$1;(statearr_29782_29827[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (6)))
{var inst_29746 = (state_29767[(7)]);var inst_29698 = (state_29767[(8)]);var inst_29748 = (state_29767[(11)]);var inst_29746__$1 = topic_fn.call(null,inst_29698);var inst_29747 = cljs.core.deref.call(null,mults);var inst_29748__$1 = cljs.core.get.call(null,inst_29747,inst_29746__$1);var state_29767__$1 = (function (){var statearr_29783 = state_29767;(statearr_29783[(7)] = inst_29746__$1);
(statearr_29783[(11)] = inst_29748__$1);
return statearr_29783;
})();if(cljs.core.truth_(inst_29748__$1))
{var statearr_29784_29828 = state_29767__$1;(statearr_29784_29828[(1)] = (19));
} else
{var statearr_29785_29829 = state_29767__$1;(statearr_29785_29829[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (25)))
{var inst_29757 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29786_29830 = state_29767__$1;(statearr_29786_29830[(2)] = inst_29757);
(statearr_29786_29830[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (17)))
{var inst_29722 = (state_29767[(10)]);var inst_29731 = cljs.core.first.call(null,inst_29722);var inst_29732 = cljs.core.async.muxch_STAR_.call(null,inst_29731);var inst_29733 = cljs.core.async.close_BANG_.call(null,inst_29732);var inst_29734 = cljs.core.next.call(null,inst_29722);var inst_29708 = inst_29734;var inst_29709 = null;var inst_29710 = (0);var inst_29711 = (0);var state_29767__$1 = (function (){var statearr_29787 = state_29767;(statearr_29787[(12)] = inst_29708);
(statearr_29787[(13)] = inst_29710);
(statearr_29787[(14)] = inst_29709);
(statearr_29787[(15)] = inst_29733);
(statearr_29787[(16)] = inst_29711);
return statearr_29787;
})();var statearr_29788_29831 = state_29767__$1;(statearr_29788_29831[(2)] = null);
(statearr_29788_29831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (3)))
{var inst_29765 = (state_29767[(2)]);var state_29767__$1 = state_29767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29767__$1,inst_29765);
} else
{if((state_val_29768 === (12)))
{var inst_29742 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29789_29832 = state_29767__$1;(statearr_29789_29832[(2)] = inst_29742);
(statearr_29789_29832[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (2)))
{var state_29767__$1 = state_29767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29767__$1,(4),ch);
} else
{if((state_val_29768 === (23)))
{var state_29767__$1 = state_29767;var statearr_29790_29833 = state_29767__$1;(statearr_29790_29833[(2)] = null);
(statearr_29790_29833[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (19)))
{var inst_29698 = (state_29767[(8)]);var inst_29748 = (state_29767[(11)]);var inst_29750 = cljs.core.async.muxch_STAR_.call(null,inst_29748);var state_29767__$1 = state_29767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29767__$1,(22),inst_29750,inst_29698);
} else
{if((state_val_29768 === (11)))
{var inst_29722 = (state_29767[(10)]);var inst_29708 = (state_29767[(12)]);var inst_29722__$1 = cljs.core.seq.call(null,inst_29708);var state_29767__$1 = (function (){var statearr_29791 = state_29767;(statearr_29791[(10)] = inst_29722__$1);
return statearr_29791;
})();if(inst_29722__$1)
{var statearr_29792_29834 = state_29767__$1;(statearr_29792_29834[(1)] = (13));
} else
{var statearr_29793_29835 = state_29767__$1;(statearr_29793_29835[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (9)))
{var inst_29744 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29794_29836 = state_29767__$1;(statearr_29794_29836[(2)] = inst_29744);
(statearr_29794_29836[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (5)))
{var inst_29705 = cljs.core.deref.call(null,mults);var inst_29706 = cljs.core.vals.call(null,inst_29705);var inst_29707 = cljs.core.seq.call(null,inst_29706);var inst_29708 = inst_29707;var inst_29709 = null;var inst_29710 = (0);var inst_29711 = (0);var state_29767__$1 = (function (){var statearr_29795 = state_29767;(statearr_29795[(12)] = inst_29708);
(statearr_29795[(13)] = inst_29710);
(statearr_29795[(14)] = inst_29709);
(statearr_29795[(16)] = inst_29711);
return statearr_29795;
})();var statearr_29796_29837 = state_29767__$1;(statearr_29796_29837[(2)] = null);
(statearr_29796_29837[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (14)))
{var state_29767__$1 = state_29767;var statearr_29800_29838 = state_29767__$1;(statearr_29800_29838[(2)] = null);
(statearr_29800_29838[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (16)))
{var inst_29722 = (state_29767[(10)]);var inst_29726 = cljs.core.chunk_first.call(null,inst_29722);var inst_29727 = cljs.core.chunk_rest.call(null,inst_29722);var inst_29728 = cljs.core.count.call(null,inst_29726);var inst_29708 = inst_29727;var inst_29709 = inst_29726;var inst_29710 = inst_29728;var inst_29711 = (0);var state_29767__$1 = (function (){var statearr_29801 = state_29767;(statearr_29801[(12)] = inst_29708);
(statearr_29801[(13)] = inst_29710);
(statearr_29801[(14)] = inst_29709);
(statearr_29801[(16)] = inst_29711);
return statearr_29801;
})();var statearr_29802_29839 = state_29767__$1;(statearr_29802_29839[(2)] = null);
(statearr_29802_29839[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (10)))
{var inst_29708 = (state_29767[(12)]);var inst_29710 = (state_29767[(13)]);var inst_29709 = (state_29767[(14)]);var inst_29711 = (state_29767[(16)]);var inst_29716 = cljs.core._nth.call(null,inst_29709,inst_29711);var inst_29717 = cljs.core.async.muxch_STAR_.call(null,inst_29716);var inst_29718 = cljs.core.async.close_BANG_.call(null,inst_29717);var inst_29719 = (inst_29711 + (1));var tmp29797 = inst_29708;var tmp29798 = inst_29710;var tmp29799 = inst_29709;var inst_29708__$1 = tmp29797;var inst_29709__$1 = tmp29799;var inst_29710__$1 = tmp29798;var inst_29711__$1 = inst_29719;var state_29767__$1 = (function (){var statearr_29803 = state_29767;(statearr_29803[(12)] = inst_29708__$1);
(statearr_29803[(17)] = inst_29718);
(statearr_29803[(13)] = inst_29710__$1);
(statearr_29803[(14)] = inst_29709__$1);
(statearr_29803[(16)] = inst_29711__$1);
return statearr_29803;
})();var statearr_29804_29840 = state_29767__$1;(statearr_29804_29840[(2)] = null);
(statearr_29804_29840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (18)))
{var inst_29737 = (state_29767[(2)]);var state_29767__$1 = state_29767;var statearr_29805_29841 = state_29767__$1;(statearr_29805_29841[(2)] = inst_29737);
(statearr_29805_29841[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29768 === (8)))
{var inst_29710 = (state_29767[(13)]);var inst_29711 = (state_29767[(16)]);var inst_29713 = (inst_29711 < inst_29710);var inst_29714 = inst_29713;var state_29767__$1 = state_29767;if(cljs.core.truth_(inst_29714))
{var statearr_29806_29842 = state_29767__$1;(statearr_29806_29842[(1)] = (10));
} else
{var statearr_29807_29843 = state_29767__$1;(statearr_29807_29843[(1)] = (11));
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
});})(c__15989__auto___29815,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___29815,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29811[(0)] = state_machine__15975__auto__);
(statearr_29811[(1)] = (1));
return statearr_29811;
});
var state_machine__15975__auto____1 = (function (state_29767){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29767);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object))
{var ex__15978__auto__ = e29812;var statearr_29813_29844 = state_29767;(statearr_29813_29844[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29845 = state_29767;
state_29767 = G__29845;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29767){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29815,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_29814 = f__15990__auto__.call(null);(statearr_29814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29815);
return statearr_29814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29815,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___29982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29952){var state_val_29953 = (state_29952[(1)]);if((state_val_29953 === (7)))
{var state_29952__$1 = state_29952;var statearr_29954_29983 = state_29952__$1;(statearr_29954_29983[(2)] = null);
(statearr_29954_29983[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (1)))
{var state_29952__$1 = state_29952;var statearr_29955_29984 = state_29952__$1;(statearr_29955_29984[(2)] = null);
(statearr_29955_29984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (4)))
{var inst_29916 = (state_29952[(7)]);var inst_29918 = (inst_29916 < cnt);var state_29952__$1 = state_29952;if(cljs.core.truth_(inst_29918))
{var statearr_29956_29985 = state_29952__$1;(statearr_29956_29985[(1)] = (6));
} else
{var statearr_29957_29986 = state_29952__$1;(statearr_29957_29986[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (15)))
{var inst_29948 = (state_29952[(2)]);var state_29952__$1 = state_29952;var statearr_29958_29987 = state_29952__$1;(statearr_29958_29987[(2)] = inst_29948);
(statearr_29958_29987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (13)))
{var inst_29941 = cljs.core.async.close_BANG_.call(null,out);var state_29952__$1 = state_29952;var statearr_29959_29988 = state_29952__$1;(statearr_29959_29988[(2)] = inst_29941);
(statearr_29959_29988[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (6)))
{var state_29952__$1 = state_29952;var statearr_29960_29989 = state_29952__$1;(statearr_29960_29989[(2)] = null);
(statearr_29960_29989[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (3)))
{var inst_29950 = (state_29952[(2)]);var state_29952__$1 = state_29952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29952__$1,inst_29950);
} else
{if((state_val_29953 === (12)))
{var inst_29938 = (state_29952[(8)]);var inst_29938__$1 = (state_29952[(2)]);var inst_29939 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29938__$1);var state_29952__$1 = (function (){var statearr_29961 = state_29952;(statearr_29961[(8)] = inst_29938__$1);
return statearr_29961;
})();if(cljs.core.truth_(inst_29939))
{var statearr_29962_29990 = state_29952__$1;(statearr_29962_29990[(1)] = (13));
} else
{var statearr_29963_29991 = state_29952__$1;(statearr_29963_29991[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (2)))
{var inst_29915 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29916 = (0);var state_29952__$1 = (function (){var statearr_29964 = state_29952;(statearr_29964[(7)] = inst_29916);
(statearr_29964[(9)] = inst_29915);
return statearr_29964;
})();var statearr_29965_29992 = state_29952__$1;(statearr_29965_29992[(2)] = null);
(statearr_29965_29992[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (11)))
{var inst_29916 = (state_29952[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29952,(10),Object,null,(9));var inst_29925 = chs__$1.call(null,inst_29916);var inst_29926 = done.call(null,inst_29916);var inst_29927 = cljs.core.async.take_BANG_.call(null,inst_29925,inst_29926);var state_29952__$1 = state_29952;var statearr_29966_29993 = state_29952__$1;(statearr_29966_29993[(2)] = inst_29927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (9)))
{var inst_29916 = (state_29952[(7)]);var inst_29929 = (state_29952[(2)]);var inst_29930 = (inst_29916 + (1));var inst_29916__$1 = inst_29930;var state_29952__$1 = (function (){var statearr_29967 = state_29952;(statearr_29967[(10)] = inst_29929);
(statearr_29967[(7)] = inst_29916__$1);
return statearr_29967;
})();var statearr_29968_29994 = state_29952__$1;(statearr_29968_29994[(2)] = null);
(statearr_29968_29994[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (5)))
{var inst_29936 = (state_29952[(2)]);var state_29952__$1 = (function (){var statearr_29969 = state_29952;(statearr_29969[(11)] = inst_29936);
return statearr_29969;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29952__$1,(12),dchan);
} else
{if((state_val_29953 === (14)))
{var inst_29938 = (state_29952[(8)]);var inst_29943 = cljs.core.apply.call(null,f,inst_29938);var state_29952__$1 = state_29952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29952__$1,(16),out,inst_29943);
} else
{if((state_val_29953 === (16)))
{var inst_29945 = (state_29952[(2)]);var state_29952__$1 = (function (){var statearr_29970 = state_29952;(statearr_29970[(12)] = inst_29945);
return statearr_29970;
})();var statearr_29971_29995 = state_29952__$1;(statearr_29971_29995[(2)] = null);
(statearr_29971_29995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (10)))
{var inst_29920 = (state_29952[(2)]);var inst_29921 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29952__$1 = (function (){var statearr_29972 = state_29952;(statearr_29972[(13)] = inst_29920);
return statearr_29972;
})();var statearr_29973_29996 = state_29952__$1;(statearr_29973_29996[(2)] = inst_29921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29953 === (8)))
{var inst_29934 = (state_29952[(2)]);var state_29952__$1 = state_29952;var statearr_29974_29997 = state_29952__$1;(statearr_29974_29997[(2)] = inst_29934);
(statearr_29974_29997[(1)] = (5));
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
});})(c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29978[(0)] = state_machine__15975__auto__);
(statearr_29978[(1)] = (1));
return statearr_29978;
});
var state_machine__15975__auto____1 = (function (state_29952){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29952);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29979){if((e29979 instanceof Object))
{var ex__15978__auto__ = e29979;var statearr_29980_29998 = state_29952;(statearr_29980_29998[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29979;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29999 = state_29952;
state_29952 = G__29999;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29952){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_29981 = f__15990__auto__.call(null);(statearr_29981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29982);
return statearr_29981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29982,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30107 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30107,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30107,out){
return (function (state_30083){var state_val_30084 = (state_30083[(1)]);if((state_val_30084 === (7)))
{var inst_30063 = (state_30083[(7)]);var inst_30062 = (state_30083[(8)]);var inst_30062__$1 = (state_30083[(2)]);var inst_30063__$1 = cljs.core.nth.call(null,inst_30062__$1,(0),null);var inst_30064 = cljs.core.nth.call(null,inst_30062__$1,(1),null);var inst_30065 = (inst_30063__$1 == null);var state_30083__$1 = (function (){var statearr_30085 = state_30083;(statearr_30085[(7)] = inst_30063__$1);
(statearr_30085[(9)] = inst_30064);
(statearr_30085[(8)] = inst_30062__$1);
return statearr_30085;
})();if(cljs.core.truth_(inst_30065))
{var statearr_30086_30108 = state_30083__$1;(statearr_30086_30108[(1)] = (8));
} else
{var statearr_30087_30109 = state_30083__$1;(statearr_30087_30109[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (1)))
{var inst_30054 = cljs.core.vec.call(null,chs);var inst_30055 = inst_30054;var state_30083__$1 = (function (){var statearr_30088 = state_30083;(statearr_30088[(10)] = inst_30055);
return statearr_30088;
})();var statearr_30089_30110 = state_30083__$1;(statearr_30089_30110[(2)] = null);
(statearr_30089_30110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (4)))
{var inst_30055 = (state_30083[(10)]);var state_30083__$1 = state_30083;return cljs.core.async.ioc_alts_BANG_.call(null,state_30083__$1,(7),inst_30055);
} else
{if((state_val_30084 === (6)))
{var inst_30079 = (state_30083[(2)]);var state_30083__$1 = state_30083;var statearr_30090_30111 = state_30083__$1;(statearr_30090_30111[(2)] = inst_30079);
(statearr_30090_30111[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (3)))
{var inst_30081 = (state_30083[(2)]);var state_30083__$1 = state_30083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30083__$1,inst_30081);
} else
{if((state_val_30084 === (2)))
{var inst_30055 = (state_30083[(10)]);var inst_30057 = cljs.core.count.call(null,inst_30055);var inst_30058 = (inst_30057 > (0));var state_30083__$1 = state_30083;if(cljs.core.truth_(inst_30058))
{var statearr_30092_30112 = state_30083__$1;(statearr_30092_30112[(1)] = (4));
} else
{var statearr_30093_30113 = state_30083__$1;(statearr_30093_30113[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (11)))
{var inst_30055 = (state_30083[(10)]);var inst_30072 = (state_30083[(2)]);var tmp30091 = inst_30055;var inst_30055__$1 = tmp30091;var state_30083__$1 = (function (){var statearr_30094 = state_30083;(statearr_30094[(11)] = inst_30072);
(statearr_30094[(10)] = inst_30055__$1);
return statearr_30094;
})();var statearr_30095_30114 = state_30083__$1;(statearr_30095_30114[(2)] = null);
(statearr_30095_30114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (9)))
{var inst_30063 = (state_30083[(7)]);var state_30083__$1 = state_30083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30083__$1,(11),out,inst_30063);
} else
{if((state_val_30084 === (5)))
{var inst_30077 = cljs.core.async.close_BANG_.call(null,out);var state_30083__$1 = state_30083;var statearr_30096_30115 = state_30083__$1;(statearr_30096_30115[(2)] = inst_30077);
(statearr_30096_30115[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (10)))
{var inst_30075 = (state_30083[(2)]);var state_30083__$1 = state_30083;var statearr_30097_30116 = state_30083__$1;(statearr_30097_30116[(2)] = inst_30075);
(statearr_30097_30116[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30084 === (8)))
{var inst_30063 = (state_30083[(7)]);var inst_30055 = (state_30083[(10)]);var inst_30064 = (state_30083[(9)]);var inst_30062 = (state_30083[(8)]);var inst_30067 = (function (){var c = inst_30064;var v = inst_30063;var vec__30060 = inst_30062;var cs = inst_30055;return ((function (c,v,vec__30060,cs,inst_30063,inst_30055,inst_30064,inst_30062,state_val_30084,c__15989__auto___30107,out){
return (function (p1__30000_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30000_SHARP_);
});
;})(c,v,vec__30060,cs,inst_30063,inst_30055,inst_30064,inst_30062,state_val_30084,c__15989__auto___30107,out))
})();var inst_30068 = cljs.core.filterv.call(null,inst_30067,inst_30055);var inst_30055__$1 = inst_30068;var state_30083__$1 = (function (){var statearr_30098 = state_30083;(statearr_30098[(10)] = inst_30055__$1);
return statearr_30098;
})();var statearr_30099_30117 = state_30083__$1;(statearr_30099_30117[(2)] = null);
(statearr_30099_30117[(1)] = (2));
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
});})(c__15989__auto___30107,out))
;return ((function (switch__15974__auto__,c__15989__auto___30107,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30103 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30103[(0)] = state_machine__15975__auto__);
(statearr_30103[(1)] = (1));
return statearr_30103;
});
var state_machine__15975__auto____1 = (function (state_30083){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30083);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30104){if((e30104 instanceof Object))
{var ex__15978__auto__ = e30104;var statearr_30105_30118 = state_30083;(statearr_30105_30118[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30083);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30104;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30119 = state_30083;
state_30083 = G__30119;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30107,out))
})();var state__15991__auto__ = (function (){var statearr_30106 = f__15990__auto__.call(null);(statearr_30106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30107);
return statearr_30106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30107,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30212 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30212,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30212,out){
return (function (state_30189){var state_val_30190 = (state_30189[(1)]);if((state_val_30190 === (7)))
{var inst_30171 = (state_30189[(7)]);var inst_30171__$1 = (state_30189[(2)]);var inst_30172 = (inst_30171__$1 == null);var inst_30173 = cljs.core.not.call(null,inst_30172);var state_30189__$1 = (function (){var statearr_30191 = state_30189;(statearr_30191[(7)] = inst_30171__$1);
return statearr_30191;
})();if(inst_30173)
{var statearr_30192_30213 = state_30189__$1;(statearr_30192_30213[(1)] = (8));
} else
{var statearr_30193_30214 = state_30189__$1;(statearr_30193_30214[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (1)))
{var inst_30166 = (0);var state_30189__$1 = (function (){var statearr_30194 = state_30189;(statearr_30194[(8)] = inst_30166);
return statearr_30194;
})();var statearr_30195_30215 = state_30189__$1;(statearr_30195_30215[(2)] = null);
(statearr_30195_30215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (4)))
{var state_30189__$1 = state_30189;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30189__$1,(7),ch);
} else
{if((state_val_30190 === (6)))
{var inst_30184 = (state_30189[(2)]);var state_30189__$1 = state_30189;var statearr_30196_30216 = state_30189__$1;(statearr_30196_30216[(2)] = inst_30184);
(statearr_30196_30216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (3)))
{var inst_30186 = (state_30189[(2)]);var inst_30187 = cljs.core.async.close_BANG_.call(null,out);var state_30189__$1 = (function (){var statearr_30197 = state_30189;(statearr_30197[(9)] = inst_30186);
return statearr_30197;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else
{if((state_val_30190 === (2)))
{var inst_30166 = (state_30189[(8)]);var inst_30168 = (inst_30166 < n);var state_30189__$1 = state_30189;if(cljs.core.truth_(inst_30168))
{var statearr_30198_30217 = state_30189__$1;(statearr_30198_30217[(1)] = (4));
} else
{var statearr_30199_30218 = state_30189__$1;(statearr_30199_30218[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (11)))
{var inst_30166 = (state_30189[(8)]);var inst_30176 = (state_30189[(2)]);var inst_30177 = (inst_30166 + (1));var inst_30166__$1 = inst_30177;var state_30189__$1 = (function (){var statearr_30200 = state_30189;(statearr_30200[(10)] = inst_30176);
(statearr_30200[(8)] = inst_30166__$1);
return statearr_30200;
})();var statearr_30201_30219 = state_30189__$1;(statearr_30201_30219[(2)] = null);
(statearr_30201_30219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (9)))
{var state_30189__$1 = state_30189;var statearr_30202_30220 = state_30189__$1;(statearr_30202_30220[(2)] = null);
(statearr_30202_30220[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (5)))
{var state_30189__$1 = state_30189;var statearr_30203_30221 = state_30189__$1;(statearr_30203_30221[(2)] = null);
(statearr_30203_30221[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (10)))
{var inst_30181 = (state_30189[(2)]);var state_30189__$1 = state_30189;var statearr_30204_30222 = state_30189__$1;(statearr_30204_30222[(2)] = inst_30181);
(statearr_30204_30222[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30190 === (8)))
{var inst_30171 = (state_30189[(7)]);var state_30189__$1 = state_30189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(11),out,inst_30171);
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
});})(c__15989__auto___30212,out))
;return ((function (switch__15974__auto__,c__15989__auto___30212,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30208 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30208[(0)] = state_machine__15975__auto__);
(statearr_30208[(1)] = (1));
return statearr_30208;
});
var state_machine__15975__auto____1 = (function (state_30189){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30189);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30209){if((e30209 instanceof Object))
{var ex__15978__auto__ = e30209;var statearr_30210_30223 = state_30189;(statearr_30210_30223[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30209;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30224 = state_30189;
state_30189 = G__30224;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30212,out))
})();var state__15991__auto__ = (function (){var statearr_30211 = f__15990__auto__.call(null);(statearr_30211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30212);
return statearr_30211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30212,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30232 = (function (ch,f,map_LT_,meta30233){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30233 = meta30233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30232.cljs$lang$type = true;
cljs.core.async.t30232.cljs$lang$ctorStr = "cljs.core.async/t30232";
cljs.core.async.t30232.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30232");
});
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30235 = (function (fn1,_,meta30233,ch,f,map_LT_,meta30236){
this.fn1 = fn1;
this._ = _;
this.meta30233 = meta30233;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30236 = meta30236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30235.cljs$lang$type = true;
cljs.core.async.t30235.cljs$lang$ctorStr = "cljs.core.async/t30235";
cljs.core.async.t30235.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30235");
});})(___$1))
;
cljs.core.async.t30235.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t30235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__30225_SHARP_){return f1.call(null,(((p1__30225_SHARP_ == null))?null:self__.f.call(null,p1__30225_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t30235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30237){var self__ = this;
var _30237__$1 = this;return self__.meta30236;
});})(___$1))
;
cljs.core.async.t30235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30237,meta30236__$1){var self__ = this;
var _30237__$1 = this;return (new cljs.core.async.t30235(self__.fn1,self__._,self__.meta30233,self__.ch,self__.f,self__.map_LT_,meta30236__$1));
});})(___$1))
;
cljs.core.async.__GT_t30235 = ((function (___$1){
return (function __GT_t30235(fn1__$1,___$2,meta30233__$1,ch__$2,f__$2,map_LT___$2,meta30236){return (new cljs.core.async.t30235(fn1__$1,___$2,meta30233__$1,ch__$2,f__$2,map_LT___$2,meta30236));
});})(___$1))
;
}
return (new cljs.core.async.t30235(fn1,___$1,self__.meta30233,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30234){var self__ = this;
var _30234__$1 = this;return self__.meta30233;
});
cljs.core.async.t30232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30234,meta30233__$1){var self__ = this;
var _30234__$1 = this;return (new cljs.core.async.t30232(self__.ch,self__.f,self__.map_LT_,meta30233__$1));
});
cljs.core.async.__GT_t30232 = (function __GT_t30232(ch__$1,f__$1,map_LT___$1,meta30233){return (new cljs.core.async.t30232(ch__$1,f__$1,map_LT___$1,meta30233));
});
}
return (new cljs.core.async.t30232(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30241 = (function (ch,f,map_GT_,meta30242){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30242 = meta30242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30241.cljs$lang$type = true;
cljs.core.async.t30241.cljs$lang$ctorStr = "cljs.core.async/t30241";
cljs.core.async.t30241.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30241");
});
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30243){var self__ = this;
var _30243__$1 = this;return self__.meta30242;
});
cljs.core.async.t30241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30243,meta30242__$1){var self__ = this;
var _30243__$1 = this;return (new cljs.core.async.t30241(self__.ch,self__.f,self__.map_GT_,meta30242__$1));
});
cljs.core.async.__GT_t30241 = (function __GT_t30241(ch__$1,f__$1,map_GT___$1,meta30242){return (new cljs.core.async.t30241(ch__$1,f__$1,map_GT___$1,meta30242));
});
}
return (new cljs.core.async.t30241(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30247 = (function (ch,p,filter_GT_,meta30248){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30248 = meta30248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30247.cljs$lang$type = true;
cljs.core.async.t30247.cljs$lang$ctorStr = "cljs.core.async/t30247";
cljs.core.async.t30247.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t30247");
});
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30249){var self__ = this;
var _30249__$1 = this;return self__.meta30248;
});
cljs.core.async.t30247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30249,meta30248__$1){var self__ = this;
var _30249__$1 = this;return (new cljs.core.async.t30247(self__.ch,self__.p,self__.filter_GT_,meta30248__$1));
});
cljs.core.async.__GT_t30247 = (function __GT_t30247(ch__$1,p__$1,filter_GT___$1,meta30248){return (new cljs.core.async.t30247(ch__$1,p__$1,filter_GT___$1,meta30248));
});
}
return (new cljs.core.async.t30247(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30332,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30332,out){
return (function (state_30311){var state_val_30312 = (state_30311[(1)]);if((state_val_30312 === (7)))
{var inst_30307 = (state_30311[(2)]);var state_30311__$1 = state_30311;var statearr_30313_30333 = state_30311__$1;(statearr_30313_30333[(2)] = inst_30307);
(statearr_30313_30333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (1)))
{var state_30311__$1 = state_30311;var statearr_30314_30334 = state_30311__$1;(statearr_30314_30334[(2)] = null);
(statearr_30314_30334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (4)))
{var inst_30293 = (state_30311[(7)]);var inst_30293__$1 = (state_30311[(2)]);var inst_30294 = (inst_30293__$1 == null);var state_30311__$1 = (function (){var statearr_30315 = state_30311;(statearr_30315[(7)] = inst_30293__$1);
return statearr_30315;
})();if(cljs.core.truth_(inst_30294))
{var statearr_30316_30335 = state_30311__$1;(statearr_30316_30335[(1)] = (5));
} else
{var statearr_30317_30336 = state_30311__$1;(statearr_30317_30336[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (6)))
{var inst_30293 = (state_30311[(7)]);var inst_30298 = p.call(null,inst_30293);var state_30311__$1 = state_30311;if(cljs.core.truth_(inst_30298))
{var statearr_30318_30337 = state_30311__$1;(statearr_30318_30337[(1)] = (8));
} else
{var statearr_30319_30338 = state_30311__$1;(statearr_30319_30338[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (3)))
{var inst_30309 = (state_30311[(2)]);var state_30311__$1 = state_30311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30311__$1,inst_30309);
} else
{if((state_val_30312 === (2)))
{var state_30311__$1 = state_30311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30311__$1,(4),ch);
} else
{if((state_val_30312 === (11)))
{var inst_30301 = (state_30311[(2)]);var state_30311__$1 = state_30311;var statearr_30320_30339 = state_30311__$1;(statearr_30320_30339[(2)] = inst_30301);
(statearr_30320_30339[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (9)))
{var state_30311__$1 = state_30311;var statearr_30321_30340 = state_30311__$1;(statearr_30321_30340[(2)] = null);
(statearr_30321_30340[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (5)))
{var inst_30296 = cljs.core.async.close_BANG_.call(null,out);var state_30311__$1 = state_30311;var statearr_30322_30341 = state_30311__$1;(statearr_30322_30341[(2)] = inst_30296);
(statearr_30322_30341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (10)))
{var inst_30304 = (state_30311[(2)]);var state_30311__$1 = (function (){var statearr_30323 = state_30311;(statearr_30323[(8)] = inst_30304);
return statearr_30323;
})();var statearr_30324_30342 = state_30311__$1;(statearr_30324_30342[(2)] = null);
(statearr_30324_30342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30312 === (8)))
{var inst_30293 = (state_30311[(7)]);var state_30311__$1 = state_30311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30311__$1,(11),out,inst_30293);
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
});})(c__15989__auto___30332,out))
;return ((function (switch__15974__auto__,c__15989__auto___30332,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30328 = [null,null,null,null,null,null,null,null,null];(statearr_30328[(0)] = state_machine__15975__auto__);
(statearr_30328[(1)] = (1));
return statearr_30328;
});
var state_machine__15975__auto____1 = (function (state_30311){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30311);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30329){if((e30329 instanceof Object))
{var ex__15978__auto__ = e30329;var statearr_30330_30343 = state_30311;(statearr_30330_30343[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30344 = state_30311;
state_30311 = G__30344;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30311){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30332,out))
})();var state__15991__auto__ = (function (){var statearr_30331 = f__15990__auto__.call(null);(statearr_30331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30332);
return statearr_30331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30332,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__){
return (function (state_30510){var state_val_30511 = (state_30510[(1)]);if((state_val_30511 === (7)))
{var inst_30506 = (state_30510[(2)]);var state_30510__$1 = state_30510;var statearr_30512_30553 = state_30510__$1;(statearr_30512_30553[(2)] = inst_30506);
(statearr_30512_30553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (20)))
{var inst_30476 = (state_30510[(7)]);var inst_30487 = (state_30510[(2)]);var inst_30488 = cljs.core.next.call(null,inst_30476);var inst_30462 = inst_30488;var inst_30463 = null;var inst_30464 = (0);var inst_30465 = (0);var state_30510__$1 = (function (){var statearr_30513 = state_30510;(statearr_30513[(8)] = inst_30463);
(statearr_30513[(9)] = inst_30462);
(statearr_30513[(10)] = inst_30487);
(statearr_30513[(11)] = inst_30465);
(statearr_30513[(12)] = inst_30464);
return statearr_30513;
})();var statearr_30514_30554 = state_30510__$1;(statearr_30514_30554[(2)] = null);
(statearr_30514_30554[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (1)))
{var state_30510__$1 = state_30510;var statearr_30515_30555 = state_30510__$1;(statearr_30515_30555[(2)] = null);
(statearr_30515_30555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (4)))
{var inst_30451 = (state_30510[(13)]);var inst_30451__$1 = (state_30510[(2)]);var inst_30452 = (inst_30451__$1 == null);var state_30510__$1 = (function (){var statearr_30516 = state_30510;(statearr_30516[(13)] = inst_30451__$1);
return statearr_30516;
})();if(cljs.core.truth_(inst_30452))
{var statearr_30517_30556 = state_30510__$1;(statearr_30517_30556[(1)] = (5));
} else
{var statearr_30518_30557 = state_30510__$1;(statearr_30518_30557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (15)))
{var state_30510__$1 = state_30510;var statearr_30522_30558 = state_30510__$1;(statearr_30522_30558[(2)] = null);
(statearr_30522_30558[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (21)))
{var state_30510__$1 = state_30510;var statearr_30523_30559 = state_30510__$1;(statearr_30523_30559[(2)] = null);
(statearr_30523_30559[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (13)))
{var inst_30463 = (state_30510[(8)]);var inst_30462 = (state_30510[(9)]);var inst_30465 = (state_30510[(11)]);var inst_30464 = (state_30510[(12)]);var inst_30472 = (state_30510[(2)]);var inst_30473 = (inst_30465 + (1));var tmp30519 = inst_30463;var tmp30520 = inst_30462;var tmp30521 = inst_30464;var inst_30462__$1 = tmp30520;var inst_30463__$1 = tmp30519;var inst_30464__$1 = tmp30521;var inst_30465__$1 = inst_30473;var state_30510__$1 = (function (){var statearr_30524 = state_30510;(statearr_30524[(8)] = inst_30463__$1);
(statearr_30524[(9)] = inst_30462__$1);
(statearr_30524[(14)] = inst_30472);
(statearr_30524[(11)] = inst_30465__$1);
(statearr_30524[(12)] = inst_30464__$1);
return statearr_30524;
})();var statearr_30525_30560 = state_30510__$1;(statearr_30525_30560[(2)] = null);
(statearr_30525_30560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (22)))
{var state_30510__$1 = state_30510;var statearr_30526_30561 = state_30510__$1;(statearr_30526_30561[(2)] = null);
(statearr_30526_30561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (6)))
{var inst_30451 = (state_30510[(13)]);var inst_30460 = f.call(null,inst_30451);var inst_30461 = cljs.core.seq.call(null,inst_30460);var inst_30462 = inst_30461;var inst_30463 = null;var inst_30464 = (0);var inst_30465 = (0);var state_30510__$1 = (function (){var statearr_30527 = state_30510;(statearr_30527[(8)] = inst_30463);
(statearr_30527[(9)] = inst_30462);
(statearr_30527[(11)] = inst_30465);
(statearr_30527[(12)] = inst_30464);
return statearr_30527;
})();var statearr_30528_30562 = state_30510__$1;(statearr_30528_30562[(2)] = null);
(statearr_30528_30562[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (17)))
{var inst_30476 = (state_30510[(7)]);var inst_30480 = cljs.core.chunk_first.call(null,inst_30476);var inst_30481 = cljs.core.chunk_rest.call(null,inst_30476);var inst_30482 = cljs.core.count.call(null,inst_30480);var inst_30462 = inst_30481;var inst_30463 = inst_30480;var inst_30464 = inst_30482;var inst_30465 = (0);var state_30510__$1 = (function (){var statearr_30529 = state_30510;(statearr_30529[(8)] = inst_30463);
(statearr_30529[(9)] = inst_30462);
(statearr_30529[(11)] = inst_30465);
(statearr_30529[(12)] = inst_30464);
return statearr_30529;
})();var statearr_30530_30563 = state_30510__$1;(statearr_30530_30563[(2)] = null);
(statearr_30530_30563[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (3)))
{var inst_30508 = (state_30510[(2)]);var state_30510__$1 = state_30510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30510__$1,inst_30508);
} else
{if((state_val_30511 === (12)))
{var inst_30496 = (state_30510[(2)]);var state_30510__$1 = state_30510;var statearr_30531_30564 = state_30510__$1;(statearr_30531_30564[(2)] = inst_30496);
(statearr_30531_30564[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (2)))
{var state_30510__$1 = state_30510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30510__$1,(4),in$);
} else
{if((state_val_30511 === (23)))
{var inst_30504 = (state_30510[(2)]);var state_30510__$1 = state_30510;var statearr_30532_30565 = state_30510__$1;(statearr_30532_30565[(2)] = inst_30504);
(statearr_30532_30565[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (19)))
{var inst_30491 = (state_30510[(2)]);var state_30510__$1 = state_30510;var statearr_30533_30566 = state_30510__$1;(statearr_30533_30566[(2)] = inst_30491);
(statearr_30533_30566[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (11)))
{var inst_30476 = (state_30510[(7)]);var inst_30462 = (state_30510[(9)]);var inst_30476__$1 = cljs.core.seq.call(null,inst_30462);var state_30510__$1 = (function (){var statearr_30534 = state_30510;(statearr_30534[(7)] = inst_30476__$1);
return statearr_30534;
})();if(inst_30476__$1)
{var statearr_30535_30567 = state_30510__$1;(statearr_30535_30567[(1)] = (14));
} else
{var statearr_30536_30568 = state_30510__$1;(statearr_30536_30568[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (9)))
{var inst_30498 = (state_30510[(2)]);var inst_30499 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_30510__$1 = (function (){var statearr_30537 = state_30510;(statearr_30537[(15)] = inst_30498);
return statearr_30537;
})();if(cljs.core.truth_(inst_30499))
{var statearr_30538_30569 = state_30510__$1;(statearr_30538_30569[(1)] = (21));
} else
{var statearr_30539_30570 = state_30510__$1;(statearr_30539_30570[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (5)))
{var inst_30454 = cljs.core.async.close_BANG_.call(null,out);var state_30510__$1 = state_30510;var statearr_30540_30571 = state_30510__$1;(statearr_30540_30571[(2)] = inst_30454);
(statearr_30540_30571[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (14)))
{var inst_30476 = (state_30510[(7)]);var inst_30478 = cljs.core.chunked_seq_QMARK_.call(null,inst_30476);var state_30510__$1 = state_30510;if(inst_30478)
{var statearr_30541_30572 = state_30510__$1;(statearr_30541_30572[(1)] = (17));
} else
{var statearr_30542_30573 = state_30510__$1;(statearr_30542_30573[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (16)))
{var inst_30494 = (state_30510[(2)]);var state_30510__$1 = state_30510;var statearr_30543_30574 = state_30510__$1;(statearr_30543_30574[(2)] = inst_30494);
(statearr_30543_30574[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30511 === (10)))
{var inst_30463 = (state_30510[(8)]);var inst_30465 = (state_30510[(11)]);var inst_30470 = cljs.core._nth.call(null,inst_30463,inst_30465);var state_30510__$1 = state_30510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30510__$1,(13),out,inst_30470);
} else
{if((state_val_30511 === (18)))
{var inst_30476 = (state_30510[(7)]);var inst_30485 = cljs.core.first.call(null,inst_30476);var state_30510__$1 = state_30510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30510__$1,(20),out,inst_30485);
} else
{if((state_val_30511 === (8)))
{var inst_30465 = (state_30510[(11)]);var inst_30464 = (state_30510[(12)]);var inst_30467 = (inst_30465 < inst_30464);var inst_30468 = inst_30467;var state_30510__$1 = state_30510;if(cljs.core.truth_(inst_30468))
{var statearr_30544_30575 = state_30510__$1;(statearr_30544_30575[(1)] = (10));
} else
{var statearr_30545_30576 = state_30510__$1;(statearr_30545_30576[(1)] = (11));
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
});})(c__15989__auto__))
;return ((function (switch__15974__auto__,c__15989__auto__){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30549[(0)] = state_machine__15975__auto__);
(statearr_30549[(1)] = (1));
return statearr_30549;
});
var state_machine__15975__auto____1 = (function (state_30510){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30510);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30550){if((e30550 instanceof Object))
{var ex__15978__auto__ = e30550;var statearr_30551_30577 = state_30510;(statearr_30551_30577[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30578 = state_30510;
state_30510 = G__30578;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30510){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_30552 = f__15990__auto__.call(null);(statearr_30552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_30552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto__))
);
return c__15989__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30675,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30675,out){
return (function (state_30650){var state_val_30651 = (state_30650[(1)]);if((state_val_30651 === (7)))
{var inst_30645 = (state_30650[(2)]);var state_30650__$1 = state_30650;var statearr_30652_30676 = state_30650__$1;(statearr_30652_30676[(2)] = inst_30645);
(statearr_30652_30676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (1)))
{var inst_30627 = null;var state_30650__$1 = (function (){var statearr_30653 = state_30650;(statearr_30653[(7)] = inst_30627);
return statearr_30653;
})();var statearr_30654_30677 = state_30650__$1;(statearr_30654_30677[(2)] = null);
(statearr_30654_30677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (4)))
{var inst_30630 = (state_30650[(8)]);var inst_30630__$1 = (state_30650[(2)]);var inst_30631 = (inst_30630__$1 == null);var inst_30632 = cljs.core.not.call(null,inst_30631);var state_30650__$1 = (function (){var statearr_30655 = state_30650;(statearr_30655[(8)] = inst_30630__$1);
return statearr_30655;
})();if(inst_30632)
{var statearr_30656_30678 = state_30650__$1;(statearr_30656_30678[(1)] = (5));
} else
{var statearr_30657_30679 = state_30650__$1;(statearr_30657_30679[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (6)))
{var state_30650__$1 = state_30650;var statearr_30658_30680 = state_30650__$1;(statearr_30658_30680[(2)] = null);
(statearr_30658_30680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (3)))
{var inst_30647 = (state_30650[(2)]);var inst_30648 = cljs.core.async.close_BANG_.call(null,out);var state_30650__$1 = (function (){var statearr_30659 = state_30650;(statearr_30659[(9)] = inst_30647);
return statearr_30659;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30650__$1,inst_30648);
} else
{if((state_val_30651 === (2)))
{var state_30650__$1 = state_30650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(4),ch);
} else
{if((state_val_30651 === (11)))
{var inst_30630 = (state_30650[(8)]);var inst_30639 = (state_30650[(2)]);var inst_30627 = inst_30630;var state_30650__$1 = (function (){var statearr_30660 = state_30650;(statearr_30660[(10)] = inst_30639);
(statearr_30660[(7)] = inst_30627);
return statearr_30660;
})();var statearr_30661_30681 = state_30650__$1;(statearr_30661_30681[(2)] = null);
(statearr_30661_30681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (9)))
{var inst_30630 = (state_30650[(8)]);var state_30650__$1 = state_30650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30650__$1,(11),out,inst_30630);
} else
{if((state_val_30651 === (5)))
{var inst_30630 = (state_30650[(8)]);var inst_30627 = (state_30650[(7)]);var inst_30634 = cljs.core._EQ_.call(null,inst_30630,inst_30627);var state_30650__$1 = state_30650;if(inst_30634)
{var statearr_30663_30682 = state_30650__$1;(statearr_30663_30682[(1)] = (8));
} else
{var statearr_30664_30683 = state_30650__$1;(statearr_30664_30683[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (10)))
{var inst_30642 = (state_30650[(2)]);var state_30650__$1 = state_30650;var statearr_30665_30684 = state_30650__$1;(statearr_30665_30684[(2)] = inst_30642);
(statearr_30665_30684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30651 === (8)))
{var inst_30627 = (state_30650[(7)]);var tmp30662 = inst_30627;var inst_30627__$1 = tmp30662;var state_30650__$1 = (function (){var statearr_30666 = state_30650;(statearr_30666[(7)] = inst_30627__$1);
return statearr_30666;
})();var statearr_30667_30685 = state_30650__$1;(statearr_30667_30685[(2)] = null);
(statearr_30667_30685[(1)] = (2));
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
});})(c__15989__auto___30675,out))
;return ((function (switch__15974__auto__,c__15989__auto___30675,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30671 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30671[(0)] = state_machine__15975__auto__);
(statearr_30671[(1)] = (1));
return statearr_30671;
});
var state_machine__15975__auto____1 = (function (state_30650){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30650);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30672){if((e30672 instanceof Object))
{var ex__15978__auto__ = e30672;var statearr_30673_30686 = state_30650;(statearr_30673_30686[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30687 = state_30650;
state_30650 = G__30687;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30675,out))
})();var state__15991__auto__ = (function (){var statearr_30674 = f__15990__auto__.call(null);(statearr_30674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30675);
return statearr_30674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30675,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30822,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30822,out){
return (function (state_30792){var state_val_30793 = (state_30792[(1)]);if((state_val_30793 === (7)))
{var inst_30788 = (state_30792[(2)]);var state_30792__$1 = state_30792;var statearr_30794_30823 = state_30792__$1;(statearr_30794_30823[(2)] = inst_30788);
(statearr_30794_30823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (1)))
{var inst_30755 = (new Array(n));var inst_30756 = inst_30755;var inst_30757 = (0);var state_30792__$1 = (function (){var statearr_30795 = state_30792;(statearr_30795[(7)] = inst_30757);
(statearr_30795[(8)] = inst_30756);
return statearr_30795;
})();var statearr_30796_30824 = state_30792__$1;(statearr_30796_30824[(2)] = null);
(statearr_30796_30824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (4)))
{var inst_30760 = (state_30792[(9)]);var inst_30760__$1 = (state_30792[(2)]);var inst_30761 = (inst_30760__$1 == null);var inst_30762 = cljs.core.not.call(null,inst_30761);var state_30792__$1 = (function (){var statearr_30797 = state_30792;(statearr_30797[(9)] = inst_30760__$1);
return statearr_30797;
})();if(inst_30762)
{var statearr_30798_30825 = state_30792__$1;(statearr_30798_30825[(1)] = (5));
} else
{var statearr_30799_30826 = state_30792__$1;(statearr_30799_30826[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (15)))
{var inst_30782 = (state_30792[(2)]);var state_30792__$1 = state_30792;var statearr_30800_30827 = state_30792__$1;(statearr_30800_30827[(2)] = inst_30782);
(statearr_30800_30827[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (13)))
{var state_30792__$1 = state_30792;var statearr_30801_30828 = state_30792__$1;(statearr_30801_30828[(2)] = null);
(statearr_30801_30828[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (6)))
{var inst_30757 = (state_30792[(7)]);var inst_30778 = (inst_30757 > (0));var state_30792__$1 = state_30792;if(cljs.core.truth_(inst_30778))
{var statearr_30802_30829 = state_30792__$1;(statearr_30802_30829[(1)] = (12));
} else
{var statearr_30803_30830 = state_30792__$1;(statearr_30803_30830[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (3)))
{var inst_30790 = (state_30792[(2)]);var state_30792__$1 = state_30792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30792__$1,inst_30790);
} else
{if((state_val_30793 === (12)))
{var inst_30756 = (state_30792[(8)]);var inst_30780 = cljs.core.vec.call(null,inst_30756);var state_30792__$1 = state_30792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30792__$1,(15),out,inst_30780);
} else
{if((state_val_30793 === (2)))
{var state_30792__$1 = state_30792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30792__$1,(4),ch);
} else
{if((state_val_30793 === (11)))
{var inst_30772 = (state_30792[(2)]);var inst_30773 = (new Array(n));var inst_30756 = inst_30773;var inst_30757 = (0);var state_30792__$1 = (function (){var statearr_30804 = state_30792;(statearr_30804[(10)] = inst_30772);
(statearr_30804[(7)] = inst_30757);
(statearr_30804[(8)] = inst_30756);
return statearr_30804;
})();var statearr_30805_30831 = state_30792__$1;(statearr_30805_30831[(2)] = null);
(statearr_30805_30831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (9)))
{var inst_30756 = (state_30792[(8)]);var inst_30770 = cljs.core.vec.call(null,inst_30756);var state_30792__$1 = state_30792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30792__$1,(11),out,inst_30770);
} else
{if((state_val_30793 === (5)))
{var inst_30757 = (state_30792[(7)]);var inst_30760 = (state_30792[(9)]);var inst_30756 = (state_30792[(8)]);var inst_30765 = (state_30792[(11)]);var inst_30764 = (inst_30756[inst_30757] = inst_30760);var inst_30765__$1 = (inst_30757 + (1));var inst_30766 = (inst_30765__$1 < n);var state_30792__$1 = (function (){var statearr_30806 = state_30792;(statearr_30806[(12)] = inst_30764);
(statearr_30806[(11)] = inst_30765__$1);
return statearr_30806;
})();if(cljs.core.truth_(inst_30766))
{var statearr_30807_30832 = state_30792__$1;(statearr_30807_30832[(1)] = (8));
} else
{var statearr_30808_30833 = state_30792__$1;(statearr_30808_30833[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (14)))
{var inst_30785 = (state_30792[(2)]);var inst_30786 = cljs.core.async.close_BANG_.call(null,out);var state_30792__$1 = (function (){var statearr_30810 = state_30792;(statearr_30810[(13)] = inst_30785);
return statearr_30810;
})();var statearr_30811_30834 = state_30792__$1;(statearr_30811_30834[(2)] = inst_30786);
(statearr_30811_30834[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (10)))
{var inst_30776 = (state_30792[(2)]);var state_30792__$1 = state_30792;var statearr_30812_30835 = state_30792__$1;(statearr_30812_30835[(2)] = inst_30776);
(statearr_30812_30835[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30793 === (8)))
{var inst_30756 = (state_30792[(8)]);var inst_30765 = (state_30792[(11)]);var tmp30809 = inst_30756;var inst_30756__$1 = tmp30809;var inst_30757 = inst_30765;var state_30792__$1 = (function (){var statearr_30813 = state_30792;(statearr_30813[(7)] = inst_30757);
(statearr_30813[(8)] = inst_30756__$1);
return statearr_30813;
})();var statearr_30814_30836 = state_30792__$1;(statearr_30814_30836[(2)] = null);
(statearr_30814_30836[(1)] = (2));
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
});})(c__15989__auto___30822,out))
;return ((function (switch__15974__auto__,c__15989__auto___30822,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30818[(0)] = state_machine__15975__auto__);
(statearr_30818[(1)] = (1));
return statearr_30818;
});
var state_machine__15975__auto____1 = (function (state_30792){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30792);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30819){if((e30819 instanceof Object))
{var ex__15978__auto__ = e30819;var statearr_30820_30837 = state_30792;(statearr_30820_30837[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30792);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30838 = state_30792;
state_30792 = G__30838;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30792){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30822,out))
})();var state__15991__auto__ = (function (){var statearr_30821 = f__15990__auto__.call(null);(statearr_30821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30822);
return statearr_30821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30822,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___30981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___30981,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___30981,out){
return (function (state_30951){var state_val_30952 = (state_30951[(1)]);if((state_val_30952 === (7)))
{var inst_30947 = (state_30951[(2)]);var state_30951__$1 = state_30951;var statearr_30953_30982 = state_30951__$1;(statearr_30953_30982[(2)] = inst_30947);
(statearr_30953_30982[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (1)))
{var inst_30910 = [];var inst_30911 = inst_30910;var inst_30912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30951__$1 = (function (){var statearr_30954 = state_30951;(statearr_30954[(7)] = inst_30911);
(statearr_30954[(8)] = inst_30912);
return statearr_30954;
})();var statearr_30955_30983 = state_30951__$1;(statearr_30955_30983[(2)] = null);
(statearr_30955_30983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (4)))
{var inst_30915 = (state_30951[(9)]);var inst_30915__$1 = (state_30951[(2)]);var inst_30916 = (inst_30915__$1 == null);var inst_30917 = cljs.core.not.call(null,inst_30916);var state_30951__$1 = (function (){var statearr_30956 = state_30951;(statearr_30956[(9)] = inst_30915__$1);
return statearr_30956;
})();if(inst_30917)
{var statearr_30957_30984 = state_30951__$1;(statearr_30957_30984[(1)] = (5));
} else
{var statearr_30958_30985 = state_30951__$1;(statearr_30958_30985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (15)))
{var inst_30941 = (state_30951[(2)]);var state_30951__$1 = state_30951;var statearr_30959_30986 = state_30951__$1;(statearr_30959_30986[(2)] = inst_30941);
(statearr_30959_30986[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (13)))
{var state_30951__$1 = state_30951;var statearr_30960_30987 = state_30951__$1;(statearr_30960_30987[(2)] = null);
(statearr_30960_30987[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (6)))
{var inst_30911 = (state_30951[(7)]);var inst_30936 = inst_30911.length;var inst_30937 = (inst_30936 > (0));var state_30951__$1 = state_30951;if(cljs.core.truth_(inst_30937))
{var statearr_30961_30988 = state_30951__$1;(statearr_30961_30988[(1)] = (12));
} else
{var statearr_30962_30989 = state_30951__$1;(statearr_30962_30989[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (3)))
{var inst_30949 = (state_30951[(2)]);var state_30951__$1 = state_30951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30951__$1,inst_30949);
} else
{if((state_val_30952 === (12)))
{var inst_30911 = (state_30951[(7)]);var inst_30939 = cljs.core.vec.call(null,inst_30911);var state_30951__$1 = state_30951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30951__$1,(15),out,inst_30939);
} else
{if((state_val_30952 === (2)))
{var state_30951__$1 = state_30951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30951__$1,(4),ch);
} else
{if((state_val_30952 === (11)))
{var inst_30915 = (state_30951[(9)]);var inst_30919 = (state_30951[(10)]);var inst_30929 = (state_30951[(2)]);var inst_30930 = [];var inst_30931 = inst_30930.push(inst_30915);var inst_30911 = inst_30930;var inst_30912 = inst_30919;var state_30951__$1 = (function (){var statearr_30963 = state_30951;(statearr_30963[(11)] = inst_30931);
(statearr_30963[(12)] = inst_30929);
(statearr_30963[(7)] = inst_30911);
(statearr_30963[(8)] = inst_30912);
return statearr_30963;
})();var statearr_30964_30990 = state_30951__$1;(statearr_30964_30990[(2)] = null);
(statearr_30964_30990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (9)))
{var inst_30911 = (state_30951[(7)]);var inst_30927 = cljs.core.vec.call(null,inst_30911);var state_30951__$1 = state_30951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30951__$1,(11),out,inst_30927);
} else
{if((state_val_30952 === (5)))
{var inst_30915 = (state_30951[(9)]);var inst_30919 = (state_30951[(10)]);var inst_30912 = (state_30951[(8)]);var inst_30919__$1 = f.call(null,inst_30915);var inst_30920 = cljs.core._EQ_.call(null,inst_30919__$1,inst_30912);var inst_30921 = cljs.core.keyword_identical_QMARK_.call(null,inst_30912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30922 = (inst_30920) || (inst_30921);var state_30951__$1 = (function (){var statearr_30965 = state_30951;(statearr_30965[(10)] = inst_30919__$1);
return statearr_30965;
})();if(cljs.core.truth_(inst_30922))
{var statearr_30966_30991 = state_30951__$1;(statearr_30966_30991[(1)] = (8));
} else
{var statearr_30967_30992 = state_30951__$1;(statearr_30967_30992[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (14)))
{var inst_30944 = (state_30951[(2)]);var inst_30945 = cljs.core.async.close_BANG_.call(null,out);var state_30951__$1 = (function (){var statearr_30969 = state_30951;(statearr_30969[(13)] = inst_30944);
return statearr_30969;
})();var statearr_30970_30993 = state_30951__$1;(statearr_30970_30993[(2)] = inst_30945);
(statearr_30970_30993[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (10)))
{var inst_30934 = (state_30951[(2)]);var state_30951__$1 = state_30951;var statearr_30971_30994 = state_30951__$1;(statearr_30971_30994[(2)] = inst_30934);
(statearr_30971_30994[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30952 === (8)))
{var inst_30915 = (state_30951[(9)]);var inst_30911 = (state_30951[(7)]);var inst_30919 = (state_30951[(10)]);var inst_30924 = inst_30911.push(inst_30915);var tmp30968 = inst_30911;var inst_30911__$1 = tmp30968;var inst_30912 = inst_30919;var state_30951__$1 = (function (){var statearr_30972 = state_30951;(statearr_30972[(7)] = inst_30911__$1);
(statearr_30972[(14)] = inst_30924);
(statearr_30972[(8)] = inst_30912);
return statearr_30972;
})();var statearr_30973_30995 = state_30951__$1;(statearr_30973_30995[(2)] = null);
(statearr_30973_30995[(1)] = (2));
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
});})(c__15989__auto___30981,out))
;return ((function (switch__15974__auto__,c__15989__auto___30981,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_30977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30977[(0)] = state_machine__15975__auto__);
(statearr_30977[(1)] = (1));
return statearr_30977;
});
var state_machine__15975__auto____1 = (function (state_30951){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_30951);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e30978){if((e30978 instanceof Object))
{var ex__15978__auto__ = e30978;var statearr_30979_30996 = state_30951;(statearr_30979_30996[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30997 = state_30951;
state_30951 = G__30997;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___30981,out))
})();var state__15991__auto__ = (function (){var statearr_30980 = f__15990__auto__.call(null);(statearr_30980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___30981);
return statearr_30980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___30981,out))
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