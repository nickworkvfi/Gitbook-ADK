---
title: tmsagt/src/VHQXmlPackager/VHQXmlOperationProcessor.c

---

# tmsagt/src/VHQXmlPackager/VHQXmlOperationProcessor.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[reboot](_v_h_q_xml_operation_processor_8c.md#function-reboot)**(int ) |
| vhq_result_t | **[GatherQueryData](_v_h_q_xml_operation_processor_8c.md#function-gatherquerydata)**(get_data_mask_t GetDataMask, get_data_subquery_mask_t SubQueryMask, char * AppName, bool include_params, xmlDocPtr status_report_doc, char * op_id, uint32 operation_set_id, uint32 param_mask) |
| vhq_result_t | **[GatherDiagData](_v_h_q_xml_operation_processor_8c.md#function-gatherdiagdata)**(get_data_mask_t GetDataMask, char * AppName, xmlDocPtr status_report_doc, char * op_id, uint32 operation_set_id, uint32 param_mask) |
| pre_post_event_result_t | **[StandardPreEventCallback](_v_h_q_xml_operation_processor_8c.md#function-standardpreeventcallback)**(callback_t eCallback, event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| pre_post_event_result_t | **[StandardPostEventCallback](_v_h_q_xml_operation_processor_8c.md#function-standardposteventcallback)**(void ) |
| event_result_t | **[LaunchDownloader](_v_h_q_xml_operation_processor_8c.md#function-launchdownloader)**(void * arg) |
| void | **[cleanup_data](_v_h_q_xml_operation_processor_8c.md#function-cleanup-data)**(void ** ptr, xmlDocPtr * docptr) |
| event_result_t | **[GetDataProcessor](_v_h_q_xml_operation_processor_8c.md#function-getdataprocessor)**(void * arg) |
| event_result_t | **[GetDiagDataProcessor](_v_h_q_xml_operation_processor_8c.md#function-getdiagdataprocessor)**(void * arg) |
| event_result_t | **[SetDataProcessor](_v_h_q_xml_operation_processor_8c.md#function-setdataprocessor)**(void * arg) |
| bool | **[RequestDirListFromRoot](_v_h_q_xml_operation_processor_8c.md#function-requestdirlistfromroot)**(char * directory) |
| event_result_t | **[TermActProcessor](_v_h_q_xml_operation_processor_8c.md#function-termactprocessor)**(void * arg) |
| event_result_t | **[DoFileUpload](_v_h_q_xml_operation_processor_8c.md#function-dofileupload)**(void * arg) |
| event_result_t | **[FileUploader](_v_h_q_xml_operation_processor_8c.md#function-fileuploader)**(void * arg) |
| event_result_t | **[AppActionProcessor](_v_h_q_xml_operation_processor_8c.md#function-appactionprocessor)**(void * arg) |
| event_result_t | **[DelFileProcessor](_v_h_q_xml_operation_processor_8c.md#function-delfileprocessor)**(void * arg) |
| event_result_t | **[GetParamUpdateProcessor](_v_h_q_xml_operation_processor_8c.md#function-getparamupdateprocessor)**(void * arg) |
| vhq_result_t | **[ScheduleDownload](_v_h_q_xml_operation_processor_8c.md#function-scheduledownload)**(operation_t * operation, download_file_content_t * dl_file_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessDownloadFileOp](_v_h_q_xml_operation_processor_8c.md#function-processdownloadfileop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[SetServerCert](_v_h_q_xml_operation_processor_8c.md#function-setservercert)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleGetData](_v_h_q_xml_operation_processor_8c.md#function-schedulegetdata)**(operation_t * operation, get_data_content_t * get_data_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[GetDeviceData](_v_h_q_xml_operation_processor_8c.md#function-getdevicedata)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleGetDiagData](_v_h_q_xml_operation_processor_8c.md#function-schedulegetdiagdata)**(operation_t * operation, get_data_content_t * get_data_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[GetDiagData](_v_h_q_xml_operation_processor_8c.md#function-getdiagdata)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleSetData](_v_h_q_xml_operation_processor_8c.md#function-schedulesetdata)**(operation_t * operation, set_data_content_t * set_data_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[SetDeviceData](_v_h_q_xml_operation_processor_8c.md#function-setdevicedata)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleAction](_v_h_q_xml_operation_processor_8c.md#function-scheduleaction)**(operation_t * operation, term_act_content_t * action_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessTermActOp](_v_h_q_xml_operation_processor_8c.md#function-processtermactop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessTermActOp_New](_v_h_q_xml_operation_processor_8c.md#function-processtermactop-new)**(term_action_t action, operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleAppAction](_v_h_q_xml_operation_processor_8c.md#function-scheduleappaction)**(operation_t * operation, app_action_content_t * app_action_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessAppActionOp](_v_h_q_xml_operation_processor_8c.md#function-processappactionop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleDeleteFile](_v_h_q_xml_operation_processor_8c.md#function-scheduledeletefile)**(operation_t * operation, del_file_content_t * del_file_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessDeleteFileOp](_v_h_q_xml_operation_processor_8c.md#function-processdeletefileop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleCallback](_v_h_q_xml_operation_processor_8c.md#function-schedulecallback)**(operation_t * operation, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessCallbackOp](_v_h_q_xml_operation_processor_8c.md#function-processcallbackop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleGetParamUpdates](_v_h_q_xml_operation_processor_8c.md#function-schedulegetparamupdates)**(operation_t * operation, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessGetParamUpdatesOp](_v_h_q_xml_operation_processor_8c.md#function-processgetparamupdatesop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ScheduleUpload](_v_h_q_xml_operation_processor_8c.md#function-scheduleupload)**(operation_t * operation, upload_file_content_t * ul_file_content, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessUploadFileOp](_v_h_q_xml_operation_processor_8c.md#function-processuploadfileop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[ProcessCancelOp](_v_h_q_xml_operation_processor_8c.md#function-processcancelop)**(operation_t * operation, xmlNode * operation_element, int comm_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| void | **[VHQXmlOperationProcessorInit](_v_h_q_xml_operation_processor_8c.md#function-vhqxmloperationprocessorinit)**(void ) |
| vhq_result_t | **[ProcessOperation](_v_h_q_xml_operation_processor_8c.md#function-processoperation)**(xmlNode * operation_element, xmlDocPtr * status_report_doc, int comm_id, int message_id, srv_msg_type_t srv_msg_type, uint32 op_set_id, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| void | **[SendFailureResponse](_v_h_q_xml_operation_processor_8c.md#function-sendfailureresponse)**(vhq_result_t failure, int comm_id, char * operation_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, uint32 operation_set_id, uint32 recur_id) |
| void | **[VHQXmlExtractProcessingInformation](_v_h_q_xml_operation_processor_8c.md#function-vhqxmlextractprocessinginformation)**(const char * DeviceMessageXMLData, const char * ServerResponseXMLData, event_id_t event_id) |
| void | **[VHQXmlExtractServerError](_v_h_q_xml_operation_processor_8c.md#function-vhqxmlextractservererror)**(const char * XMLData, int XMLDataSize, char * error, unsigned int error_size) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| customAppInfo_t[TMS_MAX_REGISTERED_APPS] | **[customAppInfo](_v_h_q_xml_operation_processor_8c.md#variable-customappinfo)**  |
| pthread_mutex_t | **[appInfoMutex](_v_h_q_xml_operation_processor_8c.md#variable-appinfomutex)**  |
| pthread_mutex_t | **[ippKeyMutex](_v_h_q_xml_operation_processor_8c.md#variable-ippkeymutex)**  |
| vsr_cert_data_t[MAX_VSR_CERTS] | **[vsr_cert_tree](_v_h_q_xml_operation_processor_8c.md#variable-vsr-cert-tree)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CopyStrAttrFromNode](_v_h_q_xml_operation_processor_8c.md#define-copystrattrfromnode)**(dest, top_node, attr)  |
|  | **[NULL_STR](_v_h_q_xml_operation_processor_8c.md#define-null-str)**  |
|  | **[MAX_DL_FILE_OPERATIONS](_v_h_q_xml_operation_processor_8c.md#define-max-dl-file-operations)**  |
|  | **[MAX_UL_FILE_OPERATIONS](_v_h_q_xml_operation_processor_8c.md#define-max-ul-file-operations)**  |
|  | **[MAX_GET_DATA_OPERATIONS](_v_h_q_xml_operation_processor_8c.md#define-max-get-data-operations)**  |
|  | **[MAX_SET_DATA_OPERATIONS](_v_h_q_xml_operation_processor_8c.md#define-max-set-data-operations)**  |
|  | **[KMAILMAN_VERSION_STR](_v_h_q_xml_operation_processor_8c.md#define-kmailman-version-str)**  |
|  | **[KMAILMAN_VERSION_UNKNOWN_STR](_v_h_q_xml_operation_processor_8c.md#define-kmailman-version-unknown-str)**  |
|  | **[MAX_KEYS](_v_h_q_xml_operation_processor_8c.md#define-max-keys)**  |

## Detailed Description


Processes Xml Operations from the server 


## Functions Documentation

### function reboot

```cpp
int reboot(
    int 
)
```


### function GatherQueryData

```cpp
static vhq_result_t GatherQueryData(
    get_data_mask_t GetDataMask,
    get_data_subquery_mask_t SubQueryMask,
    char * AppName,
    bool include_params,
    xmlDocPtr status_report_doc,
    char * op_id,
    uint32 operation_set_id,
    uint32 param_mask
)
```


**Parameters**: 

  * **GetDataMask** = data mask details to be extracted as in get_data_mask_xml_conv_t 
  * **SubQueryMask** = mask defining application parameter to be send 
  * **AppName** = application for which data should be gathered to send 
  * **status_report_doc** = xml doc to which data nodes should be added 
  * **op_id** = operation ID 
  * **operation_set_id** = operation set id


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function gathers information about application parameters, device profile, memory profile which needs to be send to server. 


### function GatherDiagData

```cpp
static vhq_result_t GatherDiagData(
    get_data_mask_t GetDataMask,
    char * AppName,
    xmlDocPtr status_report_doc,
    char * op_id,
    uint32 operation_set_id,
    uint32 param_mask
)
```


**Parameters**: 

  * **GetDataMask** = get data mask providing info about data to be added to send to server. 
  * **AppName** = application name 
  * **status_report_doc** = xml doc to which gathered data nodes to be added. 
  * **op_id** = operation ID 
  * **operation_set_id** = operation set ID


**Return**: vhq_result_t- VHQ_SUCCESS,if success 

This function gather diagnostic data details to be send to server.Includes diagnostic profile, diagnostic counters, application profile data. 


### function StandardPreEventCallback

```cpp
pre_post_event_result_t StandardPreEventCallback(
    callback_t eCallback,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **event_set_id** = event sed ID of the event. 
  * **event_id** = event ID of the event. 
  * **app_approval_required** = TRUE, if application approval is required for event to happen.


**Return**: 

  * pre_post_event_result_t PRE_POST_EVENT_SUCCESS, if success. 
  * pre_post_event_result_t PRE_POST_EVENT_FAILURE, if failure. 


Local functions

This function calls the standard pre-event callback. Standard pre-event callback is establishing a connection 


### function StandardPostEventCallback

```cpp
pre_post_event_result_t StandardPostEventCallback(
    void 
)
```


**Return**: 

  * pre_post_event_result_t PRE_POST_EVENT_SUCCESS, if success. 
  * pre_post_event_result_t PRE_POST_EVENT_FAILURE, if failure. 


This function calls the post-event callback. 


### function LaunchDownloader

```cpp
event_result_t LaunchDownloader(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of LaunchDownloader event callback. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function cleanup_data

```cpp
static void cleanup_data(
    void ** ptr,
    xmlDocPtr * docptr
)
```


### function GetDataProcessor

```cpp
event_result_t GetDataProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of GetDataProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function GetDiagDataProcessor

```cpp
event_result_t GetDiagDataProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of GetDiagDataProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function SetDataProcessor

```cpp
event_result_t SetDataProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of SetDataProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function RequestDirListFromRoot

```cpp
bool RequestDirListFromRoot(
    char * directory
)
```


**Parameters**: 

  * **directory** = directory from which filenames should be copied.


**Return**: TRUE, if success; FALSE, otherwise 

This function lists the files from the root process. 


### function TermActProcessor

```cpp
event_result_t TermActProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of TermActProcessor event callback. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function DoFileUpload

```cpp
event_result_t DoFileUpload(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This function performs the fileuploader operation. 


### function FileUploader

```cpp
event_result_t FileUploader(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of FileUploader event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function AppActionProcessor

```cpp
event_result_t AppActionProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of AppActionProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function DelFileProcessor

```cpp
event_result_t DelFileProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of DelFileProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function GetParamUpdateProcessor

```cpp
event_result_t GetParamUpdateProcessor(
    void * arg
)
```


**Parameters**: 

  * **arg** = argument containing the information about the event.


**Return**: event_result_t, result of the event. 

This is the starting of GetParamUpdateProcessor event. Called by CommonOperationLauncher, if pre-event callback is a success. 


### function ScheduleDownload

```cpp
vhq_result_t ScheduleDownload(
    operation_t * operation,
    download_file_content_t * dl_file_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation information 
  * **dl_file_content** = download requirements received from server extracted 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type. 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into 
  * **num_events_extracted** = number of events extracted


**Return**: vhq_result_t VHQ_SUCCESS, if success 

Function schedules download event if the management plan contains a download operation. 


### function ProcessDownloadFileOp

```cpp
static vhq_result_t ProcessDownloadFileOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation information 
  * **operation_element** = points to xml node containing download info 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type to be send to server in response. 
  * **srv_op_type** = server operation type to be send to server 
  * **op_set_events** = event data to be stored 
  * **num_events_extracted** = number of events extracted.


**Return**: vhq_result_t, VHQ_SUCCESS, if success 

Function parses the download operation management plan details and calls function to schedule download event. 


### function SetServerCert

```cpp
static vhq_result_t SetServerCert(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


### function ScheduleGetData

```cpp
vhq_result_t ScheduleGetData(
    operation_t * operation,
    get_data_content_t * get_data_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **get_data_content** = data mask 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules getdata event if the management plan contains a getdata operation. 


### function GetDeviceData

```cpp
static vhq_result_t GetDeviceData(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function sets the get data masks and calls function to schedule getdata event. 


### function ScheduleGetDiagData

```cpp
vhq_result_t ScheduleGetDiagData(
    operation_t * operation,
    get_data_content_t * get_data_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **get_data_content** = data mask 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules get Diagnostic data event if the management plan contains a get diagnostic data operation. 


### function GetDiagData

```cpp
static vhq_result_t GetDiagData(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function sets the get data masks and calls function to schedule get diagnostic data event. 


### function ScheduleSetData

```cpp
vhq_result_t ScheduleSetData(
    operation_t * operation,
    set_data_content_t * set_data_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **set_data_content** = config data to be set 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules get set data event if the management plan contains a get set data operation. 


### function SetDeviceData

```cpp
static vhq_result_t SetDeviceData(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function fetch the agent/proxy config elements from server message and calls function to schedule set device data event. 


### function ScheduleAction

```cpp
vhq_result_t ScheduleAction(
    operation_t * operation,
    term_act_content_t * action_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **action_content** = terminal action type details 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules terminal action event if the management plan contains a terminal action operation. 


### function ProcessTermActOp

```cpp
static vhq_result_t ProcessTermActOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored. 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function fetch the terminal action type from server message and calls function to schedule terminal action event. 


### function ProcessTermActOp_New

```cpp
static vhq_result_t ProcessTermActOp_New(
    term_action_t action,
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **action** = terminal action type 
  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function fetch the terminal action type from server message and calls function to schedule terminal action event. 


### function ScheduleAppAction

```cpp
vhq_result_t ScheduleAppAction(
    operation_t * operation,
    app_action_content_t * app_action_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **app_action_content** = app action type details 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules app action event if the management plan contains a app action operation. 


### function ProcessAppActionOp

```cpp
static vhq_result_t ProcessAppActionOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function fetch the app action type from server message and calls function to schedule terminal action event. 


### function ScheduleDeleteFile

```cpp
vhq_result_t ScheduleDeleteFile(
    operation_t * operation,
    del_file_content_t * del_file_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **del_file_content** = delete file details 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules delete file action event if the management plan contains a delete file operation. 


### function ProcessDeleteFileOp

```cpp
static vhq_result_t ProcessDeleteFileOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function fetch the delete file details from server message and calls function to schedule delete file event. 


### function ScheduleCallback

```cpp
vhq_result_t ScheduleCallback(
    operation_t * operation,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


### function ProcessCallbackOp

```cpp
static vhq_result_t ProcessCallbackOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


### function ScheduleGetParamUpdates

```cpp
vhq_result_t ScheduleGetParamUpdates(
    operation_t * operation,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if success. 

This function schedules get parameter update event. 


### function ProcessGetParamUpdatesOp

```cpp
static vhq_result_t ProcessGetParamUpdatesOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This funtion calls a function to schedule a get parameter update event. 


### function ScheduleUpload

```cpp
vhq_result_t ScheduleUpload(
    operation_t * operation,
    upload_file_content_t * ul_file_content,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation related data 
  * **ul_file_content** = upload file details 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This function schedules an event to upload file. 


### function ProcessUploadFileOp

```cpp
static vhq_result_t ProcessUploadFileOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event scheduled. 

This funtion fetches file upload details from server message and calls a function to schedule upload file event. 


### function ProcessCancelOp

```cpp
static vhq_result_t ProcessCancelOp(
    operation_t * operation,
    xmlNode * operation_element,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation** = operation details 
  * **operation_element** = pointer to xml node under which operation related data are present 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **op_set_events** = event data to be stored into this 
  * **num_events_extracted** = number of events


**Return**: vhq_result_t, VHQ_SUCCESS, if event cancelled. 

This function cancels an operation with an operation set id recieved from server.All the operations with this op set id are cancelled. 


### function VHQXmlOperationProcessorInit

```cpp
void VHQXmlOperationProcessorInit(
    void 
)
```


Global functions 


### function ProcessOperation

```cpp
vhq_result_t ProcessOperation(
    xmlNode * operation_element,
    xmlDocPtr * status_report_doc,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    uint32 op_set_id,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation_element** = pointer to xml node under which operation related data are present. 
  * **status_report_doc** = pointer to xml doc to be created as response to server. 
  * **comm_id** = communication ID of message 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **op_set_id** = operation set ID 
  * **op_set_events** = operation sets event data 
  * **num_events_extracted** = number of events extracted.


**Return**: vhq_result_t 

This function schedules event depending on the operation_identifier_t received from management plan. 


### function SendFailureResponse

```cpp
void SendFailureResponse(
    vhq_result_t failure,
    int comm_id,
    char * operation_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    uint32 operation_set_id,
    uint32 recur_id
)
```


**Parameters**: 

  * **failure** = operation set node 
  * **comm_id** = communication ID 
  * **operation_id** = operation ID 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **operation_set_id** = operation set ID 
  * **recur_id** = recurring ID.


**Return**: void 

This function is used by event scheduler to send failures to the server that happen at the event scheduler level and affect jobs. 


### function VHQXmlExtractProcessingInformation

```cpp
void VHQXmlExtractProcessingInformation(
    const char * DeviceMessageXMLData,
    const char * ServerResponseXMLData,
    event_id_t event_id
)
```


**Parameters**: 

  * **DeviceMessageXMLData** = device message xml data. 
  * **ServerResponseXMLData** = server response xml data. 
  * **event_id** = event ID


**Return**: void 

This function Extract MessageType from device message and Status, ErrorId, AdditionalInformation from server message and save data for status processing 


### function VHQXmlExtractServerError

```cpp
void VHQXmlExtractServerError(
    const char * XMLData,
    int XMLDataSize,
    char * error,
    unsigned int error_size
)
```



## Attributes Documentation

### variable customAppInfo

```cpp
customAppInfo_t[TMS_MAX_REGISTERED_APPS] customAppInfo;
```


### variable appInfoMutex

```cpp
pthread_mutex_t appInfoMutex;
```


### variable ippKeyMutex

```cpp
static pthread_mutex_t ippKeyMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable vsr_cert_tree

```cpp
static vsr_cert_data_t[MAX_VSR_CERTS] vsr_cert_tree;
```



## Macros Documentation

### define CopyStrAttrFromNode

```cpp
#define CopyStrAttrFromNode(
    dest,
    top_node,
    attr
)
{ char *pszTmp=GetStrAttrFromNode(top_node, attr); if (pszTmp){ strcpy(dest, pszTmp); xmlFree(pszTmp);} }
```


Local definitions 


### define NULL_STR

```cpp
#define NULL_STR "Null"
```


### define MAX_DL_FILE_OPERATIONS

```cpp
#define MAX_DL_FILE_OPERATIONS 5
```


### define MAX_UL_FILE_OPERATIONS

```cpp
#define MAX_UL_FILE_OPERATIONS 5
```


### define MAX_GET_DATA_OPERATIONS

```cpp
#define MAX_GET_DATA_OPERATIONS 2
```


### define MAX_SET_DATA_OPERATIONS

```cpp
#define MAX_SET_DATA_OPERATIONS 1
```


### define KMAILMAN_VERSION_STR

```cpp
#define KMAILMAN_VERSION_STR "kmailman_Version"
```


### define KMAILMAN_VERSION_UNKNOWN_STR

```cpp
#define KMAILMAN_VERSION_UNKNOWN_STR "Kmailman version unknown "
```


### define MAX_KEYS

```cpp
#define MAX_KEYS 50
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <errno.h>
#include <libxml/parser.h>
#include <libxml/tree.h>
#include <pthread.h>
#include <linux/reboot.h>
#include <memory.h>
#include <malloc.h>
#include <stdio.h>
#include <string.h>
#include <svc.h>
#ifdef Mx2
#include <svcmgr/svc_utility.h>
#include <svcmgr/svc_security.h>
#include <svcmgr/svc_sysinfo.h>
#include <platforminfo_api.h>
#endif
#include <sys/ipc.h>
#include <sys/msg.h>
#include <time.h>
#include <unistd.h>
#include "EventScheduler.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQFileNames.h"
#include "VHQIo.h"
#include "VHQManager.h"
#include "VHQMessages.h"
#include "VHQOperations.h"
#include "VHQSecurity.h"
#include "VHQTypes.h"
#include "VHQUtils.h"
#include "VHQXmlDictionary.h"
#include "VHQXmlOperationProcessor.h"
#include "VHQXmlPackager.h"
#include "VHQXmlPackager_lcl.h"
#include "VHQXmlUtils.h"
#include "ComIntf.h"
/* To avoid compiler warning */
int reboot(int);

#ifndef LIBXML_TREE_ENABLED
#error "XML tree support not compiled in!!!"
#endif
#ifndef LIBXML_OUTPUT_ENABLED
#error "XML Output is not enabled!!!"
#endif

extern customAppInfo_t customAppInfo[TMS_MAX_REGISTERED_APPS];
extern pthread_mutex_t appInfoMutex;

static pthread_mutex_t ippKeyMutex = PTHREAD_MUTEX_INITIALIZER;

#define CopyStrAttrFromNode(dest, top_node, attr) { char *pszTmp=GetStrAttrFromNode(top_node, attr); if (pszTmp){ strcpy(dest, pszTmp); xmlFree(pszTmp);} }
static vhq_result_t GatherQueryData(get_data_mask_t GetDataMask,
                                    get_data_subquery_mask_t SubQueryMask,
                                    char *AppName, bool include_params,
                                    xmlDocPtr status_report_doc, char *op_id,
                                    uint32 operation_set_id, uint32 param_mask);
static vhq_result_t GatherDiagData(get_data_mask_t GetDataMask, char *AppName,
                                   xmlDocPtr status_report_doc, char *op_id,
                                   uint32 operation_set_id, uint32 param_mask);

#define NULL_STR    "Null"

#define MAX_DL_FILE_OPERATIONS  5

//static dl_dile_event_t _dl_file_events[MAX_DL_FILE_OPERATIONS];

#define MAX_UL_FILE_OPERATIONS  5

//static ul_file_event_t _ul_file_events[MAX_UL_FILE_OPERATIONS];

#define MAX_GET_DATA_OPERATIONS 2

#define MAX_SET_DATA_OPERATIONS 1

//static set_data_event_t _set_data_events[MAX_SET_DATA_OPERATIONS];

static vsr_cert_data_t vsr_cert_tree[MAX_VSR_CERTS];


pre_post_event_result_t StandardPreEventCallback(callback_t eCallback,
                                                 event_set_id_t event_set_id,
                                                 event_id_t event_id,
                                                 bool app_approval_required)
{
  if (CommNetConnect(eCallback, event_set_id, event_id, app_approval_required))
    return PRE_POST_EVENT_SUCCESS;
  else
    return PRE_POST_EVENT_FAILURE;
}

pre_post_event_result_t StandardPostEventCallback(void)
{
  if (CommNetDisconnect(FALSE) == 0)
    return PRE_POST_EVENT_SUCCESS;
  else
    return PRE_POST_EVENT_FAILURE;
}

event_result_t LaunchDownloader(void *arg)
{
  event_result_t dl_event_result;
  download_file_content_t *dl_file_content;
  launch_downloader_parms *downloader_parms;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  vhq_result_t dl_ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;

  downloader_parms = (launch_downloader_parms*) malloc(
      sizeof(launch_downloader_parms));
  if (!downloader_parms)
  {
    log_err("%s: ERROR launch_downloader_parms malloc failed\n", __FUNCTION__);
    return EVENT_CRITICAL_FAILURE;
  }

  memset(downloader_parms, 0, sizeof(launch_downloader_parms));
  memcpy(downloader_parms, arg_p->pvCbData, sizeof(launch_downloader_parms));
  dl_file_content = &downloader_parms->dl_file_content;

#if 0
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Now Accessing dl_file_content @ 0x%08x!!!!!!!!!!!!!!!!!!!!!!!!\n", __FUNCTION__, dl_file_content);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: dl_file_content->FileName = %s\n", __FUNCTION__, dl_file_content->FileName);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: dl_file_content->FileSize = %d\n", __FUNCTION__, dl_file_content->FileSize);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: dl_file_content->URL = %s\n", __FUNCTION__, dl_file_content->URL);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: downloader_parms->comm_id = %d\n", __FUNCTION__, downloader_parms->comm_id);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: downloader_parms->message_id = %d\n", __FUNCTION__, downloader_parms->message_id);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: downloader_parms->operation.OpId = %d\n", __FUNCTION__, downloader_parms->operation.OpId);
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: downloader_parms->srv_msg_type = %d\n", __FUNCTION__, downloader_parms->srv_msg_type);
#endif

  {
    char file_size[16] = { 0 };
    char method[16] = { 0 };
    char download_type[16] = { 0 };
    char install_action[16] = { 0 };
    char suppress_reboot[16] = { 0 };
    char compression[16] = { 0 };
    char hash_algo[16] = { 0 };
    char comm_id_str[16] = { 0 };
    char message_id_str[16] = { 0 };
    char op_id_str[64] = { 0 };
    char msg_type_str[8] = { 0 };
    char op_type_str[8] = { 0 };
    char msg_q_send_str[16] = { 0 };
    char msg_q_recv_str[16] = { 0 };
    char op_set_id_str[16] = { 0 };
    char recur_id_str[16] = { 0 };
    char delay_install_time_str[16] = { 0 };
    char *vhq_downloader_args[VHQ_DOWNLOADER_NUM_ARGS + 1];

    /* Setup the arguments */
    log_dbg("%s: Setting up downloader args - VHQ_DOWNLOADER_EXEC\n",
            __FUNCTION__);
    vhq_downloader_args[VHQ_DOWNLOADER_EXEC] = VHQ_DOWNLOADER_EXECUTABLE;

    if ((dl_file_content->Method <= DL_METHOD_GET)
        && (dl_file_content->Method >= DL_METHOD_FTP))
    {
      sprintf(method, "%d", dl_file_content->Method);
      vhq_downloader_args[VHQ_DOWNLOADER_METHOD] = method;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_METHOD\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->FileName != NULL)
        && (strlen(dl_file_content->FileName) != 0))
    {
      vhq_downloader_args[VHQ_DOWNLOADER_FILENAME] = dl_file_content->FileName;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_FILENAME\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if (dl_file_content->FileSize != 0)
    {
      sprintf(file_size, "%d", dl_file_content->FileSize);
      vhq_downloader_args[VHQ_DOWNLOADER_FILESIZE] = file_size;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_FILESIZE\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if (dl_file_content->DownloadType != 0)
    {
      sprintf(download_type, "%d", dl_file_content->DownloadType);
      vhq_downloader_args[VHQ_DOWNLOADER_TYPE] = download_type;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_TYPE\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if (dl_file_content->HashAlgo == DL_FILE_HASH_ALGO_SHA_256)
    {
      sprintf(hash_algo, "%d", dl_file_content->HashAlgo);
      vhq_downloader_args[VHQ_DOWNLOADER_HASH_ALGO] = hash_algo;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_HASH_ALGO\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->Hash != NULL) && (strlen(dl_file_content->Hash) != 0))
    {
      vhq_downloader_args[VHQ_DOWNLOADER_HASH] = dl_file_content->Hash;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_HASH\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->User != NULL) && (strlen(dl_file_content->User) != 0))
      vhq_downloader_args[VHQ_DOWNLOADER_USER] = dl_file_content->User;
    else
      vhq_downloader_args[VHQ_DOWNLOADER_USER] = NULL_STR;

    if ((dl_file_content->PW != NULL) && (strlen(dl_file_content->PW) != 0))
      vhq_downloader_args[VHQ_DOWNLOADER_PW] = dl_file_content->PW;
    else
      vhq_downloader_args[VHQ_DOWNLOADER_PW] = NULL_STR;

    if ((dl_file_content->URL != NULL) && (strlen(dl_file_content->URL) != 0))
      vhq_downloader_args[VHQ_DOWNLOADER_URL] = dl_file_content->URL;
    else
      vhq_downloader_args[VHQ_DOWNLOADER_URL] = NULL_STR;

    if ((dl_file_content->username != NULL)
        && (strlen(dl_file_content->username) != 0))
      vhq_downloader_args[VHQ_DOWNLOADER_USERNAME] = dl_file_content->username;
    else
      vhq_downloader_args[VHQ_DOWNLOADER_USERNAME] = NULL_STR;

    if ((dl_file_content->PostInstallAction <= TERM_ACTION_TS_RECALIBRATION)
        && (dl_file_content->PostInstallAction >= TERM_ACTION_NONE))
    {
      sprintf(install_action, "%d", dl_file_content->PostInstallAction);
      vhq_downloader_args[VHQ_DOWNLOADER_INSTALL_ACTION] = install_action;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_INSTALL_ACTION\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->SuppressReboot == 0)
        || (dl_file_content->SuppressReboot == 1))
    {
      sprintf(suppress_reboot, "%d", dl_file_content->SuppressReboot);
      vhq_downloader_args[VHQ_DOWNLOADER_SUPPRESS_REBOOT] = suppress_reboot;
    }
    else
    {
      LogMsg(
          VHQ_LOGGING_LEVEL_ERROR,
          "%s: Setting up downloader args - VHQ_DOWNLOADER_SUPPRESS_REBOOT\n",
          __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->CompressionEnabled == 0)
        || (dl_file_content->CompressionEnabled == 1))
    {
      sprintf(compression, "%d", dl_file_content->CompressionEnabled);
      vhq_downloader_args[VHQ_DOWNLOADER_COMPRESSION] = compression;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_COMPRESSION\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((dl_file_content->Receiver != NULL)
        && (strlen(dl_file_content->Receiver) != 0))
      vhq_downloader_args[VHQ_DOWNLOADER_RECEIVER] = dl_file_content->Receiver;
    else
      vhq_downloader_args[VHQ_DOWNLOADER_RECEIVER] = NULL_STR;

    sprintf(comm_id_str, "%d", downloader_parms->comm_id);
    vhq_downloader_args[VHQ_DOWNLOADER_COMM_ID] = comm_id_str;

    sprintf(message_id_str, "%d", downloader_parms->message_id);
    vhq_downloader_args[VHQ_DOWNLOADER_MESSAGE_ID] = message_id_str;

    snprintf(delay_install_time_str,
             sizeof(delay_install_time_str) / sizeof(char), "%d",
             dl_file_content->DelayInstallTime);
    vhq_downloader_args[VHQ_DOWNLOADER_DELAY_INSTALL_TIME] =
        delay_install_time_str;

    if ((downloader_parms->operation.OpId != NULL)
        && (strlen(downloader_parms->operation.OpId) != 0))
    {
      strcpy(op_id_str, downloader_parms->operation.OpId);
      vhq_downloader_args[VHQ_DOWNLOADER_OPERATION_ID] = op_id_str;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_OPERATION_ID\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((downloader_parms->srv_msg_type <= SRV_MSG_TYPE_UNKNOWN)
        && (downloader_parms->srv_msg_type >= SRV_MSG_HEARTBEAT))
    {
      sprintf(msg_type_str, "%d", downloader_parms->srv_msg_type);
      vhq_downloader_args[VHQ_DOWNLOADER_MSG_TYPE] = msg_type_str;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_MSG_TYPE\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    if ((downloader_parms->srv_op_type <= SRV_OP_TYPE_UNKNOWN)
        && (downloader_parms->srv_op_type >= SRV_OP_TYPE_GET_DEV_PROFILE))
    {
      sprintf(op_type_str, "%d", downloader_parms->srv_op_type);
      vhq_downloader_args[VHQ_DOWNLOADER_OP_TYPE] = op_type_str;
    }
    else
    {
      LogMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s: Setting up downloader args - VHQ_DOWNLOADER_MSG_IDENTIFIER\n",
             __FUNCTION__);
      return EVENT_CRITICAL_FAILURE;
    }

    vhq_downloader_args[VHQ_DOWNLOADER_NUM_ARGS] = NULL;

    sprintf(msg_q_send_str, "%d", responseSend_Qid);
    vhq_downloader_args[VHQ_DOWNLOADER_RSP_SEND_MSG_Q] = msg_q_send_str;

    sprintf(msg_q_recv_str, "%d", responseRecv_Qid);
    vhq_downloader_args[VHQ_DOWNLOADER_RSP_RECV_MSG_Q] = msg_q_recv_str;

    sprintf(op_set_id_str, "%d", downloader_parms->operation.OpSetId);
    vhq_downloader_args[VHQ_DOWNLOADER_OPERATION_SET_ID] = op_set_id_str;

    sprintf(recur_id_str, "%d", downloader_parms->operation.RecurId);
    vhq_downloader_args[VHQ_DOWNLOADER_RECUR_ID] = recur_id_str;

    dbg_msg("%s: Creating VHQDownloader process!!!!!\n", __FUNCTION__);

    {
      int i;
      downloader_func_params *dl_func_parms = malloc(
          sizeof(downloader_func_params));
      char *dl_parms_full_p = malloc((VHQ_DOWNLOADER_NUM_ARGS + 1) * 256);

      if ((dl_func_parms != NULL) && (dl_parms_full_p != NULL))
      {
        memset(dl_parms_full_p, 0, ((VHQ_DOWNLOADER_NUM_ARGS + 1) * 256));
        /* Start at 1 because we don't need the executable in the arg string */
        for (i = 0; i < VHQ_DOWNLOADER_NUM_ARGS; i++)
        {
          strcpy(&dl_parms_full_p[i * 256], vhq_downloader_args[i]);
        }

        dl_func_parms->argc = VHQ_DOWNLOADER_NUM_ARGS;
        dl_func_parms->argv = dl_parms_full_p;
        dl_func_parms->argv_size = (VHQ_DOWNLOADER_NUM_ARGS + 1) * 256;

        dl_ret_val = dl_main((int) dl_func_parms, arg_p->event_set_id,
                             arg_p->event_id);
        log_dbg("%s: dl_main() returned %d\n", __FUNCTION__, dl_ret_val);
      }
      else
      {
        dl_event_result = EVENT_FAILURE;
        log_err(
            "%s: malloc() for function parameters failed - returning %d - pid = %d\n",
            __FUNCTION__, dl_event_result, getpid());
      }

      if (dl_parms_full_p || dl_func_parms)
      {
        dl_parms_full_p ? free(dl_parms_full_p) : free(dl_func_parms);
        dl_func_parms = NULL;
        dl_parms_full_p = NULL;
      }
    }
  }

  dbg_msg("%s: Checking dl_ret_val (%d)\n", __FUNCTION__, dl_ret_val);

  dl_event_result = ConvertVHQResultToEventResult(dl_ret_val);

  if (downloader_parms)
  {
    free(downloader_parms);
    downloader_parms = NULL;
  }

  return dl_event_result;
}

static void cleanup_data(void **ptr, xmlDocPtr *docptr)
{
  if (ptr && *ptr)
  {
    free(*ptr);
    *ptr = NULL;
  }

  if (docptr && *docptr)
  {
    xmlFreeDoc(*docptr);
    *docptr = NULL;
  }
}

event_result_t GetDataProcessor(void *arg)
{
  xmlChar *data_p;
  vhq_result_t result;
  int getdataResponseLen;
  char *xmlGetDataResponse;
  vhq_result_t create_result;
  get_data_parms *gdata_parms;
  xmlDocPtr response_doc = NULL;
  get_data_content_t *get_data_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  uint32 param_mask = TMS_PARAMETER_TYPE_IDENTIFIER;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  gdata_parms = (get_data_parms*) malloc(sizeof(get_data_parms));
  if (!gdata_parms)
  {
    log_err("%s: ERROR gdata_parms malloc failure\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(gdata_parms, 0, sizeof(get_data_parms));
  memcpy(gdata_parms, arg_p->pvCbData, sizeof(get_data_parms));
  get_data_content = &gdata_parms->get_data_content;

  {
    xmlNode *response_root_element;

    if (get_data_content->Query & GET_DATA_MASK_APP_PROFILE)
    {
      param_mask = TMS_PARAMETER_TYPE_DEVICE_PROFILE;
      dbg_msg(
          "%s: GET_DATA_MASK_APP_PROFILE is set - param_mask set to 0x%08x\n",
          __FUNCTION__, param_mask);
    }

    dbg_msg("%s: Calling CreateResponseXml(EventSetResponseDoc = %p, ...)\n",
            __FUNCTION__, &response_doc);
    create_result = CreateResponseXml(&response_doc, gdata_parms->comm_id,
                                      gdata_parms->operation.OpId,
                                      gdata_parms->message_id,
                                      gdata_parms->srv_msg_type,
                                      gdata_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);

      result = GatherQueryData(get_data_content->Query,
                               get_data_content->SubQuery,
                               get_data_content->AppName,
                               get_data_content->include_param, response_doc,
                               gdata_parms->operation.OpId,
                               gdata_parms->operation.OpSetId, param_mask);

      AddOperationResult(response_op_res_node, gdata_parms->operation.OpId,
                         result, gdata_parms->operation.OpSetId,
                         gdata_parms->operation.RecurId,
                         gdata_parms->srv_op_type);
    }

    if (!FinalizeXMLDoc(response_doc, FALSE))
    {
      log_err("%s ERROR: Could not finalize GetData XML response\n",
              __FUNCTION__);
      cleanup_data((void*) &gdata_parms, &response_doc);

      return EVENT_FAILURE;
    }

    dbg_msg("%s: GetData XML Validated - Converting to response char buffer\n",
            __FUNCTION__);

    PRINT_XML_DOC(__FUNCTION__, response_doc);

    /* Dump the tree to temporary output memory */
    xmlDocDumpFormatMemory(response_doc, &data_p, &getdataResponseLen, 1);

    /* We will malloc the memory here, the caller is responsible for freeing it */
    dbg_msg("%s: malloc'ing %d bytes for response char buffer\n", __FUNCTION__,
            getdataResponseLen + 1);
    xmlGetDataResponse = malloc(getdataResponseLen + 1);
    if (xmlGetDataResponse)
    {
      /* Copy the tree to memory buff and delete temporary memory */
      memset(xmlGetDataResponse, 0, getdataResponseLen + 1);

      /* Copy the tree to memory buff and delete temporary memory */
      dbg_msg("%s: Copying converted XML to response char buffer\n",
              __FUNCTION__);
      memcpy(xmlGetDataResponse, (char*) data_p, getdataResponseLen);

      PRINT_XML_DATA("GetDataProcessor", xmlGetDataResponse);

      dbg_notice(
          "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
          __FUNCTION__, getdataResponseLen);

      vhq_result = VHQManagerContactServer(&xmlGetDataResponse,
                                           &getdataResponseLen, arg_p->event_id,
                                           &gdata_parms->comm_id,
                                           &gdata_parms->message_id,
                                           &gdata_parms->message_id,
                                           gdata_parms->operation.OpId, TRUE,
                                           TRUE,
                                           FALSE);

      event_result = ConvertVHQResultToEventResult(vhq_result);

    }
    else
    {
      log_err("%s: FAILURE allocating GetData Response buffer\n", __FUNCTION__);
    }

    xmlFree(data_p);

    /* Use this to debug memory issues */
    xmlMemoryDump();
  }

  cleanup_data((void*) &gdata_parms, &response_doc);
  dbg_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

event_result_t GetDiagDataProcessor(void *arg)
{
  xmlChar *data_p;
  vhq_result_t result;
  int getdataResponseLen;
  char *xmlGetDataResponse;
  vhq_result_t create_result;
  get_data_parms *gdata_parms;
  xmlDocPtr response_doc = NULL;
  get_data_content_t *get_data_content;
  uint32 param_mask = TMS_PARAMETER_TYPE_IDENTIFIER;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  gdata_parms = (get_data_parms*) malloc(sizeof(get_data_parms));
  if (!gdata_parms)
  {
    log_err("%s: ERROR gdata_parms malloc failure\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(gdata_parms, 0, sizeof(get_data_parms));
  memcpy(gdata_parms, arg_p->pvCbData, sizeof(get_data_parms));
  get_data_content = &gdata_parms->get_data_content;

  {
    xmlNode *response_root_element;

    if (get_data_content->Query & GET_DATA_MASK_APP_PROFILE)
    {
      param_mask = TMS_PARAMETER_TYPE_DIAGNOSTIC;
      log_dbg(
          "%s: GET_DATA_MASK_APP_PROFILE is set - param_mask set to 0x%08x\n",
          __FUNCTION__, param_mask);
    }

    dbg_msg(
        "%s: Calling CreateResponseXml(EventSetResponseDoc = 0x%08x, ...)\n",
        __FUNCTION__, &response_doc);
    create_result = CreateResponseXml(&response_doc, gdata_parms->comm_id,
                                      gdata_parms->operation.OpId,
                                      gdata_parms->message_id,
                                      gdata_parms->srv_msg_type,
                                      gdata_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);

      result = GatherDiagData(get_data_content->Query,
                              get_data_content->AppName, response_doc,
                              gdata_parms->operation.OpId,
                              gdata_parms->operation.OpSetId, param_mask);

      AddOperationResult(response_op_res_node, gdata_parms->operation.OpId,
                         result, gdata_parms->operation.OpSetId,
                         gdata_parms->operation.RecurId,
                         gdata_parms->srv_op_type);
    }

    if (!FinalizeXMLDoc(response_doc, FALSE))
    {
      log_err("%s ERROR: Could not finalize GetDiagData XML response\n",
              __FUNCTION__);
      cleanup_data((void*) &gdata_parms, &response_doc);

      return EVENT_FAILURE;
    }

    dbg_notice(
        "%s: GetData XML Validated - Converting to response char buffer\n",
        __FUNCTION__);

    PRINT_XML_DOC(__FUNCTION__, response_doc);

    /* Dump the tree to temporary output memory */
    xmlDocDumpFormatMemory(response_doc, &data_p, &getdataResponseLen, 1);

    /* We will malloc the memory here, the caller is responsible for freeing it */
    dbg_msg("%s: malloc'ing %d bytes for response char buffer\n", __FUNCTION__,
            getdataResponseLen + 1);
    xmlGetDataResponse = malloc(getdataResponseLen + 1);

    if (xmlGetDataResponse)
    {
      /* Copy the tree to memory buff and delete temporary memory */
      memset(xmlGetDataResponse, 0, getdataResponseLen + 1);

      /* Copy the tree to memory buff and delete temporary memory */
      dbg_msg("%s: Copying converted XML to response char buffer\n",
              __FUNCTION__);
      memcpy(xmlGetDataResponse, (char*) data_p, getdataResponseLen);

      PRINT_XML_DATA("GetDiagDataProcessor", xmlGetDataResponse);

      dbg_notice(
          "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
          __FUNCTION__, getdataResponseLen);

      vhq_result = VHQManagerContactServer(&xmlGetDataResponse,
                                           &getdataResponseLen, arg_p->event_id,
                                           &gdata_parms->comm_id,
                                           &gdata_parms->message_id,
                                           &gdata_parms->message_id,
                                           gdata_parms->operation.OpId, TRUE,
                                           TRUE,
                                           FALSE);

      event_result = ConvertVHQResultToEventResult(vhq_result);
    }
    else
    {
      log_err("%s: FAILURE allocating GetData Response buffer\n", __FUNCTION__);
    }
    xmlFree(data_p);

    /* Use this to debug memory issues */
    xmlMemoryDump();
  }

  cleanup_data((void*) &gdata_parms, &response_doc);
  dbg_msg("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
          getpid());

  return event_result;
}

/* REVISIT (Mitch 3-8-2012): Need to make sure we are setting the unique identifier at some point */

event_result_t SetDataProcessor(void *arg)
{
  int i = 0;
  xmlChar *data_p;
  vhq_result_t result;
  int setdataResponseLen;
  char *xmlSetDataResponse;
  vhq_result_t create_result;
  set_data_parms *sdata_parms;
  xmlDocPtr response_doc = NULL;
  set_data_content_t *set_data_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  sdata_parms = (set_data_parms*) malloc(sizeof(set_data_parms));
  if (!sdata_parms)
  {
    log_err("%s: ERROR sdata_parms malloc failure\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(sdata_parms, 0, sizeof(set_data_parms));
  memcpy(sdata_parms, arg_p->pvCbData, sizeof(set_data_parms));
  set_data_content = &sdata_parms->set_data_content;

  {
    xmlNode *response_root_element;

    result = VHQ_SUCCESS;
    for (i = 0; i < set_data_content->SetDataElementCount; i++)
    {
      uint32 param_id, param_type;

      if (VHQGetNameInfo(set_data_content->SetDataElementArray[i].Name,
                         set_data_content->SetDataElementArray[i].Section,
                         &param_id, &param_type))
      {
        dbg_msg("%s: Converted %s in section %s to ID %d, type %d\n",
                __FUNCTION__, set_data_content->SetDataElementArray[i].Name,
                set_data_content->SetDataElementArray[i].Section, param_id,
                param_type);

        switch (param_type)
        {
          case PTYPE_UINT32:
          {
            uint32 value;

            if (!sscanf(set_data_content->SetDataElementArray[i].Value, "%u",
                        &value))
            {
              log_err("%s ERROR: Could not convert Value %s to uint32\n",
                      __FUNCTION__,
                      set_data_content->SetDataElementArray[i].Value);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_VALUE_ERROR;
              break;
            }

            dbg_msg("%s: Setting param %d to %u\n", __FUNCTION__, param_id,
                    value);
            if (!VHQSetParameterUint32(param_id, value, TRUE))
            {
              log_err("%s ERROR: Could not set parameter %d\n", __FUNCTION__,
                      param_id);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_SET_ERROR;
            }
            break;
          }
          case PTYPE_INT32:
          {
            int value;

            if (!sscanf(set_data_content->SetDataElementArray[i].Value, "%d",
                        &value))
            {
              log_err("%s ERROR: Could not convert Value %s to int\n",
                      __FUNCTION__,
                      set_data_content->SetDataElementArray[i].Value);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_VALUE_ERROR;
              break;
            }

            log_err("%s ERROR: No support for INT 32 types!!!!!\n",
                    __FUNCTION__);
            //if (!VHQSetParameterInt32(param_id, value, TRUE))
            result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_SET_ERROR;
            break;
          }
          case PTYPE_BOOL:
          {
            uint32 value;
            bool set_value = FALSE;

            if (!sscanf(set_data_content->SetDataElementArray[i].Value, "%u",
                        &value))
            {
              log_err(
                  "%s ERROR: Could not convert Value %s to uint32 - and then boolean\n",
                  __FUNCTION__, set_data_content->SetDataElementArray[i].Value);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_VALUE_ERROR;
              break;
            }

            if (value)
              set_value = TRUE;

            dbg_msg("%s: Setting param %d to %u\n", __FUNCTION__, param_id,
                    set_value);
            if (!VHQSetParameterBool(param_id, set_value, TRUE))
            {
              log_err("%s ERROR: Could not set parameter %d\n", __FUNCTION__,
                      param_id);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_SET_ERROR;
            }
            break;
          }
          case PTYPE_STRING:
          {
            dbg_msg("%s: Setting param %d to %s\n", __FUNCTION__, param_id,
                    set_data_content->SetDataElementArray[i].Value);
            if (!VHQSetParameterString(
                param_id, set_data_content->SetDataElementArray[i].Value,
                strlen(set_data_content->SetDataElementArray[i].Value), TRUE))
            {
              log_err("%s ERROR: Could not set parameter %d\n", __FUNCTION__,
                      param_id);
              result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_SET_ERROR;
            }
            break;
          }
        }

      }
      else
        result = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_NAME_SECTION_ERROR;

    }

    if (result == VHQ_SUCCESS)
    {
      /* Updating the INI was successful so let's load the new config data */
      VHQReloadConfigData(FALSE, FALSE);
    }

    create_result = CreateResponseXml(&response_doc, sdata_parms->comm_id,
                                      sdata_parms->operation.OpId,
                                      sdata_parms->message_id,
                                      sdata_parms->srv_msg_type,
                                      sdata_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);

      AddOperationResult(response_op_res_node, sdata_parms->operation.OpId,
                         result, sdata_parms->operation.OpSetId,
                         sdata_parms->operation.RecurId,
                         sdata_parms->srv_op_type);
    }

    {
      if (!FinalizeXMLDoc(response_doc, FALSE))
      {
        cleanup_data((void*) &sdata_parms, &response_doc);
        log_err("%s ERROR: Could not finalize SetData XML response\n",
                __FUNCTION__);

        return EVENT_FAILURE;
      }

      PRINT_XML_DOC(__FUNCTION__, response_doc);

      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_doc, &data_p, &setdataResponseLen, 1);

      /* We will malloc the memory here, the caller is responsible for freeing it */
      xmlSetDataResponse = malloc(setdataResponseLen + 1);
      if (xmlSetDataResponse)
      {
        /* Copy the tree to memory buff and delete temporary memory */
        memset(xmlSetDataResponse, 0, setdataResponseLen + 1);

        /* Copy the tree to memory buff and delete temporary memory */
        memcpy(xmlSetDataResponse, (char*) data_p, setdataResponseLen);

        PRINT_XML_DATA("SetDataProcessor", xmlSetDataResponse);

        vhq_result = VHQManagerContactServer(&xmlSetDataResponse,
                                             &setdataResponseLen,
                                             arg_p->event_id,
                                             &sdata_parms->comm_id,
                                             &sdata_parms->message_id,
                                             &sdata_parms->message_id,
                                             sdata_parms->operation.OpId, TRUE,
                                             TRUE,
                                             FALSE);

        event_result = ConvertVHQResultToEventResult(vhq_result);
      }
      else
      {
        log_err("%s: FAILURE allocating SetData Response buffer\n",
                __FUNCTION__);
      }
      xmlFree(data_p);

      /* Use this to debug memory issues */
      xmlMemoryDump();
    }
  }

  cleanup_data((void*) &sdata_parms, &response_doc);
  log_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

bool RequestDirListFromRoot(char *directory)
{
#ifdef Mx2
  /* MX2 will not have a root process so call the function directly */
  return CreateFileListing(DIR_LIST_OUT_FILE, directory);
#else
    int outQid, inQid;
    VHQRootRequestMsg dir_list_request_msg;
    VHQRootResponseMsg dir_list_response_msg;

    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
    inQid=msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&dir_list_request_msg, 0, sizeof(VHQRootRequestMsg));
        memset(&dir_list_response_msg, 0, sizeof(VHQRootResponseMsg));

        dir_list_request_msg.clientPid = getpid();
        dir_list_request_msg.message_type = VHQ_ROOT_REQUEST_DIR_LIST;

        strcpy(dir_list_request_msg.data.sDirList.szDirectory, directory);
        strcpy(dir_list_request_msg.data.sDirList.szOutFileName, DIR_LIST_OUT_FILE);

        SafeMsgSndWrapper(outQid, &dir_list_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &dir_list_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), dir_list_request_msg.clientPid, 0, FALSE) >= exp_len)
            return dir_list_response_msg.data.sDirListResponse.bResult;
        else
            return FALSE;
    }
    else
    {
        log_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        return FALSE;
    }
#endif
}

event_result_t TermActProcessor(void *arg)
{
  xmlChar *data_p;
  vhq_result_t result;
  int termactResponseLen;
  char *xmlTermActResponse;
  vhq_result_t create_result;
  term_act_parms *action_parms;
  xmlDocPtr response_doc = NULL;
  term_act_content_t *action_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  action_parms = (term_act_parms*) malloc(sizeof(term_act_parms));
  if (!action_parms)
  {
    log_err("%s: action_parms malloc failed\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(action_parms, 0, sizeof(term_act_parms));
  memcpy(action_parms, arg_p->pvCbData, sizeof(term_act_parms));
  action_content = &action_parms->term_act_content;

  {
    xmlNode *response_root_element;

    if ((arg_p->continuation) && (action_content->action == TERM_ACTION_REBOOT))
    {
      log_notice(
          "%s: continuation of REBOOT event so it must have been successful - marking as SUCCESSFUL in XML\n",
          __FUNCTION__);
      result = VHQ_SUCCESS;
    }
    else if ((arg_p->continuation)
        && (action_content->action == TERM_ACTION_SET_CLOCK))
    {
      log_notice(
          "%s: continuation of Set Clock event so it must have been successful - marking as SUCCESSFUL in XML\n",
          __FUNCTION__);
      result = VHQ_SUCCESS;
    }
    else
    {
      result = ProcessAction(action_content, action_parms->comm_id,
                             action_parms->message_id,
                             action_parms->operation.OpSetId,
                             action_parms->operation.OpId,
                             action_parms->srv_msg_type,
                             action_parms->srv_op_type, arg_p->event_set_id,
                             arg_p->event_id, TRUE, TRUE);
    }

    create_result = CreateResponseXml(&response_doc, action_parms->comm_id,
                                      action_parms->operation.OpId,
                                      action_parms->message_id,
                                      action_parms->srv_msg_type,
                                      action_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);

      AddOperationResult(response_op_res_node, action_parms->operation.OpId,
                         result, action_parms->operation.OpSetId,
                         action_parms->operation.RecurId,
                         action_parms->srv_op_type);
    }

    {
      if (!FinalizeXMLDoc(response_doc, FALSE))
      {
        log_err("%s ERROR: Could not finalize TermAction XML response\n",
                __FUNCTION__);
        cleanup_data((void*) &action_parms, &response_doc);

        return EVENT_FAILURE;
      }

      PRINT_XML_DOC(__FUNCTION__, response_doc);

      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_doc, &data_p, &termactResponseLen, 1);

      /* We will malloc the memory here, the caller is responsible for freeing it */
      xmlTermActResponse = malloc(termactResponseLen + 1);
      if (xmlTermActResponse)
      {

        /* Copy the tree to memory buff and delete temporary memory */
        memset(xmlTermActResponse, 0, termactResponseLen + 1);

        /* Copy the tree to memory buff and delete temporary memory */
        memcpy(xmlTermActResponse, (char*) data_p, termactResponseLen);

        PRINT_XML_DATA("TermActProcessor", xmlTermActResponse);

        vhq_result = VHQManagerContactServer(&xmlTermActResponse,
                                             &termactResponseLen,
                                             arg_p->event_id,
                                             &action_parms->comm_id,
                                             &action_parms->message_id,
                                             &action_parms->message_id,
                                             action_parms->operation.OpId, TRUE,
                                             TRUE,
                                             FALSE);

        event_result = ConvertVHQResultToEventResult(vhq_result);
      }
      else
      {
        log_err("%s: FAILURE allocating Term Act Response buffer\n",
                __FUNCTION__);
      }
      xmlFree(data_p);

      /* Use this to debug memory issues */
      xmlMemoryDump();
    }
  }

  cleanup_data((void*) &action_parms, &response_doc);
  log_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

event_result_t DoFileUpload(void *arg)
{
  int uploadResponseLen;
  char ul_file_name[256];
  bool remove_file = FALSE;
  uploader_parms *ul_parms;
  char local_file_name[256];
  char *xmlUploadResponse = NULL;
  upload_file_content_t *ul_file_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  upload_file_type_t ul_file_type = UPLOAD_FILE_TYPE_UNKNOWN;
  vhq_result_t upload_result =
      VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_GENERAL_ERROR;
  vhq_result_t vhq_result = VHQ_SUCCESS;
  char *url = NULL;

  ul_parms = (uploader_parms*) malloc(sizeof(uploader_parms));
  if (!ul_parms)
  {
    log_err("%s: ERROR ul_parms malloc failed\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(ul_parms, 0, sizeof(uploader_parms));
  memcpy(ul_parms, arg_p->pvCbData, sizeof(uploader_parms));
  ul_file_content = &ul_parms->ul_file_content;

  dbg_msg("\n\n%s: UL Operation Filename = %s\n", __FUNCTION__,
          ul_file_content->FileName);
  dbg_msg("\tUL Operation Type = %d\n", ul_file_content->Type);
  dbg_msg("\tUL Operation Method = %d\n", ul_file_content->Method);

  url = ul_file_content->URL;

  dbg_msg("\tUL Operation URL = %s\n", url);

  memset(local_file_name, 0, sizeof(local_file_name));
  memset(ul_file_name, 0, sizeof(ul_file_name));

  /* Check if this is DIR listing or screen capture file type */
  switch (ul_file_content->Type)
  {
    case UPLOAD_TYPE_DIR_LIST:
    {
      if (!RequestDirListFromRoot(ul_file_content->FileName))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DIR_LIST_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, DIR_LIST_OUT_FILE);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TXT;
      remove_file = TRUE;
      break;
    }
    case UPLOAD_TYPE_SCREEN_CAPTURE:
    {
      /* Grab the screen capture */
      log_dbg("%s: Calling VHQScreenCapture()\n", __FUNCTION__);
      if (!VHQScreenCapture(SCREEN_CAP_OUT_FILE))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_SCREEN_CAP_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, SCREEN_CAP_OUT_FILE);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_PNG;
      remove_file = TRUE;
      break;
    }

    case UPLOAD_TYPE_LOG_FILE_LIST:
    {
      char LogFileListFileName[256];

      /* Grab the user log files */
      log_dbg("%s: Calling VHQGetFileList(UPLOAD_TYPE_LOG_FILE_LIST)\n",
              __FUNCTION__);
      if (!VHQGetFileList(FILE_LIST_LOG_FILE_LIST, LogFileListFileName,
                          sizeof(LogFileListFileName)))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_LOG_FILE_LIST_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, LogFileListFileName);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TXT;
      remove_file = TRUE;
      break;
    }
    case UPLOAD_TYPE_OS_CONFIG_FILES:
    {
      char OSConfigFileName[256];

      /* Grab the user log files */
      log_dbg("%s: Calling VHQGetFileList(UPLOAD_TYPE_OS_CONFIG_FILES)\n",
              __FUNCTION__);
      if (!VHQGetFileList(FILE_LIST_OS_CONFIG_FILES, OSConfigFileName,
                          sizeof(OSConfigFileName)))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_OS_CONFIG_FILES_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, OSConfigFileName);
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s %s\n", __FUNCTION__,
                 local_file_name, OSConfigFileName);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TGZ;
      remove_file = TRUE;
      break;
    }
    case UPLOAD_TYPE_OS_LOG_FILES:
    {
      char OSLogFileName[256];

      /* Grab the user log files */
      log_dbg("%s: Calling VHQGetFileList(FILE_LIST_OS_LOG_FILES)\n",
              __FUNCTION__);
      if (!VHQGetFileList(FILE_LIST_OS_LOG_FILES, OSLogFileName,
                          sizeof(OSLogFileName)))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_OS_LOG_FILES_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, OSLogFileName);
        dbg_msg("%s: local_file_name is %s - OSLogFileName is %s\n",
                __FUNCTION__, local_file_name, OSLogFileName);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TGZ;
      remove_file = TRUE;
      break;
    }
    case UPLOAD_TYPE_USR_LOG_FILES:
    {
      char UsrLogFileName[256];

      /* Grab the user log files */
      log_dbg("%s: Calling VHQGetFileList(FILE_LIST_USR_LOG_FILES)\n",
              __FUNCTION__);
      if (!VHQGetFileList(FILE_LIST_USR_LOG_FILES, UsrLogFileName,
                          sizeof(UsrLogFileName)))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_USR_LOG_FILES_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, UsrLogFileName);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TXT;
      remove_file = TRUE;
      break;
    }

    case UPLOAD_TYPE_PARAM_FILE:
    {
      char FullParamFileName[256];

      /* Grab the user log files */
      log_dbg("%s: Calling VHQGetParamFileName(%s)\n", __FUNCTION__,
              ul_file_content->FileName);
      if (!VHQGetParamFileName(ul_file_content->Receiver,
                               ul_file_content->FileName, FullParamFileName,
                               sizeof(FullParamFileName), &remove_file))
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_PARAM_FILE_ERROR;
      else
        upload_result = VHQ_SUCCESS;

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, FullParamFileName);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_UNKNOWN;
      break;
    }
      break;
    case UPLOAD_TYPE_VRK_PUBKEY_FILE:
    {
      char VRKPubKeyName[256];
      int checkfile;

      ul_file_type = UPLOAD_FILE_TYPE_UNKNOWN;

      /* Get VRK Public key file */
      checkfile = VHQGetVRKPubKeyFile(VRKPubKeyName, sizeof(VRKPubKeyName));

      if (checkfile == CHECK_VRKPUBKEY_FILE_ERROR)
      {
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_VRK_PUBKEY_ERROR;
      }
      else if (checkfile == CHECK_VRKPUBKEY_FILE_NOT_FOUND)
      {
        upload_result = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST;
      }
      else if (checkfile == CHECK_ONLY_VRKPUBKEY_FILE_FOUND)
      {
        upload_result =
            VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_VRK_PUBKEY_ONLY_EXIST_ERROR;
      }
      else if (checkfile == CHECK_VRKPUBKEY_COMBINED_TGZ)
      {
        ul_file_type = UPLOAD_FILE_TYPE_TGZ;
        upload_result = VHQ_SUCCESS;
      }
      else
      {
        upload_result = VHQ_SUCCESS;
      }

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, VRKPubKeyName);

        log_dbg("%s: UploadFile is called with %s file\n", __FUNCTION__,
                local_file_name);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   url, ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }

      dbg_msg("%s: %s file upload_result: %d\n", __FUNCTION__, local_file_name,
              upload_result);

    }
      break;
    case UPLOAD_TYPE_KEY_DATA_FILE:
    {
      if (!FileExists(KEY_DATA_TGZ_OUT_FILE))
      {
        upload_result = GetKeyData();
      }
      else
      {
        upload_result = VHQ_SUCCESS;
      }

      if (upload_result == VHQ_SUCCESS)
      {
        strcpy(local_file_name, KEY_DATA_TGZ_OUT_FILE);
        upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                   ul_file_content->User, ul_file_content->PW,
                                   ul_file_content->URL,
                                   ul_file_content->CompressionEnabled,
                                   ul_file_name, arg_p->event_set_id,
                                   arg_p->event_id);
      }
      ul_file_type = UPLOAD_FILE_TYPE_TGZ;
      remove_file = TRUE;
      break;
    }
    default:
    {
      remove_file = FALSE;
      ul_file_type = UPLOAD_FILE_TYPE_UNKNOWN;
      strcpy(local_file_name, ul_file_content->FileName);
      upload_result = UploadFile(ul_file_content->Method, local_file_name,
                                 ul_file_content->User, ul_file_content->PW,
                                 url, ul_file_content->CompressionEnabled,
                                 ul_file_name, arg_p->event_set_id,
                                 arg_p->event_id);
      break;
    }
  }

  dbg_msg("%s: local_file_name is %s\n", __FUNCTION__, local_file_name);
  if (ul_file_content->Method == UPLOAD_METHOD_WEB_SERVICE)
  {
    xmlDocPtr tempXmlDoc = NULL;
    xmlDocPtr response_doc = NULL;
    int srv_msg_id = ul_parms->message_id;

    uploadResponseLen = VHQXmlCreateUploadResponse(&xmlUploadResponse,
                                                   ul_parms->comm_id,
                                                   ul_parms->message_id,
                                                   ul_parms->operation.OpSetId,
                                                   ul_parms->operation.OpId,
                                                   ul_parms->srv_msg_type,
                                                   ul_parms->srv_op_type,
                                                   ul_parms->operation.RecurId,
                                                   upload_result,
                                                   local_file_name,
                                                   ul_file_name,
                                                   ul_file_content->Type,
                                                   ul_file_type, &tempXmlDoc);

    upload_result = UploadFileWebMethod(local_file_name, url,
                                        ul_file_content->WebMethod,
                                        &xmlUploadResponse, ul_file_name,
                                        &ul_parms->comm_id, &srv_msg_id,
                                        ul_parms->operation.OpId, FALSE,
                                        arg_p->event_set_id, arg_p->event_id);
    /* UploadFileWebMethod is actually uploading the file to the WebMethod specified in the upload MP.
     It looks like a status but it is not actually a status message, it is the actual file upload.
     We need to create a response with the WebMethod result so that we can send the actual upload status
     to the normal PostPayload Web Method so that server can report the response. */
    uploadResponseLen = 0;
    uploadResponseLen = VHQXmlCreateUploadResponse(&xmlUploadResponse,
                                                   ul_parms->comm_id,
                                                   ul_parms->message_id,
                                                   ul_parms->operation.OpSetId,
                                                   ul_parms->operation.OpId,
                                                   ul_parms->srv_msg_type,
                                                   ul_parms->srv_op_type,
                                                   ul_parms->operation.RecurId,
                                                   upload_result,
                                                   local_file_name,
                                                   ul_file_name,
                                                   ul_file_content->Type,
                                                   ul_file_type, &response_doc);
  }
  else
  {
    xmlDocPtr response_doc = NULL;

    uploadResponseLen = VHQXmlCreateUploadResponse(&xmlUploadResponse,
                                                   ul_parms->comm_id,
                                                   ul_parms->message_id,
                                                   ul_parms->operation.OpSetId,
                                                   ul_parms->operation.OpId,
                                                   ul_parms->srv_msg_type,
                                                   ul_parms->srv_op_type,
                                                   ul_parms->operation.RecurId,
                                                   upload_result,
                                                   local_file_name,
                                                   ul_file_name,
                                                   ul_file_content->Type,
                                                   ul_file_type, &response_doc);
  }

  if ((remove_file) && (strlen(local_file_name)))
  {
    dbg_msg("%s: Removing local file %s\n", __FUNCTION__, local_file_name);
    remove(local_file_name);
  }

  PRINT_XML_DATA("FileUploader", xmlUploadResponse);

  vhq_result = VHQManagerContactServer(&xmlUploadResponse, &uploadResponseLen,
                                       arg_p->event_id, &ul_parms->comm_id,
                                       &ul_parms->message_id,
                                       &ul_parms->message_id,
                                       ul_parms->operation.OpId, TRUE, TRUE,
                                       FALSE);

  if (ul_parms)
  {
    free(ul_parms);
    ul_parms = NULL;
  }

  event_result = ConvertVHQResultToEventResult(vhq_result);

  return event_result;
}

event_result_t FileUploader(void *arg)
{
  event_result_t event_result;

  event_result = DoFileUpload(arg);
  dbg_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

event_result_t AppActionProcessor(void *arg)
{
  xmlChar *data_p;
  int appactionResponseLen;
  char *xmlAppActionResponse;
  vhq_result_t create_result;
  xmlDocPtr response_doc = NULL;
  app_action_parms *action_parms;
  vhq_result_t result = VHQ_SUCCESS;
  app_action_content_t *app_action_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  action_parms = (app_action_parms*) malloc(sizeof(app_action_parms));
  if (!action_parms)
  {
    log_err("%s: ERROR action_parms malloc failed\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(action_parms, 0, sizeof(app_action_parms));
  memcpy(action_parms, arg_p->pvCbData, sizeof(app_action_parms));
  app_action_content = &action_parms->app_action_content;

  {
    xmlNode *response_root_element;

    result = ProcessAppAction(app_action_content);

    create_result = CreateResponseXml(&response_doc, action_parms->comm_id,
                                      action_parms->operation.OpId,
                                      action_parms->message_id,
                                      action_parms->srv_msg_type,
                                      action_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);

      AddOperationResult(response_op_res_node, action_parms->operation.OpId,
                         result, action_parms->operation.OpSetId,
                         action_parms->operation.RecurId,
                         action_parms->srv_op_type);
    }

    {
      if (!FinalizeXMLDoc(response_doc, FALSE))
      {
        log_err("%s ERROR: Could not finalize AppAction XML response\n",
                __FUNCTION__);
        cleanup_data((void*) &action_parms, &response_doc);

        return EVENT_FAILURE;
      }

      log_dbg(
          "%s: AppAction XML Validated - Converting to response char buffer\n",
          __FUNCTION__);

      PRINT_XML_DOC(__FUNCTION__, response_doc);

      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_doc, &data_p, &appactionResponseLen, 1);

      /* We will malloc the memory here, the caller is responsible for freeing it */
      dbg_msg("%s: malloc'ing %d bytes for response char buffer\n",
              __FUNCTION__, appactionResponseLen + 1);
      xmlAppActionResponse = malloc(appactionResponseLen + 1);
      if (xmlAppActionResponse)
      {

        /* Copy the tree to memory buff and delete temporary memory */
        memset(xmlAppActionResponse, 0, appactionResponseLen + 1);

        /* Copy the tree to memory buff and delete temporary memory */
        dbg_msg("%s: Copying converted XML to response char buffer\n",
                __FUNCTION__);
        memcpy(xmlAppActionResponse, (char*) data_p, appactionResponseLen);

        PRINT_XML_DATA("AppActionProcessor", xmlAppActionResponse);

        dbg_notice(
            "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
            __FUNCTION__, appactionResponseLen);

        vhq_result = VHQManagerContactServer(&xmlAppActionResponse,
                                             &appactionResponseLen,
                                             arg_p->event_id,
                                             &action_parms->comm_id,
                                             &action_parms->message_id,
                                             &action_parms->message_id,
                                             action_parms->operation.OpId, TRUE,
                                             TRUE,
                                             FALSE);

        event_result = ConvertVHQResultToEventResult(vhq_result);
      }
      else
      {
        log_err("%s: FAILURE allocating memory for App Action Response\n",
                __FUNCTION__);
      }
      xmlFree(data_p);

      /* Use this to debug memory issues */
      xmlMemoryDump();

    }
  }

  cleanup_data((void*) &action_parms, &response_doc);
  log_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

event_result_t DelFileProcessor(void *arg)
{
  xmlChar *data_p;
  int delfileResponseLen;
  char *xmlDelFileResponse;
  char additional_info[256];
  vhq_result_t create_result;
  xmlDocPtr response_doc = NULL;
  del_file_parms *_del_file_parms;
  vhq_result_t result = VHQ_SUCCESS;
  del_file_content_t *del_file_content;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  _del_file_parms = (del_file_parms*) malloc(sizeof(del_file_parms));
  if (!_del_file_parms)
  {
    log_err("%s: ERROR _del_file_parms malloc failed\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(_del_file_parms, 0, sizeof(del_file_parms));
  memcpy(_del_file_parms, arg_p->pvCbData, sizeof(del_file_parms));
  del_file_content = &_del_file_parms->del_file_content;

  {
    xmlNode *response_root_element;

    memset(additional_info, 0, sizeof(additional_info));
    result = ProcessDelFile(del_file_content, additional_info,
                            sizeof(additional_info));

    create_result = CreateResponseXml(&response_doc, _del_file_parms->comm_id,
                                      _del_file_parms->operation.OpId,
                                      _del_file_parms->message_id,
                                      _del_file_parms->srv_msg_type,
                                      _del_file_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);
      xmlNode *op_result_element = NULL;

      op_result_element = AddOperationResult(response_op_res_node,
                                             _del_file_parms->operation.OpId,
                                             result,
                                             _del_file_parms->operation.OpSetId,
                                             _del_file_parms->operation.RecurId,
                                             _del_file_parms->srv_op_type);

      if ((op_result_element) && (strlen(additional_info)))
      {
        xmlSetProp(op_result_element, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
        BAD_CAST additional_info);
      }

    }

    {
      if (!FinalizeXMLDoc(response_doc, FALSE))
      {
        log_err("%s ERROR: Could not finalize DelFile XML response\n",
                __FUNCTION__);
        cleanup_data((void*) &_del_file_parms, &response_doc);

        return EVENT_FAILURE;
      }

      log_dbg(
          "%s: DelFile XML Validated - Converting to response char buffer\n",
          __FUNCTION__);

      PRINT_XML_DOC(__FUNCTION__, response_doc);

      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_doc, &data_p, &delfileResponseLen, 1);

      /* We will malloc the memory here, the caller is responsible for freeing it */
      dbg_msg("%s: malloc'ing %d bytes for response char buffer\n",
              __FUNCTION__, delfileResponseLen + 1);
      xmlDelFileResponse = malloc(delfileResponseLen + 1);
      if (xmlDelFileResponse)
      {

        /* Copy the tree to memory buff and delete temporary memory */
        memset(xmlDelFileResponse, 0, delfileResponseLen + 1);

        /* Copy the tree to memory buff and delete temporary memory */
        dbg_msg("%s: Copying converted XML to response char buffer\n",
                __FUNCTION__);
        memcpy(xmlDelFileResponse, (char*) data_p, delfileResponseLen);

        PRINT_XML_DATA("DelFileProcessor", xmlDelFileResponse);

        dbg_notice(
            "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
            __FUNCTION__, delfileResponseLen);

        vhq_result = VHQManagerContactServer(&xmlDelFileResponse,
                                             &delfileResponseLen,
                                             arg_p->event_id,
                                             &_del_file_parms->comm_id,
                                             &_del_file_parms->message_id,
                                             &_del_file_parms->message_id,
                                             _del_file_parms->operation.OpId,
                                             TRUE,
                                             TRUE, FALSE);

        event_result = ConvertVHQResultToEventResult(vhq_result);
      }
      else
      {
        log_err("%s: FAILURE allocating memory for Del File Response\n",
                __FUNCTION__);
      }
      xmlFree(data_p);

      /* Use this to debug memory issues */
      xmlMemoryDump();
    }
  }

  cleanup_data((void*) &_del_file_parms, &response_doc);
  log_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

event_result_t GetParamUpdateProcessor(void *arg)
{
  xmlChar *data_p;
  vhq_result_t create_result;
  xmlDocPtr response_doc = NULL;
  int getparamupdateResponseLen;
  char *xmlGetParamUpdateResponse;
  device_event_parms *gparamupdate_parms;
  event_thread_arg *arg_p = (event_thread_arg*) arg;
  event_result_t event_result = EVENT_FAILURE;
  vhq_result_t vhq_result = VHQ_SUCCESS;

  gparamupdate_parms = (device_event_parms*) malloc(sizeof(device_event_parms));
  if (!gparamupdate_parms)
  {
    log_err("%s: ERROR gparamupdate_parms malloc failed\n", __FUNCTION__);
    return EVENT_FAILURE;
  }

  memset(gparamupdate_parms, 0, sizeof(device_event_parms));
  memcpy(gparamupdate_parms, arg_p->pvCbData, sizeof(device_event_parms));

  {
    xmlNode *response_root_element;
    char *param_update_file = NULL;

    dbg_msg(
        "%s: Calling CreateResponseXml(EventSetResponseDoc = 0x%08x, ...)\n",
        __FUNCTION__, &response_doc);
    create_result = CreateResponseXml(&response_doc,
                                      gparamupdate_parms->comm_id,
                                      gparamupdate_parms->operation.OpId,
                                      gparamupdate_parms->message_id,
                                      gparamupdate_parms->srv_msg_type,
                                      gparamupdate_parms->srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(response_doc);

    if (create_result == VHQ_SUCCESS)
    {
      xmlNode *response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);
      xmlNode *op_result_element;
      xmlNode *datasets_node;
      xmlNode *param_update_dataset_node;
      xmlNode *param_update_dataset_content_node;
      bool create_op_result_node = TRUE;

      op_result_element = GetNodeByName(response_op_res_node,
      VHQ_XML_OP_RES_OP_RES_ID_TAG);
      while (op_result_element != NULL)
      {
        uint32 opSetId = 0;

        dbg_msg(
            "%s: Checking if OpResult @ 0x%08x matches OpSetId %d, OpId %s\n",
            __FUNCTION__, op_result_element,
            gparamupdate_parms->operation.OpSetId,
            gparamupdate_parms->operation.OpId);
        if (GetIntAttrFromNode(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                               (int*) &opSetId))
        {
          if (opSetId == gparamupdate_parms->operation.OpSetId)
          {
            char *opId = NULL;

            dbg_msg("%s: OpSetId %d matches - checking OpId\n", __FUNCTION__,
                    gparamupdate_parms->operation.OpSetId);
            opId = GetStrAttrFromNode(op_result_element,
            VHQ_XML_OPERATION_ID_TAG);

            if (opId && (strcmp(opId, gparamupdate_parms->operation.OpId) == 0))
            {
              dbg_notice(
                  "%s: Found result for OpSetId %d, OpId %s - modifying it\n",
                  __FUNCTION__, gparamupdate_parms->operation.OpSetId,
                  gparamupdate_parms->operation.OpId);
              create_op_result_node = FALSE;
              if (opId)
              {
                xmlFree(opId);
              }
              break;
            }
            if (opId)
            {
              xmlFree(opId);
            }
          }
        }
        dbg_notice(
            "%s: OpResult @ 0x%08x does not match - moving to next OpResult\n",
            __FUNCTION__, op_result_element);
        op_result_element = GetNodeByName(op_result_element->next,
        VHQ_XML_OP_RES_OP_RES_ID_TAG);
      }

      if (create_op_result_node)
      {
        op_result_element = xmlNewChild(response_op_res_node, NULL,
        BAD_CAST VHQ_XML_OP_RES_OP_RES_ID_TAG,
                                        NULL);

        addIntegerAttr(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                       gparamupdate_parms->operation.OpSetId);
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_OPERATION_ID_TAG,
        BAD_CAST gparamupdate_parms->operation.OpId);
      }

      datasets_node = xmlNewChild(op_result_element, NULL,
      BAD_CAST VHQ_XML_DATASETS_TAG,
                                  NULL);

      dbg_msg(
          "%s: response_root_element = 0x%08x, response_op_res_node = 0x%08x, datasets_node = 0x%08x\n",
          __FUNCTION__, response_root_element, response_op_res_node,
          datasets_node);

      param_update_dataset_node = xmlNewChild(datasets_node, NULL,
      BAD_CAST VHQ_XML_DATASET_TAG,
                                              NULL);
      xmlNewProp(param_update_dataset_node,
      BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
                 BAD_CAST VHQ_XML_DATASET_PARAMETER_UPDATES);
      xmlNewProp(param_update_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
      BAD_CAST VHQ_XML_VERSION_NUM);
      param_update_dataset_content_node = xmlNewChild(
          param_update_dataset_node, NULL, BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
          NULL);

      /* Go through each parameter update file and add it */
      ResetParamUpdateFileSearch();
      do
      {
        param_update_file = GetNextParamUpdateFile(param_update_file);
        if (param_update_file)
        {
          int param_update_counter;
          int param_update_count_read;
          time_t parameter_update_time;
          int file_version = 0;
          size_t tot_param_update_size = 0;
          char *param_buffer = NULL;

          file_version = ReqParamUploadRead(&param_buffer, param_update_file,
                                            &param_update_count_read,
                                            &parameter_update_time,
                                            &tot_param_update_size);
          if (param_buffer)
          {
            if (file_version == VHQ_PARAM_UPDATE_FILE_V1)
            {
              app_param_update_v1 *param_update_ptr_v1;

              param_update_ptr_v1 = (app_param_update_v1*) param_buffer;

              for (param_update_counter = 0;
                  param_update_counter < param_update_count_read;
                  param_update_counter++)
              {
                xmlNodePtr param_update_node = NULL;
                param_update_node = xmlNewChild(param_update_dataset_content_node, NULL, BAD_CAST VHQ_XML_DATASET_PARAMETER_UPDATES, NULL);
                if (param_update_node)
                {
                  dbg_msg(
                      "%s: App = %s, container = %s, name = %s, value = %s, hash =%s \n",
                      __FUNCTION__,
                      param_update_ptr_v1[param_update_counter].app,
                      param_update_ptr_v1[param_update_counter].container,
                      param_update_ptr_v1[param_update_counter].name,
                      param_update_ptr_v1[param_update_counter].value,
                      param_update_ptr_v1[param_update_counter].hash);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION,
                      BAD_CAST param_update_ptr_v1[param_update_counter].app);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_PARAM_UPDATE_CONTAINER,
                      BAD_CAST param_update_ptr_v1[param_update_counter]
                          .container);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                      BAD_CAST param_update_ptr_v1[param_update_counter].name);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                      BAD_CAST param_update_ptr_v1[param_update_counter].value);
                  addTimeAttr(param_update_node,
                              VHQ_XML_EVENT_PARAM_UPDATE_DATETIME,
                              parameter_update_time, TRUE);
                  xmlSetProp(param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO, BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
                  xmlSetProp(
                      param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                      BAD_CAST param_update_ptr_v1[param_update_counter].hash);
                }
              }
            }
            else if (file_version == VHQ_PARAM_UPDATE_FILE_CURRENT_VERSION)
            {
              app_param_update *param_update_ptr;

              param_update_ptr = (app_param_update*) param_buffer;

              for (param_update_counter = 0;
                  param_update_counter < param_update_count_read;
                  param_update_counter++)
              {
                xmlNodePtr param_update_node = NULL;
                param_update_node = xmlNewChild(param_update_dataset_content_node, NULL, BAD_CAST VHQ_XML_DATASET_PARAMETER_UPDATES, NULL);
                if (param_update_node)
                {
                  dbg_msg(
                      "%s: App = %s, version = %s, container = %s, name = %s, value = %s, hash =%s \n",
                      __FUNCTION__, param_update_ptr[param_update_counter].app,
                      param_update_ptr[param_update_counter].version,
                      param_update_ptr[param_update_counter].container,
                      param_update_ptr[param_update_counter].name,
                      param_update_ptr[param_update_counter].value,
                      param_update_ptr[param_update_counter].hash);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION,
                      BAD_CAST param_update_ptr[param_update_counter].app);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION_VERSION,
                      BAD_CAST param_update_ptr[param_update_counter].version);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_PARAM_UPDATE_CONTAINER,
                      BAD_CAST param_update_ptr[param_update_counter].container);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                      BAD_CAST param_update_ptr[param_update_counter].name);
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                      BAD_CAST param_update_ptr[param_update_counter].value);
                  addTimeAttr(param_update_node, VHQ_XML_EVENT_PARAM_UPDATE_DATETIME,
                              parameter_update_time, TRUE);
                  xmlSetProp(param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO, BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
                  xmlSetProp(
                      param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                      BAD_CAST param_update_ptr[param_update_counter].hash);
                }
              }
            }
            else
              log_err("%s Invalid Param File Version \n", __FUNCTION__);
            /* ADKTMS-2897: Don't remove this file until after VHQManagerContactServer() call so that we take advantage of retry mechanism */
            //remove(param_update_file);
            free(param_buffer);
          }
        }
      }
      while (param_update_file != NULL);
      ResetParamUpdateFileSearch();

      AddOperationResult(response_op_res_node,
                         gparamupdate_parms->operation.OpId, VHQ_SUCCESS,
                         gparamupdate_parms->operation.OpSetId,
                         gparamupdate_parms->operation.RecurId,
                         gparamupdate_parms->srv_op_type);
    }

    {
      if (!FinalizeXMLDoc(response_doc, FALSE))
      {
        log_err("%s ERROR: Could not finalize GetData XML response\n",
                __FUNCTION__);
        cleanup_data((void*) &gparamupdate_parms, &response_doc);

        return EVENT_FAILURE;
      }

      dbg_msg(
          "%s: GetData XML Validated - Converting to response char buffer\n",
          __FUNCTION__);

      PRINT_XML_DOC(__FUNCTION__, response_doc);

      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_doc, &data_p, &getparamupdateResponseLen,
                             1);

      /* We will malloc the memory here, the caller is responsible for freeing it */
      dbg_msg("%s: malloc'ing %d bytes for response char buffer\n",
              __FUNCTION__, getparamupdateResponseLen + 1);
      xmlGetParamUpdateResponse = malloc(getparamupdateResponseLen + 1);

      if (xmlGetParamUpdateResponse)
      {
        /* Copy the tree to memory buff and delete temporary memory */
        memset(xmlGetParamUpdateResponse, 0, getparamupdateResponseLen + 1);

        /* Copy the tree to memory buff and delete temporary memory */
        dbg_msg("%s: Copying converted XML to response char buffer\n",
                __FUNCTION__);
        memcpy(xmlGetParamUpdateResponse, (char*) data_p,
               getparamupdateResponseLen);

        PRINT_XML_DATA("GetParamUpdateProcessor", xmlGetParamUpdateResponse);

        dbg_msg(
            "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
            __FUNCTION__, getparamupdateResponseLen);

        vhq_result = VHQManagerContactServer(&xmlGetParamUpdateResponse,
                                             &getparamupdateResponseLen,
                                             arg_p->event_id,
                                             &gparamupdate_parms->comm_id,
                                             &gparamupdate_parms->message_id,
                                             &gparamupdate_parms->message_id,
                                             gparamupdate_parms->operation.OpId,
                                             TRUE,
                                             TRUE, FALSE);

        event_result = ConvertVHQResultToEventResult(vhq_result);
      }
      else
      {
        log_err("%s: FAILURE allocating GetData Response buffer\n",
                __FUNCTION__);
      }

      xmlFree(data_p);

      /* Use this to debug memory issues */
      xmlMemoryDump();
    }

    /* ADKTMS-2897: remove the parameter update files only after everything is saved */
    do
    {
      param_update_file = GetNextParamUpdateFile(param_update_file);
      if (param_update_file)
      {
        /* ADKTMS-2897: Don't remove this file until after VHQManagerContactServer() call so that we take advantage of retry mechanism */
        remove(param_update_file);
      }
    }
    while (param_update_file != NULL);
    ResetParamUpdateFileSearch();
  }

  cleanup_data((void*) &gparamupdate_parms, &response_doc);
  dbg_notice("%s: returning %d - pid = %d\n", __FUNCTION__, event_result,
             getpid());

  return event_result;
}

vhq_result_t ScheduleDownload(operation_t *operation,
                              download_file_content_t *dl_file_content,
                              int comm_id, int message_id,
                              srv_msg_type_t srv_msg_type,
                              srv_op_type_t srv_op_type,
                              operation_set_event_t **op_set_events,
                              uint32 *num_events_extracted)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR;
  launch_downloader_parms downloader_parms;

  {
    log_dbg("%s: extracting download events\n", __FUNCTION__);

    /* We can't leave any pointers to the stack so copy the structures to
     the storage in dl_file_event array */
    memcpy(&downloader_parms.operation, operation, sizeof(operation_t));
    memcpy(&downloader_parms.dl_file_content, dl_file_content,
           sizeof(download_file_content_t));

    /* Setup the rest of parameters */
    downloader_parms.comm_id = comm_id;
    downloader_parms.message_id = message_id;
    downloader_parms.srv_msg_type = srv_msg_type;
    downloader_parms.srv_op_type = srv_op_type;

    /* Setup all downloads for just DOWNLOAD mask - INSTALL and expiration masks will be handled at
     OperationSet level in VHQXmlProcessManagementPlan() */
    downloader_parms.dl_file_content.DownloadType |=
        DL_FILE_DL_TYPE_DOWNLOAD_MASK;

    dbg_notice(
        "%s: Setting up op_set_events[%d] - &op_set_events[0] = 0x%08x, &dl_file_content = 0x%08x\n",
        __FUNCTION__, (*num_events_extracted), (*op_set_events),
        &downloader_parms.dl_file_content.DownloadType);
    (*op_set_events)[*num_events_extracted].opCbType = cbLaunchDownloader;
    (*op_set_events)[*num_events_extracted].opData = malloc(
        sizeof(downloader_parms));
    if ((*op_set_events)[*num_events_extracted].opData)
    {
      memcpy((*op_set_events)[*num_events_extracted].opData, &downloader_parms,
             sizeof(downloader_parms));
      (*op_set_events)[*num_events_extracted].opDataSize =
          sizeof(downloader_parms);

      dbg_msg(
          "%s: Setup op_set_events[%d] - opData = 0x%08x, opDataSize = %d\n",
          __FUNCTION__, (*num_events_extracted),
          (*op_set_events)[(*num_events_extracted)].opData,
          (*op_set_events)[(*num_events_extracted)].opDataSize);

      (*num_events_extracted)++;
      ret_val = VHQ_SUCCESS;
    }
    else
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  }
  dbg_notice("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


static vhq_result_t ProcessDownloadFileOp(operation_t *operation,
                                          xmlNode *operation_element,
                                          int comm_id, int message_id,
                                          srv_msg_type_t srv_msg_type,
                                          srv_op_type_t srv_op_type,
                                          operation_set_event_t **op_set_events,
                                          uint32 *num_events_extracted)
{
  vhq_result_t ret_val;
  xmlNode *dl_content_node;
  xmlNode *dl_parms_node;
  xmlNode *dl_content_contentparms_node;
  char *dl_file_method;
  char *dl_hash_algo;
  char *dl_type;
  char *install_action;
  char *suppress_reboot;
  char *compression;
  char *receiver;
  struct tm local_time;
  download_file_content_t dl_file_content;

  char *target_device;
  char *target_device_identifier;
  char *target_device_model;
  time_t loc_apply_on_date = 0;
  time_t loc_expiration_date = 0;

  /* Clear the dl file content */
  memset(&dl_file_content, 0, sizeof(download_file_content_t));

  /* Get the DL content node */
  dl_content_node = GetNodeByName(operation_element,
  VHQ_XML_DL_OPERATION_CONTENT);

  /* Get the method */
  dl_file_method = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_METHOD);
  if (!dl_file_method
      || !ConvertDownloadFileMethod(dl_file_method, &dl_file_content.Method))
  {
    log_warn("%s: Could not get download method\n", __FUNCTION__);
  }
  xmlFree(dl_file_method);

  /* Get the filename */
  CopyStrAttrFromNode(dl_file_content.FileName, dl_content_node,
                      VHQ_XML_DL_OPERATION_FILENAME);

  /* Get the file size */
  GetIntAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_FILESIZE,
                     (int*) &dl_file_content.FileSize);

  /* Get Post Install Delay */
  GetIntAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_POST_INSTALL_DELAY,
                     (int*) &dl_file_content.DelayInstallTime);

  /* Get the download type */
  dl_type = GetStrAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_DL_TYPE);
  if (!dl_type
      || !ConvertDownloadFileDownloadType(dl_type,
                                          &dl_file_content.DownloadType))
  {
    log_warn("%s: Could not get Download Type\n", __FUNCTION__);
  }
  xmlFree(dl_type);

  if (dl_file_content.DownloadType == DL_FILE_DL_TYPE_PARAMETER)
  {
    char *dl_param_type;

    /* Get the DB parameter type if applicable */
    dl_param_type = GetStrAttrFromNode(
        dl_content_node, VHQ_XML_DL_OPERATION_DL_TYPE_PARAMETER_DB_TYPE);
    if (!dl_param_type
        || !ConvertDownloadFileParameterType(dl_param_type,
                                             &dl_file_content.DownloadType))
    {
      log_warn("%s: Could not get Parameter DB Type\n", __FUNCTION__);
    }
    xmlFree(dl_param_type);
  }

  /* Get the hash algorithm */
  dl_hash_algo = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_DL_HASH_ALGO);
  if (!dl_hash_algo
      || !ConvertDownloadHashAlgo(dl_hash_algo, &dl_file_content.HashAlgo))
  {
    log_warn("%s: Could not get Download hash algorithm\n", __FUNCTION__);
  }
  xmlFree(dl_hash_algo);

  CopyStrAttrFromNode(dl_file_content.Hash, dl_content_node,
                      VHQ_XML_DL_OPERATION_DL_HASH);

  /* Get the schedule */
  GetIntAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_APPLY_ON_DATE,
                     (int*) &loc_apply_on_date);
  dl_file_content.ApplyOnDate = ConvertServerLocalTimeToDeviceUTC(
      "ApplyOnDate", loc_apply_on_date);

  GetIntAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_EXPIRATION_DATE,
                     (int*) &loc_expiration_date);
  dl_file_content.ExpirationDate = ConvertServerLocalTimeToDeviceUTC(
      "ExpirationDate", loc_expiration_date);

  /* Get the install action */
  install_action = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_INSTALL_ACTION);
  if (!install_action
      || !ConvertActionType(install_action, &dl_file_content.PostInstallAction))
  {
    log_warn("%s: Could not get Install Action\n", __FUNCTION__);
  }
  xmlFree(install_action);

  /* Get the suppress reboot option (if exists) */
  suppress_reboot = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_SUPRESS_REBOOT);
  if (!suppress_reboot
      || !ConvertTrueFalse(suppress_reboot, &dl_file_content.SuppressReboot))
  {
    log_warn("%s: Could not get Suppress Reboot option\n", __FUNCTION__);
  }
  xmlFree(suppress_reboot);

  /* Get the compression option (if exists) */
  compression = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_COMPRESSION);
  if (!compression
      || !ConvertTrueFalse(compression, &dl_file_content.CompressionEnabled))
  {
    log_warn("%s: Could not get Compression option\n", __FUNCTION__);
  }
  xmlFree(compression);

  /* Get the Receiver */
  log_dbg("%s: Getting receiver\n", __FUNCTION__);
  receiver = GetStrAttrFromNode(dl_content_node, VHQ_XML_DL_OPERATION_RECEIVER);
  if (receiver)
  {
    dbg_msg("%s: Copying receiver %s to l_file_content.Receiver\n",
            __FUNCTION__, receiver);
    strcpy(dl_file_content.Receiver, receiver);
  }
  else
  {
    log_warn("%s: Could not get Receiver option\n", __FUNCTION__);
  }
  xmlFree(receiver);

  /* Get the target device */
  dbg_msg("%s: Getting target device\n", __FUNCTION__);
  target_device = GetStrAttrFromNode(dl_content_node,
  VHQ_XML_DL_OPERATION_TARGET_DEVICE);
  if (target_device)
  {
    dbg_msg("%s: Copying target device %s to l_file_content.TargetDevice\n",
            __FUNCTION__, target_device);
    strcpy(dl_file_content.TargetDevice, target_device);
    dl_file_content.DownloadType = DL_FILE_DL_TYPE_PERIPHERAL;
  }
  else
  {
    log_warn("%s: Could not get target device option\n", __FUNCTION__);
  }
  xmlFree(target_device);

  /* Get the target device identifier*/
  dbg_msg("%s: Getting target device identifier\n", __FUNCTION__);
  target_device_identifier = GetStrAttrFromNode(
      dl_content_node, VHQ_XML_DL_OPERATION_TARGET_DEVICE_IDENTIFIER);
  if (target_device_identifier)
  {
    dbg_msg(
        "%s: Copying target device identifier %s to l_file_content.target_device_identifier\n",
        __FUNCTION__, target_device_identifier);
    strcpy(dl_file_content.TargetDeviceIdentifier, target_device_identifier);
    dl_file_content.DownloadType = DL_FILE_DL_TYPE_PERIPHERAL;
  }
  else
  {
    log_warn("%s: Could not get target device identifier option\n",
             __FUNCTION__);
  }
  xmlFree(target_device_identifier);

  /* Get the target device model*/
  dbg_msg("%s: Getting target device model\n", __FUNCTION__);
  target_device_model = GetStrAttrFromNode(
      dl_content_node, VHQ_XML_DL_OPERATION_TARGET_DEVICE_MODEL);
  if (target_device_model)
  {
    dbg_msg(
        "%s: Copying target device model %s to l_file_content.target_device_model\n",
        __FUNCTION__, target_device_model);
    strcpy(dl_file_content.TargetDeviceModel, target_device_model);
  }
  else
  {
    log_warn("%s: Could not get target device modle option\n", __FUNCTION__);
  }
  xmlFree(target_device_model);

  dbg_msg("%s: Getting download parameters node\n", __FUNCTION__);
  dl_parms_node = GetNodeByName(dl_content_node, VHQ_XML_DL_OPERATION_DL_PARMS);

  if (dl_parms_node)
  {
    /* Get the User */
    CopyStrAttrFromNode(dl_file_content.User, dl_parms_node,
                        VHQ_XML_DL_OPERATION_USER);
    /* Get the PW */
    CopyStrAttrFromNode(dl_file_content.PW, dl_parms_node,
                        VHQ_XML_DL_OPERATION_PW);
    /* Get the URL */
    CopyStrAttrFromNode(dl_file_content.URL, dl_parms_node,
                        VHQ_XML_DL_OPERATION_URL);
  }
  else
    log_warn("%s: Could not get FTP Parameters node\n", __FUNCTION__);

  dbg_msg("%s: DownloadType = %d\n", __FUNCTION__,
          dl_file_content.DownloadType);
  switch (dl_file_content.DownloadType)
  {
    case DL_FILE_DL_TYPE_CONTENT:
    case DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED:
    case DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED:

      dl_content_contentparms_node = GetNodeByName(
          dl_content_node, VHQ_XML_DL_OPERATION_CONTENT_PARMS);
      if (dl_content_contentparms_node)
      {
        /* Get the user name */
        CopyStrAttrFromNode(dl_file_content.username,
                            dl_content_contentparms_node,
                            VHQ_XML_DL_OPERATION_USER);
      }
      else
        dbg_msg("%s: Could not get Content Parameters node\n", __FUNCTION__);
      break;

    default:
      /* Don't need to do anything special for other files */
      break;
  }

  log_dbg("\n\n%s: DL Operation Method = %d\n", __FUNCTION__,
          dl_file_content.Method);
  log_dbg("\tDL Operation Filename = %s\n", dl_file_content.FileName);
  log_dbg("\tDL Operation FileSize = %d\n", dl_file_content.FileSize);
  log_dbg("\tDL Operation Download Type = %d\n", dl_file_content.DownloadType);
  dbg_msg("\tDL Operation Hash Algorithm = %d\n", dl_file_content.HashAlgo);
  dbg_msg("\tDL Operation Hash = %s\n", dl_file_content.Hash);
  dbg_msg("\tDL Operation User = %s\n", dl_file_content.User);
  dbg_msg("\tDL Operation Password = %s\n", dl_file_content.PW);
  log_dbg("\tDL Operation URL = %s\n", dl_file_content.URL);

  if (linux_localtime(&dl_file_content.ApplyOnDate, &local_time))
    dbg_notice("\tDL Operation ApplyOnDate = %s\n", tmtoa(&local_time));
  else
    dbg_notice("\tDL Operation ApplyOnDate = %d\n",
               dl_file_content.ApplyOnDate);
  if (linux_localtime(&dl_file_content.ExpirationDate, &local_time))
    dbg_notice("\tDL Operation ExpirationDate = %s\n", tmtoa(&local_time));
  else
    dbg_notice("\tDL Operation ExpirationDate = %d\n",
               dl_file_content.ExpirationDate);
  log_dbg("\tDL Operation Install Action = %d\n",
          dl_file_content.PostInstallAction);

  operation->Content = (void*) &dl_file_content;

  ret_val = ScheduleDownload(operation, &dl_file_content, comm_id, message_id,
                             srv_msg_type, srv_op_type, op_set_events,
                             num_events_extracted);

  return ret_val;
}

static vhq_result_t SetServerCert(operation_t *operation,
                                  xmlNode *operation_element, int comm_id,
                                  int message_id, srv_msg_type_t srv_msg_type,
                                  srv_op_type_t srv_op_type,
                                  operation_set_event_t **op_set_events,
                                  uint32 *num_events_extracted)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_SERV_CERT_ERROR;

  UNUSED(comm_id);
  UNUSED(message_id);
  UNUSED(srv_op_type);
  UNUSED(srv_msg_type);
  UNUSED(op_set_events);
  UNUSED(operation_element);
  UNUSED(num_events_extracted);

  operation->Content = NULL;

  if (operation->OpTime != 0)
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
  else
  {
    dbg_msg("%s: Setting Server Certificate\n", __FUNCTION__);

  }

  return ret_val;
}

#define KMAILMAN_VERSION_STR        "kmailman_Version"
#define KMAILMAN_VERSION_UNKNOWN_STR    "Kmailman version unknown "


static vhq_result_t GatherQueryData(get_data_mask_t GetDataMask,
                                    get_data_subquery_mask_t SubQueryMask,
                                    char *AppName, bool include_param,
                                    xmlDocPtr status_report_doc, char *op_id,
                                    uint32 operation_set_id, uint32 param_mask)
{
  xmlNode *response_root_element = xmlDocGetRootElement(status_report_doc);
  xmlNode *response_op_res_node = GetNodeByName(response_root_element,
  VHQ_XML_CONTENT_OP_RES_TAG);
  xmlNode *op_result_element;
  xmlNode *datasets_node;
  bool create_op_result_node = TRUE;
  vhq_result_t ret_val = VHQ_SUCCESS;
  vhq_result_t param_res = VHQ_SUCCESS;

  op_result_element = GetNodeByName(response_op_res_node,
  VHQ_XML_OP_RES_OP_RES_ID_TAG);
  while (op_result_element != NULL)
  {
    uint32 opSetId = 0;

    dbg_msg("%s: Checking if OpResult @ 0x%08x matches OpSetId %d, OpId %s\n",
            __FUNCTION__, op_result_element, operation_set_id, op_id);
    if (GetIntAttrFromNode(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                           (int*) &opSetId))
    {
      if (opSetId == operation_set_id)
      {
        char *opId = NULL;

        dbg_msg("%s: OpSetId %d matches - checking OpId\n", __FUNCTION__,
                operation_set_id);
        opId = GetStrAttrFromNode(op_result_element, VHQ_XML_OPERATION_ID_TAG);

        if (strcmp(opId, op_id) == 0)
        {
          dbg_msg("%s: Found result for OpSetId %d, OpId %s - modifying it\n",
                  __FUNCTION__, operation_set_id, op_id);
          create_op_result_node = FALSE;
          if (opId)
          {
            xmlFree(opId);
          }
          break;
        }
        if (opId)
        {
          xmlFree(opId);
        }
      }
    }
    dbg_warn("%s: OpResult @ 0x%08x does not match - moving to next OpResult\n",
             __FUNCTION__, op_result_element);
    op_result_element = GetNodeByName(op_result_element->next,
    VHQ_XML_OP_RES_OP_RES_ID_TAG);
  }

  if (create_op_result_node)
  {
    op_result_element = xmlNewChild(response_op_res_node, NULL,
    BAD_CAST VHQ_XML_OP_RES_OP_RES_ID_TAG,
                                    NULL);

    addIntegerAttr(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                   operation_set_id);
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_OPERATION_ID_TAG,
    BAD_CAST op_id);
  }

  datasets_node = xmlNewChild(op_result_element, NULL,
  BAD_CAST VHQ_XML_DATASETS_TAG,
                              NULL);

  dbg_msg(
      "%s: response_root_element = 0x%08x, response_op_res_node = 0x%08x, datasets_node = 0x%08x\n",
      __FUNCTION__, response_root_element, response_op_res_node, datasets_node);

  if (GetDataMask & GET_DATA_MASK_APPLICATIONS)
  {
    xmlNode *app_dataset_node;
    xmlNode *app_content_node;
    xmlNode *reg_app_dataset_node;
    xmlNode *reg_app_content_node;

    char SCN[MAX_SCN_LEN];
    int num_apps = 0;

    LIST_HEAD(Applications);
    list_head_t *app_list_node;
    app_data_t *app_list_obj;

    log_dbg("%s: Collecting Application Data\n", __FUNCTION__);

    num_apps = 0;
    if (!GetApplications(&Applications) || list_is_empty(&Applications))
    {
      CleanApplicationsList(&Applications);
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_APPLICATIONS_ERROR;
    }

    /* Add CP Applications to the list */
    GetCPApplications(&Applications);

    app_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                   NULL);
    xmlNewProp(app_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_GET_DATA_APPS);
    xmlNewProp(app_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);

    /* Put the SCN in the data if it exists */
    memset(SCN, 0, sizeof(SCN));
    VHQGetParameterString(PARAM_SW_COLLECTION_NUM, SCN, sizeof(SCN));
    if (strlen(SCN))
      xmlNewProp(app_dataset_node,
      BAD_CAST VHQ_XML_GET_DATA_APPS_SW_COLLECTION_NUM,
                 BAD_CAST SCN);

    app_content_node = xmlNewChild(app_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                   NULL);

    list_for_each(app_list_node, &Applications)
    {
      bool params_added;
      xmlNode *app_node;
      num_apps++;

      app_list_obj = list_entry(app_list_node, app_data_t, list);

      /* Clear params_added */
      params_added = FALSE;

      /* If we are working with subqueries, we can skip apps if an AppName is specified and does not match current app */
      if ((SubQueryMask & GET_DATA_SUBQUERY_MASK_APP_PARAMS)
          && (strlen(AppName)))
      {
        if ((strcmp(AppName, "*") != 0)
            && (strcmp(AppName, app_list_obj->name) != 0))
        {
          dbg_notice(
              "%s: Skipping %s since its parameters were not requested (AppName = %s)\n",
              __FUNCTION__, app_list_obj->name, AppName ? AppName : "NULL");
          continue;
        }
      }

      app_node = xmlNewChild(app_content_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_APP_TYPE_APP,
                             NULL);

      xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
      BAD_CAST app_list_obj->name);
      xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_VERSION,
      BAD_CAST app_list_obj->version);
      xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
      BAD_CAST ConvertAppTypeToString(app_list_obj->type));

      if (strlen(app_list_obj->location))
        xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_LOCATION,
        BAD_CAST app_list_obj->location);
      if (strlen(app_list_obj->bundlename))
        xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_NAME,
        BAD_CAST app_list_obj->bundlename);
      if (strlen(app_list_obj->bundleversion))
        xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_VERSION,
        BAD_CAST app_list_obj->bundleversion);
      if (strlen(app_list_obj->bundleoption))
        xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_OPTION,
        BAD_CAST app_list_obj->bundleoption);

      if (app_list_obj->type == APP_TYPE_CP_APPLICATION)
      {
        xmlNewProp(
            app_node,
            BAD_CAST VHQ_XML_GET_DATA_APP_ACTIVATION_STATUS,
            BAD_CAST ConvertAppActivationStatusToString(
                app_list_obj->activation_status));
      }

      /* Mitch (9-8-2016) - ADKTMS-1263: The agent had a defect where it is running out of heap space because the MFT
       Files on the device had > 500 AppFiles listed in them.  Since the server side of VHQ is not doing anything with
       the AppFile list, we will just not send this information for now.  When we do start sending this information for
       VX devices, we need to revisit our memory usage and preferably move to dynamic heap */

      /* Add VHQ.ini file to VHQ param file list */
      if (strcmp(app_list_obj->name, VHQ_APP_NAME) == 0)
      {
        unsigned char sha1_digest[SHA_DIGEST_LENGTH];
        char CfgFileName[512];
        param_file_reporting_t reporting_type = GetParamFileReportingType();

        params_added = TRUE;

        if (reporting_type != PARAM_FILE_REPORTING_NONE)
        {
          if (reporting_type == PARAM_FILE_REPORTING_ALL)
          {
            int num_instances;
            char **InstanceList;

            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading instances to make sure %s is valid instance\n", __FUNCTION__, fileInstance);
            num_instances = 0;
            GetServerInstanceList(&InstanceList, &num_instances);
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read %d instances - InstanceList = 0x%08x\n", __FUNCTION__, num_instances, InstanceList);
            if (InstanceList)
            {
              int instance_counter;

              for (instance_counter = 0; instance_counter < num_instances;
                  instance_counter++)
              {
                memset(CfgFileName, 0, sizeof(CfgFileName));
                GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                       InstanceList[instance_counter]);

                dbg_msg("%s: Calling SHA1(%s, 0x%08x) for instance %s\n",
                        __FUNCTION__, CfgFileName, sha1_digest,
                        InstanceList[instance_counter]);
                memset(sha1_digest, 0, sizeof(sha1_digest));
                if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
                {
                  char sha1_hex_str[128];
                  xmlNode *param_file_node = xmlNewChild(
                      app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                      NULL);

                  dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                          __FUNCTION__);
                  memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                  if (ConvertBinaryToHexString((char*) sha1_digest,
                  SHA_DIGEST_LENGTH,
                                               sha1_hex_str,
                                               sizeof(sha1_hex_str)))
                  {
                    char VHQPrivCfgFileName[512];

                    memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
                    GetFileNameForInstance(VHQPrivCfgFileName,
                                           (char*) VHQ_PRIVATE_CFG_FILENAME,
                                           InstanceList[instance_counter]);

                    dbg_msg("%s: Adding VHQ.ini param file to %s app\n",
                            __FUNCTION__, VHQ_APP_NAME);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                               BAD_CAST VHQPrivCfgFileName);
                    xmlNewProp(
                        param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                        BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                    xmlNewProp(
                        param_file_node,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                               BAD_CAST sha1_hex_str);
                  }
                }
#ifdef ADK_SUPPORT
                memset(CfgFileName, 0, sizeof(CfgFileName));
                GetFileNameForInstance(CfgFileName,
                                       (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                       InstanceList[instance_counter]);

                dbg_msg("%s: Exporting %s from Info SVC DB\n", __FUNCTION__,
                        CfgFileName);
                if (ExportVHQInfoSvcDB(InstanceList[instance_counter],
                                       CfgFileName))
                {
                  dbg_msg("%s: Calling SHA1(%s, 0x%08x) for instance %s\n",
                          __FUNCTION__, CfgFileName, sha1_digest,
                          InstanceList[instance_counter]);
                  memset(sha1_digest, 0, sizeof(sha1_digest));
                  if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
                  {
                    char sha1_hex_str[128];
                    xmlNode *param_file_node = xmlNewChild(app_node, NULL,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                                                           NULL);

                    dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                            __FUNCTION__);
                    memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                    if (ConvertBinaryToHexString((char*) sha1_digest,
                    SHA_DIGEST_LENGTH,
                                                 sha1_hex_str,
                                                 sizeof(sha1_hex_str)))
                    {

                      dbg_msg(
                          "%s: Adding VHQ_InfoSvc_CFG.xml param file to %s app\n",
                          __FUNCTION__, VHQ_APP_NAME);
                      xmlNewProp(param_file_node,
                      BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                                 BAD_CAST os_basename(CfgFileName));
                      xmlNewProp(
                          param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                          BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                      xmlNewProp(
                          param_file_node,
                          BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                          BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                      xmlNewProp(param_file_node,
                      BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                                 BAD_CAST sha1_hex_str);
                    }
                  }
                }
#endif
              }
            }

            CleanupServerInstanceList(&InstanceList, num_instances);
          }
          else
          {

            if ((reporting_type == PARAM_FILE_REPORTING_PRIMARY)
                || (reporting_type == PARAM_FILE_REPORTING_CURRENT_PLUS)
                || ((reporting_type == PARAM_FILE_REPORTING_CURRENT)
                    && (strcmp(GetCurrentInstance(),
                    PRIMARY_SERVER_INSTANCE_NAME) == 0)))
            {
              /* Add the primary instance for Primary and Current+ reporting type.  If reporting type
               is Current and Primary is current instance, report it also */
              memset(CfgFileName, 0, sizeof(CfgFileName));
              GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
              PRIMARY_SERVER_INSTANCE_NAME);

              dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                      CfgFileName, sha1_digest);
              memset(sha1_digest, 0, sizeof(sha1_digest));
              if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
              {
                char sha1_hex_str[128];
                xmlNode *param_file_node = xmlNewChild(
                    app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                    NULL);

                dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                        __FUNCTION__);
                memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                if (ConvertBinaryToHexString((char*) sha1_digest,
                SHA_DIGEST_LENGTH,
                                             sha1_hex_str,
                                             sizeof(sha1_hex_str)))
                {
                  char VHQPrivCfgFileName[512];

                  memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
                  GetFileNameForInstance(VHQPrivCfgFileName,
                                         (char*) VHQ_PRIVATE_CFG_FILENAME,
                                         PRIMARY_SERVER_INSTANCE_NAME);

                  dbg_msg("%s: Adding VHQ.ini param file to %s app\n",
                          __FUNCTION__, VHQ_APP_NAME);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                             BAD_CAST VHQPrivCfgFileName);
                  xmlNewProp(
                      param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                  xmlNewProp(
                      param_file_node,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                             BAD_CAST sha1_hex_str);
                }
              }
            }

            if ((reporting_type == PARAM_FILE_REPORTING_CURRENT)
                || (reporting_type == PARAM_FILE_REPORTING_CURRENT_PLUS))
            {
              if (strcmp(GetCurrentInstance(), PRIMARY_SERVER_INSTANCE_NAME)
                  != 0)
              {
                /* Add the current instance INI file if we are not talking to primary instance and reporting type
                 is Current or Current+ */
                memset(CfgFileName, 0, sizeof(CfgFileName));
                GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                       GetCurrentInstance());

                dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                        CfgFileName, sha1_digest);
                memset(sha1_digest, 0, sizeof(sha1_digest));
                if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
                {
                  char sha1_hex_str[128];
                  xmlNode *param_file_node = xmlNewChild(
                      app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                      NULL);

                  dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                          __FUNCTION__);
                  memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                  if (ConvertBinaryToHexString((char*) sha1_digest,
                  SHA_DIGEST_LENGTH,
                                               sha1_hex_str,
                                               sizeof(sha1_hex_str)))
                  {
                    char VHQPrivCfgFileName[512];

                    memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
                    GetFileNameForInstance(VHQPrivCfgFileName,
                                           (char*) VHQ_PRIVATE_CFG_FILENAME,
                                           GetCurrentInstance());

                    dbg_msg("%s: Adding VHQ.ini param file to %s app\n",
                            __FUNCTION__, VHQ_APP_NAME);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                               BAD_CAST VHQPrivCfgFileName);
                    xmlNewProp(
                        param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                        BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                    xmlNewProp(
                        param_file_node,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                               BAD_CAST sha1_hex_str);
                  }
                }
              }
            }

            if (reporting_type == PARAM_FILE_REPORTING_PRIMARY_OVERRIDE)
            {
              /* Add the current instance INI file but set its name to primary instance */
              memset(CfgFileName, 0, sizeof(CfgFileName));
              GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                     GetCurrentInstance());

              dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                      CfgFileName, sha1_digest);
              memset(sha1_digest, 0, sizeof(sha1_digest));
              if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
              {
                char sha1_hex_str[128];
                xmlNode *param_file_node = xmlNewChild(
                    app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                    NULL);

                dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                        __FUNCTION__);
                memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                if (ConvertBinaryToHexString((char*) sha1_digest,
                SHA_DIGEST_LENGTH,
                                             sha1_hex_str,
                                             sizeof(sha1_hex_str)))
                {
                  char VHQPrivCfgFileName[512];

                  memset(VHQPrivCfgFileName, 0, sizeof(VHQPrivCfgFileName));
                  GetFileNameForInstance(VHQPrivCfgFileName,
                                         (char*) VHQ_PRIVATE_CFG_FILENAME,
                                         PRIMARY_SERVER_INSTANCE_NAME);

                  dbg_msg("%s: Adding VHQ.ini param file to %s app\n",
                          __FUNCTION__, VHQ_APP_NAME);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                             BAD_CAST VHQPrivCfgFileName);
                  xmlNewProp(
                      param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                  xmlNewProp(
                      param_file_node,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                             BAD_CAST sha1_hex_str);
                }
              }
            }
          }

