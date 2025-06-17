---
title: tmsagt/src/VHQSysPmWrapper/VHQ_vfisyspm_wrapper.cpp

---

# tmsagt/src/VHQSysPmWrapper/VHQ_vfisyspm_wrapper.cpp

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| char * | **[vfisyspmTypeToStr](_v_h_q__vfisyspm__wrapper_8cpp.md#function-vfisyspmtypetostr)**([vfisyspmNotificationType](namespacevfisyspm.md#enum-vfisyspmnotificationtype) type) |
| char * | **[vfisyspmNotificationToStr](_v_h_q__vfisyspm__wrapper_8cpp.md#function-vfisyspmnotificationtostr)**([vfisyspmNotifications](namespacevfisyspm.md#enum-vfisyspmnotifications) notification) |
| void | **[VHQ_vfisyspmTimerCallback](_v_h_q__vfisyspm__wrapper_8cpp.md#function-vhq-vfisyspmtimercallback)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & json) |
| void | **[VHQ_vfisyspmCallback](_v_h_q__vfisyspm__wrapper_8cpp.md#function-vhq-vfisyspmcallback)**([vfisyspmNotificationType](namespacevfisyspm.md#enum-vfisyspmnotificationtype) type, [vfisyspmNotifications](namespacevfisyspm.md#enum-vfisyspmnotifications) notification) |
| | **[__attribute__](_v_h_q__vfisyspm__wrapper_8cpp.md#function---attribute--)**((visibility("default")) ) |
| | **[if](_v_h_q__vfisyspm__wrapper_8cpp.md#function-if)**(vfisyspm_inited  ==0) |
| | **[if](_v_h_q__vfisyspm__wrapper_8cpp.md#function-if)**(new_tv.it_value. tv_sec, 0 ) |
| | **[return](_v_h_q__vfisyspm__wrapper_8cpp.md#function-return)**(int ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| TimerCb | **[gCbFunc](_v_h_q__vfisyspm__wrapper_8cpp.md#variable-gcbfunc)**  |
| bool | **[vfisyspm_inited](_v_h_q__vfisyspm__wrapper_8cpp.md#variable-vfisyspm-inited)**  |
| struct tm * | **[wakeup_tm](_v_h_q__vfisyspm__wrapper_8cpp.md#variable-wakeup-tm)**  |
| time_t | **[cur_wkup_time](_v_h_q__vfisyspm__wrapper_8cpp.md#variable-cur-wkup-time)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VHQ_VFISYSPM_WRAPPER_LIB_NAME](_v_h_q__vfisyspm__wrapper_8cpp.md#define-vhq-vfisyspm-wrapper-lib-name)**  |

## Detailed Description


Wrapper functions for libvfisyspm. This is required due to versioning/compatibility issues in libvfisyspm. 


## Functions Documentation

### function vfisyspmTypeToStr

```cpp
char * vfisyspmTypeToStr(
    vfisyspmNotificationType type
)
```


### function vfisyspmNotificationToStr

```cpp
char * vfisyspmNotificationToStr(
    vfisyspmNotifications notification
)
```


### function VHQ_vfisyspmTimerCallback

```cpp
static void VHQ_vfisyspmTimerCallback(
    const vfiipc::JSObject & json
)
```


**Return**: void 

This function this callback will be invoked in timer API if no timer specific callback is set. 


### function VHQ_vfisyspmCallback

```cpp
void VHQ_vfisyspmCallback(
    vfisyspmNotificationType type,
    vfisyspmNotifications notification
)
```


### function __attribute__

```cpp
__attribute__(
    (visibility("default")) 
)
```


**Return**: [SDIPlugin](class_s_d_i_plugin.md) object 

SDI plugin entry function 


### function if

```cpp
if(
    vfisyspm_inited  ==0
)
```


### function if

```cpp
if(
    new_tv.it_value. tv_sec,
    0 
)
```


### function return

```cpp
return(
    int 
)
```



## Attributes Documentation

### variable gCbFunc

```cpp
static TimerCb gCbFunc = NULL;
```


### variable vfisyspm_inited

```cpp
static bool vfisyspm_inited = false;
```


### variable wakeup_tm

```cpp
struct tm * wakeup_tm {
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;
```


### variable cur_wkup_time

```cpp
static time_t cur_wkup_time = 0;
```



## Macros Documentation

### define VHQ_VFISYSPM_WRAPPER_LIB_NAME

```cpp
#define VHQ_VFISYSPM_WRAPPER_LIB_NAME "vhq_syspm_wrapper"
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <syslog.h>
#include <sys/time.h>
#include <sys/types.h>
#include <signal.h>
#include <time.h>
#include <unistd.h>
#include <stdbool.h>

#include "VHQ_vfisyspm_wrapper.h"
#include "temp_include/vfisyspm.h"
#include "ipc/notify.h"

using namespace vfisyspm;
using namespace vfiipc;

#define VHQ_VFISYSPM_WRAPPER_LIB_NAME   "vhq_syspm_wrapper"

static TimerCb gCbFunc = NULL;
static bool vfisyspm_inited = false;

/* If you enable this line, it is much easier to debug a development terminal as the syslog messages
 will just get directed to the console instead of syslog */
//#define syslog(filter, fmt, ...) printf(fmt, ##__VA_ARGS__)
char* vfisyspmTypeToStr(vfisyspmNotificationType type)
{
  static char temp_str[64];

  switch (type)
  {
    case PM_NOTIFY_TYPE_POWER_MODE:
      return (char*) "PowerMode";

    case PM_NOTIFY_TYPE_DOCK_STATE:
      return (char*) "DockState";

    case PM_NOTIFY_TYPE_POWER_SOURCE:
      return (char*) "PowerSource";

    case PM_NOTIFY_TYPE_WAKEUP_SOURCE:
      return (char*) "WakeupSource";

    case PM_NOTIFY_TYPE_CRITICAL_SECTION:
      return (char*) "CriticalSection";

    default:
      sprintf(temp_str, "Unknown (0x%08x)", type);
      return temp_str;
  }
}

char* vfisyspmNotificationToStr(vfisyspmNotifications notification)
{
  static char temp_str[64];

  switch (notification)
  {
    case ENTER_ACTIVE:
      return (char*) "EnterActive";
    case ENTER_STANDBY:
      return (char*) "EnterStandby";
    case ENTER_SLEEP:
      return (char*) "EnterSleep";
    case ENTER_DOCKED:
      return (char*) "EnterDocked";
    case ENTER_UNDOCKED:
      return (char*) "EnterUndocked";
    case ENTER_BATTERY:
      return (char*) "EnterBattery";
    case ENTER_EXTERNAL_POWER:
      return (char*) "EnterExtPower";
    case ENTER_BATTERY_FULL:
      return (char*) "EnterBattFull";
    case ENTER_BATTERY_LOW:
      return (char*) "EnterBattLow";
    case ENTER_BATTERY_CRITICAL:
      return (char*) "EnterBattCritical";
    case ENTER_HIBERNATE:
      return (char*) "EnterHibernate";
    case ENTER_REBOOT:
      return (char*) "EnterReboot";
    case ENTER_SHUTDOWN:
      return (char*) "EnterShutdown";
    case ENTER_DEEP_SLEEP:
      return (char*) "EnterDeepSleep";
    case BUTTON_X_PRESSED:
      return (char*) "ButtonXPressed";
    case BUTTON_X_RELEASED:
      return (char*) "ButtonXReleased";
    case WAKEUP:
      return (char*) "Wakeup";
    case PCI_REBOOT_WARNING:
      return (char*) "PCIRebootWarning";
    case WAKEUP_COMM:
      return (char*) "WakeupComm";
    case WAKEUP_USB:
      return (char*) "WakeupUSB";
    case WAKEUP_CONSOLE:
      return (char*) "WakeupConsole";
    case WAKEUP_KEY_PRESS:
      return (char*) "WakeupKeyPress";
    case WAKEUP_TIMER:
      return (char*) "WakeupTimer";
    case WAKEUP_EXTERNAL:
      return (char*) "WakeupExternal";
    case CRITICAL_SECTION_ENABLED:
      return (char*) "CriticalSectionEnabled";
    case CRITICAL_SECTION_DISABLED:
      return (char*) "CriticalSectionDisabled";
    case ENTER_BATTERY_NORMAL:
      return (char*) "EnterBatteryNormal";
    default:
      sprintf(temp_str, "Unknown (0x%08x)", notification);
      return temp_str;
  }
}

static void VHQ_vfisyspmTimerCallback(const vfiipc::JSObject &json)
{
  (void) (json);
  if (!gCbFunc)
  {
    syslog(LOG_ERR, "%s ERROR: CbFunc is NULL\n", __FUNCTION__);
    return;
  }

  syslog(LOG_INFO, "Invoking TimerCb function\n");
  gCbFunc();
}

void VHQ_vfisyspmCallback(vfisyspmNotificationType type,
                          vfisyspmNotifications notification)
{
  /* Handled using IPC ipcRegisterNotificationCB _vfisyspm_notification_trigger */
#if 0
    switch (type)
    {
    case PM_NOTIFY_TYPE_POWER_MODE:
        syslog(LOG_INFO, "Received Power Mode Notification\n");
        break;
    case PM_NOTIFY_TYPE_DOCK_STATE:
        syslog(LOG_INFO, "Received Dock State Notification\n");
        break;
    case PM_NOTIFY_TYPE_POWER_SOURCE:
        syslog(LOG_INFO, "Received Power Source Notification\n");
        break;
    case PM_NOTIFY_TYPE_WAKEUP_SOURCE:
        syslog(LOG_INFO, "Received Wakeup Source Notification\n");
        break;
    case PM_NOTIFY_TYPE_CRITICAL_SECTION:
        syslog(LOG_INFO, "Received Critical Section Notification\n");
        break;
    default:
        syslog(LOG_INFO, "Received a notification from SYSPM, type: %d, event: %d\n", type, notification);
        break;
    }
#endif

}

extern "C" __attribute__((visibility("default"))) void VHQ_vfisyspm_wrapper_lib_RegTimerCb(
    TimerCb CbFunc)
{
  if (!CbFunc)
  {
    syslog(LOG_ERR, "%s: ERROR CbFunc is NULL\n", __FUNCTION__);
    return;
  }

  gCbFunc = CbFunc;
  syslog(LOG_INFO, "%s: CbFunc registered successfully\n", __FUNCTION__);
}

extern "C" __attribute__((visibility("default"))) int VHQ_vfisyspm_wrapper_lib_SetWakeupTime(
    struct itimerval new_tv, struct tm *wakeup_tm)
{
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;
  static time_t cur_wkup_time = 0;

  if (vfisyspm_inited == 0)
  {
    vfisyspmError init_res;

    /* Initialize libvfissypm */
    init_res = sys_Init(VHQ_vfisyspmCallback, PM_NOTIFY_TYPE_ALL);
    if (init_res != SYS_PM_ERR_OK)
    {
      syslog(LOG_ERR, "%s: ERROR %d from sys_Init()\n", __FUNCTION__, init_res);
    }
    else
    {
      syslog(LOG_INFO, "%s: sys_Init() successful, setting callback\n",
             __FUNCTION__);
      init_res = sys_SetTimerCallback(VHQ_vfisyspmTimerCallback);
      if (init_res != SYS_PM_ERR_OK)
        syslog(LOG_ERR, "%s: ERROR %d from sys_SetTimerCallback()\n",
               __FUNCTION__, init_res);
      else
        vfisyspm_inited = 1;
    }
  }

  if (new_tv.it_value.tv_sec > 0)
  {
    /* In low power mode, we should make sure we use the sys_SetWakeupTime() API so
     that we get woken up from deep sleep state */
    time_t wkup_time = time(NULL) + new_tv.it_value.tv_sec;
    long long difference;
    struct tm wkup_tm;
    struct vfisyspm_DateTime wkup_vfisys;
    char asctime_str[128];

    /* Fill in the return structure */
    localtime_r(&wkup_time, &wkup_tm);
    memcpy(wakeup_tm, &wkup_tm, sizeof(struct tm));

    /* If the wakeup time is already set within 2 seconds of desired time, just leave it */
    difference = (long long) wkup_time - (long long) cur_wkup_time;
    //syslog(LOG_INFO, "%s: difference = %ld\n", __FUNCTION__, difference);
    if ((cur_wkup_time != 0) && (abs((int) (difference)) <= 2))
    {
      //syslog(LOG_INFO, "%s: wake up time already set for %lu (cur_wkup_time = %lu, new_wkup_time = %lu)\n", __FUNCTION__, wkup_time, cur_wkup_time, wkup_time);
      res = SYS_PM_ERR_OK;
    }
    else
    {
      static timerHandle handle;
      timerHandle local_handle = 0;
      //syslog(LOG_INFO, "%s: new wkup_time %lu (cur_wkup_time = %lu) - calling sys_SetWakeupTime()\n", __FUNCTION__, wkup_time, cur_wkup_time);

      if (handle)
      {
        local_handle = handle;
        res = sys_CancelTimer(local_handle);

        if (res != SYS_PM_ERR_OK)
        {
          syslog(LOG_DEBUG, "%s: Cancel timer failed/expired, handle: %d\n",
                 __FUNCTION__,
                 local_handle);
        }

        /* Reset handle */
        local_handle = 0;
        handle = 0;
      }

      memset(asctime_str, 0, sizeof(asctime_str));
      asctime_r(&wkup_tm, asctime_str);
      memcpy(&wkup_vfisys, &wkup_tm, sizeof(struct vfisyspm_DateTime));

      syslog(LOG_INFO, "%s: setting wake up time for %s\n", __FUNCTION__,
             asctime_str);

      // unlike wakeup API, timer will always invoke callback, even if unit is in Active state
      res = sys_SetTimer(local_handle, wkup_vfisys);
      syslog(LOG_INFO, "%s: sys_SetTimer() returned %d\n", __FUNCTION__, res);

      if (res != SYS_PM_ERR_OK)
      {
        syslog(LOG_ERR, "%s: ERROR %d from sys_SetTimer(%s)\n", __FUNCTION__,
               res, asctime(&wkup_tm));
      }
      else
      {
        handle = local_handle;

        /* Save the wakeup time so we only set it once */
        cur_wkup_time = wkup_time;

        syslog(
            LOG_INFO,
            "%s: setup wake up time for %d/%d/%d @ %02d:%02d:%02d (DST = %d)\n",
            __FUNCTION__, wkup_vfisys.tm_mon + 1, wkup_vfisys.tm_mday,
            wkup_vfisys.tm_year + 1900, wkup_vfisys.tm_hour, wkup_vfisys.tm_min,
            wkup_vfisys.tm_sec, wkup_vfisys.tm_isdst);
      }
    }

#if 0
        /* Mitch (9-13-17): We can enable this code if we want to force the device to go to sleep after we
        set the wakeup time.  With this code disabled, the device will go back to sleep according to its
        configuation */
        if (res == SYS_PM_ERR_OK)
        {
            vfisyspmError sleep_res = sys_Sleep();
            if (sleep_res != SYS_PM_ERR_OK)
            {
                syslog(LOG_ERR, "%s: ERROR %d from sys_Sleep()\n", __FUNCTION__, sleep_res);
            }
        }
#endif
  }

  return (int) res;
}


extern "C" __attribute__((visibility("default"))) int VHQ_vfisyspm_wrapper_lib_CritSecEnter(
    int params)
{
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;
  int retries = 2;

  if (vfisyspm_inited == 0)
  {
    vfisyspmError init_res;

    /* Initialize libvfissypm */
    init_res = sys_Init(VHQ_vfisyspmCallback, PM_NOTIFY_TYPE_ALL);
    if (init_res != SYS_PM_ERR_OK)
    {
      syslog(LOG_ERR, "%s: ERROR %d from sys_Init()\n", __FUNCTION__, init_res);
    }
    else
    {
      syslog(LOG_INFO, "%s: sys_Init() successful, setting callback\n",
             __FUNCTION__);
      init_res = sys_SetTimerCallback(VHQ_vfisyspmTimerCallback);
      if (init_res != SYS_PM_ERR_OK)
        syslog(LOG_ERR, "%s: ERROR %d from sys_SetTimerCallback()\n",
               __FUNCTION__, init_res);
      else
        vfisyspm_inited = 1;
    }
  }

  res = sys_CriticalSectionEnter(params);
  while (retries && (res == SYS_PM_ERR_NOT_RUNNING))
  {
    sleep(3);
    retries--;
    res = sys_CriticalSectionEnter(params);
  }

  if (res != SYS_PM_ERR_OK)
  {
    syslog(LOG_ERR, "%s: ERROR %d from sys_CriticalSectionEnter(%d)\n",
           __FUNCTION__, res);
  }
  else
  {
    //syslog(LOG_INFO, "%s: sys_CriticalSectionEnter successful\n", __FUNCTION__);
  }

  return (int) res;
}


extern "C" __attribute__((visibility("default"))) int VHQ_vfisyspm_wrapper_lib_CritSecExit(
    void)
{
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;

  if (vfisyspm_inited == 0)
  {
    vfisyspmError init_res;
    /* Initialize libvfissypm */
    init_res = sys_Init(VHQ_vfisyspmCallback, PM_NOTIFY_TYPE_POWER_MODE);
    if (init_res != SYS_PM_ERR_OK)
    {
      syslog(LOG_ERR, "%s: ERROR %d from sys_Init()\n", __FUNCTION__, init_res);
    }
    else
    {
      syslog(LOG_INFO, "%s: sys_Init() successful\n", __FUNCTION__);
      vfisyspm_inited = 1;
    }
  }

  res = sys_CriticalSectionExit();
  if (res != SYS_PM_ERR_OK)
  {
    syslog(LOG_ERR, "%s: ERROR %d from sys_CriticalSectionExit()\n",
           __FUNCTION__, res);
  }
  else
  {
    //syslog(LOG_INFO, "%s: sys_CriticalSectionExit successful\n", __FUNCTION__);
  }

  return (int) res;
}


extern "C" __attribute__((visibility("default"))) int VHQ_vfisyspm_wrapper_lib_CritSecState(
    bool *critSecEnabled)
{
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;
  bool bCritSecEnabled = false;

  if (vfisyspm_inited == 0)
  {
    vfisyspmError init_res;
    /* Initialize libvfissypm */
    init_res = sys_Init(VHQ_vfisyspmCallback, PM_NOTIFY_TYPE_POWER_MODE);
    if (init_res != SYS_PM_ERR_OK)
    {
      syslog(LOG_ERR, "%s: ERROR %d from sys_Init()\n", __FUNCTION__, init_res);
    }
    else
    {
      syslog(LOG_INFO, "%s: sys_Init() successful\n", __FUNCTION__);
      vfisyspm_inited = 1;
    }
  }

  res = sys_CriticalSectionState(bCritSecEnabled);
  if (res != SYS_PM_ERR_OK)
  {
    syslog(LOG_ERR,
           "%s: ERROR %d from VHQ_vfisyspm_wrapper_lib_CritSecState()\n",
           __FUNCTION__, res);
  }
  else
  {
    *critSecEnabled = bCritSecEnabled;
  }

  return (int) res;
}


extern "C" __attribute__((visibility("default"))) int VHQ_vfisyspm_wrapper_lib_Reboot(
    void)
{
  vfisyspmError res = SYS_PM_ERR_UNSUPPORTED;

  if (vfisyspm_inited == 0)
  {
    vfisyspmError init_res;
    /* Initialize libvfissypm */
    init_res = sys_Init(VHQ_vfisyspmCallback, PM_NOTIFY_TYPE_POWER_MODE);
    if (init_res != SYS_PM_ERR_OK)
    {
      syslog(LOG_ERR, "%s: ERROR %d from sys_Init()\n", __FUNCTION__, init_res);
    }
    else
    {
      syslog(LOG_INFO, "%s: sys_Init() successful\n", __FUNCTION__);
      vfisyspm_inited = 1;
    }
  }

  res = sys_Reboot(PM_SUPRESS_ALL);
  if (res != SYS_PM_ERR_OK)
  {
    syslog(LOG_ERR, "%s: ERROR %d from sys_CriticalSectionExit()\n",
           __FUNCTION__, res);
  }
  else
  {
    //syslog(LOG_INFO, "%s: sys_CriticalSectionExit successful\n", __FUNCTION__);
  }

  return (int) res;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
