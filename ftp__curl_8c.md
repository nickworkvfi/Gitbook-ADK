---
title: tmsagt/src/VHQIo/ftp_curl.c

---

# tmsagt/src/VHQIo/ftp_curl.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| vhq_result_t | **[DownloadFileDirect](ftp__curl_8c.md#function-downloadfiledirect)**(dl_file_method_t eMethod, char * pszDest, char * pszUrl, dl_file_hash_algo_t eHashAlgo, char * pszHash, bool bMaintDl, uint32 filesize, event_set_id_t event_set_id, event_id_t event_id, uint32 * dl_duration, uint32 * dl_attempts, bool dl_notify) |
| size_t | **[XferBlockHandler](ftp__curl_8c.md#function-xferblockhandler)**(void * buffer, size_t size, size_t nmemb, void * stream) |
| bool | **[IsSSLOption](ftp__curl_8c.md#function-isssloption)**(char * pszUrl) |
| bool | **[GenerateFileTransferCredentials](ftp__curl_8c.md#function-generatefiletransfercredentials)**(char * userpass_str, int userpass_str_len) |
| bool | **[VHQHTTPException](ftp__curl_8c.md#function-vhqhttpexception)**(int inCode) |
| vhq_result_t | **[DownloadFileWorker](ftp__curl_8c.md#function-downloadfileworker)**(dl_file_method_t eMethod, char * pszDest, char * pszUrl, dl_file_hash_algo_t eHashAlgo, char * pszHash, bool bMaintDl, uint32 filesize, event_set_id_t event_set_id, event_id_t event_id, uint32 * dl_duration, uint32 * dl_attempts, bool dl_notify) |

## Detailed Description


Download file given URL 


## Functions Documentation

### function DownloadFileDirect

```cpp
static vhq_result_t DownloadFileDirect(
    dl_file_method_t eMethod,
    char * pszDest,
    char * pszUrl,
    dl_file_hash_algo_t eHashAlgo,
    char * pszHash,
    bool bMaintDl,
    uint32 filesize,
    event_set_id_t event_set_id,
    event_id_t event_id,
    uint32 * dl_duration,
    uint32 * dl_attempts,
    bool dl_notify
)
```


**Parameters**: 

  * **eMethod** = file download method 
  * **pszDest** = download file name(tmp) 
  * **pszUser** = user 
  * **pszPw** = PW 
  * **pszUrl** = URL 
  * **eHashAlgo** = hash algorithm 
  * **pszHash** = received hash value from server. 
  * **bMaintDl** = TRUE, if maintenance download 
  * **filesize** = size of file to download 
  * **event_set_id** = event set id of event 
  * **event_id** = event ID of event 
  * **dl_duration** = download duration 
  * **dl_attempts** = number of download attempts 
  * **dl_notify** = Download notifications


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function calls function to download a file from server. 


### function XferBlockHandler

```cpp
static size_t XferBlockHandler(
    void * buffer,
    size_t size,
    size_t nmemb,
    void * stream
)
```


**Parameters**: 

  * **buffer** = points to delivered data 
  * **size** = size 
  * **nmemb** = size of data delivered 
  * **stream** = passed in with CURLOPT_WRITEDATA.


**Return**: 0, if failed; size of data otherwise 

This function is a callback function which gets called by libcurl as soon as there is data received that needs to be saved. 


### function IsSSLOption

```cpp
bool IsSSLOption(
    char * pszUrl
)
```


### function GenerateFileTransferCredentials

```cpp
bool GenerateFileTransferCredentials(
    char * userpass_str,
    int userpass_str_len
)
```


**Parameters**: 

  * **userpass_str** = signature details stored to this buffer 
  * **userpass_str_len** = size of buffer.


**Return**: TRUE, if success; FALSE, otherwise 

This function provides the signature details for file transfer 


### function VHQHTTPException

```cpp
bool VHQHTTPException(
    int inCode
)
```


### function DownloadFileWorker

```cpp
vhq_result_t DownloadFileWorker(
    dl_file_method_t eMethod,
    char * pszDest,
    char * pszUrl,
    dl_file_hash_algo_t eHashAlgo,
    char * pszHash,
    bool bMaintDl,
    uint32 filesize,
    event_set_id_t event_set_id,
    event_id_t event_id,
    uint32 * dl_duration,
    uint32 * dl_attempts,
    bool dl_notify
)
```


**Parameters**: 

  * **eMethod** = file download method 
  * **pszDest** = partial download file name(tmp) 
  * **pszUser** = user 
  * **pszPw** = PW 
  * **pszUrl** = URL 
  * **eHashAlgo** = hash algorithm 
  * **pszHash** = received hash value from server. 
  * **bMaintDl** = TRUE, if maintenance download 
  * **filesize** = size of file to download 
  * **event_set_id** = event set id of event 
  * **event_id** = event ID of event 
  * **dl_duration** = download duration 
  * **dl_attempts** = number of download attempts 
  * **dl_notify** = Download notifications


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function calls function to download a file from server and finds the time taken for the attempt. 




## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include "EventScheduler.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQIo.h"
#include "VHQIoInternals.h"
#include "VHQSecurity.h"
#include "VHQPosIPC.h"
#include "VHQConfig.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"
#include "VHQcURLconfiguration.h"
#include <sys/stat.h>
#include <time.h>

#if defined(Mx2)
#include "com/libcom.h"
#endif

#ifdef WIN32
#include "stdafx.h"
#include <fcntl.h>
#include <sys/types.h>
#include <io.h>
#include <stdio.h>
#endif
#include "ComIntf.h"

static vhq_result_t DownloadFileDirect(dl_file_method_t eMethod, char *pszDest,
                                       char *pszUrl,
                                       dl_file_hash_algo_t eHashAlgo,
                                       char *pszHash, bool bMaintDl,
                                       uint32 filesize,
                                       event_set_id_t event_set_id,
                                       event_id_t event_id, uint32 *dl_duration,
                                       uint32 *dl_attempts, bool dl_notify);

#if SUPPORT_DOWNLOAD_PERCENTAGE_REPORTING
static uint32 dl_bytes_received;
static uint8 dl_percent;
static bool exit_dl_monitor;

#if EVENT_SCHED_THREAD_MODE
static pthread_t dl_percent_monitor_thread_id;
static pthread_attr_t dl_percent_monitor_thread_attr;
#else
int dl_percent_monitor_thread_id;
#endif

typedef struct _dl_monitor_thread_arg_t
{
  uint32 filesize;
  char filename[512];
} dl_monitor_thread_arg_t;

void* DownloadPercentageMonitor(void *arg)
{
  int tid = pthread_self();
  dl_monitor_thread_arg_t *arg_p = (dl_monitor_thread_arg_t*) arg;

  if ((arg_p == NULL) || (arg_p->filesize == 0))
  {
    if (arg_p)
      free(arg_p);

    dbg_msg("%s: Invalid ARG pointer - returning\n", __FUNCTION__);
#if EVENT_SCHED_THREAD_MODE
    pthread_exit(NULL);
#endif
    return NULL;
  }

  dbg_msg(
      "%s: DOWNLOAD PERCENTAGE MONITOR running on thread %08x - dl_bytes_received = %d, arg_p->filesize = %d, arg_p->filename = %s\n",
      __FUNCTION__, tid, dl_bytes_received, arg_p->filesize, arg_p->filename);

  if (arg_p->filesize >= 40000000)
  {
    dl_percent = dl_bytes_received / (arg_p->filesize / 100);
  }
  else
  {
    dl_percent = (dl_bytes_received * 100) / arg_p->filesize;
  }

  if (dl_percent > 0)
  {
    dbg_msg("%s: Sending initial download percentage of %d\n", __FUNCTION__,
            dl_percent);
    EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT, arg_p->filename,
                      dl_percent, VHQ_SUCCESS, EVENT_SET_ID_INVALID,
                      EVENT_ID_INVALID, TRUE);
  }

  while ((!exit_dl_monitor) && (dl_bytes_received < arg_p->filesize))
  {
    uint8 current_dl_percent;

    sleep(1);

    if (arg_p->filesize >= 40000000)
    {
      current_dl_percent = dl_bytes_received / (arg_p->filesize / 100);
    }
    else
    {
      current_dl_percent = (dl_bytes_received * 100) / arg_p->filesize;
    }

    if (current_dl_percent != dl_percent)
    {
      dl_percent = current_dl_percent;
      dbg_msg("%s: Sending download percentage %d\n", __FUNCTION__, dl_percent);
      EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT, arg_p->filename,
                        dl_percent, VHQ_SUCCESS, EVENT_SET_ID_INVALID,
                        EVENT_ID_INVALID, TRUE);
    }
  }

  dbg_msg(
      "%s: DOWNLOAD PERCENTAGE MONITOR exiting - exit_dl_monitor = %d, dl_bytes_received = %d, arg_p->filesize = %d\n",
      __FUNCTION__, exit_dl_monitor, dl_bytes_received, arg_p->filesize);

  if (arg)
    free(arg);
#if EVENT_SCHED_THREAD_MODE
  pthread_exit(NULL);
#endif
  return NULL;
}

static void StartDownloadPercentageMonitor(char *filename, uint32 filesize,
                                           uint32 startPosition)
{
  dl_monitor_thread_arg_t *dl_percent_monitor_args = malloc(
      sizeof(dl_monitor_thread_arg_t));

  if (dl_percent_monitor_args)
  {
    exit_dl_monitor = FALSE;
    dl_bytes_received = startPosition;

    memset(dl_percent_monitor_args, 0, sizeof(dl_monitor_thread_arg_t));
    dl_percent_monitor_args->filesize = filesize;
    strncpy(dl_percent_monitor_args->filename, filename,
            sizeof(dl_percent_monitor_args->filename) - 1);
    dbg_msg(
        "%s: dl_percent_monitor_args->filename set to %s, dl_percent_monitor_args->filesize = %d, dl_bytes_received = %d\n",
        __FUNCTION__, dl_percent_monitor_args->filename,
        dl_percent_monitor_args->filesize, dl_bytes_received);

#if EVENT_SCHED_THREAD_MODE
    /* Initialize and set thread detached attribute */
    pthread_attr_init(&dl_percent_monitor_thread_attr);
    pthread_attr_setdetachstate(&dl_percent_monitor_thread_attr,
                                PTHREAD_CREATE_JOINABLE);

    /* Event has passed so call the callback */
    log_dbg(
        "%s: calling DL percent monitor function on new thread (pthread_self() = %08x)\n",
        __FUNCTION__, pthread_self());
    if (pthread_create(&dl_percent_monitor_thread_id,
                       &dl_percent_monitor_thread_attr,
                       DownloadPercentageMonitor,
                       (void*) dl_percent_monitor_args) != 0)
    {
      free(dl_percent_monitor_args);
      dl_percent_monitor_args = NULL;
      dbg_err("%s: pthread_create FAILED\n", __FUNCTION__);
    }
    else
      dbg_msg(
          "%s: New thread CREATED - DL percent monitor running on thread %08x\n",
          __FUNCTION__, dl_percent_monitor_thread_id);

    /* Free attribute */
    pthread_attr_destroy(&dl_percent_monitor_thread_attr);
#else
        dl_percent_monitor_thread_id = run_thread((int)DownloadPercentageMonitor, (int)dl_percent_monitor_args, 1024 * 20);
#endif
  }
}

void StopDownloadPercentageMonitor()
{
  exit_dl_monitor = TRUE;
#if EVENT_SCHED_THREAD_MODE
  {
    void *result_void_p;

    if (pthread_join(dl_percent_monitor_thread_id, &result_void_p) != 0)
      dbg_msg("%s: pthread_join on dl monitor thread FAILED\n", __FUNCTION__);
    else
    {
      dbg_msg("%s: DL percent montior thread JOINED\n", __FUNCTION__);
    }
  }
#endif
}
#endif


static size_t XferBlockHandler(void *buffer, size_t size, size_t nmemb,
                               void *stream)
{
  size_t write_ret;
//  size_t totsize=size*nmemb;
//  DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "KEVIN Writing %d\n",totsize);

  struct XferContext *out = (struct XferContext*) stream;

  if (NULL == out)
    return -1;

  /* Downloads can take a long time so make sure we pet the watchdog every time curl gives us a
   block to transfer */
  EventSchedulerPetWatchdog(out->event_set_id, out->event_id);

  if (out && -1 == out->iFileHandle)
  {
    /* open file for writing */
    printf("Opening %s\r\n", out->filename);
#ifndef WIN32
    out->iFileHandle = open(out->filename, O_RDWR | O_CREAT | O_APPEND,
                            S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
#else
    out->iFileHandle=_open(out->filename, _O_RDWR | _O_CREAT | _O_APPEND | _O_BINARY, _S_IREAD | _S_IWRITE );
#endif
    if (-1 == out->iFileHandle)
    {
      printf("Couldn't open file");

      return -1; /* failure, can't open file to write */
    }
  }
#ifdef WIN32
#if SUPPORT_DOWNLOAD_PERCENTAGE_REPORTING
  dl_bytes_received += size*nmemb;
#endif
  if (!IsBadReadPtr(buffer, (int)size*nmemb))
    return _write(out->iFileHandle, buffer, (int)size*nmemb);

  dbg_msg( "libcurl gave us a bad read ptr!\r\n");
  return 0;
#else
  out->iSize += size * nmemb;
  write_ret = write(out->iFileHandle, buffer, (int) size * nmemb);
  if (write_ret != (size * nmemb))
    dbg_msg(
        "write returned invalid value (expected %d, returned %d) - errno = %s (%d)\r\n",
        (size * nmemb), write_ret, strerror(errno), errno);
#if SUPPORT_DOWNLOAD_PERCENTAGE_REPORTING
  dl_bytes_received += write_ret;
#endif
  return write_ret;
#endif
}

bool IsSSLOption(char *pszUrl)
{
  char *substr = NULL;
  if ((substr = strcasestr(pszUrl, "ftps://")) != NULL)
  {
    if (substr == pszUrl)
    {
      return TRUE;
    }
  }
  if ((substr = strcasestr(pszUrl, "https://")) != NULL)
  {
    if (substr == pszUrl)
    {
      return TRUE;
    }
  }
  return FALSE;
}


bool GenerateFileTransferCredentials(char *userpass_str, int userpass_str_len)
{
  long nonce_val;
  char SerialNum[SERIAL_NUM_LEN];
  char ModelNum[16];
  char NonceStr[64];
  int gen_userpass_len;
  char user[128];
  unsigned char cmac[SIGNATURE_LENGTH];
  char cmac_str[(SIGNATURE_LENGTH * 2) + 1];

  /* Clear the user/pw fields */
  memset(userpass_str, 0, userpass_str_len);
  memset(user, 0, sizeof(user));

  memset(SerialNum, 0, sizeof(SerialNum));
  GetSerialNumber(SerialNum);
  memset(ModelNum, 0, sizeof(ModelNum));
  GetModelNumber(ModelNum, sizeof(ModelNum));

  memset(NonceStr, 0, sizeof(NonceStr));
  nonce_val = GenerateNonce();
  sprintf(NonceStr, "%ld", nonce_val);

  sprintf(user, "%s.%s.%s", ModelNum, SerialNum, NonceStr);

  //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: Generated user=%s\n", __FUNCTION__, user);
  if (!VHQSecurityGenSig((unsigned char*) user, strlen(user), cmac,
                         sizeof(cmac)))
  {
    log_err("%s: Could not generate signature of %s\n", __FUNCTION__, user);
    return FALSE;
  }

  if (!ConvertBinaryToHexString((char*) cmac, sizeof(cmac), cmac_str,
                                sizeof(cmac_str)))
  {
    dbg_err("%s: Could not convert cmac to HEX String\n", __FUNCTION__);
    return FALSE;
  }

  /* Make sure to calculate for the ":" */
  gen_userpass_len = strlen(user) + strlen(":") + strlen(cmac_str);

  if (gen_userpass_len >= userpass_str_len)
    return FALSE;

  sprintf(userpass_str, "%s:%s", user, cmac_str);

  //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: Generated credentials=%s - returning TRUE\n", __FUNCTION__, userpass_str);
  return TRUE;
}

bool VHQHTTPException(int inCode)
{
  bool outRet;

  switch (inCode)
  {

    //Exception Error Cases
    //ADKTMS-373
    //By default HTTP errors do not retry downloads
    //Add all HTTP errors that are exceptions to this
    //and should continue a download retry.
    case 500:
    case 503:
//simulate ADKTMS-373 case 404:
      outRet = TRUE;
      break;

      //All Other Errors
    default:
      outRet = FALSE;
      break;
  }

  return outRet;
}


static vhq_result_t DownloadFileDirect(dl_file_method_t eMethod, char *pszDest,
                                       char *pszUrl,
                                       dl_file_hash_algo_t eHashAlgo,
                                       char *pszHash, bool bMaintDl,
                                       uint32 filesize,
                                       event_set_id_t event_set_id,
                                       event_id_t event_id, uint32 *dl_duration,
                                       uint32 *dl_attempts, bool dl_notify)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  int networkErr = 0;
  CURL *curl;
  struct curl_slist *dns = NULL;
  CURLcode curlRet;
  CURLcode res;
  char *pszCurlError = NULL;
  char *httpError = NULL;
  char httpErrorSet[] = "45";
  char szUserPass[256] = { 0 };
  int httpint;
  bool bVerifyPeer, bCheckHostname;
  struct XferContext ftpfile;
  struct stat fileStat = { 0 };
  CommOpenData open_data;
  bool report_duration = FALSE;
  long lTimeStart_func;
  long lTimeEnd_func, lDur_func;
  char *url = NULL;

  url = pszUrl;

  /* Clear the duration and attempts values if they are being passed in */
  if (dl_duration)
    *dl_duration = 0;
  if (dl_attempts)
    *dl_attempts = 0;

  lTimeStart_func = linux_time(NULL);

  memset(&open_data, 0, sizeof(open_data));
//  curl_off_t curlRcvSpeed; uncomment if ever want to set curl max receive speed.

  if ((eMethod == DL_METHOD_FTP) || (eMethod == DL_METHOD_HTTP)
      || (eMethod == DL_METHOD_GET))
  {
    memset(&ftpfile, 0, sizeof(ftpfile));
    ftpfile.iFileHandle = -1;
    strncpy(ftpfile.filename, pszDest, sizeof(ftpfile.filename));
    ftpfile.event_set_id = event_set_id;
    ftpfile.event_id = event_id;
    dbg_msg("DownloadFile: pszDest= \"%s\"\n", pszDest);

    res = CURLE_FAILED_INIT;
    dbg_msg("Download Max Attempts: %d\n", g_sIoProperties.iDLMaxAttempts);
    dbg_msg("Download Network Timeout: %d\n",
            g_sIoProperties.iDLNetworkTimeout);
    dbg_msg("Download Retry Timeout: %d\n", g_sIoProperties.iDLRetryTimeout);
    GetComType();

    for (ftpfile.dl_retry = 0;
        ((CURLE_OK != res)
            && (ftpfile.dl_retry < g_sIoProperties.iDLMaxAttempts));
        ftpfile.dl_retry++)
    {
      /* Pet the watchdog with each retry attempt */
      EventSchedulerPetWatchdog(event_set_id, event_id);

      /* If this is a Maintenance Download, make sure we are still in the maintenance window */
      if (bMaintDl)
      {
        time_t cur_time = linux_time(NULL);

        dbg_msg("\n\nDownload - Current Time %d\n\n", cur_time);
        if (!IsInMaintenanceWindow(cur_time, NULL))
        {
          time_t seconds_to_next_dl;

          seconds_to_next_dl = VHQRunTimeForDownload(
              GetEventExpiryTime(event_set_id, EVENT_TIMER_DATE_TIME), 0, 0);
          if (seconds_to_next_dl)
          {
            log_err(
                "%s: Maintenance Window download FAILED because we are outside the maintenance window, reschedule\n",
                __FUNCTION__);
            ret_val =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_RESCHEDULE;
          }
          else
          {
            log_err(
                "%s: Maintenance Window download FAILED because we are outside the maintenance window\n",
                __FUNCTION__);
            ret_val =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_ERROR;
          }

          break; /* break for */
        }
      }

      log_dbg("\n\nDOWNLOAD ATTEMPT %d\n\n", ftpfile.dl_retry);

      /* Notify apps about retry */
      if (ftpfile.dl_retry > 0)
      {
        EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_RETRY, pszDest,
                          ftpfile.dl_retry, VHQ_SUCCESS, EVENT_SET_ID_INVALID,
                          EVENT_ID_INVALID, dl_notify);
      }

      curl = curl_easy_init();
      if (curl)
      {
        char *transfer_protocol = "ftp";
        open_data.curl = curl;

        // download recover and resume
        if (ftpfile.dl_retry)
        {
          sleep(g_sIoProperties.iDLRetryTimeout);
        }

        // make it use the ADK functions if necessary
        networkErr = CommOpen(&open_data);

        char hostname[256] = { 0 };

        if (g_sIoProperties.bSSLEnabled == TRUE)
          sscanf(url, "https://%[^/]", hostname);
        else
          sscanf(url, "http://%[^/]", hostname);

        if (networkErr == 0 && !ISvalidIP(hostname))
        {
          struct sockaddr_in addr;
          socklen_t addrlen = sizeof(addr);
          dbg_msg("%s: socket is %d \r\n", __FUNCTION__, open_data.socketFd);

          if (getpeername(open_data.socketFd, (struct sockaddr*) &addr,
                          &addrlen) == 0)
          {
            char ip[INET6_ADDRSTRLEN] = { 0 };
            char str[256] = { 0 };
            int port = 0;

            inet_ntop(addr.sin_family, &addr.sin_addr, ip, sizeof(ip));
            port = ntohs(addr.sin_port);

            /* construct a string of the format <URL>:<PORT>:<IP ADDR>
             This instructs the libCurl to use the specified IP Address for the URL without doing another DNS query
             For example
             google.com:443:172.217.21.238
             */

            snprintf(str, sizeof(str) - 1, "%s:%d:%s", hostname, port, ip);
            dns = curl_slist_append(dns, str);
            curl_easy_setopt(curl, CURLOPT_RESOLVE, dns);
          }
          else
          {
            log_err("%s: Failed to explicitly resolve DNS\n", __FUNCTION__);
          }
        }

        // update required fields
        cURLsetMandatoryConfig(curl);
        curl_easy_setopt(curl, CURLOPT_DEBUGDATA, (void* )transfer_protocol);

//ADKTMS-149 test
//to simulate http 404 error
//pszUrl[strlen(pszUrl)-1]='0';
//ADKTMS-149 test
        // commented out due to %20s in the URL, plus the whole string length being too long.
        //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "DownloadFile (curl): pszUrl=\"%s\"\n", pszUrl);
        curl_easy_setopt(curl, CURLOPT_URL, url);

//              DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "Disabling Nagle Algorithm (set NODELAY)\n");
//              curlRet = curl_easy_setopt(curl, CURLOPT_TCP_NODELAY, (long)1);
//              if (CURLE_OK != curlRet)
//              DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "\nFAIL disabling Nagle %d\n", (int) curlRet);
        if (g_sIoProperties.iDLRxBufferSize == 0)
          g_sIoProperties.iDLRxBufferSize = 128 * 1024;
        if ((g_sIoProperties.iDLRxBufferSize >= DL_CURL_BUFFERSIZE_MIN)
            && (g_sIoProperties.iDLRxBufferSize < DL_CURL_BUFFERSIZE_MAX))
        {
          dbg_msg("Setting Receive Buffer Size: %d\n",
                  (int ) g_sIoProperties.iDLRxBufferSize);
          curlRet = curl_easy_setopt(curl, CURLOPT_BUFFERSIZE,
                                     (long ) g_sIoProperties.iDLRxBufferSize);
          if (CURLE_OK != curlRet)
            dbg_msg("\nFAIL setting receive buffer size: %d\n", (int ) curlRet);
          /*
           curlRcvSpeed = 8192;
           curlRet = curl_easy_setopt(curl, CURLOPT_MAX_RECV_SPEED_LARGE, curlRcvSpeed);
           if (CURLE_OK != curlRet)
           DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "\nFAIL setting Max Rx Speed %d\n", (int) curlRet);
           */
        }
        if (g_sIoProperties.bUseFTPProxy)
        {
          dbg_msg("Proxy mode enabled\n");
          curl_easy_setopt(curl, CURLOPT_PROXY, g_sIoProperties.szFTPProxy);
          if (g_sIoProperties.szFTPProxy[0] == 'S'
              || g_sIoProperties.szFTPProxy[0] == 's')
          {
            curl_easy_setopt(curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS4);
            dbg_msg("Proxy mode is SOCKS\n");
          }
        }

        if (IsSSLOption(url))
        {
          char SSLFtpFileName[512];

          memset(SSLFtpFileName, 0, sizeof(SSLFtpFileName));
          GetFileNameForInstance(SSLFtpFileName, (char*) SRV_FTPS_CERTFILE,
                                 GetCurrentInstance());

          VHQGetParameterBool(PARAM_SSL_PEER_VALIDATION, &bVerifyPeer);
          VHQGetParameterBool(PARAM_SSL_MATCH_HOSTNAME, &bCheckHostname);

          curl_easy_setopt(curl, CURLOPT_USE_SSL, CURLUSESSL_ALL);
          curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, bVerifyPeer ? 1L : 0L);
          curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST,
                           bCheckHostname ? 2L : 0L);

          if (IScURLversionCompatible(curl, 0x072700))
            curl_easy_setopt(curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
          else
            dbg_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n",
                    __FUNCTION__);

          // specify where the cert path is
          // we have to do it here because we need our curl handle.
          //            curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);        // for a folder full of them.
          curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFtpFileName);
#ifdef Mx2
          dbg_msg(
              "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
              __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
              SSLFtpFileName, VHQ_MAIN_FOLDER);
          curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
                    dbg_msg(  "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n",
                        __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0), SSLFtpFileName);
#endif
        }

        /* We can accept encoding so setup libcurl for that */
        if (eMethod == DL_METHOD_GET)
          curl_easy_setopt(curl, CURLOPT_ENCODING, "gzip");

        /* Define our callback to get called when there's data to be written */
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, XferBlockHandler);
        /* Set a pointer to our struct to pass to the callback */
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &ftpfile);

        // new error handling code
        curl_easy_setopt(curl, CURLOPT_FAILONERROR, 1L);
        pszCurlError = malloc(CURL_ERROR_SIZE);
        if (pszCurlError)
        {
          memset(pszCurlError, 0, CURL_ERROR_SIZE);
          curl_easy_setopt(curl, CURLOPT_ERRORBUFFER, pszCurlError);
        }

        /* This code might be needed later once we have Server authorization in place */
