if (self.CavalryLogger) { CavalryLogger.start_js(["s\/QoI"]); }

__d("FBRTCCallabilityStore",["FBRTCDispatcher","RTCCallabilityStore"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("RTCCallabilityStore"))(b("FBRTCDispatcher"))}),null);
__d("ChatVideoCallButton.react",["cx","fbt","invariant","Bootloader","ChatVideoCallIcon.bs","CurrentUser","FantaAvailableStatus","FBIDCheck","FBRTCCallabilityStore","FBRTCCore","ImmutableObject","Keys","LayerFadeOnHide","Link.react","MercuryIDs","MessengerParticipants.bs","RTWebLoggingCallType","RTWebLoggingSurface","RTWebUserActionLogger","VideoCallWebDriverIDs","gkx","immutable","MercuryThreadIDMap","React","RTCCallState","TrackingNodes","FBRTCLogger","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ChatVideoCallIcon.bs").jsComponent,k=b("MercuryThreadIDMap").get(),l=b("FBRTCLogger").Trigger,m=b("gkx")("697231");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=null,d.state={isCallable:!1,user:null},d.$6=function(a){a.preventDefault(),d.$8()},d.$7=function(a){a.preventDefault();if(a.keyCode!==b("Keys").RETURN)return;a.target&&(a.target instanceof HTMLElement||i(0,5852),a.target.blur());d.$8()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props,d=c.isAudio;c=c.isGroupChat;c=[b("RTWebUserActionLogger").getCallType(c),b("RTWebUserActionLogger").getAudioVideoComponent(d)];d=c[0];c=c[1];b("RTWebUserActionLogger").logPreCallImpression({callType:d,surface:b("RTWebLoggingSurface").CHAT_TAB,component:c});this.setState({isCallable:this.$3(),user:this.$4()});this.$2=b("FBRTCCallabilityStore").addListener(function(b){a.setState({isCallable:a.$3(),user:a.$4()})})};d.componentDidUpdate=function(){if(!this.$1){var a=this.$5();this.state.user&&this.state.user.id!==a&&this.setState({user:this.$4()})}a=this.$3();a!==this.state.isCallable&&this.setState({isCallable:a})};d.componentWillUnmount=function(){this.$1&&b("MessengerParticipants.bs").removeCallback(this.$1),this.$2&&this.$2.remove()};d.$5=function(){var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return null;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,5851);return b("MercuryIDs").getParticipantIDFromUserID(a)};d.$4=function(){var a=this,c=this.$5(),d=null;if(c){var e=b("MessengerParticipants.bs").getNow(c);this.$1&&b("MessengerParticipants.bs").removeCallback(this.$1);e?(this.$1=null,d=e):this.$1=b("MessengerParticipants.bs").getMulti([c],function(b){a.$1=null,a.setState({user:b[c]})})}return d};d.$3=function(){if(!this.props.threadID)return!1;if(this.props.isGroupChat)return!0;var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return!1;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,5851);return!b("FBRTCCallabilityStore").isBlocked(a,this.props.thread)&&b("FBRTCCallabilityStore").isCallable(a,this.props.thread)};d.getTooltipLabel=function(){if(this.props.isGroupChat)return this.props.isAudio?h._("Start a group call"):h._("Start a group video chat");var a=this.state.user;return!a||!a.fbid?void 0:this.props.isAudio?b("FBRTCCallabilityStore").voiceCallButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread):b("FBRTCCallabilityStore").callButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread)};d.render=function(){var a=this;if(!this.props.shown||m&&!this.state.isCallable)return null;var c=b("TrackingNodes").getTrackingInfo(this.props.isAudio?b("TrackingNodes").types.VIDEOCHAT:b("TrackingNodes").types.VOICECHAT),d=JSON.stringify({videochat:"call_clicked_bhat_tab"}),e=this.props.threadID&&b("FantaAvailableStatus").isAvailable(this.props.thread,this.props.threadID);e=e&&this.state.isCallable;return b("React").createElement("div",null,b("React").createElement(b("Link.react"),{"aria-label":this.getTooltipLabel(),className:"button _3olv"+(!m&&this.props.isAudio?" _2fpc":"")+(!m&&!this.props.isAudio?" _2fpd":"")+(this.state.isCallable?" enabled":""),"data-ft":c,"data-gt":d,"data-hover":"tooltip","data-tooltip-content":this.getTooltipLabel(),"data-tooltip-position":"above","data-testID":this.props.isAudio?b("VideoCallWebDriverIDs").START_VOICE_CALL:b("VideoCallWebDriverIDs").START_VIDEO_CALL,onClick:this.$6,onKeyUp:this.$7,ref:"button"},m?b("React").createElement(j,{isAudio:this.props.isAudio,iconStyle:this.props.iconStyle}):null),b("React").createElement("div",{className:e&&!this.props.isAudio?"_18pe":""}),b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},contextRef:function(){return a.refs.button},onCloseButtonClick:this.props.onRTCNuxCloseButtonClick,shown:this.props.rtcNuxShown,width:"auto"},h._("You can now make a group call.")))};d.$8=function(){if(!this.state.isCallable)return;this.props.onRTCNuxCloseButtonClick();this.$9()};d.$9=function(){__p&&__p();var a=this,c=this.props,d=c.isAudio,e=c.isGroupChat;c=c.threadID;!c&&i(0,5853);if(e){e=b("RTWebUserActionLogger").getAudioVideoComponent(d);b("RTWebUserActionLogger").logPreCallClick({callType:b("RTWebLoggingCallType").MW,surface:b("RTWebLoggingSurface").CHAT_TAB,component:e});b("MercuryIDs").isLocalThread(c)?k.getServerIDFromClientID(c,function(b){return a.$10(b)}):this.$10(b("MercuryIDs").getThreadFBIDFromThreadID(c))}else{e=this.state.user&&this.state.user.fbid;if(!e)return;c=d?"chattab_audio_button":"chattab_video_button";b("FBRTCCore").startOutgoingCall(e,c,!!d)}};d.$10=function(a){__p&&__p();var c=this,d=this.props,e=d.isAudio;d=d.rtcCallData;d=d?d:{};var f=d.call_state;d=d.server_info_data;if(f!=="NO_ONGOING_CALL"&&d){b("FBRTCCore").startGroupCall({conferenceName:"GROUP:"+a,hasVideo:!e,serverInfoData:d,trigger:f!==b("RTCCallState").AUDIO_GROUP_CALL?e?l.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:l.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:e?l.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:l.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON});return}b("Bootloader").loadModules(["FBRTCSupport","MessengerState.bs","MessengerParticipantsFetcher.bs","FBRTCUnsupportedBrowserMessage","MessengerRTCGroupCallParticipantsPickerDialogController"],function(d,f,g,h,i){__p&&__p();if(!d.isGroupCallWebtrcSupported()){h.showForOutgoingGroupCall();return}f.getThreadMeta(b("CurrentUser").getID(),c.props.threadID,function(d){var f=d.participants?d.participants.filter(function(a){return a!==b("MercuryIDs").getParticipantIDFromUserID(c.props.viewer)}).map(function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)}):[];f.length>0?g.fetch({ids:f}).done(function(e){i.render({participants:b("immutable").Map(e.map(function(a){return[a.id,new(b("ImmutableObject"))(a)]})),thread:d,viewerID:c.props.viewer,trigger:c.props.isAudio?l.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:l.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON,conferenceName:"GROUP:"+a,hasVideo:!c.props.isAudio})}):b("FBRTCCore").startGroupCall({conferenceName:"GROUP:"+a,hasVideo:!e,trigger:e?l.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:l.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON})})},"ChatVideoCallButton.react")};return c}(b("React").PureComponent);a.defaultProps={shown:!0,rtcCallData:{call_state:"NO_ONGOING_CALL"}};e.exports=a}),null);