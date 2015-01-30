// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lokate.app');
goog.require('cljs.core');
goog.require('lokate.collections');
goog.require('clojure.set');
goog.require('lokate.resources');
goog.require('lokate.components');
goog.require('lokate.core');
goog.require('lokate.util');
goog.require('sablono.core');
goog.require('lokate.home');
goog.require('cljs.core.async');
goog.require('lokate.db');
goog.require('lokate.unit');
goog.require('lokate.check_in');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
lokate.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"resource-types","resource-types",1520646353),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orientation","orientation",623557579),"",new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"views-fn","views-fn",1430844512),lokate.home.home_views,new cljs.core.Keyword(null,"views-state","views-state",-602645309),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"maximized?","maximized?",-1760137824),false], null)], null)], null)], null));
lokate.app.event_bus = cljs.core.async.chan.call(null);
lokate.app.event_bus_pub = cljs.core.async.pub.call(null,lokate.app.event_bus,cljs.core.first);
lokate.app.set_orientation = (function set_orientation(){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (p1__11579_SHARP_){
return cljs.core.assoc_in.call(null,p1__11579_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null),(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
lokate.app.set_drawer = (function set_drawer(k,v){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (p1__11580_SHARP_){
return cljs.core.assoc_in.call(null,p1__11580_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),k], null),v);
}));
});
lokate.app.update_drawer = (function update_drawer(k,fun){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (p1__11581_SHARP_){
return cljs.core.update_in.call(null,p1__11581_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),k], null),fun);
}));
});
var events_11620 = cljs.core.async.sub.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"drawer","drawer",-1346127858),cljs.core.async.chan.call(null));
var c__7172__auto___11621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7172__auto___11621,events_11620){
return (function (){
var f__7173__auto__ = (function (){var switch__7116__auto__ = ((function (c__7172__auto___11621,events_11620){
return (function (state_11601){
var state_val_11602 = (state_11601[(1)]);
if((state_val_11602 === (8))){
var inst_11596 = (state_11601[(2)]);
var inst_11584 = inst_11596;
var state_11601__$1 = (function (){var statearr_11603 = state_11601;
(statearr_11603[(7)] = inst_11584);

return statearr_11603;
})();
var statearr_11604_11622 = state_11601__$1;
(statearr_11604_11622[(2)] = null);

(statearr_11604_11622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (7))){
var inst_11584 = (state_11601[(7)]);
var inst_11589 = cljs.core.drop.call(null,(2),inst_11584);
var inst_11590 = cljs.core.apply.call(null,lokate.app.update_drawer,inst_11589);
var state_11601__$1 = state_11601;
var statearr_11605_11623 = state_11601__$1;
(statearr_11605_11623[(2)] = inst_11590);

(statearr_11605_11623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (6))){
var inst_11584 = (state_11601[(7)]);
var inst_11586 = cljs.core.drop.call(null,(2),inst_11584);
var inst_11587 = cljs.core.apply.call(null,lokate.app.set_drawer,inst_11586);
var state_11601__$1 = state_11601;
var statearr_11606_11624 = state_11601__$1;
(statearr_11606_11624[(2)] = inst_11587);

(statearr_11606_11624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (5))){
var inst_11594 = (state_11601[(2)]);
var state_11601__$1 = (function (){var statearr_11607 = state_11601;
(statearr_11607[(8)] = inst_11594);

return statearr_11607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11601__$1,(8),events_11620);
} else {
if((state_val_11602 === (4))){
var inst_11599 = (state_11601[(2)]);
var state_11601__$1 = state_11601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11601__$1,inst_11599);
} else {
if((state_val_11602 === (3))){
var inst_11584 = (state_11601[(7)]);
var inst_11592 = cljs.core.second.call(null,inst_11584);
var state_11601__$1 = state_11601;
var G__11608_11625 = (((inst_11592 instanceof cljs.core.Keyword))?inst_11592.fqn:null);
switch (G__11608_11625) {
case "update":
var statearr_11609_11627 = state_11601__$1;
(statearr_11609_11627[(1)] = (7));


break;
case "set":
var statearr_11610_11628 = state_11601__$1;
(statearr_11610_11628[(1)] = (6));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_11592)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (2))){
var inst_11583 = (state_11601[(2)]);
var inst_11584 = inst_11583;
var state_11601__$1 = (function (){var statearr_11611 = state_11601;
(statearr_11611[(7)] = inst_11584);

return statearr_11611;
})();
var statearr_11612_11629 = state_11601__$1;
(statearr_11612_11629[(2)] = null);

(statearr_11612_11629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11602 === (1))){
var state_11601__$1 = state_11601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11601__$1,(2),events_11620);
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
});})(c__7172__auto___11621,events_11620))
;
return ((function (switch__7116__auto__,c__7172__auto___11621,events_11620){
return (function() {
var state_machine__7117__auto__ = null;
var state_machine__7117__auto____0 = (function (){
var statearr_11616 = [null,null,null,null,null,null,null,null,null];
(statearr_11616[(0)] = state_machine__7117__auto__);

(statearr_11616[(1)] = (1));

return statearr_11616;
});
var state_machine__7117__auto____1 = (function (state_11601){
while(true){
var ret_value__7118__auto__ = (function (){try{while(true){
var result__7119__auto__ = switch__7116__auto__.call(null,state_11601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7119__auto__;
}
break;
}
}catch (e11617){if((e11617 instanceof Object)){
var ex__7120__auto__ = e11617;
var statearr_11618_11630 = state_11601;
(statearr_11618_11630[(5)] = ex__7120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11631 = state_11601;
state_11601 = G__11631;
continue;
} else {
return ret_value__7118__auto__;
}
break;
}
});
state_machine__7117__auto__ = function(state_11601){
switch(arguments.length){
case 0:
return state_machine__7117__auto____0.call(this);
case 1:
return state_machine__7117__auto____1.call(this,state_11601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7117__auto____0;
state_machine__7117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7117__auto____1;
return state_machine__7117__auto__;
})()
;})(switch__7116__auto__,c__7172__auto___11621,events_11620))
})();
var state__7174__auto__ = (function (){var statearr_11619 = f__7173__auto__.call(null);
(statearr_11619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7172__auto___11621);

return statearr_11619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7174__auto__);
});})(c__7172__auto___11621,events_11620))
);

lokate.app.add_collection = (function add_collection(data,title){
var collection = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,lokate.util.uuid.call(null)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),lokate.util.now.call(null),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.PersistentArrayMap.EMPTY], null);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),((function (collection){
return (function (p1__11632_SHARP_){
return cljs.core.assoc.call(null,p1__11632_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),collection);
});})(collection))
,new cljs.core.Keyword(null,"collection","collection",-683361892));

return collection;
});
lokate.app.add_unit = (function add_unit(data,cid,latlng,title){
var unit = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,lokate.util.uuid.call(null)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),lokate.util.now.call(null),new cljs.core.Keyword(null,"latlng","latlng",-199468611),latlng,new cljs.core.Keyword(null,"status","status",-1997798413),"green",new cljs.core.Keyword(null,"resources","resources",1632806811),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"cid","cid",-1940591320),cid], null);
om.core.update_BANG_.call(null,data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505),cid,new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit)], null),unit,new cljs.core.Keyword(null,"unit","unit",375175175));

