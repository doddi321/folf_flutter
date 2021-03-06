if (self.CavalryLogger) { CavalryLogger.start_js(["wqKAj"]); }

__d("cometUniqueID",["ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";var g=0,h;b("ExecutionEnvironment").canUseDOM?h="c":h="s";function a(){return"jsc_"+h+"_"+(g++).toString(36)}e.exports=a}),null);
__d("Typeahead",["ArbiterMixin","BehaviorsMixin","DataStore","DOM","Event","Parent","Run","Style","emptyFunction","ge","mixin"],(function(a,b,c,d,e,f){__p&&__p();c=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(d,c);function d(a,d,e,f){var g;g=c.call(this)||this;g.args={data:a,view:d,core:e};b("DataStore").set(f,"Typeahead",babelHelpers.assertThisInitialized(g));g.element=f;return g}var e=d.prototype;e.init=function(a){this.init=b("emptyFunction"),this.getCore(),this.getView().setAccessibilityControlElement(this.getCore().getElement()),this.proxyEvents(),this.initBehaviors(a||[]),this.inform("init",this),this.data.bootstrap(),this.core.focus()};e.getData=function(){if(!this.data){var a=this.args.data;this.data=a;this.data.init()}return this.data};e.getView=function(){if(!this.view){var a=this.args.view,c=a.node||b("ge")(a.node_id);c||(c=b("DOM").create("div",{className:"uiTypeaheadView"}),b("DOM").appendContent(this.element,c));typeof a.ctor==="string"?this.view=new window[a.ctor](c,a.options||{}):this.view=new a.ctor(c,a.options||{});this.view.init();this.view.setTypeahead(this.element)}return this.view};e.getCore=function(){if(!this.core){var a=this.args.core;typeof a.ctor==="string"?this.core=new window[a.ctor](a.options||{}):this.core=new a.ctor(a.options||{});this.core.init(this.getData(),this.getView(),this.getElement())}return this.core};e.getElement=function(){return this.element};e.setHeight=function(a){a!=="auto"&&(a+="px"),b("Style").set(this.element,"height",a)};e.swapData=function(a){return this.$Typeahead1(a,!0)};e.swapDataNoCoreReset=function(a){return this.$Typeahead1(a,!1)};e.$Typeahead1=function(a,b){var c=this.core;this.data=this.args.data=a;a.init();c&&(c.data=a,c.initData(),b&&c.reset(),this.proxyEvents());a.bootstrap();return a};e.proxyEvents=function(){[this.data,this.view,this.core].forEach(function(a){a.subscribe(a.events,this.inform.bind(this))},this)};e.initBehaviors=function(c){c.forEach(function(c){typeof c==="string"?a.TypeaheadBehaviors&&a.TypeaheadBehaviors[c]?a.TypeaheadBehaviors[c](this):b("Run").onLoad(function(){a.TypeaheadBehaviors&&(a.TypeaheadBehaviors[c]||b("emptyFunction"))(this)}.bind(this)):this.enableBehavior(c)},this)};d.getInstance=function(a){a=b("Parent").byClass(a,"uiTypeahead");return a?b("DataStore").get(a,"Typeahead"):null};d.initNow=function(a,b,c){c&&c.init(a),a.init(b)};d.init=function(a,c,e,f){b("DOM").isNodeOfType(a,["input","textarea"])||(a=b("DOM").scry(a,"input")[0]||b("DOM").scry(a,"textarea")[0]);var g=!1;try{g=document.activeElement===a}catch(a){}if(g)d.initNow(c,e,f);else var h=b("Event").listen(a,"focus",function(){d.initNow(c,e,f),h.remove()})};return d}(b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));e.exports=c}),null);
__d("BasicTypeaheadRenderer",["BadgeHelper","DOM"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=[];a.icon&&c.push(b("DOM").create("img",{alt:"",src:a.icon}));var d=a.debug_info;d&&c.push(b("DOM").create("span",{className:"debugInfo"},d));if(a.text){d=[a.text];a.is_verified&&d.push(b("BadgeHelper").renderBadge("xsmall","verified"));c.push(b("DOM").create("span",{className:"text"},d))}if(a.subtext){d=[a.subtext];c.push(b("DOM").create("span",{className:"subtext"},d))}d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("aria-label",a.text));return d}a.className="basic";e.exports=a}),null);
__d("createIxElement",["invariant","DOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();var d="img";a.sprited||a.uri||g(0,2521);if(a.sprited){d=b("joinClasses")(d,a.spriteMapCssClass,a.spriteCssClass);var e=b("DOM").create("i",{className:d});c!=null&&b("DOM").setContent(e,b("DOM").create("u",null,c));return e}e=b("DOM").create("img",{className:d,src:a.uri});c!=null&&e.setAttribute("alt",c);a.width&&e.setAttribute("width",a.width);a.height&&e.setAttribute("height",a.height);return e}e.exports=a}),null);
__d("TypeaheadView",["csx","cx","ix","ArbiterMixin","BasicTypeaheadRenderer","CSS","DOM","Event","Parent","$","createIxElement","getElementText","getOrCreateDOMID","mixin"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();c=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(d,c);function d(a,d){var e;e=c.call(this)||this;e.initialized=!1;e.$TypeaheadView1=0;e.element=e.content=b("$").fromIDOrElement(a);Object.assign(babelHelpers.assertThisInitialized(e),d);return e}var e=d.prototype;e.init=function(){this.initialized||(this.initialized=!0,this.initializeEvents(),this.reset())};e.initializeEvents=function(){b("Event").listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)})};e.setTypeahead=function(a){this.typeahead=a};e.setAccessibilityControlElement=function(a){this.accessibilityElement=a};e.getElement=function(){return this.element};e.mouseup=function(a){a.button!=2&&(this.select(!0),a.prevent())};e.mouseover=function(a){if(this.ignoreMouseover){this.ignoreMouseover=!1;return}this.visible&&(this.resetColumn(),this.highlight(this.getIndex(a)))};e.reset=function(a){__p&&__p();a||(this.disableAutoSelect=!1);this.index=-1;this.$TypeaheadView1=0;this.$TypeaheadView2();this.items=[];this.results=[];this.value="";this.content.innerHTML="";this.inform("reset");return this};e.getIndex=function(a){return this.items.indexOf(b("Parent").byTag(a.getTarget(),"li"))};e.getSelection=function(){var a=this.results[this.index]||null;return this.visible?a:null};e.isEmpty=function(){return!this.results.length};e.isVisible=function(){return!!this.visible};e.show=function(){b("CSS").show(this.element);if(this.results&&this.results.length&&(this.autoSelect&&this.accessibilityElement&&this.selected)){var a=b("DOM").scry(this.selected,'[role="gridcell"]');a=a.length<2?this.selected:a[this.$TypeaheadView1];this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(a))}this.accessibilityElement&&this.accessibilityElement.setAttribute("aria-expanded","true");this.visible=!0;return this};e.hide=function(){b("CSS").hide(this.element);this.accessibilityElement&&(this.accessibilityElement.setAttribute("aria-expanded","false"),this.accessibilityElement.removeAttribute("aria-activedescendant"));this.visible=!1;return this};e.render=function(a,c,d){__p&&__p();this.value=a;if(!c.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant");this.reset(!0);return}a={results:c,value:a};this.inform("beforeRender",a);c=a.results;a=(!this.value||d)&&this.index!==-1?this.index:this.getDefaultIndex(c);this.results=c;b("DOM").setContent(this.content,this.buildResults(c));this.items=this.getItems();this.highlight(a,!1);this.inform("render",this.results)};e.getItems=function(){return b("DOM").scry(this.content,"li")};e.buildResults=function(c){__p&&__p();var d,e=null;typeof this.renderer==="function"?(d=this.renderer,e=this.renderer.className||""):(d=a.TypeaheadRenderers[this.renderer],e=this.renderer);d=d.bind(this);c=c.map(function(a,b){a=a.node||d(a,b);a.setAttribute("role","option");return a});e=b("DOM").create("ul",{className:e,id:"typeahead_list_"+(this.typeahead?b("getOrCreateDOMID")(this.typeahead):b("getOrCreateDOMID")(this.element))},c);e.setAttribute("role","listbox");return e};e.showLoadingIndicator=function(){var a=b("createIxElement")(i("85428"));a=b("DOM").create("li",{className:"typeaheadViewInternalLoading"},a);a=b("DOM").create("ul",{role:"listbox"},a);b("DOM").setContent(this.content,a)};e.getDefaultIndex=function(a){a=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!a?-1:0};e.$TypeaheadView2=function(){var a=b("DOM").scry(this.element,".active")[0];a!=null&&b("CSS").removeClass(a,"active");if(this.selected==null||this.index===-1)return;a=b("DOM").scry(this.selected,'[role="gridcell"]');if(a.length<2)return;a=a[this.$TypeaheadView1];b("CSS").addClass(a,"active")};e.next=function(){this.$TypeaheadView1=0,this.highlight(this.index+1),this.inform("next",this.selected)};e.prev=function(){this.$TypeaheadView1=0,this.highlight(this.index-1),this.inform("prev",this.selected)};e.getCurrentColumnIndex=function(){return this.$TypeaheadView1};e.resetColumn=function(){if(this.selected==null)return;var a=b("DOM").scry(this.selected,'[role="gridcell"]');if(a.length<2)return;this.$TypeaheadView1=0;a=a[this.$TypeaheadView1];this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(a));this.$TypeaheadView2()};e.nextColumn=function(){__p&&__p();if(this.index==-1||this.selected==null)return;var a=b("DOM").scry(this.selected,'[role="gridcell"]');if(a.length<2)return;if(this.$TypeaheadView1<a.length-1){this.$TypeaheadView1++;a=a[this.$TypeaheadView1];this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(a));this.$TypeaheadView2()}else this.next()};e.prevColumn=function(){__p&&__p();if(this.index==-1||this.selected==null)return;var a=b("DOM").scry(this.selected,'[role="gridcell"]');if(a.length<2)return;if(this.$TypeaheadView1>0){this.$TypeaheadView1--;a=a[this.$TypeaheadView1];this.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(a));this.$TypeaheadView2()}else this.prev()};e.getItemText=function(a){var c="";a&&(c=a.getAttribute("aria-label"),c||(c=b("getElementText")(a),a.setAttribute("aria-label",c)));return c};e.setIsViewingSelectedItems=function(a){this.viewingSelected=a;return this};e.getIsViewingSelectedItems=function(){return!!this.viewingSelected};e.highlight=function(a,c){__p&&__p();var d=this,e=this.selected;e!=null&&(b("CSS").removeClass(e,"selected"),e.setAttribute("aria-selected","false"));a>this.items.length-1?a=-1:a<-1&&(a=this.items.length-1);a>=0&&a<this.items.length?(this.selected=this.items[a],b("CSS").addClass(this.selected,"selected"),this.selected!=null&&this.selected.setAttribute("aria-selected","true"),this.accessibilityElement&&window.setTimeout(function(){var a=b("DOM").scry(d.selected,'[role="gridcell"]');a=a.length<2?d.selected:a[d.$TypeaheadView1];a!=null&&d.accessibilityElement.setAttribute("aria-activedescendant",b("getOrCreateDOMID")(a));d.$TypeaheadView2()},0)):this.accessibilityElement&&this.accessibilityElement.removeAttribute("aria-activedescendant");this.index=a;this.disableAutoSelect=a==-1;c!==!1&&this.inform("highlight",{index:a,selected:this.results[a],element:this.selected})};e.select=function(a){if(this.headerIndex&&a)return;var b=this.index,c=this.results[b],d=this.element.getAttribute("id");if(c){var e=function(c){this.inform("select",{index:b,clicked:!!a,selected:c,id:d,query:this.value,element:this.selected}),this.inform("afterSelect")}.bind(this);this.shouldValidateTypeaheadSelection(c)?this.validateTypeaheadSelection(c,e):e(c)}};e.shouldValidateTypeaheadSelection=function(a){return!1};e.validateTypeaheadSelection=function(a,b){};return d}(b("mixin")(b("ArbiterMixin")));Object.assign(c.prototype,{events:["highlight","render","reset","select","beforeRender","next","prev"],renderer:b("BasicTypeaheadRenderer"),autoSelect:!1,ignoreMouseover:!1});e.exports=c}),null);
__d("SimpleStructuredInput",["csx","Arbiter","ArbiterMixin","DataStore","DOM","Event","FacebarStructuredText","FlipDirection","Input","Parent","getActiveElement","mixin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$SimpleStructuredInput1=c;d.$SimpleStructuredInput2=b("DOM").find(c,"._1frb");d.$SimpleStructuredInput3=b("DOM").find(c,"._5eay");b("DataStore").set(c,"SimpleStructuredInput",babelHelpers.assertThisInitialized(d));d.init();return d}var d=c.prototype;d.init=function(){var a=this,c=function(b){return a.inform(b.type)};b("Event").listen(this.$SimpleStructuredInput2,"blur",c);b("Event").listen(this.$SimpleStructuredInput2,"focus",c);b("Event").listen(this.$SimpleStructuredInput2,"input",function(){b("FlipDirection").setDirection(a.$SimpleStructuredInput2,1,!0),a.inform("change"),b("requestAnimationFrame")(function(){a.$SimpleStructuredInput2.scrollLeft>0&&a.clearHint()})});this.inform("init",null,"persistent")};d.clearHint=function(){b("Input").setValue(this.$SimpleStructuredInput3,"")};d.setHint=function(a){a=a.map(function(a){return a.text}).join("");var c=b("Input").getValue(this.$SimpleStructuredInput2);this.hasFocus()&&c.length>0&&a.toLowerCase().indexOf(c.toLowerCase())===0&&!this.hasTextOverflow()?b("Input").setValue(this.$SimpleStructuredInput3,c+a.slice(c.length)):this.clearHint()};d.focus=function(){this.$SimpleStructuredInput2.focus()};d.blur=function(){this.$SimpleStructuredInput2.blur(),this.setHint([])};d.hasTextOverflow=function(){return this.$SimpleStructuredInput2.offsetWidth!==this.$SimpleStructuredInput2.scrollWidth};d.hasFocus=function(){return b("DOM").contains(this.$SimpleStructuredInput1,b("getActiveElement")())};d.setStructure=function(a,c){c===void 0&&(c=!1);a=a.map(function(a){return a.text});b("Input").setValue(this.$SimpleStructuredInput2,a.join(""));c!==!0&&this.inform("change")};d.getStructure=function(){return b("FacebarStructuredText").fromString(b("Input").getValue(this.$SimpleStructuredInput2)).toStruct()};d.getSelection=function(){return{offset:this.$SimpleStructuredInput2.selectionStart,length:this.$SimpleStructuredInput2.selectionEnd-this.$SimpleStructuredInput2.selectionStart}};d.setSelection=function(a){this.hasFocus()&&(this.$SimpleStructuredInput2.setSelectionRange(a.offset,a.offset+a.length),this.inform("select"))};d.isSelectionAtEnd=function(){var a=this.getSelection().offset,c=b("Input").getValue(this.$SimpleStructuredInput2).length;return a>=c};d.selectAll=function(){this.setSelection({offset:0,length:b("Input").getValue(this.$SimpleStructuredInput2).length})};c.getInstance=function(a){a=b("Parent").bySelector(a,"._5eaz");if(!(a instanceof HTMLElement))throw new Error("No DOMElement structured input found using");return b("DataStore").get(a,"SimpleStructuredInput")||new c(a)};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("AbandonedSessionSurvey",["AsyncRequest","SubscriptionsHandler","XSearchFacebarSurveyController","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var c=this;this.tryToSubmitSurvey=function(){c.searchBoxFocused&&(c.openSurvey(),c.resultSelected=!1,c.searchBoxFocused=!1)};this.core=a.getCore();this.data=a.getData();this.view=a.getView();this.subscriptionsHandler=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.enable=function(){var a=this;this.subscriptionsHandler.addSubscriptions(this.core.subscribe("focus",function(){a.searchBoxFocused=!0,a.resultSelected=!1}),this.data.subscribe("beforeQuery",function(b,c){a.query=c.value||""}),this.view.subscribe("select",function(){a.resultSelected=!0,a.tryToSubmitSurvey()}),this.core.subscribe("blur",this.tryToSubmitSurvey))};c.disable=function(){this.subscriptionsHandler.release(),this.request&&this.request.abort()};c.openSurvey=function(){if(this.openedSurvey)return;this.openedSurvey=!0;var a=this.core.element;a==null&&(a=this.core.getElement());var c=this.normalizeValue(this.query);a=b("XSearchFacebarSurveyController").getURIBuilder().setString("id",b("getOrCreateDOMID")(a)).setString("query",c!=null?c:"").setString("session_id",this.data.queryData.sid).setExists("result_selected",this.resultSelected);this.request=new(b("AsyncRequest"))().setMethod("POST").setAllowCrossPageTransition(!0).setURI(a.getURI());this.request.send()};c.normalizeValue=function(a){return String(a).trim().replace(/\s+/g," ").replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,"").toLowerCase()};return a}();e.exports=a}),null);
__d("SearchSuggestionsHighlighter",["React","escapeRegex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d,e){__p&&__p();a=b("escapeRegex")(a);e=e?"gi":"g";a=new RegExp("( "+a.split(/\s+/).join("| ")+")",e);e=" "+c;var f=[],g=0,h=null;while(!0){h=a.exec(e);if(h==null)break;var i=e.substring(g,h.index);g===0&&(i=i.trimLeft());d?f.push(i):f.push(b("React").createElement("strong",{key:c+"-"+h.index},i));i=h[0];h.index===0&&(i=i.trimLeft());g=h.index+h[0].length;d?f.push(b("React").createElement("strong",{key:c+"-"+g},i)):f.push(i)}d?f.push(e.substring(g,e.length)):f.push(b("React").createElement("strong",{key:c+"-"+e.length},e.substring(g,e.length)));return f}function a(a,b){return g(a,b,!0,!1)}function c(a,b){return g(a,b,!1,!1)}function d(a,b){return g(a,b,!1,!0)}e.exports={highlightMatch:a,highlightNonMatch:c,highlightNonMatchCaseInsensitive:d}}),null);