#if 0
                if (pszUser || pszPw)   // if either of these is not null, send both
                {
                    sprintf(szUserPass, "%s:%s", pszUser ? pszUser : "", pszPw ? pszPw : "");
                    curl_easy_setopt(curl, CURLOPT_USERPWD, szUserPass);
                }

        if (GenerateFileTransferCredentials(szUserPass, sizeof(szUserPass)))
        {
          curl_easy_setopt(curl, CURLOPT_USERPWD, szUserPass);
        }
#endif

        if (g_sIoProperties.bFTPforcePASV)
        {
          dbg_msg("Disabled EPSV\n");
//                  curl_easy_setopt(curl, CURLOPT_FTP_USE_EPSV, 0L);
        }
        else
        {
          dbg_msg("Enabled EPSV\n");
//                  curl_easy_setopt(curl, CURLOPT_FTP_USE_EPSV, 1L);
        }
        curl_easy_setopt(curl, CURLOPT_CRLF, 0L);
        curl_easy_setopt(curl, CURLOPT_TRANSFERTEXT, 0L);

        /* begin - resume download options */
        /* get filesize downloaded so far */
        if (stat(ftpfile.filename, &fileStat) != 0)
        {
          dbg_msg("%s: couldn't stat %s - setting size to 0\n", __FUNCTION__,
                  ftpfile.filename);
          fileStat.st_size = 0;

          /* Only report the download duration for full file downloads.  If we are resuming a download
           that was interrupted by power cycles or something like that, we will let the server
           determine the duration */
          report_duration = TRUE;
        }
        dbg_msg("fileStat.st_size:[%ld]\n", fileStat.st_size);

        /* set offset to append to file */
        curl_easy_setopt(curl, CURLOPT_RESUME_FROM, fileStat.st_size);
        /* set timeout to abort download if < 1 byte for iDLNetworkTimeout */
        dbg_msg("setting low speed limit: %d\n", 1L);
        curl_easy_setopt(curl, CURLOPT_LOW_SPEED_LIMIT, 1L);
        dbg_msg("setting low speed time: %ld\n",
                (long ) g_sIoProperties.iDLNetworkTimeout);
        curl_easy_setopt(curl, CURLOPT_LOW_SPEED_TIME,
                         (long ) g_sIoProperties.iDLNetworkTimeout);
        /* set DNS Cache to never timeout */
        curl_easy_setopt(curl, CURLOPT_DNS_CACHE_TIMEOUT, -1L);

