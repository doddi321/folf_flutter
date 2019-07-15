if (self.CavalryLogger) { CavalryLogger.start_js(["M4Cg0"]); }

__d("WorkGalahadBadgingDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.dispatch=c.dispatch.bind(babelHelpers.assertThisInitialized(c)),b)||babelHelpers.assertThisInitialized(c)}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("WorkGalahadBadgingActions",["WorkGalahadBadgingDispatcher","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){b("setImmediateAcrossTransitions")(function(){b("WorkGalahadBadgingDispatcher").dispatch({type:"update_badge_count",section:a,count:c})})};e.exports={updateCount:a}}),null);
__d("WorkGalahadDirectDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.dispatch=c.dispatch.bind(babelHelpers.assertThisInitialized(c)),b)||babelHelpers.assertThisInitialized(c)}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("WorkGalahadDirectActions",["WorkGalahadDirectDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){b("WorkGalahadDirectDispatcher").dispatch({type:"initialise",unreadDirectStories:a})};c=function(a,c){b("WorkGalahadDirectDispatcher").dispatch({type:"updateStory",storyID:a,isUnread:c})};e.exports={initialise:a,updateStory:c}}),null);
__d("WorkGalahadDirectStore",["FluxReduceStore","WorkGalahadDirectDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({unreadDirectStories:b("immutable").Set()}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new g()};d.reduce=function(a,c){switch(c.type){case"initialise":return a.set("unreadDirectStories",b("immutable").Set(c.unreadDirectStories));case"updateStory":if(c.isUnread)return a.set("unreadDirectStories",a.unreadDirectStories.add(c.storyID));else return a.set("unreadDirectStories",a.unreadDirectStories["delete"](c.storyID));default:return a}};d.getUnreadCount=function(){return this.getState().unreadDirectStories.size};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDirectDispatcher"))}),null);
__d("WorkGalahadBadging",["NotificationConstants","NotificationSeenState","NotificationUpdates","SubscriptionsHandler","WorkGalahadAppTabID","WorkGalahadBadgingActions","WorkGalahadDirectActions","WorkGalahadDirectStore","WorkGalahadNavStore","createObjectFrom","GlobalNotificationSubscriptionsSubscription","GlobalNotificationSyncSubscription"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("NotificationConstants").PayloadSourceType,h=0,i=new(b("SubscriptionsHandler"))();function a(a){a.onLoaded(function(a){a=a.unseenNotifs;return j(a)})}function j(a){b("GlobalNotificationSubscriptionsSubscription");b("GlobalNotificationSyncSubscription");b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(a,h)});a=function(){return b("WorkGalahadBadgingActions").updateCount(b("WorkGalahadAppTabID").NOTIFICATIONS,b("NotificationSeenState").getUnseenCount())};a();i.addSubscriptions(b("NotificationUpdates").subscribe("seen-state-updated",a))}function c(a){b("WorkGalahadDirectActions").initialise(a);a=function(){if(b("WorkGalahadNavStore").getSelectedAppTabID()==b("WorkGalahadAppTabID").DIRECT)return;b("WorkGalahadBadgingActions").updateCount(b("WorkGalahadAppTabID").DIRECT,b("WorkGalahadDirectStore").getUnreadCount())};a();i.addSubscriptions(b("WorkGalahadDirectStore").addListener(a))}e.exports={asyncInitNotifications:a,initNotifications:j,initDirect:c}}),null);
__d("WorkGalahadSearch",[],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=null;function a(a){h=a}function b(a){g=a}function c(){return g}function d(){return h}e.exports={setSearchContent:b,getSearchContent:c,setSearchRoot:a,getSearchRoot:d}}),null);
__d("WorkGalahadBadgingStore",["FluxReduceStore","WorkGalahadBadgingDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({badgeCounts:b("immutable").Map()}));function h(a){return a.get("badgeCounts").reduce(function(a,b){return a+b},0)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new g()};c.reduce=function(a,b){switch(b.type){case"update_badge_count":b=a.set("badgeCounts",a.badgeCounts.set(b.section,b.count));return b;default:return a}};c.getTotalBadgeCount=function(){return h(this.getState())};c.getBadgeCount=function(a){return(a=this.getState().badgeCounts.get(a))!=null?a:0};c.getBadgeCounts=function(){return this.getState().badgeCounts};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadBadgingDispatcher"))}),null);
__d("WorkGalahadChatChannelStore",["FluxReduceStore","MercuryFilters.bs","MessagingTag","WorkGalahadDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({filter:b("MercuryFilters.bs").all,folder:b("MessagingTag").INBOX}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new g()};c.getFolder=function(){return this.getState().folder};c.getFilter=function(){return this.getState().filter};c.reduce=function(a,b){switch(b.type){case"galahad/chat_change_folder":return a.set("folder",b.folder);case"galahad/chat_change_filter":return a.set("filter",b.filter);default:return a}};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDispatcher"))}),null);
__d("WorkGalahadLocalUISettingsDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.dispatch=c.dispatch.bind(babelHelpers.assertThisInitialized(c)),b)||babelHelpers.assertThisInitialized(c)}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("WorkGalahadLocalUISettingsStore",["FluxReduceStore","WorkGalahadLocalUISettingsDispatcher","WorkGalahadLocalUISettingsHelper","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({rhc:{collapsed:b("WorkGalahadLocalUISettingsHelper").getRhcCollapsedStateFromStorage()},notifications:{filter:b("WorkGalahadLocalUISettingsHelper").getNotificationsFilterFromStorage()},pop_ups:{turned_off:!1}}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new g()};d.reduce=function(a,c){switch(c.type){case"rhc/set_collapsed":var d;b("WorkGalahadLocalUISettingsHelper").saveRhcCollapsedStateToStorage(c.sidebarType,c.collapsed);return a.set("rhc",babelHelpers["extends"]({},a.rhc,{collapsed:babelHelpers["extends"]({},a.rhc.collapsed,(d={},d[c.sidebarType]=c.collapsed,d))}));case"notifications/set_filter":b("WorkGalahadLocalUISettingsHelper").saveNotificationsFilterToStorage(c.filter);return a.set("notifications",babelHelpers["extends"]({},a.notifications,{filter:c.filter}));case"pop_ups/set_turned_off":return a.set("pop_ups",babelHelpers["extends"]({},a.pop_ups,{turned_off:c.turned_off}));default:return a}};d.getRhcCollapsed=function(a){return this.getState().rhc.collapsed[a]===!0};d.getNotificationsFilter=function(){return this.getState().notifications.filter};d.getPopUpsTurnedOff=function(){return this.getState().pop_ups.turned_off};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadLocalUISettingsDispatcher"))}),null);
__d("WorkGalahadLocalUISettingsActions",["WorkGalahadLocalUISettingsDispatcher"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("WorkGalahadLocalUISettingsDispatcher").dispatch({type:"rhc/set_collapsed",sidebarType:a,collapsed:c})}function c(a){b("WorkGalahadLocalUISettingsDispatcher").dispatch({type:"notifications/set_filter",filter:a})}function d(a){b("WorkGalahadLocalUISettingsDispatcher").dispatch({type:"pop_ups/set_turned_off",turned_off:a})}e.exports={setRhcCollapsed:a,setNotificationsFilter:c,setPopUpsTurnedOff:d}}),null);
__d("WorkGalahadNotificationsFilters",["keyMirror"],(function(a,b,c,d,e,f){a=b("keyMirror")({ALL:null,UNREAD:null,CONVERSATIONS:null,PINNED_GROUPS:null});e.exports=a}),null);
__d("WorkGalahadLocalUISettingsHelper",["FluxHooks","React","WebStorage","WorkGalahadLayoutUtils","WorkGalahadLocalUISettingsActions","WorkGalahadLocalUISettingsStore","WorkGalahadNavStore","WorkGalahadNotificationsFilters","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FluxHooks").useFluxStore,h=b("React").useCallback,i=b("WorkGalahadLayoutUtils").SidebarType,j="galahadSidebarToggle",k="collapsed",l="expanded",m="galahadNotificationFilter";function n(a){return j+"/"+a}function o(){return b("WorkGalahadNavStore").getActiveEntityKeys()}function p(){return b("WorkGalahadLocalUISettingsStore").getNotificationsFilter()}a={useRhcCollapsedState:function(){var a=g(b("WorkGalahadNavStore"),o),c=b("WorkGalahadLayoutUtils").getSidebarType(a);a=h(function(){return c!=null?b("WorkGalahadLocalUISettingsStore").getRhcCollapsed(c):!0},[c]);a=g(b("WorkGalahadLocalUISettingsStore"),a);var d=h(function(a){c!=null&&b("WorkGalahadLocalUISettingsActions").setRhcCollapsed(c,a)},[c]);return[a,d]},getRhcCollapsedStateFromStorage:function(){var a=b("WebStorage").getSessionStorageForRead();return b("mapObject")(i,function(b){return a!=null?a.getItem(n(b))===k:!1})},saveRhcCollapsedStateToStorage:function(a,c){b("WebStorage").setItemGuarded(b("WebStorage").getSessionStorage(),n(a),c?k:l)},useNotificationFilterState:function(){var a=g(b("WorkGalahadLocalUISettingsStore"),p);return[a,function(a){b("WorkGalahadLocalUISettingsActions").setNotificationsFilter(a)}]},getNotificationsFilterFromStorage:function(){var a=b("WebStorage").getLocalStorageForRead();if(a){a=a.getItem(m);if(a!=null&&b("WorkGalahadNotificationsFilters")[a]!=null)return b("WorkGalahadNotificationsFilters")[a]}return b("WorkGalahadNotificationsFilters").ALL},saveNotificationsFilterToStorage:function(a){b("WebStorage").setItemGuarded(b("WebStorage").getLocalStorage(),m,a)}};e.exports=a}),null);
__d("WorkGalahadQuickChatStore",["FluxReduceStore","WorkGalahadDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({threadID:null,composing:!1,showInbox:!1}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new g()};c.reduce=function(a,b){switch(b.type){case"quickChat/hide":return a.set("composing",!1).set("showInbox",!1).set("threadID",null);case"quickChat/showCompose":return a.set("composing",!0);case"quickChat/showInbox":return a.set("showInbox",!0).set("composing",!1).set("threadID",null);case"quickChat/hideInbox":return a.set("showInbox",!1);case"quickChat/close":return a.set("threadID",null);case"quickChat/openThreadID":return a.set("threadID",b.threadID).set("showInbox",!1);default:return a}};c.getActiveThreadID=function(){return this.getState().threadID};c.isShowingConversation=function(){return this.getState().threadID!=null};c.isComposing=function(){return this.getState().composing};c.isShowingInbox=function(){return this.getState().showInbox};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDispatcher"))}),null);
__d("WorkGalahadSERPHeaderStore",["FluxReduceStore","WorkGalahadDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({tabs:[],title:null}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new g()};c.reduce=function(a,b){switch(b.type){case"galahad/setSERPHeaderData":return a.set("tabs",b.tabs).set("title",b.title);default:return a}};c.getTabs=function(){return this.getState().tabs};c.getTitle=function(){return this.getState().title};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDispatcher"))}),null);
__d("WorkGalahadSearchStore",["FluxReduceStore","WorkGalahadDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({typeaheadListProps:null,query:null}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new g()};c.reduce=function(a,b){switch(b.type){case"galahad/setTypeaheadListProps":return a.set("typeaheadListProps",b.listProps);case"galahad/setQuery":return a.set("query",b.query);default:return a}};c.getTypeaheadListProps=function(){return this.getState().typeaheadListProps};c.getQuery=function(){return this.getState().query};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDispatcher"))}),null);
__d("WorkGalahadFluxEnv",["invariant","WorkGalahadBadging","WorkGalahadBadgingDispatcher","WorkGalahadBadgingStore","WorkGalahadBeeperActions","WorkGalahadBeeperDispatcher","WorkGalahadBeeperStore","WorkGalahadChatChannelStore","WorkGalahadDirectDispatcher","WorkGalahadDirectStore","WorkGalahadDispatcher","WorkGalahadLocalUISettingsDispatcher","WorkGalahadLocalUISettingsStore","WorkGalahadNavActions","WorkGalahadNavStore","WorkGalahadQuickChatStore","WorkGalahadSearchStore","WorkGalahadSERPHeaderStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(){b("WorkGalahadDispatcher").explicitlyRegisterStores([b("WorkGalahadChatChannelStore"),b("WorkGalahadNavStore"),b("WorkGalahadSearchStore"),b("WorkGalahadQuickChatStore"),b("WorkGalahadSERPHeaderStore")]),b("WorkGalahadBeeperDispatcher").explicitlyRegisterStores([b("WorkGalahadBeeperStore")]),b("WorkGalahadBadgingDispatcher").explicitlyRegisterStores([b("WorkGalahadBadgingStore")]),b("WorkGalahadLocalUISettingsDispatcher").explicitlyRegisterStores([b("WorkGalahadLocalUISettingsStore")]),b("WorkGalahadDirectDispatcher").explicitlyRegisterStores([b("WorkGalahadDirectStore")])}function i(a){var c=a.defaultAppTabID,d=a.entityKeys,e=a.unseenNotifs,f=a.unseenNotifsPreloader,g=a.unreadDirectStories;a=a.beeperConfig;b("WorkGalahadNavActions").setActiveEntityKeys(d);b("WorkGalahadNavActions").selectAppTabID(c);e!=null?b("WorkGalahadBadging").initNotifications(e):f!=null&&b("WorkGalahadBadging").asyncInitNotifications(f);b("WorkGalahadBadging").initDirect(g);b("WorkGalahadBeeperActions").setSoundEnabled(a.soundEnabled);b("WorkGalahadBeeperActions").setSoundPath(a.soundPath)}var j=[],k=!1;function l(){while(j.length>0){var a=j.shift();a()}}e.exports={init:function(a){k&&g(0,11757),k=!0,h(),i(a),l()},queueEvent:function(a){!k?j.push(a):a()}}}),null);
__d("WorkGalahadSearchTypeaheadView",["Arbiter","Event","FacebarTypeaheadView","WorkGalahadFluxEnv","WorkGalahadNavActions","WorkGalahadSearch","WorkGalahadSearchActions","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;e.visible=!1;e.index=0;b("Arbiter").subscribe("WorkGalahadTypeahead/metaClicked",function(){e.logMetaSelected()});return e}var d=c.prototype;d.show=function(){var a=this;this.visible=!0;b("WorkGalahadNavActions").showSearchOverlay();this.element=b("WorkGalahadSearch").getSearchRoot();this.content=b("WorkGalahadSearch").getSearchContent();this.renderList();this.mousedownHandler=b("Event").listen(this.element,"mousedown",function(b){return a.mousedownSubscriptions.fireCallbacks(b)})};d.getDefaultIndex=function(){return 0};d.renderTypeaheadList=function(){};d.first=function(){this.index=0,this.highlight(this.index)};d.setLoading=function(a){this.loading!==a&&(this.loading=a,this.renderList())};d.hide=function(){b("WorkGalahadNavActions").hideSearchOverlay(),this.mousedownHandler&&this.mousedownHandler.remove(),this.mousedownHandler=null};d.highlight=function(a,b){a>this.results.length-1?a=0:a<0&&(a=this.results.length-1),this.index=a,b!=!1&&this.inform("highlight",{index:a,selected:this.results[a]}),this.visible&&this.renderList()};d.buildListProps=function(){return{isGalahadSearch:!0,results:this.results,listProps:{results:this.results,loading:this.loading,highlightedResult:this.results[this.index],controlledHighlight:!0},keywordResults:this.keywordResults,entityResults:this.entityResults,seeMoreResult:this.seeMoreResult,isNullState:this.isNullState(),accessibilityElement:this.accessibilityElement,onClearHighlight:this.handleClearHighlight,onHighlight:this.handleHighlight,onRender:this.handleRender,onSelect:this.handleSelect}};d.renderList=function(){var a=this,c=b("WorkGalahadSearch").getSearchContent();c!=null&&b("WorkGalahadFluxEnv").queueEvent(function(){return b("WorkGalahadSearchActions").setTypeaheadListProps(a.buildListProps())})};d.render=function(a,c,d){b("gkx")("915157")&&this.inform("filter",{results:c,value:a});this.value=a;d=c.some(function(a){return a.isSingleState});this.inform("beforeRender",{results:c,value:a});this.buildResultsData(c,d);this.visible&&this.renderList();this.inform("render",this.results)};d.logMetaSelected=function(){var a=this.index,b=this.results[a],c=this.element.getAttribute("id");b&&this.inform("select",{index:a,clicked:!0,selected:b,id:c,query:this.value,element:this.selected,skipExecuteQuery:!0})};return c}(b("FacebarTypeaheadView"));e.exports=a}),null);