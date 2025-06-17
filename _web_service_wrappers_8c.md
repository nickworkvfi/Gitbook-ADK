---
title: tmsagt/src/VHQIo/WebServiceWrappers.c

---

# tmsagt/src/VHQIo/WebServiceWrappers.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[DNS2Log](_web_service_wrappers_8c.md#function-dns2log)**(void ) |
| bool | **[isbase64](_web_service_wrappers_8c.md#function-isbase64)**(char c) |
| char | **[value](_web_service_wrappers_8c.md#function-value)**(char c) |
| int | **[UnBase64](_web_service_wrappers_8c.md#function-unbase64)**(unsigned char * dest, const unsigned char * src, int srclen) |
| vhq_result_t | **[ContactURL](_web_service_wrappers_8c.md#function-contacturl)**(const char * pszName, const char * pszRelativeURL, char ** pszContent, char * pszResponse, uint32 dwResponseSize) |
| bool | **[TryMessageType](_web_service_wrappers_8c.md#function-trymessagetype)**(const char * pszMsgType, char * pszPayload, char ** ppszStart, char ** ppszEnd) |
| vhq_result_t | **[PostPayload](_web_service_wrappers_8c.md#function-postpayload)**(const char * pszPayload, char ** pszReturnPayload) |
| vhq_result_t | **[PostUpload](_web_service_wrappers_8c.md#function-postupload)**(const char * pszURL, const char * pszWebMethod, const char ** pszUpload, char ** pszReturnPayload, const char * pszFileName) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const char[] | **[base64_table](_web_service_wrappers_8c.md#variable-base64-table)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[_MAIN_LOOP_EXTERNS_](_web_service_wrappers_8c.md#define--main-loop-externs-)**  |
|  | **[LF_ERROR](_web_service_wrappers_8c.md#define-lf-error)**  |
|  | **[LF_INFO](_web_service_wrappers_8c.md#define-lf-info)**  |
|  | **[LF_DETAIL](_web_service_wrappers_8c.md#define-lf-detail)**  |

## Detailed Description


Implements the wrappers for web services exported by VHQ server 


## Functions Documentation

### function DNS2Log

```cpp
static void DNS2Log(
    void 
)
```


### function isbase64

```cpp
bool isbase64(
    char c
)
```


### function value

```cpp
inline char value(
    char c
)
```


### function UnBase64

```cpp
int UnBase64(
    unsigned char * dest,
    const unsigned char * src,
    int srclen
)
```


### function ContactURL

```cpp
static vhq_result_t ContactURL(
    const char * pszName,
    const char * pszRelativeURL,
    char ** pszContent,
    char * pszResponse,
    uint32 dwResponseSize
)
```


**Parameters**: 

  * **pszName** = URL of server 
  * **pszRelativeURL** = method 
  * **pszContent** = device message to be send 
  * **pszResponse** = to store response from server 
  * **dwResponseSize** = size of response


**Return**: TRUE, if success; FALSE, if failure 

This function calls CURL. 


### function TryMessageType

```cpp
bool TryMessageType(
    const char * pszMsgType,
    char * pszPayload,
    char ** ppszStart,
    char ** ppszEnd
)
```


**Parameters**: 

  * **pszMsgType** = incoming message tag type to compare. 
  * **pszPayload** = response from server 
  * **ppszStart** = pointer to starting of server response 
  * **ppszEnd** = pounter to end of response


**Return**: TRUE, if SUCCESS; FALSE, otherwise 

This function checks the server response message type. 


### function PostPayload

```cpp
vhq_result_t PostPayload(
    const char * pszPayload,
    char ** pszReturnPayload
)
```


**Parameters**: 

  * **pszPayload** = device message buffer to be send. 
  * **pszReturnPayload** = points to buffer in which server message is to be saved.


**Return**: TRUE, if success; FALSE, otherwise 

This function passes the device message and fetches response from server in pszReturnPayload buffer. 


### function PostUpload

```cpp
vhq_result_t PostUpload(
    const char * pszURL,
    const char * pszWebMethod,
    const char ** pszUpload,
    char ** pszReturnPayload,
    const char * pszFileName
)
```


**Parameters**: 

  * **pszURL** = server address 
  * **pszWebMethod** = transfer method 
  * **pszUpload** = header information for transmission 
  * **pszReturnPayload** = server response to be stored 
  * **pszFileName** = local filename


**Return**: TRUE, if success; FALSE, otherwise 

This function does the upload to the server. 



## Attributes Documentation

### variable base64_table

```cpp
static const char[] base64_table =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
```



## Macros Documentation

### define _MAIN_LOOP_EXTERNS_

```cpp
#define _MAIN_LOOP_EXTERNS_ 
```


### define LF_ERROR

```cpp
#define LF_ERROR 1
```


### define LF_INFO

```cpp
#define LF_INFO 2
```


### define LF_DETAIL

```cpp
#define LF_DETAIL 3
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
#include "VHQConfig.h"
#include "VHQIoInternals.h"
#include "VHQDebug.h"
#include "../inc/VHQIo.h"
#include <libxml/uri.h>
#include "VHQPosIPC.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"
#ifdef Mx2
#include <svcsec.h>
#include <svcmgr/svc_net.h>
#include <ctype.h>
#endif

#endif //VHQ_CERT_VERIFIER

#include <stdio.h>
#ifdef WIN32
#define snprintf _snprintf
#endif

//static int gs_iTestRun=0;

static const char base64_table[] =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

#define LF_ERROR    1
#define LF_INFO     2
#define LF_DETAIL   3

//int vDebugMsg( VHQ_LOGGING_LEVEL_DEBUG, const char *string, va_list ap);

static void DNS2Log(void)
{
#ifndef VHQ_CERT_VERIFIER
  FILE *fp;
  char *line = NULL;
  size_t len = 0;
  ssize_t read;

  fp = fopen("/etc/resolv.conf", "r");
  if (fp == NULL)
    return;

  while ((read = getline(&line, &len, fp)) != -1)
  {
    log_dbg("resolv.conf: Retrieved line of length %zu : %s\n", read, line);
    //writeHbResult("%s\n", line);
  }

  free(line);
  fclose(fp);
#endif
}

bool isbase64(char c)
{
  return c && strchr(base64_table, c) != NULL;
}

#ifndef VHQ_CERT_VERIFIER
inline
#endif // VHQ_CERT_VERIFIER
char value(char c)
{
  const char *p = strchr(base64_table, c);
  if (p)
  {
    return p - base64_table;
  }
  else
  {
    return 0;
  }
}

int UnBase64(unsigned char *dest, const unsigned char *src, int srclen)
{
  unsigned char *p;
  *dest = 0;

  p = dest;
  if (*src == 0)
  {
    return 0;
  }

  do
  {

    char a = value(src[0]);
    char b = value(src[1]);
    char c = value(src[2]);
    char d = value(src[3]);
    *p++ = (a << 2) | (b >> 4);
    *p++ = (b << 4) | (c >> 2);
    *p++ = (c << 6) | d;
    if (!isbase64(src[1]))
    {
      p -= 2;
      break;
    }
    else if (!isbase64(src[2]))
    {
      p -= 2;
      break;
    }
    else if (!isbase64(src[3]))
    {
      p--;
      break;
    }
    src += 4;
    while (*src && (*src == 13 || *src == 10))
      src++;
  }
  while (srclen -= 4);
  *p = 0;
  return p - dest;
}

static vhq_result_t ContactURL(const char *pszName, const char *pszRelativeURL,
                               char **pszContent, char *pszResponse,
                               uint32 dwResponseSize)
{
  char szUrlPath[256];
  vhq_result_t retVal = VHQ_SUCCESS;

  if (!pszName || !pszRelativeURL || !pszContent || !(*pszContent)
      || !pszResponse)
  {
    log_err("%s: Incorrect pointer during function call.\n", __FUNCTION__);
    return VHQ_INVALID_DATA;
  }

  //    sprintf(szUrlPath, "%s/%s", pszName, pszRelativeURL);
  snprintf(szUrlPath, sizeof(szUrlPath), "%s", pszName);

  if (pszResponse)
    pszResponse[0] = 0;

  dbg_msg(
      "********************************************************************************\r\n");
  dbg_msg(
      "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\r\n");
  //    DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "URL: %s, request: %s\r\n", szUrlPath, *pszContent);
  dbg_msg("%s: URL: %s\r\n", __FUNCTION__, szUrlPath);
  dbg_msg(
      "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\r\n");
  dbg_msg(
      "********************************************************************************\r\n");

  {
    uint32 num_retries = 2;
    uint32 retry_delay = 10;

    VHQGetParameterUint32(PARAM_CURL_ERROR_RETRY_COUNT, &num_retries,
                          DEFAULT_BASE);
    VHQGetParameterUint32(PARAM_CURL_ERROR_RETRY_DELAY, &retry_delay,
                          DEFAULT_BASE);

    if (num_retries > PARAM_CURL_ERROR_RETRY_COUNT_MAX)
      num_retries = PARAM_CURL_ERROR_RETRY_COUNT_MAX;

    if (retry_delay > PARAM_CURL_ERROR_RETRY_DELAY_MAX)
      retry_delay = PARAM_CURL_ERROR_RETRY_DELAY_MAX;

    if (VHQ_MODE_PROXY == g_sIoProperties.eMode)
      DNS2Log();
    if (VHQ_MODE_DIRECT == g_sIoProperties.eMode)
      VerifyConnection();

    retVal = http_post_curl(szUrlPath, pszRelativeURL, *pszContent, pszResponse,
                            dwResponseSize);
    // if it times out, kick it harder... the verify detect couldn't detect a fault.
    while ((retVal != VHQ_SUCCESS) && (num_retries > 0))
    {
#ifndef WIN32
      char *updatedXMLData = NULL;
      uint32 current_retry_delay;
      /* provide 0...20% timeout deviation */
      unsigned char random[8];
      uint32 *ui32rand_p;
      uint32 percents;

      /* Generate 0...20 percents range */
      GenerateRandom(&random[0]);
      ui32rand_p = (uint32*) &random[0];
      percents = *ui32rand_p % 20;

      /* Calculate 80...100% */
      current_retry_delay = retry_delay - retry_delay * percents / 100;

      // if it's failed, kick the PPP and do it again.
      log_dbg(
          "%s: returns %d (response = %s) - updating NONCE and retry in %d (which is %d%% less than %d) seconds, %d retries left\n",
          __FUNCTION__, retVal, pszResponse, current_retry_delay, percents,
          retry_delay, num_retries);

      if (current_retry_delay)
      {
        sleep(current_retry_delay);
      }

      /* We need to update the NONCE before we retry */
      VHQXmlUpdateNonce(*pszContent, strlen(*pszContent), &updatedXMLData,
                        FALSE);

      /* VHQXmlUpdateNonce() free's the input pointer so let's re-assign it to the updated data */
      *pszContent = updatedXMLData;
#endif
      /* Do not perform retries if no data to process */
      if (!*pszContent)
      {
        log_err("%s ERROR: No data to process\n", __FUNCTION__);
        return VHQ_INVALID_DATA;
      }
      /* Re-send with the updated nonce */
      retVal = http_post_curl(szUrlPath, pszRelativeURL, *pszContent,
                              pszResponse, dwResponseSize);

      num_retries--;
    }

    if (retVal != VHQ_SUCCESS)
    {
      log_dbg("%s: FAILED (%d) - Response = %s\n", __FUNCTION__, retVal,
              pszResponse);
    }
  }

  dbg_msg(
      "********************************************************************************\r\n");
  dbg_msg(
      "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\r\n");
  dbg_msg("URL: %s\r\n", szUrlPath);
  dbg_msg(
      "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\r\n");
  dbg_msg(
      "********************************************************************************\r\n");

  return retVal;
}

bool TryMessageType(const char *pszMsgType, char *pszPayload, char **ppszStart,
                    char **ppszEnd)
{
  char pszStartTag[128];
  char pszEndTag[128];

  if (strlen(pszMsgType) > (sizeof(pszStartTag) - 2))
    return FALSE;       // tag too long

  sprintf(pszStartTag, "<%s>", pszMsgType);
  sprintf(pszEndTag, "</%s>", pszMsgType);
  *ppszStart = strstr(pszPayload, pszStartTag);
  *ppszEnd = strstr(pszPayload, pszEndTag);

  if (NULL != *ppszEnd && NULL != *ppszStart)
  {
    *ppszEnd += strlen(pszEndTag);
    return TRUE;
  }
  return FALSE;
}


vhq_result_t PostPayload(const char *pszPayload, char **pszReturnPayload)
{
  int iResponseLen;
  vhq_result_t ret_val = VHQ_SERVER_POST_PAYLOAD_FAILURE;
  char *pszOutPayload = NULL;
  char *pszResponse = NULL;

  if (!pszPayload || !pszReturnPayload)
  {
    log_err("%s: Incorrect pointer during function call.\n", __FUNCTION__);
    return FALSE;
  }
  /* Avoid memory leaks in case of incorrect call */
  free(*pszReturnPayload);
  *pszReturnPayload = NULL;

  {
    char *pszVhqMessage = NULL;
    const char *szFmt =
        "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n"
            "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\r\n"
            "  <soap:Body>\r\n"
//"    <PostPayload xmlns=\"http://VHQ.verifone.com/\">\r\n"
            "    <PostPayload xmlns=\"http://MessagingServer/\">\r\n"
            "      %s\r\n"
            "    </PostPayload>\r\n"
            "  </soap:Body>\r\n"
            "</soap:Envelope>\r\n";
    int iSizePayload = 0;
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "Escaped string (%d) is \"len %s\"", strlen(pszVhqMessage), pszVhqMessage);

    pszVhqMessage = strstr(pszPayload, "<DeviceMessage>");
    if (NULL == pszVhqMessage)
    {
      log_err(
          "%s ERROR: Couldn't find payload after <xml.... - returning FALSE\r\n",
          __FUNCTION__);
      return VHQ_SERVER_POST_PAYLOAD_FAILURE;
    }

    iSizePayload = strlen(pszVhqMessage);
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: Calling malloc(%d) for FULL payload\n", __FUNCTION__, iSizePayload + strlen(szFmt));
    pszOutPayload = malloc(iSizePayload + strlen(szFmt) + 1);

    if (NULL == pszOutPayload)
    {
      log_err(
          "%s ERROR: Couldn't alloc space for payload - returning FALSE\r\n",
          __FUNCTION__);
      return VHQ_SERVER_POST_PAYLOAD_FAILURE;
    }

    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: Calling sprintf() - szFmt = [%s], pszVhqMessage = [%s]\n", __FUNCTION__, szFmt, pszVhqMessage);
#ifdef VHQ_CERT_VERIFIER
        sprintf_s(pszOutPayload, iSizePayload+strlen(szFmt)+1, szFmt, pszVhqMessage);
#else
    sprintf(pszOutPayload, szFmt, pszVhqMessage);
#endif
  }
  //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: Calling ContactURL()\n", __FUNCTION__);
  dbg_notice("PostPayload: calling ContactURL\n");

  pszResponse = malloc(100 * 1024);
  if (NULL == pszResponse)
  {
    log_err("%s: FAILURE allocating response buffer\n", __FUNCTION__);
    free(pszOutPayload);
    pszOutPayload = NULL;
    return FALSE;
  }

  ret_val = ContactURL(GetServerURL(), "PostPayload", &pszOutPayload,
                       pszResponse, 100 * 1024);
  free(pszOutPayload);
  pszOutPayload = NULL;
  log_dbg("PostPayload: returned from ContactURL\n");

  if (ret_val == VHQ_SUCCESS)
  {
    char *pStart, *pEnd;
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "PostPayload: pszResponse is %s\r\n", pszResponse);

    if (TryMessageType(
        "ServerMessage",
        pszResponse,
        &pStart,
        &pEnd) /*|| TryMessageType("DeviceMessage", pszResponse, &pStart, &pEnd)*/)
    {
      iResponseLen = pEnd - pStart;
      *pszReturnPayload = malloc(iResponseLen + 1);
      if (*pszReturnPayload)
      {
        memset(*pszReturnPayload, 0, iResponseLen + 1);
        memcpy(*pszReturnPayload, pStart, iResponseLen);
        log_dbg("PostPayload: - request succeeded.\r\n");
        free(pszResponse);
        return ret_val;
      }
      else
      {
        log_err(
            "%s: request succeeded but FAILURE allocating response buffer\n",
            __FUNCTION__);
        free(pszResponse);
        return ret_val;
      }
    }
  }
  else
  {
    log_dbg("ContactURL returned false\n");
  }

  // failed for some reason
  log_err("PostPayload: - request failed. %s\r\n", pszResponse);

  free(pszResponse);
  return ret_val;
}

vhq_result_t PostUpload(const char *pszURL, const char *pszWebMethod,
                        const char **pszUpload, char **pszReturnPayload,
                        const char *pszFileName)
{
#ifdef VHQ_CERT_VERIFIER
    return FALSE;
#else
  int iResponseLen;
  vhq_result_t retVal;
  char *pszOutUpload = NULL;
  char *pszResponse = NULL;

  if (!pszURL || !pszWebMethod || !pszUpload || !(*pszUpload)
      || !pszReturnPayload || !pszFileName)
  {
    log_err("%s: Incorrect pointer during function call.\n", __FUNCTION__);
    return FALSE;
  }
  /* Avoid memory leaks in case of incorrect call */
  free(*pszReturnPayload);
  *pszReturnPayload = NULL;

  {
    char *pszVhqMessage = NULL;
    const char *szFmtStart =
        "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n"
            "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\r\n"
            "  <soap:Body>\r\n"
            //"    <UploadFile xmlns=\"http://VHQ.verifone.com/\">\r\n"
            "    <UploadFile xmlns=\"http://MessagingServer/\">\r\n"
            "      %s<fileBytesBase64>%s</fileBytesBase64>\r\n"
            "    </UploadFile>\r\n"
            "  </soap:Body>\r\n"
            "</soap:Envelope>\r\n";
    int iSizeUpload = 0;
    struct stat ul_file_stat;
    FILE *filep;
    char *file_buf;
    int bytes_read = 0;
    bool include_file_data = TRUE;
    char *base64_file_buf = NULL;
    int base64_out_size = 0;
    dbg_msg("%s: line %d\n", __FUNCTION__, __LINE__);
    if (stat(pszFileName, &ul_file_stat) != 0)
    {
      dbg_msg("%s ERROR: Could not find %s\n", __FUNCTION__, pszFileName);
      include_file_data = FALSE;
    }

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "Escaped string is \"%s\"", pszVhqMessage);

    pszVhqMessage = strstr(*pszUpload, "<DeviceMessage>");
    if (NULL == pszVhqMessage)
    {
      log_err(
          "%s ERROR: Couldn't find payload after <xml.... - returning FALSE\n",
          __FUNCTION__);
      return FALSE;
    }

    iSizeUpload = strlen(pszVhqMessage);

    if (include_file_data)
    {

      filep = fopen(pszFileName, "rb");
      file_buf = malloc(ul_file_stat.st_size + 1);

      if ((filep == NULL) || (file_buf == NULL))
      {
        log_err(
            "%s ERROR: Couldn't open %s (filep = 0x%08x) or couldn't malloc %d bytes (file_buf = 0x%08x)\r\n",
            __FUNCTION__, pszFileName, filep, ul_file_stat.st_size + 1,
            file_buf);
        if (filep)
          fclose(filep);
        if (file_buf)
          free(file_buf);
        return FALSE;
      }

      memset(file_buf, 0, ul_file_stat.st_size + 1);
      bytes_read = fread(file_buf, 1, ul_file_stat.st_size, filep);
      if (bytes_read != ul_file_stat.st_size)
      {
        dbg_err(
            "%s ERROR: Read %d bytes from downloaded file - expected %d bytes\n",
            __FUNCTION__, bytes_read, ul_file_stat.st_size);
      }

      if (filep)
        fclose(filep);

      base64_file_buf = base64_encode(file_buf, bytes_read,
                                      (size_t*) &base64_out_size);

      if (file_buf)
        free(file_buf);
    }

    pszOutUpload = malloc(iSizeUpload + strlen(szFmtStart) + base64_out_size);

    if (NULL == pszOutUpload)
    {
      if (base64_file_buf)
        free(base64_file_buf);

      log_err(
          "%s ERROR: Couldn't alloc space for payload - returning FALSE\r\n",
          __FUNCTION__);
      return FALSE;
    }

    if (base64_file_buf)
    {
      sprintf(pszOutUpload, szFmtStart, pszVhqMessage, base64_file_buf);
      free(base64_file_buf);
    }
    else
      sprintf(pszOutUpload, szFmtStart, pszVhqMessage, "");

    /* Large upload files can flood the logs and take a long time to print leading to INVALID_NONCE errors */
    if (strlen(pszOutUpload) < (1024 * 5))
    {
      dbg_msg(
          "%s: bytes_read %d, iSizeUpload %d + strlen(szFmtStart) %d + base64_out_size %d = %d \n\n pszOutUpload = [%s]\n",
          __FUNCTION__, bytes_read, iSizeUpload, strlen(szFmtStart),
          base64_out_size, iSizeUpload + strlen(szFmtStart) + base64_out_size,
          pszOutUpload);
    }
    else
    {
      dbg_msg(
          "%s: bytes_read %d, iSizeUpload %d + strlen(szFmtStart) %d + base64_out_size %d = %d \n\n pszOutUpload = [too large to print]\n",
          __FUNCTION__, bytes_read, iSizeUpload, strlen(szFmtStart),
          base64_out_size, iSizeUpload + strlen(szFmtStart) + base64_out_size);
    }

  }
  dbg_notice("PostUpload: calling ContactURL\n");
  //
  // due to Verix limitation, increase buffer size to 200KB - WHAT IT MEANS?
  //
  pszResponse = malloc(100 * 1024);
  if (NULL == pszResponse)
  {
    log_err("%s: FAILURE allocating response buffer\n", __FUNCTION__);
    free(pszOutUpload);
    pszOutUpload = NULL;
    return FALSE;
  }

  retVal = ContactURL(pszURL, pszWebMethod, &pszOutUpload, pszResponse,
                      100 * 1024);
  free(pszOutUpload);
  pszOutUpload = NULL;
  log_dbg("PostUpload: returned from ContactURL\n");

  if (retVal == VHQ_SUCCESS)
  {
    char *pStart, *pEnd;
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "PostUpload: pszResponse is %s\r\n", pszResponse);

    if (TryMessageType(
        "ServerMessage",
        pszResponse,
        &pStart,
        &pEnd) /*|| TryMessageType("DeviceMessage", pszResponse, &pStart, &pEnd)*/)
    {
      iResponseLen = pEnd - pStart;
      *pszReturnPayload = malloc(iResponseLen + 1);
      if (*pszReturnPayload)
      {
        memset(*pszReturnPayload, 0, iResponseLen + 1);
        memcpy(*pszReturnPayload, pStart, iResponseLen);
        log_dbg("PostUpload: request succeeded.\r\n");
        free(pszResponse);
        return TRUE;
      }
      else
      {
        log_err(
            "%s: request succeeded but FAILURE allocating response buffer\n",
            __FUNCTION__);
        free(pszResponse);
        return FALSE;
      }
    }
  }
  else
  {
    char resultMsg[256];
    ConvertVHQResultToStr(retVal, resultMsg, sizeof(resultMsg));
    log_err("PostUpload: ContactURL failed %s(%d)", resultMsg, retVal);
  }

  // failed for some reason
  log_err("PostUpload: - request failed. %s\r\n", pszResponse);
  free(pszResponse);

  return retVal;
#endif // VHQ_CERT_VERIFIER
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
