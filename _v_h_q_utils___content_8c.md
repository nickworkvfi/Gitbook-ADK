---
title: tmsagt/src/VHQUtils/VHQUtils_Content.c

---

# tmsagt/src/VHQUtils/VHQUtils_Content.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[_user_cb_t](struct__user__cb__t.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [_user_cb_t](struct__user__cb__t.md) | **[user_cb_t](_v_h_q_utils___content_8c.md#typedef-user-cb-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[ClearContentResult](_v_h_q_utils___content_8c.md#function-clearcontentresult)**(uid_t user_id) |
| int | **[GetContentResult](_v_h_q_utils___content_8c.md#function-getcontentresult)**(uid_t user_id, int content_id, int * content_status) |
| int | **[SetupContentCallback](_v_h_q_utils___content_8c.md#function-setupcontentcallback)**(long client_pid, uid_t user_id, void(*)(char *ContentData) callback) |
| int | **[GetContentCallbackRoot](_v_h_q_utils___content_8c.md#function-getcontentcallbackroot)**(long * client_pid, uid_t user_id, void(**)(char *ContentData) callback) |
| int | **[SetContentResult](_v_h_q_utils___content_8c.md#function-setcontentresult)**(uid_t user_id, int content_id, int content_status) |
| int | **[GetContentResultRoot](_v_h_q_utils___content_8c.md#function-getcontentresultroot)**(uid_t user_id, int content_id, int * content_status) |
| vhq_result_t | **[vhqlibsvc_status_to_vhq_res](_v_h_q_utils___content_8c.md#function-vhqlibsvc-status-to-vhq-res)**(int status) |
| vhq_result_t | **[DoContentCallback](_v_h_q_utils___content_8c.md#function-docontentcallback)**(char * user, char * pszContentFile, char * pszContentDest, dl_file_dl_type_t eType) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [user_cb_t](_v_h_q_utils___content_8c.md#typedef-user-cb-t)[MAX_CONTENT_CONSUMERS] | **[user_cb_array](_v_h_q_utils___content_8c.md#variable-user-cb-array)**  |
| int | **[content_id](_v_h_q_utils___content_8c.md#variable-content-id)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAX_CONTENT_CONSUMERS](_v_h_q_utils___content_8c.md#define-max-content-consumers)**  |
|  | **[CONTENT_RESPONSE_MAX_DELAY](_v_h_q_utils___content_8c.md#define-content-response-max-delay)**  |
|  | **[CONTENT_RESPONSE_RETRY_DELAY](_v_h_q_utils___content_8c.md#define-content-response-retry-delay)**  |

## Detailed Description


Some utility functions for content management 

## Types Documentation

### typedef user_cb_t

```cpp
typedef struct _user_cb_t user_cb_t;
```



## Functions Documentation

### function ClearContentResult

```cpp
static int ClearContentResult(
    uid_t user_id
)
```


### function GetContentResult

```cpp
static int GetContentResult(
    uid_t user_id,
    int content_id,
    int * content_status
)
```


**Parameters**: 

  * **user_id** = user ID of user 
  * **content_id** = content ID 
  * **content_status** = content status


**Return**: int, result from root 

This function gathers the content result. 


### function SetupContentCallback

```cpp
int SetupContentCallback(
    long client_pid,
    uid_t user_id,
    void(*)(char *ContentData) callback
)
```


### function GetContentCallbackRoot

```cpp
int GetContentCallbackRoot(
    long * client_pid,
    uid_t user_id,
    void(**)(char *ContentData) callback
)
```


### function SetContentResult

```cpp
int SetContentResult(
    uid_t user_id,
    int content_id,
    int content_status
)
```


### function GetContentResultRoot

```cpp
int GetContentResultRoot(
    uid_t user_id,
    int content_id,
    int * content_status
)
```


### function vhqlibsvc_status_to_vhq_res

```cpp
static vhq_result_t vhqlibsvc_status_to_vhq_res(
    int status
)
```


### function DoContentCallback

```cpp
vhq_result_t DoContentCallback(
    char * user,
    char * pszContentFile,
    char * pszContentDest,
    dl_file_dl_type_t eType
)
```


**Parameters**: 

  * **user** = username 
  * **pszContentFile** = downloaded file 
  * **pszContentDest** = downloaded destination 
  * **eType** = file type


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function sends a content event and passes the download file to app. 



## Attributes Documentation

### variable user_cb_array

```cpp
static user_cb_t[MAX_CONTENT_CONSUMERS] user_cb_array;
```


### variable content_id

```cpp
static int content_id = 0;
```



## Macros Documentation

### define MAX_CONTENT_CONSUMERS

```cpp
#define MAX_CONTENT_CONSUMERS 16
```


### define CONTENT_RESPONSE_MAX_DELAY

```cpp
#define CONTENT_RESPONSE_MAX_DELAY 180
```


### define CONTENT_RESPONSE_RETRY_DELAY

```cpp
#define CONTENT_RESPONSE_RETRY_DELAY 5
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <math.h>
#include <memory.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <svc.h>
#include <svcsec.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <pwd.h>
#include "VHQDebug.h"
#include "VHQUtils.h"

#ifdef Mx2
//#include <svcmgr/private/vhq_priv.h>
#include "vhq_priv.h"
#include "tms_priv.h"
#include <grp.h>
#else  // Mx2
#include "VHQAppIntegLib.h"

typedef struct _user_cb_t
{
    uid_t user_id;
    long pid;
    void (*callback) (char* ContentData);
    int cur_content_id;
    int cur_content_id_result;
}user_cb_t;

/* Allow for 16 user callbacks */
#define MAX_CONTENT_CONSUMERS       16

static user_cb_t user_cb_array[MAX_CONTENT_CONSUMERS];


static int ClearContentResult(uid_t user_id)
{
    int ret_val = VHQ_STATUS_ERROR;
    int outQid, inQid;
    VHQRootRequestMsg set_content_res_request_msg;
    VHQRootResponseMsg set_content_res_resp_msg;

  // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
  inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&set_content_res_request_msg, 0, sizeof(VHQRootRequestMsg));

        set_content_res_request_msg.clientPid = getpid();
        set_content_res_request_msg.message_type = VHQ_ROOT_REQUEST_SET_CONTENT_RESULT;
        set_content_res_request_msg.data.sContentResultReq.user_id = user_id;
        set_content_res_request_msg.data.sContentResultReq.content_id = 0;
        set_content_res_request_msg.data.sContentResultReq.content_status = VHQ_STATUS_CONTENT_FAILURE;

        SafeMsgSndWrapper(outQid, &set_content_res_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &set_content_res_resp_msg, sizeof(VHQRootResponseMsg) - sizeof(long), set_content_res_request_msg.clientPid, 0, FALSE) >= exp_len)
        {
            dbg_msg( "%s: set_content_res_resp_msg - ret_val = %d\n", __FUNCTION__, set_content_res_resp_msg.data.sContentResultResp.ret_val);
            ret_val = set_content_res_resp_msg.data.sContentResultResp.ret_val;
        }
        else
      ret_val = VHQ_STATUS_ERROR;
    }
  else
    {
        dbg_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        ret_val = VHQ_STATUS_ERROR;
    }

    return ret_val;
}

static int GetContentResult(uid_t user_id, int content_id, int* content_status)
{
    int ret_val = VHQ_STATUS_ERROR;
    int outQid, inQid;
    VHQRootRequestMsg get_content_res_request_msg;
    VHQRootResponseMsg get_content_res_resp_msg;

    /* Default to return a failure */
    *content_status = VHQ_STATUS_CONTENT_FAILURE;

  // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
  inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&get_content_res_request_msg, 0, sizeof(VHQRootRequestMsg));

        get_content_res_request_msg.clientPid = getpid();
        get_content_res_request_msg.message_type = VHQ_ROOT_REQUEST_GET_CONTENT_RESULT;
        get_content_res_request_msg.data.sContentResultReq.user_id = user_id;
        get_content_res_request_msg.data.sContentResultReq.content_id = content_id;

        SafeMsgSndWrapper(outQid, &get_content_res_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &get_content_res_resp_msg, sizeof(VHQRootResponseMsg) - sizeof(long), get_content_res_request_msg.clientPid, 0, FALSE) >= exp_len)
        {
            dbg_msg( "%s: get_content_res_resp_msg - ret_val = %d\n", __FUNCTION__, get_content_res_resp_msg.data.sContentResultResp.ret_val);
            ret_val = get_content_res_resp_msg.data.sContentResultResp.ret_val;
            *content_status = get_content_res_resp_msg.data.sContentResultResp.content_status;
        }
        else
      ret_val = VHQ_STATUS_ERROR;
    }
  else
    {
        dbg_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        ret_val = VHQ_STATUS_ERROR;
    }

    return ret_val;
}



int SetupContentCallback(long client_pid, uid_t user_id, void (*callback) (char* ContentData))
{
    int i;

    /* Find an open slot to store this callback */
    for (i = 0; i < MAX_CONTENT_CONSUMERS; i++)
    {
        if (user_cb_array[i].user_id == 0)
        {
            dbg_err( "%s: Found open callback slot - Adding uid %d (callback = 0x%08x) to slot %d\n", __FUNCTION__, user_id, callback, i);
            break;
        }
        else if (user_cb_array[i].user_id == user_id)
        {
            dbg_err( "%s: Callback for uid %d already exists in slot %d - Overwriting existing callback\n", __FUNCTION__, user_id, i);
            break;
        }
    }

    /* Make sure we found an open slot */
    if (i >= MAX_CONTENT_CONSUMERS)
    {
        dbg_err( "%s ERROR: Could not find open callback slot for uid %d\n", __FUNCTION__, user_id);
        return VHQ_STATUS_ERROR;
    }

    /* We found an open slot so store the callback info */
    user_cb_array[i].user_id = user_id;
    user_cb_array[i].pid = client_pid;
    user_cb_array[i].callback = callback;
    user_cb_array[i].cur_content_id = 0;
    user_cb_array[i].cur_content_id_result = 0;


    return VHQ_STATUS_SUCCESS;
}

int GetContentCallbackRoot(long* client_pid, uid_t user_id, void (**callback) (char* ContentData))
{
    int i;

    /* Set the callback to NULL */
    *callback = NULL;

    /* Find the user ID in the callback array */
    for (i = 0; i < MAX_CONTENT_CONSUMERS; i++)
    {
        if (user_cb_array[i].user_id == user_id)
        {
            dbg_msg( "%s: Found callback for user ID %d in slot %d\n", __FUNCTION__, user_id, i);
            break;
        }
    }

    /* Make sure we found the user's callback */
    if (i >= MAX_CONTENT_CONSUMERS)
    {
        dbg_err( "%s ERROR: Could not find callback for uid %d\n", __FUNCTION__, user_id);
        return VHQ_STATUS_NO_CONSUMER;
    }

    *client_pid = user_cb_array[i].pid;
    *callback = user_cb_array[i].callback;
    return VHQ_STATUS_SUCCESS;
}


int SetContentResult(uid_t user_id, int content_id, int content_status)
{
    int i;

    /* Find the user ID in the callback array */
    for (i = 0; i < MAX_CONTENT_CONSUMERS; i++)
    {
        if (user_cb_array[i].user_id == user_id)
        {
            dbg_msg( "%s: Found callback for user ID %d in slot %d\n", __FUNCTION__, user_id, i);
            break;
        }
    }

    /* Make sure we found the user's callback */
    if (i >= MAX_CONTENT_CONSUMERS)
    {
        dbg_err( "%s ERROR: Could not find callback for uid %d\n", __FUNCTION__, user_id);
        return VHQ_STATUS_NO_CONSUMER;
    }

    user_cb_array[i].cur_content_id = content_id;
    user_cb_array[i].cur_content_id_result = content_status;
    return VHQ_STATUS_SUCCESS;
}

int GetContentResultRoot(uid_t user_id, int content_id, int* content_status)
{
    int i;

    /* Default to return a FAILURE */
    *content_status = VHQ_STATUS_CONTENT_FAILURE;

    /* Find the user ID in the callback array */
    for (i = 0; i < MAX_CONTENT_CONSUMERS; i++)
    {
        if (user_cb_array[i].user_id == user_id)
        {
            dbg_msg( "%s: Found callback for user ID %d in slot %d\n", __FUNCTION__, user_id, i);
            break;
        }
    }

    /* Make sure we found the user's callback */
    if (i >= MAX_CONTENT_CONSUMERS)
    {
        dbg_err( "%s ERROR: Could not find callback for uid %d\n", __FUNCTION__, user_id);
        return VHQ_STATUS_NO_CONSUMER;
    }

    if (user_cb_array[i].cur_content_id == content_id)
    {
        *content_status = user_cb_array[i].cur_content_id_result;
        return VHQ_STATUS_SUCCESS;
    }
    else
    {
        return VHQ_STATUS_ERROR;
    }
}

#endif  // Mx2

static vhq_result_t vhqlibsvc_status_to_vhq_res(int status)
{
  switch (status)
  {
    case VHQ_STATUS_SUCCESS:
      return VHQ_SUCCESS;
    case VHQ_STATUS_ERROR:
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_ERROR;
    case VHQ_STATUS_CONTENT_AVAILABLE:
      return VHQ_SUCCESS;
    case VHQ_STATUS_NO_CONSUMER:
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_NO_CONTENT_CONSUMER;
    case VHQ_STATUS_FILENAME_ERROR:
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_FILENAME_ERROR;
    case VHQ_STATUS_CONTENT_FAILURE:
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_ERROR;
#ifndef Mx2
    case VHQ_STATUS_CONTENT_MEM_ERROR:
        return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_MEMORY_ERROR;
#endif

    default:
      return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
  }

}

static int content_id = 0;

/* Setup a Maximum delay of 3 minutes for content processing */
#define CONTENT_RESPONSE_MAX_DELAY      180
#define CONTENT_RESPONSE_RETRY_DELAY    5


vhq_result_t DoContentCallback(char *user, char *pszContentFile,
                               char *pszContentDest, dl_file_dl_type_t eType)
{
#ifdef Mx2
  vhq_result_t result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
  int set_content_result;
  int result_retries = CONTENT_RESPONSE_MAX_DELAY / CONTENT_RESPONSE_RETRY_DELAY;
  bool no_response = TRUE;
  char groupname[16];
  struct group *psGroup;
#else
    vhq_result_t result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
    int get_cb_result;
    struct passwd *psPasswd;
    uid_t user_id;
    int outQid, inQid;
    VHQRootRequestMsg get_cb_request_msg;
    VHQRootResponseMsg get_cb_response_msg;
    int result_retries;
    bool no_response;
#endif

  int content_type;

  if (eType == DL_FILE_DL_TYPE_CONTENT)
    content_type = VHQ_CONTENT_TYPE_UNSIGNED_FILE;
  else if (eType == DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED)
    content_type = VHQ_CONTENT_TYPE_UNSIGNED_BUNDLE;
  else if (eType == DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED)
    content_type = VHQ_CONTENT_TYPE_MIXED_BUNDLE;
  else
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_TYPE_ERROR;

  content_id++;
  while (content_id <= 0)
    content_id++;

#ifdef Mx2
  /* Setup the proper permissions on the file before passing it off */
  sprintf(groupname, "%ssys", user);
  psGroup = getgrnam(groupname);

  if (psGroup)
  {
    int chmod_ret, chown_ret;

    dbg_msg("%s: Changing ownership to group %s (gid = %d)\n", __FUNCTION__,
            groupname, psGroup->gr_gid);
    chmod_ret = chmod(pszContentFile, 0640);
    dbg_msg("%s: chmod() returned %d, errno = %d\n", __FUNCTION__, chmod_ret,
            errno);
    chown_ret = chown(pszContentFile, getuid(), psGroup->gr_gid);
    dbg_msg("%s: chown() returned %d, errno = %d (%s)\n", __FUNCTION__,
            chown_ret, errno, strerror(errno));
  }
  else
    dbg_warn("%s: Couldn't get info for group %s (psGroup = 0x%08x)\n",
             __FUNCTION__, groupname, psGroup);

  dbg_msg("%s: Calling vhq_setContentEvent()\n", __FUNCTION__);
  set_content_result = vhq_setContentEvent(user, pszContentFile, pszContentDest,
                                           content_type, content_id);
  result = vhqlibsvc_status_to_vhq_res(set_content_result);
  dbg_msg("%s: vhq_setContentEvent() returned: %d\n", __FUNCTION__, result);

  if (result == VHQ_SUCCESS)
  {
    result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT;

    while (result_retries && no_response)
    {
      int get_content_result_return;

      sleep(CONTENT_RESPONSE_RETRY_DELAY);

      get_content_result_return = vhq_getContentResult(user, content_id,
                                                       1 /* non-block */);
      if ((get_content_result_return == VHQ_STATUS_ERROR) && (errno == EFAULT))
      {
        dbg_msg("%s: no result yet - retrying\n", __FUNCTION__);
      }
      else
      {
        no_response = FALSE;
        result = vhqlibsvc_status_to_vhq_res(get_content_result_return);
        if (result == VHQ_SUCCESS)
          result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
        dbg_msg("%s: read result of %d (errno=%d)\n", __FUNCTION__, result,
                errno);
      }
      result_retries--;
    }

    if (no_response)
    {
      dbg_msg(
          "%s: no result received - closing event (usr = %s, content id = %d)\n",
          __FUNCTION__, user, content_id);
      vhq_closeContentResult(user, content_id);
      result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT;
    }
  }

#else
    psPasswd = getpwnam(user);

    user_id = 0;
    if (psPasswd)
    {
        user_id = psPasswd->pw_uid;

        dbg_msg( "%s: Got callback - setting up callback data\r\n", __FUNCTION__);

        ClearContentResult(user_id);
    }


    dbg_msg( "%s: Requesting ROOT to do callback\r\n", __FUNCTION__);


    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
  inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&get_cb_request_msg, 0, sizeof(VHQRootRequestMsg));

        get_cb_request_msg.clientPid = getpid();
        get_cb_request_msg.message_type = VHQ_ROOT_REQUEST_DO_CALLBACK;
        get_cb_request_msg.data.sContentCBData.user_id = user_id;
        if (pszContentFile)
        {
            strcpy(get_cb_request_msg.data.sContentCBData.content_file, pszContentFile);
        }
        if (pszContentDest)
        {
            strcpy(get_cb_request_msg.data.sContentCBData.content_dest, pszContentDest);
        }
        get_cb_request_msg.data.sContentCBData.content_type = content_type;
        get_cb_request_msg.data.sContentCBData.content_id = content_id;

        dbg_msg( "%s: Sending REQUEST_DO_CALLBACK message - pid = %d, type = %d, user_id = %d, content_file = %s, content_dest = %s, content_tpye = %d, content_id = %d\n", __FUNCTION__,
            get_cb_request_msg.clientPid,
            get_cb_request_msg.message_type,
            get_cb_request_msg.data.sContentCBData.user_id,
            get_cb_request_msg.data.sContentCBData.content_file,
            get_cb_request_msg.data.sContentCBData.content_dest,
            get_cb_request_msg.data.sContentCBData.content_type,
            get_cb_request_msg.data.sContentCBData.content_id);

        SafeMsgSndWrapper(outQid, &get_cb_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &get_cb_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), get_cb_request_msg.clientPid, 0, FALSE) >= exp_len)
        {
            dbg_msg( "%s: get_cb_response_msg - ret_val = %d\n", __FUNCTION__, get_cb_response_msg.data.sContentCBResp.ret_val);
            get_cb_result = get_cb_response_msg.data.sContentCBResp.ret_val;
        }
        else
            get_cb_result = VHQ_STATUS_ERROR;
    }
  else
    {
        dbg_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        get_cb_result = VHQ_STATUS_ERROR;
    }

    result = vhqlibsvc_status_to_vhq_res(get_cb_result);

    if (result == VHQ_SUCCESS)
    {
        /* Now wait for the response */
        result_retries = CONTENT_RESPONSE_MAX_DELAY / CONTENT_RESPONSE_RETRY_DELAY;
        no_response = TRUE;
        while (result_retries && no_response)
        {
            int content_status;
            int get_content_result_return;

            sleep(CONTENT_RESPONSE_RETRY_DELAY);

            get_content_result_return = GetContentResult(user_id, content_id, &content_status);

            if (get_content_result_return == VHQ_STATUS_ERROR)
            {
                dbg_msg( "%s: no result yet - retrying\n", __FUNCTION__);
            }
            else
            {
                no_response = FALSE;
                if (get_content_result_return == VHQ_STATUS_SUCCESS)
                    result = vhqlibsvc_status_to_vhq_res(content_status);
                else
                    result = vhqlibsvc_status_to_vhq_res(get_content_result_return);
                if (result == VHQ_SUCCESS)
                    result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
                dbg_msg( "%s: read result of %d - content status = %d\n", __FUNCTION__, result, content_status);
            }
            result_retries--;
        }

        if (no_response)
        {
            result = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT;
        }
    }

#endif

  /* We can remove the content update file now */
  remove(pszContentFile);

  return result;
}

#if 0
/* This should not be needed unless we need to initialize non-zero values */
bool InitContentCallbacks()
{
    memset(user_cb_array, 0, (MAX_CONTENT_CONSUMERS * sizeof(user_cb_t)));
    return TRUE;
}
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
