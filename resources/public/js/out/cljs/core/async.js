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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21803 = (function (f,fn_handler,meta21804){
this.f = f;
this.fn_handler = fn_handler;
this.meta21804 = meta21804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21803.cljs$lang$type = true;
cljs.core.async.t21803.cljs$lang$ctorStr = "cljs.core.async/t21803";
cljs.core.async.t21803.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21803");
});
cljs.core.async.t21803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21805){var self__ = this;
var _21805__$1 = this;return self__.meta21804;
});
cljs.core.async.t21803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21805,meta21804__$1){var self__ = this;
var _21805__$1 = this;return (new cljs.core.async.t21803(self__.f,self__.fn_handler,meta21804__$1));
});
cljs.core.async.__GT_t21803 = (function __GT_t21803(f__$1,fn_handler__$1,meta21804){return (new cljs.core.async.t21803(f__$1,fn_handler__$1,meta21804));
});
}
return (new cljs.core.async.t21803(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21807 = buff;if(G__21807)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__21807.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21807.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21807);
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
{var val_21808 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21808);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21808,ret){
return (function (){return fn1.call(null,val_21808);
});})(val_21808,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___21809 = n;var x_21810 = (0);while(true){
if((x_21810 < n__13416__auto___21809))
{(a[x_21810] = (0));
{
var G__21811 = (x_21810 + (1));
x_21810 = G__21811;
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
var G__21812 = (i + (1));
i = G__21812;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21816 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21816 = (function (flag,alt_flag,meta21817){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21817 = meta21817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21816.cljs$lang$type = true;
cljs.core.async.t21816.cljs$lang$ctorStr = "cljs.core.async/t21816";
cljs.core.async.t21816.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21816");
});})(flag))
;
cljs.core.async.t21816.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21818){var self__ = this;
var _21818__$1 = this;return self__.meta21817;
});})(flag))
;
cljs.core.async.t21816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21818,meta21817__$1){var self__ = this;
var _21818__$1 = this;return (new cljs.core.async.t21816(self__.flag,self__.alt_flag,meta21817__$1));
});})(flag))
;
cljs.core.async.__GT_t21816 = ((function (flag){
return (function __GT_t21816(flag__$1,alt_flag__$1,meta21817){return (new cljs.core.async.t21816(flag__$1,alt_flag__$1,meta21817));
});})(flag))
;
}
return (new cljs.core.async.t21816(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21822 = (function (cb,flag,alt_handler,meta21823){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21823 = meta21823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21822.cljs$lang$type = true;
cljs.core.async.t21822.cljs$lang$ctorStr = "cljs.core.async/t21822";
cljs.core.async.t21822.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t21822");
});
cljs.core.async.t21822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21824){var self__ = this;
var _21824__$1 = this;return self__.meta21823;
});
cljs.core.async.t21822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21824,meta21823__$1){var self__ = this;
var _21824__$1 = this;return (new cljs.core.async.t21822(self__.cb,self__.flag,self__.alt_handler,meta21823__$1));
});
cljs.core.async.__GT_t21822 = (function __GT_t21822(cb__$1,flag__$1,alt_handler__$1,meta21823){return (new cljs.core.async.t21822(cb__$1,flag__$1,alt_handler__$1,meta21823));
});
}
return (new cljs.core.async.t21822(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21825_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21825_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21826_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21826_SHARP_,port], null));
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
var G__21827 = (i + (1));
i = G__21827;
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
var alts_BANG___delegate = function (ports,p__21828){var map__21830 = p__21828;var map__21830__$1 = ((cljs.core.seq_QMARK_.call(null,map__21830))?cljs.core.apply.call(null,cljs.core.hash_map,map__21830):map__21830);var opts = map__21830__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21828 = null;if (arguments.length > 1) {
  p__21828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21828);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21831){
var ports = cljs.core.first(arglist__21831);
var p__21828 = cljs.core.rest(arglist__21831);
return alts_BANG___delegate(ports,p__21828);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___21926 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___21926){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___21926){
return (function (state_21902){var state_val_21903 = (state_21902[(1)]);if((state_val_21903 === (7)))
{var inst_21898 = (state_21902[(2)]);var state_21902__$1 = state_21902;var statearr_21904_21927 = state_21902__$1;(statearr_21904_21927[(2)] = inst_21898);
(statearr_21904_21927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (1)))
{var state_21902__$1 = state_21902;var statearr_21905_21928 = state_21902__$1;(statearr_21905_21928[(2)] = null);
(statearr_21905_21928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (4)))
{var inst_21881 = (state_21902[(7)]);var inst_21881__$1 = (state_21902[(2)]);var inst_21882 = (inst_21881__$1 == null);var state_21902__$1 = (function (){var statearr_21906 = state_21902;(statearr_21906[(7)] = inst_21881__$1);
return statearr_21906;
})();if(cljs.core.truth_(inst_21882))
{var statearr_21907_21929 = state_21902__$1;(statearr_21907_21929[(1)] = (5));
} else
{var statearr_21908_21930 = state_21902__$1;(statearr_21908_21930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (13)))
{var state_21902__$1 = state_21902;var statearr_21909_21931 = state_21902__$1;(statearr_21909_21931[(2)] = null);
(statearr_21909_21931[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (6)))
{var inst_21881 = (state_21902[(7)]);var state_21902__$1 = state_21902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21902__$1,(11),to,inst_21881);
} else
{if((state_val_21903 === (3)))
{var inst_21900 = (state_21902[(2)]);var state_21902__$1 = state_21902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21902__$1,inst_21900);
} else
{if((state_val_21903 === (12)))
{var state_21902__$1 = state_21902;var statearr_21910_21932 = state_21902__$1;(statearr_21910_21932[(2)] = null);
(statearr_21910_21932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (2)))
{var state_21902__$1 = state_21902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21902__$1,(4),from);
} else
{if((state_val_21903 === (11)))
{var inst_21891 = (state_21902[(2)]);var state_21902__$1 = state_21902;if(cljs.core.truth_(inst_21891))
{var statearr_21911_21933 = state_21902__$1;(statearr_21911_21933[(1)] = (12));
} else
{var statearr_21912_21934 = state_21902__$1;(statearr_21912_21934[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (9)))
{var state_21902__$1 = state_21902;var statearr_21913_21935 = state_21902__$1;(statearr_21913_21935[(2)] = null);
(statearr_21913_21935[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (5)))
{var state_21902__$1 = state_21902;if(cljs.core.truth_(close_QMARK_))
{var statearr_21914_21936 = state_21902__$1;(statearr_21914_21936[(1)] = (8));
} else
{var statearr_21915_21937 = state_21902__$1;(statearr_21915_21937[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (14)))
{var inst_21896 = (state_21902[(2)]);var state_21902__$1 = state_21902;var statearr_21916_21938 = state_21902__$1;(statearr_21916_21938[(2)] = inst_21896);
(statearr_21916_21938[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (10)))
{var inst_21888 = (state_21902[(2)]);var state_21902__$1 = state_21902;var statearr_21917_21939 = state_21902__$1;(statearr_21917_21939[(2)] = inst_21888);
(statearr_21917_21939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21903 === (8)))
{var inst_21885 = cljs.core.async.close_BANG_.call(null,to);var state_21902__$1 = state_21902;var statearr_21918_21940 = state_21902__$1;(statearr_21918_21940[(2)] = inst_21885);
(statearr_21918_21940[(1)] = (10));
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
});})(c__15989__auto___21926))
;return ((function (switch__15974__auto__,c__15989__auto___21926){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_21922 = [null,null,null,null,null,null,null,null];(statearr_21922[(0)] = state_machine__15975__auto__);
(statearr_21922[(1)] = (1));
return statearr_21922;
});
var state_machine__15975__auto____1 = (function (state_21902){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_21902);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e21923){if((e21923 instanceof Object))
{var ex__15978__auto__ = e21923;var statearr_21924_21941 = state_21902;(statearr_21924_21941[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21942 = state_21902;
state_21902 = G__21942;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_21902){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_21902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___21926))
})();var state__15991__auto__ = (function (){var statearr_21925 = f__15990__auto__.call(null);(statearr_21925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___21926);
return statearr_21925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___21926))
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
return (function (p__22126){var vec__22127 = p__22126;var v = cljs.core.nth.call(null,vec__22127,(0),null);var p = cljs.core.nth.call(null,vec__22127,(1),null);var job = vec__22127;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___22309 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results){
return (function (state_22132){var state_val_22133 = (state_22132[(1)]);if((state_val_22133 === (2)))
{var inst_22129 = (state_22132[(2)]);var inst_22130 = cljs.core.async.close_BANG_.call(null,res);var state_22132__$1 = (function (){var statearr_22134 = state_22132;(statearr_22134[(7)] = inst_22129);
return statearr_22134;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22132__$1,inst_22130);
} else
{if((state_val_22133 === (1)))
{var state_22132__$1 = state_22132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22132__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22138 = [null,null,null,null,null,null,null,null];(statearr_22138[(0)] = state_machine__15975__auto__);
(statearr_22138[(1)] = (1));
return statearr_22138;
});
var state_machine__15975__auto____1 = (function (state_22132){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22132);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22139){if((e22139 instanceof Object))
{var ex__15978__auto__ = e22139;var statearr_22140_22310 = state_22132;(statearr_22140_22310[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22139;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22311 = state_22132;
state_22132 = G__22311;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_22141 = f__15990__auto__.call(null);(statearr_22141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22309);
return statearr_22141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22309,res,vec__22127,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22142){var vec__22143 = p__22142;var v = cljs.core.nth.call(null,vec__22143,(0),null);var p = cljs.core.nth.call(null,vec__22143,(1),null);var job = vec__22143;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___22312 = n;var __22313 = (0);while(true){
if((__22313 < n__13416__auto___22312))
{var G__22144_22314 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22144_22314) {
case "async":
var c__15989__auto___22316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22313,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__22313,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function (state_22157){var state_val_22158 = (state_22157[(1)]);if((state_val_22158 === (7)))
{var inst_22153 = (state_22157[(2)]);var state_22157__$1 = state_22157;var statearr_22159_22317 = state_22157__$1;(statearr_22159_22317[(2)] = inst_22153);
(statearr_22159_22317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22158 === (6)))
{var state_22157__$1 = state_22157;var statearr_22160_22318 = state_22157__$1;(statearr_22160_22318[(2)] = null);
(statearr_22160_22318[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22158 === (5)))
{var state_22157__$1 = state_22157;var statearr_22161_22319 = state_22157__$1;(statearr_22161_22319[(2)] = null);
(statearr_22161_22319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22158 === (4)))
{var inst_22147 = (state_22157[(2)]);var inst_22148 = async.call(null,inst_22147);var state_22157__$1 = state_22157;if(cljs.core.truth_(inst_22148))
{var statearr_22162_22320 = state_22157__$1;(statearr_22162_22320[(1)] = (5));
} else
{var statearr_22163_22321 = state_22157__$1;(statearr_22163_22321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22158 === (3)))
{var inst_22155 = (state_22157[(2)]);var state_22157__$1 = state_22157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22157__$1,inst_22155);
} else
{if((state_val_22158 === (2)))
{var state_22157__$1 = state_22157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22157__$1,(4),jobs);
} else
{if((state_val_22158 === (1)))
{var state_22157__$1 = state_22157;var statearr_22164_22322 = state_22157__$1;(statearr_22164_22322[(2)] = null);
(statearr_22164_22322[(1)] = (2));
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
});})(__22313,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
;return ((function (__22313,switch__15974__auto__,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22168 = [null,null,null,null,null,null,null];(statearr_22168[(0)] = state_machine__15975__auto__);
(statearr_22168[(1)] = (1));
return statearr_22168;
});
var state_machine__15975__auto____1 = (function (state_22157){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22157);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22169){if((e22169 instanceof Object))
{var ex__15978__auto__ = e22169;var statearr_22170_22323 = state_22157;(statearr_22170_22323[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22169;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22324 = state_22157;
state_22157 = G__22324;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22157){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__22313,switch__15974__auto__,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22171 = f__15990__auto__.call(null);(statearr_22171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22316);
return statearr_22171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__22313,c__15989__auto___22316,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___22325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22313,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__22313,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function (state_22184){var state_val_22185 = (state_22184[(1)]);if((state_val_22185 === (7)))
{var inst_22180 = (state_22184[(2)]);var state_22184__$1 = state_22184;var statearr_22186_22326 = state_22184__$1;(statearr_22186_22326[(2)] = inst_22180);
(statearr_22186_22326[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (6)))
{var state_22184__$1 = state_22184;var statearr_22187_22327 = state_22184__$1;(statearr_22187_22327[(2)] = null);
(statearr_22187_22327[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (5)))
{var state_22184__$1 = state_22184;var statearr_22188_22328 = state_22184__$1;(statearr_22188_22328[(2)] = null);
(statearr_22188_22328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (4)))
{var inst_22174 = (state_22184[(2)]);var inst_22175 = process.call(null,inst_22174);var state_22184__$1 = state_22184;if(cljs.core.truth_(inst_22175))
{var statearr_22189_22329 = state_22184__$1;(statearr_22189_22329[(1)] = (5));
} else
{var statearr_22190_22330 = state_22184__$1;(statearr_22190_22330[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (3)))
{var inst_22182 = (state_22184[(2)]);var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22184__$1,inst_22182);
} else
{if((state_val_22185 === (2)))
{var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22184__$1,(4),jobs);
} else
{if((state_val_22185 === (1)))
{var state_22184__$1 = state_22184;var statearr_22191_22331 = state_22184__$1;(statearr_22191_22331[(2)] = null);
(statearr_22191_22331[(1)] = (2));
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
});})(__22313,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
;return ((function (__22313,switch__15974__auto__,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22195 = [null,null,null,null,null,null,null];(statearr_22195[(0)] = state_machine__15975__auto__);
(statearr_22195[(1)] = (1));
return statearr_22195;
});
var state_machine__15975__auto____1 = (function (state_22184){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22184);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22196){if((e22196 instanceof Object))
{var ex__15978__auto__ = e22196;var statearr_22197_22332 = state_22184;(statearr_22197_22332[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22196;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22333 = state_22184;
state_22184 = G__22333;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22184){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__22313,switch__15974__auto__,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22198 = f__15990__auto__.call(null);(statearr_22198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22325);
return statearr_22198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__22313,c__15989__auto___22325,G__22144_22314,n__13416__auto___22312,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22334 = (__22313 + (1));
__22313 = G__22334;
continue;
}
} else
{}
break;
}
var c__15989__auto___22335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22335,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22335,jobs,results,process,async){
return (function (state_22220){var state_val_22221 = (state_22220[(1)]);if((state_val_22221 === (9)))
{var inst_22213 = (state_22220[(2)]);var state_22220__$1 = (function (){var statearr_22222 = state_22220;(statearr_22222[(7)] = inst_22213);
return statearr_22222;
})();var statearr_22223_22336 = state_22220__$1;(statearr_22223_22336[(2)] = null);
(statearr_22223_22336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22221 === (8)))
{var inst_22206 = (state_22220[(8)]);var inst_22211 = (state_22220[(2)]);var state_22220__$1 = (function (){var statearr_22224 = state_22220;(statearr_22224[(9)] = inst_22211);
return statearr_22224;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22220__$1,(9),results,inst_22206);
} else
{if((state_val_22221 === (7)))
{var inst_22216 = (state_22220[(2)]);var state_22220__$1 = state_22220;var statearr_22225_22337 = state_22220__$1;(statearr_22225_22337[(2)] = inst_22216);
(statearr_22225_22337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22221 === (6)))
{var inst_22206 = (state_22220[(8)]);var inst_22201 = (state_22220[(10)]);var inst_22206__$1 = cljs.core.async.chan.call(null,(1));var inst_22207 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22208 = [inst_22201,inst_22206__$1];var inst_22209 = (new cljs.core.PersistentVector(null,2,(5),inst_22207,inst_22208,null));var state_22220__$1 = (function (){var statearr_22226 = state_22220;(statearr_22226[(8)] = inst_22206__$1);
return statearr_22226;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22220__$1,(8),jobs,inst_22209);
} else
{if((state_val_22221 === (5)))
{var inst_22204 = cljs.core.async.close_BANG_.call(null,jobs);var state_22220__$1 = state_22220;var statearr_22227_22338 = state_22220__$1;(statearr_22227_22338[(2)] = inst_22204);
(statearr_22227_22338[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22221 === (4)))
{var inst_22201 = (state_22220[(10)]);var inst_22201__$1 = (state_22220[(2)]);var inst_22202 = (inst_22201__$1 == null);var state_22220__$1 = (function (){var statearr_22228 = state_22220;(statearr_22228[(10)] = inst_22201__$1);
return statearr_22228;
})();if(cljs.core.truth_(inst_22202))
{var statearr_22229_22339 = state_22220__$1;(statearr_22229_22339[(1)] = (5));
} else
{var statearr_22230_22340 = state_22220__$1;(statearr_22230_22340[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22221 === (3)))
{var inst_22218 = (state_22220[(2)]);var state_22220__$1 = state_22220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22220__$1,inst_22218);
} else
{if((state_val_22221 === (2)))
{var state_22220__$1 = state_22220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22220__$1,(4),from);
} else
{if((state_val_22221 === (1)))
{var state_22220__$1 = state_22220;var statearr_22231_22341 = state_22220__$1;(statearr_22231_22341[(2)] = null);
(statearr_22231_22341[(1)] = (2));
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
});})(c__15989__auto___22335,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___22335,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22235 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22235[(0)] = state_machine__15975__auto__);
(statearr_22235[(1)] = (1));
return statearr_22235;
});
var state_machine__15975__auto____1 = (function (state_22220){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22220);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22236){if((e22236 instanceof Object))
{var ex__15978__auto__ = e22236;var statearr_22237_22342 = state_22220;(statearr_22237_22342[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22236;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22343 = state_22220;
state_22220 = G__22343;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22220){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22335,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22238 = f__15990__auto__.call(null);(statearr_22238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22335);
return statearr_22238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22335,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_22276){var state_val_22277 = (state_22276[(1)]);if((state_val_22277 === (7)))
{var inst_22272 = (state_22276[(2)]);var state_22276__$1 = state_22276;var statearr_22278_22344 = state_22276__$1;(statearr_22278_22344[(2)] = inst_22272);
(statearr_22278_22344[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (20)))
{var state_22276__$1 = state_22276;var statearr_22279_22345 = state_22276__$1;(statearr_22279_22345[(2)] = null);
(statearr_22279_22345[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (1)))
{var state_22276__$1 = state_22276;var statearr_22280_22346 = state_22276__$1;(statearr_22280_22346[(2)] = null);
(statearr_22280_22346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (4)))
{var inst_22241 = (state_22276[(7)]);var inst_22241__$1 = (state_22276[(2)]);var inst_22242 = (inst_22241__$1 == null);var state_22276__$1 = (function (){var statearr_22281 = state_22276;(statearr_22281[(7)] = inst_22241__$1);
return statearr_22281;
})();if(cljs.core.truth_(inst_22242))
{var statearr_22282_22347 = state_22276__$1;(statearr_22282_22347[(1)] = (5));
} else
{var statearr_22283_22348 = state_22276__$1;(statearr_22283_22348[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (15)))
{var inst_22254 = (state_22276[(8)]);var state_22276__$1 = state_22276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22276__$1,(18),to,inst_22254);
} else
{if((state_val_22277 === (21)))
{var inst_22267 = (state_22276[(2)]);var state_22276__$1 = state_22276;var statearr_22284_22349 = state_22276__$1;(statearr_22284_22349[(2)] = inst_22267);
(statearr_22284_22349[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (13)))
{var inst_22269 = (state_22276[(2)]);var state_22276__$1 = (function (){var statearr_22285 = state_22276;(statearr_22285[(9)] = inst_22269);
return statearr_22285;
})();var statearr_22286_22350 = state_22276__$1;(statearr_22286_22350[(2)] = null);
(statearr_22286_22350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (6)))
{var inst_22241 = (state_22276[(7)]);var state_22276__$1 = state_22276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22276__$1,(11),inst_22241);
} else
{if((state_val_22277 === (17)))
{var inst_22262 = (state_22276[(2)]);var state_22276__$1 = state_22276;if(cljs.core.truth_(inst_22262))
{var statearr_22287_22351 = state_22276__$1;(statearr_22287_22351[(1)] = (19));
} else
{var statearr_22288_22352 = state_22276__$1;(statearr_22288_22352[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (3)))
{var inst_22274 = (state_22276[(2)]);var state_22276__$1 = state_22276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22276__$1,inst_22274);
} else
{if((state_val_22277 === (12)))
{var inst_22251 = (state_22276[(10)]);var state_22276__$1 = state_22276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22276__$1,(14),inst_22251);
} else
{if((state_val_22277 === (2)))
{var state_22276__$1 = state_22276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22276__$1,(4),results);
} else
{if((state_val_22277 === (19)))
{var state_22276__$1 = state_22276;var statearr_22289_22353 = state_22276__$1;(statearr_22289_22353[(2)] = null);
(statearr_22289_22353[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (11)))
{var inst_22251 = (state_22276[(2)]);var state_22276__$1 = (function (){var statearr_22290 = state_22276;(statearr_22290[(10)] = inst_22251);
return statearr_22290;
})();var statearr_22291_22354 = state_22276__$1;(statearr_22291_22354[(2)] = null);
(statearr_22291_22354[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (9)))
{var state_22276__$1 = state_22276;var statearr_22292_22355 = state_22276__$1;(statearr_22292_22355[(2)] = null);
(statearr_22292_22355[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (5)))
{var state_22276__$1 = state_22276;if(cljs.core.truth_(close_QMARK_))
{var statearr_22293_22356 = state_22276__$1;(statearr_22293_22356[(1)] = (8));
} else
{var statearr_22294_22357 = state_22276__$1;(statearr_22294_22357[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (14)))
{var inst_22256 = (state_22276[(11)]);var inst_22254 = (state_22276[(8)]);var inst_22254__$1 = (state_22276[(2)]);var inst_22255 = (inst_22254__$1 == null);var inst_22256__$1 = cljs.core.not.call(null,inst_22255);var state_22276__$1 = (function (){var statearr_22295 = state_22276;(statearr_22295[(11)] = inst_22256__$1);
(statearr_22295[(8)] = inst_22254__$1);
return statearr_22295;
})();if(inst_22256__$1)
{var statearr_22296_22358 = state_22276__$1;(statearr_22296_22358[(1)] = (15));
} else
{var statearr_22297_22359 = state_22276__$1;(statearr_22297_22359[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (16)))
{var inst_22256 = (state_22276[(11)]);var state_22276__$1 = state_22276;var statearr_22298_22360 = state_22276__$1;(statearr_22298_22360[(2)] = inst_22256);
(statearr_22298_22360[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (10)))
{var inst_22248 = (state_22276[(2)]);var state_22276__$1 = state_22276;var statearr_22299_22361 = state_22276__$1;(statearr_22299_22361[(2)] = inst_22248);
(statearr_22299_22361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (18)))
{var inst_22259 = (state_22276[(2)]);var state_22276__$1 = state_22276;var statearr_22300_22362 = state_22276__$1;(statearr_22300_22362[(2)] = inst_22259);
(statearr_22300_22362[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22277 === (8)))
{var inst_22245 = cljs.core.async.close_BANG_.call(null,to);var state_22276__$1 = state_22276;var statearr_22301_22363 = state_22276__$1;(statearr_22301_22363[(2)] = inst_22245);
(statearr_22301_22363[(1)] = (10));
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
var state_machine__15975__auto____0 = (function (){var statearr_22305 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22305[(0)] = state_machine__15975__auto__);
(statearr_22305[(1)] = (1));
return statearr_22305;
});
var state_machine__15975__auto____1 = (function (state_22276){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22276);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object))
{var ex__15978__auto__ = e22306;var statearr_22307_22364 = state_22276;(statearr_22307_22364[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22306;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22365 = state_22276;
state_22276 = G__22365;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22276){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_22308 = f__15990__auto__.call(null);(statearr_22308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22308;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___22466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___22466,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___22466,tc,fc){
return (function (state_22441){var state_val_22442 = (state_22441[(1)]);if((state_val_22442 === (7)))
{var inst_22437 = (state_22441[(2)]);var state_22441__$1 = state_22441;var statearr_22443_22467 = state_22441__$1;(statearr_22443_22467[(2)] = inst_22437);
(statearr_22443_22467[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (1)))
{var state_22441__$1 = state_22441;var statearr_22444_22468 = state_22441__$1;(statearr_22444_22468[(2)] = null);
(statearr_22444_22468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (4)))
{var inst_22418 = (state_22441[(7)]);var inst_22418__$1 = (state_22441[(2)]);var inst_22419 = (inst_22418__$1 == null);var state_22441__$1 = (function (){var statearr_22445 = state_22441;(statearr_22445[(7)] = inst_22418__$1);
return statearr_22445;
})();if(cljs.core.truth_(inst_22419))
{var statearr_22446_22469 = state_22441__$1;(statearr_22446_22469[(1)] = (5));
} else
{var statearr_22447_22470 = state_22441__$1;(statearr_22447_22470[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (13)))
{var state_22441__$1 = state_22441;var statearr_22448_22471 = state_22441__$1;(statearr_22448_22471[(2)] = null);
(statearr_22448_22471[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (6)))
{var inst_22418 = (state_22441[(7)]);var inst_22424 = p.call(null,inst_22418);var state_22441__$1 = state_22441;if(cljs.core.truth_(inst_22424))
{var statearr_22449_22472 = state_22441__$1;(statearr_22449_22472[(1)] = (9));
} else
{var statearr_22450_22473 = state_22441__$1;(statearr_22450_22473[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (3)))
{var inst_22439 = (state_22441[(2)]);var state_22441__$1 = state_22441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22441__$1,inst_22439);
} else
{if((state_val_22442 === (12)))
{var state_22441__$1 = state_22441;var statearr_22451_22474 = state_22441__$1;(statearr_22451_22474[(2)] = null);
(statearr_22451_22474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (2)))
{var state_22441__$1 = state_22441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22441__$1,(4),ch);
} else
{if((state_val_22442 === (11)))
{var inst_22418 = (state_22441[(7)]);var inst_22428 = (state_22441[(2)]);var state_22441__$1 = state_22441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22441__$1,(8),inst_22428,inst_22418);
} else
{if((state_val_22442 === (9)))
{var state_22441__$1 = state_22441;var statearr_22452_22475 = state_22441__$1;(statearr_22452_22475[(2)] = tc);
(statearr_22452_22475[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (5)))
{var inst_22421 = cljs.core.async.close_BANG_.call(null,tc);var inst_22422 = cljs.core.async.close_BANG_.call(null,fc);var state_22441__$1 = (function (){var statearr_22453 = state_22441;(statearr_22453[(8)] = inst_22421);
return statearr_22453;
})();var statearr_22454_22476 = state_22441__$1;(statearr_22454_22476[(2)] = inst_22422);
(statearr_22454_22476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (14)))
{var inst_22435 = (state_22441[(2)]);var state_22441__$1 = state_22441;var statearr_22455_22477 = state_22441__$1;(statearr_22455_22477[(2)] = inst_22435);
(statearr_22455_22477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (10)))
{var state_22441__$1 = state_22441;var statearr_22456_22478 = state_22441__$1;(statearr_22456_22478[(2)] = fc);
(statearr_22456_22478[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22442 === (8)))
{var inst_22430 = (state_22441[(2)]);var state_22441__$1 = state_22441;if(cljs.core.truth_(inst_22430))
{var statearr_22457_22479 = state_22441__$1;(statearr_22457_22479[(1)] = (12));
} else
{var statearr_22458_22480 = state_22441__$1;(statearr_22458_22480[(1)] = (13));
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
});})(c__15989__auto___22466,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___22466,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_22462 = [null,null,null,null,null,null,null,null,null];(statearr_22462[(0)] = state_machine__15975__auto__);
(statearr_22462[(1)] = (1));
return statearr_22462;
});
var state_machine__15975__auto____1 = (function (state_22441){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22441);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22463){if((e22463 instanceof Object))
{var ex__15978__auto__ = e22463;var statearr_22464_22481 = state_22441;(statearr_22464_22481[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22463;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22482 = state_22441;
state_22441 = G__22482;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22441){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___22466,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_22465 = f__15990__auto__.call(null);(statearr_22465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___22466);
return statearr_22465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___22466,tc,fc))
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
return (function (state_22529){var state_val_22530 = (state_22529[(1)]);if((state_val_22530 === (7)))
{var inst_22525 = (state_22529[(2)]);var state_22529__$1 = state_22529;var statearr_22531_22547 = state_22529__$1;(statearr_22531_22547[(2)] = inst_22525);
(statearr_22531_22547[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22530 === (6)))
{var inst_22515 = (state_22529[(7)]);var inst_22518 = (state_22529[(8)]);var inst_22522 = f.call(null,inst_22515,inst_22518);var inst_22515__$1 = inst_22522;var state_22529__$1 = (function (){var statearr_22532 = state_22529;(statearr_22532[(7)] = inst_22515__$1);
return statearr_22532;
})();var statearr_22533_22548 = state_22529__$1;(statearr_22533_22548[(2)] = null);
(statearr_22533_22548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22530 === (5)))
{var inst_22515 = (state_22529[(7)]);var state_22529__$1 = state_22529;var statearr_22534_22549 = state_22529__$1;(statearr_22534_22549[(2)] = inst_22515);
(statearr_22534_22549[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22530 === (4)))
{var inst_22518 = (state_22529[(8)]);var inst_22518__$1 = (state_22529[(2)]);var inst_22519 = (inst_22518__$1 == null);var state_22529__$1 = (function (){var statearr_22535 = state_22529;(statearr_22535[(8)] = inst_22518__$1);
return statearr_22535;
})();if(cljs.core.truth_(inst_22519))
{var statearr_22536_22550 = state_22529__$1;(statearr_22536_22550[(1)] = (5));
} else
{var statearr_22537_22551 = state_22529__$1;(statearr_22537_22551[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22530 === (3)))
{var inst_22527 = (state_22529[(2)]);var state_22529__$1 = state_22529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22529__$1,inst_22527);
} else
{if((state_val_22530 === (2)))
{var state_22529__$1 = state_22529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22529__$1,(4),ch);
} else
{if((state_val_22530 === (1)))
{var inst_22515 = init;var state_22529__$1 = (function (){var statearr_22538 = state_22529;(statearr_22538[(7)] = inst_22515);
return statearr_22538;
})();var statearr_22539_22552 = state_22529__$1;(statearr_22539_22552[(2)] = null);
(statearr_22539_22552[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_22543 = [null,null,null,null,null,null,null,null,null];(statearr_22543[(0)] = state_machine__15975__auto__);
(statearr_22543[(1)] = (1));
return statearr_22543;
});
var state_machine__15975__auto____1 = (function (state_22529){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22529);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22544){if((e22544 instanceof Object))
{var ex__15978__auto__ = e22544;var statearr_22545_22553 = state_22529;(statearr_22545_22553[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22544;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22554 = state_22529;
state_22529 = G__22554;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22529){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_22546 = f__15990__auto__.call(null);(statearr_22546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22546;
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
return (function (state_22628){var state_val_22629 = (state_22628[(1)]);if((state_val_22629 === (7)))
{var inst_22610 = (state_22628[(2)]);var state_22628__$1 = state_22628;var statearr_22630_22653 = state_22628__$1;(statearr_22630_22653[(2)] = inst_22610);
(statearr_22630_22653[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (1)))
{var inst_22604 = cljs.core.seq.call(null,coll);var inst_22605 = inst_22604;var state_22628__$1 = (function (){var statearr_22631 = state_22628;(statearr_22631[(7)] = inst_22605);
return statearr_22631;
})();var statearr_22632_22654 = state_22628__$1;(statearr_22632_22654[(2)] = null);
(statearr_22632_22654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (4)))
{var inst_22605 = (state_22628[(7)]);var inst_22608 = cljs.core.first.call(null,inst_22605);var state_22628__$1 = state_22628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22628__$1,(7),ch,inst_22608);
} else
{if((state_val_22629 === (13)))
{var inst_22622 = (state_22628[(2)]);var state_22628__$1 = state_22628;var statearr_22633_22655 = state_22628__$1;(statearr_22633_22655[(2)] = inst_22622);
(statearr_22633_22655[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (6)))
{var inst_22613 = (state_22628[(2)]);var state_22628__$1 = state_22628;if(cljs.core.truth_(inst_22613))
{var statearr_22634_22656 = state_22628__$1;(statearr_22634_22656[(1)] = (8));
} else
{var statearr_22635_22657 = state_22628__$1;(statearr_22635_22657[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (3)))
{var inst_22626 = (state_22628[(2)]);var state_22628__$1 = state_22628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22628__$1,inst_22626);
} else
{if((state_val_22629 === (12)))
{var state_22628__$1 = state_22628;var statearr_22636_22658 = state_22628__$1;(statearr_22636_22658[(2)] = null);
(statearr_22636_22658[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (2)))
{var inst_22605 = (state_22628[(7)]);var state_22628__$1 = state_22628;if(cljs.core.truth_(inst_22605))
{var statearr_22637_22659 = state_22628__$1;(statearr_22637_22659[(1)] = (4));
} else
{var statearr_22638_22660 = state_22628__$1;(statearr_22638_22660[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (11)))
{var inst_22619 = cljs.core.async.close_BANG_.call(null,ch);var state_22628__$1 = state_22628;var statearr_22639_22661 = state_22628__$1;(statearr_22639_22661[(2)] = inst_22619);
(statearr_22639_22661[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (9)))
{var state_22628__$1 = state_22628;if(cljs.core.truth_(close_QMARK_))
{var statearr_22640_22662 = state_22628__$1;(statearr_22640_22662[(1)] = (11));
} else
{var statearr_22641_22663 = state_22628__$1;(statearr_22641_22663[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (5)))
{var inst_22605 = (state_22628[(7)]);var state_22628__$1 = state_22628;var statearr_22642_22664 = state_22628__$1;(statearr_22642_22664[(2)] = inst_22605);
(statearr_22642_22664[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (10)))
{var inst_22624 = (state_22628[(2)]);var state_22628__$1 = state_22628;var statearr_22643_22665 = state_22628__$1;(statearr_22643_22665[(2)] = inst_22624);
(statearr_22643_22665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22629 === (8)))
{var inst_22605 = (state_22628[(7)]);var inst_22615 = cljs.core.next.call(null,inst_22605);var inst_22605__$1 = inst_22615;var state_22628__$1 = (function (){var statearr_22644 = state_22628;(statearr_22644[(7)] = inst_22605__$1);
return statearr_22644;
})();var statearr_22645_22666 = state_22628__$1;(statearr_22645_22666[(2)] = null);
(statearr_22645_22666[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_22649 = [null,null,null,null,null,null,null,null];(statearr_22649[(0)] = state_machine__15975__auto__);
(statearr_22649[(1)] = (1));
return statearr_22649;
});
var state_machine__15975__auto____1 = (function (state_22628){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_22628);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e22650){if((e22650 instanceof Object))
{var ex__15978__auto__ = e22650;var statearr_22651_22667 = state_22628;(statearr_22651_22667[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22650;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22668 = state_22628;
state_22628 = G__22668;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_22628){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_22628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_22652 = f__15990__auto__.call(null);(statearr_22652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_22652;
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
cljs.core.async.Mux = (function (){var obj22670 = {};return obj22670;
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
cljs.core.async.Mult = (function (){var obj22672 = {};return obj22672;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22894 = (function (cs,ch,mult,meta22895){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22895 = meta22895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22894.cljs$lang$type = true;
cljs.core.async.t22894.cljs$lang$ctorStr = "cljs.core.async/t22894";
cljs.core.async.t22894.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t22894");
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22894.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22896){var self__ = this;
var _22896__$1 = this;return self__.meta22895;
});})(cs))
;
cljs.core.async.t22894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22896,meta22895__$1){var self__ = this;
var _22896__$1 = this;return (new cljs.core.async.t22894(self__.cs,self__.ch,self__.mult,meta22895__$1));
});})(cs))
;
cljs.core.async.__GT_t22894 = ((function (cs){
return (function __GT_t22894(cs__$1,ch__$1,mult__$1,meta22895){return (new cljs.core.async.t22894(cs__$1,ch__$1,mult__$1,meta22895));
});})(cs))
;
}
return (new cljs.core.async.t22894(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___23115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23115,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23115,cs,m,dchan,dctr,done){
return (function (state_23027){var state_val_23028 = (state_23027[(1)]);if((state_val_23028 === (7)))
{var inst_23023 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23029_23116 = state_23027__$1;(statearr_23029_23116[(2)] = inst_23023);
(statearr_23029_23116[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (20)))
{var inst_22928 = (state_23027[(7)]);var inst_22938 = cljs.core.first.call(null,inst_22928);var inst_22939 = cljs.core.nth.call(null,inst_22938,(0),null);var inst_22940 = cljs.core.nth.call(null,inst_22938,(1),null);var state_23027__$1 = (function (){var statearr_23030 = state_23027;(statearr_23030[(8)] = inst_22939);
return statearr_23030;
})();if(cljs.core.truth_(inst_22940))
{var statearr_23031_23117 = state_23027__$1;(statearr_23031_23117[(1)] = (22));
} else
{var statearr_23032_23118 = state_23027__$1;(statearr_23032_23118[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (27)))
{var inst_22899 = (state_23027[(9)]);var inst_22970 = (state_23027[(10)]);var inst_22968 = (state_23027[(11)]);var inst_22975 = (state_23027[(12)]);var inst_22975__$1 = cljs.core._nth.call(null,inst_22968,inst_22970);var inst_22976 = cljs.core.async.put_BANG_.call(null,inst_22975__$1,inst_22899,done);var state_23027__$1 = (function (){var statearr_23033 = state_23027;(statearr_23033[(12)] = inst_22975__$1);
return statearr_23033;
})();if(cljs.core.truth_(inst_22976))
{var statearr_23034_23119 = state_23027__$1;(statearr_23034_23119[(1)] = (30));
} else
{var statearr_23035_23120 = state_23027__$1;(statearr_23035_23120[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (1)))
{var state_23027__$1 = state_23027;var statearr_23036_23121 = state_23027__$1;(statearr_23036_23121[(2)] = null);
(statearr_23036_23121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (24)))
{var inst_22928 = (state_23027[(7)]);var inst_22945 = (state_23027[(2)]);var inst_22946 = cljs.core.next.call(null,inst_22928);var inst_22908 = inst_22946;var inst_22909 = null;var inst_22910 = (0);var inst_22911 = (0);var state_23027__$1 = (function (){var statearr_23037 = state_23027;(statearr_23037[(13)] = inst_22945);
(statearr_23037[(14)] = inst_22909);
(statearr_23037[(15)] = inst_22910);
(statearr_23037[(16)] = inst_22908);
(statearr_23037[(17)] = inst_22911);
return statearr_23037;
})();var statearr_23038_23122 = state_23027__$1;(statearr_23038_23122[(2)] = null);
(statearr_23038_23122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (39)))
{var state_23027__$1 = state_23027;var statearr_23042_23123 = state_23027__$1;(statearr_23042_23123[(2)] = null);
(statearr_23042_23123[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (4)))
{var inst_22899 = (state_23027[(9)]);var inst_22899__$1 = (state_23027[(2)]);var inst_22900 = (inst_22899__$1 == null);var state_23027__$1 = (function (){var statearr_23043 = state_23027;(statearr_23043[(9)] = inst_22899__$1);
return statearr_23043;
})();if(cljs.core.truth_(inst_22900))
{var statearr_23044_23124 = state_23027__$1;(statearr_23044_23124[(1)] = (5));
} else
{var statearr_23045_23125 = state_23027__$1;(statearr_23045_23125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (15)))
{var inst_22909 = (state_23027[(14)]);var inst_22910 = (state_23027[(15)]);var inst_22908 = (state_23027[(16)]);var inst_22911 = (state_23027[(17)]);var inst_22924 = (state_23027[(2)]);var inst_22925 = (inst_22911 + (1));var tmp23039 = inst_22909;var tmp23040 = inst_22910;var tmp23041 = inst_22908;var inst_22908__$1 = tmp23041;var inst_22909__$1 = tmp23039;var inst_22910__$1 = tmp23040;var inst_22911__$1 = inst_22925;var state_23027__$1 = (function (){var statearr_23046 = state_23027;(statearr_23046[(14)] = inst_22909__$1);
(statearr_23046[(15)] = inst_22910__$1);
(statearr_23046[(18)] = inst_22924);
(statearr_23046[(16)] = inst_22908__$1);
(statearr_23046[(17)] = inst_22911__$1);
return statearr_23046;
})();var statearr_23047_23126 = state_23027__$1;(statearr_23047_23126[(2)] = null);
(statearr_23047_23126[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (21)))
{var inst_22949 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23051_23127 = state_23027__$1;(statearr_23051_23127[(2)] = inst_22949);
(statearr_23051_23127[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (31)))
{var inst_22975 = (state_23027[(12)]);var inst_22979 = done.call(null,null);var inst_22980 = cljs.core.async.untap_STAR_.call(null,m,inst_22975);var state_23027__$1 = (function (){var statearr_23052 = state_23027;(statearr_23052[(19)] = inst_22979);
return statearr_23052;
})();var statearr_23053_23128 = state_23027__$1;(statearr_23053_23128[(2)] = inst_22980);
(statearr_23053_23128[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (32)))
{var inst_22969 = (state_23027[(20)]);var inst_22970 = (state_23027[(10)]);var inst_22968 = (state_23027[(11)]);var inst_22967 = (state_23027[(21)]);var inst_22982 = (state_23027[(2)]);var inst_22983 = (inst_22970 + (1));var tmp23048 = inst_22969;var tmp23049 = inst_22968;var tmp23050 = inst_22967;var inst_22967__$1 = tmp23050;var inst_22968__$1 = tmp23049;var inst_22969__$1 = tmp23048;var inst_22970__$1 = inst_22983;var state_23027__$1 = (function (){var statearr_23054 = state_23027;(statearr_23054[(20)] = inst_22969__$1);
(statearr_23054[(10)] = inst_22970__$1);
(statearr_23054[(22)] = inst_22982);
(statearr_23054[(11)] = inst_22968__$1);
(statearr_23054[(21)] = inst_22967__$1);
return statearr_23054;
})();var statearr_23055_23129 = state_23027__$1;(statearr_23055_23129[(2)] = null);
(statearr_23055_23129[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (40)))
{var inst_22995 = (state_23027[(23)]);var inst_22999 = done.call(null,null);var inst_23000 = cljs.core.async.untap_STAR_.call(null,m,inst_22995);var state_23027__$1 = (function (){var statearr_23056 = state_23027;(statearr_23056[(24)] = inst_22999);
return statearr_23056;
})();var statearr_23057_23130 = state_23027__$1;(statearr_23057_23130[(2)] = inst_23000);
(statearr_23057_23130[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (33)))
{var inst_22986 = (state_23027[(25)]);var inst_22988 = cljs.core.chunked_seq_QMARK_.call(null,inst_22986);var state_23027__$1 = state_23027;if(inst_22988)
{var statearr_23058_23131 = state_23027__$1;(statearr_23058_23131[(1)] = (36));
} else
{var statearr_23059_23132 = state_23027__$1;(statearr_23059_23132[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (13)))
{var inst_22918 = (state_23027[(26)]);var inst_22921 = cljs.core.async.close_BANG_.call(null,inst_22918);var state_23027__$1 = state_23027;var statearr_23060_23133 = state_23027__$1;(statearr_23060_23133[(2)] = inst_22921);
(statearr_23060_23133[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (22)))
{var inst_22939 = (state_23027[(8)]);var inst_22942 = cljs.core.async.close_BANG_.call(null,inst_22939);var state_23027__$1 = state_23027;var statearr_23061_23134 = state_23027__$1;(statearr_23061_23134[(2)] = inst_22942);
(statearr_23061_23134[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (36)))
{var inst_22986 = (state_23027[(25)]);var inst_22990 = cljs.core.chunk_first.call(null,inst_22986);var inst_22991 = cljs.core.chunk_rest.call(null,inst_22986);var inst_22992 = cljs.core.count.call(null,inst_22990);var inst_22967 = inst_22991;var inst_22968 = inst_22990;var inst_22969 = inst_22992;var inst_22970 = (0);var state_23027__$1 = (function (){var statearr_23062 = state_23027;(statearr_23062[(20)] = inst_22969);
(statearr_23062[(10)] = inst_22970);
(statearr_23062[(11)] = inst_22968);
(statearr_23062[(21)] = inst_22967);
return statearr_23062;
})();var statearr_23063_23135 = state_23027__$1;(statearr_23063_23135[(2)] = null);
(statearr_23063_23135[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (41)))
{var inst_22986 = (state_23027[(25)]);var inst_23002 = (state_23027[(2)]);var inst_23003 = cljs.core.next.call(null,inst_22986);var inst_22967 = inst_23003;var inst_22968 = null;var inst_22969 = (0);var inst_22970 = (0);var state_23027__$1 = (function (){var statearr_23064 = state_23027;(statearr_23064[(20)] = inst_22969);
(statearr_23064[(27)] = inst_23002);
(statearr_23064[(10)] = inst_22970);
(statearr_23064[(11)] = inst_22968);
(statearr_23064[(21)] = inst_22967);
return statearr_23064;
})();var statearr_23065_23136 = state_23027__$1;(statearr_23065_23136[(2)] = null);
(statearr_23065_23136[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (43)))
{var state_23027__$1 = state_23027;var statearr_23066_23137 = state_23027__$1;(statearr_23066_23137[(2)] = null);
(statearr_23066_23137[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (29)))
{var inst_23011 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23067_23138 = state_23027__$1;(statearr_23067_23138[(2)] = inst_23011);
(statearr_23067_23138[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (44)))
{var inst_23020 = (state_23027[(2)]);var state_23027__$1 = (function (){var statearr_23068 = state_23027;(statearr_23068[(28)] = inst_23020);
return statearr_23068;
})();var statearr_23069_23139 = state_23027__$1;(statearr_23069_23139[(2)] = null);
(statearr_23069_23139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (6)))
{var inst_22959 = (state_23027[(29)]);var inst_22958 = cljs.core.deref.call(null,cs);var inst_22959__$1 = cljs.core.keys.call(null,inst_22958);var inst_22960 = cljs.core.count.call(null,inst_22959__$1);var inst_22961 = cljs.core.reset_BANG_.call(null,dctr,inst_22960);var inst_22966 = cljs.core.seq.call(null,inst_22959__$1);var inst_22967 = inst_22966;var inst_22968 = null;var inst_22969 = (0);var inst_22970 = (0);var state_23027__$1 = (function (){var statearr_23070 = state_23027;(statearr_23070[(30)] = inst_22961);
(statearr_23070[(20)] = inst_22969);
(statearr_23070[(10)] = inst_22970);
(statearr_23070[(29)] = inst_22959__$1);
(statearr_23070[(11)] = inst_22968);
(statearr_23070[(21)] = inst_22967);
return statearr_23070;
})();var statearr_23071_23140 = state_23027__$1;(statearr_23071_23140[(2)] = null);
(statearr_23071_23140[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (28)))
{var inst_22986 = (state_23027[(25)]);var inst_22967 = (state_23027[(21)]);var inst_22986__$1 = cljs.core.seq.call(null,inst_22967);var state_23027__$1 = (function (){var statearr_23072 = state_23027;(statearr_23072[(25)] = inst_22986__$1);
return statearr_23072;
})();if(inst_22986__$1)
{var statearr_23073_23141 = state_23027__$1;(statearr_23073_23141[(1)] = (33));
} else
{var statearr_23074_23142 = state_23027__$1;(statearr_23074_23142[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (25)))
{var inst_22969 = (state_23027[(20)]);var inst_22970 = (state_23027[(10)]);var inst_22972 = (inst_22970 < inst_22969);var inst_22973 = inst_22972;var state_23027__$1 = state_23027;if(cljs.core.truth_(inst_22973))
{var statearr_23075_23143 = state_23027__$1;(statearr_23075_23143[(1)] = (27));
} else
{var statearr_23076_23144 = state_23027__$1;(statearr_23076_23144[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (34)))
{var state_23027__$1 = state_23027;var statearr_23077_23145 = state_23027__$1;(statearr_23077_23145[(2)] = null);
(statearr_23077_23145[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (17)))
{var state_23027__$1 = state_23027;var statearr_23078_23146 = state_23027__$1;(statearr_23078_23146[(2)] = null);
(statearr_23078_23146[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (3)))
{var inst_23025 = (state_23027[(2)]);var state_23027__$1 = state_23027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23027__$1,inst_23025);
} else
{if((state_val_23028 === (12)))
{var inst_22954 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23079_23147 = state_23027__$1;(statearr_23079_23147[(2)] = inst_22954);
(statearr_23079_23147[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (2)))
{var state_23027__$1 = state_23027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(4),ch);
} else
{if((state_val_23028 === (23)))
{var state_23027__$1 = state_23027;var statearr_23080_23148 = state_23027__$1;(statearr_23080_23148[(2)] = null);
(statearr_23080_23148[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (35)))
{var inst_23009 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23081_23149 = state_23027__$1;(statearr_23081_23149[(2)] = inst_23009);
(statearr_23081_23149[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (19)))
{var inst_22928 = (state_23027[(7)]);var inst_22932 = cljs.core.chunk_first.call(null,inst_22928);var inst_22933 = cljs.core.chunk_rest.call(null,inst_22928);var inst_22934 = cljs.core.count.call(null,inst_22932);var inst_22908 = inst_22933;var inst_22909 = inst_22932;var inst_22910 = inst_22934;var inst_22911 = (0);var state_23027__$1 = (function (){var statearr_23082 = state_23027;(statearr_23082[(14)] = inst_22909);
(statearr_23082[(15)] = inst_22910);
(statearr_23082[(16)] = inst_22908);
(statearr_23082[(17)] = inst_22911);
return statearr_23082;
})();var statearr_23083_23150 = state_23027__$1;(statearr_23083_23150[(2)] = null);
(statearr_23083_23150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (11)))
{var inst_22908 = (state_23027[(16)]);var inst_22928 = (state_23027[(7)]);var inst_22928__$1 = cljs.core.seq.call(null,inst_22908);var state_23027__$1 = (function (){var statearr_23084 = state_23027;(statearr_23084[(7)] = inst_22928__$1);
return statearr_23084;
})();if(inst_22928__$1)
{var statearr_23085_23151 = state_23027__$1;(statearr_23085_23151[(1)] = (16));
} else
{var statearr_23086_23152 = state_23027__$1;(statearr_23086_23152[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (9)))
{var inst_22956 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23087_23153 = state_23027__$1;(statearr_23087_23153[(2)] = inst_22956);
(statearr_23087_23153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (5)))
{var inst_22906 = cljs.core.deref.call(null,cs);var inst_22907 = cljs.core.seq.call(null,inst_22906);var inst_22908 = inst_22907;var inst_22909 = null;var inst_22910 = (0);var inst_22911 = (0);var state_23027__$1 = (function (){var statearr_23088 = state_23027;(statearr_23088[(14)] = inst_22909);
(statearr_23088[(15)] = inst_22910);
(statearr_23088[(16)] = inst_22908);
(statearr_23088[(17)] = inst_22911);
return statearr_23088;
})();var statearr_23089_23154 = state_23027__$1;(statearr_23089_23154[(2)] = null);
(statearr_23089_23154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (14)))
{var state_23027__$1 = state_23027;var statearr_23090_23155 = state_23027__$1;(statearr_23090_23155[(2)] = null);
(statearr_23090_23155[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (45)))
{var inst_23017 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23091_23156 = state_23027__$1;(statearr_23091_23156[(2)] = inst_23017);
(statearr_23091_23156[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (26)))
{var inst_22959 = (state_23027[(29)]);var inst_23013 = (state_23027[(2)]);var inst_23014 = cljs.core.seq.call(null,inst_22959);var state_23027__$1 = (function (){var statearr_23092 = state_23027;(statearr_23092[(31)] = inst_23013);
return statearr_23092;
})();if(inst_23014)
{var statearr_23093_23157 = state_23027__$1;(statearr_23093_23157[(1)] = (42));
} else
{var statearr_23094_23158 = state_23027__$1;(statearr_23094_23158[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (16)))
{var inst_22928 = (state_23027[(7)]);var inst_22930 = cljs.core.chunked_seq_QMARK_.call(null,inst_22928);var state_23027__$1 = state_23027;if(inst_22930)
{var statearr_23095_23159 = state_23027__$1;(statearr_23095_23159[(1)] = (19));
} else
{var statearr_23096_23160 = state_23027__$1;(statearr_23096_23160[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (38)))
{var inst_23006 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23097_23161 = state_23027__$1;(statearr_23097_23161[(2)] = inst_23006);
(statearr_23097_23161[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (30)))
{var state_23027__$1 = state_23027;var statearr_23098_23162 = state_23027__$1;(statearr_23098_23162[(2)] = null);
(statearr_23098_23162[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (10)))
{var inst_22909 = (state_23027[(14)]);var inst_22911 = (state_23027[(17)]);var inst_22917 = cljs.core._nth.call(null,inst_22909,inst_22911);var inst_22918 = cljs.core.nth.call(null,inst_22917,(0),null);var inst_22919 = cljs.core.nth.call(null,inst_22917,(1),null);var state_23027__$1 = (function (){var statearr_23099 = state_23027;(statearr_23099[(26)] = inst_22918);
return statearr_23099;
})();if(cljs.core.truth_(inst_22919))
{var statearr_23100_23163 = state_23027__$1;(statearr_23100_23163[(1)] = (13));
} else
{var statearr_23101_23164 = state_23027__$1;(statearr_23101_23164[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (18)))
{var inst_22952 = (state_23027[(2)]);var state_23027__$1 = state_23027;var statearr_23102_23165 = state_23027__$1;(statearr_23102_23165[(2)] = inst_22952);
(statearr_23102_23165[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (42)))
{var state_23027__$1 = state_23027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(45),dchan);
} else
{if((state_val_23028 === (37)))
{var inst_22899 = (state_23027[(9)]);var inst_22995 = (state_23027[(23)]);var inst_22986 = (state_23027[(25)]);var inst_22995__$1 = cljs.core.first.call(null,inst_22986);var inst_22996 = cljs.core.async.put_BANG_.call(null,inst_22995__$1,inst_22899,done);var state_23027__$1 = (function (){var statearr_23103 = state_23027;(statearr_23103[(23)] = inst_22995__$1);
return statearr_23103;
})();if(cljs.core.truth_(inst_22996))
{var statearr_23104_23166 = state_23027__$1;(statearr_23104_23166[(1)] = (39));
} else
{var statearr_23105_23167 = state_23027__$1;(statearr_23105_23167[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23028 === (8)))
{var inst_22910 = (state_23027[(15)]);var inst_22911 = (state_23027[(17)]);var inst_22913 = (inst_22911 < inst_22910);var inst_22914 = inst_22913;var state_23027__$1 = state_23027;if(cljs.core.truth_(inst_22914))
{var statearr_23106_23168 = state_23027__$1;(statearr_23106_23168[(1)] = (10));
} else
{var statearr_23107_23169 = state_23027__$1;(statearr_23107_23169[(1)] = (11));
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
});})(c__15989__auto___23115,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___23115,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23111[(0)] = state_machine__15975__auto__);
(statearr_23111[(1)] = (1));
return statearr_23111;
});
var state_machine__15975__auto____1 = (function (state_23027){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23027);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23112){if((e23112 instanceof Object))
{var ex__15978__auto__ = e23112;var statearr_23113_23170 = state_23027;(statearr_23113_23170[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23171 = state_23027;
state_23027 = G__23171;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23027){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23115,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_23114 = f__15990__auto__.call(null);(statearr_23114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23115);
return statearr_23114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23115,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23173 = {};return obj23173;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23174){var map__23179 = p__23174;var map__23179__$1 = ((cljs.core.seq_QMARK_.call(null,map__23179))?cljs.core.apply.call(null,cljs.core.hash_map,map__23179):map__23179);var opts = map__23179__$1;var statearr_23180_23183 = state;(statearr_23180_23183[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__23179,map__23179__$1,opts){
return (function (val){var statearr_23181_23184 = state;(statearr_23181_23184[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23179,map__23179__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23182_23185 = state;(statearr_23182_23185[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23174 = null;if (arguments.length > 3) {
  p__23174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23174);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23186){
var state = cljs.core.first(arglist__23186);
arglist__23186 = cljs.core.next(arglist__23186);
var cont_block = cljs.core.first(arglist__23186);
arglist__23186 = cljs.core.next(arglist__23186);
var ports = cljs.core.first(arglist__23186);
var p__23174 = cljs.core.rest(arglist__23186);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23174);
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
;var m = (function (){if(typeof cljs.core.async.t23306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23306 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23307){
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
this.meta23307 = meta23307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23306.cljs$lang$type = true;
cljs.core.async.t23306.cljs$lang$ctorStr = "cljs.core.async/t23306";
cljs.core.async.t23306.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23306");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23308){var self__ = this;
var _23308__$1 = this;return self__.meta23307;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23308,meta23307__$1){var self__ = this;
var _23308__$1 = this;return (new cljs.core.async.t23306(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23307__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23306 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23306(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23307){return (new cljs.core.async.t23306(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23307));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23306(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___23425 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23378){var state_val_23379 = (state_23378[(1)]);if((state_val_23379 === (7)))
{var inst_23322 = (state_23378[(7)]);var inst_23327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23322);var state_23378__$1 = state_23378;var statearr_23380_23426 = state_23378__$1;(statearr_23380_23426[(2)] = inst_23327);
(statearr_23380_23426[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (20)))
{var inst_23337 = (state_23378[(8)]);var state_23378__$1 = state_23378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23378__$1,(23),out,inst_23337);
} else
{if((state_val_23379 === (1)))
{var inst_23312 = (state_23378[(9)]);var inst_23312__$1 = calc_state.call(null);var inst_23313 = cljs.core.seq_QMARK_.call(null,inst_23312__$1);var state_23378__$1 = (function (){var statearr_23381 = state_23378;(statearr_23381[(9)] = inst_23312__$1);
return statearr_23381;
})();if(inst_23313)
{var statearr_23382_23427 = state_23378__$1;(statearr_23382_23427[(1)] = (2));
} else
{var statearr_23383_23428 = state_23378__$1;(statearr_23383_23428[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (24)))
{var inst_23330 = (state_23378[(10)]);var inst_23322 = inst_23330;var state_23378__$1 = (function (){var statearr_23384 = state_23378;(statearr_23384[(7)] = inst_23322);
return statearr_23384;
})();var statearr_23385_23429 = state_23378__$1;(statearr_23385_23429[(2)] = null);
(statearr_23385_23429[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (4)))
{var inst_23312 = (state_23378[(9)]);var inst_23318 = (state_23378[(2)]);var inst_23319 = cljs.core.get.call(null,inst_23318,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23320 = cljs.core.get.call(null,inst_23318,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23321 = cljs.core.get.call(null,inst_23318,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_23322 = inst_23312;var state_23378__$1 = (function (){var statearr_23386 = state_23378;(statearr_23386[(11)] = inst_23320);
(statearr_23386[(7)] = inst_23322);
(statearr_23386[(12)] = inst_23321);
(statearr_23386[(13)] = inst_23319);
return statearr_23386;
})();var statearr_23387_23430 = state_23378__$1;(statearr_23387_23430[(2)] = null);
(statearr_23387_23430[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (15)))
{var state_23378__$1 = state_23378;var statearr_23388_23431 = state_23378__$1;(statearr_23388_23431[(2)] = null);
(statearr_23388_23431[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (21)))
{var inst_23330 = (state_23378[(10)]);var inst_23322 = inst_23330;var state_23378__$1 = (function (){var statearr_23389 = state_23378;(statearr_23389[(7)] = inst_23322);
return statearr_23389;
})();var statearr_23390_23432 = state_23378__$1;(statearr_23390_23432[(2)] = null);
(statearr_23390_23432[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (13)))
{var inst_23374 = (state_23378[(2)]);var state_23378__$1 = state_23378;var statearr_23391_23433 = state_23378__$1;(statearr_23391_23433[(2)] = inst_23374);
(statearr_23391_23433[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (22)))
{var inst_23372 = (state_23378[(2)]);var state_23378__$1 = state_23378;var statearr_23392_23434 = state_23378__$1;(statearr_23392_23434[(2)] = inst_23372);
(statearr_23392_23434[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (6)))
{var inst_23376 = (state_23378[(2)]);var state_23378__$1 = state_23378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23378__$1,inst_23376);
} else
{if((state_val_23379 === (25)))
{var state_23378__$1 = state_23378;var statearr_23393_23435 = state_23378__$1;(statearr_23393_23435[(2)] = null);
(statearr_23393_23435[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (17)))
{var inst_23352 = (state_23378[(14)]);var state_23378__$1 = state_23378;var statearr_23394_23436 = state_23378__$1;(statearr_23394_23436[(2)] = inst_23352);
(statearr_23394_23436[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (3)))
{var inst_23312 = (state_23378[(9)]);var state_23378__$1 = state_23378;var statearr_23395_23437 = state_23378__$1;(statearr_23395_23437[(2)] = inst_23312);
(statearr_23395_23437[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (12)))
{var inst_23338 = (state_23378[(15)]);var inst_23333 = (state_23378[(16)]);var inst_23352 = (state_23378[(14)]);var inst_23352__$1 = inst_23333.call(null,inst_23338);var state_23378__$1 = (function (){var statearr_23396 = state_23378;(statearr_23396[(14)] = inst_23352__$1);
return statearr_23396;
})();if(cljs.core.truth_(inst_23352__$1))
{var statearr_23397_23438 = state_23378__$1;(statearr_23397_23438[(1)] = (17));
} else
{var statearr_23398_23439 = state_23378__$1;(statearr_23398_23439[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (2)))
{var inst_23312 = (state_23378[(9)]);var inst_23315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23312);var state_23378__$1 = state_23378;var statearr_23399_23440 = state_23378__$1;(statearr_23399_23440[(2)] = inst_23315);
(statearr_23399_23440[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (23)))
{var inst_23363 = (state_23378[(2)]);var state_23378__$1 = state_23378;if(cljs.core.truth_(inst_23363))
{var statearr_23400_23441 = state_23378__$1;(statearr_23400_23441[(1)] = (24));
} else
{var statearr_23401_23442 = state_23378__$1;(statearr_23401_23442[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (19)))
{var inst_23360 = (state_23378[(2)]);var state_23378__$1 = state_23378;if(cljs.core.truth_(inst_23360))
{var statearr_23402_23443 = state_23378__$1;(statearr_23402_23443[(1)] = (20));
} else
{var statearr_23403_23444 = state_23378__$1;(statearr_23403_23444[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (11)))
{var inst_23337 = (state_23378[(8)]);var inst_23343 = (inst_23337 == null);var state_23378__$1 = state_23378;if(cljs.core.truth_(inst_23343))
{var statearr_23404_23445 = state_23378__$1;(statearr_23404_23445[(1)] = (14));
} else
{var statearr_23405_23446 = state_23378__$1;(statearr_23405_23446[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (9)))
{var inst_23330 = (state_23378[(10)]);var inst_23330__$1 = (state_23378[(2)]);var inst_23331 = cljs.core.get.call(null,inst_23330__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23332 = cljs.core.get.call(null,inst_23330__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23333 = cljs.core.get.call(null,inst_23330__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_23378__$1 = (function (){var statearr_23406 = state_23378;(statearr_23406[(10)] = inst_23330__$1);
(statearr_23406[(17)] = inst_23332);
(statearr_23406[(16)] = inst_23333);
return statearr_23406;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_23378__$1,(10),inst_23331);
} else
{if((state_val_23379 === (5)))
{var inst_23322 = (state_23378[(7)]);var inst_23325 = cljs.core.seq_QMARK_.call(null,inst_23322);var state_23378__$1 = state_23378;if(inst_23325)
{var statearr_23407_23447 = state_23378__$1;(statearr_23407_23447[(1)] = (7));
} else
{var statearr_23408_23448 = state_23378__$1;(statearr_23408_23448[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (14)))
{var inst_23338 = (state_23378[(15)]);var inst_23345 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23338);var state_23378__$1 = state_23378;var statearr_23409_23449 = state_23378__$1;(statearr_23409_23449[(2)] = inst_23345);
(statearr_23409_23449[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (26)))
{var inst_23368 = (state_23378[(2)]);var state_23378__$1 = state_23378;var statearr_23410_23450 = state_23378__$1;(statearr_23410_23450[(2)] = inst_23368);
(statearr_23410_23450[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (16)))
{var inst_23348 = (state_23378[(2)]);var inst_23349 = calc_state.call(null);var inst_23322 = inst_23349;var state_23378__$1 = (function (){var statearr_23411 = state_23378;(statearr_23411[(7)] = inst_23322);
(statearr_23411[(18)] = inst_23348);
return statearr_23411;
})();var statearr_23412_23451 = state_23378__$1;(statearr_23412_23451[(2)] = null);
(statearr_23412_23451[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (10)))
{var inst_23337 = (state_23378[(8)]);var inst_23338 = (state_23378[(15)]);var inst_23336 = (state_23378[(2)]);var inst_23337__$1 = cljs.core.nth.call(null,inst_23336,(0),null);var inst_23338__$1 = cljs.core.nth.call(null,inst_23336,(1),null);var inst_23339 = (inst_23337__$1 == null);var inst_23340 = cljs.core._EQ_.call(null,inst_23338__$1,change);var inst_23341 = (inst_23339) || (inst_23340);var state_23378__$1 = (function (){var statearr_23413 = state_23378;(statearr_23413[(8)] = inst_23337__$1);
(statearr_23413[(15)] = inst_23338__$1);
return statearr_23413;
})();if(cljs.core.truth_(inst_23341))
{var statearr_23414_23452 = state_23378__$1;(statearr_23414_23452[(1)] = (11));
} else
{var statearr_23415_23453 = state_23378__$1;(statearr_23415_23453[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (18)))
{var inst_23332 = (state_23378[(17)]);var inst_23338 = (state_23378[(15)]);var inst_23333 = (state_23378[(16)]);var inst_23355 = cljs.core.empty_QMARK_.call(null,inst_23333);var inst_23356 = inst_23332.call(null,inst_23338);var inst_23357 = cljs.core.not.call(null,inst_23356);var inst_23358 = (inst_23355) && (inst_23357);var state_23378__$1 = state_23378;var statearr_23416_23454 = state_23378__$1;(statearr_23416_23454[(2)] = inst_23358);
(statearr_23416_23454[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23379 === (8)))
{var inst_23322 = (state_23378[(7)]);var state_23378__$1 = state_23378;var statearr_23417_23455 = state_23378__$1;(statearr_23417_23455[(2)] = inst_23322);
(statearr_23417_23455[(1)] = (9));
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
});})(c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23421[(0)] = state_machine__15975__auto__);
(statearr_23421[(1)] = (1));
return statearr_23421;
});
var state_machine__15975__auto____1 = (function (state_23378){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23378);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23422){if((e23422 instanceof Object))
{var ex__15978__auto__ = e23422;var statearr_23423_23456 = state_23378;(statearr_23423_23456[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23422;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23457 = state_23378;
state_23378 = G__23457;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23378){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_23424 = f__15990__auto__.call(null);(statearr_23424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23425);
return statearr_23424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23425,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj23459 = {};return obj23459;
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
return (function (p1__23460_SHARP_){if(cljs.core.truth_(p1__23460_SHARP_.call(null,topic)))
{return p1__23460_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23460_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23583 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23583 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23584){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23584 = meta23584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23583.cljs$lang$type = true;
cljs.core.async.t23583.cljs$lang$ctorStr = "cljs.core.async/t23583";
cljs.core.async.t23583.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t23583");
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23583.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23585){var self__ = this;
var _23585__$1 = this;return self__.meta23584;
});})(mults,ensure_mult))
;
cljs.core.async.t23583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23585,meta23584__$1){var self__ = this;
var _23585__$1 = this;return (new cljs.core.async.t23583(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23584__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23583 = ((function (mults,ensure_mult){
return (function __GT_t23583(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23584){return (new cljs.core.async.t23583(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23584));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23583(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___23705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23705,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23705,mults,ensure_mult,p){
return (function (state_23657){var state_val_23658 = (state_23657[(1)]);if((state_val_23658 === (7)))
{var inst_23653 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23659_23706 = state_23657__$1;(statearr_23659_23706[(2)] = inst_23653);
(statearr_23659_23706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (20)))
{var state_23657__$1 = state_23657;var statearr_23660_23707 = state_23657__$1;(statearr_23660_23707[(2)] = null);
(statearr_23660_23707[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (1)))
{var state_23657__$1 = state_23657;var statearr_23661_23708 = state_23657__$1;(statearr_23661_23708[(2)] = null);
(statearr_23661_23708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (24)))
{var inst_23636 = (state_23657[(7)]);var inst_23645 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23636);var state_23657__$1 = state_23657;var statearr_23662_23709 = state_23657__$1;(statearr_23662_23709[(2)] = inst_23645);
(statearr_23662_23709[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (4)))
{var inst_23588 = (state_23657[(8)]);var inst_23588__$1 = (state_23657[(2)]);var inst_23589 = (inst_23588__$1 == null);var state_23657__$1 = (function (){var statearr_23663 = state_23657;(statearr_23663[(8)] = inst_23588__$1);
return statearr_23663;
})();if(cljs.core.truth_(inst_23589))
{var statearr_23664_23710 = state_23657__$1;(statearr_23664_23710[(1)] = (5));
} else
{var statearr_23665_23711 = state_23657__$1;(statearr_23665_23711[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (15)))
{var inst_23630 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23666_23712 = state_23657__$1;(statearr_23666_23712[(2)] = inst_23630);
(statearr_23666_23712[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (21)))
{var inst_23650 = (state_23657[(2)]);var state_23657__$1 = (function (){var statearr_23667 = state_23657;(statearr_23667[(9)] = inst_23650);
return statearr_23667;
})();var statearr_23668_23713 = state_23657__$1;(statearr_23668_23713[(2)] = null);
(statearr_23668_23713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (13)))
{var inst_23612 = (state_23657[(10)]);var inst_23614 = cljs.core.chunked_seq_QMARK_.call(null,inst_23612);var state_23657__$1 = state_23657;if(inst_23614)
{var statearr_23669_23714 = state_23657__$1;(statearr_23669_23714[(1)] = (16));
} else
{var statearr_23670_23715 = state_23657__$1;(statearr_23670_23715[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (22)))
{var inst_23642 = (state_23657[(2)]);var state_23657__$1 = state_23657;if(cljs.core.truth_(inst_23642))
{var statearr_23671_23716 = state_23657__$1;(statearr_23671_23716[(1)] = (23));
} else
{var statearr_23672_23717 = state_23657__$1;(statearr_23672_23717[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (6)))
{var inst_23638 = (state_23657[(11)]);var inst_23588 = (state_23657[(8)]);var inst_23636 = (state_23657[(7)]);var inst_23636__$1 = topic_fn.call(null,inst_23588);var inst_23637 = cljs.core.deref.call(null,mults);var inst_23638__$1 = cljs.core.get.call(null,inst_23637,inst_23636__$1);var state_23657__$1 = (function (){var statearr_23673 = state_23657;(statearr_23673[(11)] = inst_23638__$1);
(statearr_23673[(7)] = inst_23636__$1);
return statearr_23673;
})();if(cljs.core.truth_(inst_23638__$1))
{var statearr_23674_23718 = state_23657__$1;(statearr_23674_23718[(1)] = (19));
} else
{var statearr_23675_23719 = state_23657__$1;(statearr_23675_23719[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (25)))
{var inst_23647 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23676_23720 = state_23657__$1;(statearr_23676_23720[(2)] = inst_23647);
(statearr_23676_23720[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (17)))
{var inst_23612 = (state_23657[(10)]);var inst_23621 = cljs.core.first.call(null,inst_23612);var inst_23622 = cljs.core.async.muxch_STAR_.call(null,inst_23621);var inst_23623 = cljs.core.async.close_BANG_.call(null,inst_23622);var inst_23624 = cljs.core.next.call(null,inst_23612);var inst_23598 = inst_23624;var inst_23599 = null;var inst_23600 = (0);var inst_23601 = (0);var state_23657__$1 = (function (){var statearr_23677 = state_23657;(statearr_23677[(12)] = inst_23598);
(statearr_23677[(13)] = inst_23623);
(statearr_23677[(14)] = inst_23601);
(statearr_23677[(15)] = inst_23600);
(statearr_23677[(16)] = inst_23599);
return statearr_23677;
})();var statearr_23678_23721 = state_23657__$1;(statearr_23678_23721[(2)] = null);
(statearr_23678_23721[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (3)))
{var inst_23655 = (state_23657[(2)]);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23657__$1,inst_23655);
} else
{if((state_val_23658 === (12)))
{var inst_23632 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23679_23722 = state_23657__$1;(statearr_23679_23722[(2)] = inst_23632);
(statearr_23679_23722[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (2)))
{var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23657__$1,(4),ch);
} else
{if((state_val_23658 === (23)))
{var state_23657__$1 = state_23657;var statearr_23680_23723 = state_23657__$1;(statearr_23680_23723[(2)] = null);
(statearr_23680_23723[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (19)))
{var inst_23638 = (state_23657[(11)]);var inst_23588 = (state_23657[(8)]);var inst_23640 = cljs.core.async.muxch_STAR_.call(null,inst_23638);var state_23657__$1 = state_23657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23657__$1,(22),inst_23640,inst_23588);
} else
{if((state_val_23658 === (11)))
{var inst_23598 = (state_23657[(12)]);var inst_23612 = (state_23657[(10)]);var inst_23612__$1 = cljs.core.seq.call(null,inst_23598);var state_23657__$1 = (function (){var statearr_23681 = state_23657;(statearr_23681[(10)] = inst_23612__$1);
return statearr_23681;
})();if(inst_23612__$1)
{var statearr_23682_23724 = state_23657__$1;(statearr_23682_23724[(1)] = (13));
} else
{var statearr_23683_23725 = state_23657__$1;(statearr_23683_23725[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (9)))
{var inst_23634 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23684_23726 = state_23657__$1;(statearr_23684_23726[(2)] = inst_23634);
(statearr_23684_23726[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (5)))
{var inst_23595 = cljs.core.deref.call(null,mults);var inst_23596 = cljs.core.vals.call(null,inst_23595);var inst_23597 = cljs.core.seq.call(null,inst_23596);var inst_23598 = inst_23597;var inst_23599 = null;var inst_23600 = (0);var inst_23601 = (0);var state_23657__$1 = (function (){var statearr_23685 = state_23657;(statearr_23685[(12)] = inst_23598);
(statearr_23685[(14)] = inst_23601);
(statearr_23685[(15)] = inst_23600);
(statearr_23685[(16)] = inst_23599);
return statearr_23685;
})();var statearr_23686_23727 = state_23657__$1;(statearr_23686_23727[(2)] = null);
(statearr_23686_23727[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (14)))
{var state_23657__$1 = state_23657;var statearr_23690_23728 = state_23657__$1;(statearr_23690_23728[(2)] = null);
(statearr_23690_23728[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (16)))
{var inst_23612 = (state_23657[(10)]);var inst_23616 = cljs.core.chunk_first.call(null,inst_23612);var inst_23617 = cljs.core.chunk_rest.call(null,inst_23612);var inst_23618 = cljs.core.count.call(null,inst_23616);var inst_23598 = inst_23617;var inst_23599 = inst_23616;var inst_23600 = inst_23618;var inst_23601 = (0);var state_23657__$1 = (function (){var statearr_23691 = state_23657;(statearr_23691[(12)] = inst_23598);
(statearr_23691[(14)] = inst_23601);
(statearr_23691[(15)] = inst_23600);
(statearr_23691[(16)] = inst_23599);
return statearr_23691;
})();var statearr_23692_23729 = state_23657__$1;(statearr_23692_23729[(2)] = null);
(statearr_23692_23729[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (10)))
{var inst_23598 = (state_23657[(12)]);var inst_23601 = (state_23657[(14)]);var inst_23600 = (state_23657[(15)]);var inst_23599 = (state_23657[(16)]);var inst_23606 = cljs.core._nth.call(null,inst_23599,inst_23601);var inst_23607 = cljs.core.async.muxch_STAR_.call(null,inst_23606);var inst_23608 = cljs.core.async.close_BANG_.call(null,inst_23607);var inst_23609 = (inst_23601 + (1));var tmp23687 = inst_23598;var tmp23688 = inst_23600;var tmp23689 = inst_23599;var inst_23598__$1 = tmp23687;var inst_23599__$1 = tmp23689;var inst_23600__$1 = tmp23688;var inst_23601__$1 = inst_23609;var state_23657__$1 = (function (){var statearr_23693 = state_23657;(statearr_23693[(12)] = inst_23598__$1);
(statearr_23693[(17)] = inst_23608);
(statearr_23693[(14)] = inst_23601__$1);
(statearr_23693[(15)] = inst_23600__$1);
(statearr_23693[(16)] = inst_23599__$1);
return statearr_23693;
})();var statearr_23694_23730 = state_23657__$1;(statearr_23694_23730[(2)] = null);
(statearr_23694_23730[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (18)))
{var inst_23627 = (state_23657[(2)]);var state_23657__$1 = state_23657;var statearr_23695_23731 = state_23657__$1;(statearr_23695_23731[(2)] = inst_23627);
(statearr_23695_23731[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23658 === (8)))
{var inst_23601 = (state_23657[(14)]);var inst_23600 = (state_23657[(15)]);var inst_23603 = (inst_23601 < inst_23600);var inst_23604 = inst_23603;var state_23657__$1 = state_23657;if(cljs.core.truth_(inst_23604))
{var statearr_23696_23732 = state_23657__$1;(statearr_23696_23732[(1)] = (10));
} else
{var statearr_23697_23733 = state_23657__$1;(statearr_23697_23733[(1)] = (11));
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
});})(c__15989__auto___23705,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___23705,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23701[(0)] = state_machine__15975__auto__);
(statearr_23701[(1)] = (1));
return statearr_23701;
});
var state_machine__15975__auto____1 = (function (state_23657){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23657);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23702){if((e23702 instanceof Object))
{var ex__15978__auto__ = e23702;var statearr_23703_23734 = state_23657;(statearr_23703_23734[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23735 = state_23657;
state_23657 = G__23735;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23657){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23705,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_23704 = f__15990__auto__.call(null);(statearr_23704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23705);
return statearr_23704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23705,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___23872 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23842){var state_val_23843 = (state_23842[(1)]);if((state_val_23843 === (7)))
{var state_23842__$1 = state_23842;var statearr_23844_23873 = state_23842__$1;(statearr_23844_23873[(2)] = null);
(statearr_23844_23873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (1)))
{var state_23842__$1 = state_23842;var statearr_23845_23874 = state_23842__$1;(statearr_23845_23874[(2)] = null);
(statearr_23845_23874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (4)))
{var inst_23806 = (state_23842[(7)]);var inst_23808 = (inst_23806 < cnt);var state_23842__$1 = state_23842;if(cljs.core.truth_(inst_23808))
{var statearr_23846_23875 = state_23842__$1;(statearr_23846_23875[(1)] = (6));
} else
{var statearr_23847_23876 = state_23842__$1;(statearr_23847_23876[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (15)))
{var inst_23838 = (state_23842[(2)]);var state_23842__$1 = state_23842;var statearr_23848_23877 = state_23842__$1;(statearr_23848_23877[(2)] = inst_23838);
(statearr_23848_23877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (13)))
{var inst_23831 = cljs.core.async.close_BANG_.call(null,out);var state_23842__$1 = state_23842;var statearr_23849_23878 = state_23842__$1;(statearr_23849_23878[(2)] = inst_23831);
(statearr_23849_23878[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (6)))
{var state_23842__$1 = state_23842;var statearr_23850_23879 = state_23842__$1;(statearr_23850_23879[(2)] = null);
(statearr_23850_23879[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (3)))
{var inst_23840 = (state_23842[(2)]);var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23842__$1,inst_23840);
} else
{if((state_val_23843 === (12)))
{var inst_23828 = (state_23842[(8)]);var inst_23828__$1 = (state_23842[(2)]);var inst_23829 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23828__$1);var state_23842__$1 = (function (){var statearr_23851 = state_23842;(statearr_23851[(8)] = inst_23828__$1);
return statearr_23851;
})();if(cljs.core.truth_(inst_23829))
{var statearr_23852_23880 = state_23842__$1;(statearr_23852_23880[(1)] = (13));
} else
{var statearr_23853_23881 = state_23842__$1;(statearr_23853_23881[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (2)))
{var inst_23805 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23806 = (0);var state_23842__$1 = (function (){var statearr_23854 = state_23842;(statearr_23854[(7)] = inst_23806);
(statearr_23854[(9)] = inst_23805);
return statearr_23854;
})();var statearr_23855_23882 = state_23842__$1;(statearr_23855_23882[(2)] = null);
(statearr_23855_23882[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (11)))
{var inst_23806 = (state_23842[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23842,(10),Object,null,(9));var inst_23815 = chs__$1.call(null,inst_23806);var inst_23816 = done.call(null,inst_23806);var inst_23817 = cljs.core.async.take_BANG_.call(null,inst_23815,inst_23816);var state_23842__$1 = state_23842;var statearr_23856_23883 = state_23842__$1;(statearr_23856_23883[(2)] = inst_23817);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (9)))
{var inst_23806 = (state_23842[(7)]);var inst_23819 = (state_23842[(2)]);var inst_23820 = (inst_23806 + (1));var inst_23806__$1 = inst_23820;var state_23842__$1 = (function (){var statearr_23857 = state_23842;(statearr_23857[(7)] = inst_23806__$1);
(statearr_23857[(10)] = inst_23819);
return statearr_23857;
})();var statearr_23858_23884 = state_23842__$1;(statearr_23858_23884[(2)] = null);
(statearr_23858_23884[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (5)))
{var inst_23826 = (state_23842[(2)]);var state_23842__$1 = (function (){var statearr_23859 = state_23842;(statearr_23859[(11)] = inst_23826);
return statearr_23859;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23842__$1,(12),dchan);
} else
{if((state_val_23843 === (14)))
{var inst_23828 = (state_23842[(8)]);var inst_23833 = cljs.core.apply.call(null,f,inst_23828);var state_23842__$1 = state_23842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23842__$1,(16),out,inst_23833);
} else
{if((state_val_23843 === (16)))
{var inst_23835 = (state_23842[(2)]);var state_23842__$1 = (function (){var statearr_23860 = state_23842;(statearr_23860[(12)] = inst_23835);
return statearr_23860;
})();var statearr_23861_23885 = state_23842__$1;(statearr_23861_23885[(2)] = null);
(statearr_23861_23885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (10)))
{var inst_23810 = (state_23842[(2)]);var inst_23811 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23842__$1 = (function (){var statearr_23862 = state_23842;(statearr_23862[(13)] = inst_23810);
return statearr_23862;
})();var statearr_23863_23886 = state_23842__$1;(statearr_23863_23886[(2)] = inst_23811);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23843 === (8)))
{var inst_23824 = (state_23842[(2)]);var state_23842__$1 = state_23842;var statearr_23864_23887 = state_23842__$1;(statearr_23864_23887[(2)] = inst_23824);
(statearr_23864_23887[(1)] = (5));
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
});})(c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23868[(0)] = state_machine__15975__auto__);
(statearr_23868[(1)] = (1));
return statearr_23868;
});
var state_machine__15975__auto____1 = (function (state_23842){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23842);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23869){if((e23869 instanceof Object))
{var ex__15978__auto__ = e23869;var statearr_23870_23888 = state_23842;(statearr_23870_23888[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23869;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23889 = state_23842;
state_23842 = G__23889;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23842){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_23871 = f__15990__auto__.call(null);(statearr_23871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23872);
return statearr_23871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23872,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___23997 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___23997,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___23997,out){
return (function (state_23973){var state_val_23974 = (state_23973[(1)]);if((state_val_23974 === (7)))
{var inst_23953 = (state_23973[(7)]);var inst_23952 = (state_23973[(8)]);var inst_23952__$1 = (state_23973[(2)]);var inst_23953__$1 = cljs.core.nth.call(null,inst_23952__$1,(0),null);var inst_23954 = cljs.core.nth.call(null,inst_23952__$1,(1),null);var inst_23955 = (inst_23953__$1 == null);var state_23973__$1 = (function (){var statearr_23975 = state_23973;(statearr_23975[(9)] = inst_23954);
(statearr_23975[(7)] = inst_23953__$1);
(statearr_23975[(8)] = inst_23952__$1);
return statearr_23975;
})();if(cljs.core.truth_(inst_23955))
{var statearr_23976_23998 = state_23973__$1;(statearr_23976_23998[(1)] = (8));
} else
{var statearr_23977_23999 = state_23973__$1;(statearr_23977_23999[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (1)))
{var inst_23944 = cljs.core.vec.call(null,chs);var inst_23945 = inst_23944;var state_23973__$1 = (function (){var statearr_23978 = state_23973;(statearr_23978[(10)] = inst_23945);
return statearr_23978;
})();var statearr_23979_24000 = state_23973__$1;(statearr_23979_24000[(2)] = null);
(statearr_23979_24000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (4)))
{var inst_23945 = (state_23973[(10)]);var state_23973__$1 = state_23973;return cljs.core.async.ioc_alts_BANG_.call(null,state_23973__$1,(7),inst_23945);
} else
{if((state_val_23974 === (6)))
{var inst_23969 = (state_23973[(2)]);var state_23973__$1 = state_23973;var statearr_23980_24001 = state_23973__$1;(statearr_23980_24001[(2)] = inst_23969);
(statearr_23980_24001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (3)))
{var inst_23971 = (state_23973[(2)]);var state_23973__$1 = state_23973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23973__$1,inst_23971);
} else
{if((state_val_23974 === (2)))
{var inst_23945 = (state_23973[(10)]);var inst_23947 = cljs.core.count.call(null,inst_23945);var inst_23948 = (inst_23947 > (0));var state_23973__$1 = state_23973;if(cljs.core.truth_(inst_23948))
{var statearr_23982_24002 = state_23973__$1;(statearr_23982_24002[(1)] = (4));
} else
{var statearr_23983_24003 = state_23973__$1;(statearr_23983_24003[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (11)))
{var inst_23945 = (state_23973[(10)]);var inst_23962 = (state_23973[(2)]);var tmp23981 = inst_23945;var inst_23945__$1 = tmp23981;var state_23973__$1 = (function (){var statearr_23984 = state_23973;(statearr_23984[(10)] = inst_23945__$1);
(statearr_23984[(11)] = inst_23962);
return statearr_23984;
})();var statearr_23985_24004 = state_23973__$1;(statearr_23985_24004[(2)] = null);
(statearr_23985_24004[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (9)))
{var inst_23953 = (state_23973[(7)]);var state_23973__$1 = state_23973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23973__$1,(11),out,inst_23953);
} else
{if((state_val_23974 === (5)))
{var inst_23967 = cljs.core.async.close_BANG_.call(null,out);var state_23973__$1 = state_23973;var statearr_23986_24005 = state_23973__$1;(statearr_23986_24005[(2)] = inst_23967);
(statearr_23986_24005[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (10)))
{var inst_23965 = (state_23973[(2)]);var state_23973__$1 = state_23973;var statearr_23987_24006 = state_23973__$1;(statearr_23987_24006[(2)] = inst_23965);
(statearr_23987_24006[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23974 === (8)))
{var inst_23954 = (state_23973[(9)]);var inst_23953 = (state_23973[(7)]);var inst_23945 = (state_23973[(10)]);var inst_23952 = (state_23973[(8)]);var inst_23957 = (function (){var c = inst_23954;var v = inst_23953;var vec__23950 = inst_23952;var cs = inst_23945;return ((function (c,v,vec__23950,cs,inst_23954,inst_23953,inst_23945,inst_23952,state_val_23974,c__15989__auto___23997,out){
return (function (p1__23890_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23890_SHARP_);
});
;})(c,v,vec__23950,cs,inst_23954,inst_23953,inst_23945,inst_23952,state_val_23974,c__15989__auto___23997,out))
})();var inst_23958 = cljs.core.filterv.call(null,inst_23957,inst_23945);var inst_23945__$1 = inst_23958;var state_23973__$1 = (function (){var statearr_23988 = state_23973;(statearr_23988[(10)] = inst_23945__$1);
return statearr_23988;
})();var statearr_23989_24007 = state_23973__$1;(statearr_23989_24007[(2)] = null);
(statearr_23989_24007[(1)] = (2));
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
});})(c__15989__auto___23997,out))
;return ((function (switch__15974__auto__,c__15989__auto___23997,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_23993 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23993[(0)] = state_machine__15975__auto__);
(statearr_23993[(1)] = (1));
return statearr_23993;
});
var state_machine__15975__auto____1 = (function (state_23973){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_23973);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e23994){if((e23994 instanceof Object))
{var ex__15978__auto__ = e23994;var statearr_23995_24008 = state_23973;(statearr_23995_24008[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24009 = state_23973;
state_23973 = G__24009;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_23973){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_23973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___23997,out))
})();var state__15991__auto__ = (function (){var statearr_23996 = f__15990__auto__.call(null);(statearr_23996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___23997);
return statearr_23996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___23997,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24102 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24102,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24102,out){
return (function (state_24079){var state_val_24080 = (state_24079[(1)]);if((state_val_24080 === (7)))
{var inst_24061 = (state_24079[(7)]);var inst_24061__$1 = (state_24079[(2)]);var inst_24062 = (inst_24061__$1 == null);var inst_24063 = cljs.core.not.call(null,inst_24062);var state_24079__$1 = (function (){var statearr_24081 = state_24079;(statearr_24081[(7)] = inst_24061__$1);
return statearr_24081;
})();if(inst_24063)
{var statearr_24082_24103 = state_24079__$1;(statearr_24082_24103[(1)] = (8));
} else
{var statearr_24083_24104 = state_24079__$1;(statearr_24083_24104[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (1)))
{var inst_24056 = (0);var state_24079__$1 = (function (){var statearr_24084 = state_24079;(statearr_24084[(8)] = inst_24056);
return statearr_24084;
})();var statearr_24085_24105 = state_24079__$1;(statearr_24085_24105[(2)] = null);
(statearr_24085_24105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (4)))
{var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24079__$1,(7),ch);
} else
{if((state_val_24080 === (6)))
{var inst_24074 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24086_24106 = state_24079__$1;(statearr_24086_24106[(2)] = inst_24074);
(statearr_24086_24106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (3)))
{var inst_24076 = (state_24079[(2)]);var inst_24077 = cljs.core.async.close_BANG_.call(null,out);var state_24079__$1 = (function (){var statearr_24087 = state_24079;(statearr_24087[(9)] = inst_24076);
return statearr_24087;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24079__$1,inst_24077);
} else
{if((state_val_24080 === (2)))
{var inst_24056 = (state_24079[(8)]);var inst_24058 = (inst_24056 < n);var state_24079__$1 = state_24079;if(cljs.core.truth_(inst_24058))
{var statearr_24088_24107 = state_24079__$1;(statearr_24088_24107[(1)] = (4));
} else
{var statearr_24089_24108 = state_24079__$1;(statearr_24089_24108[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (11)))
{var inst_24056 = (state_24079[(8)]);var inst_24066 = (state_24079[(2)]);var inst_24067 = (inst_24056 + (1));var inst_24056__$1 = inst_24067;var state_24079__$1 = (function (){var statearr_24090 = state_24079;(statearr_24090[(8)] = inst_24056__$1);
(statearr_24090[(10)] = inst_24066);
return statearr_24090;
})();var statearr_24091_24109 = state_24079__$1;(statearr_24091_24109[(2)] = null);
(statearr_24091_24109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (9)))
{var state_24079__$1 = state_24079;var statearr_24092_24110 = state_24079__$1;(statearr_24092_24110[(2)] = null);
(statearr_24092_24110[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (5)))
{var state_24079__$1 = state_24079;var statearr_24093_24111 = state_24079__$1;(statearr_24093_24111[(2)] = null);
(statearr_24093_24111[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (10)))
{var inst_24071 = (state_24079[(2)]);var state_24079__$1 = state_24079;var statearr_24094_24112 = state_24079__$1;(statearr_24094_24112[(2)] = inst_24071);
(statearr_24094_24112[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24080 === (8)))
{var inst_24061 = (state_24079[(7)]);var state_24079__$1 = state_24079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24079__$1,(11),out,inst_24061);
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
});})(c__15989__auto___24102,out))
;return ((function (switch__15974__auto__,c__15989__auto___24102,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24098 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24098[(0)] = state_machine__15975__auto__);
(statearr_24098[(1)] = (1));
return statearr_24098;
});
var state_machine__15975__auto____1 = (function (state_24079){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24079);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24099){if((e24099 instanceof Object))
{var ex__15978__auto__ = e24099;var statearr_24100_24113 = state_24079;(statearr_24100_24113[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24099;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24114 = state_24079;
state_24079 = G__24114;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24079){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24102,out))
})();var state__15991__auto__ = (function (){var statearr_24101 = f__15990__auto__.call(null);(statearr_24101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24102);
return statearr_24101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24102,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24122 = (function (ch,f,map_LT_,meta24123){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24123 = meta24123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24122.cljs$lang$type = true;
cljs.core.async.t24122.cljs$lang$ctorStr = "cljs.core.async/t24122";
cljs.core.async.t24122.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24122");
});
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24125 = (function (fn1,_,meta24123,ch,f,map_LT_,meta24126){
this.fn1 = fn1;
this._ = _;
this.meta24123 = meta24123;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24126 = meta24126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24125.cljs$lang$type = true;
cljs.core.async.t24125.cljs$lang$ctorStr = "cljs.core.async/t24125";
cljs.core.async.t24125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24125");
});})(___$1))
;
cljs.core.async.t24125.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24115_SHARP_){return f1.call(null,(((p1__24115_SHARP_ == null))?null:self__.f.call(null,p1__24115_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24127){var self__ = this;
var _24127__$1 = this;return self__.meta24126;
});})(___$1))
;
cljs.core.async.t24125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24127,meta24126__$1){var self__ = this;
var _24127__$1 = this;return (new cljs.core.async.t24125(self__.fn1,self__._,self__.meta24123,self__.ch,self__.f,self__.map_LT_,meta24126__$1));
});})(___$1))
;
cljs.core.async.__GT_t24125 = ((function (___$1){
return (function __GT_t24125(fn1__$1,___$2,meta24123__$1,ch__$2,f__$2,map_LT___$2,meta24126){return (new cljs.core.async.t24125(fn1__$1,___$2,meta24123__$1,ch__$2,f__$2,map_LT___$2,meta24126));
});})(___$1))
;
}
return (new cljs.core.async.t24125(fn1,___$1,self__.meta24123,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24124){var self__ = this;
var _24124__$1 = this;return self__.meta24123;
});
cljs.core.async.t24122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24124,meta24123__$1){var self__ = this;
var _24124__$1 = this;return (new cljs.core.async.t24122(self__.ch,self__.f,self__.map_LT_,meta24123__$1));
});
cljs.core.async.__GT_t24122 = (function __GT_t24122(ch__$1,f__$1,map_LT___$1,meta24123){return (new cljs.core.async.t24122(ch__$1,f__$1,map_LT___$1,meta24123));
});
}
return (new cljs.core.async.t24122(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24131 = (function (ch,f,map_GT_,meta24132){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24132 = meta24132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24131.cljs$lang$type = true;
cljs.core.async.t24131.cljs$lang$ctorStr = "cljs.core.async/t24131";
cljs.core.async.t24131.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24131");
});
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24133){var self__ = this;
var _24133__$1 = this;return self__.meta24132;
});
cljs.core.async.t24131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24133,meta24132__$1){var self__ = this;
var _24133__$1 = this;return (new cljs.core.async.t24131(self__.ch,self__.f,self__.map_GT_,meta24132__$1));
});
cljs.core.async.__GT_t24131 = (function __GT_t24131(ch__$1,f__$1,map_GT___$1,meta24132){return (new cljs.core.async.t24131(ch__$1,f__$1,map_GT___$1,meta24132));
});
}
return (new cljs.core.async.t24131(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24137 = (function (ch,p,filter_GT_,meta24138){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24138 = meta24138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24137.cljs$lang$type = true;
cljs.core.async.t24137.cljs$lang$ctorStr = "cljs.core.async/t24137";
cljs.core.async.t24137.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t24137");
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24139){var self__ = this;
var _24139__$1 = this;return self__.meta24138;
});
cljs.core.async.t24137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24139,meta24138__$1){var self__ = this;
var _24139__$1 = this;return (new cljs.core.async.t24137(self__.ch,self__.p,self__.filter_GT_,meta24138__$1));
});
cljs.core.async.__GT_t24137 = (function __GT_t24137(ch__$1,p__$1,filter_GT___$1,meta24138){return (new cljs.core.async.t24137(ch__$1,p__$1,filter_GT___$1,meta24138));
});
}
return (new cljs.core.async.t24137(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24222 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24222,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24222,out){
return (function (state_24201){var state_val_24202 = (state_24201[(1)]);if((state_val_24202 === (7)))
{var inst_24197 = (state_24201[(2)]);var state_24201__$1 = state_24201;var statearr_24203_24223 = state_24201__$1;(statearr_24203_24223[(2)] = inst_24197);
(statearr_24203_24223[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (1)))
{var state_24201__$1 = state_24201;var statearr_24204_24224 = state_24201__$1;(statearr_24204_24224[(2)] = null);
(statearr_24204_24224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (4)))
{var inst_24183 = (state_24201[(7)]);var inst_24183__$1 = (state_24201[(2)]);var inst_24184 = (inst_24183__$1 == null);var state_24201__$1 = (function (){var statearr_24205 = state_24201;(statearr_24205[(7)] = inst_24183__$1);
return statearr_24205;
})();if(cljs.core.truth_(inst_24184))
{var statearr_24206_24225 = state_24201__$1;(statearr_24206_24225[(1)] = (5));
} else
{var statearr_24207_24226 = state_24201__$1;(statearr_24207_24226[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (6)))
{var inst_24183 = (state_24201[(7)]);var inst_24188 = p.call(null,inst_24183);var state_24201__$1 = state_24201;if(cljs.core.truth_(inst_24188))
{var statearr_24208_24227 = state_24201__$1;(statearr_24208_24227[(1)] = (8));
} else
{var statearr_24209_24228 = state_24201__$1;(statearr_24209_24228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (3)))
{var inst_24199 = (state_24201[(2)]);var state_24201__$1 = state_24201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24201__$1,inst_24199);
} else
{if((state_val_24202 === (2)))
{var state_24201__$1 = state_24201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24201__$1,(4),ch);
} else
{if((state_val_24202 === (11)))
{var inst_24191 = (state_24201[(2)]);var state_24201__$1 = state_24201;var statearr_24210_24229 = state_24201__$1;(statearr_24210_24229[(2)] = inst_24191);
(statearr_24210_24229[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (9)))
{var state_24201__$1 = state_24201;var statearr_24211_24230 = state_24201__$1;(statearr_24211_24230[(2)] = null);
(statearr_24211_24230[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (5)))
{var inst_24186 = cljs.core.async.close_BANG_.call(null,out);var state_24201__$1 = state_24201;var statearr_24212_24231 = state_24201__$1;(statearr_24212_24231[(2)] = inst_24186);
(statearr_24212_24231[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (10)))
{var inst_24194 = (state_24201[(2)]);var state_24201__$1 = (function (){var statearr_24213 = state_24201;(statearr_24213[(8)] = inst_24194);
return statearr_24213;
})();var statearr_24214_24232 = state_24201__$1;(statearr_24214_24232[(2)] = null);
(statearr_24214_24232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24202 === (8)))
{var inst_24183 = (state_24201[(7)]);var state_24201__$1 = state_24201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24201__$1,(11),out,inst_24183);
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
});})(c__15989__auto___24222,out))
;return ((function (switch__15974__auto__,c__15989__auto___24222,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24218 = [null,null,null,null,null,null,null,null,null];(statearr_24218[(0)] = state_machine__15975__auto__);
(statearr_24218[(1)] = (1));
return statearr_24218;
});
var state_machine__15975__auto____1 = (function (state_24201){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24201);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24219){if((e24219 instanceof Object))
{var ex__15978__auto__ = e24219;var statearr_24220_24233 = state_24201;(statearr_24220_24233[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24219;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24234 = state_24201;
state_24201 = G__24234;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24201){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24222,out))
})();var state__15991__auto__ = (function (){var statearr_24221 = f__15990__auto__.call(null);(statearr_24221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24222);
return statearr_24221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24222,out))
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
return (function (state_24400){var state_val_24401 = (state_24400[(1)]);if((state_val_24401 === (7)))
{var inst_24396 = (state_24400[(2)]);var state_24400__$1 = state_24400;var statearr_24402_24443 = state_24400__$1;(statearr_24402_24443[(2)] = inst_24396);
(statearr_24402_24443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (20)))
{var inst_24366 = (state_24400[(7)]);var inst_24377 = (state_24400[(2)]);var inst_24378 = cljs.core.next.call(null,inst_24366);var inst_24352 = inst_24378;var inst_24353 = null;var inst_24354 = (0);var inst_24355 = (0);var state_24400__$1 = (function (){var statearr_24403 = state_24400;(statearr_24403[(8)] = inst_24353);
(statearr_24403[(9)] = inst_24355);
(statearr_24403[(10)] = inst_24354);
(statearr_24403[(11)] = inst_24377);
(statearr_24403[(12)] = inst_24352);
return statearr_24403;
})();var statearr_24404_24444 = state_24400__$1;(statearr_24404_24444[(2)] = null);
(statearr_24404_24444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (1)))
{var state_24400__$1 = state_24400;var statearr_24405_24445 = state_24400__$1;(statearr_24405_24445[(2)] = null);
(statearr_24405_24445[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (4)))
{var inst_24341 = (state_24400[(13)]);var inst_24341__$1 = (state_24400[(2)]);var inst_24342 = (inst_24341__$1 == null);var state_24400__$1 = (function (){var statearr_24406 = state_24400;(statearr_24406[(13)] = inst_24341__$1);
return statearr_24406;
})();if(cljs.core.truth_(inst_24342))
{var statearr_24407_24446 = state_24400__$1;(statearr_24407_24446[(1)] = (5));
} else
{var statearr_24408_24447 = state_24400__$1;(statearr_24408_24447[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (15)))
{var state_24400__$1 = state_24400;var statearr_24412_24448 = state_24400__$1;(statearr_24412_24448[(2)] = null);
(statearr_24412_24448[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (21)))
{var state_24400__$1 = state_24400;var statearr_24413_24449 = state_24400__$1;(statearr_24413_24449[(2)] = null);
(statearr_24413_24449[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (13)))
{var inst_24353 = (state_24400[(8)]);var inst_24355 = (state_24400[(9)]);var inst_24354 = (state_24400[(10)]);var inst_24352 = (state_24400[(12)]);var inst_24362 = (state_24400[(2)]);var inst_24363 = (inst_24355 + (1));var tmp24409 = inst_24353;var tmp24410 = inst_24354;var tmp24411 = inst_24352;var inst_24352__$1 = tmp24411;var inst_24353__$1 = tmp24409;var inst_24354__$1 = tmp24410;var inst_24355__$1 = inst_24363;var state_24400__$1 = (function (){var statearr_24414 = state_24400;(statearr_24414[(8)] = inst_24353__$1);
(statearr_24414[(9)] = inst_24355__$1);
(statearr_24414[(10)] = inst_24354__$1);
(statearr_24414[(12)] = inst_24352__$1);
(statearr_24414[(14)] = inst_24362);
return statearr_24414;
})();var statearr_24415_24450 = state_24400__$1;(statearr_24415_24450[(2)] = null);
(statearr_24415_24450[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (22)))
{var state_24400__$1 = state_24400;var statearr_24416_24451 = state_24400__$1;(statearr_24416_24451[(2)] = null);
(statearr_24416_24451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (6)))
{var inst_24341 = (state_24400[(13)]);var inst_24350 = f.call(null,inst_24341);var inst_24351 = cljs.core.seq.call(null,inst_24350);var inst_24352 = inst_24351;var inst_24353 = null;var inst_24354 = (0);var inst_24355 = (0);var state_24400__$1 = (function (){var statearr_24417 = state_24400;(statearr_24417[(8)] = inst_24353);
(statearr_24417[(9)] = inst_24355);
(statearr_24417[(10)] = inst_24354);
(statearr_24417[(12)] = inst_24352);
return statearr_24417;
})();var statearr_24418_24452 = state_24400__$1;(statearr_24418_24452[(2)] = null);
(statearr_24418_24452[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (17)))
{var inst_24366 = (state_24400[(7)]);var inst_24370 = cljs.core.chunk_first.call(null,inst_24366);var inst_24371 = cljs.core.chunk_rest.call(null,inst_24366);var inst_24372 = cljs.core.count.call(null,inst_24370);var inst_24352 = inst_24371;var inst_24353 = inst_24370;var inst_24354 = inst_24372;var inst_24355 = (0);var state_24400__$1 = (function (){var statearr_24419 = state_24400;(statearr_24419[(8)] = inst_24353);
(statearr_24419[(9)] = inst_24355);
(statearr_24419[(10)] = inst_24354);
(statearr_24419[(12)] = inst_24352);
return statearr_24419;
})();var statearr_24420_24453 = state_24400__$1;(statearr_24420_24453[(2)] = null);
(statearr_24420_24453[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (3)))
{var inst_24398 = (state_24400[(2)]);var state_24400__$1 = state_24400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24400__$1,inst_24398);
} else
{if((state_val_24401 === (12)))
{var inst_24386 = (state_24400[(2)]);var state_24400__$1 = state_24400;var statearr_24421_24454 = state_24400__$1;(statearr_24421_24454[(2)] = inst_24386);
(statearr_24421_24454[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (2)))
{var state_24400__$1 = state_24400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(4),in$);
} else
{if((state_val_24401 === (23)))
{var inst_24394 = (state_24400[(2)]);var state_24400__$1 = state_24400;var statearr_24422_24455 = state_24400__$1;(statearr_24422_24455[(2)] = inst_24394);
(statearr_24422_24455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (19)))
{var inst_24381 = (state_24400[(2)]);var state_24400__$1 = state_24400;var statearr_24423_24456 = state_24400__$1;(statearr_24423_24456[(2)] = inst_24381);
(statearr_24423_24456[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (11)))
{var inst_24366 = (state_24400[(7)]);var inst_24352 = (state_24400[(12)]);var inst_24366__$1 = cljs.core.seq.call(null,inst_24352);var state_24400__$1 = (function (){var statearr_24424 = state_24400;(statearr_24424[(7)] = inst_24366__$1);
return statearr_24424;
})();if(inst_24366__$1)
{var statearr_24425_24457 = state_24400__$1;(statearr_24425_24457[(1)] = (14));
} else
{var statearr_24426_24458 = state_24400__$1;(statearr_24426_24458[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (9)))
{var inst_24388 = (state_24400[(2)]);var inst_24389 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24400__$1 = (function (){var statearr_24427 = state_24400;(statearr_24427[(15)] = inst_24388);
return statearr_24427;
})();if(cljs.core.truth_(inst_24389))
{var statearr_24428_24459 = state_24400__$1;(statearr_24428_24459[(1)] = (21));
} else
{var statearr_24429_24460 = state_24400__$1;(statearr_24429_24460[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (5)))
{var inst_24344 = cljs.core.async.close_BANG_.call(null,out);var state_24400__$1 = state_24400;var statearr_24430_24461 = state_24400__$1;(statearr_24430_24461[(2)] = inst_24344);
(statearr_24430_24461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (14)))
{var inst_24366 = (state_24400[(7)]);var inst_24368 = cljs.core.chunked_seq_QMARK_.call(null,inst_24366);var state_24400__$1 = state_24400;if(inst_24368)
{var statearr_24431_24462 = state_24400__$1;(statearr_24431_24462[(1)] = (17));
} else
{var statearr_24432_24463 = state_24400__$1;(statearr_24432_24463[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (16)))
{var inst_24384 = (state_24400[(2)]);var state_24400__$1 = state_24400;var statearr_24433_24464 = state_24400__$1;(statearr_24433_24464[(2)] = inst_24384);
(statearr_24433_24464[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24401 === (10)))
{var inst_24353 = (state_24400[(8)]);var inst_24355 = (state_24400[(9)]);var inst_24360 = cljs.core._nth.call(null,inst_24353,inst_24355);var state_24400__$1 = state_24400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24400__$1,(13),out,inst_24360);
} else
{if((state_val_24401 === (18)))
{var inst_24366 = (state_24400[(7)]);var inst_24375 = cljs.core.first.call(null,inst_24366);var state_24400__$1 = state_24400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24400__$1,(20),out,inst_24375);
} else
{if((state_val_24401 === (8)))
{var inst_24355 = (state_24400[(9)]);var inst_24354 = (state_24400[(10)]);var inst_24357 = (inst_24355 < inst_24354);var inst_24358 = inst_24357;var state_24400__$1 = state_24400;if(cljs.core.truth_(inst_24358))
{var statearr_24434_24465 = state_24400__$1;(statearr_24434_24465[(1)] = (10));
} else
{var statearr_24435_24466 = state_24400__$1;(statearr_24435_24466[(1)] = (11));
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
var state_machine__15975__auto____0 = (function (){var statearr_24439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24439[(0)] = state_machine__15975__auto__);
(statearr_24439[(1)] = (1));
return statearr_24439;
});
var state_machine__15975__auto____1 = (function (state_24400){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24400);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24440){if((e24440 instanceof Object))
{var ex__15978__auto__ = e24440;var statearr_24441_24467 = state_24400;(statearr_24441_24467[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24440;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24468 = state_24400;
state_24400 = G__24468;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24400){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_24442 = f__15990__auto__.call(null);(statearr_24442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_24442;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24565 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24565,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24565,out){
return (function (state_24540){var state_val_24541 = (state_24540[(1)]);if((state_val_24541 === (7)))
{var inst_24535 = (state_24540[(2)]);var state_24540__$1 = state_24540;var statearr_24542_24566 = state_24540__$1;(statearr_24542_24566[(2)] = inst_24535);
(statearr_24542_24566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (1)))
{var inst_24517 = null;var state_24540__$1 = (function (){var statearr_24543 = state_24540;(statearr_24543[(7)] = inst_24517);
return statearr_24543;
})();var statearr_24544_24567 = state_24540__$1;(statearr_24544_24567[(2)] = null);
(statearr_24544_24567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (4)))
{var inst_24520 = (state_24540[(8)]);var inst_24520__$1 = (state_24540[(2)]);var inst_24521 = (inst_24520__$1 == null);var inst_24522 = cljs.core.not.call(null,inst_24521);var state_24540__$1 = (function (){var statearr_24545 = state_24540;(statearr_24545[(8)] = inst_24520__$1);
return statearr_24545;
})();if(inst_24522)
{var statearr_24546_24568 = state_24540__$1;(statearr_24546_24568[(1)] = (5));
} else
{var statearr_24547_24569 = state_24540__$1;(statearr_24547_24569[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (6)))
{var state_24540__$1 = state_24540;var statearr_24548_24570 = state_24540__$1;(statearr_24548_24570[(2)] = null);
(statearr_24548_24570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (3)))
{var inst_24537 = (state_24540[(2)]);var inst_24538 = cljs.core.async.close_BANG_.call(null,out);var state_24540__$1 = (function (){var statearr_24549 = state_24540;(statearr_24549[(9)] = inst_24537);
return statearr_24549;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24540__$1,inst_24538);
} else
{if((state_val_24541 === (2)))
{var state_24540__$1 = state_24540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24540__$1,(4),ch);
} else
{if((state_val_24541 === (11)))
{var inst_24520 = (state_24540[(8)]);var inst_24529 = (state_24540[(2)]);var inst_24517 = inst_24520;var state_24540__$1 = (function (){var statearr_24550 = state_24540;(statearr_24550[(7)] = inst_24517);
(statearr_24550[(10)] = inst_24529);
return statearr_24550;
})();var statearr_24551_24571 = state_24540__$1;(statearr_24551_24571[(2)] = null);
(statearr_24551_24571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (9)))
{var inst_24520 = (state_24540[(8)]);var state_24540__$1 = state_24540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24540__$1,(11),out,inst_24520);
} else
{if((state_val_24541 === (5)))
{var inst_24520 = (state_24540[(8)]);var inst_24517 = (state_24540[(7)]);var inst_24524 = cljs.core._EQ_.call(null,inst_24520,inst_24517);var state_24540__$1 = state_24540;if(inst_24524)
{var statearr_24553_24572 = state_24540__$1;(statearr_24553_24572[(1)] = (8));
} else
{var statearr_24554_24573 = state_24540__$1;(statearr_24554_24573[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (10)))
{var inst_24532 = (state_24540[(2)]);var state_24540__$1 = state_24540;var statearr_24555_24574 = state_24540__$1;(statearr_24555_24574[(2)] = inst_24532);
(statearr_24555_24574[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24541 === (8)))
{var inst_24517 = (state_24540[(7)]);var tmp24552 = inst_24517;var inst_24517__$1 = tmp24552;var state_24540__$1 = (function (){var statearr_24556 = state_24540;(statearr_24556[(7)] = inst_24517__$1);
return statearr_24556;
})();var statearr_24557_24575 = state_24540__$1;(statearr_24557_24575[(2)] = null);
(statearr_24557_24575[(1)] = (2));
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
});})(c__15989__auto___24565,out))
;return ((function (switch__15974__auto__,c__15989__auto___24565,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24561 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24561[(0)] = state_machine__15975__auto__);
(statearr_24561[(1)] = (1));
return statearr_24561;
});
var state_machine__15975__auto____1 = (function (state_24540){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24540);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object))
{var ex__15978__auto__ = e24562;var statearr_24563_24576 = state_24540;(statearr_24563_24576[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24562;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24577 = state_24540;
state_24540 = G__24577;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24540){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24565,out))
})();var state__15991__auto__ = (function (){var statearr_24564 = f__15990__auto__.call(null);(statearr_24564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24565);
return statearr_24564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24565,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24712 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24712,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24712,out){
return (function (state_24682){var state_val_24683 = (state_24682[(1)]);if((state_val_24683 === (7)))
{var inst_24678 = (state_24682[(2)]);var state_24682__$1 = state_24682;var statearr_24684_24713 = state_24682__$1;(statearr_24684_24713[(2)] = inst_24678);
(statearr_24684_24713[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (1)))
{var inst_24645 = (new Array(n));var inst_24646 = inst_24645;var inst_24647 = (0);var state_24682__$1 = (function (){var statearr_24685 = state_24682;(statearr_24685[(7)] = inst_24647);
(statearr_24685[(8)] = inst_24646);
return statearr_24685;
})();var statearr_24686_24714 = state_24682__$1;(statearr_24686_24714[(2)] = null);
(statearr_24686_24714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (4)))
{var inst_24650 = (state_24682[(9)]);var inst_24650__$1 = (state_24682[(2)]);var inst_24651 = (inst_24650__$1 == null);var inst_24652 = cljs.core.not.call(null,inst_24651);var state_24682__$1 = (function (){var statearr_24687 = state_24682;(statearr_24687[(9)] = inst_24650__$1);
return statearr_24687;
})();if(inst_24652)
{var statearr_24688_24715 = state_24682__$1;(statearr_24688_24715[(1)] = (5));
} else
{var statearr_24689_24716 = state_24682__$1;(statearr_24689_24716[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (15)))
{var inst_24672 = (state_24682[(2)]);var state_24682__$1 = state_24682;var statearr_24690_24717 = state_24682__$1;(statearr_24690_24717[(2)] = inst_24672);
(statearr_24690_24717[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (13)))
{var state_24682__$1 = state_24682;var statearr_24691_24718 = state_24682__$1;(statearr_24691_24718[(2)] = null);
(statearr_24691_24718[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (6)))
{var inst_24647 = (state_24682[(7)]);var inst_24668 = (inst_24647 > (0));var state_24682__$1 = state_24682;if(cljs.core.truth_(inst_24668))
{var statearr_24692_24719 = state_24682__$1;(statearr_24692_24719[(1)] = (12));
} else
{var statearr_24693_24720 = state_24682__$1;(statearr_24693_24720[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (3)))
{var inst_24680 = (state_24682[(2)]);var state_24682__$1 = state_24682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24682__$1,inst_24680);
} else
{if((state_val_24683 === (12)))
{var inst_24646 = (state_24682[(8)]);var inst_24670 = cljs.core.vec.call(null,inst_24646);var state_24682__$1 = state_24682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24682__$1,(15),out,inst_24670);
} else
{if((state_val_24683 === (2)))
{var state_24682__$1 = state_24682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24682__$1,(4),ch);
} else
{if((state_val_24683 === (11)))
{var inst_24662 = (state_24682[(2)]);var inst_24663 = (new Array(n));var inst_24646 = inst_24663;var inst_24647 = (0);var state_24682__$1 = (function (){var statearr_24694 = state_24682;(statearr_24694[(7)] = inst_24647);
(statearr_24694[(8)] = inst_24646);
(statearr_24694[(10)] = inst_24662);
return statearr_24694;
})();var statearr_24695_24721 = state_24682__$1;(statearr_24695_24721[(2)] = null);
(statearr_24695_24721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (9)))
{var inst_24646 = (state_24682[(8)]);var inst_24660 = cljs.core.vec.call(null,inst_24646);var state_24682__$1 = state_24682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24682__$1,(11),out,inst_24660);
} else
{if((state_val_24683 === (5)))
{var inst_24650 = (state_24682[(9)]);var inst_24647 = (state_24682[(7)]);var inst_24655 = (state_24682[(11)]);var inst_24646 = (state_24682[(8)]);var inst_24654 = (inst_24646[inst_24647] = inst_24650);var inst_24655__$1 = (inst_24647 + (1));var inst_24656 = (inst_24655__$1 < n);var state_24682__$1 = (function (){var statearr_24696 = state_24682;(statearr_24696[(12)] = inst_24654);
(statearr_24696[(11)] = inst_24655__$1);
return statearr_24696;
})();if(cljs.core.truth_(inst_24656))
{var statearr_24697_24722 = state_24682__$1;(statearr_24697_24722[(1)] = (8));
} else
{var statearr_24698_24723 = state_24682__$1;(statearr_24698_24723[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (14)))
{var inst_24675 = (state_24682[(2)]);var inst_24676 = cljs.core.async.close_BANG_.call(null,out);var state_24682__$1 = (function (){var statearr_24700 = state_24682;(statearr_24700[(13)] = inst_24675);
return statearr_24700;
})();var statearr_24701_24724 = state_24682__$1;(statearr_24701_24724[(2)] = inst_24676);
(statearr_24701_24724[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (10)))
{var inst_24666 = (state_24682[(2)]);var state_24682__$1 = state_24682;var statearr_24702_24725 = state_24682__$1;(statearr_24702_24725[(2)] = inst_24666);
(statearr_24702_24725[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24683 === (8)))
{var inst_24655 = (state_24682[(11)]);var inst_24646 = (state_24682[(8)]);var tmp24699 = inst_24646;var inst_24646__$1 = tmp24699;var inst_24647 = inst_24655;var state_24682__$1 = (function (){var statearr_24703 = state_24682;(statearr_24703[(7)] = inst_24647);
(statearr_24703[(8)] = inst_24646__$1);
return statearr_24703;
})();var statearr_24704_24726 = state_24682__$1;(statearr_24704_24726[(2)] = null);
(statearr_24704_24726[(1)] = (2));
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
});})(c__15989__auto___24712,out))
;return ((function (switch__15974__auto__,c__15989__auto___24712,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24708[(0)] = state_machine__15975__auto__);
(statearr_24708[(1)] = (1));
return statearr_24708;
});
var state_machine__15975__auto____1 = (function (state_24682){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24682);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24709){if((e24709 instanceof Object))
{var ex__15978__auto__ = e24709;var statearr_24710_24727 = state_24682;(statearr_24710_24727[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24728 = state_24682;
state_24682 = G__24728;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24682){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24712,out))
})();var state__15991__auto__ = (function (){var statearr_24711 = f__15990__auto__.call(null);(statearr_24711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24712);
return statearr_24711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24712,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___24871 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___24871,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___24871,out){
return (function (state_24841){var state_val_24842 = (state_24841[(1)]);if((state_val_24842 === (7)))
{var inst_24837 = (state_24841[(2)]);var state_24841__$1 = state_24841;var statearr_24843_24872 = state_24841__$1;(statearr_24843_24872[(2)] = inst_24837);
(statearr_24843_24872[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (1)))
{var inst_24800 = [];var inst_24801 = inst_24800;var inst_24802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_24841__$1 = (function (){var statearr_24844 = state_24841;(statearr_24844[(7)] = inst_24802);
(statearr_24844[(8)] = inst_24801);
return statearr_24844;
})();var statearr_24845_24873 = state_24841__$1;(statearr_24845_24873[(2)] = null);
(statearr_24845_24873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (4)))
{var inst_24805 = (state_24841[(9)]);var inst_24805__$1 = (state_24841[(2)]);var inst_24806 = (inst_24805__$1 == null);var inst_24807 = cljs.core.not.call(null,inst_24806);var state_24841__$1 = (function (){var statearr_24846 = state_24841;(statearr_24846[(9)] = inst_24805__$1);
return statearr_24846;
})();if(inst_24807)
{var statearr_24847_24874 = state_24841__$1;(statearr_24847_24874[(1)] = (5));
} else
{var statearr_24848_24875 = state_24841__$1;(statearr_24848_24875[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (15)))
{var inst_24831 = (state_24841[(2)]);var state_24841__$1 = state_24841;var statearr_24849_24876 = state_24841__$1;(statearr_24849_24876[(2)] = inst_24831);
(statearr_24849_24876[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (13)))
{var state_24841__$1 = state_24841;var statearr_24850_24877 = state_24841__$1;(statearr_24850_24877[(2)] = null);
(statearr_24850_24877[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (6)))
{var inst_24801 = (state_24841[(8)]);var inst_24826 = inst_24801.length;var inst_24827 = (inst_24826 > (0));var state_24841__$1 = state_24841;if(cljs.core.truth_(inst_24827))
{var statearr_24851_24878 = state_24841__$1;(statearr_24851_24878[(1)] = (12));
} else
{var statearr_24852_24879 = state_24841__$1;(statearr_24852_24879[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (3)))
{var inst_24839 = (state_24841[(2)]);var state_24841__$1 = state_24841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24841__$1,inst_24839);
} else
{if((state_val_24842 === (12)))
{var inst_24801 = (state_24841[(8)]);var inst_24829 = cljs.core.vec.call(null,inst_24801);var state_24841__$1 = state_24841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24841__$1,(15),out,inst_24829);
} else
{if((state_val_24842 === (2)))
{var state_24841__$1 = state_24841;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24841__$1,(4),ch);
} else
{if((state_val_24842 === (11)))
{var inst_24805 = (state_24841[(9)]);var inst_24809 = (state_24841[(10)]);var inst_24819 = (state_24841[(2)]);var inst_24820 = [];var inst_24821 = inst_24820.push(inst_24805);var inst_24801 = inst_24820;var inst_24802 = inst_24809;var state_24841__$1 = (function (){var statearr_24853 = state_24841;(statearr_24853[(11)] = inst_24819);
(statearr_24853[(12)] = inst_24821);
(statearr_24853[(7)] = inst_24802);
(statearr_24853[(8)] = inst_24801);
return statearr_24853;
})();var statearr_24854_24880 = state_24841__$1;(statearr_24854_24880[(2)] = null);
(statearr_24854_24880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (9)))
{var inst_24801 = (state_24841[(8)]);var inst_24817 = cljs.core.vec.call(null,inst_24801);var state_24841__$1 = state_24841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24841__$1,(11),out,inst_24817);
} else
{if((state_val_24842 === (5)))
{var inst_24805 = (state_24841[(9)]);var inst_24802 = (state_24841[(7)]);var inst_24809 = (state_24841[(10)]);var inst_24809__$1 = f.call(null,inst_24805);var inst_24810 = cljs.core._EQ_.call(null,inst_24809__$1,inst_24802);var inst_24811 = cljs.core.keyword_identical_QMARK_.call(null,inst_24802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_24812 = (inst_24810) || (inst_24811);var state_24841__$1 = (function (){var statearr_24855 = state_24841;(statearr_24855[(10)] = inst_24809__$1);
return statearr_24855;
})();if(cljs.core.truth_(inst_24812))
{var statearr_24856_24881 = state_24841__$1;(statearr_24856_24881[(1)] = (8));
} else
{var statearr_24857_24882 = state_24841__$1;(statearr_24857_24882[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (14)))
{var inst_24834 = (state_24841[(2)]);var inst_24835 = cljs.core.async.close_BANG_.call(null,out);var state_24841__$1 = (function (){var statearr_24859 = state_24841;(statearr_24859[(13)] = inst_24834);
return statearr_24859;
})();var statearr_24860_24883 = state_24841__$1;(statearr_24860_24883[(2)] = inst_24835);
(statearr_24860_24883[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (10)))
{var inst_24824 = (state_24841[(2)]);var state_24841__$1 = state_24841;var statearr_24861_24884 = state_24841__$1;(statearr_24861_24884[(2)] = inst_24824);
(statearr_24861_24884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24842 === (8)))
{var inst_24805 = (state_24841[(9)]);var inst_24809 = (state_24841[(10)]);var inst_24801 = (state_24841[(8)]);var inst_24814 = inst_24801.push(inst_24805);var tmp24858 = inst_24801;var inst_24801__$1 = tmp24858;var inst_24802 = inst_24809;var state_24841__$1 = (function (){var statearr_24862 = state_24841;(statearr_24862[(14)] = inst_24814);
(statearr_24862[(7)] = inst_24802);
(statearr_24862[(8)] = inst_24801__$1);
return statearr_24862;
})();var statearr_24863_24885 = state_24841__$1;(statearr_24863_24885[(2)] = null);
(statearr_24863_24885[(1)] = (2));
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
});})(c__15989__auto___24871,out))
;return ((function (switch__15974__auto__,c__15989__auto___24871,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_24867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24867[(0)] = state_machine__15975__auto__);
(statearr_24867[(1)] = (1));
return statearr_24867;
});
var state_machine__15975__auto____1 = (function (state_24841){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_24841);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e24868){if((e24868 instanceof Object))
{var ex__15978__auto__ = e24868;var statearr_24869_24886 = state_24841;(statearr_24869_24886[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24841);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24887 = state_24841;
state_24841 = G__24887;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_24841){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_24841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___24871,out))
})();var state__15991__auto__ = (function (){var statearr_24870 = f__15990__auto__.call(null);(statearr_24870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___24871);
return statearr_24870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___24871,out))
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