#ifdef ADK_SUPPORT
          if (reporting_type == PARAM_FILE_REPORTING_CURRENT_CONTAINERS)
          {
            int num_containers = 0;
            app_param_files_t container_hashes[10];

            if (tms_generateAgentContainerHashes(
                VHQ_VPDX_FILE, VHQDataAccessCB, container_hashes,
                (sizeof(container_hashes) / sizeof(app_param_files_t)),
                &num_containers) == TMS_STATUS_SUCCESS)
            {
              int container_index;

              dbg_msg(
                  "%s: tms_generateAgentContainerHashes() generated %d container hashes - adding to response\n",
                  __FUNCTION__, num_containers);
              for (container_index = 0; container_index < num_containers;
                  container_index++)
              {
                xmlNode *param_file_node = xmlNewChild(
                    app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                    NULL);

                dbg_msg("%s: adding container '%s' to response - hash = %s\n",
                        __FUNCTION__, container_hashes[container_index].name,
                        container_hashes[container_index].hash_value);
                xmlNewProp(param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                BAD_CAST container_hashes[container_index].name);
                xmlNewProp(param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_VALUES_TYPE);
                xmlNewProp(
                    param_file_node,
                    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                    BAD_CAST container_hashes[container_index].hash_algo);
                xmlNewProp(
                    param_file_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                    BAD_CAST container_hashes[container_index].hash_value);
              }
            }
          }
          if ((reporting_type == PARAM_FILE_REPORTING_PRIMARY)
              || (reporting_type == PARAM_FILE_REPORTING_CURRENT_PLUS)
              || ((reporting_type == PARAM_FILE_REPORTING_CURRENT)
                  && (strcmp(GetCurrentInstance(), PRIMARY_SERVER_INSTANCE_NAME)
                      == 0)))
          {
            /* Add the primary instance for Primary and Current+ reporting type.  If reporting type
             is Current and Primary is current instance, report it also */
            memset(CfgFileName, 0, sizeof(CfgFileName));
            GetFileNameForInstance(CfgFileName,
                                   (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                   PRIMARY_SERVER_INSTANCE_NAME);

            dbg_msg("%s: Exporting %s from Info SVC DB\n", __FUNCTION__,
                    CfgFileName);
            if (ExportVHQInfoSvcDB(PRIMARY_SERVER_INSTANCE_NAME, CfgFileName))
            {
              dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                      CfgFileName, sha1_digest);
              memset(sha1_digest, 0, sizeof(sha1_digest));
              if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
              {
                char sha1_hex_str[128];
                xmlNode *param_file_node = xmlNewChild(
                    app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                    NULL);

                dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                        __FUNCTION__);
                memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                if (ConvertBinaryToHexString((char*) sha1_digest,
                SHA_DIGEST_LENGTH,
                                             sha1_hex_str,
                                             sizeof(sha1_hex_str)))
                {

                  dbg_msg(
                      "%s: Adding VHQ_InfoSvc_CFG.xml param file to %s app\n",
                      __FUNCTION__, VHQ_APP_NAME);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                             BAD_CAST os_basename(CfgFileName));
                  xmlNewProp(
                      param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                  xmlNewProp(
                      param_file_node,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                             BAD_CAST sha1_hex_str);
                }
              }
            }
          }

          if ((reporting_type == PARAM_FILE_REPORTING_CURRENT)
              || (reporting_type == PARAM_FILE_REPORTING_CURRENT_PLUS))
          {
            if (strcmp(GetCurrentInstance(), PRIMARY_SERVER_INSTANCE_NAME) != 0)
            {
              /* Add the current instance Info-Svc file if we are not talking to primary instance and reporting type
               is Current or Current+ */
              memset(CfgFileName, 0, sizeof(CfgFileName));
              GetFileNameForInstance(CfgFileName,
                                     (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                     GetCurrentInstance());

              if (ExportVHQInfoSvcDB(GetCurrentInstance(), CfgFileName))
              {
                dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                        CfgFileName, sha1_digest);
                memset(sha1_digest, 0, sizeof(sha1_digest));
                if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
                {
                  char sha1_hex_str[128];
                  xmlNode *param_file_node = xmlNewChild(
                      app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                      NULL);

                  dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                          __FUNCTION__);
                  memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                  if (ConvertBinaryToHexString((char*) sha1_digest,
                  SHA_DIGEST_LENGTH,
                                               sha1_hex_str,
                                               sizeof(sha1_hex_str)))
                  {

                    dbg_msg(
                        "%s: Adding VHQ_InfoSvc_CFG.xml param file to %s app\n",
                        __FUNCTION__, VHQ_APP_NAME);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                               BAD_CAST os_basename(CfgFileName));
                    xmlNewProp(
                        param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                        BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                    xmlNewProp(
                        param_file_node,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                        BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                    xmlNewProp(param_file_node,
                    BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                               BAD_CAST sha1_hex_str);
                  }
                }
              }
            }
          }

          if (reporting_type == PARAM_FILE_REPORTING_PRIMARY_OVERRIDE)
          {
            /* Add the current instance Info-Svc file but set its name to primary instance */
            memset(CfgFileName, 0, sizeof(CfgFileName));
            GetFileNameForInstance(CfgFileName,
                                   (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                   PRIMARY_SERVER_INSTANCE_NAME);

            if (ExportVHQInfoSvcDB(GetCurrentInstance(), CfgFileName))
            {
              dbg_msg("%s: Calling SHA1(%s, 0x%08x)\n", __FUNCTION__,
                      CfgFileName, sha1_digest);
              memset(sha1_digest, 0, sizeof(sha1_digest));
              if (VHQSecurityGenSha1(CfgFileName, sha1_digest))
              {
                char sha1_hex_str[128];
                xmlNode *param_file_node = xmlNewChild(
                    app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE,
                    NULL);

                dbg_msg("%s: Converting BINARY SHA1 digest to ASCII\n",
                        __FUNCTION__);
                memset(sha1_hex_str, 0, sizeof(sha1_hex_str));
                if (ConvertBinaryToHexString((char*) sha1_digest,
                SHA_DIGEST_LENGTH,
                                             sha1_hex_str,
                                             sizeof(sha1_hex_str)))
                {

                  dbg_msg(
                      "%s: Adding VHQ_InfoSvc_CFG.xml param file to %s app\n",
                      __FUNCTION__, VHQ_APP_NAME);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
                             BAD_CAST os_basename(CfgFileName));
                  xmlNewProp(
                      param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                      BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
                  xmlNewProp(
                      param_file_node,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA1);
                  xmlNewProp(param_file_node,
                  BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                             BAD_CAST sha1_hex_str);
                }
              }
            }
          }
#endif
        }

      }
      else if (AppRegistered(app_list_obj->name))
      {
        bool value_based = FALSE;
        uint8 num_param_files;
        app_param_files_t ParamFileList[MAX_PARAM_FILES];

        log_notice("%s: Bundle %s is registered - retrieving parameter files\n",
                   __FUNCTION__, app_list_obj->name);
        memset(ParamFileList, 0, sizeof(ParamFileList));
        if (GetAppParameterFilesHash(app_list_obj->name, ParamFileList,
        MAX_PARAM_FILES,
                                     &num_param_files, &value_based))
        {
          dbg_msg("%s: Get App Parameter hash \n", __FUNCTION__);
          int pfile_index;

          for (pfile_index = 0; pfile_index < num_param_files; pfile_index++)
          {
            xmlNode *param_file_node = xmlNewChild(
                app_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE, NULL);
            if (param_file_node)
            {
              params_added = TRUE;
              dbg_notice("%s: Adding %s param file to %s app\n", __FUNCTION__,
                         ParamFileList[pfile_index].name, app_list_obj->name);
              xmlNewProp(param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
              BAD_CAST ParamFileList[pfile_index].name);
              if (value_based)
                xmlNewProp(param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_VALUES_TYPE);
              else
                xmlNewProp(param_file_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
                BAD_CAST VHQ_XML_GET_DATA_APP_PARAM_FILE_FILE_TYPE);
              xmlNewProp(param_file_node,
              BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
                         BAD_CAST ParamFileList[pfile_index].hash_algo);
              xmlNewProp(param_file_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
              BAD_CAST ParamFileList[pfile_index].hash_value);
            }
          }
        }
      }

      /* If we are working with subqueries, we may need to delete the node we just entered */
      if ((SubQueryMask & GET_DATA_SUBQUERY_MASK_APP_PARAMS)
          && (GetDataMask != (0xFFFFFFFF & ~(GET_DATA_MASK_APP_PROFILE))))
      {
        /* If no parameters were added, remove the app node since we are only sending parameters */
        if (!params_added)
        {
          log_warn("%s: Removing %s info since no parameters are included\n",
                   __FUNCTION__, app_list_obj->name);
          xmlUnlinkNode(app_node);
          xmlFreeNode(app_node);
        }
        else
        {
          if (strlen(AppName) && (strcmp(AppName, "*") != 0)
              && (strcmp(AppName, app_list_obj->name) != 0))
          {
            log_dbg(
                "%s: Removing %s info since its parameters were not requested (AppName = %s)\n",
                __FUNCTION__, app_list_obj->name, AppName ? AppName : "NULL");
            xmlUnlinkNode(app_node);
            xmlFreeNode(app_node);
          }
        }
      }

    }

    /* Cleanup */
    CleanApplicationsList(&Applications);
    log_dbg("%s: Collected %d applications\n", __FUNCTION__, num_apps);

    {
      int index = 0;
      char AppName[128] = { 0 };
      char AppVersion[32] = { 0 };
      char CustomType[32] = { 0 };
      char AddInfo[32] = { 0 };
      xmlNode *app_node;
      tms_apptype_t AppType = TMS_APP_TYPE_DEFAULT;

      reg_app_dataset_node = xmlNewChild(datasets_node, NULL,
      BAD_CAST VHQ_XML_DATASET_TAG,
                                         NULL);
      xmlNewProp(reg_app_dataset_node,
      BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
                 BAD_CAST VHQ_XML_GET_DATA_REG_APPS);
      xmlNewProp(reg_app_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
      BAD_CAST VHQ_XML_VERSION_NUM);
      reg_app_content_node = xmlNewChild(reg_app_dataset_node, NULL,
      BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                         NULL);

      for (index = 0; index < TMS_MAX_REGISTERED_APPS; index++)
      {
        memset(AppName, 0, sizeof(AppName));
        GetRegisteredAppName(index, AppName);

        if (strlen(AppName))
        {
          memset(AppVersion, 0, sizeof(AppVersion));
          GetRegisteredAppVersion(index, AppVersion);

          AppType = TMS_APP_TYPE_DEFAULT;
          AppType = GetReceiverType(index);

          if (strlen(AppVersion) && AppType != TMS_APP_TYPE_DEFAULT)
          {
            dbg_msg("%s App Name is %s \n", __FUNCTION__, AppName);
            dbg_msg("%s App Version is %s \n", __FUNCTION__, AppVersion);
            dbg_msg("%s App Type is %s \n", __FUNCTION__,
                    ConvertAppTypeToString(AppType));

            app_node = xmlNewChild(reg_app_content_node, NULL,
            BAD_CAST VHQ_XML_GET_DATA_APP_TYPE_APP,
                                   NULL);
            xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_NAME,
            BAD_CAST AppName);
            xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_VERSION,
            BAD_CAST AppVersion);
            xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE,
            BAD_CAST ConvertAppTypeToString(AppType));

            memset(CustomType, 0, sizeof(CustomType));
            GetRegisteredAppCustomType(index, CustomType);

            if (strlen(CustomType))
            {
              dbg_msg("%s App CustomType is %s \n", __FUNCTION__, CustomType);
              xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_CUSTOMTYPE,
              BAD_CAST CustomType);
            }

            memset(AddInfo, 0, sizeof(AddInfo));
            GetRegisteredAppAddInfo(index, AddInfo);

            if (strlen(AddInfo))
            {
              dbg_msg("%s App AddInfo is %s \n", __FUNCTION__, AddInfo);
              xmlNewProp(app_node, BAD_CAST VHQ_XML_GET_DATA_APP_ADDINFO,
              BAD_CAST AddInfo);
            }
          }
        }
      }
    }
  }

  if (include_param)
  {
    int i;
    char AppName[128] = { 0 };

    xmlNode *param_dataset_node;
    xmlNode *param_details_node;

    dbg_msg("%s: Include Params is SET \n", __FUNCTION__);
    param_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                     NULL);
    xmlNewProp(param_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_DATASET_PARAMETER_UPDATES);
    xmlNewProp(param_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    param_details_node = xmlNewChild(param_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                     NULL);

    for (i = 0; i < TMS_MAX_REGISTERED_APPS; i++)
    {
      memset(AppName, 0, sizeof(AppName));
      GetRegisteredAppName(i, AppName);
      if (strlen(AppName))
      {
        xmlNode *param_update_node;
        app_param_update_info_t param_update_info;
        int param_update_counter;
        int param_update_count_read;
        app_param_update *param_update_ptr = NULL;
        char paramFilename[256];
        memset(&param_update_info, 0, sizeof(app_param_update_info_t));

        dbg_msg("%s: Get App Parameter file \n", __FUNCTION__);
        if (GetAppParameters(AppName, &param_update_info))
        {
          int tot_param_size = sizeof(app_param_update)
              * param_update_info.param_update_count;
          param_update_ptr = (app_param_update*) malloc(tot_param_size);
          if (param_update_ptr)
          {
            ProcessAppGeneratedParameterUpdate(
                AppName, param_update_info.param_update_list_filename,
                param_update_info.param_update_count,
                param_update_info.param_update_time, TRUE, paramFilename);
            ReadParamUpdateFile(param_update_ptr, tot_param_size,
                                &param_update_count_read, NULL, paramFilename);
            if (param_update_count_read != param_update_info.param_update_count)
            {
              dbg_warn(
                  "%s: param_update_count (%d) does not match count read from file (%d) - using file count\n",
                  __FUNCTION__, param_update_info.param_update_count,
                  param_update_count_read);
            }

            for (param_update_counter = 0;
                param_update_counter < param_update_count_read;
                param_update_counter++)
            {
              param_update_node = xmlNewChild(param_details_node, NULL,
              BAD_CAST VHQ_XML_DATASET_PARAMETER_UPDATES,
                                              NULL);
              if (param_update_node)
              {
                dbg_msg(
                    "%s: App = %s, version = %s, container = %s, name = %s, value = %s, hash =%s \n",
                    __FUNCTION__, param_update_ptr[param_update_counter].app,
                    param_update_ptr[param_update_counter].version,
                    param_update_ptr[param_update_counter].container,
                    param_update_ptr[param_update_counter].name,
                    param_update_ptr[param_update_counter].value,
                    param_update_ptr[param_update_counter].hash);
                xmlSetProp(param_update_node,
                BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION,
                           BAD_CAST param_update_ptr[param_update_counter].app);
                if (strlen(param_update_ptr[param_update_counter].version))
                  xmlSetProp(
                      param_update_node,
                      BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION_VERSION,
                      BAD_CAST param_update_ptr[param_update_counter].version);
                xmlSetProp(
                    param_update_node,
                    BAD_CAST VHQ_XML_EVENT_PARAM_UPDATE_CONTAINER,
                    BAD_CAST param_update_ptr[param_update_counter].container);
                xmlSetProp(
                    param_update_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                    BAD_CAST param_update_ptr[param_update_counter].name);
                xmlSetProp(
                    param_update_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                    BAD_CAST param_update_ptr[param_update_counter].value);
                addTimeAttr(param_update_node,
                VHQ_XML_EVENT_PARAM_UPDATE_DATETIME,
                            param_update_info.param_update_time, TRUE);
                xmlSetProp(
                    param_update_node,
                    BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO,
                    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
                xmlSetProp(
                    param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                    BAD_CAST param_update_ptr[param_update_counter].hash);
              }
            }
          }

          if (param_update_ptr)
          {
            free(param_update_ptr);
            param_update_ptr = NULL;
          }
        }
        else
        {
          dbg_msg("%s: Error in getting application parameters from app %s \n",
                  __FUNCTION__, AppName);
          param_res = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_APP_PARAM_ERROR;
          break;
        }
      }
      else
        break;
    }
  }

  if (GetDataMask & GET_DATA_MASK_DEVICE_PROFILE)
  {
    uint32 mwStart, mwEnd;
    char IPAddress[IP_ADDRESS_LEN];
    char MACAddress[MAC_ADDRESS_LEN] = {0};
    char MaintenanceDataBuf[64];
    xmlNode *dev_profile_dataset_node;
    xmlNode *dev_profile_content_node;
    xmlNode *dev_profile_node;
    xmlNode *dev_profile_ports_node;
    xmlNode *dev_profile_submodules_node;
    /* make static to save device profile values needed before clearing */
    static device_profile_t device_profile = { .lastcomm_media_used =
        COM_NO_INTERFACE, .network_config = COM_NO_INTERFACE };
    ux_submodule_info_t ux100_info;
    ux_submodule_info_t ux400_info;
    char FileName[512];
#ifdef Mx2
    unsigned long size;
    struct MIBInfo_s *mibi;
    PI_printer_info_st printer_info;
#endif
#if defined(Mx2)
    char vsr_cert_name[64];
    uint32 vsr_crt_name_len = 0;
#endif
#ifdef _VOS2
    char dtname[64];
    char pTID[PI_UNIT_ID_SIZE_NULL_TERM];
#endif
    char manufacture_date[16];

    log_dbg("%s: Querying Device Profile\n", __FUNCTION__);

    if (!GetDeviceProfile(&device_profile))
    {
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_DEV_PROFILE_ERROR;
    }

    dev_profile_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                           NULL);
    xmlNewProp(dev_profile_dataset_node,
    BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
               BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE);
    xmlNewProp(dev_profile_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    dev_profile_content_node = xmlNewChild(dev_profile_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                           NULL);

    dev_profile_node = xmlNewChild(dev_profile_content_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE,
                                   NULL);

#if defined(Mx2)
    if (GetVSR_sponsor_sn_name(&vsr_crt_name_len, vsr_cert_name,
                               sizeof(vsr_cert_name) - 1))
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_VSR_SPONSOR,
                 BAD_CAST vsr_cert_name);
#endif

    if (getManfactureDate(manufacture_date, sizeof(manufacture_date)))
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_MANUFACTUREDATE,
                 BAD_CAST manufacture_date);

    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_OS_VERSION,
               BAD_CAST device_profile.os_version);

    xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_OS_NAME,
    BAD_CAST device_profile.os_name);

    if (isVRKv2())
      xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_VRK_VERSION, BAD_CAST "2.0");