return unit;
});
lokate.app.add_resource_type = (function add_resource_type(data,title){
var resource_type = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,lokate.util.uuid.call(null)),new cljs.core.Keyword(null,"title","title",636505583),title], null);
return om.core.update_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"resource-types","resource-types",1520646353),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(resource_type)], null),resource_type,new cljs.core.Keyword(null,"resource","resource",251898836));
});
lokate.app.set_location = (function set_location(route){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (p1__11633_SHARP_){
return cljs.core.assoc_in.call(null,p1__11633_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"location","location",1815599388)], null),route);
}));
});
lokate.app.get_views_data = (function get_views_data(path){
var G__11635 = (((path instanceof cljs.core.Keyword))?path.fqn:null);
switch (G__11635) {
case "resources":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.resources.resource_types_views,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),null], null)], null);

break;
case "check-in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.check_in.check_in_views,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"commit","commit",113374389),cljs.core.PersistentArrayMap.EMPTY], null)], null);

break;
case "unit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.unit.unit_views,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"info","info",-317069002)], null)], null);

break;
case "collection":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.collections.collection_views], null);

break;
case "collections":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.collections.collections_views], null);

break;
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lokate.home.home_views], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(path)].join('')));

}
});
lokate.app.set_views = (function() {
var set_views = null;
var set_views__1 = (function (fn){
return set_views.call(null,fn,cljs.core.PersistentArrayMap.EMPTY);
});
var set_views__2 = (function (fn,state){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (p1__11637_SHARP_){
return cljs.core.update_in.call(null,p1__11637_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"views-fn","views-fn",1430844512),fn,new cljs.core.Keyword(null,"views-state","views-state",-602645309),state], null));
}));
});
set_views = function(fn,state){
switch(arguments.length){
case 1:
return set_views__1.call(this,fn);
case 2:
return set_views__2.call(this,fn,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_views.cljs$core$IFn$_invoke$arity$1 = set_views__1;
set_views.cljs$core$IFn$_invoke$arity$2 = set_views__2;
return set_views;
})()
;
/**
* @param {...*} var_args
*/
lokate.app.set_route = (function() { 
var set_route__delegate = function (path,args){
lokate.app.set_location.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,args], null));

return cljs.core.apply.call(null,lokate.app.set_views,lokate.app.get_views_data.call(null,path));
};
var set_route = function (path,var_args){
var args = null;
if (arguments.length > 1) {
var G__11638__i = 0, G__11638__a = new Array(arguments.length -  1);
while (G__11638__i < G__11638__a.length) {G__11638__a[G__11638__i] = arguments[G__11638__i + 1]; ++G__11638__i;}
  args = new cljs.core.IndexedSeq(G__11638__a,0);
} 
return set_route__delegate.call(this,path,args);};
set_route.cljs$lang$maxFixedArity = 1;
set_route.cljs$lang$applyTo = (function (arglist__11639){
var path = cljs.core.first(arglist__11639);
var args = cljs.core.rest(arglist__11639);
return set_route__delegate(path,args);
});
set_route.cljs$core$IFn$_invoke$arity$variadic = set_route__delegate;
return set_route;
})()
;
lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"set-route","set-route",-1886203891),(function (p__11640){
var vec__11641 = p__11640;
var topic = cljs.core.nth.call(null,vec__11641,(0),null);
var route = cljs.core.nth.call(null,vec__11641,(1),null);
return cljs.core.apply.call(null,lokate.app.set_route,route);
}));
lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"window","window",724519534),(function (p__11644){
var vec__11645 = p__11644;
var topic = cljs.core.nth.call(null,vec__11645,(0),null);
var cmd = cljs.core.nth.call(null,vec__11645,(1),null);
var k = cljs.core.nth.call(null,vec__11645,(2),null);
var vorfn = cljs.core.nth.call(null,vec__11645,(3),null);
var G__11646 = (((cmd instanceof cljs.core.Keyword))?cmd.fqn:null);
switch (G__11646) {
case "update":
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,((function (G__11646,vec__11645,topic,cmd,k,vorfn){
return (function (p1__11643_SHARP_){
return cljs.core.update_in.call(null,p1__11643_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"views-state","views-state",-602645309),k], null),vorfn);
});})(G__11646,vec__11645,topic,cmd,k,vorfn))
);

