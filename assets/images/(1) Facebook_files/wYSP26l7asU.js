if (self.CavalryLogger) { CavalryLogger.start_js(["wFOgp"]); }

__d("InstantGamesCanvasUpsellTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:InstantGamesCanvasUpsellLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:InstantGamesCanvasUpsellLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:InstantGamesCanvasUpsellLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCategory=function(a){this.$1.category=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={category:!0,event:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("CanvasUpsellUtils",["BasicFBNux","InstantGamesCanvasUpsellTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e,f){a.addEventListener("click",function(){if(d!==null){var a=c.parentNode;a!=null&&a.removeChild(c);b("BasicFBNux").onView(d)}g(e,f)})}function c(a,b,c){a.addEventListener("click",function(){g(b,c)})}function g(a,c){new(b("InstantGamesCanvasUpsellTypedLogger"))().setEvent(a).setCategory(c).log()}e.exports={initDismissButton:a,initLearnMoreButton:c}}),null);
__d("ChatEmojiCategories",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=[{name:g._("Smileys & People"),icon:[128515],emojis:[[128512],[128556],[128513],[128514],[128515],[128516],[128517],[128518],[128519],[128521],[128522],[128578],[128579],[9786],[128523],[128524],[128525],[128536],[128535],[128537],[128538],[128540],[128541],[128539],[129297],[129299],[128526],[129303],[128527],[128566],[128528],[128529],[128530],[128580],[129300],[128563],[128542],[128543],[128544],[128545],[128532],[128533],[128577],[9785],[128547],[128534],[128555],[128553],[128548],[128558],[128561],[128552],[128560],[128559],[128550],[128551],[128549],[128546],[128554],[128531],[128557],[128565],[128562],[129296],[128567],[129298],[129301],[128564],[128164],[128169],[128520],[128127],[128121],[128122],[128128],[128123],[128125],[129302],[128570],[128568],[128569],[128571],[128572],[128573],[128576],[128575],[128574],[128588],[128079],[128075],[128077],[128078],[128074],[9994],[9996],[128076],[9995],[128080],[128170],[128591],[9757],[128070],[128071],[128072],[128073],[128405],[128400],[129304],[128406],[9997],[128133],[128068],[128069],[128066],[128067],[128065],[128064],[128100],[128101],[128483],[128118],[128102],[128103],[128104],[128105],[128113],[128116],[128117],[128114],[128115],[128110],[128119],[9937],[128130],[128373],[127877],[128124],[128120],[128112],[128694],[127939],[128131],[128111],[128107],[128108],[128109],[128583],[128129],[128581],[128582],[128587],[128590],[128589],[128135],[128134],[128145],[128105,8205,10084,65039,8205,128104],[128104,8205,10084,65039,8205,128104],[128105,8205,10084,65039,8205,128105],[128143],[128105,8205,10084,65039,8205,128139,8205,128104],[128104,8205,10084,65039,8205,128139,8205,128104],[128105,8205,10084,65039,8205,128139,8205,128105],[128106],[128104,8205,128105,8205,128102],[128104,8205,128105,8205,128103],[128104,8205,128105,8205,128103,8205,128102],[128104,8205,128105,8205,128102,8205,128102],[128104,8205,128105,8205,128103,8205,128103],[128105,8205,128105,8205,128102],[128105,8205,128105,8205,128103],[128105,8205,128105,8205,128103,8205,128102],[128105,8205,128105,8205,128102,8205,128102],[128105,8205,128105,8205,128103,8205,128103],[127995],[127996],[127997],[127998],[127999],[128104,8205,128104,8205,128102],[128104,8205,128104,8205,128103],[128104,8205,128104,8205,128103,8205,128102],[128104,8205,128104,8205,128102,8205,128102],[128104,8205,128104,8205,128103,8205,128103],[128090],[128085],[128086],[128084],[128087],[128089],[128088],[128132],[128139],[128099],[128096],[128097],[128098],[128094],[128095],[128082],[127913],[127891],[128081],[127890],[128093],[128091],[128092],[128188],[128083],[128374],[128141],[127746]]},{name:g._("Animals & Nature"),icon:[128059],emojis:[[128054],[128049],[128045],[128057],[128048],[128059],[128060],[128040],[128047],[129409],[128046],[128055],[128061],[128056],[128025],[128053],[128584],[128585],[128586],[128018],[128039],[128038],[128036],[128035],[128037],[128058],[128023],[128052],[129412],[128029],[128027],[128012],[128030],[128028],[128375],[129410],[129408],[128013],[128034],[128032],[128031],[128033],[128044],[128051],[128011],[128010],[128006],[128005],[128003],[128002],[128020],[128004],[128042],[128043],[128024],[128016],[128015],[128017],[128014],[128022],[128e3],[128001],[128019],[129411],[128330],[128021],[128041],[128008],[128007],[128063],[128062],[128009],[128050],[127797],[127876],[127794],[127795],[127796],[127793],[127807],[9752],[127808],[127885],[127883],[127811],[127810],[127809],[127806],[127802],[127803],[127801],[127804],[127799],[127800],[127812],[128144],[127792],[127875],[128026],[128376],[127758],[127757],[127759],[127765],[127766],[127767],[127768],[127761],[127762],[127763],[127764],[127770],[127773],[127771],[127772],[127774],[127769],[11088],[127775],[128171],[10024],[9732],[9728],[9925],[127780],[127781],[127782],[9729],[127783],[9928],[127785],[9889],[128293],[128165],[10052],[127784],[9731],[9924],[127788],[128168],[127786],[127787],[9730],[9748],[128167],[128166],[127754]]},{name:g._("Food & Drink"),icon:[127828],emojis:[[127823],[127822],[127824],[127818],[127819],[127820],[127817],[127815],[127827],[127816],[127826],[127825],[127821],[127813],[127814],[127798],[127805],[127840],[127838],[129472],[127831],[127830],[127844],[127859],[127828],[127839],[127789],[127829],[127837],[127790],[127791],[127836],[127858],[127845],[127843],[127857],[127835],[127833],[127834],[127832],[127842],[127841],[127847],[127848],[127846],[127856],[127855],[127874],[127854],[127852],[127853],[127851],[127871],[127849],[127850],[127866],[127867],[127863],[127864],[127865],[127870],[127862],[127861],[9749],[127868],[127860],[127869]]},{name:g._("Activities"),icon:[9917],emojis:[[9917],[127936],[127944],[9918],[127934],[127952],[127945],[127921],[9971],[127948],[127955],[127992],[127954],[127953],[127951],[127935],[9975],[127938],[9976],[127993],[127907],[128675],[127946],[127940],[9977],[127947],[128692],[128693],[127943],[128372],[127942],[127933],[127894],[127941],[127895],[127989],[127915],[127903],[127917],[127912],[127914],[127908],[127911],[127932],[127929],[127927],[127930],[127928],[127931],[127916],[127918],[128126],[127919],[127922],[127920],[127923]]},{name:g._("Travel & Places"),icon:[128662],emojis:[[128663],[128661],[128647],[128665],[128652],[128654],[127950],[128659],[128657],[128658],[128656],[128666],[128667],[128668],[127949],[128690],[128680],[128653],[128664],[128660],[128662],[128673],[128672],[128671],[128643],[128651],[128669],[128644],[128645],[128648],[128670],[128642],[128646],[128650],[128649],[128641],[128745],[9992],[128747],[128748],[9973],[128741],[128676],[9972],[128755],[128640],[128752],[128186],[9875],[128679],[9981],[128655],[128678],[128677],[127937],[128674],[127905],[127906],[127959],[127904],[127745],[128508],[127981],[9970],[127889],[9968],[127956],[128507],[127755],[128510],[127957],[127966],[128739],[128740],[127749],[127748],[127964],[127958],[9969],[127965],[127751],[127750],[127961],[127747],[127753],[127756],[127879],[127878],[127752],[127960],[127984],[127983],[127967],[128509],[127968],[127969],[127962],[127970],[127980],[9978],[127971],[127972],[127973],[127974],[127976],[127978],[127979],[127977],[127963],[128146],[9962],[128332],[128333],[128331],[9961],[127776]]},{name:g._("Objects"),icon:[128161],emojis:[[8986],[128241],[128242],[128187],[9e3],[128421],[128424],[128433],[128434],[128377],[128189],[128190],[128191],[128192],[128252],[128247],[128248],[128249],[127909],[128253],[127902],[128222],[9742],[128223],[128224],[128250],[128251],[127897],[127898],[127899],[9201],[9202],[9200],[128368],[8987],[9203],[128225],[128267],[128268],[128161],[128294],[128367],[128465],[128738],[128184],[128181],[128180],[128182],[128183],[128176],[128179],[128142],[9878],[128295],[128296],[9874],[128736],[9935],[128297],[128476],[9881],[9939],[128299],[128163],[128298],[128481],[9876],[128737],[128684],[9760],[9904],[9905],[127994],[128302],[128255],[128136],[9879],[128301],[128300],[128371],[128138],[128137],[127777],[127991],[128278],[128701],[128703],[128704],[128705],[128273],[128477],[128715],[128716],[128719],[128682],[128718],[128444],[128506],[128511],[128717],[127880],[127887],[127872],[127873],[127882],[127881],[127886],[127888],[127884],[127982],[9993],[128233],[128232],[128140],[128231],[128238],[128234],[128235],[128236],[128237],[128230],[128239],[128229],[128228],[128220],[128195],[128209],[128202],[128200],[128201],[128196],[128197],[128198],[128467],[128199],[128451],[128499],[128452],[128203],[128466],[128193],[128478],[128194],[128450],[128240],[128211],[128213],[128215],[128216],[128217],[128212],[128210],[128218],[128214],[128279],[128206],[128391],[9986],[128208],[128207],[128204],[128205],[128681],[127987],[127988],[128272],[128274],[128275],[128271],[128394],[128395],[10002],[128221],[9999],[128397],[128396],[128269],[128270]]},{name:g._("Symbols"),icon:[10084],emojis:[[10084,65039],[128155],[128154],[128153],[128148],[128156],[10083],[128149],[128147],[128158],[128151],[128152],[128150],[128157],[128159],[9774],[10013],[9770],[128329],[9784],[10017],[128303],[128334],[9775],[9766],[128720],[9934],[9800],[9801],[9802],[9803],[9804],[9805],[9806],[9807],[9808],[9809],[9810],[9811],[127380],[9883],[9762],[9763],[128244],[128243],[127543],[127386],[128174],[127344],[127345],[127374],[127377],[127358],[127384],[9940],[128219],[128683],[10060],[11093],[128162],[9832],[128695],[128687],[128691],[128689],[128286],[128245],[10071],[10069],[10067],[10068],[8252,65039],[8265,65039],[128175],[128261],[128262],[128305],[9884],[12349],[9888],[128696],[128304],[127535],[128185],[10035],[10062],[9989],[128160],[127744],[127760],[9410],[127975],[127490],[128706],[128707],[128708],[128709],[9855],[128685],[128702],[10036],[127359],[128688],[128697],[128698],[128700],[128699],[128686],[127910],[128246],[9167],[127489],[127382],[9851],[127383],[127378],[10055],[127381],[127379],[35,8419],[42,8419],[48,8419],[49,8419],[50,8419],[51,8419],[52,8419],[53,8419],[54,8419],[55,8419],[56,8419],[57,8419],[128287],[128290],[9654],[9208],[9199],[9209],[9210],[9197],[9198],[9194],[128256],[128257],[9193],[128258],[9664],[128316],[128317],[9195],[9196],[127385],[10145],[11013],[11014],[11015],[8599],[8600],[8601],[8598],[8596],[8618],[128260],[8617],[10548],[10549],[8505],[8597],[128292],[128289],[128288],[128291],[127925],[127926],[12336],[10175],[10004],[128259],[10133],[10134],[10135],[10006],[10160],[128178],[128177],[169,65039],[174,65039],[8482,65039],[128282],[128281],[128283],[128285],[128284],[9745],[128280],[9898],[9899],[128308],[128309],[128313],[128312],[128310],[128311],[128314],[9642],[9643],[9724],[9723],[128315],[11035],[11036],[9726],[9725],[128306],[128307],[128264],[128265],[128266],[128263],[128227],[128226],[128276],[126980],[128277],[127183],[9824],[9827],[9829],[9830],[127924],[128065,65039,8205,128488,65039],[128488],[128173],[128495],[128172],[128336],[128337],[128338],[128339],[128340],[128341],[128342],[128343],[128344],[128345],[128346],[128347],[128348],[128349],[128350],[128351],[128352],[128353],[128354],[128355],[128356],[128357],[128358],[128359],[127542],[127568],[127545],[127514],[127538],[127569],[127544],[127540],[127539],[12951,65039],[12953,65039],[127546],[127541]]},{name:g._("Flags"),icon:[983041],emojis:[[127482,127480],[127462,127466],[127483,127475],[127462,127481],[127462,127482],[127487,127462],[127463,127466],[127463,127479],[127464,127462],[127464,127469],[127464,127473],[127464,127475],[127464,127476],[127465,127466],[127465,127472],[127466,127480],[127467,127470],[127467,127479],[127468,127463],[127469,127472],[127470,127465],[127470,127466],[127470,127473],[127470,127475],[127470,127481],[127471,127477],[127472,127479],[127474,127476],[127474,127485],[127474,127486],[127475,127473],[127475,127476],[127475,127487],[127477,127469],[127477,127473],[127477,127479],[127477,127481],[127479,127482],[127480,127462],[127480,127466],[127480,127468],[127481,127479]]}];e.exports={categories:a}}),null);
__d("ChatEmojiPickerButton.react",["cx","fbt","Image.react","ImmutableObject","Keys","MessengerHotLikePreviewEvents","MessengerHotLikeUtils","React","MercuryMessageObject","StickerConstants","clearTimeout","setTimeoutAcrossTransitions","withMessengerSource"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MercuryMessageObject").get();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=null,d.$3=null,d.$6=function(a){a.stopPropagation(),d.props.onClick(d.props.emojiData.emojiCodes,d.refs.div)},d.$7=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),d.props.onClick(d.props.emojiData.emojiCodes,d.refs.div))},d.$8=function(a){a.preventDefault();a.stopPropagation();if(a.button!==0)return;!d.props.enableHotEmoji?d.$1=setTimeout(d.$10,1e3):(d.$1=setTimeout(function(){d.$3=Date.now(),d.$11(),d.$12()},500),d.props.onMouseDown&&d.props.onMouseDown())},d.$9=function(a){a.stopPropagation();b("clearTimeout")(d.$1);if(d.props.enableHotEmoji){if(!(d.props.threadID&&d.$3))return;d.$3=0;d.$14();d.$15()}},d.$10=function(){d.props.onLongPress(d.props.emojiData.emojiCodes,d.refs.div)},d.$16=function(){if(!d.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP,d.props.threadID)},d.$4=function(){d.$3&&(d.$3=0,d.$14(),d.$16())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.$4(),b("clearTimeout")(this.$1),b("clearTimeout")(this.$2)};d.render=function(){return b("React").createElement("div",{"aria-label":this.$5(),onClick:this.$6,onKeyDown:this.$7,onMouseDown:this.$8,onMouseLeave:this.$4,onMouseUp:this.$9,ref:"div",role:"button",tabIndex:"0"},b("React").createElement(b("Image.react"),{className:"_1lih _1ift _1ifu",style:{margin:0},src:this.props.emojiData.uri}))};d.$5=function(){return h._("Pick emoji {emoji choice}",[h._param("emoji choice",String.fromCodePoint.apply(String,this.props.emojiData.emojiCodes))])};d.$11=function(){this.$10();if(!this.props.threadID)return;var a=this.$13();b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START,a,this.props.threadID,this.props.emojiData.emojiCodes)};d.$15=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP_EMOJI,this.props.threadID,!0)};d.$12=function(){this.$14(),this.$2=b("setTimeoutAcrossTransitions")(this.$16,b("MessengerHotLikeUtils").SizeTimes.large)};d.$14=function(){b("clearTimeout")(this.$2)};d.$13=function(){__p&&__p();var a=this.props.threadID;if(!a)return null;a=i.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID,this.props.source,a);i.normalizeNewMessage(a);a.is_like_preview=!0;a.like_preview_since=this.$3;a.customLike=this.props.emojiData;a.body="";return new(b("ImmutableObject"))(a)};return c}(b("React").PureComponent);c.propTypes={emojiData:a.object.isRequired,enableHotEmoji:a.bool,onClick:a.func.isRequired,onLongPress:a.func.isRequired,threadID:a.string};e.exports=b("withMessengerSource")(c)}),null);
__d("ChatEmojiPicker.react",["cx","Bootloader","ChatEmojiPickerButton.react","ChatEmojiSkinToneSelector.react","EmojiActions","EmojiFormat.bs","EmojiLikeConstants","Grid.react","MessengerEmojiTransitionMapping.bs","MessengerHotLikePreviewEvents","MessengerSupportedEmojiUtils","React","SkinToneEmoji.bs","SubscriptionsHandler","gkx","joinClasses","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Grid.react").GridItem;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=!1,d.$2=null,d.state={clickedEmoji:null,selectedEmoji:[],toneSelectorShown:!1,toneSelectorContext:null},d.scrollToTop=function(a){if(d.refs.scrollable)if(d.refs.scrollable.scrollTo)try{d.refs.scrollable.scrollTo({top:0,behavior:a?"smooth":void 0})}catch(a){d.refs.scrollable.scrollTo(0,0)}else d.refs.scrollable.scrollTop=0},d.$8=function(a){if(d.props.shouldSaveEmojiColorChoice){var c=b("SkinToneEmoji.bs").getTone(a);b("EmojiActions").changeEmojiColor(c)}d.$9();d.props.onSelect&&d.props.onSelect(a)},d.$4=function(a,c){d.props.shouldSaveEmojiColorChoice&&d.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?(d.$10(a,c),d.$1=!1):d.$1?d.$1=!1:d.$8(a)},d.$5=function(a,c){d.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?d.$10(a,c):d.setState({clickedEmoji:a}),d.$1=!0},d.$7=function(){d.$1||d.$3()},d.$6=function(){d.$3();var a=d.refs.scrollable;typeof d.props.onScroll==="function"&&a&&(a.scrollTop+a.clientHeight+100>=a.scrollHeight-20&&(d.props.onScroll&&d.props.onScroll()))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").START,function(c,d,e){e&&a.props.useSkinToneSelector&&!b("SkinToneEmoji.bs").hasVariations(e)&&a.state.toneSelectorShown&&a.$3()}),b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION,function(c,d,e){c===a.props.threadID&&(e&&a.state.clickedEmoji&&a.props.sendCustomEmoji&&(a.props.sendCustomEmoji({emoji:b("EmojiFormat.bs").codeArrayToUnicode(a.state.clickedEmoji)},e,b("EmojiLikeConstants").source.PICKER),a.setState({clickedEmoji:null})))}))};d.componentWillUnmount=function(){this.$2&&this.$2.release()};d.render=function(){__p&&__p();var a=this,c=!b("gkx")("705411")||this.props.useMessengerSupportedEmoji,d=this.props.emojiChoices.map(function(d){var e=String.fromCodePoint.apply(String,d),f=a.props.enableHotEmoji||!b("SkinToneEmoji.bs").hasVariations(d),g=d;if(c&&!b("MessengerSupportedEmojiUtils").isMessengerSupportedEmojiKey(b("EmojiFormat.bs").codeArrayToCodeString(g)))return null;b("MessengerEmojiTransitionMapping.bs").hasGender(g)&&(g=b("MessengerEmojiTransitionMapping.bs").makeFemale(g));if(b("MessengerEmojiTransitionMapping.bs").isBlacklisted(g))return null;var i=b("MessengerSupportedEmojiUtils").getUrl(b("EmojiFormat.bs").codeArrayToCodeString(g),a.props.emojiSize?a.props.emojiSize:b("EmojiLikeConstants").size.SMALL);return i?b("React").createElement(h,{key:d.join("_"),className:"_3-sy _3dyd"+(e===a.props.currentEmoji?" _4w0j":"")},b("React").createElement("div",{className:(e===a.props.currentEmoji?"_4rlt":"")+" _4rlu"},b("React").createElement(b("ChatEmojiPickerButton.react"),{emojiData:{emojiCodes:g,uri:i},enableHotEmoji:f,onClick:a.$4,onLongPress:a.$5,threadID:a.props.threadID}))):null}).filter(function(a){return!!a});return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_6f3k"),onScroll:this.$6,ref:"scrollable"},b("React").createElement(b("Grid.react"),{cols:this.props.columns,alignh:this.props.alignh,className:"_3-s_ _3ecb"},d),this.props.useSkinToneSelector?b("React").createElement(b("ChatEmojiSkinToneSelector.react"),{context:this.state.toneSelectorContext,emojiCodes:this.state.selectedEmoji,onBlur:this.$7,onSelect:this.$8,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,shown:this.state.toneSelectorShown,threadID:this.props.threadID}):null)};d.$9=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"select_emoji","",0,a),b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"ChatEmojiPicker.react")};d.$10=function(a,b){this.setState({toneSelectorShown:!0,selectedEmoji:a,toneSelectorContext:b})};d.$3=function(){this.setState({toneSelectorShown:!1})};return c}(b("React").PureComponent);c.propTypes={className:a.string,columns:a.number,currentEmoji:a.string,emojiChoices:a.arrayOf(a.arrayOf(a.number)).isRequired,enableHotEmoji:a.bool,onSelect:a.func,sendCustomEmoji:a.func,shouldSaveEmojiColorChoice:a.bool,threadID:a.string,useSkinToneSelector:a.bool,useMessengerSupportedEmoji:a.bool};c.defaultProps={columns:7,useSkinToneSelector:!1};e.exports=c}),null);
__d("ChatEmojiSkinToneFlyout.react",["cx","fbt","ChatEmojiPicker.react","MessengerEmojiConfig","React","SkinToneEmoji.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=[];if(this.props.emojiCodes.length>0){var c=b("SkinToneEmoji.bs").removeTone(this.props.emojiCodes);a=b("MessengerEmojiConfig").emoji_colors.map(function(a){return b("SkinToneEmoji.bs").applyTone(c,a)})}var d=null;this.props.shouldSaveEmojiColorChoice&&(d=b("React").createElement("div",{className:"_4gww"},h._("Pick one. You can change it anytime in Settings.")));return b("React").createElement("div",null,d,b("React").createElement(b("ChatEmojiPicker.react"),{className:this.props.className,columns:6,emojiChoices:a,enableHotEmoji:!0,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,threadID:this.props.threadID}))};return c}(b("React").PureComponent);c.propTypes={className:a.string,emojiCodes:a.arrayOf(a.number).isRequired,onSelect:a.func.isRequired,sendCustomEmoji:a.func,shouldSaveEmojiColorChoice:a.bool,threadID:a.string};e.exports=c}),null);
__d("ChatEmojiSkinToneSelector.react",["cx","fbt","ChatEmojiSkinToneFlyout.react","ContextualLayerAutoFlip","React","XUIContextualDialog.react","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=276;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip")},context:this.props.context,contextRef:b("emptyFunction"),label:h._("Skintone Selector"),onBlur:this.props.onBlur,onToggle:this.$1,shown:this.props.shown,width:i},b("React").createElement(b("ChatEmojiSkinToneFlyout.react"),{className:"_2ejf",emojiCodes:this.props.emojiCodes,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,threadID:this.props.threadID}))};return c}(b("React").PureComponent);c.propTypes={context:a.instanceOf(HTMLElement),emojiCodes:a.arrayOf(a.number).isRequired,onBlur:a.func.isRequired,onSelect:a.func.isRequired,sendCustomEmoji:a.func,shouldSaveEmojiColorChoice:a.bool,shown:a.bool,threadID:a.string};e.exports=c}),null);