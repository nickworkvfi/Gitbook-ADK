---
title: tmsagt/src/VHQXmlPackager/VHQXmlPackager.c

---

# tmsagt/src/VHQXmlPackager/VHQXmlPackager.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[XMLKeyExchangeCreate](_v_h_q_xml_packager_8c.md#function-xmlkeyexchangecreate)**(xmlDocPtr doc, int comm_id, uint32 message_id) |
| bool | **[XMLHeartbeatCreate](_v_h_q_xml_packager_8c.md#function-xmlheartbeatcreate)**(xmlDocPtr doc, int comm_id, uint32 message_id, int iFlags) |
| bool | **[XMLEventCreate](_v_h_q_xml_packager_8c.md#function-xmleventcreate)**(xmlDocPtr doc, int comm_id, uint32 message_id, device_event_content_t * device_event_content) |
| bool | **[XMLUpdateCreate](_v_h_q_xml_packager_8c.md#function-xmlupdatecreate)**(xmlDocPtr doc, int comm_id, uint32 message_id, char * update_type, char * sw_ref_no, char * reference) |
| vhq_result_t | **[VHQXmlProcessManagementPlan](_v_h_q_xml_packager_8c.md#function-vhqxmlprocessmanagementplan)**(xmlNode * root_element, xmlDocPtr * status_report_doc, int * cur_comm_id, uint32 * srv_message_id, bool isKeyExchange) |
| vhq_result_t | **[VHQXmlProcessServerResponse](_v_h_q_xml_packager_8c.md#function-vhqxmlprocessserverresponse)**(xmlNode * root_element, xmlDocPtr * status_report_doc, int * cur_comm_id, uint32 * srv_message_id, const char * operation_id, bool close_comm_id) |
| vhq_result_t | **[get_server_response_content](_v_h_q_xml_packager_8c.md#function-get-server-response-content)**(xmlNode * content_element, char * error_id, int error_id_len, char * additional_info, int additional_info_len) |
| vhq_result_t | **[parse_management_plan_operations](_v_h_q_xml_packager_8c.md#function-parse-management-plan-operations)**(xmlNode * operation_set_element, xmlDocPtr * status_report_doc, int comm_id, int message_id, srv_msg_type_t srv_msg_type, operation_set_event_t ** op_set_events, uint32 * num_events_extracted) |
| vhq_result_t | **[CreateMPAckResponseXml](_v_h_q_xml_packager_8c.md#function-creatempackresponsexml)**(xmlDocPtr * status_report_doc, int comm_id, int message_id, uint32 * OpSetAckArray, uint16 NumOpSetAcks, bool is_cancel_operation) |
| void | **[_AddAppCustomParmsToIdentifier](_v_h_q_xml_packager_8c.md#function--addappcustomparmstoidentifier)**(xmlNodePtr HeaderNode, xmlNodePtr IdentifierNode, char * op_type) |
| uint32 | **[VHQXmlSearch_OperationSetId_by_OperationId](_v_h_q_xml_packager_8c.md#function-vhqxmlsearch-operationsetid-by-operationid)**(xmlNode * op_sets_node, const char * OpId) |
| void | **[AddBatteryInfo](_v_h_q_xml_packager_8c.md#function-addbatteryinfo)**(xmlNodePtr ParentNode) |
| void | **[AddComStatus](_v_h_q_xml_packager_8c.md#function-addcomstatus)**(xmlNodePtr parent_node, struct comm_s * port, const char * com_name) |
| void | **[XMLHeaderCreate](_v_h_q_xml_packager_8c.md#function-xmlheadercreate)**(xmlDocPtr doc, xmlNodePtr * p_root_node, char * op_type, int comm_id, uint32 message_id) |
| time_t | **[calc_expiration_date](_v_h_q_xml_packager_8c.md#function-calc-expiration-date)**(time_t exec_time, uint32 recur_count, uint32 recur_per_value, recur_unit_t recur_per_unit) |
| bool | **[OpSetMeetsPreDownloadReq](_v_h_q_xml_packager_8c.md#function-opsetmeetspredownloadreq)**(operation_set_event_t * OpSetEvents, uint32 NumEvents) |
| void | **[ResetServerNONCE](_v_h_q_xml_packager_8c.md#function-resetservernonce)**(void ) |
| void | **[ClearOpSetAckArray](_v_h_q_xml_packager_8c.md#function-clearopsetackarray)**(void ) |
| void | **[AddOpSetAck](_v_h_q_xml_packager_8c.md#function-addopsetack)**(uint32 OpSetId) |
| void | **[VHQXmlPackagerInit](_v_h_q_xml_packager_8c.md#function-vhqxmlpackagerinit)**(void ) |
| int | **[VHQXmlPackageCreate](_v_h_q_xml_packager_8c.md#function-vhqxmlpackagecreate)**(vhq_xml_operation_t operation, char ** XMLData, event_data_t * event_data) |
| vhq_result_t | **[VHQXmlProcessServerMessage](_v_h_q_xml_packager_8c.md#function-vhqxmlprocessservermessage)**(const char * XMLData, int XMLDataSize, int * comm_id, uint32 * srv_message_id, char ** XMLResponse, int * XMLResponseLen, const char * operation_id, bool close_comm_id, bool isKeyExchange) |
| int | **[VHQXmlCreateErrorResponse](_v_h_q_xml_packager_8c.md#function-vhqxmlcreateerrorresponse)**(xmlDocPtr server_doc, char ** XMLData, vhq_result_t result, int * cur_comm_id, uint32 * srv_message_id) |
| int | **[VHQXmlCreateDownloadResponse](_v_h_q_xml_packager_8c.md#function-vhqxmlcreatedownloadresponse)**(char ** XMLData, int comm_id, int message_id, char * operation_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, vhq_result_t result, uint32 operation_set_id, uint32 recur_id, char * additional_info, uint32 dl_duration, uint32 dl_attempts) |
| int | **[VHQXmlCreateUploadResponse](_v_h_q_xml_packager_8c.md#function-vhqxmlcreateuploadresponse)**(char ** XMLData, int comm_id, int message_id, uint32 operation_set_id, char * operation_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, uint32 recur_id, vhq_result_t result, char * local_filename, char * ul_filename, upload_type_t ul_tpye, upload_file_type_t ul_file_type, xmlDocPtr * response_doc_p) |
| bool | **[ValidateXml](_v_h_q_xml_packager_8c.md#function-validatexml)**(xmlDocPtr doc_p) |
| bool | **[XMLStatusReportorMPAckCreate](_v_h_q_xml_packager_8c.md#function-xmlstatusreportormpackcreate)**(xmlDocPtr doc, int comm_id, uint32 message_id, bool is_status) |
| xmlNode * | **[AddOperationResult](_v_h_q_xml_packager_8c.md#function-addoperationresult)**(xmlNode * op_results_node, char * op_id, vhq_result_t result, uint32 operation_set_id, uint32 recur_id, srv_op_type_t srv_op_type) |
| vhq_result_t | **[CreateResponseXml](_v_h_q_xml_packager_8c.md#function-createresponsexml)**(xmlDocPtr * status_report_doc, int comm_id, char * operation_id, int message_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, bool create_op_res_node) |
| bool | **[XMLGenerateSignature](_v_h_q_xml_packager_8c.md#function-xmlgeneratesignature)**(xmlDocPtr doc, unsigned char * sigbuf, uint32 sigbuf_size) |
| vhq_result_t | **[XMLVerifySignature](_v_h_q_xml_packager_8c.md#function-xmlverifysignature)**(xmlDocPtr doc) |
| int | **[VHQXmlUpdateNonce](_v_h_q_xml_packager_8c.md#function-vhqxmlupdatenonce)**(char * XMLData, int XMLDataSize, char ** XMLResponse, bool Validate) |
| bool | **[FinalizeXMLDoc](_v_h_q_xml_packager_8c.md#function-finalizexmldoc)**(xmlDocPtr XML_doc_p, bool final_update) |
| int | **[SaveXMLDoc](_v_h_q_xml_packager_8c.md#function-savexmldoc)**(xmlDocPtr XMLDoc, char * filename) |
| void | **[RemoveXMLDoc](_v_h_q_xml_packager_8c.md#function-removexmldoc)**(char * filename) |
| xmlDocPtr | **[RestoreXMLDoc](_v_h_q_xml_packager_8c.md#function-restorexmldoc)**(char * filename) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| customAppInfo_t[TMS_MAX_REGISTERED_APPS] | **[customAppInfo](_v_h_q_xml_packager_8c.md#variable-customappinfo)**  |
| pthread_mutex_t | **[appInfoMutex](_v_h_q_xml_packager_8c.md#variable-appinfomutex)**  |
| operation_set_event_t * | **[op_set_events](_v_h_q_xml_packager_8c.md#variable-op-set-events)**  |
| operation_set_event_t * | **[op_set_install_events](_v_h_q_xml_packager_8c.md#variable-op-set-install-events)**  |
| launch_downloader_parms * | **[install_downloader_parms](_v_h_q_xml_packager_8c.md#variable-install-downloader-parms)**  |
| operation_set_event_t * | **[op_set_expiring_events](_v_h_q_xml_packager_8c.md#variable-op-set-expiring-events)**  |
| launch_downloader_parms * | **[expiring_downloader_parms](_v_h_q_xml_packager_8c.md#variable-expiring-downloader-parms)**  |
| long long int | **[last_server_nonce](_v_h_q_xml_packager_8c.md#variable-last-server-nonce)**  |
| uint32[MAX_TOTAL_EVENTS] | **[OpSetAckArray](_v_h_q_xml_packager_8c.md#variable-opsetackarray)**  |
| uint16 | **[NumOpSetAcks](_v_h_q_xml_packager_8c.md#variable-numopsetacks)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[LIBXML_SCHEMAS_ENABLED](_v_h_q_xml_packager_8c.md#define-libxml-schemas-enabled)**  |
|  | **[COMM_MESSAGE_ID_CHECKING](_v_h_q_xml_packager_8c.md#define-comm-message-id-checking)**  |
|  | **[NONCE_CHECKING](_v_h_q_xml_packager_8c.md#define-nonce-checking)**  |
|  | **[ENABLE_SIGNATURE_VALIDATION](_v_h_q_xml_packager_8c.md#define-enable-signature-validation)**  |
|  | **[XSDFileName1_](_v_h_q_xml_packager_8c.md#define-xsdfilename1-)**(x)  |
|  | **[XSDFileName_](_v_h_q_xml_packager_8c.md#define-xsdfilename-)**(x)  |
|  | **[XSDFileName](_v_h_q_xml_packager_8c.md#define-xsdfilename)**  |
|  | **[SETUP_LIBXML_FOR_MEMWATCH](_v_h_q_xml_packager_8c.md#define-setup-libxml-for-memwatch)**  |
|  | **[DEBUG_SIGNATURE_VALIDATION](_v_h_q_xml_packager_8c.md#define-debug-signature-validation)**  |

## Detailed Description


Main VHQ XML Packager operations 


## Functions Documentation

### function XMLKeyExchangeCreate

```cpp
static bool XMLKeyExchangeCreate(
    xmlDocPtr doc,
    int comm_id,
    uint32 message_id
)
```


**Parameters**: 

  * **doc** = root node for key exchange message doc - pointer to XML doc being created 
  * **comm_id** = communication ID message 
  * **message_id** = message ID of message


**Return**: 

  * TRUE, if message created successfully 
  * FALSE, if message not created. 


Debug Stuff Local definitions

This function creates the key exchange message for the device. 


### function XMLHeartbeatCreate

```cpp
static bool XMLHeartbeatCreate(
    xmlDocPtr doc,
    int comm_id,
    uint32 message_id,
    int iFlags
)
```


**Parameters**: 

  * **[doc]** doc = root node for ket exchange message 
  * **comm_id** = communication ID message 
  * **message_id** = meesage ID of message


**Return**: 

  * TRUE, if message created successfully 
  * FALSE, if message not created. 


This function creates the heartbeat message for the device. 


### function XMLEventCreate

```cpp
static bool XMLEventCreate(
    xmlDocPtr doc,
    int comm_id,
    uint32 message_id,
    device_event_content_t * device_event_content
)
```


**Parameters**: 

  * **doc** = Pointer to XML doc being created 
  * **comm_id** = communication ID message 
  * **message_id** = message ID of message 
  * **event_mask** = event mask 
  * **appName** = Application name. 
  * **severity** = severity of the event. 
  * **details** = optional details about event sent to server 
  * **param_update_info** = pointer to parameter update details


**Return**: 

  * TRUE, if message created successfully 
  * FALSE, if message not created. 


This function creates the xml document to send an [Event](struct_event.md) to server. 


### function XMLUpdateCreate

```cpp
static bool XMLUpdateCreate(
    xmlDocPtr doc,
    int comm_id,
    uint32 message_id,
    char * update_type,
    char * sw_ref_no,
    char * reference
)
```


**Parameters**: 

  * **doc** = Pointer to XML doc being created 
  * **comm_id** = communication ID message 
  * **message_id** = message ID of message 
  * **update_type** = Update type 
  * **sw_ref_no** = Software Reference number 
  * **reference** = Reference


**Return**: 

  * TRUE, if message created successfully 
  * FALSE, if message not created. 


This function creates the xml document to send an Get Update Request to server. 


### function VHQXmlProcessManagementPlan

```cpp
static vhq_result_t VHQXmlProcessManagementPlan(
    xmlNode * root_element,
    xmlDocPtr * status_report_doc,
    int * cur_comm_id,
    uint32 * srv_message_id,
    bool isKeyExchange
)
```


**Parameters**: 

  * **root_element** = root element of the xml node 
  * **status_report_doc** = pointer to xml doc to be created as response to server. 
  * **cur_comm_id** = communication ID of message 
  * **cur_message_id** = message ID, when we create messages, they start at message ID 1. 
  * **srv_message_id** = server message id 
  * **isKeyExchange** = TRUE, if message from server is a response for heartbeat


**Return**: vhq_result_t 

This function processes a management plan message. 


### function VHQXmlProcessServerResponse

```cpp
static vhq_result_t VHQXmlProcessServerResponse(
    xmlNode * root_element,
    xmlDocPtr * status_report_doc,
    int * cur_comm_id,
    uint32 * srv_message_id,
    const char * operation_id,
    bool close_comm_id
)
```


**Parameters**: 

  * **root_element** = root element of the xml node 
  * **status_report_doc** = pointer to xml doc to be created as response to server. 
  * **cur_comm_id** = communication ID of message 
  * **cur_message_id** = message ID, when we create messages, they start at message ID 1. 
  * **srv_message_id** = server message id 
  * **operation_id** = operation ID 
  * **close_comm_id** = to close communication ID


**Return**: vhq_result_t 

This function processes a server response message 


### function get_server_response_content

```cpp
static vhq_result_t get_server_response_content(
    xmlNode * content_element,
    char * error_id,
    int error_id_len,
    char * additional_info,
    int additional_info_len
)
```


**Parameters**: 

  * **content_element** = pointer to the content node of the response 
  * **error_id** = string to be filled in with the error id string 
  * **error_id_len** = length of passed in error_id string 
  * **additional_info** = string to be filled in with the additional info string 
  * **additional_info_len** = length of passed in additional_info string


**Return**: vhq_result_t,the result value read from the content 

This function extracts the server response content from the content node of the server response message 


### function parse_management_plan_operations

```cpp
static vhq_result_t parse_management_plan_operations(
    xmlNode * operation_set_element,
    xmlDocPtr * status_report_doc,
    int comm_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    operation_set_event_t ** op_set_events,
    uint32 * num_events_extracted
)
```


**Parameters**: 

  * **operation_set_element** = pointer to operation set node 
  * **status_report_doc** = pointer to xml doc to be created as response to server. 
  * **comm_id** = communication ID of message 
  * **message_id** = message ID 
  * **srv_msg_type** = server message id 
  * **op_set_events** = operation set event 
  * **num_events_extracted** = total number of events


**Return**: vhq_result_t 

This function parses the operations sent down in the management plan. 


### function CreateMPAckResponseXml

```cpp
static vhq_result_t CreateMPAckResponseXml(
    xmlDocPtr * status_report_doc,
    int comm_id,
    int message_id,
    uint32 * OpSetAckArray,
    uint16 NumOpSetAcks,
    bool is_cancel_operation
)
```


**Parameters**: 

  * **status_report_doc** = pointer to new xml doc created. 
  * **comm_id** = communication ID. 
  * **message_id** = message ID. 
  * **OpSetAckArray** = operation set array 
  * **NumOpSetAcks** = number of operation sets in operation set array. 
  * **is_cancel_operation** = MP is cancel operation, no acknowledgment needed.


**Return**: VHQ_SUCCESS, if success 

This function creates management plan acknowledgement and adds OperationSet ID nodes. 


### function _AddAppCustomParmsToIdentifier

```cpp
static void _AddAppCustomParmsToIdentifier(
    xmlNodePtr HeaderNode,
    xmlNodePtr IdentifierNode,
    char * op_type
)
```


**Parameters**: 

  * **HeaderNode** = header node 
  * **IdentifierNode** = node to which custom parameters should be added.


**Return**: void 

Local functions

This function adds application custom parameter information.Terminal ID is special and can just be added as an attribute.If we don't find the DeviceId in parameter list, we need to get it from the backup source. 


### function VHQXmlSearch_OperationSetId_by_OperationId

```cpp
static uint32 VHQXmlSearch_OperationSetId_by_OperationId(
    xmlNode * op_sets_node,
    const char * OpId
)
```


**Parameters**: 

  * **op_sets_node** = pointer to operation set XML node. 
  * **OpId** = pointer to string which consists of requested OperationId.


**Return**: integer representation of OperationSetId; 0 if no founded 

This function search through all OperationSets to find correct one which consists of Operation with required OperationId. 


### function AddBatteryInfo

```cpp
void AddBatteryInfo(
    xmlNodePtr ParentNode
)
```


**Parameters**: 

  * **ParentNode** = pointer to parent node to which battery node should be created.


**Return**: void 

This function creates node containing battery details. 


### function AddComStatus

```cpp
static void AddComStatus(
    xmlNodePtr parent_node,
    struct comm_s * port,
    const char * com_name
)
```


### function XMLHeaderCreate

```cpp
static void XMLHeaderCreate(
    xmlDocPtr doc,
    xmlNodePtr * p_root_node,
    char * op_type,
    int comm_id,
    uint32 message_id
)
```


**Parameters**: 

  * **doc** = root node for key exchange message doc - pointer to XML doc being created 
  * **root_node** = XML Root Node 
  * **op_type** = Operation type 
  * **comm_id** = communication ID message 
  * **message_id** = message ID of message


**Return**: 

  * TRUE, if message created successfully 
  * FALSE, if message not created. 


This function creates the key exchange message for the device. 


### function calc_expiration_date

```cpp
static time_t calc_expiration_date(
    time_t exec_time,
    uint32 recur_count,
    uint32 recur_per_value,
    recur_unit_t recur_per_unit
)
```


**Parameters**: 

  * **exec_time** = the true UTC time_t value of the time sent by server 
  * **recur_count** = recurring count 
  * **recur_per_value** = recurring period value 
  * **recur_per_unit** = recurring unit- daily, weekly and wonthly recurrences are currently supported


**Return**: time_t calculated expiration time.It will return absolute number of seconds required for number of recurrences to be processed. 

This function calculates the expiration date of a recurring event. 


### function OpSetMeetsPreDownloadReq

```cpp
static bool OpSetMeetsPreDownloadReq(
    operation_set_event_t * OpSetEvents,
    uint32 NumEvents
)
```


**Parameters**: 

  * **OpSetEvents** = pointer to operation set events array. 
  * **NumEvents** = number of events in operation set events array.


**Return**: 

  * TRUE, if memory available in flash. 
  * FALSE, if memory not available/ error occurred. Or if Post install action reboot is set during Deployment mode 


This function checks for the pre download requirements for downloads. It calls function to checks for free flash memory available for downloads. 


### function ResetServerNONCE

```cpp
void ResetServerNONCE(
    void 
)
```


### function ClearOpSetAckArray

```cpp
void ClearOpSetAckArray(
    void 
)
```


### function AddOpSetAck

```cpp
void AddOpSetAck(
    uint32 OpSetId
)
```


**Parameters**: 

  * **OpSetId** = operation set Id to be inserted to array.


**Return**: void 

This function adds operation set id to operation set acknowledgment array, to be send with acknowledgment to server about a fail/success. 


### function VHQXmlPackagerInit

```cpp
void VHQXmlPackagerInit(
    void 
)
```


### function VHQXmlPackageCreate

```cpp
int VHQXmlPackageCreate(
    vhq_xml_operation_t operation,
    char ** XMLData,
    event_data_t * event_data
)
```


**Parameters**: 

  * **operation** = The type of package to create (Heartbeat, Status, [Event](struct_event.md)) 
  * **XMLData** = pointer to the buffer where the XML data should be copied to. 
  * **comm_id** = communication ID 
  * **message_id** = message ID, When we create messages, they start at message ID 1 
  * **event_mask** = event mask 
  * **appName** = name of the application which generated an alert to be sent to server. 
  * **severity** = severity of the alert 
  * **description** = additional information sent to server 
  * **details** = details sent to server about an event 
  * **iFlags** = sent to server for heartbeat operation 
  * **param_update_info** = pointer to parameter update details.


**Return**: 

  * 0, if unable to create package. 
  * the length of the device message XML data copied to the buffer. 


This function creates an XML document package for the passed in operation type. 


### function VHQXmlProcessServerMessage

```cpp
vhq_result_t VHQXmlProcessServerMessage(
    const char * XMLData,
    int XMLDataSize,
    int * comm_id,
    uint32 * srv_message_id,
    char ** XMLResponse,
    int * XMLResponseLen,
    const char * operation_id,
    bool close_comm_id,
    bool isKeyExchange
)
```


**Parameters**: 

  * **XMLData** = pointer to the server response message to process 
  * **XMLDataSize** = The length of the server response message buffer to process 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **srv_message_id** = server message id 
  * **XMLResponse** = device message buffer to save data 
  * **XMLResponseLen** = length of device message 
  * **operation_id** = operation ID 
  * **close_comm_id** = TRUE, if communication ID needs to be closed. 
  * **isKeyExchange** = TRUE, if key exchange message


**Return**: vhq_result_t, SERVER_RESPONSE_SUCCESS on success, otherwise an error ID 

This function processes a response message from the server.It parse file and build a xml document. 


### function VHQXmlCreateErrorResponse

```cpp
int VHQXmlCreateErrorResponse(
    xmlDocPtr server_doc,
    char ** XMLData,
    vhq_result_t result,
    int * cur_comm_id,
    uint32 * srv_message_id
)
```


**Parameters**: 

  * **server_doc** = pointer to document tree. 
  * **XMLData** = pointer to memory location 
  * **result** = server message result code to be add 
  * **cur_comm_id** = communication ID 
  * **cur_message_id** = message id 
  * **srv_message_id** = server message ID


**Return**: 

  * 0, if unable to create package. 
  * the length of the XML data 


This function creates an error response package to send to server. 


### function VHQXmlCreateDownloadResponse

```cpp
int VHQXmlCreateDownloadResponse(
    char ** XMLData,
    int comm_id,
    int message_id,
    char * operation_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    vhq_result_t result,
    uint32 operation_set_id,
    uint32 recur_id,
    char * additional_info,
    uint32 dl_duration,
    uint32 dl_attempts
)
```


**Parameters**: 

  * **XMLData** = location in memory 
  * **comm_id** = communication ID to put in response 
  * **message_id** = message ID to put in response 
  * **operation_id** = operation ID to put in response 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **result** = General server message result codes 
  * **operation_set_id** = operation set ID 
  * **recur_id** = recurring ID 
  * **additional_info** = additional information 
  * **dl_duration** = total download duration 
  * **dl_attempts** = number of download attempts.


**Return**: int, size in bytes of the XML response 

This function creates the Download Status Report response to send to server. 


### function VHQXmlCreateUploadResponse

```cpp
int VHQXmlCreateUploadResponse(
    char ** XMLData,
    int comm_id,
    int message_id,
    uint32 operation_set_id,
    char * operation_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    uint32 recur_id,
    vhq_result_t result,
    char * local_filename,
    char * ul_filename,
    upload_type_t ul_tpye,
    upload_file_type_t ul_file_type,
    xmlDocPtr * response_doc_p
)
```


**Parameters**: 

  * **XMLData** = location in memory 
  * **comm_id** = communication ID to put in response 
  * **message_id** = message ID to put in response 
  * **operation_set_id** = operation set ID to put in response 
  * **operation_id** = operation ID to put in response 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **recur_id** = recurring ID 
  * **result** = upload file result 
  * **local_filename** = local filename to be uploaded 
  * **ul_filename** = upload filename 
  * **ul_tpye** = upload type of upload_type_t 
  * **ul_file_type** = upload file type. 
  * **response_doc_p** = pointer to xml document address, to create response xml.


**Return**: int, size in bytes of the XML response 

This function creates the upload Status Report response to server.It includes all the details of the uploaded file in the xml message, if result is success. 


### function ValidateXml

```cpp
bool ValidateXml(
    xmlDocPtr doc_p
)
```


**Parameters**: 

  * **doc_p** = pointer to XML doc to validate


**Return**: 

  * TRUE, TRUE if successful 
  * FLASE, if failed 


This function validates the XML doc against the schema 


### function XMLStatusReportorMPAckCreate

```cpp
static bool XMLStatusReportorMPAckCreate(
    xmlDocPtr doc,
    int comm_id,
    uint32 message_id,
    bool is_status
)
```


**Parameters**: 

  * **doc** = pointer to xml document address, to create response xml. 
  * **comm_id** = communication ID to send to server 
  * **message_id** = message ID to send to server 
  * **is_status** = defines message type in message; FALSE, if management plan acknowledgment.


**Return**: 

  * TRUE, if successful 
  * FLASE, if failed 


This function creates the status Report xml response for the device.It creates the xml package for an MP acknowledgement. 


### function AddOperationResult

```cpp
xmlNode * AddOperationResult(
    xmlNode * op_results_node,
    char * op_id,
    vhq_result_t result,
    uint32 operation_set_id,
    uint32 recur_id,
    srv_op_type_t srv_op_type
)
```


**Parameters**: 

  * **op_results_node** = pointer to the node to add the results to. 
  * **op_id** = the operation ID to add in the result. 
  * **result** = the result of the operation. 
  * **operation_set_id** = operation set ID 
  * **recur_id** = recurring ID 
  * **srv_op_type** = operation type to send to server


**Return**: pointer to node where operation result is added. 

This function adds the operation result to the passed in node. 


### function CreateResponseXml

```cpp
vhq_result_t CreateResponseXml(
    xmlDocPtr * status_report_doc,
    int comm_id,
    char * operation_id,
    int message_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    bool create_op_res_node
)
```


**Parameters**: 

  * **status_report_doc** = pointer to new xml doc created. 
  * **comm_id** = communication ID. 
  * **operation_id** = operation ID. 
  * **message_id** = message ID 
  * **srv_msg_type** = server message type 
  * **srv_op_type** = server operation type 
  * **create_op_res_node** = if MP is cancel operation, no acknowledgment needed. 
  * **param_mask** = mask for fetching application parameters.


**Return**: vhq_result_t, SERVER_RESPONSE_SUCCESS on success, otherwise an error ID. 

This function creates a response xml package tp send to server, adds server message type, operation set ID and operation result to it. 


### function XMLGenerateSignature

```cpp
bool XMLGenerateSignature(
    xmlDocPtr doc,
    unsigned char * sigbuf,
    uint32 sigbuf_size
)
```


**Parameters**: 

  * **doc** = pointer to xml doc to which signature needs to be added. 
  * **sigbuf** = buffer into which signature is added. 
  * **sigbuf_size** = size of the signature buffer


**Return**: TRUE on success; FALSE, otherwise. 

This function generates signature and stores it into buffer. 


### function XMLVerifySignature

```cpp
vhq_result_t XMLVerifySignature(
    xmlDocPtr doc
)
```


**Parameters**: 

  * **doc** = pointer to xml doc from server for which signature is to be verified.


**Return**: vhq_result_t, SERVER_RESPONSE_SUCCESS on success, otherwise an error ID. 

This function verify the signature in the message from server. 


### function VHQXmlUpdateNonce

```cpp
int VHQXmlUpdateNonce(
    char * XMLData,
    int XMLDataSize,
    char ** XMLResponse,
    bool Validate
)
```


**Parameters**: 

  * **XMLData** = The XML message buffer to update NONCE with 
  * **XMLDataSize** = The length of the passed in XML message buffer 
  * **XMLResponse** = pointer to returned XML buffer with updated NONCE 
  * **Validate** = TRUE, validate xml doc after updating nonce.


**Return**: 0, on error; otherwise length of XML data 

This function adds nonce and signature details to the xml message to send to server. 


### function FinalizeXMLDoc

```cpp
bool FinalizeXMLDoc(
    xmlDocPtr XML_doc_p,
    bool final_update
)
```


**Parameters**: 

  * **XML_doc_p** = The pointer to XML document we are finalizing 
  * **final_update** = TRUE, if final update. If FALSE, add a fake Signature node for validation purposes only - it will always get replaced just before we send the message.


**Return**: TRUE if XML validates after this call - FALSE otherwise 

This function finalizes the XML by adding the nonce and the signature to it.It will always get replaced just before we send the message


### function SaveXMLDoc

```cpp
int SaveXMLDoc(
    xmlDocPtr XMLDoc,
    char * filename
)
```


**Parameters**: 

  * **XMLDoc** = The XML documemnt to save 
  * **filename** = The name of the file to save the XML doc to.


**Return**: negative value in case of error 

This function saves an XML Document to a file 


### function RemoveXMLDoc

```cpp
void RemoveXMLDoc(
    char * filename
)
```


**Parameters**: 

  * **filename** = The name of the XML doc file to delete 


**Return**: void 

This function removes an XML document file


### function RestoreXMLDoc

```cpp
xmlDocPtr RestoreXMLDoc(
    char * filename
)
```


**Parameters**: 

  * **filename** = The name of the XML doc file to restore 


**Return**: xmlDockPtr to the XML doc read from the file 

This function restores an XML doc pointer from a file



## Attributes Documentation

### variable customAppInfo

```cpp
customAppInfo_t[TMS_MAX_REGISTERED_APPS] customAppInfo;
```


### variable appInfoMutex

```cpp
pthread_mutex_t appInfoMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable op_set_events

```cpp
operation_set_event_t * op_set_events = NULL;
```


### variable op_set_install_events

```cpp
operation_set_event_t * op_set_install_events = NULL;
```


### variable install_downloader_parms

```cpp
launch_downloader_parms * install_downloader_parms = NULL;
```


### variable op_set_expiring_events

```cpp
operation_set_event_t * op_set_expiring_events = NULL;
```


### variable expiring_downloader_parms

```cpp
launch_downloader_parms * expiring_downloader_parms = NULL;
```


### variable last_server_nonce

```cpp
long long int last_server_nonce = 0;
```


### variable OpSetAckArray

```cpp
uint32[MAX_TOTAL_EVENTS] OpSetAckArray;
```


### variable NumOpSetAcks

```cpp
uint16 NumOpSetAcks;
```



## Macros Documentation

### define LIBXML_SCHEMAS_ENABLED

```cpp
#define LIBXML_SCHEMAS_ENABLED 
```


### define COMM_MESSAGE_ID_CHECKING

```cpp
#define COMM_MESSAGE_ID_CHECKING 0
```


### define NONCE_CHECKING

```cpp
#define NONCE_CHECKING 1
```


### define ENABLE_SIGNATURE_VALIDATION

```cpp
#define ENABLE_SIGNATURE_VALIDATION 1
```


### define XSDFileName1_

```cpp
#define XSDFileName1_(
    x
)
#x
```


### define XSDFileName_

```cpp
#define XSDFileName_(
    x
)
XSDFileName1_(x)
```


### define XSDFileName

```cpp
#define XSDFileName XSDFileName_(XSD_FILE_NAME)
```


### define SETUP_LIBXML_FOR_MEMWATCH

```cpp
#define SETUP_LIBXML_FOR_MEMWATCH 0
```


Global functions 


### define DEBUG_SIGNATURE_VALIDATION

```cpp
#define DEBUG_SIGNATURE_VALIDATION 1
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <memory.h>
#include <svcsec.h>
#include <fcntl.h>
#include <stdio.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <time.h>
#include "EventScheduler.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQManager.h"
#include "VHQSecurity.h"
#include "VHQTestMessages.h"
#include "VHQTypes.h"
#include "VHQUtils.h"
#include "VHQXmlDictionary.h"
#include "VHQXmlOperationProcessor.h"
#include "VHQXmlPackager.h"
#include "VHQXmlPackager_lcl.h"
#include "VHQXmlUtils.h"
#include "VHQIo.h"

#include <libxml/c14n.h>
#include <libxml/parser.h>
#include <libxml/tree.h>
#define LIBXML_SCHEMAS_ENABLED
#include <libxml/xmlschemastypes.h>

#ifndef LIBXML_TREE_ENABLED
#error "XML tree support not compiled in!!!"
#endif
#ifndef LIBXML_OUTPUT_ENABLED
#error "XML Output is not enabled!!!"
#endif

#ifdef Mx2
#include <svcmgr/svc_sysinfo.h>
#include <platforminfo_api.h>
#endif

#if XML_DOC_DEBUG
void PRINT_XML_DOC(const char* function, xmlDocPtr doc)
{
  /* Dump tree to stdio */
  dbg_msg( "%s: XML doc = \n", function);
  xmlSaveFormatFileEnc("-", doc, "UTF-8", 1);
}
#endif

#if XML_DATA_DEBUG
void PRINT_XML_DATA(const char* function, char* XMLData)
{
  /* Dump tree to stdio */
  dbg_msg( "%s: XML doc = \n[%s\n]", function, XMLData);
}
#endif

static bool XMLKeyExchangeCreate(xmlDocPtr doc, int comm_id, uint32 message_id);
static bool XMLHeartbeatCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                               int iFlags);
static bool XMLEventCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                           device_event_content_t *device_event_content);
static bool XMLUpdateCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                            char *update_type, char *sw_ref_no, char *reference);
static vhq_result_t VHQXmlProcessManagementPlan(xmlNode *root_element,
                                                xmlDocPtr *status_report_doc,
                                                int *cur_comm_id,
                                                uint32 *srv_message_id,
                                                bool isKeyExchange);
static vhq_result_t VHQXmlProcessServerResponse(xmlNode *root_element,
                                                xmlDocPtr *status_report_doc,
                                                int *cur_comm_id,
                                                uint32 *srv_message_id,
                                                const char *operation_id,
                                                bool close_comm_id);
static vhq_result_t get_server_response_content(xmlNode *content_element,
                                                char *error_id,
                                                int error_id_len,
                                                char *additional_info,
                                                int additional_info_len);
static vhq_result_t parse_management_plan_operations(
    xmlNode *operation_set_element, xmlDocPtr *status_report_doc, int comm_id,
    int message_id, srv_msg_type_t srv_msg_type,
    operation_set_event_t **op_set_events, uint32 *num_events_extracted);

static vhq_result_t CreateMPAckResponseXml(xmlDocPtr *status_report_doc,
                                           int comm_id, int message_id,
                                           uint32 *OpSetAckArray,
                                           uint16 NumOpSetAcks,
                                           bool is_cancel_operation);

/* COMM/Message ID tracking data */
#ifdef SHIP_BUILD
#define COMM_MESSAGE_ID_CHECKING        0
#define NONCE_CHECKING              1
#define ENABLE_SIGNATURE_VALIDATION       1
#else
#if TEST_MESSAGES_ENABLED
#define COMM_MESSAGE_ID_CHECKING        0
#define NONCE_CHECKING              0
#define ENABLE_SIGNATURE_VALIDATION       0
#else
#define COMM_MESSAGE_ID_CHECKING        0
#define NONCE_CHECKING              1
#define ENABLE_SIGNATURE_VALIDATION       1
#endif
#endif

#if (!TEST_MESSAGES_ENABLED)
#if (!NONCE_CHECKING)
#error "NONCE Checking is DISABLED!!!!!!!!!!!"
#endif
#if (!ENABLE_SIGNATURE_VALIDATION)
#error "Signature Validation is DISABLED!!!!!!!!!!!"
#endif
#endif

/* Pick up the XSD filename from the makefile */
#define XSDFileName1_(x) #x
#define XSDFileName_(x) XSDFileName1_(x)
#define XSDFileName XSDFileName_(XSD_FILE_NAME)

/* Never clear customAppInfo since it contains pointers that need to be free()'d each time GetAppCustomData() is called */
customAppInfo_t customAppInfo[TMS_MAX_REGISTERED_APPS];

/* Mutex for customAppInfo */
pthread_mutex_t appInfoMutex = PTHREAD_MUTEX_INITIALIZER;


static void _AddAppCustomParmsToIdentifier(xmlNodePtr HeaderNode,
                                           xmlNodePtr IdentifierNode,
                                           char *op_type)
{
  bool device_id_found = FALSE;
  int custom_user_index;
  bool DeviceIDReqd = FALSE;
  bool DIDReqdForKeyExch = FALSE;

  /* Lock custom application info data */
  pthread_mutex_lock(&appInfoMutex);

  VHQGetParameterBool(PARAM_DEVICE_ID_REQUIRED, &DeviceIDReqd);

  if (DeviceIDReqd && !strcmp(op_type, VHQ_XML_OP_TYPE_AGENT_KEY_EXCHANGE))
    DIDReqdForKeyExch = TRUE;

  /* Collect data, if required, we need TMS_PARAMETER_TYPE_IDENTIFIER here only */
  GetAppCustomData(customAppInfo, TMS_PARAMETER_TYPE_IDENTIFIER,
                   DIDReqdForKeyExch);

  for (custom_user_index = 0; custom_user_index < TMS_MAX_REGISTERED_APPS;
      custom_user_index++)
  {
    if (customAppInfo[custom_user_index].parameterList)
    {
      list_head_t *app_parameterList_node;
      appParam_t *app_parameterList_list_obj;

      list_for_each(app_parameterList_node, &customAppInfo[custom_user_index].parameterList->list)
      {
        app_parameterList_list_obj = list_entry(app_parameterList_node,
                                                appParam_t, list);
        if ((app_parameterList_list_obj->parameter.parameterType
            & TMS_PARAMETER_TYPE_IDENTIFIER) == TMS_PARAMETER_TYPE_IDENTIFIER)
        {
          if (strlen(app_parameterList_list_obj->parameter.parameterName))
          {
            /* Terminal ID is special and can just be added as an attribute */
            if ((strcmp(app_parameterList_list_obj->parameter.parameterName,
            VHQ_XML_IDENTIFIER_TID_TAG) == 0)
                || (strcmp(app_parameterList_list_obj->parameter.parameterName,
                VHQ_XML_IDENTIFIER_DEVICE_ID_TAG) == 0))
            {
              dbg_msg(
                  "%s: Adding custom app info attribute '%s=%s' to identifier\n",
                  __FUNCTION__,
                  app_parameterList_list_obj->parameter.parameterName,
                  app_parameterList_list_obj->parameter.parameterValue);

              /* If we receive the DeviceId from an app, we don't need to get it from the backup source */
              if (strcmp(app_parameterList_list_obj->parameter.parameterName,
              VHQ_XML_IDENTIFIER_DEVICE_ID_TAG) == 0)
              {
                device_id_found = TRUE;
              }
              xmlSetProp(
                  IdentifierNode,
                  BAD_CAST app_parameterList_list_obj->parameter.parameterName,
                  BAD_CAST app_parameterList_list_obj->parameter.parameterValue);
            }
            else
            {
              /* Everything else must go into a CustomParam sub-element*/
              xmlNodePtr customParm_node = NULL;

              /* Add the header node */
              customParm_node = xmlNewChild(IdentifierNode, NULL,
              BAD_CAST VHQ_XML_IDENTIFIER_CUSTOM_PARM_TAG,
                                            NULL);
              xmlSetProp(
                  customParm_node, BAD_CAST VHQ_XML_IDENTIFIER_CUSTOM_PARM_NAME,
                  BAD_CAST app_parameterList_list_obj->parameter.parameterName);
              xmlSetProp(
                  customParm_node,
                  BAD_CAST VHQ_XML_IDENTIFIER_CUSTOM_PARM_VALUE,
                  BAD_CAST app_parameterList_list_obj->parameter.parameterValue);
              xmlSetProp(customParm_node,
              BAD_CAST VHQ_XML_IDENTIFIER_CUSTOM_PARM_APP_NAME,
                         BAD_CAST customAppInfo[custom_user_index].user);
            }
          }
        }
      }
    }
  }
  /* Unlock custom application info data */
  pthread_mutex_unlock(&appInfoMutex);

  /* If we don't find the DeviceId, we need to get it from the backup source */
  if (!device_id_found)
  {
    char backupDeviceID[64] = { 0 };
    char *xmlHeaderNodeTagIP = NULL;
    device_id_backup_source_t dev_id_bk_source = GetDeviceIdBackupSource(
        DIDReqdForKeyExch);

    memset(backupDeviceID, 0, sizeof(backupDeviceID));
    switch (dev_id_bk_source)
    {
      case DEVICE_ID_BACKUP_SOURCE_IP_ADDRESS:
        GetIPAddress(backupDeviceID, sizeof(backupDeviceID));
        dbg_msg("%s: Using IP Address (%s) for %s in identifier\n",
                __FUNCTION__, backupDeviceID, VHQ_XML_IDENTIFIER_DEVICE_ID_TAG);
        xmlSetProp(IdentifierNode, BAD_CAST VHQ_XML_IDENTIFIER_DEVICE_ID_TAG,
        BAD_CAST backupDeviceID);

        /* ADKTMS-1181 The xml HeaderNode could be obsoleted, verify it and update if required */
        xmlHeaderNodeTagIP = GetStrAttrFromNode(HeaderNode,
        VHQ_XML_IP_ADDRESS_TAG);
        if (xmlHeaderNodeTagIP
            && strcmp(xmlHeaderNodeTagIP, backupDeviceID) != 0)
        {
          dbg_msg(
              "%s: XML Header tag \"%s\" is obsoleted. Update \"%s\" -> \"%s\"\n",
              __FUNCTION__, VHQ_XML_IP_ADDRESS_TAG, xmlHeaderNodeTagIP,
              backupDeviceID);
          xmlSetProp(HeaderNode, BAD_CAST VHQ_XML_IP_ADDRESS_TAG,
          BAD_CAST backupDeviceID);
        }
        if (xmlHeaderNodeTagIP)
        {
          xmlFree(xmlHeaderNodeTagIP);
          xmlHeaderNodeTagIP = NULL;
        }
        break;
      case DEVICE_ID_BACKUP_SOURCE_ZT_VAR:
        break;
      case DEVICE_ID_BACKUP_SOURCE_VHQ_CONFIG:
        VHQGetParameterString(PARAM_TERMINAL_ID, backupDeviceID,
                              sizeof(backupDeviceID));
        dbg_msg("%s: Using VHQConfig TerminalID (%s) for %s in identifier\n",
                __FUNCTION__, backupDeviceID, VHQ_XML_IDENTIFIER_DEVICE_ID_TAG);
        xmlSetProp(IdentifierNode, BAD_CAST VHQ_XML_IDENTIFIER_DEVICE_ID_TAG,
        BAD_CAST backupDeviceID);
        break;

      case DEVICE_ID_BACKUP_SOURCE_DISABLED:
      default:
        /* Do nothing if backup source is disabled */
        break;
    }
  }
}


static uint32 VHQXmlSearch_OperationSetId_by_OperationId(xmlNode *op_sets_node,
                                                         const char *OpId)
{
  if (!op_sets_node || !OpId || strlen(OpId) == 0)
    return 0;

  while (op_sets_node)
  {
    xmlNode *op_set_node = NULL;

    op_set_node = GetNodeByName(op_sets_node, VHQ_XML_OPERATION_SET_TAG);
    while (op_set_node)
    {
      char *op_set_id_str;

      op_set_id_str = GetStrAttrFromNode(op_set_node, VHQ_XML_OP_RES_OP_SET_ID);
      if (op_set_id_str)
      {
        xmlNode *op_node = NULL;
        op_node = GetNodeByName(op_sets_node, VHQ_XML_OPERATION_TAG);

        dbg_msg("%s: OperationSetId = %s\n", __FUNCTION__, op_set_id_str);
        while (op_node)
        {
          char *op_id_str;
          op_id_str = GetStrAttrFromNode(op_node, VHQ_XML_OPERATION_ID_TAG);

          if (op_id_str)
          {
            uint32 ret_value = 0;
            dbg_msg("%s: OperationId = %s\n", __FUNCTION__, op_set_id_str);
            if (strcmp(op_id_str, OpId) == 0)
            {
              dbg_notice(
                  "%s: OperationId (%s) found inside of OperationSetId = %s\n",
                  __FUNCTION__, OpId, op_set_id_str);
              ret_value = atoi(op_set_id_str);
            }
            xmlFree(op_id_str);
            op_id_str = NULL;

            if (ret_value)
              return ret_value;
          }
          op_node = GetNodeByName(op_node->next, VHQ_XML_OPERATION_TAG);
        }
        xmlFree(op_set_id_str);
        op_set_id_str = NULL;
      }
      op_set_node = GetNodeByName(op_set_node->next, VHQ_XML_OPERATION_SET_TAG);
    }
    op_sets_node = GetNodeByName(op_sets_node->next, VHQ_XML_OPERATION_SET_TAG);
  }
  return 0;
}


void AddBatteryInfo(xmlNodePtr ParentNode)
{
  batt_info_t bat;
  xmlNode *dev_bat_node;

  memset(&bat, 0, sizeof(batt_info_t));
  if ((GetMainBatteryStatus(&bat) < 0) || (bat.bMainBattery == FALSE))
  {
    dbg_msg("%s: Battery Not present\r\n", __FUNCTION__);
    return;
  }

  dev_bat_node = xmlNewChild(ParentNode, NULL,
  BAD_CAST VHQ_XML_GET_DATA_BATINFO_PROFILE,
                             NULL);

  addIntegerAttr(dev_bat_node, VHQ_XML_GET_DATA_BATINFO_PROFILE_LEVEL,
                 bat.level);
  addIntegerAttr(dev_bat_node, VHQ_XML_GET_DATA_BATINFO_PROFILE_VOLTAGE,
                 bat.voltage);
  addIntegerAttr(dev_bat_node, VHQ_XML_GET_DATA_BATINFO_PROFILE_CAPACITY,
                 bat.capacity);
  addIntegerAttr(dev_bat_node, VHQ_XML_GET_DATA_BATINFO_PROFILE_TEMPERATURE,
                 bat.temp);
  xmlNewProp(dev_bat_node, BAD_CAST VHQ_XML_GET_DATA_BATINFO_PROFILE_SERIAL_NUM,
  BAD_CAST bat.sernum);
}

static void AddComStatus(xmlNodePtr parent_node, struct comm_s *port,
                         const char *com_name)
{
  xmlNodePtr com_port_node = NULL;
  com_port_node = xmlNewChild(parent_node, NULL,
  BAD_CAST VHQ_XML_EVENT_MPC_NODE,
                              NULL);
  xmlSetProp(com_port_node,
  BAD_CAST VHQ_XML_EVENT_MPC_NAME,
             BAD_CAST com_name);

  if (port->available)
  {
    xmlSetProp(com_port_node,
    BAD_CAST VHQ_XML_EVENT_MPC_AVAIL,
               BAD_CAST VHQ_XML_TRUE);

    switch (port->connectionStatus)
    {
      case COMMSTATUS_CONNECTED:
      {
        xmlNewProp(com_port_node,
        BAD_CAST VHQ_XML_EVENT_MPC_STATUS,
                   BAD_CAST VHQ_XML_EVENT_MPC_CONNECTED_STATUS);
      }
        break;
      case COMMSTATUS_DISCONNECTED:
      {
        xmlNewProp(com_port_node,
        BAD_CAST VHQ_XML_EVENT_MPC_STATUS,
                   BAD_CAST VHQ_XML_EVENT_MPC_DISCONNECTED_STATUS);
      }
        break;
      default:
      {
        xmlNewProp(com_port_node,
        BAD_CAST VHQ_XML_EVENT_MPC_STATUS,
                   BAD_CAST VHQ_XML_EVENT_MPC_UNKNOWN_STATUS);
      }
    }

    if (port->commType == COMMTYPE_RS485)
    {
      xmlSetProp(com_port_node,
      BAD_CAST VHQ_XML_EVENT_MPC_COMTYPE,
                 BAD_CAST VHQ_XML_EVENT_MPC_COMTYPE_RS485);
    }
    else
    {
      xmlNewProp(com_port_node,
      BAD_CAST VHQ_XML_EVENT_MPC_COMTYPE,
                 BAD_CAST VHQ_XML_EVENT_MPC_COMTYPE_RS232);
    }
  }
  else
  {
    xmlSetProp(com_port_node,
    BAD_CAST VHQ_XML_EVENT_MPC_AVAIL,
               BAD_CAST VHQ_XML_FALSE);
  }
}


static void XMLHeaderCreate(xmlDocPtr doc, xmlNodePtr *p_root_node,
                            char *op_type, int comm_id, uint32 message_id)
{
  char SerialNum[SERIAL_NUM_LEN];
  char ModelNum[16];
  char IPAddress[IP_ADDRESS_LEN];
  xmlNodePtr root_node = NULL, header_node = NULL, initiator_node = NULL,
      identifier_node = NULL;/* node pointers */
  char customer_id[64];
  uint32 unique_id;
  batt_info_t batteryInfo;

#ifdef Mx2
  struct MIBInfo_s *mibi;
#endif

  root_node = xmlNewNode(NULL, BAD_CAST VHQ_DEVICE_XML_MSG_WRAPPER);
  *p_root_node = root_node;
  xmlDocSetRootElement(doc, root_node);

  /* Add the header node */
  header_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_HEADER_TAG, NULL);

  /* Add Operation type node */
  xmlSetProp(header_node, BAD_CAST VHQ_XML_OP_TYPE_TAG, BAD_CAST op_type);

  /* Add version node */
  xmlSetProp(header_node, BAD_CAST VHQ_XML_VERSION_TAG,
  BAD_CAST VHQ_XML_VERSION_NUM);

  /* Add Comm ID node */
  addIntegerAttr(header_node, VHQ_XML_COMM_ID_TAG, comm_id);

  /* Add Message ID node */
  addIntegerAttr(header_node, VHQ_XML_MESSAGE_ID_TAG, message_id);

  /* Add Customer ID node */
  memset(customer_id, 0, sizeof(customer_id));
  VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id, sizeof(customer_id));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_CUSTOMER_ID_TAG,
  BAD_CAST customer_id);
  /* Add IP Address node */
  GetIPAddress(IPAddress, sizeof(IPAddress));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_IP_ADDRESS_TAG, BAD_CAST IPAddress);

  if ((GetMainBatteryStatus(&batteryInfo) >= 0) && (batteryInfo.bMainBattery))
  {
    /* Add Battery Level Attribute */
    addIntegerAttr(header_node, VHQ_XML_HB_BAT_LEVEL_TAG, batteryInfo.level);
    dbg_msg("%s: Battery level %d\r\n", __FUNCTION__, batteryInfo.level);
  }
  else
    dbg_msg("%s: Battery Not present\r\n", __FUNCTION__);

  {
    char szHBFreq[64];
    uint32 heartbeat_rate;

    /* begin-ADKTMS-355 add separate HB frequencies for dial and gprs/3g */
    /* Get current com interface type: direct, dial, gprs/3g */
    heartbeat_rate = GetHBFreq(NULL, GetComType());

    snprintf(szHBFreq, sizeof(szHBFreq), "%d", heartbeat_rate);
    dbg_notice("heartbeat rate is %s\r\n", szHBFreq);
    xmlSetProp(header_node, BAD_CAST VHQ_XML_HB_FREQ, BAD_CAST szHBFreq);
  }

  /* Add device time attribute */
  addTimeAttr(header_node, VHQ_XML_LOCAL_TIME, linux_time(NULL), TRUE);

  /* Add initiator node */
  initiator_node = xmlNewChild(header_node, NULL,
  BAD_CAST VHQ_XML_INITIATOR_TAG,
                               NULL);
  xmlNewProp(initiator_node, BAD_CAST VHQ_XML_INITIATOR_TYPE_TAG,
  BAD_CAST "Terminal");

  /* Add identifier node */
  memset(SerialNum, 0, sizeof(SerialNum));
  GetSerialNumber(SerialNum);
  memset(ModelNum, 0, sizeof(ModelNum));
  GetModelNumber(ModelNum, sizeof(ModelNum));
  identifier_node = xmlNewChild(initiator_node, NULL,
  BAD_CAST VHQ_XML_IDENTIFIER_TAG,
                                NULL);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
  BAD_CAST ModelNum);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
  BAD_CAST SerialNum);

  unique_id = 0;
  VHQGetParameterUint32(PARAM_UNIQUE_DEVICE_ID, &unique_id, DEFAULT_BASE);
  if (unique_id != 0)
    addIntegerAttr(identifier_node, VHQ_XML_IDENTIFIER_UNIQUE_ID_TAG,
                   unique_id);

#ifdef Mx2
  mibi = sysinfo_MIB();
  dbg_msg("%s: Using MIB for Part Number\n", __FUNCTION__);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
  BAD_CAST trim_whitespace(mibi->partNumber));
#endif

  _AddAppCustomParmsToIdentifier(header_node, identifier_node, op_type);

}


static bool XMLKeyExchangeCreate(xmlDocPtr doc, int comm_id, uint32 message_id)
{
  uint32 i;
  char AgentKeysBuf[1024];
  char EncrAgentKeysBuf[1024];
  char AgentKeysSigBuf[1024];
  char temp_str_buf[256];
  char *pubkey_certfile;
  int pubkey_certfile_size;
  char IPAddress[IP_ADDRESS_LEN];
  char PubKeyId[(SHA_DIGEST_LENGTH * 2) + 1];
  xmlNodePtr root_node = NULL;/* node pointers */
  xmlNodePtr content_node = NULL;
  xmlNode *agent_keys_exchange_node;
  xmlNode *encr_agent_keys_node;
  xmlNode *cert_node;
  xmlNode *encr_agent_keys_sig_node;
  uint32 no_ip_addr_ok;
  char FileName[512];

  /* Add IP Address node */
  no_ip_addr_ok = 0;
  VHQGetParameterUint32(PARAM_NO_IP_ADDR_OK, &no_ip_addr_ok, DEFAULT_BASE);
  GetIPAddress(IPAddress, sizeof(IPAddress));
  dbg_msg("%s: Checking IP Address %s.\n", __FUNCTION__, IPAddress);
  if (!ISvalidIP(IPAddress))
  {
    // attempt a server connect to kick-start comms
    dbg_msg("%s: Pinging server\n", __FUNCTION__);
    ServerPing();
    GetIPAddress(IPAddress, sizeof(IPAddress));
    dbg_msg("%s: 2nd check IP Address %s.\n", __FUNCTION__, IPAddress);

    // only doing this once... do we need a retry mechanism?
    if (!ISvalidIP(IPAddress) && !no_ip_addr_ok)
    {
      dbg_msg("%s: Key Exchange Message NOT created. Invalid IP Address: %s.\n",
              __FUNCTION__, IPAddress);
      return FALSE;
    }
  }

  XMLHeaderCreate(doc, &root_node, VHQ_XML_OP_TYPE_AGENT_KEY_EXCHANGE, comm_id,
                  message_id);

  /* Add Content nodes */
  content_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_CONTENT_TAG,
  NULL);

  log_dbg("%s: Exchanging Keys\n", __FUNCTION__);

  memset(AgentKeysBuf, 0, sizeof(AgentKeysBuf));
  sprintf(AgentKeysBuf,
          "<AgentKeys><MACKey KCV=\"%02x%02x%02x\" type=\"AES128\">",
          VHQKeyData.MACKeyKcv[0], VHQKeyData.MACKeyKcv[1],
          VHQKeyData.MACKeyKcv[2]);

  for (i = 0; i < sizeof(MACKey_t); i++)
  {
    sprintf(temp_str_buf, "%02x", VHQKeyData.MACKey[i]);
    strcat(AgentKeysBuf, temp_str_buf);
  }

  sprintf(temp_str_buf,
          "</MACKey><EncryptionKey KCV=\"%02x%02x%02x\" type=\"AES128\">",
          VHQKeyData.EncryptionKeyKcv[0], VHQKeyData.EncryptionKeyKcv[1],
          VHQKeyData.EncryptionKeyKcv[2]);
  strcat(AgentKeysBuf, temp_str_buf);

  for (i = 0; (uint32) i < sizeof(EncryptionKey_t); i++)
  {
    sprintf(temp_str_buf, "%02x", VHQKeyData.EncryptionKey[i]);
    strcat(AgentKeysBuf, temp_str_buf);
  }

  strcat(AgentKeysBuf, "</EncryptionKey></AgentKeys>");

#if 0
#ifndef SHIP_BUILD
#warning "Printing Agent Keys XML Buffer in XMLKeyExchangeCreate"
#else
#error "Printing Agent Keys XML Buffer in XMLKeyExchangeCreate"
#endif
  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Agent Keys XML Buf (length = %d) = %s\n", __FUNCTION__, strlen(AgentKeysBuf), AgentKeysBuf);
#endif

  pubkey_certfile = NULL;
  pubkey_certfile_size = ReadPubKeyCertfile(&pubkey_certfile);
  if (pubkey_certfile_size >= 0)
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Public Key Certfile = [%s]\n", __FUNCTION__, pubkey_certfile);
  }
  else
    dbg_err("%s ERROR: ReadPubKeyCertfile() returned %d\n", __FUNCTION__,
            pubkey_certfile_size);

  memset(EncrAgentKeysBuf, 0, sizeof(EncrAgentKeysBuf));
  memset(AgentKeysSigBuf, 0, sizeof(AgentKeysSigBuf));

  if (!EncryptAgentKeys(strlen(AgentKeysBuf), AgentKeysBuf, EncrAgentKeysBuf,
                        AgentKeysSigBuf))
  {
    log_err("%s ERROR: EncryptAgentKeys FAILED - returning FALSE\n",
            __FUNCTION__);
    if (pubkey_certfile)
    {
      free(pubkey_certfile);
      pubkey_certfile = NULL;
    }
    return FALSE;
  }

  agent_keys_exchange_node = xmlNewChild(
      content_node, NULL, BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_TAG, NULL);
  if (isAttacked())
    xmlSetProp(agent_keys_exchange_node,
    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_TAMPERED,
               BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_TAMPERED_YES);
  else
    xmlSetProp(agent_keys_exchange_node,
    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_TAMPERED,
               BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_TAMPERED_NO);

  encr_agent_keys_node = xmlNewChild(agent_keys_exchange_node, NULL,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_ECRY_KEYS_TAG,
                                     BAD_CAST EncrAgentKeysBuf);
  xmlSetProp(encr_agent_keys_node, BAD_CAST VHQ_XML_ATTR_TYPE_TAG,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_ENCR_KEYS_TYPE_ENCR_64);
  xmlSetProp(encr_agent_keys_node,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_ENCR_KEYS_ALGO,
             BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_ENCR_KEYS_ALGO_RSA_OAEP);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  if (GetPubKeyID(FileName, PubKeyId, sizeof(PubKeyId)))
    xmlSetProp(encr_agent_keys_node,
    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_ENCR_KEY_ID_TAG,
               BAD_CAST PubKeyId);

  cert_node = xmlNewChild(agent_keys_exchange_node, NULL,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_CERT_TAG,
                          BAD_CAST pubkey_certfile);
  xmlSetProp(cert_node, BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_CERT_SOURCE,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_CERT_SOURCE_AGENT);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  if (GetPubKeyID(FileName, PubKeyId, sizeof(PubKeyId)))
    xmlSetProp(cert_node, BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_ID_TAG,
    BAD_CAST PubKeyId);

  encr_agent_keys_sig_node = xmlNewChild(agent_keys_exchange_node, NULL,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_TAG,
                                         BAD_CAST AgentKeysSigBuf);
  xmlSetProp(encr_agent_keys_sig_node, BAD_CAST VHQ_XML_ATTR_TYPE_TAG,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_TYPE_PKI);
  xmlSetProp(encr_agent_keys_sig_node,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_ALGO,
             BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_ALGO_PKCS_1_5);
  xmlSetProp(encr_agent_keys_sig_node,
  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO,
             BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  if (GetPubKeyID(FileName, PubKeyId, sizeof(PubKeyId)))
    xmlSetProp(encr_agent_keys_sig_node,
    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_ID_TAG,
               BAD_CAST PubKeyId);

  if (pubkey_certfile)
    free(pubkey_certfile);

  PRINT_XML_DOC(__FUNCTION__, doc);

  return TRUE;

}


static bool XMLHeartbeatCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                               int iFlags)
{
  xmlNodePtr root_node = NULL;
  time_t cur_time = linux_time(NULL);
  char op_type[32];

  /* Add Operation type node */
  if ((iFlags & TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG)
      == TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG)
  {
    strcpy(op_type, VHQ_XML_OP_TYPE_SYNCHRONIZE_HEARTBEAT);
  }
  else
  {
    if (IsInMaintenanceWindow(cur_time, NULL))
      strcpy(op_type, VHQ_XML_OP_TYPE_MAINTENANCE_HEARTBEAT);
    else
      strcpy(op_type, VHQ_XML_OP_TYPE_HEARTBEAT);
  }

  XMLHeaderCreate(doc, &root_node, op_type, comm_id, message_id);

  /* Add Content nodes */
  xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_CONTENT_TAG, NULL);

  PRINT_XML_DOC(__FUNCTION__, doc);

  return TRUE;
}


static bool XMLEventCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                           device_event_content_t *device_event_content)
{
  bool ret_val = TRUE;
  int i;
  xmlNodePtr root_node = NULL, content_node = NULL, events_node = NULL;

  XMLHeaderCreate(doc, &root_node, VHQ_XML_OP_TYPE_EVENT, comm_id, message_id);

  /* Add Content nodes */
  content_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_CONTENT_TAG,
  NULL);

  events_node = xmlNewChild(content_node, NULL,
  BAD_CAST VHQ_XML_CONTENT_EVENTS_TAG,
                            NULL);

  for (i = 0; i < 32; i++)
  {
    uint32 temp_mask = 1 << i;

    if (temp_mask & device_event_content->event_mask)
    {
      xmlNodePtr event_node = NULL;

      if (temp_mask != EVENT_DOCK_IN && temp_mask != EVENT_DOCK_OUT)
      {
        event_node = xmlNewChild(events_node, NULL,
        BAD_CAST VHQ_XML_SRV_MSG_TYPE_EVENT_TAG,
                                 NULL);

        xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_TYPE_TAG,
        BAD_CAST ConvertEventMaskToString(temp_mask));
        addTimeAttr(event_node, VHQ_XML_EVENT_TIME_TAG,
                    device_event_content->event_time, TRUE);
      }

      switch (temp_mask)
      {
        case EVENT_TAMPER:
          /* Sent during key exchange */
          break;
        case EVENT_RAM_MEM_LOW:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);

          xmlNodePtr additional_details_node = NULL;

          additional_details_node = xmlNewChild(
              event_node, NULL, BAD_CAST VHQ_XML_EVENT_ADDITIONAL_DETAILS,
              NULL);

          addIntegerAttr(
              additional_details_node,
              VHQ_XML_GET_DATA_MEM_PROFILE_FREE_RAM,
              device_event_content->device_event_data.alert_event.ram_data
                  .RAM_free);
          addIntegerAttr(
              additional_details_node,
              VHQ_XML_GET_DATA_MEM_PROFILE_TOTAL_RAM,
              device_event_content->device_event_data.alert_event.ram_data
                  .RAM_tot);
        }
          break;
        case EVENT_FLASH_MEM_LOW:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);

          xmlNodePtr additional_details_node = NULL;

          additional_details_node = xmlNewChild(
              event_node, NULL, BAD_CAST VHQ_XML_EVENT_ADDITIONAL_DETAILS,
              NULL);

          addIntegerAttr(
              additional_details_node,
              VHQ_XML_GET_DATA_MEM_PROFILE_FREE_FLASH,
              device_event_content->device_event_data.alert_event.flash_data
                  .flash_free);
          addIntegerAttr(
              additional_details_node,
              VHQ_XML_GET_DATA_MEM_PROFILE_TOTAL_FLASH,
              device_event_content->device_event_data.alert_event.flash_data
                  .flash_total);
        }
          break;
        case EVENT_REBOOT:
        {
          if (FileExists(VHQ_REBOOT_REQUEST_FILE))
          {
            dbg_msg(
                "%s: Reboot event and %s exists - setting source to Agent\n",
                __FUNCTION__, VHQ_REBOOT_REQUEST_FILE);
            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
                       BAD_CAST VHQ_XML_EVENT_SOURCE_AGENT);
            dbg_msg("%s: Removing %s \n", __FUNCTION__, VHQ_REBOOT_REQUEST_FILE);
            RemoveVHQRebootFile();
          }
          else if (isPCIreboot())
          {
            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
            BAD_CAST VHQ_XML_EVENT_SOURCE_SYSTEM);
          }
          else
            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
            BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);
        }
          break;
        case EVENT_BATTERY_LOW:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);

          xmlNodePtr additional_details_node = NULL;

          additional_details_node = xmlNewChild(
              event_node, NULL, BAD_CAST VHQ_XML_EVENT_ADDITIONAL_DETAILS,
              NULL);

          if (TRUE
              == device_event_content->device_event_data.alert_event
                  .battery_data.battery_present)
          {
            xmlSetProp(additional_details_node,
            BAD_CAST VHQ_XML_EVENT_DETAILS_BLT_IN_BAT,
                       BAD_CAST VHQ_XML_TRUE);
            addIntegerAttr(
                additional_details_node,
                VHQ_XML_EVENT_DETAILS_BAT_LEVEL,
                device_event_content->device_event_data.alert_event.battery_data
                    .battery_level);
          }
          else
          {
            xmlSetProp(additional_details_node,
            BAD_CAST VHQ_XML_EVENT_DETAILS_BLT_IN_BAT,
                       BAD_CAST VHQ_XML_FALSE);
            addIntegerAttr(additional_details_node,
            VHQ_XML_EVENT_DETAILS_BAT_LEVEL,
                           0);
          }
        }
          break;
        case EVENT_DOCK_IN:
        case EVENT_DOCK_OUT:
        {
          dock_station_t dockData;

          memset(&dockData, 0, sizeof(dock_station_t));
          if (GetDockingStationInfo(&dockData))
          {
            event_node = xmlNewChild(events_node, NULL,
            BAD_CAST VHQ_XML_SRV_MSG_TYPE_EVENT_TAG,
                                     NULL);

            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_TYPE_TAG,
            BAD_CAST ConvertEventMaskToString(temp_mask));
            addTimeAttr(event_node, VHQ_XML_EVENT_TIME_TAG,
                        device_event_content->event_time, TRUE);

            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
            BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

            /* Add the battery info after details element */
            //AddBatteryInfo(event_node);
            if (strlen(dockData.dock_serial_no))
              xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_DOCKIN_TO_ID,
              BAD_CAST dockData.dock_serial_no);

            if (strlen(dockData.dock_model_name))
              xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_DOCKIN_TO_MODEL,
              BAD_CAST dockData.dock_model_name);
          }
          else
          {
            int i = 0;
            usb_peripheral_info_t usb_periph_info;

            getUSBPeripheralInfo(&usb_periph_info);

            if (usb_periph_info.num_peripheral_devices != 0)
            {
              for (i = 0; i < usb_periph_info.num_peripheral_devices; i++)
              {
                event_node = xmlNewChild(events_node, NULL,
                BAD_CAST VHQ_XML_SRV_MSG_TYPE_EVENT_TAG,
                                         NULL);

                xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_TYPE_TAG,
                BAD_CAST ConvertEventMaskToString(temp_mask));
                addTimeAttr(event_node, VHQ_XML_EVENT_TIME_TAG,
                            device_event_content->event_time, TRUE);

                xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
                BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

                /* Add the battery info after details element */
                //AddBatteryInfo(event_node);
                if (strlen(usb_periph_info.peripheral_devices[i].serial_number))
                  xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_DOCKIN_TO_ID,
                  BAD_CAST usb_periph_info.peripheral_devices[i].serial_number);

                if (strlen(usb_periph_info.peripheral_devices[i].model_number))
                  xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_DOCKIN_TO_MODEL,
                  BAD_CAST usb_periph_info.peripheral_devices[i].model_number);
              }
            }
            else /* send the dockout even if system prop does not provide info */
            {
              event_node = xmlNewChild(events_node, NULL,
                          BAD_CAST VHQ_XML_SRV_MSG_TYPE_EVENT_TAG,
                                                   NULL);

              xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_TYPE_TAG,
                          BAD_CAST ConvertEventMaskToString(temp_mask));
              addTimeAttr(event_node, VHQ_XML_EVENT_TIME_TAG,
                          device_event_content->event_time, TRUE);

              xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
                          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);
            }
          }
        }
          break;
        case EVENT_APPLICATION_GENERATED:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_APPLICATION);
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_APP_NAME,
          BAD_CAST device_event_content->appName);

          if (device_event_content->eventName
              && strlen(device_event_content->eventName))
          {
            xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_NAME_TAG,
            BAD_CAST device_event_content->eventName);

            if (device_event_content->description
                && strlen(device_event_content->description))
            {
              xmlSetProp(event_node, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
              BAD_CAST device_event_content->description);
            }
          }
          else
          {
            xmlSetProp(
                event_node,
                BAD_CAST VHQ_XML_EVENT_SEVERITY_TAG,
                BAD_CAST ConvertSeverityToString(
                    device_event_content->severity));

            if (device_event_content->description
                && strlen(device_event_content->description))
            {
              xmlSetProp(event_node, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
              BAD_CAST device_event_content->description);
            }

            if (device_event_content->details
                && strlen(device_event_content->details))
            {
              xmlNewChild(event_node, NULL, BAD_CAST VHQ_XML_EVENT_DETAILS,
              BAD_CAST device_event_content->details);
            }
          }
          /* Add the battery info after details element */
          AddBatteryInfo(event_node);
        }
          break;
        case EVENT_VSP_STATUS_CHANGE:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);
        }
          break;
        case EVENT_APP_PARAM_UPDATE:
        {
          int param_update_counter;
          int param_update_count_read;
          app_param_update *param_update_ptr;
          app_param_update_info_t *param_update_info = &device_event_content
              ->device_event_data.param_update_info;
          int tot_param_size = sizeof(app_param_update)
              * param_update_info->param_update_count;

          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);

          param_update_ptr = (app_param_update*) malloc(tot_param_size);
          ReadParamUpdateFile(param_update_ptr, tot_param_size,
                              &param_update_count_read, NULL,
                              param_update_info->param_update_list_filename);

          if (param_update_count_read != param_update_info->param_update_count)
          {
            dbg_warn(
                "%s: param_update_count (%d) does not match count read from file (%d) - using file count\n",
                __FUNCTION__, param_update_info->param_update_count,
                param_update_count_read);
          }

          for (param_update_counter = 0;
              param_update_counter < param_update_count_read;
              param_update_counter++)
          {
            xmlNodePtr param_update_node = NULL;

            param_update_node = xmlNewChild(
                event_node, NULL, BAD_CAST VHQ_XML_EVENT_TYPE_PARAM_UPDATE,
                NULL);
            if (param_update_node)
            {
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
              xmlSetProp(param_update_node,
              BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_NAME,
                         BAD_CAST param_update_ptr[param_update_counter].name);
              xmlSetProp(param_update_node,
              BAD_CAST VHQ_XML_GET_DATA_APP_PROFILE_ATTRIBUTE_VALUE,
                         BAD_CAST param_update_ptr[param_update_counter].value);
              addTimeAttr(param_update_node,
              VHQ_XML_EVENT_PARAM_UPDATE_DATETIME,
                          param_update_info->param_update_time, TRUE);
              xmlSetProp(
                  param_update_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO,
                  BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
              xmlSetProp(param_update_node,
              BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH,
                         BAD_CAST param_update_ptr[param_update_counter].hash);
            }
          }

          /* ADKTMS-2897: remove this file after VHQManagerContactServer is called so that we can recover from errors, etc. */
          //remove(param_update_info->param_update_list_filename);
        }
          break;
        case EVENT_ANTISKIMMING_TEST_RESULTS:
        {
          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          /* Add the battery info after details element */
          AddBatteryInfo(event_node);

          if (device_event_content->description
              && strlen(device_event_content->description))
          {
            xmlSetProp(event_node, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
            BAD_CAST device_event_content->description);
          }

          if (device_event_content->details
              && strlen(device_event_content->details))
          {
            xmlNewChild(event_node, NULL, BAD_CAST VHQ_XML_EVENT_DETAILS,
            BAD_CAST device_event_content->details);
          }
        }
          break;
        case EVENT_MPC_STATUS:
        {
          xmlNodePtr mpc_details_node = NULL;
          struct platform_s platform;
          platform = sysinfo_platform();

          xmlSetProp(event_node, BAD_CAST VHQ_XML_EVENT_SOURCE_TAG,
          BAD_CAST VHQ_XML_EVENT_SOURCE_TERMINAL);

          if (device_event_content->description
              && strlen(device_event_content->description))
          {
            xmlSetProp(event_node, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
            BAD_CAST device_event_content->description);
          }

          mpc_details_node = xmlNewChild(event_node, NULL,
          BAD_CAST VHQ_XML_EVENT_MPC_DETAILS,
                                         NULL);
          /* USB Host or Device */
          {
            xmlNodePtr usb_port_node = NULL;
            usb_port_node = xmlNewChild(mpc_details_node, NULL,
            BAD_CAST VHQ_XML_EVENT_MPC_NODE,
                                        NULL);
            xmlSetProp(usb_port_node,
            BAD_CAST VHQ_XML_EVENT_MPC_NAME,
                       BAD_CAST VHQ_XML_EVENT_MPC_USB);
            xmlSetProp(usb_port_node,
            BAD_CAST VHQ_XML_EVENT_MPC_AVAIL,
                       BAD_CAST VHQ_XML_TRUE);

            if (platform.cable.usbType & USBTYPE_HOST)
            {
              xmlSetProp(usb_port_node,
              BAD_CAST VHQ_XML_EVENT_MPC_USBTYPE,
                         BAD_CAST VHQ_XML_EVENT_MPC_USBTYPE_HOST);
            }
            else
            {
              xmlSetProp(usb_port_node,
              BAD_CAST VHQ_XML_EVENT_MPC_USBTYPE,
                         BAD_CAST VHQ_XML_EVENT_MPC_USBTYPE_DEV);
            }
          }

          /* Add Ethernet if it exists */
          if (platform.cable.ethernet & PORT_STATUS_PRESENT)
          {
            xmlNodePtr eth_port_node = NULL;

            eth_port_node = xmlNewChild(mpc_details_node, NULL,
            BAD_CAST VHQ_XML_EVENT_MPC_NODE,
                                        NULL);
            xmlSetProp(eth_port_node,
            BAD_CAST VHQ_XML_EVENT_MPC_NAME,
                       BAD_CAST VHQ_XML_EVENT_MPC_ETH);
            xmlSetProp(eth_port_node,
            BAD_CAST VHQ_XML_EVENT_MPC_AVAIL,
                       BAD_CAST VHQ_XML_TRUE);
          }

          /* Add COM1 */
          AddComStatus(mpc_details_node, &platform.cable.port1,
                       (char*) VHQ_XML_EVENT_MPC_COM1);
          /* Add COM2 */
          AddComStatus(mpc_details_node, &platform.cable.port2,
                       (char*) VHQ_XML_EVENT_MPC_COM2);
          /* Add COM3 */
          AddComStatus(mpc_details_node, &platform.cable.port3,
                       (char*) VHQ_XML_EVENT_MPC_COM3);
        }
          break;
      }
    }
  }

  PRINT_XML_DOC(__FUNCTION__, doc);

  return ret_val;
}


static bool XMLUpdateCreate(xmlDocPtr doc, int comm_id, uint32 message_id,
                            char *update_type, char *sw_ref_no, char *reference)
{
  char SerialNum[SERIAL_NUM_LEN];
  char ModelNum[16];
  char IPAddress[IP_ADDRESS_LEN];
  xmlNodePtr root_node = NULL, initiator_node = NULL, identifier_node = NULL;/* node pointers */
  xmlNodePtr content_node = NULL, header_node = NULL, actions_node = NULL,
      action_node = NULL;
  char customer_id[64];
  uint32 unique_id;
  batt_info_t batteryInfo;

#ifdef Mx2
  //unsigned long size;
  //char productNo[PI_CIB_PRODUCT_NUMBER_SIZE];
  struct MIBInfo_s *mibi;
#endif

  root_node = xmlNewNode(NULL, BAD_CAST VHQ_DEVICE_XML_MSG_WRAPPER);
  xmlDocSetRootElement(doc, root_node);

  /* Add the header node */
  header_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_HEADER_TAG,
  NULL);

  /* Add Operation type node */
  xmlSetProp(header_node, BAD_CAST VHQ_XML_OP_TYPE_TAG,
  BAD_CAST VHQ_XML_OP_TYPE_GET_UPDATES);

  /* Add version node */
  xmlSetProp(header_node, BAD_CAST VHQ_XML_VERSION_TAG,
  BAD_CAST VHQ_XML_VERSION_NUM);

  /* Add Comm ID node */
  addIntegerAttr(header_node, VHQ_XML_COMM_ID_TAG, comm_id);

  /* Add Message ID node */
  addIntegerAttr(header_node, VHQ_XML_MESSAGE_ID_TAG, message_id);

  /* Add Customer ID node */
  memset(customer_id, 0, sizeof(customer_id));
  VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id, sizeof(customer_id));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_CUSTOMER_ID_TAG,
  BAD_CAST customer_id);

  /* Add IP Address node */
  GetIPAddress(IPAddress, sizeof(IPAddress));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_IP_ADDRESS_TAG,
  BAD_CAST IPAddress);

  if ((GetMainBatteryStatus(&batteryInfo) >= 0) && (batteryInfo.bMainBattery))
  {
    /* Add Battery Level Attribute */
    addIntegerAttr(header_node, VHQ_XML_HB_BAT_LEVEL_TAG, batteryInfo.level);
    dbg_msg("%s: Battery level %d\r\n", __FUNCTION__, batteryInfo.level);
  }
  else
    dbg_msg("%s: Battery Not present\r\n", __FUNCTION__);

  {
    char szHBFreq[64];
    uint32 heartbeat_rate;

    /* begin-ADKTMS-355 add separate HB frequencies for dial and gprs/3g */
    /* Get current com interface type: direct, dial, gprs/3g */
    heartbeat_rate = GetHBFreq(NULL, GetComType());

    snprintf(szHBFreq, sizeof(szHBFreq), "%d", heartbeat_rate);
    dbg_notice("heartbeat rate is %s\r\n", szHBFreq);
    xmlSetProp(header_node, BAD_CAST VHQ_XML_HB_FREQ, BAD_CAST szHBFreq);
  }

  /* Add device time attribute */
  addTimeAttr(header_node, VHQ_XML_LOCAL_TIME, linux_time(NULL), TRUE);

  /* Add initiator node */
  initiator_node = xmlNewChild(header_node, NULL,
  BAD_CAST VHQ_XML_INITIATOR_TAG,
                               NULL);
  xmlNewProp(initiator_node, BAD_CAST VHQ_XML_INITIATOR_TYPE_TAG,
  BAD_CAST "Terminal");

  /* Add identifier node */
  memset(SerialNum, 0, sizeof(SerialNum));
  GetSerialNumber(SerialNum);
  memset(ModelNum, 0, sizeof(ModelNum));
  GetModelNumber(ModelNum, sizeof(ModelNum));
  identifier_node = xmlNewChild(initiator_node, NULL,
  BAD_CAST VHQ_XML_IDENTIFIER_TAG,
                                NULL);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
  BAD_CAST ModelNum);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
  BAD_CAST SerialNum);

  unique_id = 0;
  VHQGetParameterUint32(PARAM_UNIQUE_DEVICE_ID, &unique_id, DEFAULT_BASE);
  if (unique_id != 0)
    addIntegerAttr(identifier_node, VHQ_XML_IDENTIFIER_UNIQUE_ID_TAG,
                   unique_id);

#ifdef Mx2
  mibi = sysinfo_MIB();
  dbg_msg("%s: Using MIB for Part Number\n", __FUNCTION__);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
  BAD_CAST trim_whitespace(mibi->partNumber));
#endif

  _AddAppCustomParmsToIdentifier(header_node, identifier_node,
  VHQ_XML_OP_TYPE_GET_UPDATES);

  /* Add Content nodes */
  content_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_CONTENT_TAG,
  NULL);

  actions_node = xmlNewChild(content_node, NULL,
  BAD_CAST VHQ_XML_CONTENT_ACTIONS_TAG,
                             NULL);

  action_node = xmlNewChild(actions_node, NULL,
  BAD_CAST VHQ_XML_ACTIONS_ACTION_ID_TAG,
                            NULL);
  xmlSetProp(action_node, BAD_CAST VHQ_XML_ACTIONS_UPDATE_TYPE_TAG,
  BAD_CAST update_type);
  xmlSetProp(action_node, BAD_CAST VHQ_XML_ACTIONS_SOFTWARE_TAG,
  BAD_CAST sw_ref_no);
  xmlSetProp(action_node, BAD_CAST VHQ_XML_ACTIONS_REFERENCE_TAG,
  BAD_CAST reference);

  PRINT_XML_DOC(__FUNCTION__, doc);

  return TRUE;
}


static time_t calc_expiration_date(time_t exec_time, uint32 recur_count,
                                   uint32 recur_per_value,
                                   recur_unit_t recur_per_unit)
{
  time_t ret_val;
  struct tm local_time;

  /* ADKTMS-59 - do not set next exec time to current time if in the past
   * calculate expiration date compared to originally scheduled time of
   * first occurrence.
   *
   time_t cur_time = linux_time(NULL);
   if (exec_time < cur_time)
   {
   exec_time = cur_time;
   }
   *
   */

  //Currently not supporting recurrences every second or annually, but calculations are done anyway for those two.
  //Only Daily, Weekly and Monthly recurrences are currently supported.
  switch (recur_per_unit)
  {
    case RECUR_UNIT_SECOND:
      ret_val = ((recur_count * recur_per_value));
      dbg_msg(
          "%s: RECUR_UNIT_SECOND - ret_val = %d = ((recur_count(%d) * recur_per_value(%d)))\n",
          __FUNCTION__, ret_val, recur_count, recur_per_value);
      break;
    case RECUR_UNIT_DAY:
      ret_val = ((recur_count * (recur_per_value * (60 * 60 * 24))));
      dbg_msg(
          "%s: RECUR_UNIT_DAY - ret_val = %d = ((recur_count(%d) * (recur_per_value(%d) * (60 * 60 * 24))))\n",
          __FUNCTION__, ret_val, recur_count, recur_per_value);
      break;
    case RECUR_UNIT_WEEK:
      ret_val = ((recur_count * (recur_per_value * (60 * 60 * 24 * 7))));
      dbg_msg(
          "%s: RECUR_UNIT_WEEK - ret_val = %d = ((recur_count(%d) * (recur_per_value(%d) * (60 * 60 * 24 * 7))))\n",
          __FUNCTION__, ret_val, recur_count, recur_per_value);
      break;
    case RECUR_UNIT_MONTH:
      if (linux_localtime(&exec_time, &local_time))
      {
        local_time.tm_mon += (recur_count * recur_per_value);
        ret_val = linux_mktime(&local_time) - exec_time;
      }
      else
      {
        /* linux_localtime failed so just use 30 days per month */
        ret_val = ((recur_count * (recur_per_value * (60 * 60 * 24 * 30))));
      }
      dbg_msg(
          "%s: RECUR_UNIT_MONTH - ret_val = %d = (recur_count(%d) * recur_per_value(%d) * (seconds in 1 month))\n",
          __FUNCTION__, ret_val, recur_count, recur_per_value);
      break;
    case RECUR_UNIT_YEAR:
      if (linux_localtime(&exec_time, &local_time))
      {
        local_time.tm_year += (recur_count * recur_per_value);
        ret_val = linux_mktime(&local_time) - exec_time;
      }
      else
      {
        /* linux_localtime failed so just use 365 days per year */
        ret_val = ((recur_count * (recur_per_value * (60 * 60 * 24 * 365))));
      }
      dbg_msg(
          "%s: RECUR_UNIT_YEAR - ret_val = %d = (recur_count(%d) * recur_per_value(%d) * (seconds in 1 year))\n",
          __FUNCTION__, ret_val, recur_count, recur_per_value);
      break;
    default:
      ret_val = 0;
  }

  /* We calculated for an extra recurrence so we need to subtract one second to make sure it won't run
   one extra time */
  ret_val = ret_val - 1;

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

static bool OpSetMeetsPreDownloadReq(operation_set_event_t *OpSetEvents,
                                     uint32 NumEvents)
{
  int i;
  int OpSetTotalFileSize = 0;
  bool ret_val = FALSE;
  bool bDeployMode = FALSE;
  bool bPackageReboot = FALSE;

  /* If there is only 1 event, then don't split it up */
  if (NumEvents <= 1)
  {
    return FALSE;
  }

  for (i = 0; (uint32) i < NumEvents; i++)
  {
    if (OpSetEvents[i].opCbType == cbLaunchDownloader)
    {
      launch_downloader_parms *temp_parms_p =
          (launch_downloader_parms*) OpSetEvents[i].opData;

      if (temp_parms_p != NULL)
      {
        OpSetTotalFileSize += temp_parms_p->dl_file_content.FileSize;
        log_dbg("%s: Download %d is %d bytes - OpSetTotalFileSize = %d\n",
                __FUNCTION__, i + 1, temp_parms_p->dl_file_content.FileSize,
                OpSetTotalFileSize);
        if (temp_parms_p->dl_file_content.PostInstallAction == 1)
        {
          dbg_msg("%s: Download %d installaction = %d bPackageReboot = TRUE\n",
                  __FUNCTION__, i + 1,
                  temp_parms_p->dl_file_content.PostInstallAction);
          bPackageReboot = TRUE;
        }
      }
      else
      {
        log_dbg("%s: Download %d has invalid opData pointer - 0x%08x\n",
                __FUNCTION__, i + 1, temp_parms_p);
      }
    }
  }

  VHQGetParameterBool(PARAM_AGENT_DEPLOY_MODE, &bDeployMode);

  // In case of Deployment mode if Post Install Action is Reboot then set Download and Install at once.
  if ((OpSetTotalFileSize != 0)
      && (bDeployMode == FALSE || bPackageReboot == FALSE))
  {
    ret_val = CheckFreeMemForDownload(
    VHQ_DOWNLOADER_PARTIAL_FILE_STORAGE_LOCATION,
                                      OpSetTotalFileSize);
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

/* These will be allocated as needed to allow for any number of operations per operation set */
operation_set_event_t *op_set_events = NULL;
operation_set_event_t *op_set_install_events = NULL;
launch_downloader_parms *install_downloader_parms = NULL;
operation_set_event_t *op_set_expiring_events = NULL;
launch_downloader_parms *expiring_downloader_parms = NULL;

long long int last_server_nonce = 0;

uint32 OpSetAckArray[MAX_TOTAL_EVENTS];
uint16 NumOpSetAcks;

void ResetServerNONCE(void)
{
  dbg_msg("%s: Server Nonce reset from %s\n", __FUNCTION__,
          lltoa(last_server_nonce));
  last_server_nonce = 0;
}

void ClearOpSetAckArray(void)
{
  memset(OpSetAckArray, 0, (sizeof(uint32) * MAX_TOTAL_EVENTS));
  NumOpSetAcks = 0;
}

void AddOpSetAck(uint32 OpSetId)
{
  uint16 i;

  if (NumOpSetAcks >= MAX_TOTAL_EVENTS)
  {
    return;
  }

  for (i = 0; i < NumOpSetAcks; i++)
  {
    if (OpSetAckArray[i] == OpSetId)
    {
      return;
    }
  }

  OpSetAckArray[NumOpSetAcks] = OpSetId;
  dbg_notice("%s: OpSetID %d added to OpSetAckArray[%d]\n", __FUNCTION__,
             OpSetAckArray[NumOpSetAcks], NumOpSetAcks);
  NumOpSetAcks++;
}


static vhq_result_t VHQXmlProcessManagementPlan(xmlNode *root_element,
                                                xmlDocPtr *status_report_doc,
                                                int *cur_comm_id,
                                                uint32 *srv_message_id,
                                                bool isKeyExchange)
{
  xmlNode *temp_node = NULL;
  xmlNode *header_node = NULL;
  xmlNode *op_sets_node = NULL;
  xmlNode *op_set_node = NULL;
  char *version;
  char *srv_msg_type_str;
  char *is_maint_str;
  char *is_force_inst_str;

  bool is_maint = FALSE;
  bool is_force_install = FALSE;

  int comm_id, message_id;
  long long int server_nonce;
  uint32 total_events_extracted = 0;
  srv_msg_type_t srv_msg_type = SRV_MSG_TYPE_UNKNOWN;
  vhq_result_t result = VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
  bool is_cancel_operation = FALSE;

  /* Clear the ACK array */
  ClearOpSetAckArray();

  /* Find the header node */
  header_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);

  /* Find the version */
  version = GetStrAttrFromNode(header_node, VHQ_XML_VERSION_TAG);
  if (version)
  {
    dbg_msg("%s: Found version node - value = %s\n", __FUNCTION__, version);
    xmlFree(version);
    version = NULL;
  }

  /* Find the comm ID */
  if (!GetIntAttrFromNode(header_node, VHQ_XML_COMM_ID_TAG, &comm_id))
    comm_id = 0;
  dbg_msg("%s: Found Comm ID - value = %d\n", __FUNCTION__, comm_id);

  /* Find the Message ID */
  if (!GetIntAttrFromNode(header_node, VHQ_XML_MESSAGE_ID_TAG, &message_id))
  {
    message_id = MESSAGE_ID_INVALID;
    log_err("%s ERROR: Could not get Message ID value\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
  }
  dbg_msg("%s: Found Message ID node - value = %d\n", __FUNCTION__, message_id);

#if NONCE_CHECKING
  /* Find the NONCE */
  if (!GetLongIntAttrFromNode(header_node, VHQ_XML_NONCE_TAG, &server_nonce))
  {
    server_nonce = 0;
    log_err("%s ERROR: Could not get Nonce value\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
  }
  dbg_msg("%s: Found Nonce - value = %s\n", __FUNCTION__, lltoa(server_nonce));

  if (last_server_nonce == 0)
  {
    dbg_msg("%s: last_server_nonce IS NOT SET - SETTING TO %s\n", __FUNCTION__,
            lltoa(server_nonce));
    last_server_nonce = server_nonce;
  }
  else
  {
    dbg_msg("%s: Comparing received Nonce %s to previous Nonce %s\n",
            __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
    if (server_nonce <= last_server_nonce)
    {
      char OpId[64] = { 0 };
      uint32 OpSetId = 0;
      vhq_result_t create_xml_result;
      xmlNode *response_root_element;
      xmlNode *response_op_res_node;

      /* Get the operation ID */
      temp_node = GetNodeByName(root_element, VHQ_XML_OPERATION_TAG);
      if (temp_node)
      {
        char *op_id;

        /* Read the operation ID from the node */
        op_id = GetStrAttrFromNode(temp_node, VHQ_XML_OPERATION_ID_TAG);
        if (op_id)
        {
          strcpy(OpId, op_id);
          xmlFree(op_id);
        }
      }

      /* Get the operationSet ID */
      temp_node = GetNodeByName(root_element, VHQ_XML_OPERATION_SETS_TAG);
      if (temp_node)
        OpSetId = VHQXmlSearch_OperationSetId_by_OperationId(temp_node, OpId);

      create_xml_result = CreateResponseXml(status_report_doc, comm_id, OpId,
                                            message_id, srv_msg_type,
                                            SRV_OP_TYPE_UNKNOWN, TRUE);
      response_root_element = xmlDocGetRootElement(*status_report_doc);
      response_op_res_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_OP_RES_TAG);
      if (create_xml_result == VHQ_SUCCESS)
        AddOperationResult(response_op_res_node, OpId,
                           VHQ_SERVER_MESSAGE_INVALID_NONCE, OpSetId, 0,
                           SRV_OP_TYPE_UNKNOWN);

      log_err("%s ERROR: received Nonce %s, expected Nonce greater than %s\n",
              __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
      return VHQ_SERVER_MESSAGE_INVALID_NONCE;
    }
  }

#endif

  /* Check the comm ID */
  if (COMM_ID_INVALID(*cur_comm_id))
    *cur_comm_id = comm_id;
  else if (comm_id != *cur_comm_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    char OpId[64];
    vhq_result_t create_xml_result;
    xmlNode* response_root_element;
    xmlNode* response_op_res_node;

    /* Get the operation ID */
    memset(OpId, 0, sizeof(OpId));
    temp_node = GetNodeByName(root_element, VHQ_XML_OPERATION_TAG);
    if (temp_node) {
      char* op_id;

      /* Read the operation ID from the node */
      op_id = GetStrAttrFromNode(temp_node, VHQ_XML_OPERATION_ID_TAG);
      if (op_id) {
        strcpy(OpId, op_id);
        xmlFree(op_id);
      }
    }

    create_xml_result = CreateResponseXml(status_report_doc, comm_id, OpId,
      message_id, srv_msg_type, SRV_OP_TYPE_UNKNOWN, TRUE);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_op_res_node = GetNodeByName(response_root_element,
        VHQ_XML_CONTENT_OP_RES_TAG);
    if (create_xml_result == VHQ_SUCCESS)
      AddOperationResult(response_op_res_node, OpId,
      VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE, 0, 0, SRV_OP_TYPE_UNKNOWN);

    log_err( "%s ERROR: received comm id %d, expected comm id %d\n",
        __FUNCTION__, comm_id, *cur_comm_id);
    return VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE;
#else
    log_warn("%s WARNING: received comm id %d, expected comm id %d\n",
             __FUNCTION__, comm_id, *cur_comm_id);
#endif
  }

  if (*srv_message_id == MESSAGE_ID_INVALID)
    *srv_message_id = message_id;
  else if ((uint32) message_id <= *srv_message_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    char OpId[64];
    vhq_result_t create_xml_result;
    xmlNode* response_root_element;
    xmlNode* response_op_res_node;

    /* Get the operation ID */
    memset(OpId, 0, sizeof(OpId));
    temp_node = GetNodeByName(root_element, VHQ_XML_OPERATION_TAG);
    if (temp_node) {
      char* op_id;

      /* Read the operation ID from the node */
      op_id = GetStrAttrFromNode(temp_node, VHQ_XML_OPERATION_ID_TAG);
      if (op_id) {
        strcpy(OpId, op_id);
        xmlFree(op_id);
      }
    }

    create_xml_result = CreateResponseXml(status_report_doc, comm_id, OpId,
      message_id, srv_msg_type, SRV_OP_TYPE_UNKNOWN, TRUE);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_op_res_node = GetNodeByName(response_root_element,
        VHQ_XML_CONTENT_OP_RES_TAG);
    if (create_xml_result == VHQ_SUCCESS)
      AddOperationResult(response_op_res_node, OpId,
      VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE, 0, 0, SRV_OP_TYPE_UNKNOWN);

      log_err("%s ERROR: received message id %d, expected message id greater than %d\n",
        __FUNCTION__, message_id, *srv_message_id);
    return VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE;
#else
    log_err(
        "%s WARNING: received message id %d, expected message id %d or greater\n",
        __FUNCTION__, message_id, *srv_message_id);
#endif
  }
  else
    *srv_message_id = message_id;

  dbg_msg("%s: Finding %s node\n", __FUNCTION__, VHQ_XML_OPERATION_SETS_TAG);
  op_sets_node = GetNodeByName(root_element, VHQ_XML_OPERATION_SETS_TAG);

  /* Get the operation set */
  op_set_node = GetNodeByName(op_sets_node, VHQ_XML_OPERATION_SET_TAG);

  /* Don't allow run now events to get run right away - this will allow everything to get scheduled first */
  LockEventScheduler(TRUE);

  event_set_id_t previous = EVENT_SET_ID_INVALID;
  while (op_sets_node && op_set_node)
  {

    operation_set_event_t **op_set_events_double_p = &op_set_events;
    uint32 num_events_extracted = 0;
    int event_counter;
    bool recurring = FALSE;
    bool expired_action_required = FALSE;
    uint32 op_set_id = 0;
    time_t exec_time = 0;
    time_t loc_exec_time = 0;
    recur_unit_t recur_per_unit = RECUR_UNIT_SECOND;
    uint32 recur_per_value = 0;
    uint32 recur_count = 0;
    time_t event_expiration_date = 0;
    time_t event_expiration_time = 0;
    time_t loc_recur_expiration_data = 0;
    time_t apply_on_date = 0;
    time_t loc_apply_on_date = 0;
    long int run_time = 0;
    long int install_run_time = 0;
    uint32 install_run_time_epoch = 0;
    event_set_id_t event_set_id = EVENT_SET_ID_INVALID;

    dbg_msg("%s: Getting attr %s from  %s node\n", __FUNCTION__,
            VHQ_XML_SRV_MSG_TYPE_TAG, VHQ_XML_OPERATION_SETS_TAG);

    srv_msg_type_str = GetStrAttrFromNode(op_sets_node,
    VHQ_XML_SRV_MSG_TYPE_TAG);
    if (!(ConvertSrvMsgType(srv_msg_type_str, &srv_msg_type)))
    {
      xmlFree(srv_msg_type_str);
      log_err("%s ERROR: Could not get Message Type\n", __FUNCTION__);
      LockEventScheduler(FALSE);
      CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                             OpSetAckArray, NumOpSetAcks, FALSE);
      return VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
    }
    xmlFree(srv_msg_type_str);
    srv_msg_type_str = NULL;

    dbg_msg(
        "%s: Calling parse_management_plan_operations(CID=%d, MID=%d) - op_set_events = 0x%08x, op_set_events_double_p = 0x%08x, &op_set_events[0]\n",
        __FUNCTION__, comm_id, message_id, op_set_events,
        op_set_events_double_p, &op_set_events[0]);
    num_events_extracted = 0;
    result = parse_management_plan_operations(op_set_node, status_report_doc,
                                              comm_id, message_id, srv_msg_type,
                                              op_set_events_double_p,
                                              &num_events_extracted);

    total_events_extracted += num_events_extracted;
    dbg_msg("%s: Extracted %d events - total_events_extracted = %d\n",
            __FUNCTION__, num_events_extracted, total_events_extracted);

    /* Get the operation Set ID */
    GetIntAttrFromNode(op_set_node, VHQ_XML_OPERATION_SET_ID_TAG,
                       (int*) &op_set_id);
    dbg_msg("%s:%s(%d): Extracted OperationSetId (opSetId) of %d\n", __FILE__,
            __FUNCTION__, __LINE__, op_set_id);

    /* Set the op_set_id now, because either way we will want to send
     * it with the acknowledgement, whether we fail or succeed */
    AddOpSetAck(op_set_id);

    if (op_set_events && (num_events_extracted > 0))
    {
      char *recur_unit_str;
      event_timer_t timer_type = EVENT_TIMER_DATE_TIME;

      /* Convert the operation set execution time */
      loc_exec_time = 0;
      GetIntAttrFromNode(op_set_node, VHQ_XML_OPERATION_SET_EXEC_TIME_TAG,
                         (int*) &loc_exec_time);
      exec_time = ConvertServerLocalTimeToDeviceUTC("OperationSetExecutionTime",
                                                    loc_exec_time);
      log_dbg("%s: exec_time = %lu\n", __FUNCTION__, exec_time);

      /* Get the recurrence parameters */
      GetIntAttrFromNode(op_set_node, VHQ_XML_OPERATION_SET_RECUR_PER_VALUE,
                         (int*) &recur_per_value);
      if (recur_per_value != 0)
        recurring = TRUE;

      recur_unit_str = GetStrAttrFromNode(op_set_node,
      VHQ_XML_OPERATION_SET_RECUR_PER_UNIT);
      if (recur_unit_str)
      {
        ConvertRecurUnitType(recur_unit_str, &recur_per_unit);
        xmlFree(recur_unit_str);
        recur_unit_str = NULL;
      }

      /* Extract maintenance info */
      is_maint_str = GetStrAttrFromNode(op_set_node,
      VHQ_XML_OPERATION_SET_IS_MAINTENANCE);
      if (!is_maint_str || !ConvertTrueFalse(is_maint_str, &is_maint))
      {
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
                 "%s: Could not get IsMaintenance option\n", __FUNCTION__);
      }
      if (is_maint_str)
      {
        xmlFree(is_maint_str);
        is_maint_str = NULL;
      }

      /* Extract event expiration info for recur event */
      loc_recur_expiration_data = 0;
      GetIntAttrFromNode(op_set_node,
      VHQ_XML_OPERATION_SET_RECUR_EXPIRY_TAG,
                         (int*) &loc_recur_expiration_data);
      if (loc_recur_expiration_data)
        event_expiration_date = ConvertServerLocalTimeToDeviceUTC(
            "RecurExpirationDate", loc_recur_expiration_data);

      /* We have no absolute expiration date for recur event, try to calculate based on RecurCount, if present */
      if (event_expiration_date == 0)
      {
        GetIntAttrFromNode(op_set_node, VHQ_XML_OPERATION_SET_RECUR_COUNT,
                           (int*) &recur_count);
        if (recur_count != 0)
        {
          time_t cur_time = linux_time(NULL);
          struct tm loc_time;

          event_expiration_date = calc_expiration_date(exec_time, recur_count,
                                                       recur_per_value,
                                                       recur_per_unit);

          /* We need to map received time expiration with localtime to restore inside of ScheduleEventSet() */
          event_expiration_date = exec_time + event_expiration_date;

          dbg_msg("%s: Calculated expiration date (%ld)\n", __FUNCTION__,
                  event_expiration_date);
          linux_localtime(&exec_time, &loc_time);
          dbg_msg("%s: exec_time = %d (string) = %s\n", __FUNCTION__, exec_time,
                  tmtoa(&loc_time));
          linux_localtime(&cur_time, &loc_time);
          dbg_msg(
              "%s: current time = %d (string) = %s\trecur_count = %d, recur_per_value = %d, recur_per_unit = %d\n",
              __FUNCTION__, cur_time, tmtoa(&loc_time), recur_count,
              recur_per_value, recur_per_unit);
        }
      }

      /* We still have no absolute expiration date for event, try to use ExpirationDate */
      if (!event_expiration_date)
      {
        time_t dl_loc_expiration_date = 0;

        GetIntAttrFromNode(op_set_node,
        VHQ_XML_DL_OPERATION_EXPIRATION_DATE,
                           (int*) &dl_loc_expiration_date);
        if (dl_loc_expiration_date)
          event_expiration_date = ConvertServerLocalTimeToDeviceUTC(
              "ExpirationDate", dl_loc_expiration_date);
      }

      /* TODO: REMOVE IT ONCE SERVER UPDATED!!! SERVER SHOULD SEND ExpirationDate FOR MW DOWNLOADS ALWAYS
       *
       * Use ExpirationDate if we have it. If not - create new one in 48 hours, for MW downloads only.
       * For test purposes, until server will always send ExpirationDate for downloads */
      if (event_expiration_date > linux_time(NULL))
      {
        event_expiration_time = event_expiration_date - linux_time(NULL);
      }

      /* Lets see if we'll need to schedule different event sets for installation or expiration */
      loc_apply_on_date = 0;
      GetIntAttrFromNode(op_set_node, VHQ_XML_DL_OPERATION_APPLY_ON_DATE,
                         (int*) &loc_apply_on_date);
      apply_on_date = ConvertServerLocalTimeToDeviceUTC("ApplyOnDate",
                                                        loc_apply_on_date);
      log_dbg("%s: apply_on_date = %lu\n", __FUNCTION__, apply_on_date);

      if (exec_time == 0 && apply_on_date == 0 && event_expiration_date == 0)
      {
        /* If we need to run this now, setup the event set for RTC timer type.  That way, if a SET_CLOCK
         operation happens, we will still execute this now */
        timer_type = EVENT_TIMER_RTC;
      }

      /* All Server triggered operations to have 48hr expiry */
      if (!event_expiration_date)
      {
        event_expiration_time = 48 * 60 * 60;
        event_expiration_date = linux_time(NULL) + event_expiration_time;
      }

      if (exec_time == 0)
      {
        /* Execute time was not set or was set to 0 which means to run it now */
        run_time = 0;
      }
      else if (exec_time <= linux_time(NULL))
      {
        //ADKTMS-59 - start
        time_t save_exec_time, next_expdate, cur_time = linux_time(NULL);
        int i;
        if (recur_count != 0 || recurring)
        {
          // Check each recurrence to find first one greater than current device time
          // This is necessary when device clock is out of sync with server clock
          // When device time is > server time, then scheduled recurring jobs on server can be
          // in the past when compared to device time.  ADKTMS-59 solution requires to skip scheduling
          // any occurrences that are in the past time and start recurrence, if we still have something to process.
          save_exec_time = exec_time;
          for (i = 1;
              exec_time <= cur_time
                  && ((recur_count && (uint32) i <= recur_count)
                      || (!recur_count && recurring)); i++)
          {
            struct tm loc_time;
            struct tm loc_time2;
            struct tm loc_time3;

            //calc_expiraton_date() will return absolute number of seconds required for number of recurrences to be processed
            //for example if recurrence period is DAYS and number of recurrences is 5 then it will return the
            //number of seconds for 5 days.
            next_expdate = calc_expiration_date(save_exec_time, i,
                                                recur_per_value,
                                                recur_per_unit);
            //Add second back so next occurrence is scheduled at original time
            next_expdate++;
            exec_time = save_exec_time + next_expdate;
            dbg_msg(
                "%s, %d: Current Time: %d, Next exp. date: %d, New exec_time: %d, recur_per_value: %d, recur_per_unit: %d\n",
                __FUNCTION__, i, cur_time, next_expdate, exec_time,
                recur_per_value, recur_per_unit);
            linux_localtime(&cur_time, &loc_time);
            linux_localtime(&next_expdate, &loc_time2);
            linux_localtime(&exec_time, &loc_time3);
            dbg_msg(
                "%s, %d: Current Time: %s, Next exp. date: %s, New exec_time: %s, recur_per_value: %d, recur_per_unit: %d\n",
                __FUNCTION__, i, tmtoa(&loc_time), tmtoa(&loc_time2),
                tmtoa(&loc_time3), recur_per_value, recur_per_unit);
          }
          if (exec_time <= cur_time)
          {
            //If all recurrence times are still in the past, then get next Op. Set node
            dbg_msg(
                "%s, All recurrence times are still in the past.  Current Time: %d; Exec Time: %d\n",
                __FUNCTION__, cur_time, exec_time);
            /* Move to the next OperationSet Node */
            dbg_msg("%s: Moving to next %s node\n", __FUNCTION__,
                    VHQ_XML_OPERATION_SET_TAG);
            op_set_node = GetNodeByName(op_set_node->next,
            VHQ_XML_OPERATION_SET_TAG);

            if (op_set_node == NULL)
            {
              /* This OperationSets node has no more OperationSet sub-elements do move to the next OperationSets Node */
              dbg_msg(
                  "%s: No more OperationSet Sub-Elements - Moving to next %s node\n",
                  __FUNCTION__, VHQ_XML_OPERATION_SETS_TAG);
              op_sets_node = GetNodeByName(op_sets_node->next,
              VHQ_XML_OPERATION_SETS_TAG);

              if (op_sets_node)
              {
                /* Get the first OperationSet Node of new OperationSets element*/
                dbg_msg("%s: Getting first %s node from new %s node\n",
                        __FUNCTION__, VHQ_XML_OPERATION_SET_TAG,
                        VHQ_XML_OPERATION_SETS_TAG);
                op_set_node = GetNodeByName(op_sets_node,
                VHQ_XML_OPERATION_SET_TAG);
              }
            }
            continue;
          }
          else
          {
            run_time = exec_time - linux_time(NULL);
          }
          log_dbg("%s, Run Time: %s\n", __FUNCTION__, ctime(&run_time));
        }
        //ADKTMS-59 - end
        else
        {
          /* (ADKTMS-743): The server can send us multiple expired events in whatever order they were scheduled.  Event Scheduler will sort
           through the negative numbers so they are executed in the correct order so allow negative run_time values here and just let
           Event Scheduler sort the order out */
          run_time = exec_time - linux_time(NULL);
        }
      }
      else
        run_time = exec_time - linux_time(NULL);

      /* (ADKTMS-743): The server can send us multiple expired events in whatever order they were scheduled.  Event Scheduler will sort
       through the negative numbers so they are executed in the correct order so allow negative install_run_time values here and just let
       Event Scheduler sort the order out */
      if (apply_on_date == 0)
      {
        install_run_time = install_run_time_epoch = 0;
      }
      else
      {
        time_t cur_time = linux_time(NULL);
        if (apply_on_date - cur_time > 0)
          install_run_time = apply_on_date - cur_time;
        else
          install_run_time = 0;
        install_run_time_epoch = apply_on_date;
      }

      /* Process run_time for maintenance downloads */
      if (is_maint)
      {
        /* Server might define installation time inside of MW */
        if (run_time)
        {
          log_dbg(
              "%s: MW management plan has specified processing time, run_time = %ld\n",
              __FUNCTION__, run_time);
        }
        else
        {
          /* Calculate time for processing, default staggering is true */
          bool maint_dl_staggering_enabled = TRUE;

          VHQGetParameterBool(PARAM_AGENT_DOWNLOAD_STAGGERING_ENABLED,
                              &maint_dl_staggering_enabled);
          dbg_msg(
              "IsMaintenance value: %d - MaintenanceDownloadStaggering = %d\n",
              is_maint, maint_dl_staggering_enabled);

          if (maint_dl_staggering_enabled)
          {
            run_time = VHQRunTimeForDownload(event_expiration_date, 0, 0);
            log_dbg("%s: Maintenance Download delayed %ld seconds\n",
                    __FUNCTION__, run_time);
          }
          else
          {
            /* Maintenance download but staggering is off, Download fails if device is out of MW */
            run_time = 0;
          }
        }
      }

      if (is_maint_str)
      {
        xmlFree(is_maint_str);
        is_maint_str = NULL;
      }

      /* Force install */
      is_force_inst_str = GetStrAttrFromNode(op_set_node,
      VHQ_XML_OPERATION_SET_FORCE_INST);
      if (!is_force_inst_str
          || !ConvertTrueFalse(is_force_inst_str, &is_force_install))
      {
        dbg_notice("%s: Could not get Force Install option\n", __FUNCTION__);
      }

      if (is_force_inst_str)
      {
        xmlFree(is_force_inst_str);
        is_force_inst_str = NULL;
      }

      for (event_counter = 0; event_counter < num_events_extracted;
          event_counter++)
      {
        if (op_set_events[event_counter].opCbType == cbLaunchDownloader)
        {
          launch_downloader_parms *downloader_parms =
              (launch_downloader_parms*) op_set_events[event_counter].opData;

          switch (downloader_parms->dl_file_content.DownloadType
              & DL_FILE_DL_TYPE_TYPE_MASK)
          {
            case DL_FILE_DL_TYPE_CONTENT:
            case DL_FILE_DL_TYPE_CONTENT_BUNDLE_UNSIGNED:
            case DL_FILE_DL_TYPE_CONTENT_BUNDLE_MIXED:
              /* Mark download to provide backup copy of original file */
              if (downloader_parms->dl_file_content.ExpirationDate
                  || event_expiration_date)
              {
                downloader_parms->dl_file_content.DownloadType |=
                    DL_FILE_DL_TYPE_EXPIRES_MASK;
                expired_action_required = TRUE;
              }
              break;
            default:
              /* Don't need to do anything special for other types */
              break;
          }

          if (is_maint)
          {
            /* Setup the Maintenance download flag in the Download type field for these downloads */
            downloader_parms->dl_file_content.DownloadType |=
                DL_FILE_DL_TYPE_MAINTENANCE_MASK;
          }

          if (is_force_install)
          {
            /* Setup force install flag, overrides the AppApprovalPerOpSet, this includes pre approvals of Server, Install, Reboot, Restart */
            downloader_parms->dl_file_content.DownloadType |=
                DL_FILE_DL_TYPE_FORCE_INSTALL_MASK;
          }
        }
      }

      /* See if the download expires */
      if (event_expiration_date != 0)
      {
        time_t currentTime = linux_time(NULL);
        if (event_expiration_date < currentTime)
        {
          /* If this download expires and we are already past expiration we don't need to do anything */
          log_dbg(
              "%s: Operation Set expiration time has already passed at %s - ignoring\n",
              __FUNCTION__, ctime(&event_expiration_date));

          /* Move to the next OperationSet Node */
          dbg_msg("%s: Moving to next %s node\n", __FUNCTION__,
                  VHQ_XML_OPERATION_SET_TAG);
          op_set_node = GetNodeByName(op_set_node->next,
          VHQ_XML_OPERATION_SET_TAG);

          if (op_set_node == NULL)
          {
            /* This OperationSets node has no more OperationSet sub-elements do move to the next OperationSets Node */
            dbg_msg(
                "%s: No more OperationSet Sub-Elements - Moving to next %s node\n",
                __FUNCTION__, VHQ_XML_OPERATION_SETS_TAG);
            op_sets_node = GetNodeByName(op_sets_node->next,
            VHQ_XML_OPERATION_SETS_TAG);

            if (op_sets_node)
            {
              /* Get the first OperationSet Node of new OperationSets element*/
              dbg_msg("%s: Getting first %s node from new %s node\n",
                      __FUNCTION__, VHQ_XML_OPERATION_SET_TAG,
                      VHQ_XML_OPERATION_SETS_TAG);
              op_set_node = GetNodeByName(op_sets_node,
              VHQ_XML_OPERATION_SET_TAG);
            }
          }
          continue;
        }
      }

      /* Mitch (4-24-17): ADKTMS-1745 - make sure install_run_time is same as or after run_time */
      if ((install_run_time < run_time) || (install_run_time == 0 && run_time < 0))
      {
        log_dbg(
            "%s: install_run_time = %ld is before run_time = %ld - setting install_run_time to run_time\n",
            __FUNCTION__, install_run_time, run_time);
        install_run_time = run_time;
      }

      /* See if the install time is different than download time */
      dbg_msg("%s: install_run_time = %ld, run_time = %ld\n", __FUNCTION__,
              install_run_time, run_time);

      if ((install_run_time != run_time)
          || (OpSetMeetsPreDownloadReq(op_set_events, num_events_extracted)))
      {
        /* Different download/install times so we need to schedule a second event set for installations */
        int num_installer_events;
        event_set_id_t install_event_set_id;

        install_downloader_parms = malloc(
            sizeof(launch_downloader_parms) * num_events_extracted);
        op_set_install_events = malloc(
            sizeof(operation_set_event_t) * num_events_extracted);

        if (install_downloader_parms && op_set_install_events)
        {
          memset(install_downloader_parms, 0,
                 sizeof(launch_downloader_parms) * num_events_extracted);
          memset(op_set_install_events, 0,
                 sizeof(operation_set_event_t) * num_events_extracted);

          num_installer_events = 0;
          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            if (op_set_events[event_counter].opCbType == cbLaunchDownloader)
            {
              op_set_install_events[num_installer_events].opCbType =
                  cbLaunchDownloader;

              memcpy(&install_downloader_parms[num_installer_events],
                     op_set_events[event_counter].opData,
                     sizeof(launch_downloader_parms));

              /* Clear DOWNLOAD mask and set INSTALL mask for the install operation set */
              install_downloader_parms[num_installer_events].dl_file_content
                  .DownloadType &= ~(DL_FILE_DL_TYPE_DOWNLOAD_MASK);

              if ((install_downloader_parms[num_installer_events]
                  .dl_file_content.DownloadType & DL_FILE_DL_TYPE_TYPE_MASK)
                  != DL_FILE_DL_TYPE_PERIPHERAL)
              {
                install_downloader_parms[num_installer_events].dl_file_content
                    .DownloadType |= DL_FILE_DL_TYPE_INSTALL_MASK;
              }
              else
              {
                //
                // schedule a pass-through job
                //
                log_dbg(
                    "%s: Scheduling PASS-THROUGH DOWNLOAD event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, op_set_id = %d\n",
                    __FUNCTION__, num_events_extracted, recurring, run_time,
                    recur_per_unit, recur_per_value, op_set_id);
                install_downloader_parms[num_installer_events].dl_file_content
                    .DownloadType |= DL_FILE_DL_TYPE_PERIPHERAL_MASK;
              }
              // install_downloader_parms[num_installer_events].dl_file_content.DownloadType |= DL_FILE_DL_TYPE_INSTALL_MASK;

              op_set_install_events[num_installer_events].opData =
                  &install_downloader_parms[num_installer_events];
              op_set_install_events[num_installer_events].opDataSize =
                  sizeof(launch_downloader_parms);

              num_installer_events++;
            }
          }

          log_dbg(
              "%s: Scheduling DOWNLOAD event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, op_set_id = %d\n",
              __FUNCTION__, num_events_extracted, recurring, run_time,
              recur_per_unit, recur_per_value, op_set_id);

          if (num_installer_events != 0)
          {
            EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_COUNT, "",
                              num_installer_events, VHQ_SUCCESS, 0, 0,
                              !is_force_install);
          }

          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            log_dbg(
                "\tDOWNLOAD Event %d - Type = %d, Data = 0x%08x, DataSize = %d\n",
                event_counter, op_set_events[event_counter].opCbType,
                op_set_events[event_counter].opData,
                op_set_events[event_counter].opDataSize);
          }

          event_set_id = ScheduleEventSet(recurring, run_time, recur_per_unit,
                                          recur_per_value,
                                          event_expiration_time, 0, op_set_id,
                                          op_set_events, num_events_extracted,
                                          EVENT_SET_ID_INVALID,
                                          timer_type, GetCurrentInstance(),
                                          cbStandard, cbStandard,
                                          isKeyExchange);
          previous = event_set_id;
          if (event_set_id == EVENT_SET_ID_INVALID)
          {
            log_err("%s ERROR: Unable to schedule DOWNLOAD event set\n",
                    __FUNCTION__);
            /* We can free all of the memory we allocated for the parameters */
            for (event_counter = 0;
                (uint32) event_counter < num_events_extracted; event_counter++)
            {
              if (op_set_events[event_counter].opData != NULL)
              {
                free(op_set_events[event_counter].opData);
                op_set_events[event_counter].opData = NULL;
              }
            }

            if (op_set_events)
            {
              free(op_set_events);
              op_set_events = NULL;
            }

            CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                   OpSetAckArray, NumOpSetAcks, FALSE);
            LockEventScheduler(FALSE);
            return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
          }
          else
            dbg_msg("%s: Scheduled DOWNLOAD event set - event_set_id = %d \n",
                    __FUNCTION__, event_set_id);

          log_dbg(
              "%s: Scheduling INSTALL event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, op_set_id = %d, dependency_event = %d\n",
              __FUNCTION__, num_events_extracted, recurring, install_run_time,
              recur_per_unit, recur_per_value, op_set_id, previous);
          for (event_counter = 0; event_counter < num_installer_events;
              event_counter++)
          {
            log_dbg(
                "\tINSTALL Event %d - Type = %d, Data = 0x%08x, DataSize = %d\n",
                event_counter, op_set_install_events[event_counter].opCbType,
                op_set_install_events[event_counter].opData,
                op_set_install_events[event_counter].opDataSize);
          }
          /*make sure the installation event behind the download event*/
          long int install_run_time_update =
              install_run_time == run_time ?
                  install_run_time + 1 : install_run_time;
          install_event_set_id = ScheduleEventSet(recurring,
                                                  install_run_time_update,
                                                  recur_per_unit,
                                                  recur_per_value,
                                                  event_expiration_time, 0,
                                                  op_set_id,
                                                  op_set_install_events,
                                                  num_installer_events,
                                                  previous, timer_type,
                                                  GetCurrentInstance(),
                                                  cbStandard, cbStandard,
                                                  isKeyExchange);
          previous = install_event_set_id;
          if (install_event_set_id == EVENT_SET_ID_INVALID)
          {
            log_err("%s ERROR: Unable to schedule INSTALL event set\n",
                    __FUNCTION__);
            /* We can free all of the memory we allocated for the parameters */
            for (event_counter = 0;
                (uint32) event_counter < num_events_extracted; event_counter++)
            {
              if (op_set_events[event_counter].opData != NULL)
              {
                free(op_set_events[event_counter].opData);
                op_set_events[event_counter].opData = NULL;
              }
            }

            if (op_set_events)
            {
              free(op_set_events);
              op_set_events = NULL;
            }

            CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                   OpSetAckArray, NumOpSetAcks, FALSE);
            LockEventScheduler(FALSE);
            return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
          }
          else
            log_dbg(
                "%s: Scheduled INSTALL event set - install_event_set_id = %d \n",
                __FUNCTION__, install_event_set_id);

          free(install_downloader_parms);
          install_downloader_parms = NULL;

          free(op_set_install_events);
          op_set_install_events = NULL;
        }
        else
        {
          log_err(
              "%s ERROR: Unable to schedule separate DOWNLOAD and INSTALL event sets due to insufficient memory\n",
              __FUNCTION__);

          if (install_downloader_parms)
          {
            free(install_downloader_parms);
            install_downloader_parms = NULL;
          }

          if (op_set_install_events)
          {
            free(op_set_install_events);
            op_set_install_events = NULL;
          }

          /* We can free all of the memory we allocated for the parameters */
          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            if (op_set_events[event_counter].opData != NULL)
            {
              free(op_set_events[event_counter].opData);
              op_set_events[event_counter].opData = NULL;
            }
          }

          if (op_set_events)
          {
            free(op_set_events);
            op_set_events = NULL;
          }

          CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                 OpSetAckArray, NumOpSetAcks, FALSE);
          LockEventScheduler(FALSE);
          return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
        }

      }
      else
      {
        int dl_count = 0;

        /* Install time is earlier than download time so these are all DOWNLOAD/INSTALL now downloads */
        for (event_counter = 0; (uint32) event_counter < num_events_extracted;
            event_counter++)
        {
          if (op_set_events[event_counter].opCbType == cbLaunchDownloader)
          {
            launch_downloader_parms *downloader_parms =
                (launch_downloader_parms*) op_set_events[event_counter].opData;

            //
            // ADKTMS-815: Peripheral downloading support
            //
            if ((downloader_parms->dl_file_content.DownloadType
                & DL_FILE_DL_TYPE_TYPE_MASK) != DL_FILE_DL_TYPE_PERIPHERAL)
            {
              downloader_parms->dl_file_content.DownloadType |=
                  DL_FILE_DL_TYPE_INSTALL_MASK;
            }
            else
            {
              //
              // schedule a pass-through job
              //
              log_dbg(
                  "%s: Scheduling PASS-THROUGH DOWNLOAD event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, op_set_id = %d\n",
                  __FUNCTION__, num_events_extracted, recurring, run_time,
                  recur_per_unit, recur_per_value, op_set_id);
              downloader_parms->dl_file_content.DownloadType |=
                  DL_FILE_DL_TYPE_PERIPHERAL_MASK;
            }
            dl_count++;
          }
        }

        log_dbg(
            "%s: Scheduling RUN/INSTALL event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, event_expiration_time = %d, op_set_id = %d\n",
            __FUNCTION__, num_events_extracted, recurring, run_time,
            recur_per_unit, recur_per_value, event_expiration_time, op_set_id);

        if (dl_count != 0)
        {
          EventNotification(TMS_EVENT_NOTIFY_DOWNLOAD_COUNT, "", dl_count,
                            VHQ_SUCCESS, 0, 0, !is_force_install);
        }

        for (event_counter = 0; (uint32) event_counter < num_events_extracted;
            event_counter++)
        {
          dbg_notice("\tEvent %d - Type = %d, Data = 0x%08x, DataSize = %d\n",
                     event_counter, op_set_events[event_counter].opCbType,
                     op_set_events[event_counter].opData,
                     op_set_events[event_counter].opDataSize);
          //DebugMsgBuffer("Op Parms", op_set_events[event_counter].opData, op_set_events[event_counter].opDataSize, BUF_TYPE_HEX);
        }

        event_set_id = ScheduleEventSet(recurring, run_time, recur_per_unit,
                                        recur_per_value, event_expiration_time,
                                        0, op_set_id, op_set_events,
                                        num_events_extracted, previous,
                                        timer_type, GetCurrentInstance(),
                                        cbStandard, cbStandard, isKeyExchange);
        previous = event_set_id;
        if (event_set_id == EVENT_SET_ID_INVALID)
        {
          log_err("%s ERROR: Unable to schedule event set\n", __FUNCTION__);
          /* We can free all of the memory we allocated for the parameters */
          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            if (op_set_events[event_counter].opData != NULL)
            {
              free(op_set_events[event_counter].opData);
              op_set_events[event_counter].opData = NULL;
            }
          }

          if (op_set_events)
          {
            free(op_set_events);
            op_set_events = NULL;
          }

          CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                 OpSetAckArray, NumOpSetAcks, FALSE);
          LockEventScheduler(FALSE);
          return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
        }
        else
          dbg_notice("%s: Scheduled event set - event_set_id = %d \n",
                     __FUNCTION__, event_set_id);

      }

      if (expired_action_required)
      {

        /* All of these have an expiration time so lets reschedule everything for expiration time with the
         EXPIRED flag set */
        int num_expiring_events;
        event_set_id_t expired_event_set_id;

        num_expiring_events = 0;

        expiring_downloader_parms = malloc(
            sizeof(launch_downloader_parms) * num_events_extracted);
        op_set_expiring_events = malloc(
            sizeof(operation_set_event_t) * num_events_extracted);

        if (expiring_downloader_parms && op_set_expiring_events)
        {
          memset(expiring_downloader_parms, 0,
                 sizeof(launch_downloader_parms) * num_events_extracted);
          memset(op_set_expiring_events, 0,
                 sizeof(operation_set_event_t) * num_events_extracted);

          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            if (op_set_events[event_counter].opCbType == cbLaunchDownloader)
            {
              op_set_expiring_events[num_expiring_events].opCbType =
                  cbLaunchDownloader;

              memcpy(&expiring_downloader_parms[num_expiring_events],
                     op_set_events[event_counter].opData,
                     sizeof(launch_downloader_parms));

              /* Clear DOWNLOAD/INSTALL/EXPIRES mask and set EXPIRED mask for the expired operation set */
              expiring_downloader_parms[num_expiring_events].dl_file_content
                  .DownloadType &= ~(DL_FILE_DL_TYPE_EXPIRES_MASK);
              expiring_downloader_parms[num_expiring_events].dl_file_content
                  .DownloadType &= ~(DL_FILE_DL_TYPE_INSTALL_MASK);
              expiring_downloader_parms[num_expiring_events].dl_file_content
                  .DownloadType &= ~(DL_FILE_DL_TYPE_DOWNLOAD_MASK);
              expiring_downloader_parms[num_expiring_events].dl_file_content
                  .DownloadType &= ~(DL_FILE_DL_TYPE_PERIPHERAL_MASK);
              expiring_downloader_parms[num_expiring_events].dl_file_content
                  .DownloadType |= DL_FILE_DL_TYPE_IS_EXPIRED_MASK;

              op_set_expiring_events[num_expiring_events].opData =
                  &expiring_downloader_parms[num_expiring_events];
              op_set_expiring_events[num_expiring_events].opDataSize =
                  sizeof(launch_downloader_parms);

              num_expiring_events++;
            }
          }

          log_dbg(
              "%s: Scheduling EXPIRED event set - %d events, recurring = %d, run_time = %ld, recur_per_unit = %d, recur_per_value = %d, op_set_id = %d, dependency event = %d\n",
              __FUNCTION__, num_events_extracted, recurring, run_time,
              recur_per_unit, recur_per_value, op_set_id, event_set_id);
          for (event_counter = 0; event_counter < num_expiring_events;
              event_counter++)
          {
            log_dbg(
                "\tEXPIRED Event %d - Type = %d, Data = 0x%08x, DataSize = %d\n",
                event_counter, op_set_expiring_events[event_counter].opCbType,
                op_set_expiring_events[event_counter].opData,
                op_set_expiring_events[event_counter].opDataSize);
          }
          expired_event_set_id = ScheduleEventSet(recurring,
                                                  event_expiration_time,
                                                  recur_per_unit,
                                                  recur_per_value, 0, 0,
                                                  op_set_id,
                                                  op_set_expiring_events,
                                                  num_expiring_events, previous,
                                                  timer_type,
                                                  GetCurrentInstance(),
                                                  cbStandard, cbStandard,
                                                  isKeyExchange);
          if (expired_event_set_id == EVENT_SET_ID_INVALID)
          {
            log_err("%s ERROR: Unable to schedule EXPIRED event set\n",
                    __FUNCTION__);
            /* We can free all of the memory we allocated for the parameters */
            for (event_counter = 0;
                (uint32) event_counter < num_events_extracted; event_counter++)
            {
              if (op_set_events[event_counter].opData != NULL)
              {
                free(op_set_events[event_counter].opData);
                op_set_events[event_counter].opData = NULL;
              }
            }

            if (op_set_events)
            {
              free(op_set_events);
              op_set_events = NULL;
            }

            CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                   OpSetAckArray, NumOpSetAcks, FALSE);
            LockEventScheduler(FALSE);
            return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
          }
          else
            log_dbg(
                "%s: Scheduled EXPIRED event set - expired_event_set_id = %d \n",
                __FUNCTION__, expired_event_set_id);

          free(expiring_downloader_parms);
          expiring_downloader_parms = NULL;

          free(op_set_expiring_events);
          op_set_expiring_events = NULL;
        }
        else
        {
          if (expiring_downloader_parms)
          {
            free(expiring_downloader_parms);
            expiring_downloader_parms = NULL;
          }

          if (op_set_expiring_events)
          {
            free(op_set_expiring_events);
            op_set_expiring_events = NULL;
          }

          log_err(
              "%s ERROR: Unable to schedule EXPIRED event set due to malloc failure\n",
              __FUNCTION__);
          /* We can free all of the memory we allocated for the parameters */
          for (event_counter = 0; (uint32) event_counter < num_events_extracted;
              event_counter++)
          {
            if (op_set_events[event_counter].opData != NULL)
            {
              free(op_set_events[event_counter].opData);
              op_set_events[event_counter].opData = NULL;
            }
          }

          if (op_set_events)
          {
            free(op_set_events);
            op_set_events = NULL;
          }

          CreateMPAckResponseXml(status_report_doc, comm_id, message_id,
                                 OpSetAckArray, NumOpSetAcks, FALSE);
          LockEventScheduler(FALSE);
          return VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR;
        }
      }

      /* We can free all of the memory we allocated for the parameters */
      for (event_counter = 0; (uint32) event_counter < num_events_extracted;
          event_counter++)
      {
        if (op_set_events[event_counter].opData != NULL)
        {
          free(op_set_events[event_counter].opData);
          op_set_events[event_counter].opData = NULL;
        }
      }

      free(op_set_events);
      op_set_events = NULL;
    }
    else
    {
      is_cancel_operation = TRUE;
      if (op_set_events)
      {
        free(op_set_events);
        op_set_events = NULL;
      }
      dbg_msg("%s: No events extracted - continuing to next OpSets Node\n",
              __FUNCTION__);
    }

    /* Move to the next OperationSet Node */
    dbg_msg("%s: Moving to next %s node\n", __FUNCTION__,
            VHQ_XML_OPERATION_SET_TAG);
    op_set_node = GetNodeByName(op_set_node->next,
    VHQ_XML_OPERATION_SET_TAG);

    if (op_set_node == NULL)
    {
      /* This OperationSets node has no more OperationSet sub-elements do move to the next OperationSets Node */
      dbg_msg(
          "%s: No more OperationSet Sub-Elements - Moving to next %s node\n",
          __FUNCTION__, VHQ_XML_OPERATION_SETS_TAG);
      op_sets_node = GetNodeByName(op_sets_node->next,
      VHQ_XML_OPERATION_SETS_TAG);

      if (op_sets_node)
      {
        /* Get the first OperationSet Node of new OperationSets element*/
        dbg_msg("%s: Getting first %s node from new %s node\n", __FUNCTION__,
                VHQ_XML_OPERATION_SET_TAG, VHQ_XML_OPERATION_SETS_TAG);
        op_set_node = GetNodeByName(op_sets_node,
        VHQ_XML_OPERATION_SET_TAG);
      }
    }
  }

  if (isKeyExchange)
  {
    dbg_msg("%s: isKeyExchange is SET - checking total_events_extracted (%d)\n",
            __FUNCTION__, total_events_extracted);
    if ((total_events_extracted == 3) || (total_events_extracted == 4))
    {
      dbg_msg("%s: %d events were extracted so this is a new server\n",
              __FUNCTION__, total_events_extracted);
    }
    else
    {
      dbg_msg(
          "%s: %d events came in response to KeyExchange so this is an OLD server - calling SetRebootEventRequired()\n",
          __FUNCTION__, total_events_extracted);
      SetRebootEventRequired();
    }
  }

  LockEventScheduler(FALSE);
  CreateMPAckResponseXml(status_report_doc, comm_id, message_id, OpSetAckArray,
                         NumOpSetAcks, is_cancel_operation);
  dbg_msg("%s: returning %d\n", __FUNCTION__, result);
  return result;
}


