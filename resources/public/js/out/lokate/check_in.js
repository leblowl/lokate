// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.check_in');
goog.require('cljs.core');
goog.require('lokate.components');
goog.require('om.dom');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
lokate.check_in.status_select = (function status_select(data,owner,opts){
if(typeof lokate.check_in.t11914 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.check_in.t11914 = (function (opts,owner,data,status_select,meta11915){
this.opts = opts;
this.owner = owner;
this.data = data;
this.status_select = status_select;
this.meta11915 = meta11915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.check_in.t11914.prototype.om$core$IRenderState$ = true;

lokate.check_in.t11914.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11917){
var self__ = this;
var map__11918 = p__11917;
var map__11918__$1 = ((cljs.core.seq_QMARK_.call(null,map__11918))?cljs.core.apply.call(null,cljs.core.hash_map,map__11918):map__11918);
var active = cljs.core.get.call(null,map__11918__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var ___$1 = this;
return React.DOM.div({"className": [cljs.core.str("status-select-wrapper"),cljs.core.str(((cljs.core._EQ_.call(null,active,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data)))?" active":null))].join('')},React.DOM.div({"onClick": ((function (___$1,map__11918,map__11918__$1,active){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(___$1,map__11918,map__11918__$1,active))
, "style": {"color": cljs.core.get.call(null,lokate.util.status_colors,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data))}, "className": "status-select icon-pin"}));
});

lokate.check_in.t11914.prototype.om$core$IInitState$ = true;

lokate.check_in.t11914.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),"green"], null);
});

lokate.check_in.t11914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11916){
var self__ = this;
var _11916__$1 = this;
return self__.meta11915;
});

lokate.check_in.t11914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11916,meta11915__$1){
var self__ = this;
var _11916__$1 = this;
return (new lokate.check_in.t11914(self__.opts,self__.owner,self__.data,self__.status_select,meta11915__$1));
});

lokate.check_in.t11914.cljs$lang$type = true;

lokate.check_in.t11914.cljs$lang$ctorStr = "lokate.check-in/t11914";

lokate.check_in.t11914.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.check-in/t11914");
});

lokate.check_in.__GT_t11914 = (function __GT_t11914(opts__$1,owner__$1,data__$1,status_select__$1,meta11915){
return (new lokate.check_in.t11914(opts__$1,owner__$1,data__$1,status_select__$1,meta11915));
});

}

return (new lokate.check_in.t11914(opts,owner,data,status_select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),81,new cljs.core.Keyword(null,"end-line","end-line",1837326455),23,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/check_in.cljs"], null)));
});
lokate.check_in.scroll_to_active = (function scroll_to_active(){
var active = document.activeElement;
if(cljs.core._EQ_.call(null,active.tagName,"input")){
return active.offsetParent.scrollTop = (active.offsetTop - (14));
} else {
return null;
}
});
lokate.check_in.unit_resource_editable = (function unit_resource_editable(p__11919,owner){
var vec__11925 = p__11919;
var props = cljs.core.nth.call(null,vec__11925,(0),null);
var resource = cljs.core.nth.call(null,vec__11925,(1),null);
if(typeof lokate.check_in.t11926 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.check_in.t11926 = (function (resource,props,vec__11925,owner,p__11919,unit_resource_editable,meta11927){
this.resource = resource;
this.props = props;
this.vec__11925 = vec__11925;
this.owner = owner;
this.p__11919 = p__11919;
this.unit_resource_editable = unit_resource_editable;
this.meta11927 = meta11927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.check_in.t11926.prototype.om$core$IRender$ = true;

lokate.check_in.t11926.prototype.om$core$IRender$render$arity$1 = ((function (vec__11925,props,resource){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "unit-resource"},(function (){var attrs11929 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.resource);
return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs11929))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unit-resource-title"], null)], null),attrs11929)):{"className": "unit-resource-title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11929))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11929)], null))));
})(),React.DOM.div({"className": "unit-resource-count-box"},sablono.interpreter.input.call(null,{"className": "unit-resource-count-input", "type": "number", "min": (0), "max": (100), "value": (0), "onChange": ((function (___$1,vec__11925,props,resource){
return (function (){
return cljs.core.List.EMPTY;
});})(___$1,vec__11925,props,resource))
})));
});})(vec__11925,props,resource))
;

