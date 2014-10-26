// Compiled by ClojureScript 0.0-2371
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj22039 = {};return obj22039;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.display_name[(function (){var G__22043 = x__4277__auto__;return goog.typeOf(G__22043);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.display_name["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj22045 = {};return obj22045;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.init_state[(function (){var G__22049 = x__4277__auto__;return goog.typeOf(G__22049);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.init_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj22051 = {};return obj22051;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.should_update[(function (){var G__22055 = x__4277__auto__;return goog.typeOf(G__22055);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.should_update["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj22057 = {};return obj22057;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_mount[(function (){var G__22061 = x__4277__auto__;return goog.typeOf(G__22061);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.will_mount["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj22063 = {};return obj22063;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_mount[(function (){var G__22067 = x__4277__auto__;return goog.typeOf(G__22067);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.did_mount["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj22069 = {};return obj22069;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_unmount[(function (){var G__22073 = x__4277__auto__;return goog.typeOf(G__22073);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.will_unmount["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj22075 = {};return obj22075;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_update[(function (){var G__22079 = x__4277__auto__;return goog.typeOf(G__22079);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.will_update["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj22081 = {};return obj22081;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_update[(function (){var G__22085 = x__4277__auto__;return goog.typeOf(G__22085);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.did_update["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj22087 = {};return obj22087;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_receive_props[(function (){var G__22091 = x__4277__auto__;return goog.typeOf(G__22091);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.will_receive_props["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj22093 = {};return obj22093;
})();
om.core.render = (function render(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render[(function (){var G__22097 = x__4277__auto__;return goog.typeOf(G__22097);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.render["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj22099 = {};return obj22099;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_props[(function (){var G__22103 = x__4277__auto__;return goog.typeOf(G__22103);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.render_props["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj22105 = {};return obj22105;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_state[(function (){var G__22109 = x__4277__auto__;return goog.typeOf(G__22109);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core.render_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj22111 = {};return obj22111;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._om_swap_BANG_[(function (){var G__22115 = x__4277__auto__;return goog.typeOf(G__22115);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj22117 = {};return obj22117;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__22123 = x__4277__auto__;return goog.typeOf(G__22123);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__22125 = x__4277__auto__;return goog.typeOf(G__22125);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj22127 = {};return obj22127;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__22133 = x__4277__auto__;return goog.typeOf(G__22133);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_render_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__22135 = x__4277__auto__;return goog.typeOf(G__22135);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_render_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj22137 = {};return obj22137;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__22143 = x__4277__auto__;return goog.typeOf(G__22143);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__22145 = x__4277__auto__;return goog.typeOf(G__22145);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj22147 = {};return obj22147;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_queue[(function (){var G__22151 = x__4277__auto__;return goog.typeOf(G__22151);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_queue["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._queue_render_BANG_[(function (){var G__22155 = x__4277__auto__;return goog.typeOf(G__22155);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._empty_queue_BANG_[(function (){var G__22159 = x__4277__auto__;return goog.typeOf(G__22159);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj22161 = {};return obj22161;
})();
om.core._value = (function _value(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._value[(function (){var G__22165 = x__4277__auto__;return goog.typeOf(G__22165);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._value["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj22167 = {};return obj22167;
})();
om.core._path = (function _path(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._path[(function (){var G__22171 = x__4277__auto__;return goog.typeOf(G__22171);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._path["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._state[(function (){var G__22175 = x__4277__auto__;return goog.typeOf(G__22175);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj22177 = {};return obj22177;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3628__auto__ = value;if(and__3628__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3628__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__22183 = x__4277__auto__;return goog.typeOf(G__22183);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._to_cursor["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3628__auto__ = value;if(and__3628__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3628__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__22185 = x__4277__auto__;return goog.typeOf(G__22185);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._to_cursor["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj22187 = {};return obj22187;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._derive[(function (){var G__22191 = x__4277__auto__;return goog.typeOf(G__22191);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._derive["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){var G__22192 = derived;var G__22193 = state;var G__22194 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22192,G__22193,G__22194) : om.core.to_cursor.call(null,G__22192,G__22193,G__22194));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj22196 = {};return obj22196;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._transact_BANG_[(function (){var G__22200 = x__4277__auto__;return goog.typeOf(G__22200);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj22202 = {};return obj22202;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._listen_BANG_[(function (){var G__22206 = x__4277__auto__;return goog.typeOf(G__22206);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._unlisten_BANG_[(function (){var G__22210 = x__4277__auto__;return goog.typeOf(G__22210);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._notify_BANG_[(function (){var G__22214 = x__4277__auto__;return goog.typeOf(G__22214);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj22216 = {};return obj22216;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_property_BANG_[(function (){var G__22220 = x__4277__auto__;return goog.typeOf(G__22220);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_property_BANG_[(function (){var G__22224 = x__4277__auto__;return goog.typeOf(G__22224);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_properties_BANG_[(function (){var G__22228 = x__4277__auto__;return goog.typeOf(G__22228);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_property[(function (){var G__22232 = x__4277__auto__;return goog.typeOf(G__22232);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_property["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj22234 = {};return obj22234;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._root_key[(function (){var G__22238 = x__4277__auto__;return goog.typeOf(G__22238);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._root_key["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj22240 = {};return obj22240;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._adapt[(function (){var G__22244 = x__4277__auto__;return goog.typeOf(G__22244);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._adapt["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt(x,other);
});
om.core.IOmRef = (function (){var obj22246 = {};return obj22246;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._add_dep_BANG_[(function (){var G__22250 = x__4277__auto__;return goog.typeOf(G__22250);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_dep_BANG_[(function (){var G__22254 = x__4277__auto__;return goog.typeOf(G__22254);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__22258 = x__4277__auto__;return goog.typeOf(G__22258);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_deps[(function (){var G__22262 = x__4277__auto__;return goog.typeOf(G__22262);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (om.core._get_deps["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__22272 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22272) : cljs.core.deref.call(null,G__22272));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__22273 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22273) : om.core.path.call(null,G__22273));
})(),korks);var ret = (((function (){var G__22274 = state;if(G__22274)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22274.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__22274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22274);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$15))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$16,path,cljs.core.constant$keyword$17,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$18,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22275 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22275) : cljs.core.deref.call(null,G__22275));
})(),path),cljs.core.constant$keyword$19,old_state,cljs.core.constant$keyword$20,(function (){var G__22276 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22276) : cljs.core.deref.call(null,G__22276));
})()], null);if(!((tag == null)))
{var G__22277 = cursor;var G__22278 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$21,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22277,G__22278) : om.core.notify_STAR_.call(null,G__22277,G__22278));
} else
{var G__22279 = cursor;var G__22280 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22279,G__22280) : om.core.notify_STAR_.call(null,G__22279,G__22280));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__22282 = x;if(G__22282)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22282.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__22282.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22282);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_22285 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__22286 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__22286) : c.call(null,G__22286));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22285;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__22291 = state;(G__22291["__om_prev_state"] = (state["__om_state"]));
(G__22291["__om_state"] = pending_state);
(G__22291["__om_pending_state"] = null);
return G__22291;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3640__auto__ = props;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3640__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22296 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22296) : cljs.core.deref.call(null,G__22296));
})(),(function (){var G__22297 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22297) : om.core.path.call(null,G__22297));
})(),cljs.core.constant$keyword$22);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__22303 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22303) : om.core.path.call(null,G__22303));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22304 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22304) : cljs.core.deref.call(null,G__22304));
})(),ref_path,cljs.core.constant$keyword$22);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$22))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__22305 = ref_val_SINGLEQUOTE_;var G__22306 = ref_state;var G__22307 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22305,G__22306,G__22307) : om.core.to_cursor.call(null,G__22305,G__22306,G__22307));
})());
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__22309 = c;if(G__22309)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22309.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__22309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22309);
}
})())
{var state_22344 = this$.state;var _STAR_read_enabled_STAR_22310_22345 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = (state_22344["__om_prev_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state_22344["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22310_22345;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__22311 = c;if(G__22311)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22311.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__22311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22311);
}
})())
{var _STAR_read_enabled_STAR_22312_22346 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22312_22346;
}} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__22313 = cljs.core.seq(refs);var chunk__22314 = null;var count__22315 = (0);var i__22316 = (0);while(true){
if((i__22316 < count__22315))
{var ref = chunk__22314.cljs$core$IIndexed$_nth$arity$2(null,i__22316);var G__22317_22347 = this$;var G__22318_22348 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22317_22347,G__22318_22348) : om.core.unobserve.call(null,G__22317_22347,G__22318_22348));
{
var G__22349 = seq__22313;
var G__22350 = chunk__22314;
var G__22351 = count__22315;
var G__22352 = (i__22316 + (1));
seq__22313 = G__22349;
chunk__22314 = G__22350;
count__22315 = G__22351;
i__22316 = G__22352;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__22313);if(temp__4126__auto____$1)
{var seq__22313__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__22313__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22313__$1);{
var G__22353 = cljs.core.chunk_rest(seq__22313__$1);
var G__22354 = c__4410__auto__;
var G__22355 = cljs.core.count(c__4410__auto__);
var G__22356 = (0);
seq__22313 = G__22353;
chunk__22314 = G__22354;
count__22315 = G__22355;
i__22316 = G__22356;
continue;
}
} else
{var ref = cljs.core.first(seq__22313__$1);var G__22319_22357 = this$;var G__22320_22358 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22319_22357,G__22320_22358) : om.core.unobserve.call(null,G__22319_22357,G__22320_22358));
{
var G__22359 = cljs.core.next(seq__22313__$1);
var G__22360 = null;
var G__22361 = (0);
var G__22362 = (0);
seq__22313 = G__22359;
chunk__22314 = G__22360;
count__22315 = G__22361;
i__22316 = G__22362;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__22321 = c;if(G__22321)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22321.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__22321.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22321);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22321);
}
})())
{var _STAR_read_enabled_STAR_22322 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22322;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_22323 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__22324 = c;if(G__22324)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22324.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__22324.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22324);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor))))
{return true;
} else
{if((!(((state["__om_pending_state"]) == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((state["__om_pending_state"]),(state["__om_state"]))))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));if(and__3628__auto__)
{return cljs.core.some(((function (and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_22323,this$){
return (function (p1__22308_SHARP_){return om.core.ref_changed_QMARK_(p1__22308_SHARP_);
});})(and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_22323,this$))
,(state["__om_refs"]));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22323;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_22325 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_22326 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_22327 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_22328 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_22329 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
var _STAR_read_enabled_STAR_22330 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__22331 = c;if(G__22331)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22331.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__22331.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22331);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__22332 = c;if(G__22332)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22332.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__22332.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22332);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__22333 = c;if(G__22333)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22333.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__22333.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22333);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22333);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22330;
}}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22329;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22328;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22327;
om.core._STAR_state_STAR_ = _STAR_state_STAR_22326;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_22325;
}}),(function (next_props,next_state){var this$ = this;var c_22363 = om.core.children(this$);if((function (){var G__22334 = c_22363;if(G__22334)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22334.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__22334.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22334);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22334);
}
})())
{var state_22364 = this$.state;var _STAR_read_enabled_STAR_22335_22365 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_22363,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22335_22365;
}} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3640__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__22336 = c;if(G__22336)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22336.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__22336.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22336);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22336);
}
})())?(function (){var _STAR_read_enabled_STAR_22337 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22337;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$33)], 0)), "__om_id": (function (){var or__3640__auto__ = id;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__22338 = c;if(G__22338)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22338.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__22338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22338);
}
})())
{var _STAR_read_enabled_STAR_22339 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22339;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__22340 = c;if(G__22340)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22340.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__22340.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22340);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22340);
}
})())
{var _STAR_read_enabled_STAR_22341 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22341;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_22366 = om.core.children(this$);if((function (){var G__22342 = c_22366;if(G__22342)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22342.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__22342.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22342);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22342);
}
})())
{var _STAR_read_enabled_STAR_22343_22367 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_22366);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22343_22367;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x22371 = obj;x22371.om$core$IGetState$ = true;
x22371.om$core$IGetState$_get_state$arity$1 = ((function (x22371){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3640__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state["__om_state"]);
}
});})(x22371))
;
x22371.om$core$IGetState$_get_state$arity$2 = ((function (x22371){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22371))
;
x22371.om$core$IGetRenderState$ = true;
x22371.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22371){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x22371))
;
x22371.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22371){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22371))
;
x22371.om$core$ISetState$ = true;
x22371.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22371){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22372 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3628__auto__ = !((app_state == null));if(and__3628__auto__)
{return render;
} else
{return and__3628__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22372;
}});})(x22371))
;
x22371.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22371){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22373 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if(cljs.core.truth_((function (){var and__3628__auto__ = !((app_state == null));if(and__3628__auto__)
{return render;
} else
{return and__3628__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22373;
}});})(x22371))
;
return x22371;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22375 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22375) : cljs.core.deref.call(null,G__22375));
})(),spath);if(cljs.core.truth_(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$36,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$35);
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$29,(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3640__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3640__auto__ = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$33),(((function (){var G__22376 = c;if(G__22376)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22376.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__22376.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22376);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22376);
}
})())?(function (){var _STAR_read_enabled_STAR_22377 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22377;
}})():null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$),cljs.core.constant$keyword$36], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$32,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_22387 = om.core.children(this$);if((function (){var G__22378 = c_22387;if(G__22378)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22378.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__22378.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22378);
}
})())
{var _STAR_read_enabled_STAR_22379_22388 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_22387);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22379_22388;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$24,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null);if((function (){var G__22380 = c;if(G__22380)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22380.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__22380.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22380);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22380);
}
})())
{var _STAR_read_enabled_STAR_22381_22389 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22381_22389;
}} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),cljs.core.constant$keyword$28,(function (next_props,next_state){var this$ = this;var props_22390 = this$.props;var c_22391 = om.core.children(this$);if((function (){var G__22382 = c_22391;if(G__22382)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22382.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__22382.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22382);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22382);
}
})())
{var state_22392 = this$.state;var _STAR_read_enabled_STAR_22383_22393 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_22391,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22383_22393;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$23,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22384 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22384) : cljs.core.deref.call(null,G__22384));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null);if((function (){var G__22385 = c;if(G__22385)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22385.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__22385.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22385);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22385);
}
})())
{var state_22394 = this$.state;var _STAR_read_enabled_STAR_22386_22395 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22386_22395;
}} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$37], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x22401 = cljs.core.clj__GT_js(methods$);x22401.om$core$IGetState$ = true;
x22401.om$core$IGetState$_get_state$arity$1 = ((function (x22401){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22402 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22402) : cljs.core.deref.call(null,G__22402));
})(),spath);var or__3640__auto__ = cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x22401))
;
x22401.om$core$IGetState$_get_state$arity$2 = ((function (x22401){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22401))
;
x22401.om$core$IGetRenderState$ = true;
x22401.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22401){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1),cljs.core.constant$keyword$36], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22403 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22403) : cljs.core.deref.call(null,G__22403));
})(),spath);
});})(x22401))
;
x22401.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22401){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22401))
;
x22401.om$core$ISetState$ = true;
x22401.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22401){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22404 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1),cljs.core.constant$keyword$35], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3628__auto__ = !((app_state == null));if(and__3628__auto__)
{return render;
} else
{return and__3628__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22404;
}});})(x22401))
;
x22401.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22401){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22405 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1),cljs.core.constant$keyword$35], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$__$1),cljs.core.update_in,spath,cljs.core.assoc_in,cljs.core.array_seq([ks,val], 0));
if(cljs.core.truth_((function (){var and__3628__auto__ = !((app_state == null));if(and__3628__auto__)
{return render;
} else
{return and__3628__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22405;
}});})(x22401))
;
return x22401;
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__22407){var vec__22408 = p__22407;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22408,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22408,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__22410 = null;
var G__22410__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22410__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22410 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22410__2.call(this,self__,k);
case 3:
return G__22410__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22410.cljs$core$IFn$_invoke$arity$2 = G__22410__2;
G__22410.cljs$core$IFn$_invoke$arity$3 = G__22410__3;
return G__22410;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args22406){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22406)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22409 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22409) : cljs.core.deref.call(null,G__22409));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__22413 = null;
var G__22413__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22413__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22413 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22413__2.call(this,self__,k);
case 3:
return G__22413__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22413.cljs$core$IFn$_invoke$arity$2 = G__22413__2;
G__22413.cljs$core$IFn$_invoke$arity$3 = G__22413__3;
return G__22413;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args22411){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22411)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22412 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22412) : cljs.core.deref.call(null,G__22412));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x22416 = cljs.core.clone(val);x22416.cljs$core$IEquiv$ = true;
x22416.cljs$core$IEquiv$_equiv$arity$2 = ((function (x22416){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x22416))
;
x22416.om$core$ITransact$ = true;
x22416.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22416){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x22416))
;
x22416.om$core$ICursor$ = true;
x22416.om$core$ICursor$_path$arity$1 = ((function (x22416){
return (function (_){var ___$1 = this;return path;
});})(x22416))
;
x22416.om$core$ICursor$_state$arity$1 = ((function (x22416){
return (function (_){var ___$1 = this;return state;
});})(x22416))
;
x22416.cljs$core$IDeref$ = true;
x22416.cljs$core$IDeref$_deref$arity$1 = ((function (x22416){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22417 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22417) : cljs.core.deref.call(null,G__22417));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x22416))
;
return x22416;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__22426 = val;if(G__22426)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22426.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__22426.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22426);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22426);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__22427 = val;if(G__22427)
{var bit__4304__auto__ = (G__22427.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4304__auto__) || (G__22427.cljs$core$ICloneable$))
{return true;
} else
{if((!G__22427.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22427);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22427);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__22429 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22429) : cljs.core.deref.call(null,G__22429));
})(),state));
});
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__22431 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22431) : cljs.core.deref.call(null,G__22431));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__22432 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22432) : cljs.core.atom.call(null,G__22432));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x22440 = cljs.core.clone(x);x22440.om$core$ITransact$ = true;
x22440.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22440){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__22441_22444 = cursor__$1;var G__22442_22445 = korks;var G__22443_22446 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22441_22444,G__22442_22445,G__22443_22446) : om.core.commit_BANG_.call(null,G__22441_22444,G__22442_22445,G__22443_22446));
return om.core._refresh_deps_BANG_(parent);
});})(x22440))
;
x22440.om$core$ICursorDerive$ = true;
x22440.om$core$ICursorDerive$_derive$arity$4 = ((function (x22440){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x22440))
;
x22440.om$core$IAdapt$ = true;
x22440.om$core$IAdapt$_adapt$arity$2 = ((function (x22440){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other));
});})(x22440))
;
x22440.cljs$core$ICloneable$ = true;
x22440.cljs$core$ICloneable$_clone$arity$1 = ((function (x22440){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x22440))
;
return x22440;
});
om.core.ref_cursor = (function ref_cursor(cursor){var path = (function (){var G__22461 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22461) : om.core.path.call(null,G__22461));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__22462 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22462) : cljs.core.atom.call(null,G__22462));
})())),path);var x22463 = cljs.core.clone(cursor);x22463.om$core$ITransact$ = true;
x22463.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22463,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__22464_22475 = cursor__$2;var G__22465_22476 = korks;var G__22466_22477 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22464_22475,G__22465_22476,G__22466_22477) : om.core.commit_BANG_.call(null,G__22464_22475,G__22465_22476,G__22466_22477));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x22463,path,storage))
;
x22463.om$core$IOmRef$ = true;
x22463.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x22463,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__22467 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22467) : om.core.id.call(null,G__22467));
})(),c);
});})(x22463,path,storage))
;
x22463.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x22463,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__22468 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22468) : om.core.id.call(null,G__22468));
})());
});})(x22463,path,storage))
;
x22463.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x22463,path,storage){
return (function (_){var ___$1 = this;var seq__22469 = cljs.core.seq(cljs.core.vals((function (){var G__22473 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22473) : cljs.core.deref.call(null,G__22473));
})()));var chunk__22470 = null;var count__22471 = (0);var i__22472 = (0);while(true){
if((i__22472 < count__22471))
{var c = chunk__22470.cljs$core$IIndexed$_nth$arity$2(null,i__22472);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__22478 = seq__22469;
var G__22479 = chunk__22470;
var G__22480 = count__22471;
var G__22481 = (i__22472 + (1));
seq__22469 = G__22478;
chunk__22470 = G__22479;
count__22471 = G__22480;
i__22472 = G__22481;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22469);if(temp__4126__auto__)
{var seq__22469__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22469__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22469__$1);{
var G__22482 = cljs.core.chunk_rest(seq__22469__$1);
var G__22483 = c__4410__auto__;
var G__22484 = cljs.core.count(c__4410__auto__);
var G__22485 = (0);
seq__22469 = G__22482;
chunk__22470 = G__22483;
count__22471 = G__22484;
i__22472 = G__22485;
continue;
}
} else
{var c = cljs.core.first(seq__22469__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__22486 = cljs.core.next(seq__22469__$1);
var G__22487 = null;
var G__22488 = (0);
var G__22489 = (0);
seq__22469 = G__22486;
chunk__22470 = G__22487;
count__22471 = G__22488;
i__22472 = G__22489;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x22463,path,storage))
;
x22463.om$core$IOmRef$_get_deps$arity$1 = ((function (x22463,path,storage){
return (function (_){var ___$1 = this;var G__22474 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22474) : cljs.core.deref.call(null,G__22474));
});})(x22463,path,storage))
;
x22463.om$core$ICursorDerive$ = true;
x22463.om$core$ICursorDerive$_derive$arity$4 = ((function (x22463,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x22463,path,storage))
;
return x22463;
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3640__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_(refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_(refs,ref))
{return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else
{return null;
}
});
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_(c,ref);
om.core._add_dep_BANG_(ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_(c,ref);
om.core._remove_dep_BANG_(ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__22490 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22490) : cljs.core.atom.call(null,G__22490));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__22496 = cljs.core.seq((function (){var G__22500 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22500) : cljs.core.deref.call(null,G__22500));
})());var chunk__22497 = null;var count__22498 = (0);var i__22499 = (0);while(true){
if((i__22499 < count__22498))
{var f = chunk__22497.cljs$core$IIndexed$_nth$arity$2(null,i__22499);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__22501 = seq__22496;
var G__22502 = chunk__22497;
var G__22503 = count__22498;
var G__22504 = (i__22499 + (1));
seq__22496 = G__22501;
chunk__22497 = G__22502;
count__22498 = G__22503;
i__22499 = G__22504;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22496);if(temp__4126__auto__)
{var seq__22496__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22496__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22496__$1);{
var G__22505 = cljs.core.chunk_rest(seq__22496__$1);
var G__22506 = c__4410__auto__;
var G__22507 = cljs.core.count(c__4410__auto__);
var G__22508 = (0);
seq__22496 = G__22505;
chunk__22497 = G__22506;
count__22498 = G__22507;
i__22499 = G__22508;
continue;
}
} else
{var f = cljs.core.first(seq__22496__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__22509 = cljs.core.next(seq__22496__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22496 = G__22509;
chunk__22497 = G__22510;
count__22498 = G__22511;
i__22499 = G__22512;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = (function (){var G__22513 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22513) : cljs.core.atom.call(null,G__22513));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3640__auto__ = (function (){var G__22520 = x;if(G__22520)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22520.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__22520.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22520);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22520);
}
})();if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__22522 = x;if(G__22522)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$1 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return G__22522.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__22522.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22522);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22522);
}
})();if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var G__22523 = x;if(G__22523)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$2 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{return G__22523.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__22523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22523);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null,cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__22527 = (function (){var or__3640__auto__ = descriptor;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__22527);
})());
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0))))));
}
if((m == null))
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__22547 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22548 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22549 = cursor;var G__22550 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22549,G__22550) : f.call(null,G__22549,G__22550));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22548;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22547) : ctor.call(null,G__22547));
} else
{var map__22551 = m;var map__22551__$1 = ((cljs.core.seq_QMARK_(map__22551))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22551):map__22551);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,cljs.core.constant$keyword$45);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,cljs.core.constant$keyword$43);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,cljs.core.constant$keyword$44);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551__$1,cljs.core.constant$keyword$42);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$39);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__22552 = cursor;var G__22553 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__22552,G__22553) : dataf.call(null,G__22552,G__22553));
} else
{var G__22554 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__22554) : dataf.call(null,G__22554));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$41));var shared = (function (){var or__3640__auto__ = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(m));var G__22555 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__22551,map__22551__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22556 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22557 = cursor_SINGLEQUOTE_;var G__22558 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22557,G__22558) : f.call(null,G__22557,G__22558));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22556;
}});})(map__22551,map__22551__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__22551,map__22551__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22559 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22560 = cursor_SINGLEQUOTE_;var G__22561 = this$;var G__22562 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22560,G__22561,G__22562) : f.call(null,G__22560,G__22561,G__22562));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22559;
}});})(map__22551,map__22551__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22555) : ctor.call(null,G__22555));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_22570 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__22571 = f;var G__22572 = x;var G__22573 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__22571,G__22572,G__22573) : om.core._STAR_instrument_STAR_.call(null,G__22571,G__22572,G__22573));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22570;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$48))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$46,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__22596 = state;if(G__22596)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22596.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__22596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22596);
}
})())
{} else
{var properties_22615 = (function (){var G__22597 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22597) : cljs.core.atom.call(null,G__22597));
})();var listeners_22616 = (function (){var G__22598 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22598) : cljs.core.atom.call(null,G__22598));
})();var render_queue_22617 = (function (){var G__22599 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22599) : cljs.core.atom.call(null,G__22599));
})();var x22600_22618 = state;x22600_22618.om$core$IRenderQueue$ = true;
x22600_22618.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$){var this$__$1 = this;var G__22601 = render_queue_22617;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22601) : cljs.core.deref.call(null,G__22601));
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__22602 = render_queue_22617;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22602) : cljs.core.deref.call(null,G__22602));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_22617,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_22617,cljs.core.empty);
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$INotify$ = true;
x22600_22618.om$core$INotify$_listen_BANG_$arity$3 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_22616,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_22616,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$INotify$_notify_BANG_$arity$3 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__22603_22619 = cljs.core.seq((function (){var G__22607 = listeners_22616;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22607) : cljs.core.deref.call(null,G__22607));
})());var chunk__22604_22620 = null;var count__22605_22621 = (0);var i__22606_22622 = (0);while(true){
if((i__22606_22622 < count__22605_22621))
{var vec__22608_22623 = chunk__22604_22620.cljs$core$IIndexed$_nth$arity$2(null,i__22606_22622);var __22624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22608_22623,(0),null);var f_22625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22608_22623,(1),null);var G__22609_22626 = tx_data;var G__22610_22627 = root_cursor;(f_22625.cljs$core$IFn$_invoke$arity$2 ? f_22625.cljs$core$IFn$_invoke$arity$2(G__22609_22626,G__22610_22627) : f_22625.call(null,G__22609_22626,G__22610_22627));
{
var G__22628 = seq__22603_22619;
var G__22629 = chunk__22604_22620;
var G__22630 = count__22605_22621;
var G__22631 = (i__22606_22622 + (1));
seq__22603_22619 = G__22628;
chunk__22604_22620 = G__22629;
count__22605_22621 = G__22630;
i__22606_22622 = G__22631;
continue;
}
} else
{var temp__4126__auto___22632 = cljs.core.seq(seq__22603_22619);if(temp__4126__auto___22632)
{var seq__22603_22633__$1 = temp__4126__auto___22632;if(cljs.core.chunked_seq_QMARK_(seq__22603_22633__$1))
{var c__4410__auto___22634 = cljs.core.chunk_first(seq__22603_22633__$1);{
var G__22635 = cljs.core.chunk_rest(seq__22603_22633__$1);
var G__22636 = c__4410__auto___22634;
var G__22637 = cljs.core.count(c__4410__auto___22634);
var G__22638 = (0);
seq__22603_22619 = G__22635;
chunk__22604_22620 = G__22636;
count__22605_22621 = G__22637;
i__22606_22622 = G__22638;
continue;
}
} else
{var vec__22611_22639 = cljs.core.first(seq__22603_22633__$1);var __22640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611_22639,(0),null);var f_22641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611_22639,(1),null);var G__22612_22642 = tx_data;var G__22613_22643 = root_cursor;(f_22641.cljs$core$IFn$_invoke$arity$2 ? f_22641.cljs$core$IFn$_invoke$arity$2(G__22612_22642,G__22613_22643) : f_22641.call(null,G__22612_22642,G__22613_22643));
{
var G__22644 = cljs.core.next(seq__22603_22633__$1);
var G__22645 = null;
var G__22646 = (0);
var G__22647 = (0);
seq__22603_22619 = G__22644;
chunk__22604_22620 = G__22645;
count__22605_22621 = G__22646;
i__22606_22622 = G__22647;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRootProperties$ = true;
x22600_22618.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22615,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22615,cljs.core.dissoc,id,k);
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_22615,cljs.core.dissoc,id);
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
x22600_22618.om$core$IRootProperties$_get_property$arity$3 = ((function (x22600_22618,properties_22615,listeners_22616,render_queue_22617){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22614 = properties_22615;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22614) : cljs.core.deref.call(null,G__22614));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x22600_22618,properties_22615,listeners_22616,render_queue_22617))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x22653 = cljs.core.clone(cursor);x22653.om$core$IRootKey$ = true;
x22653.om$core$IRootKey$_root_key$arity$1 = ((function (x22653){
return (function (this$){var this$__$1 = this;return root_key;
});})(x22653))
;
x22653.om$core$IAdapt$ = true;
x22653.om$core$IAdapt$_adapt$arity$2 = ((function (x22653){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x22653))
;
x22653.cljs$core$ICloneable$ = true;
x22653.cljs$core$ICloneable$_clone$arity$1 = ((function (x22653){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x22653))
;
return x22653;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__22654){var map__22735 = p__22654;var map__22735__$1 = ((cljs.core.seq_QMARK_(map__22735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22735):map__22735);var options = map__22735__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$49);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$38);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$40);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$16);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$50);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22735__$1,cljs.core.constant$keyword$51);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__22815 = (function (){var G__22736 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22736) : cljs.core.deref.call(null,G__22736));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__22815,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__22815,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__22737 = value;if(G__22737)
{var bit__4304__auto__ = (G__22737.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4304__auto__) || (G__22737.cljs$core$IAtom$))
{return true;
} else
{if((!G__22737.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__22737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__22737);
}
})())?value:(function (){var G__22738 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22738) : cljs.core.atom.call(null,G__22738));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3640__auto__ = adapt;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$51,cljs.core.array_seq([cljs.core.constant$keyword$50,cljs.core.constant$keyword$16,cljs.core.constant$keyword$49], 0));var ret = (function (){var G__22739 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22739) : cljs.core.atom.call(null,G__22739));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__22775 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22775) : cljs.core.deref.call(null,G__22775));
})();var cursor = (function (){var G__22776 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__22776) : adapt__$1.call(null,G__22776));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$52)))
{} else
{var c_22816 = om.dom.render((function (){var _STAR_descriptor_STAR_22777 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_22778 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_22779 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_22780 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22780;
om.core._STAR_state_STAR_ = _STAR_state_STAR_22779;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22778;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22777;
}})(),target);if(((function (){var G__22781 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22781) : cljs.core.deref.call(null,G__22781));
})() == null))
{var G__22782_22817 = ret;var G__22783_22818 = c_22816;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22782_22817,G__22783_22818) : cljs.core.reset_BANG_.call(null,G__22782_22817,G__22783_22818));
} else
{}
}
var queue_22819 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_22819))
{} else
{var seq__22784_22820 = cljs.core.seq(queue_22819);var chunk__22785_22821 = null;var count__22786_22822 = (0);var i__22787_22823 = (0);while(true){
if((i__22787_22823 < count__22786_22822))
{var c_22824 = chunk__22785_22821.cljs$core$IIndexed$_nth$arity$2(null,i__22787_22823);if(cljs.core.truth_(c_22824.isMounted()))
{var temp__4126__auto___22825 = (c_22824.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___22825))
{var next_props_22826 = temp__4126__auto___22825;(c_22824.props["__om_cursor"] = next_props_22826);
(c_22824.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_22824.shouldComponentUpdate(c_22824.props,c_22824.state)))
{c_22824.forceUpdate();
} else
{}
} else
{}
{
var G__22827 = seq__22784_22820;
var G__22828 = chunk__22785_22821;
var G__22829 = count__22786_22822;
var G__22830 = (i__22787_22823 + (1));
seq__22784_22820 = G__22827;
chunk__22785_22821 = G__22828;
count__22786_22822 = G__22829;
i__22787_22823 = G__22830;
continue;
}
} else
{var temp__4126__auto___22831 = cljs.core.seq(seq__22784_22820);if(temp__4126__auto___22831)
{var seq__22784_22832__$1 = temp__4126__auto___22831;if(cljs.core.chunked_seq_QMARK_(seq__22784_22832__$1))
{var c__4410__auto___22833 = cljs.core.chunk_first(seq__22784_22832__$1);{
var G__22834 = cljs.core.chunk_rest(seq__22784_22832__$1);
var G__22835 = c__4410__auto___22833;
var G__22836 = cljs.core.count(c__4410__auto___22833);
var G__22837 = (0);
seq__22784_22820 = G__22834;
chunk__22785_22821 = G__22835;
count__22786_22822 = G__22836;
i__22787_22823 = G__22837;
continue;
}
} else
{var c_22838 = cljs.core.first(seq__22784_22832__$1);if(cljs.core.truth_(c_22838.isMounted()))
{var temp__4126__auto___22839__$1 = (c_22838.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___22839__$1))
{var next_props_22840 = temp__4126__auto___22839__$1;(c_22838.props["__om_cursor"] = next_props_22840);
(c_22838.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_22838.shouldComponentUpdate(c_22838.props,c_22838.state)))
{c_22838.forceUpdate();
} else
{}
} else
{}
{
var G__22841 = cljs.core.next(seq__22784_22832__$1);
var G__22842 = null;
var G__22843 = (0);
var G__22844 = (0);
seq__22784_22820 = G__22841;
chunk__22785_22821 = G__22842;
count__22786_22822 = G__22843;
i__22787_22823 = G__22844;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_(state__$1);
}
var _refs_22845 = (function (){var G__22788 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22788) : cljs.core.deref.call(null,G__22788));
})();if(cljs.core.empty_QMARK_(_refs_22845))
{} else
{var seq__22789_22846 = cljs.core.seq(_refs_22845);var chunk__22790_22847 = null;var count__22791_22848 = (0);var i__22792_22849 = (0);while(true){
if((i__22792_22849 < count__22791_22848))
{var vec__22793_22850 = chunk__22790_22847.cljs$core$IIndexed$_nth$arity$2(null,i__22792_22849);var path_22851__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22793_22850,(0),null);var cs_22852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22793_22850,(1),null);var cs_22853__$1 = (function (){var G__22794 = cs_22852;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22794) : cljs.core.deref.call(null,G__22794));
})();var seq__22795_22854 = cljs.core.seq(cs_22853__$1);var chunk__22796_22855 = null;var count__22797_22856 = (0);var i__22798_22857 = (0);while(true){
if((i__22798_22857 < count__22797_22856))
{var vec__22799_22858 = chunk__22796_22855.cljs$core$IIndexed$_nth$arity$2(null,i__22798_22857);var id_22859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799_22858,(0),null);var c_22860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799_22858,(1),null);if(cljs.core.truth_(c_22860.shouldComponentUpdate(c_22860.props,c_22860.state)))
{c_22860.forceUpdate();
} else
{}
{
var G__22861 = seq__22795_22854;
var G__22862 = chunk__22796_22855;
var G__22863 = count__22797_22856;
var G__22864 = (i__22798_22857 + (1));
seq__22795_22854 = G__22861;
chunk__22796_22855 = G__22862;
count__22797_22856 = G__22863;
i__22798_22857 = G__22864;
continue;
}
} else
{var temp__4126__auto___22865 = cljs.core.seq(seq__22795_22854);if(temp__4126__auto___22865)
{var seq__22795_22866__$1 = temp__4126__auto___22865;if(cljs.core.chunked_seq_QMARK_(seq__22795_22866__$1))
{var c__4410__auto___22867 = cljs.core.chunk_first(seq__22795_22866__$1);{
var G__22868 = cljs.core.chunk_rest(seq__22795_22866__$1);
var G__22869 = c__4410__auto___22867;
var G__22870 = cljs.core.count(c__4410__auto___22867);
var G__22871 = (0);
seq__22795_22854 = G__22868;
chunk__22796_22855 = G__22869;
count__22797_22856 = G__22870;
i__22798_22857 = G__22871;
continue;
}
} else
{var vec__22800_22872 = cljs.core.first(seq__22795_22866__$1);var id_22873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22800_22872,(0),null);var c_22874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22800_22872,(1),null);if(cljs.core.truth_(c_22874.shouldComponentUpdate(c_22874.props,c_22874.state)))
{c_22874.forceUpdate();
} else
{}
{
var G__22875 = cljs.core.next(seq__22795_22866__$1);
var G__22876 = null;
var G__22877 = (0);
var G__22878 = (0);
seq__22795_22854 = G__22875;
chunk__22796_22855 = G__22876;
count__22797_22856 = G__22877;
i__22798_22857 = G__22878;
continue;
}
}
} else
{}
}
break;
}
{
var G__22879 = seq__22789_22846;
var G__22880 = chunk__22790_22847;
var G__22881 = count__22791_22848;
var G__22882 = (i__22792_22849 + (1));
seq__22789_22846 = G__22879;
chunk__22790_22847 = G__22880;
count__22791_22848 = G__22881;
i__22792_22849 = G__22882;
continue;
}
} else
{var temp__4126__auto___22883 = cljs.core.seq(seq__22789_22846);if(temp__4126__auto___22883)
{var seq__22789_22884__$1 = temp__4126__auto___22883;if(cljs.core.chunked_seq_QMARK_(seq__22789_22884__$1))
{var c__4410__auto___22885 = cljs.core.chunk_first(seq__22789_22884__$1);{
var G__22886 = cljs.core.chunk_rest(seq__22789_22884__$1);
var G__22887 = c__4410__auto___22885;
var G__22888 = cljs.core.count(c__4410__auto___22885);
var G__22889 = (0);
seq__22789_22846 = G__22886;
chunk__22790_22847 = G__22887;
count__22791_22848 = G__22888;
i__22792_22849 = G__22889;
continue;
}
} else
{var vec__22801_22890 = cljs.core.first(seq__22789_22884__$1);var path_22891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22801_22890,(0),null);var cs_22892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22801_22890,(1),null);var cs_22893__$1 = (function (){var G__22802 = cs_22892;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22802) : cljs.core.deref.call(null,G__22802));
})();var seq__22803_22894 = cljs.core.seq(cs_22893__$1);var chunk__22804_22895 = null;var count__22805_22896 = (0);var i__22806_22897 = (0);while(true){
if((i__22806_22897 < count__22805_22896))
{var vec__22807_22898 = chunk__22804_22895.cljs$core$IIndexed$_nth$arity$2(null,i__22806_22897);var id_22899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22807_22898,(0),null);var c_22900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22807_22898,(1),null);if(cljs.core.truth_(c_22900.shouldComponentUpdate(c_22900.props,c_22900.state)))
{c_22900.forceUpdate();
} else
{}
{
var G__22901 = seq__22803_22894;
var G__22902 = chunk__22804_22895;
var G__22903 = count__22805_22896;
var G__22904 = (i__22806_22897 + (1));
seq__22803_22894 = G__22901;
chunk__22804_22895 = G__22902;
count__22805_22896 = G__22903;
i__22806_22897 = G__22904;
continue;
}
} else
{var temp__4126__auto___22905__$1 = cljs.core.seq(seq__22803_22894);if(temp__4126__auto___22905__$1)
{var seq__22803_22906__$1 = temp__4126__auto___22905__$1;if(cljs.core.chunked_seq_QMARK_(seq__22803_22906__$1))
{var c__4410__auto___22907 = cljs.core.chunk_first(seq__22803_22906__$1);{
var G__22908 = cljs.core.chunk_rest(seq__22803_22906__$1);
var G__22909 = c__4410__auto___22907;
var G__22910 = cljs.core.count(c__4410__auto___22907);
var G__22911 = (0);
seq__22803_22894 = G__22908;
chunk__22804_22895 = G__22909;
count__22805_22896 = G__22910;
i__22806_22897 = G__22911;
continue;
}
} else
{var vec__22808_22912 = cljs.core.first(seq__22803_22906__$1);var id_22913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_22912,(0),null);var c_22914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22808_22912,(1),null);if(cljs.core.truth_(c_22914.shouldComponentUpdate(c_22914.props,c_22914.state)))
{c_22914.forceUpdate();
} else
{}
{
var G__22915 = cljs.core.next(seq__22803_22906__$1);
var G__22916 = null;
var G__22917 = (0);
var G__22918 = (0);
seq__22803_22894 = G__22915;
chunk__22804_22895 = G__22916;
count__22805_22896 = G__22917;
i__22806_22897 = G__22918;
continue;
}
}
} else
{}
}
break;
}
{
var G__22919 = cljs.core.next(seq__22789_22884__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__22789_22846 = G__22919;
chunk__22790_22847 = G__22920;
count__22791_22848 = G__22921;
i__22792_22849 = G__22922;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$52,true);
var G__22809 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22809) : cljs.core.deref.call(null,G__22809));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$53))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$52,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$53,false);
if(cljs.core.contains_QMARK_((function (){var G__22810 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22810) : cljs.core.deref.call(null,G__22810));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__22811 = om.core.render_all;return requestAnimationFrame(G__22811);
} else
{var G__22812 = om.core.render_all;var G__22813 = (16);return setTimeout(G__22812,G__22813);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__22814 = target;return React.unmountComponentAtNode(G__22814);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22735,map__22735__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22924 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22924) : cljs.core.deref.call(null,G__22924));
})(),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_(cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__22935 = cursor;if(G__22935)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22935.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__22935.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__22935);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__22935);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__22936 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22936) : om.core.path.call(null,G__22936));
})();var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$53,true);
} else
{}
if(cljs.core.empty_QMARK_(rpath))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__22939 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22939) : f.call(null,G__22939));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__22940 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22940) : f.call(null,G__22940));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__22943 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22943) : f.call(null,G__22943));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__22944 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22944) : f.call(null,G__22944));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
