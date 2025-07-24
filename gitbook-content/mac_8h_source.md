---
hidden: true
title: mac.h
---

<a href="mac_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 // STL
 4 #include <string>
 5 #include <vector>
 6 #include <map>
 7 #include <list>
 8 
 9 // ADK
 10 #include <ipc/jsobject.h>
 11 
 17 #ifndef DOXYGEN
 18 
 19 namespace vfimac
 20 {
 21 #endif
 22 
 23 #if defined VFI_MAC_DLL_EXPORT
 24  #define MAC_API __attribute__((visibility ("default")))
 25 
 26 #else
 27  #define MAC_API
 28 
 29 #endif
 30 
 32 enum macError
 33 {
 34  MAC_ERR_OK = 0,
 35  MAC_ERR_FAIL = -1,
 36  MAC_ERR_UNSUPPORTED = -2,
 37  MAC_ERR_LOCKED = -3,
 38  MAC_ERR_TIMEOUT = -4,
 39  MAC_ERR_LIBNOTIFY = -5,
 40  MAC_ERR_APP_NOT_RUNNING = -6,
 41  MAC_ERR_WRONG_APPID = -7,
 42  MAC_ERR_NOT_CP_APP = -8,
 43  MAC_ERR_UNKNOWN = -9,
 44  MAC_ERR_CYCLE = -10,
 45  MAC_ERR_DEPENDS = -11,
 46  MAC_ERR_MANIFEST = -12,
 47  MAC_ERR_IPC = -13,
 48  MAC_ERR_NO_APP = -14,
 49  MAC_ERR_READY = -15,
 50  MAC_ERR_ACTIVE = -16,
 51  MAC_ERR_STOP = -17,
 52  MAC_ERR_NO_APPID = -18,
 53  MAC_ERR_PERMISSION = -19,
 54  MAC_ERR_SERVICE = -20,
 55  MAC_ERR_VISIBLE = -21,
 56  MAC_ERR_DISABLED = -22,
 57  MAC_ERR_LAUNCH = -23,
 58  MAC_ERR_RUNNING = -24,
 59  MAC_ERR_LAYOUT = -25,
 60  MAC_ERR_PARAMETER = -26,
 61  MAC_ERR_IGNORE = -27,
 62  MAC_ERR_CANCELED = -28,
 63  MAC_ERR_EXISTS = -29,
 64  MAC_ERR_NO_KEYS = -30,
 65  MAC_ERR_EXPECTED_KEYS = -31,
 66  MAC_ERR_ACCESS = -32,
 67  MAC_ERR_AVAILIBLE = -33,
 68  MAC_ERR_CPR_DISABLED = -35,
 69 };
 70 
 72 enum macLaunchParams
 73 {
 74  NONE = 0,
 75  KEEP_IN_BACKGROUND = 1,
 76 };
 77 
 79 enum macKeyboard
 80 {
 81  MAC_KBD_OFF = (0<<0),
 82  MAC_KBD_ON = (1<<0),
 83  MAC_KBD_AUTO = (1<<1),
 84  MAC_KBD_NUMERIC = (1<<2),
 85  MAC_KBD_ALPHANUMERIC = (1<<3),
 86  MAC_KBD_CAPITALIZED = (1<<4),
 87  MAC_KBD_LAST = (1<<5),
 88 };
 89 
 91 enum macEvent
 92 {
 93  EVENT_NONE = 0,
 94  EVENT_MANIFEST_UPDATE = 1,
 95  EVENT_ACTIVATION_UPDATE = 2,
 96  EVENT_PARAMETER_UPDATE = 3,
 97  EVENT_FOCUS_UPDATE = 4,
 98  EVENT_FOREGROUND = 5,
 99  EVENT_BACKGROUND = 6,
 100  EVENT_CP_STARTED = 7,
 101  EVENT_CP_STOPPED = 8,
 102  EVENT_BOOT_COMPLETED = 9,
 103  EVENT_LAST = 10,
 104 };
 105 
 107 enum macNotifications
 108 {
 109  NOTIFICATION_NONE = (0<<0),
 110  NOTIFICATION_MANIFEST_RESCAN = (1<<0),
 111  NOTIFICATION_ACTIVATION_CFG_UPDATE = (1<<1),
 112  NOTIFICATION_PARAMETER_CFG_UPDATE = (1<<2),
 113  NOTIFICATION_CP_START = (1<<3),
 114  NOTIFICATION_CP_STOP = (1<<4),
 115  NOTIFICATION_LAST = (1<<6),
 116  NOTIFICATION_ALL = 0xFFFF
 117 };
 118 
 120 enum systemNotificationPriority
 121 {
 122  SYSTEM_NOTIFICATION_INFO = 1,
 123  SYSTEM_NOTIFICATION_WARNING = 2,
 124  SYSTEM_NOTIFICATION_CRITICAL = 3
 125 };
 126 
 132 typedef void (*macEventCallback)( macEvent event, const vfiipc::JSObject & json );
 133 
 140 typedef void (*macNotificationCallback)(macNotifications notification);
 141 
 152 MAC_API macError sysSetEventCallback( macEvent event, macEventCallback cb );
 153 
 164 MAC_API macError sysNotificationCallback( macNotificationCallback cb, long notification_mask );
 165 
 176 MAC_API macError sysNotificationCallback( macNotificationCallback cb = NULL,
 177  macNotifications notification = NOTIFICATION_NONE );
 178 
 185 MAC_API macError sysShowDesktop();
 186 
 193 MAC_API macError sysShowControlPanel();
 194 
 201 MAC_API macError sysShowPowerControlPanel();
 202 
 211 MAC_API macError sysShowPrevApp();
 212 
 223 MAC_API macError sysLaunchAppid( const std::string & appid,
 224  const std::vector< std::string > & args,
 225  const std::map< std::string,std::string > & envs, int params = 0 );
 226 
 236 MAC_API macError sysLaunchAppid( const std::string & appid,
 237  const std::vector<std::string> & args,
 238  int params );
 239 
 248 MAC_API macError sysLaunchAppid( const std::string & appid,
 249  const std::vector<std::string> & args);
 250 
 258 MAC_API macError sysLaunchAppid( const std::string & appid );
 259 
 268 MAC_API macError sysLaunchApp( const std::string & appname,
 269  const std::vector<std::string> & args );
 270 
 278 MAC_API macError sysLaunchApp( const std::string & appname );
 279 
 288 MAC_API macError sysRelaunchApps();
 289 
 298 MAC_API macError sysIsRunning( const std::string & appid, bool & running );
 299 
 308 MAC_API macError sysShowProgress( const std::string & info , size_t percent );
 309 
 320 MAC_API macError sysSetAppid( const std::string & appid );
 321 
 329 MAC_API macError sysUnSetAppid();
 330 
 339 MAC_API macError sysChangeLayout( const std::string & layoutname, bool statusbar = true, bool keyboard = false );
 340 
 348 MAC_API macError sysChangeLayout( const std::string & layoutname, bool statusbar );
 349 
 358 MAC_API macError sysAssignToLayout( const std::string & appid, const std::string & region );
 359 
 368 MAC_API macError sysFullscreenMode( bool enable );
 369 
 377 MAC_API macError sysStatusbar( bool visible );
 378 
 386 MAC_API macError sysGetCPRState( bool & active );
 387 
 394 MAC_API macError sysGetCPAppRootDir( std::string &path );
 395 
 403 MAC_API macError sysGetWMState( bool & active );
 404 
 412 MAC_API macError sysStatusbarState( bool & visible );
 413 
 422 MAC_API macError sysSetStatusbarValues( const std::map<std::string,std::string> & values );
 423 
 432 MAC_API macError sysGetStatusbarValues( std::map<std::string,std::string> & values );
 433 
 439 MAC_API macError sysStatusbarRefresh();
 440 
 451 MAC_API macError sysVirtualKeyboard( macKeyboard mode );
 452 
 463 MAC_API macError sysVirtualKeyboard( int mode );
 464 
 478 MAC_API macError sysLockLayout( bool enable );
 479 
 486 MAC_API macError sysInForeground( std::string & appid );
 487 
 494 MAC_API macError sysInForeground( bool & visible );
 495 
 504 MAC_API macError sysToForeground( const std::string & appid );
 505 MAC_API macError sysToForground( const std::string & appid );
 506 
 514 MAC_API macError sysStopAppid( const std::string & appid );
 515 
 523 MAC_API macError sysStopAppname( const std::string & appname );
 524 
 531 MAC_API macError sysStopAllUserApps();
 532 
 541 MAC_API macError sysStopOtherApps();
 542 
 557 MAC_API macError sysGetAppList( vfiipc::JSObject & applist );
 558 
 567 MAC_API macError sysScanManifests();
 568 
 577 MAC_API macError sysSetCPEnvData( const vfiipc::JSObject & envs );
 578 
 590 MAC_API macError sysInstallCPApp( const std::string & path );
 591 
 603 MAC_API macError sysLaunchCPAppFromDesktop( const std::string & trigger_id, const std::vector<std::string> & param);
 604 
 615 MAC_API macError sysLaunchCPAppFromDesktop( const std::string & trigger_id, const vfiipc::JSObject & param );
 616 
 628 MAC_API macError sysLaunchCPAppFromDesktopSync(
 629  const std::string & trigger_id,
 630  const vfiipc::JSObject & param,
 631  int flags = 0 );
 632 
 651 MAC_API macError sysLaunchCPAppByTrigger(
 652  const std::string & appid,
 653  const std::string & trigger_id,
 654  const vfiipc::JSObject & param,
 655  unsigned int flags );
 656 
 670 MAC_API macError sysInvokeCPAppAction(
 671  const std::string & appid,
 672  const std::string & name,
 673  int display_id = 0,
 674  unsigned int flags = 0 );
 675 
 685 MAC_API macError sysGetGUIRegionId(
 686  const std::string & appid,
 687  int & gui_region_id );
 688 
 694 MAC_API macError sysStopAllCPApps();
 695 
 706 MAC_API int systemNotificationAdd(
 707  systemNotificationPriority p,
 708  const std::string & message,
 709  bool sticky = false );
 710 
 715 MAC_API macError systemNotificationRemove( int id );
 716 
 721 MAC_API macError systemNotificationList( std::list<int> & list );
 722 
 726 MAC_API const char * sysMac_GetVersion();
 727 
 731 MAC_API const char * sysLibMac_GetVersion();
 732 
 733 #ifndef DOXYGEN
 734 } // namespace vfimac
 735 #endif
 736 
```
