// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.components');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
lokate.components.set_effect = (function set_effect(owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"effect","effect",347343289),true);
});
lokate.components.release_effect = (function release_effect(owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"effect","effect",347343289),false);
});
lokate.components.cdiv = (function cdiv(p__11695,owner){
var vec__11703 = p__11695;
var props = cljs.core.nth.call(null,vec__11703,(0),null);
var contents = cljs.core.nth.call(null,vec__11703,(1),null);
if(typeof lokate.components.t11704 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11704 = (function (contents,props,vec__11703,owner,p__11695,cdiv,meta11705){
this.contents = contents;
this.props = props;
this.vec__11703 = vec__11703;
this.owner = owner;
this.p__11695 = p__11695;
this.cdiv = cdiv;
this.meta11705 = meta11705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11704.prototype.om$core$IRenderState$ = true;

lokate.components.t11704.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__11703,props,contents){
return (function (_,p__11707){
var self__ = this;
var map__11708 = p__11707;
var map__11708__$1 = ((cljs.core.seq_QMARK_.call(null,map__11708))?cljs.core.apply.call(null,cljs.core.hash_map,map__11708):map__11708);
var effect = cljs.core.get.call(null,map__11708__$1,new cljs.core.Keyword(null,"effect","effect",347343289));
var ___$1 = this;
var attrs11709 = cljs.core.merge.call(null,cljs.core.update_in.call(null,self__.props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (p1__11694_SHARP_){
return [cljs.core.str(p1__11694_SHARP_),cljs.core.str((cljs.core.truth_(effect)?" effect":null))].join('');
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.set_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
,new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.release_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.release_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.set_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.release_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents){
return (function (){
return lokate.components.release_effect.call(null,self__.owner);
});})(___$1,map__11708,map__11708__$1,effect,vec__11703,props,contents))
], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11709))?sablono.interpreter.attributes.call(null,attrs11709):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11709))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.contents)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11709),sablono.interpreter.interpret.call(null,self__.contents)], null))));
});})(vec__11703,props,contents))
;

lokate.components.t11704.prototype.om$core$IInitState$ = true;

lokate.components.t11704.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__11703,props,contents){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect","effect",347343289),false], null);
});})(vec__11703,props,contents))
;

lokate.components.t11704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11703,props,contents){
return (function (_11706){
var self__ = this;
var _11706__$1 = this;
return self__.meta11705;
});})(vec__11703,props,contents))
;

lokate.components.t11704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11703,props,contents){
return (function (_11706,meta11705__$1){
var self__ = this;
var _11706__$1 = this;
return (new lokate.components.t11704(self__.contents,self__.props,self__.vec__11703,self__.owner,self__.p__11695,self__.cdiv,meta11705__$1));
});})(vec__11703,props,contents))
;

lokate.components.t11704.cljs$lang$type = true;

lokate.components.t11704.cljs$lang$ctorStr = "lokate.components/t11704";

lokate.components.t11704.cljs$lang$ctorPrWriter = ((function (vec__11703,props,contents){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11704");
});})(vec__11703,props,contents))
;

lokate.components.__GT_t11704 = ((function (vec__11703,props,contents){
return (function __GT_t11704(contents__$1,props__$1,vec__11703__$1,owner__$1,p__11695__$1,cdiv__$1,meta11705){
return (new lokate.components.t11704(contents__$1,props__$1,vec__11703__$1,owner__$1,p__11695__$1,cdiv__$1,meta11705));
});})(vec__11703,props,contents))
;

}

return (new lokate.components.t11704(contents,props,vec__11703,owner,p__11695,cdiv,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),38,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/components.cljs"], null)));
});
lokate.components.btn = (function btn(p__11710,owner,opts){
var vec__11715 = p__11710;
var icon_class = cljs.core.nth.call(null,vec__11715,(0),null);
var action = cljs.core.nth.call(null,vec__11715,(1),null);
if(typeof lokate.components.t11716 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11716 = (function (action,icon_class,vec__11715,opts,owner,p__11710,btn,meta11717){
this.action = action;
this.icon_class = icon_class;
this.vec__11715 = vec__11715;
this.opts = opts;
this.owner = owner;
this.p__11710 = p__11710;
this.btn = btn;
this.meta11717 = meta11717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11716.prototype.om$core$IRender$ = true;

lokate.components.t11716.prototype.om$core$IRender$render$arity$1 = ((function (vec__11715,icon_class,action){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.cdiv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),self__.opts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn-icon "),cljs.core.str(self__.icon_class)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (this__10258__auto____$1,vec__11715,icon_class,action){
return (function (){
return self__.action.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)));
});})(this__10258__auto____$1,vec__11715,icon_class,action))
], null)], null)], null));
});})(vec__11715,icon_class,action))
;

lokate.components.t11716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11715,icon_class,action){
return (function (_11718){
var self__ = this;
var _11718__$1 = this;
return self__.meta11717;
});})(vec__11715,icon_class,action))
;

lokate.components.t11716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11715,icon_class,action){
return (function (_11718,meta11717__$1){
var self__ = this;
var _11718__$1 = this;
return (new lokate.components.t11716(self__.action,self__.icon_class,self__.vec__11715,self__.opts,self__.owner,self__.p__11710,self__.btn,meta11717__$1));
});})(vec__11715,icon_class,action))
;

lokate.components.t11716.cljs$lang$type = true;

lokate.components.t11716.cljs$lang$ctorStr = "lokate.components/t11716";

lokate.components.t11716.cljs$lang$ctorPrWriter = ((function (vec__11715,icon_class,action){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11716");
});})(vec__11715,icon_class,action))
;

lokate.components.__GT_t11716 = ((function (vec__11715,icon_class,action){
return (function __GT_t11716(action__$1,icon_class__$1,vec__11715__$1,opts__$1,owner__$1,p__11710__$1,btn__$1,meta11717){
return (new lokate.components.t11716(action__$1,icon_class__$1,vec__11715__$1,opts__$1,owner__$1,p__11710__$1,btn__$1,meta11717));
});})(vec__11715,icon_class,action))
;

}

