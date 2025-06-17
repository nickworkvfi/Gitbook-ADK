---
title: tmsagt/src/VHQIo/http_get_curl.c

---

# tmsagt/src/VHQIo/http_get_curl.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MemoryStruct](struct_memory_struct.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| size_t | **[WriteMemoryCallback](http__get__curl_8c.md#function-writememorycallback)**(void * contents, size_t size, size_t nmemb, void * userp) |
| void | **[W3Unescape](http__get__curl_8c.md#function-w3unescape)**(char * pBuffer, int * piLen) |
| vhq_result_t | **[http_post_curl](http__get__curl_8c.md#function-http-post-curl)**(const char * pszUrl, const char * pszRelativeURL, const char * content, char * response, int response_len) |
| bool | **[http_post_curl2](http__get__curl_8c.md#function-http-post-curl2)**(const char * pszUrl, const char * pszRelativeURL, const char * content, char * response, int response_len) |
| void | **[ServerPing](http__get__curl_8c.md#function-serverping)**() |
| bool | **[http_get_curl](http__get__curl_8c.md#function-http-get-curl)**(const char * pszUrl, const char * pszRelativeURL, const char * content, char * response, int response_len) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MY_DEBUG_ZONE](http__get__curl_8c.md#define-my-debug-zone)**  |
|  | **[min](http__get__curl_8c.md#define-min)**(X, Y)  |
|  | **[CURL_MAX_READ_BLOCK_SIZE](http__get__curl_8c.md#define-curl-max-read-block-size)**  |

## Detailed Description


Main VHQ XML Packager operations 


## Functions Documentation

### function WriteMemoryCallback

```cpp
static size_t WriteMemoryCallback(
    void * contents,
    size_t size,
    size_t nmemb,
    void * userp
)
```


**Parameters**: 

  * **contents** = points to delivered data 
  * **size** = is 1. 
  * **nmemb** = size of data delivered 
  * **userp** = passed in with CURLOPT_WRITEDATA.


**Return**: 0, if failed; size of data otherwise 

This function is a callback function which gets called gets called by libcurl as soon as there is data received that needs to be saved. 


### function W3Unescape

```cpp
void W3Unescape(
    char * pBuffer,
    int * piLen
)
```


### function http_post_curl

```cpp
vhq_result_t http_post_curl(
    const char * pszUrl,
    const char * pszRelativeURL,
    const char * content,
    char * response,
    int response_len
)
```


**Parameters**: 

  * **pszUrl** = URL of server 
  * **pszRelativeURL** = Postpayload 
  * **content** = device message to send 
  * **response** = buffer to store response from server 
  * **response_len** = length of server response


**Return**: TRUE, if success; FALSE, if failure 

This function initializes and configure CURL, calls ADK functions to establish server connection, fetches server response. 


### function http_post_curl2

```cpp
bool http_post_curl2(
    const char * pszUrl,
    const char * pszRelativeURL,
    const char * content,
    char * response,
    int response_len
)
```


### function ServerPing

```cpp
void ServerPing()
```


**Parameters**: 

  * **void** 


**Return**: void 

This function ping the server. 


### function http_get_curl

```cpp
bool http_get_curl(
    const char * pszUrl,
    const char * pszRelativeURL,
    const char * content,
    char * response,
    int response_len
)
```




## Macros Documentation

### define MY_DEBUG_ZONE

```cpp
#define MY_DEBUG_ZONE DEBUG_ZONE_KMAILMAN
```


### define min

```cpp
#define min(
    X,
    Y
)
((X) < (Y) ? (X) : (Y))
```


### define CURL_MAX_READ_BLOCK_SIZE

```cpp
#define CURL_MAX_READ_BLOCK_SIZE 2048
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#ifdef VHQ_CERT_VERIFIER
#include "VHQCertVerifier.h"
#else //VHQ_CERT_VERIFIER
#include <stdio.h>
#include <stdlib.h>

#include <malloc.h>

#if !defined(WIN32)
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

#include "curl/curl.h"
#endif
#include "../inc/VHQTypes.h"
//#include "../inc/VHQIo.h"
#include "VHQUtils.h"
#include "VHQFileNames.h"
#include "VHQIo.h"

#include <string.h>
#include <errno.h>
#include "VHQDebug.h"
#include "../inc/VHQConfig.h"
#include "../inc/VHQFileNames.h"
#define MY_DEBUG_ZONE DEBUG_ZONE_KMAILMAN
#include <zlib.h>
#endif // VHQ_CERT_VERIFIER
#include "ComIntf.h"
#include "VHQConfig.h"
#include "VHQcURLconfiguration.h"

#define min(X, Y)  ((X) < (Y) ? (X) : (Y))

#define CURL_MAX_READ_BLOCK_SIZE        2048

struct MemoryStruct
{
  char *memory;
  size_t size;
};

static size_t WriteMemoryCallback(void *contents, size_t size, size_t nmemb,
                                  void *userp)
{
  size_t realsize = size * nmemb;
  int iMallocRetries = 0;
  char *newmem;
  struct MemoryStruct *mem = (struct MemoryStruct*) userp;

  do
  {
    newmem = realloc(mem->memory, mem->size + realsize + 1);
  }
  while (newmem == 0 && errno == EINTR && iMallocRetries++ < 10);
  if (newmem == NULL)
  {
    /* out of memory! */
    // Debug messages for rare errors is ok
    dbg_msg("not enough memory (realloc returned NULL)\n");
    dbg_err("WriteMemoryCallback: -(failed, OutOfMemory)\n");
    log_err("not enough memory (realloc returned NULL)\n");
    log_err("WriteMemoryCallback: -(failed, OutOfMemory)");
    return 0;
  }
  mem->memory = newmem;

  memcpy(&(mem->memory[mem->size]), contents, realsize);
  mem->size += realsize;
  mem->memory[mem->size] = 0;
  return realsize;
}

void W3Unescape(char *pBuffer, int *piLen)
{
  int iLen = *piLen;
  while (iLen > 0)
  {
    if ('&' == *pBuffer)
    {
      if (0 == strncmp(pBuffer + 1, "gt;", 3))
      {
        *pBuffer = '>';
        pBuffer++;
        iLen -= 4;
        if (iLen)
          memmove(pBuffer, pBuffer + 3, iLen);
        *piLen -= 3;
      }
      else if (0 == strncmp(pBuffer + 1, "lt;", 3))
      {
        *pBuffer = '<';
        pBuffer++;
        iLen -= 4;
        if (iLen)
          memmove(pBuffer, pBuffer + 3, iLen);
        *piLen -= 3;
      }
      else if (0 == strncmp(pBuffer + 1, "amp;", 4))
      {
        *pBuffer = '&';
        pBuffer++;
        iLen -= 5;
        if (iLen)
          memmove(pBuffer, pBuffer + 4, iLen);
        *piLen -= 4;
      }
      else if (0 == strncmp(pBuffer + 1, "quot;", 5))
      {
        *pBuffer = '"';
        pBuffer++;
        iLen -= 6;
        if (iLen)
          memmove(pBuffer, pBuffer + 5, iLen);
        *piLen -= 5;
      }
      else if (0 == strncmp(pBuffer + 1, "apos;", 5))
      {
        *pBuffer = '\'';
        pBuffer++;
        iLen -= 6;
        if (iLen)
          memmove(pBuffer, pBuffer + 5, iLen);
        *piLen -= 5;
      }
      else
      {
        pBuffer++;
        iLen--;
      }
    }
    else
    {
      pBuffer++;
      iLen--;
    }
  }
}

#ifdef COMPRESS_UPLOADS
// caller needs to clean the buffer if successful
bool DeflateContent(const char *content,
        void **result, long *size)
{
    char *pCompressed = NULL;
    long newSize = compressBound(*size);

    pCompressed = (char *)malloc(newSize);
    if (pCompressed)
    {
        if (Z_OK == compress2(pCompressed, &newSize, content, *size, Z_BEST_COMPRESSION))
        {
            *size = newSize;
            *result = (void *)pCompressed;
            return TRUE;
        }
    }

    // error, clean up
    if (pCompressed)
        free(pCompressed);
    return FALSE;
}
#endif


vhq_result_t http_post_curl(const char *pszUrl, const char *pszRelativeURL,
                            const char *content, char *response,
                            int response_len)
{
  char soapActionStr[256];
  int networkErr = 0;
  vhq_result_t retVal = VHQ_SUCCESS;
  struct MemoryStruct chunk;
  bool bCheckHostname;
  bool bVerifyPeer;
  //bool bVerifyPeer, bCheckExpiration;
  int iMallocRetries = 0;
  int iNoDataTransmit = 120;
  struct curl_slist *headerlist = NULL;
  struct curl_slist *dns = NULL;
  char *pszCurlError = NULL;
  CURL *curl = NULL;
  CURLcode res;
  long fsize;
  CommOpenData open_data;
#ifdef COMPRESS_UPLOADS
    void *pCompressCleanup = NULL;
#endif
  char hostname[256] = { 0 };
  static CURLSH *share = NULL;

  memset(&open_data, 0, sizeof(open_data));

  if (!pszUrl || !pszRelativeURL || !content || !response)
  {
    log_err("%s: ERROR no data!!!\n", __FUNCTION__);
    return FALSE;
  }

  dbg_trace("%s: +\n", __FUNCTION__);

  fsize = strlen(content);
  memset(response, 0, response_len);

  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);

  do
  {
    chunk.memory = malloc(1); /* will be grown as needed by the realloc above */
  }
  while (chunk.memory == NULL && errno == EINTR && iMallocRetries++ < 10);
  if (chunk.memory == NULL)
  {
    dbg_err("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    log_err("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    return FALSE;
  }
  chunk.size = 0; /* no data at this point */

  if (NULL == share)
  {
    share = curl_share_init();

    if (NULL != share)
    {
      // Use curl share for SSL resume
      curl_share_setopt(share, CURLSHOPT_SHARE, CURL_LOCK_DATA_SSL_SESSION);
      dbg_msg("%s: at %d, curl SSL session share %x\n", __FUNCTION__, __LINE__,
              share);
    }
  }

  curl = curl_easy_init();
  if (NULL == curl)
  {
    log_err("%s: curl_easy_init returned NULL, errno %d\n", __FUNCTION__,
            errno);
    free(chunk.memory);
    return FALSE;
  }

  if (NULL != share)
  {
    CURLSHcode sh;

    sh = curl_easy_setopt(curl, CURLOPT_SHARE, share);

    if (sh)
    {
      dbg_err("%s: at %d, SSL session erro %s\n", __FUNCTION__, __LINE__,
              curl_share_strerror(sh));
    }
  }

  // update required fields
  cURLsetMandatoryConfig(curl);

  // check these here (at go time) so that if the in-memory choice is updated by an update operation from the server

  dbg_msg("%s: at %d, setting URL to %s\r\n", __FUNCTION__, __LINE__, pszUrl);

#ifdef WIN32
    if ((pszUrl[0]=='h' || pszUrl[0]=='H') &&
            (pszUrl[1]=='t' || pszUrl[1]=='T') &&
            (pszUrl[2]=='t' || pszUrl[2]=='T') &&
            (pszUrl[3]=='p' || pszUrl[3]=='P') &&
            (pszUrl[4]=='s' || pszUrl[4]=='S') &&
            pszUrl[5]==':')
    {
        g_sIoProperties.bSSLEnabled = TRUE;
    }
#endif

  open_data.curl = curl;
  // make it use the ADK functions if necessary
  networkErr = CommOpen(&open_data);

  if (g_sIoProperties.bSSLEnabled == TRUE)
    sscanf(pszUrl, "https://%[^/]", hostname);
  else
    sscanf(pszUrl, "http://%[^/]", hostname);

  if (networkErr == 0 && !ISvalidIP(hostname))
  {
    struct sockaddr_in addr;
    socklen_t addrlen = sizeof(addr);
    int socket_fd = open_data.socketFd;

    dbg_msg("%s: socket is %d \r\n", __FUNCTION__, socket_fd);

    if (getpeername(socket_fd, (struct sockaddr*) &addr, &addrlen) == 0)
    {
      char ip[INET6_ADDRSTRLEN] = { 0 };
      char str[256] = { 0 };
      int port = 0;

      inet_ntop(addr.sin_family, &addr.sin_addr, ip, sizeof(ip));
      port = ntohs(addr.sin_port);

      dbg_msg("We are connected to %s:%d\n", ip, port);
      /* construct a string of the format <URL>:<PORT>:<IP ADDR>
       This instructs the libCurl to use the specified IP Address for the URL without doing another DNS query
       For example
       google.com:443:172.217.21.238
       */

      snprintf(str, sizeof(str) - 1, "%s:%d:%s", hostname, port, ip);
      log_dbg("Connected to: %s\n", str);
      dns = curl_slist_append(dns, str);
      curl_easy_setopt(curl, CURLOPT_RESOLVE, dns);
    }
    else
    {
      log_err("%s: Failed to explicitly resolve DNS\n", __FUNCTION__);
    }
  }
  else
  {
    retVal = VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_BASE + networkErr;
    snprintf(response, response_len, "\nADK COM error: %s",
             open_data.networkErrorString);
  }

  curl_easy_setopt(curl, CURLOPT_URL, pszUrl);

  curl_easy_setopt(curl, CURLOPT_POST, 1);
  curl_easy_setopt(curl, CURLOPT_HEADER, 1);

  curl_slist_free_all(headerlist);
  headerlist = curl_slist_append(headerlist,
                                 "Content-Type: text/xml; charset=utf-8");
  sprintf(soapActionStr, "SOAPAction: \"http://MessagingServer/%s\"",
          pszRelativeURL);
  headerlist = curl_slist_append(headerlist, soapActionStr);
  headerlist = curl_slist_append(headerlist, "Accept:");
  headerlist = curl_slist_append(headerlist, "Expect: 100-Continue");
  if (!g_sIoProperties.bSSLEnabled && !g_sIoProperties.bUseWebProxy)
  {
    headerlist = curl_slist_append(headerlist, "Transfer-Encoding: chunked");
    dbg_msg("%s: at %d\n", __FUNCTION__, __LINE__);
    dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__,
            fsize);
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "http_get_curl: content is %s\n", content);
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, content);
    curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, fsize);
  }
#ifdef COMPRESS_UPLOADS
    else
    {
        void *pNew;
        long size= strlen(content);
        dbg_msg(  "Skipping chunked encoding for SSL & Proxy\n");

        dbg_msg( "%s: at %d\n", __FUNCTION__, __LINE__);
        dbg_msg( "%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);

        if (FALSE && DeflateContent(content, &pNew, &size))
        {
            headerlist = curl_slist_append(headerlist, "Content-Encoding: gzip");
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, pNew);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, size);
            dbg_msg( "%s: at %d, compression successful, new size is %d\n", __FUNCTION__, __LINE__, size);
            pCompressCleanup = pNew;
        }
        else
        {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, content);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, fsize);
        }

    }
#else
  {
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, content);
    curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, fsize);
  }
#endif
  headerlist = curl_slist_append(headerlist, "Connection: Keep-Alive");

  dbg_msg("%s: at %d\r\n", __FUNCTION__, __LINE__);
  if (g_sIoProperties.bUseWebProxy)
  {
    curl_easy_setopt(curl, CURLOPT_PROXY, g_sIoProperties.szWebProxy);
    if (g_sIoProperties.bUseWebProxyTunnel)
      curl_easy_setopt(curl, CURLOPT_HTTPPROXYTUNNEL, 1);
  }

  if (g_sIoProperties.bSSLEnabled == TRUE)
  {
    char SSLFileName[512];

    memset(SSLFileName, 0, sizeof(SSLFileName));

    VHQGetParameterBool(PARAM_SSL_PEER_VALIDATION, &bVerifyPeer);
    VHQGetParameterBool(PARAM_SSL_MATCH_HOSTNAME, &bCheckHostname);

    curl_easy_setopt(curl, CURLOPT_USE_SSL, CURLUSESSL_ALL);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, bVerifyPeer ? 1L : 0L);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, bCheckHostname ? 2L : 0L);

    if (IScURLversionCompatible(curl, 0x072700))
      curl_easy_setopt(curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
    else
      log_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n", __FUNCTION__);

    GetFileNameForInstance(SSLFileName, (char*) SRV_SSL_CERTFILE,
                           GetCurrentInstance());

    curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);
#if defined(Mx2)
    dbg_notice(
        "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
        __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
        SSLFileName, VHQ_MAIN_FOLDER);
    curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
        dbg_notice("%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n",
                __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0), SSLFileName);
#endif
  }

  // new error handling code
  curl_easy_setopt(curl, CURLOPT_FAILONERROR, 1L);
  pszCurlError = malloc(CURL_ERROR_SIZE);
  if (pszCurlError)
  {
    memset(pszCurlError, 0, CURL_ERROR_SIZE);
    curl_easy_setopt(curl, CURLOPT_ERRORBUFFER, pszCurlError);
  }

  /* send all data to this function  */
  curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteMemoryCallback);
  /* we pass our 'chunk' struct to the callback function */
  curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void* )&chunk);

//  curl_easy_setopt(curl, CURLOPT_HTTP_CONTENT_DECODING, 1);
//  curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "utf-8");
//  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, "text/xml; charset=utf-8");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerlist);
  curl_easy_setopt(curl, CURLOPT_USERAGENT,
                   "Mozilla/4.0 (compatible;VHQ-mx-user-agent-1.x)");

  // calculating the libcurl timeouts
  {
    int iUploadSize = fsize;
    int iNumBlocks = (iUploadSize / 32768) + 1;
    int iTimeout;

    VHQGetParameterUint32(PARAM_CURL_NODATA_TRANSMIT,
                          (uint32* )&iNoDataTransmit, DEFAULT_BASE);
    iTimeout = iNoDataTransmit * iNumBlocks;

    // set a cap on the timeouts for just under the max thread watchdog times
    if (iTimeout > (8L * 3600 - 300))
      iTimeout = (8L * 3600 - 300);  // eight hours- 5 minutes

    dbg_msg("%s: setting op timeout to %d(block timeout=%d*%d)\n", __FUNCTION__,
            iTimeout, iNoDataTransmit, iNumBlocks);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, (long )iTimeout);
  }

  {
    // capture and save the IP address
    char szIp[64];
    if (GetIPAddress(szIp, sizeof(szIp)) < 0)
    {
      dbg_err("%s: getIPAddress fails!\n", __FUNCTION__);
      if (networkErr == 0)
      {
        retVal = VHQ_SERVER_POST_PAYLOAD_NETWORK_ERROR;
        snprintf(response, response_len, "\nerror: %s",
                 "Please check network connection\n");
      }
      goto closeCurl;
    }
  }

  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 1L);
  dbg_msg("setting low speed time: %ld\n",
          (long )g_sIoProperties.iDLNetworkTimeout);
  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME,
                   (long )g_sIoProperties.iDLNetworkTimeout);
  /* set DNS Cache to never timeout */
  curl_easy_setopt(curl, CURLOPT_DNS_CACHE_TIMEOUT, -1L);

#if !defined(_RFS) && !defined(WIN32)
  curl_easy_setopt(curl, CURLOPT_TCP_KEEPALIVE, 1L);
#endif

  res = curl_easy_perform(curl);
  dbg_msg("%s: res=%d at %d\n", __FUNCTION__, res, __LINE__);

  if (res == CURLE_SSL_CACERT)
  {
    log_err("%s: Certificate expired, trying with default cert\n",
            __FUNCTION__);

    if (g_sIoProperties.bSSLEnabled == TRUE)
    {
      char SSLFileName[512];

      memset(SSLFileName, 0, sizeof(SSLFileName));

      GetFileNameForInstance(SSLFileName, (char*) VHQ_PROD_SRV_SSL_CERTFILE,
                             GetCurrentInstance());

      curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);

      dbg_notice("%s: Setting up CURL for SSL CAINFO = %s, CAPATH = %s\n",
                 __FUNCTION__, SSLFileName, VHQ_HOME_FOLDER);
      curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_HOME_FOLDER);

      res = curl_easy_perform(curl);
      dbg_msg("%s: res=%d at %d\n", __FUNCTION__, res, __LINE__);
    }
  }

#ifdef COMPRESS_UPLOADS
    if (pCompressCleanup)
    {
        free(pCompressCleanup);
        pCompressCleanup = NULL;
    }
#endif

  if (res == CURLE_OK)
  {
    if (chunk.size)
    {
      log_dbg("%s: Successfully received\n", __FUNCTION__);
      W3Unescape(chunk.memory, (int*) &chunk.size);
      dbg_notice("%s: Unescaped: %s\n", __FUNCTION__, chunk.memory);
      retVal = VHQ_SUCCESS;

      if (chunk.size > (uint32) response_len)
      {
        dbg_err(
            "%s: ERROR: output buffer too small, returning truncated data\n",
            __FUNCTION__);
        retVal = VHQ_SERVER_POST_PAYLOAD_FAILURE;
      }
      memset(response, 0, response_len);
      snprintf(response, response_len, "%s", chunk.memory);
    }
    else
    {
      dbg_err("%s: Received buffer is empty\n", __FUNCTION__);
    }
  }
  else
  {
    if (res == CURLE_COULDNT_CONNECT && retVal != VHQ_SUCCESS)
    {
      log_err("%s: Connection error: %d\n", __FUNCTION__, retVal);
    }
    else
    {
      retVal = VHQ_SERVER_POST_PAYLOAD_CURL_BASE + res;
    }

    if (pszCurlError)
    {
      snprintf(response, response_len, "\nlibcurl error: %s", pszCurlError);
    }
  }
  {
    double dDataRecvd = 0.0;
    double dDataSent = 0.0;
    curl_easy_getinfo(curl, CURLINFO_SIZE_UPLOAD, &dDataSent);
    curl_easy_getinfo(curl, CURLINFO_SIZE_DOWNLOAD, &dDataRecvd);
    dbg_notice("%s: curl_easy_perform returned %d, sent: %f recd: %f\n",
               __FUNCTION__, res, dDataSent, dDataRecvd);
  }

  closeCurl: curl_slist_free_all(dns);
  curl_slist_free_all(headerlist);
  free(chunk.memory);

  /* always cleanup */
  curl_easy_cleanup(curl);
  CommClose(&open_data);
  curl = NULL;

  if (pszCurlError)
    free(pszCurlError);

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return retVal;
}

//
//  http_post_curl()
//
bool http_post_curl2(const char *pszUrl, const char *pszRelativeURL,
                     const char *content, char *response, int response_len)
{
  char soapActionStr[256];
  bool bRetVal = TRUE;
  struct MemoryStruct chunk;
  bool bCheckHostname;
  bool bVerifyPeer;
  //bool bVerifyPeer, bCheckExpiration;
  int iMallocRetries = 0;
  int iNoDataTransmit = 120;
  struct curl_slist *headerlist = NULL;
  char *pszCurlError = NULL;
  CURL *curl;
  CURLcode res;
  long fsize;
  CommOpenData open_data;
  memset(&open_data, 0, sizeof(open_data));

  dbg_trace("%s: +\n", __FUNCTION__);

  if (content)
    fsize = strlen(content);
  else
    return FALSE;

  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);

  if (response)
    memset(response, 0, response_len);
  else
    return FALSE;

  do
  {
    chunk.memory = malloc(1); /* will be grown as needed by the realloc above */
  }
  while (chunk.memory == NULL && errno == EINTR && iMallocRetries++ < 10);
  if (chunk.memory == NULL)
  {
    dbg_err("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    log_err("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    return FALSE;
  }
  chunk.size = 0; /* no data at this point */

  dbg_msg("%s: at %d\n", __FUNCTION__, __LINE__);
  curl = curl_easy_init();
  if (NULL == curl)
  {
    log_err("%s: curl_easy_init returned NULL, errno %d\n", __FUNCTION__,
            errno);
    free(chunk.memory);
    return FALSE;
  }

  open_data.curl = curl;
  // make it use the ADK functions if necessary
  CommOpen(&open_data);
  // update required fields
  cURLsetMandatoryConfig(curl);

  // check these here (at go time) so that if the in-memory choice is updated by an update operation from the server
  dbg_msg("%s: at %d, setting URL to %s\r\n", __FUNCTION__, __LINE__, pszUrl);

#ifdef WIN32
    if ((pszUrl[0] == 'h' || pszUrl[0] == 'H') &&
        (pszUrl[1] == 't' || pszUrl[1] == 'T') &&
        (pszUrl[2] == 't' || pszUrl[2] == 'T') &&
        (pszUrl[3] == 'p' || pszUrl[3] == 'P') &&
        (pszUrl[4] == 's' || pszUrl[4] == 'S') &&
        pszUrl[5] == ':')
    {
        g_sIoProperties.bSSLEnabled = TRUE;
    }
#endif

  curl_easy_setopt(curl, CURLOPT_URL, pszUrl);

  curl_easy_setopt(curl, CURLOPT_POST, 1);
  curl_easy_setopt(curl, CURLOPT_HEADER, 1);

  curl_slist_free_all(headerlist);
  headerlist = curl_slist_append(headerlist,
                                 "Content-Type: text/xml; charset=utf-8");
  sprintf(soapActionStr, "SOAPAction: \"%s\"", pszRelativeURL);
  headerlist = curl_slist_append(headerlist, soapActionStr);
  headerlist = curl_slist_append(headerlist, "Accept:");
  headerlist = curl_slist_append(headerlist, "Expect: 100-Continue");
  if (!g_sIoProperties.bSSLEnabled && !g_sIoProperties.bUseWebProxy)
  {
    headerlist = curl_slist_append(headerlist, "Transfer-Encoding: chunked");
  }
  else
  {
    dbg_msg("Skipping chunked encoding for SSL & Proxy\n");
  }
  headerlist = curl_slist_append(headerlist, "Connection: Keep-Alive");

  dbg_msg("%s: at %d\r\n", __FUNCTION__, __LINE__);
  if (g_sIoProperties.bUseWebProxy)
  {
    curl_easy_setopt(curl, CURLOPT_PROXY, g_sIoProperties.szWebProxy);
    if (g_sIoProperties.bUseWebProxyTunnel)
      curl_easy_setopt(curl, CURLOPT_HTTPPROXYTUNNEL, 1);
  }

  if (g_sIoProperties.bSSLEnabled)
  {
    char SSLFileName[512];

    memset(SSLFileName, 0, sizeof(SSLFileName));
    GetFileNameForInstance(SSLFileName, (char*) SRV_SSL_CERTFILE,
                           GetCurrentInstance());

    VHQGetParameterBool(PARAM_SSL_PEER_VALIDATION, &bVerifyPeer);
    VHQGetParameterBool(PARAM_SSL_MATCH_HOSTNAME, &bCheckHostname);

    curl_easy_setopt(curl, CURLOPT_USE_SSL, CURLUSESSL_ALL);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, bVerifyPeer ? 1L : 0L);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, bCheckHostname ? 2L : 0L);

    if (IScURLversionCompatible(curl, 0x072700))
      curl_easy_setopt(curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
    else
      log_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n", __FUNCTION__);

    curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);
#if defined(Mx2)
    dbg_notice(
        "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
        __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
        SSLFileName, VHQ_MAIN_FOLDER);
    curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
        dbg_msg("%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n",
                __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0), SSLFileName);
#endif
  }

  dbg_msg("%s: at %d\n", __FUNCTION__, __LINE__);
  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, content);
  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);

  // new error handling code
  curl_easy_setopt(curl, CURLOPT_FAILONERROR, 1L);
  pszCurlError = malloc(CURL_ERROR_SIZE);
  if (pszCurlError)
  {
    memset(pszCurlError, 0, CURL_ERROR_SIZE);
    curl_easy_setopt(curl, CURLOPT_ERRORBUFFER, pszCurlError);
  }

  curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, fsize);
  /* send all data to this function  */
  curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteMemoryCallback);
  /* we pass our 'chunk' struct to the callback function */
  curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void* )&chunk);

  //  curl_easy_setopt(curl, CURLOPT_HTTP_CONTENT_DECODING, 1);
  //  curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "utf-8");
  //  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, "text/xml; charset=utf-8");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerlist);
  curl_easy_setopt(curl, CURLOPT_USERAGENT,
                   "Mozilla/4.0 (compatible;VHQ-mx-user-agent-1.x)");

  // calculating the libcurl timeouts
  {
    int iUploadSize = fsize;
    int iNumBlocks = (iUploadSize / 32768) + 1;
    int iTimeout;

    VHQGetParameterUint32(PARAM_CURL_NODATA_TRANSMIT,
                          (uint32* )&iNoDataTransmit, DEFAULT_BASE);
    iTimeout = iNoDataTransmit * iNumBlocks;

    // set a cap on the timeouts for just under the max thread watchdog times
    if (iTimeout > (8L * 3600 - 300))
      iTimeout = (8L * 3600 - 300);  // eight hours- 5 minutes

    dbg_msg("%s: setting op timeout to %d(block timeout=%d*%d)\n", __FUNCTION__,
            iTimeout, iNoDataTransmit, iNumBlocks);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, (long )iTimeout);
  }

  {
    // capture and save the IP address
    char szIp[64];
    if (GetIPAddress(szIp, sizeof(szIp)) < 0)
    {
      dbg_err("%s: getIPAddress fails!\n", __FUNCTION__);
      goto closeCurl;
    }
  }

  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 1L);
  dbg_msg("setting low speed time: %ld\n",
          (long )g_sIoProperties.iDLNetworkTimeout);
  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME,
                   (long )g_sIoProperties.iDLNetworkTimeout);
  /* set DNS Cache to never timeout */
  curl_easy_setopt(curl, CURLOPT_DNS_CACHE_TIMEOUT, -1L);

#if !defined(_RFS) && !defined(WIN32)
  curl_easy_setopt(curl, CURLOPT_TCP_KEEPALIVE, 1L);
#endif

  res = curl_easy_perform(curl);
  dbg_msg("%s: res=%d at %d\n", __FUNCTION__, res, __LINE__);

  if (res == CURLE_OK)
  {
    if (chunk.size)
    {
      dbg_msg("%s: Successfully received %s\n", __FUNCTION__, chunk.memory);
      W3Unescape(chunk.memory, (int*) &chunk.size);
      dbg_notice("%s: Unescaped: %s\n", __FUNCTION__, chunk.memory);

      if (chunk.size > (uint32) response_len)
      {
        dbg_err(
            "%s: ERROR: output buffer too small, returning truncated data\n",
            __FUNCTION__);
        bRetVal = FALSE;
      }
      snprintf(response, response_len, "%s", chunk.memory);
    }
    else
    {
      dbg_err("%s: Received buffer is empty\n", __FUNCTION__);
    }
  }
  else
  {
    if (pszCurlError)
    {
      snprintf(response, response_len, "\nlibcurl error: %s", pszCurlError);
    }
    bRetVal = FALSE;
  }
  {
    double dDataRecvd = 0.0;
    double dDataSent = 0.0;
    curl_easy_getinfo(curl, CURLINFO_SIZE_UPLOAD, &dDataSent);
    curl_easy_getinfo(curl, CURLINFO_SIZE_DOWNLOAD, &dDataRecvd);
    dbg_notice("%s: curl_easy_perform returned %d, sent: %f recd: %f\n",
               __FUNCTION__, res, dDataSent, dDataRecvd);
  }

  closeCurl: curl_slist_free_all(headerlist);
  free(chunk.memory);

  /* always cleanup */
  curl_easy_cleanup(curl);
  CommClose(&open_data);
  curl = NULL;

  if (pszCurlError)
    free(pszCurlError);

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return bRetVal;
}


void ServerPing()
{
  CURL *curl;
  CommOpenData open_data;
  memset(&open_data, 0, sizeof(open_data));

  dbg_trace("%s: +\n", __FUNCTION__);

  curl = curl_easy_init();
  open_data.curl = curl;

  // in ADK modes this will open a socket, but not it direct mode.  For now, that's ok, this is only necessary for support the new PARAM_SKIP_CONNECT, which is ADK only
  CommOpen(&open_data);
  curl_easy_cleanup(curl);
  CommClose(&open_data);
  dbg_trace("%s: -\n", __FUNCTION__);
}

//
//  http_post_curl()
//
bool http_get_curl(const char *pszUrl, const char *pszRelativeURL,
                   const char *content, char *response, int response_len)
{
  UNUSED(pszRelativeURL);
  bool bRetVal = TRUE;
  struct MemoryStruct chunk;
  bool bCheckHostname;
  bool bVerifyPeer;
  //bool bVerifyPeer, bCheckExpiration;
  int iMallocRetries = 0;
  int iNoDataTransmit = 120;
  struct curl_slist *headerlist = NULL;
  char *pszCurlError = NULL;
  CURL *curl;
  CURLcode res;
  long fsize;
  CommOpenData open_data;
  memset(&open_data, 0, sizeof(open_data));

  fsize = strlen(content);

  dbg_trace("%s: +\n", __FUNCTION__);
  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);

  if (response)
    memset(response, 0, response_len);
  else
    return FALSE;

  do
  {
    chunk.memory = malloc(1); /* will be grown as needed by the realloc above */
  }
  while (chunk.memory == NULL && errno == EINTR && iMallocRetries++ < 10);
  if (chunk.memory == NULL)
  {
    dbg_msg("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    log_err("%s: out of memory, errno %d\n", __FUNCTION__, errno);
    return FALSE;
  }
  chunk.size = 0; /* no data at this point */

  dbg_msg("%s: at %d\n", __FUNCTION__, __LINE__);
  curl = curl_easy_init();
  if (NULL == curl)
  {
    log_err("%s: curl_easy_init returned NULL, errno %d\n", __FUNCTION__,
            errno);
    free(chunk.memory);
    return FALSE;
  }

  open_data.curl = curl;
  // make it use the ADK functions if necessary
  CommOpen(&open_data);
  // update required fields
  cURLsetMandatoryConfig(curl);

  // check these here (at go time) so that if the in-memory choice is updated by an update operation from the server
  dbg_msg("%s: at %d, setting URL to %s\r\n", __FUNCTION__, __LINE__, pszUrl);

#ifdef WIN32
    if ((pszUrl[0] == 'h' || pszUrl[0] == 'H') &&
        (pszUrl[1] == 't' || pszUrl[1] == 'T') &&
        (pszUrl[2] == 't' || pszUrl[2] == 'T') &&
        (pszUrl[3] == 'p' || pszUrl[3] == 'P') &&
        (pszUrl[4] == 's' || pszUrl[4] == 'S') &&
        pszUrl[5] == ':')
    {
        g_sIoProperties.bSSLEnabled = TRUE;
    }
#endif

  curl_easy_setopt(curl, CURLOPT_URL, pszUrl);

  curl_easy_setopt(curl, CURLOPT_HEADER, 1);

  dbg_msg("%s: at %d\r\n", __FUNCTION__, __LINE__);
  if (g_sIoProperties.bUseWebProxy)
  {
    curl_easy_setopt(curl, CURLOPT_PROXY, g_sIoProperties.szWebProxy);
    if (g_sIoProperties.bUseWebProxyTunnel)
      curl_easy_setopt(curl, CURLOPT_HTTPPROXYTUNNEL, 1);
  }

  if (g_sIoProperties.bSSLEnabled)
  {
    char SSLFileName[512];

    memset(SSLFileName, 0, sizeof(SSLFileName));
    GetFileNameForInstance(SSLFileName, (char*) SRV_SSL_CERTFILE,
                           GetCurrentInstance());

    VHQGetParameterBool(PARAM_SSL_PEER_VALIDATION, &bVerifyPeer);
    VHQGetParameterBool(PARAM_SSL_MATCH_HOSTNAME, &bCheckHostname);

    curl_easy_setopt(curl, CURLOPT_USE_SSL, CURLUSESSL_ALL);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, bVerifyPeer ? 1L : 0L);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, bCheckHostname ? 2L : 0L);

    if (IScURLversionCompatible(curl, 0x072700))
      curl_easy_setopt(curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
    else
      log_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n", __FUNCTION__);

    curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);
#if defined(Mx2)
    dbg_msg(
        "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
        __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
        SSLFileName, VHQ_MAIN_FOLDER);
    curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
        dbg_msg( "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n", __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0), SSLFileName);
#endif
  }

  dbg_msg("%s: at %d\n", __FUNCTION__, __LINE__);
  dbg_msg("%s: at %d, strlen(content) is %d\n", __FUNCTION__, __LINE__, fsize);
  dbg_trace("%s: content is %s\n", __FUNCTION__, content);

  // new error handling code
  curl_easy_setopt(curl, CURLOPT_FAILONERROR, 1L);
  pszCurlError = malloc(CURL_ERROR_SIZE);
  if (pszCurlError)
  {
    memset(pszCurlError, 0, CURL_ERROR_SIZE);
    curl_easy_setopt(curl, CURLOPT_ERRORBUFFER, pszCurlError);
  }

  curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, fsize);
  /* send all data to this function  */
  curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteMemoryCallback);
  /* we pass our 'chunk' struct to the callback function */
  curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void* )&chunk);
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerlist);
  curl_easy_setopt(curl, CURLOPT_USERAGENT,
                   "Mozilla/4.0 (compatible;VHQ-mx-user-agent-1.x)");

  // calculating the libcurl timeouts
  {
    int iUploadSize = fsize;
    int iNumBlocks = (iUploadSize / 32768) + 1;
    int iTimeout;

    VHQGetParameterUint32(PARAM_CURL_NODATA_TRANSMIT,
                          (uint32* )&iNoDataTransmit, DEFAULT_BASE);
    iTimeout = iNoDataTransmit * iNumBlocks;

    // set a cap on the timeouts for just under the max thread watchdog times
    if (iTimeout > (8L * 3600 - 300))
      iTimeout = (8L * 3600 - 300);  // eight hours- 5 minutes

    dbg_msg("%s: setting op timeout to %d(block timeout=%d*%d)\n", __FUNCTION__,
            iTimeout, iNoDataTransmit, iNumBlocks);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, (long )iTimeout);
  }

  {
    // capture and save the IP address
    char szIp[64];
    if (GetIPAddress(szIp, sizeof(szIp)) < 0)
    {
      log_err("%s: getIPAddress fails!\n", __FUNCTION__);
      goto closeCurl;
    }
  }

  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 1L);
  dbg_msg("%s: setting low speed time: %ld\n", __FUNCTION__,
          (long )g_sIoProperties.iDLNetworkTimeout);
  curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME,
                   (long )g_sIoProperties.iDLNetworkTimeout);
  /* set DNS Cache to never timeout */
  curl_easy_setopt(curl, CURLOPT_DNS_CACHE_TIMEOUT, -1L);

#if !defined(_RFS) && !defined(WIN32)
  curl_easy_setopt(curl, CURLOPT_TCP_KEEPALIVE, 1L);
#endif
  dbg_msg("%s: about to call perform at %d\n", __FUNCTION__, __LINE__);

  res = curl_easy_perform(curl);
  dbg_msg("%s: res=%d at %d\n", __FUNCTION__, res, __LINE__);

  if (res == CURLE_OK)
  {
    if (chunk.size)
    {
      dbg_msg("%s: Successfully received %s\n", __FUNCTION__, chunk.memory);
      W3Unescape(chunk.memory, (int*) &chunk.size);
      dbg_msg("%s: Unescaped: %s\n", __FUNCTION__, chunk.memory);

      if (chunk.size > (uint32) response_len)
      {
        log_err(
            "%s: ERROR: output buffer too small, returning truncated data\n",
            __FUNCTION__);
        bRetVal = FALSE;
      }
      snprintf(response, response_len, "%s", chunk.memory);
    }
    else
    {
      log_err("%s: Received buffer is empty\n", __FUNCTION__);
    }
  }
  else
  {
    if (pszCurlError)
    {
      snprintf(response, response_len, "\nlibcurl error: %s", pszCurlError);
    }
    bRetVal = FALSE;
  }
  {
    double dDataRecvd = 0.0;
    double dDataSent = 0.0;
    curl_easy_getinfo(curl, CURLINFO_SIZE_UPLOAD, &dDataSent);
    curl_easy_getinfo(curl, CURLINFO_SIZE_DOWNLOAD, &dDataRecvd);
    log_err("%s: curl_easy_perform returned %d, sent: %f recd: %f\n",
            __FUNCTION__, res, dDataSent, dDataRecvd);
  }

  closeCurl: curl_slist_free_all(headerlist);
  free(chunk.memory);

  /* always cleanup */
  curl_easy_cleanup(curl);
  CommClose(&open_data);

  curl = NULL;

  if (pszCurlError)
    free(pszCurlError);

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return bRetVal;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