static vhq_result_t VHQXmlProcessServerResponse(xmlNode *root_element,
                                                xmlDocPtr *status_report_doc,
                                                int *cur_comm_id,
                                                uint32 *srv_message_id,
                                                const char *operation_id,
                                                bool close_comm_id)
{
  xmlNode *temp_node = NULL;
  xmlNode *header_node = NULL;
  char *version = NULL;
  char *server_version = NULL;
  char error_id[64];
  char additional_info[256];
  uint32 comm_id, server_comm_id, message_id, send_msg_id;
  long long int server_nonce;
  vhq_result_t result = VHQ_SERVER_RESPONSE_GENERAL_FAILURE;

  comm_id = *cur_comm_id;

  /* Find the header node */
  header_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);

  /* Find the version */
  version = GetStrAttrFromNode(header_node, VHQ_XML_VERSION_TAG);
  if (version)
  {
    dbg_msg("%s: Found version node - value = %s\n", __FUNCTION__, version);
    xmlFree(version);
    version = NULL;
  }

  /* Find Server Version */
  server_version = GetStrAttrFromNode(header_node,
  VHQ_XML_SERVER_VERSION_TAG);
  if (server_version)
  {
    dbg_msg("%s: Found server version node - value = %s\n", __FUNCTION__,
            server_version);
    xmlFree(server_version);
    server_version = NULL;
  }

  /* Find the comm ID */
  if (!GetIntAttrFromNode(header_node, VHQ_XML_COMM_ID_TAG,
                          (int*) &server_comm_id))
    server_comm_id = 0;
  dbg_msg("%s: Found Comm ID - value = %d\n", __FUNCTION__, server_comm_id);

  /* Find the Message ID */
  if (!GetIntAttrFromNode(header_node, VHQ_XML_MESSAGE_ID_TAG,
                          (int*) &message_id))
  {
    message_id = MESSAGE_ID_INVALID;
    log_err("%s ERROR: Could not get Message ID value\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
  }
  dbg_msg("%s: Found Message ID node - value = %d\n", __FUNCTION__, message_id);

#if NONCE_CHECKING
  /* Find the NONCE */
  if (!GetLongIntAttrFromNode(header_node, VHQ_XML_NONCE_TAG, &server_nonce))
  {
    server_nonce = 0;
    log_err("%s ERROR: Could not Get Nonce value\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE;
  }
  dbg_msg("%s: Found Nonce - value = %s\n", __FUNCTION__, lltoa(server_nonce));

  if (last_server_nonce == 0)
  {
    dbg_notice("%s: last_server_nonce IS NOT SET - SETTING TO %s\n",
               __FUNCTION__, lltoa(server_nonce));
    last_server_nonce = server_nonce;
  }
  else
  {
    dbg_msg("%s: Comparing received Nonce %s to previous Nonce %s\n",
            __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
    if (server_nonce <= last_server_nonce)
    {
      vhq_result_t create_xml_result;
      xmlNode *response_root_element;
      xmlNode *response_content_node;

      send_msg_id = GetMessageID(comm_id, message_id, operation_id,
                                 close_comm_id);

      create_xml_result = CreateResponseXml(status_report_doc, comm_id, 0,
                                            send_msg_id, SRV_MSG_HEARTBEAT,
                                            SRV_OP_TYPE_GET_DEV_PROFILE,
                                            FALSE);
      response_root_element = xmlDocGetRootElement(*status_report_doc);
      response_content_node = GetNodeByName(response_root_element,
      VHQ_XML_CONTENT_TAG);
      if (create_xml_result == VHQ_SUCCESS)
      {
        xmlNewProp(response_content_node, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
        addIntegerAttr(response_content_node, VHQ_XML_CONTENT_ERROR_ID_TAG,
                       VHQ_SERVER_MESSAGE_INVALID_NONCE);
      }

      log_err("%s ERROR: received Nonce %s, expected Nonce greater than %s\n",
              __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
      return VHQ_SERVER_MESSAGE_INVALID_NONCE;
    }
  }

#endif

  if (COMM_ID_INVALID(comm_id))
    *cur_comm_id = server_comm_id;
  else if ((int) server_comm_id != comm_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    vhq_result_t create_xml_result;
    xmlNode* response_root_element;
    xmlNode* response_content_node;

    send_msg_id = GetMessageID(comm_id, message_id, operation_id, close_comm_id);

    create_xml_result = CreateResponseXml(status_report_doc, comm_id,
      0, send_msg_id, 0, 0, FALSE);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_content_node = GetNodeByName(response_root_element,
        VHQ_XML_CONTENT_TAG);
    if (create_xml_result == VHQ_SUCCESS) {
      xmlNewProp(response_content_node, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG, BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
      addIntegerAttr(response_content_node, VHQ_XML_CONTENT_ERROR_ID_TAG,
          VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE);
    }

    log_err( "%s ERROR: received comm id %d, expected comm id %d\n",
        __FUNCTION__, comm_id, *cur_comm_id);
    return VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE;
#else
    dbg_warn("%s WARNING: received comm id %d, expected comm id %d\n",
             __FUNCTION__, server_comm_id, comm_id);
#endif
  }

  if (*srv_message_id == MESSAGE_ID_INVALID)
    *srv_message_id = message_id;
  else if (message_id <= *srv_message_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    vhq_result_t create_xml_result;
    xmlNode* response_root_element;
    xmlNode* response_content_node;

    send_msg_id = GetMessageID(comm_id, message_id, operation_id, close_comm_id);

    create_xml_result = CreateResponseXml(status_report_doc, comm_id,
      0, send_msg_id, 0, 0, FALSE);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_content_node = GetNodeByName(response_root_element,
        VHQ_XML_CONTENT_TAG);
    if (create_xml_result == VHQ_SUCCESS) {
      xmlNewProp(response_content_node, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG, BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
      addIntegerAttr(response_content_node, VHQ_XML_CONTENT_ERROR_ID_TAG,
          VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE);
    }

    log_err("%s ERROR: received message id %d, expected message id greater than %d\n",
        __FUNCTION__, message_id, *srv_message_id);
    return VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE;
#else
    log_err(
        "%s WARNING: received message id %d, expected message id %d or greater\n",
        __FUNCTION__, message_id, *srv_message_id);
#endif
  }
  else
    *srv_message_id = message_id;

  GetMessageID(comm_id, message_id, operation_id, close_comm_id);

  /* Now lets get the content */
  temp_node = GetNodeByName(root_element, VHQ_XML_CONTENT_TAG);
  result = get_server_response_content(temp_node, error_id, sizeof(error_id),
                                       additional_info,
                                       sizeof(additional_info));

  return result;
}


vhq_result_t get_server_response_content(xmlNode *content_element,
                                         char *error_id, int error_id_len,
                                         char *additional_info,
                                         int additional_info_len)
{
  char *status;
  char *error_id_attr;
  char *additional_info_attr;
  vhq_result_t result = VHQ_SERVER_RESPONSE_XML_CONTENT_FAILURE;

  /* Get the status */
  status = GetStrAttrFromNode(content_element, VHQ_XML_CONTENT_STATUS_TAG);
  if (status)
  {
    if (strcmp(status, VHQ_XML_CONTENT_STATUS_SUCCESS) == 0)
    {
      result = VHQ_SUCCESS;
    }
    else
    {
      result = VHQ_SERVER_RESPONSE_SERVER_FAILURE;
    }
    dbg_msg("%s: server response = %s (%d)\n", __FUNCTION__, status, result);
    xmlFree(status);
    status = NULL;
  }

  /* Get the error ID */
  memset(error_id, 0, error_id_len);
  error_id_attr = GetStrAttrFromNode(content_element,
  VHQ_XML_CONTENT_ERROR_ID_TAG);
  if (error_id_attr)
  {
    if (strlen(error_id_attr) < (uint32) error_id_len)
    {
      strcpy(error_id, error_id_attr);
    }
    else
    {
      memcpy(error_id, error_id_attr, error_id_len - 1);
    }
    xmlFree(error_id_attr);
    error_id_attr = NULL;

    if (strcmp(error_id, SERVER_ERROR_ID_STR_UNKNOWN) == 0)
      result = VHQ_SERVER_RESPONSE_UNKNOWN_FAILURE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEVICE_NOT_FOUND) == 0)
      result = VHQ_SERVER_RESPONSE_DEVICE_NOT_FOUND_FAILURE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_KEYS_ALREADY_EXCHANGED) == 0)
      result = VHQ_SERVER_RESPONSE_KEYS_ALREADY_EXCAHNGED_FAILURE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_CUST_ID_NOT_FOUND) == 0)
      result = VHQ_SERVER_RESPONSE_CUST_ID_NOT_FOUND;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_MODEL_NOT_FOUND) == 0)
      result = VHQ_SERVER_RESPONSE_MODEL_NOT_FOUND;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEV_CERT_CREATION_ERR) == 0)
      result = VHQ_SERVER_RESPONSE_DEV_CERT_CREATION_ERR;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_INVALID_DEV_CERT) == 0)
      result = VHQ_SERVER_RESPONSE_INVALID_DEV_CERT;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_KEY_EX_DECRYPTION_ERR) == 0)
      result = VHQ_SERVER_RESPONSE_KEY_EX_DECRYPTION_ERR;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_AGENT_KEY_SIG_ERR) == 0)
      result = VHQ_SERVER_RESPONSE_AGENT_KEY_SIG_ERR;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_AGENT_SIG_ERR) == 0)
      result = VHQ_SERVER_RESPONSE_AGENT_SIG_ERR;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_KEYS_NOT_FOUND) == 0)
      result = VHQ_SERVER_RESPONSE_KEYS_NOT_FOUND;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_INV_MSG_FORMAT) == 0)
      result = VHQ_SERVER_RESPONSE_INV_MSG_FORMAT;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_INVALID_MSG_SIG) == 0)
      result = VHQ_SERVER_RESPONSE_INVALID_MSG_SIG;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEVICE_DEACTIVATED) == 0)
      result = VHQ_SERVER_RESPONSE_DEVICE_DEACTIVATED;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEVICE_NOT_REGISTERED) == 0)
      result = VHQ_SERVER_RESPONSE_DEVICE_NOT_REGISTERED;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_SIG_KEY_ID_MISMATCH) == 0)
      result = VHQ_SERVER_RESPONSE_SIG_KEY_ID_MISMATCH;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_LICENSE_NOT_AVAILABLE) == 0)
      result = VHQ_SERVER_RESPONSE_LICENSE_NOT_AVAILABLE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_INVALID_NONCE) == 0)
      result = VHQ_SERVER_RESPONSE_INVALID_NONCE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_UNIDENTIFIED_DEVICE) == 0)
      result = VHQ_SERVER_RESPONSE_UNIDENTIFIED_DEVICE;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEVICE_DELETED) == 0)
      result = VHQ_SERVER_RESPONSE_DEVICE_DELETED;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_DEVICE_BLACKLISTED) == 0)
      result = VHQ_SERVER_RESPONSE_DEVICE_BLACKLISTED;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_MAX_REG_RETRY_LIMIT) == 0)
      result = VHQ_SERVER_RESPONSE_MAX_REG_RETRY_LIMIT_ERROR;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_E_SWAP_REJECTED) == 0)
      result = VHQ_SERVER_RESPONSE_E_SWAP_REJECTED;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_E_INVALID_DID) == 0)
      result = VHQ_SERVER_RESPONSE_E_INVALID_DID;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_E_SW_NOT_FOUND) == 0)
      result = VHQ_SERVER_RESPONSE_E_SW_NOT_FOUND;
    else if (strcmp(error_id, SERVER_ERROR_ID_STR_E_LOC_ID_NOT_AVAIL) == 0)
      result = VHQ_SERVER_RESPONSE_E_LOC_ID_NOT_AVAILABLE;
    log_err("%s: ErrorId = %s\n", __FUNCTION__, error_id);
  }

  /* Get the additional info message */
  memset(additional_info, 0, additional_info_len);
  additional_info_attr = GetStrAttrFromNode(content_element,
  VHQ_XML_OP_RES_ADD_INFO_TAG);
  if (additional_info_attr)
  {
    if (strlen(additional_info_attr) < (uint32) additional_info_len)
    {
      strcpy(additional_info, additional_info_attr);
    }
    else
    {
      memcpy(additional_info, additional_info_attr, additional_info_len - 1);
    }
    xmlFree(additional_info_attr);
    if (additional_info)
      log_notice("%s: AdditionalInfo = %s\n", __FUNCTION__, additional_info);
    else
      dbg_notice("%s: AdditionalInfo = %s\n", __FUNCTION__, additional_info);

  }

  return result;
}


