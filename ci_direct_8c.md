---
title: tmsagt/src/VHQIo/ciDirect.c

---

# tmsagt/src/VHQIo/ciDirect.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[CheckAndInitLog](ci_direct_8c.md#function-checkandinitlog)**() |
| int | **[InitVXComms](ci_direct_8c.md#function-initvxcomms)**(bool NWIF_start) |
| void | **[StartNetwork](ci_direct_8c.md#function-startnetwork)**(void ) |
| void | **[StartCommEngine](ci_direct_8c.md#function-startcommengine)**(void ) |
| int | **[internal_GetMACAddress](ci_direct_8c.md#function-internal-getmacaddress)**(char * pszMACAddress, int iMACAddressBufLen) |
| int | **[internal_GetIPAddress](ci_direct_8c.md#function-internal-getipaddress)**(char * pszIPAddress, int iIPAddressBufLen) |
| int | **[Direct_init](ci_direct_8c.md#function-direct-init)**(char * pszSettings1, char * pszSettings2, char * pszSettings3, char * pszSettings4) |
| int | **[Direct_deinit](ci_direct_8c.md#function-direct-deinit)**(void ) |
| int | **[Direct_open](ci_direct_8c.md#function-direct-open)**(CommOpenData * pData) |
| int | **[Direct_close](ci_direct_8c.md#function-direct-close)**(CommOpenData * pData) |
| int | **[Direct_status](ci_direct_8c.md#function-direct-status)**(void * pData, bool * bUp, char * pszIpAddress, char * pszMacAddr) |
| int | **[Direct_NetConn](ci_direct_8c.md#function-direct-netconn)**(void ) |
| int | **[Direct_NetDisconn](ci_direct_8c.md#function-direct-netdisconn)**(bool bForceDisconnect) |
| const char * | **[Direct_ErrString](ci_direct_8c.md#function-direct-errstring)**(int err) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ARRAY_SIZEOF](ci_direct_8c.md#define-array-sizeof)**(x)  |

## Detailed Description


File for Direct operating mode connectivity. 


## Functions Documentation

### function CheckAndInitLog

```cpp
void CheckAndInitLog()
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


### function Direct_init

```cpp
int Direct_init(
    char * pszSettings1,
    char * pszSettings2,
    char * pszSettings3,
    char * pszSettings4
)
```


### function Direct_deinit

```cpp
int Direct_deinit(
    void 
)
```


### function Direct_open

```cpp
int Direct_open(
    CommOpenData * pData
)
```


### function Direct_close

```cpp
int Direct_close(
    CommOpenData * pData
)
```


### function Direct_status

```cpp
int Direct_status(
    void * pData,
    bool * bUp,
    char * pszIpAddress,
    char * pszMacAddr
)
```


**Parameters**: 

  * **pData** = UNUSED. 
  * **bUp** = to store status, TRUE if active/IP address is present 
  * **pszIpAddress** = to store IP Address 
  * **pszMacAddr** = to store Mac address


**Return**: int -1, if not attached; 0, if connection attached 

This function returns the IP address and Mac address if connection status is active 


### function Direct_NetConn

```cpp
int Direct_NetConn(
    void 
)
```


**Return**: 0, if network connect is successful. 

This function establishes connection to network and set the successful connection type if operating mode is direct. 


### function Direct_NetDisconn

```cpp
int Direct_NetDisconn(
    bool bForceDisconnect
)
```


**Parameters**: 

  * **bForceDisconnect** =TRUE, if force disconnect is active


**Return**: 0, if network disconnect is successful. 

This function is the disconnect from network if operating mode is direct. 


### function Direct_ErrString

```cpp
const char * Direct_ErrString(
    int err
)
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
#include <svcmgr/svc_net.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
//#include <sys/stat.h>
#include <svc.h>

#include "VHQTypes.h"
#include "VHQDebug.h"

#define ARRAY_SIZEOF(x) (sizeof(x)/sizeof(x[0]))

#include "ComIntf.h"
#include "VHQConfig.h"
#include "VHQIo.h"

// module globals

void CheckAndInitLog();
int InitVXComms(bool NWIF_start);
void StartNetwork(void);
void StartCommEngine(void);
int internal_GetMACAddress(char *pszMACAddress, int iMACAddressBufLen);
int internal_GetIPAddress(char *pszIPAddress, int iIPAddressBufLen);

int Direct_init(char *pszSettings1, char *pszSettings2, char *pszSettings3,
                char *pszSettings4)
{
  (void) (pszSettings1);
  (void) (pszSettings2);
  (void) (pszSettings3);
  (void) (pszSettings4);
  g_sIoProperties.eMode = VHQ_MODE_DIRECT;
  SetComType(COM_TYPE_DIRECT);
  return TRUE;
}

int Direct_deinit(void)
{
  /* Do not call SetComType(COM_NO_INTERFACE) here. GetComType() should return latest success communication type. */
  return TRUE;
}

int Direct_open(CommOpenData *pData)
{
  UNUSED(pData);
  return 0;
}

int Direct_close(CommOpenData *pData)
{
  UNUSED(pData);
  return -1;
}


int Direct_status(void *pData, bool *bUp, char *pszIpAddress, char *pszMacAddr)
{
  int iRetVal = 0;
  UNUSED(pData);

  dbg_trace("%s: +\r\n", __FUNCTION__);

  /* Process for a IP address */
  if (pszIpAddress)
  {
    internal_GetIPAddress(pszIpAddress, IP_ADDR_LEN);
    if (!ISvalidIP(pszIpAddress))
    {
      pszIpAddress[0] = '\0';
      iRetVal = -1;
    }
  }

  /* Process for a MAC address */
  if (pszMacAddr)
  {
    internal_GetMACAddress(pszMacAddr, MAC_ADDR_LEN);
    if (!ISvalidMAC(pszMacAddr))
    {
      pszMacAddr[0] = '\0';
    }
  }

  /* Mark state as active in case if IP address is present */
  if (bUp)
  {
    if (ISvalidIP(pszIpAddress))
      *bUp = TRUE;
    else
      *bUp = FALSE;
  }

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return iRetVal;
}


int Direct_NetConn(void)
{
#ifdef Mx2
  struct netIfconfig status;
  char *defaultRoute;
  uint32 iTimeout = 0;
  time_t exp_time = 0;

  /* Provide some time for interface to wake-up. Wait here or wait after when we trying to obtain IP - are the same in context of delay before we have ability to send first package */
  VHQGetParameterUint32(PARAM_NETWORK_CONFIGURAION_WAIT_TIME, &iTimeout,
                        DEFAULT_BASE);
  exp_time = linux_time(NULL) + iTimeout;

  do
  {
    defaultRoute = net_getDefaultRouteInfo();
    if (defaultRoute)
    {
      status = net_interfaceStatus(defaultRoute);
      if (0 == errno)
      {
        dbg_msg("%s: default route configured for %s interface\r\n",
                __FUNCTION__, defaultRoute);

        if (strstr(defaultRoute, "eth") != NULL)
        {
          SetComType(COM_TYPE_ETH);
        }
        else if (strstr(defaultRoute, "wlan") != NULL)
        {
          SetComType(COM_TYPE_WIFI);
        }
        else if (strstr(defaultRoute, "usb") != NULL)
        {
          SetComType(COM_TYPE_ETH_USB);
        }
        else if (strstr(defaultRoute, "ppp0") != NULL)
        {
          SetComType(COM_TYPE_DIAL);
        }
        else if (strstr(defaultRoute, "ppp1") != NULL)
        {
          SetComType(COM_TYPE_GPRS);
        }
        log_dbg("%s: Set network_config to comtype: %d\n", __FUNCTION__,
                GetComType());

        free(defaultRoute);
        return 0;
      }
      free(defaultRoute);
    }
    sleep(1);
  }
  while (exp_time > linux_time(NULL));

  dbg_err("%s: default route undefined\r\n", __FUNCTION__);
  return -1;
#else
    SetComType(COM_TYPE_DIRECT);
#endif
  return 0;
}

int Direct_NetDisconn(bool bForceDisconnect)
{
  UNUSED(bForceDisconnect);
  /* Do not call SetComType(COM_NO_INTERFACE) here. GetComType() should return latest success communication type. */
  return 0;
}

const char* Direct_ErrString(int err)
{
  UNUSED(err);
  return "NULL";
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
