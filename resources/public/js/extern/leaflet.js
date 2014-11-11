

/**
 *  L.Map
**/


L.Map;
L.map;


/* Options */

options.center;
options.zoom;
options.layers;
options.minZoom;
options.maxZoom;
options.maxBounds;
options.crs;

options.dragging;
options.touchZoom;
options.scrollWheelZoom;
options.doubleClickZoom;
options.boxZoom;
options.tap;
options.tapTolerance;
options.trackResize;
options.worldCopyJump;
options.closePopupOnClick;

options.keyboard;
options.keyboardPanOffset;
options.keyboardZoomOffset;

options.inertia;
options.inertiaDeceleration;
options.inertiaMaxSpeed;
options.inertiaThreshold;

options.zoomControl;
options.attributionControl;

options.fadeAnimation;
options.zoomAnimation;
options.zoomAnimationThreshold;
options.markerZoomAnimation;


/* Events */

/*
click;
dblclick;
mousedown;
mouseup;
mouseover;
mouseout;
mousemove;
contextmenu;
focus;
blur;
preclick;
load;
unload;
viewreset;
movestart;
move;
moveend;
dragstart;
drag;
dragend;
zoomstart;
zoomend;
zoomlevelschange;
resize;
autopanstart;
layeradd;
layerremove;
baselayerchange;
overlayadd;
overlayremove;
locationfound;
locationerror;
popupopen;
popupclose;
*/


/* Methods */

map.setView;
map.setZoom;
map.zoomIn;
map.zoomOut;
map.setZoomAround;
map.fitBounds;
map.fitWorld;
map.panTo;
map.panInsideBounds;
map.panBy;
map.invalidateSize;
map.setMaxBounds;
map.locate;
map.stopLocate;
map.remove;

map.getCenter;
map.getZoom;
map.getMinZoom;
map.getMaxZoom;
map.getBounds;
map.getBoundsZoom;
map.getSize;
map.getPixelBounds;
map.getPixelOrigin;

map.addLayer;
map.removeLayer;
map.hasLayer;
map.map.openPopup;
map.openPopup;
map.closePopup;
map.addControl;
map.removeControl;

map.latLngToLayerPoint;
map.layerPointToLatLng;
map.containerPointToLayerPoint;
map.layerPointToContainerPoint;
map.latLngToContainerPoint;
map.containerPointToLatLng;
map.project;
map.unproject;
map.mouseEventToContainerPoint;
map.mouseEventToLayerPoint;
map.mouseEventToLatLng;

map.watch;
map.setView;
map.maxZoom;
map.timeout;
map.maximumAge;
map.enableHighAccuracy;

map.reset;
map.pan;
map.zoom;
map.animate;

map.animate;
map.duration;
map.easeLinearity;
map.noMoveStart;

map.animate;

map.paddingTopLeft;
map.paddingBottomRight;
map.padding;


/* Properties */

map.dragging;
map.touchZoom;
map.doubleClickZoom;
map.scrollWheelZoom;
map.boxZoom;
map.keyboard;
map.tap;
map.zoomControl;
map.attributionControl;


/* Map Panes */

map.mapPane;
map.tilePane;
map.objectsPane;
map.shadowPane;
map.overlayPane;
map.markerPane;
map.popupPane;




/**
 *  L.Marker
**/


L.Marker;
L.marker;


/* Options */

options.icon;
options.clickable;
options.draggable;
options.keyboard;
options.title;
options.zIndexOffset;
options.opacity;
options.riseOnHover;
options.riseOffset;


/* Events */

/*
click;
dblclick;
mousedown;
mouseover;
mouseout;
contextmenu;
dragstart;
drag;
dragend;
move;
remove;
popupopen;
popupclose;
*/


/* Methods */

marker.addTo;
marker.getLatLng;
marker.setLatLng;
marker.setIcon;
marker.setZIndexOffset;
marker.setOpacity;
marker.update;
marker.bindPopup;
marker.unbindPopup;
marker.openPopup;
marker.closePopup;
marker.togglePopup;
marker.setPopupContent;
marker.toGeoJSON;

/* Interaction handlers */

marker.dragging;




/**
 *  L.Popup
**/


L.Popup;
L.popup;


/* Options */

options.maxWidth;
options.minWidth;
options.maxHeight;
options.autoPan;
options.keepInView;
options.closeButton;
options.offset;
options.autoPanPadding;
options.zoomAnimation;
options.closeOnClick;


/* Methods */

popup.addTo;
popup.openOn;
popup.setLatLng;
popup.setContent;




/**
 *  L.TileLayer
**/


L.TileLayer;
L.tileLayer;


/* Options */