lokate.check_in.t11926.prototype.om$core$IWillUnmount$ = true;

lokate.check_in.t11926.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__11925,props,resource){
return (function (_){
var self__ = this;
var ___$1 = this;
return window.removeEventListener("resize",lokate.check_in.scroll_to_active);
});})(vec__11925,props,resource))
;

lokate.check_in.t11926.prototype.om$core$IWillMount$ = true;

lokate.check_in.t11926.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__11925,props,resource){
return (function (_){
var self__ = this;
var ___$1 = this;

return window.addEventListener("resize",((function (___$1,vec__11925,props,resource){
return (function (){
var and__3746__auto___11930 = lokate.check_in.timer;
if(cljs.core.truth_(and__3746__auto___11930)){
window.clearTimeout(lokate.check_in.timer);
} else {
}

lokate.check_in.timer = window.setTimeout(lokate.check_in.scroll_to_active,(100));
});})(___$1,vec__11925,props,resource))
);
});})(vec__11925,props,resource))
;

lokate.check_in.t11926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11925,props,resource){
return (function (_11928){
var self__ = this;
var _11928__$1 = this;
return self__.meta11927;
});})(vec__11925,props,resource))
;

lokate.check_in.t11926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11925,props,resource){
return (function (_11928,meta11927__$1){
var self__ = this;
var _11928__$1 = this;
return (new lokate.check_in.t11926(self__.resource,self__.props,self__.vec__11925,self__.owner,self__.p__11919,self__.unit_resource_editable,meta11927__$1));
});})(vec__11925,props,resource))
;

lokate.check_in.t11926.cljs$lang$type = true;

lokate.check_in.t11926.cljs$lang$ctorStr = "lokate.check-in/t11926";

lokate.check_in.t11926.cljs$lang$ctorPrWriter = ((function (vec__11925,props,resource){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.check-in/t11926");
});})(vec__11925,props,resource))
;

lokate.check_in.__GT_t11926 = ((function (vec__11925,props,resource){
return (function __GT_t11926(resource__$1,props__$1,vec__11925__$1,owner__$1,p__11919__$1,unit_resource_editable__$1,meta11927){
return (new lokate.check_in.t11926(resource__$1,props__$1,vec__11925__$1,owner__$1,p__11919__$1,unit_resource_editable__$1,meta11927));
});})(vec__11925,props,resource))
;

}

return (new lokate.check_in.t11926(resource,props,vec__11925,owner,p__11919,unit_resource_editable,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),37,new cljs.core.Keyword(null,"end-line","end-line",1837326455),60,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),32,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/check_in.cljs"], null)));
});
lokate.check_in.check_in_rscs_view = (function check_in_rscs_view(unit,owner){
if(typeof lokate.check_in.t11934 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.check_in.t11934 = (function (owner,unit,check_in_rscs_view,meta11935){
this.owner = owner;
this.unit = unit;
this.check_in_rscs_view = check_in_rscs_view;
this.meta11935 = meta11935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.check_in.t11934.prototype.om$core$IRender$ = true;

lokate.check_in.t11934.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,lokate.components.input_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-comp","item-comp",-1874475177),lokate.check_in.unit_resource_editable], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(self__.unit))], null));
});

lokate.check_in.t11934.prototype.om$core$IWillMount$ = true;

lokate.check_in.t11934.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),true], null));
});

lokate.check_in.t11934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11936){
var self__ = this;
var _11936__$1 = this;
return self__.meta11935;
});

lokate.check_in.t11934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11936,meta11935__$1){
var self__ = this;
var _11936__$1 = this;
return (new lokate.check_in.t11934(self__.owner,self__.unit,self__.check_in_rscs_view,meta11935__$1));
});

lokate.check_in.t11934.cljs$lang$type = true;

