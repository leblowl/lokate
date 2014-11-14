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
om.core.IDisplayName = (function (){var obj25797 = {};return obj25797;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.display_name[(function (){var G__25801 = x__4277__auto__;return goog.typeOf(G__25801);
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
om.core.IInitState = (function (){var obj25803 = {};return obj25803;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.init_state[(function (){var G__25807 = x__4277__auto__;return goog.typeOf(G__25807);
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
om.core.IShouldUpdate = (function (){var obj25809 = {};return obj25809;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.should_update[(function (){var G__25813 = x__4277__auto__;return goog.typeOf(G__25813);
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
om.core.IWillMount = (function (){var obj25815 = {};return obj25815;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_mount[(function (){var G__25819 = x__4277__auto__;return goog.typeOf(G__25819);
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
om.core.IDidMount = (function (){var obj25821 = {};return obj25821;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_mount[(function (){var G__25825 = x__4277__auto__;return goog.typeOf(G__25825);
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
om.core.IWillUnmount = (function (){var obj25827 = {};return obj25827;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_unmount[(function (){var G__25831 = x__4277__auto__;return goog.typeOf(G__25831);
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
om.core.IWillUpdate = (function (){var obj25833 = {};return obj25833;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_update[(function (){var G__25837 = x__4277__auto__;return goog.typeOf(G__25837);
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
om.core.IDidUpdate = (function (){var obj25839 = {};return obj25839;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.did_update[(function (){var G__25843 = x__4277__auto__;return goog.typeOf(G__25843);
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
om.core.IWillReceiveProps = (function (){var obj25845 = {};return obj25845;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.will_receive_props[(function (){var G__25849 = x__4277__auto__;return goog.typeOf(G__25849);
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
om.core.IRender = (function (){var obj25851 = {};return obj25851;
})();
om.core.render = (function render(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render[(function (){var G__25855 = x__4277__auto__;return goog.typeOf(G__25855);
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
om.core.IRenderProps = (function (){var obj25857 = {};return obj25857;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_props[(function (){var G__25861 = x__4277__auto__;return goog.typeOf(G__25861);
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
om.core.IRenderState = (function (){var obj25863 = {};return obj25863;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core.render_state[(function (){var G__25867 = x__4277__auto__;return goog.typeOf(G__25867);
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
om.core.IOmSwap = (function (){var obj25869 = {};return obj25869;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._om_swap_BANG_[(function (){var G__25873 = x__4277__auto__;return goog.typeOf(G__25873);
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
om.core.IGetState = (function (){var obj25875 = {};return obj25875;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__25881 = x__4277__auto__;return goog.typeOf(G__25881);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_state[(function (){var G__25883 = x__4277__auto__;return goog.typeOf(G__25883);
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
om.core.IGetRenderState = (function (){var obj25885 = {};return obj25885;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__25891 = x__4277__auto__;return goog.typeOf(G__25891);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_render_state[(function (){var G__25893 = x__4277__auto__;return goog.typeOf(G__25893);
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
om.core.ISetState = (function (){var obj25895 = {};return obj25895;
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__25901 = x__4277__auto__;return goog.typeOf(G__25901);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_state_BANG_[(function (){var G__25903 = x__4277__auto__;return goog.typeOf(G__25903);
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
om.core.IRenderQueue = (function (){var obj25905 = {};return obj25905;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_queue[(function (){var G__25909 = x__4277__auto__;return goog.typeOf(G__25909);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._queue_render_BANG_[(function (){var G__25913 = x__4277__auto__;return goog.typeOf(G__25913);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._empty_queue_BANG_[(function (){var G__25917 = x__4277__auto__;return goog.typeOf(G__25917);
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
om.core.IValue = (function (){var obj25919 = {};return obj25919;
})();
om.core._value = (function _value(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._value[(function (){var G__25923 = x__4277__auto__;return goog.typeOf(G__25923);
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
om.core.ICursor = (function (){var obj25925 = {};return obj25925;
})();
om.core._path = (function _path(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._path[(function (){var G__25929 = x__4277__auto__;return goog.typeOf(G__25929);
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
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._state[(function (){var G__25933 = x__4277__auto__;return goog.typeOf(G__25933);
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
om.core.IToCursor = (function (){var obj25935 = {};return obj25935;
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
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__25941 = x__4277__auto__;return goog.typeOf(G__25941);
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
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (om.core._to_cursor[(function (){var G__25943 = x__4277__auto__;return goog.typeOf(G__25943);
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
om.core.ICursorDerive = (function (){var obj25945 = {};return obj25945;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._derive[(function (){var G__25949 = x__4277__auto__;return goog.typeOf(G__25949);
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
(om.core._derive["_"] = (function (this$,derived,state,path){var G__25950 = derived;var G__25951 = state;var G__25952 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__25950,G__25951,G__25952) : om.core.to_cursor.call(null,G__25950,G__25951,G__25952));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj25954 = {};return obj25954;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._transact_BANG_[(function (){var G__25958 = x__4277__auto__;return goog.typeOf(G__25958);
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
om.core.INotify = (function (){var obj25960 = {};return obj25960;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._listen_BANG_[(function (){var G__25964 = x__4277__auto__;return goog.typeOf(G__25964);
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
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._unlisten_BANG_[(function (){var G__25968 = x__4277__auto__;return goog.typeOf(G__25968);
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
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (om.core._notify_BANG_[(function (){var G__25972 = x__4277__auto__;return goog.typeOf(G__25972);
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
om.core.IRootProperties = (function (){var obj25974 = {};return obj25974;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._set_property_BANG_[(function (){var G__25978 = x__4277__auto__;return goog.typeOf(G__25978);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_property_BANG_[(function (){var G__25982 = x__4277__auto__;return goog.typeOf(G__25982);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_properties_BANG_[(function (){var G__25986 = x__4277__auto__;return goog.typeOf(G__25986);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_property[(function (){var G__25990 = x__4277__auto__;return goog.typeOf(G__25990);
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
om.core.IRootKey = (function (){var obj25992 = {};return obj25992;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3628__auto__ = cursor;if(and__3628__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3628__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4277__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3640__auto__ = (om.core._root_key[(function (){var G__25996 = x__4277__auto__;return goog.typeOf(G__25996);
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
om.core.IAdapt = (function (){var obj25998 = {};return obj25998;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._adapt[(function (){var G__26002 = x__4277__auto__;return goog.typeOf(G__26002);
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
om.core.IOmRef = (function (){var obj26004 = {};return obj26004;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._add_dep_BANG_[(function (){var G__26008 = x__4277__auto__;return goog.typeOf(G__26008);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._remove_dep_BANG_[(function (){var G__26012 = x__4277__auto__;return goog.typeOf(G__26012);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__26016 = x__4277__auto__;return goog.typeOf(G__26016);
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
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (om.core._get_deps[(function (){var G__26020 = x__4277__auto__;return goog.typeOf(G__26020);
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
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__26030 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26030) : cljs.core.deref.call(null,G__26030));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__26031 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26031) : om.core.path.call(null,G__26031));
})(),korks);var ret = (((function (){var G__26032 = state;if(G__26032)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26032.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__26032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__26032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__26032);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$32))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$33,path,cljs.core.constant$keyword$34,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$35,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26033 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26033) : cljs.core.deref.call(null,G__26033));
})(),path),cljs.core.constant$keyword$36,old_state,cljs.core.constant$keyword$37,(function (){var G__26034 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26034) : cljs.core.deref.call(null,G__26034));
})()], null);if(!((tag == null)))
{var G__26035 = cursor;var G__26036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$38,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__26035,G__26036) : om.core.notify_STAR_.call(null,G__26035,G__26036));
} else
{var G__26037 = cursor;var G__26038 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__26037,G__26038) : om.core.notify_STAR_.call(null,G__26037,G__26038));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__26040 = x;if(G__26040)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26040.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__26040.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__26040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__26040);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_26043 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__26044 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__26044) : c.call(null,G__26044));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26043;
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
{var pending_state = temp__4126__auto__;var G__26049 = state;(G__26049["__om_prev_state"] = (state["__om_state"]));
(G__26049["__om_state"] = pending_state);
(G__26049["__om_pending_state"] = null);
return G__26049;
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
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value(ref);var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__26054 = om.core.state(ref);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26054) : cljs.core.deref.call(null,G__26054));
})(),(function (){var G__26055 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26055) : om.core.path.call(null,G__26055));
})(),cljs.core.constant$keyword$39);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count(refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){var ref_val = om.core.value(ref);var ref_state = om.core.state(ref);var ref_path = (function (){var G__26061 = ref;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26061) : om.core.path.call(null,G__26061));
})();var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__26062 = ref_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26062) : cljs.core.deref.call(null,G__26062));
})(),ref_path,cljs.core.constant$keyword$39);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$39))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt(ref,(function (){var G__26063 = ref_val_SINGLEQUOTE_;var G__26064 = ref_state;var G__26065 = ref_path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__26063,G__26064,G__26065) : om.core.to_cursor.call(null,G__26063,G__26064,G__26065));
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$40,cljs.core.constant$keyword$41,cljs.core.constant$keyword$42,cljs.core.constant$keyword$43,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45,cljs.core.constant$keyword$46,cljs.core.constant$keyword$47,cljs.core.constant$keyword$48,cljs.core.constant$keyword$49],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__26067 = c;if(G__26067)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26067.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__26067.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26067);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26067);
}
})())
{var state_26102 = this$.state;var _STAR_read_enabled_STAR_26068_26103 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = (state_26102["__om_prev_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state_26102["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26068_26103;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__26069 = c;if(G__26069)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26069.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__26069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26069);
}
})())
{var _STAR_read_enabled_STAR_26070_26104 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26070_26104;
}} else
{}
var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__26071 = cljs.core.seq(refs);var chunk__26072 = null;var count__26073 = (0);var i__26074 = (0);while(true){
if((i__26074 < count__26073))
{var ref = chunk__26072.cljs$core$IIndexed$_nth$arity$2(null,i__26074);var G__26075_26105 = this$;var G__26076_26106 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__26075_26105,G__26076_26106) : om.core.unobserve.call(null,G__26075_26105,G__26076_26106));
{
var G__26107 = seq__26071;
var G__26108 = chunk__26072;
var G__26109 = count__26073;
var G__26110 = (i__26074 + (1));
seq__26071 = G__26107;
chunk__26072 = G__26108;
count__26073 = G__26109;
i__26074 = G__26110;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq(seq__26071);if(temp__4126__auto____$1)
{var seq__26071__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__26071__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__26071__$1);{
var G__26111 = cljs.core.chunk_rest(seq__26071__$1);
var G__26112 = c__4410__auto__;
var G__26113 = cljs.core.count(c__4410__auto__);
var G__26114 = (0);
seq__26071 = G__26111;
chunk__26072 = G__26112;
count__26073 = G__26113;
i__26074 = G__26114;
continue;
}
} else
{var ref = cljs.core.first(seq__26071__$1);var G__26077_26115 = this$;var G__26078_26116 = ref;(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__26077_26115,G__26078_26116) : om.core.unobserve.call(null,G__26077_26115,G__26078_26116));
{
var G__26117 = cljs.core.next(seq__26071__$1);
var G__26118 = null;
var G__26119 = (0);
var G__26120 = (0);
seq__26071 = G__26117;
chunk__26072 = G__26118;
count__26073 = G__26119;
i__26074 = G__26120;
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
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__26079 = c;if(G__26079)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26079.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__26079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__26079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__26079);
}
})())
{var _STAR_read_enabled_STAR_26080 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26080;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_26081 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__26082 = c;if(G__26082)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26082.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__26082.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__26082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__26082);
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
{return cljs.core.some(((function (and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_26081,this$){
return (function (p1__26066_SHARP_){return om.core.ref_changed_QMARK_(p1__26066_SHARP_);
});})(and__3628__auto__,cursor,next_cursor,props,state,c,_STAR_read_enabled_STAR_26081,this$))
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26081;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_parent_STAR_26083 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_26084 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_26085 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_26086 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_26087 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
var _STAR_read_enabled_STAR_26088 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__26089 = c;if(G__26089)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26089.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__26089.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26089);
}
})())
{return om.core.render(c);
} else
{if((function (){var G__26090 = c;if(G__26090)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26090.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__26090.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__26090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__26090);
}
})())
{return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if((function (){var G__26091 = c;if(G__26091)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26091.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__26091.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26091);
}
})())
{return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26088;
}}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_26087;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_26086;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_26085;
om.core._STAR_state_STAR_ = _STAR_state_STAR_26084;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_26083;
}}),(function (next_props,next_state){var this$ = this;var c_26121 = om.core.children(this$);if((function (){var G__26092 = c_26121;if(G__26092)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26092.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__26092.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26092);
}
})())
{var state_26122 = this$.state;var _STAR_read_enabled_STAR_26093_26123 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_26121,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26093_26123;
}} else
{}
om.core.merge_pending_state(this$);
return om.core.update_refs(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3640__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__26094 = c;if(G__26094)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26094.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__26094.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26094);
}
})())?(function (){var _STAR_read_enabled_STAR_26095 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26095;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$50)], 0)), "__om_id": (function (){var or__3640__auto__ = id;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__26096 = c;if(G__26096)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26096.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__26096.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__26096);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__26096);
}
})())
{var _STAR_read_enabled_STAR_26097 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26097;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__26098 = c;if(G__26098)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26098.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__26098.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__26098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__26098);
}
})())
{var _STAR_read_enabled_STAR_26099 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26099;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_26124 = om.core.children(this$);if((function (){var G__26100 = c_26124;if(G__26100)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26100.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__26100.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26100);
}
})())
{var _STAR_read_enabled_STAR_26101_26125 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_26124);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26101_26125;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x26129 = obj;x26129.om$core$IGetState$ = true;
x26129.om$core$IGetState$_get_state$arity$1 = ((function (x26129){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3640__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (state["__om_state"]);
}
});})(x26129))
;
x26129.om$core$IGetState$_get_state$arity$2 = ((function (x26129){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26129))
;
x26129.om$core$IGetRenderState$ = true;
x26129.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x26129){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x26129))
;
x26129.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x26129){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26129))
;
x26129.om$core$ISetState$ = true;
x26129.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x26129){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_26130 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26130;
}});})(x26129))
;
x26129.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x26129){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_26131 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26131;
}});})(x26129))
;
return x26129;
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
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate(owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(owner)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26133 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26133) : cljs.core.deref.call(null,G__26133));
})(),spath);if(cljs.core.truth_(cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$53,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$52);
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$46,(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3640__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3640__auto__ = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$50),(((function (){var G__26134 = c;if(G__26134)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26134.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__26134.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26134);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__26134);
}
})())?(function (){var _STAR_read_enabled_STAR_26135 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26135;
}})():null)], 0));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$),cljs.core.constant$keyword$53], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$49,(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_26145 = om.core.children(this$);if((function (){var G__26136 = c_26145;if(G__26136)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26136.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__26136.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26136);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__26136);
}
})())
{var _STAR_read_enabled_STAR_26137_26146 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_26145);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26137_26146;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$41,(function (){var this$ = this;var c = om.core.children(this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$)], null);if((function (){var G__26138 = c;if(G__26138)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26138.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__26138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__26138);
}
})())
{var _STAR_read_enabled_STAR_26139_26147 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26139_26147;
}} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),cljs.core.constant$keyword$45,(function (next_props,next_state){var this$ = this;var props_26148 = this$.props;var c_26149 = om.core.children(this$);if((function (){var G__26140 = c_26149;if(G__26140)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26140.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__26140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__26140);
}
})())
{var state_26150 = this$.state;var _STAR_read_enabled_STAR_26141_26151 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_26149,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26141_26151;
}} else
{}
return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$40,(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);var gstate = om.core.get_gstate(this$);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26142 = gstate;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26142) : cljs.core.deref.call(null,G__26142));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$)], null);if((function (){var G__26143 = c;if(G__26143)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26143.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__26143.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__26143);
}
})())
{var state_26152 = this$.state;var _STAR_read_enabled_STAR_26144_26153 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3640__auto__ = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26144_26153;
}} else
{}
if(cljs.core.truth_(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$54], 0));
} else
{return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x26159 = cljs.core.clj__GT_js(methods$);x26159.om$core$IGetState$ = true;
x26159.om$core$IGetState$_get_state$arity$1 = ((function (x26159){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$__$1)], null);var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26160 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26160) : cljs.core.deref.call(null,G__26160));
})(),spath);var or__3640__auto__ = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x26159))
;
x26159.om$core$IGetState$_get_state$arity$2 = ((function (x26159){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26159))
;
x26159.om$core$IGetRenderState$ = true;
x26159.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x26159){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$__$1),cljs.core.constant$keyword$53], null);return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26161 = om.core.get_gstate(this$__$1);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26161) : cljs.core.deref.call(null,G__26161));
})(),spath);
});})(x26159))
;
x26159.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x26159){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x26159))
;
x26159.om$core$ISetState$ = true;
x26159.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x26159){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_26162 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$__$1),cljs.core.constant$keyword$52], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26162;
}});})(x26159))
;
x26159.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x26159){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_26163 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,om.core.react_id(this$__$1),cljs.core.constant$keyword$52], null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$__$1),cljs.core.update_in,spath,cljs.core.assoc_in,cljs.core.array_seq([ks,val], 0));
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
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26163;
}});})(x26159))
;
return x26159;
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
return (function (p__26165){var vec__26166 = p__26165;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26166,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
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
var G__26168 = null;
var G__26168__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26168__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26168 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26168__2.call(this,self__,k);
case 3:
return G__26168__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26168.cljs$core$IFn$_invoke$arity$2 = G__26168__2;
G__26168.cljs$core$IFn$_invoke$arity$3 = G__26168__3;
return G__26168;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args26164){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26164)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26167 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26167) : cljs.core.deref.call(null,G__26167));
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
var G__26171 = null;
var G__26171__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26171__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26171 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26171__2.call(this,self__,k);
case 3:
return G__26171__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26171.cljs$core$IFn$_invoke$arity$2 = G__26171__2;
G__26171.cljs$core$IFn$_invoke$arity$3 = G__26171__3;
return G__26171;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args26169){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26169)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26170 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26170) : cljs.core.deref.call(null,G__26170));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x26174 = cljs.core.clone(val);x26174.cljs$core$IEquiv$ = true;
x26174.cljs$core$IEquiv$_equiv$arity$2 = ((function (x26174){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x26174))
;
x26174.om$core$ITransact$ = true;
x26174.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x26174){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x26174))
;
x26174.om$core$ICursor$ = true;
x26174.om$core$ICursor$_path$arity$1 = ((function (x26174){
return (function (_){var ___$1 = this;return path;
});})(x26174))
;
x26174.om$core$ICursor$_state$arity$1 = ((function (x26174){
return (function (_){var ___$1 = this;return state;
});})(x26174))
;
x26174.cljs$core$IDeref$ = true;
x26174.cljs$core$IDeref$_deref$arity$1 = ((function (x26174){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26175 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26175) : cljs.core.deref.call(null,G__26175));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x26174))
;
return x26174;
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
{if((function (){var G__26184 = val;if(G__26184)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26184.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__26184.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__26184);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__26184);
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
{if((function (){var G__26185 = val;if(G__26185)
{var bit__4304__auto__ = (G__26185.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4304__auto__) || (G__26185.cljs$core$ICloneable$))
{return true;
} else
{if((!G__26185.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__26185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__26185);
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
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__26187 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26187) : cljs.core.deref.call(null,G__26187));
})(),state));
});
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__26189 = atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26189) : cljs.core.deref.call(null,G__26189));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__26190 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26190) : cljs.core.atom.call(null,G__26190));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x26198 = cljs.core.clone(x);x26198.om$core$ITransact$ = true;
x26198.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x26198){
return (function (cursor,korks,f,tag){var cursor__$1 = this;var G__26199_26202 = cursor__$1;var G__26200_26203 = korks;var G__26201_26204 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__26199_26202,G__26200_26203,G__26201_26204) : om.core.commit_BANG_.call(null,G__26199_26202,G__26200_26203,G__26201_26204));
return om.core._refresh_deps_BANG_(parent);
});})(x26198))
;
x26198.om$core$ICursorDerive$ = true;
x26198.om$core$ICursorDerive$_derive$arity$4 = ((function (x26198){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x26198))
;
x26198.om$core$IAdapt$ = true;
x26198.om$core$IAdapt$_adapt$arity$2 = ((function (x26198){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor(om.core.adapt(x,other));
});})(x26198))
;
x26198.cljs$core$ICloneable$ = true;
x26198.cljs$core$ICloneable$_clone$arity$1 = ((function (x26198){
return (function (this$){var this$__$1 = this;return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x26198))
;
return x26198;
});
om.core.ref_cursor = (function ref_cursor(cursor){var path = (function (){var G__26219 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26219) : om.core.path.call(null,G__26219));
})();var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__26220 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26220) : cljs.core.atom.call(null,G__26220));
})())),path);var x26221 = cljs.core.clone(cursor);x26221.om$core$ITransact$ = true;
x26221.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x26221,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;var G__26222_26233 = cursor__$2;var G__26223_26234 = korks;var G__26224_26235 = f;(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__26222_26233,G__26223_26234,G__26224_26235) : om.core.commit_BANG_.call(null,G__26222_26233,G__26223_26234,G__26224_26235));
return om.core._refresh_deps_BANG_(cursor__$2);
});})(x26221,path,storage))
;
x26221.om$core$IOmRef$ = true;
x26221.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x26221,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__26225 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__26225) : om.core.id.call(null,G__26225));
})(),c);
});})(x26221,path,storage))
;
x26221.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x26221,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__26226 = c;return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__26226) : om.core.id.call(null,G__26226));
})());
});})(x26221,path,storage))
;
x26221.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x26221,path,storage){
return (function (_){var ___$1 = this;var seq__26227 = cljs.core.seq(cljs.core.vals((function (){var G__26231 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26231) : cljs.core.deref.call(null,G__26231));
})()));var chunk__26228 = null;var count__26229 = (0);var i__26230 = (0);while(true){
if((i__26230 < count__26229))
{var c = chunk__26228.cljs$core$IIndexed$_nth$arity$2(null,i__26230);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__26236 = seq__26227;
var G__26237 = chunk__26228;
var G__26238 = count__26229;
var G__26239 = (i__26230 + (1));
seq__26227 = G__26236;
chunk__26228 = G__26237;
count__26229 = G__26238;
i__26230 = G__26239;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__26227);if(temp__4126__auto__)
{var seq__26227__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26227__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__26227__$1);{
var G__26240 = cljs.core.chunk_rest(seq__26227__$1);
var G__26241 = c__4410__auto__;
var G__26242 = cljs.core.count(c__4410__auto__);
var G__26243 = (0);
seq__26227 = G__26240;
chunk__26228 = G__26241;
count__26229 = G__26242;
i__26230 = G__26243;
continue;
}
} else
{var c = cljs.core.first(seq__26227__$1);om.core._queue_render_BANG_(om.core.state(cursor),c);
{
var G__26244 = cljs.core.next(seq__26227__$1);
var G__26245 = null;
var G__26246 = (0);
var G__26247 = (0);
seq__26227 = G__26244;
chunk__26228 = G__26245;
count__26229 = G__26246;
i__26230 = G__26247;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x26221,path,storage))
;
x26221.om$core$IOmRef$_get_deps$arity$1 = ((function (x26221,path,storage){
return (function (_){var ___$1 = this;var G__26232 = storage;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26232) : cljs.core.deref.call(null,G__26232));
});})(x26221,path,storage))
;
x26221.om$core$ICursorDerive$ = true;
x26221.om$core$ICursorDerive$_derive$arity$4 = ((function (x26221,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x26221,path,storage))
;
return x26221;
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
om.core.refresh_set = (function (){var G__26248 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26248) : cljs.core.atom.call(null,G__26248));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__26254 = cljs.core.seq((function (){var G__26258 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26258) : cljs.core.deref.call(null,G__26258));
})());var chunk__26255 = null;var count__26256 = (0);var i__26257 = (0);while(true){
if((i__26257 < count__26256))
{var f = chunk__26255.cljs$core$IIndexed$_nth$arity$2(null,i__26257);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__26259 = seq__26254;
var G__26260 = chunk__26255;
var G__26261 = count__26256;
var G__26262 = (i__26257 + (1));
seq__26254 = G__26259;
chunk__26255 = G__26260;
count__26256 = G__26261;
i__26257 = G__26262;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__26254);if(temp__4126__auto__)
{var seq__26254__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26254__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__26254__$1);{
var G__26263 = cljs.core.chunk_rest(seq__26254__$1);
var G__26264 = c__4410__auto__;
var G__26265 = cljs.core.count(c__4410__auto__);
var G__26266 = (0);
seq__26254 = G__26263;
chunk__26255 = G__26264;
count__26256 = G__26265;
i__26257 = G__26266;
continue;
}
} else
{var f = cljs.core.first(seq__26254__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__26267 = cljs.core.next(seq__26254__$1);
var G__26268 = null;
var G__26269 = (0);
var G__26270 = (0);
seq__26254 = G__26267;
chunk__26255 = G__26268;
count__26256 = G__26269;
i__26257 = G__26270;
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
om.core.roots = (function (){var G__26271 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26271) : cljs.core.atom.call(null,G__26271));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3640__auto__ = (function (){var G__26278 = x;if(G__26278)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26278.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__26278.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26278);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__26278);
}
})();if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__26280 = x;if(G__26280)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$1 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return G__26280.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__26280.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__26280);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__26280);
}
})();if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var G__26281 = x;if(G__26281)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$2 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{return G__26281.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__26281.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__26281);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$55,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$60,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$63,null,cljs.core.constant$keyword$64,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__26285 = (function (){var or__3640__auto__ = descriptor;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})();return React.createClass(G__26285);
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
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__26305 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_26306 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__26307 = cursor;var G__26308 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26307,G__26308) : f.call(null,G__26307,G__26308));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26306;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__26305) : ctor.call(null,G__26305));
} else
{var map__26309 = m;var map__26309__$1 = ((cljs.core.seq_QMARK_(map__26309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26309):map__26309);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26309__$1,cljs.core.constant$keyword$62);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26309__$1,cljs.core.constant$keyword$60);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26309__$1,cljs.core.constant$keyword$61);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26309__$1,cljs.core.constant$keyword$59);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$56);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__26310 = cursor;var G__26311 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__26310,G__26311) : dataf.call(null,G__26310,G__26311));
} else
{var G__26312 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__26312) : dataf.call(null,G__26312));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$58));var shared = (function (){var or__3640__auto__ = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(m));var G__26313 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__26309,map__26309__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_26314 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__26315 = cursor_SINGLEQUOTE_;var G__26316 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26315,G__26316) : f.call(null,G__26315,G__26316));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26314;
}});})(map__26309,map__26309__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__26309,map__26309__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_26317 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__26318 = cursor_SINGLEQUOTE_;var G__26319 = this$;var G__26320 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26318,G__26319,G__26320) : f.call(null,G__26318,G__26319,G__26320));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26317;
}});})(map__26309,map__26309__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__26313) : ctor.call(null,G__26313));

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
{var ret = (function (){var _STAR_read_enabled_STAR_26328 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__26329 = f;var G__26330 = x;var G__26331 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__26329,G__26330,G__26331) : om.core._STAR_instrument_STAR_.call(null,G__26329,G__26330,G__26331));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_26328;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$65))
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
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$63,i));
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
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__26354 = state;if(G__26354)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26354.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__26354.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__26354);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__26354);
}
})())
{} else
{var properties_26373 = (function (){var G__26355 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26355) : cljs.core.atom.call(null,G__26355));
})();var listeners_26374 = (function (){var G__26356 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26356) : cljs.core.atom.call(null,G__26356));
})();var render_queue_26375 = (function (){var G__26357 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26357) : cljs.core.atom.call(null,G__26357));
})();var x26358_26376 = state;x26358_26376.om$core$IRenderQueue$ = true;
x26358_26376.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$){var this$__$1 = this;var G__26359 = render_queue_26375;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26359) : cljs.core.deref.call(null,G__26359));
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__26360 = render_queue_26375;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26360) : cljs.core.deref.call(null,G__26360));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_26375,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_26375,cljs.core.empty);
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$INotify$ = true;
x26358_26376.om$core$INotify$_listen_BANG_$arity$3 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_26374,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_26374,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$INotify$_notify_BANG_$arity$3 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__26361_26377 = cljs.core.seq((function (){var G__26365 = listeners_26374;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26365) : cljs.core.deref.call(null,G__26365));
})());var chunk__26362_26378 = null;var count__26363_26379 = (0);var i__26364_26380 = (0);while(true){
if((i__26364_26380 < count__26363_26379))
{var vec__26366_26381 = chunk__26362_26378.cljs$core$IIndexed$_nth$arity$2(null,i__26364_26380);var __26382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26366_26381,(0),null);var f_26383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26366_26381,(1),null);var G__26367_26384 = tx_data;var G__26368_26385 = root_cursor;(f_26383.cljs$core$IFn$_invoke$arity$2 ? f_26383.cljs$core$IFn$_invoke$arity$2(G__26367_26384,G__26368_26385) : f_26383.call(null,G__26367_26384,G__26368_26385));
{
var G__26386 = seq__26361_26377;
var G__26387 = chunk__26362_26378;
var G__26388 = count__26363_26379;
var G__26389 = (i__26364_26380 + (1));
seq__26361_26377 = G__26386;
chunk__26362_26378 = G__26387;
count__26363_26379 = G__26388;
i__26364_26380 = G__26389;
continue;
}
} else
{var temp__4126__auto___26390 = cljs.core.seq(seq__26361_26377);if(temp__4126__auto___26390)
{var seq__26361_26391__$1 = temp__4126__auto___26390;if(cljs.core.chunked_seq_QMARK_(seq__26361_26391__$1))
{var c__4410__auto___26392 = cljs.core.chunk_first(seq__26361_26391__$1);{
var G__26393 = cljs.core.chunk_rest(seq__26361_26391__$1);
var G__26394 = c__4410__auto___26392;
var G__26395 = cljs.core.count(c__4410__auto___26392);
var G__26396 = (0);
seq__26361_26377 = G__26393;
chunk__26362_26378 = G__26394;
count__26363_26379 = G__26395;
i__26364_26380 = G__26396;
continue;
}
} else
{var vec__26369_26397 = cljs.core.first(seq__26361_26391__$1);var __26398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26369_26397,(0),null);var f_26399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26369_26397,(1),null);var G__26370_26400 = tx_data;var G__26371_26401 = root_cursor;(f_26399.cljs$core$IFn$_invoke$arity$2 ? f_26399.cljs$core$IFn$_invoke$arity$2(G__26370_26400,G__26371_26401) : f_26399.call(null,G__26370_26400,G__26371_26401));
{
var G__26402 = cljs.core.next(seq__26361_26391__$1);
var G__26403 = null;
var G__26404 = (0);
var G__26405 = (0);
seq__26361_26377 = G__26402;
chunk__26362_26378 = G__26403;
count__26363_26379 = G__26404;
i__26364_26380 = G__26405;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRootProperties$ = true;
x26358_26376.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_26373,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_26373,cljs.core.dissoc,id,k);
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_26373,cljs.core.dissoc,id);
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
x26358_26376.om$core$IRootProperties$_get_property$arity$3 = ((function (x26358_26376,properties_26373,listeners_26374,render_queue_26375){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26372 = properties_26373;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26372) : cljs.core.deref.call(null,G__26372));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x26358_26376,properties_26373,listeners_26374,render_queue_26375))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_(cursor))
{var x26411 = cljs.core.clone(cursor);x26411.om$core$IRootKey$ = true;
x26411.om$core$IRootKey$_root_key$arity$1 = ((function (x26411){
return (function (this$){var this$__$1 = this;return root_key;
});})(x26411))
;
x26411.om$core$IAdapt$ = true;
x26411.om$core$IAdapt$_adapt$arity$2 = ((function (x26411){
return (function (this$,other){var this$__$1 = this;return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x26411))
;
x26411.cljs$core$ICloneable$ = true;
x26411.cljs$core$ICloneable$_clone$arity$1 = ((function (x26411){
return (function (this$){var this$__$1 = this;return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x26411))
;
return x26411;
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
om.core.root = (function root(f,value,p__26412){var map__26493 = p__26412;var map__26493__$1 = ((cljs.core.seq_QMARK_(map__26493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26493):map__26493);var options = map__26493__$1;var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$66);var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$55);var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$57);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$33);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$67);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,cljs.core.constant$keyword$68);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__26573 = (function (){var G__26494 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26494) : cljs.core.deref.call(null,G__26494));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__26573,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__26573,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__26495 = value;if(G__26495)
{var bit__4304__auto__ = (G__26495.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4304__auto__) || (G__26495.cljs$core$IAtom$))
{return true;
} else
{if((!G__26495.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__26495);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__26495);
}
})())?value:(function (){var G__26496 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26496) : cljs.core.atom.call(null,G__26496));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3640__auto__ = adapt;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$68,cljs.core.array_seq([cljs.core.constant$keyword$67,cljs.core.constant$keyword$33,cljs.core.constant$keyword$66], 0));var ret = (function (){var G__26497 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26497) : cljs.core.atom.call(null,G__26497));
})();var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__26533 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26533) : cljs.core.deref.call(null,G__26533));
})();var cursor = (function (){var G__26534 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__26534) : adapt__$1.call(null,G__26534));
})();if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$69)))
{} else
{var c_26574 = om.dom.render((function (){var _STAR_descriptor_STAR_26535 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_26536 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_26537 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_26538 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_26538;
om.core._STAR_state_STAR_ = _STAR_state_STAR_26537;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_26536;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_26535;
}})(),target);if(((function (){var G__26539 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26539) : cljs.core.deref.call(null,G__26539));
})() == null))
{var G__26540_26575 = ret;var G__26541_26576 = c_26574;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26540_26575,G__26541_26576) : cljs.core.reset_BANG_.call(null,G__26540_26575,G__26541_26576));
} else
{}
}
var queue_26577 = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue_26577))
{} else
{var seq__26542_26578 = cljs.core.seq(queue_26577);var chunk__26543_26579 = null;var count__26544_26580 = (0);var i__26545_26581 = (0);while(true){
if((i__26545_26581 < count__26544_26580))
{var c_26582 = chunk__26543_26579.cljs$core$IIndexed$_nth$arity$2(null,i__26545_26581);if(cljs.core.truth_(c_26582.isMounted()))
{var temp__4126__auto___26583 = (c_26582.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___26583))
{var next_props_26584 = temp__4126__auto___26583;(c_26582.props["__om_cursor"] = next_props_26584);
(c_26582.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_26582.shouldComponentUpdate(c_26582.props,c_26582.state)))
{c_26582.forceUpdate();
} else
{}
} else
{}
{
var G__26585 = seq__26542_26578;
var G__26586 = chunk__26543_26579;
var G__26587 = count__26544_26580;
var G__26588 = (i__26545_26581 + (1));
seq__26542_26578 = G__26585;
chunk__26543_26579 = G__26586;
count__26544_26580 = G__26587;
i__26545_26581 = G__26588;
continue;
}
} else
{var temp__4126__auto___26589 = cljs.core.seq(seq__26542_26578);if(temp__4126__auto___26589)
{var seq__26542_26590__$1 = temp__4126__auto___26589;if(cljs.core.chunked_seq_QMARK_(seq__26542_26590__$1))
{var c__4410__auto___26591 = cljs.core.chunk_first(seq__26542_26590__$1);{
var G__26592 = cljs.core.chunk_rest(seq__26542_26590__$1);
var G__26593 = c__4410__auto___26591;
var G__26594 = cljs.core.count(c__4410__auto___26591);
var G__26595 = (0);
seq__26542_26578 = G__26592;
chunk__26543_26579 = G__26593;
count__26544_26580 = G__26594;
i__26545_26581 = G__26595;
continue;
}
} else
{var c_26596 = cljs.core.first(seq__26542_26590__$1);if(cljs.core.truth_(c_26596.isMounted()))
{var temp__4126__auto___26597__$1 = (c_26596.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___26597__$1))
{var next_props_26598 = temp__4126__auto___26597__$1;(c_26596.props["__om_cursor"] = next_props_26598);
(c_26596.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_(c_26596.shouldComponentUpdate(c_26596.props,c_26596.state)))
{c_26596.forceUpdate();
} else
{}
} else
{}
{
var G__26599 = cljs.core.next(seq__26542_26590__$1);
var G__26600 = null;
var G__26601 = (0);
var G__26602 = (0);
seq__26542_26578 = G__26599;
chunk__26543_26579 = G__26600;
count__26544_26580 = G__26601;
i__26545_26581 = G__26602;
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
var _refs_26603 = (function (){var G__26546 = om.core._refs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26546) : cljs.core.deref.call(null,G__26546));
})();if(cljs.core.empty_QMARK_(_refs_26603))
{} else
{var seq__26547_26604 = cljs.core.seq(_refs_26603);var chunk__26548_26605 = null;var count__26549_26606 = (0);var i__26550_26607 = (0);while(true){
if((i__26550_26607 < count__26549_26606))
{var vec__26551_26608 = chunk__26548_26605.cljs$core$IIndexed$_nth$arity$2(null,i__26550_26607);var path_26609__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551_26608,(0),null);var cs_26610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26551_26608,(1),null);var cs_26611__$1 = (function (){var G__26552 = cs_26610;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26552) : cljs.core.deref.call(null,G__26552));
})();var seq__26553_26612 = cljs.core.seq(cs_26611__$1);var chunk__26554_26613 = null;var count__26555_26614 = (0);var i__26556_26615 = (0);while(true){
if((i__26556_26615 < count__26555_26614))
{var vec__26557_26616 = chunk__26554_26613.cljs$core$IIndexed$_nth$arity$2(null,i__26556_26615);var id_26617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26557_26616,(0),null);var c_26618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26557_26616,(1),null);if(cljs.core.truth_(c_26618.shouldComponentUpdate(c_26618.props,c_26618.state)))
{c_26618.forceUpdate();
} else
{}
{
var G__26619 = seq__26553_26612;
var G__26620 = chunk__26554_26613;
var G__26621 = count__26555_26614;
var G__26622 = (i__26556_26615 + (1));
seq__26553_26612 = G__26619;
chunk__26554_26613 = G__26620;
count__26555_26614 = G__26621;
i__26556_26615 = G__26622;
continue;
}
} else
{var temp__4126__auto___26623 = cljs.core.seq(seq__26553_26612);if(temp__4126__auto___26623)
{var seq__26553_26624__$1 = temp__4126__auto___26623;if(cljs.core.chunked_seq_QMARK_(seq__26553_26624__$1))
{var c__4410__auto___26625 = cljs.core.chunk_first(seq__26553_26624__$1);{
var G__26626 = cljs.core.chunk_rest(seq__26553_26624__$1);
var G__26627 = c__4410__auto___26625;
var G__26628 = cljs.core.count(c__4410__auto___26625);
var G__26629 = (0);
seq__26553_26612 = G__26626;
chunk__26554_26613 = G__26627;
count__26555_26614 = G__26628;
i__26556_26615 = G__26629;
continue;
}
} else
{var vec__26558_26630 = cljs.core.first(seq__26553_26624__$1);var id_26631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558_26630,(0),null);var c_26632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558_26630,(1),null);if(cljs.core.truth_(c_26632.shouldComponentUpdate(c_26632.props,c_26632.state)))
{c_26632.forceUpdate();
} else
{}
{
var G__26633 = cljs.core.next(seq__26553_26624__$1);
var G__26634 = null;
var G__26635 = (0);
var G__26636 = (0);
seq__26553_26612 = G__26633;
chunk__26554_26613 = G__26634;
count__26555_26614 = G__26635;
i__26556_26615 = G__26636;
continue;
}
}
} else
{}
}
break;
}
{
var G__26637 = seq__26547_26604;
var G__26638 = chunk__26548_26605;
var G__26639 = count__26549_26606;
var G__26640 = (i__26550_26607 + (1));
seq__26547_26604 = G__26637;
chunk__26548_26605 = G__26638;
count__26549_26606 = G__26639;
i__26550_26607 = G__26640;
continue;
}
} else
{var temp__4126__auto___26641 = cljs.core.seq(seq__26547_26604);if(temp__4126__auto___26641)
{var seq__26547_26642__$1 = temp__4126__auto___26641;if(cljs.core.chunked_seq_QMARK_(seq__26547_26642__$1))
{var c__4410__auto___26643 = cljs.core.chunk_first(seq__26547_26642__$1);{
var G__26644 = cljs.core.chunk_rest(seq__26547_26642__$1);
var G__26645 = c__4410__auto___26643;
var G__26646 = cljs.core.count(c__4410__auto___26643);
var G__26647 = (0);
seq__26547_26604 = G__26644;
chunk__26548_26605 = G__26645;
count__26549_26606 = G__26646;
i__26550_26607 = G__26647;
continue;
}
} else
{var vec__26559_26648 = cljs.core.first(seq__26547_26642__$1);var path_26649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26559_26648,(0),null);var cs_26650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26559_26648,(1),null);var cs_26651__$1 = (function (){var G__26560 = cs_26650;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26560) : cljs.core.deref.call(null,G__26560));
})();var seq__26561_26652 = cljs.core.seq(cs_26651__$1);var chunk__26562_26653 = null;var count__26563_26654 = (0);var i__26564_26655 = (0);while(true){
if((i__26564_26655 < count__26563_26654))
{var vec__26565_26656 = chunk__26562_26653.cljs$core$IIndexed$_nth$arity$2(null,i__26564_26655);var id_26657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26565_26656,(0),null);var c_26658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26565_26656,(1),null);if(cljs.core.truth_(c_26658.shouldComponentUpdate(c_26658.props,c_26658.state)))
{c_26658.forceUpdate();
} else
{}
{
var G__26659 = seq__26561_26652;
var G__26660 = chunk__26562_26653;
var G__26661 = count__26563_26654;
var G__26662 = (i__26564_26655 + (1));
seq__26561_26652 = G__26659;
chunk__26562_26653 = G__26660;
count__26563_26654 = G__26661;
i__26564_26655 = G__26662;
continue;
}
} else
{var temp__4126__auto___26663__$1 = cljs.core.seq(seq__26561_26652);if(temp__4126__auto___26663__$1)
{var seq__26561_26664__$1 = temp__4126__auto___26663__$1;if(cljs.core.chunked_seq_QMARK_(seq__26561_26664__$1))
{var c__4410__auto___26665 = cljs.core.chunk_first(seq__26561_26664__$1);{
var G__26666 = cljs.core.chunk_rest(seq__26561_26664__$1);
var G__26667 = c__4410__auto___26665;
var G__26668 = cljs.core.count(c__4410__auto___26665);
var G__26669 = (0);
seq__26561_26652 = G__26666;
chunk__26562_26653 = G__26667;
count__26563_26654 = G__26668;
i__26564_26655 = G__26669;
continue;
}
} else
{var vec__26566_26670 = cljs.core.first(seq__26561_26664__$1);var id_26671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566_26670,(0),null);var c_26672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26566_26670,(1),null);if(cljs.core.truth_(c_26672.shouldComponentUpdate(c_26672.props,c_26672.state)))
{c_26672.forceUpdate();
} else
{}
{
var G__26673 = cljs.core.next(seq__26561_26664__$1);
var G__26674 = null;
var G__26675 = (0);
var G__26676 = (0);
seq__26561_26652 = G__26673;
chunk__26562_26653 = G__26674;
count__26563_26654 = G__26675;
i__26564_26655 = G__26676;
continue;
}
}
} else
{}
}
break;
}
{
var G__26677 = cljs.core.next(seq__26547_26642__$1);
var G__26678 = null;
var G__26679 = (0);
var G__26680 = (0);
seq__26547_26604 = G__26677;
chunk__26548_26605 = G__26678;
count__26549_26606 = G__26679;
i__26550_26607 = G__26680;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$69,true);
var G__26567 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26567) : cljs.core.deref.call(null,G__26567));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$70))) && (!((o === n))))
{om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$69,false);
} else
{}
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$70,false);
if(cljs.core.contains_QMARK_((function (){var G__26568 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26568) : cljs.core.deref.call(null,G__26568));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__26569 = om.core.render_all;return requestAnimationFrame(G__26569);
} else
{var G__26570 = om.core.render_all;var G__26571 = (16);return setTimeout(G__26570,G__26571);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_(state__$1,watch_key);
cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__26572 = target;return React.unmountComponentAtNode(G__26572);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__26493,map__26493__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26682 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26682) : cljs.core.deref.call(null,G__26682));
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
var key = (((function (){var G__26693 = cursor;if(G__26693)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__26693.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__26693.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__26693);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__26693);
}
})())?om.core._root_key(cursor):null);var app_state = om.core.state(cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = (function (){var G__26694 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__26694) : om.core.path.call(null,G__26694));
})();var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$70,true);
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
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__26697 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26697) : f.call(null,G__26697));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__26698 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26698) : f.call(null,G__26698));
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
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__26701 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26701) : f.call(null,G__26701));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__26702 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26702) : f.call(null,G__26702));
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