options.minZoom;
options.maxZoom;
options.tileSize;
options.subdomains;
options.errorTileUrl;
options.attribution;
options.tms;
options.continuousWorld;
options.noWrap;
options.zoomOffset;
options.zoomReverse;
options.opacity;
options.zIndex;
options.unloadInvisibleTiles;
options.updateWhenIdle;
options.detectRetina;
options.reuseTiles;


/* Events */

/*
loading;
load;
tileload;
tileunload;
*/


/* Methods */

tileLayer.addTo;
tileLayer.bringToFront;
tileLayer.bringToBack;
tileLayer.setOpacity;
tileLayer.setZIndex;
tileLayer.redraw;
tileLayer.setUrl;
tileLayer.getContainer;




/**
 *  L.TileLayer.WMS
**/


L.TileLayer.WMS;
L.tileLayer.wms;


/* Options */

tileLayer.wms.options.layers;
tileLayer.wms.options.styles;
tileLayer.wms.options.format;
tileLayer.wms.options.transparent;
tileLayer.wms.options.version;
tileLayer.wms.options.crs;


/* Methods */

tileLayer.wms.setParams;




/**
 *  L.TileLayer.Canvas
**/


L.TileLayer.Canvas;
L.tileLayer.canvas;


/* Options */

options.async;


/* Methods */

tileLayer.canvas.drawTile;
tileLayer.canvas.tileDrawn;




/**
 *  L.ImageOverlay
**/


L.ImageOverlay;
L.imageOverlay;


/* Options */

options.opacity;


/* Methods */

imageOverlay.addTo;
imageOverlay.setOpacity;
imageOverlay.bringToFront;
imageOverlay.bringToBack;




/**
 *  L.Path
**/


L.Path;


/* Options */

options.stroke;
options.color;
options.weight;
options.opacity;
options.fill;
options.fillColor;
options.fillOpacity;
options.dashArray;
options.clickable;
options.pointerEvents;


/* Events */

/*
click;
dblclick;
mousedown;
mouseover;
mouseout;
contextmenu;
add;
remove;
popupopen;
popupclose;
*/


/* Methods */

path.addTo;
path.bindPopup;
path.bindPopup;
path.unbindPopup;
path.openPopup;
path.closePopup;
path.setStyle;
path.getBounds;
path.bringToFront;
path.bringToBack;
path.redraw;


/* Static properties */

path.SVG;
path.VML;
path.CANVAS;
path.CLIP_PADDING;




/**
 *  L.Polyline
**/


L.Polyline;
L.polyline;


/* Options */

options.smoothFactor;
options.noClip;


/* Methods */

polyline.addLatLng;
polyline.setLatLngs;
polyline.getLatLngs;
polyline.spliceLatLngs;
polyline.getBounds;
polyline.toGeoJSON;




/**
 *  L.MultiPolyline
**/


L.MultiPolyline;
L.multiPolyline;


/* Methods */

multiPolyline.setLatLngs;
multiPolyline.getLatLngs;
multiPolyline.toGeoJSON;




/**
 *  L.Polygon
**/


L.Polygon;
L.polygon;


/* Methods */

polygon.toGeoJSON;




/**
 *  L.MultiPolygon
**/


L.MultiPolygon;
L.multiPolygon;


/* Methods */

multiPolygon.setLatLngs;
multiPolygon.getLatLngs;
multiPolygon.toGeoJSON;




/**
 *  L.Rectangle
**/


L.Rectangle;
L.rectangle;


/* Methods */

rectangle.setBounds;




/**
 *  L.Circle
**/


L.Circle;
L.circle;


/* Methods */

circle.getLatLng;
circle.getRadius;
circle.setLatLng;
circle.setRadius;
circle.toGeoJSON;




/**
 *  L.CircleMarker
**/


L.CircleMarker;
L.circleMarker;


/* Methods */

circleMarker.setLatLng;
circleMarker.setRadius;
circleMarker.toGeoJSON;




/**
 *  L.LayerGroup
**/


L.LayerGroup;
L.layerGroup;


/* Methods */

layerGroup.addTo;
layerGroup.addLayer;
layerGroup.removeLayer;
layerGroup.removeLayer;
layerGroup.hasLayer;
layerGroup.getLayer;
layerGroup.getLayers;
layerGroup.clearLayers;
layerGroup.eachLayer;
layerGroup.toGeoJSON;




/**
 *  L.FeatureGroup
**/


L.FeatureGroup;
L.featureGroup;


/* Methods */

featureGroup.bindPopup;
featureGroup.getBounds;
featureGroup.setStyle;
featureGroup.bringToFront;
featureGroup.bringToBack;


/* Events */