static vhq_result_t parse_management_plan_operations(
    xmlNode *operation_set_element, xmlDocPtr *status_report_doc, int comm_id,
    int message_id, srv_msg_type_t srv_msg_type,
    operation_set_event_t **op_set_events, uint32 *num_events_extracted)
{
  int op_num = 0;
  uint32 op_set_id = 0;
  xmlNode *temp_node = NULL;
  vhq_result_t result = VHQ_SERVER_MGMT_PLAN_XML_CONTENT_FAILURE;

  /* Get the operation Set ID */
  GetIntAttrFromNode(operation_set_element, VHQ_XML_OPERATION_SET_ID_TAG,
                     (int*) &op_set_id);

  /* Walk through the operations */
  temp_node = GetNodeByName(operation_set_element, VHQ_XML_OPERATION_TAG);
  while (temp_node)
  {
    op_num++;
    dbg_notice("%s: Extracting operation %d\n", __FUNCTION__, op_num);
    result = ProcessOperation(temp_node, status_report_doc, comm_id, message_id,
                              srv_msg_type, op_set_id, op_set_events,
                              num_events_extracted);

    temp_node = GetNodeByName(temp_node->next, VHQ_XML_OPERATION_TAG);
  }

  return result;
}


#define SETUP_LIBXML_FOR_MEMWATCH     0