return (new lokate.components.t11716(action,icon_class,vec__11715,opts,owner,p__11710,btn,null));
});
lokate.components.list_item = (function list_item(p__11719){
var vec__11726 = p__11719;
var map__11727 = cljs.core.nth.call(null,vec__11726,(0),null);
var map__11727__$1 = ((cljs.core.seq_QMARK_.call(null,map__11727))?cljs.core.apply.call(null,cljs.core.hash_map,map__11727):map__11727);
var props = map__11727__$1;
var item_comp = cljs.core.get.call(null,map__11727__$1,new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177));
var item = cljs.core.nth.call(null,vec__11726,(1),null);
if(typeof lokate.components.t11728 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11728 = (function (item,item_comp,props,map__11727,vec__11726,p__11719,list_item,meta11729){
this.item = item;
this.item_comp = item_comp;
this.props = props;
this.map__11727 = map__11727;
this.vec__11726 = vec__11726;
this.p__11719 = p__11719;
this.list_item = list_item;
this.meta11729 = meta11729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11728.prototype.om$core$IRender$ = true;

lokate.components.t11728.prototype.om$core$IRender$render$arity$1 = ((function (vec__11726,map__11727,map__11727__$1,props,item_comp,item){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var attrs11731 = om.core.build.call(null,self__.item_comp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.props,self__.item], null));
return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs11731))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-item"], null)], null),attrs11731)):{"className": "list-item"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11731))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11731)], null))));
});})(vec__11726,map__11727,map__11727__$1,props,item_comp,item))
;

lokate.components.t11728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11726,map__11727,map__11727__$1,props,item_comp,item){
return (function (_11730){
var self__ = this;
var _11730__$1 = this;
return self__.meta11729;
});})(vec__11726,map__11727,map__11727__$1,props,item_comp,item))
;

lokate.components.t11728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11726,map__11727,map__11727__$1,props,item_comp,item){
return (function (_11730,meta11729__$1){
var self__ = this;
var _11730__$1 = this;
return (new lokate.components.t11728(self__.item,self__.item_comp,self__.props,self__.map__11727,self__.vec__11726,self__.p__11719,self__.list_item,meta11729__$1));
});})(vec__11726,map__11727,map__11727__$1,props,item_comp,item))
;

lokate.components.t11728.cljs$lang$type = true;

lokate.components.t11728.cljs$lang$ctorStr = "lokate.components/t11728";

lokate.components.t11728.cljs$lang$ctorPrWriter = ((function (vec__11726,map__11727,map__11727__$1,props,item_comp,item){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11728");
});})(vec__11726,map__11727,map__11727__$1,props,item_comp,item))
;

lokate.components.__GT_t11728 = ((function (vec__11726,map__11727,map__11727__$1,props,item_comp,item){
return (function __GT_t11728(item__$1,item_comp__$1,props__$1,map__11727__$2,vec__11726__$1,p__11719__$1,list_item__$1,meta11729){
return (new lokate.components.t11728(item__$1,item_comp__$1,props__$1,map__11727__$2,vec__11726__$1,p__11719__$1,list_item__$1,meta11729));
});})(vec__11726,map__11727,map__11727__$1,props,item_comp,item))
;

}

return (new lokate.components.t11728(item,item_comp,props,map__11727__$1,vec__11726,p__11719,list_item,null));
});
lokate.components.simple_list = (function simple_list(p__11733,owner){
var vec__11739 = p__11733;
var map__11740 = cljs.core.nth.call(null,vec__11739,(0),null);
var map__11740__$1 = ((cljs.core.seq_QMARK_.call(null,map__11740))?cljs.core.apply.call(null,cljs.core.hash_map,map__11740):map__11740);
var props = map__11740__$1;
var class$ = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var id = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var items = cljs.core.nth.call(null,vec__11739,(1),null);
if(typeof lokate.components.t11741 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11741 = (function (items,id,class$,props,map__11740,vec__11739,owner,p__11733,simple_list,meta11742){
this.items = items;
this.id = id;
this.class$ = class$;
this.props = props;
this.map__11740 = map__11740;
this.vec__11739 = vec__11739;
this.owner = owner;
this.p__11733 = p__11733;
this.simple_list = simple_list;
this.meta11742 = meta11742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11741.prototype.om$core$IRender$ = true;

lokate.components.t11741.prototype.om$core$IRender$render$arity$1 = ((function (vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.ol({"className": [cljs.core.str(self__.class$),cljs.core.str("list")].join(''), "id": self__.id},sablono.interpreter.interpret.call(null,om.core.build_all.call(null,lokate.components.list_item,self__.items,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__10258__auto____$1,vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function (p1__11732_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.props], null),p1__11732_SHARP_);
});})(this__10258__auto____$1,vec__11739,map__11740,map__11740__$1,props,class$,id,items))
], null))));
});})(vec__11739,map__11740,map__11740__$1,props,class$,id,items))
;

lokate.components.t11741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function (_11743){
var self__ = this;
var _11743__$1 = this;
return self__.meta11742;
});})(vec__11739,map__11740,map__11740__$1,props,class$,id,items))
;

lokate.components.t11741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function (_11743,meta11742__$1){
var self__ = this;
var _11743__$1 = this;
return (new lokate.components.t11741(self__.items,self__.id,self__.class$,self__.props,self__.map__11740,self__.vec__11739,self__.owner,self__.p__11733,self__.simple_list,meta11742__$1));
});})(vec__11739,map__11740,map__11740__$1,props,class$,id,items))
;

lokate.components.t11741.cljs$lang$type = true;

lokate.components.t11741.cljs$lang$ctorStr = "lokate.components/t11741";

lokate.components.t11741.cljs$lang$ctorPrWriter = ((function (vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11741");
});})(vec__11739,map__11740,map__11740__$1,props,class$,id,items))
;

lokate.components.__GT_t11741 = ((function (vec__11739,map__11740,map__11740__$1,props,class$,id,items){
return (function __GT_t11741(items__$1,id__$1,class$__$1,props__$1,map__11740__$2,vec__11739__$1,owner__$1,p__11733__$1,simple_list__$1,meta11742){
return (new lokate.components.t11741(items__$1,id__$1,class$__$1,props__$1,map__11740__$2,vec__11739__$1,owner__$1,p__11733__$1,simple_list__$1,meta11742));
});})(vec__11739,map__11740,map__11740__$1,props,class$,id,items))
;

}