/*
click;
dblclick;
mouseover;
mouseout;
mousemove;
contextmenu;
layeradd;
layerremove;
*/




/**
 *  L.GeoJSON
**/


L.GeoJSON;
L.geoJson;


/* Options */

options.pointToLayer;
options.style;
options.onEachFeature;
options.filter;
options.coordsToLatLng;


/* Methods */

geoJson.addData;
geoJson.setStyle;
geoJson.resetStyle;

geoJson.geometryToLayer;
geoJson.coordsToLatlng;
geoJson.coordsToLatlngs;




/**
 *  L.LatLng
**/


L.LatLng;
L.latLng;


/* Properties */

latLng.lat;
latLng.lng;

/* Methods */

latLng.distanceTo;
latLng.equals;
latLng.toString;
latLng.wrap;


/* Constants */

latLng.DEG_TO_RAD;
latLng.RAD_TO_DEG;
latLng.MAX_MARGIN;




/**
 *  L.LatLngBounds
**/


L.LatLngBounds;
L.latLngBounds;


/* Methods */

latLngBounds.extend;
latLngBounds.getSouthWest;
latLngBounds.getNorthEast;
latLngBounds.getNorthWest;
latLngBounds.getSouthEast;
latLngBounds.getWest;
latLngBounds.getSouth;
latLngBounds.getEast;
latLngBounds.getNorth;
latLngBounds.getCenter;
latLngBounds.contains;
latLngBounds.contains;
latLngBounds.intersects;
latLngBounds.equals;
latLngBounds.toBBoxString;
latLngBounds.pad;
latLngBounds.isValid;




/**
 *  L.Point
**/


L.Point;
L.point;


/* Properties */

point.x;
point.y;


/* Methods */

point.add;
point.subtract;
point.multiplyBy;
point.divideBy;
point.distanceTo;
point.clone;
point.round;
point.equals;
point.toString;




/**
 *  L.Bounds
**/


L.Bounds;
L.bounds;


/* Properties */

bounds.min;
bounds.max;


/* Methods */

bounds.extend;
bounds.getCenter;
bounds.contains;
bounds.contains;
bounds.intersects;
bounds.isValid;
bounds.getSize;




/**
 *  L.Icon
**/


L.Icon;
L.icon;


/* Options */

options.iconUrl;
options.iconRetinaUrl;
options.iconSize;
options.iconAnchor;
options.shadowUrl;
options.shadowRetinaUrl;
options.shadowSize;
options.shadowAnchor;
options.popupAnchor;
options.className;




/**
 *  L.DivIcon
**/


L.DivIcon;
L.divIcon;


/* Options */

options.iconSize;
options.iconAnchor;
options.className;
options.html;




/**
 *  L.Control
**/


L.Control;
L.control;


/* Options */

options.position;


/* Methods */

control.setPosition;
control.getPosition;
control.addTo;
control.removeFrom;
control.getContainer;


/* Control Positions */

/*
topleft;
topright;
bottomleft;
bottomright;
*/




/**
 *  L.Control.Zoom
**/


L.Control.Zoom;
L.control.zoom;


/* Options */

options.position;




/**
 *  L.Control.Attribution
**/


L.Control.Attribution;
L.control.attribution;


/* Options */

options.position;
options.prefix;


/* Methods */

control.attribution.setPrefix;
control.attribution.addAttribution;
control.attribution.removeAttribution;




/**
 *  L.Control.Layers
**/


L.Control.Layers;
L.control.layers;


/* Methods */

control.layers.addBaseLayer;
control.layers.addOverlay;
control.layers.removeLayer;


/* Options */

options.position;
options.collapsed;
options.autoZIndex;


/* Events */

/*
baselayerchange;
overlayadd;
overlayremove;
*/




/**
 *  L.Control.Scale
**/


L.Control.Scale;
L.control.scale;


/* Options */

options.position;
options.maxWidth;
options.metric;
options.imperial;
options.updateWhenIdle;






/**
 *  Events methods
**/


/* Methods */

obj.addEventListener;
obj.addOneTimeEventListener;
obj.addEventListener;
obj.removeEventListener;
obj.removeEventListener;
obj.removeEventListener;
obj.hasEventListeners;
obj.fireEvent;
obj.cleanAllEventListeners;
obj.on;
obj.once;
obj.off;
obj.fire;




/**
 *  Event objects
**/


/* Event */

property.type;
property.target;


/* MouseEvent */

property.latlng;
property.layerPoint;
property.containerPoint;
property.originalEvent;


/* LocationEvent */

property.latlng;
property.bounds;
property.accuracy;
property.altitude;
property.altitudeAccuracy;
property.heading;
property.speed;
property.timestamp;


