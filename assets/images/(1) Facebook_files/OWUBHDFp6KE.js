if (self.CavalryLogger) { CavalryLogger.start_js(["I5i\/4"]); }

__d("TextWithEntitiesTruncated.react",["fbt","Link.react","React","TextWithEntities.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();c=b("React").PropTypes;var h=b("React").useState,i=.6;function j(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function k(a,b,c){var d=null,e=a.split("\n");a.length>b&&(d=Math.floor(b*i));if(e.length>c){a=e.slice(0,c).join("\n").length;d!==null?d=Math.min(a,d):d=a}return d}function l(a){var b=[];a.forEach(function(a){a!=null&&a.offset!=null&&a.length!=null&&a.entity!=null&&b.push({entity:babelHelpers["extends"]({},a.entity),length:a.length,offset:a.offset})});return b}function a(a){__p&&__p();var c=a.text,d=a.ranges;d=d===void 0?[]:d;var e=a.truncationStyle;e=e===void 0?"none":e;var f=a.maxLength;f=f===void 0?800:f;var i=a.maxLines;i=i===void 0?8:i;a=babelHelpers.objectWithoutPropertiesLoose(a,["text","ranges","truncationStyle","maxLength","maxLines"]);var m=h(!1),n=m[0],o=m[1];if(c==null)return null;m=c;d=l(d);var p=null,q=function(){o(!0)},r=function(){o(!1)};if(e!=="none"&&!n){f=k(c,f,i);if(f!=null){m=c.substring(0,f);d=j(d,0,m.length);switch(e){case"ellipsis-only":p=b("React").createElement(b("React").Fragment,{key:"see-more-less"},g._("\u2026"));break;case"see-more":case"see-more-and-less":p=b("React").createElement(b("React").Fragment,{key:"see-more-less"},g._("\u2026")," ",b("React").createElement(b("Link.react"),{onClick:q},g._("See More")))}}}else e==="see-more-and-less"&&n&&(p=b("React").createElement(b("React").Fragment,{key:"see-more-less"}," ",b("React").createElement(b("Link.react"),{onClick:r},g._("See Less"))));return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("TextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:d,text:m})),p)}a.propTypes={text:c.string,ranges:c.arrayOf(c.shape({offset:c.number,length:c.number,entity:c.object})).isRequired,truncationStyle:c.oneOf(["none","ellipsis-only","see-more","see-more-and-less"]),maxLength:c.number,maxLines:c.number};e.exports=a}),null);
__d("XMessagingGetEmojiRecentUsageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/emoji_recent_usage/",{})}),null);
__d("EmojiServerRequests",["Promise","AsyncRequest","XMessagingGetEmojiRecentUsageController"],(function(a,b,c,d,e,f){"use strict";a={fetchTrayData:function(a){return g(b("XMessagingGetEmojiRecentUsageController").getURIBuilder().getURI(),a,!0)}};function g(a,c,d){return new(b("Promise"))(function(c,e){return new(b("AsyncRequest"))(a).setHandler(function(a){return c(a.getPayload())}).setAllowCrossPageTransition(d).send()}).then(c)}e.exports=a}),null);
__d("XMessagingGetEmojiColorPrefController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/get_emoji_color/",{})}),null);
__d("XMessagingSetEmojiColorPrefController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/set_emoji_color/",{})}),null);
__d("EmojiState",["fbt","AsyncRequest","EmojiActions","EmojiServerRequests","MessengerSupportedEmojiUtils","XMessagingGetEmojiColorPrefController","XMessagingSetEmojiColorPrefController","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j;a={onTrayDataReady:function(a){j||(j=b("EmojiServerRequests").fetchTrayData(function(a){i=a})),b("promiseDone")(j,function(){a(),b("EmojiActions").loadedTrayData()})},getEmojiColor:function(){var a=b("XMessagingGetEmojiColorPrefController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setMethod("POST").setAllowCrossPageTransition(!0).setHandler(function(a){b("EmojiActions").emojiColorReady(a.payload)}).send()},changeEmojiColor:function(a){var c=b("XMessagingSetEmojiColorPrefController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setMethod("POST").setData({color:a}).send()},addMRUCategory:function(){if(i){var a=i.map(function(a){return b("MessengerSupportedEmojiUtils").getSupportedEmojiCodesArray(a)}).filter(function(a){return!!a});h={name:g._("Recently Sent"),emojis:a,icon:[128340]};b("EmojiActions").updateTrayData();i=null}},_addRecentlyUsedEmoji:function(a){__p&&__p();var c=h&&h.emojis;if(!c)return;var d=function(b){var d=a[b];for(var b=0;b<c.length;++b)if(c[b].length==d.length&&c[b].every(function(a,b){return a===d[b]})){c.splice(b,1);break}c.unshift(d)};for(var e=0;e<a.length;++e)d(e);b("EmojiActions").updateTrayData()},getMRUCategory:function(){h||this.addMRUCategory();return h},updateRecentlyUsed:function(a){if(!h){this.addMRUCategory();return}this._addRecentlyUsedEmoji(a)}};e.exports=a}),null);
__d("EmojiStateStore",["EmojiActions","EmojiDispatcher","EmojiState","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("EmojiDispatcher"))||this;b("EmojiState").getEmojiColor();c.$EmojiStateStore2=!1;return c}var d=c.prototype;d.getState=function(){var a=b("EmojiState").getMRUCategory();return{currentCategory:this.$EmojiStateStore4,emojiColor:this.$EmojiStateStore3,mruCategory:[a],threadID:this.$EmojiStateStore1,trayDataReady:this.$EmojiStateStore2}};d.__onDispatch=function(a){__p&&__p();var c=b("EmojiActions").Types;switch(a.type){case c.GET_EMOJI_COLOR:b("EmojiState").getEmojiColor();break;case c.EMOJI_COLOR_READY:this.$EmojiStateStore3=a.color;break;case c.CHANGE_EMOJI_COLOR:b("EmojiState").changeEmojiColor(a.color);this.$EmojiStateStore3=a.color;break;case c.CHANGE_CURRENT_CATEGORY:this.$EmojiStateStore4=a.currentCategory;break;case c.UPDATE_TRAY_DATA:break;case c.TRAY_DATA_READY:this.$EmojiStateStore2=!0;break}this.__emitChange()};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("createContentStateForTextWithMessengerEmoji",["ContentState","DraftModifier","MessengerSupportedEmojiUtils","insertMessengerEmojiIntoContentState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=b("ContentState").createFromText("");while(a){var d=b("MessengerSupportedEmojiUtils").getEmojiMatchObj(a);if(d){var e=d.offset+d.length,f=a.substr(0,d.is_supported?d.offset:e);e=a.substr(e);c=b("DraftModifier").insertText(c,c.getSelectionAfter(),f);d.is_supported&&(c=b("insertMessengerEmojiIntoContentState")(d.emoji_key,c,c.getSelectionAfter(),c.getFirstBlock().getInlineStyleAt(0)));a=e}else break}a&&(c=b("DraftModifier").insertText(c,c.getSelectionAfter(),a));return c}e.exports=a}),null);
__d("handlePastedTextForMessengerEmoji",["DraftModifier","EditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){c=c-a;a=e.getSelection();a.isCollapsed()||(c+=1+a.getEndOffset()-a.getStartOffset());if(c<=0)return e;d=d.slice(0,c);c=a.isCollapsed()?b("DraftModifier").insertText(e.getCurrentContent(),a,d,e.getCurrentInlineStyle()):b("DraftModifier").replaceText(e.getCurrentContent(),a,d,e.getCurrentInlineStyle());return b("EditorState").push(e,c,"insert-characters")}e.exports=a}),null);
__d("MessengerTextWithEmojiInput.react",["cx","CompositeDraftDecorator","DraftEditor.react","EditorState","MessengerEmojiSpan.react","React","XUICloseButton.react","createContentStateForTextWithMessengerEmoji","getEntityMatcher","getVisibleValueForContentStateWithMessengerEmoji","handleBeforeInputForMessengerEmoji","handlePastedTextForMessengerEmoji","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$6=function(a){if(a!==d.state.editorState){var b=!a.getCurrentContent().hasText();d.setState({editorState:a,isEmpty:b});d.props.onChange&&d.props.onChange(a)}},d.$3=function(a,c){if(d.props.maxLength&&d.props.maxLength<=d.getValue().length&&c.getSelection().isCollapsed())return"handled";a=b("handleBeforeInputForMessengerEmoji")(c,a);if(a===c)return"not-handled";d.setState({editorState:a});return"handled"},d.$4=function(a,c,e){c=d.props.maxLength;if(c){c=b("handlePastedTextForMessengerEmoji")(d.getValue().length,c,a,e);d.setState({editorState:c});return"handled"}return"not-handled"},d.$5=function(a,b){if(d.props.onReturn){d.props.onReturn(a,b);return"handled"}return"not-handled"},d.$8=function(){var a=d.$1("");d.setState({editorState:a});d.props.onChange&&d.props.onChange(a)},d.state={editorState:d.$1(d.props.initialValue),isEmpty:!d.props.initialValue||d.props.initialValue.length===0},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(a){return b("EditorState").createWithContent(b("createContentStateForTextWithMessengerEmoji")(a||""),this.$2())};d.componentDidMount=function(){this.props.disableAutoFocus!==!0&&b("setImmediate")(this.focusInput.bind(this))};d.render=function(){var a=this.props.placeholder&&this.props.placeholder.toString();return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_30e7")},b("React").createElement("div",{className:"_5j5f _3oh-"},b("React").createElement(b("DraftEditor.react"),{editorState:this.state.editorState,handleBeforeInput:this.$3,handlePastedText:this.$4,handleReturn:this.$5,onChange:this.$6,placeholder:a,ref:"input",spellCheck:!1,stripPastedStyles:!0,textAlignment:"left"})),this.props.showLengthIndicator&&this.props.maxLength?this.$7():null,b("React").createElement(b("XUICloseButton.react"),{size:"small",onClick:this.$8,className:(this.state.isEmpty?"hidden_elem":"")+" _5j5l"}))};d.$7=function(){return this.getValue().length!==0?b("React").createElement("div",{className:"_32y6"},this.getValue().length,"/",this.props.maxLength):b("React").createElement("div",{className:"_32y6"})};d.$2=function(){return new(b("CompositeDraftDecorator"))([{strategy:b("getEntityMatcher")(function(a){return a.getType()==="EMOJI"}),component:b("MessengerEmojiSpan.react")}])};d.getValue=function(){var a=this.state.editorState.getCurrentContent();return b("getVisibleValueForContentStateWithMessengerEmoji")(a)};d.focusInput=function(){this.refs.input.focus(),this.$6(b("EditorState").moveFocusToEnd(this.state.editorState))};return c}(b("React").PureComponent);c.propTypes={disableAutoFocus:a.bool,onReturn:a.func,maxLength:a.number,onChange:a.func,placeholder:a.node,initialValue:a.string,showLengthIndicator:a.bool};e.exports=c}),null);
__d("MessengerContactListReact.re",["react","bs_curry","MessengerContactList.react","ReasonReact.bs"],(function(a,b,c,d,e,f){__p&&__p();function a(a){return b("react").createElement(b("MessengerContactList.react"),a)}f.MessengerContactListTypeChecked=a;c=function(a,c,d,e,f,g,h,i,j,k,l,m,n){return b("ReasonReact.bs").wrapJsForReason(b("MessengerContactList.react"),{actionsClass:a,admins:c,className:d,contactAdapter:e,disableRole:f,extraActionsEnabled:g,listSections:h,onAction:i==null?i:function(a,c){a=b("bs_curry")._2(i,a,c);return a},onSelect:j==null?j:function(a,c){a=b("bs_curry")._2(j,a,c);return a},rowClassName:k,viewer:l,thread:m},n)};f.make=c}),null);
__d("MessengerDialogs.re",["bs_curry","MessengerDialogs.bs"],(function(a,b,c,d,e,f){a=b("MessengerDialogs.bs").showDialog;f.showDialog=a;c=function(a,c){a=b("bs_curry")._2(b("MessengerDialogs.bs").removeDialog,a.dialog,c);return a};f.removeDialog=c;d=b("MessengerDialogs.bs").removeAllDialogs;f.removeAllDialogs=d}),null);
__d("MessengerTextWithEmojiInputReact.bs",["ReasonReact.bs","bs_js_null_undefined","MessengerTextWithEmojiInput.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i){return b("ReasonReact.bs").wrapJsForReason(b("MessengerTextWithEmojiInput.react"),{className:b("bs_js_null_undefined").fromOption(a),onReturn:b("bs_js_null_undefined").fromOption(c),maxLength:b("bs_js_null_undefined").fromOption(d),onChange:b("bs_js_null_undefined").fromOption(e),placeholder:b("bs_js_null_undefined").fromOption(f),initialValue:b("bs_js_null_undefined").fromOption(g),showLengthIndicator:b("bs_js_null_undefined").fromOption(h)},i)}f.make=a}),null);
__d("MessengerEditNicknameDialogReact.bs",["cx","fbt","bs_curry","React","MercuryIDs","ReasonReact.bs","bs_js_primitive","MessengerDialogReact.bs","MessengerDialogBody.react","MessengerDialogFooter.react","MessengerTextWithEmojiInputReact.bs","MessagingThreadCustomizationConfig"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").reducerComponent("MessengerEditNicknameDialogReact");function j(a,c){c[1][0][0]=a==null?void 0:b("bs_js_primitive").some(a);return 0}function a(a,c,d,e,f,g){__p&&__p();var k=function(f,g){f=g[1][0][0];g=f!==void 0?b("bs_js_primitive").valFromOption(f).getValue().trim():void 0;f=0;g!==void 0&&(g===""?c!==void 0&&(f=1):f=1);if(f===1&&g!==c){f=b("MercuryIDs").getUserIDFromParticipantID(a.id);f==null||b("bs_curry")._1(d,[f,g])}return b("bs_curry")._1(e,!1)};return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(d){var e=a.name,g=b("MercuryIDs").getUserIDFromParticipantID(a.id),i,l=0;!(g==null)&&g===f?i=h._("Edit Your Nickname"):l=1;l===1&&(i=h._("Edit Nickname for {personName}",[h._param("personName",e)]));return b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Dialog[0]("_2c1u",void 0,void 0,void 0,void 0,void 0,400,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("bs_curry")._3(b("MessengerDialogReact.bs").Header[0],void 0,void 0,i)),b("React").createElement(b("MessengerDialogBody.react"),{children:b("React").createElement(b("React").Fragment,void 0,b("React").createElement("div",{className:"_-bo"},h._("Everyone in this conversation will see this.")),b("ReasonReact.bs").element(void 0,b("bs_curry")._1(d[0],j),b("MessengerTextWithEmojiInputReact.bs").make("_2c1v",b("bs_curry")._1(d[0],k),b("MessagingThreadCustomizationConfig").maxNicknameLength,void 0,e,c,void 0,[])))}),b("React").createElement(b("MessengerDialogFooter.react"),{children:b("React").createElement(b("React").Fragment,void 0,b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").CancelButton[0](void 0,[])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Button[0](void 0,h._("Save"),void 0,void 0,b("bs_curry")._1(d[0],k),0,void 0,void 0,void 0,[])))})]))},function(){return[[void 0]]},i[10],function(a,b){return 0},i[12]]}f.component=i;f.setInput=j;f.make=a}),null);
__d("MessengerEditNicknamesDialogReact.bs",["cx","fbt","bs_curry","React","immutable","MercuryIDs","ReasonReact.bs","bs_js_primitive","ImmutableObject","MessengerDialogs.bs","MessengerDialogReact.bs","MessengerAdminGroupUtils","MessengerDialogBodyReact.bs","MessengerContactListReact.re","MessengerEditNicknameDialogReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c){var d=b("MercuryIDs").getUserIDFromParticipantID(c.id),e;if(d==null||a==null)e=[c.name,""];else{a=a[d];e=a!==void 0?[a,c.name]:[c.name,""]}return new(b("ImmutableObject"))({alias:c.vanity,uid:c.id,photo:c.image_src,title:e[0],subtitle:e[1],type:c.user_type,isMessengerUser:c.is_messenger_user,href:c.href,isWorkUser:void 0,timezone:void 0,participants:void 0,thread:void 0})}var j=b("ReasonReact.bs").statelessComponent("MessengerEditNicknamesDialogReact");function k(a,c,d,e,f,g){__p&&__p();var k=function(a){if(a)return 0;else{b("bs_curry")._1(e,0);return b("MessengerDialogs.bs").removeAllDialogs(0)}},l=function(e,a){a=b("MercuryIDs").getUserIDFromParticipantID(e.id);var g=c.custom_nickname,h=!(a==null)&&!(g==null)?b("bs_js_primitive").undefined_to_opt(g[a]):void 0;return b("MessengerDialogs.bs").showDialog(function(){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerEditNicknameDialogReact.bs").make(e,h,d,k,f,[]))})};return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(){__p&&__p();var d=a.filter(function(d,a,e){__p&&__p();if(d==null)return!1;else{a=b("MessengerAdminGroupUtils").isJoinableThread(c);e=b("MercuryIDs").getUserIDFromParticipantID(d.id);if(a)if(e==null)return!1;else return e===f;else return!0}}).toArray(),e=b("React").createElement(b("React").Fragment,void 0,b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").CancelButton[0](void 0,[])),b("ReasonReact.bs").element(void 0,void 0,b("bs_curry")._2(b("MessengerDialogReact.bs").Title[0],void 0,h._("Edit Nicknames")))),g=c.custom_nickname;return b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Dialog[0]("_4h9n",k,void 0,void 0,void 0,"default",350,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("bs_curry")._3(b("MessengerDialogReact.bs").Header[0],void 0,void 0,e)),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogBodyReact.bs").make("_4h9o",[b("ReasonReact.bs").element(void 0,void 0,b("MessengerContactListReact.re").make(void 0,void 0,void 0,function(a){return i(g,a)},!0,void 0,b("immutable").OrderedMap([[[null],d]]),void 0,l,"_44kr",f,c,[]))]))]))},j[9],j[10],j[11],j[12]]}a=b("ReasonReact.bs").wrapReasonForJs(j,function(a){return k(a.participants,a.thread,a.onSave,a.onClose,a.viewer,[])});f.fromMercuryParticipant=i;f.component=j;f.make=k;f.jsComponent=a}),null);
__d("MessengerParticipants.re",["bs_curry","MessengerParticipants.bs"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").get,a,c);return a};f.get=a;c=b("MessengerParticipants.bs").getNow;f.getNow=c;d=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMulti,a,c);return a};f.getMulti=d;e=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEagerMap,a,c);return a};f.getMultiEagerMap=e;a=b("MessengerParticipants.bs").removeCallback;f.removeCallback=a}),null);
__d("MessengerState.re",["bs_curry","MessengerState.bs"],(function(a,b,c,d,e,f){__p&&__p();a=b("MessengerState.bs").fbid;f.fbid=a;c=b("MessengerState.bs").deliveryReceipts;f.deliveryReceipts=c;d=b("MessengerState.bs").readReceiptsPerThread;f.readReceiptsPerThread=d;e=b("MessengerState.bs").ignoredIds;f.ignoredIds=e;a=b("MessengerState.bs").blockedIds;f.blockedIds=a;c=b("MessengerState.bs").pendingFolderUnseenCount;f.pendingFolderUnseenCount=c;d=b("MessengerState.bs").typing;f.typing=d;e=b("MessengerState.bs").pendingReadStatusThreads;f.pendingReadStatusThreads=e;a=b("MessengerState.bs").messages;f.messages=a;c=b("MessengerState.bs").localIDsMap;f.localIDsMap=c;d=b("MessengerState.bs").messagesWithUploadsInFlight;f.messagesWithUploadsInFlight=d;e=b("MessengerState.bs").threadlistOrderMap;f.threadlistOrderMap=e;a=b("MessengerState.bs").pinnedThreads;f.pinnedThreads=a;c=b("MessengerState.bs").montage;f.montage=c;d=b("MessengerState.bs").orderedMessageLists;f.orderedMessageLists=d;e=b("MessengerState.bs").unreadCounts;f.unreadCounts=e;a=b("MessengerState.bs").initialUnreadCounts;f.initialUnreadCounts=a;c=b("MessengerState.bs").unseenTimestamp;f.unseenTimestamp=c;d=b("MessengerState.bs").threads;f.threads=d;e=function(a,c){a=b("bs_curry")._2(b("MessengerState.bs").thread,a,c);return a};f.thread=e;a=function(a,c){a=b("bs_curry")._2(b("MessengerState.bs").compute,a,c);return a};f.compute=a;c=function(a,c){a=b("bs_curry")._2(b("MessengerState.bs").getThreadMetaNow,a,c);return a};f.getThreadMetaNow=c;d=function(a,c,d,e){a=b("bs_curry")._4(b("MessengerState.bs").getThreadMeta,a,c,d,e);return a};f.getThreadMeta=d;e=function(a,c){a=b("bs_curry")._2(b("MessengerState.bs").isEmptyLocalThread,a,c);return a};f.isEmptyLocalThread=e;a=b("MessengerState.bs").getPinnedThreadlist;f.getPinnedThreadlist=a;c=function(a,c,d){a=b("bs_curry")._3(b("MessengerState.bs").hasLoadedNMessages,a,c,d);return a};f.hasLoadedNMessages=c;d=function(a,c,d,e,f,g,h){a=b("bs_curry")._7(b("MessengerState.bs").getThreadMessagesRange,a,c,d,e,f,g,h);return a};f.getThreadMessagesRange=d;e=b("MessengerState.bs").getUnseenUnreadCount;f.getUnseenUnreadCount=e;a=b("MessengerState.bs").getUnseenCount;f.getUnseenCount=a;(function(a){return null});c=b("MessengerState.bs").jsComponent;f.jsComponent=c}),null);
__d("MessengerPage",["EventEmitter","EventEmitterWithHolding","EventHolder","keyMirror","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";a={Events:b("keyMirror")({APP_MOUNTED:null,DATA_INITIALIZED:null,JS_LOADED:null}),addRetroactiveListener:function(a,b){return g.addRetroactiveListener(a,b)},emit:function(a){g.emitAndHold(a,b("performanceAbsoluteNow")())},removeCurrentListener:function(){g.removeCurrentListener()}};var g=new(b("EventEmitterWithHolding"))(new(b("EventEmitter"))(),new(b("EventHolder"))());e.exports=a}),null);
__d("MessengerMDotMeReferralStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$MessengerMDotMeReferralStore1={refCode:null,refThreadID:null};return b}var d=c.prototype;d.getState=function(){return this.$MessengerMDotMeReferralStore1};d.__onDispatch=function(a){switch(a.type){case b("MessengerActions").Types.UPDATE_MDOT_ME:this.$MessengerMDotMeReferralStore1.refCode=a.refCode,this.$MessengerMDotMeReferralStore1.refThreadID=a.refThreadID,this.emitChange()}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MessengerURIListener",["Arbiter","MessengerActions","MessengerURISerializer","PageTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1;a={start:function(){g||b("PageTransitions").registerHandler(h,6),g=!0},stop:function(){b("PageTransitions").removeHandler(h,6),g=!1}};function h(a){a=b("MessengerURISerializer").deserialize(a);if(a.notMessenger){b("Arbiter").subscribeOnce("page_transition",function(){g&&b("PageTransitions").registerHandler(h)});return!1}b("PageTransitions").transitionComplete();b("MessengerActions").changeState(a);return!0}e.exports=a}),null);
__d("AtSignAllowEmptyMentionsStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){__p&&__p();a=b("DocumentMentionsRegex").PUNCTUATION;c=["@","\\uff20"].join("");d="[^"+c+a+"\\s]";f="(?:\\.[ |$]| |["+a+"]|)";var g=new RegExp("(?:^|\\s|[(\\/])(["+c+"]((?:"+d+f+"){0,20}))$");b={name:"AtSignAllowEmptyMentionsStrategy",findMentionableString:function(a){a=g.exec(a);if(a!==null){var b=a[2];return{matchingString:b,leadOffset:a[1].length}}return null}};e.exports=b}),null);
__d("MercuryGenericConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MAX_THREAD_NAME_LENGTH:250,MAX_GROUP_THREAD_DESCRIPTION_LENGTH:1e3})}),null);