#if SETUP_LIBXML_FOR_MEMWATCH
void _local_xmlFreeFunc(void * mem)
{
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\n", __FUNCTION__);
  free(mem);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\n", __FUNCTION__);
}
void* _local_xmlMallocFunc(size_t size)
{
  void* ret_val;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\n", __FUNCTION__);
  ret_val = malloc(size);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\n", __FUNCTION__);
  return ret_val;
}
void* _local_xmlReallocFunc(void * mem, size_t size)
{
  void* ret_val;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\n", __FUNCTION__);
  ret_val = realloc(mem, size);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\n", __FUNCTION__);
  return ret_val;
}
char* _local_xmlStrdupFunc(const char * str)
{
  char* ret_val;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: +\n", __FUNCTION__);
  ret_val = strdup(str);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: -\n", __FUNCTION__);
  return ret_val;
}
#endif

void VHQXmlPackagerInit(void)
{
#if SETUP_LIBXML_FOR_MEMWATCH
  if (xmlMemSetup(_local_xmlFreeFunc, _local_xmlMallocFunc, _local_xmlReallocFunc, _local_xmlStrdupFunc) != 0)
  {
    dbg_err( "\n\n\n%s ERROR: could not overwrite libxml memory functions\n\n\n\n", __FUNCTION__);
    sleep(10);
  }
  else
  {
    dbg_err( "\n\n\n%s: OVERWROTE libxml memory functions\n\n\n\n", __FUNCTION__);
  }
#endif

#if EVENT_SCHED_THREAD_MODE
  xmlInitParser();
#endif

#if (!NONCE_CHECKING)
  log_err( "\n\n\n\n\n%s ERROR: NONCE Checking is DISABLED!!!!!!!!!!!!!!!!!!\n", __FUNCTION__);
#endif
  /* Initialize the Operation Processor Arrays */
  VHQXmlOperationProcessorInit();
}


