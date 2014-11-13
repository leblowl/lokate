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
hivez.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
hivez.core.orientation = (function orientation(){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (p1__38185_SHARP_){return cljs.core.assoc.call(null,p1__38185_SHARP_,new cljs.core.Keyword(null,"orientation","orientation",623557579),(((window.screen.height > window.screen.width))?"portrait":"landscape"));
}));
});
hivez.core.pos_key = (function pos_key(lat_lng){return cljs.core.keyword.call(null,("lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(lat_lng))+"lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(lat_lng))));
});
hivez.core.nearest = (function nearest(hive,hives){return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__38186_SHARP_){return hivez.util.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(hive),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__38186_SHARP_)));
}),cljs.core.seq.call(null,hives));
});
hivez.core.new_place = (function new_place(id){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"hives","hives",-1303225483),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
hivez.core.add_place = (function add_place(places){om.core.transact_BANG_.call(null,places,(function (places__$1){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__38187_SHARP_){return cljs.core.assoc.call(null,p1__38187_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),false);
}),places__$1));
}));
var id = cljs.core.count.call(null,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hivez.core.app_state)));var new$ = hivez.core.new_place.call(null,id);om.core.transact_BANG_.call(null,places,((function (id,new$){
return (function (p1__38188_SHARP_){return cljs.core.conj.call(null,p1__38188_SHARP_,new$);
});})(id,new$))
);
return hivez.db.db_add.call(null,cljs.core.dissoc.call(null,new$,new cljs.core.Keyword(null,"active","active",1895962068)));
});
hivez.core.activate_place = (function activate_place(places,place){om.core.transact_BANG_.call(null,places,(function (places__$1){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__38189_SHARP_){return cljs.core.assoc.call(null,p1__38189_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),false);
}),places__$1));
}));
return om.core.update_BANG_.call(null,place,new cljs.core.Keyword(null,"active","active",1895962068),true);
});
hivez.core.new_hive = (function new_hive(pos){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),hivez.core.pos_key.call(null,pos),new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"origin","origin",1037372088),hivez.util.fdate_now.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null);
});
hivez.core.add_hive = (function add_hive(owner,data,pos){var hive = hivez.core.new_hive.call(null,pos);om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483)], null),((function (hive){
return (function (p1__38190_SHARP_){return cljs.core.assoc.call(null,p1__38190_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive),hive);
});})(hive))
);
hivez.core.activate_hive.call(null,owner,data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),(0),new cljs.core.Keyword(null,"hives","hives",-1303225483),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(hive)], null));
return hivez.core.db_add_hive.call(null,hive);
});
hivez.core.activate_hive = (function activate_hive(place,hive){om.core.transact_BANG_.call(null,place,new cljs.core.Keyword(null,"hives","hives",-1303225483),(function (hives){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13285__auto__ = (function iter__38199(s__38200){return (new cljs.core.LazySeq(null,(function (){var s__38200__$1 = s__38200;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38200__$1);if(temp__4126__auto__)
{var s__38200__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38200__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__38200__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__38202 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__38201 = (0);while(true){
if((i__38201 < size__13284__auto__))
{var vec__38205 = cljs.core._nth.call(null,c__13283__auto__,i__38201);var k = cljs.core.nth.call(null,vec__38205,(0),null);var v = cljs.core.nth.call(null,vec__38205,(1),null);cljs.core.chunk_append.call(null,b__38202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"active","active",1895962068),false)], null));
{
var G__38207 = (i__38201 + (1));
i__38201 = G__38207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38202),iter__38199.call(null,cljs.core.chunk_rest.call(null,s__38200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38202),null);
}
} else
{var vec__38206 = cljs.core.first.call(null,s__38200__$2);var k = cljs.core.nth.call(null,vec__38206,(0),null);var v = cljs.core.nth.call(null,vec__38206,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"active","active",1895962068),false)], null),iter__38199.call(null,cljs.core.rest.call(null,s__38200__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__13285__auto__.call(null,hives);
})());
}));
return om.core.update_BANG_.call(null,hive,new cljs.core.Keyword(null,"active","active",1895962068),true);
});
hivez.core.delete_hive = (function delete_hive(owner,data,path){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))
{var hive_38210 = cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path);om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),((function (hive_38210){
return (function (p1__38208_SHARP_){return cljs.core.dissoc.call(null,p1__38208_SHARP_,cljs.core.last.call(null,path));
});})(hive_38210))
);
hivez.core.activate_hive.call(null,owner,data,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),cljs.core.first.call(null,hivez.core.nearest.call(null,hive_38210,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),cljs.core.butlast.call(null,path))))));
} else
{om.core.transact_BANG_.call(null,data,cljs.core.butlast.call(null,path),(function (p1__38209_SHARP_){return cljs.core.dissoc.call(null,p1__38209_SHARP_,cljs.core.last.call(null,path));
}));
}
return hivez.core.db_delete_hive.call(null,cljs.core.last.call(null,path));
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
hivez.db.db_add.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,data),new cljs.core.Keyword(null,"active","active",1895962068)));
return cb.call(null);
});
hivez.core.input_control = (function input_control(data,owner,p__38211){var map__38219 = p__38211;var map__38219__$1 = ((cljs.core.seq_QMARK_.call(null,map__38219))?cljs.core.apply.call(null,cljs.core.hash_map,map__38219):map__38219);var opts = map__38219__$1;var on_edit = cljs.core.get.call(null,map__38219__$1,new cljs.core.Keyword(null,"on-edit","on-edit",745088083));if(typeof hivez.core.t38220 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38220 = (function (on_edit,opts,map__38219,p__38211,owner,data,input_control,meta38221){
this.on_edit = on_edit;
this.opts = opts;
this.map__38219 = map__38219;
this.p__38211 = p__38211;
this.owner = owner;
this.data = data;
this.input_control = input_control;
this.meta38221 = meta38221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38220.cljs$lang$type = true;
hivez.core.t38220.cljs$lang$ctorStr = "hivez.core/t38220";
hivez.core.t38220.cljs$lang$ctorPrWriter = ((function (map__38219,map__38219__$1,opts,on_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38220");
});})(map__38219,map__38219__$1,opts,on_edit))
;
hivez.core.t38220.prototype.om$core$IRenderState$ = true;
hivez.core.t38220.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38219,map__38219__$1,opts,on_edit){
return (function (_,p__38223){var self__ = this;
var map__38224 = p__38223;var map__38224__$1 = ((cljs.core.seq_QMARK_.call(null,map__38224))?cljs.core.apply.call(null,cljs.core.hash_map,map__38224):map__38224);var editing = cljs.core.get.call(null,map__38224__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.div({"id": "input-ctrl"},(function (){var G__38225 = (((editing instanceof cljs.core.Keyword))?editing.fqn:null);switch (G__38225) {
case "notes":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"notes-input",new cljs.core.Keyword(null,"className","className",-1983287057),"notes input",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit], null)], null));

break;
case "name":
return om.core.build.call(null,hivez.input.input,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"name-input",new cljs.core.Keyword(null,"className","className",-1983287057),"name input single-line",new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-edit","on-edit",745088083),self__.on_edit,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (G__38225,___$1,map__38224,map__38224__$1,editing,map__38219,map__38219__$1,opts,on_edit){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{return false;
} else
{return null;
}
});})(G__38225,___$1,map__38224,map__38224__$1,editing,map__38219,map__38219__$1,opts,on_edit))
], null)], null));

