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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21833 = (function (f,fn_handler,meta21834){
this.f = f;
this.fn_handler = fn_handler;
this.meta21834 = meta21834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21833.cljs$lang$type = true;
cljs.core.async.t21833.cljs$lang$ctorStr = "cljs.core.async/t21833";
cljs.core.async.t21833.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21833");
});
cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21835){var self__ = this;
var _21835__$1 = this;return self__.meta21834;
});
cljs.core.async.t21833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21835,meta21834__$1){var self__ = this;
var _21835__$1 = this;return (new cljs.core.async.t21833(self__.f,self__.fn_handler,meta21834__$1));
});
cljs.core.async.__GT_t21833 = (function __GT_t21833(f__$1,fn_handler__$1,meta21834){return (new cljs.core.async.t21833(f__$1,fn_handler__$1,meta21834));
});
}
return (new cljs.core.async.t21833(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21837 = buff;if(G__21837)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__21837.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21837);
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
{var val_21838 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21838);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21838,ret){
return (function (){return fn1.call(null,val_21838);
});})(val_21838,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___21839 = n;var x_21840 = (0);while(true){
if((x_21840 < n__13416__auto___21839))
{(a[x_21840] = (0));
{
var G__21841 = (x_21840 + (1));
x_21840 = G__21841;
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
var G__21842 = (i + (1));
i = G__21842;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21846 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21846 = (function (flag,alt_flag,meta21847){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21847 = meta21847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21846.cljs$lang$type = true;
cljs.core.async.t21846.cljs$lang$ctorStr = "cljs.core.async/t21846";
cljs.core.async.t21846.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21846");
});})(flag))
;
cljs.core.async.t21846.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21848){var self__ = this;
var _21848__$1 = this;return self__.meta21847;
});})(flag))
;
cljs.core.async.t21846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21848,meta21847__$1){var self__ = this;
var _21848__$1 = this;return (new cljs.core.async.t21846(self__.flag,self__.alt_flag,meta21847__$1));
});})(flag))
;
cljs.core.async.__GT_t21846 = ((function (flag){
return (function __GT_t21846(flag__$1,alt_flag__$1,meta21847){return (new cljs.core.async.t21846(flag__$1,alt_flag__$1,meta21847));
});})(flag))
;
}
return (new cljs.core.async.t21846(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21852 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21852 = (function (cb,flag,alt_handler,meta21853){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21853 = meta21853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21852.cljs$lang$type = true;
cljs.core.async.t21852.cljs$lang$ctorStr = "cljs.core.async/t21852";
cljs.core.async.t21852.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21852");
});
cljs.core.async.t21852.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21854){var self__ = this;
var _21854__$1 = this;return self__.meta21853;
});
cljs.core.async.t21852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21854,meta21853__$1){var self__ = this;
var _21854__$1 = this;return (new cljs.core.async.t21852(self__.cb,self__.flag,self__.alt_handler,meta21853__$1));
});
cljs.core.async.__GT_t21852 = (function __GT_t21852(cb__$1,flag__$1,alt_handler__$1,meta21853){return (new cljs.core.async.t21852(cb__$1,flag__$1,alt_handler__$1,meta21853));
});
}
return (new cljs.core.async.t21852(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21855_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21855_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21856_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21856_SHARP_,port], null));
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
var G__21857 = (i + (1));
i = G__21857;
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
var alts_BANG___delegate = function (ports,p__21858){var map__21860 = p__21858;var map__21860__$1 = ((cljs.core.seq_QMARK_.call(null,map__21860))?cljs.core.apply.call(null,cljs.core.hash_map,map__21860):map__21860);var opts = map__21860__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21858 = null;if (arguments.length > 1) {
  p__21858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21858);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21861){
var ports = cljs.core.first(arglist__21861);
var p__21858 = cljs.core.rest(arglist__21861);
return alts_BANG___delegate(ports,p__21858);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___21956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21956){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21956){
return (function (state_21932){var state_val_21933 = (state_21932[(1)]);if((state_val_21933 === (7)))
{var inst_21928 = (state_21932[(2)]);var state_21932__$1 = state_21932;var statearr_21934_21957 = state_21932__$1;(statearr_21934_21957[(2)] = inst_21928);
(statearr_21934_21957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (1)))
{var state_21932__$1 = state_21932;var statearr_21935_21958 = state_21932__$1;(statearr_21935_21958[(2)] = null);
(statearr_21935_21958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (4)))
{var inst_21911 = (state_21932[(7)]);var inst_21911__$1 = (state_21932[(2)]);var inst_21912 = (inst_21911__$1 == null);var state_21932__$1 = (function (){var statearr_21936 = state_21932;(statearr_21936[(7)] = inst_21911__$1);
return statearr_21936;
})();if(cljs.core.truth_(inst_21912))
{var statearr_21937_21959 = state_21932__$1;(statearr_21937_21959[(1)] = (5));
} else
{var statearr_21938_21960 = state_21932__$1;(statearr_21938_21960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (13)))
{var state_21932__$1 = state_21932;var statearr_21939_21961 = state_21932__$1;(statearr_21939_21961[(2)] = null);
(statearr_21939_21961[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (6)))
{var inst_21911 = (state_21932[(7)]);var state_21932__$1 = state_21932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21932__$1,(11),to,inst_21911);
} else
{if((state_val_21933 === (3)))
{var inst_21930 = (state_21932[(2)]);var state_21932__$1 = state_21932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21932__$1,inst_21930);
} else
{if((state_val_21933 === (12)))
{var state_21932__$1 = state_21932;var statearr_21940_21962 = state_21932__$1;(statearr_21940_21962[(2)] = null);
(statearr_21940_21962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (2)))
{var state_21932__$1 = state_21932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21932__$1,(4),from);
} else
{if((state_val_21933 === (11)))
{var inst_21921 = (state_21932[(2)]);var state_21932__$1 = state_21932;if(cljs.core.truth_(inst_21921))
{var statearr_21941_21963 = state_21932__$1;(statearr_21941_21963[(1)] = (12));
} else
{var statearr_21942_21964 = state_21932__$1;(statearr_21942_21964[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (9)))
{var state_21932__$1 = state_21932;var statearr_21943_21965 = state_21932__$1;(statearr_21943_21965[(2)] = null);
(statearr_21943_21965[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (5)))
{var state_21932__$1 = state_21932;if(cljs.core.truth_(close_QMARK_))
{var statearr_21944_21966 = state_21932__$1;(statearr_21944_21966[(1)] = (8));
} else
{var statearr_21945_21967 = state_21932__$1;(statearr_21945_21967[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (14)))
{var inst_21926 = (state_21932[(2)]);var state_21932__$1 = state_21932;var statearr_21946_21968 = state_21932__$1;(statearr_21946_21968[(2)] = inst_21926);
(statearr_21946_21968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (10)))
{var inst_21918 = (state_21932[(2)]);var state_21932__$1 = state_21932;var statearr_21947_21969 = state_21932__$1;(statearr_21947_21969[(2)] = inst_21918);
(statearr_21947_21969[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21933 === (8)))
{var inst_21915 = cljs.core.async.close_BANG_.call(null,to);var state_21932__$1 = state_21932;var statearr_21948_21970 = state_21932__$1;(statearr_21948_21970[(2)] = inst_21915);
(statearr_21948_21970[(1)] = (10));
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
});})(c__15989__auto___21956))
;return ((function (switch__15974__auto__,c__15989__auto___21956){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21952 = [null,null,null,null,null,null,null,null];(statearr_21952[(0)] = state_machine__15975__auto__);
(statearr_21952[(1)] = (1));
return statearr_21952;
});
var state_machine__15975__auto____1 = (function (state_21932){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21932);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21953){if((e21953 instanceof Object))
{var ex__15978__auto__ = e21953;var statearr_21954_21971 = state_21932;(statearr_21954_21971[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21932);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21972 = state_21932;
state_21932 = G__21972;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21932){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21956))
})();var state__15991__auto__ = (function (){var statearr_21955 = f__15990__auto__.call(null);(statearr_21955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21956);
return statearr_21955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21956))
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
return (function (p__22156){var vec__22157 = p__22156;var v = cljs.core.nth.call(null,vec__22157,(0),null);var p = cljs.core.nth.call(null,vec__22157,(1),null);var job = vec__22157;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___22339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results){
return (function (state_22162){var state_val_22163 = (state_22162[(1)]);if((state_val_22163 === (2)))
{var inst_22159 = (state_22162[(2)]);var inst_22160 = cljs.core.async.close_BANG_.call(null,res);var state_22162__$1 = (function (){var statearr_22164 = state_22162;(statearr_22164[(7)] = inst_22159);
return statearr_22164;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22162__$1,inst_22160);
} else
{if((state_val_22163 === (1)))
{var state_22162__$1 = state_22162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22162__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22168 = [null,null,null,null,null,null,null,null];(statearr_22168[(0)] = state_machine__15975__auto__);
(statearr_22168[(1)] = (1));
return statearr_22168;
});
var state_machine__15975__auto____1 = (function (state_22162){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22162);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22169){if((e22169 instanceof Object))
{var ex__15978__auto__ = e22169;var statearr_22170_22340 = state_22162;(statearr_22170_22340[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22162);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22169;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22341 = state_22162;
state_22162 = G__22341;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22162){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_22171 = f__15990__auto__.call(null);(statearr_22171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22339);
return statearr_22171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22339,res,vec__22157,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22172){var vec__22173 = p__22172;var v = cljs.core.nth.call(null,vec__22173,(0),null);var p = cljs.core.nth.call(null,vec__22173,(1),null);var job = vec__22173;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___22342 = n;var __22343 = (0);while(true){
if((__22343 < n__13416__auto___22342))
{var G__22174_22344 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22174_22344) {
case "async":
var c__15989__auto___22346 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22343,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__22343,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function (state_22187){var state_val_22188 = (state_22187[(1)]);if((state_val_22188 === (7)))
{var inst_22183 = (state_22187[(2)]);var state_22187__$1 = state_22187;var statearr_22189_22347 = state_22187__$1;(statearr_22189_22347[(2)] = inst_22183);
(statearr_22189_22347[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22188 === (6)))
{var state_22187__$1 = state_22187;var statearr_22190_22348 = state_22187__$1;(statearr_22190_22348[(2)] = null);
(statearr_22190_22348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22188 === (5)))
{var state_22187__$1 = state_22187;var statearr_22191_22349 = state_22187__$1;(statearr_22191_22349[(2)] = null);
(statearr_22191_22349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22188 === (4)))
{var inst_22177 = (state_22187[(2)]);var inst_22178 = async.call(null,inst_22177);var state_22187__$1 = state_22187;if(cljs.core.truth_(inst_22178))
{var statearr_22192_22350 = state_22187__$1;(statearr_22192_22350[(1)] = (5));
} else
{var statearr_22193_22351 = state_22187__$1;(statearr_22193_22351[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22188 === (3)))
{var inst_22185 = (state_22187[(2)]);var state_22187__$1 = state_22187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22187__$1,inst_22185);
} else
{if((state_val_22188 === (2)))
{var state_22187__$1 = state_22187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22187__$1,(4),jobs);
} else
{if((state_val_22188 === (1)))
{var state_22187__$1 = state_22187;var statearr_22194_22352 = state_22187__$1;(statearr_22194_22352[(2)] = null);
(statearr_22194_22352[(1)] = (2));
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
});})(__22343,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
;return ((function (__22343,switch__15974__auto__,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22198 = [null,null,null,null,null,null,null];(statearr_22198[(0)] = state_machine__15975__auto__);
(statearr_22198[(1)] = (1));
return statearr_22198;
});
var state_machine__15975__auto____1 = (function (state_22187){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22187);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22199){if((e22199 instanceof Object))
{var ex__15978__auto__ = e22199;var statearr_22200_22353 = state_22187;(statearr_22200_22353[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22354 = state_22187;
state_22187 = G__22354;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22187){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__22343,switch__15974__auto__,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22201 = f__15990__auto__.call(null);(statearr_22201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22346);
return statearr_22201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__22343,c__15989__auto___22346,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___22355 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22343,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__22343,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function (state_22214){var state_val_22215 = (state_22214[(1)]);if((state_val_22215 === (7)))
{var inst_22210 = (state_22214[(2)]);var state_22214__$1 = state_22214;var statearr_22216_22356 = state_22214__$1;(statearr_22216_22356[(2)] = inst_22210);
(statearr_22216_22356[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22215 === (6)))
{var state_22214__$1 = state_22214;var statearr_22217_22357 = state_22214__$1;(statearr_22217_22357[(2)] = null);
(statearr_22217_22357[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22215 === (5)))
{var state_22214__$1 = state_22214;var statearr_22218_22358 = state_22214__$1;(statearr_22218_22358[(2)] = null);
(statearr_22218_22358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22215 === (4)))
{var inst_22204 = (state_22214[(2)]);var inst_22205 = process.call(null,inst_22204);var state_22214__$1 = state_22214;if(cljs.core.truth_(inst_22205))
{var statearr_22219_22359 = state_22214__$1;(statearr_22219_22359[(1)] = (5));
} else
{var statearr_22220_22360 = state_22214__$1;(statearr_22220_22360[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22215 === (3)))
{var inst_22212 = (state_22214[(2)]);var state_22214__$1 = state_22214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22214__$1,inst_22212);
} else
{if((state_val_22215 === (2)))
{var state_22214__$1 = state_22214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22214__$1,(4),jobs);
} else
{if((state_val_22215 === (1)))
{var state_22214__$1 = state_22214;var statearr_22221_22361 = state_22214__$1;(statearr_22221_22361[(2)] = null);
(statearr_22221_22361[(1)] = (2));
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
});})(__22343,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
;return ((function (__22343,switch__15974__auto__,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22225 = [null,null,null,null,null,null,null];(statearr_22225[(0)] = state_machine__15975__auto__);
(statearr_22225[(1)] = (1));
return statearr_22225;
});
var state_machine__15975__auto____1 = (function (state_22214){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22214);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22226){if((e22226 instanceof Object))
{var ex__15978__auto__ = e22226;var statearr_22227_22362 = state_22214;(statearr_22227_22362[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22226;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22363 = state_22214;
state_22214 = G__22363;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22214){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__22343,switch__15974__auto__,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22228 = f__15990__auto__.call(null);(statearr_22228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22355);
return statearr_22228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__22343,c__15989__auto___22355,G__22174_22344,n__13416__auto___22342,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22364 = (__22343 + (1));
__22343 = G__22364;
continue;
}
} else
{}
break;
}
var c__15989__auto___22365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22365,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22365,jobs,results,process,async){
return (function (state_22250){var state_val_22251 = (state_22250[(1)]);if((state_val_22251 === (9)))
{var inst_22243 = (state_22250[(2)]);var state_22250__$1 = (function (){var statearr_22252 = state_22250;(statearr_22252[(7)] = inst_22243);
return statearr_22252;
})();var statearr_22253_22366 = state_22250__$1;(statearr_22253_22366[(2)] = null);
(statearr_22253_22366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22251 === (8)))
{var inst_22236 = (state_22250[(8)]);var inst_22241 = (state_22250[(2)]);var state_22250__$1 = (function (){var statearr_22254 = state_22250;(statearr_22254[(9)] = inst_22241);
return statearr_22254;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22250__$1,(9),results,inst_22236);
} else
{if((state_val_22251 === (7)))
{var inst_22246 = (state_22250[(2)]);var state_22250__$1 = state_22250;var statearr_22255_22367 = state_22250__$1;(statearr_22255_22367[(2)] = inst_22246);
(statearr_22255_22367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22251 === (6)))
{var inst_22231 = (state_22250[(10)]);var inst_22236 = (state_22250[(8)]);var inst_22236__$1 = cljs.core.async.chan.call(null,(1));var inst_22237 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22238 = [inst_22231,inst_22236__$1];var inst_22239 = (new cljs.core.PersistentVector(null,2,(5),inst_22237,inst_22238,null));var state_22250__$1 = (function (){var statearr_22256 = state_22250;(statearr_22256[(8)] = inst_22236__$1);
return statearr_22256;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22250__$1,(8),jobs,inst_22239);
} else
{if((state_val_22251 === (5)))
{var inst_22234 = cljs.core.async.close_BANG_.call(null,jobs);var state_22250__$1 = state_22250;var statearr_22257_22368 = state_22250__$1;(statearr_22257_22368[(2)] = inst_22234);
(statearr_22257_22368[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22251 === (4)))
{var inst_22231 = (state_22250[(10)]);var inst_22231__$1 = (state_22250[(2)]);var inst_22232 = (inst_22231__$1 == null);var state_22250__$1 = (function (){var statearr_22258 = state_22250;(statearr_22258[(10)] = inst_22231__$1);
return statearr_22258;
})();if(cljs.core.truth_(inst_22232))
{var statearr_22259_22369 = state_22250__$1;(statearr_22259_22369[(1)] = (5));
} else
{var statearr_22260_22370 = state_22250__$1;(statearr_22260_22370[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22251 === (3)))
{var inst_22248 = (state_22250[(2)]);var state_22250__$1 = state_22250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22250__$1,inst_22248);
} else
{if((state_val_22251 === (2)))
{var state_22250__$1 = state_22250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22250__$1,(4),from);
} else
{if((state_val_22251 === (1)))
{var state_22250__$1 = state_22250;var statearr_22261_22371 = state_22250__$1;(statearr_22261_22371[(2)] = null);
(statearr_22261_22371[(1)] = (2));
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
});})(c__15989__auto___22365,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___22365,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22265 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22265[(0)] = state_machine__15975__auto__);
(statearr_22265[(1)] = (1));
return statearr_22265;
});
var state_machine__15975__auto____1 = (function (state_22250){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22250);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22266){if((e22266 instanceof Object))
{var ex__15978__auto__ = e22266;var statearr_22267_22372 = state_22250;(statearr_22267_22372[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22266;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22373 = state_22250;
state_22250 = G__22373;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22250){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22365,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22268 = f__15990__auto__.call(null);(statearr_22268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22365);
return statearr_22268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22365,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_22306){var state_val_22307 = (state_22306[(1)]);if((state_val_22307 === (7)))
{var inst_22302 = (state_22306[(2)]);var state_22306__$1 = state_22306;var statearr_22308_22374 = state_22306__$1;(statearr_22308_22374[(2)] = inst_22302);
(statearr_22308_22374[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (20)))
{var state_22306__$1 = state_22306;var statearr_22309_22375 = state_22306__$1;(statearr_22309_22375[(2)] = null);
(statearr_22309_22375[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (1)))
{var state_22306__$1 = state_22306;var statearr_22310_22376 = state_22306__$1;(statearr_22310_22376[(2)] = null);
(statearr_22310_22376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (4)))
{var inst_22271 = (state_22306[(7)]);var inst_22271__$1 = (state_22306[(2)]);var inst_22272 = (inst_22271__$1 == null);var state_22306__$1 = (function (){var statearr_22311 = state_22306;(statearr_22311[(7)] = inst_22271__$1);
return statearr_22311;
})();if(cljs.core.truth_(inst_22272))
{var statearr_22312_22377 = state_22306__$1;(statearr_22312_22377[(1)] = (5));
} else
{var statearr_22313_22378 = state_22306__$1;(statearr_22313_22378[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (15)))
{var inst_22284 = (state_22306[(8)]);var state_22306__$1 = state_22306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22306__$1,(18),to,inst_22284);
} else
{if((state_val_22307 === (21)))
{var inst_22297 = (state_22306[(2)]);var state_22306__$1 = state_22306;var statearr_22314_22379 = state_22306__$1;(statearr_22314_22379[(2)] = inst_22297);
(statearr_22314_22379[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (13)))
{var inst_22299 = (state_22306[(2)]);var state_22306__$1 = (function (){var statearr_22315 = state_22306;(statearr_22315[(9)] = inst_22299);
return statearr_22315;
})();var statearr_22316_22380 = state_22306__$1;(statearr_22316_22380[(2)] = null);
(statearr_22316_22380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (6)))
{var inst_22271 = (state_22306[(7)]);var state_22306__$1 = state_22306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22306__$1,(11),inst_22271);
} else
{if((state_val_22307 === (17)))
{var inst_22292 = (state_22306[(2)]);var state_22306__$1 = state_22306;if(cljs.core.truth_(inst_22292))
{var statearr_22317_22381 = state_22306__$1;(statearr_22317_22381[(1)] = (19));
} else
{var statearr_22318_22382 = state_22306__$1;(statearr_22318_22382[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (3)))
{var inst_22304 = (state_22306[(2)]);var state_22306__$1 = state_22306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22306__$1,inst_22304);
} else
{if((state_val_22307 === (12)))
{var inst_22281 = (state_22306[(10)]);var state_22306__$1 = state_22306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22306__$1,(14),inst_22281);
} else
{if((state_val_22307 === (2)))
{var state_22306__$1 = state_22306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22306__$1,(4),results);
} else
{if((state_val_22307 === (19)))
{var state_22306__$1 = state_22306;var statearr_22319_22383 = state_22306__$1;(statearr_22319_22383[(2)] = null);
(statearr_22319_22383[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (11)))
{var inst_22281 = (state_22306[(2)]);var state_22306__$1 = (function (){var statearr_22320 = state_22306;(statearr_22320[(10)] = inst_22281);
return statearr_22320;
})();var statearr_22321_22384 = state_22306__$1;(statearr_22321_22384[(2)] = null);
(statearr_22321_22384[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (9)))
{var state_22306__$1 = state_22306;var statearr_22322_22385 = state_22306__$1;(statearr_22322_22385[(2)] = null);
(statearr_22322_22385[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (5)))
{var state_22306__$1 = state_22306;if(cljs.core.truth_(close_QMARK_))
{var statearr_22323_22386 = state_22306__$1;(statearr_22323_22386[(1)] = (8));
} else
{var statearr_22324_22387 = state_22306__$1;(statearr_22324_22387[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (14)))
{var inst_22286 = (state_22306[(11)]);var inst_22284 = (state_22306[(8)]);var inst_22284__$1 = (state_22306[(2)]);var inst_22285 = (inst_22284__$1 == null);var inst_22286__$1 = cljs.core.not.call(null,inst_22285);var state_22306__$1 = (function (){var statearr_22325 = state_22306;(statearr_22325[(11)] = inst_22286__$1);
(statearr_22325[(8)] = inst_22284__$1);
return statearr_22325;
})();if(inst_22286__$1)
{var statearr_22326_22388 = state_22306__$1;(statearr_22326_22388[(1)] = (15));
} else
{var statearr_22327_22389 = state_22306__$1;(statearr_22327_22389[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (16)))
{var inst_22286 = (state_22306[(11)]);var state_22306__$1 = state_22306;var statearr_22328_22390 = state_22306__$1;(statearr_22328_22390[(2)] = inst_22286);
(statearr_22328_22390[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (10)))
{var inst_22278 = (state_22306[(2)]);var state_22306__$1 = state_22306;var statearr_22329_22391 = state_22306__$1;(statearr_22329_22391[(2)] = inst_22278);
(statearr_22329_22391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (18)))
{var inst_22289 = (state_22306[(2)]);var state_22306__$1 = state_22306;var statearr_22330_22392 = state_22306__$1;(statearr_22330_22392[(2)] = inst_22289);
(statearr_22330_22392[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22307 === (8)))
{var inst_22275 = cljs.core.async.close_BANG_.call(null,to);var state_22306__$1 = state_22306;var statearr_22331_22393 = state_22306__$1;(statearr_22331_22393[(2)] = inst_22275);
(statearr_22331_22393[(1)] = (10));
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
var state_machine__15975__auto____0 = (function (){var statearr_22335 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22335[(0)] = state_machine__15975__auto__);
(statearr_22335[(1)] = (1));
return statearr_22335;
});
var state_machine__15975__auto____1 = (function (state_22306){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22306);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object))
{var ex__15978__auto__ = e22336;var statearr_22337_22394 = state_22306;(statearr_22337_22394[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22395 = state_22306;
state_22306 = G__22395;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22306){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22338 = f__15990__auto__.call(null);(statearr_22338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22338;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___22496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22496,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22496,tc,fc){
return (function (state_22471){var state_val_22472 = (state_22471[(1)]);if((state_val_22472 === (7)))
{var inst_22467 = (state_22471[(2)]);var state_22471__$1 = state_22471;var statearr_22473_22497 = state_22471__$1;(statearr_22473_22497[(2)] = inst_22467);
(statearr_22473_22497[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (1)))
{var state_22471__$1 = state_22471;var statearr_22474_22498 = state_22471__$1;(statearr_22474_22498[(2)] = null);
(statearr_22474_22498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (4)))
{var inst_22448 = (state_22471[(7)]);var inst_22448__$1 = (state_22471[(2)]);var inst_22449 = (inst_22448__$1 == null);var state_22471__$1 = (function (){var statearr_22475 = state_22471;(statearr_22475[(7)] = inst_22448__$1);
return statearr_22475;
})();if(cljs.core.truth_(inst_22449))
{var statearr_22476_22499 = state_22471__$1;(statearr_22476_22499[(1)] = (5));
} else
{var statearr_22477_22500 = state_22471__$1;(statearr_22477_22500[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (13)))
{var state_22471__$1 = state_22471;var statearr_22478_22501 = state_22471__$1;(statearr_22478_22501[(2)] = null);
(statearr_22478_22501[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (6)))
{var inst_22448 = (state_22471[(7)]);var inst_22454 = p.call(null,inst_22448);var state_22471__$1 = state_22471;if(cljs.core.truth_(inst_22454))
{var statearr_22479_22502 = state_22471__$1;(statearr_22479_22502[(1)] = (9));
} else
{var statearr_22480_22503 = state_22471__$1;(statearr_22480_22503[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (3)))
{var inst_22469 = (state_22471[(2)]);var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22471__$1,inst_22469);
} else
{if((state_val_22472 === (12)))
{var state_22471__$1 = state_22471;var statearr_22481_22504 = state_22471__$1;(statearr_22481_22504[(2)] = null);
(statearr_22481_22504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (2)))
{var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22471__$1,(4),ch);
} else
{if((state_val_22472 === (11)))
{var inst_22448 = (state_22471[(7)]);var inst_22458 = (state_22471[(2)]);var state_22471__$1 = state_22471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22471__$1,(8),inst_22458,inst_22448);
} else
{if((state_val_22472 === (9)))
{var state_22471__$1 = state_22471;var statearr_22482_22505 = state_22471__$1;(statearr_22482_22505[(2)] = tc);
(statearr_22482_22505[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (5)))
{var inst_22451 = cljs.core.async.close_BANG_.call(null,tc);var inst_22452 = cljs.core.async.close_BANG_.call(null,fc);var state_22471__$1 = (function (){var statearr_22483 = state_22471;(statearr_22483[(8)] = inst_22451);
return statearr_22483;
})();var statearr_22484_22506 = state_22471__$1;(statearr_22484_22506[(2)] = inst_22452);
(statearr_22484_22506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (14)))
{var inst_22465 = (state_22471[(2)]);var state_22471__$1 = state_22471;var statearr_22485_22507 = state_22471__$1;(statearr_22485_22507[(2)] = inst_22465);
(statearr_22485_22507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (10)))
{var state_22471__$1 = state_22471;var statearr_22486_22508 = state_22471__$1;(statearr_22486_22508[(2)] = fc);
(statearr_22486_22508[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22472 === (8)))
{var inst_22460 = (state_22471[(2)]);var state_22471__$1 = state_22471;if(cljs.core.truth_(inst_22460))
{var statearr_22487_22509 = state_22471__$1;(statearr_22487_22509[(1)] = (12));
} else
{var statearr_22488_22510 = state_22471__$1;(statearr_22488_22510[(1)] = (13));
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
});})(c__15989__auto___22496,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___22496,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22492 = [null,null,null,null,null,null,null,null,null];(statearr_22492[(0)] = state_machine__15975__auto__);
(statearr_22492[(1)] = (1));
return statearr_22492;
});
var state_machine__15975__auto____1 = (function (state_22471){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22471);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22493){if((e22493 instanceof Object))
{var ex__15978__auto__ = e22493;var statearr_22494_22511 = state_22471;(statearr_22494_22511[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22512 = state_22471;
state_22471 = G__22512;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22496,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_22495 = f__15990__auto__.call(null);(statearr_22495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22496);
return statearr_22495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22496,tc,fc))
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
return (function (state_22559){var state_val_22560 = (state_22559[(1)]);if((state_val_22560 === (7)))
{var inst_22555 = (state_22559[(2)]);var state_22559__$1 = state_22559;var statearr_22561_22577 = state_22559__$1;(statearr_22561_22577[(2)] = inst_22555);
(statearr_22561_22577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22560 === (6)))
{var inst_22545 = (state_22559[(7)]);var inst_22548 = (state_22559[(8)]);var inst_22552 = f.call(null,inst_22545,inst_22548);var inst_22545__$1 = inst_22552;var state_22559__$1 = (function (){var statearr_22562 = state_22559;(statearr_22562[(7)] = inst_22545__$1);
return statearr_22562;
})();var statearr_22563_22578 = state_22559__$1;(statearr_22563_22578[(2)] = null);
(statearr_22563_22578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22560 === (5)))
{var inst_22545 = (state_22559[(7)]);var state_22559__$1 = state_22559;var statearr_22564_22579 = state_22559__$1;(statearr_22564_22579[(2)] = inst_22545);
(statearr_22564_22579[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22560 === (4)))
{var inst_22548 = (state_22559[(8)]);var inst_22548__$1 = (state_22559[(2)]);var inst_22549 = (inst_22548__$1 == null);var state_22559__$1 = (function (){var statearr_22565 = state_22559;(statearr_22565[(8)] = inst_22548__$1);
return statearr_22565;
})();if(cljs.core.truth_(inst_22549))
{var statearr_22566_22580 = state_22559__$1;(statearr_22566_22580[(1)] = (5));
} else
{var statearr_22567_22581 = state_22559__$1;(statearr_22567_22581[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22560 === (3)))
{var inst_22557 = (state_22559[(2)]);var state_22559__$1 = state_22559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else
{if((state_val_22560 === (2)))
{var state_22559__$1 = state_22559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22559__$1,(4),ch);
} else
{if((state_val_22560 === (1)))
{var inst_22545 = init;var state_22559__$1 = (function (){var statearr_22568 = state_22559;(statearr_22568[(7)] = inst_22545);
return statearr_22568;
})();var statearr_22569_22582 = state_22559__$1;(statearr_22569_22582[(2)] = null);
(statearr_22569_22582[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_22573 = [null,null,null,null,null,null,null,null,null];(statearr_22573[(0)] = state_machine__15975__auto__);
(statearr_22573[(1)] = (1));
return statearr_22573;
});
var state_machine__15975__auto____1 = (function (state_22559){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22559);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22574){if((e22574 instanceof Object))
{var ex__15978__auto__ = e22574;var statearr_22575_22583 = state_22559;(statearr_22575_22583[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22574;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22584 = state_22559;
state_22559 = G__22584;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_22576 = f__15990__auto__.call(null);(statearr_22576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22576;
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
return (function (state_22658){var state_val_22659 = (state_22658[(1)]);if((state_val_22659 === (7)))
{var inst_22640 = (state_22658[(2)]);var state_22658__$1 = state_22658;var statearr_22660_22683 = state_22658__$1;(statearr_22660_22683[(2)] = inst_22640);
(statearr_22660_22683[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (1)))
{var inst_22634 = cljs.core.seq.call(null,coll);var inst_22635 = inst_22634;var state_22658__$1 = (function (){var statearr_22661 = state_22658;(statearr_22661[(7)] = inst_22635);
return statearr_22661;
})();var statearr_22662_22684 = state_22658__$1;(statearr_22662_22684[(2)] = null);
(statearr_22662_22684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (4)))
{var inst_22635 = (state_22658[(7)]);var inst_22638 = cljs.core.first.call(null,inst_22635);var state_22658__$1 = state_22658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22658__$1,(7),ch,inst_22638);
} else
{if((state_val_22659 === (13)))
{var inst_22652 = (state_22658[(2)]);var state_22658__$1 = state_22658;var statearr_22663_22685 = state_22658__$1;(statearr_22663_22685[(2)] = inst_22652);
(statearr_22663_22685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (6)))
{var inst_22643 = (state_22658[(2)]);var state_22658__$1 = state_22658;if(cljs.core.truth_(inst_22643))
{var statearr_22664_22686 = state_22658__$1;(statearr_22664_22686[(1)] = (8));
} else
{var statearr_22665_22687 = state_22658__$1;(statearr_22665_22687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (3)))
{var inst_22656 = (state_22658[(2)]);var state_22658__$1 = state_22658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22658__$1,inst_22656);
} else
{if((state_val_22659 === (12)))
{var state_22658__$1 = state_22658;var statearr_22666_22688 = state_22658__$1;(statearr_22666_22688[(2)] = null);
(statearr_22666_22688[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (2)))
{var inst_22635 = (state_22658[(7)]);var state_22658__$1 = state_22658;if(cljs.core.truth_(inst_22635))
{var statearr_22667_22689 = state_22658__$1;(statearr_22667_22689[(1)] = (4));
} else
{var statearr_22668_22690 = state_22658__$1;(statearr_22668_22690[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (11)))
{var inst_22649 = cljs.core.async.close_BANG_.call(null,ch);var state_22658__$1 = state_22658;var statearr_22669_22691 = state_22658__$1;(statearr_22669_22691[(2)] = inst_22649);
(statearr_22669_22691[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (9)))
{var state_22658__$1 = state_22658;if(cljs.core.truth_(close_QMARK_))
{var statearr_22670_22692 = state_22658__$1;(statearr_22670_22692[(1)] = (11));
} else
{var statearr_22671_22693 = state_22658__$1;(statearr_22671_22693[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (5)))
{var inst_22635 = (state_22658[(7)]);var state_22658__$1 = state_22658;var statearr_22672_22694 = state_22658__$1;(statearr_22672_22694[(2)] = inst_22635);
(statearr_22672_22694[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (10)))
{var inst_22654 = (state_22658[(2)]);var state_22658__$1 = state_22658;var statearr_22673_22695 = state_22658__$1;(statearr_22673_22695[(2)] = inst_22654);
(statearr_22673_22695[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22659 === (8)))
{var inst_22635 = (state_22658[(7)]);var inst_22645 = cljs.core.next.call(null,inst_22635);var inst_22635__$1 = inst_22645;var state_22658__$1 = (function (){var statearr_22674 = state_22658;(statearr_22674[(7)] = inst_22635__$1);
return statearr_22674;
})();var statearr_22675_22696 = state_22658__$1;(statearr_22675_22696[(2)] = null);
(statearr_22675_22696[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_22679 = [null,null,null,null,null,null,null,null];(statearr_22679[(0)] = state_machine__15975__auto__);
(statearr_22679[(1)] = (1));
return statearr_22679;
});
var state_machine__15975__auto____1 = (function (state_22658){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22658);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22680){if((e22680 instanceof Object))
{var ex__15978__auto__ = e22680;var statearr_22681_22697 = state_22658;(statearr_22681_22697[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22698 = state_22658;
state_22658 = G__22698;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22658){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_22682 = f__15990__auto__.call(null);(statearr_22682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22682;
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
cljs.core.async.Mux = (function (){var obj22700 = {};return obj22700;
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
cljs.core.async.Mult = (function (){var obj22702 = {};return obj22702;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22924 = (function (cs,ch,mult,meta22925){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22925 = meta22925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22924.cljs$lang$type = true;
cljs.core.async.t22924.cljs$lang$ctorStr = "cljs.core.async/t22924";
cljs.core.async.t22924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22924");
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22926){var self__ = this;
var _22926__$1 = this;return self__.meta22925;
});})(cs))
;
cljs.core.async.t22924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22926,meta22925__$1){var self__ = this;
var _22926__$1 = this;return (new cljs.core.async.t22924(self__.cs,self__.ch,self__.mult,meta22925__$1));
});})(cs))
;
cljs.core.async.__GT_t22924 = ((function (cs){
return (function __GT_t22924(cs__$1,ch__$1,mult__$1,meta22925){return (new cljs.core.async.t22924(cs__$1,ch__$1,mult__$1,meta22925));
});})(cs))
;
}
return (new cljs.core.async.t22924(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___23145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23145,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23145,cs,m,dchan,dctr,done){
return (function (state_23057){var state_val_23058 = (state_23057[(1)]);if((state_val_23058 === (7)))
{var inst_23053 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23059_23146 = state_23057__$1;(statearr_23059_23146[(2)] = inst_23053);
(statearr_23059_23146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (20)))
{var inst_22958 = (state_23057[(7)]);var inst_22968 = cljs.core.first.call(null,inst_22958);var inst_22969 = cljs.core.nth.call(null,inst_22968,(0),null);var inst_22970 = cljs.core.nth.call(null,inst_22968,(1),null);var state_23057__$1 = (function (){var statearr_23060 = state_23057;(statearr_23060[(8)] = inst_22969);
return statearr_23060;
})();if(cljs.core.truth_(inst_22970))
{var statearr_23061_23147 = state_23057__$1;(statearr_23061_23147[(1)] = (22));
} else
{var statearr_23062_23148 = state_23057__$1;(statearr_23062_23148[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (27)))
{var inst_23000 = (state_23057[(9)]);var inst_22929 = (state_23057[(10)]);var inst_23005 = (state_23057[(11)]);var inst_22998 = (state_23057[(12)]);var inst_23005__$1 = cljs.core._nth.call(null,inst_22998,inst_23000);var inst_23006 = cljs.core.async.put_BANG_.call(null,inst_23005__$1,inst_22929,done);var state_23057__$1 = (function (){var statearr_23063 = state_23057;(statearr_23063[(11)] = inst_23005__$1);
return statearr_23063;
})();if(cljs.core.truth_(inst_23006))
{var statearr_23064_23149 = state_23057__$1;(statearr_23064_23149[(1)] = (30));
} else
{var statearr_23065_23150 = state_23057__$1;(statearr_23065_23150[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (1)))
{var state_23057__$1 = state_23057;var statearr_23066_23151 = state_23057__$1;(statearr_23066_23151[(2)] = null);
(statearr_23066_23151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (24)))
{var inst_22958 = (state_23057[(7)]);var inst_22975 = (state_23057[(2)]);var inst_22976 = cljs.core.next.call(null,inst_22958);var inst_22938 = inst_22976;var inst_22939 = null;var inst_22940 = (0);var inst_22941 = (0);var state_23057__$1 = (function (){var statearr_23067 = state_23057;(statearr_23067[(13)] = inst_22939);
(statearr_23067[(14)] = inst_22938);
(statearr_23067[(15)] = inst_22940);
(statearr_23067[(16)] = inst_22975);
(statearr_23067[(17)] = inst_22941);
return statearr_23067;
})();var statearr_23068_23152 = state_23057__$1;(statearr_23068_23152[(2)] = null);
(statearr_23068_23152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (39)))
{var state_23057__$1 = state_23057;var statearr_23072_23153 = state_23057__$1;(statearr_23072_23153[(2)] = null);
(statearr_23072_23153[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (4)))
{var inst_22929 = (state_23057[(10)]);var inst_22929__$1 = (state_23057[(2)]);var inst_22930 = (inst_22929__$1 == null);var state_23057__$1 = (function (){var statearr_23073 = state_23057;(statearr_23073[(10)] = inst_22929__$1);
return statearr_23073;
})();if(cljs.core.truth_(inst_22930))
{var statearr_23074_23154 = state_23057__$1;(statearr_23074_23154[(1)] = (5));
} else
{var statearr_23075_23155 = state_23057__$1;(statearr_23075_23155[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (15)))
{var inst_22939 = (state_23057[(13)]);var inst_22938 = (state_23057[(14)]);var inst_22940 = (state_23057[(15)]);var inst_22941 = (state_23057[(17)]);var inst_22954 = (state_23057[(2)]);var inst_22955 = (inst_22941 + (1));var tmp23069 = inst_22939;var tmp23070 = inst_22938;var tmp23071 = inst_22940;var inst_22938__$1 = tmp23070;var inst_22939__$1 = tmp23069;var inst_22940__$1 = tmp23071;var inst_22941__$1 = inst_22955;var state_23057__$1 = (function (){var statearr_23076 = state_23057;(statearr_23076[(13)] = inst_22939__$1);
(statearr_23076[(18)] = inst_22954);
(statearr_23076[(14)] = inst_22938__$1);
(statearr_23076[(15)] = inst_22940__$1);
(statearr_23076[(17)] = inst_22941__$1);
return statearr_23076;
})();var statearr_23077_23156 = state_23057__$1;(statearr_23077_23156[(2)] = null);
(statearr_23077_23156[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (21)))
{var inst_22979 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23081_23157 = state_23057__$1;(statearr_23081_23157[(2)] = inst_22979);
(statearr_23081_23157[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (31)))
{var inst_23005 = (state_23057[(11)]);var inst_23009 = done.call(null,null);var inst_23010 = cljs.core.async.untap_STAR_.call(null,m,inst_23005);var state_23057__$1 = (function (){var statearr_23082 = state_23057;(statearr_23082[(19)] = inst_23009);
return statearr_23082;
})();var statearr_23083_23158 = state_23057__$1;(statearr_23083_23158[(2)] = inst_23010);
(statearr_23083_23158[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (32)))
{var inst_23000 = (state_23057[(9)]);var inst_22999 = (state_23057[(20)]);var inst_22997 = (state_23057[(21)]);var inst_22998 = (state_23057[(12)]);var inst_23012 = (state_23057[(2)]);var inst_23013 = (inst_23000 + (1));var tmp23078 = inst_22999;var tmp23079 = inst_22997;var tmp23080 = inst_22998;var inst_22997__$1 = tmp23079;var inst_22998__$1 = tmp23080;var inst_22999__$1 = tmp23078;var inst_23000__$1 = inst_23013;var state_23057__$1 = (function (){var statearr_23084 = state_23057;(statearr_23084[(9)] = inst_23000__$1);
(statearr_23084[(20)] = inst_22999__$1);
(statearr_23084[(22)] = inst_23012);
(statearr_23084[(21)] = inst_22997__$1);
(statearr_23084[(12)] = inst_22998__$1);
return statearr_23084;
})();var statearr_23085_23159 = state_23057__$1;(statearr_23085_23159[(2)] = null);
(statearr_23085_23159[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (40)))
{var inst_23025 = (state_23057[(23)]);var inst_23029 = done.call(null,null);var inst_23030 = cljs.core.async.untap_STAR_.call(null,m,inst_23025);var state_23057__$1 = (function (){var statearr_23086 = state_23057;(statearr_23086[(24)] = inst_23029);
return statearr_23086;
})();var statearr_23087_23160 = state_23057__$1;(statearr_23087_23160[(2)] = inst_23030);
(statearr_23087_23160[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (33)))
{var inst_23016 = (state_23057[(25)]);var inst_23018 = cljs.core.chunked_seq_QMARK_.call(null,inst_23016);var state_23057__$1 = state_23057;if(inst_23018)
{var statearr_23088_23161 = state_23057__$1;(statearr_23088_23161[(1)] = (36));
} else
{var statearr_23089_23162 = state_23057__$1;(statearr_23089_23162[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (13)))
{var inst_22948 = (state_23057[(26)]);var inst_22951 = cljs.core.async.close_BANG_.call(null,inst_22948);var state_23057__$1 = state_23057;var statearr_23090_23163 = state_23057__$1;(statearr_23090_23163[(2)] = inst_22951);
(statearr_23090_23163[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (22)))
{var inst_22969 = (state_23057[(8)]);var inst_22972 = cljs.core.async.close_BANG_.call(null,inst_22969);var state_23057__$1 = state_23057;var statearr_23091_23164 = state_23057__$1;(statearr_23091_23164[(2)] = inst_22972);
(statearr_23091_23164[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (36)))
{var inst_23016 = (state_23057[(25)]);var inst_23020 = cljs.core.chunk_first.call(null,inst_23016);var inst_23021 = cljs.core.chunk_rest.call(null,inst_23016);var inst_23022 = cljs.core.count.call(null,inst_23020);var inst_22997 = inst_23021;var inst_22998 = inst_23020;var inst_22999 = inst_23022;var inst_23000 = (0);var state_23057__$1 = (function (){var statearr_23092 = state_23057;(statearr_23092[(9)] = inst_23000);
(statearr_23092[(20)] = inst_22999);
(statearr_23092[(21)] = inst_22997);
(statearr_23092[(12)] = inst_22998);
return statearr_23092;
})();var statearr_23093_23165 = state_23057__$1;(statearr_23093_23165[(2)] = null);
(statearr_23093_23165[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (41)))
{var inst_23016 = (state_23057[(25)]);var inst_23032 = (state_23057[(2)]);var inst_23033 = cljs.core.next.call(null,inst_23016);var inst_22997 = inst_23033;var inst_22998 = null;var inst_22999 = (0);var inst_23000 = (0);var state_23057__$1 = (function (){var statearr_23094 = state_23057;(statearr_23094[(9)] = inst_23000);
(statearr_23094[(27)] = inst_23032);
(statearr_23094[(20)] = inst_22999);
(statearr_23094[(21)] = inst_22997);
(statearr_23094[(12)] = inst_22998);
return statearr_23094;
})();var statearr_23095_23166 = state_23057__$1;(statearr_23095_23166[(2)] = null);
(statearr_23095_23166[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (43)))
{var state_23057__$1 = state_23057;var statearr_23096_23167 = state_23057__$1;(statearr_23096_23167[(2)] = null);
(statearr_23096_23167[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (29)))
{var inst_23041 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23097_23168 = state_23057__$1;(statearr_23097_23168[(2)] = inst_23041);
(statearr_23097_23168[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (44)))
{var inst_23050 = (state_23057[(2)]);var state_23057__$1 = (function (){var statearr_23098 = state_23057;(statearr_23098[(28)] = inst_23050);
return statearr_23098;
})();var statearr_23099_23169 = state_23057__$1;(statearr_23099_23169[(2)] = null);
(statearr_23099_23169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (6)))
{var inst_22989 = (state_23057[(29)]);var inst_22988 = cljs.core.deref.call(null,cs);var inst_22989__$1 = cljs.core.keys.call(null,inst_22988);var inst_22990 = cljs.core.count.call(null,inst_22989__$1);var inst_22991 = cljs.core.reset_BANG_.call(null,dctr,inst_22990);var inst_22996 = cljs.core.seq.call(null,inst_22989__$1);var inst_22997 = inst_22996;var inst_22998 = null;var inst_22999 = (0);var inst_23000 = (0);var state_23057__$1 = (function (){var statearr_23100 = state_23057;(statearr_23100[(9)] = inst_23000);
(statearr_23100[(20)] = inst_22999);
(statearr_23100[(21)] = inst_22997);
(statearr_23100[(30)] = inst_22991);
(statearr_23100[(12)] = inst_22998);
(statearr_23100[(29)] = inst_22989__$1);
return statearr_23100;
})();var statearr_23101_23170 = state_23057__$1;(statearr_23101_23170[(2)] = null);
(statearr_23101_23170[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (28)))
{var inst_23016 = (state_23057[(25)]);var inst_22997 = (state_23057[(21)]);var inst_23016__$1 = cljs.core.seq.call(null,inst_22997);var state_23057__$1 = (function (){var statearr_23102 = state_23057;(statearr_23102[(25)] = inst_23016__$1);
return statearr_23102;
})();if(inst_23016__$1)
{var statearr_23103_23171 = state_23057__$1;(statearr_23103_23171[(1)] = (33));
} else
{var statearr_23104_23172 = state_23057__$1;(statearr_23104_23172[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (25)))
{var inst_23000 = (state_23057[(9)]);var inst_22999 = (state_23057[(20)]);var inst_23002 = (inst_23000 < inst_22999);var inst_23003 = inst_23002;var state_23057__$1 = state_23057;if(cljs.core.truth_(inst_23003))
{var statearr_23105_23173 = state_23057__$1;(statearr_23105_23173[(1)] = (27));
} else
{var statearr_23106_23174 = state_23057__$1;(statearr_23106_23174[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (34)))
{var state_23057__$1 = state_23057;var statearr_23107_23175 = state_23057__$1;(statearr_23107_23175[(2)] = null);
(statearr_23107_23175[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (17)))
{var state_23057__$1 = state_23057;var statearr_23108_23176 = state_23057__$1;(statearr_23108_23176[(2)] = null);
(statearr_23108_23176[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (3)))
{var inst_23055 = (state_23057[(2)]);var state_23057__$1 = state_23057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23057__$1,inst_23055);
} else
{if((state_val_23058 === (12)))
{var inst_22984 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23109_23177 = state_23057__$1;(statearr_23109_23177[(2)] = inst_22984);
(statearr_23109_23177[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (2)))
{var state_23057__$1 = state_23057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23057__$1,(4),ch);
} else
{if((state_val_23058 === (23)))
{var state_23057__$1 = state_23057;var statearr_23110_23178 = state_23057__$1;(statearr_23110_23178[(2)] = null);
(statearr_23110_23178[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (35)))
{var inst_23039 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23111_23179 = state_23057__$1;(statearr_23111_23179[(2)] = inst_23039);
(statearr_23111_23179[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (19)))
{var inst_22958 = (state_23057[(7)]);var inst_22962 = cljs.core.chunk_first.call(null,inst_22958);var inst_22963 = cljs.core.chunk_rest.call(null,inst_22958);var inst_22964 = cljs.core.count.call(null,inst_22962);var inst_22938 = inst_22963;var inst_22939 = inst_22962;var inst_22940 = inst_22964;var inst_22941 = (0);var state_23057__$1 = (function (){var statearr_23112 = state_23057;(statearr_23112[(13)] = inst_22939);
(statearr_23112[(14)] = inst_22938);
(statearr_23112[(15)] = inst_22940);
(statearr_23112[(17)] = inst_22941);
return statearr_23112;
})();var statearr_23113_23180 = state_23057__$1;(statearr_23113_23180[(2)] = null);
(statearr_23113_23180[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (11)))
{var inst_22938 = (state_23057[(14)]);var inst_22958 = (state_23057[(7)]);var inst_22958__$1 = cljs.core.seq.call(null,inst_22938);var state_23057__$1 = (function (){var statearr_23114 = state_23057;(statearr_23114[(7)] = inst_22958__$1);
return statearr_23114;
})();if(inst_22958__$1)
{var statearr_23115_23181 = state_23057__$1;(statearr_23115_23181[(1)] = (16));
} else
{var statearr_23116_23182 = state_23057__$1;(statearr_23116_23182[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (9)))
{var inst_22986 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23117_23183 = state_23057__$1;(statearr_23117_23183[(2)] = inst_22986);
(statearr_23117_23183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (5)))
{var inst_22936 = cljs.core.deref.call(null,cs);var inst_22937 = cljs.core.seq.call(null,inst_22936);var inst_22938 = inst_22937;var inst_22939 = null;var inst_22940 = (0);var inst_22941 = (0);var state_23057__$1 = (function (){var statearr_23118 = state_23057;(statearr_23118[(13)] = inst_22939);
(statearr_23118[(14)] = inst_22938);
(statearr_23118[(15)] = inst_22940);
(statearr_23118[(17)] = inst_22941);
return statearr_23118;
})();var statearr_23119_23184 = state_23057__$1;(statearr_23119_23184[(2)] = null);
(statearr_23119_23184[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (14)))
{var state_23057__$1 = state_23057;var statearr_23120_23185 = state_23057__$1;(statearr_23120_23185[(2)] = null);
(statearr_23120_23185[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (45)))
{var inst_23047 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23121_23186 = state_23057__$1;(statearr_23121_23186[(2)] = inst_23047);
(statearr_23121_23186[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (26)))
{var inst_22989 = (state_23057[(29)]);var inst_23043 = (state_23057[(2)]);var inst_23044 = cljs.core.seq.call(null,inst_22989);var state_23057__$1 = (function (){var statearr_23122 = state_23057;(statearr_23122[(31)] = inst_23043);
return statearr_23122;
})();if(inst_23044)
{var statearr_23123_23187 = state_23057__$1;(statearr_23123_23187[(1)] = (42));
} else
{var statearr_23124_23188 = state_23057__$1;(statearr_23124_23188[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (16)))
{var inst_22958 = (state_23057[(7)]);var inst_22960 = cljs.core.chunked_seq_QMARK_.call(null,inst_22958);var state_23057__$1 = state_23057;if(inst_22960)
{var statearr_23125_23189 = state_23057__$1;(statearr_23125_23189[(1)] = (19));
} else
{var statearr_23126_23190 = state_23057__$1;(statearr_23126_23190[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (38)))
{var inst_23036 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23127_23191 = state_23057__$1;(statearr_23127_23191[(2)] = inst_23036);
(statearr_23127_23191[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (30)))
{var state_23057__$1 = state_23057;var statearr_23128_23192 = state_23057__$1;(statearr_23128_23192[(2)] = null);
(statearr_23128_23192[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (10)))
{var inst_22939 = (state_23057[(13)]);var inst_22941 = (state_23057[(17)]);var inst_22947 = cljs.core._nth.call(null,inst_22939,inst_22941);var inst_22948 = cljs.core.nth.call(null,inst_22947,(0),null);var inst_22949 = cljs.core.nth.call(null,inst_22947,(1),null);var state_23057__$1 = (function (){var statearr_23129 = state_23057;(statearr_23129[(26)] = inst_22948);
return statearr_23129;
})();if(cljs.core.truth_(inst_22949))
{var statearr_23130_23193 = state_23057__$1;(statearr_23130_23193[(1)] = (13));
} else
{var statearr_23131_23194 = state_23057__$1;(statearr_23131_23194[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (18)))
{var inst_22982 = (state_23057[(2)]);var state_23057__$1 = state_23057;var statearr_23132_23195 = state_23057__$1;(statearr_23132_23195[(2)] = inst_22982);
(statearr_23132_23195[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (42)))
{var state_23057__$1 = state_23057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23057__$1,(45),dchan);
} else
{if((state_val_23058 === (37)))
{var inst_22929 = (state_23057[(10)]);var inst_23016 = (state_23057[(25)]);var inst_23025 = (state_23057[(23)]);var inst_23025__$1 = cljs.core.first.call(null,inst_23016);var inst_23026 = cljs.core.async.put_BANG_.call(null,inst_23025__$1,inst_22929,done);var state_23057__$1 = (function (){var statearr_23133 = state_23057;(statearr_23133[(23)] = inst_23025__$1);
return statearr_23133;
})();if(cljs.core.truth_(inst_23026))
{var statearr_23134_23196 = state_23057__$1;(statearr_23134_23196[(1)] = (39));
} else
{var statearr_23135_23197 = state_23057__$1;(statearr_23135_23197[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23058 === (8)))
{var inst_22940 = (state_23057[(15)]);var inst_22941 = (state_23057[(17)]);var inst_22943 = (inst_22941 < inst_22940);var inst_22944 = inst_22943;var state_23057__$1 = state_23057;if(cljs.core.truth_(inst_22944))
{var statearr_23136_23198 = state_23057__$1;(statearr_23136_23198[(1)] = (10));
} else
{var statearr_23137_23199 = state_23057__$1;(statearr_23137_23199[(1)] = (11));
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
});})(c__15989__auto___23145,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___23145,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23141[(0)] = state_machine__15975__auto__);
(statearr_23141[(1)] = (1));
return statearr_23141;
});
var state_machine__15975__auto____1 = (function (state_23057){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23057);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23142){if((e23142 instanceof Object))
{var ex__15978__auto__ = e23142;var statearr_23143_23200 = state_23057;(statearr_23143_23200[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23057);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23201 = state_23057;
state_23057 = G__23201;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23057){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23145,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_23144 = f__15990__auto__.call(null);(statearr_23144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23145);
return statearr_23144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23145,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23203 = {};return obj23203;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23204){var map__23209 = p__23204;var map__23209__$1 = ((cljs.core.seq_QMARK_.call(null,map__23209))?cljs.core.apply.call(null,cljs.core.hash_map,map__23209):map__23209);var opts = map__23209__$1;var statearr_23210_23213 = state;(statearr_23210_23213[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__23209,map__23209__$1,opts){
return (function (val){var statearr_23211_23214 = state;(statearr_23211_23214[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23209,map__23209__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23212_23215 = state;(statearr_23212_23215[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23204 = null;if (arguments.length > 3) {
  p__23204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23204);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23216){
var state = cljs.core.first(arglist__23216);
arglist__23216 = cljs.core.next(arglist__23216);
var cont_block = cljs.core.first(arglist__23216);
arglist__23216 = cljs.core.next(arglist__23216);
var ports = cljs.core.first(arglist__23216);
var p__23204 = cljs.core.rest(arglist__23216);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23204);
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
;var m = (function (){if(typeof cljs.core.async.t23336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23336 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23337){
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
this.meta23337 = meta23337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23336.cljs$lang$type = true;
cljs.core.async.t23336.cljs$lang$ctorStr = "cljs.core.async/t23336";
cljs.core.async.t23336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23338){var self__ = this;
var _23338__$1 = this;return self__.meta23337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23338,meta23337__$1){var self__ = this;
var _23338__$1 = this;return (new cljs.core.async.t23336(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23337){return (new cljs.core.async.t23336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23336(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___23455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23408){var state_val_23409 = (state_23408[(1)]);if((state_val_23409 === (7)))
{var inst_23352 = (state_23408[(7)]);var inst_23357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23352);var state_23408__$1 = state_23408;var statearr_23410_23456 = state_23408__$1;(statearr_23410_23456[(2)] = inst_23357);
(statearr_23410_23456[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (20)))
{var inst_23367 = (state_23408[(8)]);var state_23408__$1 = state_23408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23408__$1,(23),out,inst_23367);
} else
{if((state_val_23409 === (1)))
{var inst_23342 = (state_23408[(9)]);var inst_23342__$1 = calc_state.call(null);var inst_23343 = cljs.core.seq_QMARK_.call(null,inst_23342__$1);var state_23408__$1 = (function (){var statearr_23411 = state_23408;(statearr_23411[(9)] = inst_23342__$1);
return statearr_23411;
})();if(inst_23343)
{var statearr_23412_23457 = state_23408__$1;(statearr_23412_23457[(1)] = (2));
} else
{var statearr_23413_23458 = state_23408__$1;(statearr_23413_23458[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (24)))
{var inst_23360 = (state_23408[(10)]);var inst_23352 = inst_23360;var state_23408__$1 = (function (){var statearr_23414 = state_23408;(statearr_23414[(7)] = inst_23352);
return statearr_23414;
})();var statearr_23415_23459 = state_23408__$1;(statearr_23415_23459[(2)] = null);
(statearr_23415_23459[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (4)))
{var inst_23342 = (state_23408[(9)]);var inst_23348 = (state_23408[(2)]);var inst_23349 = cljs.core.get.call(null,inst_23348,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23350 = cljs.core.get.call(null,inst_23348,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23351 = cljs.core.get.call(null,inst_23348,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_23352 = inst_23342;var state_23408__$1 = (function (){var statearr_23416 = state_23408;(statearr_23416[(11)] = inst_23351);
(statearr_23416[(12)] = inst_23350);
(statearr_23416[(13)] = inst_23349);
(statearr_23416[(7)] = inst_23352);
return statearr_23416;
})();var statearr_23417_23460 = state_23408__$1;(statearr_23417_23460[(2)] = null);
(statearr_23417_23460[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (15)))
{var state_23408__$1 = state_23408;var statearr_23418_23461 = state_23408__$1;(statearr_23418_23461[(2)] = null);
(statearr_23418_23461[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (21)))
{var inst_23360 = (state_23408[(10)]);var inst_23352 = inst_23360;var state_23408__$1 = (function (){var statearr_23419 = state_23408;(statearr_23419[(7)] = inst_23352);
return statearr_23419;
})();var statearr_23420_23462 = state_23408__$1;(statearr_23420_23462[(2)] = null);
(statearr_23420_23462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (13)))
{var inst_23404 = (state_23408[(2)]);var state_23408__$1 = state_23408;var statearr_23421_23463 = state_23408__$1;(statearr_23421_23463[(2)] = inst_23404);
(statearr_23421_23463[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (22)))
{var inst_23402 = (state_23408[(2)]);var state_23408__$1 = state_23408;var statearr_23422_23464 = state_23408__$1;(statearr_23422_23464[(2)] = inst_23402);
(statearr_23422_23464[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (6)))
{var inst_23406 = (state_23408[(2)]);var state_23408__$1 = state_23408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23408__$1,inst_23406);
} else
{if((state_val_23409 === (25)))
{var state_23408__$1 = state_23408;var statearr_23423_23465 = state_23408__$1;(statearr_23423_23465[(2)] = null);
(statearr_23423_23465[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (17)))
{var inst_23382 = (state_23408[(14)]);var state_23408__$1 = state_23408;var statearr_23424_23466 = state_23408__$1;(statearr_23424_23466[(2)] = inst_23382);
(statearr_23424_23466[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (3)))
{var inst_23342 = (state_23408[(9)]);var state_23408__$1 = state_23408;var statearr_23425_23467 = state_23408__$1;(statearr_23425_23467[(2)] = inst_23342);
(statearr_23425_23467[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (12)))
{var inst_23363 = (state_23408[(15)]);var inst_23382 = (state_23408[(14)]);var inst_23368 = (state_23408[(16)]);var inst_23382__$1 = inst_23363.call(null,inst_23368);var state_23408__$1 = (function (){var statearr_23426 = state_23408;(statearr_23426[(14)] = inst_23382__$1);
return statearr_23426;
})();if(cljs.core.truth_(inst_23382__$1))
{var statearr_23427_23468 = state_23408__$1;(statearr_23427_23468[(1)] = (17));
} else
{var statearr_23428_23469 = state_23408__$1;(statearr_23428_23469[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (2)))
{var inst_23342 = (state_23408[(9)]);var inst_23345 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23342);var state_23408__$1 = state_23408;var statearr_23429_23470 = state_23408__$1;(statearr_23429_23470[(2)] = inst_23345);
(statearr_23429_23470[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (23)))
{var inst_23393 = (state_23408[(2)]);var state_23408__$1 = state_23408;if(cljs.core.truth_(inst_23393))
{var statearr_23430_23471 = state_23408__$1;(statearr_23430_23471[(1)] = (24));
} else
{var statearr_23431_23472 = state_23408__$1;(statearr_23431_23472[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (19)))
{var inst_23390 = (state_23408[(2)]);var state_23408__$1 = state_23408;if(cljs.core.truth_(inst_23390))
{var statearr_23432_23473 = state_23408__$1;(statearr_23432_23473[(1)] = (20));
} else
{var statearr_23433_23474 = state_23408__$1;(statearr_23433_23474[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (11)))
{var inst_23367 = (state_23408[(8)]);var inst_23373 = (inst_23367 == null);var state_23408__$1 = state_23408;if(cljs.core.truth_(inst_23373))
{var statearr_23434_23475 = state_23408__$1;(statearr_23434_23475[(1)] = (14));
} else
{var statearr_23435_23476 = state_23408__$1;(statearr_23435_23476[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (9)))
{var inst_23360 = (state_23408[(10)]);var inst_23360__$1 = (state_23408[(2)]);var inst_23361 = cljs.core.get.call(null,inst_23360__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23362 = cljs.core.get.call(null,inst_23360__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23363 = cljs.core.get.call(null,inst_23360__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_23408__$1 = (function (){var statearr_23436 = state_23408;(statearr_23436[(15)] = inst_23363);
(statearr_23436[(17)] = inst_23362);
(statearr_23436[(10)] = inst_23360__$1);
return statearr_23436;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_23408__$1,(10),inst_23361);
} else
{if((state_val_23409 === (5)))
{var inst_23352 = (state_23408[(7)]);var inst_23355 = cljs.core.seq_QMARK_.call(null,inst_23352);var state_23408__$1 = state_23408;if(inst_23355)
{var statearr_23437_23477 = state_23408__$1;(statearr_23437_23477[(1)] = (7));
} else
{var statearr_23438_23478 = state_23408__$1;(statearr_23438_23478[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (14)))
{var inst_23368 = (state_23408[(16)]);var inst_23375 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23368);var state_23408__$1 = state_23408;var statearr_23439_23479 = state_23408__$1;(statearr_23439_23479[(2)] = inst_23375);
(statearr_23439_23479[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (26)))
{var inst_23398 = (state_23408[(2)]);var state_23408__$1 = state_23408;var statearr_23440_23480 = state_23408__$1;(statearr_23440_23480[(2)] = inst_23398);
(statearr_23440_23480[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (16)))
{var inst_23378 = (state_23408[(2)]);var inst_23379 = calc_state.call(null);var inst_23352 = inst_23379;var state_23408__$1 = (function (){var statearr_23441 = state_23408;(statearr_23441[(18)] = inst_23378);
(statearr_23441[(7)] = inst_23352);
return statearr_23441;
})();var statearr_23442_23481 = state_23408__$1;(statearr_23442_23481[(2)] = null);
(statearr_23442_23481[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (10)))
{var inst_23367 = (state_23408[(8)]);var inst_23368 = (state_23408[(16)]);var inst_23366 = (state_23408[(2)]);var inst_23367__$1 = cljs.core.nth.call(null,inst_23366,(0),null);var inst_23368__$1 = cljs.core.nth.call(null,inst_23366,(1),null);var inst_23369 = (inst_23367__$1 == null);var inst_23370 = cljs.core._EQ_.call(null,inst_23368__$1,change);var inst_23371 = (inst_23369) || (inst_23370);var state_23408__$1 = (function (){var statearr_23443 = state_23408;(statearr_23443[(8)] = inst_23367__$1);
(statearr_23443[(16)] = inst_23368__$1);
return statearr_23443;
})();if(cljs.core.truth_(inst_23371))
{var statearr_23444_23482 = state_23408__$1;(statearr_23444_23482[(1)] = (11));
} else
{var statearr_23445_23483 = state_23408__$1;(statearr_23445_23483[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (18)))
{var inst_23363 = (state_23408[(15)]);var inst_23368 = (state_23408[(16)]);var inst_23362 = (state_23408[(17)]);var inst_23385 = cljs.core.empty_QMARK_.call(null,inst_23363);var inst_23386 = inst_23362.call(null,inst_23368);var inst_23387 = cljs.core.not.call(null,inst_23386);var inst_23388 = (inst_23385) && (inst_23387);var state_23408__$1 = state_23408;var statearr_23446_23484 = state_23408__$1;(statearr_23446_23484[(2)] = inst_23388);
(statearr_23446_23484[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23409 === (8)))
{var inst_23352 = (state_23408[(7)]);var state_23408__$1 = state_23408;var statearr_23447_23485 = state_23408__$1;(statearr_23447_23485[(2)] = inst_23352);
(statearr_23447_23485[(1)] = (9));
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
});})(c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23451[(0)] = state_machine__15975__auto__);
(statearr_23451[(1)] = (1));
return statearr_23451;
});
var state_machine__15975__auto____1 = (function (state_23408){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23408);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23452){if((e23452 instanceof Object))
{var ex__15978__auto__ = e23452;var statearr_23453_23486 = state_23408;(statearr_23453_23486[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23487 = state_23408;
state_23408 = G__23487;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23408){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_23454 = f__15990__auto__.call(null);(statearr_23454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23455);
return statearr_23454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj23489 = {};return obj23489;
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
return (function (p1__23490_SHARP_){if(cljs.core.truth_(p1__23490_SHARP_.call(null,topic)))
{return p1__23490_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23613 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23613 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23614){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23614 = meta23614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23613.cljs$lang$type = true;
cljs.core.async.t23613.cljs$lang$ctorStr = "cljs.core.async/t23613";
cljs.core.async.t23613.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23613");
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23615){var self__ = this;
var _23615__$1 = this;return self__.meta23614;
});})(mults,ensure_mult))
;
cljs.core.async.t23613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23615,meta23614__$1){var self__ = this;
var _23615__$1 = this;return (new cljs.core.async.t23613(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23614__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23613 = ((function (mults,ensure_mult){
return (function __GT_t23613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23614){return (new cljs.core.async.t23613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23614));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23613(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___23735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23735,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23735,mults,ensure_mult,p){
return (function (state_23687){var state_val_23688 = (state_23687[(1)]);if((state_val_23688 === (7)))
{var inst_23683 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23689_23736 = state_23687__$1;(statearr_23689_23736[(2)] = inst_23683);
(statearr_23689_23736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (20)))
{var state_23687__$1 = state_23687;var statearr_23690_23737 = state_23687__$1;(statearr_23690_23737[(2)] = null);
(statearr_23690_23737[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (1)))
{var state_23687__$1 = state_23687;var statearr_23691_23738 = state_23687__$1;(statearr_23691_23738[(2)] = null);
(statearr_23691_23738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (24)))
{var inst_23666 = (state_23687[(7)]);var inst_23675 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23666);var state_23687__$1 = state_23687;var statearr_23692_23739 = state_23687__$1;(statearr_23692_23739[(2)] = inst_23675);
(statearr_23692_23739[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (4)))
{var inst_23618 = (state_23687[(8)]);var inst_23618__$1 = (state_23687[(2)]);var inst_23619 = (inst_23618__$1 == null);var state_23687__$1 = (function (){var statearr_23693 = state_23687;(statearr_23693[(8)] = inst_23618__$1);
return statearr_23693;
})();if(cljs.core.truth_(inst_23619))
{var statearr_23694_23740 = state_23687__$1;(statearr_23694_23740[(1)] = (5));
} else
{var statearr_23695_23741 = state_23687__$1;(statearr_23695_23741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (15)))
{var inst_23660 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23696_23742 = state_23687__$1;(statearr_23696_23742[(2)] = inst_23660);
(statearr_23696_23742[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (21)))
{var inst_23680 = (state_23687[(2)]);var state_23687__$1 = (function (){var statearr_23697 = state_23687;(statearr_23697[(9)] = inst_23680);
return statearr_23697;
})();var statearr_23698_23743 = state_23687__$1;(statearr_23698_23743[(2)] = null);
(statearr_23698_23743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (13)))
{var inst_23642 = (state_23687[(10)]);var inst_23644 = cljs.core.chunked_seq_QMARK_.call(null,inst_23642);var state_23687__$1 = state_23687;if(inst_23644)
{var statearr_23699_23744 = state_23687__$1;(statearr_23699_23744[(1)] = (16));
} else
{var statearr_23700_23745 = state_23687__$1;(statearr_23700_23745[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (22)))
{var inst_23672 = (state_23687[(2)]);var state_23687__$1 = state_23687;if(cljs.core.truth_(inst_23672))
{var statearr_23701_23746 = state_23687__$1;(statearr_23701_23746[(1)] = (23));
} else
{var statearr_23702_23747 = state_23687__$1;(statearr_23702_23747[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (6)))
{var inst_23618 = (state_23687[(8)]);var inst_23668 = (state_23687[(11)]);var inst_23666 = (state_23687[(7)]);var inst_23666__$1 = topic_fn.call(null,inst_23618);var inst_23667 = cljs.core.deref.call(null,mults);var inst_23668__$1 = cljs.core.get.call(null,inst_23667,inst_23666__$1);var state_23687__$1 = (function (){var statearr_23703 = state_23687;(statearr_23703[(11)] = inst_23668__$1);
(statearr_23703[(7)] = inst_23666__$1);
return statearr_23703;
})();if(cljs.core.truth_(inst_23668__$1))
{var statearr_23704_23748 = state_23687__$1;(statearr_23704_23748[(1)] = (19));
} else
{var statearr_23705_23749 = state_23687__$1;(statearr_23705_23749[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (25)))
{var inst_23677 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23706_23750 = state_23687__$1;(statearr_23706_23750[(2)] = inst_23677);
(statearr_23706_23750[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (17)))
{var inst_23642 = (state_23687[(10)]);var inst_23651 = cljs.core.first.call(null,inst_23642);var inst_23652 = cljs.core.async.muxch_STAR_.call(null,inst_23651);var inst_23653 = cljs.core.async.close_BANG_.call(null,inst_23652);var inst_23654 = cljs.core.next.call(null,inst_23642);var inst_23628 = inst_23654;var inst_23629 = null;var inst_23630 = (0);var inst_23631 = (0);var state_23687__$1 = (function (){var statearr_23707 = state_23687;(statearr_23707[(12)] = inst_23630);
(statearr_23707[(13)] = inst_23628);
(statearr_23707[(14)] = inst_23653);
(statearr_23707[(15)] = inst_23631);
(statearr_23707[(16)] = inst_23629);
return statearr_23707;
})();var statearr_23708_23751 = state_23687__$1;(statearr_23708_23751[(2)] = null);
(statearr_23708_23751[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (3)))
{var inst_23685 = (state_23687[(2)]);var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23687__$1,inst_23685);
} else
{if((state_val_23688 === (12)))
{var inst_23662 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23709_23752 = state_23687__$1;(statearr_23709_23752[(2)] = inst_23662);
(statearr_23709_23752[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (2)))
{var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23687__$1,(4),ch);
} else
{if((state_val_23688 === (23)))
{var state_23687__$1 = state_23687;var statearr_23710_23753 = state_23687__$1;(statearr_23710_23753[(2)] = null);
(statearr_23710_23753[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (19)))
{var inst_23618 = (state_23687[(8)]);var inst_23668 = (state_23687[(11)]);var inst_23670 = cljs.core.async.muxch_STAR_.call(null,inst_23668);var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23687__$1,(22),inst_23670,inst_23618);
} else
{if((state_val_23688 === (11)))
{var inst_23628 = (state_23687[(13)]);var inst_23642 = (state_23687[(10)]);var inst_23642__$1 = cljs.core.seq.call(null,inst_23628);var state_23687__$1 = (function (){var statearr_23711 = state_23687;(statearr_23711[(10)] = inst_23642__$1);
return statearr_23711;
})();if(inst_23642__$1)
{var statearr_23712_23754 = state_23687__$1;(statearr_23712_23754[(1)] = (13));
} else
{var statearr_23713_23755 = state_23687__$1;(statearr_23713_23755[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (9)))
{var inst_23664 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23714_23756 = state_23687__$1;(statearr_23714_23756[(2)] = inst_23664);
(statearr_23714_23756[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (5)))
{var inst_23625 = cljs.core.deref.call(null,mults);var inst_23626 = cljs.core.vals.call(null,inst_23625);var inst_23627 = cljs.core.seq.call(null,inst_23626);var inst_23628 = inst_23627;var inst_23629 = null;var inst_23630 = (0);var inst_23631 = (0);var state_23687__$1 = (function (){var statearr_23715 = state_23687;(statearr_23715[(12)] = inst_23630);
(statearr_23715[(13)] = inst_23628);
(statearr_23715[(15)] = inst_23631);
(statearr_23715[(16)] = inst_23629);
return statearr_23715;
})();var statearr_23716_23757 = state_23687__$1;(statearr_23716_23757[(2)] = null);
(statearr_23716_23757[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (14)))
{var state_23687__$1 = state_23687;var statearr_23720_23758 = state_23687__$1;(statearr_23720_23758[(2)] = null);
(statearr_23720_23758[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (16)))
{var inst_23642 = (state_23687[(10)]);var inst_23646 = cljs.core.chunk_first.call(null,inst_23642);var inst_23647 = cljs.core.chunk_rest.call(null,inst_23642);var inst_23648 = cljs.core.count.call(null,inst_23646);var inst_23628 = inst_23647;var inst_23629 = inst_23646;var inst_23630 = inst_23648;var inst_23631 = (0);var state_23687__$1 = (function (){var statearr_23721 = state_23687;(statearr_23721[(12)] = inst_23630);
(statearr_23721[(13)] = inst_23628);
(statearr_23721[(15)] = inst_23631);
(statearr_23721[(16)] = inst_23629);
return statearr_23721;
})();var statearr_23722_23759 = state_23687__$1;(statearr_23722_23759[(2)] = null);
(statearr_23722_23759[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (10)))
{var inst_23630 = (state_23687[(12)]);var inst_23628 = (state_23687[(13)]);var inst_23631 = (state_23687[(15)]);var inst_23629 = (state_23687[(16)]);var inst_23636 = cljs.core._nth.call(null,inst_23629,inst_23631);var inst_23637 = cljs.core.async.muxch_STAR_.call(null,inst_23636);var inst_23638 = cljs.core.async.close_BANG_.call(null,inst_23637);var inst_23639 = (inst_23631 + (1));var tmp23717 = inst_23630;var tmp23718 = inst_23628;var tmp23719 = inst_23629;var inst_23628__$1 = tmp23718;var inst_23629__$1 = tmp23719;var inst_23630__$1 = tmp23717;var inst_23631__$1 = inst_23639;var state_23687__$1 = (function (){var statearr_23723 = state_23687;(statearr_23723[(17)] = inst_23638);
(statearr_23723[(12)] = inst_23630__$1);
(statearr_23723[(13)] = inst_23628__$1);
(statearr_23723[(15)] = inst_23631__$1);
(statearr_23723[(16)] = inst_23629__$1);
return statearr_23723;
})();var statearr_23724_23760 = state_23687__$1;(statearr_23724_23760[(2)] = null);
(statearr_23724_23760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (18)))
{var inst_23657 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23725_23761 = state_23687__$1;(statearr_23725_23761[(2)] = inst_23657);
(statearr_23725_23761[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23688 === (8)))
{var inst_23630 = (state_23687[(12)]);var inst_23631 = (state_23687[(15)]);var inst_23633 = (inst_23631 < inst_23630);var inst_23634 = inst_23633;var state_23687__$1 = state_23687;if(cljs.core.truth_(inst_23634))
{var statearr_23726_23762 = state_23687__$1;(statearr_23726_23762[(1)] = (10));
} else
{var statearr_23727_23763 = state_23687__$1;(statearr_23727_23763[(1)] = (11));
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
});})(c__15989__auto___23735,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___23735,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23731[(0)] = state_machine__15975__auto__);
(statearr_23731[(1)] = (1));
return statearr_23731;
});
var state_machine__15975__auto____1 = (function (state_23687){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23687);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23732){if((e23732 instanceof Object))
{var ex__15978__auto__ = e23732;var statearr_23733_23764 = state_23687;(statearr_23733_23764[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23732;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23765 = state_23687;
state_23687 = G__23765;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23687){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23735,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_23734 = f__15990__auto__.call(null);(statearr_23734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23735);
return statearr_23734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23735,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___23902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23872){var state_val_23873 = (state_23872[(1)]);if((state_val_23873 === (7)))
{var state_23872__$1 = state_23872;var statearr_23874_23903 = state_23872__$1;(statearr_23874_23903[(2)] = null);
(statearr_23874_23903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (1)))
{var state_23872__$1 = state_23872;var statearr_23875_23904 = state_23872__$1;(statearr_23875_23904[(2)] = null);
(statearr_23875_23904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (4)))
{var inst_23836 = (state_23872[(7)]);var inst_23838 = (inst_23836 < cnt);var state_23872__$1 = state_23872;if(cljs.core.truth_(inst_23838))
{var statearr_23876_23905 = state_23872__$1;(statearr_23876_23905[(1)] = (6));
} else
{var statearr_23877_23906 = state_23872__$1;(statearr_23877_23906[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (15)))
{var inst_23868 = (state_23872[(2)]);var state_23872__$1 = state_23872;var statearr_23878_23907 = state_23872__$1;(statearr_23878_23907[(2)] = inst_23868);
(statearr_23878_23907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (13)))
{var inst_23861 = cljs.core.async.close_BANG_.call(null,out);var state_23872__$1 = state_23872;var statearr_23879_23908 = state_23872__$1;(statearr_23879_23908[(2)] = inst_23861);
(statearr_23879_23908[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (6)))
{var state_23872__$1 = state_23872;var statearr_23880_23909 = state_23872__$1;(statearr_23880_23909[(2)] = null);
(statearr_23880_23909[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (3)))
{var inst_23870 = (state_23872[(2)]);var state_23872__$1 = state_23872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23872__$1,inst_23870);
} else
{if((state_val_23873 === (12)))
{var inst_23858 = (state_23872[(8)]);var inst_23858__$1 = (state_23872[(2)]);var inst_23859 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23858__$1);var state_23872__$1 = (function (){var statearr_23881 = state_23872;(statearr_23881[(8)] = inst_23858__$1);
return statearr_23881;
})();if(cljs.core.truth_(inst_23859))
{var statearr_23882_23910 = state_23872__$1;(statearr_23882_23910[(1)] = (13));
} else
{var statearr_23883_23911 = state_23872__$1;(statearr_23883_23911[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (2)))
{var inst_23835 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23836 = (0);var state_23872__$1 = (function (){var statearr_23884 = state_23872;(statearr_23884[(7)] = inst_23836);
(statearr_23884[(9)] = inst_23835);
return statearr_23884;
})();var statearr_23885_23912 = state_23872__$1;(statearr_23885_23912[(2)] = null);
(statearr_23885_23912[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (11)))
{var inst_23836 = (state_23872[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23872,(10),Object,null,(9));var inst_23845 = chs__$1.call(null,inst_23836);var inst_23846 = done.call(null,inst_23836);var inst_23847 = cljs.core.async.take_BANG_.call(null,inst_23845,inst_23846);var state_23872__$1 = state_23872;var statearr_23886_23913 = state_23872__$1;(statearr_23886_23913[(2)] = inst_23847);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (9)))
{var inst_23836 = (state_23872[(7)]);var inst_23849 = (state_23872[(2)]);var inst_23850 = (inst_23836 + (1));var inst_23836__$1 = inst_23850;var state_23872__$1 = (function (){var statearr_23887 = state_23872;(statearr_23887[(7)] = inst_23836__$1);
(statearr_23887[(10)] = inst_23849);
return statearr_23887;
})();var statearr_23888_23914 = state_23872__$1;(statearr_23888_23914[(2)] = null);
(statearr_23888_23914[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (5)))
{var inst_23856 = (state_23872[(2)]);var state_23872__$1 = (function (){var statearr_23889 = state_23872;(statearr_23889[(11)] = inst_23856);
return statearr_23889;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23872__$1,(12),dchan);
} else
{if((state_val_23873 === (14)))
{var inst_23858 = (state_23872[(8)]);var inst_23863 = cljs.core.apply.call(null,f,inst_23858);var state_23872__$1 = state_23872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23872__$1,(16),out,inst_23863);
} else
{if((state_val_23873 === (16)))
{var inst_23865 = (state_23872[(2)]);var state_23872__$1 = (function (){var statearr_23890 = state_23872;(statearr_23890[(12)] = inst_23865);
return statearr_23890;
})();var statearr_23891_23915 = state_23872__$1;(statearr_23891_23915[(2)] = null);
(statearr_23891_23915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (10)))
{var inst_23840 = (state_23872[(2)]);var inst_23841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23872__$1 = (function (){var statearr_23892 = state_23872;(statearr_23892[(13)] = inst_23840);
return statearr_23892;
})();var statearr_23893_23916 = state_23872__$1;(statearr_23893_23916[(2)] = inst_23841);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23873 === (8)))
{var inst_23854 = (state_23872[(2)]);var state_23872__$1 = state_23872;var statearr_23894_23917 = state_23872__$1;(statearr_23894_23917[(2)] = inst_23854);
(statearr_23894_23917[(1)] = (5));
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
});})(c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23898[(0)] = state_machine__15975__auto__);
(statearr_23898[(1)] = (1));
return statearr_23898;
});
var state_machine__15975__auto____1 = (function (state_23872){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23872);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23899){if((e23899 instanceof Object))
{var ex__15978__auto__ = e23899;var statearr_23900_23918 = state_23872;(statearr_23900_23918[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23919 = state_23872;
state_23872 = G__23919;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23872){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_23901 = f__15990__auto__.call(null);(statearr_23901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23902);
return statearr_23901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23902,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24027,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24027,out){
return (function (state_24003){var state_val_24004 = (state_24003[(1)]);if((state_val_24004 === (7)))
{var inst_23982 = (state_24003[(7)]);var inst_23983 = (state_24003[(8)]);var inst_23982__$1 = (state_24003[(2)]);var inst_23983__$1 = cljs.core.nth.call(null,inst_23982__$1,(0),null);var inst_23984 = cljs.core.nth.call(null,inst_23982__$1,(1),null);var inst_23985 = (inst_23983__$1 == null);var state_24003__$1 = (function (){var statearr_24005 = state_24003;(statearr_24005[(7)] = inst_23982__$1);
(statearr_24005[(9)] = inst_23984);
(statearr_24005[(8)] = inst_23983__$1);
return statearr_24005;
})();if(cljs.core.truth_(inst_23985))
{var statearr_24006_24028 = state_24003__$1;(statearr_24006_24028[(1)] = (8));
} else
{var statearr_24007_24029 = state_24003__$1;(statearr_24007_24029[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (1)))
{var inst_23974 = cljs.core.vec.call(null,chs);var inst_23975 = inst_23974;var state_24003__$1 = (function (){var statearr_24008 = state_24003;(statearr_24008[(10)] = inst_23975);
return statearr_24008;
})();var statearr_24009_24030 = state_24003__$1;(statearr_24009_24030[(2)] = null);
(statearr_24009_24030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (4)))
{var inst_23975 = (state_24003[(10)]);var state_24003__$1 = state_24003;return cljs.core.async.ioc_alts_BANG_.call(null,state_24003__$1,(7),inst_23975);
} else
{if((state_val_24004 === (6)))
{var inst_23999 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24010_24031 = state_24003__$1;(statearr_24010_24031[(2)] = inst_23999);
(statearr_24010_24031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (3)))
{var inst_24001 = (state_24003[(2)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else
{if((state_val_24004 === (2)))
{var inst_23975 = (state_24003[(10)]);var inst_23977 = cljs.core.count.call(null,inst_23975);var inst_23978 = (inst_23977 > (0));var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23978))
{var statearr_24012_24032 = state_24003__$1;(statearr_24012_24032[(1)] = (4));
} else
{var statearr_24013_24033 = state_24003__$1;(statearr_24013_24033[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (11)))
{var inst_23975 = (state_24003[(10)]);var inst_23992 = (state_24003[(2)]);var tmp24011 = inst_23975;var inst_23975__$1 = tmp24011;var state_24003__$1 = (function (){var statearr_24014 = state_24003;(statearr_24014[(10)] = inst_23975__$1);
(statearr_24014[(11)] = inst_23992);
return statearr_24014;
})();var statearr_24015_24034 = state_24003__$1;(statearr_24015_24034[(2)] = null);
(statearr_24015_24034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (9)))
{var inst_23983 = (state_24003[(8)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24003__$1,(11),out,inst_23983);
} else
{if((state_val_24004 === (5)))
{var inst_23997 = cljs.core.async.close_BANG_.call(null,out);var state_24003__$1 = state_24003;var statearr_24016_24035 = state_24003__$1;(statearr_24016_24035[(2)] = inst_23997);
(statearr_24016_24035[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (10)))
{var inst_23995 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24017_24036 = state_24003__$1;(statearr_24017_24036[(2)] = inst_23995);
(statearr_24017_24036[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24004 === (8)))
{var inst_23982 = (state_24003[(7)]);var inst_23975 = (state_24003[(10)]);var inst_23984 = (state_24003[(9)]);var inst_23983 = (state_24003[(8)]);var inst_23987 = (function (){var c = inst_23984;var v = inst_23983;var vec__23980 = inst_23982;var cs = inst_23975;return ((function (c,v,vec__23980,cs,inst_23982,inst_23975,inst_23984,inst_23983,state_val_24004,c__15989__auto___24027,out){
return (function (p1__23920_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23920_SHARP_);
});
;})(c,v,vec__23980,cs,inst_23982,inst_23975,inst_23984,inst_23983,state_val_24004,c__15989__auto___24027,out))
})();var inst_23988 = cljs.core.filterv.call(null,inst_23987,inst_23975);var inst_23975__$1 = inst_23988;var state_24003__$1 = (function (){var statearr_24018 = state_24003;(statearr_24018[(10)] = inst_23975__$1);
return statearr_24018;
})();var statearr_24019_24037 = state_24003__$1;(statearr_24019_24037[(2)] = null);
(statearr_24019_24037[(1)] = (2));
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
});})(c__15989__auto___24027,out))
;return ((function (switch__15974__auto__,c__15989__auto___24027,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24023 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24023[(0)] = state_machine__15975__auto__);
(statearr_24023[(1)] = (1));
return statearr_24023;
});
var state_machine__15975__auto____1 = (function (state_24003){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24003);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object))
{var ex__15978__auto__ = e24024;var statearr_24025_24038 = state_24003;(statearr_24025_24038[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24039 = state_24003;
state_24003 = G__24039;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24027,out))
})();var state__15991__auto__ = (function (){var statearr_24026 = f__15990__auto__.call(null);(statearr_24026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24027);
return statearr_24026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24027,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24132,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24132,out){
return (function (state_24109){var state_val_24110 = (state_24109[(1)]);if((state_val_24110 === (7)))
{var inst_24091 = (state_24109[(7)]);var inst_24091__$1 = (state_24109[(2)]);var inst_24092 = (inst_24091__$1 == null);var inst_24093 = cljs.core.not.call(null,inst_24092);var state_24109__$1 = (function (){var statearr_24111 = state_24109;(statearr_24111[(7)] = inst_24091__$1);
return statearr_24111;
})();if(inst_24093)
{var statearr_24112_24133 = state_24109__$1;(statearr_24112_24133[(1)] = (8));
} else
{var statearr_24113_24134 = state_24109__$1;(statearr_24113_24134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (1)))
{var inst_24086 = (0);var state_24109__$1 = (function (){var statearr_24114 = state_24109;(statearr_24114[(8)] = inst_24086);
return statearr_24114;
})();var statearr_24115_24135 = state_24109__$1;(statearr_24115_24135[(2)] = null);
(statearr_24115_24135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (4)))
{var state_24109__$1 = state_24109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24109__$1,(7),ch);
} else
{if((state_val_24110 === (6)))
{var inst_24104 = (state_24109[(2)]);var state_24109__$1 = state_24109;var statearr_24116_24136 = state_24109__$1;(statearr_24116_24136[(2)] = inst_24104);
(statearr_24116_24136[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (3)))
{var inst_24106 = (state_24109[(2)]);var inst_24107 = cljs.core.async.close_BANG_.call(null,out);var state_24109__$1 = (function (){var statearr_24117 = state_24109;(statearr_24117[(9)] = inst_24106);
return statearr_24117;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24109__$1,inst_24107);
} else
{if((state_val_24110 === (2)))
{var inst_24086 = (state_24109[(8)]);var inst_24088 = (inst_24086 < n);var state_24109__$1 = state_24109;if(cljs.core.truth_(inst_24088))
{var statearr_24118_24137 = state_24109__$1;(statearr_24118_24137[(1)] = (4));
} else
{var statearr_24119_24138 = state_24109__$1;(statearr_24119_24138[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (11)))
{var inst_24086 = (state_24109[(8)]);var inst_24096 = (state_24109[(2)]);var inst_24097 = (inst_24086 + (1));var inst_24086__$1 = inst_24097;var state_24109__$1 = (function (){var statearr_24120 = state_24109;(statearr_24120[(10)] = inst_24096);
(statearr_24120[(8)] = inst_24086__$1);
return statearr_24120;
})();var statearr_24121_24139 = state_24109__$1;(statearr_24121_24139[(2)] = null);
(statearr_24121_24139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (9)))
{var state_24109__$1 = state_24109;var statearr_24122_24140 = state_24109__$1;(statearr_24122_24140[(2)] = null);
(statearr_24122_24140[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (5)))
{var state_24109__$1 = state_24109;var statearr_24123_24141 = state_24109__$1;(statearr_24123_24141[(2)] = null);
(statearr_24123_24141[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (10)))
{var inst_24101 = (state_24109[(2)]);var state_24109__$1 = state_24109;var statearr_24124_24142 = state_24109__$1;(statearr_24124_24142[(2)] = inst_24101);
(statearr_24124_24142[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24110 === (8)))
{var inst_24091 = (state_24109[(7)]);var state_24109__$1 = state_24109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24109__$1,(11),out,inst_24091);
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
});})(c__15989__auto___24132,out))
;return ((function (switch__15974__auto__,c__15989__auto___24132,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24128 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24128[(0)] = state_machine__15975__auto__);
(statearr_24128[(1)] = (1));
return statearr_24128;
});
var state_machine__15975__auto____1 = (function (state_24109){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24109);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object))
{var ex__15978__auto__ = e24129;var statearr_24130_24143 = state_24109;(statearr_24130_24143[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24144 = state_24109;
state_24109 = G__24144;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24109){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24132,out))
})();var state__15991__auto__ = (function (){var statearr_24131 = f__15990__auto__.call(null);(statearr_24131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24132);
return statearr_24131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24132,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24152 = (function (ch,f,map_LT_,meta24153){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24153 = meta24153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24152.cljs$lang$type = true;
cljs.core.async.t24152.cljs$lang$ctorStr = "cljs.core.async/t24152";
cljs.core.async.t24152.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24152");
});
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24155 = (function (fn1,_,meta24153,ch,f,map_LT_,meta24156){
this.fn1 = fn1;
this._ = _;
this.meta24153 = meta24153;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24156 = meta24156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24155.cljs$lang$type = true;
cljs.core.async.t24155.cljs$lang$ctorStr = "cljs.core.async/t24155";
cljs.core.async.t24155.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24155");
});})(___$1))
;
cljs.core.async.t24155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24145_SHARP_){return f1.call(null,(((p1__24145_SHARP_ == null))?null:self__.f.call(null,p1__24145_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24157){var self__ = this;
var _24157__$1 = this;return self__.meta24156;
});})(___$1))
;
cljs.core.async.t24155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24157,meta24156__$1){var self__ = this;
var _24157__$1 = this;return (new cljs.core.async.t24155(self__.fn1,self__._,self__.meta24153,self__.ch,self__.f,self__.map_LT_,meta24156__$1));
});})(___$1))
;
cljs.core.async.__GT_t24155 = ((function (___$1){
return (function __GT_t24155(fn1__$1,___$2,meta24153__$1,ch__$2,f__$2,map_LT___$2,meta24156){return (new cljs.core.async.t24155(fn1__$1,___$2,meta24153__$1,ch__$2,f__$2,map_LT___$2,meta24156));
});})(___$1))
;
}
return (new cljs.core.async.t24155(fn1,___$1,self__.meta24153,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24154){var self__ = this;
var _24154__$1 = this;return self__.meta24153;
});
cljs.core.async.t24152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24154,meta24153__$1){var self__ = this;
var _24154__$1 = this;return (new cljs.core.async.t24152(self__.ch,self__.f,self__.map_LT_,meta24153__$1));
});
cljs.core.async.__GT_t24152 = (function __GT_t24152(ch__$1,f__$1,map_LT___$1,meta24153){return (new cljs.core.async.t24152(ch__$1,f__$1,map_LT___$1,meta24153));
});
}
return (new cljs.core.async.t24152(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24161 = (function (ch,f,map_GT_,meta24162){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24162 = meta24162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24161.cljs$lang$type = true;
cljs.core.async.t24161.cljs$lang$ctorStr = "cljs.core.async/t24161";
cljs.core.async.t24161.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24161");
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24163){var self__ = this;
var _24163__$1 = this;return self__.meta24162;
});
cljs.core.async.t24161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24163,meta24162__$1){var self__ = this;
var _24163__$1 = this;return (new cljs.core.async.t24161(self__.ch,self__.f,self__.map_GT_,meta24162__$1));
});
cljs.core.async.__GT_t24161 = (function __GT_t24161(ch__$1,f__$1,map_GT___$1,meta24162){return (new cljs.core.async.t24161(ch__$1,f__$1,map_GT___$1,meta24162));
});
}
return (new cljs.core.async.t24161(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24167 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24167 = (function (ch,p,filter_GT_,meta24168){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24168 = meta24168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24167.cljs$lang$type = true;
cljs.core.async.t24167.cljs$lang$ctorStr = "cljs.core.async/t24167";
cljs.core.async.t24167.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24167");
});
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24169){var self__ = this;
var _24169__$1 = this;return self__.meta24168;
});
cljs.core.async.t24167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24169,meta24168__$1){var self__ = this;
var _24169__$1 = this;return (new cljs.core.async.t24167(self__.ch,self__.p,self__.filter_GT_,meta24168__$1));
});
cljs.core.async.__GT_t24167 = (function __GT_t24167(ch__$1,p__$1,filter_GT___$1,meta24168){return (new cljs.core.async.t24167(ch__$1,p__$1,filter_GT___$1,meta24168));
});
}
return (new cljs.core.async.t24167(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24252,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24252,out){
return (function (state_24231){var state_val_24232 = (state_24231[(1)]);if((state_val_24232 === (7)))
{var inst_24227 = (state_24231[(2)]);var state_24231__$1 = state_24231;var statearr_24233_24253 = state_24231__$1;(statearr_24233_24253[(2)] = inst_24227);
(statearr_24233_24253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (1)))
{var state_24231__$1 = state_24231;var statearr_24234_24254 = state_24231__$1;(statearr_24234_24254[(2)] = null);
(statearr_24234_24254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (4)))
{var inst_24213 = (state_24231[(7)]);var inst_24213__$1 = (state_24231[(2)]);var inst_24214 = (inst_24213__$1 == null);var state_24231__$1 = (function (){var statearr_24235 = state_24231;(statearr_24235[(7)] = inst_24213__$1);
return statearr_24235;
})();if(cljs.core.truth_(inst_24214))
{var statearr_24236_24255 = state_24231__$1;(statearr_24236_24255[(1)] = (5));
} else
{var statearr_24237_24256 = state_24231__$1;(statearr_24237_24256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (6)))
{var inst_24213 = (state_24231[(7)]);var inst_24218 = p.call(null,inst_24213);var state_24231__$1 = state_24231;if(cljs.core.truth_(inst_24218))
{var statearr_24238_24257 = state_24231__$1;(statearr_24238_24257[(1)] = (8));
} else
{var statearr_24239_24258 = state_24231__$1;(statearr_24239_24258[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (3)))
{var inst_24229 = (state_24231[(2)]);var state_24231__$1 = state_24231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24231__$1,inst_24229);
} else
{if((state_val_24232 === (2)))
{var state_24231__$1 = state_24231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24231__$1,(4),ch);
} else
{if((state_val_24232 === (11)))
{var inst_24221 = (state_24231[(2)]);var state_24231__$1 = state_24231;var statearr_24240_24259 = state_24231__$1;(statearr_24240_24259[(2)] = inst_24221);
(statearr_24240_24259[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (9)))
{var state_24231__$1 = state_24231;var statearr_24241_24260 = state_24231__$1;(statearr_24241_24260[(2)] = null);
(statearr_24241_24260[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (5)))
{var inst_24216 = cljs.core.async.close_BANG_.call(null,out);var state_24231__$1 = state_24231;var statearr_24242_24261 = state_24231__$1;(statearr_24242_24261[(2)] = inst_24216);
(statearr_24242_24261[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (10)))
{var inst_24224 = (state_24231[(2)]);var state_24231__$1 = (function (){var statearr_24243 = state_24231;(statearr_24243[(8)] = inst_24224);
return statearr_24243;
})();var statearr_24244_24262 = state_24231__$1;(statearr_24244_24262[(2)] = null);
(statearr_24244_24262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (8)))
{var inst_24213 = (state_24231[(7)]);var state_24231__$1 = state_24231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24231__$1,(11),out,inst_24213);
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
});})(c__15989__auto___24252,out))
;return ((function (switch__15974__auto__,c__15989__auto___24252,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24248 = [null,null,null,null,null,null,null,null,null];(statearr_24248[(0)] = state_machine__15975__auto__);
(statearr_24248[(1)] = (1));
return statearr_24248;
});
var state_machine__15975__auto____1 = (function (state_24231){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24231);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24249){if((e24249 instanceof Object))
{var ex__15978__auto__ = e24249;var statearr_24250_24263 = state_24231;(statearr_24250_24263[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24264 = state_24231;
state_24231 = G__24264;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24231){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24252,out))
})();var state__15991__auto__ = (function (){var statearr_24251 = f__15990__auto__.call(null);(statearr_24251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24252);
return statearr_24251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24252,out))
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
return (function (state_24430){var state_val_24431 = (state_24430[(1)]);if((state_val_24431 === (7)))
{var inst_24426 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24432_24473 = state_24430__$1;(statearr_24432_24473[(2)] = inst_24426);
(statearr_24432_24473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (20)))
{var inst_24396 = (state_24430[(7)]);var inst_24407 = (state_24430[(2)]);var inst_24408 = cljs.core.next.call(null,inst_24396);var inst_24382 = inst_24408;var inst_24383 = null;var inst_24384 = (0);var inst_24385 = (0);var state_24430__$1 = (function (){var statearr_24433 = state_24430;(statearr_24433[(8)] = inst_24384);
(statearr_24433[(9)] = inst_24407);
(statearr_24433[(10)] = inst_24382);
(statearr_24433[(11)] = inst_24385);
(statearr_24433[(12)] = inst_24383);
return statearr_24433;
})();var statearr_24434_24474 = state_24430__$1;(statearr_24434_24474[(2)] = null);
(statearr_24434_24474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (1)))
{var state_24430__$1 = state_24430;var statearr_24435_24475 = state_24430__$1;(statearr_24435_24475[(2)] = null);
(statearr_24435_24475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (4)))
{var inst_24371 = (state_24430[(13)]);var inst_24371__$1 = (state_24430[(2)]);var inst_24372 = (inst_24371__$1 == null);var state_24430__$1 = (function (){var statearr_24436 = state_24430;(statearr_24436[(13)] = inst_24371__$1);
return statearr_24436;
})();if(cljs.core.truth_(inst_24372))
{var statearr_24437_24476 = state_24430__$1;(statearr_24437_24476[(1)] = (5));
} else
{var statearr_24438_24477 = state_24430__$1;(statearr_24438_24477[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (15)))
{var state_24430__$1 = state_24430;var statearr_24442_24478 = state_24430__$1;(statearr_24442_24478[(2)] = null);
(statearr_24442_24478[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (21)))
{var state_24430__$1 = state_24430;var statearr_24443_24479 = state_24430__$1;(statearr_24443_24479[(2)] = null);
(statearr_24443_24479[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (13)))
{var inst_24384 = (state_24430[(8)]);var inst_24382 = (state_24430[(10)]);var inst_24385 = (state_24430[(11)]);var inst_24383 = (state_24430[(12)]);var inst_24392 = (state_24430[(2)]);var inst_24393 = (inst_24385 + (1));var tmp24439 = inst_24384;var tmp24440 = inst_24382;var tmp24441 = inst_24383;var inst_24382__$1 = tmp24440;var inst_24383__$1 = tmp24441;var inst_24384__$1 = tmp24439;var inst_24385__$1 = inst_24393;var state_24430__$1 = (function (){var statearr_24444 = state_24430;(statearr_24444[(8)] = inst_24384__$1);
(statearr_24444[(14)] = inst_24392);
(statearr_24444[(10)] = inst_24382__$1);
(statearr_24444[(11)] = inst_24385__$1);
(statearr_24444[(12)] = inst_24383__$1);
return statearr_24444;
})();var statearr_24445_24480 = state_24430__$1;(statearr_24445_24480[(2)] = null);
(statearr_24445_24480[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (22)))
{var state_24430__$1 = state_24430;var statearr_24446_24481 = state_24430__$1;(statearr_24446_24481[(2)] = null);
(statearr_24446_24481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (6)))
{var inst_24371 = (state_24430[(13)]);var inst_24380 = f.call(null,inst_24371);var inst_24381 = cljs.core.seq.call(null,inst_24380);var inst_24382 = inst_24381;var inst_24383 = null;var inst_24384 = (0);var inst_24385 = (0);var state_24430__$1 = (function (){var statearr_24447 = state_24430;(statearr_24447[(8)] = inst_24384);
(statearr_24447[(10)] = inst_24382);
(statearr_24447[(11)] = inst_24385);
(statearr_24447[(12)] = inst_24383);
return statearr_24447;
})();var statearr_24448_24482 = state_24430__$1;(statearr_24448_24482[(2)] = null);
(statearr_24448_24482[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (17)))
{var inst_24396 = (state_24430[(7)]);var inst_24400 = cljs.core.chunk_first.call(null,inst_24396);var inst_24401 = cljs.core.chunk_rest.call(null,inst_24396);var inst_24402 = cljs.core.count.call(null,inst_24400);var inst_24382 = inst_24401;var inst_24383 = inst_24400;var inst_24384 = inst_24402;var inst_24385 = (0);var state_24430__$1 = (function (){var statearr_24449 = state_24430;(statearr_24449[(8)] = inst_24384);
(statearr_24449[(10)] = inst_24382);
(statearr_24449[(11)] = inst_24385);
(statearr_24449[(12)] = inst_24383);
return statearr_24449;
})();var statearr_24450_24483 = state_24430__$1;(statearr_24450_24483[(2)] = null);
(statearr_24450_24483[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (3)))
{var inst_24428 = (state_24430[(2)]);var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24430__$1,inst_24428);
} else
{if((state_val_24431 === (12)))
{var inst_24416 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24451_24484 = state_24430__$1;(statearr_24451_24484[(2)] = inst_24416);
(statearr_24451_24484[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (2)))
{var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24430__$1,(4),in$);
} else
{if((state_val_24431 === (23)))
{var inst_24424 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24452_24485 = state_24430__$1;(statearr_24452_24485[(2)] = inst_24424);
(statearr_24452_24485[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (19)))
{var inst_24411 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24453_24486 = state_24430__$1;(statearr_24453_24486[(2)] = inst_24411);
(statearr_24453_24486[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (11)))
{var inst_24396 = (state_24430[(7)]);var inst_24382 = (state_24430[(10)]);var inst_24396__$1 = cljs.core.seq.call(null,inst_24382);var state_24430__$1 = (function (){var statearr_24454 = state_24430;(statearr_24454[(7)] = inst_24396__$1);
return statearr_24454;
})();if(inst_24396__$1)
{var statearr_24455_24487 = state_24430__$1;(statearr_24455_24487[(1)] = (14));
} else
{var statearr_24456_24488 = state_24430__$1;(statearr_24456_24488[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (9)))
{var inst_24418 = (state_24430[(2)]);var inst_24419 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24430__$1 = (function (){var statearr_24457 = state_24430;(statearr_24457[(15)] = inst_24418);
return statearr_24457;
})();if(cljs.core.truth_(inst_24419))
{var statearr_24458_24489 = state_24430__$1;(statearr_24458_24489[(1)] = (21));
} else
{var statearr_24459_24490 = state_24430__$1;(statearr_24459_24490[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (5)))
{var inst_24374 = cljs.core.async.close_BANG_.call(null,out);var state_24430__$1 = state_24430;var statearr_24460_24491 = state_24430__$1;(statearr_24460_24491[(2)] = inst_24374);
(statearr_24460_24491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (14)))
{var inst_24396 = (state_24430[(7)]);var inst_24398 = cljs.core.chunked_seq_QMARK_.call(null,inst_24396);var state_24430__$1 = state_24430;if(inst_24398)
{var statearr_24461_24492 = state_24430__$1;(statearr_24461_24492[(1)] = (17));
} else
{var statearr_24462_24493 = state_24430__$1;(statearr_24462_24493[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (16)))
{var inst_24414 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24463_24494 = state_24430__$1;(statearr_24463_24494[(2)] = inst_24414);
(statearr_24463_24494[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24431 === (10)))
{var inst_24385 = (state_24430[(11)]);var inst_24383 = (state_24430[(12)]);var inst_24390 = cljs.core._nth.call(null,inst_24383,inst_24385);var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24430__$1,(13),out,inst_24390);
} else
{if((state_val_24431 === (18)))
{var inst_24396 = (state_24430[(7)]);var inst_24405 = cljs.core.first.call(null,inst_24396);var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24430__$1,(20),out,inst_24405);
} else
{if((state_val_24431 === (8)))
{var inst_24384 = (state_24430[(8)]);var inst_24385 = (state_24430[(11)]);var inst_24387 = (inst_24385 < inst_24384);var inst_24388 = inst_24387;var state_24430__$1 = state_24430;if(cljs.core.truth_(inst_24388))
{var statearr_24464_24495 = state_24430__$1;(statearr_24464_24495[(1)] = (10));
} else
{var statearr_24465_24496 = state_24430__$1;(statearr_24465_24496[(1)] = (11));
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
var state_machine__15975__auto____0 = (function (){var statearr_24469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24469[(0)] = state_machine__15975__auto__);
(statearr_24469[(1)] = (1));
return statearr_24469;
});
var state_machine__15975__auto____1 = (function (state_24430){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24430);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24470){if((e24470 instanceof Object))
{var ex__15978__auto__ = e24470;var statearr_24471_24497 = state_24430;(statearr_24471_24497[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24498 = state_24430;
state_24430 = G__24498;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24430){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_24472 = f__15990__auto__.call(null);(statearr_24472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_24472;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24595,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24595,out){
return (function (state_24570){var state_val_24571 = (state_24570[(1)]);if((state_val_24571 === (7)))
{var inst_24565 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24572_24596 = state_24570__$1;(statearr_24572_24596[(2)] = inst_24565);
(statearr_24572_24596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (1)))
{var inst_24547 = null;var state_24570__$1 = (function (){var statearr_24573 = state_24570;(statearr_24573[(7)] = inst_24547);
return statearr_24573;
})();var statearr_24574_24597 = state_24570__$1;(statearr_24574_24597[(2)] = null);
(statearr_24574_24597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (4)))
{var inst_24550 = (state_24570[(8)]);var inst_24550__$1 = (state_24570[(2)]);var inst_24551 = (inst_24550__$1 == null);var inst_24552 = cljs.core.not.call(null,inst_24551);var state_24570__$1 = (function (){var statearr_24575 = state_24570;(statearr_24575[(8)] = inst_24550__$1);
return statearr_24575;
})();if(inst_24552)
{var statearr_24576_24598 = state_24570__$1;(statearr_24576_24598[(1)] = (5));
} else
{var statearr_24577_24599 = state_24570__$1;(statearr_24577_24599[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (6)))
{var state_24570__$1 = state_24570;var statearr_24578_24600 = state_24570__$1;(statearr_24578_24600[(2)] = null);
(statearr_24578_24600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (3)))
{var inst_24567 = (state_24570[(2)]);var inst_24568 = cljs.core.async.close_BANG_.call(null,out);var state_24570__$1 = (function (){var statearr_24579 = state_24570;(statearr_24579[(9)] = inst_24567);
return statearr_24579;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24570__$1,inst_24568);
} else
{if((state_val_24571 === (2)))
{var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(4),ch);
} else
{if((state_val_24571 === (11)))
{var inst_24550 = (state_24570[(8)]);var inst_24559 = (state_24570[(2)]);var inst_24547 = inst_24550;var state_24570__$1 = (function (){var statearr_24580 = state_24570;(statearr_24580[(7)] = inst_24547);
(statearr_24580[(10)] = inst_24559);
return statearr_24580;
})();var statearr_24581_24601 = state_24570__$1;(statearr_24581_24601[(2)] = null);
(statearr_24581_24601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (9)))
{var inst_24550 = (state_24570[(8)]);var state_24570__$1 = state_24570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24570__$1,(11),out,inst_24550);
} else
{if((state_val_24571 === (5)))
{var inst_24547 = (state_24570[(7)]);var inst_24550 = (state_24570[(8)]);var inst_24554 = cljs.core._EQ_.call(null,inst_24550,inst_24547);var state_24570__$1 = state_24570;if(inst_24554)
{var statearr_24583_24602 = state_24570__$1;(statearr_24583_24602[(1)] = (8));
} else
{var statearr_24584_24603 = state_24570__$1;(statearr_24584_24603[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (10)))
{var inst_24562 = (state_24570[(2)]);var state_24570__$1 = state_24570;var statearr_24585_24604 = state_24570__$1;(statearr_24585_24604[(2)] = inst_24562);
(statearr_24585_24604[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24571 === (8)))
{var inst_24547 = (state_24570[(7)]);var tmp24582 = inst_24547;var inst_24547__$1 = tmp24582;var state_24570__$1 = (function (){var statearr_24586 = state_24570;(statearr_24586[(7)] = inst_24547__$1);
return statearr_24586;
})();var statearr_24587_24605 = state_24570__$1;(statearr_24587_24605[(2)] = null);
(statearr_24587_24605[(1)] = (2));
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
});})(c__15989__auto___24595,out))
;return ((function (switch__15974__auto__,c__15989__auto___24595,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24591 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24591[(0)] = state_machine__15975__auto__);
(statearr_24591[(1)] = (1));
return statearr_24591;
});
var state_machine__15975__auto____1 = (function (state_24570){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24570);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24592){if((e24592 instanceof Object))
{var ex__15978__auto__ = e24592;var statearr_24593_24606 = state_24570;(statearr_24593_24606[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24607 = state_24570;
state_24570 = G__24607;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24595,out))
})();var state__15991__auto__ = (function (){var statearr_24594 = f__15990__auto__.call(null);(statearr_24594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24595);
return statearr_24594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24595,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24742,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24742,out){
return (function (state_24712){var state_val_24713 = (state_24712[(1)]);if((state_val_24713 === (7)))
{var inst_24708 = (state_24712[(2)]);var state_24712__$1 = state_24712;var statearr_24714_24743 = state_24712__$1;(statearr_24714_24743[(2)] = inst_24708);
(statearr_24714_24743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (1)))
{var inst_24675 = (new Array(n));var inst_24676 = inst_24675;var inst_24677 = (0);var state_24712__$1 = (function (){var statearr_24715 = state_24712;(statearr_24715[(7)] = inst_24677);
(statearr_24715[(8)] = inst_24676);
return statearr_24715;
})();var statearr_24716_24744 = state_24712__$1;(statearr_24716_24744[(2)] = null);
(statearr_24716_24744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (4)))
{var inst_24680 = (state_24712[(9)]);var inst_24680__$1 = (state_24712[(2)]);var inst_24681 = (inst_24680__$1 == null);var inst_24682 = cljs.core.not.call(null,inst_24681);var state_24712__$1 = (function (){var statearr_24717 = state_24712;(statearr_24717[(9)] = inst_24680__$1);
return statearr_24717;
})();if(inst_24682)
{var statearr_24718_24745 = state_24712__$1;(statearr_24718_24745[(1)] = (5));
} else
{var statearr_24719_24746 = state_24712__$1;(statearr_24719_24746[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (15)))
{var inst_24702 = (state_24712[(2)]);var state_24712__$1 = state_24712;var statearr_24720_24747 = state_24712__$1;(statearr_24720_24747[(2)] = inst_24702);
(statearr_24720_24747[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (13)))
{var state_24712__$1 = state_24712;var statearr_24721_24748 = state_24712__$1;(statearr_24721_24748[(2)] = null);
(statearr_24721_24748[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (6)))
{var inst_24677 = (state_24712[(7)]);var inst_24698 = (inst_24677 > (0));var state_24712__$1 = state_24712;if(cljs.core.truth_(inst_24698))
{var statearr_24722_24749 = state_24712__$1;(statearr_24722_24749[(1)] = (12));
} else
{var statearr_24723_24750 = state_24712__$1;(statearr_24723_24750[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (3)))
{var inst_24710 = (state_24712[(2)]);var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else
{if((state_val_24713 === (12)))
{var inst_24676 = (state_24712[(8)]);var inst_24700 = cljs.core.vec.call(null,inst_24676);var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24712__$1,(15),out,inst_24700);
} else
{if((state_val_24713 === (2)))
{var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(4),ch);
} else
{if((state_val_24713 === (11)))
{var inst_24692 = (state_24712[(2)]);var inst_24693 = (new Array(n));var inst_24676 = inst_24693;var inst_24677 = (0);var state_24712__$1 = (function (){var statearr_24724 = state_24712;(statearr_24724[(7)] = inst_24677);
(statearr_24724[(10)] = inst_24692);
(statearr_24724[(8)] = inst_24676);
return statearr_24724;
})();var statearr_24725_24751 = state_24712__$1;(statearr_24725_24751[(2)] = null);
(statearr_24725_24751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (9)))
{var inst_24676 = (state_24712[(8)]);var inst_24690 = cljs.core.vec.call(null,inst_24676);var state_24712__$1 = state_24712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24712__$1,(11),out,inst_24690);
} else
{if((state_val_24713 === (5)))
{var inst_24677 = (state_24712[(7)]);var inst_24685 = (state_24712[(11)]);var inst_24680 = (state_24712[(9)]);var inst_24676 = (state_24712[(8)]);var inst_24684 = (inst_24676[inst_24677] = inst_24680);var inst_24685__$1 = (inst_24677 + (1));var inst_24686 = (inst_24685__$1 < n);var state_24712__$1 = (function (){var statearr_24726 = state_24712;(statearr_24726[(12)] = inst_24684);
(statearr_24726[(11)] = inst_24685__$1);
return statearr_24726;
})();if(cljs.core.truth_(inst_24686))
{var statearr_24727_24752 = state_24712__$1;(statearr_24727_24752[(1)] = (8));
} else
{var statearr_24728_24753 = state_24712__$1;(statearr_24728_24753[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (14)))
{var inst_24705 = (state_24712[(2)]);var inst_24706 = cljs.core.async.close_BANG_.call(null,out);var state_24712__$1 = (function (){var statearr_24730 = state_24712;(statearr_24730[(13)] = inst_24705);
return statearr_24730;
})();var statearr_24731_24754 = state_24712__$1;(statearr_24731_24754[(2)] = inst_24706);
(statearr_24731_24754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (10)))
{var inst_24696 = (state_24712[(2)]);var state_24712__$1 = state_24712;var statearr_24732_24755 = state_24712__$1;(statearr_24732_24755[(2)] = inst_24696);
(statearr_24732_24755[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24713 === (8)))
{var inst_24685 = (state_24712[(11)]);var inst_24676 = (state_24712[(8)]);var tmp24729 = inst_24676;var inst_24676__$1 = tmp24729;var inst_24677 = inst_24685;var state_24712__$1 = (function (){var statearr_24733 = state_24712;(statearr_24733[(7)] = inst_24677);
(statearr_24733[(8)] = inst_24676__$1);
return statearr_24733;
})();var statearr_24734_24756 = state_24712__$1;(statearr_24734_24756[(2)] = null);
(statearr_24734_24756[(1)] = (2));
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
});})(c__15989__auto___24742,out))
;return ((function (switch__15974__auto__,c__15989__auto___24742,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24738[(0)] = state_machine__15975__auto__);
(statearr_24738[(1)] = (1));
return statearr_24738;
});
var state_machine__15975__auto____1 = (function (state_24712){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24712);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24739){if((e24739 instanceof Object))
{var ex__15978__auto__ = e24739;var statearr_24740_24757 = state_24712;(statearr_24740_24757[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24758 = state_24712;
state_24712 = G__24758;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24742,out))
})();var state__15991__auto__ = (function (){var statearr_24741 = f__15990__auto__.call(null);(statearr_24741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24742);
return statearr_24741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24742,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24901 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24901,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24901,out){
return (function (state_24871){var state_val_24872 = (state_24871[(1)]);if((state_val_24872 === (7)))
{var inst_24867 = (state_24871[(2)]);var state_24871__$1 = state_24871;var statearr_24873_24902 = state_24871__$1;(statearr_24873_24902[(2)] = inst_24867);
(statearr_24873_24902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (1)))
{var inst_24830 = [];var inst_24831 = inst_24830;var inst_24832 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_24871__$1 = (function (){var statearr_24874 = state_24871;(statearr_24874[(7)] = inst_24831);
(statearr_24874[(8)] = inst_24832);
return statearr_24874;
})();var statearr_24875_24903 = state_24871__$1;(statearr_24875_24903[(2)] = null);
(statearr_24875_24903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (4)))
{var inst_24835 = (state_24871[(9)]);var inst_24835__$1 = (state_24871[(2)]);var inst_24836 = (inst_24835__$1 == null);var inst_24837 = cljs.core.not.call(null,inst_24836);var state_24871__$1 = (function (){var statearr_24876 = state_24871;(statearr_24876[(9)] = inst_24835__$1);
return statearr_24876;
})();if(inst_24837)
{var statearr_24877_24904 = state_24871__$1;(statearr_24877_24904[(1)] = (5));
} else
{var statearr_24878_24905 = state_24871__$1;(statearr_24878_24905[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (15)))
{var inst_24861 = (state_24871[(2)]);var state_24871__$1 = state_24871;var statearr_24879_24906 = state_24871__$1;(statearr_24879_24906[(2)] = inst_24861);
(statearr_24879_24906[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (13)))
{var state_24871__$1 = state_24871;var statearr_24880_24907 = state_24871__$1;(statearr_24880_24907[(2)] = null);
(statearr_24880_24907[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (6)))
{var inst_24831 = (state_24871[(7)]);var inst_24856 = inst_24831.length;var inst_24857 = (inst_24856 > (0));var state_24871__$1 = state_24871;if(cljs.core.truth_(inst_24857))
{var statearr_24881_24908 = state_24871__$1;(statearr_24881_24908[(1)] = (12));
} else
{var statearr_24882_24909 = state_24871__$1;(statearr_24882_24909[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (3)))
{var inst_24869 = (state_24871[(2)]);var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24871__$1,inst_24869);
} else
{if((state_val_24872 === (12)))
{var inst_24831 = (state_24871[(7)]);var inst_24859 = cljs.core.vec.call(null,inst_24831);var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24871__$1,(15),out,inst_24859);
} else
{if((state_val_24872 === (2)))
{var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24871__$1,(4),ch);
} else
{if((state_val_24872 === (11)))
{var inst_24839 = (state_24871[(10)]);var inst_24835 = (state_24871[(9)]);var inst_24849 = (state_24871[(2)]);var inst_24850 = [];var inst_24851 = inst_24850.push(inst_24835);var inst_24831 = inst_24850;var inst_24832 = inst_24839;var state_24871__$1 = (function (){var statearr_24883 = state_24871;(statearr_24883[(11)] = inst_24851);
(statearr_24883[(7)] = inst_24831);
(statearr_24883[(8)] = inst_24832);
(statearr_24883[(12)] = inst_24849);
return statearr_24883;
})();var statearr_24884_24910 = state_24871__$1;(statearr_24884_24910[(2)] = null);
(statearr_24884_24910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (9)))
{var inst_24831 = (state_24871[(7)]);var inst_24847 = cljs.core.vec.call(null,inst_24831);var state_24871__$1 = state_24871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24871__$1,(11),out,inst_24847);
} else
{if((state_val_24872 === (5)))
{var inst_24839 = (state_24871[(10)]);var inst_24835 = (state_24871[(9)]);var inst_24832 = (state_24871[(8)]);var inst_24839__$1 = f.call(null,inst_24835);var inst_24840 = cljs.core._EQ_.call(null,inst_24839__$1,inst_24832);var inst_24841 = cljs.core.keyword_identical_QMARK_.call(null,inst_24832,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_24842 = (inst_24840) || (inst_24841);var state_24871__$1 = (function (){var statearr_24885 = state_24871;(statearr_24885[(10)] = inst_24839__$1);
return statearr_24885;
})();if(cljs.core.truth_(inst_24842))
{var statearr_24886_24911 = state_24871__$1;(statearr_24886_24911[(1)] = (8));
} else
{var statearr_24887_24912 = state_24871__$1;(statearr_24887_24912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (14)))
{var inst_24864 = (state_24871[(2)]);var inst_24865 = cljs.core.async.close_BANG_.call(null,out);var state_24871__$1 = (function (){var statearr_24889 = state_24871;(statearr_24889[(13)] = inst_24864);
return statearr_24889;
})();var statearr_24890_24913 = state_24871__$1;(statearr_24890_24913[(2)] = inst_24865);
(statearr_24890_24913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (10)))
{var inst_24854 = (state_24871[(2)]);var state_24871__$1 = state_24871;var statearr_24891_24914 = state_24871__$1;(statearr_24891_24914[(2)] = inst_24854);
(statearr_24891_24914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24872 === (8)))
{var inst_24839 = (state_24871[(10)]);var inst_24835 = (state_24871[(9)]);var inst_24831 = (state_24871[(7)]);var inst_24844 = inst_24831.push(inst_24835);var tmp24888 = inst_24831;var inst_24831__$1 = tmp24888;var inst_24832 = inst_24839;var state_24871__$1 = (function (){var statearr_24892 = state_24871;(statearr_24892[(14)] = inst_24844);
(statearr_24892[(7)] = inst_24831__$1);
(statearr_24892[(8)] = inst_24832);
return statearr_24892;
})();var statearr_24893_24915 = state_24871__$1;(statearr_24893_24915[(2)] = null);
(statearr_24893_24915[(1)] = (2));
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
});})(c__15989__auto___24901,out))
;return ((function (switch__15974__auto__,c__15989__auto___24901,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24897[(0)] = state_machine__15975__auto__);
(statearr_24897[(1)] = (1));
return statearr_24897;
});
var state_machine__15975__auto____1 = (function (state_24871){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24871);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24898){if((e24898 instanceof Object))
{var ex__15978__auto__ = e24898;var statearr_24899_24916 = state_24871;(statearr_24899_24916[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24898;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24917 = state_24871;
state_24871 = G__24917;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24871){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24901,out))
})();var state__15991__auto__ = (function (){var statearr_24900 = f__15990__auto__.call(null);(statearr_24900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24901);
return statearr_24900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24901,out))
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