return (new lokate.components.t11741(items,id,class$,props,map__11740__$1,vec__11739,owner,p__11733,simple_list,null));
});
lokate.components.item = (function item(p__11744,owner){
var vec__11751 = p__11744;
var map__11752 = cljs.core.nth.call(null,vec__11751,(0),null);
var map__11752__$1 = ((cljs.core.seq_QMARK_.call(null,map__11752))?cljs.core.apply.call(null,cljs.core.hash_map,map__11752):map__11752);
var name_default = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"name-default","name-default",-679814522));
var alt_action = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"alt-action","alt-action",-1610770020));
var action = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var class$ = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var item__$1 = cljs.core.nth.call(null,vec__11751,(1),null);
var evt_bus = new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
if(typeof lokate.components.t11753 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11753 = (function (alt_action,owner,p__11744,name_default,vec__11751,item,evt_bus,class$,map__11752,action,meta11754){
this.alt_action = alt_action;
this.owner = owner;
this.p__11744 = p__11744;
this.name_default = name_default;
this.vec__11751 = vec__11751;
this.item = item;
this.evt_bus = evt_bus;
this.class$ = class$;
this.map__11752 = map__11752;
this.action = action;
this.meta11754 = meta11754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11753.prototype.om$core$IRender$ = true;

lokate.components.t11753.prototype.om$core$IRender$render$arity$1 = ((function (evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": [cljs.core.str(self__.class$),cljs.core.str("item")].join(''), "onClick": ((function (this__10258__auto____$1,evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (){
return self__.action.call(null,self__.item,self__.evt_bus);
});})(this__10258__auto____$1,evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
, "onContextMenu": ((function (this__10258__auto____$1,evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (e){
if(cljs.core.truth_(self__.alt_action)){
self__.alt_action.call(null,self__.item,self__.evt_bus);
} else {
}

return e.preventDefault();
});})(this__10258__auto____$1,evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
},(function (){var attrs11756 = (function (){var or__3758__auto__ = lokate.util.blankf.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.item));
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return self__.name_default;
}
})();
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11756))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-title"], null)], null),attrs11756)):{"className": "item-title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11756))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11756)], null))));
})());
});})(evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
;

lokate.components.t11753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (_11755){
var self__ = this;
var _11755__$1 = this;
return self__.meta11754;
});})(evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
;

lokate.components.t11753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (_11755,meta11754__$1){
var self__ = this;
var _11755__$1 = this;
return (new lokate.components.t11753(self__.alt_action,self__.owner,self__.p__11744,self__.name_default,self__.vec__11751,self__.item,self__.evt_bus,self__.class$,self__.map__11752,self__.action,meta11754__$1));
});})(evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
;

lokate.components.t11753.cljs$lang$type = true;

lokate.components.t11753.cljs$lang$ctorStr = "lokate.components/t11753";

lokate.components.t11753.cljs$lang$ctorPrWriter = ((function (evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11753");
});})(evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
;

lokate.components.__GT_t11753 = ((function (evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1){
return (function __GT_t11753(alt_action__$1,owner__$1,p__11744__$1,name_default__$1,vec__11751__$1,item__$2,evt_bus__$1,class$__$1,map__11752__$2,action__$1,meta11754){
return (new lokate.components.t11753(alt_action__$1,owner__$1,p__11744__$1,name_default__$1,vec__11751__$1,item__$2,evt_bus__$1,class$__$1,map__11752__$2,action__$1,meta11754));
});})(evt_bus,vec__11751,map__11752,map__11752__$1,name_default,alt_action,action,class$,item__$1))
;

}

return (new lokate.components.t11753(alt_action,owner,p__11744,name_default,vec__11751,item__$1,evt_bus,class$,map__11752__$1,action,null));
});
lokate.components.set_status = (function set_status(owner,status){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"status","status",-1997798413),status);
});
lokate.components.warn_or_remove = (function warn_or_remove(owner,remove_action,item,evt_bus){
var G__11758 = (((om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"status","status",-1997798413)) instanceof cljs.core.Keyword))?om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"status","status",-1997798413)).fqn:null);
switch (G__11758) {
case "warn":
lokate.components.set_status.call(null,owner,new cljs.core.Keyword(null,"remove","remove",-131428414));

return window.setTimeout(((function (G__11758){
return (function (){
remove_action.call(null,item,evt_bus);

return lokate.components.set_status.call(null,owner,new cljs.core.Keyword(null,"ok","ok",967785236));
});})(G__11758))
,(500));

break;
case "ok":
return lokate.components.set_status.call(null,owner,new cljs.core.Keyword(null,"warn","warn",-436710552));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"status","status",-1997798413)))].join('')));

}
});
lokate.components.removable_item = (function removable_item(p__11760,owner){
var vec__11768 = p__11760;
var map__11769 = cljs.core.nth.call(null,vec__11768,(0),null);
var map__11769__$1 = ((cljs.core.seq_QMARK_.call(null,map__11769))?cljs.core.apply.call(null,cljs.core.hash_map,map__11769):map__11769);
var name_default = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"name-default","name-default",-679814522));
var remove_action = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"remove-action","remove-action",-1169550252));
var action = cljs.core.get.call(null,map__11769__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var r_item = cljs.core.nth.call(null,vec__11768,(1),null);
if(typeof lokate.components.t11770 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11770 = (function (r_item,action,remove_action,name_default,map__11769,vec__11768,owner,p__11760,removable_item,meta11771){
this.r_item = r_item;
this.action = action;
this.remove_action = remove_action;
this.name_default = name_default;
this.map__11769 = map__11769;
this.vec__11768 = vec__11768;
this.owner = owner;
this.p__11760 = p__11760;
this.removable_item = removable_item;
this.meta11771 = meta11771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11770.prototype.om$core$IRenderState$ = true;

lokate.components.t11770.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function (_,p__11773){
var self__ = this;
var map__11774 = p__11773;
var map__11774__$1 = ((cljs.core.seq_QMARK_.call(null,map__11774))?cljs.core.apply.call(null,cljs.core.hash_map,map__11774):map__11774);
var status = cljs.core.get.call(null,map__11774__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var ___$1 = this;
return om.core.build.call(null,lokate.components.item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(cljs.core.name.call(null,status)),cljs.core.str(" removable ")].join(''),new cljs.core.Keyword(null,"action","action",-811238024),self__.action,new cljs.core.Keyword(null,"alt-action","alt-action",-1610770020),cljs.core.partial.call(null,lokate.components.warn_or_remove,self__.owner,self__.remove_action),new cljs.core.Keyword(null,"name-default","name-default",-679814522),self__.name_default], null),self__.r_item], null));
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

lokate.components.t11770.prototype.om$core$IInitState$ = true;

lokate.components.t11770.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236)], null);
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

