---
title: tmsagt/src/VHQUtils/VHQUtils_shared_cpp.cpp

---

# tmsagt/src/VHQUtils/VHQUtils_shared_cpp.cpp

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[InitMainBatteryStatus](_v_h_q_utils__shared__cpp_8cpp.md#function-initmainbatterystatus)**(void ) |
| int | **[GetMainBatteryStatus](_v_h_q_utils__shared__cpp_8cpp.md#function-getmainbatterystatus)**(batt_info_t * pBatt) |
| bool | **[isMobileDevice](_v_h_q_utils__shared__cpp_8cpp.md#function-ismobiledevice)**() |
| bool | **[isDocked](_v_h_q_utils__shared__cpp_8cpp.md#function-isdocked)**() |
| void | **[UpdateCPInstalledApps](_v_h_q_utils__shared__cpp_8cpp.md#function-updatecpinstalledapps)**(void ) |
| bool | **[GetDockingStationInfo](_v_h_q_utils__shared__cpp_8cpp.md#function-getdockingstationinfo)**(dock_station_t * dock_station_info) |
| void | **[ipcSetAppIDwrapper](_v_h_q_utils__shared__cpp_8cpp.md#function-ipcsetappidwrapper)**() |
| bool | **[GetCPApplications](_v_h_q_utils__shared__cpp_8cpp.md#function-getcpapplications)**(list_head_t * ApplicationList) |
| bool | **[IScURLversionCompatible](_v_h_q_utils__shared__cpp_8cpp.md#function-iscurlversioncompatible)**(const CURL * curl, const unsigned int min_version_num) |
| int | **[VHQGetVRKPubKeyFile](_v_h_q_utils__shared__cpp_8cpp.md#function-vhqgetvrkpubkeyfile)**(char * full_file_name, int full_file_name_len) |
| bool | **[isVRKv2](_v_h_q_utils__shared__cpp_8cpp.md#function-isvrkv2)**() |
| vhq_result_t | **[GetKeyData](_v_h_q_utils__shared__cpp_8cpp.md#function-getkeydata)**() |

## Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[deviceIsDocked](_v_h_q_utils__shared__cpp_8cpp.md#variable-deviceisdocked)**  |
| bool | **[isBatteryPresent](_v_h_q_utils__shared__cpp_8cpp.md#variable-isbatterypresent)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[_GNU_SOURCE](_v_h_q_utils__shared__cpp_8cpp.md#define--gnu-source)**  |

## Detailed Description


Unpublished &ndash; rights reserved under the copyright laws of the United States and other countries.

Some platform dependent utility functions 


## Functions Documentation

### function InitMainBatteryStatus

```cpp
void InitMainBatteryStatus(
    void 
)
```


### function GetMainBatteryStatus

```cpp
int GetMainBatteryStatus(
    batt_info_t * pBatt
)
```


### function isMobileDevice

```cpp
bool isMobileDevice()
```


### function isDocked

```cpp
bool isDocked()
```


### function UpdateCPInstalledApps

```cpp
void UpdateCPInstalledApps(
    void 
)
```


### function GetDockingStationInfo

```cpp
bool GetDockingStationInfo(
    dock_station_t * dock_station_info
)
```


### function ipcSetAppIDwrapper

```cpp
void ipcSetAppIDwrapper()
```


**Return**: void 

This function sets application ID which will be used as source address when sending notifications. 


### function GetCPApplications

```cpp
bool GetCPApplications(
    list_head_t * ApplicationList
)
```


### function IScURLversionCompatible

```cpp
bool IScURLversionCompatible(
    const CURL * curl,
    const unsigned int min_version_num
)
```


### function VHQGetVRKPubKeyFile

```cpp
int VHQGetVRKPubKeyFile(
    char * full_file_name,
    int full_file_name_len
)
```


**Parameters**: 

  * **full_file_name** = VRK public key file name 
  * **full_file_name_len** = file name length.


**Return**: int 

This function gets the VRK public key file. 


### function isVRKv2

```cpp
bool isVRKv2()
```


### function GetKeyData

```cpp
vhq_result_t GetKeyData()
```



## Attributes Documentation

### variable deviceIsDocked

```cpp
static bool deviceIsDocked = TRUE;
```


### variable isBatteryPresent

```cpp
static bool isBatteryPresent = FALSE;
```



## Macros Documentation

### define _GNU_SOURCE

```cpp
#define _GNU_SOURCE 
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#ifndef __cplusplus
    #define _GNU_SOURCE
#endif

#include <stdio.h>
#include <string.h>
#include <fstream>

#include <svcsec.h>
#include <sys/sysinfo.h>
#include "sysinfo/mac.h"
#include "sysinfo/sysinfo.h"
#include "ipc/notify.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"

extern "C"
{
#include "VHQManager.h"
}

using namespace vfimac;
using namespace vfiipc;
using namespace vfisysinfo;

/* Default dock status is docked */
static volatile bool deviceIsDocked = TRUE;

/* Battery present or not */
static volatile bool isBatteryPresent = FALSE;

#ifdef _VOS2

#include <librtc.h>
#include "verifone/diag_counters.h"
#include <platforminfo_api.h>
#include <ctype.h>
#include "VHQMessages.h"
#include "VHQUtils.h"
#include "VHQVersion.h"
#include "VHQPosIPC.h"

using namespace std;

#define DEVICE_PREFIX_LEN 8

/* This define configures how to get docking notifications: when set to 1, we will register for the
 Carbon notifications received from the tablet side like we always did.  But we will also register
 for VFISYSPM notifications on devices with a battery present (Raptor Portables for example).
 So this define will enable docking handling across all Raptor platforms.  Note that this
 does not apply to VX yet. */

#define USE_ADK_SYS_PM_DOCK_NTF     1

#if USE_ADK_SYS_PM_DOCK_NTF
#include <dlfcn.h>
#endif // USE_ADK_SYS_PM_DOCK_NTF

#define DEBUG_IPC_NTF_SYSTEM    0

#define TEST_ANDROID_NTF_SYSTEM     0

#if TEST_ANDROID_NTF_SYSTEM
static const std::string dockupdate_test_ntf_str("EXT_SYS_POWER_MGMT_DOCKUPDATE_NTF");
static const std::string battupdate_test_ntf_str("EXT_SYS_POWER_MGMT_BATTUPDATE_NTF");

static const std::string dockupdate_test_resp_str("EXT_SYS_POWER_MGMT_DOCKSTATE_RESP");
static const std::string battupdate_test_resp_str("EXT_SYS_POWER_MGMT_BATTSTATE_RESP");
#endif // TEST_ANDROID_NTF_SYSTEM

static volatile bool BattStatusInitialized = FALSE;
static volatile bool DockStatusInitialized = FALSE;
static batt_info_t NTF_bat_data;

static bool retryBattInitialization = FALSE;
static bool retryDockInitialization = FALSE;

static const std::string one_receiver("1");

static dock_station_t dockStationData;
static bool initial_state_needs_sent = TRUE;
static bool dockinfo_from_tablet = FALSE;

static const std::string batteryState_Request_str(
    "EXT_SYS_POWER_MGMT_BATTSTATE_REQ");
static const std::string batteryState_Response_str(
    "EXT_SYS_POWER_MGMT_BATTSTATE_RESP");
static const std::string batteryNTF_trigger_str(
    "EXT_SYS_POWER_MGMT_BATTUPDATE_NTF");

static const std::string dockNTF_trigger_str(
    "EXT_SYS_POWER_MGMT_DOCKUPDATE_NTF");
static const std::string dockstate_request_trigger_str(
    "EXT_SYS_POWER_MGMT_DOCKSTATE_REQ");
static const std::string dockstate_response_str(
    "EXT_SYS_POWER_MGMT_DOCKSTATE_RESP");

static int dock_callback(int dock);

static bool isDualSystem()
{
  static int isDual = -1;

#if 0
  unsigned long rsize = 0;
  int retval = 0;

  int ret = platforminfo_get(PI_HAS_DUAL_CHIP_SUPPORT, &retval, sizeof(retval),
                             &rsize);
  if (PI_OK == ret)
  {
    isDual = (retval == 1) ? TRUE : FALSE;
  }
#endif
  if (isDual < 0)
  {
    const char devices_list[][DEVICE_PREFIX_LEN] = { "X", "SF-PAY", "SWF", "CM",
        "M440", "M424" };
    int num_devices = sizeof(devices_list) / DEVICE_PREFIX_LEN;
    char ModelNum[64] = { 0 };

    memset(ModelNum, 0, sizeof(ModelNum));
    GetModelNumber(ModelNum, sizeof(ModelNum));

    isDual = 0;

    for (int i = 0; i < num_devices; i++)
    {
      if (0
          == strncmp((const char*) ModelNum, (const char*) devices_list[i],
                     strlen(devices_list[i])))
      {
        isDual = 1;
      }
    }

    dbg_notice("%s: Device is dual system: %d\n", __FUNCTION__, isDual);
  }

  return (isDual == 1) ? TRUE : FALSE;
}

static void ParseBattInfo(bool check_result, const vfiipc::JSObject &param)
{

  if (check_result)
  {
    if (stricmp(param("result").getString().c_str(), "OK") != 0)
    {
      dbg_msg("%s: result = %s - returning without setting battery info\n",
              __FUNCTION__, param("result").getString().c_str());
      return;
    }
  }

  /* Read the battery info from the JSObject */
  NTF_bat_data.bMainBattery = 1;
  sscanf(param("bat_voltage").getString().c_str(), "%d", &NTF_bat_data.voltage);
  sscanf(param("bat_capacity").getString().c_str(), "%d",
         &NTF_bat_data.capacity);
  sscanf(param("bat_charge_level").getString().c_str(), "%d",
         &NTF_bat_data.level);
  sscanf(param("bat_temperature").getString().c_str(), "%d",
         &NTF_bat_data.temp);

#if DEBUG_IPC_NTF_SYSTEM
    dbg_msg( "%s: bat_voltage ('%s') converted to %d\n", __FUNCTION__, param("bat_voltage").getString().c_str(), NTF_bat_data.voltage);
    dbg_msg( "%s: bat_capacity ('%s') converted to %d\n", __FUNCTION__, param("bat_capacity").getString().c_str(), NTF_bat_data.capacity);
    dbg_msg( "%s: bat_charge_level ('%s') converted to %d\n", __FUNCTION__, param("bat_charge_level").getString().c_str(), NTF_bat_data.level);
    dbg_msg( "%s: bat_temperature ('%s') converted to %d\n", __FUNCTION__, param("bat_temperature").getString().c_str(), NTF_bat_data.temp);
#endif

}

static void batteryCallback(void *data, const std::string &from,
                            const std::string &to,
                            const std::string &notification,
                            const vfiipc::JSObject &param, unsigned flags)
{
#if DEBUG_IPC_NTF_SYSTEM
    dbg_msg( "%s: callback %s\n"
        "   from:         %s\n"
        "   to:           %s\n"
        "   notification: %s\n"
        "   param:        %s\n"
        "   flags:        %x\n\n", __FUNCTION__, (char *)data, from.c_str(), to.c_str(), notification.c_str(), param.dump().c_str(), flags);
#else
  UNUSED(data);
  UNUSED(from);
  UNUSED(to);
  UNUSED(flags);
#endif

  if (notification == batteryNTF_trigger_str)
  {
    BattStatusInitialized = TRUE;
    ParseBattInfo(FALSE, param);
  }
  else if (notification == batteryState_Response_str)
  {
    BattStatusInitialized = TRUE;
    ParseBattInfo(TRUE, param);
  }
}

#if DEBUG_IPC_NTF_SYSTEM

static void unicastErrorCallback(void *data,
    const std::string &from,
    const std::string &to,
    const std::string &notification,
    const vfiipc::JSObject &param,
    unsigned flags)
{
    dbg_msg( "%s: callback %s\n"
        "   from:         %s\n"
        "   to:           %s\n"
        "   notification: %s\n"
        "   param:        %s\n"
        "   flags:        %x\n\n", __FUNCTION__, data ? (char *)data : "NULL", from.c_str(), to.c_str(), notification.c_str(), param.dump().c_str(), flags);
}

#endif // DEBUG_IPC_NTF_SYSTEM

static void observerCallback(void *data, const std::string &from,
                             const std::string &to,
                             const std::string &notification_id, unsigned flags)
{
  UNUSED(data);
  UNUSED(from);
  UNUSED(to);
  UNUSED(notification_id);
  UNUSED(flags);

#if DEBUG_IPC_NTF_SYSTEM

    dbg_msg( "%s: callback %s\n"
        "   from:         %s\n"
        "   to:           %s\n"
        "   notification: %s\n"
        "   flags:        %x\n\n", __FUNCTION__, data ? (char *)data : "NULL", from.c_str(), to.c_str(), notification_id.c_str(), flags);

#endif // DEBUG_IPC_NTF_SYSTEM

  /* Battery status is not initialized, but we have received an observer callback with the below notifications.
   * So this is probably a case where the tablet initialization took longer than the agent could wait for.
   * Let's try and re-initialize the battery status */
  if ((BattStatusInitialized == FALSE)
      && ((notification_id == batteryNTF_trigger_str)
          || (notification_id == batteryState_Response_str)))
  {
    dbg_msg(
        "%s: Got ObserverCallback but Batt status is not initialized yet - setting flag to re-try battery initialization\n",
        __FUNCTION__);
    retryBattInitialization = TRUE;
  }

  if ((DockStatusInitialized == FALSE)
      && ((notification_id == dockNTF_trigger_str)
          || (notification_id == dockstate_response_str)))
  {
    dbg_msg(
        "%s: Got ObserverCallback but dock is not initialized yet - setting flag to re-try battery initialization\n",
        __FUNCTION__);
    retryDockInitialization = TRUE;
  }
}

void InitMainBatteryStatus(void)
{
  if (isDualSystem())
  {
    /* For Swordfish devices, we need to register for BATTUPDATE notifications */
    int retries = 2;
    NotifyResult BattState_request_res;
    vfiipc::JSObject jsobj;
    NotifyResult BattNTF_reg_res;
    NotifyResult BattState_req_res;
    NotifyResult Observer_reg_res;
#if DEBUG_IPC_NTF_SYSTEM
    NotifyResult UnicastError_reg_res;
#endif

    ipcSetAppIDwrapper();

#if DEBUG_IPC_NTF_SYSTEM
    UnicastError_reg_res = ipcRegisterUnicastError(unicastErrorCallback, (void*)NULL);
    if (UnicastError_reg_res != NOTIFY_OK)
    {
        log_err( "%s: Failed to register UnicastError callback - result = %d\n", __FUNCTION__, UnicastError_reg_res);
        return;
    }
    dbg_msg( "%s: registered UnicastError callback\n", __FUNCTION__);
#endif

    Observer_reg_res = ipcRegisterObserver(observerCallback, (void*) NULL);
    if (Observer_reg_res != NOTIFY_OK)
    {
      log_err("%s: Failed to register Observer callback - result = %d\n",
              __FUNCTION__, Observer_reg_res);
      return;
    }
    dbg_msg("%s: registered Observer callback\n", __FUNCTION__);

    BattNTF_reg_res = ipcRegisterNotificationCB(batteryNTF_trigger_str,
                                                batteryCallback, (void*) NULL,
                                                0);
    if (BattNTF_reg_res != NOTIFY_OK)
    {
      log_err("%s: Failed to register '%s' callback - result = %d\n",
              __FUNCTION__, batteryNTF_trigger_str.c_str(), BattNTF_reg_res);
      return;
    }

    BattState_req_res = ipcRegisterNotificationCB(batteryState_Response_str,
                                                  batteryCallback, (void*) NULL,
                                                  0);
    if (BattState_req_res != NOTIFY_OK)
    {
      log_err("%s: Failed to register '%s' callback - result = %d\n",
              __FUNCTION__, batteryState_Response_str.c_str(), BattNTF_reg_res);
      return;
    }

    dbg_msg("%s: registered callbacks for '%s' and '%s'\n", __FUNCTION__,
            batteryNTF_trigger_str.c_str(), batteryState_Response_str.c_str());

    jsobj("cmd") = "batt_state";
    BattState_request_res = vfiipc::ipcNotify(one_receiver,
                                              batteryState_Request_str, jsobj,
                                              0);
    if (BattState_request_res == NOTIFY_OK)
    {
      dbg_msg("%s: requested '%s'\n", __FUNCTION__,
              batteryState_Request_str.c_str());
    }
    else
    {
      log_err("%s: Failed to request '%s' - result = %d\n", __FUNCTION__,
              batteryState_Request_str.c_str(), BattState_request_res);
    }

#if TEST_ANDROID_NTF_SYSTEM
    {
        NotifyResult test_request_res;

        sleep(5);
        dbg_msg( "%s: sending '%s' notification to test\n", __FUNCTION__, batteryState_Response_str.c_str());
        jsobj.clear();
        jsobj("result") = "OK";
        jsobj("bat_voltage") = "31";
        jsobj("bat_capacity") = "500";
        jsobj("bat_charge_level") = "35";
        jsobj("bat_flags") = "CHARGING_RATE_TRICKLE";
        jsobj("bat_temperature") = "72";
        jsobj("bat_time") = "10000";
        jsobj("bat_type") = "2";
        test_request_res = vfiipc::ipcNotify(one_receiver, batteryState_Response_str, jsobj, 0);
        if (test_request_res == NOTIFY_OK)
        {
            dbg_msg( "%s: requested '%s'\n", __FUNCTION__, batteryState_Response_str.c_str());
        }
        else
        {
            log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, batteryState_Response_str.c_str(), test_request_res);
        }
    }
#endif // TEST_ANDROID_NTF_SYSTEM

    while ((BattStatusInitialized == FALSE) && (retries))
    {
      sleep(2);
      retries--;

      jsobj("cmd") = "batt_state";
      BattState_request_res = vfiipc::ipcNotify(one_receiver,
                                                batteryState_Request_str, jsobj,
                                                0);
      if (BattState_request_res == NOTIFY_OK)
      {
        dbg_msg("%s: requested '%s'\n", __FUNCTION__,
                batteryState_Request_str.c_str());
      }
      else
      {
        log_err("%s: Failed to request '%s' - result = %d\n", __FUNCTION__,
                batteryState_Request_str.c_str(), BattState_request_res);
      }
    }

    dbg_msg("%s: BattStatusInitialized is %d\n", __FUNCTION__,
            BattStatusInitialized);
  }
  else
  {
    int bat_avail = -1;
    int retVal = -1;

    /* Read battery info from sysinfo first */
    retVal = sysGetPropertyInt(SYS_PROP_BATTERY_AVAILABLE, &bat_avail);
    if (SYS_ERR_OK == retVal)
    {
      dbg_msg("%s: Battery Available = %d\n", __FUNCTION__, bat_avail);
    }
    else if (SYS_ERR_PROP_UNSUPPORTED == retVal)
    {
      dbg_notice("%s: Device doesn't support battery\n", __FUNCTION__);
    }
    else
    {
      log_err("%s: Sys Property for battery returned error = %d\n",
              __FUNCTION__, retVal);
    }

    isBatteryPresent = ((bat_avail > 0) ? TRUE : FALSE);
  }

  return;
}

extern "C" int GetMainBatteryStatus(batt_info_t *pBat)
{
  int bat_status = -1;

  /* Make sure pointer is valid */
  if (NULL == pBat)
    return -1;

  memset(pBat, 0, sizeof(*pBat));

  if (isDualSystem())
  {
    if (BattStatusInitialized == FALSE)
    {
      if (retryBattInitialization)
      {
        /* Battery status is not initialized, but we have received an observer callback. So this is probably a
         * case where the tablet initialization took longer than the agent could wait for. Let's try and re-initialize
         * the battery status */
        retryBattInitialization = FALSE;

        log_dbg(
            "%s: Re-trying battery initialization now that we have received the ObserverCallback()\n",
            __FUNCTION__);
        InitMainBatteryStatus();

        if (DockStatusInitialized == FALSE)
        {
          log_dbg(
              "%s: Re-trying docking initialization now that we have received the ObserverCallback()\n",
              __FUNCTION__);
          SetupDockMonitorNotification();
        }
      }

      if (BattStatusInitialized == FALSE)
      {
        /* We requested notification about battery status but haven't received any - let's
         go ahead and say we don't have a battery */
        return -1;
      }
      else
      {
        if (NTF_bat_data.bMainBattery)
        {
          pBat->bMainBattery = NTF_bat_data.bMainBattery;
          pBat->voltage = NTF_bat_data.voltage;
          pBat->capacity = NTF_bat_data.capacity;
          pBat->level = NTF_bat_data.level;
          pBat->temp = NTF_bat_data.temp;
          bat_status = 0;

#if DEBUG_IPC_NTF_SYSTEM
          dbg_msg( "%s: battery info through BATTUPDATE_NTF: bMainBattery = %d, voltage = %d, capacity = %d, level = %d\n",
                  __FUNCTION__, pBat->bMainBattery, pBat->voltage, pBat->capacity, pBat->level);
#endif // DEBUG_IPC_NTF_SYSTEM

        }
        else
        {
          /* We requested notification about battert status but STILL haven't received any - let's
           go ahead and say we don't have a battery */
          return -1;
        }
      }
    }
    else
    {
      vfiipc::JSObject jsobj;

#if TEST_ANDROID_NTF_SYSTEM
      {
          NotifyResult test_request_res;

          sleep(5);
          dbg_msg( "%s: sending '%s' notification to test\n", __FUNCTION__, battupdate_test_ntf_str.c_str());
          jsobj.clear();
          jsobj("bat_voltage") = "34";
          jsobj("bat_capacity") = "1000";
          jsobj("bat_charge_level") = "75";
          jsobj("bat_flags") = "CHARGING_RATE_UNKNOWN";
          jsobj("bat_temperature") = "90";
          jsobj("bat_time") = "0";
          jsobj("bat_type") = "1";
          test_request_res = vfiipc::ipcNotify(one_receiver, battupdate_test_ntf_str, jsobj, 0);
          if (test_request_res == NOTIFY_OK)
          {
              dbg_msg( "%s: requested '%s'\n", __FUNCTION__, battupdate_test_ntf_str.c_str());
          }
          else
          {
              log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, battupdate_test_ntf_str.c_str(), test_request_res);
          }
      }
#endif

      /* Since we are setup for BATTUPDATE_NTF, we can just read the battery info from the
       NTF_bat_data structure.  That structure will always be up to date with the latest
       battery info since it is setup in response to BATTUPDATE_NTF and BATTSTATE_REQ */
      if (NTF_bat_data.bMainBattery)
      {
        pBat->bMainBattery = NTF_bat_data.bMainBattery;
        pBat->voltage = NTF_bat_data.voltage;
        pBat->capacity = NTF_bat_data.capacity;
        pBat->level = NTF_bat_data.level;
        pBat->temp = NTF_bat_data.temp;
        bat_status = 0;

        dbg_msg(
            "%s: battery info through BATTUPDATE_NTF: bMainBattery = %d, voltage = %d, capacity = %d, level = %d\n",
            __FUNCTION__, pBat->bMainBattery, pBat->voltage, pBat->capacity,
            pBat->level);

#if DEBUG_IPC_NTF_SYSTEM
      dbg_msg("%s: battery info read through sysinfo: bMainBattery = %d, voltage = %d, capacity = %d, level = %d\n",
          __FUNCTION__, pBat->bMainBattery, pBat->voltage, pBat->capacity, pBat->level);
#endif // DEBUG_IPC_NTF_SYSTEM
      }
    }
  }
  else
  {
    if (isBatteryPresent)
    {
      bat_status = 1;
      pBat->bMainBattery = 1;

      sysGetPropertyInt(SYS_PROP_BATTERY_VOLTAGE, &pBat->voltage);
      sysGetPropertyInt(SYS_PROP_BATTERY_CAPACITY, &pBat->capacity);
      sysGetPropertyInt(SYS_PROP_BATTERY_TEMP, &pBat->temp);
      sysGetPropertyInt(SYS_PROP_BATTERY_CHARGE_LEVEL, &pBat->level);
      sysGetPropertyInt(SYS_PROP_POWER_STATUS, &pBat->powerStatus);

      sysGetPropertyString(SYS_PROP_BATTERY_SERIALNO, (char*) &pBat->sernum,
                           sizeof(pBat->sernum));

      dbg_msg("%s: battery info read through sysinfo: bMainBattery = %d, voltage = %d, capacity = %d, level = %d\n",
                __FUNCTION__, pBat->bMainBattery, pBat->voltage, pBat->capacity, pBat->level);
    }
    else
    {
      bat_status = 0;
    }
  }

  return bat_status;
}

bool isMobileDevice()
{
  return isBatteryPresent;
}

bool isDocked()
{
  return deviceIsDocked;
}

static void dockedHandler(bool isDocked)
{
  uint32 event_mask = 0;
  uint32 event = (isDocked) ? EVENT_DOCK_IN : EVENT_DOCK_OUT;

  VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask, DEFAULT_BASE);

  deviceIsDocked = isDocked;

  if ((event_mask & EVENT_DOCK_IN) && (event == EVENT_DOCK_IN))
  {
    log_notice("%s: Sending dock-in event\n", __FUNCTION__);
    sendEvents(EVENT_DOCK_IN, NULL);
  }
  else if ((event_mask & EVENT_DOCK_OUT) && (event == EVENT_DOCK_OUT))
  {
    log_notice("%s: Sending dock-out event\n", __FUNCTION__);
    sendEvents(EVENT_DOCK_OUT, NULL);
  }
}

static int dock_callback(int dock)
{
  bool event = (dock) ? TRUE : FALSE;

  dockedHandler(event);

  return 0;
}

static void ParseDockNTFInfo(const vfiipc::JSObject &param)
{
  NotifyResult DockState_request_res;
  vfiipc::JSObject jsobj;

  /* Read the dock info from the JSObject */
  dbg_msg(
      "%s: Received dock NTF: state = %s - requesting %s to update dock station info\n",
      __FUNCTION__, param("state").getString().c_str(),
      dockstate_request_trigger_str.c_str());

  jsobj("cmd") = "dock_state";
  DockState_request_res = vfiipc::ipcNotify(one_receiver,
                                            dockstate_request_trigger_str,
                                            jsobj, 0);
  if (DockState_request_res == NOTIFY_OK)
  {
    dbg_msg("%s: requested '%s'\n", __FUNCTION__,
            dockstate_request_trigger_str.c_str());
  }
  else
  {
    log_err("%s: Failed to request '%s' - result = %d\n", __FUNCTION__,
            dockstate_request_trigger_str.c_str(), DockState_request_res);
  }

  sscanf(param("external_power").getString().c_str(), "%d",
         &dockStationData.external_power);
  dbg_msg("%s: external_power ('%s') converted to %d\n", __FUNCTION__,
          param("external_power").getString().c_str(),
          dockStationData.external_power);
}

static void ParseDockRESPInfo(const vfiipc::JSObject &param)
{

  if (stricmp(param("result").getString().c_str(), "OK") != 0)
  {
    DebugMsg(
        VHQ_LOGGING_LEVEL_DEBUG,
        "%s: result = %s - returning without setting docking station info\n",
        __FUNCTION__, param("result").getString().c_str());
    return;
  }

  /* Read the dock station info from the JSObject */
  sscanf(param("external_power").getString().c_str(), "%d",
         &dockStationData.external_power);
  dbg_msg("%s: external_power ('%s') converted to %d\n", __FUNCTION__,
          param("external_power").getString().c_str(),
          dockStationData.external_power);

  strncpy(dockStationData.dock_model_name,
          param("dock_model_name").getString().c_str(),
          sizeof(dockStationData.dock_model_name));
  dbg_msg("%s: dock_model_name ('%s') converted to %s\n", __FUNCTION__,
          param("dock_model_name").getString().c_str(),
          dockStationData.dock_model_name);

  strncpy(dockStationData.dock_serial_no,
          param("dock_serial_no").getString().c_str(),
          sizeof(dockStationData.dock_serial_no));
  dbg_msg("%s: dock_serial_no ('%s') converted to %s\n", __FUNCTION__,
          param("dock_serial_no").getString().c_str(),
          dockStationData.dock_serial_no);

  strncpy(dockStationData.dock_part_no,
          param("dock_part_no").getString().c_str(),
          sizeof(dockStationData.dock_part_no));
  dbg_msg("%s: dock_part_no ('%s') converted to %s\n", __FUNCTION__,
          param("dock_part_no").getString().c_str(),
          dockStationData.dock_part_no);

  strncpy(dockStationData.dock_os_version,
          param("dock_os_version").getString().c_str(),
          sizeof(dockStationData.dock_os_version));
  dbg_msg("%s: dock_os_version ('%s') converted to %s\n", __FUNCTION__,
          param("dock_os_version").getString().c_str(),
          dockStationData.dock_os_version);

  if (strcmp(param("state").getString().c_str(), "docked") == 0)
  {
    dockedHandler(TRUE);
  }
  else if (strcmp(param("state").getString().c_str(), "undocked") == 0)
  {
    dockedHandler(FALSE);
  }

  if (DockStatusInitialized == FALSE)
  {
    DockStatusInitialized = TRUE;
    dbg_msg("%s: Dock Status Initialized - initial_state_needs_sent = %d\n",
            __FUNCTION__, initial_state_needs_sent);

    /* Mitch - 2-9-2017: This code will send DOCK_IN or DOCK_OUT event for the initial state of the device.  I discussed this
     with Bill in the past and this is how they wanted us to implement it.  I don't necessarily agree that we should send
     the event at initialization so if we want to stop doing that, we can just remove this code */
    if (initial_state_needs_sent)
    {
      if (deviceIsDocked == TRUE)
      {
        dockedHandler(TRUE);
        initial_state_needs_sent = FALSE;
      }
      else
      {
        dockedHandler(FALSE);
        initial_state_needs_sent = FALSE;
      }
    }
  }

  log_notice("%s: deviceIsDocked set to %d\n", __FUNCTION__, deviceIsDocked);
}

static void DockMonitorCallback(void *data, const std::string &from,
                                const std::string &to,
                                const std::string &notification,
                                const vfiipc::JSObject &param, unsigned flags)
{
#if DEBUG_IPC_NTF_SYSTEM
    dbg_msg( "%s: callback %s\n"
        "   from:         %s\n"
        "   to:           %s\n"
        "   notification: %s\n"
        "   param:        %s\n"
        "   flags:        %x\n\n", __FUNCTION__, (char *)data, from.c_str(), to.c_str(), notification.c_str(), param.dump().c_str(), flags);
#else
  UNUSED(data);
  UNUSED(from);
  UNUSED(to);
  UNUSED(flags);
#endif

  /* If we ever get this callback, it means we are getting the dock information from the tablet side
   of a Carbon device.*/
  dockinfo_from_tablet = TRUE;

  if (notification == dockNTF_trigger_str)
  {
    dbg_msg("%s: received '%s' CALLBACK\n", __FUNCTION__,
            dockNTF_trigger_str.c_str());
    ParseDockNTFInfo(param);
  }
  else if (notification == dockstate_response_str)
  {
    dbg_msg("%s: received '%s' CALLBACK\n", __FUNCTION__,
            dockstate_response_str.c_str());
    ParseDockRESPInfo(param);
  }
}

void SetupDockMonitorNotification(void)
{
  if (isDualSystem())
  {
    int retries = 2;
    NotifyResult DockNTF_reg_res;
    NotifyResult DockState_register_res;
    NotifyResult DockState_request_res;
    vfiipc::JSObject jsobj;
    static bool registered = FALSE;
    uint32 delay_between_retries = 2;

    memset(&dockStationData, 0, sizeof(dock_station_t));
    if (!registered || retryDockInitialization)
    {
      ipcSetAppIDwrapper();

      DockNTF_reg_res = ipcRegisterNotificationCB(dockNTF_trigger_str,
                                                  DockMonitorCallback,
                                                  (void*) NULL, 0);
      DockState_register_res = ipcRegisterNotificationCB(dockstate_response_str,
                                                         DockMonitorCallback,
                                                         (void*) NULL, 0);

      if ((DockNTF_reg_res != NOTIFY_OK)
          || (DockState_register_res != NOTIFY_OK))
      {
        if (DockNTF_reg_res != NOTIFY_OK)
        {
          log_err("%s: Failed to register '%s' callback - result = %d\n",
                  __FUNCTION__, dockNTF_trigger_str.c_str(), DockNTF_reg_res);
        }
        if (DockState_register_res != NOTIFY_OK)
        {
          log_err("%s: Failed to register '%s' callback - result = %d\n",
                  __FUNCTION__, dockstate_response_str.c_str(),
                  DockState_register_res);
        }
        return;
      }

      if (DockState_register_res == NOTIFY_OK)
      {
        /* We are now registered so we don't need to do it again */
        registered = TRUE;
      }
    }

    dbg_msg("%s: registered callbacks for '%s' and '%s'\n\trequesting %s\n",
            __FUNCTION__, dockNTF_trigger_str.c_str(),
            dockstate_response_str.c_str(),
            dockstate_request_trigger_str.c_str());

    jsobj("cmd") = "dock_state";
    DockState_request_res = vfiipc::ipcNotify(one_receiver,
                                              dockstate_request_trigger_str,
                                              jsobj, 0);
    if (DockState_request_res == NOTIFY_OK)
    {
      dbg_msg("%s: requested '%s'\n", __FUNCTION__,
              dockstate_request_trigger_str.c_str());
    }
    else
    {
      log_err("%s: Failed to request '%s' - result = %d\n", __FUNCTION__,
              dockstate_request_trigger_str.c_str(), DockState_request_res);
    }

#if TEST_ANDROID_NTF_SYSTEM
    {
        NotifyResult test_request_res;

        sleep(5);
        dbg_msg( "%s: sending '%s' notification to test\n", __FUNCTION__, dockupdate_test_resp_str.c_str());
        jsobj.clear();
        jsobj("result") = "ok";
        jsobj("state") = "docked";
        jsobj("external_power") = "1";
        jsobj("dock_model_name") = "P400";
        jsobj("dock_serial_no") = "123-456-789";
        jsobj("dock_part_no") = "M135-02-67";
        jsobj("dock_os_version") = "30550101";

        test_request_res = vfiipc::ipcNotify(one_receiver, dockupdate_test_resp_str, jsobj, 0);
        if (test_request_res == NOTIFY_OK)
        {
            dbg_msg( "%s: requested '%s'\n", __FUNCTION__, dockupdate_test_resp_str.c_str());
        }
        else
        {
            log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, dockupdate_test_resp_str.c_str(), test_request_res);
        }

        sleep(5);
        dbg_msg( "%s: sending '%s' notification to test\n", __FUNCTION__, dockupdate_test_ntf_str.c_str());
        jsobj.clear();
        jsobj("state") = "docked";
        jsobj("external_power") = "1";
        test_request_res = vfiipc::ipcNotify(one_receiver, dockupdate_test_ntf_str, jsobj, 0);
        if (test_request_res == NOTIFY_OK)
        {
            dbg_msg( "%s: requested '%s'\n", __FUNCTION__, dockupdate_test_ntf_str.c_str());
        }
        else
        {
            log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, dockupdate_test_ntf_str.c_str(), test_request_res);
        }
    }
#endif

    VHQGetParameterUint32(PARAM_CARBON_IPC_DELAY_BETWEEN_RETRIES,
                          &delay_between_retries, DEFAULT_BASE);

    while ((DockStatusInitialized == FALSE) && (retries))
    {
      sleep(delay_between_retries);
      retries--;

      jsobj("cmd") = "dock_state";
      DockState_request_res = vfiipc::ipcNotify(one_receiver,
                                                dockstate_request_trigger_str,
                                                jsobj, 0);
      if (DockState_request_res == NOTIFY_OK)
      {
        dbg_msg("%s: requested '%s'\n", __FUNCTION__,
                dockstate_request_trigger_str.c_str());
      }
      else
      {
        log_err("%s: Failed to request '%s' - result = %d\n", __FUNCTION__,
                dockstate_request_trigger_str.c_str(), DockState_request_res);
      }
    }

    dbg_msg("%s: DockStatusInitialized is %d\n", __FUNCTION__,
            DockStatusInitialized);
  }
  else
  {
    PI_base_station_info_st dock;
    unsigned long size;

    int status = platforminfo_get(PI_BASE_STATION_INFO, &dock, sizeof(dock),
                                  &size);
    if (PI_OK == status)
    {
#if _VOS2
      /* Returns ok for mobile handsets */
      status = sysinfo_isDocked_GetEvent((unsigned int) dock_callback);
      if (0 != status)
      {
        log_err("%s: Failed to register dock callback - result = %d\n",
                __FUNCTION__, status);

        /* Try the hard way */
        if (dock.exist)
        {
          dbg_msg("%s: Setting deviceIsDocked to TRUE\n", __FUNCTION__);

          if (dock.interface_type == PI_BASE_STATION_USB_TYPE)
          {
            dbg_msg("%s: Device connected using USB\n", __FUNCTION__);
          }
          else if (dock.interface_type == PI_BASE_STATION_TYPE)
          {
            dbg_msg("%s: Device connected using BT\n", __FUNCTION__);
          }

          dockedHandler(TRUE);
        }
        else
        {
          dbg_msg("%s: Setting deviceIsDocked to FALSE\n", __FUNCTION__);
          dockedHandler(FALSE);
        }
      }
#endif
    }
    else if (PI_ERROR_NOT_EXIST == status)
    {
      /* Check for parent-child USB config
       * Go through /tmp/usbg/*.cfg files */
      if (DirExists(USB_PERIPH_DEVICE_INFO_DIRECTORY))
      {
        dbg_msg("%s: USB device folder exists\n", __FUNCTION__);
        /* Guessing there will be a pinpad usb device config */
        dockedHandler(TRUE);
      }
      else
      {
        dbg_notice("%s: Device doesn't support dock or child\n", __FUNCTION__);
      }
    }
    else
    {
      dbg_err("%s: Platform info base station returned error: %d\n",
              __FUNCTION__, status);
    }
  }

  return;
}

bool GetDockingStationInfo(dock_station_t *dock_station_info)
{
  bool isDockSupported = FALSE;
  int ret = -1;

  if (dock_station_info)
  {
    if (isDualSystem() && dockinfo_from_tablet)
    {
      memcpy((void*) dock_station_info, &dockStationData,
             sizeof(dock_station_t));
      isDockSupported = TRUE;
    }
    else
    {
      /* Adding these values explicitly to provide backward compatibility */
#define SYS_PROP_DOCK_STATION_SN                31  
#define SYS_PROP_DOCK_STATION_PN                32  
#define SYS_PROP_DOCK_STATION_MODEL             33  
#define SYS_PROP_DOCK_STATION_OS_VERSION        38  
      ret = sysGetPropertyString((SYSPropertyString) SYS_PROP_DOCK_STATION_SN,
                                 (char*) &dock_station_info->dock_serial_no,
                                 sizeof(dock_station_info->dock_serial_no));

      if (ret == SYS_ERR_OK)
      {
        isDockSupported = TRUE;

        dbg_msg("%s: Dock Station Serial Number: %s\n", __FUNCTION__,
                dock_station_info->dock_serial_no);

        ret = sysGetPropertyString(
            (SYSPropertyString) SYS_PROP_DOCK_STATION_MODEL,
            (char*) &dock_station_info->dock_model_name,
            sizeof(dock_station_info->dock_model_name));

        if (ret == SYS_ERR_OK)
        {
          dbg_msg("%s: Dock Station Model Name: %s\n", __FUNCTION__,
                  dock_station_info->dock_model_name);
        }
        else
        {
          dbg_err("%s: Couldn't get Dock Model Name from ADK SYS, ret: %d\n",
                  __FUNCTION__, ret);
        }

        ret = sysGetPropertyString(
            (SYSPropertyString) SYS_PROP_DOCK_STATION_OS_VERSION,
            (char*) &dock_station_info->dock_os_version,
            sizeof(dock_station_info->dock_os_version));
        if (ret == SYS_ERR_OK)
        {
          dbg_msg("%s: Dock Station OS version: %s\n", __FUNCTION__,
                  dock_station_info->dock_os_version);
        }
        else
        {
          dbg_err("%s: Couldn't get Dock OS version from ADK SYS, ret: %d\n",
                  __FUNCTION__, ret);
        }

        ret = sysGetPropertyString((SYSPropertyString) SYS_PROP_DOCK_STATION_PN,
                                   (char*) &dock_station_info->dock_part_no,
                                   sizeof(dock_station_info->dock_part_no));
        if (ret == SYS_ERR_OK)
        {
          dbg_msg("%s: Dock Station Part Number: %s\n", __FUNCTION__,
                  dock_station_info->dock_part_no);
        }
        else
        {
          dbg_err("%s: Couldn't get Dock Part Number from ADK SYS, ret: %d\n",
                  __FUNCTION__, ret);
        }
      }
      else
      {
        dbg_err("%s: Couldn't get Dock Serial Number from ADK SYS, ret: %d\n",
                __FUNCTION__, ret);
      }
    }
  }

  return isDockSupported;
}

static const std::string vhqAgent_Request_str("EXT_SYS_VHQAGENT_REQ");
static const std::string vhqAgent_Response_str("EXT_SYS_VHQAGENT_RESP");

static void VHQAgentRequestCallback(void *data, const std::string &from,
                                    const std::string &to,
                                    const std::string &notification,
                                    const vfiipc::JSObject &param,
                                    unsigned flags)
{
#if DEBUG_IPC_NTF_SYSTEM
    dbg_msg( "%s: callback %s\n"
        "   from:         %s\n"
        "   to:           %s\n"
        "   notification: %s\n"
        "   param:        %s\n"
        "   flags:        %x\n\n", __FUNCTION__, (char *)data, from.c_str(), to.c_str(), notification.c_str(), param.dump().c_str(), flags);
#else
  UNUSED(data);
  UNUSED(from);
  UNUSED(to);
  UNUSED(flags);
#endif

  /* If we ever get this callback, it means we are getting the dock information from the tablet side
   of a Carbon device.*/
  dockinfo_from_tablet = TRUE;

  if (notification == vhqAgent_Request_str)
  {
    NotifyResult agent_resp_notify_result;
    vfiipc::JSObject js_resp_obj;

    dbg_msg("%s: received '%s' CALLBACK\n", __FUNCTION__,
            vhqAgent_Request_str.c_str());

    /* Clear the response object */
    js_resp_obj.clear();

    if (stricmp(param("cmd").getString().c_str(), "do_heartbeat") == 0)
    {
      event_id_t hb_event_id = EVENT_ID_INVALID;

      log_dbg("%s: do_heartbeat REQUEST from ANDROID - Scheduling HB\n",
              __FUNCTION__);
      hb_event_id = ScheduleSingleHeartbeat(0, 0, 0, NULL);
      if (hb_event_id != EVENT_SET_ID_INVALID)
      {
        /* scheduling the HB was successful */
        js_resp_obj("result") = "OK";
      }
      else
      {
        /* Scheduling the HB Failed */
        js_resp_obj("result") = "Failure";
      }
    }
    else if (stricmp(param("cmd").getString().c_str(), "vhq_info") == 0)
    {
      static char url_root[256] = { 0 };
      static char customer_id[64] = { 0 };

      log_dbg("%s: vhq_info REQUEST from ANDROID\n", __FUNCTION__);

      VHQGetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root));
      VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id,
                            sizeof(customer_id));
      js_resp_obj("url_root") = url_root;
      js_resp_obj("customer_id") = customer_id;
      js_resp_obj("result") = "OK";
    }
    else
    {
      log_err("%s: Unsupported EXT_SYS_VHQAGENT_REQ - %s\n", __FUNCTION__,
              param("cmd").getString().c_str());
      js_resp_obj("result") = "Unsupported Command";
    }

    agent_resp_notify_result = vfiipc::ipcNotify(from, vhqAgent_Response_str,
                                                 js_resp_obj, 0);
    if (agent_resp_notify_result == NOTIFY_OK)
    {
      dbg_msg("%s: sent '%s' RESPONSE\n", __FUNCTION__,
              vhqAgent_Response_str.c_str());
    }
    else
    {
      log_err("%s: Failed to send '%s' RESPONSE - result = %d\n", __FUNCTION__,
              vhqAgent_Response_str.c_str(), agent_resp_notify_result);
    }

  }
}

#define TEST_ANDROID_HB_REQ         0
#define TEST_ANDROID_INFO_REQ       0

void EnableAndroidRequests(void)
{
  if (isDualSystem())
  {
    NotifyResult AgentRequest_register_res;

    ipcSetAppIDwrapper();

    AgentRequest_register_res = ipcRegisterNotificationCB(
        vhqAgent_Request_str, VHQAgentRequestCallback, (void*) NULL, 0);

    if (AgentRequest_register_res != NOTIFY_OK)
    {
      log_err("%s: Failed to register '%s' callback - result = %d\n",
              __FUNCTION__, vhqAgent_Request_str.c_str(),
              AgentRequest_register_res);
    }
    else
    {
      dbg_msg(
          "%s: registered '%s' callback to handle Android side requests successfully\n",
          __FUNCTION__, vhqAgent_Request_str.c_str());
    }

#if TEST_ANDROID_HB_REQ
    {
        vfiipc::JSObject jsobj;
        NotifyResult test_request_res;

        sleep(5);
        dbg_msg( "%s: sending '%s' notification to test agent HB requests\n", __FUNCTION__, vhqAgent_Request_str.c_str());
        jsobj.clear();
        jsobj("cmd") = "do_heartbeat";

        test_request_res = vfiipc::ipcNotify(one_receiver, vhqAgent_Request_str, jsobj, 0);
        if (test_request_res == NOTIFY_OK)
        {
            dbg_msg( "%s: requested '%s'\n", __FUNCTION__, vhqAgent_Request_str.c_str());
        }
        else
        {
            log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, vhqAgent_Request_str.c_str(), test_request_res);
        }
    }
#endif

#if TEST_ANDROID_INFO_REQ
    {
        vfiipc::JSObject jsobj;
        NotifyResult test_request_res;

        sleep(5);
        dbg_msg( "%s: sending '%s' notification to test vhq_info\n", __FUNCTION__, vhqAgent_Request_str.c_str());
        jsobj.clear();
        jsobj("cmd") = "vhq_info";

        test_request_res = vfiipc::ipcNotify(one_receiver, vhqAgent_Request_str, jsobj, 0);
        if (test_request_res == NOTIFY_OK)
        {
            dbg_msg( "%s: requested '%s'\n", __FUNCTION__, vhqAgent_Request_str.c_str());
        }
        else
        {
            log_err( "%s: Failed to request '%s' - result = %d\n", __FUNCTION__, vhqAgent_Request_str.c_str(), test_request_res);
        }
    }
#endif // TEST_ANDROID_INFO_REQ
  }
}

void UpdateCPInstalledApps(void)
{
  macError scanMFT_retval;

  log_dbg("%s: calling sysScanManifests() to update CP activations\n",
          __FUNCTION__);

  scanMFT_retval = sysScanManifests();
  if (scanMFT_retval != MAC_ERR_OK)
  {
    log_err("%s ERROR: sysScanManifests() returned failure %d\n", __FUNCTION__,
            scanMFT_retval);
  }

}

#else // _VOS2

void InitMainBatteryStatus(void)
{
    return;
}

extern "C" int GetMainBatteryStatus(batt_info_t *pBatt)
{
    UNUSED(pBatt);
    return -1;
}

bool isMobileDevice()
{
    return FALSE;
}

bool isDocked()
{
    return deviceIsDocked;
}

void UpdateCPInstalledApps(void)
{
    return;
}

bool GetDockingStationInfo(dock_station_t *dock_station_info)
{
  /* Let device check the /tmp/usbg folder */
  return FALSE;
}

#endif // _VOS2

// move call ipcSetAppID to a wrapper to ensure it's called only once.
// calling it a subsequent time is likely harmless unless it's called with a different name
// setting the parameter here to guarantee it's always called like this.


extern "C" void ipcSetAppIDwrapper()
{
  static bool bCalled = false;
  dbg_trace("%s:+\n", __FUNCTION__);
  if (!bCalled)
  {
    dbg_msg("%s: calling ipcSetAppID(%s) \n", __FUNCTION__, VHQ_APP_NAME);
    ipcSetAppID(VHQ_APP_NAME);
    bCalled = true;
  }
  else
  {
    dbg_msg("%s: have previously called set app id\n", __FUNCTION__);
  }
  dbg_trace("%s: -\n", __FUNCTION__);
}

bool GetCPApplications(list_head_t *ApplicationList)
{
  int i;
  vfimac::macError getAppList_ret_val;
  vfiipc::JSObject appListResult;
  vfiipc::JSObject appList;
  vfiipc::JSObject app;
  app_data_t *app_list_obj;

  /* Make sure ApplicationList is not empty */
  if (!ApplicationList)
    return FALSE;

  ipcSetAppIDwrapper();

  getAppList_ret_val = sysGetAppList(appListResult);
  if (getAppList_ret_val != MAC_ERR_OK)
  {
    log_err("%s ERROR: sysGetAppList() returned %d - returning FALSE\n",
            __FUNCTION__, getAppList_ret_val);
    return FALSE;
  }

//DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: appListResult: '%s'\n", __FUNCTION__, appListResult.getString().c_str());

  if ((strcmp(appListResult("result").getString().c_str(), "OK") != 0)
      && (strcmp(appListResult("result").getString().c_str(), "ok") != 0))
  {
    log_dbg("%s: result = %s - returning FALSE\n", __FUNCTION__,
            appListResult("result").getString().c_str());
    return FALSE;
  }

  appList = appListResult("appList");

//DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: appList: '%s'\n", __FUNCTION__, appList.getString().c_str());

  i = 0;
  app = appList[i];
  while (app.isObject())
  {
    dbg_msg("%s: app[%d] (Active = %s): '%s'\n", __FUNCTION__, i,
            app("Active").getString().c_str(), app.getString().c_str());

    dbg_msg(
        "%s: Found CP AppName '%s' @ app[%d] - Overwriting AppName with AppId '%s'\n",
        __FUNCTION__, app("AppName").getString().c_str(), i,
        app("AppId").getString().c_str());

    app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
    if (app_list_obj)
    {
      snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s",
               app("AppId").getString().c_str());
      snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
               app("AppVersion").getString().c_str());

      if (strcmp(app("Active").getString().c_str(), "true") == 0)
        app_list_obj->activation_status = APP_ACTIVATION_STATUS_ACTIVE;
      else
        app_list_obj->activation_status = APP_ACTIVATION_STATUS_INACTIVE;

      app_list_obj->type = APP_TYPE_CP_APPLICATION;

      list_add_tail(&app_list_obj->list, ApplicationList);
    }

    /* Get the next app */
    i++;
    app = appList[i];
  }

  return TRUE;
}

bool IScURLversionCompatible(const CURL *curl,
                             const unsigned int min_version_num)
{
  UNUSED(curl);
  curl_version_info_data *d = curl_version_info(CURLVERSION_NOW);

  if (!d)
  {
    log_err("cURL version is NULL!!!\r\n");
    return FALSE;
  }

  dbg_msg("cURL version is %s (0x%08x), SSL version is %s\n",
          d->version?d->version:NULL, d->version_num,
          d->ssl_version?d->ssl_version:NULL);

  if (d->version_num < min_version_num)
  {
    log_err("ERROR: Minimal required cURL version is 0x%08x\n",
            min_version_num);
    return FALSE;
  }

  return TRUE;
}


int VHQGetVRKPubKeyFile(char *full_file_name, int full_file_name_len)
{
  int result = CHECK_VRKPUBKEY_FILE_ERROR;

  if (full_file_name == NULL)
  {
    log_err("%s: input parameters error p:0x%08X\n", __FUNCTION__,
            full_file_name);
    return result;
  }

  if (isVRKInstalled() == CHECK_VRKPUBKEY_FILE_FOUND)
  {
#ifdef _VOS2
    int isEcc = 0;

    if (sysGetPropertyInt(SYS_PROP_ECC_VRK_SUPPORT, &isEcc) == 0)
    {
      struct stat statbuf;

      if (isEcc == 0)
      {
        strcpy(full_file_name, "/mnt/flash/system/rkl_keys/rkl_cert.crt");
      }
      else
      {
//        Enable after Server supports the tgz
#if 0
        char* tmpDir = "/tmp/vrk";
        strncpy(full_file_name, "/tmp/vrk.tgz", full_file_name_len);

        removeDir(tmpDir);
        CreateDir(tmpDir, 0777);
        CopyFile("/mnt/flash/system/rkl_keys/rkl_cert.crt", "/tmp/vrk/rsa_vrk.crt");
        CopyFile("/mnt/flash/system/ekeys/usr0/key0.crt", "/tmp/vrk/ecc_vrk.crt");

        TarFiles(tmpDir, full_file_name);

        result = CHECK_VRKPUBKEY_COMBINED_TGZ;
#else
        strcpy(full_file_name, "/mnt/flash/system/ekeys/usr0/key0.crt");
#endif

      }

#else
    {
      struct stat statbuf;
      strncpy(full_file_name, "/mnt/flash/system/rkl_keys/rkl_cert.crt",
              full_file_name_len);
#endif
      if (!stat(full_file_name, &statbuf))
      {
        dbg_msg("%s: Both VRK founded and %s is exist\n", __FUNCTION__,
                full_file_name);
        result = CHECK_VRKPUBKEY_FILE_FOUND;
      }
      else
      {
        dbg_msg("%s: Both VRK founded but %s is not exist\n", __FUNCTION__,
                full_file_name);
        result = CHECK_VRKPUBKEY_FILE_ERROR;
      }
    }
  }

  return result;
}

bool isVRKv2()
{
  bool ret_val = false;
  int vrkv2Supported;

  int ret = sysGetPropertyInt(vfisysinfo::SYS_PROP_VRK2_SUPPORT,
                                 &vrkv2Supported);
  if (ret == SYS_ERR_OK)
  {
    ret_val = (vrkv2Supported == 1)? true : false;
  }
  else
  {
    log_err("%s: Couldn't get VRK version\n", __FUNCTION__, ret);
  }

  return ret_val;
}

vhq_result_t GetKeyData()
{
  std::string keys_json;
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_KEYS_NOT_SUPPORTED;

  dbg_msg("%s: Checking if device has been attacked\n", __FUNCTION__);
  if (isAttacked())
  {
    log_alert("%s WARNING: Device has been attacked!!!!!!\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_KEYS_TAMPERED;
  }

  int ret = sysGetPropertyString(vfisysinfo::SYS_PROP_ALL_LOADED_KEYS_V2,
                                 keys_json);
  if (ret != SYS_ERR_OK)
  {
    dbg_msg("%s: Getting v1 keys\n", __FUNCTION__);
    ret = sysGetPropertyString(vfisysinfo::SYS_PROP_ALL_LOADED_KEYS,
                                     keys_json);
  }

  if (ret == SYS_ERR_OK)
  {
    removeFile (KEY_DATA_CAP_OUT_FILE);
    std::ofstream keyFile(KEY_DATA_CAP_OUT_FILE);

    if (keyFile.is_open())
    {
      char cmd[2048];
      keyFile << keys_json;
      keyFile.close();

      sprintf(cmd, "tar -zcf %s -C %s %s", KEY_DATA_TGZ_OUT_FILE,
              VHQ_TMP, KEY_DATA_CAP_OUT_FILE_NAME);
      system(cmd);
      ret_val = VHQ_SUCCESS;
    }
  }
  else
  {
    log_err("%s: Couldn't get key json file: %d\n", __FUNCTION__, ret);
  }

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