#if SUPPORT_DOWNLOAD_PERCENTAGE_REPORTING
        if (dl_notify)
        {
          StartDownloadPercentageMonitor(pszDest, filesize, fileStat.st_size);
        }
#endif

        dbg_msg("\n\nCURL_EASY_PERFORM BEGIN\n\n");
        {
          long lTimeStart = linux_time(NULL);
          long lTimeEnd, lBytePerSec, lDur;
          res = curl_easy_perform(curl);

          if (res == CURLE_SSL_CACERT)
          {
            log_err("%s: Certificate expired, trying with default cert\n",
                    __FUNCTION__);

            if (g_sIoProperties.bSSLEnabled == TRUE)
            {
              char SSLFileName[512];

              memset(SSLFileName, 0, sizeof(SSLFileName));

              GetFileNameForInstance(SSLFileName,
                                     (char*) VHQ_PROD_SRV_SSL_CERTFILE,
                                     GetCurrentInstance());

              curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);

              dbg_notice(
                  "%s: Setting up CURL for SSL CAINFO = %s, CAPATH = %s\n",
                  __FUNCTION__, SSLFileName, VHQ_HOME_FOLDER);
              curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_HOME_FOLDER);

              res = curl_easy_perform(curl);
              dbg_msg("%s: res=%d at %d\n", __FUNCTION__, res, __LINE__);
            }
          }


          lTimeEnd = linux_time(NULL);

          lDur = lTimeEnd - lTimeStart;
          lBytePerSec = (lDur != 0) ? (ftpfile.iSize / lDur) : 0;

          log_dbg("Download took %d seconds, or %d bytes/sec\r\n", lDur,
                  lBytePerSec);

          /* Let's always report the best download numbers.  If we did more than 1 attempt we will
           update this at a later point in this function */
          if (report_duration && dl_duration)
          {
            if (lDur > 0)
              *dl_duration = (uint32) lDur;
            else
              *dl_duration = 1;
          }
        }
        dbg_msg("\n\nCURL_EASY_PERFORM RETURN\n\n");