/* ErrorEvent */

property.message;
property.code;


/* LayerEvent */

property.layer;


/* LayersControlEvent */

property.layer;
property.name;


/* TileEvent */

property.tile;
property.url;


/* ResizeEvent */

property.oldSize;
property.newSize;


/* GeoJSON event */

property.layer;
property.properties;
property.geometryType;
property.id;


/* Popup event */

property.popup;




/**
 *  L.Class
**/


L.Class;


/* Constructor Hooks */

MyClass.addInitHook;




/**
 *  L.Browser
**/


L.Browser;


L.Browser.ie;
L.Browser.ie6;
L.Browser.ie7;
L.Browser.webkit;
L.Browser.webkit3d;
L.Browser.android;
L.Browser.android23;
L.Browser.mobile;
L.Browser.mobileWebkit;
L.Browser.mobileOpera;
L.Browser.touch;
L.Browser.msTouch;
L.Browser.retina;




/**
 *  L.Util
**/


L.Util;


/* Methods */

L.Util.extend;
L.Util.bind;
L.Util.stamp;
L.Util.limitExecByInterval;
L.Util.falseFn;
L.Util.formatNum;
L.Util.splitWords;
L.Util.setOptions;
L.Util.getParamString;
L.Util.template;
L.Util.isArray;
L.Util.trim;


/* Properties */

L.Util.emptyImageUrl;




/**
 *  L.Transformation
**/


L.Transformation;


/* Methods */

transformation.transform;
transformation.untransform;




/**
 *  L.LineUtil
**/


L.LineUtil;


/* Methods */

L.LineUtil.simplify;
L.LineUtil.pointToSegmentDistance;
L.LineUtil.closestPointOnSegment;
L.LineUtil.clipSegment;




/**
 *  L.PolyUtil
**/


L.PolyUtil;


/* Methods */

L.PolyUtil.clipPolygon;




/**
 *  L.DomEvent
**/


L.DomEvent;


/* Methods */

L.DomEvent.addListener;
L.DomEvent.removeListener;
L.DomEvent.stopPropagation;
L.DomEvent.preventDefault;
L.DomEvent.stop;
L.DomEvent.disableClickPropagation;
L.DomEvent.getMousePosition;
L.DomEvent.getWheelDelta;




/**
 *  L.DomUtil
**/


L.DomUtil;


/* Methods */

L.DomUtil.get;
L.DomUtil.getStyle;
L.DomUtil.getViewportOffset;
L.DomUtil.create;
L.DomUtil.disableTextSelection;
L.DomUtil.enableTextSelection;
L.DomUtil.hasClass;
L.DomUtil.addClass;
L.DomUtil.removeClass;
L.DomUtil.setOpacity;
L.DomUtil.testProp;
L.DomUtil.getTranslateString;
L.DomUtil.getScaleString;
L.DomUtil.setPosition;
L.DomUtil.getPosition;


/* Properties */

L.DomUtil.TRANSITION;
L.DomUtil.TRANSFORM;




/**
 *  L.PosAnimation
**/


L.PosAnimation;


/* Methods */

animation.run;


/* Events */

/*
start;
step;
end;
*/




/**
 *  L.Draggable
**/


L.Draggable;


/* Events */

/*
dragstart;
predrag;
drag;
dragend;
*/


/* Methods */

draggable.enable;
draggable.disable;




/**
 *  IHandler
**/


IHandler;


/* Methods */

IHandler.enable;
IHandler.disable;
IHandler.enabled;




/**
 *  ILayer
**/


ILayer;


/* Methods */

ILayer.onAdd;
ILayer.onRemove;




/**
 *  IControl
**/


IControl;


/* Methods */

IControl.onAdd;
IControl.onRemove;




/**
 *  IProjection
**/


IProjection;


/* Methods */

IProjection.project;
IProjection.unproject;


/* Defined Projections */

L.Projection.SphericalMercator;
L.Projection.Mercator;
L.Projection.LonLat;




/**
 *  ICRS
**/


ICRS;


/* Methods */

ICRS.latLngToPoint;
ICRS.pointToLatLng;
ICRS.project;
ICRS.scale;


/* Properties */

ICRS.projection;
ICRS.transformation;
ICRS.code;


/* Defined CRS */

L.CRS.EPSG3857;
L.CRS.EPSG4326;
L.CRS.EPSG3395;
L.CRS.Simple;




/**
 *  Global Switches
**/


L_PREFER_CANVAS;
L_NO_TOUCH;
L_DISABLE_3D;




/**
 *  L.noConflict
**/


L.noConflict;




/**
 *  L.version
**/


L.version;