lokate.components.t11770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function (_11772){
var self__ = this;
var _11772__$1 = this;
return self__.meta11771;
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

lokate.components.t11770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function (_11772,meta11771__$1){
var self__ = this;
var _11772__$1 = this;
return (new lokate.components.t11770(self__.r_item,self__.action,self__.remove_action,self__.name_default,self__.map__11769,self__.vec__11768,self__.owner,self__.p__11760,self__.removable_item,meta11771__$1));
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

lokate.components.t11770.cljs$lang$type = true;

lokate.components.t11770.cljs$lang$ctorStr = "lokate.components/t11770";

lokate.components.t11770.cljs$lang$ctorPrWriter = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11770");
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

lokate.components.__GT_t11770 = ((function (vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item){
return (function __GT_t11770(r_item__$1,action__$1,remove_action__$1,name_default__$1,map__11769__$2,vec__11768__$1,owner__$1,p__11760__$1,removable_item__$1,meta11771){
return (new lokate.components.t11770(r_item__$1,action__$1,remove_action__$1,name_default__$1,map__11769__$2,vec__11768__$1,owner__$1,p__11760__$1,removable_item__$1,meta11771));
});})(vec__11768,map__11769,map__11769__$1,name_default,remove_action,action,r_item))
;

}

return (new lokate.components.t11770(r_item,action,remove_action,name_default,map__11769__$1,vec__11768,owner,p__11760,removable_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),33,new cljs.core.Keyword(null,"end-line","end-line",1837326455),107,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/components.cljs"], null)));
});
lokate.components.selectable_item = (function selectable_item(p__11775,owner){
var vec__11781 = p__11775;
var map__11782 = cljs.core.nth.call(null,vec__11781,(0),null);
var map__11782__$1 = ((cljs.core.seq_QMARK_.call(null,map__11782))?cljs.core.apply.call(null,cljs.core.hash_map,map__11782):map__11782);
var name_default = cljs.core.get.call(null,map__11782__$1,new cljs.core.Keyword(null,"name-default","name-default",-679814522));
var action = cljs.core.get.call(null,map__11782__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var class$ = cljs.core.get.call(null,map__11782__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var s_item = cljs.core.nth.call(null,vec__11781,(1),null);
if(typeof lokate.components.t11783 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11783 = (function (s_item,class$,action,name_default,map__11782,vec__11781,owner,p__11775,selectable_item,meta11784){
this.s_item = s_item;
this.class$ = class$;
this.action = action;
this.name_default = name_default;
this.map__11782 = map__11782;
this.vec__11781 = vec__11781;
this.owner = owner;
this.p__11775 = p__11775;
this.selectable_item = selectable_item;
this.meta11784 = meta11784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11783.prototype.om$core$IRender$ = true;

lokate.components.t11783.prototype.om$core$IRender$render$arity$1 = ((function (vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(self__.s_item))?"active ":null)),cljs.core.str(self__.class$)].join(''),new cljs.core.Keyword(null,"action","action",-811238024),self__.action,new cljs.core.Keyword(null,"name-default","name-default",-679814522),self__.name_default], null),self__.s_item], null));
});})(vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item))
;

lokate.components.t11783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item){
return (function (_11785){
var self__ = this;
var _11785__$1 = this;
return self__.meta11784;
});})(vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item))
;

lokate.components.t11783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item){
return (function (_11785,meta11784__$1){
var self__ = this;
var _11785__$1 = this;
return (new lokate.components.t11783(self__.s_item,self__.class$,self__.action,self__.name_default,self__.map__11782,self__.vec__11781,self__.owner,self__.p__11775,self__.selectable_item,meta11784__$1));
});})(vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item))
;

lokate.components.t11783.cljs$lang$type = true;

lokate.components.t11783.cljs$lang$ctorStr = "lokate.components/t11783";

lokate.components.t11783.cljs$lang$ctorPrWriter = ((function (vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11783");
});})(vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item))
;

lokate.components.__GT_t11783 = ((function (vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item){
return (function __GT_t11783(s_item__$1,class$__$1,action__$1,name_default__$1,map__11782__$2,vec__11781__$1,owner__$1,p__11775__$1,selectable_item__$1,meta11784){
return (new lokate.components.t11783(s_item__$1,class$__$1,action__$1,name_default__$1,map__11782__$2,vec__11781__$1,owner__$1,p__11775__$1,selectable_item__$1,meta11784));
});})(vec__11781,map__11782,map__11782__$1,name_default,action,class$,s_item))
;

}

return (new lokate.components.t11783(s_item,class$,action,name_default,map__11782__$1,vec__11781,owner,p__11775,selectable_item,null));
});
lokate.components.item_list = (function item_list(props,items){
return om.core.build.call(null,lokate.components.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177),lokate.components.item),items], null));
});
lokate.components.r_item_list = (function r_item_list(props,r_items){
return om.core.build.call(null,lokate.components.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177),lokate.components.removable_item),r_items], null));
});
lokate.components.select_list = (function select_list(props,s_items){
return om.core.build.call(null,lokate.components.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177),lokate.components.selectable_item),s_items], null));
});
lokate.components.dropdown_select_list = (function dropdown_select_list(items,owner,p__11787){
var map__11797 = p__11787;
var map__11797__$1 = ((cljs.core.seq_QMARK_.call(null,map__11797))?cljs.core.apply.call(null,cljs.core.hash_map,map__11797):map__11797);
var opts = map__11797__$1;
var action = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var class$ = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var id = cljs.core.get.call(null,map__11797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof lokate.components.t11798 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11798 = (function (id,class$,action,opts,map__11797,p__11787,owner,items,dropdown_select_list,meta11799){
this.id = id;
this.class$ = class$;
this.action = action;
this.opts = opts;
this.map__11797 = map__11797;
this.p__11787 = p__11787;
this.owner = owner;
this.items = items;
this.dropdown_select_list = dropdown_select_list;
this.meta11799 = meta11799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11798.prototype.om$core$IRenderState$ = true;

lokate.components.t11798.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function (_,p__11801){
var self__ = this;
var map__11802 = p__11801;
var map__11802__$1 = ((cljs.core.seq_QMARK_.call(null,map__11802))?cljs.core.apply.call(null,cljs.core.hash_map,map__11802):map__11802);
var open = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var ___$1 = this;
return React.DOM.div({"id": self__.id},React.DOM.div({"className": "current-select-wrap"},React.DOM.a({"className": "current-select", "onClick": ((function (___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id){
return (function (){
return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});})(___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id))
},(function (){var attrs11803 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),self__.items)));
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11803))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["current-select-title"], null)], null),attrs11803)):{"className": "current-select-title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11803))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11803)], null))));
})()),React.DOM.div({"className": "drop-down"})),sablono.interpreter.interpret.call(null,(cljs.core.truth_(open)?lokate.components.select_list.call(null,cljs.core.update_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024)], null),((function (___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id){
return (function (p1__11786_SHARP_){
return ((function (___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id){
return (function (x,evt_bus){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),false);

return p1__11786_SHARP_.call(null,x,evt_bus);
});
;})(___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id))
});})(___$1,map__11802,map__11802__$1,open,map__11797,map__11797__$1,opts,action,class$,id))
),self__.items):null)));
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

lokate.components.t11798.prototype.om$core$IInitState$ = true;

lokate.components.t11798.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null);
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

