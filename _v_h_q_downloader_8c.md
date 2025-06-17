---
title: tmsagt/src/VHQDownloader/VHQDownloader.c

---

# tmsagt/src/VHQDownloader/VHQDownloader.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[suppressed_action_t](structsuppressed__action__t.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[URLUnescape](_v_h_q_downloader_8c.md#function-urlunescape)**(char * pBuffer, int * piLen) |
| vhq_result_t | **[SendResponse](_v_h_q_downloader_8c.md#function-sendresponse)**(event_id_t event_id, VHQResponseSendMsg * responseMsg, uint32 dl_duration, uint32 dl_attempts) |
| bool | **[CheckFreeMemForDownload](_v_h_q_downloader_8c.md#function-checkfreememfordownload)**(char * fileLocation, int fileSize) |
| void | **[truncatePartialFile](_v_h_q_downloader_8c.md#function-truncatepartialfile)**(char * filename, struct stat * fileStat) |
| vhq_result_t | **[dl_main](_v_h_q_downloader_8c.md#function-dl-main)**(int parameter, event_set_id_t event_set_id, event_id_t event_id) |
| void | **[SetSuppressedAction](_v_h_q_downloader_8c.md#function-setsuppressedaction)**(term_action_t action, event_set_id_t event_set_id) |
| term_action_t | **[SuppressedActionRequired](_v_h_q_downloader_8c.md#function-suppressedactionrequired)**(event_set_id_t event_set_id) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| struct [suppressed_action_t](structsuppressed__action__t.md) | **[suppressed_action](_v_h_q_downloader_8c.md#variable-suppressed-action)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VHQ_DOWNLOADER_WAIT_TIME_MIN](_v_h_q_downloader_8c.md#define-vhq-downloader-wait-time-min)**  |
|  | **[VHQ_DOWNLOADER_WAIT_TIME_SEC](_v_h_q_downloader_8c.md#define-vhq-downloader-wait-time-sec)**  |
|  | **[VHQ_DOWNLOADER_SLEEP_TIME](_v_h_q_downloader_8c.md#define-vhq-downloader-sleep-time)**  |
|  | **[LOW_BATTERY_THRESHOLD](_v_h_q_downloader_8c.md#define-low-battery-threshold)**  |
|  | **[TRUNCATE_BLOCK_SIZE](_v_h_q_downloader_8c.md#define-truncate-block-size)**  |
|  | **[BINTBL_EXTENSION](_v_h_q_downloader_8c.md#define-bintbl-extension)**  |

## Detailed Description


This is the VHQ downlaoder program. It runs separate from the vhq agent itself to make it easier to update the VHQ agent 


## Functions Documentation

### function URLUnescape

```cpp
void URLUnescape(
    char * pBuffer,
    int * piLen
)
```


### function SendResponse

```cpp
static vhq_result_t SendResponse(
    event_id_t event_id,
    VHQResponseSendMsg * responseMsg,
    uint32 dl_duration,
    uint32 dl_attempts
)
```


**Parameters**: 

  * **event_id** = event ID of event 
  * **responseMsg** = message details to be sent to server. 
  * **dl_duration** = duration of download 
  * **dl_attempts** = number of download attempts.


**Return**: void 

This function sends a response message to server. 


### function CheckFreeMemForDownload

```cpp
bool CheckFreeMemForDownload(
    char * fileLocation,
    int fileSize
)
```


**Parameters**: 

  * **fileLocation** = File location 
  * **filesize** = size of file to download


**Return**: TRUE, if memory available; FALSE, otherwise 

This function checks if we have enough flash to download a file from server. 


### function truncatePartialFile

```cpp
static void truncatePartialFile(
    char * filename,
    struct stat * fileStat
)
```


**Parameters**: 

  * **filename** = partially downloaded filename 
  * **fileStat** = points to fileStat of partially downloaded filename.


**Return**: void 

This function will truncate a partially downloaded file a little bit before restarting the download, if seen necessary. 


### function dl_main

```cpp
vhq_result_t dl_main(
    int parameter,
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **parameter** = number of parameters argc - The argv length. argv - The application command line arguments. 
  * **event_set_id** = event set ID of downloader event 
  * **event_id** = event ID of downloader event


**Return**: VHQ_SUCCESS, if success; FALSE, otherwise 

This function is the main entry point of the downloader application. 


### function SetSuppressedAction

```cpp
void SetSuppressedAction(
    term_action_t action,
    event_set_id_t event_set_id
)
```


**Parameters**: 

  * **action** = terminal action type to suppress. 
  * **event_set_id** = event set id of event.


**Return**: void 

This function will suppress an action. 


### function SuppressedActionRequired

```cpp
term_action_t SuppressedActionRequired(
    event_set_id_t event_set_id
)
```


**Parameters**: 

  * **event_set_id** = event set id to check for.


**Return**: void 

This function is used to get a suppressed action. 



## Attributes Documentation

### variable suppressed_action

```cpp
struct suppressed_action_t suppressed_action = { FALSE, TERM_ACTION_NONE,
    EVENT_SET_ID_INVALID };
```



## Macros Documentation

### define VHQ_DOWNLOADER_WAIT_TIME_MIN

```cpp
#define VHQ_DOWNLOADER_WAIT_TIME_MIN 10
```


### define VHQ_DOWNLOADER_WAIT_TIME_SEC

```cpp
#define VHQ_DOWNLOADER_WAIT_TIME_SEC (VHQ_DOWNLOADER_WAIT_TIME_MIN * 60)
```


### define VHQ_DOWNLOADER_SLEEP_TIME

```cpp
#define VHQ_DOWNLOADER_SLEEP_TIME 10
```


### define LOW_BATTERY_THRESHOLD

```cpp
#define LOW_BATTERY_THRESHOLD 15
```


### define TRUNCATE_BLOCK_SIZE

```cpp
#define TRUNCATE_BLOCK_SIZE (128 * 1024)
```


### define BINTBL_EXTENSION

```cpp
#define BINTBL_EXTENSION ".bintbl"
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
#include <openssl/sha.h>
#include <svcInfoAPI.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/statfs.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQFileNames.h"
#include "VHQMessages.h"
#include "VHQManager.h"
#include "VHQSecurity.h"
#include "VHQTypes.h"
#include "VHQUtils.h"
#include "VHQVersion.h"
#include "VHQXmlPackager.h"
#include "VHQIo.h"

#define VHQ_DOWNLOADER_WAIT_TIME_MIN        10
#define VHQ_DOWNLOADER_WAIT_TIME_SEC        (VHQ_DOWNLOADER_WAIT_TIME_MIN * 60)

#define VHQ_DOWNLOADER_SLEEP_TIME           10

#define LOW_BATTERY_THRESHOLD               15

struct suppressed_action_t
{
  bool action_suppressed;
  term_action_t action;
  event_set_id_t event_set_id;
};
struct suppressed_action_t suppressed_action = { FALSE, TERM_ACTION_NONE,
    EVENT_SET_ID_INVALID };

void URLUnescape(char *pBuffer, int *piLen)
{
  int iLen = *piLen;
  while (iLen > 0)
  {
    if ('%' == *pBuffer)
    {
      // we're only really looking for %20's here so not maximally generic.
      // also, we're not doing sprintf's work either!
      if (0 == strncmp(pBuffer + 1, "20", 2))
      {
        *pBuffer = ' ';
        pBuffer++;
        memmove(pBuffer, pBuffer + 2, iLen);
        iLen -= 3;
        *piLen -= 2;
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


static vhq_result_t SendResponse(event_id_t event_id,
                                 VHQResponseSendMsg *responseMsg,
                                 uint32 dl_duration, uint32 dl_attempts)
{
  /* Mitch (7-19-16): In much older versions of VHQ Agent, the downloader would run as a separate process
   and we would send messages back to the main VHQ process, which would in turn send status messages to
   the server using VHQManagerContactServer().  Now that the downloader is just run as a function, we
   don't need to do that and the downloader can call VHQManagerContactServer() directly, which is
   much easier */
  /* For VX devices, we are running on the same process so just call VHQManagerContactServer() directly */
  char *xmlDownloadResponse;
  int downloadResponseLen;
  vhq_result_t res = VHQ_SUCCESS;

  dbg_msg("%s: Creating download response\n", __FUNCTION__);
  downloadResponseLen = VHQXmlCreateDownloadResponse(
      &xmlDownloadResponse, responseMsg->comm_id, responseMsg->message_id,
      responseMsg->operation_id, responseMsg->srv_msg_type,
      responseMsg->srv_op_type, responseMsg->result,
      responseMsg->operation_set_id, responseMsg->recur_id,
      responseMsg->additional_info, dl_duration, dl_attempts);

  PRINT_XML_DATA("SendResponse", xmlDownloadResponse);

  res = VHQManagerContactServer(&xmlDownloadResponse, &downloadResponseLen,
                                event_id, &responseMsg->comm_id,
                                &responseMsg->message_id,
                                &responseMsg->message_id,
                                responseMsg->operation_id,
                                responseMsg->close_comm_id, TRUE, FALSE);

  return res;
}


bool CheckFreeMemForDownload(char *fileLocation, int fileSize)
{
  /* Make sure we have enough space in the area where we will download to */
  int statfs_ret_val;
  int RAM_tot, RAM_free;
  struct statfs pathinfo;
  uint32 maxUtilization = 0;
  bool ret_val = TRUE;

  // DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Checking for RAM free event\n", __FUNCTION__);
  if (GetRAMData(&RAM_tot, &RAM_free))
    dbg_msg("%s RAM_tot = %ld, RAM_free = %ld\n", __FUNCTION__, RAM_tot * 1024,
            RAM_free * 1024);

  /* Enhancement for ADKTMS-1731 to apply MaxDLFlashUtilization to all downloads */
  VHQGetParameterUint32(PARAM_MAX_FLASH_UTILIZATION_FOR_DOWNLOADS,
                        &maxUtilization, DEFAULT_BASE);
  dbg_msg(
      "%s: Checking if we have enough flash to download %d bytes - max_flash_utilization = %u%%\n",
      __FUNCTION__, fileSize, maxUtilization);

  /* Make sure the utilization is a valid percentage */
  if ((maxUtilization == 0) || (maxUtilization > 100))
  {
    log_err("%s ERROR: Invalid maxUtilization %u - setting to 90%\n",
            __FUNCTION__, maxUtilization);
    maxUtilization = 90;
  }

  /* Make sure where we store the partial files has enough free space */
  statfs_ret_val = statfs(fileLocation, &pathinfo);
  if (statfs_ret_val == 0)
  {
    unsigned long long freeMem, totalMem, maxUtilizationMem;

    dbg_msg(
        "%s: statfs(%s) was successful - verifying enough space is available\n",
        __FUNCTION__, fileLocation);
    dbg_msg("%s: blocksize = %d, free blocks = %d, total blocks = %d\n",
            __FUNCTION__, pathinfo.f_bsize, pathinfo.f_bfree,
            pathinfo.f_blocks);
    freeMem = pathinfo.f_bsize * pathinfo.f_bfree;
    totalMem = pathinfo.f_bsize * pathinfo.f_blocks;
    maxUtilizationMem = (freeMem * maxUtilization) / 100;
    dbg_msg("%s: Free MEM = %llu, Total MEM = %llu\n", __FUNCTION__, freeMem,
            totalMem);
    if (maxUtilizationMem < (unsigned long long) fileSize)
    {
      log_err(
          "%s: not enough free memory (freemem = %llu, maxUtilization = %u, maxAvail = %llu) in %s to store file of size %d - returning FALSE\n",
          __FUNCTION__, freeMem, maxUtilization, maxUtilizationMem,
          fileLocation, fileSize);
      ret_val = FALSE;
    }

  }
  else
  {
    log_err("%s: statfs for location %s FAILED - returning FALSE\n",
            __FUNCTION__, fileLocation);
    ret_val = FALSE;
  }

  return ret_val;
}

/* By default we setup CURL to use 128 KB block transfers so use that as our basis for truncation */
#define TRUNCATE_BLOCK_SIZE     (128 * 1024)


static void truncatePartialFile(char *filename, struct stat *fileStat)
{
  uint32 size_to_truncate_to = 0;

  if (fileStat->st_size > TRUNCATE_BLOCK_SIZE)
  {
    /* Round off to the nearest block */
    size_to_truncate_to = fileStat->st_size / TRUNCATE_BLOCK_SIZE;
    size_to_truncate_to = size_to_truncate_to * TRUNCATE_BLOCK_SIZE;

    /* If we are barely into a new block, don't trust the data and shorten it by an additional block */
    if ((fileStat->st_size % TRUNCATE_BLOCK_SIZE) < 100)
    {
      if (size_to_truncate_to > TRUNCATE_BLOCK_SIZE)
        size_to_truncate_to -= TRUNCATE_BLOCK_SIZE;
    }
  }

  if (size_to_truncate_to > 0)
  {
    /* We are less more than 1 KB into the download so let's truncate the file a little bit before restarting.
     This will help with pulled power where there could have been issues writing the last bytes to the file before
     the power outage */
    dbg_msg("%s: Truncating %s from %d bytes to %d bytes\n", __FUNCTION__,
            filename, fileStat->st_size, size_to_truncate_to);
    if (truncate(filename, size_to_truncate_to) != 0)
    {
      log_err("%s: Truncating %s FAILED - removing the file\n", __FUNCTION__,
              filename);
      remove(filename);
    }
  }
  else
  {
    /* We are less than 1 KB into the download so don't take a chance that the PARTIAL
     download can be corrupted.  Just remove it and start over */
    log_dbg("%s: Removing %s to force a DL Restart - size is only %d bytes\n",
            __FUNCTION__, filename, fileStat->st_size);
    remove(filename);
  }

  /* Clear stat information and re-read it since it has changed */
  memset(fileStat, 0, sizeof(struct stat));
  stat(filename, fileStat);
}

#define BINTBL_EXTENSION ".bintbl"


vhq_result_t dl_main(int parameter, event_set_id_t event_set_id,
                     event_id_t event_id)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;

  /* Download/Install Flags */
  bool download_now = FALSE;
  bool install_now = FALSE;
  bool dl_expired = FALSE;
  bool send_dl_started = TRUE;

  /* Approval Flags */
  bool install_approval_required = TRUE;
  bool reboot_approval_required = TRUE;
  bool restart_apps_approval_required = TRUE;
  bool isForceInstall = FALSE;

  /* SI Flags */
  uint32 si_flag = 0;

  /* Misc Flags */
  bool maintenance_dl = FALSE;
  bool suppress_reboot = FALSE;
  bool compression = FALSE;
  bool passthrough_now = FALSE;
  bool ids_defer_pkg = FALSE;

  dl_file_method_t method;
  dl_file_dl_type_t type, temp_type;
  dl_file_hash_algo_t hash_algo;
  char hash[SHA256_DIGEST_LENGTH];

  term_action_t install_action = TERM_ACTION_NONE; /* Terminal action after installation set on Server */

  int executing_index = 0;

  /* Filename */
  char orig_filename[256];
  char filename_partial_unique[266];
  char filename_flash_unique[256];
  char filename_copy[256];
  uint32 filesize = 0;
  int needed_filesize = 0;
  char *pszBaseName;
  struct stat fileStat;

  char *user;
  char *username;
  char *pw;
  char *url;
  char *receiver;

  /* Message Queue number */
  int response_send_queue;
  int response_recv_queue;

  /* Response Msg */
  VHQResponseSendMsg response;

  /* Battery check */
  batt_info_t battery_info;

  memset(&battery_info, 0, sizeof(batt_info_t));

  /* Setup the response as a FAILURE */
  memset(&response, 0, sizeof(VHQResponseSendMsg));
  response.clientPid = getpid();
  response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  response.close_comm_id = FALSE;
  response.responseExpected = TRUE;
  strcpy(response.instance, GetCurrentInstance());
  vhq_result_t serverResult = VHQ_SUCCESS;

  memset(&fileStat, 0, sizeof(struct stat));

  /* Get Download arguments */
  int argc, i;
  char *argv[VHQ_DOWNLOADER_NUM_ARGS + 1];
  downloader_func_params *dl_func_parms = (downloader_func_params*) parameter;
  uint32 delayInstallTime = 0;

  for (i = 0; i < (VHQ_DOWNLOADER_NUM_ARGS + 1); i++)
  {
    argv[i] = (char*) ((int) dl_func_parms->argv + (256 * i));
  }

  argc = dl_func_parms->argc;
  dbg_msg("%s: argc = %d, dl_func_parms->argc = %d\n", __FUNCTION__, argc,
          dl_func_parms->argc);

  /* Print the banner string */
  log_alert(VHQ_DOWNLOADER_BANNER_STRING);
  log_alert("%s: Started\n", VHQ_DOWNLOADER_EXECUTABLE);

  if (argc != VHQ_DOWNLOADER_NUM_ARGS)
  {
    int i;

    printf(
        "%s usage: %s <method> <filename> <filesize> <type> <hash_algo> <hash> <url> <comm_id> <message_id> <operation_id> <msg_type> <msg_identifier>\n",
        VHQ_DOWNLOADER_EXECUTABLE,
        VHQ_DOWNLOADER_EXECUTABLE);
    printf("\tgot %d arguments (expected %d): ", argc, VHQ_DOWNLOADER_NUM_ARGS);
    for (i = 0; i < argc; i++)
      printf("%s ", argv[i]);
    printf("\n");
    log_err("%s ERROR: usage\n", VHQ_DOWNLOADER_EXECUTABLE);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  }

  /* REVISIT (Mitch 3-8-2012): Need to make sure these Q Id's persist even if VHQ is restarted */
  response_send_queue = atoi(argv[VHQ_DOWNLOADER_RSP_SEND_MSG_Q]);
  response_recv_queue = atoi(argv[VHQ_DOWNLOADER_RSP_RECV_MSG_Q]);

  dbg_msg("%s: responseSendQ = %d, responseRecvQ = %d\n",
          VHQ_DOWNLOADER_EXECUTABLE, response_send_queue, response_recv_queue);

  method = atoi(argv[VHQ_DOWNLOADER_METHOD]);
  filesize = (uint32) atoi(argv[VHQ_DOWNLOADER_FILESIZE]);
  delayInstallTime = atoi(argv[VHQ_DOWNLOADER_DELAY_INSTALL_TIME]);
  type = atoi(argv[VHQ_DOWNLOADER_TYPE]);
  hash_algo = atoi(argv[VHQ_DOWNLOADER_HASH_ALGO]);
  user = argv[VHQ_DOWNLOADER_USER];
  username = argv[VHQ_DOWNLOADER_USERNAME];
  pw = argv[VHQ_DOWNLOADER_PW];
  url = argv[VHQ_DOWNLOADER_URL];

  /* clear/init all filename vars */
  memset(orig_filename, 0, sizeof(orig_filename));
  memset(filename_copy, 0, sizeof(filename_copy));
  memset(filename_partial_unique, 0, sizeof(filename_partial_unique));
  memset(filename_flash_unique, 0, sizeof(filename_flash_unique));

  strcpy(orig_filename, argv[VHQ_DOWNLOADER_FILENAME]);
  strcpy(filename_copy, argv[VHQ_DOWNLOADER_FILENAME]);

  install_action = atoi(argv[VHQ_DOWNLOADER_INSTALL_ACTION]);
  suppress_reboot = atoi(argv[VHQ_DOWNLOADER_SUPPRESS_REBOOT]);
  compression = atoi(argv[VHQ_DOWNLOADER_COMPRESSION]);
  receiver = argv[VHQ_DOWNLOADER_RECEIVER];

  temp_type = (type & DL_FILE_DL_TYPE_TYPE_MASK);
  dbg_msg("%s: temp_type = %d\n", VHQ_DOWNLOADER_EXECUTABLE, temp_type);

  /* basename and dirname can manipulate path, so need to reinit each time */
  memset(filename_copy, 0, sizeof(filename_copy));
  strcpy(filename_copy, argv[VHQ_DOWNLOADER_FILENAME]);
  pszBaseName = os_basename(filename_copy);

  /* basename and dirname can manipulate path, so need to reinit each time */
  memset(filename_copy, 0, sizeof(filename_copy));
  strcpy(filename_copy, argv[VHQ_DOWNLOADER_FILENAME]);

#ifdef Mx2
  sprintf(filename_partial_unique, "%s%s",
          VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION, pszBaseName);
  sprintf(filename_flash_unique, "%s%s",
          VHQ_DOWNLOADER_FULL_FILE_STORAGE_LOCATION, pszBaseName);
#else
    sprintf(filename_partial_unique, "/tmp/%s", pszBaseName);
    sprintf(filename_flash_unique, "/home/usr1/vhq/%s", pszBaseName);
#endif
  /* due to filename size being limited on VX, don't worry about unique names on VX for now */
  /* create unique filename for partial downloads and after moving to flash */
  /* this is needed to handle the same file being downloaded multiple times */
  strcat(filename_partial_unique, ".");
  strcat(filename_flash_unique, ".");
  strcat(filename_partial_unique, argv[VHQ_DOWNLOADER_COMM_ID]);
  strcat(filename_flash_unique, argv[VHQ_DOWNLOADER_COMM_ID]);
  strcat(filename_partial_unique, ".");
  strcat(filename_flash_unique, ".");
  strcat(filename_partial_unique, argv[VHQ_DOWNLOADER_MESSAGE_ID]);
  strcat(filename_flash_unique, argv[VHQ_DOWNLOADER_MESSAGE_ID]);
  strcat(filename_partial_unique, ".");
  strcat(filename_flash_unique, ".");
  strcat(filename_partial_unique, argv[VHQ_DOWNLOADER_OPERATION_ID]);
  strcat(filename_flash_unique, argv[VHQ_DOWNLOADER_OPERATION_ID]);
  strcat(filename_partial_unique, PARTIAL_FILE_EXTENSION);

  dbg_msg(
      "%s: filename_partial_unique %s\n orig_filename %s\n filename_flash_unique %s\n",
      VHQ_DOWNLOADER_EXECUTABLE, filename_partial_unique, orig_filename,
      filename_flash_unique);

  if ((temp_type == DL_FILE_DL_TYPE_CONTENT)
      || (temp_type == DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED)
      || (temp_type == DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED)
      || (temp_type == DL_FILE_DL_TYPE_PARAMETER)
      || (temp_type == DL_FILE_DL_TYPE_PARAMETER_PARTIAL_FLAT)
      || (temp_type == DL_FILE_DL_TYPE_PARAMETER_PARTIAL_HIERARCHICHAL)
      || (temp_type == DL_FILE_DL_TYPE_PERIPHERAL))
  {
    log_dbg(
        "%s: Content/Parameter download - downloading to partial file %s first, storing in default flash location: %s\n",
        VHQ_DOWNLOADER_EXECUTABLE, filename_partial_unique,
        filename_flash_unique);
  }
  else if (strstr(argv[VHQ_DOWNLOADER_FILENAME], "/"))
  {
    log_dbg(
        "%s: Full path specified - %s, downloading to partial file first: %s\n",
        VHQ_DOWNLOADER_EXECUTABLE, orig_filename, filename_partial_unique);

  }
  else
  {
#ifdef Mx2
    memset(orig_filename, 0, sizeof(orig_filename));
    sprintf(orig_filename, "./flash/%s", pszBaseName);
#else
        memset(orig_filename, 0, sizeof(orig_filename));
        sprintf(orig_filename, "/home/usr1/%s", pszBaseName);
#endif
    log_dbg(
        "%s: No path specified - downloading to partial file first: %s, storing to default flash location - %s\n",
        VHQ_DOWNLOADER_EXECUTABLE, filename_partial_unique,
        filename_flash_unique);
  }

  /* Handle Expirations */
  if (type & DL_FILE_DL_TYPE_PERIPHERAL_MASK)
  {
    passthrough_now = TRUE;
    type = type & (~DL_FILE_DL_TYPE_PERIPHERAL_MASK);
  }

  if (type & DL_FILE_DL_TYPE_DOWNLOAD_MASK)
  {
    download_now = TRUE;
    type = type & (~DL_FILE_DL_TYPE_DOWNLOAD_MASK);
  }

  if (type & DL_FILE_DL_TYPE_INSTALL_MASK)
  {
    install_now = TRUE;
    type = type & (~DL_FILE_DL_TYPE_INSTALL_MASK);
  }

  if (type & DL_FILE_DL_TYPE_MAINTENANCE_MASK)
  {
    maintenance_dl = TRUE;
    type = type & (~DL_FILE_DL_TYPE_MAINTENANCE_MASK);
  }

  if (type & DL_FILE_DL_TYPE_EXPIRES_MASK)
  {
    char pszSaveDest[260];

    type = type & (~DL_FILE_DL_TYPE_EXPIRES_MASK);

    memset(pszSaveDest, 0, sizeof(pszSaveDest));
    sprintf(pszSaveDest, "%s%s", filename_flash_unique,
    ORIGINAL_SAVE_FILE_EXTENSION);
    dbg_msg("%s: Saving original file %s to %s\n", __FUNCTION__, orig_filename,
            pszSaveDest);
    CopyFile(orig_filename, pszSaveDest);
  }

  if (type & DL_FILE_DL_TYPE_IS_EXPIRED_MASK)
  {
    char pszSaveDest[260];

    memset(pszSaveDest, 0, sizeof(pszSaveDest));
    sprintf(pszSaveDest, "%s%s", filename_flash_unique,
    ORIGINAL_SAVE_FILE_EXTENSION);

    dbg_msg("%s: Temporary download %s expired - renaming saved file %s back\n",
            VHQ_DOWNLOADER_EXECUTABLE, orig_filename, pszSaveDest);

    rename(pszSaveDest, filename_flash_unique);

    /* We need to tell the content user to install the original file */
    type = type & (~DL_FILE_DL_TYPE_IS_EXPIRED_MASK);
    install_now = TRUE;
    dl_expired = TRUE;
  }

  if (type & DL_FILE_DL_TYPE_CONTACT_SERVER_APPROVED_MASK)
  {
    /* Contact server pre-approval is dealt with elsewhere, but make sure we clear it */
    type = type & (~DL_FILE_DL_TYPE_CONTACT_SERVER_APPROVED_MASK);
  }

  if (type & DL_FILE_DL_TYPE_INSTALL_APPROVED_MASK)
  {
    install_approval_required = FALSE;
    type = type & (~DL_FILE_DL_TYPE_INSTALL_APPROVED_MASK);
  }

  if (type & DL_FILE_DL_TYPE_REBOOT_APPROVED_MASK)
  {
    reboot_approval_required = FALSE;
    type = type & (~DL_FILE_DL_TYPE_REBOOT_APPROVED_MASK);
  }

  if (type & DL_FILE_DL_TYPE_RESTART_APPS_APPROVED_MASK)
  {
    restart_apps_approval_required = FALSE;
    type = type & (~DL_FILE_DL_TYPE_RESTART_APPS_APPROVED_MASK);
  }

  if (type & DL_FILE_DL_TYPE_FORCE_INSTALL_MASK)
  {
    isForceInstall = TRUE;
    install_approval_required = FALSE;
    reboot_approval_required = FALSE;
    restart_apps_approval_required = FALSE;
    type = type & (~DL_FILE_DL_TYPE_FORCE_INSTALL_MASK);
  }

  /* Setup the response */
  response.operation_type = OPERATION_DOWNLOAD_FILE;
  response.comm_id = atoi(argv[VHQ_DOWNLOADER_COMM_ID]);
  response.message_id = atoi(argv[VHQ_DOWNLOADER_MESSAGE_ID]);
  strcpy(response.operation_id, argv[VHQ_DOWNLOADER_OPERATION_ID]);
  response.srv_msg_type = atoi(argv[VHQ_DOWNLOADER_MSG_TYPE]);
  response.srv_op_type = atoi(argv[VHQ_DOWNLOADER_OP_TYPE]);
  response.operation_set_id = atoi(argv[VHQ_DOWNLOADER_OPERATION_SET_ID]);
  response.recur_id = atoi(argv[VHQ_DOWNLOADER_RECUR_ID]);

  log_notice(
      "%s: Method = %d\n\t\tFile Name = %s\n\t\tFile Size = %d\n\t\tDelay = %d\n\t\tFile Type = %d\n\t\tUser = %s\n\t\tUsername = %s\n\t\tPW = %s\n\t\tURL = %s\n\t\t\n\t\tInstall Action = %d\n\t\tComm ID = %d\n\t\tMessage ID = %d\n\t\tOperation ID = %s\n\t\tMSG Type = %d\n\t\tMSG Identifier = %d\n",
      VHQ_DOWNLOADER_EXECUTABLE, method, orig_filename, filesize,
      delayInstallTime, type, user, username, pw, url,
      install_action,
      response.comm_id, response.message_id, response.operation_id,
      response.srv_msg_type, response.srv_op_type);

  dbg_msg("%s: Hash Algorithm = %d\n", VHQ_DOWNLOADER_EXECUTABLE, hash_algo);
  dbg_msg("%s: HEX Hash String = %s\n", VHQ_DOWNLOADER_EXECUTABLE,
          argv[VHQ_DOWNLOADER_HASH]);
  ConvertHexStringToBinary(argv[VHQ_DOWNLOADER_HASH], hash, sizeof(hash));
  DebugMsgBuffer("\tBinary Hash String", hash, sizeof(hash), BUF_TYPE_HEX);

  if (GetExecutingIndex(response.operation_set_id, &executing_index) == FALSE)
  {
    log_err("%s: Could not find operation set id\n", __FUNCTION__);
  }

  /* Check battery level for battery powered devices */
  if ((GetMainBatteryStatus(&battery_info) >= 0)
      && (battery_info.bMainBattery == TRUE) && (battery_info.powerStatus == 0))
  {
    bool bDlOnlyOnPowered = FALSE;

    VHQGetParameterBool(PARAM_DL_AC_POWERED, &bDlOnlyOnPowered);

    if (bDlOnlyOnPowered && download_now)
    {
      log_err("%s: Download only when charging, postpone download\n",
              __FUNCTION__);

      response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_POSTPONE;
      strcpy(response.additional_info,
             "Download postponed due to device not charging");

      SendResponse(event_id, &response, 0, 0);
      return response.result;
    }

    if (battery_info.level < LOW_BATTERY_THRESHOLD)
    {
      log_err("%s: Device is on low battery, postpone download/installation\n",
              __FUNCTION__);

      if (download_now)
      {
        response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_POSTPONE;
        strcpy(response.additional_info,
               "Download postponed due to low battery");
      }
      else
      {
        response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_INSTALL_POSTPONE;
        strcpy(response.additional_info,
               "Installation postponed due to low battery");
      }

      SendResponse(event_id, &response, 0, 0);
      return response.result;
    }
  }

  /* If the partial/complete file already exists, we are resuming a download so don't re-send
   the DownloadStarted message */
  if (stat(filename_partial_unique, &fileStat) == 0)
  {
    truncatePartialFile(filename_partial_unique, &fileStat);
    log_notice(
        "%s: partial file %s already exists - resuming download from %d bytes\n",
        __FUNCTION__, filename_partial_unique, fileStat.st_size);
    send_dl_started = FALSE;
  }
  else if (stat(filename_flash_unique, &fileStat) == 0)
  {
    log_notice("%s: file %s already exists - resuming download from %d bytes\n",
               __FUNCTION__, filename_flash_unique, fileStat.st_size);
    response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED;
    send_dl_started = FALSE;
  }

  needed_filesize = (filesize - fileStat.st_size);

  /* We are starting the download so send the download started message */
  if ((download_now) && (needed_filesize != 0))
  {
    uint32 dl_duration = 0;
    uint32 dl_attempts = 0;
    bool dlFolderExist = FALSE;

    /* Recheck if we have the download directory */
    dlFolderExist = DirExists(VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION);

    if (dlFolderExist == FALSE)
    {
      dlFolderExist = CreateDir(VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION,
                                0744);
    }

    if (dlFolderExist)
    {
      /* Check for remaining file size memory in case of resume downloads and a buffer of 10% */
      if (CheckFreeMemForDownload(VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION,
                                  needed_filesize))
      {
        log_dbg("%s: Downloading %s from %s\n", VHQ_DOWNLOADER_EXECUTABLE,
                orig_filename, url);
        response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_STARTED;
        response.close_comm_id = FALSE;

        /* Notify any registered apps */
        EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_STARTED, orig_filename,
                          executing_index, VHQ_SUCCESS, event_set_id, event_id,
                          !isForceInstall);

        /* check if in MW; if not, but MW DL, then don't send Start Message */
        if (maintenance_dl)
        {
          time_t cur_time = linux_time(NULL);

          if (!IsInMaintenanceWindow(cur_time, NULL))
          {
            log_err(
                "%s: Maintenance Window download NOT STARTED because we are outside"
                "the maintenance window\n",
                __FUNCTION__);
          }
          else if (send_dl_started)
          {
            serverResult = SendResponse(event_id, &response, 0, 0);
          }
        }
        else if (send_dl_started)
        {
          serverResult = SendResponse(event_id, &response, 0, 0);
        }

        /* Download the file */
        ret_val = response.result = DownloadFile(method,
                                                 filename_partial_unique,
                                                 filename_flash_unique,
                                                 hash_algo, hash, url,
                                                 maintenance_dl, filesize,
                                                 event_set_id, event_id,
                                                 &dl_duration, &dl_attempts,
                                                 !isForceInstall);
        log_notice("%s: DownloadFile returned %d\n", __FUNCTION__, ret_val);

        if (response.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED)
        {
          response.close_comm_id = FALSE;

          /* Mitch (1-7-2016): ADKTMS-894 - logs seem to indicate we might have an issue or crash
           when trying to print the result string here.  So always just print the numeric code to the
           logs here */
          log_dbg("%s: Sending download result %d\n", VHQ_DOWNLOADER_EXECUTABLE,
                  response.result);
        }
        else if (response.result
            == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_RESCHEDULE)
        {
          strcpy(response.additional_info,
                 "Download postponed to next available MW");
        }
        else
        {
          response.close_comm_id = TRUE;

          /* Mitch (1-7-2016): ADKTMS-894 - logs seem to indicate we might have an issue or crash
           when trying to print the result string here.  So always just print the numeric code to the
           logs here */

          log_err("%s: Sending download result %d\n", VHQ_DOWNLOADER_EXECUTABLE,
                  response.result);
        }

        if (ret_val == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED)
          EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE, orig_filename,
                            executing_index, VHQ_SUCCESS, event_set_id,
                            event_id, !isForceInstall);
        else
          EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE, orig_filename,
                            executing_index, ret_val, event_set_id, event_id,
                            !isForceInstall);

        SendResponse(event_id, &response, dl_duration, dl_attempts);
      }
      else
      {

        log_err("%s: Not enough memory for %d byte download\n",
                VHQ_DOWNLOADER_EXECUTABLE, filesize);
        response.result =
            VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
        EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_STARTED, orig_filename,
                          executing_index, response.result, event_set_id,
                          event_id, !isForceInstall);
        response.close_comm_id = TRUE;
        SendResponse(event_id, &response, 0, 0);
        return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR;
      }
    }
    else
    {
      log_err("%s: Error creating Download folder\n",
              VHQ_DOWNLOADER_EXECUTABLE);
      response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_LOCATION_FAIL;
      response.close_comm_id = TRUE;
      SendResponse(event_id, &response, 0, 0);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_LOCATION_FAIL;
    }
  }

  if (install_now || passthrough_now)
  {
    if (!download_now
        || (response.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED))
    {

      log_notice("%s: Installing %s\n", VHQ_DOWNLOADER_EXECUTABLE,
                 orig_filename);

      /* Don't send download status messages for parameter updates */
      if ((type != DL_FILE_DL_TYPE_PARAMETER)
          && (type != DL_FILE_DL_TYPE_PARAMETER_PARTIAL_FLAT)
          && (type != DL_FILE_DL_TYPE_PARAMETER_PARTIAL_HIERARCHICHAL))
      {
        /* Notify any registered apps */

        vhq_result_t notify_ret_val;

        notify_ret_val = EventNotification(TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD,
                                           orig_filename, executing_index,
                                           VHQ_SUCCESS, event_set_id, event_id,
                                           install_approval_required);
        if (notify_ret_val == VHQ_SUCCESS)
        {
          SetApprovalFlag(event_set_id, event_id, INSTALL_PRE_APPROVED);
        }
        else
        {
          log_err(
              "%s ERROR: Install download approval FAILED - returning without installing\n",
              __FUNCTION__);

          if (notify_ret_val == VHQ_API_POSTPONED)
          {
            response.result = VHQ_API_POSTPONED;
          }
          else if (notify_ret_val == VHQ_API_APP_APPROVAL_ERROR)
          {
            response.result =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_APP_APPROVAL_ERROR;
          }
          else
          {
            response.result =
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
          }

          SendResponse(event_id, &response, 0, 0);
          return response.result;
        }
      }

      /* Special case for VHQ IDS, Defer package contains packages that will make device incapable of communication after installation.
       * Ex: USBMODE wherein change of usb mode from host to device will make the device lose network connection and server status is lost */
      if (strstr(filename_copy, VHQ_IDS_PACKAGE_DEFER) != NULL)
      {
        log_dbg("%s: IDS Defer package %s\n", __FUNCTION__, filename_copy);
        ids_defer_pkg = TRUE;
        vhq_result_t temp_result = response.result;
        response.result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
        SendResponse(event_id, &response, 0, 0);
        response.result = temp_result;
      }

      if ((install_action == TERM_ACTION_REBOOT) && (!suppress_reboot))
      {
        si_flag = AGT_SECINS_FORCE_REBOOT;
      }
      else if (install_action == TERM_ACTION_RESTART_APP)
      {
        si_flag = AGT_SECINS_FORCE_RESTART_APPS;
      }

      /* si_flag is used as inputs for Extended SI API and output for Legacy API.
       * If flag is set to zero after ProcessDownloadFile that means new APIs are triggered.
       */
      ret_val = response.result = ProcessDownloadFile(username,
                                                      filename_flash_unique,
                                                      orig_filename, type,
                                                      &response, receiver,
                                                      event_set_id, event_id,
                                                      compression, &si_flag);
      dbg_msg("%s: ProcessDownloadFile returned %d, si_flag: %d\n",
              __FUNCTION__, ret_val, si_flag);

      if (FileExists(filename_flash_unique) && ret_val != VHQ_API_POSTPONED)
      {
        if (strcmp(filename_flash_unique, orig_filename) != 0)
        {
          dbg_msg(
              "%s: Download was not postponed and flash/orig filenames are different - removing unique flash file %s\n",
              __FUNCTION__, filename_flash_unique);
          remove(filename_flash_unique);
        }
      }

      /* The result of expired content being replaced needs to be ContentReplaced or ContentReplaceFailed */
      if (dl_expired)
      {
        if (response.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
        {
          log_err(
              "%s: dl_expired - converting VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED to VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED\n",
              VHQ_DOWNLOADER_EXECUTABLE);
          response.result =
              VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED;
        }
        else
        {
          log_err(
              "%s: dl_expired FAILURE - converting %d to VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED\n",
              VHQ_DOWNLOADER_EXECUTABLE, response.result);
          response.result =
              VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACE_FAILED;
        }
      }

      /* Mitch (1-11-2016): ADKTMS-894 - logs seem to indicate we might have an issue or crash
       when trying to print the result string here.  So always just print the numeric code to the
       logs here */

      log_dbg("%s: Install result %d\n", VHQ_DOWNLOADER_EXECUTABLE,
              response.result);

      // Delete old Reboot status and update new.
      if (removeFile(VHQ_RESPONSE_MSG_TEMP_FILE) == FALSE)
      {
        log_dbg("%s: Error removing %s\n", __FUNCTION__,
                VHQ_RESPONSE_MSG_TEMP_FILE);
      }

      WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, &response);

      /* If SI new API is called skip INSTALL ACTION as SI has control over it */
      if ((response.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
          || (response.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED))
      {
        term_act_content_t action_content;
        bool install_status_notification_required = FALSE;
        bool isLastOp = FALSE;

        if (isForceInstall == FALSE)
        {
          if (GetApprovalFlag(response.operation_set_id, response.operation_id,
                              INSTALL_STATUS_REQUIRED, &isLastOp) == FALSE)
          {
            /* Send notifications for all Downloads when Pre approvals is not set or AppApprovalPerOpSet is set to FALSE */
            install_status_notification_required = TRUE;
          }
          else
          {
            /* Installs were pre-approved, so we only need to send the INSTALL_STATUS for the last Operation in the OpSet */
            if (isLastOp == TRUE)
            {
              install_status_notification_required = TRUE;
            }
          }
        }

        if (suppress_reboot)
        {
          if (si_flag & AGT_SECINS_RESTART_APPS_REQD_BIT)
          {
            dbg_msg(
                "%s: install action/si flag is TERM_ACTION_RESTART_APP - setting ret_val/response to VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED (%d)\n",
                __FUNCTION__,
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED);
            ret_val =
                response.result =
                    VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED;
          }
          else if (si_flag & AGT_SECINS_REBOOT_REQD_BIT)
          {
            dbg_msg(
                "%s: install action/si flag is TERM_ACTION_RESTART_APP - setting ret_val/response to VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED (%d)\n",
                __FUNCTION__,
                VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED);
            ret_val =
                response.result =
                    VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED;
          }

          SendResponse(event_id, &response, 0, 0);
          SetSuppressedAction(install_action, event_set_id);
          log_err(
              "%s: Reboot PostInstallAction set but SuppressReboot is set - skipping reboot\n",
              __FUNCTION__);
        }
        else
        {
          bool restart_flag = FALSE;

          memset(&action_content, 0, sizeof(action_content));

          log_dbg(
              "%s: Download Installed - Processing PostInstallAction Flag %d (OpSet ID = %d, Operation ID = %s)\n",
              __FUNCTION__, install_action, response.operation_set_id,
              response.operation_id);

          if (si_flag & AGT_SECINS_RESTART_APPS_REQD_BIT)
          {
            action_content.action = TERM_ACTION_RESTART_APP;

            ret_val = ProcessAction(&action_content, response.comm_id,
                                    response.message_id,
                                    response.operation_set_id,
                                    response.operation_id,
                                    response.srv_msg_type, response.srv_op_type,
                                    event_set_id, event_id, FALSE,
                                    restart_apps_approval_required);
            if (ret_val == VHQ_SUCCESS)
              restart_flag = TRUE;
          }
          else if (si_flag & AGT_SECINS_REBOOT_REQD_BIT)
          {
            action_content.action = TERM_ACTION_REBOOT;

            ret_val = ProcessAction(&action_content, response.comm_id,
                                    response.message_id,
                                    response.operation_set_id,
                                    response.operation_id,
                                    response.srv_msg_type, response.srv_op_type,
                                    event_set_id, event_id, FALSE,
                                    reboot_approval_required);
          }

          /* We can only get here for secure installer successful installs that don't require reboot */
          EventNotification(TMS_EVENT_NOTIFY_INSTALL_STATUS, orig_filename,
                            executing_index, TMS_STATUS_SUCCESS, event_set_id,
                            event_id, install_status_notification_required);

          if (delayInstallTime > 0)
          {
            dbg_msg(
                "%s: install complete and wait for %d milliseconds before continue\n",
                VHQ_DOWNLOADER_EXECUTABLE, delayInstallTime);
            usleep(delayInstallTime * 1000);
          }

          if (ret_val != VHQ_SUCCESS)
          {
            response.result = ret_val;
          }

          /* We don't want Agent to Send the status again in case of IDS Defer package */
          if ((install_action == TERM_ACTION_NONE) && (ids_defer_pkg == FALSE))
          {
            response.close_comm_id = TRUE;
            SendResponse(event_id, &response, 0, 0);
          }
          else if (install_action != TERM_ACTION_NONE)
          {
            // Reboot/Restart if SI didn't
            if (install_action == TERM_ACTION_REBOOT)
            {
              if (ids_defer_pkg == FALSE)
                SendResponse(event_id, &response, 0, 0);

              // Post install status
              response.result = VHQ_SUCCESS;

              action_content.action = TERM_ACTION_REBOOT;

              // Reboot status
              if (removeFile(VHQ_RESPONSE_MSG_TEMP_FILE) == FALSE)
              {
                log_dbg("%s: Error removing %s\n", __FUNCTION__,
                        VHQ_RESPONSE_MSG_TEMP_FILE);
              }
              WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, &response);

              ret_val = response.result = ProcessAction(
                  &action_content, response.comm_id, response.message_id,
                  response.operation_set_id, response.operation_id,
                  response.srv_msg_type, response.srv_op_type, event_set_id,
                  event_id, FALSE, reboot_approval_required);
              response.close_comm_id = TRUE;

              SendResponse(event_id, &response, 0, 0);
            }
            else if ((install_action == TERM_ACTION_RESTART_APP)
                && (restart_flag == FALSE) && (si_flag != 0))
            {
              if (ids_defer_pkg == FALSE)
                SendResponse(event_id, &response, 0, 0);

              // Post install status
              response.result = VHQ_SUCCESS;

              /* Actually, TERM_ACTION_RESTART_APP is of no use because new SI API restarts all user apps
               * Legacy SI API provided SIBITS and Agent restarts the apps already.
               */
              action_content.action = TERM_ACTION_RESTART_APP;

              ret_val = response.result = ProcessAction(
                  &action_content, response.comm_id, response.message_id,
                  response.operation_set_id, response.operation_id,
                  response.srv_msg_type, response.srv_op_type, event_set_id,
                  event_id, FALSE, restart_apps_approval_required);
              response.close_comm_id = TRUE;

              SendResponse(event_id, &response, 0, 0);
            }
            else
            {
              if (ids_defer_pkg == FALSE)
              {
                response.close_comm_id = TRUE;
                SendResponse(event_id, &response, 0, 0);
              }
            }
          }
        }
      }
      else
      {
        EventNotification(TMS_EVENT_NOTIFY_INSTALL_STATUS, orig_filename,
                          executing_index, TMS_STATUS_ERROR, event_set_id,
                          event_id, !isForceInstall);
        response.close_comm_id = TRUE;
        SendResponse(event_id, &response, 0, 0);
      }
      dbg_msg("%s: removing Response file as no longer needed \n",
              __FUNCTION__);
      // ServerMessage sent so we can delete the temporary message file
      if (removeFile(VHQ_RESPONSE_MSG_TEMP_FILE) == FALSE)
      {
        log_dbg("%s: Error removing %s\n", __FUNCTION__,
                VHQ_RESPONSE_MSG_TEMP_FILE);
      }
    }
  }

  dbg_notice("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


void SetSuppressedAction(term_action_t action, event_set_id_t event_set_id)
{
  suppressed_action.action_suppressed = TRUE;

  /* Don't overwrite REBOOT suppressed action with RESTART_APP */
  if (suppressed_action.action != TERM_ACTION_REBOOT)
    suppressed_action.action = action;

  suppressed_action.event_set_id = event_set_id;
}

term_action_t SuppressedActionRequired(event_set_id_t event_set_id)
{
  if (suppressed_action.action_suppressed)
  {
    if (suppressed_action.event_set_id == event_set_id)
    {
      dbg_msg(
          "%s: action type %d was suppressed for event_set_id %d - returning %d\n",
          __FUNCTION__, suppressed_action.action, event_set_id,
          suppressed_action.action);
      return (suppressed_action.action);
    }
  }

  return TERM_ACTION_NONE;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
