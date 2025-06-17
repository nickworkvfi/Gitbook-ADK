---
title: tmsagt/src/VHQIo/FileDownload.c

---

# tmsagt/src/VHQIo/FileDownload.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[inflateFile](_file_download_8c.md#function-inflatefile)**(FILE * source, FILE * dest) |
| vhq_result_t | **[VHQMAIN_ProcessParameterUpdate](_file_download_8c.md#function-vhqmain-processparameterupdate)**(char * receiver, char * pszDest, char * additional_info, uint32 additional_info_size, dl_file_dl_type_t eType) |
| vhq_result_t | **[ProcessContentUpdate](_file_download_8c.md#function-processcontentupdate)**(char * user, char * pszFromDest, char * pszDestDir, dl_file_dl_type_t eType, char * additional_info, uint32 additional_info_size) |
| vhq_result_t | **[ProcessVHQIniUpdate](_file_download_8c.md#function-processvhqiniupdate)**(char * pszDest, char * additional_info, uint32 additional_info_size) |
| vhq_result_t | **[ProcessVHQParameterUpdate](_file_download_8c.md#function-processvhqparameterupdate)**(char * pszDest, char * additional_info, uint32 additional_info_size, dl_file_dl_type_t eType) |
| vhq_result_t | **[ProcessParameterUpdate](_file_download_8c.md#function-processparameterupdate)**(char * receiver, char * pszDest, char * additional_info, uint32 additional_info_size, dl_file_dl_type_t eType) |
| vhq_result_t | **[DownloadFile](_file_download_8c.md#function-downloadfile)**(dl_file_method_t eMethod, char * pszDest, char * pszDestFlash, dl_file_hash_algo_t eHashAlgo, char * pszHash, char * pszUrl, bool bMaintDl, uint32 filesize, event_set_id_t event_set_id, event_id_t event_id, uint32 * dl_duration, uint32 * dl_attempts, bool dl_notify) |
| vhq_result_t | **[ProcessDownloadFile](_file_download_8c.md#function-processdownloadfile)**(char * user, char * pszFromDest, char * pszToDest, dl_file_dl_type_t eType, VHQResponseSendMsg * response, char * receiver, event_set_id_t event_set_id, event_id_t event_id, bool compressionEnabled, uint32 * si_flag_ptr) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CHAR](_file_download_8c.md#define-max-char)**  |
|  | **[CHUNK](_file_download_8c.md#define-chunk)**  |

## Detailed Description


Download file given URL 


## Functions Documentation

### function inflateFile

```cpp
static int inflateFile(
    FILE * source,
    FILE * dest
)
```


### function VHQMAIN_ProcessParameterUpdate

```cpp
vhq_result_t VHQMAIN_ProcessParameterUpdate(
    char * receiver,
    char * pszDest,
    char * additional_info,
    uint32 additional_info_size,
    dl_file_dl_type_t eType
)
```


**Parameters**: 

  * **receiver** = receiver name. 
  * **pszDest** = downloaded file 
  * **additional_info** = additional info 
  * **additional_info_size** = additional info size 
  * **eType** = type of downloaded file


**Return**: VHQ_SUCCESS, if success. 

This function processes a parameter update for application. 


### function ProcessContentUpdate

```cpp
static vhq_result_t ProcessContentUpdate(
    char * user,
    char * pszFromDest,
    char * pszDestDir,
    dl_file_dl_type_t eType,
    char * additional_info,
    uint32 additional_info_size
)
```


**Parameters**: 

  * **user** = username 
  * **pszFromDest** = downloaded file 
  * **pszDestDir** = destination directory to copy 
  * **eType** = download file type 
  * **additional_info** = additional info string 
  * **additional_info_size** = size of additional info


**Return**: VHQ_SUCCESS, if success 

This function processes a content update. 


### function ProcessVHQIniUpdate

```cpp
static vhq_result_t ProcessVHQIniUpdate(
    char * pszDest,
    char * additional_info,
    uint32 additional_info_size
)
```


**Parameters**: 

  * **pszDest** = downloaded file 
  * **additional_info** = additional info 
  * **additional_info_size** = size of additional info


**Return**: VHQ_SUCCESS, if success 

This function processes an agent parameter update. 


### function ProcessVHQParameterUpdate

```cpp
static vhq_result_t ProcessVHQParameterUpdate(
    char * pszDest,
    char * additional_info,
    uint32 additional_info_size,
    dl_file_dl_type_t eType
)
```


**Parameters**: 

  * **receiver** = receiver name 
  * **pszDest** = downloaded file 
  * **additional_info** = additional info 
  * **additional_info_size** = additional info size 
  * **eType** = type of downloaded file


**Return**: VHQ_SUCCESS, if success. 

This function processes an agent parameter update. 


### function ProcessParameterUpdate

```cpp
static vhq_result_t ProcessParameterUpdate(
    char * receiver,
    char * pszDest,
    char * additional_info,
    uint32 additional_info_size,
    dl_file_dl_type_t eType
)
```


**Parameters**: 

  * **receiver** = receiver name 
  * **pszDest** = downloaded file 
  * **additional_info** = additional info 
  * **additional_info_size** = additional info size 
  * **eType** = type of downloaded file


**Return**: VHQ_SUCCESS, if success. 

This function processes a parameter update for agent/app. 


### function DownloadFile

```cpp
vhq_result_t DownloadFile(
    dl_file_method_t eMethod,
    char * pszDest,
    char * pszDestFlash,
    dl_file_hash_algo_t eHashAlgo,
    char * pszHash,
    char * pszUrl,
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
  * **pszDestFlash** = full download file name(flash) 
  * **eHashAlgo** = hash algorithm 
  * **pszHash** = hash value 
  * **pszUser** = user 
  * **pszPw** = PW 
  * **pszUrl** = URL 
  * **bMaintDl** = TRUE, if maintenance download 
  * **filesize** = size of file to download 
  * **event_set_id** = event sed id of event 
  * **event_id** = event ID of event 
  * **dl_duration** = download duration 
  * **dl_attempts** = number of download attempts 
  * **dl_notify** = Download notifications


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function calls function to download a file from server and copies file from tmp to flash, if download completed. 


### function ProcessDownloadFile

```cpp
vhq_result_t ProcessDownloadFile(
    char * user,
    char * pszFromDest,
    char * pszToDest,
    dl_file_dl_type_t eType,
    VHQResponseSendMsg * response,
    char * receiver,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool compressionEnabled,
    uint32 * si_flag_ptr
)
```


**Parameters**: 

  * **user** = username 
  * **pszFromDest** = downloaded location 
  * **pszToDest** = copy to this destination 
  * **eType** = downloaded file type 
  * **response** = response to send to server 
  * **receiver** = receiver name of app 
  * **event_set_id** = event set ID of event 
  * **event_id** = event ID of event 
  * **compressionEnabled** = TRUE, if compression enabled 
  * **si_flag_ptr** = pointer to SI flag


**Return**: VHQ_SUCCESS, if success; FALSE, otherwise 

This function processes the download file. 




## Macros Documentation

### define MAX_CHAR

```cpp
#define MAX_CHAR 255
```


### define CHUNK

```cpp
#define CHUNK 16384
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///

#include <zlib.h>
#include <libgen.h>
#include <cJSON.h>
#include "EventScheduler.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQManager.h"
#include "VHQIo.h"
#include "VHQIoInternals.h"
#include "VHQSecurity.h"
#include "../inc/VHQConfig.h"
#include "../inc/VHQFileNames.h"
#include "VHQUtils.h"

#ifdef Mx2
#include "libsecins.h"
#endif

//ADKTMS-2729
#ifdef _VOS2
#include <dlfcn.h>
#endif

#ifdef WIN32
#include "stdafx.h"
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <io.h>
#include <stdio.h>
#endif

#define MAX_CHAR                    255

#ifdef _VOS2
#define lib_secureInstaller         "libsecins.so"
#define secins_free_resources_ext   "Secins_install_software_extended"
#define secins_pre_check            "Secins_precheck_software"
#define secins_free_resources       "Secins_free_resources_install_software"
#define secins_Status               "Secins_get_install_status"
#endif

/* Decompress from file source to file dest until stream ends or EOF.
 inf() returns Z_OK on success, Z_MEM_ERROR if memory could not be
 allocated for processing, Z_DATA_ERROR if the deflate data is
 invalid or incomplete, Z_VERSION_ERROR if the version of zlib.h and
 the version of the library linked do not match, or Z_ERRNO if there
 is an error reading or writing the files.

 This comes from example ZLIB program here: https://zlib.net/zpipe.c
 */
#define CHUNK 16384
static int inflateFile(FILE *source, FILE *dest)
{
  int ret;
  unsigned have;
  z_stream strm;
  unsigned char in[CHUNK];
  unsigned char out[CHUNK];

  if ((source == NULL) || (dest == NULL))
    return Z_ERRNO;

  /* allocate inflate state */
  strm.zalloc = Z_NULL;
  strm.zfree = Z_NULL;
  strm.opaque = Z_NULL;
  strm.avail_in = 0;
  strm.next_in = Z_NULL;
  ret = inflateInit2(&strm, 32);
  if (ret != Z_OK)
    return ret;

  /* decompress until deflate stream ends or end of file */
  do
  {
    strm.avail_in = fread(in, 1, CHUNK, source);
    if (ferror(source))
    {
      (void) inflateEnd(&strm);
      return Z_ERRNO;
    }
    if (strm.avail_in == 0)
      break;
    strm.next_in = in;

    /* run inflate() on input until output buffer not full */
    do
    {
      strm.avail_out = CHUNK;
      strm.next_out = out;
      ret = inflate(&strm, Z_NO_FLUSH);
      dbg_msg("%s: inflate returned %d\n", __FUNCTION__, ret);
      assert(ret != Z_STREAM_ERROR); /* state not clobbered */
      switch (ret)
      {
        case Z_NEED_DICT:
          ret = Z_DATA_ERROR; /* and fall through */
        case Z_DATA_ERROR:
        case Z_MEM_ERROR:
          (void) inflateEnd(&strm);
          return ret;
      }
      have = CHUNK - strm.avail_out;
      if (fwrite(out, 1, have, dest) != have || ferror(dest))
      {
        (void) inflateEnd(&strm);
        return Z_ERRNO;
      }
    }
    while (strm.avail_out == 0);

    /* done when inflate() says it's done */
  }
  while (ret != Z_STREAM_END);

  /* clean up and return */
  (void) inflateEnd(&strm);
  return ret == Z_STREAM_END ? Z_OK : Z_DATA_ERROR;
}


vhq_result_t VHQMAIN_ProcessParameterUpdate(char *receiver, char *pszDest,
                                            char *additional_info,
                                            uint32 additional_info_size,
                                            dl_file_dl_type_t eType)
{
  int outQid, inQid;
  VHQRootRequestMsg parm_update_request_msg;
  VHQRootResponseMsg parm_update_response_msg;

  //DebugMsg( VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
  // open queues (server will create)

#ifdef Mx2
  outQid = msgget((key_t) QUE_VHQ_ROOT_REQUEST, 0666);
  inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);
#else
    outQid = msgget((key_t)QUE_VHQ_APP_IFC_TO_AGENT, 0666);
    inQid = msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);
#endif

  if (additional_info != NULL)
    memset(additional_info, 0, additional_info_size);

  if ((-1 != inQid) && (-1 != outQid))
  {
    int exp_len;

    memset(&parm_update_request_msg, 0, sizeof(VHQRootRequestMsg));
    memset(&parm_update_response_msg, 0, sizeof(VHQRootResponseMsg));

    parm_update_request_msg.clientPid = getpid();
    parm_update_request_msg.message_type = VHQ_REQUEST_APP_PARAM_UPDATE;

    strcpy(parm_update_request_msg.data.sAppParmUpdateReq.receiver, receiver);
    strcpy(parm_update_request_msg.data.sAppParmUpdateReq.param_file, pszDest);
    parm_update_request_msg.data.sAppParmUpdateReq.param_update_type = eType;
    parm_update_request_msg.data.sAppParmUpdateReq.appParamUpdateNotification =
        FALSE;

    dbg_notice("%s: Sending VHQ_REQUEST_APP_PARAM_UPDATE message\n",
               __FUNCTION__);
    SafeMsgSndWrapper(outQid, &parm_update_request_msg,
                      sizeof(VHQRootRequestMsg) - sizeof(long), 0);

    exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
    if (SafeMsgRcvWrapper(inQid, &parm_update_response_msg,
                          sizeof(VHQRootResponseMsg) - sizeof(long),
                          parm_update_request_msg.clientPid, 0, FALSE)
        >= exp_len)
    {
      if (additional_info != NULL)
      {
        if (strlen(
            parm_update_response_msg.data.sAppParmUpdateResp.additional_info)
            >= additional_info_size)
          memcpy(
              additional_info,
              parm_update_response_msg.data.sAppParmUpdateResp.additional_info,
              additional_info_size - 1);
        else
          strcpy(
              additional_info,
              parm_update_response_msg.data.sAppParmUpdateResp.additional_info);
      }
      return parm_update_response_msg.data.sAppParmUpdateResp.ret_val;
    }
    else
      return FALSE;
  }
  else
  {
    log_err("%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid,
            inQid);
    return FALSE;
  }
}

static vhq_result_t ProcessContentUpdate(char *user, char *pszFromDest,
                                         char *pszDestDir,
                                         dl_file_dl_type_t eType,
                                         char *additional_info,
                                         uint32 additional_info_size)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
  /* Make sure we have an intended user */
  if (!strlen(user))
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_USER_ERROR;

  ret_val = DoContentCallback_New(user, pszFromDest, pszDestDir, eType,
                                  additional_info, additional_info_size);
  dbg_msg("%s: From Destination: %s Dest Dir: %s\n", __FUNCTION__, pszFromDest,
          pszDestDir);
  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);

  return (ret_val);
}


static vhq_result_t ProcessVHQIniUpdate(char *pszDest, char *additional_info,
                                        uint32 additional_info_size)
{
  vhq_result_t ret_val;
  char pszTempDest[260];
  char *pszBaseName;
  int copy_res;
  char VHQPrivCfgFileName[512];
  char CopyFileDest[512];
  param_file_reporting_t reporting_type = GetParamFileReportingType();

  /* Set return value to NAME_ERROR.  We'll change that if we get a more specific
   error in the case statement below */
  ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR;

  /* Clear the copy file destination.  If incoming file is valid, we will setup the destination */
  memset(CopyFileDest, 0, sizeof(CopyFileDest));

  /* Clear additional info string */
  memset(additional_info, 0, additional_info_size);

  switch (reporting_type)
  {
    case PARAM_FILE_REPORTING_PRIMARY_OVERRIDE:
    case PARAM_FILE_REPORTING_CURRENT_PLUS:
    case PARAM_FILE_REPORTING_PRIMARY:
      memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
      GetFileNameForInstance(VHQPrivCfgFileName,
                             (char*) VHQ_PRIVATE_CFG_FILENAME,
                             PRIMARY_SERVER_INSTANCE_NAME);
      strcpy(pszTempDest, pszDest);
      pszBaseName = os_basename(pszTempDest);

      if (strcmp(pszBaseName, VHQPrivCfgFileName) == 0)
      {
        if (reporting_type == PARAM_FILE_REPORTING_PRIMARY_OVERRIDE)
        {
          /* Although the filename is VHQ.ini, since we are in PrimaryOverride mode, we will
           copy to the current instance configuration */
          GetFileNameForInstance(CopyFileDest, (char*) VHQ_PRIVATE_CFG,
                                 GetCurrentInstance());
        }
        else
        {
          GetFileNameForInstance(CopyFileDest, (char*) VHQ_PRIVATE_CFG,
                                 PRIMARY_SERVER_INSTANCE_NAME);
        }

      }

      /* For current plus case, lets fall through to check against the current instance */
      if (reporting_type != PARAM_FILE_REPORTING_CURRENT_PLUS)
        break;

    case PARAM_FILE_REPORTING_NONE:
      /* If we are not reporting parameter files, we shouldn't receive a parameter update.  In case we
       do, just follow the default type which is Current */
    case PARAM_FILE_REPORTING_CURRENT:
    case PARAM_FILE_REPORTING_CURRENT_CONTAINERS:
    default:
      memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
      GetFileNameForInstance(VHQPrivCfgFileName,
                             (char*) VHQ_PRIVATE_CFG_FILENAME,
                             GetCurrentInstance());
      strcpy(pszTempDest, pszDest);
      pszBaseName = os_basename(pszTempDest);

      /* This is a VHQ parameter file */
      if (strcmp(pszBaseName, VHQPrivCfgFileName) == 0)
      {
        memset(CopyFileDest, 0, sizeof(CopyFileDest));
        GetFileNameForInstance(CopyFileDest, (char*) VHQ_PRIVATE_CFG,
                               GetCurrentInstance());

      }
      break;

    case PARAM_FILE_REPORTING_ALL:
    {
      char Instance[256];

      /* Make sure the instance exists */
      memset(Instance, 0, sizeof(Instance));
      GetInstanceFromFilename(pszDest, Instance, sizeof(Instance));

      if (strlen(Instance))
      {
        strcpy(pszTempDest, pszDest);
        pszBaseName = os_basename(pszTempDest);
        sprintf(CopyFileDest, "%s%s", VHQ_PRIV_FOLDER, pszBaseName);

        if (!FileExists(CopyFileDest))
        {
          log_err(
              "%s FAILED: Filename %s does not exist (infile = %s) - returning VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR\n",
              __FUNCTION__, CopyFileDest, pszDest);
          memset(CopyFileDest, 0, sizeof(CopyFileDest));
        }
      }
      break;
    }

  }

  if (strlen(CopyFileDest))
  {
    copy_res = CopyFile(pszDest, CopyFileDest);
    remove(pszDest);
    if (copy_res != 0)
    {
      log_err("%s CopyFile FAILED: Copying %s to %s FAILED (copy_res = %d)\n",
              VHQ_DOWNLOADER_EXECUTABLE, pszDest, CopyFileDest, copy_res);
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
    }
    else
    {
      log_err("%s: Copied parameter file %s to %s (copy_res = %d)\n",
              __FUNCTION__, pszDest, CopyFileDest, copy_res);
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
    }
    chmod(CopyFileDest, 0664);
  }

  return ret_val;
}

#ifdef ADK_SUPPORT
static vhq_result_t ProcessVHQInfoSvcUpdate(char *pszDest,
                                            char *additional_info,
                                            uint32 additional_info_size,
                                            dl_file_dl_type_t eType)
{
  vhq_result_t ret_val;
  char pszTempDest[260];
  char *pszBaseName;
  char VHQInfoSvcFileName[512];
  char ImportInstance[512];
  param_file_reporting_t reporting_type = GetParamFileReportingType();

  /* Set return value to NAME_ERROR.  We'll change that if we get a more specific
   error in the case statement below */
  ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR;

  /* Clear the import instance - if the incoming file is valid, we will setup the import instance */
  memset(ImportInstance, 0, sizeof(ImportInstance));

  /* Clear additional info string */
  memset(additional_info, 0, additional_info_size);

  switch (reporting_type)
  {
    case PARAM_FILE_REPORTING_PRIMARY_OVERRIDE:
    case PARAM_FILE_REPORTING_CURRENT_PLUS:
    case PARAM_FILE_REPORTING_PRIMARY:
      strcpy(pszTempDest, pszDest);

      pszBaseName = os_basename(pszTempDest);
      if (strcmp(pszBaseName, VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME) == 0)
      {
        if (reporting_type == PARAM_FILE_REPORTING_PRIMARY_OVERRIDE)
        {
          strcpy(ImportInstance, GetCurrentInstance());
        }
        else
        {
          strcpy(ImportInstance, PRIMARY_SERVER_INSTANCE_NAME);
        }
      }

      /* For current plus case, lets fall through to check against the current instance */
      if (reporting_type != PARAM_FILE_REPORTING_CURRENT_PLUS)
        break;

    case PARAM_FILE_REPORTING_NONE:
      /* If we are not reporting parameter files, we shouldn't receive a parameter update.  In case we
       do, just follow the default type which is Current */
    case PARAM_FILE_REPORTING_CURRENT:
    case PARAM_FILE_REPORTING_CURRENT_CONTAINERS:
    default:
      memset(VHQInfoSvcFileName, 0, sizeof(VHQInfoSvcFileName));
      GetFileNameForInstance(VHQInfoSvcFileName,
                             (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME,
                             GetCurrentInstance());
      strcpy(pszTempDest, pszDest);
      pszBaseName = os_basename(pszTempDest);

      /* This is a VHQ parameter file */
      if (strcmp(pszBaseName, VHQInfoSvcFileName) == 0)
      {
        strcpy(ImportInstance, GetCurrentInstance());
      }
      break;

    case PARAM_FILE_REPORTING_ALL:
      GetInstanceFromFilename(pszDest, ImportInstance, sizeof(ImportInstance));
      if (strlen(ImportInstance) <= 0)
      {
        log_err(
            "%s FAILED: Filename %s does not map to an instance - returning VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR\n",
            __FUNCTION__, pszDest);
        memset(ImportInstance, 0, sizeof(ImportInstance));
      }
      break;

  }

  if (strlen(ImportInstance))
  {
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
    dbg_msg("%s: Importing %s to Info Svc - Instance = %s\n", __FUNCTION__,
            pszDest, ImportInstance);
    if (ImportVHQInfoSvcDB(ImportInstance, pszDest, eType))
    {
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
    }
  }

  return ret_val;
}
#endif


static vhq_result_t ProcessVHQParameterUpdate(char *pszDest,
                                              char *additional_info,
                                              uint32 additional_info_size,
                                              dl_file_dl_type_t eType)
{
  char url_root[256] = { 0 };
  char customer_id[64] = { 0 };
  char *extension_ptr = strrchr(pszDest, '.');
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;

  /* Read current Agent critical parameters */
  VHQGetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root));
  VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id, sizeof(customer_id));

  if (stricmp(extension_ptr, ".ini") == 0)
  {
    ret_val = ProcessVHQIniUpdate(pszDest, additional_info,
                                  additional_info_size);
  }
#ifdef ADK_SUPPORT
  else if (stricmp(extension_ptr, ".xml") == 0)
  {
    ret_val = ProcessVHQInfoSvcUpdate(pszDest, additional_info,
                                      additional_info_size, eType);
  }
#endif

  /* Reset keys in case if critical parameters were changed */
  if (ret_val == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
  {
    char new_url_root[256] = { 0 };
    char new_customer_id[64] = { 0 };

    VHQGetParameterString(PARAM_URL_ROOT, new_url_root, sizeof(new_url_root));
    VHQGetParameterString(PARAM_CUSTOMER_ID, new_customer_id,
                          sizeof(new_customer_id));

    /* If URL or Customer ID changed - remove keys */
    if (stricmp(url_root, new_url_root)
        || stricmp(customer_id, new_customer_id))
    {
      //ADKTMS-2609 - add entry into vhqlog and vhqerror.log when key exchange will be performed
      log_notice("%s: URL Root or Customer ID changed, reset keys\n",
                 __FUNCTION__);
      VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, TRUE);
#ifndef WIN32
      //ADKTMS-2609 - add entry into vhqlog and vhqerror.log when key exchange will be performed
      log_alert("%s: Removing Agent Keys\n", __FUNCTION__);
      RemoveAgentKeys();
      ClearEventsTable();
#endif
    }
  }

  return ret_val;
}

static vhq_result_t ProcessParameterUpdate(char *receiver, char *pszDest,
                                           char *additional_info,
                                           uint32 additional_info_size,
                                           dl_file_dl_type_t eType)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;

  /* Make sure we have an intended user */
  if (!strlen(receiver))
  {
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_RECEIVER_ERROR;
  }

  if (strcmp(receiver, VHQ_APP_NAME) == 0)
  {
    ret_val = ProcessVHQParameterUpdate(pszDest, additional_info,
                                        additional_info_size, eType);
  }
  else
  {
    /* Notify call the application to pickup the parameter file */
    ret_val = VHQMAIN_ProcessParameterUpdate(receiver, pszDest, additional_info,
                                             additional_info_size, eType);
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return (ret_val);
}


vhq_result_t DownloadFile(dl_file_method_t eMethod, char *pszDest,
                          char *pszDestFlash, dl_file_hash_algo_t eHashAlgo,
                          char *pszHash, char *pszUrl, bool bMaintDl,
                          uint32 filesize, event_set_id_t event_set_id,
                          event_id_t event_id, uint32 *dl_duration,
                          uint32 *dl_attempts, bool dl_notify)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  int rename_res;

  log_dbg("DownloadFile: + - pszDest= \"%s\", hash algo = %d\n", pszDest,
          eHashAlgo);

  ret_val = DownloadFileWorker(eMethod, pszDest, pszUrl, eHashAlgo,
                               pszHash,
                               bMaintDl, filesize, event_set_id, event_id,
                               dl_duration, dl_attempts, dl_notify);

  if (VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED == ret_val)
  {
    dbg_msg("%s: Signature verified successfully - renaming %s to %s\n",
            __FUNCTION__, pszDest, pszDestFlash);
    // rename() does not work across filesystems, must use CopyFile from /tmp to flash space
    rename_res = rename(pszDest, pszDestFlash);
    dbg_msg("%s: Rename of %s to %s result %d, errno %d\n", __FUNCTION__,
            pszDest, pszDestFlash, rename_res, errno);
    /* Remove any partial files */
    remove(pszDest);
  }
  else
  {
    log_err("%s ERROR: Cleanup download due to error.\n", __FUNCTION__);
    /* Remove any partial files */
    remove(pszDest);
  }

  return ret_val;
}

#if defined(Mx2)

#define CP_INSTALL_RESULT_READ_TIMEOUT          120
#define CP_INSTALL_RESULT_READ_TIMEOUT_MAX      1200
#define CP_INSTALL_RESULT_READ_INTERVAL         2

#define CP_INSTALL_VHQ_RESULT_STR_HEADER        "VHQ result code:"


static vhq_result_t readCpInstallerResult(char *filename, uint32 timeout)
{
  bool result_read = FALSE;
  int loc_timeout = (int) timeout;
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_GENERAL_ERROR;

  if (timeout > CP_INSTALL_RESULT_READ_TIMEOUT_MAX)
    loc_timeout = CP_INSTALL_RESULT_READ_TIMEOUT_MAX;

  dbg_msg(
      "%s: CP Installer launched successfully - waiting %d seconds for result file %s\n",
      __FUNCTION__, loc_timeout, filename);

  while ((loc_timeout > 0) && (result_read == FALSE))
  {
    if (!FileExists(filename))
    {
      loc_timeout -= CP_INSTALL_RESULT_READ_INTERVAL;
      sleep(CP_INSTALL_RESULT_READ_INTERVAL);
    }
    else
    {
      int respFile;
      struct stat fileStat;

      if (stat(filename, &fileStat) == 0)
      {
        char *log_file_data = malloc(fileStat.st_size + 1);

        if (log_file_data)
        {
          memset(log_file_data, 0, fileStat.st_size + 1);
          respFile = open(filename, O_RDONLY);

          if (respFile != -1)
          {
            int bytes_read = read(respFile, log_file_data, fileStat.st_size);
            if (bytes_read == fileStat.st_size)
            {
              char *result_str;
              int num_items_scanned;

              log_dbg("%s: %s file contents:\n\n\n%s\n\n\n", __FUNCTION__,
                      filename, log_file_data);

              result_str = strstr(log_file_data,
                                  CP_INSTALL_VHQ_RESULT_STR_HEADER);

              if (result_str != NULL)
              {

                num_items_scanned = sscanf(
                    result_str, CP_INSTALL_VHQ_RESULT_STR_HEADER " %d",
                    (int*) &ret_val);
                if (num_items_scanned == 1)
                {
                  if (ret_val == VHQ_SUCCESS)
                  {
                    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
                    log_dbg(
                        "%s: %s installed successfully through CP Installer - calling UpdateCPInstalledApps() to update CP activations\n",
                        __FUNCTION__, filename);

                    UpdateCPInstalledApps();
                  }
                  log_dbg(
                      "%s: %s reported return value %d (%s) - returning %d\n",
                      __FUNCTION__, filename, ret_val, result_str, ret_val);
                }
                else
                {
                  log_err("%s: sscanf(%s) on %s from filename %s FAILED\n",
                          __FUNCTION__, CP_INSTALL_VHQ_RESULT_STR_HEADER " %d",
                          result_str, filename);
                  ret_val =
                      VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_RESULT_FILE_ERROR;
                }
              }
              else
              {
                log_err("%s ERROR: couldn't find '%s' in %s [data = '%s']\n",
                        __FUNCTION__, CP_INSTALL_VHQ_RESULT_STR_HEADER,
                        filename, log_file_data);
                ret_val =
                    VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_RESULT_FILE_ERROR;
              }

              /* We got far enough to read the result - we may not have done it correctly,
               but we can still break out of the loop waiting for the response */
              result_read = TRUE;
            }

            close(respFile);
          }

          free(log_file_data);
        }
      }
    }
  }

  if (loc_timeout <= 0)
  {
    log_err("%s ERROR: TIMEOUT waiting for CP Installer result file %s\n",
            __FUNCTION__, filename);
  }

  return ret_val;
}
#endif

#ifdef Mx2
#ifdef _VOS2

bool GetDLStatus(char *dlname, char *error_msg, int *error_num, int *status_ret)
{
  bool ret_val = TRUE;
  void *siHandle = NULL;
  int (*siStatusUpdateFn)(char**) = NULL;

  //open security installer library
  siHandle = dlopen(lib_secureInstaller, RTLD_NOW | RTLD_GLOBAL);
  if (siHandle == NULL)
  {
    log_err("%s:Error opening libsecins.so. Shouldn't get this error\n",
            __FUNCTION__);
    ret_val = FALSE;
  }
  else
  {
    // Clear all errors first
    dlerror();

    // Check if function is in library and get pointer to it
    siStatusUpdateFn = dlsym(siHandle, secins_Status);

    if (siStatusUpdateFn == NULL)
    {
      // OS does not support siStatusUpdateFn()
      log_err(
          "%s: Error (%s) finding %s in libsecins.so; OS does not support.\n",
          __FUNCTION__, dlerror(), secins_Status);
      ret_val = FALSE;
    }
    else
    {
      int siStatusRet = -1;
      cJSON *json = NULL;
      const char *ep;
      char *json_str = NULL;

      siStatusRet = siStatusUpdateFn((char**) &json_str);

      if (siStatusRet == 0)
      {
        json = cJSON_Parse(json_str, &ep);
        if (json)
        {
          if (cJSON_GetStringFromObject(json, "dlname"))
          {
            strncpy(dlname, cJSON_GetStringFromObject(json, "dlname"), 128);
            dbg_msg("%s : Dlname is %s\n", __FUNCTION__, dlname);
          }

          /* Check for two different tags reported by SI API */
          if (cJSON_GetStringFromObject(json, "error_msg"))
          {
            strncpy(error_msg, cJSON_GetStringFromObject(json, "error_msg"),
                    128);
            dbg_msg("%s : Error msg: %s \n", __FUNCTION__, error_msg);

            *error_num = cJSON_GetNumberFromObject(json, "error_num");
          }
          else if (cJSON_GetStringFromObject(json, "errmsg"))
          {
            strncpy(error_msg, cJSON_GetStringFromObject(json, "errmsg"), 128);
            dbg_msg("%s : Error msg is %s \n", __FUNCTION__, error_msg);

            *error_num = cJSON_GetNumberFromObject(json, "errnum");
          }

          cJSON_Delete(json);
        }
      }
      else
      {
        log_err("%s : Secure Installer update status failed(%d): %s\n",
                __FUNCTION__, siStatusRet, Secins_strerror(siStatusRet));
      }

      *status_ret = siStatusRet;

      free(json_str);
      dlclose(siHandle);
    }
  }
  return ret_val;
}
#endif //_VOS2

static int AgentInstallPackages(const char *install_file_path,
                                const char *basename, int file_size,
                                VHQResponseSendMsg *response,
                                uint32 *si_flag_ptr)
{
  bool blegacy_dl = FALSE;
  int siRet = -1;
  uint32 si_flag = 0;
  int error_num = -1;
  int status_ret = -1;

  si_flag = *si_flag_ptr;

#ifdef _VOS2
  bool bkillApps = FALSE;
  void *siHandle = NULL;

  VHQGetParameterBool(PARAM_AGENT_INSTALL_KILLAPPS, &bkillApps);

  if (bkillApps)
  {
    //open security installer library
    siHandle = dlopen(lib_secureInstaller, RTLD_NOW | RTLD_GLOBAL);

    if (siHandle == NULL)
    {
      log_err(
          "%s: Critical Error! Can't find libsecins.so - this should never happen. But just in case, trying to call Secins_install_software()\n",
          __FUNCTION__);
      blegacy_dl = TRUE;
    }
    else
    {
      int (*secureInstallerExtFn)(const char**, int, int) = NULL;
      int (*secureInstPreCheckFn)(const char**, int, int*, int) = NULL;
      int (*secureInstallerFn)(const char*, int) = NULL;
      int install_flag = 0;
      int nbdlfiles = 1;
      int out_flag = -1;
      int precheckerr = 0;

      // Clear all errors first
      dlerror();

      // Check if extended function is in library and get pointer to it
      secureInstallerExtFn = dlsym(siHandle, secins_free_resources_ext);

      if (secureInstallerExtFn == NULL)
      {
        // Clear all errors first
        dlerror();

        // Check if free resources function is in library and get pointer to it
        secureInstallerFn = dlsym(siHandle, secins_free_resources);

        if (secureInstallerFn != NULL)
        {
          install_flag = AGT_SECINS_FORCE_INSTALL;
        }
        else
        {
          // OS does not support Secins_free_resources_install_software().
          log_err(
              "%s: Error (%s) finding %s in libsecins.so; OS does not support.\n",
              __FUNCTION__, dlerror(), secins_free_resources);

          blegacy_dl = TRUE;
        }
      }
      else
      {
        install_flag = AGT_SECINS_FORCE_INSTALL | si_flag;

        dlerror();

        secureInstPreCheckFn = dlsym(siHandle, secins_pre_check);

        if (secureInstPreCheckFn != NULL)
        {
          precheckerr = secureInstPreCheckFn(&install_file_path, nbdlfiles,
                                             &out_flag, 0);
          if (precheckerr != 0)
          {
            log_err("%s: Precheck failed(%d) %s, Installed failed.\n",
                    __FUNCTION__, precheckerr, Secins_strerror(precheckerr));
            response->result =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;
            strncpy(response->additional_info,
                    (char*) Secins_strerror(precheckerr), MAX_CHAR);
            siRet = precheckerr;
            si_flag = 0;
          }
          else
          {
            dbg_msg("%s: Outflags from pre-check 0x%08x\n", __FUNCTION__,
                    out_flag);
          }
        }
        else
        {
          log_err(
              "%s: Error (%s) couldn't find %s, shouldn't get this error.\n",
              __FUNCTION__, dlerror(), secins_pre_check);
        }
      }

      /* Handle Secins_free_resources_install_software/Secins_install_software_extended */
      if ((!blegacy_dl) && (precheckerr == 0))
      {
        if (secureInstallerExtFn != NULL)
        {
          if ((out_flag & AGT_SECINS_REBOOT_REQD_BIT)
              == AGT_SECINS_REBOOT_REQD_BIT)
          {
            // Do nothing
          }
          else if ((out_flag & AGT_SECINS_RESTART_APPS_REQD_BIT)
              == AGT_SECINS_RESTART_APPS_REQD_BIT)
          {
            // Need to re-register for SYSPM: ESAMDOCS-25370
          }
        }

        // since applications will be killed by OS, make sure all user applications are unregistered with Agent
        log_dbg("%s: Unregistering apps.\n", __FUNCTION__);
        UnRegisterUserApps();

        // Clear siflag
        si_flag = 0;

        /* For Debug purposes, just check the RAM and FLASH */
        CheckFreeMemForDownload(VHQ_DOWNLOADER_INSTALL_LOCATION, 0);
        CheckFreeMemForDownload(VHQ_DOWNLOADER_VOS2_EXTRACTION_LOCATION, 0);

        // Write response to temporary file, has DL Completed status
        WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, response);

        // Create Reboot file just in case if the new SI reboots the device unlike the older ones.
        CreateVHQRebootFile();

        if (secureInstallerExtFn != NULL)
        {
          log_dbg(
              "%s: Calling Secins_install_software_extended(), install flag: 0x%08x\n",
              __FUNCTION__, install_flag);
          siRet = secureInstallerExtFn(&install_file_path, nbdlfiles,
                                       install_flag);
        }
        else
        {
          log_dbg("%s: Calling Secins_free_resources_install_software()\n",
                  __FUNCTION__);
          siRet = secureInstallerFn(install_file_path, install_flag);
        }

        SetCompleteFlag(response->operation_set_id, response->operation_id,
                        FALSE, FALSE);

        // SI API returned delete the Reboot file.
        RemoveVHQRebootFile();

        // Check installation status
        {
          char dlname[128] = "";
          char error_msg[128] = "";
          int retry = 5;

          do
          {
            GetDLStatus(dlname, error_msg, &error_num, &status_ret);

            if (status_ret != 0)
            {
              log_err(
                  "%s : Secure Installer update status returned error, retry count: %d\n",
                  __FUNCTION__, retry);
            }

            retry--;
            sleep(1);
          }
          while ((status_ret != 0) && (retry > 0));
        }

        if ((error_num >= ERROR_SECINS) || (status_ret != 0) || (siRet != 0))
        {
          if (siRet == 0)
          {
            if (status_ret == 0)
              siRet = error_num;
            else
              siRet = status_ret;
          }
          log_err("%s ERROR: Secure Installer failed with error %d: %s\n",
                  __FUNCTION__, siRet, Secins_strerror(siRet));

          response->result =
              VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;
          strncpy(response->additional_info, (char*) Secins_strerror(siRet),
                  MAX_CHAR);
        }
        else
        {
          log_dbg("%s: Installation successful!\n", __FUNCTION__);

          response->result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
        }

        // Saved new status if there is any unexpected reboot
        if (removeFile(VHQ_RESPONSE_MSG_TEMP_FILE) == FALSE)
        {
          log_dbg("%s: Error removing %s\n", __FUNCTION__,
                  VHQ_RESPONSE_MSG_TEMP_FILE);
        }

        WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, response);

        RequestAppRegistrationDelay();
      }

      dlclose(siHandle);
    }
  }
  else
  {
    blegacy_dl = TRUE;
  }
