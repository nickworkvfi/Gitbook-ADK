---
title: tmsagt/src/VHQManager/VHQManager.c

---

# tmsagt/src/VHQManager/VHQManager.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[_heart_beat_event_id_t](struct__heart__beat__event__id__t.md)**  |
| struct | **[_lock_thread_info_t](struct__lock__thread__info__t.md)**  |
| struct | **[_set_config_info_t](struct__set__config__info__t.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [_heart_beat_event_id_t](struct__heart__beat__event__id__t.md) | **[heart_beat_event_id_t](_v_h_q_manager_8c.md#typedef-heart-beat-event-id-t)**  |
| typedef struct [_lock_thread_info_t](struct__lock__thread__info__t.md) | **[lock_thread_info_t](_v_h_q_manager_8c.md#typedef-lock-thread-info-t)**  |
| typedef struct [_set_config_info_t](struct__set__config__info__t.md) | **[set_config_info_t](_v_h_q_manager_8c.md#typedef-set-config-info-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[StopCommWatcherThread](_v_h_q_manager_8c.md#function-stopcommwatcherthread)**(void ) |
| bool | **[VC_CheckForDownloadNeedsResumption](_v_h_q_manager_8c.md#function-vc-checkfordownloadneedsresumption)**() |
| void | **[SavePayload](_v_h_q_manager_8c.md#function-savepayload)**(const char ** pszDeviceMessage) |
| void | **[InitHeartBeatEventID](_v_h_q_manager_8c.md#function-initheartbeateventid)**(void ) |
| event_set_id_t | **[GetHeartBeatEventID](_v_h_q_manager_8c.md#function-getheartbeateventid)**(const char * serverInstance) |
| bool | **[SetHeartBeatEventID](_v_h_q_manager_8c.md#function-setheartbeateventid)**(const char * serverInstance, event_set_id_t event_set_id) |
| bool | **[DeleteHeartBeatEventID](_v_h_q_manager_8c.md#function-deleteheartbeateventid)**(const char * serverInstance) |
| bool | **[IsHeartBeatEventID](_v_h_q_manager_8c.md#function-isheartbeateventid)**(event_set_id_t event_set_id) |
| void | **[CleanupTempDownloads](_v_h_q_manager_8c.md#function-cleanuptempdownloads)**(void ) |
| event_result_t | **[DeviceEventProcessor](_v_h_q_manager_8c.md#function-deviceeventprocessor)**(void * arg) |
| vhq_result_t | **[sendEvents](_v_h_q_manager_8c.md#function-sendevents)**(event_mask_t event_mask, device_event_content_t * device_event_content) |
| event_result_t | **[GetSwUpdateProcessor](_v_h_q_manager_8c.md#function-getswupdateprocessor)**(void * arg) |
| vhq_result_t | **[ScheduleGetSwUpdate](_v_h_q_manager_8c.md#function-schedulegetswupdate)**(char * receiver, char * update_type, char * sw_ref_no, char * reference) |
| event_result_t | **[doHeartbeat](_v_h_q_manager_8c.md#function-doheartbeat)**(void * arg, event_data_t * event_data) |
| event_result_t | **[Heartbeat](_v_h_q_manager_8c.md#function-heartbeat)**(void * arg) |
| void | **[CheckForHBrequestFile](_v_h_q_manager_8c.md#function-checkforhbrequestfile)**(char * file_name) |
| bool | **[ReadVHQResponseMsg](_v_h_q_manager_8c.md#function-readvhqresponsemsg)**(char * file_name, VHQResponseSendMsg * response_msg) |
| void | **[ProcessDownloadResponses](_v_h_q_manager_8c.md#function-processdownloadresponses)**(VHQResponseSendMsg * response_msg) |
| void | **[CheckForResponseFile](_v_h_q_manager_8c.md#function-checkforresponsefile)**(char * file_name) |
| vhq_result_t | **[SendFailedMessages](_v_h_q_manager_8c.md#function-sendfailedmessages)**(void ) |
| vhq_result_t | **[VHQManagerContactServer](_v_h_q_manager_8c.md#function-vhqmanagercontactserver)**(char ** pszDeviceMessage, int * iDeviceMessageLength, event_id_t event_id, int * comm_id, int * msg_id, int * srv_msg_id, char * operation_id, bool close_comm_id, bool savePayloadOnFailure, bool isKeyExchange) |
| bool | **[StopEventSchedulerThread](_v_h_q_manager_8c.md#function-stopeventschedulerthread)**(void ) |
| bool | **[UpdateConfig](_v_h_q_manager_8c.md#function-updateconfig)**(char * newConfigFile) |
| void * | **[LockServerInstanceThread](_v_h_q_manager_8c.md#function-lockserverinstancethread)**(void * arg) |
| bool | **[CheckLockThreadResults](_v_h_q_manager_8c.md#function-checklockthreadresults)**() |
| vhq_result_t | **[LockServerInstanceOnThread](_v_h_q_manager_8c.md#function-lockserverinstanceonthread)**(VHQRootRequestMsg * requestMsg) |
| void * | **[SetConfigThread](_v_h_q_manager_8c.md#function-setconfigthread)**(void * arg) |
| bool | **[CheckSetConfigResults](_v_h_q_manager_8c.md#function-checksetconfigresults)**() |
| vhq_result_t | **[SetConfigOnThread](_v_h_q_manager_8c.md#function-setconfigonthread)**(VHQRootRequestMsg * requestMsg) |
| void | **[ProcessServerRequests](_v_h_q_manager_8c.md#function-processserverrequests)**(bool blockMode) |
| event_set_id_t | **[ScheduleSingleHeartbeat](_v_h_q_manager_8c.md#function-schedulesingleheartbeat)**(uint32 secondsToHB, int flags, int retryFreq, char * serverInstance) |
| void | **[ScheduleRecurringHeartbeat](_v_h_q_manager_8c.md#function-schedulerecurringheartbeat)**(bool AllowHBNow) |
| vhq_result_t | **[ScheduleRecurringDeviceEvent](_v_h_q_manager_8c.md#function-schedulerecurringdeviceevent)**(event_mask_t event_mask, device_event_content_t * device_event_content) |
| int | **[VHQManagerLoop](_v_h_q_manager_8c.md#function-vhqmanagerloop)**(bool bSendRebootEvent) |
| bool | **[GetRestartStatus](_v_h_q_manager_8c.md#function-getrestartstatus)**() |
| pthread_t | **[GetManagerThreadId](_v_h_q_manager_8c.md#function-getmanagerthreadid)**() |
| void | **[SetRebootEventRequired](_v_h_q_manager_8c.md#function-setrebooteventrequired)**(void ) |
| void | **[ClearDeviceRegistrationMode](_v_h_q_manager_8c.md#function-cleardeviceregistrationmode)**(void ) |
| bool | **[RequestDeviceRegistrationMode](_v_h_q_manager_8c.md#function-requestdeviceregistrationmode)**(void ) |
| bool | **[GetDeviceRegistrationMode](_v_h_q_manager_8c.md#function-getdeviceregistrationmode)**() |

## Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[responseSend_Qid](_v_h_q_manager_8c.md#variable-responsesend-qid)**  |
| int | **[responseRecv_Qid](_v_h_q_manager_8c.md#variable-responserecv-qid)**  |
| int | **[cur_comm_id](_v_h_q_manager_8c.md#variable-cur-comm-id)**  |
| com_type_t | **[scheduled_comType](_v_h_q_manager_8c.md#variable-scheduled-comtype)**  |
| int | **[request_Qid](_v_h_q_manager_8c.md#variable-request-qid)**  |
| int | **[response_Qid](_v_h_q_manager_8c.md#variable-response-qid)**  |
| int | **[root_response_Qid](_v_h_q_manager_8c.md#variable-root-response-qid)**  |
| pthread_mutex_t | **[appArrayMutex](_v_h_q_manager_8c.md#variable-apparraymutex)**  |
| bool | **[restartManagerLoop](_v_h_q_manager_8c.md#variable-restartmanagerloop)**  |
| pthread_t | **[EventSchedThread](_v_h_q_manager_8c.md#variable-eventschedthread)**  |
| pthread_t | **[ManagerLoopThread](_v_h_q_manager_8c.md#variable-managerloopthread)**  |
| bool | **[SendingFailedMessages](_v_h_q_manager_8c.md#variable-sendingfailedmessages)**  |
| pthread_mutex_t | **[ContactServerMutex](_v_h_q_manager_8c.md#variable-contactservermutex)**  |
| bool | **[rebootEventRequired](_v_h_q_manager_8c.md#variable-rebooteventrequired)**  |
| bool | **[deviceRegistrationInProgress](_v_h_q_manager_8c.md#variable-deviceregistrationinprogress)**  |
| [lock_thread_info_t](_v_h_q_manager_8c.md#typedef-lock-thread-info-t)[MAX_SERVER_INSTANCE_LOCK_REQ] | **[lock_thread_info_array](_v_h_q_manager_8c.md#variable-lock-thread-info-array)**  |
| [set_config_info_t](_v_h_q_manager_8c.md#typedef-set-config-info-t)[MAX_SET_CONFIG_REQ] | **[set_config_info_array](_v_h_q_manager_8c.md#variable-set-config-info-array)**  |
| [heart_beat_event_id_t](_v_h_q_manager_8c.md#typedef-heart-beat-event-id-t)[MAX_SERVER_INSTANCES] | **[heart_beat_event_id](_v_h_q_manager_8c.md#variable-heart-beat-event-id)**  |
| void(*)(int iOp, void *pData) | **[ExtractFn](_v_h_q_manager_8c.md#variable-extractfn)**  |
| pthread_mutex_t | **[HbMutex](_v_h_q_manager_8c.md#variable-hbmutex)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TRACK_MEM_USAGE](_v_h_q_manager_8c.md#define-track-mem-usage)**  |
|  | **[CONTACT_TEST_SERVER](_v_h_q_manager_8c.md#define-contact-test-server)**  |
|  | **[USE_RESPONSE_RECV_QUEUE](_v_h_q_manager_8c.md#define-use-response-recv-queue)**  |
|  | **[MAX_SET_CONFIG_REQ](_v_h_q_manager_8c.md#define-max-set-config-req)**  |
|  | **[temp_flash_dl_dir_str](_v_h_q_manager_8c.md#define-temp-flash-dl-dir-str)**  |
|  | **[DEVICE_EVENT_RETRY_FREQ](_v_h_q_manager_8c.md#define-device-event-retry-freq)**  |
|  | **[MAX_CONSECUTIVE_ERRORS](_v_h_q_manager_8c.md#define-max-consecutive-errors)**  |

## Detailed Description


The VHQ Agent's main processing loop 

## Types Documentation

### typedef heart_beat_event_id_t

```cpp
typedef struct _heart_beat_event_id_t heart_beat_event_id_t;
```


### typedef lock_thread_info_t

```cpp
typedef struct _lock_thread_info_t lock_thread_info_t;
```


### typedef set_config_info_t

```cpp
typedef struct _set_config_info_t set_config_info_t;
```



## Functions Documentation

### function StopCommWatcherThread

```cpp
bool StopCommWatcherThread(
    void 
)
```


### function VC_CheckForDownloadNeedsResumption

```cpp
bool VC_CheckForDownloadNeedsResumption()
```


### function SavePayload

```cpp
static void SavePayload(
    const char ** pszDeviceMessage
)
```


**Parameters**: 

  * **pszDeviceMessage** = failed device message to server, which should be written into file. 
  * **comm_id** = communication ID of last failed message. 
  * **msg_id** = message ID of last failed message. 
  * **srv_msg_id** = server message ID 
  * **operation_id** = operation ID


**Return**: void 

This function saves the payload to a file, for sending with future messages. 


### function InitHeartBeatEventID

```cpp
void InitHeartBeatEventID(
    void 
)
```


### function GetHeartBeatEventID

```cpp
event_set_id_t GetHeartBeatEventID(
    const char * serverInstance
)
```


### function SetHeartBeatEventID

```cpp
bool SetHeartBeatEventID(
    const char * serverInstance,
    event_set_id_t event_set_id
)
```


### function DeleteHeartBeatEventID

```cpp
bool DeleteHeartBeatEventID(
    const char * serverInstance
)
```


### function IsHeartBeatEventID

```cpp
bool IsHeartBeatEventID(
    event_set_id_t event_set_id
)
```


### function CleanupTempDownloads

```cpp
void CleanupTempDownloads(
    void 
)
```


**Return**: void 

This function checks for temporary download files to remove. Old temp files may be present because of downloads that were cancelled or any failure before installations. 


### function DeviceEventProcessor

```cpp
event_result_t DeviceEventProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = thread argument with device event information


**Return**: event_result_t-EVENT_SUCCESS, if success 

Function is the thread routine DeviceEventProcessor.It creates device event message to send to server. 


### function sendEvents

```cpp
vhq_result_t sendEvents(
    event_mask_t event_mask,
    device_event_content_t * device_event_content
)
```


**Parameters**: 

  * **event_mask** = event mask to be send 
  * **device_event_content_t** = device event content


**Return**: event_result_t-EVENT_SUCCESS, if success 

Function schedules device and application events. 


### function GetSwUpdateProcessor

```cpp
event_result_t GetSwUpdateProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = thread argument with device event information


**Return**: event_result_t-EVENT_SUCCESS, if success 

Function is the thread routine DeviceEventProcessor.It creates device event message to send to server. 


### function ScheduleGetSwUpdate

```cpp
vhq_result_t ScheduleGetSwUpdate(
    char * receiver,
    char * update_type,
    char * sw_ref_no,
    char * reference
)
```


**Parameters**: 

  * **** 


Function schedules Get Update events 


### function doHeartbeat

```cpp
static event_result_t doHeartbeat(
    void * arg,
    event_data_t * event_data
)
```


**Parameters**: 

  * **arg** = routine arguments for thread.


**Return**: event_result_t-EVENT_SUCCESS, if success 

Function provides call-back for event processing.This function detects by itself key exchange and initiates it automatically if required. It could be useful when we lose dedicated initial HB. Next HB will take care of it. 


### function Heartbeat

```cpp
event_result_t Heartbeat(
    void * arg
)
```


**Parameters**: 

  * **arg** = routine arguments for thread.


**Return**: EVENT_SUCCESS, if success 

This is the heartbeat thread routine. 


### function CheckForHBrequestFile

```cpp
static void CheckForHBrequestFile(
    char * file_name
)
```


**Parameters**: 

  * **file_name** = filename to be checked for.


**Return**: void 

This function removes the existing heartbeat request file and schedule a single heartbeat. 


### function ReadVHQResponseMsg

```cpp
static bool ReadVHQResponseMsg(
    char * file_name,
    VHQResponseSendMsg * response_msg
)
```


### function ProcessDownloadResponses

```cpp
static void ProcessDownloadResponses(
    VHQResponseSendMsg * response_msg
)
```


**Parameters**: 

  * **VHQResponseSendMsg** saved status of download


**Return**: void 

This function processes response after a download and install action and creates the download response messages to be send to server or save the payload if a server connection issue exits. 


### function CheckForResponseFile

```cpp
static void CheckForResponseFile(
    char * file_name
)
```


**Parameters**: 

  * **file_name** = filename to be checked for.


**Return**: void 

This function reads the vhq response message file about download and install results. to be send to server. 


### function SendFailedMessages

```cpp
vhq_result_t SendFailedMessages(
    void 
)
```


**Return**: vhq_result_t, VHQ_SUCCESS if success. 

This function sends the messages which had failed when sent earlier.The details are taken from failed payload file.Failed messages are sent first, before recent messages. 


### function VHQManagerContactServer

```cpp
vhq_result_t VHQManagerContactServer(
    char ** pszDeviceMessage,
    int * iDeviceMessageLength,
    event_id_t event_id,
    int * comm_id,
    int * msg_id,
    int * srv_msg_id,
    char * operation_id,
    bool close_comm_id,
    bool savePayloadOnFailure,
    bool isKeyExchange
)
```


**Parameters**: 

  * **pszDeviceMessage** = string with xml data. 
  * **iDeviceMessageLength** = length of the string. 
  * **event_id** = event ID 
  * **comm_id** = communication ID 
  * **msg_id** = message ID 
  * **srv_msg_id** = server message ID 
  * **operation_id** = operation ID 
  * **close_comm_id** = TRUE, if close comm_id 
  * **savePayloadOnFailure** = TRUE, if payload should be saved on failure to contact server. 
  * **isKeyExchange** = TRUE, if keys exchange message


**Return**: vhq_result_t = VHQ_SUCCESS, if success. 

This function manages the server contact after xml tree gets copied to memory buffer. 


### function StopEventSchedulerThread

```cpp
static bool StopEventSchedulerThread(
    void 
)
```


**Parameters**: 

  * **void** 


**Return**: TRUE, if success; FALSE, otherwise 

This function stops or cancels the event scheduler thread. 


### function UpdateConfig

```cpp
static bool UpdateConfig(
    char * newConfigFile
)
```


**Parameters**: 

  * **newConfigFile** = new config filename


**Return**: TRUE, if success; FALSE, otherwise 

This function loads/merges the new config file and update the existing events if required. The heartbeat events are rescheduled if there is a change in heartbeat frequency. 


### function LockServerInstanceThread

```cpp
void * LockServerInstanceThread(
    void * arg
)
```


**Parameters**: 

  * **arg** = thread argument containing server instance information.


**Return**: void 

This is the thread routine for server instance lock request.It calls the lock server instance function. 


### function CheckLockThreadResults

```cpp
static bool CheckLockThreadResults()
```


**Parameters**: 

  * **void** 


**Return**: TRUE, if active thread exists. 

This function check status of any existing server instance request threads. 


### function LockServerInstanceOnThread

```cpp
static vhq_result_t LockServerInstanceOnThread(
    VHQRootRequestMsg * requestMsg
)
```


**Parameters**: 

  * **requestMsg** = incoming message


**Return**: VHQ_SUCCESS, if thread created. 

This function locks creates new thread for server instance request. 


### function SetConfigThread

```cpp
void * SetConfigThread(
    void * arg
)
```


**Parameters**: 

  * **arg** = thread arguments containing config update details.


**Return**: void 

This is the thread routine running for config update. 


### function CheckSetConfigResults

```cpp
static bool CheckSetConfigResults()
```


**Parameters**: 

  * **requestMsg** = message received from app


**Return**: TRUE, if thread is still running. 

This function checks for an in-use config update thread. 


### function SetConfigOnThread

```cpp
static vhq_result_t SetConfigOnThread(
    VHQRootRequestMsg * requestMsg
)
```


**Parameters**: 

  * **requestMsg** = message received from app


**Return**: VHQ_SUCCESS, if success 

This function is called when there is an update to agent config file. 


### function ProcessServerRequests

```cpp
void ProcessServerRequests(
    bool blockMode
)
```


**Parameters**: 

  * **blockMode** = TRUE, We will not set IPC_NOWAIT flag so this call will block us.


**Return**: void 

This function process incoming messages from root MQ 


### function ScheduleSingleHeartbeat

```cpp
event_set_id_t ScheduleSingleHeartbeat(
    uint32 secondsToHB,
    int flags,
    int retryFreq,
    char * serverInstance
)
```


**Parameters**: 

  * **secondsToHB** = seconds to HB processing. 
  * **flags** = options for HB processing. 
  * **retryFreq** = HB retry frequency in case of Failure.


**Return**: new event ID 

This function schedules single HB with time delay.This HB is has not retries and could be easy lost. TODO: Shall we support retrying of single HBs?


### function ScheduleRecurringHeartbeat

```cpp
void ScheduleRecurringHeartbeat(
    bool AllowHBNow
)
```


**Parameters**: 

  * **AllowHBNow** = forces start of HB event now.


**Return**: void 

This function cancels regular HBs and creates new once once key exchange is successful. 


### function ScheduleRecurringDeviceEvent

```cpp
vhq_result_t ScheduleRecurringDeviceEvent(
    event_mask_t event_mask,
    device_event_content_t * device_event_content
)
```


**Parameters**: 

  * **event_mask** = recurring event. 
  * **device_event_content** = device event content


**Return**: event_result_t-EVENT_SUCCESS, if success 

This function schedules recurring device events. 


### function VHQManagerLoop

```cpp
int VHQManagerLoop(
    bool bSendRebootEvent
)
```


**Return**: Should never return 

Main VHQ Agent processing loop, it starts the EventScheduler thread.


### function GetRestartStatus

```cpp
bool GetRestartStatus()
```


### function GetManagerThreadId

```cpp
pthread_t GetManagerThreadId()
```


### function SetRebootEventRequired

```cpp
void SetRebootEventRequired(
    void 
)
```


### function ClearDeviceRegistrationMode

```cpp
void ClearDeviceRegistrationMode(
    void 
)
```


**Return**: void. 

The device moves out of registration mode after a successful key exchange. A recurring heartbeat is scheduled after a successful Keys Exchange. 


### function RequestDeviceRegistrationMode

```cpp
bool RequestDeviceRegistrationMode(
    void 
)
```


**Return**: TRUE, if device not already in registration mode. 

Moves the device into registration state and schedules single heartbeat for registration. 


### function GetDeviceRegistrationMode

```cpp
bool GetDeviceRegistrationMode()
```



## Attributes Documentation

### variable responseSend_Qid

```cpp
int responseSend_Qid;
```


### variable responseRecv_Qid

```cpp
int responseRecv_Qid = -1;
```


### variable cur_comm_id

```cpp
int cur_comm_id = 1;
```


### variable scheduled_comType

```cpp
static com_type_t scheduled_comType = COM_NO_INTERFACE;
```


### variable request_Qid

```cpp
int request_Qid;
```


### variable response_Qid

```cpp
int response_Qid;
```


### variable root_response_Qid

```cpp
static int root_response_Qid;
```


### variable appArrayMutex

```cpp
pthread_mutex_t appArrayMutex;
```


### variable restartManagerLoop

```cpp
static bool restartManagerLoop = FALSE;
```


### variable EventSchedThread

```cpp
static pthread_t EventSchedThread = -1;
```


### variable ManagerLoopThread

```cpp
static pthread_t ManagerLoopThread = 0;
```


### variable SendingFailedMessages

```cpp
static bool SendingFailedMessages = TRUE;
```


### variable ContactServerMutex

```cpp
static pthread_mutex_t ContactServerMutex;
```


### variable rebootEventRequired

```cpp
static bool rebootEventRequired = FALSE;
```


### variable deviceRegistrationInProgress

```cpp
static bool deviceRegistrationInProgress = FALSE;
```


### variable lock_thread_info_array

```cpp
lock_thread_info_t[MAX_SERVER_INSTANCE_LOCK_REQ] lock_thread_info_array;
```


### variable set_config_info_array

```cpp
set_config_info_t[MAX_SET_CONFIG_REQ] set_config_info_array;
```


### variable heart_beat_event_id

```cpp
static heart_beat_event_id_t[MAX_SERVER_INSTANCES] heart_beat_event_id;
```


### variable ExtractFn

```cpp
void(*)(int iOp, void *pData) ExtractFn = NULL;
```


### variable HbMutex

```cpp
static pthread_mutex_t HbMutex = PTHREAD_MUTEX_INITIALIZER;
```



## Macros Documentation

### define TRACK_MEM_USAGE

```cpp
#define TRACK_MEM_USAGE 0
```


### define CONTACT_TEST_SERVER

```cpp
#define CONTACT_TEST_SERVER 1
```


### define USE_RESPONSE_RECV_QUEUE

```cpp
#define USE_RESPONSE_RECV_QUEUE 1
```


### define MAX_SET_CONFIG_REQ

```cpp
#define MAX_SET_CONFIG_REQ 5
```


### define temp_flash_dl_dir_str

```cpp
#define temp_flash_dl_dir_str "/home/usr1/vhq/"
```


### define DEVICE_EVENT_RETRY_FREQ

```cpp
#define DEVICE_EVENT_RETRY_FREQ 300
```


### define MAX_CONSECUTIVE_ERRORS

```cpp
#define MAX_CONSECUTIVE_ERRORS 3
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <dirent.h>
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <svc.h>
#include <fcntl.h>
#include <pthread.h>
#include <memory.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/time.h>
#include <unistd.h>

#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQManager.h"
#include "VHQMessages.h"
#include "VHQSecurity.h"
#include "VHQTestMessages.h"
#include "VHQTypes.h"
#include "VHQXmlPackager.h"
#include "EventScheduler.h"
#include "VHQUtils.h"
#include "VHQIo.h"
#include "VHQFileNames.h"
#include "VHQVersion.h"
#include "ComIntf.h"
#include <iniparser.h>
#ifdef Mx2
//#include <svcmgr/private/vhq_priv.h>
#include "vhq_priv.h"
#include "tms_priv.h"
#else
#include "VHQAppIntegLib_priv.h"
#endif

#define TRACK_MEM_USAGE         0
#if TRACK_MEM_USAGE
#define MT_FILE_NAME          "./mem_track.txt"
#include <malloc.h>
int mt_counter = 0;
FILE* mem_track_file = NULL;
struct mallinfo mem_info;
#endif

bool StopCommWatcherThread(void);
bool VC_CheckForDownloadNeedsResumption();

/* If we are testing one of the operations we don't want to contact the server */
#if TEST_MESSAGES_ENABLED
#define CONTACT_TEST_SERVER       0
#else
#define CONTACT_TEST_SERVER       1
#endif

#define USE_RESPONSE_RECV_QUEUE     1

int responseSend_Qid;
int responseRecv_Qid = -1;

/* Comm ID tracker data */
volatile int cur_comm_id = 1;
static com_type_t scheduled_comType = COM_NO_INTERFACE; /* comeType when HB is scheduled */

int request_Qid, response_Qid;  // previously was static, but I changed this so we could rm the queues when we handle a kill signal in eventsheduler.c
#ifndef Mx2
static int root_response_Qid;
#endif

extern pthread_mutex_t appArrayMutex;
static volatile bool restartManagerLoop = FALSE;
static pthread_t EventSchedThread = -1;

static pthread_t ManagerLoopThread = 0;

static bool SendingFailedMessages = TRUE;

/* Mitch 9-27-2016: With changes for ADKTMS-1131, we can have multiple threads going at the same time.
 But we only want one thread to talk to the server at a time because if the server received 2 messages
 from the same device around the same time, the server can't guarantee what order it will send the responses
 in.  So we will get INVALID_NONCE errors and other server errors when this happens. */
static pthread_mutex_t ContactServerMutex;

static bool rebootEventRequired = FALSE;
static bool deviceRegistrationInProgress = FALSE;

typedef struct _heart_beat_event_id_t
{
  bool slotFilled;
  char serverInstance[MAX_SERVER_INSTANCE_NAME_LEN];
  event_set_id_t event_set_id;
} heart_beat_event_id_t;

typedef struct _lock_thread_info_t
{
  bool in_use;
  pthread_t lock_thread_id;
  vhq_result_t lock_ret_val;
  char prev_server_instance[MAX_SERVER_INSTANCE_NAME_LEN];
  VHQRootRequestMsg requestMsg;
} lock_thread_info_t;

lock_thread_info_t lock_thread_info_array[MAX_SERVER_INSTANCE_LOCK_REQ];

#define MAX_SET_CONFIG_REQ      5

typedef struct _set_config_info_t
{
  bool in_use;
  pthread_t set_config_thread_id;
  int set_config_ret_val;
  uint32 sec_timeout;
  VHQRootRequestMsg requestMsg;
} set_config_info_t;

set_config_info_t set_config_info_array[MAX_SET_CONFIG_REQ];

static void SavePayload(const char **pszDeviceMessage);

static heart_beat_event_id_t heart_beat_event_id[MAX_SERVER_INSTANCES];

void InitHeartBeatEventID(void)
{
  uint16 counter = 0;

  for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
  {
    heart_beat_event_id[counter].event_set_id = EVENT_SET_ID_INVALID;
    heart_beat_event_id[counter].slotFilled = FALSE;
    memset(heart_beat_event_id[counter].serverInstance, 0,
    MAX_SERVER_INSTANCE_NAME_LEN);
  }

  return;
}

event_set_id_t GetHeartBeatEventID(const char *serverInstance)
{
  event_set_id_t ret_val = EVENT_SET_ID_INVALID;
  char instance[MAX_SERVER_INSTANCE_NAME_LEN] = { 0 };
  uint16 counter = 0;

  if (serverInstance)
  {
    strncpy(instance, serverInstance, MAX_SERVER_INSTANCE_NAME_LEN);
  }
  else
  {
    strncpy(instance, GetCurrentInstance(), MAX_SERVER_INSTANCE_NAME_LEN);
  }

  for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
  {
    if (heart_beat_event_id[counter].slotFilled
        && strcmp(heart_beat_event_id[counter].serverInstance, instance) == 0)
    {
      ret_val = heart_beat_event_id[counter].event_set_id;
      break;
    }
  }

  return ret_val;
}

bool SetHeartBeatEventID(const char *serverInstance,
                         event_set_id_t event_set_id)
{
  bool ret_val = FALSE;
  char instance[MAX_SERVER_INSTANCE_NAME_LEN] = { 0 };
  uint16 counter = 0;

  if (serverInstance)
  {
    strncpy(instance, serverInstance, MAX_SERVER_INSTANCE_NAME_LEN);
  }
  else
  {
    strncpy(instance, GetCurrentInstance(), MAX_SERVER_INSTANCE_NAME_LEN);
  }

  for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
  {
    if (heart_beat_event_id[counter].slotFilled
        && strcmp(heart_beat_event_id[counter].serverInstance, instance) == 0)
    {
      heart_beat_event_id[counter].event_set_id = event_set_id;
      ret_val = TRUE;
      break;
    }
  }

  if (counter == MAX_SERVER_INSTANCES)
  {
    for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
    {
      if (heart_beat_event_id[counter].slotFilled == FALSE)
      {
        heart_beat_event_id[counter].slotFilled = TRUE;
        strncpy(heart_beat_event_id[counter].serverInstance, instance,
        MAX_SERVER_INSTANCE_NAME_LEN);
        heart_beat_event_id[counter].event_set_id = event_set_id;
        ret_val = TRUE;
        break;
      }
    }
  }
  log_dbg("%s: Instance %s hb %d, ret_val: %d \n", __FUNCTION__,
          heart_beat_event_id[counter].serverInstance,
          heart_beat_event_id[counter].event_set_id, ret_val);
  return ret_val;
}

bool DeleteHeartBeatEventID(const char *serverInstance)
{
  bool ret_val = FALSE;
  char instance[MAX_SERVER_INSTANCE_NAME_LEN] = { 0 };
  uint16 counter = 0;

  if (serverInstance)
  {
    strncpy(instance, serverInstance, MAX_SERVER_INSTANCE_NAME_LEN);
  }
  else
  {
    strncpy(instance, GetCurrentInstance(), MAX_SERVER_INSTANCE_NAME_LEN);
  }

  for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
  {
    if (heart_beat_event_id[counter].slotFilled
        && strcmp(heart_beat_event_id[counter].serverInstance, instance) == 0)
    {
      heart_beat_event_id[counter].event_set_id = EVENT_SET_ID_INVALID;
      heart_beat_event_id[counter].slotFilled = FALSE;
      memset(heart_beat_event_id[counter].serverInstance, 0,
      MAX_SERVER_INSTANCE_NAME_LEN);
      ret_val = TRUE;
      break;
    }
  }

  return ret_val;
}

bool IsHeartBeatEventID(event_set_id_t event_set_id)
{
  bool ret_val = FALSE;
  uint16 counter = 0;

  if (event_set_id != EVENT_SET_ID_INVALID)
  {
    for (counter = 0; counter < MAX_SERVER_INSTANCES; counter++)
    {
      if (heart_beat_event_id[counter].slotFilled
          && (heart_beat_event_id[counter].event_set_id == event_set_id))
      {
        ret_val = TRUE;
        break;
      }
    }
  }

  return ret_val;
}


void CleanupTempDownloads(void)
{
  DIR *temp_flash_dl_dir;
  struct dirent *dl_file;

#ifdef Mx2
#define temp_flash_dl_dir_str VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION
#else
#define temp_flash_dl_dir_str "/home/usr1/vhq/"
#endif /* Mx2 */

  /* This function is used to remove old downloads that were cancelled or something else failed before they were installed */

  /* Search for any failed payload files */
  // DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Opening %s to search for leftover downloads\n", __FUNCTION__, temp_flash_dl_dir_str);
  if ((temp_flash_dl_dir = opendir(temp_flash_dl_dir_str)) == NULL)
  {
    log_err("%s: Can't open %s to search for leftover downloads\n",
            __FUNCTION__, temp_flash_dl_dir_str);
    return;
  }

  while ((dl_file = readdir(temp_flash_dl_dir)) != NULL)
  {
    /* See if this is a temp download file */
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read file %s from %s\n", __FUNCTION__, dl_file->d_name, temp_flash_dl_dir_str);
    if (is_temp_dl_file(dl_file->d_name))
    {

      bool keep_file = FileRequiredByEvent(dl_file->d_name);

      if (keep_file)
      {
        log_notice("%s: Leaving %s since it will still be used\n", __FUNCTION__,
                   dl_file->d_name);
      }
      else
      {
        char full_filename[1024];
        bool res = FALSE;

        sprintf(full_filename, "%s%s", temp_flash_dl_dir_str, dl_file->d_name);
        log_dbg("%s: Deleting %s since it is no longer needed\n", __FUNCTION__,
                full_filename);
        res = removeFile(full_filename);
        if (!res)
          log_err("%s: Error Removing file %s \n", __FUNCTION__, full_filename);
      }

    }
  }
  closedir(temp_flash_dl_dir);
}

/* For failed events, retry sending them every 5 minutes */
#define DEVICE_EVENT_RETRY_FREQ       300

event_result_t DeviceEventProcessor(void *arg)
{
  int *comm_id, *message_id;
  int DeviceMessageLen;
  uint32 server_message_id;
  char *DeviceMessage = NULL;
  event_result_t event_result;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_data_t *event_data = (event_data_t*) arg_p->pvCbData;
  event_mask_t event_mask = ((device_event_parms*) event_data)
      ->device_event_content.event_mask;
  bool keys_exchanged;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
  if (!keys_exchanged)
  {
    dbg_warn(
        "%s WARNING: Can not send events because keys have not been exchanged\n",
        __FUNCTION__);

    event_result = EVENT_FAILURE;
    dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
            getpid());

    return event_result;

  }

  dbg_msg("%s: Sending Events (0x%08x)!!!\n", __FUNCTION__, event_mask);

  server_message_id = MESSAGE_ID_INVALID;

  comm_id = &(((device_event_parms*) event_data)->comm_id);
  message_id = &(((device_event_parms*) event_data)->message_id);
  *comm_id = cur_comm_id;

  /* Create the heartbeat XML package */
  DeviceMessageLen = VHQXmlPackageCreate(OPERATION_EVENT, &DeviceMessage,
                                         event_data);
  if (DeviceMessageLen == 0)
  {
    log_err("%s: Failure Creating Event - returning error\n", __FUNCTION__);
    writeHbResult("Could not create Event message\n");
    if (DeviceMessage)
    {
      free(DeviceMessage);
      DeviceMessage = NULL;
    }

    event_result = EVENT_FAILURE;
    dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
            getpid());

    return event_result;
  }

  dbg_msg("%s: XML Event Package Created - Size = %d\n", __FUNCTION__,
          DeviceMessageLen);PRINT_XML_DATA("sendEvents", DeviceMessage);

  vhq_result = VHQManagerContactServer(&DeviceMessage, &DeviceMessageLen,
                                       arg_p->event_id, comm_id, message_id,
                                       (int*) &server_message_id, 0, TRUE, FALSE,
                                       FALSE);

  if (event_mask == EVENT_APPLICATION_GENERATED)
    EventNotification(TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT, NULL, 0, vhq_result,
    EVENT_SET_ID_INVALID,
                      EVENT_ID_INVALID, TRUE);

  /* ADKTMS-2897: We can remove the parameter update file now if it exists */
  if (strlen(
      ((device_event_parms*) event_data)->device_event_content.device_event_data
          .param_update_info.param_update_list_filename))
  {
    remove(
        ((device_event_parms*) event_data)->device_event_content
            .device_event_data.param_update_info.param_update_list_filename);
  }

  if (cur_comm_id != *comm_id)
  {
    cur_comm_id = *comm_id;
  }

  /* We can increment the comm ID counter now */
  cur_comm_id++;
  if (COMM_ID_INVALID(cur_comm_id))
    cur_comm_id = 1;

  event_result = ConvertVHQResultToEventResult(vhq_result);

  dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
          getpid());

  return event_result;
}


vhq_result_t sendEvents(event_mask_t event_mask,
                        device_event_content_t *device_event_content)
{
  operation_set_event_t device_events[1];
  device_event_parms _device_event_parms;
  event_set_id_t event_id = EVENT_SET_ID_INVALID;
  vhq_result_t ret_val = VHQ_ERROR_EVENT_GENERATION_FAILURE;

  if (event_mask)
  {
    dbg_msg("%s: Setting up device_event\n", __FUNCTION__);

    /* We can't leave any pointers to the stack so copy the structures to
     the storage in del_file parameters */
    memset(&_device_event_parms, 0, sizeof(device_event_parms));

    if (device_event_content)
    {
      if (event_mask != device_event_content->event_mask)
      {
        device_event_content->event_mask = event_mask;
        dbg_msg("%s: Inconsistency in event mask, update\n", __FUNCTION__);
      }

      memcpy(&_device_event_parms.device_event_content, device_event_content,
             sizeof(device_event_content_t));
    }
    else
    {
      _device_event_parms.device_event_content.event_mask = event_mask;
    }

    _device_event_parms.device_event_content.event_time = linux_time(NULL);

    /* Setup the rest of parameters */
    _device_event_parms.srv_msg_type = SRV_MSG_TYPE_UNKNOWN;
    _device_event_parms.srv_op_type = SRV_OP_TYPE_UNKNOWN;

    /* Schedule the event */
    dbg_msg(
        "%s: Scheduling device_event Event - pCbData = &data_parms = 0x%08x\n",
        __FUNCTION__, &_device_event_parms);

    device_events[0].opCbType = cbDeviceEventProcessor;
    device_events[0].opData = (void*) &_device_event_parms;
    device_events[0].opDataSize = sizeof(_device_event_parms);
    ret_val = ScheduleEventSet(FALSE, 0, RECUR_UNIT_SECOND, 0, 0,
    DEVICE_EVENT_RETRY_FREQ,
                               0, device_events, 1,
                               EVENT_SET_ID_INVALID,
                               EVENT_TIMER_RTC, GetCurrentInstance(),
                               cbStandard, cbStandard,
                               FALSE);

    if (event_id != EVENT_SET_ID_INVALID)
    {
      ret_val = VHQ_SUCCESS;
    }
    return ret_val;
  }
  else
    return VHQ_SUCCESS;
}


event_result_t GetSwUpdateProcessor(void *arg)
{
  event_result_t event_result;
  vhq_result_t vhq_result;
  int *comm_id, *message_id;
  int DeviceMessageLen;
  uint32 server_message_id;
  char *DeviceMessage = NULL;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_data_t *event_data = (event_data_t*) arg_p->pvCbData;

  get_sw_update_params sw_update_params = *(get_sw_update_params*) arg_p
      ->pvCbData;
  get_sw_update_params *_sw_update_params = &sw_update_params;
  get_sw_update_content_t *sw_update_content = &_sw_update_params
      ->get_sw_update_content;

  if ((sw_update_content->update_type != NULL)
      && (sw_update_content->sw_ref_no != NULL)
      && (sw_update_content->reference != NULL))
  {
    dbg_msg("%s: Sending Get SW Update Event!!!\n", __FUNCTION__);

    server_message_id = MESSAGE_ID_INVALID;

    comm_id = &(((get_sw_update_params*) event_data)->comm_id);
    message_id = &(((get_sw_update_params*) event_data)->message_id);
    *comm_id = cur_comm_id;

    /* Create the heartbeat XML package */
    DeviceMessageLen = VHQXmlPackageCreate(OPERATION_GET_SW_UPDATE,
                                           &DeviceMessage, event_data);
    if (DeviceMessageLen == 0)
    {
      log_err("%s: Failure Creating Event - returning error\n", __FUNCTION__);
      writeHbResult("Could not create Event message\n");
      if (DeviceMessage)
      {
        free(DeviceMessage);
        DeviceMessage = NULL;
      }

      event_result = EVENT_FAILURE;
      dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
              getpid());

      return event_result;
    }

    dbg_msg("%s: XML Event Package Created - Size = %d\n", __FUNCTION__,
            DeviceMessageLen);PRINT_XML_DATA("GetSwUpdate", DeviceMessage);

    vhq_result = VHQManagerContactServer(&DeviceMessage, &DeviceMessageLen,
                                         arg_p->event_id, comm_id, message_id,
                                         (int*) &server_message_id, 0, TRUE,
                                         TRUE,
                                         FALSE);

    EventNotification(TMS_EVENT_NOTIFY_GET_SW_UPDATE, NULL, 0, vhq_result,
    EVENT_SET_ID_INVALID,
                      EVENT_ID_INVALID, TRUE);

    if (cur_comm_id != *comm_id)
    {
      cur_comm_id = *comm_id;
    }

    /* We can increment the comm ID counter now */
    cur_comm_id++;
    if (COMM_ID_INVALID(cur_comm_id))
      cur_comm_id = 1;
  }

  event_result = ConvertVHQResultToEventResult(vhq_result);

  dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
          getpid());

  return event_result;
}

vhq_result_t ScheduleGetSwUpdate(char *receiver, char *update_type,
                                 char *sw_ref_no, char *reference)
{
  operation_set_event_t get_sw_update_events[1];
  get_sw_update_params _get_sw_update_params;
  vhq_result_t ret_val = VHQ_ERROR_EVENT_GENERATION_FAILURE;
  event_set_id_t event_id = EVENT_SET_ID_INVALID;

  if (deviceRegistrationInProgress)
  {
    return VHQ_API_AGENT_CONTACTSRV_ERROR;
  }

  if ((update_type == NULL) || (sw_ref_no == NULL) || (reference == NULL))
  {
    return VHQ_API_EINVAL;
  }

  if (deviceRegistrationInProgress)
  {
    return VHQ_API_AGENT_CONTACTSRV_ERROR;
  }

  dbg_msg("%s: Setting up Get Updates\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in del_file parameters */
  memset(&_get_sw_update_params, 0, sizeof(get_sw_update_params));

  strncpy(_get_sw_update_params.get_sw_update_content.update_type, update_type,
          sizeof(_get_sw_update_params.get_sw_update_content.update_type) - 1);
  strncpy(_get_sw_update_params.get_sw_update_content.sw_ref_no, sw_ref_no,
          sizeof(_get_sw_update_params.get_sw_update_content.sw_ref_no) - 1);
  strncpy(_get_sw_update_params.get_sw_update_content.reference, reference,
          sizeof(_get_sw_update_params.get_sw_update_content.reference) - 1);

  _get_sw_update_params.srv_msg_type = SRV_MSG_TYPE_UNKNOWN;
  _get_sw_update_params.srv_op_type = SRV_OP_TYPE_UNKNOWN;

  /* Schedule the event */
  dbg_msg("%s: Scheduling Get Update Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_get_sw_update_params);

  get_sw_update_events[0].opCbType = cbGetSwUpdateProcessor;
  get_sw_update_events[0].opData = (void*) &_get_sw_update_params;
  get_sw_update_events[0].opDataSize = sizeof(_get_sw_update_params);
  event_id = ScheduleEventSet(FALSE, 0, RECUR_UNIT_SECOND, 0, 0, 0, 0,
                              get_sw_update_events, 1, EVENT_SET_ID_INVALID,
                              EVENT_TIMER_RTC, GetCurrentInstance(), cbStandard,
                              cbStandard, FALSE);

  if (event_id != EVENT_SET_ID_INVALID)
  {
    ret_val = VHQ_SUCCESS;
  }
  return ret_val;
}


static event_result_t doHeartbeat(void *arg, event_data_t *event_data)
{
  bool keys_exchanged = FALSE;
  time_t rawtime;
  struct tm timeinfo;
  char *DeviceMessage = NULL;
  int DeviceMessageLen;
  int *comm_id, *message_id;
  uint32 server_message_id;
  vhq_result_t vhq_result;
  char szResultMsg[256];
  char curtime[64];
  event_thread_arg *arg_p = arg;
  event_result_t event_result = EVENT_SUCCESS;
  char customer_id[64] = { 0 };

  log_notice("%s: Sending Heartbeat!!!\n", __FUNCTION__);

  linux_time(&rawtime);
  if (linux_localtime(&rawtime, &timeinfo))
    strftime(curtime, sizeof(curtime), "Heartbeat begins at %c\n", &timeinfo);
  else
    sprintf(curtime, "Heartbeat begins at UNKNOWN time\n");
  writeHbResult(curtime);

  writeHbResult("Contacting %s Server\n", GetCurrentInstance());

  server_message_id = MESSAGE_ID_INVALID;

  VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id, sizeof(customer_id));
  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
  log_notice("%s: Read PARAM_KEYS_EXCHANGED - keys_exchanged = %d\n",
             __FUNCTION__, keys_exchanged);

  if (!AgentKeysExist())
  {
    char SrvPubKeyFileName[512];

    memset(SrvPubKeyFileName, 0, sizeof(SrvPubKeyFileName));
    GetFileNameForInstance(SrvPubKeyFileName, (char*) SRV_PUB_KEY_CERTFILE,
                           GetCurrentInstance());

    dbg_msg("%s: calling VerifyServerCert(%s)\n", __FUNCTION__,
            SrvPubKeyFileName);

    /* If we need to generate keys, we need to re-exchange them */
    log_notice(
        "%s: AgentKeysExist() returned FALSE - setting PARAM_KEYS_EXCHANGED to FALSE\n",
        __FUNCTION__);
    keys_exchanged = FALSE;
    VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, TRUE);

    /* We don't have keys yet so Generate the keys */
    dbg_msg("%s: Creating new keys!\n", __FUNCTION__);
    vhq_result = GenerateAgentKeys(SrvPubKeyFileName);

    if (vhq_result)
    {
      log_err("%s: Failure Generating keys - returning error\n", __FUNCTION__);
      linux_time(&rawtime);
      if (linux_localtime(&rawtime, &timeinfo))
      {
        strftime(curtime, sizeof(curtime), "Keygen failure at %c", &timeinfo);
        writeHbResult(curtime);
      }
      else
      {
        writeHbResult("Keygen failure");
      }
      EventNotification(TMS_EVENT_NOTIFY_HEARTBEAT_RESULT, NULL, 0,
                        VHQ_KEYGEN_FAILURE, EVENT_SET_ID_INVALID,
                        EVENT_ID_INVALID,
                        TRUE);

      event_result = ConvertVHQResultToEventResult(vhq_result);

      return event_result;
    }
  }

  comm_id = &(((heartbeat_parms*) event_data)->comm_id);
  message_id = &(((heartbeat_parms*) event_data)->message_id);

  *comm_id = cur_comm_id;

  if (!keys_exchanged)
  {
    /* Now, generate Key Exchange Message */
    DeviceMessageLen = VHQXmlPackageCreate(OPERATION_KEY_EXCHANGE,
                                           &DeviceMessage, event_data);
    if (DeviceMessageLen == 0)
    {
      log_err("%s: Failure Creating KeyExchange - returning error\n",
              __FUNCTION__);
      writeHbResult("Could not create KeyExchange\n");
      EventNotification(TMS_EVENT_NOTIFY_HEARTBEAT_RESULT, NULL, 0,
                        VHQ_KEYGEN_FAILURE, EVENT_SET_ID_INVALID,
                        EVENT_ID_INVALID,
                        TRUE);
      if (DeviceMessage)
      {
        free(DeviceMessage);
        DeviceMessage = NULL;
      }
      writeHbResult("Server URL: %s\n", GetServerURL());
      writeHbResult("Customer ID: %s\n", customer_id);

      return EVENT_FAILURE;
    }
  }
  else
  {
    /* Create the heartbeat XML package */
    DeviceMessageLen = VHQXmlPackageCreate(OPERATION_HEARTBEAT, &DeviceMessage,
                                           event_data);
    if (DeviceMessageLen == 0)
    {
      log_err("%s: Failure Creating Heartbeat - returning error\n",
              __FUNCTION__);
      writeHbResult("Could not create Heartbeat\n");
      EventNotification(TMS_EVENT_NOTIFY_HEARTBEAT_RESULT, NULL, 0,
                        VHQ_HB_FAILURE, EVENT_SET_ID_INVALID, EVENT_ID_INVALID,
                        TRUE);
      if (DeviceMessage)
      {
        free(DeviceMessage);
        DeviceMessage = NULL;
      }
      writeHbResult("Server URL: %s\n", GetServerURL());
      writeHbResult("Customer ID: %s\n", customer_id);

      return EVENT_FAILURE;
    }
  }

  dbg_msg("%s: Poll XML Package Created - Size = %d\n", __FUNCTION__,
          DeviceMessageLen);PRINT_XML_DATA("doHeartBeat", DeviceMessage);

  vhq_result = VHQManagerContactServer(&DeviceMessage, &DeviceMessageLen,
                                       arg_p->event_id, comm_id, message_id,
                                       (int*) &server_message_id, 0, TRUE,
                                       FALSE,
                                       keys_exchanged == FALSE ? TRUE : FALSE);
  dbg_notice("%s: VHQManagerContactServer() returned %d\n", __FUNCTION__,
             vhq_result);
  ConvertVHQResultToStr(vhq_result, szResultMsg, sizeof(szResultMsg));

  EventNotification(TMS_EVENT_NOTIFY_HEARTBEAT_RESULT, NULL, 0, vhq_result,
  EVENT_SET_ID_INVALID,
                    EVENT_ID_INVALID, TRUE);
  switch (vhq_result)
  {
    case VHQ_SUCCESS:
    case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_STARTED:
    case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED:
    case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED:
    case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED:
    case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED:
      writeHbResult("Server returned %s (%d)\n", szResultMsg, vhq_result);
      break;
    default:
      writeHbResult("Unable to Contact Server (%d):\n %s\n", vhq_result,
                    szResultMsg);
      break;
  }

  writeHbResult("Server URL: %s\n", GetServerURL());
  writeHbResult("Customer ID: %s\n", customer_id);

  event_result = ConvertVHQResultToEventResult(vhq_result);

  /* Check if key exchange parameter is updated */
  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
  if ((!keys_exchanged) && (vhq_result == VHQ_SUCCESS))
  {
    /* If a key exchange was successful we don't need to do it again */
    log_dbg(
        "%s: Keys exchanged successfully - setting PARAM_KEYS_EXCHANGED to TRUE\n",
        __FUNCTION__);
    VHQSetParameterBool(PARAM_KEYS_EXCHANGED, TRUE, TRUE);
    keys_exchanged = TRUE;
    writeHbResult("Keys exchanged successfully\n");

    /* Clear the device registration flag */
    ClearDeviceRegistrationMode();
  }

  if ((vhq_result == VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_MISMATCH)
      || (vhq_result == VHQ_SERVER_MESSAGE_XML_SIGNATURE_MISMATCH))
  {
    log_dbg(
        "%s: Setting keysexchange to false\n",
        __FUNCTION__);
    VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, TRUE);
  }

#if TEST_SET_SERVER_CERT_OPERATION
    {
        VHQXmlProcessServerMessage(xml_set_serv_cert_test_msg, strlen(xml_set_serv_cert_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "317", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_set_serv_cert_server_response_test_msg, strlen(xml_set_serv_cert_server_response_test_msg),
            comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "317", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_TERMINAL_ACTION_OPERATION
    {
        VHQXmlProcessServerMessage(xml_term_act_test_msg, strlen(xml_term_act_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "671", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_term_act_server_response_test_msg, strlen(xml_term_act_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "671", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_UPLOAD_OPERATION
    {
        VHQXmlProcessServerMessage(xml_upload_file_test_msg, strlen(xml_upload_file_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, NULL, FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_ul_server_response_test_msg, strlen(xml_ul_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, NULL, TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_GET_DATA_OPERATION
    {
        VHQXmlProcessServerMessage(xml_get_data_test_msg, strlen(xml_get_data_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_get_data_server_response_test_msg, strlen(xml_get_data_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_GET_DIAG_DATA_OPERATION
    {
        VHQXmlProcessServerMessage(xml_get_diag_data_test_msg, strlen(xml_get_diag_data_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_get_diag_data_server_response_test_msg, strlen(xml_get_diag_data_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_SET_DATA_OPERATION
    {
        VHQXmlProcessServerMessage(xml_set_data_test_msg, strlen(xml_set_data_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_set_data_server_response_test_msg, strlen(xml_set_data_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "127", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_DOWNLOAD_OPERATION
    {
        VHQXmlProcessServerMessage(xml_download_file_test_msg, strlen(xml_download_file_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "1224", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_dl_server_response_test_msg, strlen(xml_dl_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "1224", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_REAL_SERVER_MGMT_PLAN
    {
        VHQXmlProcessServerMessage(xml_srv_mgmt_plan_test_msg, strlen(xml_srv_mgmt_plan_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "3", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_srv_mgmt_plan_server_response_test_msg, strlen(xml_srv_mgmt_plan_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "3", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_SET_CLOCK_OPERATION
    {
        VHQXmlProcessServerMessage(xml_set_clock_test_msg, strlen(xml_set_clock_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "761", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_set_clock_server_response_test_msg, strlen(xml_set_clock_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "761", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

#if TEST_EMPTY_PARM_OPERATION
    {
        VHQXmlProcessServerMessage(xml_empty_parm_test_msg, strlen(xml_empty_parm_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "806", FALSE, FALSE);
        free(DeviceMessage);
        VHQXmlProcessServerMessage(xml_empty_parm_server_response_test_msg, strlen(xml_empty_parm_server_response_test_msg), comm_id, &server_message_id, &DeviceMessage, &DeviceMessageLen, "806", TRUE, FALSE);
        free(DeviceMessage);
    }
    #endif

  /* We can clean up any unused download files now */
  CleanupTempDownloads();

  if (cur_comm_id != *comm_id)
  {
    cur_comm_id = *comm_id;
  }

  /* We can increment the comm ID counter now */
  cur_comm_id++;
  if (COMM_ID_INVALID(cur_comm_id))
    cur_comm_id = 1;

  return event_result;
}

event_result_t Heartbeat(void *arg)
{
  /* Default flags set to 0 for non-VC mode */
  event_result_t hb_event_result;
  event_thread_arg *arg_p = arg;
  event_data_t *event_data = (event_data_t*) arg_p->pvCbData;

  /* Clear and lock heartbeat output file for status processing */
  openHbResult();
  /* Call heartbeat processing */
  hb_event_result = doHeartbeat(arg, event_data);
  /* Release heartbeat output file */
  closeHbResult();
  dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, hb_event_result,
          getpid());

  return hb_event_result;
}

static void CheckForHBrequestFile(char *file_name)
{
  if (FileExists(file_name))
  {
    bool hb_enabled = FALSE;

    dbg_notice(
        "%s: HBrequest file exists - deleting and scheduling Heartbeat for now\n",
        __FUNCTION__);

    if (!removeFile(file_name))
      dbg_err(
          "%s: ERROR: HBrequest file still exists. Manual HB could be scheduled continuously!!!\n",
          __FUNCTION__);

    /* If we got here it means heartbeats are now enabled. Let's set the parameter if it is not already set.
     If we got here via a GUI request, it may not be set */
    VHQGetParameterBool(PARAM_HEARTBEATS_ENABLED, &hb_enabled);
    if (!hb_enabled)
    {
      dbg_notice(
          "%s: Heartbeats are not enabled in INI file yet - Enabling them\n",
          __FUNCTION__);
      VHQSetParameterBool(PARAM_HEARTBEATS_ENABLED, TRUE, TRUE);
    }

    ScheduleSingleHeartbeat(0, 0, 0, NULL);
  }
}

static bool ReadVHQResponseMsg(char *file_name,
                               VHQResponseSendMsg *response_msg)
{
  bool ret_val = FALSE;
  int respFile = -1;
  int bytes_read = 0;
  respFile = open(file_name, O_RDWR);

  if (respFile != -1)
  {
    bytes_read = read(respFile, (char*) response_msg,
                      sizeof(VHQResponseSendMsg));

    if (bytes_read == sizeof(VHQResponseSendMsg_VERSION_1))
    {
      VHQResponseSendMsg_VERSION_1 v1_response_msg;

      log_dbg(
          "%s: read V1 response message size %d - converting to current response message size %d\n",
          __FUNCTION__, bytes_read, sizeof(VHQResponseSendMsg));
      memcpy((char*) &v1_response_msg, (char*) response_msg,
             sizeof(VHQResponseSendMsg_VERSION_1));

      /* Copy the old message into a new message */
      memset(response_msg, 0, sizeof(VHQResponseSendMsg));
      response_msg->clientPid = v1_response_msg.clientPid;
      response_msg->operation_type = v1_response_msg.operation_type;
      response_msg->comm_id = v1_response_msg.comm_id;
      response_msg->message_id = v1_response_msg.message_id;
      strcpy(response_msg->operation_id, v1_response_msg.operation_id);
      response_msg->srv_msg_type = v1_response_msg.srv_msg_type;
      response_msg->srv_op_type = SRV_OP_TYPE_UNKNOWN;
      response_msg->result = v1_response_msg.result;
      response_msg->close_comm_id = v1_response_msg.close_comm_id;
      response_msg->responseExpected = v1_response_msg.responseExpected;
      strcpy(response_msg->instance, "primary");

      ret_val = TRUE;
    }
    else if (bytes_read == sizeof(VHQResponseSendMsg_VERSION_2))
    {
      VHQResponseSendMsg_VERSION_2 v2_response_msg;

      log_dbg(
          "%s: read V2 response message size %d - converting to current response message size %d\n",
          __FUNCTION__, bytes_read, sizeof(VHQResponseSendMsg));
      memcpy((char*) &v2_response_msg, (char*) response_msg,
             sizeof(VHQResponseSendMsg_VERSION_2));

      /* Copy the old message into a new message */
      memset(response_msg, 0, sizeof(VHQResponseSendMsg));
      response_msg->clientPid = v2_response_msg.clientPid;
      response_msg->operation_type = v2_response_msg.operation_type;
      response_msg->comm_id = v2_response_msg.comm_id;
      response_msg->message_id = v2_response_msg.message_id;
      strcpy(response_msg->operation_id, v2_response_msg.operation_id);
      response_msg->srv_msg_type = v2_response_msg.srv_msg_type;
      response_msg->srv_op_type = SRV_OP_TYPE_UNKNOWN;
      response_msg->result = v2_response_msg.result;
      response_msg->close_comm_id = v2_response_msg.close_comm_id;
      response_msg->responseExpected = v2_response_msg.responseExpected;
      strcpy(response_msg->instance, "primary");

      ret_val = TRUE;
    }
    else if (bytes_read == sizeof(VHQResponseSendMsg_VERSION_3))
    {
      /* Version 3 */
      log_dbg(
          "%s: read V3 response message size %d, response message size %d\n",
          __FUNCTION__, bytes_read, sizeof(VHQResponseSendMsg));
      strcpy(response_msg->instance, "primary");

      ret_val = TRUE;
    }
    else if (bytes_read == sizeof(VHQResponseSendMsg_VERSION_4))
    {
      /* Version 4 */
      log_dbg(
          "%s: read V4 response message size %d, response message size %d\n",
          __FUNCTION__, bytes_read, sizeof(VHQResponseSendMsg));
      strcpy(response_msg->instance, "primary");

      ret_val = TRUE;
    }
    else if (bytes_read == sizeof(VHQResponseSendMsg))
    {
      ret_val = TRUE;
    }
    else
    {
      log_dbg("%s: Incorrect response msg size %d\n", __FUNCTION__, bytes_read);
    }
    close(respFile);
  }
  else
    log_err("%s ERROR: Could not open response file\n", __FUNCTION__);

  return ret_val;
}


static void ProcessDownloadResponses(VHQResponseSendMsg *response_msg)
{
  vhq_result_t lock_res = VHQ_SUCCESS;

  /* Lock server instance before event processing */
  while (1)
  {
    lock_res = LockServerInstance(response_msg->instance, 10000, NULL);
    if (lock_res == VHQ_SUCCESS
        || lock_res == VHQ_API_SERVER_INSTANCE_ALREADY_LOCKED
        || lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
      break;
    log_err(
        "%s WARNING: Locking server instance '%s' FAILED with error %d - retrying in 5 seconds\n",
        __FUNCTION__, response_msg->instance, (int )lock_res);
    sleep(5);
  }

  /* Skip event launch if we have no ability to lock instance here */
  if (lock_res == VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR)
  {
    log_dbg(
        "%s: Server instance can't be switched from '%s' to '%s'. Save and exit without launch\n",
        __FUNCTION__, GetCurrentInstance(), response_msg->instance);
  }
  else
  {
    bool keys_exchanged = FALSE;
    vhq_result_t vhq_result = VHQ_SUCCESS;
    bool savePayload = FALSE;
    bool contact_server_notification_required;
    char *xmlDownloadResponse;
    int downloadResponseLen;

    /* If the keys haven't been exchanged yet, there is no reason to process and send responses */
    VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);

    if (!keys_exchanged)
    {
      log_err("%s: Installation status not sent due to keyexchange\n",
              __FUNCTION__);
    }
    else
    {
      if (GetApprovalFlag(response_msg->operation_set_id,
                          response_msg->operation_id,
                          CONTACT_SERVER_PRE_APPROVED,
                          NULL))
      {
        contact_server_notification_required = FALSE;
      }
      else
      {
        contact_server_notification_required = TRUE;
      }

      if (CommNetConnect(cbLaunchDownloader, EVENT_SET_ID_INVALID,
      EVENT_ID_INVALID,
                         contact_server_notification_required))
      {
        downloadResponseLen = VHQXmlCreateDownloadResponse(
            &xmlDownloadResponse, response_msg->comm_id,
            response_msg->message_id, response_msg->operation_id,
            response_msg->srv_msg_type, response_msg->srv_op_type,
            response_msg->result, response_msg->operation_set_id,
            response_msg->recur_id, response_msg->additional_info, 0, 0);

        PRINT_XML_DATA("ProcessDownloadResponses", xmlDownloadResponse);

        vhq_result = VHQManagerContactServer(&xmlDownloadResponse,
                                             &downloadResponseLen,
                                             EVENT_ID_UNKNOWN,
                                             &response_msg->comm_id,
                                             &response_msg->message_id,
                                             &response_msg->message_id,
                                             response_msg->operation_id,
                                             response_msg->close_comm_id, TRUE,
                                             FALSE);

        if (((vhq_result >= VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_BASE)
            && (vhq_result <= VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_MAX))
            || ((vhq_result >= VHQ_SERVER_POST_PAYLOAD_CURL_BASE)
                && (vhq_result <= VHQ_SERVER_POST_PAYLOAD_CURL_MAX)
                && (vhq_result != VHQ_SERVER_POST_PAYLOAD_CURL_CERT_EXPIRED))
            || (vhq_result == VHQ_SERVER_POST_PAYLOAD_NETWORK_ERROR))

        {
          savePayload = TRUE;
        }

        CommNetDisconnect(FALSE);
      }
      else
      {
        savePayload = TRUE;
      }
    }

//    if (savePayload)
//    {
//      int srv_msg_id = 0;
//
//      /* Save the payload so it can be sent later */
//      xmlDownloadResponse = NULL;
//      downloadResponseLen = VHQXmlCreateDownloadResponse(
//          &xmlDownloadResponse, response_msg->comm_id, response_msg->message_id,
//          response_msg->operation_id, response_msg->srv_msg_type,
//          response_msg->srv_op_type, response_msg->result,
//          response_msg->operation_set_id, response_msg->recur_id,
//          response_msg->additional_info, 0, 0);
//
//      SavePayload((const char**) &xmlDownloadResponse));
//
//      if (xmlDownloadResponse)
//        free(xmlDownloadResponse);
//    }

    /* We need to switch back to primary */
    while (ReleaseServerInstanceLock("primary") != VHQ_SUCCESS)
    {
      log_err(
          "%s WARNING: Releasing server instance lock FAILED - retrying in 5 seconds\n",
          __FUNCTION__);
      sleep(5);
    }
  }

  return;
}


static void CheckForResponseFile(char *file_name)
{
  if (FileExists(file_name))
  {
    int executing_index = 0;
    char dlname[128] = "";
    bool ids_defer_pkg = FALSE;
    VHQResponseSendMsg response_msg;

    dbg_msg("%s: response file exists - reading response msg from file\n",
            __FUNCTION__);

    if (ReadVHQResponseMsg(file_name, &response_msg) == FALSE)
    {
      log_err("%s: Reading response file failed\n", __FUNCTION__);
    }
    else
    {
      /* Clear the response expected flag since we don't need a response */
      response_msg.responseExpected = FALSE;
#ifdef _VOS2
      if ((response_msg.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR)
          || (response_msg.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED))
      {
        // In this case the result is from new SI
        // Update the result from new SI update status API
        bool siStatusAPI = FALSE;
        char error_msg[128] = "";
        int error_num = -1;  //TODO
        int status_ret = -1;
        int retry = 5;

        do
        {
          // If we don't have to send response get the dl status and update response message
          siStatusAPI = GetDLStatus(dlname, error_msg, &error_num, &status_ret);

          // Update the response message
          if (siStatusAPI)
          {
            if (error_num == 0)
            {
              response_msg.result =
                  VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
            }
            else
            {
              if (status_ret == 0)
              {
                response_msg.result =
                    VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;
                strncpy(response_msg.additional_info,
                        (char*) Secins_strerror(error_num),
                        sizeof(response_msg.additional_info) - 1);
                log_err(
                    "%s : Secure Installer update status failed, OS load error\n",
                    __FUNCTION__);
              }
              else
              {
                log_err(
                    "%s : Secure Installer update status returned error, retry count: %d\n",
                    __FUNCTION__, retry);
              }
            }

            if (strstr(dlname, VHQ_IDS_PACKAGE_DEFER) != NULL)
            {
              ids_defer_pkg = TRUE;
            }
          }
          else
            log_err(
                "%s : Secure Installer update status failed, OS might not support\n",
                __FUNCTION__);

          retry--;
          sleep(1);
        }
        while (siStatusAPI && (status_ret != 0) && (retry > 0));

        /* SI wasn't able to provide status (Secins_get_install_status failed) or
         * Device rebooted during Old SI, may be due to OOM.
         * Unexpected behavior marking download as failed.
         * Agent doesn't know the installation status.
         */
        if ((response_msg.result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR)
            || (response_msg.result
                == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED))
        {
          response_msg.result =
              VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR;

          if (siStatusAPI)
          {
            strncpy(response_msg.additional_info,
                    (char*) Secins_strerror(status_ret),
                    sizeof(response_msg.additional_info) - 1);
          }
          else
          {
            strcpy(response_msg.additional_info, "Unexpected Reboot");
          }
        }
      }
#endif

      if (GetExecutingIndex(response_msg.operation_set_id,
                            &executing_index) == FALSE)
      {
        log_err("%s ERROR: Could not find operation set id\n", __FUNCTION__);
      }

      if ((response_msg.result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
          || (response_msg.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED))
      {
        bool install_status_notification_required = FALSE;
        bool isLastOp = FALSE;
        bool bAppApprovalPerOpSet = TRUE;

        SetCompleteFlag(response_msg.operation_set_id,
                        response_msg.operation_id, FALSE, FALSE);

        VHQGetParameterBool(PARAM_APP_APPROVAL_PER_OPERATION_SET,
                            &bAppApprovalPerOpSet);

        if (!bAppApprovalPerOpSet)
        {
          /* Send notifications for all Downloads when AppApprovalPerOpSet is set to FALSE */
          install_status_notification_required = TRUE;
        }
        else
        {
          if (GetApprovalFlag(response_msg.operation_set_id,
                              response_msg.operation_id,
                              INSTALL_STATUS_REQUIRED,
                              &isLastOp) == FALSE)
          {
            /* Send notifications for all Downloads when Pre approvals is not set */
            install_status_notification_required = TRUE;
          }
          else
          {
            /* Installs were pre-approved, so we only need to send the INSTALL_STATUS for the last Operation in the OpSet */
            if (isLastOp)
            {
              install_status_notification_required = TRUE;
            }
          }
        }

        /* Event notification for installations after reboot, unfortunately we don't have the file name, installation status nor the event id */
        EventNotification(TMS_EVENT_NOTIFY_INSTALL_STATUS, dlname,
                          executing_index, TMS_STATUS_SUCCESS,
                          EVENT_SET_ID_INVALID,
                          EVENT_ID_INVALID,
                          install_status_notification_required);
      }
      else if ((response_msg.result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR)
          || (response_msg.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACE_FAILED)
          || (response_msg.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR)
          || (response_msg.result
              == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR))
      {
        SetCompleteFlag(response_msg.operation_set_id,
                        response_msg.operation_id, FALSE, TRUE);

        /* In case of Post Install Action set to Reboot the DL FILE INSTALLED status is already sent to the server */
        EventNotification(TMS_EVENT_NOTIFY_INSTALL_STATUS, dlname,
                          executing_index, TMS_STATUS_ERROR,
                          EVENT_SET_ID_INVALID,
                          EVENT_ID_INVALID, TRUE);
      }

      if (ids_defer_pkg == FALSE)
      {
        dbg_msg("%s: process response\n", __FUNCTION__);
        ProcessDownloadResponses(&response_msg);
      }

      dbg_msg("%s: removing response file\n", __FUNCTION__);

      if (removeFile(file_name) == FALSE)
      {
        log_dbg("%s: Error removing %s\n", __FUNCTION__,
                VHQ_RESPONSE_MSG_TEMP_FILE);
      }
    }
  }
  else
  {
    dbg_msg("%s: No response file exists\n", __FUNCTION__);
  }
}


static void SavePayload(const char **pszDeviceMessage)
{
  static int installFileNum = 0;
  int maxInstallFiles = 15;
  int payloadSaveFile = -1;
  int bytes_written;
  char payloadSaveFileName[256];

  if (!pszDeviceMessage || !(*pszDeviceMessage))
  {
    log_err("%s: ERROR no data!!!\n", __FUNCTION__);
    return;
  }

  if (installFileNum >= maxInstallFiles)
  {
    installFileNum = 0;
  }

  sprintf(payloadSaveFileName, "%s/vhq_install_payload.%u",
  VHQ_MAIN_FOLDER, installFileNum);

  removeFile(payloadSaveFileName);

  payloadSaveFile = open(payloadSaveFileName, O_RDWR | O_CREAT | O_TRUNC,
  S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
  if (payloadSaveFile != -1)
  {
    bytes_written = write(payloadSaveFile, *pszDeviceMessage,
                          strlen(*pszDeviceMessage));
    if (bytes_written != (int) strlen(*pszDeviceMessage))
    {
      log_warn("%s ERROR: wrote %d bytes (should have been %d bytes)\n",
               __FUNCTION__, bytes_written, strlen(*pszDeviceMessage));
    }
    close(payloadSaveFile);
    dbg_msg("%s: wrote %d bytes to payload file %s\n", __FUNCTION__,
            bytes_written, payloadSaveFileName);

    /* Make sure the file gets flushed to flash */
    sync();
    sync();
    sync();
  }
  else
    log_err("%s ERROR: Could not open response file\n", __FUNCTION__);

}

vhq_result_t SendFailedMessages(void)
{
  vhq_result_t ret_val = VHQ_SUCCESS;
  int i;
  int num_files;
  struct dirent **filenamelist;
  bool keys_exchanged = FALSE;

  dbg_msg("%s: ENTER\n", __FUNCTION__);

//  if (g_uiSafemode & SKIP_FAILED_MESSAGES)
//  {
//    log_dbg(
//        "%s: Skipping SendFailedMessages() because SKIP_FAILED_MESSAGES is set in Safemode\n",
//        __FUNCTION__);
//    return VHQ_SUCCESS;
//  }

  /* Read the files in alphabetical order since the failed messages should be stored in alphabetical order */
  num_files = scandir(VHQ_MAIN_FOLDER, &filenamelist, NULL, alphasort);
  if (num_files < 0)
  {
    log_err(
        "%s: Can't open %s to search for failed payloads (error = %s - $%d)\n",
        __FUNCTION__, VHQ_MAIN_FOLDER, strerror(errno), errno);
    return VHQ_FILE_IO_ERROR;
  }

#if 0
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\n\n\n\n\n\n\n\n%s: Directory listing of %s\n", __FUNCTION__, VHQ_MAIN_FOLDER);
  for (i = 0; i < num_files; i++)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\t%s\n", filenamelist[i]->d_name);
  }
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\n\n\n\n\n\n\n\n\n");
#endif

  /* Read KEYS_EXCHANGED value - if we haven't exchanged keys yet, we will delete the FAILED payloads */
  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);

  for (i = 0;
      ((i < num_files)
          && ((ret_val == VHQ_SUCCESS) || (ret_val == VHQ_FILE_IO_ERROR))); i++)
  {
    /* See if this is a payload file */
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read file %s from %s\n", __FUNCTION__, filenamelist[i]->d_name, VHQ_MAIN_FOLDER);
    if (strstr(filenamelist[i]->d_name, "vhq_install_payload."))
    {
      char payloadFullName[256];
      struct stat payloadFileStat;

      sprintf(payloadFullName, "%s%s", VHQ_MAIN_FOLDER,
              filenamelist[i]->d_name);
      if (stat(payloadFullName, &payloadFileStat) == 0)
      {
        if (keys_exchanged)
        {
          char *deviceMessage = NULL;

          deviceMessage = malloc(payloadFileStat.st_size);
          if (deviceMessage)
          {
            int payloadSaveFile = -1;
            int comm_id, msg_id, srv_msg_id;
            int bytes_read;
            char operation_id[64];
            time_t time;

            payloadSaveFile = open(payloadFullName, O_RDONLY);
            if (payloadSaveFile != -1)
            {
              bytes_read = read(payloadSaveFile, deviceMessage,
                                payloadFileStat.st_size);
              if (bytes_read == payloadFileStat.st_size)
              {
                int msgLength;
                char *updatedXMLData = NULL;

                /* Mitch (5-25-16): SendFailedMessages is now called inside of VHQManagerContactServer,
                 which should only be called after CommNetConnect() was called in the pre-event CB.  So
                 we don't need to call CommNetConnect/CommNetDisconnect from here anymore */

                /* We found and read a payload file, lets resend it */
                dbg_msg("%s: Found payload file %s - resending\n", __FUNCTION__,
                        filenamelist[i]->d_name);

                sscanf(filenamelist[i]->d_name,
                       "vhq_fail_payload.%lu.%u.%u.%u.%s", &time, &comm_id,
                       &msg_id, &srv_msg_id, operation_id);
                dbg_notice(
                    "%s: Resending payload - comm_id = %d, msg_id = %d, srv_msg_id = %d, operation_id = %s\n",
                    __FUNCTION__, comm_id, msg_id, srv_msg_id, operation_id);

                msgLength = VHQXmlUpdateNonce(deviceMessage, bytes_read,
                                              &updatedXMLData, TRUE);
                deviceMessage = updatedXMLData;

                ret_val = VHQManagerContactServer(&deviceMessage, &msgLength,
                EVENT_ID_UNKNOWN,
                                                  &comm_id, &msg_id,
                                                  &srv_msg_id, operation_id,
                                                  TRUE,
                                                  FALSE,
                                                  FALSE);

                /* deviceMessage should be freed in VHQManagerContactServer() so no need to free it here */
                if (ret_val == VHQ_SUCCESS)
                {
                  /* Since we resent the message we can delete the file.  If resending failed due to POST_PAYLOAD
                   failure again, we will leave the existing file and try to send it again later.  Note that since
                   savePayloadOnFailure is set to FALSE in call to VHQManagerContactServer() above, the payload
                   will not get saved again if it fails */
                  close(payloadSaveFile);
                  payloadSaveFile = -1;
                  remove(payloadFullName);
                }
                else
                {
                  log_err(
                      "%s: VHQManagerContactServer() POST_PAYLOAD failure - %d\n",
                      __FUNCTION__, ret_val);
                }
              }
              else
              {
                ret_val = VHQ_FILE_IO_ERROR;
                log_err("%s: payload file read failure - free deviceMessage\n",
                        __FUNCTION__);
                free(deviceMessage);
                deviceMessage = NULL;
              }

              if (payloadSaveFile != -1)
                close(payloadSaveFile);
            }
            else
            {
              ret_val = VHQ_FILE_IO_ERROR;
              log_err("%s: payload file open failure - free deviceMessage\n",
                      __FUNCTION__);
              free(deviceMessage);
              deviceMessage = NULL;
            }
          }
        }
        else
        {
          /* We have a FAILED message to send but KeyExchanged has been reset to FALSE.  We need to
           delete the failed message since they keys used in that message are no longer valid */
          log_dbg("%s: removing %s since keys have not been exchange yet\n",
                  __FUNCTION__, filenamelist[i]->d_name);
          remove(payloadFullName);
        }
      }
      else
      {
        ret_val = VHQ_FILE_IO_ERROR;
        dbg_msg("%s: Couldn't stat() file %s - removing\n", __FUNCTION__,
                filenamelist[i]->d_name);
        remove(payloadFullName);
      }
    }
  }

  /* Cleanup the scandir mallocs */
  if (filenamelist != NULL)
  {
    for (i = 0; i < num_files; i++)
    {
      if (filenamelist[i] != NULL)
      {
        free(filenamelist[i]);
      }
    }
    free(filenamelist);
  }

  dbg_msg("%s: Returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

#ifdef EVENT_SCHED_THREAD_MODE
void cleanupHandler(void *arg)
{
  (void) (arg);
  int lock_ret_val;

  /* Unlock the contact server mutex in the cancel handler */
  //printf("\n\n\ncleanupHandler: Unlocking ContactServerMutex due to thread cancellation\n\n\n");
  lock_ret_val = pthread_mutex_unlock(&ContactServerMutex);
  if (lock_ret_val != 0)
  {
    //printf("\n\n\n%cleanupHandler ERROR: error Unlocking ContactServerMutex!!!\n\n\n");
  }
  else
  {
    //printf("cleanupHandler: Unlocked ContactServerMutex!!!\n\n\n");
  }
}

void GetContactServerLock(void)
{
  int lock_ret_val;
  struct timespec abs_time;
  bool print_error = TRUE;

  /* We want to make sure that only 1 thread is talking to the server at a time */
  dbg_msg("%s: waiting for ContactServerMutex\n", __FUNCTION__);
  do
  {
    clock_gettime(CLOCK_REALTIME, &abs_time);
    abs_time.tv_sec += 1;
    lock_ret_val = pthread_mutex_timedlock(&ContactServerMutex, &abs_time);
    if (lock_ret_val != 0)
    {
      if (print_error)
      {
        /* Only print this error message once so we don't flood the logs */
        dbg_msg(
            "%s: pthread_mutex_timedlock(ContactServerMutex, 1) failed (%d)\n",
            __FUNCTION__, lock_ret_val);
        print_error = FALSE;
      }
    }
  }
  while ((lock_ret_val != 0) && (lock_ret_val != EDEADLK));
  dbg_msg("%s: got ContactServerMutex\n", __FUNCTION__);
}
#endif

#define MAX_CONSECUTIVE_ERRORS      3


vhq_result_t VHQManagerContactServer(char **pszDeviceMessage,
                                     int *iDeviceMessageLength,
                                     event_id_t event_id, int *comm_id,
                                     int *msg_id, int *srv_msg_id,
                                     char *operation_id, bool close_comm_id,
                                     bool savePayloadOnFailure,
                                     bool isKeyExchange)
{
  vhq_result_t ret_result = VHQ_SUCCESS;
#if CONTACT_TEST_SERVER
  int msgLength = 0;
  char *updatedXMLData = NULL;
  int consecutive_error_count = 0;
  vhq_result_t result = VHQ_SUCCESS;
  vhq_result_t prev_result = VHQ_SERVER_POST_PAYLOAD_FAILURE;
  char *ServerResponse = NULL;
  char *DeviceMsgCopy = NULL;
  int DeviceMsgCopy_Length = 0;

  if (!pszDeviceMessage || !(*pszDeviceMessage) || !iDeviceMessageLength
      || !(*iDeviceMessageLength) || !comm_id || !msg_id || !srv_msg_id)
  {
    log_err("%s: ERROR no data!!!\n", __FUNCTION__);
    if (pszDeviceMessage && *pszDeviceMessage)
    {
      free(*pszDeviceMessage);
      *pszDeviceMessage = NULL;
      *iDeviceMessageLength = 0;
    }
    return VHQ_SERVER_MESSAGE_NO_DATA;
  }

#if TRACK_MEM_USAGE

  if (mt_counter == 0)
  {
    remove(MT_FILE_NAME);
  }

  if (mem_track_file == NULL)
  {
    mem_track_file = fopen(MT_FILE_NAME, "a");
  }

  if ((mt_counter % 20) == 0)
  {
    fprintf(mem_track_file, "%-25s: %-20s (%-3s): %-10s%-10s%-10s%-10s%-10s\n", "Function", "Description", "Cnt",
      "arena", "ordblks", "uordblks", "fordblks", "keepcost");
  }

  mem_info = mallinfo();
  fprintf(mem_track_file, "%-25s: %-20s (%-3d): %-10d%-10d%-10d%-10d%-10d\n", __FUNCTION__, "ENTRY", mt_counter,
    mem_info.arena, mem_info.ordblks, mem_info.uordblks, mem_info.fordblks, mem_info.keepcost);
#endif

  /* We need to save some data for status processing */
  VHQXmlExtractProcessingInformation(*pszDeviceMessage, ServerResponse,
                                     event_id);

  /* Mitch (5-23-16): ADKTMS-1071 - We need to send any failed messages to the server before we try to send
   these current messages so that everything gets sent in the correct order.  If we are unable to send
   failed messages, just save this current message as well. Note that SendFailedMessages can call this
   function again so protect against endless recursion */
  if (!SendingFailedMessages)
  {

    /* Set the SendingFailedMessages flag so we don't re-enter this part on recursion */
    SendingFailedMessages = TRUE;

    ret_result = SendFailedMessages();
    /* We should only fail out here if we get another POST_PAYLOAD_FAILURE.  Only the
     POST_PAYLOAD_FAILURE case should cause us to save the payload */
    if (ret_result != VHQ_SUCCESS)
    {
      /* Free the memory before returning */
      free(*pszDeviceMessage);
      *pszDeviceMessage = NULL;
      *iDeviceMessageLength = 0;

      /* Reset SendingFailedMessages to FALSE so next time through we can send failed messages again */
      SendingFailedMessages = FALSE;

      return ret_result;
    }

    /* Reset SendingFailedMessages to FALSE so next time through we can send failed messages again */
    SendingFailedMessages = FALSE;
  }

#ifdef EVENT_SCHED_THREAD_MODE
  /* Push a cleanup handler to make sure ContactServerMutex gets unlocked if this thread is cancelled */
  dbg_notice("%s: pushing cleanupHandler with pthread_cleanup_push()\n\n\n",
             __FUNCTION__);
  pthread_cleanup_push(cleanupHandler, NULL)
        ;

        GetContactServerLock();
#endif

        while (*pszDeviceMessage && *iDeviceMessageLength)
        {
          /* Mitch (6-2-2017): In order to minimize calls to GenerateNonce(), most XML messages are created with a hard
           coded Nonce value set to 1.  Due to multi-threading and other concerns, we always want to update the Nonce
           value just before we send a message so lets do that here and replace the hard coded Nonce with the Nonce
           at the time just before the message is sent.  That way, we will always have the most up to date Nonce
           and we will minimize calls to GenerateNonce() */
          msgLength = VHQXmlUpdateNonce(*pszDeviceMessage,
                                        strlen(*pszDeviceMessage),
                                        &updatedXMLData,
                                        TRUE);
          *pszDeviceMessage = updatedXMLData;
          *iDeviceMessageLength = msgLength;

          if (*pszDeviceMessage == NULL || *iDeviceMessageLength == 0)
          {
            log_err("%s: ERROR no data\n", __FUNCTION__);
            ret_result = VHQ_SERVER_POST_PAYLOAD_FAILURE;
            break;
          }

          if (GetLoggingLevel() < VHQ_LOGGING_LEVEL_DEBUG)
          {
            char truncated_device_msg[1024];
            if (*iDeviceMessageLength >= (int) sizeof(truncated_device_msg))
            {
              memset(truncated_device_msg, 0, sizeof(truncated_device_msg));
              memcpy(truncated_device_msg, *pszDeviceMessage,
                     sizeof(truncated_device_msg) - 1);
              dbg_alert(
                  "Sending message to server (%d bytes, msg_id = %d, srv_msg_id = %d):\n[%s...]\n",
                  strlen(*pszDeviceMessage), *msg_id, *srv_msg_id,
                  truncated_device_msg);
            }
            else
              dbg_alert(
                  "Sending message to server (%d bytes, msg_id = %d, srv_msg_id = %d):\n[%s]\n",
                  strlen(*pszDeviceMessage), *msg_id, *srv_msg_id,
                  *pszDeviceMessage);
          }
          else
            dbg_msg(
                "Sending message to server (%d bytes, msg_id = %d, srv_msg_id = %d):\n[%s]\n",
                strlen(*pszDeviceMessage), *msg_id, *srv_msg_id,
                *pszDeviceMessage);

          ret_result = PostPayload(*pszDeviceMessage, &ServerResponse);
          if (ret_result != VHQ_SUCCESS
              && ret_result != VHQ_SERVER_POST_PAYLOAD_CURL_CERT_EXPIRED)
          {
            /* We can close the Comm ID if we can't talk to the server */
            GetMessageID(*comm_id, *msg_id, operation_id, TRUE);

            dbg_err(
                "%s: could not post payload (%d bytes):\n[%s]\n\tret_result set to %d\n",
                __FUNCTION__, strlen(*pszDeviceMessage), *pszDeviceMessage,
                ret_result);
          }

          /* Copy the message in case we need to re-send it */
          DeviceMsgCopy = malloc(*iDeviceMessageLength);
          if (DeviceMsgCopy)
          {
            memcpy(DeviceMsgCopy, *pszDeviceMessage, *iDeviceMessageLength);
            DeviceMsgCopy_Length = *iDeviceMessageLength;
          }

          free(*pszDeviceMessage);
          *pszDeviceMessage = NULL;
          *iDeviceMessageLength = 0;

          if (ServerResponse)
          {
            dbg_alert(
                "Processing Server Response (%d bytes, msg_id = %d, srv_msg_id = %d):\n[%s]\n",
                strlen(ServerResponse), *msg_id, *srv_msg_id, ServerResponse);
            result = VHQXmlProcessServerMessage(ServerResponse,
                                                strlen(ServerResponse), comm_id,
                                                (uint32*) srv_msg_id,
                                                pszDeviceMessage,
                                                iDeviceMessageLength,
                                                operation_id, close_comm_id,
                                                isKeyExchange);
            if (result != VHQ_SUCCESS)
            {
              dbg_notice(
                  "Unable to processed Server Response (%d bytes):\n[%s]\nResult = %d\n",
                  strlen(ServerResponse), ServerResponse, result);
              if (pszDeviceMessage && *pszDeviceMessage)
                dbg_notice("Processing result message (%d bytes):\n[%s]\n",
                           strlen(*pszDeviceMessage), *pszDeviceMessage);

              /* If we get an E_INVALID_NONCE error and configured to retry those, let's resend the message */
              if (result == VHQ_SERVER_RESPONSE_INVALID_NONCE)
              {
                bool resend_inv_nonce = TRUE;

                VHQGetParameterBool(PARAM_RESEND_INVALID_NONCE_MESSAGES,
                                    &resend_inv_nonce);
                if (resend_inv_nonce)
                {
                  int msgLength;
                  char *updatedXMLData = NULL;

                  /* Free the server response because we are going to re-send the message with an updated NONCE */
                  free(ServerResponse);
                  ServerResponse = NULL;

                  /* Lets update the NONCE and resend our message */
                  log_warn(
                      "%s: Payload FAILED due to invalid NONCE - resending with valid nonce\n",
                      __FUNCTION__);

                  msgLength = VHQXmlUpdateNonce(DeviceMsgCopy,
                                                DeviceMsgCopy_Length,
                                                &updatedXMLData, TRUE);

                  /* VHQXmlUpdateNonce() free's the original message so lets clear the pointer */
                  DeviceMsgCopy = NULL;
                  DeviceMsgCopy_Length = 0;
                  *pszDeviceMessage = updatedXMLData;
                  *iDeviceMessageLength = msgLength;

                  ret_result = PostPayload(*pszDeviceMessage, &ServerResponse);
                  if (ret_result != VHQ_SUCCESS)
                  {
                    /* We can close the Comm ID if we can't talk to the server */
                    GetMessageID(*comm_id, *msg_id, operation_id, TRUE);

                    if (*pszDeviceMessage)
                      dbg_err(
                          "%s: could not post updated NONCE payload (%d bytes):\n[%s]\n\tret_result set to %d\n",
                          __FUNCTION__, strlen(*pszDeviceMessage),
                          *pszDeviceMessage, ret_result);
                  }

                  if (*pszDeviceMessage)
                  {
                    free(*pszDeviceMessage);
                    *pszDeviceMessage = NULL;
                    *iDeviceMessageLength = 0;
                  }

                  if (ServerResponse)
                  {
                    dbg_alert(
                        "%s: Processing Server Response to updated NONCE (%d bytes, msg_id = %d, srv_msg_id = %d):\n[%s]\n",
                        __FUNCTION__, strlen(ServerResponse), *msg_id,
                        *srv_msg_id, ServerResponse);
                    result = VHQXmlProcessServerMessage(ServerResponse,
                                                        strlen(ServerResponse),
                                                        comm_id,
                                                        (uint32*) srv_msg_id,
                                                        pszDeviceMessage,
                                                        iDeviceMessageLength,
                                                        operation_id,
                                                        close_comm_id,
                                                        isKeyExchange);
                    if (result != VHQ_SUCCESS)
                      log_err(
                          "%s: Processed Server Response to updated NONCE (%d bytes):\n[%s]\nResult = %d\n",
                          __FUNCTION__, strlen(ServerResponse), ServerResponse,
                          result);
                  }
                  else
                    log_err("%s: ERROR: Server Response absent\n",
                            __FUNCTION__);
                }
              }
            }
            else
            {
              if (isKeyExchange && !deviceRegistrationInProgress)
              {
                log_notice("%s: Registration is completed\n", __FUNCTION__);
                isKeyExchange = FALSE;
              }
            }

            if ((result != VHQ_SUCCESS) && (result == prev_result)
                && (*pszDeviceMessage != NULL))
            {
              consecutive_error_count++;

              if (consecutive_error_count >= MAX_CONSECUTIVE_ERRORS)
              {
                dbg_warn(
                    "%s WARNING: Got the same result (%d) %d times from VHQXmlProcessServerMessage() - Not sending response to server\n",
                    __FUNCTION__, result, MAX_CONSECUTIVE_ERRORS);
                free(*pszDeviceMessage);
                *pszDeviceMessage = NULL;
                *iDeviceMessageLength = 0;
              }
            }
            else
              consecutive_error_count = 0;

            prev_result = result;
            if (result != VHQ_SUCCESS)
            {
              ret_result = result;
              log_err(
                  "%s ERROR: could not process server message - ret_result set to %d\n",
                  __FUNCTION__, ret_result);
              {
                char serverErrText[256] = { 0 };
                char serverErrID[256] = { 0 };
                char serverResultMsg[256] = { 0 };

                ConvertVHQResultToStr(ret_result, serverErrText,
                                      sizeof(serverErrText));
                VHQXmlExtractServerError(ServerResponse, strlen(ServerResponse),
                                         serverErrID, sizeof(serverErrID));

                // "Server Response-Unidentified Device (E_UNIDENTIFIED_DEVICE)"
                snprintf(serverResultMsg, sizeof(serverResultMsg), "%s(%s)",
                         serverErrText, serverErrID);

                dbg_msg("%s: notify with \"%s\"\n", __FUNCTION__,
                        serverResultMsg);
                NotifyApps(TMS_EVENT_NOTIFY_SERVER_ERRORS, serverResultMsg, 0,
                           ret_result, EVENT_SET_ID_INVALID, EVENT_ID_INVALID,
                           TRUE);
              }
            }

            /* We need to save some data for status processing */
            VHQXmlExtractProcessingInformation(*pszDeviceMessage,
                                               ServerResponse, event_id);

            if (ServerResponse)
            {
              free(ServerResponse);
              ServerResponse = NULL;
            }
          }

          /* We should not be changing the message ID.  That is maintained at lower levels and incremented there */
          //(*msg_id)++;
          /* Free any copies of the device message if we still have it */
          if (DeviceMsgCopy)
          {
            free(DeviceMsgCopy);
            DeviceMsgCopy = NULL;
            DeviceMsgCopy_Length = 0;
          }
        }
#endif

        /* For making sure there is no memory leak */
        if (*pszDeviceMessage)
        {
          log_err("%s: pszDeviceMessage was not freed\n", __FUNCTION__);
          free(*pszDeviceMessage);
          *pszDeviceMessage = NULL;
          *iDeviceMessageLength = 0;
        }

        dbg_msg("%s: returning %d\n", __FUNCTION__, ret_result);

#if TRACK_MEM_USAGE
  if (mem_track_file != NULL)
  {
    mem_info = mallinfo();


    fprintf(mem_track_file, "%-25s: %-20s (%-3d): %-10d%-10d%-10d%-10d%-10d\n", __FUNCTION__, "EXIT", mt_counter,
      mem_info.arena, mem_info.ordblks, mem_info.uordblks, mem_info.fordblks, mem_info.keepcost);

    fclose(mem_track_file);
    mem_track_file = NULL;
    mt_counter++;
  }
#endif

#if CONTACT_TEST_SERVER
#ifdef EVENT_SCHED_THREAD_MODE
        dbg_msg(
            "%s: popping and executing cleanupHandler with pthread_cleanup_pop(1)\n\n\n",
            __FUNCTION__);
        pthread_cleanup_pop(1);
#endif
#endif

  return ret_result;
}

static bool StopEventSchedulerThread(void)
{
  bool ret_val = TRUE;
  int iRet = 0;

  if ((int) EventSchedThread != -1)
  {
    sleep(5);
    iRet = pthread_cancel(EventSchedThread);
    if (iRet != 0)
    {
      ret_val = FALSE;
      log_err("%s: pthread_cancel(EventSchedThread) failed (%s)\n",
              __FUNCTION__, strerror(errno));
    }
    else
    {
      void *thread_result;

      dbg_msg("%s: Waiting for EventSchedThread to finish...\n", __FUNCTION__);
      iRet = pthread_join(EventSchedThread, &thread_result);
      if (iRet != 0)
      {
        log_err("%s: EventSchedThread join failed %d (%s)\n", __FUNCTION__,
                iRet, strerror(errno));
        ret_val = FALSE;
      }
      else
      {
        log_dbg("%s: EventSchedThread EXITED\n", __FUNCTION__);
        EventSchedThread = -1;
      }
    }

  }

  return ret_val;
}

void (*ExtractFn)(int iOp, void *pData) = NULL;


static bool UpdateConfig(char *newConfigFile)
{
  bool ret_val = TRUE;
  uint32 old_hb_freq, old_hb_failure_retry_thresh;

  dbg_msg("%s: ENTER\n", __FUNCTION__);

  /* Get the current information about HB's. If either of these parameters
   change during the update, we need to re-schedule the HB */
  old_hb_freq = GetHBFreq(&old_hb_failure_retry_thresh, GetComType());

  /* Merge the new config file if it is specified */
  if (newConfigFile && strlen(newConfigFile))
  {
    bool merge_ret_val;

    dbg_msg("%s: Merging %s\n", __FUNCTION__, newConfigFile);
    merge_ret_val = VHQMergeConfigFile(newConfigFile, ExtractFn);
    dbg_msg("%s: VHQMergeConfigFile returned %d\n", __FUNCTION__,
            merge_ret_val);
    ret_val = merge_ret_val;

    if (ret_val)
    {
      /* If the merge was successful, we need to re-read global I/O variables */

      /* De-init the I/O stuff first */
      VHQioDeinitialize();

      /* Now re-initialize the IO */
      VHQioInitialize();
    }
  }
  else
  {
    /* This is the case where an app modified the VHQ.ini file directly which should be very rare.
     In this case, we need to reload the configuration */
    dbg_msg("%s: re-loading configuration with updated parameters\n",
            __FUNCTION__);
    ret_val = VHQLoadConfigData(TRUE, ExtractFn);
  }

#ifdef _VOS2
  if (!DirExists(VHQ_USER_FLASH_CONFIG))
  {
    int res;
    dbg_notice("%s: %s does not exist - creating it\n", __FUNCTION__,
               VHQ_USER_FLASH_CONFIG);
    res = CreateDir(VHQ_USER_FLASH_CONFIG, 0777);
    if (res == FALSE)
      log_err("%s: Failed to create directory: '%s'\n", __FUNCTION__,
              VHQ_USER_FLASH_CONFIG);
    res = chown(VHQ_USER_FLASH_CONFIG, getuid(), Secins_system_gid());
    if (res)
      dbg_err("%s: ERROR - chown(%s) failed with '%s', errno = %d\n",
              __FUNCTION__, VHQ_USER_FLASH_CONFIG, strerror(errno), errno);
    res = chmod(VHQ_USER_FLASH_CONFIG, 0777);
    if (res)
      dbg_err("%s: ERROR - chmod(%s) failed with '%s', errno = %d\n",
              __FUNCTION__, VHQ_USER_FLASH_CONFIG, strerror(errno), errno);
  }
  else
    dbg_msg("%s: %s directory exists\n", __FUNCTION__, VHQ_USER_FLASH_CONFIG);
#endif // End of #ifdef _VOS2

  if (ret_val)
  {
    dbg_msg("%s: Configuration updated - checking if HB needs re-scheduled\n",
            __FUNCTION__);
    if (HeartbeatRescheduleRequired(old_hb_freq, old_hb_failure_retry_thresh))
    {
      event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;

      HeartbeatEventID = GetHeartBeatEventID(NULL);
      if (HeartbeatEventID != EVENT_SET_ID_INVALID)
      {
        /* We need to cancel the HB event first - we will reschedule once we restart the manageer loop */
        log_alert(
            "%s: HB parameters changed - cancelling HB so it will be re-scheduled with new parameters\n",
            __FUNCTION__);
        CancelEventSet(HeartbeatEventID, TRUE);
        SetHeartBeatEventID(NULL, EVENT_SET_ID_INVALID);
      }
    }

    dbg_msg("%s: calling GenerateAppParamUpdateEvent()\n", __FUNCTION__);
    GenerateAppParamUpdateEvent(NULL);
  }

  return ret_val;
}


void* LockServerInstanceThread(void *arg)
{
  lock_thread_info_t *thread_info = (lock_thread_info_t*) arg;
  VHQRootRequestMsg request_msg = thread_info->requestMsg;

  /* We can requst the lock now that we are on a new thread */
  dbg_msg("%s: calling LockServerInstance(%s, %d) on pid %d - arg = 0x%08x\n",
          __FUNCTION__, request_msg.data.sServerInstanceParam.server_instance,
          request_msg.data.sServerInstanceParam.msec_timeout, getpid(), arg);
  thread_info->lock_ret_val = LockServerInstance(
      request_msg.data.sServerInstanceParam.server_instance,
      request_msg.data.sServerInstanceParam.msec_timeout,
      thread_info->prev_server_instance);

#ifdef _VOS2
  /* We need to inform main thread that we have completed processing */
  pthread_t VHQ_manager_thread_id = GetManagerThreadId();
  dbg_msg("%s: Sending SIGUSR1 to VHQManagerThread 0x%08x\n", __FUNCTION__,
          VHQ_manager_thread_id);
  pthread_kill(VHQ_manager_thread_id, SIGUSR1);
#endif

  /* Notify scheduler that instance was locked */
  if (thread_info->lock_ret_val == VHQ_SUCCESS)
  {
    SetEventSchedulerTimerExpired(TRUE);
  }

  dbg_msg("%s: LockServerInstance returned %d\n", __FUNCTION__,
          thread_info->lock_ret_val);
  pthread_exit(&thread_info->lock_ret_val);
  return NULL;
}

static bool CheckLockThreadResults()
{
  int i;
  bool active_thread_is_present = FALSE;

  for (i = 0; i < MAX_SERVER_INSTANCE_LOCK_REQ; i++)
  {
    if (lock_thread_info_array[i].in_use)
    {
      int kill_ret_val;
      vhq_result_t ret_val;
      bool thread_exited = FALSE;

      dbg_msg("%s: Checking status of lock thread %08x\n", __FUNCTION__,
              lock_thread_info_array[i].lock_thread_id);

      kill_ret_val = pthread_kill(lock_thread_info_array[i].lock_thread_id, 0);

      if (kill_ret_val == ESRCH)
      {
        dbg_msg("%s: Thread ID not found - it has exited\n", __FUNCTION__);
        thread_exited = TRUE;
      }
      else if (kill_ret_val == 0)
      {
        dbg_msg("%s: lock thread %08x still running\n", __FUNCTION__,
                lock_thread_info_array[i].lock_thread_id);
        active_thread_is_present = TRUE;
      }
      else
      {
        dbg_err("%s ERROR: pthread_kill returned %d\n", __FUNCTION__,
                kill_ret_val);
      }

      if (thread_exited)
      {
        void *result_void_p;
        vhq_result_t *res_p;

        if (pthread_join(lock_thread_info_array[i].lock_thread_id,
                         &result_void_p) != 0)
        {
          dbg_err("%s: pthread_join FAILED\n", __FUNCTION__);
          ret_val = VHQ_API_SERVER_INSTANCE_LOCK_ERROR;
        }
        else
        {
          dbg_msg("%s: lock thread JOINED\n", __FUNCTION__);

          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: result_void_p = 0x%08x\n", __FUNCTION__, result_void_p);
          res_p = (vhq_result_t*) result_void_p;
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: res_p = 0x%08x\n", __FUNCTION__, res_p);
          ret_val = *res_p;
          dbg_msg("%s: ret_val = %d\n", __FUNCTION__, ret_val);
        }

        if (lock_thread_info_array[i].requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
        {
          pthread_mutex_lock(&appArrayMutex);
          SendMsgToApp(lock_thread_info_array[i].requestMsg.receiver,
          TMS_EVT_LOCK_SERVER_INSTANCE,
                       lock_thread_info_array[i].requestMsg.messageID, ret_val,
                       lock_thread_info_array[i].prev_server_instance, NULL, 0,
                       NULL,
                       0, FALSE, 0);
          pthread_mutex_unlock(&appArrayMutex);
        }

        /* Clear the array entry now that it is done (especially need to clear in_use flag) */
        dbg_msg("%s: Clearing lock_thread array entry %d\n", __FUNCTION__, i);
        memset(&lock_thread_info_array[i], 0, sizeof(lock_thread_info_t));

      }
    }
  }
  return active_thread_is_present;
}


static vhq_result_t LockServerInstanceOnThread(VHQRootRequestMsg *requestMsg)
{
  int i;
  pthread_attr_t attr;
  vhq_result_t ret_val;

  for (i = 0; i < MAX_SERVER_INSTANCE_LOCK_REQ; i++)
  {
    if (lock_thread_info_array[i].in_use == FALSE)
      break;
  }

  if (i >= MAX_SERVER_INSTANCE_LOCK_REQ)
  {
    dbg_warn("%s WARNING: MAX SERVER LOCK Requests has been reached\n",
             __FUNCTION__);
    return VHQ_API_SERVER_INSTANCE_MAX_LOCK_REQUESTS_EXCEEDED;
  }

  dbg_msg("%s: Found open slot at %d\n", __FUNCTION__, i);

  /* Clear the array entry */
  memset(&lock_thread_info_array[i], 0, sizeof(lock_thread_info_t));

  /* Initialize and set thread detached attribute */
  pthread_attr_init(&attr);
  pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);

  /* Setup the args */
  memcpy(&lock_thread_info_array[i].requestMsg, requestMsg,
         sizeof(VHQRootRequestMsg));

  /* Try the lock on the new thread */
  dbg_msg(
      "%s: creating thread to call LockServerInstance(%s, %d) - &lock_thread_info_array[i] = 0x%08x\n",
      __FUNCTION__,
      lock_thread_info_array[i].requestMsg.data.sServerInstanceParam
          .server_instance,
      lock_thread_info_array[i].requestMsg.data.sServerInstanceParam
          .msec_timeout,
      &lock_thread_info_array[i]);
  if (pthread_create(&lock_thread_info_array[i].lock_thread_id, &attr,
                     LockServerInstanceThread,
                     (void*) &lock_thread_info_array[i]) != 0)
  {
    dbg_err("%s: pthread_create FAILED\n", __FUNCTION__);
    ret_val = VHQ_API_SERVER_INSTANCE_LOCK_ERROR;
    /* Clear out the entry in lock_thread array */
    memset(&lock_thread_info_array[i], 0, sizeof(lock_thread_info_t));
  }
  else
  {
    lock_thread_info_array[i].in_use = TRUE;
    dbg_msg("%s: New thread CREATED - thread_id %08x\n", __FUNCTION__,
            lock_thread_info_array[i].lock_thread_id);
    ret_val = VHQ_SUCCESS;
  }

  /* Free attribute */
  pthread_attr_destroy(&attr);

  return ret_val;
}


void* SetConfigThread(void *arg)
{
  set_config_info_t *thread_info = (set_config_info_t*) arg;

  /* Register with the logging first so its easy to follow what this process is printing in logs */
  LogRegisterThreadDescription("VHQSetConfig");

  /* We can request the lock now that we are on a new thread */
  dbg_msg("%s: calling EventSchedulerLock(%d) on pid %d - arg = 0x%08x\n",
          __FUNCTION__, thread_info->sec_timeout, getpid(), arg);

  if (EventSchedulerLock(thread_info->requestMsg.data.sConfigUpdateReq.timeout))
  {
    if (FileExists(
        thread_info->requestMsg.data.sConfigUpdateReq.new_config_file))
    {
      if (UpdateConfig(
          thread_info->requestMsg.data.sConfigUpdateReq.new_config_file))
      {
        dbg_msg(
            "%s: UpdateConfig() was SUCCESSFUL - returning VHQ_STATUS_SUCCESS\n",
            __FUNCTION__);
        if (thread_info->requestMsg.data.sConfigUpdateReq.use_TMS_API)
          thread_info->set_config_ret_val = TMS_STATUS_SUCCESS;
        else
          thread_info->set_config_ret_val = VHQ_STATUS_SUCCESS;
      }
      else
      {
        log_err("%s: UpdateConfig() FAILED - returning VHQ_STATUS_ERROR\n",
                __FUNCTION__);
        if (thread_info->requestMsg.data.sConfigUpdateReq.use_TMS_API)
          thread_info->set_config_ret_val = TMS_STATUS_ERROR;
        else
          thread_info->set_config_ret_val = VHQ_STATUS_ERROR;
      }
    }
    else
      thread_info->set_config_ret_val = TMS_STATUS_FILENAME_ERROR;

    EventSchedulerUnlock();
  }
  else
  {
    thread_info->set_config_ret_val = TMS_STATUS_AGENT_BUSY_ERROR;
  }

  dbg_msg("%s: SetConfig returned %d\n", __FUNCTION__,
          thread_info->set_config_ret_val);

#ifdef _VOS2
  /* We need to inform main thread that we have completed processing */
  pthread_t VHQ_manager_thread_id = GetManagerThreadId();
  dbg_msg("%s: Sending SIGUSR1 to VHQManagerThread 0x%08x\n", __FUNCTION__,
          VHQ_manager_thread_id);
  pthread_kill(VHQ_manager_thread_id, SIGUSR1);
#endif

  LogUnRegisterThreadDescription();
  pthread_exit(&thread_info->set_config_ret_val);
  return NULL;
}

static bool CheckSetConfigResults()
{
  int i;
  bool active_thread_is_present = FALSE;

  for (i = 0; i < MAX_SET_CONFIG_REQ; i++)
  {
    if (set_config_info_array[i].in_use)
    {
      int kill_ret_val;
      vhq_result_t ret_val;
      bool thread_exited = FALSE;

      dbg_msg("%s: Checking status of lock thread %08x\n", __FUNCTION__,
              set_config_info_array[i].set_config_thread_id);

      kill_ret_val = pthread_kill(set_config_info_array[i].set_config_thread_id,
                                  0);

      if (kill_ret_val == ESRCH)
      {
        dbg_err("%s: Thread ID not found - it has exited\n", __FUNCTION__);
        thread_exited = TRUE;
      }
      else if (kill_ret_val == 0)
      {
        dbg_msg("%s: lock thread %08x still running\n", __FUNCTION__,
                set_config_info_array[i].set_config_thread_id);
        active_thread_is_present = TRUE;
      }
      else
      {
        dbg_err("%s ERROR: pthread_kill returned %d\n", __FUNCTION__,
                kill_ret_val);
      }

      if (thread_exited)
      {
        void *result_void_p;
        vhq_result_t *res_p;

        if (pthread_join(set_config_info_array[i].set_config_thread_id,
                         &result_void_p) != 0)
        {
          dbg_err("%s: pthread_join FAILED\n", __FUNCTION__);
          ret_val = VHQ_THREADING_ERROR;
        }
        else
        {
          dbg_msg("%s: lock thread JOINED\n", __FUNCTION__);

          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: result_void_p = 0x%08x\n", __FUNCTION__, result_void_p);
          res_p = (vhq_result_t*) result_void_p;
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: res_p = 0x%08x\n", __FUNCTION__, res_p);
          ret_val = *res_p;
          dbg_msg("%s: ret_val = %d\n", __FUNCTION__, ret_val);
        }

        if (set_config_info_array[i].requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
        {
          pthread_mutex_lock(&appArrayMutex);
          SendMsgToApp(set_config_info_array[i].requestMsg.receiver,
          TMS_EVT_SET_TMS_CONFIG_RESPONSE,
                       set_config_info_array[i].requestMsg.messageID, ret_val,
                       NULL,
                       NULL, 0, NULL, 0, FALSE, 0);
          pthread_mutex_unlock(&appArrayMutex);
        }
        else
        {
          VHQRootResponseMsg responseMsg;

          memset(&responseMsg, 0, sizeof(VHQRootResponseMsg));

          responseMsg.clientPid = set_config_info_array[i].requestMsg.clientPid;
          responseMsg.message_type = VHQ_REQUEST_CONFIG_UPDATE;

          responseMsg.data.sConfigUpdateResp.ret_val = ret_val;

          SafeMsgSndWrapper(response_Qid, &responseMsg,
                            sizeof(VHQRootResponseMsg) - sizeof(long), 0);
        }

        /* Clear the array entry now that it is done (especially need to clear in_use flag) */
        dbg_msg("%s: Clearing config array entry %d\n", __FUNCTION__, i);
        memset(&set_config_info_array[i], 0, sizeof(set_config_info_t));

      }
    }
  }
  return active_thread_is_present;
}


static vhq_result_t SetConfigOnThread(VHQRootRequestMsg *requestMsg)
{
  int i;
  pthread_attr_t attr;
  vhq_result_t ret_val;

  for (i = 0; i < MAX_SET_CONFIG_REQ; i++)
  {
    if (set_config_info_array[i].in_use == FALSE)
      break;
  }

  if (i >= MAX_SET_CONFIG_REQ)
  {
    dbg_warn("%s WARNING: MAX SERVER LOCK Requests has been reached\n",
             __FUNCTION__);
    return VHQ_SET_CONFIG_MAX_REQUESTS_EXCEEDED_ERROR;
  }

  dbg_msg("%s: Found open slot at %d\n", __FUNCTION__, i);

  /* Clear the array entry */
  memset(&set_config_info_array[i], 0, sizeof(set_config_info_t));

  /* Initialize and set thread detached attribute */
  pthread_attr_init(&attr);
  pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);

  /* Setup the args */
  memcpy(&set_config_info_array[i].requestMsg, requestMsg,
         sizeof(VHQRootRequestMsg));

  /* Try the lock on the new thread */
  dbg_msg(
      "%s: creating thread to call EventSchedulerLock(%d) - &set_config_info_array[i] = 0x%08x\n",
      __FUNCTION__, requestMsg->data.sConfigUpdateReq.timeout,
      &set_config_info_array[i]);
  if (pthread_create(&set_config_info_array[i].set_config_thread_id, &attr,
                     SetConfigThread, (void*) &set_config_info_array[i]) != 0)
  {
    dbg_err("%s: pthread_create FAILED\n", __FUNCTION__);
    ret_val = VHQ_THREADING_ERROR;
    /* Clear out the entry in lock_thread array */
    memset(&set_config_info_array[i], 0, sizeof(set_config_info_t));
  }
  else
  {
    set_config_info_array[i].in_use = TRUE;
    dbg_msg("%s: New thread CREATED - thread_id %08x\n", __FUNCTION__,
            set_config_info_array[i].set_config_thread_id);
    ret_val = VHQ_SUCCESS;
  }

  /* Free attribute */
  pthread_attr_destroy(&attr);

  return ret_val;
}


void ProcessServerRequests(bool blockMode)
{
  bool message_received = FALSE;
  int message_version;
  size_t responseMsg_size;
  VHQRootRequestMsg requestMsg;
  VHQRootResponseMsg_VERSION_1 responseMsg_ver1;
  VHQRootResponseMsg_VERSION_2 responseMsg_ver2;
  VHQRootResponseMsg responseMsg_cur;
  VHQRootResponseMsg *responseMsg;
#ifndef Mx2
  static int relay_AppIfcMsgCount = 0;
  static VHQRootRequestMsg relayed_AppIfcMsg;
#endif

#if EVENT_SCHED_THREAD_MODE
  /* We only want the main thread processing requests.  If the threads kicked off by EventScheduler start
   processing these requests, it is very easy to get into a deadlock state */
  if (pthread_self() != ManagerLoopThread)
  {
    dbg_err(
        "%s: Returning IMMEDIATELY since this IS NOT being called from the manager loop thread (%d)\n",
        __FUNCTION__, ManagerLoopThread);
    return;
  }
#endif

  /* Loop while messages are available */
  do
  {
    int len, expected_len;
    bool active_thread_is_present = FALSE;
#ifdef Mx2
    MSG_DIR_LIST_DATA dir_list_data;
#endif

    /* Let's clear the messages in case the OS does not clear the stack */
    memset(&requestMsg, 0, sizeof(requestMsg));
    memset(&responseMsg_ver1, 0, sizeof(responseMsg_ver1));
    memset(&responseMsg_ver2, 0, sizeof(responseMsg_ver2));
    memset(&responseMsg_cur, 0, sizeof(responseMsg_cur));
    message_received = FALSE;

    /* See if any threads that were launched to lock a server instance have returned, if any threads that were launched to set a config have returned.
     * We can't block in case if we have at least one active thread */
    if (CheckSetConfigResults())
      active_thread_is_present = TRUE;
    if (CheckLockThreadResults())
      active_thread_is_present = TRUE;

#ifdef _VOS2
    if (blockMode && !active_thread_is_present)
    {
      /* We will not set IPC_NOWAIT flag so this call will block us.  We will only wake
       up to process incoming requests.  EventScheduler will also send us a signal when it is doing processing
       so that we can check for any events that need to be sent at that time as well */
      dbg_msg("%s: Waiting for message\n", __FUNCTION__);
      len = SafeMsgRcvWrapper(request_Qid, &requestMsg,
                              sizeof(VHQRootRequestMsg) - sizeof(long), 0,
                              MSG_NOERROR,
                              TRUE);
      if ((len == -1) && (errno == EINTR))
      {
        /* We must have received a signal indicating event scheduler is ative, so lets return so we can
         check for any events that need to be sent */
        dbg_msg("%s: SafeMsgRcvWrapper() interrupted by SIGUSR1 - returning\n",
                __FUNCTION__);
        return;
      }
      else
      {
        dbg_msg(
            "%s: SafeMsgRcvWrapper() received %d byte message - sleeping 1 second\n",
            __FUNCTION__, len);
        sleep(1);
      }
    }
    else
#endif
    {
      if (active_thread_is_present)
      {
        /* Wait for other threads to finish */
        sleep(2);
      }
      /* Check if we have a message.  Do not block on this call so that
       we can still check for events if there are no incoming messages */
      len = SafeMsgRcvWrapper(request_Qid, &requestMsg,
                              sizeof(VHQRootRequestMsg) - sizeof(long), 0,
                              IPC_NOWAIT | MSG_NOERROR,
                              FALSE);
    }

    expected_len = sizeof(VHQRootRequest_VERSION_1) - sizeof(long);
    if (len >= expected_len)
    {
      dbg_msg(
          "%s: Got msg type %d (pid = %d, rcv_msg_size = %d, cur_size = %d, V2_size = %d))\n",
          __FUNCTION__, (int )requestMsg.message_type, requestMsg.clientPid,
          len, sizeof(VHQRootRequestMsg) - sizeof(long),
          sizeof(VHQRootRequest_VERSION_2) - sizeof(long));
      message_received = TRUE;

      if (len == sizeof(VHQRootRequest_VERSION_1) - sizeof(long))
      {
        responseMsg = (VHQRootResponseMsg*) &responseMsg_ver1;
        responseMsg_size = sizeof(responseMsg_ver1);
        message_version = 1;
        dbg_msg(
            "%s:  response ver = 1 - request message len = %d = sizeof(VHQRootRequest_VERSION_1)-sizeof(long) = %d\n",
            __FUNCTION__, len, sizeof(VHQRootRequest_VERSION_1) - sizeof(long));
      }
      else if (len == sizeof(VHQRootRequest_VERSION_2) - sizeof(long))
      {
        responseMsg = (VHQRootResponseMsg*) &responseMsg_ver2;
        responseMsg_size = sizeof(responseMsg_ver2);
        message_version = 2;
        dbg_msg(
            "%s:  response ver = 2 - request message len = %d = sizeof(VHQRootRequest_VERSION_2)-sizeof(long) = %d\n",
            __FUNCTION__, len, sizeof(VHQRootRequest_VERSION_2) - sizeof(long));
      }
      else
      {
        if (len != sizeof(VHQRootRequestMsg) - sizeof(long))
        {
          log_err(
              "\n\n\n\n\n%s ERROR: Unknown message version request - size = %d (VER1 size = %d, VER2 size = %d, current size = %d)\n\n\n\n\n",
              __FUNCTION__, len,
              sizeof(VHQRootRequest_VERSION_1) - sizeof(long),
              sizeof(VHQRootRequest_VERSION_2) - sizeof(long),
              sizeof(VHQRootRequestMsg) - sizeof(long));
        }
        responseMsg = &responseMsg_cur;
        responseMsg_size = sizeof(responseMsg_cur);
        message_version = 3;
        dbg_msg(
            "%s:  response ver = 3 - request message len = %d = sizeof(VHQRootRequestMsg)-sizeof(long) = %d\n",
            __FUNCTION__, len, sizeof(VHQRootRequestMsg) - sizeof(long));
      }

      switch (requestMsg.message_type)
      {
#ifdef Mx2
        case VHQ_ROOT_REQUEST_DIR_LIST:
          log_dbg("%s: VHQ_ROOT_REQUEST_DIR_LIST\n", __FUNCTION__);
          if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
          {
            /* Don't do anything because the service does not support this request yet */
            log_err(
                "%s: VHQ_ROOT_REQUEST_DIR_LIST through VHQ service is not supported\n",
                __FUNCTION__);
          }
          else
          {
            dir_list_data = requestMsg.data.sDirList;

            responseMsg->clientPid = requestMsg.clientPid;
            responseMsg->message_type = VHQ_ROOT_REQUEST_DIR_LIST;

            dbg_msg("%s: Creating file listing for %s - writing output to %s\n",
                    __FUNCTION__, dir_list_data.szDirectory,
                    dir_list_data.szOutFileName);
            responseMsg->data.sDirListResponse.bResult = CreateFileListing(
                dir_list_data.szOutFileName, dir_list_data.szDirectory);

            SafeMsgSndWrapper(response_Qid, responseMsg,
                              responseMsg_size - sizeof(long), 0);
          }
          break;
#endif

        case VHQ_GUI_INFO:
          log_dbg("%s: VHQ_GUI_INFO\n", __FUNCTION__);
          if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
          {
            char CfgFileName[512];

            memset(CfgFileName, 0, sizeof(CfgFileName));
            GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                   GetCurrentInstance());

            pthread_mutex_lock(&appArrayMutex);
            SendMsgToApp(requestMsg.receiver, TMS_EVT_GET_TMS_CONFIG_RESPONSE,
                         requestMsg.messageID, TMS_STATUS_SUCCESS, CfgFileName,
                         NULL,
                         0, NULL, 0, FALSE, 0);
            pthread_mutex_unlock(&appArrayMutex);
          }
          else
          {
            char CfgFileName[512];

            memset(CfgFileName, 0, sizeof(CfgFileName));
            GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                   GetCurrentInstance());

            responseMsg->clientPid = requestMsg.clientPid;
            responseMsg->message_type = VHQ_GUI_INFO;

            {
              bool bHeartbeatsEnabled;
              // reload config
              VHQGetParameterBool(PARAM_HEARTBEATS_ENABLED,
                                  &bHeartbeatsEnabled);

              responseMsg->data.sGuiInfo.bHeartbeatsEnabled =
                  bHeartbeatsEnabled;
            }

            responseMsg->data.sGuiInfo.structVersion = 0;
            responseMsg->data.sGuiInfo.structSize = sizeof(responseMsg->data
                .sGuiInfo);
            strncpy(responseMsg->data.sGuiInfo.version, VHQ_VERSION_STRING,
                    sizeof(responseMsg->data.sGuiInfo.version));
            strcpy(responseMsg->data.sGuiInfo.configfilepath, CfgFileName);
            strcpy(responseMsg->data.sGuiInfo.logpath, VHQ_LOG_FILE);
            strcpy(responseMsg->data.sGuiInfo.hbresultpath,
            VHQ_HB_LAST_RESULT_FILE);
            SafeMsgSndWrapper(response_Qid, responseMsg,
                              responseMsg_size - sizeof(long), 0);
          }
          break;

#ifdef Mx2
        case VHQ_REQUEST_MESSAGE_ID:
          log_dbg("%s: VHQ_REQUEST_MESSAGE_ID\n", __FUNCTION__);
          if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
          {
            /* Don't do anything because the service does not support this request yet */
            log_err(
                "%s: VHQ_REQUEST_MESSAGE_ID through VHQ service is not supported\n",
                __FUNCTION__);
          }
          else
          {
            responseMsg->clientPid = requestMsg.clientPid;
            responseMsg->message_type = VHQ_REQUEST_MESSAGE_ID;
            responseMsg->data.sMsgIdResp.msg_id = GetCurrentMessageID(
                requestMsg.data.sMdgIdReqData.comm_id,
                requestMsg.data.sMdgIdReqData.rx_msg_id,
                requestMsg.data.sMdgIdReqData.operation_id,
                requestMsg.data.sMdgIdReqData.comm_id_closed);
            SafeMsgSndWrapper(response_Qid, responseMsg,
                              responseMsg_size - sizeof(long), 0);
          }
          break;
#endif

        case VHQ_REQUEST_HB:
          log_dbg("%s: VHQ_REQUEST_HB (pid = %d)\n", __FUNCTION__, getpid());
          if (message_version >= 2)
          {
            uint32 secondsToHB;
            event_id_t hb_event_id = EVENT_ID_INVALID;
            bool hb_enabled = FALSE;

            /* If we got here it means heartbeats are now enabled. Let's set the parameter if it is not already set.
             If we got here via a GUI request, it may not be set */
            VHQGetParameterBool(PARAM_HEARTBEATS_ENABLED, &hb_enabled);
            if (!hb_enabled)
            {
              dbg_notice(
                  "%s: Heartbeats are not enabled in INI file yet - Enabling them\n",
                  __FUNCTION__);
              VHQSetParameterBool(PARAM_HEARTBEATS_ENABLED, TRUE, TRUE);
            }

            if (requestMsg.data.sHBReq.seconds_to_HB <= 0)
              secondsToHB = 0;
            else
              secondsToHB = requestMsg.data.sHBReq.seconds_to_HB;

            /* Do we need to handle HB retry for Applicatioon requests? Might be useful during KEM HB */
            hb_event_id = ScheduleSingleHeartbeat(secondsToHB,
                                                  requestMsg.data.sHBReq.iFlags,
                                                  0, NULL);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              if (hb_event_id != EVENT_ID_INVALID)
              {
                int ret_val;

                if (requestMsg.data.sHBReq.use_TMS_API)
                  ret_val = TMS_STATUS_SUCCESS;
                else
                  ret_val = VHQ_STATUS_SUCCESS;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_CALL_SERVER_RESPONSE, TMS_STATUS_SUCCESS)\n",
                    __FUNCTION__);
                pthread_mutex_lock(&appArrayMutex);
                SendMsgToApp(requestMsg.receiver, TMS_EVT_CALL_SERVER_RESPONSE,
                             requestMsg.messageID, ret_val,
                             VHQ_HB_LAST_RESULT_FILE,
                             NULL, 0, NULL, 0, FALSE, 0);
                pthread_mutex_unlock(&appArrayMutex);
              }
              else
              {
                int ret_val;

                if (requestMsg.data.sHBReq.use_TMS_API)
                  ret_val = TMS_STATUS_ERROR;
                else
                  ret_val = VHQ_STATUS_ERROR;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_CALL_SERVER_RESPONSE, TMS_STATUS_ERROR)\n",
                    __FUNCTION__);
                pthread_mutex_lock(&appArrayMutex);
                SendMsgToApp(requestMsg.receiver, TMS_EVT_CALL_SERVER_RESPONSE,
                             requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                             0, FALSE, 0);
                pthread_mutex_unlock(&appArrayMutex);
              }
            }
            else
            {

              responseMsg->clientPid = requestMsg.clientPid;
              responseMsg->message_type = VHQ_REQUEST_HB;

              memset(responseMsg->data.sHBResp.HB_resp_file, 0,
                     sizeof(responseMsg->data.sHBResp.HB_resp_file));
              if (hb_event_id != EVENT_ID_INVALID)
              {
                responseMsg->data.sHBResp.ret_val = VHQ_SUCCESS;
                strcpy(responseMsg->data.sHBResp.HB_resp_file,
                VHQ_HB_LAST_RESULT_FILE);
              }
              else
              {
                responseMsg->data.sHBResp.ret_val = VHQ_HB_FAILURE;
              }

              SafeMsgSndWrapper(response_Qid, responseMsg,
                                responseMsg_size - sizeof(long), 0);
            }
          }
          break;

        case VHQ_REGISTER_APP:
          log_dbg("%s: VHQ_REGISTER_APP\n", __FUNCTION__);
          if (message_version >= 2)
          {
            /* The receiver field will still be the user in this case */
            int ret_val = RegisterApp(
                requestMsg.data.sRegAppReq.reg, requestMsg.receiver,
                requestMsg.data.sRegAppReq.event_mask,
                requestMsg.data.sRegAppReq.receiver_name, requestMsg.clientPid,
                requestMsg.data.sRegAppReq.use_TMS_API,
                NULL,
                requestMsg.data.sRegAppReq.app_type,
                requestMsg.data.sRegAppReq.app_version,
                requestMsg.data.sRegAppReq.app_customType,
                requestMsg.data.sRegAppReq.app_additionalInfo);

            /* Only send response if the app is registering, or if there was a failure during unregister */
            if (requestMsg.data.sRegAppReq.reg || (ret_val != VHQ_SUCCESS))
            {
              if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
              {
                pthread_mutex_lock(&appArrayMutex);
                SendMsgToApp(requestMsg.data.sRegAppReq.receiver_name,
                TMS_EVT_REGISTER_APP_RESPONSE,
                             requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                             0, FALSE, 0);
                pthread_mutex_unlock(&appArrayMutex);
              }
              else
              {
                responseMsg->clientPid = requestMsg.clientPid;
                responseMsg->message_type = VHQ_REGISTER_APP;

                responseMsg->data.sRegAppResp.ret_val = ret_val;

                SafeMsgSndWrapper(response_Qid, responseMsg,
                                  responseMsg_size - sizeof(long), 0);
              }
            }
          }
          break;

        case VHQ_REQUEST_CONFIG_UPDATE:
          log_dbg("%s: VHQ_REQUEST_CONFIG_UPDATE\n", __FUNCTION__);
          if (message_version >= 2)
          {
            int ret_val;
            bool send_response = FALSE;

            pthread_mutex_lock(&appArrayMutex);
            ClearAppCustomData(requestMsg.receiver, customAppInfo);  //intentionally ignoring the return val on this function: 1) it always succeeds if receiver is found 2) still need to do what they asked even it this fails.
            pthread_mutex_unlock(&appArrayMutex);

            ret_val = SetConfigOnThread(&requestMsg);

            if (ret_val != VHQ_SUCCESS)
            {
              send_response = TRUE;
            }

            if (send_response)
            {
              if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
              {
                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_SET_TMS_CONFIG_RESPONSE, %d)\n",
                    __FUNCTION__, ret_val);
                pthread_mutex_lock(&appArrayMutex);
                SendMsgToApp(requestMsg.receiver,
                TMS_EVT_SET_TMS_CONFIG_RESPONSE,
                             requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                             0, FALSE, 0);
                pthread_mutex_unlock(&appArrayMutex);
              }
              else
              {
                responseMsg->clientPid = requestMsg.clientPid;
                responseMsg->message_type = VHQ_REQUEST_CONFIG_UPDATE;

                responseMsg->data.sConfigUpdateResp.ret_val = ret_val;

                SafeMsgSndWrapper(response_Qid, responseMsg,
                                  responseMsg_size - sizeof(long), 0);
              }
            }

          }
          break;

        case VHQ_REQUEST_APP_PARAM_UPDATE:
          log_dbg(
              "%s: VHQ_REQUEST_APP_PARAM_UPDATE (appParamUpdateNotification = %d)\n",
              __FUNCTION__,
              requestMsg.data.sAppParmUpdateReq.appParamUpdateNotification);

          if (requestMsg.data.sAppParmUpdateReq.appParamUpdateNotification)
          {
            /* this MUST be set for parameter update notificaitons or else something went wrong */
            if (requestMsg.respondToService)
            {
              int ret_val = ProcessAppGeneratedParameterUpdate(
                  requestMsg.data.sAppParmUpdateReq.receiver,
                  requestMsg.data.sAppParmUpdateReq.param_file,
                  requestMsg.data.sAppParmUpdateReq.param_update_count,
                  requestMsg.data.sAppParmUpdateReq.param_update_time, FALSE,
                  NULL);
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.data.sAppParmUpdateReq.receiver,
              TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
            else
            {
              dbg_err(
                  "%s ERROR: VHQ_REQUEST_APP_PARAM_UPDATE - appParamUpdateNotification is set but respondToService is not!!!\n",
                  __FUNCTION__);
            }
          }
          else
          {
            responseMsg->clientPid = requestMsg.clientPid;
            responseMsg->message_type = VHQ_REQUEST_APP_PARAM_UPDATE;

            responseMsg->data.sAppParmUpdateResp.ret_val =
                PutAppParameterFileByName(
                    requestMsg.data.sAppParmUpdateReq.receiver,
                    requestMsg.data.sAppParmUpdateReq.param_file,
                    responseMsg->data.sAppParmUpdateResp.additional_info,
                    sizeof(responseMsg->data.sAppParmUpdateResp.additional_info),
                    requestMsg.data.sAppParmUpdateReq.param_update_type);
#ifdef Mx2
            SafeMsgSndWrapper(response_Qid, responseMsg,
                              responseMsg_size - sizeof(long), 0);
#else
          /* Stay on the internal queue for this message on MX8 */
          SafeMsgSndWrapper(root_response_Qid, responseMsg, responseMsg_size - sizeof(long), 0);
#endif
          }
          break;

        case VHQ_REQUEST_EVENT_NOTIFICATION:
          log_dbg("%s: VHQ_REQUEST_EVENT_NOTIFICATION\n", __FUNCTION__);
          responseMsg->clientPid = requestMsg.clientPid;
          responseMsg->message_type = VHQ_REQUEST_EVENT_NOTIFICATION;

          responseMsg->data.sEventNotifyResp.ret_val = NotifyApps(
              requestMsg.data.sEventNotifyReq.event_mask,
              requestMsg.data.sEventNotifyReq.filename,
              requestMsg.data.sEventNotifyReq.notificationDataInteger,
              VHQ_SUCCESS, EVENT_SET_ID_INVALID, EVENT_ID_INVALID, TRUE)
              == VHQ_SUCCESS;

#ifdef Mx2
          SafeMsgSndWrapper(response_Qid, responseMsg,
                            responseMsg_size - sizeof(long), 0);
#else
        /* Stay on the internal queue for this message on MX8 */
        SafeMsgSndWrapper(root_response_Qid, responseMsg, responseMsg_size - sizeof(long), 0);
#endif
          break;

        case VHQ_SET_APP_STATE:
          log_dbg("%s: VHQ_SET_APP_STATE\n", __FUNCTION__);
          pthread_mutex_lock(&appArrayMutex);
          SetAppState(requestMsg.receiver,
                      requestMsg.data.sAppIfcReq.appStatus);
          pthread_mutex_unlock(&appArrayMutex);
          break;

#ifndef Mx2
      case VHQ_APP_INTERFACE_MESSAGE:
        /* We don't want to get into a loop continually sending the same message */
        if (memcmp(&relayed_AppIfcMsg, &requestMsg, len) == 0)
        {

          if (relay_AppIfcMsgCount < 10)
          {
            /* Passing VHQ_APP_INTERFACE_MESSAGE back to queue for AppIntegLib to read */
            dbg_msg( "%s: Relaying VHQ_APP_INTERFACE_MESSAGE message to VHQAppIntegLib - %d count\n", __FUNCTION__, relay_AppIfcMsgCount);
            relay_AppIfcMsgCount++;
            SafeMsgSndWrapper(request_Qid,  &requestMsg, len, 0);

            /* Give VHQAppIntegLib a chance to read the message */
            sleep(5);
          }
          else
          {
            dbg_msg( "%s: Relayed VHQ_APP_INTERFACE_MESSAGE message to VHQAppIntegLib 10 times - giving up\n", __FUNCTION__);
          }
        }
        else
        {
          dbg_msg( "%s: Relaying VHQ_APP_INTERFACE_MESSAGE message to VHQAppIntegLib for first time\n", __FUNCTION__);
          memset(&relayed_AppIfcMsg, 0, sizeof(&relayed_AppIfcMsg));
          memcpy(&relayed_AppIfcMsg, &requestMsg, len);
          relay_AppIfcMsgCount = 0;
          SafeMsgSndWrapper(request_Qid,  &requestMsg, len, 0);
          sleep(5);
        }
        break;
#endif

        case VHQ_REQUEST_SERVER_INSTANCE:
          log_dbg("%s: VHQ_REQUEST_SERVER_INSTANCE\n", __FUNCTION__);
          if (message_version >= 2)
          {
            bool send_response = TRUE;
            int event_type = TMS_EVT_GET_SERVER_INSTANCE;
            vhq_result_t ret_val = TMS_STATUS_EINVAL;
            char server_instance[MAX_SERVER_INSTANCE_NAME_LEN];

            if (requestMsg.data.sServerInstanceParam.lock_instance)
            {
              send_response = FALSE;

              /* Lock and notify scheduler that instance was locked */
              ret_val = LockServerInstanceOnThread(&requestMsg);

              if (ret_val != VHQ_SUCCESS)
              {
                event_type = TMS_EVT_LOCK_SERVER_INSTANCE;
                send_response = TRUE;
              }
            }
            else if (requestMsg.data.sServerInstanceParam.release_instance)
            {
              event_type = TMS_EVT_RELEASE_SERVER_INSTANCE;
              memset(server_instance, 0, sizeof(server_instance));
              dbg_msg(
                  "%s: release_instance is set - calling ReleaseServerInstanceLock(%s)\n",
                  __FUNCTION__,
                  requestMsg.data.sServerInstanceParam.server_instance);
              ret_val = ReleaseServerInstanceLock(
                  requestMsg.data.sServerInstanceParam.server_instance);
              dbg_msg("%s: ReleaseServerInstanceLock returned %d\n",
                      __FUNCTION__, ret_val);
              /* Notify scheduler that instance was released */
              if (ret_val == VHQ_SUCCESS)
              {
                SetEventSchedulerTimerExpired(TRUE);
              }
            }
            else if (requestMsg.data.sServerInstanceParam.delete_instance)
            {
              char user_name[64] = { 0 };
              bool force_delete = FALSE;
              bool deleteAll = FALSE;
              char **InstanceList = NULL;
              int num_instances = 0;

              event_type = TMS_EVT_DELETE_SERVER_INSTANCE;
              memset(server_instance, 0, sizeof(server_instance));
              if (GetRecevierUser(requestMsg.receiver, user_name))
              {
                if ((strncmp(user_name, "sys6", strlen("sys6")) == 0)
                    && ((strcmp(requestMsg.receiver, "vhq-sysmode") == 0)
                        || (strncmp(requestMsg.receiver,
                        VHQ_IDS_EXECUTABLE_NAME,
                                    strlen(requestMsg.receiver)) == 0)))
                {
                  if (!strcmp(
                      requestMsg.data.sServerInstanceParam.server_instance,
                      PRIMARY_SERVER_INSTANCE_NAME))
                  {
                    deleteAll = TRUE;
                    force_delete = TRUE;
                  }
                }
              }
              if (deleteAll)
              {
                ret_val = DeleteAllInstanceFiles();
              }
              else
              {
                dbg_msg(
                    "%s: delete_instance is set - calling DeleteServerInstance(%s)\n",
                    __FUNCTION__,
                    requestMsg.data.sServerInstanceParam.server_instance);
                ret_val = DeleteServerInstance(
                    requestMsg.data.sServerInstanceParam.server_instance,
                    force_delete);
                dbg_msg("%s: DeleteServerInstance returned %d\n", __FUNCTION__,
                        ret_val);
              }
            }
            else
            {
              /* Fall through to GET_SERVER_INSTANCE if lock/release are not set */
              event_type = TMS_EVT_GET_SERVER_INSTANCE;
              dbg_msg(
                  "%s: get_instance is set - calling GetCurrentInstance()\n",
                  __FUNCTION__);
              strcpy(server_instance, GetCurrentInstance());
              ret_val = TMS_STATUS_SUCCESS;
            }

            if (send_response)
            {
              if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
              {
                pthread_mutex_lock(&appArrayMutex);
                SendMsgToApp(requestMsg.receiver, event_type,
                             requestMsg.messageID, ret_val, server_instance,
                             NULL,
                             0, NULL, 0, FALSE, 0);
                pthread_mutex_unlock(&appArrayMutex);
              }
              else
              {
                responseMsg->clientPid = requestMsg.clientPid;
                responseMsg->message_type = VHQ_REQUEST_SERVER_INSTANCE;

                responseMsg->data.sRegAppResp.ret_val = ret_val;

                SafeMsgSndWrapper(response_Qid, responseMsg,
                                  responseMsg_size - sizeof(long), 0);
              }
            }
          }
          break;

        case VHQ_REQUEST_APPLICATION_EVENT:
          log_dbg("%s: VHQ_REQUEST_APPLICATION_EVENT\n", __FUNCTION__);
          if (message_version >= 2)
          {
            vhq_result_t ret_val = TMS_STATUS_EINVAL;
            char *description = NULL;
            char *details = NULL;
            device_event_content_t device_event_content;

            memset(&device_event_content, 0, sizeof(device_event_content_t));

            device_event_content.event_mask = EVENT_APPLICATION_GENERATED;
            if (strlen(requestMsg.receiver) > 0)
            {
              strncpy(device_event_content.appName, requestMsg.receiver,
                      sizeof(device_event_content.appName) - 1);
            }

            device_event_content.severity = requestMsg.data.sAppEvents.severity;

            /* Read the description into memory */
            if (strlen(requestMsg.data.sAppEventParm.description_file_name) > 0)
            {
              if (FileExists(
                  requestMsg.data.sAppEventParm.description_file_name))
              {
                uint32 file_size = FileSize(
                    requestMsg.data.sAppEventParm.description_file_name);

                if (file_size > 0)
                {
                  description = malloc(file_size + 1);

                  if (description)
                  {
                    int descriptionFileHandle;

                    memset(description, 0, file_size + 1);
                    descriptionFileHandle = open(
                        requestMsg.data.sAppEventParm.description_file_name,
                        O_RDONLY);
                    if (descriptionFileHandle != -1)
                    {
                      int res;
                      res = read(descriptionFileHandle, description, file_size);
                      if (res == -1)
                      {
                        log_err(
                            "%s: ERROR in reading from file %s\n",
                            __FUNCTION__,
                            requestMsg.data.sAppEventParm.description_file_name);
                      }
                      else
                      {
                        strncpy(device_event_content.description, description,
                                sizeof(device_event_content.description) - 1);
                      }
                      close(descriptionFileHandle);
                    }
                    dbg_msg(
                        "%s: read description [%s] from file %s\n",
                        __FUNCTION__, description,
                        requestMsg.data.sAppEventParm.description_file_name);
                  }
                }
              }
            }

            /* Read the details into memory */
            if (strlen(requestMsg.data.sAppEventParm.details_file_name) > 0)
            {
              if (FileExists(requestMsg.data.sAppEventParm.details_file_name))
              {
                uint32 file_size = FileSize(
                    requestMsg.data.sAppEventParm.details_file_name);

                if (file_size > 0)
                {
                  details = malloc(file_size + 1);

                  if (details)
                  {
                    int detailsFileHandle;

                    memset(details, 0, file_size + 1);
                    detailsFileHandle = open(
                        requestMsg.data.sAppEventParm.details_file_name,
                        O_RDONLY);
                    if (detailsFileHandle != -1)
                    {
                      int res;
                      res = read(detailsFileHandle, details, file_size);
                      if (res == -1)
                      {
                        log_err(
                            "%s: ERROR in reading from file %s\n", __FUNCTION__,
                            requestMsg.data.sAppEventParm.details_file_name);
                      }
                      else
                      {
                        strncpy(device_event_content.details, details,
                                sizeof(device_event_content.details) - 1);
                      }
                      close(detailsFileHandle);
                    }
                    dbg_msg("%s: read details [%s] from file %s\n",
                            __FUNCTION__, details,
                            requestMsg.data.sAppEventParm.details_file_name);
                  }
                }
              }
            }

            ret_val = sendEvents(EVENT_APPLICATION_GENERATED,
                                 &device_event_content);

            if (description)
              free(description);
            if (details)
              free(details);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.receiver, TMS_EVT_APP_ALERT_RESULT,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
            else
            {
              responseMsg->clientPid = requestMsg.clientPid;
              responseMsg->message_type = VHQ_REQUEST_SERVER_INSTANCE;

              responseMsg->data.sRegAppResp.ret_val = ret_val;

              SafeMsgSndWrapper(response_Qid, responseMsg,
                                responseMsg_size - sizeof(long), 0);
            }
          }
          break;

        case VHQ_REQUEST_REGISTRATION_DELAY:
          log_dbg("%s: VHQ_REQUEST_REGISTRATION_DELAY\n", __FUNCTION__);
          WaitForAppRegistration();

          responseMsg->clientPid = requestMsg.clientPid;
          responseMsg->message_type = VHQ_REQUEST_REGISTRATION_DELAY;

          SafeMsgSndWrapper(response_Qid, responseMsg,
                            responseMsg_size - sizeof(long), 0);

          break;

        case VHQ_CLEAR_APP_INFO_CACHE:
          log_dbg("%s: VHQ_CLEAR_APP_INFO_CACHE\n", __FUNCTION__);
          if (message_version >= 2)
          {
            vhq_result_t ret_val = TMS_STATUS_ERROR;

            pthread_mutex_lock(&appArrayMutex);
            ret_val = ClearAppCustomData(requestMsg.receiver, customAppInfo);
            pthread_mutex_unlock(&appArrayMutex);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.receiver, TMS_EVT_CLEAR_APP_INFO_RESULT,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
            else
            {
              log_err(
                  "%s: VHQ_CLEAR_APP_INFO_CACHE received but respondToService was not set - don't know how to respond\n",
                  __FUNCTION__);
            }
          }
          break;

        case VHQ_ANTISKIMMING_TEST_RESULTS:
          DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
                   "%s: VHQ_ANTISKIMMING_TEST_RESULTS\n", __FUNCTION__);

          if (message_version >= 3)
          {
            vhq_result_t ret_val = TMS_STATUS_EINVAL;
            device_event_content_t device_event_content;

            memset(&device_event_content, 0, sizeof(device_event_content_t));

            device_event_content.event_mask = EVENT_ANTISKIMMING_TEST_RESULTS;

            if (strlen(requestMsg.receiver) > 0)
            {
              strncpy(device_event_content.appName, requestMsg.receiver,
                      sizeof(device_event_content.appName) - 1);
            }

            device_event_content.severity = requestMsg.data.sAppEvents.severity;

            if (strlen(requestMsg.data.sAppEvents.description) > 0)
            {
              DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: description [%s]\n",
                       __FUNCTION__, requestMsg.data.sAppEvents.description);
              strncpy(device_event_content.description,
                      requestMsg.data.sAppEvents.description,
                      sizeof(device_event_content.description) - 1);
            }

            if (strlen(requestMsg.data.sAppEvents.details) > 0)
            {
              DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: details [%s]\n",
                       __FUNCTION__, requestMsg.data.sAppEvents.details);
              strncpy(device_event_content.details,
                      requestMsg.data.sAppEvents.details,
                      sizeof(device_event_content.details) - 1);
            }

            ret_val = sendEvents(EVENT_ANTISKIMMING_TEST_RESULTS,
                                 &device_event_content);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.receiver,
              TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
            else
            {
              dbg_msg(
                  "%s: VHQ_ANTISKIMMING_TEST_RESULTS received but respondToService was not set - don't know how to respond\n",
                  __FUNCTION__);
            }
          }
          break;

        case VHQ_REQUEST_SOFTWARE_UPDATE:
          log_dbg("%s: VHQ_REQUEST_SOFTWARE_UPDATE (pid = %d)\n", __FUNCTION__,
                  getpid());
          if (message_version >= 2)
          {
            vhq_result_t ret_val = TMS_STATUS_EINVAL;

            ret_val = ScheduleGetSwUpdate(
                requestMsg.receiver, requestMsg.data.sSwUpdateReq.update_type,
                requestMsg.data.sSwUpdateReq.sw_ref_no,
                requestMsg.data.sSwUpdateReq.reference);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              if (ret_val == VHQ_SUCCESS)
              {
                ret_val = TMS_STATUS_SUCCESS;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_APP_GET_SW_UPDATE, TMS_STATUS_SUCCESS)\n",
                    __FUNCTION__);
              }
              else
              {
                ret_val = TMS_STATUS_ERROR;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_APP_GET_SW_UPDATE, TMS_STATUS_ERROR)\n",
                    __FUNCTION__);
              }
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.receiver, TMS_EVT_APP_GET_SW_UPDATE,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
            else
            {
              dbg_msg(
                  "%s: Get SW Update scheduled but respondToService was not set - don't know how to respond\n",
                  __FUNCTION__);
            }
          }
          break;

        case VHQ_REQUEST_APPLICATION_EVENT_2:
          log_dbg("%s: VHQ_REQUEST_APPLICATION_EVENT_2\n", __FUNCTION__);
          if (message_version >= 2)
          {
            vhq_result_t ret_val = TMS_STATUS_EINVAL;
            device_event_content_t device_event_content;

            memset(&device_event_content, 0, sizeof(device_event_content_t));

            device_event_content.event_mask = EVENT_APPLICATION_GENERATED;

            if (strlen(requestMsg.receiver) > 0)
            {
              strncpy(device_event_content.appName, requestMsg.receiver,
                      sizeof(device_event_content.appName) - 1);
            }

            if (strlen(requestMsg.data.sAppEvents2.eventName) > 0)
            {
              DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: eventName [%s]\n",
                       __FUNCTION__, requestMsg.data.sAppEvents2.eventName);
              strncpy(device_event_content.eventName,
                      requestMsg.data.sAppEvents2.eventName,
                      sizeof(device_event_content.eventName) - 1);
            }

            if (strlen(requestMsg.data.sAppEvents2.additional_info) > 0)
            {
              DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: additional_info [%s]\n",
                       __FUNCTION__,
                       requestMsg.data.sAppEvents2.additional_info);
              strncpy(device_event_content.description,
                      requestMsg.data.sAppEvents2.additional_info,
                      sizeof(device_event_content.description) - 1);
            }

            ret_val = sendEvents(EVENT_APPLICATION_GENERATED,
                                 &device_event_content);

            if (requestMsg.respondToService)  // defaults to FALSE for old messages due to setting request msg to 0 above
            {
              if (ret_val == VHQ_SUCCESS)
              {
                ret_val = TMS_STATUS_SUCCESS;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_APP_ALERT_RESULT, TMS_STATUS_SUCCESS)\n",
                    __FUNCTION__);
              }
              else
              {
                ret_val = TMS_STATUS_ERROR;

                dbg_msg(
                    "%s: calling SendMsgToApp(TMS_EVT_APP_ALERT_RESULT, TMS_STATUS_ERROR)\n",
                    __FUNCTION__);
              }
              pthread_mutex_lock(&appArrayMutex);
              SendMsgToApp(requestMsg.receiver, TMS_EVT_APP_ALERT_RESULT,
                           requestMsg.messageID, ret_val, NULL, NULL, 0, NULL,
                           0, FALSE, 0);
              pthread_mutex_unlock(&appArrayMutex);
            }
          }
          break;
        default:
#ifdef Mx2
          dbg_msg("%s: Ignoring message type %d - Not Applicable to V/OS\n",
                  __FUNCTION__, requestMsg.message_type);
#else
        dbg_msg( "%s: Ignoring message type %d - Not Applicable to MX8 APP IFC\n", __FUNCTION__, requestMsg.message_type);
#endif
          break;
      }
    }
    else if (len > 0)
    {
      dbg_msg("%s: Got msg type %d (len = %d, pid = %d)\n", __FUNCTION__,
              (int )requestMsg.message_type, len, requestMsg.clientPid);
      message_received = TRUE;
    }
    else
      message_received = FALSE;
  }
  while (message_received);

  return;
}

#ifdef Mx2
static void CopyLogFilesToTmp()
{
  char cmd[256] = { 0 };
  if (!DirExists(VHQ_TMP_DUMP))
  {
    dbg_msg("%s: %s does not exist - creating it\n", __FUNCTION__,
            VHQ_TMP_DUMP);
    if (CreateDir(VHQ_TMP_DUMP, 0777) == FALSE)
      log_err("%s: Failed to create directory: %s\n", __FUNCTION__,
              VHQ_TMP_DUMP);
  }

  /* If the VHQSrvPubKey.crt file does not exist, the files have been deleted */
  if (!(FileExists(VHQ_TMP_DUMP "/VHQSrvPubKey.crt")))
  {
    memset(cmd, 0, sizeof(cmd));
    snprintf(cmd, sizeof(cmd), "cp %s %s %s %s %s %s/ > /dev/null 2>&1",
             SRV_PUB_KEY_CERTFILE, SRV_SSL_CERTFILE, SRV_FTPS_CERTFILE,
             VHQ_PRIVATE_CONN_PROFILE, VHQ_EVENT_SET_FILE, VHQ_TMP_DUMP);
    system(cmd);

    sync();
    sync();
    sync();
  }
}
#endif


event_set_id_t ScheduleSingleHeartbeat(uint32 secondsToHB, int flags,
                                       int retryFreq, char *serverInstance)
{
  operation_set_event_t hb_events[1];
  bool hb_enabled = FALSE;
  heartbeat_parms hbParams;
  bool keys_exchanged = FALSE;
  event_set_id_t hb_event_id = EVENT_ID_INVALID;

  VHQGetParameterBool(PARAM_HEARTBEATS_ENABLED, &hb_enabled);
  if (!hb_enabled)
  {
    log_alert("%s: Heartbeats are not enabled in INI file\n", __FUNCTION__);
    return EVENT_SET_ID_INVALID;
  }

  VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
  log_alert("%s: flags= %d, keys_exchanged = %d\n", __FUNCTION__, flags,
            keys_exchanged);

  memset(hb_events, 0, sizeof(hb_events));
  hbParams.iFlags = flags;
  hb_events[0].opCbType = cbHeartbeat;
  hb_events[0].opData = (void*) &hbParams;
  hb_events[0].opDataSize = sizeof(hbParams);

  if (serverInstance == NULL)
  {
    hb_event_id = ScheduleEventSet(FALSE, secondsToHB, RECUR_UNIT_SECOND, 0, 0,
                                   retryFreq, 0, hb_events, 1,
                                   EVENT_SET_ID_INVALID,
                                   EVENT_TIMER_RTC, GetCurrentInstance(),
                                   cbStandard, cbStandard,
                                   keys_exchanged ? FALSE : TRUE);
  }
  else
  {
    hb_event_id = ScheduleEventSet(FALSE, secondsToHB, RECUR_UNIT_SECOND, 0, 0,
                                   retryFreq, 0, hb_events, 1,
                                   EVENT_SET_ID_INVALID,
                                   EVENT_TIMER_RTC, serverInstance, cbStandard,
                                   cbStandard, keys_exchanged ? FALSE : TRUE);
  }

  return hb_event_id;
}

#ifdef _VOS2

/******************************************************************************
 * Function:      ScheduleVCDownloadResume
 * Description:   Function cancels regular HBs and creates one the causes a download resume.
 *
 * Parameters:    none
 *
 * Return Value:
 *****************************************************************************/
void ScheduleVCDownloadResume()
{
  int retries;
  event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;

  HeartbeatEventID = GetHeartBeatEventID(NULL);
  /* Cancel any existing regular HB event */
  for (retries = 0; HeartbeatEventID != EVENT_SET_ID_INVALID && retries < 3;
      retries++)
  {
    if (!CancelEventSet(HeartbeatEventID, TRUE))
      sleep(1);
    else
      break;
  }
  SetHeartBeatEventID(NULL, EVENT_SET_ID_INVALID);
  ScheduleSingleHeartbeat(0, VC_HB_FLAG_RESUME_DOWNLOAD, 0, NULL);
}
#endif

static pthread_mutex_t HbMutex = PTHREAD_MUTEX_INITIALIZER;


void ScheduleRecurringHeartbeat(bool AllowHBNow)
{
  bool heartbeats_enabled = FALSE;
  int retries;
  event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;

  /* Don't schedule the recurring HB when we are in registration process */
  if (deviceRegistrationInProgress)
  {
    return;
  }

  /* Lock instance to prevent access to not up-to-date HeartbeatEventID value */
  pthread_mutex_lock(&HbMutex);
  HeartbeatEventID = GetHeartBeatEventID(NULL);

  /* Cancel any existing regular HB event */
  for (retries = 0; HeartbeatEventID != EVENT_SET_ID_INVALID && retries < 3;
      retries++)
  {
    if (!CancelEventSet(HeartbeatEventID, TRUE))
      sleep(1);
    else
      break;
  }

  SetHeartBeatEventID(NULL, EVENT_SET_ID_INVALID);

  /* Exit if no heartbeats are enabled */
  VHQGetParameterBool(PARAM_HEARTBEATS_ENABLED, &heartbeats_enabled);
  if (heartbeats_enabled)
  {
    /*
     * Schedule regular HBs
     * On the boot-up we have no communication interface, so we use reduced heartbeat rate value.
     * Once we send something to the server we will recreate regular HBs inside of VHQManagerLoop().
     */
    uint32 heartbeat_rate;
    uint32 hb_fail_retry_thresh;
    uint32 next_heartbeat_time;

    scheduled_comType = GetComType();
    heartbeat_rate = GetHBFreq(&hb_fail_retry_thresh, scheduled_comType);

    /* Heartbeats enabled so figure out when to run the first heartbeat */
    /* If HB freq is set to 0 we will not have an automatic HB except of first one. We will ALWAYS send first HB (if HBs is enabled) and only after it the app will control all HB's */
    if (heartbeat_rate != 0)
    {
      uint32 retry_freq = 0;
      operation_set_event_t hb_events[1];
      bool keys_exchanged = FALSE;

      dbg_msg("scheduled COM TYPE=\"%s\"\n",
              get_ComType_name(scheduled_comType));

      VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);

      next_heartbeat_time = GetSecondsToNextHeartbeat(heartbeat_rate);
      if ((next_heartbeat_time == 0) && (!AllowHBNow))
      {
        dbg_msg(
            "%s: Heartbeat can happen now but not allowed - adding HBFreq %d seconds to next_heartbeat_time\n",
            __FUNCTION__, heartbeat_rate);
        next_heartbeat_time += heartbeat_rate;
      }
      dbg_msg(
          "%s: Heartbeats enabled every %d seconds - Scheduling next one for %d seconds\n",
          __FUNCTION__, heartbeat_rate, next_heartbeat_time);

      if (heartbeat_rate >= hb_fail_retry_thresh)
      {
        VHQGetParameterUint32(PARAM_HB_FAILURE_RETRY_FREQUENCY, &retry_freq,
                              DEFAULT_BASE);
        dbg_msg(
            "%s: Heartbeats threshold >= retry threshold (%d) - setting retry frequency to %d\n",
            __FUNCTION__, hb_fail_retry_thresh, retry_freq);
      }

      memset(hb_events, 0, sizeof(hb_events));
      hb_events[0].opCbType = cbHeartbeat;
      hb_events[0].opData = NULL;
      hb_events[0].opDataSize = 0;

      HeartbeatEventID = ScheduleEventSet(TRUE, next_heartbeat_time,
                                          RECUR_UNIT_SECOND, heartbeat_rate, 0,
                                          retry_freq, 0, hb_events, 1,
                                          EVENT_SET_ID_INVALID,
                                          EVENT_TIMER_RTC, GetCurrentInstance(),
                                          cbStandard, cbStandard,
                                          keys_exchanged ? FALSE : TRUE);

      SetHeartBeatEventID(NULL, HeartbeatEventID);
    }
    else
      dbg_trace(
          "%s: HB Frequency set to 0 - Allowing app to control all HB's\n",
          __FUNCTION__);
  }
  else
    dbg_trace("%s: Heartbeats are not enabled yet\n", __FUNCTION__);

  /* Release lock after processing */
  pthread_mutex_unlock(&HbMutex);
}


vhq_result_t ScheduleRecurringDeviceEvent(
    event_mask_t event_mask, device_event_content_t *device_event_content)
{
  operation_set_event_t device_events[1];
  device_event_parms _device_event_parms;
  event_set_id_t event_id = EVENT_SET_ID_INVALID;
  vhq_result_t ret_val = VHQ_ERROR_EVENT_GENERATION_FAILURE;

  if (event_mask)
  {
    dbg_msg("%s: Setting up device_event\n", __FUNCTION__);

    /* We can't leave any pointers to the stack so copy the structures to
     the storage in del_file parameters */
    memset(&_device_event_parms, 0, sizeof(device_event_parms));

    if (device_event_content)
    {
      if (event_mask != device_event_content->event_mask)
      {
        device_event_content->event_mask = event_mask;
        dbg_msg("%s: Inconsistency in event mask, update\n", __FUNCTION__);
      }

      memcpy(&_device_event_parms.device_event_content, device_event_content,
             sizeof(device_event_content_t));
    }
    else
    {
      _device_event_parms.device_event_content.event_mask = event_mask;
    }

    /* Setup the rest of parameters */
    _device_event_parms.srv_msg_type = SRV_MSG_TYPE_UNKNOWN;
    _device_event_parms.srv_op_type = SRV_OP_TYPE_UNKNOWN;

    /* Schedule the event */
    dbg_msg(
        "%s: Scheduling device_event Event - pCbData = &data_parms = 0x%08x\n",
        __FUNCTION__, &_device_event_parms);

    device_events[0].opCbType = cbDeviceEventProcessor;
    device_events[0].opData = (void*) &_device_event_parms;
    device_events[0].opDataSize = sizeof(_device_event_parms);

    ret_val = ScheduleEventSet(TRUE, 0, RECUR_UNIT_SECOND, 3600, 0, 0, 0,
                               device_events, 1,
                               EVENT_SET_ID_INVALID,
                               EVENT_TIMER_RTC, GetCurrentInstance(),
                               cbStandard, cbStandard,
                               FALSE);

    if (event_id != EVENT_SET_ID_INVALID)
    {
      ret_val = VHQ_SUCCESS;
    }
    return ret_val;
  }
  else
    return VHQ_SUCCESS;
}


int VHQManagerLoop(bool bSendRebootEvent)
{
  int ret_val = 0;
  int EventSchedRetVal;
  uint32 event_mask;
  uint32 timer_val;
  char CertSerNum[256];
  com_type_t comType;
  char FileName[512];

  dbg_msg("%s: VHQ Release Version = %d\n", __FUNCTION__, RELEASE_VERSION);
  dbg_msg("%s: VHQ Compiled at: %s %s\n", __FUNCTION__, __DATE__, __TIME__);

  /* Reset the restartManagerLoop flag so we don't continually restart */
  restartManagerLoop = FALSE;

  /* Read safe mode parameter to see if we need to clear the event table */
  VHQGetParameterUint32(PARAM_SAFEMODE, &g_uiSafemode, DEFAULT_BASE);

  if (g_uiSafemode & CLEAR_EVENT_TABLE)
  {
    /* Copy the Event Table that is causing the problem so it can be retrieved and investigated */
    CopyFile(VHQ_EVENT_SET_FILE, VHQ_EVENT_SET_FILE_BAD);
    log_dbg("%s: Deleting %s because CLEAR_EVENT_TABLE is set in Safemode\n",
            __FUNCTION__, VHQ_EVENT_SET_FILE);
    if (remove(VHQ_EVENT_SET_FILE) != 0)
    {
      log_err("%s: Error %s (errno=%d) when trying to remove %s\n",
              __FUNCTION__, strerror(errno), errno, VHQ_EVENT_SET_FILE);
    }
  }

#if EVENT_SCHED_THREAD_MODE
  {
    pthread_mutexattr_t CSMutex_Attr;
    pthread_mutexattr_t *CSMutex_Attr_p = NULL;

    if ((pthread_mutexattr_init(&CSMutex_Attr) == 0)
        && (pthread_mutexattr_settype(&CSMutex_Attr,
                                      PTHREAD_MUTEX_ERRORCHECK_NP) == 0))
    {
      CSMutex_Attr_p = &CSMutex_Attr;
      dbg_msg(
          "%s: ContactServerMutex type set to PTHREAD_MUTEX_ERRORCHECK_NP\n",
          __FUNCTION__);
    }

    if (pthread_mutex_init(&ContactServerMutex, CSMutex_Attr_p) != 0)
    {
      dbg_err("\n\n%s ERROR: could not init ContactServerMutex\n\n",
              __FUNCTION__);
    }
  }

  /* Get the thread ID this is running on */
  ManagerLoopThread = pthread_self();
  dbg_msg("%s: VHQManagerLoop() running on thread ID 0x%08x\n", __FUNCTION__,
          ManagerLoopThread);
#endif

  /* Re-initialize I/O */
  VHQioInitialize();

  /* Delete Unused files */
  CleanupUnusedFiles();

  if ((int) EventSchedThread == -1)
  {
    pthread_attr_t attr;

    /* Initialize and set thread detached attribute */
    pthread_attr_init(&attr);
    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_JOINABLE);

    EventSchedRetVal = pthread_create(&EventSchedThread, &attr, EventScheduler,
    NULL);
    if (EventSchedRetVal != 0)
    {
      log_err("%s ERROR: Could not start event scheduler - EXITING\n",
              __FUNCTION__);
      exit(-1);
    }

    /* Wait for event scheduler to initialize */
    do
    {
      dbg_msg("%s: Waiting 2 seconds for event scheduler to initialize\r\n",
              __FUNCTION__);
      sleep(2);
    }
    while (EventSchedulerInitialized() == FALSE);

    /* Free attribute */
    pthread_attr_destroy(&attr);
  }

  //if (pthread_detach(EventSchedThread) == 0)
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Event Scheduler thread detached successfully\n", __FUNCTION__);
  //else
  //DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Failure detaching Event Scheduler thread!!!\n", __FUNCTION__);

  dbg_msg("%s: Running on PID %d - Event Scheduler running on thread %u\n",
          __FUNCTION__, getpid(), EventSchedThread);

  /* Lets start the timer if we need to (it has to be started in this thread) */
  timer_val = GetInitialTimerVal();
  if (timer_val)
  {
    struct itimerval new_tv;

    dbg_msg("%s: Setting up timer for %d seconds\n", __FUNCTION__, timer_val);
    memset(&new_tv, 0, sizeof(new_tv));
    new_tv.it_value.tv_sec = timer_val;

    StartEventTimer(new_tv);
  }

  /* Setup the response message queue */
  /* responseSend_Qid = msgget((key_t)QUE_VHQ_RESPONSE_SEND, VHQ_RESPONSE_QUEUE_GET_FLAGS | IPC_CREAT); */
  dbg_msg("%s: Creating RESPONSE_SEND message queue\n", __FUNCTION__);
  responseSend_Qid = msgget((key_t) QUE_VHQ_RESPONSE_SEND, 0666 | IPC_CREAT);
#if USE_RESPONSE_RECV_QUEUE
  dbg_msg("%s: Creating RESPONSE_RECEIVE message queue\n", __FUNCTION__);
  responseRecv_Qid = msgget((key_t) QUE_VHQ_RESPONSE_RECEIVE, 0666 | IPC_CREAT);
  if ((responseSend_Qid <= 0) || (responseRecv_Qid <= 0))
#else
  if (responseSend_Qid <= 0)
#endif
  {
    log_err("%s ERROR: Could not create response message queues, errno: %d\n",
            __FUNCTION__, errno);
#ifndef _VOS2
    exit(-1);
#endif
  }
  else
  {
    dbg_msg(
        "%s: Created response message queues (Send = %d, Recv = %d) successfully!\n",
        __FUNCTION__, responseSend_Qid, responseRecv_Qid);
  }

#ifdef Mx2
  /* Setup the Server response message queues */
  request_Qid = msgget((key_t) QUE_VHQ_ROOT_REQUEST, 0666 | IPC_CREAT);
  response_Qid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666 | IPC_CREAT);
#else
  request_Qid = msgget((key_t)QUE_VHQ_APP_IFC_TO_AGENT, 0666|IPC_CREAT);
  response_Qid = msgget((key_t)QUE_VHQ_APP_IFC_TO_APP, 0666|IPC_CREAT);
  root_response_Qid = msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666 | IPC_CREAT);
#endif
  if ((request_Qid <= 0) || (response_Qid <= 0))
  {
    log_err(
        "%s ERROR: Could not create root request (QID = %d) or root response (QID = %d) message queue\n",
        __FUNCTION__, request_Qid, response_Qid);
#ifndef _VOS2
    exit(-1);
#endif
  }
  else
  {
    dbg_msg(
        "%s: Created ROOT message queues (REQ QID = %d, RSP QID = %d) successfully!\n",
        __FUNCTION__, request_Qid, response_Qid);
  }

  /* Log the ID's of the certs we are using */
  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  if (GetCertSerNum(FileName, CertSerNum, sizeof(CertSerNum)))
    log_dbg("%s: %s Serial Number is %s\n", __FUNCTION__, FileName, CertSerNum);
  else
    log_err("%s: Unable to read Serial Number of %s\n", __FUNCTION__, FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_SSL_CERTFILE,
                         GetCurrentInstance());
  if (GetCertSerNum(FileName, CertSerNum, sizeof(CertSerNum)))
    log_dbg("%s: %s Serial Number is %s\n", __FUNCTION__, FileName, CertSerNum);
  else
    log_err("%s: Unable to read Serial Number of %s\n", __FUNCTION__, FileName);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_FTPS_CERTFILE,
                         GetCurrentInstance());
  if (GetCertSerNum(FileName, CertSerNum, sizeof(CertSerNum)))
    log_dbg("%s: %s Serial Number is %s\n", __FUNCTION__, FileName, CertSerNum);
  else
    log_err("%s: Unable to read Serial Number of %s\n", __FUNCTION__, FileName);

  /*
   * Let's see if we should send key exchange.  If we have not exchanged keys yet, we will go into
   * "Device Registration Mode" by RequestDeviceRegistrationMode() call. This will prevent agent from
   * scheduling recur HB's until we get out of Device Registration Mode.  It will also cause the reboot
   * event not to be sent
   *
   * If keys have been exchanged already, we can send the reboot event and schedule the recurring HB
   */
  {
    bool keys_exchanged = FALSE;

    /* Exchange key before sending any event if key is not exchanged */
    VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);

    /* Check if AgentKeys is exist */
    if (AgentKeysExist() == FALSE)
    {
      /* If we need to generate keys, we need to re-exchange them */
      //ADKTMS-2609 - add entry into vhqlog and vhqerror.log when key exchange will be performed
      log_err(
          "%s: AgentKeysExist() returned FALSE - setting PARAM_KEYS_EXCHANGED to FALSE\n",
          __FUNCTION__);
      keys_exchanged = FALSE;
      VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, TRUE);
    }

    if (keys_exchanged == FALSE)
    {
      //ADKTMS-2609 - add entry into vhqlog and vhqerror.log when key exchange will be performed
      log_alert(
          "%s: key exchange required - cleanup rest of them and initiate keys exchange\n",
          __FUNCTION__);
      RemoveAgentKeys();
      ClearEventsTable();
    }
  }

  /* Give the apps time to register */
  WaitForAppRegistration();

#ifdef _VOS2
  /* Initialize the main battery status */
  InitMainBatteryStatus();

  /* Setup dock monitor if necessary */
  SetupDockMonitorNotification();

  /* Enable the Android Request Callback - Doesn't matter if this is an Android device or not.
   The callback will never happen on non-Carbon devices */
  EnableAndroidRequests();
#endif

  /* Process registrations */
  ProcessServerRequests(FALSE);

  /* If there is a response waiting to be sent, send it */
  CheckForResponseFile(VHQ_RESPONSE_MSG_TEMP_FILE);
#ifdef Mx2
  CheckForResponseFile(VHQ_OLD_RESPONSE_MSG_TEMP_FILE);
#endif

  /* We can unlock the event scheduler now */
  dbg_notice("%s: Unlocking Event Scheduler\n", __FUNCTION__);
  LockEventScheduler(FALSE);

  /* The initial comm ID will always be invalid and the server should respond with
   the real one */
  cur_comm_id = 0;

  /* Get current com interface type: direct, dial, gprs/3g : Can't know interface before actual interface is up*/
  comType = GetComType();

  /* Key exchange procedure completed, check do we have ability to schedule recur HB */
  if (!deviceRegistrationInProgress)
  {
    dbg_msg(
        "%s: key exchange not required - checking if EVENT_REBOOT needs sent\n",
        __FUNCTION__);

    /* Load the current Alert Mask from the INI parser */
    event_mask = 0;
    if (0 == (g_uiSafemode & SKIP_ALERTS))
    {
      if (VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask, DEFAULT_BASE))
      {
        dbg_msg("%s: Read Alert Mask 0x%08x from Config\n", __FUNCTION__,
                event_mask);
      }
#if TEST_EVENT_MESSAGE
      event_mask = 0xffffffff;
#endif
      log_dbg(
          "%s: Checking if reboot event needs sent - event_mask = 0x%08x, bSendRebootEvent = %d\n",
          __FUNCTION__, event_mask, bSendRebootEvent);
      /* Do the reboot event before we start the heartbeat */
      if (bSendRebootEvent && (event_mask & EVENT_REBOOT))
      {
        dbg_msg("%s: Sending reboot event\n", __FUNCTION__);
        /* Mitch (9-15-2015): Now that events are going through event scheduler, we can just call sendEvents() to schedule
         the reboot event.  The key exchange message above will run first and then the reboot event will get sent (as
         long as key exchange was successful) */
        sendEvents(EVENT_REBOOT, NULL);
       }
    }
    else
    {
      dbg_msg("Skipping alerts code\n");
    }

    /* Setup the recurring HB, force to send it now */
    ScheduleRecurringHeartbeat(TRUE);

    if (GetMPCStatus() != 0)
    {
      dbg_msg("MPC Cable found, scheduling recurring device event\n");
      /* Schedule recurring Device Event for MPC status */
      ScheduleRecurringDeviceEvent(EVENT_MPC_STATUS, NULL);
    }
    else
    {
      dbg_msg("No MPC Cable\n");
    }
  }

  /* Keep processing forever */
  while (!restartManagerLoop)
  {
    event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;
    time_t t_loop_begin = linux_time(NULL);
    time_t t_loop_end;

    time_t t_pr_begin, t_pr_end;
    time_t t_psr_begin, t_psr_end;

    event_mask_t current_events = 0;
    int lock_timeout = 10;

    /* Re-load safe mode parameter in case it changed during a config update */
    VHQGetParameterUint32(PARAM_SAFEMODE, &g_uiSafemode, DEFAULT_BASE);

#ifdef Mx2
    /* For V/OS devices, we need to check to see if we need to copy files to /tmp/DUMP-vhq since
     they get deleted every time they get copies from sysmode */
    CopyLogFilesToTmp();
#endif

    // DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s:%s(%d): Iterating in the VHQManagerLoop while loop\n", __FILE__, __FUNCTION__, __LINE__);
    if (rebootEventRequired)
    {
      /* The key exchange response triggered us to send a reboot event in order to
       be backward compatible with old servers.  So let's see if we actually need to
       send the reboot event */
      rebootEventRequired = FALSE;
      dbg_msg(
          "%s: rebootEventRequired flag is SET - checking if we need to send EVENT_REBOOT\n",
          __FUNCTION__);
      event_mask = 0;
      if (0 == (g_uiSafemode & SKIP_ALERTS))
      {
        if (VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask, DEFAULT_BASE))
        {
          dbg_msg("%s: Read Alert Mask 0x%08x from Config\n", __FUNCTION__,
                  event_mask);
        }

        /* Do the reboot event before we start the regular heartbeat */
        if (event_mask & EVENT_REBOOT)
        {
          log_dbg(
              "%s: Sending reboot event because rebootEventRequired is SET\n",
              __FUNCTION__);
          /* Mitch (9-15-2015): Now that events are going through event scheduler, we can just call sendEvents() to schedule
           the reboot event.  The key exchange message above will run first and then the reboot event will get sent (as
           long as key exchange was successful) */
          sendEvents(EVENT_REBOOT, NULL);
        }
      }
    }

    t_psr_begin = linux_time(NULL);
    /* During registration don't block inside of ProcessServerRequests() because we don't want the OS to go to deep sleep */
    if (deviceRegistrationInProgress)
    {
      ProcessServerRequests(FALSE);
    }
    else
    {
      ProcessServerRequests(TRUE);

      /* Send any events that are needed */
      VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask, DEFAULT_BASE);
      if (0 == (g_uiSafemode & SKIP_ALERTS))
      {
        device_event_content_t device_event_content;

        memset(&device_event_content, 0, sizeof(device_event_content_t));

        current_events = CheckForEvents(event_mask, &device_event_content);

        if (current_events != 0)
        {
          sendEvents(current_events, &device_event_content);
        }
      }
      else
      {
        dbg_msg("Skipping alerts code\n");
        log_dbg("Skipping alerts code\n");
      }
    }
    t_psr_end = linux_time(NULL);

    /* Send any failed messages */
    /* Mitch (5-20-16): For ADKTMS-1071, this was moved to VHQManagerContactServer() */
    //SendFailedMessages();
    /* If we are exiting, lets break so we don't schedule another HB */
    if (restartManagerLoop)
    {
      CommNetDisconnect(TRUE);
      break;
    }

    /* To request HB application creates file. Check it. If exists - schedule new HB */
    CheckForHBrequestFile(VHQ_HB_REQUEST_FILE);

    HeartbeatEventID = GetHeartBeatEventID(NULL);

    /* If heartbeats were started through the UI, we need to schedule them */
    if (HeartbeatEventID == EVENT_SET_ID_INVALID)
    {
      ScheduleRecurringHeartbeat(TRUE); /* Setup the HB, force to send it now */
    }

    //
    // begin-ADKTMS-355 Add separate heartbeat frequency parameters for dial-up and gprs/3g
    /* Check if com interface changed...get current com interface type: direct, dial, gprs/3g */
    comType = GetComType();

    /*
     * Compare current (latest valid) comtype and comtype when HB is scheduled
     * Do not do anything if we have no valid communication type yet or just lost it
     */
    if (comType != COM_NO_INTERFACE && scheduled_comType != comType)
    {
      /*
       * Communication interface changed... We need to recalculate next heartbeat time
       * Create new HearBeat. We do not need to force sending now. Latest HB will send the valid communication interface to the server
       * Do not force to send HB now
       */
      uint32 scheduled_old_hb_fq = GetHBFreq(NULL, scheduled_comType);
      uint32 scheduled_new_hb_fq = GetHBFreq(NULL, comType);

      if (scheduled_old_hb_fq == scheduled_new_hb_fq)
      {
        /* Just update the com type */
        scheduled_comType = comType;
      }
      else
      {
        /* Reschedule HB, scheduled_comType is updated while recurring HB is being created */
        ScheduleRecurringHeartbeat(FALSE);
      }
    }
    // end-ADKTMS-355 Add separate heartbeat frequency parameters for dial-up and gprs/3g
    //

    /* Debug time of processing */
    t_loop_end = linux_time(NULL);
    if ((t_loop_end > t_loop_begin && t_loop_end - t_loop_begin > 5)
        || (t_pr_end > t_pr_begin && t_pr_end - t_pr_begin > 5)
        || (t_psr_end > t_pr_begin && t_psr_end - t_psr_begin > 5))
      log_warn(
          "%s: WARNING - VHQManagerLoop took %lu seconds - ProcessResponses() took %lu seconds and ProcessServerRequests() took %lu seconds\n",
          __FUNCTION__, t_loop_end - t_loop_begin, t_pr_end - t_pr_begin,
          t_psr_end - t_psr_begin);

    /* Exit Agent */
    if (FileExists(VHQ_SYS_STOP))
    {
      log_warn("%s: VHQ Agent stopping\n", __FUNCTION__);
      StopEventSchedulerThread();
      restartManagerLoop = TRUE;                // Stop VHQ Manager
      DeleteAllInstanceFiles();                         // Clears Events Table
      EraseCompleteAppsData();            // Unregisters and cleans Custom Data
      msgctl(request_Qid, IPC_RMID, 0);  // don't bother with result, we're going away anyway
      msgctl(response_Qid, IPC_RMID, 0);
      removeFile(VHQ_SYS_STOP);  // Delete the file so that vhq_sys doesn't loop
      ret_val = 1;                                          // Indicate Main to exit
    }

#ifdef _VOS2
    /* During registration we do not block inside of ProcessServerRequests() because we don't want the OS to go to deep sleep. Wait between processing here */
    if (deviceRegistrationInProgress)
      sleep(2);
    else
      dbg_msg("%s: Block on msgrcv() call instead of sleeping\n", __FUNCTION__);
#else
        /* On VOS2 devices we'll just block on the msgrcv() call in ProcessServerRequests().
        That way, we won't be in a sleep() call when apps request something.
        On VOS devices, msgrcv() in ProcessServerRequests will be called with IPC_NOWAIT flag set so it doesn't block.
        So we'll use this sleep() call so that we don't hog the processor, but we can still detect low memory
        events or anything like that quickly */

        sleep(2);
#endif
  }

  /* We broke out of the main loop because a restart was requested to load new config parameters */
  dbg_msg("%s: restartManagerLoop is set so returning from loop\n",
          __FUNCTION__);
  CommNetDisconnect(TRUE);
  return ret_val;
}

bool GetRestartStatus()
{
  return restartManagerLoop;
}

pthread_t GetManagerThreadId()
{
  return ManagerLoopThread;
}

void SetRebootEventRequired(void)
{
  log_dbg("%s: setting rebootEventRequired to TRUE\n", __FUNCTION__);
  rebootEventRequired = TRUE;
}


void ClearDeviceRegistrationMode(void)
{
  dbg_msg("%s: setting deviceRegistrationInProgress to FALSE\n", __FUNCTION__);
  deviceRegistrationInProgress = FALSE;
  event_set_id_t HeartbeatEventID = EVENT_SET_ID_INVALID;

  HeartbeatEventID = GetHeartBeatEventID(NULL);

  if (HeartbeatEventID == EVENT_SET_ID_INVALID)
  {
    dbg_msg(
        "%s: Device just done with registration, recurring HB can be scheduled\n",
        __FUNCTION__);
    ScheduleRecurringHeartbeat(FALSE);
  }
}

bool RequestDeviceRegistrationMode(void)
{
  uint32 heartbeat_rate = 0;

  if (deviceRegistrationInProgress)
  {
    dbg_err("%s: Device is already in registration mode\n", __FUNCTION__);
    return FALSE;
  }

  log_dbg("%s: Move device into registration mode\n", __FUNCTION__);
  deviceRegistrationInProgress = TRUE;

  VHQGetParameterUint32(PARAM_HEARTBEAT_FREQUENCY, &heartbeat_rate,
                        DEFAULT_BASE);
  if (heartbeat_rate)
  {
    ScheduleSingleHeartbeat(0, 0, heartbeat_rate, NULL);
  }
  return TRUE;
}

bool GetDeviceRegistrationMode()
{
  return deviceRegistrationInProgress;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
