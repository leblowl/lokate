// Compiled by ClojureScript 0.0-2371
goog.provide('hivez.dev');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('weasel.repl');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('hivez.navigation');
goog.require('hivez.navigation');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return hivez.navigation.render.call(null);
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
hivez.navigation.render.call(null);

//# sourceMappingURL=dev.js.map