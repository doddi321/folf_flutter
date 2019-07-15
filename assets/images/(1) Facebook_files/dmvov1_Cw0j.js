if (self.CavalryLogger) { CavalryLogger.start_js(["fzjGy"]); }

__d("TranslationRating",[],(function(a,b,c,d,e,f){e.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5}}),null);
__d("UFICommentLink.react",["cx","fbt","React","TrackingNodes","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("Leave a comment"),c='{ "tn": "'+b("TrackingNodes").encodeTN(b("TrackingNodes").types.COMMENT_LINK)+'", "type": 24 }';return b("React").createElement("a",{className:"comment_link _5yxe","data-testid":"fb-ufi-commentlink",role:"button",href:this.props.href?this.props.href:"#",title:a,ajaxify:this.props.ajaxify,rel:this.props.rel,onClick:this.props.onClick,"data-ft":c,ref:"root"},this.props.children)};return c}(b("React").Component);c.propTypes={onClick:a.func,href:a.string,ajaxify:a.string,rel:a.string};c.defaultProps={onClick:b("emptyFunction")};e.exports=c}),null);
__d("TranslationContentLabel",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({POST:"post",GENERIC:"generic"})}),null);
__d("ContentTranslationStrings",["fbt","TranslationContentLabel","TranslationRating"],(function(a,b,c,d,e,f,g){__p&&__p();a={SEE_TRANSLATION:g._("See Translation"),SEE_TRANSLATION_TIP:g._("Translate this comment"),NO_TRANSLATION_AVAILABLE:g._("No translation available"),AUTOMATICALLY_TRANSLATED:g._("Automatically Translated"),HIDE_ORIGINAL:g._("Hide original"),SEE_ORIGINAL:g._("See original"),SEE_ORIGINAL_LINK:g._("See Original"),UNDO:g._("Undo"),CANCEL:g._("Cancel"),SUBMIT:g._("Submit"),DONE:g._("Done"),CLOSE:g._("Close"),SEARCH:g._("Search"),ENTER_TRANSLATION:g._("Type your translation here"),EDIT_TRANSLATION_THANKS:g._("Thank you! Your feedback helps us improve our translation quality."),EDIT_TRANSLATION_DIALOG_TITLE_ERROR:g._("Submission Unsuccessful"),EDIT_TRANSLATION_MENU:g._("I have a better translation"),RATE_TRANSLATION:g._("Rate this translation"),I_DONT_KNOW:g._("I don't know"),NO_MATCHING_LANGUAGES:g._("No matching languages"),LANGUAGE_SETTINGS:g._("Language settings"),CLICK_TO_RATE:g._("Click a star to rate"),TAP_TO_RATE:g._("Tap a star to rate"),ORIGINAL_TEXT:g._("Original text:"),YOUR_TRANSLATION:g._("Your translation:"),SETTINGS_SAVED:g._("Language settings successfully saved."),REPORT_LANGUAGE_THANKS_FACEBOOK:g._("Thank you for letting us know about this error. Your feedback improves translation for everyone on Facebook."),REPORT_LANGUAGE_THANKS_WORKPLACE:g._("Thank you for letting us know about this error. Your feedback improves translation for everyone on Workplace."),LANGUAGE_SETTINGS_REMINDER:g._("You can change this at any time in your language settings."),CROWDSOURCING_TARGET_DIALECT_DIALOG:g._("Settings"),TRANSLATE_ALL_TEXT:g._("Translate All Comments"),NUM_TRANSLATIONS_TEXT:g._("translations"),getTranslatedFromTo:function(a,b){return g._("Translated from {source language} to {target language}",[g._param("source language",a),g._param("target language",b)])},getTranslatedFrom:function(a){return g._("Translated from {source language}",[g._param("source language",a)])},getReportLanguageDialogBody:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("Are you sure this content was not in {language}?",[g._param("language",a)]):g._("Are you sure this post was not in {language}?",[g._param("language",a)])},getReportLanguage:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("Content was not in {language}",[g._param("language",a)]):g._("Post was not in {language}",[g._param("language",a)])},getReportLanguageSelector:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("This content was actually in: {language selector}",[g._param("language selector",a)]):g._("This post was actually in: {language selector}",[g._param("language selector",a)])},getNeverTranslate:function(a){return g._("Never translate {language}",[g._param("language",a)])},getNeverTranslateDialog:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("Are you sure? Content in {language} won't be translated for you.",[g._param("language",a)]):g._("Are you sure? Posts in {language} won't be translated for you.",[g._param("language",a)])},getDisableAutoTranslate:function(a){return g._("Disable automatic translation for {dialect}",[g._param("dialect",a)])},getDisableAutoTranslateDialog:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("Are you sure? Content in {language} won't be automatically translated for you.",[g._param("language",a)]):g._("Are you sure? Posts in {dialect} won't be automatically translated for you.",[g._param("dialect",a)])},getUserFeedbackTitleForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("Very bad.");case b("TranslationRating").BAD:return g._("Bad.");case b("TranslationRating").OK:return g._("OK.");case b("TranslationRating").GOOD:return g._("Good.");case b("TranslationRating").VERY_GOOD:return g._("Very good.");default:return null}},getUserFeedbackDescriptionForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("I can't understand anything.");case b("TranslationRating").BAD:return g._("I can't understand most of this.");case b("TranslationRating").OK:return g._("I can understand enough of this.");case b("TranslationRating").GOOD:return g._("I can understand most of this.");case b("TranslationRating").VERY_GOOD:return g._("I can understand everything.");default:return null}}};e.exports=a}),null);
__d("XLtgPostTranslationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/see_translation/",{ftid:{type:"String",required:!0},text_size:{type:"Enum",defaultValue:"medium",enumType:1},data_ft:{type:"String"},tn:{type:"String"}})}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","UFIUIEvents","XLtgPostTranslationController","collectDataAttributes","ge","highlight"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={_renderTranslation:function(a,c){if(!a||!a.parentNode)return;var d=b("DOM").create("div",{className:"_63tb"},c||b("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);b("DOM").replace(a,d);c&&b("highlight")(d)},bindListener:function(a,c){__p&&__p();var d=this;b("Event").listen(a,"click",function(e){__p&&__p();e.prevent();var f=b("ge")("translationSpinnerPlaceholder_"+c);f&&b("ReactDOM").render(b("React").createElement(b("LoadingIndicator.react"),{size:"small",color:"white"}),f);f=e.getTarget();e=b("collectDataAttributes")(f,["ft"]);f=b("XLtgPostTranslationController").getURIBuilder().setString("ftid",c).setString("data_ft",JSON.stringify(e.ft)).getURI();new(b("AsyncRequest"))().setURI(f).setHandler(function(c){c=c.getPayload();d._renderTranslation(a,c&&c.text);b("Arbiter").inform(b("UFIUIEvents").TranslationRendered)}).setErrorHandler(function(){d._renderTranslation(a,null)}).send()})}};e.exports=a}),null);
__d("Droppable",["Collection","Drag","Draggable","Vector","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(c){__p&&__p();if(!c)throw new Error("Element should be a DOM node");if(!(this instanceof a))if(c instanceof Array){var d=[];c.forEach(function(b){d.push(new a(b))});return new(b("Collection"))(a,d)}else return new a(c);else this.data={},this.dom=c,this.namespace=null}var c=a.prototype;c.destroy=function(){this.namespace&&b("Drag").removeDroppable(this.namespace,this),this.data=this.dom=null};c.setNamespace=function(a){this.namespace&&b("Drag").removeDroppable(this.namespace,this);this.namespace=a;b("Drag").addDroppable(a,this);return this};c.setZIndex=function(a){this.zIndex=a;return this};c.hasPointMovedHorizontally=function(a){var c=b("Vector").getElementPosition(this.dom);return c.x<=a.x&&this.dom.offsetWidth+c.x>a.x};c.hasPointMovedVertically=function(a){var c=b("Vector").getElementPosition(this.dom);return c.y<=a.y&&this.dom.offsetHeight+c.y>a.y};c.hasPointMovedInside=function(a){return this.hasPointMovedHorizontally(a)&&this.hasPointMovedVertically(a)};c.setDragOverHandler=function(a){this.ondragover=a;return this};c.setDragOutHandler=function(a){this.ondragout=a;return this};c.setDragOverVectically=function(){this.isDraggedOver=a.prototype.hasPointMovedVertically;return this};c.setDragOverHorizontally=function(){this.isDraggedOver=a.prototype.hasPointMovedHorizontally;return this};c.setDragMoveHandler=function(a){this.ondragmove=a;return this};c.setDropHandler=function(a){this.ondrop=a;return this};return a}();a.prototype.zIndex=0;a.prototype.isDraggedOver=a.prototype.hasPointMovedInside;a.prototype.ondragover=b("emptyFunction");a.prototype.ondragout=b("emptyFunction");a.prototype.ondragmove=b("emptyFunction");a.prototype.ondrop=b("emptyFunction");a.prototype.getDOM=b("Draggable").prototype.getDOM;a.prototype.setKey=b("Draggable").prototype.setKey;a.prototype.getKey=b("Draggable").prototype.getKey;e.exports=a}),null);
__d("SortableGroup",["Arbiter","CSS","DOM","Draggable","Droppable","Style","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();c=function(){"use strict";__p&&__p();function a(){this.namespace="sortable"+ ++a.instanceCount,this.draggables={},this.droppables={},this.sortables={},this.linkedGroups=[],this.linkedGroups.onbeforelinkjump=b("emptyFunction"),this.linkedGroups.onlinkjump=b("emptyFunction"),this.rootNode=null,this.boundingBox=null,this.neverEmpty=!1,this.hasEmptyMessage=!1,this.isDroppable=!0,this.isDraggable=!0,this.useScroller=!0,this.dragOverCriteria="inside",this.requireSameParent=!0,this.previousIndexList=[],this.anchor=null,this.disabled=!1,this.autoWidth=!1,this.placeholderWidth=!1,this.placeholderHeight=!1}var c=a.prototype;c.addEmptyMessage=function(a,c){var d="placeholder";a.parentNode!=c&&b("DOM").appendContent(c,a);this.emptyMessage=a;this._initializeAdded(d,a);this.hasEmptyMessage=!0;this.sortables[d]=a;this.droppables[d]=new(b("Droppable"))(a).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,d));return this};c.setAutoWidth=function(a){this.autoWidth=a;return this};c.setPlaceholderWidth=function(a){this.placeholderWidth=a;return this};c.setPlaceholderHeight=function(a){this.placeholderHeight=a;return this};c.setUseScroller=function(a){this.useScroller=a;return this};c.setDragOverHorizontally=function(){this.dragOverCriteria="horizontal";return this};c.setDragOverVertically=function(){this.dragOverCriteria="vertical";return this};c.removeEmptyMessage=function(){this.emptyMessage&&b("DOM").remove(this.emptyMessage);this.hasEmptyMessage=!1;this.removeSortable("placeholder");return this};c.addSortable=function(a,c,d,e){this._initializeAdded(a,c);this.sortables[a]=c;this.draggables[a]=new(b("Draggable"))(c).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(!0).setUseScroller(this.useScroller).setGrabHandler(this.grabHandler.bind(this,a)).setDropHandler(this.dropHandler.bind(this,a,e)).setKey("key",a).setBoundingBox(this.boundingBox);d&&this.draggables[a].addHandle(d);this.droppables[a]=new(b("Droppable"))(c).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,a));this.dragOverCriteria==="horizontal"?this.droppables[a].setDragOverHorizontally():this.dragOverCriteria==="vertical"&&this.droppables[a].setDragOverVectically();return this};c.destroy=function(){for(var a in this.droppables)this.droppables[a].destroy();for(var c in this.draggables)this.draggables[c].destroy();this.droppables=this.draggables=this.rootNode=null;b("removeFromArray")(this.linkedGroups,this);for(var d=0;d<this.linkedGroups.length;d++)this.linkedGroups[d].linkedGroups=this.linkedGroups};c.dragOverHandler=function(a,b){__p&&__p();if(!this.isDroppable&&!this.anchor)return;var c=!1;if(!(b in this.draggables)){this.linkedGroups.onbeforelinkjump.call(this,b);if(!this.migrateLinkedSortable(b))throw new Error("Draggable dropped onto a foreign droppable!");c=!0}var d=!0,e=this.getSortables(),f=this.sortables[b],g=this.sortables[a];if(!this.anchor){var h=e.length;for(var i=0;i<h;i++)if(e[i]==g)break;else if(e[i]==f){d=!1;break}}else g=this.anchor;this.onbeforedragover(f,g);e=this.linkedGroups.placeholder;this.insertPlaceholder(e,g,d||this.anchor);e.parentNode.insertBefore(f,e);this.ondragover(f,g,b,a);c&&this.linkedGroups.onlinkjump.call(this,b)};c.dropHandler=function(a,c){__p&&__p();if(this._checkLastRemaining()){this.draggables[a].resetPosition();return}var d=this.linkedGroups.placeholder;b("CSS").removeClass(this.sortables[a],"drag");this.draggables[a].resetPosition();d.parentNode.insertBefore(this.sortables[a],d);d.parentNode.removeChild(d);for(var d=0;d<this.linkedGroups.length;d++)this.linkedGroups[d].anchor&&delete this.linkedGroups[d].anchor;this.ondropcallback(a,this.sortables[a]);this.onorderchange();this.previousIndexList.length===0&&(this.previousIndexList=Object.keys(this.sortables));d=this.previousIndexList.indexOf(a);a=this.getOrder().indexOf(a);b("Arbiter").inform("drag-and-drop/"+c,{previousIndex:d,currentIndex:a});this.previousIndexList=this.getOrder()};c.getOrder=function(){var a=[],b=this.getSortables();for(var c=0;c<b.length;c++)for(var d in this.sortables)if(this.sortables[d]==b[c]){a.push(d);break}return a};c.getSortables=function(){return this.rootNode?this.rootNode.childNodes:[]};c.grabHandler=function(a){__p&&__p();if(this.disabled||this._checkLastRemaining()||!this.isDraggable){this.draggables[a].killDrag();return}this.onbeforegrabcallback(this.sortables[a],a);var c=this.linkedGroups.placeholder,d=this.sortables[a];b("CSS").setClass(c,d.className);b("CSS").addClass(c,"droppable_placeholder");b("CSS").addClass(d,"drag");b("Vector").getElementDimensions(d).setElementDimensions(c);this.autoWidth?b("Style").set(c,"width","auto"):this.placeholderWidth&&b("Style").set(c,"width",this.placeholderWidth+"px");this.placeholderHeight&&b("Style").set(c,"height",this.placeholderHeight+"px");d.parentNode.insertBefore(c,d);this.ongrabcallback(this.sortables[a],a);this.isDroppable||(this.anchor=d.nextSibling,this.anchor||(this.anchor=b("DOM").create("div"),d.parentNode.appendChild(this.anchor)))};c.insertPlaceholder=function(a,c,d){d?b("DOM").insertBefore(c,a):b("DOM").insertAfter(c,a)};c.keyExists=function(a){return this.sortables[a]};c.link=function(a){__p&&__p();a.linkedGroups=this.linkedGroups;this.linkedGroups.length||this.linkedGroups.push(this);this.linkedGroups.push(a);for(var a=0;a<this.linkedGroups.length;a++)if(this.linkedGroups[a].namespace!=this.namespace){this.linkedGroups[a].namespace=this.namespace;for(var b in this.linkedGroups[a].droppables){this.linkedGroups[a].droppables[b].setNamespace(this.namespace);var c=this.linkedGroups[a].draggables[b];c&&c.setNamespace(this.namespace)}}return this};c.migrateLinkedSortable=function(a){__p&&__p();for(var b=0;b<this.linkedGroups.length;b++)if(a in this.linkedGroups[b].draggables){this.sortables[a]=this.linkedGroups[b].sortables[a];this.draggables[a]=this.linkedGroups[b].draggables[a];this.draggables[a].setGrabHandler(this.grabHandler.bind(this,a)).setDropHandler(this.dropHandler.bind(this,a));this.droppables[a]=this.linkedGroups[b].droppables[a];this.droppables[a].setDragOverHandler(this._dragOverHandlerShim.bind(this,a));delete this.linkedGroups[b].sortables[a];delete this.linkedGroups[b].draggables[a];delete this.linkedGroups[b].droppables[a];return!0}return!1};c.removeSortable=function(a){a in this.sortables&&(a in this.draggables&&this.draggables[a].destroy(),a in this.droppables&&this.droppables[a].destroy(),delete this.draggables[a],delete this.droppables[a],delete this.sortables[a])};c.removeAllSortables=function(){for(var a in this.sortables)this.removeSortable(a)};c.setDisabled=function(a){this.disabled=a;return this};c.forceDrop=function(a){a in this.sortables&&this.draggables[a].forceDrop()};c.killDrag=function(a){a in this.sortables&&this.draggables[a].killDrag()};c.setBeforeGrabCallback=function(a){this.onbeforegrabcallback=a;return this};c.setBoundingBox=function(a){this.boundingBox=a;for(var b in this.draggables)this.draggables[b].setBoundingBox(this.boundingBox);return this};c.setBeforeDragOverCallback=function(a){this.onbeforedragover=a;return this};c.setDragOverCallback=function(a){this.ondragover=a;return this};c.setDropCallback=function(a){this.ondropcallback=a;return this};c.setDroppable=function(a){this.isDroppable=a;return this};c.setDraggable=function(a){this.isDraggable=a;return this};c.setGrabCallback=function(a){this.ongrabcallback=a;return this};c.setBeforeLinkJumpHandler=function(a){this.linkedGroups.onbeforelinkjump=a;return this};c.setInsertPlaceholderHandler=function(a){this.insertPlaceholder=a};c.setLinkJumpHandler=function(a){this.linkedGroups.onlinkjump=a;return this};c.setNeverEmpty=function(a){this.neverEmpty=a};c.setOrderChangeHandler=function(a){this.onorderchange=a;return this};c.setRequireSameParent=function(a,b){this.requireSameParent=b};c.setSortablesGetter=function(a){this.getSortables=a};c._checkLastRemaining=function(a){a=this.hasEmptyMessage?2:1;return this.neverEmpty&&this.getSortables().length==a};c._dragOverHandlerShim=function(a,b){this.dragOverHandler(a,b.getKey("key"))};c._initializeAdded=function(a,c){if(this.rootNode===null)this.rootNode=c.parentNode,this.linkedGroups.placeholder||(this.linkedGroups.placeholder=b("DOM").create(c.tagName,{className:"dragPlaceholder",style:{padding:"0"}}));else if(this.requireSameParent&&this.rootNode!=c.parentNode)throw new Error("All sortables of a collection must share the same parentNode");if(a in this.draggables)throw new Error("All sortables must have a unique key")};return a}();c.instanceCount=0;Object.assign(c.prototype,{gutter:15,onbeforegrabcallback:b("emptyFunction"),onbeforedragover:b("emptyFunction"),ondragover:b("emptyFunction"),ondropcallback:b("emptyFunction"),ongrabcallback:b("emptyFunction"),onorderchange:b("emptyFunction")});e.exports=a.SortableGroup||c}),null);
__d("TranslationTrigger",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion",TRANSLATE_ALL:"translate_all",LOGGED_OUT_AUTO_TRANSLATION:"logged_out_auto_translation",SEE_TRANSLATION_WITH_ORIGINAL_TOGGLE:"see_translation_with_original_toggle",SEE_TRANSLATION_WITHOUT_ORIGINAL_TOGGLE:"see_translation_without_original_toggle",NONE:"none"})}),null);