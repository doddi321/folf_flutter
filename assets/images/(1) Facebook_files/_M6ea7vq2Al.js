if (self.CavalryLogger) { CavalryLogger.start_js(["zDrVl"]); }

__d("ConversationNubCollapsedSelectorMenu.react",["cx","fbt","ConversationNubUtils","LeftRight.react","PopoverMenu.react","PopoverMenuOverlappingBorder","React","ReactMenu","ShimButton.react","Tooltip.react","XUIBadge.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReactMenu").Item,j=300;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.state={hasTooltip:!0},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2(this.props.menuTabs)};d.componentDidUpdate=function(a){this.$2(this.$3(a,this.props))};d.$2=function(a){a.forEach(b("ConversationNubUtils").informShouldRecheckTabVisibility)};d.$3=function(a,b){a=a.menuTabs;b=b.menuTabs;var c={};a.forEach(function(a){c[a.getTabID()]=a});return b.filter(function(a){return c[a.getTabID()]!==a})};d.$4=function(){var a=this.props.menuTabs;return a.map(function(a){return a.getBadgeCount()}).reduce(function(a,b){return a+(b||0)},0)};d.$5=function(a,c){return a?b("React").createElement(b("XUIBadge.react"),{type:"special",count:a,className:"_4frs"+(c?" _30ql":""),"aria-hidden":c}):null};d.$6=function(){var a=this.$4();return this.$5(a,!1)};d.$7=function(a,c){c=this.$5(c,!0);a=this.$5(a,!1);var d=null;a!=null&&(d=b("React").createElement("span",{className:"_2ja6"},a));return b("React").createElement("span",{className:"_2ja7"},c,d)};d.$8=function(a,c){__p&&__p();var d=this,e=a.getTabID(),f=a.getFeedbackTargetID(),g=a.getTitle(),h=a.getBadgeCount();h=this.$7(h,c);var j=!1;return b("React").createElement(i,{key:e,className:"_30qm",onclick:function(){if(j){j=!1;return}d.$1=!1;d.refs.menu.hidePopover();d.props.onTabSelected&&d.props.onTabSelected(a)}},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("span",null,h,b("React").createElement("span",null,g)),b("React").createElement(b("ShimButton.react"),{className:"_30qn uiCloseButton uiCloseButtonSmall",onClick:function(a){a.stopPropagation(),a.preventDefault(),d.props.menuTabs.length>1&&(d.$1=!0),b("ConversationNubUtils").informShouldCloseTab(e,f,b("ConversationNubUtils").CLOSE_REASON_OVERFLOW_X_OUT)},onMouseDown:function(){j=!0}})))};d.$9=function(){var a=this.props.menuTabs;return a.reduce(function(a,b){return Math.max(a,b.getBadgeCount())},1)};d.$10=function(){var a=this,c=this.props.menuTabs,d=this.$9();c=c.map(function(b){return a.$8(b,d)});return b("React").createElement(b("ReactMenu"),{maxheight:j},c)};d.$11=function(){return h._("Posts")};d.$12=function(){var a=this.$6();a=b("React").createElement("div",{className:"_4fs1"},a,b("React").createElement("i",{className:"_4fs2"}));this.state.hasTooltip&&(a=b("React").createElement(b("Tooltip.react"),{tooltip:this.$11(),display:"block",alignH:"right"},a));return b("React").createElement("div",{className:"_2ja9"},a)};d.render=function(){var a=this,c=this.$10();return b("React").createElement(b("PopoverMenu.react"),{menu:c,ref:"menu",position:"above",alignh:"right",behaviors:[b("PopoverMenuOverlappingBorder")],onShow:function(){a.$1=!1,a.setState({hasTooltip:!1})},onHide:function(){a.$1?(a.$1=!1,a.refs.menu.showPopover()):a.setState({hasTooltip:!0})}},this.$12())};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerGroupPollingCreatePollFlyoutReactComponent",["MessengerGroupPollingCreatePollFlyoutReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MessengerGroupPollingCreatePollFlyoutReact.bs").jsComponent;e.exports=a}),null);