int VHQXmlPackageCreate(vhq_xml_operation_t operation, char **XMLData,
                        event_data_t *event_data)
{
  uint32 *message_id;
  bool createRetVal = FALSE;
  int XMLLen;
  xmlChar *data_p;
  xmlDocPtr doc = NULL;

  LIBXML_TEST_VERSION
  ;

  /* Creates a new document, with top level VHQMessage node */
  doc = xmlNewDoc(BAD_CAST "1.0");

  switch (operation)
  {
    case OPERATION_EVENT:
    {
      device_event_parms *_device_event_parms = (device_event_parms*) event_data;
      device_event_content_t *device_event_content = &_device_event_parms
          ->device_event_content;

      /* When we create messages, they start at message ID 1 */
      _device_event_parms->message_id = GetMessageID(
          _device_event_parms->comm_id, 0, NULL, FALSE);

      message_id = &_device_event_parms->message_id;

      if ((device_event_content != NULL) && device_event_content->event_mask)
      {
        createRetVal = XMLEventCreate(doc, _device_event_parms->comm_id,
                                      _device_event_parms->message_id,
                                      device_event_content);
      }
    }
      break;
    case OPERATION_HEARTBEAT:
    {
      heartbeat_parms *pHbParams = (heartbeat_parms*) event_data;

      if (NULL != pHbParams)
      {
        int flags = 0;

        /* Read flags if we received the from event scheduler */
        flags = pHbParams->iFlags;
        dbg_msg("%s: flags: %d\n\n", __FUNCTION__, flags);

        pHbParams->message_id = GetMessageID(pHbParams->comm_id, 0, NULL,
        FALSE);
        message_id = &pHbParams->message_id;

        createRetVal = XMLHeartbeatCreate(doc, pHbParams->comm_id,
                                          pHbParams->message_id, flags);
      }
    }
      break;
    case OPERATION_KEY_EXCHANGE:
    {
      heartbeat_parms *pHbParams = (heartbeat_parms*) event_data;

      if (NULL != pHbParams)
      {
        int flags = 0;

        /* Read flags if we received the from event scheduler */
        flags = pHbParams->iFlags;
        dbg_msg("%s: flags: %d\n\n", __FUNCTION__, flags);

        pHbParams->message_id = GetMessageID(pHbParams->comm_id, 0, NULL,
        FALSE);
        message_id = &pHbParams->message_id;

        createRetVal = XMLKeyExchangeCreate(doc, pHbParams->comm_id,
                                            pHbParams->message_id);
      }
    }
      break;
    case OPERATION_GET_SW_UPDATE:
    {
      get_sw_update_params *_sw_update_params =
          (get_sw_update_params*) event_data;
      get_sw_update_content_t *sw_update_content = &_sw_update_params
          ->get_sw_update_content;

      /* When we create messages, they start at message ID 1 */
      _sw_update_params->message_id = GetMessageID(_sw_update_params->comm_id,
                                                   0, NULL, FALSE);

      message_id = &_sw_update_params->message_id;

      createRetVal = XMLUpdateCreate(doc, _sw_update_params->comm_id,
                                     _sw_update_params->message_id,
                                     sw_update_content->update_type,
                                     sw_update_content->sw_ref_no,
                                     sw_update_content->reference);
    }
      break;
    case OPERATION_STATUS_REPORT:
      dbg_err("%s ERROR: Should not use %s when creating status reports!!!\n",
              __FUNCTION__, __FUNCTION__);
      assert(0)
      ;
      break;
  }

  /* Make sure the package was created */
  if (!createRetVal)
  {
    xmlFreeDoc(doc);
    log_err("%s ERROR: Unable to create package type %d\n", __FUNCTION__,
            operation);
    return 0;
  }

  dbg_msg("%s: Finalizing XML for operation %d\n", __FUNCTION__, operation);
  if (!FinalizeXMLDoc(doc, FALSE))
  {
    log_err("%s ERROR: XML for package type %d did not finalize\n",
            __FUNCTION__, operation);
    // xmlFreeDoc(doc);
    // assert(0);
    // return 0;
  }
  /* Dump the tree to temporary output memory */
  //xmlDocDumpMemoryEnc(doc, &data_p, &XMLLen, "UTF-8");
  xmlDocDumpFormatMemory(doc, &data_p, &XMLLen, 1);
  XMLLen++;
  *XMLData = malloc(XMLLen);

  if (*XMLData)
  {
    memset(*XMLData, 0, XMLLen);
    /* Copy the tree to memory buff and delete temporary memory */
    memcpy(*XMLData, (char*) data_p, XMLLen - 1);
  }
  else
  {
    log_err("%s: FAILURE allocating memory for package\n", __FUNCTION__);
    XMLLen = 0;
  }

  /* Now we can increment the message ID */
  (*message_id)++;

  /* delete temporary memory */
  xmlFree(data_p);

  /* We can free the XML doc now */
  xmlFreeDoc(doc);

  /* Use this to debug memory issues */
  xmlMemoryDump();
  return (XMLLen);
}


