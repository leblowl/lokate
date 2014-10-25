// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t27454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t27454 = (function (val,box,meta27455){
this.val = val;
this.box = box;
this.meta27455 = meta27455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t27454.cljs$lang$type = true;
cljs.core.async.impl.channels.t27454.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t27454";
cljs.core.async.impl.channels.t27454.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async.impl.channels/t27454");
});
cljs.core.async.impl.channels.t27454.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t27454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27456){var self__ = this;
var _27456__$1 = this;return self__.meta27455;
});
cljs.core.async.impl.channels.t27454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27456,meta27455__$1){var self__ = this;
var _27456__$1 = this;return (new cljs.core.async.impl.channels.t27454(self__.val,self__.box,meta27455__$1));
});
cljs.core.async.impl.channels.__GT_t27454 = (function __GT_t27454(val__$1,box__$1,meta27455){return (new cljs.core.async.impl.channels.t27454(val__$1,box__$1,meta27455));
});
}
return (new cljs.core.async.impl.channels.t27454(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){return cljs.core._write(writer__4221__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);
cljs.core.async.impl.channels.MMC = (function (){var obj27458 = {};return obj27458;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__27462 = x__4277__auto__;return goog.typeOf(G__27462);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__3628__auto__ = self__.buf;if(cljs.core.truth_(and__3628__auto__))
{return (self__.puts.length === (0));
} else
{return and__3628__auto__;
}
})()))
{var G__27463_27475 = self__.buf;(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27463_27475) : self__.add_BANG_.call(null,G__27463_27475));
} else
{}
while(true){
var taker_27476 = self__.takes.pop();if((taker_27476 == null))
{} else
{if(taker_27476.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var take_cb_27477 = taker_27476.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);var val_27478 = (cljs.core.truth_((function (){var and__3628__auto__ = self__.buf;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.count(self__.buf) > (0));
} else
{return and__3628__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);cljs.core.async.impl.dispatch.run(((function (take_cb_27477,val_27478,taker_27476,this$__$1){
return (function (){var G__27464 = val_27478;return (take_cb_27477.cljs$core$IFn$_invoke$arity$1 ? take_cb_27477.cljs$core$IFn$_invoke$arity$1(G__27464) : take_cb_27477.call(null,G__27464));
});})(take_cb_27477,val_27478,taker_27476,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0))))
{var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null)))
{} else
{var putter_27479 = self__.puts.pop();if((putter_27479 == null))
{} else
{var put_handler_27480 = putter_27479.handler;var val_27481 = putter_27479.val;if(put_handler_27480.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var put_cb_27482 = put_handler_27480.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_27482,put_handler_27480,val_27481,putter_27479,_,retval,this$__$1){
return (function (){var G__27465 = true;return (put_cb_27482.cljs$core$IFn$_invoke$arity$1 ? put_cb_27482.cljs$core$IFn$_invoke$arity$1(G__27465) : put_cb_27482.call(null,G__27465));
});})(put_cb_27482,put_handler_27480,val_27481,putter_27479,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_((function (){var G__27466 = self__.buf;var G__27467 = val_27481;return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27466,G__27467) : self__.add_BANG_.call(null,G__27466,G__27467));
})()))
{cljs.core.async.impl.channels.abort(this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){var G__27468 = true;return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__27468) : put_cb.call(null,G__27468));
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box(putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{var G__27469_27483 = self__.buf;(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27469_27483) : self__.add_BANG_.call(null,G__27469_27483));
} else
{}
if(cljs.core.truth_((function (){var and__3628__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3628__auto__))
{return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3628__auto__;
}
})()))
{var has_val = (function (){var and__3628__auto__ = self__.buf;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.count(self__.buf) > (0));
} else
{return and__3628__auto__;
}
})();var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);return cljs.core.async.impl.channels.box(val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = (0);
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + (1));
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending takes are allowed on a single channel."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0))))));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error(("Assert failed: Can't put nil in on a channel\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0))))));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))))
{return cljs.core.async.impl.channels.box(!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = self__.buf;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else
{return and__3628__auto__;
}
})()))
{handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__27470 = self__.buf;var G__27471 = val;return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27470,G__27471) : self__.add_BANG_.call(null,G__27470,G__27471));
})());while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))
{var taker_27484 = self__.takes.pop();if(taker_27484.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var take_cb_27485 = taker_27484.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);var val_27486__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);cljs.core.async.impl.dispatch.run(((function (take_cb_27485,val_27486__$1,taker_27484,done_QMARK_,closed__$1,this$__$1){
return (function (){var G__27472 = val_27486__$1;return (take_cb_27485.cljs$core$IFn$_invoke$arity$1 ? take_cb_27485.cljs$core$IFn$_invoke$arity$1(G__27472) : take_cb_27485.call(null,G__27472));
});})(take_cb_27485,val_27486__$1,taker_27484,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort(this$__$1);
} else
{}
return cljs.core.async.impl.channels.box(true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit(taker);handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){var G__27473 = val;return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__27473) : take_cb.call(null,G__27473));
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box(true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = (0);
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + (1));
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("No more than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)+" pending puts are allowed on a single channel. Consider using a windowed buffer."))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0))))));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_27487 = self__.puts.pop();if((putter_27487 == null))
{} else
{var put_handler_27488 = putter_27487.handler;var val_27489 = putter_27487.val;if(put_handler_27488.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))
{var put_cb_27490 = put_handler_27488.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);cljs.core.async.impl.dispatch.run(((function (put_cb_27490,put_handler_27488,val_27489,putter_27487,this$__$1){
return (function (){var G__27474 = true;return (put_cb_27490.cljs$core$IFn$_invoke$arity$1 ? put_cb_27490.cljs$core$IFn$_invoke$arity$1(G__27474) : put_cb_27490.call(null,G__27474));
});})(put_cb_27490,put_handler_27488,val_27489,putter_27487,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly(false));
return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__3640__auto__ = exh;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__27502 = cljs.core.async.impl.protocols.add_BANG_;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27502) : xform.call(null,G__27502));
})():cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__27508 = null;
var G__27508__1 = (function (buf__$1){try{var G__27504 = buf__$1;return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27504) : add_BANG_.call(null,G__27504));
}catch (e27503){var t = e27503;return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__27508__2 = (function (buf__$1,val){try{var G__27506 = buf__$1;var G__27507 = val;return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27506,G__27507) : add_BANG_.call(null,G__27506,G__27507));
}catch (e27505){var t = e27505;return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__27508 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__27508__1.call(this,buf__$1);
case 2:
return G__27508__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27508.cljs$core$IFn$_invoke$arity$1 = G__27508__1;
G__27508.cljs$core$IFn$_invoke$arity$2 = G__27508__2;
return G__27508;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
