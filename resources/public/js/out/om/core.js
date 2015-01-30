// Compiled by ClojureScript 0.0-2727 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj21672 = {};
return obj21672;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.display_name[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.display_name["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj21674 = {};
return obj21674;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.init_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.init_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj21676 = {};
return obj21676;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.should_update[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.should_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj21678 = {};
return obj21678;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_mount[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_mount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj21680 = {};
return obj21680;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.did_mount[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.did_mount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj21682 = {};
return obj21682;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_unmount[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_unmount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj21684 = {};
return obj21684;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_update[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj21686 = {};
return obj21686;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.did_update[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.did_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj21688 = {};
return obj21688;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_receive_props[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj21690 = {};
return obj21690;
})();

om.core.render = (function render(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj21692 = {};
return obj21692;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render_props[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render_props["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj21694 = {};
return obj21694;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj21696 = {};
return obj21696;
})();


om.core.IOmSwap = (function (){var obj21698 = {};
return obj21698;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj21700 = {};
return obj21700;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
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


om.core.IGetRenderState = (function (){var obj21702 = {};
return obj21702;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_render_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_render_state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
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


om.core.ISetState = (function (){var obj21704 = {};
return obj21704;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
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


om.core.IRenderQueue = (function (){var obj21706 = {};
return obj21706;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_queue[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_queue["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj21708 = {};
return obj21708;
})();

om.core._value = (function _value(x){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._value[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._value["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj21710 = {};
return obj21710;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._path[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._path["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._state[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj21712 = {};
return obj21712;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3746__auto__ = value;
if(and__3746__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3746__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4402__auto__ = (((value == null))?null:value);
return (function (){var or__3758__auto__ = (om.core._to_cursor[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._to_cursor["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3746__auto__ = value;
if(and__3746__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3746__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4402__auto__ = (((value == null))?null:value);
return (function (){var or__3758__auto__ = (om.core._to_cursor[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._to_cursor["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
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


om.core.ICursorDerive = (function (){var obj21714 = {};
return obj21714;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._derive[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._derive["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj21716 = {};
return obj21716;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj21718 = {};
return obj21718;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj21720 = {};
return obj21720;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_property[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_property["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj21722 = {};
return obj21722;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._root_key[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._root_key["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj21724 = {};
return obj21724;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._adapt[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._adapt["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj21726 = {};
return obj21726;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_deps[goog.typeOf(x__4402__auto__)]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_deps["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__21728 = state;
if(G__21728){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21728.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__21728.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21728);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__21730 = x;
if(G__21730){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21730.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21730.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21730);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21730);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__21732 = (x.props["__om_cursor"]);
var G__21732__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__21732,korks__$1):G__21732);
return G__21732__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
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
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

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
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__21734 = state;
(G__21734["__om_prev_state"] = (state["__om_state"]));

(G__21734["__om_state"] = pending_state);

(G__21734["__om_pending_state"] = null);

return G__21734;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3758__auto__ = props;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3758__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
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
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21736 = c;
if(G__21736){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21736.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21736.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21736);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21736);
}
})()){
var state_21757 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3758__auto__ = (state_21757["__om_prev_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (state_21757["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21737 = c;
if(G__21737){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21737.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21737.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21737);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21737);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21738 = cljs.core.seq.call(null,refs);
var chunk__21739 = null;
var count__21740 = (0);
var i__21741 = (0);
while(true){
if((i__21741 < count__21740)){
var ref = cljs.core._nth.call(null,chunk__21739,i__21741);
om.core.unobserve.call(null,this$,ref);

var G__21758 = seq__21738;
var G__21759 = chunk__21739;
var G__21760 = count__21740;
var G__21761 = (i__21741 + (1));
seq__21738 = G__21758;
chunk__21739 = G__21759;
count__21740 = G__21760;
i__21741 = G__21761;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__21738);
if(temp__4126__auto____$1){
var seq__21738__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21738__$1)){
var c__4545__auto__ = cljs.core.chunk_first.call(null,seq__21738__$1);
var G__21762 = cljs.core.chunk_rest.call(null,seq__21738__$1);
var G__21763 = c__4545__auto__;
var G__21764 = cljs.core.count.call(null,c__4545__auto__);
var G__21765 = (0);
seq__21738 = G__21762;
chunk__21739 = G__21763;
count__21740 = G__21764;
i__21741 = G__21765;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21738__$1);
om.core.unobserve.call(null,this$,ref);

var G__21766 = cljs.core.next.call(null,seq__21738__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21738 = G__21766;
chunk__21739 = G__21767;
count__21740 = G__21768;
i__21741 = G__21769;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21742 = c;
if(G__21742){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21742.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__21742.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21742);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21742);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__21743 = c;
if(G__21743){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21743.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__21743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21743);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3746__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__3746__auto__){
return cljs.core.some.call(null,((function (and__3746__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__21735_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__21735_SHARP_);
});})(and__3746__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3746__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_21744 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_21745 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_21746 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_21747 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_21748 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__21749 = c;
if(G__21749){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21749.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21749.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21749);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21749);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__21750 = c;
if(G__21750){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21750.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21750.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21750);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21750);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__21751 = c;
if(G__21751){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21751.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21751);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21748;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21747;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21746;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21745;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_21744;
}}),(function (next_props,next_state){
var this$ = this;
var c_21770 = om.core.children.call(null,this$);
if((function (){var G__21752 = c_21770;
if(G__21752){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21752.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21752.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21752);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21752);
}
})()){
var state_21771 = this$.state;
om.core.will_update.call(null,c_21770,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3758__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__21753 = c;
if(G__21753){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21753.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21753.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21753);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21753);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3758__auto__ = id;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21754 = c;
if(G__21754){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21754.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__21754.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21754);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21754);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21755 = c;
if(G__21755){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21755.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__21755.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21755);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21772 = om.core.children.call(null,this$);
if((function (){var G__21756 = c_21772;
if(G__21756){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21756.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21756.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21756);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21756);
}
})()){
om.core.will_mount.call(null,c_21772);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x21774 = obj;
x21774.om$core$IGetState$ = true;

x21774.om$core$IGetState$_get_state$arity$1 = ((function (x21774){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3758__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (state["__om_state"]);
}
});})(x21774))
;

x21774.om$core$IGetState$_get_state$arity$2 = ((function (x21774){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21774))
;

x21774.om$core$IGetRenderState$ = true;

x21774.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21774){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x21774))
;

x21774.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21774){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21774))
;

x21774.om$core$ISetState$ = true;

x21774.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21774){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3746__auto__ = !((app_state == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21774))
;

x21774.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21774){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__3746__auto__ = !((app_state == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21774))
;

return x21774;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3758__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3758__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__21775 = c;
if(G__21775){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21775.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21775.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21775);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21775);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21784 = om.core.children.call(null,this$);
if((function (){var G__21776 = c_21784;
if(G__21776){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21776.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21776);
}
})()){
om.core.will_mount.call(null,c_21784);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21777 = c;
if(G__21777){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21777.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21777.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21777);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__21778 = cljs.core.seq.call(null,refs);
var chunk__21779 = null;
var count__21780 = (0);
var i__21781 = (0);
while(true){
if((i__21781 < count__21780)){
var ref = cljs.core._nth.call(null,chunk__21779,i__21781);
om.core.unobserve.call(null,this$,ref);

var G__21785 = seq__21778;
var G__21786 = chunk__21779;
var G__21787 = count__21780;
var G__21788 = (i__21781 + (1));
seq__21778 = G__21785;
chunk__21779 = G__21786;
count__21780 = G__21787;
i__21781 = G__21788;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__21778);
if(temp__4126__auto____$1){
var seq__21778__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21778__$1)){
var c__4545__auto__ = cljs.core.chunk_first.call(null,seq__21778__$1);
var G__21789 = cljs.core.chunk_rest.call(null,seq__21778__$1);
var G__21790 = c__4545__auto__;
var G__21791 = cljs.core.count.call(null,c__4545__auto__);
var G__21792 = (0);
seq__21778 = G__21789;
chunk__21779 = G__21790;
count__21780 = G__21791;
i__21781 = G__21792;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21778__$1);
om.core.unobserve.call(null,this$,ref);

var G__21793 = cljs.core.next.call(null,seq__21778__$1);
var G__21794 = null;
var G__21795 = (0);
var G__21796 = (0);
seq__21778 = G__21793;
chunk__21779 = G__21794;
count__21780 = G__21795;
i__21781 = G__21796;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_21797 = this$.props;
var c_21798 = om.core.children.call(null,this$);
if((function (){var G__21782 = c_21798;
if(G__21782){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21782.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21782.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21782);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21782);
}
})()){
var state_21799 = this$.state;
om.core.will_update.call(null,c_21798,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__21783 = c;
if(G__21783){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21783.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21783.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21783);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21783);
}
})()){
var state_21800 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3758__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x21802 = cljs.core.clj__GT_js.call(null,methods$);
x21802.om$core$IGetState$ = true;

x21802.om$core$IGetState$_get_state$arity$1 = ((function (x21802){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__3758__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x21802))
;

x21802.om$core$IGetState$_get_state$arity$2 = ((function (x21802){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21802))
;

x21802.om$core$IGetRenderState$ = true;

x21802.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21802){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x21802))
;

x21802.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21802){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21802))
;

x21802.om$core$ISetState$ = true;

x21802.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21802){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3746__auto__ = !((gstate == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x21802))
;

x21802.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21802){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x21802))
;

return x21802;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__21804 = x;
if(G__21804){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21804.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21804.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21804);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21804);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__21806){
var vec__21807 = p__21806;
var k = cljs.core.nth.call(null,vec__21807,(0),null);
var v = cljs.core.nth.call(null,vec__21807,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__21808 = null;
var G__21808__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21808__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21808 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21808__2.call(this,self__,k);
case 3:
return G__21808__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21808.cljs$core$IFn$_invoke$arity$2 = G__21808__2;
G__21808.cljs$core$IFn$_invoke$arity$3 = G__21808__3;
return G__21808;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args21805){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21805)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__21810 = null;
var G__21810__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21810__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21810 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21810__2.call(this,self__,k);
case 3:
return G__21810__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21810.cljs$core$IFn$_invoke$arity$2 = G__21810__2;
G__21810.cljs$core$IFn$_invoke$arity$3 = G__21810__3;
return G__21810;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args21809){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21809)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x21812 = cljs.core.clone.call(null,val);
x21812.cljs$core$IEquiv$ = true;

x21812.cljs$core$IEquiv$_equiv$arity$2 = ((function (x21812){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x21812))
;

x21812.om$core$ITransact$ = true;

x21812.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21812){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x21812))
;

x21812.om$core$ICursor$ = true;

x21812.om$core$ICursor$_path$arity$1 = ((function (x21812){
return (function (_){
var ___$1 = this;
return path;
});})(x21812))
;

x21812.om$core$ICursor$_state$arity$1 = ((function (x21812){
return (function (_){
var ___$1 = this;
return state;
});})(x21812))
;

x21812.cljs$core$IDeref$ = true;

x21812.cljs$core$IDeref$_deref$arity$1 = ((function (x21812){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x21812))
;

return x21812;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__21815 = val;
if(G__21815){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21815.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__21815.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21815);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21815);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__21816 = val;
if(G__21816){
var bit__4439__auto__ = (G__21816.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4439__auto__) || (G__21816.cljs$core$ICloneable$)){
return true;
} else {
if((!G__21816.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21816);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21816);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

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
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__21818 = atom;
if(G__21818){
var bit__4439__auto__ = (G__21818.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4439__auto__) || (G__21818.cljs$core$IDeref$)){
return true;
} else {
if((!G__21818.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21818);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x21820 = cljs.core.clone.call(null,x);
x21820.om$core$ITransact$ = true;

x21820.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21820){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x21820))
;

x21820.om$core$ICursorDerive$ = true;

x21820.om$core$ICursorDerive$_derive$arity$4 = ((function (x21820){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21820))
;

x21820.om$core$IAdapt$ = true;

x21820.om$core$IAdapt$_adapt$arity$2 = ((function (x21820){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x21820))
;

x21820.cljs$core$ICloneable$ = true;

x21820.cljs$core$ICloneable$_clone$arity$1 = ((function (x21820){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x21820))
;

return x21820;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__21827 = cursor;
if(G__21827){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21827.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__21827.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21827);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21827);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x21828 = cljs.core.clone.call(null,cursor);
x21828.om$core$ITransact$ = true;

x21828.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21828,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x21828,path,storage))
;

x21828.om$core$IOmRef$ = true;

x21828.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x21828,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x21828,path,storage))
;

x21828.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x21828,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x21828,path,storage))
;

x21828.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x21828,path,storage){
return (function (_){
var ___$1 = this;
var seq__21829 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__21830 = null;
var count__21831 = (0);
var i__21832 = (0);
while(true){
if((i__21832 < count__21831)){
var c = cljs.core._nth.call(null,chunk__21830,i__21832);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21833 = seq__21829;
var G__21834 = chunk__21830;
var G__21835 = count__21831;
var G__21836 = (i__21832 + (1));
seq__21829 = G__21833;
chunk__21830 = G__21834;
count__21831 = G__21835;
i__21832 = G__21836;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21829);
if(temp__4126__auto__){
var seq__21829__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21829__$1)){
var c__4545__auto__ = cljs.core.chunk_first.call(null,seq__21829__$1);
var G__21837 = cljs.core.chunk_rest.call(null,seq__21829__$1);
var G__21838 = c__4545__auto__;
var G__21839 = cljs.core.count.call(null,c__4545__auto__);
var G__21840 = (0);
seq__21829 = G__21837;
chunk__21830 = G__21838;
count__21831 = G__21839;
i__21832 = G__21840;
continue;
} else {
var c = cljs.core.first.call(null,seq__21829__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21841 = cljs.core.next.call(null,seq__21829__$1);
var G__21842 = null;
var G__21843 = (0);
var G__21844 = (0);
seq__21829 = G__21841;
chunk__21830 = G__21842;
count__21831 = G__21843;
i__21832 = G__21844;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21828,path,storage))
;

x21828.om$core$IOmRef$_get_deps$arity$1 = ((function (x21828,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x21828,path,storage))
;

x21828.om$core$ICursorDerive$ = true;

x21828.om$core$ICursorDerive$_derive$arity$4 = ((function (x21828,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21828,path,storage))
;

return x21828;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3758__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__3758__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__21849_21853 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__21850_21854 = null;
var count__21851_21855 = (0);
var i__21852_21856 = (0);
while(true){
if((i__21852_21856 < count__21851_21855)){
var f_21857 = cljs.core._nth.call(null,chunk__21850_21854,i__21852_21856);
f_21857.call(null);

var G__21858 = seq__21849_21853;
var G__21859 = chunk__21850_21854;
var G__21860 = count__21851_21855;
var G__21861 = (i__21852_21856 + (1));
seq__21849_21853 = G__21858;
chunk__21850_21854 = G__21859;
count__21851_21855 = G__21860;
i__21852_21856 = G__21861;
continue;
} else {
var temp__4126__auto___21862 = cljs.core.seq.call(null,seq__21849_21853);
if(temp__4126__auto___21862){
var seq__21849_21863__$1 = temp__4126__auto___21862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21849_21863__$1)){
var c__4545__auto___21864 = cljs.core.chunk_first.call(null,seq__21849_21863__$1);
var G__21865 = cljs.core.chunk_rest.call(null,seq__21849_21863__$1);
var G__21866 = c__4545__auto___21864;
var G__21867 = cljs.core.count.call(null,c__4545__auto___21864);
var G__21868 = (0);
seq__21849_21853 = G__21865;
chunk__21850_21854 = G__21866;
count__21851_21855 = G__21867;
i__21852_21856 = G__21868;
continue;
} else {
var f_21869 = cljs.core.first.call(null,seq__21849_21863__$1);
f_21869.call(null);

var G__21870 = cljs.core.next.call(null,seq__21849_21863__$1);
var G__21871 = null;
var G__21872 = (0);
var G__21873 = (0);
seq__21849_21853 = G__21870;
chunk__21850_21854 = G__21871;
count__21851_21855 = G__21872;
i__21852_21856 = G__21873;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3758__auto__ = (function (){var G__21880 = x;
if(G__21880){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21880.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21880.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21880);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21880);
}
})();
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (function (){var G__21882 = x;
if(G__21882){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto____$1 = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return G__21882.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21882);
}
})();
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
var G__21883 = x;
if(G__21883){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto____$2 = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto____$2)){
return or__3758__auto____$2;
} else {
return G__21883.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21883.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21883);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21883);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3758__auto__ = descriptor;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

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
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__21885 = m;
var map__21885__$1 = ((cljs.core.seq_QMARK_.call(null,map__21885))?cljs.core.apply.call(null,cljs.core.hash_map,map__21885):map__21885);
var opts = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__21885__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__3758__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__21885,map__21885__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21885,map__21885__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__21885,map__21885__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21885,map__21885__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3758__auto__ = rkey;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

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
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
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
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
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
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__21894 = state;
if(G__21894){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__21894.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__21894.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21894);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21894);
}
})()){
} else {
var properties_21902 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_21903 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_21904 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x21895_21905 = state;
x21895_21905.om$core$IRenderQueue$ = true;

x21895_21905.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_21904);
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_21904),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_21904,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_21904,cljs.core.empty);
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$INotify$ = true;

x21895_21905.om$core$INotify$_listen_BANG_$arity$3 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_21903,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_21903,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$INotify$_notify_BANG_$arity$3 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__21896_21906 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_21903));
var chunk__21897_21907 = null;
var count__21898_21908 = (0);
var i__21899_21909 = (0);
while(true){
if((i__21899_21909 < count__21898_21908)){
var vec__21900_21910 = cljs.core._nth.call(null,chunk__21897_21907,i__21899_21909);
var __21911 = cljs.core.nth.call(null,vec__21900_21910,(0),null);
var f_21912 = cljs.core.nth.call(null,vec__21900_21910,(1),null);
f_21912.call(null,tx_data,root_cursor);

var G__21913 = seq__21896_21906;
var G__21914 = chunk__21897_21907;
var G__21915 = count__21898_21908;
var G__21916 = (i__21899_21909 + (1));
seq__21896_21906 = G__21913;
chunk__21897_21907 = G__21914;
count__21898_21908 = G__21915;
i__21899_21909 = G__21916;
continue;
} else {
var temp__4126__auto___21917 = cljs.core.seq.call(null,seq__21896_21906);
if(temp__4126__auto___21917){
var seq__21896_21918__$1 = temp__4126__auto___21917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21896_21918__$1)){
var c__4545__auto___21919 = cljs.core.chunk_first.call(null,seq__21896_21918__$1);
var G__21920 = cljs.core.chunk_rest.call(null,seq__21896_21918__$1);
var G__21921 = c__4545__auto___21919;
var G__21922 = cljs.core.count.call(null,c__4545__auto___21919);
var G__21923 = (0);
seq__21896_21906 = G__21920;
chunk__21897_21907 = G__21921;
count__21898_21908 = G__21922;
i__21899_21909 = G__21923;
continue;
} else {
var vec__21901_21924 = cljs.core.first.call(null,seq__21896_21918__$1);
var __21925 = cljs.core.nth.call(null,vec__21901_21924,(0),null);
var f_21926 = cljs.core.nth.call(null,vec__21901_21924,(1),null);
f_21926.call(null,tx_data,root_cursor);

var G__21927 = cljs.core.next.call(null,seq__21896_21918__$1);
var G__21928 = null;
var G__21929 = (0);
var G__21930 = (0);
seq__21896_21906 = G__21927;
chunk__21897_21907 = G__21928;
count__21898_21908 = G__21929;
i__21899_21909 = G__21930;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRootProperties$ = true;

x21895_21905.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21902,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21902,cljs.core.dissoc,id,k);
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21902,cljs.core.dissoc,id);
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

x21895_21905.om$core$IRootProperties$_get_property$arity$3 = ((function (x21895_21905,properties_21902,listeners_21903,render_queue_21904){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_21902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x21895_21905,properties_21902,listeners_21903,render_queue_21904))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x21932 = cljs.core.clone.call(null,cursor);
x21932.om$core$IRootKey$ = true;

x21932.om$core$IRootKey$_root_key$arity$1 = ((function (x21932){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x21932))
;

x21932.om$core$IAdapt$ = true;

x21932.om$core$IAdapt$_adapt$arity$2 = ((function (x21932){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x21932))
;

x21932.cljs$core$ICloneable$ = true;

x21932.cljs$core$ICloneable$_clone$arity$1 = ((function (x21932){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x21932))
;

return x21932;
} else {
return cursor;
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
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__21933){
var map__21996 = p__21933;
var map__21996__$1 = ((cljs.core.seq_QMARK_.call(null,map__21996))?cljs.core.apply.call(null,cljs.core.hash_map,map__21996):map__21996);
var options = map__21996__$1;
var raf = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__22058 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__22058,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__22058,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__21997 = value;
if(G__21997){
var bit__4439__auto__ = (G__21997.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4439__auto__) || (G__21997.cljs$core$IAtom$)){
return true;
} else {
if((!G__21997.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21997);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3758__auto__ = adapt;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_22059 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_22028 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_22029 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_22030 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_22031 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_22031;

om.core._STAR_state_STAR_ = _STAR_state_STAR_22030;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_22029;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_22028;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_22059);
} else {
}
}

var queue_22060 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_22060)){
} else {
var seq__22032_22061 = cljs.core.seq.call(null,queue_22060);
var chunk__22033_22062 = null;
var count__22034_22063 = (0);
var i__22035_22064 = (0);
while(true){
if((i__22035_22064 < count__22034_22063)){
var c_22065 = cljs.core._nth.call(null,chunk__22033_22062,i__22035_22064);
if(cljs.core.truth_(c_22065.isMounted())){
var temp__4126__auto___22066 = (c_22065.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___22066)){
var next_props_22067 = temp__4126__auto___22066;
(c_22065.props["__om_cursor"] = next_props_22067);

(c_22065.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3758__auto__ = !((function (){var G__22037 = om.core.children.call(null,c_22065);
if(G__22037){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__22037.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__22037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22037);
}
})());
if(or__3758__auto__){
return or__3758__auto__;
} else {
return c_22065.shouldComponentUpdate(c_22065.props,c_22065.state);
}
})())){
c_22065.forceUpdate();
} else {
}
} else {
}

var G__22068 = seq__22032_22061;
var G__22069 = chunk__22033_22062;
var G__22070 = count__22034_22063;
var G__22071 = (i__22035_22064 + (1));
seq__22032_22061 = G__22068;
chunk__22033_22062 = G__22069;
count__22034_22063 = G__22070;
i__22035_22064 = G__22071;
continue;
} else {
var temp__4126__auto___22072 = cljs.core.seq.call(null,seq__22032_22061);
if(temp__4126__auto___22072){
var seq__22032_22073__$1 = temp__4126__auto___22072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22032_22073__$1)){
var c__4545__auto___22074 = cljs.core.chunk_first.call(null,seq__22032_22073__$1);
var G__22075 = cljs.core.chunk_rest.call(null,seq__22032_22073__$1);
var G__22076 = c__4545__auto___22074;
var G__22077 = cljs.core.count.call(null,c__4545__auto___22074);
var G__22078 = (0);
seq__22032_22061 = G__22075;
chunk__22033_22062 = G__22076;
count__22034_22063 = G__22077;
i__22035_22064 = G__22078;
continue;
} else {
var c_22079 = cljs.core.first.call(null,seq__22032_22073__$1);
if(cljs.core.truth_(c_22079.isMounted())){
var temp__4126__auto___22080__$1 = (c_22079.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___22080__$1)){
var next_props_22081 = temp__4126__auto___22080__$1;
(c_22079.props["__om_cursor"] = next_props_22081);

(c_22079.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3758__auto__ = !((function (){var G__22039 = om.core.children.call(null,c_22079);
if(G__22039){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__22039.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__22039.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22039);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__22039);
}
})());
if(or__3758__auto__){
return or__3758__auto__;
} else {
return c_22079.shouldComponentUpdate(c_22079.props,c_22079.state);
}
})())){
c_22079.forceUpdate();
} else {
}
} else {
}

