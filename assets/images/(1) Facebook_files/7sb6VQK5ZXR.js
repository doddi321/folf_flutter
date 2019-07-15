if (self.CavalryLogger) { CavalryLogger.start_js(["KJvN1"]); }

__d("CookieConsentBlacklistedHrefs",[],(function(a,b,c,d,e,f){e.exports={hrefs:["/about/basics","/privacy/explanation","/ads/settings","/help/111814505650678","/help/1561485474074139","/help/568137493302217","/help/769828729705201","/help/cookies","/policies/cookies","/policy/cookies"]}}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("CookieBannerComponent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BANNER:"banner",CLOSE_BUTTON:"close_button"})}),null);
__d("CookieConsentBlacklist",["CookieBannerComponent","CookieConsentBlacklistedHrefs","Parent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isBlacklisted:function(a){__p&&__p();a=a;if(!this.hasCookieBanner())return!0;var c=b("Parent").byAttribute(a,"data-cookiebanner");if(c){c=c.getAttribute("data-cookiebanner");switch(c){case b("CookieBannerComponent").CLOSE_BUTTON:return!1;case b("CookieBannerComponent").BANNER:return!0}}c=b("Parent").byAttribute(a,"data-nocookies");if(c)return!0;a.tagName.toLowerCase()!=="a"&&(a=b("Parent").byTag(a,"a"));if(a instanceof HTMLAnchorElement&&typeof a.href==="string"){c=a.href;for(var a=0;a<this.blacklistedHrefs.length;a++)if(c.indexOf(this.blacklistedHrefs[a])>-1)return!0}return!1},blacklistedHrefs:b("CookieConsentBlacklistedHrefs").hrefs,hasCookieBanner:function(){var a=document.querySelectorAll('[data-cookiebanner="'+b("CookieBannerComponent").BANNER+'"]');return a.length>0}};e.exports=a}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["Cookie","CookieConsent","CookieConsentBlacklist","SubscriptionList","XAsyncRequest","XConsentCookieController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,h,i){if(!b("CookieConsent").isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,i):b("Cookie").setWithoutChecks(a,c,d,e,i);return}if(g.has(a))return;g.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:i});h&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){g.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),b("CookieConsent").setConsented(),this.callbacks.fireCallbacks(),g=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){this.sentConsentToServer=!0;var a=b("XConsentCookieController").getURIBuilder().getURI();new(b("XAsyncRequest"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=this.baseInteractionHandler.bind(this),window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler))},registerCallbackOnCookieFlush:function(a){!b("CookieConsent").isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("CookieConsentBlacklist").isBlacklisted(c)||this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return b("CookieConsent").isCookiesBlocked()||b("CookieConsent").isDeferCookies()?!1:g.size===0}};e.exports=a}),null);
__d("XRefererFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/common/referer_frame.php",{})}),null);
__d("ControlledReferer",["Bootloader","DeferredCookie","URI","XRefererFrameController","isMessengerDotComURI","isOculusDotComURI","isWorkplaceDotComURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={useFacebookReferer:function(a,c,d){__p&&__p();if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("Bootloader").loadModules(["BanzaiODS"],function(a){a.bumpEntityKey(2966,"defer_cookies","block_controlled_referer_iframe")},"ControlledReferer");return}var e=!1;function f(){if(e)return;var b=a.contentWindow.location.pathname;if(b!=="/intern/common/referer_frame.php"&&b!=="/common/referer_frame.php")return;e=!0;a.contentWindow.document.body.style.margin=0;c()}var g;b("isMessengerDotComURI")(b("URI").getRequestURI())?g=b("XRefererFrameController").getURIBuilder().getURI().toString():b("isOculusDotComURI")(b("URI").getRequestURI())?g="/common/referer_frame.php":!b("lowerFacebookDomain").isValidDocumentDomain()?g="/intern/common/referer_frame.php":g=b("XRefererFrameController").getURIBuilder().getURI().toString();d==null&&b("isWorkplaceDotComURI")(b("URI").getRequestURI())&&(d="workplace");d&&(g+="?fb_source="+d);a.onload=f;a.src=g},useFacebookRefererHtml:function(a,b,c){g.useFacebookReferer(a,function(){a.contentWindow.document.body.innerHTML=b},c)}};e.exports=g}),null);
__d("TrackingPixel",["Arbiter","ControlledReferer","DeferredCookie","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g={_iframe:void 0,loadWithNoReferrer:function(a){__p&&__p();if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.",a);return}if(!g._iframe){var c=document.createElement("iframe");c.frameborder=0;c.width=c.height=1;c.style.position="absolute";c.style.top="-10px";b("ControlledReferer").useFacebookReferer(c,function(){b("Arbiter").inform("TrackingPixel/iframeIsLoaded",null,"persistent")},null);document.body.appendChild(c);g._iframe=c}b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded",function(){var b=g._iframe.contentWindow;b=new b.Image();b.src=a})}};e.exports=g}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){e.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("makeSUIFDSPrivateTheme",["SUITheme"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return new(b("SUITheme"))({id:a,components:c})}e.exports=a}),null);
__d("LitestandMessages",[],(function(a,b,c,d,e,f){a=Object.freeze({NEWSFEED_LOAD:"LitestandMessages/NewsFeedLoad",LEAVE_HOME:"LitestandMessages/LeaveHome",STORIES_REQUESTED:"LitestandMessages/StoriesRequested",STORIES_INSERTED:"LitestandMessages/StoriesInserted",NEWER_STORIES_REQUESTED:"LitestandMessages/NewerStoriesRequested",NEWER_STORIES_INSERTED:"LitestandMessages/NewerStoriesInserted",NEW_STORIES_CONTAINER_CREATED:"LitestandMessages/NewStoriesContainer",RHC_RELOADED:"LitestandMessages/RHCReloaded",STREAM_LOAD_ERROR:"LitestandMessages/StreamLoadError",DUPLICATE_CURSOR_ERROR:"LitestandMessages/DuplicateCursorError",STREAM_LOAD_RETRY:"LitestandMessages/StreamLoadRetry"});e.exports=a}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){__p&&__p();function g(a){a.nctr||(a.nctr={})}function h(a){__p&&__p();if(b("Env").module||!a)return b("Env").module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=h(b);b&&(g(a),a.nctr._mod=b)},addImpressionID:function(a){b("Env").impid&&(g(a),a.nctr._impid=b("Env").impid)}};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("isAdsExcelAddinURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)fbaddins\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}e.exports=a}),null);
__d("isValidURI",[],(function(a,b,c,d,e,f){var g=new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.includes(a.getProtocol())&&g.test(a.getDomain())}e.exports=a}),null);
__d("AsyncSignal",["Promise","ErrorUtils","QueryString","Run","TimeSlice","TrackingConfig","URI","ZeroRewrites","getAsyncParams","isAdsExcelAddinURI","isFacebookURI","isMessengerDotComURI","isValidURI","isWorkplaceDotComURI","memoize","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g;function a(a,c){this.data=c||{},this.uri=a.toString(),b("TrackingConfig").domain&&this.uri.charAt(0)=="/"&&(this.uri=b("TrackingConfig").domain+this.uri)}a.prototype.setHandler=function(a){this.handler=a;return this};a.prototype.setTimeout=function(a){this.timeout=a;return this};a.prototype.send=function(){b("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype._send=function(){__p&&__p();var a=this.handler,c=this.data;c.asyncSignal=(Math.random()*1e4|0)+1;var d=b("ZeroRewrites").rewriteURI(new(b("URI"))(this.uri));d=b("isFacebookURI")(d)||b("isMessengerDotComURI")(d)||b("isAdsExcelAddinURI")(d)||b("isWorkplaceDotComURI")(d)||b("isValidURI")(d);if(d)Object.assign(c,b("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var e=b("QueryString").appendToUrl(this.uri,c);g||(g=new(b("Promise"))(function(a){b("Run").onAfterLoad(a)}));d=g.then(function(){return new(b("Promise"))(function(a,b){var c=new Image();c.onload=a;c.onerror=c.onabort=b;c.src=e})});if(a){var f=!1,h=b("memoize")(function(){b("ErrorUtils").applyWithGuard(a,null,[f])});b("promiseDone")(d.then(function(){f=!0,h()},h));this.timeout&&setTimeout(h,this.timeout)}return this};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("tidyEvent",["Run"],(function(a,b,c,d,e,f){__p&&__p();var g=[];function h(){while(g.length){var a=g.shift();a.remove?a.remove():a.unsubscribe&&a.unsubscribe()}}function i(a){__p&&__p();var b,c=a;function d(){if(!b)return;b.apply(c,arguments);b=null;c=null}if(c&&c.remove)b=c.remove,c.remove=d;else{b=(a=c)==null?void 0:a.unsubscribe;c.unsubscribe=d}return c}function a(a){g.length||b("Run").onLeave(h);if(Array.isArray(a))for(var c=0;c<a.length;c++)a[c]&&g.push(i(a[c]));else a&&g.push(i(a));return a}e.exports=a}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};c._attachScrollListener=function(){if(this._listener)return;var a=this._layer.getContextScrollParent();this._listener=b("Event").listen(a,"scroll",this._layer.updatePosition.bind(this._layer))};c._removeScrollListener=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("PagesEventObserver",["Banzai"],(function(a,b,c,d,e,f){var g="pages_client_logging",h={VITAL_WAIT:b("Banzai").VITAL_WAIT,logData_DEPRECATED:function(a,c){c={delay:c||b("Banzai").VITAL_WAIT};b("Banzai").post(g,a,c)},notify:function(a,c,d,e,f){d=babelHelpers["extends"]({},d,{event_name:a,page_id:c,dedupe:e!==!1});a={delay:f||b("Banzai").VITAL_WAIT};b("Banzai").post(g,d,a)},registerLogOnClick:function(a,b,c){c===void 0&&(c=null),a.addEventListener("click",function(){c&&h.notify(c,b,null,null,null)})}};e.exports=h}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("coalesce",[],(function(a,b,c,d,e,f){function a(){for(var a=0;a<arguments.length;++a)if((a<0||arguments.length<=a?void 0:arguments[a])!=null)return a<0||arguments.length<=a?void 0:arguments[a];return null}e.exports=a}),null);
__d("PageLikeConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LIKED:"liked",UNLIKED:"unliked",LIKED_SUCCESS:"liked_success",SPM_CALLOUT:"spm_callout",LAZY_CLICK:"lazy_click"})}),null);
__d("Log",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={DEBUG:3,INFO:2,WARNING:1,ERROR:0};b=function(a,b,c){for(var d=arguments.length,e=new Array(d>3?d-3:0),f=3;f<d;f++)e[f-3]=arguments[f];var h=0,i=c.replace(/%s/g,function(){return String(e[h++])}),j=window.console;j&&g.level>=b&&j[a in j?a:"log"](i)};var g={level:-1,Level:a,debug:b.bind(null,"debug",a.DEBUG),info:b.bind(null,"info",a.INFO),warn:b.bind(null,"warn",a.WARNING),error:b.bind(null,"error",a.ERROR),log:b};e.exports=g}),null);
__d("generateLiteTypedLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";function a(a){return{log:function(c){b("Banzai").post(a,c,b("Banzai").BASIC)},logVital:function(c){b("Banzai").post(a,c,b("Banzai").VITAL)},logImmediately:function(c){b("Banzai").post(a,c,{signal:!0})}}}e.exports=a}),null);
__d("PerfXSharedFields",[],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==void 0&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=1e4;a={onQuicklingStart:function(){g=b("performanceAbsoluteNow")()},onQuicklingVersionMatch:function(){g=null},onQuicklingRefreshStart:function(){if(!b("QuicklingConfig").logRefreshOverhead||g===null)return;var a=b("WebStorage").getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",(b("performanceAbsoluteNow")()-g).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){__p&&__p();if(!b("QuicklingConfig").logRefreshOverhead)return null;var c=b("WebStorage").getSessionStorageForRead();if(!c)return null;var d=c.getItem("quickling_refresh_start");if(d==null)return null;if(a-parseInt(d,10)>h)return null;a=c.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=!!navigator.serviceWorker,h={},i=Object.freeze({name:"Facebook Payments",method:"basic-card",capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}}),j=Object.freeze({name:"Facebook Payments",method:self.location.origin,capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}});function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){__p&&__p();var c=this;if(h[a])return h[a];var d=k();h[a]=new(b("Promise"))(function(e,f){c.getWorkerRegistration(a).done(function(c){if(!c){var g=b("EventListener").listen(window,"message",function(a){a.data&&a.data.command&&a.data.command==="ServiceWorkerInstallError"&&f()});b("promiseDone")(b("Promise").resolve(d.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(d.ready),e)})}else e(c),b("BrowserPaymentHandlerConfig").enabled&&c.paymentManager&&c.paymentManager.instruments&&(c.paymentManager.instruments.set("Facebook",j),c.paymentManager.instruments.set("FacebookBasicCard",i))})});h[a].done(function(){h[a]=null});return h[a]},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var c=k();return b("Promise").resolve(c.getRegistration(a))},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l}),null);
__d("str2rstr",[],(function(a,b,c,d,e,f){function a(a){var b="",c,d;for(var e=0;e<a.length;e++)c=a.charCodeAt(e),d=e+1<a.length?a.charCodeAt(e+1):0,55296<=c&&c<=56319&&56320<=d&&d<=57343&&(c=65536+((c&1023)<<10)+(d&1023),e++),c<=127?b+=String.fromCharCode(c):c<=2047?b+=String.fromCharCode(192|c>>>6&31,128|c&63):c<=65535?b+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):c<=2097151&&(b+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return b}e.exports=a}),null);
__d("md5",["str2rstr"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b){__p&&__p();var c=a[0],d=a[1],e=a[2],f=a[3];c=i(c,d,e,f,b[0],7,-680876936);f=i(f,c,d,e,b[1],12,-389564586);e=i(e,f,c,d,b[2],17,606105819);d=i(d,e,f,c,b[3],22,-1044525330);c=i(c,d,e,f,b[4],7,-176418897);f=i(f,c,d,e,b[5],12,1200080426);e=i(e,f,c,d,b[6],17,-1473231341);d=i(d,e,f,c,b[7],22,-45705983);c=i(c,d,e,f,b[8],7,1770035416);f=i(f,c,d,e,b[9],12,-1958414417);e=i(e,f,c,d,b[10],17,-42063);d=i(d,e,f,c,b[11],22,-1990404162);c=i(c,d,e,f,b[12],7,1804603682);f=i(f,c,d,e,b[13],12,-40341101);e=i(e,f,c,d,b[14],17,-1502002290);d=i(d,e,f,c,b[15],22,1236535329);c=j(c,d,e,f,b[1],5,-165796510);f=j(f,c,d,e,b[6],9,-1069501632);e=j(e,f,c,d,b[11],14,643717713);d=j(d,e,f,c,b[0],20,-373897302);c=j(c,d,e,f,b[5],5,-701558691);f=j(f,c,d,e,b[10],9,38016083);e=j(e,f,c,d,b[15],14,-660478335);d=j(d,e,f,c,b[4],20,-405537848);c=j(c,d,e,f,b[9],5,568446438);f=j(f,c,d,e,b[14],9,-1019803690);e=j(e,f,c,d,b[3],14,-187363961);d=j(d,e,f,c,b[8],20,1163531501);c=j(c,d,e,f,b[13],5,-1444681467);f=j(f,c,d,e,b[2],9,-51403784);e=j(e,f,c,d,b[7],14,1735328473);d=j(d,e,f,c,b[12],20,-1926607734);c=k(c,d,e,f,b[5],4,-378558);f=k(f,c,d,e,b[8],11,-2022574463);e=k(e,f,c,d,b[11],16,1839030562);d=k(d,e,f,c,b[14],23,-35309556);c=k(c,d,e,f,b[1],4,-1530992060);f=k(f,c,d,e,b[4],11,1272893353);e=k(e,f,c,d,b[7],16,-155497632);d=k(d,e,f,c,b[10],23,-1094730640);c=k(c,d,e,f,b[13],4,681279174);f=k(f,c,d,e,b[0],11,-358537222);e=k(e,f,c,d,b[3],16,-722521979);d=k(d,e,f,c,b[6],23,76029189);c=k(c,d,e,f,b[9],4,-640364487);f=k(f,c,d,e,b[12],11,-421815835);e=k(e,f,c,d,b[15],16,530742520);d=k(d,e,f,c,b[2],23,-995338651);c=l(c,d,e,f,b[0],6,-198630844);f=l(f,c,d,e,b[7],10,1126891415);e=l(e,f,c,d,b[14],15,-1416354905);d=l(d,e,f,c,b[5],21,-57434055);c=l(c,d,e,f,b[12],6,1700485571);f=l(f,c,d,e,b[3],10,-1894986606);e=l(e,f,c,d,b[10],15,-1051523);d=l(d,e,f,c,b[1],21,-2054922799);c=l(c,d,e,f,b[8],6,1873313359);f=l(f,c,d,e,b[15],10,-30611744);e=l(e,f,c,d,b[6],15,-1560198380);d=l(d,e,f,c,b[13],21,1309151649);c=l(c,d,e,f,b[4],6,-145523070);f=l(f,c,d,e,b[11],10,-1120210379);e=l(e,f,c,d,b[2],15,718787259);d=l(d,e,f,c,b[9],21,-343485551);a[0]=r(c,a[0]);a[1]=r(d,a[1]);a[2]=r(e,a[2]);a[3]=r(f,a[3])}function h(a,b,c,d,e,f){b=r(r(b,a),r(d,f));return r(b<<e|b>>>32-e,c)}function i(a,b,c,d,e,f,g){return h(b&c|~b&d,a,b,e,f,g)}function j(a,b,c,d,e,f,g){return h(b&d|c&~d,a,b,e,f,g)}function k(a,b,c,d,e,f,g){return h(b^c^d,a,b,e,f,g)}function l(a,b,c,d,e,f,g){return h(c^(b|~d),a,b,e,f,g)}function m(a){__p&&__p();var b=a.length,c=[1732584193,-271733879,-1732584194,271733878],d;for(d=64;d<=a.length;d+=64)g(c,n(a.substring(d-64,d)));a=a.substring(d-64);var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<a.length;d++)e[d>>2]|=a.charCodeAt(d)<<((d&3)<<3);e[d>>2]|=128<<((d&3)<<3);if(d>55){g(c,e);for(d=0;d<16;d++)e[d]=0}e[14]=b*8;g(c,e);return c}function n(a){var b=[],c=0;while(c<64)b[c>>2]=a.charCodeAt(c++)|a.charCodeAt(c++)<<8|a.charCodeAt(c++)<<16|a.charCodeAt(c++)<<24;return b}var o="0123456789abcdef".split("");function p(a){var b="",c=0;for(;c<4;c++)b+=o[a>>(c<<3)+4&15]+o[a>>(c<<3)&15];return b}function q(a){var b=[];for(var c=0;c<a.length;c++)b[c]=p(a[c]);return b.join("")}var r=function(a,b){return a+b&4294967295};function a(a){if(a==null)return null;for(var c=0;c<a.length;c++)if(a[c]>"\x7f"){a=b("str2rstr")(a);break}a=String(a);return q(m(a))}a("hello")!="5d41402abc4b2a76b9719d911017c592"&&(r=function(a,b){var c=(a&65535)+(b&65535);a=(a>>16)+(b>>16)+(c>>16);return a<<16|c&65535});e.exports=a}),null);