#else
    // VOS devices
    blegacy_dl = TRUE;
#endif

  if (blegacy_dl)
  {
    char install_filename[FILENAME_MAX];
    int move_res;

    // Clear SI flag
    si_flag = 0;

    if (CheckFreeMemForDownload(VHQ_DOWNLOADER_INSTALL_LOCATION, file_size))
    {
      snprintf(install_filename, sizeof(install_filename), "%s/%s",
               VHQ_DOWNLOADER_INSTALL_LOCATION, basename);
      move_res = MoveFile(install_file_path, install_filename);
      if (move_res == 0)
      {
        int siBits = 0;

        siRet = Secins_install_software(&siBits, 0);

        if (siRet != 0)
        {
          response->result =
              VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;
          strncpy(response->additional_info, (char*) Secins_strerror(siRet),
                  MAX_CHAR);
        }
        else
        {
          response->result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
        }

        WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, response);

        SetCompleteFlag(response->operation_set_id, response->operation_id,
                        FALSE, FALSE);

        if ((siBits & SECINS_REBOOT_REQD_BIT) != 0)
        {
          si_flag = (siBits & SECINS_REBOOT_REQD_BIT);
        }
        else if (siBits & SECINS_RESTART_APPS_REQD_BIT)
        {
          si_flag = (siBits & SECINS_RESTART_APPS_REQD_BIT);
        }

        log_dbg("%s: Secins_install_software return status: %d, siBits: %d\n",
                __FUNCTION__, siRet, siBits);
      }
      else
      {
        log_err("%s: Unable to move file into %s, ret: %d\n", __FUNCTION__,
                install_filename, move_res);
        response->result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;
        strcpy(response->additional_info,
               "Failed to move file from Flash to RAM");
      }
    }
    else
    {
      log_err("%s: Not enough memory for %d byte installation\n", __FUNCTION__,
              file_size);
      response->result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
    }
  }

  *si_flag_ptr = si_flag;

  return siRet;
}
#endif


