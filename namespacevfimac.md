---
title: vfimac

---

# vfimac

**Module:** **[Multi Application Controller functions](group__mac.md)**

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[macError](namespacevfimac.md#enum-macerror)** { MAC_ERR_OK =   0, MAC_ERR_FAIL =  -1, MAC_ERR_UNSUPPORTED =  -2, MAC_ERR_LOCKED =  -3, MAC_ERR_TIMEOUT =  -4, MAC_ERR_LIBNOTIFY =  -5, MAC_ERR_APP_NOT_RUNNING =  -6, MAC_ERR_WRONG_APPID =  -7, MAC_ERR_NOT_CP_APP =  -8, MAC_ERR_UNKNOWN =  -9, MAC_ERR_CYCLE = -10, MAC_ERR_DEPENDS = -11, MAC_ERR_MANIFEST = -12, MAC_ERR_IPC = -13, MAC_ERR_NO_APP = -14, MAC_ERR_READY = -15, MAC_ERR_ACTIVE = -16, MAC_ERR_STOP = -17, MAC_ERR_NO_APPID = -18, MAC_ERR_PERMISSION = -19, MAC_ERR_SERVICE = -20, MAC_ERR_VISIBLE = -21, MAC_ERR_DISABLED = -22, MAC_ERR_LAUNCH = -23, MAC_ERR_RUNNING = -24, MAC_ERR_LAYOUT = -25, MAC_ERR_PARAMETER = -26, MAC_ERR_IGNORE = -27, MAC_ERR_CANCELED = -28, MAC_ERR_EXISTS = -29, MAC_ERR_NO_KEYS = -30, MAC_ERR_EXPECTED_KEYS = -31, MAC_ERR_ACCESS = -32, MAC_ERR_AVAILIBLE = -33, MAC_ERR_CPR_DISABLED = -35} |
| enum| **[macLaunchParams](namespacevfimac.md#enum-maclaunchparams)** { NONE =   0, KEEP_IN_BACKGROUND =   1} |
| enum| **[macKeyboard](namespacevfimac.md#enum-mackeyboard)** { MAC_KBD_OFF = (0<<0), MAC_KBD_ON = (1<<0), MAC_KBD_AUTO = (1<<1), MAC_KBD_NUMERIC = (1<<2), MAC_KBD_ALPHANUMERIC = (1<<3), MAC_KBD_CAPITALIZED = (1<<4), MAC_KBD_LAST = (1<<5)} |
| enum| **[macEvent](namespacevfimac.md#enum-macevent)** { EVENT_NONE =   0, EVENT_MANIFEST_UPDATE =   1, EVENT_ACTIVATION_UPDATE =   2, EVENT_PARAMETER_UPDATE =   3, EVENT_FOCUS_UPDATE =   4, EVENT_FOREGROUND =   5, EVENT_BACKGROUND =   6, EVENT_CP_STARTED =   7, EVENT_CP_STOPPED =   8, EVENT_BOOT_COMPLETED =   9, EVENT_LAST =  10} |
| enum| **[macNotifications](namespacevfimac.md#enum-macnotifications)** { NOTIFICATION_NONE = (0<<0), NOTIFICATION_MANIFEST_RESCAN = (1<<0), NOTIFICATION_ACTIVATION_CFG_UPDATE = (1<<1), NOTIFICATION_PARAMETER_CFG_UPDATE = (1<<2), NOTIFICATION_CP_START = (1<<3), NOTIFICATION_CP_STOP = (1<<4), NOTIFICATION_LAST = (1<<6), NOTIFICATION_ALL = 0xFFFF} |
| enum| **[systemNotificationPriority](namespacevfimac.md#enum-systemnotificationpriority)** { SYSTEM_NOTIFICATION_INFO = 1, SYSTEM_NOTIFICATION_WARNING = 2, SYSTEM_NOTIFICATION_CRITICAL = 3} |
| typedef void(*)(macEvent event, const vfiipc::JSObject &json) | **[macEventCallback](namespacevfimac.md#typedef-maceventcallback)**  |
| typedef void(*)(macNotifications notification) | **[macNotificationCallback](namespacevfimac.md#typedef-macnotificationcallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysSetEventCallback](namespacevfimac.md#function-sysseteventcallback)**([macEvent](namespacevfimac.md#enum-macevent) event, [macEventCallback](namespacevfimac.md#typedef-maceventcallback) cb) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysNotificationCallback](namespacevfimac.md#function-sysnotificationcallback)**([macNotificationCallback](namespacevfimac.md#typedef-macnotificationcallback) cb, long notification_mask) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysNotificationCallback](namespacevfimac.md#function-sysnotificationcallback)**([macNotificationCallback](namespacevfimac.md#typedef-macnotificationcallback) cb =NULL, [macNotifications](namespacevfimac.md#enum-macnotifications) notification =[NOTIFICATION_NONE](namespacevfimac.md#enumvalue-notification-none)) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysShowDesktop](namespacevfimac.md#function-sysshowdesktop)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysShowControlPanel](namespacevfimac.md#function-sysshowcontrolpanel)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysShowPowerControlPanel](namespacevfimac.md#function-sysshowpowercontrolpanel)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysShowPrevApp](namespacevfimac.md#function-sysshowprevapp)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchAppid](namespacevfimac.md#function-syslaunchappid)**(const std::string & appid, const std::vector< std::string > & args, const std::map< std::string, std::string > & envs, int params =0) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchAppid](namespacevfimac.md#function-syslaunchappid)**(const std::string & appid, const std::vector< std::string > & args, int params) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchAppid](namespacevfimac.md#function-syslaunchappid)**(const std::string & appid, const std::vector< std::string > & args) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchAppid](namespacevfimac.md#function-syslaunchappid)**(const std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchApp](namespacevfimac.md#function-syslaunchapp)**(const std::string & appname, const std::vector< std::string > & args) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchApp](namespacevfimac.md#function-syslaunchapp)**(const std::string & appname) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysRelaunchApps](namespacevfimac.md#function-sysrelaunchapps)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysIsRunning](namespacevfimac.md#function-sysisrunning)**(const std::string & appid, bool & running) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysShowProgress](namespacevfimac.md#function-sysshowprogress)**(const std::string & info, size_t percent) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysSetAppid](namespacevfimac.md#function-syssetappid)**(const std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysUnSetAppid](namespacevfimac.md#function-sysunsetappid)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysChangeLayout](namespacevfimac.md#function-syschangelayout)**(const std::string & layoutname, bool statusbar =true, bool keyboard =false) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysChangeLayout](namespacevfimac.md#function-syschangelayout)**(const std::string & layoutname, bool statusbar) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysAssignToLayout](namespacevfimac.md#function-sysassigntolayout)**(const std::string & appid, const std::string & region) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysFullscreenMode](namespacevfimac.md#function-sysfullscreenmode)**(bool enable) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStatusbar](namespacevfimac.md#function-sysstatusbar)**(bool visible) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetCPRState](namespacevfimac.md#function-sysgetcprstate)**(bool & active) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetCPAppRootDir](namespacevfimac.md#function-sysgetcpapprootdir)**(std::string & path) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetWMState](namespacevfimac.md#function-sysgetwmstate)**(bool & active) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStatusbarState](namespacevfimac.md#function-sysstatusbarstate)**(bool & visible) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysSetStatusbarValues](namespacevfimac.md#function-syssetstatusbarvalues)**(const std::map< std::string, std::string > & values) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetStatusbarValues](namespacevfimac.md#function-sysgetstatusbarvalues)**(std::map< std::string, std::string > & values) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStatusbarRefresh](namespacevfimac.md#function-sysstatusbarrefresh)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysVirtualKeyboard](namespacevfimac.md#function-sysvirtualkeyboard)**([macKeyboard](namespacevfimac.md#enum-mackeyboard) mode) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysVirtualKeyboard](namespacevfimac.md#function-sysvirtualkeyboard)**(int mode) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLockLayout](namespacevfimac.md#function-syslocklayout)**(bool enable) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysInForeground](namespacevfimac.md#function-sysinforeground)**(std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysInForeground](namespacevfimac.md#function-sysinforeground)**(bool & visible) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysToForeground](namespacevfimac.md#function-systoforeground)**(const std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysToForground](namespacevfimac.md#function-systoforground)**(const std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStopAppid](namespacevfimac.md#function-sysstopappid)**(const std::string & appid) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStopAppname](namespacevfimac.md#function-sysstopappname)**(const std::string & appname) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStopAllUserApps](namespacevfimac.md#function-sysstopalluserapps)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStopOtherApps](namespacevfimac.md#function-sysstopotherapps)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetAppList](namespacevfimac.md#function-sysgetapplist)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & applist) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysScanManifests](namespacevfimac.md#function-sysscanmanifests)**() |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysSetCPEnvData](namespacevfimac.md#function-syssetcpenvdata)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & envs) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysInstallCPApp](namespacevfimac.md#function-sysinstallcpapp)**(const std::string & path) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchCPAppFromDesktop](namespacevfimac.md#function-syslaunchcpappfromdesktop)**(const std::string & trigger_id, const std::vector< std::string > & param) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchCPAppFromDesktop](namespacevfimac.md#function-syslaunchcpappfromdesktop)**(const std::string & trigger_id, const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & param) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchCPAppFromDesktopSync](namespacevfimac.md#function-syslaunchcpappfromdesktopsync)**(const std::string & trigger_id, const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & param, int flags =0) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysLaunchCPAppByTrigger](namespacevfimac.md#function-syslaunchcpappbytrigger)**(const std::string & appid, const std::string & trigger_id, const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & param, unsigned int flags) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysInvokeCPAppAction](namespacevfimac.md#function-sysinvokecpappaction)**(const std::string & appid, const std::string & name, int display_id =0, unsigned int flags =0) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysGetGUIRegionId](namespacevfimac.md#function-sysgetguiregionid)**(const std::string & appid, int & gui_region_id) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[sysStopAllCPApps](namespacevfimac.md#function-sysstopallcpapps)**() |
| [MAC_API](mac_8h.md#define-mac-api) int | **[systemNotificationAdd](namespacevfimac.md#function-systemnotificationadd)**([systemNotificationPriority](namespacevfimac.md#enum-systemnotificationpriority) p, const std::string & message, bool sticky =false) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[systemNotificationRemove](namespacevfimac.md#function-systemnotificationremove)**(int id) |
| [MAC_API](mac_8h.md#define-mac-api)[macError](namespacevfimac.md#enum-macerror) | **[systemNotificationList](namespacevfimac.md#function-systemnotificationlist)**(std::list< int > & list) |
| const [MAC_API](mac_8h.md#define-mac-api) char * | **[sysMac_GetVersion](namespacevfimac.md#function-sysmac-getversion)**() |
| const [MAC_API](mac_8h.md#define-mac-api) char * | **[sysLibMac_GetVersion](namespacevfimac.md#function-syslibmac-getversion)**() |

## Detailed Description


Verifone Multi Application Controller (vfimac) namespace 

## Types Documentation

### enum macError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAC_ERR_OK |   0|  Success  |
| MAC_ERR_FAIL |  -1|  Generic error  |
| MAC_ERR_UNSUPPORTED |  -2|  Function is not supported  |
| MAC_ERR_LOCKED |  -3|  Layout is locked  |
| MAC_ERR_TIMEOUT |  -4|  Timeout  |
| MAC_ERR_LIBNOTIFY |  -5|  IPC error  |
| MAC_ERR_APP_NOT_RUNNING |  -6|  Application is not running  |
| MAC_ERR_WRONG_APPID |  -7|  Wrong/unknown application id  |
| MAC_ERR_NOT_CP_APP |  -8|  No matching CP application  |
| MAC_ERR_UNKNOWN |  -9|  Unknown command  |
| MAC_ERR_CYCLE | -10|  Manifest dependency cycle detected  |
| MAC_ERR_DEPENDS | -11|  Manifest has missing dependency  |
| MAC_ERR_MANIFEST | -12|  Manifest validation error  |
| MAC_ERR_IPC | -13|  IPC error  |
| MAC_ERR_NO_APP | -14|  No matching application  |
| MAC_ERR_READY | -15|  MAC is not ready  |
| MAC_ERR_ACTIVE | -16|  Application is not activate on this terminal  |
| MAC_ERR_STOP | -17|  Can't stop application  |
| MAC_ERR_NO_APPID | -18|  No matching appid  |
| MAC_ERR_PERMISSION | -19|  Permission error  |
| MAC_ERR_SERVICE | -20|  Application is a service  |
| MAC_ERR_VISIBLE | -21|  Action not allowed while application is not visible  |
| MAC_ERR_DISABLED | -22|  This feature is disabled in MAC configuration file  |
| MAC_ERR_LAUNCH | -23|  Error during application launch  |
| MAC_ERR_RUNNING | -24|  MAC is not running  |
| MAC_ERR_LAYOUT | -25|  Layout doesn't exist  |
| MAC_ERR_PARAMETER | -26|  Parameter error  |
| MAC_ERR_IGNORE | -27|  Command was ignored due to configuration  |
| MAC_ERR_CANCELED | -28|  Canceled by user  |
| MAC_ERR_EXISTS | -29|  Doesn't exists  |
| MAC_ERR_NO_KEYS | -30|  Keys are not available  |
| MAC_ERR_EXPECTED_KEYS | -31|  No information on expected keys  |
| MAC_ERR_ACCESS | -32|  No access  |
| MAC_ERR_AVAILIBLE | -33|  Not available  |
| MAC_ERR_CPR_DISABLED | -35|  Commerce Platform Runtime is disabled  |




Error codes returned by MAC APIs 


### enum macLaunchParams

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NONE |   0|  No special flags  |
| KEEP_IN_BACKGROUND |   1|  Keep application in background  |




Application execution flags 


### enum macKeyboard

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAC_KBD_OFF | (0<<0)|  permanently disable virtual keyboard  |
| MAC_KBD_ON | (1<<0)|  permanently enable virtual keyboard  |
| MAC_KBD_AUTO | (1<<1)|  activate automatic mode for both numeric and alphanumeric input  |
| MAC_KBD_NUMERIC | (1<<2)|  activate automatic mode only for numeric input  |
| MAC_KBD_ALPHANUMERIC | (1<<3)|  activate automatic mode only for alphanumeric input  |
| MAC_KBD_CAPITALIZED | (1<<4)|  alphanumeric keyboard will appear capitalized  |
| MAC_KBD_LAST | (1<<5)|  placeholder  |




Virtual keyboard modes 


### enum macEvent

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EVENT_NONE |   0|  no events occurred  |
| EVENT_MANIFEST_UPDATE |   1|  manifest list was updated  |
| EVENT_ACTIVATION_UPDATE |   2|  deprecated  |
| EVENT_PARAMETER_UPDATE |   3|  deprecated  |
| EVENT_FOCUS_UPDATE |   4|  focus switched to different application  |
| EVENT_FOREGROUND |   5|  application transitioned to foreground  |
| EVENT_BACKGROUND |   6|  application transitioned to background  |
| EVENT_CP_STARTED |   7|  CP application started  |
| EVENT_CP_STOPPED |   8|  CP application stopped  |
| EVENT_BOOT_COMPLETED |   9|  Boot completed  |
| EVENT_LAST |  10|  placeholder  |




MAC events 


### enum macNotifications

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NOTIFICATION_NONE | (0<<0)|  no events occurred  |
| NOTIFICATION_MANIFEST_RESCAN | (1<<0)|  manifest list was updated  |
| NOTIFICATION_ACTIVATION_CFG_UPDATE | (1<<1)|  deprecated  |
| NOTIFICATION_PARAMETER_CFG_UPDATE | (1<<2)|  deprecated  |
| NOTIFICATION_CP_START | (1<<3)|  CP application started  |
| NOTIFICATION_CP_STOP | (1<<4)|  CP application stopped  |
| NOTIFICATION_LAST | (1<<6)|  placeholder  |
| NOTIFICATION_ALL | 0xFFFF|  register callback for all available events  |




MAC notifications 


### enum systemNotificationPriority

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYSTEM_NOTIFICATION_INFO | 1|  Info severity  |
| SYSTEM_NOTIFICATION_WARNING | 2|  Warning severity  |
| SYSTEM_NOTIFICATION_CRITICAL | 3|  Critical severity  |




SYSTEM notifications priority 


### typedef macEventCallback

```cpp
typedef void(* macEventCallback) (macEvent event, const vfiipc::JSObject &json);
```


**Parameters**: 

  * **json** JSON encoded event information 


**Note**: Callback will be invoked sequentially for every event one by one in sequence 

MAC event callback. This callback gets invoked when corresponding event occurs 


### typedef macNotificationCallback

```cpp
typedef void(* macNotificationCallback) (macNotifications notification);
```


**Parameters**: 

  * **notification** macNotifications event identifier 


**Note**: 

  * Callback will be invoked sequentially for every event one by one in sequence 
  * please see macNotifications for reference 


MAC notification callback. This callback gets invoked when corresponding event occurs 



## Functions Documentation

### function sysSetEventCallback

```cpp
MAC_APImacError sysSetEventCallback(
    macEvent event,
    macEventCallback cb
)
```


**Parameters**: 

  * **cb** notification callback to be invoked 
  * **event** requested event 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * Set callback to NULL to disable callback 
  * please see macNotifications for reference 


Register notification callback. 


### function sysNotificationCallback

```cpp
MAC_APImacError sysNotificationCallback(
    macNotificationCallback cb,
    long notification_mask
)
```


**Parameters**: 

  * **cb** notification callback to be invoked 
  * **notification_mask** mask with requested events 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * Set callback to NULL to disable callback 
  * please see macNotifications for reference 


Register notification callback. 


### function sysNotificationCallback

```cpp
MAC_APImacError sysNotificationCallback(
    macNotificationCallback cb =NULL,
    macNotifications notification =NOTIFICATION_NONE
)
```


**Parameters**: 

  * **cb** notification callback to be invoked 
  * **notification** mask with requested events 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * Set callback to NULL to disable callback 
  * please see macNotifications for reference 


Register notification callback. 


### function sysShowDesktop

```cpp
MAC_APImacError sysShowDesktop()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Show MAC desktop 


### function sysShowControlPanel

```cpp
MAC_APImacError sysShowControlPanel()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Show MAC Control Panel 


### function sysShowPowerControlPanel

```cpp
MAC_APImacError sysShowPowerControlPanel()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Show MAC Power Control Panel 


### function sysShowPrevApp

```cpp
MAC_APImacError sysShowPrevApp()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * Will show previously visible application. 
  * will show desktop if visibility stack is empty 


Show previous visible application 


### function sysLaunchAppid

```cpp
MAC_APImacError sysLaunchAppid(
    const std::string & appid,
    const std::vector< std::string > & args,
    const std::map< std::string, std::string > & envs,
    int params =0
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **args** arguments to be passed to application 
  * **envs** environments to be passed to application 
  * **params** mask with launching parameters from [macLaunchParams](namespacevfimac.md#enum-maclaunchparams) enum 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application id 


### function sysLaunchAppid

```cpp
MAC_APImacError sysLaunchAppid(
    const std::string & appid,
    const std::vector< std::string > & args,
    int params
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **args** arguments to be passed to application 
  * **params** mas with launching parameters from [macLaunchParams](namespacevfimac.md#enum-maclaunchparams) enum 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application id 


### function sysLaunchAppid

```cpp
MAC_APImacError sysLaunchAppid(
    const std::string & appid,
    const std::vector< std::string > & args
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **args** arguments to be passed to application 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application id 


### function sysLaunchAppid

```cpp
MAC_APImacError sysLaunchAppid(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application id from manifest file 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application id 


### function sysLaunchApp

```cpp
MAC_APImacError sysLaunchApp(
    const std::string & appname,
    const std::vector< std::string > & args
)
```


**Parameters**: 

  * **appname** application name from manifest file 
  * **args** arguments to be passed to application 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application name 


### function sysLaunchApp

```cpp
MAC_APImacError sysLaunchApp(
    const std::string & appname
)
```


**Parameters**: 

  * **appname** application name from manifest file 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Launch an application by application name 


### function sysRelaunchApps

```cpp
MAC_APImacError sysRelaunchApps()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * after invoking this API, MAC will first stop all applications. After that all applications with autolaunch sections in manifest files, will be launched. 
  * this API should bring terminal to clean state (same as after boot) 


Initialize relaunch process 


### function sysIsRunning

```cpp
MAC_APImacError sysIsRunning(
    const std::string & appid,
    bool & running
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **running** running/not running 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_NO_APPID](namespacevfimac.md#enumvalue-mac-err-no-appid) unknown application id 


Check if application is currently running 


### function sysShowProgress

```cpp
MAC_APImacError sysShowProgress(
    const std::string & info,
    size_t percent
)
```


**Parameters**: 

  * **info** message to be reported on screen 
  * **percent** boot progress (0-100%) 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_VISIBLE](namespacevfimac.md#enumvalue-mac-err-visible) application is not currently visible 


Shows progress screen during application startup 


### function sysSetAppid

```cpp
MAC_APImacError sysSetAppid(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application id from manifest file 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 


**Note**: 

  * This API is needed for specific usecase. Not intended for general use. 
  * This API is usefull when application was launched by SI, but it still wants to interract with MAC. 
  * Application needs to call sysUnSetAppid before exiting, to avoid resource leek. 
  * Be sure to invoke this API before using any ADK-GUI API calls. 


This API is used to register you application in MAC. After invokig this API, MAC will create new GUI region for application and set correct environment variables. 


### function sysUnSetAppid

```cpp
MAC_APImacError sysUnSetAppid()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 


**Note**: 

  * This API is needed for specific usecase. Not intended for general use. 
  * Be sure, to invoke this API before your application exits. 


This API will unregister your application from MAC. MAC will destroy used GUI region and free all resources. 


### function sysChangeLayout

```cpp
MAC_APImacError sysChangeLayout(
    const std::string & layoutname,
    bool statusbar =true,
    bool keyboard =false
)
```


**Parameters**: 

  * **layoutname** layout name from layout.ini file 
  * **statusbar** layout name with -sb suffix 
  * **keyboard** layout name with -kb suffix 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 


Change layout 


### function sysChangeLayout

```cpp
MAC_APImacError sysChangeLayout(
    const std::string & layoutname,
    bool statusbar
)
```


**Parameters**: 

  * **layoutname** layout name from layout.ini file 
  * **statusbar** layout name with -sb suffix 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 


Change layout 


### function sysAssignToLayout

```cpp
MAC_APImacError sysAssignToLayout(
    const std::string & appid,
    const std::string & region
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **region** region name from layout file 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_NO_APPID](namespacevfimac.md#enumvalue-mac-err-no-appid) unknown application id 


**Note**: This API is needed for split screen mode 

Assign application to certain region in layout 


### function sysFullscreenMode

```cpp
MAC_APImacError sysFullscreenMode(
    bool enable
)
```


**Parameters**: 

  * **enable** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_VISIBLE](namespacevfimac.md#enumvalue-mac-err-visible) application is not currently visible 


**Note**: Will switch layout to full screen one 

Enter/leave full screen mode 


### function sysStatusbar

```cpp
MAC_APImacError sysStatusbar(
    bool visible
)
```


**Parameters**: 

  * **visible** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: This configuration is stored per application 

Set statusbar state 


### function sysGetCPRState

```cpp
MAC_APImacError sysGetCPRState(
    bool & active
)
```


**Parameters**: 

  * **active** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: CPR will be inactive if no CP apps are installed or libcpr is missing on the system. 

Commerce Platform Runtime state 


### function sysGetCPAppRootDir

```cpp
MAC_APImacError sysGetCPAppRootDir(
    std::string & path
)
```


**Parameters**: 

  * **path** path to Commerce Platform application root directory 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


Get path to Commerce Platform application root directory 


### function sysGetWMState

```cpp
MAC_APImacError sysGetWMState(
    bool & active
)
```


**Parameters**: 

  * **active** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: Windows Management is ON on devices with hardware display or remote display. 

Windows Management state 


### function sysStatusbarState

```cpp
MAC_APImacError sysStatusbarState(
    bool & visible
)
```


**Parameters**: 

  * **visible** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: This configuration is stored per application 

Get current statusbar state 


### function sysSetStatusbarValues

```cpp
MAC_APImacError sysSetStatusbarValues(
    const std::map< std::string, std::string > & values
)
```


**Parameters**: 

  * **values** value map, which will be passed to statusbar.html 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * This API can be used to add extra icons to statusbar. 
  * This API is useful in case custom MAC resources are used. 


Sets value map to statusbar.html 


### function sysGetStatusbarValues

```cpp
MAC_APImacError sysGetStatusbarValues(
    std::map< std::string, std::string > & values
)
```


**Parameters**: 

  * **values** value map from statusbar 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * This API can be used to add extra icons to statusbar. 
  * This API is useful in case custom MAC resources are used. 


Obtain value map from statusbar.html 


### function sysStatusbarRefresh

```cpp
MAC_APImacError sysStatusbarRefresh()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Enforce MAC statusbar refresh 


### function sysVirtualKeyboard

```cpp
MAC_APImacError sysVirtualKeyboard(
    macKeyboard mode
)
```


**Parameters**: 

  * **mode** keyboard mode from [macKeyboard](namespacevfimac.md#enum-mackeyboard) enum 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_VISIBLE](namespacevfimac.md#enumvalue-mac-err-visible) application is not currently visible 


**Note**: 

  * Please see [macKeyboard](namespacevfimac.md#enum-mackeyboard) enum for reference. 
  * This configuration is stored per application. 


Show/hide virtual keyboard 


### function sysVirtualKeyboard

```cpp
MAC_APImacError sysVirtualKeyboard(
    int mode
)
```


**Parameters**: 

  * **mode** mask using [macKeyboard](namespacevfimac.md#enum-mackeyboard) value 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is currently locked 
  * [MAC_ERR_VISIBLE](namespacevfimac.md#enumvalue-mac-err-visible) application is not currently visible 


**Note**: 

  * Please see [macKeyboard](namespacevfimac.md#enum-mackeyboard) enum for reference. 
  * This configuration is stored per application. 


Set virtual keyboard mode 


### function sysLockLayout

```cpp
MAC_APImacError sysLockLayout(
    bool enable
)
```


**Parameters**: 

  * **enable** enable/disable layout lock 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is already locked 
  * [MAC_ERR_VISIBLE](namespacevfimac.md#enumvalue-mac-err-visible) application is not currently visible (in this case it can't lock layout) 


**Note**: Prevents other application from changing the layout (e.g. requesting full screen or virtual keyboard). Prevents from showing the application desktop. Typically this is being called when applications do user processing and don't want the layout to be changed. 

Lock/unlock the layout. 


### function sysInForeground

```cpp
MAC_APImacError sysInForeground(
    std::string & appid
)
```


**Parameters**: 

  * **appid** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Returns appid of currently visible application 


### function sysInForeground

```cpp
MAC_APImacError sysInForeground(
    bool & visible
)
```


**Parameters**: 

  * **visible** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Allows to check if application is currently visible 


### function sysToForeground

```cpp
MAC_APImacError sysToForeground(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application id from manifest file 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_LOCKED](namespacevfimac.md#enumvalue-mac-err-locked) layout is already locked 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_SERVICE](namespacevfimac.md#enumvalue-mac-err-service) application is service (no GUI) 


Bring application to foreground. 


### function sysToForground

```cpp
MAC_APImacError sysToForground(
    const std::string & appid
)
```


### function sysStopAppid

```cpp
MAC_APImacError sysStopAppid(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_APP_NOT_RUNNING](namespacevfimac.md#enumvalue-mac-err-app-not-running) application is not running 


Stops application by appid 


### function sysStopAppname

```cpp
MAC_APImacError sysStopAppname(
    const std::string & appname
)
```


**Parameters**: 

  * **appname** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_APP_NOT_RUNNING](namespacevfimac.md#enumvalue-mac-err-app-not-running) application is not running 


Stops application by application name 


### function sysStopAllUserApps

```cpp
MAC_APImacError sysStopAllUserApps()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: All applications started by MAC (users usr1-usr15) will be stopped. 

Stop all user applications 


### function sysStopOtherApps

```cpp
MAC_APImacError sysStopOtherApps()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * All applications started by MAC (users usr1-usr15) will be stopped. 
  * Calling application will remain active. 
  * This API is useful if you want to avoid any kind of interference from other applications. 


Stop all user applications, except for calling application 


### function sysGetAppList

```cpp
MAC_APImacError sysGetAppList(
    vfiipc::JSObject & applist
)
```


**Parameters**: 

  * **applist** 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: payload example: 

```cpp
{"appList":[ 
 {"Active":true,"AppId":"ccp","AppLabel":"Com Control" ,"AppName":"ccp","AppVersion":"1.8.0-pre-103","CPApp":false,"Desktop":{"AppLabel":"Com Control","Type":"app"},"Running":false,"Type":"app"}, 
 {"Active":true,"AppId":"cpdownloader","AppLabel":"cpdownloader","AppName":"cpdownloader","AppVersion":"2.31.0","CPApp":false,"Desktop":{"AppLabel":"cpdownloader","Type":"app"},"Running":false,"Type":"app"}, 
 {"Active":true,"AppId":"demo1","AppLabel":"demo","AppName":"demo1","AppVersion":"3.59.0","Autolaunch":{"Type":"app"},"CPApp":false,"Desktop":{"AppLabel":"demo","Type":"app"},"Running":true ,"Type":"app"}, 
 {"Active":true,"AppId":"lcp","AppLabel":"Log Control" ,"AppName":"lcp","AppVersion":"2.16.7","CPApp":false,"Desktop":{"AppLabel":"Log Control","Type":"app"} ,"Running":false,"Type":"app"} ],"result":"OK","status":0}"
```

Get information about available application 


### function sysScanManifests

```cpp
MAC_APImacError sysScanManifests()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_CYCLE](namespacevfimac.md#enumvalue-mac-err-cycle) manifest dependency cycle is detected 
  * [MAC_ERR_DEPENDS](namespacevfimac.md#enumvalue-mac-err-depends) manifests are missing dependencies 


**Note**: Typically this is done after a SW update and new application installation. 

Request MAC to rescan all folders for new manifest files 


### function sysSetCPEnvData

```cpp
MAC_APImacError sysSetCPEnvData(
    const vfiipc::JSObject & envs
)
```


**Parameters**: 

  * **envs** environment values 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


**Note**: 

  * Values will be accessible to CP application via ARGV[“cp_envData”]. 
  * Values are available only to CPR applications. 


Set environment values for CPR applications 


### function sysInstallCPApp

```cpp
MAC_APImacError sysInstallCPApp(
    const std::string & path
)
```


**Parameters**: 

  * **path** path to CPA package which should be installed 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_ACCESS](namespacevfimac.md#enumvalue-mac-err-access) installation package is not accessible 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no CP application to install 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


**Note**: Enable CPR logging channel to see installation log. 

Install Commerce Platform application 


### function sysLaunchCPAppFromDesktop

```cpp
MAC_APImacError sysLaunchCPAppFromDesktop(
    const std::string & trigger_id,
    const std::vector< std::string > & param
)
```


**Parameters**: 

  * **trigger_id** trigger identifier 
  * **param** parameters will be passed to CP application in cp_notifyParam field 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no matching CP application 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


**Note**: This API is asynchronous. 

MAC will generate desktop with icons for every CP application, which has matching trigger. 


### function sysLaunchCPAppFromDesktop

```cpp
MAC_APImacError sysLaunchCPAppFromDesktop(
    const std::string & trigger_id,
    const vfiipc::JSObject & param
)
```


**Parameters**: 

  * **trigger_id** trigger identifier 
  * **param** parameters will be passed to CP application in cp_notifyParam field 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no matching CP application 


**Note**: This API is asynchronous. 

MAC will generate desktop with icons for every CP application, which has matching trigger. 


### function sysLaunchCPAppFromDesktopSync

```cpp
MAC_APImacError sysLaunchCPAppFromDesktopSync(
    const std::string & trigger_id,
    const vfiipc::JSObject & param,
    int flags =0
)
```


**Parameters**: 

  * **trigger_id** trigger identifier 
  * **param** parameters will be passed to CP application in cp_notifyParam field 
  * **flags** flags passed to CP app in cp_notifyFlags field 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) application was launched successfully 
  * [MAC_ERR_CANCELED](namespacevfimac.md#enumvalue-mac-err-canceled) desktop was canceled by user 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) IPC error 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


**Note**: This API is synchronous. It will exit only after application is launched or desktop is canceled. 

MAC will generate desktop with icons for every CP application, which has matching trigger. 


### function sysLaunchCPAppByTrigger

```cpp
MAC_APImacError sysLaunchCPAppByTrigger(
    const std::string & appid,
    const std::string & trigger_id,
    const vfiipc::JSObject & param,
    unsigned int flags
)
```


**Parameters**: 

  * **appid** application id from manifest file (can be "*" for broadcast mode or "1" for unicast mode) 
  * **trigger_id** trigger identifier 
  * **param** parameters will be passed to CP application in cp_notifyParam field 
  * **flags** flags passed to CP app in cp_notifyFlags field 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no CP application to launch 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


**Note**: 

  * if appid is equal to "*", this will invoke broadcast mode. In this case all CP applications with matching trigger identifier will be launched one by one. Launching sequence happens according to CP application priorities. 
  * if appid is equal to "1", this will invoke unicast mode. In this case only one CP applications with highest priority and matching trigger identifier will be launched. 
  * in all other cases only one application with matching appid will be launched. 


Will execute all CP applications, which are registered for certain trigger identifier 


### function sysInvokeCPAppAction

```cpp
MAC_APImacError sysInvokeCPAppAction(
    const std::string & appid,
    const std::string & name,
    int display_id =0,
    unsigned int flags =0
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **name** action name 
  * **display_id** GUI display identifier 
  * **flags** for future use 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no CP application to launch 
  * [MAC_ERR_CPR_DISABLED](namespacevfimac.md#enumvalue-mac-err-cpr-disabled) CPR is disabled 


**Note**: API can be used for graceful API shutdown, if there is action which supports this. 

Allows to invoke action inside CP app context 


### function sysGetGUIRegionId

```cpp
MAC_APImacError sysGetGUIRegionId(
    const std::string & appid,
    int & gui_region_id
)
```


**Parameters**: 

  * **appid** application id from manifest file 
  * **gui_region_id** GUI region id 


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 
  * [MAC_ERR_PARAMETER](namespacevfimac.md#enumvalue-mac-err-parameter) wrong parameter passed 
  * [MAC_ERR_NOT_CP_APP](namespacevfimac.md#enumvalue-mac-err-not-cp-app) no CP application to launch 


Returns GUI region id used by application 


### function sysStopAllCPApps

```cpp
MAC_APImacError sysStopAllCPApps()
```


**Return**: 

  * Returns an [macError](namespacevfimac.md#enum-macerror) value enum 
  * [MAC_ERR_OK](namespacevfimac.md#enumvalue-mac-err-ok) success 
  * [MAC_ERR_IPC](namespacevfimac.md#enumvalue-mac-err-ipc) communication error 


Stop all Commerce Platform applications 


### function systemNotificationAdd

```cpp
MAC_API int systemNotificationAdd(
    systemNotificationPriority p,
    const std::string & message,
    bool sticky =false
)
```


**Parameters**: 

  * **p** notification priority like systemNotificationPriority::SYSTEM_NOTIFICATION_INFO systemNotificationPriority::SYSTEM_NOTIFICATION_WARNING systemNotificationPriority::SYSTEM_NOTIFICATION_CRITICAL 
  * **message** notification message 
  * **sticky** notification optional parameter. Can't be removed via GUI if 'true'. 


**Return**: 

  * negative value indicates an [macError](namespacevfimac.md#enum-macerror) value enum 
  * positive value (ID) indicates success. 


Add new system notification 


### function systemNotificationRemove

```cpp
MAC_APImacError systemNotificationRemove(
    int id
)
```


**Parameters**: 

  * **id** notification id to remove 


**Return**: returns an [macError](namespacevfimac.md#enum-macerror) value enum 

Remove notification 


### function systemNotificationList

```cpp
MAC_APImacError systemNotificationList(
    std::list< int > & list
)
```


**Parameters**: 

  * **list** notifications std::list<int> 


**Return**: returns an [macError](namespacevfimac.md#enum-macerror) value enum 

List of current notifications 


### function sysMac_GetVersion

```cpp
const MAC_API char * sysMac_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of MAC in ADK version string format: major.minor.patch-build, e.g. "1.2.3-4" 


### function sysLibMac_GetVersion

```cpp
const MAC_API char * sysLibMac_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of MAC library in ADK version string format: major.minor.patch-build, e.g. "1.2.3-4" 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100