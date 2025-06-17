---
title: pm/export/sysinfo/vfisyspm.h

---

# pm/export/sysinfo/vfisyspm.h



## Namespaces

| Name           |
| -------------- |
| **[vfisyspm](namespacevfisyspm.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisyspm::vfisyspm_DateTime](structvfisyspm_1_1vfisyspm___date_time.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VFI_SYS_PM_API](group___power.md#define-vfi-sys-pm-api)**  |
|  | **[PM_SUPRESS_NONE](group___power.md#define-pm-supress-none)**  |
|  | **[PM_SUPRESS_CRITICAL_SECTION](group___power.md#define-pm-supress-critical-section)**  |
|  | **[PM_SUPRESS_CHARGE_CHECK](group___power.md#define-pm-supress-charge-check)**  |
|  | **[PM_SUPRESS_ALL](group___power.md#define-pm-supress-all)**  |




## Macros Documentation

### define VFI_SYS_PM_API

```cpp
#define VFI_SYS_PM_API 
```


Marks public PM API 


### define PM_SUPRESS_NONE

```cpp
#define PM_SUPRESS_NONE PM_SUPPRESS_NONE
```


### define PM_SUPRESS_CRITICAL_SECTION

```cpp
#define PM_SUPRESS_CRITICAL_SECTION PM_SUPPRESS_CRITICAL_SECTION
```


### define PM_SUPRESS_CHARGE_CHECK

```cpp
#define PM_SUPRESS_CHARGE_CHECK PM_SUPPRESS_CHARGE_CHECK
```


### define PM_SUPRESS_ALL

```cpp
#define PM_SUPRESS_ALL PM_SUPPRESS_ALL
```


## Source code

```cpp
#pragma once

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "ipc/jsobject.h"

#if defined VFI_SYS_PM_DLL_EXPORT
    #define VFI_SYS_PM_API  __attribute__((visibility ("default")))

#else
    #define VFI_SYS_PM_API

#endif

// fix for typo in enum
#define PM_SUPRESS_NONE PM_SUPPRESS_NONE
#define PM_SUPRESS_CRITICAL_SECTION PM_SUPPRESS_CRITICAL_SECTION
#define PM_SUPRESS_CHARGE_CHECK PM_SUPPRESS_CHARGE_CHECK
#define PM_SUPRESS_ALL PM_SUPPRESS_ALL
 
#ifndef DOXYGEN

namespace vfisyspm
{
#endif

enum vfisyspmError
{
    SYS_PM_ERR_OK                 =   0,  
    SYS_PM_ERR_FAIL               =  -1,  
    SYS_PM_ERR_UNSUPPORTED        =  -2,  
    SYS_PM_ERR_UNKNOWN            =  -3,  
    SYS_PM_ERR_DAEMON_COM         =  -4,  
    SYS_PM_ERR_TIMEOUT            =  -5,  
    SYS_PM_ERR_LIBNOTIFY          =  -6,  
    SYS_PM_ERR_IPC                =  -7,  
    SYS_PM_ERR_NOT_RUNNING        =  -8,  
    SYS_PM_ERR_PARAM              =  -9,  
    SYS_PM_ERR_INIT               = -10,  
    SYS_PM_ERR_IN_CRIT_SECTION    = -11,  
    SYS_PM_ERR_POWER              = -12,  
    SYS_PM_ERR_CHARGING           = -13,  
    SYS_PM_ERR_CONFIG             = -14,  
    SYS_PM_ERR_NON_EXISTING       = -15,  
    SYS_PM_ERR_NOTIFY_SVC         = -16,  
    SYS_PM_ERR_TIMER              = -17,  
    SYS_PM_ERR_ALREADY_INIT       = -18,  
    SYS_PM_ERR_ALLOWED            = -19,  
    SYS_PM_ERR_STATE              = -20,  
    SYS_PM_ERR_LOW_LEVEL          = -21,  
    SYS_PM_ERR_WAKE_UP_IS_PENDING = -22,  
};

enum vfisyspmNotificationType
{
    PM_NOTIFY_TYPE_NONE             = 0,
    PM_NOTIFY_TYPE_POWER_MODE       = (1 << 0),
    PM_NOTIFY_TYPE_DOCK_STATE       = (1 << 1),
    PM_NOTIFY_TYPE_POWER_SOURCE     = (1 << 2),
    PM_NOTIFY_TYPE_WAKEUP_SOURCE    = (1 << 3),
    PM_NOTIFY_TYPE_CRITICAL_SECTION = (1 << 4),
    PM_NOTIFY_TYPE_PCI_REBOOT       = (1 << 5),
    PM_NOTIFY_TYPE_POWER_BUTTON     = (1 << 6),
    PM_NOTIFY_TYPE_LAST             = (1 << 7),
    PM_NOTIFY_TYPE_ALL              = 0xFFFF,
};

enum vfisyspmTimerFlags
{
    PM_TIMER_NONE = 0,
    PM_TIMER_NO_WAKE_UP = (1 << 0), 
};

enum vfisyspmChargningModes
{   
    PM_CHARGING_MODE_UNRESTRICTED = 1, 
    PM_CHARGING_MODE_CAR_CHARGER  = 2, 
}; 


enum vfisyspmTransitionFlags
{
    PM_SUPPRESS_NONE              = 0,
    PM_SUPPRESS_CRITICAL_SECTION  = (1 << 0), 
    PM_SUPPRESS_CHARGE_CHECK      = (1 << 1), 
    PM_SUPPRESS_BOOT_STATE        = (1 << 2), 
    PM_SYNC                       = (1 << 3), 
    PM_SUPPRESS_ALL = 
        PM_SUPPRESS_CRITICAL_SECTION | PM_SUPPRESS_CHARGE_CHECK | PM_SUPPRESS_BOOT_STATE 
};

enum vfisyspmCritSectionParameters
{
    PM_CRIT_NONE = 0,
    PM_CRIT_SUPRESS_STANDBY = (1 << 0),    
};

enum powermngtState
{
    BOOT       =-1, 
    ACTIVE     = 0, 
    STANDBY    = 1, 
    SLEEP      = 2, 
    DEEP_SLEEP = 3, 
    HIBERNATE  = 4, 
    OFF        = 5, 
    REBOOT     = 6, 
    LAST       = 9  
};   

enum vfisyspmNotifications
{
    ENTER_BOOT =                 37,  
    ENTER_ACTIVE =                0,  
    ENTER_STANDBY =               1,  
    ENTER_SLEEP =                 2,  
    ENTER_DEEP_SLEEP =           13,  
    ENTER_HIBERNATE =            10,  
    ENTER_SHUTDOWN =             12,  
    ENTER_REBOOT =               11,  
    ENTER_SYSMODE =              27,  
    ENTER_DOCKED =                3,  
    ENTER_UNDOCKED =              4,  
    ENTER_BATTERY  =              5,  
    ENTER_EXTERNAL_POWER =        6,  
    ENTER_BATTERY_NORMAL =       26,  
    ENTER_BATTERY_FULL =          7,  
    ENTER_BATTERY_LOW =           8,  
    ENTER_BATTERY_CRITICAL =      9,  
    BATTERY_FAULT =              35,  
    BATTERY_REMOVED =            36,  
    BUTTON_X_PRESSED =           14,  
    BUTTON_X_RELEASED =          15,  
    PCI_REBOOT_WARNING =         17,  
    WAKEUP =                     16,  
    WAKEUP_COMM =                18,  
    WAKEUP_USB =                 19,  
    WAKEUP_CONSOLE =             20,  
    WAKEUP_KEY_PRESS =           21,  
    WAKEUP_TIMER =               22,  
    WAKEUP_EXTERNAL =            23,  
    CRITICAL_SECTION_ENABLED =   24,  
    CRITICAL_SECTION_DISABLED =  25,  
    ABORT_PINPAD_ENABLE =        28,  
    ABORT_EARLY_WAKEUP =         29,  
    ABORT_HMAC_PROCESSING =      30,  
    ABORT_CRITICAL_SECTION =     31,  
    ABORT_SYSTEM_ERROR =         32,  
    CHARGING_MODE_UNRESTRICTED = 33,  
    CHARGING_MODE_CAR_CHARGER  = 34,  
    POWER_BUTTON_PRESSED =       37,  
    POWER_BUTTON_RELEASED =      38,  
};

typedef int wakeupHandle; // wakeup handle
typedef int timerHandle;  // timer handle

// Callback will receive JSON encoded timer information.
// JSON will include: time, timer handle and passed message.
// example:
// {"handle":11,"message":"timer for 90 seconds","time":1510696636}
typedef void (*timerNotificationCallback)( const vfiipc::JSObject & json ); // timer callback
  
typedef void (*vfisyspmCallback)(vfisyspmNotificationType type, vfisyspmNotifications notification);

/*  Replica of the Linux structure tm in time.h */
struct vfisyspm_DateTime
{
    int tm_sec;     
    int tm_min;     
    int tm_hour;    
    int tm_mday;    
    int tm_mon;     
    int tm_year;    
    int tm_wday;    
    int tm_yday;    
    int tm_isdst;   
};

VFI_SYS_PM_API vfisyspmError sys_Init();

VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb );

VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb, int typeMask );
VFI_SYS_PM_API vfisyspmError sys_Init( vfisyspmCallback cb, vfisyspmNotificationType typeMask );

VFI_SYS_PM_API vfisyspmError sys_Deinit();

VFI_SYS_PM_API vfisyspmError sys_SetNotificationCB( vfisyspmCallback cb, vfisyspmNotificationType typeMask );

VFI_SYS_PM_API vfisyspmError sys_SetChargingMode( vfisyspmChargningModes mode );

VFI_SYS_PM_API vfisyspmError sys_GetChargingMode( vfisyspmChargningModes & mode );

VFI_SYS_PM_API vfisyspmError sys_RefreshConfig();

VFI_SYS_PM_API vfisyspmError sys_Active(int flags);
VFI_SYS_PM_API vfisyspmError sys_Active();

VFI_SYS_PM_API vfisyspmError sys_Standby(int flags);
VFI_SYS_PM_API vfisyspmError sys_Standby();

VFI_SYS_PM_API vfisyspmError sys_Sleep(int flags);
VFI_SYS_PM_API vfisyspmError sys_Sleep();

VFI_SYS_PM_API vfisyspmError sys_DeepSleep(int flags);
VFI_SYS_PM_API vfisyspmError sys_DeepSleep();

VFI_SYS_PM_API vfisyspmError sys_Hibernate(int flags);
VFI_SYS_PM_API vfisyspmError sys_Hibernate();

VFI_SYS_PM_API vfisyspmError sys_Shutdown(int flags);
VFI_SYS_PM_API vfisyspmError sys_Shutdown();

VFI_SYS_PM_API vfisyspmError sys_Reboot(int flags);
VFI_SYS_PM_API vfisyspmError sys_Reboot();

VFI_SYS_PM_API vfisyspmError sys_RebootDock();

VFI_SYS_PM_API vfisyspmError sys_CriticalSectionEnter();

VFI_SYS_PM_API vfisyspmError sys_CriticalSectionEnter(int params);

VFI_SYS_PM_API vfisyspmError sys_CriticalSectionExit();

VFI_SYS_PM_API vfisyspmError sys_CriticalSectionState( bool & state );

VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( struct vfisyspm_DateTime * wakeupTime );

VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( 
        wakeupHandle & handle,
        const vfisyspm_DateTime & wakeup_time );

VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( 
        wakeupHandle & handle, 
        time_t time );

VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( 
        wakeupHandle & handle, 
        time_t time,
        powermngtState state,
        int flags);
 
VFI_SYS_PM_API vfisyspmError sys_SetWakeupTime( time_t time );
 
VFI_SYS_PM_API vfisyspmError sys_CancelWakeupTime( const wakeupHandle & handle );

VFI_SYS_PM_API vfisyspmError sys_ClearWakeupTimes();

VFI_SYS_PM_API vfisyspmError sys_SetPciRebootTime(struct vfisyspm_DateTime * rebootTime);

VFI_SYS_PM_API vfisyspmError sys_GetPciRebootTime(struct vfisyspm_DateTime * rebootTime);

VFI_SYS_PM_API vfisyspmError sys_ClearPciRebootTime();

VFI_SYS_PM_API vfisyspmError sys_GetConfig( vfiipc::JSObject & config );

VFI_SYS_PM_API vfisyspmError sys_SetConfig( const vfiipc::JSObject & config );

VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
            const vfisyspm_DateTime & time,
            const std::string & payload = "" );

VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
            const time_t time,
            const std::string & payload = "" );

VFI_SYS_PM_API vfisyspmError sys_SetTimer( timerHandle & handle,
            const time_t time,
            const std::string & payload,
            timerNotificationCallback cb,
            int flags = 0 );

VFI_SYS_PM_API vfisyspmError sys_CancelTimer( const timerHandle & handle );

VFI_SYS_PM_API vfisyspmError sys_CancelTimers();

VFI_SYS_PM_API vfisyspmError sys_CancelSleep();

VFI_SYS_PM_API vfisyspmError sys_SetTimerCallback( timerNotificationCallback cb );

VFI_SYS_PM_API vfisyspmError sys_GetRebootReason( std::string & reason );

VFI_SYS_PM_API vfisyspmError sys_StartSysmode();
 
VFI_SYS_PM_API vfisyspmError sys_CriticalSectionList( vfiipc::JSObject &list );

VFI_SYS_PM_API vfisyspmError sys_GetCurrentState( powermngtState & state );
 
VFI_SYS_PM_API const char *sys_GetSvcVersion();

VFI_SYS_PM_API const char *sys_GetVersion();

VFI_SYS_PM_API const char * sys_StrError( vfisyspmError error );

VFI_SYS_PM_API vfisyspmError sys_ResetBatteryFaultState();

#ifndef DOXYGEN
} // namespace vfisyspm
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