vhq_result_t ProcessDownloadFile(char *user, char *pszFromDest, char *pszToDest,
                                 dl_file_dl_type_t eType,
                                 VHQResponseSendMsg *response, char *receiver,
                                 event_set_id_t event_set_id,
                                 event_id_t event_id, bool compressionEnabled,
                                 uint32 *si_flag_ptr)
{
  int res, cnt;
  char filename_copy[256];
  char *pszBaseName, *pszDirName;
  struct stat st;
  int file_size = 0;
  char *pszFromDest_internal = pszFromDest;
  char decompressed_fileName[PATH_MAX];
  dl_file_dl_type_t dl_type;

  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;

  dbg_msg("%s: pszFromDest_internal = %s, pszToDest = %s\n", __FUNCTION__,
          pszFromDest_internal, pszToDest);

  /* get file size, wait for file to be copied from RAM to FLASH outside of this function, if any */
  for (cnt = 0; cnt < 3; cnt++)
  {
    res = stat(pszFromDest_internal, &st);
    if (res == 0)
      break;
    sleep(1);
  }

  if (res)
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;

  dbg_msg("%s: file_size %d\n", __FUNCTION__, st.st_size);

  file_size = st.st_size;

  if (compressionEnabled)
  {
    int inflate_ret;
    FILE *dest;
    FILE *zip;
    struct stat decompressed_file_stat;

    dbg_msg("%s: compressionEnabled - de-compressing file\n", __FUNCTION__);
    /* Setup de_compressed file for TMP directory */

    snprintf(decompressed_fileName, sizeof(decompressed_fileName), "%s/%s",
             VHQ_TMP, os_basename(pszFromDest_internal));
    dest = fopen(decompressed_fileName, "wb");
    zip = fopen(pszFromDest_internal, "rb");

    dbg_msg("%s: calling inflateFile(%s, %s)\n", __FUNCTION__,
            pszFromDest_internal, decompressed_fileName);
    inflate_ret = inflateFile(zip, dest);
    dbg_msg("%s: inflateFile() returned: %d \n", __FUNCTION__, inflate_ret);
    if (dest)
      fclose(dest);
    if (zip)
      fclose(zip);

    /* Delete the compressed file now */
    remove(pszFromDest_internal);

    if (inflate_ret != Z_OK)
    {
      log_err("%s: inflateFile() returned ZLIB error %d\n", __FUNCTION__,
              inflate_ret);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DECOMPRESSION_ERROR;
    }

    if (stat(decompressed_fileName, &decompressed_file_stat) != 0)
    {
      dbg_err("%s ERROR: Could not stat %s\n", __FUNCTION__,
              decompressed_fileName);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DECOMPRESSION_ERROR;
    }

    /* we can point the internal destination to the decompressed file */
    pszFromDest_internal = decompressed_fileName;
  }

  /* get Dirname and Basename of final file location */
  memset(filename_copy, 0, sizeof(filename_copy));
  strcpy(filename_copy, pszToDest);
  pszDirName = dirname(filename_copy);
  memset(filename_copy, 0, sizeof(filename_copy));
  strcpy(filename_copy, pszToDest);
  pszBaseName = os_basename(filename_copy);

  /* to test passthrough implementation before server is ready */
  bool bPassthrough = FALSE;
  VHQGetParameterBool(PARAM_PATHTHROUGH_ENABLED, &bPassthrough);
  if (bPassthrough)
  {
    /* PP1000SE testing */
    eType = DL_FILE_DL_TYPE_PERIPHERAL;
  }

  dl_type = (eType & DL_FILE_DL_TYPE_TYPE_MASK);

  switch (dl_type)
  {
    case DL_FILE_DL_TYPE_FILE:
    {
      /* We don't need to do anything for a regular file download */
      int move_res;

      move_res = MoveFile(pszFromDest_internal, pszToDest);
      if (move_res == 0)
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
      else
        log_err("%s: Unable to move file into %s\n", __FUNCTION__, pszToDest);
    }
      break;

    case DL_FILE_DL_TYPE_IPKG:
      /* REVISIT (Mitch 3-8-2012): Need to support ipackages a little differently to avoid restarts */
      /* REVISIT (Mitch 3-8-2012): Need to verify that VHQ can be updated with itseld */
      /* REVISIT (Mitch 3-8-2012): Need to verify RFS 17 -> RFS 18 upgrade */
    case DL_FILE_DL_TYPE_TGZ:
    case DL_FILE_DL_TYPE_JSON_KEY_BLOB:
    {
      int install_pkgs_ret_val = 0;
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;

      /* Secure Installer can work for a while, reset WD timer */
      EventSchedulerPetWatchdog(event_set_id, event_id);

      // ADKTMS-2729 - call appropriate Secure Installer API
      install_pkgs_ret_val = AgentInstallPackages(pszFromDest_internal,
                                                  pszBaseName, file_size,
                                                  response, si_flag_ptr);

      ret_val = response->result;

      log_alert("%s Secure Installer %d:%s \n", __FUNCTION__,
                install_pkgs_ret_val, Secins_strerror(install_pkgs_ret_val));

      return ret_val;

    }
      break;

    case DL_FILE_DL_TYPE_PARAMETER:
    case DL_FILE_DL_TYPE_PARAMETER_PARTIAL_FLAT:
    case DL_FILE_DL_TYPE_PARAMETER_PARTIAL_HIERARCHICHAL:
    {
      char temp_app_file_location[256];
      int copy_res;

      if (CheckFreeMemForDownload("/tmp", file_size))
      {
        snprintf(temp_app_file_location, sizeof(temp_app_file_location), "%s%s",
                 VHQ_DOWNLOADER_APP_FILES_STORAGE, pszBaseName);

        /* Processing can be postponed, provide copy into temporary location for processing */
        copy_res = CopyFile(pszFromDest_internal, temp_app_file_location);
        if (copy_res == 0)
        {
          ret_val = ProcessParameterUpdate(receiver, temp_app_file_location,
                                           response->additional_info,
                                           sizeof(response->additional_info),
                                           eType);

          /* If Parameter is updated, set download as complete and create response file in case of reboots */
          if (ret_val == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
          {
            WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, response);
            SetCompleteFlag(response->operation_set_id, response->operation_id,
                            FALSE, FALSE);
          }

          if (FileExists(temp_app_file_location))
          {
            log_err(
                "%s: Application after processing didn't remove parameters %s file. Remove by Agent.\n",
                __FUNCTION__, temp_app_file_location);
            remove(temp_app_file_location);
          }
        }
        else
          log_err("%s: Unable to copy %s file into %s, copy_res = %d\n",
                  __FUNCTION__, pszFromDest_internal, temp_app_file_location,
                  copy_res);
      }
      else
      {
        log_err("%s: Not enough memory for %d byte installation\n",
                __FUNCTION__, file_size);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
      }
    }
      break;

    case DL_FILE_DL_TYPE_CONTENT:
    case DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED:
    case DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED:
    {
      char temp_app_file_location[256];
      int copy_res;

      if (CheckFreeMemForDownload("/tmp", file_size))
      {
        snprintf(temp_app_file_location, sizeof(temp_app_file_location), "%s%s",
                 VHQ_DOWNLOADER_APP_FILES_STORAGE, pszBaseName);

        /* Processing can be postponed, provide copy into temporary location for processing */
        copy_res = CopyFile(pszFromDest_internal, temp_app_file_location);
        if (copy_res == 0)
        {
          pszDirName = dirname(pszToDest);
          ret_val = ProcessContentUpdate(user, temp_app_file_location,
                                         pszDirName, eType,
                                         response->additional_info,
                                         sizeof(response->additional_info));

          /* If Content is installed, set download as complete and create response file in case of reboots */
          if (ret_val == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
          {
            WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, response);
            SetCompleteFlag(response->operation_set_id, response->operation_id,
                            FALSE, FALSE);
          }

          if (FileExists(temp_app_file_location))
          {
            log_err(
                "%s: Application after processing didn't remove content %s file. Remove by Agent.\n",
                __FUNCTION__, temp_app_file_location);
            remove(temp_app_file_location);
          }
        }
        else
          log_err("%s: Unable to copy %s file into %s, copy_res = %d\n",
                  __FUNCTION__, pszFromDest_internal, temp_app_file_location,
                  copy_res);
      }
      else
      {
        log_err("%s: Not enough memory for %d byte installation\n",
                __FUNCTION__, file_size);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
      }
    }
      break;

#if defined(Mx2)
      /* If we ever compile MX8 code again, it will not support the CP package type */
    case DL_FILE_DL_TYPE_CP_PACKAGE:
    {
      /* CP Packages will get processed differently than a TGZ package */
      char install_filename[FILENAME_MAX];
      int start_app_ret_val;
      int move_res;
      dbg_msg("%s: Processing DL_FILE_DL_TYPE_CP_PACKAGE %s\n", __FUNCTION__,
              pszBaseName);

      // Create the CP Installer directory if it doesn't exist
      if (!DirExists(VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION))
      {
        int chown_ret;
        dbg_msg("%s: %s does not exist - creating it\n", __FUNCTION__,
                VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION);
        if (CreateDir(VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION, 0777) == FALSE)
        {
          log_err("%s: Failed to create folder: %s\n", __FUNCTION__,
                  VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION);
        }
        chown_ret = chown(VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION, getuid(),
                          Secins_system_gid());
        if (chown_ret == -1)
          dbg_err("%s: ERROR - chown(%s) failed with '%s', errno = %d\n",
                  __FUNCTION__, VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION,
                  strerror(errno), errno);
        chmod(VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION, 0777);
      }

      if (CheckFreeMemForDownload(VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION,
                                  file_size))
      {
        snprintf(install_filename, sizeof(install_filename), "%s%s",
                 VHQ_DOWNLOADER_CP_APP_INSTALL_LOCATION, pszBaseName);

        move_res = MoveFile(pszFromDest_internal, install_filename);
        if (move_res == 0)
        {
          int chown_ret;
          log_dbg("%s: moved %s to %s for CP installation\n", __FUNCTION__,
                  pszFromDest_internal, install_filename);
          /* Make sure the file has correct permissions */
          chown_ret = chown(install_filename, getuid(), Secins_system_gid());
          if (chown_ret == -1)
            dbg_err("%s: ERROR - chown(%s) failed with '%s', errno = %d\n",
                    __FUNCTION__, install_filename, strerror(errno), errno);
          chmod(install_filename, 0666);
          /* remove the result file before starting the CP Installer */
          remove(VHQ_DOWNLOADER_CP_APP_INSTALL_RESULT_LOCATION);
          /* For CP Packages, we need to go through CP app installer, not secure installer */
          start_app_ret_val = Secins_start_app(CP_APP_INSTALLER_EXECUTABLE);

          if (start_app_ret_val != 0)
          {
            log_err("%s ERROR: Secins_start_app(%s) failed with error %d:%s\n",
                    __FUNCTION__, CP_APP_INSTALLER_EXECUTABLE,
                    start_app_ret_val, Secins_strerror(start_app_ret_val));
            ret_val =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_START_ERROR;
          }
          else
          {
            ret_val = readCpInstallerResult(
                VHQ_DOWNLOADER_CP_APP_INSTALL_RESULT_LOCATION,
                CP_INSTALL_RESULT_READ_TIMEOUT);
          }
        }
        else
          log_err("%s: Unable to move file into %s\n", __FUNCTION__,
                  install_filename);
      }
      else
      {
        log_err("%s: Not enough memory for %d byte installation\n",
                __FUNCTION__, file_size);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
      }
    }
      break;
#endif

    default:
      log_err("%s ERROR: Unknown download type - %d \n", __FUNCTION__,
              eType & DL_FILE_DL_TYPE_TYPE_MASK);
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_UNSUPPORTED_TYPE_ERROR;
  }

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