#if SUPPORT_DOWNLOAD_PERCENTAGE_REPORTING
        if (dl_notify)
        {
          StopDownloadPercentageMonitor();
        }
#endif

        if (CURLE_OK != res)
        {
          /* we failed */

          /* Notify apps saying network error */
          EventNotification(TMS_EVENT_NOTIFY_NETWORK_ERROR, "", 0, VHQ_SUCCESS,
                            EVENT_SET_ID_INVALID, EVENT_ID_INVALID, dl_notify);

          dbg_msg("curl told us %d\n", res);
          if (pszCurlError)
          {
            log_err("Curl error %d: %s\n", res, pszCurlError);
            log_err("\n\nCURL ERROR %d: %s\n\n\n", res, pszCurlError);
          }
          else
            log_err("Curl error %d\n", res);

          if (CURLE_HTTP_RETURNED_ERROR == res)
          {
            httpError = strpbrk(pszCurlError, httpErrorSet);
            httpint = 0;
            if (httpError != NULL)
            {
              httpint = atoi(httpError);
            }
            if (pszCurlError)
            {
              free(pszCurlError);
              pszCurlError = NULL;
            }

            /* always cleanup */
            curl_easy_cleanup(curl);
            CommClose(&open_data);
            curl = NULL;

            /* Mitch (12-1-2015): Force a disconnect for these failure cases.  That way,
             the connection will be re-established, which will help if the connection itself
             has issues */
            CommNetDisconnect(TRUE);

            if (httpint >= VHQ_CURL_HTTP_ERROR_BASE
                && httpint <= VHQ_CURL_HTTP_ERROR_MAX)
            {
              ret_val = httpint;
              if (!VHQHTTPException(httpint))
              {
                log_err("HTTP Exception error %d; no retry\n", res);
                dbg_err("\n\nHTTP Exception error %d; no retry\n\n", res);
                dbg_err("\n\nCurl HTTP error %d\n\n", ret_val);
                break; /* break for */
              }
              else
              {
                dbg_err("\n\nCurl HTTP error %d continue retry\n\n", httpint);
                continue;
              }
            }
            else
            {
              break; /* break for */
            }
          }
          else if (res == CURLE_SSL_CACERT)
          {
            ret_val = VHQ_SERVER_POST_PAYLOAD_CURL_CERT_EXPIRED;
            break;
          }
          else
          {
            ret_val = VHQ_SERVER_POST_PAYLOAD_CURL_BASE + res;
          }
        }
        else
        {
          /* CURL_OK, Download is not complete yet, so lets just set the error code to CURL_ERROR_BASE */
          ret_val = VHQ_DL_FILE_CURL_ERROR_BASE;
          dbg_msg("curl told us CURLE_OK, checking signature\n");
          if (ftpfile.iFileHandle != -1)
          {
            fsync(ftpfile.iFileHandle);
          }
          if (!VHQSecurityVerifyFileSignature(ftpfile.filename, eHashAlgo,
                                              pszHash))
          {
            ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_SIGNATURE_MISMATCH;
            res = CURLE_PARTIAL_FILE;  //ADKTMS-155
            log_err("\n\nDownload - Sig Hash Mismatch %s; %d\n\n",
                    curl_easy_strerror(res), res);
            // File-File Signature Mismatch - download failed.
            // ADKTMS-155: If get this error, then abort retries; With download retry logic in place,
            // if hash check fails then it is a legitimate error and retries will not correct
            // so, abort at this point. res flag is checked after cleanup; if set then break.
          }
        }

        if (pszCurlError)
        {
          free(pszCurlError);
          pszCurlError = NULL;
        }

        curl_easy_cleanup(curl);
        CommClose(&open_data);
        curl = NULL;