#ifdef _VOS2
    if (getDTname(dtname, sizeof(dtname)))
      xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_DTNAME,
      BAD_CAST dtname);

    if (platforminfo_get(PI_UNIT_ID, pTID, sizeof(pTID), &size) == PI_OK)
    {
      pTID[sizeof(pTID) - 1] = '\0';
      xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_PTID,
      BAD_CAST pTID);
    }
#endif

    if (TRUE == device_profile.coincell_battery.present)
    {
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_BLT_IN_BAT,
                 BAD_CAST VHQ_XML_TRUE);
      addIntegerAttr(dev_profile_node, VHQ_XML_GET_DATA_DEV_PROFILE_BAT_LEVEL,
                     device_profile.coincell_battery.voltage);
    }
    else
    {
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_BLT_IN_BAT,
                 BAD_CAST VHQ_XML_FALSE);
      addIntegerAttr(dev_profile_node, VHQ_XML_GET_DATA_DEV_PROFILE_BAT_LEVEL,
                     0);
    }

    addTimeAttr(dev_profile_node, VHQ_XML_GET_DATA_DEV_PROFILE_CLK_SETTING,
                device_profile.clock_setting, TRUE);
    xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
    BAD_CAST device_profile.model_number);

    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_NETWORK_CFG,
               BAD_CAST get_ComType_name(device_profile.network_config));

    if (device_profile.bat_condition_time)
      addTimeAttr(dev_profile_node, VHQ_XML_BAT_COND_DATE,
                  device_profile.bat_condition_time, FALSE);
    xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
    BAD_CAST device_profile.ser_num);

    addTimeAttr(dev_profile_node, VHQ_XML_GET_DATA_DEV_PROFILE_LAST_BOOT_DATE,
                device_profile.last_boot_time, TRUE);

    /* Add the Stylus Version */
    addIntegerAttr(dev_profile_node, VHQ_XML_GET_DATA_DEV_PROFILE_STYLUS_VER,
                   device_profile.stylus_version);

    /* Add the GUI Manager Version */
    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_GUI_MGR_VER,
               BAD_CAST device_profile.gui_mgr_version);

    /* Add the security policy */
    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_SECURITY_POLICY,
               BAD_CAST device_profile.security_policy);

    /* Add IP Address attribute */
    GetIPAddress(IPAddress, sizeof(IPAddress));
    xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_IP_ADDRESS_TAG,
    BAD_CAST IPAddress);

    /* Add MAC Address attribute */
    GetMACAddress(MACAddress, sizeof(MACAddress));
    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_MAC_ADDRESS,
               BAD_CAST MACAddress);

