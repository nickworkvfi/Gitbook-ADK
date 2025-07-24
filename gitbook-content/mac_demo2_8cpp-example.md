---
hidden: true
title: mac_demo2.cpp
---

``` cpp
// SDK
#include <string>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <sys/time.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <fcntl.h>
#include <pwd.h>
#include <grp.h>
// ADK
#include "html/gui.h"
#include "ipc/jsobject.h"
#include "ipc/notify.h"
#include "log/liblog2.h"
using namespace std;
using namespace vfigui;
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
const int SUCCEED = 0;
const int FAIL = -1;
const std::string one_receiver("1");
const std::string appid( "MACDEMO2" );
const std::string device_control_request_trigger("_MacControlRequest");
const std::string device_control_response_trigger("_MacControlResponse");
// functions
static int to_foreground( const std::string & appid );
static int launchDemo();
static int showPrevApp();
static int showDesktop();
static int manifestScan();
static int showPowerPanel();
static void to_foreground();
static void in_foreground();
static void show_prev();
static bool write_data( const std::string & file, const std::string & data );
static void device_resp_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags);
static void mac_response_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags);
enum
{
   EXIT = -2,
   PKG_LIST = 0,
   MANIFEST,
   LAUNCH,
   FOREGROUND,
   DESKTOP,
   POWER_PANEL,
   PREV_APP,
};
struct UIMenuEntry menu[]=
{
   {"Get package list", PKG_LIST, 0},
   {"Launch app", LAUNCH, 0},
   {"To foreground", FOREGROUND, 0},
   {"Manifest scan", MANIFEST, 0},
   {"Show desktop", DESKTOP, 0},
   {"Show power panel", POWER_PANEL, 0},
   {"Show prev app", PREV_APP, 0},
   {"Exit", EXIT, 0},
};
  
static LibLogHandle lh = LOGAPI_INIT(appid.c_str());
int main(int argc, char **argv, char **envp)
{
   int status = SUCCEED;
   // will dump provided environment variables
   std::string envs;
   while(*envp)
   {
   envs += *envp;
   envs += "\n";
   envp ++;
   }
   write_data("/tmp/mac_demo2_envs.txt", envs);
   // will dump provided argument variables
   std::string args;
   while(*argv)
   {
   args += *argv;
   args += "\n";
   argv ++;
   }
   write_data("/tmp/mac_demo2_args.txt", args);
   vfiipc::ipcSetAppID( appid );
   vfigui::uiSetPropertyInt(UI_PROP_CIRCULAR_MENU,1);
   status = vfiipc::ipcRegisterNotificationCB(
   device_control_response_trigger,
   device_resp_callback,
   NULL );
   if ( SUCCEED != status )
   {
   LOGF_ERROR(lh, "Can't register IPC trigger callback[%d]",status);
   }
   status = vfiipc::ipcRegisterNotificationCB(
   device_control_response_trigger,
   mac_response_callback,
   NULL );
   if ( SUCCEED != status )
   {
   LOGF_ERROR(lh, "Can't register IPC trigger callback[%d]",status);
   }
   bool loop = true;
   int s=0;
   while(loop)
   {
   s = uiMenu("mainmenu","demo2",menu,sizeof(menu)/sizeof(menu[0]),s>=0?s:0);
   switch(s)
   {
   case vfigui::UI_ERR_CONNECTION_LOST:
   {
   sleep(2);
   break;
   }
   case FOREGROUND:
   {
   to_foreground( "demo1" );
   break;
   }
   case LAUNCH:
   {
   launchDemo();
   break;
   }
   case MANIFEST:
   {
   manifestScan();
   break;
   }
   case PREV_APP:
   {
   showPrevApp();
   break;
   }
   case POWER_PANEL:
   {
   showPowerPanel();
   break;
   }
   case DESKTOP:
   {
   showDesktop();
   break;
   }
   default:
   {
   break;
   }
   case EXIT:
   {
   loop = false;
   break;
   }
   }
   }
   return status;
}
static int to_foreground( const std::string & appid )
{
   vfiipc::JSObject jsobj;
   const std::string mac_id("_mac");
   const std::string appid_field("appid");
   const std::string cmd_field("cmd");
   const std::string cmd("to_foreground");
   jsobj(cmd_field)=cmd;
   jsobj(appid_field)=appid;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int manifestScan()
{
   const std::string mac_id("_mac");
   const std::string cmd("scan_manifests");
   const std::string cmd_field("cmd");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int showPrevApp()
{
   const std::string mac_id("_mac");
   const std::string cmd("show_prev_app");
   const std::string cmd_field("cmd");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int showPowerPanel()
{
   const std::string mac_id("_mac");
   const std::string cmd("show_power_panel");
   const std::string cmd_field("cmd");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int showDesktop()
{
   const std::string mac_id("_mac");
   const std::string cmd("show_desktop");
   const std::string cmd_field("cmd");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int launchDemo()
{
   const std::string cmd_field("cmd");
   const std::string args_field("args");
   const std::string mac_id("_mac");
   const std::string cmd("launch_appid");
   const std::string appid_field("appid");
   const std::string appid("demo1");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   jsobj(appid_field)=appid;
   jsobj(args_field)[0]="boo";
   jsobj(args_field)[1]="foo";
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static int pkgList()
{
   const std::string mac_id("_mac");
   const std::string cmd_field("cmd");
   const std::string cmd("get_pkg_list");
   vfiipc::JSObject jsobj;
   jsobj(cmd_field)=cmd;
   return vfiipc::ipcNotify(mac_id,device_control_request_trigger,jsobj);
}
static void device_resp_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
   LOGF_TRACE( lh, "trigger from[%s] to[%s] id[%s] flags[%d] jsobj[%s]",
   from.c_str(),
   to.c_str(),
   notification_id.c_str(),
   flags,
   jsobj.dump().c_str() );
}
static void dispBacklight()
{
   vfiipc::JSObject jsobj;
   jsobj("cmd")="display_backlight";
   jsobj("value")="100";
   int r = vfiipc::ipcNotify(one_receiver,device_control_request_trigger, jsobj, 0 );
   if (r==SUCCEED)
   {
   uiConfirm("confirm",uiPrint("Backlight set:%d<br>",r));
   }
   else
   {
   uiConfirm("confirm",uiPrint("Error:%d<br>",r));
   }
}
static void mac_response_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
   LOGF_TRACE(lh, "demo trigger from[%s] to[%s] id[%s] flags[%d] json[%s]",
   from.c_str(),
   to.c_str(),
   notification_id.c_str(),
   flags,
   jsobj.dump().c_str());
}
static void set_appid()
{
   vfiipc::JSObject jsobj;
   jsobj("cmd")="to_foreground";
   jsobj("appid")="demo2";
   vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
}
static void to_foreground()
{
   vfiipc::JSObject jsobj;
   jsobj("cmd")="to_foreground";
   jsobj("appid")="demo2";
   vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
}
static void in_foreground()
{
   vfiipc::JSObject jsobj;
   jsobj("cmd")="in_foreground";
   vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
}
static void set_cp_env()
{
   const std::string value1("test1");
   const std::string value2("test2");
   const std::string name1("name1");
   const std::string name2("name2");
   vfiipc::JSObject data;
   vfiipc::JSObject jsobj;
   jsobj("cmd")="set_env_data";
   data(name1)=value1;
   data(name2)=value2;
   jsobj("data")=data;
   vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
}
static void show_prev()
{
   vfiipc::JSObject jsobj;
   jsobj("cmd")="show_prev_app";
   vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
}
static bool write_data(const std::string & file, const std::string & data )
{
   int ret = 0;
   FILE *fp=fopen(file.c_str(),"wb");
   if(!fp) return false;
   fprintf(fp,"%s\n",data.c_str());
   int r=ferror(fp);
   fclose(fp);
   int fd = open(file.c_str(), O_RDWR);
   LOGF_TRACE(lh, "open [%s]: [%d]", file.c_str(), fd );
   if(fd >= 0)
   {
   struct passwd *pwd = getpwnam("usr2");
   struct group *grp = getgrnam("share");
   LOGF_TRACE(lh, "pwd: 0x%x grp: 0x%x", pwd, grp );
   if(pwd && grp)
   {
   ret = fchown(fd, pwd->pw_uid, grp->gr_gid);
   LOGF_TRACE(lh, "chown [%s]: [%d]", file.c_str(), ret );
   }
   close(fd);
   }
   return (r==0);
}
```
