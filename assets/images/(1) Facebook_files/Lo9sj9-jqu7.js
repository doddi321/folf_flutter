if (self.CavalryLogger) { CavalryLogger.start_js(["LhoI6"]); }

__d("stylex",["requireCond","cr:972580","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("cr:972580").rootStyleSheet;g.injectTheme();function h(a){return a.reduce(function(a,b){return Array.isArray(b)?[].concat(a,h(b)):[].concat(a,[b])},[])}function i(){__p&&__p();for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=h(b),e={},f={};for(var g=d,i=Array.isArray(g),j=0,g=i?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=g.length)break;k=g[j++]}else{j=g.next();if(j.done)break;k=j.value}var l=k;if(l!=null&&typeof l==="object")for(var m in l){var n=l[m];typeof n==="string"&&(e[m]=n);if(typeof n==="object"){var o;f[m]=(o=f[m])!=null?o:{};Object.assign(f[m],n)}}}var p=Object.values(e),q=Object.values(f).map(function(a){return Object.values(a)}).reduce(function(a,b){return[].concat(a,b)},[]);return[].concat(p,q).filter(Boolean).join(" ")}function a(a){throw b("unrecoverableViolation")("stylex.create should never be called. It should be compiled away.","comet_ui")}i.create=a;i.keyframes=function(a){throw b("unrecoverableViolation")("stylex.keyframes should never be called","comet_ui")};i.inject=function(a,b,c){c===void 0&&(c=null),g.insert(a,b,c)};i.dedupe=function(){return i.apply(void 0,arguments)};i.absoluteFill={bottom:0,boxSizing:"border-box",end:0,position:"absolute",start:0,top:0};i.absoluteCenter={boxSizing:"border-box",left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"};i.blockBase={borderStyle:"solid",borderWidth:0,boxSizing:"border-box",display:"block",flexGrow:1,flexShrink:1,margin:0,padding:0,position:"relative",zIndex:0};c=babelHelpers["extends"]({},i.blockBase,{display:"inline"});i.inlineBase=c;i.buttonBase={appearance:"none",backgroundColor:"transparent",borderStyle:"solid",borderWidth:0,boxSizing:"border-box",margin:0,padding:0,position:"relative",textAlign:"inherit",zIndex:0};i.flexBase={alignItems:"stretch",borderStyle:"solid",borderWidth:0,boxSizing:"border-box",display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,justifyContent:"space-between",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",zIndex:0};i.flexInlineBase=babelHelpers["extends"]({},i.flexBase,{display:"inline-flex"});i.linkBase={backgroundColor:"transparent",backgroundImage:"none",boxSizing:"border-box",color:"inherit",cursor:"pointer",position:"relative",textDecoration:"none",zIndex:0};i.listBase={boxSizing:"border-box",listStyle:"none",marginBottom:0,marginTop:0,paddingStart:0};e.exports=i}),3);
__d("FBOverlayElement.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h={horizontal:{left:"_32rg",right:"_32rh",fit:"_32rg _32rh",center:"_1cy5"},vertical:{top:"_32ri",bottom:"_32rj",fit:"_32ri _32rj",middle:"_1cy6"}};c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").Children.only(this.props.children),c=b("joinClasses")(a.props.className,"_32rk",h.horizontal[this.props.horizontal],h.vertical[this.props.vertical]);return b("React").cloneElement(a,{className:c})};return c}(b("React").PureComponent);c.propTypes={horizontal:a.oneOf(["left","right","fit","center"]),vertical:a.oneOf(["top","bottom","fit","middle"])};c.defaultProps={horizontal:"fit",vertical:"fit"};e.exports=c}),null);
__d("getSUIDropdownButtonUniform.fds",["ix","cssVar","FDSPrivateThemeAtomsType","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=a.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;return{use:{"default":{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:a?g("786072"):g("481883"),srcDisabled:g("482773"),style:{marginRight:"-2px"}}),disabled:{background:"#EBEDF0",borderColor:"#DADDE1",color:"#BEC3C9"}},confirm:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#AAC9FF",borderColor:"#AAC9FF",color:"#FFFFFF"}},special:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#86DF81",borderColor:"#86DF81",color:"#FFFFFF"}},flat:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:a?g("786072"):g("481883"),srcDisabled:g("482773"),style:{marginRight:"-2px"}}),disabled:{background:"transparent",borderColor:"transparent",color:"#BEC3C9"}},flatWhite:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("481883"),style:{marginRight:"-2px"}}),disabled:{background:"transparent",borderColor:"transparent",color:"rgba(255, 255, 255, 0.4)"}}},padding:"12px"}}e.exports=a}),null);
__d("FDSDropdownButton.react",["FDSButton.react","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","React","SUIBorderUtils","SUIButtonContext","autoFlipStyleProps","getSUIButtonUniform.fds","getSUIDropdownButtonUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo,h=b("makeSUIThemeGetter")({SUIButton:b("getSUIButtonUniform.fds"),SUISelectorButton:b("getSUIDropdownButtonUniform.fds")}),i={isFixedWidthPadded:!0};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.context,d=h(c);c=c.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;a=(a=d.SUISelectorButton.use[n(this.props.use)])!=null?a:d.SUISelectorButton.use["default"];var e=this.props.labelIsHidden&&this.props.icon==null;return b("React").createElement(b("SUIButtonContext").Provider,{value:i},b("React").createElement(b("FDSButton.react"),{"aria-haspopup":!0,"aria-pressed":null,borderedSides:this.props.borderedSides,"data-testid":this.props["data-testid"],icon:this.props.icon,iconAfter:b("React").createElement(k,{isGeo:c,isOnlyIcon:e,size:this.props.size,theme:d,width:this.props.width},a.chevron),id:this.props.id,isDepressed:this.props.isDepressed,isDisabled:this.props.isDisabled,label:this.props.label,labelIsHidden:this.props.labelIsHidden,margin:this.props.margin,maxWidth:this.props.maxWidth,onBlur:this.props.onBlur,onClick:this.props.onClick,onFocus:this.props.onFocus,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onMouseDown:this.props.onMouseDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onMouseUp:this.props.onMouseUp,rel:this.props.rel,roundedCorners:this.props.roundedCorners,size:this.props.size,textAlign:this.props.textAlign,tooltip:this.props.tooltip,tooltipDelay:this.props.tooltipDelay,tooltipPosition:this.props.tooltipPosition,type:this.props.type,use:this.props.use,width:this.props.width}))};return c}(b("React").PureComponent);a.contextType=b("FDSPrivateThemeContext.react");a.defaultProps={borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default"};var j={display:"flex",justifyContent:"flex-end",flexGrow:1};function k(a){__p&&__p();var c=a.children,d=a.isGeo,e=a.isOnlyIcon,f=a.size,h=a.style,i=a.theme,k=a.width;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","isGeo","isOnlyIcon","size","style","theme","width"]);i=i.SUIButton.padding[m(f)];var n=i.button,o=i.onlyIcon;f=g(function(){var a;if(c==null)return null;a=b("autoFlipStyleProps")({marginRight:(a=c.props.style)==null?void 0:a.marginRight,marginLeft:(a=c.props.style)==null?void 0:a.marginLeft});var f=l(h==null?void 0:h.marginRight,a==null?void 0:a.marginRight);a=l(h==null?void 0:h.marginLeft,a==null?void 0:a.marginLeft);var g=parseInt(n,10)-parseInt(o,10);g=d&&e?{marginRight:-g,marginLeft:-g}:null;return babelHelpers["extends"]({},h,f!=null?{marginRight:f}:null,a!=null?{marginLeft:a}:null,g)},[c,h,n,o,d,e]);if(c==null)return null;i=b("React").cloneElement(c,babelHelpers["extends"]({},a,{style:f}));return k==null||k==="auto"?i:b("React").createElement("span",{style:j},i)}function l(a,b){if(a==null&&b==null)return null;a=a!=null?parseInt(a,10):0;b=b!=null?parseInt(b,10):0;return a+b+"px"}function m(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function n(a){return a==="primary"?"confirm":a}e.exports=b("makeFDSStandardComponent")("FDSDropdownButton",a)}),null);
__d("PhotoZoomCropImageConstants",[],(function(a,b,c,d,e,f){"use strict";a={TOP:"top",MIDDLE:"middle"};e.exports.DRAG_INSTRUCTION_POSITION=a}),null);
__d("SpotlightProfilePicCropOptions",[],(function(a,b,c,d,e,f){__p&&__p();var g=2.5,h=.8,i=320,j={getOptions:function(a,b,c){c===void 0&&(c=i);var d={},e=Math.min(b.x,b.y),f,j,k=a.facebox;k?(j=Math.max(k.size.x*b.x,k.size.y*b.y)*g,f=k.center):(j=h*e,a.focus&&(f=a.focus));k=b.x/a.original.width;d.height=d.width=Math.min(Math.max(j,c*k),e);f&&(d.center_x=Math.min(Math.max(f.x*b.x,d.width/2),b.x-d.width/2),d.center_y=Math.min(Math.max(f.y*b.y,d.height/2),b.y-d.height/2));return d},getOptionsAsRatio:function(a,b,c){c===void 0&&(c=i);a=j.getOptions(a,b,c);c=Math.min(b.x,b.y);return{center:{x:a.center_x?a.center_x/b.x:.5,y:a.center_y?a.center_y/b.y:.5},size:{x:a.width/c,y:a.height/c}}}};e.exports=j}),null);
__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],(function(a,b,c,d,e,f){__p&&__p();var g=320,h=.5,i=.5,j=180,k=.05,l=3;function m(a,b){return Number(a.toFixed(b||l))}a=function(){"use strict";__p&&__p();var a=c.prototype;a.clone=function(){return new c(this.$2).setSize(this.$3.x,this.$3.y).setSmallestSize(this.$4.x,this.$4.y).setCenter(this.$1.x,this.$1.y).setZoom(this.$5)};function c(a){this.$2=a,this.setSmallestSize(j,j).setCenter(h,h),this.setSize(g,g).setZoom(i)}a.getArea=function(){var a=this.getPosition(),b=this.$3.div(this.$5);return{height:Math.round(b.y),width:Math.round(b.x),x:Math.round(Math.abs(a.left)/this.$5),y:Math.round(Math.abs(a.top)/this.$5)}};a.getPosition=function(){var a=this.$6();return{height:m(a.imageSize.y),left:m(this.$3.x/2-a.center.x),top:m(this.$3.y/2-a.center.y),width:m(a.imageSize.x)}};a.getRect=function(){var a=this.$6(),b=this.$3.div(this.$5);return{center:{x:a.center.x/a.imageSize.x,y:a.center.y/a.imageSize.y},size:{x:b.x,y:b.y}}};a.getSize=function(){return this.$3};a.getCenter=function(){return this.$1};a.getZoom=function(){return this.$5};a.getZoomRange=function(){var a=Math.min(this.$2.x,this.$2.y);return{max:this.$3.x/Math.min(this.$4.x,a),min:Math.max(this.$3.x/this.$2.x,this.$3.y/this.$2.y)}};a.hasSpaceToDrag=function(){var a=this.getZoomRange();return!(c.isSquare(this.$2)&&a.min===a.max)};a.isCurrentlyDragable=function(){var a=this.$6().imageSize;return a.x!==this.$3.x||a.y!==this.$3.y};a.moveByPixels=function(a,b){var c=this.$6();return this.moveBy(a/c.imageSize.x,b/c.imageSize.y)};a.moveBy=function(a,b){this.setCenter(this.$1.x+a,this.$1.y+b);a=this.$6();this.$1=a.center.div(a.imageSize.x,a.imageSize.y);return this};a.setCenter=function(a,c){this.$1=new(b("BasicVector"))(b("clamp")(a,0,1),b("clamp")(c,0,1));return this};a.setSize=function(a,c){this.$3=new(b("BasicVector"))(a,c);return this};a.setRatio=function(a,b){var c=this.$3.x*this.$3.y;a=Math.sqrt(c*a/b);return this.setSize(a,c/a)};a.setSmallestSize=function(a,c){this.$4=new(b("BasicVector"))(a,c);return this};a.setZoom=function(a){var c=this.getZoomRange();this.$5=b("clamp")(a,c.min,c.max);return this};a.cloneAndZoom=function(a){var b=this.clone();b.setZoom(a);return b};a.cloneAndMove=function(a,b){var c=this.clone();c.moveByPixels(a,b);return c};a.$7=function(a,c){var d=this.$3.x/2,e=this.$3.y/2;return new(b("BasicVector"))(b("clamp")(c.x,d,a.x-d),b("clamp")(c.y,e,a.y-e))};a.$6=function(){var a=this.$2.mul(this.$5);return{imageSize:a,center:this.$7(a,this.$1.mul(a.x,a.y))}};c.isSquare=function(a){return Math.abs(a.x/a.y-1)<k};c.fromProfilePhotoData=function(a,d){var e=new(b("BasicVector"))(a.original.width,a.original.height),f=new c(e);d?d=d:a.previousprofilepic?d=a.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}}:d=b("SpotlightProfilePicCropOptions").getOptionsAsRatio(a,e);d.center&&f.setCenter(d.center.x,d.center.y);if(d.size&&d.size.x){a=d.size.x*e.x;f.setZoom(f.getSize().x/a)}return f};return c}();e.exports=a}),null);
__d("PhotoZoomCropImagePreview.react",["cx","Image.react","PhotoZoomCropDimensions","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.dimensions;a=a.size;var d=c.getSize().x/a.x;d!==1&&(c=c.clone().setSize(a.x,a.y).setZoom(c.getZoom()/d));d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_1_fc"+(this.props.circular?" _3np9":"")},this.props.overlay));return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_1k3v"+(this.props.circular?" _3np9":"")),style:babelHelpers["extends"]({},this.props.style||{},{height:a.y,width:a.x})}),b("React").createElement(b("Image.react"),{className:"_1k3w",src:this.props.src,style:c.getPosition()}),d)};return c}(b("React").Component);c.propTypes={dimensions:a.instanceOf(b("PhotoZoomCropDimensions")).isRequired,overlay:a.element,size:a.shape({x:a.number.isRequired,y:a.number.isRequired}).isRequired,src:a.oneOfType([a.string,a.object])};e.exports=c}),null);
__d("PhotoZoomCropImage.react",["cx","fbt","ix","Event","Image.react","Keys","PhotoZoomCropImageConstants","PhotoZoomCropImagePreview.react","React","UserAgent","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j=5;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={moved:!1},d.$6=function(a){__p&&__p();d.$2=null;var c=0,e=0;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:e=j;break;case b("Keys").LEFT:c=-j;break;case b("Keys").RIGHT:c=j;break;case b("Keys").UP:e=-j;break}(c||e)&&(d.props.onMove(c,e),d.setState({moved:!0}))},d.$7=function(a){d.$9(a,b("Vector").getEventPosition(a))},d.$8=function(a){d.$9(a,b("Vector").getTouchEventPosition(a))},d.$3=function(a){d.$10(b("Vector").getEventPosition(a))},d.$4=function(a){d.$10(b("Vector").getTouchEventPosition(a))},d.$5=function(){d.$2=null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(a,{mousemove:this.$3,touchmove:this.$4,mouseup:this.$5,touchend:this.$5})};d.componentWillUnmount=function(){if(this.$1)for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};d.render=function(){__p&&__p();var a=this.props.dimensions,c=a.getSize(),d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_290-"},this.props.overlay));var e=null;if(this.props.customControls)e=b("React").createElement("div",{className:this.props.enableDrag?"":"_3dfz"},this.props.customControls);else{var f=this.props.moveStatus!==void 0?this.props.moveStatus:this.state.moved;e=b("React").createElement("div",{className:(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.MIDDLE?"_6aza":"")+(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP?" _3dfy":"")+(f||!this.props.enableDrag?" _3dfz":"")},b("React").createElement("span",{className:"_3df-"},b("React").createElement(b("Image.react"),{className:"_3-8_ _3df_",src:i("22701")}),h._("Drag to Reposition")))}f=this.props;var g=f.altText;f=babelHelpers.objectWithoutPropertiesLoose(f,["altText"]);return b("React").createElement("div",babelHelpers["extends"]({},f,{className:b("joinClasses")(this.props.className,"_4on5"),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x})}),b("React").createElement(b("PhotoZoomCropImagePreview.react"),{circular:this.props.circular,dimensions:a,onKeyDown:this.$6,overlay:this.props.overlay,size:c,src:this.props.src,tabIndex:this.props.isTabbable?0:null}),e,b("React").createElement("div",{className:"_4on8"},b("React").createElement(b("Image.react"),{className:"_4on7"+(this.props.enableDrag?"":" _3mk2"),onDragStart:b("Event").prevent,onMouseDown:this.$7,onTouchStart:this.$8,src:this.props.src,alt:g,style:a.getPosition()}),d))};d.$9=function(a,b){if(this.$2)return;this.props.stopPropagation?a.stopPropagation():a.preventDefault();this.$2=b};d.$10=function(a){var b=this.$2;if(!b||!this.props.enableDrag)return;b=b.sub(a);this.props.onMove(b.x,b.y);this.setState({moved:!0});this.$2=a};return c}(b("React").Component);c.propTypes={circular:a.bool,customControls:a.element,dimensions:a.object,enableDrag:a.bool,onMove:a.func,overlay:a.element,src:a.oneOfType([a.string,a.object]),altText:a.string,moveStatus:a.bool,dragPosition:a.string,isTabbable:a.bool};c.defaultProps={circular:!1,enableDrag:!0,dragPosition:b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP,isTabbable:!0};e.exports=c}),null);
__d("PhotoZoomCropMixin",["ix","cx","invariant","xuiglyph","Image.react","React"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a={getDimensions:function(){return this._dims},resetDimensions:function(){this.setState(this.getInitialState())},_handleMove:function(a,b){this._dims.moveByPixels(a,b),this.setState(this._getDimensionsState())},_handleZoom:function(a,b){this._dims.setZoom(a[0]);var c=this._getDimensionsState();c.position=b||a[0];this.setState(c)},_getDimensionsState:function(){return{dimensions:this._dims.getPosition(),zoom:this._dims.getZoom()}},_getMessage:function(){var a,b;this.__getZoom||i(0,104);if(this.__getZoom()>1&&this.props.warningText)a=g("89108"),b=this.props.warningText;else if(this.props.messageText)a=g("89336"),b=this.props.messageText;else return null;return this._getMessageMarkup(a,b)},_getMessageMarkup:function(a,c){return b("React").createElement("div",{className:"_aym"},b("React").createElement(b("Image.react"),{className:"_a63",src:a}),c)}};e.exports=a}),null);
__d("PagesProfileTestID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COVER_PHOTO_EDIT_MENU:"cover_photo_edit_menu",COVER_PHOTO_REMOVE_MENU_ITEM:"cover_photo_remove_menu_item",COVER_PHOTO_UPLOAD_MENU_ITEM:"cover_photo_upload_menu_item",COVER_PHOTO_SAVE_BUTTON:"cover_photo_save_button",COVER_PHOTO_REMOVE_CONFIRM_BUTTON:"cover_photo_remove_confirm_button",PROFILE_PICTURE_EDIT_MENU:"profile_picture_edit_menu",PROFILE_PICTURE_REMOVE_MENU_ITEM:"profile_picture_remove_menu_item",PROFILE_PICTURE_UPLOAD_MENU_ITEM:"profile_picture_upload_menu_item",UNLIKE_PAGE_ITEM:"page_unlike_item_test_id",UNFOLLOW_PAGE_ITEM:"page_unfollow_item_test_id",SEE_FIRST_ITEM:"page_see_first_item_test_id",DEFAULT_FOLLOW_ITEM:"page_default_follow_item_test_id",FOLLOW_BUTTON_ID:"_follow_button_test_id",FOLLOWED_BUTTON_ID:"_followed_button_test_id",LIKE_BUTTON_ID:"_like_button_test_id",LIKED_BUTTON_ID:"_liked_button_test_id"})}),null);
__d("ProfileHeaderSpinner.react",["cx","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return!this.props.shown?null:b("React").createElement("div",{className:"_5mb0"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))};return c}(b("React").Component);e.exports=a}),null);
__d("ProfileHeaderViewShapes",["React"],(function(a,b,c,d,e,f){a=b("React").PropTypes;c=a.shape({focus:a.shape({height:a.number,width:a.number}),original:a.shape({height:a.number,width:a.number}),permalinkURI:a.string,source:a.number,uri:a.string,altText:a.string});e.exports={COVER_PHOTO_DATA:c}}),null);
__d("ProfileWizardStrings",["fbt"],(function(a,b,c,d,e,f,g){a={CANCEL:g._("Cancel"),CHOOSE_FROM_MY_PHOTOS:g._("Choose From My Photos"),COVER_PHOTO_CHANGE_NOTICE:g._("Change your cover photo any time from the camera icon."),COVER_PHOTO_LEAVE_WARNING:g._("The changes you made to your cover photo haven't been saved."),PROFILE_PICTURE_CHANGE_NOTICE:g._("Change your profile picture any time from the camera icon."),SAVE:g._("Save"),UPDATE_COVER_PHOTO:g._("Update Cover Photo"),UPLOAD_PHOTO:g._("Upload Photo"),UPDATE_PROFILE_PICTURE:g._("Update Profile Picture")};e.exports=a}),null);
__d("ProfileHeaderCoverPhoto.react",["ix","cx","BasicVector","Image.react","PagesProfileTestID","PhotoZoomCropDimensions","PhotoZoomCropImage.react","PhotoZoomCropMixin","ProfileHeaderSpinner.react","ProfileHeaderViewShapes","ProfileWizardStrings","React","ReactComponentWithPureRenderMixin","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ProfileHeaderCoverPhoto",_dims:null,mixins:[b("PhotoZoomCropMixin"),b("ReactComponentWithPureRenderMixin")],propTypes:{coverPhotoData:b("ProfileHeaderViewShapes").COVER_PHOTO_DATA.isRequired,customControls:a.element,dragPosition:a.string,emptyCover:a.element,height:a.number.isRequired,hideDefaultButtons:a.bool,index:a.number,isHidden:a.bool,isLoading:a.bool,isRequestFromContextItems:a.bool,isTabbable:a.bool,moveStatus:a.bool,onMove:a.func,previewCancelHandler:a.func,previewMode:a.bool,previewSaveHandler:a.func,width:a.number.isRequired},getDefaultProps:function(){return{hideDefaultButtons:!1,onMove:function(){},previewCancelHandler:function(){},previewSaveHandler:function(){}}},getInitialState:function(){this._updateDimensions(this.props.coverPhotoData);return babelHelpers["extends"]({},this._getUpdatedDimensionsState())},UNSAFE_componentWillReceiveProps:function(a){__p&&__p();var b=this.props.coverPhotoData;if(b.id===a.coverPhotoData.id&&this.props.previewMode===a.previewMode&&this.props.width===a.width){b=b.focus;if(!b)return;if(b.width===a.coverPhotoData.focus.width&&b.height===a.coverPhotoData.focus.height)return}this._updateDimensions(a.coverPhotoData,a.height,a.width);this.setState(babelHelpers["extends"]({},this._getUpdatedDimensionsState()))},_updateDimensions:function(a,c,d){__p&&__p();var e=a.original;if(e==null)return;var f=new(b("BasicVector"))(e.width,e.height);f=new(b("PhotoZoomCropDimensions"))(f);f.setSize(d||this.props.width,c||this.props.height);d=a.focus;d&&f.setCenter(d.width,d.height);f.setZoom(f.getSize().x/e.width);this._dims=f},_getUpdatedDimensionsState:function(){return this._getDimensionsState()},_onMove:function(a,b){this._handleMove(a,b),this.props.onMove&&this.props.onMove(a,b,this.props.index)},render:function(){__p&&__p();var a=this.props.coverPhotoData;if(a.uri){var c=!!(this.props.previewMode&&this._dims&&this._dims.isCurrentlyDragable());c=b("React").createElement(b("PhotoZoomCropImage.react"),{altText:a.altText,className:"_2oru"+(this.props.isHidden||this.props.isLoading?" _2orv":""),customControls:this.props.customControls,dimensions:this._dims,dragPosition:this.props.dragPosition,enableDrag:c,isTabbable:this.props.isTabbable,moveStatus:this.props.moveStatus,onMove:this._onMove,src:a.uri})}else if(this.props.emptyCover)c=this.props.emptyCover;else{a=this.props.isRequestFromContextItems||null;a!==null?c=b("React").createElement("div",{className:"_6ld6"},b("React").createElement(b("Image.react"),{src:g("621934")})):c=b("React").createElement("div",{className:"_2orw"})}a=null;this.props.previewMode&&!this.props.customControls&&!this.props.hideDefaultButtons&&(a=b("React").createElement("div",{className:"_1tg",id:"fbProfileHeaderCoverPhotoControl"},b("React").createElement("div",{className:"_1th"},b("React").createElement(b("XUIButton.react"),{"data-testid":b("PagesProfileTestID").COVER_PHOTO_SAVE_BUTTON,label:b("ProfileWizardStrings").SAVE,onClick:this.props.previewSaveHandler,size:"large",use:"confirm"}),b("React").createElement(b("XUIButton.react"),{label:b("ProfileWizardStrings").CANCEL,onClick:this.props.previewCancelHandler,size:"large"}))));return b("React").createElement("div",{className:"_2orx",style:{height:this.props.height,width:this.props.width}},c,a,b("React").createElement(b("ProfileHeaderSpinner.react"),{shown:this.props.isLoading}))},getOffsets:function(){var a=this.getDimensions().getPosition();return{x:a.left/a.width,y:a.top/a.height}},getCenter:function(){var a=this.getDimensions().getRect();return a.center},__getZoom:function(){return this.state.zoom}});e.exports=c}),null);
__d("CollabCallTriggerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERN_SEARCH_MEETING_ROOM_UNIT:"intern_search_meeting_room_unit",MEETING_ROOM_MAP_DIALOG:"meeting_room_map_dialog",MEETING_ROOM_PAGE_PROFILE:"meeting_room_page_profile",QUICK_DIAL:"quickdial"})}),null);