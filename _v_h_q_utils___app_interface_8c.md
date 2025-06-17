---
title: tmsagt/src/VHQUtils/VHQUtils_AppInterface.c

---

# tmsagt/src/VHQUtils/VHQUtils_AppInterface.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[appData_t](structapp_data__t.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[convert_TMS_result_to_old_result_code](_v_h_q_utils___app_interface_8c.md#function-convert-tms-result-to-old-result-code)**(int tms_result) |
| int | **[convert_VHQ_result_to_TMS_result](_v_h_q_utils___app_interface_8c.md#function-convert-vhq-result-to-tms-result)**(int vhq_result) |
| int | **[convert_evt_to_msg_type](_v_h_q_utils___app_interface_8c.md#function-convert-evt-to-msg-type)**(int evtType) |
| int | **[convert_vhqMsgType_to_tmsEvt](_v_h_q_utils___app_interface_8c.md#function-convert-vhqmsgtype-to-tmsevt)**(int vhqMsgType) |
| int | **[convertTxType](_v_h_q_utils___app_interface_8c.md#function-converttxtype)**(char * txType) |
| void | **[convert_vhqAppRes_to_tmsEvt](_v_h_q_utils___app_interface_8c.md#function-convert-vhqappres-to-tmsevt)**(struct vhqAppResultReturn * vhqRes_p, struct [tmsEventData](structtms_event_data.md) * tmsRes_p) |
| int | **[convertTmsEventMasktoVHQ](_v_h_q_utils___app_interface_8c.md#function-converttmseventmasktovhq)**(int tms_ev_mask) |
| const char * | **[evt_to_string](_v_h_q_utils___app_interface_8c.md#function-evt-to-string)**(const int evtType) |
| char * | **[status_to_string](_v_h_q_utils___app_interface_8c.md#function-status-to-string)**(int status) |
| void | **[setup_file_permissions](_v_h_q_utils___app_interface_8c.md#function-setup-file-permissions)**(char * fileName, char * user) |
| int | **[FindReceiver](_v_h_q_utils___app_interface_8c.md#function-findreceiver)**(const char * receiver_name) |
| [tms_apptype_t](svc__tms_8h.md#typedef-tms-apptype-t) | **[GetReceiverType](_v_h_q_utils___app_interface_8c.md#function-getreceivertype)**(int index) |
| void | **[GetRegisteredAppVersion](_v_h_q_utils___app_interface_8c.md#function-getregisteredappversion)**(int index, char * AppVersion) |
| void | **[GetRegisteredAppCustomType](_v_h_q_utils___app_interface_8c.md#function-getregisteredappcustomtype)**(int index, char * CustomType) |
| void | **[GetRegisteredAppAddInfo](_v_h_q_utils___app_interface_8c.md#function-getregisteredappaddinfo)**(int index, char * AddInfo) |
| void | **[GetRegisteredAppName](_v_h_q_utils___app_interface_8c.md#function-getregisteredappname)**(int i, char * AppName) |
| int | **[FindUser](_v_h_q_utils___app_interface_8c.md#function-finduser)**(int start_index, char * user) |
| bool | **[ReadParamDataFile](_v_h_q_utils___app_interface_8c.md#function-readparamdatafile)**(char * file_name, int num_entries, app_param_files_t * ParamFileArray, int ArraySize, uint8 * num_param_files) |
| bool | **[GetAppResponse](_v_h_q_utils___app_interface_8c.md#function-getappresponse)**(const char * user, const char * receiver, const int evtType_filter, int messageID, int timeout, struct [tmsEventData](structtms_event_data.md) * AppResult) |
| bool | **[AppNeedsToApprove](_v_h_q_utils___app_interface_8c.md#function-appneedstoapprove)**(int index, int event_mask) |
| vhq_result_t | **[GetAppEventAproval](_v_h_q_utils___app_interface_8c.md#function-getappeventaproval)**(int event_mask, event_set_id_t event_set_id, event_id_t event_id) |
| void | **[GetRegisteredAppsStr](_v_h_q_utils___app_interface_8c.md#function-getregisteredappsstr)**(char * registeredAppStr, uint32 registeredAppStrSize) |
| vhq_result_t | **[RegisterApp](_v_h_q_utils___app_interface_8c.md#function-registerapp)**(bool reg, char * user_name, int event_mask, char * receiver_name, long pid, bool use_TMS_API, char * app_pipe_name, [tms_apptype_t](svc__tms_8h.md#typedef-tms-apptype-t) app_type, char * app_version, char * app_customType, char * app_additionalInfo) |
| vhq_result_t | **[UnRegisterUserApp](_v_h_q_utils___app_interface_8c.md#function-unregisteruserapp)**(char * user_name, char * receiver_name) |
| void | **[UnRegisterUserApps](_v_h_q_utils___app_interface_8c.md#function-unregisteruserapps)**(void ) |
| bool | **[AppRegistered](_v_h_q_utils___app_interface_8c.md#function-appregistered)**(char * name) |
| bool | **[GetRecevierUser](_v_h_q_utils___app_interface_8c.md#function-getrecevieruser)**(char * receiver, char * user_name) |
| char * | **[GetRecevierPipeName](_v_h_q_utils___app_interface_8c.md#function-getrecevierpipename)**(char * receiver) |
| bool | **[GetAppParameters](_v_h_q_utils___app_interface_8c.md#function-getappparameters)**(char * receiver_name, app_param_update_info_t * param_update_info) |
| bool | **[GetAppParameterFilesHash](_v_h_q_utils___app_interface_8c.md#function-getappparameterfileshash)**(char * receiver_name, app_param_files_t * ParamFileArray, int ArraySize, uint8 * num_param_files, bool * value_based) |
| vhq_result_t | **[ClearAppCustomData](_v_h_q_utils___app_interface_8c.md#function-clearappcustomdata)**(char * receiver_name, customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS]) |
| bool | **[EraseCompleteAppsData](_v_h_q_utils___app_interface_8c.md#function-erasecompleteappsdata)**(void ) |
| void | **[GetAppCustomData](_v_h_q_utils___app_interface_8c.md#function-getappcustomdata)**(customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS], uint32 param_mask, bool DIDReqdForKeyExch) |
| bool | **[GetAppParameterFileByName](_v_h_q_utils___app_interface_8c.md#function-getappparameterfilebyname)**(char * receiver_name, char * param_filename, char * full_filename, uint32 full_filename_len, bool * remove_file) |
| vhq_result_t | **[PutAppParameterFileByName](_v_h_q_utils___app_interface_8c.md#function-putappparameterfilebyname)**(char * receiver_name, char * param_filename, char * additional_info, uint32 additional_info_size, dl_file_dl_type_t param_update_type) |
| bool | **[AppActionPerform](_v_h_q_utils___app_interface_8c.md#function-appactionperform)**(app_action_type_t app_action) |
| vhq_result_t | **[NotifyApps](_v_h_q_utils___app_interface_8c.md#function-notifyapps)**(int event_mask, char * filename, int notificationDataInteger, vhq_result_t vhq_result, event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| void | **[FlushAppIPCs](_v_h_q_utils___app_interface_8c.md#function-flushappipcs)**(void ) |
| bool | **[AppDelFile](_v_h_q_utils___app_interface_8c.md#function-appdelfile)**(char * receiver_name, char * filename, char * additional_info, uint32 additional_info_size) |
| void | **[SetAppState](_v_h_q_utils___app_interface_8c.md#function-setappstate)**(char * receiver, int appState) |
| vhq_result_t | **[DoContentCallback_New](_v_h_q_utils___app_interface_8c.md#function-docontentcallback-new)**(char * user, char * pszContentFile, char * pszContentDest, dl_file_dl_type_t eType, char * additional_info, uint32 additional_info_size) |
| vhq_result_t | **[SendMsgToApp](_v_h_q_utils___app_interface_8c.md#function-sendmsgtoapp)**(const char * receiver, int evtType, int messageID, int result, const char * fileName, const char * fileLocation, int eventMask, char * transactionType, int notificationDataInteger, unsigned char responseExpected, int putFileType) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[appArrayMutex](_v_h_q_utils___app_interface_8c.md#variable-apparraymutex)**  |
| [appData_t](structapp_data__t.md)[TMS_MAX_REGISTERED_APPS] | **[registered_app_array](_v_h_q_utils___app_interface_8c.md#variable-registered-app-array)**  |
| int | **[app_ifc_message_id](_v_h_q_utils___app_interface_8c.md#variable-app-ifc-message-id)**  |
| pthread_mutex_t | **[appContact](_v_h_q_utils___app_interface_8c.md#variable-appcontact)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VHQ_APP_INFO_REQUEST_PERIOD_DEF](_v_h_q_utils___app_interface_8c.md#define-vhq-app-info-request-period-def)**  |
|  | **[MIN_APP_RESPONSE_TIMEOUT](_v_h_q_utils___app_interface_8c.md#define-min-app-response-timeout)**  |
|  | **[APP_RESPONSE_RETRY](_v_h_q_utils___app_interface_8c.md#define-app-response-retry)**  |
|  | **[APP_RESPONSE_RETRY_DELAY](_v_h_q_utils___app_interface_8c.md#define-app-response-retry-delay)**  |

## Detailed Description


Some utility functions for application integration 


## Functions Documentation

### function convert_TMS_result_to_old_result_code

```cpp
static int convert_TMS_result_to_old_result_code(
    int tms_result
)
```


### function convert_VHQ_result_to_TMS_result

```cpp
static int convert_VHQ_result_to_TMS_result(
    int vhq_result
)
```


### function convert_evt_to_msg_type

```cpp
static int convert_evt_to_msg_type(
    int evtType
)
```


### function convert_vhqMsgType_to_tmsEvt

```cpp
static int convert_vhqMsgType_to_tmsEvt(
    int vhqMsgType
)
```


### function convertTxType

```cpp
static int convertTxType(
    char * txType
)
```


### function convert_vhqAppRes_to_tmsEvt

```cpp
static void convert_vhqAppRes_to_tmsEvt(
    struct vhqAppResultReturn * vhqRes_p,
    struct tmsEventData * tmsRes_p
)
```


### function convertTmsEventMasktoVHQ

```cpp
static int convertTmsEventMasktoVHQ(
    int tms_ev_mask
)
```


### function evt_to_string

```cpp
static const char * evt_to_string(
    const int evtType
)
```


### function status_to_string

```cpp
static char * status_to_string(
    int status
)
```


### function setup_file_permissions

```cpp
static void setup_file_permissions(
    char * fileName,
    char * user
)
```


**Parameters**: 

  * **fileName** = The filename for which permissions should be set. This comes from application. 
  * **user** = username of the registered application.


**Return**: void 

This function sets the permission of a file. 


### function FindReceiver

```cpp
static int FindReceiver(
    const char * receiver_name
)
```


**Parameters**: 

  * **receiver_name** = Name of the application to be searched for in registered application array.


**Return**: 

  * int index of receiver found. 
  * -1 if receiver not found. 


This function checks for an application in the registered application array, with a given receiver name. TMS_MAX_REGISTERED_APPS is the maximum number of applications which can be registered to agent.


### function GetReceiverType

```cpp
tms_apptype_t GetReceiverType(
    int index
)
```


### function GetRegisteredAppVersion

```cpp
void GetRegisteredAppVersion(
    int index,
    char * AppVersion
)
```


### function GetRegisteredAppCustomType

```cpp
void GetRegisteredAppCustomType(
    int index,
    char * CustomType
)
```


### function GetRegisteredAppAddInfo

```cpp
void GetRegisteredAppAddInfo(
    int index,
    char * AddInfo
)
```


### function GetRegisteredAppName

```cpp
void GetRegisteredAppName(
    int i,
    char * AppName
)
```


**Parameters**: 

  * **i** = Index to be checked in registered application array. 
  * **AppName** = Application name found


**Return**: void 

This function checks for an application at a particular index in the registered application array. 


### function FindUser

```cpp
int FindUser(
    int start_index,
    char * user
)
```


**Parameters**: 

  * **start_index** = Starting index of registered application array from where search should start. 
  * **user** = user name of the application to search for.


**Return**: 

  * index of application in registered application array. 
  * -1 if user name not found 


This function checks for an application with a given user name in the registered application array.


### function ReadParamDataFile

```cpp
static bool ReadParamDataFile(
    char * file_name,
    int num_entries,
    app_param_files_t * ParamFileArray,
    int ArraySize,
    uint8 * num_param_files
)
```


**Parameters**: 

  * **file_name** = Filename provided by application. 
  * **num_entries** = number of entries in a file. 
  * **ParamFileArray** = Parameters stored into this array. 
  * **ArraySize** = Maximum number of entries possible 
  * **num_param_files** = number of parameters.


**Return**: 

  * index of application in registered application array. 
  * -1 if username not found 


This function reads parameter data file provided by application. 


### function GetAppResponse

```cpp
static bool GetAppResponse(
    const char * user,
    const char * receiver,
    const int evtType_filter,
    int messageID,
    int timeout,
    struct tmsEventData * AppResult
)
```


**Parameters**: 

  * **user** = username 
  * **receiver** = name of the receiver application 
  * **evtType_filter** = event type sent by application. This needs to be same as the event sent to application from agent. 
  * **messageID** = message id passed to app in request. 
  * **timeout** =AppIfc SetAppState Timeout parameter in config file


**Return**: 

  * TRUE if response from application is received. 
  * FALSE if no response from application is received. 


This function receive the response from an application for an event sent by agent. 


### function AppNeedsToApprove

```cpp
static bool AppNeedsToApprove(
    int index,
    int event_mask
)
```


**Parameters**: 

  * **index** = Index of application in registered application array. 
  * **event_mask** = event for which approval is needed.


**Return**: 

  * TRUE- if approval is reuired from app 
  * FLASE- if no approval is required. 


This function checks whether an event needs an approval from application to happen.


### function GetAppEventAproval

```cpp
static vhq_result_t GetAppEventAproval(
    int event_mask,
    event_set_id_t event_set_id,
    event_id_t event_id
)
```


**Parameters**: 

  * **event_mask** = event mask 
  * **event_set_id** = event set id 
  * **event_id** = event id


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function checks whether the application approves an event to happen. It sends TMS_EVT_SET_APP_STATE event to app and waits for a status FREE/BUSY/POSTPONE from application. 


### function GetRegisteredAppsStr

```cpp
static void GetRegisteredAppsStr(
    char * registeredAppStr,
    uint32 registeredAppStrSize
)
```


**Parameters**: 

  * **registeredAppStr** = character array to which in-use application receiver name is stored. 
  * **registeredAppStrSize** = total size of the array.


**Return**: void 

This function checks for in-use applications in the registered application array. 


### function RegisterApp

```cpp
vhq_result_t RegisterApp(
    bool reg,
    char * user_name,
    int event_mask,
    char * receiver_name,
    long pid,
    bool use_TMS_API,
    char * app_pipe_name,
    tms_apptype_t app_type,
    char * app_version,
    char * app_customType,
    char * app_additionalInfo
)
```


**Parameters**: 

  * **reg** = checks function is for registering or unregistering 
  * **user_name** = name of the user 
  * **event_mask** = event mask 
  * **receiver_name** = receiver name of application 
  * **pid** = pid of the application 
  * **use_TMS_API** = uses TMS_API or not 
  * **app_pipe_name** = pipe name of application


**Return**: struct vhq_result_t 

This function registers or unregisters an application from the registered application array. 


### function UnRegisterUserApp

```cpp
vhq_result_t UnRegisterUserApp(
    char * user_name,
    char * receiver_name
)
```


**Return**: void 

This function unregisters specified application from the registered application array.


### function UnRegisterUserApps

```cpp
void UnRegisterUserApps(
    void 
)
```


**Return**: void 

This function unregisters all the application from the registered application array.


### function AppRegistered

```cpp
bool AppRegistered(
    char * name
)
```


**Parameters**: 

  * **name** = receiver name of application.


**Return**: 

  * TRUE if application is found 
  * FALSE if application is not found 


This function checks if an application with a given receiver name is registered or not. 


### function GetRecevierUser

```cpp
bool GetRecevierUser(
    char * receiver,
    char * user_name
)
```


**Parameters**: 

  * **receiver** = receiver name of application. 
  * **user_name** = user name of application.


**Return**: TRUE if receiver available 

This function returns the username of a registered application. 


### function GetRecevierPipeName

```cpp
char * GetRecevierPipeName(
    char * receiver
)
```


### function GetAppParameters

```cpp
bool GetAppParameters(
    char * receiver_name,
    app_param_update_info_t * param_update_info
)
```


### function GetAppParameterFilesHash

```cpp
bool GetAppParameterFilesHash(
    char * receiver_name,
    app_param_files_t * ParamFileArray,
    int ArraySize,
    uint8 * num_param_files,
    bool * value_based
)
```


**Parameters**: 

  * **receiver_name** = receiver name of application. 
  * **ParamFileArray** = structure into which parameters are stored. 
  * **ArraySize** = array size of structure app_param_files_t 
  * **num_param_files** = number of parameter files. 
  * **value_based** = true if parameters are value based


**Return**: 

  * TRUE if application parameters is loaded 
  * FALSE if application is not loaded 


This function loads application parameters. 


### function ClearAppCustomData

```cpp
vhq_result_t ClearAppCustomData(
    char * receiver_name,
    customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS]
)
```


**Parameters**: 

  * **receiver_name** = receiver name of application. 
  * **appInfo** = application parameter information about app with receiver_name in this structure is cleared.


**Return**: vhq_result_t 

This function clears the memory for storing parameters of an application. 


### function EraseCompleteAppsData

```cpp
bool EraseCompleteAppsData(
    void 
)
```


**Return**: bool - TRUE if successful, FALSE if failed 

This function clears the memory for storing parameters of all the application.


### function GetAppCustomData

```cpp
void GetAppCustomData(
    customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS],
    uint32 param_mask,
    bool DIDReqdForKeyExch
)
```


**Parameters**: 

  * **appInfo** = array into which parameters are stored to. 
  * **param_mask** = application event masks.


**Return**: void 

This function checks if the parameters or masks are expired.If expired the function loads appInfo[] with new parameters fetched from application. It sends an event TMS_EVT_SET_APP_INFO to application. 


### function GetAppParameterFileByName

```cpp
bool GetAppParameterFileByName(
    char * receiver_name,
    char * param_filename,
    char * full_filename,
    uint32 full_filename_len,
    bool * remove_file
)
```


**Parameters**: 

  * **receiver_name** = receiver app name 
  * **param_filename** = parameter filename 
  * **full_filename** = full filename from app. 
  * **full_filename_len** = expected file name length 
  * **remove_file** = TRUE, if remove file. from app.


**Return**: 

  * TRUE if filename received from application. 
  * FALSE if filename not received. 


This function fetches parameter filename by sending an event TMS_EVT_GET_FILE to application. 


### function PutAppParameterFileByName

```cpp
vhq_result_t PutAppParameterFileByName(
    char * receiver_name,
    char * param_filename,
    char * additional_info,
    uint32 additional_info_size,
    dl_file_dl_type_t param_update_type
)
```


**Parameters**: 

  * **receiver_name** = receiver name of application 
  * **param_filename** = filename to be passed to application 
  * **additional_info** = additional information 
  * **additional_info_size** = sizeof additional_info array 
  * **param_update_type** = parameter update type of enum dl_file_dl_type_t.


**Return**: vhq_result_t 

This function passes an event TMS_EVT_PUT_FILE to application for an application parameter installation. 


### function AppActionPerform

```cpp
bool AppActionPerform(
    app_action_type_t app_action
)
```


**Parameters**: 

  * **app_action** = app_action_type_t enum


**Return**: 

  * TRUE if event is send. 
  * FALSE if event not send. 


This function sends an event TMS_EVT_DO_TRANSACTION and app action perform type string to application. 


### function NotifyApps

```cpp
vhq_result_t NotifyApps(
    int event_mask,
    char * filename,
    int notificationDataInteger,
    vhq_result_t vhq_result,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **event_mask** = event mask of event which needs to be notified of to app. 
  * **filename** = filename 
  * **notificationDataInteger** = 
  * **hbResult** = vhq_result_t enum type 
  * **event_set_id** = event_set_id 
  * **event_id** = event_id 
  * **app_approval_required** = bool, whether application approval is required.


**Return**: vhq_result_t VHQ_SUCCESS, if success 

This function sends an event TMS_EVT_NOTIFICATION to application. 


### function FlushAppIPCs

```cpp
void FlushAppIPCs(
    void 
)
```


### function AppDelFile

```cpp
bool AppDelFile(
    char * receiver_name,
    char * filename,
    char * additional_info,
    uint32 additional_info_size
)
```


**Parameters**: 

  * **receiver_name** = receiver name of application 
  * **filename** = filename to be deleted. 
  * **additional_info** = additional information 
  * **additional_info_size** = size of additional_info array


**Return**: 

  * TRUE if event is send. 
  * FALSE if event not send. 


This function sends an event TMS_EVT_DEL_FILE to application to delete a file. 


### function SetAppState

```cpp
void SetAppState(
    char * receiver,
    int appState
)
```


**Parameters**: 

  * **receiver** = receiver name of application 
  * **appState** = state of the application- BUSY/FREE/BUSY/POSTPONE.


**Return**: void 

This function sets a state to a registered application. 


### function DoContentCallback_New

```cpp
vhq_result_t DoContentCallback_New(
    char * user,
    char * pszContentFile,
    char * pszContentDest,
    dl_file_dl_type_t eType,
    char * additional_info,
    uint32 additional_info_size
)
```


**Parameters**: 

  * **user** = user 
  * **pszContentFile** = download file location 
  * **pszContentDest** = destination location to copy 
  * **eType** = dl_file_dl_type_t type of download package 
  * **additional_info** = contains additional information. Details from application are stored to this array. 
  * **additional_info_size** = size of additional_info array


**Return**: vhq_result_t 

This function sends an event TMS_EVT_PUT_FILE to application to do content updates. 


### function SendMsgToApp

```cpp
vhq_result_t SendMsgToApp(
    const char * receiver,
    int evtType,
    int messageID,
    int result,
    const char * fileName,
    const char * fileLocation,
    int eventMask,
    char * transactionType,
    int notificationDataInteger,
    unsigned char responseExpected,
    int putFileType
)
```


**Parameters**: 

  * **receiver** = receiver name of application 
  * **evtType** = event which should be sent to application 
  * **messageID** = meesage ID which will be sent to application, and same messageID will be received back from application. 
  * **result** = tms_status 
  * **fileName** = filename given to application for processing. 
  * **fileLocation** = file location 
  * **eventMask** = mask of events for TMS_EVT_NOTIFICATION event 
  * **transactionType** = type of transaction to perform in TMS_EVT_DO_TRANSACTION event 
  * **notificationDataInteger** = 
  * **responseExpected** = TRUE if a response is expected; FLASE, if not. 
  * **putFileType** = defines for put file type for TMS_EVT_PUT_FILE event.


**Return**: vhq_result_t VHQ_SUCCESS,if message sent 

This function sends messages and events to application. 



## Attributes Documentation

### variable appArrayMutex

```cpp
pthread_mutex_t appArrayMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable registered_app_array

```cpp
static appData_t[TMS_MAX_REGISTERED_APPS] registered_app_array;
```


### variable app_ifc_message_id

```cpp
static int app_ifc_message_id = 0x20000000;
```


### variable appContact

```cpp
static pthread_mutex_t appContact = PTHREAD_MUTEX_INITIALIZER;
```



## Macros Documentation

### define VHQ_APP_INFO_REQUEST_PERIOD_DEF

```cpp
#define VHQ_APP_INFO_REQUEST_PERIOD_DEF 86400
```


### define MIN_APP_RESPONSE_TIMEOUT

```cpp
#define MIN_APP_RESPONSE_TIMEOUT 5
```


### define APP_RESPONSE_RETRY

```cpp
#define APP_RESPONSE_RETRY 1
```


### define APP_RESPONSE_RETRY_DELAY

```cpp
#define APP_RESPONSE_RETRY_DELAY 1
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <svc.h>
#include "EventScheduler.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQManager.h"
#include "VHQUtils.h"

#include <fcntl.h>
#include <stdint.h>
#include <memory.h>
#include <grp.h>
#include <pwd.h>
#include <svcsec.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/stat.h>
#include <sys/types.h>

#if defined(Mx2)
//#include <svcmgr/private/vhq_priv.h>
#include "vhq_priv.h"
#include "tms_priv.h"
#else
#include "VHQAppIntegLib.h"
#include "VHQAppIntegLib_priv.h"
#endif

#define VHQ_APP_INFO_REQUEST_PERIOD_DEF     86400

typedef struct
{
  bool in_use;
  char user_name[64];
  uint32 event_mask;
  char receiver_name[128];
  long pid;
  bool use_TMS_API;
  int app_state;
  char app_pipe_name[32];
  tms_apptype_t app_type;
  char app_version[32];
  char app_customType[32];
  char app_additionalInfo[32];
} appData_t;

/* We have to give the application at least 5 seconds to respond */
#define MIN_APP_RESPONSE_TIMEOUT        5

#define APP_RESPONSE_RETRY              1
#define APP_RESPONSE_RETRY_DELAY        1

pthread_mutex_t appArrayMutex = PTHREAD_MUTEX_INITIALIZER;
static appData_t registered_app_array[TMS_MAX_REGISTERED_APPS];

static int app_ifc_message_id = 0x20000000;

static int convert_TMS_result_to_old_result_code(int tms_result)
{
  dbg_msg("%s: Converting tms_result %d\n", __FUNCTION__, tms_result);
  switch (tms_result)
  {
    case TMS_STATUS_SUCCESS:
      return VHQ_STATUS_SUCCESS;
      break;
    case TMS_STATUS_ERROR:
      return VHQ_STATUS_ERROR;
      break;
    case TMS_STATUS_UNSUPPORTED_FEATURE:
      return VHQ_STATUS_UNSUPPORTED_FEATURE;
      break;
    case TMS_STATUS_CONTENT_AVAILABLE:
      return VHQ_STATUS_CONTENT_AVAILABLE;
      break;
    case TMS_STATUS_NO_CONSUMER:
      return VHQ_STATUS_NO_CONSUMER;
      break;
    case TMS_STATUS_FILENAME_ERROR:
      return VHQ_STATUS_FILENAME_ERROR;
      break;
    case TMS_STATUS_CONTENT_FAILURE:
      return VHQ_STATUS_CONTENT_FAILURE;
      break;
    case TMS_STATUS_MSGQ_FAILURE:
      return VHQ_STATUS_MSGQ_FAILURE;
      break;
    case TMS_STATUS_MSGSND_FAILURE:
      return VHQ_STATUS_MSGSND_FAILURE;
      break;
    case TMS_STATUS_MSGRCV_FAILURE:
      return VHQ_STATUS_MSGRCV_FAILURE;
      break;
    case TMS_STATUS_APP_EVENT_AVAIL:
      return VHQ_STATUS_APP_EVENT_AVAIL;
      break;
    case TMS_STATUS_REQUESTED:
      return VHQ_STATUS_REQUESTED;
      break;
    case TMS_STATUS_REGISTER_FAIL:
      return VHQ_STATUS_ERROR;
      break;
    case TMS_STATUS_APP_IPC_FAILURE:
      return VHQ_STATUS_APP_IPC_FAILURE;
    default:
      return VHQ_STATUS_ERROR;
      break;
  }

  return VHQ_STATUS_ERROR;
}

static int convert_VHQ_result_to_TMS_result(int vhq_result)
{
  dbg_msg("%s: Converting vhq_result %d\n", __FUNCTION__, vhq_result);
  switch (vhq_result)
  {
    case VHQ_STATUS_SUCCESS:
      return TMS_STATUS_SUCCESS;
      break;
    case VHQ_STATUS_ERROR:
      return TMS_STATUS_ERROR;
      break;
    case VHQ_STATUS_UNSUPPORTED_FEATURE:
      return TMS_STATUS_UNSUPPORTED_FEATURE;
      break;
    case VHQ_STATUS_CONTENT_AVAILABLE:
      return TMS_STATUS_CONTENT_AVAILABLE;
      break;
    case VHQ_STATUS_NO_CONSUMER:
      return TMS_STATUS_NO_CONSUMER;
      break;
    case VHQ_STATUS_FILENAME_ERROR:
      return TMS_STATUS_FILENAME_ERROR;
      break;
    case VHQ_STATUS_CONTENT_FAILURE:
      return TMS_STATUS_CONTENT_FAILURE;
      break;
    case VHQ_STATUS_MSGQ_FAILURE:
      return TMS_STATUS_MSGQ_FAILURE;
      break;
    case VHQ_STATUS_MSGSND_FAILURE:
      return TMS_STATUS_MSGSND_FAILURE;
      break;
    case VHQ_STATUS_MSGRCV_FAILURE:
      return TMS_STATUS_MSGRCV_FAILURE;
      break;
    case VHQ_STATUS_APP_EVENT_AVAIL:
      return TMS_STATUS_APP_EVENT_AVAIL;
      break;
    case VHQ_STATUS_REQUESTED:
      return TMS_STATUS_REQUESTED;
      break;
    case VHQ_STATUS_APP_IPC_FAILURE:
      return TMS_STATUS_APP_IPC_FAILURE;
    default:
      return TMS_STATUS_ERROR;
      break;
  }

  return TMS_STATUS_ERROR;
}

static int convert_evt_to_msg_type(int evtType)
{
  dbg_msg("%s: Converting evtType %d\n", __FUNCTION__, evtType);
  switch (evtType)
  {
    case TMS_EVT_REGISTER_APP_RESPONSE:
      return VHQ_MESSAGE_TYPE_REGISTER_APP;
    case TMS_EVT_UNREGISTER_APP_RESPONSE:
      return VHQ_MESSAGE_TYPE_REGISTER_APP;
    case TMS_EVT_CALL_SERVER_RESPONSE:
      return VHQ_MESSAGE_TYPE_CALL_SERVER;
    case TMS_EVT_GET_TMS_CONFIG_RESPONSE:
      return VHQ_MESSAGE_TYPE_GET_VHQ_CONFIG;
    case TMS_EVT_SET_TMS_CONFIG_RESPONSE:
      return VHQ_MESSAGE_TYPE_SET_VHQ_CONFIG;

    case TMS_EVT_SET_APP_STATE:
      return VHQ_MESSAGE_TYPE_SET_APP_STATE;
    case TMS_EVT_SET_APP_INFO:
      return VHQ_MESSAGE_TYPE_SET_APP_INFO;
    case TMS_EVT_SET_PARM_LIST:
      return VHQ_MESSAGE_TYPE_SET_PARM_LIST;
    case TMS_EVT_GET_PARM_FILE:
      return VHQ_MESSAGE_TYPE_GET_PARM_FILE;
    case TMS_EVT_GET_FILE:
      return VHQ_MESSAGE_TYPE_GET_FILE;
    case TMS_EVT_PUT_FILE:
      return VHQ_MESSAGE_TYPE_PUT_FILE;
    case TMS_EVT_DEL_FILE:
      return VHQ_MESSAGE_TYPE_DEL_FILE;
    case TMS_EVT_DO_TRANSACTION:
      return VHQ_MESSAGE_TYPE_DO_TRANSACTION;

    case TMS_EVT_NOTIFICATION:
      return VHQ_MESSAGE_TYPE_EVENT_NOTIFY;
  }

  return -1;
}

static int convert_vhqMsgType_to_tmsEvt(int vhqMsgType)
{
  dbg_msg("%s: Converting vhqMsgType %d\n", __FUNCTION__, vhqMsgType);
  switch (vhqMsgType)
  {
    case VHQ_MESSAGE_TYPE_REGISTER_APP:
      return TMS_EVT_REGISTER_APP_RESPONSE;
    case VHQ_MESSAGE_TYPE_CALL_SERVER:
      return TMS_EVT_CALL_SERVER_RESPONSE;
    case VHQ_MESSAGE_TYPE_GET_VHQ_CONFIG:
      return TMS_EVT_GET_TMS_CONFIG_RESPONSE;
    case VHQ_MESSAGE_TYPE_SET_VHQ_CONFIG:
      return TMS_EVT_SET_TMS_CONFIG_RESPONSE;

    case VHQ_MESSAGE_TYPE_SET_APP_STATE:
      return TMS_EVT_SET_APP_STATE;
    case VHQ_MESSAGE_TYPE_SET_APP_INFO:
      return TMS_EVT_SET_APP_INFO;
    case VHQ_MESSAGE_TYPE_SET_PARM_LIST:
      return TMS_EVT_SET_PARM_LIST;
    case VHQ_MESSAGE_TYPE_GET_PARM_FILE:
      return TMS_EVT_GET_PARM_FILE;
    case VHQ_MESSAGE_TYPE_GET_FILE:
      return TMS_EVT_GET_FILE;
    case VHQ_MESSAGE_TYPE_PUT_FILE:
      return TMS_EVT_PUT_FILE;
    case VHQ_MESSAGE_TYPE_DEL_FILE:
      return TMS_EVT_DEL_FILE;
    case VHQ_MESSAGE_TYPE_DO_TRANSACTION:
      return TMS_EVT_DO_TRANSACTION;

    case VHQ_MESSAGE_TYPE_EVENT_NOTIFY:
      return TMS_EVT_NOTIFICATION;
  }

  return -1;
}

static int convertTxType(char *txType)
{
  if (txType == NULL)
    return 0;

  dbg_msg("%s: Converting txType %s\n", __FUNCTION__, txType);
  if (strcmp(txType, "EODClearance") == 0)
    return VHQ_APP_TRANSACTION_DAILY_CLEARANCE;
  else if (strcmp(txType, "Diagnostics") == 0)
    return VHQ_APP_TRANSACTION_DIAGNOSTICS;
  else
    return 0;
}

static void convert_vhqAppRes_to_tmsEvt(struct vhqAppResultReturn *vhqRes_p,
                                        struct tmsEventData *tmsRes_p)
{
  tmsRes_p->status = convert_VHQ_result_to_TMS_result(vhqRes_p->status);
  tmsRes_p->evtType = convert_vhqMsgType_to_tmsEvt(vhqRes_p->messageType);
  tmsRes_p->handle = vhqRes_p->messageID;
  tmsRes_p->numFileEntries = vhqRes_p->numFileEntries;
  tmsRes_p->removeFile = vhqRes_p->removeFile;
  tmsRes_p->appStatus = vhqRes_p->appStatus;
  strcpy(tmsRes_p->filename, vhqRes_p->fileName);
  strcpy(tmsRes_p->filepath, vhqRes_p->fileLocation);
}

static int convertTmsEventMasktoVHQ(int tms_ev_mask)
{
  int vhq_event_mask = 0;

  if (tms_ev_mask & TMS_EVENT_NOTIFY_REBOOT_DEVICE)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_REBOOT_DEVICE;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_RESTART_APPS)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_RESTART_APPS;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_DOWNLOAD_STARTED)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_DOWNLOAD_STARTED;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_DOWNLOAD_PERCENT;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_DOWNLOAD_COMPLETE;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_INSTALL_DOWNLOAD;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_MAINTENANCE_END)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_MAINTENANCE_END;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_HEARTBEAT_RESULT)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_HEARTBEAT_RESULT;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_CONTACT_SERVER_START)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_CONTACT_SERVER_START;
  if (tms_ev_mask & TMS_EVENT_NOTIFY_CONTACT_SERVER_END)
    vhq_event_mask |= VHQ_EVENT_NOTIFY_CONTACT_SERVER_END;

  return vhq_event_mask;
}

static const char* evt_to_string(const int evtType)
{
  switch (evtType)
  {
    case TMS_EVT_REGISTER_APP_RESPONSE:
      return "TMS_EVT_REGISTER_APP_RESPONSE";
    case TMS_EVT_UNREGISTER_APP_RESPONSE:
      return "TMS_EVT_UNREGISTER_APP_RESPONSE";
    case TMS_EVT_CALL_SERVER_RESPONSE:
      return "TMS_EVT_CALL_SERVER_RESPONSE";
    case TMS_EVT_GET_TMS_CONFIG_RESPONSE:
      return "TMS_EVT_GET_TMS_CONFIG_RESPONSE";
    case TMS_EVT_SET_TMS_CONFIG_RESPONSE:
      return "TMS_EVT_SET_TMS_CONFIG_RESPONSE";

    case TMS_EVT_SET_APP_STATE:
      return "TMS_EVT_SET_APP_STATE";
    case TMS_EVT_SET_APP_INFO:
      return "TMS_EVT_SET_APP_INFO";
    case TMS_EVT_SET_PARM_LIST:
      return "TMS_EVT_SET_PARM_LIST";
    case TMS_EVT_GET_PARM_FILE:
      return "TMS_EVT_GET_PARM_FILE";
    case TMS_EVT_GET_FILE:
      return "TMS_EVT_GET_FILE";
    case TMS_EVT_PUT_FILE:
      return "TMS_EVT_PUT_FILE";
    case TMS_EVT_DEL_FILE:
      return "TMS_EVT_DEL_FILE";
    case TMS_EVT_DO_TRANSACTION:
      return "TMS_EVT_DO_TRANSACTION";

    case TMS_EVT_NOTIFICATION:
      return "TMS_EVT_NOTIFICATION";

    case TMS_EVT_GET_SERVER_INSTANCE:
      return "TMS_EVT_GET_SERVER_INSTANCE";
    case TMS_EVT_LOCK_SERVER_INSTANCE:
      return "TMS_EVT_LOCK_SERVER_INSTANCE";
    case TMS_EVT_RELEASE_SERVER_INSTANCE:
      return "TMS_EVT_RELEASE_SERVER_INSTANCE";

    case TMS_EVT_APP_ALERT_RESULT:
      return "TMS_EVT_APP_ALERT_RESULT";

    case TMS_EVT_API_ERRORS:
      return "TMS_EVT_API_ERRORS";

    case TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT:
      return "TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT";

    default:
      return "UNKNOWN";
  }
}

static char* status_to_string(int status)
{
  switch (status)
  {
    case TMS_STATUS_SUCCESS:
      return (char*) "Success";
    case TMS_STATUS_ERROR:
      return (char*) "Error";
    case TMS_STATUS_UNSUPPORTED_FEATURE:
      return (char*) "Unsupported Feature";
    case TMS_STATUS_CONTENT_AVAILABLE:
      return (char*) "Content Avaliable";
    case TMS_STATUS_NO_CONSUMER:
      return (char*) "No Consumer";
    case TMS_STATUS_FILENAME_ERROR:
      return (char*) "Filename ERROR";
    case TMS_STATUS_CONTENT_FAILURE:
      return (char*) "Status Content Failure";

    case TMS_STATUS_MSGQ_FAILURE:
      return (char*) "Message Queue FAILURE";
    case TMS_STATUS_MSGSND_FAILURE:
      return (char*) "Message Send FAILURE";
    case TMS_STATUS_MSGRCV_FAILURE:
      return (char*) "Message Receive FAILURE";
    case TMS_STATUS_APP_EVENT_AVAIL:
      return (char*) "App Event Available";

    case TMS_STATUS_REQUESTED:
      return (char*) "Requested";

    case TMS_STATUS_REGISTER_FAIL:
      return (char*) "Register Fail";
    case TMS_STATUS_REGISTER_NAME_TOO_LONG:
      return (char*) "Register Name Too Long";
    case TMS_STATUS_EINVAL:
      return (char*) "Error in Value";
    case TMS_STATUS_AGENT_NOT_RUNNING:
      return (char*) "Agent Not Running";

    case TMS_STATUS_SERVER_INSTANCE_ERROR:
      return (char*) "Srv Inst Error";
    case TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR:
      return (char*) "Srv Inst Lock Error";
    case TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR:
      return (char*) "Srv Inst Lock Timeout Error";
    case TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED:
      return (char*) "Srv Inst Already Locked";
    case TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED:
      return (char*) "Too Many SrvInst Lock Requests";
    case TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR:
      return (char*) "Srv Inst Unlock Error";
    case TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR:
      return (char*) "Srv Inst Config Load Error";

    case TMS_STATUS_AGENT_BUSY_ERROR:
      return (char*) "Agent Busy Error";
    case TMS_STATUS_POSTPONED:
      return (char*) "Postponed";
    case TMS_STATUS_CANCELLED:
      return (char*) "Cancelled";
    case TMS_STATUS_AGENT_CONTACTSRV_ERROR:
      return "Agent not registered on the server yet";
    case TMS_STATUS_API_SYNC_ERROR:
      return "Lost SYNC of TMS exchange";
    case TMS_STATUS_APP_IPC_FAILURE:
      return "IPC Failure";

    default:
      return (char*) "Unknown";
  }

  return (char*) "Unknown";
}

static void setup_file_permissions(char *fileName, char *user)
{
  char groupname[16];
  struct group *psGroup;

  sprintf(groupname, "%ssys", user);
  psGroup = getgrnam(groupname);

  if (psGroup)
  {
    int chmod_ret, chown_ret;

    dbg_msg("%s: Changing ownership of %s to group %s (gid = %d)\n",
            __FUNCTION__, fileName, groupname, psGroup->gr_gid);
    chmod_ret = chmod(fileName, 0640);
    dbg_msg("%s: chmod() returned %d, errno = %d\n", __FUNCTION__, chmod_ret,
            errno);
    chown_ret = chown(fileName, getuid(), psGroup->gr_gid);
    dbg_msg("%s: chown() returned %d, errno = %d (%s)\n", __FUNCTION__,
            chown_ret, errno, strerror(errno));
  }
  else
  {
    int chmod_ret;

    dbg_err("%s: Couldn't get info for group %s (psGroup = 0x%08x)\n",
            __FUNCTION__, groupname, (unsigned int )psGroup);
    chmod_ret = chmod(fileName, 0644);
    dbg_msg("%s: chmod() returned %d, errno = %d\n", __FUNCTION__, chmod_ret,
            errno);
  }

  return;
}


static int FindReceiver(const char *receiver_name)
{
  int i;

  if (receiver_name != NULL)
  {
    for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
    {
      if ((registered_app_array[i].in_use)
          && (strcmp(registered_app_array[i].receiver_name, receiver_name) == 0))
      {
        /* We found a match so return the index */
        return i;
      }
    }
  }

  return -1;
}

tms_apptype_t GetReceiverType(int index)
{
  tms_apptype_t app_type = TMS_APP_TYPE_DEFAULT;

  if (index >= 0 && index < TMS_MAX_REGISTERED_APPS)
  {
    pthread_mutex_lock(&appArrayMutex);
    app_type = registered_app_array[index].app_type;
    pthread_mutex_unlock(&appArrayMutex);
  }

  return app_type;
}

void GetRegisteredAppVersion(int index, char *AppVersion)
{
  if (index >= 0 && index < TMS_MAX_REGISTERED_APPS)
  {
    pthread_mutex_lock(&appArrayMutex);
    strcpy(AppVersion, registered_app_array[index].app_version);
    pthread_mutex_unlock(&appArrayMutex);
  }

  return;
}

void GetRegisteredAppCustomType(int index, char *CustomType)
{
  if (index >= 0 && index < TMS_MAX_REGISTERED_APPS)
  {
    pthread_mutex_lock(&appArrayMutex);
    strcpy(CustomType, registered_app_array[index].app_customType);
    pthread_mutex_unlock(&appArrayMutex);
  }

  return;
}

void GetRegisteredAppAddInfo(int index, char *AddInfo)
{
  if (index >= 0 && index < TMS_MAX_REGISTERED_APPS)
  {
    pthread_mutex_lock(&appArrayMutex);
    strcpy(AddInfo, registered_app_array[index].app_additionalInfo);
    pthread_mutex_unlock(&appArrayMutex);
  }

  return;
}


void GetRegisteredAppName(int i, char *AppName)
{
  pthread_mutex_lock(&appArrayMutex);

  if (i < TMS_MAX_REGISTERED_APPS && registered_app_array[i].in_use)
  {
    strcpy(AppName, registered_app_array[i].receiver_name);
    dbg_msg("%s App Receiver Name in index %d is %s \n", __FUNCTION__, i, AppName);
  }

  pthread_mutex_unlock(&appArrayMutex);
  return;
}

int FindUser(int start_index, char *user)
{
  int i;

  for (i = start_index; i < TMS_MAX_REGISTERED_APPS; i++)
  {
    if ((registered_app_array[i].in_use)
        && (strcmp(registered_app_array[i].user_name, user) == 0))
    {
      /* We found a match so return the index */
      return i;
    }
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: registered_app_array[%d].receiver_name = '%s' - looking for '%s'\n", __FUNCTION__, i, registered_app_array[i].receiver_name, receiver_name);
  }

  return -1;
}

static bool ReadParamDataFile(char *file_name, int num_entries,
                              app_param_files_t *ParamFileArray, int ArraySize,
                              uint8 *num_param_files)
{
  (void) (ArraySize);
  int i;
  int file_buf_offset = 0;
  int file_buf_size = 0;
  char *file_buf = NULL;
  char buffer[2048];
  int fd;
  bool ret_val = FALSE;
  int read_res;

  dbg_trace("%s: +\n", __FUNCTION__);

  fd = open(file_name, O_RDONLY, 0666);
  if (fd == -1)
    return FALSE;

  file_buf_size = FileSize(file_name) + 1;
  dbg_msg("%s: malloc'ing %d bytes to read file into memory\n", __FUNCTION__,
          file_buf_size);
  file_buf = malloc(file_buf_size);
  if (file_buf == NULL)
  {
    close(fd);
    return FALSE;
  }

  memset(file_buf, 0, file_buf_size);
  read_res = read(fd, file_buf, file_buf_size - 1);
  if (read_res == -1)
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not read from %s \n",
             __FUNCTION__, file_name);
  dbg_msg("%s: reading %d entries from %s [%s]\n", __FUNCTION__, num_entries,
          file_name, file_buf);
  for (i = 0; i < num_entries; i++)
  {
    int array_index;
    int buffer_index;
    char f_name[1024];
    char hash_algo[128];
    char hash_val[512];

    memset(buffer, 0, sizeof(buffer));
    buffer_index = 0;
    while ((file_buf_offset < (file_buf_size - 1))
        && ((file_buf[file_buf_offset] != '\n')
            && (file_buf[file_buf_offset] != '\r')))
    {
      buffer[buffer_index] = file_buf[file_buf_offset];
      file_buf_offset++;
      buffer_index++;
    }

    buffer[buffer_index] = '\r';
    buffer[buffer_index + 1] = '\n';

    array_index = *num_param_files;
    dbg_msg("%s: read line %d - %s - scanning (*num_param_files = %d)\n",
            __FUNCTION__, i + 1, buffer, array_index);

    if (sscanf(buffer, "%s %s %s", f_name, hash_algo, hash_val) == 3)
    {
      dbg_msg(
          "%s: Read ParamFile %d - Name = %s, Hash Algo = %s, Hash Value = %s\n",
          __FUNCTION__, array_index, f_name, hash_algo, hash_val);

      dbg_msg("%s: Copying %s to ParamFileArray[%d].name \n", __FUNCTION__,
              f_name, array_index);
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: (size = %d)\n", __FUNCTION__, sizeof(ParamFileArray[array_index].name));
      snprintf(ParamFileArray[array_index].name,
               sizeof(ParamFileArray[array_index].name), "%s", f_name);
      dbg_msg("%s: Copying %s to ParamFileArray[%d].hash_algo \n", __FUNCTION__,
              hash_algo, array_index);
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: (size = %d)\n", __FUNCTION__, sizeof(ParamFileArray[array_index].hash_algo));
      snprintf(ParamFileArray[array_index].hash_algo,
               sizeof(ParamFileArray[array_index].hash_algo), "%s", hash_algo);
      dbg_msg("%s: Copying %s to ParamFileArray[%d].hash_value \n",
              __FUNCTION__, hash_val, array_index);
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: (size = %d)\n", __FUNCTION__, sizeof(ParamFileArray[array_index].hash_value));
      snprintf(ParamFileArray[array_index].hash_value,
               sizeof(ParamFileArray[array_index].hash_value), "%s", hash_val);
      dbg_msg("%s: Incrementing *num_param_files\n", __FUNCTION__);
      (*num_param_files)++;

      /* If we are able to read even one parameter file, return TRUE */
      ret_val = TRUE;
    }

    while ((file_buf[file_buf_offset] == '\n')
        || (file_buf[file_buf_offset] == '\r'))
    {
      file_buf_offset++;
    }

  }

  close(fd);

  if (file_buf)
    free(file_buf);

  dbg_msg("%s: returning %d - num_param_files = %d\n", __FUNCTION__, ret_val,
          *num_param_files);
  return ret_val;
}

static pthread_mutex_t appContact = PTHREAD_MUTEX_INITIALIZER;

static bool GetAppResponse(const char *user, const char *receiver,
                           const int evtType_filter, int messageID, int timeout,
                           struct tmsEventData *AppResult)
{
  bool ret_val = FALSE;
  int index;

  dbg_trace("%s: +\n", __FUNCTION__);

  if (!AppResult)
  {
    log_err("%s ERROR: input parameter NULL\n", __FUNCTION__);
    return FALSE;
  }

  index = FindReceiver(receiver);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver '%s'\n", __FUNCTION__, receiver);
    return FALSE;
  }

  if (timeout < MIN_APP_RESPONSE_TIMEOUT)
  {
    timeout = MIN_APP_RESPONSE_TIMEOUT;
  }

  dbg_msg("%s: timeout = %d\n", __FUNCTION__, timeout);
  memset(AppResult, 0, sizeof(struct tmsEventData));

#if defined(Mx2)
  if (registered_app_array[index].use_TMS_API)
  {
    struct tmsEventData appResult;
    int result_retries = APP_RESPONSE_RETRY;

    while (result_retries--)
    {
      appResult = tms_getAppResult(user, receiver, timeout * 1000);

      if (appResult.status == TMS_STATUS_MSGRCV_FAILURE)
      {
        dbg_msg("%s: no result yet - retrying\n", __FUNCTION__);
        continue;
      }
      else if (appResult.status == TMS_STATUS_APP_IPC_FAILURE)
      {
        log_err("%s: App IPC, error or eof\n", __FUNCTION__);
        dbg_msg("%s: Unregistering app\n", __FUNCTION__);
        UnRegisterUserApp(user, receiver);
        break;
      }

      if (appResult.evtType != evtType_filter)
      {
        char description[128];
        snprintf(description, sizeof(description),
                 "sent %s type when %s is expected by Agent",
                 evt_to_string(appResult.evtType),
                 evt_to_string(evtType_filter));

        log_err(
            "%s:=================== CRITICAL ERROR!!! ===================\n",
            __FUNCTION__);
        dbg_err("%s: %s\n", __FUNCTION__, description);
        log_err(
            "%s: Incorrect application reply details:\n\tStatus = %d\n\tType = %d\n\tHandle = %d\n\tApp Status = %d\n\tFilename = %s\n\tFileLocation = %s\n\tEvent Mask = 0x%08x\n\tTransaction Type = %s\n",
            __FUNCTION__, appResult.status, appResult.evtType, appResult.handle,
            appResult.appStatus, appResult.filename, appResult.filepath,
            appResult.eventMask, appResult.transactionType);
        dbg_err(
            "%s: Try to process next message from the application, if any\n",
            __FUNCTION__);
        dbg_err(
            "%s:=========================================================\n",
            __FUNCTION__);

        /* Notify application that something going wrong */
        if (SendMsgToApp(receiver, TMS_EVT_API_ERRORS, messageID,
                         TMS_STATUS_API_SYNC_ERROR, description, NULL, 0, NULL,
                         0, FALSE, 0) == VHQ_SUCCESS)
          dbg_err("%s: Application \"%s\" notified about problems\n",
                  __FUNCTION__, receiver);
        continue;
      }

      memcpy(AppResult, &appResult, sizeof(struct tmsEventData));
      dbg_msg(
          "%s: AppResult Details\n\tStatus = %d\n\tType = %d\n\tHandle = %d\n\tApp Status = %d\n\tFilename = %s\n\tFileLocation = %s\n\tEvent Mask = 0x%08x\n\tTransaction Type = %s\n",
          __FUNCTION__, AppResult->status, AppResult->evtType,
          AppResult->handle, AppResult->appStatus, AppResult->filename,
          AppResult->filepath, AppResult->eventMask,
          AppResult->transactionType);

      ret_val = TRUE;
      break;
    }

    if (ret_val == FALSE)
      log_err("%s ERROR: timeout waiting for app response\n", __FUNCTION__);
  }
#endif //defined(Mx2)
  else
  {
    struct vhqAppResultReturn *appResult_p = NULL;
    int result_retries = timeout / APP_RESPONSE_RETRY_DELAY;

    while (result_retries--)
    {
      sleep(APP_RESPONSE_RETRY_DELAY);

#if defined(Mx2)
      appResult_p = vhq_getAppResult(user, receiver, messageID,
                                     1 /* non-block */);
#else
      appResult_p = vhq_getAppResult(messageID, IPC_NOWAIT);
#endif
      if ((appResult_p == NULL) && (errno == EFAULT))
      {
        dbg_msg("%s: no result yet - retrying\n", __FUNCTION__);
        continue;
      }

      if (appResult_p)
      {
        dbg_msg(
            "%s: Got result pointer 0x%08x (errno=%d) - copying to passed in struct @ 0x%08x\n",
            __FUNCTION__, appResult_p, errno, AppResult);
        convert_vhqAppRes_to_tmsEvt(appResult_p, AppResult);

        if (AppResult->evtType != evtType_filter)
        {
          char description[128];
          snprintf(description, sizeof(description),
                   "sent %s type when %s is expected by Agent",
                   evt_to_string(AppResult->evtType),
                   evt_to_string(evtType_filter));

          log_err(
              "%s:=================== CRITICAL ERROR!!! ===================\n",
              __FUNCTION__);
          dbg_err("%s: %s\n", __FUNCTION__, description);
          log_err(
              "%s: Incorrect application reply details:\n\tStatus = %d\n\tType = %d\n\tHandle = %d\n\tApp Status = %d\n\tFilename = %s\n\tFileLocation = %s\n\tEvent Mask = 0x%08x\n\tTransaction Type = %s\n",
              __FUNCTION__, AppResult->status, AppResult->evtType,
              AppResult->handle, AppResult->appStatus, AppResult->filename,
              AppResult->filepath, AppResult->eventMask,
              AppResult->transactionType);
          dbg_err(
              "%s: Try to process next message from the application, if any\n",
              __FUNCTION__);
          dbg_err(
              "%s:=========================================================\n",
              __FUNCTION__);
          memset(AppResult, 0, sizeof(struct tmsEventData));

          /* Notify application that something going wrong */
          if (SendMsgToApp(receiver, TMS_EVT_API_ERRORS, messageID,
                           TMS_STATUS_API_SYNC_ERROR, description, NULL, 0,
                           NULL, 0, FALSE, 0) == VHQ_SUCCESS)
            dbg_msg("%s: Application \"%s\" notified about problems\n",
                    __FUNCTION__, receiver);
          continue;
        }

        dbg_msg(
            "%s: AppResult Details\n\tStatus = %d\n\tType = %d\n\tHandle = %d\n\tApp Status = %d\n\tFilename = %s\n\tFileLocation = %s\n\tEvent Mask = 0x%08x\n\tTransaction Type = %s\n",
            __FUNCTION__, AppResult->status, AppResult->evtType,
            AppResult->handle, AppResult->appStatus, AppResult->filename,
            AppResult->filepath, AppResult->eventMask,
            AppResult->transactionType);

        ret_val = TRUE;
        break;
      }
    }

    if (ret_val == FALSE)
      log_err("%s ERROR: timeout waiting for app response\n", __FUNCTION__);

#if defined(Mx2)
    if ((AppResult->evtType == TMS_EVT_SET_APP_STATE)
        && (AppResult->appStatus != APP_STATUS_FREE))
    {
      log_dbg(
          "%s: Leaving event open because app is not FREE (user = %s, messageID = %d)\n",
          __FUNCTION__, user, messageID);
    }
    else
    {
      /* Close the event since we will not be looking for result anymore */
      vhq_closeAppResultEvent(user, receiver, messageID);
    }
#endif
  }

  return ret_val;
}

static bool AppNeedsToApprove(int index, int event_mask)
{
  if (!registered_app_array[index].in_use)
    return FALSE;

  if (registered_app_array[index].use_TMS_API)
  {
    /* REBOOT, RESTART_APP, INSTALL_DOWNLOAD require approval from the apps so lets get it */
    if ((event_mask & TMS_EVENT_NOTIFY_REBOOT_DEVICE)
        || (event_mask & TMS_EVENT_NOTIFY_RESTART_APPS)
        || (event_mask & TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD)
        || (event_mask & TMS_EVENT_NOTIFY_CLOCK_UPDATE))
    {
      if (event_mask & registered_app_array[index].event_mask)
      {
        dbg_msg("%s: TMS app %s needs to approve events 0x%08x\n", __FUNCTION__,
                registered_app_array[index].receiver_name, event_mask);
        return TRUE;
      }
    }
    else if (event_mask & TMS_EVENT_NOTIFY_CONTACT_SERVER_START)
    {
      /* This is a contact server event, lets see if the app needs to approve server contact */
      if (registered_app_array[index].event_mask
          & TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL)
      {
        dbg_msg("%s: TMS app %s needs to approve server contact\n",
                __FUNCTION__, registered_app_array[index].receiver_name);
        return TRUE;
      }
    }
  }
  else
  {
    int vhq_event_mask = convertTmsEventMasktoVHQ(event_mask);

    /* REBOOT, RESTART_APP and INSTALL_DOWNLOAD require approval from the apps so lets get it */
    if ((vhq_event_mask & VHQ_EVENT_NOTIFY_REBOOT_DEVICE)
        || (vhq_event_mask & VHQ_EVENT_NOTIFY_RESTART_APPS)
        || (vhq_event_mask & VHQ_EVENT_NOTIFY_INSTALL_DOWNLOAD))
    {
      if (vhq_event_mask & registered_app_array[index].event_mask)
      {
        dbg_msg("%s: VHQ app %s needs to approve events 0x%08x\n", __FUNCTION__,
                registered_app_array[index].receiver_name, vhq_event_mask);
        return TRUE;
      }
    }
  }
  return FALSE;
}

static vhq_result_t GetAppEventAproval(int event_mask,
                                       event_set_id_t event_set_id,
                                       event_id_t event_id)
{
  bool proceed_on_failure;
  vhq_result_t ret_val = VHQ_SUCCESS;
  bool app_responding, app_is_free;
  int index;
  int _messageID;

  VHQGetParameterBool(PARAM_APP_IFC_PROCEED_ON_FAILURE, &proceed_on_failure);
  dbg_msg("%s: ENTER - proceed_on_failure = %d\n", __FUNCTION__,
          proceed_on_failure);

  for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
  {
    /* Make sure app is registered and wants this notification */
    if ((registered_app_array[index].in_use)
        && (AppNeedsToApprove(index, event_mask)))
    {
#if defined(Mx2)
      uint32 busy_delay;

      VHQGetParameterUint32(PARAM_APP_IFC_BUSY_APP_RESPONSE_TIMEOUT,
                            &busy_delay, BASE_10);
      /* If the app already said it was BUSY, let's just wait for it to free itself */
      while (busy_delay
          && (registered_app_array[index].app_state == APP_STATUS_BUSY))
      {
        dbg_msg(
            "%s: found BUSY in_use receiver %s in slot %d - waiting %d more seconds for user to set FREE state\n",
            __FUNCTION__, registered_app_array[index].receiver_name, index,
            busy_delay);
        sleep(5);
        busy_delay -= 5;

        /* Check if a request came in to change the state */
        pthread_mutex_unlock(&appArrayMutex);
        ProcessServerRequests(FALSE);
        pthread_mutex_lock(&appArrayMutex);
      }
#endif

      /* Continue to talk to the app while it is responding - if it doesn't respond at all, we can break out */
      app_responding = TRUE;
      app_is_free = FALSE;

      while (app_responding && !app_is_free)
      {
        dbg_msg(
            "%s: found in_use receiver %s in slot %d - sending app event TMS_EVT_SET_APP_STATE to user %s\n",
            __FUNCTION__, registered_app_array[index].receiver_name, index,
            registered_app_array[index].user_name);

        /* Mark app_responding as FALSE now - it will get reset to TRUE if the app responds to any of these requests */
        app_responding = FALSE;
        app_is_free = TRUE;

        /* Lock communication session with application */
        pthread_mutex_lock(&appContact);

        app_ifc_message_id++;
        _messageID = app_ifc_message_id;

        if (SendMsgToApp(registered_app_array[index].receiver_name,
                         TMS_EVT_SET_APP_STATE, _messageID, TMS_STATUS_SUCCESS,
                         NULL, NULL, event_mask, NULL, 0, TRUE, 0)
            == VHQ_SUCCESS)
        {
          uint32 timeout;
          struct tmsEventData app_result;

          dbg_msg(
              "%s: Successfully sent TMS_EVT_SET_APP_STATE - waiting for response (pid = %d)\n",
              __FUNCTION__, getpid());

          VHQGetParameterUint32(PARAM_APP_IFC_SET_APP_STATE_RESPONSE_TIMEOUT,
                                &timeout, BASE_10);
          if (GetAppResponse(registered_app_array[index].user_name,
                             registered_app_array[index].receiver_name,
                             TMS_EVT_SET_APP_STATE, _messageID, timeout,
                             &app_result))
          {
            /* The app is responding so we should stay in this loop and continue to check with the app if something goes wrong from here */
            app_responding = TRUE;

            EventSchedulerPetWatchdog(event_set_id, event_id);

            dbg_notice(
                "%s: GetAppResponse() returned TMS_EVT_SET_APP_STATE type - status = %d\n",
                __FUNCTION__, app_result.status);
            if (app_result.status == TMS_STATUS_SUCCESS)
            {
              dbg_msg(
                  "%s: TMS_EVT_SET_APP_STATE was SUCCESSFUL - appStatus = %d\n",
                  __FUNCTION__, app_result.appStatus);
              SetAppState(registered_app_array[index].receiver_name,
                          app_result.appStatus);

              if ((app_result.appStatus != APP_STATUS_FREE)
                  && (app_result.appStatus != APP_STATUS_POSTPONE))
              {
                struct tmsEventData busy_app_result;

                app_is_free = FALSE;
                VHQGetParameterUint32(PARAM_APP_IFC_BUSY_APP_RESPONSE_TIMEOUT,
                                      &timeout, BASE_10);
                dbg_msg(
                    "%s: app %s is BUSY - waiting for it to respond with FREE status in next %d seconds\n",
                    __FUNCTION__, registered_app_array[index].receiver_name,
                    timeout);
                if (GetAppResponse(registered_app_array[index].user_name,
                                   registered_app_array[index].receiver_name,
                                   TMS_EVT_SET_APP_STATE, _messageID, timeout,
                                   &busy_app_result))
                {
                  dbg_notice(
                      "%s: GetAppResponse() returned TMS_EVT_SET_APP_STATE type - status = %d\n",
                      __FUNCTION__, busy_app_result.status);
                  if (busy_app_result.status == TMS_STATUS_SUCCESS)
                  {
                    dbg_msg(
                        "%s: TMS_EVT_SET_APP_STATE was SUCCESSFUL - appStatus = %d\n",
                        __FUNCTION__, busy_app_result.appStatus);
                    SetAppState(registered_app_array[index].receiver_name,
                                busy_app_result.appStatus);

                    if ((busy_app_result.appStatus != APP_STATUS_FREE)
                        && (busy_app_result.appStatus != APP_STATUS_POSTPONE))
                    {
                      /* App did not respond after the BUSY status with a FREE status */
                      log_dbg(
                          "%s: App STILL Busy - GetAppResponse(user = %s, receiver = %s) for TMS_EVT_SET_APP_STATE got appStatus %d\n",
                          __FUNCTION__, registered_app_array[index].user_name,
                          registered_app_array[index].receiver_name,
                          busy_app_result.appStatus);
                      if (!proceed_on_failure)
                        ret_val = VHQ_API_APP_APPROVAL_ERROR;
                    }
                    else
                    {
                      if (busy_app_result.appStatus == APP_STATUS_POSTPONE)
                      {
                        log_dbg(
                            "%s: Application returned APP_STATUS_POSTPONE - setting ret_val = VHQ_API_POSTPONED\n",
                            __FUNCTION__);
                        ret_val = VHQ_API_POSTPONED;
                      }
                      else
                      {
                        /* Mitch ADKTMS-1999 (10-11-2017): In previous iteration through this while, we may have set ret_val to
                         something other than VHQ_SUCCESS, so set it to VHQ_SUCCESS again */
                        dbg_msg(
                            "%s: Application returned APP_STATUS_FREE (%d) - setting ret_val = VHQ_SUCCESS\n",
                            __FUNCTION__, app_result.appStatus);
                        ret_val = VHQ_SUCCESS;
                      }
                      app_is_free = TRUE;
                    }
                  }
                  else
                  {
                    if (!proceed_on_failure)
                      ret_val = VHQ_API_APP_APPROVAL_ERROR;
                    log_err(
                        "%s: App Busy - GetAppResponse(user = %s, receiver = %s) for TMS_EVT_SET_APP_STATE failed with status %d\n",
                        __FUNCTION__, registered_app_array[index].user_name,
                        registered_app_array[index].receiver_name,
                        busy_app_result.status);
                  }
                }
                else
                {
                  if (!proceed_on_failure)
                    ret_val = VHQ_API_APP_APPROVAL_ERROR;
                  log_err("%s: App Busy - GetAppResponse() FAILED\n",
                          __FUNCTION__);
                }
              }
              else if (app_result.appStatus == APP_STATUS_POSTPONE)
              {
                ret_val = VHQ_API_POSTPONED;
              }
              else
              {
                /* Mitch ADKTMS-1999 (10-11-2017): In previous iteration through this while, we may have set ret_val to
                 something other than VHQ_SUCCESS, so set it to VHQ_SUCCESS again */
                dbg_notice(
                    "%s: Application returned APP_STATUS_FREE (%d) - setting ret_val = VHQ_SUCCESS\n",
                    __FUNCTION__, app_result.appStatus);
                ret_val = VHQ_SUCCESS;
              }
            }
            else
            {
              if (!proceed_on_failure)
                ret_val = VHQ_API_APP_APPROVAL_ERROR;
              log_err(
                  "%s: GetAppResponse(user = %s, receiver = %s) for TMS_EVT_SET_APP_STATE failed with status %d\n",
                  __FUNCTION__, registered_app_array[index].user_name,
                  registered_app_array[index].receiver_name, app_result.status);
            }
          }
          else
          {
            if (!proceed_on_failure)
              ret_val = VHQ_API_APP_APPROVAL_ERROR;
            log_err(
                "%s: GetAppResponse() FAILED - setting ret_val to proceeed_ on_failure (%d)\n",
                __FUNCTION__, proceed_on_failure);
          }
        }
        else
        {
          log_err(
              "%s: SendMsgToApp() failed - setting ret_val to proceed_on_failure (%d)\n",
              __FUNCTION__, proceed_on_failure);
          if (!proceed_on_failure)
            ret_val = VHQ_API_APP_APPROVAL_ERROR;
        }

        /* Release communication session with application */
        pthread_mutex_unlock(&appContact);
      }
    }

    /* If any app requests for Postpone don't check approval requests for other apps */
    if (ret_val == VHQ_API_POSTPONED)
      break;
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

static void GetRegisteredAppsStr(char *registeredAppStr,
                                 uint32 registeredAppStrSize)
{
  int i;

  if ((registeredAppStr == NULL) || (registeredAppStrSize == 0))
  {
    dbg_err("%s: invalid parameter\n", __FUNCTION__);
    return;
  }

  /* Clear the string */
  memset(registeredAppStr, 0, registeredAppStrSize);

  for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
  {
    if ((registered_app_array[i].in_use)
        && (strlen(registered_app_array[i].receiver_name)))
    {
      /* App is is use and has a name so add it to the list */
      if (strlen(registeredAppStr) == 0)
      {
        strncpy(registeredAppStr, registered_app_array[i].receiver_name,
                registeredAppStrSize - 1);
      }
      else
      {
        strncat(registeredAppStr, ",",
                registeredAppStrSize - strlen(registeredAppStr) - 1);
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: concatonating %s to %s\n", __FUNCTION__, registered_app_array[i].receiver_name, registeredAppStr);
        strncat(registeredAppStr, registered_app_array[i].receiver_name,
                registeredAppStrSize - strlen(registeredAppStr) - 1);
      }

    }
  }

  strncat(registeredAppStr, " are registered",
          registeredAppStrSize - strlen(registeredAppStr) - 1);
  log_dbg("%s: returning '%s'\n", __FUNCTION__, registeredAppStr);
}


vhq_result_t RegisterApp(bool reg, char *user_name, int event_mask,
                         char *receiver_name, long pid, bool use_TMS_API,
                         char *app_pipe_name, tms_apptype_t app_type,
                         char *app_version, char *app_customType,
                         char *app_additionalInfo)
{
  (void) (app_pipe_name);
  int i;

  if (!receiver_name || !strlen(receiver_name))
  {
    log_err("%s ERROR: receiver_name not defined. Application unknown. %s\n",
            __FUNCTION__);
    return VHQ_API_REGISTER_FAIL;
  }

  if (reg)
  {
    pthread_mutex_lock(&appArrayMutex);
    /* reg is set so we are registering an application */
    /* Make sure this app is not already registered */
    for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
    {
      if ((registered_app_array[i].in_use)
          && (strcmp(registered_app_array[i].user_name, user_name) == 0)
          && (strcmp(registered_app_array[i].receiver_name, receiver_name) == 0))
      {
        /* App is already registered so just update the event mask */
        dbg_msg(
            "%s: Application %s (user %s) already registered in slot %d - updating event mask from 0x%08x to 0x%08x and PID from %ld to %ld\n",
            __FUNCTION__, receiver_name, user_name, i,
            registered_app_array[i].event_mask, event_mask,
            registered_app_array[i].pid, pid);
        registered_app_array[i].event_mask = (uint32) event_mask;
        registered_app_array[i].pid = pid;
        registered_app_array[i].use_TMS_API = use_TMS_API;
        registered_app_array[i].app_state = APP_STATUS_FREE;
        registered_app_array[i].app_type = app_type;

        if (app_version && strlen(app_version))
        {
          strcpy(registered_app_array[i].app_version, app_version);
        }

        if (app_customType && strlen(app_customType))
        {
          strcpy(registered_app_array[i].app_customType, app_customType);
        }

        if (app_additionalInfo && strlen(app_additionalInfo))
        {
          strcpy(registered_app_array[i].app_additionalInfo,
                 app_additionalInfo);
        }

#if defined(Mx2)
        /* Close the existing IPC mechanism if pid changes */
        if (registered_app_array[i].use_TMS_API
            && (registered_app_array[i].pid != pid))
        {
          /* Close any IPC mechanisms - Note that they will get re-created when we send a message */
          tms_closeIPC(registered_app_array[i].user_name,
                       registered_app_array[i].receiver_name);
        }
#endif

        /* remove cached parameters */
        ClearAppCustomData(receiver_name, customAppInfo);
        pthread_mutex_unlock(&appArrayMutex);
        return VHQ_SUCCESS;
      }
    }

    i = 0;
    while ((i < TMS_MAX_REGISTERED_APPS) && (registered_app_array[i].in_use))
      i++;

    if (i >= TMS_MAX_REGISTERED_APPS)
    {
      log_err("%s ERROR: no open slots for app %s\n", __FUNCTION__,
              receiver_name);
      pthread_mutex_unlock(&appArrayMutex);
      return VHQ_API_REGISTER_FAIL;
    }

    if (i < TMS_MAX_REGISTERED_APPS)
    {
      registered_app_array[i].in_use = TRUE;
      registered_app_array[i].event_mask = (uint32) event_mask;
      strcpy(registered_app_array[i].user_name, user_name);
      strcpy(registered_app_array[i].receiver_name, receiver_name);
      registered_app_array[i].app_type = app_type;

      if (app_version && strlen(app_version))
      {
        strcpy(registered_app_array[i].app_version, app_version);
      }

      if (app_customType && strlen(app_customType))
      {
        strcpy(registered_app_array[i].app_customType, app_customType);
      }

      if (app_additionalInfo && strlen(app_additionalInfo))
      {
        strcpy(registered_app_array[i].app_additionalInfo, app_additionalInfo);
      }

      registered_app_array[i].pid = pid;
      registered_app_array[i].use_TMS_API = use_TMS_API;
      registered_app_array[i].app_state = APP_STATUS_FREE;
      dbg_msg(
          "%s: Application %s (user %s, pid %ld) registered in slot %d - event mask = 0x%08x, app_type = %d, "
          "app_version = %s, customtype = %s, app_additionalInfo= %s\n",
          __FUNCTION__, receiver_name, user_name, pid, i,
          registered_app_array[i].event_mask, registered_app_array[i].app_type,
          app_version ? app_version : "NULL",
          app_customType ? app_customType : "NULL",
          app_additionalInfo ? app_additionalInfo : "NULL");

      pthread_mutex_unlock(&appArrayMutex);
      return VHQ_SUCCESS;
    }
    pthread_mutex_unlock(&appArrayMutex);
  }
  else
  {
    vhq_result_t ret_val = VHQ_API_REGISTER_FAIL;
    pthread_mutex_lock(&appArrayMutex);
    ret_val = UnRegisterUserApp(user_name, receiver_name);
    pthread_mutex_unlock(&appArrayMutex);

    return ret_val;
  }

  return VHQ_API_REGISTER_FAIL;
}


vhq_result_t UnRegisterUserApp(char *user_name, char *receiver_name)
{
  int i = 0;

  /* reg is not set so we are unregistering an application */

  for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
  {
    if ((registered_app_array[i].in_use)
        && (strcmp(registered_app_array[i].user_name, user_name) == 0)
        && (strcmp(registered_app_array[i].receiver_name, receiver_name) == 0))
    {
      /* We found a match so let's unregister this app */
      dbg_msg("%s: Application %s (user %s) un-registered from slot %d\n",
              __FUNCTION__, receiver_name, user_name, i);

#if defined(Mx2)
      if (registered_app_array[i].use_TMS_API)
      {
        /* Close any IPC mechanisms */
        tms_closeIPC(registered_app_array[i].user_name,
                     registered_app_array[i].receiver_name);
      }
#endif

      /* remove cached parameters */
      ClearAppCustomData(receiver_name, customAppInfo);

      /* clear the registered_app_array entry */
      registered_app_array[i].in_use = FALSE;
      registered_app_array[i].event_mask = 0;
      memset(registered_app_array[i].user_name, 0,
             sizeof(registered_app_array[i].user_name));
      memset(registered_app_array[i].receiver_name, 0,
             sizeof(registered_app_array[i].receiver_name));
      registered_app_array[i].use_TMS_API = 0;
      registered_app_array[i].app_state = APP_STATUS_FREE;
      memset(registered_app_array[i].app_pipe_name, 0,
             sizeof(registered_app_array[i].app_pipe_name));
      registered_app_array[i].app_type = TMS_APP_TYPE_DEFAULT;
      memset(registered_app_array[i].app_version, 0,
             sizeof(registered_app_array[i].app_version));
      memset(registered_app_array[i].app_customType, 0,
             sizeof(registered_app_array[i].app_customType));
      memset(registered_app_array[i].app_additionalInfo, 0,
             sizeof(registered_app_array[i].app_additionalInfo));
      return VHQ_SUCCESS;
    }
  }
  return VHQ_API_REGISTER_FAIL;
}



void UnRegisterUserApps(void)
{
  int i;

  pthread_mutex_lock(&appArrayMutex);
  /* reg is not set so we are unregistering an application */
  for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
  {
    if ((registered_app_array[i].in_use)
        && (strstr(registered_app_array[i].user_name, "usr") != NULL))
    {
      /* We found a usr app so let's unregister this app */
      log_dbg("%s: un-registering application %s (user %s) from slot %d\n",
              __FUNCTION__, registered_app_array[i].receiver_name,
              registered_app_array[i].user_name, i);

#if defined(Mx2)
      if (registered_app_array[i].use_TMS_API)
      {
        /* Close any IPC mechanisms */
        tms_closeIPC(registered_app_array[i].user_name,
                     registered_app_array[i].receiver_name);
      }
#endif

      /* clear the registered_app_array entry */
      registered_app_array[i].in_use = FALSE;
      registered_app_array[i].event_mask = 0;
      memset(registered_app_array[i].user_name, 0,
             sizeof(registered_app_array[i].user_name));
      memset(registered_app_array[i].receiver_name, 0,
             sizeof(registered_app_array[i].receiver_name));
      registered_app_array[i].use_TMS_API = 0;
      registered_app_array[i].app_state = APP_STATUS_FREE;
    }
  }
  pthread_mutex_unlock(&appArrayMutex);
}


bool AppRegistered(char *name)
{
  bool res;
  pthread_mutex_lock(&appArrayMutex);

  if (FindReceiver(name) >= 0)
    res = TRUE;
  else
    res = FALSE;

  pthread_mutex_unlock(&appArrayMutex);
  return res;
}


bool GetRecevierUser(char *receiver, char *user_name)
{
  bool ret_val = FALSE;
  int index;

  pthread_mutex_lock(&appArrayMutex);
  index = FindReceiver(receiver);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver \"%s\"\n", __FUNCTION__,
            receiver);
  }
  else
  {
    if (user_name != NULL)
    {
      strcpy(user_name, registered_app_array[index].user_name);
      ret_val = TRUE;
    }
    else
    {
      log_err("%s ERROR: Username not copied for receiver %s \"%s\"\n",
              __FUNCTION__, receiver);
    }
  }

  pthread_mutex_unlock(&appArrayMutex);
  return ret_val;
}

char* GetRecevierPipeName(char *receiver)
{
  int index;

  index = FindReceiver(receiver);
  if (index < 0)
  {
    if (strlen(receiver))
    {
      dbg_err(
          "%s ERROR: Application doesn't registered, try to use \"%s\" as receiver\n",
          __FUNCTION__, receiver);
      return receiver;
    }
    else
    {
      log_err("%s ERROR: could not find receiver \"%s\"\n", __FUNCTION__,
              receiver);
      return NULL;
    }
  }

  return (registered_app_array[index].app_pipe_name);
}
bool GetAppParameters(char *receiver_name,
                      app_param_update_info_t *param_update_info)
{
  int index;
  bool ret_val = FALSE;
  int _messageID, retries = 0;
  bool GetAppResponseRes = FALSE;

  dbg_msg("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver %s\n", __FUNCTION__,
            receiver_name);
    pthread_mutex_unlock(&appArrayMutex);
    return FALSE;
  }

  log_dbg(
      "%s: found receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_GET_PARM_FILE to user %s\n",
      __FUNCTION__, receiver_name, index,
      registered_app_array[index].user_name);

  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  app_ifc_message_id++;
  _messageID = app_ifc_message_id;
  do
  {
    retries++;
    dbg_msg("%s: Send message to app \n", __FUNCTION__);
    if (SendMsgToApp(registered_app_array[index].receiver_name,
                     TMS_EVT_GET_PARM_FILE, _messageID, TMS_STATUS_SUCCESS,
                     NULL, NULL, 0, NULL, 0, TRUE, 0) == VHQ_SUCCESS)
    {
      uint32 timeout = 300;
      struct tmsEventData app_result;

      dbg_msg(
          "%s: Successfully sent TMS_EVT_GET_PARM_FILE - waiting for response (pid = %d)\n",
          __FUNCTION__, getpid());

      GetAppResponseRes = GetAppResponse(
          registered_app_array[index].user_name,
          registered_app_array[index].receiver_name, TMS_EVT_GET_PARM_FILE,
          _messageID, timeout, &app_result);
      if (GetAppResponseRes)
      {
        if (app_result.appStatus == TMS_STATUS_SUCCESS)
        {
          log_dbg(
              "%s: GetAppResponse() returned TRUE and TMS_EVT_GET_PARM_FILE type - reading %d param files from %s\n",
              __FUNCTION__, app_result.numFileEntries, app_result.filename);

          if (strlen(app_result.filename))
            strcpy(param_update_info->param_update_list_filename,
                   app_result.filename);
          param_update_info->param_update_count = app_result.numFileEntries;
          param_update_info->param_update_time = linux_time(NULL);
          ret_val = TRUE;
        }
        else
          log_err("%s: Parameter file extraction failed FAILED\n",
                  __FUNCTION__);
      }
      else
      {
        log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
      }
    }
  }
  while ((GetAppResponseRes == FALSE) && (retries < 3));

  /* Release communication session with application */
  pthread_mutex_unlock(&appArrayMutex);
  pthread_mutex_unlock(&appContact);

  dbg_notice("%s: returning %d \n", __FUNCTION__, ret_val);
  return ret_val;
}

bool GetAppParameterFilesHash(char *receiver_name,
                              app_param_files_t *ParamFileArray, int ArraySize,
                              uint8 *num_param_files, bool *value_based)
{
  int index;
  bool ret_val = FALSE;
  int _messageID;

  dbg_trace("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  /* Initialize poitner parameters */
  if (num_param_files)
    *num_param_files = 0;
  if (value_based)
    *value_based = FALSE;

  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver %s\n", __FUNCTION__,
            receiver_name);
    return FALSE;
  }

  log_dbg(
      "%s: found receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_SET_PARM_LIST to user %s\n",
      __FUNCTION__, receiver_name, index,
      registered_app_array[index].user_name);

  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  app_ifc_message_id++;
  _messageID = app_ifc_message_id;

  if (SendMsgToApp(registered_app_array[index].receiver_name,
                   TMS_EVT_SET_PARM_LIST, _messageID, TMS_STATUS_SUCCESS, NULL,
                   NULL, 0, NULL, 0, TRUE, 0) == VHQ_SUCCESS)
  {
    uint32 timeout;
    struct tmsEventData app_result;

    dbg_msg(
        "%s: Successfully sent TMS_EVT_SET_PARM_LIST - waiting for response (pid = %d)\n",
        __FUNCTION__, getpid());

    VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                          BASE_10);
    if (GetAppResponse(registered_app_array[index].user_name,
                       registered_app_array[index].receiver_name,
                       TMS_EVT_SET_PARM_LIST, _messageID, timeout, &app_result))
    {
      /* if removeFile flag is set, that means these parameters are value based */
      if (value_based && app_result.removeFile)
        *value_based = TRUE;
      log_dbg(
          "%s: GetAppResponse() returned TRUE and TMS_EVT_SET_PARM_LIST type - reading %d param files from %s\n",
          __FUNCTION__, app_result.numFileEntries, app_result.filename);
      ret_val = ReadParamDataFile(app_result.filename,
                                  app_result.numFileEntries, ParamFileArray,
                                  ArraySize, num_param_files);
      if (strlen(app_result.filename))
        remove(app_result.filename);
    }
    else
    {
      log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
    }
  }

  /* Release communication session with application */
  pthread_mutex_unlock(&appContact);
  pthread_mutex_unlock(&appArrayMutex);

  dbg_notice("%s: returning %d - num_param_files = %d\n", __FUNCTION__, ret_val,
             *num_param_files);
  return ret_val;
}


vhq_result_t ClearAppCustomData(
    char *receiver_name, customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS])
{
  int index;

  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    dbg_err("%s ERROR: could not find receiver %s\n", __FUNCTION__,
            receiver_name);
    return VHQ_API_ERROR;
  }

  if (appInfo[index].parameterList)
  {
    list_head_t *app_parameterList_node;
    list_head_t *app_parameterList_node_tmp;
    appParam_t *app_parameterList_list_obj;

    list_for_each_safe(app_parameterList_node, app_parameterList_node_tmp, &appInfo[index].parameterList->list)
    {
      app_parameterList_list_obj = list_entry(app_parameterList_node,
                                              appParam_t, list);
      dbg_msg("%s: parameter '%s' has 0x%08x type, remove\n", __FUNCTION__,
              app_parameterList_list_obj->parameter.parameterName,
              app_parameterList_list_obj->parameter.parameterType);
      list_del(&app_parameterList_list_obj->list);
      free(app_parameterList_list_obj);
      app_parameterList_list_obj = NULL;
    }

    free(appInfo[index].parameterList);
    appInfo[index].parameterList = NULL;
    appInfo[index].time_collected = 0;
  }

  return VHQ_SUCCESS;
}


bool EraseCompleteAppsData(void)
{
  bool ret_val = FALSE;

  int i = 0;

  pthread_mutex_lock(&appArrayMutex);
  for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
  {
    if (registered_app_array[i].in_use)
    {
      /* We found a match so let's unregister this app */

#if defined(Mx2)
      if (registered_app_array[i].use_TMS_API)
      {
        /* Close any IPC mechanisms */
        tms_closeIPC(registered_app_array[i].user_name,
                     registered_app_array[i].receiver_name);
      }
#endif

      /* remove cached parameters */
      if (ClearAppCustomData(registered_app_array[i].receiver_name,
                             customAppInfo) == VHQ_SUCCESS)
      {
        /* clear the registered_app_array entry */
        registered_app_array[i].in_use = FALSE;
        registered_app_array[i].event_mask = 0;
        memset(registered_app_array[i].user_name, 0,
               sizeof(registered_app_array[i].user_name));
        memset(registered_app_array[i].receiver_name, 0,
               sizeof(registered_app_array[i].receiver_name));
        registered_app_array[i].use_TMS_API = 0;
        registered_app_array[i].app_state = APP_STATUS_FREE;
        memset(registered_app_array[i].app_pipe_name, 0,
               sizeof(registered_app_array[i].app_pipe_name));

        dbg_msg("%s: Application cleaned from slot %d\n", __FUNCTION__, i);
        ret_val = TRUE;
      }
    }
  }
  pthread_mutex_unlock(&appArrayMutex);
  return ret_val;
}


void GetAppCustomData(customAppInfo_t appInfo[TMS_MAX_REGISTERED_APPS],
                      uint32 param_mask, bool DIDReqdForKeyExch)
{
  int index;
  int param_counter;
  int _messageID;
  uint32 req_period = VHQ_APP_INFO_REQUEST_PERIOD_DEF;

  if (!param_mask)
  {
    dbg_msg("%s: nothing to collect\n", __FUNCTION__);
    return;
  }
  VHQGetParameterUint32(PARAM_SET_APP_INFO_REQUEST_PERIOD, &req_period,
                        DEFAULT_BASE);
  /* Find the first app with custom data */
  pthread_mutex_lock(&appArrayMutex);
  for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
  {
    if (registered_app_array[index].in_use)
    {
      int param_mask_to_collect = param_mask;
      log_dbg("%s: app %s registered in index %d (user_name = %s)\n",
              __FUNCTION__, registered_app_array[index].receiver_name, index,
              registered_app_array[index].user_name);

      /* Let's determinate do we need to update cache, if any */
      if (appInfo[index].time_collected + (time_t) req_period
          <= linux_time(NULL))
        param_mask_to_collect |= TMS_PARAMETER_TYPE_IDENTIFIER;
      else
        param_mask_to_collect &= ~(TMS_PARAMETER_TYPE_IDENTIFIER);

      log_dbg("%s: param_mask_to_collect = 0x%08x (of 0x%08x)\n", __FUNCTION__,
              param_mask_to_collect, param_mask);

      /* We are going to collect data, remove previous parameters */
      if (appInfo[index].parameterList)
      {
        /* We can remove unused types of parameters. Parameters with TMS_PARAMETER_TYPE_IDENTIFIER might stay intact */
        list_head_t *app_parameterList_node;
        list_head_t *app_parameterList_node_tmp;
        appParam_t *app_parameterList_list_obj;

        list_for_each_safe(app_parameterList_node, app_parameterList_node_tmp, &appInfo[index].parameterList->list)
        {
          app_parameterList_list_obj = list_entry(app_parameterList_node,
                                                  appParam_t, list);
          if ((param_mask_to_collect & TMS_PARAMETER_TYPE_IDENTIFIER)
              != TMS_PARAMETER_TYPE_IDENTIFIER)
          {
            if ((app_parameterList_list_obj->parameter.parameterType
                & TMS_PARAMETER_TYPE_IDENTIFIER)
                == TMS_PARAMETER_TYPE_IDENTIFIER)
            {
              dbg_msg("%s: parameter '%s' has 0x%08x type, left for cache\n",
                      __FUNCTION__,
                      app_parameterList_list_obj->parameter.parameterName,
                      app_parameterList_list_obj->parameter.parameterType);
              continue;
            }
          }
          dbg_msg(
              "%s: parameter '%s' has 0x%08x type, not required for cache\n",
              __FUNCTION__, app_parameterList_list_obj->parameter.parameterName,
              app_parameterList_list_obj->parameter.parameterType);
          list_del(&app_parameterList_list_obj->list);
          free(app_parameterList_list_obj);
          app_parameterList_list_obj = NULL;
        }
      }

      /* We do not need to ask app if mask is empty */
      if (!param_mask_to_collect)
      {
        dbg_msg("%s: Nothing to collect\n", __FUNCTION__);
        continue;
      }

      /* Initialize parameters head, might not be required if we have cache */
      if (!appInfo[index].parameterList)
      {
        appInfo[index].time_collected = 0;

        appInfo[index].parameterList = (appParam_t*) calloc(1,
                                                            sizeof(appParam_t));
        if (appInfo[index].parameterList)
          INIT_LIST_HEAD(&appInfo[index].parameterList->list);
        else
        {
          log_err("%s: unable to allocate memory for %d record\n", __FUNCTION__,
                  index);
          continue;
        }
      }

      /* Lock communication session with application */
      pthread_mutex_lock(&appContact);

      /* App is in use so see if it has custom data */
      app_ifc_message_id++;
      _messageID = app_ifc_message_id;
      int retries = 0;
      vhq_result_t AppResponseRes = VHQ_API_ERROR;
      do
      {
        if (SendMsgToApp(registered_app_array[index].receiver_name,
                         TMS_EVT_SET_APP_INFO, _messageID, TMS_STATUS_SUCCESS,
                         NULL, NULL, param_mask_to_collect, NULL, 0, TRUE, 0)
            == VHQ_SUCCESS)
        {
          uint32 timeout;
          struct tmsEventData app_result;
          appParam_t *app_parameterList_list_obj;

          dbg_msg(
              "%s: Successfully sent TMS_EVT_SET_APP_INFO (param_mask = 0x%08x) - waiting for response (pid = %d)\n",
              __FUNCTION__, param_mask_to_collect, getpid());

          VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                                BASE_10);

          if (DIDReqdForKeyExch)
          {
            dbg_msg("%s: Fixing timeout for KE op type\n", __FUNCTION__);
            timeout = 300;
          }

          AppResponseRes = GetAppResponse(
              registered_app_array[index].user_name,
              registered_app_array[index].receiver_name, TMS_EVT_SET_APP_INFO,
              _messageID, timeout, &app_result);
          if (AppResponseRes)
          {
            int spParamFileName = -1;

            log_dbg(
                "%s: GetAppResponse() returned TRUE and TMS_EVT_SET_APP_INFO type - parameterCount = %d, fileName = %s\n",
                __FUNCTION__, app_result.numFileEntries, app_result.filename);
            if (strlen(app_result.filename))
            {
              spParamFileName = open(app_result.filename, O_RDONLY, 0666);
            }
            if (spParamFileName != -1)
            {
              char *read_buf = malloc(FileSize(app_result.filename) + 1);
              int read_bytes = -1;

              if (read_buf)
              {
                memset(read_buf, 0, FileSize(app_result.filename) + 1);
                read_bytes = read(spParamFileName, read_buf,
                                  FileSize(app_result.filename));
                dbg_msg("%s: read %d bytes from file\n", __FUNCTION__,
                        read_bytes);
              }

              if (appInfo[index].parameterList && (read_bytes > 0))
              {
                int read_offset = 0;
                strcpy(appInfo[index].user,
                       registered_app_array[index].receiver_name);

                // Update time only if the param mask contains Identifier type
                if ((param_mask_to_collect & TMS_PARAMETER_TYPE_IDENTIFIER)
                    == TMS_PARAMETER_TYPE_IDENTIFIER)
                {
                  appInfo[index].time_collected = linux_time(NULL);
                }

                for (param_counter = 0;
                    param_counter < app_result.numFileEntries; param_counter++)
                {
                  int numItemsScanned;
                  int line_index;
                  char line_buf[1024];
                  char *name_str_start;
                  char *value_str_start = NULL;
                  char *type_str_start = NULL;
                  char *name_start = NULL;
                  char *value_start = NULL;
                  char *type_start = NULL;

                  memset(line_buf, 0, sizeof(line_buf));
                  line_index = 0;
                  while (((uint32) read_offset < FileSize(app_result.filename))
                      && ((read_buf[read_offset] != '\n')
                          && (read_buf[read_offset] != '\r')))
                  {
                    line_buf[line_index] = read_buf[read_offset];
                    read_offset++;
                    line_index++;
                  }

                  /* Find the <name> field */
                  name_str_start = strstr(line_buf, "<name>");
                  if (name_str_start)
                  {
                    name_start = name_str_start + strlen("<name>");
                  }
                  else
                    dbg_msg("%s: Unable to find %s in %s\n", __FUNCTION__,
                            "<name>", line_buf);

                  /* Find the <value> field */
                  if (name_start)
                  {
                    value_str_start = strstr(name_start, "<value>");
                    if (value_str_start)
                    {
                      value_start = value_str_start + strlen("<value>");
                    }
                    else
                      dbg_err("%s: Unable to find %s in %s\n", __FUNCTION__,
                              "<value>", name_start);
                  }

                  /* Find the <type> field */
                  if (value_start)
                  {
                    type_str_start = strstr(value_start, "<type>");
                    if (type_str_start)
                      type_start = type_str_start + strlen("<type>");
                    else
                      dbg_err("%s: Unable to find %s in %s\n", __FUNCTION__,
                              "<type>", value_start);
                  }

                  app_parameterList_list_obj = (appParam_t*) calloc(
                      1, sizeof(appParam_t));
                  if (app_parameterList_list_obj)
                  {
                    /* Copy the <name> field */
                    if (name_start && ((value_str_start - name_start) > 0))
                    {
                      memcpy(
                          app_parameterList_list_obj->parameter.parameterName,
                          name_start, (value_str_start - name_start));
                    }

                    /* Copy the <value> field */
                    if (value_start && ((type_str_start - value_start) > 0))
                    {
                      memcpy(
                          app_parameterList_list_obj->parameter.parameterValue,
                          value_start, (type_str_start - value_start));
                    }

                    /* Read the <type> field */
                    if (type_start)
                    {
                      numItemsScanned = sscanf(
                          type_start, "%d",
                          &app_parameterList_list_obj->parameter.parameterType);
                    }
                    else
                      numItemsScanned = 0;

                    if (numItemsScanned != 1)
                    {
                      log_err(
                          "%s ERROR: Unable to read type for param %d - assuming TMS_PARAMETER_TYPE_IDENTIFIER\n",
                          __FUNCTION__, param_counter);
                      app_parameterList_list_obj->parameter.parameterType =
                          TMS_PARAMETER_TYPE_IDENTIFIER;
                    }

                    dbg_msg(
                        "\tParameter %d: name = %s, value = %s, type = %d\n",
                        param_counter,
                        app_parameterList_list_obj->parameter.parameterName,
                        app_parameterList_list_obj->parameter.parameterValue,
                        app_parameterList_list_obj->parameter.parameterType);
                    list_add_tail(&app_parameterList_list_obj->list,
                                  &appInfo[index].parameterList->list);
                  }

                  while ((read_buf[read_offset] == '\n')
                      || (read_buf[read_offset] == '\r'))
                  {
                    read_offset++;
                  }
                }
              }
              else
              {
                log_err(
                    "%s ERROR: FAILED allocating %d bytes to store parameters\n",
                    __FUNCTION__,
                    app_result.numFileEntries * sizeof(struct tmsAppParameter));
              }
              /* Close the file */
              close(spParamFileName);

              if (read_buf)
                free(read_buf);
            }
            if (strlen(app_result.filename))
            {
              if (removeFile(app_result.filename) != TRUE)
              {
                dbg_err("%s: Failed to remove file: %s", __FUNCTION__,
                        app_result.filename);
              }
            }
          }
          else
          {
            log_dbg("%s: GetAppResponse() FAILED\n", __FUNCTION__);
          }
        }
        retries++;
      }
      while (DIDReqdForKeyExch && (AppResponseRes != TRUE) && retries < 3);

      /* Release communication session with application */
      pthread_mutex_unlock(&appContact);
    }
  }
  pthread_mutex_unlock(&appArrayMutex);
}


bool GetAppParameterFileByName(char *receiver_name, char *param_filename,
                               char *full_filename, uint32 full_filename_len,
                               bool *remove_file)
{
  int index;
  bool ret_val = FALSE;
  int _messageID;

  dbg_trace("%s: +\n", __FUNCTION__);
  *remove_file = FALSE;
  memset(full_filename, 0, full_filename_len);

  pthread_mutex_lock(&appArrayMutex);
  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver %s\n", __FUNCTION__,
            receiver_name);
    pthread_mutex_unlock(&appArrayMutex);
    return FALSE;
  }

  log_dbg(
      "%s: found receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_GET_FILE to user %s\n",
      __FUNCTION__, receiver_name, index,
      registered_app_array[index].user_name);

  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  /* App is in use so see if it has custom data */
  app_ifc_message_id++;
  _messageID = app_ifc_message_id;

  if (SendMsgToApp(registered_app_array[index].receiver_name, TMS_EVT_GET_FILE,
                   _messageID, TMS_STATUS_SUCCESS, param_filename, NULL, 0,
                   NULL, 0, TRUE, 0) == VHQ_SUCCESS)
  {
    uint32 timeout;
    struct tmsEventData app_result;

    log_dbg(
        "%s: Successfully sent TMS_EVT_GET_FILE - waiting for response (pid = %d)\n",
        __FUNCTION__, getpid());
    VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                          BASE_10);
    if (GetAppResponse(registered_app_array[index].user_name,
                       registered_app_array[index].receiver_name,
                       TMS_EVT_GET_FILE, _messageID, timeout, &app_result))
    {
      if (app_result.status == TMS_STATUS_SUCCESS)
      {
        log_dbg(
            "%s: GetAppResponse() returned TRUE and TMS_EVT_GET_FILE type - setting up filename for return (%s)\n",
            __FUNCTION__, app_result.filename);
        if (strlen(app_result.filename)
            && (strlen(app_result.filename) < full_filename_len))
        {
          strcpy(full_filename, app_result.filename);
          *remove_file = app_result.removeFile;
          ret_val = TRUE;
        }
        else
        {
          log_err(
              "%s: GetAppResponse(TMS_EVT_GET_FILE) returned invalid filename (%s)\n",
              __FUNCTION__, app_result.filename);
        }
      }
      else
        log_err(
            "%s: GetAppResponse(TMS_EVT_GET_FILE, user = %s, receiver = %s) returned a failure (%d)\n",
            __FUNCTION__, registered_app_array[index].user_name,
            registered_app_array[index].receiver_name, app_result.status);
    }
    else
    {
      log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
    }
  }

  /* Release communication session with application */
  pthread_mutex_unlock(&appContact);
  pthread_mutex_unlock(&appArrayMutex);

  log_dbg("%s: returning %d - full_filename = %s, remove_file = %d\n",
          __FUNCTION__, ret_val, full_filename, *remove_file);
  return ret_val;
}


vhq_result_t PutAppParameterFileByName(char *receiver_name,
                                       char *param_filename,
                                       char *additional_info,
                                       uint32 additional_info_size,
                                       dl_file_dl_type_t param_update_type)
{
  int index;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
  int _messageID;
  int put_file_type;

  dbg_trace("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  if (additional_info != NULL)
    memset(additional_info, 0, additional_info_size);

  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver '%s'\n", __FUNCTION__,
            receiver_name);
    if (additional_info != NULL)
    {
      char registered_app_str[256];

      GetRegisteredAppsStr(registered_app_str, sizeof(registered_app_str));
      snprintf(additional_info, additional_info_size,
               "receiver %s not found-%s", receiver_name, registered_app_str);
    }
    pthread_mutex_unlock(&appArrayMutex);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_RECEIVER_ERROR;
  }

  switch (param_update_type)
  {
    case DL_FILE_DL_TYPE_PARAMETER:
      put_file_type = TMS_PUT_FILE_TYPE_FULL_PARAM_FILE;
      break;
    case DL_FILE_DL_TYPE_PARAMETER_PARTIAL_FLAT:
      put_file_type = TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT;
      break;
    case DL_FILE_DL_TYPE_PARAMETER_PARTIAL_HIERARCHICHAL:
      put_file_type = TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL;
      break;
    case DL_FILE_DL_TYPE_PARAMETER_CONFIG_SYS:
      put_file_type = TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS;
      break;

    default:
      put_file_type = TMS_PUT_FILE_TYPE_UNSIGNED_FILE;
      break;
  }

  /* Setup the proper permissions on the file before passing it off */
  setup_file_permissions(param_filename, registered_app_array[index].user_name);

  log_dbg(
      "%s: found receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_PUT_FILE to user %s\n",
      __FUNCTION__, receiver_name, index,
      registered_app_array[index].user_name);

  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  /* App is in use so see if it has custom data */
  app_ifc_message_id++;
  _messageID = app_ifc_message_id;

  if (SendMsgToApp(registered_app_array[index].receiver_name, TMS_EVT_PUT_FILE,
                   _messageID, TMS_STATUS_SUCCESS, param_filename, NULL, 0,
                   NULL, 0, TRUE, put_file_type) == VHQ_SUCCESS)
  {
    uint32 timeout;
    struct tmsEventData app_result;

    log_dbg(
        "%s: Successfully sent TMS_EVT_PUT_FILE - waiting for response (pid = %d)\n",
        __FUNCTION__, getpid());

    VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                          BASE_10);
    if (GetAppResponse(registered_app_array[index].user_name,
                       registered_app_array[index].receiver_name,
                       TMS_EVT_PUT_FILE, _messageID, timeout, &app_result))
    {
      log_dbg(
          "%s: GetAppResponse() returned TMS_EVT_PUT_FILE type - status = %d\n",
          __FUNCTION__, app_result.status);
      if (app_result.status == TMS_STATUS_SUCCESS)
      {
        log_dbg("%s: PUT_FILE was SUCCESSFUL\n", __FUNCTION__);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
      }
      else if (app_result.status == TMS_STATUS_POSTPONED)
      {
        log_err(
            "%s: GetAppResponse(TMS_EVT_PUT_FILE, user = %s, receiver = %s) returned postpone(%d)\n",
            __FUNCTION__, registered_app_array[index].user_name,
            registered_app_array[index].receiver_name, app_result.status);
        ret_val = (vhq_result_t) app_result.status;
      }
      else
      {
        log_err(
            "%s: GetAppResponse(TMS_EVT_PUT_FILE, user = %s, receiver = %s) returned failure(%d)\n",
            __FUNCTION__, registered_app_array[index].user_name,
            registered_app_array[index].receiver_name, app_result.status);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR;
      }

      if ((additional_info != NULL) && (strlen(app_result.filename)))
      {
        if (strlen(app_result.filename) >= additional_info_size)
          memcpy(additional_info, app_result.filename,
                 additional_info_size - 1);
        else
          strcpy(additional_info, app_result.filename);
      }
    }
    else
    {
      log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
    }
  }

  /* Release communication session with application */
  pthread_mutex_unlock(&appContact);
  pthread_mutex_unlock(&appArrayMutex);

  log_dbg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


bool AppActionPerform(app_action_type_t app_action)
{
  int index;
  bool ret_val = TRUE;
  int _messageID;
  char app_transaction[MAX_TRANSACTION_TYPE_STR_LEN];

  dbg_trace("%s: +\n", __FUNCTION__);

  switch (app_action)
  {
    case APP_ACTION_EOD_CLEARANCE:
      strcpy(app_transaction, "EODClearance");
      break;
    case APP_ACTION_DIAGNOSTICS:
      strcpy(app_transaction, "Diagnostics");
      break;
    case APP_ACTION_MAINTENANCE_END:
      /* Although this is sent as an app action, we are just going to notify the apps of this event */
      return (NotifyApps(TMS_EVENT_NOTIFY_MAINTENANCE_END, NULL, 0, VHQ_SUCCESS,
                         EVENT_SET_ID_INVALID, EVENT_ID_INVALID, TRUE)
          == VHQ_SUCCESS);
      break;
    default:
      log_err("%s ERROR: unsupported action %d\n", __FUNCTION__, app_action);
      return FALSE;
  }

  pthread_mutex_lock(&appArrayMutex);
  /* Actions need to be sent to all registered apps */
  for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
  {
    if (registered_app_array[index].in_use)
    {
      log_dbg(
          "%s: found in_use receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_DO_TRANSACTION to user %s\n",
          __FUNCTION__, registered_app_array[index].receiver_name, index,
          registered_app_array[index].user_name);

      /* Lock communication session with application */
      pthread_mutex_lock(&appContact);

      app_ifc_message_id++;
      _messageID = app_ifc_message_id;

      if (SendMsgToApp(registered_app_array[index].receiver_name,
                       TMS_EVT_DO_TRANSACTION, _messageID, TMS_STATUS_SUCCESS,
                       NULL, NULL, 0, app_transaction, 0, TRUE, 0)
          == VHQ_SUCCESS)
      {
        uint32 timeout;
        struct tmsEventData app_result;

        log_dbg(
            "%s: Successfully sent TMS_EVT_DO_TRANSACTION - waiting for response (pid = %d)\n",
            __FUNCTION__, getpid());

        VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                              BASE_10);
        if (GetAppResponse(registered_app_array[index].user_name,
                           registered_app_array[index].receiver_name,
                           TMS_EVT_DO_TRANSACTION, _messageID, timeout,
                           &app_result))
        {
          log_dbg(
              "%s: GetAppResponse() returned TMS_EVT_DO_TRANSACTION type - status = %d\n",
              __FUNCTION__, app_result.status);
          if (app_result.status == TMS_STATUS_SUCCESS)
          {
            log_dbg("%s: DO_TRANSACTION was SUCCESSFUL\n", __FUNCTION__);
          }
          else
          {
            ret_val = FALSE;
            log_err(
                "%s: GetAppResponse(TMS_EVT_DO_TRANSACTION, user = %s, receiver = %s) returned a failure (%d)\n",
                __FUNCTION__, registered_app_array[index].user_name,
                registered_app_array[index].receiver_name, app_result.status);
          }
        }
        else
        {
          ret_val = FALSE;
          log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
        }
      }
      else
      {
        ret_val = FALSE;
      }

      /* Release communication session with application */
      pthread_mutex_unlock(&appContact);
    }
  }

  pthread_mutex_unlock(&appArrayMutex);
  log_dbg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


vhq_result_t NotifyApps(int event_mask, char *filename,
                        int notificationDataInteger, vhq_result_t vhq_result,
                        event_set_id_t event_set_id, event_id_t event_id,
                        bool app_approval_required)
{
  int index;
  vhq_result_t ret_val = VHQ_SUCCESS;
  bool proceed_on_failure;
  int _messageID;
  int notify_status = vhq_result;
  vhq_result_t appApproval_retval;

  dbg_trace("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  if (app_approval_required)
  {
    /* We need to get approval for certain events */
    appApproval_retval = GetAppEventAproval(event_mask, event_set_id, event_id);
    if (appApproval_retval != VHQ_SUCCESS)
    {
      pthread_mutex_unlock(&appArrayMutex);
      return appApproval_retval;
    }
  }
  else
  {
    dbg_msg(
        "%s: 0x%08x has already been approved for this OpSet/not required - Skipping approval and notification\n",
        __FUNCTION__, event_mask);
    pthread_mutex_unlock(&appArrayMutex);
    return VHQ_SUCCESS;
  }

  VHQGetParameterBool(PARAM_APP_IFC_PROCEED_ON_FAILURE, &proceed_on_failure);

  /* Actions need to be sent to all registered apps */
  for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
  {
    /* Make sure the app is registered and wants this notification */
    if ((registered_app_array[index].in_use)
        && (event_mask & registered_app_array[index].event_mask))
    {
      dbg_msg(
          "%s: found in_use receiver %s in slot %d - sending app event TMS_EVT_NOTIFICATION with data: %d\n",
          __FUNCTION__, registered_app_array[index].receiver_name, index,
          notificationDataInteger);

      app_ifc_message_id++;
      _messageID = app_ifc_message_id;

      if (SendMsgToApp(registered_app_array[index].receiver_name,
                       TMS_EVT_NOTIFICATION, _messageID, notify_status,
                       filename, NULL,
                       (event_mask & registered_app_array[index].event_mask),
                       NULL, notificationDataInteger, FALSE, 0) == VHQ_SUCCESS)
      {
        dbg_msg(
            "%s: Successfully sent TMS_EVT_NOTIFICATION - event_mask = 0x%08x (pid = %d)\n",
            __FUNCTION__, event_mask, getpid());
      }
      else
      {
        dbg_err(
            "%s: FAILED sending TMS_EVT_NOTIFICATION (event_mask = 0x%08x) - setting ret_val to proceed_on_failure (%d)\n",
            __FUNCTION__, event_mask, proceed_on_failure);
        if (!proceed_on_failure)
          ret_val = VHQ_API_ERROR;
      }
    }
  }

  pthread_mutex_unlock(&appArrayMutex);
  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

void FlushAppIPCs(void)
{
#if defined(Mx2)
  int index;

  //DebugMsg("%s: +\n", __FUNCTION__);

  /* All registered apps IPC mechanisms need to be flushed */
  for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
  {
    /* Make sure the app is registered and wants this notification */
    if (registered_app_array[index].in_use)
    {
      //DebugMsg("%s: found in_use receiver %s in slot %d - flushing IPC for user %s\n",
      //__FUNCTION__, registered_app_array[index].receiver_name, index, registered_app_array[index].user_name);

      tms_flushIPC(registered_app_array[index].user_name,
                   registered_app_array[index].receiver_name);
    }
  }

  //DebugMsg("%s: -\n", __FUNCTION__);
#endif
}


bool AppDelFile(char *receiver_name, char *filename, char *additional_info,
                uint32 additional_info_size)
{
  int index;
  bool ret_val = FALSE;
  int _messageID;

  dbg_trace("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  index = FindReceiver(receiver_name);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver '%s'\n", __FUNCTION__,
            receiver_name);
    pthread_mutex_unlock(&appArrayMutex);
    return FALSE;
  }

  log_dbg(
      "%s: found receiver %s in slot %d - sending app event VHQ_MESSAGE_TYPE_DEL_FILE to user %s\n",
      __FUNCTION__, receiver_name, index,
      registered_app_array[index].user_name);

  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  app_ifc_message_id++;
  _messageID = app_ifc_message_id;

  if (SendMsgToApp(registered_app_array[index].receiver_name, TMS_EVT_DEL_FILE,
                   _messageID, TMS_STATUS_SUCCESS, filename, NULL, 0, NULL, 0,
                   TRUE, 0) == VHQ_SUCCESS)
  {
    uint32 timeout;
    struct tmsEventData app_result;

    log_dbg(
        "%s: Successfully sent TMS_EVT_DEL_FILE - waiting for response (pid = %d)\n",
        __FUNCTION__, getpid());

    VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                          BASE_10);
    if (GetAppResponse(registered_app_array[index].user_name,
                       registered_app_array[index].receiver_name,
                       TMS_EVT_DEL_FILE, _messageID, timeout, &app_result))
    {
      log_dbg(
          "%s: GetAppResponse() returned TMS_EVT_DEL_FILE type - status = %d\n",
          __FUNCTION__, app_result.status);
      if (app_result.status == TMS_STATUS_SUCCESS)
      {
        log_dbg("%s: DEL_FILE was SUCCESSFUL\n", __FUNCTION__);
        ret_val = TRUE;
      }
      else
        log_err(
            "%s: GetAppResponse(TMS_EVT_DEL_FILE, user = %s, receiver = %s) returned a failure (%d)\n",
            __FUNCTION__, registered_app_array[index].user_name,
            registered_app_array[index].receiver_name, app_result.status);

      if ((additional_info != NULL) && (strlen(app_result.filename)))
      {
        if (strlen(app_result.filename) >= additional_info_size)
          memcpy(additional_info, app_result.filename,
                 additional_info_size - 1);
        else
          strcpy(additional_info, app_result.filename);
      }
    }
    else
    {
      log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
    }
  }

  /* Release communication session with application */
  pthread_mutex_unlock(&appContact);
  pthread_mutex_unlock(&appArrayMutex);

  log_dbg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

void SetAppState(char *receiver, int appState)
{
  int index;

  dbg_trace("%s: +\n", __FUNCTION__);
  index = FindReceiver(receiver);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver '%s'\n", __FUNCTION__, receiver);
    return;
  }

  dbg_notice("%s: Found receiver %s in slot %d - setting app state to %d\n",
             __FUNCTION__, receiver, index, appState);
  registered_app_array[index].app_state = appState;

  dbg_trace("%s: -\n", __FUNCTION__);
}

vhq_result_t DoContentCallback_New(char *user, char *pszContentFile,
                                   char *pszContentDest,
                                   dl_file_dl_type_t eType,
                                   char *additional_info,
                                   uint32 additional_info_size)
{
  int index = 0;
  int _messageID;
  vhq_result_t ret_val = VHQ_API_ERROR;
  int putFileType;

  dbg_trace("%s: +\n", __FUNCTION__);
  pthread_mutex_lock(&appArrayMutex);

  if (additional_info != NULL)
    memset(additional_info, 0, additional_info_size);

  index = FindUser(index, user);

  while ((index >= 0) && (registered_app_array[index].use_TMS_API == FALSE)
      && ((registered_app_array[index].event_mask
          & TMS_EVENT_NOTIFY_CONTENT_UPDATES) == 0))
  {
    log_dbg(
        "%s: Found user %s in slot %d - use_TMS_API (%d) or event_mask (0x%08x) not setup for new TMS content callback - searching again\n",
        __FUNCTION__, user, index, registered_app_array[index].use_TMS_API,
        registered_app_array[index].event_mask);
    index = FindUser(index + 1, user);
  }

  if (index < 0)
  {
    log_dbg(
        "%s: couldn't find user '%s' registered for new content updates - trying old method\n",
        __FUNCTION__, user);
    pthread_mutex_unlock(&appArrayMutex);
    return (DoContentCallback(user, pszContentFile, pszContentDest, eType));
  }
  else
    log_dbg(
        "%s: Found app '%s' registered for %s content updates - sending TMS_EVT_PUT_FILE\n",
        __FUNCTION__, registered_app_array[index].receiver_name,
        registered_app_array[index].user_name);

  setup_file_permissions(pszContentFile, user);

  if (eType == DL_FILE_DL_TYPE_CONTENT)
    putFileType = TMS_PUT_FILE_TYPE_UNSIGNED_FILE;
  else if (eType == DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED)
    putFileType = TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE;
  else if (eType == DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED)
    putFileType = TMS_PUT_FILE_TYPE_MIXED_BUNDLE;
  else
  {
    pthread_mutex_unlock(&appArrayMutex);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_TYPE_ERROR;
  }
  /* Lock communication session with application */
  pthread_mutex_lock(&appContact);

  app_ifc_message_id++;
  _messageID = app_ifc_message_id;

  if (SendMsgToApp(registered_app_array[index].receiver_name, TMS_EVT_PUT_FILE,
                   _messageID, TMS_STATUS_SUCCESS, pszContentFile,
                   pszContentDest, 0, NULL, 0, TRUE, putFileType)
      == VHQ_SUCCESS)
  {
    uint32 timeout;
    struct tmsEventData app_result;

    log_dbg(
        "%s: Successfully sent TMS_EVT_PUT_FILE - waiting for response (pid = %d)\n",
        __FUNCTION__, getpid());

    VHQGetParameterUint32(PARAM_APP_IFC_EVT_RESPONSE_TIMEOUT, &timeout,
                          BASE_10);
    if (GetAppResponse(registered_app_array[index].user_name,
                       registered_app_array[index].receiver_name,
                       TMS_EVT_PUT_FILE, _messageID, timeout, &app_result))
    {
      log_dbg(
          "%s: GetAppResponse() returned TMS_EVT_PUT_FILE type - status = %d\n",
          __FUNCTION__, app_result.status);
      if (app_result.status == TMS_STATUS_SUCCESS)
      {
        dbg_msg("%s: TMS_EVT_PUT_FILE was SUCCESSFUL\n", __FUNCTION__);
        ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED;
      }
      else
      {
        log_err(
            "%s: GetAppResponse(TMS_EVT_PUT_FILE, user = %s, receiver = %s) returned a failure (%d)\n",
            __FUNCTION__, registered_app_array[index].user_name,
            registered_app_array[index].receiver_name, app_result.status);
        ret_val = (vhq_result_t) app_result.status;
      }

      if ((additional_info != NULL) && (strlen(app_result.filename)))
      {
        if (strlen(app_result.filename) >= additional_info_size)
          memcpy(additional_info, app_result.filename,
                 additional_info_size - 1);
        else
          strcpy(additional_info, app_result.filename);
      }
    }
    else
    {
      log_err("%s: GetAppResponse() FAILED\n", __FUNCTION__);
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT;
    }
  }

  /* Release communication session with application */
  pthread_mutex_unlock(&appContact);
  pthread_mutex_unlock(&appArrayMutex);

  return ret_val;
}


vhq_result_t SendMsgToApp(const char *receiver, int evtType, int messageID,
                          int result, const char *fileName,
                          const char *fileLocation, int eventMask,
                          char *transactionType, int notificationDataInteger,
                          unsigned char responseExpected, int putFileType)
{
  int index;
  vhq_result_t ret_val = VHQ_API_ERROR;

  dbg_trace("%s: +\n", __FUNCTION__);
  index = FindReceiver(receiver);
  if (index < 0)
  {
    log_err("%s ERROR: could not find receiver '%s'\n", __FUNCTION__, receiver);
    return VHQ_API_NO_CONSUMER;
  }

#if defined(Mx2)
  if (registered_app_array[index].use_TMS_API)
  {
    int ret;
    dbg_msg("%s: sending TMS message %d to app\n", __FUNCTION__, evtType);
    ret = tms_sendAppEvent(registered_app_array[index].user_name,
                           registered_app_array[index].receiver_name, evtType,
                           messageID, result, fileName, fileLocation, eventMask,
                           transactionType, notificationDataInteger,
                           putFileType);
    if (ret == TMS_STATUS_SUCCESS)
    {
      dbg_msg("%s: sent TMS message %d to app\n", __FUNCTION__, evtType);
      ret_val = VHQ_SUCCESS;
    }
    else if (ret == TMS_STATUS_MSGSND_FAILURE)
    {
      log_err("%s ERROR: TMS Send FAILED, returned %s (%d)\n",
              __FUNCTION__, status_to_string(ret), ret);
      ret_val = VHQ_API_MSGSND_FAILURE;
    }
    else
    {
      log_err("%s ERROR: TMS Send FAILED, returned %s (%d)\n",
              __FUNCTION__, status_to_string(ret), ret);
      UnRegisterUserApp(registered_app_array[index].user_name,
                        registered_app_array[index].receiver_name);
      ret_val = VHQ_API_APP_IPC_FAILURE;
    }
  }
  else
  {
    dbg_msg("%s: sending VHQ message %d to app\n", __FUNCTION__,
            convert_evt_to_msg_type(evtType));
    if (vhq_setAppEvent(registered_app_array[index].user_name,
                        registered_app_array[index].receiver_name,
                        convert_evt_to_msg_type(evtType), messageID,
                        convert_TMS_result_to_old_result_code(result), fileName,
                        fileLocation, eventMask, convertTxType(transactionType),
                        notificationDataInteger,
                        responseExpected) == VHQ_STATUS_SUCCESS)
    {
      dbg_msg("%s: sent VHQ message %d to app\n", __FUNCTION__,
              convert_evt_to_msg_type(evtType));
      ret_val = VHQ_SUCCESS;
    }
    else
    {
      log_err("%s ERROR: vhq_setAppEvent() FAILED\n", __FUNCTION__);
      ret_val = VHQ_API_MSGSND_FAILURE;
    }
  }
#else
  if (vhq_setAppEvent(registered_app_array[index].pid, convert_evt_to_msg_type(evtType), messageID,
    convert_TMS_result_to_old_result_code(result), fileName, fileLocation,
    eventMask, convertTxType(transactionType), notificationDataInteger, responseExpected) == VHQ_STATUS_SUCCESS)
  {
    dbg_msg( "%s: sent VHQ message %d to app\n", __FUNCTION__, convert_evt_to_msg_type(evtType));
    ret_val = VHQ_SUCCESS;
  }
  else
  {
    log_err( "%s ERROR: vhq_setAppEvent() FAILED\n", __FUNCTION__);
    ret_val = VHQ_API_MSGSND_FAILURE;
  }
#endif

  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