vhq_result_t VHQXmlProcessServerMessage(const char *XMLData, int XMLDataSize,
                                        int *comm_id, uint32 *srv_message_id,
                                        char **XMLResponse, int *XMLResponseLen,
                                        const char *operation_id,
                                        bool close_comm_id, bool isKeyExchange)
{
  xmlDoc *doc = NULL;
  xmlNode *root_element = NULL;
  xmlNode *temp_node = NULL;
  xmlChar *data_p;
  xmlDocPtr response_xml_doc = NULL;
  char *operation_type;
  vhq_result_t sig_result;
  vhq_result_t result = VHQ_SERVER_MESSAGE_GENERAL_FAILURE;

  /* Clear the response data first */
  *XMLResponse = NULL;
  *XMLResponseLen = 0;

  /* Make sure there is data to parse */
  if ((XMLData == NULL) || (XMLDataSize == 0))
    return VHQ_SERVER_MESSAGE_NO_DATA;

  /*parse the file and get the DOM */
  doc = xmlReadMemory(XMLData, XMLDataSize, "SrvMsg.xml", NULL, 0);

  if (doc == NULL)
  {
    log_err("%s ERROR: could not parse XML buffer\n", __FUNCTION__);
    return VHQ_SERVER_MESSAGE_XML_STRUCTURE_FAILURE;
  }

  dbg_msg("%s: Validating Server Message XML\n", __FUNCTION__);
  if (!ValidateXml(doc))
  {
    log_err("%s ERROR: Validation FAILED!!!\n", __FUNCTION__);
    *XMLResponseLen = VHQXmlCreateErrorResponse(
        doc, XMLResponse, VHQ_SERVER_MESSAGE_XML_VALIDATION_FAILURE, comm_id,
        srv_message_id);

    /*free the document before returning */
    xmlFreeDoc(doc);

    return VHQ_SERVER_MESSAGE_XML_VALIDATION_FAILURE;
  }

  sig_result = XMLVerifySignature(doc);
  if (sig_result != VHQ_SUCCESS)
  {
    bool keys_exchanged;

    /* If we haven't exchanged keys yet, it could be a failed response which would not have a signature */
    VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
    if ((!keys_exchanged)
        || (sig_result == VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_NULL))
    {
      /*Get the root element node */
      root_element = xmlDocGetRootElement(doc);

      /* Find the Operation type */
      operation_type = NULL;
      temp_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);
      if (temp_node)
      {
        operation_type = GetStrAttrFromNode(temp_node,
        VHQ_XML_OP_TYPE_TAG);
        dbg_msg("%s: Found OperationType node - value = %s\n", __FUNCTION__,
                operation_type);
      }

      if (!operation_type)
      {
        log_err("%s ERROR: Could not find OperationType in header node\n",
                __FUNCTION__);
        result = VHQ_SERVER_MESSAGE_OP_TYPE_FAILURE;
      }
      else if (strcmp(operation_type, VHQ_XML_OP_TYPE_SERVER_RESPONSE) == 0)
      {
        dbg_msg("%s: Processing ServerResponse MSG\n", __FUNCTION__);
        result = VHQXmlProcessServerResponse(root_element, &response_xml_doc,
                                             comm_id, srv_message_id,
                                             operation_id, close_comm_id);

        xmlFree(operation_type);

        /*free the document before returning */
        xmlFreeDoc(doc);

        if (result == VHQ_SERVER_RESPONSE_SERVER_FAILURE)
          return VHQ_SERVER_RESPONSE_KEY_EXCAHNGE_FAILURE;
        else
          return result;
      }

      if (operation_type)
      {
        xmlFree(operation_type);
        operation_type = NULL;
      }
    }

    log_err("%s ERROR: Signature verification FAILED!!!\n", __FUNCTION__);
    *XMLResponseLen = VHQXmlCreateErrorResponse(doc, XMLResponse, sig_result,
                                                comm_id, srv_message_id);

    /*free the document before returning */
    xmlFreeDoc(doc);

    return sig_result;
  }

  /*Get the root element node */
  root_element = xmlDocGetRootElement(doc);

  /* Find the Operation type */
  operation_type = NULL;
  temp_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);
  if (temp_node)
  {
    operation_type = GetStrAttrFromNode(temp_node, VHQ_XML_OP_TYPE_TAG);
    dbg_msg("%s: Found OperationType node - value = %s\n", __FUNCTION__,
            operation_type);
  }

  if (!operation_type)
  {
    log_err("%s ERROR: Could not find OperationType in header node\n",
            __FUNCTION__);
    result = VHQ_SERVER_MESSAGE_OP_TYPE_FAILURE;
    if (isKeyExchange)
    {
      /* This is an unexpected response to the key exchange, so lets
       set reboot event required for compatability purposes. */
      SetRebootEventRequired();
    }
  }
  else if (strcmp(operation_type, VHQ_XML_OP_TYPE_SERVER_RESPONSE) == 0)
  {
    dbg_msg("%s: Processing ServerResponse MSG\n", __FUNCTION__);
    result = VHQXmlProcessServerResponse(root_element, &response_xml_doc,
                                         comm_id, srv_message_id, operation_id,
                                         close_comm_id);
    if (isKeyExchange)
    {
      /* This is an unexpected response to the key exchange, so lets
       set reboot event required for compatability purposes. */
      SetRebootEventRequired();
    }
  }
  else if (strcmp(operation_type, VHQ_XML_OP_TYPE_MGMT_PLAN) == 0)
  {
    bool keys_exchanged = FALSE;

    /* If we get a management plan, then key exchange had to be successful so set
     keys exchanged to TRUE if has not been set yet */
    VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);
    if (!keys_exchanged)
    {
      /* If a key exchange was successful we don't need to do it again */
      log_alert(
          "%s: Keys exchanged successfully - setting PARAM_KEYS_EXCHANGED to TRUE\n",
          __FUNCTION__);
      VHQSetParameterBool(PARAM_KEYS_EXCHANGED, TRUE, TRUE);

      /* Clear the device registration flag */
      ClearDeviceRegistrationMode();
    }

    /* Note: isKeyExchange - is to decide if the event is a key exchange event, whereas keys_exchanged - is the flag */
    log_notice("%s: Processing ManagementPlan MSG\n", __FUNCTION__);
    result = VHQXmlProcessManagementPlan(root_element, &response_xml_doc,
                                         comm_id, srv_message_id,
                                         isKeyExchange);
  }
  else
  {
    log_err("%s ERROR: Invalid OperationType - %s\n", __FUNCTION__,
            operation_type);
    result = VHQ_SERVER_MESSAGE_OP_TYPE_FAILURE;
    if (isKeyExchange)
    {
      /* This is an unexpected response to the key exchange, so lets
       set reboot event required for compatability purposes. */
      SetRebootEventRequired();
    }
  }

  if (operation_type)
  {
    xmlFree(operation_type);
    operation_type = NULL;
  }

  /* If the document was created, we can validate it and send it off
   NOTE: Some responses like download file are not created right away so don't
   worry about those */
  if (response_xml_doc)
  {

    if (!FinalizeXMLDoc(response_xml_doc, TRUE))
    {
      log_err("%s ERROR: Process Server Message XML finalize failed\n",
              __FUNCTION__);

      /* We can free the XML doc now */
      xmlFreeDoc(response_xml_doc);
      response_xml_doc = NULL;
    }
    else
    {
      /* Dump the tree to temporary output memory */
      xmlDocDumpFormatMemory(response_xml_doc, &data_p, XMLResponseLen, 1);
      *XMLResponseLen = *XMLResponseLen + 1;
      dbg_msg("%s: mallocing %d bytes for response buffer\n", __FUNCTION__,
              *XMLResponseLen);
      *XMLResponse = malloc(*XMLResponseLen);

      if (*XMLResponse)
      {
        /* Copy the tree to memory buff and delete temporary memory */
        memset(*XMLResponse, 0, *XMLResponseLen);
        memcpy(*XMLResponse, (char*) data_p, *XMLResponseLen - 1);

        PRINT_XML_DATA("Management Plan Response", *XMLResponse);
      }
      else
      {
        log_err("%s: FAILURE allocating response\n", __FUNCTION__);
        *XMLResponseLen = 0;
        result = VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
      }

      xmlFree(data_p);

      /* We can free the XML doc now */
      xmlFreeDoc(response_xml_doc);

      /* Use this to debug memory issues */
      xmlMemoryDump();
    }

  }
  else
    dbg_msg("%s: No XML response was created for this server message\n",
            __FUNCTION__);

  /*free the document before returning */
  xmlFreeDoc(doc);

  dbg_msg("%s: Returning %d\n", __FUNCTION__, result);
  return result;
}

