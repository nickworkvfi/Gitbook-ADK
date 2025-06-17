---
title: mac/export/sysinfo/mac.h

---

# mac/export/sysinfo/mac.h



## Namespaces

| Name           |
| -------------- |
| **[vfimac](namespacevfimac.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAC_API](mac_8h.md#define-mac-api)**  |




## Macros Documentation

### define MAC_API

```cpp
#define MAC_API 
```


Marks public MAC API 


## Source code

```cpp
#pragma once

// STL
#include <string>
#include <vector>
#include <map>
#include <list>

// ADK
#include <ipc/jsobject.h>

#ifndef DOXYGEN

namespace vfimac 
{
#endif

#if defined VFI_MAC_DLL_EXPORT
    #define MAC_API  __attribute__((visibility ("default")))

#else
    #define MAC_API

#endif

enum macError
{
    MAC_ERR_OK                 =   0, 
    MAC_ERR_FAIL               =  -1, 
    MAC_ERR_UNSUPPORTED        =  -2, 
    MAC_ERR_LOCKED             =  -3, 
    MAC_ERR_TIMEOUT            =  -4, 
    MAC_ERR_LIBNOTIFY          =  -5, 
    MAC_ERR_APP_NOT_RUNNING    =  -6, 
    MAC_ERR_WRONG_APPID        =  -7, 
    MAC_ERR_NOT_CP_APP         =  -8, 
    MAC_ERR_UNKNOWN            =  -9, 
    MAC_ERR_CYCLE              = -10, 
    MAC_ERR_DEPENDS            = -11, 
    MAC_ERR_MANIFEST           = -12, 
    MAC_ERR_IPC                = -13, 
    MAC_ERR_NO_APP             = -14, 
    MAC_ERR_READY              = -15, 
    MAC_ERR_ACTIVE             = -16, 
    MAC_ERR_STOP               = -17, 
    MAC_ERR_NO_APPID           = -18, 
    MAC_ERR_PERMISSION         = -19, 
    MAC_ERR_SERVICE            = -20, 
    MAC_ERR_VISIBLE            = -21, 
    MAC_ERR_DISABLED           = -22, 
    MAC_ERR_LAUNCH             = -23, 
    MAC_ERR_RUNNING            = -24, 
    MAC_ERR_LAYOUT             = -25, 
    MAC_ERR_PARAMETER          = -26, 
    MAC_ERR_IGNORE             = -27, 
    MAC_ERR_CANCELED           = -28, 
    MAC_ERR_EXISTS             = -29, 
    MAC_ERR_NO_KEYS            = -30, 
    MAC_ERR_EXPECTED_KEYS      = -31, 
    MAC_ERR_ACCESS             = -32, 
    MAC_ERR_AVAILIBLE          = -33, 
    MAC_ERR_CPR_DISABLED       = -35, 
};

enum macLaunchParams
{
    NONE                       =   0, 
    KEEP_IN_BACKGROUND         =   1, 
};

enum macKeyboard
{
    MAC_KBD_OFF                = (0<<0), 
    MAC_KBD_ON                 = (1<<0), 
    MAC_KBD_AUTO               = (1<<1), 
    MAC_KBD_NUMERIC            = (1<<2), 
    MAC_KBD_ALPHANUMERIC       = (1<<3), 
    MAC_KBD_CAPITALIZED        = (1<<4), 
    MAC_KBD_LAST               = (1<<5), 
};

enum macEvent
{
    EVENT_NONE                 =   0, 
    EVENT_MANIFEST_UPDATE      =   1, 
    EVENT_ACTIVATION_UPDATE    =   2, 
    EVENT_PARAMETER_UPDATE     =   3, 
    EVENT_FOCUS_UPDATE         =   4, 
    EVENT_FOREGROUND           =   5, 
    EVENT_BACKGROUND           =   6, 
    EVENT_CP_STARTED           =   7, 
    EVENT_CP_STOPPED           =   8, 
    EVENT_BOOT_COMPLETED       =   9, 
    EVENT_LAST                 =  10, 
};

enum macNotifications
{
    NOTIFICATION_NONE                  = (0<<0), 
    NOTIFICATION_MANIFEST_RESCAN       = (1<<0), 
    NOTIFICATION_ACTIVATION_CFG_UPDATE = (1<<1), 
    NOTIFICATION_PARAMETER_CFG_UPDATE  = (1<<2), 
    NOTIFICATION_CP_START              = (1<<3), 
    NOTIFICATION_CP_STOP               = (1<<4), 
    NOTIFICATION_LAST                  = (1<<6), 
    NOTIFICATION_ALL                   = 0xFFFF  
};

enum systemNotificationPriority
{
    SYSTEM_NOTIFICATION_INFO              = 1, 
    SYSTEM_NOTIFICATION_WARNING           = 2, 
    SYSTEM_NOTIFICATION_CRITICAL          = 3  
};

typedef void (*macEventCallback)( macEvent event, const vfiipc::JSObject & json );

typedef void (*macNotificationCallback)(macNotifications notification);

MAC_API macError sysSetEventCallback( macEvent event, macEventCallback cb );
 
MAC_API macError sysNotificationCallback( macNotificationCallback cb, long notification_mask );

MAC_API macError sysNotificationCallback( macNotificationCallback cb = NULL, 
        macNotifications notification = NOTIFICATION_NONE );

MAC_API macError sysShowDesktop();

MAC_API macError sysShowControlPanel();

MAC_API macError sysShowPowerControlPanel();

MAC_API macError sysShowPrevApp();

MAC_API macError sysLaunchAppid( const std::string & appid, 
        const std::vector< std::string > & args, 
        const std::map< std::string,std::string > & envs, int params = 0 );

MAC_API macError sysLaunchAppid( const std::string & appid, 
        const std::vector<std::string> & args, 
        int params );

MAC_API macError sysLaunchAppid( const std::string & appid, 
        const std::vector<std::string> & args);

MAC_API macError sysLaunchAppid( const std::string & appid );

MAC_API macError sysLaunchApp( const std::string & appname, 
        const std::vector<std::string> & args );

MAC_API macError sysLaunchApp( const std::string & appname );
 
MAC_API macError sysRelaunchApps(); 
 
MAC_API macError sysIsRunning( const std::string & appid, bool & running );

MAC_API macError sysShowProgress( const std::string & info , size_t percent );

MAC_API macError sysSetAppid( const std::string & appid );

MAC_API macError sysUnSetAppid();

MAC_API macError sysChangeLayout( const std::string & layoutname, bool statusbar = true, bool keyboard = false );

MAC_API macError sysChangeLayout( const std::string & layoutname, bool statusbar ); 

MAC_API macError sysAssignToLayout( const std::string & appid, const std::string & region );

MAC_API macError sysFullscreenMode( bool enable );

MAC_API macError sysStatusbar( bool visible );

MAC_API macError sysGetCPRState( bool & active );

MAC_API macError sysGetCPAppRootDir( std::string &path );

MAC_API macError sysGetWMState( bool & active );

MAC_API macError sysStatusbarState( bool & visible );

MAC_API macError sysSetStatusbarValues( const std::map<std::string,std::string> & values );

MAC_API macError sysGetStatusbarValues( std::map<std::string,std::string> & values );

MAC_API macError sysStatusbarRefresh();

MAC_API macError sysVirtualKeyboard( macKeyboard mode );

MAC_API macError sysVirtualKeyboard( int mode );

MAC_API macError sysLockLayout( bool enable );

MAC_API macError sysInForeground( std::string & appid );

MAC_API macError sysInForeground( bool & visible );

MAC_API macError sysToForeground( const std::string & appid );
MAC_API macError sysToForground(  const std::string & appid );

MAC_API macError sysStopAppid( const std::string & appid );

MAC_API macError sysStopAppname( const std::string & appname );

MAC_API macError sysStopAllUserApps(); 

MAC_API macError sysStopOtherApps(); 

MAC_API macError sysGetAppList( vfiipc::JSObject & applist );

MAC_API macError sysScanManifests();

MAC_API macError sysSetCPEnvData( const vfiipc::JSObject & envs );

MAC_API macError sysInstallCPApp( const std::string & path );

MAC_API macError sysLaunchCPAppFromDesktop( const std::string & trigger_id, const std::vector<std::string> & param);

MAC_API macError sysLaunchCPAppFromDesktop( const std::string & trigger_id, const vfiipc::JSObject & param );

MAC_API macError sysLaunchCPAppFromDesktopSync( 
        const std::string & trigger_id, 
        const vfiipc::JSObject & param, 
        int flags = 0 );

MAC_API macError sysLaunchCPAppByTrigger(
        const std::string & appid,
        const std::string & trigger_id, 
        const vfiipc::JSObject & param,
        unsigned int flags );

MAC_API macError sysInvokeCPAppAction(
        const std::string & appid,
        const std::string & name, 
        int display_id = 0,
        unsigned int flags = 0 );

MAC_API macError sysGetGUIRegionId(
        const std::string & appid, 
        int & gui_region_id );

MAC_API macError sysStopAllCPApps();

MAC_API int systemNotificationAdd(
        systemNotificationPriority p,
        const std::string & message,
        bool sticky = false );

MAC_API macError systemNotificationRemove( int id );

MAC_API macError systemNotificationList( std::list<int> & list );

MAC_API const char * sysMac_GetVersion();

MAC_API const char * sysLibMac_GetVersion();

#ifndef DOXYGEN
} // namespace vfimac
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
