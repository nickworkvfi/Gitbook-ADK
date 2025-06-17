---
title: tmsagt/src/VHQIo/ciADK.c

---

# tmsagt/src/VHQIo/ciADK.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[CheckAndInitLog](ci_a_d_k_8c.md#function-checkandinitlog)**(void ) |
| int | **[InitVXComms](ci_a_d_k_8c.md#function-initvxcomms)**(bool NWIF_start) |
| void | **[StartNetwork](ci_a_d_k_8c.md#function-startnetwork)**(void ) |
| void | **[StartCommEngine](ci_a_d_k_8c.md#function-startcommengine)**(void ) |
| int | **[internal_GetMACAddress](ci_a_d_k_8c.md#function-internal-getmacaddress)**(char * pszMACAddress, int iMACAddressBufLen) |
| int | **[internal_GetIPAddress](ci_a_d_k_8c.md#function-internal-getipaddress)**(char * pszIPAddress, int iIPAddressBufLen) |
| bool | **[GetRestartStatus](ci_a_d_k_8c.md#function-getrestartstatus)**() |
| const char * | **[GetCommErrWrapper](ci_a_d_k_8c.md#function-getcommerrwrapper)**(enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno_in) |
| com_type_t | **[get_comtype_by_interface](ci_a_d_k_8c.md#function-get-comtype-by-interface)**(enum [com_Interfaces](libcom_8h.md#enum-com-interfaces) interface) |
| int | **[net_get_info](ci_a_d_k_8c.md#function-net-get-info)**(const char * networkProfile) |
| const char * | **[get_NetworkEvent_description](ci_a_d_k_8c.md#function-get-networkevent-description)**(enum [com_NetworkEvent](libcom_8h.md#enum-com-networkevent) nwEvent) |
| void | **[network_event_handler](ci_a_d_k_8c.md#function-network-event-handler)**(enum [com_NetworkEvent](libcom_8h.md#enum-com-networkevent) event, enum [com_NetworkType](libcom_8h.md#enum-com-networktype) type, const void * data, void * priv, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno) |
| void | **[DirectADK_statuscallback](ci_a_d_k_8c.md#function-directadk-statuscallback)**(enum [com_ConnectionEvent](libcom_8h.md#enum-com-connectionevent) event, enum [com_ConnectionType](libcom_8h.md#enum-com-connectiontype) type, const void * data, void * priv, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno) |
| void | **[ConfigureConnectionProfile](ci_a_d_k_8c.md#function-configureconnectionprofile)**(char * pszDefaultPath) |
| int | **[DirectADK_init](ci_a_d_k_8c.md#function-directadk-init)**(char * pszSettings1, char * pszSettings2, char * pszSettings3, char * pszSettings4) |
| int | **[DirectADK_deinit](ci_a_d_k_8c.md#function-directadk-deinit)**(void ) |
| curl_socket_t | **[opensocket_callback](ci_a_d_k_8c.md#function-opensocket-callback)**(void * clientp, curlsocktype purpose, struct curl_sockaddr * address) |
| int | **[closesocket_callback](ci_a_d_k_8c.md#function-closesocket-callback)**(void * clientp, curl_socket_t item) |
| int | **[DirectADK_open](ci_a_d_k_8c.md#function-directadk-open)**(CommOpenData * pData) |
| int | **[DirectADK_close](ci_a_d_k_8c.md#function-directadk-close)**(CommOpenData * pData) |
| int | **[DirectADK_status](ci_a_d_k_8c.md#function-directadk-status)**(void * pData, bool * bUp, char * pszIpAddress, char * pszMacAddr) |
| int | **[DirectADK_NetConn](ci_a_d_k_8c.md#function-directadk-netconn)**(void ) |
| int | **[DirectADK_NetDisconn](ci_a_d_k_8c.md#function-directadk-netdisconn)**(bool bForceDisconnect) |
| const char * | **[DirectADK_ErrString](ci_a_d_k_8c.md#function-directadk-errstring)**(int err) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[g_bConnectDisabled](ci_a_d_k_8c.md#variable-g-bconnectdisabled)**  |
| int | **[g_iRefCount](ci_a_d_k_8c.md#variable-g-irefcount)**  |
| char * | **[pszConnectionFile](ci_a_d_k_8c.md#variable-pszconnectionfile)**  |
| bool | **[interface_up](ci_a_d_k_8c.md#variable-interface-up)**  |
| bool | **[WaitingToConnect](ci_a_d_k_8c.md#variable-waitingtoconnect)**  |
| pthread_mutex_t | **[adkconnect_lock_mutex](ci_a_d_k_8c.md#variable-adkconnect-lock-mutex)**  |
| pthread_cond_t | **[adkconnect_lock_cond](ci_a_d_k_8c.md#variable-adkconnect-lock-cond)**  |
| char[IP_ADDR_LEN] | **[szMyIpAddr](ci_a_d_k_8c.md#variable-szmyipaddr)**  |
| char[MAC_ADDR_LEN] | **[szMyMacAddr](ci_a_d_k_8c.md#variable-szmymacaddr)**  |
| bool | **[bInited](ci_a_d_k_8c.md#variable-binited)**  |
| char[64] | **[szNetName](ci_a_d_k_8c.md#variable-sznetname)**  |
| char[64] | **[localNetName](ci_a_d_k_8c.md#variable-localnetname)**  |
| bool | **[g_bNetUpdate](ci_a_d_k_8c.md#variable-g-bnetupdate)**  |
| char * | **[pszConnectionContents](ci_a_d_k_8c.md#variable-pszconnectioncontents)**  |
| int | **[iConnectionSize](ci_a_d_k_8c.md#variable-iconnectionsize)**  |
| const int | **[netFieldLen](ci_a_d_k_8c.md#variable-netfieldlen)**  |
| char[256] | **[g_szCurrentConnectionProfile](ci_a_d_k_8c.md#variable-g-szcurrentconnectionprofile)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ARRAY_SIZEOF](ci_a_d_k_8c.md#define-array-sizeof)**(x)  |
|  | **[CURL_SOCKOPT_ALREADY_CONNECTED](ci_a_d_k_8c.md#define-curl-sockopt-already-connected)**  |
|  | **[INFOSVC_TAG](ci_a_d_k_8c.md#define-infosvc-tag)**  |
|  | **[COM_EVENT_NETWORK_ATTACH](ci_a_d_k_8c.md#define-com-event-network-attach)**  |
|  | **[COM_EVENT_NETWORK_DETACH](ci_a_d_k_8c.md#define-com-event-network-detach)**  |

## Detailed Description


Main ADK connectivity related file. 


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


### function get_comtype_by_interface

```cpp
com_type_t get_comtype_by_interface(
    enum com_Interfaces interface
)
```


**Parameters**: 

  * **interface** = Available communication interfaces in the system


**Return**: com_type_t 

This function sets the enum value corresponding to the network type we got from ADK COM. 


### function net_get_info

```cpp
static int net_get_info(
    const char * networkProfile
)
```


**Parameters**: 

  * **networkProfile** = network profile


**Return**: void 

This function get basic network information referenced by a network profile by using ADK COM functions and displays the error if any. 


### function get_NetworkEvent_description

```cpp
const char * get_NetworkEvent_description(
    enum com_NetworkEvent nwEvent
)
```


### function network_event_handler

```cpp
static void network_event_handler(
    enum com_NetworkEvent event,
    enum com_NetworkType type,
    const void * data,
    void * priv,
    enum com_ErrorCodes com_errno
)
```


**Parameters**: 

  * **event** = event thrown by the network layer 
  * **type** = type of connection 
  * **data** = data 
  * **priv** = network profile 
  * **com_errno** = ADK COM error code returned.


**Return**: void 

This is a callback function that will be called by ADK COM when an event is generated. 


### function DirectADK_statuscallback

```cpp
void DirectADK_statuscallback(
    enum com_ConnectionEvent event,
    enum com_ConnectionType type,
    const void * data,
    void * priv,
    enum com_ErrorCodes com_errno
)
```


**Parameters**: 

  * **event** = event thrown by the network layer 
  * **type** = type of connection 
  * **data** = data 
  * **priv** = network profile 
  * **com_errno** = ADK COM error code returned.


**Return**: void 

This is a callback function that will be called by ADK COM when an event is generated. 


### function ConfigureConnectionProfile

```cpp
void ConfigureConnectionProfile(
    char * pszDefaultPath
)
```


**Parameters**: 

  * **pszDefaultPath** = pointer to connection profile.


**Return**: void 

This function configures the connection profile to establish a connection with the help of ADK COM. It checks for multiple locations for connection profiles and update the current connection profile g_szCurrentConnectionProfile. 


### function DirectADK_init

```cpp
int DirectADK_init(
    char * pszSettings1,
    char * pszSettings2,
    char * pszSettings3,
    char * pszSettings4
)
```


**Parameters**: 

  * **pszSettings1** 
  * **pszSettings2** 
  * **pszSettings3** 
  * **pszSettings4** 


**Return**: int 0, if initialization success 

This function initializes the ADK COM connections. 


### function DirectADK_deinit

```cpp
int DirectADK_deinit(
    void 
)
```


### function opensocket_callback

```cpp
static curl_socket_t opensocket_callback(
    void * clientp,
    curlsocktype purpose,
    struct curl_sockaddr * address
)
```


**Parameters**: 

  * **clientp** = contains whatever user-defined value set using the CURLOPT_OPENSOCKETDATA function. 
  * **purpose** = identifies the exact purpose for this particular socket. 
  * **address** = The callback gets the resolved peer address as the address argument.


**Return**: curl_socket_t file descriptor of the new socket, if success. 

This callback function gets called by libcurl instead of the socket(2) call. 


### function closesocket_callback

```cpp
int closesocket_callback(
    void * clientp,
    curl_socket_t item
)
```


**Parameters**: 

  * **clientp** = socket descriptor set with CURLOPT_CLOSESOCKETDATA. 
  * **item** = item is the socket libcurl wants to be closed.


**Return**: int 0, if socket closed. 

This callback function gets called by libcurl when sockets are closed. 


### function DirectADK_open

```cpp
int DirectADK_open(
    CommOpenData * pData
)
```


**Parameters**: 

  * **pData** = pointer to curl details.


**Return**: int -1, if error 

This function opens the connection using ADK functions and displays error message returned if any. 


### function DirectADK_close

```cpp
int DirectADK_close(
    CommOpenData * pData
)
```


**Parameters**: 

  * **pData** = pointer to curl details.


**Return**: int 0, if connection closed 

This function closes the connection using ADK functions and displays error message returned if any. 


### function DirectADK_status

```cpp
int DirectADK_status(
    void * pData,
    bool * bUp,
    char * pszIpAddress,
    char * pszMacAddr
)
```


**Parameters**: 

  * **pData** = pointer to curl details. 
  * **bUp** = to store status, TRUE if active/IP address is present 
  * **pszIpAddress** = to store IP Address 
  * **pszMacAddr** = to store Mac address


**Return**: int -1, if not attached; 0, if connection attached 

This function returns the IP address and Mac address if connection status is active 


### function DirectADK_NetConn

```cpp
int DirectADK_NetConn(
    void 
)
```


**Return**: 0, if network connect is successful. 

This function establishes connection to network if operating mode is ADK.It calls ADK function to connect the network. 


### function DirectADK_NetDisconn

```cpp
int DirectADK_NetDisconn(
    bool bForceDisconnect
)
```


**Parameters**: 

  * **bForceDisconnect** =TRUE, if force disconnect is active


**Return**: 0, if network disconnect is successful. 

This function is the disconnect from network if operating mode is ADK.It calls ADK function to disconnect the network. 


### function DirectADK_ErrString

```cpp
const char * DirectADK_ErrString(
    int err
)
```



## Attributes Documentation

### variable g_bConnectDisabled

```cpp
static bool g_bConnectDisabled = FALSE;
```


### variable g_iRefCount

```cpp
int g_iRefCount = 0;
```


### variable pszConnectionFile

```cpp
char * pszConnectionFile = NULL;
```


### variable interface_up

```cpp
static bool interface_up = FALSE;
```


### variable WaitingToConnect

```cpp
static bool WaitingToConnect = FALSE;
```


### variable adkconnect_lock_mutex

```cpp
static pthread_mutex_t adkconnect_lock_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable adkconnect_lock_cond

```cpp
static pthread_cond_t adkconnect_lock_cond = PTHREAD_COND_INITIALIZER;
```


### variable szMyIpAddr

```cpp
static char[IP_ADDR_LEN] szMyIpAddr;
```


### variable szMyMacAddr

```cpp
static char[MAC_ADDR_LEN] szMyMacAddr;
```


### variable bInited

```cpp
static bool bInited = FALSE;
```


### variable szNetName

```cpp
static char[64] szNetName;
```


### variable localNetName

```cpp
static char[64] localNetName;
```


### variable g_bNetUpdate

```cpp
static bool g_bNetUpdate = FALSE;
```


### variable pszConnectionContents

```cpp
static char * pszConnectionContents = NULL;
```


### variable iConnectionSize

```cpp
static int iConnectionSize = 0;
```


### variable netFieldLen

```cpp
const int netFieldLen = 9;
```


### variable g_szCurrentConnectionProfile

```cpp
static char[256] g_szCurrentConnectionProfile;
```



## Macros Documentation

### define ARRAY_SIZEOF

```cpp
#define ARRAY_SIZEOF(
    x
)
(sizeof(x)/sizeof(x[0]))
```


### define CURL_SOCKOPT_ALREADY_CONNECTED

```cpp
#define CURL_SOCKOPT_ALREADY_CONNECTED 2
```


### define INFOSVC_TAG

```cpp
#define INFOSVC_TAG "infosvc@"
```


### define COM_EVENT_NETWORK_ATTACH

```cpp
#define COM_EVENT_NETWORK_ATTACH 26
```


### define COM_EVENT_NETWORK_DETACH

```cpp
#define COM_EVENT_NETWORK_DETACH 27
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
#include "curl/curl.h"
#include "VHQConfig.h"

#define ARRAY_SIZEOF(x) (sizeof(x)/sizeof(x[0]))

// this is a hack for MX because it's curl.h is out of date.
#undef CURL_SOCKOPT_ALREADY_CONNECTED
#define CURL_SOCKOPT_ALREADY_CONNECTED 2

#include "ComIntf.h"
#include "VHQConfig.h"
#include "VHQIo.h"
#include "log/logapi_common.h"

// module globals
static bool g_bConnectDisabled = FALSE;
void CheckAndInitLog(void);
int InitVXComms(bool NWIF_start);
void StartNetwork(void);
void StartCommEngine(void);
int internal_GetMACAddress(char *pszMACAddress, int iMACAddressBufLen);
int internal_GetIPAddress(char *pszIPAddress, int iIPAddressBufLen);
bool GetRestartStatus();

int g_iRefCount = 0;
char *pszConnectionFile = NULL;

#if EVENT_SCHED_THREAD_MODE
pthread_mutex_t adk_mutex = PTHREAD_MUTEX_INITIALIZER;
#endif

static bool interface_up = FALSE;
static bool WaitingToConnect = FALSE;
static pthread_mutex_t adkconnect_lock_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t adkconnect_lock_cond = PTHREAD_COND_INITIALIZER;

static char szMyIpAddr[IP_ADDR_LEN];
static char szMyMacAddr[MAC_ADDR_LEN];

static bool bInited = FALSE;

/* Name of current connected network profile. From Attach to deAttach we have profile name here */
static char szNetName[64];
static char localNetName[64];
/* Binary flag for attached network */
static bool g_bNetUpdate = FALSE;

static char *pszConnectionContents = NULL;
static int iConnectionSize = 0;
//Store XML NETWORK field length used in offset calculations.
const int netFieldLen = 9;  // strlen("<NETWORK>");

static char g_szCurrentConnectionProfile[256];

#define INFOSVC_TAG "infosvc@"


const char* GetCommErrWrapper(enum com_ErrorCodes com_errno_in)
{
  const char *pszMsg = NULL;

  /* Don't call setSvcDBLock/setSvcDBUnLock here. This is simple operation from ADKCOM */
  pszMsg = com_GetErrorString(com_errno_in);

  if (NULL == pszMsg)
    return "NULL";
  return pszMsg;
}


com_type_t get_comtype_by_interface(enum com_Interfaces interface)
{
  com_type_t comtype;

  switch (interface)
  {
    case COM_INTERFACE_ETH0:
    case COM_INTERFACE_ETH1:
      comtype = COM_TYPE_ETH;
      break;
    case COM_INTERFACE_ETH_BT:
      comtype = COM_TYPE_ETH_BT;
      break;
    case COM_INTERFACE_ETH_USB_GADGET:
    case COM_INTERFACE_ETH_USB1_GADGET:
      comtype = COM_TYPE_ETH_USB;
      break;
    case COM_INTERFACE_ETH_USB_HOST_GADGET:
    case COM_INTERFACE_BRIDGE:
      comtype = COM_TYPE_NET_BRIDGE;
      break;
    case COM_INTERFACE_GPRS0:
      comtype = COM_TYPE_GPRS;
      break;
    case COM_INTERFACE_PPP_DIAL:
    case COM_INTERFACE_PPP_BT:
    case COM_INTERFACE_DIAL:        // shouldn't really see this one!
    case COM_INTERFACE_DIAL_BT: // raw dial - shouldn't see this one either in adk mode.
      comtype = COM_TYPE_DIAL;
      break;
    case COM_INTERFACE_WLAN0:
      comtype = COM_TYPE_WIFI;
      break;
    default:
      comtype = COM_NO_INTERFACE;
      break;
  }
  return comtype;
}


static int net_get_info(const char *networkProfile)
{
  struct com_IPConfig config;
  enum com_ErrorCodes error = 0;
  int result = -1;

  if (!networkProfile || !strlen(networkProfile))
  {
    dbg_msg("%s: No data for processing\n", __FUNCTION__);
    return result;
  }

  memset(&config, 0x00, sizeof(config));
  dbg_msg("%s: Calling com_GetNetworkInfo(\"%s\")\n", __FUNCTION__,
          networkProfile);

  if (strncmp(g_szCurrentConnectionProfile, INFOSVC_TAG, strlen(INFOSVC_TAG))
      == 0)
  {
    char szCurrentNetworkProfile[256] = { 0 };

    char *ptr = strrchr(g_szCurrentConnectionProfile, '@');

    strncpy(szCurrentNetworkProfile, g_szCurrentConnectionProfile,
            (ptr - g_szCurrentConnectionProfile));

    strncat(szCurrentNetworkProfile, networkProfile, strlen(networkProfile));

    result = com_GetNetworkInfo(szCurrentNetworkProfile, &config, &error);
  }
  else
  {
    result = com_GetNetworkInfo(networkProfile, &config, &error);
  }

  if (result == 0)
  {
    dbg_msg("DHCP enabled: %s\n", config.dhcp ? "YES" : "NO");
    dbg_msg("OWN IP: %s\n", config.ip_addr);
    dbg_msg("OWN NETMASK: %s\n", config.netmask);
    dbg_msg("OWN GATEWAY: %s\n", config.gateway);
    dbg_msg("OWN DNS1: %s\n", config.dns1);
    dbg_msg("OWN DNS2: %s\n", config.dns2);
    dbg_msg("OWN MAC: %s\n", config.mac);

#if EVENT_SCHED_THREAD_MODE
    pthread_mutex_lock(&adk_mutex);
#endif
    if (ISvalidIP(config.ip_addr))
    {
      strncpy(szMyIpAddr, config.ip_addr, sizeof(szMyIpAddr));
    }
    else
    {
      result = -1;
      dbg_err("%s: IP address is invalid\n", __FUNCTION__);
    }

    if (ISvalidMAC(config.mac))
    {
      strncpy(szMyMacAddr, config.mac, sizeof(szMyMacAddr));
    }
    else
    {
      result = -1;
      dbg_err("%s: MAC address is invalid\n", __FUNCTION__);
    }
#if EVENT_SCHED_THREAD_MODE
    pthread_mutex_unlock(&adk_mutex);
#endif
  }
  else
  {
    result = -1;
    log_err("%s: com_GetNetworkInfo %s failed with com_errno [%d], %s\n",
            __FUNCTION__, networkProfile, error, GetCommErrWrapper(error));
  }
  dbg_trace("%s: -\n", __FUNCTION__);
  return result;
}

// Temporary for R11 only
#define COM_EVENT_NETWORK_ATTACH 26
#define COM_EVENT_NETWORK_DETACH 27

const char* get_NetworkEvent_description(enum com_NetworkEvent nwEvent)
{
  switch (nwEvent)
  {
    case COM_EVENT_NETWORK_INTERFACE_UP:
      return "Network event COM_EVENT_NETWORK_INTERFACE_UP";
    case COM_EVENT_NETWORK_INTERFACE_DOWN:
      return "Network event COM_EVENT_NETWORK_INTERFACE_DOWN";

    case COM_EVENT_NETWORK_LINK_UP:
      return "Network event COM_EVENT_NETWORK_LINK_UP";
    case COM_EVENT_NETWORK_LINK_DOWN:
      return "Network event COM_EVENT_NETWORK_LINK_DOWN";

    case COM_EVENT_NETWORK_SIGNAL:
      return "Network event COM_EVENT_NETWORK_SIGNAL";
    case COM_EVENT_NETWORK_RECONNECT:
      return "Network event COM_EVENT_NETWORK_RECONNECT";

    case COM_EVENT_SIM_PIN_REQUEST:
      return "Network event COM_EVENT_SIM_PIN_REQUEST";
    case COM_EVENT_SIM_PUK_REQUEST:
      return "Network event COM_EVENT_SIM_PUK_REQUEST";

    case COM_EVENT_NETWORK_PACKET_SWITCH:
      return "Network event COM_EVENT_NETWORK_PACKET_SWITCH";
    case COM_EVENT_INTERNAL_PING:
      return "Network event COM_EVENT_INTERNAL_PING";

    case COM_EVENT_BT_CONFIRM_PAIR_REQUEST:
      return "Network event COM_EVENT_BT_CONFIRM_PAIR_REQUEST";
    case COM_EVENT_BT_PAIR_DONE:
      return "Network event COM_EVENT_BT_PAIR_DONE";

    case COM_EVENT_BT_DISCOV_TO_ELAPSED:
      return "Network event COM_EVENT_BT_DISCOV_TO_ELAPSED";
    case COM_EVENT_NETWORK_FAILED:
      return "Network event COM_EVENT_NETWORK_FAILED";

    case COM_EVENT_BT_SPP_SERVER_CONNECTED:
      return "Network event COM_EVENT_BT_SPP_SERVER_CONNECTED";
    case COM_EVENT_BT_SPP_SERVER_DISCONNECTED:
      return "Network event COM_EVENT_BT_SPP_SERVER_DISCONNECTED";

    case COM_EVENT_NETWORK_ATTACH:
      return "Network event COM_EVENT_NETWORK_ATTACH";
    case COM_EVENT_NETWORK_DETACH:
      return "Network event COM_EVENT_NETWORK_DETACH";

    default:
      return "Network event ERROR: Unsupported com_NetworkEvent";
  }
}


static void network_event_handler(enum com_NetworkEvent event,
                                  enum com_NetworkType type, const void *data,
                                  void *priv, enum com_ErrorCodes com_errno)
{
  UNUSED(type);
  UNUSED(com_errno);

  dbg_trace("%s: +\n", __FUNCTION__);

  dbg_msg("%s: %s [errno %d]-%s\n", __FUNCTION__,
          get_NetworkEvent_description(event), (int )com_errno,
          GetCommErrWrapper(com_errno));

  /* Process action for event */
  switch (event)
  {
    case COM_EVENT_NETWORK_INTERFACE_UP:
      if (0 != pthread_mutex_lock(&adkconnect_lock_mutex))
      {
        dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
      }
      interface_up = TRUE;
      if (WaitingToConnect)
        if (0 != pthread_cond_signal(&adkconnect_lock_cond))
          dbg_err("%s: Error pthread_cond_signal \n", __FUNCTION__);

      if (0 != pthread_mutex_unlock(&adkconnect_lock_mutex))
      {
        dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);
      }
      break;

    case COM_EVENT_NETWORK_INTERFACE_DOWN:
      if (0 != pthread_mutex_lock(&adkconnect_lock_mutex))
      {
        dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
      }
      interface_up = FALSE;
      if (0 != pthread_mutex_unlock(&adkconnect_lock_mutex))
      {
        dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);
      }
      break;

    case COM_EVENT_SIM_PIN_REQUEST:
      // set the correct PIN for the SIM
      if (com_SetDevicePropertyString(COM_PROP_GSM_SIM_PIN, "1234", &com_errno))
        log_err("PIN could not be set [errno %d]-%s\n", (int )com_errno,
                GetCommErrWrapper(com_errno));
      break;

    default:
      break;
  }
  dbg_trace("%s: -\n", __FUNCTION__);
  return;
}


void DirectADK_statuscallback(enum com_ConnectionEvent event,
                              enum com_ConnectionType type, const void *data,
                              void *priv, enum com_ErrorCodes com_errno)
{
  UNUSED(priv);
  const char *result = NULL;
  int interface_name = 0;
  struct com_networkEventData *nwdata = (struct com_networkEventData*) data;
  com_type_t handler_comtype = COM_NO_INTERFACE;
  com_type_t agent_comtype = COM_NO_INTERFACE;
  enum com_ErrorCodes error = COM_ERR_NONE;

  switch (event)
  {
    case COM_EVENT_CONNECTION_ESTABLISHED:
    {
      dbg_notice(
          "%s: ### Connection event COM_EVENT_CONNECTION_ESTABLISHED received: ERRNO[%d]-%s\n",
          __FUNCTION__, com_errno, GetCommErrWrapper(com_errno));
      interface_up = TRUE;
      switch (type)
      {
        case COM_CONNECTION_TYPE_UDP:
        case COM_CONNECTION_TYPE_SSL:
        case COM_CONNECTION_TYPE_TCP:
        {
          // override the net profile name with whatever made this connection
          if (com_GetProfilePropertyString(data, type,
                                           COM_PROFILE_PROP_STRING_NETWORKNAME,
                                           &result, &error) || !result)
          {
            log_err(
                "%s: ### Could not get network-name from data-block, error: %s\n",
                __FUNCTION__, com_GetErrorString(error));
          }
          else
          {
            dbg_msg("%s: got %s as network name!\n", __FUNCTION__, result);
          }

          if (com_GetProfilePropertyInt(data, type,
                                        COM_PROFILE_PROP_INT_INTERFACE,
                                        &interface_name, &error) || !result)
          {
            log_err(
                "%s: ### Could not get network-interface from data-block, error: %s\n",
                __FUNCTION__, com_GetErrorString(error));
          }
          else
          {
            dbg_msg("%s: got %d as network interface!\n", __FUNCTION__,
                    interface_name);
          }

          handler_comtype = get_comtype_by_interface(interface_name);
          agent_comtype = GetComType();

          if (strcmp(szNetName, result) != 0)
          {
            if (handler_comtype != agent_comtype)
            {
              dbg_msg("%s: Updated Communication type: \"%s\"\n", __FUNCTION__,
                      get_ComType_name(handler_comtype));
              SetComType(handler_comtype);
            }

            strncpy(szNetName, result, sizeof(szNetName));

            g_bNetUpdate = TRUE;
          }

          break;
        }
        default:
          dbg_err("%s: ### Connection event %d received: ERRNO[%d]-%s\n",
                  __FUNCTION__, event, com_errno, GetCommErrWrapper(com_errno));
          break;
      }
      break;
    }

    case COM_EVENT_CONNECTION_FAILED:
      log_warn(
          "%s: ### Connection event COM_EVENT_CONNECTION_FAILED received: ERRNO[%d]-%s\n",
          __FUNCTION__, com_errno, GetCommErrWrapper(com_errno));
      break;

    case COM_EVENT_PROFILE_FAILED:
      log_err(
          "%s: ### Connection event COM_EVENT_PROFILE_FAILED received: ERRNO[%d]-%s\n",
          __FUNCTION__, com_errno, GetCommErrWrapper(com_errno));
      break;

    case COM_EVENT_SSL_CONFIRM_POLICY_OVERRIDE:
    {
      int policy = 0;
      log_dbg(
          "### Connection event COM_EVENT_SSL_CONFIRM_POLICY_OVERRIDE received: ERRNO[%d]\n",
          com_errno);

      // check if the new policy is really the value we want to use from application point of view
      if (com_GetProfilePropertyInt(data, type, COM_PROFILE_PROP_INT_SSL_POLICY,
                                    &policy, NULL))
      {
        dbg_msg(
            "### Could not get policy from data-block! Don't accept the policy change.\n");
        break;
      }

      dbg_msg(
          "### Do we really want to allow policy %d ? In this test case yes, we do!!!\n",
          policy);
      com_SetPassword(COM_PASSWORD_SSL_POLICY_ACCEPT, data,
                      "POLICY_ACCEPTED_INSECURE_NONPCICOMPLIANT_DANGEROUS",
                      &error);
      break;
    }

    default:
      break;
  }
  return;
}


void ConfigureConnectionProfile(char *pszDefaultPath)
{
  char szAltConnectionPath[256] = { 0 };

  char UsrConfigConnProfile[256] = { 0 };
  memset(UsrConfigConnProfile, 0, sizeof(UsrConfigConnProfile));
  GetFileNameForInstance(UsrConfigConnProfile,
                         (char*) VHQ_ADK_PROFILE_FLASH_CONFIG,
                         GetCurrentInstance());

  char PrivConfigConnProfile[256] = { 0 };
  memset(PrivConfigConnProfile, 0, sizeof(PrivConfigConnProfile));
  GetFileNameForInstance(PrivConfigConnProfile,
                         (char*) VHQ_PRIVATE_CONN_PROFILE,
                         GetCurrentInstance());

  VHQGetParameterString(PARAM_CONNECT_FILE_PATH, szAltConnectionPath,
                        sizeof(szAltConnectionPath));

  if (strlen(szAltConnectionPath))
  {
    strcpy(g_szCurrentConnectionProfile, szAltConnectionPath);
    if (0
        == strncmp(g_szCurrentConnectionProfile, INFOSVC_TAG,
                   strlen(INFOSVC_TAG)))
    {
      g_bConnectDisabled = TRUE;
      dbg_msg(
          "%s: Connection Profile is hosted in infosvc, setting \"Skip connect for ADK\"\n",
          __FUNCTION__);
      return;
    }
    else
    {
      if (FileExists(g_szCurrentConnectionProfile))
      {
        return;
      }

      dbg_msg("%s: Connection Profile override \"%s\" doesn't exist\n",
              __FUNCTION__, g_szCurrentConnectionProfile);
    }
  }

  if (pszDefaultPath && strlen(pszDefaultPath) && FileExists(pszDefaultPath))
  {
    strcpy(g_szCurrentConnectionProfile, pszDefaultPath);
    log_dbg("%s: Connection Profile \"%s\" exists, using that one.\n",
            __FUNCTION__, g_szCurrentConnectionProfile);
  }
  else if (FileExists(UsrConfigConnProfile))
  {
    strcpy(g_szCurrentConnectionProfile, UsrConfigConnProfile);
    log_dbg("%s: Connection Profile in flashconfig exists, using that one.\r\n",
            __FUNCTION__);
  }
  else if (FileExists(PrivConfigConnProfile))
  {
    strcpy(g_szCurrentConnectionProfile, PrivConfigConnProfile);
    log_dbg("%s: Connection Profile exists with Agent, using that one.\r\n",
            __FUNCTION__);
  }
  else if (FileExists(VHQ_CONNECTION_DEFAULT))
  {
    strcpy(g_szCurrentConnectionProfile, VHQ_CONNECTION_DEFAULT);
    log_dbg("%s: Default Connection Profile exists, using that one.\r\n",
            __FUNCTION__);
  }
  else
  {
    strcpy(g_szCurrentConnectionProfile, UsrConfigConnProfile);  // default behavior will be the same as it always was
    log_crit("%s: Connection Profile doesn't exist, likely will fail.\r\n",
             __FUNCTION__);
  }

}


int DirectADK_init(char *pszSettings1, char *pszSettings2, char *pszSettings3,
                   char *pszSettings4)
{
  (void) pszSettings1;
  (void) pszSettings2;
  (void) pszSettings3;
  (void) pszSettings4;

  dbg_msg("%s: calling com_init\n", __FUNCTION__);

  // we do too much re-initing in verix if this function gets called...
  // i need to call from another place, but only for raptor... so this should be OK as it will never happen on verix
  if (bInited)
    return 0;

  // i only call this once anyway, so this is not really necessary.
  if (!bInited)
  {
    enum com_ErrorCodes com_errno = COM_ERR_NONE;
    int num_retries_left = 15;
    int result = 0;

    szNetName[0] = '\0';
    szMyIpAddr[0] = '\0';
    szMyMacAddr[0] = '\0';

    while (num_retries_left--)
    {
      /* Lock DB since ADKCOM operates with SVC_INFO service */
      setSvcDBLock();
      result = com_Init(&com_errno);
      setSvcDBUnLock();

      if (result == 0)
        break;

      // Failed to initialize ADKCOM
      // Retry every 2 secs and up to 15 times (30 secs) if Error code is not "Init function has already been called"
      dbg_err("%s: com_Init fails with error %d, %s , %d retires left\n",
              __FUNCTION__, (int )com_errno, com_GetErrorString(com_errno),
              num_retries_left);

      if (com_errno == COM_ERR_ALREADY_INIT)
        break;

      sleep(2);  // Wait for 2 seconds
    }

    if (com_errno == COM_ERR_NONE)
    {
      bInited = TRUE;
      //ADKTMS-884 enable ADK COM logging+
      if (GetLoggingLevel() >= VHQ_LOGGING_LEVEL_DEBUG)
      {
        dbg_msg("%s: Enabling VHQ COM DEBUG.\n", __FUNCTION__);
        com_SetDevicePropertyInt(COM_PROP_VERBOSITY, 5, &com_errno);
        LOGAPI_INIT("VHQ");  //your application name
        LOGAPI_SETLEVEL(LOGAPI_TRACE);  //or LOGAPI_TRACE
        LOGAPI_SETOUTPUT(LOGAPI_ALL);
      }
      //ADKTMS-884 enable ADK COM logging-

      dbg_msg("%s: Libcom Version: %s\n", __FUNCTION__, com_GetVersion());

      int retries = 5;
      int result = 0;
      enum com_ErrorCodes error = COM_ERR_NONE;
      int events[] = { COM_EVENT_NETWORK_LINK_UP,
          COM_EVENT_NETWORK_INTERFACE_UP, COM_EVENT_NETWORK_INTERFACE_DOWN,
          COM_EVENT_NETWORK_LINK_DOWN, COM_EVENT_NETWORK_FAILED };

      while (retries--)
      {
        /* Lock DB since ADKCOM operates with SVC_INFO service */
        setSvcDBLock();
        /* Register the network handler */
        com_NetworkRemoveCallback(network_event_handler, NULL);
        /* Register the network handler */
        result = com_NetworkAddCallback(network_event_handler, events,
                                        sizeof(events) / sizeof(events[0]),
                                        NULL, &error);
        setSvcDBUnLock();

        if (result == 0)
        {
          break;
        }
        else
        {
          log_err(
              "%s: Couldn't register with network callback, error: %s, retries: %d \n",
              __FUNCTION__, GetCommErrWrapper(error), retries);
        }
      }
#if 0
            /* Register the network handler */
            com_NetworkSetCallback(network_event_handler, NULL, NULL);
            if (com_SetDevicePropertyInt(COM_PROP_POWER_MANAGEMENT_MODE, 0,  &com_errno ) == 0)
            {
                dbg_msg( "%s: Disabling signal notifications\n", __FUNCTION__);
            }
#endif
    }
    else
    {
      log_err("%s: Error %d\n", __FUNCTION__, (int )com_errno);
    }
  }

  memset(g_szCurrentConnectionProfile, 0, sizeof(g_szCurrentConnectionProfile));
  return 0;
}

int DirectADK_deinit(void)
{
  enum com_ErrorCodes com_errno = COM_ERR_NONE;
  /* Do not call SetComType(COM_NO_INTERFACE) here. GetComType() should return latest success communication type. */
  com_Destroy(&com_errno);
  dbg_err("%s: com_Destroy fails with error %d, %s\n", __FUNCTION__,
          (int )com_errno, com_GetErrorString(com_errno));
  return 0;
}

static curl_socket_t opensocket_callback(void *clientp, curlsocktype purpose,
                                         struct curl_sockaddr *address)
{
  (void) purpose;
  (void) address;

  curl_socket_t sockfd;
  sockfd = (curl_socket_t) clientp;
  int err;
  curl_socklen_t errSize = sizeof(err);

  /* the actual externally set socket is passed in via the OPENSOCKETDATA option. Check is it valid, if no - open new one */
  if (getsockopt(sockfd, SOL_SOCKET, SO_ERROR, (void*) &err, &errSize) == 0)
  {
    dbg_msg("%s: getsockopt() successed, err = %d\n", __FUNCTION__, err);
    if (err == 0)
      return sockfd;
  }

  /* better to create new socket than have no ability to communicate at all */
  log_notice("%s: unable to use original socket, create new one\n",
             __FUNCTION__);
  return socket(address->family, address->socktype, address->protocol);
}


int closesocket_callback(void *clientp, curl_socket_t item)
{
  /* Do not close socket in context of cURL, this is responsibility of com_ConnectClose() call which will be involved by CommClose() */
#if 0
    struct com_ConnectHandle *g_hADK = (struct com_ConnectHandle *)clientp;
    if (g_hADK)
    {
        /* Lock DB since ADKCOM operates with SVC_INFO service */
        setSvcDBLock();
        com_ConnectClose(g_hADK, NULL);
        setSvcDBUnLock();

        g_hADK = NULL;
    }
#else
  curl_socket_t original_socket_fd = (curl_socket_t) clientp;
  if (original_socket_fd == item)
    dbg_msg("%s: prevented closing of OUR socket\n", __FUNCTION__);
  else
  {
    dbg_err(
        "%s: unknown socket detected! (original_socket_fd=%d, item = %d). Close it\n",
        __FUNCTION__, (int )original_socket_fd, (int )item);
    return close(item);
  }
#endif
  return 0;
}

int DirectADK_open(CommOpenData *pData)
{
  struct com_ConnectHandle *connection = NULL;
  enum com_ErrorCodes e = 0;
  CURL *curl = NULL;
  int socket_fd = -1;
  int iRetryLimit = 3; /* possibly need more than one retry for netbridge and other cases */
  int iRetries = 0;
  struct timespec wait_time = { 0, 0 };
  int ret = 0;

  if (pData != NULL && pData->curl != NULL)
  {
    curl = pData->curl;
  }
  else
  {
    dbg_err("%s: error: no pData or curl handle\n", __FUNCTION__);
    return -1;
  }

  ConfigureConnectionProfile(NULL);

  dbg_msg("%s: Calling com_Connect with connection profile %s \n", __FUNCTION__,
          g_szCurrentConnectionProfile);

  VHQGetParameterUint32(PARAM_CONNECT_RETRIES, (uint32* )&iRetryLimit, BASE_10);

  do
  {
    /* Lock DB since ADKCOM operates with SVC_INFO service */
    setSvcDBLock();
    /* com_Connect() calls status callback and waits for it to be processed */
    connection = com_Connect(g_szCurrentConnectionProfile,
                             DirectADK_statuscallback, NULL, 3 * 60000, &e);

    if ((connection != NULL) && (g_bNetUpdate == TRUE))
    {
      g_bNetUpdate = FALSE;

      net_get_info(szNetName);
    }

    setSvcDBUnLock();

    if (connection != NULL)
    {
      break;
    }

    if (0 != pthread_mutex_lock(&adkconnect_lock_mutex))
    {
      dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
    }

    if (connection == NULL && interface_up == FALSE)
    {
      WaitingToConnect = TRUE;
      wait_time.tv_sec = linux_time(NULL) + 15;
      dbg_msg("%s: Waiting for COM_EVENT_NETWORK_INTERFACE_UP \n", __func__);

      ret = pthread_cond_timedwait(&adkconnect_lock_cond,
                                   &adkconnect_lock_mutex, &wait_time);
      if (ret && (ret != ETIMEDOUT))
        dbg_msg("%s: pthread_cond_wait error %d \n", __FUNCTION__, errno);
      else if (ret == ETIMEDOUT)
        dbg_msg("%s: timeout waiting for COM_EVENT_NETWORK_INTERFACE_UP \n",
                __FUNCTION__, errno);

      WaitingToConnect = FALSE;
    }
    if (0 != pthread_mutex_unlock(&adkconnect_lock_mutex))
    {
      dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);
    }
  }
  while ((connection == NULL) && ++iRetries < iRetryLimit);

  g_iRefCount++;

  g_sIoProperties.eMode = VHQ_MODE_DIRECT;

  if (connection == NULL)
  {
    g_iRefCount--;
    log_err("%s: connection is NULL\n", __FUNCTION__);
  }
  else
  {
    /* stash the connection info */
    pData->connection = connection;
    pData->bIsAdkMode = TRUE;

    if (!pData->bUseADKCOMforSSL)
    {
      /* Lock DB since ADKCOM operates with SVC_INFO service */
      setSvcDBLock();
      /* call this function to get a socket */
      socket_fd = com_ConnectGetFD(connection, &e);
      setSvcDBUnLock();

      if (socket_fd <= 0)
      {
        dbg_msg(
            "%s: com_ConnectGetFD returned invalid socket, trying SSL socket, error: %d \"%s\"\n",
            __FUNCTION__, e, GetCommErrWrapper(e));

        /* Lock DB since ADKCOM operates with SVC_INFO service */
        setSvcDBLock();
        /* call this function to get a socket */
        socket_fd = com_ConnectGetSslFD(connection, &e);
        setSvcDBUnLock();

        if (socket_fd <= 0)
        {
          g_iRefCount--;
          log_err("%s: ADK returned invalid socket, error: %d \"%s\"\n",
                  __FUNCTION__, e, GetCommErrWrapper(e));
          return -1;
        }
        else
        {
          pData->bUseADKCOMforSSL = TRUE;
        }
      }

      dbg_msg("%s: ADK connection  %08x, socket %d\n", __FUNCTION__, connection,
              socket_fd);

      pData->socketFd = socket_fd;
#if 0
      /* Open handler */
      curl_easy_setopt(curl, CURLOPT_OPENSOCKETDATA, socket_fd);
      curl_easy_setopt(curl, CURLOPT_OPENSOCKETFUNCTION, opensocket_callback);

      /* Close handler */
      curl_easy_setopt(curl, CURLOPT_CLOSESOCKETDATA, socket_fd);
      curl_easy_setopt(curl, CURLOPT_CLOSESOCKETFUNCTION, closesocket_callback);
#endif
    }
  }

  strncpy(pData->networkErrorString, GetCommErrWrapper(e),
          sizeof(pData->networkErrorString) - 1);
  return (int) e;
}

int DirectADK_close(CommOpenData *pData)
{
  int result;
  struct com_ConnectHandle *connection;

  dbg_trace("%s: + refcount is %d\n", __FUNCTION__, g_iRefCount);

  if (pData != NULL && pData->connection != NULL)
  {
    enum com_ErrorCodes com_errno = 0;
    connection = pData->connection;
    if (g_iRefCount > 0)
      g_iRefCount--;

    dbg_msg("%s: com_ConnectClose for %08x\n", __FUNCTION__, connection);

    /* Lock DB since ADKCOM operates with SVC_INFO service */
    setSvcDBLock();
    result = com_ConnectClose(connection, &com_errno);
    setSvcDBUnLock();

    if (result == -1)
    {
      log_err("%s: com_ConnectClose returned %08x, error: %d \"%s\"\n",
              __FUNCTION__, connection, com_errno,
              GetCommErrWrapper(com_errno));
    }
    else
    {
      dbg_msg("%s: com_ConnectClose success\n", __FUNCTION__);
    }

    szNetName[0] = '\0';
    szMyIpAddr[0] = '\0';
    szMyMacAddr[0] = '\0';
  }
  dbg_msg("%s: - refcount is %d\n", __FUNCTION__, g_iRefCount);
  return 0;
}

int DirectADK_status(void *pData, bool *bUp, char *pszIpAddress,
                     char *pszMacAddr)
{
  int iRetVal = 0;
  UNUSED(pData);
  //com_NetworkStatus nstatus = COM_NETWORK_STATUS_ERROR;

  dbg_trace("%s: +\n", __FUNCTION__);

#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&adk_mutex);
#endif
  /* Process for a IP address */
  if (pszIpAddress)
  {
    if (ISvalidIP(szMyIpAddr))
    {
      strncpy(pszIpAddress, szMyIpAddr, IP_ADDR_LEN);
    }
    else
    {
      if ((internal_GetIPAddress(pszIpAddress, IP_ADDR_LEN) == 0)
          && !ISvalidIP(pszIpAddress))
      {
        pszIpAddress[0] = '\0';
        szMyIpAddr[0] = '\0';
        iRetVal = -1;
      }
    }
  }

  /* Process for a MAC address */
  if (pszMacAddr)
  {
    if (ISvalidMAC(szMyMacAddr))
    {
      strncpy(pszMacAddr, szMyMacAddr, MAC_ADDR_LEN);
    }
    else
    {
      if ((internal_GetMACAddress(pszMacAddr, MAC_ADDR_LEN) == 0)
          && !ISvalidMAC(pszMacAddr))
      {
        pszMacAddr[0] = '\0';
        szMyMacAddr[0] = '\0';
      }
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
#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&adk_mutex);
#endif
  dbg_msg("pszIpAddress = %s, pszMacAddr =  %s, bUp = %s, Return = %d\n",
          pszIpAddress ? pszIpAddress : "NULL",
          pszMacAddr ? pszMacAddr : "NULL",
          bUp ? (*bUp ? "TRUE" : "FALSE") : "NULL", iRetVal);
  dbg_trace("%s: -\n", __FUNCTION__);
  return iRetVal;
}
#if 0

//POSagent_init, POSagent_deinit, POSagent_open, POSagent_close, POSagent_status
int FindNetName(char *pszConnectionFilename, char *pszNetName, int iLen)
{
    char *pszItem;
    memset(pszNetName, 0, iLen);
    dbg_trace(  "%s: + \n", __FUNCTION__);
    if (NULL == pszConnectionContents)
    {
        struct stat f1;
        int iRet=-1;
        FILE *fp;
        dbg_msg( "%s: initializing net profile buffer\n", __FUNCTION__);
        if (0 != stat(pszConnectionFilename, &f1))
        {
            dbg_err( "%s: stat err %s\n", __FUNCTION__, pszConnectionFilename);
            return -1;
        }
        if (f1.st_size <= 0)
        {
            dbg_err( "%s: stat err size %d\n", __FUNCTION__, f1.st_size);
            return -2;
        }
        iConnectionSize = f1.st_size;
        pszConnectionContents = malloc(iConnectionSize+1);
        memset(pszConnectionContents, 0, iConnectionSize + 1);

        fp = fopen(pszConnectionFilename, "rb");
        if (NULL != fp)
        {
            iRet = fread(pszConnectionContents, 1, iConnectionSize, fp);
            fclose(fp);
        }
        if (iRet < iConnectionSize)
            dbg_msg(  "%s: Contents of %s smaller than expected(%d, %d)\n", __FUNCTION__, pszConnectionFilename, iRet, iConnectionSize);
    }

    pszItem = strstr(pszConnectionContents, "<NETWORK>");
    if (pszItem)
    {
        int i=0;
        int iNewSize;
        int iOffset = pszItem - pszConnectionContents;
        char c;
        char *pszTmpBuff;

        do
        {
            c = *(pszItem + netFieldLen + i);
            if (c != '<') pszNetName[i] = c;
            i++;
        } while (c != '<' && (iOffset + i) < iConnectionSize && i < iLen);

        iNewSize = iConnectionSize - iOffset - netFieldLen;
        pszTmpBuff = malloc(iNewSize);
        if (NULL == pszTmpBuff)
            return 0;   // can't proceed
        memcpy(pszTmpBuff, pszConnectionContents + iOffset + netFieldLen, iNewSize);
        free(pszConnectionContents);
        pszConnectionContents = pszTmpBuff;
        iConnectionSize = iNewSize;
        strncat(pszNetName, ".xml", iLen);
        dbg_msg(  "%s: found %s\n", __FUNCTION__, pszNetName);
        return 1;
    }
    else
    {
        dbg_err( "%s: Couldn't parse connection profile\n", __FUNCTION__);
    }

    free(pszConnectionContents);
    pszConnectionContents = NULL;
    return 0;
}

//DirectADK_init, DirectADK_deinit, DirectADK_open, DirectADK_close, DirectADK_status

int TryNet(char *pszNetwork, enum com_ErrorCodes *e)
{
    int iRet = 0;

    dbg_msg( "%s: trying %s\n", __FUNCTION__, pszNetwork);

    /* Lock DB since ADKCOM operates with SVC_INFO service */
    setSvcDBLock();
    /* Attach network */
    iRet = com_AttachNetwork(pszNetwork, e);

    if (g_bNetAttached == TRUE)
    {
        net_get_info(szNetName);
    }

    setSvcDBUnLock();

    if(iRet == 0)
        dbg_msg( "%s: com_AttachNetwork returned %d, error: %d \"%s\"\n", __FUNCTION__, (int)iRet, *e, GetCommErrWrapper(*e));
    else
        log_err( "%s: com_AttachNetwork returned %d, error: %d \"%s\"\n", __FUNCTION__, (int)iRet, *e, GetCommErrWrapper(*e));

    return iRet;
}
#endif


int DirectADK_NetConn(void)
{
  int iRet = -1;
  dbg_trace("%s: +\n", __FUNCTION__);

  // ADKTMS-1910, EMS971, ADKINBOX-780
  ConfigureConnectionProfile(NULL);
  dbg_msg("%s: Connection Profile Configured\n", __FUNCTION__);

#if 0
    enum com_ErrorCodes e = 0;

    if (g_bConnectDisabled == FALSE)
    {
        VHQGetParameterBool(PARAM_SKIP_CONNECT, &g_bConnectDisabled);
    }

    if (g_bConnectDisabled)
    {
        iRet = 0;
        log_dbg( "%s: Skip ADKCOM Attach\n", __FUNCTION__);
    }
    else
    {
        int retries = 5;
        int result = 0;
        enum com_ErrorCodes error = COM_ERR_NONE;
        int events[] = {COM_EVENT_NETWORK_ATTACH, COM_EVENT_NETWORK_DETACH, COM_EVENT_NETWORK_FAILED};

        while (retries--)
        {
            /* Lock DB since ADKCOM operates with SVC_INFO service */
            setSvcDBLock();
            /* Register the network handler */
            result = com_NetworkAddCallback(network_event_handler, events, sizeof(events) / sizeof(events[0]), localNetName, &error);
            setSvcDBUnLock();

            if (result == 0)
            {
                break;
            }
            else
            {
                log_err( "%s: Couldn't register with network callback, error: %s, retries: %d \n", __FUNCTION__, GetCommErrWrapper(error), retries);
            }
        }

        /* Do not attach one more network until we use one */
        if (FALSE == g_bNetAttached)
        {
            do
            {
                if (1 == FindNetName(g_szCurrentConnectionProfile, localNetName, sizeof(localNetName)))
                {
                    iRet = TryNet(localNetName, &e);
                }
            } while (strlen(localNetName) && iRet != 0);

            if (pszConnectionContents)
            {
                free(pszConnectionContents);
                pszConnectionContents = NULL;
            }
        }
        else
        {
            iRet = 0;
            dbg_msg( "%s: %s network already attached \n", __FUNCTION__, szNetName);
        }
    }
#endif
  iRet = 0;
  dbg_trace("%s: -\n", __FUNCTION__);
  return iRet;
}

int DirectADK_NetDisconn(bool bForceDisconnect)
{
  int iRetCode = -1;
  dbg_trace("%s: +\n", __FUNCTION__);
  dbg_msg("%s: Disconnecting Network \n", __FUNCTION__);

#if 0
    if (!g_bNetAttached)
    {
        iRetCode = 0;
        log_dbg( "%s: Skip ADKCOM Dettach\n", __FUNCTION__);
    }
    else
    {
        enum com_ErrorCodes e = 0;
        uint32 seconds_to_next_event;
        uint32 disconnect_override_time;

        seconds_to_next_event = GetSecondsToNextEvent(TRUE);
        VHQGetParameterUint32(PARAM_DISCONNECT_OVERRIDE_WAIT_SECS, &disconnect_override_time, DEFAULT_BASE);

        dbg_msg( "%s: process network \"%s\"\n", __FUNCTION__, localNetName);

        if (bForceDisconnect || GetRestartStatus() || (seconds_to_next_event >= disconnect_override_time))
        {
            if (bForceDisconnect)
                dbg_msg( "%s: bForceDisconnect is TRUE - checking if ComType warrants a detach\n", __FUNCTION__);
            else
                dbg_msg( "%s: seconds_to_next_event = %u, disconnect_override_time = %u - checking if ComType warrants a detach\n", __FUNCTION__, seconds_to_next_event, disconnect_override_time);

            log_dbg( "%s: Detaching from network (com_DetachNetwork), comtype=\"%s\" - seconds_to_next_event = %u, disconnect_override_time = %u\n", __FUNCTION__,
                get_ComType_name(GetComType()), seconds_to_next_event, disconnect_override_time);

            /* Lock DB since ADKCOM operates with SVC_INFO service */
            setSvcDBLock();
            /* com_DetachNetwork() calls network callback and waits for it to be processed */
            iRetCode = com_DetachNetwork(localNetName, &e);
            setSvcDBUnLock();

            if (iRetCode)
            {
                dbg_msg( "%s: com_DetachNetwork returned %d, error: %d \"%s\". Network \"%s\" was not Detached\n", __FUNCTION__, (int)iRetCode, e, GetCommErrWrapper(e), szNetName);
            }
            sleep(1);
        }
        else
        {
            dbg_notice( "%s: %u seconds to next event (disconnect_override_time = %u) - NOT Detaching from network\n", __FUNCTION__,
                seconds_to_next_event, disconnect_override_time);
        }

        if (g_bConnectDisabled == FALSE)
        {
            /* Lock DB since ADKCOM operates with SVC_INFO service */
            setSvcDBLock();
            /* Register the network handler */
            com_NetworkRemoveCallback(network_event_handler, NULL);
            setSvcDBUnLock();
        }
    }
#endif

  iRetCode = 0;
  dbg_trace("%s: -\n", __FUNCTION__);
  return iRetCode;
}

const char* DirectADK_ErrString(int err)
{
  return GetCommErrWrapper((enum com_ErrorCodes) err);
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
