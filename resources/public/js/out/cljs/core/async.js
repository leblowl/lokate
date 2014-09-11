// Compiled by ClojureScript 0.0-2277
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11875 = (function (f,fn_handler,meta11876){
this.f = f;
this.fn_handler = fn_handler;
this.meta11876 = meta11876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11875.cljs$lang$type = true;
cljs.core.async.t11875.cljs$lang$ctorStr = "cljs.core.async/t11875";
cljs.core.async.t11875.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11875");
});
cljs.core.async.t11875.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11877){var self__ = this;
var _11877__$1 = this;return self__.meta11876;
});
cljs.core.async.t11875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11877,meta11876__$1){var self__ = this;
var _11877__$1 = this;return (new cljs.core.async.t11875(self__.f,self__.fn_handler,meta11876__$1));
});
cljs.core.async.__GT_t11875 = (function __GT_t11875(f__$1,fn_handler__$1,meta11876){return (new cljs.core.async.t11875(f__$1,fn_handler__$1,meta11876));
});
}
return (new cljs.core.async.t11875(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11879 = buff;if(G__11879)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__11879.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11879.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11879);
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
{var val_11880 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11880);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11880,ret){
return (function (){return fn1.call(null,val_11880);
});})(val_11880,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___11881 = n;var x_11882 = (0);while(true){
if((x_11882 < n__4409__auto___11881))
{(a[x_11882] = (0));
{
var G__11883 = (x_11882 + (1));
x_11882 = G__11883;
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
var G__11884 = (i + (1));
i = G__11884;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11888 = (function (flag,alt_flag,meta11889){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11889 = meta11889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11888.cljs$lang$type = true;
cljs.core.async.t11888.cljs$lang$ctorStr = "cljs.core.async/t11888";
cljs.core.async.t11888.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11888");
});})(flag))
;
cljs.core.async.t11888.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11890){var self__ = this;
var _11890__$1 = this;return self__.meta11889;
});})(flag))
;
cljs.core.async.t11888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11890,meta11889__$1){var self__ = this;
var _11890__$1 = this;return (new cljs.core.async.t11888(self__.flag,self__.alt_flag,meta11889__$1));
});})(flag))
;
cljs.core.async.__GT_t11888 = ((function (flag){
return (function __GT_t11888(flag__$1,alt_flag__$1,meta11889){return (new cljs.core.async.t11888(flag__$1,alt_flag__$1,meta11889));
});})(flag))
;
}
return (new cljs.core.async.t11888(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11894 = (function (cb,flag,alt_handler,meta11895){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11895 = meta11895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11894.cljs$lang$type = true;
cljs.core.async.t11894.cljs$lang$ctorStr = "cljs.core.async/t11894";
cljs.core.async.t11894.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11894");
});
cljs.core.async.t11894.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11896){var self__ = this;
var _11896__$1 = this;return self__.meta11895;
});
cljs.core.async.t11894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11896,meta11895__$1){var self__ = this;
var _11896__$1 = this;return (new cljs.core.async.t11894(self__.cb,self__.flag,self__.alt_handler,meta11895__$1));
});
cljs.core.async.__GT_t11894 = (function __GT_t11894(cb__$1,flag__$1,alt_handler__$1,meta11895){return (new cljs.core.async.t11894(cb__$1,flag__$1,alt_handler__$1,meta11895));
});
}
return (new cljs.core.async.t11894(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11897_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11897_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11898_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11898_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11899 = (i + (1));
i = G__11899;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
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
var alts_BANG___delegate = function (ports,p__11900){var map__11902 = p__11900;var map__11902__$1 = ((cljs.core.seq_QMARK_.call(null,map__11902))?cljs.core.apply.call(null,cljs.core.hash_map,map__11902):map__11902);var opts = map__11902__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11900 = null;if (arguments.length > 1) {
  p__11900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11900);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11903){
var ports = cljs.core.first(arglist__11903);
var p__11900 = cljs.core.rest(arglist__11903);
return alts_BANG___delegate(ports,p__11900);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6369__auto___11998 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___11998){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___11998){
return (function (state_11974){var state_val_11975 = (state_11974[(1)]);if((state_val_11975 === (7)))
{var inst_11970 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_11976_11999 = state_11974__$1;(statearr_11976_11999[(2)] = inst_11970);
(statearr_11976_11999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (1)))
{var state_11974__$1 = state_11974;var statearr_11977_12000 = state_11974__$1;(statearr_11977_12000[(2)] = null);
(statearr_11977_12000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (4)))
{var inst_11953 = (state_11974[(7)]);var inst_11953__$1 = (state_11974[(2)]);var inst_11954 = (inst_11953__$1 == null);var state_11974__$1 = (function (){var statearr_11978 = state_11974;(statearr_11978[(7)] = inst_11953__$1);
return statearr_11978;
})();if(cljs.core.truth_(inst_11954))
{var statearr_11979_12001 = state_11974__$1;(statearr_11979_12001[(1)] = (5));
} else
{var statearr_11980_12002 = state_11974__$1;(statearr_11980_12002[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (13)))
{var state_11974__$1 = state_11974;var statearr_11981_12003 = state_11974__$1;(statearr_11981_12003[(2)] = null);
(statearr_11981_12003[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (6)))
{var inst_11953 = (state_11974[(7)]);var state_11974__$1 = state_11974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11974__$1,(11),to,inst_11953);
} else
{if((state_val_11975 === (3)))
{var inst_11972 = (state_11974[(2)]);var state_11974__$1 = state_11974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11974__$1,inst_11972);
} else
{if((state_val_11975 === (12)))
{var state_11974__$1 = state_11974;var statearr_11982_12004 = state_11974__$1;(statearr_11982_12004[(2)] = null);
(statearr_11982_12004[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (2)))
{var state_11974__$1 = state_11974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11974__$1,(4),from);
} else
{if((state_val_11975 === (11)))
{var inst_11963 = (state_11974[(2)]);var state_11974__$1 = state_11974;if(cljs.core.truth_(inst_11963))
{var statearr_11983_12005 = state_11974__$1;(statearr_11983_12005[(1)] = (12));
} else
{var statearr_11984_12006 = state_11974__$1;(statearr_11984_12006[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (9)))
{var state_11974__$1 = state_11974;var statearr_11985_12007 = state_11974__$1;(statearr_11985_12007[(2)] = null);
(statearr_11985_12007[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (5)))
{var state_11974__$1 = state_11974;if(cljs.core.truth_(close_QMARK_))
{var statearr_11986_12008 = state_11974__$1;(statearr_11986_12008[(1)] = (8));
} else
{var statearr_11987_12009 = state_11974__$1;(statearr_11987_12009[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (14)))
{var inst_11968 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_11988_12010 = state_11974__$1;(statearr_11988_12010[(2)] = inst_11968);
(statearr_11988_12010[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (10)))
{var inst_11960 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_11989_12011 = state_11974__$1;(statearr_11989_12011[(2)] = inst_11960);
(statearr_11989_12011[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (8)))
{var inst_11957 = cljs.core.async.close_BANG_.call(null,to);var state_11974__$1 = state_11974;var statearr_11990_12012 = state_11974__$1;(statearr_11990_12012[(2)] = inst_11957);
(statearr_11990_12012[(1)] = (10));
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
});})(c__6369__auto___11998))
;return ((function (switch__6354__auto__,c__6369__auto___11998){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_11994 = [null,null,null,null,null,null,null,null];(statearr_11994[(0)] = state_machine__6355__auto__);
(statearr_11994[(1)] = (1));
return statearr_11994;
});
var state_machine__6355__auto____1 = (function (state_11974){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_11974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e11995){if((e11995 instanceof Object))
{var ex__6358__auto__ = e11995;var statearr_11996_12013 = state_11974;(statearr_11996_12013[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12014 = state_11974;
state_11974 = G__12014;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___11998))
})();var state__6371__auto__ = (function (){var statearr_11997 = f__6370__auto__.call(null);(statearr_11997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___11998);
return statearr_11997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___11998))
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
return (function (p__12197){var vec__12198 = p__12197;var v = cljs.core.nth.call(null,vec__12198,(0),null);var p = cljs.core.nth.call(null,vec__12198,(1),null);var job = vec__12198;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6369__auto___12379 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results){
return (function (state_12203){var state_val_12204 = (state_12203[(1)]);if((state_val_12204 === (2)))
{var inst_12200 = (state_12203[(2)]);var inst_12201 = cljs.core.async.close_BANG_.call(null,res);var state_12203__$1 = (function (){var statearr_12205 = state_12203;(statearr_12205[(7)] = inst_12200);
return statearr_12205;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12203__$1,inst_12201);
} else
{if((state_val_12204 === (1)))
{var state_12203__$1 = state_12203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12203__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results))
;return ((function (switch__6354__auto__,c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12209 = [null,null,null,null,null,null,null,null];(statearr_12209[(0)] = state_machine__6355__auto__);
(statearr_12209[(1)] = (1));
return statearr_12209;
});
var state_machine__6355__auto____1 = (function (state_12203){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12203);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12210){if((e12210 instanceof Object))
{var ex__6358__auto__ = e12210;var statearr_12211_12380 = state_12203;(statearr_12211_12380[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12381 = state_12203;
state_12203 = G__12381;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12203){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results))
})();var state__6371__auto__ = (function (){var statearr_12212 = f__6370__auto__.call(null);(statearr_12212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___12379);
return statearr_12212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___12379,res,vec__12198,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12213){var vec__12214 = p__12213;var v = cljs.core.nth.call(null,vec__12214,(0),null);var p = cljs.core.nth.call(null,vec__12214,(1),null);var job = vec__12214;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4409__auto___12382 = n;var __12383 = (0);while(true){
if((__12383 < n__4409__auto___12382))
{var G__12215_12384 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12215_12384) {
case "async":
var c__6369__auto___12386 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12383,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (__12383,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function (state_12228){var state_val_12229 = (state_12228[(1)]);if((state_val_12229 === (7)))
{var inst_12224 = (state_12228[(2)]);var state_12228__$1 = state_12228;var statearr_12230_12387 = state_12228__$1;(statearr_12230_12387[(2)] = inst_12224);
(statearr_12230_12387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12229 === (6)))
{var state_12228__$1 = state_12228;var statearr_12231_12388 = state_12228__$1;(statearr_12231_12388[(2)] = null);
(statearr_12231_12388[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12229 === (5)))
{var state_12228__$1 = state_12228;var statearr_12232_12389 = state_12228__$1;(statearr_12232_12389[(2)] = null);
(statearr_12232_12389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12229 === (4)))
{var inst_12218 = (state_12228[(2)]);var inst_12219 = async.call(null,inst_12218);var state_12228__$1 = state_12228;if(cljs.core.truth_(inst_12219))
{var statearr_12233_12390 = state_12228__$1;(statearr_12233_12390[(1)] = (5));
} else
{var statearr_12234_12391 = state_12228__$1;(statearr_12234_12391[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12229 === (3)))
{var inst_12226 = (state_12228[(2)]);var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12228__$1,inst_12226);
} else
{if((state_val_12229 === (2)))
{var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12228__$1,(4),jobs);
} else
{if((state_val_12229 === (1)))
{var state_12228__$1 = state_12228;var statearr_12235_12392 = state_12228__$1;(statearr_12235_12392[(2)] = null);
(statearr_12235_12392[(1)] = (2));
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
});})(__12383,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
;return ((function (__12383,switch__6354__auto__,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12239 = [null,null,null,null,null,null,null];(statearr_12239[(0)] = state_machine__6355__auto__);
(statearr_12239[(1)] = (1));
return statearr_12239;
});
var state_machine__6355__auto____1 = (function (state_12228){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12240){if((e12240 instanceof Object))
{var ex__6358__auto__ = e12240;var statearr_12241_12393 = state_12228;(statearr_12241_12393[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12394 = state_12228;
state_12228 = G__12394;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12228){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(__12383,switch__6354__auto__,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
})();var state__6371__auto__ = (function (){var statearr_12242 = f__6370__auto__.call(null);(statearr_12242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___12386);
return statearr_12242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(__12383,c__6369__auto___12386,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
);

break;
case "compute":
var c__6369__auto___12395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12383,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (__12383,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function (state_12255){var state_val_12256 = (state_12255[(1)]);if((state_val_12256 === (7)))
{var inst_12251 = (state_12255[(2)]);var state_12255__$1 = state_12255;var statearr_12257_12396 = state_12255__$1;(statearr_12257_12396[(2)] = inst_12251);
(statearr_12257_12396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12256 === (6)))
{var state_12255__$1 = state_12255;var statearr_12258_12397 = state_12255__$1;(statearr_12258_12397[(2)] = null);
(statearr_12258_12397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12256 === (5)))
{var state_12255__$1 = state_12255;var statearr_12259_12398 = state_12255__$1;(statearr_12259_12398[(2)] = null);
(statearr_12259_12398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12256 === (4)))
{var inst_12245 = (state_12255[(2)]);var inst_12246 = process.call(null,inst_12245);var state_12255__$1 = state_12255;if(cljs.core.truth_(inst_12246))
{var statearr_12260_12399 = state_12255__$1;(statearr_12260_12399[(1)] = (5));
} else
{var statearr_12261_12400 = state_12255__$1;(statearr_12261_12400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12256 === (3)))
{var inst_12253 = (state_12255[(2)]);var state_12255__$1 = state_12255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12255__$1,inst_12253);
} else
{if((state_val_12256 === (2)))
{var state_12255__$1 = state_12255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12255__$1,(4),jobs);
} else
{if((state_val_12256 === (1)))
{var state_12255__$1 = state_12255;var statearr_12262_12401 = state_12255__$1;(statearr_12262_12401[(2)] = null);
(statearr_12262_12401[(1)] = (2));
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
});})(__12383,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
;return ((function (__12383,switch__6354__auto__,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12266 = [null,null,null,null,null,null,null];(statearr_12266[(0)] = state_machine__6355__auto__);
(statearr_12266[(1)] = (1));
return statearr_12266;
});
var state_machine__6355__auto____1 = (function (state_12255){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12267){if((e12267 instanceof Object))
{var ex__6358__auto__ = e12267;var statearr_12268_12402 = state_12255;(statearr_12268_12402[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12403 = state_12255;
state_12255 = G__12403;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12255){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(__12383,switch__6354__auto__,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
})();var state__6371__auto__ = (function (){var statearr_12269 = f__6370__auto__.call(null);(statearr_12269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___12395);
return statearr_12269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(__12383,c__6369__auto___12395,G__12215_12384,n__4409__auto___12382,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12404 = (__12383 + (1));
__12383 = G__12404;
continue;
}
} else
{}
break;
}
var c__6369__auto___12405 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___12405,jobs,results,process,async){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___12405,jobs,results,process,async){
return (function (state_12290){var state_val_12291 = (state_12290[(1)]);if((state_val_12291 === (9)))
{var inst_12283 = (state_12290[(2)]);var state_12290__$1 = (function (){var statearr_12292 = state_12290;(statearr_12292[(7)] = inst_12283);
return statearr_12292;
})();var statearr_12293_12406 = state_12290__$1;(statearr_12293_12406[(2)] = null);
(statearr_12293_12406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12291 === (8)))
{var inst_12277 = (state_12290[(8)]);var inst_12281 = (state_12290[(2)]);var state_12290__$1 = (function (){var statearr_12294 = state_12290;(statearr_12294[(9)] = inst_12281);
return statearr_12294;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12290__$1,(9),results,inst_12277);
} else
{if((state_val_12291 === (7)))
{var inst_12286 = (state_12290[(2)]);var state_12290__$1 = state_12290;var statearr_12295_12407 = state_12290__$1;(statearr_12295_12407[(2)] = inst_12286);
(statearr_12295_12407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12291 === (6)))
{var inst_12272 = (state_12290[(10)]);var inst_12277 = (state_12290[(8)]);var inst_12277__$1 = cljs.core.async.chan.call(null,(1));var inst_12278 = [inst_12272,inst_12277__$1];var inst_12279 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12278,null));var state_12290__$1 = (function (){var statearr_12296 = state_12290;(statearr_12296[(8)] = inst_12277__$1);
return statearr_12296;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12290__$1,(8),jobs,inst_12279);
} else
{if((state_val_12291 === (5)))
{var inst_12275 = cljs.core.async.close_BANG_.call(null,jobs);var state_12290__$1 = state_12290;var statearr_12297_12408 = state_12290__$1;(statearr_12297_12408[(2)] = inst_12275);
(statearr_12297_12408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12291 === (4)))
{var inst_12272 = (state_12290[(10)]);var inst_12272__$1 = (state_12290[(2)]);var inst_12273 = (inst_12272__$1 == null);var state_12290__$1 = (function (){var statearr_12298 = state_12290;(statearr_12298[(10)] = inst_12272__$1);
return statearr_12298;
})();if(cljs.core.truth_(inst_12273))
{var statearr_12299_12409 = state_12290__$1;(statearr_12299_12409[(1)] = (5));
} else
{var statearr_12300_12410 = state_12290__$1;(statearr_12300_12410[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12291 === (3)))
{var inst_12288 = (state_12290[(2)]);var state_12290__$1 = state_12290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12290__$1,inst_12288);
} else
{if((state_val_12291 === (2)))
{var state_12290__$1 = state_12290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12290__$1,(4),from);
} else
{if((state_val_12291 === (1)))
{var state_12290__$1 = state_12290;var statearr_12301_12411 = state_12290__$1;(statearr_12301_12411[(2)] = null);
(statearr_12301_12411[(1)] = (2));
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
});})(c__6369__auto___12405,jobs,results,process,async))
;return ((function (switch__6354__auto__,c__6369__auto___12405,jobs,results,process,async){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12305 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12305[(0)] = state_machine__6355__auto__);
(statearr_12305[(1)] = (1));
return statearr_12305;
});
var state_machine__6355__auto____1 = (function (state_12290){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12306){if((e12306 instanceof Object))
{var ex__6358__auto__ = e12306;var statearr_12307_12412 = state_12290;(statearr_12307_12412[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12413 = state_12290;
state_12290 = G__12413;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12290){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___12405,jobs,results,process,async))
})();var state__6371__auto__ = (function (){var statearr_12308 = f__6370__auto__.call(null);(statearr_12308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___12405);
return statearr_12308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___12405,jobs,results,process,async))
);
var c__6369__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto__,jobs,results,process,async){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto__,jobs,results,process,async){
return (function (state_12346){var state_val_12347 = (state_12346[(1)]);if((state_val_12347 === (7)))
{var inst_12342 = (state_12346[(2)]);var state_12346__$1 = state_12346;var statearr_12348_12414 = state_12346__$1;(statearr_12348_12414[(2)] = inst_12342);
(statearr_12348_12414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (20)))
{var state_12346__$1 = state_12346;var statearr_12349_12415 = state_12346__$1;(statearr_12349_12415[(2)] = null);
(statearr_12349_12415[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (1)))
{var state_12346__$1 = state_12346;var statearr_12350_12416 = state_12346__$1;(statearr_12350_12416[(2)] = null);
(statearr_12350_12416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (4)))
{var inst_12311 = (state_12346[(7)]);var inst_12311__$1 = (state_12346[(2)]);var inst_12312 = (inst_12311__$1 == null);var state_12346__$1 = (function (){var statearr_12351 = state_12346;(statearr_12351[(7)] = inst_12311__$1);
return statearr_12351;
})();if(cljs.core.truth_(inst_12312))
{var statearr_12352_12417 = state_12346__$1;(statearr_12352_12417[(1)] = (5));
} else
{var statearr_12353_12418 = state_12346__$1;(statearr_12353_12418[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (15)))
{var inst_12324 = (state_12346[(8)]);var state_12346__$1 = state_12346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12346__$1,(18),to,inst_12324);
} else
{if((state_val_12347 === (21)))
{var inst_12337 = (state_12346[(2)]);var state_12346__$1 = state_12346;var statearr_12354_12419 = state_12346__$1;(statearr_12354_12419[(2)] = inst_12337);
(statearr_12354_12419[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (13)))
{var inst_12339 = (state_12346[(2)]);var state_12346__$1 = (function (){var statearr_12355 = state_12346;(statearr_12355[(9)] = inst_12339);
return statearr_12355;
})();var statearr_12356_12420 = state_12346__$1;(statearr_12356_12420[(2)] = null);
(statearr_12356_12420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (6)))
{var inst_12311 = (state_12346[(7)]);var state_12346__$1 = state_12346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12346__$1,(11),inst_12311);
} else
{if((state_val_12347 === (17)))
{var inst_12332 = (state_12346[(2)]);var state_12346__$1 = state_12346;if(cljs.core.truth_(inst_12332))
{var statearr_12357_12421 = state_12346__$1;(statearr_12357_12421[(1)] = (19));
} else
{var statearr_12358_12422 = state_12346__$1;(statearr_12358_12422[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (3)))
{var inst_12344 = (state_12346[(2)]);var state_12346__$1 = state_12346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12346__$1,inst_12344);
} else
{if((state_val_12347 === (12)))
{var inst_12321 = (state_12346[(10)]);var state_12346__$1 = state_12346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12346__$1,(14),inst_12321);
} else
{if((state_val_12347 === (2)))
{var state_12346__$1 = state_12346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12346__$1,(4),results);
} else
{if((state_val_12347 === (19)))
{var state_12346__$1 = state_12346;var statearr_12359_12423 = state_12346__$1;(statearr_12359_12423[(2)] = null);
(statearr_12359_12423[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (11)))
{var inst_12321 = (state_12346[(2)]);var state_12346__$1 = (function (){var statearr_12360 = state_12346;(statearr_12360[(10)] = inst_12321);
return statearr_12360;
})();var statearr_12361_12424 = state_12346__$1;(statearr_12361_12424[(2)] = null);
(statearr_12361_12424[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (9)))
{var state_12346__$1 = state_12346;var statearr_12362_12425 = state_12346__$1;(statearr_12362_12425[(2)] = null);
(statearr_12362_12425[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (5)))
{var state_12346__$1 = state_12346;if(cljs.core.truth_(close_QMARK_))
{var statearr_12363_12426 = state_12346__$1;(statearr_12363_12426[(1)] = (8));
} else
{var statearr_12364_12427 = state_12346__$1;(statearr_12364_12427[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (14)))
{var inst_12326 = (state_12346[(11)]);var inst_12324 = (state_12346[(8)]);var inst_12324__$1 = (state_12346[(2)]);var inst_12325 = (inst_12324__$1 == null);var inst_12326__$1 = cljs.core.not.call(null,inst_12325);var state_12346__$1 = (function (){var statearr_12365 = state_12346;(statearr_12365[(11)] = inst_12326__$1);
(statearr_12365[(8)] = inst_12324__$1);
return statearr_12365;
})();if(inst_12326__$1)
{var statearr_12366_12428 = state_12346__$1;(statearr_12366_12428[(1)] = (15));
} else
{var statearr_12367_12429 = state_12346__$1;(statearr_12367_12429[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (16)))
{var inst_12326 = (state_12346[(11)]);var state_12346__$1 = state_12346;var statearr_12368_12430 = state_12346__$1;(statearr_12368_12430[(2)] = inst_12326);
(statearr_12368_12430[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (10)))
{var inst_12318 = (state_12346[(2)]);var state_12346__$1 = state_12346;var statearr_12369_12431 = state_12346__$1;(statearr_12369_12431[(2)] = inst_12318);
(statearr_12369_12431[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (18)))
{var inst_12329 = (state_12346[(2)]);var state_12346__$1 = state_12346;var statearr_12370_12432 = state_12346__$1;(statearr_12370_12432[(2)] = inst_12329);
(statearr_12370_12432[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12347 === (8)))
{var inst_12315 = cljs.core.async.close_BANG_.call(null,to);var state_12346__$1 = state_12346;var statearr_12371_12433 = state_12346__$1;(statearr_12371_12433[(2)] = inst_12315);
(statearr_12371_12433[(1)] = (10));
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
});})(c__6369__auto__,jobs,results,process,async))
;return ((function (switch__6354__auto__,c__6369__auto__,jobs,results,process,async){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12375 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12375[(0)] = state_machine__6355__auto__);
(statearr_12375[(1)] = (1));
return statearr_12375;
});
var state_machine__6355__auto____1 = (function (state_12346){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12376){if((e12376 instanceof Object))
{var ex__6358__auto__ = e12376;var statearr_12377_12434 = state_12346;(statearr_12377_12434[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12435 = state_12346;
state_12346 = G__12435;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12346){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto__,jobs,results,process,async))
})();var state__6371__auto__ = (function (){var statearr_12378 = f__6370__auto__.call(null);(statearr_12378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto__);
return statearr_12378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto__,jobs,results,process,async))
);
return c__6369__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6369__auto___12536 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___12536,tc,fc){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___12536,tc,fc){
return (function (state_12511){var state_val_12512 = (state_12511[(1)]);if((state_val_12512 === (7)))
{var inst_12507 = (state_12511[(2)]);var state_12511__$1 = state_12511;var statearr_12513_12537 = state_12511__$1;(statearr_12513_12537[(2)] = inst_12507);
(statearr_12513_12537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (1)))
{var state_12511__$1 = state_12511;var statearr_12514_12538 = state_12511__$1;(statearr_12514_12538[(2)] = null);
(statearr_12514_12538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (4)))
{var inst_12488 = (state_12511[(7)]);var inst_12488__$1 = (state_12511[(2)]);var inst_12489 = (inst_12488__$1 == null);var state_12511__$1 = (function (){var statearr_12515 = state_12511;(statearr_12515[(7)] = inst_12488__$1);
return statearr_12515;
})();if(cljs.core.truth_(inst_12489))
{var statearr_12516_12539 = state_12511__$1;(statearr_12516_12539[(1)] = (5));
} else
{var statearr_12517_12540 = state_12511__$1;(statearr_12517_12540[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (13)))
{var state_12511__$1 = state_12511;var statearr_12518_12541 = state_12511__$1;(statearr_12518_12541[(2)] = null);
(statearr_12518_12541[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (6)))
{var inst_12488 = (state_12511[(7)]);var inst_12494 = p.call(null,inst_12488);var state_12511__$1 = state_12511;if(cljs.core.truth_(inst_12494))
{var statearr_12519_12542 = state_12511__$1;(statearr_12519_12542[(1)] = (9));
} else
{var statearr_12520_12543 = state_12511__$1;(statearr_12520_12543[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (3)))
{var inst_12509 = (state_12511[(2)]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12511__$1,inst_12509);
} else
{if((state_val_12512 === (12)))
{var state_12511__$1 = state_12511;var statearr_12521_12544 = state_12511__$1;(statearr_12521_12544[(2)] = null);
(statearr_12521_12544[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (2)))
{var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12511__$1,(4),ch);
} else
{if((state_val_12512 === (11)))
{var inst_12488 = (state_12511[(7)]);var inst_12498 = (state_12511[(2)]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12511__$1,(8),inst_12498,inst_12488);
} else
{if((state_val_12512 === (9)))
{var state_12511__$1 = state_12511;var statearr_12522_12545 = state_12511__$1;(statearr_12522_12545[(2)] = tc);
(statearr_12522_12545[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (5)))
{var inst_12491 = cljs.core.async.close_BANG_.call(null,tc);var inst_12492 = cljs.core.async.close_BANG_.call(null,fc);var state_12511__$1 = (function (){var statearr_12523 = state_12511;(statearr_12523[(8)] = inst_12491);
return statearr_12523;
})();var statearr_12524_12546 = state_12511__$1;(statearr_12524_12546[(2)] = inst_12492);
(statearr_12524_12546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (14)))
{var inst_12505 = (state_12511[(2)]);var state_12511__$1 = state_12511;var statearr_12525_12547 = state_12511__$1;(statearr_12525_12547[(2)] = inst_12505);
(statearr_12525_12547[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (10)))
{var state_12511__$1 = state_12511;var statearr_12526_12548 = state_12511__$1;(statearr_12526_12548[(2)] = fc);
(statearr_12526_12548[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12512 === (8)))
{var inst_12500 = (state_12511[(2)]);var state_12511__$1 = state_12511;if(cljs.core.truth_(inst_12500))
{var statearr_12527_12549 = state_12511__$1;(statearr_12527_12549[(1)] = (12));
} else
{var statearr_12528_12550 = state_12511__$1;(statearr_12528_12550[(1)] = (13));
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
});})(c__6369__auto___12536,tc,fc))
;return ((function (switch__6354__auto__,c__6369__auto___12536,tc,fc){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12532 = [null,null,null,null,null,null,null,null,null];(statearr_12532[(0)] = state_machine__6355__auto__);
(statearr_12532[(1)] = (1));
return statearr_12532;
});
var state_machine__6355__auto____1 = (function (state_12511){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12533){if((e12533 instanceof Object))
{var ex__6358__auto__ = e12533;var statearr_12534_12551 = state_12511;(statearr_12534_12551[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12552 = state_12511;
state_12511 = G__12552;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12511){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___12536,tc,fc))
})();var state__6371__auto__ = (function (){var statearr_12535 = f__6370__auto__.call(null);(statearr_12535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___12536);
return statearr_12535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___12536,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6369__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto__){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto__){
return (function (state_12599){var state_val_12600 = (state_12599[(1)]);if((state_val_12600 === (7)))
{var inst_12595 = (state_12599[(2)]);var state_12599__$1 = state_12599;var statearr_12601_12617 = state_12599__$1;(statearr_12601_12617[(2)] = inst_12595);
(statearr_12601_12617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (6)))
{var inst_12588 = (state_12599[(7)]);var inst_12585 = (state_12599[(8)]);var inst_12592 = f.call(null,inst_12585,inst_12588);var inst_12585__$1 = inst_12592;var state_12599__$1 = (function (){var statearr_12602 = state_12599;(statearr_12602[(8)] = inst_12585__$1);
return statearr_12602;
})();var statearr_12603_12618 = state_12599__$1;(statearr_12603_12618[(2)] = null);
(statearr_12603_12618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (5)))
{var inst_12585 = (state_12599[(8)]);var state_12599__$1 = state_12599;var statearr_12604_12619 = state_12599__$1;(statearr_12604_12619[(2)] = inst_12585);
(statearr_12604_12619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (4)))
{var inst_12588 = (state_12599[(7)]);var inst_12588__$1 = (state_12599[(2)]);var inst_12589 = (inst_12588__$1 == null);var state_12599__$1 = (function (){var statearr_12605 = state_12599;(statearr_12605[(7)] = inst_12588__$1);
return statearr_12605;
})();if(cljs.core.truth_(inst_12589))
{var statearr_12606_12620 = state_12599__$1;(statearr_12606_12620[(1)] = (5));
} else
{var statearr_12607_12621 = state_12599__$1;(statearr_12607_12621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (3)))
{var inst_12597 = (state_12599[(2)]);var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12597);
} else
{if((state_val_12600 === (2)))
{var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,(4),ch);
} else
{if((state_val_12600 === (1)))
{var inst_12585 = init;var state_12599__$1 = (function (){var statearr_12608 = state_12599;(statearr_12608[(8)] = inst_12585);
return statearr_12608;
})();var statearr_12609_12622 = state_12599__$1;(statearr_12609_12622[(2)] = null);
(statearr_12609_12622[(1)] = (2));
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
});})(c__6369__auto__))
;return ((function (switch__6354__auto__,c__6369__auto__){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12613 = [null,null,null,null,null,null,null,null,null];(statearr_12613[(0)] = state_machine__6355__auto__);
(statearr_12613[(1)] = (1));
return statearr_12613;
});
var state_machine__6355__auto____1 = (function (state_12599){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12614){if((e12614 instanceof Object))
{var ex__6358__auto__ = e12614;var statearr_12615_12623 = state_12599;(statearr_12615_12623[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12624 = state_12599;
state_12599 = G__12624;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto__))
})();var state__6371__auto__ = (function (){var statearr_12616 = f__6370__auto__.call(null);(statearr_12616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto__);
return statearr_12616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto__))
);
return c__6369__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6369__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto__){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto__){
return (function (state_12698){var state_val_12699 = (state_12698[(1)]);if((state_val_12699 === (7)))
{var inst_12680 = (state_12698[(2)]);var state_12698__$1 = state_12698;var statearr_12700_12723 = state_12698__$1;(statearr_12700_12723[(2)] = inst_12680);
(statearr_12700_12723[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (1)))
{var inst_12674 = cljs.core.seq.call(null,coll);var inst_12675 = inst_12674;var state_12698__$1 = (function (){var statearr_12701 = state_12698;(statearr_12701[(7)] = inst_12675);
return statearr_12701;
})();var statearr_12702_12724 = state_12698__$1;(statearr_12702_12724[(2)] = null);
(statearr_12702_12724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (4)))
{var inst_12675 = (state_12698[(7)]);var inst_12678 = cljs.core.first.call(null,inst_12675);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12698__$1,(7),ch,inst_12678);
} else
{if((state_val_12699 === (13)))
{var inst_12692 = (state_12698[(2)]);var state_12698__$1 = state_12698;var statearr_12703_12725 = state_12698__$1;(statearr_12703_12725[(2)] = inst_12692);
(statearr_12703_12725[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (6)))
{var inst_12683 = (state_12698[(2)]);var state_12698__$1 = state_12698;if(cljs.core.truth_(inst_12683))
{var statearr_12704_12726 = state_12698__$1;(statearr_12704_12726[(1)] = (8));
} else
{var statearr_12705_12727 = state_12698__$1;(statearr_12705_12727[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (3)))
{var inst_12696 = (state_12698[(2)]);var state_12698__$1 = state_12698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12698__$1,inst_12696);
} else
{if((state_val_12699 === (12)))
{var state_12698__$1 = state_12698;var statearr_12706_12728 = state_12698__$1;(statearr_12706_12728[(2)] = null);
(statearr_12706_12728[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (2)))
{var inst_12675 = (state_12698[(7)]);var state_12698__$1 = state_12698;if(cljs.core.truth_(inst_12675))
{var statearr_12707_12729 = state_12698__$1;(statearr_12707_12729[(1)] = (4));
} else
{var statearr_12708_12730 = state_12698__$1;(statearr_12708_12730[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (11)))
{var inst_12689 = cljs.core.async.close_BANG_.call(null,ch);var state_12698__$1 = state_12698;var statearr_12709_12731 = state_12698__$1;(statearr_12709_12731[(2)] = inst_12689);
(statearr_12709_12731[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (9)))
{var state_12698__$1 = state_12698;if(cljs.core.truth_(close_QMARK_))
{var statearr_12710_12732 = state_12698__$1;(statearr_12710_12732[(1)] = (11));
} else
{var statearr_12711_12733 = state_12698__$1;(statearr_12711_12733[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (5)))
{var inst_12675 = (state_12698[(7)]);var state_12698__$1 = state_12698;var statearr_12712_12734 = state_12698__$1;(statearr_12712_12734[(2)] = inst_12675);
(statearr_12712_12734[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (10)))
{var inst_12694 = (state_12698[(2)]);var state_12698__$1 = state_12698;var statearr_12713_12735 = state_12698__$1;(statearr_12713_12735[(2)] = inst_12694);
(statearr_12713_12735[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12699 === (8)))
{var inst_12675 = (state_12698[(7)]);var inst_12685 = cljs.core.next.call(null,inst_12675);var inst_12675__$1 = inst_12685;var state_12698__$1 = (function (){var statearr_12714 = state_12698;(statearr_12714[(7)] = inst_12675__$1);
return statearr_12714;
})();var statearr_12715_12736 = state_12698__$1;(statearr_12715_12736[(2)] = null);
(statearr_12715_12736[(1)] = (2));
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
});})(c__6369__auto__))
;return ((function (switch__6354__auto__,c__6369__auto__){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_12719 = [null,null,null,null,null,null,null,null];(statearr_12719[(0)] = state_machine__6355__auto__);
(statearr_12719[(1)] = (1));
return statearr_12719;
});
var state_machine__6355__auto____1 = (function (state_12698){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_12698);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e12720){if((e12720 instanceof Object))
{var ex__6358__auto__ = e12720;var statearr_12721_12737 = state_12698;(statearr_12721_12737[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12738 = state_12698;
state_12698 = G__12738;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_12698){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_12698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto__))
})();var state__6371__auto__ = (function (){var statearr_12722 = f__6370__auto__.call(null);(statearr_12722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto__);
return statearr_12722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto__))
);
return c__6369__auto__;
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
cljs.core.async.Mux = (function (){var obj12740 = {};return obj12740;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12742 = {};return obj12742;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12964 = (function (cs,ch,mult,meta12965){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12964.cljs$lang$type = true;
cljs.core.async.t12964.cljs$lang$ctorStr = "cljs.core.async/t12964";
cljs.core.async.t12964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12964");
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12966){var self__ = this;
var _12966__$1 = this;return self__.meta12965;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12966,meta12965__$1){var self__ = this;
var _12966__$1 = this;return (new cljs.core.async.t12964(self__.cs,self__.ch,self__.mult,meta12965__$1));
});})(cs))
;
cljs.core.async.__GT_t12964 = ((function (cs){
return (function __GT_t12964(cs__$1,ch__$1,mult__$1,meta12965){return (new cljs.core.async.t12964(cs__$1,ch__$1,mult__$1,meta12965));
});})(cs))
;
}
return (new cljs.core.async.t12964(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6369__auto___13185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___13185,cs,m,dchan,dctr,done){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___13185,cs,m,dchan,dctr,done){
return (function (state_13097){var state_val_13098 = (state_13097[(1)]);if((state_val_13098 === (7)))
{var inst_13093 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13099_13186 = state_13097__$1;(statearr_13099_13186[(2)] = inst_13093);
(statearr_13099_13186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (20)))
{var inst_12998 = (state_13097[(7)]);var inst_13008 = cljs.core.first.call(null,inst_12998);var inst_13009 = cljs.core.nth.call(null,inst_13008,(0),null);var inst_13010 = cljs.core.nth.call(null,inst_13008,(1),null);var state_13097__$1 = (function (){var statearr_13100 = state_13097;(statearr_13100[(8)] = inst_13009);
return statearr_13100;
})();if(cljs.core.truth_(inst_13010))
{var statearr_13101_13187 = state_13097__$1;(statearr_13101_13187[(1)] = (22));
} else
{var statearr_13102_13188 = state_13097__$1;(statearr_13102_13188[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (27)))
{var inst_12969 = (state_13097[(9)]);var inst_13038 = (state_13097[(10)]);var inst_13040 = (state_13097[(11)]);var inst_13045 = (state_13097[(12)]);var inst_13045__$1 = cljs.core._nth.call(null,inst_13038,inst_13040);var inst_13046 = cljs.core.async.put_BANG_.call(null,inst_13045__$1,inst_12969,done);var state_13097__$1 = (function (){var statearr_13103 = state_13097;(statearr_13103[(12)] = inst_13045__$1);
return statearr_13103;
})();if(cljs.core.truth_(inst_13046))
{var statearr_13104_13189 = state_13097__$1;(statearr_13104_13189[(1)] = (30));
} else
{var statearr_13105_13190 = state_13097__$1;(statearr_13105_13190[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (1)))
{var state_13097__$1 = state_13097;var statearr_13106_13191 = state_13097__$1;(statearr_13106_13191[(2)] = null);
(statearr_13106_13191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (24)))
{var inst_12998 = (state_13097[(7)]);var inst_13015 = (state_13097[(2)]);var inst_13016 = cljs.core.next.call(null,inst_12998);var inst_12978 = inst_13016;var inst_12979 = null;var inst_12980 = (0);var inst_12981 = (0);var state_13097__$1 = (function (){var statearr_13107 = state_13097;(statearr_13107[(13)] = inst_13015);
(statearr_13107[(14)] = inst_12979);
(statearr_13107[(15)] = inst_12981);
(statearr_13107[(16)] = inst_12980);
(statearr_13107[(17)] = inst_12978);
return statearr_13107;
})();var statearr_13108_13192 = state_13097__$1;(statearr_13108_13192[(2)] = null);
(statearr_13108_13192[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (39)))
{var state_13097__$1 = state_13097;var statearr_13112_13193 = state_13097__$1;(statearr_13112_13193[(2)] = null);
(statearr_13112_13193[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (4)))
{var inst_12969 = (state_13097[(9)]);var inst_12969__$1 = (state_13097[(2)]);var inst_12970 = (inst_12969__$1 == null);var state_13097__$1 = (function (){var statearr_13113 = state_13097;(statearr_13113[(9)] = inst_12969__$1);
return statearr_13113;
})();if(cljs.core.truth_(inst_12970))
{var statearr_13114_13194 = state_13097__$1;(statearr_13114_13194[(1)] = (5));
} else
{var statearr_13115_13195 = state_13097__$1;(statearr_13115_13195[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (15)))
{var inst_12979 = (state_13097[(14)]);var inst_12981 = (state_13097[(15)]);var inst_12980 = (state_13097[(16)]);var inst_12978 = (state_13097[(17)]);var inst_12994 = (state_13097[(2)]);var inst_12995 = (inst_12981 + (1));var tmp13109 = inst_12979;var tmp13110 = inst_12980;var tmp13111 = inst_12978;var inst_12978__$1 = tmp13111;var inst_12979__$1 = tmp13109;var inst_12980__$1 = tmp13110;var inst_12981__$1 = inst_12995;var state_13097__$1 = (function (){var statearr_13116 = state_13097;(statearr_13116[(14)] = inst_12979__$1);
(statearr_13116[(15)] = inst_12981__$1);
(statearr_13116[(16)] = inst_12980__$1);
(statearr_13116[(18)] = inst_12994);
(statearr_13116[(17)] = inst_12978__$1);
return statearr_13116;
})();var statearr_13117_13196 = state_13097__$1;(statearr_13117_13196[(2)] = null);
(statearr_13117_13196[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (21)))
{var inst_13019 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13121_13197 = state_13097__$1;(statearr_13121_13197[(2)] = inst_13019);
(statearr_13121_13197[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (31)))
{var inst_13045 = (state_13097[(12)]);var inst_13049 = done.call(null,null);var inst_13050 = cljs.core.async.untap_STAR_.call(null,m,inst_13045);var state_13097__$1 = (function (){var statearr_13122 = state_13097;(statearr_13122[(19)] = inst_13049);
return statearr_13122;
})();var statearr_13123_13198 = state_13097__$1;(statearr_13123_13198[(2)] = inst_13050);
(statearr_13123_13198[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (32)))
{var inst_13038 = (state_13097[(10)]);var inst_13040 = (state_13097[(11)]);var inst_13039 = (state_13097[(20)]);var inst_13037 = (state_13097[(21)]);var inst_13052 = (state_13097[(2)]);var inst_13053 = (inst_13040 + (1));var tmp13118 = inst_13038;var tmp13119 = inst_13039;var tmp13120 = inst_13037;var inst_13037__$1 = tmp13120;var inst_13038__$1 = tmp13118;var inst_13039__$1 = tmp13119;var inst_13040__$1 = inst_13053;var state_13097__$1 = (function (){var statearr_13124 = state_13097;(statearr_13124[(22)] = inst_13052);
(statearr_13124[(10)] = inst_13038__$1);
(statearr_13124[(11)] = inst_13040__$1);
(statearr_13124[(20)] = inst_13039__$1);
(statearr_13124[(21)] = inst_13037__$1);
return statearr_13124;
})();var statearr_13125_13199 = state_13097__$1;(statearr_13125_13199[(2)] = null);
(statearr_13125_13199[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (40)))
{var inst_13065 = (state_13097[(23)]);var inst_13069 = done.call(null,null);var inst_13070 = cljs.core.async.untap_STAR_.call(null,m,inst_13065);var state_13097__$1 = (function (){var statearr_13126 = state_13097;(statearr_13126[(24)] = inst_13069);
return statearr_13126;
})();var statearr_13127_13200 = state_13097__$1;(statearr_13127_13200[(2)] = inst_13070);
(statearr_13127_13200[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (33)))
{var inst_13056 = (state_13097[(25)]);var inst_13058 = cljs.core.chunked_seq_QMARK_.call(null,inst_13056);var state_13097__$1 = state_13097;if(inst_13058)
{var statearr_13128_13201 = state_13097__$1;(statearr_13128_13201[(1)] = (36));
} else
{var statearr_13129_13202 = state_13097__$1;(statearr_13129_13202[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (13)))
{var inst_12988 = (state_13097[(26)]);var inst_12991 = cljs.core.async.close_BANG_.call(null,inst_12988);var state_13097__$1 = state_13097;var statearr_13130_13203 = state_13097__$1;(statearr_13130_13203[(2)] = inst_12991);
(statearr_13130_13203[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (22)))
{var inst_13009 = (state_13097[(8)]);var inst_13012 = cljs.core.async.close_BANG_.call(null,inst_13009);var state_13097__$1 = state_13097;var statearr_13131_13204 = state_13097__$1;(statearr_13131_13204[(2)] = inst_13012);
(statearr_13131_13204[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (36)))
{var inst_13056 = (state_13097[(25)]);var inst_13060 = cljs.core.chunk_first.call(null,inst_13056);var inst_13061 = cljs.core.chunk_rest.call(null,inst_13056);var inst_13062 = cljs.core.count.call(null,inst_13060);var inst_13037 = inst_13061;var inst_13038 = inst_13060;var inst_13039 = inst_13062;var inst_13040 = (0);var state_13097__$1 = (function (){var statearr_13132 = state_13097;(statearr_13132[(10)] = inst_13038);
(statearr_13132[(11)] = inst_13040);
(statearr_13132[(20)] = inst_13039);
(statearr_13132[(21)] = inst_13037);
return statearr_13132;
})();var statearr_13133_13205 = state_13097__$1;(statearr_13133_13205[(2)] = null);
(statearr_13133_13205[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (41)))
{var inst_13056 = (state_13097[(25)]);var inst_13072 = (state_13097[(2)]);var inst_13073 = cljs.core.next.call(null,inst_13056);var inst_13037 = inst_13073;var inst_13038 = null;var inst_13039 = (0);var inst_13040 = (0);var state_13097__$1 = (function (){var statearr_13134 = state_13097;(statearr_13134[(10)] = inst_13038);
(statearr_13134[(11)] = inst_13040);
(statearr_13134[(20)] = inst_13039);
(statearr_13134[(27)] = inst_13072);
(statearr_13134[(21)] = inst_13037);
return statearr_13134;
})();var statearr_13135_13206 = state_13097__$1;(statearr_13135_13206[(2)] = null);
(statearr_13135_13206[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (43)))
{var state_13097__$1 = state_13097;var statearr_13136_13207 = state_13097__$1;(statearr_13136_13207[(2)] = null);
(statearr_13136_13207[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (29)))
{var inst_13081 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13137_13208 = state_13097__$1;(statearr_13137_13208[(2)] = inst_13081);
(statearr_13137_13208[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (44)))
{var inst_13090 = (state_13097[(2)]);var state_13097__$1 = (function (){var statearr_13138 = state_13097;(statearr_13138[(28)] = inst_13090);
return statearr_13138;
})();var statearr_13139_13209 = state_13097__$1;(statearr_13139_13209[(2)] = null);
(statearr_13139_13209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (6)))
{var inst_13029 = (state_13097[(29)]);var inst_13028 = cljs.core.deref.call(null,cs);var inst_13029__$1 = cljs.core.keys.call(null,inst_13028);var inst_13030 = cljs.core.count.call(null,inst_13029__$1);var inst_13031 = cljs.core.reset_BANG_.call(null,dctr,inst_13030);var inst_13036 = cljs.core.seq.call(null,inst_13029__$1);var inst_13037 = inst_13036;var inst_13038 = null;var inst_13039 = (0);var inst_13040 = (0);var state_13097__$1 = (function (){var statearr_13140 = state_13097;(statearr_13140[(10)] = inst_13038);
(statearr_13140[(30)] = inst_13031);
(statearr_13140[(29)] = inst_13029__$1);
(statearr_13140[(11)] = inst_13040);
(statearr_13140[(20)] = inst_13039);
(statearr_13140[(21)] = inst_13037);
return statearr_13140;
})();var statearr_13141_13210 = state_13097__$1;(statearr_13141_13210[(2)] = null);
(statearr_13141_13210[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (28)))
{var inst_13056 = (state_13097[(25)]);var inst_13037 = (state_13097[(21)]);var inst_13056__$1 = cljs.core.seq.call(null,inst_13037);var state_13097__$1 = (function (){var statearr_13142 = state_13097;(statearr_13142[(25)] = inst_13056__$1);
return statearr_13142;
})();if(inst_13056__$1)
{var statearr_13143_13211 = state_13097__$1;(statearr_13143_13211[(1)] = (33));
} else
{var statearr_13144_13212 = state_13097__$1;(statearr_13144_13212[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (25)))
{var inst_13040 = (state_13097[(11)]);var inst_13039 = (state_13097[(20)]);var inst_13042 = (inst_13040 < inst_13039);var inst_13043 = inst_13042;var state_13097__$1 = state_13097;if(cljs.core.truth_(inst_13043))
{var statearr_13145_13213 = state_13097__$1;(statearr_13145_13213[(1)] = (27));
} else
{var statearr_13146_13214 = state_13097__$1;(statearr_13146_13214[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (34)))
{var state_13097__$1 = state_13097;var statearr_13147_13215 = state_13097__$1;(statearr_13147_13215[(2)] = null);
(statearr_13147_13215[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (17)))
{var state_13097__$1 = state_13097;var statearr_13148_13216 = state_13097__$1;(statearr_13148_13216[(2)] = null);
(statearr_13148_13216[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (3)))
{var inst_13095 = (state_13097[(2)]);var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else
{if((state_val_13098 === (12)))
{var inst_13024 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13149_13217 = state_13097__$1;(statearr_13149_13217[(2)] = inst_13024);
(statearr_13149_13217[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (2)))
{var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,(4),ch);
} else
{if((state_val_13098 === (23)))
{var state_13097__$1 = state_13097;var statearr_13150_13218 = state_13097__$1;(statearr_13150_13218[(2)] = null);
(statearr_13150_13218[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (35)))
{var inst_13079 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13151_13219 = state_13097__$1;(statearr_13151_13219[(2)] = inst_13079);
(statearr_13151_13219[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (19)))
{var inst_12998 = (state_13097[(7)]);var inst_13002 = cljs.core.chunk_first.call(null,inst_12998);var inst_13003 = cljs.core.chunk_rest.call(null,inst_12998);var inst_13004 = cljs.core.count.call(null,inst_13002);var inst_12978 = inst_13003;var inst_12979 = inst_13002;var inst_12980 = inst_13004;var inst_12981 = (0);var state_13097__$1 = (function (){var statearr_13152 = state_13097;(statearr_13152[(14)] = inst_12979);
(statearr_13152[(15)] = inst_12981);
(statearr_13152[(16)] = inst_12980);
(statearr_13152[(17)] = inst_12978);
return statearr_13152;
})();var statearr_13153_13220 = state_13097__$1;(statearr_13153_13220[(2)] = null);
(statearr_13153_13220[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (11)))
{var inst_12998 = (state_13097[(7)]);var inst_12978 = (state_13097[(17)]);var inst_12998__$1 = cljs.core.seq.call(null,inst_12978);var state_13097__$1 = (function (){var statearr_13154 = state_13097;(statearr_13154[(7)] = inst_12998__$1);
return statearr_13154;
})();if(inst_12998__$1)
{var statearr_13155_13221 = state_13097__$1;(statearr_13155_13221[(1)] = (16));
} else
{var statearr_13156_13222 = state_13097__$1;(statearr_13156_13222[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (9)))
{var inst_13026 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13157_13223 = state_13097__$1;(statearr_13157_13223[(2)] = inst_13026);
(statearr_13157_13223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (5)))
{var inst_12976 = cljs.core.deref.call(null,cs);var inst_12977 = cljs.core.seq.call(null,inst_12976);var inst_12978 = inst_12977;var inst_12979 = null;var inst_12980 = (0);var inst_12981 = (0);var state_13097__$1 = (function (){var statearr_13158 = state_13097;(statearr_13158[(14)] = inst_12979);
(statearr_13158[(15)] = inst_12981);
(statearr_13158[(16)] = inst_12980);
(statearr_13158[(17)] = inst_12978);
return statearr_13158;
})();var statearr_13159_13224 = state_13097__$1;(statearr_13159_13224[(2)] = null);
(statearr_13159_13224[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (14)))
{var state_13097__$1 = state_13097;var statearr_13160_13225 = state_13097__$1;(statearr_13160_13225[(2)] = null);
(statearr_13160_13225[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (45)))
{var inst_13087 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13161_13226 = state_13097__$1;(statearr_13161_13226[(2)] = inst_13087);
(statearr_13161_13226[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (26)))
{var inst_13029 = (state_13097[(29)]);var inst_13083 = (state_13097[(2)]);var inst_13084 = cljs.core.seq.call(null,inst_13029);var state_13097__$1 = (function (){var statearr_13162 = state_13097;(statearr_13162[(31)] = inst_13083);
return statearr_13162;
})();if(inst_13084)
{var statearr_13163_13227 = state_13097__$1;(statearr_13163_13227[(1)] = (42));
} else
{var statearr_13164_13228 = state_13097__$1;(statearr_13164_13228[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (16)))
{var inst_12998 = (state_13097[(7)]);var inst_13000 = cljs.core.chunked_seq_QMARK_.call(null,inst_12998);var state_13097__$1 = state_13097;if(inst_13000)
{var statearr_13165_13229 = state_13097__$1;(statearr_13165_13229[(1)] = (19));
} else
{var statearr_13166_13230 = state_13097__$1;(statearr_13166_13230[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (38)))
{var inst_13076 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13167_13231 = state_13097__$1;(statearr_13167_13231[(2)] = inst_13076);
(statearr_13167_13231[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (30)))
{var state_13097__$1 = state_13097;var statearr_13168_13232 = state_13097__$1;(statearr_13168_13232[(2)] = null);
(statearr_13168_13232[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (10)))
{var inst_12979 = (state_13097[(14)]);var inst_12981 = (state_13097[(15)]);var inst_12987 = cljs.core._nth.call(null,inst_12979,inst_12981);var inst_12988 = cljs.core.nth.call(null,inst_12987,(0),null);var inst_12989 = cljs.core.nth.call(null,inst_12987,(1),null);var state_13097__$1 = (function (){var statearr_13169 = state_13097;(statearr_13169[(26)] = inst_12988);
return statearr_13169;
})();if(cljs.core.truth_(inst_12989))
{var statearr_13170_13233 = state_13097__$1;(statearr_13170_13233[(1)] = (13));
} else
{var statearr_13171_13234 = state_13097__$1;(statearr_13171_13234[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (18)))
{var inst_13022 = (state_13097[(2)]);var state_13097__$1 = state_13097;var statearr_13172_13235 = state_13097__$1;(statearr_13172_13235[(2)] = inst_13022);
(statearr_13172_13235[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (42)))
{var state_13097__$1 = state_13097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,(45),dchan);
} else
{if((state_val_13098 === (37)))
{var inst_12969 = (state_13097[(9)]);var inst_13065 = (state_13097[(23)]);var inst_13056 = (state_13097[(25)]);var inst_13065__$1 = cljs.core.first.call(null,inst_13056);var inst_13066 = cljs.core.async.put_BANG_.call(null,inst_13065__$1,inst_12969,done);var state_13097__$1 = (function (){var statearr_13173 = state_13097;(statearr_13173[(23)] = inst_13065__$1);
return statearr_13173;
})();if(cljs.core.truth_(inst_13066))
{var statearr_13174_13236 = state_13097__$1;(statearr_13174_13236[(1)] = (39));
} else
{var statearr_13175_13237 = state_13097__$1;(statearr_13175_13237[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13098 === (8)))
{var inst_12981 = (state_13097[(15)]);var inst_12980 = (state_13097[(16)]);var inst_12983 = (inst_12981 < inst_12980);var inst_12984 = inst_12983;var state_13097__$1 = state_13097;if(cljs.core.truth_(inst_12984))
{var statearr_13176_13238 = state_13097__$1;(statearr_13176_13238[(1)] = (10));
} else
{var statearr_13177_13239 = state_13097__$1;(statearr_13177_13239[(1)] = (11));
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
});})(c__6369__auto___13185,cs,m,dchan,dctr,done))
;return ((function (switch__6354__auto__,c__6369__auto___13185,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_13181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13181[(0)] = state_machine__6355__auto__);
(statearr_13181[(1)] = (1));
return statearr_13181;
});
var state_machine__6355__auto____1 = (function (state_13097){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_13097);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e13182){if((e13182 instanceof Object))
{var ex__6358__auto__ = e13182;var statearr_13183_13240 = state_13097;(statearr_13183_13240[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13241 = state_13097;
state_13097 = G__13241;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___13185,cs,m,dchan,dctr,done))
})();var state__6371__auto__ = (function (){var statearr_13184 = f__6370__auto__.call(null);(statearr_13184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___13185);
return statearr_13184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___13185,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13243 = {};return obj13243;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
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
;var m = (function (){if(typeof cljs.core.async.t13363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13363 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13364){
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
this.meta13364 = meta13364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13363.cljs$lang$type = true;
cljs.core.async.t13363.cljs$lang$ctorStr = "cljs.core.async/t13363";
cljs.core.async.t13363.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13363");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13365){var self__ = this;
var _13365__$1 = this;return self__.meta13364;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13365,meta13364__$1){var self__ = this;
var _13365__$1 = this;return (new cljs.core.async.t13363(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13364__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13363 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13363(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13364){return (new cljs.core.async.t13363(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13364));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13363(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6369__auto___13482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13435){var state_val_13436 = (state_13435[(1)]);if((state_val_13436 === (7)))
{var inst_13379 = (state_13435[(7)]);var inst_13384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13379);var state_13435__$1 = state_13435;var statearr_13437_13483 = state_13435__$1;(statearr_13437_13483[(2)] = inst_13384);
(statearr_13437_13483[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (20)))
{var inst_13394 = (state_13435[(8)]);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13435__$1,(23),out,inst_13394);
} else
{if((state_val_13436 === (1)))
{var inst_13369 = (state_13435[(9)]);var inst_13369__$1 = calc_state.call(null);var inst_13370 = cljs.core.seq_QMARK_.call(null,inst_13369__$1);var state_13435__$1 = (function (){var statearr_13438 = state_13435;(statearr_13438[(9)] = inst_13369__$1);
return statearr_13438;
})();if(inst_13370)
{var statearr_13439_13484 = state_13435__$1;(statearr_13439_13484[(1)] = (2));
} else
{var statearr_13440_13485 = state_13435__$1;(statearr_13440_13485[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (24)))
{var inst_13387 = (state_13435[(10)]);var inst_13379 = inst_13387;var state_13435__$1 = (function (){var statearr_13441 = state_13435;(statearr_13441[(7)] = inst_13379);
return statearr_13441;
})();var statearr_13442_13486 = state_13435__$1;(statearr_13442_13486[(2)] = null);
(statearr_13442_13486[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (4)))
{var inst_13369 = (state_13435[(9)]);var inst_13375 = (state_13435[(2)]);var inst_13376 = cljs.core.get.call(null,inst_13375,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13377 = cljs.core.get.call(null,inst_13375,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13378 = cljs.core.get.call(null,inst_13375,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13379 = inst_13369;var state_13435__$1 = (function (){var statearr_13443 = state_13435;(statearr_13443[(11)] = inst_13377);
(statearr_13443[(7)] = inst_13379);
(statearr_13443[(12)] = inst_13376);
(statearr_13443[(13)] = inst_13378);
return statearr_13443;
})();var statearr_13444_13487 = state_13435__$1;(statearr_13444_13487[(2)] = null);
(statearr_13444_13487[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (15)))
{var state_13435__$1 = state_13435;var statearr_13445_13488 = state_13435__$1;(statearr_13445_13488[(2)] = null);
(statearr_13445_13488[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (21)))
{var inst_13387 = (state_13435[(10)]);var inst_13379 = inst_13387;var state_13435__$1 = (function (){var statearr_13446 = state_13435;(statearr_13446[(7)] = inst_13379);
return statearr_13446;
})();var statearr_13447_13489 = state_13435__$1;(statearr_13447_13489[(2)] = null);
(statearr_13447_13489[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (13)))
{var inst_13431 = (state_13435[(2)]);var state_13435__$1 = state_13435;var statearr_13448_13490 = state_13435__$1;(statearr_13448_13490[(2)] = inst_13431);
(statearr_13448_13490[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (22)))
{var inst_13429 = (state_13435[(2)]);var state_13435__$1 = state_13435;var statearr_13449_13491 = state_13435__$1;(statearr_13449_13491[(2)] = inst_13429);
(statearr_13449_13491[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (6)))
{var inst_13433 = (state_13435[(2)]);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13435__$1,inst_13433);
} else
{if((state_val_13436 === (25)))
{var state_13435__$1 = state_13435;var statearr_13450_13492 = state_13435__$1;(statearr_13450_13492[(2)] = null);
(statearr_13450_13492[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (17)))
{var inst_13409 = (state_13435[(14)]);var state_13435__$1 = state_13435;var statearr_13451_13493 = state_13435__$1;(statearr_13451_13493[(2)] = inst_13409);
(statearr_13451_13493[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (3)))
{var inst_13369 = (state_13435[(9)]);var state_13435__$1 = state_13435;var statearr_13452_13494 = state_13435__$1;(statearr_13452_13494[(2)] = inst_13369);
(statearr_13452_13494[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (12)))
{var inst_13409 = (state_13435[(14)]);var inst_13395 = (state_13435[(15)]);var inst_13390 = (state_13435[(16)]);var inst_13409__$1 = inst_13390.call(null,inst_13395);var state_13435__$1 = (function (){var statearr_13453 = state_13435;(statearr_13453[(14)] = inst_13409__$1);
return statearr_13453;
})();if(cljs.core.truth_(inst_13409__$1))
{var statearr_13454_13495 = state_13435__$1;(statearr_13454_13495[(1)] = (17));
} else
{var statearr_13455_13496 = state_13435__$1;(statearr_13455_13496[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (2)))
{var inst_13369 = (state_13435[(9)]);var inst_13372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13369);var state_13435__$1 = state_13435;var statearr_13456_13497 = state_13435__$1;(statearr_13456_13497[(2)] = inst_13372);
(statearr_13456_13497[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (23)))
{var inst_13420 = (state_13435[(2)]);var state_13435__$1 = state_13435;if(cljs.core.truth_(inst_13420))
{var statearr_13457_13498 = state_13435__$1;(statearr_13457_13498[(1)] = (24));
} else
{var statearr_13458_13499 = state_13435__$1;(statearr_13458_13499[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (19)))
{var inst_13417 = (state_13435[(2)]);var state_13435__$1 = state_13435;if(cljs.core.truth_(inst_13417))
{var statearr_13459_13500 = state_13435__$1;(statearr_13459_13500[(1)] = (20));
} else
{var statearr_13460_13501 = state_13435__$1;(statearr_13460_13501[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (11)))
{var inst_13394 = (state_13435[(8)]);var inst_13400 = (inst_13394 == null);var state_13435__$1 = state_13435;if(cljs.core.truth_(inst_13400))
{var statearr_13461_13502 = state_13435__$1;(statearr_13461_13502[(1)] = (14));
} else
{var statearr_13462_13503 = state_13435__$1;(statearr_13462_13503[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (9)))
{var inst_13387 = (state_13435[(10)]);var inst_13387__$1 = (state_13435[(2)]);var inst_13388 = cljs.core.get.call(null,inst_13387__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13389 = cljs.core.get.call(null,inst_13387__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13390 = cljs.core.get.call(null,inst_13387__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13435__$1 = (function (){var statearr_13463 = state_13435;(statearr_13463[(10)] = inst_13387__$1);
(statearr_13463[(16)] = inst_13390);
(statearr_13463[(17)] = inst_13389);
return statearr_13463;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13435__$1,(10),inst_13388);
} else
{if((state_val_13436 === (5)))
{var inst_13379 = (state_13435[(7)]);var inst_13382 = cljs.core.seq_QMARK_.call(null,inst_13379);var state_13435__$1 = state_13435;if(inst_13382)
{var statearr_13464_13504 = state_13435__$1;(statearr_13464_13504[(1)] = (7));
} else
{var statearr_13465_13505 = state_13435__$1;(statearr_13465_13505[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (14)))
{var inst_13395 = (state_13435[(15)]);var inst_13402 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13395);var state_13435__$1 = state_13435;var statearr_13466_13506 = state_13435__$1;(statearr_13466_13506[(2)] = inst_13402);
(statearr_13466_13506[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (26)))
{var inst_13425 = (state_13435[(2)]);var state_13435__$1 = state_13435;var statearr_13467_13507 = state_13435__$1;(statearr_13467_13507[(2)] = inst_13425);
(statearr_13467_13507[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (16)))
{var inst_13405 = (state_13435[(2)]);var inst_13406 = calc_state.call(null);var inst_13379 = inst_13406;var state_13435__$1 = (function (){var statearr_13468 = state_13435;(statearr_13468[(7)] = inst_13379);
(statearr_13468[(18)] = inst_13405);
return statearr_13468;
})();var statearr_13469_13508 = state_13435__$1;(statearr_13469_13508[(2)] = null);
(statearr_13469_13508[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (10)))
{var inst_13394 = (state_13435[(8)]);var inst_13395 = (state_13435[(15)]);var inst_13393 = (state_13435[(2)]);var inst_13394__$1 = cljs.core.nth.call(null,inst_13393,(0),null);var inst_13395__$1 = cljs.core.nth.call(null,inst_13393,(1),null);var inst_13396 = (inst_13394__$1 == null);var inst_13397 = cljs.core._EQ_.call(null,inst_13395__$1,change);var inst_13398 = (inst_13396) || (inst_13397);var state_13435__$1 = (function (){var statearr_13470 = state_13435;(statearr_13470[(8)] = inst_13394__$1);
(statearr_13470[(15)] = inst_13395__$1);
return statearr_13470;
})();if(cljs.core.truth_(inst_13398))
{var statearr_13471_13509 = state_13435__$1;(statearr_13471_13509[(1)] = (11));
} else
{var statearr_13472_13510 = state_13435__$1;(statearr_13472_13510[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (18)))
{var inst_13395 = (state_13435[(15)]);var inst_13390 = (state_13435[(16)]);var inst_13389 = (state_13435[(17)]);var inst_13412 = cljs.core.empty_QMARK_.call(null,inst_13390);var inst_13413 = inst_13389.call(null,inst_13395);var inst_13414 = cljs.core.not.call(null,inst_13413);var inst_13415 = (inst_13412) && (inst_13414);var state_13435__$1 = state_13435;var statearr_13473_13511 = state_13435__$1;(statearr_13473_13511[(2)] = inst_13415);
(statearr_13473_13511[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (8)))
{var inst_13379 = (state_13435[(7)]);var state_13435__$1 = state_13435;var statearr_13474_13512 = state_13435__$1;(statearr_13474_13512[(2)] = inst_13379);
(statearr_13474_13512[(1)] = (9));
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
});})(c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6354__auto__,c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_13478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13478[(0)] = state_machine__6355__auto__);
(statearr_13478[(1)] = (1));
return statearr_13478;
});
var state_machine__6355__auto____1 = (function (state_13435){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_13435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e13479){if((e13479 instanceof Object))
{var ex__6358__auto__ = e13479;var statearr_13480_13513 = state_13435;(statearr_13480_13513[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13514 = state_13435;
state_13435 = G__13514;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_13435){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_13435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6371__auto__ = (function (){var statearr_13481 = f__6370__auto__.call(null);(statearr_13481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___13482);
return statearr_13481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___13482,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13516 = {};return obj13516;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__13517_SHARP_){if(cljs.core.truth_(p1__13517_SHARP_.call(null,topic)))
{return p1__13517_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13640 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13641){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13641 = meta13641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13640.cljs$lang$type = true;
cljs.core.async.t13640.cljs$lang$ctorStr = "cljs.core.async/t13640";
cljs.core.async.t13640.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13640");
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13640.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13642){var self__ = this;
var _13642__$1 = this;return self__.meta13641;
});})(mults,ensure_mult))
;
cljs.core.async.t13640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13642,meta13641__$1){var self__ = this;
var _13642__$1 = this;return (new cljs.core.async.t13640(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13641__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13640 = ((function (mults,ensure_mult){
return (function __GT_t13640(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13641){return (new cljs.core.async.t13640(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13641));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13640(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6369__auto___13762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___13762,mults,ensure_mult,p){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___13762,mults,ensure_mult,p){
return (function (state_13714){var state_val_13715 = (state_13714[(1)]);if((state_val_13715 === (7)))
{var inst_13710 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13716_13763 = state_13714__$1;(statearr_13716_13763[(2)] = inst_13710);
(statearr_13716_13763[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (20)))
{var state_13714__$1 = state_13714;var statearr_13717_13764 = state_13714__$1;(statearr_13717_13764[(2)] = null);
(statearr_13717_13764[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (1)))
{var state_13714__$1 = state_13714;var statearr_13718_13765 = state_13714__$1;(statearr_13718_13765[(2)] = null);
(statearr_13718_13765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (24)))
{var inst_13693 = (state_13714[(7)]);var inst_13702 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13693);var state_13714__$1 = state_13714;var statearr_13719_13766 = state_13714__$1;(statearr_13719_13766[(2)] = inst_13702);
(statearr_13719_13766[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (4)))
{var inst_13645 = (state_13714[(8)]);var inst_13645__$1 = (state_13714[(2)]);var inst_13646 = (inst_13645__$1 == null);var state_13714__$1 = (function (){var statearr_13720 = state_13714;(statearr_13720[(8)] = inst_13645__$1);
return statearr_13720;
})();if(cljs.core.truth_(inst_13646))
{var statearr_13721_13767 = state_13714__$1;(statearr_13721_13767[(1)] = (5));
} else
{var statearr_13722_13768 = state_13714__$1;(statearr_13722_13768[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (15)))
{var inst_13687 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13723_13769 = state_13714__$1;(statearr_13723_13769[(2)] = inst_13687);
(statearr_13723_13769[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (21)))
{var inst_13707 = (state_13714[(2)]);var state_13714__$1 = (function (){var statearr_13724 = state_13714;(statearr_13724[(9)] = inst_13707);
return statearr_13724;
})();var statearr_13725_13770 = state_13714__$1;(statearr_13725_13770[(2)] = null);
(statearr_13725_13770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (13)))
{var inst_13669 = (state_13714[(10)]);var inst_13671 = cljs.core.chunked_seq_QMARK_.call(null,inst_13669);var state_13714__$1 = state_13714;if(inst_13671)
{var statearr_13726_13771 = state_13714__$1;(statearr_13726_13771[(1)] = (16));
} else
{var statearr_13727_13772 = state_13714__$1;(statearr_13727_13772[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (22)))
{var inst_13699 = (state_13714[(2)]);var state_13714__$1 = state_13714;if(cljs.core.truth_(inst_13699))
{var statearr_13728_13773 = state_13714__$1;(statearr_13728_13773[(1)] = (23));
} else
{var statearr_13729_13774 = state_13714__$1;(statearr_13729_13774[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (6)))
{var inst_13695 = (state_13714[(11)]);var inst_13645 = (state_13714[(8)]);var inst_13693 = (state_13714[(7)]);var inst_13693__$1 = topic_fn.call(null,inst_13645);var inst_13694 = cljs.core.deref.call(null,mults);var inst_13695__$1 = cljs.core.get.call(null,inst_13694,inst_13693__$1);var state_13714__$1 = (function (){var statearr_13730 = state_13714;(statearr_13730[(11)] = inst_13695__$1);
(statearr_13730[(7)] = inst_13693__$1);
return statearr_13730;
})();if(cljs.core.truth_(inst_13695__$1))
{var statearr_13731_13775 = state_13714__$1;(statearr_13731_13775[(1)] = (19));
} else
{var statearr_13732_13776 = state_13714__$1;(statearr_13732_13776[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (25)))
{var inst_13704 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13733_13777 = state_13714__$1;(statearr_13733_13777[(2)] = inst_13704);
(statearr_13733_13777[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (17)))
{var inst_13669 = (state_13714[(10)]);var inst_13678 = cljs.core.first.call(null,inst_13669);var inst_13679 = cljs.core.async.muxch_STAR_.call(null,inst_13678);var inst_13680 = cljs.core.async.close_BANG_.call(null,inst_13679);var inst_13681 = cljs.core.next.call(null,inst_13669);var inst_13655 = inst_13681;var inst_13656 = null;var inst_13657 = (0);var inst_13658 = (0);var state_13714__$1 = (function (){var statearr_13734 = state_13714;(statearr_13734[(12)] = inst_13655);
(statearr_13734[(13)] = inst_13658);
(statearr_13734[(14)] = inst_13656);
(statearr_13734[(15)] = inst_13657);
(statearr_13734[(16)] = inst_13680);
return statearr_13734;
})();var statearr_13735_13778 = state_13714__$1;(statearr_13735_13778[(2)] = null);
(statearr_13735_13778[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (3)))
{var inst_13712 = (state_13714[(2)]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13714__$1,inst_13712);
} else
{if((state_val_13715 === (12)))
{var inst_13689 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13736_13779 = state_13714__$1;(statearr_13736_13779[(2)] = inst_13689);
(statearr_13736_13779[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (2)))
{var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13714__$1,(4),ch);
} else
{if((state_val_13715 === (23)))
{var state_13714__$1 = state_13714;var statearr_13737_13780 = state_13714__$1;(statearr_13737_13780[(2)] = null);
(statearr_13737_13780[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (19)))
{var inst_13695 = (state_13714[(11)]);var inst_13645 = (state_13714[(8)]);var inst_13697 = cljs.core.async.muxch_STAR_.call(null,inst_13695);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13714__$1,(22),inst_13697,inst_13645);
} else
{if((state_val_13715 === (11)))
{var inst_13655 = (state_13714[(12)]);var inst_13669 = (state_13714[(10)]);var inst_13669__$1 = cljs.core.seq.call(null,inst_13655);var state_13714__$1 = (function (){var statearr_13738 = state_13714;(statearr_13738[(10)] = inst_13669__$1);
return statearr_13738;
})();if(inst_13669__$1)
{var statearr_13739_13781 = state_13714__$1;(statearr_13739_13781[(1)] = (13));
} else
{var statearr_13740_13782 = state_13714__$1;(statearr_13740_13782[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (9)))
{var inst_13691 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13741_13783 = state_13714__$1;(statearr_13741_13783[(2)] = inst_13691);
(statearr_13741_13783[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (5)))
{var inst_13652 = cljs.core.deref.call(null,mults);var inst_13653 = cljs.core.vals.call(null,inst_13652);var inst_13654 = cljs.core.seq.call(null,inst_13653);var inst_13655 = inst_13654;var inst_13656 = null;var inst_13657 = (0);var inst_13658 = (0);var state_13714__$1 = (function (){var statearr_13742 = state_13714;(statearr_13742[(12)] = inst_13655);
(statearr_13742[(13)] = inst_13658);
(statearr_13742[(14)] = inst_13656);
(statearr_13742[(15)] = inst_13657);
return statearr_13742;
})();var statearr_13743_13784 = state_13714__$1;(statearr_13743_13784[(2)] = null);
(statearr_13743_13784[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (14)))
{var state_13714__$1 = state_13714;var statearr_13747_13785 = state_13714__$1;(statearr_13747_13785[(2)] = null);
(statearr_13747_13785[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (16)))
{var inst_13669 = (state_13714[(10)]);var inst_13673 = cljs.core.chunk_first.call(null,inst_13669);var inst_13674 = cljs.core.chunk_rest.call(null,inst_13669);var inst_13675 = cljs.core.count.call(null,inst_13673);var inst_13655 = inst_13674;var inst_13656 = inst_13673;var inst_13657 = inst_13675;var inst_13658 = (0);var state_13714__$1 = (function (){var statearr_13748 = state_13714;(statearr_13748[(12)] = inst_13655);
(statearr_13748[(13)] = inst_13658);
(statearr_13748[(14)] = inst_13656);
(statearr_13748[(15)] = inst_13657);
return statearr_13748;
})();var statearr_13749_13786 = state_13714__$1;(statearr_13749_13786[(2)] = null);
(statearr_13749_13786[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (10)))
{var inst_13655 = (state_13714[(12)]);var inst_13658 = (state_13714[(13)]);var inst_13656 = (state_13714[(14)]);var inst_13657 = (state_13714[(15)]);var inst_13663 = cljs.core._nth.call(null,inst_13656,inst_13658);var inst_13664 = cljs.core.async.muxch_STAR_.call(null,inst_13663);var inst_13665 = cljs.core.async.close_BANG_.call(null,inst_13664);var inst_13666 = (inst_13658 + (1));var tmp13744 = inst_13655;var tmp13745 = inst_13656;var tmp13746 = inst_13657;var inst_13655__$1 = tmp13744;var inst_13656__$1 = tmp13745;var inst_13657__$1 = tmp13746;var inst_13658__$1 = inst_13666;var state_13714__$1 = (function (){var statearr_13750 = state_13714;(statearr_13750[(12)] = inst_13655__$1);
(statearr_13750[(13)] = inst_13658__$1);
(statearr_13750[(14)] = inst_13656__$1);
(statearr_13750[(17)] = inst_13665);
(statearr_13750[(15)] = inst_13657__$1);
return statearr_13750;
})();var statearr_13751_13787 = state_13714__$1;(statearr_13751_13787[(2)] = null);
(statearr_13751_13787[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (18)))
{var inst_13684 = (state_13714[(2)]);var state_13714__$1 = state_13714;var statearr_13752_13788 = state_13714__$1;(statearr_13752_13788[(2)] = inst_13684);
(statearr_13752_13788[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13715 === (8)))
{var inst_13658 = (state_13714[(13)]);var inst_13657 = (state_13714[(15)]);var inst_13660 = (inst_13658 < inst_13657);var inst_13661 = inst_13660;var state_13714__$1 = state_13714;if(cljs.core.truth_(inst_13661))
{var statearr_13753_13789 = state_13714__$1;(statearr_13753_13789[(1)] = (10));
} else
{var statearr_13754_13790 = state_13714__$1;(statearr_13754_13790[(1)] = (11));
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
});})(c__6369__auto___13762,mults,ensure_mult,p))
;return ((function (switch__6354__auto__,c__6369__auto___13762,mults,ensure_mult,p){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_13758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13758[(0)] = state_machine__6355__auto__);
(statearr_13758[(1)] = (1));
return statearr_13758;
});
var state_machine__6355__auto____1 = (function (state_13714){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_13714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e13759){if((e13759 instanceof Object))
{var ex__6358__auto__ = e13759;var statearr_13760_13791 = state_13714;(statearr_13760_13791[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13792 = state_13714;
state_13714 = G__13792;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_13714){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_13714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___13762,mults,ensure_mult,p))
})();var state__6371__auto__ = (function (){var statearr_13761 = f__6370__auto__.call(null);(statearr_13761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___13762);
return statearr_13761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___13762,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6369__auto___13929 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13899){var state_val_13900 = (state_13899[(1)]);if((state_val_13900 === (7)))
{var state_13899__$1 = state_13899;var statearr_13901_13930 = state_13899__$1;(statearr_13901_13930[(2)] = null);
(statearr_13901_13930[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (1)))
{var state_13899__$1 = state_13899;var statearr_13902_13931 = state_13899__$1;(statearr_13902_13931[(2)] = null);
(statearr_13902_13931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (4)))
{var inst_13863 = (state_13899[(7)]);var inst_13865 = (inst_13863 < cnt);var state_13899__$1 = state_13899;if(cljs.core.truth_(inst_13865))
{var statearr_13903_13932 = state_13899__$1;(statearr_13903_13932[(1)] = (6));
} else
{var statearr_13904_13933 = state_13899__$1;(statearr_13904_13933[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (15)))
{var inst_13895 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13905_13934 = state_13899__$1;(statearr_13905_13934[(2)] = inst_13895);
(statearr_13905_13934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (13)))
{var inst_13888 = cljs.core.async.close_BANG_.call(null,out);var state_13899__$1 = state_13899;var statearr_13906_13935 = state_13899__$1;(statearr_13906_13935[(2)] = inst_13888);
(statearr_13906_13935[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (6)))
{var state_13899__$1 = state_13899;var statearr_13907_13936 = state_13899__$1;(statearr_13907_13936[(2)] = null);
(statearr_13907_13936[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (3)))
{var inst_13897 = (state_13899[(2)]);var state_13899__$1 = state_13899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13899__$1,inst_13897);
} else
{if((state_val_13900 === (12)))
{var inst_13885 = (state_13899[(8)]);var inst_13885__$1 = (state_13899[(2)]);var inst_13886 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13885__$1);var state_13899__$1 = (function (){var statearr_13908 = state_13899;(statearr_13908[(8)] = inst_13885__$1);
return statearr_13908;
})();if(cljs.core.truth_(inst_13886))
{var statearr_13909_13937 = state_13899__$1;(statearr_13909_13937[(1)] = (13));
} else
{var statearr_13910_13938 = state_13899__$1;(statearr_13910_13938[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (2)))
{var inst_13862 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13863 = (0);var state_13899__$1 = (function (){var statearr_13911 = state_13899;(statearr_13911[(9)] = inst_13862);
(statearr_13911[(7)] = inst_13863);
return statearr_13911;
})();var statearr_13912_13939 = state_13899__$1;(statearr_13912_13939[(2)] = null);
(statearr_13912_13939[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (11)))
{var inst_13863 = (state_13899[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13899,(10),Object,null,(9));var inst_13872 = chs__$1.call(null,inst_13863);var inst_13873 = done.call(null,inst_13863);var inst_13874 = cljs.core.async.take_BANG_.call(null,inst_13872,inst_13873);var state_13899__$1 = state_13899;var statearr_13913_13940 = state_13899__$1;(statearr_13913_13940[(2)] = inst_13874);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (9)))
{var inst_13863 = (state_13899[(7)]);var inst_13876 = (state_13899[(2)]);var inst_13877 = (inst_13863 + (1));var inst_13863__$1 = inst_13877;var state_13899__$1 = (function (){var statearr_13914 = state_13899;(statearr_13914[(7)] = inst_13863__$1);
(statearr_13914[(10)] = inst_13876);
return statearr_13914;
})();var statearr_13915_13941 = state_13899__$1;(statearr_13915_13941[(2)] = null);
(statearr_13915_13941[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (5)))
{var inst_13883 = (state_13899[(2)]);var state_13899__$1 = (function (){var statearr_13916 = state_13899;(statearr_13916[(11)] = inst_13883);
return statearr_13916;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13899__$1,(12),dchan);
} else
{if((state_val_13900 === (14)))
{var inst_13885 = (state_13899[(8)]);var inst_13890 = cljs.core.apply.call(null,f,inst_13885);var state_13899__$1 = state_13899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13899__$1,(16),out,inst_13890);
} else
{if((state_val_13900 === (16)))
{var inst_13892 = (state_13899[(2)]);var state_13899__$1 = (function (){var statearr_13917 = state_13899;(statearr_13917[(12)] = inst_13892);
return statearr_13917;
})();var statearr_13918_13942 = state_13899__$1;(statearr_13918_13942[(2)] = null);
(statearr_13918_13942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (10)))
{var inst_13867 = (state_13899[(2)]);var inst_13868 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13899__$1 = (function (){var statearr_13919 = state_13899;(statearr_13919[(13)] = inst_13867);
return statearr_13919;
})();var statearr_13920_13943 = state_13899__$1;(statearr_13920_13943[(2)] = inst_13868);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (8)))
{var inst_13881 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13921_13944 = state_13899__$1;(statearr_13921_13944[(2)] = inst_13881);
(statearr_13921_13944[(1)] = (5));
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
});})(c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6354__auto__,c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_13925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13925[(0)] = state_machine__6355__auto__);
(statearr_13925[(1)] = (1));
return statearr_13925;
});
var state_machine__6355__auto____1 = (function (state_13899){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_13899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e13926){if((e13926 instanceof Object))
{var ex__6358__auto__ = e13926;var statearr_13927_13945 = state_13899;(statearr_13927_13945[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13946 = state_13899;
state_13899 = G__13946;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_13899){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_13899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6371__auto__ = (function (){var statearr_13928 = f__6370__auto__.call(null);(statearr_13928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___13929);
return statearr_13928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___13929,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14054 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14054,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14054,out){
return (function (state_14030){var state_val_14031 = (state_14030[(1)]);if((state_val_14031 === (7)))
{var inst_14009 = (state_14030[(7)]);var inst_14010 = (state_14030[(8)]);var inst_14009__$1 = (state_14030[(2)]);var inst_14010__$1 = cljs.core.nth.call(null,inst_14009__$1,(0),null);var inst_14011 = cljs.core.nth.call(null,inst_14009__$1,(1),null);var inst_14012 = (inst_14010__$1 == null);var state_14030__$1 = (function (){var statearr_14032 = state_14030;(statearr_14032[(7)] = inst_14009__$1);
(statearr_14032[(8)] = inst_14010__$1);
(statearr_14032[(9)] = inst_14011);
return statearr_14032;
})();if(cljs.core.truth_(inst_14012))
{var statearr_14033_14055 = state_14030__$1;(statearr_14033_14055[(1)] = (8));
} else
{var statearr_14034_14056 = state_14030__$1;(statearr_14034_14056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (1)))
{var inst_14001 = cljs.core.vec.call(null,chs);var inst_14002 = inst_14001;var state_14030__$1 = (function (){var statearr_14035 = state_14030;(statearr_14035[(10)] = inst_14002);
return statearr_14035;
})();var statearr_14036_14057 = state_14030__$1;(statearr_14036_14057[(2)] = null);
(statearr_14036_14057[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (4)))
{var inst_14002 = (state_14030[(10)]);var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14030__$1,(7),inst_14002);
} else
{if((state_val_14031 === (6)))
{var inst_14026 = (state_14030[(2)]);var state_14030__$1 = state_14030;var statearr_14037_14058 = state_14030__$1;(statearr_14037_14058[(2)] = inst_14026);
(statearr_14037_14058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (3)))
{var inst_14028 = (state_14030[(2)]);var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14030__$1,inst_14028);
} else
{if((state_val_14031 === (2)))
{var inst_14002 = (state_14030[(10)]);var inst_14004 = cljs.core.count.call(null,inst_14002);var inst_14005 = (inst_14004 > (0));var state_14030__$1 = state_14030;if(cljs.core.truth_(inst_14005))
{var statearr_14039_14059 = state_14030__$1;(statearr_14039_14059[(1)] = (4));
} else
{var statearr_14040_14060 = state_14030__$1;(statearr_14040_14060[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (11)))
{var inst_14002 = (state_14030[(10)]);var inst_14019 = (state_14030[(2)]);var tmp14038 = inst_14002;var inst_14002__$1 = tmp14038;var state_14030__$1 = (function (){var statearr_14041 = state_14030;(statearr_14041[(10)] = inst_14002__$1);
(statearr_14041[(11)] = inst_14019);
return statearr_14041;
})();var statearr_14042_14061 = state_14030__$1;(statearr_14042_14061[(2)] = null);
(statearr_14042_14061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (9)))
{var inst_14010 = (state_14030[(8)]);var state_14030__$1 = state_14030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14030__$1,(11),out,inst_14010);
} else
{if((state_val_14031 === (5)))
{var inst_14024 = cljs.core.async.close_BANG_.call(null,out);var state_14030__$1 = state_14030;var statearr_14043_14062 = state_14030__$1;(statearr_14043_14062[(2)] = inst_14024);
(statearr_14043_14062[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (10)))
{var inst_14022 = (state_14030[(2)]);var state_14030__$1 = state_14030;var statearr_14044_14063 = state_14030__$1;(statearr_14044_14063[(2)] = inst_14022);
(statearr_14044_14063[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14031 === (8)))
{var inst_14002 = (state_14030[(10)]);var inst_14009 = (state_14030[(7)]);var inst_14010 = (state_14030[(8)]);var inst_14011 = (state_14030[(9)]);var inst_14014 = (function (){var c = inst_14011;var v = inst_14010;var vec__14007 = inst_14009;var cs = inst_14002;return ((function (c,v,vec__14007,cs,inst_14002,inst_14009,inst_14010,inst_14011,state_val_14031,c__6369__auto___14054,out){
return (function (p1__13947_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13947_SHARP_);
});
;})(c,v,vec__14007,cs,inst_14002,inst_14009,inst_14010,inst_14011,state_val_14031,c__6369__auto___14054,out))
})();var inst_14015 = cljs.core.filterv.call(null,inst_14014,inst_14002);var inst_14002__$1 = inst_14015;var state_14030__$1 = (function (){var statearr_14045 = state_14030;(statearr_14045[(10)] = inst_14002__$1);
return statearr_14045;
})();var statearr_14046_14064 = state_14030__$1;(statearr_14046_14064[(2)] = null);
(statearr_14046_14064[(1)] = (2));
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
});})(c__6369__auto___14054,out))
;return ((function (switch__6354__auto__,c__6369__auto___14054,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14050 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14050[(0)] = state_machine__6355__auto__);
(statearr_14050[(1)] = (1));
return statearr_14050;
});
var state_machine__6355__auto____1 = (function (state_14030){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14051){if((e14051 instanceof Object))
{var ex__6358__auto__ = e14051;var statearr_14052_14065 = state_14030;(statearr_14052_14065[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14066 = state_14030;
state_14030 = G__14066;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14030){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14054,out))
})();var state__6371__auto__ = (function (){var statearr_14053 = f__6370__auto__.call(null);(statearr_14053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14054);
return statearr_14053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14054,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14159,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14159,out){
return (function (state_14136){var state_val_14137 = (state_14136[(1)]);if((state_val_14137 === (7)))
{var inst_14118 = (state_14136[(7)]);var inst_14118__$1 = (state_14136[(2)]);var inst_14119 = (inst_14118__$1 == null);var inst_14120 = cljs.core.not.call(null,inst_14119);var state_14136__$1 = (function (){var statearr_14138 = state_14136;(statearr_14138[(7)] = inst_14118__$1);
return statearr_14138;
})();if(inst_14120)
{var statearr_14139_14160 = state_14136__$1;(statearr_14139_14160[(1)] = (8));
} else
{var statearr_14140_14161 = state_14136__$1;(statearr_14140_14161[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (1)))
{var inst_14113 = (0);var state_14136__$1 = (function (){var statearr_14141 = state_14136;(statearr_14141[(8)] = inst_14113);
return statearr_14141;
})();var statearr_14142_14162 = state_14136__$1;(statearr_14142_14162[(2)] = null);
(statearr_14142_14162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (4)))
{var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14136__$1,(7),ch);
} else
{if((state_val_14137 === (6)))
{var inst_14131 = (state_14136[(2)]);var state_14136__$1 = state_14136;var statearr_14143_14163 = state_14136__$1;(statearr_14143_14163[(2)] = inst_14131);
(statearr_14143_14163[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (3)))
{var inst_14133 = (state_14136[(2)]);var inst_14134 = cljs.core.async.close_BANG_.call(null,out);var state_14136__$1 = (function (){var statearr_14144 = state_14136;(statearr_14144[(9)] = inst_14133);
return statearr_14144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14136__$1,inst_14134);
} else
{if((state_val_14137 === (2)))
{var inst_14113 = (state_14136[(8)]);var inst_14115 = (inst_14113 < n);var state_14136__$1 = state_14136;if(cljs.core.truth_(inst_14115))
{var statearr_14145_14164 = state_14136__$1;(statearr_14145_14164[(1)] = (4));
} else
{var statearr_14146_14165 = state_14136__$1;(statearr_14146_14165[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (11)))
{var inst_14113 = (state_14136[(8)]);var inst_14123 = (state_14136[(2)]);var inst_14124 = (inst_14113 + (1));var inst_14113__$1 = inst_14124;var state_14136__$1 = (function (){var statearr_14147 = state_14136;(statearr_14147[(10)] = inst_14123);
(statearr_14147[(8)] = inst_14113__$1);
return statearr_14147;
})();var statearr_14148_14166 = state_14136__$1;(statearr_14148_14166[(2)] = null);
(statearr_14148_14166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (9)))
{var state_14136__$1 = state_14136;var statearr_14149_14167 = state_14136__$1;(statearr_14149_14167[(2)] = null);
(statearr_14149_14167[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (5)))
{var state_14136__$1 = state_14136;var statearr_14150_14168 = state_14136__$1;(statearr_14150_14168[(2)] = null);
(statearr_14150_14168[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (10)))
{var inst_14128 = (state_14136[(2)]);var state_14136__$1 = state_14136;var statearr_14151_14169 = state_14136__$1;(statearr_14151_14169[(2)] = inst_14128);
(statearr_14151_14169[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14137 === (8)))
{var inst_14118 = (state_14136[(7)]);var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14136__$1,(11),out,inst_14118);
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
});})(c__6369__auto___14159,out))
;return ((function (switch__6354__auto__,c__6369__auto___14159,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14155 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14155[(0)] = state_machine__6355__auto__);
(statearr_14155[(1)] = (1));
return statearr_14155;
});
var state_machine__6355__auto____1 = (function (state_14136){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14136);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14156){if((e14156 instanceof Object))
{var ex__6358__auto__ = e14156;var statearr_14157_14170 = state_14136;(statearr_14157_14170[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14171 = state_14136;
state_14136 = G__14171;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14136){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14159,out))
})();var state__6371__auto__ = (function (){var statearr_14158 = f__6370__auto__.call(null);(statearr_14158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14159);
return statearr_14158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14159,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14179 = (function (ch,f,map_LT_,meta14180){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14180 = meta14180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14179.cljs$lang$type = true;
cljs.core.async.t14179.cljs$lang$ctorStr = "cljs.core.async/t14179";
cljs.core.async.t14179.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t14179");
});
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14182 = (function (fn1,_,meta14180,ch,f,map_LT_,meta14183){
this.fn1 = fn1;
this._ = _;
this.meta14180 = meta14180;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14183 = meta14183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14182.cljs$lang$type = true;
cljs.core.async.t14182.cljs$lang$ctorStr = "cljs.core.async/t14182";
cljs.core.async.t14182.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t14182");
});})(___$1))
;
cljs.core.async.t14182.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14182.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14172_SHARP_){return f1.call(null,(((p1__14172_SHARP_ == null))?null:self__.f.call(null,p1__14172_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14184){var self__ = this;
var _14184__$1 = this;return self__.meta14183;
});})(___$1))
;
cljs.core.async.t14182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14184,meta14183__$1){var self__ = this;
var _14184__$1 = this;return (new cljs.core.async.t14182(self__.fn1,self__._,self__.meta14180,self__.ch,self__.f,self__.map_LT_,meta14183__$1));
});})(___$1))
;
cljs.core.async.__GT_t14182 = ((function (___$1){
return (function __GT_t14182(fn1__$1,___$2,meta14180__$1,ch__$2,f__$2,map_LT___$2,meta14183){return (new cljs.core.async.t14182(fn1__$1,___$2,meta14180__$1,ch__$2,f__$2,map_LT___$2,meta14183));
});})(___$1))
;
}
return (new cljs.core.async.t14182(fn1,___$1,self__.meta14180,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14181){var self__ = this;
var _14181__$1 = this;return self__.meta14180;
});
cljs.core.async.t14179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14181,meta14180__$1){var self__ = this;
var _14181__$1 = this;return (new cljs.core.async.t14179(self__.ch,self__.f,self__.map_LT_,meta14180__$1));
});
cljs.core.async.__GT_t14179 = (function __GT_t14179(ch__$1,f__$1,map_LT___$1,meta14180){return (new cljs.core.async.t14179(ch__$1,f__$1,map_LT___$1,meta14180));
});
}
return (new cljs.core.async.t14179(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14188 = (function (ch,f,map_GT_,meta14189){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14189 = meta14189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14188.cljs$lang$type = true;
cljs.core.async.t14188.cljs$lang$ctorStr = "cljs.core.async/t14188";
cljs.core.async.t14188.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t14188");
});
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14190){var self__ = this;
var _14190__$1 = this;return self__.meta14189;
});
cljs.core.async.t14188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14190,meta14189__$1){var self__ = this;
var _14190__$1 = this;return (new cljs.core.async.t14188(self__.ch,self__.f,self__.map_GT_,meta14189__$1));
});
cljs.core.async.__GT_t14188 = (function __GT_t14188(ch__$1,f__$1,map_GT___$1,meta14189){return (new cljs.core.async.t14188(ch__$1,f__$1,map_GT___$1,meta14189));
});
}
return (new cljs.core.async.t14188(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14194 = (function (ch,p,filter_GT_,meta14195){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14195 = meta14195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14194.cljs$lang$type = true;
cljs.core.async.t14194.cljs$lang$ctorStr = "cljs.core.async/t14194";
cljs.core.async.t14194.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t14194");
});
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14196){var self__ = this;
var _14196__$1 = this;return self__.meta14195;
});
cljs.core.async.t14194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14196,meta14195__$1){var self__ = this;
var _14196__$1 = this;return (new cljs.core.async.t14194(self__.ch,self__.p,self__.filter_GT_,meta14195__$1));
});
cljs.core.async.__GT_t14194 = (function __GT_t14194(ch__$1,p__$1,filter_GT___$1,meta14195){return (new cljs.core.async.t14194(ch__$1,p__$1,filter_GT___$1,meta14195));
});
}
return (new cljs.core.async.t14194(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14279,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14279,out){
return (function (state_14258){var state_val_14259 = (state_14258[(1)]);if((state_val_14259 === (7)))
{var inst_14254 = (state_14258[(2)]);var state_14258__$1 = state_14258;var statearr_14260_14280 = state_14258__$1;(statearr_14260_14280[(2)] = inst_14254);
(statearr_14260_14280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (1)))
{var state_14258__$1 = state_14258;var statearr_14261_14281 = state_14258__$1;(statearr_14261_14281[(2)] = null);
(statearr_14261_14281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (4)))
{var inst_14240 = (state_14258[(7)]);var inst_14240__$1 = (state_14258[(2)]);var inst_14241 = (inst_14240__$1 == null);var state_14258__$1 = (function (){var statearr_14262 = state_14258;(statearr_14262[(7)] = inst_14240__$1);
return statearr_14262;
})();if(cljs.core.truth_(inst_14241))
{var statearr_14263_14282 = state_14258__$1;(statearr_14263_14282[(1)] = (5));
} else
{var statearr_14264_14283 = state_14258__$1;(statearr_14264_14283[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (6)))
{var inst_14240 = (state_14258[(7)]);var inst_14245 = p.call(null,inst_14240);var state_14258__$1 = state_14258;if(cljs.core.truth_(inst_14245))
{var statearr_14265_14284 = state_14258__$1;(statearr_14265_14284[(1)] = (8));
} else
{var statearr_14266_14285 = state_14258__$1;(statearr_14266_14285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (3)))
{var inst_14256 = (state_14258[(2)]);var state_14258__$1 = state_14258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14258__$1,inst_14256);
} else
{if((state_val_14259 === (2)))
{var state_14258__$1 = state_14258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14258__$1,(4),ch);
} else
{if((state_val_14259 === (11)))
{var inst_14248 = (state_14258[(2)]);var state_14258__$1 = state_14258;var statearr_14267_14286 = state_14258__$1;(statearr_14267_14286[(2)] = inst_14248);
(statearr_14267_14286[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (9)))
{var state_14258__$1 = state_14258;var statearr_14268_14287 = state_14258__$1;(statearr_14268_14287[(2)] = null);
(statearr_14268_14287[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (5)))
{var inst_14243 = cljs.core.async.close_BANG_.call(null,out);var state_14258__$1 = state_14258;var statearr_14269_14288 = state_14258__$1;(statearr_14269_14288[(2)] = inst_14243);
(statearr_14269_14288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (10)))
{var inst_14251 = (state_14258[(2)]);var state_14258__$1 = (function (){var statearr_14270 = state_14258;(statearr_14270[(8)] = inst_14251);
return statearr_14270;
})();var statearr_14271_14289 = state_14258__$1;(statearr_14271_14289[(2)] = null);
(statearr_14271_14289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14259 === (8)))
{var inst_14240 = (state_14258[(7)]);var state_14258__$1 = state_14258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14258__$1,(11),out,inst_14240);
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
});})(c__6369__auto___14279,out))
;return ((function (switch__6354__auto__,c__6369__auto___14279,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14275 = [null,null,null,null,null,null,null,null,null];(statearr_14275[(0)] = state_machine__6355__auto__);
(statearr_14275[(1)] = (1));
return statearr_14275;
});
var state_machine__6355__auto____1 = (function (state_14258){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14258);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14276){if((e14276 instanceof Object))
{var ex__6358__auto__ = e14276;var statearr_14277_14290 = state_14258;(statearr_14277_14290[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14291 = state_14258;
state_14258 = G__14291;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14258){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14279,out))
})();var state__6371__auto__ = (function (){var statearr_14278 = f__6370__auto__.call(null);(statearr_14278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14279);
return statearr_14278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14279,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6369__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto__){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto__){
return (function (state_14457){var state_val_14458 = (state_14457[(1)]);if((state_val_14458 === (7)))
{var inst_14453 = (state_14457[(2)]);var state_14457__$1 = state_14457;var statearr_14459_14500 = state_14457__$1;(statearr_14459_14500[(2)] = inst_14453);
(statearr_14459_14500[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (20)))
{var inst_14423 = (state_14457[(7)]);var inst_14434 = (state_14457[(2)]);var inst_14435 = cljs.core.next.call(null,inst_14423);var inst_14409 = inst_14435;var inst_14410 = null;var inst_14411 = (0);var inst_14412 = (0);var state_14457__$1 = (function (){var statearr_14460 = state_14457;(statearr_14460[(8)] = inst_14410);
(statearr_14460[(9)] = inst_14412);
(statearr_14460[(10)] = inst_14434);
(statearr_14460[(11)] = inst_14409);
(statearr_14460[(12)] = inst_14411);
return statearr_14460;
})();var statearr_14461_14501 = state_14457__$1;(statearr_14461_14501[(2)] = null);
(statearr_14461_14501[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (1)))
{var state_14457__$1 = state_14457;var statearr_14462_14502 = state_14457__$1;(statearr_14462_14502[(2)] = null);
(statearr_14462_14502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (4)))
{var inst_14398 = (state_14457[(13)]);var inst_14398__$1 = (state_14457[(2)]);var inst_14399 = (inst_14398__$1 == null);var state_14457__$1 = (function (){var statearr_14463 = state_14457;(statearr_14463[(13)] = inst_14398__$1);
return statearr_14463;
})();if(cljs.core.truth_(inst_14399))
{var statearr_14464_14503 = state_14457__$1;(statearr_14464_14503[(1)] = (5));
} else
{var statearr_14465_14504 = state_14457__$1;(statearr_14465_14504[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (15)))
{var state_14457__$1 = state_14457;var statearr_14469_14505 = state_14457__$1;(statearr_14469_14505[(2)] = null);
(statearr_14469_14505[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (21)))
{var state_14457__$1 = state_14457;var statearr_14470_14506 = state_14457__$1;(statearr_14470_14506[(2)] = null);
(statearr_14470_14506[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (13)))
{var inst_14410 = (state_14457[(8)]);var inst_14412 = (state_14457[(9)]);var inst_14409 = (state_14457[(11)]);var inst_14411 = (state_14457[(12)]);var inst_14419 = (state_14457[(2)]);var inst_14420 = (inst_14412 + (1));var tmp14466 = inst_14410;var tmp14467 = inst_14409;var tmp14468 = inst_14411;var inst_14409__$1 = tmp14467;var inst_14410__$1 = tmp14466;var inst_14411__$1 = tmp14468;var inst_14412__$1 = inst_14420;var state_14457__$1 = (function (){var statearr_14471 = state_14457;(statearr_14471[(8)] = inst_14410__$1);
(statearr_14471[(9)] = inst_14412__$1);
(statearr_14471[(11)] = inst_14409__$1);
(statearr_14471[(14)] = inst_14419);
(statearr_14471[(12)] = inst_14411__$1);
return statearr_14471;
})();var statearr_14472_14507 = state_14457__$1;(statearr_14472_14507[(2)] = null);
(statearr_14472_14507[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (22)))
{var state_14457__$1 = state_14457;var statearr_14473_14508 = state_14457__$1;(statearr_14473_14508[(2)] = null);
(statearr_14473_14508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (6)))
{var inst_14398 = (state_14457[(13)]);var inst_14407 = f.call(null,inst_14398);var inst_14408 = cljs.core.seq.call(null,inst_14407);var inst_14409 = inst_14408;var inst_14410 = null;var inst_14411 = (0);var inst_14412 = (0);var state_14457__$1 = (function (){var statearr_14474 = state_14457;(statearr_14474[(8)] = inst_14410);
(statearr_14474[(9)] = inst_14412);
(statearr_14474[(11)] = inst_14409);
(statearr_14474[(12)] = inst_14411);
return statearr_14474;
})();var statearr_14475_14509 = state_14457__$1;(statearr_14475_14509[(2)] = null);
(statearr_14475_14509[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (17)))
{var inst_14423 = (state_14457[(7)]);var inst_14427 = cljs.core.chunk_first.call(null,inst_14423);var inst_14428 = cljs.core.chunk_rest.call(null,inst_14423);var inst_14429 = cljs.core.count.call(null,inst_14427);var inst_14409 = inst_14428;var inst_14410 = inst_14427;var inst_14411 = inst_14429;var inst_14412 = (0);var state_14457__$1 = (function (){var statearr_14476 = state_14457;(statearr_14476[(8)] = inst_14410);
(statearr_14476[(9)] = inst_14412);
(statearr_14476[(11)] = inst_14409);
(statearr_14476[(12)] = inst_14411);
return statearr_14476;
})();var statearr_14477_14510 = state_14457__$1;(statearr_14477_14510[(2)] = null);
(statearr_14477_14510[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (3)))
{var inst_14455 = (state_14457[(2)]);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14457__$1,inst_14455);
} else
{if((state_val_14458 === (12)))
{var inst_14443 = (state_14457[(2)]);var state_14457__$1 = state_14457;var statearr_14478_14511 = state_14457__$1;(statearr_14478_14511[(2)] = inst_14443);
(statearr_14478_14511[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (2)))
{var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14457__$1,(4),in$);
} else
{if((state_val_14458 === (23)))
{var inst_14451 = (state_14457[(2)]);var state_14457__$1 = state_14457;var statearr_14479_14512 = state_14457__$1;(statearr_14479_14512[(2)] = inst_14451);
(statearr_14479_14512[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (19)))
{var inst_14438 = (state_14457[(2)]);var state_14457__$1 = state_14457;var statearr_14480_14513 = state_14457__$1;(statearr_14480_14513[(2)] = inst_14438);
(statearr_14480_14513[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (11)))
{var inst_14423 = (state_14457[(7)]);var inst_14409 = (state_14457[(11)]);var inst_14423__$1 = cljs.core.seq.call(null,inst_14409);var state_14457__$1 = (function (){var statearr_14481 = state_14457;(statearr_14481[(7)] = inst_14423__$1);
return statearr_14481;
})();if(inst_14423__$1)
{var statearr_14482_14514 = state_14457__$1;(statearr_14482_14514[(1)] = (14));
} else
{var statearr_14483_14515 = state_14457__$1;(statearr_14483_14515[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (9)))
{var inst_14445 = (state_14457[(2)]);var inst_14446 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14457__$1 = (function (){var statearr_14484 = state_14457;(statearr_14484[(15)] = inst_14445);
return statearr_14484;
})();if(cljs.core.truth_(inst_14446))
{var statearr_14485_14516 = state_14457__$1;(statearr_14485_14516[(1)] = (21));
} else
{var statearr_14486_14517 = state_14457__$1;(statearr_14486_14517[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (5)))
{var inst_14401 = cljs.core.async.close_BANG_.call(null,out);var state_14457__$1 = state_14457;var statearr_14487_14518 = state_14457__$1;(statearr_14487_14518[(2)] = inst_14401);
(statearr_14487_14518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (14)))
{var inst_14423 = (state_14457[(7)]);var inst_14425 = cljs.core.chunked_seq_QMARK_.call(null,inst_14423);var state_14457__$1 = state_14457;if(inst_14425)
{var statearr_14488_14519 = state_14457__$1;(statearr_14488_14519[(1)] = (17));
} else
{var statearr_14489_14520 = state_14457__$1;(statearr_14489_14520[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (16)))
{var inst_14441 = (state_14457[(2)]);var state_14457__$1 = state_14457;var statearr_14490_14521 = state_14457__$1;(statearr_14490_14521[(2)] = inst_14441);
(statearr_14490_14521[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14458 === (10)))
{var inst_14410 = (state_14457[(8)]);var inst_14412 = (state_14457[(9)]);var inst_14417 = cljs.core._nth.call(null,inst_14410,inst_14412);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14457__$1,(13),out,inst_14417);
} else
{if((state_val_14458 === (18)))
{var inst_14423 = (state_14457[(7)]);var inst_14432 = cljs.core.first.call(null,inst_14423);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14457__$1,(20),out,inst_14432);
} else
{if((state_val_14458 === (8)))
{var inst_14412 = (state_14457[(9)]);var inst_14411 = (state_14457[(12)]);var inst_14414 = (inst_14412 < inst_14411);var inst_14415 = inst_14414;var state_14457__$1 = state_14457;if(cljs.core.truth_(inst_14415))
{var statearr_14491_14522 = state_14457__$1;(statearr_14491_14522[(1)] = (10));
} else
{var statearr_14492_14523 = state_14457__$1;(statearr_14492_14523[(1)] = (11));
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
});})(c__6369__auto__))
;return ((function (switch__6354__auto__,c__6369__auto__){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14496[(0)] = state_machine__6355__auto__);
(statearr_14496[(1)] = (1));
return statearr_14496;
});
var state_machine__6355__auto____1 = (function (state_14457){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14497){if((e14497 instanceof Object))
{var ex__6358__auto__ = e14497;var statearr_14498_14524 = state_14457;(statearr_14498_14524[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14525 = state_14457;
state_14457 = G__14525;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14457){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto__))
})();var state__6371__auto__ = (function (){var statearr_14499 = f__6370__auto__.call(null);(statearr_14499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto__);
return statearr_14499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto__))
);
return c__6369__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14622,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14622,out){
return (function (state_14597){var state_val_14598 = (state_14597[(1)]);if((state_val_14598 === (7)))
{var inst_14592 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14599_14623 = state_14597__$1;(statearr_14599_14623[(2)] = inst_14592);
(statearr_14599_14623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (1)))
{var inst_14574 = null;var state_14597__$1 = (function (){var statearr_14600 = state_14597;(statearr_14600[(7)] = inst_14574);
return statearr_14600;
})();var statearr_14601_14624 = state_14597__$1;(statearr_14601_14624[(2)] = null);
(statearr_14601_14624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (4)))
{var inst_14577 = (state_14597[(8)]);var inst_14577__$1 = (state_14597[(2)]);var inst_14578 = (inst_14577__$1 == null);var inst_14579 = cljs.core.not.call(null,inst_14578);var state_14597__$1 = (function (){var statearr_14602 = state_14597;(statearr_14602[(8)] = inst_14577__$1);
return statearr_14602;
})();if(inst_14579)
{var statearr_14603_14625 = state_14597__$1;(statearr_14603_14625[(1)] = (5));
} else
{var statearr_14604_14626 = state_14597__$1;(statearr_14604_14626[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (6)))
{var state_14597__$1 = state_14597;var statearr_14605_14627 = state_14597__$1;(statearr_14605_14627[(2)] = null);
(statearr_14605_14627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (3)))
{var inst_14594 = (state_14597[(2)]);var inst_14595 = cljs.core.async.close_BANG_.call(null,out);var state_14597__$1 = (function (){var statearr_14606 = state_14597;(statearr_14606[(9)] = inst_14594);
return statearr_14606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14597__$1,inst_14595);
} else
{if((state_val_14598 === (2)))
{var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14597__$1,(4),ch);
} else
{if((state_val_14598 === (11)))
{var inst_14577 = (state_14597[(8)]);var inst_14586 = (state_14597[(2)]);var inst_14574 = inst_14577;var state_14597__$1 = (function (){var statearr_14607 = state_14597;(statearr_14607[(7)] = inst_14574);
(statearr_14607[(10)] = inst_14586);
return statearr_14607;
})();var statearr_14608_14628 = state_14597__$1;(statearr_14608_14628[(2)] = null);
(statearr_14608_14628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (9)))
{var inst_14577 = (state_14597[(8)]);var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14597__$1,(11),out,inst_14577);
} else
{if((state_val_14598 === (5)))
{var inst_14574 = (state_14597[(7)]);var inst_14577 = (state_14597[(8)]);var inst_14581 = cljs.core._EQ_.call(null,inst_14577,inst_14574);var state_14597__$1 = state_14597;if(inst_14581)
{var statearr_14610_14629 = state_14597__$1;(statearr_14610_14629[(1)] = (8));
} else
{var statearr_14611_14630 = state_14597__$1;(statearr_14611_14630[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (10)))
{var inst_14589 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14612_14631 = state_14597__$1;(statearr_14612_14631[(2)] = inst_14589);
(statearr_14612_14631[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (8)))
{var inst_14574 = (state_14597[(7)]);var tmp14609 = inst_14574;var inst_14574__$1 = tmp14609;var state_14597__$1 = (function (){var statearr_14613 = state_14597;(statearr_14613[(7)] = inst_14574__$1);
return statearr_14613;
})();var statearr_14614_14632 = state_14597__$1;(statearr_14614_14632[(2)] = null);
(statearr_14614_14632[(1)] = (2));
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
});})(c__6369__auto___14622,out))
;return ((function (switch__6354__auto__,c__6369__auto___14622,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14618[(0)] = state_machine__6355__auto__);
(statearr_14618[(1)] = (1));
return statearr_14618;
});
var state_machine__6355__auto____1 = (function (state_14597){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14619){if((e14619 instanceof Object))
{var ex__6358__auto__ = e14619;var statearr_14620_14633 = state_14597;(statearr_14620_14633[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14634 = state_14597;
state_14597 = G__14634;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14622,out))
})();var state__6371__auto__ = (function (){var statearr_14621 = f__6370__auto__.call(null);(statearr_14621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14622);
return statearr_14621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14622,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14769,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14769,out){
return (function (state_14739){var state_val_14740 = (state_14739[(1)]);if((state_val_14740 === (7)))
{var inst_14735 = (state_14739[(2)]);var state_14739__$1 = state_14739;var statearr_14741_14770 = state_14739__$1;(statearr_14741_14770[(2)] = inst_14735);
(statearr_14741_14770[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (1)))
{var inst_14702 = (new Array(n));var inst_14703 = inst_14702;var inst_14704 = (0);var state_14739__$1 = (function (){var statearr_14742 = state_14739;(statearr_14742[(7)] = inst_14703);
(statearr_14742[(8)] = inst_14704);
return statearr_14742;
})();var statearr_14743_14771 = state_14739__$1;(statearr_14743_14771[(2)] = null);
(statearr_14743_14771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (4)))
{var inst_14707 = (state_14739[(9)]);var inst_14707__$1 = (state_14739[(2)]);var inst_14708 = (inst_14707__$1 == null);var inst_14709 = cljs.core.not.call(null,inst_14708);var state_14739__$1 = (function (){var statearr_14744 = state_14739;(statearr_14744[(9)] = inst_14707__$1);
return statearr_14744;
})();if(inst_14709)
{var statearr_14745_14772 = state_14739__$1;(statearr_14745_14772[(1)] = (5));
} else
{var statearr_14746_14773 = state_14739__$1;(statearr_14746_14773[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (15)))
{var inst_14729 = (state_14739[(2)]);var state_14739__$1 = state_14739;var statearr_14747_14774 = state_14739__$1;(statearr_14747_14774[(2)] = inst_14729);
(statearr_14747_14774[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (13)))
{var state_14739__$1 = state_14739;var statearr_14748_14775 = state_14739__$1;(statearr_14748_14775[(2)] = null);
(statearr_14748_14775[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (6)))
{var inst_14704 = (state_14739[(8)]);var inst_14725 = (inst_14704 > (0));var state_14739__$1 = state_14739;if(cljs.core.truth_(inst_14725))
{var statearr_14749_14776 = state_14739__$1;(statearr_14749_14776[(1)] = (12));
} else
{var statearr_14750_14777 = state_14739__$1;(statearr_14750_14777[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (3)))
{var inst_14737 = (state_14739[(2)]);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14739__$1,inst_14737);
} else
{if((state_val_14740 === (12)))
{var inst_14703 = (state_14739[(7)]);var inst_14727 = cljs.core.vec.call(null,inst_14703);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14739__$1,(15),out,inst_14727);
} else
{if((state_val_14740 === (2)))
{var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14739__$1,(4),ch);
} else
{if((state_val_14740 === (11)))
{var inst_14719 = (state_14739[(2)]);var inst_14720 = (new Array(n));var inst_14703 = inst_14720;var inst_14704 = (0);var state_14739__$1 = (function (){var statearr_14751 = state_14739;(statearr_14751[(7)] = inst_14703);
(statearr_14751[(8)] = inst_14704);
(statearr_14751[(10)] = inst_14719);
return statearr_14751;
})();var statearr_14752_14778 = state_14739__$1;(statearr_14752_14778[(2)] = null);
(statearr_14752_14778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (9)))
{var inst_14703 = (state_14739[(7)]);var inst_14717 = cljs.core.vec.call(null,inst_14703);var state_14739__$1 = state_14739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14739__$1,(11),out,inst_14717);
} else
{if((state_val_14740 === (5)))
{var inst_14707 = (state_14739[(9)]);var inst_14703 = (state_14739[(7)]);var inst_14712 = (state_14739[(11)]);var inst_14704 = (state_14739[(8)]);var inst_14711 = (inst_14703[inst_14704] = inst_14707);var inst_14712__$1 = (inst_14704 + (1));var inst_14713 = (inst_14712__$1 < n);var state_14739__$1 = (function (){var statearr_14753 = state_14739;(statearr_14753[(12)] = inst_14711);
(statearr_14753[(11)] = inst_14712__$1);
return statearr_14753;
})();if(cljs.core.truth_(inst_14713))
{var statearr_14754_14779 = state_14739__$1;(statearr_14754_14779[(1)] = (8));
} else
{var statearr_14755_14780 = state_14739__$1;(statearr_14755_14780[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (14)))
{var inst_14732 = (state_14739[(2)]);var inst_14733 = cljs.core.async.close_BANG_.call(null,out);var state_14739__$1 = (function (){var statearr_14757 = state_14739;(statearr_14757[(13)] = inst_14732);
return statearr_14757;
})();var statearr_14758_14781 = state_14739__$1;(statearr_14758_14781[(2)] = inst_14733);
(statearr_14758_14781[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (10)))
{var inst_14723 = (state_14739[(2)]);var state_14739__$1 = state_14739;var statearr_14759_14782 = state_14739__$1;(statearr_14759_14782[(2)] = inst_14723);
(statearr_14759_14782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14740 === (8)))
{var inst_14703 = (state_14739[(7)]);var inst_14712 = (state_14739[(11)]);var tmp14756 = inst_14703;var inst_14703__$1 = tmp14756;var inst_14704 = inst_14712;var state_14739__$1 = (function (){var statearr_14760 = state_14739;(statearr_14760[(7)] = inst_14703__$1);
(statearr_14760[(8)] = inst_14704);
return statearr_14760;
})();var statearr_14761_14783 = state_14739__$1;(statearr_14761_14783[(2)] = null);
(statearr_14761_14783[(1)] = (2));
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
});})(c__6369__auto___14769,out))
;return ((function (switch__6354__auto__,c__6369__auto___14769,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14765[(0)] = state_machine__6355__auto__);
(statearr_14765[(1)] = (1));
return statearr_14765;
});
var state_machine__6355__auto____1 = (function (state_14739){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14766){if((e14766 instanceof Object))
{var ex__6358__auto__ = e14766;var statearr_14767_14784 = state_14739;(statearr_14767_14784[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14785 = state_14739;
state_14739 = G__14785;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14739){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14769,out))
})();var state__6371__auto__ = (function (){var statearr_14768 = f__6370__auto__.call(null);(statearr_14768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14769);
return statearr_14768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14769,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6369__auto___14928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6369__auto___14928,out){
return (function (){var f__6370__auto__ = (function (){var switch__6354__auto__ = ((function (c__6369__auto___14928,out){
return (function (state_14898){var state_val_14899 = (state_14898[(1)]);if((state_val_14899 === (7)))
{var inst_14894 = (state_14898[(2)]);var state_14898__$1 = state_14898;var statearr_14900_14929 = state_14898__$1;(statearr_14900_14929[(2)] = inst_14894);
(statearr_14900_14929[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (1)))
{var inst_14857 = [];var inst_14858 = inst_14857;var inst_14859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14898__$1 = (function (){var statearr_14901 = state_14898;(statearr_14901[(7)] = inst_14858);
(statearr_14901[(8)] = inst_14859);
return statearr_14901;
})();var statearr_14902_14930 = state_14898__$1;(statearr_14902_14930[(2)] = null);
(statearr_14902_14930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (4)))
{var inst_14862 = (state_14898[(9)]);var inst_14862__$1 = (state_14898[(2)]);var inst_14863 = (inst_14862__$1 == null);var inst_14864 = cljs.core.not.call(null,inst_14863);var state_14898__$1 = (function (){var statearr_14903 = state_14898;(statearr_14903[(9)] = inst_14862__$1);
return statearr_14903;
})();if(inst_14864)
{var statearr_14904_14931 = state_14898__$1;(statearr_14904_14931[(1)] = (5));
} else
{var statearr_14905_14932 = state_14898__$1;(statearr_14905_14932[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (15)))
{var inst_14888 = (state_14898[(2)]);var state_14898__$1 = state_14898;var statearr_14906_14933 = state_14898__$1;(statearr_14906_14933[(2)] = inst_14888);
(statearr_14906_14933[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (13)))
{var state_14898__$1 = state_14898;var statearr_14907_14934 = state_14898__$1;(statearr_14907_14934[(2)] = null);
(statearr_14907_14934[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (6)))
{var inst_14858 = (state_14898[(7)]);var inst_14883 = inst_14858.length;var inst_14884 = (inst_14883 > (0));var state_14898__$1 = state_14898;if(cljs.core.truth_(inst_14884))
{var statearr_14908_14935 = state_14898__$1;(statearr_14908_14935[(1)] = (12));
} else
{var statearr_14909_14936 = state_14898__$1;(statearr_14909_14936[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (3)))
{var inst_14896 = (state_14898[(2)]);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14898__$1,inst_14896);
} else
{if((state_val_14899 === (12)))
{var inst_14858 = (state_14898[(7)]);var inst_14886 = cljs.core.vec.call(null,inst_14858);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14898__$1,(15),out,inst_14886);
} else
{if((state_val_14899 === (2)))
{var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14898__$1,(4),ch);
} else
{if((state_val_14899 === (11)))
{var inst_14862 = (state_14898[(9)]);var inst_14866 = (state_14898[(10)]);var inst_14876 = (state_14898[(2)]);var inst_14877 = [];var inst_14878 = inst_14877.push(inst_14862);var inst_14858 = inst_14877;var inst_14859 = inst_14866;var state_14898__$1 = (function (){var statearr_14910 = state_14898;(statearr_14910[(7)] = inst_14858);
(statearr_14910[(11)] = inst_14878);
(statearr_14910[(12)] = inst_14876);
(statearr_14910[(8)] = inst_14859);
return statearr_14910;
})();var statearr_14911_14937 = state_14898__$1;(statearr_14911_14937[(2)] = null);
(statearr_14911_14937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (9)))
{var inst_14858 = (state_14898[(7)]);var inst_14874 = cljs.core.vec.call(null,inst_14858);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14898__$1,(11),out,inst_14874);
} else
{if((state_val_14899 === (5)))
{var inst_14862 = (state_14898[(9)]);var inst_14866 = (state_14898[(10)]);var inst_14859 = (state_14898[(8)]);var inst_14866__$1 = f.call(null,inst_14862);var inst_14867 = cljs.core._EQ_.call(null,inst_14866__$1,inst_14859);var inst_14868 = cljs.core.keyword_identical_QMARK_.call(null,inst_14859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14869 = (inst_14867) || (inst_14868);var state_14898__$1 = (function (){var statearr_14912 = state_14898;(statearr_14912[(10)] = inst_14866__$1);
return statearr_14912;
})();if(cljs.core.truth_(inst_14869))
{var statearr_14913_14938 = state_14898__$1;(statearr_14913_14938[(1)] = (8));
} else
{var statearr_14914_14939 = state_14898__$1;(statearr_14914_14939[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (14)))
{var inst_14891 = (state_14898[(2)]);var inst_14892 = cljs.core.async.close_BANG_.call(null,out);var state_14898__$1 = (function (){var statearr_14916 = state_14898;(statearr_14916[(13)] = inst_14891);
return statearr_14916;
})();var statearr_14917_14940 = state_14898__$1;(statearr_14917_14940[(2)] = inst_14892);
(statearr_14917_14940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (10)))
{var inst_14881 = (state_14898[(2)]);var state_14898__$1 = state_14898;var statearr_14918_14941 = state_14898__$1;(statearr_14918_14941[(2)] = inst_14881);
(statearr_14918_14941[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (8)))
{var inst_14858 = (state_14898[(7)]);var inst_14862 = (state_14898[(9)]);var inst_14866 = (state_14898[(10)]);var inst_14871 = inst_14858.push(inst_14862);var tmp14915 = inst_14858;var inst_14858__$1 = tmp14915;var inst_14859 = inst_14866;var state_14898__$1 = (function (){var statearr_14919 = state_14898;(statearr_14919[(7)] = inst_14858__$1);
(statearr_14919[(14)] = inst_14871);
(statearr_14919[(8)] = inst_14859);
return statearr_14919;
})();var statearr_14920_14942 = state_14898__$1;(statearr_14920_14942[(2)] = null);
(statearr_14920_14942[(1)] = (2));
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
});})(c__6369__auto___14928,out))
;return ((function (switch__6354__auto__,c__6369__auto___14928,out){
return (function() {
var state_machine__6355__auto__ = null;
var state_machine__6355__auto____0 = (function (){var statearr_14924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14924[(0)] = state_machine__6355__auto__);
(statearr_14924[(1)] = (1));
return statearr_14924;
});
var state_machine__6355__auto____1 = (function (state_14898){while(true){
var ret_value__6356__auto__ = (function (){try{while(true){
var result__6357__auto__ = switch__6354__auto__.call(null,state_14898);if(cljs.core.keyword_identical_QMARK_.call(null,result__6357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6357__auto__;
}
break;
}
}catch (e14925){if((e14925 instanceof Object))
{var ex__6358__auto__ = e14925;var statearr_14926_14943 = state_14898;(statearr_14926_14943[(5)] = ex__6358__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14944 = state_14898;
state_14898 = G__14944;
continue;
}
} else
{return ret_value__6356__auto__;
}
break;
}
});
state_machine__6355__auto__ = function(state_14898){
switch(arguments.length){
case 0:
return state_machine__6355__auto____0.call(this);
case 1:
return state_machine__6355__auto____1.call(this,state_14898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6355__auto____0;
state_machine__6355__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6355__auto____1;
return state_machine__6355__auto__;
})()
;})(switch__6354__auto__,c__6369__auto___14928,out))
})();var state__6371__auto__ = (function (){var statearr_14927 = f__6370__auto__.call(null);(statearr_14927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6369__auto___14928);
return statearr_14927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6371__auto__);
});})(c__6369__auto___14928,out))
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