lokate.components.t11798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function (_11800){
var self__ = this;
var _11800__$1 = this;
return self__.meta11799;
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

lokate.components.t11798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function (_11800,meta11799__$1){
var self__ = this;
var _11800__$1 = this;
return (new lokate.components.t11798(self__.id,self__.class$,self__.action,self__.opts,self__.map__11797,self__.p__11787,self__.owner,self__.items,self__.dropdown_select_list,meta11799__$1));
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

lokate.components.t11798.cljs$lang$type = true;

lokate.components.t11798.cljs$lang$ctorStr = "lokate.components/t11798";

lokate.components.t11798.cljs$lang$ctorPrWriter = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11798");
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

lokate.components.__GT_t11798 = ((function (map__11797,map__11797__$1,opts,action,class$,id){
return (function __GT_t11798(id__$1,class$__$1,action__$1,opts__$1,map__11797__$2,p__11787__$1,owner__$1,items__$1,dropdown_select_list__$1,meta11799){
return (new lokate.components.t11798(id__$1,class$__$1,action__$1,opts__$1,map__11797__$2,p__11787__$1,owner__$1,items__$1,dropdown_select_list__$1,meta11799));
});})(map__11797,map__11797__$1,opts,action,class$,id))
;

}

return (new lokate.components.t11798(id,class$,action,opts,map__11797__$1,p__11787,owner,items,dropdown_select_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),29,new cljs.core.Keyword(null,"end-line","end-line",1837326455),151,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),132,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/components.cljs"], null)));
});
lokate.components.input_list = (function input_list(p__11806,owner){
var vec__11811 = p__11806;
var props = cljs.core.nth.call(null,vec__11811,(0),null);
var items = cljs.core.nth.call(null,vec__11811,(1),null);
if(typeof lokate.components.t11812 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11812 = (function (items,props,vec__11811,owner,p__11806,input_list,meta11813){
this.items = items;
this.props = props;
this.vec__11811 = vec__11811;
this.owner = owner;
this.p__11806 = p__11806;
this.input_list = input_list;
this.meta11813 = meta11813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11812.prototype.om$core$IRender$ = true;

lokate.components.t11812.prototype.om$core$IRender$render$arity$1 = ((function (vec__11811,props,items){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,lokate.components.simple_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),((function (___$1,vec__11811,props,items){
return (function (){
om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"children-mounted","children-mounted",226549987),cljs.core.inc);

if(cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"children-mounted","children-mounted",226549987)),cljs.core.count.call(null,self__.items))){
var children = om.core.get_node.call(null,self__.owner).getElementsByTagName("input");
children.item((0)).select();

return children.item((cljs.core.count.call(null,self__.items) - (1))).addEventListener("keydown",((function (children,___$1,vec__11811,props,items){
return (function (e){
if(cljs.core._EQ_.call(null,e.keyCode,(9))){
children.item((0)).select();

e.preventDefault();

return false;
} else {
return null;
}
});})(children,___$1,vec__11811,props,items))
);
} else {
return null;
}
});})(___$1,vec__11811,props,items))
], null)),self__.items], null));
});})(vec__11811,props,items))
;

lokate.components.t11812.prototype.om$core$IInitState$ = true;

lokate.components.t11812.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__11811,props,items){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children-loaded","children-loaded",-1533552928),(0)], null);
});})(vec__11811,props,items))
;

lokate.components.t11812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11811,props,items){
return (function (_11814){
var self__ = this;
var _11814__$1 = this;
return self__.meta11813;
});})(vec__11811,props,items))
;

lokate.components.t11812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11811,props,items){
return (function (_11814,meta11813__$1){
var self__ = this;
var _11814__$1 = this;
return (new lokate.components.t11812(self__.items,self__.props,self__.vec__11811,self__.owner,self__.p__11806,self__.input_list,meta11813__$1));
});})(vec__11811,props,items))
;

lokate.components.t11812.cljs$lang$type = true;

lokate.components.t11812.cljs$lang$ctorStr = "lokate.components/t11812";

lokate.components.t11812.cljs$lang$ctorPrWriter = ((function (vec__11811,props,items){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11812");
});})(vec__11811,props,items))
;

lokate.components.__GT_t11812 = ((function (vec__11811,props,items){
return (function __GT_t11812(items__$1,props__$1,vec__11811__$1,owner__$1,p__11806__$1,input_list__$1,meta11813){
return (new lokate.components.t11812(items__$1,props__$1,vec__11811__$1,owner__$1,p__11806__$1,input_list__$1,meta11813));
});})(vec__11811,props,items))
;

}

return (new lokate.components.t11812(items,props,vec__11811,owner,p__11806,input_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),176,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),155,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/components.cljs"], null)));
});
lokate.components.modal_input = (function modal_input(p__11816,owner){
var vec__11822 = p__11816;
var title = cljs.core.nth.call(null,vec__11822,(0),null);
var placeholder = cljs.core.nth.call(null,vec__11822,(1),null);
var value = cljs.core.nth.call(null,vec__11822,(2),null);
var on_edit = cljs.core.nth.call(null,vec__11822,(3),null);
if(typeof lokate.components.t11823 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11823 = (function (on_edit,value,placeholder,title,vec__11822,owner,p__11816,modal_input,meta11824){
this.on_edit = on_edit;
this.value = value;
this.placeholder = placeholder;
this.title = title;
this.vec__11822 = vec__11822;
this.owner = owner;
this.p__11816 = p__11816;
this.modal_input = modal_input;
this.meta11824 = meta11824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11823.prototype.om$core$IRender$ = true;

lokate.components.t11823.prototype.om$core$IRender$render$arity$1 = ((function (vec__11822,title,placeholder,value,on_edit){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "name-input"},(function (){var attrs11826 = self__.title;
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11826))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name-input-title"], null)], null),attrs11826)):{"className": "name-input-title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11826))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11826)], null))));
})(),React.DOM.div({"className": "name-input-wrap"},sablono.interpreter.input.call(null,{"className": "name-input-input", "ref": "input", "type": "text", "placeholder": self__.placeholder, "value": self__.value, "onKeyDown": ((function (___$1,vec__11822,title,placeholder,value,on_edit){
return (function (p1__11815_SHARP_){
if(cljs.core._EQ_.call(null,p1__11815_SHARP_.keyCode,(13))){
self__.on_edit.call(null,om.core.get_node.call(null,self__.owner,"input").value);

return p1__11815_SHARP_.preventDefault();
} else {
return null;
}
});})(___$1,vec__11822,title,placeholder,value,on_edit))
, "onChange": ((function (___$1,vec__11822,title,placeholder,value,on_edit){
return (function (){
return cljs.core.List.EMPTY;
});})(___$1,vec__11822,title,placeholder,value,on_edit))
}),sablono.interpreter.interpret.call(null,om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-done",((function (___$1,vec__11822,title,placeholder,value,on_edit){
return (function (){
return self__.on_edit.call(null,om.core.get_node.call(null,self__.owner,"input").value);
});})(___$1,vec__11822,title,placeholder,value,on_edit))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"ok-btn"], null)], null)))));
});})(vec__11822,title,placeholder,value,on_edit))
;