#if (!SUPPORT_1_02_XSD)
    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_VHQ_VERSION,
               BAD_CAST device_profile.vhq_version);
#endif

    /* Add Last Comm Media Used if not empty string, optional field */
    if (device_profile.lastcomm_media_used != COM_NO_INTERFACE)
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_LAST_COMM_MEDIA_USED,
                 BAD_CAST get_ComType_name(device_profile.lastcomm_media_used));

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) SRV_PUB_KEY_CERTFILE,
                           GetCurrentInstance());
    addTimeAttr(dev_profile_node,
    VHQ_XML_GET_DATA_DEV_PROFILE_SRV_PUB_KEY_CERT_EXPIRY,
                GetCertExpiration(FileName), FALSE);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) SRV_SSL_CERTFILE,
                           GetCurrentInstance());
    addTimeAttr(dev_profile_node,
    VHQ_XML_GET_DATA_DEV_PROFILE_SRV_SSL_CERT_EXPIRY,
                GetCertExpiration(FileName), FALSE);

    memset(FileName, 0, sizeof(FileName));
    GetFileNameForInstance(FileName, (char*) SRV_FTPS_CERTFILE,
                           GetCurrentInstance());
    addTimeAttr(dev_profile_node,
    VHQ_XML_GET_DATA_DEV_PROFILE_SRV_FTP_CERT_EXPIRY,
                GetCertExpiration(FileName), FALSE);
    {
      /*
       * ADKTMS-909:
       */
      char integer_str[8];

      /* Add Maintenance Window Info */
      mwStart = mwEnd = 0;
      VHQGetParameterUint32(PARAM_MAINTENANCE_START, &mwStart, BASE_10);
      sprintf(integer_str, "%04d", mwStart);
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_MAINT_START,
                 BAD_CAST integer_str);
      VHQGetParameterUint32(PARAM_MAINTENANCE_END, &mwEnd, BASE_10);
      sprintf(integer_str, "%04d", mwEnd);
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_MAINT_END,
                 BAD_CAST integer_str);
    }

    VHQGetParameterString(PARAM_MAINTENANCE_DAYS, MaintenanceDataBuf,
                          sizeof(MaintenanceDataBuf));
    xmlSetProp(dev_profile_node,
    BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_MAINT_DAYS,
               BAD_CAST MaintenanceDataBuf);