break;
default:
return null;

}
})());
});})(map__38219,map__38219__$1,opts,on_edit))
;
hivez.core.t38220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38219,map__38219__$1,opts,on_edit){
return (function (_38222){var self__ = this;
var _38222__$1 = this;return self__.meta38221;
});})(map__38219,map__38219__$1,opts,on_edit))
;
hivez.core.t38220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38219,map__38219__$1,opts,on_edit){
return (function (_38222,meta38221__$1){var self__ = this;
var _38222__$1 = this;return (new hivez.core.t38220(self__.on_edit,self__.opts,self__.map__38219,self__.p__38211,self__.owner,self__.data,self__.input_control,meta38221__$1));
});})(map__38219,map__38219__$1,opts,on_edit))
;
hivez.core.__GT_t38220 = ((function (map__38219,map__38219__$1,opts,on_edit){
return (function __GT_t38220(on_edit__$1,opts__$1,map__38219__$2,p__38211__$1,owner__$1,data__$1,input_control__$1,meta38221){return (new hivez.core.t38220(on_edit__$1,opts__$1,map__38219__$2,p__38211__$1,owner__$1,data__$1,input_control__$1,meta38221));
});})(map__38219,map__38219__$1,opts,on_edit))
;
}
return (new hivez.core.t38220(on_edit,opts,map__38219__$1,p__38211,owner,data,input_control,null));
});
hivez.core.name_select = (function name_select(data,owner,p__38227){var map__38232 = p__38227;var map__38232__$1 = ((cljs.core.seq_QMARK_.call(null,map__38232))?cljs.core.apply.call(null,cljs.core.hash_map,map__38232):map__38232);var opts = map__38232__$1;var action = cljs.core.get.call(null,map__38232__$1,new cljs.core.Keyword(null,"action","action",-811238024));if(typeof hivez.core.t38233 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38233 = (function (action,opts,map__38232,p__38227,owner,data,name_select,meta38234){
this.action = action;
this.opts = opts;
this.map__38232 = map__38232;
this.p__38227 = p__38227;
this.owner = owner;
this.data = data;
this.name_select = name_select;
this.meta38234 = meta38234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38233.cljs$lang$type = true;
hivez.core.t38233.cljs$lang$ctorStr = "hivez.core/t38233";
hivez.core.t38233.cljs$lang$ctorPrWriter = ((function (map__38232,map__38232__$1,opts,action){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38233");
});})(map__38232,map__38232__$1,opts,action))
;
hivez.core.t38233.prototype.om$core$IRender$ = true;
hivez.core.t38233.prototype.om$core$IRender$render$arity$1 = ((function (map__38232,map__38232__$1,opts,action){
return (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.a({"onClick": ((function (this__14154__auto____$1,map__38232,map__38232__$1,opts,action){
return (function (){return self__.action.call(null,self__.data);
});})(this__14154__auto____$1,map__38232,map__38232__$1,opts,action))
, "className": "name-select"},React.DOM.span({"className": "name-select-title"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(map__38232,map__38232__$1,opts,action))
;
hivez.core.t38233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38232,map__38232__$1,opts,action){
return (function (_38235){var self__ = this;
var _38235__$1 = this;return self__.meta38234;
});})(map__38232,map__38232__$1,opts,action))
;
hivez.core.t38233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38232,map__38232__$1,opts,action){
return (function (_38235,meta38234__$1){var self__ = this;
var _38235__$1 = this;return (new hivez.core.t38233(self__.action,self__.opts,self__.map__38232,self__.p__38227,self__.owner,self__.data,self__.name_select,meta38234__$1));
});})(map__38232,map__38232__$1,opts,action))
;
hivez.core.__GT_t38233 = ((function (map__38232,map__38232__$1,opts,action){
return (function __GT_t38233(action__$1,opts__$1,map__38232__$2,p__38227__$1,owner__$1,data__$1,name_select__$1,meta38234){return (new hivez.core.t38233(action__$1,opts__$1,map__38232__$2,p__38227__$1,owner__$1,data__$1,name_select__$1,meta38234));
});})(map__38232,map__38232__$1,opts,action))
;
}
return (new hivez.core.t38233(action,opts,map__38232__$1,p__38227,owner,data,name_select,null));
});
hivez.core.places_info = (function places_info(places,owner){if(typeof hivez.core.t38239 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38239 = (function (owner,places,places_info,meta38240){
this.owner = owner;
this.places = places;
this.places_info = places_info;
this.meta38240 = meta38240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38239.cljs$lang$type = true;
hivez.core.t38239.cljs$lang$ctorStr = "hivez.core/t38239";
hivez.core.t38239.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38239");
});
hivez.core.t38239.prototype.om$core$IRender$ = true;
hivez.core.t38239.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "places"},cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},hivez.core.k,om.core.build_all.call(null,hivez.core.name_select,self__.places,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.call(null,hivez.core.activate_place,self__.places)], null)], null))));
});
hivez.core.t38239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38241){var self__ = this;
var _38241__$1 = this;return self__.meta38240;
});
hivez.core.t38239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38241,meta38240__$1){var self__ = this;
var _38241__$1 = this;return (new hivez.core.t38239(self__.owner,self__.places,self__.places_info,meta38240__$1));
});
hivez.core.__GT_t38239 = (function __GT_t38239(owner__$1,places__$1,places_info__$1,meta38240){return (new hivez.core.t38239(owner__$1,places__$1,places_info__$1,meta38240));
});
}
return (new hivez.core.t38239(owner,places,places_info,null));
});
hivez.core.place_info = (function place_info(place,owner,p__38242){var map__38247 = p__38242;var map__38247__$1 = ((cljs.core.seq_QMARK_.call(null,map__38247))?cljs.core.apply.call(null,cljs.core.hash_map,map__38247):map__38247);var opts = map__38247__$1;var begin_edit = cljs.core.get.call(null,map__38247__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t38248 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38248 = (function (begin_edit,opts,map__38247,p__38242,owner,place,place_info,meta38249){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__38247 = map__38247;
this.p__38242 = p__38242;
this.owner = owner;
this.place = place;
this.place_info = place_info;
this.meta38249 = meta38249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38248.cljs$lang$type = true;
hivez.core.t38248.cljs$lang$ctorStr = "hivez.core/t38248";
hivez.core.t38248.cljs$lang$ctorPrWriter = ((function (map__38247,map__38247__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38248");
});})(map__38247,map__38247__$1,opts,begin_edit))
;
hivez.core.t38248.prototype.om$core$IRender$ = true;
hivez.core.t38248.prototype.om$core$IRender$render$arity$1 = ((function (map__38247,map__38247__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "place-info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)}, "data-ph": "Name", "onClick": ((function (___$1,map__38247,map__38247__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__38247,map__38247__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),cljs.core.apply.call(null,om.dom.div,{"className": "select-list"},React.DOM.span(null,"hives: "),om.core.build_all.call(null,hivez.core.name_select,cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(self__.place)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.call(null,hivez.core.activate_hive,self__.place)], null)], null))));
});})(map__38247,map__38247__$1,opts,begin_edit))
;
hivez.core.t38248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38247,map__38247__$1,opts,begin_edit){
return (function (_38250){var self__ = this;
var _38250__$1 = this;return self__.meta38249;
});})(map__38247,map__38247__$1,opts,begin_edit))
;
hivez.core.t38248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38247,map__38247__$1,opts,begin_edit){
return (function (_38250,meta38249__$1){var self__ = this;
var _38250__$1 = this;return (new hivez.core.t38248(self__.begin_edit,self__.opts,self__.map__38247,self__.p__38242,self__.owner,self__.place,self__.place_info,meta38249__$1));
});})(map__38247,map__38247__$1,opts,begin_edit))
;
hivez.core.__GT_t38248 = ((function (map__38247,map__38247__$1,opts,begin_edit){
return (function __GT_t38248(begin_edit__$1,opts__$1,map__38247__$2,p__38242__$1,owner__$1,place__$1,place_info__$1,meta38249){return (new hivez.core.t38248(begin_edit__$1,opts__$1,map__38247__$2,p__38242__$1,owner__$1,place__$1,place_info__$1,meta38249));
});})(map__38247,map__38247__$1,opts,begin_edit))
;
}
return (new hivez.core.t38248(begin_edit,opts,map__38247__$1,p__38242,owner,place,place_info,null));
});
hivez.core.hive_info = (function hive_info(hive,owner,p__38251){var map__38256 = p__38251;var map__38256__$1 = ((cljs.core.seq_QMARK_.call(null,map__38256))?cljs.core.apply.call(null,cljs.core.hash_map,map__38256):map__38256);var opts = map__38256__$1;var begin_edit = cljs.core.get.call(null,map__38256__$1,new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107));if(typeof hivez.core.t38257 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38257 = (function (begin_edit,opts,map__38256,p__38251,owner,hive,hive_info,meta38258){
this.begin_edit = begin_edit;
this.opts = opts;
this.map__38256 = map__38256;
this.p__38251 = p__38251;
this.owner = owner;
this.hive = hive;
this.hive_info = hive_info;
this.meta38258 = meta38258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38257.cljs$lang$type = true;
hivez.core.t38257.cljs$lang$ctorStr = "hivez.core/t38257";
hivez.core.t38257.cljs$lang$ctorPrWriter = ((function (map__38256,map__38256__$1,opts,begin_edit){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38257");
});})(map__38256,map__38256__$1,opts,begin_edit))
;
hivez.core.t38257.prototype.om$core$IRender$ = true;
hivez.core.t38257.prototype.om$core$IRender$render$arity$1 = ((function (map__38256,map__38256__$1,opts,begin_edit){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "info"},React.DOM.span({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Name", "onClick": ((function (___$1,map__38256,map__38256__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
});})(___$1,map__38256,map__38256__$1,opts,begin_edit))
, "className": "name editable single-line", "id": "name-editable"}),React.DOM.div({"className": "origin"},hivez.core.display_origin.call(null,self__.hive)),React.DOM.div({"className": "location"},hivez.core.display_pos.call(null,self__.hive)),React.DOM.div({"dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.hive)}, "data-ph": "Notes...", "onClick": ((function (___$1,map__38256,map__38256__$1,opts,begin_edit){
return (function (){return self__.begin_edit.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523));
});})(___$1,map__38256,map__38256__$1,opts,begin_edit))
, "className": "notes editable", "id": "notes-editable"}));
});})(map__38256,map__38256__$1,opts,begin_edit))
;
hivez.core.t38257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38256,map__38256__$1,opts,begin_edit){
return (function (_38259){var self__ = this;
var _38259__$1 = this;return self__.meta38258;
});})(map__38256,map__38256__$1,opts,begin_edit))
;
hivez.core.t38257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38256,map__38256__$1,opts,begin_edit){
return (function (_38259,meta38258__$1){var self__ = this;
var _38259__$1 = this;return (new hivez.core.t38257(self__.begin_edit,self__.opts,self__.map__38256,self__.p__38251,self__.owner,self__.hive,self__.hive_info,meta38258__$1));
});})(map__38256,map__38256__$1,opts,begin_edit))
;
hivez.core.__GT_t38257 = ((function (map__38256,map__38256__$1,opts,begin_edit){
return (function __GT_t38257(begin_edit__$1,opts__$1,map__38256__$2,p__38251__$1,owner__$1,hive__$1,hive_info__$1,meta38258){return (new hivez.core.t38257(begin_edit__$1,opts__$1,map__38256__$2,p__38251__$1,owner__$1,hive__$1,hive_info__$1,meta38258));
});})(map__38256,map__38256__$1,opts,begin_edit))
;
}
return (new hivez.core.t38257(begin_edit,opts,map__38256__$1,p__38251,owner,hive,hive_info,null));
});
hivez.core.navicon = (function navicon(data,owner,p__38261){var map__38268 = p__38261;var map__38268__$1 = ((cljs.core.seq_QMARK_.call(null,map__38268))?cljs.core.apply.call(null,cljs.core.hash_map,map__38268):map__38268);var opts = map__38268__$1;var toggle_open = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921));if(typeof hivez.core.t38269 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38269 = (function (toggle_open,opts,map__38268,p__38261,owner,data,navicon,meta38270){
this.toggle_open = toggle_open;
this.opts = opts;
this.map__38268 = map__38268;
this.p__38261 = p__38261;
this.owner = owner;
this.data = data;
this.navicon = navicon;
this.meta38270 = meta38270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38269.cljs$lang$type = true;
hivez.core.t38269.cljs$lang$ctorStr = "hivez.core/t38269";
hivez.core.t38269.cljs$lang$ctorPrWriter = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38269");
});})(map__38268,map__38268__$1,opts,toggle_open))
;
hivez.core.t38269.prototype.om$core$IRenderState$ = true;
hivez.core.t38269.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function (_,p__38272){var self__ = this;
var map__38273 = p__38272;var map__38273__$1 = ((cljs.core.seq_QMARK_.call(null,map__38273))?cljs.core.apply.call(null,cljs.core.hash_map,map__38273):map__38273);var editing = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var active = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"active","active",1895962068));var ___$1 = this;return React.DOM.div({"onClick": ((function (___$1,map__38273,map__38273__$1,editing,active,map__38268,map__38268__$1,opts,toggle_open){
return (function (){om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),((function (___$1,map__38273,map__38273__$1,editing,active,map__38268,map__38268__$1,opts,toggle_open){
return (function (p1__38260_SHARP_){return cljs.core.not.call(null,p1__38260_SHARP_);
});})(___$1,map__38273,map__38273__$1,editing,active,map__38268,map__38268__$1,opts,toggle_open))
);
return self__.toggle_open.call(null);
});})(___$1,map__38273,map__38273__$1,editing,active,map__38268,map__38268__$1,opts,toggle_open))
, "style": hivez.util.display_fade_in.call(null,(editing == null)), "className": ("navicon"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" active":null)))});
});})(map__38268,map__38268__$1,opts,toggle_open))
;
hivez.core.t38269.prototype.om$core$IInitState$ = true;
hivez.core.t38269.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null);
});})(map__38268,map__38268__$1,opts,toggle_open))
;
hivez.core.t38269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function (_38271){var self__ = this;
var _38271__$1 = this;return self__.meta38270;
});})(map__38268,map__38268__$1,opts,toggle_open))
;
hivez.core.t38269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function (_38271,meta38270__$1){var self__ = this;
var _38271__$1 = this;return (new hivez.core.t38269(self__.toggle_open,self__.opts,self__.map__38268,self__.p__38261,self__.owner,self__.data,self__.navicon,meta38270__$1));
});})(map__38268,map__38268__$1,opts,toggle_open))
;
hivez.core.__GT_t38269 = ((function (map__38268,map__38268__$1,opts,toggle_open){
return (function __GT_t38269(toggle_open__$1,opts__$1,map__38268__$2,p__38261__$1,owner__$1,data__$1,navicon__$1,meta38270){return (new hivez.core.t38269(toggle_open__$1,opts__$1,map__38268__$2,p__38261__$1,owner__$1,data__$1,navicon__$1,meta38270));
});})(map__38268,map__38268__$1,opts,toggle_open))
;
}
return (new hivez.core.t38269(toggle_open,opts,map__38268__$1,p__38261,owner,data,navicon,null));
});
hivez.core.back_btn = (function back_btn(active,owner){if(typeof hivez.core.t38277 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38277 = (function (owner,active,back_btn,meta38278){
this.owner = owner;
this.active = active;
this.back_btn = back_btn;
this.meta38278 = meta38278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38277.cljs$lang$type = true;
hivez.core.t38277.cljs$lang$ctorStr = "hivez.core/t38277";
hivez.core.t38277.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38277");
});
hivez.core.t38277.prototype.om$core$IRender$ = true;
hivez.core.t38277.prototype.om$core$IRender$render$arity$1 = (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14154__auto____$1){
return (function (){return om.core.update_BANG_.call(null,self__.active,new cljs.core.Keyword(null,"active","active",1895962068),false);
});})(this__14154__auto____$1))
, "className": "icon-arrow-left2", "id": "nav-back-btn"});
});
hivez.core.t38277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38279){var self__ = this;
var _38279__$1 = this;return self__.meta38278;
});
hivez.core.t38277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38279,meta38278__$1){var self__ = this;
var _38279__$1 = this;return (new hivez.core.t38277(self__.owner,self__.active,self__.back_btn,meta38278__$1));
});
hivez.core.__GT_t38277 = (function __GT_t38277(owner__$1,active__$1,back_btn__$1,meta38278){return (new hivez.core.t38277(owner__$1,active__$1,back_btn__$1,meta38278));
});
}
return (new hivez.core.t38277(owner,active,back_btn,null));
});
hivez.core.add_place_btn = (function add_place_btn(places,owner){if(typeof hivez.core.t38283 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38283 = (function (owner,places,add_place_btn,meta38284){
this.owner = owner;
this.places = places;
this.add_place_btn = add_place_btn;
this.meta38284 = meta38284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38283.cljs$lang$type = true;
hivez.core.t38283.cljs$lang$ctorStr = "hivez.core/t38283";
hivez.core.t38283.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38283");
});
hivez.core.t38283.prototype.om$core$IRender$ = true;
hivez.core.t38283.prototype.om$core$IRender$render$arity$1 = (function (this__14154__auto__){var self__ = this;
var this__14154__auto____$1 = this;return React.DOM.div({"onClick": ((function (this__14154__auto____$1){
return (function (){return hivez.core.add_place.call(null,self__.places);
});})(this__14154__auto____$1))
, "className": "icon-plus", "id": "nav-add-btn"});
});
hivez.core.t38283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38285){var self__ = this;
var _38285__$1 = this;return self__.meta38284;
});
hivez.core.t38283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38285,meta38284__$1){var self__ = this;
var _38285__$1 = this;return (new hivez.core.t38283(self__.owner,self__.places,self__.add_place_btn,meta38284__$1));
});
hivez.core.__GT_t38283 = (function __GT_t38283(owner__$1,places__$1,add_place_btn__$1,meta38284){return (new hivez.core.t38283(owner__$1,places__$1,add_place_btn__$1,meta38284));
});
}
return (new hivez.core.t38283(owner,places,add_place_btn,null));
});
hivez.core.control_panel = (function control_panel(active,owner,p__38286){var map__38293 = p__38286;var map__38293__$1 = ((cljs.core.seq_QMARK_.call(null,map__38293))?cljs.core.apply.call(null,cljs.core.hash_map,map__38293):map__38293);var opts = map__38293__$1;var path = cljs.core.get.call(null,map__38293__$1,new cljs.core.Keyword(null,"path","path",-188191168));var control_fn = cljs.core.get.call(null,map__38293__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));if(typeof hivez.core.t38294 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38294 = (function (control_fn,path,opts,map__38293,p__38286,owner,active,control_panel,meta38295){
this.control_fn = control_fn;
this.path = path;
this.opts = opts;
this.map__38293 = map__38293;
this.p__38286 = p__38286;
this.owner = owner;
this.active = active;
this.control_panel = control_panel;
this.meta38295 = meta38295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38294.cljs$lang$type = true;
hivez.core.t38294.cljs$lang$ctorStr = "hivez.core/t38294";
hivez.core.t38294.cljs$lang$ctorPrWriter = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38294");
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.t38294.prototype.om$core$IRenderState$ = true;
hivez.core.t38294.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (_,p__38297){var self__ = this;
var map__38298 = p__38297;var map__38298__$1 = ((cljs.core.seq_QMARK_.call(null,map__38298))?cljs.core.apply.call(null,cljs.core.hash_map,map__38298):map__38298);var editing = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"className": "control-panel"},React.DOM.div({"style": hivez.util.display_fade_in.call(null,(function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})()), "id": "nav-control"},React.DOM.span({"id": "nav-label"},self__.path),om.core.build.call(null,self__.control_fn,self__.active)),om.core.build.call(null,hivez.core.navicon,hivez.core.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)));
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.t38294.prototype.om$core$IWillReceiveProps$ = true;
hivez.core.t38294.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return cljs.core.println.call(null,"received!");
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.t38294.prototype.om$core$InitState$ = true;
hivez.core.t38294.prototype.om$core$InitState$init_state$arity$1 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-str","path-str",259306316),""], null);
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.t38294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (_38296){var self__ = this;
var _38296__$1 = this;return self__.meta38295;
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.t38294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function (_38296,meta38295__$1){var self__ = this;
var _38296__$1 = this;return (new hivez.core.t38294(self__.control_fn,self__.path,self__.opts,self__.map__38293,self__.p__38286,self__.owner,self__.active,self__.control_panel,meta38295__$1));
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
hivez.core.__GT_t38294 = ((function (map__38293,map__38293__$1,opts,path,control_fn){
return (function __GT_t38294(control_fn__$1,path__$1,opts__$1,map__38293__$2,p__38286__$1,owner__$1,active__$1,control_panel__$1,meta38295){return (new hivez.core.t38294(control_fn__$1,path__$1,opts__$1,map__38293__$2,p__38286__$1,owner__$1,active__$1,control_panel__$1,meta38295));
});})(map__38293,map__38293__$1,opts,path,control_fn))
;
}
return (new hivez.core.t38294(control_fn,path,opts,map__38293__$1,p__38286,owner,active,control_panel,null));
});
hivez.core.toggle_open = (function toggle_open(owner){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
});
hivez.core.drawer = (function drawer(active,owner,p__38299){var map__38306 = p__38299;var map__38306__$1 = ((cljs.core.seq_QMARK_.call(null,map__38306))?cljs.core.apply.call(null,cljs.core.hash_map,map__38306):map__38306);var opts = map__38306__$1;var path = cljs.core.get.call(null,map__38306__$1,new cljs.core.Keyword(null,"path","path",-188191168));var control_fn = cljs.core.get.call(null,map__38306__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));var child_fn = cljs.core.get.call(null,map__38306__$1,new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481));if(typeof hivez.core.t38307 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38307 = (function (child_fn,control_fn,path,opts,map__38306,p__38299,owner,active,drawer,meta38308){
this.child_fn = child_fn;
this.control_fn = control_fn;
this.path = path;
this.opts = opts;
this.map__38306 = map__38306;
this.p__38299 = p__38299;
this.owner = owner;
this.active = active;
this.drawer = drawer;
this.meta38308 = meta38308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38307.cljs$lang$type = true;
hivez.core.t38307.cljs$lang$ctorStr = "hivez.core/t38307";
hivez.core.t38307.cljs$lang$ctorPrWriter = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38307");
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
hivez.core.t38307.prototype.om$core$IRenderState$ = true;
hivez.core.t38307.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (_,p__38310){var self__ = this;
var map__38311 = p__38310;var map__38311__$1 = ((cljs.core.seq_QMARK_.call(null,map__38311))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);var orientation = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));var editing = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var open = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"open","open",-1763596448));var ___$1 = this;return React.DOM.div({"id": "drawer-wrapper"},om.core.build.call(null,hivez.core.control_panel,self__.active,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-open","toggle-open",1973766921),cljs.core.partial.call(null,hivez.core.toggle_open,self__.owner),new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),self__.control_fn,new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null)], null)),(cljs.core.truth_(editing)?om.core.build.call(null,hivez.core.input_control,self__.active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),editing], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edit","on-edit",745088083),cljs.core.partial.call(null,hivez.core.on_edit,((function (___$1,map__38311,map__38311__$1,orientation,editing,open,map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (){return hivez.core.end_edit.call(null,self__.owner);
});})(___$1,map__38311,map__38311__$1,orientation,editing,open,map__38306,map__38306__$1,opts,path,control_fn,child_fn))
)], null)], null)):null),React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orientation)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__12534__auto__ = open;if(cljs.core.truth_(and__12534__auto__))
{return cljs.core.not.call(null,editing);
} else
{return and__12534__auto__;
}
})())?" show":" hide"))), "id": "drawer"},om.core.build.call(null,self__.child_fn,self__.active,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin-edit","begin-edit",-253186107),cljs.core.partial.call(null,hivez.core.begin_edit,self__.owner)], null)], null))));
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
hivez.core.t38307.prototype.om$core$IInitState$ = true;
hivez.core.t38307.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
hivez.core.t38307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (_38309){var self__ = this;
var _38309__$1 = this;return self__.meta38308;
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
hivez.core.t38307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function (_38309,meta38308__$1){var self__ = this;
var _38309__$1 = this;return (new hivez.core.t38307(self__.child_fn,self__.control_fn,self__.path,self__.opts,self__.map__38306,self__.p__38299,self__.owner,self__.active,self__.drawer,meta38308__$1));
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
hivez.core.__GT_t38307 = ((function (map__38306,map__38306__$1,opts,path,control_fn,child_fn){
return (function __GT_t38307(child_fn__$1,control_fn__$1,path__$1,opts__$1,map__38306__$2,p__38299__$1,owner__$1,active__$1,drawer__$1,meta38308){return (new hivez.core.t38307(child_fn__$1,control_fn__$1,path__$1,opts__$1,map__38306__$2,p__38299__$1,owner__$1,active__$1,drawer__$1,meta38308));
});})(map__38306,map__38306__$1,opts,path,control_fn,child_fn))
;
}
return (new hivez.core.t38307(child_fn,control_fn,path,opts,map__38306__$1,p__38299,owner,active,drawer,null));
});
hivez.core.app = (function app(data,owner){if(typeof hivez.core.t38315 !== 'undefined')
{} else
{
/**
* @constructor
*/
hivez.core.t38315 = (function (owner,data,app,meta38316){
this.owner = owner;
this.data = data;
this.app = app;
this.meta38316 = meta38316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hivez.core.t38315.cljs$lang$type = true;
hivez.core.t38315.cljs$lang$ctorStr = "hivez.core/t38315";
hivez.core.t38315.cljs$lang$ctorPrWriter = (function (this__13123__auto__,writer__13124__auto__,opt__13125__auto__){return cljs.core._write.call(null,writer__13124__auto__,"hivez.core/t38315");
});
hivez.core.t38315.prototype.om$core$IRender$ = true;
hivez.core.t38315.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("flex-container "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)))},React.DOM.div({"className": "flex-content"},om.core.build.call(null,hivez.map.l_map,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"add","add",235287739),cljs.core.partial.call(null,hivez.core.add_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"activate","activate",441219614),cljs.core.partial.call(null,hivez.core.activate_hive,self__.owner,self__.data),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.call(null,hivez.core.delete_hive,self__.owner,self__.data)], null)], null))),(function (){var active_place = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data)));var active_hive = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.vals.call(null,new cljs.core.Keyword(null,"hives","hives",-1303225483).cljs$core$IFn$_invoke$arity$1(active_place))));if(cljs.core.truth_(active_hive))
{return om.core.build.call(null,hivez.core.drawer,active_hive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.hive_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"path","path",-188191168),":hive"], null)], null));
} else
{if(cljs.core.truth_(active_place))
{return om.core.build.call(null,hivez.core.drawer,active_place,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.place_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.back_btn,new cljs.core.Keyword(null,"path","path",-188191168),":place"], null)], null));
} else
{return om.core.build.call(null,hivez.core.drawer,new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"orientation","orientation",623557579).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child-fn","child-fn",-1126385481),hivez.core.places_info,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),hivez.core.add_place_btn,new cljs.core.Keyword(null,"path","path",-188191168),":places"], null)], null));

}
}
})());
});
hivez.core.t38315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38317){var self__ = this;
var _38317__$1 = this;return self__.meta38316;
});
hivez.core.t38315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38317,meta38316__$1){var self__ = this;
var _38317__$1 = this;return (new hivez.core.t38315(self__.owner,self__.data,self__.app,meta38316__$1));
});
hivez.core.__GT_t38315 = (function __GT_t38315(owner__$1,data__$1,app__$1,meta38316){return (new hivez.core.t38315(owner__$1,data__$1,app__$1,meta38316));
});
}
return (new hivez.core.t38315(owner,data,app,null));
});
hivez.core.render = (function render(){hivez.core.orientation.call(null);
window.addEventListener("resize",hivez.core.orientation);
return hivez.db.db_new.call(null,(function (){return hivez.db.db_get_all.call(null,(function (result){return cljs.core.swap_BANG_.call(null,hivez.core.app_state,(function (m){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),(function (p1__38318_SHARP_){return cljs.core.conj.call(null,p1__38318_SHARP_,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,result.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"active","active",1895962068),false));
}));
}));
}),(function (){return om.core.root.call(null,hivez.core.app,hivez.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
}));
}));
});

//# sourceMappingURL=core.js.map