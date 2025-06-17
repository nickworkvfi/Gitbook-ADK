---
title: tmsagt/src/VHQIo/VHQcURLconfiguration.c

---

# tmsagt/src/VHQIo/VHQcURLconfiguration.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[sockopt_callback](_v_h_qc_u_r_lconfiguration_8c.md#function-sockopt-callback)**(void * clientp, curl_socket_t curlfd, curlsocktype purpose) |
| int | **[Mycurl_debug_callback](_v_h_qc_u_r_lconfiguration_8c.md#function-mycurl-debug-callback)**(CURL * handle, curl_infotype type, char * data, size_t size, void * userp) |
| size_t | **[write_header](_v_h_qc_u_r_lconfiguration_8c.md#function-write-header)**(void * ptr, size_t size, size_t nmemb, void * data) |
| int | **[cURLsetMandatoryConfig](_v_h_qc_u_r_lconfiguration_8c.md#function-curlsetmandatoryconfig)**(CURL * curl) |

## Detailed Description


Main cURL configuration settings operations 


## Functions Documentation

### function sockopt_callback

```cpp
static int sockopt_callback(
    void * clientp,
    curl_socket_t curlfd,
    curlsocktype purpose
)
```


**Parameters**: 

  * **clientp** = contains whatever user-defined value set using the CURLOPT_SOCKOPTDATA function. 
  * **curlfd** = libcurl passes the newly created socket descriptor to the callback 
  * **purpose** = identifies the exact purpose for a particular socket


**Return**: int 0, if failed 

This callback function gets called by libcurl when the socket has been created, but before the connect call, to allow applications to change specific socket options. 


### function Mycurl_debug_callback

```cpp
static int Mycurl_debug_callback(
    CURL * handle,
    curl_infotype type,
    char * data,
    size_t size,
    void * userp
)
```


**Parameters**: 

  * **handle** = handle 
  * **type** = debug information of this type is received 
  * **data** = data 
  * **size** = size of data 
  * **userp** = not used by curl, given in CURLOPT_DEBUGDATA.


**Return**: int 0, if failed 

This callback receives debug information, as specified in the type argument. This function must return 0. 


### function write_header

```cpp
static size_t write_header(
    void * ptr,
    size_t size,
    size_t nmemb,
    void * data
)
```


### function cURLsetMandatoryConfig

```cpp
int cURLsetMandatoryConfig(
    CURL * curl
)
```


**Parameters**: 

  * **curl** =a CURL easy handle returned by curl initialization.


**Return**: int 0, if success; -1, if error 

This function sets the different configurations for curl handle. 




## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include "VHQcURLconfiguration.h"

#ifdef VHQ_CERT_VERIFIER
    #include "VHQCertVerifier.h"
#else
#include "VHQConfig.h"
#include "VHQTypes.h"
#include "VHQDebug.h"
#include <errno.h>
#endif


static int sockopt_callback(void *clientp, curl_socket_t curlfd,
                            curlsocktype purpose)
{
  (void) clientp;

  int rc, iNoDataTransmit;
  struct timeval next_timeout;
  struct sockaddr_in addr;
  uint32 len = sizeof(struct sockaddr);
  int ret = 0;

  if (purpose != CURLSOCKTYPE_IPCXN)
    return 0;

  memset(&next_timeout, 0, sizeof(struct timeval));
  VHQGetParameterUint32(PARAM_CURL_NODATA_TRANSMIT, (uint32* )&iNoDataTransmit,
                        DEFAULT_BASE);
  next_timeout.tv_sec = iNoDataTransmit;

  /* Do not wait more than required for reading from a socket. Critical for SSL_read() call */
  rc = setsockopt(curlfd, SOL_SOCKET, SO_RCVTIMEO, (void*) &next_timeout,
                  sizeof(struct timeval));
  if (rc < 0)
    dbg_msg("%s: unable to set SO_RCVTIMEO on socket, errno %d (%s)\n",
            __FUNCTION__, errno, strerror(errno));
  else
    dbg_msg("%s: SO_RCVTIMEO applied to the socket %d\n", __FUNCTION__, curlfd);

  /* We need to know which state we have before return from this callback.
   * This is important part:
   *  - cURL will call connect() in case if callback returns 0
   *  - cURL will stop next processing if callback returns -1 */
  rc = getsockname(curlfd, (struct sockaddr*) &addr, &len);
  if (rc < 0)
  {
    dbg_msg(
        "%s: unable to get socket info, errno %d (%s). Try to process socket on cURL side\n",
        __FUNCTION__, errno, strerror(errno));
    return 0;
  }
  else
  {
#ifdef WIN32
        /* For Windows we have no already opened socket */
        return 0;
#else
    char addr_str[IP_ADDR_LEN] = { 0 };
    snprintf(addr_str, sizeof(addr_str), "%s", inet_ntoa(addr.sin_addr.s_addr));
    if (ISvalidIP(addr_str) && ntohs(addr.sin_port))
    {
      dbg_msg("%s: socket connected at %s:%d\n", __FUNCTION__, addr_str,
              ntohs(addr.sin_port));
      ret = CURL_SOCKOPT_ALREADY_CONNECTED;
    }
#endif //WIN32
  }
  return ret;
}

static int Mycurl_debug_callback(CURL *handle, curl_infotype type, char *data,
                                 size_t size, void *userp)
{
  UNUSED(size);
  char *transfer_protocol = (char*) userp;
  const char *text;
  char *con_len = NULL;
  int content_length = 0;
  (void) handle; /* prevent compiler warning */

  switch (type)
  {
    case CURLINFO_TEXT:
      dbg_msg("== Info: %s", data);
    default: /* in case a new one is introduced to shock us */
      return 0;
    case CURLINFO_HEADER_OUT:
      dbg_trace("Send header: %d bytes\n", size);
      break;
    case CURLINFO_DATA_OUT:
      dbg_trace("Send data: %d bytes\n", size);
#ifndef WIN32
//      DebugMsgBuffer("CURLINFO_DATA_OUT Buffer is: ", (unsigned char *)data, size, BUF_TYPE_CHAR);
#endif
      return 0;
    case CURLINFO_SSL_DATA_OUT:
      dbg_trace("Send SSL data: %d bytes\n", size);
      break;
    case CURLINFO_HEADER_IN:
      dbg_trace("Recv header: %d bytes\n", size);
      if ((NULL != transfer_protocol) && !(strcmp(transfer_protocol, "ftp")))
      {
        con_len = strstr(data, "Content-Length: ");
        if (con_len)
        {
          sscanf(con_len, "Content-Length: %d", &content_length);
          log_dbg("Content length = %d \n", content_length);
        }
      }
      break;
    case CURLINFO_DATA_IN:
      dbg_trace("Recv data: %d bytes\n", size);
#ifndef WIN32
//      DebugMsgBuffer("CURLINFO_DATA_IN Buffer is: ", (unsigned char *)data, size, BUF_TYPE_CHAR);
#endif
      return 0;
      break;
    case CURLINFO_SSL_DATA_IN:
      dbg_trace("Recv SSL data: %d bytes\n", size);
      break;
  }
#ifndef WIN32
//  DebugMsgBuffer("Mycurl_debug_callback Buffer is: ", (unsigned char *)data, size, BUF_TYPE_HEX);
#endif
  return 0;
}

static size_t write_header(void *ptr, size_t size, size_t nmemb, void *data)
{
  UNUSED(data);
#ifndef VHQ_CERT_VERIFIER
  DebugMsgBuffer("Header data: ", (unsigned char*) ptr, size * nmemb - 1,
                 BUF_TYPE_CHAR);
#endif
  return nmemb * size;
}

int cURLsetMandatoryConfig(CURL *curl)
{
  if (!curl)
    return -1;

  /* Socket options handler */
  if (IScURLversionCompatible(curl, 0x071000))
    curl_easy_setopt(curl, CURLOPT_SOCKOPTFUNCTION, sockopt_callback);
  else
    log_err("%s: Fail to setup CURLOPT_SOCKOPTFUNCTION\n", __FUNCTION__);

#ifndef WIN32
  if (GetLoggingLevel() >= VHQ_LOGGING_LEVEL_DEBUG)
#endif
  {
#ifndef SHIP_BUILD
    curl_easy_setopt(curl, CURLOPT_VERBOSE, 1L);
    curl_easy_setopt(curl, CURLOPT_DEBUGFUNCTION, Mycurl_debug_callback);
    curl_easy_setopt(curl, CURLOPT_HEADERFUNCTION, write_header);
#endif
  }

  /* ADKTMS-1361: Prevent crash inside of cURL. This is known issue for threads, starts from cURL 7.10 */
  curl_easy_setopt(curl, CURLOPT_NOSIGNAL, 1L);

  curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "");

  return 0;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
