---
hidden: true
title: vfisyspm.h
---

<a href="vfisyspm_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include <stdio.h>
 4 #include <stdlib.h>
 5 #include <time.h>
 6 #include "ipc/jsobject.h"
 7 
 13 #if defined VFI_SYS_PM_DLL_EXPORT
 14  #define VFI_SYS_PM_API __attribute__((visibility ("default")))
 15 
 16 #else
 17  #define VFI_SYS_PM_API
 18 
 19 #endif
 20 
 21 // fix for typo in enum
 22 #define PM_SUPRESS_NONE PM_SUPPRESS_NONE
 23 #define PM_SUPRESS_CRITICAL_SECTION PM_SUPPRESS_CRITICAL_SECTION
 24 #define PM_SUPRESS_CHARGE_CHECK PM_SUPPRESS_CHARGE_CHECK
 25 #define PM_SUPRESS_ALL PM_SUPPRESS_ALL
 26 
 27 #ifndef DOXYGEN
 28 
 29 namespace vfisyspm
 30 {
 31 #endif
 32 
 34 enum vfisyspmError
 35 {
 36  SYS_PM_ERR_OK = 0,
 37  SYS_PM_ERR_FAIL = -1,
 38  SYS_PM_ERR_UNSUPPORTED = -2,
 39  SYS_PM_ERR_UNKNOWN = -3,
 40  SYS_PM_ERR_DAEMON_COM = -4,
 41  SYS_PM_ERR_TIMEOUT = -5,
 42  SYS_PM_ERR_LIBNOTIFY = -6,
 43  SYS_PM_ERR_IPC = -7,
 44  SYS_PM_ERR_NOT_RUNNING = -8,
 45  SYS_PM_ERR_PARAM = -9,
 46  SYS_PM_ERR_INIT = -10,
 47  SYS_PM_ERR_IN_CRIT_SECTION = -11,
 48  SYS_PM_ERR_POWER = -12,
 49  SYS_PM_ERR_CHARGING = -13,
 50  SYS_PM_ERR_CONFIG = -14,
 51  SYS_PM_ERR_NON_EXISTING = -15,
 52  SYS_PM_ERR_NOTIFY_SVC = -16,
 53  SYS_PM_ERR_TIMER = -17,
 54  SYS_PM_ERR_ALREADY_INIT = -18,
 55  SYS_PM_ERR_ALLOWED = -19,
 56  SYS_PM_ERR_STATE = -20,
 57  SYS_PM_ERR_LOW_LEVEL = -21,
 58  SYS_PM_ERR_WAKE_UP_IS_PENDING = -22,
 59 };
 60 
 62 enum vfisyspmNotificationType
 63 {
 64  PM_NOTIFY_TYPE_NONE = 0,
 65  PM_NOTIFY_TYPE_POWER_MODE = (1 << 0),
 66  PM_NOTIFY_TYPE_DOCK_STATE = (1 << 1),
 67  PM_NOTIFY_TYPE_POWER_SOURCE = (1 << 2),
 68  PM_NOTIFY_TYPE_WAKEUP_SOURCE = (1 << 3),
 69  PM_NOTIFY_TYPE_CRITICAL_SECTION = (1 << 4),
 70  PM_NOTIFY_TYPE_PCI_REBOOT = (1 << 5),
 71  PM_NOTIFY_TYPE_POWER_BUTTON = (1 << 6),
 72  PM_NOTIFY_TYPE_LAST = (1 << 7),
 73  PM_NOTIFY_TYPE_ALL = 0xFFFF,
 74 };
 75 
 77 enum vfisyspmTimerFlags
 78 {
 79  PM_TIMER_NONE = 0,
 80  PM_TIMER_NO_WAKE_UP = (1 << 0),
 81 };
 82 
 84 enum vfisyspmChargningModes
 85 {
 86  PM_CHARGING_MODE_UNRESTRICTED = 1,
 87  PM_CHARGING_MODE_CAR_CHARGER = 2,
 88 };
 89 
 90 
 92 enum vfisyspmTransitionFlags
 93 {
 94  PM_SUPPRESS_NONE = 0,
 95  PM_SUPPRESS_CRITICAL_SECTION = (1 << 0),
 96  PM_SUPPRESS_CHARGE_CHECK = (1 << 1),
 97  PM_SUPPRESS_BOOT_STATE = (1 << 2),
 98  PM_SYNC = (1 << 3),
 99  PM_SUPPRESS_ALL =
 100  PM_SUPPRESS_CRITICAL_SECTION | PM_SUPPRESS_CHARGE_CHECK | PM_SUPPRESS_BOOT_STATE
 101 };
 102 
 104 enum vfisyspmCritSectionParameters
 105 {
 106  PM_CRIT_NONE = 0,
 107  PM_CRIT_SUPRESS_STANDBY = (1 << 0),
 108 };
 109 
 111 enum powermngtState
 112 {
 113  BOOT =-1,
 114  ACTIVE = 0,
 115  STANDBY = 1,
 116  SLEEP = 2,
 117  DEEP_SLEEP = 3,
 118  HIBERNATE = 4,
 119  OFF = 5,
 120  REBOOT = 6,
 121  LAST = 9
 122 };
 123 
 125 enum vfisyspmNotifications
 126 {
 127  ENTER_BOOT = 37,
 128  ENTER_ACTIVE = 0,
 129  ENTER_STANDBY = 1,
 130  ENTER_SLEEP = 2,
 131  ENTER_DEEP_SLEEP = 13,
 132  ENTER_HIBERNATE = 10,
 133  ENTER_SHUTDOWN = 12,
 134  ENTER_REBOOT = 11,
 135  ENTER_SYSMODE = 27,
 136  ENTER_DOCKED = 3,
 137  ENTER_UNDOCKED = 4,
 138  ENTER_BATTERY = 5,
 139  ENTER_EXTERNAL_POWER = 6,
 140  ENTER_BATTERY_NORMAL = 26,
 141  ENTER_BATTERY_FULL = 7,
 142  ENTER_BATTERY_LOW = 8,
 143  ENTER_BATTERY_CRITICAL = 9,
 144  BATTERY_FAULT = 35,
 145  BATTERY_REMOVED = 36,
 146  BUTTON_X_PRESSED = 14,
 147  BUTTON_X_RELEASED = 15,
 148  PCI_REBOOT_WARNING = 17,
 149  WAKEUP = 16,
 150  WAKEUP_COMM = 18,
 151  WAKEUP_USB = 19,
 152  WAKEUP_CONSOLE = 20,
 153  WAKEUP_KEY_PRESS = 21,
 154  WAKEUP_TIMER = 22,
 155  WAKEUP_EXTERNAL = 23,
 156  CRITICAL_SECTION_ENABLED = 24,
 157  CRITICAL_SECTION_DISABLED = 25,
 158  ABORT_PINPAD_ENABLE = 28,
 159  ABORT_EARLY_WAKEUP = 29,
 160  ABORT_HMAC_PROCESSING = 30,
 161  ABORT_CRITICAL_SECTION = 31,
 162  ABORT_SYSTEM_ERROR = 32,
 163  CHARGING_MODE_UNRESTRICTED = 33,
 164  CHARGING_MODE_CAR_CHARGER = 34,
 165  POWER_BUTTON_PRESSED = 37,
 166  POWER_BUTTON_RELEASED = 38,
 167 };
 168 
 169 typedef int wakeupHandle; // wakeup handle
 170 typedef int timerHandle; // timer handle
 171 
 172 // Callback will receive JSON encoded timer information.
 173 // JSON will include: time, timer handle and passed message.
 174 // example:
 175 // {"handle":11,"message":"timer for 90 seconds","time":1510696636}
 176 typedef void (*timerNotificationCallback)( const vfiipc::JSObject & json ); // timer callback
 177 
 183 typedef void (*vfisyspmCallback)(vfisyspmNotificationType type, vfisyspmNotifications notification);
 184 
 185 /* Replica of the Linux structure tm in time.h */
 186 struct vfisyspm_DateTime
 187 {
 188  int tm_sec;
 189  int tm_min;
 190  int tm_hour;
 191  int tm_mday;
 192  int tm_mon;
 193  int tm_year;
 194  int tm_wday;
 195  int tm_yday;
 196  int tm_isdst;
 197 };
 198 
 205 VFI_SYS_PM_API vfisyspmError sys_Init();
 206 
 214 VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb );
 215 
 224 VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb, int typeMask );
 225 VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb, vfisyspmNotificationType typeMask );
 226 
 231 VFI_SYS_PM_API vfisyspmError sys_Deinit();
 232 
 241 VFI_SYS_PM_API vfisyspmError sys_SetNotificationCB( vfisyspmCallback cb, vfisyspmNotificationType typeMask );
 242 
 250 VFI_SYS_PM_API vfisyspmError sys_SetChargingMode( vfisyspmChargningModes mode );
 251 
 259 VFI_SYS_PM_API vfisyspmError sys_GetChargingMode( vfisyspmChargningModes & mode );
 260 
 270 VFI_SYS_PM_API vfisyspmError sys_RefreshConfig();
 271 
 281 VFI_SYS_PM_API vfisyspmError sys_Active(int flags);
 282 VFI_SYS_PM_API vfisyspmError sys_Active();
 283 
 293 VFI_SYS_PM_API vfisyspmError sys_Standby(int flags);
 294 VFI_SYS_PM_API vfisyspmError sys_Standby();
 295 
 305 VFI_SYS_PM_API vfisyspmError sys_Sleep(int flags);
 306 VFI_SYS_PM_API vfisyspmError sys_Sleep();
 307 
 317 VFI_SYS_PM_API vfisyspmError sys_DeepSleep(int flags);
 318 VFI_SYS_PM_API vfisyspmError sys_DeepSleep();
 319 
 329 VFI_SYS_PM_API vfisyspmError sys_Hibernate(int flags);
 330 VFI_SYS_PM_API vfisyspmError sys_Hibernate();
 331 
 341 VFI_SYS_PM_API vfisyspmError sys_Shutdown(int flags);
 342 VFI_SYS_PM_API vfisyspmError sys_Shutdown();
 343 
 353 VFI_SYS_PM_API vfisyspmError sys_Reboot(int flags);
 354 VFI_SYS_PM_API vfisyspmError sys_Reboot();
 355 
 364 VFI_SYS_PM_API vfisyspmError sys_RebootDock();
 365 
 374 VFI_SYS_PM_API vfisyspmError sys_CriticalSectionEnter();
 375 
 385 VFI_SYS_PM_API vfisyspmError sys_CriticalSectionEnter(int params);
 386 
 395 VFI_SYS_PM_API vfisyspmError sys_CriticalSectionExit();
 396 
 406 VFI_SYS_PM_API vfisyspmError sys_CriticalSectionState( bool & state );
 407 
 417 VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( struct vfisyspm_DateTime * wakeupTime );
 418 
 429 VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime(
 430  wakeupHandle & handle,
 431  const vfisyspm_DateTime & wakeup_time );
 432 
 443 VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime(
 444  wakeupHandle & handle,
 445  time_t time );
 446 
 459 VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime(
 460  wakeupHandle & handle,
 461  time_t time,
 462  powermngtState state,
 463  int flags);
 464 
 474 VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( time_t time );
 475 
 486 VFI_SYS_PM_API vfisyspmError sys_CancelWakeupTime( const wakeupHandle & handle );
 487 
 496 VFI_SYS_PM_API vfisyspmError sys_ClearWakeupTimes();
 497 
 510 VFI_SYS_PM_API vfisyspmError sys_SetPciRebootTime(struct vfisyspm_DateTime * rebootTime);
 511 
 524 VFI_SYS_PM_API vfisyspmError sys_GetPciRebootTime(struct vfisyspm_DateTime * rebootTime);
 525 
 535 VFI_SYS_PM_API vfisyspmError sys_ClearPciRebootTime();
 536 
 546 VFI_SYS_PM_API vfisyspmError sys_GetConfig( vfiipc::JSObject & config );
 547 
 558 VFI_SYS_PM_API vfisyspmError sys_SetConfig( const vfiipc::JSObject & config );
 559 
 572 VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
 573  const vfisyspm_DateTime & time,
 574  const std::string & payload = "" );
 575 
 588 VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
 589  const time_t time,
 590  const std::string & payload = "" );
 591 
 605 VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
 606  const time_t time,
 607  const std::string & payload,
 608  timerNotificationCallback cb,
 609  int flags = 0 );
 610 
 621 VFI_SYS_PM_API vfisyspmError sys_CancelTimer( const timerHandle & handle );
 622 
 631 VFI_SYS_PM_API vfisyspmError sys_CancelTimers();
 632 
 644 VFI_SYS_PM_API vfisyspmError sys_CancelSleep();
 645 
 657 VFI_SYS_PM_API vfisyspmError sys_SetTimerCallback( timerNotificationCallback cb );
 658 
 669 VFI_SYS_PM_API vfisyspmError sys_GetRebootReason( std::string & reason );
 670 
 680 VFI_SYS_PM_API vfisyspmError sys_StartSysmode();
 681 
 692 VFI_SYS_PM_API vfisyspmError sys_CriticalSectionList( vfiipc::JSObject &list );
 693 
 705 VFI_SYS_PM_API vfisyspmError sys_GetCurrentState( powermngtState & state );
 706 
 712 VFI_SYS_PM_API const char *sys_GetSvcVersion();
 713 
 719 VFI_SYS_PM_API const char *sys_GetVersion();
 720 
 725 VFI_SYS_PM_API const char * sys_StrError( vfisyspmError error );
 726 
 739 VFI_SYS_PM_API vfisyspmError sys_ResetBatteryFaultState();
 740 
 741 #ifndef DOXYGEN
 742 } // namespace vfisyspm
 743 #endif
 744 
```