lokate.components.t11823.prototype.om$core$IDidMount$ = true;

lokate.components.t11823.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (vec__11822,title,placeholder,value,on_edit){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_node.call(null,self__.owner,"input").select();
});})(vec__11822,title,placeholder,value,on_edit))
;

lokate.components.t11823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11822,title,placeholder,value,on_edit){
return (function (_11825){
var self__ = this;
var _11825__$1 = this;
return self__.meta11824;
});})(vec__11822,title,placeholder,value,on_edit))
;

lokate.components.t11823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11822,title,placeholder,value,on_edit){
return (function (_11825,meta11824__$1){
var self__ = this;
var _11825__$1 = this;
return (new lokate.components.t11823(self__.on_edit,self__.value,self__.placeholder,self__.title,self__.vec__11822,self__.owner,self__.p__11816,self__.modal_input,meta11824__$1));
});})(vec__11822,title,placeholder,value,on_edit))
;

lokate.components.t11823.cljs$lang$type = true;

lokate.components.t11823.cljs$lang$ctorStr = "lokate.components/t11823";

lokate.components.t11823.cljs$lang$ctorPrWriter = ((function (vec__11822,title,placeholder,value,on_edit){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11823");
});})(vec__11822,title,placeholder,value,on_edit))
;

lokate.components.__GT_t11823 = ((function (vec__11822,title,placeholder,value,on_edit){
return (function __GT_t11823(on_edit__$1,value__$1,placeholder__$1,title__$1,vec__11822__$1,owner__$1,p__11816__$1,modal_input__$1,meta11824){
return (new lokate.components.t11823(on_edit__$1,value__$1,placeholder__$1,title__$1,vec__11822__$1,owner__$1,p__11816__$1,modal_input__$1,meta11824));
});})(vec__11822,title,placeholder,value,on_edit))
;

}

return (new lokate.components.t11823(on_edit,value,placeholder,title,vec__11822,owner,p__11816,modal_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),45,new cljs.core.Keyword(null,"end-line","end-line",1837326455),205,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),182,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/components.cljs"], null)));
});
lokate.components.mount_overlay = (function mount_overlay(overlay){
return om.core.root.call(null,(function (overlay__$1,owner){
if(typeof lokate.components.t11831 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11831 = (function (owner,overlay,mount_overlay,meta11832){
this.owner = owner;
this.overlay = overlay;
this.mount_overlay = mount_overlay;
this.meta11832 = meta11832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11831.prototype.om$core$IRender$ = true;

lokate.components.t11831.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var attrs11834 = self__.overlay;
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11834))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"overlay"], null),attrs11834)):{"id": "overlay"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11834))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11834)], null))));
});

lokate.components.t11831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11833){
var self__ = this;
var _11833__$1 = this;
return self__.meta11832;
});

lokate.components.t11831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11833,meta11832__$1){
var self__ = this;
var _11833__$1 = this;
return (new lokate.components.t11831(self__.owner,self__.overlay,self__.mount_overlay,meta11832__$1));
});

lokate.components.t11831.cljs$lang$type = true;

lokate.components.t11831.cljs$lang$ctorStr = "lokate.components/t11831";

lokate.components.t11831.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11831");
});

lokate.components.__GT_t11831 = (function __GT_t11831(owner__$1,overlay__$2,mount_overlay__$1,meta11832){
return (new lokate.components.t11831(owner__$1,overlay__$2,mount_overlay__$1,meta11832));
});

}

return (new lokate.components.t11831(owner,overlay__$1,mount_overlay,null));
}),overlay,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("overlay-root")], null));
});
lokate.components.unmount_overlay = (function unmount_overlay(){
return om.core.detach_root.call(null,document.getElementById("overlay-root"));
});
lokate.components.display_input = (function() {
var display_input = null;
var display_input__3 = (function (title,placeholder,on_edit){
return display_input.call(null,title,placeholder,null,on_edit);
});
var display_input__4 = (function (title,placeholder,initial_value,on_edit){
var on_edit_STAR_ = (function (res){
on_edit.call(null,res);

return lokate.components.unmount_overlay.call(null);
});
return lokate.components.mount_overlay.call(null,om.core.build.call(null,lokate.components.modal_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,placeholder,initial_value,on_edit_STAR_], null)));
});
display_input = function(title,placeholder,initial_value,on_edit){
switch(arguments.length){
case 3:
return display_input__3.call(this,title,placeholder,initial_value);
case 4:
return display_input__4.call(this,title,placeholder,initial_value,on_edit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
display_input.cljs$core$IFn$_invoke$arity$3 = display_input__3;
display_input.cljs$core$IFn$_invoke$arity$4 = display_input__4;
return display_input;
})()
;
lokate.components.icon = (function icon(icon_class){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-wrapper","div.icon-wrapper",-1383243250),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("icon "),cljs.core.str(icon_class)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("icon "),cljs.core.str(icon_class)].join('')], null)], null)], null)], null);
});
lokate.components.home_icon = lokate.components.icon.call(null,"icon-home");
lokate.components.back_btn = (function back_btn(back_action){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-navigate-before back-btn",back_action], null));
});
lokate.components.resize_btn = (function resize_btn(drawer){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("icon-fullscreen"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824).cljs$core$IFn$_invoke$arity$1(drawer))?"-exit":null))].join(''),(function (){
return om.core.transact_BANG_.call(null,drawer,new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),cljs.core.not);
})], null));
});
lokate.components.navicon = (function navicon(drawer){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("navicon icon-menu"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(drawer))?" active":null))].join(''),(function (){
return om.core.transact_BANG_.call(null,drawer,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
})], null));
});
lokate.components.cancel_btn = (function cancel_btn(action){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-cancel",action], null));
});
lokate.components.done_BANG__btn = (function done_BANG__btn(action){
return om.core.build.call(null,lokate.components.btn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-done",action], null));
});
lokate.components.banner = (function banner(children,owner){
if(typeof lokate.components.t11842 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11842 = (function (owner,children,banner,meta11843){
this.owner = owner;
this.children = children;
this.banner = banner;
this.meta11843 = meta11843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11842.prototype.om$core$IRender$ = true;

lokate.components.t11842.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "banner-container"},cljs.core.into_array.call(null,(function (){var iter__4514__auto__ = ((function (this__10258__auto____$1){
return (function iter__11845(s__11846){
return (new cljs.core.LazySeq(null,((function (this__10258__auto____$1){
return (function (){
var s__11846__$1 = s__11846;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11846__$1);
if(temp__4126__auto__){
var s__11846__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11846__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11846__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11848 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11847 = (0);
while(true){
if((i__11847 < size__4513__auto__)){
var child = cljs.core._nth.call(null,c__4512__auto__,i__11847);
cljs.core.chunk_append.call(null,b__11848,sablono.interpreter.interpret.call(null,child));

var G__11849 = (i__11847 + (1));
i__11847 = G__11849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11848),iter__11845.call(null,cljs.core.chunk_rest.call(null,s__11846__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11848),null);
}
} else {
var child = cljs.core.first.call(null,s__11846__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,child),iter__11845.call(null,cljs.core.rest.call(null,s__11846__$2)));
}
} else {
return null;
}
break;
}
});})(this__10258__auto____$1))
,null,null));
});})(this__10258__auto____$1))
;
return iter__4514__auto__.call(null,self__.children);
})()));
});

