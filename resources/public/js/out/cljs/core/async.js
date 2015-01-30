// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t18418 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18418 = (function (f,fn_handler,meta18419){
this.f = f;
this.fn_handler = fn_handler;
this.meta18419 = meta18419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18418.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18420){
var self__ = this;
var _18420__$1 = this;
return self__.meta18419;
});

cljs.core.async.t18418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18420,meta18419__$1){
var self__ = this;
var _18420__$1 = this;
return (new cljs.core.async.t18418(self__.f,self__.fn_handler,meta18419__$1));
});

cljs.core.async.t18418.cljs$lang$type = true;

cljs.core.async.t18418.cljs$lang$ctorStr = "cljs.core.async/t18418";

cljs.core.async.t18418.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t18418");
});

cljs.core.async.__GT_t18418 = (function __GT_t18418(f__$1,fn_handler__$1,meta18419){
return (new cljs.core.async.t18418(f__$1,fn_handler__$1,meta18419));
});

}

return (new cljs.core.async.t18418(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__18422 = buff;
if(G__18422){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__18422.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18422);
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
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

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
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18423 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18423);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18423,ret){
return (function (){
return fn1.call(null,val_18423);
});})(val_18423,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4645__auto___18424 = n;
var x_18425 = (0);
while(true){
if((x_18425 < n__4645__auto___18424)){
(a[x_18425] = (0));

var G__18426 = (x_18425 + (1));
x_18425 = G__18426;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18427 = (i + (1));
i = G__18427;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18431 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18431 = (function (flag,alt_flag,meta18432){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18432 = meta18432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18433){
var self__ = this;
var _18433__$1 = this;
return self__.meta18432;
});})(flag))
;

cljs.core.async.t18431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18433,meta18432__$1){
var self__ = this;
var _18433__$1 = this;
return (new cljs.core.async.t18431(self__.flag,self__.alt_flag,meta18432__$1));
});})(flag))
;

cljs.core.async.t18431.cljs$lang$type = true;

cljs.core.async.t18431.cljs$lang$ctorStr = "cljs.core.async/t18431";

cljs.core.async.t18431.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t18431");
});})(flag))
;

cljs.core.async.__GT_t18431 = ((function (flag){
return (function __GT_t18431(flag__$1,alt_flag__$1,meta18432){
return (new cljs.core.async.t18431(flag__$1,alt_flag__$1,meta18432));
});})(flag))
;

}

return (new cljs.core.async.t18431(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18437 = (function (cb,flag,alt_handler,meta18438){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18438 = meta18438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18439){
var self__ = this;
var _18439__$1 = this;
return self__.meta18438;
});

cljs.core.async.t18437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18439,meta18438__$1){
var self__ = this;
var _18439__$1 = this;
return (new cljs.core.async.t18437(self__.cb,self__.flag,self__.alt_handler,meta18438__$1));
});

cljs.core.async.t18437.cljs$lang$type = true;

cljs.core.async.t18437.cljs$lang$ctorStr = "cljs.core.async/t18437";

cljs.core.async.t18437.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t18437");
});

cljs.core.async.__GT_t18437 = (function __GT_t18437(cb__$1,flag__$1,alt_handler__$1,meta18438){
return (new cljs.core.async.t18437(cb__$1,flag__$1,alt_handler__$1,meta18438));
});

}

