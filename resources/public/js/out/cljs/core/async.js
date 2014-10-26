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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26401 = (function (f,fn_handler,meta26402){
this.f = f;
this.fn_handler = fn_handler;
this.meta26402 = meta26402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26401.cljs$lang$type = true;
cljs.core.async.t26401.cljs$lang$ctorStr = "cljs.core.async/t26401";
cljs.core.async.t26401.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t26401");
});
cljs.core.async.t26401.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26403){var self__ = this;
var _26403__$1 = this;return self__.meta26402;
});
cljs.core.async.t26401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26403,meta26402__$1){var self__ = this;
var _26403__$1 = this;return (new cljs.core.async.t26401(self__.f,self__.fn_handler,meta26402__$1));
});
cljs.core.async.__GT_t26401 = (function __GT_t26401(f__$1,fn_handler__$1,meta26402){return (new cljs.core.async.t26401(f__$1,fn_handler__$1,meta26402));
});
}
return (new cljs.core.async.t26401(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26405 = buff;if(G__26405)
{var bit__13210__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13210__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__26405.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26405.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26405);
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
{var val_26406 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26406);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_26406,ret){
return (function (){return fn1.call(null,val_26406);
});})(val_26406,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13416__auto___26407 = n;var x_26408 = (0);while(true){
if((x_26408 < n__13416__auto___26407))
{(a[x_26408] = (0));
{
var G__26409 = (x_26408 + (1));
x_26408 = G__26409;
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
var G__26410 = (i + (1));
i = G__26410;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26414 = (function (flag,alt_flag,meta26415){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26415 = meta26415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26414.cljs$lang$type = true;
cljs.core.async.t26414.cljs$lang$ctorStr = "cljs.core.async/t26414";
cljs.core.async.t26414.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t26414");
});})(flag))
;
cljs.core.async.t26414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26416){var self__ = this;
var _26416__$1 = this;return self__.meta26415;
});})(flag))
;
cljs.core.async.t26414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26416,meta26415__$1){var self__ = this;
var _26416__$1 = this;return (new cljs.core.async.t26414(self__.flag,self__.alt_flag,meta26415__$1));
});})(flag))
;
cljs.core.async.__GT_t26414 = ((function (flag){
return (function __GT_t26414(flag__$1,alt_flag__$1,meta26415){return (new cljs.core.async.t26414(flag__$1,alt_flag__$1,meta26415));
});})(flag))
;
}
return (new cljs.core.async.t26414(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26420 = (function (cb,flag,alt_handler,meta26421){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26421 = meta26421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26420.cljs$lang$type = true;
cljs.core.async.t26420.cljs$lang$ctorStr = "cljs.core.async/t26420";
cljs.core.async.t26420.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t26420");
});
cljs.core.async.t26420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26422){var self__ = this;
var _26422__$1 = this;return self__.meta26421;
});
cljs.core.async.t26420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26422,meta26421__$1){var self__ = this;
var _26422__$1 = this;return (new cljs.core.async.t26420(self__.cb,self__.flag,self__.alt_handler,meta26421__$1));
});
cljs.core.async.__GT_t26420 = (function __GT_t26420(cb__$1,flag__$1,alt_handler__$1,meta26421){return (new cljs.core.async.t26420(cb__$1,flag__$1,alt_handler__$1,meta26421));
});
}
return (new cljs.core.async.t26420(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26423_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26423_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26424_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26424_SHARP_,port], null));
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
var G__26425 = (i + (1));
i = G__26425;
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
var alts_BANG___delegate = function (ports,p__26426){var map__26428 = p__26426;var map__26428__$1 = ((cljs.core.seq_QMARK_.call(null,map__26428))?cljs.core.apply.call(null,cljs.core.hash_map,map__26428):map__26428);var opts = map__26428__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26426 = null;if (arguments.length > 1) {
  p__26426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26426);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26429){
var ports = cljs.core.first(arglist__26429);
var p__26426 = cljs.core.rest(arglist__26429);
return alts_BANG___delegate(ports,p__26426);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15989__auto___26524 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___26524){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___26524){
return (function (state_26500){var state_val_26501 = (state_26500[(1)]);if((state_val_26501 === (7)))
{var inst_26496 = (state_26500[(2)]);var state_26500__$1 = state_26500;var statearr_26502_26525 = state_26500__$1;(statearr_26502_26525[(2)] = inst_26496);
(statearr_26502_26525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (1)))
{var state_26500__$1 = state_26500;var statearr_26503_26526 = state_26500__$1;(statearr_26503_26526[(2)] = null);
(statearr_26503_26526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (4)))
{var inst_26479 = (state_26500[(7)]);var inst_26479__$1 = (state_26500[(2)]);var inst_26480 = (inst_26479__$1 == null);var state_26500__$1 = (function (){var statearr_26504 = state_26500;(statearr_26504[(7)] = inst_26479__$1);
return statearr_26504;
})();if(cljs.core.truth_(inst_26480))
{var statearr_26505_26527 = state_26500__$1;(statearr_26505_26527[(1)] = (5));
} else
{var statearr_26506_26528 = state_26500__$1;(statearr_26506_26528[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (13)))
{var state_26500__$1 = state_26500;var statearr_26507_26529 = state_26500__$1;(statearr_26507_26529[(2)] = null);
(statearr_26507_26529[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (6)))
{var inst_26479 = (state_26500[(7)]);var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26500__$1,(11),to,inst_26479);
} else
{if((state_val_26501 === (3)))
{var inst_26498 = (state_26500[(2)]);var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26500__$1,inst_26498);
} else
{if((state_val_26501 === (12)))
{var state_26500__$1 = state_26500;var statearr_26508_26530 = state_26500__$1;(statearr_26508_26530[(2)] = null);
(statearr_26508_26530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (2)))
{var state_26500__$1 = state_26500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26500__$1,(4),from);
} else
{if((state_val_26501 === (11)))
{var inst_26489 = (state_26500[(2)]);var state_26500__$1 = state_26500;if(cljs.core.truth_(inst_26489))
{var statearr_26509_26531 = state_26500__$1;(statearr_26509_26531[(1)] = (12));
} else
{var statearr_26510_26532 = state_26500__$1;(statearr_26510_26532[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (9)))
{var state_26500__$1 = state_26500;var statearr_26511_26533 = state_26500__$1;(statearr_26511_26533[(2)] = null);
(statearr_26511_26533[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (5)))
{var state_26500__$1 = state_26500;if(cljs.core.truth_(close_QMARK_))
{var statearr_26512_26534 = state_26500__$1;(statearr_26512_26534[(1)] = (8));
} else
{var statearr_26513_26535 = state_26500__$1;(statearr_26513_26535[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (14)))
{var inst_26494 = (state_26500[(2)]);var state_26500__$1 = state_26500;var statearr_26514_26536 = state_26500__$1;(statearr_26514_26536[(2)] = inst_26494);
(statearr_26514_26536[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (10)))
{var inst_26486 = (state_26500[(2)]);var state_26500__$1 = state_26500;var statearr_26515_26537 = state_26500__$1;(statearr_26515_26537[(2)] = inst_26486);
(statearr_26515_26537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26501 === (8)))
{var inst_26483 = cljs.core.async.close_BANG_.call(null,to);var state_26500__$1 = state_26500;var statearr_26516_26538 = state_26500__$1;(statearr_26516_26538[(2)] = inst_26483);
(statearr_26516_26538[(1)] = (10));
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
});})(c__15989__auto___26524))
;return ((function (switch__15974__auto__,c__15989__auto___26524){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26520 = [null,null,null,null,null,null,null,null];(statearr_26520[(0)] = state_machine__15975__auto__);
(statearr_26520[(1)] = (1));
return statearr_26520;
});
var state_machine__15975__auto____1 = (function (state_26500){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26500);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26521){if((e26521 instanceof Object))
{var ex__15978__auto__ = e26521;var statearr_26522_26539 = state_26500;(statearr_26522_26539[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26521;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26540 = state_26500;
state_26500 = G__26540;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26500){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___26524))
})();var state__15991__auto__ = (function (){var statearr_26523 = f__15990__auto__.call(null);(statearr_26523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26524);
return statearr_26523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___26524))
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
return (function (p__26724){var vec__26725 = p__26724;var v = cljs.core.nth.call(null,vec__26725,(0),null);var p = cljs.core.nth.call(null,vec__26725,(1),null);var job = vec__26725;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15989__auto___26907 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results){
return (function (state_26730){var state_val_26731 = (state_26730[(1)]);if((state_val_26731 === (2)))
{var inst_26727 = (state_26730[(2)]);var inst_26728 = cljs.core.async.close_BANG_.call(null,res);var state_26730__$1 = (function (){var statearr_26732 = state_26730;(statearr_26732[(7)] = inst_26727);
return statearr_26732;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26730__$1,inst_26728);
} else
{if((state_val_26731 === (1)))
{var state_26730__$1 = state_26730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26730__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results))
;return ((function (switch__15974__auto__,c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26736 = [null,null,null,null,null,null,null,null];(statearr_26736[(0)] = state_machine__15975__auto__);
(statearr_26736[(1)] = (1));
return statearr_26736;
});
var state_machine__15975__auto____1 = (function (state_26730){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26730);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object))
{var ex__15978__auto__ = e26737;var statearr_26738_26908 = state_26730;(statearr_26738_26908[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26737;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26909 = state_26730;
state_26730 = G__26909;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26730){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results))
})();var state__15991__auto__ = (function (){var statearr_26739 = f__15990__auto__.call(null);(statearr_26739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26907);
return statearr_26739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___26907,res,vec__26725,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26740){var vec__26741 = p__26740;var v = cljs.core.nth.call(null,vec__26741,(0),null);var p = cljs.core.nth.call(null,vec__26741,(1),null);var job = vec__26741;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13416__auto___26910 = n;var __26911 = (0);while(true){
if((__26911 < n__13416__auto___26910))
{var G__26742_26912 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__26742_26912) {
case "async":
var c__15989__auto___26914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__26911,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__26911,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function (state_26755){var state_val_26756 = (state_26755[(1)]);if((state_val_26756 === (7)))
{var inst_26751 = (state_26755[(2)]);var state_26755__$1 = state_26755;var statearr_26757_26915 = state_26755__$1;(statearr_26757_26915[(2)] = inst_26751);
(statearr_26757_26915[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26756 === (6)))
{var state_26755__$1 = state_26755;var statearr_26758_26916 = state_26755__$1;(statearr_26758_26916[(2)] = null);
(statearr_26758_26916[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26756 === (5)))
{var state_26755__$1 = state_26755;var statearr_26759_26917 = state_26755__$1;(statearr_26759_26917[(2)] = null);
(statearr_26759_26917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26756 === (4)))
{var inst_26745 = (state_26755[(2)]);var inst_26746 = async.call(null,inst_26745);var state_26755__$1 = state_26755;if(cljs.core.truth_(inst_26746))
{var statearr_26760_26918 = state_26755__$1;(statearr_26760_26918[(1)] = (5));
} else
{var statearr_26761_26919 = state_26755__$1;(statearr_26761_26919[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26756 === (3)))
{var inst_26753 = (state_26755[(2)]);var state_26755__$1 = state_26755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26755__$1,inst_26753);
} else
{if((state_val_26756 === (2)))
{var state_26755__$1 = state_26755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(4),jobs);
} else
{if((state_val_26756 === (1)))
{var state_26755__$1 = state_26755;var statearr_26762_26920 = state_26755__$1;(statearr_26762_26920[(2)] = null);
(statearr_26762_26920[(1)] = (2));
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
});})(__26911,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
;return ((function (__26911,switch__15974__auto__,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26766 = [null,null,null,null,null,null,null];(statearr_26766[(0)] = state_machine__15975__auto__);
(statearr_26766[(1)] = (1));
return statearr_26766;
});
var state_machine__15975__auto____1 = (function (state_26755){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26755);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object))
{var ex__15978__auto__ = e26767;var statearr_26768_26921 = state_26755;(statearr_26768_26921[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26755);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26922 = state_26755;
state_26755 = G__26922;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26755){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__26911,switch__15974__auto__,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_26769 = f__15990__auto__.call(null);(statearr_26769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26914);
return statearr_26769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__26911,c__15989__auto___26914,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
);

break;
case "compute":
var c__15989__auto___26923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__26911,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (__26911,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function (state_26782){var state_val_26783 = (state_26782[(1)]);if((state_val_26783 === (7)))
{var inst_26778 = (state_26782[(2)]);var state_26782__$1 = state_26782;var statearr_26784_26924 = state_26782__$1;(statearr_26784_26924[(2)] = inst_26778);
(statearr_26784_26924[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26783 === (6)))
{var state_26782__$1 = state_26782;var statearr_26785_26925 = state_26782__$1;(statearr_26785_26925[(2)] = null);
(statearr_26785_26925[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26783 === (5)))
{var state_26782__$1 = state_26782;var statearr_26786_26926 = state_26782__$1;(statearr_26786_26926[(2)] = null);
(statearr_26786_26926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26783 === (4)))
{var inst_26772 = (state_26782[(2)]);var inst_26773 = process.call(null,inst_26772);var state_26782__$1 = state_26782;if(cljs.core.truth_(inst_26773))
{var statearr_26787_26927 = state_26782__$1;(statearr_26787_26927[(1)] = (5));
} else
{var statearr_26788_26928 = state_26782__$1;(statearr_26788_26928[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26783 === (3)))
{var inst_26780 = (state_26782[(2)]);var state_26782__$1 = state_26782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else
{if((state_val_26783 === (2)))
{var state_26782__$1 = state_26782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26782__$1,(4),jobs);
} else
{if((state_val_26783 === (1)))
{var state_26782__$1 = state_26782;var statearr_26789_26929 = state_26782__$1;(statearr_26789_26929[(2)] = null);
(statearr_26789_26929[(1)] = (2));
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
});})(__26911,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
;return ((function (__26911,switch__15974__auto__,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26793 = [null,null,null,null,null,null,null];(statearr_26793[(0)] = state_machine__15975__auto__);
(statearr_26793[(1)] = (1));
return statearr_26793;
});
var state_machine__15975__auto____1 = (function (state_26782){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26782);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26794){if((e26794 instanceof Object))
{var ex__15978__auto__ = e26794;var statearr_26795_26930 = state_26782;(statearr_26795_26930[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26794;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26931 = state_26782;
state_26782 = G__26931;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(__26911,switch__15974__auto__,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_26796 = f__15990__auto__.call(null);(statearr_26796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26923);
return statearr_26796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(__26911,c__15989__auto___26923,G__26742_26912,n__13416__auto___26910,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__26932 = (__26911 + (1));
__26911 = G__26932;
continue;
}
} else
{}
break;
}
var c__15989__auto___26933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___26933,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___26933,jobs,results,process,async){
return (function (state_26818){var state_val_26819 = (state_26818[(1)]);if((state_val_26819 === (9)))
{var inst_26811 = (state_26818[(2)]);var state_26818__$1 = (function (){var statearr_26820 = state_26818;(statearr_26820[(7)] = inst_26811);
return statearr_26820;
})();var statearr_26821_26934 = state_26818__$1;(statearr_26821_26934[(2)] = null);
(statearr_26821_26934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26819 === (8)))
{var inst_26804 = (state_26818[(8)]);var inst_26809 = (state_26818[(2)]);var state_26818__$1 = (function (){var statearr_26822 = state_26818;(statearr_26822[(9)] = inst_26809);
return statearr_26822;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26818__$1,(9),results,inst_26804);
} else
{if((state_val_26819 === (7)))
{var inst_26814 = (state_26818[(2)]);var state_26818__$1 = state_26818;var statearr_26823_26935 = state_26818__$1;(statearr_26823_26935[(2)] = inst_26814);
(statearr_26823_26935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26819 === (6)))
{var inst_26804 = (state_26818[(8)]);var inst_26799 = (state_26818[(10)]);var inst_26804__$1 = cljs.core.async.chan.call(null,(1));var inst_26805 = cljs.core.PersistentVector.EMPTY_NODE;var inst_26806 = [inst_26799,inst_26804__$1];var inst_26807 = (new cljs.core.PersistentVector(null,2,(5),inst_26805,inst_26806,null));var state_26818__$1 = (function (){var statearr_26824 = state_26818;(statearr_26824[(8)] = inst_26804__$1);
return statearr_26824;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26818__$1,(8),jobs,inst_26807);
} else
{if((state_val_26819 === (5)))
{var inst_26802 = cljs.core.async.close_BANG_.call(null,jobs);var state_26818__$1 = state_26818;var statearr_26825_26936 = state_26818__$1;(statearr_26825_26936[(2)] = inst_26802);
(statearr_26825_26936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26819 === (4)))
{var inst_26799 = (state_26818[(10)]);var inst_26799__$1 = (state_26818[(2)]);var inst_26800 = (inst_26799__$1 == null);var state_26818__$1 = (function (){var statearr_26826 = state_26818;(statearr_26826[(10)] = inst_26799__$1);
return statearr_26826;
})();if(cljs.core.truth_(inst_26800))
{var statearr_26827_26937 = state_26818__$1;(statearr_26827_26937[(1)] = (5));
} else
{var statearr_26828_26938 = state_26818__$1;(statearr_26828_26938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26819 === (3)))
{var inst_26816 = (state_26818[(2)]);var state_26818__$1 = state_26818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26818__$1,inst_26816);
} else
{if((state_val_26819 === (2)))
{var state_26818__$1 = state_26818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26818__$1,(4),from);
} else
{if((state_val_26819 === (1)))
{var state_26818__$1 = state_26818;var statearr_26829_26939 = state_26818__$1;(statearr_26829_26939[(2)] = null);
(statearr_26829_26939[(1)] = (2));
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
});})(c__15989__auto___26933,jobs,results,process,async))
;return ((function (switch__15974__auto__,c__15989__auto___26933,jobs,results,process,async){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_26833 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26833[(0)] = state_machine__15975__auto__);
(statearr_26833[(1)] = (1));
return statearr_26833;
});
var state_machine__15975__auto____1 = (function (state_26818){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26818);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26834){if((e26834 instanceof Object))
{var ex__15978__auto__ = e26834;var statearr_26835_26940 = state_26818;(statearr_26835_26940[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26941 = state_26818;
state_26818 = G__26941;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26818){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___26933,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_26836 = f__15990__auto__.call(null);(statearr_26836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___26933);
return statearr_26836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___26933,jobs,results,process,async))
);
var c__15989__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto__,jobs,results,process,async){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto__,jobs,results,process,async){
return (function (state_26874){var state_val_26875 = (state_26874[(1)]);if((state_val_26875 === (7)))
{var inst_26870 = (state_26874[(2)]);var state_26874__$1 = state_26874;var statearr_26876_26942 = state_26874__$1;(statearr_26876_26942[(2)] = inst_26870);
(statearr_26876_26942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (20)))
{var state_26874__$1 = state_26874;var statearr_26877_26943 = state_26874__$1;(statearr_26877_26943[(2)] = null);
(statearr_26877_26943[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (1)))
{var state_26874__$1 = state_26874;var statearr_26878_26944 = state_26874__$1;(statearr_26878_26944[(2)] = null);
(statearr_26878_26944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (4)))
{var inst_26839 = (state_26874[(7)]);var inst_26839__$1 = (state_26874[(2)]);var inst_26840 = (inst_26839__$1 == null);var state_26874__$1 = (function (){var statearr_26879 = state_26874;(statearr_26879[(7)] = inst_26839__$1);
return statearr_26879;
})();if(cljs.core.truth_(inst_26840))
{var statearr_26880_26945 = state_26874__$1;(statearr_26880_26945[(1)] = (5));
} else
{var statearr_26881_26946 = state_26874__$1;(statearr_26881_26946[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (15)))
{var inst_26852 = (state_26874[(8)]);var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26874__$1,(18),to,inst_26852);
} else
{if((state_val_26875 === (21)))
{var inst_26865 = (state_26874[(2)]);var state_26874__$1 = state_26874;var statearr_26882_26947 = state_26874__$1;(statearr_26882_26947[(2)] = inst_26865);
(statearr_26882_26947[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (13)))
{var inst_26867 = (state_26874[(2)]);var state_26874__$1 = (function (){var statearr_26883 = state_26874;(statearr_26883[(9)] = inst_26867);
return statearr_26883;
})();var statearr_26884_26948 = state_26874__$1;(statearr_26884_26948[(2)] = null);
(statearr_26884_26948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (6)))
{var inst_26839 = (state_26874[(7)]);var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26874__$1,(11),inst_26839);
} else
{if((state_val_26875 === (17)))
{var inst_26860 = (state_26874[(2)]);var state_26874__$1 = state_26874;if(cljs.core.truth_(inst_26860))
{var statearr_26885_26949 = state_26874__$1;(statearr_26885_26949[(1)] = (19));
} else
{var statearr_26886_26950 = state_26874__$1;(statearr_26886_26950[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (3)))
{var inst_26872 = (state_26874[(2)]);var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26874__$1,inst_26872);
} else
{if((state_val_26875 === (12)))
{var inst_26849 = (state_26874[(10)]);var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26874__$1,(14),inst_26849);
} else
{if((state_val_26875 === (2)))
{var state_26874__$1 = state_26874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26874__$1,(4),results);
} else
{if((state_val_26875 === (19)))
{var state_26874__$1 = state_26874;var statearr_26887_26951 = state_26874__$1;(statearr_26887_26951[(2)] = null);
(statearr_26887_26951[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (11)))
{var inst_26849 = (state_26874[(2)]);var state_26874__$1 = (function (){var statearr_26888 = state_26874;(statearr_26888[(10)] = inst_26849);
return statearr_26888;
})();var statearr_26889_26952 = state_26874__$1;(statearr_26889_26952[(2)] = null);
(statearr_26889_26952[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (9)))
{var state_26874__$1 = state_26874;var statearr_26890_26953 = state_26874__$1;(statearr_26890_26953[(2)] = null);
(statearr_26890_26953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (5)))
{var state_26874__$1 = state_26874;if(cljs.core.truth_(close_QMARK_))
{var statearr_26891_26954 = state_26874__$1;(statearr_26891_26954[(1)] = (8));
} else
{var statearr_26892_26955 = state_26874__$1;(statearr_26892_26955[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (14)))
{var inst_26854 = (state_26874[(11)]);var inst_26852 = (state_26874[(8)]);var inst_26852__$1 = (state_26874[(2)]);var inst_26853 = (inst_26852__$1 == null);var inst_26854__$1 = cljs.core.not.call(null,inst_26853);var state_26874__$1 = (function (){var statearr_26893 = state_26874;(statearr_26893[(11)] = inst_26854__$1);
(statearr_26893[(8)] = inst_26852__$1);
return statearr_26893;
})();if(inst_26854__$1)
{var statearr_26894_26956 = state_26874__$1;(statearr_26894_26956[(1)] = (15));
} else
{var statearr_26895_26957 = state_26874__$1;(statearr_26895_26957[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (16)))
{var inst_26854 = (state_26874[(11)]);var state_26874__$1 = state_26874;var statearr_26896_26958 = state_26874__$1;(statearr_26896_26958[(2)] = inst_26854);
(statearr_26896_26958[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (10)))
{var inst_26846 = (state_26874[(2)]);var state_26874__$1 = state_26874;var statearr_26897_26959 = state_26874__$1;(statearr_26897_26959[(2)] = inst_26846);
(statearr_26897_26959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (18)))
{var inst_26857 = (state_26874[(2)]);var state_26874__$1 = state_26874;var statearr_26898_26960 = state_26874__$1;(statearr_26898_26960[(2)] = inst_26857);
(statearr_26898_26960[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26875 === (8)))
{var inst_26843 = cljs.core.async.close_BANG_.call(null,to);var state_26874__$1 = state_26874;var statearr_26899_26961 = state_26874__$1;(statearr_26899_26961[(2)] = inst_26843);
(statearr_26899_26961[(1)] = (10));
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
var state_machine__15975__auto____0 = (function (){var statearr_26903 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26903[(0)] = state_machine__15975__auto__);
(statearr_26903[(1)] = (1));
return statearr_26903;
});
var state_machine__15975__auto____1 = (function (state_26874){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_26874);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e26904){if((e26904 instanceof Object))
{var ex__15978__auto__ = e26904;var statearr_26905_26962 = state_26874;(statearr_26905_26962[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26963 = state_26874;
state_26874 = G__26963;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_26874){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_26874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__,jobs,results,process,async))
})();var state__15991__auto__ = (function (){var statearr_26906 = f__15990__auto__.call(null);(statearr_26906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_26906;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15989__auto___27064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___27064,tc,fc){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___27064,tc,fc){
return (function (state_27039){var state_val_27040 = (state_27039[(1)]);if((state_val_27040 === (7)))
{var inst_27035 = (state_27039[(2)]);var state_27039__$1 = state_27039;var statearr_27041_27065 = state_27039__$1;(statearr_27041_27065[(2)] = inst_27035);
(statearr_27041_27065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (1)))
{var state_27039__$1 = state_27039;var statearr_27042_27066 = state_27039__$1;(statearr_27042_27066[(2)] = null);
(statearr_27042_27066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (4)))
{var inst_27016 = (state_27039[(7)]);var inst_27016__$1 = (state_27039[(2)]);var inst_27017 = (inst_27016__$1 == null);var state_27039__$1 = (function (){var statearr_27043 = state_27039;(statearr_27043[(7)] = inst_27016__$1);
return statearr_27043;
})();if(cljs.core.truth_(inst_27017))
{var statearr_27044_27067 = state_27039__$1;(statearr_27044_27067[(1)] = (5));
} else
{var statearr_27045_27068 = state_27039__$1;(statearr_27045_27068[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (13)))
{var state_27039__$1 = state_27039;var statearr_27046_27069 = state_27039__$1;(statearr_27046_27069[(2)] = null);
(statearr_27046_27069[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (6)))
{var inst_27016 = (state_27039[(7)]);var inst_27022 = p.call(null,inst_27016);var state_27039__$1 = state_27039;if(cljs.core.truth_(inst_27022))
{var statearr_27047_27070 = state_27039__$1;(statearr_27047_27070[(1)] = (9));
} else
{var statearr_27048_27071 = state_27039__$1;(statearr_27048_27071[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (3)))
{var inst_27037 = (state_27039[(2)]);var state_27039__$1 = state_27039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27039__$1,inst_27037);
} else
{if((state_val_27040 === (12)))
{var state_27039__$1 = state_27039;var statearr_27049_27072 = state_27039__$1;(statearr_27049_27072[(2)] = null);
(statearr_27049_27072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (2)))
{var state_27039__$1 = state_27039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27039__$1,(4),ch);
} else
{if((state_val_27040 === (11)))
{var inst_27016 = (state_27039[(7)]);var inst_27026 = (state_27039[(2)]);var state_27039__$1 = state_27039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27039__$1,(8),inst_27026,inst_27016);
} else
{if((state_val_27040 === (9)))
{var state_27039__$1 = state_27039;var statearr_27050_27073 = state_27039__$1;(statearr_27050_27073[(2)] = tc);
(statearr_27050_27073[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (5)))
{var inst_27019 = cljs.core.async.close_BANG_.call(null,tc);var inst_27020 = cljs.core.async.close_BANG_.call(null,fc);var state_27039__$1 = (function (){var statearr_27051 = state_27039;(statearr_27051[(8)] = inst_27019);
return statearr_27051;
})();var statearr_27052_27074 = state_27039__$1;(statearr_27052_27074[(2)] = inst_27020);
(statearr_27052_27074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (14)))
{var inst_27033 = (state_27039[(2)]);var state_27039__$1 = state_27039;var statearr_27053_27075 = state_27039__$1;(statearr_27053_27075[(2)] = inst_27033);
(statearr_27053_27075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (10)))
{var state_27039__$1 = state_27039;var statearr_27054_27076 = state_27039__$1;(statearr_27054_27076[(2)] = fc);
(statearr_27054_27076[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27040 === (8)))
{var inst_27028 = (state_27039[(2)]);var state_27039__$1 = state_27039;if(cljs.core.truth_(inst_27028))
{var statearr_27055_27077 = state_27039__$1;(statearr_27055_27077[(1)] = (12));
} else
{var statearr_27056_27078 = state_27039__$1;(statearr_27056_27078[(1)] = (13));
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
});})(c__15989__auto___27064,tc,fc))
;return ((function (switch__15974__auto__,c__15989__auto___27064,tc,fc){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_27060 = [null,null,null,null,null,null,null,null,null];(statearr_27060[(0)] = state_machine__15975__auto__);
(statearr_27060[(1)] = (1));
return statearr_27060;
});
var state_machine__15975__auto____1 = (function (state_27039){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27039);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e27061){if((e27061 instanceof Object))
{var ex__15978__auto__ = e27061;var statearr_27062_27079 = state_27039;(statearr_27062_27079[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27061;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27080 = state_27039;
state_27039 = G__27080;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27039){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___27064,tc,fc))
})();var state__15991__auto__ = (function (){var statearr_27063 = f__15990__auto__.call(null);(statearr_27063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___27064);
return statearr_27063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___27064,tc,fc))
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
return (function (state_27127){var state_val_27128 = (state_27127[(1)]);if((state_val_27128 === (7)))
{var inst_27123 = (state_27127[(2)]);var state_27127__$1 = state_27127;var statearr_27129_27145 = state_27127__$1;(statearr_27129_27145[(2)] = inst_27123);
(statearr_27129_27145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27128 === (6)))
{var inst_27113 = (state_27127[(7)]);var inst_27116 = (state_27127[(8)]);var inst_27120 = f.call(null,inst_27113,inst_27116);var inst_27113__$1 = inst_27120;var state_27127__$1 = (function (){var statearr_27130 = state_27127;(statearr_27130[(7)] = inst_27113__$1);
return statearr_27130;
})();var statearr_27131_27146 = state_27127__$1;(statearr_27131_27146[(2)] = null);
(statearr_27131_27146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27128 === (5)))
{var inst_27113 = (state_27127[(7)]);var state_27127__$1 = state_27127;var statearr_27132_27147 = state_27127__$1;(statearr_27132_27147[(2)] = inst_27113);
(statearr_27132_27147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27128 === (4)))
{var inst_27116 = (state_27127[(8)]);var inst_27116__$1 = (state_27127[(2)]);var inst_27117 = (inst_27116__$1 == null);var state_27127__$1 = (function (){var statearr_27133 = state_27127;(statearr_27133[(8)] = inst_27116__$1);
return statearr_27133;
})();if(cljs.core.truth_(inst_27117))
{var statearr_27134_27148 = state_27127__$1;(statearr_27134_27148[(1)] = (5));
} else
{var statearr_27135_27149 = state_27127__$1;(statearr_27135_27149[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27128 === (3)))
{var inst_27125 = (state_27127[(2)]);var state_27127__$1 = state_27127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27127__$1,inst_27125);
} else
{if((state_val_27128 === (2)))
{var state_27127__$1 = state_27127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27127__$1,(4),ch);
} else
{if((state_val_27128 === (1)))
{var inst_27113 = init;var state_27127__$1 = (function (){var statearr_27136 = state_27127;(statearr_27136[(7)] = inst_27113);
return statearr_27136;
})();var statearr_27137_27150 = state_27127__$1;(statearr_27137_27150[(2)] = null);
(statearr_27137_27150[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_27141 = [null,null,null,null,null,null,null,null,null];(statearr_27141[(0)] = state_machine__15975__auto__);
(statearr_27141[(1)] = (1));
return statearr_27141;
});
var state_machine__15975__auto____1 = (function (state_27127){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27127);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e27142){if((e27142 instanceof Object))
{var ex__15978__auto__ = e27142;var statearr_27143_27151 = state_27127;(statearr_27143_27151[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27152 = state_27127;
state_27127 = G__27152;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27127){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_27144 = f__15990__auto__.call(null);(statearr_27144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_27144;
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
return (function (state_27226){var state_val_27227 = (state_27226[(1)]);if((state_val_27227 === (7)))
{var inst_27208 = (state_27226[(2)]);var state_27226__$1 = state_27226;var statearr_27228_27251 = state_27226__$1;(statearr_27228_27251[(2)] = inst_27208);
(statearr_27228_27251[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (1)))
{var inst_27202 = cljs.core.seq.call(null,coll);var inst_27203 = inst_27202;var state_27226__$1 = (function (){var statearr_27229 = state_27226;(statearr_27229[(7)] = inst_27203);
return statearr_27229;
})();var statearr_27230_27252 = state_27226__$1;(statearr_27230_27252[(2)] = null);
(statearr_27230_27252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (4)))
{var inst_27203 = (state_27226[(7)]);var inst_27206 = cljs.core.first.call(null,inst_27203);var state_27226__$1 = state_27226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(7),ch,inst_27206);
} else
{if((state_val_27227 === (13)))
{var inst_27220 = (state_27226[(2)]);var state_27226__$1 = state_27226;var statearr_27231_27253 = state_27226__$1;(statearr_27231_27253[(2)] = inst_27220);
(statearr_27231_27253[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (6)))
{var inst_27211 = (state_27226[(2)]);var state_27226__$1 = state_27226;if(cljs.core.truth_(inst_27211))
{var statearr_27232_27254 = state_27226__$1;(statearr_27232_27254[(1)] = (8));
} else
{var statearr_27233_27255 = state_27226__$1;(statearr_27233_27255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (3)))
{var inst_27224 = (state_27226[(2)]);var state_27226__$1 = state_27226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else
{if((state_val_27227 === (12)))
{var state_27226__$1 = state_27226;var statearr_27234_27256 = state_27226__$1;(statearr_27234_27256[(2)] = null);
(statearr_27234_27256[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (2)))
{var inst_27203 = (state_27226[(7)]);var state_27226__$1 = state_27226;if(cljs.core.truth_(inst_27203))
{var statearr_27235_27257 = state_27226__$1;(statearr_27235_27257[(1)] = (4));
} else
{var statearr_27236_27258 = state_27226__$1;(statearr_27236_27258[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (11)))
{var inst_27217 = cljs.core.async.close_BANG_.call(null,ch);var state_27226__$1 = state_27226;var statearr_27237_27259 = state_27226__$1;(statearr_27237_27259[(2)] = inst_27217);
(statearr_27237_27259[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (9)))
{var state_27226__$1 = state_27226;if(cljs.core.truth_(close_QMARK_))
{var statearr_27238_27260 = state_27226__$1;(statearr_27238_27260[(1)] = (11));
} else
{var statearr_27239_27261 = state_27226__$1;(statearr_27239_27261[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (5)))
{var inst_27203 = (state_27226[(7)]);var state_27226__$1 = state_27226;var statearr_27240_27262 = state_27226__$1;(statearr_27240_27262[(2)] = inst_27203);
(statearr_27240_27262[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (10)))
{var inst_27222 = (state_27226[(2)]);var state_27226__$1 = state_27226;var statearr_27241_27263 = state_27226__$1;(statearr_27241_27263[(2)] = inst_27222);
(statearr_27241_27263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27227 === (8)))
{var inst_27203 = (state_27226[(7)]);var inst_27213 = cljs.core.next.call(null,inst_27203);var inst_27203__$1 = inst_27213;var state_27226__$1 = (function (){var statearr_27242 = state_27226;(statearr_27242[(7)] = inst_27203__$1);
return statearr_27242;
})();var statearr_27243_27264 = state_27226__$1;(statearr_27243_27264[(2)] = null);
(statearr_27243_27264[(1)] = (2));
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
var state_machine__15975__auto____0 = (function (){var statearr_27247 = [null,null,null,null,null,null,null,null];(statearr_27247[(0)] = state_machine__15975__auto__);
(statearr_27247[(1)] = (1));
return statearr_27247;
});
var state_machine__15975__auto____1 = (function (state_27226){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27226);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e27248){if((e27248 instanceof Object))
{var ex__15978__auto__ = e27248;var statearr_27249_27265 = state_27226;(statearr_27249_27265[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27266 = state_27226;
state_27226 = G__27266;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_27250 = f__15990__auto__.call(null);(statearr_27250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_27250;
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
cljs.core.async.Mux = (function (){var obj27268 = {};return obj27268;
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
cljs.core.async.Mult = (function (){var obj27270 = {};return obj27270;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27492 = (function (cs,ch,mult,meta27493){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27493 = meta27493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27492.cljs$lang$type = true;
cljs.core.async.t27492.cljs$lang$ctorStr = "cljs.core.async/t27492";
cljs.core.async.t27492.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27492");
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27492.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27494){var self__ = this;
var _27494__$1 = this;return self__.meta27493;
});})(cs))
;
cljs.core.async.t27492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27494,meta27493__$1){var self__ = this;
var _27494__$1 = this;return (new cljs.core.async.t27492(self__.cs,self__.ch,self__.mult,meta27493__$1));
});})(cs))
;
cljs.core.async.__GT_t27492 = ((function (cs){
return (function __GT_t27492(cs__$1,ch__$1,mult__$1,meta27493){return (new cljs.core.async.t27492(cs__$1,ch__$1,mult__$1,meta27493));
});})(cs))
;
}
return (new cljs.core.async.t27492(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15989__auto___27713 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___27713,cs,m,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___27713,cs,m,dchan,dctr,done){
return (function (state_27625){var state_val_27626 = (state_27625[(1)]);if((state_val_27626 === (7)))
{var inst_27621 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27627_27714 = state_27625__$1;(statearr_27627_27714[(2)] = inst_27621);
(statearr_27627_27714[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (20)))
{var inst_27526 = (state_27625[(7)]);var inst_27536 = cljs.core.first.call(null,inst_27526);var inst_27537 = cljs.core.nth.call(null,inst_27536,(0),null);var inst_27538 = cljs.core.nth.call(null,inst_27536,(1),null);var state_27625__$1 = (function (){var statearr_27628 = state_27625;(statearr_27628[(8)] = inst_27537);
return statearr_27628;
})();if(cljs.core.truth_(inst_27538))
{var statearr_27629_27715 = state_27625__$1;(statearr_27629_27715[(1)] = (22));
} else
{var statearr_27630_27716 = state_27625__$1;(statearr_27630_27716[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (27)))
{var inst_27497 = (state_27625[(9)]);var inst_27568 = (state_27625[(10)]);var inst_27566 = (state_27625[(11)]);var inst_27573 = (state_27625[(12)]);var inst_27573__$1 = cljs.core._nth.call(null,inst_27566,inst_27568);var inst_27574 = cljs.core.async.put_BANG_.call(null,inst_27573__$1,inst_27497,done);var state_27625__$1 = (function (){var statearr_27631 = state_27625;(statearr_27631[(12)] = inst_27573__$1);
return statearr_27631;
})();if(cljs.core.truth_(inst_27574))
{var statearr_27632_27717 = state_27625__$1;(statearr_27632_27717[(1)] = (30));
} else
{var statearr_27633_27718 = state_27625__$1;(statearr_27633_27718[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (1)))
{var state_27625__$1 = state_27625;var statearr_27634_27719 = state_27625__$1;(statearr_27634_27719[(2)] = null);
(statearr_27634_27719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (24)))
{var inst_27526 = (state_27625[(7)]);var inst_27543 = (state_27625[(2)]);var inst_27544 = cljs.core.next.call(null,inst_27526);var inst_27506 = inst_27544;var inst_27507 = null;var inst_27508 = (0);var inst_27509 = (0);var state_27625__$1 = (function (){var statearr_27635 = state_27625;(statearr_27635[(13)] = inst_27506);
(statearr_27635[(14)] = inst_27543);
(statearr_27635[(15)] = inst_27508);
(statearr_27635[(16)] = inst_27507);
(statearr_27635[(17)] = inst_27509);
return statearr_27635;
})();var statearr_27636_27720 = state_27625__$1;(statearr_27636_27720[(2)] = null);
(statearr_27636_27720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (39)))
{var state_27625__$1 = state_27625;var statearr_27640_27721 = state_27625__$1;(statearr_27640_27721[(2)] = null);
(statearr_27640_27721[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (4)))
{var inst_27497 = (state_27625[(9)]);var inst_27497__$1 = (state_27625[(2)]);var inst_27498 = (inst_27497__$1 == null);var state_27625__$1 = (function (){var statearr_27641 = state_27625;(statearr_27641[(9)] = inst_27497__$1);
return statearr_27641;
})();if(cljs.core.truth_(inst_27498))
{var statearr_27642_27722 = state_27625__$1;(statearr_27642_27722[(1)] = (5));
} else
{var statearr_27643_27723 = state_27625__$1;(statearr_27643_27723[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (15)))
{var inst_27506 = (state_27625[(13)]);var inst_27508 = (state_27625[(15)]);var inst_27507 = (state_27625[(16)]);var inst_27509 = (state_27625[(17)]);var inst_27522 = (state_27625[(2)]);var inst_27523 = (inst_27509 + (1));var tmp27637 = inst_27506;var tmp27638 = inst_27508;var tmp27639 = inst_27507;var inst_27506__$1 = tmp27637;var inst_27507__$1 = tmp27639;var inst_27508__$1 = tmp27638;var inst_27509__$1 = inst_27523;var state_27625__$1 = (function (){var statearr_27644 = state_27625;(statearr_27644[(18)] = inst_27522);
(statearr_27644[(13)] = inst_27506__$1);
(statearr_27644[(15)] = inst_27508__$1);
(statearr_27644[(16)] = inst_27507__$1);
(statearr_27644[(17)] = inst_27509__$1);
return statearr_27644;
})();var statearr_27645_27724 = state_27625__$1;(statearr_27645_27724[(2)] = null);
(statearr_27645_27724[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (21)))
{var inst_27547 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27649_27725 = state_27625__$1;(statearr_27649_27725[(2)] = inst_27547);
(statearr_27649_27725[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (31)))
{var inst_27573 = (state_27625[(12)]);var inst_27577 = done.call(null,null);var inst_27578 = cljs.core.async.untap_STAR_.call(null,m,inst_27573);var state_27625__$1 = (function (){var statearr_27650 = state_27625;(statearr_27650[(19)] = inst_27577);
return statearr_27650;
})();var statearr_27651_27726 = state_27625__$1;(statearr_27651_27726[(2)] = inst_27578);
(statearr_27651_27726[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (32)))
{var inst_27568 = (state_27625[(10)]);var inst_27567 = (state_27625[(20)]);var inst_27565 = (state_27625[(21)]);var inst_27566 = (state_27625[(11)]);var inst_27580 = (state_27625[(2)]);var inst_27581 = (inst_27568 + (1));var tmp27646 = inst_27567;var tmp27647 = inst_27565;var tmp27648 = inst_27566;var inst_27565__$1 = tmp27647;var inst_27566__$1 = tmp27648;var inst_27567__$1 = tmp27646;var inst_27568__$1 = inst_27581;var state_27625__$1 = (function (){var statearr_27652 = state_27625;(statearr_27652[(10)] = inst_27568__$1);
(statearr_27652[(20)] = inst_27567__$1);
(statearr_27652[(22)] = inst_27580);
(statearr_27652[(21)] = inst_27565__$1);
(statearr_27652[(11)] = inst_27566__$1);
return statearr_27652;
})();var statearr_27653_27727 = state_27625__$1;(statearr_27653_27727[(2)] = null);
(statearr_27653_27727[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (40)))
{var inst_27593 = (state_27625[(23)]);var inst_27597 = done.call(null,null);var inst_27598 = cljs.core.async.untap_STAR_.call(null,m,inst_27593);var state_27625__$1 = (function (){var statearr_27654 = state_27625;(statearr_27654[(24)] = inst_27597);
return statearr_27654;
})();var statearr_27655_27728 = state_27625__$1;(statearr_27655_27728[(2)] = inst_27598);
(statearr_27655_27728[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (33)))
{var inst_27584 = (state_27625[(25)]);var inst_27586 = cljs.core.chunked_seq_QMARK_.call(null,inst_27584);var state_27625__$1 = state_27625;if(inst_27586)
{var statearr_27656_27729 = state_27625__$1;(statearr_27656_27729[(1)] = (36));
} else
{var statearr_27657_27730 = state_27625__$1;(statearr_27657_27730[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (13)))
{var inst_27516 = (state_27625[(26)]);var inst_27519 = cljs.core.async.close_BANG_.call(null,inst_27516);var state_27625__$1 = state_27625;var statearr_27658_27731 = state_27625__$1;(statearr_27658_27731[(2)] = inst_27519);
(statearr_27658_27731[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (22)))
{var inst_27537 = (state_27625[(8)]);var inst_27540 = cljs.core.async.close_BANG_.call(null,inst_27537);var state_27625__$1 = state_27625;var statearr_27659_27732 = state_27625__$1;(statearr_27659_27732[(2)] = inst_27540);
(statearr_27659_27732[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (36)))
{var inst_27584 = (state_27625[(25)]);var inst_27588 = cljs.core.chunk_first.call(null,inst_27584);var inst_27589 = cljs.core.chunk_rest.call(null,inst_27584);var inst_27590 = cljs.core.count.call(null,inst_27588);var inst_27565 = inst_27589;var inst_27566 = inst_27588;var inst_27567 = inst_27590;var inst_27568 = (0);var state_27625__$1 = (function (){var statearr_27660 = state_27625;(statearr_27660[(10)] = inst_27568);
(statearr_27660[(20)] = inst_27567);
(statearr_27660[(21)] = inst_27565);
(statearr_27660[(11)] = inst_27566);
return statearr_27660;
})();var statearr_27661_27733 = state_27625__$1;(statearr_27661_27733[(2)] = null);
(statearr_27661_27733[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (41)))
{var inst_27584 = (state_27625[(25)]);var inst_27600 = (state_27625[(2)]);var inst_27601 = cljs.core.next.call(null,inst_27584);var inst_27565 = inst_27601;var inst_27566 = null;var inst_27567 = (0);var inst_27568 = (0);var state_27625__$1 = (function (){var statearr_27662 = state_27625;(statearr_27662[(10)] = inst_27568);
(statearr_27662[(20)] = inst_27567);
(statearr_27662[(27)] = inst_27600);
(statearr_27662[(21)] = inst_27565);
(statearr_27662[(11)] = inst_27566);
return statearr_27662;
})();var statearr_27663_27734 = state_27625__$1;(statearr_27663_27734[(2)] = null);
(statearr_27663_27734[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (43)))
{var state_27625__$1 = state_27625;var statearr_27664_27735 = state_27625__$1;(statearr_27664_27735[(2)] = null);
(statearr_27664_27735[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (29)))
{var inst_27609 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27665_27736 = state_27625__$1;(statearr_27665_27736[(2)] = inst_27609);
(statearr_27665_27736[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (44)))
{var inst_27618 = (state_27625[(2)]);var state_27625__$1 = (function (){var statearr_27666 = state_27625;(statearr_27666[(28)] = inst_27618);
return statearr_27666;
})();var statearr_27667_27737 = state_27625__$1;(statearr_27667_27737[(2)] = null);
(statearr_27667_27737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (6)))
{var inst_27557 = (state_27625[(29)]);var inst_27556 = cljs.core.deref.call(null,cs);var inst_27557__$1 = cljs.core.keys.call(null,inst_27556);var inst_27558 = cljs.core.count.call(null,inst_27557__$1);var inst_27559 = cljs.core.reset_BANG_.call(null,dctr,inst_27558);var inst_27564 = cljs.core.seq.call(null,inst_27557__$1);var inst_27565 = inst_27564;var inst_27566 = null;var inst_27567 = (0);var inst_27568 = (0);var state_27625__$1 = (function (){var statearr_27668 = state_27625;(statearr_27668[(10)] = inst_27568);
(statearr_27668[(30)] = inst_27559);
(statearr_27668[(20)] = inst_27567);
(statearr_27668[(21)] = inst_27565);
(statearr_27668[(11)] = inst_27566);
(statearr_27668[(29)] = inst_27557__$1);
return statearr_27668;
})();var statearr_27669_27738 = state_27625__$1;(statearr_27669_27738[(2)] = null);
(statearr_27669_27738[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (28)))
{var inst_27584 = (state_27625[(25)]);var inst_27565 = (state_27625[(21)]);var inst_27584__$1 = cljs.core.seq.call(null,inst_27565);var state_27625__$1 = (function (){var statearr_27670 = state_27625;(statearr_27670[(25)] = inst_27584__$1);
return statearr_27670;
})();if(inst_27584__$1)
{var statearr_27671_27739 = state_27625__$1;(statearr_27671_27739[(1)] = (33));
} else
{var statearr_27672_27740 = state_27625__$1;(statearr_27672_27740[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (25)))
{var inst_27568 = (state_27625[(10)]);var inst_27567 = (state_27625[(20)]);var inst_27570 = (inst_27568 < inst_27567);var inst_27571 = inst_27570;var state_27625__$1 = state_27625;if(cljs.core.truth_(inst_27571))
{var statearr_27673_27741 = state_27625__$1;(statearr_27673_27741[(1)] = (27));
} else
{var statearr_27674_27742 = state_27625__$1;(statearr_27674_27742[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (34)))
{var state_27625__$1 = state_27625;var statearr_27675_27743 = state_27625__$1;(statearr_27675_27743[(2)] = null);
(statearr_27675_27743[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (17)))
{var state_27625__$1 = state_27625;var statearr_27676_27744 = state_27625__$1;(statearr_27676_27744[(2)] = null);
(statearr_27676_27744[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (3)))
{var inst_27623 = (state_27625[(2)]);var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27625__$1,inst_27623);
} else
{if((state_val_27626 === (12)))
{var inst_27552 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27677_27745 = state_27625__$1;(statearr_27677_27745[(2)] = inst_27552);
(statearr_27677_27745[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (2)))
{var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27625__$1,(4),ch);
} else
{if((state_val_27626 === (23)))
{var state_27625__$1 = state_27625;var statearr_27678_27746 = state_27625__$1;(statearr_27678_27746[(2)] = null);
(statearr_27678_27746[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (35)))
{var inst_27607 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27679_27747 = state_27625__$1;(statearr_27679_27747[(2)] = inst_27607);
(statearr_27679_27747[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (19)))
{var inst_27526 = (state_27625[(7)]);var inst_27530 = cljs.core.chunk_first.call(null,inst_27526);var inst_27531 = cljs.core.chunk_rest.call(null,inst_27526);var inst_27532 = cljs.core.count.call(null,inst_27530);var inst_27506 = inst_27531;var inst_27507 = inst_27530;var inst_27508 = inst_27532;var inst_27509 = (0);var state_27625__$1 = (function (){var statearr_27680 = state_27625;(statearr_27680[(13)] = inst_27506);
(statearr_27680[(15)] = inst_27508);
(statearr_27680[(16)] = inst_27507);
(statearr_27680[(17)] = inst_27509);
return statearr_27680;
})();var statearr_27681_27748 = state_27625__$1;(statearr_27681_27748[(2)] = null);
(statearr_27681_27748[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (11)))
{var inst_27506 = (state_27625[(13)]);var inst_27526 = (state_27625[(7)]);var inst_27526__$1 = cljs.core.seq.call(null,inst_27506);var state_27625__$1 = (function (){var statearr_27682 = state_27625;(statearr_27682[(7)] = inst_27526__$1);
return statearr_27682;
})();if(inst_27526__$1)
{var statearr_27683_27749 = state_27625__$1;(statearr_27683_27749[(1)] = (16));
} else
{var statearr_27684_27750 = state_27625__$1;(statearr_27684_27750[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (9)))
{var inst_27554 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27685_27751 = state_27625__$1;(statearr_27685_27751[(2)] = inst_27554);
(statearr_27685_27751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (5)))
{var inst_27504 = cljs.core.deref.call(null,cs);var inst_27505 = cljs.core.seq.call(null,inst_27504);var inst_27506 = inst_27505;var inst_27507 = null;var inst_27508 = (0);var inst_27509 = (0);var state_27625__$1 = (function (){var statearr_27686 = state_27625;(statearr_27686[(13)] = inst_27506);
(statearr_27686[(15)] = inst_27508);
(statearr_27686[(16)] = inst_27507);
(statearr_27686[(17)] = inst_27509);
return statearr_27686;
})();var statearr_27687_27752 = state_27625__$1;(statearr_27687_27752[(2)] = null);
(statearr_27687_27752[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (14)))
{var state_27625__$1 = state_27625;var statearr_27688_27753 = state_27625__$1;(statearr_27688_27753[(2)] = null);
(statearr_27688_27753[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (45)))
{var inst_27615 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27689_27754 = state_27625__$1;(statearr_27689_27754[(2)] = inst_27615);
(statearr_27689_27754[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (26)))
{var inst_27557 = (state_27625[(29)]);var inst_27611 = (state_27625[(2)]);var inst_27612 = cljs.core.seq.call(null,inst_27557);var state_27625__$1 = (function (){var statearr_27690 = state_27625;(statearr_27690[(31)] = inst_27611);
return statearr_27690;
})();if(inst_27612)
{var statearr_27691_27755 = state_27625__$1;(statearr_27691_27755[(1)] = (42));
} else
{var statearr_27692_27756 = state_27625__$1;(statearr_27692_27756[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (16)))
{var inst_27526 = (state_27625[(7)]);var inst_27528 = cljs.core.chunked_seq_QMARK_.call(null,inst_27526);var state_27625__$1 = state_27625;if(inst_27528)
{var statearr_27693_27757 = state_27625__$1;(statearr_27693_27757[(1)] = (19));
} else
{var statearr_27694_27758 = state_27625__$1;(statearr_27694_27758[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (38)))
{var inst_27604 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27695_27759 = state_27625__$1;(statearr_27695_27759[(2)] = inst_27604);
(statearr_27695_27759[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (30)))
{var state_27625__$1 = state_27625;var statearr_27696_27760 = state_27625__$1;(statearr_27696_27760[(2)] = null);
(statearr_27696_27760[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (10)))
{var inst_27507 = (state_27625[(16)]);var inst_27509 = (state_27625[(17)]);var inst_27515 = cljs.core._nth.call(null,inst_27507,inst_27509);var inst_27516 = cljs.core.nth.call(null,inst_27515,(0),null);var inst_27517 = cljs.core.nth.call(null,inst_27515,(1),null);var state_27625__$1 = (function (){var statearr_27697 = state_27625;(statearr_27697[(26)] = inst_27516);
return statearr_27697;
})();if(cljs.core.truth_(inst_27517))
{var statearr_27698_27761 = state_27625__$1;(statearr_27698_27761[(1)] = (13));
} else
{var statearr_27699_27762 = state_27625__$1;(statearr_27699_27762[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (18)))
{var inst_27550 = (state_27625[(2)]);var state_27625__$1 = state_27625;var statearr_27700_27763 = state_27625__$1;(statearr_27700_27763[(2)] = inst_27550);
(statearr_27700_27763[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (42)))
{var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27625__$1,(45),dchan);
} else
{if((state_val_27626 === (37)))
{var inst_27593 = (state_27625[(23)]);var inst_27497 = (state_27625[(9)]);var inst_27584 = (state_27625[(25)]);var inst_27593__$1 = cljs.core.first.call(null,inst_27584);var inst_27594 = cljs.core.async.put_BANG_.call(null,inst_27593__$1,inst_27497,done);var state_27625__$1 = (function (){var statearr_27701 = state_27625;(statearr_27701[(23)] = inst_27593__$1);
return statearr_27701;
})();if(cljs.core.truth_(inst_27594))
{var statearr_27702_27764 = state_27625__$1;(statearr_27702_27764[(1)] = (39));
} else
{var statearr_27703_27765 = state_27625__$1;(statearr_27703_27765[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27626 === (8)))
{var inst_27508 = (state_27625[(15)]);var inst_27509 = (state_27625[(17)]);var inst_27511 = (inst_27509 < inst_27508);var inst_27512 = inst_27511;var state_27625__$1 = state_27625;if(cljs.core.truth_(inst_27512))
{var statearr_27704_27766 = state_27625__$1;(statearr_27704_27766[(1)] = (10));
} else
{var statearr_27705_27767 = state_27625__$1;(statearr_27705_27767[(1)] = (11));
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
});})(c__15989__auto___27713,cs,m,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___27713,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_27709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27709[(0)] = state_machine__15975__auto__);
(statearr_27709[(1)] = (1));
return statearr_27709;
});
var state_machine__15975__auto____1 = (function (state_27625){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27625);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e27710){if((e27710 instanceof Object))
{var ex__15978__auto__ = e27710;var statearr_27711_27768 = state_27625;(statearr_27711_27768[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27710;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27769 = state_27625;
state_27625 = G__27769;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27625){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___27713,cs,m,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_27712 = f__15990__auto__.call(null);(statearr_27712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___27713);
return statearr_27712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___27713,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj27771 = {};return obj27771;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27772){var map__27777 = p__27772;var map__27777__$1 = ((cljs.core.seq_QMARK_.call(null,map__27777))?cljs.core.apply.call(null,cljs.core.hash_map,map__27777):map__27777);var opts = map__27777__$1;var statearr_27778_27781 = state;(statearr_27778_27781[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27777,map__27777__$1,opts){
return (function (val){var statearr_27779_27782 = state;(statearr_27779_27782[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27777,map__27777__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_27780_27783 = state;(statearr_27780_27783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27772 = null;if (arguments.length > 3) {
  p__27772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27772);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27784){
var state = cljs.core.first(arglist__27784);
arglist__27784 = cljs.core.next(arglist__27784);
var cont_block = cljs.core.first(arglist__27784);
arglist__27784 = cljs.core.next(arglist__27784);
var ports = cljs.core.first(arglist__27784);
var p__27772 = cljs.core.rest(arglist__27784);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27772);
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
;var m = (function (){if(typeof cljs.core.async.t27904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27904 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27905){
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
this.meta27905 = meta27905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27904.cljs$lang$type = true;
cljs.core.async.t27904.cljs$lang$ctorStr = "cljs.core.async/t27904";
cljs.core.async.t27904.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t27904");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27906){var self__ = this;
var _27906__$1 = this;return self__.meta27905;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27906,meta27905__$1){var self__ = this;
var _27906__$1 = this;return (new cljs.core.async.t27904(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27905__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27904 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27905){return (new cljs.core.async.t27904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27905));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27904(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15989__auto___28023 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27976){var state_val_27977 = (state_27976[(1)]);if((state_val_27977 === (7)))
{var inst_27920 = (state_27976[(7)]);var inst_27925 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27920);var state_27976__$1 = state_27976;var statearr_27978_28024 = state_27976__$1;(statearr_27978_28024[(2)] = inst_27925);
(statearr_27978_28024[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (20)))
{var inst_27935 = (state_27976[(8)]);var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27976__$1,(23),out,inst_27935);
} else
{if((state_val_27977 === (1)))
{var inst_27910 = (state_27976[(9)]);var inst_27910__$1 = calc_state.call(null);var inst_27911 = cljs.core.seq_QMARK_.call(null,inst_27910__$1);var state_27976__$1 = (function (){var statearr_27979 = state_27976;(statearr_27979[(9)] = inst_27910__$1);
return statearr_27979;
})();if(inst_27911)
{var statearr_27980_28025 = state_27976__$1;(statearr_27980_28025[(1)] = (2));
} else
{var statearr_27981_28026 = state_27976__$1;(statearr_27981_28026[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (24)))
{var inst_27928 = (state_27976[(10)]);var inst_27920 = inst_27928;var state_27976__$1 = (function (){var statearr_27982 = state_27976;(statearr_27982[(7)] = inst_27920);
return statearr_27982;
})();var statearr_27983_28027 = state_27976__$1;(statearr_27983_28027[(2)] = null);
(statearr_27983_28027[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (4)))
{var inst_27910 = (state_27976[(9)]);var inst_27916 = (state_27976[(2)]);var inst_27917 = cljs.core.get.call(null,inst_27916,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_27918 = cljs.core.get.call(null,inst_27916,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_27919 = cljs.core.get.call(null,inst_27916,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_27920 = inst_27910;var state_27976__$1 = (function (){var statearr_27984 = state_27976;(statearr_27984[(11)] = inst_27917);
(statearr_27984[(7)] = inst_27920);
(statearr_27984[(12)] = inst_27919);
(statearr_27984[(13)] = inst_27918);
return statearr_27984;
})();var statearr_27985_28028 = state_27976__$1;(statearr_27985_28028[(2)] = null);
(statearr_27985_28028[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (15)))
{var state_27976__$1 = state_27976;var statearr_27986_28029 = state_27976__$1;(statearr_27986_28029[(2)] = null);
(statearr_27986_28029[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (21)))
{var inst_27928 = (state_27976[(10)]);var inst_27920 = inst_27928;var state_27976__$1 = (function (){var statearr_27987 = state_27976;(statearr_27987[(7)] = inst_27920);
return statearr_27987;
})();var statearr_27988_28030 = state_27976__$1;(statearr_27988_28030[(2)] = null);
(statearr_27988_28030[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (13)))
{var inst_27972 = (state_27976[(2)]);var state_27976__$1 = state_27976;var statearr_27989_28031 = state_27976__$1;(statearr_27989_28031[(2)] = inst_27972);
(statearr_27989_28031[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (22)))
{var inst_27970 = (state_27976[(2)]);var state_27976__$1 = state_27976;var statearr_27990_28032 = state_27976__$1;(statearr_27990_28032[(2)] = inst_27970);
(statearr_27990_28032[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (6)))
{var inst_27974 = (state_27976[(2)]);var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27976__$1,inst_27974);
} else
{if((state_val_27977 === (25)))
{var state_27976__$1 = state_27976;var statearr_27991_28033 = state_27976__$1;(statearr_27991_28033[(2)] = null);
(statearr_27991_28033[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (17)))
{var inst_27950 = (state_27976[(14)]);var state_27976__$1 = state_27976;var statearr_27992_28034 = state_27976__$1;(statearr_27992_28034[(2)] = inst_27950);
(statearr_27992_28034[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (3)))
{var inst_27910 = (state_27976[(9)]);var state_27976__$1 = state_27976;var statearr_27993_28035 = state_27976__$1;(statearr_27993_28035[(2)] = inst_27910);
(statearr_27993_28035[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (12)))
{var inst_27950 = (state_27976[(14)]);var inst_27931 = (state_27976[(15)]);var inst_27936 = (state_27976[(16)]);var inst_27950__$1 = inst_27931.call(null,inst_27936);var state_27976__$1 = (function (){var statearr_27994 = state_27976;(statearr_27994[(14)] = inst_27950__$1);
return statearr_27994;
})();if(cljs.core.truth_(inst_27950__$1))
{var statearr_27995_28036 = state_27976__$1;(statearr_27995_28036[(1)] = (17));
} else
{var statearr_27996_28037 = state_27976__$1;(statearr_27996_28037[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (2)))
{var inst_27910 = (state_27976[(9)]);var inst_27913 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27910);var state_27976__$1 = state_27976;var statearr_27997_28038 = state_27976__$1;(statearr_27997_28038[(2)] = inst_27913);
(statearr_27997_28038[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (23)))
{var inst_27961 = (state_27976[(2)]);var state_27976__$1 = state_27976;if(cljs.core.truth_(inst_27961))
{var statearr_27998_28039 = state_27976__$1;(statearr_27998_28039[(1)] = (24));
} else
{var statearr_27999_28040 = state_27976__$1;(statearr_27999_28040[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (19)))
{var inst_27958 = (state_27976[(2)]);var state_27976__$1 = state_27976;if(cljs.core.truth_(inst_27958))
{var statearr_28000_28041 = state_27976__$1;(statearr_28000_28041[(1)] = (20));
} else
{var statearr_28001_28042 = state_27976__$1;(statearr_28001_28042[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (11)))
{var inst_27935 = (state_27976[(8)]);var inst_27941 = (inst_27935 == null);var state_27976__$1 = state_27976;if(cljs.core.truth_(inst_27941))
{var statearr_28002_28043 = state_27976__$1;(statearr_28002_28043[(1)] = (14));
} else
{var statearr_28003_28044 = state_27976__$1;(statearr_28003_28044[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (9)))
{var inst_27928 = (state_27976[(10)]);var inst_27928__$1 = (state_27976[(2)]);var inst_27929 = cljs.core.get.call(null,inst_27928__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_27930 = cljs.core.get.call(null,inst_27928__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_27931 = cljs.core.get.call(null,inst_27928__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_27976__$1 = (function (){var statearr_28004 = state_27976;(statearr_28004[(10)] = inst_27928__$1);
(statearr_28004[(15)] = inst_27931);
(statearr_28004[(17)] = inst_27930);
return statearr_28004;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_27976__$1,(10),inst_27929);
} else
{if((state_val_27977 === (5)))
{var inst_27920 = (state_27976[(7)]);var inst_27923 = cljs.core.seq_QMARK_.call(null,inst_27920);var state_27976__$1 = state_27976;if(inst_27923)
{var statearr_28005_28045 = state_27976__$1;(statearr_28005_28045[(1)] = (7));
} else
{var statearr_28006_28046 = state_27976__$1;(statearr_28006_28046[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (14)))
{var inst_27936 = (state_27976[(16)]);var inst_27943 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27936);var state_27976__$1 = state_27976;var statearr_28007_28047 = state_27976__$1;(statearr_28007_28047[(2)] = inst_27943);
(statearr_28007_28047[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (26)))
{var inst_27966 = (state_27976[(2)]);var state_27976__$1 = state_27976;var statearr_28008_28048 = state_27976__$1;(statearr_28008_28048[(2)] = inst_27966);
(statearr_28008_28048[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (16)))
{var inst_27946 = (state_27976[(2)]);var inst_27947 = calc_state.call(null);var inst_27920 = inst_27947;var state_27976__$1 = (function (){var statearr_28009 = state_27976;(statearr_28009[(7)] = inst_27920);
(statearr_28009[(18)] = inst_27946);
return statearr_28009;
})();var statearr_28010_28049 = state_27976__$1;(statearr_28010_28049[(2)] = null);
(statearr_28010_28049[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (10)))
{var inst_27935 = (state_27976[(8)]);var inst_27936 = (state_27976[(16)]);var inst_27934 = (state_27976[(2)]);var inst_27935__$1 = cljs.core.nth.call(null,inst_27934,(0),null);var inst_27936__$1 = cljs.core.nth.call(null,inst_27934,(1),null);var inst_27937 = (inst_27935__$1 == null);var inst_27938 = cljs.core._EQ_.call(null,inst_27936__$1,change);var inst_27939 = (inst_27937) || (inst_27938);var state_27976__$1 = (function (){var statearr_28011 = state_27976;(statearr_28011[(8)] = inst_27935__$1);
(statearr_28011[(16)] = inst_27936__$1);
return statearr_28011;
})();if(cljs.core.truth_(inst_27939))
{var statearr_28012_28050 = state_27976__$1;(statearr_28012_28050[(1)] = (11));
} else
{var statearr_28013_28051 = state_27976__$1;(statearr_28013_28051[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (18)))
{var inst_27931 = (state_27976[(15)]);var inst_27936 = (state_27976[(16)]);var inst_27930 = (state_27976[(17)]);var inst_27953 = cljs.core.empty_QMARK_.call(null,inst_27931);var inst_27954 = inst_27930.call(null,inst_27936);var inst_27955 = cljs.core.not.call(null,inst_27954);var inst_27956 = (inst_27953) && (inst_27955);var state_27976__$1 = state_27976;var statearr_28014_28052 = state_27976__$1;(statearr_28014_28052[(2)] = inst_27956);
(statearr_28014_28052[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27977 === (8)))
{var inst_27920 = (state_27976[(7)]);var state_27976__$1 = state_27976;var statearr_28015_28053 = state_27976__$1;(statearr_28015_28053[(2)] = inst_27920);
(statearr_28015_28053[(1)] = (9));
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
});})(c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15974__auto__,c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28019[(0)] = state_machine__15975__auto__);
(statearr_28019[(1)] = (1));
return statearr_28019;
});
var state_machine__15975__auto____1 = (function (state_27976){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_27976);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object))
{var ex__15978__auto__ = e28020;var statearr_28021_28054 = state_27976;(statearr_28021_28054[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28020;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28055 = state_27976;
state_27976 = G__28055;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_27976){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_27976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15991__auto__ = (function (){var statearr_28022 = f__15990__auto__.call(null);(statearr_28022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28023);
return statearr_28022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28023,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj28057 = {};return obj28057;
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
return (function (p1__28058_SHARP_){if(cljs.core.truth_(p1__28058_SHARP_.call(null,topic)))
{return p1__28058_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28058_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28181 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28182){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28182 = meta28182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28181.cljs$lang$type = true;
cljs.core.async.t28181.cljs$lang$ctorStr = "cljs.core.async/t28181";
cljs.core.async.t28181.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28181");
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28181.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28181.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28183){var self__ = this;
var _28183__$1 = this;return self__.meta28182;
});})(mults,ensure_mult))
;
cljs.core.async.t28181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28183,meta28182__$1){var self__ = this;
var _28183__$1 = this;return (new cljs.core.async.t28181(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28182__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28181 = ((function (mults,ensure_mult){
return (function __GT_t28181(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28182){return (new cljs.core.async.t28181(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28182));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28181(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15989__auto___28303 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28303,mults,ensure_mult,p){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28303,mults,ensure_mult,p){
return (function (state_28255){var state_val_28256 = (state_28255[(1)]);if((state_val_28256 === (7)))
{var inst_28251 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28257_28304 = state_28255__$1;(statearr_28257_28304[(2)] = inst_28251);
(statearr_28257_28304[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (20)))
{var state_28255__$1 = state_28255;var statearr_28258_28305 = state_28255__$1;(statearr_28258_28305[(2)] = null);
(statearr_28258_28305[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (1)))
{var state_28255__$1 = state_28255;var statearr_28259_28306 = state_28255__$1;(statearr_28259_28306[(2)] = null);
(statearr_28259_28306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (24)))
{var inst_28234 = (state_28255[(7)]);var inst_28243 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28234);var state_28255__$1 = state_28255;var statearr_28260_28307 = state_28255__$1;(statearr_28260_28307[(2)] = inst_28243);
(statearr_28260_28307[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (4)))
{var inst_28186 = (state_28255[(8)]);var inst_28186__$1 = (state_28255[(2)]);var inst_28187 = (inst_28186__$1 == null);var state_28255__$1 = (function (){var statearr_28261 = state_28255;(statearr_28261[(8)] = inst_28186__$1);
return statearr_28261;
})();if(cljs.core.truth_(inst_28187))
{var statearr_28262_28308 = state_28255__$1;(statearr_28262_28308[(1)] = (5));
} else
{var statearr_28263_28309 = state_28255__$1;(statearr_28263_28309[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (15)))
{var inst_28228 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28264_28310 = state_28255__$1;(statearr_28264_28310[(2)] = inst_28228);
(statearr_28264_28310[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (21)))
{var inst_28248 = (state_28255[(2)]);var state_28255__$1 = (function (){var statearr_28265 = state_28255;(statearr_28265[(9)] = inst_28248);
return statearr_28265;
})();var statearr_28266_28311 = state_28255__$1;(statearr_28266_28311[(2)] = null);
(statearr_28266_28311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (13)))
{var inst_28210 = (state_28255[(10)]);var inst_28212 = cljs.core.chunked_seq_QMARK_.call(null,inst_28210);var state_28255__$1 = state_28255;if(inst_28212)
{var statearr_28267_28312 = state_28255__$1;(statearr_28267_28312[(1)] = (16));
} else
{var statearr_28268_28313 = state_28255__$1;(statearr_28268_28313[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (22)))
{var inst_28240 = (state_28255[(2)]);var state_28255__$1 = state_28255;if(cljs.core.truth_(inst_28240))
{var statearr_28269_28314 = state_28255__$1;(statearr_28269_28314[(1)] = (23));
} else
{var statearr_28270_28315 = state_28255__$1;(statearr_28270_28315[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (6)))
{var inst_28234 = (state_28255[(7)]);var inst_28186 = (state_28255[(8)]);var inst_28236 = (state_28255[(11)]);var inst_28234__$1 = topic_fn.call(null,inst_28186);var inst_28235 = cljs.core.deref.call(null,mults);var inst_28236__$1 = cljs.core.get.call(null,inst_28235,inst_28234__$1);var state_28255__$1 = (function (){var statearr_28271 = state_28255;(statearr_28271[(7)] = inst_28234__$1);
(statearr_28271[(11)] = inst_28236__$1);
return statearr_28271;
})();if(cljs.core.truth_(inst_28236__$1))
{var statearr_28272_28316 = state_28255__$1;(statearr_28272_28316[(1)] = (19));
} else
{var statearr_28273_28317 = state_28255__$1;(statearr_28273_28317[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (25)))
{var inst_28245 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28274_28318 = state_28255__$1;(statearr_28274_28318[(2)] = inst_28245);
(statearr_28274_28318[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (17)))
{var inst_28210 = (state_28255[(10)]);var inst_28219 = cljs.core.first.call(null,inst_28210);var inst_28220 = cljs.core.async.muxch_STAR_.call(null,inst_28219);var inst_28221 = cljs.core.async.close_BANG_.call(null,inst_28220);var inst_28222 = cljs.core.next.call(null,inst_28210);var inst_28196 = inst_28222;var inst_28197 = null;var inst_28198 = (0);var inst_28199 = (0);var state_28255__$1 = (function (){var statearr_28275 = state_28255;(statearr_28275[(12)] = inst_28196);
(statearr_28275[(13)] = inst_28199);
(statearr_28275[(14)] = inst_28221);
(statearr_28275[(15)] = inst_28197);
(statearr_28275[(16)] = inst_28198);
return statearr_28275;
})();var statearr_28276_28319 = state_28255__$1;(statearr_28276_28319[(2)] = null);
(statearr_28276_28319[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (3)))
{var inst_28253 = (state_28255[(2)]);var state_28255__$1 = state_28255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else
{if((state_val_28256 === (12)))
{var inst_28230 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28277_28320 = state_28255__$1;(statearr_28277_28320[(2)] = inst_28230);
(statearr_28277_28320[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (2)))
{var state_28255__$1 = state_28255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(4),ch);
} else
{if((state_val_28256 === (23)))
{var state_28255__$1 = state_28255;var statearr_28278_28321 = state_28255__$1;(statearr_28278_28321[(2)] = null);
(statearr_28278_28321[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (19)))
{var inst_28186 = (state_28255[(8)]);var inst_28236 = (state_28255[(11)]);var inst_28238 = cljs.core.async.muxch_STAR_.call(null,inst_28236);var state_28255__$1 = state_28255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28255__$1,(22),inst_28238,inst_28186);
} else
{if((state_val_28256 === (11)))
{var inst_28196 = (state_28255[(12)]);var inst_28210 = (state_28255[(10)]);var inst_28210__$1 = cljs.core.seq.call(null,inst_28196);var state_28255__$1 = (function (){var statearr_28279 = state_28255;(statearr_28279[(10)] = inst_28210__$1);
return statearr_28279;
})();if(inst_28210__$1)
{var statearr_28280_28322 = state_28255__$1;(statearr_28280_28322[(1)] = (13));
} else
{var statearr_28281_28323 = state_28255__$1;(statearr_28281_28323[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (9)))
{var inst_28232 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28282_28324 = state_28255__$1;(statearr_28282_28324[(2)] = inst_28232);
(statearr_28282_28324[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (5)))
{var inst_28193 = cljs.core.deref.call(null,mults);var inst_28194 = cljs.core.vals.call(null,inst_28193);var inst_28195 = cljs.core.seq.call(null,inst_28194);var inst_28196 = inst_28195;var inst_28197 = null;var inst_28198 = (0);var inst_28199 = (0);var state_28255__$1 = (function (){var statearr_28283 = state_28255;(statearr_28283[(12)] = inst_28196);
(statearr_28283[(13)] = inst_28199);
(statearr_28283[(15)] = inst_28197);
(statearr_28283[(16)] = inst_28198);
return statearr_28283;
})();var statearr_28284_28325 = state_28255__$1;(statearr_28284_28325[(2)] = null);
(statearr_28284_28325[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (14)))
{var state_28255__$1 = state_28255;var statearr_28288_28326 = state_28255__$1;(statearr_28288_28326[(2)] = null);
(statearr_28288_28326[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (16)))
{var inst_28210 = (state_28255[(10)]);var inst_28214 = cljs.core.chunk_first.call(null,inst_28210);var inst_28215 = cljs.core.chunk_rest.call(null,inst_28210);var inst_28216 = cljs.core.count.call(null,inst_28214);var inst_28196 = inst_28215;var inst_28197 = inst_28214;var inst_28198 = inst_28216;var inst_28199 = (0);var state_28255__$1 = (function (){var statearr_28289 = state_28255;(statearr_28289[(12)] = inst_28196);
(statearr_28289[(13)] = inst_28199);
(statearr_28289[(15)] = inst_28197);
(statearr_28289[(16)] = inst_28198);
return statearr_28289;
})();var statearr_28290_28327 = state_28255__$1;(statearr_28290_28327[(2)] = null);
(statearr_28290_28327[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (10)))
{var inst_28196 = (state_28255[(12)]);var inst_28199 = (state_28255[(13)]);var inst_28197 = (state_28255[(15)]);var inst_28198 = (state_28255[(16)]);var inst_28204 = cljs.core._nth.call(null,inst_28197,inst_28199);var inst_28205 = cljs.core.async.muxch_STAR_.call(null,inst_28204);var inst_28206 = cljs.core.async.close_BANG_.call(null,inst_28205);var inst_28207 = (inst_28199 + (1));var tmp28285 = inst_28196;var tmp28286 = inst_28197;var tmp28287 = inst_28198;var inst_28196__$1 = tmp28285;var inst_28197__$1 = tmp28286;var inst_28198__$1 = tmp28287;var inst_28199__$1 = inst_28207;var state_28255__$1 = (function (){var statearr_28291 = state_28255;(statearr_28291[(17)] = inst_28206);
(statearr_28291[(12)] = inst_28196__$1);
(statearr_28291[(13)] = inst_28199__$1);
(statearr_28291[(15)] = inst_28197__$1);
(statearr_28291[(16)] = inst_28198__$1);
return statearr_28291;
})();var statearr_28292_28328 = state_28255__$1;(statearr_28292_28328[(2)] = null);
(statearr_28292_28328[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (18)))
{var inst_28225 = (state_28255[(2)]);var state_28255__$1 = state_28255;var statearr_28293_28329 = state_28255__$1;(statearr_28293_28329[(2)] = inst_28225);
(statearr_28293_28329[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28256 === (8)))
{var inst_28199 = (state_28255[(13)]);var inst_28198 = (state_28255[(16)]);var inst_28201 = (inst_28199 < inst_28198);var inst_28202 = inst_28201;var state_28255__$1 = state_28255;if(cljs.core.truth_(inst_28202))
{var statearr_28294_28330 = state_28255__$1;(statearr_28294_28330[(1)] = (10));
} else
{var statearr_28295_28331 = state_28255__$1;(statearr_28295_28331[(1)] = (11));
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
});})(c__15989__auto___28303,mults,ensure_mult,p))
;return ((function (switch__15974__auto__,c__15989__auto___28303,mults,ensure_mult,p){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28299[(0)] = state_machine__15975__auto__);
(statearr_28299[(1)] = (1));
return statearr_28299;
});
var state_machine__15975__auto____1 = (function (state_28255){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28255);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28300){if((e28300 instanceof Object))
{var ex__15978__auto__ = e28300;var statearr_28301_28332 = state_28255;(statearr_28301_28332[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28300;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28333 = state_28255;
state_28255 = G__28333;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28303,mults,ensure_mult,p))
})();var state__15991__auto__ = (function (){var statearr_28302 = f__15990__auto__.call(null);(statearr_28302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28303);
return statearr_28302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28303,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15989__auto___28470 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28440){var state_val_28441 = (state_28440[(1)]);if((state_val_28441 === (7)))
{var state_28440__$1 = state_28440;var statearr_28442_28471 = state_28440__$1;(statearr_28442_28471[(2)] = null);
(statearr_28442_28471[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (1)))
{var state_28440__$1 = state_28440;var statearr_28443_28472 = state_28440__$1;(statearr_28443_28472[(2)] = null);
(statearr_28443_28472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (4)))
{var inst_28404 = (state_28440[(7)]);var inst_28406 = (inst_28404 < cnt);var state_28440__$1 = state_28440;if(cljs.core.truth_(inst_28406))
{var statearr_28444_28473 = state_28440__$1;(statearr_28444_28473[(1)] = (6));
} else
{var statearr_28445_28474 = state_28440__$1;(statearr_28445_28474[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (15)))
{var inst_28436 = (state_28440[(2)]);var state_28440__$1 = state_28440;var statearr_28446_28475 = state_28440__$1;(statearr_28446_28475[(2)] = inst_28436);
(statearr_28446_28475[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (13)))
{var inst_28429 = cljs.core.async.close_BANG_.call(null,out);var state_28440__$1 = state_28440;var statearr_28447_28476 = state_28440__$1;(statearr_28447_28476[(2)] = inst_28429);
(statearr_28447_28476[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (6)))
{var state_28440__$1 = state_28440;var statearr_28448_28477 = state_28440__$1;(statearr_28448_28477[(2)] = null);
(statearr_28448_28477[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (3)))
{var inst_28438 = (state_28440[(2)]);var state_28440__$1 = state_28440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28440__$1,inst_28438);
} else
{if((state_val_28441 === (12)))
{var inst_28426 = (state_28440[(8)]);var inst_28426__$1 = (state_28440[(2)]);var inst_28427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28426__$1);var state_28440__$1 = (function (){var statearr_28449 = state_28440;(statearr_28449[(8)] = inst_28426__$1);
return statearr_28449;
})();if(cljs.core.truth_(inst_28427))
{var statearr_28450_28478 = state_28440__$1;(statearr_28450_28478[(1)] = (13));
} else
{var statearr_28451_28479 = state_28440__$1;(statearr_28451_28479[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (2)))
{var inst_28403 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28404 = (0);var state_28440__$1 = (function (){var statearr_28452 = state_28440;(statearr_28452[(9)] = inst_28403);
(statearr_28452[(7)] = inst_28404);
return statearr_28452;
})();var statearr_28453_28480 = state_28440__$1;(statearr_28453_28480[(2)] = null);
(statearr_28453_28480[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (11)))
{var inst_28404 = (state_28440[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28440,(10),Object,null,(9));var inst_28413 = chs__$1.call(null,inst_28404);var inst_28414 = done.call(null,inst_28404);var inst_28415 = cljs.core.async.take_BANG_.call(null,inst_28413,inst_28414);var state_28440__$1 = state_28440;var statearr_28454_28481 = state_28440__$1;(statearr_28454_28481[(2)] = inst_28415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28440__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (9)))
{var inst_28404 = (state_28440[(7)]);var inst_28417 = (state_28440[(2)]);var inst_28418 = (inst_28404 + (1));var inst_28404__$1 = inst_28418;var state_28440__$1 = (function (){var statearr_28455 = state_28440;(statearr_28455[(10)] = inst_28417);
(statearr_28455[(7)] = inst_28404__$1);
return statearr_28455;
})();var statearr_28456_28482 = state_28440__$1;(statearr_28456_28482[(2)] = null);
(statearr_28456_28482[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (5)))
{var inst_28424 = (state_28440[(2)]);var state_28440__$1 = (function (){var statearr_28457 = state_28440;(statearr_28457[(11)] = inst_28424);
return statearr_28457;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28440__$1,(12),dchan);
} else
{if((state_val_28441 === (14)))
{var inst_28426 = (state_28440[(8)]);var inst_28431 = cljs.core.apply.call(null,f,inst_28426);var state_28440__$1 = state_28440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28440__$1,(16),out,inst_28431);
} else
{if((state_val_28441 === (16)))
{var inst_28433 = (state_28440[(2)]);var state_28440__$1 = (function (){var statearr_28458 = state_28440;(statearr_28458[(12)] = inst_28433);
return statearr_28458;
})();var statearr_28459_28483 = state_28440__$1;(statearr_28459_28483[(2)] = null);
(statearr_28459_28483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (10)))
{var inst_28408 = (state_28440[(2)]);var inst_28409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28440__$1 = (function (){var statearr_28460 = state_28440;(statearr_28460[(13)] = inst_28408);
return statearr_28460;
})();var statearr_28461_28484 = state_28440__$1;(statearr_28461_28484[(2)] = inst_28409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28440__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28441 === (8)))
{var inst_28422 = (state_28440[(2)]);var state_28440__$1 = state_28440;var statearr_28462_28485 = state_28440__$1;(statearr_28462_28485[(2)] = inst_28422);
(statearr_28462_28485[(1)] = (5));
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
});})(c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15974__auto__,c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28466[(0)] = state_machine__15975__auto__);
(statearr_28466[(1)] = (1));
return statearr_28466;
});
var state_machine__15975__auto____1 = (function (state_28440){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28440);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28467){if((e28467 instanceof Object))
{var ex__15978__auto__ = e28467;var statearr_28468_28486 = state_28440;(statearr_28468_28486[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28467;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28487 = state_28440;
state_28440 = G__28487;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28440){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15991__auto__ = (function (){var statearr_28469 = f__15990__auto__.call(null);(statearr_28469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28470);
return statearr_28469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28470,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___28595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28595,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28595,out){
return (function (state_28571){var state_val_28572 = (state_28571[(1)]);if((state_val_28572 === (7)))
{var inst_28550 = (state_28571[(7)]);var inst_28551 = (state_28571[(8)]);var inst_28550__$1 = (state_28571[(2)]);var inst_28551__$1 = cljs.core.nth.call(null,inst_28550__$1,(0),null);var inst_28552 = cljs.core.nth.call(null,inst_28550__$1,(1),null);var inst_28553 = (inst_28551__$1 == null);var state_28571__$1 = (function (){var statearr_28573 = state_28571;(statearr_28573[(9)] = inst_28552);
(statearr_28573[(7)] = inst_28550__$1);
(statearr_28573[(8)] = inst_28551__$1);
return statearr_28573;
})();if(cljs.core.truth_(inst_28553))
{var statearr_28574_28596 = state_28571__$1;(statearr_28574_28596[(1)] = (8));
} else
{var statearr_28575_28597 = state_28571__$1;(statearr_28575_28597[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (1)))
{var inst_28542 = cljs.core.vec.call(null,chs);var inst_28543 = inst_28542;var state_28571__$1 = (function (){var statearr_28576 = state_28571;(statearr_28576[(10)] = inst_28543);
return statearr_28576;
})();var statearr_28577_28598 = state_28571__$1;(statearr_28577_28598[(2)] = null);
(statearr_28577_28598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (4)))
{var inst_28543 = (state_28571[(10)]);var state_28571__$1 = state_28571;return cljs.core.async.ioc_alts_BANG_.call(null,state_28571__$1,(7),inst_28543);
} else
{if((state_val_28572 === (6)))
{var inst_28567 = (state_28571[(2)]);var state_28571__$1 = state_28571;var statearr_28578_28599 = state_28571__$1;(statearr_28578_28599[(2)] = inst_28567);
(statearr_28578_28599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (3)))
{var inst_28569 = (state_28571[(2)]);var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28571__$1,inst_28569);
} else
{if((state_val_28572 === (2)))
{var inst_28543 = (state_28571[(10)]);var inst_28545 = cljs.core.count.call(null,inst_28543);var inst_28546 = (inst_28545 > (0));var state_28571__$1 = state_28571;if(cljs.core.truth_(inst_28546))
{var statearr_28580_28600 = state_28571__$1;(statearr_28580_28600[(1)] = (4));
} else
{var statearr_28581_28601 = state_28571__$1;(statearr_28581_28601[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (11)))
{var inst_28543 = (state_28571[(10)]);var inst_28560 = (state_28571[(2)]);var tmp28579 = inst_28543;var inst_28543__$1 = tmp28579;var state_28571__$1 = (function (){var statearr_28582 = state_28571;(statearr_28582[(11)] = inst_28560);
(statearr_28582[(10)] = inst_28543__$1);
return statearr_28582;
})();var statearr_28583_28602 = state_28571__$1;(statearr_28583_28602[(2)] = null);
(statearr_28583_28602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (9)))
{var inst_28551 = (state_28571[(8)]);var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28571__$1,(11),out,inst_28551);
} else
{if((state_val_28572 === (5)))
{var inst_28565 = cljs.core.async.close_BANG_.call(null,out);var state_28571__$1 = state_28571;var statearr_28584_28603 = state_28571__$1;(statearr_28584_28603[(2)] = inst_28565);
(statearr_28584_28603[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (10)))
{var inst_28563 = (state_28571[(2)]);var state_28571__$1 = state_28571;var statearr_28585_28604 = state_28571__$1;(statearr_28585_28604[(2)] = inst_28563);
(statearr_28585_28604[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28572 === (8)))
{var inst_28552 = (state_28571[(9)]);var inst_28550 = (state_28571[(7)]);var inst_28551 = (state_28571[(8)]);var inst_28543 = (state_28571[(10)]);var inst_28555 = (function (){var c = inst_28552;var v = inst_28551;var vec__28548 = inst_28550;var cs = inst_28543;return ((function (c,v,vec__28548,cs,inst_28552,inst_28550,inst_28551,inst_28543,state_val_28572,c__15989__auto___28595,out){
return (function (p1__28488_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28488_SHARP_);
});
;})(c,v,vec__28548,cs,inst_28552,inst_28550,inst_28551,inst_28543,state_val_28572,c__15989__auto___28595,out))
})();var inst_28556 = cljs.core.filterv.call(null,inst_28555,inst_28543);var inst_28543__$1 = inst_28556;var state_28571__$1 = (function (){var statearr_28586 = state_28571;(statearr_28586[(10)] = inst_28543__$1);
return statearr_28586;
})();var statearr_28587_28605 = state_28571__$1;(statearr_28587_28605[(2)] = null);
(statearr_28587_28605[(1)] = (2));
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
});})(c__15989__auto___28595,out))
;return ((function (switch__15974__auto__,c__15989__auto___28595,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28591 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28591[(0)] = state_machine__15975__auto__);
(statearr_28591[(1)] = (1));
return statearr_28591;
});
var state_machine__15975__auto____1 = (function (state_28571){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28571);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28592){if((e28592 instanceof Object))
{var ex__15978__auto__ = e28592;var statearr_28593_28606 = state_28571;(statearr_28593_28606[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28607 = state_28571;
state_28571 = G__28607;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28571){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28595,out))
})();var state__15991__auto__ = (function (){var statearr_28594 = f__15990__auto__.call(null);(statearr_28594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28595);
return statearr_28594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28595,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___28700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28700,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28700,out){
return (function (state_28677){var state_val_28678 = (state_28677[(1)]);if((state_val_28678 === (7)))
{var inst_28659 = (state_28677[(7)]);var inst_28659__$1 = (state_28677[(2)]);var inst_28660 = (inst_28659__$1 == null);var inst_28661 = cljs.core.not.call(null,inst_28660);var state_28677__$1 = (function (){var statearr_28679 = state_28677;(statearr_28679[(7)] = inst_28659__$1);
return statearr_28679;
})();if(inst_28661)
{var statearr_28680_28701 = state_28677__$1;(statearr_28680_28701[(1)] = (8));
} else
{var statearr_28681_28702 = state_28677__$1;(statearr_28681_28702[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (1)))
{var inst_28654 = (0);var state_28677__$1 = (function (){var statearr_28682 = state_28677;(statearr_28682[(8)] = inst_28654);
return statearr_28682;
})();var statearr_28683_28703 = state_28677__$1;(statearr_28683_28703[(2)] = null);
(statearr_28683_28703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (4)))
{var state_28677__$1 = state_28677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28677__$1,(7),ch);
} else
{if((state_val_28678 === (6)))
{var inst_28672 = (state_28677[(2)]);var state_28677__$1 = state_28677;var statearr_28684_28704 = state_28677__$1;(statearr_28684_28704[(2)] = inst_28672);
(statearr_28684_28704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (3)))
{var inst_28674 = (state_28677[(2)]);var inst_28675 = cljs.core.async.close_BANG_.call(null,out);var state_28677__$1 = (function (){var statearr_28685 = state_28677;(statearr_28685[(9)] = inst_28674);
return statearr_28685;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28677__$1,inst_28675);
} else
{if((state_val_28678 === (2)))
{var inst_28654 = (state_28677[(8)]);var inst_28656 = (inst_28654 < n);var state_28677__$1 = state_28677;if(cljs.core.truth_(inst_28656))
{var statearr_28686_28705 = state_28677__$1;(statearr_28686_28705[(1)] = (4));
} else
{var statearr_28687_28706 = state_28677__$1;(statearr_28687_28706[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (11)))
{var inst_28654 = (state_28677[(8)]);var inst_28664 = (state_28677[(2)]);var inst_28665 = (inst_28654 + (1));var inst_28654__$1 = inst_28665;var state_28677__$1 = (function (){var statearr_28688 = state_28677;(statearr_28688[(8)] = inst_28654__$1);
(statearr_28688[(10)] = inst_28664);
return statearr_28688;
})();var statearr_28689_28707 = state_28677__$1;(statearr_28689_28707[(2)] = null);
(statearr_28689_28707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (9)))
{var state_28677__$1 = state_28677;var statearr_28690_28708 = state_28677__$1;(statearr_28690_28708[(2)] = null);
(statearr_28690_28708[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (5)))
{var state_28677__$1 = state_28677;var statearr_28691_28709 = state_28677__$1;(statearr_28691_28709[(2)] = null);
(statearr_28691_28709[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (10)))
{var inst_28669 = (state_28677[(2)]);var state_28677__$1 = state_28677;var statearr_28692_28710 = state_28677__$1;(statearr_28692_28710[(2)] = inst_28669);
(statearr_28692_28710[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28678 === (8)))
{var inst_28659 = (state_28677[(7)]);var state_28677__$1 = state_28677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28677__$1,(11),out,inst_28659);
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
});})(c__15989__auto___28700,out))
;return ((function (switch__15974__auto__,c__15989__auto___28700,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28696 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28696[(0)] = state_machine__15975__auto__);
(statearr_28696[(1)] = (1));
return statearr_28696;
});
var state_machine__15975__auto____1 = (function (state_28677){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28677);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28697){if((e28697 instanceof Object))
{var ex__15978__auto__ = e28697;var statearr_28698_28711 = state_28677;(statearr_28698_28711[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28712 = state_28677;
state_28677 = G__28712;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28677){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28700,out))
})();var state__15991__auto__ = (function (){var statearr_28699 = f__15990__auto__.call(null);(statearr_28699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28700);
return statearr_28699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28700,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28720 = (function (ch,f,map_LT_,meta28721){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28721 = meta28721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28720.cljs$lang$type = true;
cljs.core.async.t28720.cljs$lang$ctorStr = "cljs.core.async/t28720";
cljs.core.async.t28720.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28720");
});
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28723 = (function (fn1,_,meta28721,ch,f,map_LT_,meta28724){
this.fn1 = fn1;
this._ = _;
this.meta28721 = meta28721;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28724 = meta28724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28723.cljs$lang$type = true;
cljs.core.async.t28723.cljs$lang$ctorStr = "cljs.core.async/t28723";
cljs.core.async.t28723.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28723");
});})(___$1))
;
cljs.core.async.t28723.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28713_SHARP_){return f1.call(null,(((p1__28713_SHARP_ == null))?null:self__.f.call(null,p1__28713_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28725){var self__ = this;
var _28725__$1 = this;return self__.meta28724;
});})(___$1))
;
cljs.core.async.t28723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28725,meta28724__$1){var self__ = this;
var _28725__$1 = this;return (new cljs.core.async.t28723(self__.fn1,self__._,self__.meta28721,self__.ch,self__.f,self__.map_LT_,meta28724__$1));
});})(___$1))
;
cljs.core.async.__GT_t28723 = ((function (___$1){
return (function __GT_t28723(fn1__$1,___$2,meta28721__$1,ch__$2,f__$2,map_LT___$2,meta28724){return (new cljs.core.async.t28723(fn1__$1,___$2,meta28721__$1,ch__$2,f__$2,map_LT___$2,meta28724));
});})(___$1))
;
}
return (new cljs.core.async.t28723(fn1,___$1,self__.meta28721,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28720.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28722){var self__ = this;
var _28722__$1 = this;return self__.meta28721;
});
cljs.core.async.t28720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28722,meta28721__$1){var self__ = this;
var _28722__$1 = this;return (new cljs.core.async.t28720(self__.ch,self__.f,self__.map_LT_,meta28721__$1));
});
cljs.core.async.__GT_t28720 = (function __GT_t28720(ch__$1,f__$1,map_LT___$1,meta28721){return (new cljs.core.async.t28720(ch__$1,f__$1,map_LT___$1,meta28721));
});
}
return (new cljs.core.async.t28720(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28729 = (function (ch,f,map_GT_,meta28730){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28730 = meta28730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28729.cljs$lang$type = true;
cljs.core.async.t28729.cljs$lang$ctorStr = "cljs.core.async/t28729";
cljs.core.async.t28729.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28729");
});
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28731){var self__ = this;
var _28731__$1 = this;return self__.meta28730;
});
cljs.core.async.t28729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28731,meta28730__$1){var self__ = this;
var _28731__$1 = this;return (new cljs.core.async.t28729(self__.ch,self__.f,self__.map_GT_,meta28730__$1));
});
cljs.core.async.__GT_t28729 = (function __GT_t28729(ch__$1,f__$1,map_GT___$1,meta28730){return (new cljs.core.async.t28729(ch__$1,f__$1,map_GT___$1,meta28730));
});
}
return (new cljs.core.async.t28729(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28735 = (function (ch,p,filter_GT_,meta28736){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28736 = meta28736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28735.cljs$lang$type = true;
cljs.core.async.t28735.cljs$lang$ctorStr = "cljs.core.async/t28735";
cljs.core.async.t28735.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"cljs.core.async/t28735");
});
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28735.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28737){var self__ = this;
var _28737__$1 = this;return self__.meta28736;
});
cljs.core.async.t28735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28737,meta28736__$1){var self__ = this;
var _28737__$1 = this;return (new cljs.core.async.t28735(self__.ch,self__.p,self__.filter_GT_,meta28736__$1));
});
cljs.core.async.__GT_t28735 = (function __GT_t28735(ch__$1,p__$1,filter_GT___$1,meta28736){return (new cljs.core.async.t28735(ch__$1,p__$1,filter_GT___$1,meta28736));
});
}
return (new cljs.core.async.t28735(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___28820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___28820,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___28820,out){
return (function (state_28799){var state_val_28800 = (state_28799[(1)]);if((state_val_28800 === (7)))
{var inst_28795 = (state_28799[(2)]);var state_28799__$1 = state_28799;var statearr_28801_28821 = state_28799__$1;(statearr_28801_28821[(2)] = inst_28795);
(statearr_28801_28821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (1)))
{var state_28799__$1 = state_28799;var statearr_28802_28822 = state_28799__$1;(statearr_28802_28822[(2)] = null);
(statearr_28802_28822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (4)))
{var inst_28781 = (state_28799[(7)]);var inst_28781__$1 = (state_28799[(2)]);var inst_28782 = (inst_28781__$1 == null);var state_28799__$1 = (function (){var statearr_28803 = state_28799;(statearr_28803[(7)] = inst_28781__$1);
return statearr_28803;
})();if(cljs.core.truth_(inst_28782))
{var statearr_28804_28823 = state_28799__$1;(statearr_28804_28823[(1)] = (5));
} else
{var statearr_28805_28824 = state_28799__$1;(statearr_28805_28824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (6)))
{var inst_28781 = (state_28799[(7)]);var inst_28786 = p.call(null,inst_28781);var state_28799__$1 = state_28799;if(cljs.core.truth_(inst_28786))
{var statearr_28806_28825 = state_28799__$1;(statearr_28806_28825[(1)] = (8));
} else
{var statearr_28807_28826 = state_28799__$1;(statearr_28807_28826[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (3)))
{var inst_28797 = (state_28799[(2)]);var state_28799__$1 = state_28799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28799__$1,inst_28797);
} else
{if((state_val_28800 === (2)))
{var state_28799__$1 = state_28799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28799__$1,(4),ch);
} else
{if((state_val_28800 === (11)))
{var inst_28789 = (state_28799[(2)]);var state_28799__$1 = state_28799;var statearr_28808_28827 = state_28799__$1;(statearr_28808_28827[(2)] = inst_28789);
(statearr_28808_28827[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (9)))
{var state_28799__$1 = state_28799;var statearr_28809_28828 = state_28799__$1;(statearr_28809_28828[(2)] = null);
(statearr_28809_28828[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (5)))
{var inst_28784 = cljs.core.async.close_BANG_.call(null,out);var state_28799__$1 = state_28799;var statearr_28810_28829 = state_28799__$1;(statearr_28810_28829[(2)] = inst_28784);
(statearr_28810_28829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (10)))
{var inst_28792 = (state_28799[(2)]);var state_28799__$1 = (function (){var statearr_28811 = state_28799;(statearr_28811[(8)] = inst_28792);
return statearr_28811;
})();var statearr_28812_28830 = state_28799__$1;(statearr_28812_28830[(2)] = null);
(statearr_28812_28830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28800 === (8)))
{var inst_28781 = (state_28799[(7)]);var state_28799__$1 = state_28799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28799__$1,(11),out,inst_28781);
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
});})(c__15989__auto___28820,out))
;return ((function (switch__15974__auto__,c__15989__auto___28820,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_28816 = [null,null,null,null,null,null,null,null,null];(statearr_28816[(0)] = state_machine__15975__auto__);
(statearr_28816[(1)] = (1));
return statearr_28816;
});
var state_machine__15975__auto____1 = (function (state_28799){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28799);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e28817){if((e28817 instanceof Object))
{var ex__15978__auto__ = e28817;var statearr_28818_28831 = state_28799;(statearr_28818_28831[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28832 = state_28799;
state_28799 = G__28832;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28799){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___28820,out))
})();var state__15991__auto__ = (function (){var statearr_28819 = f__15990__auto__.call(null);(statearr_28819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___28820);
return statearr_28819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___28820,out))
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
return (function (state_28998){var state_val_28999 = (state_28998[(1)]);if((state_val_28999 === (7)))
{var inst_28994 = (state_28998[(2)]);var state_28998__$1 = state_28998;var statearr_29000_29041 = state_28998__$1;(statearr_29000_29041[(2)] = inst_28994);
(statearr_29000_29041[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (20)))
{var inst_28964 = (state_28998[(7)]);var inst_28975 = (state_28998[(2)]);var inst_28976 = cljs.core.next.call(null,inst_28964);var inst_28950 = inst_28976;var inst_28951 = null;var inst_28952 = (0);var inst_28953 = (0);var state_28998__$1 = (function (){var statearr_29001 = state_28998;(statearr_29001[(8)] = inst_28951);
(statearr_29001[(9)] = inst_28975);
(statearr_29001[(10)] = inst_28952);
(statearr_29001[(11)] = inst_28950);
(statearr_29001[(12)] = inst_28953);
return statearr_29001;
})();var statearr_29002_29042 = state_28998__$1;(statearr_29002_29042[(2)] = null);
(statearr_29002_29042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (1)))
{var state_28998__$1 = state_28998;var statearr_29003_29043 = state_28998__$1;(statearr_29003_29043[(2)] = null);
(statearr_29003_29043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (4)))
{var inst_28939 = (state_28998[(13)]);var inst_28939__$1 = (state_28998[(2)]);var inst_28940 = (inst_28939__$1 == null);var state_28998__$1 = (function (){var statearr_29004 = state_28998;(statearr_29004[(13)] = inst_28939__$1);
return statearr_29004;
})();if(cljs.core.truth_(inst_28940))
{var statearr_29005_29044 = state_28998__$1;(statearr_29005_29044[(1)] = (5));
} else
{var statearr_29006_29045 = state_28998__$1;(statearr_29006_29045[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (15)))
{var state_28998__$1 = state_28998;var statearr_29010_29046 = state_28998__$1;(statearr_29010_29046[(2)] = null);
(statearr_29010_29046[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (21)))
{var state_28998__$1 = state_28998;var statearr_29011_29047 = state_28998__$1;(statearr_29011_29047[(2)] = null);
(statearr_29011_29047[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (13)))
{var inst_28951 = (state_28998[(8)]);var inst_28952 = (state_28998[(10)]);var inst_28950 = (state_28998[(11)]);var inst_28953 = (state_28998[(12)]);var inst_28960 = (state_28998[(2)]);var inst_28961 = (inst_28953 + (1));var tmp29007 = inst_28951;var tmp29008 = inst_28952;var tmp29009 = inst_28950;var inst_28950__$1 = tmp29009;var inst_28951__$1 = tmp29007;var inst_28952__$1 = tmp29008;var inst_28953__$1 = inst_28961;var state_28998__$1 = (function (){var statearr_29012 = state_28998;(statearr_29012[(8)] = inst_28951__$1);
(statearr_29012[(14)] = inst_28960);
(statearr_29012[(10)] = inst_28952__$1);
(statearr_29012[(11)] = inst_28950__$1);
(statearr_29012[(12)] = inst_28953__$1);
return statearr_29012;
})();var statearr_29013_29048 = state_28998__$1;(statearr_29013_29048[(2)] = null);
(statearr_29013_29048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (22)))
{var state_28998__$1 = state_28998;var statearr_29014_29049 = state_28998__$1;(statearr_29014_29049[(2)] = null);
(statearr_29014_29049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (6)))
{var inst_28939 = (state_28998[(13)]);var inst_28948 = f.call(null,inst_28939);var inst_28949 = cljs.core.seq.call(null,inst_28948);var inst_28950 = inst_28949;var inst_28951 = null;var inst_28952 = (0);var inst_28953 = (0);var state_28998__$1 = (function (){var statearr_29015 = state_28998;(statearr_29015[(8)] = inst_28951);
(statearr_29015[(10)] = inst_28952);
(statearr_29015[(11)] = inst_28950);
(statearr_29015[(12)] = inst_28953);
return statearr_29015;
})();var statearr_29016_29050 = state_28998__$1;(statearr_29016_29050[(2)] = null);
(statearr_29016_29050[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (17)))
{var inst_28964 = (state_28998[(7)]);var inst_28968 = cljs.core.chunk_first.call(null,inst_28964);var inst_28969 = cljs.core.chunk_rest.call(null,inst_28964);var inst_28970 = cljs.core.count.call(null,inst_28968);var inst_28950 = inst_28969;var inst_28951 = inst_28968;var inst_28952 = inst_28970;var inst_28953 = (0);var state_28998__$1 = (function (){var statearr_29017 = state_28998;(statearr_29017[(8)] = inst_28951);
(statearr_29017[(10)] = inst_28952);
(statearr_29017[(11)] = inst_28950);
(statearr_29017[(12)] = inst_28953);
return statearr_29017;
})();var statearr_29018_29051 = state_28998__$1;(statearr_29018_29051[(2)] = null);
(statearr_29018_29051[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (3)))
{var inst_28996 = (state_28998[(2)]);var state_28998__$1 = state_28998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28998__$1,inst_28996);
} else
{if((state_val_28999 === (12)))
{var inst_28984 = (state_28998[(2)]);var state_28998__$1 = state_28998;var statearr_29019_29052 = state_28998__$1;(statearr_29019_29052[(2)] = inst_28984);
(statearr_29019_29052[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (2)))
{var state_28998__$1 = state_28998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28998__$1,(4),in$);
} else
{if((state_val_28999 === (23)))
{var inst_28992 = (state_28998[(2)]);var state_28998__$1 = state_28998;var statearr_29020_29053 = state_28998__$1;(statearr_29020_29053[(2)] = inst_28992);
(statearr_29020_29053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (19)))
{var inst_28979 = (state_28998[(2)]);var state_28998__$1 = state_28998;var statearr_29021_29054 = state_28998__$1;(statearr_29021_29054[(2)] = inst_28979);
(statearr_29021_29054[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (11)))
{var inst_28964 = (state_28998[(7)]);var inst_28950 = (state_28998[(11)]);var inst_28964__$1 = cljs.core.seq.call(null,inst_28950);var state_28998__$1 = (function (){var statearr_29022 = state_28998;(statearr_29022[(7)] = inst_28964__$1);
return statearr_29022;
})();if(inst_28964__$1)
{var statearr_29023_29055 = state_28998__$1;(statearr_29023_29055[(1)] = (14));
} else
{var statearr_29024_29056 = state_28998__$1;(statearr_29024_29056[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (9)))
{var inst_28986 = (state_28998[(2)]);var inst_28987 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28998__$1 = (function (){var statearr_29025 = state_28998;(statearr_29025[(15)] = inst_28986);
return statearr_29025;
})();if(cljs.core.truth_(inst_28987))
{var statearr_29026_29057 = state_28998__$1;(statearr_29026_29057[(1)] = (21));
} else
{var statearr_29027_29058 = state_28998__$1;(statearr_29027_29058[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (5)))
{var inst_28942 = cljs.core.async.close_BANG_.call(null,out);var state_28998__$1 = state_28998;var statearr_29028_29059 = state_28998__$1;(statearr_29028_29059[(2)] = inst_28942);
(statearr_29028_29059[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (14)))
{var inst_28964 = (state_28998[(7)]);var inst_28966 = cljs.core.chunked_seq_QMARK_.call(null,inst_28964);var state_28998__$1 = state_28998;if(inst_28966)
{var statearr_29029_29060 = state_28998__$1;(statearr_29029_29060[(1)] = (17));
} else
{var statearr_29030_29061 = state_28998__$1;(statearr_29030_29061[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (16)))
{var inst_28982 = (state_28998[(2)]);var state_28998__$1 = state_28998;var statearr_29031_29062 = state_28998__$1;(statearr_29031_29062[(2)] = inst_28982);
(statearr_29031_29062[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28999 === (10)))
{var inst_28951 = (state_28998[(8)]);var inst_28953 = (state_28998[(12)]);var inst_28958 = cljs.core._nth.call(null,inst_28951,inst_28953);var state_28998__$1 = state_28998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28998__$1,(13),out,inst_28958);
} else
{if((state_val_28999 === (18)))
{var inst_28964 = (state_28998[(7)]);var inst_28973 = cljs.core.first.call(null,inst_28964);var state_28998__$1 = state_28998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28998__$1,(20),out,inst_28973);
} else
{if((state_val_28999 === (8)))
{var inst_28952 = (state_28998[(10)]);var inst_28953 = (state_28998[(12)]);var inst_28955 = (inst_28953 < inst_28952);var inst_28956 = inst_28955;var state_28998__$1 = state_28998;if(cljs.core.truth_(inst_28956))
{var statearr_29032_29063 = state_28998__$1;(statearr_29032_29063[(1)] = (10));
} else
{var statearr_29033_29064 = state_28998__$1;(statearr_29033_29064[(1)] = (11));
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
var state_machine__15975__auto____0 = (function (){var statearr_29037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29037[(0)] = state_machine__15975__auto__);
(statearr_29037[(1)] = (1));
return statearr_29037;
});
var state_machine__15975__auto____1 = (function (state_28998){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_28998);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29038){if((e29038 instanceof Object))
{var ex__15978__auto__ = e29038;var statearr_29039_29065 = state_28998;(statearr_29039_29065[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29038;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29066 = state_28998;
state_28998 = G__29066;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_28998){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_28998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto__))
})();var state__15991__auto__ = (function (){var statearr_29040 = f__15990__auto__.call(null);(statearr_29040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto__);
return statearr_29040;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___29163 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29163,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29163,out){
return (function (state_29138){var state_val_29139 = (state_29138[(1)]);if((state_val_29139 === (7)))
{var inst_29133 = (state_29138[(2)]);var state_29138__$1 = state_29138;var statearr_29140_29164 = state_29138__$1;(statearr_29140_29164[(2)] = inst_29133);
(statearr_29140_29164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (1)))
{var inst_29115 = null;var state_29138__$1 = (function (){var statearr_29141 = state_29138;(statearr_29141[(7)] = inst_29115);
return statearr_29141;
})();var statearr_29142_29165 = state_29138__$1;(statearr_29142_29165[(2)] = null);
(statearr_29142_29165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (4)))
{var inst_29118 = (state_29138[(8)]);var inst_29118__$1 = (state_29138[(2)]);var inst_29119 = (inst_29118__$1 == null);var inst_29120 = cljs.core.not.call(null,inst_29119);var state_29138__$1 = (function (){var statearr_29143 = state_29138;(statearr_29143[(8)] = inst_29118__$1);
return statearr_29143;
})();if(inst_29120)
{var statearr_29144_29166 = state_29138__$1;(statearr_29144_29166[(1)] = (5));
} else
{var statearr_29145_29167 = state_29138__$1;(statearr_29145_29167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (6)))
{var state_29138__$1 = state_29138;var statearr_29146_29168 = state_29138__$1;(statearr_29146_29168[(2)] = null);
(statearr_29146_29168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (3)))
{var inst_29135 = (state_29138[(2)]);var inst_29136 = cljs.core.async.close_BANG_.call(null,out);var state_29138__$1 = (function (){var statearr_29147 = state_29138;(statearr_29147[(9)] = inst_29135);
return statearr_29147;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29138__$1,inst_29136);
} else
{if((state_val_29139 === (2)))
{var state_29138__$1 = state_29138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29138__$1,(4),ch);
} else
{if((state_val_29139 === (11)))
{var inst_29118 = (state_29138[(8)]);var inst_29127 = (state_29138[(2)]);var inst_29115 = inst_29118;var state_29138__$1 = (function (){var statearr_29148 = state_29138;(statearr_29148[(10)] = inst_29127);
(statearr_29148[(7)] = inst_29115);
return statearr_29148;
})();var statearr_29149_29169 = state_29138__$1;(statearr_29149_29169[(2)] = null);
(statearr_29149_29169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (9)))
{var inst_29118 = (state_29138[(8)]);var state_29138__$1 = state_29138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29138__$1,(11),out,inst_29118);
} else
{if((state_val_29139 === (5)))
{var inst_29118 = (state_29138[(8)]);var inst_29115 = (state_29138[(7)]);var inst_29122 = cljs.core._EQ_.call(null,inst_29118,inst_29115);var state_29138__$1 = state_29138;if(inst_29122)
{var statearr_29151_29170 = state_29138__$1;(statearr_29151_29170[(1)] = (8));
} else
{var statearr_29152_29171 = state_29138__$1;(statearr_29152_29171[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (10)))
{var inst_29130 = (state_29138[(2)]);var state_29138__$1 = state_29138;var statearr_29153_29172 = state_29138__$1;(statearr_29153_29172[(2)] = inst_29130);
(statearr_29153_29172[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29139 === (8)))
{var inst_29115 = (state_29138[(7)]);var tmp29150 = inst_29115;var inst_29115__$1 = tmp29150;var state_29138__$1 = (function (){var statearr_29154 = state_29138;(statearr_29154[(7)] = inst_29115__$1);
return statearr_29154;
})();var statearr_29155_29173 = state_29138__$1;(statearr_29155_29173[(2)] = null);
(statearr_29155_29173[(1)] = (2));
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
});})(c__15989__auto___29163,out))
;return ((function (switch__15974__auto__,c__15989__auto___29163,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29159 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29159[(0)] = state_machine__15975__auto__);
(statearr_29159[(1)] = (1));
return statearr_29159;
});
var state_machine__15975__auto____1 = (function (state_29138){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29138);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29160){if((e29160 instanceof Object))
{var ex__15978__auto__ = e29160;var statearr_29161_29174 = state_29138;(statearr_29161_29174[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29175 = state_29138;
state_29138 = G__29175;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29138){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29163,out))
})();var state__15991__auto__ = (function (){var statearr_29162 = f__15990__auto__.call(null);(statearr_29162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29163);
return statearr_29162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29163,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___29310 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29310,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29310,out){
return (function (state_29280){var state_val_29281 = (state_29280[(1)]);if((state_val_29281 === (7)))
{var inst_29276 = (state_29280[(2)]);var state_29280__$1 = state_29280;var statearr_29282_29311 = state_29280__$1;(statearr_29282_29311[(2)] = inst_29276);
(statearr_29282_29311[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (1)))
{var inst_29243 = (new Array(n));var inst_29244 = inst_29243;var inst_29245 = (0);var state_29280__$1 = (function (){var statearr_29283 = state_29280;(statearr_29283[(7)] = inst_29244);
(statearr_29283[(8)] = inst_29245);
return statearr_29283;
})();var statearr_29284_29312 = state_29280__$1;(statearr_29284_29312[(2)] = null);
(statearr_29284_29312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (4)))
{var inst_29248 = (state_29280[(9)]);var inst_29248__$1 = (state_29280[(2)]);var inst_29249 = (inst_29248__$1 == null);var inst_29250 = cljs.core.not.call(null,inst_29249);var state_29280__$1 = (function (){var statearr_29285 = state_29280;(statearr_29285[(9)] = inst_29248__$1);
return statearr_29285;
})();if(inst_29250)
{var statearr_29286_29313 = state_29280__$1;(statearr_29286_29313[(1)] = (5));
} else
{var statearr_29287_29314 = state_29280__$1;(statearr_29287_29314[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (15)))
{var inst_29270 = (state_29280[(2)]);var state_29280__$1 = state_29280;var statearr_29288_29315 = state_29280__$1;(statearr_29288_29315[(2)] = inst_29270);
(statearr_29288_29315[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (13)))
{var state_29280__$1 = state_29280;var statearr_29289_29316 = state_29280__$1;(statearr_29289_29316[(2)] = null);
(statearr_29289_29316[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (6)))
{var inst_29245 = (state_29280[(8)]);var inst_29266 = (inst_29245 > (0));var state_29280__$1 = state_29280;if(cljs.core.truth_(inst_29266))
{var statearr_29290_29317 = state_29280__$1;(statearr_29290_29317[(1)] = (12));
} else
{var statearr_29291_29318 = state_29280__$1;(statearr_29291_29318[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (3)))
{var inst_29278 = (state_29280[(2)]);var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else
{if((state_val_29281 === (12)))
{var inst_29244 = (state_29280[(7)]);var inst_29268 = cljs.core.vec.call(null,inst_29244);var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(15),out,inst_29268);
} else
{if((state_val_29281 === (2)))
{var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),ch);
} else
{if((state_val_29281 === (11)))
{var inst_29260 = (state_29280[(2)]);var inst_29261 = (new Array(n));var inst_29244 = inst_29261;var inst_29245 = (0);var state_29280__$1 = (function (){var statearr_29292 = state_29280;(statearr_29292[(10)] = inst_29260);
(statearr_29292[(7)] = inst_29244);
(statearr_29292[(8)] = inst_29245);
return statearr_29292;
})();var statearr_29293_29319 = state_29280__$1;(statearr_29293_29319[(2)] = null);
(statearr_29293_29319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (9)))
{var inst_29244 = (state_29280[(7)]);var inst_29258 = cljs.core.vec.call(null,inst_29244);var state_29280__$1 = state_29280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(11),out,inst_29258);
} else
{if((state_val_29281 === (5)))
{var inst_29244 = (state_29280[(7)]);var inst_29248 = (state_29280[(9)]);var inst_29245 = (state_29280[(8)]);var inst_29253 = (state_29280[(11)]);var inst_29252 = (inst_29244[inst_29245] = inst_29248);var inst_29253__$1 = (inst_29245 + (1));var inst_29254 = (inst_29253__$1 < n);var state_29280__$1 = (function (){var statearr_29294 = state_29280;(statearr_29294[(12)] = inst_29252);
(statearr_29294[(11)] = inst_29253__$1);
return statearr_29294;
})();if(cljs.core.truth_(inst_29254))
{var statearr_29295_29320 = state_29280__$1;(statearr_29295_29320[(1)] = (8));
} else
{var statearr_29296_29321 = state_29280__$1;(statearr_29296_29321[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (14)))
{var inst_29273 = (state_29280[(2)]);var inst_29274 = cljs.core.async.close_BANG_.call(null,out);var state_29280__$1 = (function (){var statearr_29298 = state_29280;(statearr_29298[(13)] = inst_29273);
return statearr_29298;
})();var statearr_29299_29322 = state_29280__$1;(statearr_29299_29322[(2)] = inst_29274);
(statearr_29299_29322[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (10)))
{var inst_29264 = (state_29280[(2)]);var state_29280__$1 = state_29280;var statearr_29300_29323 = state_29280__$1;(statearr_29300_29323[(2)] = inst_29264);
(statearr_29300_29323[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29281 === (8)))
{var inst_29244 = (state_29280[(7)]);var inst_29253 = (state_29280[(11)]);var tmp29297 = inst_29244;var inst_29244__$1 = tmp29297;var inst_29245 = inst_29253;var state_29280__$1 = (function (){var statearr_29301 = state_29280;(statearr_29301[(7)] = inst_29244__$1);
(statearr_29301[(8)] = inst_29245);
return statearr_29301;
})();var statearr_29302_29324 = state_29280__$1;(statearr_29302_29324[(2)] = null);
(statearr_29302_29324[(1)] = (2));
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
});})(c__15989__auto___29310,out))
;return ((function (switch__15974__auto__,c__15989__auto___29310,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29306[(0)] = state_machine__15975__auto__);
(statearr_29306[(1)] = (1));
return statearr_29306;
});
var state_machine__15975__auto____1 = (function (state_29280){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29280);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29307){if((e29307 instanceof Object))
{var ex__15978__auto__ = e29307;var statearr_29308_29325 = state_29280;(statearr_29308_29325[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29307;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29326 = state_29280;
state_29280 = G__29326;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29310,out))
})();var state__15991__auto__ = (function (){var statearr_29309 = f__15990__auto__.call(null);(statearr_29309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29310);
return statearr_29309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29310,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15989__auto___29469 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15989__auto___29469,out){
return (function (){var f__15990__auto__ = (function (){var switch__15974__auto__ = ((function (c__15989__auto___29469,out){
return (function (state_29439){var state_val_29440 = (state_29439[(1)]);if((state_val_29440 === (7)))
{var inst_29435 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29441_29470 = state_29439__$1;(statearr_29441_29470[(2)] = inst_29435);
(statearr_29441_29470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (1)))
{var inst_29398 = [];var inst_29399 = inst_29398;var inst_29400 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_29439__$1 = (function (){var statearr_29442 = state_29439;(statearr_29442[(7)] = inst_29400);
(statearr_29442[(8)] = inst_29399);
return statearr_29442;
})();var statearr_29443_29471 = state_29439__$1;(statearr_29443_29471[(2)] = null);
(statearr_29443_29471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (4)))
{var inst_29403 = (state_29439[(9)]);var inst_29403__$1 = (state_29439[(2)]);var inst_29404 = (inst_29403__$1 == null);var inst_29405 = cljs.core.not.call(null,inst_29404);var state_29439__$1 = (function (){var statearr_29444 = state_29439;(statearr_29444[(9)] = inst_29403__$1);
return statearr_29444;
})();if(inst_29405)
{var statearr_29445_29472 = state_29439__$1;(statearr_29445_29472[(1)] = (5));
} else
{var statearr_29446_29473 = state_29439__$1;(statearr_29446_29473[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (15)))
{var inst_29429 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29447_29474 = state_29439__$1;(statearr_29447_29474[(2)] = inst_29429);
(statearr_29447_29474[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (13)))
{var state_29439__$1 = state_29439;var statearr_29448_29475 = state_29439__$1;(statearr_29448_29475[(2)] = null);
(statearr_29448_29475[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (6)))
{var inst_29399 = (state_29439[(8)]);var inst_29424 = inst_29399.length;var inst_29425 = (inst_29424 > (0));var state_29439__$1 = state_29439;if(cljs.core.truth_(inst_29425))
{var statearr_29449_29476 = state_29439__$1;(statearr_29449_29476[(1)] = (12));
} else
{var statearr_29450_29477 = state_29439__$1;(statearr_29450_29477[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (3)))
{var inst_29437 = (state_29439[(2)]);var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else
{if((state_val_29440 === (12)))
{var inst_29399 = (state_29439[(8)]);var inst_29427 = cljs.core.vec.call(null,inst_29399);var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(15),out,inst_29427);
} else
{if((state_val_29440 === (2)))
{var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else
{if((state_val_29440 === (11)))
{var inst_29407 = (state_29439[(10)]);var inst_29403 = (state_29439[(9)]);var inst_29417 = (state_29439[(2)]);var inst_29418 = [];var inst_29419 = inst_29418.push(inst_29403);var inst_29399 = inst_29418;var inst_29400 = inst_29407;var state_29439__$1 = (function (){var statearr_29451 = state_29439;(statearr_29451[(7)] = inst_29400);
(statearr_29451[(11)] = inst_29417);
(statearr_29451[(8)] = inst_29399);
(statearr_29451[(12)] = inst_29419);
return statearr_29451;
})();var statearr_29452_29478 = state_29439__$1;(statearr_29452_29478[(2)] = null);
(statearr_29452_29478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (9)))
{var inst_29399 = (state_29439[(8)]);var inst_29415 = cljs.core.vec.call(null,inst_29399);var state_29439__$1 = state_29439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(11),out,inst_29415);
} else
{if((state_val_29440 === (5)))
{var inst_29407 = (state_29439[(10)]);var inst_29400 = (state_29439[(7)]);var inst_29403 = (state_29439[(9)]);var inst_29407__$1 = f.call(null,inst_29403);var inst_29408 = cljs.core._EQ_.call(null,inst_29407__$1,inst_29400);var inst_29409 = cljs.core.keyword_identical_QMARK_.call(null,inst_29400,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_29410 = (inst_29408) || (inst_29409);var state_29439__$1 = (function (){var statearr_29453 = state_29439;(statearr_29453[(10)] = inst_29407__$1);
return statearr_29453;
})();if(cljs.core.truth_(inst_29410))
{var statearr_29454_29479 = state_29439__$1;(statearr_29454_29479[(1)] = (8));
} else
{var statearr_29455_29480 = state_29439__$1;(statearr_29455_29480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (14)))
{var inst_29432 = (state_29439[(2)]);var inst_29433 = cljs.core.async.close_BANG_.call(null,out);var state_29439__$1 = (function (){var statearr_29457 = state_29439;(statearr_29457[(13)] = inst_29432);
return statearr_29457;
})();var statearr_29458_29481 = state_29439__$1;(statearr_29458_29481[(2)] = inst_29433);
(statearr_29458_29481[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (10)))
{var inst_29422 = (state_29439[(2)]);var state_29439__$1 = state_29439;var statearr_29459_29482 = state_29439__$1;(statearr_29459_29482[(2)] = inst_29422);
(statearr_29459_29482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29440 === (8)))
{var inst_29407 = (state_29439[(10)]);var inst_29399 = (state_29439[(8)]);var inst_29403 = (state_29439[(9)]);var inst_29412 = inst_29399.push(inst_29403);var tmp29456 = inst_29399;var inst_29399__$1 = tmp29456;var inst_29400 = inst_29407;var state_29439__$1 = (function (){var statearr_29460 = state_29439;(statearr_29460[(7)] = inst_29400);
(statearr_29460[(8)] = inst_29399__$1);
(statearr_29460[(14)] = inst_29412);
return statearr_29460;
})();var statearr_29461_29483 = state_29439__$1;(statearr_29461_29483[(2)] = null);
(statearr_29461_29483[(1)] = (2));
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
});})(c__15989__auto___29469,out))
;return ((function (switch__15974__auto__,c__15989__auto___29469,out){
return (function() {
var state_machine__15975__auto__ = null;
var state_machine__15975__auto____0 = (function (){var statearr_29465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29465[(0)] = state_machine__15975__auto__);
(statearr_29465[(1)] = (1));
return statearr_29465;
});
var state_machine__15975__auto____1 = (function (state_29439){while(true){
var ret_value__15976__auto__ = (function (){try{while(true){
var result__15977__auto__ = switch__15974__auto__.call(null,state_29439);if(cljs.core.keyword_identical_QMARK_.call(null,result__15977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15977__auto__;
}
break;
}
}catch (e29466){if((e29466 instanceof Object))
{var ex__15978__auto__ = e29466;var statearr_29467_29484 = state_29439;(statearr_29467_29484[(5)] = ex__15978__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29466;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29485 = state_29439;
state_29439 = G__29485;
continue;
}
} else
{return ret_value__15976__auto__;
}
break;
}
});
state_machine__15975__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return state_machine__15975__auto____0.call(this);
case 1:
return state_machine__15975__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15975__auto____0;
state_machine__15975__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15975__auto____1;
return state_machine__15975__auto__;
})()
;})(switch__15974__auto__,c__15989__auto___29469,out))
})();var state__15991__auto__ = (function (){var statearr_29468 = f__15990__auto__.call(null);(statearr_29468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15989__auto___29469);
return statearr_29468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15991__auto__);
});})(c__15989__auto___29469,out))
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