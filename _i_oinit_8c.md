---
title: tmsagt/src/VHQIo/IOinit.c

---

# tmsagt/src/VHQIo/IOinit.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[SerOpen](_i_oinit_8c.md#function-seropen)**(char * pszPort) |
| void | **[SerClose](_i_oinit_8c.md#function-serclose)**() |
| void * | **[EventSchedulerInitCallbackTable](_i_oinit_8c.md#function-eventschedulerinitcallbacktable)**(char * pszOperatingMode) |
| bool | **[VHQioInitialize](_i_oinit_8c.md#function-vhqioinitialize)**(void ) |
| void | **[VHQioDeinitialize](_i_oinit_8c.md#function-vhqiodeinitialize)**() |
| char * | **[GetServerURL](_i_oinit_8c.md#function-getserverurl)**(void ) |
| void | **[VHQOpenComms](_i_oinit_8c.md#function-vhqopencomms)**(void ) |
| void | **[VHQCloseComms](_i_oinit_8c.md#function-vhqclosecomms)**(void ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[g_ui32CommError](_i_oinit_8c.md#variable-g-ui32commerror)**  |
| IO_Properties | **[g_sIoProperties](_i_oinit_8c.md#variable-g-sioproperties)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[_MAIN_LOOP_EXTERNS_](_i_oinit_8c.md#define--main-loop-externs-)**  |
|  | **[stricmp](_i_oinit_8c.md#define-stricmp)**  |
|  | **[strnicmp](_i_oinit_8c.md#define-strnicmp)**  |

## Detailed Description


Implements the wrappers for web services exported by VHQ server 


## Functions Documentation

### function SerOpen

```cpp
bool SerOpen(
    char * pszPort
)
```


### function SerClose

```cpp
void SerClose()
```


### function EventSchedulerInitCallbackTable

```cpp
void * EventSchedulerInitCallbackTable(
    char * pszOperatingMode
)
```


**Parameters**: 

  * **pszOperatingMode** = operating mode


**Return**: pointer to callback table. 

This function initializes the event scheduler callback table to launch an event. 


### function VHQioInitialize

```cpp
bool VHQioInitialize(
    void 
)
```


**Return**: void 

This function initializes the IO properties with data from config file. 


### function VHQioDeinitialize

```cpp
void VHQioDeinitialize()
```


**Return**: void 

This function de-initializes the IO properties with data from config file. 


### function GetServerURL

```cpp
char * GetServerURL(
    void 
)
```


**Return**: void 

This function gets the active server 


### function VHQOpenComms

```cpp
void VHQOpenComms(
    void 
)
```


### function VHQCloseComms

```cpp
void VHQCloseComms(
    void 
)
```



## Attributes Documentation

### variable g_ui32CommError

```cpp
int g_ui32CommError = 0;
```


### variable g_sIoProperties

```cpp
IO_Properties g_sIoProperties;
```



## Macros Documentation

### define _MAIN_LOOP_EXTERNS_

```cpp
#define _MAIN_LOOP_EXTERNS_ 
```


### define stricmp

```cpp
#define stricmp strcasecmp
```


### define strnicmp

```cpp
#define strnicmp strncasecmp
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#ifdef VHQ_CERT_VERIFIER
#include "VHQCertVerifier.h"
#else //VHQ_CERT_VERIFIER
#include "../inc/VHQTypes.h"
#define _MAIN_LOOP_EXTERNS_
#include "VHQIoInternals.h"
#include "VHQDebug.h"
#include "../inc/VHQIo.h"
#include <curl/curl.h>
#include "../inc/VHQConfig.h"
#include <string.h>
#endif // VHQ_CERT_VERIFIER
#include "ComIntf.h"
#include "VHQDownloader.h"

int g_ui32CommError = 0;

#if !defined(WIN32)
#define stricmp strcasecmp
#define strnicmp strncasecmp
#endif
bool SerOpen(char *pszPort);
void SerClose();
void* EventSchedulerInitCallbackTable(char *pszOperatingMode);

IO_Properties g_sIoProperties;


bool VHQioInitialize(void)
{
  char szOperatingMode[64];

  memset(&g_sIoProperties, 0, sizeof(g_sIoProperties));
  dbg_trace("VHQioInitialize: +\r\n");
  VHQGetParameterString(PARAM_URL_ROOT, g_sIoProperties.szHostURL,
                        sizeof(g_sIoProperties.szHostURL));

#ifdef _VOS2
  if (IsBaseDevice())
  {
    // Overwrite the operating mode to "Direct" as ADK is not supported on base
    VHQSetParameterString(PARAM_OPERATING_MODE, "Direct", sizeof("Direct"),
                          TRUE);
  }
#endif

  VHQGetParameterString(PARAM_OPERATING_MODE, szOperatingMode,
                        sizeof(szOperatingMode));

  g_sIoProperties.eMode = VHQ_MODE_DIRECT;

  dbg_msg("VHQioInitialize: eMode= %d, \r\n", g_sIoProperties.eMode);

  if ((g_sIoProperties.szHostURL[0] == 'h'
      || g_sIoProperties.szHostURL[0] == 'H')
      && (g_sIoProperties.szHostURL[1] == 't'
          || g_sIoProperties.szHostURL[1] == 'T')
      && (g_sIoProperties.szHostURL[2] == 't'
          || g_sIoProperties.szHostURL[2] == 'T')
      && (g_sIoProperties.szHostURL[3] == 'p'
          || g_sIoProperties.szHostURL[3] == 'P')
      && (g_sIoProperties.szHostURL[4] == 's'
          || g_sIoProperties.szHostURL[4] == 'S')
      && g_sIoProperties.szHostURL[5] == ':')
  {
    g_sIoProperties.bSSLEnabled = TRUE;
    sscanf(g_sIoProperties.szHostURL, "https://%64[^:]:%16d",
           g_sIoProperties.szIpAddr, &g_sIoProperties.iPort);
  }
  else
  {
    sscanf(g_sIoProperties.szHostURL, "http://%64[^:]:%16d",
           g_sIoProperties.szIpAddr, &g_sIoProperties.iPort);
  }
  dbg_msg("ip = \"%s\"\n", g_sIoProperties.szIpAddr);
  dbg_msg("port = \"%d\"\n", g_sIoProperties.iPort);

  VHQGetParameterString(PARAM_WEBPROXY_URL, g_sIoProperties.szWebProxy,
                        sizeof(g_sIoProperties.szWebProxy));
  if (0 != strlen(g_sIoProperties.szWebProxy))
  {
    g_sIoProperties.bUseWebProxy = TRUE;
  }
  VHQGetParameterBool(PARAM_WEBPROXY_ENABLETUNNEL,
                      (bool* )&g_sIoProperties.bUseWebProxyTunnel);

  VHQGetParameterString(PARAM_FTPPROXY_URL, g_sIoProperties.szFTPProxy,
                        sizeof(g_sIoProperties.szFTPProxy));
  if (0 != strlen(g_sIoProperties.szFTPProxy))
  {
    g_sIoProperties.bUseFTPProxy = TRUE;
  }
  VHQGetParameterBool(PARAM_FTP_FORCE_PASV, &g_sIoProperties.bFTPforcePASV);
  dbg_msg("VHQioInitialize: PARAM_FTP_FORCE_PASV = %d\n",
          g_sIoProperties.bFTPforcePASV);

  // Get download recover and resume parameters
  if (!VHQGetParameterUint32(PARAM_DL_MAX_ATTEMPTS,
                             (uint32* )&g_sIoProperties.iDLMaxAttempts,
                             BASE_10))
  {
    g_sIoProperties.iDLMaxAttempts = DL_MAX_ATTEMPTS;
  }
  if (!VHQGetParameterUint32(PARAM_DL_NETWORK_TIMEOUT,
                             (uint32* )&g_sIoProperties.iDLNetworkTimeout,
                             BASE_10))
  {
    g_sIoProperties.iDLNetworkTimeout = DL_NETWORK_TIMEOUT;
  }

  if (!VHQGetParameterUint32(PARAM_DL_RETRY_TIMEOUT,
                             (uint32* )&g_sIoProperties.iDLRetryTimeout,
                             BASE_10))
  {
    g_sIoProperties.iDLRetryTimeout = DL_RETRY_TIMEOUT;
  }
  // Get download receive buffer size - default is CURL_MAX_WRITE_SIZE which is 16K
  if (!VHQGetParameterUint32(PARAM_DL_BUFFERSIZE,
                             (uint32* )&g_sIoProperties.iDLRxBufferSize,
                             BASE_10))
  {
    g_sIoProperties.iDLRxBufferSize = 0;
  }
  dbg_msg("Download Max Attempts: %d\n", g_sIoProperties.iDLMaxAttempts);
  dbg_msg("Download Network Timeout: %d\n", g_sIoProperties.iDLNetworkTimeout);
  dbg_msg("Download Retry Timeout: %d\n", g_sIoProperties.iDLRetryTimeout);

  CommInit(szOperatingMode, g_sIoProperties.szVHQPhysProxyPort, NULL, NULL,
  NULL);
  curl_global_init(CURL_GLOBAL_ALL);

#ifndef VHQ_CERT_VERIFIER
  EventSchedulerInitCallbackTable(szOperatingMode);
#endif
  dbg_msg("VHQioInitialize: eMode= %d -\r\n", g_sIoProperties.eMode);
  return TRUE;
}


void VHQioDeinitialize()
{
#ifndef VHQ_CERT_VERIFIER
  curl_global_cleanup();
  //CommDeinit();
#endif
}


char* GetServerURL(void)
{
  return g_sIoProperties.szHostURL;
}

// called when the communications resource is needed so it can be opened if necessary
void VHQOpenComms(void)
{
  dbg_msg("%s: +\n", __FUNCTION__);
  dbg_msg("%s: -\n", __FUNCTION__);
}

void VHQCloseComms(void)
{
  dbg_msg("%s: +\n", __FUNCTION__);
  dbg_msg("%s: -\n", __FUNCTION__);
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
