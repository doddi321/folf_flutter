if (self.CavalryLogger) { CavalryLogger.start_js(["RkO2x"]); }

__d("FantaDropdownMenuFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";a={CANONICAL:"canonical",GROUP:"group",PAGE:"page",OTHER:"other"};b={M3_MENU:"m3_menu",M4_MENU:"m4_menu"};c={ADD_FRIENDS:"add_friends",BLOCK:"block",UNBLOCK:"unblock",BLOCK_MEMBERS:"block_members",BLOCK_PAGE_MESSAGES:"block_page_messages",UNBLOCK_PAGE_MESSAGES:"unblock_page_messages",CHANGE_COLOR:"change_color",CHANGE_EMOJI:"change_emoji",CONVERSATION_NAME:"conversation_name",CREATE_EVENT:"create_event",DELETE_CONVERSATION:"delete_conversation",DELETE_CONVERSATION_TRIGGERED:"delete_conversation_triggered",EDIT_NICKNAME:"edit_nickname",IGNORE_MESSAGES:"ignore_messages",LEAVE_CONVERSATION:"leave_conversation",LEAVE_FEEDBACK:"leave_feedback",MUTE_CONVERSATION:"mute_conversation",UNMUTE_CONVERSATION:"unmute_conversation",OPEN_FACEBOOK_PAGE:"open_facebook_page",OPEN_FULL_CONVERSATION:"open_full_conversation",PEOPLE_LIST:"people_list",PIN_CONVERSATION:"pin_conversation",REPORT:"report",UPLOAD_FILE:"upload_file",TOGGLE_PRIVACY:"toggle_privacy",MANAGE_MESSAGES:"manage_messages",CREATE_PLAN:"create_plan",GROUP_OPTIONS:"group_options",SECRET_MODE_OFF:"secret_mode_off",SECRET_MODE_ON:"secret_mode_on",EDIT_MENTORSHIP_PREFERENCES:"edit_mentorship_preferences"};e.exports={NAME:"WWW_FB_CHAT_NEW_SETTINGS_MENU_FUNNEL",CHAT_TYPES:a,MENU_VERSIONS:b,OPTIONS:c}}),null);
__d("FantaDropdownMenuFunnelLogger",["FantaDropdownMenuFunnelLoggerConstants","FunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaDropdownMenuFunnelLoggerConstants").NAME;function a(a,c,d){d=d.getInstanceID();b("FunnelLogger").getFunnelInstance(g,d)||(b("FunnelLogger").startFunnel(g,d),b("FunnelLogger").addFunnelTag(g,d,a),b("FunnelLogger").addFunnelTag(g,d,c))}function c(a,c){c=c.getInstanceID();b("FunnelLogger").appendAction(g,c,a)}function d(a){a=a.getInstanceID();b("FunnelLogger").endFunnel(g,a)}e.exports={endFunnel:d,logMenuItem:c,startFunnel:a}}),null);