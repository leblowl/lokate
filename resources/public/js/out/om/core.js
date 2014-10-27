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
om.core.IDisplayName = (function (){var obj22105 = {};return obj22105;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.display_name[(function (){var G__22109 = x__4277__auto__;return goog.typeOf(G__22109);
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
om.core.IInitState = (function (){var obj22111 = {};return obj22111;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.init_state[(function (){var G__22115 = x__4277__auto__;return goog.typeOf(G__22115);
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
om.core.IShouldUpdate = (function (){var obj22117 = {};return obj22117;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.should_update[(function (){var G__22121 = x__4277__auto__;return goog.typeOf(G__22121);
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
om.core.IWillMount = (function (){var obj22123 = {};return obj22123;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_mount[(function (){var G__22127 = x__4277__auto__;return goog.typeOf(G__22127);
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
om.core.IDidMount = (function (){var obj22129 = {};return obj22129;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_mount[(function (){var G__22133 = x__4277__auto__;return goog.typeOf(G__22133);
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
om.core.IWillUnmount = (function (){var obj22135 = {};return obj22135;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_unmount[(function (){var G__22139 = x__4277__auto__;return goog.typeOf(G__22139);
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
om.core.IWillUpdate = (function (){var obj22141 = {};return obj22141;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_update[(function (){var G__22145 = x__4277__auto__;return goog.typeOf(G__22145);
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
om.core.IDidUpdate = (function (){var obj22147 = {};return obj22147;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_update[(function (){var G__22151 = x__4277__auto__;return goog.typeOf(G__22151);
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
om.core.IWillReceiveProps = (function (){var obj22153 = {};return obj22153;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_receive_props[(function (){var G__22157 = x__4277__auto__;return goog.typeOf(G__22157);
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
om.core.IRender = (function (){var obj22159 = {};return obj22159;
})();
om.core.render = (function render(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render[(function (){var G__22163 = x__4277__auto__;return goog.typeOf(G__22163);
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
om.core.IRenderProps = (function (){var obj22165 = {};return obj22165;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_props[(function (){var G__22169 = x__4277__auto__;return goog.typeOf(G__22169);
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
om.core.IRenderState = (function (){var obj22171 = {};return obj22171;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_state[(function (){var G__22175 = x__4277__auto__;return goog.typeOf(G__22175);
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
om.core.IOmSwap = (function (){var obj22177 = {};return obj22177;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._om_swap_BANG_[(function (){var G__22181 = x__4277__auto__;return goog.typeOf(G__22181);
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
om.core.IGetState = (function (){var obj22183 = {};return obj22183;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__22189 = x__4277__auto__;return goog.typeOf(G__22189);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__22191 = x__4277__auto__;return goog.typeOf(G__22191);
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
om.core.IGetRenderState = (function (){var obj22193 = {};return obj22193;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__22199 = x__4277__auto__;return goog.typeOf(G__22199);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__22201 = x__4277__auto__;return goog.typeOf(G__22201);
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
om.core.ISetState = (function (){var obj22203 = {};return obj22203;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__22209 = x__4277__auto__;return goog.typeOf(G__22209);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__22211 = x__4277__auto__;return goog.typeOf(G__22211);
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
om.core.IRenderQueue = (function (){var obj22213 = {};return obj22213;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_queue[(function (){var G__22217 = x__4277__auto__;return goog.typeOf(G__22217);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._queue_render_BANG_[(function (){var G__22221 = x__4277__auto__;return goog.typeOf(G__22221);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._empty_queue_BANG_[(function (){var G__22225 = x__4277__auto__;return goog.typeOf(G__22225);
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
om.core.IValue = (function (){var obj22227 = {};return obj22227;
})();
om.core._value = (function _value(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._value[(function (){var G__22231 = x__4277__auto__;return goog.typeOf(G__22231);
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
om.core.ICursor = (function (){var obj22233 = {};return obj22233;
})();
om.core._path = (function _path(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._path[(function (){var G__22237 = x__4277__auto__;return goog.typeOf(G__22237);
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
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._state[(function (){var G__22241 = x__4277__auto__;return goog.typeOf(G__22241);
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
om.core.IToCursor = (function (){var obj22243 = {};return obj22243;
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
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__22249 = x__4277__auto__;return goog.typeOf(G__22249);
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
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__22251 = x__4277__auto__;return goog.typeOf(G__22251);
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
om.core.ICursorDerive = (function (){var obj22253 = {};return obj22253;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._derive[(function (){var G__22257 = x__4277__auto__;return goog.typeOf(G__22257);
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
(om.core._derive["_"] = (function (this$,derived,state,path){var G__22258 = derived;var G__22259 = state;var G__22260 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22258,G__22259,G__22260) : om.core.to_cursor.call(null,G__22258,G__22259,G__22260));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj22262 = {};return obj22262;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._transact_BANG_[(function (){var G__22266 = x__4277__auto__;return goog.typeOf(G__22266);
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
om.core.INotify = (function (){var obj22268 = {};return obj22268;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._listen_BANG_[(function (){var G__22272 = x__4277__auto__;return goog.typeOf(G__22272);
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
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._unlisten_BANG_[(function (){var G__22276 = x__4277__auto__;return goog.typeOf(G__22276);
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
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._notify_BANG_[(function (){var G__22280 = x__4277__auto__;return goog.typeOf(G__22280);
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
om.core.IRootProperties = (function (){var obj22282 = {};return obj22282;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_property_BANG_[(function (){var G__22286 = x__4277__auto__;return goog.typeOf(G__22286);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_property_BANG_[(function (){var G__22290 = x__4277__auto__;return goog.typeOf(G__22290);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_properties_BANG_[(function (){var G__22294 = x__4277__auto__;return goog.typeOf(G__22294);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_property[(function (){var G__22298 = x__4277__auto__;return goog.typeOf(G__22298);
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
om.core.IRootKey = (function (){var obj22300 = {};return obj22300;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._root_key[(function (){var G__22304 = x__4277__auto__;return goog.typeOf(G__22304);
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
om.core.IAdapt = (function (){var obj22306 = {};return obj22306;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._adapt[(function (){var G__22310 = x__4277__auto__;return goog.typeOf(G__22310);
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
om.core.IOmRef = (function (){var obj22312 = {};return obj22312;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._add_dep_BANG_[(function (){var G__22316 = x__4277__auto__;return goog.typeOf(G__22316);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_dep_BANG_[(function (){var G__22320 = x__4277__auto__;return goog.typeOf(G__22320);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__22324 = x__4277__auto__;return goog.typeOf(G__22324);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_deps[(function (){var G__22328 = x__4277__auto__;return goog.typeOf(G__22328);
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
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__22338 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22338) : cljs.core.deref.call(null,G__22338));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__22339 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22339) : om.core.path.call(null,G__22339));
})(),korks);var ret = (((function (){var G__22340 = state;if(G__22340)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22340.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__22340.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22340);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__22340);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$15))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$16,path,cljs.core.constant$keyword$17,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$18,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22341 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22341) : cljs.core.deref.call(null,G__22341));
})(),path),cljs.core.constant$keyword$19,old_state,cljs.core.constant$keyword$20,(function (){var G__22342 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22342) : cljs.core.deref.call(null,G__22342));
})()], null);if(!((tag == null)))
{var G__22343 = cursor;var G__22344 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$21,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22343,G__22344) : om.core.notify_STAR_.call(null,G__22343,G__22344));
} else
{var G__22345 = cursor;var G__22346 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__22345,G__22346) : om.core.notify_STAR_.call(null,G__22345,G__22346));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__22348 = x;if(G__22348)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22348.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__22348.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22348);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__22348);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_22351 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__22352 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__22352) : c.call(null,G__22352));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22351;
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
{var pending_state = temp__4126__auto__;var G__22357 = state;(G__22357["__om_prev_state"] = (state["__om_state"]));
(G__22357["__om_state"] = pending_state);
(G__22357["__om_pending_state"] = null);
return G__22357;
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
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22362 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22362) : cljs.core.deref.call(null,G__22362));
})(),(function (){var G__22363 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22363) : om.core.path.call(null,G__22363));
})(),cljs.core.constant$keyword$22);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__22369 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22369) : om.core.path.call(null,G__22369));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__22370 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22370) : cljs.core.deref.call(null,G__22370));
})(),ref_path,cljs.core.constant$keyword$22);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$22))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__22371 = ref_val_SINGLEQUOTE_;var G__22372 = ref_state;var G__22373 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__22371,G__22372,G__22373) : om.core.to_cursor.call(null,G__22371,G__22372,G__22373));
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27,cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__22375 = c;if(G__22375)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22375.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__22375.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22375);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22375);
}
})())
{var state_22410 = this$.state;var _STAR_read_enabled_STAR_22376_22411 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = (state_22410["__om_prev_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state_22410["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22376_22411;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__22377 = c;if(G__22377)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22377.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__22377.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22377);
}
})())
{var _STAR_read_enabled_STAR_22378_22412 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22378_22412;
}} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__22379 = cljs.core.seq(refs);var chunk__22380 = null;var count__22381 = (0);var i__22382 = (0);while(true){
if((i__22382 < count__22381))
{var ref = chunk__22380.cljs$core$IIndexed$_nth$arity$2(null,i__22382);var G__22383_22413 = this$;var G__22384_22414 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22383_22413,G__22384_22414) : om.core.unobserve.call(null,G__22383_22413,G__22384_22414));
{
var G__22415 = seq__22379;
var G__22416 = chunk__22380;
var G__22417 = count__22381;
var G__22418 = (i__22382 + (1));
seq__22379 = G__22415;
chunk__22380 = G__22416;
count__22381 = G__22417;
i__22382 = G__22418;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__22379);if(temp__4126__auto____$1)
{var seq__22379__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__22379__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22379__$1);{
var G__22419 = cljs.core.chunk_rest(seq__22379__$1);
var G__22420 = c__4410__auto__;
var G__22421 = cljs.core.count(c__4410__auto__);
var G__22422 = (0);
seq__22379 = G__22419;
chunk__22380 = G__22420;
count__22381 = G__22421;
i__22382 = G__22422;
continue;
}
} else
{var ref = cljs.core.first(seq__22379__$1);var G__22385_22423 = this$;var G__22386_22424 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__22385_22423,G__22386_22424) : om.core.unobserve.call(null,G__22385_22423,G__22386_22424));
{
var G__22425 = cljs.core.next(seq__22379__$1);
var G__22426 = null;
var G__22427 = (0);
var G__22428 = (0);
seq__22379 = G__22425;
chunk__22380 = G__22426;
count__22381 = G__22427;
i__22382 = G__22428;
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
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__22387 = c;if(G__22387)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22387.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__22387.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22387);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__22387);
}
})())
{var _STAR_read_enabled_STAR_22388 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22388;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_22389 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__22390 = c;if(G__22390)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22390.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__22390.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__22390);
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
{return cljs.core.some(((function (and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_22389,this$){
return (function (p1__22374_SHARP_){return om.core.ref_changed_QMARK_(p1__22374_SHARP_);
});})(and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_22389,this$))
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22389;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_22391 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_22392 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_22393 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_22394 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_22395 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
var _STAR_read_enabled_STAR_22396 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__22397 = c;if(G__22397)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22397.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__22397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22397);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__22398 = c;if(G__22398)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22398.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__22398.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22398);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__22399 = c;if(G__22399)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22399.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__22399.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22399);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22399);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22396;
}}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22395;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22394;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22393;
om.core._STAR_state_STAR_ = _STAR_state_STAR_22392;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_22391;
}}),(function (next_props,next_state){var this$ = this;var c_22429 = om.core.children(this$);if((function (){var G__22400 = c_22429;if(G__22400)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22400.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__22400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22400);
}
})())
{var state_22430 = this$.state;var _STAR_read_enabled_STAR_22401_22431 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_22429,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22401_22431;
}} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3640__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__22402 = c;if(G__22402)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22402.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__22402.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22402);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22402);
}
})())?(function (){var _STAR_read_enabled_STAR_22403 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22403;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$33)], 0)), "__om_id": (function (){var or__3640__auto__ = id;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__22404 = c;if(G__22404)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22404.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__22404.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22404);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__22404);
}
})())
{var _STAR_read_enabled_STAR_22405 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22405;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__22406 = c;if(G__22406)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22406.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__22406.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22406);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__22406);
}
})())
{var _STAR_read_enabled_STAR_22407 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22407;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_22432 = om.core.children(this$);if((function (){var G__22408 = c_22432;if(G__22408)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22408.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__22408.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22408);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22408);
}
})())
{var _STAR_read_enabled_STAR_22409_22433 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_22432);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22409_22433;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x22437 = obj;x22437.om$core$IGetState$ = true;
x22437.om$core$IGetState$_get_state$arity$1 = ((function (x22437){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3640__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state["__om_state"]);
}
});})(x22437))
;
x22437.om$core$IGetState$_get_state$arity$2 = ((function (x22437){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22437))
;
x22437.om$core$IGetRenderState$ = true;
x22437.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22437){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x22437))
;
x22437.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22437){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22437))
;
x22437.om$core$ISetState$ = true;
x22437.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22437){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22438 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22438;
}});})(x22437))
;
x22437.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22437){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22439 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22439;
}});})(x22437))
;
return x22437;
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
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22441 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22441) : cljs.core.deref.call(null,G__22441));
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
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$33),(((function (){var G__22442 = c;if(G__22442)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22442.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__22442.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22442);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__22442);
}
})())?(function (){var _STAR_read_enabled_STAR_22443 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22443;
}})():null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$),cljs.core.constant$keyword$36], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$32,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_22453 = om.core.children(this$);if((function (){var G__22444 = c_22453;if(G__22444)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22444.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__22444.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22444);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__22444);
}
})())
{var _STAR_read_enabled_STAR_22445_22454 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_22453);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22445_22454;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$24,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null);if((function (){var G__22446 = c;if(G__22446)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22446.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__22446.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__22446);
}
})())
{var _STAR_read_enabled_STAR_22447_22455 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22447_22455;
}} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),cljs.core.constant$keyword$28,(function (next_props,next_state){var this$ = this;var props_22456 = this$.props;var c_22457 = om.core.children(this$);if((function (){var G__22448 = c_22457;if(G__22448)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22448.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__22448.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22448);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__22448);
}
})())
{var state_22458 = this$.state;var _STAR_read_enabled_STAR_22449_22459 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_22457,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22449_22459;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$23,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22450 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22450) : cljs.core.deref.call(null,G__22450));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$)], null);if((function (){var G__22451 = c;if(G__22451)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22451.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__22451.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22451);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__22451);
}
})())
{var state_22460 = this$.state;var _STAR_read_enabled_STAR_22452_22461 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22452_22461;
}} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$37], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x22467 = cljs.core.clj__GT_js(methods$);x22467.om$core$IGetState$ = true;
x22467.om$core$IGetState$_get_state$arity$1 = ((function (x22467){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22468 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22468) : cljs.core.deref.call(null,G__22468));
})(),spath);var or__3640__auto__ = cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x22467))
;
x22467.om$core$IGetState$_get_state$arity$2 = ((function (x22467){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22467))
;
x22467.om$core$IGetRenderState$ = true;
x22467.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x22467){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34,om.core.react_id(this$__$1),cljs.core.constant$keyword$36], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22469 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22469) : cljs.core.deref.call(null,G__22469));
})(),spath);
});})(x22467))
;
x22467.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x22467){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x22467))
;
x22467.om$core$ISetState$ = true;
x22467.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x22467){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22470 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22470;
}});})(x22467))
;
x22467.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x22467){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_22471 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22471;
}});})(x22467))
;
return x22467;
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
return (function (p__22473){var vec__22474 = p__22473;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
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
var G__22476 = null;
var G__22476__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22476__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22476 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22476__2.call(this,self__,k);
case 3:
return G__22476__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22476.cljs$core$IFn$_invoke$arity$2 = G__22476__2;
G__22476.cljs$core$IFn$_invoke$arity$3 = G__22476__3;
return G__22476;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args22472){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22472)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22475 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22475) : cljs.core.deref.call(null,G__22475));
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
var G__22479 = null;
var G__22479__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__22479__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__22479 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22479__2.call(this,self__,k);
case 3:
return G__22479__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22479.cljs$core$IFn$_invoke$arity$2 = G__22479__2;
G__22479.cljs$core$IFn$_invoke$arity$3 = G__22479__3;
return G__22479;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args22477){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22477)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22478 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22478) : cljs.core.deref.call(null,G__22478));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x22482 = cljs.core.clone(val);x22482.cljs$core$IEquiv$ = true;
x22482.cljs$core$IEquiv$_equiv$arity$2 = ((function (x22482){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x22482))
;
x22482.om$core$ITransact$ = true;
x22482.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22482){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x22482))
;
x22482.om$core$ICursor$ = true;
x22482.om$core$ICursor$_path$arity$1 = ((function (x22482){
return (function (_){var ___$1 = this;return path;
});})(x22482))
;
x22482.om$core$ICursor$_state$arity$1 = ((function (x22482){
return (function (_){var ___$1 = this;return state;
});})(x22482))
;
x22482.cljs$core$IDeref$ = true;
x22482.cljs$core$IDeref$_deref$arity$1 = ((function (x22482){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22483 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22483) : cljs.core.deref.call(null,G__22483));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x22482))
;
return x22482;
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
{if((function (){var G__22492 = val;if(G__22492)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22492.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__22492.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__22492);
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
{if((function (){var G__22493 = val;if(G__22493)
{var bit__4304__auto__ = (G__22493.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4304__auto__) || (G__22493.cljs$core$ICloneable$))
{return true;
} else
{if((!G__22493.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__22493);
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
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__22495 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22495) : cljs.core.deref.call(null,G__22495));
})(),state));
});
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__22497 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22497) : cljs.core.deref.call(null,G__22497));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__22498 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22498) : cljs.core.atom.call(null,G__22498));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x22506 = cljs.core.clone(x);x22506.om$core$ITransact$ = true;
x22506.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22506){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__22507_22510 = cursor__$1;var G__22508_22511 = korks;var G__22509_22512 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22507_22510,G__22508_22511,G__22509_22512) : om.core.commit_BANG_.call(null,G__22507_22510,G__22508_22511,G__22509_22512));
return om.core._refresh_deps_BANG_(parent);
});})(x22506))
;
x22506.om$core$ICursorDerive$ = true;
x22506.om$core$ICursorDerive$_derive$arity$4 = ((function (x22506){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x22506))
;
x22506.om$core$IAdapt$ = true;
x22506.om$core$IAdapt$_adapt$arity$2 = ((function (x22506){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other));
});})(x22506))
;
x22506.cljs$core$ICloneable$ = true;
x22506.cljs$core$ICloneable$_clone$arity$1 = ((function (x22506){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x22506))
;
return x22506;
});
om.core.ref_cursor = (function ref_cursor(cursor){var path = (function (){var G__22527 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__22527) : om.core.path.call(null,G__22527));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__22528 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22528) : cljs.core.atom.call(null,G__22528));
})())),path);var x22529 = cljs.core.clone(cursor);x22529.om$core$ITransact$ = true;
x22529.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x22529,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__22530_22541 = cursor__$2;var G__22531_22542 = korks;var G__22532_22543 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__22530_22541,G__22531_22542,G__22532_22543) : om.core.commit_BANG_.call(null,G__22530_22541,G__22531_22542,G__22532_22543));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x22529,path,storage))
;
x22529.om$core$IOmRef$ = true;
x22529.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x22529,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__22533 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22533) : om.core.id.call(null,G__22533));
})(),c);
});})(x22529,path,storage))
;
x22529.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x22529,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__22534 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__22534) : om.core.id.call(null,G__22534));
})());
});})(x22529,path,storage))
;
x22529.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x22529,path,storage){
return (function (_){var ___$1 = this;var seq__22535 = cljs.core.seq(cljs.core.vals((function (){var G__22539 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22539) : cljs.core.deref.call(null,G__22539));
})()));var chunk__22536 = null;var count__22537 = (0);var i__22538 = (0);while(true){
if((i__22538 < count__22537))
{var c = chunk__22536.cljs$core$IIndexed$_nth$arity$2(null,i__22538);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__22544 = seq__22535;
var G__22545 = chunk__22536;
var G__22546 = count__22537;
var G__22547 = (i__22538 + (1));
seq__22535 = G__22544;
chunk__22536 = G__22545;
count__22537 = G__22546;
i__22538 = G__22547;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22535);if(temp__4126__auto__)
{var seq__22535__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22535__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22535__$1);{
var G__22548 = cljs.core.chunk_rest(seq__22535__$1);
var G__22549 = c__4410__auto__;
var G__22550 = cljs.core.count(c__4410__auto__);
var G__22551 = (0);
seq__22535 = G__22548;
chunk__22536 = G__22549;
count__22537 = G__22550;
i__22538 = G__22551;
continue;
}
} else
{var c = cljs.core.first(seq__22535__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__22552 = cljs.core.next(seq__22535__$1);
var G__22553 = null;
var G__22554 = (0);
var G__22555 = (0);
seq__22535 = G__22552;
chunk__22536 = G__22553;
count__22537 = G__22554;
i__22538 = G__22555;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x22529,path,storage))
;
x22529.om$core$IOmRef$_get_deps$arity$1 = ((function (x22529,path,storage){
return (function (_){var ___$1 = this;var G__22540 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22540) : cljs.core.deref.call(null,G__22540));
});})(x22529,path,storage))
;
x22529.om$core$ICursorDerive$ = true;
x22529.om$core$ICursorDerive$_derive$arity$4 = ((function (x22529,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x22529,path,storage))
;
return x22529;
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
om.core.refresh_set = (function (){var G__22556 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22556) : cljs.core.atom.call(null,G__22556));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__22562 = cljs.core.seq((function (){var G__22566 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22566) : cljs.core.deref.call(null,G__22566));
})());var chunk__22563 = null;var count__22564 = (0);var i__22565 = (0);while(true){
if((i__22565 < count__22564))
{var f = chunk__22563.cljs$core$IIndexed$_nth$arity$2(null,i__22565);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__22567 = seq__22562;
var G__22568 = chunk__22563;
var G__22569 = count__22564;
var G__22570 = (i__22565 + (1));
seq__22562 = G__22567;
chunk__22563 = G__22568;
count__22564 = G__22569;
i__22565 = G__22570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22562);if(temp__4126__auto__)
{var seq__22562__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22562__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__22562__$1);{
var G__22571 = cljs.core.chunk_rest(seq__22562__$1);
var G__22572 = c__4410__auto__;
var G__22573 = cljs.core.count(c__4410__auto__);
var G__22574 = (0);
seq__22562 = G__22571;
chunk__22563 = G__22572;
count__22564 = G__22573;
i__22565 = G__22574;
continue;
}
} else
{var f = cljs.core.first(seq__22562__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__22575 = cljs.core.next(seq__22562__$1);
var G__22576 = null;
var G__22577 = (0);
var G__22578 = (0);
seq__22562 = G__22575;
chunk__22563 = G__22576;
count__22564 = G__22577;
i__22565 = G__22578;
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
om.core.roots = (function (){var G__22579 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22579) : cljs.core.atom.call(null,G__22579));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3640__auto__ = (function (){var G__22586 = x;if(G__22586)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22586.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__22586.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22586);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__22586);
}
})();if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__22588 = x;if(G__22588)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$1 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return G__22588.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__22588.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__22588);
}
})();if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var G__22589 = x;if(G__22589)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$2 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{return G__22589.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__22589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__22589);
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
{(f["om$descriptor"] = (function (){var G__22593 = (function (){var or__3640__auto__ = descriptor;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__22593);
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
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__22613 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22614 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22615 = cursor;var G__22616 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22615,G__22616) : f.call(null,G__22615,G__22616));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22614;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22613) : ctor.call(null,G__22613));
} else
{var map__22617 = m;var map__22617__$1 = ((cljs.core.seq_QMARK_(map__22617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22617):map__22617);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,cljs.core.constant$keyword$45);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,cljs.core.constant$keyword$43);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,cljs.core.constant$keyword$44);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,cljs.core.constant$keyword$42);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$39);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__22618 = cursor;var G__22619 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__22618,G__22619) : dataf.call(null,G__22618,G__22619));
} else
{var G__22620 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__22620) : dataf.call(null,G__22620));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$41));var shared = (function (){var or__3640__auto__ = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(m));var G__22621 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__22617,map__22617__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22622 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22623 = cursor_SINGLEQUOTE_;var G__22624 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22623,G__22624) : f.call(null,G__22623,G__22624));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22622;
}});})(map__22617,map__22617__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__22617,map__22617__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_22625 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__22626 = cursor_SINGLEQUOTE_;var G__22627 = this$;var G__22628 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22626,G__22627,G__22628) : f.call(null,G__22626,G__22627,G__22628));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22625;
}});})(map__22617,map__22617__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__22621) : ctor.call(null,G__22621));

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
{var ret = (function (){var _STAR_read_enabled_STAR_22636 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__22637 = f;var G__22638 = x;var G__22639 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__22637,G__22638,G__22639) : om.core._STAR_instrument_STAR_.call(null,G__22637,G__22638,G__22639));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_22636;
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
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__22662 = state;if(G__22662)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22662.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__22662.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__22662);
}
})())
{} else
{var properties_22681 = (function (){var G__22663 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22663) : cljs.core.atom.call(null,G__22663));
})();var listeners_22682 = (function (){var G__22664 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22664) : cljs.core.atom.call(null,G__22664));
})();var render_queue_22683 = (function (){var G__22665 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22665) : cljs.core.atom.call(null,G__22665));
})();var x22666_22684 = state;x22666_22684.om$core$IRenderQueue$ = true;
x22666_22684.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$){var this$__$1 = this;var G__22667 = render_queue_22683;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22667) : cljs.core.deref.call(null,G__22667));
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__22668 = render_queue_22683;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22668) : cljs.core.deref.call(null,G__22668));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_22683,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_22683,cljs.core.empty);
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$INotify$ = true;
x22666_22684.om$core$INotify$_listen_BANG_$arity$3 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_22682,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_22682,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$INotify$_notify_BANG_$arity$3 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__22669_22685 = cljs.core.seq((function (){var G__22673 = listeners_22682;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22673) : cljs.core.deref.call(null,G__22673));
})());var chunk__22670_22686 = null;var count__22671_22687 = (0);var i__22672_22688 = (0);while(true){
if((i__22672_22688 < count__22671_22687))
{var vec__22674_22689 = chunk__22670_22686.cljs$core$IIndexed$_nth$arity$2(null,i__22672_22688);var __22690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22674_22689,(0),null);var f_22691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22674_22689,(1),null);var G__22675_22692 = tx_data;var G__22676_22693 = root_cursor;(f_22691.cljs$core$IFn$_invoke$arity$2 ? f_22691.cljs$core$IFn$_invoke$arity$2(G__22675_22692,G__22676_22693) : f_22691.call(null,G__22675_22692,G__22676_22693));
{
var G__22694 = seq__22669_22685;
var G__22695 = chunk__22670_22686;
var G__22696 = count__22671_22687;
var G__22697 = (i__22672_22688 + (1));
seq__22669_22685 = G__22694;
chunk__22670_22686 = G__22695;
count__22671_22687 = G__22696;
i__22672_22688 = G__22697;
continue;
}
} else
{var temp__4126__auto___22698 = cljs.core.seq(seq__22669_22685);if(temp__4126__auto___22698)
{var seq__22669_22699__$1 = temp__4126__auto___22698;if(cljs.core.chunked_seq_QMARK_(seq__22669_22699__$1))
{var c__4410__auto___22700 = cljs.core.chunk_first(seq__22669_22699__$1);{
var G__22701 = cljs.core.chunk_rest(seq__22669_22699__$1);
var G__22702 = c__4410__auto___22700;
var G__22703 = cljs.core.count(c__4410__auto___22700);
var G__22704 = (0);
seq__22669_22685 = G__22701;
chunk__22670_22686 = G__22702;
count__22671_22687 = G__22703;
i__22672_22688 = G__22704;
continue;
}
} else
{var vec__22677_22705 = cljs.core.first(seq__22669_22699__$1);var __22706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22705,(0),null);var f_22707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22705,(1),null);var G__22678_22708 = tx_data;var G__22679_22709 = root_cursor;(f_22707.cljs$core$IFn$_invoke$arity$2 ? f_22707.cljs$core$IFn$_invoke$arity$2(G__22678_22708,G__22679_22709) : f_22707.call(null,G__22678_22708,G__22679_22709));
{
var G__22710 = cljs.core.next(seq__22669_22699__$1);
var G__22711 = null;
var G__22712 = (0);
var G__22713 = (0);
seq__22669_22685 = G__22710;
chunk__22670_22686 = G__22711;
count__22671_22687 = G__22712;
i__22672_22688 = G__22713;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRootProperties$ = true;
x22666_22684.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22681,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_22681,cljs.core.dissoc,id,k);
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_22681,cljs.core.dissoc,id);
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
x22666_22684.om$core$IRootProperties$_get_property$arity$3 = ((function (x22666_22684,properties_22681,listeners_22682,render_queue_22683){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22680 = properties_22681;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22680) : cljs.core.deref.call(null,G__22680));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x22666_22684,properties_22681,listeners_22682,render_queue_22683))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x22719 = cljs.core.clone(cursor);x22719.om$core$IRootKey$ = true;
x22719.om$core$IRootKey$_root_key$arity$1 = ((function (x22719){
return (function (this$){var this$__$1 = this;return root_key;
});})(x22719))
;
x22719.om$core$IAdapt$ = true;
x22719.om$core$IAdapt$_adapt$arity$2 = ((function (x22719){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x22719))
;
x22719.cljs$core$ICloneable$ = true;
x22719.cljs$core$ICloneable$_clone$arity$1 = ((function (x22719){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x22719))
;
return x22719;
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
om.core.root = (function root(f,value,p__22720){var map__22801 = p__22720;var map__22801__$1 = ((cljs.core.seq_QMARK_(map__22801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22801):map__22801);var options = map__22801__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$49);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$38);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$40);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$16);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$50);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$51);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__22881 = (function (){var G__22802 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22802) : cljs.core.deref.call(null,G__22802));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__22881,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__22881,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__22803 = value;if(G__22803)
{var bit__4304__auto__ = (G__22803.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4304__auto__) || (G__22803.cljs$core$IAtom$))
{return true;
} else
{if((!G__22803.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__22803);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__22803);
}
})())?value:(function (){var G__22804 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22804) : cljs.core.atom.call(null,G__22804));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3640__auto__ = adapt;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$51,cljs.core.array_seq([cljs.core.constant$keyword$50,cljs.core.constant$keyword$16,cljs.core.constant$keyword$49], 0));var ret = (function (){var G__22805 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22805) : cljs.core.atom.call(null,G__22805));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__22841 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22841) : cljs.core.deref.call(null,G__22841));
})();var cursor = (function (){var G__22842 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__22842) : adapt__$1.call(null,G__22842));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$52)))
{} else
{var c_22882 = om.dom.render((function (){var _STAR_descriptor_STAR_22843 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_22844 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_22845 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_22846 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22846;
om.core._STAR_state_STAR_ = _STAR_state_STAR_22845;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22844;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22843;
}})(),target);if(((function (){var G__22847 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22847) : cljs.core.deref.call(null,G__22847));
})() == null))
{var G__22848_22883 = ret;var G__22849_22884 = c_22882;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22848_22883,G__22849_22884) : cljs.core.reset_BANG_.call(null,G__22848_22883,G__22849_22884));
} else
{}
}
var queue_22885 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_22885))
{} else
{var seq__22850_22886 = cljs.core.seq(queue_22885);var chunk__22851_22887 = null;var count__22852_22888 = (0);var i__22853_22889 = (0);while(true){
if((i__22853_22889 < count__22852_22888))
{var c_22890 = chunk__22851_22887.cljs$core$IIndexed$_nth$arity$2(null,i__22853_22889);if(cljs.core.truth_(c_22890.isMounted()))
{var temp__4126__auto___22891 = (c_22890.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___22891))
{var next_props_22892 = temp__4126__auto___22891;(c_22890.props["__om_cursor"] = next_props_22892);
(c_22890.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_22890.shouldComponentUpdate(c_22890.props,c_22890.state)))
{c_22890.forceUpdate();
} else
{}
} else
{}
{
var G__22893 = seq__22850_22886;
var G__22894 = chunk__22851_22887;
var G__22895 = count__22852_22888;
var G__22896 = (i__22853_22889 + (1));
seq__22850_22886 = G__22893;
chunk__22851_22887 = G__22894;
count__22852_22888 = G__22895;
i__22853_22889 = G__22896;
continue;
}
} else
{var temp__4126__auto___22897 = cljs.core.seq(seq__22850_22886);if(temp__4126__auto___22897)
{var seq__22850_22898__$1 = temp__4126__auto___22897;if(cljs.core.chunked_seq_QMARK_(seq__22850_22898__$1))
{var c__4410__auto___22899 = cljs.core.chunk_first(seq__22850_22898__$1);{
var G__22900 = cljs.core.chunk_rest(seq__22850_22898__$1);
var G__22901 = c__4410__auto___22899;
var G__22902 = cljs.core.count(c__4410__auto___22899);
var G__22903 = (0);
seq__22850_22886 = G__22900;
chunk__22851_22887 = G__22901;
count__22852_22888 = G__22902;
i__22853_22889 = G__22903;
continue;
}
} else
{var c_22904 = cljs.core.first(seq__22850_22898__$1);if(cljs.core.truth_(c_22904.isMounted()))
{var temp__4126__auto___22905__$1 = (c_22904.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___22905__$1))
{var next_props_22906 = temp__4126__auto___22905__$1;(c_22904.props["__om_cursor"] = next_props_22906);
(c_22904.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_22904.shouldComponentUpdate(c_22904.props,c_22904.state)))
{c_22904.forceUpdate();
} else
{}
} else
{}
{
var G__22907 = cljs.core.next(seq__22850_22898__$1);
var G__22908 = null;
var G__22909 = (0);
var G__22910 = (0);
seq__22850_22886 = G__22907;
chunk__22851_22887 = G__22908;
count__22852_22888 = G__22909;
i__22853_22889 = G__22910;
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
var _refs_22911 = (function (){var G__22854 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22854) : cljs.core.deref.call(null,G__22854));
})();if(cljs.core.empty_QMARK_(_refs_22911))
{} else
{var seq__22855_22912 = cljs.core.seq(_refs_22911);var chunk__22856_22913 = null;var count__22857_22914 = (0);var i__22858_22915 = (0);while(true){
if((i__22858_22915 < count__22857_22914))
{var vec__22859_22916 = chunk__22856_22913.cljs$core$IIndexed$_nth$arity$2(null,i__22858_22915);var path_22917__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22916,(0),null);var cs_22918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22916,(1),null);var cs_22919__$1 = (function (){var G__22860 = cs_22918;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22860) : cljs.core.deref.call(null,G__22860));
})();var seq__22861_22920 = cljs.core.seq(cs_22919__$1);var chunk__22862_22921 = null;var count__22863_22922 = (0);var i__22864_22923 = (0);while(true){
if((i__22864_22923 < count__22863_22922))
{var vec__22865_22924 = chunk__22862_22921.cljs$core$IIndexed$_nth$arity$2(null,i__22864_22923);var id_22925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865_22924,(0),null);var c_22926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865_22924,(1),null);if(cljs.core.truth_(c_22926.shouldComponentUpdate(c_22926.props,c_22926.state)))
{c_22926.forceUpdate();
} else
{}
{
var G__22927 = seq__22861_22920;
var G__22928 = chunk__22862_22921;
var G__22929 = count__22863_22922;
var G__22930 = (i__22864_22923 + (1));
seq__22861_22920 = G__22927;
chunk__22862_22921 = G__22928;
count__22863_22922 = G__22929;
i__22864_22923 = G__22930;
continue;
}
} else
{var temp__4126__auto___22931 = cljs.core.seq(seq__22861_22920);if(temp__4126__auto___22931)
{var seq__22861_22932__$1 = temp__4126__auto___22931;if(cljs.core.chunked_seq_QMARK_(seq__22861_22932__$1))
{var c__4410__auto___22933 = cljs.core.chunk_first(seq__22861_22932__$1);{
var G__22934 = cljs.core.chunk_rest(seq__22861_22932__$1);
var G__22935 = c__4410__auto___22933;
var G__22936 = cljs.core.count(c__4410__auto___22933);
var G__22937 = (0);
seq__22861_22920 = G__22934;
chunk__22862_22921 = G__22935;
count__22863_22922 = G__22936;
i__22864_22923 = G__22937;
continue;
}
} else
{var vec__22866_22938 = cljs.core.first(seq__22861_22932__$1);var id_22939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_22938,(0),null);var c_22940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_22938,(1),null);if(cljs.core.truth_(c_22940.shouldComponentUpdate(c_22940.props,c_22940.state)))
{c_22940.forceUpdate();
} else
{}
{
var G__22941 = cljs.core.next(seq__22861_22932__$1);
var G__22942 = null;
var G__22943 = (0);
var G__22944 = (0);
seq__22861_22920 = G__22941;
chunk__22862_22921 = G__22942;
count__22863_22922 = G__22943;
i__22864_22923 = G__22944;
continue;
}
}
} else
{}
}
break;
}
{
var G__22945 = seq__22855_22912;
var G__22946 = chunk__22856_22913;
var G__22947 = count__22857_22914;
var G__22948 = (i__22858_22915 + (1));
seq__22855_22912 = G__22945;
chunk__22856_22913 = G__22946;
count__22857_22914 = G__22947;
i__22858_22915 = G__22948;
continue;
}
} else
{var temp__4126__auto___22949 = cljs.core.seq(seq__22855_22912);if(temp__4126__auto___22949)
{var seq__22855_22950__$1 = temp__4126__auto___22949;if(cljs.core.chunked_seq_QMARK_(seq__22855_22950__$1))
{var c__4410__auto___22951 = cljs.core.chunk_first(seq__22855_22950__$1);{
var G__22952 = cljs.core.chunk_rest(seq__22855_22950__$1);
var G__22953 = c__4410__auto___22951;
var G__22954 = cljs.core.count(c__4410__auto___22951);
var G__22955 = (0);
seq__22855_22912 = G__22952;
chunk__22856_22913 = G__22953;
count__22857_22914 = G__22954;
i__22858_22915 = G__22955;
continue;
}
} else
{var vec__22867_22956 = cljs.core.first(seq__22855_22950__$1);var path_22957__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22956,(0),null);var cs_22958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22956,(1),null);var cs_22959__$1 = (function (){var G__22868 = cs_22958;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22868) : cljs.core.deref.call(null,G__22868));
})();var seq__22869_22960 = cljs.core.seq(cs_22959__$1);var chunk__22870_22961 = null;var count__22871_22962 = (0);var i__22872_22963 = (0);while(true){
if((i__22872_22963 < count__22871_22962))
{var vec__22873_22964 = chunk__22870_22961.cljs$core$IIndexed$_nth$arity$2(null,i__22872_22963);var id_22965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873_22964,(0),null);var c_22966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873_22964,(1),null);if(cljs.core.truth_(c_22966.shouldComponentUpdate(c_22966.props,c_22966.state)))
{c_22966.forceUpdate();
} else
{}
{
var G__22967 = seq__22869_22960;
var G__22968 = chunk__22870_22961;
var G__22969 = count__22871_22962;
var G__22970 = (i__22872_22963 + (1));
seq__22869_22960 = G__22967;
chunk__22870_22961 = G__22968;
count__22871_22962 = G__22969;
i__22872_22963 = G__22970;
continue;
}
} else
{var temp__4126__auto___22971__$1 = cljs.core.seq(seq__22869_22960);if(temp__4126__auto___22971__$1)
{var seq__22869_22972__$1 = temp__4126__auto___22971__$1;if(cljs.core.chunked_seq_QMARK_(seq__22869_22972__$1))
{var c__4410__auto___22973 = cljs.core.chunk_first(seq__22869_22972__$1);{
var G__22974 = cljs.core.chunk_rest(seq__22869_22972__$1);
var G__22975 = c__4410__auto___22973;
var G__22976 = cljs.core.count(c__4410__auto___22973);
var G__22977 = (0);
seq__22869_22960 = G__22974;
chunk__22870_22961 = G__22975;
count__22871_22962 = G__22976;
i__22872_22963 = G__22977;
continue;
}
} else
{var vec__22874_22978 = cljs.core.first(seq__22869_22972__$1);var id_22979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874_22978,(0),null);var c_22980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874_22978,(1),null);if(cljs.core.truth_(c_22980.shouldComponentUpdate(c_22980.props,c_22980.state)))
{c_22980.forceUpdate();
} else
{}
{
var G__22981 = cljs.core.next(seq__22869_22972__$1);
var G__22982 = null;
var G__22983 = (0);
var G__22984 = (0);
seq__22869_22960 = G__22981;
chunk__22870_22961 = G__22982;
count__22871_22962 = G__22983;
i__22872_22963 = G__22984;
continue;
}
}
} else
{}
}
break;
}
{
var G__22985 = cljs.core.next(seq__22855_22950__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__22855_22912 = G__22985;
chunk__22856_22913 = G__22986;
count__22857_22914 = G__22987;
i__22858_22915 = G__22988;
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
var G__22875 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22875) : cljs.core.deref.call(null,G__22875));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$53))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$52,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$53,false);
if(cljs.core.contains_QMARK_((function (){var G__22876 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22876) : cljs.core.deref.call(null,G__22876));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__22877 = om.core.render_all;return requestAnimationFrame(G__22877);
} else
{var G__22878 = om.core.render_all;var G__22879 = (16);return setTimeout(G__22878,G__22879);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__22880 = target;return React.unmountComponentAtNode(G__22880);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__22801,map__22801__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22990 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22990) : cljs.core.deref.call(null,G__22990));
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
var key = (((function (){var G__23001 = cursor;if(G__23001)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__23001.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__23001.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__23001);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__23001);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__23002 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__23002) : om.core.path.call(null,G__23002));
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
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__23005 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23005) : f.call(null,G__23005));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__23006 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23006) : f.call(null,G__23006));
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
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__23009 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23009) : f.call(null,G__23009));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__23010 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23010) : f.call(null,G__23010));
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