break;
case "set":
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,((function (G__11646,vec__11645,topic,cmd,k,vorfn){
return (function (p1__11642_SHARP_){
return cljs.core.assoc_in.call(null,p1__11642_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"views-state","views-state",-602645309),k], null),vorfn);
});})(G__11646,vec__11645,topic,cmd,k,vorfn))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cmd)].join('')));

}
}));
lokate.app.app = (function app(data,owner){
if(typeof lokate.app.t11661 !== 'undefined'){
} else {

/**
* @constructor
*/
lokate.app.t11661 = (function (owner,data,app,meta11662){
this.owner = owner;
this.data = data;
this.app = app;
this.meta11662 = meta11662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lokate.app.t11661.prototype.om$core$IRender$ = true;

lokate.app.t11661.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,lokate.core.window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(self__.data)),self__.data], null));
});

lokate.app.t11661.prototype.om$core$IWillMount$ = true;

lokate.app.t11661.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"add-collection","add-collection",-577117339),((function (___$1){
return (function (e){
return lokate.components.display_input.call(null,"Collection name","Untitled collection",((function (___$1){
return (function (p1__11648_SHARP_){
var collection = lokate.app.add_collection.call(null,self__.data,p1__11648_SHARP_);
return lokate.app.set_route.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection));
});})(___$1))
);
});})(___$1))
);

lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"delete-collection","delete-collection",-2081461940),((function (___$1){
return (function (p__11664){
var vec__11665 = p__11664;
var topic = cljs.core.nth.call(null,vec__11665,(0),null);
var id = cljs.core.nth.call(null,vec__11665,(1),null);
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),((function (vec__11665,topic,id,___$1){
return (function (p1__11649_SHARP_){
return cljs.core.dissoc.call(null,p1__11649_SHARP_,id);
});})(vec__11665,topic,id,___$1))
,new cljs.core.Keyword(null,"collection","collection",-683361892));
});})(___$1))
);

lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"add-unit","add-unit",-1676495671),((function (___$1){
return (function (e){
return lokate.components.display_input.call(null,"Unit name","Untitled unit",((function (___$1){
return (function (p1__11650_SHARP_){
var selected_cid = cljs.core.first.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lokate.app.app_state))))));
var unit = lokate.app.add_unit.call(null,self__.data,selected_cid,cljs.core.second.call(null,e),p1__11650_SHARP_);
return lokate.app.set_route.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),selected_cid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(unit));
});})(___$1))
);
});})(___$1))
);

lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"add-resource","add-resource",2132885707),((function (___$1){
return (function (e){
return lokate.components.display_input.call(null,"Resource name","Untitled resource",((function (___$1){
return (function (p1__11651_SHARP_){
return lokate.app.add_resource_type.call(null,self__.data,p1__11651_SHARP_);
});})(___$1))
);
});})(___$1))
);

return lokate.util.sub_go_loop.call(null,lokate.app.event_bus_pub,new cljs.core.Keyword(null,"delete-resource","delete-resource",804001097),((function (___$1){
return (function (p__11666){
var vec__11667 = p__11666;
var topic = cljs.core.nth.call(null,vec__11667,(0),null);
var id = cljs.core.nth.call(null,vec__11667,(1),null);
om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"resource-types","resource-types",1520646353)], null),((function (vec__11667,topic,id,___$1){
return (function (p1__11652_SHARP_){
return cljs.core.dissoc.call(null,p1__11652_SHARP_,id);
});})(vec__11667,topic,id,___$1))
,new cljs.core.Keyword(null,"resource","resource",251898836));

var units = lokate.util.get_units.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(self__.data)));
return lokate.util.mmap.call(null,((function (units,vec__11667,topic,id,___$1){
return (function (unit){
return om.core.transact_BANG_.call(null,unit,cljs.core.PersistentVector.EMPTY,((function (units,vec__11667,topic,id,___$1){
return (function (p1__11653_SHARP_){
return cljs.core.update_in.call(null,p1__11653_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.dissoc,id);
});})(units,vec__11667,topic,id,___$1))
,new cljs.core.Keyword(null,"unit","unit",375175175));
});})(units,vec__11667,topic,id,___$1))
,units);
});})(___$1))
);
});

lokate.app.t11661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11663){
var self__ = this;
var _11663__$1 = this;
return self__.meta11662;
});

lokate.app.t11661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11663,meta11662__$1){
var self__ = this;
var _11663__$1 = this;
return (new lokate.app.t11661(self__.owner,self__.data,self__.app,meta11662__$1));
});

lokate.app.t11661.cljs$lang$type = true;

lokate.app.t11661.cljs$lang$ctorStr = "lokate.app/t11661";

lokate.app.t11661.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write.call(null,writer__4346__auto__,"lokate.app/t11661");
});

lokate.app.__GT_t11661 = (function __GT_t11661(owner__$1,data__$1,app__$1,meta11662){
return (new lokate.app.t11661(owner__$1,data__$1,app__$1,meta11662));
});

}

