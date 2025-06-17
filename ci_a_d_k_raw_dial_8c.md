---
title: tmsagt/src/VHQIo/ciADKRawDial.c

---

# tmsagt/src/VHQIo/ciADKRawDial.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[CheckAndInitLog](ci_a_d_k_raw_dial_8c.md#function-checkandinitlog)**(void ) |
| int | **[InitVXComms](ci_a_d_k_raw_dial_8c.md#function-initvxcomms)**(bool NWIF_start) |
| void | **[StartNetwork](ci_a_d_k_raw_dial_8c.md#function-startnetwork)**(void ) |
| void | **[StartCommEngine](ci_a_d_k_raw_dial_8c.md#function-startcommengine)**(void ) |
| int | **[internal_GetMACAddress](ci_a_d_k_raw_dial_8c.md#function-internal-getmacaddress)**(char * pszMACAddress, int iMACAddressBufLen) |
| int | **[internal_GetIPAddress](ci_a_d_k_raw_dial_8c.md#function-internal-getipaddress)**(char * pszIPAddress, int iIPAddressBufLen) |
| bool | **[GetRestartStatus](ci_a_d_k_raw_dial_8c.md#function-getrestartstatus)**() |
| const char * | **[get_NetworkEvent_description_frormat](ci_a_d_k_raw_dial_8c.md#function-get-networkevent-description-frormat)**(enum [com_NetworkEvent](libcom_8h.md#enum-com-networkevent) nwEvent) |
| const char * | **[GetCommErrWrapper](ci_a_d_k_raw_dial_8c.md#function-getcommerrwrapper)**(enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno_in) |
| void | **[RawDial_statuscallback](ci_a_d_k_raw_dial_8c.md#function-rawdial-statuscallback)**(enum [com_ConnectionEvent](libcom_8h.md#enum-com-connectionevent) event, enum [com_ConnectionType](libcom_8h.md#enum-com-connectiontype) type, const void * data, void * priv, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno) |
| bool | **[CheckADKConnectionFileReadPermissions](ci_a_d_k_raw_dial_8c.md#function-checkadkconnectionfilereadpermissions)**(char * pszProfile) |
| int | **[RawDial_init](ci_a_d_k_raw_dial_8c.md#function-rawdial-init)**(char * pszSettings1, char * pszSettings2, char * pszSettings3, char * pszSettings4) |
| int | **[RawDial_deinit](ci_a_d_k_raw_dial_8c.md#function-rawdial-deinit)**(void ) |
| int | **[RawDial_open](ci_a_d_k_raw_dial_8c.md#function-rawdial-open)**(CommOpenData * pData) |
| int | **[RawDial_close](ci_a_d_k_raw_dial_8c.md#function-rawdial-close)**(CommOpenData * pData) |
| int | **[RawDial_status](ci_a_d_k_raw_dial_8c.md#function-rawdial-status)**(void * pData, bool * bUp, char * pszIpAddress, char * pszMacAddr) |
| int | **[RawDial_NetConn](ci_a_d_k_raw_dial_8c.md#function-rawdial-netconn)**(void ) |
| int | **[RawDial_NetDisconn](ci_a_d_k_raw_dial_8c.md#function-rawdial-netdisconn)**(bool bForceDisconnect) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[g_iRefCount](ci_a_d_k_raw_dial_8c.md#variable-g-irefcount)**  |
| int | **[com_fd](ci_a_d_k_raw_dial_8c.md#variable-com-fd)**  |
| bool | **[g_bNetAttached](ci_a_d_k_raw_dial_8c.md#variable-g-bnetattached)**  |
| struct com_ConnectHandle * | **[g_hADK](ci_a_d_k_raw_dial_8c.md#variable-g-hadk)**  |
| bool | **[bInited](ci_a_d_k_raw_dial_8c.md#variable-binited)**  |
| char[] | **[ConnectionProfile1](ci_a_d_k_raw_dial_8c.md#variable-connectionprofile1)**  |
| char[] | **[ConnectionProfile2](ci_a_d_k_raw_dial_8c.md#variable-connectionprofile2)**  |
| char[256] | **[g_szCurrentConnectionProfile](ci_a_d_k_raw_dial_8c.md#variable-g-szcurrentconnectionprofile)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ARRAY_SIZEOF](ci_a_d_k_raw_dial_8c.md#define-array-sizeof)**(x)  |
|  | **[INFOSVC_TAG](ci_a_d_k_raw_dial_8c.md#define-infosvc-tag)**  |

## Detailed Description


Main [Event](struct_event.md) Scheduler operations 


## Functions Documentation

### function CheckAndInitLog

```cpp
void CheckAndInitLog(
    void 
)
```


### function InitVXComms

```cpp
int InitVXComms(
    bool NWIF_start
)
```


### function StartNetwork

```cpp
void StartNetwork(
    void 
)
```


### function StartCommEngine

```cpp
void StartCommEngine(
    void 
)
```


### function internal_GetMACAddress

```cpp
int internal_GetMACAddress(
    char * pszMACAddress,
    int iMACAddressBufLen
)
```


**Parameters**: 

  * **pszMACAddress** = pointer to MAC address 
  * **iMACAddressBufLen** = MAC address buffer length


**Return**: int 0,if success 

Function gather the MAC address information. 


### function internal_GetIPAddress

```cpp
int internal_GetIPAddress(
    char * pszIPAddress,
    int iIPAddressBufLen
)
```


**Parameters**: 

  * **pszIPAddress** = pointer to IP address 
  * **iIPAddressBufLen** = IP address buffer length


**Return**: int 0, if success 

Function gather the IP address information. 


### function GetRestartStatus

```cpp
bool GetRestartStatus()
```


### function get_NetworkEvent_description_frormat

```cpp
const char * get_NetworkEvent_description_frormat(
    enum com_NetworkEvent nwEvent
)
```


### function GetCommErrWrapper

```cpp
const char * GetCommErrWrapper(
    enum com_ErrorCodes com_errno_in
)
```


**Parameters**: 

  * **com_errno_in** = error codes


**Return**: void 

This function returns a zero-terminated string with a description matching the input com_errno by using ADK COM functions and displays the error if any. 


### function RawDial_statuscallback

```cpp
void RawDial_statuscallback(
    enum com_ConnectionEvent event,
    enum com_ConnectionType type,
    const void * data,
    void * priv,
    enum com_ErrorCodes com_errno
)
```


### function CheckADKConnectionFileReadPermissions

```cpp
bool CheckADKConnectionFileReadPermissions(
    char * pszProfile
)
```


### function RawDial_init

```cpp
int RawDial_init(
    char * pszSettings1,
    char * pszSettings2,
    char * pszSettings3,
    char * pszSettings4
)
```


### function RawDial_deinit

```cpp
int RawDial_deinit(
    void 
)
```


### function RawDial_open

```cpp
int RawDial_open(
    CommOpenData * pData
)
```


### function RawDial_close

```cpp
int RawDial_close(
    CommOpenData * pData
)
```


### function RawDial_status

```cpp
int RawDial_status(
    void * pData,
    bool * bUp,
    char * pszIpAddress,
    char * pszMacAddr
)
```


### function RawDial_NetConn

```cpp
int RawDial_NetConn(
    void 
)
```


### function RawDial_NetDisconn

```cpp
int RawDial_NetDisconn(
    bool bForceDisconnect
)
```



## Attributes Documentation

### variable g_iRefCount

```cpp
static int g_iRefCount = 0;
```


### variable com_fd

```cpp
static int com_fd = -1;
```


### variable g_bNetAttached

```cpp
static bool g_bNetAttached = FALSE;
```


### variable g_hADK

```cpp
struct com_ConnectHandle * g_hADK = NULL;
```


### variable bInited

```cpp
static bool bInited = FALSE;
```


### variable ConnectionProfile1

```cpp
static char[] ConnectionProfile1 = VHQ_PRIVATE_CONN_PROFILE;
```


### variable ConnectionProfile2

```cpp
static char[] ConnectionProfile2 = VHQ_ADK_PROFILE_FLASH_CONFIG;
```


### variable g_szCurrentConnectionProfile

```cpp
static char[256] g_szCurrentConnectionProfile = { '\0' };
```



## Macros Documentation

### define ARRAY_SIZEOF

```cpp
#define ARRAY_SIZEOF(
    x
)
(sizeof(x)/sizeof(x[0]))
```


### define INFOSVC_TAG

```cpp
#define INFOSVC_TAG "infosvc@"
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <fcntl.h>
#include <libgen.h>
#include <memory.h>
#include <pthread.h>
#include <signal.h>
#include <syslog.h>
#include <sys/time.h>
#include <sys/wait.h>
#include <ucontext.h>
#include <unistd.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <svc.h>

#include "EventScheduler.h"
#include "VHQTypes.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "com/libcom.h"
#include "VHQConfig.h"

#include "log/logapi_common.h"

#define ARRAY_SIZEOF(x) (sizeof(x)/sizeof(x[0]))

#include "ComIntf.h"
#include "ciADKRawDial.h"
#include "VHQConfig.h"
#include "VHQIo.h"

void CheckAndInitLog(void);
int InitVXComms(bool NWIF_start);
void StartNetwork(void);
void StartCommEngine(void);
int internal_GetMACAddress(char *pszMACAddress, int iMACAddressBufLen);
int internal_GetIPAddress(char *pszIPAddress, int iIPAddressBufLen);
bool GetRestartStatus();
const char* get_NetworkEvent_description_frormat(enum com_NetworkEvent nwEvent);
const char* GetCommErrWrapper(enum com_ErrorCodes com_errno_in);
static int g_iRefCount = 0;
static int com_fd = -1;

/* Binary flag for attached network */
static bool g_bNetAttached = FALSE;

struct com_ConnectHandle *g_hADK = NULL;

void RawDial_statuscallback(enum com_ConnectionEvent event,
                            enum com_ConnectionType type, const void *data,
                            void *priv, enum com_ErrorCodes com_errno)
{
  UNUSED(data);
  UNUSED(priv);
  switch (event)
  {
    case COM_EVENT_CONNECTION_FAILED:
      DebugMsg(
          VHQ_LOGGING_LEVEL_DEBUG,
          "%s: ### Connection event COM_EVENT_CONNECTION_FAILED received: ERRNO[%d]-%s\r\n",
          __FUNCTION__, com_errno, GetCommErrWrapper(com_errno));
      break;
    case COM_EVENT_CONNECTION_ESTABLISHED:
      DebugMsg(
          VHQ_LOGGING_LEVEL_DEBUG,
          "%s: ### Connection event COM_EVENT_CONNECTION_ESTABLISHED received: ERRNO[%d]-%s\r\n",
          __FUNCTION__, com_errno, GetCommErrWrapper(com_errno));
      switch (type)
      {
        case COM_CONNECTION_TYPE_UDP:
        case COM_CONNECTION_TYPE_SSL:
        case COM_CONNECTION_TYPE_TCP:
          DebugMsg(
              VHQ_LOGGING_LEVEL_ERROR,
              "%s: ### unexpected Connection event %d received: ERRNO[%d]-%s\r\n",
              __FUNCTION__, event, com_errno, GetCommErrWrapper(com_errno));
          break;
        default:
          g_bNetAttached = TRUE;
          DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
                   "%s: ### Connection event %d received: ERRNO[%d]-%s\r\n",
                   __FUNCTION__, event, com_errno,
                   GetCommErrWrapper(com_errno));
          break;
      }
    default:
      break;
  }
}

static bool bInited = FALSE;
static char ConnectionProfile1[] = VHQ_PRIVATE_CONN_PROFILE;
static char ConnectionProfile2[] = VHQ_ADK_PROFILE_FLASH_CONFIG;
static char g_szCurrentConnectionProfile[256] = { '\0' };

bool CheckADKConnectionFileReadPermissions(char *pszProfile)
{
  bool bRetVal = FALSE;
  struct stat conn_stat;
  char szAltConnectionPath[256] = { '\0' };

  VHQGetParameterString(PARAM_CONNECT_FILE_PATH, szAltConnectionPath,
                        sizeof(szAltConnectionPath));
  if (strlen(szAltConnectionPath))
  {
#define INFOSVC_TAG "infosvc@"
    strcpy(g_szCurrentConnectionProfile, szAltConnectionPath);
    if (0
        == strncmp(g_szCurrentConnectionProfile, INFOSVC_TAG,
                   strlen(INFOSVC_TAG)))
    {
      DebugMsg(
          VHQ_LOGGING_LEVEL_DEBUG,
          "%s: Connection Profile is hosted in infosvc, setting \"Skip connect for ADK\"\r\n",
          __FUNCTION__, g_szCurrentConnectionProfile);
      return TRUE;
    }
    else
    {
      if (FileExists(g_szCurrentConnectionProfile))
      {
        return TRUE;
      }
      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
               "%s: Connection Profile override \"%s\" doesn't exist\r\n",
               __FUNCTION__, g_szCurrentConnectionProfile);
    }
  }

  if (stat(pszProfile, &conn_stat) != 0)
  {
    DebugMsg(
        VHQ_LOGGING_LEVEL_ERROR,
        "*****************************************************************************\n");
    DebugMsg(
        VHQ_LOGGING_LEVEL_ERROR,
        "*****************************************************************************\n");
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: Connection File %s doesn't exist\n",
             __FUNCTION__, pszProfile);
    DebugMsg(
        VHQ_LOGGING_LEVEL_ERROR,
        "*****************************************************************************\n");
    DebugMsg(
        VHQ_LOGGING_LEVEL_ERROR,
        "*****************************************************************************\n");
    return FALSE;
  }
  else
  {
    if ((conn_stat.st_mode & S_IRGRP) != (S_IRGRP))
    {
      DebugMsg(
          VHQ_LOGGING_LEVEL_ERROR,
          "*****************************************************************************\n");
      DebugMsg(
          VHQ_LOGGING_LEVEL_ERROR,
          "*****************************************************************************\n");
      DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
               "%s: Connection File %s Doesn't have read access\n",
               __FUNCTION__, pszProfile);
      DebugMsg(
          VHQ_LOGGING_LEVEL_ERROR,
          "*****************************************************************************\n");
      DebugMsg(
          VHQ_LOGGING_LEVEL_ERROR,
          "*****************************************************************************\n");
    }
    else
    {
      DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
               "%s: Connection File passes checks %s access: %x\n",
               __FUNCTION__, pszProfile, conn_stat.st_mode);
      bRetVal = TRUE;
      snprintf(g_szCurrentConnectionProfile,
               sizeof(g_szCurrentConnectionProfile), "%s", pszProfile);
    }
  }
  return bRetVal;
}

int RawDial_init(char *pszSettings1, char *pszSettings2, char *pszSettings3,
                 char *pszSettings4)
{
  dbg_msg("%s: calling com_init\r\n", __FUNCTION__);
  UNUSED(pszSettings1);
  UNUSED(pszSettings2);
  UNUSED(pszSettings3);
  UNUSED(pszSettings4);

  memset(g_szCurrentConnectionProfile, 0, sizeof(g_szCurrentConnectionProfile));

  if (!CheckADKConnectionFileReadPermissions(ConnectionProfile1))
  {
    if (!CheckADKConnectionFileReadPermissions(ConnectionProfile2))
      return -1;
  }

  // trying to move the init code here
  if (!bInited)
  {
    enum com_ErrorCodes e = 0;
    if (!com_Init(&e))
    {
      bInited = TRUE;
      //ADKTMS-884 enable ADK COM logging+

      //            if (ret>0 && comdbg[0]=='1')
#ifndef WIN32
      if (GetLoggingLevel() >= VHQ_LOGGING_LEVEL_DEBUG)
#endif
      {
        dbg_warn("%s: Enabling VHQ COM DEBUG.\n", __FUNCTION__);
        com_SetDevicePropertyInt(COM_PROP_VERBOSITY, 5, &e);
        LOGAPI_INIT("VHQ");  //your application name
        LOGAPI_SETLEVEL(LOGAPI_TRACE);  //or LOGAPI_TRACE
        LOGAPI_SETOUTPUT(LOGAPI_ALL);
      }
      SetComType(COM_TYPE_RAW_DIAL);

      dbg_msg("%s: Libcom Version: %s\r\n", __FUNCTION__, com_GetVersion());
      atexit((void (*)(void)) RawDial_deinit);
    }
    else
    {
      log_err("%s: Error %d\r\n", __FUNCTION__, (int )e);
      return -1;
    }
  }
  // end init code

  return 0;
}

int RawDial_deinit(void)
{
  enum com_ErrorCodes e = 0;
  if (bInited)
  {
    com_Destroy(&e);
  }
  bInited = FALSE;

  /* Do not call SetComType(COM_NO_INTERFACE) here. GetComType() should return latest success communication type. */
  return 0;
}

int RawDial_open(CommOpenData *pData)
{
  enum com_ErrorCodes e = 0;
  int com_fd = -1;
  UNUSED(pData);

  dbg_trace("%s: +\r\n", __FUNCTION__);

  if (!CheckADKConnectionFileReadPermissions(ConnectionProfile1))
  {
    if (!CheckADKConnectionFileReadPermissions(ConnectionProfile2))
      return -1;
  }

  if (!bInited)
    RawDial_init(NULL, NULL, NULL, NULL);

  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
           "%s: Calling com_Connect, profile is %s\r\n", __FUNCTION__,
           g_szCurrentConnectionProfile);
  if (0 == g_iRefCount)
  {
    g_hADK = com_Connect(g_szCurrentConnectionProfile, RawDial_statuscallback,
                         NULL, 3 * 60000, &e);
  }
  g_iRefCount++;
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
           "%s: com_Connect returned %08x, error: %d \"%s\" refcount is %d\r\n",
           __FUNCTION__, g_hADK, e, GetCommErrWrapper(e), g_iRefCount);
  g_sIoProperties.eMode = VHQ_MODE_DIRECT;

  if (g_hADK != NULL)
  {
    /* call this function to get a com_fd */
    com_fd = com_ConnectGetFD(g_hADK, &e);
  }
  else
  {
    g_iRefCount--;
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: com_Connect returned %08x, error: %d\r\n", __FUNCTION__,
             g_hADK, e);
    com_fd = -1;
  }
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\r\n", __FUNCTION__);
  return com_fd;
}

int RawDial_close(CommOpenData *pData)
{
  int iRetCode = 0;
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\r\n", __FUNCTION__);
  UNUSED(pData);

  if (g_hADK != NULL)
  {
    enum com_ErrorCodes com_errno = 0;
    if (g_iRefCount > 0)
      g_iRefCount--;
    if (0 == g_iRefCount)
    {
      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: com_ConnectClose for %08x\r\n",
               __FUNCTION__, g_hADK);
      if (-1 == com_ConnectClose(g_hADK, &com_errno))
      {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
                 "%s: com_ConnectClose returned %08x, error: %d \"%s\"\r\n",
                 __FUNCTION__, g_hADK, com_errno, GetCommErrWrapper(com_errno));
      }
      g_hADK = NULL;
      com_fd = -1;
    }
  }

  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\r\n", __FUNCTION__);
  return iRetCode;

}

// only returns connected or disconnected status for raw dial
int RawDial_status(void *pData, bool *bUp, char *pszIpAddress, char *pszMacAddr)
{
  int iRetVal = 0;
  UNUSED(pData);

  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\r\n", __FUNCTION__);

  if (!g_bNetAttached)
  {
    iRetVal = -1;
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
             "%s: Network is not attached - exit with code %d. +\r\n",
             __FUNCTION__, iRetVal);
    if (bUp)
      *bUp = FALSE;
    return iRetVal;
  }

  /* Process for a IP address */
  if (pszIpAddress)
    pszIpAddress[0] = '\0';

  /* Process for a MAC address */
  if (pszMacAddr)
    pszMacAddr[0] = '\0';

  /* Mark state as active */
  if (bUp)
    *bUp = TRUE;

  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
           "pszIpAddress = %s, pszMacAddr =  %s, bUp = %s, Return = %d\r\n",
           pszIpAddress ? pszIpAddress : "NULL",
           pszMacAddr ? pszMacAddr : "NULL",
           bUp ? (*bUp ? "TRUE" : "FALSE") : "NULL", iRetVal);

  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\r\n", __FUNCTION__);
  return iRetVal;
}

// keeping this around, but not really necessary for raw dial
// real stuff happens in open
int RawDial_NetConn(void)
{
  if (!bInited)
    RawDial_init(NULL, NULL, NULL, NULL);
  return 0;
}

// keeping this around, but not really necessary for raw dial
// real stuff happens in close
int RawDial_NetDisconn(bool bForceDisconnect)
{
  int iRet = 0;
  UNUSED(bForceDisconnect);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: + refcount is %d\r\n", __FUNCTION__,
           g_iRefCount);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: - refcount is %d\r\n", __FUNCTION__,
           g_iRefCount);
  return iRet;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
