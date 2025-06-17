---
title: tmsagt/src/VHQIo/ComIntf.c

---

# tmsagt/src/VHQIo/ComIntf.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[CheckAndInitLog](_com_intf_8c.md#function-checkandinitlog)**() |
| void | **[StartNetwork](_com_intf_8c.md#function-startnetwork)**(void ) |
| void | **[StartCommEngine](_com_intf_8c.md#function-startcommengine)**(void ) |
| int | **[CommInit](_com_intf_8c.md#function-comminit)**(char * pszOperatingMode, char * pszSettings1, char * pszSettings2, char * pszSettings3, char * pszSettings4) |
| int | **[CommDeinit](_com_intf_8c.md#function-commdeinit)**(void ) |
| int | **[CommOpen](_com_intf_8c.md#function-commopen)**(CommOpenData * pData) |
| int | **[CommClose](_com_intf_8c.md#function-commclose)**(CommOpenData * pData) |
| int | **[CommStatus](_com_intf_8c.md#function-commstatus)**(void * pData, bool * bUp, char * pszIpAddress, char * pszMacAddr) |
| bool | **[IsOnDemandProtocol](_com_intf_8c.md#function-isondemandprotocol)**() |
| int | **[CommNetConnect](_com_intf_8c.md#function-commnetconnect)**(callback_t eCallback, event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| int | **[CommNetDisconnect](_com_intf_8c.md#function-commnetdisconnect)**(bool bForceDisconnect) |
| const char * | **[CommGetErrString](_com_intf_8c.md#function-commgeterrstring)**(int err) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| ComIntf * | **[pCurrComm](_com_intf_8c.md#variable-pcurrcomm)**  |
| ComIntf[] | **[abComs](_com_intf_8c.md#variable-abcoms)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ARRAY_SIZEOF](_com_intf_8c.md#define-array-sizeof)**(x)  |

## Detailed Description


Main communication operations. Calls functions depending on operating mode. 


## Functions Documentation

### function CheckAndInitLog

```cpp
void CheckAndInitLog()
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


### function CommInit

```cpp
int CommInit(
    char * pszOperatingMode,
    char * pszSettings1,
    char * pszSettings2,
    char * pszSettings3,
    char * pszSettings4
)
```


**Parameters**: 

  * **pszOperatingMode** = operating mode 
  * **pszSettings1** = arg1 for init function 
  * **pszSettings2** = arg2 for init function 
  * **pszSettings3** = arg3 for init function 
  * **pszSettings4** = arg4 for init function


**Return**: int 1,if success 

This function calls the CommInit function pointed to by ComIntf abComs depending on the operation mode existing. 


### function CommDeinit

```cpp
int CommDeinit(
    void 
)
```


**Return**: int, 1 if success 

This function calls the CommDeinit function pointed to by ComIntf abComs. 


### function CommOpen

```cpp
int CommOpen(
    CommOpenData * pData
)
```


**Parameters**: 

  * **pData** = pointer to curl details.


**Return**: int 0, if success 

This function calls the CommOpen function pointed to by ComIntf abComs to open a connection. 


### function CommClose

```cpp
int CommClose(
    CommOpenData * pData
)
```


**Parameters**: 

  * **pData** = pointer to curl details.


**Return**: int 1, if success 

This function calls the CommClose function pointed to by ComIntf abComs to close a connection. 


### function CommStatus

```cpp
int CommStatus(
    void * pData,
    bool * bUp,
    char * pszIpAddress,
    char * pszMacAddr
)
```


**Parameters**: 

  * **pData** = pointer to curl details. 
  * **bUp** = to store status, TRUE if active/IP address is present 
  * **pszIpAddress** = to store IP address 
  * **pszMacAddr** = to store Mac Address


**Return**: int -1, if invalid status; 0, if status found 

This function calls the CommStatus function pointed to by ComIntf abComs to get the status of a connection. 


### function IsOnDemandProtocol

```cpp
bool IsOnDemandProtocol()
```


### function CommNetConnect

```cpp
int CommNetConnect(
    callback_t eCallback,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **event_set_id** = event set id 
  * **event_id** = event id 
  * **app_approval_required** = TRUE, if application approval requires for communicating with server.


**Return**: int 0, if connection failed. 

This function establishes the connection. 


### function CommNetDisconnect

```cpp
int CommNetDisconnect(
    bool bForceDisconnect
)
```


**Parameters**: 

  * **bForceDisconnect** = TRUE, if force disconnect


**Return**: int 0, if connection disconnected. 

This function disconnects an active connection. 


### function CommGetErrString

```cpp
const char * CommGetErrString(
    int err
)
```



## Attributes Documentation

### variable pCurrComm

```cpp
static ComIntf * pCurrComm = NULL;
```


### variable abComs

```cpp
ComIntf[] abComs = { { "Direct", FALSE, Direct_init, Direct_deinit, Direct_open,
    Direct_close, Direct_status, Direct_NetConn, Direct_NetDisconn,
    Direct_ErrString },





    };
```



## Macros Documentation

### define ARRAY_SIZEOF

```cpp
#define ARRAY_SIZEOF(
    x
)
(sizeof(x)/sizeof(x[0]))
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

#include "VHQTypes.h"
#include "VHQDebug.h"
#include "EventScheduler.h"

#if defined(Mx2)
#include "com/libcom.h"
#endif

#define ARRAY_SIZEOF(x) (sizeof(x)/sizeof(x[0]))

#include "ComIntf.h"
#include "VHQConfig.h"
#include "VHQIo.h"

#include "ciDirect.h"
#if defined(Mx2)
#include "ciADK.h"
#endif

#ifdef _VOS2
#include "ciADKRawDial.h"
#endif
// module globals
static ComIntf *pCurrComm = NULL;

void CheckAndInitLog();
void StartNetwork(void);
void StartCommEngine(void);

ComIntf abComs[] = { { "Direct", FALSE, Direct_init, Direct_deinit, Direct_open,
    Direct_close, Direct_status, Direct_NetConn, Direct_NetDisconn,
    Direct_ErrString },
#if defined(Mx2)
    { "ADK", TRUE, DirectADK_init, DirectADK_deinit, DirectADK_open,
        DirectADK_close, DirectADK_status, DirectADK_NetConn,
        DirectADK_NetDisconn, DirectADK_ErrString },
#endif
    };

#if EVENT_SCHED_THREAD_MODE
pthread_mutex_t com_interface_mutex = PTHREAD_MUTEX_INITIALIZER;
#endif

int CommInit(char *pszOperatingMode, char *pszSettings1, char *pszSettings2,
             char *pszSettings3, char *pszSettings4)
{
  uint32 i;
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  for (i = 0; i < ARRAY_SIZEOF(abComs); i++)
  {
    if (0 == stricmp(pszOperatingMode, abComs[i].pszOperatingMode))
    {
      pCurrComm = abComs + i;
      break;
    }
  }

  if (pCurrComm)
  {
    dbg_msg("Comintf: %s: found %s\r\n", __FUNCTION__, pszOperatingMode);
    ret = (*pCurrComm->ComIntf_Init)(pszSettings1, pszSettings2, pszSettings3,
                                     pszSettings4);
  }
  else
    dbg_err("Comintf: not found: %s:\r\n", pszOperatingMode);

#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}

int CommDeinit(void)
{
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm)
    ret = (*pCurrComm->ComIntf_Deinit)();
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}

int CommOpen(CommOpenData *pData)
{
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm)
    ret = (*pCurrComm->ComIntf_Open)(pData);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif

  return ret;
}

int CommClose(CommOpenData *pData)
{
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm)
    ret = (*pCurrComm->ComIntf_Close)(pData);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}

int CommStatus(void *pData, bool *bUp, char *pszIpAddress, char *pszMacAddr)
{
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm && pCurrComm->ComIntf_Status != NULL)
    ret = (*pCurrComm->ComIntf_Status)(pData, bUp, pszIpAddress, pszMacAddr);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif

  if (ret)
  {
    EventNotification(TMS_EVENT_NOTIFY_NETWORK_ERROR, "", 0, VHQ_SUCCESS,
    EVENT_SET_ID_INVALID,
                      EVENT_ID_INVALID, TRUE);
  }

  return ret;
}

bool IsOnDemandProtocol()
{
  bool ret = FALSE;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm)
  {
    ret = pCurrComm->bOnDemand;
  }
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}

int CommNetConnect(callback_t eCallback, event_set_id_t event_set_id,
                   event_id_t event_id, bool app_approval_required)
{
  int ret = FALSE;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  if (pCurrComm && NULL != pCurrComm->ComIntf_NetConn)
  {
    vhq_result_t notify_result = VHQ_SUCCESS;

    notify_result = NotifyApps(TMS_EVENT_NOTIFY_CONTACT_SERVER_START, NULL, 0,
                               VHQ_SUCCESS, event_set_id, event_id,
                               app_approval_required);

    if (notify_result == VHQ_SUCCESS)
    {
      SetApprovalFlag(event_set_id, event_id, CONTACT_SERVER_PRE_APPROVED);
      ret = (0 == (*pCurrComm->ComIntf_NetConn)());
      if (!ret)
      {
        dbg_err("Comintf: %s: ComIntf_NetConn returned fail!\n", __FUNCTION__);
        if (eCallback == cbHeartbeat)
        {
          writeHbResult("Network Error");
        }
        NotifyApps(TMS_EVENT_NOTIFY_CONTACT_SERVER_END, "No network", 0,
                   VHQ_ERROR_COMM_CONNECT_FAILURE, event_set_id, event_id,
                   TRUE);
      }
    }
    else
    {
      dbg_msg("Comintf: %s: returned no!\n", __FUNCTION__);
      if (eCallback == cbHeartbeat)
      {
        writeHbResult("App Approval Error");
      }
    }
  }
  else
    dbg_msg("Comintf: %s: current comm= %x, pCurrComm->ComIntf_NetConn= %x!\n",
            __FUNCTION__, pCurrComm,
            (pCurrComm==NULL )? 0: pCurrComm->ComIntf_NetConn);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}


int CommNetDisconnect(bool bForceDisconnect)
{
  int ret = 0;
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  dbg_msg("Comintf: %s: + \n", __FUNCTION__);

  if (NotifyApps(TMS_EVENT_NOTIFY_CONTACT_SERVER_END, NULL, 0, VHQ_SUCCESS,
  EVENT_SET_ID_INVALID,
                 EVENT_ID_INVALID, TRUE) != VHQ_SUCCESS)
  {
    log_err("Comintf: %s: TMS_EVENT_NOTIFY_CONTACT_SERVER_END Failed!\n",
            __FUNCTION__);
  }
  dbg_msg("Comintf: %s: TMS_EVENT_NOTIFY_CONTACT_SERVER_END complete\n",
          __FUNCTION__);

  if (pCurrComm && NULL != pCurrComm->ComIntf_NetDisconn)
    ret = (*pCurrComm->ComIntf_NetDisconn)(bForceDisconnect);

  dbg_warn("Comintf: %s: - (%d)\n", __FUNCTION__, ret);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
  return ret;
}

const char* CommGetErrString(int err)
{
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&com_interface_mutex);
#endif
  return (*pCurrComm->ComIntf_ErrString)(err);
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&com_interface_mutex);
#endif
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