var G__22082 = cljs.core.next.call(null,seq__22032_22073__$1);
var G__22083 = null;
var G__22084 = (0);
var G__22085 = (0);
seq__22032_22061 = G__22082;
chunk__22033_22062 = G__22083;
count__22034_22063 = G__22084;
i__22035_22064 = G__22085;
continue;
}
} else {
}
}
break;
}
}

var _refs_22086 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_22086)){
} else {
var seq__22040_22087 = cljs.core.seq.call(null,_refs_22086);
var chunk__22041_22088 = null;
var count__22042_22089 = (0);
var i__22043_22090 = (0);
while(true){
if((i__22043_22090 < count__22042_22089)){
var vec__22044_22091 = cljs.core._nth.call(null,chunk__22041_22088,i__22043_22090);
var path_22092__$1 = cljs.core.nth.call(null,vec__22044_22091,(0),null);
var cs_22093 = cljs.core.nth.call(null,vec__22044_22091,(1),null);
var cs_22094__$1 = cljs.core.deref.call(null,cs_22093);
var seq__22045_22095 = cljs.core.seq.call(null,cs_22094__$1);
var chunk__22046_22096 = null;
var count__22047_22097 = (0);
var i__22048_22098 = (0);
while(true){
if((i__22048_22098 < count__22047_22097)){
var vec__22049_22099 = cljs.core._nth.call(null,chunk__22046_22096,i__22048_22098);
var id_22100 = cljs.core.nth.call(null,vec__22049_22099,(0),null);
var c_22101 = cljs.core.nth.call(null,vec__22049_22099,(1),null);
if(cljs.core.truth_(c_22101.shouldComponentUpdate(c_22101.props,c_22101.state))){
c_22101.forceUpdate();
} else {
}

var G__22102 = seq__22045_22095;
var G__22103 = chunk__22046_22096;
var G__22104 = count__22047_22097;
var G__22105 = (i__22048_22098 + (1));
seq__22045_22095 = G__22102;
chunk__22046_22096 = G__22103;
count__22047_22097 = G__22104;
i__22048_22098 = G__22105;
continue;
} else {
var temp__4126__auto___22106 = cljs.core.seq.call(null,seq__22045_22095);
if(temp__4126__auto___22106){
var seq__22045_22107__$1 = temp__4126__auto___22106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22045_22107__$1)){
var c__4545__auto___22108 = cljs.core.chunk_first.call(null,seq__22045_22107__$1);
var G__22109 = cljs.core.chunk_rest.call(null,seq__22045_22107__$1);
var G__22110 = c__4545__auto___22108;
var G__22111 = cljs.core.count.call(null,c__4545__auto___22108);
var G__22112 = (0);
seq__22045_22095 = G__22109;
chunk__22046_22096 = G__22110;
count__22047_22097 = G__22111;
i__22048_22098 = G__22112;
continue;
} else {
var vec__22050_22113 = cljs.core.first.call(null,seq__22045_22107__$1);
var id_22114 = cljs.core.nth.call(null,vec__22050_22113,(0),null);
var c_22115 = cljs.core.nth.call(null,vec__22050_22113,(1),null);
if(cljs.core.truth_(c_22115.shouldComponentUpdate(c_22115.props,c_22115.state))){
c_22115.forceUpdate();
} else {
}

var G__22116 = cljs.core.next.call(null,seq__22045_22107__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__22045_22095 = G__22116;
chunk__22046_22096 = G__22117;
count__22047_22097 = G__22118;
i__22048_22098 = G__22119;
continue;
}
} else {
}
}
break;
}

var G__22120 = seq__22040_22087;
var G__22121 = chunk__22041_22088;
var G__22122 = count__22042_22089;
var G__22123 = (i__22043_22090 + (1));
seq__22040_22087 = G__22120;
chunk__22041_22088 = G__22121;
count__22042_22089 = G__22122;
i__22043_22090 = G__22123;
continue;
} else {
var temp__4126__auto___22124 = cljs.core.seq.call(null,seq__22040_22087);
if(temp__4126__auto___22124){
var seq__22040_22125__$1 = temp__4126__auto___22124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22040_22125__$1)){
var c__4545__auto___22126 = cljs.core.chunk_first.call(null,seq__22040_22125__$1);
var G__22127 = cljs.core.chunk_rest.call(null,seq__22040_22125__$1);
var G__22128 = c__4545__auto___22126;
var G__22129 = cljs.core.count.call(null,c__4545__auto___22126);
var G__22130 = (0);
seq__22040_22087 = G__22127;
chunk__22041_22088 = G__22128;
count__22042_22089 = G__22129;
i__22043_22090 = G__22130;
continue;
} else {
var vec__22051_22131 = cljs.core.first.call(null,seq__22040_22125__$1);
var path_22132__$1 = cljs.core.nth.call(null,vec__22051_22131,(0),null);
var cs_22133 = cljs.core.nth.call(null,vec__22051_22131,(1),null);
var cs_22134__$1 = cljs.core.deref.call(null,cs_22133);
var seq__22052_22135 = cljs.core.seq.call(null,cs_22134__$1);
var chunk__22053_22136 = null;
var count__22054_22137 = (0);
var i__22055_22138 = (0);
while(true){
if((i__22055_22138 < count__22054_22137)){
var vec__22056_22139 = cljs.core._nth.call(null,chunk__22053_22136,i__22055_22138);
var id_22140 = cljs.core.nth.call(null,vec__22056_22139,(0),null);
var c_22141 = cljs.core.nth.call(null,vec__22056_22139,(1),null);
if(cljs.core.truth_(c_22141.shouldComponentUpdate(c_22141.props,c_22141.state))){
c_22141.forceUpdate();
} else {
}

var G__22142 = seq__22052_22135;
var G__22143 = chunk__22053_22136;
var G__22144 = count__22054_22137;
var G__22145 = (i__22055_22138 + (1));
seq__22052_22135 = G__22142;
chunk__22053_22136 = G__22143;
count__22054_22137 = G__22144;
i__22055_22138 = G__22145;
continue;
} else {
var temp__4126__auto___22146__$1 = cljs.core.seq.call(null,seq__22052_22135);
if(temp__4126__auto___22146__$1){
var seq__22052_22147__$1 = temp__4126__auto___22146__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22052_22147__$1)){
var c__4545__auto___22148 = cljs.core.chunk_first.call(null,seq__22052_22147__$1);
var G__22149 = cljs.core.chunk_rest.call(null,seq__22052_22147__$1);
var G__22150 = c__4545__auto___22148;
var G__22151 = cljs.core.count.call(null,c__4545__auto___22148);
var G__22152 = (0);
seq__22052_22135 = G__22149;
chunk__22053_22136 = G__22150;
count__22054_22137 = G__22151;
i__22055_22138 = G__22152;
continue;
} else {
var vec__22057_22153 = cljs.core.first.call(null,seq__22052_22147__$1);
var id_22154 = cljs.core.nth.call(null,vec__22057_22153,(0),null);
var c_22155 = cljs.core.nth.call(null,vec__22057_22153,(1),null);
if(cljs.core.truth_(c_22155.shouldComponentUpdate(c_22155.props,c_22155.state))){
c_22155.forceUpdate();
} else {
}

var G__22156 = cljs.core.next.call(null,seq__22052_22147__$1);
var G__22157 = null;
var G__22158 = (0);
var G__22159 = (0);
seq__22052_22135 = G__22156;
chunk__22053_22136 = G__22157;
count__22054_22137 = G__22158;
i__22055_22138 = G__22159;
continue;
}
} else {
}
}
break;
}

var G__22160 = cljs.core.next.call(null,seq__22040_22125__$1);
var G__22161 = null;
var G__22162 = (0);
var G__22163 = (0);
seq__22040_22087 = G__22160;
chunk__22041_22088 = G__22161;
count__22042_22089 = G__22162;
i__22043_22090 = G__22163;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21996,map__21996__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__22165 = x;
if(G__22165){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__22165.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__22165.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__22165);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__22165);
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
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
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
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
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
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__22167 = cursor;
if(G__22167){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__22167.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__22167.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__22167);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__22167);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
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
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
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
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
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
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
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
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
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
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
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
