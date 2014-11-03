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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20846 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20846 = (function (f,fn_handler,meta20847){
this.f = f;
this.fn_handler = fn_handler;
this.meta20847 = meta20847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20846.cljs$lang$type = true;
cljs.core.async.t20846.cljs$lang$ctorStr = "cljs.core.async/t20846";
cljs.core.async.t20846.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t20846");
});
cljs.core.async.t20846.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20848){var self__ = this;
var _20848__$1 = this;return self__.meta20847;
});
cljs.core.async.t20846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20848,meta20847__$1){var self__ = this;
var _20848__$1 = this;return (new cljs.core.async.t20846(self__.f,self__.fn_handler,meta20847__$1));
});
cljs.core.async.__GT_t20846 = (function __GT_t20846(f__$1,fn_handler__$1,meta20847){return (new cljs.core.async.t20846(f__$1,fn_handler__$1,meta20847));
});
}
return (new cljs.core.async.t20846(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20850 = buff;if(G__20850)
{var bit__13211__auto__ = null;if(cljs.core.truth_((function (){var or__12546__auto__ = bit__13211__auto__;if(cljs.core.truth_(or__12546__auto__))
{return or__12546__auto__;
} else
{return G__20850.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20850.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20850);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20850);
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
{var val_20851 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20851);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20851,ret){
return (function (){return fn1.call(null,val_20851);
});})(val_20851,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__13417__auto___20852 = n;var x_20853 = (0);while(true){
if((x_20853 < n__13417__auto___20852))
{(a[x_20853] = (0));
{
var G__20854 = (x_20853 + (1));
x_20853 = G__20854;
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
var G__20855 = (i + (1));
i = G__20855;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20859 = (function (flag,alt_flag,meta20860){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20860 = meta20860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20859.cljs$lang$type = true;
cljs.core.async.t20859.cljs$lang$ctorStr = "cljs.core.async/t20859";
cljs.core.async.t20859.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t20859");
});})(flag))
;
cljs.core.async.t20859.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20861){var self__ = this;
var _20861__$1 = this;return self__.meta20860;
});})(flag))
;
cljs.core.async.t20859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20861,meta20860__$1){var self__ = this;
var _20861__$1 = this;return (new cljs.core.async.t20859(self__.flag,self__.alt_flag,meta20860__$1));
});})(flag))
;
cljs.core.async.__GT_t20859 = ((function (flag){
return (function __GT_t20859(flag__$1,alt_flag__$1,meta20860){return (new cljs.core.async.t20859(flag__$1,alt_flag__$1,meta20860));
});})(flag))
;
}
return (new cljs.core.async.t20859(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20865 = (function (cb,flag,alt_handler,meta20866){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20866 = meta20866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20865.cljs$lang$type = true;
cljs.core.async.t20865.cljs$lang$ctorStr = "cljs.core.async/t20865";
cljs.core.async.t20865.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t20865");
});
cljs.core.async.t20865.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20867){var self__ = this;
var _20867__$1 = this;return self__.meta20866;
});
cljs.core.async.t20865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20867,meta20866__$1){var self__ = this;
var _20867__$1 = this;return (new cljs.core.async.t20865(self__.cb,self__.flag,self__.alt_handler,meta20866__$1));
});
cljs.core.async.__GT_t20865 = (function __GT_t20865(cb__$1,flag__$1,alt_handler__$1,meta20866){return (new cljs.core.async.t20865(cb__$1,flag__$1,alt_handler__$1,meta20866));
});
}
return (new cljs.core.async.t20865(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20868_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20868_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20869_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20869_SHARP_,port], null));
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
var G__20870 = (i + (1));
i = G__20870;
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
var alts_BANG___delegate = function (ports,p__20871){var map__20873 = p__20871;var map__20873__$1 = ((cljs.core.seq_QMARK_.call(null,map__20873))?cljs.core.apply.call(null,cljs.core.hash_map,map__20873):map__20873);var opts = map__20873__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20871 = null;if (arguments.length > 1) {
  p__20871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20871);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20874){
var ports = cljs.core.first(arglist__20874);
var p__20871 = cljs.core.rest(arglist__20874);
return alts_BANG___delegate(ports,p__20871);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15087__auto___20969 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___20969){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___20969){
return (function (state_20945){var state_val_20946 = (state_20945[(1)]);if((state_val_20946 === (7)))
{var inst_20941 = (state_20945[(2)]);var state_20945__$1 = state_20945;var statearr_20947_20970 = state_20945__$1;(statearr_20947_20970[(2)] = inst_20941);
(statearr_20947_20970[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (1)))
{var state_20945__$1 = state_20945;var statearr_20948_20971 = state_20945__$1;(statearr_20948_20971[(2)] = null);
(statearr_20948_20971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (4)))
{var inst_20924 = (state_20945[(7)]);var inst_20924__$1 = (state_20945[(2)]);var inst_20925 = (inst_20924__$1 == null);var state_20945__$1 = (function (){var statearr_20949 = state_20945;(statearr_20949[(7)] = inst_20924__$1);
return statearr_20949;
})();if(cljs.core.truth_(inst_20925))
{var statearr_20950_20972 = state_20945__$1;(statearr_20950_20972[(1)] = (5));
} else
{var statearr_20951_20973 = state_20945__$1;(statearr_20951_20973[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (13)))
{var state_20945__$1 = state_20945;var statearr_20952_20974 = state_20945__$1;(statearr_20952_20974[(2)] = null);
(statearr_20952_20974[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (6)))
{var inst_20924 = (state_20945[(7)]);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20945__$1,(11),to,inst_20924);
} else
{if((state_val_20946 === (3)))
{var inst_20943 = (state_20945[(2)]);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20945__$1,inst_20943);
} else
{if((state_val_20946 === (12)))
{var state_20945__$1 = state_20945;var statearr_20953_20975 = state_20945__$1;(statearr_20953_20975[(2)] = null);
(statearr_20953_20975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (2)))
{var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,(4),from);
} else
{if((state_val_20946 === (11)))
{var inst_20934 = (state_20945[(2)]);var state_20945__$1 = state_20945;if(cljs.core.truth_(inst_20934))
{var statearr_20954_20976 = state_20945__$1;(statearr_20954_20976[(1)] = (12));
} else
{var statearr_20955_20977 = state_20945__$1;(statearr_20955_20977[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (9)))
{var state_20945__$1 = state_20945;var statearr_20956_20978 = state_20945__$1;(statearr_20956_20978[(2)] = null);
(statearr_20956_20978[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (5)))
{var state_20945__$1 = state_20945;if(cljs.core.truth_(close_QMARK_))
{var statearr_20957_20979 = state_20945__$1;(statearr_20957_20979[(1)] = (8));
} else
{var statearr_20958_20980 = state_20945__$1;(statearr_20958_20980[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (14)))
{var inst_20939 = (state_20945[(2)]);var state_20945__$1 = state_20945;var statearr_20959_20981 = state_20945__$1;(statearr_20959_20981[(2)] = inst_20939);
(statearr_20959_20981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (10)))
{var inst_20931 = (state_20945[(2)]);var state_20945__$1 = state_20945;var statearr_20960_20982 = state_20945__$1;(statearr_20960_20982[(2)] = inst_20931);
(statearr_20960_20982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (8)))
{var inst_20928 = cljs.core.async.close_BANG_.call(null,to);var state_20945__$1 = state_20945;var statearr_20961_20983 = state_20945__$1;(statearr_20961_20983[(2)] = inst_20928);
(statearr_20961_20983[(1)] = (10));
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
});})(c__15087__auto___20969))
;return ((function (switch__15072__auto__,c__15087__auto___20969){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_20965 = [null,null,null,null,null,null,null,null];(statearr_20965[(0)] = state_machine__15073__auto__);
(statearr_20965[(1)] = (1));
return statearr_20965;
});
var state_machine__15073__auto____1 = (function (state_20945){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_20945);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e20966){if((e20966 instanceof Object))
{var ex__15076__auto__ = e20966;var statearr_20967_20984 = state_20945;(statearr_20967_20984[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20966;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20985 = state_20945;
state_20945 = G__20985;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_20945){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_20945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___20969))
})();var state__15089__auto__ = (function (){var statearr_20968 = f__15088__auto__.call(null);(statearr_20968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___20969);
return statearr_20968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___20969))
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
return (function (p__21169){var vec__21170 = p__21169;var v = cljs.core.nth.call(null,vec__21170,(0),null);var p = cljs.core.nth.call(null,vec__21170,(1),null);var job = vec__21170;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__15087__auto___21352 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results){
return (function (state_21175){var state_val_21176 = (state_21175[(1)]);if((state_val_21176 === (2)))
{var inst_21172 = (state_21175[(2)]);var inst_21173 = cljs.core.async.close_BANG_.call(null,res);var state_21175__$1 = (function (){var statearr_21177 = state_21175;(statearr_21177[(7)] = inst_21172);
return statearr_21177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21175__$1,inst_21173);
} else
{if((state_val_21176 === (1)))
{var state_21175__$1 = state_21175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21175__$1,(2),res,v);
} else
{return null;
}
}
});})(c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results))
;return ((function (switch__15072__auto__,c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21181 = [null,null,null,null,null,null,null,null];(statearr_21181[(0)] = state_machine__15073__auto__);
(statearr_21181[(1)] = (1));
return statearr_21181;
});
var state_machine__15073__auto____1 = (function (state_21175){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21175);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21182){if((e21182 instanceof Object))
{var ex__15076__auto__ = e21182;var statearr_21183_21353 = state_21175;(statearr_21183_21353[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21354 = state_21175;
state_21175 = G__21354;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21175){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results))
})();var state__15089__auto__ = (function (){var statearr_21184 = f__15088__auto__.call(null);(statearr_21184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21352);
return statearr_21184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21352,res,vec__21170,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21185){var vec__21186 = p__21185;var v = cljs.core.nth.call(null,vec__21186,(0),null);var p = cljs.core.nth.call(null,vec__21186,(1),null);var job = vec__21186;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__13417__auto___21355 = n;var __21356 = (0);while(true){
if((__21356 < n__13417__auto___21355))
{var G__21187_21357 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21187_21357) {
case "async":
var c__15087__auto___21359 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21356,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (__21356,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function (state_21200){var state_val_21201 = (state_21200[(1)]);if((state_val_21201 === (7)))
{var inst_21196 = (state_21200[(2)]);var state_21200__$1 = state_21200;var statearr_21202_21360 = state_21200__$1;(statearr_21202_21360[(2)] = inst_21196);
(statearr_21202_21360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21201 === (6)))
{var state_21200__$1 = state_21200;var statearr_21203_21361 = state_21200__$1;(statearr_21203_21361[(2)] = null);
(statearr_21203_21361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21201 === (5)))
{var state_21200__$1 = state_21200;var statearr_21204_21362 = state_21200__$1;(statearr_21204_21362[(2)] = null);
(statearr_21204_21362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21201 === (4)))
{var inst_21190 = (state_21200[(2)]);var inst_21191 = async.call(null,inst_21190);var state_21200__$1 = state_21200;if(cljs.core.truth_(inst_21191))
{var statearr_21205_21363 = state_21200__$1;(statearr_21205_21363[(1)] = (5));
} else
{var statearr_21206_21364 = state_21200__$1;(statearr_21206_21364[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21201 === (3)))
{var inst_21198 = (state_21200[(2)]);var state_21200__$1 = state_21200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21200__$1,inst_21198);
} else
{if((state_val_21201 === (2)))
{var state_21200__$1 = state_21200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21200__$1,(4),jobs);
} else
{if((state_val_21201 === (1)))
{var state_21200__$1 = state_21200;var statearr_21207_21365 = state_21200__$1;(statearr_21207_21365[(2)] = null);
(statearr_21207_21365[(1)] = (2));
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
});})(__21356,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
;return ((function (__21356,switch__15072__auto__,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21211 = [null,null,null,null,null,null,null];(statearr_21211[(0)] = state_machine__15073__auto__);
(statearr_21211[(1)] = (1));
return statearr_21211;
});
var state_machine__15073__auto____1 = (function (state_21200){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21200);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21212){if((e21212 instanceof Object))
{var ex__15076__auto__ = e21212;var statearr_21213_21366 = state_21200;(statearr_21213_21366[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21367 = state_21200;
state_21200 = G__21367;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21200){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(__21356,switch__15072__auto__,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21214 = f__15088__auto__.call(null);(statearr_21214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21359);
return statearr_21214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(__21356,c__15087__auto___21359,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
);

break;
case "compute":
var c__15087__auto___21368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__21356,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (__21356,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function (state_21227){var state_val_21228 = (state_21227[(1)]);if((state_val_21228 === (7)))
{var inst_21223 = (state_21227[(2)]);var state_21227__$1 = state_21227;var statearr_21229_21369 = state_21227__$1;(statearr_21229_21369[(2)] = inst_21223);
(statearr_21229_21369[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21228 === (6)))
{var state_21227__$1 = state_21227;var statearr_21230_21370 = state_21227__$1;(statearr_21230_21370[(2)] = null);
(statearr_21230_21370[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21228 === (5)))
{var state_21227__$1 = state_21227;var statearr_21231_21371 = state_21227__$1;(statearr_21231_21371[(2)] = null);
(statearr_21231_21371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21228 === (4)))
{var inst_21217 = (state_21227[(2)]);var inst_21218 = process.call(null,inst_21217);var state_21227__$1 = state_21227;if(cljs.core.truth_(inst_21218))
{var statearr_21232_21372 = state_21227__$1;(statearr_21232_21372[(1)] = (5));
} else
{var statearr_21233_21373 = state_21227__$1;(statearr_21233_21373[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21228 === (3)))
{var inst_21225 = (state_21227[(2)]);var state_21227__$1 = state_21227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21227__$1,inst_21225);
} else
{if((state_val_21228 === (2)))
{var state_21227__$1 = state_21227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21227__$1,(4),jobs);
} else
{if((state_val_21228 === (1)))
{var state_21227__$1 = state_21227;var statearr_21234_21374 = state_21227__$1;(statearr_21234_21374[(2)] = null);
(statearr_21234_21374[(1)] = (2));
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
});})(__21356,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
;return ((function (__21356,switch__15072__auto__,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21238 = [null,null,null,null,null,null,null];(statearr_21238[(0)] = state_machine__15073__auto__);
(statearr_21238[(1)] = (1));
return statearr_21238;
});
var state_machine__15073__auto____1 = (function (state_21227){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21227);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21239){if((e21239 instanceof Object))
{var ex__15076__auto__ = e21239;var statearr_21240_21375 = state_21227;(statearr_21240_21375[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21239;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21376 = state_21227;
state_21227 = G__21376;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21227){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(__21356,switch__15072__auto__,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21241 = f__15088__auto__.call(null);(statearr_21241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21368);
return statearr_21241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(__21356,c__15087__auto___21368,G__21187_21357,n__13417__auto___21355,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21377 = (__21356 + (1));
__21356 = G__21377;
continue;
}
} else
{}
break;
}
var c__15087__auto___21378 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21378,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21378,jobs,results,process,async){
return (function (state_21263){var state_val_21264 = (state_21263[(1)]);if((state_val_21264 === (9)))
{var inst_21256 = (state_21263[(2)]);var state_21263__$1 = (function (){var statearr_21265 = state_21263;(statearr_21265[(7)] = inst_21256);
return statearr_21265;
})();var statearr_21266_21379 = state_21263__$1;(statearr_21266_21379[(2)] = null);
(statearr_21266_21379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21264 === (8)))
{var inst_21249 = (state_21263[(8)]);var inst_21254 = (state_21263[(2)]);var state_21263__$1 = (function (){var statearr_21267 = state_21263;(statearr_21267[(9)] = inst_21254);
return statearr_21267;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21263__$1,(9),results,inst_21249);
} else
{if((state_val_21264 === (7)))
{var inst_21259 = (state_21263[(2)]);var state_21263__$1 = state_21263;var statearr_21268_21380 = state_21263__$1;(statearr_21268_21380[(2)] = inst_21259);
(statearr_21268_21380[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21264 === (6)))
{var inst_21244 = (state_21263[(10)]);var inst_21249 = (state_21263[(8)]);var inst_21249__$1 = cljs.core.async.chan.call(null,(1));var inst_21250 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21251 = [inst_21244,inst_21249__$1];var inst_21252 = (new cljs.core.PersistentVector(null,2,(5),inst_21250,inst_21251,null));var state_21263__$1 = (function (){var statearr_21269 = state_21263;(statearr_21269[(8)] = inst_21249__$1);
return statearr_21269;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21263__$1,(8),jobs,inst_21252);
} else
{if((state_val_21264 === (5)))
{var inst_21247 = cljs.core.async.close_BANG_.call(null,jobs);var state_21263__$1 = state_21263;var statearr_21270_21381 = state_21263__$1;(statearr_21270_21381[(2)] = inst_21247);
(statearr_21270_21381[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21264 === (4)))
{var inst_21244 = (state_21263[(10)]);var inst_21244__$1 = (state_21263[(2)]);var inst_21245 = (inst_21244__$1 == null);var state_21263__$1 = (function (){var statearr_21271 = state_21263;(statearr_21271[(10)] = inst_21244__$1);
return statearr_21271;
})();if(cljs.core.truth_(inst_21245))
{var statearr_21272_21382 = state_21263__$1;(statearr_21272_21382[(1)] = (5));
} else
{var statearr_21273_21383 = state_21263__$1;(statearr_21273_21383[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21264 === (3)))
{var inst_21261 = (state_21263[(2)]);var state_21263__$1 = state_21263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21263__$1,inst_21261);
} else
{if((state_val_21264 === (2)))
{var state_21263__$1 = state_21263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21263__$1,(4),from);
} else
{if((state_val_21264 === (1)))
{var state_21263__$1 = state_21263;var statearr_21274_21384 = state_21263__$1;(statearr_21274_21384[(2)] = null);
(statearr_21274_21384[(1)] = (2));
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
});})(c__15087__auto___21378,jobs,results,process,async))
;return ((function (switch__15072__auto__,c__15087__auto___21378,jobs,results,process,async){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21278 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21278[(0)] = state_machine__15073__auto__);
(statearr_21278[(1)] = (1));
return statearr_21278;
});
var state_machine__15073__auto____1 = (function (state_21263){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21263);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21279){if((e21279 instanceof Object))
{var ex__15076__auto__ = e21279;var statearr_21280_21385 = state_21263;(statearr_21280_21385[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21386 = state_21263;
state_21263 = G__21386;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21263){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21378,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21281 = f__15088__auto__.call(null);(statearr_21281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21378);
return statearr_21281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21378,jobs,results,process,async))
);
var c__15087__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto__,jobs,results,process,async){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto__,jobs,results,process,async){
return (function (state_21319){var state_val_21320 = (state_21319[(1)]);if((state_val_21320 === (7)))
{var inst_21315 = (state_21319[(2)]);var state_21319__$1 = state_21319;var statearr_21321_21387 = state_21319__$1;(statearr_21321_21387[(2)] = inst_21315);
(statearr_21321_21387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (20)))
{var state_21319__$1 = state_21319;var statearr_21322_21388 = state_21319__$1;(statearr_21322_21388[(2)] = null);
(statearr_21322_21388[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (1)))
{var state_21319__$1 = state_21319;var statearr_21323_21389 = state_21319__$1;(statearr_21323_21389[(2)] = null);
(statearr_21323_21389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (4)))
{var inst_21284 = (state_21319[(7)]);var inst_21284__$1 = (state_21319[(2)]);var inst_21285 = (inst_21284__$1 == null);var state_21319__$1 = (function (){var statearr_21324 = state_21319;(statearr_21324[(7)] = inst_21284__$1);
return statearr_21324;
})();if(cljs.core.truth_(inst_21285))
{var statearr_21325_21390 = state_21319__$1;(statearr_21325_21390[(1)] = (5));
} else
{var statearr_21326_21391 = state_21319__$1;(statearr_21326_21391[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (15)))
{var inst_21297 = (state_21319[(8)]);var state_21319__$1 = state_21319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21319__$1,(18),to,inst_21297);
} else
{if((state_val_21320 === (21)))
{var inst_21310 = (state_21319[(2)]);var state_21319__$1 = state_21319;var statearr_21327_21392 = state_21319__$1;(statearr_21327_21392[(2)] = inst_21310);
(statearr_21327_21392[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (13)))
{var inst_21312 = (state_21319[(2)]);var state_21319__$1 = (function (){var statearr_21328 = state_21319;(statearr_21328[(9)] = inst_21312);
return statearr_21328;
})();var statearr_21329_21393 = state_21319__$1;(statearr_21329_21393[(2)] = null);
(statearr_21329_21393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (6)))
{var inst_21284 = (state_21319[(7)]);var state_21319__$1 = state_21319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(11),inst_21284);
} else
{if((state_val_21320 === (17)))
{var inst_21305 = (state_21319[(2)]);var state_21319__$1 = state_21319;if(cljs.core.truth_(inst_21305))
{var statearr_21330_21394 = state_21319__$1;(statearr_21330_21394[(1)] = (19));
} else
{var statearr_21331_21395 = state_21319__$1;(statearr_21331_21395[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (3)))
{var inst_21317 = (state_21319[(2)]);var state_21319__$1 = state_21319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21319__$1,inst_21317);
} else
{if((state_val_21320 === (12)))
{var inst_21294 = (state_21319[(10)]);var state_21319__$1 = state_21319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(14),inst_21294);
} else
{if((state_val_21320 === (2)))
{var state_21319__$1 = state_21319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(4),results);
} else
{if((state_val_21320 === (19)))
{var state_21319__$1 = state_21319;var statearr_21332_21396 = state_21319__$1;(statearr_21332_21396[(2)] = null);
(statearr_21332_21396[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (11)))
{var inst_21294 = (state_21319[(2)]);var state_21319__$1 = (function (){var statearr_21333 = state_21319;(statearr_21333[(10)] = inst_21294);
return statearr_21333;
})();var statearr_21334_21397 = state_21319__$1;(statearr_21334_21397[(2)] = null);
(statearr_21334_21397[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (9)))
{var state_21319__$1 = state_21319;var statearr_21335_21398 = state_21319__$1;(statearr_21335_21398[(2)] = null);
(statearr_21335_21398[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (5)))
{var state_21319__$1 = state_21319;if(cljs.core.truth_(close_QMARK_))
{var statearr_21336_21399 = state_21319__$1;(statearr_21336_21399[(1)] = (8));
} else
{var statearr_21337_21400 = state_21319__$1;(statearr_21337_21400[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (14)))
{var inst_21297 = (state_21319[(8)]);var inst_21299 = (state_21319[(11)]);var inst_21297__$1 = (state_21319[(2)]);var inst_21298 = (inst_21297__$1 == null);var inst_21299__$1 = cljs.core.not.call(null,inst_21298);var state_21319__$1 = (function (){var statearr_21338 = state_21319;(statearr_21338[(8)] = inst_21297__$1);
(statearr_21338[(11)] = inst_21299__$1);
return statearr_21338;
})();if(inst_21299__$1)
{var statearr_21339_21401 = state_21319__$1;(statearr_21339_21401[(1)] = (15));
} else
{var statearr_21340_21402 = state_21319__$1;(statearr_21340_21402[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (16)))
{var inst_21299 = (state_21319[(11)]);var state_21319__$1 = state_21319;var statearr_21341_21403 = state_21319__$1;(statearr_21341_21403[(2)] = inst_21299);
(statearr_21341_21403[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (10)))
{var inst_21291 = (state_21319[(2)]);var state_21319__$1 = state_21319;var statearr_21342_21404 = state_21319__$1;(statearr_21342_21404[(2)] = inst_21291);
(statearr_21342_21404[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (18)))
{var inst_21302 = (state_21319[(2)]);var state_21319__$1 = state_21319;var statearr_21343_21405 = state_21319__$1;(statearr_21343_21405[(2)] = inst_21302);
(statearr_21343_21405[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21320 === (8)))
{var inst_21288 = cljs.core.async.close_BANG_.call(null,to);var state_21319__$1 = state_21319;var statearr_21344_21406 = state_21319__$1;(statearr_21344_21406[(2)] = inst_21288);
(statearr_21344_21406[(1)] = (10));
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
var state_machine__15073__auto____0 = (function (){var statearr_21348 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21348[(0)] = state_machine__15073__auto__);
(statearr_21348[(1)] = (1));
return statearr_21348;
});
var state_machine__15073__auto____1 = (function (state_21319){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21319);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21349){if((e21349 instanceof Object))
{var ex__15076__auto__ = e21349;var statearr_21350_21407 = state_21319;(statearr_21350_21407[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21408 = state_21319;
state_21319 = G__21408;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21319){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__,jobs,results,process,async))
})();var state__15089__auto__ = (function (){var statearr_21351 = f__15088__auto__.call(null);(statearr_21351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21351;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15087__auto___21509 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___21509,tc,fc){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___21509,tc,fc){
return (function (state_21484){var state_val_21485 = (state_21484[(1)]);if((state_val_21485 === (7)))
{var inst_21480 = (state_21484[(2)]);var state_21484__$1 = state_21484;var statearr_21486_21510 = state_21484__$1;(statearr_21486_21510[(2)] = inst_21480);
(statearr_21486_21510[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (1)))
{var state_21484__$1 = state_21484;var statearr_21487_21511 = state_21484__$1;(statearr_21487_21511[(2)] = null);
(statearr_21487_21511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (4)))
{var inst_21461 = (state_21484[(7)]);var inst_21461__$1 = (state_21484[(2)]);var inst_21462 = (inst_21461__$1 == null);var state_21484__$1 = (function (){var statearr_21488 = state_21484;(statearr_21488[(7)] = inst_21461__$1);
return statearr_21488;
})();if(cljs.core.truth_(inst_21462))
{var statearr_21489_21512 = state_21484__$1;(statearr_21489_21512[(1)] = (5));
} else
{var statearr_21490_21513 = state_21484__$1;(statearr_21490_21513[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (13)))
{var state_21484__$1 = state_21484;var statearr_21491_21514 = state_21484__$1;(statearr_21491_21514[(2)] = null);
(statearr_21491_21514[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (6)))
{var inst_21461 = (state_21484[(7)]);var inst_21467 = p.call(null,inst_21461);var state_21484__$1 = state_21484;if(cljs.core.truth_(inst_21467))
{var statearr_21492_21515 = state_21484__$1;(statearr_21492_21515[(1)] = (9));
} else
{var statearr_21493_21516 = state_21484__$1;(statearr_21493_21516[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (3)))
{var inst_21482 = (state_21484[(2)]);var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21484__$1,inst_21482);
} else
{if((state_val_21485 === (12)))
{var state_21484__$1 = state_21484;var statearr_21494_21517 = state_21484__$1;(statearr_21494_21517[(2)] = null);
(statearr_21494_21517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (2)))
{var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21484__$1,(4),ch);
} else
{if((state_val_21485 === (11)))
{var inst_21461 = (state_21484[(7)]);var inst_21471 = (state_21484[(2)]);var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21484__$1,(8),inst_21471,inst_21461);
} else
{if((state_val_21485 === (9)))
{var state_21484__$1 = state_21484;var statearr_21495_21518 = state_21484__$1;(statearr_21495_21518[(2)] = tc);
(statearr_21495_21518[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (5)))
{var inst_21464 = cljs.core.async.close_BANG_.call(null,tc);var inst_21465 = cljs.core.async.close_BANG_.call(null,fc);var state_21484__$1 = (function (){var statearr_21496 = state_21484;(statearr_21496[(8)] = inst_21464);
return statearr_21496;
})();var statearr_21497_21519 = state_21484__$1;(statearr_21497_21519[(2)] = inst_21465);
(statearr_21497_21519[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (14)))
{var inst_21478 = (state_21484[(2)]);var state_21484__$1 = state_21484;var statearr_21498_21520 = state_21484__$1;(statearr_21498_21520[(2)] = inst_21478);
(statearr_21498_21520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (10)))
{var state_21484__$1 = state_21484;var statearr_21499_21521 = state_21484__$1;(statearr_21499_21521[(2)] = fc);
(statearr_21499_21521[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (8)))
{var inst_21473 = (state_21484[(2)]);var state_21484__$1 = state_21484;if(cljs.core.truth_(inst_21473))
{var statearr_21500_21522 = state_21484__$1;(statearr_21500_21522[(1)] = (12));
} else
{var statearr_21501_21523 = state_21484__$1;(statearr_21501_21523[(1)] = (13));
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
});})(c__15087__auto___21509,tc,fc))
;return ((function (switch__15072__auto__,c__15087__auto___21509,tc,fc){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_21505 = [null,null,null,null,null,null,null,null,null];(statearr_21505[(0)] = state_machine__15073__auto__);
(statearr_21505[(1)] = (1));
return statearr_21505;
});
var state_machine__15073__auto____1 = (function (state_21484){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21484);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21506){if((e21506 instanceof Object))
{var ex__15076__auto__ = e21506;var statearr_21507_21524 = state_21484;(statearr_21507_21524[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21506;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21525 = state_21484;
state_21484 = G__21525;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21484){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___21509,tc,fc))
})();var state__15089__auto__ = (function (){var statearr_21508 = f__15088__auto__.call(null);(statearr_21508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___21509);
return statearr_21508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___21509,tc,fc))
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
return (function (state_21572){var state_val_21573 = (state_21572[(1)]);if((state_val_21573 === (7)))
{var inst_21568 = (state_21572[(2)]);var state_21572__$1 = state_21572;var statearr_21574_21590 = state_21572__$1;(statearr_21574_21590[(2)] = inst_21568);
(statearr_21574_21590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21573 === (6)))
{var inst_21558 = (state_21572[(7)]);var inst_21561 = (state_21572[(8)]);var inst_21565 = f.call(null,inst_21558,inst_21561);var inst_21558__$1 = inst_21565;var state_21572__$1 = (function (){var statearr_21575 = state_21572;(statearr_21575[(7)] = inst_21558__$1);
return statearr_21575;
})();var statearr_21576_21591 = state_21572__$1;(statearr_21576_21591[(2)] = null);
(statearr_21576_21591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21573 === (5)))
{var inst_21558 = (state_21572[(7)]);var state_21572__$1 = state_21572;var statearr_21577_21592 = state_21572__$1;(statearr_21577_21592[(2)] = inst_21558);
(statearr_21577_21592[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21573 === (4)))
{var inst_21561 = (state_21572[(8)]);var inst_21561__$1 = (state_21572[(2)]);var inst_21562 = (inst_21561__$1 == null);var state_21572__$1 = (function (){var statearr_21578 = state_21572;(statearr_21578[(8)] = inst_21561__$1);
return statearr_21578;
})();if(cljs.core.truth_(inst_21562))
{var statearr_21579_21593 = state_21572__$1;(statearr_21579_21593[(1)] = (5));
} else
{var statearr_21580_21594 = state_21572__$1;(statearr_21580_21594[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21573 === (3)))
{var inst_21570 = (state_21572[(2)]);var state_21572__$1 = state_21572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21572__$1,inst_21570);
} else
{if((state_val_21573 === (2)))
{var state_21572__$1 = state_21572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21572__$1,(4),ch);
} else
{if((state_val_21573 === (1)))
{var inst_21558 = init;var state_21572__$1 = (function (){var statearr_21581 = state_21572;(statearr_21581[(7)] = inst_21558);
return statearr_21581;
})();var statearr_21582_21595 = state_21572__$1;(statearr_21582_21595[(2)] = null);
(statearr_21582_21595[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_21586 = [null,null,null,null,null,null,null,null,null];(statearr_21586[(0)] = state_machine__15073__auto__);
(statearr_21586[(1)] = (1));
return statearr_21586;
});
var state_machine__15073__auto____1 = (function (state_21572){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21572);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21587){if((e21587 instanceof Object))
{var ex__15076__auto__ = e21587;var statearr_21588_21596 = state_21572;(statearr_21588_21596[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21597 = state_21572;
state_21572 = G__21597;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21572){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_21589 = f__15088__auto__.call(null);(statearr_21589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21589;
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
return (function (state_21671){var state_val_21672 = (state_21671[(1)]);if((state_val_21672 === (7)))
{var inst_21653 = (state_21671[(2)]);var state_21671__$1 = state_21671;var statearr_21673_21696 = state_21671__$1;(statearr_21673_21696[(2)] = inst_21653);
(statearr_21673_21696[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (1)))
{var inst_21647 = cljs.core.seq.call(null,coll);var inst_21648 = inst_21647;var state_21671__$1 = (function (){var statearr_21674 = state_21671;(statearr_21674[(7)] = inst_21648);
return statearr_21674;
})();var statearr_21675_21697 = state_21671__$1;(statearr_21675_21697[(2)] = null);
(statearr_21675_21697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (4)))
{var inst_21648 = (state_21671[(7)]);var inst_21651 = cljs.core.first.call(null,inst_21648);var state_21671__$1 = state_21671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21671__$1,(7),ch,inst_21651);
} else
{if((state_val_21672 === (13)))
{var inst_21665 = (state_21671[(2)]);var state_21671__$1 = state_21671;var statearr_21676_21698 = state_21671__$1;(statearr_21676_21698[(2)] = inst_21665);
(statearr_21676_21698[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (6)))
{var inst_21656 = (state_21671[(2)]);var state_21671__$1 = state_21671;if(cljs.core.truth_(inst_21656))
{var statearr_21677_21699 = state_21671__$1;(statearr_21677_21699[(1)] = (8));
} else
{var statearr_21678_21700 = state_21671__$1;(statearr_21678_21700[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (3)))
{var inst_21669 = (state_21671[(2)]);var state_21671__$1 = state_21671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21671__$1,inst_21669);
} else
{if((state_val_21672 === (12)))
{var state_21671__$1 = state_21671;var statearr_21679_21701 = state_21671__$1;(statearr_21679_21701[(2)] = null);
(statearr_21679_21701[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (2)))
{var inst_21648 = (state_21671[(7)]);var state_21671__$1 = state_21671;if(cljs.core.truth_(inst_21648))
{var statearr_21680_21702 = state_21671__$1;(statearr_21680_21702[(1)] = (4));
} else
{var statearr_21681_21703 = state_21671__$1;(statearr_21681_21703[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (11)))
{var inst_21662 = cljs.core.async.close_BANG_.call(null,ch);var state_21671__$1 = state_21671;var statearr_21682_21704 = state_21671__$1;(statearr_21682_21704[(2)] = inst_21662);
(statearr_21682_21704[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (9)))
{var state_21671__$1 = state_21671;if(cljs.core.truth_(close_QMARK_))
{var statearr_21683_21705 = state_21671__$1;(statearr_21683_21705[(1)] = (11));
} else
{var statearr_21684_21706 = state_21671__$1;(statearr_21684_21706[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (5)))
{var inst_21648 = (state_21671[(7)]);var state_21671__$1 = state_21671;var statearr_21685_21707 = state_21671__$1;(statearr_21685_21707[(2)] = inst_21648);
(statearr_21685_21707[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (10)))
{var inst_21667 = (state_21671[(2)]);var state_21671__$1 = state_21671;var statearr_21686_21708 = state_21671__$1;(statearr_21686_21708[(2)] = inst_21667);
(statearr_21686_21708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21672 === (8)))
{var inst_21648 = (state_21671[(7)]);var inst_21658 = cljs.core.next.call(null,inst_21648);var inst_21648__$1 = inst_21658;var state_21671__$1 = (function (){var statearr_21687 = state_21671;(statearr_21687[(7)] = inst_21648__$1);
return statearr_21687;
})();var statearr_21688_21709 = state_21671__$1;(statearr_21688_21709[(2)] = null);
(statearr_21688_21709[(1)] = (2));
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
var state_machine__15073__auto____0 = (function (){var statearr_21692 = [null,null,null,null,null,null,null,null];(statearr_21692[(0)] = state_machine__15073__auto__);
(statearr_21692[(1)] = (1));
return statearr_21692;
});
var state_machine__15073__auto____1 = (function (state_21671){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_21671);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e21693){if((e21693 instanceof Object))
{var ex__15076__auto__ = e21693;var statearr_21694_21710 = state_21671;(statearr_21694_21710[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21711 = state_21671;
state_21671 = G__21711;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_21671){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_21671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_21695 = f__15088__auto__.call(null);(statearr_21695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_21695;
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
cljs.core.async.Mux = (function (){var obj21713 = {};return obj21713;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__12534__auto__ = _;if(and__12534__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__12534__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__13184__auto__ = (((_ == null))?null:_);return (function (){var or__12546__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
cljs.core.async.Mult = (function (){var obj21715 = {};return obj21715;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21937 = (function (cs,ch,mult,meta21938){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21938 = meta21938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21937.cljs$lang$type = true;
cljs.core.async.t21937.cljs$lang$ctorStr = "cljs.core.async/t21937";
cljs.core.async.t21937.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t21937");
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21937.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21939){var self__ = this;
var _21939__$1 = this;return self__.meta21938;
});})(cs))
;
cljs.core.async.t21937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21939,meta21938__$1){var self__ = this;
var _21939__$1 = this;return (new cljs.core.async.t21937(self__.cs,self__.ch,self__.mult,meta21938__$1));
});})(cs))
;
cljs.core.async.__GT_t21937 = ((function (cs){
return (function __GT_t21937(cs__$1,ch__$1,mult__$1,meta21938){return (new cljs.core.async.t21937(cs__$1,ch__$1,mult__$1,meta21938));
});})(cs))
;
}
return (new cljs.core.async.t21937(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15087__auto___22158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22158,cs,m,dchan,dctr,done){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22158,cs,m,dchan,dctr,done){
return (function (state_22070){var state_val_22071 = (state_22070[(1)]);if((state_val_22071 === (7)))
{var inst_22066 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22072_22159 = state_22070__$1;(statearr_22072_22159[(2)] = inst_22066);
(statearr_22072_22159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (20)))
{var inst_21971 = (state_22070[(7)]);var inst_21981 = cljs.core.first.call(null,inst_21971);var inst_21982 = cljs.core.nth.call(null,inst_21981,(0),null);var inst_21983 = cljs.core.nth.call(null,inst_21981,(1),null);var state_22070__$1 = (function (){var statearr_22073 = state_22070;(statearr_22073[(8)] = inst_21982);
return statearr_22073;
})();if(cljs.core.truth_(inst_21983))
{var statearr_22074_22160 = state_22070__$1;(statearr_22074_22160[(1)] = (22));
} else
{var statearr_22075_22161 = state_22070__$1;(statearr_22075_22161[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (27)))
{var inst_22013 = (state_22070[(9)]);var inst_22018 = (state_22070[(10)]);var inst_21942 = (state_22070[(11)]);var inst_22011 = (state_22070[(12)]);var inst_22018__$1 = cljs.core._nth.call(null,inst_22011,inst_22013);var inst_22019 = cljs.core.async.put_BANG_.call(null,inst_22018__$1,inst_21942,done);var state_22070__$1 = (function (){var statearr_22076 = state_22070;(statearr_22076[(10)] = inst_22018__$1);
return statearr_22076;
})();if(cljs.core.truth_(inst_22019))
{var statearr_22077_22162 = state_22070__$1;(statearr_22077_22162[(1)] = (30));
} else
{var statearr_22078_22163 = state_22070__$1;(statearr_22078_22163[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (1)))
{var state_22070__$1 = state_22070;var statearr_22079_22164 = state_22070__$1;(statearr_22079_22164[(2)] = null);
(statearr_22079_22164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (24)))
{var inst_21971 = (state_22070[(7)]);var inst_21988 = (state_22070[(2)]);var inst_21989 = cljs.core.next.call(null,inst_21971);var inst_21951 = inst_21989;var inst_21952 = null;var inst_21953 = (0);var inst_21954 = (0);var state_22070__$1 = (function (){var statearr_22080 = state_22070;(statearr_22080[(13)] = inst_21952);
(statearr_22080[(14)] = inst_21954);
(statearr_22080[(15)] = inst_21951);
(statearr_22080[(16)] = inst_21988);
(statearr_22080[(17)] = inst_21953);
return statearr_22080;
})();var statearr_22081_22165 = state_22070__$1;(statearr_22081_22165[(2)] = null);
(statearr_22081_22165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (39)))
{var state_22070__$1 = state_22070;var statearr_22085_22166 = state_22070__$1;(statearr_22085_22166[(2)] = null);
(statearr_22085_22166[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (4)))
{var inst_21942 = (state_22070[(11)]);var inst_21942__$1 = (state_22070[(2)]);var inst_21943 = (inst_21942__$1 == null);var state_22070__$1 = (function (){var statearr_22086 = state_22070;(statearr_22086[(11)] = inst_21942__$1);
return statearr_22086;
})();if(cljs.core.truth_(inst_21943))
{var statearr_22087_22167 = state_22070__$1;(statearr_22087_22167[(1)] = (5));
} else
{var statearr_22088_22168 = state_22070__$1;(statearr_22088_22168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (15)))
{var inst_21952 = (state_22070[(13)]);var inst_21954 = (state_22070[(14)]);var inst_21951 = (state_22070[(15)]);var inst_21953 = (state_22070[(17)]);var inst_21967 = (state_22070[(2)]);var inst_21968 = (inst_21954 + (1));var tmp22082 = inst_21952;var tmp22083 = inst_21951;var tmp22084 = inst_21953;var inst_21951__$1 = tmp22083;var inst_21952__$1 = tmp22082;var inst_21953__$1 = tmp22084;var inst_21954__$1 = inst_21968;var state_22070__$1 = (function (){var statearr_22089 = state_22070;(statearr_22089[(13)] = inst_21952__$1);
(statearr_22089[(14)] = inst_21954__$1);
(statearr_22089[(15)] = inst_21951__$1);
(statearr_22089[(17)] = inst_21953__$1);
(statearr_22089[(18)] = inst_21967);
return statearr_22089;
})();var statearr_22090_22169 = state_22070__$1;(statearr_22090_22169[(2)] = null);
(statearr_22090_22169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (21)))
{var inst_21992 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22094_22170 = state_22070__$1;(statearr_22094_22170[(2)] = inst_21992);
(statearr_22094_22170[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (31)))
{var inst_22018 = (state_22070[(10)]);var inst_22022 = done.call(null,null);var inst_22023 = cljs.core.async.untap_STAR_.call(null,m,inst_22018);var state_22070__$1 = (function (){var statearr_22095 = state_22070;(statearr_22095[(19)] = inst_22022);
return statearr_22095;
})();var statearr_22096_22171 = state_22070__$1;(statearr_22096_22171[(2)] = inst_22023);
(statearr_22096_22171[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (32)))
{var inst_22013 = (state_22070[(9)]);var inst_22010 = (state_22070[(20)]);var inst_22012 = (state_22070[(21)]);var inst_22011 = (state_22070[(12)]);var inst_22025 = (state_22070[(2)]);var inst_22026 = (inst_22013 + (1));var tmp22091 = inst_22010;var tmp22092 = inst_22012;var tmp22093 = inst_22011;var inst_22010__$1 = tmp22091;var inst_22011__$1 = tmp22093;var inst_22012__$1 = tmp22092;var inst_22013__$1 = inst_22026;var state_22070__$1 = (function (){var statearr_22097 = state_22070;(statearr_22097[(9)] = inst_22013__$1);
(statearr_22097[(20)] = inst_22010__$1);
(statearr_22097[(21)] = inst_22012__$1);
(statearr_22097[(22)] = inst_22025);
(statearr_22097[(12)] = inst_22011__$1);
return statearr_22097;
})();var statearr_22098_22172 = state_22070__$1;(statearr_22098_22172[(2)] = null);
(statearr_22098_22172[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (40)))
{var inst_22038 = (state_22070[(23)]);var inst_22042 = done.call(null,null);var inst_22043 = cljs.core.async.untap_STAR_.call(null,m,inst_22038);var state_22070__$1 = (function (){var statearr_22099 = state_22070;(statearr_22099[(24)] = inst_22042);
return statearr_22099;
})();var statearr_22100_22173 = state_22070__$1;(statearr_22100_22173[(2)] = inst_22043);
(statearr_22100_22173[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (33)))
{var inst_22029 = (state_22070[(25)]);var inst_22031 = cljs.core.chunked_seq_QMARK_.call(null,inst_22029);var state_22070__$1 = state_22070;if(inst_22031)
{var statearr_22101_22174 = state_22070__$1;(statearr_22101_22174[(1)] = (36));
} else
{var statearr_22102_22175 = state_22070__$1;(statearr_22102_22175[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (13)))
{var inst_21961 = (state_22070[(26)]);var inst_21964 = cljs.core.async.close_BANG_.call(null,inst_21961);var state_22070__$1 = state_22070;var statearr_22103_22176 = state_22070__$1;(statearr_22103_22176[(2)] = inst_21964);
(statearr_22103_22176[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (22)))
{var inst_21982 = (state_22070[(8)]);var inst_21985 = cljs.core.async.close_BANG_.call(null,inst_21982);var state_22070__$1 = state_22070;var statearr_22104_22177 = state_22070__$1;(statearr_22104_22177[(2)] = inst_21985);
(statearr_22104_22177[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (36)))
{var inst_22029 = (state_22070[(25)]);var inst_22033 = cljs.core.chunk_first.call(null,inst_22029);var inst_22034 = cljs.core.chunk_rest.call(null,inst_22029);var inst_22035 = cljs.core.count.call(null,inst_22033);var inst_22010 = inst_22034;var inst_22011 = inst_22033;var inst_22012 = inst_22035;var inst_22013 = (0);var state_22070__$1 = (function (){var statearr_22105 = state_22070;(statearr_22105[(9)] = inst_22013);
(statearr_22105[(20)] = inst_22010);
(statearr_22105[(21)] = inst_22012);
(statearr_22105[(12)] = inst_22011);
return statearr_22105;
})();var statearr_22106_22178 = state_22070__$1;(statearr_22106_22178[(2)] = null);
(statearr_22106_22178[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (41)))
{var inst_22029 = (state_22070[(25)]);var inst_22045 = (state_22070[(2)]);var inst_22046 = cljs.core.next.call(null,inst_22029);var inst_22010 = inst_22046;var inst_22011 = null;var inst_22012 = (0);var inst_22013 = (0);var state_22070__$1 = (function (){var statearr_22107 = state_22070;(statearr_22107[(9)] = inst_22013);
(statearr_22107[(20)] = inst_22010);
(statearr_22107[(21)] = inst_22012);
(statearr_22107[(12)] = inst_22011);
(statearr_22107[(27)] = inst_22045);
return statearr_22107;
})();var statearr_22108_22179 = state_22070__$1;(statearr_22108_22179[(2)] = null);
(statearr_22108_22179[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (43)))
{var state_22070__$1 = state_22070;var statearr_22109_22180 = state_22070__$1;(statearr_22109_22180[(2)] = null);
(statearr_22109_22180[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (29)))
{var inst_22054 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22110_22181 = state_22070__$1;(statearr_22110_22181[(2)] = inst_22054);
(statearr_22110_22181[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (44)))
{var inst_22063 = (state_22070[(2)]);var state_22070__$1 = (function (){var statearr_22111 = state_22070;(statearr_22111[(28)] = inst_22063);
return statearr_22111;
})();var statearr_22112_22182 = state_22070__$1;(statearr_22112_22182[(2)] = null);
(statearr_22112_22182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (6)))
{var inst_22002 = (state_22070[(29)]);var inst_22001 = cljs.core.deref.call(null,cs);var inst_22002__$1 = cljs.core.keys.call(null,inst_22001);var inst_22003 = cljs.core.count.call(null,inst_22002__$1);var inst_22004 = cljs.core.reset_BANG_.call(null,dctr,inst_22003);var inst_22009 = cljs.core.seq.call(null,inst_22002__$1);var inst_22010 = inst_22009;var inst_22011 = null;var inst_22012 = (0);var inst_22013 = (0);var state_22070__$1 = (function (){var statearr_22113 = state_22070;(statearr_22113[(9)] = inst_22013);
(statearr_22113[(20)] = inst_22010);
(statearr_22113[(21)] = inst_22012);
(statearr_22113[(29)] = inst_22002__$1);
(statearr_22113[(12)] = inst_22011);
(statearr_22113[(30)] = inst_22004);
return statearr_22113;
})();var statearr_22114_22183 = state_22070__$1;(statearr_22114_22183[(2)] = null);
(statearr_22114_22183[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (28)))
{var inst_22010 = (state_22070[(20)]);var inst_22029 = (state_22070[(25)]);var inst_22029__$1 = cljs.core.seq.call(null,inst_22010);var state_22070__$1 = (function (){var statearr_22115 = state_22070;(statearr_22115[(25)] = inst_22029__$1);
return statearr_22115;
})();if(inst_22029__$1)
{var statearr_22116_22184 = state_22070__$1;(statearr_22116_22184[(1)] = (33));
} else
{var statearr_22117_22185 = state_22070__$1;(statearr_22117_22185[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (25)))
{var inst_22013 = (state_22070[(9)]);var inst_22012 = (state_22070[(21)]);var inst_22015 = (inst_22013 < inst_22012);var inst_22016 = inst_22015;var state_22070__$1 = state_22070;if(cljs.core.truth_(inst_22016))
{var statearr_22118_22186 = state_22070__$1;(statearr_22118_22186[(1)] = (27));
} else
{var statearr_22119_22187 = state_22070__$1;(statearr_22119_22187[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (34)))
{var state_22070__$1 = state_22070;var statearr_22120_22188 = state_22070__$1;(statearr_22120_22188[(2)] = null);
(statearr_22120_22188[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (17)))
{var state_22070__$1 = state_22070;var statearr_22121_22189 = state_22070__$1;(statearr_22121_22189[(2)] = null);
(statearr_22121_22189[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (3)))
{var inst_22068 = (state_22070[(2)]);var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22070__$1,inst_22068);
} else
{if((state_val_22071 === (12)))
{var inst_21997 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22122_22190 = state_22070__$1;(statearr_22122_22190[(2)] = inst_21997);
(statearr_22122_22190[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (2)))
{var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22070__$1,(4),ch);
} else
{if((state_val_22071 === (23)))
{var state_22070__$1 = state_22070;var statearr_22123_22191 = state_22070__$1;(statearr_22123_22191[(2)] = null);
(statearr_22123_22191[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (35)))
{var inst_22052 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22124_22192 = state_22070__$1;(statearr_22124_22192[(2)] = inst_22052);
(statearr_22124_22192[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (19)))
{var inst_21971 = (state_22070[(7)]);var inst_21975 = cljs.core.chunk_first.call(null,inst_21971);var inst_21976 = cljs.core.chunk_rest.call(null,inst_21971);var inst_21977 = cljs.core.count.call(null,inst_21975);var inst_21951 = inst_21976;var inst_21952 = inst_21975;var inst_21953 = inst_21977;var inst_21954 = (0);var state_22070__$1 = (function (){var statearr_22125 = state_22070;(statearr_22125[(13)] = inst_21952);
(statearr_22125[(14)] = inst_21954);
(statearr_22125[(15)] = inst_21951);
(statearr_22125[(17)] = inst_21953);
return statearr_22125;
})();var statearr_22126_22193 = state_22070__$1;(statearr_22126_22193[(2)] = null);
(statearr_22126_22193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (11)))
{var inst_21971 = (state_22070[(7)]);var inst_21951 = (state_22070[(15)]);var inst_21971__$1 = cljs.core.seq.call(null,inst_21951);var state_22070__$1 = (function (){var statearr_22127 = state_22070;(statearr_22127[(7)] = inst_21971__$1);
return statearr_22127;
})();if(inst_21971__$1)
{var statearr_22128_22194 = state_22070__$1;(statearr_22128_22194[(1)] = (16));
} else
{var statearr_22129_22195 = state_22070__$1;(statearr_22129_22195[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (9)))
{var inst_21999 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22130_22196 = state_22070__$1;(statearr_22130_22196[(2)] = inst_21999);
(statearr_22130_22196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (5)))
{var inst_21949 = cljs.core.deref.call(null,cs);var inst_21950 = cljs.core.seq.call(null,inst_21949);var inst_21951 = inst_21950;var inst_21952 = null;var inst_21953 = (0);var inst_21954 = (0);var state_22070__$1 = (function (){var statearr_22131 = state_22070;(statearr_22131[(13)] = inst_21952);
(statearr_22131[(14)] = inst_21954);
(statearr_22131[(15)] = inst_21951);
(statearr_22131[(17)] = inst_21953);
return statearr_22131;
})();var statearr_22132_22197 = state_22070__$1;(statearr_22132_22197[(2)] = null);
(statearr_22132_22197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (14)))
{var state_22070__$1 = state_22070;var statearr_22133_22198 = state_22070__$1;(statearr_22133_22198[(2)] = null);
(statearr_22133_22198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (45)))
{var inst_22060 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22134_22199 = state_22070__$1;(statearr_22134_22199[(2)] = inst_22060);
(statearr_22134_22199[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (26)))
{var inst_22002 = (state_22070[(29)]);var inst_22056 = (state_22070[(2)]);var inst_22057 = cljs.core.seq.call(null,inst_22002);var state_22070__$1 = (function (){var statearr_22135 = state_22070;(statearr_22135[(31)] = inst_22056);
return statearr_22135;
})();if(inst_22057)
{var statearr_22136_22200 = state_22070__$1;(statearr_22136_22200[(1)] = (42));
} else
{var statearr_22137_22201 = state_22070__$1;(statearr_22137_22201[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (16)))
{var inst_21971 = (state_22070[(7)]);var inst_21973 = cljs.core.chunked_seq_QMARK_.call(null,inst_21971);var state_22070__$1 = state_22070;if(inst_21973)
{var statearr_22138_22202 = state_22070__$1;(statearr_22138_22202[(1)] = (19));
} else
{var statearr_22139_22203 = state_22070__$1;(statearr_22139_22203[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (38)))
{var inst_22049 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22140_22204 = state_22070__$1;(statearr_22140_22204[(2)] = inst_22049);
(statearr_22140_22204[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (30)))
{var state_22070__$1 = state_22070;var statearr_22141_22205 = state_22070__$1;(statearr_22141_22205[(2)] = null);
(statearr_22141_22205[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (10)))
{var inst_21952 = (state_22070[(13)]);var inst_21954 = (state_22070[(14)]);var inst_21960 = cljs.core._nth.call(null,inst_21952,inst_21954);var inst_21961 = cljs.core.nth.call(null,inst_21960,(0),null);var inst_21962 = cljs.core.nth.call(null,inst_21960,(1),null);var state_22070__$1 = (function (){var statearr_22142 = state_22070;(statearr_22142[(26)] = inst_21961);
return statearr_22142;
})();if(cljs.core.truth_(inst_21962))
{var statearr_22143_22206 = state_22070__$1;(statearr_22143_22206[(1)] = (13));
} else
{var statearr_22144_22207 = state_22070__$1;(statearr_22144_22207[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (18)))
{var inst_21995 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22145_22208 = state_22070__$1;(statearr_22145_22208[(2)] = inst_21995);
(statearr_22145_22208[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (42)))
{var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22070__$1,(45),dchan);
} else
{if((state_val_22071 === (37)))
{var inst_21942 = (state_22070[(11)]);var inst_22038 = (state_22070[(23)]);var inst_22029 = (state_22070[(25)]);var inst_22038__$1 = cljs.core.first.call(null,inst_22029);var inst_22039 = cljs.core.async.put_BANG_.call(null,inst_22038__$1,inst_21942,done);var state_22070__$1 = (function (){var statearr_22146 = state_22070;(statearr_22146[(23)] = inst_22038__$1);
return statearr_22146;
})();if(cljs.core.truth_(inst_22039))
{var statearr_22147_22209 = state_22070__$1;(statearr_22147_22209[(1)] = (39));
} else
{var statearr_22148_22210 = state_22070__$1;(statearr_22148_22210[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (8)))
{var inst_21954 = (state_22070[(14)]);var inst_21953 = (state_22070[(17)]);var inst_21956 = (inst_21954 < inst_21953);var inst_21957 = inst_21956;var state_22070__$1 = state_22070;if(cljs.core.truth_(inst_21957))
{var statearr_22149_22211 = state_22070__$1;(statearr_22149_22211[(1)] = (10));
} else
{var statearr_22150_22212 = state_22070__$1;(statearr_22150_22212[(1)] = (11));
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
});})(c__15087__auto___22158,cs,m,dchan,dctr,done))
;return ((function (switch__15072__auto__,c__15087__auto___22158,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22154[(0)] = state_machine__15073__auto__);
(statearr_22154[(1)] = (1));
return statearr_22154;
});
var state_machine__15073__auto____1 = (function (state_22070){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22070);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22155){if((e22155 instanceof Object))
{var ex__15076__auto__ = e22155;var statearr_22156_22213 = state_22070;(statearr_22156_22213[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22214 = state_22070;
state_22070 = G__22214;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22070){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22158,cs,m,dchan,dctr,done))
})();var state__15089__auto__ = (function (){var statearr_22157 = f__15088__auto__.call(null);(statearr_22157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22158);
return statearr_22157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22158,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj22216 = {};return obj22216;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__12534__auto__ = m;if(and__12534__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__12534__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((m == null))?null:m);return (function (){var or__12546__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22217){var map__22222 = p__22217;var map__22222__$1 = ((cljs.core.seq_QMARK_.call(null,map__22222))?cljs.core.apply.call(null,cljs.core.hash_map,map__22222):map__22222);var opts = map__22222__$1;var statearr_22223_22226 = state;(statearr_22223_22226[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22222,map__22222__$1,opts){
return (function (val){var statearr_22224_22227 = state;(statearr_22224_22227[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22222,map__22222__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_22225_22228 = state;(statearr_22225_22228[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22217 = null;if (arguments.length > 3) {
  p__22217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22217);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22229){
var state = cljs.core.first(arglist__22229);
arglist__22229 = cljs.core.next(arglist__22229);
var cont_block = cljs.core.first(arglist__22229);
arglist__22229 = cljs.core.next(arglist__22229);
var ports = cljs.core.first(arglist__22229);
var p__22217 = cljs.core.rest(arglist__22229);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22217);
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
;var m = (function (){if(typeof cljs.core.async.t22349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22349 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22350){
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
this.meta22350 = meta22350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22349.cljs$lang$type = true;
cljs.core.async.t22349.cljs$lang$ctorStr = "cljs.core.async/t22349";
cljs.core.async.t22349.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t22349");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22351){var self__ = this;
var _22351__$1 = this;return self__.meta22350;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22351,meta22350__$1){var self__ = this;
var _22351__$1 = this;return (new cljs.core.async.t22349(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22350__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22349 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22349(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22350){return (new cljs.core.async.t22349(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22350));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22349(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__15087__auto___22468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22421){var state_val_22422 = (state_22421[(1)]);if((state_val_22422 === (7)))
{var inst_22365 = (state_22421[(7)]);var inst_22370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22365);var state_22421__$1 = state_22421;var statearr_22423_22469 = state_22421__$1;(statearr_22423_22469[(2)] = inst_22370);
(statearr_22423_22469[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (20)))
{var inst_22380 = (state_22421[(8)]);var state_22421__$1 = state_22421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22421__$1,(23),out,inst_22380);
} else
{if((state_val_22422 === (1)))
{var inst_22355 = (state_22421[(9)]);var inst_22355__$1 = calc_state.call(null);var inst_22356 = cljs.core.seq_QMARK_.call(null,inst_22355__$1);var state_22421__$1 = (function (){var statearr_22424 = state_22421;(statearr_22424[(9)] = inst_22355__$1);
return statearr_22424;
})();if(inst_22356)
{var statearr_22425_22470 = state_22421__$1;(statearr_22425_22470[(1)] = (2));
} else
{var statearr_22426_22471 = state_22421__$1;(statearr_22426_22471[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (24)))
{var inst_22373 = (state_22421[(10)]);var inst_22365 = inst_22373;var state_22421__$1 = (function (){var statearr_22427 = state_22421;(statearr_22427[(7)] = inst_22365);
return statearr_22427;
})();var statearr_22428_22472 = state_22421__$1;(statearr_22428_22472[(2)] = null);
(statearr_22428_22472[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (4)))
{var inst_22355 = (state_22421[(9)]);var inst_22361 = (state_22421[(2)]);var inst_22362 = cljs.core.get.call(null,inst_22361,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22363 = cljs.core.get.call(null,inst_22361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22364 = cljs.core.get.call(null,inst_22361,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_22365 = inst_22355;var state_22421__$1 = (function (){var statearr_22429 = state_22421;(statearr_22429[(11)] = inst_22363);
(statearr_22429[(12)] = inst_22362);
(statearr_22429[(7)] = inst_22365);
(statearr_22429[(13)] = inst_22364);
return statearr_22429;
})();var statearr_22430_22473 = state_22421__$1;(statearr_22430_22473[(2)] = null);
(statearr_22430_22473[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (15)))
{var state_22421__$1 = state_22421;var statearr_22431_22474 = state_22421__$1;(statearr_22431_22474[(2)] = null);
(statearr_22431_22474[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (21)))
{var inst_22373 = (state_22421[(10)]);var inst_22365 = inst_22373;var state_22421__$1 = (function (){var statearr_22432 = state_22421;(statearr_22432[(7)] = inst_22365);
return statearr_22432;
})();var statearr_22433_22475 = state_22421__$1;(statearr_22433_22475[(2)] = null);
(statearr_22433_22475[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (13)))
{var inst_22417 = (state_22421[(2)]);var state_22421__$1 = state_22421;var statearr_22434_22476 = state_22421__$1;(statearr_22434_22476[(2)] = inst_22417);
(statearr_22434_22476[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (22)))
{var inst_22415 = (state_22421[(2)]);var state_22421__$1 = state_22421;var statearr_22435_22477 = state_22421__$1;(statearr_22435_22477[(2)] = inst_22415);
(statearr_22435_22477[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (6)))
{var inst_22419 = (state_22421[(2)]);var state_22421__$1 = state_22421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22421__$1,inst_22419);
} else
{if((state_val_22422 === (25)))
{var state_22421__$1 = state_22421;var statearr_22436_22478 = state_22421__$1;(statearr_22436_22478[(2)] = null);
(statearr_22436_22478[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (17)))
{var inst_22395 = (state_22421[(14)]);var state_22421__$1 = state_22421;var statearr_22437_22479 = state_22421__$1;(statearr_22437_22479[(2)] = inst_22395);
(statearr_22437_22479[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (3)))
{var inst_22355 = (state_22421[(9)]);var state_22421__$1 = state_22421;var statearr_22438_22480 = state_22421__$1;(statearr_22438_22480[(2)] = inst_22355);
(statearr_22438_22480[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (12)))
{var inst_22381 = (state_22421[(15)]);var inst_22376 = (state_22421[(16)]);var inst_22395 = (state_22421[(14)]);var inst_22395__$1 = inst_22376.call(null,inst_22381);var state_22421__$1 = (function (){var statearr_22439 = state_22421;(statearr_22439[(14)] = inst_22395__$1);
return statearr_22439;
})();if(cljs.core.truth_(inst_22395__$1))
{var statearr_22440_22481 = state_22421__$1;(statearr_22440_22481[(1)] = (17));
} else
{var statearr_22441_22482 = state_22421__$1;(statearr_22441_22482[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (2)))
{var inst_22355 = (state_22421[(9)]);var inst_22358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22355);var state_22421__$1 = state_22421;var statearr_22442_22483 = state_22421__$1;(statearr_22442_22483[(2)] = inst_22358);
(statearr_22442_22483[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (23)))
{var inst_22406 = (state_22421[(2)]);var state_22421__$1 = state_22421;if(cljs.core.truth_(inst_22406))
{var statearr_22443_22484 = state_22421__$1;(statearr_22443_22484[(1)] = (24));
} else
{var statearr_22444_22485 = state_22421__$1;(statearr_22444_22485[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (19)))
{var inst_22403 = (state_22421[(2)]);var state_22421__$1 = state_22421;if(cljs.core.truth_(inst_22403))
{var statearr_22445_22486 = state_22421__$1;(statearr_22445_22486[(1)] = (20));
} else
{var statearr_22446_22487 = state_22421__$1;(statearr_22446_22487[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (11)))
{var inst_22380 = (state_22421[(8)]);var inst_22386 = (inst_22380 == null);var state_22421__$1 = state_22421;if(cljs.core.truth_(inst_22386))
{var statearr_22447_22488 = state_22421__$1;(statearr_22447_22488[(1)] = (14));
} else
{var statearr_22448_22489 = state_22421__$1;(statearr_22448_22489[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (9)))
{var inst_22373 = (state_22421[(10)]);var inst_22373__$1 = (state_22421[(2)]);var inst_22374 = cljs.core.get.call(null,inst_22373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_22375 = cljs.core.get.call(null,inst_22373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_22376 = cljs.core.get.call(null,inst_22373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_22421__$1 = (function (){var statearr_22449 = state_22421;(statearr_22449[(10)] = inst_22373__$1);
(statearr_22449[(17)] = inst_22375);
(statearr_22449[(16)] = inst_22376);
return statearr_22449;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_22421__$1,(10),inst_22374);
} else
{if((state_val_22422 === (5)))
{var inst_22365 = (state_22421[(7)]);var inst_22368 = cljs.core.seq_QMARK_.call(null,inst_22365);var state_22421__$1 = state_22421;if(inst_22368)
{var statearr_22450_22490 = state_22421__$1;(statearr_22450_22490[(1)] = (7));
} else
{var statearr_22451_22491 = state_22421__$1;(statearr_22451_22491[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (14)))
{var inst_22381 = (state_22421[(15)]);var inst_22388 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22381);var state_22421__$1 = state_22421;var statearr_22452_22492 = state_22421__$1;(statearr_22452_22492[(2)] = inst_22388);
(statearr_22452_22492[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (26)))
{var inst_22411 = (state_22421[(2)]);var state_22421__$1 = state_22421;var statearr_22453_22493 = state_22421__$1;(statearr_22453_22493[(2)] = inst_22411);
(statearr_22453_22493[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (16)))
{var inst_22391 = (state_22421[(2)]);var inst_22392 = calc_state.call(null);var inst_22365 = inst_22392;var state_22421__$1 = (function (){var statearr_22454 = state_22421;(statearr_22454[(18)] = inst_22391);
(statearr_22454[(7)] = inst_22365);
return statearr_22454;
})();var statearr_22455_22494 = state_22421__$1;(statearr_22455_22494[(2)] = null);
(statearr_22455_22494[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (10)))
{var inst_22380 = (state_22421[(8)]);var inst_22381 = (state_22421[(15)]);var inst_22379 = (state_22421[(2)]);var inst_22380__$1 = cljs.core.nth.call(null,inst_22379,(0),null);var inst_22381__$1 = cljs.core.nth.call(null,inst_22379,(1),null);var inst_22382 = (inst_22380__$1 == null);var inst_22383 = cljs.core._EQ_.call(null,inst_22381__$1,change);var inst_22384 = (inst_22382) || (inst_22383);var state_22421__$1 = (function (){var statearr_22456 = state_22421;(statearr_22456[(8)] = inst_22380__$1);
(statearr_22456[(15)] = inst_22381__$1);
return statearr_22456;
})();if(cljs.core.truth_(inst_22384))
{var statearr_22457_22495 = state_22421__$1;(statearr_22457_22495[(1)] = (11));
} else
{var statearr_22458_22496 = state_22421__$1;(statearr_22458_22496[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (18)))
{var inst_22381 = (state_22421[(15)]);var inst_22375 = (state_22421[(17)]);var inst_22376 = (state_22421[(16)]);var inst_22398 = cljs.core.empty_QMARK_.call(null,inst_22376);var inst_22399 = inst_22375.call(null,inst_22381);var inst_22400 = cljs.core.not.call(null,inst_22399);var inst_22401 = (inst_22398) && (inst_22400);var state_22421__$1 = state_22421;var statearr_22459_22497 = state_22421__$1;(statearr_22459_22497[(2)] = inst_22401);
(statearr_22459_22497[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22422 === (8)))
{var inst_22365 = (state_22421[(7)]);var state_22421__$1 = state_22421;var statearr_22460_22498 = state_22421__$1;(statearr_22460_22498[(2)] = inst_22365);
(statearr_22460_22498[(1)] = (9));
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
});})(c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15072__auto__,c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22464[(0)] = state_machine__15073__auto__);
(statearr_22464[(1)] = (1));
return statearr_22464;
});
var state_machine__15073__auto____1 = (function (state_22421){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22421);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22465){if((e22465 instanceof Object))
{var ex__15076__auto__ = e22465;var statearr_22466_22499 = state_22421;(statearr_22466_22499[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22465;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22500 = state_22421;
state_22421 = G__22500;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22421){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15089__auto__ = (function (){var statearr_22467 = f__15088__auto__.call(null);(statearr_22467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22468);
return statearr_22467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj22502 = {};return obj22502;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__12534__auto__ = p;if(and__12534__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__12534__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
{var x__13184__auto__ = (((p == null))?null:p);return (function (){var or__12546__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13184__auto__)]);if(or__12546__auto__)
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
return (function (p1__22503_SHARP_){if(cljs.core.truth_(p1__22503_SHARP_.call(null,topic)))
{return p1__22503_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22503_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12546__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22626 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22626 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22627){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22627 = meta22627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22626.cljs$lang$type = true;
cljs.core.async.t22626.cljs$lang$ctorStr = "cljs.core.async/t22626";
cljs.core.async.t22626.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t22626");
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22626.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22628){var self__ = this;
var _22628__$1 = this;return self__.meta22627;
});})(mults,ensure_mult))
;
cljs.core.async.t22626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22628,meta22627__$1){var self__ = this;
var _22628__$1 = this;return (new cljs.core.async.t22626(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22627__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22626 = ((function (mults,ensure_mult){
return (function __GT_t22626(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22627){return (new cljs.core.async.t22626(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22627));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22626(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15087__auto___22748 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22748,mults,ensure_mult,p){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22748,mults,ensure_mult,p){
return (function (state_22700){var state_val_22701 = (state_22700[(1)]);if((state_val_22701 === (7)))
{var inst_22696 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22702_22749 = state_22700__$1;(statearr_22702_22749[(2)] = inst_22696);
(statearr_22702_22749[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (20)))
{var state_22700__$1 = state_22700;var statearr_22703_22750 = state_22700__$1;(statearr_22703_22750[(2)] = null);
(statearr_22703_22750[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (1)))
{var state_22700__$1 = state_22700;var statearr_22704_22751 = state_22700__$1;(statearr_22704_22751[(2)] = null);
(statearr_22704_22751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (24)))
{var inst_22679 = (state_22700[(7)]);var inst_22688 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22679);var state_22700__$1 = state_22700;var statearr_22705_22752 = state_22700__$1;(statearr_22705_22752[(2)] = inst_22688);
(statearr_22705_22752[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (4)))
{var inst_22631 = (state_22700[(8)]);var inst_22631__$1 = (state_22700[(2)]);var inst_22632 = (inst_22631__$1 == null);var state_22700__$1 = (function (){var statearr_22706 = state_22700;(statearr_22706[(8)] = inst_22631__$1);
return statearr_22706;
})();if(cljs.core.truth_(inst_22632))
{var statearr_22707_22753 = state_22700__$1;(statearr_22707_22753[(1)] = (5));
} else
{var statearr_22708_22754 = state_22700__$1;(statearr_22708_22754[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (15)))
{var inst_22673 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22709_22755 = state_22700__$1;(statearr_22709_22755[(2)] = inst_22673);
(statearr_22709_22755[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (21)))
{var inst_22693 = (state_22700[(2)]);var state_22700__$1 = (function (){var statearr_22710 = state_22700;(statearr_22710[(9)] = inst_22693);
return statearr_22710;
})();var statearr_22711_22756 = state_22700__$1;(statearr_22711_22756[(2)] = null);
(statearr_22711_22756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (13)))
{var inst_22655 = (state_22700[(10)]);var inst_22657 = cljs.core.chunked_seq_QMARK_.call(null,inst_22655);var state_22700__$1 = state_22700;if(inst_22657)
{var statearr_22712_22757 = state_22700__$1;(statearr_22712_22757[(1)] = (16));
} else
{var statearr_22713_22758 = state_22700__$1;(statearr_22713_22758[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (22)))
{var inst_22685 = (state_22700[(2)]);var state_22700__$1 = state_22700;if(cljs.core.truth_(inst_22685))
{var statearr_22714_22759 = state_22700__$1;(statearr_22714_22759[(1)] = (23));
} else
{var statearr_22715_22760 = state_22700__$1;(statearr_22715_22760[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (6)))
{var inst_22679 = (state_22700[(7)]);var inst_22631 = (state_22700[(8)]);var inst_22681 = (state_22700[(11)]);var inst_22679__$1 = topic_fn.call(null,inst_22631);var inst_22680 = cljs.core.deref.call(null,mults);var inst_22681__$1 = cljs.core.get.call(null,inst_22680,inst_22679__$1);var state_22700__$1 = (function (){var statearr_22716 = state_22700;(statearr_22716[(7)] = inst_22679__$1);
(statearr_22716[(11)] = inst_22681__$1);
return statearr_22716;
})();if(cljs.core.truth_(inst_22681__$1))
{var statearr_22717_22761 = state_22700__$1;(statearr_22717_22761[(1)] = (19));
} else
{var statearr_22718_22762 = state_22700__$1;(statearr_22718_22762[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (25)))
{var inst_22690 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22719_22763 = state_22700__$1;(statearr_22719_22763[(2)] = inst_22690);
(statearr_22719_22763[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (17)))
{var inst_22655 = (state_22700[(10)]);var inst_22664 = cljs.core.first.call(null,inst_22655);var inst_22665 = cljs.core.async.muxch_STAR_.call(null,inst_22664);var inst_22666 = cljs.core.async.close_BANG_.call(null,inst_22665);var inst_22667 = cljs.core.next.call(null,inst_22655);var inst_22641 = inst_22667;var inst_22642 = null;var inst_22643 = (0);var inst_22644 = (0);var state_22700__$1 = (function (){var statearr_22720 = state_22700;(statearr_22720[(12)] = inst_22643);
(statearr_22720[(13)] = inst_22642);
(statearr_22720[(14)] = inst_22666);
(statearr_22720[(15)] = inst_22641);
(statearr_22720[(16)] = inst_22644);
return statearr_22720;
})();var statearr_22721_22764 = state_22700__$1;(statearr_22721_22764[(2)] = null);
(statearr_22721_22764[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (3)))
{var inst_22698 = (state_22700[(2)]);var state_22700__$1 = state_22700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22700__$1,inst_22698);
} else
{if((state_val_22701 === (12)))
{var inst_22675 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22722_22765 = state_22700__$1;(statearr_22722_22765[(2)] = inst_22675);
(statearr_22722_22765[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (2)))
{var state_22700__$1 = state_22700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22700__$1,(4),ch);
} else
{if((state_val_22701 === (23)))
{var state_22700__$1 = state_22700;var statearr_22723_22766 = state_22700__$1;(statearr_22723_22766[(2)] = null);
(statearr_22723_22766[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (19)))
{var inst_22631 = (state_22700[(8)]);var inst_22681 = (state_22700[(11)]);var inst_22683 = cljs.core.async.muxch_STAR_.call(null,inst_22681);var state_22700__$1 = state_22700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22700__$1,(22),inst_22683,inst_22631);
} else
{if((state_val_22701 === (11)))
{var inst_22655 = (state_22700[(10)]);var inst_22641 = (state_22700[(15)]);var inst_22655__$1 = cljs.core.seq.call(null,inst_22641);var state_22700__$1 = (function (){var statearr_22724 = state_22700;(statearr_22724[(10)] = inst_22655__$1);
return statearr_22724;
})();if(inst_22655__$1)
{var statearr_22725_22767 = state_22700__$1;(statearr_22725_22767[(1)] = (13));
} else
{var statearr_22726_22768 = state_22700__$1;(statearr_22726_22768[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (9)))
{var inst_22677 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22727_22769 = state_22700__$1;(statearr_22727_22769[(2)] = inst_22677);
(statearr_22727_22769[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (5)))
{var inst_22638 = cljs.core.deref.call(null,mults);var inst_22639 = cljs.core.vals.call(null,inst_22638);var inst_22640 = cljs.core.seq.call(null,inst_22639);var inst_22641 = inst_22640;var inst_22642 = null;var inst_22643 = (0);var inst_22644 = (0);var state_22700__$1 = (function (){var statearr_22728 = state_22700;(statearr_22728[(12)] = inst_22643);
(statearr_22728[(13)] = inst_22642);
(statearr_22728[(15)] = inst_22641);
(statearr_22728[(16)] = inst_22644);
return statearr_22728;
})();var statearr_22729_22770 = state_22700__$1;(statearr_22729_22770[(2)] = null);
(statearr_22729_22770[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (14)))
{var state_22700__$1 = state_22700;var statearr_22733_22771 = state_22700__$1;(statearr_22733_22771[(2)] = null);
(statearr_22733_22771[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (16)))
{var inst_22655 = (state_22700[(10)]);var inst_22659 = cljs.core.chunk_first.call(null,inst_22655);var inst_22660 = cljs.core.chunk_rest.call(null,inst_22655);var inst_22661 = cljs.core.count.call(null,inst_22659);var inst_22641 = inst_22660;var inst_22642 = inst_22659;var inst_22643 = inst_22661;var inst_22644 = (0);var state_22700__$1 = (function (){var statearr_22734 = state_22700;(statearr_22734[(12)] = inst_22643);
(statearr_22734[(13)] = inst_22642);
(statearr_22734[(15)] = inst_22641);
(statearr_22734[(16)] = inst_22644);
return statearr_22734;
})();var statearr_22735_22772 = state_22700__$1;(statearr_22735_22772[(2)] = null);
(statearr_22735_22772[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (10)))
{var inst_22643 = (state_22700[(12)]);var inst_22642 = (state_22700[(13)]);var inst_22641 = (state_22700[(15)]);var inst_22644 = (state_22700[(16)]);var inst_22649 = cljs.core._nth.call(null,inst_22642,inst_22644);var inst_22650 = cljs.core.async.muxch_STAR_.call(null,inst_22649);var inst_22651 = cljs.core.async.close_BANG_.call(null,inst_22650);var inst_22652 = (inst_22644 + (1));var tmp22730 = inst_22643;var tmp22731 = inst_22642;var tmp22732 = inst_22641;var inst_22641__$1 = tmp22732;var inst_22642__$1 = tmp22731;var inst_22643__$1 = tmp22730;var inst_22644__$1 = inst_22652;var state_22700__$1 = (function (){var statearr_22736 = state_22700;(statearr_22736[(12)] = inst_22643__$1);
(statearr_22736[(13)] = inst_22642__$1);
(statearr_22736[(17)] = inst_22651);
(statearr_22736[(15)] = inst_22641__$1);
(statearr_22736[(16)] = inst_22644__$1);
return statearr_22736;
})();var statearr_22737_22773 = state_22700__$1;(statearr_22737_22773[(2)] = null);
(statearr_22737_22773[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (18)))
{var inst_22670 = (state_22700[(2)]);var state_22700__$1 = state_22700;var statearr_22738_22774 = state_22700__$1;(statearr_22738_22774[(2)] = inst_22670);
(statearr_22738_22774[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22701 === (8)))
{var inst_22643 = (state_22700[(12)]);var inst_22644 = (state_22700[(16)]);var inst_22646 = (inst_22644 < inst_22643);var inst_22647 = inst_22646;var state_22700__$1 = state_22700;if(cljs.core.truth_(inst_22647))
{var statearr_22739_22775 = state_22700__$1;(statearr_22739_22775[(1)] = (10));
} else
{var statearr_22740_22776 = state_22700__$1;(statearr_22740_22776[(1)] = (11));
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
});})(c__15087__auto___22748,mults,ensure_mult,p))
;return ((function (switch__15072__auto__,c__15087__auto___22748,mults,ensure_mult,p){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22744[(0)] = state_machine__15073__auto__);
(statearr_22744[(1)] = (1));
return statearr_22744;
});
var state_machine__15073__auto____1 = (function (state_22700){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22700);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22745){if((e22745 instanceof Object))
{var ex__15076__auto__ = e22745;var statearr_22746_22777 = state_22700;(statearr_22746_22777[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22700);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22745;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22778 = state_22700;
state_22700 = G__22778;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22700){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22748,mults,ensure_mult,p))
})();var state__15089__auto__ = (function (){var statearr_22747 = f__15088__auto__.call(null);(statearr_22747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22748);
return statearr_22747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22748,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__15087__auto___22915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22885){var state_val_22886 = (state_22885[(1)]);if((state_val_22886 === (7)))
{var state_22885__$1 = state_22885;var statearr_22887_22916 = state_22885__$1;(statearr_22887_22916[(2)] = null);
(statearr_22887_22916[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (1)))
{var state_22885__$1 = state_22885;var statearr_22888_22917 = state_22885__$1;(statearr_22888_22917[(2)] = null);
(statearr_22888_22917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (4)))
{var inst_22849 = (state_22885[(7)]);var inst_22851 = (inst_22849 < cnt);var state_22885__$1 = state_22885;if(cljs.core.truth_(inst_22851))
{var statearr_22889_22918 = state_22885__$1;(statearr_22889_22918[(1)] = (6));
} else
{var statearr_22890_22919 = state_22885__$1;(statearr_22890_22919[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (15)))
{var inst_22881 = (state_22885[(2)]);var state_22885__$1 = state_22885;var statearr_22891_22920 = state_22885__$1;(statearr_22891_22920[(2)] = inst_22881);
(statearr_22891_22920[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (13)))
{var inst_22874 = cljs.core.async.close_BANG_.call(null,out);var state_22885__$1 = state_22885;var statearr_22892_22921 = state_22885__$1;(statearr_22892_22921[(2)] = inst_22874);
(statearr_22892_22921[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (6)))
{var state_22885__$1 = state_22885;var statearr_22893_22922 = state_22885__$1;(statearr_22893_22922[(2)] = null);
(statearr_22893_22922[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (3)))
{var inst_22883 = (state_22885[(2)]);var state_22885__$1 = state_22885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22885__$1,inst_22883);
} else
{if((state_val_22886 === (12)))
{var inst_22871 = (state_22885[(8)]);var inst_22871__$1 = (state_22885[(2)]);var inst_22872 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22871__$1);var state_22885__$1 = (function (){var statearr_22894 = state_22885;(statearr_22894[(8)] = inst_22871__$1);
return statearr_22894;
})();if(cljs.core.truth_(inst_22872))
{var statearr_22895_22923 = state_22885__$1;(statearr_22895_22923[(1)] = (13));
} else
{var statearr_22896_22924 = state_22885__$1;(statearr_22896_22924[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (2)))
{var inst_22848 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22849 = (0);var state_22885__$1 = (function (){var statearr_22897 = state_22885;(statearr_22897[(9)] = inst_22848);
(statearr_22897[(7)] = inst_22849);
return statearr_22897;
})();var statearr_22898_22925 = state_22885__$1;(statearr_22898_22925[(2)] = null);
(statearr_22898_22925[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (11)))
{var inst_22849 = (state_22885[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22885,(10),Object,null,(9));var inst_22858 = chs__$1.call(null,inst_22849);var inst_22859 = done.call(null,inst_22849);var inst_22860 = cljs.core.async.take_BANG_.call(null,inst_22858,inst_22859);var state_22885__$1 = state_22885;var statearr_22899_22926 = state_22885__$1;(statearr_22899_22926[(2)] = inst_22860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22885__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (9)))
{var inst_22849 = (state_22885[(7)]);var inst_22862 = (state_22885[(2)]);var inst_22863 = (inst_22849 + (1));var inst_22849__$1 = inst_22863;var state_22885__$1 = (function (){var statearr_22900 = state_22885;(statearr_22900[(10)] = inst_22862);
(statearr_22900[(7)] = inst_22849__$1);
return statearr_22900;
})();var statearr_22901_22927 = state_22885__$1;(statearr_22901_22927[(2)] = null);
(statearr_22901_22927[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (5)))
{var inst_22869 = (state_22885[(2)]);var state_22885__$1 = (function (){var statearr_22902 = state_22885;(statearr_22902[(11)] = inst_22869);
return statearr_22902;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22885__$1,(12),dchan);
} else
{if((state_val_22886 === (14)))
{var inst_22871 = (state_22885[(8)]);var inst_22876 = cljs.core.apply.call(null,f,inst_22871);var state_22885__$1 = state_22885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22885__$1,(16),out,inst_22876);
} else
{if((state_val_22886 === (16)))
{var inst_22878 = (state_22885[(2)]);var state_22885__$1 = (function (){var statearr_22903 = state_22885;(statearr_22903[(12)] = inst_22878);
return statearr_22903;
})();var statearr_22904_22928 = state_22885__$1;(statearr_22904_22928[(2)] = null);
(statearr_22904_22928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (10)))
{var inst_22853 = (state_22885[(2)]);var inst_22854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22885__$1 = (function (){var statearr_22905 = state_22885;(statearr_22905[(13)] = inst_22853);
return statearr_22905;
})();var statearr_22906_22929 = state_22885__$1;(statearr_22906_22929[(2)] = inst_22854);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22885__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22886 === (8)))
{var inst_22867 = (state_22885[(2)]);var state_22885__$1 = state_22885;var statearr_22907_22930 = state_22885__$1;(statearr_22907_22930[(2)] = inst_22867);
(statearr_22907_22930[(1)] = (5));
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
});})(c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15072__auto__,c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_22911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22911[(0)] = state_machine__15073__auto__);
(statearr_22911[(1)] = (1));
return statearr_22911;
});
var state_machine__15073__auto____1 = (function (state_22885){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_22885);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e22912){if((e22912 instanceof Object))
{var ex__15076__auto__ = e22912;var statearr_22913_22931 = state_22885;(statearr_22913_22931[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22912;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22932 = state_22885;
state_22885 = G__22932;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_22885){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_22885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15089__auto__ = (function (){var statearr_22914 = f__15088__auto__.call(null);(statearr_22914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___22915);
return statearr_22914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___22915,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23040 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23040,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23040,out){
return (function (state_23016){var state_val_23017 = (state_23016[(1)]);if((state_val_23017 === (7)))
{var inst_22996 = (state_23016[(7)]);var inst_22995 = (state_23016[(8)]);var inst_22995__$1 = (state_23016[(2)]);var inst_22996__$1 = cljs.core.nth.call(null,inst_22995__$1,(0),null);var inst_22997 = cljs.core.nth.call(null,inst_22995__$1,(1),null);var inst_22998 = (inst_22996__$1 == null);var state_23016__$1 = (function (){var statearr_23018 = state_23016;(statearr_23018[(7)] = inst_22996__$1);
(statearr_23018[(9)] = inst_22997);
(statearr_23018[(8)] = inst_22995__$1);
return statearr_23018;
})();if(cljs.core.truth_(inst_22998))
{var statearr_23019_23041 = state_23016__$1;(statearr_23019_23041[(1)] = (8));
} else
{var statearr_23020_23042 = state_23016__$1;(statearr_23020_23042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (1)))
{var inst_22987 = cljs.core.vec.call(null,chs);var inst_22988 = inst_22987;var state_23016__$1 = (function (){var statearr_23021 = state_23016;(statearr_23021[(10)] = inst_22988);
return statearr_23021;
})();var statearr_23022_23043 = state_23016__$1;(statearr_23022_23043[(2)] = null);
(statearr_23022_23043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (4)))
{var inst_22988 = (state_23016[(10)]);var state_23016__$1 = state_23016;return cljs.core.async.ioc_alts_BANG_.call(null,state_23016__$1,(7),inst_22988);
} else
{if((state_val_23017 === (6)))
{var inst_23012 = (state_23016[(2)]);var state_23016__$1 = state_23016;var statearr_23023_23044 = state_23016__$1;(statearr_23023_23044[(2)] = inst_23012);
(statearr_23023_23044[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (3)))
{var inst_23014 = (state_23016[(2)]);var state_23016__$1 = state_23016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23016__$1,inst_23014);
} else
{if((state_val_23017 === (2)))
{var inst_22988 = (state_23016[(10)]);var inst_22990 = cljs.core.count.call(null,inst_22988);var inst_22991 = (inst_22990 > (0));var state_23016__$1 = state_23016;if(cljs.core.truth_(inst_22991))
{var statearr_23025_23045 = state_23016__$1;(statearr_23025_23045[(1)] = (4));
} else
{var statearr_23026_23046 = state_23016__$1;(statearr_23026_23046[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (11)))
{var inst_22988 = (state_23016[(10)]);var inst_23005 = (state_23016[(2)]);var tmp23024 = inst_22988;var inst_22988__$1 = tmp23024;var state_23016__$1 = (function (){var statearr_23027 = state_23016;(statearr_23027[(11)] = inst_23005);
(statearr_23027[(10)] = inst_22988__$1);
return statearr_23027;
})();var statearr_23028_23047 = state_23016__$1;(statearr_23028_23047[(2)] = null);
(statearr_23028_23047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (9)))
{var inst_22996 = (state_23016[(7)]);var state_23016__$1 = state_23016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23016__$1,(11),out,inst_22996);
} else
{if((state_val_23017 === (5)))
{var inst_23010 = cljs.core.async.close_BANG_.call(null,out);var state_23016__$1 = state_23016;var statearr_23029_23048 = state_23016__$1;(statearr_23029_23048[(2)] = inst_23010);
(statearr_23029_23048[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (10)))
{var inst_23008 = (state_23016[(2)]);var state_23016__$1 = state_23016;var statearr_23030_23049 = state_23016__$1;(statearr_23030_23049[(2)] = inst_23008);
(statearr_23030_23049[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23017 === (8)))
{var inst_22996 = (state_23016[(7)]);var inst_22997 = (state_23016[(9)]);var inst_22995 = (state_23016[(8)]);var inst_22988 = (state_23016[(10)]);var inst_23000 = (function (){var c = inst_22997;var v = inst_22996;var vec__22993 = inst_22995;var cs = inst_22988;return ((function (c,v,vec__22993,cs,inst_22996,inst_22997,inst_22995,inst_22988,state_val_23017,c__15087__auto___23040,out){
return (function (p1__22933_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22933_SHARP_);
});
;})(c,v,vec__22993,cs,inst_22996,inst_22997,inst_22995,inst_22988,state_val_23017,c__15087__auto___23040,out))
})();var inst_23001 = cljs.core.filterv.call(null,inst_23000,inst_22988);var inst_22988__$1 = inst_23001;var state_23016__$1 = (function (){var statearr_23031 = state_23016;(statearr_23031[(10)] = inst_22988__$1);
return statearr_23031;
})();var statearr_23032_23050 = state_23016__$1;(statearr_23032_23050[(2)] = null);
(statearr_23032_23050[(1)] = (2));
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
});})(c__15087__auto___23040,out))
;return ((function (switch__15072__auto__,c__15087__auto___23040,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23036 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23036[(0)] = state_machine__15073__auto__);
(statearr_23036[(1)] = (1));
return statearr_23036;
});
var state_machine__15073__auto____1 = (function (state_23016){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23016);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23037){if((e23037 instanceof Object))
{var ex__15076__auto__ = e23037;var statearr_23038_23051 = state_23016;(statearr_23038_23051[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23037;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23052 = state_23016;
state_23016 = G__23052;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23016){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23040,out))
})();var state__15089__auto__ = (function (){var statearr_23039 = f__15088__auto__.call(null);(statearr_23039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23040);
return statearr_23039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23040,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23145,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23145,out){
return (function (state_23122){var state_val_23123 = (state_23122[(1)]);if((state_val_23123 === (7)))
{var inst_23104 = (state_23122[(7)]);var inst_23104__$1 = (state_23122[(2)]);var inst_23105 = (inst_23104__$1 == null);var inst_23106 = cljs.core.not.call(null,inst_23105);var state_23122__$1 = (function (){var statearr_23124 = state_23122;(statearr_23124[(7)] = inst_23104__$1);
return statearr_23124;
})();if(inst_23106)
{var statearr_23125_23146 = state_23122__$1;(statearr_23125_23146[(1)] = (8));
} else
{var statearr_23126_23147 = state_23122__$1;(statearr_23126_23147[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (1)))
{var inst_23099 = (0);var state_23122__$1 = (function (){var statearr_23127 = state_23122;(statearr_23127[(8)] = inst_23099);
return statearr_23127;
})();var statearr_23128_23148 = state_23122__$1;(statearr_23128_23148[(2)] = null);
(statearr_23128_23148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (4)))
{var state_23122__$1 = state_23122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(7),ch);
} else
{if((state_val_23123 === (6)))
{var inst_23117 = (state_23122[(2)]);var state_23122__$1 = state_23122;var statearr_23129_23149 = state_23122__$1;(statearr_23129_23149[(2)] = inst_23117);
(statearr_23129_23149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (3)))
{var inst_23119 = (state_23122[(2)]);var inst_23120 = cljs.core.async.close_BANG_.call(null,out);var state_23122__$1 = (function (){var statearr_23130 = state_23122;(statearr_23130[(9)] = inst_23119);
return statearr_23130;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else
{if((state_val_23123 === (2)))
{var inst_23099 = (state_23122[(8)]);var inst_23101 = (inst_23099 < n);var state_23122__$1 = state_23122;if(cljs.core.truth_(inst_23101))
{var statearr_23131_23150 = state_23122__$1;(statearr_23131_23150[(1)] = (4));
} else
{var statearr_23132_23151 = state_23122__$1;(statearr_23132_23151[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (11)))
{var inst_23099 = (state_23122[(8)]);var inst_23109 = (state_23122[(2)]);var inst_23110 = (inst_23099 + (1));var inst_23099__$1 = inst_23110;var state_23122__$1 = (function (){var statearr_23133 = state_23122;(statearr_23133[(8)] = inst_23099__$1);
(statearr_23133[(10)] = inst_23109);
return statearr_23133;
})();var statearr_23134_23152 = state_23122__$1;(statearr_23134_23152[(2)] = null);
(statearr_23134_23152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (9)))
{var state_23122__$1 = state_23122;var statearr_23135_23153 = state_23122__$1;(statearr_23135_23153[(2)] = null);
(statearr_23135_23153[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (5)))
{var state_23122__$1 = state_23122;var statearr_23136_23154 = state_23122__$1;(statearr_23136_23154[(2)] = null);
(statearr_23136_23154[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (10)))
{var inst_23114 = (state_23122[(2)]);var state_23122__$1 = state_23122;var statearr_23137_23155 = state_23122__$1;(statearr_23137_23155[(2)] = inst_23114);
(statearr_23137_23155[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23123 === (8)))
{var inst_23104 = (state_23122[(7)]);var state_23122__$1 = state_23122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23122__$1,(11),out,inst_23104);
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
});})(c__15087__auto___23145,out))
;return ((function (switch__15072__auto__,c__15087__auto___23145,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23141 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23141[(0)] = state_machine__15073__auto__);
(statearr_23141[(1)] = (1));
return statearr_23141;
});
var state_machine__15073__auto____1 = (function (state_23122){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23122);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23142){if((e23142 instanceof Object))
{var ex__15076__auto__ = e23142;var statearr_23143_23156 = state_23122;(statearr_23143_23156[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23157 = state_23122;
state_23122 = G__23157;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23145,out))
})();var state__15089__auto__ = (function (){var statearr_23144 = f__15088__auto__.call(null);(statearr_23144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23145);
return statearr_23144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23145,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23165 = (function (ch,f,map_LT_,meta23166){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23166 = meta23166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23165.cljs$lang$type = true;
cljs.core.async.t23165.cljs$lang$ctorStr = "cljs.core.async/t23165";
cljs.core.async.t23165.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23165");
});
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23168 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23168 = (function (fn1,_,meta23166,ch,f,map_LT_,meta23169){
this.fn1 = fn1;
this._ = _;
this.meta23166 = meta23166;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23169 = meta23169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23168.cljs$lang$type = true;
cljs.core.async.t23168.cljs$lang$ctorStr = "cljs.core.async/t23168";
cljs.core.async.t23168.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23168");
});})(___$1))
;
cljs.core.async.t23168.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23158_SHARP_){return f1.call(null,(((p1__23158_SHARP_ == null))?null:self__.f.call(null,p1__23158_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23170){var self__ = this;
var _23170__$1 = this;return self__.meta23169;
});})(___$1))
;
cljs.core.async.t23168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23170,meta23169__$1){var self__ = this;
var _23170__$1 = this;return (new cljs.core.async.t23168(self__.fn1,self__._,self__.meta23166,self__.ch,self__.f,self__.map_LT_,meta23169__$1));
});})(___$1))
;
cljs.core.async.__GT_t23168 = ((function (___$1){
return (function __GT_t23168(fn1__$1,___$2,meta23166__$1,ch__$2,f__$2,map_LT___$2,meta23169){return (new cljs.core.async.t23168(fn1__$1,___$2,meta23166__$1,ch__$2,f__$2,map_LT___$2,meta23169));
});})(___$1))
;
}
return (new cljs.core.async.t23168(fn1,___$1,self__.meta23166,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23165.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23167){var self__ = this;
var _23167__$1 = this;return self__.meta23166;
});
cljs.core.async.t23165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23167,meta23166__$1){var self__ = this;
var _23167__$1 = this;return (new cljs.core.async.t23165(self__.ch,self__.f,self__.map_LT_,meta23166__$1));
});
cljs.core.async.__GT_t23165 = (function __GT_t23165(ch__$1,f__$1,map_LT___$1,meta23166){return (new cljs.core.async.t23165(ch__$1,f__$1,map_LT___$1,meta23166));
});
}
return (new cljs.core.async.t23165(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23174 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23174 = (function (ch,f,map_GT_,meta23175){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23175 = meta23175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23174.cljs$lang$type = true;
cljs.core.async.t23174.cljs$lang$ctorStr = "cljs.core.async/t23174";
cljs.core.async.t23174.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23174");
});
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23176){var self__ = this;
var _23176__$1 = this;return self__.meta23175;
});
cljs.core.async.t23174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23176,meta23175__$1){var self__ = this;
var _23176__$1 = this;return (new cljs.core.async.t23174(self__.ch,self__.f,self__.map_GT_,meta23175__$1));
});
cljs.core.async.__GT_t23174 = (function __GT_t23174(ch__$1,f__$1,map_GT___$1,meta23175){return (new cljs.core.async.t23174(ch__$1,f__$1,map_GT___$1,meta23175));
});
}
return (new cljs.core.async.t23174(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23180 = (function (ch,p,filter_GT_,meta23181){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23181 = meta23181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23180.cljs$lang$type = true;
cljs.core.async.t23180.cljs$lang$ctorStr = "cljs.core.async/t23180";
cljs.core.async.t23180.cljs$lang$ctorPrWriter = (function (this__13124__auto__,writer__13125__auto__,opt__13126__auto__){return cljs.core._write.call(null,writer__13125__auto__,"cljs.core.async/t23180");
});
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23180.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23182){var self__ = this;
var _23182__$1 = this;return self__.meta23181;
});
cljs.core.async.t23180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23182,meta23181__$1){var self__ = this;
var _23182__$1 = this;return (new cljs.core.async.t23180(self__.ch,self__.p,self__.filter_GT_,meta23181__$1));
});
cljs.core.async.__GT_t23180 = (function __GT_t23180(ch__$1,p__$1,filter_GT___$1,meta23181){return (new cljs.core.async.t23180(ch__$1,p__$1,filter_GT___$1,meta23181));
});
}
return (new cljs.core.async.t23180(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23265 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23265,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23265,out){
return (function (state_23244){var state_val_23245 = (state_23244[(1)]);if((state_val_23245 === (7)))
{var inst_23240 = (state_23244[(2)]);var state_23244__$1 = state_23244;var statearr_23246_23266 = state_23244__$1;(statearr_23246_23266[(2)] = inst_23240);
(statearr_23246_23266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (1)))
{var state_23244__$1 = state_23244;var statearr_23247_23267 = state_23244__$1;(statearr_23247_23267[(2)] = null);
(statearr_23247_23267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (4)))
{var inst_23226 = (state_23244[(7)]);var inst_23226__$1 = (state_23244[(2)]);var inst_23227 = (inst_23226__$1 == null);var state_23244__$1 = (function (){var statearr_23248 = state_23244;(statearr_23248[(7)] = inst_23226__$1);
return statearr_23248;
})();if(cljs.core.truth_(inst_23227))
{var statearr_23249_23268 = state_23244__$1;(statearr_23249_23268[(1)] = (5));
} else
{var statearr_23250_23269 = state_23244__$1;(statearr_23250_23269[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (6)))
{var inst_23226 = (state_23244[(7)]);var inst_23231 = p.call(null,inst_23226);var state_23244__$1 = state_23244;if(cljs.core.truth_(inst_23231))
{var statearr_23251_23270 = state_23244__$1;(statearr_23251_23270[(1)] = (8));
} else
{var statearr_23252_23271 = state_23244__$1;(statearr_23252_23271[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (3)))
{var inst_23242 = (state_23244[(2)]);var state_23244__$1 = state_23244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23244__$1,inst_23242);
} else
{if((state_val_23245 === (2)))
{var state_23244__$1 = state_23244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(4),ch);
} else
{if((state_val_23245 === (11)))
{var inst_23234 = (state_23244[(2)]);var state_23244__$1 = state_23244;var statearr_23253_23272 = state_23244__$1;(statearr_23253_23272[(2)] = inst_23234);
(statearr_23253_23272[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (9)))
{var state_23244__$1 = state_23244;var statearr_23254_23273 = state_23244__$1;(statearr_23254_23273[(2)] = null);
(statearr_23254_23273[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (5)))
{var inst_23229 = cljs.core.async.close_BANG_.call(null,out);var state_23244__$1 = state_23244;var statearr_23255_23274 = state_23244__$1;(statearr_23255_23274[(2)] = inst_23229);
(statearr_23255_23274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (10)))
{var inst_23237 = (state_23244[(2)]);var state_23244__$1 = (function (){var statearr_23256 = state_23244;(statearr_23256[(8)] = inst_23237);
return statearr_23256;
})();var statearr_23257_23275 = state_23244__$1;(statearr_23257_23275[(2)] = null);
(statearr_23257_23275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23245 === (8)))
{var inst_23226 = (state_23244[(7)]);var state_23244__$1 = state_23244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23244__$1,(11),out,inst_23226);
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
});})(c__15087__auto___23265,out))
;return ((function (switch__15072__auto__,c__15087__auto___23265,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23261 = [null,null,null,null,null,null,null,null,null];(statearr_23261[(0)] = state_machine__15073__auto__);
(statearr_23261[(1)] = (1));
return statearr_23261;
});
var state_machine__15073__auto____1 = (function (state_23244){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23244);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23262){if((e23262 instanceof Object))
{var ex__15076__auto__ = e23262;var statearr_23263_23276 = state_23244;(statearr_23263_23276[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23262;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23277 = state_23244;
state_23244 = G__23277;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23244){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23265,out))
})();var state__15089__auto__ = (function (){var statearr_23264 = f__15088__auto__.call(null);(statearr_23264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23265);
return statearr_23264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23265,out))
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
return (function (state_23443){var state_val_23444 = (state_23443[(1)]);if((state_val_23444 === (7)))
{var inst_23439 = (state_23443[(2)]);var state_23443__$1 = state_23443;var statearr_23445_23486 = state_23443__$1;(statearr_23445_23486[(2)] = inst_23439);
(statearr_23445_23486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (20)))
{var inst_23409 = (state_23443[(7)]);var inst_23420 = (state_23443[(2)]);var inst_23421 = cljs.core.next.call(null,inst_23409);var inst_23395 = inst_23421;var inst_23396 = null;var inst_23397 = (0);var inst_23398 = (0);var state_23443__$1 = (function (){var statearr_23446 = state_23443;(statearr_23446[(8)] = inst_23420);
(statearr_23446[(9)] = inst_23395);
(statearr_23446[(10)] = inst_23397);
(statearr_23446[(11)] = inst_23398);
(statearr_23446[(12)] = inst_23396);
return statearr_23446;
})();var statearr_23447_23487 = state_23443__$1;(statearr_23447_23487[(2)] = null);
(statearr_23447_23487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (1)))
{var state_23443__$1 = state_23443;var statearr_23448_23488 = state_23443__$1;(statearr_23448_23488[(2)] = null);
(statearr_23448_23488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (4)))
{var inst_23384 = (state_23443[(13)]);var inst_23384__$1 = (state_23443[(2)]);var inst_23385 = (inst_23384__$1 == null);var state_23443__$1 = (function (){var statearr_23449 = state_23443;(statearr_23449[(13)] = inst_23384__$1);
return statearr_23449;
})();if(cljs.core.truth_(inst_23385))
{var statearr_23450_23489 = state_23443__$1;(statearr_23450_23489[(1)] = (5));
} else
{var statearr_23451_23490 = state_23443__$1;(statearr_23451_23490[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (15)))
{var state_23443__$1 = state_23443;var statearr_23455_23491 = state_23443__$1;(statearr_23455_23491[(2)] = null);
(statearr_23455_23491[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (21)))
{var state_23443__$1 = state_23443;var statearr_23456_23492 = state_23443__$1;(statearr_23456_23492[(2)] = null);
(statearr_23456_23492[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (13)))
{var inst_23395 = (state_23443[(9)]);var inst_23397 = (state_23443[(10)]);var inst_23398 = (state_23443[(11)]);var inst_23396 = (state_23443[(12)]);var inst_23405 = (state_23443[(2)]);var inst_23406 = (inst_23398 + (1));var tmp23452 = inst_23395;var tmp23453 = inst_23397;var tmp23454 = inst_23396;var inst_23395__$1 = tmp23452;var inst_23396__$1 = tmp23454;var inst_23397__$1 = tmp23453;var inst_23398__$1 = inst_23406;var state_23443__$1 = (function (){var statearr_23457 = state_23443;(statearr_23457[(9)] = inst_23395__$1);
(statearr_23457[(14)] = inst_23405);
(statearr_23457[(10)] = inst_23397__$1);
(statearr_23457[(11)] = inst_23398__$1);
(statearr_23457[(12)] = inst_23396__$1);
return statearr_23457;
})();var statearr_23458_23493 = state_23443__$1;(statearr_23458_23493[(2)] = null);
(statearr_23458_23493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (22)))
{var state_23443__$1 = state_23443;var statearr_23459_23494 = state_23443__$1;(statearr_23459_23494[(2)] = null);
(statearr_23459_23494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (6)))
{var inst_23384 = (state_23443[(13)]);var inst_23393 = f.call(null,inst_23384);var inst_23394 = cljs.core.seq.call(null,inst_23393);var inst_23395 = inst_23394;var inst_23396 = null;var inst_23397 = (0);var inst_23398 = (0);var state_23443__$1 = (function (){var statearr_23460 = state_23443;(statearr_23460[(9)] = inst_23395);
(statearr_23460[(10)] = inst_23397);
(statearr_23460[(11)] = inst_23398);
(statearr_23460[(12)] = inst_23396);
return statearr_23460;
})();var statearr_23461_23495 = state_23443__$1;(statearr_23461_23495[(2)] = null);
(statearr_23461_23495[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (17)))
{var inst_23409 = (state_23443[(7)]);var inst_23413 = cljs.core.chunk_first.call(null,inst_23409);var inst_23414 = cljs.core.chunk_rest.call(null,inst_23409);var inst_23415 = cljs.core.count.call(null,inst_23413);var inst_23395 = inst_23414;var inst_23396 = inst_23413;var inst_23397 = inst_23415;var inst_23398 = (0);var state_23443__$1 = (function (){var statearr_23462 = state_23443;(statearr_23462[(9)] = inst_23395);
(statearr_23462[(10)] = inst_23397);
(statearr_23462[(11)] = inst_23398);
(statearr_23462[(12)] = inst_23396);
return statearr_23462;
})();var statearr_23463_23496 = state_23443__$1;(statearr_23463_23496[(2)] = null);
(statearr_23463_23496[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (3)))
{var inst_23441 = (state_23443[(2)]);var state_23443__$1 = state_23443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23443__$1,inst_23441);
} else
{if((state_val_23444 === (12)))
{var inst_23429 = (state_23443[(2)]);var state_23443__$1 = state_23443;var statearr_23464_23497 = state_23443__$1;(statearr_23464_23497[(2)] = inst_23429);
(statearr_23464_23497[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (2)))
{var state_23443__$1 = state_23443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23443__$1,(4),in$);
} else
{if((state_val_23444 === (23)))
{var inst_23437 = (state_23443[(2)]);var state_23443__$1 = state_23443;var statearr_23465_23498 = state_23443__$1;(statearr_23465_23498[(2)] = inst_23437);
(statearr_23465_23498[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (19)))
{var inst_23424 = (state_23443[(2)]);var state_23443__$1 = state_23443;var statearr_23466_23499 = state_23443__$1;(statearr_23466_23499[(2)] = inst_23424);
(statearr_23466_23499[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (11)))
{var inst_23409 = (state_23443[(7)]);var inst_23395 = (state_23443[(9)]);var inst_23409__$1 = cljs.core.seq.call(null,inst_23395);var state_23443__$1 = (function (){var statearr_23467 = state_23443;(statearr_23467[(7)] = inst_23409__$1);
return statearr_23467;
})();if(inst_23409__$1)
{var statearr_23468_23500 = state_23443__$1;(statearr_23468_23500[(1)] = (14));
} else
{var statearr_23469_23501 = state_23443__$1;(statearr_23469_23501[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (9)))
{var inst_23431 = (state_23443[(2)]);var inst_23432 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23443__$1 = (function (){var statearr_23470 = state_23443;(statearr_23470[(15)] = inst_23431);
return statearr_23470;
})();if(cljs.core.truth_(inst_23432))
{var statearr_23471_23502 = state_23443__$1;(statearr_23471_23502[(1)] = (21));
} else
{var statearr_23472_23503 = state_23443__$1;(statearr_23472_23503[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (5)))
{var inst_23387 = cljs.core.async.close_BANG_.call(null,out);var state_23443__$1 = state_23443;var statearr_23473_23504 = state_23443__$1;(statearr_23473_23504[(2)] = inst_23387);
(statearr_23473_23504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (14)))
{var inst_23409 = (state_23443[(7)]);var inst_23411 = cljs.core.chunked_seq_QMARK_.call(null,inst_23409);var state_23443__$1 = state_23443;if(inst_23411)
{var statearr_23474_23505 = state_23443__$1;(statearr_23474_23505[(1)] = (17));
} else
{var statearr_23475_23506 = state_23443__$1;(statearr_23475_23506[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (16)))
{var inst_23427 = (state_23443[(2)]);var state_23443__$1 = state_23443;var statearr_23476_23507 = state_23443__$1;(statearr_23476_23507[(2)] = inst_23427);
(statearr_23476_23507[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23444 === (10)))
{var inst_23398 = (state_23443[(11)]);var inst_23396 = (state_23443[(12)]);var inst_23403 = cljs.core._nth.call(null,inst_23396,inst_23398);var state_23443__$1 = state_23443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23443__$1,(13),out,inst_23403);
} else
{if((state_val_23444 === (18)))
{var inst_23409 = (state_23443[(7)]);var inst_23418 = cljs.core.first.call(null,inst_23409);var state_23443__$1 = state_23443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23443__$1,(20),out,inst_23418);
} else
{if((state_val_23444 === (8)))
{var inst_23397 = (state_23443[(10)]);var inst_23398 = (state_23443[(11)]);var inst_23400 = (inst_23398 < inst_23397);var inst_23401 = inst_23400;var state_23443__$1 = state_23443;if(cljs.core.truth_(inst_23401))
{var statearr_23477_23508 = state_23443__$1;(statearr_23477_23508[(1)] = (10));
} else
{var statearr_23478_23509 = state_23443__$1;(statearr_23478_23509[(1)] = (11));
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
var state_machine__15073__auto____0 = (function (){var statearr_23482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23482[(0)] = state_machine__15073__auto__);
(statearr_23482[(1)] = (1));
return statearr_23482;
});
var state_machine__15073__auto____1 = (function (state_23443){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23443);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23483){if((e23483 instanceof Object))
{var ex__15076__auto__ = e23483;var statearr_23484_23510 = state_23443;(statearr_23484_23510[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23483;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23511 = state_23443;
state_23443 = G__23511;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23443){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto__))
})();var state__15089__auto__ = (function (){var statearr_23485 = f__15088__auto__.call(null);(statearr_23485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto__);
return statearr_23485;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23608,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23608,out){
return (function (state_23583){var state_val_23584 = (state_23583[(1)]);if((state_val_23584 === (7)))
{var inst_23578 = (state_23583[(2)]);var state_23583__$1 = state_23583;var statearr_23585_23609 = state_23583__$1;(statearr_23585_23609[(2)] = inst_23578);
(statearr_23585_23609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (1)))
{var inst_23560 = null;var state_23583__$1 = (function (){var statearr_23586 = state_23583;(statearr_23586[(7)] = inst_23560);
return statearr_23586;
})();var statearr_23587_23610 = state_23583__$1;(statearr_23587_23610[(2)] = null);
(statearr_23587_23610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (4)))
{var inst_23563 = (state_23583[(8)]);var inst_23563__$1 = (state_23583[(2)]);var inst_23564 = (inst_23563__$1 == null);var inst_23565 = cljs.core.not.call(null,inst_23564);var state_23583__$1 = (function (){var statearr_23588 = state_23583;(statearr_23588[(8)] = inst_23563__$1);
return statearr_23588;
})();if(inst_23565)
{var statearr_23589_23611 = state_23583__$1;(statearr_23589_23611[(1)] = (5));
} else
{var statearr_23590_23612 = state_23583__$1;(statearr_23590_23612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (6)))
{var state_23583__$1 = state_23583;var statearr_23591_23613 = state_23583__$1;(statearr_23591_23613[(2)] = null);
(statearr_23591_23613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (3)))
{var inst_23580 = (state_23583[(2)]);var inst_23581 = cljs.core.async.close_BANG_.call(null,out);var state_23583__$1 = (function (){var statearr_23592 = state_23583;(statearr_23592[(9)] = inst_23580);
return statearr_23592;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23583__$1,inst_23581);
} else
{if((state_val_23584 === (2)))
{var state_23583__$1 = state_23583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23583__$1,(4),ch);
} else
{if((state_val_23584 === (11)))
{var inst_23563 = (state_23583[(8)]);var inst_23572 = (state_23583[(2)]);var inst_23560 = inst_23563;var state_23583__$1 = (function (){var statearr_23593 = state_23583;(statearr_23593[(7)] = inst_23560);
(statearr_23593[(10)] = inst_23572);
return statearr_23593;
})();var statearr_23594_23614 = state_23583__$1;(statearr_23594_23614[(2)] = null);
(statearr_23594_23614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (9)))
{var inst_23563 = (state_23583[(8)]);var state_23583__$1 = state_23583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23583__$1,(11),out,inst_23563);
} else
{if((state_val_23584 === (5)))
{var inst_23560 = (state_23583[(7)]);var inst_23563 = (state_23583[(8)]);var inst_23567 = cljs.core._EQ_.call(null,inst_23563,inst_23560);var state_23583__$1 = state_23583;if(inst_23567)
{var statearr_23596_23615 = state_23583__$1;(statearr_23596_23615[(1)] = (8));
} else
{var statearr_23597_23616 = state_23583__$1;(statearr_23597_23616[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (10)))
{var inst_23575 = (state_23583[(2)]);var state_23583__$1 = state_23583;var statearr_23598_23617 = state_23583__$1;(statearr_23598_23617[(2)] = inst_23575);
(statearr_23598_23617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23584 === (8)))
{var inst_23560 = (state_23583[(7)]);var tmp23595 = inst_23560;var inst_23560__$1 = tmp23595;var state_23583__$1 = (function (){var statearr_23599 = state_23583;(statearr_23599[(7)] = inst_23560__$1);
return statearr_23599;
})();var statearr_23600_23618 = state_23583__$1;(statearr_23600_23618[(2)] = null);
(statearr_23600_23618[(1)] = (2));
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
});})(c__15087__auto___23608,out))
;return ((function (switch__15072__auto__,c__15087__auto___23608,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23604 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23604[(0)] = state_machine__15073__auto__);
(statearr_23604[(1)] = (1));
return statearr_23604;
});
var state_machine__15073__auto____1 = (function (state_23583){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23583);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23605){if((e23605 instanceof Object))
{var ex__15076__auto__ = e23605;var statearr_23606_23619 = state_23583;(statearr_23606_23619[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23620 = state_23583;
state_23583 = G__23620;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23583){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23608,out))
})();var state__15089__auto__ = (function (){var statearr_23607 = f__15088__auto__.call(null);(statearr_23607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23608);
return statearr_23607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23608,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23755,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23755,out){
return (function (state_23725){var state_val_23726 = (state_23725[(1)]);if((state_val_23726 === (7)))
{var inst_23721 = (state_23725[(2)]);var state_23725__$1 = state_23725;var statearr_23727_23756 = state_23725__$1;(statearr_23727_23756[(2)] = inst_23721);
(statearr_23727_23756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (1)))
{var inst_23688 = (new Array(n));var inst_23689 = inst_23688;var inst_23690 = (0);var state_23725__$1 = (function (){var statearr_23728 = state_23725;(statearr_23728[(7)] = inst_23690);
(statearr_23728[(8)] = inst_23689);
return statearr_23728;
})();var statearr_23729_23757 = state_23725__$1;(statearr_23729_23757[(2)] = null);
(statearr_23729_23757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (4)))
{var inst_23693 = (state_23725[(9)]);var inst_23693__$1 = (state_23725[(2)]);var inst_23694 = (inst_23693__$1 == null);var inst_23695 = cljs.core.not.call(null,inst_23694);var state_23725__$1 = (function (){var statearr_23730 = state_23725;(statearr_23730[(9)] = inst_23693__$1);
return statearr_23730;
})();if(inst_23695)
{var statearr_23731_23758 = state_23725__$1;(statearr_23731_23758[(1)] = (5));
} else
{var statearr_23732_23759 = state_23725__$1;(statearr_23732_23759[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (15)))
{var inst_23715 = (state_23725[(2)]);var state_23725__$1 = state_23725;var statearr_23733_23760 = state_23725__$1;(statearr_23733_23760[(2)] = inst_23715);
(statearr_23733_23760[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (13)))
{var state_23725__$1 = state_23725;var statearr_23734_23761 = state_23725__$1;(statearr_23734_23761[(2)] = null);
(statearr_23734_23761[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (6)))
{var inst_23690 = (state_23725[(7)]);var inst_23711 = (inst_23690 > (0));var state_23725__$1 = state_23725;if(cljs.core.truth_(inst_23711))
{var statearr_23735_23762 = state_23725__$1;(statearr_23735_23762[(1)] = (12));
} else
{var statearr_23736_23763 = state_23725__$1;(statearr_23736_23763[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (3)))
{var inst_23723 = (state_23725[(2)]);var state_23725__$1 = state_23725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23725__$1,inst_23723);
} else
{if((state_val_23726 === (12)))
{var inst_23689 = (state_23725[(8)]);var inst_23713 = cljs.core.vec.call(null,inst_23689);var state_23725__$1 = state_23725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23725__$1,(15),out,inst_23713);
} else
{if((state_val_23726 === (2)))
{var state_23725__$1 = state_23725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23725__$1,(4),ch);
} else
{if((state_val_23726 === (11)))
{var inst_23705 = (state_23725[(2)]);var inst_23706 = (new Array(n));var inst_23689 = inst_23706;var inst_23690 = (0);var state_23725__$1 = (function (){var statearr_23737 = state_23725;(statearr_23737[(10)] = inst_23705);
(statearr_23737[(7)] = inst_23690);
(statearr_23737[(8)] = inst_23689);
return statearr_23737;
})();var statearr_23738_23764 = state_23725__$1;(statearr_23738_23764[(2)] = null);
(statearr_23738_23764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (9)))
{var inst_23689 = (state_23725[(8)]);var inst_23703 = cljs.core.vec.call(null,inst_23689);var state_23725__$1 = state_23725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23725__$1,(11),out,inst_23703);
} else
{if((state_val_23726 === (5)))
{var inst_23690 = (state_23725[(7)]);var inst_23698 = (state_23725[(11)]);var inst_23693 = (state_23725[(9)]);var inst_23689 = (state_23725[(8)]);var inst_23697 = (inst_23689[inst_23690] = inst_23693);var inst_23698__$1 = (inst_23690 + (1));var inst_23699 = (inst_23698__$1 < n);var state_23725__$1 = (function (){var statearr_23739 = state_23725;(statearr_23739[(11)] = inst_23698__$1);
(statearr_23739[(12)] = inst_23697);
return statearr_23739;
})();if(cljs.core.truth_(inst_23699))
{var statearr_23740_23765 = state_23725__$1;(statearr_23740_23765[(1)] = (8));
} else
{var statearr_23741_23766 = state_23725__$1;(statearr_23741_23766[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (14)))
{var inst_23718 = (state_23725[(2)]);var inst_23719 = cljs.core.async.close_BANG_.call(null,out);var state_23725__$1 = (function (){var statearr_23743 = state_23725;(statearr_23743[(13)] = inst_23718);
return statearr_23743;
})();var statearr_23744_23767 = state_23725__$1;(statearr_23744_23767[(2)] = inst_23719);
(statearr_23744_23767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (10)))
{var inst_23709 = (state_23725[(2)]);var state_23725__$1 = state_23725;var statearr_23745_23768 = state_23725__$1;(statearr_23745_23768[(2)] = inst_23709);
(statearr_23745_23768[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23726 === (8)))
{var inst_23698 = (state_23725[(11)]);var inst_23689 = (state_23725[(8)]);var tmp23742 = inst_23689;var inst_23689__$1 = tmp23742;var inst_23690 = inst_23698;var state_23725__$1 = (function (){var statearr_23746 = state_23725;(statearr_23746[(7)] = inst_23690);
(statearr_23746[(8)] = inst_23689__$1);
return statearr_23746;
})();var statearr_23747_23769 = state_23725__$1;(statearr_23747_23769[(2)] = null);
(statearr_23747_23769[(1)] = (2));
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
});})(c__15087__auto___23755,out))
;return ((function (switch__15072__auto__,c__15087__auto___23755,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23751[(0)] = state_machine__15073__auto__);
(statearr_23751[(1)] = (1));
return statearr_23751;
});
var state_machine__15073__auto____1 = (function (state_23725){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23725);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23752){if((e23752 instanceof Object))
{var ex__15076__auto__ = e23752;var statearr_23753_23770 = state_23725;(statearr_23753_23770[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23771 = state_23725;
state_23725 = G__23771;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23725){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23755,out))
})();var state__15089__auto__ = (function (){var statearr_23754 = f__15088__auto__.call(null);(statearr_23754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23755);
return statearr_23754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23755,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15087__auto___23914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15087__auto___23914,out){
return (function (){var f__15088__auto__ = (function (){var switch__15072__auto__ = ((function (c__15087__auto___23914,out){
return (function (state_23884){var state_val_23885 = (state_23884[(1)]);if((state_val_23885 === (7)))
{var inst_23880 = (state_23884[(2)]);var state_23884__$1 = state_23884;var statearr_23886_23915 = state_23884__$1;(statearr_23886_23915[(2)] = inst_23880);
(statearr_23886_23915[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (1)))
{var inst_23843 = [];var inst_23844 = inst_23843;var inst_23845 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23884__$1 = (function (){var statearr_23887 = state_23884;(statearr_23887[(7)] = inst_23845);
(statearr_23887[(8)] = inst_23844);
return statearr_23887;
})();var statearr_23888_23916 = state_23884__$1;(statearr_23888_23916[(2)] = null);
(statearr_23888_23916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (4)))
{var inst_23848 = (state_23884[(9)]);var inst_23848__$1 = (state_23884[(2)]);var inst_23849 = (inst_23848__$1 == null);var inst_23850 = cljs.core.not.call(null,inst_23849);var state_23884__$1 = (function (){var statearr_23889 = state_23884;(statearr_23889[(9)] = inst_23848__$1);
return statearr_23889;
})();if(inst_23850)
{var statearr_23890_23917 = state_23884__$1;(statearr_23890_23917[(1)] = (5));
} else
{var statearr_23891_23918 = state_23884__$1;(statearr_23891_23918[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (15)))
{var inst_23874 = (state_23884[(2)]);var state_23884__$1 = state_23884;var statearr_23892_23919 = state_23884__$1;(statearr_23892_23919[(2)] = inst_23874);
(statearr_23892_23919[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (13)))
{var state_23884__$1 = state_23884;var statearr_23893_23920 = state_23884__$1;(statearr_23893_23920[(2)] = null);
(statearr_23893_23920[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (6)))
{var inst_23844 = (state_23884[(8)]);var inst_23869 = inst_23844.length;var inst_23870 = (inst_23869 > (0));var state_23884__$1 = state_23884;if(cljs.core.truth_(inst_23870))
{var statearr_23894_23921 = state_23884__$1;(statearr_23894_23921[(1)] = (12));
} else
{var statearr_23895_23922 = state_23884__$1;(statearr_23895_23922[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (3)))
{var inst_23882 = (state_23884[(2)]);var state_23884__$1 = state_23884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23884__$1,inst_23882);
} else
{if((state_val_23885 === (12)))
{var inst_23844 = (state_23884[(8)]);var inst_23872 = cljs.core.vec.call(null,inst_23844);var state_23884__$1 = state_23884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23884__$1,(15),out,inst_23872);
} else
{if((state_val_23885 === (2)))
{var state_23884__$1 = state_23884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23884__$1,(4),ch);
} else
{if((state_val_23885 === (11)))
{var inst_23848 = (state_23884[(9)]);var inst_23852 = (state_23884[(10)]);var inst_23862 = (state_23884[(2)]);var inst_23863 = [];var inst_23864 = inst_23863.push(inst_23848);var inst_23844 = inst_23863;var inst_23845 = inst_23852;var state_23884__$1 = (function (){var statearr_23896 = state_23884;(statearr_23896[(11)] = inst_23864);
(statearr_23896[(12)] = inst_23862);
(statearr_23896[(7)] = inst_23845);
(statearr_23896[(8)] = inst_23844);
return statearr_23896;
})();var statearr_23897_23923 = state_23884__$1;(statearr_23897_23923[(2)] = null);
(statearr_23897_23923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (9)))
{var inst_23844 = (state_23884[(8)]);var inst_23860 = cljs.core.vec.call(null,inst_23844);var state_23884__$1 = state_23884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23884__$1,(11),out,inst_23860);
} else
{if((state_val_23885 === (5)))
{var inst_23848 = (state_23884[(9)]);var inst_23845 = (state_23884[(7)]);var inst_23852 = (state_23884[(10)]);var inst_23852__$1 = f.call(null,inst_23848);var inst_23853 = cljs.core._EQ_.call(null,inst_23852__$1,inst_23845);var inst_23854 = cljs.core.keyword_identical_QMARK_.call(null,inst_23845,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23855 = (inst_23853) || (inst_23854);var state_23884__$1 = (function (){var statearr_23898 = state_23884;(statearr_23898[(10)] = inst_23852__$1);
return statearr_23898;
})();if(cljs.core.truth_(inst_23855))
{var statearr_23899_23924 = state_23884__$1;(statearr_23899_23924[(1)] = (8));
} else
{var statearr_23900_23925 = state_23884__$1;(statearr_23900_23925[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (14)))
{var inst_23877 = (state_23884[(2)]);var inst_23878 = cljs.core.async.close_BANG_.call(null,out);var state_23884__$1 = (function (){var statearr_23902 = state_23884;(statearr_23902[(13)] = inst_23877);
return statearr_23902;
})();var statearr_23903_23926 = state_23884__$1;(statearr_23903_23926[(2)] = inst_23878);
(statearr_23903_23926[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (10)))
{var inst_23867 = (state_23884[(2)]);var state_23884__$1 = state_23884;var statearr_23904_23927 = state_23884__$1;(statearr_23904_23927[(2)] = inst_23867);
(statearr_23904_23927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (8)))
{var inst_23848 = (state_23884[(9)]);var inst_23852 = (state_23884[(10)]);var inst_23844 = (state_23884[(8)]);var inst_23857 = inst_23844.push(inst_23848);var tmp23901 = inst_23844;var inst_23844__$1 = tmp23901;var inst_23845 = inst_23852;var state_23884__$1 = (function (){var statearr_23905 = state_23884;(statearr_23905[(7)] = inst_23845);
(statearr_23905[(14)] = inst_23857);
(statearr_23905[(8)] = inst_23844__$1);
return statearr_23905;
})();var statearr_23906_23928 = state_23884__$1;(statearr_23906_23928[(2)] = null);
(statearr_23906_23928[(1)] = (2));
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
});})(c__15087__auto___23914,out))
;return ((function (switch__15072__auto__,c__15087__auto___23914,out){
return (function() {
var state_machine__15073__auto__ = null;
var state_machine__15073__auto____0 = (function (){var statearr_23910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23910[(0)] = state_machine__15073__auto__);
(statearr_23910[(1)] = (1));
return statearr_23910;
});
var state_machine__15073__auto____1 = (function (state_23884){while(true){
var ret_value__15074__auto__ = (function (){try{while(true){
var result__15075__auto__ = switch__15072__auto__.call(null,state_23884);if(cljs.core.keyword_identical_QMARK_.call(null,result__15075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15075__auto__;
}
break;
}
}catch (e23911){if((e23911 instanceof Object))
{var ex__15076__auto__ = e23911;var statearr_23912_23929 = state_23884;(statearr_23912_23929[(5)] = ex__15076__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23930 = state_23884;
state_23884 = G__23930;
continue;
}
} else
{return ret_value__15074__auto__;
}
break;
}
});
state_machine__15073__auto__ = function(state_23884){
switch(arguments.length){
case 0:
return state_machine__15073__auto____0.call(this);
case 1:
return state_machine__15073__auto____1.call(this,state_23884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15073__auto____0;
state_machine__15073__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15073__auto____1;
return state_machine__15073__auto__;
})()
;})(switch__15072__auto__,c__15087__auto___23914,out))
})();var state__15089__auto__ = (function (){var statearr_23913 = f__15088__auto__.call(null);(statearr_23913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15087__auto___23914);
return statearr_23913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15089__auto__);
});})(c__15087__auto___23914,out))
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