//              DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "\n\nDownload return value %s; %d\n\n", curl_easy_strerror(res), res);

        if (VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_SIGNATURE_MISMATCH
            == ret_val)
        {
          // if Sig Mismatch error then don't retry, just abort download.
          break; /* break for */
        }
      }
      else
      {
        log_err("Curl Init Failed.\n");
        dbg_msg("Curl Init Failed.\n");
        break; /* break for */
      }
    } /* end for */

    if (CURLE_OK != res && ftpfile.dl_retry >= g_sIoProperties.iDLMaxAttempts)
    {
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_RETRIES_EXPIRED;
      log_err("Download FAILED after %d attempts\n",
              g_sIoProperties.iDLMaxAttempts);
    }

    /* Setup download attempts */
    if (dl_attempts)
    {
      *dl_attempts = ftpfile.dl_retry;
      dbg_msg("%s: dl_attempts set to %d\n", __FUNCTION__, *dl_attempts);
    }

    dbg_msg("\n\nOutside MW; broke out of For Loop.\n\n");
    if (ftpfile.iFileHandle != -1)
    {
#ifdef WIN32
            _close(ftpfile.iFileHandle);
            ftpfile.iFileHandle= -1;
#else
      close(ftpfile.iFileHandle);
      ftpfile.iFileHandle = -1;
#endif
      if (res == CURLE_OK)
      {
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED;
        log_dbg("Download Successful\n");
      }
    }
    else
      dbg_msg("%s ERROR: No file created\n", __FUNCTION__);
  }
  else if (eMethod == DL_METHOD_WEB_SERVICE)
  {
    log_err("%s ERROR: Web Service Download method not supported YET!!!\n",
            __FUNCTION__, eMethod);
  }
  else
    log_err("%s ERROR: Download method %d not supported\n", __FUNCTION__,
            eMethod);

  lTimeEnd_func = linux_time(NULL);

  lDur_func = lTimeEnd_func - lTimeStart_func;
  dbg_msg("DownloadFileDirect() internally took %ld seconds\r\n", lDur_func);

  if ((ftpfile.dl_retry > 1) && report_duration && dl_duration)
  {
    /* It took multiple attempts to perform the download so we can't just use the time
     it took to call curl_easy_perform().  We need to use the time for this whole
     function so lets overwrite dl_duration with the time this function took */
    if (lDur_func > 0)
    {
      *dl_duration = (uint32) lDur_func;
      dbg_msg(
          "%s: Multiple attempts required to download the file - updated dl_duration to %d seconds\r\n",
          __FUNCTION__, *dl_duration);
    }
    else
      *dl_duration = 1;
  }

  return ret_val;
}

vhq_result_t DownloadFileWorker(dl_file_method_t eMethod, char *pszDest,
                                char *pszUrl, dl_file_hash_algo_t eHashAlgo,
                                char *pszHash, bool bMaintDl, uint32 filesize,
                                event_set_id_t event_set_id,
                                event_id_t event_id, uint32 *dl_duration,
                                uint32 *dl_attempts, bool dl_notify)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  long lTimeStart;
  long lTimeEnd, lDur;

  lTimeStart = linux_time(NULL);
  ret_val = DownloadFileDirect(eMethod, pszDest, pszUrl, eHashAlgo,
                               pszHash,
                               bMaintDl, filesize, event_set_id, event_id,
                               dl_duration, dl_attempts, dl_notify);
  lTimeEnd = linux_time(NULL);

  lDur = lTimeEnd - lTimeStart;
  dbg_msg("DownloadFileDirect() took %ld seconds on %d attempts\r\n", lDur,
          *dl_attempts);

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
