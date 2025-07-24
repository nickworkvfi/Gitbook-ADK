---
hidden: true
title: mac_demo1.cpp
---

``` cpp
// SDK
#include <string>
#include <stdio.h>
#include <time.h>
#include <sys/time.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
// ADK
#include "html/gui.h"
#include "ipc/jsobject.h"
#include "ipc/notify.h"
#include "log/liblog2.h"
#include "sysinfo/mac.h"
#if defined _VOS1
// workaround for Trident compiler
namespace std
{
   std::string to_string(int value)
   {
   return to_string((long long int) value);
   }
   std::string to_string(size_t value)
   {
   return to_string((long long int) value);
   }
}
#endif
// constants
std::string APP_ID = "MACDEMO1";
std::string APP_MANIFEST_ID = "mac_demo1";
const int SUCCEED = 0;
const int FAIL = -1;
LibLogHandle lh = LOGAPI_INIT(APP_ID.c_str()); // init logging library
const std::string device_mac_cp_start_trigger("MAC_CP_START");
const std::string device_mac_cp_stop_trigger("MAC_CP_STOP");
static bool need_to_change_focus;
static std::string cp_app_to_change_focus;
#define STR(x) #x
#define STRINGIFY(x) STR(x)
#define LOOP_COUNTER 10
#define STR_TRIGGER_LOOP "Trigger loop [" STRINGIFY(LOOP_COUNTER) "]"
#define STR_TRIGGER_IDLE_LOOP "Trigger Trigger idle in loop [" STRINGIFY(LOOP_COUNTER) "]"
// internal functions
static void event_callback( vfimac::macEvent event, const vfiipc::JSObject & json );
static void mac_cp_start_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags);
static void mac_cp_stop_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags);
enum
{
   EXIT = -2,
   GUI_REGION = 0,
   SYSTEM_NOTIFICATION_ADD,
   SYSTEM_NOTIFICATION_LIST,
   SYSTEM_NOTIFICATION_REMOVE,
   MANIFEST,
   DESKTOP,
   CONTROL_PANEL,
   POWER_PANEL,
   LAUNCH,
   LAUNCH_BACKGROUND,
   STATUSBAR_ON,
   STATUSBAR_OFF,
   STATUSBAR_STATE,
   STATUSBAR_VALUES,
   STATUSBAR_REFRESH,
   STOP_USR_APPS,
   STOP_OTHER_APPS,
   SCREENSHOT,
   GET_CP_APP_ROOT_DIR,
   FULLSCREEN_ON,
   FULLSCREEN_OFF,
   KEYBOARD_TEST,
   KEYBOARD_ON,
   KEYBOARD_OFF,
   KEYBOARD_NUMERIC,
   KEYBOARD_ALPHA,
   KEYBOARD_CAP,
   IS_RUNNING,
   FOREGROUND,
   STOP_CP_APPS,
   CP_INSTALL,
   TRIGGER_IDLE,
   TRIGGER_LOOP,
   TRIGGER_IDLE_LOOP,
   TRIGGER_TXN_START,
   TRIGGER_MANUAL,
   TRIGGER_MANUAL_SYNC,
   SET_CTX_VALUES,
   STOP_APPID,
   ACTION,
   APP_LIST,
   AUTOLAUNCH,
   LAYOUT_LOCK,
   LAYOUT_UNLOCK,
   IN_FOREGROUND,
   LIBMAC_VER,
   MAC_VER,
   LANG,
};
int main()
{
   int status = 0;
   vfiipc::ipcSetAppID( APP_ID.c_str() );
   vfimac::sysShowProgress( "LOG init", 10 ); // Show progress screen
   sleep(1);
   vfimac::sysShowProgress( "GUI init", 30 );
   sleep(1);
   vfigui::uiSetPropertyInt(vfigui::UI_PROP_CIRCULAR_MENU,1);
   struct vfigui::UIMenuEntry menu[]=
   {
   {"GUI region", GUI_REGION, 0},
   {"Add system notification", SYSTEM_NOTIFICATION_ADD, 0},
   {"System notifications list", SYSTEM_NOTIFICATION_LIST, 0},
   {"Remove system notification", SYSTEM_NOTIFICATION_REMOVE,0},
   {"Trigger txn start", TRIGGER_TXN_START, 0},
   {"Trigger manual launch", TRIGGER_MANUAL, 0},
   {"Trigger manual sync", TRIGGER_MANUAL_SYNC,0},
   {"Trigger idle", TRIGGER_IDLE, 0},
   {STR_TRIGGER_LOOP, TRIGGER_LOOP, 0},
   {STR_TRIGGER_IDLE_LOOP, TRIGGER_IDLE_LOOP, 0},
   {"Screenshot", SCREENSHOT, 0},
   {"Get CP app root dir", GET_CP_APP_ROOT_DIR,0},
   {"Stop all cp apps", STOP_CP_APPS, 0},
   {"Stop all usr apps", STOP_USR_APPS, 0},
   {"Stop other apps", STOP_OTHER_APPS, 0},
   {"Install CP app", CP_INSTALL, 0},
   {"Stop by appid", STOP_APPID, 0},
   {"Invoke action", ACTION, 0},
   {"Launch by appid", LAUNCH, 0},
   {"Launch in background", LAUNCH_BACKGROUND, 0},
   {"Is running", IS_RUNNING, 0},
   {"Autolaunch", AUTOLAUNCH, 0},
   {"To foreground", FOREGROUND, 0},
   {"In foreground", IN_FOREGROUND, 0},
   {"Fullscreen on", FULLSCREEN_ON, 0},
   {"Fullscreen off", FULLSCREEN_OFF, 0},
   {"Lock layout", LAYOUT_LOCK, 0},
   {"Unlock layout", LAYOUT_UNLOCK, 0},
   {"Virtual keyboard test", KEYBOARD_TEST, 0},
   {"Virtual keyboard on", KEYBOARD_ON, 0},
   {"Virtual keyboard off", KEYBOARD_OFF, 0},
   {"Virtual keyboard numeric", KEYBOARD_NUMERIC, 0},
   {"Virtual keyboard alpha", KEYBOARD_ALPHA, 0},
   {"Virtual keyboard capitalized", KEYBOARD_CAP, 0},
   {"Statusbar on", STATUSBAR_ON, 0},
   {"Statusbar off", STATUSBAR_OFF, 0},
   {"Statusbar refresh", STATUSBAR_REFRESH, 0},
   {"Statusbar state", STATUSBAR_STATE, 0},
   {"Statusbar values", STATUSBAR_VALUES, 0},
   {"Application list", APP_LIST, 0},
   {"Manifest scan", MANIFEST, 0},
   {"Set CP context values", SET_CTX_VALUES, 0},
   {"Show control panel", CONTROL_PANEL, 0},
   {"Show power panel", POWER_PANEL, 0},
   {"Show desktop", DESKTOP, 0},
   {"libmac version", LIBMAC_VER, 0},
   {"MAC version", MAC_VER, 0},
   {"Language", LANG, 0},
   {"Exit", EXIT, 0},
   };
   vfimac::sysSetEventCallback( vfimac::EVENT_FOREGROUND, event_callback );
   vfimac::sysSetEventCallback( vfimac::EVENT_BACKGROUND, event_callback );
   vfimac::sysSetEventCallback( vfimac::EVENT_MANIFEST_UPDATE, event_callback );
   vfiipc::ipcRegisterNotificationCB( device_mac_cp_start_trigger, mac_cp_start_callback, NULL );
   vfiipc::ipcRegisterNotificationCB( device_mac_cp_stop_trigger, mac_cp_stop_callback, NULL );
   int returnCode = vfimac::MAC_ERR_OK;
   bool loop = true;
   int s=0;
   int lastSystemNotificationId = 0;;
   int vkbm = vfimac::MAC_KBD_AUTO; //Virtual keyboard mode variable.
   vfimac::sysVirtualKeyboard( vkbm );
   while(loop)
   {
   s=vfigui::uiMenu("mainmenu",APP_ID,menu,sizeof(menu)/sizeof(menu[0]),s>=0?s:0);
   need_to_change_focus = false;
   cp_app_to_change_focus = "";
   switch(s)
   {
   case SYSTEM_NOTIFICATION_ADD:
   {
   returnCode = vfimac::systemNotificationAdd(vfimac::systemNotificationPriority::SYSTEM_NOTIFICATION_INFO, "demo1 system notification");
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Notification ID: %d",returnCode));
   if(returnCode > 0)
   {
   lastSystemNotificationId = returnCode;
   returnCode = vfimac::MAC_ERR_OK;
   }
   break;
   }
   case SYSTEM_NOTIFICATION_LIST:
   {
   std::string s;
   std::list<int> list;
   returnCode = vfimac::systemNotificationList(list);
   for (std::list<int>::iterator it = list.begin(); it != list.end(); ++it)
   {
   s += std::to_string(*it);
   s += ",";
   }
   if (s.size() > 0)
   {
   s.resize(s.size() - 1);
   }
   returnCode = vfigui::uiConfirm("confirm",vfigui::uiPrint("list: %s", s.size() ? s.c_str() : "(null)"));
   break;
   }
   case SYSTEM_NOTIFICATION_REMOVE:
   {
   if(0 == lastSystemNotificationId)
   {
   vfigui::uiConfirm("confirm",vfigui::uiPrint("You should add notification at first"));
   }
   else
   {
   returnCode = vfimac::systemNotificationRemove(lastSystemNotificationId);
   vfigui::uiConfirm("confirm",vfigui::uiPrint("systemNotificationRemove(%d): %d",
   lastSystemNotificationId,
   returnCode));
   if(vfimac::MAC_ERR_OK == returnCode)
   {
   lastSystemNotificationId = 0;
   }
   }
   break;
   }
   case vfigui::UI_ERR_CONNECTION_LOST:
   {
   LOGF_TRACE(lh,"lost connectivity with GUI[%d]",s);
   sleep(2);
   break;
   }
   case MAC_VER:
   {
   returnCode = vfimac::MAC_ERR_OK;
   std::string version = "MAC version: ";
   version += vfimac::sysMac_GetVersion();
   returnCode = vfigui::uiConfirm("confirm",version.c_str());
   break;
   }
   case LIBMAC_VER:
   {
   std::string version = "Libmac version: ";
   version += vfimac::sysLibMac_GetVersion();
   returnCode = vfigui::uiConfirm("confirm",version.c_str());
   break;
   }
   case AUTOLAUNCH:
   {
   returnCode = vfimac::sysRelaunchApps();
   break;
   }
   case FULLSCREEN_ON:
   {
   const bool on = true;
   returnCode = vfimac::sysFullscreenMode( on );
   break;
   }
   case LAYOUT_LOCK:
   {
   const bool lock = true;
   returnCode = vfimac::sysLockLayout( lock );
   break;
   }
   case LAYOUT_UNLOCK:
   {
   const bool lock = true;
   returnCode = vfimac::sysLockLayout( !lock );
   break;
   }
   case APP_LIST:
   {
   vfiipc::JSObject appList;
   returnCode = vfimac::sysGetAppList( appList );
   if ( vfimac::MAC_ERR_OK != returnCode ) break;
   vfigui::uiConfirm("confirm", appList.dump() );
   break;
   }
   case FULLSCREEN_OFF:
   {
   const bool on = true;
   returnCode = vfimac::sysFullscreenMode( !on );
   break;
   }
   case KEYBOARD_TEST:
   {
   returnCode = vfigui::uiInvokeURL(vfigui::UI_REGION_DEFAULT,"vkb-mode-test.html");
   break;
   }
   case KEYBOARD_ON:
   {
   vkbm |= vfimac::MAC_KBD_ON;
   returnCode = vfimac::sysVirtualKeyboard( vkbm );
   break;
   }
   case KEYBOARD_OFF:
   {
   vkbm &= ~vfimac::MAC_KBD_ON;
   returnCode = vfimac::sysVirtualKeyboard( vkbm );
   break;
   }
   case KEYBOARD_NUMERIC:
   {
   static bool state = true;
   std::string msg = "Numeric = ";
   msg += state ? "True" : "False";
   vkbm = state ? ( vkbm | vfimac::MAC_KBD_NUMERIC ) : ( vkbm & ~vfimac::MAC_KBD_NUMERIC );
   returnCode = vfimac::sysVirtualKeyboard( vkbm );
   if( returnCode != vfimac::MAC_ERR_OK ) msg += "\nFail to set VKB mode!";
   state = !state;
   returnCode = vfigui::uiConfirm("confirm",msg.c_str());
   break;
   }
   case KEYBOARD_ALPHA:
   {
   static bool state = true;
   std::string msg = "Alpha = ";
   msg += state ? "True" : "False";
   vkbm = state ? ( vkbm | vfimac::MAC_KBD_ALPHANUMERIC ) : ( vkbm & ~vfimac::MAC_KBD_ALPHANUMERIC );
   returnCode = vfimac::sysVirtualKeyboard( vkbm );
   if( returnCode != vfimac::MAC_ERR_OK ) msg += "\nFail to set VKB mode!";
   state = !state;
   returnCode = vfigui::uiConfirm("confirm",msg.c_str());
   break;
   }
   case KEYBOARD_CAP:
   {
   static bool state = true;
   std::string msg = "Capitalized = ";
   msg += state ? "True" : "False";
   vkbm = state ? ( vkbm | vfimac::MAC_KBD_CAPITALIZED ) : ( vkbm & ~vfimac::MAC_KBD_CAPITALIZED );
   returnCode = vfimac::sysVirtualKeyboard( vkbm );
   if( returnCode != vfimac::MAC_ERR_OK ) msg += "\nFail to set VKB mode!";
   state = !state;
   returnCode = vfigui::uiConfirm("confirm",msg.c_str());
   break;
   }
   case STATUSBAR_ON:
   {
   const bool visible = true;
   returnCode = vfimac::sysStatusbar( visible );
   break;
   }
   case STATUSBAR_REFRESH:
   {
   returnCode = vfimac::sysStatusbarRefresh();
   if ( returnCode == vfimac::MAC_ERR_OK )
   {
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Refresh: %d",returnCode));
   }
   break;
   }
   case STATUSBAR_OFF:
   {
   const bool visible = true;
   returnCode = vfimac::sysStatusbar( !visible );
   break;
   }
   case STATUSBAR_VALUES:
   {
   std::map<std::string,std::string> values;
   returnCode = vfimac::sysGetStatusbarValues( values );
   vfiipc::JSObject jsobj;
   jsobj[0] = "/home/usr1/www/mac_demo1/default/mail.png";
   jsobj[1] = "/home/usr1/www/mac_demo1/default/glass.png";
   values["extra_icons"]=jsobj.dump();
   values["demo_value"]="1";
   returnCode = vfimac::sysSetStatusbarValues( values );
   break;
   }
   case STATUSBAR_STATE:
   {
   bool visible = true;
   returnCode = vfimac::sysStatusbarState( visible );
   if ( returnCode == vfimac::MAC_ERR_OK )
   {
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Statusbar: %d",visible));
   }
   break;
   }
   case IS_RUNNING:
   {
   bool running = false;
   returnCode = vfimac::sysIsRunning( "lcp", running );
   if ( returnCode == vfimac::MAC_ERR_OK )
   {
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Running: %d",running));
   }
   break;
   }
   case LAUNCH_BACKGROUND:
   {
   const std::string appname("mac_demo2");
   std::vector<std::string> args;
   args.push_back("test-arg1");
   args.push_back("test-arg2");
   returnCode = vfimac::sysLaunchAppid(appname,args,vfimac::KEEP_IN_BACKGROUND);
   break;
   }
   case GUI_REGION:
   {
   int region = 0;
   const std::string appid("mac_demo2");
   returnCode = vfimac::sysGetGUIRegionId(appid,region);
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Region: %d",region));
   break;
   }
   case LAUNCH:
   {
   const std::string appname("mac_demo2");
   const std::string value1("test1");
   const std::string value2("test2");
   std::vector<std::string> args;
   args.push_back(value1);
   args.push_back(value2);
   std::map< std::string,std::string > envs;
   envs["env1"]="test1";
   envs["env2"]="test2";
   int params = 0;
   returnCode = vfimac::sysLaunchAppid(appname,args,envs,params);
   break;
   }
   case IN_FOREGROUND:
   {
   bool visible = false;
   returnCode = vfimac::sysInForeground( visible );
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Visible: %d",visible));
   break;
   }
   case FOREGROUND:
   {
   const std::string appid("mac_demo2");
   returnCode = vfimac::sysToForeground( appid );
   break;
   }
   case TRIGGER_MANUAL_SYNC:
   {
   vfiipc::JSObject jsobj;
   const std::string trigger("CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED");
   need_to_change_focus = true;
   returnCode = vfimac::sysLaunchCPAppFromDesktopSync( trigger, jsobj );
   break;
   }
   case TRIGGER_MANUAL:
   {
   std::vector<std::string> args;
   args.push_back( "test1" );
   args.push_back( "test2" );
   const std::string trigger("CP_SYSTEM_NOTIFIES_IDLE_ENTERED");
   need_to_change_focus = true;
   returnCode = vfimac::sysLaunchCPAppFromDesktop( trigger, args );
   break;
   }
   case TRIGGER_IDLE_LOOP:
   {
   for(int i = 0; i < LOOP_COUNTER; i++)
   {
   const std::string trigger("CP_TEST");
   vfiipc::JSObject jsobj;
   returnCode = vfimac::sysLaunchCPAppByTrigger( "*", trigger, jsobj, 0 );
   }
   cp_app_to_change_focus = "cp_demo2";
   break;
   }
   case TRIGGER_IDLE:
   {
   cp_app_to_change_focus = "cp_demo3";
   const std::string trigger("CP_SYSTEM_NOTIFIES_IDLE_ENTERED");
   vfiipc::JSObject jsobj;
   returnCode = vfimac::sysLaunchCPAppByTrigger( "*", trigger, jsobj, 0 );
   break;
   }
   case TRIGGER_LOOP:
   {
   for(int i = 0; i < LOOP_COUNTER; i++)
   {
   vfiipc::JSObject jsobj;
   const std::string trigger("CP_TEST");
   returnCode = vfimac::sysVirtualKeyboard( 0 );
   returnCode = vfimac::sysLaunchCPAppByTrigger( "cp_demo1", trigger, jsobj, 0 );
   returnCode = vfimac::sysVirtualKeyboard( 0 );
   returnCode = vfimac::sysLaunchCPAppByTrigger( "cp_demo2", trigger, jsobj, 0 );
   }
   cp_app_to_change_focus = "cp_demo2";
   break;
   }
   case SET_CTX_VALUES:
   {
   const std::string value1("test1");
   const std::string value2("test2");
   const std::string name1("name1");
   const std::string name2("name2");
   vfiipc::JSObject data;
   data(name1)=value1;
   data(name2)=value2;
   returnCode = vfimac::sysSetCPEnvData( data );
   break;
   }
   case CP_INSTALL:
   {
   // install CP application
   const std::string path("www/pkg-cp-demo-inst.zip");
   returnCode = vfimac::sysInstallCPApp( path );
   break;
   }
   case STOP_OTHER_APPS:
   {
   returnCode = vfimac::sysStopOtherApps();
   break;
   }
   case STOP_USR_APPS:
   {
   returnCode = vfimac::sysStopAllUserApps();
   break;
   }
   case STOP_CP_APPS:
   {
   returnCode = vfimac::sysStopAllCPApps();
   break;
   }
   case TRIGGER_TXN_START:
   {
   cp_app_to_change_focus = "cp_demo3";
   vfiipc::JSObject jsobj;
   const std::string trigger("CP_SYSTEM_NOTIFIES_TRANSACTION_STARTED");
   returnCode = vfimac::sysLaunchCPAppByTrigger( "*", trigger, jsobj, 0 );
   break;
   }
   case STOP_APPID:
   {
   const std::string appid("mac_demo2");
   returnCode = vfimac::sysStopAppid( appid );
   break;
   }
   case ACTION:
   {
   const std::string appid("mac_demo2");
   const std::string action_name("exit");
   returnCode = vfimac::sysInvokeCPAppAction( appid, action_name, 0, 0 );
   break;
   }
   case MANIFEST:
   {
   returnCode = vfimac::sysScanManifests();
   break;
   }
   case DESKTOP:
   {
   returnCode = vfimac::sysShowDesktop();
   break;
   }
   case POWER_PANEL:
   {
   returnCode = vfimac::sysShowPowerControlPanel();
   break;
   }
   case CONTROL_PANEL:
   {
   returnCode = vfimac::sysShowControlPanel();
   break;
   }
   case SCREENSHOT:
   {
   sleep(5);
   std::string path;
   path += "/tmp/";
   path += std::to_string( (int)time(NULL) );
   path += ".png";
   vfigui::uiScreenshotPNG(path.c_str());
   break;
   }
   case GET_CP_APP_ROOT_DIR:
   {
   std::string path;
   returnCode = vfimac::sysGetCPAppRootDir( path );
   vfigui::uiConfirm( "confirm",vfigui::uiPrint("CP app root: [%s]",path.c_str()) );
   break;
   }
   case LANG:
   {
   char *l = getenv("LANGUAGE");
   std::string lang(l?l:"unknown");
   vfigui::uiConfirm( "confirm",vfigui::uiPrint("Language: '%s'",lang.c_str()) );
   break;
   }
   case EXIT:
   {
   loop=false;
   break;
   }
   default:
   {
   break;
   }
   }
   if ( returnCode != vfimac::MAC_ERR_OK )
   {
   LOGF_ERROR(lh, "error: %d", status);
   vfigui::uiConfirm("confirm",vfigui::uiPrint("Error: %d",returnCode));
   }
   LOGF_TRACE(lh, "status: %d", status);
   }
   return returnCode;
}
static void event_callback( vfimac::macEvent event, const vfiipc::JSObject & json )
{
   LOGF_TRACE(lh,"MAC event recieved[%d] json[%s]",event, json.dump().c_str() );
}
static void mac_cp_start_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
   LOGF_TRACE(lh, "start trigger from[%s] to[%s] id[%s] flags[%d] json[%s]",
   from.c_str(),
   to.c_str(),
   notification_id.c_str(),
   flags,
   jsobj.dump().c_str());
   if ( need_to_change_focus )
   {
   cp_app_to_change_focus = jsobj("AppId").getString();
   }
}
static void mac_cp_stop_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
   LOGF_TRACE(lh, "stop trigger from[%s] to[%s] id[%s] flags[%d] json[%s]",
   from.c_str(),
   to.c_str(),
   notification_id.c_str(),
   flags,
   jsobj.dump().c_str());
   if ( cp_app_to_change_focus.size() )
   {
   LOGF_INFO(lh, "We awaited for stop of [%s] cp app to set focus to [%s]", cp_app_to_change_focus.c_str(), APP_MANIFEST_ID.c_str());
   if ( !jsobj("AppId").getString().compare(cp_app_to_change_focus) )
   {
   int returnCode = vfimac::sysToForeground(APP_MANIFEST_ID);
   LOGF_INFO(lh, "sysToForeground(%s): %d", APP_MANIFEST_ID.c_str(), returnCode);
   }
   }
}
```
