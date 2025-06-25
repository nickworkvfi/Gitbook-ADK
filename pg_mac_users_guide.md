---
title: ADK-MAC Programmers Guide
---

# ADK-MAC Programmers Guide

# Preface

This guide provides information on the usage of the ADK Multi Application Controller (ADK-MAC).

This includes information on [libvfimac](mac_8h.md#file-mac.h) library, as well as details on MAC (Multi Application Controller) daemon and [MCP] (MAC Control Panel) application.

## Audience

This document is meant for programmers who want to understand and use ADK Multi Application Controller.

## Organization

This guide is organized as follows:

[Chapter 1, Introduction]: Introduction to ADK-MAC.

[Chapter 2, Getting Started]: Explains concept.

[Chapter 3, Programming]: Presents common uses.

[Chapter 4, System Setup and Requirements]: Compiler and linker settings, dependencies to other components, environment setup.

[Chapter 5, Troubleshooting]: Solutions for possible issues.

[Appendix: Glossary]: Listing and definitions of various acronyms and terms

[Appendix: Desktop]: Desktop
[Appendix: Statusbar]: Statusbar
[Appendix: Hotkeys]: Hotkeys

[Appendix: Service button broadcast]: Service button broadcast

[Appendix: Configuration]: Configuration file

[Appendix: Manifest file]: Application manifest file

[Appendix: Virtual keyboard]: Virtual keyboard

[Appendix: Custom resources]: Custom resources

[Appendix: Commerce Platform Application] Commerce Platform Application

[Appendix: MCP]: MAC Control Panel

[Appendix: MAC language setting] MAC language setting

[Appendix: Layout]: Layout files

[Appendix: Events]: Events

[Appendix: Notification]: Notification interface

[Appendix: System Notifications]: System Notifications interface

[Appendix: Recovery]: Application recovery

[Appendix: Environment variables]: Environment variables

[Appendix: ARRS]: Android Remote Rendering Service

[Appendix: Remote display mode]: Remote display mode

[Appendix: Battery status control (VOS2 platform)]: Battery status control for VOS2 platform

[Appendix: Devices]: Device-specific information

# Introduction

MAC provides launcher functionality for native applications (written in C/C++) and [Commerce Platform] applications (written in JS and HTML). It can be used to launch both user (usr1-usr15) and system (sys13 (sys\_\* for VOS3)) applications (e.g. Comm Control Panel).

MAC analyzes installed application [manifest files] (\*.mft files) and provides possibility to launch them automatically (on startup) or manually (using [desktop] icons or API from [mac.h](mac_8h.md#file-mac.h)). MAC Desktop can be accessed from application using [hotkeys].

CP applications can be launched automatically by specific trigger points defined in [Commerce Platform] scheme.

MAC provides a global [statusbar] which reports terminal communication channel status, battery status and other other useful information. Content of the global [statusbar] is maintained independently from applications.

On touch screen devices MAC provides [virtual keyboard] for input. Virtual keyboard can be enabled/disabled using API. It can also be set to automatic mode, when it will appear on the screen if corresponding input is active. Virtual keyboard can be disabled in MAC [configuration files].

MAC also acts as a windows manager. It can be used to dynamically change window [layout].

If needed MAC [resources] can be changed and replaced with custom ones. MAC configuration can be changed by installing extra [configuration] files.

As part of delivery MAC provides MAC Control Panel ([MCP]). This is GUI application, which provides useful information about system. Available information includes used ADK and VOS versions, hardware details (screen resolution, RAM and flash size, model name, etc), device mode (PROD/CPDEV), sponsor certificate details, etc.

On Dual Chip models (e.g. M424, M440, CM5) MAC can run in [ARRS] mode. In this case, applications runs on VOS, but GUI is streamed to Android Remote Rendering Service in Android OS.

## Concepts

MAC API is declared in [mac.h](mac_8h.md#file-mac.h) header file.

# Getting Started

## Setup

### Running on VOS

### Installation

MAC release consists of multiple packages:

| Package name                 | Description                               |
| ---------------------------- | ----------------------------------------- |
| dl.mac-3.71.6.tgz            | MAC daemon                                |
| dl.mac-remove-3.71.6.tgz     | MAC daemon removal package                |
| dl.mac-res-3.71.6.tgz        | MAC GUI resources                         |
| dl.mac-res-remove-3.71.6.tgz | MAC GUI resource removal package          |
| dl.mcp-3.71.6.tgz            | MCP application                           |
| dl.mcp-remove-3.71.6.tgz     | MCP application removal package           |
| dl.libmac-3.71.6.tgz         | Library for interacting with MAC          |
| dl.libmac-remove-3.71.6.tgz  | MAC library removal package               |
| dl.libcpr-3.71.6.tgz         | Library to enable Commerce Platform (CPR) |
| dl.libcpr-remove-3.71.6.tgz  | CPR library removal package               |

Removal packages are not needed for regular use. They are needed only if you need to downgrade particular component or you don't need it.

# Presents common uses

For application to appear on MAC desktop, it should provide its manifest file. Manifest file explains how and when application should be launched. Manifest file should be located in www folder. If application runs under usr2 it should put its manifest file into /home/usr2/www/. Example: /home/usr1/www/app.mft.

Manifest file example:

```cpp
[application]
id=demo
version=1.0.0
app_resource_dir=demo

[desktop]
label=demo
cmdline=../demo
```

This manifest file will add a new icon to MAC desktop, which will have label "demo". After you press this icon /home/usr2/demo will be launched and application GUI appear on foreground. You can get back to MAC destkop using hotkeys (e.g. X+3). Multiple applications can run simultaneously and you can switch between them using MAC desktop. app_resource_dir - is needed for resource separation. If this field is set to "demo" ADK-GUI will search for resources in /home/usr2/www/demo folder. If app_resource_dir is not set, ADK-GUI will search for resources in /home/usr2/www.

Application doesn't need to link against libvfimac to be launched by MAC

If you need your application to be launched on system startup, please add autolaunch section to your manifest file. This will automatically bring your application to foreground after system startup.

Manifest file example:

```cpp
[application]
id=demo
version=1.0.0
app_resource_dir=demo

[desktop]
label=demo
cmdline=../demo

[autolaunch]
cmdline=../demo
```

After application exits, MAC will clear-up its resources, will destroy its GUI region and bring last visible application to foreground. If no application is running, MAC desktop will appear. If your application needs to restricts access to terminal screen, it can lock screen using [vfimac::sysLockLayout](namespacevfimac.md#function-syslocklayout) API. This way, other applications can't take over focus.

Application can lock layout only it is currently on foreground.

If application needs to be started by other means (e.g. SI or GDB) and not by MAC, it needs to invoke [vfimac::sysSetAppid](namespacevfimac.md#function-syssetappid) to register itself in MAC. In this case it doesn't need to install its manifest file. After [vfimac::sysSetAppid](namespacevfimac.md#function-syssetappid) is invoked, MAC will create new GUI region for your application and will set needed [environments] for application to use this GUI region. Same approach should be applied if application spawns multiple threads and each of them wants to show their own GUI.

Make sure to invoke [vfimac::sysSetAppid](namespacevfimac.md#function-syssetappid) before invoking any ADK-GUI APIs.

Make sure to invoke [vfimac::sysUnSetAppid](namespacevfimac.md#function-sysunsetappid) before exiting to free used resources and destroy application GUI region.

```cpp
// Register application in MAC. This will set all needed environment values,
// and will create new GUI region for application.
vfimac::sysSetAppid("demo");
// Show loading screen
vfimac::sysShowProgress( "Loading", 10 );
// Bring application to foreground
vfimac::sysToForeground("demo");
// Show screen.html
vfigui::uiInvokeURLAsync( "screen.html" );
// Free used resources, destroy used GUI region.
vfimac::sysUnSetAppid();
```

If MAC functionality is not needed for particular setup, it can be disabled using configuration file.

```cpp
[gui]
window_management=n
```

In this case MAC will show splash screen with ADK version in GUI region 0. It will autolaunch only service applications (applications without GUI) and would not interact with GUI regions anymore. This allows GUI region 0 to be used by payment applicaiton. Splash screen can be disabled by corresponding field in configuration file.

![splash.png](.//splash.png)MAC splash screen

```cpp
[gui]
window_management=n
splash_screen=n
```

Also, window management is disabled on headless devices, e. g. devices without display. They will launch service applications only.

But it is possible to add remote display for such headless devices, see [Appendix: Remote display mode].

## Multiple demo applications are provided in MAC example folder

[libvfimac](mac_8h.md#file-mac.h) API usage example. mac_demo1 application source code: ```cpp

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

#if defined \_VOS1
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
        {"GUI region",                   GUI_REGION,         0},
        {"Add system notification",      SYSTEM_NOTIFICATION_ADD,   0},
        {"System notifications list",    SYSTEM_NOTIFICATION_LIST,  0},
        {"Remove system notification",   SYSTEM_NOTIFICATION_REMOVE,0},
        {"Trigger txn start",            TRIGGER_TXN_START,  0},
        {"Trigger manual launch",        TRIGGER_MANUAL,     0},
        {"Trigger manual sync",          TRIGGER_MANUAL_SYNC,0},
        {"Trigger idle",                 TRIGGER_IDLE,       0},
        {STR_TRIGGER_LOOP,               TRIGGER_LOOP,       0},
        {STR_TRIGGER_IDLE_LOOP,          TRIGGER_IDLE_LOOP,  0},
        {"Screenshot",                   SCREENSHOT,         0},
        {"Get CP app root dir",          GET_CP_APP_ROOT_DIR,0},
        {"Stop all cp apps",             STOP_CP_APPS,       0},
        {"Stop all usr apps",            STOP_USR_APPS,      0},
        {"Stop other apps",              STOP_OTHER_APPS,    0},
        {"Install CP app",               CP_INSTALL,         0},
        {"Stop by appid",                STOP_APPID,         0},
        {"Invoke action",                ACTION,             0},
        {"Launch by appid",              LAUNCH,             0},
        {"Launch in background",         LAUNCH_BACKGROUND,  0},
        {"Is running",                   IS_RUNNING,         0},
        {"Autolaunch",                   AUTOLAUNCH,         0},
        {"To foreground",                FOREGROUND,         0},
        {"In foreground",                IN_FOREGROUND,      0},
        {"Fullscreen on",                FULLSCREEN_ON,      0},
        {"Fullscreen off",               FULLSCREEN_OFF,     0},
        {"Lock layout",                  LAYOUT_LOCK,        0},
        {"Unlock layout",                LAYOUT_UNLOCK,      0},
        {"Virtual keyboard test",        KEYBOARD_TEST,      0},
        {"Virtual keyboard on",          KEYBOARD_ON,        0},
        {"Virtual keyboard off",         KEYBOARD_OFF,       0},
        {"Virtual keyboard numeric",     KEYBOARD_NUMERIC,   0},
        {"Virtual keyboard alpha",       KEYBOARD_ALPHA,     0},
        {"Virtual keyboard capitalized", KEYBOARD_CAP,       0},
        {"Statusbar on",                 STATUSBAR_ON,       0},
        {"Statusbar off",                STATUSBAR_OFF,      0},
        {"Statusbar refresh",            STATUSBAR_REFRESH,  0},
        {"Statusbar state",              STATUSBAR_STATE,    0},
        {"Statusbar values",             STATUSBAR_VALUES,   0},
        {"Application list",             APP_LIST,           0},
        {"Manifest scan",                MANIFEST,           0},
        {"Set CP context values",        SET_CTX_VALUES,     0},
        {"Show control panel",           CONTROL_PANEL,      0},
        {"Show power panel",             POWER_PANEL,        0},
        {"Show desktop",                 DESKTOP,            0},
        {"libmac version",               LIBMAC_VER,         0},
        {"MAC version",                  MAC_VER,            0},
        {"Language",                     LANG,               0},
        {"Exit",                         EXIT,               0},
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
void \*data,
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
void \*data,
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

````

_Filename: mac_demo1.cpp_

Notification interface usage example. mac_demo2 application source code: ```cpp

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
    {"Get package list",             PKG_LIST,               0},
    {"Launch app",                   LAUNCH,                 0},
    {"To foreground",                FOREGROUND,             0},
    {"Manifest scan",                MANIFEST,               0},
    {"Show desktop",                 DESKTOP,                0},
    {"Show power panel",             POWER_PANEL,            0},
    {"Show prev app",                PREV_APP,               0},
    {"Exit",                         EXIT,                   0},
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
        struct group  *grp = getgrnam("share");
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

````

_Filename: mac_demo2.cpp_

# Compiler and linker settings, dependencies to other components, environment setup

To use MAC API, application needs to include API declaration from [mac.h](mac_8h.md#file-mac.h) header file, which is located in sysinfo folder.

```cpp
#include <sysinfo/mac.h>
```

Application also needs to link against libvfimac library. This is done by adding "-lvfimac" to your linking list. If your application needs to interact with MAC using notification interface, link it against IPC library by adding "-lvfiipc". Example:

```cpp
g++ -L/adk/lib/ -Wall -o demo.out demo.cpp -lvfiipc -lvfimac
```

MAC depends on certain ADK components:

| Component | Purpose                                     |
| --------- | ------------------------------------------- |
| ADK-GUI   | GUI rendering, CP application execution     |
| ADK-LOG   | Logging mechanism                           |
| ADK-COM   | Communication interface status on statusbar |
| ADK-IPC   | Notification interface                      |
| ADK-PM    | Power management status notifications       |
| ADK-SYS   | Generic information about system            |

# Troubleshooting

## FAQ

Q: Do application needs to link against libvfimac?

A: For regular use, it is enough to provide [manfiest] file. Application doesn't need to link against library, if it doesn't use any of its functionality.

Q: Why application doesn't appear on desktop?

A: Please check applications [manifest] file permissions. Manifest file should be included in share group. Manifest file should include "desktop" section, otherwise it will not appear on MAC desktop.

Q: Application GUI blinks on screen for a second, after that MAC desktop appears on top of it.

A: Please check that there is no start file in your application control folder (e.g. CONTROL/start). Start file makes your application to be started by SI. This will result in conflict with ADK environment. Application should be started by MAC based on provided manifest file. Other option is to invoke [vfimac::sysSetAppid](namespacevfimac.md#function-syssetappid) to register application inside MAC.

Q: How to restart applications, without rebooting device?

A: Use [vfimac::sysRelaunchApps](namespacevfimac.md#function-sysrelaunchapps) API to restart applications.

Q: How to hide my application from MAC desktop?

A:

1. Remove desktop section from application manifest file.
2. Set hide field in manifest desktop section to true.
3. Hide certain applications by setting hide_appids field in MAC configuration file.

## Logging

MAC is using ADK-LOG component for logging. Please refer to the ADK-LOG documentation for details. Used logging channels:

| Logging channel | Description                            |
| --------------- | -------------------------------------- |
| MAC             | [MAC daemon logs]                      |
| MACCL           | [MAC library logs](namespacevfimac.md) |
| MCP             | [MAC control panel logs]               |
| CPR             | [Commerce Platform Runtime logs]       |

## Debugging

# Appendix: Glossary

| Term               | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| ADK                | Application Development Kit                                                                 |
| MAC                | Multi Application Controller                                                                |
| MCP                | MAC Control Panel                                                                           |
| API                | Application Program Interface                                                               |
| GUI                | Graphical User Interface                                                                    |
| IPC                | Inter Process Communication                                                                 |
| CPA                | Commerce Platform Application. Written in JS and HTML. Runs in CPR.                         |
| CPR                | Commerce Platform Runtime. ADK runtime for CPA.                                             |
| CPL                | Commerce Platform Library                                                                   |
| GDB                | GNU Debugger                                                                                |
| UI                 | User Interface                                                                              |
| OS                 | Operating System                                                                            |
| CP                 | Commerce Platform                                                                           |
| HTML               | Hypertext Markup Language                                                                   |
| JS                 | Java Script                                                                                 |
| SI                 | Secure Installer - used for installing/starting programms on VOS                            |
| ARRS               | Android Remote Rendering Service - Application on android side, which renders GUI from VOS. |
| ADE                | Verifone Encryption Scheme                                                                  |
| JSON               | JavaScript object notation                                                                  |
| INI                | Configuration file format                                                                   |
| HW                 | Hardware                                                                                    |
| Sysmode            | VOS system application                                                                      |
| Native application | Application written in C++/C. Usually payment application.                                  |
| BT                 | Bluetooth                                                                                   |
| VOS                | Verifone's OS. Terminal examples: Ux300, Ux301 and Mx915                                    |
| VOS2               | Verifone's OS 2. Terminal examples: P400, V240M and E285                                    |
| VOS3               | Verifone's OS 3. Terminal examples: P630, Ux302 and M450                                    |

# Appendix: Desktop

![mac_desktop.png](.//mac_desktop.png)MAC desktop

MAC acts as ADK launcher.

It provides desktop, which can be used by user to start applications by pressing on chosen icon.

If application wants to appear on desktop, it should include desktop section in its [manifest file].

If application needs to have custom icon, it needs to be set in desktop section icon field.

If icon is not set, default one will be used.

Button text is defined in desktop section "label" field.

It is possible to hide certain applications from desktop by using hide_appids field in [MAC configuration file].

MAC desktop design, can be modified using [custom resources].

Application can request MAC to show desktop using [vfimac::sysShowDesktop](namespacevfimac.md#function-sysshowdesktop).

User can also request MAC to show desktop by using [hotkeys].

On units with hardware keyboard, it is possible to use keyboard for navigation.

Supported keystrokes:

| Key | Action                                           |
| --- | ------------------------------------------------ |
| \*  | Move cursor to next icon                         |
| #   | Move cursor to previous icon                     |
| 2   | Move cursor up                                   |
| 8   | Move cursor down                                 |
| 4   | Move cursor left                                 |
| 6   | Move cursor right                                |
| O   | Green key is used to launch selected application |
| x   | Red key will bring back last visible application |

![default-icon.png](.//default-icon.png)Default desktop icon

MAC desktop can be password protected. To enable this functionality password field should be added to MAC [configuration file]. Field stores MD5 hash of chosen password. For example MD5 hash for 166831 password equals to 87ac3c343f7ef687de1492be87ab1b2f. Configuration file example:

```cpp
[desktop]
password=87ac3c343f7ef687de1492be87ab1b2f
```

md5sum command line tool can be used to generate password hash. Example:

```cpp
:~# echo 166831 | md5sum | cut -d' ' -f 1
87ac3c343f7ef687de1492be87ab1b2f
```

Minimal password length is 6 characters.

Maximal password lenght is 10 characters.

Only numeric characters are allowed.

![password.png](.//password.png)Password input screen

Password screen can be customized using [MAC custom resources].

VOS3 terminals use different MAC desktop protection method. Please refer to "VOS3 - UG - MAC Password protection user guide".

# Appendix: Statusbar

![statusbar.png](.//statusbar.png)MAC statusbar

MAC provides global statusbar, which indicates active communication interfaces, as well battery charge level, time and ADE status. Application can show/hide statusbar using [vfimac::sysStatusbar](namespacevfimac.md#function-sysstatusbar) API. Statusbar visibility configuration is stored independently for every application. Application can request to force refresh statusbar using [vfimac::sysStatusbarRefresh](namespacevfimac.md#function-sysstatusbarrefresh) API. There is a way to add extra icons to statusbar. This can be done, by installing [custom MAC resources]. Custom icon visibility can be changes using [vfimac::sysSetStatusbarValues](namespacevfimac.md#function-syssetstatusbarvalues) API. Application can set initial statusbar visibility state using [manifest file]. MAC statusbar functionality can be enabled/disabled using MAC [configuration file].

Standard statusbar icons:

| Icon        | ![ethernet_active.png](.//ethernet_active.png)![ethernet_active.png](.//ethernet_active.png)![ethernet_active.png](.//ethernet_active.png)![ethernet_active.png](.//ethernet_active.png) | ![bluetooth_active.png](.//bluetooth_active.png)![bluetooth_active.png](.//bluetooth_active.png)![bluetooth_active.png](.//bluetooth_active.png)![bluetooth_active.png](.//bluetooth_active.png) | ![bluetooth_beaconing.png](.//bluetooth_beaconing.png)![bluetooth_beaconing.png](.//bluetooth_beaconing.png)![bluetooth_beaconing.png](.//bluetooth_beaconing.png)![bluetooth_beaconing.png](.//bluetooth_beaconing.png) | ![bluetooth_connected.png](.//bluetooth_connected.png)![bluetooth_connected.png](.//bluetooth_connected.png)![bluetooth_connected.png](.//bluetooth_connected.png)![bluetooth_connected.png](.//bluetooth_connected.png) | ![bluetooth_dial_up.png](.//bluetooth_dial_up.png)![bluetooth_dial_up.png](.//bluetooth_dial_up.png)![bluetooth_dial_up.png](.//bluetooth_dial_up.png)![bluetooth_dial_up.png](.//bluetooth_dial_up.png) | ![bluetooth_ethernet.png](.//bluetooth_ethernet.png)![bluetooth_ethernet.png](.//bluetooth_ethernet.png)![bluetooth_ethernet.png](.//bluetooth_ethernet.png)![bluetooth_ethernet.png](.//bluetooth_ethernet.png) | ![modem_connected.png](.//modem_connected.png)![modem_connected.png](.//modem_connected.png)![modem_connected.png](.//modem_connected.png)![modem_connected.png](.//modem_connected.png) | ![shield.png](.//shield.png)![shield.png](.//shield.png)![shield.png](.//shield.png)![shield.png](.//shield.png) | ![wifi_3.png](.//wifi_3.png)![wifi_3.png](.//wifi_3.png)![wifi_3.png](.//wifi_3.png)![wifi_3.png](.//wifi_3.png) | ![gprs_0.png](.//gprs_0.png)![gprs_0.png](.//gprs_0.png)![gprs_0.png](.//gprs_0.png)![gprs_0.png](.//gprs_0.png) | ![gprs_5.png](.//gprs_5.png)![gprs_5.png](.//gprs_5.png)![gprs_5.png](.//gprs_5.png)![gprs_5.png](.//gprs_5.png) | ![battery_half.png](.//battery_half.png)![battery_half.png](.//battery_half.png)![battery_half.png](.//battery_half.png)![battery_half.png](.//battery_half.png) | ![battery_low.png](.//battery_low.png)![battery_low.png](.//battery_low.png)![battery_low.png](.//battery_low.png)![battery_low.png](.//battery_low.png) | ![battery_fault.png](.//battery_fault.png)![battery_fault.png](.//battery_fault.png)![battery_fault.png](.//battery_fault.png)![battery_fault.png](.//battery_fault.png) | ![battery_charging.png](.//battery_charging.png)![battery_charging.png](.//battery_charging.png)![battery_charging.png](.//battery_charging.png)![battery_charging.png](.//battery_charging.png) | ![usb_active.png](.//usb_active.png)![usb_active.png](.//usb_active.png)![usb_active.png](.//usb_active.png)![usb_active.png](.//usb_active.png) | ![serial_active.png](.//serial_active.png)![serial_active.png](.//serial_active.png)![serial_active.png](.//serial_active.png)![serial_active.png](.//serial_active.png) | ![sim.png](.//sim.png)![sim.png](.//sim.png)![sim.png](.//sim.png)![sim.png](.//sim.png) | ![warn.png](.//warn.png)![warn.png](.//warn.png)![warn.png](.//warn.png)![warn.png](.//warn.png) | ![car.png](.//car.png)![car.png](.//car.png)![car.png](.//car.png)![car.png](.//car.png) |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Description | Ethernet active                                                                                                                                                                          | BT active                                                                                                                                                                                        | BT beaconing                                                                                                                                                                                                             | BT connected                                                                                                                                                                                                             | BT dial-up                                                                                                                                                                                               | BT ethernet                                                                                                                                                                                                      | Modem active                                                                                                                                                                             | ADE active                                                                                                       | WiFi signal level                                                                                                | No GSM signal                                                                                                    | GSM signal level                                                                                                 | Battery normal                                                                                                                                                   | Battery low                                                                                                                                              | Battery fault                                                                                                                                                            | Unit is line powered                                                                                                                                                                             | USB active                                                                                                                                       | Serial port active                                                                                                                                                       | SIM                                                                                      | PCI reboot warning                                                                               | Car charger                                                                              |

Continuation. Statusbar system notification icons:
| Icon | ![information.png](.//information.png)![information.png](.//information.png)![information.png](.//information.png)![information.png](.//information.png) | ![warning.png](.//warning.png)![warning.png](.//warning.png)![warning.png](.//warning.png)![warning.png](.//warning.png) | ![error.png](.//error.png)![error.png](.//error.png)![error.png](.//error.png)![error.png](.//error.png) |
| -------- | -------- | -------- | -------- |
| Description | Info | Warning | Critical |

Battery icon will not appear on line powered devices.

On touch screen devices, statusbar behaves as button. It supports both short and long press. This functionality is configurable using [configuration file].
| Action | Description |
| -------- | -------- |
| Short press | [Show MAC desktop] |
| Long press | [Start MCP] |

Statusbar provides certain values to visualize system state. These values can be used, if user replaces statusbar.html with custom one.

|                                | type   | value        | description                                                                           |
| ------------------------------ | ------ | ------------ | ------------------------------------------------------------------------------------- |
| sys_mob_sim_slot               | int    | 1-2          | Active SIM slot                                                                       |
| sys_mob_netw_signal_level      | int    | 0-5          | GSM signal level                                                                      |
| sys_mob_netw_signal_percentage | int    | 0-100        | GSM signal percentage                                                                 |
| sys_mob_netw_signal_rssi       | int    | nn           | GSM signal RSSI                                                                       |
| sys_mob_netw_name              | string | Name         | Mobile network home operator name                                                     |
| sys_mob_netw_provider          | string | Name         | Mobile network provider                                                               |
| sys_mob_netw_type              | string | 2G,3G,4G     | GSM network type                                                                      |
| sys_wifi_signal_level          | int    | 0-4          | WiFi network signal level                                                             |
| sys_wifi_signal_percentage     | int    | 0-100        | WiFi network signal percentage                                                        |
| sys_eth_state                  | int    | 0-1          | Ethernet state                                                                        |
| sys_modem_state                | int    | 0-1          | Modem state                                                                           |
| sys_bt_state                   | int    | 0-1          | BT state                                                                              |
| sys_bt_eth                     | int    | 0-1          | BT Ethernet state                                                                     |
| sys_bt_modem                   | int    | 0-1          | BT modem state                                                                        |
| sys_ade_state                  | int    | 0-1          | ADE state                                                                             |
| sys_reboot_warn                | int    | 0-1          | PCI reboot warning                                                                    |
| sys_car_charger                | int    | 0-1          | Car charger mode active                                                               |
| sys_battery_level              | int    | 0-100        | Battery level                                                                         |
| sys_battery_percentage         | int    | 0-100        | Battery percentage, -1 if battery not available or percentage could not be determined |
| sys_battery_percentage_2       | string | 0%-100%      | Battery percentage #2                                                                 |
| sys_docking_status             | int    | 0-1          | Docking state                                                                         |
| sys_time                       | string | HH:MM        | Current time                                                                          |
| sys_time_year                  | string | yyyy         | Year                                                                                  |
| sys_time_month                 | string | "01"-"12"    | Month                                                                                 |
| sys_time_day                   | string | "01"-"31"    | Day                                                                                   |
| sys_time_hour                  | string | "00"-"23"    | Hour                                                                                  |
| sys_time_hour_monadic          | string | "0"-"23"     | Monadic hour                                                                          |
| sys_time_12h                   | string | "01"-"12"    | Hour in AM/PM designation                                                             |
| sys_time_12h_monadic           | string | "1"-"12"     | Monadic hour in AM/PM designation                                                     |
| sys_time_am_pm                 | string | "AM" or "PM" | AM/PM designation                                                                     |
| sys_time_min                   | string | "00"-"59"    | Minute                                                                                |
| sys_time_sec                   | string | "00"-"59"    | Second                                                                                |
| sys_button                     | int    | 0-1          | Statusbar button enabled/disabled                                                     |

Statusbar HTML example: ```html

<html>
<body>
<input type='timeout' style='display:none' value='-1'>
<?ifeq sys_button 1 (button nofocus style='width:100%;height:100%;border-width:0px;' action='return 0?cmd=show_desktop' action2='return 0?cmd=show_control_panel') ?>
<div style='overflow:hidden;height:100%;width:100%'>
<table cellspacing='2' cellpadding='0' border='0' 
    style='margin:0px;background-color:black; color:white; height:100%; width:100%'>
    <tr>
    <td style='height:100%;width:0px;font-size:12; text-align:left; vertical-align:center'>
        <?ifeq sys_mob_sim_slot 1           (img src='../images/sb/sim1.png')?> 
        <?ifeq sys_mob_sim_slot 2           (img src='../images/sb/sim2.png')?> 
    <td style='height:100%;width:0px;font-size:12; text-align:left; vertical-align:center'>
        <b><?var sys_mob_netw_type?></b>
    <td style='height:100%;width:100%; font-size:12; text-align:left; vertical-align:center'>
        <?ifeq sys_mob_netw_signal_level 0  (img src='../images/sb/gprs_0.png')?>
        <?ifeq sys_mob_netw_signal_level 1  (img src='../images/sb/gprs_1.png')?>
        <?ifeq sys_mob_netw_signal_level 2  (img src='../images/sb/gprs_2.png')?>
        <?ifeq sys_mob_netw_signal_level 3  (img src='../images/sb/gprs_3.png')?>
        <?ifeq sys_mob_netw_signal_level 4  (img src='../images/sb/gprs_4.png')?>
        <?ifeq sys_mob_netw_signal_level 5  (img src='../images/sb/gprs_5.png')?>
        <b><?var sys_mob_netw_provider?><b>
        <?ifin sys_wifi_signal_percentage  1 24  (img src='../images/sb/wifi_1.png')?>
        <?ifin sys_wifi_signal_percentage 25 49  (img src='../images/sb/wifi_2.png')?>
        <?ifin sys_wifi_signal_percentage 50 74  (img src='../images/sb/wifi_3.png')?>
        <?ifin sys_wifi_signal_percentage 75 100 (img src='../images/sb/wifi_4.png')?>
        <?ifeq sys_eth_state 1     (img src='../images/sb/ethernet_active.png')?>
        <?ifeq sys_modem_state 1   (img src='../images/sb/modem_connected.png')?>
        <?ifeq sys_bt_state 1      (img src='../images/sb/bluetooth_active.png')?>
        <?ifeq sys_bt_state 2      (img src='../images/sb/bluetooth_beaconing.png')?>
        <?ifeq sys_bt_state 3      (img src='../images/sb/bluetooth_connected.png')?>
        <?ifeq sys_bt_eth 1        (img src='../images/sb/bluetooth_ethernet.png')?>
        <?ifeq sys_bt_modem 1      (img src='../images/sb/bluetooth_dial_up.png')?>
        <?ifeq sys_usb_eth_state 1 (img src='../images/sb/usb_active.png')?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifeq sys_ade_state 1     (img src='../images/sb/shield.png')?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifeq sys_reboot_warn  1  (img src='../images/sb/warn.png')?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifeq notification_level 1  (img src='../images/sb/information.png')?>
        <?ifeq notification_level 2  (img src='../images/sb/warning.png')?>
        <?ifeq notification_level 3  (img src='../images/sb/error.png')?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifeq sys_battery_charge_mode 2 (img src='../images/sb/car.png')?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?foreach extra_icons || (img src='[]' style='width:10px')(td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center') | ?>  
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifin sys_battery_percentage_2 0 100 (b)(?var sys_battery_percentage_2 ?)(/b) ?>
    <td style='height:100%;width:0px;font-size:12px; text-align:right; vertical-align:center'>
        <?ifin sys_battery_level 100 111 (img src='../images/sb/battery_charging.png')?>
        <?ifeq sys_battery_level 0   (img src='../images/sb/battery_low.gif')?>
        <?ifeq sys_battery_level 1   (img src='../images/sb/battery_low.gif')?>
        <?ifeq sys_battery_level 2   (img src='../images/sb/battery_10.png')?>
        <?ifeq sys_battery_level 3   (img src='../images/sb/battery_20.png')?>
        <?ifeq sys_battery_level 4   (img src='../images/sb/battery_30.png')?>
        <?ifeq sys_battery_level 5   (img src='../images/sb/battery_40.png')?>
        <?ifeq sys_battery_level 6   (img src='../images/sb/battery_50.png')?>
        <?ifeq sys_battery_level 7   (img src='../images/sb/battery_60.png')?>
        <?ifeq sys_battery_level 8   (img src='../images/sb/battery_70.png')?>
        <?ifeq sys_battery_level 9   (img src='../images/sb/battery_80.png')?>
        <?ifeq sys_battery_level 10  (img src='../images/sb/battery_90.png')?>
        <?ifeq sys_battery_level 11  (img src='../images/sb/battery_100.png')?>
        <?ifeq sys_battery_level -2  (img src='../images/sb/battery_fault.gif')?>
        <?ifeq sys_battery_level -1  (div style='width:0px')(/div)?>
    <td style='height:100%;width:100%;font-size:12px; text-align:right; vertical-align:center'>
        <b><?var sys_time?></b>
</table>
</div>
<?ifeq sys_button 1 (/button) ?>
</body>
</html>
```

_Filename: statusbar.html_

Application can add custom icons to MAC statusbar. To use this functionality application needs to generate JSON encoded array with paths to icons and pass it in "extra_icons" field using [vfimac::sysSetStatusbarValues](namespacevfimac.md#function-syssetstatusbarvalues).

Only absolute path to icon is supported.

Usage example:

```cpp
vfiipc::JSObject jsobj;
jsobj[0] = "/home/usr4/www/mac_demo1/default/mail.png";
jsobj[1] = "/home/usr4/www/mac_demo1/default/glass.png";
std::map<std::string,std::string> values;
values["extra_icons"]=jsobj.dump();
returnCode = vfimac::sysSetStatusbarValues( values );
```

# Appendix: Hotkeys

MAC supports certain hotkey combinations. Hotkeys can be enabled or disabled using [configuration] file.

| Key combination | Action             |
| --------------- | ------------------ |
| X + 1           | [Start MCP]        |
| X + 3           | [Show MAC desktop] |
| 1 + 5 + 9       | [Show MAC desktop] |

On some units (e.g. e280, CM5, Ux115, etc) MAC can be shown by pressing sysmode button, instead of 1+5+9.

If MAC desktop is already visible, pressing 1+5+9 will start Sysmode (on VOS3 platform all user applications will be stopped).

Ux (trident) units only support sysmode button due to ADK-GUI limitations.

On UX700 device there are two extra hotkeys:
| Button | Action |
| -------- | -------- |
| service button #1 | [Show MAC desktop] |
| service button #2 | [Send a service button broadcast] |

These buttons can be found on the back of the device: ![ux700_buttons.png](.//ux700_buttons.png)Buttons on the back of UX700 device

On UX302 device there is only one service button which can be configured. By default, this button shows MAC desktop or shows MCP, and also sends a broadcast. If you want to override this, you can configure it using [configuration] file (sysmode_button and broadcast_button).

# Appendix: Service button broadcast

On UX700 and UX302 it is possible to use service button for app specific purposes - if service button gets pressed or released, MAC sends out a broadcast notification using ADK-IPC. Using this broadcast it is possible to override terminal's physical button for your own purpose - increase display brightness, enter some kind of app menu, etc. As broadcast is sent on press and release of the button, it is possible to do time specific things in your app also.

Broadcast will be sent with notification id: "SERVICE_BUTTON" which can be listened for.

Example:

```cpp
void cb( void *data,
    const std::string &from,
    const std::string &to,
    const std::string &notification_id,
    const vfiipc::JSObject &jsobj,
    unsigned flags)
{
    // Process button press here (button was pressed)
}

// init ADK-IPC
vfiipc::ipcSetAppID( "demo" );
// register broadcast callback
int status = vfiipc::ipcRegisterNotificationCB( "SERVICE_BUTTON" , cb, NULL );
```

# Appendix: Configuration file

MAC can be configured using mac.ini configuration file Configuration file is optional and can be used to override default settings. It is possible to have multiple configuration files in single delivery. This allows to have different behavior on different terminal models in same deliverable. Different configuration file locations have different priorities. Possible configuration file locations:

| Path (VOS/VOS2)                             | Priority | Details                                                     |
| ------------------------------------------- | -------- | ----------------------------------------------------------- |
| /etc/config/adk/www/mac/P400/mac.ini        | 1        | Will apply only to P400 model                               |
| /etc/config/adk/www/mac/240x320C15T/mac.ini | 2        | Will apply to all models with matching display and keyboard |
| /etc/config/adk/www/mac/default/mac.ini     | 3        | Will apply to all terminal models                           |
| /etc/config/mac/mac.ini                     | 4        | Will apply to all terminal models                           |

| Path (VOS3 only)                            | Priority | Details                                                     |
| ------------------------------------------- | -------- | ----------------------------------------------------------- |
| /home/usr1/adk/www/mac/P630/mac.ini         | 1        | Will apply only to P630 model                               |
| /etc/config/adk/www/mac/P630/mac.ini        | 2        | Will apply only to P630 model                               |
| /home/usr1/adk/www/mac/320x480C15T/mac.ini  | 3        | Will apply to all models with matching display and keyboard |
| /etc/config/adk/www/mac/320x480C15T/mac.ini | 4        | Will apply to all models with matching display and keyboard |
| /home/usr1/adk/www/mac/default/mac.ini      | 5        | Will apply to all terminal models                           |
| /etc/config/adk/www/mac/default/mac.ini     | 6        | Will apply to all terminal models                           |
| /etc/config/mac/mac.ini                     | 7        | Will apply to all terminal models                           |

Configuration file should be installed using "config" type package. See VOS documentation for more details.

Terminal model display and keyboard parameters are described in ADK-GUI documentation.

P400/P630 can be replaced with different model name.

240x320C15T/320x480C15T can be replaced with different display and keyboard combination.

Sample configuration package is available in mac example folder.

MAC configuration file is ini file with following structure:

| Section          | Field                      | Type   | Default                                | Description                                                                                                                                |
| ---------------- | -------------------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| statusbar        | enable                     | bool   | true                                   | Enable/disable MAC statusbar                                                                                                               |
| statusbar        | button                     | bool   | true                                   | Statusbar operates as a button                                                                                                             |
| statusbar        | com                        | bool   | true                                   | Enable communication icons on statusbar                                                                                                    |
| statusbar        | refresh_time               | int    | 60                                     | Statusbar refresh time in seconds                                                                                                          |
| vkeyboard        | enable                     | bool   | true                                   | Globally enables/disabled virtual keyboard                                                                                                 |
| vkeyboard        | auto                       | bool   | false                                  | Enables/disables automatic virtual keyboard mode                                                                                           |
| vkeyboard        | sound                      | bool   | false                                  | Enables/disables virtual keyboard sounds on keystrokes                                                                                     |
| vkeyboard        | alphanumeric               | bool   | true                                   | Enables/disables automatic mode for alphanumeric input                                                                                     |
| vkeyboard        | numeric                    | bool   | true                                   | Enables/disables automatic mode for numeric input                                                                                          |
| vkeyboard        | capitalized                | bool   | true                                   | Alphanumeric keyboard with capital letters will be used by default                                                                         |
| desktop          | hide_appids                | string | -                                      | List of application identifiers that should be hidden from MAC desktop                                                                     |
| desktop          | password                   | string | -                                      | Password hash (MD5 hash function)                                                                                                          |
| hotkeys          | enable                     | bool   | true                                   | Enable MAC hotkeys                                                                                                                         |
| hotkeys          | sysmode_button             | bool   | true                                   | Enable sysmode button (open MAC desktop, launch sysmode if already on MAC desktop)                                                         |
| hotkeys          | sysmode_button_mod         | int    | 1                                      | Allow sysmode launch by sysmode button                                                                                                     |
| hotkeys          | broadcast_button           | bool   | true                                   | Enable broadcast button (VOS3 only)                                                                                                        |
| power_management | battery_status_control     | bool   | true                                   | Enables battery status check (OK/NOK) during startup. Will show warning if battery is faulty                                               |
| power_management | battery_level_control      | bool   | false                                  | Enables battery level check during startup. Will not start applications if battery level below threshold                                   |
| power_management | battery_level_threshold_mV | int    | 3600                                   | Battery level threshold in mV. 3600 equals to 3.6V                                                                                         |
| power_management | notifications              | bool   | true                                   | Show power manager notifications on screen                                                                                                 |
| gui              | display                    | string | ":0"                                   | GUI_DISPLAY environment which will be used by MAC and will be passed to launched applications. Refer to GUI documentation for more details |
| gui              | window_management          | bool   | true                                   | Enable/disable MAC window management. If disabled MAC will start only service applications and will not interact with GUI regions          |
| gui              | keep_alive_interval        | int    | 2                                      | Interval time in seconds between sending keepalive probes                                                                                  |
| gui              | keep_alive_count           | int    | 3                                      | Number of keepalive probes to send before dropping the link                                                                                |
| gui              | splash_screen              | bool   | true                                   | Enable/disable MAC splash screen                                                                                                           |
| gui              | language                   | string | /home/sys13/www/mac/default/en-US.ctlg | Used language catalog file                                                                                                                 |
| cpr              | enable                     | bool   | true                                   | Enable/disable CPR. By default is disabled on VOS1 units to save memory                                                                    |

Sysmode launch by sysmode button has higher priority than MAC desktop password protection. Thus, double sysmode_button press with default sysmode button configuration will skip password prompt and launches Sysmode.

"sysmode_button" and "sysmode_button_mod" actions' matrix
| sysmode_button | sysmode_button_mod | Action on sysmode button (or 1+5+9 keys) press |
| -------- | -------- | -------- |
| true | 1 | Open MAC desktop, launch sysmode if on MAC desktop already |
| false | 1 | Launch sysmode |
| true | 0 | Open MAC desktop |
| false | 0 | Do nothing |

There are two options to launch Sysmode besides Sysmode button:

- Go to "MAC desktop" -> "Control Panel" -> "Sysmode"
- Press 1+5+9 keys combo (or physical Sysmode button) before MAC loaded completely (during MAC initialization progress screen displaying): ![mac_init.png](.//mac_init.png)MAC initialization progress screen

For VOS3 platform, "sysmode_button_mod" will allow (default value) or don't allow stopping of user apps. Popup message box "User applications have been stopped!" will not popup for

```cpp
[hotkeys]
sysmode_button=n
sysmode_button_mod=1
```

configuration if MAC desktop is in background (Control Panel is in foreground for example).

MAC is using "y" or "n" for boolean values.

Configuration file example: ```ini

[statusbar]
enable=y
button=y
com=y

[desktop]
hide_appids=ccp;mcp;

[hotkeys]
enable=y
sysmode_button=y

[power_management]
battery_level_control=y
battery_level_threshold_mV=3500

[gui]
keep_alive_count=3
keep_alive_interval=2

````

_Filename: mac.ini_

MAC release includes MAC configuration package, which can be used as reference.


# Appendix: Application manifest file

Each native application should provide its own manifest file. Manifest file can have either INI file or in JSON notation. Manifest file provides all kind of information about application. It defines when and how the application should be launched, how it should be represented on desktop and etc. Manifest file should have ".mft" extension, otherwise it will be ignored by MAC. Manifest file should be located in corresponding user www folder. For example, usr2 application should store its manifest file in /home/usr2/www (e.g. /home/usr2/www/mac_demo2.mft).

Make sure, that manifest file is added to share group. Otherwise MAC will not have access to it.

MAC scans /home/usr1/www/ - /home/usr16/www/ for user manifest files

MAC scans /home/sys1/www/ - /home/sys16/www/ for system manifest files

MAC is using "y" or "n" for boolean values in ini files


Manifest file structure:
| Section  | Field  | Type  | Default  | Description   |
|  -------- | -------- | -------- | -------- | -------- |
| application  | id  | string  | file name  | Unique application identifier   |
| application  | name  | string  | empty  | Optional application name   |
| application  | version  | string  | empty  | Application version   |
| application  | recover  | bool  | true  | Enable/disable application [recovery mechanism] |
| application  | status_bar  | bool  | true  | Statusbar visibility on startup   |
| application  | depends  | string  | empty  | Application list manifest owner depends on. This data is used to build dependency graph during autolaunch   |
| application  | allow_launch_on_tamper  | bool  | false  | Allow application launch if security key allows to bypass tamper   |
| desktop  | cmdline  | string  | empty  | Command to start application   |
| desktop  | label  | string  | id field  | Application label shown on desktop   |
| desktop  | translations  | string  | label field  | Translated application label shown on desktop   |
| desktop  | icon  | string  | /home/sys13/www/mac/images/default-icon.png  | Path to application icon shown on desktop   |
| desktop  | type  | string  | APPLICATION  | Application (with GUI) or Service (no GUI). Services will be started before applications.   |
| desktop  | args  | string  | empty  | Arguments passed to application   |
| desktop  | envs  | string  | empty  | Environment variables passed to application   |
| desktop  | hide  | bool  | false  | Hide application icon from desktop   |
| autolaunch  | cmdline  | string  | empty  | Command to start application   |
| autolaunch  | type  | string  | APPLICATION  | Application (with GUI) or Service (no GUI). Services will be started before applications.   |
| autolaunch  | args  | string  | empty  | Arguments passed to application   |
| autolaunch  | envs  | string  | empty  | Environment variables passed to application   |
| autolaunch  | start_hidden  | bool  | false  | Application will be launched, but not appear on foreground   |
| autolaunch  | resident  | bool  | false  | Service will not be restarted on GUI disconnect event.   |


Application manifest example (INI format): ```mft

[application]
id=mac_demo1
version=3.2.0
statusbar=y
app_resource_dir=mac_demo1
depends=mac_demo2;mac_demo3;
recover=n
allow_launch_on_tamper=y

[desktop]
label=MAC Demo 1
translations=de=MAC Demo 1;fr=MAC Démo 1;es=MAC manifestación 1;
icon=mac_demo1/default/verifone-icon.png
cmdline=../mac_demo1
args=r1d2 r2d3

[autolaunch]
cmdline=../mac_demo1
start_hidden=y
````

_Filename: mac_demo1.mft_

Service manifest example (INI format): ```mft

[application]
id=mac_demo3
version=3.16.3
name=demo3

[autolaunch]
cmdline=/home/usr3/mac_demo3
type=service
resident=y

[desktop]
label=mac_demo3
cmdline=/home/usr3/mac_demo3
type=service

````

_Filename: mac_demo3.mft_

Application manifest example (JSON format): ```mft

{
  "schema_version": "1.1",
  "application": {
    "id": "mac_demo2",
    "name": "mac_demo2",
    "version": "3.9.0",
    "status_bar": true,
    "recover": true,
    "app_resource_dir": "mac_demo2"
  },
  "desktop": {
    "label" : "mac_demo2",
    "type" : "APPLICATION",
    "cmdline": "../mac_demo2",
    "envs": [
      { "ADK_VAR1": "bar" },
      { "ADK_VAR2": "foo" },
      { "ADK_VAR3": "xyz" }
    ],
    "args": [ "arg1", "arg2", "arg3" ],
  },
  "autolaunch": {
    "cmdline"      : "../mac_demo2",
    "envs": [
      { "ADK_VAR1": "bar" },
      { "ADK_VAR2": "foo" },
      { "ADK_VAR3": "xyz" }
    ],
    "args": [ "arg1", "arg2", "arg3" ],
    "type": "APPLICATION",
  },
}
````

_Filename: mac_demo2.mft_

# Appendix: Virtual keyboard

On touch screen devices, MAC offers virtual keyboard option. Virtual keyboard configuration is stored separately for every application. It can be disabled globally using [configuration file]. Virtual keyboard mode can be cahnged using [vfimac::sysVirtualKeyboard](namespacevfimac.md#function-sysvirtualkeyboard) API.

| Mode                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| MAC_KBD_ON           | show virtual keyboard                                  |
| MAC_KBD_OFF          | hide virtual keyboard                                  |
| MAC_KBD_AUTO         | set virtual keyboard to auto mode                      |
| MAC_KBD_NUMERIC      | activate auto mode for numeric input                   |
| MAC_KBD_ALPHANUMERIC | activate auto mode for alphanumeric input              |
| MAC_KBD_CAPITALIZED  | set capitalized keyboard layout for alphanumeric input |

If auto mode is selected, MAC will show keyboard only when input field is active. Auto mode shows a keyboard for any input type. If you need to automatically show the keyboard for only one input type (numeric or alphanumeric), then use MAC_KBD_NUMERIC or MAC_KBD_ALPHANUMERIC. If you need to show capitalized keyboard layout use MAC_KBD_CAPITALIZED.

Virtual keyboard is auto-enabled for terminals without keyboard but with touch panel: e280S, e235, ... devices

MAC virtual keyboard can be customised using [custom resources]. Usage example:

```cpp
vfimac::sysVirtualKeyboard(vfimac::MAC_KBD_AUTO); //set auto mode
vfimac::sysVirtualKeyboard(vfimac::MAC_KBD_ALPHANUMERIC | vfimac::MAC_KBD_CAPITALIZED); // activate auto mode for alphanumeric input with default capitalized keyboard layout
```

![vkeyboardnum.png](.//vkeyboardnum.png)MAC Numeric virtual keyboard![vkeyboardan.png](.//vkeyboardan.png)MAC Alpha-numeric virtual keyboard![vkeyboardspec.png](.//vkeyboardspec.png)MAC Special character virtual keyboard

Configuration examples:

```cpp
[vkeyboard]
enable=y       # this option globally enables/disables virtual keyboard
auto=y         # this option will set keyboard to automated mode (keyboard will appear if input field is active)
alphanumeric=y # this option will enable auto mode for alphanumeric input fields by default
numeric=y      # this option will eanble auto mode for numeric input fields by default
capitalized=y  # this option will show alphanumeric keyboard with capital letters by default
```

Configuration parameters can be overridden using API call.

# Appendix: Custom resources

MAC graphical resources can be replaced with custom ones. MAC is using these files for GUI:

| File              | Description                        | Platforms |
| ----------------- | ---------------------------------- | --------- | --- | --- |
| VOS1              | VOS2                               | VOS3      |
| desktop.html      | Desktop                            | +         | +   | +   |
| kbd_reg.html      | Regular virtual keyboard           |           | +   | +   |
| kbd_cap.html      | Capitalized virtual keyboard       |           | +   | +   |
| kbd_num.html      | Numeric virtual keyboard           |           | +   | +   |
| kbd_special.html  | Special character virtual keyboard |           | +   | +   |
| power.html        | Power status screen                | +         | +   | +   |
| splash.html       | Loading splash screen              | +         | +   | +   |
| statusbar.html    | Statusbar                          | +         | +   | +   |
| password.html     | Password input                     | +         | +   | +   |
| hotkey.html       | Keyboard shortcuts                 |           | +   | +   |
| notification.html | Popup message                      |           |     | +   |
| kbd.css           | Keyboard styles                    |           | +   | +   |
| style.css         | MAC desktop stules                 | +         | +   | +   |
| layout.ini        | [Layout] ini file                  | +         | +   | +   |

Custom resources have priority over default ones. It is not obligatory to replace all of resources. It is enough to provides only modified ones. In this case custom resources will be used together with default ones. Different resource locations have different priorities. Custom resources file possible locations:

| Path (VOS/VOS2)                      | Priority | Details                                                                       |
| ------------------------------------ | -------- | ----------------------------------------------------------------------------- |
| /etc/config/adk/www/mac/P400/        | 1        | These resources will be used only on P400 model                               |
| /etc/config/adk/www/mac/240x320C15T/ | 2        | These resources will be used on all models with matching display and keyboard |
| /etc/config/adk/www/mac/default/     | 3        | These resources will be used on all other models                              |

| Path (VOS3 only)                     | Priority | Details                                                                       |
| ------------------------------------ | -------- | ----------------------------------------------------------------------------- |
| /home/usr1/adk/www/mac/P630/         | 1        | These resources will be used only on P630 model                               |
| /etc/config/adk/www/mac/P630/        | 2        | These resources will be used only on P630 model                               |
| /home/usr1/adk/www/mac/320x480C15T/  | 3        | These resources will be used on all models with matching display and keyboard |
| /etc/config/adk/www/mac/320x480C15T/ | 4        | These resources will be used on all models with matching display and keyboard |
| /home/usr1/adk/www/mac/default/      | 5        | These resources will be used on all other models                              |
| /etc/config/adk/www/mac/default/     | 6        | These resources will be used on all other models                              |

Custom resources should be installed using "config" type package. See VOS documentation for more details.

Terminal model display and keyboard parameters are described in ADK-GUI documentation.

P400/P630 can be replaced with different model name.

240x320C15T/320x480C15T can be replaced with different display and keyboard combination.

Custom resources example package is available in MAC example folder.

# Appendix: Commerce Platform

## CP concept

Commerce Platform is environment which allows to develop JS/HTML based applications and execute them on top of ADK.

## CP runtime (CPR)

Commerce Platofrm functionality is disabled by default on VOS1 units and enabled by default on VOS2 and VOS3 units. This can be changed using MAC configuration file:

```cpp
[cpr]
enable=y
```

CP applications (CPA) are launched by MAC. User can either launch CPA using MAC desktop or launch them using libmac APIs. CPA can also be integrated in payment application flow and launched by certain trigger name. This is described in CPL documentation.

Executing CPA using api:

```cpp
std::string appname("cp_demo2");
std::vector<std::string> args;
vfimac::sysLaunchAppid(appname,args);
```

Executing CPA by CPR trigger:

```cpp
const std::string trigger("CP_SYSTEM_NOTIFIES_IDLE_ENTERED");
vfiipc::JSObject jsobj;
vfimac::sysLaunchCPAppByTrigger( "*", trigger, jsobj, 0 );
```

Please see CPL documentation for more details.

In case MAС runs in multi-display environment, application can decide which screen to use for CPA execution. This is done by passing "cp_displayID" parameter in JSON payload. By default MAC is using local display (display id - 0). Displays are configured in MAC configuration file GUI section. Usage example:

```cpp
const std::string trigger("CP_SYSTEM_NOTIFIES_IDLE_ENTERED");
vfiipc::JSObject jsobj;
jsobj("cp_displayID") = 1;
vfimac::sysLaunchCPAppByTrigger( "*", trigger, jsobj, 0 );
```

## CPA installation on VOS2 platform

To install CP application please use [vfimac::sysInstallCPApp](namespacevfimac.md#function-sysinstallcpapp). It is also possible to install CPA using CPdownloader application, please see ADK-GUI documentations for details.

## CPA installation on VOS3 platform

To install CP application please use CP App VOS3 installation package type.

Additionally special user Sponsor signed CP activation package should be installed to activate CP App.

Please see VOS3 CP App packaging & installation manual for reference.

## CPA manifest files

Commerce platform manifest files are JSON encoded and stored in

- "/mnt/flash/etc/config/cpapp/cp" for VOS2,
- "/home/sys_cp/cpapps" for VOS3, and
- "/mnt/appdata/versioned/globalshare/cpapps" is spare manifest location for VOS3 terminals with CPDEV (aka APPDEV). One of two VOS3 locations should be selected, not both simultaneously.

Manifest files should have ".mft" extension (e.g. "/mnt/flash/etc/config/cpapp/cp/paypalapp-887623211.mft", or "/home/sys_cp/cpapps/paypalapp-887623211.mft) Regular applications don't have access to CPA resources and manifest files.

## CPA manifest fields

| Section     | Field     | Required | Type   | Default | Description                                                                 |
| ----------- | --------- | -------- | ------ | ------- | --------------------------------------------------------------------------- |
| application | id        | +        | string | -       | Unique application id                                                       |
| application | name      | -        | string | -       | Application name                                                            |
| application | version   | -        | string | -       | Application version                                                         |
| application | keyboard  | -        | bool   | false   | MAC Virtual keyboard visible on startup                                     |
| application | statusbar | -        | bool   | true    | MAC Statusbar visible on startup                                            |
| application | depends   | -        | string | -       | Dependent apps to be started before this app. separted by semicolon         |
| desktop     | type      | -        | string | app     | Application or Service                                                      |
| desktop     | label     | -        | string | -       | Application label shown on desktop                                          |
| desktop     | icon      | -        | string | -       | Path to application icon shown on desktop                                   |
| desktop     | hide      | -        | bool   | false   | Hide application icon from desktop                                          |
| desktop     | file      | -        | string | -       | Initial html to be shown                                                    |
| autolaunch  | type      | -        | string | app     | Application or System service. Services will be started before applications |
| autolaunch  | file      | -        | string | -       | Initial html to be shown                                                    |

To launch CPA from desktop, it should have "desktop" section in its manifest file.

## CPA manifest examples

CPA manifest file example #1: ```mft

{
"schema_version": "1.0",

    "application": {
        "name": "cp_demo1",
        "id": "cp_demo1",
        "version": "3.9.0",
        "type": "CP_TERMINAL",
        "is_companion_app": true
    },

    "desktop" : {
         "label" : "cp_demo1",
         "file" : "demo1.html",
         "type" : "app",
         "icon" : "cp_demo1/default/vflogo.png"
    },

    "imports_trigger": [
    {
      "file" : "demo1.html",
      "optional" : true,
      "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
      "icon" : "cp_demo1/default/vflogo.png"
    },
    {
      "file" : "demo1.html",
      "optional" : true,
      "id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED"
    },
    {
      "file" : "demo1.html",
      "optional" : true,
      "id": "CP_SYSTEM_NOTIFIES_TRANSACTION_STARTED"
    },
    {
      "file" : "test.html",
      "optional" : true,
      "id": "CP_TEST",
      "icon" : "cp_demo1/default/vflogo.png"
    }

]
}

````

_Filename: cp_demo1.mft_

CPA manifest file example #2: ```mft

{
  "schema_version": "1.0",
  "imports_trigger": [
    {
      "file": "init.html",
      "icon": "alipayapp-887623211/images/Alipay_icon.png",
      "optional": false,
      "id": "CP_SYSTEM_REQUESTS_ALT_PAYMENT",
      "label": "Alipay",
      "status_bar": false,
      "type": "APPLICATION",
      "interruptible": false
    },
    {
      "file": "init.html",
      "icon": "alipayapp-887623211/images/Alipay_icon.png",
      "optional": false,
      "id": "CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED",
      "label": "Alipay",
      "status_bar": false,
      "type": "APPLICATION",
      "interruptible": false
    },
    {
      "file": "init.html",
      "icon": "alipayapp-887623211/images/Alipay_icon.png",
      "optional": false,
      "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
      "label": "Alipay",
      "status_bar": false,
      "type": "APPLICATION",
      "interruptible": false
    },
    {
      "file": "init.html",
      "icon": "alipayapp-887623211/images/Alipay_icon.png",
      "optional": false,
      "id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED",
      "label": "Alipay",
      "status_bar": false,
      "type": "APPLICATION",
      "interruptible": false
    }
  ],
  "application": {
    "is_companion_app": false,
    "name": "alipay",
    "id": "alipayapp-887623211",
    "type": "CP_TERMINAL",
    "version": "2.5.0"
  },
  "imports_sdk": {
    "cpruntime_min_version": "2.0.0",
    "triggers_min_version": "4.3.0"
  },
  "imports_hardware": {
    "platforms": [
      "240x320C15T",
      "240x320C21N",
      "320x480C0T",
      "320x480C15T",
      "854x480C0T",
      "854x480C15T",
      "1280x800C15T"
    ]
  }
}
````

_Filename: alipayapp.mft_

CPA manifest file example #3: ```mft

{
"schema_version": "1.0",
"imports_trigger": [
{
"file": "init.html",
"icon": "klarnaapp-887623211/images/Klarna_icon.png",
"optional": false,
"id": "CP_SYSTEM_REQUESTS_ALT_PAYMENT",
"label": "Klarna",
"status_bar": false,
"type": "APPLICATION",
"interruptible": false
},
{
"file": "init.html",
"icon": "klarnaapp-887623211/images/Klarna_icon.png",
"optional": false,
"id": "CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED",
"label": "Klarna",
"status_bar": false,
"type": "APPLICATION",
"interruptible": false
},
{
"file": "init.html",
"icon": "klarnaapp-887623211/images/Klarna_icon.png",
"optional": false,
"id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
"label": "Klarna",
"status_bar": false,
"type": "APPLICATION",
"interruptible": false
},
{
"file": "init.html",
"icon": "klarnaapp-887623211/images/Klarna_icon.png",
"optional": false,
"id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED",
"label": "Klarna",
"status_bar": false,
"type": "APPLICATION",
"interruptible": false
}
],
"application": {
"is_companion_app": false,
"name": "klarna",
"id": "klarnaapp-887623211",
"type": "CP_TERMINAL",
"version": "1.4.0"
},
"imports_sdk": {
"cpruntime_min_version": "2.0.0",
"triggers_min_version": "4.3.0"
},
"imports_hardware": {
"platforms": [
"240x320C15T",
"240x320C21N",
"320x480C0T",
"320x480C15T",
"854x480C0T",
"854x480C15T",
"1280x800C15T"
]
}
}

````

_Filename: klarnaapp.mft_


# Appendix: MAC Control Panel

MAC Control panel contains a set of system tools to view, configure and diagnose the system. MAC Control panel can be activated using [vfimac::sysShowControlPanel](namespacevfimac.md#function-sysshowcontrolpanel) API or activated from the MAC desktop.

The MAC desktop may be protected by a password. See the detailed description in the [Appendix: Desktop].

MAC Control Panel functions may be different on different platforms. On VOS3 there is no more a Sysmode we had on VOS1/VOS2 devices. On VOS3 there are new Control Panels that provide similar functionality as the Sysmode on VOS1/VOS2.


Below is the mapping of the Control Panel and the platform.


## MAC Control Panels


| MAC Control Panel  | Description  | Platforms  | Note   |
|  -------- | -------- | -------- | -------- |
| VOS1 | VOS2 | VOS3   |
| ![notifications_icon.png](.//notifications_icon.png)
 | The [System Notification service] allows to:

* show pop-up messages (info, warning, critical)
* add a notification icon to the status bar
* recall the notification message until it is cleared

 | + | + | +  |  |
| ![vos2_system_info_icon.png](.//vos2_system_info_icon.png) | The System information panel that provides the main system information such as Model name, S/N, OS version, Part Number, etc.  | + | + |  | Alternate in VOS3 - "Info panel"   |
| ![vos2_adk_info_icon.png](.//vos2_adk_info_icon.png) | The ADK information panel that lists the ADK version and ADK component versions  | + | + |  | Alternate in VOS3 - Info panel to get the ADK version.

 The installed ADK component versions on VOS3 are available in the "Software Control Panel" / "Software List"   |
| ![info_icon.png](.//info_icon.png) | The Info panel displays the system information such as Model Name, S/N, OS/ADK version, Part Number, etc.  |  |  | +  | Substitutes VOS2 "Info" and "ADK" panels   |
| ![transfer_logs_icon.png](.//transfer_logs_icon.png) | Log transfer button will generate the TGZ file that contains the following information:

* System application logs
* User application logs
* System properties dump (VOS3)
* System information (S/N, HwId, Sponsor, etc.) (VOS3)
* System resource information (RAM, Flash, etc.) (VOS3)
* Software components + versions
* Application crash log (provided by launcher) (VOS3)
* Dump additional files/folders that are provided as symlinks to the default log directory /mnt/appdata/logs


The USB stick should be connected to the device before dumping logs!  | + | + | +  | The difference: on VOS3 the Log transfer is outside the Log Control Panel for faster access   |
| ![log_control_icon.png](.//log_control_icon.png) | The [Log Control Panel (LCP)] provides:

* setting application logs
* setting syslogs
* setting log destination

 | + | + | +  | The difference:

* on VOS1, VOS2 the LCP is outside the MAC Control Panel
* on VOS3 LCP operations are displayed as tiles, on VOS2 - as a list
* on VOS3 the Log transfer is outside the Log Control Panel for faster access

 |
| ![applications_icon.png](.//applications_icon.png) | The Applications is a folder containing "Application List" and "Autolaunch". See below.  |  |  | +  |  |
| ![application_list_icon.png](.//application_list_icon.png) | The Application List is a list of all SYS and USR applications installed on the device, running status, and the ability to stop the application  |  | + | +  |  |
| ![autolaunch_icon.png](.//autolaunch_icon.png) | Autolaunch stops all running applications and then executes standard applications autolaunch procedure. See [Application manifest file], "autolaunch" section  |  | + | +  |  |
| ![com_control_icon.png](.//com_control_icon.png) | The [Communication Control Panel (CCP)](pg_ccp_users_guide.md) provides the following functions:

* Set / change the network configuration parameters
* Run simple network diagnostics
* Report the network status

 | + | + | +  | The difference on VOS1, VOS2: the CCP is outside the MAC Control Panel   |
| ![power_panel_icon.png](.//power_panel_icon.png) | The [Power Panel (PCP)] is used to restart or power off the device, or move the status of the device to a low-power mode.

Low-power modes (Deep Sleep, Hibernate) are available on devices that support Battery  | + | + | +  |  |
| ![date_time_icon.png](.//date_time_icon.png) | The Date & Time panel allows you to administrate Date, Time, Time Zone, and the 24H reboot time.  |  |  | +  | Date & Time change could trigger a system reboot if the new date/time delta between the current date/time is 24h and more.

The correct time change order is:

* set a correct Time Zone
* check that the Time/Date value changes according to the new Time Zone
* set the Time if needed

 |
| ![settings_icon.png](.//settings_icon.png) | Settings Panel allows changing following system settings:

* Display brightness
* Audio settings: set beep on keypad, set beep on touch
* Keyboard: enable/disable keypad backlight

 |  |  | +  |  |
| ![diagnostic_icon.png](.//diagnostic_icon.png) | The [Diagnostic Control Panel] provides simple system diagnostic tools:

* Display diagnostics
* Keyboard diagnostics
* Card diagnostics: Magnetic reader, Smart Card reader, CTLS Card reader
* Buzzer / Audio and Microphone tests
* LED diagnostics
* Touch Panel diagnostics
* SD card reading

 |  |  | +  | The alternate on VOS2 sysmode: Diagnostics menu   |
| ![security_icon.png](.//security_icon.png) | The [Security Control Panel] provides the following functions:

* Key viewing/loading
* Device tamper state viewing / getting tamper logs and tamper remove
* Security Identification data viewing: Device Model / HW/ FW
* Secure processor Date/Time viewing/editing
* MIB viewing/loading
* Password management

 |  |  | +  |  |
| ![software_icon.png](.//software_icon.png) | The Software Control Panel allows to:

* Download and install the SW via: a USB stick, Netloader, ZonTalk
* View the installation result
* View the list of installed SW

 |  |  | +  |  |
| ![vcl_icon.png](.//vcl_icon.png) | The VCL Control Panel to see the VCL status  |  |  | +  |  |
| ![vhq_icon.png](.//vhq_icon.png) | The VHQ Agent Control Panel to do heartbeats and configuration  |  |  | +  | On VOS1, VOS2 VHQ Agent configuration panel is in the Sysmode   |



# Appendix: MAC language setting

The default MAC Control Panel language is English (en-US.ctlg ).

To launch MAC Control Panel with a different language, the language package can be provided as an argument for the MAC API:



```cpp
std::vector<std::string> args = { "-l", "/home/usr1/www/de-DE.ctlg" };
auto res = vfimac::sysLaunchAppid( "mcp", args );
````

or

```cpp
std::vector<std::string> args = { "-l", "de-DE.ctlg" };
auto res = vfimac::sysLaunchAppid( "mcp", args );
```

in the last example, the file will be searched into the /home/sys13/www/mcp/default.

both arguments `"-l"` or `"--lang"` could be used.

- The provided catalog must contain all keywords. Otherwise the field will be displayed as label key value.
- The catalog file is user-signed.
- On VOS2 the language translation is available on MAC CP and Power CP only.
- On VOS3 the language can be changed by setting it via the **MAC CP / Settings / Locale**.
- The Control Panel name is encoded in the MAC manifest file that should be translated to a different language and then sys-signed and installed on the device.

# Appendix: Layout

Used screen layout can be adjusted. Layout is stored in layout.ini file together with other MAC resources. This file can be used to resize statusbar or virtual keyboard. Layout file can be modified using [custom MAC resources]. Application can set layout from file using [vfimac::sysChangeLayout](namespacevfimac.md#function-syschangelayout).

Layout can be locked using [vfimac::sysLockLayout](namespacevfimac.md#function-syslocklayout). In this case all applications are not able to switch screen or layout anymore.

Layout file example: ```ini

[default]
appA=0 0 -1 -1

[default-sb]
statusbar=0 0 -1 19
appA=0 20 -1 -1

[default-kb]
appA=0 0 -1 -321
keyboard=0 -321 -1 -1

[default-sb-kb]
statusbar=0 0 -1 19
appA=0 20 -1 -321
keyboard=0 -321 -1 -1

````

_Filename: layout.ini_


# Appendix: MAC events

Application can register for certain MAC events. All available MAC events are listed in [enum](namespacevfimac.md#enum-macevent). Every event type can have its own processing callback.

Usage example:

```cpp
static void event_callback( vfimac::macEvent event, const vfiipc::JSObject & json )
{
    LOGF_TRACE(lh,"MAC event recieved[%d] json[%s]",event, json.dump().c_str() );
}

// Application transitioned on foreground
vfimac::sysSetEventCallback( vfimac::EVENT_FOREGROUND, event_callback );
// Application transitioned to background
vfimac::sysSetEventCallback( vfimac::EVENT_BACKGROUND, event_callback );
// Manifest list was refreshed
vfimac::sysSetEventCallback( vfimac::EVENT_MANIFEST_UPDATE, event_callback );
````

# Appendix: Notification interface

MAC allows some commands to be invoked via ADK-IPC notifications. First applications needs to register callback for response notification. Then applications need to generate json with payload and send it to "\_mac" application id. MAC will send response notification with corresponding payload.

| Request notification | Response notification | Description                                                                |
| -------------------- | --------------------- | -------------------------------------------------------------------------- |
| \_MacControlRequest  | \_MacControlResponse  | These notifications can be used by payment applications and ADK components |

Example:

```cpp
void cb( void *data,
    const std::string &from,
    const std::string &to,
    const std::string &notification_id,
    const vfiipc::JSObject &jsobj,
    unsigned flags)
{
    // Process response here
}

// init ADK-IPC
vfiipc::ipcSetAppID( "demo" );
// register response callback
vfiipc::ipcRegisterNotificationCB( "_MacControlResponse" , cb, NULL );
// generate json payload
vfiipc::JSObject jsobj;
jsobj("cmd")="device_info";
// send json to MAC
vfiipc::ipcNotify("_mac","_MacControlRequest", jsobj, 0 );
```

Supported command list:
| Command | Description | Request example | Response example |
| -------- | -------- | -------- | -------- |
| get_app_list | [Get list of available applications](namespacevfimac.md#function-sysgetapplist) |

```cpp
{"cmd":"get_app_list"}
```

|

```cpp
{"appList":[ {"Active":true, "AppId":"ccp", "AppLabel":"Com Control", "AppName":"ccp", "AppVersion":"1.8.0-pre-103","CPApp":false, "Desktop": {"AppLabel":"Com Control", "Type":"app"}, "Running":false, "Type":"app"}, {"Active":true,"AppId":"cpdownloader", "AppLabel":"cpdownloader", "AppName":"cpdownloader", "AppVersion":"2.31.0", "CPApp":false, "Desktop":{"AppLabel":"cpdownloader", "Type":"app"}, "Running":false,"Type":"app"}], "result":"OK", "status":0}
```

|
| version | [Get MAC version](namespacevfimac.md#function-sysmac-getversion) |

```cpp
{"cmd":"version" }
```

|

```cpp
{"result":"OK","status":0,"version":"3.71.5-Snapshot"}
```

|
| set_env_data | [set CPR environment values](namespacevfimac.md#function-syssetcpenvdata) |

```cpp
{"cmd":"set_env_data", "data":{"name1":"test1","name2":"test2"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| to_foreground | [Bring application to foreground](namespacevfimac.md#function-systoforeground) |

```cpp
{"cmd":"to_foreground","appid":"demo1"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| show_prev_app | [Show previously visible application](namespacevfimac.md#function-sysshowprevapp) |

```cpp
{"cmd":"show_prev_app"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| show_desktop | [Show MAC desktop](namespacevfimac.md#function-sysshowdesktop) |

```cpp
{"cmd":"show_dekstop"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| launch_appid | [Launch application](namespacevfimac.md#function-syslaunchappid) |

```cpp
{"cmd":"launch_appid","appid":"demo1"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| stop_appid | [Stop application](namespacevfimac.md#function-sysstopappid) |

```cpp
{"cmd":"stop_appid","appid":"demo1"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| autolaunch | [Relaunch applications](namespacevfimac.md#function-sysrelaunchapps) |

```cpp
{"cmd":"autolaunch"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|
| scan_manifests | [Rescan manifest files](namespacevfimac.md#function-sysscanmanifests) |

```cpp
{"cmd":"scan_manifests"}
```

|

```cpp
{"status": 0, "result" : "OK"}
```

|

Return notification will always have two fields indicating request status.
| Field name | Type | Values | Description |
| -------- | -------- | -------- | -------- |
| result | string | "OK"/"FAIL" | General status |
| status | int | [vfimac::macError](namespacevfimac.md#enum-macerror) | Error code |

if MAC is not running, you will receive notification unicast error. Please see ADK-IPC documentation for more information.

MAC notification interface usage example:

```cpp
void device_resp_callback(
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

const int SUCCEED = 0;
const int FAIL = -1;
const std::string one_receiver("1");
const std::string appid( "MACDEMO2" );
const std::string device_control_request_trigger("_MacControlRequest");
const std::string device_control_response_trigger("_MacControlResponse");

vfiipc::ipcSetAppID( appid );
vfiipc::ipcRegisterNotificationCB( device_control_response_trigger, device_resp_callback, NULL );
vfiipc::JSObject jsobj;
jsobj("cmd")="show_dekstop";
vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
```

# Appendix: System Notifications interface

System notification interface allows to:

- show pop-up messages of three priorities:
  - **Info**;
  - **Warning**;
  - **Critical**.
- add notification icon to statusbar;
  - one for all notifications;
  - most critical is shown.
- possibility to recall the notification message until cleared;
- client that rised the notification gets ID to clear it later. Life length of notifications is limited by terminal reboot: client must request notification at every terminal startup.

## Pop-up messages and statusbar icons examples:

| Info                                                                                                                                                                                                                                                             | Warning                                                                                                                                                                                                                                                                                  | Critical                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![system_notification_info.png](.//system_notification_info.png)![system_notification_info.png](.//system_notification_info.png)![system_notification_info.png](.//system_notification_info.png)![system_notification_info.png](.//system_notification_info.png) | ![system_notification_warning.png](.//system_notification_warning.png)![system_notification_warning.png](.//system_notification_warning.png)![system_notification_warning.png](.//system_notification_warning.png)![system_notification_warning.png](.//system_notification_warning.png) | ![system_notification_error.png](.//system_notification_error.png)![system_notification_error.png](.//system_notification_error.png)![system_notification_error.png](.//system_notification_error.png)![system_notification_error.png](.//system_notification_error.png) |

"Info" notification example shows "sticky" option: "Clear" button absent - notification can't be cleared via GUI.

## System Notifications List

It is possible to recall all system notification messages via Control Panel -> Notifications.
| Control Panel | -> | Notifications |
| -------- | -------- | -------- |
| ![control_panel_notifications.png](.//control_panel_notifications.png)![control_panel_notifications.png](.//control_panel_notifications.png)![control_panel_notifications.png](.//control_panel_notifications.png)![control_panel_notifications.png](.//control_panel_notifications.png) | | ![system_notifications_list.png](.//system_notifications_list.png)![system_notifications_list.png](.//system_notifications_list.png)![system_notifications_list.png](.//system_notifications_list.png)![system_notifications_list.png](.//system_notifications_list.png) |

## System Notifications usage example

```cpp
// add system notifications
int returnCode = vfimac::systemNotificationAdd(vfimac::systemNotificationPriority::SYSTEM_NOTIFICATION_INFO, "demo1 system notification");
if(returnCode > 0)
{
    int lastSystemNotificationId = returnCode;

    // check if it still exist
    std::list<int> list;
    returnCode = vfimac::systemNotificationList(list);
    for (std::list<int>::iterator it = list.begin(); it != list.end(); ++it)
    {
        if(lastSystemNotificationId == (*it))
        {
            // remove our system notifications
            returnCode = vfimac::systemNotificationRemove(lastSystemNotificationId);
        }
    }
}
```

# Appendix: Application recovery

If application crashes, MAC will initiate [application relaunch](namespacevfimac.md#function-sysrelaunchapps).

First it will stop all running applications, after that MAC will start all applications registered for autolaunch.

This should bring terminal to clean state (as after startup).

MAC maintains crashes counter for each application. To prevent looping relaunch, MAC stops application recovery after three application's crashes.

Application can disable recovery mechanism using recover field in [manifest file].

If application was terminated by SIGTERM or SIGKILL, recovery mechanism will not be initiated.

# Appendix: Environment variables

When MAC launches application, it sets certain environment variables. Without these variables application will not operate correctly.

| Environment name | Type   | Required | Example        | Description                                                                                                        |
| ---------------- | ------ | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| GUI_REGION       | int    | +        | 7              | ADK-GUI region id, which will be used to render application GUI                                                    |
| GUI_DISPLAY      | string | +        | 192.168.50.1:0 | GUI_DISPLAY environments stores IP address in case of remote display. Please see ADK-GUI documentation for details |
| MAC_APPID        | string | -        | ccp            | Application id from [manifest file]                                                                                |
| GUIPRT_APPNAME   | string | -        | lcp            | Name of the resource folder from [manifest file]                                                                   |
| LANGUAGE         | string | -        | en             | Current system language (VOS3 only)                                                                                |

GUI_REGION environment notifies GUI in which region HTML should be rendered. If environment is not set, application will use region 0. This region is always hidden and never appear on the screen. GUI_DISPLAY is used to set communication method with GUI server. Please see ADK-GUI documentation for more details. APPID - unique application identifier from [manifest file]. It can be used by both application itself and MAC to process requests. GUIPRT_APPNAME - is used to avoid resource clash, when multiple applications are using same user. For example if application is using usr1 and GUIPRT_APPNAME is set to lcp, then resources located in /home/usr1/www/lcp will be used. If environment is not set /home/usr1/www will be used as a resource folder.

# Appendix: Android Remote Rendering Service

On dual chip solutions (e.g. M424, M440, CM5) MAC can run in remote rendering mode. In this mode, MAC will communicate with ARRS instead of GUI daemon. This is special application delivered as part of Android software stack, which renders HTML instead of GUI daemon. By default Android IP address is obtained from /etc/hosts, but it can be overrided by display field in MAC configuration file. If ARRS mode is enabled, service type applications, will be launched before connecting to ARRS. This speeds up boot time and allows Android to communicate to SDI and other critical services even if ARRS wasn't launched. If ARRS is not launched on Android, MAC will only start service applications and then wait for communication with ARRS. If ARRS is closed, MAC will stop all launched applications. It will automatically restart once ARRS is available.

ARRS is using webkit for HTML rendering. As a result, some of HTML tags will not be supported in this mode. Please check ADK-GUI documentation for details.

# Appendix: Remote display mode

Terminal can remotely control GUI on other units via network. To do so both master and slave units needs to be configured accordingly. Slave units needs to operate in remote display mode. In this mode GUI window management will be disabled and only service type applications will be started. MAC desktop will not be available. MAC will create only one GUI region (region id - 0) and wait for incoming connection.
![remote_display.png](.//remote_display.png)Remote display mode

Slave unit configuration file example:

```cpp
[gui]
window_management=n
```

This option would disable application autolaunch. MAC will create only one GUI region (GUI region id - 0) and wait for incoming connection. Master unit needs to list slave unit IP addresses.

```cpp
[gui]
display =:0 10.184.14.255:0 10.101.10.59:0
```

Listed units will be provided on all applications in GUI_DISPLAY environment. Application can use any of remote displays by passing display id to ADK-GUI API. This example will send hello text to unit 10.101.10.59.

```cpp
int display = 2;
int region_id = 0;
std::string text = "hello world!"
vfigui::uiDisplay( display, region_id, text);
```

When system boots it will wait for remote displays to appear online, only after that applications will be started.

If connection to remote GUI server happens via unstable transport level, GUI keep alive can be configured. GUI invokes disconnect callback after certain amount of keep alive packets is lost.

Disconnect callback performs stopping of all MAC launched applications (except service applications with `resident=y` in autolaunch manifest section, see [Appendix: Application manifest file]) before reinitialization of the MAC daemon.

```cpp
[gui]
keep_alive_count=3
keep_alive_interval=2
```

VOS1/VOS2: Display IP addresses can also bet set using /mnt/flash/config/config.system system configuration file. Example configuration file sets two displays. First one the local one. Second - remote one, accessible by IP.

Example:

```cpp
[mac]
gui_display = ":0 10.184.14.255:0"
```

Value in system configuration file has higher priority than the one in MAC configuration file.

After setting GUI_DISPLAY value terminal should be rebooted.

Check GUI documentation for more details.

Ux115 without Ux100 pinpad will operate in remote display mode by default.

# Appendix: Battery status control (VOS2 platform)

During autolaunch MAC will check battery status. If status is NOK warning will be shown on display for 60 seconds and then boot will continue. This feature is enabled by default. It can be disabled in MAC config file. Example:

```cpp
[power_management]
battery_status_control=n
```

![battery_fault_launcher.png](.//battery_fault_launcher.png)Battery failure warning

During autolaunch MAC can also check battery level and prevent applications from starting if battery level is too low. Default battery level threshold is 3600 (3.6V). It can be changed in MAC configuration file. Battery level check is disabled by default.

```cpp
[power_management]
battery_level_control=y
battery_level_threshold_mV=3600
```

![battery_low_launcher.png](.//battery_low_launcher.png)Battery level warning

![battery_low_charging_launcher.png](.//battery_low_charging_launcher.png)Battery is charging

# Appendix: Devices

**Ux115**

On Ux115 MAC will check for Ux100 pinpad during startup. If MAC will detect pinpad - it will boot full ADK. If pinpad is not connected, MAC will assume that unit operates in remote display mode. MAC will disable most of the functionality (e.g. desktop, statusbar, GUI region management). It will create only one GUI region, which can be used by other connected terminals. Configuration file can be used to enforce or disable remote display mode.

```cpp
[gui]
window_management=n
```

---

Updated on 2025-06-17 at 11:52:30 +0100