return (new lokate.app.t11661(owner,data,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),62,new cljs.core.Keyword(null,"end-line","end-line",1837326455),159,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),115,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/lucas/Scripture/lokate/src/cljs/lokate/app.cljs"], null)));
});
/**
* Recursively transforms all ids from strings to keywords.
*/
lokate.app.keywordize_ids = (function keywordize_ids(m){
var f = (function (p__11670){
var vec__11671 = p__11670;
var k = cljs.core.nth.call(null,vec__11671,(0),null);
var v = cljs.core.nth.call(null,vec__11671,(1),null);
if(lokate.util.ends_with_QMARK_.call(null,cljs.core.name.call(null,k),"id")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.keyword.call(null,v)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk.call(null,((function (f){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else {
return x;
}
});})(f))
,m);
});
lokate.app.populate_model = (function populate_model(key,result){
return cljs.core.swap_BANG_.call(null,lokate.app.app_state,(function (m){
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),key,cljs.core.keyword.call(null,result.key)], null),lokate.app.keywordize_ids.call(null,cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}));
});
lokate.app.init_app_state = (function init_app_state(cb){
return lokate.db.new$.call(null,cljs.core.partial.call(null,lokate.db.get_all,"collection",(function (p1__11673_SHARP_){
return lokate.app.populate_model.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505),p1__11673_SHARP_);
}),cljs.core.partial.call(null,lokate.db.get_all,"resource-type",(function (p1__11672_SHARP_){
return lokate.app.populate_model.call(null,new cljs.core.Keyword(null,"resource-types","resource-types",1520646353),p1__11672_SHARP_);
}),cb)));
});
lokate.app.keyset = (function keyset(m){
return cljs.core.set.call(null,cljs.core.keys.call(null,m));
});
lokate.app.update_db = (function update_db(db_name,old,new$){
var to_add = clojure.set.difference.call(null,cljs.core.set.call(null,new$),cljs.core.set.call(null,old));
var to_delete = clojure.set.difference.call(null,lokate.app.keyset.call(null,old),lokate.app.keyset.call(null,new$));
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (to_add,to_delete){
return (function (p1__11674_SHARP_){
return lokate.db.delete$.call(null,db_name,p1__11674_SHARP_);
});})(to_add,to_delete))
,to_delete));

return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (to_add,to_delete){
return (function (p1__11675_SHARP_){
return lokate.db.add.call(null,db_name,cljs.core.second.call(null,p1__11675_SHARP_));
});})(to_add,to_delete))
,to_add));
});
lokate.app.tx_listen = (function tx_listen(m,root_cursor){
var G__11677 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__11677) {
case "resource":
return lokate.app.update_db.call(null,"resource-type",lokate.util.get_resource_types.call(null,new cljs.core.Keyword(null,"old-state","old-state",1039580704).cljs$core$IFn$_invoke$arity$1(m)),lokate.util.get_resource_types.call(null,new cljs.core.Keyword(null,"new-state","new-state",-490349212).cljs$core$IFn$_invoke$arity$1(m)));

break;
case "collection":
return lokate.app.update_db.call(null,"collection",lokate.util.get_collections.call(null,new cljs.core.Keyword(null,"old-state","old-state",1039580704).cljs$core$IFn$_invoke$arity$1(m)),lokate.util.get_collections.call(null,new cljs.core.Keyword(null,"new-state","new-state",-490349212).cljs$core$IFn$_invoke$arity$1(m)));

break;
case "unit":
var collection = cljs.core.get_in.call(null,cljs.core.deref.call(null,lokate.app.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"cid","cid",-1940591320).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(m))], null));
return lokate.db.add.call(null,"collection",collection);

break;
default:
return null;

}
});
lokate.app.render = (function render(){
return om.core.root.call(null,lokate.app.app,lokate.app.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("root"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),lokate.app.event_bus,new cljs.core.Keyword(null,"event-bus-pub","event-bus-pub",2079987192),lokate.app.event_bus_pub], null),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),lokate.app.tx_listen], null));
});
lokate.app.go_BANG_ = (function go_BANG_(){
lokate.app.set_orientation.call(null);

window.addEventListener("resize",lokate.app.set_orientation);

return lokate.app.init_app_state.call(null,lokate.app.render);
});
lokate.app.go_BANG_.call(null);