#ifdef Mx2
    /* Add the SOC revision for V/OS */
    mibi = sysinfo_MIB();
    if (strlen(mibi->chipRevision))
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_SOC_REV,
                 BAD_CAST mibi->chipRevision);

    if ((strstr(device_profile.model_number, "UX3") != NULL)
        || (strstr(device_profile.model_number, "UX1") != NULL)
        || (strstr(device_profile.model_number, "UX4") != NULL))
    {
      dbg_msg("%s: Setting up ARSTriggered\n", __FUNCTION__);
      if (security_serviceSwitch(SERVICE_SWITCH_READ) == 1)
      {
        xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_ARS_TRIGGERED,
        BAD_CAST VHQ_XML_TRUE);
      }
      else
      {
        xmlSetProp(dev_profile_node, BAD_CAST VHQ_XML_GET_DATA_ARS_TRIGGERED,
        BAD_CAST VHQ_XML_FALSE);
      }
    }

    dev_profile_submodules_node = NULL;

    /* Add the UX 100 SubDevice if it exists */
    dbg_msg("%s: Getting UX100 info\n", __FUNCTION__);
    getUx100Info(&ux100_info);
    dbg_msg("%s: Getting UX400 info\n", __FUNCTION__);
    getUx400Info(&ux400_info);
    if ((ux100_info.present) || (ux400_info.present))
    {
      dev_profile_submodules_node = xmlNewChild(
          dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_SUBDEVICES, NULL);

      /* Add the UX100 information */
      if (ux100_info.present)
      {
        xmlNode *subdevice_node;
        char subdevice_name[64 + 1];

        subdevice_node = xmlNewChild(dev_profile_submodules_node, NULL,
        BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE,
                                     NULL);

        if (strlen(ux100_info.model_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
          BAD_CAST ux100_info.model_number);
        else
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
          BAD_CAST "UnknownModelNum");

        if (strlen(ux100_info.serial_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
          BAD_CAST ux100_info.serial_number);
        else
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
          BAD_CAST "UnknownSN");

        if (strlen(ux100_info.part_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
          BAD_CAST ux400_info.part_number);

        snprintf(
            subdevice_name,
            sizeof(subdevice_name),
            "%s_%s",
            strlen(ux100_info.model_number) ?
                ux100_info.model_number : "UnknownModel",
            strlen(ux100_info.serial_number) ?
                ux100_info.serial_number : "UnknownSN");
        xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE_NAME,
        BAD_CAST subdevice_name);

        xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
        BAD_CAST ux100_info.fw_version);
        xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_HW_VERSION,
        BAD_CAST ux100_info.hw_version);
        if (ux100_info.infoGetRemSwStatus)
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_ARS_TRIGGERED,
          BAD_CAST VHQ_XML_TRUE);
        else
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_ARS_TRIGGERED,
          BAD_CAST VHQ_XML_FALSE);
#if 0
        if (strlen(ux100_info.app_data.name) || strlen(ux100_info.app_data.version) ||
          strlen(ux100_info.app_data.bundlename) || strlen(ux100_info.app_data.bundleversion))
        {
          xmlNode* application_node;

          application_node = xmlNewChild(subdevice_node, NULL, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE_APP, NULL);

          xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_NAME, BAD_CAST ux100_info.app_data.name);
          xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_VERSION, BAD_CAST ux100_info.app_data.version);
          xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_TYPE, BAD_CAST ConvertAppTypeToString(ux100_info.app_data.type));
          if (strlen(ux100_info.app_data.bundlename))
            xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_NAME, BAD_CAST ux100_info.app_data.bundlename);
          if (strlen(ux100_info.app_data.bundleversion))
            xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_VERSION, BAD_CAST ux100_info.app_data.bundleversion);
          if (strlen(ux100_info.app_data.bundleoption))
            xmlNewProp(application_node, BAD_CAST VHQ_XML_GET_DATA_APP_BUNDLE_OPTION, BAD_CAST ux100_info.app_data.bundleoption);
        }
#endif
      }

      /* Add the UX400 information */
      if (ux400_info.present)
      {
        xmlNode *subdevice_node;
        char subdevice_name[64 + 1];

        subdevice_node = xmlNewChild(dev_profile_submodules_node, NULL,
        BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE,
                                     NULL);

        if (strlen(ux400_info.serial_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
          BAD_CAST ux400_info.model_number);
        else
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
          BAD_CAST "UnknownModelNum");

        if (strlen(ux400_info.serial_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
          BAD_CAST ux400_info.serial_number);
        else
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
          BAD_CAST "UnknownSN");

        if (strlen(ux400_info.part_number))
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
          BAD_CAST ux400_info.part_number);

        snprintf(
            subdevice_name,
            sizeof(subdevice_name),
            "%s_%s",
            strlen(ux400_info.model_number) ?
                ux400_info.model_number : "UnknownModel",
            strlen(ux400_info.serial_number) ?
                ux400_info.serial_number : "UnknownSN");
        xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE_NAME,
        BAD_CAST subdevice_name);

        if ((strlen(ux400_info.fw_version)) || (strlen(ux400_info.hw_version)))
        {
          if (strlen(ux400_info.fw_version))
            xmlSetProp(subdevice_node,
            BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
                       BAD_CAST ux400_info.fw_version);
          if (strlen(ux400_info.hw_version))
            xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_HW_VERSION,
            BAD_CAST ux400_info.hw_version);
        }
      }
    }

    {
      usb_peripheral_info_t usb_periph_info;

      /* Check for USB connected peripheral devices and add any that exist */
      getUSBPeripheralInfo(&usb_periph_info);
      if (usb_periph_info.num_peripheral_devices)
      {
        int periph_device_count;

        /* Create submodules node if we haven't already */
        if (dev_profile_submodules_node == NULL)
          dev_profile_submodules_node = xmlNewChild(
              dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_SUBDEVICES,
              NULL);

        for (periph_device_count = 0;
            periph_device_count < usb_periph_info.num_peripheral_devices;
            periph_device_count++)
        {
          xmlNode *subdevice_node;
          char subdevice_name[64 + 1];

          subdevice_node = xmlNewChild(dev_profile_submodules_node, NULL,
          BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE,
                                       NULL);

          if (strlen(
              usb_periph_info.peripheral_devices[periph_device_count]
                  .model_number))
            xmlSetProp(
                subdevice_node,
                BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
                BAD_CAST usb_periph_info.peripheral_devices[periph_device_count]
                    .model_number);
          else
            xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
            BAD_CAST VHQ_XML_UNKNOWN);

          if (strlen(
              usb_periph_info.peripheral_devices[periph_device_count]
                  .serial_number))
            xmlSetProp(
                subdevice_node,
                BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
                BAD_CAST usb_periph_info.peripheral_devices[periph_device_count]
                    .serial_number);
          else
            xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
            BAD_CAST "N/A");

          snprintf(
              subdevice_name,
              sizeof(subdevice_name),
              "%s_%s",
              strlen(
                  usb_periph_info.peripheral_devices[periph_device_count]
                      .model_number) ?
                  usb_periph_info.peripheral_devices[periph_device_count]
                      .model_number :
                  "UnknownModel",
              strlen(
                  usb_periph_info.peripheral_devices[periph_device_count]
                      .serial_number) ?
                  usb_periph_info.peripheral_devices[periph_device_count]
                      .serial_number :
                  "UnknownSN");
          xmlSetProp(subdevice_node, BAD_CAST VHQ_XML_GET_DATA_SUBDEVICE_NAME,
          BAD_CAST subdevice_name);

          if (strlen(
              usb_periph_info.peripheral_devices[periph_device_count]
                  .part_number))
            xmlSetProp(
                subdevice_node,
                BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
                BAD_CAST usb_periph_info.peripheral_devices[periph_device_count]
                    .part_number);
        }
      }
    }

#ifndef _VOS2
        /* Add IO module info */
        {
            xmlNode* dev_profile_iomodules_node;
            struct version sysinfo_ver;
            struct platform_s platform_info;
            xmlNode* io_moudle_node;
            char temp_str[16];

            memset(&platform_info, 0, sizeof(struct platform_s));
            sysinfo_ver = sysinfo_getVersion();
            platform_info = sysinfo_platform();

            /* Add the port XML responses  */
            dev_profile_iomodules_node = xmlNewChild(dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_IOMODULES_NODE, NULL);

            sprintf(temp_str,"0x%08X",platform_info.ioModule.features);

            dbg_msg( "%s: Info from sysinfo_platform API V:%d.%d.%d\n", \
                __FUNCTION__,  sysinfo_ver.major, sysinfo_ver.minor, sysinfo_ver.maint);
            dbg_msg( "%s: IOMODULE - feature:0x%08X Serial number:%s multiport: %d\n", \
                __FUNCTION__, platform_info.ioModule.features, platform_info.ioModule.serialNumber,platform_info.cable.multiPort);

            io_moudle_node = xmlNewChild(dev_profile_iomodules_node, NULL, BAD_CAST VHQ_XML_GET_DATA_IOMODULE_NODE, NULL);

            xmlNewProp(io_moudle_node, BAD_CAST VHQ_XML_GET_DATA_IOMODULE_FEATURE, BAD_CAST temp_str);

            if (strlen(platform_info.ioModule.serialNumber))
                xmlNewProp(io_moudle_node, BAD_CAST VHQ_XML_GET_DATA_IOMODULE_SERIAL, BAD_CAST platform_info.ioModule.serialNumber);

            if(platform_info.cable.multiPort)
                xmlNewProp(io_moudle_node, BAD_CAST VHQ_XML_GET_DATA_IOMODULE_MUTIPORT_CONNECTED, BAD_CAST VHQ_XML_TRUE);
            else
                xmlNewProp(io_moudle_node, BAD_CAST VHQ_XML_GET_DATA_IOMODULE_MUTIPORT_CONNECTED, BAD_CAST VHQ_XML_FALSE);

        }
#endif // #ifndef _VOS2
#endif // #ifdef Mx2

    /* Add the port XML responses  */
    dev_profile_ports_node = xmlNewChild(dev_profile_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_PORTS,
                                         NULL);

    /* Add COM1 if it exists */
    if (device_profile.com1_status & PORT_STATUS_PRESENT)
    {
      xmlNode *com1_port_node = xmlNewChild(dev_profile_ports_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
                                            NULL);

      xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT);
      xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT_COM1_NAME);

      if (device_profile.com1_status & PORT_STATUS_CONNECTED)
        xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_FALSE);

      if (device_profile.com1_status & COM_PORT_RS_485)
        xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_FALSE);

      xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST NULL);

      xmlNewProp(com1_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
      BAD_CAST VHQ_XML_FALSE);
    }

    /* Add COM2 if it exists */
    if (device_profile.com2_status & PORT_STATUS_PRESENT)
    {
      xmlNode *com2_port_node = xmlNewChild(dev_profile_ports_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
                                            NULL);

      xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT);
      xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT_COM2_NAME);

      if (device_profile.com2_status & PORT_STATUS_CONNECTED)
        xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_FALSE);

      if (device_profile.com2_status & COM_PORT_RS_485)
        xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_FALSE);

      xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST NULL);

      xmlNewProp(com2_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
      BAD_CAST VHQ_XML_FALSE);
    }

    /* Add COM3 if it exists */
    if (device_profile.com3_status & PORT_STATUS_PRESENT)
    {
      xmlNode *com3_port_node = xmlNewChild(dev_profile_ports_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
                                            NULL);

      xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT);
      xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
      BAD_CAST VHQ_XML_GET_DATA_COM_PORT_COM3_NAME);

      xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
      BAD_CAST VHQ_XML_UNKNOWN);

      if (device_profile.com3_status & COM_PORT_RS_485)
        xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_FALSE);

      xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST device_profile.com3_fw_version);

      xmlNewProp(com3_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
      BAD_CAST VHQ_XML_FALSE);
    }

    /* Add Ethernet if it exists */
    if (device_profile.eth_status & PORT_STATUS_PRESENT)
    {
      xmlNode *eth_port_node = xmlNewChild(dev_profile_ports_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
                                           NULL);

      xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
      BAD_CAST VHQ_XML_GET_DATA_ETH_PORT);
      xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
      BAD_CAST VHQ_XML_GET_DATA_ETH_PORT_NAME);

      if (device_profile.eth_status & PORT_STATUS_CONNECTED)
        xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_TRUE);
      else
        xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_FALSE);

      xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
      BAD_CAST VHQ_XML_FALSE);

      xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST NULL);

      xmlNewProp(eth_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
      BAD_CAST VHQ_XML_FALSE);

    }

    /* Add USB Host if it exists */
    if (device_profile.usb_status & PORT_STATUS_PRESENT)
    {
      if (device_profile.usb_status & USB_PORT_CLIENT)
      {
        xmlNode *usb_port_node = xmlNewChild(
            dev_profile_ports_node, NULL, BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
            NULL);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
        BAD_CAST VHQ_XML_GET_DATA_USB_PORT);
        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
        BAD_CAST VHQ_XML_GET_DATA_USB_PORT_DEVICE);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_UNKNOWN);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_FALSE);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
        BAD_CAST NULL);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
        BAD_CAST VHQ_XML_TRUE);
      }
      if (device_profile.usb_status & USB_PORT_HOST)
      {
        xmlNode *usb_port_node = xmlNewChild(
            dev_profile_ports_node, NULL, BAD_CAST VHQ_XML_GET_DATA_PORT_NODE,
            NULL);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_TYPE,
        BAD_CAST VHQ_XML_GET_DATA_USB_PORT);
        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_NAME,
        BAD_CAST VHQ_XML_GET_DATA_USB_PORT_HOST);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_PORT_CONNECTED,
        BAD_CAST VHQ_XML_UNKNOWN);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_COM_PORT_RS_485,
        BAD_CAST VHQ_XML_FALSE);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
        BAD_CAST NULL);

        xmlNewProp(usb_port_node, BAD_CAST VHQ_XML_GET_DATA_USB_PORT_USB_DEVICE,
        BAD_CAST VHQ_XML_FALSE);
      }
    }

    /* Add SmartCard if it exists */
    if (device_profile.smartcard_info & SMARTCARD_PRESENT)
    {
      xmlNode *smartcard_node = xmlNewChild(dev_profile_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE,
                                            NULL);

      xmlNewProp(smartcard_node, BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE_NAME,
      BAD_CAST VHQ_XML_GET_DATA_SMART_CARD_READER);
      xmlNewProp(smartcard_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST device_profile.smartcard_ver);
    }

    /* Add RFID if it exists */
    if (strlen(device_profile.rfid_ver))
    {
      xmlNode *rfid_node = xmlNewChild(dev_profile_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE,
                                       NULL);

      xmlNewProp(rfid_node, BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE_NAME,
      BAD_CAST VHQ_XML_GET_DATA_RFID_READER);
      xmlNewProp(rfid_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
      BAD_CAST device_profile.rfid_ver);
    }

