---
title: tmsagt/src/VHQIo/FileUpload.c

---

# tmsagt/src/VHQIo/FileUpload.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[cleanupHandler](_file_upload_8c.md#function-cleanuphandler)**(void * arg) |
| int | **[deflateFile](_file_upload_8c.md#function-deflatefile)**(FILE * source, FILE * dest, int level) |
| size_t | **[XferBlockHandler](_file_upload_8c.md#function-xferblockhandler)**(void * buffer, size_t size, size_t nmemb, void * stream) |
| vhq_result_t | **[UploadFileDirect](_file_upload_8c.md#function-uploadfiledirect)**(upload_method_t eMethod, const char * pszFileName, char * pszUser, char * pszPw, char * pszUrl, bool compressionEnabled, char * ulFileName, event_set_id_t event_set_id, event_id_t event_id) |
| vhq_result_t | **[UploadFile](_file_upload_8c.md#function-uploadfile)**(upload_method_t eMethod, char * pszFileName, char * pszUser, char * pszPw, char * pszUrl, bool compressionEnabled, char * ulFileName, event_set_id_t event_set_id, event_id_t event_id) |
| vhq_result_t | **[UploadFileWebMethod](_file_upload_8c.md#function-uploadfilewebmethod)**(const char * pszFileName, const char * pszUrl, const char * pszWebMethod, char ** pszUploadMethodXML, const char * ulFileName, int * comm_id, int * srv_msg_id, char * operation_id, bool close_comm_id, event_set_id_t event_set_id, event_id_t event_id) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CHUNK](_file_upload_8c.md#define-chunk)**  |

## Detailed Description


Upload file given to URL 


## Functions Documentation

### function cleanupHandler

```cpp
void cleanupHandler(
    void * arg
)
```


### function deflateFile

```cpp
static int deflateFile(
    FILE * source,
    FILE * dest,
    int level
)
```


**Parameters**: 

  * **source** = source file stream 
  * **dest** = destination file stream 
  * **level** = level


**Return**: Z_OK, if success. 

This function uses zlib library for compression and decompression of files. 


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

  * **buffer** = buffer to read data 
  * **size** = buffer should have at most size multiplied with nitems number of bytes. 
  * **nmemb** = size read 
  * **stream** = stream from which data is read(set with CURLOPT_READDATA)


**Return**: -1, if error; if success,number of bytes read 

This callback function gets called by libcurl as soon as it needs to read data in order to upload data to server. 


### function UploadFileDirect

```cpp
static vhq_result_t UploadFileDirect(
    upload_method_t eMethod,
    const char * pszFileName,
    char * pszUser,
    char * pszPw,
    char * pszUrl,
    bool compressionEnabled,
    char * ulFileName,
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **eMethod** = upload method 
  * **pszFileName** = location and filename which needs to be uploaded. 
  * **pszUser** = name of user 
  * **pszPw** = PW 
  * **pszUrl** = server URL 
  * **compressionEnabled** = TRUE, if compression enabled. 
  * **ulFileName** = upload filename 
  * **event_set_id** = event set id 
  * **event_id** = event id


**Return**: vhq_result_t, VHQ_SUCCESS on success. 

This function checks for file permissions and uploads the file according to proper upload method. 


### function UploadFile

```cpp
vhq_result_t UploadFile(
    upload_method_t eMethod,
    char * pszFileName,
    char * pszUser,
    char * pszPw,
    char * pszUrl,
    bool compressionEnabled,
    char * ulFileName,
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **eMethod** = upload method 
  * **pszFileName** = local filename 
  * **pszUser** = name of user 
  * **pszPw** = PW 
  * **pszUrl** = server URL 
  * **compressionEnabled** = TRUE, if compression enabled. 
  * **ulFileName** = upload filename 
  * **event_set_id** = event set id 
  * **event_id** = event id


**Return**: vhq_result_t, VHQ_SUCCESS on success. 

This function is wrapper function for UploadFileDirect() 


### function UploadFileWebMethod

```cpp
vhq_result_t UploadFileWebMethod(
    const char * pszFileName,
    const char * pszUrl,
    const char * pszWebMethod,
    char ** pszUploadMethodXML,
    const char * ulFileName,
    int * comm_id,
    int * srv_msg_id,
    char * operation_id,
    bool close_comm_id,
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **pszFileName** = local file name to be uploaded to server 
  * **pszUrl** = server address 
  * **pszWebMethod** = transfer method, should be web service 
  * **pszUploadMethodXML** = header information for transmission 
  * **ulFileName** = the expected file name by the server 
  * **comm_id** = communication ID 
  * **msg_id** = message ID 
  * **srv_msg_id** = server message ID 
  * **operation_id** = operation ID 
  * **close_comm_id** = TRUE, if close comm_id 
  * **event_set_id** = event set id of event 
  * **event_id** = event ID of event


**Return**: vhq_result_t, VHQ_SUCCESS on success. 

This function is for uploading file process for HTTP Post transfer to the VHQ server 




## Macros Documentation

### define CHUNK

```cpp
#define CHUNK 16384
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <libgen.h>

#include <zlib.h>
#include "EventScheduler.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQIo.h"
#include "VHQIoInternals.h"
#include "VHQSecurity.h"
#include "../inc/VHQConfig.h"
#include "../inc/VHQFileNames.h"
#include "VHQPosIPC.h"
#include "VHQUtils.h"
#include "VHQcURLconfiguration.h"

#ifdef WIN32
#include <Fcntl.h>
#include <sys\stat.h>
#endif
#include <curl/curl.h>

#define CHUNK 16384
extern void cleanupHandler(void *arg);


static int deflateFile(FILE *source, FILE *dest, int level)
{
  int ret, flush;
  unsigned have;
  z_stream strm;
  unsigned char in[CHUNK];
  unsigned char out[CHUNK];

  if ((source == NULL) || (dest == NULL))
    return Z_ERRNO;

  /* allocate deflate state */
  strm.zalloc = Z_NULL;
  strm.zfree = Z_NULL;
  strm.opaque = Z_NULL;

  //ret = deflateInit(&strm, level);
  ret = deflateInit2(&strm, level, Z_DEFLATED, (15 + 16), 8,
                     Z_DEFAULT_STRATEGY);
  if (ret != Z_OK)
    return ret;

  /* compress until end of file */
  do
  {
    strm.avail_in = fread(in, 1, CHUNK, source);
    //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: available in: %u \n", __FUNCTION__, strm.avail_in);
    if (ferror(source))
    {
      (void) deflateEnd(&strm);
      return Z_ERRNO;
    }
    flush = feof(source) ? Z_FINISH : Z_NO_FLUSH;
    strm.next_in = in;

    /* run deflate() on input until output buffer not full, finish
     compression if all of source has been read in */
    do
    {
      strm.avail_out = CHUNK;
      strm.next_out = out;
      ret = deflate(&strm, flush); /* no bad return value */
      assert(ret != Z_STREAM_ERROR); /* state not clobbered */
      have = CHUNK - strm.avail_out;
      if (fwrite(out, 1, have, dest) != have || ferror(dest))
      {
        (void) deflateEnd(&strm);
        return Z_ERRNO;
      }
    }
    while (strm.avail_out == 0);
    assert(strm.avail_in == 0); /* all input will be used */

    /* done when last data in file processed */
  }
  while (flush != Z_FINISH);
  assert(ret == Z_STREAM_END); /* stream will be complete */

  /* clean up and return */
  (void) deflateEnd(&strm);
  return Z_OK;
}


static size_t XferBlockHandler(void *buffer, size_t size, size_t nmemb,
                               void *stream)
{
  size_t retcode;
  struct XferContext *out = (struct XferContext*) stream;

  /* Uploads can take a long time so make sure we pet the watchdog every time we
   tranfer a block to CURL */
  EventSchedulerPetWatchdog(out->event_set_id, out->event_id);

  if (NULL == out)
    return -1;
  if (NULL != out && -1 == out->iFileHandle)
  {
    /* open file for writing */
    printf("XferBlockHandler: Opening %s\r\n", out->filename);
#ifndef WIN32
    out->iFileHandle = open(out->filename, O_RDONLY);
#else
        out->iFileHandle=_open(out->filename, O_RDONLY);
#endif
    if (-1 == out->iFileHandle)
    {
      printf("XferBlockHandler: Couldn't open file\r\n");
      return -1; /* failure, can't open file to write */
    }
    else
    {
      printf("XferBlockHandler: File opened, handle is %d\r\n",
             out->iFileHandle);
    }
  }
  printf("XferBlockHandler: transferring %d bytes\r\n", size * nmemb);
  retcode = read(out->iFileHandle, buffer, size * nmemb);
  if ((int) retcode == -1)
  {
    dbg_err("read error: %d, %s\r\n", errno, strerror(errno));
  }

  return retcode;
}

static vhq_result_t UploadFileDirect(upload_method_t eMethod,
                                     const char *pszFileName, char *pszUser,
                                     char *pszPw, char *pszUrl,
                                     bool compressionEnabled, char *ulFileName,
                                     event_set_id_t event_set_id,
                                     event_id_t event_id)
{
  UNUSED(pszUser);
  UNUSED(pszPw);
  struct stat file_stat;
  struct passwd *psPasswd;
  struct curl_slist *headerlist = NULL;
  char hdr_1[128];
  char hdr_2[128];
  CURL *curl;
  CURLcode res;
  curl_off_t fsize;
  struct XferContext ftpfile;
  char szUserPass[256];
  char *pszCurlError = NULL;
  const char *local_pszFileName = pszFileName;
  bool bVerifyPeer, bCheckHostname;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_UPLOAD_ERROR;

  dbg_msg("%s: + (pszFileName = %s)\n", __FUNCTION__, pszFileName);

  /* REVISIT (Mitch 3-14-2012): We are not supposed to upload /mnt/sram/attack.log.
   It has r/w priveleges for everyone so the normal r/w permissions failure does not
   cover the attack.log file */
  if (strcmp(pszFileName, "/mnt/sram/attack.log") == 0)
  {
    log_err("%s ERROR: Trying to upload /mnt/sram/attack.log\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_PERMISSION_ERROR;
  }

  /* If we are uploading a screenshot or dir_list we are fine also */
  if ((strcmp(pszFileName, DIR_LIST_OUT_FILE) == 0)
      || (strcmp(pszFileName, SCREEN_CAP_OUT_FILE) == 0))
  {
    dbg_msg("%s: Uploading DIR_LIST or SCREEN_CAP file %s\n", __FUNCTION__,
            pszFileName);
    if (stat(pszFileName, &file_stat) != 0)
    {
      log_err("%s ERROR: Could not stat %s\n", __FUNCTION__, pszFileName);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
    }
  }
  else
  {
    /* Otherwise, lets check ownership and only upload usr1 files */

    dbg_msg("%s: Checking file permissions\n", __FUNCTION__);
#ifdef Mx2
    psPasswd = getpwuid(getuid());
#else
        psPasswd = getpwnam("usr1");
#endif

    if (stat(pszFileName, &file_stat) != 0)
    {
      log_err("%s ERROR: Could not stat %s\n", __FUNCTION__, pszFileName);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
    }

    if (!psPasswd)
      dbg_err("%s: psPasswd is NULL\n", __FUNCTION__);
    else
      dbg_msg("%s: comparing %d to %d\n", __FUNCTION__, file_stat.st_uid,
              psPasswd->pw_uid);

    if ((!psPasswd) || (file_stat.st_uid != psPasswd->pw_uid))
    {
      bool permission_verified = FALSE;
      int group_counter, num_groups;
      gid_t my_gids[64];
      log_err("%s: Trying to upload a non-VHQ owned file\n", __FUNCTION__);

      num_groups = getgroups(64, my_gids);

      for (group_counter = 0; group_counter < num_groups; group_counter++)
      {
        if (my_gids[group_counter] == file_stat.st_gid)
        {
          dbg_msg("%s: we have group read priveleges as gid %d\n", __FUNCTION__,
                  my_gids[group_counter]);
          permission_verified = TRUE;
          break;
        }
      }

      if (!permission_verified)
      {
        dbg_msg("%s: Trying to upload a non-usr1 group file\n", __FUNCTION__);
        if (!(file_stat.st_mode & S_IROTH))
        {
          log_err("%s ERROR: Trying to upload a file without permissions\n",
                  __FUNCTION__);
          return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_PERMISSION_ERROR;
        }
        else
          dbg_msg("%s: We have OTHER read permissions of the file\n",
                  __FUNCTION__);
      }
    }

    dbg_msg("%s: File permissions OK\n", __FUNCTION__);
  }
  /* If we made it to here, we are good to upload the file */

  /* Add upload code here */
  if ((eMethod == UPLOAD_METHOD_FTP) || (eMethod == UPLOAD_METHOD_HTTP))
  {
    char szSerialNum[16];
    char *pszBaseName;
    char szPathCopy[256], szPathCopy2[256];
    char szTargetName[128];
    char *szRnFrName;
    char date[64];
    time_t timeval;
    struct tm local_time;

    dbg_msg("%s: Creating upload file name based on S/N and date/time\n",
            __FUNCTION__);

    memset(&ftpfile, 0, sizeof(ftpfile));
    ftpfile.iFileHandle = -1;

    memset(szSerialNum, 0, sizeof(szSerialNum));
    GetSerialNumber(szSerialNum);
    linux_time(&timeval);
    if (linux_localtime(&timeval, &local_time))
      strftime(date, 64, "_%y%m%d_%H%M%S", &local_time);
    else
      sprintf(date, "UNKNOWN");

    pszBaseName = os_basename(local_pszFileName);
    sprintf(szTargetName, "%s%s-%s", szSerialNum, date, pszBaseName);
    sprintf(szPathCopy, "%s%s%s-%s.partial", pszUrl, szSerialNum, date,
            pszBaseName);

    strcpy(szPathCopy2, szPathCopy);

    szRnFrName = os_basename(szPathCopy2);
    sprintf(hdr_1, "RNFR %s", szRnFrName);
    sprintf(hdr_2, "RNTO %s", szTargetName);
    strcpy(ulFileName, szTargetName);
    fsize = (curl_off_t) file_stat.st_size;

    strncpy(ftpfile.filename, pszFileName, sizeof(ftpfile.filename));
    ftpfile.event_set_id = event_set_id;
    ftpfile.event_id = event_id;

    curl = curl_easy_init();
    if (curl)
    {
      // update required fields
      cURLsetMandatoryConfig(curl);

      dbg_msg(
          "UploadFile (curl): pszUrl=\"%s\" - Target Name = \"%s\", file = %s (size = %d)\n",
          szRnFrName, szTargetName, pszFileName, fsize);
      curl_easy_setopt(curl, CURLOPT_URL, szPathCopy);

      dbg_msg("UploadFile (curl): hdr1=\"%s\"\n\thdr_2=\"%s\"\n", hdr_1, hdr_2);
      headerlist = curl_slist_append(headerlist, hdr_1);
      headerlist = curl_slist_append(headerlist, hdr_2);

      /* we want to use our own read function */
      curl_easy_setopt(curl, CURLOPT_READFUNCTION, XferBlockHandler);
      /* Set a pointer to our struct to pass to the callback */
      curl_easy_setopt(curl, CURLOPT_READDATA, &ftpfile);

      /* enable uploading */
      curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);

      if (IsSSLOption(pszUrl))
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
          dbg_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n", __FUNCTION__);

        // specify where the cert path is
        // we have to do it here because we need our curl handle.
        //          curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);        // for a folder full of them.
        curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFtpFileName);
#ifdef Mx2
        dbg_msg(
            "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
            __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
            SSLFtpFileName, VHQ_MAIN_FOLDER);
        curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
                dbg_msg( "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n",
                    __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0), SSLFtpFileName);
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

      /* pass in that last of FTP commands to run after the transfer */
      curl_easy_setopt(curl, CURLOPT_POSTQUOTE, headerlist);

      /* Set the size of the file to upload (optional).  If you give a *_LARGE
       option you MUST make sure that the type of the passed-in argument is a
       curl_off_t. If you use CURLOPT_INFILESIZE (without _LARGE) you must
       make sure that to pass in a type 'long' argument. */
      curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE, (curl_off_t )fsize);

      res = curl_easy_perform(curl);

      /* always cleanup */
      curl_easy_cleanup(curl);

      /* Check for errors */
      if (CURLE_OK != res)
      {
        /* we failed */
        dbg_msg("curl told us %d\n", res);
        ret_val = VHQ_CURL_ERROR_BASE + res;
        if (pszCurlError)
        {
          log_err("Curl error %d: %s\n", res, pszCurlError);
        }
        else
          log_err("Curl error %d\n", res);
      }
      else
        ret_val = VHQ_SUCCESS;

      if (pszCurlError)
      {
        free(pszCurlError);
        pszCurlError = NULL;
      }
    }
  }
  else if (eMethod == UPLOAD_METHOD_POST)
  {
    FILE *fd;
    char compressed_fileName[256];
    char *file_data;
    int file_data_size;

    dbg_msg("%s: UPLOAD_METHOD_POST\n", __FUNCTION__);

    if (compressionEnabled)
    {
      int deflate_ret;
      FILE *source;
      FILE *zip;
      struct stat compressed_file_stat;

      dbg_msg("%s: compressionEnabled - compressing file\n", __FUNCTION__);
      /* Setup compressed file for TMP directory */

#ifdef Mx2
      strcpy(compressed_fileName, VHQ_TMP);
#else
            strcpy(compressed_fileName, "/tmp");
#endif
      strcat(compressed_fileName, "/");
      strcat(compressed_fileName, os_basename(pszFileName));
      strcat(compressed_fileName, ".gz");

      source = fopen(pszFileName, "rb");
      zip = fopen(compressed_fileName, "wb");

      dbg_msg("%s: calling deflateFile(%s, %s)\n", __FUNCTION__, pszFileName,
              compressed_fileName);
      deflate_ret = deflateFile(source, zip, Z_DEFAULT_COMPRESSION);
      dbg_msg("%s: deflateFile() returned: %d \n", __FUNCTION__, deflate_ret);
      if (source)
        fclose(source);
      if (zip)
        fclose(zip);

      if (deflate_ret != Z_OK)
      {
        log_err("%s: deflateFile() returned ZLIB error %d\n", __FUNCTION__,
                deflate_ret);
        return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_COMPRESSION_ERROR;
      }

      fd = fopen(compressed_fileName, "rb"); /* open file to upload */
      if (!fd)
      {
        return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_PERMISSION_ERROR; /* can't continue */
      }

      if (stat(compressed_fileName, &compressed_file_stat) != 0)
      {
        fclose(fd);
        log_err("%s ERROR: Could not stat %s\n", __FUNCTION__,
                compressed_fileName);
        return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
      }
      file_data_size = compressed_file_stat.st_size;
    }
    else
    {

      fd = fopen(pszFileName, "rb"); /* open file to upload */
      if (!fd)
      {
        return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_PERMISSION_ERROR; /* can't continue */
      }

      if (stat(pszFileName, &file_stat) != 0)
      {
        fclose(fd);
        log_err("%s ERROR: Could not stat %s\n", __FUNCTION__, pszFileName);
        return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
      }
      file_data_size = file_stat.st_size;
    }

    file_data = malloc(file_data_size);
    if (!file_data)
    {
      fclose(fd);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_MEMORY_ERROR; /* can't continue */
    }

    curl = curl_easy_init();
    if (curl)
    {
      int res;
      unsigned char sha1_digest[SHA_DIGEST_LENGTH];
      char sha1_signature_option_str[128];
      char sha1_signature_cmac_option_str[128];

      // update required fields
      cURLsetMandatoryConfig(curl);

      /* upload to this place */
      curl_easy_setopt(curl, CURLOPT_URL, pszUrl);

      memset(file_data, 0, file_data_size);
      res = fread(file_data, 1, file_data_size, fd);
      if (res < file_data_size && ferror(fd))
        dbg_msg("%s: ERROR: Could not read from file", __FUNCTION__);
      curl_easy_setopt(curl, CURLOPT_POSTFIELDS, file_data);

      curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, (long )file_data_size);

      if (IsSSLOption(pszUrl))
      {
        char SSLFileName[512];

        memset(SSLFileName, 0, sizeof(SSLFileName));
        GetFileNameForInstance(SSLFileName, (char*) SRV_SSL_CERTFILE,
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
          log_err("%s: Fail to setup CURL_SSLVERSION_TLSv1_2\n", __FUNCTION__);

        // specify where the cert path is
        // we have to do it here because we need our curl handle.
        //          curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);        // for a folder full of them.
        curl_easy_setopt(curl, CURLOPT_CAINFO, SSLFileName);
#ifdef Mx2
        dbg_msg(
            "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s, CAPATH = %s\n",
            __FUNCTION__, (bVerifyPeer ? 1 : 0), (bCheckHostname ? 2 : 0),
            SSLFileName, VHQ_MAIN_FOLDER);
        curl_easy_setopt(curl, CURLOPT_CAPATH, VHQ_MAIN_FOLDER);
#else
                dbg_msg(  "%s: Setting up CURL for SSL - VERIFYPEER = %d, VERIFYHOST = %d, CAINFO = %s\n",
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

      /* Add the custom SHA1 header data if we can calculate it */
      memset(sha1_digest, 0, sizeof(sha1_digest));
      if (VHQSecurityGenSha1(pszFileName, sha1_digest))
      {
        char sha1_hex_str[128];

        headerlist = curl_slist_append(
            headerlist, "Content-Type: application/octet-stream");

        dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n", __FUNCTION__);
        memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
        if (ConvertBinaryToHexString((char*) sha1_digest, SHA_DIGEST_LENGTH,
                                     sha1_hex_str, sizeof(sha1_hex_str)))
        {
          unsigned char cmac[SIGNATURE_LENGTH];
          char cmac_str[(SIGNATURE_LENGTH * 2) + 1];

          if (VHQSecurityGenSig((unsigned char*) sha1_digest, SHA_DIGEST_LENGTH,
                                cmac, sizeof(cmac)))
          {

            if (ConvertBinaryToHexString((char*) cmac, sizeof(cmac), cmac_str,
                                         sizeof(cmac_str)))
            {

              dbg_msg("%s: Adding SHA1 to custom header\n", __FUNCTION__);
              memset(sha1_signature_option_str, 0,
                     sizeof(sha1_signature_option_str));
              sprintf(sha1_signature_option_str, "SHA1: %s", sha1_hex_str);
              headerlist = curl_slist_append(headerlist,
                                             sha1_signature_option_str);

              dbg_msg("%s: Adding SHA1 CMAC to custom header\n", __FUNCTION__);
              memset(sha1_signature_cmac_option_str, 0,
                     sizeof(sha1_signature_cmac_option_str));
              sprintf(sha1_signature_cmac_option_str, "CMAC: %s", cmac_str);
              headerlist = curl_slist_append(headerlist,
                                             sha1_signature_cmac_option_str);
              curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headerlist);
            }
          }
        }

        if (compressionEnabled)
        {
          headerlist = curl_slist_append(headerlist, "Content-Encoding: gzip");
        }
      }

      res = curl_easy_perform(curl);

      /* always cleanup */
      curl_easy_cleanup(curl);

      /* Check for errors */
      if (CURLE_OK != res)
      {
        /* we failed */
        dbg_msg("curl told us %d\n", res);
        ret_val = VHQ_CURL_ERROR_BASE + res;
        if (pszCurlError)
        {
          log_err("Curl error %d: %s\n", res, pszCurlError);
        }
        else
          log_err("Curl error %d\n", res);
      }
      else
        ret_val = VHQ_SUCCESS;

      if (pszCurlError)
      {
        free(pszCurlError);
        pszCurlError = NULL;
      }

      free(file_data);
      fclose(fd);

      if (compressionEnabled)
      {
        dbg_msg("%s: removing gzip file %s\n", __FUNCTION__,
                compressed_fileName);
        remove(compressed_fileName);
      }

      strcpy(ulFileName, os_basename(local_pszFileName));

    }
    else
    {
      free(file_data);
      fclose(fd);
    }
  }
  else
  {
    /* For web methods, lets just create the UL file name */
    char szSerialNum[16];
    char *pszBaseName;
    char szTargetName[256];
    char date[64];
    time_t timeval;
    struct tm local_time;

    memset(szSerialNum, 0, sizeof(szSerialNum));
    GetSerialNumber(szSerialNum);
    linux_time(&timeval);
    if (linux_localtime(&timeval, &local_time))
      strftime(date, 64, "_%y%m%d_%H%M%S", &local_time);
    else
      sprintf(date, "_UNKNOWN_TIME");

    dbg_msg(
        "%s: Getting basename of \"%s\" - assigning to pszBaseName @ 0x%08x , method %d\n",
        __FUNCTION__, local_pszFileName, &pszBaseName, eMethod);
    pszBaseName = os_basename(local_pszFileName);

    dbg_msg("%s: pszBaseName = \"%s\"\n", __FUNCTION__, pszBaseName);
    sprintf(szTargetName, "%s%s-%s", szSerialNum, date, pszBaseName);
    strcpy(ulFileName, szTargetName);
    ret_val = VHQ_SUCCESS;
  }

  return ret_val;
}


vhq_result_t UploadFile(upload_method_t eMethod, char *pszFileName,
                        char *pszUser, char *pszPw, char *pszUrl,
                        bool compressionEnabled, char *ulFileName,
                        event_set_id_t event_set_id, event_id_t event_id)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_UPLOAD_ERROR;

  log_dbg("%s: method %d\n", __FUNCTION__, eMethod);
  ret_val = UploadFileDirect(eMethod, pszFileName, pszUser, pszPw, pszUrl,
                             compressionEnabled, ulFileName, event_set_id,
                             event_id);

  return ret_val;
}


vhq_result_t UploadFileWebMethod(const char *pszFileName, const char *pszUrl,
                                 const char *pszWebMethod,
                                 char **pszUploadMethodXML,
                                 const char *ulFileName, int *comm_id,
                                 int *srv_msg_id, char *operation_id,
                                 bool close_comm_id,
                                 event_set_id_t event_set_id,
                                 event_id_t event_id)
{
  (void) (event_set_id);
  (void) (event_id);
  (void) (ulFileName);
  char *ServerResponse = NULL;
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_WEB_METHOD_UPLOAD_ERROR;
  char *updatedXMLData = NULL;

  if ((pszFileName == NULL) || (!FileExists(pszFileName)))
  {
    log_err(
        "%s: Upload File %s does not exist - returning VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST\n",
        __FUNCTION__, (pszFileName!=NULL) ? pszFileName : "NULL");
    return VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
  }

  dbg_msg("%s: Calling PostUpload - pszUrl = %s, pszWebMethod = %s\n",
          __FUNCTION__, pszUrl, pszWebMethod);

#ifdef EVENT_SCHED_THREAD_MODE
  /* Push a cleanup handler to make sure ContactServerMutex gets unlocked if this thread is cancelled */
  dbg_notice("%s: pushing cleanupHandler with pthread_cleanup_push()\n\n\n",
             __FUNCTION__);
  pthread_cleanup_push(cleanupHandler, NULL)
        ;

        GetContactServerLock();
#endif

  VHQXmlUpdateNonce(*pszUploadMethodXML, strlen(*pszUploadMethodXML), &updatedXMLData, TRUE);

  if (PostUpload(pszUrl, pszWebMethod, (const char**) &updatedXMLData,
                 &ServerResponse, pszFileName))
  {
    log_dbg("%s: PostUpload successful - Parsing response\n", __FUNCTION__);

    if (ServerResponse)
    {
      char *DeviceResponse = NULL;
      int DeviceResponseLength = 0;

      dbg_alert("%s: Processing Server Response (%d bytes):\n[%s]\n",
                __FUNCTION__, strlen(ServerResponse), ServerResponse);
      ret_val = VHQXmlProcessServerMessage(ServerResponse,
                                           strlen(ServerResponse), comm_id,
                                           (uint32*) srv_msg_id,
                                           &DeviceResponse,
                                           &DeviceResponseLength, operation_id,
                                           close_comm_id, FALSE);
      if (ret_val != VHQ_SUCCESS)
      {
        log_err("Processed Server Response (%d bytes):\n[%s]\nResult = %d\n",
                strlen(ServerResponse), ServerResponse, ret_val);
      }

      free(ServerResponse);
      ServerResponse = NULL;

      if (DeviceResponse)
      {
        free(DeviceResponse);
        DeviceResponse = NULL;
      }
    }
  }
#ifdef EVENT_SCHED_THREAD_MODE
        dbg_msg(
            "%s: popping and executing cleanupHandler with pthread_cleanup_pop(1)\n\n\n",
            __FUNCTION__);
        pthread_cleanup_pop(1);
#endif

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