return (new cljs.core.async.t18437(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18440_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18440_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18441_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3758__auto__ = wport;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18442 = (i + (1));
i = G__18442;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3758__auto__ = ret;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3746__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3746__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3746__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
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
var alts_BANG___delegate = function (ports,p__18443){
var map__18445 = p__18443;
var map__18445__$1 = ((cljs.core.seq_QMARK_.call(null,map__18445))?cljs.core.apply.call(null,cljs.core.hash_map,map__18445):map__18445);
var opts = map__18445__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18443 = null;
if (arguments.length > 1) {
var G__18446__i = 0, G__18446__a = new Array(arguments.length -  1);
while (G__18446__i < G__18446__a.length) {G__18446__a[G__18446__i] = arguments[G__18446__i + 1]; ++G__18446__i;}
  p__18443 = new cljs.core.IndexedSeq(G__18446__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__18443);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18447){
var ports = cljs.core.first(arglist__18447);
var p__18443 = cljs.core.rest(arglist__18447);
return alts_BANG___delegate(ports,p__18443);
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
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7172__auto___18542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___18542){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___18542){
return (function (state_18518){
var state_val_18519 = (state_18518[(1)]);
if((state_val_18519 === (7))){
var inst_18514 = (state_18518[(2)]);
var state_18518__$1 = state_18518;
var statearr_18520_18543 = state_18518__$1;
(statearr_18520_18543[(2)] = inst_18514);

(statearr_18520_18543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (1))){
var state_18518__$1 = state_18518;
var statearr_18521_18544 = state_18518__$1;
(statearr_18521_18544[(2)] = null);

(statearr_18521_18544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (4))){
var inst_18497 = (state_18518[(7)]);
var inst_18497__$1 = (state_18518[(2)]);
var inst_18498 = (inst_18497__$1 == null);
var state_18518__$1 = (function (){var statearr_18522 = state_18518;
(statearr_18522[(7)] = inst_18497__$1);

return statearr_18522;
})();
if(cljs.core.truth_(inst_18498)){
var statearr_18523_18545 = state_18518__$1;
(statearr_18523_18545[(1)] = (5));

} else {
var statearr_18524_18546 = state_18518__$1;
(statearr_18524_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (13))){
var state_18518__$1 = state_18518;
var statearr_18525_18547 = state_18518__$1;
(statearr_18525_18547[(2)] = null);

(statearr_18525_18547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (6))){
var inst_18497 = (state_18518[(7)]);
var state_18518__$1 = state_18518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18518__$1,(11),to,inst_18497);
} else {
if((state_val_18519 === (3))){
var inst_18516 = (state_18518[(2)]);
var state_18518__$1 = state_18518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18518__$1,inst_18516);
} else {
if((state_val_18519 === (12))){
var state_18518__$1 = state_18518;
var statearr_18526_18548 = state_18518__$1;
(statearr_18526_18548[(2)] = null);

(statearr_18526_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (2))){
var state_18518__$1 = state_18518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18518__$1,(4),from);
} else {
if((state_val_18519 === (11))){
var inst_18507 = (state_18518[(2)]);
var state_18518__$1 = state_18518;
if(cljs.core.truth_(inst_18507)){
var statearr_18527_18549 = state_18518__$1;
(statearr_18527_18549[(1)] = (12));

} else {
var statearr_18528_18550 = state_18518__$1;
(statearr_18528_18550[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (9))){
var state_18518__$1 = state_18518;
var statearr_18529_18551 = state_18518__$1;
(statearr_18529_18551[(2)] = null);

(statearr_18529_18551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (5))){
var state_18518__$1 = state_18518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18530_18552 = state_18518__$1;
(statearr_18530_18552[(1)] = (8));

} else {
var statearr_18531_18553 = state_18518__$1;
(statearr_18531_18553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (14))){
var inst_18512 = (state_18518[(2)]);
var state_18518__$1 = state_18518;
var statearr_18532_18554 = state_18518__$1;
(statearr_18532_18554[(2)] = inst_18512);

(statearr_18532_18554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (10))){
var inst_18504 = (state_18518[(2)]);
var state_18518__$1 = state_18518;
var statearr_18533_18555 = state_18518__$1;
(statearr_18533_18555[(2)] = inst_18504);

(statearr_18533_18555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18519 === (8))){
var inst_18501 = cljs.core.async.close_BANG_.call(null,to);
var state_18518__$1 = state_18518;
var statearr_18534_18556 = state_18518__$1;
(statearr_18534_18556[(2)] = inst_18501);

(statearr_18534_18556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___18542))
;
return ((function (switch__7116__auto__,c__7172__auto___18542){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18538 = [null,null,null,null,null,null,null,null];
(statearr_18538[(0)] = state_machine__7117__auto__);

(statearr_18538[(1)] = (1));

return statearr_18538;
});
var state_machine__7117__auto____1 = (function (state_18518){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18539){if((e18539 instanceof Object)){
var ex__7120__auto__ = e18539;
var statearr_18540_18557 = state_18518;
(statearr_18540_18557[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18558 = state_18518;
state_18518 = G__18558;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18518){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___18542))
})();
var state__7174__auto__ = (function (){var statearr_18541 = f__7173__auto__.call(null);
(statearr_18541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___18542);

return statearr_18541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___18542))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18742){
var vec__18743 = p__18742;
var v = cljs.core.nth.call(null,vec__18743,(0),null);
var p = cljs.core.nth.call(null,vec__18743,(1),null);
var job = vec__18743;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7172__auto___18925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results){
return (function (state_18748){
var state_val_18749 = (state_18748[(1)]);
if((state_val_18749 === (2))){
var inst_18745 = (state_18748[(2)]);
var inst_18746 = cljs.core.async.close_BANG_.call(null,res);
var state_18748__$1 = (function (){var statearr_18750 = state_18748;
(statearr_18750[(7)] = inst_18745);

return statearr_18750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18748__$1,inst_18746);
} else {
if((state_val_18749 === (1))){
var state_18748__$1 = state_18748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18748__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results))
;
return ((function (switch__7116__auto__,c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18754 = [null,null,null,null,null,null,null,null];
(statearr_18754[(0)] = state_machine__7117__auto__);

(statearr_18754[(1)] = (1));

return statearr_18754;
});
var state_machine__7117__auto____1 = (function (state_18748){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18755){if((e18755 instanceof Object)){
var ex__7120__auto__ = e18755;
var statearr_18756_18926 = state_18748;
(statearr_18756_18926[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18927 = state_18748;
state_18748 = G__18927;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18748){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results))
})();
var state__7174__auto__ = (function (){var statearr_18757 = f__7173__auto__.call(null);
(statearr_18757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___18925);

return statearr_18757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___18925,res,vec__18743,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18758){
var vec__18759 = p__18758;
var v = cljs.core.nth.call(null,vec__18759,(0),null);
var p = cljs.core.nth.call(null,vec__18759,(1),null);
var job = vec__18759;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4645__auto___18928 = n;
var __18929 = (0);
while(true){
if((__18929 < n__4645__auto___18928)){
var G__18760_18930 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18760_18930) {
case "async":
var c__7172__auto___18932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18929,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (__18929,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function (state_18773){
var state_val_18774 = (state_18773[(1)]);
if((state_val_18774 === (7))){
var inst_18769 = (state_18773[(2)]);
var state_18773__$1 = state_18773;
var statearr_18775_18933 = state_18773__$1;
(statearr_18775_18933[(2)] = inst_18769);

(statearr_18775_18933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (6))){
var state_18773__$1 = state_18773;
var statearr_18776_18934 = state_18773__$1;
(statearr_18776_18934[(2)] = null);

(statearr_18776_18934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (5))){
var state_18773__$1 = state_18773;
var statearr_18777_18935 = state_18773__$1;
(statearr_18777_18935[(2)] = null);

(statearr_18777_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (4))){
var inst_18763 = (state_18773[(2)]);
var inst_18764 = async.call(null,inst_18763);
var state_18773__$1 = state_18773;
if(cljs.core.truth_(inst_18764)){
var statearr_18778_18936 = state_18773__$1;
(statearr_18778_18936[(1)] = (5));

} else {
var statearr_18779_18937 = state_18773__$1;
(statearr_18779_18937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18774 === (3))){
var inst_18771 = (state_18773[(2)]);
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18773__$1,inst_18771);
} else {
if((state_val_18774 === (2))){
var state_18773__$1 = state_18773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18773__$1,(4),jobs);
} else {
if((state_val_18774 === (1))){
var state_18773__$1 = state_18773;
var statearr_18780_18938 = state_18773__$1;
(statearr_18780_18938[(2)] = null);

(statearr_18780_18938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18929,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
;
return ((function (__18929,switch__7116__auto__,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18784 = [null,null,null,null,null,null,null];
(statearr_18784[(0)] = state_machine__7117__auto__);

(statearr_18784[(1)] = (1));

return statearr_18784;
});
var state_machine__7117__auto____1 = (function (state_18773){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18785){if((e18785 instanceof Object)){
var ex__7120__auto__ = e18785;
var statearr_18786_18939 = state_18773;
(statearr_18786_18939[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18940 = state_18773;
state_18773 = G__18940;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18773){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(__18929,switch__7116__auto__,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
})();
var state__7174__auto__ = (function (){var statearr_18787 = f__7173__auto__.call(null);
(statearr_18787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___18932);

return statearr_18787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(__18929,c__7172__auto___18932,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
);


break;
case "compute":
var c__7172__auto___18941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18929,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (__18929,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function (state_18800){
var state_val_18801 = (state_18800[(1)]);
if((state_val_18801 === (7))){
var inst_18796 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
var statearr_18802_18942 = state_18800__$1;
(statearr_18802_18942[(2)] = inst_18796);

(statearr_18802_18942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (6))){
var state_18800__$1 = state_18800;
var statearr_18803_18943 = state_18800__$1;
(statearr_18803_18943[(2)] = null);

(statearr_18803_18943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (5))){
var state_18800__$1 = state_18800;
var statearr_18804_18944 = state_18800__$1;
(statearr_18804_18944[(2)] = null);

(statearr_18804_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (4))){
var inst_18790 = (state_18800[(2)]);
var inst_18791 = process.call(null,inst_18790);
var state_18800__$1 = state_18800;
if(cljs.core.truth_(inst_18791)){
var statearr_18805_18945 = state_18800__$1;
(statearr_18805_18945[(1)] = (5));

} else {
var statearr_18806_18946 = state_18800__$1;
(statearr_18806_18946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18801 === (3))){
var inst_18798 = (state_18800[(2)]);
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18800__$1,inst_18798);
} else {
if((state_val_18801 === (2))){
var state_18800__$1 = state_18800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18800__$1,(4),jobs);
} else {
if((state_val_18801 === (1))){
var state_18800__$1 = state_18800;
var statearr_18807_18947 = state_18800__$1;
(statearr_18807_18947[(2)] = null);

(statearr_18807_18947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18929,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
;
return ((function (__18929,switch__7116__auto__,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18811 = [null,null,null,null,null,null,null];
(statearr_18811[(0)] = state_machine__7117__auto__);

(statearr_18811[(1)] = (1));

return statearr_18811;
});
var state_machine__7117__auto____1 = (function (state_18800){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18812){if((e18812 instanceof Object)){
var ex__7120__auto__ = e18812;
var statearr_18813_18948 = state_18800;
(statearr_18813_18948[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18949 = state_18800;
state_18800 = G__18949;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18800){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(__18929,switch__7116__auto__,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
})();
var state__7174__auto__ = (function (){var statearr_18814 = f__7173__auto__.call(null);
(statearr_18814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___18941);

return statearr_18814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(__18929,c__7172__auto___18941,G__18760_18930,n__4645__auto___18928,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18950 = (__18929 + (1));
__18929 = G__18950;
continue;
} else {
}
break;
}

var c__7172__auto___18951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___18951,jobs,results,process,async){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___18951,jobs,results,process,async){
return (function (state_18836){
var state_val_18837 = (state_18836[(1)]);
if((state_val_18837 === (9))){
var inst_18829 = (state_18836[(2)]);
var state_18836__$1 = (function (){var statearr_18838 = state_18836;
(statearr_18838[(7)] = inst_18829);

return statearr_18838;
})();
var statearr_18839_18952 = state_18836__$1;
(statearr_18839_18952[(2)] = null);

(statearr_18839_18952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (8))){
var inst_18822 = (state_18836[(8)]);
var inst_18827 = (state_18836[(2)]);
var state_18836__$1 = (function (){var statearr_18840 = state_18836;
(statearr_18840[(9)] = inst_18827);

return statearr_18840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18836__$1,(9),results,inst_18822);
} else {
if((state_val_18837 === (7))){
var inst_18832 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18841_18953 = state_18836__$1;
(statearr_18841_18953[(2)] = inst_18832);

(statearr_18841_18953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (6))){
var inst_18817 = (state_18836[(10)]);
var inst_18822 = (state_18836[(8)]);
var inst_18822__$1 = cljs.core.async.chan.call(null,(1));
var inst_18823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18824 = [inst_18817,inst_18822__$1];
var inst_18825 = (new cljs.core.PersistentVector(null,2,(5),inst_18823,inst_18824,null));
var state_18836__$1 = (function (){var statearr_18842 = state_18836;
(statearr_18842[(8)] = inst_18822__$1);

return statearr_18842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18836__$1,(8),jobs,inst_18825);
} else {
if((state_val_18837 === (5))){
var inst_18820 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18836__$1 = state_18836;
var statearr_18843_18954 = state_18836__$1;
(statearr_18843_18954[(2)] = inst_18820);

(statearr_18843_18954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (4))){
var inst_18817 = (state_18836[(10)]);
var inst_18817__$1 = (state_18836[(2)]);
var inst_18818 = (inst_18817__$1 == null);
var state_18836__$1 = (function (){var statearr_18844 = state_18836;
(statearr_18844[(10)] = inst_18817__$1);

return statearr_18844;
})();
if(cljs.core.truth_(inst_18818)){
var statearr_18845_18955 = state_18836__$1;
(statearr_18845_18955[(1)] = (5));

} else {
var statearr_18846_18956 = state_18836__$1;
(statearr_18846_18956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (3))){
var inst_18834 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18836__$1,inst_18834);
} else {
if((state_val_18837 === (2))){
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18836__$1,(4),from);
} else {
if((state_val_18837 === (1))){
var state_18836__$1 = state_18836;
var statearr_18847_18957 = state_18836__$1;
(statearr_18847_18957[(2)] = null);

(statearr_18847_18957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___18951,jobs,results,process,async))
;
return ((function (switch__7116__auto__,c__7172__auto___18951,jobs,results,process,async){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18851[(0)] = state_machine__7117__auto__);

(statearr_18851[(1)] = (1));

return statearr_18851;
});
var state_machine__7117__auto____1 = (function (state_18836){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18852){if((e18852 instanceof Object)){
var ex__7120__auto__ = e18852;
var statearr_18853_18958 = state_18836;
(statearr_18853_18958[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18959 = state_18836;
state_18836 = G__18959;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18836){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___18951,jobs,results,process,async))
})();
var state__7174__auto__ = (function (){var statearr_18854 = f__7173__auto__.call(null);
(statearr_18854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___18951);

return statearr_18854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___18951,jobs,results,process,async))
);


var c__7172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto__,jobs,results,process,async){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto__,jobs,results,process,async){
return (function (state_18892){
var state_val_18893 = (state_18892[(1)]);
if((state_val_18893 === (7))){
var inst_18888 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18894_18960 = state_18892__$1;
(statearr_18894_18960[(2)] = inst_18888);

(statearr_18894_18960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (20))){
var state_18892__$1 = state_18892;
var statearr_18895_18961 = state_18892__$1;
(statearr_18895_18961[(2)] = null);

(statearr_18895_18961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (1))){
var state_18892__$1 = state_18892;
var statearr_18896_18962 = state_18892__$1;
(statearr_18896_18962[(2)] = null);

(statearr_18896_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (4))){
var inst_18857 = (state_18892[(7)]);
var inst_18857__$1 = (state_18892[(2)]);
var inst_18858 = (inst_18857__$1 == null);
var state_18892__$1 = (function (){var statearr_18897 = state_18892;
(statearr_18897[(7)] = inst_18857__$1);

return statearr_18897;
})();
if(cljs.core.truth_(inst_18858)){
var statearr_18898_18963 = state_18892__$1;
(statearr_18898_18963[(1)] = (5));

} else {
var statearr_18899_18964 = state_18892__$1;
(statearr_18899_18964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (15))){
var inst_18870 = (state_18892[(8)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18892__$1,(18),to,inst_18870);
} else {
if((state_val_18893 === (21))){
var inst_18883 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18900_18965 = state_18892__$1;
(statearr_18900_18965[(2)] = inst_18883);

(statearr_18900_18965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (13))){
var inst_18885 = (state_18892[(2)]);
var state_18892__$1 = (function (){var statearr_18901 = state_18892;
(statearr_18901[(9)] = inst_18885);

return statearr_18901;
})();
var statearr_18902_18966 = state_18892__$1;
(statearr_18902_18966[(2)] = null);

(statearr_18902_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (6))){
var inst_18857 = (state_18892[(7)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18892__$1,(11),inst_18857);
} else {
if((state_val_18893 === (17))){
var inst_18878 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
if(cljs.core.truth_(inst_18878)){
var statearr_18903_18967 = state_18892__$1;
(statearr_18903_18967[(1)] = (19));

} else {
var statearr_18904_18968 = state_18892__$1;
(statearr_18904_18968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (3))){
var inst_18890 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18892__$1,inst_18890);
} else {
if((state_val_18893 === (12))){
var inst_18867 = (state_18892[(10)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18892__$1,(14),inst_18867);
} else {
if((state_val_18893 === (2))){
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18892__$1,(4),results);
} else {
if((state_val_18893 === (19))){
var state_18892__$1 = state_18892;
var statearr_18905_18969 = state_18892__$1;
(statearr_18905_18969[(2)] = null);

(statearr_18905_18969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (11))){
var inst_18867 = (state_18892[(2)]);
var state_18892__$1 = (function (){var statearr_18906 = state_18892;
(statearr_18906[(10)] = inst_18867);

return statearr_18906;
})();
var statearr_18907_18970 = state_18892__$1;
(statearr_18907_18970[(2)] = null);

(statearr_18907_18970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (9))){
var state_18892__$1 = state_18892;
var statearr_18908_18971 = state_18892__$1;
(statearr_18908_18971[(2)] = null);

(statearr_18908_18971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (5))){
var state_18892__$1 = state_18892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18909_18972 = state_18892__$1;
(statearr_18909_18972[(1)] = (8));

} else {
var statearr_18910_18973 = state_18892__$1;
(statearr_18910_18973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (14))){
var inst_18870 = (state_18892[(8)]);
var inst_18872 = (state_18892[(11)]);
var inst_18870__$1 = (state_18892[(2)]);
var inst_18871 = (inst_18870__$1 == null);
var inst_18872__$1 = cljs.core.not.call(null,inst_18871);
var state_18892__$1 = (function (){var statearr_18911 = state_18892;
(statearr_18911[(8)] = inst_18870__$1);

(statearr_18911[(11)] = inst_18872__$1);

return statearr_18911;
})();
if(inst_18872__$1){
var statearr_18912_18974 = state_18892__$1;
(statearr_18912_18974[(1)] = (15));

} else {
var statearr_18913_18975 = state_18892__$1;
(statearr_18913_18975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (16))){
var inst_18872 = (state_18892[(11)]);
var state_18892__$1 = state_18892;
var statearr_18914_18976 = state_18892__$1;
(statearr_18914_18976[(2)] = inst_18872);

(statearr_18914_18976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (10))){
var inst_18864 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18915_18977 = state_18892__$1;
(statearr_18915_18977[(2)] = inst_18864);

(statearr_18915_18977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (18))){
var inst_18875 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18916_18978 = state_18892__$1;
(statearr_18916_18978[(2)] = inst_18875);

(statearr_18916_18978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (8))){
var inst_18861 = cljs.core.async.close_BANG_.call(null,to);
var state_18892__$1 = state_18892;
var statearr_18917_18979 = state_18892__$1;
(statearr_18917_18979[(2)] = inst_18861);

(statearr_18917_18979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto__,jobs,results,process,async))
;
return ((function (switch__7116__auto__,c__7172__auto__,jobs,results,process,async){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_18921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18921[(0)] = state_machine__7117__auto__);

(statearr_18921[(1)] = (1));

return statearr_18921;
});
var state_machine__7117__auto____1 = (function (state_18892){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_18892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e18922){if((e18922 instanceof Object)){
var ex__7120__auto__ = e18922;
var statearr_18923_18980 = state_18892;
(statearr_18923_18980[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_18892;
state_18892 = G__18981;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_18892){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_18892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto__,jobs,results,process,async))
})();
var state__7174__auto__ = (function (){var statearr_18924 = f__7173__auto__.call(null);
(statearr_18924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto__);

return statearr_18924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto__,jobs,results,process,async))
);

return c__7172__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7172__auto___19082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___19082,tc,fc){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___19082,tc,fc){
return (function (state_19057){
var state_val_19058 = (state_19057[(1)]);
if((state_val_19058 === (7))){
var inst_19053 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
var statearr_19059_19083 = state_19057__$1;
(statearr_19059_19083[(2)] = inst_19053);

(statearr_19059_19083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (1))){
var state_19057__$1 = state_19057;
var statearr_19060_19084 = state_19057__$1;
(statearr_19060_19084[(2)] = null);

(statearr_19060_19084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (4))){
var inst_19034 = (state_19057[(7)]);
var inst_19034__$1 = (state_19057[(2)]);
var inst_19035 = (inst_19034__$1 == null);
var state_19057__$1 = (function (){var statearr_19061 = state_19057;
(statearr_19061[(7)] = inst_19034__$1);

return statearr_19061;
})();
if(cljs.core.truth_(inst_19035)){
var statearr_19062_19085 = state_19057__$1;
(statearr_19062_19085[(1)] = (5));

} else {
var statearr_19063_19086 = state_19057__$1;
(statearr_19063_19086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (13))){
var state_19057__$1 = state_19057;
var statearr_19064_19087 = state_19057__$1;
(statearr_19064_19087[(2)] = null);

(statearr_19064_19087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (6))){
var inst_19034 = (state_19057[(7)]);
var inst_19040 = p.call(null,inst_19034);
var state_19057__$1 = state_19057;
if(cljs.core.truth_(inst_19040)){
var statearr_19065_19088 = state_19057__$1;
(statearr_19065_19088[(1)] = (9));

} else {
var statearr_19066_19089 = state_19057__$1;
(statearr_19066_19089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (3))){
var inst_19055 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19057__$1,inst_19055);
} else {
if((state_val_19058 === (12))){
var state_19057__$1 = state_19057;
var statearr_19067_19090 = state_19057__$1;
(statearr_19067_19090[(2)] = null);

(statearr_19067_19090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (2))){
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19057__$1,(4),ch);
} else {
if((state_val_19058 === (11))){
var inst_19034 = (state_19057[(7)]);
var inst_19044 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19057__$1,(8),inst_19044,inst_19034);
} else {
if((state_val_19058 === (9))){
var state_19057__$1 = state_19057;
var statearr_19068_19091 = state_19057__$1;
(statearr_19068_19091[(2)] = tc);

(statearr_19068_19091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (5))){
var inst_19037 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19038 = cljs.core.async.close_BANG_.call(null,fc);
var state_19057__$1 = (function (){var statearr_19069 = state_19057;
(statearr_19069[(8)] = inst_19037);

return statearr_19069;
})();
var statearr_19070_19092 = state_19057__$1;
(statearr_19070_19092[(2)] = inst_19038);

(statearr_19070_19092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (14))){
var inst_19051 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
var statearr_19071_19093 = state_19057__$1;
(statearr_19071_19093[(2)] = inst_19051);

(statearr_19071_19093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (10))){
var state_19057__$1 = state_19057;
var statearr_19072_19094 = state_19057__$1;
(statearr_19072_19094[(2)] = fc);

(statearr_19072_19094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (8))){
var inst_19046 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
if(cljs.core.truth_(inst_19046)){
var statearr_19073_19095 = state_19057__$1;
(statearr_19073_19095[(1)] = (12));

} else {
var statearr_19074_19096 = state_19057__$1;
(statearr_19074_19096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___19082,tc,fc))
;
return ((function (switch__7116__auto__,c__7172__auto___19082,tc,fc){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_19078 = [null,null,null,null,null,null,null,null,null];
(statearr_19078[(0)] = state_machine__7117__auto__);

(statearr_19078[(1)] = (1));

return statearr_19078;
});
var state_machine__7117__auto____1 = (function (state_19057){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_19057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e19079){if((e19079 instanceof Object)){
var ex__7120__auto__ = e19079;
var statearr_19080_19097 = state_19057;
(statearr_19080_19097[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19098 = state_19057;
state_19057 = G__19098;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_19057){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_19057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___19082,tc,fc))
})();
var state__7174__auto__ = (function (){var statearr_19081 = f__7173__auto__.call(null);
(statearr_19081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___19082);

return statearr_19081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___19082,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto__){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto__){
return (function (state_19145){
var state_val_19146 = (state_19145[(1)]);
if((state_val_19146 === (7))){
var inst_19141 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19147_19163 = state_19145__$1;
(statearr_19147_19163[(2)] = inst_19141);

(statearr_19147_19163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (6))){
var inst_19134 = (state_19145[(7)]);
var inst_19131 = (state_19145[(8)]);
var inst_19138 = f.call(null,inst_19131,inst_19134);
var inst_19131__$1 = inst_19138;
var state_19145__$1 = (function (){var statearr_19148 = state_19145;
(statearr_19148[(8)] = inst_19131__$1);

return statearr_19148;
})();
var statearr_19149_19164 = state_19145__$1;
(statearr_19149_19164[(2)] = null);

(statearr_19149_19164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (5))){
var inst_19131 = (state_19145[(8)]);
var state_19145__$1 = state_19145;
var statearr_19150_19165 = state_19145__$1;
(statearr_19150_19165[(2)] = inst_19131);

(statearr_19150_19165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (4))){
var inst_19134 = (state_19145[(7)]);
var inst_19134__$1 = (state_19145[(2)]);
var inst_19135 = (inst_19134__$1 == null);
var state_19145__$1 = (function (){var statearr_19151 = state_19145;
(statearr_19151[(7)] = inst_19134__$1);

return statearr_19151;
})();
if(cljs.core.truth_(inst_19135)){
var statearr_19152_19166 = state_19145__$1;
(statearr_19152_19166[(1)] = (5));

} else {
var statearr_19153_19167 = state_19145__$1;
(statearr_19153_19167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (3))){
var inst_19143 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19145__$1,inst_19143);
} else {
if((state_val_19146 === (2))){
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19145__$1,(4),ch);
} else {
if((state_val_19146 === (1))){
var inst_19131 = init;
var state_19145__$1 = (function (){var statearr_19154 = state_19145;
(statearr_19154[(8)] = inst_19131);

return statearr_19154;
})();
var statearr_19155_19168 = state_19145__$1;
(statearr_19155_19168[(2)] = null);

(statearr_19155_19168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7172__auto__))
;
return ((function (switch__7116__auto__,c__7172__auto__){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_19159 = [null,null,null,null,null,null,null,null,null];
(statearr_19159[(0)] = state_machine__7117__auto__);

(statearr_19159[(1)] = (1));

return statearr_19159;
});
var state_machine__7117__auto____1 = (function (state_19145){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_19145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e19160){if((e19160 instanceof Object)){
var ex__7120__auto__ = e19160;
var statearr_19161_19169 = state_19145;
(statearr_19161_19169[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19170 = state_19145;
state_19145 = G__19170;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_19145){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_19145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto__))
})();
var state__7174__auto__ = (function (){var statearr_19162 = f__7173__auto__.call(null);
(statearr_19162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto__);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto__))
);

return c__7172__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto__){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto__){
return (function (state_19244){
var state_val_19245 = (state_19244[(1)]);
if((state_val_19245 === (7))){
var inst_19226 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19246_19269 = state_19244__$1;
(statearr_19246_19269[(2)] = inst_19226);

(statearr_19246_19269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (1))){
var inst_19220 = cljs.core.seq.call(null,coll);
var inst_19221 = inst_19220;
var state_19244__$1 = (function (){var statearr_19247 = state_19244;
(statearr_19247[(7)] = inst_19221);

return statearr_19247;
})();
var statearr_19248_19270 = state_19244__$1;
(statearr_19248_19270[(2)] = null);

(statearr_19248_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (4))){
var inst_19221 = (state_19244[(7)]);
var inst_19224 = cljs.core.first.call(null,inst_19221);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19244__$1,(7),ch,inst_19224);
} else {
if((state_val_19245 === (13))){
var inst_19238 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19249_19271 = state_19244__$1;
(statearr_19249_19271[(2)] = inst_19238);

(statearr_19249_19271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (6))){
var inst_19229 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
if(cljs.core.truth_(inst_19229)){
var statearr_19250_19272 = state_19244__$1;
(statearr_19250_19272[(1)] = (8));

} else {
var statearr_19251_19273 = state_19244__$1;
(statearr_19251_19273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (3))){
var inst_19242 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19244__$1,inst_19242);
} else {
if((state_val_19245 === (12))){
var state_19244__$1 = state_19244;
var statearr_19252_19274 = state_19244__$1;
(statearr_19252_19274[(2)] = null);

(statearr_19252_19274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (2))){
var inst_19221 = (state_19244[(7)]);
var state_19244__$1 = state_19244;
if(cljs.core.truth_(inst_19221)){
var statearr_19253_19275 = state_19244__$1;
(statearr_19253_19275[(1)] = (4));

} else {
var statearr_19254_19276 = state_19244__$1;
(statearr_19254_19276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (11))){
var inst_19235 = cljs.core.async.close_BANG_.call(null,ch);
var state_19244__$1 = state_19244;
var statearr_19255_19277 = state_19244__$1;
(statearr_19255_19277[(2)] = inst_19235);

(statearr_19255_19277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (9))){
var state_19244__$1 = state_19244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19256_19278 = state_19244__$1;
(statearr_19256_19278[(1)] = (11));

} else {
var statearr_19257_19279 = state_19244__$1;
(statearr_19257_19279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (5))){
var inst_19221 = (state_19244[(7)]);
var state_19244__$1 = state_19244;
var statearr_19258_19280 = state_19244__$1;
(statearr_19258_19280[(2)] = inst_19221);

(statearr_19258_19280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (10))){
var inst_19240 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19259_19281 = state_19244__$1;
(statearr_19259_19281[(2)] = inst_19240);

(statearr_19259_19281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (8))){
var inst_19221 = (state_19244[(7)]);
var inst_19231 = cljs.core.next.call(null,inst_19221);
var inst_19221__$1 = inst_19231;
var state_19244__$1 = (function (){var statearr_19260 = state_19244;
(statearr_19260[(7)] = inst_19221__$1);

return statearr_19260;
})();
var statearr_19261_19282 = state_19244__$1;
(statearr_19261_19282[(2)] = null);

(statearr_19261_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto__))
;
return ((function (switch__7116__auto__,c__7172__auto__){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_19265 = [null,null,null,null,null,null,null,null];
(statearr_19265[(0)] = state_machine__7117__auto__);

(statearr_19265[(1)] = (1));

return statearr_19265;
});
var state_machine__7117__auto____1 = (function (state_19244){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_19244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e19266){if((e19266 instanceof Object)){
var ex__7120__auto__ = e19266;
var statearr_19267_19283 = state_19244;
(statearr_19267_19283[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19284 = state_19244;
state_19244 = G__19284;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_19244){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_19244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto__))
})();
var state__7174__auto__ = (function (){var statearr_19268 = f__7173__auto__.call(null);
(statearr_19268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto__);

return statearr_19268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto__))
);

return c__7172__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj19286 = {};
return obj19286;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3746__auto__ = _;
if(and__3746__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4402__auto__ = (((_ == null))?null:_);
return (function (){var or__3758__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19288 = {};
return obj19288;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t19510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19510 = (function (cs,ch,mult,meta19511){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19511 = meta19511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19510.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19510.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19510.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19510.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19510.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19512){
var self__ = this;
var _19512__$1 = this;
return self__.meta19511;
});})(cs))
;

cljs.core.async.t19510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19512,meta19511__$1){
var self__ = this;
var _19512__$1 = this;
return (new cljs.core.async.t19510(self__.cs,self__.ch,self__.mult,meta19511__$1));
});})(cs))
;

cljs.core.async.t19510.cljs$lang$type = true;

cljs.core.async.t19510.cljs$lang$ctorStr = "cljs.core.async/t19510";

cljs.core.async.t19510.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t19510");
});})(cs))
;

cljs.core.async.__GT_t19510 = ((function (cs){
return (function __GT_t19510(cs__$1,ch__$1,mult__$1,meta19511){
return (new cljs.core.async.t19510(cs__$1,ch__$1,mult__$1,meta19511));
});})(cs))
;

}

return (new cljs.core.async.t19510(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7172__auto___19731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___19731,cs,m,dchan,dctr,done){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___19731,cs,m,dchan,dctr,done){
return (function (state_19643){
var state_val_19644 = (state_19643[(1)]);
if((state_val_19644 === (7))){
var inst_19639 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19645_19732 = state_19643__$1;
(statearr_19645_19732[(2)] = inst_19639);

(statearr_19645_19732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (20))){
var inst_19544 = (state_19643[(7)]);
var inst_19554 = cljs.core.first.call(null,inst_19544);
var inst_19555 = cljs.core.nth.call(null,inst_19554,(0),null);
var inst_19556 = cljs.core.nth.call(null,inst_19554,(1),null);
var state_19643__$1 = (function (){var statearr_19646 = state_19643;
(statearr_19646[(8)] = inst_19555);

return statearr_19646;
})();
if(cljs.core.truth_(inst_19556)){
var statearr_19647_19733 = state_19643__$1;
(statearr_19647_19733[(1)] = (22));

} else {
var statearr_19648_19734 = state_19643__$1;
(statearr_19648_19734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (27))){
var inst_19591 = (state_19643[(9)]);
var inst_19584 = (state_19643[(10)]);
var inst_19515 = (state_19643[(11)]);
var inst_19586 = (state_19643[(12)]);
var inst_19591__$1 = cljs.core._nth.call(null,inst_19584,inst_19586);
var inst_19592 = cljs.core.async.put_BANG_.call(null,inst_19591__$1,inst_19515,done);
var state_19643__$1 = (function (){var statearr_19649 = state_19643;
(statearr_19649[(9)] = inst_19591__$1);

return statearr_19649;
})();
if(cljs.core.truth_(inst_19592)){
var statearr_19650_19735 = state_19643__$1;
(statearr_19650_19735[(1)] = (30));

} else {
var statearr_19651_19736 = state_19643__$1;
(statearr_19651_19736[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (1))){
var state_19643__$1 = state_19643;
var statearr_19652_19737 = state_19643__$1;
(statearr_19652_19737[(2)] = null);

(statearr_19652_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (24))){
var inst_19544 = (state_19643[(7)]);
var inst_19561 = (state_19643[(2)]);
var inst_19562 = cljs.core.next.call(null,inst_19544);
var inst_19524 = inst_19562;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19643__$1 = (function (){var statearr_19653 = state_19643;
(statearr_19653[(13)] = inst_19561);

(statearr_19653[(14)] = inst_19526);

(statearr_19653[(15)] = inst_19527);

(statearr_19653[(16)] = inst_19524);

(statearr_19653[(17)] = inst_19525);

return statearr_19653;
})();
var statearr_19654_19738 = state_19643__$1;
(statearr_19654_19738[(2)] = null);

(statearr_19654_19738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (39))){
var state_19643__$1 = state_19643;
var statearr_19658_19739 = state_19643__$1;
(statearr_19658_19739[(2)] = null);

(statearr_19658_19739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (4))){
var inst_19515 = (state_19643[(11)]);
var inst_19515__$1 = (state_19643[(2)]);
var inst_19516 = (inst_19515__$1 == null);
var state_19643__$1 = (function (){var statearr_19659 = state_19643;
(statearr_19659[(11)] = inst_19515__$1);

return statearr_19659;
})();
if(cljs.core.truth_(inst_19516)){
var statearr_19660_19740 = state_19643__$1;
(statearr_19660_19740[(1)] = (5));

} else {
var statearr_19661_19741 = state_19643__$1;
(statearr_19661_19741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (15))){
var inst_19526 = (state_19643[(14)]);
var inst_19527 = (state_19643[(15)]);
var inst_19524 = (state_19643[(16)]);
var inst_19525 = (state_19643[(17)]);
var inst_19540 = (state_19643[(2)]);
var inst_19541 = (inst_19527 + (1));
var tmp19655 = inst_19526;
var tmp19656 = inst_19524;
var tmp19657 = inst_19525;
var inst_19524__$1 = tmp19656;
var inst_19525__$1 = tmp19657;
var inst_19526__$1 = tmp19655;
var inst_19527__$1 = inst_19541;
var state_19643__$1 = (function (){var statearr_19662 = state_19643;
(statearr_19662[(14)] = inst_19526__$1);

(statearr_19662[(15)] = inst_19527__$1);

(statearr_19662[(18)] = inst_19540);

(statearr_19662[(16)] = inst_19524__$1);

(statearr_19662[(17)] = inst_19525__$1);

return statearr_19662;
})();
var statearr_19663_19742 = state_19643__$1;
(statearr_19663_19742[(2)] = null);

(statearr_19663_19742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (21))){
var inst_19565 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19667_19743 = state_19643__$1;
(statearr_19667_19743[(2)] = inst_19565);

(statearr_19667_19743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (31))){
var inst_19591 = (state_19643[(9)]);
var inst_19595 = done.call(null,null);
var inst_19596 = cljs.core.async.untap_STAR_.call(null,m,inst_19591);
var state_19643__$1 = (function (){var statearr_19668 = state_19643;
(statearr_19668[(19)] = inst_19595);

return statearr_19668;
})();
var statearr_19669_19744 = state_19643__$1;
(statearr_19669_19744[(2)] = inst_19596);

(statearr_19669_19744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (32))){
var inst_19584 = (state_19643[(10)]);
var inst_19585 = (state_19643[(20)]);
var inst_19583 = (state_19643[(21)]);
var inst_19586 = (state_19643[(12)]);
var inst_19598 = (state_19643[(2)]);
var inst_19599 = (inst_19586 + (1));
var tmp19664 = inst_19584;
var tmp19665 = inst_19585;
var tmp19666 = inst_19583;
var inst_19583__$1 = tmp19666;
var inst_19584__$1 = tmp19664;
var inst_19585__$1 = tmp19665;
var inst_19586__$1 = inst_19599;
var state_19643__$1 = (function (){var statearr_19670 = state_19643;
(statearr_19670[(10)] = inst_19584__$1);

(statearr_19670[(20)] = inst_19585__$1);

(statearr_19670[(22)] = inst_19598);

(statearr_19670[(21)] = inst_19583__$1);

(statearr_19670[(12)] = inst_19586__$1);

return statearr_19670;
})();
var statearr_19671_19745 = state_19643__$1;
(statearr_19671_19745[(2)] = null);

(statearr_19671_19745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (40))){
var inst_19611 = (state_19643[(23)]);
var inst_19615 = done.call(null,null);
var inst_19616 = cljs.core.async.untap_STAR_.call(null,m,inst_19611);
var state_19643__$1 = (function (){var statearr_19672 = state_19643;
(statearr_19672[(24)] = inst_19615);

return statearr_19672;
})();
var statearr_19673_19746 = state_19643__$1;
(statearr_19673_19746[(2)] = inst_19616);

(statearr_19673_19746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (33))){
var inst_19602 = (state_19643[(25)]);
var inst_19604 = cljs.core.chunked_seq_QMARK_.call(null,inst_19602);
var state_19643__$1 = state_19643;
if(inst_19604){
var statearr_19674_19747 = state_19643__$1;
(statearr_19674_19747[(1)] = (36));

} else {
var statearr_19675_19748 = state_19643__$1;
(statearr_19675_19748[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (13))){
var inst_19534 = (state_19643[(26)]);
var inst_19537 = cljs.core.async.close_BANG_.call(null,inst_19534);
var state_19643__$1 = state_19643;
var statearr_19676_19749 = state_19643__$1;
(statearr_19676_19749[(2)] = inst_19537);

(statearr_19676_19749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (22))){
var inst_19555 = (state_19643[(8)]);
var inst_19558 = cljs.core.async.close_BANG_.call(null,inst_19555);
var state_19643__$1 = state_19643;
var statearr_19677_19750 = state_19643__$1;
(statearr_19677_19750[(2)] = inst_19558);

(statearr_19677_19750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (36))){
var inst_19602 = (state_19643[(25)]);
var inst_19606 = cljs.core.chunk_first.call(null,inst_19602);
var inst_19607 = cljs.core.chunk_rest.call(null,inst_19602);
var inst_19608 = cljs.core.count.call(null,inst_19606);
var inst_19583 = inst_19607;
var inst_19584 = inst_19606;
var inst_19585 = inst_19608;
var inst_19586 = (0);
var state_19643__$1 = (function (){var statearr_19678 = state_19643;
(statearr_19678[(10)] = inst_19584);

(statearr_19678[(20)] = inst_19585);

(statearr_19678[(21)] = inst_19583);

(statearr_19678[(12)] = inst_19586);

return statearr_19678;
})();
var statearr_19679_19751 = state_19643__$1;
(statearr_19679_19751[(2)] = null);

(statearr_19679_19751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (41))){
var inst_19602 = (state_19643[(25)]);
var inst_19618 = (state_19643[(2)]);
var inst_19619 = cljs.core.next.call(null,inst_19602);
var inst_19583 = inst_19619;
var inst_19584 = null;
var inst_19585 = (0);
var inst_19586 = (0);
var state_19643__$1 = (function (){var statearr_19680 = state_19643;
(statearr_19680[(10)] = inst_19584);

(statearr_19680[(20)] = inst_19585);

(statearr_19680[(21)] = inst_19583);

(statearr_19680[(12)] = inst_19586);

(statearr_19680[(27)] = inst_19618);

return statearr_19680;
})();
var statearr_19681_19752 = state_19643__$1;
(statearr_19681_19752[(2)] = null);

(statearr_19681_19752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (43))){
var state_19643__$1 = state_19643;
var statearr_19682_19753 = state_19643__$1;
(statearr_19682_19753[(2)] = null);

(statearr_19682_19753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (29))){
var inst_19627 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19683_19754 = state_19643__$1;
(statearr_19683_19754[(2)] = inst_19627);

(statearr_19683_19754[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (44))){
var inst_19636 = (state_19643[(2)]);
var state_19643__$1 = (function (){var statearr_19684 = state_19643;
(statearr_19684[(28)] = inst_19636);

return statearr_19684;
})();
var statearr_19685_19755 = state_19643__$1;
(statearr_19685_19755[(2)] = null);

(statearr_19685_19755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (6))){
var inst_19575 = (state_19643[(29)]);
var inst_19574 = cljs.core.deref.call(null,cs);
var inst_19575__$1 = cljs.core.keys.call(null,inst_19574);
var inst_19576 = cljs.core.count.call(null,inst_19575__$1);
var inst_19577 = cljs.core.reset_BANG_.call(null,dctr,inst_19576);
var inst_19582 = cljs.core.seq.call(null,inst_19575__$1);
var inst_19583 = inst_19582;
var inst_19584 = null;
var inst_19585 = (0);
var inst_19586 = (0);
var state_19643__$1 = (function (){var statearr_19686 = state_19643;
(statearr_19686[(10)] = inst_19584);

(statearr_19686[(20)] = inst_19585);

(statearr_19686[(30)] = inst_19577);

(statearr_19686[(21)] = inst_19583);

(statearr_19686[(29)] = inst_19575__$1);

(statearr_19686[(12)] = inst_19586);

return statearr_19686;
})();
var statearr_19687_19756 = state_19643__$1;
(statearr_19687_19756[(2)] = null);

(statearr_19687_19756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (28))){
var inst_19602 = (state_19643[(25)]);
var inst_19583 = (state_19643[(21)]);
var inst_19602__$1 = cljs.core.seq.call(null,inst_19583);
var state_19643__$1 = (function (){var statearr_19688 = state_19643;
(statearr_19688[(25)] = inst_19602__$1);

return statearr_19688;
})();
if(inst_19602__$1){
var statearr_19689_19757 = state_19643__$1;
(statearr_19689_19757[(1)] = (33));

} else {
var statearr_19690_19758 = state_19643__$1;
(statearr_19690_19758[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (25))){
var inst_19585 = (state_19643[(20)]);
var inst_19586 = (state_19643[(12)]);
var inst_19588 = (inst_19586 < inst_19585);
var inst_19589 = inst_19588;
var state_19643__$1 = state_19643;
if(cljs.core.truth_(inst_19589)){
var statearr_19691_19759 = state_19643__$1;
(statearr_19691_19759[(1)] = (27));

} else {
var statearr_19692_19760 = state_19643__$1;
(statearr_19692_19760[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (34))){
var state_19643__$1 = state_19643;
var statearr_19693_19761 = state_19643__$1;
(statearr_19693_19761[(2)] = null);

(statearr_19693_19761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (17))){
var state_19643__$1 = state_19643;
var statearr_19694_19762 = state_19643__$1;
(statearr_19694_19762[(2)] = null);

(statearr_19694_19762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (3))){
var inst_19641 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19643__$1,inst_19641);
} else {
if((state_val_19644 === (12))){
var inst_19570 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19695_19763 = state_19643__$1;
(statearr_19695_19763[(2)] = inst_19570);

(statearr_19695_19763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (2))){
var state_19643__$1 = state_19643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19643__$1,(4),ch);
} else {
if((state_val_19644 === (23))){
var state_19643__$1 = state_19643;
var statearr_19696_19764 = state_19643__$1;
(statearr_19696_19764[(2)] = null);

(statearr_19696_19764[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (35))){
var inst_19625 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19697_19765 = state_19643__$1;
(statearr_19697_19765[(2)] = inst_19625);

(statearr_19697_19765[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (19))){
var inst_19544 = (state_19643[(7)]);
var inst_19548 = cljs.core.chunk_first.call(null,inst_19544);
var inst_19549 = cljs.core.chunk_rest.call(null,inst_19544);
var inst_19550 = cljs.core.count.call(null,inst_19548);
var inst_19524 = inst_19549;
var inst_19525 = inst_19548;
var inst_19526 = inst_19550;
var inst_19527 = (0);
var state_19643__$1 = (function (){var statearr_19698 = state_19643;
(statearr_19698[(14)] = inst_19526);

(statearr_19698[(15)] = inst_19527);

(statearr_19698[(16)] = inst_19524);

(statearr_19698[(17)] = inst_19525);

return statearr_19698;
})();
var statearr_19699_19766 = state_19643__$1;
(statearr_19699_19766[(2)] = null);

(statearr_19699_19766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (11))){
var inst_19544 = (state_19643[(7)]);
var inst_19524 = (state_19643[(16)]);
var inst_19544__$1 = cljs.core.seq.call(null,inst_19524);
var state_19643__$1 = (function (){var statearr_19700 = state_19643;
(statearr_19700[(7)] = inst_19544__$1);

return statearr_19700;
})();
if(inst_19544__$1){
var statearr_19701_19767 = state_19643__$1;
(statearr_19701_19767[(1)] = (16));

} else {
var statearr_19702_19768 = state_19643__$1;
(statearr_19702_19768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (9))){
var inst_19572 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19703_19769 = state_19643__$1;
(statearr_19703_19769[(2)] = inst_19572);

(statearr_19703_19769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (5))){
var inst_19522 = cljs.core.deref.call(null,cs);
var inst_19523 = cljs.core.seq.call(null,inst_19522);
var inst_19524 = inst_19523;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19643__$1 = (function (){var statearr_19704 = state_19643;
(statearr_19704[(14)] = inst_19526);

(statearr_19704[(15)] = inst_19527);

(statearr_19704[(16)] = inst_19524);

(statearr_19704[(17)] = inst_19525);

return statearr_19704;
})();
var statearr_19705_19770 = state_19643__$1;
(statearr_19705_19770[(2)] = null);

(statearr_19705_19770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (14))){
var state_19643__$1 = state_19643;
var statearr_19706_19771 = state_19643__$1;
(statearr_19706_19771[(2)] = null);

(statearr_19706_19771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (45))){
var inst_19633 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19707_19772 = state_19643__$1;
(statearr_19707_19772[(2)] = inst_19633);

(statearr_19707_19772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (26))){
var inst_19575 = (state_19643[(29)]);
var inst_19629 = (state_19643[(2)]);
var inst_19630 = cljs.core.seq.call(null,inst_19575);
var state_19643__$1 = (function (){var statearr_19708 = state_19643;
(statearr_19708[(31)] = inst_19629);

return statearr_19708;
})();
if(inst_19630){
var statearr_19709_19773 = state_19643__$1;
(statearr_19709_19773[(1)] = (42));

} else {
var statearr_19710_19774 = state_19643__$1;
(statearr_19710_19774[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (16))){
var inst_19544 = (state_19643[(7)]);
var inst_19546 = cljs.core.chunked_seq_QMARK_.call(null,inst_19544);
var state_19643__$1 = state_19643;
if(inst_19546){
var statearr_19711_19775 = state_19643__$1;
(statearr_19711_19775[(1)] = (19));

} else {
var statearr_19712_19776 = state_19643__$1;
(statearr_19712_19776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (38))){
var inst_19622 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19713_19777 = state_19643__$1;
(statearr_19713_19777[(2)] = inst_19622);

(statearr_19713_19777[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (30))){
var state_19643__$1 = state_19643;
var statearr_19714_19778 = state_19643__$1;
(statearr_19714_19778[(2)] = null);

(statearr_19714_19778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (10))){
var inst_19527 = (state_19643[(15)]);
var inst_19525 = (state_19643[(17)]);
var inst_19533 = cljs.core._nth.call(null,inst_19525,inst_19527);
var inst_19534 = cljs.core.nth.call(null,inst_19533,(0),null);
var inst_19535 = cljs.core.nth.call(null,inst_19533,(1),null);
var state_19643__$1 = (function (){var statearr_19715 = state_19643;
(statearr_19715[(26)] = inst_19534);

return statearr_19715;
})();
if(cljs.core.truth_(inst_19535)){
var statearr_19716_19779 = state_19643__$1;
(statearr_19716_19779[(1)] = (13));

} else {
var statearr_19717_19780 = state_19643__$1;
(statearr_19717_19780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (18))){
var inst_19568 = (state_19643[(2)]);
var state_19643__$1 = state_19643;
var statearr_19718_19781 = state_19643__$1;
(statearr_19718_19781[(2)] = inst_19568);

(statearr_19718_19781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (42))){
var state_19643__$1 = state_19643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19643__$1,(45),dchan);
} else {
if((state_val_19644 === (37))){
var inst_19602 = (state_19643[(25)]);
var inst_19611 = (state_19643[(23)]);
var inst_19515 = (state_19643[(11)]);
var inst_19611__$1 = cljs.core.first.call(null,inst_19602);
var inst_19612 = cljs.core.async.put_BANG_.call(null,inst_19611__$1,inst_19515,done);
var state_19643__$1 = (function (){var statearr_19719 = state_19643;
(statearr_19719[(23)] = inst_19611__$1);

return statearr_19719;
})();
if(cljs.core.truth_(inst_19612)){
var statearr_19720_19782 = state_19643__$1;
(statearr_19720_19782[(1)] = (39));

} else {
var statearr_19721_19783 = state_19643__$1;
(statearr_19721_19783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19644 === (8))){
var inst_19526 = (state_19643[(14)]);
var inst_19527 = (state_19643[(15)]);
var inst_19529 = (inst_19527 < inst_19526);
var inst_19530 = inst_19529;
var state_19643__$1 = state_19643;
if(cljs.core.truth_(inst_19530)){
var statearr_19722_19784 = state_19643__$1;
(statearr_19722_19784[(1)] = (10));

} else {
var statearr_19723_19785 = state_19643__$1;
(statearr_19723_19785[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___19731,cs,m,dchan,dctr,done))
;
return ((function (switch__7116__auto__,c__7172__auto___19731,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_19727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19727[(0)] = state_machine__7117__auto__);

(statearr_19727[(1)] = (1));

return statearr_19727;
});
var state_machine__7117__auto____1 = (function (state_19643){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_19643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e19728){if((e19728 instanceof Object)){
var ex__7120__auto__ = e19728;
var statearr_19729_19786 = state_19643;
(statearr_19729_19786[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19787 = state_19643;
state_19643 = G__19787;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_19643){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_19643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___19731,cs,m,dchan,dctr,done))
})();
var state__7174__auto__ = (function (){var statearr_19730 = f__7173__auto__.call(null);
(statearr_19730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___19731);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___19731,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj19789 = {};
return obj19789;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3746__auto__ = m;
if(and__3746__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4402__auto__ = (((m == null))?null:m);
return (function (){var or__3758__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19790){
var map__19795 = p__19790;
var map__19795__$1 = ((cljs.core.seq_QMARK_.call(null,map__19795))?cljs.core.apply.call(null,cljs.core.hash_map,map__19795):map__19795);
var opts = map__19795__$1;
var statearr_19796_19799 = state;
(statearr_19796_19799[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19795,map__19795__$1,opts){
return (function (val){
var statearr_19797_19800 = state;
(statearr_19797_19800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19795,map__19795__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19798_19801 = state;
(statearr_19798_19801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19790 = null;
if (arguments.length > 3) {
var G__19802__i = 0, G__19802__a = new Array(arguments.length -  3);
while (G__19802__i < G__19802__a.length) {G__19802__a[G__19802__i] = arguments[G__19802__i + 3]; ++G__19802__i;}
  p__19790 = new cljs.core.IndexedSeq(G__19802__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19790);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19803){
var state = cljs.core.first(arglist__19803);
arglist__19803 = cljs.core.next(arglist__19803);
var cont_block = cljs.core.first(arglist__19803);
arglist__19803 = cljs.core.next(arglist__19803);
var ports = cljs.core.first(arglist__19803);
var p__19790 = cljs.core.rest(arglist__19803);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19790);
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19923 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19923 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19924){
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
this.meta19924 = meta19924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19923.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19923.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19925){
var self__ = this;
var _19925__$1 = this;
return self__.meta19924;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19925,meta19924__$1){
var self__ = this;
var _19925__$1 = this;
return (new cljs.core.async.t19923(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19924__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19923.cljs$lang$type = true;

cljs.core.async.t19923.cljs$lang$ctorStr = "cljs.core.async/t19923";

cljs.core.async.t19923.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t19923");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19923 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19924){
return (new cljs.core.async.t19923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19924));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19923(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7172__auto___20042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19995){
var state_val_19996 = (state_19995[(1)]);
if((state_val_19996 === (7))){
var inst_19939 = (state_19995[(7)]);
var inst_19944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19939);
var state_19995__$1 = state_19995;
var statearr_19997_20043 = state_19995__$1;
(statearr_19997_20043[(2)] = inst_19944);

(statearr_19997_20043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (20))){
var inst_19954 = (state_19995[(8)]);
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19995__$1,(23),out,inst_19954);
} else {
if((state_val_19996 === (1))){
var inst_19929 = (state_19995[(9)]);
var inst_19929__$1 = calc_state.call(null);
var inst_19930 = cljs.core.seq_QMARK_.call(null,inst_19929__$1);
var state_19995__$1 = (function (){var statearr_19998 = state_19995;
(statearr_19998[(9)] = inst_19929__$1);

return statearr_19998;
})();
if(inst_19930){
var statearr_19999_20044 = state_19995__$1;
(statearr_19999_20044[(1)] = (2));

} else {
var statearr_20000_20045 = state_19995__$1;
(statearr_20000_20045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (24))){
var inst_19947 = (state_19995[(10)]);
var inst_19939 = inst_19947;
var state_19995__$1 = (function (){var statearr_20001 = state_19995;
(statearr_20001[(7)] = inst_19939);

return statearr_20001;
})();
var statearr_20002_20046 = state_19995__$1;
(statearr_20002_20046[(2)] = null);

(statearr_20002_20046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (4))){
var inst_19929 = (state_19995[(9)]);
var inst_19935 = (state_19995[(2)]);
var inst_19936 = cljs.core.get.call(null,inst_19935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19937 = cljs.core.get.call(null,inst_19935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19938 = cljs.core.get.call(null,inst_19935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19939 = inst_19929;
var state_19995__$1 = (function (){var statearr_20003 = state_19995;
(statearr_20003[(11)] = inst_19936);

(statearr_20003[(12)] = inst_19938);

(statearr_20003[(13)] = inst_19937);

(statearr_20003[(7)] = inst_19939);

return statearr_20003;
})();
var statearr_20004_20047 = state_19995__$1;
(statearr_20004_20047[(2)] = null);

(statearr_20004_20047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (15))){
var state_19995__$1 = state_19995;
var statearr_20005_20048 = state_19995__$1;
(statearr_20005_20048[(2)] = null);

(statearr_20005_20048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (21))){
var inst_19947 = (state_19995[(10)]);
var inst_19939 = inst_19947;
var state_19995__$1 = (function (){var statearr_20006 = state_19995;
(statearr_20006[(7)] = inst_19939);

return statearr_20006;
})();
var statearr_20007_20049 = state_19995__$1;
(statearr_20007_20049[(2)] = null);

(statearr_20007_20049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (13))){
var inst_19991 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20008_20050 = state_19995__$1;
(statearr_20008_20050[(2)] = inst_19991);

(statearr_20008_20050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (22))){
var inst_19989 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20009_20051 = state_19995__$1;
(statearr_20009_20051[(2)] = inst_19989);

(statearr_20009_20051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (6))){
var inst_19993 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19995__$1,inst_19993);
} else {
if((state_val_19996 === (25))){
var state_19995__$1 = state_19995;
var statearr_20010_20052 = state_19995__$1;
(statearr_20010_20052[(2)] = null);

(statearr_20010_20052[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (17))){
var inst_19969 = (state_19995[(14)]);
var state_19995__$1 = state_19995;
var statearr_20011_20053 = state_19995__$1;
(statearr_20011_20053[(2)] = inst_19969);

(statearr_20011_20053[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (3))){
var inst_19929 = (state_19995[(9)]);
var state_19995__$1 = state_19995;
var statearr_20012_20054 = state_19995__$1;
(statearr_20012_20054[(2)] = inst_19929);

(statearr_20012_20054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (12))){
var inst_19955 = (state_19995[(15)]);
var inst_19969 = (state_19995[(14)]);
var inst_19950 = (state_19995[(16)]);
var inst_19969__$1 = inst_19950.call(null,inst_19955);
var state_19995__$1 = (function (){var statearr_20013 = state_19995;
(statearr_20013[(14)] = inst_19969__$1);

return statearr_20013;
})();
if(cljs.core.truth_(inst_19969__$1)){
var statearr_20014_20055 = state_19995__$1;
(statearr_20014_20055[(1)] = (17));

} else {
var statearr_20015_20056 = state_19995__$1;
(statearr_20015_20056[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (2))){
var inst_19929 = (state_19995[(9)]);
var inst_19932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19929);
var state_19995__$1 = state_19995;
var statearr_20016_20057 = state_19995__$1;
(statearr_20016_20057[(2)] = inst_19932);

(statearr_20016_20057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (23))){
var inst_19980 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
if(cljs.core.truth_(inst_19980)){
var statearr_20017_20058 = state_19995__$1;
(statearr_20017_20058[(1)] = (24));

} else {
var statearr_20018_20059 = state_19995__$1;
(statearr_20018_20059[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (19))){
var inst_19977 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
if(cljs.core.truth_(inst_19977)){
var statearr_20019_20060 = state_19995__$1;
(statearr_20019_20060[(1)] = (20));

} else {
var statearr_20020_20061 = state_19995__$1;
(statearr_20020_20061[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (11))){
var inst_19954 = (state_19995[(8)]);
var inst_19960 = (inst_19954 == null);
var state_19995__$1 = state_19995;
if(cljs.core.truth_(inst_19960)){
var statearr_20021_20062 = state_19995__$1;
(statearr_20021_20062[(1)] = (14));

} else {
var statearr_20022_20063 = state_19995__$1;
(statearr_20022_20063[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (9))){
var inst_19947 = (state_19995[(10)]);
var inst_19947__$1 = (state_19995[(2)]);
var inst_19948 = cljs.core.get.call(null,inst_19947__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19949 = cljs.core.get.call(null,inst_19947__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19950 = cljs.core.get.call(null,inst_19947__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19995__$1 = (function (){var statearr_20023 = state_19995;
(statearr_20023[(10)] = inst_19947__$1);

(statearr_20023[(17)] = inst_19949);

(statearr_20023[(16)] = inst_19950);

return statearr_20023;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19995__$1,(10),inst_19948);
} else {
if((state_val_19996 === (5))){
var inst_19939 = (state_19995[(7)]);
var inst_19942 = cljs.core.seq_QMARK_.call(null,inst_19939);
var state_19995__$1 = state_19995;
if(inst_19942){
var statearr_20024_20064 = state_19995__$1;
(statearr_20024_20064[(1)] = (7));

} else {
var statearr_20025_20065 = state_19995__$1;
(statearr_20025_20065[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (14))){
var inst_19955 = (state_19995[(15)]);
var inst_19962 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19955);
var state_19995__$1 = state_19995;
var statearr_20026_20066 = state_19995__$1;
(statearr_20026_20066[(2)] = inst_19962);

(statearr_20026_20066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (26))){
var inst_19985 = (state_19995[(2)]);
var state_19995__$1 = state_19995;
var statearr_20027_20067 = state_19995__$1;
(statearr_20027_20067[(2)] = inst_19985);

(statearr_20027_20067[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (16))){
var inst_19965 = (state_19995[(2)]);
var inst_19966 = calc_state.call(null);
var inst_19939 = inst_19966;
var state_19995__$1 = (function (){var statearr_20028 = state_19995;
(statearr_20028[(18)] = inst_19965);

(statearr_20028[(7)] = inst_19939);

return statearr_20028;
})();
var statearr_20029_20068 = state_19995__$1;
(statearr_20029_20068[(2)] = null);

(statearr_20029_20068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (10))){
var inst_19954 = (state_19995[(8)]);
var inst_19955 = (state_19995[(15)]);
var inst_19953 = (state_19995[(2)]);
var inst_19954__$1 = cljs.core.nth.call(null,inst_19953,(0),null);
var inst_19955__$1 = cljs.core.nth.call(null,inst_19953,(1),null);
var inst_19956 = (inst_19954__$1 == null);
var inst_19957 = cljs.core._EQ_.call(null,inst_19955__$1,change);
var inst_19958 = (inst_19956) || (inst_19957);
var state_19995__$1 = (function (){var statearr_20030 = state_19995;
(statearr_20030[(8)] = inst_19954__$1);

(statearr_20030[(15)] = inst_19955__$1);

return statearr_20030;
})();
if(cljs.core.truth_(inst_19958)){
var statearr_20031_20069 = state_19995__$1;
(statearr_20031_20069[(1)] = (11));

} else {
var statearr_20032_20070 = state_19995__$1;
(statearr_20032_20070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (18))){
var inst_19949 = (state_19995[(17)]);
var inst_19955 = (state_19995[(15)]);
var inst_19950 = (state_19995[(16)]);
var inst_19972 = cljs.core.empty_QMARK_.call(null,inst_19950);
var inst_19973 = inst_19949.call(null,inst_19955);
var inst_19974 = cljs.core.not.call(null,inst_19973);
var inst_19975 = (inst_19972) && (inst_19974);
var state_19995__$1 = state_19995;
var statearr_20033_20071 = state_19995__$1;
(statearr_20033_20071[(2)] = inst_19975);

(statearr_20033_20071[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19996 === (8))){
var inst_19939 = (state_19995[(7)]);
var state_19995__$1 = state_19995;
var statearr_20034_20072 = state_19995__$1;
(statearr_20034_20072[(2)] = inst_19939);

(statearr_20034_20072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7116__auto__,c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20038[(0)] = state_machine__7117__auto__);

(statearr_20038[(1)] = (1));

return statearr_20038;
});
var state_machine__7117__auto____1 = (function (state_19995){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_19995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20039){if((e20039 instanceof Object)){
var ex__7120__auto__ = e20039;
var statearr_20040_20073 = state_19995;
(statearr_20040_20073[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20074 = state_19995;
state_19995 = G__20074;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_19995){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_19995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7174__auto__ = (function (){var statearr_20041 = f__7173__auto__.call(null);
(statearr_20041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20042);

return statearr_20041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj20076 = {};
return obj20076;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3746__auto__ = p;
if(and__3746__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4402__auto__ = (((p == null))?null:p);
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3758__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3758__auto__,mults){
return (function (p1__20077_SHARP_){
if(cljs.core.truth_(p1__20077_SHARP_.call(null,topic))){
return p1__20077_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20077_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3758__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20200 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20201){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20201 = meta20201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20200.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20202){
var self__ = this;
var _20202__$1 = this;
return self__.meta20201;
});})(mults,ensure_mult))
;

cljs.core.async.t20200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20202,meta20201__$1){
var self__ = this;
var _20202__$1 = this;
return (new cljs.core.async.t20200(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20201__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20200.cljs$lang$type = true;

cljs.core.async.t20200.cljs$lang$ctorStr = "cljs.core.async/t20200";

cljs.core.async.t20200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t20200");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20200 = ((function (mults,ensure_mult){
return (function __GT_t20200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20201){
return (new cljs.core.async.t20200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20201));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20200(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7172__auto___20322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20322,mults,ensure_mult,p){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20322,mults,ensure_mult,p){
return (function (state_20274){
var state_val_20275 = (state_20274[(1)]);
if((state_val_20275 === (7))){
var inst_20270 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20276_20323 = state_20274__$1;
(statearr_20276_20323[(2)] = inst_20270);

(statearr_20276_20323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (20))){
var state_20274__$1 = state_20274;
var statearr_20277_20324 = state_20274__$1;
(statearr_20277_20324[(2)] = null);

(statearr_20277_20324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (1))){
var state_20274__$1 = state_20274;
var statearr_20278_20325 = state_20274__$1;
(statearr_20278_20325[(2)] = null);

(statearr_20278_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (24))){
var inst_20253 = (state_20274[(7)]);
var inst_20262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20253);
var state_20274__$1 = state_20274;
var statearr_20279_20326 = state_20274__$1;
(statearr_20279_20326[(2)] = inst_20262);

(statearr_20279_20326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (4))){
var inst_20205 = (state_20274[(8)]);
var inst_20205__$1 = (state_20274[(2)]);
var inst_20206 = (inst_20205__$1 == null);
var state_20274__$1 = (function (){var statearr_20280 = state_20274;
(statearr_20280[(8)] = inst_20205__$1);

return statearr_20280;
})();
if(cljs.core.truth_(inst_20206)){
var statearr_20281_20327 = state_20274__$1;
(statearr_20281_20327[(1)] = (5));

} else {
var statearr_20282_20328 = state_20274__$1;
(statearr_20282_20328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (15))){
var inst_20247 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20283_20329 = state_20274__$1;
(statearr_20283_20329[(2)] = inst_20247);

(statearr_20283_20329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (21))){
var inst_20267 = (state_20274[(2)]);
var state_20274__$1 = (function (){var statearr_20284 = state_20274;
(statearr_20284[(9)] = inst_20267);

return statearr_20284;
})();
var statearr_20285_20330 = state_20274__$1;
(statearr_20285_20330[(2)] = null);

(statearr_20285_20330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (13))){
var inst_20229 = (state_20274[(10)]);
var inst_20231 = cljs.core.chunked_seq_QMARK_.call(null,inst_20229);
var state_20274__$1 = state_20274;
if(inst_20231){
var statearr_20286_20331 = state_20274__$1;
(statearr_20286_20331[(1)] = (16));

} else {
var statearr_20287_20332 = state_20274__$1;
(statearr_20287_20332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (22))){
var inst_20259 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
if(cljs.core.truth_(inst_20259)){
var statearr_20288_20333 = state_20274__$1;
(statearr_20288_20333[(1)] = (23));

} else {
var statearr_20289_20334 = state_20274__$1;
(statearr_20289_20334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (6))){
var inst_20255 = (state_20274[(11)]);
var inst_20253 = (state_20274[(7)]);
var inst_20205 = (state_20274[(8)]);
var inst_20253__$1 = topic_fn.call(null,inst_20205);
var inst_20254 = cljs.core.deref.call(null,mults);
var inst_20255__$1 = cljs.core.get.call(null,inst_20254,inst_20253__$1);
var state_20274__$1 = (function (){var statearr_20290 = state_20274;
(statearr_20290[(11)] = inst_20255__$1);

(statearr_20290[(7)] = inst_20253__$1);

return statearr_20290;
})();
if(cljs.core.truth_(inst_20255__$1)){
var statearr_20291_20335 = state_20274__$1;
(statearr_20291_20335[(1)] = (19));

} else {
var statearr_20292_20336 = state_20274__$1;
(statearr_20292_20336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (25))){
var inst_20264 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20293_20337 = state_20274__$1;
(statearr_20293_20337[(2)] = inst_20264);

(statearr_20293_20337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (17))){
var inst_20229 = (state_20274[(10)]);
var inst_20238 = cljs.core.first.call(null,inst_20229);
var inst_20239 = cljs.core.async.muxch_STAR_.call(null,inst_20238);
var inst_20240 = cljs.core.async.close_BANG_.call(null,inst_20239);
var inst_20241 = cljs.core.next.call(null,inst_20229);
var inst_20215 = inst_20241;
var inst_20216 = null;
var inst_20217 = (0);
var inst_20218 = (0);
var state_20274__$1 = (function (){var statearr_20294 = state_20274;
(statearr_20294[(12)] = inst_20216);

(statearr_20294[(13)] = inst_20218);

(statearr_20294[(14)] = inst_20215);

(statearr_20294[(15)] = inst_20240);

(statearr_20294[(16)] = inst_20217);

return statearr_20294;
})();
var statearr_20295_20338 = state_20274__$1;
(statearr_20295_20338[(2)] = null);

(statearr_20295_20338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (3))){
var inst_20272 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20274__$1,inst_20272);
} else {
if((state_val_20275 === (12))){
var inst_20249 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20296_20339 = state_20274__$1;
(statearr_20296_20339[(2)] = inst_20249);

(statearr_20296_20339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (2))){
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20274__$1,(4),ch);
} else {
if((state_val_20275 === (23))){
var state_20274__$1 = state_20274;
var statearr_20297_20340 = state_20274__$1;
(statearr_20297_20340[(2)] = null);

(statearr_20297_20340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (19))){
var inst_20255 = (state_20274[(11)]);
var inst_20205 = (state_20274[(8)]);
var inst_20257 = cljs.core.async.muxch_STAR_.call(null,inst_20255);
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20274__$1,(22),inst_20257,inst_20205);
} else {
if((state_val_20275 === (11))){
var inst_20215 = (state_20274[(14)]);
var inst_20229 = (state_20274[(10)]);
var inst_20229__$1 = cljs.core.seq.call(null,inst_20215);
var state_20274__$1 = (function (){var statearr_20298 = state_20274;
(statearr_20298[(10)] = inst_20229__$1);

return statearr_20298;
})();
if(inst_20229__$1){
var statearr_20299_20341 = state_20274__$1;
(statearr_20299_20341[(1)] = (13));

} else {
var statearr_20300_20342 = state_20274__$1;
(statearr_20300_20342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (9))){
var inst_20251 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20301_20343 = state_20274__$1;
(statearr_20301_20343[(2)] = inst_20251);

(statearr_20301_20343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (5))){
var inst_20212 = cljs.core.deref.call(null,mults);
var inst_20213 = cljs.core.vals.call(null,inst_20212);
var inst_20214 = cljs.core.seq.call(null,inst_20213);
var inst_20215 = inst_20214;
var inst_20216 = null;
var inst_20217 = (0);
var inst_20218 = (0);
var state_20274__$1 = (function (){var statearr_20302 = state_20274;
(statearr_20302[(12)] = inst_20216);

(statearr_20302[(13)] = inst_20218);

(statearr_20302[(14)] = inst_20215);

(statearr_20302[(16)] = inst_20217);

return statearr_20302;
})();
var statearr_20303_20344 = state_20274__$1;
(statearr_20303_20344[(2)] = null);

(statearr_20303_20344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (14))){
var state_20274__$1 = state_20274;
var statearr_20307_20345 = state_20274__$1;
(statearr_20307_20345[(2)] = null);

(statearr_20307_20345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (16))){
var inst_20229 = (state_20274[(10)]);
var inst_20233 = cljs.core.chunk_first.call(null,inst_20229);
var inst_20234 = cljs.core.chunk_rest.call(null,inst_20229);
var inst_20235 = cljs.core.count.call(null,inst_20233);
var inst_20215 = inst_20234;
var inst_20216 = inst_20233;
var inst_20217 = inst_20235;
var inst_20218 = (0);
var state_20274__$1 = (function (){var statearr_20308 = state_20274;
(statearr_20308[(12)] = inst_20216);

(statearr_20308[(13)] = inst_20218);

(statearr_20308[(14)] = inst_20215);

(statearr_20308[(16)] = inst_20217);

return statearr_20308;
})();
var statearr_20309_20346 = state_20274__$1;
(statearr_20309_20346[(2)] = null);

(statearr_20309_20346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (10))){
var inst_20216 = (state_20274[(12)]);
var inst_20218 = (state_20274[(13)]);
var inst_20215 = (state_20274[(14)]);
var inst_20217 = (state_20274[(16)]);
var inst_20223 = cljs.core._nth.call(null,inst_20216,inst_20218);
var inst_20224 = cljs.core.async.muxch_STAR_.call(null,inst_20223);
var inst_20225 = cljs.core.async.close_BANG_.call(null,inst_20224);
var inst_20226 = (inst_20218 + (1));
var tmp20304 = inst_20216;
var tmp20305 = inst_20215;
var tmp20306 = inst_20217;
var inst_20215__$1 = tmp20305;
var inst_20216__$1 = tmp20304;
var inst_20217__$1 = tmp20306;
var inst_20218__$1 = inst_20226;
var state_20274__$1 = (function (){var statearr_20310 = state_20274;
(statearr_20310[(12)] = inst_20216__$1);

(statearr_20310[(17)] = inst_20225);

(statearr_20310[(13)] = inst_20218__$1);

(statearr_20310[(14)] = inst_20215__$1);

(statearr_20310[(16)] = inst_20217__$1);

return statearr_20310;
})();
var statearr_20311_20347 = state_20274__$1;
(statearr_20311_20347[(2)] = null);

(statearr_20311_20347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (18))){
var inst_20244 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20312_20348 = state_20274__$1;
(statearr_20312_20348[(2)] = inst_20244);

(statearr_20312_20348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (8))){
var inst_20218 = (state_20274[(13)]);
var inst_20217 = (state_20274[(16)]);
var inst_20220 = (inst_20218 < inst_20217);
var inst_20221 = inst_20220;
var state_20274__$1 = state_20274;
if(cljs.core.truth_(inst_20221)){
var statearr_20313_20349 = state_20274__$1;
(statearr_20313_20349[(1)] = (10));

} else {
var statearr_20314_20350 = state_20274__$1;
(statearr_20314_20350[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20322,mults,ensure_mult,p))
;
return ((function (switch__7116__auto__,c__7172__auto___20322,mults,ensure_mult,p){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20318[(0)] = state_machine__7117__auto__);

(statearr_20318[(1)] = (1));

return statearr_20318;
});
var state_machine__7117__auto____1 = (function (state_20274){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_20274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20319){if((e20319 instanceof Object)){
var ex__7120__auto__ = e20319;
var statearr_20320_20351 = state_20274;
(statearr_20320_20351[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20352 = state_20274;
state_20274 = G__20352;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_20274){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_20274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20322,mults,ensure_mult,p))
})();
var state__7174__auto__ = (function (){var statearr_20321 = f__7173__auto__.call(null);
(statearr_20321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20322);

return statearr_20321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20322,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7172__auto___20489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20459){
var state_val_20460 = (state_20459[(1)]);
if((state_val_20460 === (7))){
var state_20459__$1 = state_20459;
var statearr_20461_20490 = state_20459__$1;
(statearr_20461_20490[(2)] = null);

(statearr_20461_20490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (1))){
var state_20459__$1 = state_20459;
var statearr_20462_20491 = state_20459__$1;
(statearr_20462_20491[(2)] = null);

(statearr_20462_20491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (4))){
var inst_20423 = (state_20459[(7)]);
var inst_20425 = (inst_20423 < cnt);
var state_20459__$1 = state_20459;
if(cljs.core.truth_(inst_20425)){
var statearr_20463_20492 = state_20459__$1;
(statearr_20463_20492[(1)] = (6));

} else {
var statearr_20464_20493 = state_20459__$1;
(statearr_20464_20493[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (15))){
var inst_20455 = (state_20459[(2)]);
var state_20459__$1 = state_20459;
var statearr_20465_20494 = state_20459__$1;
(statearr_20465_20494[(2)] = inst_20455);

(statearr_20465_20494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (13))){
var inst_20448 = cljs.core.async.close_BANG_.call(null,out);
var state_20459__$1 = state_20459;
var statearr_20466_20495 = state_20459__$1;
(statearr_20466_20495[(2)] = inst_20448);

(statearr_20466_20495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (6))){
var state_20459__$1 = state_20459;
var statearr_20467_20496 = state_20459__$1;
(statearr_20467_20496[(2)] = null);

(statearr_20467_20496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (3))){
var inst_20457 = (state_20459[(2)]);
var state_20459__$1 = state_20459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20459__$1,inst_20457);
} else {
if((state_val_20460 === (12))){
var inst_20445 = (state_20459[(8)]);
var inst_20445__$1 = (state_20459[(2)]);
var inst_20446 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20445__$1);
var state_20459__$1 = (function (){var statearr_20468 = state_20459;
(statearr_20468[(8)] = inst_20445__$1);

return statearr_20468;
})();
if(cljs.core.truth_(inst_20446)){
var statearr_20469_20497 = state_20459__$1;
(statearr_20469_20497[(1)] = (13));

} else {
var statearr_20470_20498 = state_20459__$1;
(statearr_20470_20498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (2))){
var inst_20422 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20423 = (0);
var state_20459__$1 = (function (){var statearr_20471 = state_20459;
(statearr_20471[(7)] = inst_20423);

(statearr_20471[(9)] = inst_20422);

return statearr_20471;
})();
var statearr_20472_20499 = state_20459__$1;
(statearr_20472_20499[(2)] = null);

(statearr_20472_20499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (11))){
var inst_20423 = (state_20459[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20459,(10),Object,null,(9));
var inst_20432 = chs__$1.call(null,inst_20423);
var inst_20433 = done.call(null,inst_20423);
var inst_20434 = cljs.core.async.take_BANG_.call(null,inst_20432,inst_20433);
var state_20459__$1 = state_20459;
var statearr_20473_20500 = state_20459__$1;
(statearr_20473_20500[(2)] = inst_20434);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (9))){
var inst_20423 = (state_20459[(7)]);
var inst_20436 = (state_20459[(2)]);
var inst_20437 = (inst_20423 + (1));
var inst_20423__$1 = inst_20437;
var state_20459__$1 = (function (){var statearr_20474 = state_20459;
(statearr_20474[(7)] = inst_20423__$1);

(statearr_20474[(10)] = inst_20436);

return statearr_20474;
})();
var statearr_20475_20501 = state_20459__$1;
(statearr_20475_20501[(2)] = null);

(statearr_20475_20501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (5))){
var inst_20443 = (state_20459[(2)]);
var state_20459__$1 = (function (){var statearr_20476 = state_20459;
(statearr_20476[(11)] = inst_20443);

return statearr_20476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20459__$1,(12),dchan);
} else {
if((state_val_20460 === (14))){
var inst_20445 = (state_20459[(8)]);
var inst_20450 = cljs.core.apply.call(null,f,inst_20445);
var state_20459__$1 = state_20459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20459__$1,(16),out,inst_20450);
} else {
if((state_val_20460 === (16))){
var inst_20452 = (state_20459[(2)]);
var state_20459__$1 = (function (){var statearr_20477 = state_20459;
(statearr_20477[(12)] = inst_20452);

return statearr_20477;
})();
var statearr_20478_20502 = state_20459__$1;
(statearr_20478_20502[(2)] = null);

(statearr_20478_20502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (10))){
var inst_20427 = (state_20459[(2)]);
var inst_20428 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20459__$1 = (function (){var statearr_20479 = state_20459;
(statearr_20479[(13)] = inst_20427);

return statearr_20479;
})();
var statearr_20480_20503 = state_20459__$1;
(statearr_20480_20503[(2)] = inst_20428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20460 === (8))){
var inst_20441 = (state_20459[(2)]);
var state_20459__$1 = state_20459;
var statearr_20481_20504 = state_20459__$1;
(statearr_20481_20504[(2)] = inst_20441);

(statearr_20481_20504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7116__auto__,c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20485[(0)] = state_machine__7117__auto__);

(statearr_20485[(1)] = (1));

return statearr_20485;
});
var state_machine__7117__auto____1 = (function (state_20459){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_20459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20486){if((e20486 instanceof Object)){
var ex__7120__auto__ = e20486;
var statearr_20487_20505 = state_20459;
(statearr_20487_20505[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20506 = state_20459;
state_20459 = G__20506;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_20459){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_20459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7174__auto__ = (function (){var statearr_20488 = f__7173__auto__.call(null);
(statearr_20488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20489);

return statearr_20488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20489,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___20614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20614,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20614,out){
return (function (state_20590){
var state_val_20591 = (state_20590[(1)]);
if((state_val_20591 === (7))){
var inst_20569 = (state_20590[(7)]);
var inst_20570 = (state_20590[(8)]);
var inst_20569__$1 = (state_20590[(2)]);
var inst_20570__$1 = cljs.core.nth.call(null,inst_20569__$1,(0),null);
var inst_20571 = cljs.core.nth.call(null,inst_20569__$1,(1),null);
var inst_20572 = (inst_20570__$1 == null);
var state_20590__$1 = (function (){var statearr_20592 = state_20590;
(statearr_20592[(7)] = inst_20569__$1);

(statearr_20592[(8)] = inst_20570__$1);

(statearr_20592[(9)] = inst_20571);

return statearr_20592;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20593_20615 = state_20590__$1;
(statearr_20593_20615[(1)] = (8));

} else {
var statearr_20594_20616 = state_20590__$1;
(statearr_20594_20616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (1))){
var inst_20561 = cljs.core.vec.call(null,chs);
var inst_20562 = inst_20561;
var state_20590__$1 = (function (){var statearr_20595 = state_20590;
(statearr_20595[(10)] = inst_20562);

return statearr_20595;
})();
var statearr_20596_20617 = state_20590__$1;
(statearr_20596_20617[(2)] = null);

(statearr_20596_20617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (4))){
var inst_20562 = (state_20590[(10)]);
var state_20590__$1 = state_20590;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20590__$1,(7),inst_20562);
} else {
if((state_val_20591 === (6))){
var inst_20586 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
var statearr_20597_20618 = state_20590__$1;
(statearr_20597_20618[(2)] = inst_20586);

(statearr_20597_20618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (3))){
var inst_20588 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20590__$1,inst_20588);
} else {
if((state_val_20591 === (2))){
var inst_20562 = (state_20590[(10)]);
var inst_20564 = cljs.core.count.call(null,inst_20562);
var inst_20565 = (inst_20564 > (0));
var state_20590__$1 = state_20590;
if(cljs.core.truth_(inst_20565)){
var statearr_20599_20619 = state_20590__$1;
(statearr_20599_20619[(1)] = (4));

} else {
var statearr_20600_20620 = state_20590__$1;
(statearr_20600_20620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (11))){
var inst_20562 = (state_20590[(10)]);
var inst_20579 = (state_20590[(2)]);
var tmp20598 = inst_20562;
var inst_20562__$1 = tmp20598;
var state_20590__$1 = (function (){var statearr_20601 = state_20590;
(statearr_20601[(10)] = inst_20562__$1);

(statearr_20601[(11)] = inst_20579);

return statearr_20601;
})();
var statearr_20602_20621 = state_20590__$1;
(statearr_20602_20621[(2)] = null);

(statearr_20602_20621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (9))){
var inst_20570 = (state_20590[(8)]);
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20590__$1,(11),out,inst_20570);
} else {
if((state_val_20591 === (5))){
var inst_20584 = cljs.core.async.close_BANG_.call(null,out);
var state_20590__$1 = state_20590;
var statearr_20603_20622 = state_20590__$1;
(statearr_20603_20622[(2)] = inst_20584);

(statearr_20603_20622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (10))){
var inst_20582 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
var statearr_20604_20623 = state_20590__$1;
(statearr_20604_20623[(2)] = inst_20582);

(statearr_20604_20623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (8))){
var inst_20569 = (state_20590[(7)]);
var inst_20570 = (state_20590[(8)]);
var inst_20562 = (state_20590[(10)]);
var inst_20571 = (state_20590[(9)]);
var inst_20574 = (function (){var c = inst_20571;
var v = inst_20570;
var vec__20567 = inst_20569;
var cs = inst_20562;
return ((function (c,v,vec__20567,cs,inst_20569,inst_20570,inst_20562,inst_20571,state_val_20591,c__7172__auto___20614,out){
return (function (p1__20507_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20507_SHARP_);
});
;})(c,v,vec__20567,cs,inst_20569,inst_20570,inst_20562,inst_20571,state_val_20591,c__7172__auto___20614,out))
})();
var inst_20575 = cljs.core.filterv.call(null,inst_20574,inst_20562);
var inst_20562__$1 = inst_20575;
var state_20590__$1 = (function (){var statearr_20605 = state_20590;
(statearr_20605[(10)] = inst_20562__$1);

return statearr_20605;
})();
var statearr_20606_20624 = state_20590__$1;
(statearr_20606_20624[(2)] = null);

(statearr_20606_20624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20614,out))
;
return ((function (switch__7116__auto__,c__7172__auto___20614,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20610[(0)] = state_machine__7117__auto__);

(statearr_20610[(1)] = (1));

return statearr_20610;
});
var state_machine__7117__auto____1 = (function (state_20590){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_20590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20611){if((e20611 instanceof Object)){
var ex__7120__auto__ = e20611;
var statearr_20612_20625 = state_20590;
(statearr_20612_20625[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20626 = state_20590;
state_20590 = G__20626;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_20590){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_20590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20614,out))
})();
var state__7174__auto__ = (function (){var statearr_20613 = f__7173__auto__.call(null);
(statearr_20613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20614);

return statearr_20613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20614,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___20719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20719,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20719,out){
return (function (state_20696){
var state_val_20697 = (state_20696[(1)]);
if((state_val_20697 === (7))){
var inst_20678 = (state_20696[(7)]);
var inst_20678__$1 = (state_20696[(2)]);
var inst_20679 = (inst_20678__$1 == null);
var inst_20680 = cljs.core.not.call(null,inst_20679);
var state_20696__$1 = (function (){var statearr_20698 = state_20696;
(statearr_20698[(7)] = inst_20678__$1);

return statearr_20698;
})();
if(inst_20680){
var statearr_20699_20720 = state_20696__$1;
(statearr_20699_20720[(1)] = (8));

} else {
var statearr_20700_20721 = state_20696__$1;
(statearr_20700_20721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (1))){
var inst_20673 = (0);
var state_20696__$1 = (function (){var statearr_20701 = state_20696;
(statearr_20701[(8)] = inst_20673);

return statearr_20701;
})();
var statearr_20702_20722 = state_20696__$1;
(statearr_20702_20722[(2)] = null);

(statearr_20702_20722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (4))){
var state_20696__$1 = state_20696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20696__$1,(7),ch);
} else {
if((state_val_20697 === (6))){
var inst_20691 = (state_20696[(2)]);
var state_20696__$1 = state_20696;
var statearr_20703_20723 = state_20696__$1;
(statearr_20703_20723[(2)] = inst_20691);

(statearr_20703_20723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (3))){
var inst_20693 = (state_20696[(2)]);
var inst_20694 = cljs.core.async.close_BANG_.call(null,out);
var state_20696__$1 = (function (){var statearr_20704 = state_20696;
(statearr_20704[(9)] = inst_20693);

return statearr_20704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20696__$1,inst_20694);
} else {
if((state_val_20697 === (2))){
var inst_20673 = (state_20696[(8)]);
var inst_20675 = (inst_20673 < n);
var state_20696__$1 = state_20696;
if(cljs.core.truth_(inst_20675)){
var statearr_20705_20724 = state_20696__$1;
(statearr_20705_20724[(1)] = (4));

} else {
var statearr_20706_20725 = state_20696__$1;
(statearr_20706_20725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (11))){
var inst_20673 = (state_20696[(8)]);
var inst_20683 = (state_20696[(2)]);
var inst_20684 = (inst_20673 + (1));
var inst_20673__$1 = inst_20684;
var state_20696__$1 = (function (){var statearr_20707 = state_20696;
(statearr_20707[(8)] = inst_20673__$1);

(statearr_20707[(10)] = inst_20683);

return statearr_20707;
})();
var statearr_20708_20726 = state_20696__$1;
(statearr_20708_20726[(2)] = null);

(statearr_20708_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (9))){
var state_20696__$1 = state_20696;
var statearr_20709_20727 = state_20696__$1;
(statearr_20709_20727[(2)] = null);

(statearr_20709_20727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (5))){
var state_20696__$1 = state_20696;
var statearr_20710_20728 = state_20696__$1;
(statearr_20710_20728[(2)] = null);

(statearr_20710_20728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (10))){
var inst_20688 = (state_20696[(2)]);
var state_20696__$1 = state_20696;
var statearr_20711_20729 = state_20696__$1;
(statearr_20711_20729[(2)] = inst_20688);

(statearr_20711_20729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (8))){
var inst_20678 = (state_20696[(7)]);
var state_20696__$1 = state_20696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20696__$1,(11),out,inst_20678);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20719,out))
;
return ((function (switch__7116__auto__,c__7172__auto___20719,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20715[(0)] = state_machine__7117__auto__);

(statearr_20715[(1)] = (1));

return statearr_20715;
});
var state_machine__7117__auto____1 = (function (state_20696){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_20696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20716){if((e20716 instanceof Object)){
var ex__7120__auto__ = e20716;
var statearr_20717_20730 = state_20696;
(statearr_20717_20730[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20731 = state_20696;
state_20696 = G__20731;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_20696){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_20696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20719,out))
})();
var state__7174__auto__ = (function (){var statearr_20718 = f__7173__auto__.call(null);
(statearr_20718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20719);

return statearr_20718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20719,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t20739 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20739 = (function (ch,f,map_LT_,meta20740){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20740 = meta20740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20742 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20742 = (function (fn1,_,meta20740,map_LT_,f,ch,meta20743){
this.fn1 = fn1;
this._ = _;
this.meta20740 = meta20740;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20743 = meta20743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20732_SHARP_){
return f1.call(null,(((p1__20732_SHARP_ == null))?null:self__.f.call(null,p1__20732_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20744){
var self__ = this;
var _20744__$1 = this;
return self__.meta20743;
});})(___$1))
;

cljs.core.async.t20742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20744,meta20743__$1){
var self__ = this;
var _20744__$1 = this;
return (new cljs.core.async.t20742(self__.fn1,self__._,self__.meta20740,self__.map_LT_,self__.f,self__.ch,meta20743__$1));
});})(___$1))
;

cljs.core.async.t20742.cljs$lang$type = true;

cljs.core.async.t20742.cljs$lang$ctorStr = "cljs.core.async/t20742";

cljs.core.async.t20742.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t20742");
});})(___$1))
;

cljs.core.async.__GT_t20742 = ((function (___$1){
return (function __GT_t20742(fn1__$1,___$2,meta20740__$1,map_LT___$1,f__$1,ch__$1,meta20743){
return (new cljs.core.async.t20742(fn1__$1,___$2,meta20740__$1,map_LT___$1,f__$1,ch__$1,meta20743));
});})(___$1))
;

}

return (new cljs.core.async.t20742(fn1,___$1,self__.meta20740,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3746__auto__ = ret;
if(cljs.core.truth_(and__3746__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3746__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20741){
var self__ = this;
var _20741__$1 = this;
return self__.meta20740;
});

cljs.core.async.t20739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20741,meta20740__$1){
var self__ = this;
var _20741__$1 = this;
return (new cljs.core.async.t20739(self__.ch,self__.f,self__.map_LT_,meta20740__$1));
});

cljs.core.async.t20739.cljs$lang$type = true;

cljs.core.async.t20739.cljs$lang$ctorStr = "cljs.core.async/t20739";

cljs.core.async.t20739.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t20739");
});

cljs.core.async.__GT_t20739 = (function __GT_t20739(ch__$1,f__$1,map_LT___$1,meta20740){
return (new cljs.core.async.t20739(ch__$1,f__$1,map_LT___$1,meta20740));
});

}

return (new cljs.core.async.t20739(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20748 = (function (ch,f,map_GT_,meta20749){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20749 = meta20749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20750){
var self__ = this;
var _20750__$1 = this;
return self__.meta20749;
});

cljs.core.async.t20748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20750,meta20749__$1){
var self__ = this;
var _20750__$1 = this;
return (new cljs.core.async.t20748(self__.ch,self__.f,self__.map_GT_,meta20749__$1));
});

cljs.core.async.t20748.cljs$lang$type = true;

cljs.core.async.t20748.cljs$lang$ctorStr = "cljs.core.async/t20748";

cljs.core.async.t20748.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t20748");
});

cljs.core.async.__GT_t20748 = (function __GT_t20748(ch__$1,f__$1,map_GT___$1,meta20749){
return (new cljs.core.async.t20748(ch__$1,f__$1,map_GT___$1,meta20749));
});

}

return (new cljs.core.async.t20748(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20754 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20754 = (function (ch,p,filter_GT_,meta20755){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20755 = meta20755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20756){
var self__ = this;
var _20756__$1 = this;
return self__.meta20755;
});

cljs.core.async.t20754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20756,meta20755__$1){
var self__ = this;
var _20756__$1 = this;
return (new cljs.core.async.t20754(self__.ch,self__.p,self__.filter_GT_,meta20755__$1));
});

cljs.core.async.t20754.cljs$lang$type = true;

cljs.core.async.t20754.cljs$lang$ctorStr = "cljs.core.async/t20754";

cljs.core.async.t20754.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"cljs.core.async/t20754");
});

cljs.core.async.__GT_t20754 = (function __GT_t20754(ch__$1,p__$1,filter_GT___$1,meta20755){
return (new cljs.core.async.t20754(ch__$1,p__$1,filter_GT___$1,meta20755));
});

}

return (new cljs.core.async.t20754(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___20839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___20839,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___20839,out){
return (function (state_20818){
var state_val_20819 = (state_20818[(1)]);
if((state_val_20819 === (7))){
var inst_20814 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20820_20840 = state_20818__$1;
(statearr_20820_20840[(2)] = inst_20814);

(statearr_20820_20840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (1))){
var state_20818__$1 = state_20818;
var statearr_20821_20841 = state_20818__$1;
(statearr_20821_20841[(2)] = null);

(statearr_20821_20841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (4))){
var inst_20800 = (state_20818[(7)]);
var inst_20800__$1 = (state_20818[(2)]);
var inst_20801 = (inst_20800__$1 == null);
var state_20818__$1 = (function (){var statearr_20822 = state_20818;
(statearr_20822[(7)] = inst_20800__$1);

return statearr_20822;
})();
if(cljs.core.truth_(inst_20801)){
var statearr_20823_20842 = state_20818__$1;
(statearr_20823_20842[(1)] = (5));

} else {
var statearr_20824_20843 = state_20818__$1;
(statearr_20824_20843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (6))){
var inst_20800 = (state_20818[(7)]);
var inst_20805 = p.call(null,inst_20800);
var state_20818__$1 = state_20818;
if(cljs.core.truth_(inst_20805)){
var statearr_20825_20844 = state_20818__$1;
(statearr_20825_20844[(1)] = (8));

} else {
var statearr_20826_20845 = state_20818__$1;
(statearr_20826_20845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (3))){
var inst_20816 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20818__$1,inst_20816);
} else {
if((state_val_20819 === (2))){
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20818__$1,(4),ch);
} else {
if((state_val_20819 === (11))){
var inst_20808 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20827_20846 = state_20818__$1;
(statearr_20827_20846[(2)] = inst_20808);

(statearr_20827_20846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (9))){
var state_20818__$1 = state_20818;
var statearr_20828_20847 = state_20818__$1;
(statearr_20828_20847[(2)] = null);

(statearr_20828_20847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (5))){
var inst_20803 = cljs.core.async.close_BANG_.call(null,out);
var state_20818__$1 = state_20818;
var statearr_20829_20848 = state_20818__$1;
(statearr_20829_20848[(2)] = inst_20803);

(statearr_20829_20848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (10))){
var inst_20811 = (state_20818[(2)]);
var state_20818__$1 = (function (){var statearr_20830 = state_20818;
(statearr_20830[(8)] = inst_20811);

return statearr_20830;
})();
var statearr_20831_20849 = state_20818__$1;
(statearr_20831_20849[(2)] = null);

(statearr_20831_20849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (8))){
var inst_20800 = (state_20818[(7)]);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20818__$1,(11),out,inst_20800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___20839,out))
;
return ((function (switch__7116__auto__,c__7172__auto___20839,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_20835 = [null,null,null,null,null,null,null,null,null];
(statearr_20835[(0)] = state_machine__7117__auto__);

(statearr_20835[(1)] = (1));

return statearr_20835;
});
var state_machine__7117__auto____1 = (function (state_20818){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_20818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e20836){if((e20836 instanceof Object)){
var ex__7120__auto__ = e20836;
var statearr_20837_20850 = state_20818;
(statearr_20837_20850[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20851 = state_20818;
state_20818 = G__20851;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___20839,out))
})();
var state__7174__auto__ = (function (){var statearr_20838 = f__7173__auto__.call(null);
(statearr_20838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___20839);

return statearr_20838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___20839,out))
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
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7172__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto__){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto__){
return (function (state_21017){
var state_val_21018 = (state_21017[(1)]);
if((state_val_21018 === (7))){
var inst_21013 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
var statearr_21019_21060 = state_21017__$1;
(statearr_21019_21060[(2)] = inst_21013);

(statearr_21019_21060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (20))){
var inst_20983 = (state_21017[(7)]);
var inst_20994 = (state_21017[(2)]);
var inst_20995 = cljs.core.next.call(null,inst_20983);
var inst_20969 = inst_20995;
var inst_20970 = null;
var inst_20971 = (0);
var inst_20972 = (0);
var state_21017__$1 = (function (){var statearr_21020 = state_21017;
(statearr_21020[(8)] = inst_20994);

(statearr_21020[(9)] = inst_20971);

(statearr_21020[(10)] = inst_20972);

(statearr_21020[(11)] = inst_20969);

(statearr_21020[(12)] = inst_20970);

return statearr_21020;
})();
var statearr_21021_21061 = state_21017__$1;
(statearr_21021_21061[(2)] = null);

(statearr_21021_21061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (1))){
var state_21017__$1 = state_21017;
var statearr_21022_21062 = state_21017__$1;
(statearr_21022_21062[(2)] = null);

(statearr_21022_21062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (4))){
var inst_20958 = (state_21017[(13)]);
var inst_20958__$1 = (state_21017[(2)]);
var inst_20959 = (inst_20958__$1 == null);
var state_21017__$1 = (function (){var statearr_21023 = state_21017;
(statearr_21023[(13)] = inst_20958__$1);

return statearr_21023;
})();
if(cljs.core.truth_(inst_20959)){
var statearr_21024_21063 = state_21017__$1;
(statearr_21024_21063[(1)] = (5));

} else {
var statearr_21025_21064 = state_21017__$1;
(statearr_21025_21064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (15))){
var state_21017__$1 = state_21017;
var statearr_21029_21065 = state_21017__$1;
(statearr_21029_21065[(2)] = null);

(statearr_21029_21065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (21))){
var state_21017__$1 = state_21017;
var statearr_21030_21066 = state_21017__$1;
(statearr_21030_21066[(2)] = null);

(statearr_21030_21066[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (13))){
var inst_20971 = (state_21017[(9)]);
var inst_20972 = (state_21017[(10)]);
var inst_20969 = (state_21017[(11)]);
var inst_20970 = (state_21017[(12)]);
var inst_20979 = (state_21017[(2)]);
var inst_20980 = (inst_20972 + (1));
var tmp21026 = inst_20971;
var tmp21027 = inst_20969;
var tmp21028 = inst_20970;
var inst_20969__$1 = tmp21027;
var inst_20970__$1 = tmp21028;
var inst_20971__$1 = tmp21026;
var inst_20972__$1 = inst_20980;
var state_21017__$1 = (function (){var statearr_21031 = state_21017;
(statearr_21031[(14)] = inst_20979);

(statearr_21031[(9)] = inst_20971__$1);

(statearr_21031[(10)] = inst_20972__$1);

(statearr_21031[(11)] = inst_20969__$1);

(statearr_21031[(12)] = inst_20970__$1);

return statearr_21031;
})();
var statearr_21032_21067 = state_21017__$1;
(statearr_21032_21067[(2)] = null);

(statearr_21032_21067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (22))){
var state_21017__$1 = state_21017;
var statearr_21033_21068 = state_21017__$1;
(statearr_21033_21068[(2)] = null);

(statearr_21033_21068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (6))){
var inst_20958 = (state_21017[(13)]);
var inst_20967 = f.call(null,inst_20958);
var inst_20968 = cljs.core.seq.call(null,inst_20967);
var inst_20969 = inst_20968;
var inst_20970 = null;
var inst_20971 = (0);
var inst_20972 = (0);
var state_21017__$1 = (function (){var statearr_21034 = state_21017;
(statearr_21034[(9)] = inst_20971);

(statearr_21034[(10)] = inst_20972);

(statearr_21034[(11)] = inst_20969);

(statearr_21034[(12)] = inst_20970);

return statearr_21034;
})();
var statearr_21035_21069 = state_21017__$1;
(statearr_21035_21069[(2)] = null);

(statearr_21035_21069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (17))){
var inst_20983 = (state_21017[(7)]);
var inst_20987 = cljs.core.chunk_first.call(null,inst_20983);
var inst_20988 = cljs.core.chunk_rest.call(null,inst_20983);
var inst_20989 = cljs.core.count.call(null,inst_20987);
var inst_20969 = inst_20988;
var inst_20970 = inst_20987;
var inst_20971 = inst_20989;
var inst_20972 = (0);
var state_21017__$1 = (function (){var statearr_21036 = state_21017;
(statearr_21036[(9)] = inst_20971);

(statearr_21036[(10)] = inst_20972);

(statearr_21036[(11)] = inst_20969);

(statearr_21036[(12)] = inst_20970);

return statearr_21036;
})();
var statearr_21037_21070 = state_21017__$1;
(statearr_21037_21070[(2)] = null);

(statearr_21037_21070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (3))){
var inst_21015 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21017__$1,inst_21015);
} else {
if((state_val_21018 === (12))){
var inst_21003 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
var statearr_21038_21071 = state_21017__$1;
(statearr_21038_21071[(2)] = inst_21003);

(statearr_21038_21071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (2))){
var state_21017__$1 = state_21017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21017__$1,(4),in$);
} else {
if((state_val_21018 === (23))){
var inst_21011 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
var statearr_21039_21072 = state_21017__$1;
(statearr_21039_21072[(2)] = inst_21011);

(statearr_21039_21072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (19))){
var inst_20998 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
var statearr_21040_21073 = state_21017__$1;
(statearr_21040_21073[(2)] = inst_20998);

(statearr_21040_21073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (11))){
var inst_20969 = (state_21017[(11)]);
var inst_20983 = (state_21017[(7)]);
var inst_20983__$1 = cljs.core.seq.call(null,inst_20969);
var state_21017__$1 = (function (){var statearr_21041 = state_21017;
(statearr_21041[(7)] = inst_20983__$1);

return statearr_21041;
})();
if(inst_20983__$1){
var statearr_21042_21074 = state_21017__$1;
(statearr_21042_21074[(1)] = (14));

} else {
var statearr_21043_21075 = state_21017__$1;
(statearr_21043_21075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (9))){
var inst_21005 = (state_21017[(2)]);
var inst_21006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21017__$1 = (function (){var statearr_21044 = state_21017;
(statearr_21044[(15)] = inst_21005);

return statearr_21044;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21045_21076 = state_21017__$1;
(statearr_21045_21076[(1)] = (21));

} else {
var statearr_21046_21077 = state_21017__$1;
(statearr_21046_21077[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (5))){
var inst_20961 = cljs.core.async.close_BANG_.call(null,out);
var state_21017__$1 = state_21017;
var statearr_21047_21078 = state_21017__$1;
(statearr_21047_21078[(2)] = inst_20961);

(statearr_21047_21078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (14))){
var inst_20983 = (state_21017[(7)]);
var inst_20985 = cljs.core.chunked_seq_QMARK_.call(null,inst_20983);
var state_21017__$1 = state_21017;
if(inst_20985){
var statearr_21048_21079 = state_21017__$1;
(statearr_21048_21079[(1)] = (17));

} else {
var statearr_21049_21080 = state_21017__$1;
(statearr_21049_21080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (16))){
var inst_21001 = (state_21017[(2)]);
var state_21017__$1 = state_21017;
var statearr_21050_21081 = state_21017__$1;
(statearr_21050_21081[(2)] = inst_21001);

(statearr_21050_21081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21018 === (10))){
var inst_20972 = (state_21017[(10)]);
var inst_20970 = (state_21017[(12)]);
var inst_20977 = cljs.core._nth.call(null,inst_20970,inst_20972);
var state_21017__$1 = state_21017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21017__$1,(13),out,inst_20977);
} else {
if((state_val_21018 === (18))){
var inst_20983 = (state_21017[(7)]);
var inst_20992 = cljs.core.first.call(null,inst_20983);
var state_21017__$1 = state_21017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21017__$1,(20),out,inst_20992);
} else {
if((state_val_21018 === (8))){
var inst_20971 = (state_21017[(9)]);
var inst_20972 = (state_21017[(10)]);
var inst_20974 = (inst_20972 < inst_20971);
var inst_20975 = inst_20974;
var state_21017__$1 = state_21017;
if(cljs.core.truth_(inst_20975)){
var statearr_21051_21082 = state_21017__$1;
(statearr_21051_21082[(1)] = (10));

} else {
var statearr_21052_21083 = state_21017__$1;
(statearr_21052_21083[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto__))
;
return ((function (switch__7116__auto__,c__7172__auto__){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_21056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21056[(0)] = state_machine__7117__auto__);

(statearr_21056[(1)] = (1));

return statearr_21056;
});
var state_machine__7117__auto____1 = (function (state_21017){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_21017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e21057){if((e21057 instanceof Object)){
var ex__7120__auto__ = e21057;
var statearr_21058_21084 = state_21017;
(statearr_21058_21084[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21085 = state_21017;
state_21017 = G__21085;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_21017){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_21017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto__))
})();
var state__7174__auto__ = (function (){var statearr_21059 = f__7173__auto__.call(null);
(statearr_21059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto__);

return statearr_21059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto__))
);

return c__7172__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___21182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___21182,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___21182,out){
return (function (state_21157){
var state_val_21158 = (state_21157[(1)]);
if((state_val_21158 === (7))){
var inst_21152 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21159_21183 = state_21157__$1;
(statearr_21159_21183[(2)] = inst_21152);

(statearr_21159_21183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (1))){
var inst_21134 = null;
var state_21157__$1 = (function (){var statearr_21160 = state_21157;
(statearr_21160[(7)] = inst_21134);

return statearr_21160;
})();
var statearr_21161_21184 = state_21157__$1;
(statearr_21161_21184[(2)] = null);

(statearr_21161_21184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (4))){
var inst_21137 = (state_21157[(8)]);
var inst_21137__$1 = (state_21157[(2)]);
var inst_21138 = (inst_21137__$1 == null);
var inst_21139 = cljs.core.not.call(null,inst_21138);
var state_21157__$1 = (function (){var statearr_21162 = state_21157;
(statearr_21162[(8)] = inst_21137__$1);

return statearr_21162;
})();
if(inst_21139){
var statearr_21163_21185 = state_21157__$1;
(statearr_21163_21185[(1)] = (5));

} else {
var statearr_21164_21186 = state_21157__$1;
(statearr_21164_21186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (6))){
var state_21157__$1 = state_21157;
var statearr_21165_21187 = state_21157__$1;
(statearr_21165_21187[(2)] = null);

(statearr_21165_21187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (3))){
var inst_21154 = (state_21157[(2)]);
var inst_21155 = cljs.core.async.close_BANG_.call(null,out);
var state_21157__$1 = (function (){var statearr_21166 = state_21157;
(statearr_21166[(9)] = inst_21154);

return statearr_21166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21157__$1,inst_21155);
} else {
if((state_val_21158 === (2))){
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(4),ch);
} else {
if((state_val_21158 === (11))){
var inst_21137 = (state_21157[(8)]);
var inst_21146 = (state_21157[(2)]);
var inst_21134 = inst_21137;
var state_21157__$1 = (function (){var statearr_21167 = state_21157;
(statearr_21167[(10)] = inst_21146);

(statearr_21167[(7)] = inst_21134);

return statearr_21167;
})();
var statearr_21168_21188 = state_21157__$1;
(statearr_21168_21188[(2)] = null);

(statearr_21168_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (9))){
var inst_21137 = (state_21157[(8)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21157__$1,(11),out,inst_21137);
} else {
if((state_val_21158 === (5))){
var inst_21134 = (state_21157[(7)]);
var inst_21137 = (state_21157[(8)]);
var inst_21141 = cljs.core._EQ_.call(null,inst_21137,inst_21134);
var state_21157__$1 = state_21157;
if(inst_21141){
var statearr_21170_21189 = state_21157__$1;
(statearr_21170_21189[(1)] = (8));

} else {
var statearr_21171_21190 = state_21157__$1;
(statearr_21171_21190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (10))){
var inst_21149 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21172_21191 = state_21157__$1;
(statearr_21172_21191[(2)] = inst_21149);

(statearr_21172_21191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (8))){
var inst_21134 = (state_21157[(7)]);
var tmp21169 = inst_21134;
var inst_21134__$1 = tmp21169;
var state_21157__$1 = (function (){var statearr_21173 = state_21157;
(statearr_21173[(7)] = inst_21134__$1);

return statearr_21173;
})();
var statearr_21174_21192 = state_21157__$1;
(statearr_21174_21192[(2)] = null);

(statearr_21174_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___21182,out))
;
return ((function (switch__7116__auto__,c__7172__auto___21182,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_21178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21178[(0)] = state_machine__7117__auto__);

(statearr_21178[(1)] = (1));

return statearr_21178;
});
var state_machine__7117__auto____1 = (function (state_21157){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_21157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e21179){if((e21179 instanceof Object)){
var ex__7120__auto__ = e21179;
var statearr_21180_21193 = state_21157;
(statearr_21180_21193[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21194 = state_21157;
state_21157 = G__21194;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_21157){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_21157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___21182,out))
})();
var state__7174__auto__ = (function (){var statearr_21181 = f__7173__auto__.call(null);
(statearr_21181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___21182);

return statearr_21181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___21182,out))
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
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___21329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___21329,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___21329,out){
return (function (state_21299){
var state_val_21300 = (state_21299[(1)]);
if((state_val_21300 === (7))){
var inst_21295 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21301_21330 = state_21299__$1;
(statearr_21301_21330[(2)] = inst_21295);

(statearr_21301_21330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (1))){
var inst_21262 = (new Array(n));
var inst_21263 = inst_21262;
var inst_21264 = (0);
var state_21299__$1 = (function (){var statearr_21302 = state_21299;
(statearr_21302[(7)] = inst_21263);

(statearr_21302[(8)] = inst_21264);

return statearr_21302;
})();
var statearr_21303_21331 = state_21299__$1;
(statearr_21303_21331[(2)] = null);

(statearr_21303_21331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (4))){
var inst_21267 = (state_21299[(9)]);
var inst_21267__$1 = (state_21299[(2)]);
var inst_21268 = (inst_21267__$1 == null);
var inst_21269 = cljs.core.not.call(null,inst_21268);
var state_21299__$1 = (function (){var statearr_21304 = state_21299;
(statearr_21304[(9)] = inst_21267__$1);

return statearr_21304;
})();
if(inst_21269){
var statearr_21305_21332 = state_21299__$1;
(statearr_21305_21332[(1)] = (5));

} else {
var statearr_21306_21333 = state_21299__$1;
(statearr_21306_21333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (15))){
var inst_21289 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21307_21334 = state_21299__$1;
(statearr_21307_21334[(2)] = inst_21289);

(statearr_21307_21334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (13))){
var state_21299__$1 = state_21299;
var statearr_21308_21335 = state_21299__$1;
(statearr_21308_21335[(2)] = null);

(statearr_21308_21335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (6))){
var inst_21264 = (state_21299[(8)]);
var inst_21285 = (inst_21264 > (0));
var state_21299__$1 = state_21299;
if(cljs.core.truth_(inst_21285)){
var statearr_21309_21336 = state_21299__$1;
(statearr_21309_21336[(1)] = (12));

} else {
var statearr_21310_21337 = state_21299__$1;
(statearr_21310_21337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (3))){
var inst_21297 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21299__$1,inst_21297);
} else {
if((state_val_21300 === (12))){
var inst_21263 = (state_21299[(7)]);
var inst_21287 = cljs.core.vec.call(null,inst_21263);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21299__$1,(15),out,inst_21287);
} else {
if((state_val_21300 === (2))){
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21299__$1,(4),ch);
} else {
if((state_val_21300 === (11))){
var inst_21279 = (state_21299[(2)]);
var inst_21280 = (new Array(n));
var inst_21263 = inst_21280;
var inst_21264 = (0);
var state_21299__$1 = (function (){var statearr_21311 = state_21299;
(statearr_21311[(10)] = inst_21279);

(statearr_21311[(7)] = inst_21263);

(statearr_21311[(8)] = inst_21264);

return statearr_21311;
})();
var statearr_21312_21338 = state_21299__$1;
(statearr_21312_21338[(2)] = null);

(statearr_21312_21338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (9))){
var inst_21263 = (state_21299[(7)]);
var inst_21277 = cljs.core.vec.call(null,inst_21263);
var state_21299__$1 = state_21299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21299__$1,(11),out,inst_21277);
} else {
if((state_val_21300 === (5))){
var inst_21267 = (state_21299[(9)]);
var inst_21272 = (state_21299[(11)]);
var inst_21263 = (state_21299[(7)]);
var inst_21264 = (state_21299[(8)]);
var inst_21271 = (inst_21263[inst_21264] = inst_21267);
var inst_21272__$1 = (inst_21264 + (1));
var inst_21273 = (inst_21272__$1 < n);
var state_21299__$1 = (function (){var statearr_21313 = state_21299;
(statearr_21313[(11)] = inst_21272__$1);

(statearr_21313[(12)] = inst_21271);

return statearr_21313;
})();
if(cljs.core.truth_(inst_21273)){
var statearr_21314_21339 = state_21299__$1;
(statearr_21314_21339[(1)] = (8));

} else {
var statearr_21315_21340 = state_21299__$1;
(statearr_21315_21340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (14))){
var inst_21292 = (state_21299[(2)]);
var inst_21293 = cljs.core.async.close_BANG_.call(null,out);
var state_21299__$1 = (function (){var statearr_21317 = state_21299;
(statearr_21317[(13)] = inst_21292);

return statearr_21317;
})();
var statearr_21318_21341 = state_21299__$1;
(statearr_21318_21341[(2)] = inst_21293);

(statearr_21318_21341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (10))){
var inst_21283 = (state_21299[(2)]);
var state_21299__$1 = state_21299;
var statearr_21319_21342 = state_21299__$1;
(statearr_21319_21342[(2)] = inst_21283);

(statearr_21319_21342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21300 === (8))){
var inst_21272 = (state_21299[(11)]);
var inst_21263 = (state_21299[(7)]);
var tmp21316 = inst_21263;
var inst_21263__$1 = tmp21316;
var inst_21264 = inst_21272;
var state_21299__$1 = (function (){var statearr_21320 = state_21299;
(statearr_21320[(7)] = inst_21263__$1);

(statearr_21320[(8)] = inst_21264);

return statearr_21320;
})();
var statearr_21321_21343 = state_21299__$1;
(statearr_21321_21343[(2)] = null);

(statearr_21321_21343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___21329,out))
;
return ((function (switch__7116__auto__,c__7172__auto___21329,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_21325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21325[(0)] = state_machine__7117__auto__);

(statearr_21325[(1)] = (1));

return statearr_21325;
});
var state_machine__7117__auto____1 = (function (state_21299){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_21299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e21326){if((e21326 instanceof Object)){
var ex__7120__auto__ = e21326;
var statearr_21327_21344 = state_21299;
(statearr_21327_21344[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21345 = state_21299;
state_21299 = G__21345;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_21299){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_21299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___21329,out))
})();
var state__7174__auto__ = (function (){var statearr_21328 = f__7173__auto__.call(null);
(statearr_21328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___21329);

return statearr_21328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___21329,out))
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
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7172__auto___21488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___21488,out){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___21488,out){
return (function (state_21458){
var state_val_21459 = (state_21458[(1)]);
if((state_val_21459 === (7))){
var inst_21454 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21460_21489 = state_21458__$1;
(statearr_21460_21489[(2)] = inst_21454);

(statearr_21460_21489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (1))){
var inst_21417 = [];
var inst_21418 = inst_21417;
var inst_21419 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21458__$1 = (function (){var statearr_21461 = state_21458;
(statearr_21461[(7)] = inst_21418);

(statearr_21461[(8)] = inst_21419);

return statearr_21461;
})();
var statearr_21462_21490 = state_21458__$1;
(statearr_21462_21490[(2)] = null);

(statearr_21462_21490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (4))){
var inst_21422 = (state_21458[(9)]);
var inst_21422__$1 = (state_21458[(2)]);
var inst_21423 = (inst_21422__$1 == null);
var inst_21424 = cljs.core.not.call(null,inst_21423);
var state_21458__$1 = (function (){var statearr_21463 = state_21458;
(statearr_21463[(9)] = inst_21422__$1);

return statearr_21463;
})();
if(inst_21424){
var statearr_21464_21491 = state_21458__$1;
(statearr_21464_21491[(1)] = (5));

} else {
var statearr_21465_21492 = state_21458__$1;
(statearr_21465_21492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (15))){
var inst_21448 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21466_21493 = state_21458__$1;
(statearr_21466_21493[(2)] = inst_21448);

(statearr_21466_21493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (13))){
var state_21458__$1 = state_21458;
var statearr_21467_21494 = state_21458__$1;
(statearr_21467_21494[(2)] = null);

(statearr_21467_21494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (6))){
var inst_21418 = (state_21458[(7)]);
var inst_21443 = inst_21418.length;
var inst_21444 = (inst_21443 > (0));
var state_21458__$1 = state_21458;
if(cljs.core.truth_(inst_21444)){
var statearr_21468_21495 = state_21458__$1;
(statearr_21468_21495[(1)] = (12));

} else {
var statearr_21469_21496 = state_21458__$1;
(statearr_21469_21496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (3))){
var inst_21456 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21458__$1,inst_21456);
} else {
if((state_val_21459 === (12))){
var inst_21418 = (state_21458[(7)]);
var inst_21446 = cljs.core.vec.call(null,inst_21418);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21458__$1,(15),out,inst_21446);
} else {
if((state_val_21459 === (2))){
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21458__$1,(4),ch);
} else {
if((state_val_21459 === (11))){
var inst_21422 = (state_21458[(9)]);
var inst_21426 = (state_21458[(10)]);
var inst_21436 = (state_21458[(2)]);
var inst_21437 = [];
var inst_21438 = inst_21437.push(inst_21422);
var inst_21418 = inst_21437;
var inst_21419 = inst_21426;
var state_21458__$1 = (function (){var statearr_21470 = state_21458;
(statearr_21470[(7)] = inst_21418);

(statearr_21470[(11)] = inst_21436);

(statearr_21470[(12)] = inst_21438);

(statearr_21470[(8)] = inst_21419);

return statearr_21470;
})();
var statearr_21471_21497 = state_21458__$1;
(statearr_21471_21497[(2)] = null);

(statearr_21471_21497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (9))){
var inst_21418 = (state_21458[(7)]);
var inst_21434 = cljs.core.vec.call(null,inst_21418);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21458__$1,(11),out,inst_21434);
} else {
if((state_val_21459 === (5))){
var inst_21422 = (state_21458[(9)]);
var inst_21426 = (state_21458[(10)]);
var inst_21419 = (state_21458[(8)]);
var inst_21426__$1 = f.call(null,inst_21422);
var inst_21427 = cljs.core._EQ_.call(null,inst_21426__$1,inst_21419);
var inst_21428 = cljs.core.keyword_identical_QMARK_.call(null,inst_21419,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21429 = (inst_21427) || (inst_21428);
var state_21458__$1 = (function (){var statearr_21472 = state_21458;
(statearr_21472[(10)] = inst_21426__$1);

return statearr_21472;
})();
if(cljs.core.truth_(inst_21429)){
var statearr_21473_21498 = state_21458__$1;
(statearr_21473_21498[(1)] = (8));

} else {
var statearr_21474_21499 = state_21458__$1;
(statearr_21474_21499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (14))){
var inst_21451 = (state_21458[(2)]);
var inst_21452 = cljs.core.async.close_BANG_.call(null,out);
var state_21458__$1 = (function (){var statearr_21476 = state_21458;
(statearr_21476[(13)] = inst_21451);

return statearr_21476;
})();
var statearr_21477_21500 = state_21458__$1;
(statearr_21477_21500[(2)] = inst_21452);

(statearr_21477_21500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (10))){
var inst_21441 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21478_21501 = state_21458__$1;
(statearr_21478_21501[(2)] = inst_21441);

(statearr_21478_21501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (8))){
var inst_21418 = (state_21458[(7)]);
var inst_21422 = (state_21458[(9)]);
var inst_21426 = (state_21458[(10)]);
var inst_21431 = inst_21418.push(inst_21422);
var tmp21475 = inst_21418;
var inst_21418__$1 = tmp21475;
var inst_21419 = inst_21426;
var state_21458__$1 = (function (){var statearr_21479 = state_21458;
(statearr_21479[(14)] = inst_21431);

(statearr_21479[(7)] = inst_21418__$1);

(statearr_21479[(8)] = inst_21419);

return statearr_21479;
})();
var statearr_21480_21502 = state_21458__$1;
(statearr_21480_21502[(2)] = null);

(statearr_21480_21502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7172__auto___21488,out))
;
return ((function (switch__7116__auto__,c__7172__auto___21488,out){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_21484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21484[(0)] = state_machine__7117__auto__);

(statearr_21484[(1)] = (1));

return statearr_21484;
});
var state_machine__7117__auto____1 = (function (state_21458){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_21458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e21485){if((e21485 instanceof Object)){
var ex__7120__auto__ = e21485;
var statearr_21486_21503 = state_21458;
(statearr_21486_21503[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21504 = state_21458;
state_21458 = G__21504;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_21458){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_21458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___21488,out))
})();
var state__7174__auto__ = (function (){var statearr_21487 = f__7173__auto__.call(null);
(statearr_21487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___21488);

return statearr_21487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___21488,out))
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
