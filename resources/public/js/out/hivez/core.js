// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.core');
goog.require('cljs.core');
goog.require('hivez.util');
goog.require('cljs.core.async');
goog.require('hivez.db');
goog.require('hivez.input');
goog.require('goog.string');
goog.require('hivez.map');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hivez.input');
goog.require('hivez.util');
goog.require('om.core');
goog.require('om.core');
goog.require('hivez.map');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('hivez.db');
cljs.core.enable_console_print_BANG_.call(null);
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-place","active-place",279041385),null,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639),null], null));
hivez.core.orientation = (function orientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__37441_SHARP_){return cljs.core.assoc.call(null,p1__37441_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(lat_lng))));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__37442_SHARP_){return hivez.util.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__37442_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.new_place = (function new_place(id){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),hivez.core.pos_key.call(null,pos),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.util.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.tselect = (function tselect(data,type_key,select_path){if(cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639)))
{om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active-place","active-place",279041385),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.call(null,(2),select_path)));
} else
{}
return om.core.transact_BANG_.call(null,data,type_key,(function (p1__37443_SHARP_){if(!(cljs.core._EQ_.call(null,p1__37443_SHARP_,select_path)))
{return select_path;
} else
{return null;
}
}));
});
hivez.core.delete$ = (function delete$(data,type_key,select_path){om.core.transact_BANG_.call(null,data,cljs.core.pop.call(null,select_path),(function (p1__37444_SHARP_){return cljs.core.dissoc.call(null,p1__37444_SHARP_,cljs.core.peek.call(null,select_path));
}));
return om.core.update_BANG_.call(null,data,type_key,null);
});
hivez.core.add_hive = (function add_hive(data,pos){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));if(cljs.core.truth_(temp__4126__auto__))
{var select_path = temp__4126__auto__;var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,select_path,((function (hive,select_path,temp__4126__auto__){
return (function (p1__37445_SHARP_){return cljs.core.assoc_in.call(null,p1__37445_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null),hive);
});})(hive,select_path,temp__4126__auto__))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639),cljs.core.conj.call(null,select_path,new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)));
return hivez.db.db_add.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),select_path));
} else
{return null;
}
});
hivez.core.add_place = (function add_place(data){var id = cljs.core.count.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"places","places",1043491706),((function (id){
return (function (p1__37446_SHARP_){return cljs.core.conj.call(null,p1__37446_SHARP_,hivez.core.new_place.call(null,id));
});})(id))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active-place","active-place",279041385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),id], null));
return hivez.db.db_add.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
});
hivez.core.display_pos = (function display_pos(hive){var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive);return ("Lat: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(pos)))+" Lng: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hivez.util.floormat.call(null,"%.2f",new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(pos))));
});
hivez.core.display_origin = (function display_origin(hive){return ("Originated: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(hive)));
});
hivez.core.begin_edit = (function begin_edit(owner,edit_key){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),edit_key);
});
hivez.core.end_edit = (function end_edit(owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
hivez.core.on_edit = (function on_edit(cb,data,key,owner){om.core.update_BANG_.call(null,data,key,goog.string.unescapeEntities(om.core.get_node.call(null,owner,key).innerHTML));
hivez.db.db_add.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,hivez.core.app_state),new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hivez.core.app_state))));
return cb.call(null);
});
hivez.core.input_control = (function input_control(data,owner,p__37447){var map__37455 = p__37447;var map__37455__$1 = ((cljs.core.seq_QMARK_.call(null,map__37455))?cljs.core.apply.call(null,cljs.core.hash_map,map__37455):map__37455);var opts = map__37455__$1;var on_edit = cljs.core.get.call(null,map__37455__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t37456 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37456 = (function (on_edit,opts,map__37455,p__37447,owner,data,input_control,meta37457){
this.on_edit = on_edit;
this.opts = opts;
this.map__37455 = map__37455;
this.p__37447 = p__37447;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta37457 = meta37457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37456.cljs$lang$type = true;
hivez.core.t37456.cljs$lang$ctorStr = "hivez.core/t37456";
hivez.core.t37456.cljs$lang$ctorPrWriter = ((function (map__37455,map__37455__$1,opts,on_edit){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37456");
});})(map__37455,map__37455__$1,opts,on_edit))
;
hivez.core.t37456.prototype.om$core$IRenderState$ = true;
hivez.core.t37456.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37455,map__37455__$1,opts,on_edit){
return (function (_,p__37459){var self__ = this;
var map__37460 = p__37459;var map__37460__$1 = ((cljs.core.seq_QMARK_.call(null,map__37460))?cljs.core.apply.call(null,cljs.core.hash_map,map__37460):map__37460);var editing = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__37461 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__37461) {
case "notes":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__37461,___$1,map__37460,map__37460__$1,editing,map__37455,map__37455__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__37461,___$1,map__37460,map__37460__$1,editing,map__37455,map__37455__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__37455,map__37455__$1,opts,on_edit))
;
hivez.core.t37456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37455,map__37455__$1,opts,on_edit){
return (function (_37458){var self__ = this;
var _37458__$1 = this;return self__.meta37457;
});})(map__37455,map__37455__$1,opts,on_edit))
;
hivez.core.t37456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37455,map__37455__$1,opts,on_edit){
return (function (_37458,meta37457__$1){var self__ = this;
var _37458__$1 = this;return (new hivez.core.t37456(self__.on_edit,self__.opts,self__.map__37455,self__.p__37447,self__.owner,self__.data,self__.input_control,meta37457__$1));
});})(map__37455,map__37455__$1,opts,on_edit))
;
hivez.core.__GT_t37456 = ((function (map__37455,map__37455__$1,opts,on_edit){
return (function __GT_t37456(on_edit__$1,opts__$1,map__37455__$2,p__37447__$1,owner__$1,data__$1,input_control__$1,meta37457){return (new hivez.core.t37456(on_edit__$1,opts__$1,map__37455__$2,p__37447__$1,owner__$1,data__$1,input_control__$1,meta37457));
});})(map__37455,map__37455__$1,opts,on_edit))
;
}
return (new hivez.core.t37456(on_edit,opts,map__37455__$1,p__37447,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__37463){var map__37468 = p__37463;var map__37468__$1 = ((cljs.core.seq_QMARK_.call(null,map__37468))?cljs.core.apply.call(null,cljs.core.hash_map,map__37468):map__37468);var opts = map__37468__$1;var type_key = cljs.core.get.call(null,map__37468__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t37469 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37469 = (function (type_key,opts,map__37468,p__37463,owner,data,name_select,meta37470){
this.type_key = type_key;
this.opts = opts;
this.map__37468 = map__37468;
this.p__37463 = p__37463;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta37470 = meta37470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37469.cljs$lang$type = true;
hivez.core.t37469.cljs$lang$ctorStr = "hivez.core/t37469";
hivez.core.t37469.cljs$lang$ctorPrWriter = ((function (map__37468,map__37468__$1,opts,type_key){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37469");
});})(map__37468,map__37468__$1,opts,type_key))
;
hivez.core.t37469.prototype.om$core$IRender$ = true;
hivez.core.t37469.prototype.om$core$IRender$render$arity$1 = ((function (map__37468,map__37468__$1,opts,type_key){
return (function (this__14157__auto__){var self__ = this;
var this__14157__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14157__auto____$1,map__37468,map__37468__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),self__.type_key,om.core.path.call(null,self__.data)], null));
});})(this__14157__auto____$1,map__37468,map__37468__$1,opts,type_key))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__37468,map__37468__$1,opts,type_key))
;
hivez.core.t37469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37468,map__37468__$1,opts,type_key){
return (function (_37471){var self__ = this;
var _37471__$1 = this;return self__.meta37470;
});})(map__37468,map__37468__$1,opts,type_key))
;
hivez.core.t37469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37468,map__37468__$1,opts,type_key){
return (function (_37471,meta37470__$1){var self__ = this;
var _37471__$1 = this;return (new hivez.core.t37469(self__.type_key,self__.opts,self__.map__37468,self__.p__37463,self__.owner,self__.data,self__.name_select,meta37470__$1));
});})(map__37468,map__37468__$1,opts,type_key))
;
hivez.core.__GT_t37469 = ((function (map__37468,map__37468__$1,opts,type_key){
return (function __GT_t37469(type_key__$1,opts__$1,map__37468__$2,p__37463__$1,owner__$1,data__$1,name_select__$1,meta37470){return (new hivez.core.t37469(type_key__$1,opts__$1,map__37468__$2,p__37463__$1,owner__$1,data__$1,name_select__$1,meta37470));
});})(map__37468,map__37468__$1,opts,type_key))
;
}
return (new hivez.core.t37469(type_key,opts,map__37468__$1,p__37463,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t37475 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37475 = (function (owner,places,places_info,meta37476){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta37476 = meta37476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37475.cljs$lang$type = true;
hivez.core.t37475.cljs$lang$ctorStr = "hivez.core/t37475";
hivez.core.t37475.cljs$lang$ctorPrWriter = (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37475");
});
hivez.core.t37475.prototype.om$core$IRender$ = true;
hivez.core.t37475.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "places"},cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-place","active-place",279041385)], null)], null))));
});
hivez.core.t37475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37477){var self__ = this;
var _37477__$1 = this;return self__.meta37476;
});
hivez.core.t37475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37477,meta37476__$1){var self__ = this;
var _37477__$1 = this;return (new hivez.core.t37475(self__.owner,self__.places,self__.places_info,meta37476__$1));
});
hivez.core.__GT_t37475 = (function __GT_t37475(owner__$1,places__$1,places_info__$1,meta37476){return (new hivez.core.t37475(owner__$1,places__$1,places_info__$1,meta37476));
});
}
return (new hivez.core.t37475(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__37478){var map__37483 = p__37478;var map__37483__$1 = ((cljs.core.seq_QMARK_.call(null,map__37483))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);var opts = map__37483__$1;var begin_edit = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t37484 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37484 = (function (begin_edit,opts,map__37483,p__37478,owner,place,place_info,meta37485){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__37483 = map__37483;
this.p__37478 = p__37478;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta37485 = meta37485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37484.cljs$lang$type = true;
hivez.core.t37484.cljs$lang$ctorStr = "hivez.core/t37484";
hivez.core.t37484.cljs$lang$ctorPrWriter = ((function (map__37483,map__37483__$1,opts,begin_edit){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37484");
});})(map__37483,map__37483__$1,opts,begin_edit))
;
hivez.core.t37484.prototype.om$core$IRender$ = true;
hivez.core.t37484.prototype.om$core$IRender$render$arity$1 = ((function (map__37483,map__37483__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (___$1,map__37483,map__37483__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__37483,map__37483__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},React.DOM.span(null,"hives: "),om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-hive","active-hive",1634241639)], null)], null))));
});})(map__37483,map__37483__$1,opts,begin_edit))
;
hivez.core.t37484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37483,map__37483__$1,opts,begin_edit){
return (function (_37486){var self__ = this;
var _37486__$1 = this;return self__.meta37485;
});})(map__37483,map__37483__$1,opts,begin_edit))
;
hivez.core.t37484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37483,map__37483__$1,opts,begin_edit){
return (function (_37486,meta37485__$1){var self__ = this;
var _37486__$1 = this;return (new hivez.core.t37484(self__.begin_edit,self__.opts,self__.map__37483,self__.p__37478,self__.owner,self__.place,self__.place_info,meta37485__$1));
});})(map__37483,map__37483__$1,opts,begin_edit))
;
hivez.core.__GT_t37484 = ((function (map__37483,map__37483__$1,opts,begin_edit){
return (function __GT_t37484(begin_edit__$1,opts__$1,map__37483__$2,p__37478__$1,owner__$1,place__$1,place_info__$1,meta37485){return (new hivez.core.t37484(begin_edit__$1,opts__$1,map__37483__$2,p__37478__$1,owner__$1,place__$1,place_info__$1,meta37485));
});})(map__37483,map__37483__$1,opts,begin_edit))
;
}
return (new hivez.core.t37484(begin_edit,opts,map__37483__$1,p__37478,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__37487){var map__37492 = p__37487;var map__37492__$1 = ((cljs.core.seq_QMARK_.call(null,map__37492))?cljs.core.apply.call(null,cljs.core.hash_map,map__37492):map__37492);var opts = map__37492__$1;var begin_edit = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t37493 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37493 = (function (begin_edit,opts,map__37492,p__37487,owner,hive,hive_info,meta37494){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__37492 = map__37492;
this.p__37487 = p__37487;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta37494 = meta37494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37493.cljs$lang$type = true;
hivez.core.t37493.cljs$lang$ctorStr = "hivez.core/t37493";
hivez.core.t37493.cljs$lang$ctorPrWriter = ((function (map__37492,map__37492__$1,opts,begin_edit){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37493");
});})(map__37492,map__37492__$1,opts,begin_edit))
;
hivez.core.t37493.prototype.om$core$IRender$ = true;
hivez.core.t37493.prototype.om$core$IRender$render$arity$1 = ((function (map__37492,map__37492__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__37492,map__37492__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__37492,map__37492__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__37492,map__37492__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__37492,map__37492__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__37492,map__37492__$1,opts,begin_edit))
;
hivez.core.t37493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37492,map__37492__$1,opts,begin_edit){
return (function (_37495){var self__ = this;
var _37495__$1 = this;return self__.meta37494;
});})(map__37492,map__37492__$1,opts,begin_edit))
;
hivez.core.t37493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37492,map__37492__$1,opts,begin_edit){
return (function (_37495,meta37494__$1){var self__ = this;
var _37495__$1 = this;return (new hivez.core.t37493(self__.begin_edit,self__.opts,self__.map__37492,self__.p__37487,self__.owner,self__.hive,self__.hive_info,meta37494__$1));
});})(map__37492,map__37492__$1,opts,begin_edit))
;
hivez.core.__GT_t37493 = ((function (map__37492,map__37492__$1,opts,begin_edit){
return (function __GT_t37493(begin_edit__$1,opts__$1,map__37492__$2,p__37487__$1,owner__$1,hive__$1,hive_info__$1,meta37494){return (new hivez.core.t37493(begin_edit__$1,opts__$1,map__37492__$2,p__37487__$1,owner__$1,hive__$1,hive_info__$1,meta37494));
});})(map__37492,map__37492__$1,opts,begin_edit))
;
}
return (new hivez.core.t37493(begin_edit,opts,map__37492__$1,p__37487,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__37496){var map__37503 = p__37496;var map__37503__$1 = ((cljs.core.seq_QMARK_.call(null,map__37503))?cljs.core.apply.call(null,cljs.core.hash_map,map__37503):map__37503);var opts = map__37503__$1;var toggle_open = cljs.core.get.call(null,map__37503__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t37504 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37504 = (function (toggle_open,opts,map__37503,p__37496,owner,data,navicon,meta37505){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__37503 = map__37503;
this.p__37496 = p__37496;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta37505 = meta37505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37504.cljs$lang$type = true;
hivez.core.t37504.cljs$lang$ctorStr = "hivez.core/t37504";
hivez.core.t37504.cljs$lang$ctorPrWriter = ((function (map__37503,map__37503__$1,opts,toggle_open){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37504");
});})(map__37503,map__37503__$1,opts,toggle_open))
;
hivez.core.t37504.prototype.om$core$IRenderState$ = true;
hivez.core.t37504.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37503,map__37503__$1,opts,toggle_open){
return (function (_,p__37507){var self__ = this;
var map__37508 = p__37507;var map__37508__$1 = ((cljs.core.seq_QMARK_.call(null,map__37508))?cljs.core.apply.call(null,cljs.core.hash_map,map__37508):map__37508);var editing = cljs.core.get.call(null,map__37508__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__37508__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__37508,map__37508__$1,editing,open,map__37503,map__37503__$1,opts,toggle_open){
return (function (){return self__.toggle_open.call(null);
});})(___$1,map__37508,map__37508__$1,editing,open,map__37503,map__37503__$1,opts,toggle_open))
, "style": hivez.util.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(open)?" active":null)))});
});})(map__37503,map__37503__$1,opts,toggle_open))
;
hivez.core.t37504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37503,map__37503__$1,opts,toggle_open){
return (function (_37506){var self__ = this;
var _37506__$1 = this;return self__.meta37505;
});})(map__37503,map__37503__$1,opts,toggle_open))
;
hivez.core.t37504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37503,map__37503__$1,opts,toggle_open){
return (function (_37506,meta37505__$1){var self__ = this;
var _37506__$1 = this;return (new hivez.core.t37504(self__.toggle_open,self__.opts,self__.map__37503,self__.p__37496,self__.owner,self__.data,self__.navicon,meta37505__$1));
});})(map__37503,map__37503__$1,opts,toggle_open))
;
hivez.core.__GT_t37504 = ((function (map__37503,map__37503__$1,opts,toggle_open){
return (function __GT_t37504(toggle_open__$1,opts__$1,map__37503__$2,p__37496__$1,owner__$1,data__$1,navicon__$1,meta37505){return (new hivez.core.t37504(toggle_open__$1,opts__$1,map__37503__$2,p__37496__$1,owner__$1,data__$1,navicon__$1,meta37505));
});})(map__37503,map__37503__$1,opts,toggle_open))
;
}
return (new hivez.core.t37504(toggle_open,opts,map__37503__$1,p__37496,owner,data,navicon,null));
});
hivez.core.back_btn = (function back_btn(active,owner,p__37509){var map__37514 = p__37509;var map__37514__$1 = ((cljs.core.seq_QMARK_.call(null,map__37514))?cljs.core.apply.call(null,cljs.core.hash_map,map__37514):map__37514);var opts = map__37514__$1;var type_key = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t37515 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37515 = (function (type_key,opts,map__37514,p__37509,owner,active,back_btn,meta37516){
this.type_key = type_key;
this.opts = opts;
this.map__37514 = map__37514;
this.p__37509 = p__37509;
this.owner = owner;
this.active = active;
this.back_btn = back_btn;
this.meta37516 = meta37516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37515.cljs$lang$type = true;
hivez.core.t37515.cljs$lang$ctorStr = "hivez.core/t37515";
hivez.core.t37515.cljs$lang$ctorPrWriter = ((function (map__37514,map__37514__$1,opts,type_key){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37515");
});})(map__37514,map__37514__$1,opts,type_key))
;
hivez.core.t37515.prototype.om$core$IRender$ = true;
hivez.core.t37515.prototype.om$core$IRender$render$arity$1 = ((function (map__37514,map__37514__$1,opts,type_key){
return (function (this__14157__auto__){var self__ = this;
var this__14157__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14157__auto____$1,map__37514,map__37514__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),self__.type_key,om.core.path.call(null,self__.active)], null));
});})(this__14157__auto____$1,map__37514,map__37514__$1,opts,type_key))
, "className": "icon-arrow-left2", "id": "nav-back-btn"});
});})(map__37514,map__37514__$1,opts,type_key))
;
hivez.core.t37515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37514,map__37514__$1,opts,type_key){
return (function (_37517){var self__ = this;
var _37517__$1 = this;return self__.meta37516;
});})(map__37514,map__37514__$1,opts,type_key))
;
hivez.core.t37515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37514,map__37514__$1,opts,type_key){
return (function (_37517,meta37516__$1){var self__ = this;
var _37517__$1 = this;return (new hivez.core.t37515(self__.type_key,self__.opts,self__.map__37514,self__.p__37509,self__.owner,self__.active,self__.back_btn,meta37516__$1));
});})(map__37514,map__37514__$1,opts,type_key))
;
hivez.core.__GT_t37515 = ((function (map__37514,map__37514__$1,opts,type_key){
return (function __GT_t37515(type_key__$1,opts__$1,map__37514__$2,p__37509__$1,owner__$1,active__$1,back_btn__$1,meta37516){return (new hivez.core.t37515(type_key__$1,opts__$1,map__37514__$2,p__37509__$1,owner__$1,active__$1,back_btn__$1,meta37516));
});})(map__37514,map__37514__$1,opts,type_key))
;
}
return (new hivez.core.t37515(type_key,opts,map__37514__$1,p__37509,owner,active,back_btn,null));
});
hivez.core.add_place_btn = (function add_place_btn(places,owner,p__37518){var map__37523 = p__37518;var map__37523__$1 = ((cljs.core.seq_QMARK_.call(null,map__37523))?cljs.core.apply.call(null,cljs.core.hash_map,map__37523):map__37523);var opts = map__37523__$1;var type_key = cljs.core.get.call(null,map__37523__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t37524 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37524 = (function (type_key,opts,map__37523,p__37518,owner,places,add_place_btn,meta37525){
this.type_key = type_key;
this.opts = opts;
this.map__37523 = map__37523;
this.p__37518 = p__37518;
this.owner = owner;
this.places = places;
this.add_place_btn = add_place_btn;
this.meta37525 = meta37525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37524.cljs$lang$type = true;
hivez.core.t37524.cljs$lang$ctorStr = "hivez.core/t37524";
hivez.core.t37524.cljs$lang$ctorPrWriter = ((function (map__37523,map__37523__$1,opts,type_key){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37524");
});})(map__37523,map__37523__$1,opts,type_key))
;
hivez.core.t37524.prototype.om$core$IRender$ = true;
hivez.core.t37524.prototype.om$core$IRender$render$arity$1 = ((function (map__37523,map__37523__$1,opts,type_key){
return (function (this__14157__auto__){var self__ = this;
var this__14157__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14157__auto____$1,map__37523,map__37523__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-place","add-place",1366689247)], null));
});})(this__14157__auto____$1,map__37523,map__37523__$1,opts,type_key))
, "className": "icon-plus", "id": "nav-add-btn"});
});})(map__37523,map__37523__$1,opts,type_key))
;
hivez.core.t37524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37523,map__37523__$1,opts,type_key){
return (function (_37526){var self__ = this;
var _37526__$1 = this;return self__.meta37525;
});})(map__37523,map__37523__$1,opts,type_key))
;
hivez.core.t37524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37523,map__37523__$1,opts,type_key){
return (function (_37526,meta37525__$1){var self__ = this;
var _37526__$1 = this;return (new hivez.core.t37524(self__.type_key,self__.opts,self__.map__37523,self__.p__37518,self__.owner,self__.places,self__.add_place_btn,meta37525__$1));
});})(map__37523,map__37523__$1,opts,type_key))
;
hivez.core.__GT_t37524 = ((function (map__37523,map__37523__$1,opts,type_key){
return (function __GT_t37524(type_key__$1,opts__$1,map__37523__$2,p__37518__$1,owner__$1,places__$1,add_place_btn__$1,meta37525){return (new hivez.core.t37524(type_key__$1,opts__$1,map__37523__$2,p__37518__$1,owner__$1,places__$1,add_place_btn__$1,meta37525));
});})(map__37523,map__37523__$1,opts,type_key))
;
}
return (new hivez.core.t37524(type_key,opts,map__37523__$1,p__37518,owner,places,add_place_btn,null));
});
hivez.core.control_panel = (function control_panel(active,owner,p__37528){var map__37535 = p__37528;var map__37535__$1 = ((cljs.core.seq_QMARK_.call(null,map__37535))?cljs.core.apply.call(null,cljs.core.hash_map,map__37535):map__37535);var opts = map__37535__$1;var type_key = cljs.core.get.call(null,map__37535__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));var control_fn = cljs.core.get.call(null,map__37535__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));if(typeof hivez.core.t37536 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37536 = (function (control_fn,type_key,opts,map__37535,p__37528,owner,active,control_panel,meta37537){
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__37535 = map__37535;
this.p__37528 = p__37528;
this.owner = owner;
this.active = active;
this.control_panel = control_panel;
this.meta37537 = meta37537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37536.cljs$lang$type = true;
hivez.core.t37536.cljs$lang$ctorStr = "hivez.core/t37536";
hivez.core.t37536.cljs$lang$ctorPrWriter = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37536");
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.t37536.prototype.om$core$IRenderState$ = true;
hivez.core.t37536.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (_,p__37539){var self__ = this;
var map__37540 = p__37539;var map__37540__$1 = ((cljs.core.seq_QMARK_.call(null,map__37540))?cljs.core.apply.call(null,cljs.core.hash_map,map__37540):map__37540);var path_str = cljs.core.get.call(null,map__37540__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var editing = cljs.core.get.call(null,map__37540__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__37540__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.util.display_fade_in.call(null,(function (){var and__12538__auto__ = open;if(cljs.core.truth_(and__12538__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12538__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type_key)),/active-/,""))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),om.core.build.call(null,self__.control_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null))),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.t37536.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t37536.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (___$1,map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (p1__37527_SHARP_){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,hivez.core.app_state),p1__37527_SHARP_));
});})(___$1,map__37535,map__37535__$1,opts,type_key,control_fn))
,(function (){var ks = om.core.path.call(null,next_props);var result = cljs.core.List.EMPTY;while(true){
if(!(cljs.core.empty_QMARK_.call(null,ks)))
{{
var G__37541 = cljs.core.drop_last.call(null,(2),ks);
var G__37542 = cljs.core.conj.call(null,result,ks);
ks = G__37541;
result = G__37542;
continue;
}
} else
{return result;
}
break;
}
})())));
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.t37536.prototype.om$core$InitState$ = true;
hivez.core.t37536.prototype.om$core$InitState$init_state$arity$1 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.t37536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (_37538){var self__ = this;
var _37538__$1 = this;return self__.meta37537;
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.t37536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function (_37538,meta37537__$1){var self__ = this;
var _37538__$1 = this;return (new hivez.core.t37536(self__.control_fn,self__.type_key,self__.opts,self__.map__37535,self__.p__37528,self__.owner,self__.active,self__.control_panel,meta37537__$1));
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
hivez.core.__GT_t37536 = ((function (map__37535,map__37535__$1,opts,type_key,control_fn){
return (function __GT_t37536(control_fn__$1,type_key__$1,opts__$1,map__37535__$2,p__37528__$1,owner__$1,active__$1,control_panel__$1,meta37537){return (new hivez.core.t37536(control_fn__$1,type_key__$1,opts__$1,map__37535__$2,p__37528__$1,owner__$1,active__$1,control_panel__$1,meta37537));
});})(map__37535,map__37535__$1,opts,type_key,control_fn))
;
}
return (new hivez.core.t37536(control_fn,type_key,opts,map__37535__$1,p__37528,owner,active,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.drawer = (function drawer(active,owner,p__37543){var map__37550 = p__37543;var map__37550__$1 = ((cljs.core.seq_QMARK_.call(null,map__37550))?cljs.core.apply.call(null,cljs.core.hash_map,map__37550):map__37550);var opts = map__37550__$1;var type_key = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));var control_fn = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));var child_fn = cljs.core.get.call(null,map__37550__$1,new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481));if(typeof hivez.core.t37551 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37551 = (function (child_fn,control_fn,type_key,opts,map__37550,p__37543,owner,active,drawer,meta37552){
this.child_fn = child_fn;
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__37550 = map__37550;
this.p__37543 = p__37543;
this.owner = owner;
this.active = active;
this.drawer = drawer;
this.meta37552 = meta37552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37551.cljs$lang$type = true;
hivez.core.t37551.cljs$lang$ctorStr = "hivez.core/t37551";
hivez.core.t37551.cljs$lang$ctorPrWriter = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37551");
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t37551.prototype.om$core$IRenderState$ = true;
hivez.core.t37551.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (_,p__37554){var self__ = this;
var map__37555 = p__37554;var map__37555__$1 = ((cljs.core.seq_QMARK_.call(null,map__37555))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);var orientation = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));var editing = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner),new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),self__.control_fn,new cljs.core.Keyword(null,"type-key","type-key",569807662),self__.type_key], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(editing)?om.core.build.call(null,hivez.core.input_control,self__.active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__37555,map__37555__$1,orientation,editing,open,map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__37555,map__37555__$1,orientation,editing,open,map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orientation)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12538__auto__ = open;if(cljs.core.truth_(and__12538__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12538__auto__;
}
})())?" show":" hide"))), "id": "drawer"},om.core.build.call(null,self__.child_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null))));
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t37551.prototype.om$core$IInitState$ = true;
hivez.core.t37551.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t37551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (_37553){var self__ = this;
var _37553__$1 = this;return self__.meta37552;
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t37551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function (_37553,meta37552__$1){var self__ = this;
var _37553__$1 = this;return (new hivez.core.t37551(self__.child_fn,self__.control_fn,self__.type_key,self__.opts,self__.map__37550,self__.p__37543,self__.owner,self__.active,self__.drawer,meta37552__$1));
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.__GT_t37551 = ((function (map__37550,map__37550__$1,opts,type_key,control_fn,child_fn){
return (function __GT_t37551(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__37550__$2,p__37543__$1,owner__$1,active__$1,drawer__$1,meta37552){return (new hivez.core.t37551(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__37550__$2,p__37543__$1,owner__$1,active__$1,drawer__$1,meta37552));
});})(map__37550,map__37550__$1,opts,type_key,control_fn,child_fn))
;
}
return (new hivez.core.t37551(child_fn,control_fn,type_key,opts,map__37550__$1,p__37543,owner,active,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t37603 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t37603 = (function (owner,data,app,meta37604){
this.owner = owner;
this.data = data;
this.app = app;
this.meta37604 = meta37604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t37603.cljs$lang$type = true;
hivez.core.t37603.cljs$lang$ctorStr = "hivez.core/t37603";
hivez.core.t37603.cljs$lang$ctorPrWriter = (function (this__13127__auto__,writer__13128__auto__,opt__13129__auto__){return cljs.core._write.call(null,writer__13128__auto__,"hivez.core/t37603");
});
hivez.core.t37603.prototype.om$core$IRender$ = true;
hivez.core.t37603.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data)),(function (){var active_place = new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(self__.data);var active_hive = new cljs.core.Keyword(null,"active-hive","active-hive",1634241639).cljs$core$IFn$_invoke$arity$1(self__.data);cljs.core.println.call(null,active_place);
cljs.core.println.call(null,active_hive);
if(cljs.core.truth_(active_hive))
{return om.core.build.call(null,hivez.core.drawer,cljs.core.get_in.call(null,self__.data,active_hive),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"open","open",-1763596448),true], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.hive_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-hive","active-hive",1634241639)], null)], null));
} else
{if(cljs.core.truth_(active_place))
{return om.core.build.call(null,hivez.core.drawer,cljs.core.get_in.call(null,self__.data,active_place),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"open","open",-1763596448),true], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.place_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-place","active-place",279041385)], null)], null));
} else
{return om.core.build.call(null,hivez.core.drawer,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.places_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.add_place_btn,new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"places","places",1043491706)], null)], null));

}
}
})());
});
hivez.core.t37603.prototype.om$core$IWillMount$ = true;
hivez.core.t37603.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__15090__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__15090__auto__,___$1){
return (function (){var f__15091__auto__ = (function (){var switch__15075__auto__ = ((function (c__15090__auto__,___$1){
return (function (state_37628){var state_val_37629 = (state_37628[(1)]);if((state_val_37629 === (9)))
{var inst_37619 = hivez.core.add_place.call(null,self__.data);var state_37628__$1 = state_37628;var statearr_37630_37650 = state_37628__$1;(statearr_37630_37650[(2)] = inst_37619);
(statearr_37630_37650[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (8)))
{var inst_37609 = (state_37628[(7)]);var inst_37616 = cljs.core.second.call(null,inst_37609);var inst_37617 = hivez.core.add_hive.call(null,self__.data,inst_37616);var state_37628__$1 = state_37628;var statearr_37631_37651 = state_37628__$1;(statearr_37631_37651[(2)] = inst_37617);
(statearr_37631_37651[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (7)))
{var inst_37609 = (state_37628[(7)]);var inst_37613 = cljs.core.rest.call(null,inst_37609);var inst_37614 = cljs.core.apply.call(null,hivez.core.delete$,self__.data,inst_37613);var state_37628__$1 = state_37628;var statearr_37632_37652 = state_37628__$1;(statearr_37632_37652[(2)] = inst_37614);
(statearr_37632_37652[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (6)))
{var inst_37609 = (state_37628[(7)]);var inst_37610 = cljs.core.rest.call(null,inst_37609);var inst_37611 = cljs.core.apply.call(null,hivez.core.tselect,self__.data,inst_37610);var state_37628__$1 = state_37628;var statearr_37633_37653 = state_37628__$1;(statearr_37633_37653[(2)] = inst_37611);
(statearr_37633_37653[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (5)))
{var inst_37623 = (state_37628[(2)]);var state_37628__$1 = (function (){var statearr_37634 = state_37628;(statearr_37634[(8)] = inst_37623);
return statearr_37634;
})();var statearr_37635_37654 = state_37628__$1;(statearr_37635_37654[(2)] = null);
(statearr_37635_37654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (4)))
{var inst_37609 = (state_37628[(7)]);var inst_37609__$1 = (state_37628[(2)]);var inst_37621 = cljs.core.first.call(null,inst_37609__$1);var state_37628__$1 = (function (){var statearr_37636 = state_37628;(statearr_37636[(7)] = inst_37609__$1);
return statearr_37636;
})();var G__37637_37655 = (((inst_37621 instanceof cljs.core.Keyword))?inst_37621.fqn:null);switch (G__37637_37655) {
case "add-place":
var statearr_37638_37657 = state_37628__$1;(statearr_37638_37657[(1)] = (9));

break;
case "add-hive":
var statearr_37639_37658 = state_37628__$1;(statearr_37639_37658[(1)] = (8));

break;
case "delete":
var statearr_37640_37659 = state_37628__$1;(statearr_37640_37659[(1)] = (7));

break;
case "select":
var statearr_37641_37660 = state_37628__$1;(statearr_37641_37660[(1)] = (6));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37621))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37629 === (3)))
{var inst_37626 = (state_37628[(2)]);var state_37628__$1 = state_37628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37628__$1,inst_37626);
} else
{if((state_val_37629 === (2)))
{var inst_37607 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997));var state_37628__$1 = state_37628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37628__$1,(4),inst_37607);
} else
{if((state_val_37629 === (1)))
{var state_37628__$1 = state_37628;var statearr_37642_37661 = state_37628__$1;(statearr_37642_37661[(2)] = null);
(statearr_37642_37661[(1)] = (2));
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
});})(c__15090__auto__,___$1))
;return ((function (switch__15075__auto__,c__15090__auto__,___$1){
return (function() {
var state_machine__15076__auto__ = null;
var state_machine__15076__auto____0 = (function (){var statearr_37646 = [null,null,null,null,null,null,null,null,null];(statearr_37646[(0)] = state_machine__15076__auto__);
(statearr_37646[(1)] = (1));
return statearr_37646;
});
var state_machine__15076__auto____1 = (function (state_37628){while(true){
var ret_value__15077__auto__ = (function (){try{while(true){
var result__15078__auto__ = switch__15075__auto__.call(null,state_37628);if(cljs.core.keyword_identical_QMARK_.call(null,result__15078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__15078__auto__;
}
break;
}
}catch (e37647){if((e37647 instanceof Object))
{var ex__15079__auto__ = e37647;var statearr_37648_37662 = state_37628;(statearr_37648_37662[(5)] = ex__15079__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37663 = state_37628;
state_37628 = G__37663;
continue;
}
} else
{return ret_value__15077__auto__;
}
break;
}
});
state_machine__15076__auto__ = function(state_37628){
switch(arguments.length){
case 0:
return state_machine__15076__auto____0.call(this);
case 1:
return state_machine__15076__auto____1.call(this,state_37628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15076__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15076__auto____0;
state_machine__15076__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15076__auto____1;
return state_machine__15076__auto__;
})()
;})(switch__15075__auto__,c__15090__auto__,___$1))
})();var state__15092__auto__ = (function (){var statearr_37649 = f__15091__auto__.call(null);(statearr_37649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15090__auto__);
return statearr_37649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15092__auto__);
});})(c__15090__auto__,___$1))
);
return c__15090__auto__;
});
hivez.core.t37603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37605){var self__ = this;
var _37605__$1 = this;return self__.meta37604;
});
hivez.core.t37603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37605,meta37604__$1){var self__ = this;
var _37605__$1 = this;return (new hivez.core.t37603(self__.owner,self__.data,self__.app,meta37604__$1));
});
hivez.core.__GT_t37603 = (function __GT_t37603(owner__$1,data__$1,app__$1,meta37604){return (new hivez.core.t37603(owner__$1,data__$1,app__$1,meta37604));
});
}
return (new hivez.core.t37603(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.orientation.call(null);
window.addEventListener("resize",hivez.core.orientation);
return hivez.db.db_new.call(null,(function (){return hivez.db.db_get_all.call(null,(function (result){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (m){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),(function (p1__37664_SHARP_){return cljs.core.conj.call(null,p1__37664_SHARP_,cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
}));
}),(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-chan","action-chan",1941883997),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map