#ifdef Mx2
    /* Add MCU for UX*/
    dbg_msg("%s: Getting UX MCU info\n", __FUNCTION__);
    /*getUxMCUInfo(&ux100_info);
     if (ux100_info.present)
     {
     xmlNode *mcu_node = xmlNewChild(dev_profile_node, NULL,
     BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE,
     NULL);

     xmlNewProp(mcu_node, BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE_NAME,
     BAD_CAST ux100_info.model_number);
     xmlNewProp(mcu_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
     BAD_CAST ux100_info.fw_version);
     }*/

    // check if printed ir attached
    if (platforminfo_get(PI_PRINTER_INFO, &printer_info, sizeof(printer_info),
                         &size)
        == PI_OK&& printer_info.exist == PI_PRINTER_EXIST)
    {
      xmlNode *printer_node = xmlNewChild(dev_profile_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE,
                                          NULL);

      xmlNewProp(printer_node, BAD_CAST VHQ_XML_GET_DATA_HW_DEVICE_NAME,
      BAD_CAST VHQ_XML_GET_DATA_PRINTER);
      switch (printer_info.type)
      {
        case PI_PRINTER_TYPE_THERMAL_1:
          xmlNewProp(printer_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
          BAD_CAST VHQ_XML_GET_DATA_PRINTER_THERMAL_1);
          break;
        case PI_PRINTER_TYPE_THERMAL_2:
          xmlNewProp(printer_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
          BAD_CAST VHQ_XML_GET_DATA_PRINTER_THERMAL_2);
          break;
        default:
          xmlNewProp(printer_node, BAD_CAST VHQ_XML_GET_DATA_FIRMWARE_VERSION,
          BAD_CAST VHQ_XML_UNKNOWN);
          break;
      }
    }

#endif

    /* Add WIFI profile */
    if (strlen(device_profile.wifiprofile.connection) > 0)
    {
      xmlNode *dev_com_profile_node = xmlNewChild(
          dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE, NULL);

      log_dbg("%s: WIFI profile\n", __FUNCTION__);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_CONNECTION,
                 BAD_CAST device_profile.wifiprofile.connection);
      addIntegerAttr(dev_com_profile_node,
      VHQ_XML_GET_DATA_WIFI_PROFILE_SIGNALSTRENGTH,
                     device_profile.wifiprofile.signalstrength);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_SSID,
                 BAD_CAST device_profile.wifiprofile.ssid);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_CHANNEL,
                 BAD_CAST device_profile.wifiprofile.channel);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_ENCRYPTTYPE,
                 BAD_CAST device_profile.wifiprofile.encrypt_type);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_NETWORKTYPE,
                 BAD_CAST device_profile.wifiprofile.network_type);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_WIFI_PROFILE_AUTHMODE,
                 BAD_CAST device_profile.wifiprofile.auth_mode);

    }

    dbg_msg("%s: SIM profile\n", __FUNCTION__);
    if (strlen(device_profile.simprofile.imei))
    {
      xmlNode *dev_com_profile_node = xmlNewChild(
          dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_SIM_PROFILE, NULL);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_SLOT_INDEX,
                 BAD_CAST device_profile.simprofile.slot_index);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_STATUS,
                 BAD_CAST device_profile.simprofile.status);
      xmlNewProp(dev_com_profile_node, BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_IMEI,
      BAD_CAST device_profile.simprofile.imei);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_SERIAL_NUMBER,
                 BAD_CAST device_profile.simprofile.sim_serial_number);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_OPERATOR,
                 BAD_CAST device_profile.simprofile.sim_operator);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_PHONE_NUMBER,
                 BAD_CAST device_profile.simprofile.sim_phone_number);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_CELL_ID,
                 BAD_CAST device_profile.simprofile.cell_id);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_NETWORK_TYPE,
                 BAD_CAST device_profile.simprofile.sim_network_type);
      xmlNewProp(dev_com_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_SIM_CARD_SIGNAL_STRENGTH,
                 BAD_CAST device_profile.simprofile.sim_signal_strength);
    }

    /* bluetooth profile */
    if (strlen(device_profile.btprofile.connection) > 0)
    {
      xmlNode *dev_bt_profile_node = xmlNewChild(
          dev_profile_node, NULL, BAD_CAST VHQ_XML_GET_DATA_BT_PROFILE, NULL);

      log_dbg("%s: BT profile\n", __FUNCTION__);
      xmlNewProp(dev_bt_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_BT_PROFILE_CONNECTION,
                 BAD_CAST device_profile.btprofile.connection);
      /* ADKTMS-1850, Verix devices have no ability to read RSSI info from a BT chip, exclude this optional field */
      addIntegerAttr(dev_bt_profile_node,
      VHQ_XML_GET_DATA_BT_PROFILE_SIGNALSTRENGTH,
                     device_profile.btprofile.signalstrength);
    }

    /* Add the battery info element */
    AddBatteryInfo(dev_profile_node);

    if (strlen(device_profile.POSIPAddress))
    {
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_POS_IP_ADDR,
                 BAD_CAST device_profile.POSIPAddress);
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_POSAGENT_VERSION,
                 BAD_CAST device_profile.POSAgentVersion);
      xmlSetProp(dev_profile_node,
      BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_POSOS_VERSION,
                 BAD_CAST device_profile.POSOSVersion);
    }

    log_dbg("%s: Device Profile Query Finished\n", __FUNCTION__);

  }

#if SUPPORT_1_02_XSD
  if (GetDataMask & GET_DATA_MASK_DIAG_COUNTERS)
  {
    uint16 num_counters, i;
    diag_counter_t diag_counters[MAX_DIAG_COUNTERS_NUM];
    xmlNode* counter_dataset_node;
    xmlNode* counter_content_node;
    xmlNode* diag_counters_content_node;



    log_dbg( "%s: Gathering Diag Counters information\n", __FUNCTION__);
    GetDiagCounters(diag_counters, MAX_DIAG_COUNTERS_NUM, &num_counters);



    counter_dataset_node = xmlNewChild(datasets_node, NULL, BAD_CAST VHQ_XML_DATASET_TAG, NULL);
    xmlNewProp(counter_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG, BAD_CAST VHQ_XML_GET_DATA_DIAG_COUNTERS);
    xmlNewProp(counter_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG, BAD_CAST VHQ_XML_VERSION_NUM);
    counter_content_node = xmlNewChild(counter_dataset_node, NULL, BAD_CAST VHQ_XML_DATASET_CONTENT_TAG, NULL);

    diag_counters_content_node = xmlNewChild(counter_content_node, NULL, BAD_CAST VHQ_XML_GET_DATA_DATASET_DIAG_COUNTERS, NULL);


    dbg_msg( "%s: Adding Diag Counters Content\n", __FUNCTION__);
    for (i = 0; i < num_counters; i++)
    {
      xmlNode* counter_node;

      counter_node = xmlNewChild(diag_counters_content_node, NULL, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TAG, NULL);

      xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_NAME_TAG, BAD_CAST diag_counters[i].name);
      addIntegerAttr(counter_node, VHQ_XML_GET_DATA_COUNTER_VALUE_TAG, diag_counters[i].value);

      switch (diag_counters[i].type)
      {
      case DIAG_COUNTER_TYPE_DECIMAL:
        xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_DEC);
        break;
      case DIAG_COUNTER_TYPE_HEX:
        xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_HEX);
        break;
      case DIAG_COUNTER_TYPE_TIME:
        xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TIME);
        break;
      }
    }


    log_dbg( "%s: Diag Counters Query Finished\n", __FUNCTION__);
  }
#endif

if (GetDataMask & GET_DATA_MASK_KEYS)
{
  if (isVRKv2())
  {
    xmlNode *key_dataset_node;
    unsigned char calculated_hash[SHA256_DIGEST_LENGTH];

    LogMsg(VHQ_LOG_DEBUG, "%s: Querying Key Data\n", __FUNCTION__);
    memset(calculated_hash, 0, sizeof(calculated_hash));

    if (pthread_mutex_lock(&ippKeyMutex) != 0)
          dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);

    ret_val = GetKeyData();

    if (pthread_mutex_unlock(&ippKeyMutex) != 0)
          dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);

    if (ret_val == VHQ_SUCCESS)
    {
      LogMsg(VHQ_LOG_DEBUG, "%s: GetKeyData returned %d, file: %s\n", __FUNCTION__,
             ret_val, KEY_DATA_TGZ_OUT_FILE);

      VHQSecurityCalculateFileHash(KEY_DATA_TGZ_OUT_FILE, DL_FILE_HASH_ALGO_SHA_256,
                                   calculated_hash, sizeof(calculated_hash), NULL);
      DebugMsgBuffer("Hash", (const char*) calculated_hash, sizeof(calculated_hash),
                     BUF_TYPE_HEX);

      key_dataset_node = xmlNewChild(datasets_node, NULL, BAD_CAST VHQ_XML_DATASET_TAG,
      NULL);
      xmlNewProp(key_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
      BAD_CAST VHQ_XML_GET_DATA_KEYS);
      xmlNewProp(key_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
      BAD_CAST VHQ_XML_VERSION_NUM);
      xmlNewProp(key_dataset_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO,
      BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
      addBinaryAttr(key_dataset_node, VHQ_XML_DL_OPERATION_DL_HASH, calculated_hash,
                    sizeof(calculated_hash), FALSE);
      xmlNewChild(key_dataset_node, NULL, BAD_CAST VHQ_XML_DATASET_CONTENT_TAG, NULL);
    }
    else
    {
#define MAX_KEYS 50
      uint8 num_keys = 0, i;
      key_data_t key_data[MAX_KEYS];
      xmlNode *key_dataset_node;
      xmlNode *key_content_node;

      log_dbg("%s: Querying Key Data\n", __FUNCTION__);
      memset(key_data, 0, sizeof(key_data));

      if (pthread_mutex_lock(&ippKeyMutex) != 0)
        dbg_err("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);

      ret_val = GetKeyDataLegacy(key_data, &num_keys, MAX_KEYS);

      if (pthread_mutex_unlock(&ippKeyMutex) != 0)
        dbg_err("\n\n%s ERROR: could not unlock mutex!!!\n\n", __FUNCTION__);

      dbg_msg("%s: GetKeyData returned %d - num_keys = %d\n", __FUNCTION__,
              ret_val, num_keys);
      key_dataset_node = xmlNewChild(datasets_node, NULL,
      BAD_CAST VHQ_XML_DATASET_TAG,
                                     NULL);
      xmlNewProp(key_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
      BAD_CAST VHQ_XML_GET_DATA_KEYS);
      xmlNewProp(key_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
      BAD_CAST VHQ_XML_VERSION_NUM);
      key_content_node = xmlNewChild(key_dataset_node, NULL,
      BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                     NULL);

      for (i = 0; i < num_keys; i++)
      {
        xmlNode *key_node;

        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Adding Key Content for %d out of %d keys\n", __FUNCTION__, i, num_keys);
        key_node = xmlNewChild(key_content_node, NULL,
        BAD_CAST VHQ_XML_GET_DATA_KEY_TAG,
                               NULL);

        xmlNewProp(key_node, BAD_CAST VHQ_XML_GET_DATA_KEYS_TYPE,
        BAD_CAST ConvertKeyTypeToString(key_data[i].type));

        addIntegerAttr(key_node, VHQ_XML_GET_DATA_KEYS_SLOT, key_data[i].slot);

        if (key_data[i].keyPresent)
        {
          xmlNewProp(key_node, BAD_CAST VHQ_XML_GET_DATA_KEYS_KEY_PRESENT,
          BAD_CAST VHQ_XML_TRUE);

          if (strlen(key_data[i].name) != 0)
          {
            xmlNewProp(key_node, BAD_CAST VHQ_XML_GET_DATA_KEYS_NAME,
            BAD_CAST key_data[i].name);
          }

          if (strlen(key_data[i].keyInfo) != 0)
          {
            xmlNewProp(key_node, BAD_CAST VHQ_XML_GET_DATA_KEYS_KEY_INFO,
            BAD_CAST key_data[i].keyInfo);
          }
        }
        else
        {
          xmlNewProp(key_node, BAD_CAST VHQ_XML_GET_DATA_KEYS_KEY_PRESENT,
          BAD_CAST VHQ_XML_FALSE);
        }
      }
    }

    log_dbg("%s: Key Data Query Finished\n", __FUNCTION__);
  }
}

  if (GetDataMask & GET_DATA_MASK_MEMORY)
  {
    memory_profile_t memory_profile;
    xmlNode *mem_profile_dataset_node;
    xmlNode *mem_profile_content_node;
    xmlNode *mem_profile_node;

    log_dbg("%s: Querying Memory Profile\n", __FUNCTION__);

    if (!GetMemoryProfile(&memory_profile))
    {
      ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_MEMORY_ERROR;
    }

    mem_profile_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                           NULL);
    xmlNewProp(mem_profile_dataset_node,
    BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
               BAD_CAST VHQ_XML_GET_DATA_MEM_PROFILE);
    xmlNewProp(mem_profile_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    mem_profile_content_node = xmlNewChild(mem_profile_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                           NULL);

    mem_profile_node = xmlNewChild(mem_profile_content_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_MEM_PROFILE,
                                   NULL);

    addIntegerAttr(mem_profile_node,
    VHQ_XML_GET_DATA_MEM_PROFILE_FREE_PROTECTED_RAM,
                   memory_profile.RAM_protected_free_space);
    addIntegerAttr(mem_profile_node, VHQ_XML_GET_DATA_MEM_PROFILE_FREE_RAM,
                   memory_profile.RAM_free_space);
    addIntegerAttr(mem_profile_node, VHQ_XML_GET_DATA_MEM_PROFILE_FREE_FLASH,
                   memory_profile.FLASH_free_space);
    addIntegerAttr(mem_profile_node,
    VHQ_XML_GET_DATA_MEM_PROFILE_FREE_EXTERNAL_MEM,
                   memory_profile.Ext_Mem_free_space);
    addIntegerAttr(mem_profile_node, VHQ_XML_GET_DATA_MEM_PROFILE_PROTECTED_RAM,
                   memory_profile.RAM_protected_size);
    addIntegerAttr(mem_profile_node, VHQ_XML_GET_DATA_MEM_PROFILE_TOTAL_RAM,
                   memory_profile.RAM_size);
    addIntegerAttr(mem_profile_node, VHQ_XML_GET_DATA_MEM_PROFILE_TOTAL_FLASH,
                   memory_profile.FLASH_size);
    addIntegerAttr(mem_profile_node,
    VHQ_XML_GET_DATA_MEM_PROFILE_TOTAL_EXTERNAL_MEM,
                   memory_profile.Ext_Mem_size);

    /* REVISIT (Mitch 3-8-2012): Need to add support for getting process utilization (top) */

    /* REVISIT (Mitch 3-8-2012): Need to add support for getting open file handles (see Kevin's email from 1-19-2012) */
    log_dbg("%s: Memory Profile Query Finished\n", __FUNCTION__);
  }

  if (GetDataMask & GET_DATA_MASK_VSR_CERT_TREE)
  {
    int i;
    uint8 num_certs;
    xmlNode *vsr_ct_dataset_node;
    xmlNode *vsr_ct_content_node;

    log_dbg("%s: Querying VSR Certificate Tree\n", __FUNCTION__);
    memset(vsr_cert_tree, 0, sizeof(vsr_cert_tree));
    ret_val = GetVSRCertTree(vsr_cert_tree, &num_certs);

    dbg_msg("%s: GetVSRCertTree returned %d - num_certs = %d\n", __FUNCTION__,
            ret_val, num_certs);
    vsr_ct_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                      NULL);
    xmlNewProp(vsr_ct_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_TREE);
    xmlNewProp(vsr_ct_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    vsr_ct_content_node = xmlNewChild(vsr_ct_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                      NULL);

    dbg_msg("%s: Adding VSR Cert Content\n", __FUNCTION__);
    for (i = 0; i < num_certs; i++)
    {
      xmlNode *vsr_cert_node;

      vsr_cert_node = xmlNewChild(vsr_ct_content_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_VSR_CERT,
                                  NULL);

      if (isValidXMLData(vsr_cert_tree[i].ID))
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_ID,
        BAD_CAST vsr_cert_tree[i].ID);
      else
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_ID,
        BAD_CAST "Not Valid XML");

      if (isValidXMLData(vsr_cert_tree[i].SerNum))
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_SN,
        BAD_CAST vsr_cert_tree[i].SerNum);
      else
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_SN,
        BAD_CAST "Not Valid XML");

      /* Add tpye and name if applicable */
      if (vsr_cert_tree[i].Type == VSR_CERT_TYPE_APP_SPONSOR)
      {
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_TYPE,
        BAD_CAST VHQ_XML_GET_DATA_DEV_PROFILE_VSR_SPONSOR);
      }
      else if (vsr_cert_tree[i].Type == VSR_CERT_TYPE_UNKNOWN)
      {
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_TYPE,
        BAD_CAST VHQ_XML_UNKNOWN);
      }

      if (isValidXMLData(vsr_cert_tree[i].Name))
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_NAME,
        BAD_CAST vsr_cert_tree[i].Name);
      else
        xmlNewProp(vsr_cert_node, BAD_CAST VHQ_XML_GET_DATA_VSR_CERT_NAME,
        BAD_CAST "Not Valid XML");

#if 0
      addBinaryNode(status_report_doc, vsr_cert_node, VHQ_XML_GET_DATA_VSR_CERT_DATA, (unsigned char*)vsr_cert_tree[i].certData,
        vsr_cert_tree[i].certDataLen, TRUE);
#else
      addBinaryNode(status_report_doc, vsr_cert_node,
      VHQ_XML_GET_DATA_VSR_CERT_DATA,
                    NULL, 0, TRUE);
#endif
    }

    log_dbg("%s: VSR Certificate Tree Query Finished\n", __FUNCTION__);
  }

  if (GetDataMask & GET_DATA_MASK_VCL_INFO)
  {
    vcl_info_t VCLInfo;
    int i;
    xmlNode *vcl_info_dataset_node;
    xmlNode *vcl_info_content_node;
    xmlNode *vcl_info_node;
    xmlNode *vcl_diag_info_type_node;
    xmlNode *vcl_data_node;
    char *currentline, *nextline, *name, *value;
    int firstline;

    memset(&VCLInfo, 0, sizeof(VCLInfo));
    log_dbg("%s: Querying for VCL Info\n", __FUNCTION__);

    vcl_info_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                        NULL);
    xmlNewProp(vcl_info_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_GET_DATA_VCL_INFO);
    xmlNewProp(vcl_info_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    vcl_info_content_node = xmlNewChild(vcl_info_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                        NULL);
    vcl_info_node = xmlNewChild(vcl_info_content_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_VCL_INFO,
                                NULL);

    if (GetVCLInfo(&VCLInfo, TRUE))
    {
      dbg_msg("%s: Got VCL Information successfully, adding to response\n",
              __FUNCTION__);

      xmlNewProp(vcl_info_node, BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_VERSION,
      BAD_CAST VCLInfo.VCLStatus.ucVersionString);

      /* Remove CR's from Diag data */
      for (i = 0; i < (int) strlen(VCLInfo.VCLDiagData); i++)
      {
        if (VCLInfo.VCLDiagData[i] == '\r')
          VCLInfo.VCLDiagData[i] = '\n';
      }

      dbg_msg("%s: Before formattting VCL Diag Info:\n----\n%s\n----\n",
              __FUNCTION__, VCLInfo.VCLDiagData);

      /* Start parsing VCLInfo Data */
      currentline = VCLInfo.VCLDiagData;
      nextline = NULL;
      firstline = 1;

      do
      {
        if (VCLDiagDataParserGetOneLine(currentline, &nextline))
        {

          /* First line is for main tag name */
          if (firstline)
          {
            dbg_msg("%s: first line: make root tag with %s\n", __FUNCTION__,
                    currentline);
            vcl_diag_info_type_node = xmlNewChild(vcl_info_node, NULL,
            BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_EXTENDED_DIAGS,
                                                  NULL);
            xmlNewProp(vcl_diag_info_type_node,
            BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_EXTENDED_DIAGS_TITLE,
                       BAD_CAST currentline);
            firstline = 0;
          }
          else if (strstr(currentline, VCLINFO_PARSING_PAGE_BREAKER))
          {
            firstline = 1;
            dbg_msg("%s: end line: %s prepare next page\n", __FUNCTION__,
                    currentline);
          }

          if (VCLDiagDataParserGetParam(currentline, &name, &value))
          {
#ifdef Mx2
            if ((stricmp(name, KMAILMAN_VERSION_STR) == 0)
                && (stricmp(value, KMAILMAN_VERSION_UNKNOWN_STR) == 0))
            {
              dbg_msg(
                  "%s: Skipping [%s] parameter (value:[%s]) since it is reported in apps\n",
                  __FUNCTION__, name, value);
            }
            else
            {

#else
            if (1)
            {
#endif
              dbg_msg("%s: parameter name:[%s] parameter value:[%s]\n",
                      __FUNCTION__, name, value);
              vcl_data_node = xmlNewChild(vcl_diag_info_type_node, NULL,
              BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_EXTENDED_DIAGS_DATA,
                                          NULL);

              if (name)
              {
                xmlNewProp(vcl_data_node,
                BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_EXTENDED_DIAGS_DATA_NAME,
                           BAD_CAST name);
                xmlNewProp(vcl_data_node,
                BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_EXTENDED_DIAGS_DATA_VALUE,
                           BAD_CAST value);
              }
            }

          }

          currentline = nextline;
        }

      }
      while (nextline);

    }
    else
    {
      /* VX: Return last saved values if fail to open msr */
      dbg_msg(
          "%s: MSR open failed - returning last saved VSP Encryption Enable state\n",
          __FUNCTION__);
      xmlNewProp(vcl_info_node, BAD_CAST VHQ_XML_GET_DATA_VCL_INFO_VERSION,
      BAD_CAST VCLInfo.VCLStatus.ucVersionString);
    }
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_STATUS,
                   VCLInfo.VCLStatus.ucStatus);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_STATE,
                   VCLInfo.VCLStatus.ucModuleState);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_ENCR_STATUS,
                   VCLInfo.VCLStatus.ucEncryptionStatus);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_ROOT_KEY_STATUS,
                   VCLInfo.VCLStatus.ucRootAuthenticationKeyStatus);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_PROV_KEY_STATUS,
                   VCLInfo.VCLStatus.ucProvisionerAuthenticationKeyStatus);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_PAN_KEY_STATUS,
                   VCLInfo.VCLStatus.ucPanKeyStatus);
    addIntegerAttr(vcl_info_node,
    VHQ_XML_GET_DATA_VCL_INFO_DISCRETIONARY_KEY_STATUS,
                   VCLInfo.VCLStatus.ucTerminalKeyStatus);
    addIntegerAttr(vcl_info_node, VHQ_XML_GET_DATA_VCL_INFO_ENCR_ENABLED,
                   VCLInfo.VCLStatus.ucEncryptionEnabled);

    log_dbg("%s: VCL Query Finished\n", __FUNCTION__);
  }

  if (GetDataMask & GET_DATA_MASK_APP_PROFILE)
  {
    int custom_user_index;
    xmlNode *app_profile_dataset_node;
    xmlNode *app_profile_content_node;

    log_dbg("%s: Collecting Application Profile - AppName = %s\n", __FUNCTION__,
            AppName);

    app_profile_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                           NULL);
    xmlNewProp(app_profile_dataset_node,
    BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
               BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE);
    xmlNewProp(app_profile_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);

    app_profile_content_node = xmlNewChild(app_profile_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                           NULL);

    /* Lock custom application info data */
    pthread_mutex_lock(&appInfoMutex);

    /* Collect data, if required by param_mask */
    GetAppCustomData(customAppInfo, param_mask, FALSE);

    for (custom_user_index = 0; custom_user_index < TMS_MAX_REGISTERED_APPS;
        custom_user_index++)
    {
      if (customAppInfo[custom_user_index].parameterList)
      {
        dbg_msg("%s: Found parameters for %s - checking if name matches %s\n",
                __FUNCTION__, customAppInfo[custom_user_index].user, AppName);
        if (AppName
            && ((strcmp(AppName, customAppInfo[custom_user_index].user) == 0)
                || (strcmp(AppName, "*") == 0)))
        {
          xmlNode *app_profile_node;
          list_head_t *app_parameterList_node;
          appParam_t *app_parameterList_list_obj;

          dbg_msg("%s: Collecting Data from %s\n", __FUNCTION__,
                  customAppInfo[custom_user_index].user);

          app_profile_node = xmlNewChild(app_profile_content_node, NULL,
          BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE,
                                         NULL);
          xmlSetProp(app_profile_node,
          BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_APP_NAME,
                     BAD_CAST customAppInfo[custom_user_index].user);
          addTimeAttr(app_profile_node,
                      (char*) VHQ_XML_GET_DATA_APP_PROFILE_DATE_TIME,
                      customAppInfo[custom_user_index].time_collected, TRUE);

          list_for_each(app_parameterList_node, &customAppInfo[custom_user_index].parameterList->list)
          {
            app_parameterList_list_obj = list_entry(app_parameterList_node,
                                                    appParam_t, list);
            if ((app_parameterList_list_obj->parameter.parameterType
                & TMS_PARAMETER_TYPE_DEVICE_PROFILE)
                == TMS_PARAMETER_TYPE_DEVICE_PROFILE)
            {
              if (strlen(app_parameterList_list_obj->parameter.parameterName))
              {
                /* Everything DEVICE_PROFILE parameter goes into a ApplAtrb sub-element*/
                xmlNodePtr applAttrib_node = NULL;

                /* Add the header node */
                applAttrib_node = xmlNewChild(app_profile_node, NULL,
                BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE,
                                              NULL);
                xmlSetProp(
                    applAttrib_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                    BAD_CAST app_parameterList_list_obj->parameter.parameterName);
                xmlSetProp(
                    applAttrib_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                    BAD_CAST app_parameterList_list_obj->parameter
                        .parameterValue);
              }
            }
          }
        }
      }
    }

    /* Unlock custom application info data */
    pthread_mutex_unlock(&appInfoMutex);

    log_dbg("%s: Collected %s application profile\n", __FUNCTION__, AppName);
  }
  if ((include_param == TRUE) && (param_res != VHQ_SUCCESS))
    ret_val = param_res;

  return ret_val;
}


