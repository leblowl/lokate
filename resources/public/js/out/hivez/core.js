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
hivez.core.orientation = (function orientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__10481_SHARP_){return cljs.core.assoc.call(null,p1__10481_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(lat_lng))));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__10482_SHARP_){return hivez.util.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10482_SHARP_)));
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
return om.core.transact_BANG_.call(null,data,type_key,(function (p1__10483_SHARP_){if(!(cljs.core._EQ_.call(null,p1__10483_SHARP_,select_path)))
{return select_path;
} else
{return null;
}
}));
});
hivez.core.delete$ = (function delete$(data,type_key,select_path){om.core.transact_BANG_.call(null,data,cljs.core.pop.call(null,select_path),(function (p1__10484_SHARP_){return cljs.core.dissoc.call(null,p1__10484_SHARP_,cljs.core.peek.call(null,select_path));
}));
return om.core.update_BANG_.call(null,data,type_key,null);
});
hivez.core.add_hive = (function add_hive(data,pos){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));if(cljs.core.truth_(temp__4126__auto__))
{var select_path = temp__4126__auto__;var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,select_path,((function (hive,select_path,temp__4126__auto__){
return (function (p1__10485_SHARP_){return cljs.core.assoc_in.call(null,p1__10485_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null),hive);
});})(hive,select_path,temp__4126__auto__))
);
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"active-hive","active-hive",1634241639),cljs.core.conj.call(null,select_path,new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)));
return hivez.db.db_add.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),select_path));
} else
{return null;
}
});
hivez.core.add_place = (function add_place(data){var id = cljs.core.count.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"places","places",1043491706),((function (id){
return (function (p1__10486_SHARP_){return cljs.core.conj.call(null,p1__10486_SHARP_,hivez.core.new_place.call(null,id));
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
hivez.core.input_control = (function input_control(data,owner,p__10487){var map__10495 = p__10487;var map__10495__$1 = ((cljs.core.seq_QMARK_.call(null,map__10495))?cljs.core.apply.call(null,cljs.core.hash_map,map__10495):map__10495);var opts = map__10495__$1;var on_edit = cljs.core.get.call(null,map__10495__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t10496 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10496 = (function (on_edit,opts,map__10495,p__10487,owner,data,input_control,meta10497){
this.on_edit = on_edit;
this.opts = opts;
this.map__10495 = map__10495;
this.p__10487 = p__10487;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta10497 = meta10497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10496.cljs$lang$type = true;
hivez.core.t10496.cljs$lang$ctorStr = "hivez.core/t10496";
hivez.core.t10496.cljs$lang$ctorPrWriter = ((function (map__10495,map__10495__$1,opts,on_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10496");
});})(map__10495,map__10495__$1,opts,on_edit))
;
hivez.core.t10496.prototype.om$core$IRenderState$ = true;
hivez.core.t10496.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10495,map__10495__$1,opts,on_edit){
return (function (_,p__10499){var self__ = this;
var map__10500 = p__10499;var map__10500__$1 = ((cljs.core.seq_QMARK_.call(null,map__10500))?cljs.core.apply.call(null,cljs.core.hash_map,map__10500):map__10500);var editing = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__10501 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__10501) {
case "notes":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__10501,___$1,map__10500,map__10500__$1,editing,map__10495,map__10495__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__10501,___$1,map__10500,map__10500__$1,editing,map__10495,map__10495__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__10495,map__10495__$1,opts,on_edit))
;
hivez.core.t10496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10495,map__10495__$1,opts,on_edit){
return (function (_10498){var self__ = this;
var _10498__$1 = this;return self__.meta10497;
});})(map__10495,map__10495__$1,opts,on_edit))
;
hivez.core.t10496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10495,map__10495__$1,opts,on_edit){
return (function (_10498,meta10497__$1){var self__ = this;
var _10498__$1 = this;return (new hivez.core.t10496(self__.on_edit,self__.opts,self__.map__10495,self__.p__10487,self__.owner,self__.data,self__.input_control,meta10497__$1));
});})(map__10495,map__10495__$1,opts,on_edit))
;
hivez.core.__GT_t10496 = ((function (map__10495,map__10495__$1,opts,on_edit){
return (function __GT_t10496(on_edit__$1,opts__$1,map__10495__$2,p__10487__$1,owner__$1,data__$1,input_control__$1,meta10497){return (new hivez.core.t10496(on_edit__$1,opts__$1,map__10495__$2,p__10487__$1,owner__$1,data__$1,input_control__$1,meta10497));
});})(map__10495,map__10495__$1,opts,on_edit))
;
}
return (new hivez.core.t10496(on_edit,opts,map__10495__$1,p__10487,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__10503){var map__10508 = p__10503;var map__10508__$1 = ((cljs.core.seq_QMARK_.call(null,map__10508))?cljs.core.apply.call(null,cljs.core.hash_map,map__10508):map__10508);var opts = map__10508__$1;var type_key = cljs.core.get.call(null,map__10508__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t10509 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10509 = (function (type_key,opts,map__10508,p__10503,owner,data,name_select,meta10510){
this.type_key = type_key;
this.opts = opts;
this.map__10508 = map__10508;
this.p__10503 = p__10503;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta10510 = meta10510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10509.cljs$lang$type = true;
hivez.core.t10509.cljs$lang$ctorStr = "hivez.core/t10509";
hivez.core.t10509.cljs$lang$ctorPrWriter = ((function (map__10508,map__10508__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10509");
});})(map__10508,map__10508__$1,opts,type_key))
;
hivez.core.t10509.prototype.om$core$IRender$ = true;
hivez.core.t10509.prototype.om$core$IRender$render$arity$1 = ((function (map__10508,map__10508__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__5247__auto____$1,map__10508,map__10508__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),self__.type_key,om.core.path.call(null,self__.data)], null));
});})(this__5247__auto____$1,map__10508,map__10508__$1,opts,type_key))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__10508,map__10508__$1,opts,type_key))
;
hivez.core.t10509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10508,map__10508__$1,opts,type_key){
return (function (_10511){var self__ = this;
var _10511__$1 = this;return self__.meta10510;
});})(map__10508,map__10508__$1,opts,type_key))
;
hivez.core.t10509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10508,map__10508__$1,opts,type_key){
return (function (_10511,meta10510__$1){var self__ = this;
var _10511__$1 = this;return (new hivez.core.t10509(self__.type_key,self__.opts,self__.map__10508,self__.p__10503,self__.owner,self__.data,self__.name_select,meta10510__$1));
});})(map__10508,map__10508__$1,opts,type_key))
;
hivez.core.__GT_t10509 = ((function (map__10508,map__10508__$1,opts,type_key){
return (function __GT_t10509(type_key__$1,opts__$1,map__10508__$2,p__10503__$1,owner__$1,data__$1,name_select__$1,meta10510){return (new hivez.core.t10509(type_key__$1,opts__$1,map__10508__$2,p__10503__$1,owner__$1,data__$1,name_select__$1,meta10510));
});})(map__10508,map__10508__$1,opts,type_key))
;
}
return (new hivez.core.t10509(type_key,opts,map__10508__$1,p__10503,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t10515 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10515 = (function (owner,places,places_info,meta10516){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta10516 = meta10516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10515.cljs$lang$type = true;
hivez.core.t10515.cljs$lang$ctorStr = "hivez.core/t10515";
hivez.core.t10515.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10515");
});
hivez.core.t10515.prototype.om$core$IRender$ = true;
hivez.core.t10515.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "places"},cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-place","active-place",279041385)], null)], null))));
});
hivez.core.t10515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10517){var self__ = this;
var _10517__$1 = this;return self__.meta10516;
});
hivez.core.t10515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10517,meta10516__$1){var self__ = this;
var _10517__$1 = this;return (new hivez.core.t10515(self__.owner,self__.places,self__.places_info,meta10516__$1));
});
hivez.core.__GT_t10515 = (function __GT_t10515(owner__$1,places__$1,places_info__$1,meta10516){return (new hivez.core.t10515(owner__$1,places__$1,places_info__$1,meta10516));
});
}
return (new hivez.core.t10515(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__10518){var map__10523 = p__10518;var map__10523__$1 = ((cljs.core.seq_QMARK_.call(null,map__10523))?cljs.core.apply.call(null,cljs.core.hash_map,map__10523):map__10523);var opts = map__10523__$1;var begin_edit = cljs.core.get.call(null,map__10523__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t10524 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10524 = (function (begin_edit,opts,map__10523,p__10518,owner,place,place_info,meta10525){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__10523 = map__10523;
this.p__10518 = p__10518;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta10525 = meta10525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10524.cljs$lang$type = true;
hivez.core.t10524.cljs$lang$ctorStr = "hivez.core/t10524";
hivez.core.t10524.cljs$lang$ctorPrWriter = ((function (map__10523,map__10523__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10524");
});})(map__10523,map__10523__$1,opts,begin_edit))
;
hivez.core.t10524.prototype.om$core$IRender$ = true;
hivez.core.t10524.prototype.om$core$IRender$render$arity$1 = ((function (map__10523,map__10523__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (___$1,map__10523,map__10523__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__10523,map__10523__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},React.DOM.span(null,"hives: "),om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"active-hive","active-hive",1634241639)], null)], null))));
});})(map__10523,map__10523__$1,opts,begin_edit))
;
hivez.core.t10524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10523,map__10523__$1,opts,begin_edit){
return (function (_10526){var self__ = this;
var _10526__$1 = this;return self__.meta10525;
});})(map__10523,map__10523__$1,opts,begin_edit))
;
hivez.core.t10524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10523,map__10523__$1,opts,begin_edit){
return (function (_10526,meta10525__$1){var self__ = this;
var _10526__$1 = this;return (new hivez.core.t10524(self__.begin_edit,self__.opts,self__.map__10523,self__.p__10518,self__.owner,self__.place,self__.place_info,meta10525__$1));
});})(map__10523,map__10523__$1,opts,begin_edit))
;
hivez.core.__GT_t10524 = ((function (map__10523,map__10523__$1,opts,begin_edit){
return (function __GT_t10524(begin_edit__$1,opts__$1,map__10523__$2,p__10518__$1,owner__$1,place__$1,place_info__$1,meta10525){return (new hivez.core.t10524(begin_edit__$1,opts__$1,map__10523__$2,p__10518__$1,owner__$1,place__$1,place_info__$1,meta10525));
});})(map__10523,map__10523__$1,opts,begin_edit))
;
}
return (new hivez.core.t10524(begin_edit,opts,map__10523__$1,p__10518,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__10527){var map__10532 = p__10527;var map__10532__$1 = ((cljs.core.seq_QMARK_.call(null,map__10532))?cljs.core.apply.call(null,cljs.core.hash_map,map__10532):map__10532);var opts = map__10532__$1;var begin_edit = cljs.core.get.call(null,map__10532__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t10533 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10533 = (function (begin_edit,opts,map__10532,p__10527,owner,hive,hive_info,meta10534){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__10532 = map__10532;
this.p__10527 = p__10527;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta10534 = meta10534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10533.cljs$lang$type = true;
hivez.core.t10533.cljs$lang$ctorStr = "hivez.core/t10533";
hivez.core.t10533.cljs$lang$ctorPrWriter = ((function (map__10532,map__10532__$1,opts,begin_edit){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10533");
});})(map__10532,map__10532__$1,opts,begin_edit))
;
hivez.core.t10533.prototype.om$core$IRender$ = true;
hivez.core.t10533.prototype.om$core$IRender$render$arity$1 = ((function (map__10532,map__10532__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__10532,map__10532__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__10532,map__10532__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__10532,map__10532__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__10532,map__10532__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__10532,map__10532__$1,opts,begin_edit))
;
hivez.core.t10533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10532,map__10532__$1,opts,begin_edit){
return (function (_10535){var self__ = this;
var _10535__$1 = this;return self__.meta10534;
});})(map__10532,map__10532__$1,opts,begin_edit))
;
hivez.core.t10533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10532,map__10532__$1,opts,begin_edit){
return (function (_10535,meta10534__$1){var self__ = this;
var _10535__$1 = this;return (new hivez.core.t10533(self__.begin_edit,self__.opts,self__.map__10532,self__.p__10527,self__.owner,self__.hive,self__.hive_info,meta10534__$1));
});})(map__10532,map__10532__$1,opts,begin_edit))
;
hivez.core.__GT_t10533 = ((function (map__10532,map__10532__$1,opts,begin_edit){
return (function __GT_t10533(begin_edit__$1,opts__$1,map__10532__$2,p__10527__$1,owner__$1,hive__$1,hive_info__$1,meta10534){return (new hivez.core.t10533(begin_edit__$1,opts__$1,map__10532__$2,p__10527__$1,owner__$1,hive__$1,hive_info__$1,meta10534));
});})(map__10532,map__10532__$1,opts,begin_edit))
;
}
return (new hivez.core.t10533(begin_edit,opts,map__10532__$1,p__10527,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__10536){var map__10543 = p__10536;var map__10543__$1 = ((cljs.core.seq_QMARK_.call(null,map__10543))?cljs.core.apply.call(null,cljs.core.hash_map,map__10543):map__10543);var opts = map__10543__$1;var toggle_open = cljs.core.get.call(null,map__10543__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t10544 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10544 = (function (toggle_open,opts,map__10543,p__10536,owner,data,navicon,meta10545){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__10543 = map__10543;
this.p__10536 = p__10536;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta10545 = meta10545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10544.cljs$lang$type = true;
hivez.core.t10544.cljs$lang$ctorStr = "hivez.core/t10544";
hivez.core.t10544.cljs$lang$ctorPrWriter = ((function (map__10543,map__10543__$1,opts,toggle_open){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10544");
});})(map__10543,map__10543__$1,opts,toggle_open))
;
hivez.core.t10544.prototype.om$core$IRenderState$ = true;
hivez.core.t10544.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10543,map__10543__$1,opts,toggle_open){
return (function (_,p__10547){var self__ = this;
var map__10548 = p__10547;var map__10548__$1 = ((cljs.core.seq_QMARK_.call(null,map__10548))?cljs.core.apply.call(null,cljs.core.hash_map,map__10548):map__10548);var editing = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__10548,map__10548__$1,editing,open,map__10543,map__10543__$1,opts,toggle_open){
return (function (){return self__.toggle_open.call(null);
});})(___$1,map__10548,map__10548__$1,editing,open,map__10543,map__10543__$1,opts,toggle_open))
, "style": hivez.util.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(open)?" active":null)))});
});})(map__10543,map__10543__$1,opts,toggle_open))
;
hivez.core.t10544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10543,map__10543__$1,opts,toggle_open){
return (function (_10546){var self__ = this;
var _10546__$1 = this;return self__.meta10545;
});})(map__10543,map__10543__$1,opts,toggle_open))
;
hivez.core.t10544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10543,map__10543__$1,opts,toggle_open){
return (function (_10546,meta10545__$1){var self__ = this;
var _10546__$1 = this;return (new hivez.core.t10544(self__.toggle_open,self__.opts,self__.map__10543,self__.p__10536,self__.owner,self__.data,self__.navicon,meta10545__$1));
});})(map__10543,map__10543__$1,opts,toggle_open))
;
hivez.core.__GT_t10544 = ((function (map__10543,map__10543__$1,opts,toggle_open){
return (function __GT_t10544(toggle_open__$1,opts__$1,map__10543__$2,p__10536__$1,owner__$1,data__$1,navicon__$1,meta10545){return (new hivez.core.t10544(toggle_open__$1,opts__$1,map__10543__$2,p__10536__$1,owner__$1,data__$1,navicon__$1,meta10545));
});})(map__10543,map__10543__$1,opts,toggle_open))
;
}
return (new hivez.core.t10544(toggle_open,opts,map__10543__$1,p__10536,owner,data,navicon,null));
});
hivez.core.back_btn = (function back_btn(active,owner,p__10549){var map__10554 = p__10549;var map__10554__$1 = ((cljs.core.seq_QMARK_.call(null,map__10554))?cljs.core.apply.call(null,cljs.core.hash_map,map__10554):map__10554);var opts = map__10554__$1;var type_key = cljs.core.get.call(null,map__10554__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t10555 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10555 = (function (type_key,opts,map__10554,p__10549,owner,active,back_btn,meta10556){
this.type_key = type_key;
this.opts = opts;
this.map__10554 = map__10554;
this.p__10549 = p__10549;
this.owner = owner;
this.active = active;
this.back_btn = back_btn;
this.meta10556 = meta10556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10555.cljs$lang$type = true;
hivez.core.t10555.cljs$lang$ctorStr = "hivez.core/t10555";
hivez.core.t10555.cljs$lang$ctorPrWriter = ((function (map__10554,map__10554__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10555");
});})(map__10554,map__10554__$1,opts,type_key))
;
hivez.core.t10555.prototype.om$core$IRender$ = true;
hivez.core.t10555.prototype.om$core$IRender$render$arity$1 = ((function (map__10554,map__10554__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__5247__auto____$1,map__10554,map__10554__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),self__.type_key,om.core.path.call(null,self__.active)], null));
});})(this__5247__auto____$1,map__10554,map__10554__$1,opts,type_key))
, "className": "icon-arrow-left2", "id": "nav-back-btn"});
});})(map__10554,map__10554__$1,opts,type_key))
;
hivez.core.t10555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10554,map__10554__$1,opts,type_key){
return (function (_10557){var self__ = this;
var _10557__$1 = this;return self__.meta10556;
});})(map__10554,map__10554__$1,opts,type_key))
;
hivez.core.t10555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10554,map__10554__$1,opts,type_key){
return (function (_10557,meta10556__$1){var self__ = this;
var _10557__$1 = this;return (new hivez.core.t10555(self__.type_key,self__.opts,self__.map__10554,self__.p__10549,self__.owner,self__.active,self__.back_btn,meta10556__$1));
});})(map__10554,map__10554__$1,opts,type_key))
;
hivez.core.__GT_t10555 = ((function (map__10554,map__10554__$1,opts,type_key){
return (function __GT_t10555(type_key__$1,opts__$1,map__10554__$2,p__10549__$1,owner__$1,active__$1,back_btn__$1,meta10556){return (new hivez.core.t10555(type_key__$1,opts__$1,map__10554__$2,p__10549__$1,owner__$1,active__$1,back_btn__$1,meta10556));
});})(map__10554,map__10554__$1,opts,type_key))
;
}
return (new hivez.core.t10555(type_key,opts,map__10554__$1,p__10549,owner,active,back_btn,null));
});
hivez.core.add_place_btn = (function add_place_btn(places,owner,p__10558){var map__10563 = p__10558;var map__10563__$1 = ((cljs.core.seq_QMARK_.call(null,map__10563))?cljs.core.apply.call(null,cljs.core.hash_map,map__10563):map__10563);var opts = map__10563__$1;var type_key = cljs.core.get.call(null,map__10563__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));if(typeof hivez.core.t10564 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10564 = (function (type_key,opts,map__10563,p__10558,owner,places,add_place_btn,meta10565){
this.type_key = type_key;
this.opts = opts;
this.map__10563 = map__10563;
this.p__10558 = p__10558;
this.owner = owner;
this.places = places;
this.add_place_btn = add_place_btn;
this.meta10565 = meta10565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10564.cljs$lang$type = true;
hivez.core.t10564.cljs$lang$ctorStr = "hivez.core/t10564";
hivez.core.t10564.cljs$lang$ctorPrWriter = ((function (map__10563,map__10563__$1,opts,type_key){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10564");
});})(map__10563,map__10563__$1,opts,type_key))
;
hivez.core.t10564.prototype.om$core$IRender$ = true;
hivez.core.t10564.prototype.om$core$IRender$render$arity$1 = ((function (map__10563,map__10563__$1,opts,type_key){
return (function (this__5247__auto__){var self__ = this;
var this__5247__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__5247__auto____$1,map__10563,map__10563__$1,opts,type_key){
return (function (){return cljs.core.async.put_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-place","add-place",1366689247)], null));
});})(this__5247__auto____$1,map__10563,map__10563__$1,opts,type_key))
, "className": "icon-plus", "id": "nav-add-btn"});
});})(map__10563,map__10563__$1,opts,type_key))
;
hivez.core.t10564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10563,map__10563__$1,opts,type_key){
return (function (_10566){var self__ = this;
var _10566__$1 = this;return self__.meta10565;
});})(map__10563,map__10563__$1,opts,type_key))
;
hivez.core.t10564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10563,map__10563__$1,opts,type_key){
return (function (_10566,meta10565__$1){var self__ = this;
var _10566__$1 = this;return (new hivez.core.t10564(self__.type_key,self__.opts,self__.map__10563,self__.p__10558,self__.owner,self__.places,self__.add_place_btn,meta10565__$1));
});})(map__10563,map__10563__$1,opts,type_key))
;
hivez.core.__GT_t10564 = ((function (map__10563,map__10563__$1,opts,type_key){
return (function __GT_t10564(type_key__$1,opts__$1,map__10563__$2,p__10558__$1,owner__$1,places__$1,add_place_btn__$1,meta10565){return (new hivez.core.t10564(type_key__$1,opts__$1,map__10563__$2,p__10558__$1,owner__$1,places__$1,add_place_btn__$1,meta10565));
});})(map__10563,map__10563__$1,opts,type_key))
;
}
return (new hivez.core.t10564(type_key,opts,map__10563__$1,p__10558,owner,places,add_place_btn,null));
});
hivez.core.control_panel = (function control_panel(active,owner,p__10568){var map__10575 = p__10568;var map__10575__$1 = ((cljs.core.seq_QMARK_.call(null,map__10575))?cljs.core.apply.call(null,cljs.core.hash_map,map__10575):map__10575);var opts = map__10575__$1;var type_key = cljs.core.get.call(null,map__10575__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));var control_fn = cljs.core.get.call(null,map__10575__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));if(typeof hivez.core.t10576 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10576 = (function (control_fn,type_key,opts,map__10575,p__10568,owner,active,control_panel,meta10577){
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__10575 = map__10575;
this.p__10568 = p__10568;
this.owner = owner;
this.active = active;
this.control_panel = control_panel;
this.meta10577 = meta10577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10576.cljs$lang$type = true;
hivez.core.t10576.cljs$lang$ctorStr = "hivez.core/t10576";
hivez.core.t10576.cljs$lang$ctorPrWriter = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10576");
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.t10576.prototype.om$core$IRenderState$ = true;
hivez.core.t10576.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (_,p__10579){var self__ = this;
var map__10580 = p__10579;var map__10580__$1 = ((cljs.core.seq_QMARK_.call(null,map__10580))?cljs.core.apply.call(null,cljs.core.hash_map,map__10580):map__10580);var path_str = cljs.core.get.call(null,map__10580__$1,new cljs.core.Keyword(null,"path-str","path-str",259306316));var editing = cljs.core.get.call(null,map__10580__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__10580__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.util.display_fade_in.call(null,(function (){var and__3628__auto__ = open;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__3628__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type_key)),/active-/,""))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_str))),om.core.build.call(null,self__.control_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null))),om.core.build.call(null,hivez.core.navicon,self__.active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.t10576.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t10576.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-str","path-str",259306316),clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (___$1,map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (p1__10567_SHARP_){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,hivez.core.app_state),p1__10567_SHARP_));
});})(___$1,map__10575,map__10575__$1,opts,type_key,control_fn))
,(function (){var ks = om.core.path.call(null,next_props);var result = cljs.core.List.EMPTY;while(true){
if(!(cljs.core.empty_QMARK_.call(null,ks)))
{{
var G__10581 = cljs.core.drop_last.call(null,(2),ks);
var G__10582 = cljs.core.conj.call(null,result,ks);
ks = G__10581;
result = G__10582;
continue;
}
} else
{return result;
}
break;
}
})())));
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.t10576.prototype.om$core$IInitState$ = true;
hivez.core.t10576.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.t10576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (_10578){var self__ = this;
var _10578__$1 = this;return self__.meta10577;
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.t10576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function (_10578,meta10577__$1){var self__ = this;
var _10578__$1 = this;return (new hivez.core.t10576(self__.control_fn,self__.type_key,self__.opts,self__.map__10575,self__.p__10568,self__.owner,self__.active,self__.control_panel,meta10577__$1));
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
hivez.core.__GT_t10576 = ((function (map__10575,map__10575__$1,opts,type_key,control_fn){
return (function __GT_t10576(control_fn__$1,type_key__$1,opts__$1,map__10575__$2,p__10568__$1,owner__$1,active__$1,control_panel__$1,meta10577){return (new hivez.core.t10576(control_fn__$1,type_key__$1,opts__$1,map__10575__$2,p__10568__$1,owner__$1,active__$1,control_panel__$1,meta10577));
});})(map__10575,map__10575__$1,opts,type_key,control_fn))
;
}
return (new hivez.core.t10576(control_fn,type_key,opts,map__10575__$1,p__10568,owner,active,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.drawer = (function drawer(active,owner,p__10583){var map__10590 = p__10583;var map__10590__$1 = ((cljs.core.seq_QMARK_.call(null,map__10590))?cljs.core.apply.call(null,cljs.core.hash_map,map__10590):map__10590);var opts = map__10590__$1;var type_key = cljs.core.get.call(null,map__10590__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));var control_fn = cljs.core.get.call(null,map__10590__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));var child_fn = cljs.core.get.call(null,map__10590__$1,new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481));if(typeof hivez.core.t10591 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10591 = (function (child_fn,control_fn,type_key,opts,map__10590,p__10583,owner,active,drawer,meta10592){
this.child_fn = child_fn;
this.control_fn = control_fn;
this.type_key = type_key;
this.opts = opts;
this.map__10590 = map__10590;
this.p__10583 = p__10583;
this.owner = owner;
this.active = active;
this.drawer = drawer;
this.meta10592 = meta10592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10591.cljs$lang$type = true;
hivez.core.t10591.cljs$lang$ctorStr = "hivez.core/t10591";
hivez.core.t10591.cljs$lang$ctorPrWriter = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10591");
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t10591.prototype.om$core$IRenderState$ = true;
hivez.core.t10591.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (_,p__10594){var self__ = this;
var map__10595 = p__10594;var map__10595__$1 = ((cljs.core.seq_QMARK_.call(null,map__10595))?cljs.core.apply.call(null,cljs.core.hash_map,map__10595):map__10595);var orientation = cljs.core.get.call(null,map__10595__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));var editing = cljs.core.get.call(null,map__10595__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__10595__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner),new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),self__.control_fn,new cljs.core.Keyword(null,"type-key","type-key",569807662),self__.type_key], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(editing)?om.core.build.call(null,hivez.core.input_control,self__.active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__10595,map__10595__$1,orientation,editing,open,map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__10595,map__10595__$1,orientation,editing,open,map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orientation)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3628__auto__ = open;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__3628__auto__;
}
})())?" show":" hide"))), "id": "drawer"},om.core.build.call(null,self__.child_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null))));
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t10591.prototype.om$core$IInitState$ = true;
hivez.core.t10591.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t10591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (_10593){var self__ = this;
var _10593__$1 = this;return self__.meta10592;
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.t10591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function (_10593,meta10592__$1){var self__ = this;
var _10593__$1 = this;return (new hivez.core.t10591(self__.child_fn,self__.control_fn,self__.type_key,self__.opts,self__.map__10590,self__.p__10583,self__.owner,self__.active,self__.drawer,meta10592__$1));
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
hivez.core.__GT_t10591 = ((function (map__10590,map__10590__$1,opts,type_key,control_fn,child_fn){
return (function __GT_t10591(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__10590__$2,p__10583__$1,owner__$1,active__$1,drawer__$1,meta10592){return (new hivez.core.t10591(child_fn__$1,control_fn__$1,type_key__$1,opts__$1,map__10590__$2,p__10583__$1,owner__$1,active__$1,drawer__$1,meta10592));
});})(map__10590,map__10590__$1,opts,type_key,control_fn,child_fn))
;
}
return (new hivez.core.t10591(child_fn,control_fn,type_key,opts,map__10590__$1,p__10583,owner,active,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t10643 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t10643 = (function (owner,data,app,meta10644){
this.owner = owner;
this.data = data;
this.app = app;
this.meta10644 = meta10644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t10643.cljs$lang$type = true;
hivez.core.t10643.cljs$lang$ctorStr = "hivez.core/t10643";
hivez.core.t10643.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"hivez.core/t10643");
});
hivez.core.t10643.prototype.om$core$IRender$ = true;
hivez.core.t10643.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data)),(function (){var active_place = new cljs.core.Keyword(null,"active-place","active-place",279041385).cljs$core$IFn$_invoke$arity$1(self__.data);var active_hive = new cljs.core.Keyword(null,"active-hive","active-hive",1634241639).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(active_hive))
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
hivez.core.t10643.prototype.om$core$IWillMount$ = true;
hivez.core.t10643.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6485__auto__,___$1){
return (function (){var f__6486__auto__ = (function (){var switch__6470__auto__ = ((function (c__6485__auto__,___$1){
return (function (state_10668){var state_val_10669 = (state_10668[(1)]);if((state_val_10669 === (9)))
{var inst_10659 = hivez.core.add_place.call(null,self__.data);var state_10668__$1 = state_10668;var statearr_10670_10690 = state_10668__$1;(statearr_10670_10690[(2)] = inst_10659);
(statearr_10670_10690[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (8)))
{var inst_10649 = (state_10668[(7)]);var inst_10656 = cljs.core.second.call(null,inst_10649);var inst_10657 = hivez.core.add_hive.call(null,self__.data,inst_10656);var state_10668__$1 = state_10668;var statearr_10671_10691 = state_10668__$1;(statearr_10671_10691[(2)] = inst_10657);
(statearr_10671_10691[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (7)))
{var inst_10649 = (state_10668[(7)]);var inst_10653 = cljs.core.rest.call(null,inst_10649);var inst_10654 = cljs.core.apply.call(null,hivez.core.delete$,self__.data,inst_10653);var state_10668__$1 = state_10668;var statearr_10672_10692 = state_10668__$1;(statearr_10672_10692[(2)] = inst_10654);
(statearr_10672_10692[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (6)))
{var inst_10649 = (state_10668[(7)]);var inst_10650 = cljs.core.rest.call(null,inst_10649);var inst_10651 = cljs.core.apply.call(null,hivez.core.tselect,self__.data,inst_10650);var state_10668__$1 = state_10668;var statearr_10673_10693 = state_10668__$1;(statearr_10673_10693[(2)] = inst_10651);
(statearr_10673_10693[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (5)))
{var inst_10663 = (state_10668[(2)]);var state_10668__$1 = (function (){var statearr_10674 = state_10668;(statearr_10674[(8)] = inst_10663);
return statearr_10674;
})();var statearr_10675_10694 = state_10668__$1;(statearr_10675_10694[(2)] = null);
(statearr_10675_10694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (4)))
{var inst_10649 = (state_10668[(7)]);var inst_10649__$1 = (state_10668[(2)]);var inst_10661 = cljs.core.first.call(null,inst_10649__$1);var state_10668__$1 = (function (){var statearr_10676 = state_10668;(statearr_10676[(7)] = inst_10649__$1);
return statearr_10676;
})();var G__10677_10695 = (((inst_10661 instanceof cljs.core.Keyword))?inst_10661.fqn:null);switch (G__10677_10695) {
case "add-place":
var statearr_10678_10697 = state_10668__$1;(statearr_10678_10697[(1)] = (9));

break;
case "add-hive":
var statearr_10679_10698 = state_10668__$1;(statearr_10679_10698[(1)] = (8));

break;
case "delete":
var statearr_10680_10699 = state_10668__$1;(statearr_10680_10699[(1)] = (7));

break;
case "select":
var statearr_10681_10700 = state_10668__$1;(statearr_10681_10700[(1)] = (6));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10661))));

}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10669 === (3)))
{var inst_10666 = (state_10668[(2)]);var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10668__$1,inst_10666);
} else
{if((state_val_10669 === (2)))
{var inst_10647 = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"action-chan","action-chan",1941883997));var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10668__$1,(4),inst_10647);
} else
{if((state_val_10669 === (1)))
{var state_10668__$1 = state_10668;var statearr_10682_10701 = state_10668__$1;(statearr_10682_10701[(2)] = null);
(statearr_10682_10701[(1)] = (2));
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
});})(c__6485__auto__,___$1))
;return ((function (switch__6470__auto__,c__6485__auto__,___$1){
return (function() {
var state_machine__6471__auto__ = null;
var state_machine__6471__auto____0 = (function (){var statearr_10686 = [null,null,null,null,null,null,null,null,null];(statearr_10686[(0)] = state_machine__6471__auto__);
(statearr_10686[(1)] = (1));
return statearr_10686;
});
var state_machine__6471__auto____1 = (function (state_10668){while(true){
var ret_value__6472__auto__ = (function (){try{while(true){
var result__6473__auto__ = switch__6470__auto__.call(null,state_10668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6473__auto__;
}
break;
}
}catch (e10687){if((e10687 instanceof Object))
{var ex__6474__auto__ = e10687;var statearr_10688_10702 = state_10668;(statearr_10688_10702[(5)] = ex__6474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10687;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10703 = state_10668;
state_10668 = G__10703;
continue;
}
} else
{return ret_value__6472__auto__;
}
break;
}
});
state_machine__6471__auto__ = function(state_10668){
switch(arguments.length){
case 0:
return state_machine__6471__auto____0.call(this);
case 1:
return state_machine__6471__auto____1.call(this,state_10668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6471__auto____0;
state_machine__6471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6471__auto____1;
return state_machine__6471__auto__;
})()
;})(switch__6470__auto__,c__6485__auto__,___$1))
})();var state__6487__auto__ = (function (){var statearr_10689 = f__6486__auto__.call(null);(statearr_10689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6485__auto__);
return statearr_10689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6487__auto__);
});})(c__6485__auto__,___$1))
);
return c__6485__auto__;
});
hivez.core.t10643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10645){var self__ = this;
var _10645__$1 = this;return self__.meta10644;
});
hivez.core.t10643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10645,meta10644__$1){var self__ = this;
var _10645__$1 = this;return (new hivez.core.t10643(self__.owner,self__.data,self__.app,meta10644__$1));
});
hivez.core.__GT_t10643 = (function __GT_t10643(owner__$1,data__$1,app__$1,meta10644){return (new hivez.core.t10643(owner__$1,data__$1,app__$1,meta10644));
});
}
return (new hivez.core.t10643(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.orientation.call(null);
window.addEventListener("resize",hivez.core.orientation);
return hivez.db.db_new.call(null,(function (){return hivez.db.db_get_all.call(null,(function (result){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (m){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),(function (p1__10704_SHARP_){return cljs.core.conj.call(null,p1__10704_SHARP_,cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
}));
}),(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-chan","action-chan",1941883997),cljs.core.async.chan.call(null)], null)], null));
}));
}));
});

//# sourceMappingURL=core.js.map