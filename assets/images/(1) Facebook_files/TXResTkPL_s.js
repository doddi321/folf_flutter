if (self.CavalryLogger) { CavalryLogger.start_js(["nMpyf"]); }

__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_ALL:"photos_all",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",SUPPORTERS:"supporters",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TIMELINE:"timeline",TRIBUTES:"tributes",TIMELINE_OVERVIEW:"grid",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_FOOD_DRINK_PAST_ORDERS:"food_drink_past_orders",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",PAGE_COLLECTIONS:"collections",PAGE_SERIES:"series",CAST_AND_CREW:"cast_and_crew",COMMUNITY:"community",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",INSTAGRAM:"instagram",LOYALTY:"loyalty",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"}}),null);
__d("XUIDialogButton.react",["cx","React","XUIButton.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.action,c=(a==="confirm"?"layerConfirm":"")+(a==="cancel"?" layerCancel":"")+(a==="button"?" layerButton":""),d=this.props.href;a==="cancel"?d="#":a==="button"&&((d==null||d==="")&&(d="#"));return b("React").createElement(b("XUIButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),href:d,role:"button"}))};return c}(b("React").Component);e.exports=a}),null);
__d("XUIDialogOkayButton.react",["cx","fbt","React","XUIDialogButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2z1w"),action:this.props.action,label:h._("OK")}))};return c}(b("React").Component);c.propTypes={action:a.oneOf(["confirm","cancel","button"]).isRequired};e.exports=c}),null);
__d("XUIDialogBody.react",["cx","React","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize}),this.props.children)};return c}(b("React").Component);a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("XUIDialogFooter.react",["cx","LeftRight.react","React","XUIOverlayFooter.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_5a8u"+(this.props.fullBleedBorder?" _27qq":""),c=this.props,d=c.children,e=c.leftContent;c=babelHelpers.objectWithoutPropertiesLoose(c,["children","leftContent"]);return b("React").createElement(b("XUIOverlayFooter.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a)}),b("React").createElement(b("XUIText.react"),{display:"block",fontSize:this.props.fontSize},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,e),b("React").createElement("div",null,d))))};return c}(b("React").Component);c.propTypes={fontSize:a.oneOf(["medium","inherit"]),fullBleedBorder:a.bool,leftContent:a.object};c.defaultProps={fontSize:"medium"};e.exports=c}),null);
__d("XUICloseButton.react",["cx","fbt","React","XUIAbstractGlyphButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.size,c=this.props.shade;a="_50zy"+(a==="small"?" _50zz":"")+(a==="medium"?" _50-0":"")+(a==="large"?" _50-1":"")+(c==="light"?" _50z_":"")+(c==="dark"?" _50z-":"");c=this.props.label;var d=this.props.title;!this.props.title&&!this.props.tooltip&&(d=c);return b("React").createElement(b("XUIAbstractGlyphButton.react"),babelHelpers["extends"]({},this.props,{label:c,title:d,type:this.props.href?void 0:this.props.type,"data-hover":this.props.tooltip&&"tooltip","data-tooltip-alignh":this.props.tooltip&&"center","data-tooltip-content":this.props.tooltip,className:b("joinClasses")(this.props.className,a)}))};return c}(b("React").Component);c.propTypes={shade:a.oneOf(["light","dark"]),size:a.oneOf(["small","medium","large"]),title:a.string,tooltip:a.string,type:a.oneOf(["submit","button","reset"])};c.defaultProps={label:h._("Remove"),size:"medium",shade:"dark",type:"button"};e.exports=c}),null);
__d("XUIDialogTitle.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=null,c=this.props,d=c.closeButtonText,e=c.showCloseButton,f=c.closeButtonSize,g=c.closeButtonClassName;c=babelHelpers.objectWithoutPropertiesLoose(c,["closeButtonText","showCloseButton","closeButtonSize","closeButtonClassName"]);e&&(a=b("React").createElement(b("XUICloseButton.react"),{size:f,"data-testid":"dialog_title_close_button",label:d,className:b("joinClasses")(g,"layerCancel _51-t"),onClick:this.props.onCloseClick}));f=b("React").Children.toArray(this.props.children);return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_4-i0"+(e?" _2gb3":""))}),b("React").createElement(b("LeftRight.react"),null,b("React").createElement("h3",{className:"_52c9","data-hover":"tooltip","data-tooltip-display":"overflow"},f[0]),b("React").createElement("div",{className:"_51-u"},f.slice(1),a)))};return c}(b("React").Component);a.defaultProps={closeButtonText:h._("Close"),showCloseButton:!0,closeButtonSize:"medium"};e.exports=a}),null);
__d("FBStoriesArchivedCardQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2473649175992196"};b.getQueryID=function(){return"243055063287658"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1883080631763254"};b.getQueryID=function(){return"196508534442477"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesBucketsMigrationQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2360729150660783"};b.getQueryID=function(){return"697434654045116"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesBucketsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2402111123209090"};b.getQueryID=function(){return"692508787876751"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesDeleteMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1340045906066120"};b.getQueryID=function(){return"967072946766012"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesGating",["qex"],(function(a,b,c,d,e,f){"use strict";a={shouldUseTrayMigration:function(){return b("qex")._("835044")||!1},getMaxBucketsForTrayLoad:function(){var a;return(a=b("qex")._("863217"))!=null?a:100}};e.exports=a}),null);
__d("FBStoriesMuteMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1524574307634402"};b.getQueryID=function(){return"1944151819168048"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesMutedBucketOwnersQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1891920954170361"};b.getQueryID=function(){return"294951511028390"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesPageBucketQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2474129275971731"};b.getQueryID=function(){return"2388782834476461"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1698650280180657",queryID:"358127274690781"})}),null);
__d("FBStoriesPrivacyChangeSubscription",["BaseGraphQLSubscription","FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionCallName()+"/owner_id_"+a};d.getQueryID=function(){return b("FBStoriesPrivacyChangeSubscriptionWebGraphQLSubscription").getDocID()};d.getQueryParameters=function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),owner_id:a})}};d.getSubscriptionCallName=function(){return"unified_stories_privacy_change_subscribe"};return c}(b("BaseGraphQLSubscription"));e.exports=a}),null);
__d("FBStoriesPrivacySettingsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1636640369763506"};b.getQueryID=function(){return"153291488685319"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1386522808128715"};b.getQueryID=function(){return"1384057201673076"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1997102860360908"};b.getQueryID=function(){return"345862519273111"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesTraySubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"2116313638483977",queryID:"665700600551619"})}),null);
__d("FBStoriesTraySubscription",["BaseGraphQLSubscription","FBStoriesTraySubscriptionWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionCallName()+"/user_id_"+a};d.getQueryID=function(){return b("FBStoriesTraySubscriptionWebGraphQLSubscription").getDocID()};d.getQueryParameters=function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),user_id:a})}};d.getSubscriptionCallName=function(){return"stories_tray_subscribe"};return c}(b("BaseGraphQLSubscription"));e.exports=a}),null);
__d("FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1530421027083413"};b.getQueryID=function(){return"213614895981437"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("FBStoriesViewerBucketQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2335138676579882"};b.getQueryID=function(){return"459845618126515"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesViewerBucketViewersQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2537391569626162"};b.getQueryID=function(){return"291254118322978"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesVotePollMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1942364135805651"};b.getQueryID=function(){return"1772533953042568"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("GroupUnmuteMemberMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1224583300980768"};b.getQueryID=function(){return"454589191691586"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("ReactionStickerStoryCardReactMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1651380361616532"};b.getQueryID=function(){return"603085890111081"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("ReportStoryCardToAdminWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1435403036581993"};b.getQueryID=function(){return"909342722558820"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("StoriesArchiveCardViewerQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2649821275029172"};b.getQueryID=function(){return"218194525798087"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("StoriesArchiveDeletionMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"997271687064551"};b.getQueryID=function(){return"2146552195626815"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2879905198698528"};b.getQueryID=function(){return"240974536483368"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("UnifiedStoriesSettingGraphQLWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1619282521526216"};b.getQueryID=function(){return"2045499392436729"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("FBStoriesGraphQLAPI",["CurrentUser","FBStoriesArchivedCardQueryWebGraphQLQuery","FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation","FBStoriesBucketsMigrationQueryWebGraphQLQuery","FBStoriesBucketsQueryWebGraphQLQuery","FBStoriesDeleteMutationWebGraphQLMutation","FBStoriesGating","FBStoriesMutedBucketOwnersQueryWebGraphQLQuery","FBStoriesMuteMutationWebGraphQLMutation","FBStoriesPageBucketQueryWebGraphQLQuery","FBStoriesPrivacyChangeSubscription","FBStoriesPrivacySettingsQueryWebGraphQLQuery","FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation","FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation","FBStoriesTraySubscription","FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation","FBStoriesViewerBucketQueryWebGraphQLQuery","FBStoriesViewerBucketViewersQueryWebGraphQLQuery","FBStoriesVotePollMutationWebGraphQLMutation","GroupUnmuteMemberMutationWebGraphQLMutation","ReactionStickerStoryCardReactMutationWebGraphQLMutation","ReportStoryCardToAdminWebGraphQLMutation","StoriesArchiveCardViewerQueryWebGraphQLQuery","StoriesArchiveDeletionMutationWebGraphQLMutation","UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation","UnifiedStoriesSettingGraphQLWebGraphQLQuery","WebGraphQL","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={load:function(){var a=b("FBStoriesGating").getMaxBucketsForTrayLoad();return b("WebGraphQL").exec(b("FBStoriesGating").shouldUseTrayMigration()?new(b("FBStoriesBucketsMigrationQueryWebGraphQLQuery"))({maxBuckets:a}):new(b("FBStoriesBucketsQueryWebGraphQLQuery"))({maxBuckets:a}))},loadSingleBucketStoryData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesViewerBucketQueryWebGraphQLQuery"))({bucketID:a,threadCount:100}))},loadPageBucketStoryData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesPageBucketQueryWebGraphQLQuery"))({pageID:a}))},loadSingleArchivedCardData:function(a){return b("WebGraphQL").exec(new(b("FBStoriesArchivedCardQueryWebGraphQLQuery"))({storyID:a}))},loadPrivacySettings:function(){return b("WebGraphQL").exec(new(b("FBStoriesPrivacySettingsQueryWebGraphQLQuery"))({}))},loadViewerListForThread:function(a){return b("WebGraphQL").exec(new(b("FBStoriesViewerBucketViewersQueryWebGraphQLQuery"))({threadId:a}))},loadStoriesArchiveSavingMode:function(){return b("WebGraphQL").exec(new(b("UnifiedStoriesSettingGraphQLWebGraphQLQuery"))({}))},loadArchivedCardsData:function(a,c,d,e){return b("WebGraphQL").exec(new(b("StoriesArchiveCardViewerQueryWebGraphQLQuery"))({current_id:a,current_time:c,lower_bound_time:d,upper_bound_time:e}))},subscribeToPrivacyChanges:function(a){return b("FBStoriesPrivacyChangeSubscription").subscribe(b("CurrentUser").getID(),a)},subscribeToTrayChanges:function(a){return b("FBStoriesTraySubscription").subscribe(b("CurrentUser").getID(),a)},unsubscribeFromTrayChanges:function(a){a.unsubscribe()},updateThreadSeenReciept:function(a){a={client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),thread_id:a};return b("WebGraphQL").exec(new(b("FBStoriesSeenRecieptsLastSeenTimeUpdateMutationWebGraphQLMutation"))({input:a}))},updateStorySeenReciept:function(a){a={client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),story_id:a};return b("WebGraphQL").exec(new(b("FBStoriesUnifiedSeenReceiptLastSeenTimeMutationWebGraphQLMutation"))({input:a}))},deleteStory:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesDeleteMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,story_thread_ids:[c]}}))},muteBucketOwner:function(a,c,d){return b("WebGraphQL").exec(new(b("FBStoriesMuteMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,user_id:c,should_unfollow_user_story:d}}))},loadMutedBucketOwnersList:function(){return b("WebGraphQL").exec(new(b("FBStoriesMutedBucketOwnersQueryWebGraphQLQuery"))({}))},pollVote:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesVotePollMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),story_card_poll_id:a,option:c,actor_id:b("CurrentUser").getID()}}))},reactToSticker:function(a,c){return b("WebGraphQL").exec(new(b("ReactionStickerStoryCardReactMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:b("CurrentUser").getID(),story_card_reaction_sticker_id:a,count:c}}))},reportThreadToAdmin:function(a,c){return b("WebGraphQL").exec(new(b("ReportStoryCardToAdminWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,report_to_admin_action:"REPORT",story_card_id:c}}))},takeNegativeFeedbackAction:function(a,c,d){return b("WebGraphQL").exec(new(b("FBStoriesTakeNegativeFeedbackActionMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,negative_feedback_action_id:d}}))},changeAudienceMode:function(a,c){return b("WebGraphQL").exec(new(b("FBStoriesAudienceModeMutationCallMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,audience_mode:c}}))},updateArchiveSavingMode:function(a,c){return b("WebGraphQL").exec(new(b("UnifiedStoriesArchiveSavingModeMutationWebGraphQLMutation"))({saving_mode:{client_mutation_id:b("uniqueID")(),actor_id:a,saving_mode:c}}))},deleteArchivedStoryCard:function(a,c){return b("WebGraphQL").exec(new(b("StoriesArchiveDeletionMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,archived_story_card_id:c}}))},unmuteFromGroup:function(a,c,d){return b("WebGraphQL").exec(new(b("GroupUnmuteMemberMutationWebGraphQLMutation"))({input:{client_mutation_id:b("uniqueID")(),actor_id:a,group_id:c,user_id:d}}))}}}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.enable=function(){if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};c._getDuration=function(){return 150};c._handleStartHide=function(){__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){var b=this;c.unsubscribe();c=null;var d=function(){b._layer.finishHide()};a?this._animate(d):d()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};c._animate=function(a){var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};a.forDuration=function(c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=b("emptyFunction").thatReturns(c);return d};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("StoryArchiveAutoSavingMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENABLED:"ENABLED",DISABLED:"DISABLED"})}),null);
__d("FBStoriesArchiveIntroductionDialog.react",["fbt","BasicFBNux","CurrentUser","FBStoriesGraphQLAPI","LayerFadeOnHide","ProfileTabConst","React","StoryArchiveAutoSavingMode","URI","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=500,i=5856;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isShown:!0},d.$1=function(){d.setState({isShown:!1}),b("BasicFBNux").onDismiss(i)},d.$2=function(){d.$1()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("BasicFBNux").onView(i),b("promiseDone")(b("FBStoriesGraphQLAPI").updateArchiveSavingMode(b("CurrentUser").getID(),b("StoryArchiveAutoSavingMode").ENABLED),null,null)};d.render=function(){var a=new(b("URI"))("/"+b("CurrentUser").getID()).setQueryData({sk:b("ProfileTabConst").STORIES_ARCHIVE});return b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},layerHideOnBlur:!1,shown:this.state.isShown,width:h,onToggle:this.$1},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!0},g._("Revisit Your Stories After They Disappear")),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("span",null,b("React").createElement("div",null,g._("Your stories will automatically be saved in your Story Archive so you don't have to store them on your device. Only you can see your Story Archive.")),b("React").createElement("br",null),b("React").createElement("div",null,g._("You can turn this off in Settings.")))),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIButton.react"),{href:a,label:g._("View Settings")}),b("React").createElement(b("XUIDialogOkayButton.react"),{use:"confirm",action:"confirm",onClick:this.$2})))};return c}(b("React").Component);e.exports=a}),null);