vhq_result_t ScheduleGetData(operation_t *operation,
                             get_data_content_t *get_data_content, int comm_id,
                             int message_id, srv_msg_type_t srv_msg_type,
                             srv_op_type_t srv_op_type,
                             operation_set_event_t **op_set_events,
                             uint32 *num_events_extracted)
{
  get_data_parms _get_data_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_ERROR;

  dbg_notice("%s: extracting get_data events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in get_data_event array */
  memcpy(&_get_data_parms.operation, operation, sizeof(operation_t));
  memcpy(&_get_data_parms.get_data_content, get_data_content,
         sizeof(get_data_content_t));

  /* Setup the rest of parameters */
  _get_data_parms.comm_id = comm_id;
  _get_data_parms.message_id = message_id;
  _get_data_parms.srv_msg_type = srv_msg_type;
  _get_data_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  dbg_msg("%s: Scheduling get_data Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_get_data_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbGetDataProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_get_data_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_get_data_parms,
           sizeof(_get_data_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_get_data_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}

static vhq_result_t GetDeviceData(operation_t *operation,
                                  xmlNode *operation_element, int comm_id,
                                  int message_id, srv_msg_type_t srv_msg_type,
                                  srv_op_type_t srv_op_type,
                                  operation_set_event_t **op_set_events,
                                  uint32 *num_events_extracted)
{
  xmlNode *get_data_node;
  get_data_content_t get_data_content;

  /* Clear the content struct */
  memset(&get_data_content, 0, sizeof(get_data_content_t));
  bool DeviceIDReqd = FALSE;

  /* Get the Query Node */
  get_data_node = GetNodeByName(operation_element,
  VHQ_XML_GET_DATA_OPERATION_TAG);
  if (get_data_node)
  {
    char *dataset_ident_str;
    char *include_params;
    bool include_param = FALSE;

    dataset_ident_str = GetStrAttrFromNode(
        get_data_node, VHQ_XML_GET_DATA_OPERATION_DATASET_QUERY);
    if (dataset_ident_str)
    {
      ConvertGetDataIndentifierToMask(dataset_ident_str,
                                      &get_data_content.Query,
                                      get_data_content.AppName,
                                      &get_data_content.SubQuery);
    }
    include_params = GetStrAttrFromNode(get_data_node,
    VHQ_XML_GET_DATA_INCLUDE_PARAMS);
    if (include_params)
    {
      include_param = ConvertIncludeParamToBool(include_params);
      VHQGetParameterBool(PARAM_DEVICE_ID_REQUIRED, &DeviceIDReqd);
      dbg_msg("\n\n%s: IncludeParams = %d DeviceIDRequiredToRegister = %d \n",
              __FUNCTION__, include_param, DeviceIDReqd);
      if (DeviceIDReqd && include_param)
        get_data_content.include_param = TRUE;
      else
        get_data_content.include_param = FALSE;
    }
    else
      dbg_msg("%s:IncludeParams not found\n", __FUNCTION__);
    xmlFree(dataset_ident_str);
  }

  dbg_msg("\n\n%s: GetData Operation Mask = 0x%08x\n", __FUNCTION__,
          get_data_content.Query);

  operation->Content = (void*) &get_data_content;

  return (ScheduleGetData(operation, &get_data_content, comm_id, message_id,
                          srv_msg_type, srv_op_type, op_set_events,
                          num_events_extracted));
}


static vhq_result_t GatherDiagData(get_data_mask_t GetDataMask, char *AppName,
                                   xmlDocPtr status_report_doc, char *op_id,
                                   uint32 operation_set_id, uint32 param_mask)
{
  xmlNode *response_root_element = xmlDocGetRootElement(status_report_doc);
  xmlNode *response_op_res_node = GetNodeByName(response_root_element,
  VHQ_XML_CONTENT_OP_RES_TAG);
  xmlNode *op_result_element;
  xmlNode *datasets_node;
  bool create_op_result_node = TRUE;
  vhq_result_t ret_val = VHQ_SUCCESS;

  op_result_element = GetNodeByName(response_op_res_node,
  VHQ_XML_OP_RES_OP_RES_ID_TAG);
  while (op_result_element != NULL)
  {
    uint32 opSetId = 0;

    dbg_msg("%s: Checking if OpResult @ 0x%08x matches OpSetId %d, OpId %s\n",
            __FUNCTION__, op_result_element, operation_set_id, op_id);
    if (GetIntAttrFromNode(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                           (int*) &opSetId))
    {
      if (opSetId == operation_set_id)
      {
        char *opId = NULL;

        dbg_msg("%s: OpSetId %d matches - checking OpId\n", __FUNCTION__,
                operation_set_id);
        opId = GetStrAttrFromNode(op_result_element, VHQ_XML_OPERATION_ID_TAG);

        if (strcmp(opId, op_id) == 0)
        {
          dbg_msg("%s: Found result for OpSetId %d, OpId %s - modifying it\n",
                  __FUNCTION__, operation_set_id, op_id);
          create_op_result_node = FALSE;
          if (opId)
          {
            xmlFree(opId);
          }
          break;
        }
        if (opId)
        {
          xmlFree(opId);
        }
      }
    }
    dbg_warn("%s: OpResult @ 0x%08x does not match - moving to next OpResult\n",
             __FUNCTION__, op_result_element);
    op_result_element = GetNodeByName(op_result_element->next,
    VHQ_XML_OP_RES_OP_RES_ID_TAG);
  }

  if (create_op_result_node)
  {
    op_result_element = xmlNewChild(response_op_res_node, NULL,
    BAD_CAST VHQ_XML_OP_RES_OP_RES_ID_TAG,
                                    NULL);

    addIntegerAttr(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                   operation_set_id);
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_OPERATION_ID_TAG,
    BAD_CAST op_id);
  }

  datasets_node = xmlNewChild(op_result_element, NULL,
  BAD_CAST VHQ_XML_DATASETS_TAG,
                              NULL);

  dbg_msg(
      "%s: response_root_element = 0x%08x, response_op_res_node = 0x%08x, datasets_node = 0x%08x\n",
      __FUNCTION__, response_root_element, response_op_res_node, datasets_node);

  if (GetDataMask & GET_DATA_MASK_DIAG_PROFILE)
  {
    uint16 num_processes, i;
    int open_handles = 0;
    int max_handles = 0;
    process_info_t processes[MAX_PROCESS_NUM];
    xmlNode *profile_dataset_node;
    xmlNode *profile_content_node;
    xmlNode *diag_profile_content_node;
    xmlNode *diag_profile_process_usage_node;

    log_notice("%s: Gathering Diag Profile information\n", __FUNCTION__);
    GetHandleInfo(&open_handles, &max_handles);
    GetProcessInfo(processes, MAX_PROCESS_NUM, &num_processes);

    profile_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                       NULL);
    xmlNewProp(profile_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_GET_DATA_DIAG_PROFILE);
    xmlNewProp(profile_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    profile_content_node = xmlNewChild(profile_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                       NULL);

    diag_profile_content_node = xmlNewChild(profile_content_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_DIAGNOSTIC_PROFILE,
                                            NULL);

    dbg_msg("%s: Adding File handle info\n", __FUNCTION__);
    addIntegerAttr(diag_profile_content_node,
    VHQ_XML_GET_DATA_DIAG_PROFILE_OPEN_FILE_HANDLES,
                   open_handles);
    addIntegerAttr(diag_profile_content_node,
    VHQ_XML_GET_DATA_DIAG_PROFILE_MAX_FILE_HANDLES,
                   max_handles);

    diag_profile_process_usage_node = xmlNewChild(
        diag_profile_content_node, NULL,
        BAD_CAST VHQ_XML_GET_DATA_DIAG_PROFILE_PROCESS_USAGE,
        NULL);

    dbg_msg("%s: Adding ProcessUsage Content\n", __FUNCTION__);
    for (i = 0; i < num_processes; i++)
    {
      xmlNode *process_node;

      process_node = xmlNewChild(diag_profile_process_usage_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_DIAG_PROFILE_PROCESS,
                                 NULL);

      xmlNewProp(process_node,
      BAD_CAST VHQ_XML_GET_DATA_DIAG_PROFILE_PROCESS_NAME,
                 BAD_CAST processes[i].name);
      addIntegerAttr(process_node, VHQ_XML_GET_DATA_DIAG_PROFILE_PROCESS_CPU,
                     processes[i].cpu_percent);
      addIntegerAttr(process_node, VHQ_XML_GET_DATA_DIAG_PROFILE_PROCESS_MEM,
                     processes[i].mem_percent);
    }

    log_dbg("%s: Diag Profile Query Finished\n", __FUNCTION__);

  }

  if (GetDataMask & GET_DATA_MASK_DIAG_COUNTERS)
  {
    uint16 num_counters, i;
    diag_counter_t diag_counters[MAX_DIAG_COUNTERS_NUM];
    xmlNode *counter_dataset_node;
    xmlNode *counter_content_node;
    xmlNode *diag_counters_content_node;

    log_notice("%s: Gathering Diag Counters information\n", __FUNCTION__);

    GetDiagCounters(diag_counters, MAX_DIAG_COUNTERS_NUM, &num_counters);

    counter_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                       NULL);
    xmlNewProp(counter_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_GET_DATA_DIAG_COUNTERS);
    xmlNewProp(counter_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    counter_content_node = xmlNewChild(counter_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                       NULL);

    diag_counters_content_node = xmlNewChild(counter_content_node, NULL,
    BAD_CAST VHQ_XML_GET_DATA_DATASET_DIAG_COUNTERS,
                                             NULL);

    dbg_msg("%s: Adding Diag Counters Content\n", __FUNCTION__);
    for (i = 0; i < num_counters; i++)
    {
      xmlNode *counter_node;

      counter_node = xmlNewChild(diag_counters_content_node, NULL,
      BAD_CAST VHQ_XML_GET_DATA_COUNTER_TAG,
                                 NULL);

      xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_NAME_TAG,
      BAD_CAST diag_counters[i].name);
      dbg_msg("%s: Adding Diag Counters Content %s\n", __FUNCTION__,
              diag_counters[i].name);
      addIntegerAttr(counter_node, VHQ_XML_GET_DATA_COUNTER_VALUE_TAG,
                     diag_counters[i].value);

      switch (diag_counters[i].type)
      {
        case DIAG_COUNTER_TYPE_DECIMAL:
          xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG,
          BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_DEC);
          break;
        case DIAG_COUNTER_TYPE_HEX:
          xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG,
          BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_HEX);
          break;
        case DIAG_COUNTER_TYPE_TIME:
          xmlNewProp(counter_node, BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TAG,
          BAD_CAST VHQ_XML_GET_DATA_COUNTER_TYPE_TIME);
          break;
      }
    }
    log_dbg("%s: Diag Counters Query Finished\n", __FUNCTION__);
  }

  if (GetDataMask & GET_DATA_MASK_APP_PROFILE)
  {
    int custom_user_index;
    xmlNode *app_profile_dataset_node;
    xmlNode *app_profile_content_node;

    log_notice("%s: Collecting Application Profile - AppName = %s\n",
               __FUNCTION__, AppName);

    app_profile_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                           NULL);
    xmlNewProp(app_profile_dataset_node,
    BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
               BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE);
    xmlNewProp(app_profile_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);

    app_profile_content_node = xmlNewChild(app_profile_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                           NULL);

    /* Lock custom application info data */
    pthread_mutex_lock(&appInfoMutex);

    /* Collect data, if required by param_mask */
    GetAppCustomData(customAppInfo, param_mask, FALSE);

    for (custom_user_index = 0; custom_user_index < TMS_MAX_REGISTERED_APPS;
        custom_user_index++)
    {
      if (customAppInfo[custom_user_index].parameterList)
      {
        dbg_msg("%s: Found parameters for %s - checking if name matches %s\n",
                __FUNCTION__, customAppInfo[custom_user_index].user, AppName);

        if ((strcmp(AppName, customAppInfo[custom_user_index].user) == 0)
            || (strcmp(AppName, "*") == 0))
        {
          xmlNode *app_profile_node;
          list_head_t *app_parameterList_node;
          appParam_t *app_parameterList_list_obj;

          dbg_msg("%s: Collecting Data from %s\n", __FUNCTION__,
                  customAppInfo[custom_user_index].user);

          app_profile_node = xmlNewChild(app_profile_content_node, NULL,
          BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE,
                                         NULL);
          xmlSetProp(app_profile_node,
          BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_APP_NAME,
                     BAD_CAST customAppInfo[custom_user_index].user);
          addTimeAttr(app_profile_node,
                      (char*) VHQ_XML_GET_DATA_APP_PROFILE_DATE_TIME,
                      customAppInfo[custom_user_index].time_collected, TRUE);

          list_for_each(app_parameterList_node, &customAppInfo[custom_user_index].parameterList->list)
          {
            app_parameterList_list_obj = list_entry(app_parameterList_node,
                                                    appParam_t, list);
            if ((app_parameterList_list_obj->parameter.parameterType
                & TMS_PARAMETER_TYPE_DIAGNOSTIC)
                == TMS_PARAMETER_TYPE_DIAGNOSTIC)
            {
              if (strlen(app_parameterList_list_obj->parameter.parameterName))
              {
                /* Everything DEVICE_PROFILE parameter goes into a ApplAtrb sub-element*/
                xmlNodePtr applAttrib_node = NULL;

                /* Add the header node */
                applAttrib_node = xmlNewChild(app_profile_node, NULL,
                BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE,
                                              NULL);
                xmlSetProp(
                    applAttrib_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                    BAD_CAST app_parameterList_list_obj->parameter.parameterName);
                xmlSetProp(
                    applAttrib_node,
                    BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                    BAD_CAST app_parameterList_list_obj->parameter
                        .parameterValue);
              }
            }
          }
        }
      }
    }

    /* Unlock custom application info data */
    pthread_mutex_unlock(&appInfoMutex);

    log_dbg("%s: Collected %s application profile\n", __FUNCTION__, AppName);
  }

  return ret_val;
}