lokate.components.t11842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11844){
var self__ = this;
var _11844__$1 = this;
return self__.meta11843;
});

lokate.components.t11842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11844,meta11843__$1){
var self__ = this;
var _11844__$1 = this;
return (new lokate.components.t11842(self__.owner,self__.children,self__.banner,meta11843__$1));
});

lokate.components.t11842.cljs$lang$type = true;

lokate.components.t11842.cljs$lang$ctorStr = "lokate.components/t11842";

lokate.components.t11842.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11842");
});

lokate.components.__GT_t11842 = (function __GT_t11842(owner__$1,children__$1,banner__$1,meta11843){
return (new lokate.components.t11842(owner__$1,children__$1,banner__$1,meta11843));
});

}

return (new lokate.components.t11842(owner,children,banner,null));
});
lokate.components.title_banner = (function title_banner(title,child){
return om.core.build.call(null,lokate.components.banner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.banner-title","span.banner-title",1033418844),title], null)], null));
});
lokate.components.return_banner = (function return_banner(p__11850,owner){
var vec__11855 = p__11850;
var child = cljs.core.nth.call(null,vec__11855,(0),null);
var return_action = cljs.core.nth.call(null,vec__11855,(1),null);
if(typeof lokate.components.t11856 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11856 = (function (return_action,child,vec__11855,owner,p__11850,return_banner,meta11857){
this.return_action = return_action;
this.child = child;
this.vec__11855 = vec__11855;
this.owner = owner;
this.p__11850 = p__11850;
this.return_banner = return_banner;
this.meta11857 = meta11857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11856.prototype.om$core$IRender$ = true;

lokate.components.t11856.prototype.om$core$IRender$render$arity$1 = ((function (vec__11855,child,return_action){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return om.core.build.call(null,lokate.components.banner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.components.back_btn.call(null,((function (this__10258__auto____$1,vec__11855,child,return_action){
return (function (){
return self__.return_action.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)));
});})(this__10258__auto____$1,vec__11855,child,return_action))
),self__.child], null));
});})(vec__11855,child,return_action))
;

lokate.components.t11856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11855,child,return_action){
return (function (_11858){
var self__ = this;
var _11858__$1 = this;
return self__.meta11857;
});})(vec__11855,child,return_action))
;

lokate.components.t11856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11855,child,return_action){
return (function (_11858,meta11857__$1){
var self__ = this;
var _11858__$1 = this;
return (new lokate.components.t11856(self__.return_action,self__.child,self__.vec__11855,self__.owner,self__.p__11850,self__.return_banner,meta11857__$1));
});})(vec__11855,child,return_action))
;

lokate.components.t11856.cljs$lang$type = true;

lokate.components.t11856.cljs$lang$ctorStr = "lokate.components/t11856";

lokate.components.t11856.cljs$lang$ctorPrWriter = ((function (vec__11855,child,return_action){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11856");
});})(vec__11855,child,return_action))
;

lokate.components.__GT_t11856 = ((function (vec__11855,child,return_action){
return (function __GT_t11856(return_action__$1,child__$1,vec__11855__$1,owner__$1,p__11850__$1,return_banner__$1,meta11857){
return (new lokate.components.t11856(return_action__$1,child__$1,vec__11855__$1,owner__$1,p__11850__$1,return_banner__$1,meta11857));
});})(vec__11855,child,return_action))
;

}

return (new lokate.components.t11856(return_action,child,vec__11855,owner,p__11850,return_banner,null));
});
lokate.components.title_return_banner = (function title_return_banner(title,return_action){
return om.core.build.call(null,lokate.components.return_banner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.banner-title","span.banner-title",1033418844),title], null),return_action], null));
});
lokate.components.simple_nav_panel = (function simple_nav_panel(controls,owner){
if(typeof lokate.components.t11866 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11866 = (function (owner,controls,simple_nav_panel,meta11867){
this.owner = owner;
this.controls = controls;
this.simple_nav_panel = simple_nav_panel;
this.meta11867 = meta11867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11866.prototype.om$core$IRender$ = true;

lokate.components.t11866.prototype.om$core$IRender$render$arity$1 = (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "control-panel"},cljs.core.into_array.call(null,(function (){var iter__4514__auto__ = ((function (this__10258__auto____$1){
return (function iter__11869(s__11870){
return (new cljs.core.LazySeq(null,((function (this__10258__auto____$1){
return (function (){
var s__11870__$1 = s__11870;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11870__$1);
if(temp__4126__auto__){
var s__11870__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11870__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11870__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11872 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11871 = (0);
while(true){
if((i__11871 < size__4513__auto__)){
var control = cljs.core._nth.call(null,c__4512__auto__,i__11871);
cljs.core.chunk_append.call(null,b__11872,sablono.interpreter.interpret.call(null,control));

var G__11873 = (i__11871 + (1));
i__11871 = G__11873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11872),iter__11869.call(null,cljs.core.chunk_rest.call(null,s__11870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11872),null);
}
} else {
var control = cljs.core.first.call(null,s__11870__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,control),iter__11869.call(null,cljs.core.rest.call(null,s__11870__$2)));
}
} else {
return null;
}
break;
}
});})(this__10258__auto____$1))
,null,null));
});})(this__10258__auto____$1))
;
return iter__4514__auto__.call(null,self__.controls);
})())));
});

lokate.components.t11866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11868){
var self__ = this;
var _11868__$1 = this;
return self__.meta11867;
});

lokate.components.t11866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11868,meta11867__$1){
var self__ = this;
var _11868__$1 = this;
return (new lokate.components.t11866(self__.owner,self__.controls,self__.simple_nav_panel,meta11867__$1));
});

lokate.components.t11866.cljs$lang$type = true;