lokate.check_in.t11934.cljs$lang$ctorStr = "lokate.check-in/t11934";

lokate.check_in.t11934.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.check-in/t11934");
});

lokate.check_in.__GT_t11934 = (function __GT_t11934(owner__$1,unit__$1,check_in_rscs_view__$1,meta11935){
return (new lokate.check_in.t11934(owner__$1,unit__$1,check_in_rscs_view__$1,meta11935));
});

}

return (new lokate.check_in.t11934(owner,unit,check_in_rscs_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),59,new cljs.core.Keyword(null,"end-line","end-line",1837326455),73,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),64,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/check_in.cljs"], null)));
});
lokate.check_in.check_in_commit_view = (function check_in_commit_view(unit,owner){
if(typeof lokate.check_in.t11941 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.check_in.t11941 = (function (owner,unit,check_in_commit_view,meta11942){
this.owner = owner;
this.unit = unit;
this.check_in_commit_view = check_in_commit_view;
this.meta11942 = meta11942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.check_in.t11941.prototype.om$core$IRender$ = true;

lokate.check_in.t11941.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "commit-wrapper"},React.DOM.div({"id": "commit"},(function (){var attrs11944 = om.core.build_all.call(null,lokate.check_in.status_select,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(self__.unit)], null)], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11944))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"commit-status-wrapper"], null),attrs11944)):{"id": "commit-status-wrapper"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11944))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11944)], null))));
})()));
});

lokate.check_in.t11941.prototype.om$core$IWillUnmount$ = true;

lokate.check_in.t11941.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),false], null));
});

lokate.check_in.t11941.prototype.om$core$IWillMount$ = true;

lokate.check_in.t11941.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),true], null));
});

lokate.check_in.t11941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11943){
var self__ = this;
var _11943__$1 = this;
return self__.meta11942;
});

lokate.check_in.t11941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11943,meta11942__$1){
var self__ = this;
var _11943__$1 = this;
return (new lokate.check_in.t11941(self__.owner,self__.unit,self__.check_in_commit_view,meta11942__$1));
});

lokate.check_in.t11941.cljs$lang$type = true;

lokate.check_in.t11941.cljs$lang$ctorStr = "lokate.check-in/t11941";

lokate.check_in.t11941.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.check-in/t11941");
});

lokate.check_in.__GT_t11941 = (function __GT_t11941(owner__$1,unit__$1,check_in_commit_view__$1,meta11942){
return (new lokate.check_in.t11941(owner__$1,unit__$1,check_in_commit_view__$1,meta11942));
});

}

return (new lokate.check_in.t11941(owner,unit,check_in_commit_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),96,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),77,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/check_in.cljs"], null)));
});
lokate.check_in.check_in_rscs_nav = (function check_in_rscs_nav(unit){
return om.core.build.call(null,lokate.components.simple_nav_panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.components.done_BANG__btn.call(null,(function (p1__11945_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11945_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-path","set-path",976942866),new cljs.core.Keyword(null,"check-in","check-in",-1982167818),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"commit","commit",113374389)], null));
}))], null));
});
lokate.check_in.check_in_commit_nav = (function check_in_commit_nav(unit){
return om.core.build.call(null,lokate.components.simple_nav_panel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.components.done_BANG__btn.call(null,(function (p1__11946_SHARP_){
return cljs.core.async.put_BANG_.call(null,p1__11946_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-path","set-path",976942866),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"info","info",-317069002)], null));
}))], null));
});
lokate.check_in.check_in_views = (function check_in_views(page,unit){
var G__11948 = (((page instanceof cljs.core.Keyword))?page.fqn:null);
switch (G__11948) {
case "commit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.check_in.check_in_commit_nav.call(null,unit),om.core.build.call(null,lokate.check_in.check_in_commit_view,unit)], null);

break;
case "resources":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.check_in.check_in_rscs_nav.call(null,unit),om.core.build.call(null,lokate.check_in.check_in_rscs_view,unit)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(page)].join('')));

}
});