vhq_result_t ScheduleGetDiagData(operation_t *operation,
                                 get_data_content_t *get_data_content,
                                 int comm_id, int message_id,
                                 srv_msg_type_t srv_msg_type,
                                 srv_op_type_t srv_op_type,
                                 operation_set_event_t **op_set_events,
                                 uint32 *num_events_extracted)
{
  get_data_parms _get_data_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DIAG_DATA_ERROR;

  dbg_msg("%s: extracting get diag data events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in get_data_event array */
  memcpy(&_get_data_parms.operation, operation, sizeof(operation_t));
  memcpy(&_get_data_parms.get_data_content, get_data_content,
         sizeof(get_data_content_t));

  /* Setup the rest of parameters */
  _get_data_parms.comm_id = comm_id;
  _get_data_parms.message_id = message_id;
  _get_data_parms.srv_msg_type = srv_msg_type;
  _get_data_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  dbg_msg("%s: Scheduling get_data Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_get_data_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbGetDiagDataProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_get_data_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_get_data_parms,
           sizeof(_get_data_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_get_data_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t GetDiagData(operation_t *operation,
                                xmlNode *operation_element, int comm_id,
                                int message_id, srv_msg_type_t srv_msg_type,
                                srv_op_type_t srv_op_type,
                                operation_set_event_t **op_set_events,
                                uint32 *num_events_extracted)
{
  xmlNode *get_diag_data_node;
  get_data_content_t get_diag_data_content;

  /* Clear the content struct */
  memset(&get_diag_data_content, 0, sizeof(get_data_content_t));

  /* Get the Query Node */
  get_diag_data_node = GetNodeByName(operation_element,
  VHQ_XML_GET_DIAG_DATA_OPERATION_TAG);
  if (get_diag_data_node)
  {
    char *dataset_ident_str;

    dataset_ident_str = GetStrAttrFromNode(
        get_diag_data_node, VHQ_XML_GET_DATA_OPERATION_DATASET_QUERY);
    if (dataset_ident_str)
    {
      ConvertGetDataIndentifierToMask(dataset_ident_str,
                                      &get_diag_data_content.Query,
                                      get_diag_data_content.AppName,
                                      &get_diag_data_content.SubQuery);
    }
    xmlFree(dataset_ident_str);
  }

  dbg_msg("\n\n%s: GetDiagData Operation Mask = 0x%08x\n", __FUNCTION__,
          get_diag_data_content.Query);

  operation->Content = (void*) &get_diag_data_content;

  return (ScheduleGetDiagData(operation, &get_diag_data_content, comm_id,
                              message_id, srv_msg_type, srv_op_type,
                              op_set_events, num_events_extracted));
}


vhq_result_t ScheduleSetData(operation_t *operation,
                             set_data_content_t *set_data_content, int comm_id,
                             int message_id, srv_msg_type_t srv_msg_type,
                             srv_op_type_t srv_op_type,
                             operation_set_event_t **op_set_events,
                             uint32 *num_events_extracted)
{
  set_data_parms _set_data_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_ERROR;

  dbg_msg("%s: extracting set data events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in set_data_event array */
  memcpy(&_set_data_parms.operation, operation, sizeof(operation_t));
  memcpy(&_set_data_parms.set_data_content, set_data_content,
         sizeof(set_data_content_t));

  /* Setup the rest of parameters */
  _set_data_parms.comm_id = comm_id;
  _set_data_parms.message_id = message_id;
  _set_data_parms.srv_msg_type = srv_msg_type;
  _set_data_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  dbg_msg("%s: Scheduling set_data Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_set_data_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbSetDataProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_set_data_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_set_data_parms,
           sizeof(_set_data_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_set_data_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t SetDeviceData(operation_t *operation,
                                  xmlNode *operation_element, int comm_id,
                                  int message_id, srv_msg_type_t srv_msg_type,
                                  srv_op_type_t srv_op_type,
                                  operation_set_event_t **op_set_events,
                                  uint32 *num_events_extracted)
{
  xmlNode *set_data_node;
  xmlNode *config_element_node;
  set_data_content_t set_data_content;

  /* Clear set data content strcut */
  memset(&set_data_content, 0, sizeof(set_data_content_t));

  /* Get the SetData Node */
  set_data_node = GetNodeByName(operation_element,
  VHQ_XML_SET_DATA_OPERATION_TAG);
  if (set_data_node)
  {
    char *dataset_ident_str;

    dataset_ident_str = GetStrAttrFromNode(
        set_data_node, VHQ_XML_SET_DATA_OPERATION_IDENTIFIER);
    if (dataset_ident_str)
    {
      ConvertSetDataIndentifierToType(dataset_ident_str,
                                      &set_data_content.SetDataType);
    }
    xmlFree(dataset_ident_str);
  }

  config_element_node = GetNodeByName(
      operation_element, VHQ_XML_SET_DATA_OPERATION_CONFIG_ELEMENT);
  while (config_element_node)
  {
    char *temp_str;

    dbg_msg("%s: Found %s Element at 0x%08x\n", __FUNCTION__,
            VHQ_XML_SET_DATA_OPERATION_CONFIG_ELEMENT, config_element_node);
    temp_str = GetStrAttrFromNode(
        config_element_node, VHQ_XML_SET_DATA_OPERATION_CONFIG_ATTR_SECTION);
    if (temp_str)
    {
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Section allocated at address 0x%08x\n", __FUNCTION__,
      //  set_data_content.SetDataElementArray[set_data_content.SetDataElementCount].Section);
      strcpy(
          set_data_content.SetDataElementArray[set_data_content
              .SetDataElementCount].Section,
          temp_str);
    }
    xmlFree(temp_str);

    temp_str = GetStrAttrFromNode(config_element_node,
    VHQ_XML_SET_DATA_OPERATION_CONFIG_ATTR_NAME);
    if (temp_str)
    {
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Name allocated at address 0x%08x\n", __FUNCTION__,
      //  set_data_content.SetDataElementArray[set_data_content.SetDataElementCount].Name);
      strcpy(
          set_data_content.SetDataElementArray[set_data_content
              .SetDataElementCount].Name,
          temp_str);
    }
    xmlFree(temp_str);

    temp_str = GetStrAttrFromNode(config_element_node,
    VHQ_XML_SET_DATA_OPERATION_CONFIG_ATTR_VALUE);
    if (temp_str)
    {
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Value allocated at address 0x%08x\n", __FUNCTION__,
      //  set_data_content.SetDataElementArray[set_data_content.SetDataElementCount].Value);
      strcpy(
          set_data_content.SetDataElementArray[set_data_content
              .SetDataElementCount].Value,
          temp_str);
    }
    xmlFree(temp_str);

    set_data_content.SetDataElementCount++;

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for more %s Elements\n", __FUNCTION__, VHQ_XML_SET_DATA_OPERATION_CONFIG_ELEMENT);
    config_element_node = GetNodeByName(
        config_element_node->next, VHQ_XML_SET_DATA_OPERATION_CONFIG_ELEMENT);
  }

  log_dbg("\n\n%s: SetData type = %d\n", __FUNCTION__,
          set_data_content.SetDataType);

  operation->Content = (void*) &set_data_content;

  return (ScheduleSetData(operation, &set_data_content, comm_id, message_id,
                          srv_msg_type, srv_op_type, op_set_events,
                          num_events_extracted));
}


vhq_result_t ScheduleAction(operation_t *operation,
                            term_act_content_t *action_content, int comm_id,
                            int message_id, srv_msg_type_t srv_msg_type,
                            srv_op_type_t srv_op_type,
                            operation_set_event_t **op_set_events,
                            uint32 *num_events_extracted)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_GENERAL_ERROR;
  term_act_parms action_parms;

  dbg_msg("%s: extracting term_action events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in ul_file_event array */
  memcpy(&action_parms.operation, operation, sizeof(operation_t));
  memcpy(&action_parms.term_act_content, action_content,
         sizeof(term_act_content_t));

  /* Setup the rest of parameters */
  action_parms.comm_id = comm_id;
  action_parms.message_id = message_id;
  action_parms.srv_msg_type = srv_msg_type;
  action_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  dbg_msg(
      "%s: Scheduling terminal action Event - pCbData = &action_parms = 0x%08x\n",
      __FUNCTION__, &action_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbTerminalAction;
  (*op_set_events)[*num_events_extracted].opData = malloc(sizeof(action_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &action_parms,
           sizeof(action_parms));
    (*op_set_events)[*num_events_extracted].opDataSize = sizeof(action_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t ProcessTermActOp(operation_t *operation,
                                     xmlNode *operation_element, int comm_id,
                                     int message_id,
                                     srv_msg_type_t srv_msg_type,
                                     srv_op_type_t srv_op_type,
                                     operation_set_event_t **op_set_events,
                                     uint32 *num_events_extracted)
{
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_GENERAL_ERROR;
  xmlNode *term_act_node;
  term_act_content_t action_content;

  memset(&action_content, 0, sizeof(term_act_content_t));

  /* Get the filename */
  term_act_node = GetNodeByName(operation_element,
  VHQ_XML_TERM_ACTION_NODE_TAG);
  if (term_act_node)
  {
    char *action_type_str = GetStrAttrFromNode(term_act_node,
    VHQ_XML_TERM_ACTION_TYPE);

    dbg_msg("%s: Got terminal action node - reading attributes\n",
            __FUNCTION__);
    if (!action_type_str
        || !ConvertActionType(action_type_str, &action_content.action))
    {
      dbg_msg("%s: Could not get terminal action type\n", __FUNCTION__);
    }
    xmlFree(action_type_str);

  }
  else
    log_err("%s ERROR: Could not get terminal action node\n", __FUNCTION__);

  action_content.op_type = OPERATION_TERMINAL_ACTION;

  if (action_content.action == TERM_ACTION_SET_CLOCK)
  {
    xmlNode *set_clock_parm_node;
    char *pszTmpBuffer = NULL;
    /* Get the SetClock Parameters Node */
    set_clock_parm_node = GetNodeByName(
        operation_element, VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS);

    /* Get the new_clock_time */
    GetIntAttrFromNode(set_clock_parm_node,
    VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_TIME,
                       (int*) &action_content.set_clock_time);
    GetIntAttrFromNode(set_clock_parm_node,
    VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_UTCTIME,
                       (int*) &action_content.set_clock_utc_time);
    pszTmpBuffer = GetStrAttrFromNode(
        set_clock_parm_node, VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_TZ);
    if (pszTmpBuffer)
    {
      snprintf(action_content.tz, sizeof(action_content.tz), "%s",
               pszTmpBuffer);
      xmlFree(pszTmpBuffer);
      pszTmpBuffer = NULL;
    }
    /* Store the time this operation was received since we may not actually run this operation for a while
     (especially on devices like e315 which can get undocked before we run this) */
    action_content.action_receive_time = linux_time(NULL);
  }

  log_dbg("\n\n%s: Action Type = %d\n", __FUNCTION__, action_content.action);

  operation->Content = (void*) &action_content;

  dbg_msg("%s: Calling ScheduleAction()\n", __FUNCTION__);
  ret_val = ScheduleAction(operation, &action_content, comm_id, message_id,
                           srv_msg_type, srv_op_type, op_set_events,
                           num_events_extracted);

  return ret_val;
}


static vhq_result_t ProcessTermActOp_New(term_action_t action,
                                         operation_t *operation,
                                         xmlNode *operation_element,
                                         int comm_id, int message_id,
                                         srv_msg_type_t srv_msg_type,
                                         srv_op_type_t srv_op_type,
                                         operation_set_event_t **op_set_events,
                                         uint32 *num_events_extracted)
{
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_GENERAL_ERROR;
  term_act_content_t action_content;

  memset(&action_content, 0, sizeof(term_act_content_t));

  /* Setup the action content */
  action_content.action = action;
  action_content.op_type = operation->OpIdentifier;

  if (action_content.action == TERM_ACTION_SET_CLOCK)
  {
    xmlNode *set_clock_parm_node;
    char *pszTmpBuffer = NULL;
    /* Get the SetClock Parameters Node */
    set_clock_parm_node = GetNodeByName(operation_element,
    VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK);

    /* Get the new_clock_time */
    GetIntAttrFromNode(set_clock_parm_node,
    VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_TIME,
                       (int*) &action_content.set_clock_time);
    GetIntAttrFromNode(set_clock_parm_node,
    VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_UTCTIME,
                       (int*) &action_content.set_clock_utc_time);
    pszTmpBuffer = GetStrAttrFromNode(
        set_clock_parm_node, VHQ_XML_TERM_ACTION_TYPE_SET_CLOCK_PARMS_TZ);
    if (pszTmpBuffer)
    {
      snprintf(action_content.tz, sizeof(action_content.tz), "%s",
               pszTmpBuffer);
      xmlFree(pszTmpBuffer);
      pszTmpBuffer = NULL;
    }
    /* Store the time this operation was received since we may not actually run this operation for a while
     (especially on devices like e315 which can get undocked before we run this) */
    action_content.action_receive_time = linux_time(NULL);
  }

  log_dbg("\n\n%s: Action Type = %d\n", __FUNCTION__, action_content.action);

  operation->Content = (void*) &action_content;

  ret_val = ScheduleAction(operation, &action_content, comm_id, message_id,
                           srv_msg_type, srv_op_type, op_set_events,
                           num_events_extracted);

  return ret_val;
}


vhq_result_t ScheduleAppAction(operation_t *operation,
                               app_action_content_t *app_action_content,
                               int comm_id, int message_id,
                               srv_msg_type_t srv_msg_type,
                               srv_op_type_t srv_op_type,
                               operation_set_event_t **op_set_events,
                               uint32 *num_events_extracted)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_APP_ACTION_ERROR;
  app_action_parms _app_action_parms;

  dbg_msg("%s: extracting app_action events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in app_action parameters */
  memcpy(&_app_action_parms.operation, operation, sizeof(operation_t));
  memcpy(&_app_action_parms.app_action_content, app_action_content,
         sizeof(app_action_content_t));

  /* Setup the rest of parameters */
  _app_action_parms.comm_id = comm_id;
  _app_action_parms.message_id = message_id;
  _app_action_parms.srv_msg_type = srv_msg_type;
  _app_action_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  log_dbg("%s: Scheduling app_action Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_app_action_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbAppActionProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_app_action_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_app_action_parms,
           sizeof(_app_action_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_app_action_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}

static vhq_result_t ProcessAppActionOp(operation_t *operation,
                                       xmlNode *operation_element, int comm_id,
                                       int message_id,
                                       srv_msg_type_t srv_msg_type,
                                       srv_op_type_t srv_op_type,
                                       operation_set_event_t **op_set_events,
                                       uint32 *num_events_extracted)
{
  xmlNode *app_action_node;
  app_action_content_t app_action_content;

  /* Clear the content struct */
  memset(&app_action_content, 0, sizeof(app_action_content));

  /* Get the Action Node */
  app_action_node = GetNodeByName(operation_element,
  VHQ_XML_APP_ACTION_OPERATION_TAG);
  if (app_action_node)
  {
    char *action_str;

    action_str = GetStrAttrFromNode(app_action_node,
    VHQ_XML_APP_ACTION_OPERATION_ACTION_TAG);
    if (action_str)
    {
      ConvertAppActionType(action_str, &app_action_content.AppAction);
    }
    xmlFree(action_str);
  }

  dbg_msg("\n\n%s: App Action = %d\n", __FUNCTION__,
          app_action_content.AppAction);

  operation->Content = (void*) &app_action_content;

  return (ScheduleAppAction(operation, &app_action_content, comm_id, message_id,
                            srv_msg_type, srv_op_type, op_set_events,
                            num_events_extracted));
}


vhq_result_t ScheduleDeleteFile(operation_t *operation,
                                del_file_content_t *del_file_content,
                                int comm_id, int message_id,
                                srv_msg_type_t srv_msg_type,
                                srv_op_type_t srv_op_type,
                                operation_set_event_t **op_set_events,
                                uint32 *num_events_extracted)
{
  del_file_parms _del_file_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_DEL_FILE_ERROR;

  dbg_msg("%s: extracting del_file events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in del_file parameters */
  memcpy(&_del_file_parms.operation, operation, sizeof(operation_t));
  memcpy(&_del_file_parms.del_file_content, del_file_content,
         sizeof(del_file_content_t));

  /* Setup the rest of parameters */
  _del_file_parms.comm_id = comm_id;
  _del_file_parms.message_id = message_id;
  _del_file_parms.srv_msg_type = srv_msg_type;
  _del_file_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  log_dbg("%s: Scheduling del_file Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_del_file_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbDelFileProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_del_file_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_del_file_parms,
           sizeof(_del_file_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_del_file_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t ProcessDeleteFileOp(operation_t *operation,
                                        xmlNode *operation_element, int comm_id,
                                        int message_id,
                                        srv_msg_type_t srv_msg_type,
                                        srv_op_type_t srv_op_type,
                                        operation_set_event_t **op_set_events,
                                        uint32 *num_events_extracted)
{
  xmlNode *del_file_node;
  xmlNode *del_file_parms_node;
  del_file_content_t del_file_content;

  /* Clear the content struct */
  memset(&del_file_content, 0, sizeof(del_file_content));

  /* Get the DeleteFile Node */
  del_file_node = GetNodeByName(operation_element,
  VHQ_XML_DELETE_FILE_OPERATION_TAG);
  if (del_file_node)
  {
    char *receiver_str;

    receiver_str = GetStrAttrFromNode(
        del_file_node, VHQ_XML_DELETE_FILE_OPERATION_RECEIVER_TAG);
    if (receiver_str)
    {
      strcpy(del_file_content.receiver, receiver_str);
    }
    xmlFree(receiver_str);
  }

  /* Get the DeleteFileParameters Node */
  del_file_parms_node = GetNodeByName(del_file_node,
  VHQ_XML_DELETE_FILE_OPERATION_PARMS_TAG);
  if (del_file_parms_node)
  {
    char *filename_str;

    filename_str = GetStrAttrFromNode(
        del_file_parms_node, VHQ_XML_DELETE_FILE_OPERATION_FILENAME_TAG);
    if (filename_str)
    {
      strcpy(del_file_content.file_name, filename_str);
    }
    xmlFree(filename_str);
  }

  log_dbg("\n\n%s: Delete File Name = %s - Receiver = %s\n", __FUNCTION__,
          del_file_content.file_name, del_file_content.receiver);

  operation->Content = (void*) &del_file_content;

  return (ScheduleDeleteFile(operation, &del_file_content, comm_id, message_id,
                             srv_msg_type, srv_op_type, op_set_events,
                             num_events_extracted));
}

vhq_result_t ScheduleCallback(operation_t *operation, int comm_id,
                              int message_id, srv_msg_type_t srv_msg_type,
                              srv_op_type_t srv_op_type,
                              operation_set_event_t **op_set_events,
                              uint32 *num_events_extracted)
{
  heartbeat_parms _heartbeat_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_CALLBACK_ERROR;

  UNUSED(comm_id);
  UNUSED(message_id);
  UNUSED(srv_op_type);
  UNUSED(srv_msg_type);

  dbg_msg("%s: extracting callback events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in del_file parameters */
  memcpy(&_heartbeat_parms.operation, operation, sizeof(operation_t));

  /* Setup the rest of parameters */
  _heartbeat_parms.iFlags = 0;

  /* Schedule the event */
  log_dbg("%s: Scheduling callback Event - pCbData = &data_parms = 0x%08x\n",
          __FUNCTION__, &_heartbeat_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbHeartbeat;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_heartbeat_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &_heartbeat_parms,
           sizeof(_heartbeat_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_heartbeat_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}

static vhq_result_t ProcessCallbackOp(operation_t *operation,
                                      xmlNode *operation_element, int comm_id,
                                      int message_id,
                                      srv_msg_type_t srv_msg_type,
                                      srv_op_type_t srv_op_type,
                                      operation_set_event_t **op_set_events,
                                      uint32 *num_events_extracted)
{
  UNUSED(operation_element);

  dbg_msg("\n\n%s: Scheduling callback\n", __FUNCTION__);

  return (ScheduleCallback(operation, comm_id, message_id, srv_msg_type,
                           srv_op_type, op_set_events, num_events_extracted));
}


vhq_result_t ScheduleGetParamUpdates(operation_t *operation, int comm_id,
                                     int message_id,
                                     srv_msg_type_t srv_msg_type,
                                     srv_op_type_t srv_op_type,
                                     operation_set_event_t **op_set_events,
                                     uint32 *num_events_extracted)
{
  /* piggyback on device_event_parms here since it has everything we need */
  device_event_parms _get_param_update_parms;
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_CALLBACK_ERROR;

  dbg_msg("%s: extracting callback events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in del_file parameters */
  memcpy(&_get_param_update_parms.operation, operation, sizeof(operation_t));

  /* Setup the rest of parameters */
  _get_param_update_parms.comm_id = comm_id;
  _get_param_update_parms.message_id = message_id;
  _get_param_update_parms.srv_msg_type = srv_msg_type;
  _get_param_update_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  log_dbg(
      "%s: Scheduling GetParameterUpdate Event - pCbData = &data_parms = 0x%08x\n",
      __FUNCTION__, &_get_param_update_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbGetParamUpdatesProcessor;
  (*op_set_events)[*num_events_extracted].opData = malloc(
      sizeof(_get_param_update_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData,
           &_get_param_update_parms, sizeof(_get_param_update_parms));
    (*op_set_events)[*num_events_extracted].opDataSize =
        sizeof(_get_param_update_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t ProcessGetParamUpdatesOp(
    operation_t *operation, xmlNode *operation_element, int comm_id,
    int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type,
    operation_set_event_t **op_set_events, uint32 *num_events_extracted)
{
  UNUSED(operation_element);

  log_dbg("\n\n%s: Scheduling GetParameterUpdates\n", __FUNCTION__);

  return (ScheduleGetParamUpdates(operation, comm_id, message_id, srv_msg_type,
                                  srv_op_type, op_set_events,
                                  num_events_extracted));
}


vhq_result_t ScheduleUpload(operation_t *operation,
                            upload_file_content_t *ul_file_content, int comm_id,
                            int message_id, srv_msg_type_t srv_msg_type,
                            srv_op_type_t srv_op_type,
                            operation_set_event_t **op_set_events,
                            uint32 *num_events_extracted)
{
  vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_GENERAL_ERROR;
  uploader_parms ul_parms;

  dbg_msg("%s: extracting ul_file events\n", __FUNCTION__);

  /* We can't leave any pointers to the stack so copy the structures to
   the storage in ul_file_event array */
  memcpy(&ul_parms.operation, operation, sizeof(operation_t));
  memcpy(&ul_parms.ul_file_content, ul_file_content,
         sizeof(upload_file_content_t));

  /* Setup the rest of parameters */
  ul_parms.comm_id = comm_id;
  ul_parms.message_id = message_id;
  ul_parms.srv_msg_type = srv_msg_type;
  ul_parms.srv_op_type = srv_op_type;

  /* Schedule the event */
  dbg_notice(
      "%s: Scheduling uploader Event - pCbData = &uploader_parms = 0x%08x\n",
      __FUNCTION__, &ul_parms);

  (*op_set_events)[*num_events_extracted].opCbType = cbFileUploader;
  (*op_set_events)[*num_events_extracted].opData = malloc(sizeof(ul_parms));
  if ((*op_set_events)[*num_events_extracted].opData)
  {
    memcpy((*op_set_events)[*num_events_extracted].opData, &ul_parms,
           sizeof(ul_parms));
    (*op_set_events)[*num_events_extracted].opDataSize = sizeof(ul_parms);
    (*num_events_extracted)++;
    ret_val = VHQ_SUCCESS;
  }
  else
    ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;

  return ret_val;
}


static vhq_result_t ProcessUploadFileOp(operation_t *operation,
                                        xmlNode *operation_element, int comm_id,
                                        int message_id,
                                        srv_msg_type_t srv_msg_type,
                                        srv_op_type_t srv_op_type,
                                        operation_set_event_t **op_set_events,
                                        uint32 *num_events_extracted)
{
  vhq_result_t ret_val;
  xmlNode *upload_file_node;
  xmlNode *upload_parms_node;
  upload_file_content_t ul_file_content;

  /* Clear the ul file content */
  memset(&ul_file_content, 0, sizeof(upload_file_content_t));

  /* Get the filename */
  upload_file_node = GetNodeByName(operation_element, VHQ_XML_UL_FILE_NODE_TAG);
  if (upload_file_node)
  {
    char *ul_file = GetStrAttrFromNode(upload_file_node,
    VHQ_XML_UL_OPERATION_FILENAME);
    char *ul_type = GetStrAttrFromNode(upload_file_node,
    VHQ_XML_UL_OPERATION_TYPE);
    char *ul_method = GetStrAttrFromNode(upload_file_node,
    VHQ_XML_UL_OPERATION_METHOD);
    char *ul_compression = GetStrAttrFromNode(upload_file_node,
    VHQ_XML_UL_OPERATION_COMPRESSION);
    char *ul_receiver = GetStrAttrFromNode(upload_file_node,
    VHQ_XML_UL_OPERATION_RECEIVER);

    dbg_msg("%s: Got upload file node - reading attributes\n", __FUNCTION__);
    ConvertUploadFileType(ul_type, &ul_file_content.Type);
    xmlFree(ul_type);

    dbg_msg("%s: copying filename\n", __FUNCTION__);
    strcpy(ul_file_content.FileName, ul_file);
    xmlFree(ul_file);

    dbg_msg("%s: converting method %s\n", __FUNCTION__, ul_method);
    ConvertUploadFileMethod(ul_method, &ul_file_content.Method);
    xmlFree(ul_method);

    if (ul_compression)
      ConvertTrueFalse(ul_compression, &ul_file_content.CompressionEnabled);
    xmlFree(ul_compression);

    if (ul_receiver)
      strcpy(ul_file_content.Receiver, ul_receiver);
    xmlFree(ul_receiver);

  }
  else
    log_err("%s ERROR: Could not get upload file node\n", __FUNCTION__);

  /* Get the upload parameters */
  dbg_msg("%s: Reading Upload parameters\n", __FUNCTION__);
  upload_parms_node = GetNodeByName(operation_element,
  VHQ_XML_UL_PARMS_NODE_TAG);
  if (upload_parms_node)
  {
    char *ul_URL = GetStrAttrFromNode(upload_parms_node,
    VHQ_XML_UL_OPERATION_URL);
    char *ul_User = GetStrAttrFromNode(upload_parms_node,
    VHQ_XML_UL_OPERATION_FTP_USER);
    char *ul_PW = GetStrAttrFromNode(upload_parms_node,
    VHQ_XML_UL_OPERATION_FTP_PW);

    if (ul_URL)
    {
      strcpy(ul_file_content.URL, ul_URL);
      xmlFree(ul_URL);
    }

    if (ul_User)
    {
      strcpy(ul_file_content.User, ul_User);
      xmlFree(ul_User);
    }

    if (ul_PW)
    {
      strcpy(ul_file_content.PW, ul_PW);
      xmlFree(ul_PW);
    }

  }

  if (ul_file_content.Method == UPLOAD_METHOD_WEB_SERVICE)
  {
    xmlNode *web_service_parms_node;
    /* Get the Web service info */
    dbg_msg("%s: Reading Web service parameters\n", __FUNCTION__);
    web_service_parms_node = GetNodeByName(operation_element,
    VHQ_XML_UL_WS_PARMS_NODE_TAG);
    if (web_service_parms_node)
    {
      char *ul_URL = GetStrAttrFromNode(web_service_parms_node,
      VHQ_XML_UL_OPERATION_WS_ENDPOINT);
      char *ul_WebMethod = GetStrAttrFromNode(
          web_service_parms_node, VHQ_XML_UL_OPERATION_WS_WEB_METHOD);

      if (ul_URL != NULL)
      {
        strcpy(ul_file_content.URL, ul_URL);
        xmlFree(ul_URL);
      }

      strcpy(ul_file_content.WebMethod, ul_WebMethod);
      xmlFree(ul_WebMethod);

    }
  }

  if (ul_file_content.Type == UPLOAD_TYPE_DIR_LIST)
  {
    xmlNode *dir_list_parms_node;
    /* Get the Web service info */
    log_dbg("%s: Reading DirList parameters\n", __FUNCTION__);
    dir_list_parms_node = GetNodeByName(operation_element,
    VHQ_XML_UL_DIR_LIST_PARMS_NODE_TAG);
    if (dir_list_parms_node)
    {
      char *ul_dirlist_dir = GetStrAttrFromNode(
          dir_list_parms_node, VHQ_XML_UL_DIR_LIST_PARMS_DIRECTORY);
      strcpy(ul_file_content.FileName, ul_dirlist_dir);
      xmlFree(ul_dirlist_dir);
    }
  }

  dbg_msg("\n\n%s: UL Operation Type = %d\n", __FUNCTION__,
          ul_file_content.Type);
  dbg_msg("\n\n%s: UL Operation Filename = %s\n", __FUNCTION__,
          ul_file_content.FileName);
  dbg_msg("\n\n%s: UL Operation Method = %d\n", __FUNCTION__,
          ul_file_content.Method);
  dbg_msg("\tUL Operation URL = %s\n", ul_file_content.URL);

  operation->Content = (void*) &ul_file_content;

  ret_val = ScheduleUpload(operation, &ul_file_content, comm_id, message_id,
                           srv_msg_type, srv_op_type, op_set_events,
                           num_events_extracted);

  return ret_val;
}

static vhq_result_t ProcessCancelOp(operation_t *operation,
                                    xmlNode *operation_element, int comm_id,
                                    int message_id, srv_msg_type_t srv_msg_type,
                                    srv_op_type_t srv_op_type,
                                    operation_set_event_t **op_set_events,
                                    uint32 *num_events_extracted)
{
  xmlNode *cancel_op_node;

  UNUSED(op_set_events);
  UNUSED(num_events_extracted);

  /* Get the CancelOp Node */
  cancel_op_node = GetNodeByName(operation_element,
  VHQ_XML_CANCEL_OP_OPERATION_TAG);
  if (cancel_op_node)
  {
    xmlNode *id_node;

    id_node = GetNodeByName(cancel_op_node, VHQ_XML_OPERATION_SET_ID_TAG);
    if (id_node)
    {
      uint32 op_set_id = 0;
      xmlChar *op_set_id_str;

      op_set_id_str = xmlNodeGetContent(id_node);

      if (op_set_id_str)
      {
        dbg_msg("%s: Converting operation_set_id [%s] to integer\n",
                __FUNCTION__, (char* )op_set_id_str);
        op_set_id = atoi((char*) op_set_id_str);
        dbg_msg("%s: Converted operation_set_id to %d\n", __FUNCTION__,
                op_set_id);
        xmlFree(op_set_id_str);

        if (op_set_id)
        {
          int loc_srv_op_type = (int) srv_op_type;
          char *xmlCancelOpResponse;
          int cancelOpResponseLen;
          xmlDocPtr response_doc = NULL;
          xmlChar *data_p;
          vhq_result_t result;
          vhq_result_t create_result;

          log_dbg("%s: Calling CancelEventSetByOpId(%d)\n", __FUNCTION__,
                  op_set_id);
          result = CancelEventSetByOpId(op_set_id);

          create_result = CreateResponseXml(&response_doc, comm_id,
                                            operation->OpId, message_id,
                                            srv_msg_type, srv_op_type, TRUE);

          if (create_result == VHQ_SUCCESS)
          {
            xmlNode *response_root_element = xmlDocGetRootElement(response_doc);
            xmlNode *response_op_res_node = GetNodeByName(
                response_root_element, VHQ_XML_CONTENT_OP_RES_TAG);

            AddOperationResult(response_op_res_node, operation->OpId, result,
                               operation->OpSetId, operation->RecurId,
                               srv_op_type);
          }

          if (!FinalizeXMLDoc(response_doc, FALSE))
          {
            log_err("%s ERROR: Could not finalize XML response\n",
                    __FUNCTION__);

            /* We can free the XML doc now */
            xmlFreeDoc(response_doc);

            assert(0);
            return VHQ_SERVER_MGMT_PLAN_CANCEL_OP_ERROR;
          }

          log_dbg(
              "%s: CancelOp XML Validated - Converting to response char buffer\n",
              __FUNCTION__);

          PRINT_XML_DOC(__FUNCTION__, response_doc);

          /* Dump the tree to temporary output memory */
          xmlDocDumpFormatMemory(response_doc, &data_p, &cancelOpResponseLen,
                                 1);

          /* We will malloc the memory here, the caller is responsible for freeing it */
          dbg_msg("%s: malloc'ing %d bytes for response char buffer\n",
                  __FUNCTION__, cancelOpResponseLen + 1);
          xmlCancelOpResponse = malloc(cancelOpResponseLen + 1);

          if (xmlCancelOpResponse)
          {
            /* Copy the tree to memory buff and delete temporary memory */
            memset(xmlCancelOpResponse, 0, cancelOpResponseLen + 1);

            /* Copy the tree to memory buff and delete temporary memory */
            dbg_msg("%s: Copying converted XML to response char buffer\n",
                    __FUNCTION__);
            memcpy(xmlCancelOpResponse, (char*) data_p, cancelOpResponseLen);
            xmlFree(data_p);

            /* We can free the XML doc now */
            xmlFreeDoc(response_doc);
            response_doc = NULL;

            /* Use this to debug memory issues */
            xmlMemoryDump();

            PRINT_XML_DATA("ProcessCancelOp", xmlCancelOpResponse);

            dbg_msg(
                "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
                __FUNCTION__, cancelOpResponseLen);

            VHQManagerContactServer(&xmlCancelOpResponse, &cancelOpResponseLen,
            EVENT_ID_UNKNOWN,
                                    &comm_id, &message_id, &loc_srv_op_type,
                                    operation->OpId, TRUE,
                                    TRUE,
                                    FALSE);

            return VHQ_SUCCESS;
          }
          else
          {
            log_err("%s: FAILED to malloc %d bytes for response buffer\n",
                    __FUNCTION__, cancelOpResponseLen + 1);
            xmlFree(data_p);

            /* We can free the XML doc now */
            xmlFreeDoc(response_doc);
            response_doc = NULL;

            /* Use this to debug memory issues */
            xmlMemoryDump();
            return VHQ_SERVER_MGMT_PLAN_CANCEL_OP_ERROR;
          }
        }
      }
    }
  }

  return VHQ_SERVER_MGMT_PLAN_CANCEL_OP_ERROR;
}


void VHQXmlOperationProcessorInit(void)
{
  // this became a lot less interesting when the data moved into the schedule table
}


vhq_result_t ProcessOperation(xmlNode *operation_element,
                              xmlDocPtr *status_report_doc, int comm_id,
                              int message_id, srv_msg_type_t srv_msg_type,
                              uint32 op_set_id,
                              operation_set_event_t **op_set_events,
                              uint32 *num_events_extracted)
{
  int iReallocRetries;
  operation_t operation;
  char *op_identifier;
  char *op_version;
  char *op_id;
  char *op_handler;
  char *op_on_error;
  char *op_time;
  char *srv_op_type_str;
  char *new_op_set_mem;
  srv_op_type_t srv_op_type;
  struct tm local_time;
  vhq_result_t result = VHQ_SERVER_MGMT_PLAN_OPERATION_GENERAL_FAILURE;

  /* Clear the operation */
  memset(&operation, 0, sizeof(operation_t));

  /* Setup the OperationSetId field */
  operation.OpSetId = op_set_id;

  /* Convert the operation identifier into an enum */
  op_identifier = GetStrAttrFromNode(operation_element,
  VHQ_XML_OPERATION_NAME_TAG);
  if (!op_identifier
      || !ConvertOperationIdentifier(op_identifier, &operation.OpIdentifier))
  {
    xmlFree(op_identifier);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_IDENTIFIER_FAILURE;
  }
  else
    dbg_msg("%s: Operation Identifier %s converted to enum value %d\n",
            __FUNCTION__, op_identifier, operation.OpIdentifier);
  xmlFree(op_identifier);

  /* Get the operation version */
  op_version = GetStrAttrFromNode(operation_element, VHQ_XML_VERSION_TAG);
  if (op_version)
  {
    strcpy(operation.Version, op_version);
    xmlFree(op_version);
  }

  /* Get the operation ID */
  op_id = GetStrAttrFromNode(operation_element, VHQ_XML_OPERATION_ID_TAG);
  if (!op_id)
  {
    return VHQ_SERVER_MGMT_PLAN_OPERATION_ID_FAILURE;
  }
  strcpy(operation.OpId, op_id);
  xmlFree(op_id);

  /* Convert the operation handler into an enum */
  op_handler = GetStrAttrFromNode(operation_element,
  VHQ_XML_OPERATION_HANDLER_TAG);
  if (!op_handler || !ConvertOperationHandler(op_handler, &operation.OpHandler))
  {
    operation.OpHandler = DEFAULT_OP_HANDLER;
    log_warn("%s: Operation Handler not present - Using default value %d\n",
             __FUNCTION__, operation.OpHandler);
  }
  else
    dbg_msg("%s: Operation Handler %s converted to enum value %d\n",
            __FUNCTION__, op_handler, operation.OpHandler);
  xmlFree(op_handler);

  /* Convert the operation on error into an enum */
  op_on_error = GetStrAttrFromNode(operation_element,
  VHQ_XML_OPERATION_ON_ERROR_TAG);
  if (!op_on_error
      || !ConvertOperationOnError(op_on_error, &operation.OpOnError))
  {
    operation.OpOnError = DEFAULT_OP_ON_ERROR;
    log_warn("%s: Operation Handler not present - Using default value %d\n",
             __FUNCTION__, operation.OpHandler);
  }
  else
    dbg_msg("%s: Operation On Error %s converted to enum value %d\n",
            __FUNCTION__, op_on_error, operation.OpOnError);
  xmlFree(op_on_error);

  /* Convert the Operation pre-requisites */

  /* Convert the operation execution time */
  op_time = GetStrAttrFromNode(operation_element,
  VHQ_XML_OPERATION_EXEC_TIME_TAG);
  if (op_time)
  {
    operation.OpTime = (time_t) atol(op_time);
  }
  xmlFree(op_time);

  /* Convert the ServerOperationType */
  srv_op_type_str = GetStrAttrFromNode(operation_element,
  VHQ_XML_SRV_OP_TYPE_TAG);
  if (srv_op_type_str)
  {
    dbg_msg("%s: Converting %s to srv_op_type\n", __FUNCTION__,
            srv_op_type_str);
    if (!(ConvertSrvOpType(srv_op_type_str, &srv_op_type)))
    {
      srv_op_type = SRV_OP_TYPE_UNKNOWN;
      log_err("%s ERROR: Could not get Server Operation Type\n", __FUNCTION__);
    }
    dbg_msg("%s: ServerOperationType %s converted to enum value %d\n",
            __FUNCTION__, srv_op_type_str, srv_op_type);
    xmlFree(srv_op_type_str);
  }
  else
  {
    srv_op_type = SRV_OP_TYPE_UNKNOWN;
    log_err("%s: Could not find ServerOperationType in XML\n", __FUNCTION__);
  }

  if (srv_op_type != SRV_OP_TYPE_UNKNOWN)
  {
    dbg_msg("\n\n%s: Operation Identifier = %d\n", __FUNCTION__,
            operation.OpIdentifier);
    dbg_msg("\tOperation Version = %s\n", operation.Version);
    dbg_msg("\tOperation ID = %s\n", operation.OpId);
    dbg_msg("\tOperation Handler = %d\n", operation.OpHandler);
    dbg_msg("\tOperation On Error = %d\n", operation.OpOnError);
    dbg_msg("\tOperation Pre-Requisites = %d\n", operation.OpPreReq);
    if (linux_localtime(&operation.OpTime, &local_time))
      dbg_msg("\tOperation Execution Time = %s\n", tmtoa(&local_time));
    else
      dbg_msg("\tOperation Execution Time = %d\n", operation.OpTime);

    iReallocRetries = 0;
    do
    {
      new_op_set_mem = realloc(
          (*op_set_events),
          (((*num_events_extracted) + 1) * sizeof(operation_set_event_t)));
    }
    while (new_op_set_mem == 0 && errno == EINTR && iReallocRetries++ < 10);

    if (new_op_set_mem)
    {
      (*op_set_events) = (operation_set_event_t*) new_op_set_mem;
      memset(&(*op_set_events)[(*num_events_extracted)], 0,
             sizeof(operation_set_event_t));
    }
    else
    {
      /* out of memory! */
      log_err("%s: not enough memory (realloc returned NULL)\n", __FUNCTION__);
      return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
    }

    /* The content depends on the operation */
    switch (operation.OpIdentifier)
    {
      case OPERATION_DOWNLOAD_FILE:
      {
        if (0 == (g_uiSafemode & SKIP_DOWNLOAD))
          result = ProcessDownloadFileOp(&operation, operation_element, comm_id,
                                         message_id, srv_msg_type, srv_op_type,
                                         op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }

        break;
      }

      case OPERATION_GET_DATA:
      {
        if (0 == (g_uiSafemode & SKIP_GET_DATA))
          result = GetDeviceData(&operation, operation_element, comm_id,
                                 message_id, srv_msg_type, srv_op_type,
                                 op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_GET_DIAG_DATA:
      {
        if (0 == (g_uiSafemode & SKIP_GET_DIAG_DATA))
          result = GetDiagData(&operation, operation_element, comm_id,
                               message_id, srv_msg_type, srv_op_type,
                               op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_SET_DATA:
      {
        if (0 == (g_uiSafemode & SKIP_SET_DATA))
          result = SetDeviceData(&operation, operation_element, comm_id,
                                 message_id, srv_msg_type, srv_op_type,
                                 op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

        /* REVISIT (Mitch 3-8-2012): Need to add support for updating the server certificate */
      case OPERATION_SET_SERVER_CERT:
      {
        if (0 == (g_uiSafemode & SKIP_SET_CERT))
          result = SetServerCert(&operation, operation_element, comm_id,
                                 message_id, srv_msg_type, srv_op_type,
                                 op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_TERMINAL_ACTION:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp(&operation, operation_element, comm_id,
                                    message_id, srv_msg_type, srv_op_type,
                                    op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_UPLOAD_FILE:
      {
        if (0 == (g_uiSafemode & SKIP_UPLOAD))
          result = ProcessUploadFileOp(&operation, operation_element, comm_id,
                                       message_id, srv_msg_type, srv_op_type,
                                       op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_REBOOT:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp_New(TERM_ACTION_REBOOT, &operation,
                                        operation_element, comm_id, message_id,
                                        srv_msg_type, srv_op_type,
                                        op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_RESET_POS:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp_New(TERM_ACTION_RESET_POS, &operation,
                                        operation_element, comm_id, message_id,
                                        srv_msg_type, srv_op_type,
                                        op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_RESTART_APP:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp_New(TERM_ACTION_RESTART_APP, &operation,
                                        operation_element, comm_id, message_id,
                                        srv_msg_type, srv_op_type,
                                        op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_SET_CLOCK:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp_New(TERM_ACTION_SET_CLOCK, &operation,
                                        operation_element, comm_id, message_id,
                                        srv_msg_type, srv_op_type,
                                        op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_TS_RECALIBRATION:
      {
        if (0 == (g_uiSafemode & SKIP_TERMINAL_ACTION))
          result = ProcessTermActOp_New(TERM_ACTION_TS_RECALIBRATION,
                                        &operation, operation_element, comm_id,
                                        message_id, srv_msg_type, srv_op_type,
                                        op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_APP_ACTION:
      {
        if (0 == (g_uiSafemode & SKIP_APP_ACTION))
          result = ProcessAppActionOp(&operation, operation_element, comm_id,
                                      message_id, srv_msg_type, srv_op_type,
                                      op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_DELETE_FILE:
      {
        if (0 == (g_uiSafemode & SKIP_DEL_FILE))
          result = ProcessDeleteFileOp(&operation, operation_element, comm_id,
                                       message_id, srv_msg_type, srv_op_type,
                                       op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_CANCEL_OP:
      {
        if (0 == (g_uiSafemode & SKIP_CANCEL_OP))
          result = ProcessCancelOp(&operation, operation_element, comm_id,
                                   message_id, srv_msg_type, srv_op_type,
                                   op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_CALLBACK:
      {
        if (0 == (g_uiSafemode & SKIP_CALLBACK_OP))
          result = ProcessCallbackOp(&operation, operation_element, comm_id,
                                     message_id, srv_msg_type, srv_op_type,
                                     op_set_events, num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

      case OPERATION_GET_PARAM_UPDATES:
      {
        if (0 == (g_uiSafemode & SKIP_GET_PARAM_UPDATES_OP))
          result = ProcessGetParamUpdatesOp(&operation, operation_element,
                                            comm_id, message_id, srv_msg_type,
                                            srv_op_type, op_set_events,
                                            num_events_extracted);
        else
        {
          dbg_msg("Skipping %d code\n", operation.OpIdentifier);
          log_dbg("Skipping %d code\n", operation.OpIdentifier);
        }
        break;
      }

        /* REVISIT (Mitch 3-8-2012): Need to add support for running remote diagnostic programs */

      default:
        dbg_notice("%s: bad operation.OpIdentifier, %d\n", __FUNCTION__,
                   operation.OpIdentifier);
        log_notice("%s: bad operation.OpIdentifier, %d\n", __FUNCTION__,
                   operation.OpIdentifier);
        assert(0)
        ;
    }
  }

  if (result != VHQ_SUCCESS)
  {
    vhq_result_t create_xml_result;
    xmlNode *response_root_element;
    xmlNode *response_op_res_node;

    create_xml_result = CreateResponseXml(status_report_doc, comm_id,
                                          operation.OpId, message_id,
                                          srv_msg_type, srv_op_type, TRUE);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);
    if (create_xml_result == VHQ_SUCCESS)
      AddOperationResult(response_op_res_node, operation.OpId, result,
                         operation.OpSetId, operation.RecurId, srv_op_type);
  }

  return result;
}


void SendFailureResponse(vhq_result_t failure, int comm_id, char *operation_id,
                         int message_id, srv_msg_type_t srv_msg_type,
                         srv_op_type_t srv_op_type, uint32 operation_set_id,
                         uint32 recur_id)
{
  char *xmlFailedResponse;
  int failureResponseLen;
  xmlDocPtr response_doc = NULL;
  xmlChar *data_p;
  vhq_result_t create_result;

  response_doc = NULL;
  create_result = CreateResponseXml(&response_doc, comm_id, operation_id,
                                    message_id, srv_msg_type, srv_op_type,
                                    TRUE);

  if (create_result == VHQ_SUCCESS)
  {
    xmlNode *response_root_element = xmlDocGetRootElement(response_doc);
    xmlNode *response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);

    AddOperationResult(response_op_res_node, operation_id, failure,
                       operation_set_id, recur_id, srv_op_type);
  }

  if (!FinalizeXMLDoc(response_doc, FALSE))
  {
    log_err("%s ERROR: Could not finalize Failure XML response\n",
            __FUNCTION__);
  }

  log_dbg(
      "%s: Failure Response XML Validated - Converting to response char buffer\n",
      __FUNCTION__);

  PRINT_XML_DOC(__FUNCTION__, response_doc);

  /* Dump the tree to temporary output memory */
  xmlDocDumpFormatMemory(response_doc, &data_p, &failureResponseLen, 1);

  /* We will malloc the memory here, the caller is responsible for freeing it */
  dbg_msg("%s: malloc'ing %d bytes for response char buffer\n", __FUNCTION__,
          failureResponseLen + 1);
  xmlFailedResponse = malloc(failureResponseLen + 1);

  if (xmlFailedResponse)
  {
    /* Copy the tree to memory buff and delete temporary memory */
    memset(xmlFailedResponse, 0, failureResponseLen + 1);

    /* Copy the tree to memory buff and delete temporary memory */
    dbg_msg("%s: Copying converted XML to response char buffer\n",
            __FUNCTION__);
    memcpy(xmlFailedResponse, (char*) data_p, failureResponseLen);

    PRINT_XML_DATA("SendFailureResponse", xmlFailedResponse);

    dbg_msg(
        "%s: Calling VHQManagerContactServer() - response length = %d bytes\n",
        __FUNCTION__, failureResponseLen);

    VHQManagerContactServer(&xmlFailedResponse, &failureResponseLen,
    EVENT_ID_UNKNOWN,
                            &comm_id, &message_id, &message_id, operation_id,
                            TRUE,
                            TRUE, FALSE);
  }
  else
  {
    log_err("%s: FAILURE allocating Failure Response buffer\n", __FUNCTION__);
  }

  xmlFree(data_p);

  /* We can free the XML doc now */
  xmlFreeDoc(response_doc);
  response_doc = NULL;

  /* Use this to debug memory issues */
  xmlMemoryDump();
}

void VHQXmlExtractProcessingInformation(const char *DeviceMessageXMLData,
                                        const char *ServerResponseXMLData,
                                        event_id_t event_id)
{
  char *file_name = NULL;
#if 0
  if ((event_set_id == EVENT_SET_ID_INVALID) || (event_id == EVENT_ID_INVALID) || (event_set_id == EVENT_SET_ID_UNKNOWN) || (event_id == EVENT_ID_UNKNOWN))
    return;
#endif
  file_name = mallocProcessingStatusFileName(event_id);
  if (file_name)
  {
    /* Extract MessageType from device message */
    if (DeviceMessageXMLData)
    {
      xmlDoc *doc = xmlReadMemory(DeviceMessageXMLData,
                                  strlen(DeviceMessageXMLData), "SrvMsg.xml",
                                  NULL,
                                  0);
      if (doc)
      {
        xmlNode *root_element = xmlDocGetRootElement(doc);
        xmlNode *header_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);
        char *message_type_attr = GetStrAttrFromNode(header_node,
        VHQ_XML_OP_TYPE_TAG);

        if (message_type_attr)
        {
          dbg_msg("%s: Found MessageType node - value = %s\n", __FUNCTION__,
                  message_type_attr);
          utility_PutenvFilename(file_name, "Information", VHQ_XML_OP_TYPE_TAG,
                                 message_type_attr);
          xmlFree(message_type_attr);
          message_type_attr = NULL;
        }
        xmlFreeDoc(doc);
        doc = NULL;
      }
    }
    /* Extract Status, ErrorId, AdditionalInformation from server message */
    if (ServerResponseXMLData)
    {
      xmlDoc *doc = xmlReadMemory(ServerResponseXMLData,
                                  strlen(ServerResponseXMLData), "SrvMsg.xml",
                                  NULL,
                                  0);
      if (doc)
      {
        xmlNode *root_element = xmlDocGetRootElement(doc);
        xmlNode *content_element = GetNodeByName(root_element,
        VHQ_XML_CONTENT_TAG);
        char *status_attr = GetStrAttrFromNode(content_element,
        VHQ_XML_CONTENT_STATUS_TAG);
        char *error_id_attr = GetStrAttrFromNode(content_element,
        VHQ_XML_CONTENT_ERROR_ID_TAG);
        char *add_information_attr = GetStrAttrFromNode(
            content_element, VHQ_XML_OP_RES_ADD_INFO_TAG);

        if (status_attr)
        {
          dbg_msg("%s: Found Status node - value = %s\n", __FUNCTION__,
                  status_attr);
          utility_PutenvFilename(file_name, "ServerStatus",
          VHQ_XML_CONTENT_STATUS_TAG,
                                 status_attr);
          xmlFree(status_attr);
          status_attr = NULL;
        }

        if (error_id_attr)
        {
          log_dbg("%s: Found ErrorId node - value = %s\n", __FUNCTION__,
                  error_id_attr);
          utility_PutenvFilename(file_name, "ServerStatus",
          VHQ_XML_CONTENT_ERROR_ID_TAG,
                                 error_id_attr);
          xmlFree(error_id_attr);
          error_id_attr = NULL;
        }

        if (add_information_attr)
        {
          log_dbg("%s: Found AdditionalInformation node - value = %s\n",
                  __FUNCTION__, add_information_attr);
          utility_PutenvFilename(file_name, "ServerStatus",
          VHQ_XML_OP_RES_ADD_INFO_TAG,
                                 add_information_attr);
          xmlFree(add_information_attr);
          add_information_attr = NULL;
        }
        xmlFreeDoc(doc);
        doc = NULL;
      }
    }

    free(file_name);
  }
}

void VHQXmlExtractServerError(const char *XMLData, int XMLDataSize, char *error,
                              unsigned int error_size)
{
  char *error_id_attr;
  xmlDoc *doc = NULL;
  xmlNode *root_element = NULL;
  xmlNode *content_element = NULL;

  if (!XMLData || !error || !error_size)
    return;

  doc = xmlReadMemory(XMLData, XMLDataSize, "SrvMsg.xml", NULL, 0);
  root_element = xmlDocGetRootElement(doc);
  content_element = GetNodeByName(root_element, VHQ_XML_CONTENT_TAG);
  error_id_attr = GetStrAttrFromNode(content_element,
  VHQ_XML_CONTENT_ERROR_ID_TAG);

  snprintf(error, error_size, "%s", error_id_attr ? error_id_attr : "NULL");

  if (error_id_attr)
  {
    xmlFree(error_id_attr);
    error_id_attr = NULL;
  }
  xmlFreeDoc(doc);
  doc = NULL;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