lokate.components.t11866.cljs$lang$ctorStr = "lokate.components/t11866";

lokate.components.t11866.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11866");
});

lokate.components.__GT_t11866 = (function __GT_t11866(owner__$1,controls__$1,simple_nav_panel__$1,meta11867){
return (new lokate.components.t11866(owner__$1,controls__$1,simple_nav_panel__$1,meta11867));
});

}

return (new lokate.components.t11866(owner,controls,simple_nav_panel,null));
});
lokate.components.drawer_nav_panel = (function drawer_nav_panel(p__11874,owner){
var vec__11890 = p__11874;
var drawer = cljs.core.nth.call(null,vec__11890,(0),null);
var banner = cljs.core.nth.call(null,vec__11890,(1),null);
var controls = cljs.core.nth.call(null,vec__11890,(2),null);
if(typeof lokate.components.t11891 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.components.t11891 = (function (controls,banner,drawer,vec__11890,owner,p__11874,drawer_nav_panel,meta11892){
this.controls = controls;
this.banner = banner;
this.drawer = drawer;
this.vec__11890 = vec__11890;
this.owner = owner;
this.p__11874 = p__11874;
this.drawer_nav_panel = drawer_nav_panel;
this.meta11892 = meta11892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.components.t11891.prototype.om$core$IRender$ = true;

lokate.components.t11891.prototype.om$core$IRender$render$arity$1 = ((function (vec__11890,drawer,banner,controls){
return (function (this__10258__auto__){
var self__ = this;
var this__10258__auto____$1 = this;
var open_QMARK_ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.drawer);
var attrs11894 = (cljs.core.truth_(open_QMARK_)?self__.banner:lokate.components.title_banner.call(null,"lokate",lokate.components.home_icon));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11894))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation-container"], null)], null),attrs11894)):{"className": "navigation-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11894))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs11895 = (cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-control","div.drawer-control",-289081507),lokate.components.resize_btn.call(null,self__.drawer),(function (){var iter__4514__auto__ = ((function (attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls){
return (function iter__11897(s__11898){
return (new cljs.core.LazySeq(null,((function (attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls){
return (function (){
var s__11898__$1 = s__11898;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11898__$1);
if(temp__4126__auto__){
var s__11898__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11898__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11898__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11900 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11899 = (0);
while(true){
if((i__11899 < size__4513__auto__)){
var control = cljs.core._nth.call(null,c__4512__auto__,i__11899);
cljs.core.chunk_append.call(null,b__11900,control);

var G__11905 = (i__11899 + (1));
i__11899 = G__11905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11900),iter__11897.call(null,cljs.core.chunk_rest.call(null,s__11898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11900),null);
}
} else {
var control = cljs.core.first.call(null,s__11898__$2);
return cljs.core.cons.call(null,control,iter__11897.call(null,cljs.core.rest.call(null,s__11898__$2)));
}
} else {
return null;
}
break;
}
});})(attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls))
,null,null));
});})(attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls))
;
return iter__4514__auto__.call(null,self__.controls);
})()], null):null);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11895))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["control-panel"], null)], null),attrs11895)):{"className": "control-panel"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11895))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,lokate.components.navicon.call(null,self__.drawer))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11895),sablono.interpreter.interpret.call(null,lokate.components.navicon.call(null,self__.drawer))], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11894),(function (){var attrs11896 = (cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer-control","div.drawer-control",-289081507),lokate.components.resize_btn.call(null,self__.drawer),(function (){var iter__4514__auto__ = ((function (attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls){
return (function iter__11901(s__11902){
return (new cljs.core.LazySeq(null,((function (attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls){
return (function (){
var s__11902__$1 = s__11902;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11902__$1);
if(temp__4126__auto__){
var s__11902__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11902__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__11902__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__11904 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__11903 = (0);
while(true){
if((i__11903 < size__4513__auto__)){
var control = cljs.core._nth.call(null,c__4512__auto__,i__11903);
cljs.core.chunk_append.call(null,b__11904,control);

var G__11906 = (i__11903 + (1));
i__11903 = G__11906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),iter__11901.call(null,cljs.core.chunk_rest.call(null,s__11902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),null);
}
} else {
var control = cljs.core.first.call(null,s__11902__$2);
return cljs.core.cons.call(null,control,iter__11901.call(null,cljs.core.rest.call(null,s__11902__$2)));
}
} else {
return null;
}
break;
}
});})(attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls))
,null,null));
});})(attrs11894,open_QMARK_,this__10258__auto____$1,vec__11890,drawer,banner,controls))
;
return iter__4514__auto__.call(null,self__.controls);
})()], null):null);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11896))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["control-panel"], null)], null),attrs11896)):{"className": "control-panel"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11896))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,lokate.components.navicon.call(null,self__.drawer))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11896),sablono.interpreter.interpret.call(null,lokate.components.navicon.call(null,self__.drawer))], null))));
})()], null))));
});})(vec__11890,drawer,banner,controls))
;

lokate.components.t11891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11890,drawer,banner,controls){
return (function (_11893){
var self__ = this;
var _11893__$1 = this;
return self__.meta11892;
});})(vec__11890,drawer,banner,controls))
;

lokate.components.t11891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11890,drawer,banner,controls){
return (function (_11893,meta11892__$1){
var self__ = this;
var _11893__$1 = this;
return (new lokate.components.t11891(self__.controls,self__.banner,self__.drawer,self__.vec__11890,self__.owner,self__.p__11874,self__.drawer_nav_panel,meta11892__$1));
});})(vec__11890,drawer,banner,controls))
;

lokate.components.t11891.cljs$lang$type = true;

lokate.components.t11891.cljs$lang$ctorStr = "lokate.components/t11891";

lokate.components.t11891.cljs$lang$ctorPrWriter = ((function (vec__11890,drawer,banner,controls){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.components/t11891");
});})(vec__11890,drawer,banner,controls))
;

lokate.components.__GT_t11891 = ((function (vec__11890,drawer,banner,controls){
return (function __GT_t11891(controls__$1,banner__$1,drawer__$1,vec__11890__$1,owner__$1,p__11874__$1,drawer_nav_panel__$1,meta11892){
return (new lokate.components.t11891(controls__$1,banner__$1,drawer__$1,vec__11890__$1,owner__$1,p__11874__$1,drawer_nav_panel__$1,meta11892));
});})(vec__11890,drawer,banner,controls))
;

}

return (new lokate.components.t11891(controls,banner,drawer,vec__11890,owner,p__11874,drawer_nav_panel,null));
});
lokate.components.tip = (function tip(tip_msg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tip-wrapper","div.tip-wrapper",2006732444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tip","div.tip",118182286),tip_msg], null)], null);
});
