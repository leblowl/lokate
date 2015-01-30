// Compiled by ClojureScript 0.0-2727 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__22172__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22171 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__22171,(0),null);
var body = cljs.core.nthnext.call(null,vec__22171,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22173__i = 0, G__22173__a = new Array(arguments.length -  0);
while (G__22173__i < G__22173__a.length) {G__22173__a[G__22173__i] = arguments[G__22173__i + 0]; ++G__22173__i;}
  args = new cljs.core.IndexedSeq(G__22173__a,0);
} 
return G__22172__delegate.call(this,args);};
G__22172.cljs$lang$maxFixedArity = 0;
G__22172.cljs$lang$applyTo = (function (arglist__22174){
var args = cljs.core.seq(arglist__22174);
return G__22172__delegate(args);
});
G__22172.cljs$core$IFn$_invoke$arity$variadic = G__22172__delegate;
return G__22172;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4514__auto__ = (function iter__22179(s__22180){
return (new cljs.core.LazySeq(null,(function (){
var s__22180__$1 = s__22180;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22180__$1);
if(temp__4126__auto__){
var s__22180__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22180__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__22180__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__22182 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__22181 = (0);
while(true){
if((i__22181 < size__4513__auto__)){
var args = cljs.core._nth.call(null,c__4512__auto__,i__22181);
cljs.core.chunk_append.call(null,b__22182,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22183 = (i__22181 + (1));
i__22181 = G__22183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22182),iter__22179.call(null,cljs.core.chunk_rest.call(null,s__22180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22182),null);
}
} else {
var args = cljs.core.first.call(null,s__22180__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22179.call(null,cljs.core.rest.call(null,s__22180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4514__auto__ = (function iter__22188(s__22189){
return (new cljs.core.LazySeq(null,(function (){
var s__22189__$1 = s__22189;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22189__$1);
if(temp__4126__auto__){
var s__22189__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22189__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__22189__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__22191 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__22190 = (0);
while(true){
if((i__22190 < size__4513__auto__)){
var style = cljs.core._nth.call(null,c__4512__auto__,i__22190);
cljs.core.chunk_append.call(null,b__22191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22192 = (i__22190 + (1));
i__22190 = G__22192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22191),iter__22188.call(null,cljs.core.chunk_rest.call(null,s__22189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22191),null);
}
} else {
var style = cljs.core.first.call(null,s__22189__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22188.call(null,cljs.core.rest.call(null,s__22189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__22193__i = 0, G__22193__a = new Array(arguments.length -  0);
while (G__22193__i < G__22193__a.length) {G__22193__a[G__22193__i] = arguments[G__22193__i + 0]; ++G__22193__i;}
  styles = new cljs.core.IndexedSeq(G__22193__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__22194){
var styles = cljs.core.seq(arglist__22194);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to22195 = (function() { 
var link_to22195__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22195 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__22196__i = 0, G__22196__a = new Array(arguments.length -  1);
while (G__22196__i < G__22196__a.length) {G__22196__a[G__22196__i] = arguments[G__22196__i + 1]; ++G__22196__i;}
  content = new cljs.core.IndexedSeq(G__22196__a,0);
} 
return link_to22195__delegate.call(this,url,content);};
link_to22195.cljs$lang$maxFixedArity = 1;
link_to22195.cljs$lang$applyTo = (function (arglist__22197){
var url = cljs.core.first(arglist__22197);
var content = cljs.core.rest(arglist__22197);
return link_to22195__delegate(url,content);
});
link_to22195.cljs$core$IFn$_invoke$arity$variadic = link_to22195__delegate;
return link_to22195;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22195);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22198 = (function() { 
var mail_to22198__delegate = function (e_mail,p__22199){
var vec__22201 = p__22199;
var content = cljs.core.nth.call(null,vec__22201,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3758__auto__ = content;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to22198 = function (e_mail,var_args){
var p__22199 = null;
if (arguments.length > 1) {
var G__22202__i = 0, G__22202__a = new Array(arguments.length -  1);
while (G__22202__i < G__22202__a.length) {G__22202__a[G__22202__i] = arguments[G__22202__i + 1]; ++G__22202__i;}
  p__22199 = new cljs.core.IndexedSeq(G__22202__a,0);
} 
return mail_to22198__delegate.call(this,e_mail,p__22199);};
mail_to22198.cljs$lang$maxFixedArity = 1;
mail_to22198.cljs$lang$applyTo = (function (arglist__22203){
var e_mail = cljs.core.first(arglist__22203);
var p__22199 = cljs.core.rest(arglist__22203);
return mail_to22198__delegate(e_mail,p__22199);
});
mail_to22198.cljs$core$IFn$_invoke$arity$variadic = mail_to22198__delegate;
return mail_to22198;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22198);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22204 = (function unordered_list22204(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4514__auto__ = (function iter__22209(s__22210){
return (new cljs.core.LazySeq(null,(function (){
var s__22210__$1 = s__22210;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22210__$1);
if(temp__4126__auto__){
var s__22210__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22210__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__22210__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__22212 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__22211 = (0);
while(true){
if((i__22211 < size__4513__auto__)){
var x = cljs.core._nth.call(null,c__4512__auto__,i__22211);
cljs.core.chunk_append.call(null,b__22212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22213 = (i__22211 + (1));
i__22211 = G__22213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22212),iter__22209.call(null,cljs.core.chunk_rest.call(null,s__22210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22212),null);
}
} else {
var x = cljs.core.first.call(null,s__22210__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22209.call(null,cljs.core.rest.call(null,s__22210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22204);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22214 = (function ordered_list22214(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4514__auto__ = (function iter__22219(s__22220){
return (new cljs.core.LazySeq(null,(function (){
var s__22220__$1 = s__22220;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22220__$1);
if(temp__4126__auto__){
var s__22220__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22220__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__22220__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__22222 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__22221 = (0);
while(true){
if((i__22221 < size__4513__auto__)){
var x = cljs.core._nth.call(null,c__4512__auto__,i__22221);
cljs.core.chunk_append.call(null,b__22222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22223 = (i__22221 + (1));
i__22221 = G__22223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22222),iter__22219.call(null,cljs.core.chunk_rest.call(null,s__22220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22222),null);
}
} else {
var x = cljs.core.first.call(null,s__22220__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22219.call(null,cljs.core.rest.call(null,s__22220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22214);
/**
* Create an image element.
*/
sablono.core.image22224 = (function() {
var image22224 = null;
var image22224__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22224__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22224 = function(src,alt){
switch(arguments.length){
case 1:
return image22224__1.call(this,src);
case 2:
return image22224__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22224.cljs$core$IFn$_invoke$arity$1 = image22224__1;
image22224.cljs$core$IFn$_invoke$arity$2 = image22224__2;
return image22224;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22224);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__22225_SHARP_,p2__22226_SHARP_){
return [cljs.core.str(p1__22225_SHARP_),cljs.core.str("["),cljs.core.str(p2__22226_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__22227_SHARP_,p2__22228_SHARP_){
return [cljs.core.str(p1__22227_SHARP_),cljs.core.str("-"),cljs.core.str(p2__22228_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field22229 = (function() {
var color_field22229 = null;
var color_field22229__1 = (function (name__10943__auto__){
return color_field22229.call(null,name__10943__auto__,null);
});
var color_field22229__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10943__auto__,value__10944__auto__);
});
color_field22229 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return color_field22229__1.call(this,name__10943__auto__);
case 2:
return color_field22229__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22229.cljs$core$IFn$_invoke$arity$1 = color_field22229__1;
color_field22229.cljs$core$IFn$_invoke$arity$2 = color_field22229__2;
return color_field22229;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22229);

/**
* Creates a date input field.
*/
sablono.core.date_field22230 = (function() {
var date_field22230 = null;
var date_field22230__1 = (function (name__10943__auto__){
return date_field22230.call(null,name__10943__auto__,null);
});
var date_field22230__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10943__auto__,value__10944__auto__);
});
date_field22230 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return date_field22230__1.call(this,name__10943__auto__);
case 2:
return date_field22230__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22230.cljs$core$IFn$_invoke$arity$1 = date_field22230__1;
date_field22230.cljs$core$IFn$_invoke$arity$2 = date_field22230__2;
return date_field22230;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22230);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22231 = (function() {
var datetime_field22231 = null;
var datetime_field22231__1 = (function (name__10943__auto__){
return datetime_field22231.call(null,name__10943__auto__,null);
});
var datetime_field22231__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10943__auto__,value__10944__auto__);
});
datetime_field22231 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return datetime_field22231__1.call(this,name__10943__auto__);
case 2:
return datetime_field22231__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22231.cljs$core$IFn$_invoke$arity$1 = datetime_field22231__1;
datetime_field22231.cljs$core$IFn$_invoke$arity$2 = datetime_field22231__2;
return datetime_field22231;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22231);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22232 = (function() {
var datetime_local_field22232 = null;
var datetime_local_field22232__1 = (function (name__10943__auto__){
return datetime_local_field22232.call(null,name__10943__auto__,null);
});
var datetime_local_field22232__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10943__auto__,value__10944__auto__);
});
datetime_local_field22232 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22232__1.call(this,name__10943__auto__);
case 2:
return datetime_local_field22232__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22232.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22232__1;
datetime_local_field22232.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22232__2;
return datetime_local_field22232;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22232);

/**
* Creates a email input field.
*/
sablono.core.email_field22233 = (function() {
var email_field22233 = null;
var email_field22233__1 = (function (name__10943__auto__){
return email_field22233.call(null,name__10943__auto__,null);
});
var email_field22233__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10943__auto__,value__10944__auto__);
});
email_field22233 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return email_field22233__1.call(this,name__10943__auto__);
case 2:
return email_field22233__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22233.cljs$core$IFn$_invoke$arity$1 = email_field22233__1;
email_field22233.cljs$core$IFn$_invoke$arity$2 = email_field22233__2;
return email_field22233;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22233);

/**
* Creates a file input field.
*/
sablono.core.file_field22234 = (function() {
var file_field22234 = null;
var file_field22234__1 = (function (name__10943__auto__){
return file_field22234.call(null,name__10943__auto__,null);
});
var file_field22234__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10943__auto__,value__10944__auto__);
});
file_field22234 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return file_field22234__1.call(this,name__10943__auto__);
case 2:
return file_field22234__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22234.cljs$core$IFn$_invoke$arity$1 = file_field22234__1;
file_field22234.cljs$core$IFn$_invoke$arity$2 = file_field22234__2;
return file_field22234;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22234);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22235 = (function() {
var hidden_field22235 = null;
var hidden_field22235__1 = (function (name__10943__auto__){
return hidden_field22235.call(null,name__10943__auto__,null);
});
var hidden_field22235__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10943__auto__,value__10944__auto__);
});
hidden_field22235 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return hidden_field22235__1.call(this,name__10943__auto__);
case 2:
return hidden_field22235__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22235.cljs$core$IFn$_invoke$arity$1 = hidden_field22235__1;
hidden_field22235.cljs$core$IFn$_invoke$arity$2 = hidden_field22235__2;
return hidden_field22235;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22235);

/**
* Creates a month input field.
*/
sablono.core.month_field22236 = (function() {
var month_field22236 = null;
var month_field22236__1 = (function (name__10943__auto__){
return month_field22236.call(null,name__10943__auto__,null);
});
var month_field22236__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10943__auto__,value__10944__auto__);
});
month_field22236 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return month_field22236__1.call(this,name__10943__auto__);
case 2:
return month_field22236__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22236.cljs$core$IFn$_invoke$arity$1 = month_field22236__1;
month_field22236.cljs$core$IFn$_invoke$arity$2 = month_field22236__2;
return month_field22236;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22236);

/**
* Creates a number input field.
*/
sablono.core.number_field22237 = (function() {
var number_field22237 = null;
var number_field22237__1 = (function (name__10943__auto__){
return number_field22237.call(null,name__10943__auto__,null);
});
var number_field22237__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10943__auto__,value__10944__auto__);
});
number_field22237 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return number_field22237__1.call(this,name__10943__auto__);
case 2:
return number_field22237__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22237.cljs$core$IFn$_invoke$arity$1 = number_field22237__1;
number_field22237.cljs$core$IFn$_invoke$arity$2 = number_field22237__2;
return number_field22237;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22237);

/**
* Creates a password input field.
*/
sablono.core.password_field22238 = (function() {
var password_field22238 = null;
var password_field22238__1 = (function (name__10943__auto__){
return password_field22238.call(null,name__10943__auto__,null);
});
var password_field22238__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10943__auto__,value__10944__auto__);
});
password_field22238 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return password_field22238__1.call(this,name__10943__auto__);
case 2:
return password_field22238__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22238.cljs$core$IFn$_invoke$arity$1 = password_field22238__1;
password_field22238.cljs$core$IFn$_invoke$arity$2 = password_field22238__2;
return password_field22238;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22238);

/**
* Creates a range input field.
*/
sablono.core.range_field22239 = (function() {
var range_field22239 = null;
var range_field22239__1 = (function (name__10943__auto__){
return range_field22239.call(null,name__10943__auto__,null);
});
var range_field22239__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10943__auto__,value__10944__auto__);
});
range_field22239 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return range_field22239__1.call(this,name__10943__auto__);
case 2:
return range_field22239__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22239.cljs$core$IFn$_invoke$arity$1 = range_field22239__1;
range_field22239.cljs$core$IFn$_invoke$arity$2 = range_field22239__2;
return range_field22239;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22239);

/**
* Creates a search input field.
*/
sablono.core.search_field22240 = (function() {
var search_field22240 = null;
var search_field22240__1 = (function (name__10943__auto__){
return search_field22240.call(null,name__10943__auto__,null);
});
var search_field22240__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10943__auto__,value__10944__auto__);
});
search_field22240 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return search_field22240__1.call(this,name__10943__auto__);
case 2:
return search_field22240__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22240.cljs$core$IFn$_invoke$arity$1 = search_field22240__1;
search_field22240.cljs$core$IFn$_invoke$arity$2 = search_field22240__2;
return search_field22240;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22240);

/**
* Creates a tel input field.
*/
sablono.core.tel_field22241 = (function() {
var tel_field22241 = null;
var tel_field22241__1 = (function (name__10943__auto__){
return tel_field22241.call(null,name__10943__auto__,null);
});
var tel_field22241__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10943__auto__,value__10944__auto__);
});
tel_field22241 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return tel_field22241__1.call(this,name__10943__auto__);
case 2:
return tel_field22241__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22241.cljs$core$IFn$_invoke$arity$1 = tel_field22241__1;
tel_field22241.cljs$core$IFn$_invoke$arity$2 = tel_field22241__2;
return tel_field22241;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22241);

/**
* Creates a text input field.
*/
sablono.core.text_field22242 = (function() {
var text_field22242 = null;
var text_field22242__1 = (function (name__10943__auto__){
return text_field22242.call(null,name__10943__auto__,null);
});
var text_field22242__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10943__auto__,value__10944__auto__);
});
text_field22242 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return text_field22242__1.call(this,name__10943__auto__);
case 2:
return text_field22242__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22242.cljs$core$IFn$_invoke$arity$1 = text_field22242__1;
text_field22242.cljs$core$IFn$_invoke$arity$2 = text_field22242__2;
return text_field22242;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22242);

/**
* Creates a time input field.
*/
sablono.core.time_field22243 = (function() {
var time_field22243 = null;
var time_field22243__1 = (function (name__10943__auto__){
return time_field22243.call(null,name__10943__auto__,null);
});
var time_field22243__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10943__auto__,value__10944__auto__);
});
time_field22243 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return time_field22243__1.call(this,name__10943__auto__);
case 2:
return time_field22243__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22243.cljs$core$IFn$_invoke$arity$1 = time_field22243__1;
time_field22243.cljs$core$IFn$_invoke$arity$2 = time_field22243__2;
return time_field22243;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22243);

/**
* Creates a url input field.
*/
sablono.core.url_field22244 = (function() {
var url_field22244 = null;
var url_field22244__1 = (function (name__10943__auto__){
return url_field22244.call(null,name__10943__auto__,null);
});
var url_field22244__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10943__auto__,value__10944__auto__);
});
url_field22244 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return url_field22244__1.call(this,name__10943__auto__);
case 2:
return url_field22244__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22244.cljs$core$IFn$_invoke$arity$1 = url_field22244__1;
url_field22244.cljs$core$IFn$_invoke$arity$2 = url_field22244__2;
return url_field22244;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22244);

/**
* Creates a week input field.
*/
sablono.core.week_field22245 = (function() {
var week_field22245 = null;
var week_field22245__1 = (function (name__10943__auto__){
return week_field22245.call(null,name__10943__auto__,null);
});
var week_field22245__2 = (function (name__10943__auto__,value__10944__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10943__auto__,value__10944__auto__);
});
week_field22245 = function(name__10943__auto__,value__10944__auto__){
switch(arguments.length){
case 1:
return week_field22245__1.call(this,name__10943__auto__);
case 2:
return week_field22245__2.call(this,name__10943__auto__,value__10944__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22245.cljs$core$IFn$_invoke$arity$1 = week_field22245__1;
week_field22245.cljs$core$IFn$_invoke$arity$2 = week_field22245__2;
return week_field22245;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22245);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22246 = (function() {
var check_box22246 = null;
var check_box22246__1 = (function (name){
return check_box22246.call(null,name,null);
});
var check_box22246__2 = (function (name,checked_QMARK_){
return check_box22246.call(null,name,checked_QMARK_,"true");
});
var check_box22246__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22246 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22246__1.call(this,name);
case 2:
return check_box22246__2.call(this,name,checked_QMARK_);
case 3:
return check_box22246__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22246.cljs$core$IFn$_invoke$arity$1 = check_box22246__1;
check_box22246.cljs$core$IFn$_invoke$arity$2 = check_box22246__2;
check_box22246.cljs$core$IFn$_invoke$arity$3 = check_box22246__3;
return check_box22246;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22246);
/**
* Creates a radio button.
*/
sablono.core.radio_button22247 = (function() {
var radio_button22247 = null;
var radio_button22247__1 = (function (group){
return radio_button22247.call(null,group,null);
});
var radio_button22247__2 = (function (group,checked_QMARK_){
return radio_button22247.call(null,group,checked_QMARK_,"true");
});
var radio_button22247__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22247 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22247__1.call(this,group);
case 2:
return radio_button22247__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22247__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22247.cljs$core$IFn$_invoke$arity$1 = radio_button22247__1;
radio_button22247.cljs$core$IFn$_invoke$arity$2 = radio_button22247__2;
radio_button22247.cljs$core$IFn$_invoke$arity$3 = radio_button22247__3;
return radio_button22247;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22247);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22248 = (function() {
var select_options22248 = null;
var select_options22248__1 = (function (coll){
return select_options22248.call(null,coll,null);
});
var select_options22248__2 = (function (coll,selected){
var iter__4514__auto__ = (function iter__22257(s__22258){
return (new cljs.core.LazySeq(null,(function (){
var s__22258__$1 = s__22258;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22258__$1);
if(temp__4126__auto__){
var s__22258__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22258__$2)){
var c__4512__auto__ = cljs.core.chunk_first.call(null,s__22258__$2);
var size__4513__auto__ = cljs.core.count.call(null,c__4512__auto__);
var b__22260 = cljs.core.chunk_buffer.call(null,size__4513__auto__);
if((function (){var i__22259 = (0);
while(true){
if((i__22259 < size__4513__auto__)){
var x = cljs.core._nth.call(null,c__4512__auto__,i__22259);
cljs.core.chunk_append.call(null,b__22260,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22263 = x;
var text = cljs.core.nth.call(null,vec__22263,(0),null);
var val = cljs.core.nth.call(null,vec__22263,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22263,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22248.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__22265 = (i__22259 + (1));
i__22259 = G__22265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22260),iter__22257.call(null,cljs.core.chunk_rest.call(null,s__22258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22260),null);
}
} else {
var x = cljs.core.first.call(null,s__22258__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22264 = x;
var text = cljs.core.nth.call(null,vec__22264,(0),null);
var val = cljs.core.nth.call(null,vec__22264,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22264,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22248.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22257.call(null,cljs.core.rest.call(null,s__22258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__.call(null,coll);
});
select_options22248 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22248__1.call(this,coll);
case 2:
return select_options22248__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22248.cljs$core$IFn$_invoke$arity$1 = select_options22248__1;
select_options22248.cljs$core$IFn$_invoke$arity$2 = select_options22248__2;
return select_options22248;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22248);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22266 = (function() {
var drop_down22266 = null;
var drop_down22266__2 = (function (name,options){
return drop_down22266.call(null,name,options,null);
});
var drop_down22266__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22266 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22266__2.call(this,name,options);
case 3:
return drop_down22266__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22266.cljs$core$IFn$_invoke$arity$2 = drop_down22266__2;
drop_down22266.cljs$core$IFn$_invoke$arity$3 = drop_down22266__3;
return drop_down22266;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22266);
/**
* Creates a text area element.
*/
sablono.core.text_area22267 = (function() {
var text_area22267 = null;
var text_area22267__1 = (function (name){
return text_area22267.call(null,name,null);
});
var text_area22267__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22267 = function(name,value){
switch(arguments.length){
case 1:
return text_area22267__1.call(this,name);
case 2:
return text_area22267__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22267.cljs$core$IFn$_invoke$arity$1 = text_area22267__1;
text_area22267.cljs$core$IFn$_invoke$arity$2 = text_area22267__2;
return text_area22267;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22267);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22268 = (function label22268(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22268);
/**
* Creates a submit button.
*/
sablono.core.submit_button22269 = (function submit_button22269(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22269);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22270 = (function reset_button22270(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22270);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22271 = (function() { 
var form_to22271__delegate = function (p__22272,body){
var vec__22274 = p__22272;
var method = cljs.core.nth.call(null,vec__22274,(0),null);
var action = cljs.core.nth.call(null,vec__22274,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22271 = function (p__22272,var_args){
var body = null;
if (arguments.length > 1) {
var G__22275__i = 0, G__22275__a = new Array(arguments.length -  1);
while (G__22275__i < G__22275__a.length) {G__22275__a[G__22275__i] = arguments[G__22275__i + 1]; ++G__22275__i;}
  body = new cljs.core.IndexedSeq(G__22275__a,0);
} 
return form_to22271__delegate.call(this,p__22272,body);};
form_to22271.cljs$lang$maxFixedArity = 1;
form_to22271.cljs$lang$applyTo = (function (arglist__22276){
var p__22272 = cljs.core.first(arglist__22276);
var body = cljs.core.rest(arglist__22276);
return form_to22271__delegate(p__22272,body);
});
form_to22271.cljs$core$IFn$_invoke$arity$variadic = form_to22271__delegate;
return form_to22271;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22271);
