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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21903 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21903 = (function (f,fn_handler,meta21904){
this.f = f;
this.fn_handler = fn_handler;
this.meta21904 = meta21904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21903.cljs$lang$type = true;
cljs.core.async.t21903.cljs$lang$ctorStr = "cljs.core.async/t21903";
cljs.core.async.t21903.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t21903");
});
cljs.core.async.t21903.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21905){var self__ = this;
var _21905__$1 = this;return self__.meta21904;
});
cljs.core.async.t21903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21905,meta21904__$1){var self__ = this;
var _21905__$1 = this;return (new cljs.core.async.t21903(self__.f,self__.fn_handler,meta21904__$1));
});
cljs.core.async.__GT_t21903 = (function __GT_t21903(f__$1,fn_handler__$1,meta21904){return (new cljs.core.async.t21903(f__$1,fn_handler__$1,meta21904));
});
}
return (new cljs.core.async.t21903(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21907 = buff;if(G__21907)
{var bit__13212__auto__ = null;if(cljs.core.truth_((function (){var or__12548__auto__ = bit__13212__auto__;if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{return G__21907.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21907.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21907);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21907);
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
{var val_21908 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21908);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21908,ret){
return (function (){return fn1.call(null,val_21908);
});})(val_21908,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13418__auto___21909 = n;var x_21910 = (0);while(true){
if((x_21910 < n__13418__auto___21909))
{(a[x_21910] = (0));
{
var G__21911 = (x_21910 + (1));
x_21910 = G__21911;
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
var G__21912 = (i + (1));
i = G__21912;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21916 = (function (flag,alt_flag,meta21917){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21917 = meta21917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21916.cljs$lang$type = true;
cljs.core.async.t21916.cljs$lang$ctorStr = "cljs.core.async/t21916";
cljs.core.async.t21916.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t21916");
});})(flag))
;
cljs.core.async.t21916.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21918){var self__ = this;
var _21918__$1 = this;return self__.meta21917;
});})(flag))
;
cljs.core.async.t21916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21918,meta21917__$1){var self__ = this;
var _21918__$1 = this;return (new cljs.core.async.t21916(self__.flag,self__.alt_flag,meta21917__$1));
});})(flag))
;
cljs.core.async.__GT_t21916 = ((function (flag){
return (function __GT_t21916(flag__$1,alt_flag__$1,meta21917){return (new cljs.core.async.t21916(flag__$1,alt_flag__$1,meta21917));
});})(flag))
;
}
return (new cljs.core.async.t21916(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21922 = (function (cb,flag,alt_handler,meta21923){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21923 = meta21923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21922.cljs$lang$type = true;
cljs.core.async.t21922.cljs$lang$ctorStr = "cljs.core.async/t21922";
cljs.core.async.t21922.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t21922");
});
cljs.core.async.t21922.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21924){var self__ = this;
var _21924__$1 = this;return self__.meta21923;
});
cljs.core.async.t21922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21924,meta21923__$1){var self__ = this;
var _21924__$1 = this;return (new cljs.core.async.t21922(self__.cb,self__.flag,self__.alt_handler,meta21923__$1));
});
cljs.core.async.__GT_t21922 = (function __GT_t21922(cb__$1,flag__$1,alt_handler__$1,meta21923){return (new cljs.core.async.t21922(cb__$1,flag__$1,alt_handler__$1,meta21923));
});
}
return (new cljs.core.async.t21922(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21925_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21925_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21926_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21926_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12548__auto__ = wport;if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21927 = (i + (1));
i = G__21927;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__12548__auto__ = ret;if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__12536__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__12536__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__12536__auto__;
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
var alts_BANG___delegate = function (ports,p__21928){var map__21930 = p__21928;var map__21930__$1 = ((cljs.core.seq_QMARK_.call(null,map__21930))?cljs.core.apply.call(null,cljs.core.hash_map,map__21930):map__21930);var opts = map__21930__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21928 = null;if (arguments.length > 1) {
  p__21928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21928);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21931){
var ports = cljs.core.first(arglist__21931);
var p__21928 = cljs.core.rest(arglist__21931);
return alts_BANG___delegate(ports,p__21928);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15992__auto___22026 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___22026){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___22026){
return (function (state_22002){var state_val_22003 = (state_22002[(1)]);if((state_val_22003 === (7)))
{var inst_21998 = (state_22002[(2)]);var state_22002__$1 = state_22002;var statearr_22004_22027 = state_22002__$1;(statearr_22004_22027[(2)] = inst_21998);
(statearr_22004_22027[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (1)))
{var state_22002__$1 = state_22002;var statearr_22005_22028 = state_22002__$1;(statearr_22005_22028[(2)] = null);
(statearr_22005_22028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (4)))
{var inst_21981 = (state_22002[(7)]);var inst_21981__$1 = (state_22002[(2)]);var inst_21982 = (inst_21981__$1 == null);var state_22002__$1 = (function (){var statearr_22006 = state_22002;(statearr_22006[(7)] = inst_21981__$1);
return statearr_22006;
})();if(cljs.core.truth_(inst_21982))
{var statearr_22007_22029 = state_22002__$1;(statearr_22007_22029[(1)] = (5));
} else
{var statearr_22008_22030 = state_22002__$1;(statearr_22008_22030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (13)))
{var state_22002__$1 = state_22002;var statearr_22009_22031 = state_22002__$1;(statearr_22009_22031[(2)] = null);
(statearr_22009_22031[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (6)))
{var inst_21981 = (state_22002[(7)]);var state_22002__$1 = state_22002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22002__$1,(11),to,inst_21981);
} else
{if((state_val_22003 === (3)))
{var inst_22000 = (state_22002[(2)]);var state_22002__$1 = state_22002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22002__$1,inst_22000);
} else
{if((state_val_22003 === (12)))
{var state_22002__$1 = state_22002;var statearr_22010_22032 = state_22002__$1;(statearr_22010_22032[(2)] = null);
(statearr_22010_22032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (2)))
{var state_22002__$1 = state_22002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22002__$1,(4),from);
} else
{if((state_val_22003 === (11)))
{var inst_21991 = (state_22002[(2)]);var state_22002__$1 = state_22002;if(cljs.core.truth_(inst_21991))
{var statearr_22011_22033 = state_22002__$1;(statearr_22011_22033[(1)] = (12));
} else
{var statearr_22012_22034 = state_22002__$1;(statearr_22012_22034[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (9)))
{var state_22002__$1 = state_22002;var statearr_22013_22035 = state_22002__$1;(statearr_22013_22035[(2)] = null);
(statearr_22013_22035[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (5)))
{var state_22002__$1 = state_22002;if(cljs.core.truth_(close_QMARK_))
{var statearr_22014_22036 = state_22002__$1;(statearr_22014_22036[(1)] = (8));
} else
{var statearr_22015_22037 = state_22002__$1;(statearr_22015_22037[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (14)))
{var inst_21996 = (state_22002[(2)]);var state_22002__$1 = state_22002;var statearr_22016_22038 = state_22002__$1;(statearr_22016_22038[(2)] = inst_21996);
(statearr_22016_22038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (10)))
{var inst_21988 = (state_22002[(2)]);var state_22002__$1 = state_22002;var statearr_22017_22039 = state_22002__$1;(statearr_22017_22039[(2)] = inst_21988);
(statearr_22017_22039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22003 === (8)))
{var inst_21985 = cljs.core.async.close_BANG_.call(null,to);var state_22002__$1 = state_22002;var statearr_22018_22040 = state_22002__$1;(statearr_22018_22040[(2)] = inst_21985);
(statearr_22018_22040[(1)] = (10));
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
});})(c__15992__auto___22026))
;return ((function (switch__15977__auto__,c__15992__auto___22026){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22022 = [null,null,null,null,null,null,null,null];(statearr_22022[(0)] = state_machine__15978__auto__);
(statearr_22022[(1)] = (1));
return statearr_22022;
});
var state_machine__15978__auto____1 = (function (state_22002){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22002);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22023){if((e22023 instanceof Object))
{var ex__15981__auto__ = e22023;var statearr_22024_22041 = state_22002;(statearr_22024_22041[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22042 = state_22002;
state_22002 = G__22042;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22002){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___22026))
})();var state__15994__auto__ = (function (){var statearr_22025 = f__15993__auto__.call(null);(statearr_22025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22026);
return statearr_22025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___22026))
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
return (function (p__22226){var vec__22227 = p__22226;var v = cljs.core.nth.call(null,vec__22227,(0),null);var p = cljs.core.nth.call(null,vec__22227,(1),null);var job = vec__22227;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15992__auto___22409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results){
return (function (state_22232){var state_val_22233 = (state_22232[(1)]);if((state_val_22233 === (2)))
{var inst_22229 = (state_22232[(2)]);var inst_22230 = cljs.core.async.close_BANG_.call(null,res);var state_22232__$1 = (function (){var statearr_22234 = state_22232;(statearr_22234[(7)] = inst_22229);
return statearr_22234;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22232__$1,inst_22230);
} else
{if((state_val_22233 === (1)))
{var state_22232__$1 = state_22232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22232__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results))
;return ((function (switch__15977__auto__,c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22238 = [null,null,null,null,null,null,null,null];(statearr_22238[(0)] = state_machine__15978__auto__);
(statearr_22238[(1)] = (1));
return statearr_22238;
});
var state_machine__15978__auto____1 = (function (state_22232){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22232);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22239){if((e22239 instanceof Object))
{var ex__15981__auto__ = e22239;var statearr_22240_22410 = state_22232;(statearr_22240_22410[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22239;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22411 = state_22232;
state_22232 = G__22411;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22232){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results))
})();var state__15994__auto__ = (function (){var statearr_22241 = f__15993__auto__.call(null);(statearr_22241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22409);
return statearr_22241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___22409,res,vec__22227,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22242){var vec__22243 = p__22242;var v = cljs.core.nth.call(null,vec__22243,(0),null);var p = cljs.core.nth.call(null,vec__22243,(1),null);var job = vec__22243;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13418__auto___22412 = n;var __22413 = (0);while(true){
if((__22413 < n__13418__auto___22412))
{var G__22244_22414 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22244_22414) {
case "async":
var c__15992__auto___22416 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22413,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (__22413,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function (state_22257){var state_val_22258 = (state_22257[(1)]);if((state_val_22258 === (7)))
{var inst_22253 = (state_22257[(2)]);var state_22257__$1 = state_22257;var statearr_22259_22417 = state_22257__$1;(statearr_22259_22417[(2)] = inst_22253);
(statearr_22259_22417[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22258 === (6)))
{var state_22257__$1 = state_22257;var statearr_22260_22418 = state_22257__$1;(statearr_22260_22418[(2)] = null);
(statearr_22260_22418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22258 === (5)))
{var state_22257__$1 = state_22257;var statearr_22261_22419 = state_22257__$1;(statearr_22261_22419[(2)] = null);
(statearr_22261_22419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22258 === (4)))
{var inst_22247 = (state_22257[(2)]);var inst_22248 = async.call(null,inst_22247);var state_22257__$1 = state_22257;if(cljs.core.truth_(inst_22248))
{var statearr_22262_22420 = state_22257__$1;(statearr_22262_22420[(1)] = (5));
} else
{var statearr_22263_22421 = state_22257__$1;(statearr_22263_22421[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22258 === (3)))
{var inst_22255 = (state_22257[(2)]);var state_22257__$1 = state_22257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22257__$1,inst_22255);
} else
{if((state_val_22258 === (2)))
{var state_22257__$1 = state_22257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22257__$1,(4),jobs);
} else
{if((state_val_22258 === (1)))
{var state_22257__$1 = state_22257;var statearr_22264_22422 = state_22257__$1;(statearr_22264_22422[(2)] = null);
(statearr_22264_22422[(1)] = (2));
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
});})(__22413,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
;return ((function (__22413,switch__15977__auto__,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22268 = [null,null,null,null,null,null,null];(statearr_22268[(0)] = state_machine__15978__auto__);
(statearr_22268[(1)] = (1));
return statearr_22268;
});
var state_machine__15978__auto____1 = (function (state_22257){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22257);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22269){if((e22269 instanceof Object))
{var ex__15981__auto__ = e22269;var statearr_22270_22423 = state_22257;(statearr_22270_22423[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22269;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22424 = state_22257;
state_22257 = G__22424;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22257){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(__22413,switch__15977__auto__,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
})();var state__15994__auto__ = (function (){var statearr_22271 = f__15993__auto__.call(null);(statearr_22271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22416);
return statearr_22271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(__22413,c__15992__auto___22416,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
);

break;
case "compute":
var c__15992__auto___22425 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__22413,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (__22413,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function (state_22284){var state_val_22285 = (state_22284[(1)]);if((state_val_22285 === (7)))
{var inst_22280 = (state_22284[(2)]);var state_22284__$1 = state_22284;var statearr_22286_22426 = state_22284__$1;(statearr_22286_22426[(2)] = inst_22280);
(statearr_22286_22426[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (6)))
{var state_22284__$1 = state_22284;var statearr_22287_22427 = state_22284__$1;(statearr_22287_22427[(2)] = null);
(statearr_22287_22427[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (5)))
{var state_22284__$1 = state_22284;var statearr_22288_22428 = state_22284__$1;(statearr_22288_22428[(2)] = null);
(statearr_22288_22428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (4)))
{var inst_22274 = (state_22284[(2)]);var inst_22275 = process.call(null,inst_22274);var state_22284__$1 = state_22284;if(cljs.core.truth_(inst_22275))
{var statearr_22289_22429 = state_22284__$1;(statearr_22289_22429[(1)] = (5));
} else
{var statearr_22290_22430 = state_22284__$1;(statearr_22290_22430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22285 === (3)))
{var inst_22282 = (state_22284[(2)]);var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else
{if((state_val_22285 === (2)))
{var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,(4),jobs);
} else
{if((state_val_22285 === (1)))
{var state_22284__$1 = state_22284;var statearr_22291_22431 = state_22284__$1;(statearr_22291_22431[(2)] = null);
(statearr_22291_22431[(1)] = (2));
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
});})(__22413,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
;return ((function (__22413,switch__15977__auto__,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22295 = [null,null,null,null,null,null,null];(statearr_22295[(0)] = state_machine__15978__auto__);
(statearr_22295[(1)] = (1));
return statearr_22295;
});
var state_machine__15978__auto____1 = (function (state_22284){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22284);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22296){if((e22296 instanceof Object))
{var ex__15981__auto__ = e22296;var statearr_22297_22432 = state_22284;(statearr_22297_22432[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22296;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22433 = state_22284;
state_22284 = G__22433;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(__22413,switch__15977__auto__,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
})();var state__15994__auto__ = (function (){var statearr_22298 = f__15993__auto__.call(null);(statearr_22298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22425);
return statearr_22298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(__22413,c__15992__auto___22425,G__22244_22414,n__13418__auto___22412,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22434 = (__22413 + (1));
__22413 = G__22434;
continue;
}
} else
{}
break;
}
var c__15992__auto___22435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___22435,jobs,results,process,async){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___22435,jobs,results,process,async){
return (function (state_22320){var state_val_22321 = (state_22320[(1)]);if((state_val_22321 === (9)))
{var inst_22313 = (state_22320[(2)]);var state_22320__$1 = (function (){var statearr_22322 = state_22320;(statearr_22322[(7)] = inst_22313);
return statearr_22322;
})();var statearr_22323_22436 = state_22320__$1;(statearr_22323_22436[(2)] = null);
(statearr_22323_22436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (8)))
{var inst_22306 = (state_22320[(8)]);var inst_22311 = (state_22320[(2)]);var state_22320__$1 = (function (){var statearr_22324 = state_22320;(statearr_22324[(9)] = inst_22311);
return statearr_22324;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22320__$1,(9),results,inst_22306);
} else
{if((state_val_22321 === (7)))
{var inst_22316 = (state_22320[(2)]);var state_22320__$1 = state_22320;var statearr_22325_22437 = state_22320__$1;(statearr_22325_22437[(2)] = inst_22316);
(statearr_22325_22437[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (6)))
{var inst_22301 = (state_22320[(10)]);var inst_22306 = (state_22320[(8)]);var inst_22306__$1 = cljs.core.async.chan.call(null,(1));var inst_22307 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22308 = [inst_22301,inst_22306__$1];var inst_22309 = (new cljs.core.PersistentVector(null,2,(5),inst_22307,inst_22308,null));var state_22320__$1 = (function (){var statearr_22326 = state_22320;(statearr_22326[(8)] = inst_22306__$1);
return statearr_22326;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22320__$1,(8),jobs,inst_22309);
} else
{if((state_val_22321 === (5)))
{var inst_22304 = cljs.core.async.close_BANG_.call(null,jobs);var state_22320__$1 = state_22320;var statearr_22327_22438 = state_22320__$1;(statearr_22327_22438[(2)] = inst_22304);
(statearr_22327_22438[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (4)))
{var inst_22301 = (state_22320[(10)]);var inst_22301__$1 = (state_22320[(2)]);var inst_22302 = (inst_22301__$1 == null);var state_22320__$1 = (function (){var statearr_22328 = state_22320;(statearr_22328[(10)] = inst_22301__$1);
return statearr_22328;
})();if(cljs.core.truth_(inst_22302))
{var statearr_22329_22439 = state_22320__$1;(statearr_22329_22439[(1)] = (5));
} else
{var statearr_22330_22440 = state_22320__$1;(statearr_22330_22440[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22321 === (3)))
{var inst_22318 = (state_22320[(2)]);var state_22320__$1 = state_22320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22320__$1,inst_22318);
} else
{if((state_val_22321 === (2)))
{var state_22320__$1 = state_22320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22320__$1,(4),from);
} else
{if((state_val_22321 === (1)))
{var state_22320__$1 = state_22320;var statearr_22331_22441 = state_22320__$1;(statearr_22331_22441[(2)] = null);
(statearr_22331_22441[(1)] = (2));
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
});})(c__15992__auto___22435,jobs,results,process,async))
;return ((function (switch__15977__auto__,c__15992__auto___22435,jobs,results,process,async){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22335 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22335[(0)] = state_machine__15978__auto__);
(statearr_22335[(1)] = (1));
return statearr_22335;
});
var state_machine__15978__auto____1 = (function (state_22320){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22320);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object))
{var ex__15981__auto__ = e22336;var statearr_22337_22442 = state_22320;(statearr_22337_22442[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22320);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22443 = state_22320;
state_22320 = G__22443;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22320){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___22435,jobs,results,process,async))
})();var state__15994__auto__ = (function (){var statearr_22338 = f__15993__auto__.call(null);(statearr_22338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22435);
return statearr_22338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___22435,jobs,results,process,async))
);
var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__,jobs,results,process,async){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__,jobs,results,process,async){
return (function (state_22376){var state_val_22377 = (state_22376[(1)]);if((state_val_22377 === (7)))
{var inst_22372 = (state_22376[(2)]);var state_22376__$1 = state_22376;var statearr_22378_22444 = state_22376__$1;(statearr_22378_22444[(2)] = inst_22372);
(statearr_22378_22444[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (20)))
{var state_22376__$1 = state_22376;var statearr_22379_22445 = state_22376__$1;(statearr_22379_22445[(2)] = null);
(statearr_22379_22445[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (1)))
{var state_22376__$1 = state_22376;var statearr_22380_22446 = state_22376__$1;(statearr_22380_22446[(2)] = null);
(statearr_22380_22446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (4)))
{var inst_22341 = (state_22376[(7)]);var inst_22341__$1 = (state_22376[(2)]);var inst_22342 = (inst_22341__$1 == null);var state_22376__$1 = (function (){var statearr_22381 = state_22376;(statearr_22381[(7)] = inst_22341__$1);
return statearr_22381;
})();if(cljs.core.truth_(inst_22342))
{var statearr_22382_22447 = state_22376__$1;(statearr_22382_22447[(1)] = (5));
} else
{var statearr_22383_22448 = state_22376__$1;(statearr_22383_22448[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (15)))
{var inst_22354 = (state_22376[(8)]);var state_22376__$1 = state_22376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22376__$1,(18),to,inst_22354);
} else
{if((state_val_22377 === (21)))
{var inst_22367 = (state_22376[(2)]);var state_22376__$1 = state_22376;var statearr_22384_22449 = state_22376__$1;(statearr_22384_22449[(2)] = inst_22367);
(statearr_22384_22449[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (13)))
{var inst_22369 = (state_22376[(2)]);var state_22376__$1 = (function (){var statearr_22385 = state_22376;(statearr_22385[(9)] = inst_22369);
return statearr_22385;
})();var statearr_22386_22450 = state_22376__$1;(statearr_22386_22450[(2)] = null);
(statearr_22386_22450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (6)))
{var inst_22341 = (state_22376[(7)]);var state_22376__$1 = state_22376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22376__$1,(11),inst_22341);
} else
{if((state_val_22377 === (17)))
{var inst_22362 = (state_22376[(2)]);var state_22376__$1 = state_22376;if(cljs.core.truth_(inst_22362))
{var statearr_22387_22451 = state_22376__$1;(statearr_22387_22451[(1)] = (19));
} else
{var statearr_22388_22452 = state_22376__$1;(statearr_22388_22452[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (3)))
{var inst_22374 = (state_22376[(2)]);var state_22376__$1 = state_22376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22376__$1,inst_22374);
} else
{if((state_val_22377 === (12)))
{var inst_22351 = (state_22376[(10)]);var state_22376__$1 = state_22376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22376__$1,(14),inst_22351);
} else
{if((state_val_22377 === (2)))
{var state_22376__$1 = state_22376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22376__$1,(4),results);
} else
{if((state_val_22377 === (19)))
{var state_22376__$1 = state_22376;var statearr_22389_22453 = state_22376__$1;(statearr_22389_22453[(2)] = null);
(statearr_22389_22453[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (11)))
{var inst_22351 = (state_22376[(2)]);var state_22376__$1 = (function (){var statearr_22390 = state_22376;(statearr_22390[(10)] = inst_22351);
return statearr_22390;
})();var statearr_22391_22454 = state_22376__$1;(statearr_22391_22454[(2)] = null);
(statearr_22391_22454[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (9)))
{var state_22376__$1 = state_22376;var statearr_22392_22455 = state_22376__$1;(statearr_22392_22455[(2)] = null);
(statearr_22392_22455[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (5)))
{var state_22376__$1 = state_22376;if(cljs.core.truth_(close_QMARK_))
{var statearr_22393_22456 = state_22376__$1;(statearr_22393_22456[(1)] = (8));
} else
{var statearr_22394_22457 = state_22376__$1;(statearr_22394_22457[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (14)))
{var inst_22356 = (state_22376[(11)]);var inst_22354 = (state_22376[(8)]);var inst_22354__$1 = (state_22376[(2)]);var inst_22355 = (inst_22354__$1 == null);var inst_22356__$1 = cljs.core.not.call(null,inst_22355);var state_22376__$1 = (function (){var statearr_22395 = state_22376;(statearr_22395[(11)] = inst_22356__$1);
(statearr_22395[(8)] = inst_22354__$1);
return statearr_22395;
})();if(inst_22356__$1)
{var statearr_22396_22458 = state_22376__$1;(statearr_22396_22458[(1)] = (15));
} else
{var statearr_22397_22459 = state_22376__$1;(statearr_22397_22459[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (16)))
{var inst_22356 = (state_22376[(11)]);var state_22376__$1 = state_22376;var statearr_22398_22460 = state_22376__$1;(statearr_22398_22460[(2)] = inst_22356);
(statearr_22398_22460[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (10)))
{var inst_22348 = (state_22376[(2)]);var state_22376__$1 = state_22376;var statearr_22399_22461 = state_22376__$1;(statearr_22399_22461[(2)] = inst_22348);
(statearr_22399_22461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (18)))
{var inst_22359 = (state_22376[(2)]);var state_22376__$1 = state_22376;var statearr_22400_22462 = state_22376__$1;(statearr_22400_22462[(2)] = inst_22359);
(statearr_22400_22462[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22377 === (8)))
{var inst_22345 = cljs.core.async.close_BANG_.call(null,to);var state_22376__$1 = state_22376;var statearr_22401_22463 = state_22376__$1;(statearr_22401_22463[(2)] = inst_22345);
(statearr_22401_22463[(1)] = (10));
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
});})(c__15992__auto__,jobs,results,process,async))
;return ((function (switch__15977__auto__,c__15992__auto__,jobs,results,process,async){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22405 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22405[(0)] = state_machine__15978__auto__);
(statearr_22405[(1)] = (1));
return statearr_22405;
});
var state_machine__15978__auto____1 = (function (state_22376){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22376);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22406){if((e22406 instanceof Object))
{var ex__15981__auto__ = e22406;var statearr_22407_22464 = state_22376;(statearr_22407_22464[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22465 = state_22376;
state_22376 = G__22465;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22376){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__,jobs,results,process,async))
})();var state__15994__auto__ = (function (){var statearr_22408 = f__15993__auto__.call(null);(statearr_22408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_22408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__,jobs,results,process,async))
);
return c__15992__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15992__auto___22566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___22566,tc,fc){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___22566,tc,fc){
return (function (state_22541){var state_val_22542 = (state_22541[(1)]);if((state_val_22542 === (7)))
{var inst_22537 = (state_22541[(2)]);var state_22541__$1 = state_22541;var statearr_22543_22567 = state_22541__$1;(statearr_22543_22567[(2)] = inst_22537);
(statearr_22543_22567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (1)))
{var state_22541__$1 = state_22541;var statearr_22544_22568 = state_22541__$1;(statearr_22544_22568[(2)] = null);
(statearr_22544_22568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (4)))
{var inst_22518 = (state_22541[(7)]);var inst_22518__$1 = (state_22541[(2)]);var inst_22519 = (inst_22518__$1 == null);var state_22541__$1 = (function (){var statearr_22545 = state_22541;(statearr_22545[(7)] = inst_22518__$1);
return statearr_22545;
})();if(cljs.core.truth_(inst_22519))
{var statearr_22546_22569 = state_22541__$1;(statearr_22546_22569[(1)] = (5));
} else
{var statearr_22547_22570 = state_22541__$1;(statearr_22547_22570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (13)))
{var state_22541__$1 = state_22541;var statearr_22548_22571 = state_22541__$1;(statearr_22548_22571[(2)] = null);
(statearr_22548_22571[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (6)))
{var inst_22518 = (state_22541[(7)]);var inst_22524 = p.call(null,inst_22518);var state_22541__$1 = state_22541;if(cljs.core.truth_(inst_22524))
{var statearr_22549_22572 = state_22541__$1;(statearr_22549_22572[(1)] = (9));
} else
{var statearr_22550_22573 = state_22541__$1;(statearr_22550_22573[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (3)))
{var inst_22539 = (state_22541[(2)]);var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else
{if((state_val_22542 === (12)))
{var state_22541__$1 = state_22541;var statearr_22551_22574 = state_22541__$1;(statearr_22551_22574[(2)] = null);
(statearr_22551_22574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (2)))
{var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(4),ch);
} else
{if((state_val_22542 === (11)))
{var inst_22518 = (state_22541[(7)]);var inst_22528 = (state_22541[(2)]);var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22541__$1,(8),inst_22528,inst_22518);
} else
{if((state_val_22542 === (9)))
{var state_22541__$1 = state_22541;var statearr_22552_22575 = state_22541__$1;(statearr_22552_22575[(2)] = tc);
(statearr_22552_22575[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (5)))
{var inst_22521 = cljs.core.async.close_BANG_.call(null,tc);var inst_22522 = cljs.core.async.close_BANG_.call(null,fc);var state_22541__$1 = (function (){var statearr_22553 = state_22541;(statearr_22553[(8)] = inst_22521);
return statearr_22553;
})();var statearr_22554_22576 = state_22541__$1;(statearr_22554_22576[(2)] = inst_22522);
(statearr_22554_22576[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (14)))
{var inst_22535 = (state_22541[(2)]);var state_22541__$1 = state_22541;var statearr_22555_22577 = state_22541__$1;(statearr_22555_22577[(2)] = inst_22535);
(statearr_22555_22577[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (10)))
{var state_22541__$1 = state_22541;var statearr_22556_22578 = state_22541__$1;(statearr_22556_22578[(2)] = fc);
(statearr_22556_22578[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22542 === (8)))
{var inst_22530 = (state_22541[(2)]);var state_22541__$1 = state_22541;if(cljs.core.truth_(inst_22530))
{var statearr_22557_22579 = state_22541__$1;(statearr_22557_22579[(1)] = (12));
} else
{var statearr_22558_22580 = state_22541__$1;(statearr_22558_22580[(1)] = (13));
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
});})(c__15992__auto___22566,tc,fc))
;return ((function (switch__15977__auto__,c__15992__auto___22566,tc,fc){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22562 = [null,null,null,null,null,null,null,null,null];(statearr_22562[(0)] = state_machine__15978__auto__);
(statearr_22562[(1)] = (1));
return statearr_22562;
});
var state_machine__15978__auto____1 = (function (state_22541){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22541);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22563){if((e22563 instanceof Object))
{var ex__15981__auto__ = e22563;var statearr_22564_22581 = state_22541;(statearr_22564_22581[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22582 = state_22541;
state_22541 = G__22582;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___22566,tc,fc))
})();var state__15994__auto__ = (function (){var statearr_22565 = f__15993__auto__.call(null);(statearr_22565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___22566);
return statearr_22565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___22566,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__){
return (function (state_22629){var state_val_22630 = (state_22629[(1)]);if((state_val_22630 === (7)))
{var inst_22625 = (state_22629[(2)]);var state_22629__$1 = state_22629;var statearr_22631_22647 = state_22629__$1;(statearr_22631_22647[(2)] = inst_22625);
(statearr_22631_22647[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22630 === (6)))
{var inst_22615 = (state_22629[(7)]);var inst_22618 = (state_22629[(8)]);var inst_22622 = f.call(null,inst_22615,inst_22618);var inst_22615__$1 = inst_22622;var state_22629__$1 = (function (){var statearr_22632 = state_22629;(statearr_22632[(7)] = inst_22615__$1);
return statearr_22632;
})();var statearr_22633_22648 = state_22629__$1;(statearr_22633_22648[(2)] = null);
(statearr_22633_22648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22630 === (5)))
{var inst_22615 = (state_22629[(7)]);var state_22629__$1 = state_22629;var statearr_22634_22649 = state_22629__$1;(statearr_22634_22649[(2)] = inst_22615);
(statearr_22634_22649[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22630 === (4)))
{var inst_22618 = (state_22629[(8)]);var inst_22618__$1 = (state_22629[(2)]);var inst_22619 = (inst_22618__$1 == null);var state_22629__$1 = (function (){var statearr_22635 = state_22629;(statearr_22635[(8)] = inst_22618__$1);
return statearr_22635;
})();if(cljs.core.truth_(inst_22619))
{var statearr_22636_22650 = state_22629__$1;(statearr_22636_22650[(1)] = (5));
} else
{var statearr_22637_22651 = state_22629__$1;(statearr_22637_22651[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22630 === (3)))
{var inst_22627 = (state_22629[(2)]);var state_22629__$1 = state_22629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22629__$1,inst_22627);
} else
{if((state_val_22630 === (2)))
{var state_22629__$1 = state_22629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22629__$1,(4),ch);
} else
{if((state_val_22630 === (1)))
{var inst_22615 = init;var state_22629__$1 = (function (){var statearr_22638 = state_22629;(statearr_22638[(7)] = inst_22615);
return statearr_22638;
})();var statearr_22639_22652 = state_22629__$1;(statearr_22639_22652[(2)] = null);
(statearr_22639_22652[(1)] = (2));
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
});})(c__15992__auto__))
;return ((function (switch__15977__auto__,c__15992__auto__){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22643 = [null,null,null,null,null,null,null,null,null];(statearr_22643[(0)] = state_machine__15978__auto__);
(statearr_22643[(1)] = (1));
return statearr_22643;
});
var state_machine__15978__auto____1 = (function (state_22629){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22629);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22644){if((e22644 instanceof Object))
{var ex__15981__auto__ = e22644;var statearr_22645_22653 = state_22629;(statearr_22645_22653[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22654 = state_22629;
state_22629 = G__22654;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22629){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__))
})();var state__15994__auto__ = (function (){var statearr_22646 = f__15993__auto__.call(null);(statearr_22646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_22646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__))
);
return c__15992__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__){
return (function (state_22728){var state_val_22729 = (state_22728[(1)]);if((state_val_22729 === (7)))
{var inst_22710 = (state_22728[(2)]);var state_22728__$1 = state_22728;var statearr_22730_22753 = state_22728__$1;(statearr_22730_22753[(2)] = inst_22710);
(statearr_22730_22753[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (1)))
{var inst_22704 = cljs.core.seq.call(null,coll);var inst_22705 = inst_22704;var state_22728__$1 = (function (){var statearr_22731 = state_22728;(statearr_22731[(7)] = inst_22705);
return statearr_22731;
})();var statearr_22732_22754 = state_22728__$1;(statearr_22732_22754[(2)] = null);
(statearr_22732_22754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (4)))
{var inst_22705 = (state_22728[(7)]);var inst_22708 = cljs.core.first.call(null,inst_22705);var state_22728__$1 = state_22728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22728__$1,(7),ch,inst_22708);
} else
{if((state_val_22729 === (13)))
{var inst_22722 = (state_22728[(2)]);var state_22728__$1 = state_22728;var statearr_22733_22755 = state_22728__$1;(statearr_22733_22755[(2)] = inst_22722);
(statearr_22733_22755[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (6)))
{var inst_22713 = (state_22728[(2)]);var state_22728__$1 = state_22728;if(cljs.core.truth_(inst_22713))
{var statearr_22734_22756 = state_22728__$1;(statearr_22734_22756[(1)] = (8));
} else
{var statearr_22735_22757 = state_22728__$1;(statearr_22735_22757[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (3)))
{var inst_22726 = (state_22728[(2)]);var state_22728__$1 = state_22728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22728__$1,inst_22726);
} else
{if((state_val_22729 === (12)))
{var state_22728__$1 = state_22728;var statearr_22736_22758 = state_22728__$1;(statearr_22736_22758[(2)] = null);
(statearr_22736_22758[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (2)))
{var inst_22705 = (state_22728[(7)]);var state_22728__$1 = state_22728;if(cljs.core.truth_(inst_22705))
{var statearr_22737_22759 = state_22728__$1;(statearr_22737_22759[(1)] = (4));
} else
{var statearr_22738_22760 = state_22728__$1;(statearr_22738_22760[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (11)))
{var inst_22719 = cljs.core.async.close_BANG_.call(null,ch);var state_22728__$1 = state_22728;var statearr_22739_22761 = state_22728__$1;(statearr_22739_22761[(2)] = inst_22719);
(statearr_22739_22761[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (9)))
{var state_22728__$1 = state_22728;if(cljs.core.truth_(close_QMARK_))
{var statearr_22740_22762 = state_22728__$1;(statearr_22740_22762[(1)] = (11));
} else
{var statearr_22741_22763 = state_22728__$1;(statearr_22741_22763[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (5)))
{var inst_22705 = (state_22728[(7)]);var state_22728__$1 = state_22728;var statearr_22742_22764 = state_22728__$1;(statearr_22742_22764[(2)] = inst_22705);
(statearr_22742_22764[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (10)))
{var inst_22724 = (state_22728[(2)]);var state_22728__$1 = state_22728;var statearr_22743_22765 = state_22728__$1;(statearr_22743_22765[(2)] = inst_22724);
(statearr_22743_22765[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (8)))
{var inst_22705 = (state_22728[(7)]);var inst_22715 = cljs.core.next.call(null,inst_22705);var inst_22705__$1 = inst_22715;var state_22728__$1 = (function (){var statearr_22744 = state_22728;(statearr_22744[(7)] = inst_22705__$1);
return statearr_22744;
})();var statearr_22745_22766 = state_22728__$1;(statearr_22745_22766[(2)] = null);
(statearr_22745_22766[(1)] = (2));
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
});})(c__15992__auto__))
;return ((function (switch__15977__auto__,c__15992__auto__){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_22749 = [null,null,null,null,null,null,null,null];(statearr_22749[(0)] = state_machine__15978__auto__);
(statearr_22749[(1)] = (1));
return statearr_22749;
});
var state_machine__15978__auto____1 = (function (state_22728){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_22728);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e22750){if((e22750 instanceof Object))
{var ex__15981__auto__ = e22750;var statearr_22751_22767 = state_22728;(statearr_22751_22767[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22768 = state_22728;
state_22728 = G__22768;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_22728){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_22728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__))
})();var state__15994__auto__ = (function (){var statearr_22752 = f__15993__auto__.call(null);(statearr_22752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_22752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__))
);
return c__15992__auto__;
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
cljs.core.async.Mux = (function (){var obj22770 = {};return obj22770;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12536__auto__ = _;if(and__12536__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12536__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13185__auto__ = (((_ == null))?null:_);return (function (){var or__12548__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22772 = {};return obj22772;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22994 = (function (cs,ch,mult,meta22995){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22995 = meta22995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22994.cljs$lang$type = true;
cljs.core.async.t22994.cljs$lang$ctorStr = "cljs.core.async/t22994";
cljs.core.async.t22994.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t22994");
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22996){var self__ = this;
var _22996__$1 = this;return self__.meta22995;
});})(cs))
;
cljs.core.async.t22994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22996,meta22995__$1){var self__ = this;
var _22996__$1 = this;return (new cljs.core.async.t22994(self__.cs,self__.ch,self__.mult,meta22995__$1));
});})(cs))
;
cljs.core.async.__GT_t22994 = ((function (cs){
return (function __GT_t22994(cs__$1,ch__$1,mult__$1,meta22995){return (new cljs.core.async.t22994(cs__$1,ch__$1,mult__$1,meta22995));
});})(cs))
;
}
return (new cljs.core.async.t22994(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15992__auto___23215 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___23215,cs,m,dchan,dctr,done){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___23215,cs,m,dchan,dctr,done){
return (function (state_23127){var state_val_23128 = (state_23127[(1)]);if((state_val_23128 === (7)))
{var inst_23123 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23129_23216 = state_23127__$1;(statearr_23129_23216[(2)] = inst_23123);
(statearr_23129_23216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (20)))
{var inst_23028 = (state_23127[(7)]);var inst_23038 = cljs.core.first.call(null,inst_23028);var inst_23039 = cljs.core.nth.call(null,inst_23038,(0),null);var inst_23040 = cljs.core.nth.call(null,inst_23038,(1),null);var state_23127__$1 = (function (){var statearr_23130 = state_23127;(statearr_23130[(8)] = inst_23039);
return statearr_23130;
})();if(cljs.core.truth_(inst_23040))
{var statearr_23131_23217 = state_23127__$1;(statearr_23131_23217[(1)] = (22));
} else
{var statearr_23132_23218 = state_23127__$1;(statearr_23132_23218[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (27)))
{var inst_23070 = (state_23127[(9)]);var inst_23068 = (state_23127[(10)]);var inst_22999 = (state_23127[(11)]);var inst_23075 = (state_23127[(12)]);var inst_23075__$1 = cljs.core._nth.call(null,inst_23068,inst_23070);var inst_23076 = cljs.core.async.put_BANG_.call(null,inst_23075__$1,inst_22999,done);var state_23127__$1 = (function (){var statearr_23133 = state_23127;(statearr_23133[(12)] = inst_23075__$1);
return statearr_23133;
})();if(cljs.core.truth_(inst_23076))
{var statearr_23134_23219 = state_23127__$1;(statearr_23134_23219[(1)] = (30));
} else
{var statearr_23135_23220 = state_23127__$1;(statearr_23135_23220[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (1)))
{var state_23127__$1 = state_23127;var statearr_23136_23221 = state_23127__$1;(statearr_23136_23221[(2)] = null);
(statearr_23136_23221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (24)))
{var inst_23028 = (state_23127[(7)]);var inst_23045 = (state_23127[(2)]);var inst_23046 = cljs.core.next.call(null,inst_23028);var inst_23008 = inst_23046;var inst_23009 = null;var inst_23010 = (0);var inst_23011 = (0);var state_23127__$1 = (function (){var statearr_23137 = state_23127;(statearr_23137[(13)] = inst_23011);
(statearr_23137[(14)] = inst_23008);
(statearr_23137[(15)] = inst_23045);
(statearr_23137[(16)] = inst_23009);
(statearr_23137[(17)] = inst_23010);
return statearr_23137;
})();var statearr_23138_23222 = state_23127__$1;(statearr_23138_23222[(2)] = null);
(statearr_23138_23222[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (39)))
{var state_23127__$1 = state_23127;var statearr_23142_23223 = state_23127__$1;(statearr_23142_23223[(2)] = null);
(statearr_23142_23223[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (4)))
{var inst_22999 = (state_23127[(11)]);var inst_22999__$1 = (state_23127[(2)]);var inst_23000 = (inst_22999__$1 == null);var state_23127__$1 = (function (){var statearr_23143 = state_23127;(statearr_23143[(11)] = inst_22999__$1);
return statearr_23143;
})();if(cljs.core.truth_(inst_23000))
{var statearr_23144_23224 = state_23127__$1;(statearr_23144_23224[(1)] = (5));
} else
{var statearr_23145_23225 = state_23127__$1;(statearr_23145_23225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (15)))
{var inst_23011 = (state_23127[(13)]);var inst_23008 = (state_23127[(14)]);var inst_23009 = (state_23127[(16)]);var inst_23010 = (state_23127[(17)]);var inst_23024 = (state_23127[(2)]);var inst_23025 = (inst_23011 + (1));var tmp23139 = inst_23008;var tmp23140 = inst_23009;var tmp23141 = inst_23010;var inst_23008__$1 = tmp23139;var inst_23009__$1 = tmp23140;var inst_23010__$1 = tmp23141;var inst_23011__$1 = inst_23025;var state_23127__$1 = (function (){var statearr_23146 = state_23127;(statearr_23146[(13)] = inst_23011__$1);
(statearr_23146[(14)] = inst_23008__$1);
(statearr_23146[(18)] = inst_23024);
(statearr_23146[(16)] = inst_23009__$1);
(statearr_23146[(17)] = inst_23010__$1);
return statearr_23146;
})();var statearr_23147_23226 = state_23127__$1;(statearr_23147_23226[(2)] = null);
(statearr_23147_23226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (21)))
{var inst_23049 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23151_23227 = state_23127__$1;(statearr_23151_23227[(2)] = inst_23049);
(statearr_23151_23227[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (31)))
{var inst_23075 = (state_23127[(12)]);var inst_23079 = done.call(null,null);var inst_23080 = cljs.core.async.untap_STAR_.call(null,m,inst_23075);var state_23127__$1 = (function (){var statearr_23152 = state_23127;(statearr_23152[(19)] = inst_23079);
return statearr_23152;
})();var statearr_23153_23228 = state_23127__$1;(statearr_23153_23228[(2)] = inst_23080);
(statearr_23153_23228[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (32)))
{var inst_23069 = (state_23127[(20)]);var inst_23070 = (state_23127[(9)]);var inst_23068 = (state_23127[(10)]);var inst_23067 = (state_23127[(21)]);var inst_23082 = (state_23127[(2)]);var inst_23083 = (inst_23070 + (1));var tmp23148 = inst_23069;var tmp23149 = inst_23068;var tmp23150 = inst_23067;var inst_23067__$1 = tmp23150;var inst_23068__$1 = tmp23149;var inst_23069__$1 = tmp23148;var inst_23070__$1 = inst_23083;var state_23127__$1 = (function (){var statearr_23154 = state_23127;(statearr_23154[(20)] = inst_23069__$1);
(statearr_23154[(9)] = inst_23070__$1);
(statearr_23154[(10)] = inst_23068__$1);
(statearr_23154[(22)] = inst_23082);
(statearr_23154[(21)] = inst_23067__$1);
return statearr_23154;
})();var statearr_23155_23229 = state_23127__$1;(statearr_23155_23229[(2)] = null);
(statearr_23155_23229[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (40)))
{var inst_23095 = (state_23127[(23)]);var inst_23099 = done.call(null,null);var inst_23100 = cljs.core.async.untap_STAR_.call(null,m,inst_23095);var state_23127__$1 = (function (){var statearr_23156 = state_23127;(statearr_23156[(24)] = inst_23099);
return statearr_23156;
})();var statearr_23157_23230 = state_23127__$1;(statearr_23157_23230[(2)] = inst_23100);
(statearr_23157_23230[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (33)))
{var inst_23086 = (state_23127[(25)]);var inst_23088 = cljs.core.chunked_seq_QMARK_.call(null,inst_23086);var state_23127__$1 = state_23127;if(inst_23088)
{var statearr_23158_23231 = state_23127__$1;(statearr_23158_23231[(1)] = (36));
} else
{var statearr_23159_23232 = state_23127__$1;(statearr_23159_23232[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (13)))
{var inst_23018 = (state_23127[(26)]);var inst_23021 = cljs.core.async.close_BANG_.call(null,inst_23018);var state_23127__$1 = state_23127;var statearr_23160_23233 = state_23127__$1;(statearr_23160_23233[(2)] = inst_23021);
(statearr_23160_23233[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (22)))
{var inst_23039 = (state_23127[(8)]);var inst_23042 = cljs.core.async.close_BANG_.call(null,inst_23039);var state_23127__$1 = state_23127;var statearr_23161_23234 = state_23127__$1;(statearr_23161_23234[(2)] = inst_23042);
(statearr_23161_23234[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (36)))
{var inst_23086 = (state_23127[(25)]);var inst_23090 = cljs.core.chunk_first.call(null,inst_23086);var inst_23091 = cljs.core.chunk_rest.call(null,inst_23086);var inst_23092 = cljs.core.count.call(null,inst_23090);var inst_23067 = inst_23091;var inst_23068 = inst_23090;var inst_23069 = inst_23092;var inst_23070 = (0);var state_23127__$1 = (function (){var statearr_23162 = state_23127;(statearr_23162[(20)] = inst_23069);
(statearr_23162[(9)] = inst_23070);
(statearr_23162[(10)] = inst_23068);
(statearr_23162[(21)] = inst_23067);
return statearr_23162;
})();var statearr_23163_23235 = state_23127__$1;(statearr_23163_23235[(2)] = null);
(statearr_23163_23235[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (41)))
{var inst_23086 = (state_23127[(25)]);var inst_23102 = (state_23127[(2)]);var inst_23103 = cljs.core.next.call(null,inst_23086);var inst_23067 = inst_23103;var inst_23068 = null;var inst_23069 = (0);var inst_23070 = (0);var state_23127__$1 = (function (){var statearr_23164 = state_23127;(statearr_23164[(20)] = inst_23069);
(statearr_23164[(9)] = inst_23070);
(statearr_23164[(10)] = inst_23068);
(statearr_23164[(27)] = inst_23102);
(statearr_23164[(21)] = inst_23067);
return statearr_23164;
})();var statearr_23165_23236 = state_23127__$1;(statearr_23165_23236[(2)] = null);
(statearr_23165_23236[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (43)))
{var state_23127__$1 = state_23127;var statearr_23166_23237 = state_23127__$1;(statearr_23166_23237[(2)] = null);
(statearr_23166_23237[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (29)))
{var inst_23111 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23167_23238 = state_23127__$1;(statearr_23167_23238[(2)] = inst_23111);
(statearr_23167_23238[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (44)))
{var inst_23120 = (state_23127[(2)]);var state_23127__$1 = (function (){var statearr_23168 = state_23127;(statearr_23168[(28)] = inst_23120);
return statearr_23168;
})();var statearr_23169_23239 = state_23127__$1;(statearr_23169_23239[(2)] = null);
(statearr_23169_23239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (6)))
{var inst_23059 = (state_23127[(29)]);var inst_23058 = cljs.core.deref.call(null,cs);var inst_23059__$1 = cljs.core.keys.call(null,inst_23058);var inst_23060 = cljs.core.count.call(null,inst_23059__$1);var inst_23061 = cljs.core.reset_BANG_.call(null,dctr,inst_23060);var inst_23066 = cljs.core.seq.call(null,inst_23059__$1);var inst_23067 = inst_23066;var inst_23068 = null;var inst_23069 = (0);var inst_23070 = (0);var state_23127__$1 = (function (){var statearr_23170 = state_23127;(statearr_23170[(20)] = inst_23069);
(statearr_23170[(9)] = inst_23070);
(statearr_23170[(10)] = inst_23068);
(statearr_23170[(29)] = inst_23059__$1);
(statearr_23170[(21)] = inst_23067);
(statearr_23170[(30)] = inst_23061);
return statearr_23170;
})();var statearr_23171_23240 = state_23127__$1;(statearr_23171_23240[(2)] = null);
(statearr_23171_23240[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (28)))
{var inst_23086 = (state_23127[(25)]);var inst_23067 = (state_23127[(21)]);var inst_23086__$1 = cljs.core.seq.call(null,inst_23067);var state_23127__$1 = (function (){var statearr_23172 = state_23127;(statearr_23172[(25)] = inst_23086__$1);
return statearr_23172;
})();if(inst_23086__$1)
{var statearr_23173_23241 = state_23127__$1;(statearr_23173_23241[(1)] = (33));
} else
{var statearr_23174_23242 = state_23127__$1;(statearr_23174_23242[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (25)))
{var inst_23069 = (state_23127[(20)]);var inst_23070 = (state_23127[(9)]);var inst_23072 = (inst_23070 < inst_23069);var inst_23073 = inst_23072;var state_23127__$1 = state_23127;if(cljs.core.truth_(inst_23073))
{var statearr_23175_23243 = state_23127__$1;(statearr_23175_23243[(1)] = (27));
} else
{var statearr_23176_23244 = state_23127__$1;(statearr_23176_23244[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (34)))
{var state_23127__$1 = state_23127;var statearr_23177_23245 = state_23127__$1;(statearr_23177_23245[(2)] = null);
(statearr_23177_23245[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (17)))
{var state_23127__$1 = state_23127;var statearr_23178_23246 = state_23127__$1;(statearr_23178_23246[(2)] = null);
(statearr_23178_23246[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (3)))
{var inst_23125 = (state_23127[(2)]);var state_23127__$1 = state_23127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23127__$1,inst_23125);
} else
{if((state_val_23128 === (12)))
{var inst_23054 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23179_23247 = state_23127__$1;(statearr_23179_23247[(2)] = inst_23054);
(statearr_23179_23247[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (2)))
{var state_23127__$1 = state_23127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23127__$1,(4),ch);
} else
{if((state_val_23128 === (23)))
{var state_23127__$1 = state_23127;var statearr_23180_23248 = state_23127__$1;(statearr_23180_23248[(2)] = null);
(statearr_23180_23248[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (35)))
{var inst_23109 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23181_23249 = state_23127__$1;(statearr_23181_23249[(2)] = inst_23109);
(statearr_23181_23249[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (19)))
{var inst_23028 = (state_23127[(7)]);var inst_23032 = cljs.core.chunk_first.call(null,inst_23028);var inst_23033 = cljs.core.chunk_rest.call(null,inst_23028);var inst_23034 = cljs.core.count.call(null,inst_23032);var inst_23008 = inst_23033;var inst_23009 = inst_23032;var inst_23010 = inst_23034;var inst_23011 = (0);var state_23127__$1 = (function (){var statearr_23182 = state_23127;(statearr_23182[(13)] = inst_23011);
(statearr_23182[(14)] = inst_23008);
(statearr_23182[(16)] = inst_23009);
(statearr_23182[(17)] = inst_23010);
return statearr_23182;
})();var statearr_23183_23250 = state_23127__$1;(statearr_23183_23250[(2)] = null);
(statearr_23183_23250[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (11)))
{var inst_23008 = (state_23127[(14)]);var inst_23028 = (state_23127[(7)]);var inst_23028__$1 = cljs.core.seq.call(null,inst_23008);var state_23127__$1 = (function (){var statearr_23184 = state_23127;(statearr_23184[(7)] = inst_23028__$1);
return statearr_23184;
})();if(inst_23028__$1)
{var statearr_23185_23251 = state_23127__$1;(statearr_23185_23251[(1)] = (16));
} else
{var statearr_23186_23252 = state_23127__$1;(statearr_23186_23252[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (9)))
{var inst_23056 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23187_23253 = state_23127__$1;(statearr_23187_23253[(2)] = inst_23056);
(statearr_23187_23253[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (5)))
{var inst_23006 = cljs.core.deref.call(null,cs);var inst_23007 = cljs.core.seq.call(null,inst_23006);var inst_23008 = inst_23007;var inst_23009 = null;var inst_23010 = (0);var inst_23011 = (0);var state_23127__$1 = (function (){var statearr_23188 = state_23127;(statearr_23188[(13)] = inst_23011);
(statearr_23188[(14)] = inst_23008);
(statearr_23188[(16)] = inst_23009);
(statearr_23188[(17)] = inst_23010);
return statearr_23188;
})();var statearr_23189_23254 = state_23127__$1;(statearr_23189_23254[(2)] = null);
(statearr_23189_23254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (14)))
{var state_23127__$1 = state_23127;var statearr_23190_23255 = state_23127__$1;(statearr_23190_23255[(2)] = null);
(statearr_23190_23255[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (45)))
{var inst_23117 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23191_23256 = state_23127__$1;(statearr_23191_23256[(2)] = inst_23117);
(statearr_23191_23256[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (26)))
{var inst_23059 = (state_23127[(29)]);var inst_23113 = (state_23127[(2)]);var inst_23114 = cljs.core.seq.call(null,inst_23059);var state_23127__$1 = (function (){var statearr_23192 = state_23127;(statearr_23192[(31)] = inst_23113);
return statearr_23192;
})();if(inst_23114)
{var statearr_23193_23257 = state_23127__$1;(statearr_23193_23257[(1)] = (42));
} else
{var statearr_23194_23258 = state_23127__$1;(statearr_23194_23258[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (16)))
{var inst_23028 = (state_23127[(7)]);var inst_23030 = cljs.core.chunked_seq_QMARK_.call(null,inst_23028);var state_23127__$1 = state_23127;if(inst_23030)
{var statearr_23195_23259 = state_23127__$1;(statearr_23195_23259[(1)] = (19));
} else
{var statearr_23196_23260 = state_23127__$1;(statearr_23196_23260[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (38)))
{var inst_23106 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23197_23261 = state_23127__$1;(statearr_23197_23261[(2)] = inst_23106);
(statearr_23197_23261[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (30)))
{var state_23127__$1 = state_23127;var statearr_23198_23262 = state_23127__$1;(statearr_23198_23262[(2)] = null);
(statearr_23198_23262[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (10)))
{var inst_23011 = (state_23127[(13)]);var inst_23009 = (state_23127[(16)]);var inst_23017 = cljs.core._nth.call(null,inst_23009,inst_23011);var inst_23018 = cljs.core.nth.call(null,inst_23017,(0),null);var inst_23019 = cljs.core.nth.call(null,inst_23017,(1),null);var state_23127__$1 = (function (){var statearr_23199 = state_23127;(statearr_23199[(26)] = inst_23018);
return statearr_23199;
})();if(cljs.core.truth_(inst_23019))
{var statearr_23200_23263 = state_23127__$1;(statearr_23200_23263[(1)] = (13));
} else
{var statearr_23201_23264 = state_23127__$1;(statearr_23201_23264[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (18)))
{var inst_23052 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23202_23265 = state_23127__$1;(statearr_23202_23265[(2)] = inst_23052);
(statearr_23202_23265[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (42)))
{var state_23127__$1 = state_23127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23127__$1,(45),dchan);
} else
{if((state_val_23128 === (37)))
{var inst_23086 = (state_23127[(25)]);var inst_22999 = (state_23127[(11)]);var inst_23095 = (state_23127[(23)]);var inst_23095__$1 = cljs.core.first.call(null,inst_23086);var inst_23096 = cljs.core.async.put_BANG_.call(null,inst_23095__$1,inst_22999,done);var state_23127__$1 = (function (){var statearr_23203 = state_23127;(statearr_23203[(23)] = inst_23095__$1);
return statearr_23203;
})();if(cljs.core.truth_(inst_23096))
{var statearr_23204_23266 = state_23127__$1;(statearr_23204_23266[(1)] = (39));
} else
{var statearr_23205_23267 = state_23127__$1;(statearr_23205_23267[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23128 === (8)))
{var inst_23011 = (state_23127[(13)]);var inst_23010 = (state_23127[(17)]);var inst_23013 = (inst_23011 < inst_23010);var inst_23014 = inst_23013;var state_23127__$1 = state_23127;if(cljs.core.truth_(inst_23014))
{var statearr_23206_23268 = state_23127__$1;(statearr_23206_23268[(1)] = (10));
} else
{var statearr_23207_23269 = state_23127__$1;(statearr_23207_23269[(1)] = (11));
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
});})(c__15992__auto___23215,cs,m,dchan,dctr,done))
;return ((function (switch__15977__auto__,c__15992__auto___23215,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_23211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23211[(0)] = state_machine__15978__auto__);
(statearr_23211[(1)] = (1));
return statearr_23211;
});
var state_machine__15978__auto____1 = (function (state_23127){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_23127);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e23212){if((e23212 instanceof Object))
{var ex__15981__auto__ = e23212;var statearr_23213_23270 = state_23127;(statearr_23213_23270[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23271 = state_23127;
state_23127 = G__23271;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_23127){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_23127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___23215,cs,m,dchan,dctr,done))
})();var state__15994__auto__ = (function (){var statearr_23214 = f__15993__auto__.call(null);(statearr_23214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___23215);
return statearr_23214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___23215,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj23273 = {};return obj23273;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__12536__auto__ = m;if(and__12536__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__13185__auto__ = (((m == null))?null:m);return (function (){var or__12548__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23274){var map__23279 = p__23274;var map__23279__$1 = ((cljs.core.seq_QMARK_.call(null,map__23279))?cljs.core.apply.call(null,cljs.core.hash_map,map__23279):map__23279);var opts = map__23279__$1;var statearr_23280_23283 = state;(statearr_23280_23283[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__23279,map__23279__$1,opts){
return (function (val){var statearr_23281_23284 = state;(statearr_23281_23284[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23279,map__23279__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23282_23285 = state;(statearr_23282_23285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23274 = null;if (arguments.length > 3) {
  p__23274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23274);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23286){
var state = cljs.core.first(arglist__23286);
arglist__23286 = cljs.core.next(arglist__23286);
var cont_block = cljs.core.first(arglist__23286);
arglist__23286 = cljs.core.next(arglist__23286);
var ports = cljs.core.first(arglist__23286);
var p__23274 = cljs.core.rest(arglist__23286);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23274);
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
;var m = (function (){if(typeof cljs.core.async.t23406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23406 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23407){
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
this.meta23407 = meta23407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23406.cljs$lang$type = true;
cljs.core.async.t23406.cljs$lang$ctorStr = "cljs.core.async/t23406";
cljs.core.async.t23406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t23406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23408){var self__ = this;
var _23408__$1 = this;return self__.meta23407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23408,meta23407__$1){var self__ = this;
var _23408__$1 = this;return (new cljs.core.async.t23406(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23407){return (new cljs.core.async.t23406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23406(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15992__auto___23525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23478){var state_val_23479 = (state_23478[(1)]);if((state_val_23479 === (7)))
{var inst_23422 = (state_23478[(7)]);var inst_23427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23422);var state_23478__$1 = state_23478;var statearr_23480_23526 = state_23478__$1;(statearr_23480_23526[(2)] = inst_23427);
(statearr_23480_23526[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (20)))
{var inst_23437 = (state_23478[(8)]);var state_23478__$1 = state_23478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23478__$1,(23),out,inst_23437);
} else
{if((state_val_23479 === (1)))
{var inst_23412 = (state_23478[(9)]);var inst_23412__$1 = calc_state.call(null);var inst_23413 = cljs.core.seq_QMARK_.call(null,inst_23412__$1);var state_23478__$1 = (function (){var statearr_23481 = state_23478;(statearr_23481[(9)] = inst_23412__$1);
return statearr_23481;
})();if(inst_23413)
{var statearr_23482_23527 = state_23478__$1;(statearr_23482_23527[(1)] = (2));
} else
{var statearr_23483_23528 = state_23478__$1;(statearr_23483_23528[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (24)))
{var inst_23430 = (state_23478[(10)]);var inst_23422 = inst_23430;var state_23478__$1 = (function (){var statearr_23484 = state_23478;(statearr_23484[(7)] = inst_23422);
return statearr_23484;
})();var statearr_23485_23529 = state_23478__$1;(statearr_23485_23529[(2)] = null);
(statearr_23485_23529[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (4)))
{var inst_23412 = (state_23478[(9)]);var inst_23418 = (state_23478[(2)]);var inst_23419 = cljs.core.get.call(null,inst_23418,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23420 = cljs.core.get.call(null,inst_23418,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23421 = cljs.core.get.call(null,inst_23418,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_23422 = inst_23412;var state_23478__$1 = (function (){var statearr_23486 = state_23478;(statearr_23486[(11)] = inst_23420);
(statearr_23486[(12)] = inst_23419);
(statearr_23486[(13)] = inst_23421);
(statearr_23486[(7)] = inst_23422);
return statearr_23486;
})();var statearr_23487_23530 = state_23478__$1;(statearr_23487_23530[(2)] = null);
(statearr_23487_23530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (15)))
{var state_23478__$1 = state_23478;var statearr_23488_23531 = state_23478__$1;(statearr_23488_23531[(2)] = null);
(statearr_23488_23531[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (21)))
{var inst_23430 = (state_23478[(10)]);var inst_23422 = inst_23430;var state_23478__$1 = (function (){var statearr_23489 = state_23478;(statearr_23489[(7)] = inst_23422);
return statearr_23489;
})();var statearr_23490_23532 = state_23478__$1;(statearr_23490_23532[(2)] = null);
(statearr_23490_23532[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (13)))
{var inst_23474 = (state_23478[(2)]);var state_23478__$1 = state_23478;var statearr_23491_23533 = state_23478__$1;(statearr_23491_23533[(2)] = inst_23474);
(statearr_23491_23533[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (22)))
{var inst_23472 = (state_23478[(2)]);var state_23478__$1 = state_23478;var statearr_23492_23534 = state_23478__$1;(statearr_23492_23534[(2)] = inst_23472);
(statearr_23492_23534[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (6)))
{var inst_23476 = (state_23478[(2)]);var state_23478__$1 = state_23478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23478__$1,inst_23476);
} else
{if((state_val_23479 === (25)))
{var state_23478__$1 = state_23478;var statearr_23493_23535 = state_23478__$1;(statearr_23493_23535[(2)] = null);
(statearr_23493_23535[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (17)))
{var inst_23452 = (state_23478[(14)]);var state_23478__$1 = state_23478;var statearr_23494_23536 = state_23478__$1;(statearr_23494_23536[(2)] = inst_23452);
(statearr_23494_23536[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (3)))
{var inst_23412 = (state_23478[(9)]);var state_23478__$1 = state_23478;var statearr_23495_23537 = state_23478__$1;(statearr_23495_23537[(2)] = inst_23412);
(statearr_23495_23537[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (12)))
{var inst_23438 = (state_23478[(15)]);var inst_23433 = (state_23478[(16)]);var inst_23452 = (state_23478[(14)]);var inst_23452__$1 = inst_23433.call(null,inst_23438);var state_23478__$1 = (function (){var statearr_23496 = state_23478;(statearr_23496[(14)] = inst_23452__$1);
return statearr_23496;
})();if(cljs.core.truth_(inst_23452__$1))
{var statearr_23497_23538 = state_23478__$1;(statearr_23497_23538[(1)] = (17));
} else
{var statearr_23498_23539 = state_23478__$1;(statearr_23498_23539[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (2)))
{var inst_23412 = (state_23478[(9)]);var inst_23415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23412);var state_23478__$1 = state_23478;var statearr_23499_23540 = state_23478__$1;(statearr_23499_23540[(2)] = inst_23415);
(statearr_23499_23540[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (23)))
{var inst_23463 = (state_23478[(2)]);var state_23478__$1 = state_23478;if(cljs.core.truth_(inst_23463))
{var statearr_23500_23541 = state_23478__$1;(statearr_23500_23541[(1)] = (24));
} else
{var statearr_23501_23542 = state_23478__$1;(statearr_23501_23542[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (19)))
{var inst_23460 = (state_23478[(2)]);var state_23478__$1 = state_23478;if(cljs.core.truth_(inst_23460))
{var statearr_23502_23543 = state_23478__$1;(statearr_23502_23543[(1)] = (20));
} else
{var statearr_23503_23544 = state_23478__$1;(statearr_23503_23544[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (11)))
{var inst_23437 = (state_23478[(8)]);var inst_23443 = (inst_23437 == null);var state_23478__$1 = state_23478;if(cljs.core.truth_(inst_23443))
{var statearr_23504_23545 = state_23478__$1;(statearr_23504_23545[(1)] = (14));
} else
{var statearr_23505_23546 = state_23478__$1;(statearr_23505_23546[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (9)))
{var inst_23430 = (state_23478[(10)]);var inst_23430__$1 = (state_23478[(2)]);var inst_23431 = cljs.core.get.call(null,inst_23430__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_23432 = cljs.core.get.call(null,inst_23430__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_23433 = cljs.core.get.call(null,inst_23430__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_23478__$1 = (function (){var statearr_23506 = state_23478;(statearr_23506[(17)] = inst_23432);
(statearr_23506[(16)] = inst_23433);
(statearr_23506[(10)] = inst_23430__$1);
return statearr_23506;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_23478__$1,(10),inst_23431);
} else
{if((state_val_23479 === (5)))
{var inst_23422 = (state_23478[(7)]);var inst_23425 = cljs.core.seq_QMARK_.call(null,inst_23422);var state_23478__$1 = state_23478;if(inst_23425)
{var statearr_23507_23547 = state_23478__$1;(statearr_23507_23547[(1)] = (7));
} else
{var statearr_23508_23548 = state_23478__$1;(statearr_23508_23548[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (14)))
{var inst_23438 = (state_23478[(15)]);var inst_23445 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23438);var state_23478__$1 = state_23478;var statearr_23509_23549 = state_23478__$1;(statearr_23509_23549[(2)] = inst_23445);
(statearr_23509_23549[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (26)))
{var inst_23468 = (state_23478[(2)]);var state_23478__$1 = state_23478;var statearr_23510_23550 = state_23478__$1;(statearr_23510_23550[(2)] = inst_23468);
(statearr_23510_23550[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (16)))
{var inst_23448 = (state_23478[(2)]);var inst_23449 = calc_state.call(null);var inst_23422 = inst_23449;var state_23478__$1 = (function (){var statearr_23511 = state_23478;(statearr_23511[(18)] = inst_23448);
(statearr_23511[(7)] = inst_23422);
return statearr_23511;
})();var statearr_23512_23551 = state_23478__$1;(statearr_23512_23551[(2)] = null);
(statearr_23512_23551[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (10)))
{var inst_23437 = (state_23478[(8)]);var inst_23438 = (state_23478[(15)]);var inst_23436 = (state_23478[(2)]);var inst_23437__$1 = cljs.core.nth.call(null,inst_23436,(0),null);var inst_23438__$1 = cljs.core.nth.call(null,inst_23436,(1),null);var inst_23439 = (inst_23437__$1 == null);var inst_23440 = cljs.core._EQ_.call(null,inst_23438__$1,change);var inst_23441 = (inst_23439) || (inst_23440);var state_23478__$1 = (function (){var statearr_23513 = state_23478;(statearr_23513[(8)] = inst_23437__$1);
(statearr_23513[(15)] = inst_23438__$1);
return statearr_23513;
})();if(cljs.core.truth_(inst_23441))
{var statearr_23514_23552 = state_23478__$1;(statearr_23514_23552[(1)] = (11));
} else
{var statearr_23515_23553 = state_23478__$1;(statearr_23515_23553[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (18)))
{var inst_23438 = (state_23478[(15)]);var inst_23432 = (state_23478[(17)]);var inst_23433 = (state_23478[(16)]);var inst_23455 = cljs.core.empty_QMARK_.call(null,inst_23433);var inst_23456 = inst_23432.call(null,inst_23438);var inst_23457 = cljs.core.not.call(null,inst_23456);var inst_23458 = (inst_23455) && (inst_23457);var state_23478__$1 = state_23478;var statearr_23516_23554 = state_23478__$1;(statearr_23516_23554[(2)] = inst_23458);
(statearr_23516_23554[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23479 === (8)))
{var inst_23422 = (state_23478[(7)]);var state_23478__$1 = state_23478;var statearr_23517_23555 = state_23478__$1;(statearr_23517_23555[(2)] = inst_23422);
(statearr_23517_23555[(1)] = (9));
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
});})(c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15977__auto__,c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_23521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23521[(0)] = state_machine__15978__auto__);
(statearr_23521[(1)] = (1));
return statearr_23521;
});
var state_machine__15978__auto____1 = (function (state_23478){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_23478);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object))
{var ex__15981__auto__ = e23522;var statearr_23523_23556 = state_23478;(statearr_23523_23556[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23557 = state_23478;
state_23478 = G__23557;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_23478){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_23478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15994__auto__ = (function (){var statearr_23524 = f__15993__auto__.call(null);(statearr_23524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___23525);
return statearr_23524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___23525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj23559 = {};return obj23559;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12536__auto__ = p;if(and__12536__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12536__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13185__auto__ = (((p == null))?null:p);return (function (){var or__12548__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__12536__auto__ = p;if(and__12536__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__12536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__13185__auto__ = (((p == null))?null:p);return (function (){var or__12548__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__12536__auto__ = p;if(and__12536__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__12536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__13185__auto__ = (((p == null))?null:p);return (function (){var or__12548__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__12536__auto__ = p;if(and__12536__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__12536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__13185__auto__ = (((p == null))?null:p);return (function (){var or__12548__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13185__auto__)]);if(or__12548__auto__)
{return or__12548__auto__;
} else
{var or__12548__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__12548__auto____$1)
{return or__12548__auto____$1;
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
return (function (topic){var or__12548__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__12548__auto__))
{return or__12548__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12548__auto__,mults){
return (function (p1__23560_SHARP_){if(cljs.core.truth_(p1__23560_SHARP_.call(null,topic)))
{return p1__23560_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12548__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23683 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23683 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23684){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23684 = meta23684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23683.cljs$lang$type = true;
cljs.core.async.t23683.cljs$lang$ctorStr = "cljs.core.async/t23683";
cljs.core.async.t23683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t23683");
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23685){var self__ = this;
var _23685__$1 = this;return self__.meta23684;
});})(mults,ensure_mult))
;
cljs.core.async.t23683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23685,meta23684__$1){var self__ = this;
var _23685__$1 = this;return (new cljs.core.async.t23683(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23684__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23683 = ((function (mults,ensure_mult){
return (function __GT_t23683(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23684){return (new cljs.core.async.t23683(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23684));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23683(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15992__auto___23805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___23805,mults,ensure_mult,p){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___23805,mults,ensure_mult,p){
return (function (state_23757){var state_val_23758 = (state_23757[(1)]);if((state_val_23758 === (7)))
{var inst_23753 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23759_23806 = state_23757__$1;(statearr_23759_23806[(2)] = inst_23753);
(statearr_23759_23806[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (20)))
{var state_23757__$1 = state_23757;var statearr_23760_23807 = state_23757__$1;(statearr_23760_23807[(2)] = null);
(statearr_23760_23807[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (1)))
{var state_23757__$1 = state_23757;var statearr_23761_23808 = state_23757__$1;(statearr_23761_23808[(2)] = null);
(statearr_23761_23808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (24)))
{var inst_23736 = (state_23757[(7)]);var inst_23745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23736);var state_23757__$1 = state_23757;var statearr_23762_23809 = state_23757__$1;(statearr_23762_23809[(2)] = inst_23745);
(statearr_23762_23809[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (4)))
{var inst_23688 = (state_23757[(8)]);var inst_23688__$1 = (state_23757[(2)]);var inst_23689 = (inst_23688__$1 == null);var state_23757__$1 = (function (){var statearr_23763 = state_23757;(statearr_23763[(8)] = inst_23688__$1);
return statearr_23763;
})();if(cljs.core.truth_(inst_23689))
{var statearr_23764_23810 = state_23757__$1;(statearr_23764_23810[(1)] = (5));
} else
{var statearr_23765_23811 = state_23757__$1;(statearr_23765_23811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (15)))
{var inst_23730 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23766_23812 = state_23757__$1;(statearr_23766_23812[(2)] = inst_23730);
(statearr_23766_23812[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (21)))
{var inst_23750 = (state_23757[(2)]);var state_23757__$1 = (function (){var statearr_23767 = state_23757;(statearr_23767[(9)] = inst_23750);
return statearr_23767;
})();var statearr_23768_23813 = state_23757__$1;(statearr_23768_23813[(2)] = null);
(statearr_23768_23813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (13)))
{var inst_23712 = (state_23757[(10)]);var inst_23714 = cljs.core.chunked_seq_QMARK_.call(null,inst_23712);var state_23757__$1 = state_23757;if(inst_23714)
{var statearr_23769_23814 = state_23757__$1;(statearr_23769_23814[(1)] = (16));
} else
{var statearr_23770_23815 = state_23757__$1;(statearr_23770_23815[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (22)))
{var inst_23742 = (state_23757[(2)]);var state_23757__$1 = state_23757;if(cljs.core.truth_(inst_23742))
{var statearr_23771_23816 = state_23757__$1;(statearr_23771_23816[(1)] = (23));
} else
{var statearr_23772_23817 = state_23757__$1;(statearr_23772_23817[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (6)))
{var inst_23688 = (state_23757[(8)]);var inst_23736 = (state_23757[(7)]);var inst_23738 = (state_23757[(11)]);var inst_23736__$1 = topic_fn.call(null,inst_23688);var inst_23737 = cljs.core.deref.call(null,mults);var inst_23738__$1 = cljs.core.get.call(null,inst_23737,inst_23736__$1);var state_23757__$1 = (function (){var statearr_23773 = state_23757;(statearr_23773[(7)] = inst_23736__$1);
(statearr_23773[(11)] = inst_23738__$1);
return statearr_23773;
})();if(cljs.core.truth_(inst_23738__$1))
{var statearr_23774_23818 = state_23757__$1;(statearr_23774_23818[(1)] = (19));
} else
{var statearr_23775_23819 = state_23757__$1;(statearr_23775_23819[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (25)))
{var inst_23747 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23776_23820 = state_23757__$1;(statearr_23776_23820[(2)] = inst_23747);
(statearr_23776_23820[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (17)))
{var inst_23712 = (state_23757[(10)]);var inst_23721 = cljs.core.first.call(null,inst_23712);var inst_23722 = cljs.core.async.muxch_STAR_.call(null,inst_23721);var inst_23723 = cljs.core.async.close_BANG_.call(null,inst_23722);var inst_23724 = cljs.core.next.call(null,inst_23712);var inst_23698 = inst_23724;var inst_23699 = null;var inst_23700 = (0);var inst_23701 = (0);var state_23757__$1 = (function (){var statearr_23777 = state_23757;(statearr_23777[(12)] = inst_23700);
(statearr_23777[(13)] = inst_23699);
(statearr_23777[(14)] = inst_23698);
(statearr_23777[(15)] = inst_23723);
(statearr_23777[(16)] = inst_23701);
return statearr_23777;
})();var statearr_23778_23821 = state_23757__$1;(statearr_23778_23821[(2)] = null);
(statearr_23778_23821[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (3)))
{var inst_23755 = (state_23757[(2)]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else
{if((state_val_23758 === (12)))
{var inst_23732 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23779_23822 = state_23757__$1;(statearr_23779_23822[(2)] = inst_23732);
(statearr_23779_23822[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (2)))
{var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(4),ch);
} else
{if((state_val_23758 === (23)))
{var state_23757__$1 = state_23757;var statearr_23780_23823 = state_23757__$1;(statearr_23780_23823[(2)] = null);
(statearr_23780_23823[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (19)))
{var inst_23688 = (state_23757[(8)]);var inst_23738 = (state_23757[(11)]);var inst_23740 = cljs.core.async.muxch_STAR_.call(null,inst_23738);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,(22),inst_23740,inst_23688);
} else
{if((state_val_23758 === (11)))
{var inst_23712 = (state_23757[(10)]);var inst_23698 = (state_23757[(14)]);var inst_23712__$1 = cljs.core.seq.call(null,inst_23698);var state_23757__$1 = (function (){var statearr_23781 = state_23757;(statearr_23781[(10)] = inst_23712__$1);
return statearr_23781;
})();if(inst_23712__$1)
{var statearr_23782_23824 = state_23757__$1;(statearr_23782_23824[(1)] = (13));
} else
{var statearr_23783_23825 = state_23757__$1;(statearr_23783_23825[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (9)))
{var inst_23734 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23784_23826 = state_23757__$1;(statearr_23784_23826[(2)] = inst_23734);
(statearr_23784_23826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (5)))
{var inst_23695 = cljs.core.deref.call(null,mults);var inst_23696 = cljs.core.vals.call(null,inst_23695);var inst_23697 = cljs.core.seq.call(null,inst_23696);var inst_23698 = inst_23697;var inst_23699 = null;var inst_23700 = (0);var inst_23701 = (0);var state_23757__$1 = (function (){var statearr_23785 = state_23757;(statearr_23785[(12)] = inst_23700);
(statearr_23785[(13)] = inst_23699);
(statearr_23785[(14)] = inst_23698);
(statearr_23785[(16)] = inst_23701);
return statearr_23785;
})();var statearr_23786_23827 = state_23757__$1;(statearr_23786_23827[(2)] = null);
(statearr_23786_23827[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (14)))
{var state_23757__$1 = state_23757;var statearr_23790_23828 = state_23757__$1;(statearr_23790_23828[(2)] = null);
(statearr_23790_23828[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (16)))
{var inst_23712 = (state_23757[(10)]);var inst_23716 = cljs.core.chunk_first.call(null,inst_23712);var inst_23717 = cljs.core.chunk_rest.call(null,inst_23712);var inst_23718 = cljs.core.count.call(null,inst_23716);var inst_23698 = inst_23717;var inst_23699 = inst_23716;var inst_23700 = inst_23718;var inst_23701 = (0);var state_23757__$1 = (function (){var statearr_23791 = state_23757;(statearr_23791[(12)] = inst_23700);
(statearr_23791[(13)] = inst_23699);
(statearr_23791[(14)] = inst_23698);
(statearr_23791[(16)] = inst_23701);
return statearr_23791;
})();var statearr_23792_23829 = state_23757__$1;(statearr_23792_23829[(2)] = null);
(statearr_23792_23829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (10)))
{var inst_23700 = (state_23757[(12)]);var inst_23699 = (state_23757[(13)]);var inst_23698 = (state_23757[(14)]);var inst_23701 = (state_23757[(16)]);var inst_23706 = cljs.core._nth.call(null,inst_23699,inst_23701);var inst_23707 = cljs.core.async.muxch_STAR_.call(null,inst_23706);var inst_23708 = cljs.core.async.close_BANG_.call(null,inst_23707);var inst_23709 = (inst_23701 + (1));var tmp23787 = inst_23700;var tmp23788 = inst_23699;var tmp23789 = inst_23698;var inst_23698__$1 = tmp23789;var inst_23699__$1 = tmp23788;var inst_23700__$1 = tmp23787;var inst_23701__$1 = inst_23709;var state_23757__$1 = (function (){var statearr_23793 = state_23757;(statearr_23793[(12)] = inst_23700__$1);
(statearr_23793[(17)] = inst_23708);
(statearr_23793[(13)] = inst_23699__$1);
(statearr_23793[(14)] = inst_23698__$1);
(statearr_23793[(16)] = inst_23701__$1);
return statearr_23793;
})();var statearr_23794_23830 = state_23757__$1;(statearr_23794_23830[(2)] = null);
(statearr_23794_23830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (18)))
{var inst_23727 = (state_23757[(2)]);var state_23757__$1 = state_23757;var statearr_23795_23831 = state_23757__$1;(statearr_23795_23831[(2)] = inst_23727);
(statearr_23795_23831[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23758 === (8)))
{var inst_23700 = (state_23757[(12)]);var inst_23701 = (state_23757[(16)]);var inst_23703 = (inst_23701 < inst_23700);var inst_23704 = inst_23703;var state_23757__$1 = state_23757;if(cljs.core.truth_(inst_23704))
{var statearr_23796_23832 = state_23757__$1;(statearr_23796_23832[(1)] = (10));
} else
{var statearr_23797_23833 = state_23757__$1;(statearr_23797_23833[(1)] = (11));
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
});})(c__15992__auto___23805,mults,ensure_mult,p))
;return ((function (switch__15977__auto__,c__15992__auto___23805,mults,ensure_mult,p){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_23801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23801[(0)] = state_machine__15978__auto__);
(statearr_23801[(1)] = (1));
return statearr_23801;
});
var state_machine__15978__auto____1 = (function (state_23757){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_23757);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e23802){if((e23802 instanceof Object))
{var ex__15981__auto__ = e23802;var statearr_23803_23834 = state_23757;(statearr_23803_23834[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23835 = state_23757;
state_23757 = G__23835;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___23805,mults,ensure_mult,p))
})();var state__15994__auto__ = (function (){var statearr_23804 = f__15993__auto__.call(null);(statearr_23804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___23805);
return statearr_23804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___23805,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15992__auto___23972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23942){var state_val_23943 = (state_23942[(1)]);if((state_val_23943 === (7)))
{var state_23942__$1 = state_23942;var statearr_23944_23973 = state_23942__$1;(statearr_23944_23973[(2)] = null);
(statearr_23944_23973[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (1)))
{var state_23942__$1 = state_23942;var statearr_23945_23974 = state_23942__$1;(statearr_23945_23974[(2)] = null);
(statearr_23945_23974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (4)))
{var inst_23906 = (state_23942[(7)]);var inst_23908 = (inst_23906 < cnt);var state_23942__$1 = state_23942;if(cljs.core.truth_(inst_23908))
{var statearr_23946_23975 = state_23942__$1;(statearr_23946_23975[(1)] = (6));
} else
{var statearr_23947_23976 = state_23942__$1;(statearr_23947_23976[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (15)))
{var inst_23938 = (state_23942[(2)]);var state_23942__$1 = state_23942;var statearr_23948_23977 = state_23942__$1;(statearr_23948_23977[(2)] = inst_23938);
(statearr_23948_23977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (13)))
{var inst_23931 = cljs.core.async.close_BANG_.call(null,out);var state_23942__$1 = state_23942;var statearr_23949_23978 = state_23942__$1;(statearr_23949_23978[(2)] = inst_23931);
(statearr_23949_23978[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (6)))
{var state_23942__$1 = state_23942;var statearr_23950_23979 = state_23942__$1;(statearr_23950_23979[(2)] = null);
(statearr_23950_23979[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (3)))
{var inst_23940 = (state_23942[(2)]);var state_23942__$1 = state_23942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23942__$1,inst_23940);
} else
{if((state_val_23943 === (12)))
{var inst_23928 = (state_23942[(8)]);var inst_23928__$1 = (state_23942[(2)]);var inst_23929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23928__$1);var state_23942__$1 = (function (){var statearr_23951 = state_23942;(statearr_23951[(8)] = inst_23928__$1);
return statearr_23951;
})();if(cljs.core.truth_(inst_23929))
{var statearr_23952_23980 = state_23942__$1;(statearr_23952_23980[(1)] = (13));
} else
{var statearr_23953_23981 = state_23942__$1;(statearr_23953_23981[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (2)))
{var inst_23905 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23906 = (0);var state_23942__$1 = (function (){var statearr_23954 = state_23942;(statearr_23954[(9)] = inst_23905);
(statearr_23954[(7)] = inst_23906);
return statearr_23954;
})();var statearr_23955_23982 = state_23942__$1;(statearr_23955_23982[(2)] = null);
(statearr_23955_23982[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (11)))
{var inst_23906 = (state_23942[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23942,(10),Object,null,(9));var inst_23915 = chs__$1.call(null,inst_23906);var inst_23916 = done.call(null,inst_23906);var inst_23917 = cljs.core.async.take_BANG_.call(null,inst_23915,inst_23916);var state_23942__$1 = state_23942;var statearr_23956_23983 = state_23942__$1;(statearr_23956_23983[(2)] = inst_23917);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23942__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (9)))
{var inst_23906 = (state_23942[(7)]);var inst_23919 = (state_23942[(2)]);var inst_23920 = (inst_23906 + (1));var inst_23906__$1 = inst_23920;var state_23942__$1 = (function (){var statearr_23957 = state_23942;(statearr_23957[(10)] = inst_23919);
(statearr_23957[(7)] = inst_23906__$1);
return statearr_23957;
})();var statearr_23958_23984 = state_23942__$1;(statearr_23958_23984[(2)] = null);
(statearr_23958_23984[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (5)))
{var inst_23926 = (state_23942[(2)]);var state_23942__$1 = (function (){var statearr_23959 = state_23942;(statearr_23959[(11)] = inst_23926);
return statearr_23959;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23942__$1,(12),dchan);
} else
{if((state_val_23943 === (14)))
{var inst_23928 = (state_23942[(8)]);var inst_23933 = cljs.core.apply.call(null,f,inst_23928);var state_23942__$1 = state_23942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23942__$1,(16),out,inst_23933);
} else
{if((state_val_23943 === (16)))
{var inst_23935 = (state_23942[(2)]);var state_23942__$1 = (function (){var statearr_23960 = state_23942;(statearr_23960[(12)] = inst_23935);
return statearr_23960;
})();var statearr_23961_23985 = state_23942__$1;(statearr_23961_23985[(2)] = null);
(statearr_23961_23985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (10)))
{var inst_23910 = (state_23942[(2)]);var inst_23911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23942__$1 = (function (){var statearr_23962 = state_23942;(statearr_23962[(13)] = inst_23910);
return statearr_23962;
})();var statearr_23963_23986 = state_23942__$1;(statearr_23963_23986[(2)] = inst_23911);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23942__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23943 === (8)))
{var inst_23924 = (state_23942[(2)]);var state_23942__$1 = state_23942;var statearr_23964_23987 = state_23942__$1;(statearr_23964_23987[(2)] = inst_23924);
(statearr_23964_23987[(1)] = (5));
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
});})(c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15977__auto__,c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_23968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23968[(0)] = state_machine__15978__auto__);
(statearr_23968[(1)] = (1));
return statearr_23968;
});
var state_machine__15978__auto____1 = (function (state_23942){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_23942);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e23969){if((e23969 instanceof Object))
{var ex__15981__auto__ = e23969;var statearr_23970_23988 = state_23942;(statearr_23970_23988[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23989 = state_23942;
state_23942 = G__23989;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_23942){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_23942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15994__auto__ = (function (){var statearr_23971 = f__15993__auto__.call(null);(statearr_23971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___23972);
return statearr_23971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___23972,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24097 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24097,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24097,out){
return (function (state_24073){var state_val_24074 = (state_24073[(1)]);if((state_val_24074 === (7)))
{var inst_24052 = (state_24073[(7)]);var inst_24053 = (state_24073[(8)]);var inst_24052__$1 = (state_24073[(2)]);var inst_24053__$1 = cljs.core.nth.call(null,inst_24052__$1,(0),null);var inst_24054 = cljs.core.nth.call(null,inst_24052__$1,(1),null);var inst_24055 = (inst_24053__$1 == null);var state_24073__$1 = (function (){var statearr_24075 = state_24073;(statearr_24075[(7)] = inst_24052__$1);
(statearr_24075[(8)] = inst_24053__$1);
(statearr_24075[(9)] = inst_24054);
return statearr_24075;
})();if(cljs.core.truth_(inst_24055))
{var statearr_24076_24098 = state_24073__$1;(statearr_24076_24098[(1)] = (8));
} else
{var statearr_24077_24099 = state_24073__$1;(statearr_24077_24099[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (1)))
{var inst_24044 = cljs.core.vec.call(null,chs);var inst_24045 = inst_24044;var state_24073__$1 = (function (){var statearr_24078 = state_24073;(statearr_24078[(10)] = inst_24045);
return statearr_24078;
})();var statearr_24079_24100 = state_24073__$1;(statearr_24079_24100[(2)] = null);
(statearr_24079_24100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (4)))
{var inst_24045 = (state_24073[(10)]);var state_24073__$1 = state_24073;return cljs.core.async.ioc_alts_BANG_.call(null,state_24073__$1,(7),inst_24045);
} else
{if((state_val_24074 === (6)))
{var inst_24069 = (state_24073[(2)]);var state_24073__$1 = state_24073;var statearr_24080_24101 = state_24073__$1;(statearr_24080_24101[(2)] = inst_24069);
(statearr_24080_24101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (3)))
{var inst_24071 = (state_24073[(2)]);var state_24073__$1 = state_24073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24073__$1,inst_24071);
} else
{if((state_val_24074 === (2)))
{var inst_24045 = (state_24073[(10)]);var inst_24047 = cljs.core.count.call(null,inst_24045);var inst_24048 = (inst_24047 > (0));var state_24073__$1 = state_24073;if(cljs.core.truth_(inst_24048))
{var statearr_24082_24102 = state_24073__$1;(statearr_24082_24102[(1)] = (4));
} else
{var statearr_24083_24103 = state_24073__$1;(statearr_24083_24103[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (11)))
{var inst_24045 = (state_24073[(10)]);var inst_24062 = (state_24073[(2)]);var tmp24081 = inst_24045;var inst_24045__$1 = tmp24081;var state_24073__$1 = (function (){var statearr_24084 = state_24073;(statearr_24084[(11)] = inst_24062);
(statearr_24084[(10)] = inst_24045__$1);
return statearr_24084;
})();var statearr_24085_24104 = state_24073__$1;(statearr_24085_24104[(2)] = null);
(statearr_24085_24104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (9)))
{var inst_24053 = (state_24073[(8)]);var state_24073__$1 = state_24073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24073__$1,(11),out,inst_24053);
} else
{if((state_val_24074 === (5)))
{var inst_24067 = cljs.core.async.close_BANG_.call(null,out);var state_24073__$1 = state_24073;var statearr_24086_24105 = state_24073__$1;(statearr_24086_24105[(2)] = inst_24067);
(statearr_24086_24105[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (10)))
{var inst_24065 = (state_24073[(2)]);var state_24073__$1 = state_24073;var statearr_24087_24106 = state_24073__$1;(statearr_24087_24106[(2)] = inst_24065);
(statearr_24087_24106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24074 === (8)))
{var inst_24052 = (state_24073[(7)]);var inst_24045 = (state_24073[(10)]);var inst_24053 = (state_24073[(8)]);var inst_24054 = (state_24073[(9)]);var inst_24057 = (function (){var c = inst_24054;var v = inst_24053;var vec__24050 = inst_24052;var cs = inst_24045;return ((function (c,v,vec__24050,cs,inst_24052,inst_24045,inst_24053,inst_24054,state_val_24074,c__15992__auto___24097,out){
return (function (p1__23990_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23990_SHARP_);
});
;})(c,v,vec__24050,cs,inst_24052,inst_24045,inst_24053,inst_24054,state_val_24074,c__15992__auto___24097,out))
})();var inst_24058 = cljs.core.filterv.call(null,inst_24057,inst_24045);var inst_24045__$1 = inst_24058;var state_24073__$1 = (function (){var statearr_24088 = state_24073;(statearr_24088[(10)] = inst_24045__$1);
return statearr_24088;
})();var statearr_24089_24107 = state_24073__$1;(statearr_24089_24107[(2)] = null);
(statearr_24089_24107[(1)] = (2));
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
});})(c__15992__auto___24097,out))
;return ((function (switch__15977__auto__,c__15992__auto___24097,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24093 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24093[(0)] = state_machine__15978__auto__);
(statearr_24093[(1)] = (1));
return statearr_24093;
});
var state_machine__15978__auto____1 = (function (state_24073){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24073);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24094){if((e24094 instanceof Object))
{var ex__15981__auto__ = e24094;var statearr_24095_24108 = state_24073;(statearr_24095_24108[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24109 = state_24073;
state_24073 = G__24109;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24073){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24097,out))
})();var state__15994__auto__ = (function (){var statearr_24096 = f__15993__auto__.call(null);(statearr_24096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24097);
return statearr_24096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24097,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24202 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24202,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24202,out){
return (function (state_24179){var state_val_24180 = (state_24179[(1)]);if((state_val_24180 === (7)))
{var inst_24161 = (state_24179[(7)]);var inst_24161__$1 = (state_24179[(2)]);var inst_24162 = (inst_24161__$1 == null);var inst_24163 = cljs.core.not.call(null,inst_24162);var state_24179__$1 = (function (){var statearr_24181 = state_24179;(statearr_24181[(7)] = inst_24161__$1);
return statearr_24181;
})();if(inst_24163)
{var statearr_24182_24203 = state_24179__$1;(statearr_24182_24203[(1)] = (8));
} else
{var statearr_24183_24204 = state_24179__$1;(statearr_24183_24204[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (1)))
{var inst_24156 = (0);var state_24179__$1 = (function (){var statearr_24184 = state_24179;(statearr_24184[(8)] = inst_24156);
return statearr_24184;
})();var statearr_24185_24205 = state_24179__$1;(statearr_24185_24205[(2)] = null);
(statearr_24185_24205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (4)))
{var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24179__$1,(7),ch);
} else
{if((state_val_24180 === (6)))
{var inst_24174 = (state_24179[(2)]);var state_24179__$1 = state_24179;var statearr_24186_24206 = state_24179__$1;(statearr_24186_24206[(2)] = inst_24174);
(statearr_24186_24206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (3)))
{var inst_24176 = (state_24179[(2)]);var inst_24177 = cljs.core.async.close_BANG_.call(null,out);var state_24179__$1 = (function (){var statearr_24187 = state_24179;(statearr_24187[(9)] = inst_24176);
return statearr_24187;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24179__$1,inst_24177);
} else
{if((state_val_24180 === (2)))
{var inst_24156 = (state_24179[(8)]);var inst_24158 = (inst_24156 < n);var state_24179__$1 = state_24179;if(cljs.core.truth_(inst_24158))
{var statearr_24188_24207 = state_24179__$1;(statearr_24188_24207[(1)] = (4));
} else
{var statearr_24189_24208 = state_24179__$1;(statearr_24189_24208[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (11)))
{var inst_24156 = (state_24179[(8)]);var inst_24166 = (state_24179[(2)]);var inst_24167 = (inst_24156 + (1));var inst_24156__$1 = inst_24167;var state_24179__$1 = (function (){var statearr_24190 = state_24179;(statearr_24190[(8)] = inst_24156__$1);
(statearr_24190[(10)] = inst_24166);
return statearr_24190;
})();var statearr_24191_24209 = state_24179__$1;(statearr_24191_24209[(2)] = null);
(statearr_24191_24209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (9)))
{var state_24179__$1 = state_24179;var statearr_24192_24210 = state_24179__$1;(statearr_24192_24210[(2)] = null);
(statearr_24192_24210[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (5)))
{var state_24179__$1 = state_24179;var statearr_24193_24211 = state_24179__$1;(statearr_24193_24211[(2)] = null);
(statearr_24193_24211[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (10)))
{var inst_24171 = (state_24179[(2)]);var state_24179__$1 = state_24179;var statearr_24194_24212 = state_24179__$1;(statearr_24194_24212[(2)] = inst_24171);
(statearr_24194_24212[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24180 === (8)))
{var inst_24161 = (state_24179[(7)]);var state_24179__$1 = state_24179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24179__$1,(11),out,inst_24161);
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
});})(c__15992__auto___24202,out))
;return ((function (switch__15977__auto__,c__15992__auto___24202,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24198 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24198[(0)] = state_machine__15978__auto__);
(statearr_24198[(1)] = (1));
return statearr_24198;
});
var state_machine__15978__auto____1 = (function (state_24179){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24179);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24199){if((e24199 instanceof Object))
{var ex__15981__auto__ = e24199;var statearr_24200_24213 = state_24179;(statearr_24200_24213[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24214 = state_24179;
state_24179 = G__24214;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24179){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24202,out))
})();var state__15994__auto__ = (function (){var statearr_24201 = f__15993__auto__.call(null);(statearr_24201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24202);
return statearr_24201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24202,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24222 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24222 = (function (ch,f,map_LT_,meta24223){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24223 = meta24223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24222.cljs$lang$type = true;
cljs.core.async.t24222.cljs$lang$ctorStr = "cljs.core.async/t24222";
cljs.core.async.t24222.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t24222");
});
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24225 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24225 = (function (fn1,_,meta24223,ch,f,map_LT_,meta24226){
this.fn1 = fn1;
this._ = _;
this.meta24223 = meta24223;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24226 = meta24226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24225.cljs$lang$type = true;
cljs.core.async.t24225.cljs$lang$ctorStr = "cljs.core.async/t24225";
cljs.core.async.t24225.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t24225");
});})(___$1))
;
cljs.core.async.t24225.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24215_SHARP_){return f1.call(null,(((p1__24215_SHARP_ == null))?null:self__.f.call(null,p1__24215_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24227){var self__ = this;
var _24227__$1 = this;return self__.meta24226;
});})(___$1))
;
cljs.core.async.t24225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24227,meta24226__$1){var self__ = this;
var _24227__$1 = this;return (new cljs.core.async.t24225(self__.fn1,self__._,self__.meta24223,self__.ch,self__.f,self__.map_LT_,meta24226__$1));
});})(___$1))
;
cljs.core.async.__GT_t24225 = ((function (___$1){
return (function __GT_t24225(fn1__$1,___$2,meta24223__$1,ch__$2,f__$2,map_LT___$2,meta24226){return (new cljs.core.async.t24225(fn1__$1,___$2,meta24223__$1,ch__$2,f__$2,map_LT___$2,meta24226));
});})(___$1))
;
}
return (new cljs.core.async.t24225(fn1,___$1,self__.meta24223,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__12536__auto__ = ret;if(cljs.core.truth_(and__12536__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__12536__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24224){var self__ = this;
var _24224__$1 = this;return self__.meta24223;
});
cljs.core.async.t24222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24224,meta24223__$1){var self__ = this;
var _24224__$1 = this;return (new cljs.core.async.t24222(self__.ch,self__.f,self__.map_LT_,meta24223__$1));
});
cljs.core.async.__GT_t24222 = (function __GT_t24222(ch__$1,f__$1,map_LT___$1,meta24223){return (new cljs.core.async.t24222(ch__$1,f__$1,map_LT___$1,meta24223));
});
}
return (new cljs.core.async.t24222(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24231 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24231 = (function (ch,f,map_GT_,meta24232){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24232 = meta24232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24231.cljs$lang$type = true;
cljs.core.async.t24231.cljs$lang$ctorStr = "cljs.core.async/t24231";
cljs.core.async.t24231.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t24231");
});
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24233){var self__ = this;
var _24233__$1 = this;return self__.meta24232;
});
cljs.core.async.t24231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24233,meta24232__$1){var self__ = this;
var _24233__$1 = this;return (new cljs.core.async.t24231(self__.ch,self__.f,self__.map_GT_,meta24232__$1));
});
cljs.core.async.__GT_t24231 = (function __GT_t24231(ch__$1,f__$1,map_GT___$1,meta24232){return (new cljs.core.async.t24231(ch__$1,f__$1,map_GT___$1,meta24232));
});
}
return (new cljs.core.async.t24231(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24237 = (function (ch,p,filter_GT_,meta24238){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24238 = meta24238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24237.cljs$lang$type = true;
cljs.core.async.t24237.cljs$lang$ctorStr = "cljs.core.async/t24237";
cljs.core.async.t24237.cljs$lang$ctorPrWriter = (function (this__13125__auto__,writer__13126__auto__,opt__13127__auto__){return cljs.core._write.call(null,writer__13126__auto__,"cljs.core.async/t24237");
});
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24239){var self__ = this;
var _24239__$1 = this;return self__.meta24238;
});
cljs.core.async.t24237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24239,meta24238__$1){var self__ = this;
var _24239__$1 = this;return (new cljs.core.async.t24237(self__.ch,self__.p,self__.filter_GT_,meta24238__$1));
});
cljs.core.async.__GT_t24237 = (function __GT_t24237(ch__$1,p__$1,filter_GT___$1,meta24238){return (new cljs.core.async.t24237(ch__$1,p__$1,filter_GT___$1,meta24238));
});
}
return (new cljs.core.async.t24237(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24322,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24322,out){
return (function (state_24301){var state_val_24302 = (state_24301[(1)]);if((state_val_24302 === (7)))
{var inst_24297 = (state_24301[(2)]);var state_24301__$1 = state_24301;var statearr_24303_24323 = state_24301__$1;(statearr_24303_24323[(2)] = inst_24297);
(statearr_24303_24323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (1)))
{var state_24301__$1 = state_24301;var statearr_24304_24324 = state_24301__$1;(statearr_24304_24324[(2)] = null);
(statearr_24304_24324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (4)))
{var inst_24283 = (state_24301[(7)]);var inst_24283__$1 = (state_24301[(2)]);var inst_24284 = (inst_24283__$1 == null);var state_24301__$1 = (function (){var statearr_24305 = state_24301;(statearr_24305[(7)] = inst_24283__$1);
return statearr_24305;
})();if(cljs.core.truth_(inst_24284))
{var statearr_24306_24325 = state_24301__$1;(statearr_24306_24325[(1)] = (5));
} else
{var statearr_24307_24326 = state_24301__$1;(statearr_24307_24326[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (6)))
{var inst_24283 = (state_24301[(7)]);var inst_24288 = p.call(null,inst_24283);var state_24301__$1 = state_24301;if(cljs.core.truth_(inst_24288))
{var statearr_24308_24327 = state_24301__$1;(statearr_24308_24327[(1)] = (8));
} else
{var statearr_24309_24328 = state_24301__$1;(statearr_24309_24328[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (3)))
{var inst_24299 = (state_24301[(2)]);var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24301__$1,inst_24299);
} else
{if((state_val_24302 === (2)))
{var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24301__$1,(4),ch);
} else
{if((state_val_24302 === (11)))
{var inst_24291 = (state_24301[(2)]);var state_24301__$1 = state_24301;var statearr_24310_24329 = state_24301__$1;(statearr_24310_24329[(2)] = inst_24291);
(statearr_24310_24329[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (9)))
{var state_24301__$1 = state_24301;var statearr_24311_24330 = state_24301__$1;(statearr_24311_24330[(2)] = null);
(statearr_24311_24330[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (5)))
{var inst_24286 = cljs.core.async.close_BANG_.call(null,out);var state_24301__$1 = state_24301;var statearr_24312_24331 = state_24301__$1;(statearr_24312_24331[(2)] = inst_24286);
(statearr_24312_24331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (10)))
{var inst_24294 = (state_24301[(2)]);var state_24301__$1 = (function (){var statearr_24313 = state_24301;(statearr_24313[(8)] = inst_24294);
return statearr_24313;
})();var statearr_24314_24332 = state_24301__$1;(statearr_24314_24332[(2)] = null);
(statearr_24314_24332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24302 === (8)))
{var inst_24283 = (state_24301[(7)]);var state_24301__$1 = state_24301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24301__$1,(11),out,inst_24283);
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
});})(c__15992__auto___24322,out))
;return ((function (switch__15977__auto__,c__15992__auto___24322,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24318 = [null,null,null,null,null,null,null,null,null];(statearr_24318[(0)] = state_machine__15978__auto__);
(statearr_24318[(1)] = (1));
return statearr_24318;
});
var state_machine__15978__auto____1 = (function (state_24301){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24301);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24319){if((e24319 instanceof Object))
{var ex__15981__auto__ = e24319;var statearr_24320_24333 = state_24301;(statearr_24320_24333[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24334 = state_24301;
state_24301 = G__24334;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24301){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24322,out))
})();var state__15994__auto__ = (function (){var statearr_24321 = f__15993__auto__.call(null);(statearr_24321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24322);
return statearr_24321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24322,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto__){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto__){
return (function (state_24500){var state_val_24501 = (state_24500[(1)]);if((state_val_24501 === (7)))
{var inst_24496 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24502_24543 = state_24500__$1;(statearr_24502_24543[(2)] = inst_24496);
(statearr_24502_24543[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (20)))
{var inst_24466 = (state_24500[(7)]);var inst_24477 = (state_24500[(2)]);var inst_24478 = cljs.core.next.call(null,inst_24466);var inst_24452 = inst_24478;var inst_24453 = null;var inst_24454 = (0);var inst_24455 = (0);var state_24500__$1 = (function (){var statearr_24503 = state_24500;(statearr_24503[(8)] = inst_24454);
(statearr_24503[(9)] = inst_24477);
(statearr_24503[(10)] = inst_24455);
(statearr_24503[(11)] = inst_24452);
(statearr_24503[(12)] = inst_24453);
return statearr_24503;
})();var statearr_24504_24544 = state_24500__$1;(statearr_24504_24544[(2)] = null);
(statearr_24504_24544[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (1)))
{var state_24500__$1 = state_24500;var statearr_24505_24545 = state_24500__$1;(statearr_24505_24545[(2)] = null);
(statearr_24505_24545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (4)))
{var inst_24441 = (state_24500[(13)]);var inst_24441__$1 = (state_24500[(2)]);var inst_24442 = (inst_24441__$1 == null);var state_24500__$1 = (function (){var statearr_24506 = state_24500;(statearr_24506[(13)] = inst_24441__$1);
return statearr_24506;
})();if(cljs.core.truth_(inst_24442))
{var statearr_24507_24546 = state_24500__$1;(statearr_24507_24546[(1)] = (5));
} else
{var statearr_24508_24547 = state_24500__$1;(statearr_24508_24547[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (15)))
{var state_24500__$1 = state_24500;var statearr_24512_24548 = state_24500__$1;(statearr_24512_24548[(2)] = null);
(statearr_24512_24548[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (21)))
{var state_24500__$1 = state_24500;var statearr_24513_24549 = state_24500__$1;(statearr_24513_24549[(2)] = null);
(statearr_24513_24549[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (13)))
{var inst_24454 = (state_24500[(8)]);var inst_24455 = (state_24500[(10)]);var inst_24452 = (state_24500[(11)]);var inst_24453 = (state_24500[(12)]);var inst_24462 = (state_24500[(2)]);var inst_24463 = (inst_24455 + (1));var tmp24509 = inst_24454;var tmp24510 = inst_24452;var tmp24511 = inst_24453;var inst_24452__$1 = tmp24510;var inst_24453__$1 = tmp24511;var inst_24454__$1 = tmp24509;var inst_24455__$1 = inst_24463;var state_24500__$1 = (function (){var statearr_24514 = state_24500;(statearr_24514[(14)] = inst_24462);
(statearr_24514[(8)] = inst_24454__$1);
(statearr_24514[(10)] = inst_24455__$1);
(statearr_24514[(11)] = inst_24452__$1);
(statearr_24514[(12)] = inst_24453__$1);
return statearr_24514;
})();var statearr_24515_24550 = state_24500__$1;(statearr_24515_24550[(2)] = null);
(statearr_24515_24550[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (22)))
{var state_24500__$1 = state_24500;var statearr_24516_24551 = state_24500__$1;(statearr_24516_24551[(2)] = null);
(statearr_24516_24551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (6)))
{var inst_24441 = (state_24500[(13)]);var inst_24450 = f.call(null,inst_24441);var inst_24451 = cljs.core.seq.call(null,inst_24450);var inst_24452 = inst_24451;var inst_24453 = null;var inst_24454 = (0);var inst_24455 = (0);var state_24500__$1 = (function (){var statearr_24517 = state_24500;(statearr_24517[(8)] = inst_24454);
(statearr_24517[(10)] = inst_24455);
(statearr_24517[(11)] = inst_24452);
(statearr_24517[(12)] = inst_24453);
return statearr_24517;
})();var statearr_24518_24552 = state_24500__$1;(statearr_24518_24552[(2)] = null);
(statearr_24518_24552[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (17)))
{var inst_24466 = (state_24500[(7)]);var inst_24470 = cljs.core.chunk_first.call(null,inst_24466);var inst_24471 = cljs.core.chunk_rest.call(null,inst_24466);var inst_24472 = cljs.core.count.call(null,inst_24470);var inst_24452 = inst_24471;var inst_24453 = inst_24470;var inst_24454 = inst_24472;var inst_24455 = (0);var state_24500__$1 = (function (){var statearr_24519 = state_24500;(statearr_24519[(8)] = inst_24454);
(statearr_24519[(10)] = inst_24455);
(statearr_24519[(11)] = inst_24452);
(statearr_24519[(12)] = inst_24453);
return statearr_24519;
})();var statearr_24520_24553 = state_24500__$1;(statearr_24520_24553[(2)] = null);
(statearr_24520_24553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (3)))
{var inst_24498 = (state_24500[(2)]);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24500__$1,inst_24498);
} else
{if((state_val_24501 === (12)))
{var inst_24486 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24521_24554 = state_24500__$1;(statearr_24521_24554[(2)] = inst_24486);
(statearr_24521_24554[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (2)))
{var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24500__$1,(4),in$);
} else
{if((state_val_24501 === (23)))
{var inst_24494 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24522_24555 = state_24500__$1;(statearr_24522_24555[(2)] = inst_24494);
(statearr_24522_24555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (19)))
{var inst_24481 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24523_24556 = state_24500__$1;(statearr_24523_24556[(2)] = inst_24481);
(statearr_24523_24556[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (11)))
{var inst_24466 = (state_24500[(7)]);var inst_24452 = (state_24500[(11)]);var inst_24466__$1 = cljs.core.seq.call(null,inst_24452);var state_24500__$1 = (function (){var statearr_24524 = state_24500;(statearr_24524[(7)] = inst_24466__$1);
return statearr_24524;
})();if(inst_24466__$1)
{var statearr_24525_24557 = state_24500__$1;(statearr_24525_24557[(1)] = (14));
} else
{var statearr_24526_24558 = state_24500__$1;(statearr_24526_24558[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (9)))
{var inst_24488 = (state_24500[(2)]);var inst_24489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_24500__$1 = (function (){var statearr_24527 = state_24500;(statearr_24527[(15)] = inst_24488);
return statearr_24527;
})();if(cljs.core.truth_(inst_24489))
{var statearr_24528_24559 = state_24500__$1;(statearr_24528_24559[(1)] = (21));
} else
{var statearr_24529_24560 = state_24500__$1;(statearr_24529_24560[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (5)))
{var inst_24444 = cljs.core.async.close_BANG_.call(null,out);var state_24500__$1 = state_24500;var statearr_24530_24561 = state_24500__$1;(statearr_24530_24561[(2)] = inst_24444);
(statearr_24530_24561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (14)))
{var inst_24466 = (state_24500[(7)]);var inst_24468 = cljs.core.chunked_seq_QMARK_.call(null,inst_24466);var state_24500__$1 = state_24500;if(inst_24468)
{var statearr_24531_24562 = state_24500__$1;(statearr_24531_24562[(1)] = (17));
} else
{var statearr_24532_24563 = state_24500__$1;(statearr_24532_24563[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (16)))
{var inst_24484 = (state_24500[(2)]);var state_24500__$1 = state_24500;var statearr_24533_24564 = state_24500__$1;(statearr_24533_24564[(2)] = inst_24484);
(statearr_24533_24564[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24501 === (10)))
{var inst_24455 = (state_24500[(10)]);var inst_24453 = (state_24500[(12)]);var inst_24460 = cljs.core._nth.call(null,inst_24453,inst_24455);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24500__$1,(13),out,inst_24460);
} else
{if((state_val_24501 === (18)))
{var inst_24466 = (state_24500[(7)]);var inst_24475 = cljs.core.first.call(null,inst_24466);var state_24500__$1 = state_24500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24500__$1,(20),out,inst_24475);
} else
{if((state_val_24501 === (8)))
{var inst_24454 = (state_24500[(8)]);var inst_24455 = (state_24500[(10)]);var inst_24457 = (inst_24455 < inst_24454);var inst_24458 = inst_24457;var state_24500__$1 = state_24500;if(cljs.core.truth_(inst_24458))
{var statearr_24534_24565 = state_24500__$1;(statearr_24534_24565[(1)] = (10));
} else
{var statearr_24535_24566 = state_24500__$1;(statearr_24535_24566[(1)] = (11));
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
});})(c__15992__auto__))
;return ((function (switch__15977__auto__,c__15992__auto__){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24539[(0)] = state_machine__15978__auto__);
(statearr_24539[(1)] = (1));
return statearr_24539;
});
var state_machine__15978__auto____1 = (function (state_24500){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24500);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24540){if((e24540 instanceof Object))
{var ex__15981__auto__ = e24540;var statearr_24541_24567 = state_24500;(statearr_24541_24567[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24540;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24568 = state_24500;
state_24500 = G__24568;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24500){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto__))
})();var state__15994__auto__ = (function (){var statearr_24542 = f__15993__auto__.call(null);(statearr_24542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto__);
return statearr_24542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto__))
);
return c__15992__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24665,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24665,out){
return (function (state_24640){var state_val_24641 = (state_24640[(1)]);if((state_val_24641 === (7)))
{var inst_24635 = (state_24640[(2)]);var state_24640__$1 = state_24640;var statearr_24642_24666 = state_24640__$1;(statearr_24642_24666[(2)] = inst_24635);
(statearr_24642_24666[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (1)))
{var inst_24617 = null;var state_24640__$1 = (function (){var statearr_24643 = state_24640;(statearr_24643[(7)] = inst_24617);
return statearr_24643;
})();var statearr_24644_24667 = state_24640__$1;(statearr_24644_24667[(2)] = null);
(statearr_24644_24667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (4)))
{var inst_24620 = (state_24640[(8)]);var inst_24620__$1 = (state_24640[(2)]);var inst_24621 = (inst_24620__$1 == null);var inst_24622 = cljs.core.not.call(null,inst_24621);var state_24640__$1 = (function (){var statearr_24645 = state_24640;(statearr_24645[(8)] = inst_24620__$1);
return statearr_24645;
})();if(inst_24622)
{var statearr_24646_24668 = state_24640__$1;(statearr_24646_24668[(1)] = (5));
} else
{var statearr_24647_24669 = state_24640__$1;(statearr_24647_24669[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (6)))
{var state_24640__$1 = state_24640;var statearr_24648_24670 = state_24640__$1;(statearr_24648_24670[(2)] = null);
(statearr_24648_24670[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (3)))
{var inst_24637 = (state_24640[(2)]);var inst_24638 = cljs.core.async.close_BANG_.call(null,out);var state_24640__$1 = (function (){var statearr_24649 = state_24640;(statearr_24649[(9)] = inst_24637);
return statearr_24649;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24640__$1,inst_24638);
} else
{if((state_val_24641 === (2)))
{var state_24640__$1 = state_24640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24640__$1,(4),ch);
} else
{if((state_val_24641 === (11)))
{var inst_24620 = (state_24640[(8)]);var inst_24629 = (state_24640[(2)]);var inst_24617 = inst_24620;var state_24640__$1 = (function (){var statearr_24650 = state_24640;(statearr_24650[(7)] = inst_24617);
(statearr_24650[(10)] = inst_24629);
return statearr_24650;
})();var statearr_24651_24671 = state_24640__$1;(statearr_24651_24671[(2)] = null);
(statearr_24651_24671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (9)))
{var inst_24620 = (state_24640[(8)]);var state_24640__$1 = state_24640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24640__$1,(11),out,inst_24620);
} else
{if((state_val_24641 === (5)))
{var inst_24617 = (state_24640[(7)]);var inst_24620 = (state_24640[(8)]);var inst_24624 = cljs.core._EQ_.call(null,inst_24620,inst_24617);var state_24640__$1 = state_24640;if(inst_24624)
{var statearr_24653_24672 = state_24640__$1;(statearr_24653_24672[(1)] = (8));
} else
{var statearr_24654_24673 = state_24640__$1;(statearr_24654_24673[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (10)))
{var inst_24632 = (state_24640[(2)]);var state_24640__$1 = state_24640;var statearr_24655_24674 = state_24640__$1;(statearr_24655_24674[(2)] = inst_24632);
(statearr_24655_24674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24641 === (8)))
{var inst_24617 = (state_24640[(7)]);var tmp24652 = inst_24617;var inst_24617__$1 = tmp24652;var state_24640__$1 = (function (){var statearr_24656 = state_24640;(statearr_24656[(7)] = inst_24617__$1);
return statearr_24656;
})();var statearr_24657_24675 = state_24640__$1;(statearr_24657_24675[(2)] = null);
(statearr_24657_24675[(1)] = (2));
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
});})(c__15992__auto___24665,out))
;return ((function (switch__15977__auto__,c__15992__auto___24665,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24661 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24661[(0)] = state_machine__15978__auto__);
(statearr_24661[(1)] = (1));
return statearr_24661;
});
var state_machine__15978__auto____1 = (function (state_24640){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24640);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24662){if((e24662 instanceof Object))
{var ex__15981__auto__ = e24662;var statearr_24663_24676 = state_24640;(statearr_24663_24676[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24662;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24677 = state_24640;
state_24640 = G__24677;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24640){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24665,out))
})();var state__15994__auto__ = (function (){var statearr_24664 = f__15993__auto__.call(null);(statearr_24664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24665);
return statearr_24664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24665,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24812,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24812,out){
return (function (state_24782){var state_val_24783 = (state_24782[(1)]);if((state_val_24783 === (7)))
{var inst_24778 = (state_24782[(2)]);var state_24782__$1 = state_24782;var statearr_24784_24813 = state_24782__$1;(statearr_24784_24813[(2)] = inst_24778);
(statearr_24784_24813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (1)))
{var inst_24745 = (new Array(n));var inst_24746 = inst_24745;var inst_24747 = (0);var state_24782__$1 = (function (){var statearr_24785 = state_24782;(statearr_24785[(7)] = inst_24747);
(statearr_24785[(8)] = inst_24746);
return statearr_24785;
})();var statearr_24786_24814 = state_24782__$1;(statearr_24786_24814[(2)] = null);
(statearr_24786_24814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (4)))
{var inst_24750 = (state_24782[(9)]);var inst_24750__$1 = (state_24782[(2)]);var inst_24751 = (inst_24750__$1 == null);var inst_24752 = cljs.core.not.call(null,inst_24751);var state_24782__$1 = (function (){var statearr_24787 = state_24782;(statearr_24787[(9)] = inst_24750__$1);
return statearr_24787;
})();if(inst_24752)
{var statearr_24788_24815 = state_24782__$1;(statearr_24788_24815[(1)] = (5));
} else
{var statearr_24789_24816 = state_24782__$1;(statearr_24789_24816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (15)))
{var inst_24772 = (state_24782[(2)]);var state_24782__$1 = state_24782;var statearr_24790_24817 = state_24782__$1;(statearr_24790_24817[(2)] = inst_24772);
(statearr_24790_24817[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (13)))
{var state_24782__$1 = state_24782;var statearr_24791_24818 = state_24782__$1;(statearr_24791_24818[(2)] = null);
(statearr_24791_24818[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (6)))
{var inst_24747 = (state_24782[(7)]);var inst_24768 = (inst_24747 > (0));var state_24782__$1 = state_24782;if(cljs.core.truth_(inst_24768))
{var statearr_24792_24819 = state_24782__$1;(statearr_24792_24819[(1)] = (12));
} else
{var statearr_24793_24820 = state_24782__$1;(statearr_24793_24820[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (3)))
{var inst_24780 = (state_24782[(2)]);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24782__$1,inst_24780);
} else
{if((state_val_24783 === (12)))
{var inst_24746 = (state_24782[(8)]);var inst_24770 = cljs.core.vec.call(null,inst_24746);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24782__$1,(15),out,inst_24770);
} else
{if((state_val_24783 === (2)))
{var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24782__$1,(4),ch);
} else
{if((state_val_24783 === (11)))
{var inst_24762 = (state_24782[(2)]);var inst_24763 = (new Array(n));var inst_24746 = inst_24763;var inst_24747 = (0);var state_24782__$1 = (function (){var statearr_24794 = state_24782;(statearr_24794[(7)] = inst_24747);
(statearr_24794[(8)] = inst_24746);
(statearr_24794[(10)] = inst_24762);
return statearr_24794;
})();var statearr_24795_24821 = state_24782__$1;(statearr_24795_24821[(2)] = null);
(statearr_24795_24821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (9)))
{var inst_24746 = (state_24782[(8)]);var inst_24760 = cljs.core.vec.call(null,inst_24746);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24782__$1,(11),out,inst_24760);
} else
{if((state_val_24783 === (5)))
{var inst_24747 = (state_24782[(7)]);var inst_24746 = (state_24782[(8)]);var inst_24755 = (state_24782[(11)]);var inst_24750 = (state_24782[(9)]);var inst_24754 = (inst_24746[inst_24747] = inst_24750);var inst_24755__$1 = (inst_24747 + (1));var inst_24756 = (inst_24755__$1 < n);var state_24782__$1 = (function (){var statearr_24796 = state_24782;(statearr_24796[(11)] = inst_24755__$1);
(statearr_24796[(12)] = inst_24754);
return statearr_24796;
})();if(cljs.core.truth_(inst_24756))
{var statearr_24797_24822 = state_24782__$1;(statearr_24797_24822[(1)] = (8));
} else
{var statearr_24798_24823 = state_24782__$1;(statearr_24798_24823[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (14)))
{var inst_24775 = (state_24782[(2)]);var inst_24776 = cljs.core.async.close_BANG_.call(null,out);var state_24782__$1 = (function (){var statearr_24800 = state_24782;(statearr_24800[(13)] = inst_24775);
return statearr_24800;
})();var statearr_24801_24824 = state_24782__$1;(statearr_24801_24824[(2)] = inst_24776);
(statearr_24801_24824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (10)))
{var inst_24766 = (state_24782[(2)]);var state_24782__$1 = state_24782;var statearr_24802_24825 = state_24782__$1;(statearr_24802_24825[(2)] = inst_24766);
(statearr_24802_24825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24783 === (8)))
{var inst_24746 = (state_24782[(8)]);var inst_24755 = (state_24782[(11)]);var tmp24799 = inst_24746;var inst_24746__$1 = tmp24799;var inst_24747 = inst_24755;var state_24782__$1 = (function (){var statearr_24803 = state_24782;(statearr_24803[(7)] = inst_24747);
(statearr_24803[(8)] = inst_24746__$1);
return statearr_24803;
})();var statearr_24804_24826 = state_24782__$1;(statearr_24804_24826[(2)] = null);
(statearr_24804_24826[(1)] = (2));
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
});})(c__15992__auto___24812,out))
;return ((function (switch__15977__auto__,c__15992__auto___24812,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24808[(0)] = state_machine__15978__auto__);
(statearr_24808[(1)] = (1));
return statearr_24808;
});
var state_machine__15978__auto____1 = (function (state_24782){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24782);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object))
{var ex__15981__auto__ = e24809;var statearr_24810_24827 = state_24782;(statearr_24810_24827[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24828 = state_24782;
state_24782 = G__24828;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24782){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24812,out))
})();var state__15994__auto__ = (function (){var statearr_24811 = f__15993__auto__.call(null);(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24812);
return statearr_24811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24812,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15992__auto___24971 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15992__auto___24971,out){
return (function (){var f__15993__auto__ = (function (){var switch__15977__auto__ = ((function (c__15992__auto___24971,out){
return (function (state_24941){var state_val_24942 = (state_24941[(1)]);if((state_val_24942 === (7)))
{var inst_24937 = (state_24941[(2)]);var state_24941__$1 = state_24941;var statearr_24943_24972 = state_24941__$1;(statearr_24943_24972[(2)] = inst_24937);
(statearr_24943_24972[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (1)))
{var inst_24900 = [];var inst_24901 = inst_24900;var inst_24902 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_24941__$1 = (function (){var statearr_24944 = state_24941;(statearr_24944[(7)] = inst_24901);
(statearr_24944[(8)] = inst_24902);
return statearr_24944;
})();var statearr_24945_24973 = state_24941__$1;(statearr_24945_24973[(2)] = null);
(statearr_24945_24973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (4)))
{var inst_24905 = (state_24941[(9)]);var inst_24905__$1 = (state_24941[(2)]);var inst_24906 = (inst_24905__$1 == null);var inst_24907 = cljs.core.not.call(null,inst_24906);var state_24941__$1 = (function (){var statearr_24946 = state_24941;(statearr_24946[(9)] = inst_24905__$1);
return statearr_24946;
})();if(inst_24907)
{var statearr_24947_24974 = state_24941__$1;(statearr_24947_24974[(1)] = (5));
} else
{var statearr_24948_24975 = state_24941__$1;(statearr_24948_24975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (15)))
{var inst_24931 = (state_24941[(2)]);var state_24941__$1 = state_24941;var statearr_24949_24976 = state_24941__$1;(statearr_24949_24976[(2)] = inst_24931);
(statearr_24949_24976[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (13)))
{var state_24941__$1 = state_24941;var statearr_24950_24977 = state_24941__$1;(statearr_24950_24977[(2)] = null);
(statearr_24950_24977[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (6)))
{var inst_24901 = (state_24941[(7)]);var inst_24926 = inst_24901.length;var inst_24927 = (inst_24926 > (0));var state_24941__$1 = state_24941;if(cljs.core.truth_(inst_24927))
{var statearr_24951_24978 = state_24941__$1;(statearr_24951_24978[(1)] = (12));
} else
{var statearr_24952_24979 = state_24941__$1;(statearr_24952_24979[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (3)))
{var inst_24939 = (state_24941[(2)]);var state_24941__$1 = state_24941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else
{if((state_val_24942 === (12)))
{var inst_24901 = (state_24941[(7)]);var inst_24929 = cljs.core.vec.call(null,inst_24901);var state_24941__$1 = state_24941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(15),out,inst_24929);
} else
{if((state_val_24942 === (2)))
{var state_24941__$1 = state_24941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),ch);
} else
{if((state_val_24942 === (11)))
{var inst_24909 = (state_24941[(10)]);var inst_24905 = (state_24941[(9)]);var inst_24919 = (state_24941[(2)]);var inst_24920 = [];var inst_24921 = inst_24920.push(inst_24905);var inst_24901 = inst_24920;var inst_24902 = inst_24909;var state_24941__$1 = (function (){var statearr_24953 = state_24941;(statearr_24953[(7)] = inst_24901);
(statearr_24953[(11)] = inst_24919);
(statearr_24953[(12)] = inst_24921);
(statearr_24953[(8)] = inst_24902);
return statearr_24953;
})();var statearr_24954_24980 = state_24941__$1;(statearr_24954_24980[(2)] = null);
(statearr_24954_24980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (9)))
{var inst_24901 = (state_24941[(7)]);var inst_24917 = cljs.core.vec.call(null,inst_24901);var state_24941__$1 = state_24941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(11),out,inst_24917);
} else
{if((state_val_24942 === (5)))
{var inst_24909 = (state_24941[(10)]);var inst_24905 = (state_24941[(9)]);var inst_24902 = (state_24941[(8)]);var inst_24909__$1 = f.call(null,inst_24905);var inst_24910 = cljs.core._EQ_.call(null,inst_24909__$1,inst_24902);var inst_24911 = cljs.core.keyword_identical_QMARK_.call(null,inst_24902,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_24912 = (inst_24910) || (inst_24911);var state_24941__$1 = (function (){var statearr_24955 = state_24941;(statearr_24955[(10)] = inst_24909__$1);
return statearr_24955;
})();if(cljs.core.truth_(inst_24912))
{var statearr_24956_24981 = state_24941__$1;(statearr_24956_24981[(1)] = (8));
} else
{var statearr_24957_24982 = state_24941__$1;(statearr_24957_24982[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (14)))
{var inst_24934 = (state_24941[(2)]);var inst_24935 = cljs.core.async.close_BANG_.call(null,out);var state_24941__$1 = (function (){var statearr_24959 = state_24941;(statearr_24959[(13)] = inst_24934);
return statearr_24959;
})();var statearr_24960_24983 = state_24941__$1;(statearr_24960_24983[(2)] = inst_24935);
(statearr_24960_24983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (10)))
{var inst_24924 = (state_24941[(2)]);var state_24941__$1 = state_24941;var statearr_24961_24984 = state_24941__$1;(statearr_24961_24984[(2)] = inst_24924);
(statearr_24961_24984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24942 === (8)))
{var inst_24909 = (state_24941[(10)]);var inst_24905 = (state_24941[(9)]);var inst_24901 = (state_24941[(7)]);var inst_24914 = inst_24901.push(inst_24905);var tmp24958 = inst_24901;var inst_24901__$1 = tmp24958;var inst_24902 = inst_24909;var state_24941__$1 = (function (){var statearr_24962 = state_24941;(statearr_24962[(7)] = inst_24901__$1);
(statearr_24962[(14)] = inst_24914);
(statearr_24962[(8)] = inst_24902);
return statearr_24962;
})();var statearr_24963_24985 = state_24941__$1;(statearr_24963_24985[(2)] = null);
(statearr_24963_24985[(1)] = (2));
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
});})(c__15992__auto___24971,out))
;return ((function (switch__15977__auto__,c__15992__auto___24971,out){
return (function() {
var state_machine__15978__auto__ = null;
var state_machine__15978__auto____0 = (function (){var statearr_24967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24967[(0)] = state_machine__15978__auto__);
(statearr_24967[(1)] = (1));
return statearr_24967;
});
var state_machine__15978__auto____1 = (function (state_24941){while(true){
var ret_value__15979__auto__ = (function (){try{while(true){
var result__15980__auto__ = switch__15977__auto__.call(null,state_24941);if(cljs.core.keyword_identical_QMARK_.call(null,result__15980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15980__auto__;
}
break;
}
}catch (e24968){if((e24968 instanceof Object))
{var ex__15981__auto__ = e24968;var statearr_24969_24986 = state_24941;(statearr_24969_24986[(5)] = ex__15981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24987 = state_24941;
state_24941 = G__24987;
continue;
}
} else
{return ret_value__15979__auto__;
}
break;
}
});
state_machine__15978__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return state_machine__15978__auto____0.call(this);
case 1:
return state_machine__15978__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15978__auto____0;
state_machine__15978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15978__auto____1;
return state_machine__15978__auto__;
})()
;})(switch__15977__auto__,c__15992__auto___24971,out))
})();var state__15994__auto__ = (function (){var statearr_24970 = f__15993__auto__.call(null);(statearr_24970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15992__auto___24971);
return statearr_24970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15994__auto__);
});})(c__15992__auto___24971,out))
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