int VHQXmlCreateErrorResponse(xmlDocPtr server_doc, char **XMLData,
                              vhq_result_t result, int *cur_comm_id,
                              uint32 *srv_message_id)
{
  int XMLResponseLen = 0;
  char OpId[64] = { 0 };
  uint32 OpSetId = 0;
  int comm_id, message_id;
  long long int server_nonce;
  char *srv_msg_type_str;
  //char* srv_msg_id_str;
  srv_msg_type_t srv_msg_type = SRV_MSG_TYPE_UNKNOWN;
  srv_op_type_t srv_op_type = SRV_OP_TYPE_UNKNOWN;
  xmlDocPtr status_report_doc = NULL;
  vhq_result_t response_result = result;
  vhq_result_t create_xml_result;
  xmlNode *temp_node = NULL;
  xmlNode *server_msg_root_node = NULL;
  xmlNode *server_msg_header_node = NULL;
  xmlNode *server_msg_op_sets_node = NULL;
  xmlNode *response_root_element;
  xmlNode *response_content_node;
  xmlNode *response_op_res_node;

  log_err("%s: Creating an Error Response XML\n", __FUNCTION__);

  /* Find the header node */
  server_msg_root_node = xmlDocGetRootElement(server_doc);
  server_msg_header_node = GetNodeByName(server_msg_root_node,
  VHQ_XML_HEADER_TAG);

  /* Find the comm ID */
  if (!GetIntAttrFromNode(server_msg_header_node, VHQ_XML_COMM_ID_TAG,
                          &comm_id))
    comm_id = 0;
  dbg_msg("%s: Found Comm ID - value = %d\n", __FUNCTION__, comm_id);

  /* Find the Message ID */
  if (!GetIntAttrFromNode(server_msg_header_node, VHQ_XML_MESSAGE_ID_TAG,
                          &message_id))
  {
    message_id = MESSAGE_ID_INVALID;
    log_err("%s ERROR: Could not get Message ID value\n", __FUNCTION__);
  }
  dbg_msg("%s: Found Message ID node - value = %d\n", __FUNCTION__, message_id);

  /* Get the operation ID */
  temp_node = GetNodeByName(server_msg_root_node, VHQ_XML_OPERATION_TAG);
  if (temp_node)
  {
    char *op_id;

    /* Read the operation ID from the node */
    op_id = GetStrAttrFromNode(temp_node, VHQ_XML_OPERATION_ID_TAG);
    if (op_id)
    {
      dbg_msg("%s: Found %s - value = %s\n", __FUNCTION__,
              VHQ_XML_OPERATION_ID_TAG, op_id);
      strcpy(OpId, op_id);
      xmlFree(op_id);
      op_id = NULL;
    }
  }

  server_msg_op_sets_node = GetNodeByName(server_msg_root_node,
  VHQ_XML_OPERATION_SETS_TAG);
  if (server_msg_op_sets_node)
  {
    srv_msg_type_str = GetStrAttrFromNode(server_msg_op_sets_node,
    VHQ_XML_SRV_MSG_TYPE_TAG);
    if (!(ConvertSrvMsgType(srv_msg_type_str, &srv_msg_type)))
    {
      log_err("%s ERROR: Could not get Message Type\n", __FUNCTION__);
    }
    if (srv_msg_type_str)
    {
      xmlFree(srv_msg_type_str);
      srv_msg_type_str = NULL;
    }

    /* Get the operationSet ID */
    OpSetId = VHQXmlSearch_OperationSetId_by_OperationId(
        server_msg_op_sets_node, OpId);

    /* Server Message Identifier was removed for 1.06.0003 XSD */
#if 0
    srv_msg_id_str = GetStrAttrFromNode(server_msg_op_sets_node,
        VHQ_XML_SRV_MSG_IDENTIFIER_TAG);
    if (!(ConvertSrvMsgIdentifier(srv_msg_id_str, &srv_msg_identifier))) {
      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s ERROR: Could not get Message Identifier\n",
          __FUNCTION__);
    }
    xmlFree(srv_msg_id_str);
#endif
  }

#if NONCE_CHECKING
  /* Find the NONCE */
  if (!GetLongIntAttrFromNode(server_msg_header_node, VHQ_XML_NONCE_TAG,
                              &server_nonce))
  {
    server_nonce = 0;
    log_err("%s ERROR: Could not Get Nonce value\n", __FUNCTION__);
  }
  dbg_msg("%s: Found Nonce - value = %s\n", __FUNCTION__, lltoa(server_nonce));

  if (last_server_nonce == 0)
  {
    dbg_msg("%s: last_server_nonce IS NOT SET - SETTING TO %s\n", __FUNCTION__,
            lltoa(server_nonce));
    last_server_nonce = server_nonce;
  }
  else
  {
    dbg_msg("%s: Comparing received Nonce %s to previous Nonce %s\n",
            __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
    if (server_nonce <= last_server_nonce)
    {
      log_err("%s ERROR: received Nonce %s, expected Nonce greater than %s\n",
              __FUNCTION__, lltoa(server_nonce), lltoa(last_server_nonce));
      response_result = VHQ_SERVER_MESSAGE_INVALID_NONCE;
    }
  }

#endif

  if (COMM_ID_INVALID(*cur_comm_id))
    *cur_comm_id = comm_id;
  else if (comm_id != *cur_comm_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    response_result = VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE;
#else
    log_warn("%s WARNING: received comm id %d, expected comm id %d\n",
             __FUNCTION__, comm_id, *cur_comm_id);
#endif
  }

  if (*srv_message_id == MESSAGE_ID_INVALID)
    *srv_message_id = message_id;
  else if ((uint32) message_id <= *srv_message_id)
  {
#if COMM_MESSAGE_ID_CHECKING
    response_result = VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE;
#else
    log_warn(
        "%s WARNING: received message id %d, expected message id %d or greater\n",
        __FUNCTION__, message_id, *srv_message_id);
#endif
  }
  else
    *srv_message_id = message_id;

  if (strlen(OpId))
  {
    dbg_msg(
        "%s: Found OpId '%s' - Creating response with OperationResults Node\n",
        __FUNCTION__, OpId);
    create_xml_result = CreateResponseXml(&status_report_doc, comm_id, OpId,
                                          message_id, srv_msg_type, srv_op_type,
                                          TRUE);
    response_root_element = xmlDocGetRootElement(status_report_doc);
    response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);
    if (create_xml_result == VHQ_SUCCESS)
      AddOperationResult(response_op_res_node, OpId, response_result, OpSetId,
                         0, srv_op_type);
  }
  else
  {
    log_warn(
        "%s: Could not find OpId - Creating response without OperationResults Node\n",
        __FUNCTION__);
    create_xml_result = CreateResponseXml(&status_report_doc, comm_id, 0,
                                          message_id, srv_msg_type, srv_op_type,
                                          FALSE);
    response_root_element = xmlDocGetRootElement(status_report_doc);
    response_content_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_TAG);
    if (create_xml_result == VHQ_SUCCESS)
    {
      dbg_msg(
          "%s: Created response successfully - adding failed status attrbiutes\n",
          __FUNCTION__);
      xmlNewProp(response_content_node, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
      BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
      addIntegerAttr(response_content_node, VHQ_XML_CONTENT_ERROR_ID_TAG,
                     response_result);
    }
    else
      log_notice("%s: Could not create response\n", __FUNCTION__);
  }

  if (status_report_doc)
  {
    xmlChar *data_p;

    if (!FinalizeXMLDoc(status_report_doc, FALSE))
    {
      log_warn("%s: Management Plan Response does not finalize!!!\n",
               __FUNCTION__);

      /* We can free the XML doc now */
      xmlFreeDoc(status_report_doc);

      assert(0);
      return 0;
    }

    /* Dump the tree to temporary output memory */
    xmlDocDumpFormatMemory(status_report_doc, &data_p, &XMLResponseLen, 1);
    XMLResponseLen = XMLResponseLen + 1;
    dbg_msg("%s: mallocing %d bytes for response buffer\n", __FUNCTION__,
            XMLResponseLen);
    *XMLData = malloc(XMLResponseLen);

    if (*XMLData)
    {

      /* Copy the tree to memory buff and delete temporary memory */
      memset(*XMLData, 0, XMLResponseLen);
      memcpy(*XMLData, (char*) data_p, XMLResponseLen - 1);

      PRINT_XML_DATA("Error Response", *XMLData);
    }
    else
    {
      log_err("%s: FAILED to malloc %d bytes for response buffer\n",
              __FUNCTION__, XMLResponseLen);
      XMLResponseLen = 0;
    }

    xmlFree(data_p);

    /* We can free the XML doc now */
    xmlFreeDoc(status_report_doc);

    /* Use this to debug memory issues */
    xmlMemoryDump();
  }

  return XMLResponseLen;
}


int VHQXmlCreateDownloadResponse(char **XMLData, int comm_id, int message_id,
                                 char *operation_id,
                                 srv_msg_type_t srv_msg_type,
                                 srv_op_type_t srv_op_type, vhq_result_t result,
                                 uint32 operation_set_id, uint32 recur_id,
                                 char *additional_info, uint32 dl_duration,
                                 uint32 dl_attempts)
{
  xmlDocPtr response_doc = NULL;
  int XMLLen;
  xmlChar *data_p;
  vhq_result_t create_result;

  create_result = CreateResponseXml(&response_doc, comm_id, operation_id,
                                    message_id, srv_msg_type, srv_op_type,
                                    TRUE);
  if (create_result == VHQ_SUCCESS)
  {
    xmlNode *response_root_element = xmlDocGetRootElement(response_doc);
    xmlNode *response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);
    xmlNode *op_result_element = NULL;

    op_result_element = AddOperationResult(response_op_res_node, operation_id,
                                           result, operation_set_id, recur_id,
                                           srv_op_type);

    if ((op_result_element) && (additional_info != NULL)
        && (strlen(additional_info)))
    {
      xmlSetProp(op_result_element, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
      BAD_CAST additional_info);
    }

    if ((op_result_element) && (dl_duration > 0))
    {
      dbg_msg(
          "%s: DownloadCompleted status message - adding dl_duration (%d)\n",
          __FUNCTION__, dl_duration);
      addIntegerAttr(op_result_element, VHQ_XML_CONTENT_STATUS_DL_DURATION,
                     dl_duration);
    }

    if ((op_result_element) && (dl_attempts > 0))
    {
      log_dbg(
          "%s: DownloadCompleted status message - adding dl_attempts (%d)\n",
          __FUNCTION__, dl_attempts);
      addIntegerAttr(op_result_element, VHQ_XML_OP_RES_DL_ATTEMPTS,
                     dl_attempts);
    }

  }

  if (!FinalizeXMLDoc(response_doc, FALSE))
  {
    log_err("%s ERROR: Download Response XML finalize failed\n", __FUNCTION__);
    //    xmlFreeDoc(response_doc);
    //    assert(0);
    //    return 0;
  }

  PRINT_XML_DOC(__FUNCTION__, response_doc);

  /* Dump the tree to temporary output memory */
  xmlDocDumpFormatMemory(response_doc, &data_p, &XMLLen, 1);

  /* We will malloc the memory here, the caller is responsible for freeing it */
  *XMLData = malloc(XMLLen + 1);

  if (*XMLData)
  {
    /* Copy the tree to memory buff and delete temporary memory */
    memset(*XMLData, 0, XMLLen + 1);

    /* Copy the tree to memory buff and delete temporary memory */
    memcpy(*XMLData, (char*) data_p, XMLLen);
  }
  else
  {
    log_err("%s: FAILED to malloc %d bytes for response buffer\n", __FUNCTION__,
            XMLLen + 1);
    XMLLen = 0;
  }

  xmlFree(data_p);

  /* We can free the XML doc now */
  xmlFreeDoc(response_doc);
  response_doc = NULL;

  /* Use this to debug memory issues */
  xmlMemoryDump();
  return (XMLLen);
}


int VHQXmlCreateUploadResponse(char **XMLData, int comm_id, int message_id,
                               uint32 operation_set_id, char *operation_id,
                               srv_msg_type_t srv_msg_type,
                               srv_op_type_t srv_op_type, uint32 recur_id,
                               vhq_result_t result, char *local_filename,
                               char *ul_filename, upload_type_t ul_tpye,
                               upload_file_type_t ul_file_type,
                               xmlDocPtr *response_doc_p)
{
  int XMLLen = 0;
  xmlChar *data_p;
  xmlNode *op_result_element = NULL;
  xmlDocPtr *response_doc = response_doc_p;
  vhq_result_t create_result;
  char InProgFileName[512] = { 0 };
  GetFileNameForInstance(InProgFileName, (char*) IN_PROGRESS_XML_FILE,
                         GetCurrentInstance());

  create_result = CreateResponseXml(response_doc, comm_id, operation_id,
                                    message_id, srv_msg_type, srv_op_type,
                                    TRUE);

  if (create_result == VHQ_SUCCESS)
  {
    xmlNode *response_root_element = xmlDocGetRootElement(*response_doc);
    xmlNode *response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);

    op_result_element = AddOperationResult(response_op_res_node, operation_id,
                                           result, operation_set_id, recur_id,
                                           srv_op_type);
  }

  if (result == VHQ_SUCCESS)
  {

    xmlNode *response_root_element = xmlDocGetRootElement(*response_doc);
    xmlNode *response_op_res_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_OP_RES_TAG);

    xmlNode *datasets_node;
    xmlNode *ul_file_dataset_node;
    xmlNode *ul_file_content_node;
    xmlNode *ul_file_node;
    struct stat file_stat;
    unsigned char calculated_hash[SHA256_DIGEST_LENGTH];
    char tmpFileName[256];

    if (!op_result_element)
    {
      log_warn(
          "\n\n\n%s WARNING: Upload response did not have OperationResult Element\n",
          __FUNCTION__);
      op_result_element = xmlNewChild(response_op_res_node, NULL,
      BAD_CAST VHQ_XML_OP_RES_OP_RES_ID_TAG,
                                      NULL);
    }

    datasets_node = xmlNewChild(op_result_element, NULL,
    BAD_CAST VHQ_XML_DATASETS_TAG,
                                NULL);

    ul_file_dataset_node = xmlNewChild(datasets_node, NULL,
    BAD_CAST VHQ_XML_DATASET_TAG,
                                       NULL);

    xmlNewProp(ul_file_dataset_node, BAD_CAST VHQ_XML_OPERATION_IDENTIFIER_TAG,
    BAD_CAST VHQ_XML_UL_FILE_NODE_TAG);
    xmlNewProp(ul_file_dataset_node, BAD_CAST VHQ_XML_VERSION_TAG,
    BAD_CAST VHQ_XML_VERSION_NUM);
    ul_file_content_node = xmlNewChild(ul_file_dataset_node, NULL,
    BAD_CAST VHQ_XML_DATASET_CONTENT_TAG,
                                       NULL);

    ul_file_node = xmlNewChild(ul_file_content_node, NULL,
    BAD_CAST VHQ_XML_UL_FILE_NODE_TAG,
                               NULL);
    xmlSetProp(ul_file_node, BAD_CAST VHQ_XML_UL_OPERATION_FILENAME,
    BAD_CAST ul_filename);

    xmlSetProp(ul_file_node, BAD_CAST VHQ_XML_UL_OPERATION_TYPE,
    BAD_CAST ConvertUploadTypeToString(ul_tpye));
    xmlSetProp(ul_file_node, BAD_CAST VHQ_XML_UL_OPERATION_CONTENT_TYPE,
    BAD_CAST ConvertUploadFileTypeToString(ul_file_type));

    /* Calculate the hash of the upload file */
    memset(calculated_hash, 0, sizeof(calculated_hash));
    dbg_msg("%s: local_filename is %s\n", __FUNCTION__, local_filename);
    memset(tmpFileName, 0, sizeof(tmpFileName));
    strncpy(tmpFileName, local_filename, sizeof(tmpFileName));
    /* Make sure tmpFileName is NULL terminated */
    tmpFileName[sizeof(tmpFileName) - 1] = 0;
    dbg_msg("%s: tmpFileName is %s\n", __FUNCTION__, tmpFileName);

    if (stat(tmpFileName, &file_stat) == 0)
    {
      VHQSecurityCalculateFileHash(tmpFileName, DL_FILE_HASH_ALGO_SHA_256,
                                   calculated_hash, sizeof(calculated_hash),
                                   NULL);
    }
    else
      log_err("%s ERROR: stat(%s) FAILED\n", __FUNCTION__, tmpFileName);
    xmlSetProp(ul_file_node, BAD_CAST VHQ_XML_DL_OPERATION_DL_HASH_ALGO,
    BAD_CAST VHQ_XML_AGENT_KEY_EXCHANGE_KEY_SIG_HASH_ALGO_SHA256);
    DebugMsgBuffer("UL File Sha-256 - 2", (const char*) calculated_hash,
                   sizeof(calculated_hash), BUF_TYPE_HEX);
    addBinaryAttr(ul_file_node, VHQ_XML_DL_OPERATION_DL_HASH, calculated_hash,
                  sizeof(calculated_hash), FALSE);
  }

  {
    if (!FinalizeXMLDoc(*response_doc, FALSE))
    {
      log_err("%s ERROR: Upload XML finalize failed\n", __FUNCTION__);

      /* We can free the XML doc now */
      xmlFreeDoc(*response_doc);
      *response_doc = NULL;

      return 0;
    }

    PRINT_XML_DOC(__FUNCTION__, *response_doc);

    /* Dump the tree to temporary output memory */
    xmlDocDumpFormatMemory(*response_doc, &data_p, &XMLLen, 1);

    /* We will malloc the memory here, the caller is responsible for freeing it */
    *XMLData = malloc(XMLLen + 1);

    if (*XMLData)
    {
      /* Copy the tree to memory buff and delete temporary memory */
      memset(*XMLData, 0, XMLLen + 1);

      /* Copy the tree to memory buff and delete temporary memory */
      memcpy(*XMLData, (char*) data_p, XMLLen);
    }
    else
    {
      log_err("%s: FAILED to malloc %d bytes for response buffer\n",
              __FUNCTION__, XMLLen + 1);
      XMLLen = 0;
    }
    xmlFree(data_p);

    /* We can free the XML doc now */
    xmlFreeDoc(*response_doc);
    *response_doc = NULL;

    /* Use this to debug memory issues */
    xmlMemoryDump();

    /* Remove any in-progress XML file since we just sent it */
    RemoveXMLDoc(InProgFileName);
  }

  return XMLLen;
}

#if 0
int
VxXMLErrFunc(int dummy, const char *msg, ...)
{
  UNUSED(dummy);
  va_list list;
  va_start(list, msg);
  log_err( "****************** XML ERROR ******************\r\n");
  vDebugMsg(msg, list);
  log_err( "\r\n***********************************************\r\n");
  va_end(list);
  return 0;
}
#endif


bool ValidateXml(xmlDocPtr doc_p)
{
  xmlDocPtr doc = doc_p;
  bool ret_val = FALSE;
  xmlSchemaPtr schema = NULL;
  xmlSchemaParserCtxtPtr ctxt;
  xmlLineNumbersDefault(1);

  // only perform validation if debug is set to max
//  if (GetLoggingLevel() != VHQ_LOGGING_LEVEL_DEBUG)
//  {
//    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: skipping XML validation\n", __FUNCTION__);
//    return TRUE;
//  }

  dbg_msg(
      "%s: Creating new schema parse context from file %s (FileExists = %d)\n",
      __FUNCTION__, XSDFileName, FileExists(XSDFileName));
  ctxt = xmlSchemaNewParserCtxt(XSDFileName);

  dbg_msg("%s: calling xmlSchemaParse(ctxt = 0x%08x)\n", __FUNCTION__, ctxt);
  schema = xmlSchemaParse(ctxt);
  xmlSchemaFreeParserCtxt(ctxt);
  //xmlSchemaDump(stdout, schema); //To print schema dump

  if (doc == NULL)
  {
    dbg_err("%s: doc pointer is NULL\n", __FUNCTION__);
  }
  else
  {
    xmlSchemaValidCtxtPtr v_ctxt;
    int ret;

    v_ctxt = xmlSchemaNewValidCtxt(schema);

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Validating created XML doc vs schema file (%s)\n", __FUNCTION__, XSDFileName);
    ret = xmlSchemaValidateDoc(v_ctxt, doc);
    if (ret == 0)
    {
      dbg_msg("%s: DOC validates\n", __FUNCTION__);
      ret_val = TRUE;
    }
    else if (ret > 0)
    {
      log_err("%s: Validation ERROR %d!!!\n", __FUNCTION__, ret);
      dbg_msg("%s: XML doc = \n", __FUNCTION__);
      xmlSaveFormatFileEnc("-", doc, "UTF-8", 1);
    }
    else
    {
      log_err("%s: Validation generated an internal error - %d\n", __FUNCTION__,
              ret);
      dbg_msg("%s: XML doc = \n", __FUNCTION__);
      xmlSaveFormatFileEnc("-", doc, "UTF-8", 1);
    }
    xmlSchemaFreeValidCtxt(v_ctxt);
  }

  // free the resource
  if (schema != NULL)
    xmlSchemaFree(schema);
  return ret_val;
}


static bool XMLStatusReportorMPAckCreate(xmlDocPtr doc, int comm_id,
                                         uint32 message_id, bool is_status)
{
  char SerialNum[SERIAL_NUM_LEN];
  char ModelNum[16];
  char IPAddress[IP_ADDRESS_LEN];
  xmlNodePtr root_node = NULL, initiator_node = NULL, identifier_node = NULL;/* node pointers */
  xmlNodePtr header_node = NULL;
  char customer_id[64];
  uint32 unique_id;
  batt_info_t batteryInfo;

#ifdef Mx2
  //unsigned long size;
  //char productNo[PI_CIB_PRODUCT_NUMBER_SIZE];
  struct MIBInfo_s *mibi;
#endif

  PRINT_XML_DOC(__FUNCTION__, doc);

  root_node = xmlNewNode(NULL, BAD_CAST VHQ_DEVICE_XML_MSG_WRAPPER);
  xmlDocSetRootElement(doc, root_node);

  /* Add the header node */
  header_node = xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_HEADER_TAG,
  NULL);

  /* Add Operation type node */
  if (is_status)
  {
    xmlSetProp(header_node, BAD_CAST VHQ_XML_OP_TYPE_TAG,
    BAD_CAST VHQ_XML_OP_TYPE_STATUS);
  }
  else
  {
    xmlSetProp(header_node, BAD_CAST VHQ_XML_OP_TYPE_TAG,
    BAD_CAST VHQ_XML_OP_TYPE_MP_ACK);
  }

  /* Add version node */
  xmlSetProp(header_node, BAD_CAST VHQ_XML_VERSION_TAG,
  BAD_CAST VHQ_XML_VERSION_NUM);

  /* Add Comm ID node */
  addIntegerAttr(header_node, VHQ_XML_COMM_ID_TAG, comm_id);

  /* Add Message ID node */
  addIntegerAttr(header_node, VHQ_XML_MESSAGE_ID_TAG, message_id);

  /* Add Customer ID node */
  memset(customer_id, 0, sizeof(customer_id));
  VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id, sizeof(customer_id));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_CUSTOMER_ID_TAG,
  BAD_CAST customer_id);

  /* Add IP Address node */
  GetIPAddress(IPAddress, sizeof(IPAddress));
  xmlSetProp(header_node, BAD_CAST VHQ_XML_IP_ADDRESS_TAG,
  BAD_CAST IPAddress);

  if ((GetMainBatteryStatus(&batteryInfo) >= 0) && (batteryInfo.bMainBattery))
  {
    /* Add Battery Level Attribute */
    addIntegerAttr(header_node, VHQ_XML_HB_BAT_LEVEL_TAG, batteryInfo.level);
    dbg_msg("%s: Battery level %d\r\n", __FUNCTION__, batteryInfo.level);
  }
  else
    dbg_msg("%s: Battery Not present\r\n", __FUNCTION__);

  {
    char szHBFreq[64];
    uint32 heartbeat_rate;

    /* ADKTMS-355 add separate HB frequencies for dial and gprs/3g */
    /* Get current com interface type: direct, dial, gprs/3g */
    heartbeat_rate = GetHBFreq(NULL, GetComType());

    snprintf(szHBFreq, sizeof(szHBFreq), "%d", heartbeat_rate);
    dbg_notice("heartbeat rate is %s\r\n", szHBFreq);
    xmlSetProp(header_node, BAD_CAST VHQ_XML_HB_FREQ, BAD_CAST szHBFreq);
  }

  /* Add device time attribute */
  addTimeAttr(header_node, VHQ_XML_LOCAL_TIME, linux_time(NULL), TRUE);

  /* Add initiator node */
  initiator_node = xmlNewChild(header_node, NULL,
  BAD_CAST VHQ_XML_INITIATOR_TAG,
                               NULL);
  xmlNewProp(initiator_node, BAD_CAST VHQ_XML_INITIATOR_TYPE_TAG,
  BAD_CAST "Terminal");

  /* Add identifier node */
  memset(SerialNum, 0, sizeof(SerialNum));
  GetSerialNumber(SerialNum);
  memset(ModelNum, 0, sizeof(ModelNum));
  GetModelNumber(ModelNum, sizeof(ModelNum));

  identifier_node = xmlNewChild(initiator_node, NULL,
  BAD_CAST VHQ_XML_IDENTIFIER_TAG,
                                NULL);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_MN_TAG,
  BAD_CAST ModelNum);
  xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_SN_TAG,
  BAD_CAST SerialNum);

  unique_id = 0;
  VHQGetParameterUint32(PARAM_UNIQUE_DEVICE_ID, &unique_id, DEFAULT_BASE);
  if (unique_id != 0)
    addIntegerAttr(identifier_node, VHQ_XML_IDENTIFIER_UNIQUE_ID_TAG,
                   unique_id);

#ifdef Mx2
#if 0
  if (platforminfo_get(PI_CIB_PRODUCT_NUMBER_STR, productNo, sizeof(productNo), &size) == PI_OK)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Using platforminfo for Part Number\n", __FUNCTION__);
    xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG, BAD_CAST trim_whitespace(productNo));
  }
  else
#endif
  {
    mibi = sysinfo_MIB();
    dbg_msg("%s: Using MIB for Part Number\n", __FUNCTION__);
    xmlSetProp(identifier_node, BAD_CAST VHQ_XML_IDENTIFIER_PART_NUM_TAG,
    BAD_CAST trim_whitespace(mibi->partNumber));
  }
#endif

  _AddAppCustomParmsToIdentifier(header_node, identifier_node,
  VHQ_XML_OP_TYPE_MP_ACK);

  /* Add Content nodes */
  xmlNewChild(root_node, NULL, BAD_CAST VHQ_XML_CONTENT_TAG, NULL);

  PRINT_XML_DOC(__FUNCTION__, doc);

  return TRUE;
}

xmlNode* AddOperationResult(xmlNode *op_results_node, char *op_id,
                            vhq_result_t result, uint32 operation_set_id,
                            uint32 recur_id, srv_op_type_t srv_op_type)
{
  bool create_op_result_node = TRUE;
  xmlNode *op_result_element;
  char add_info_string[256];

  op_result_element = GetNodeByName(op_results_node,
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
        opId = GetStrAttrFromNode(op_result_element,
        VHQ_XML_OPERATION_ID_TAG);

        if (opId && strcmp(opId, op_id) == 0)
        {
          dbg_msg("%s: Found result for OpSetId %d, OpId %s - modifying it\n",
                  __FUNCTION__, operation_set_id, op_id);
          create_op_result_node = FALSE;
          xmlFree(opId);
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
    dbg_msg("%s: OpResult match not found - creating new OpResult Node\n",
            __FUNCTION__);
    op_result_element = xmlNewChild(op_results_node, NULL,
    BAD_CAST VHQ_XML_OP_RES_OP_RES_ID_TAG,
                                    NULL);

    addIntegerAttr(op_result_element, VHQ_XML_OP_RES_OP_SET_ID,
                   operation_set_id);

    /* Add the Operation ID string */
    dbg_msg("%s: Adding %s attribute - %s\n", __FUNCTION__,
            VHQ_XML_OPERATION_ID_TAG, op_id);
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_OPERATION_ID_TAG,
    BAD_CAST op_id);
  }

  if (recur_id != 0)
    addIntegerAttr(op_result_element, VHQ_XML_OP_RES_RECUR_ID, recur_id);

  /* Add ServerOperationType */
  if (srv_op_type != SRV_OP_TYPE_UNKNOWN)
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_SRV_OP_TYPE_TAG,
    BAD_CAST ConvertSrvOpTypeToString(srv_op_type));

  /* Most of the time the result in the status message is the same so store it there */
  ConvertVHQResultToStr(result, add_info_string, sizeof(add_info_string));

  /* Treat lib curl download error codes different */
  if ((result >= VHQ_DL_FILE_CURL_ERROR_BASE)
      && (result <= VHQ_DL_FILE_CURL_ERROR_MAX))
  {
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
    BAD_CAST VHQ_XML_CONTENT_STATUS_DL_FAILED);
  }
  else if ((result >= VHQ_CURL_HTTP_ERROR_BASE)
      && (result <= VHQ_CURL_HTTP_ERROR_MAX))
  {
    /* The HTTP Error values are only returned for download errors */
    xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
    BAD_CAST VHQ_XML_CONTENT_STATUS_DL_FAILED);
  }
  else
  {

    switch (result)
    {
      /* CANCEL_OP_PARTIAL is treated as a SUCCESS Status */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_APP_PARAM_ERROR:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
        break;

      case VHQ_SERVER_MGMT_PLAN_CANCEL_OP_PARTIAL:
      case VHQ_SUCCESS:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_SUCCESS);
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_STARTED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_STARTED);
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_COMPLETED);
        break;

        /* VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_WARNING means the CP installer installed the package
         but had a warning. We will report it as Installed though */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_WARNING:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_INSTALLED);
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_INSTALLED_RB_REQUIRED);
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_INSTALLED_RESTART_APPS_REQUIRED);
        break;

        /* Download Failure cases */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_SIGNATURE_MISMATCH:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAX_FILE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_RETRIES_EXPIRED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_LOCATION_FAIL:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_DL_FAILED);
        break;

        /* Install failure cases */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TGZ_CONTENT_TOO_LARGE:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TGZ_EXPAND_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_TYPE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_NO_CONTENT_CONSUMER:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_FILENAME_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_MEMORY_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_USER_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_RECEIVER_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_UNSUPPORTED_TYPE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_APP_APPROVAL_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_APP_PROCESSING_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_AUTHENTICATION_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_NO_PACKAGE:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_START_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_RESULT_FILE_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_GENERAL_ERROR:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DECOMPRESSION_ERROR:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_INSTALL_FAILED);
        break;

      case VHQ_API_POSTPONED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_RESCHEDULE:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_POSTPONE:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_INSTALL_POSTPONE:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_INSTALL_POSTPONED);
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_REPLACED);
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACE_FAILED:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_REPLACE_FAILED);
        break;

      default:
        xmlNewProp(op_result_element, BAD_CAST VHQ_XML_CONTENT_STATUS_TAG,
        BAD_CAST VHQ_XML_CONTENT_STATUS_FAILED);
        break;
    }
  }

  xmlNewProp(op_result_element, BAD_CAST VHQ_XML_OP_RES_ADD_INFO_TAG,
  BAD_CAST add_info_string);

  addTimeAttr(op_result_element, VHQ_XML_OP_RES_OP_TIME_TAG, linux_time(NULL),
  TRUE);

  return op_result_element;
}

vhq_result_t CreateMPAckResponseXml(xmlDocPtr *status_report_doc, int comm_id,
                                    int message_id, uint32 *OpSetAckArray,
                                    uint16 NumOpSetAcks,
                                    bool is_cancel_operation)
{
  bool createRetVal = FALSE;
  bool mpack = TRUE;
  xmlNode *response_root_element;
  xmlNode *response_content_node;
  xmlNode *op_ack_node;

  LIBXML_TEST_VERSION
  ;

  if (is_cancel_operation)
  {
    log_dbg("%s: MP is cancel operation, no need to send ACK\n", __FUNCTION__);
    return VHQ_SUCCESS;
  }

  // ADKTMS-2849 - Check if MPAck is disabled for ETMS or other servers that do not support it.
  VHQGetParameterBool(PARAM_AGENT_MPACK, &mpack);
  if (FALSE == mpack)
  {
    dbg_notice("%s: MPAck Disabled\n", __FUNCTION__);
    return VHQ_SUCCESS;
  }

  if (status_report_doc == NULL)
  {
    log_err("%s: Invalid status_report_doc - 0x%08x\n", __FUNCTION__,
            status_report_doc);
    return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
  }

  if ((status_report_doc) && (*status_report_doc != NULL))
  {
    dbg_msg(
        "%s: status_report_doc already exists - nothing to do since we don't want to overwrite it\n",
        __FUNCTION__);
    return VHQ_SUCCESS;
  }

  /* Creates a new document, with top level VHQMessage node */
  *status_report_doc = xmlNewDoc(BAD_CAST "1.0");
  dbg_msg(
      "%s: status_report_doc created - status_report_doc = 0x%08x, *status_report_doc = 0x%08x\n",
      __FUNCTION__, status_report_doc,
      status_report_doc ? *status_report_doc : NULL);

  createRetVal = XMLStatusReportorMPAckCreate(
      *status_report_doc, comm_id,
      GetMessageID(comm_id, message_id, NULL, FALSE), FALSE);
  /* Make sure the package was created */
  if (!createRetVal)
  {
    xmlFreeDoc(*status_report_doc);
    *status_report_doc = NULL;
    log_err(
        "%s: Unable to create management plan status report response package\n",
        __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
  }

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found Message ID node - value = %d\n", __FUNCTION__, message_id);

  dbg_msg(
      "%s: Adding OperationsAcknowledgement node to response - status_report_doc = 0x%08x, *status_report_doc = 0x%08x\n",
      __FUNCTION__, status_report_doc,
      *status_report_doc ? *status_report_doc : NULL);
  response_root_element = xmlDocGetRootElement(*status_report_doc);
  response_content_node = GetNodeByName(response_root_element,
  VHQ_XML_CONTENT_TAG);
  if (response_content_node)
  {
    int i;
    xmlNode *op_set_ack_node;

    /* Add OperationsAcknowledgement */
    op_ack_node = xmlNewChild(response_content_node, NULL,
    BAD_CAST VHQ_XML_CONTENT_OP_SET_ACKS_TAG,
                              NULL);

    for (i = 0; i < NumOpSetAcks; i++)
    {
      if (OpSetAckArray[i] == 0)
      {
        /* This is actually an error */
        dbg_msg("%s: OpSetAckArray[%d] is 0, not adding anything now.\n",
                __FUNCTION__, i);
      }
      else
      {
        dbg_msg(
            "%s: Adding OperationSetID %d to OperationsAcknowledgement Node\n",
            __FUNCTION__, OpSetAckArray[i]);
        op_set_ack_node = xmlNewChild(op_ack_node, NULL,
        BAD_CAST VHQ_XML_CONTENT_OP_SET_ACK_TAG,
                                      NULL);
        addIntegerAttr(op_set_ack_node, VHQ_XML_OP_RES_OP_SET_ID,
                       OpSetAckArray[i]);
      }
    }
  }
  else
    return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;

  return VHQ_SUCCESS;
}

vhq_result_t CreateResponseXml(xmlDocPtr *status_report_doc, int comm_id,
                               char *operation_id, int message_id,
                               srv_msg_type_t srv_msg_type,
                               srv_op_type_t srv_op_type,
                               bool create_op_res_node)
{
  UNUSED(srv_op_type);
  bool createRetVal = FALSE;
  xmlNode *response_root_element;
  xmlNode *response_content_node;
  xmlNode *op_results_node;

  LIBXML_TEST_VERSION
  ;

  if (status_report_doc == NULL)
  {
    log_err("%s: Invalid status_report_doc - 0x%08x\n", __FUNCTION__,
            status_report_doc);
    return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
  }

  if ((status_report_doc) && (*status_report_doc != NULL))
  {
    dbg_msg("%s: status_report_doc already exists - returning VHQ_SUCCESS\n",
            __FUNCTION__);
    return VHQ_SUCCESS;
  }

  /* Creates a new document, with top level VHQMessage node */
  *status_report_doc = xmlNewDoc(BAD_CAST "1.0");
  dbg_msg(
      "%s: status_report_doc created - status_report_doc = 0x%08x, *status_report_doc = 0x%08x\n",
      __FUNCTION__, status_report_doc,
      status_report_doc ? *status_report_doc : NULL);

  createRetVal = XMLStatusReportorMPAckCreate(
      *status_report_doc, comm_id,
      GetMessageID(comm_id, message_id, operation_id, FALSE), TRUE);
  /* Make sure the package was created */
  if (!createRetVal)
  {
    xmlFreeDoc(*status_report_doc);
    *status_report_doc = NULL;
    log_err(
        "%s: Unable to create management plan status report response package\n",
        __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
  }

  if (create_op_res_node)
  {
    dbg_msg(
        "%s: create_op_res_node is set - Adding OperationResults node to response - status_report_doc = 0x%08x, *status_report_doc = 0x%08x\n",
        __FUNCTION__, status_report_doc,
        *status_report_doc ? *status_report_doc : NULL);
    response_root_element = xmlDocGetRootElement(*status_report_doc);
    response_content_node = GetNodeByName(response_root_element,
    VHQ_XML_CONTENT_TAG);
    if (response_content_node)
    {
      /* Add OperationResults */
      op_results_node = xmlNewChild(response_content_node, NULL,
      BAD_CAST VHQ_XML_CONTENT_OP_RES_TAG,
                                    NULL);

      if (srv_msg_type != SRV_MSG_TYPE_UNKNOWN)
        xmlNewProp(op_results_node, BAD_CAST VHQ_XML_SRV_MSG_TYPE_TAG,
        BAD_CAST ConvertSrvMsgTypeToString(srv_msg_type));
    }
    else
      return VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE;
  }
  else
    dbg_msg("%s: Not creating OperationResults Element\n", __FUNCTION__);

  return VHQ_SUCCESS;
}

bool XMLGenerateSignature(xmlDocPtr doc, unsigned char *sigbuf,
                          uint32 sigbuf_size)
{
  bool ret_val = FALSE;
  int sign_content_len = 0;
  char *xml_data_p;
  int xml_len;
  char *header_data_p;
  memset(sigbuf, 0, sigbuf_size);

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Canonicalizing XML\n", __FUNCTION__);
  //xml_len = xmlC14NDocDumpMemory(doc, NULL, XML_C14N_1_1, NULL, FALSE, (xmlChar**)&xml_data_p);
  xml_len = xmlC14NDocDumpMemory(doc, NULL, XML_C14N_EXCLUSIVE_1_0, NULL,
  FALSE,
                                 (xmlChar**) &xml_data_p);
  if ((xml_len > 0) && (xml_data_p != NULL))
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in canonicalized XML (xml_len = %d) [%s]\n", __FUNCTION__, "<Header", xml_len, xml_data_p);
    header_data_p = strstr(xml_data_p, "<Header");
    if (header_data_p)
    {
      char *temp_char_p;

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found header - Searching for %s in canonicalized XML\n", __FUNCTION__, "</Content>");
      temp_char_p = strstr(xml_data_p, "</Content>");
      if (temp_char_p)
      {
        temp_char_p += strlen("</Content>");
        sign_content_len = temp_char_p - header_data_p;
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found end of content - sign_content_len = %d\n", __FUNCTION__, sign_content_len);
      }
      else
      {
        dbg_err("%s ERROR: Could not find %s in XML\n", __FUNCTION__,
                "</Content>");
        return FALSE;
      }
    }
    else
    {
      dbg_err("%s ERROR: Could not find %s in XML\n", __FUNCTION__, "<Header>");
      return FALSE;
    }

    ret_val = VHQSecurityGenSig((unsigned char*) header_data_p,
                                sign_content_len, sigbuf, sigbuf_size);

    xmlFree(xml_data_p);
  }
  else
  {
    dbg_err("%s ERROR: Could not Canonicalize XML\n", __FUNCTION__);
  }

  return ret_val;
}

#define DEBUG_SIGNATURE_VALIDATION      1

vhq_result_t XMLVerifySignature(xmlDocPtr doc)
{
#if ENABLE_SIGNATURE_VALIDATION
  bool gen_sig_ret_val = FALSE;
  vhq_result_t ret_val = VHQ_SERVER_MESSAGE_XML_SIGNATURE_GENERAL_FAILURE;
  int sign_content_len = 0;
  xmlChar *xml_data_p = NULL;
  char *header_data_p;
  char calc_signature[SIGNATURE_LENGTH];
  char recv_signature[SIGNATURE_LENGTH];

  memset(calc_signature, 0, sizeof(calc_signature));
  memset(recv_signature, 0, sizeof(recv_signature));

  dbg_msg("%s: Canonicalizing XML\n", __FUNCTION__);
  xmlC14NDocDumpMemory(doc, NULL, XML_C14N_EXCLUSIVE_1_0, NULL,
  FALSE,
                       &xml_data_p);

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in canonicalized XML [%s]\n", __FUNCTION__, "<Header", xml_data_p);
  if (xml_data_p)
  {
    header_data_p = strstr((const char*) xml_data_p, "<Header");
    if (header_data_p)
    {
      char *temp_char_p;

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found header - Searching for %s in canonicalized XML\n", __FUNCTION__, "</Content>");
      temp_char_p = strstr((const char*) xml_data_p, "</Content>");
      if (temp_char_p)
      {
        temp_char_p += strlen("</Content>");
        sign_content_len = temp_char_p - header_data_p;
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found end of content - sign_content_len = %d\n", __FUNCTION__, sign_content_len);
      }
      else
      {
        log_err("%s ERROR: Could not find %s in XML\n", __FUNCTION__,
                "</Content>");
        xmlFree(xml_data_p);
        xml_data_p = NULL;
        return VHQ_SERVER_MESSAGE_XML_SIGNATURE_GENERAL_FAILURE;
      }
    }
    else
    {
      log_err("%s ERROR: Could not find %s in XML\n", __FUNCTION__, "<Header>");
      xmlFree(xml_data_p);
      xml_data_p = NULL;
      return VHQ_SERVER_MESSAGE_XML_SIGNATURE_GENERAL_FAILURE;
    }

    gen_sig_ret_val = VHQSecurityGenSig((unsigned char*) header_data_p,
                                        sign_content_len,
                                        (unsigned char*) calc_signature,
                                        sizeof(calc_signature));

    xmlFree(xml_data_p);
    xml_data_p = NULL;
  }

  if (gen_sig_ret_val)
  {
    /* We have calculated the expected signature so lets compare it to the one
     in the message */
    xmlNode *root_element = xmlDocGetRootElement(doc);
    xmlNode *signature_node = GetNodeByName(root_element,
    VHQ_XML_SIGNATURE_TAG);

#if DEBUG_SIGNATURE_VALIDATION
    DebugMsgBuffer("\tCalculated Signature", calc_signature,
    SIGNATURE_LENGTH,
                   BUF_TYPE_HEX);
#endif

    if (signature_node)
    {
      char *sig_type;
      char *sig_algo;
      char *signing_key_id;
      char *recv_sig_str;

      sig_type = GetStrAttrFromNode(signature_node,
      VHQ_XML_SIGNATURE_TYPE);
      if (sig_type)
      {
        if (strcmp(sig_type, VHQ_XML_SIGNATURE_TYPE_MAC) != 0)
        {

          log_err("%s ERROR: Signature type (%s) is invalid\n", __FUNCTION__,
                  sig_type);
          xmlFree(sig_type);
          sig_type = NULL;
          return VHQ_SERVER_MESSAGE_XML_SIGNATURE_TYPE_FAILURE;
        }
        xmlFree(sig_type);
        sig_type = NULL;
      }
      else
      {
        log_err("%s ERROR: No signature type specified\n", __FUNCTION__);
        return VHQ_SERVER_MESSAGE_XML_SIGNATURE_TYPE_FAILURE;
      }

      sig_algo = GetStrAttrFromNode(signature_node,
      VHQ_XML_SIGNATURE_ALGO);
      if (sig_algo)
      {
        if (strcmp(sig_algo, VHQ_XML_SIGNATURE_ALGO_CMAC_AES) != 0)
        {
          log_err("%s ERROR: Signature algorithm %s is invalid\n", __FUNCTION__,
                  sig_algo);
          xmlFree(sig_algo);
          sig_algo = NULL;
          return VHQ_SERVER_MESSAGE_XML_SIGNATURE_ALGO_FAILURE;
        }
        xmlFree(sig_algo);
        sig_algo = NULL;
      }
      else
      {
        log_err("%s ERROR: No signature algorithm specified\n", __FUNCTION__);
        return VHQ_SERVER_MESSAGE_XML_SIGNATURE_ALGO_FAILURE;
      }

      signing_key_id = GetStrAttrFromNode(signature_node,
      VHQ_XML_SIGNATURE_KEY_ID);
      if (signing_key_id)
      {
        if (strcmp(signing_key_id, "NULL") == 0)
        {
          log_err("%s ERROR: Signing key id is NULL\n", __FUNCTION__);
          xmlFree(signing_key_id);
          signing_key_id = NULL;
          return VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_NULL;
        }
        else if (!VHQSecurtiyVerifySignatureKey(signing_key_id))
        {
          log_err("%s ERROR: Signing key id (%s) MISMATCH\n", __FUNCTION__,
                  signing_key_id);
          xmlFree(signing_key_id);
          signing_key_id = NULL;
          return VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_MISMATCH;
        }
        xmlFree(signing_key_id);
        signing_key_id = NULL;
      }
      else
      {
        log_err("%s ERROR: No signing key ID specified\n", __FUNCTION__);
        return VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_FAILURE;
      }

      recv_sig_str = (char*) xmlNodeGetContent(signature_node);
      if (recv_sig_str && (strlen(recv_sig_str) != (SIGNATURE_LENGTH * 2)))
      {
        log_err("%s ERROR: Signature length (%d) is invalid\n", __FUNCTION__,
                strlen((char* ) xmlNodeGetContent(signature_node)));
        xmlFree(recv_sig_str);
        recv_sig_str = NULL;
        return VHQ_SERVER_MESSAGE_XML_SIGNATURE_LENGTH_FAILURE;
      }
      else
        GetBinaryFromNode(signature_node, recv_signature,
                          sizeof(recv_signature), FALSE);

      xmlFree(recv_sig_str);
      recv_sig_str = NULL;

#if DEBUG_SIGNATURE_VALIDATION
      DebugMsgBuffer("\tReceived Signature  ", recv_signature,
      SIGNATURE_LENGTH,
                     BUF_TYPE_HEX);
#endif

      if (memcmp(recv_signature, calc_signature, SIGNATURE_LENGTH) == 0)
      {
        dbg_notice("%s: Signature Validates!!!\n", __FUNCTION__);
        ret_val = VHQ_SUCCESS;
      }
      else
      {
#if DEBUG_SIGNATURE_VALIDATION
        log_err("%s ERROR: Signature Mismatch\n", __FUNCTION__);
        DebugMsgBuffer("\tReceived  ", recv_signature,
        SIGNATURE_LENGTH,
                       BUF_TYPE_HEX);
        DebugMsgBuffer("\tCalculated", calc_signature,
        SIGNATURE_LENGTH,
                       BUF_TYPE_HEX);
#endif
        ret_val = VHQ_SERVER_MESSAGE_XML_SIGNATURE_MISMATCH;
      }
    }

  }

  return ret_val;
#else
  return VHQ_SUCCESS;
#endif

}

int VHQXmlUpdateNonce(char *XMLData, int XMLDataSize, char **XMLResponse,
                      bool Validate)
{
  int XMLLen;
  xmlDoc *doc = NULL;
  xmlNode *root_element = NULL;
  xmlNode *temp_node = NULL;
  xmlNode *signature_node = NULL;
  xmlNode *dev_msg_node = NULL;
  xmlChar *data_p;
  unsigned char signature[SIGNATURE_LENGTH];
  char signKeyId[SIGNATURE_KEY_ID_LEN + 1];

  /* Clear the response data first */
  *XMLResponse = NULL;
  XMLLen = 0;

  /* Make sure there is data to parse */
  if ((XMLData == NULL) || (XMLDataSize == 0))
    return 0;

  /*parse the file and get the DOM */
  doc = xmlReadMemory(XMLData, XMLDataSize, "SavedMsg.xml", NULL,
                      XML_PARSE_NOBLANKS);

  /* Lets free the input memory */
  free(XMLData);
  XMLData = NULL;

  if (doc == NULL)
  {
    xmlErrorPtr pErr = xmlGetLastError();
    log_err("%s ERROR: could not parse XML buffer (%s)\n", __FUNCTION__,
            pErr ? pErr->message : "NULL");
    return 0;
  }

  /*Get the root element node */
  root_element = xmlDocGetRootElement(doc);

  /* Find the Operation type */
  temp_node = GetNodeByName(root_element, VHQ_XML_HEADER_TAG);
  if (temp_node)
  {
    long nonce_val;

    /* Add Nonce node */
    nonce_val = GenerateNonce();
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Changing NONCE to %d\n", __FUNCTION__, nonce_val);
    //changeIntegerAttr(temp_node, VHQ_XML_NONCE_TAG, nonce_val);
    dbg_notice("%s: Adding NONCE again = %d\n", __FUNCTION__, nonce_val);
    addIntegerAttr(temp_node, VHQ_XML_NONCE_TAG, nonce_val);
  }

  /* Add Signature node */
  dbg_notice("%s: Removing signature\n", __FUNCTION__);
  signature_node = GetNodeByName(root_element, VHQ_XML_SIGNATURE_TAG);
  dev_msg_node = GetNodeByName(root_element, VHQ_DEVICE_XML_MSG_WRAPPER);
  xmlUnlinkNode(signature_node);
  xmlFreeNode(signature_node);
  signature_node = NULL;

  dbg_notice("%s: Re-Generating signature\n", __FUNCTION__);
  if (!XMLGenerateSignature(doc, signature, sizeof(signature)))
    dbg_warn("%s WARNING: Could not generate signature\n", __FUNCTION__);
  dbg_notice("%s: Adding signature\n", __FUNCTION__);
  addBinaryNode(doc, dev_msg_node, VHQ_XML_SIGNATURE_TAG, signature,
                sizeof(signature), FALSE);
  signature_node = GetNodeByName(root_element, VHQ_XML_SIGNATURE_TAG);
  xmlSetProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_TYPE,
  BAD_CAST VHQ_XML_SIGNATURE_TYPE_MAC);
  xmlSetProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_ALGO,
  BAD_CAST VHQ_XML_SIGNATURE_ALGO_CMAC_AES);
  VHQSecurtiyGetSignatureKeyID(signKeyId, sizeof(signKeyId));
  xmlSetProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_KEY_ID,
  BAD_CAST signKeyId);

  PRINT_XML_DOC(__FUNCTION__, doc);

  if (Validate)
  {
    dbg_notice("%s: Validating XML after replacing NONCE\n", __FUNCTION__);
    if (!ValidateXml(doc))
    {
      xmlFreeDoc(doc);
      log_err("%s ERROR: XML after NONCE replacement did not validate\n",
              __FUNCTION__);
      return 0;
    }
  }

  /* Dump the tree to temporary output memory */
  //xmlDocDumpMemoryEnc(doc, &data_p, &XMLLen, "UTF-8");
  xmlDocDumpFormatMemory(doc, &data_p, &XMLLen, 1);
  XMLLen++;
  *XMLResponse = malloc(XMLLen);
  if (*XMLResponse)
  {
    memset(*XMLResponse, 0, XMLLen);

    /* Copy the tree to memory buff and delete temporary memory */
    memcpy(*XMLResponse, (char*) data_p, XMLLen - 1);
  }
  else
  {
    log_err("%s: FAILED to malloc %d bytes for response buffer\n", __FUNCTION__,
            XMLLen);
    XMLLen = 0;
  }
  xmlFree(data_p);

  /* We can free the XML doc now */
  xmlFreeDoc(doc);

  /* Use this to debug memory issues */
  xmlMemoryDump();
  return (XMLLen);

}


bool FinalizeXMLDoc(xmlDocPtr XML_doc_p, bool final_update)
{
  xmlNode *temp_node;
  xmlNode *response_root_element;
  xmlNode *signature_node = NULL;
  unsigned char signature[SIGNATURE_LENGTH] = { 0x11, 0x11, 0x11, 0x11, 0x11,
      0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11 };
  char signKeyId[SIGNATURE_KEY_ID_LEN + 1] = "111111";

  response_root_element = xmlDocGetRootElement(XML_doc_p);

  temp_node = GetNodeByName(response_root_element, VHQ_XML_HEADER_TAG);
  if (temp_node)
  {
    long nonce_val = 1;

    if (final_update)
    {
      nonce_val = GenerateNonce();
    }

    /* Add hard coded Nonce - it will always get replaced just before we send the message */
    addIntegerAttr(temp_node, VHQ_XML_NONCE_TAG, nonce_val);
  }

  if (final_update)
  {
    /* Add Signature node */
    if (!XMLGenerateSignature(XML_doc_p, signature, sizeof(signature)))
      log_warn("%s WARNING: Could not generate signature\n", __FUNCTION__);
    addBinaryNode(XML_doc_p, response_root_element, VHQ_XML_SIGNATURE_TAG,
                  signature, sizeof(signature), FALSE);
    signature_node = GetNodeByName(response_root_element,
    VHQ_XML_SIGNATURE_TAG);
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_TYPE,
    BAD_CAST VHQ_XML_SIGNATURE_TYPE_MAC);
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_ALGO,
    BAD_CAST VHQ_XML_SIGNATURE_ALGO_CMAC_AES);
    VHQSecurtiyGetSignatureKeyID(signKeyId, sizeof(signKeyId));
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_KEY_ID,
    BAD_CAST signKeyId);
  }
  else
  {
    /* Add a fake Signature node for validation purposes only - it will always get replaced just before we send the message */
    addBinaryNode(XML_doc_p, response_root_element, VHQ_XML_SIGNATURE_TAG,
                  signature, sizeof(signature), FALSE);
    signature_node = GetNodeByName(response_root_element,
    VHQ_XML_SIGNATURE_TAG);
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_TYPE,
    BAD_CAST VHQ_XML_SIGNATURE_TYPE_MAC);
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_ALGO,
    BAD_CAST VHQ_XML_SIGNATURE_ALGO_CMAC_AES);
    xmlNewProp(signature_node, BAD_CAST VHQ_XML_SIGNATURE_KEY_ID,
    BAD_CAST signKeyId);
  }

  if (!ValidateXml(XML_doc_p))
  {
    log_err("%s ERROR: Could not validate XML response\n", __FUNCTION__);

    xmlSaveFormatFileEnc(VHQ_XML_VALIDATION_ERROR_FILE, XML_doc_p, "UTF-8", 1);
    return FALSE;
  }

  return TRUE;
}


int SaveXMLDoc(xmlDocPtr XMLDoc, char *filename)
{
  FILE *fp;
  int ret_val = -1;

  /* Make sure we have a valid doc to save */
  if (XMLDoc == NULL)
  {
    log_err("%s: Invalid XMLDoc\n", __FUNCTION__);
    return ret_val;
  }

  /* Make sure we have a valid filename to save to */
  if (filename == NULL)
  {
    dbg_err("%s: Invalid filename\n", __FUNCTION__);
    return ret_val;
  }

  /* Open/Create the file - truncate any existing info */
  fp = fopen(filename, "w+");

  if (fp)
  {
    ret_val = xmlDocDump(fp, XMLDoc);
    dbg_msg("%s: Dumped %d bytes from xmlDocPtr 0x%08x to %s\n", __FUNCTION__,
            ret_val, XMLDoc, filename);
    fclose(fp);
  }

  return ret_val;
}


void RemoveXMLDoc(char *filename)
{
  dbg_msg("%s: removing %s\n", __FUNCTION__, filename);
  remove(filename);
}


xmlDocPtr RestoreXMLDoc(char *filename)
{
  xmlDocPtr ret_val = NULL;

  /* Make sure we have a valid filename to save to */
  if (filename == NULL)
  {
    dbg_err("%s: Invalid filename\n", __FUNCTION__);
    return ret_val;
  }

  dbg_msg("%s: restoring XML Doc from %s\n", __FUNCTION__, filename);
  ret_val = xmlParseFile(filename);

  dbg_msg("%s: removing %s since it has been restored\n", __FUNCTION__,
          filename);
  RemoveXMLDoc(filename);

  dbg_msg("%s: returning 0x%08x\n", __FUNCTION__, ret_val);
  return ret_val;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
