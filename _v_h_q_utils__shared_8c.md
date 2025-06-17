---
title: tmsagt/src/VHQUtils/VHQUtils_shared.c

---

# tmsagt/src/VHQUtils/VHQUtils_shared.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[_CommMsgIdPair_t](struct___comm_msg_id_pair__t.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [_CommMsgIdPair_t](struct___comm_msg_id_pair__t.md) | **[CommMsgIdPair_t](_v_h_q_utils__shared_8c.md#typedef-commmsgidpair-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| char * | **[base64_encode](_v_h_q_utils__shared_8c.md#function-base64-encode)**(const char * data, size_t input_length, size_t * output_length) |
| void | **[build_decoding_table](_v_h_q_utils__shared_8c.md#function-build-decoding-table)**() |
| char * | **[base64_decode](_v_h_q_utils__shared_8c.md#function-base64-decode)**(const char * data, size_t input_length, size_t * output_length) |
| void | **[base64_cleanup](_v_h_q_utils__shared_8c.md#function-base64-cleanup)**() |
| char * | **[trim_whitespace](_v_h_q_utils__shared_8c.md#function-trim-whitespace)**(char * s) |
| bool | **[FileExists](_v_h_q_utils__shared_8c.md#function-fileexists)**(const char * pszName) |
| bool | **[removeFile](_v_h_q_utils__shared_8c.md#function-removefile)**(const char * fname) |
| bool | **[DirExists](_v_h_q_utils__shared_8c.md#function-direxists)**(char * pszName) |
| bool | **[CreateDir](_v_h_q_utils__shared_8c.md#function-createdir)**(char * pszName, mode_t mode) |
| bool | **[removeDir](_v_h_q_utils__shared_8c.md#function-removedir)**(const char * dirname) |
| bool | **[TestFileSignature](_v_h_q_utils__shared_8c.md#function-testfilesignature)**(const char * pszFile) |
| void | **[SafeMsgSndWrapper](_v_h_q_utils__shared_8c.md#function-safemsgsndwrapper)**(int outQid, void * pMsg, int iMsgSize, int flags) |
| int | **[SafeMsgRcvWrapper](_v_h_q_utils__shared_8c.md#function-safemsgrcvwrapper)**(int inQid, void * pMsg, int iMsgSize, long msgtyp, int flags, bool returnOnEINTR) |
| bool | **[ConvertHexStringToBinary](_v_h_q_utils__shared_8c.md#function-converthexstringtobinary)**(char * pszHexString, char * bin_data, uint16 bin_data_len) |
| bool | **[ConvertBinaryToHexString](_v_h_q_utils__shared_8c.md#function-convertbinarytohexstring)**(char * bin_data, uint16 bin_data_len, char * pszHexString, uint16 hex_str_buf_size) |
| bool | **[ConvertVHQResultToStr](_v_h_q_utils__shared_8c.md#function-convertvhqresulttostr)**(vhq_result_t result, char * ResultStr, int ResultStrLen) |
| uint32 | **[GetCurrentMessageID](_v_h_q_utils__shared_8c.md#function-getcurrentmessageid)**(int comm_id, uint32 rx_msg_id, int operation_id, bool comm_id_closed) |
| event_result_t | **[ConvertVHQResultToEventResult](_v_h_q_utils__shared_8c.md#function-convertvhqresulttoeventresult)**(vhq_result_t vhq_result) |
| uint32 | **[FileSize](_v_h_q_utils__shared_8c.md#function-filesize)**(char * pszName) |
| int | **[CopyFileWorker](_v_h_q_utils__shared_8c.md#function-copyfileworker)**(const char * pszSrc, const char * pszDest, char * pszDestMode) |
| int | **[CopyFile](_v_h_q_utils__shared_8c.md#function-copyfile)**(const char * pszSrc, const char * pszDest) |
| int | **[MoveFile](_v_h_q_utils__shared_8c.md#function-movefile)**(const char * pszSrc, const char * pszDest) |
| int | **[ConcatenateFile](_v_h_q_utils__shared_8c.md#function-concatenatefile)**(const char * pszSrc, const char * pszDest) |
| void | **[BackupHBResult](_v_h_q_utils__shared_8c.md#function-backuphbresult)**() |
| void | **[openHbResult](_v_h_q_utils__shared_8c.md#function-openhbresult)**() |
| void | **[closeHbResult](_v_h_q_utils__shared_8c.md#function-closehbresult)**() |
| void | **[writeHbResult](_v_h_q_utils__shared_8c.md#function-writehbresult)**(const char * string, ... ) |
| vhq_result_t | **[EventNotification](_v_h_q_utils__shared_8c.md#function-eventnotification)**(int event_mask, char * filename, int notificationDataInteger, vhq_result_t vhq_result, event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| bool | **[VHQGetParamFileName](_v_h_q_utils__shared_8c.md#function-vhqgetparamfilename)**(char * receiver, char * filename, char * full_filename, size_t full_filename_len, bool * remove_file) |
| vhq_result_t | **[ProcessAppAction](_v_h_q_utils__shared_8c.md#function-processappaction)**(app_action_content_t * app_action_content) |
| bool | **[IsComTypeSet](_v_h_q_utils__shared_8c.md#function-iscomtypeset)**(com_type_t comtype) |
| com_type_t | **[GetComType](_v_h_q_utils__shared_8c.md#function-getcomtype)**(void ) |
| void | **[SetComType](_v_h_q_utils__shared_8c.md#function-setcomtype)**(com_type_t type) |
| const char * | **[get_ComType_name](_v_h_q_utils__shared_8c.md#function-get-comtype-name)**(com_type_t comtype) |
| int | **[GetIPAddress](_v_h_q_utils__shared_8c.md#function-getipaddress)**(char * pszIPAddress, int iIPAddressBufLen) |
| int | **[GetMACAddress](_v_h_q_utils__shared_8c.md#function-getmacaddress)**(char * pszMACAddress, int iMACAddressBufLen) |
| int | **[VCLDiagDataParserGetOneLine](_v_h_q_utils__shared_8c.md#function-vcldiagdataparsergetoneline)**(char * input_string, char ** nextline) |
| int | **[VCLDiagDataParserGetParam](_v_h_q_utils__shared_8c.md#function-vcldiagdataparsergetparam)**(char * inputline, char ** name, char ** value) |
| void | **[CreateVHQRebootFile](_v_h_q_utils__shared_8c.md#function-createvhqrebootfile)**() |
| void | **[RemoveVHQRebootFile](_v_h_q_utils__shared_8c.md#function-removevhqrebootfile)**() |
| bool | **[RequestAppRegistrationDelay](_v_h_q_utils__shared_8c.md#function-requestappregistrationdelay)**() |
| bool | **[BlockAllSignals](_v_h_q_utils__shared_8c.md#function-blockallsignals)**(bool unblockSIGUSR1) |
| bool | **[checkIPAddressIPv6](_v_h_q_utils__shared_8c.md#function-checkipaddressipv6)**(const char * ip) |
| bool | **[ISvalidIP](_v_h_q_utils__shared_8c.md#function-isvalidip)**(const char * ip) |
| bool | **[ISvalidMAC](_v_h_q_utils__shared_8c.md#function-isvalidmac)**(const char * mac) |
| time_t | **[linux_time](_v_h_q_utils__shared_8c.md#function-linux-time)**(time_t * pTime) |
| time_t | **[linux_mktime](_v_h_q_utils__shared_8c.md#function-linux-mktime)**(struct tm * t) |
| struct tm * | **[linux_localtime](_v_h_q_utils__shared_8c.md#function-linux-localtime)**(time_t * pTime, struct tm * local_time) |
| struct tm * | **[linux_gmtime](_v_h_q_utils__shared_8c.md#function-linux-gmtime)**(time_t * pTime, struct tm * local_time) |
| time_t | **[linux_timegm](_v_h_q_utils__shared_8c.md#function-linux-timegm)**(struct tm * t) |
| time_t | **[convert_tm_to_time_t](_v_h_q_utils__shared_8c.md#function-convert-tm-to-time-t)**(const struct tm * t) |
| long | **[GenerateNonce](_v_h_q_utils__shared_8c.md#function-generatenonce)**(void ) |
| bool | **[lowPowerMode](_v_h_q_utils__shared_8c.md#function-lowpowermode)**() |
| long long int | **[u32subu32](_v_h_q_utils__shared_8c.md#function-u32subu32)**(unsigned int a, unsigned int b) |
| char * | **[removeNLS](_v_h_q_utils__shared_8c.md#function-removenls)**(char * input) |
| char * | **[tmtoa](_v_h_q_utils__shared_8c.md#function-tmtoa)**(const struct tm * tm) |
| char * | **[lltoa](_v_h_q_utils__shared_8c.md#function-lltoa)**(long long int i) |
| bool | **[isValidXMLData](_v_h_q_utils__shared_8c.md#function-isvalidxmldata)**(const char * data) |
| uint32 | **[GetHBFreq](_v_h_q_utils__shared_8c.md#function-gethbfreq)**(uint32 * hbFailureRetryThresh, const com_type_t com_type) |
| bool | **[HeartbeatRescheduleRequired](_v_h_q_utils__shared_8c.md#function-heartbeatreschedulerequired)**(uint32 oldHBFreq, uint32 oldHBFailureRetryThresh) |
| time_t | **[ConvertServerLocalTimeToDeviceUTC](_v_h_q_utils__shared_8c.md#function-convertserverlocaltimetodeviceutc)**(char * description, time_t input_loc_time) |
| time_t | **[ConvertDeviceUTCToServerLocalTime](_v_h_q_utils__shared_8c.md#function-convertdeviceutctoserverlocaltime)**(char * description, time_t input_UTC_time) |
| void | **[SetOSBootTime](_v_h_q_utils__shared_8c.md#function-setosboottime)**(time_t boot_time) |
| time_t | **[GetOSBootTime](_v_h_q_utils__shared_8c.md#function-getosboottime)**(void ) |
| bool | **[isPCIreboot](_v_h_q_utils__shared_8c.md#function-ispcireboot)**(void ) |
| int | **[LoadDefaultConnectionXmlProfile1](_v_h_q_utils__shared_8c.md#function-loaddefaultconnectionxmlprofile1)**(connection_profile_t * cf) |
| int | **[CreateConnectionXmlProfile1](_v_h_q_utils__shared_8c.md#function-createconnectionxmlprofile1)**(char * pLocalNet, connection_profile_t * pConProf) |
| int | **[LoadDefaultLocalNetXml](_v_h_q_utils__shared_8c.md#function-loaddefaultlocalnetxml)**(net_profile_t * nf) |
| int | **[CreateLocalNetXml](_v_h_q_utils__shared_8c.md#function-createlocalnetxml)**(char * pLocalNet, net_profile_t * profile) |
| int | **[LoadDefaultWLANpreconfiguredXml](_v_h_q_utils__shared_8c.md#function-loaddefaultwlanpreconfiguredxml)**(wlan_preconfigured_t * pf) |
| int | **[CreateWLANpreconfiguredXml](_v_h_q_utils__shared_8c.md#function-createwlanpreconfiguredxml)**(char * pLocalNet, wlan_preconfigured_t * profile) |
| int | **[CreateAdkComDialXmlProfile](_v_h_q_utils__shared_8c.md#function-createadkcomdialxmlprofile)**(char * fullFilename, char * pszPhoneNumber) |
| int | **[CreateAdkComXmlProfile](_v_h_q_utils__shared_8c.md#function-createadkcomxmlprofile)**(char * fullFilename, char * url, char * port, char * type) |
| bool | **[GenerateAppParamUpdateEvent](_v_h_q_utils__shared_8c.md#function-generateappparamupdateevent)**(app_param_update_info_t * updateInfo) |
| int | **[ReqParamUploadRead](_v_h_q_utils__shared_8c.md#function-reqparamuploadread)**(char ** param_buffer, char * param_update_file_name, int * param_update_count, time_t * param_update_time, size_t * tot_param_update_size) |
| void | **[ReadParamUpdateFile](_v_h_q_utils__shared_8c.md#function-readparamupdatefile)**(app_param_update * param_update_list, size_t param_update_list_size, int * param_update_count, time_t * param_update_time, char * param_update_file_name) |
| int | **[WriteParamUpdateFile](_v_h_q_utils__shared_8c.md#function-writeparamupdatefile)**(app_param_update * param_update_list, int param_update_count, time_t param_update_time, char * param_update_file_name, size_t param_update_file_name_size) |
| int | **[ProcessAppGeneratedParameterUpdate](_v_h_q_utils__shared_8c.md#function-processappgeneratedparameterupdate)**(char * receiver, char * param_update_info_file, int param_update_count, time_t param_update_time, bool agentRequested, char * processedFilename) |
| char * | **[mallocProcessingStatusFileName](_v_h_q_utils__shared_8c.md#function-mallocprocessingstatusfilename)**(event_id_t event_id) |
| int | **[utility_PutenvFilename](_v_h_q_utils__shared_8c.md#function-utility-putenvfilename)**(const char * file_name, const char * section, const char * param, const char * value) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| char[] | **[encoding_table](_v_h_q_utils__shared_8c.md#variable-encoding-table)**  |
| char * | **[decoding_table](_v_h_q_utils__shared_8c.md#variable-decoding-table)**  |
| int[] | **[mod_table](_v_h_q_utils__shared_8c.md#variable-mod-table)**  |
| app_param_update_info_t * | **[lrecent_param_update_info](_v_h_q_utils__shared_8c.md#variable-lrecent-param-update-info)**  |
| char | **[tokenHbResult](_v_h_q_utils__shared_8c.md#variable-tokenhbresult)**  |
| [CommMsgIdPair_t](_v_h_q_utils__shared_8c.md#typedef-commmsgidpair-t)[MAX_EVENTS] | **[comm_msg_id_pair_table](_v_h_q_utils__shared_8c.md#variable-comm-msg-id-pair-table)**  |
| uint16 | **[g_eComType](_v_h_q_utils__shared_8c.md#variable-g-ecomtype)**  |
| com_type_t | **[g_eCurrCom](_v_h_q_utils__shared_8c.md#variable-g-ecurrcom)**  |
| long | **[prev_nonce](_v_h_q_utils__shared_8c.md#variable-prev-nonce)**  |
| time_t | **[_agent_boot_time](_v_h_q_utils__shared_8c.md#variable--agent-boot-time)**  |
| const char[] | **[szDialConfig](_v_h_q_utils__shared_8c.md#variable-szdialconfig)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VHQ_REG_DELAY_TIMEOUT_BUFFER](_v_h_q_utils__shared_8c.md#define-vhq-reg-delay-timeout-buffer)**  |
|  | **[MAX_RENAME_RETRIES](_v_h_q_utils__shared_8c.md#define-max-rename-retries)**  |
|  | **[ADE_NUM_KEYS](_v_h_q_utils__shared_8c.md#define-ade-num-keys)**  |
|  | **[CHAR_SI](_v_h_q_utils__shared_8c.md#define-char-si)**  |
|  | **[MSKEY_PRESENT](_v_h_q_utils__shared_8c.md#define-mskey-present)**  |
|  | **[TMS_MAX_PARAM_UPDATE_COUNT](_v_h_q_utils__shared_8c.md#define-tms-max-param-update-count)**  |
|  | **[RM_FILE_CNT](_v_h_q_utils__shared_8c.md#define-rm-file-cnt)**  |
|  | **[CREATE_DIR_CNT](_v_h_q_utils__shared_8c.md#define-create-dir-cnt)**  |
|  | **[MAX_CID_REFERENCES](_v_h_q_utils__shared_8c.md#define-max-cid-references)**  |
|  | **[PCI_REBOOT_GAP](_v_h_q_utils__shared_8c.md#define-pci-reboot-gap)**  |

## Detailed Description


Some utility functions shared between platforms 

## Types Documentation

### typedef CommMsgIdPair_t

```cpp
typedef struct _CommMsgIdPair_t CommMsgIdPair_t;
```



## Functions Documentation

### function base64_encode

```cpp
char * base64_encode(
    const char * data,
    size_t input_length,
    size_t * output_length
)
```


**Parameters**: 

  * **data** = string to encode. 
  * **input_length** = length of input string. 
  * **output_length** = length of output encoded string.


**Return**: encoded data. 

This function encodes a string in base 64. 


### function build_decoding_table

```cpp
void build_decoding_table()
```


### function base64_decode

```cpp
char * base64_decode(
    const char * data,
    size_t input_length,
    size_t * output_length
)
```


### function base64_cleanup

```cpp
void base64_cleanup()
```


### function trim_whitespace

```cpp
char * trim_whitespace(
    char * s
)
```


**Parameters**: 

  * **s** = string


**Return**: trimmed string. 

This function trim the leading and trailing whitespace from a string in-place. 


### function FileExists

```cpp
bool FileExists(
    const char * pszName
)
```


**Parameters**: 

  * **pszName** = file name.


**Return**: TRUE, if found. 

Trim all whitespace from a string in-place.

This function check whether a file exists or not. 


### function removeFile

```cpp
bool removeFile(
    const char * fname
)
```


**Parameters**: 

  * **fname** = file name to be removed.


**Return**: TRUE, if removed. 

This function removes a file. 


### function DirExists

```cpp
bool DirExists(
    char * pszName
)
```


**Parameters**: 

  * **pszName** = directory name.


**Return**: TRUE, if found. 

This function check whether a directory exists or not. 


### function CreateDir

```cpp
bool CreateDir(
    char * pszName,
    mode_t mode
)
```


**Parameters**: 

  * **pszName** = directory name. 
  * **mode** = directory mode to be set.


**Return**: TRUE, if created. 

This function creates dir by retrying. 


### function removeDir

```cpp
bool removeDir(
    const char * dirname
)
```


**Parameters**: 

  * **dirname** = directory name to be removed.


**Return**: TRUE, if removed. 

This function removes a directory. 


### function TestFileSignature

```cpp
bool TestFileSignature(
    const char * pszFile
)
```


**Parameters**: 

  * **pszFile** = file name.


**Return**: TRUE, if passed. 

This function tests the signature of a file. 


### function SafeMsgSndWrapper

```cpp
void SafeMsgSndWrapper(
    int outQid,
    void * pMsg,
    int iMsgSize,
    int flags
)
```


**Parameters**: 

  * **outQid** = queue ID. 
  * **pMsg** = message to be send. 
  * **iMsgSize** = size of message received. 
  * **flags** = flags.


**Return**: void 

This function is a wrapper function for sending messages in Queues. 


### function SafeMsgRcvWrapper

```cpp
int SafeMsgRcvWrapper(
    int inQid,
    void * pMsg,
    int iMsgSize,
    long msgtyp,
    int flags,
    bool returnOnEINTR
)
```


**Parameters**: 

  * **inQid** = queue ID. 
  * **pMsg** = message received, 
  * **iMsgSize** = size of message received. 
  * **msgtyp** = message type 
  * **flags** = flags. 
  * **returnOnEINTR** = TRUE, if return error if EINTR.


**Return**: -1, if error. 

This function is a wrapper function for receiving message from Queues. 


### function ConvertHexStringToBinary

```cpp
bool ConvertHexStringToBinary(
    char * pszHexString,
    char * bin_data,
    uint16 bin_data_len
)
```


**Parameters**: 

  * **pszHexString** = hex string 
  * **bin_data** = binary data 
  * **bin_data_len** = length of binary data


**Return**: TRUE, if SUCCESS 

This function converts a hex string to a binary string. 


### function ConvertBinaryToHexString

```cpp
bool ConvertBinaryToHexString(
    char * bin_data,
    uint16 bin_data_len,
    char * pszHexString,
    uint16 hex_str_buf_size
)
```


**Parameters**: 

  * **bin_data** = binary data 
  * **bin_data_len** = length of binary data 
  * **pszHexString** = hex string 
  * **hex_str_buf_size** = hex string size


**Return**: TRUE, if SUCCESS 

This function converts a binary string to hex string . 


### function ConvertVHQResultToStr

```cpp
bool ConvertVHQResultToStr(
    vhq_result_t result,
    char * ResultStr,
    int ResultStrLen
)
```


**Parameters**: 

  * **result** = VHQ result to convert. 
  * **ResultStr** = string obtained after converting. 
  * **ResultStrLen** = length of result string.


**Return**: TRUE, if conversion success. 

This function converts the VHQ result to string. 


### function GetCurrentMessageID

```cpp
uint32 GetCurrentMessageID(
    int comm_id,
    uint32 rx_msg_id,
    int operation_id,
    bool comm_id_closed
)
```


### function ConvertVHQResultToEventResult

```cpp
event_result_t ConvertVHQResultToEventResult(
    vhq_result_t vhq_result
)
```


### function FileSize

```cpp
uint32 FileSize(
    char * pszName
)
```


**Parameters**: 

  * **pszName** = file name.


**Return**: size of file. 

This function checks the size of the file name. 


### function CopyFileWorker

```cpp
static int CopyFileWorker(
    const char * pszSrc,
    const char * pszDest,
    char * pszDestMode
)
```


**Parameters**: 

  * **pszSrc** = source filename 
  * **pszDest** = destination filename 
  * **pszDestMode** = mode of opening destination file


**Return**: 

  * 0, if success or source and destination are same 
  * -1, if error 


This function copies a file from a source to a destination 


### function CopyFile

```cpp
int CopyFile(
    const char * pszSrc,
    const char * pszDest
)
```


This function is a wrapper function for CopyFileWorker(). It adds file opening mode. 


### function MoveFile

```cpp
int MoveFile(
    const char * pszSrc,
    const char * pszDest
)
```


**Parameters**: 

  * **pszSrc** = source of file 
  * **pszDest** = destination of file.


**Return**: 0, if success; -1, if error. 

This function moves a file from a given source to destination. 


### function ConcatenateFile

```cpp
int ConcatenateFile(
    const char * pszSrc,
    const char * pszDest
)
```


This function is a wrapper function for CopyFileWorker(). It adds a+ file opening mode. 


### function BackupHBResult

```cpp
static void BackupHBResult()
```


**Return**: void 

This function make a back up for the result of recent heart beat result file.


### function openHbResult

```cpp
void openHbResult()
```


**Return**: void 

This function removes the last heart beat result file before processing a new heart beat.


### function closeHbResult

```cpp
void closeHbResult()
```


**Return**: void 

This function closes the heartbeat result file after an attempt to do heart beat.


### function writeHbResult

```cpp
void writeHbResult(
    const char * string,
    ... 
)
```


**Parameters**: 

  * **string** = string list to write to file.


**Return**: void 

This function write the heart beat result to the file after an attempt to do HB. 


### function EventNotification

```cpp
vhq_result_t EventNotification(
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

  * **event_mask** = event mask 
  * **filename** = filename to send to app 
  * **notificationDataInteger** = notification data 
  * **hbResult** = server message result 
  * **event_set_id** = event set id 
  * **event_id** = event id 
  * **app_approval_required** = TRUE, if application approval required


**Return**: TRUE ,if success 

This function gets the parameter file name for uploading to server. 


### function VHQGetParamFileName

```cpp
bool VHQGetParamFileName(
    char * receiver,
    char * filename,
    char * full_filename,
    size_t full_filename_len,
    bool * remove_file
)
```


**Parameters**: 

  * **receiver** = receiver application name 
  * **filename** = filename 
  * **full_filename** = full filename 
  * **full_filename_len** = filename length 
  * **remove_file** = TRUE, if remove file


**Return**: TRUE ,if success 

This function gets the parameter file name for uploading to server. 


### function ProcessAppAction

```cpp
vhq_result_t ProcessAppAction(
    app_action_content_t * app_action_content
)
```


**Parameters**: 

  * **app_action_content** = application action type


**Return**: vhq_result_t VHQ_SUCCESS,if success 

This function sends an the app action type message to app. 


### function IsComTypeSet

```cpp
bool IsComTypeSet(
    com_type_t comtype
)
```


### function GetComType

```cpp
com_type_t GetComType(
    void 
)
```


**Return**: Latest success connection type. 

This function provides value of latest success connection type. This value provided on connection establishing stage.


### function SetComType

```cpp
void SetComType(
    com_type_t type
)
```


**Parameters**: 

  * **type** = Current connection type.


**Return**: void 

This function stores value of latest success connection type. Should be used connection establishing stage. 


### function get_ComType_name

```cpp
const char * get_ComType_name(
    com_type_t comtype
)
```


**Parameters**: 

  * **comtype** = Current connection type.


**Return**: com string. 

This function returns the com type string. 


### function GetIPAddress

```cpp
int GetIPAddress(
    char * pszIPAddress,
    int iIPAddressBufLen
)
```


**Parameters**: 

  * **pszIPAddress** = IP address string 
  * **iIPAddressBufLen** = IP address string length


**Return**: int 0,if success 

This function get the MAC address. 


### function GetMACAddress

```cpp
int GetMACAddress(
    char * pszMACAddress,
    int iMACAddressBufLen
)
```


**Parameters**: 

  * **pszMACAddress** = MAC address string 
  * **iMACAddressBufLen** = MAC address string length


**Return**: int 

This function get the MAC address. 


### function VCLDiagDataParserGetOneLine

```cpp
int VCLDiagDataParserGetOneLine(
    char * input_string,
    char ** nextline
)
```


**Parameters**: 

  * **input_string** = VCL info data 
  * **nextline** = pointer to parsed


**Return**: int 0, if error; 1,if success 

This function parses the VCLDiag Data to send to server. 


### function VCLDiagDataParserGetParam

```cpp
int VCLDiagDataParserGetParam(
    char * inputline,
    char ** name,
    char ** value
)
```


**Parameters**: 

  * **inputline** = input line 
  * **name** = name 
  * **value** = value


**Return**: int 0, if error; 1,if success 

This function parses the VCLDiag Data to send to server. 


### function CreateVHQRebootFile

```cpp
void CreateVHQRebootFile()
```


**Return**: void 

This function opens a reboot file. 


### function RemoveVHQRebootFile

```cpp
void RemoveVHQRebootFile()
```


**Return**: void 

This function removes a reboot file. 


### function RequestAppRegistrationDelay

```cpp
bool RequestAppRegistrationDelay()
```


**Parameters**: 

  * **void** 


**Return**: void 

Function creates message queues and sends VHQ_REQUEST_REGISTRATION_DELAY message and waits for a particular time for application registration to respond with VHQ_REQUEST_REGISTRATION_DELAY response message. 


### function BlockAllSignals

```cpp
bool BlockAllSignals(
    bool unblockSIGUSR1
)
```


### function checkIPAddressIPv6

```cpp
static bool checkIPAddressIPv6(
    const char * ip
)
```


**Parameters**: 

  * **=** pointer to string


**Return**: TRUE, if valid 

Function validates IPv6 address

WARNING: IPv6 addresses "::", "0000:0000:0000:0000:0000:0000" and "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF" will be marked as INVALID.

Valid address examples: "FFFF:0000:AB00:1234:0000:2552:777:0000", "ffff::", "::FFFF", "FFFF::FFFF", "A::"

Prohibited address examples: "::", "0::", "0::0", "0000:0000:0000:0000:0000:0000", "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF",

Invalid address examples: "AAA", "AAAA", "1200::1234::2552:777::0000", "FFFF:::0000", "FFFF:::", ":::FFFF", "FFFF::FFFFA", "1200::AB00:1234:::2552:777:0000"


### function ISvalidIP

```cpp
bool ISvalidIP(
    const char * ip
)
```


**Parameters**: 

  * **ip** = pointer to string


**Return**: TRUE, if valid. 

Function calls a function to validate an IPv4/IPv6 address. 


### function ISvalidMAC

```cpp
bool ISvalidMAC(
    const char * mac
)
```


**Parameters**: 

  * **mac** = pointer to string


**Return**: TRUE, if valid. 

Function validates a MAC address. 


### function linux_time

```cpp
time_t linux_time(
    time_t * pTime
)
```


### function linux_mktime

```cpp
time_t linux_mktime(
    struct tm * t
)
```


### function linux_localtime

```cpp
struct tm * linux_localtime(
    time_t * pTime,
    struct tm * local_time
)
```


### function linux_gmtime

```cpp
struct tm * linux_gmtime(
    time_t * pTime,
    struct tm * local_time
)
```


### function linux_timegm

```cpp
time_t linux_timegm(
    struct tm * t
)
```


### function convert_tm_to_time_t

```cpp
time_t convert_tm_to_time_t(
    const struct tm * t
)
```


### function GenerateNonce

```cpp
long GenerateNonce(
    void 
)
```


**Return**: long, the nonce generated. 

Function generates a Nonce for communicating with server. 


### function lowPowerMode

```cpp
bool lowPowerMode()
```


### function u32subu32

```cpp
long long int u32subu32(
    unsigned int a,
    unsigned int b
)
```


### function removeNLS

```cpp
static char * removeNLS(
    char * input
)
```


### function tmtoa

```cpp
char * tmtoa(
    const struct tm * tm
)
```


### function lltoa

```cpp
char * lltoa(
    long long int i
)
```


### function isValidXMLData

```cpp
bool isValidXMLData(
    const char * data
)
```


**Parameters**: 

  * **data** = pointer to string.


**Return**: FALSE, in case if non readable ASCII is detected 

This function verifies for ASCII symbols. 


### function GetHBFreq

```cpp
uint32 GetHBFreq(
    uint32 * hbFailureRetryThresh,
    const com_type_t com_type
)
```


**Parameters**: 

  * **hbFailureRetryThresh** = stores the heart beat failure retry threshold. 
  * **com_type** = com interface type.


**Return**: heartbeat frequency based on communication interface type used. 

This function finds the current com interface type and returns heart beat freq according to com type. 


### function HeartbeatRescheduleRequired

```cpp
bool HeartbeatRescheduleRequired(
    uint32 oldHBFreq,
    uint32 oldHBFailureRetryThresh
)
```


**Parameters**: 

  * **oldHBFreq** = the old HB frequency before config update. 
  * **oldHBFailureRetryThresh** = the old failure threshold before the update.


**Return**: TRUE if the HB needs to be re-scheduled, FALSE otherwise 

Determines whether or not the HB needs to be re-scheduled after a config update. If either the HB frequency or the failure threshold changed, we will cancel the current recurring HB and reschedule it. 


### function ConvertServerLocalTimeToDeviceUTC

```cpp
time_t ConvertServerLocalTimeToDeviceUTC(
    char * description,
    time_t input_loc_time
)
```


**Parameters**: 

  * **description** = a description string printed as part of DebugMsg call 
  * **input_loc_time** = the time sent from the server to convert


**Return**: time_t, the true UTC time_t value of the time sent by server. 

The server does not send time values to the device as UTC time, they are actually converted to the local time for the device. This causes issues on devices with a time zone set, so this function converts the "localtime" sent from server to a UTC time that is universal across all devices regardless of whether the time zone is set or not 


### function ConvertDeviceUTCToServerLocalTime

```cpp
time_t ConvertDeviceUTCToServerLocalTime(
    char * description,
    time_t input_UTC_time
)
```


**Parameters**: 

  * **description** = a description string printed as part of DebugMsg call 
  * **input_UTC_time** = the UTC time of the device to convert to local time


**Return**: time_t, the local time equivalent of the UTC value passed to this API. 

The server does not send time values to the device as UTC time, they are actually converted to the local time for the device. This causes issues on devices with a time zone set. The server also expects time values from the device to come up as local time of the device so this function converts the UTC time the agent will get from the OS for time() API to the local time of the device so that the server will understand it 


### function SetOSBootTime

```cpp
void SetOSBootTime(
    time_t boot_time
)
```


**Parameters**: 

  * **boot_time** = time. 


**Return**: void 

This function saves the agent boot time. 


### function GetOSBootTime

```cpp
time_t GetOSBootTime(
    void 
)
```


**Return**: agent boot time. 

This function returns the agent Boot time. 


### function isPCIreboot

```cpp
bool isPCIreboot(
    void 
)
```


**Return**: TRUE, if PCI reboot; FALSE, otherwise 

This function checks the event is a PCI Reboot to send to server 


### function LoadDefaultConnectionXmlProfile1

```cpp
static int LoadDefaultConnectionXmlProfile1(
    connection_profile_t * cf
)
```


### function CreateConnectionXmlProfile1

```cpp
static int CreateConnectionXmlProfile1(
    char * pLocalNet,
    connection_profile_t * pConProf
)
```


### function LoadDefaultLocalNetXml

```cpp
static int LoadDefaultLocalNetXml(
    net_profile_t * nf
)
```


### function CreateLocalNetXml

```cpp
static int CreateLocalNetXml(
    char * pLocalNet,
    net_profile_t * profile
)
```


### function LoadDefaultWLANpreconfiguredXml

```cpp
static int LoadDefaultWLANpreconfiguredXml(
    wlan_preconfigured_t * pf
)
```


### function CreateWLANpreconfiguredXml

```cpp
static int CreateWLANpreconfiguredXml(
    char * pLocalNet,
    wlan_preconfigured_t * profile
)
```


### function CreateAdkComDialXmlProfile

```cpp
int CreateAdkComDialXmlProfile(
    char * fullFilename,
    char * pszPhoneNumber
)
```


### function CreateAdkComXmlProfile

```cpp
int CreateAdkComXmlProfile(
    char * fullFilename,
    char * url,
    char * port,
    char * type
)
```


### function GenerateAppParamUpdateEvent

```cpp
bool GenerateAppParamUpdateEvent(
    app_param_update_info_t * updateInfo
)
```


**Parameters**: 

  * **updateInfo** = application parameter details


**Return**: TRUE, if success; FALSE, otherwise 

This function calls a function to schedule application parameter update event. 


### function ReqParamUploadRead

```cpp
int ReqParamUploadRead(
    char ** param_buffer,
    char * param_update_file_name,
    int * param_update_count,
    time_t * param_update_time,
    size_t * tot_param_update_size
)
```


**Parameters**: 

  * **param_update_list** = read parameter update buffer 
  * **param_update_file_name** = parameter filename 
  * **param_update_count** = parameter update count 
  * **param_update_time** = parameter update time 
  * **tot_param_update_size** = total size of parameter update


**Return**: version of parameter file 

This function reads the application parameter update file for sending to server. 


### function ReadParamUpdateFile

```cpp
void ReadParamUpdateFile(
    app_param_update * param_update_list,
    size_t param_update_list_size,
    int * param_update_count,
    time_t * param_update_time,
    char * param_update_file_name
)
```


**Parameters**: 

  * **param_update_list** = parameter updated list 
  * **param_update_list_size** = size of parameter update list 
  * **param_update_count** = parameter update count 
  * **param_update_time** = parameter update time 
  * **param_update_file_name** = parameter filename to be read


**Return**: void 

This function reads the application parameter update file for sending to server. 


### function WriteParamUpdateFile

```cpp
static int WriteParamUpdateFile(
    app_param_update * param_update_list,
    int param_update_count,
    time_t param_update_time,
    char * param_update_file_name,
    size_t param_update_file_name_size
)
```


**Parameters**: 

  * **param_update_list** = parameter update details extracted 
  * **param_update_count** = parameter update count from app. 
  * **param_update_time** = parameter update request time received from app 
  * **param_update_file_name** = filename to which parameters are stored. 
  * **param_update_file_name_size** = parameter update filename size


**Return**: int -1, if error; 0,if success 

This function saves the extracted application parameters saved in param_update_list to file param_update_file_name. 


### function ProcessAppGeneratedParameterUpdate

```cpp
int ProcessAppGeneratedParameterUpdate(
    char * receiver,
    char * param_update_info_file,
    int param_update_count,
    time_t param_update_time,
    bool agentRequested,
    char * processedFilename
)
```


**Parameters**: 

  * **receiver** = application name 
  * **param_update_info_file** = parameter update filename 
  * **param_update_count** = parameter count 
  * **param_update_time** = parameter update request time


**Return**: int 0, if success 

This function processes the application generated parameter updates request messages.It extracts each of the parameter info received. 


### function mallocProcessingStatusFileName

```cpp
char * mallocProcessingStatusFileName(
    event_id_t event_id
)
```


**Parameters**: 

  * **event_id** = event ID


**Return**: char* 

This function returns the processing_status.ini filename 


### function utility_PutenvFilename

```cpp
int utility_PutenvFilename(
    const char * file_name,
    const char * section,
    const char * param,
    const char * value
)
```


**Parameters**: 

  * **file_name** = filename to be updated. 
  * **section** = section name 
  * **param** = entry name to modify 
  * **value** = new value associated with entry.


**Return**: 0, if success; -1, otherwise 

This function creates or updates the dictionary section. 



## Attributes Documentation

### variable encoding_table

```cpp
static char[] encoding_table = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9', '+', '/' };
```


### variable decoding_table

```cpp
static char * decoding_table = NULL;
```


### variable mod_table

```cpp
static int[] mod_table = { 0, 2, 1 };
```


### variable lrecent_param_update_info

```cpp
static app_param_update_info_t * lrecent_param_update_info = NULL;
```


### variable tokenHbResult

```cpp
char tokenHbResult = 0;
```


### variable comm_msg_id_pair_table

```cpp
CommMsgIdPair_t[MAX_EVENTS] comm_msg_id_pair_table;
```


### variable g_eComType

```cpp
static uint16 g_eComType;
```


### variable g_eCurrCom

```cpp
static com_type_t g_eCurrCom = COM_NO_INTERFACE;
```


### variable prev_nonce

```cpp
static long prev_nonce = 0;
```


### variable _agent_boot_time

```cpp
time_t _agent_boot_time = (time_t) -1;
```


### variable szDialConfig

```cpp
const char[] szDialConfig = "<CONNECTION_PROFILE>"
    " <NAME>\"RAW_DIAL\"</NAME>"
    " <CONNECTION>"
    "   <TYPE>RAW_MODEM</TYPE>"
    "   <DEVICE_NAME>MDM_INT</DEVICE_NAME>"
    "   <PABX_CODE></PABX_CODE>"
    "   <ADDRESS>%s</ADDRESS>"
    "   <TIMEOUT>60000 </TIMEOUT >"
    "   <DIAL_MODE>async</DIAL_MODE>"
    "   <DIAL_TYPE>tone</DIAL_TYPE>"
    "   <MODULATION>v32bis</MODULATION>"
    "   <BLIND_DIALING>no</BLIND_DIALING>"
    "   <COMPRESSION>auto</COMPRESSION>"
    "   <ERROR_CORRECTION>auto</ERROR_CORRECTION>"
    "   <COUNTRY_CODE>1</COUNTRY_CODE>"
    "   <BAUDRATE>115200</BAUDRATE>"
    " </CONNECTION>"
    " <CONNECTION>"
    "   <TYPE>RAW_MODEM</TYPE>"
    "   <DEVICE_NAME>BT_DUN</DEVICE_NAME>"
    "   <PABX_CODE></PABX_CODE>"
    "   <ADDRESS>%s</ADDRESS>"
    "   <TIMEOUT>60000</TIMEOUT >"
    "   <DIAL_MODE>async</DIAL_MODE>"
    "   <DIAL_TYPE>tone</DIAL_TYPE>"
    "   <MODULATION>v32bis</MODULATION>"
    "   <BLIND_DIALING>no</BLIND_DIALING>"
    "   <COMPRESSION>auto</COMPRESSION>"
    "   <ERROR_CORRECTION>auto</ERROR_CORRECTION>"
    "   <COUNTRY_CODE>1</COUNTRY_CODE>"
    "   <BAUDRATE>115200</BAUDRATE>"
    " </CONNECTION>"
    "</CONNECTION_PROFILE>";
```



## Macros Documentation

### define VHQ_REG_DELAY_TIMEOUT_BUFFER

```cpp
#define VHQ_REG_DELAY_TIMEOUT_BUFFER 120
```


### define MAX_RENAME_RETRIES

```cpp
#define MAX_RENAME_RETRIES 30
```


### define ADE_NUM_KEYS

```cpp
#define ADE_NUM_KEYS 10
```


### define CHAR_SI

```cpp
#define CHAR_SI 0x0F
```


### define MSKEY_PRESENT

```cpp
#define MSKEY_PRESENT 'F'
```


### define TMS_MAX_PARAM_UPDATE_COUNT

```cpp
#define TMS_MAX_PARAM_UPDATE_COUNT 200
```


### define RM_FILE_CNT

```cpp
#define RM_FILE_CNT 100
```


### define CREATE_DIR_CNT

```cpp
#define CREATE_DIR_CNT 5
```


### define MAX_CID_REFERENCES

```cpp
#define MAX_CID_REFERENCES 20
```


### define PCI_REBOOT_GAP

```cpp
#define PCI_REBOOT_GAP 300
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#if !defined(WIN32)
#include <pthread.h>
#include <sys/statfs.h>
#include <svcmgr/svc_utility.h>
#include <sys/sysinfo.h>
#endif

#include <errno.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#include <memory.h>
#include <stdint.h>
#include <svc.h>
#include <svcsec.h>
#include <fcntl.h>
#include <pthread.h>
#include <memory.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/time.h>
#include <sys/stat.h>
#include <unistd.h>
#include <signal.h>
#include <arpa/inet.h>
#include <libgen.h>

#if !defined(WIN32)
#include <sys/time.h>
#else
#ifdef WIN32
#include <winsock.h>
#include <time.h>
#endif
#endif

#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"
#include "VHQConfig.h"
#include "VHQManager.h"
#include "ComIntf.h"

#ifdef _VOS2
#include <dlfcn.h>
#include "VHQ_vfisyspm_wrapper.h"
#endif

#define VHQ_REG_DELAY_TIMEOUT_BUFFER    120
#define MAX_RENAME_RETRIES  30

#define ADE_NUM_KEYS  10
#define CHAR_SI 0x0F
#define MSKEY_PRESENT   'F'

/*
 * Note: Currently 15 parameters can be updated in one shot, this is taken from
 * svc_tms.h, so modify on both places if required
 */
#define TMS_MAX_PARAM_UPDATE_COUNT  200

static char encoding_table[] = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9', '+', '/' };

static char *decoding_table = NULL;
static int mod_table[] = { 0, 2, 1 };

static app_param_update_info_t *lrecent_param_update_info = NULL;

#define       RM_FILE_CNT      100
#define       CREATE_DIR_CNT    5
volatile char tokenHbResult = 0;


char* base64_encode(const char *data, size_t input_length,
                    size_t *output_length)
{
  int i, j;
  char *encoded_data;

  *output_length = (size_t) ((4.0 * ceil((double) input_length / 3.0)) + 1);

  encoded_data = malloc(*output_length);
  if (encoded_data == NULL)
    return NULL;

  for (i = 0, j = 0; (uint32) i < input_length;)
  {

    uint32_t octet_a = (uint32) i < input_length ? data[i++] : 0;
    uint32_t octet_b = (uint32) i < input_length ? data[i++] : 0;
    uint32_t octet_c = (uint32) i < input_length ? data[i++] : 0;

    uint32_t triple = (octet_a << 0x10) + (octet_b << 0x08) + octet_c;

    encoded_data[j++] = encoding_table[(triple >> 3 * 6) & 0x3F];
    encoded_data[j++] = encoding_table[(triple >> 2 * 6) & 0x3F];
    encoded_data[j++] = encoding_table[(triple >> 1 * 6) & 0x3F];
    encoded_data[j++] = encoding_table[(triple >> 0 * 6) & 0x3F];
  }

  for (i = 0; i < mod_table[input_length % 3]; i++)
    encoded_data[*output_length - 2 - i] = '=';

  /* NULL Terminate the buffer */
  encoded_data[*output_length - 1] = 0;
  return encoded_data;
}

void build_decoding_table()
{
  int i;

  decoding_table = malloc(256);

  for (i = 0; i < 0x40; i++)
    decoding_table[(int) encoding_table[i]] = i;
}

char* base64_decode(const char *data, size_t input_length,
                    size_t *output_length)
{
  int i, j;
  char *decoded_data;

  if (decoding_table == NULL)
    build_decoding_table();

  if (input_length % 4 != 0)
    return NULL;

  *output_length = input_length / 4 * 3;
  if (data[input_length - 1] == '=')
    (*output_length)--;
  if (data[input_length - 2] == '=')
    (*output_length)--;

  decoded_data = malloc(*output_length);
  if (decoded_data == NULL)
    return NULL;

  for (i = 0, j = 0; (uint32) i < input_length;)
  {

    uint32_t sextet_a =
        data[i] == '=' ? 0 & i++ : decoding_table[(int) data[i++]];
    uint32_t sextet_b =
        data[i] == '=' ? 0 & i++ : decoding_table[(int) data[i++]];
    uint32_t sextet_c =
        data[i] == '=' ? 0 & i++ : decoding_table[(int) data[i++]];
    uint32_t sextet_d =
        data[i] == '=' ? 0 & i++ : decoding_table[(int) data[i++]];

    uint32_t triple = (sextet_a << 3 * 6) + (sextet_b << 2 * 6)
        + (sextet_c << 1 * 6) + (sextet_d << 0 * 6);

    if ((uint32) j < *output_length)
      decoded_data[j++] = (triple >> 2 * 8) & 0xFF;
    if ((uint32) j < *output_length)
      decoded_data[j++] = (triple >> 1 * 8) & 0xFF;
    if ((uint32) j < *output_length)
      decoded_data[j++] = (triple >> 0 * 8) & 0xFF;
  }

  return decoded_data;
}

void base64_cleanup()
{
  free(decoding_table);
}


char* trim_whitespace(char *s)
{
  int n;
  if (s && (n = strlen(s)))
  {
    int i = 0;
    while (i < n && isspace(s[i]))
      i++;
    while (--n && isspace(s[n]))
      ;
    n = n - i + 1;
    if (n > 0)
      memmove(s, s + i, n);
    s[n] = 0;
  }
  return s;
}

#if 0
char* trim_all_whitespace(char *source)
{
  char *res = source;
  char* i = source;
  char* j = source;
  while (*j != 0)
  {
    *i = *j++;
    if (*i != ' ')
      i++;
  }
  *i = '\0';
  return res;
}
#endif

#if 0
int32
FileGetSize(char *pszName)
{
  struct stat sStat;

  memset(&sStat, 0, sizeof(struct stat));
  if (stat(pszName, &sStat) == 0)
  {

    if (S_ISREG(sStat.st_mode))
    {
      return sStat.st_size;
    }
  }
  return -1;
}
#endif


bool FileExists(const char *pszName)
{
  struct stat sStat;

  memset(&sStat, 0, sizeof(struct stat));
  if (stat(pszName, &sStat) == 0)
  {

    if (S_ISREG(sStat.st_mode))
    {
      return TRUE;
    }
  }
  return FALSE;
}


bool removeFile(const char *fname)
{
  int remove_count;
  for (remove_count = 0; remove_count < RM_FILE_CNT; remove_count++)
  {
    if (!FileExists(fname))
      return TRUE;
    remove(fname);
  }
  return FALSE;
}


bool DirExists(char *pszName)
{
  struct stat sStat;

  memset(&sStat, 0, sizeof(struct stat));
  if (stat(pszName, &sStat) == 0)
  {
    if (S_ISDIR(sStat.st_mode))
    {
      return TRUE;
    }
  }
  return FALSE;
}


bool CreateDir(char *pszName, mode_t mode)
{
  int i = 0;
  bool ret_val = FALSE;

  for (i = 0; i < CREATE_DIR_CNT; i++)
  {
    if (mkdir(pszName, mode) == 0)
    {
      ret_val = TRUE;
      break;
    }
    else
    {
      log_err("Failed to create dir %s, errno=%s\n", pszName, strerror(errno));
    }
  }

  return ret_val;
}


bool removeDir(const char *dirname)
{
  int remove_count;
  char szCmd[256];
  snprintf(szCmd, sizeof(szCmd), "rm -rf %s/*", dirname);

  for (remove_count = 0; remove_count < RM_FILE_CNT; remove_count++)
  {
    svcSystem(szCmd);
    if (!DirExists(dirname))
      return TRUE;
  }

  return FALSE;
}


bool TestFileSignature(const char *pszFile)
{
#if defined(Mx2)
  UNUSED(pszFile);
  return TRUE;
#else
    int rslt=0;

    rslt=authFile(pszFile);

    if (rslt==1)    // If return = 1 then authentication passed!
    {
        return TRUE;
    }

    return FALSE;
#endif
}


void SafeMsgSndWrapper(int outQid, void *pMsg, int iMsgSize, int flags)
{
  int i;

  do
  {
    i = msgsnd(outQid, pMsg, iMsgSize, flags);
    if (i)
    {
      dbg_err("MainLoop: message send failed: %d, errno=%s\n", i,
              strerror(errno));
      //LogWrite("MainLoop: message send failed: %d, errno=%d", i, errno);
    }
    if (i == -1 && errno == EINTR)
    {
      // if we're gonna loop, let's sleep first to let any other CPU hogs finish
      svcWait(100);
    }

  }
  while (i == -1 && errno == EINTR);
}


int SafeMsgRcvWrapper(int inQid, void *pMsg, int iMsgSize, long msgtyp,
                      int flags, bool returnOnEINTR)
{
  int i;

  do
  {
    i = msgrcv(inQid, pMsg, iMsgSize, msgtyp, flags);
    if (i == -1)
    {
      //LogWrite("MainLoop: message send failed: %d, errno=%d", i, errno);
    }
    if (i == -1 && errno == EINTR)
    {
      if (returnOnEINTR)
      {
        dbg_msg("%s: msgrcv() was interrupted - returning\n", __FUNCTION__);
        return -1;
      }
      else
      {
        // if we're gonna loop, let's sleep first to let any other CPU hogs finish
        log_dbg("%s: message receive interrupted: %d, errno=%s - retrying\n",
                __FUNCTION__, i, strerror(errno));
        svcWait(100);
      }
    }

  }
  while (i == -1 && errno == EINTR);

  return i;
}

bool ConvertHexStringToBinary(char *pszHexString, char *bin_data,
                              uint16 bin_data_len)
{
  int i;
  int hex_str_len = strlen(pszHexString);

  memset(bin_data, 0, bin_data_len);

  if ((hex_str_len % 2) != 0)
  {
    log_err("%s WARNING: HEX string length %d is not even\n", __FUNCTION__,
            hex_str_len);
    hex_str_len--;
  }

  if ((hex_str_len / 2) > bin_data_len)
  {
    log_err("%s WARNING: Binary data length %d is larger than buffer size %d\n",
            __FUNCTION__, (hex_str_len / 2), bin_data_len);
    hex_str_len = bin_data_len * 2;
  }

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Converting %s to bin_data - 0x", __FUNCTION__, pszHexString);
  for (i = 0; i < hex_str_len; i += 2)
  {
    unsigned int temp_hex;
    //printf("\nConverting %c%c to binary\n", pszHexString[i], pszHexString[i+1]);
    temp_hex = 0;
    sscanf(&pszHexString[i], "%02x", &temp_hex);
    //printf("\ntemp_hex = %08x converted to ", temp_hex);
    bin_data[i / 2] = (char) temp_hex;
    //printf("%02x", bin_data[i/2]);
  }
  //printf("\n");

  return TRUE;
}

bool ConvertBinaryToHexString(char *bin_data, uint16 bin_data_len,
                              char *pszHexString, uint16 hex_str_buf_size)
{
  int i;

  memset(pszHexString, 0, hex_str_buf_size);
  if (hex_str_buf_size < ((2 * bin_data_len) + 1))
    return FALSE;

  for (i = 0; i < bin_data_len; i++)
  {
    char temp_hex[3];

    memset(temp_hex, 0, sizeof(temp_hex));
    sprintf(temp_hex, "%02x", bin_data[i]);
    strcat(pszHexString, temp_hex);
  }

  return TRUE;
}


bool ConvertVHQResultToStr(vhq_result_t result, char *ResultStr,
                           int ResultStrLen)
{
  uint32 postpone_retry_delay;

  memset(ResultStr, 0, ResultStrLen);

  if (ResultStrLen < 256)
  {
    if (strlen("Str Too Short") < (uint32) ResultStrLen)
      snprintf(ResultStr, ResultStrLen, "Str Too Short");
    return FALSE;
  }

  if ((result >= VHQ_DL_FILE_CURL_ERROR_BASE)
      && (result <= VHQ_DL_FILE_CURL_ERROR_MAX))
  {
    snprintf(ResultStr, ResultStrLen, "libCURL error - %d",
             result - VHQ_DL_FILE_CURL_ERROR_BASE);
  }
  else if ((result >= VHQ_CURL_ERROR_BASE) && (result <= VHQ_CURL_ERROR_MAX))
  {
    snprintf(ResultStr, ResultStrLen, "libCURL error - %d",
             result - VHQ_CURL_ERROR_BASE);
  }
  else if ((result >= VHQ_CURL_HTTP_ERROR_BASE)
      && (result <= VHQ_CURL_HTTP_ERROR_MAX))
  {
    snprintf(ResultStr, ResultStrLen, "HTTP error - %d", result);
  }
  else if ((result >= VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_BASE)
      && (result <= VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_MAX))
  {
    snprintf(
        ResultStr,
        ResultStrLen,
        "ADKCOM error - %s",
        CommGetErrString(
            result - VHQ_SERVER_POST_PAYLOAD_ADK_COM_NETWORK_BASE));
  }
  else if (result == VHQ_SERVER_POST_PAYLOAD_CURL_CERT_EXPIRED)
  {
    snprintf(ResultStr, ResultStrLen, "Server cert expired");
  }
  else if ((result >= VHQ_SERVER_POST_PAYLOAD_CURL_BASE)
      && (result <= VHQ_SERVER_POST_PAYLOAD_CURL_MAX))
  {
    snprintf(ResultStr, ResultStrLen, "Server/Curl error");
  }
  else
  {
    switch (result)
    {
      case VHQ_SUCCESS:
        snprintf(ResultStr, ResultStrLen, "SUCCESS");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_STARTED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED:
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED:
        /* Don't need to put anything in for the success cases */

      case VHQ_DL_FILE_CURL_ERROR_BASE:
      case VHQ_DL_FILE_CURL_ERROR_MAX:
      case VHQ_CURL_ERROR_BASE:
      case VHQ_CURL_ERROR_MAX:
      case VHQ_CURL_HTTP_ERROR_BASE:
      case VHQ_CURL_HTTP_ERROR_MAX:
        /* These are handled above but add them to avoid compiler warnings */
        break;

        /* General errors */
      case VHQ_HB_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Heartbeat FAILURE");
        break;
      case VHQ_KEYGEN_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Key Generation FAILURE");
        break;
      case VHQ_ERROR_KEYS_NOT_EXCHANGED:
        snprintf(ResultStr, ResultStrLen, "Keys Not Exchanged FAILURE");
        break;
      case VHQ_ERROR_EVENT_GENERATION_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Event Generation FAILURE");
        break;
      case VHQ_ERROR_COMM_CONNECT_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Comm Connect FAILURE");
        break;
      case VHQ_SET_CONFIG_MAX_REQUESTS_EXCEEDED_ERROR:
        snprintf(ResultStr, ResultStrLen, "Too Many Set Config Requests");
        break;
      case VHQ_THREADING_ERROR:
        snprintf(ResultStr, ResultStrLen, "Threading ERROR");
        break;
      case VHQ_FILE_IO_ERROR:
        snprintf(ResultStr, ResultStrLen, "File I/O ERROR");
        break;

        /* Server contact errors */
      case VHQ_SERVER_POST_PAYLOAD_FAILURE:
        snprintf(ResultStr, ResultStrLen, "PostPayload FAILURE");
        break;
      case VHQ_SERVER_POST_PAYLOAD_NETWORK_ERROR:
        snprintf(ResultStr, ResultStrLen, "Network FAILURE");
        break;

        /* Server message error codes */
      case VHQ_SERVER_MESSAGE_XML_VALIDATION_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message-XML Validation Failure");
        break;
      case VHQ_SERVER_MESSAGE_NO_DATA:
        snprintf(ResultStr, ResultStrLen, "Server Message-NO Data");
        break;
      case VHQ_SERVER_MESSAGE_XML_STRUCTURE_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message-XML Structure Failure");
        break;
      case VHQ_SERVER_MESSAGE_OP_TYPE_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message-Operation Type Failure");
        break;

      case VHQ_SERVER_MESSAGE_COMM_ID_MISMATCH_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message-Communication ID Mismatch");
        break;
      case VHQ_SERVER_MESSAGE_MESSAGE_ID_MISMATCH_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Server Message-Message ID Mismatch");
        break;
      case VHQ_SERVER_MESSAGE_GENERAL_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Server Message-General Failure");
        break;
      case VHQ_SERVER_MESSAGE_INVALID_NONCE:
        snprintf(ResultStr, ResultStrLen, "Server Message-Invalid Nonce");
        break;

      case VHQ_SERVER_RESPONSE_XML_CONTENT_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Server Response-Content Failure");
        break;
      case VHQ_SERVER_RESPONSE_SERVER_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Server Response is Failed");
        break;
      case VHQ_SERVER_RESPONSE_KEY_EXCAHNGE_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Key Exchange Failure");
        break;
      case VHQ_SERVER_RESPONSE_GENERAL_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Server Response-General Failure");
        break;

      case VHQ_SERVER_RESPONSE_UNKNOWN_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Unknown Server Failure");
        break;
      case VHQ_SERVER_RESPONSE_DEVICE_NOT_FOUND_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Device Not Found Failure");
        break;
      case VHQ_SERVER_RESPONSE_KEYS_ALREADY_EXCAHNGED_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Keys Already Exchanged Failure");
        break;
      case VHQ_SERVER_RESPONSE_CUST_ID_NOT_FOUND:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Customer ID Not Found");
        break;
      case VHQ_SERVER_RESPONSE_MODEL_NOT_FOUND:
        snprintf(ResultStr, ResultStrLen, "Server Response-Model Not Found");
        break;
      case VHQ_SERVER_RESPONSE_DEV_CERT_CREATION_ERR:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Device Cert Creation Failure");
        break;
      case VHQ_SERVER_RESPONSE_INVALID_DEV_CERT:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Invalid Device Cert");
        break;
      case VHQ_SERVER_RESPONSE_KEY_EX_DECRYPTION_ERR:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Key Exchange Decryption Failure");
        break;
      case VHQ_SERVER_RESPONSE_AGENT_KEY_SIG_ERR:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Agent Key Signature Failure");
        break;
      case VHQ_SERVER_RESPONSE_AGENT_SIG_ERR:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Agent Message Signature Failure");
        break;
      case VHQ_SERVER_RESPONSE_KEYS_NOT_FOUND:
        snprintf(ResultStr, ResultStrLen, "Server Response-Keys Not Found");
        break;
      case VHQ_SERVER_RESPONSE_INV_MSG_FORMAT:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Invalid Message Format");
        break;
      case VHQ_SERVER_RESPONSE_INVALID_MSG_SIG:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Invalid Message Signature");
        break;
      case VHQ_SERVER_RESPONSE_DEVICE_DEACTIVATED:
        snprintf(ResultStr, ResultStrLen, "Server Response-Device Deactivated");
        break;
      case VHQ_SERVER_RESPONSE_DEVICE_NOT_REGISTERED:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Device Not Registered");
        break;
      case VHQ_SERVER_RESPONSE_SIG_KEY_ID_MISMATCH:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Signature Key ID Mismatch");
        break;
      case VHQ_SERVER_RESPONSE_LICENSE_NOT_AVAILABLE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-License Not Available");
        break;
      case VHQ_SERVER_RESPONSE_INVALID_NONCE:
        snprintf(ResultStr, ResultStrLen, "Server Response-Invalid NONCE");
        break;
      case VHQ_SERVER_RESPONSE_UNIDENTIFIED_DEVICE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Unidentified Device");
        break;
      case VHQ_SERVER_RESPONSE_DEVICE_DELETED:
        snprintf(ResultStr, ResultStrLen, "Server Response-Device Deleted");
        break;
      case VHQ_SERVER_RESPONSE_DEVICE_BLACKLISTED:
        snprintf(ResultStr, ResultStrLen, "Server Response-Device Blacklisted");
        break;
      case VHQ_SERVER_RESPONSE_MAX_REG_RETRY_LIMIT_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Max Register Retry Error");
        break;
      case VHQ_SERVER_RESPONSE_E_SWAP_REJECTED:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Error Swap Rejected");
        break;
      case VHQ_SERVER_RESPONSE_E_INVALID_DID:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Error Invalid DID Error");
        break;
      case VHQ_SERVER_RESPONSE_E_SW_NOT_FOUND:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Error Software Not Found");
        break;
      case VHQ_SERVER_RESPONSE_E_LOC_ID_NOT_AVAILABLE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Response-Error Location ID Not Available");
        break;

        /* Signature Errors */
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_GENERAL_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-General Failure");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_TYPE_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-Type Failure");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_ALGO_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-Algorithm Failure");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-Key ID Failure");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_MISMATCH:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-Key ID Mismatch");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_LENGTH_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-Length Failure");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_MISMATCH:
        snprintf(ResultStr, ResultStrLen, "Server Message Signature-Mismatch");
        break;
      case VHQ_SERVER_MESSAGE_XML_SIGNATURE_KEY_ID_NULL:
        snprintf(ResultStr, ResultStrLen,
                 "Server Message Signature-NULL Key ID");
        break;

        /* Server management plan message error codes */
      case VHQ_SERVER_MGMT_PLAN_XML_CONTENT_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Management Plan-Content Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_XML_RESPONSE_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Management Plan-Response Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_IDENTIFIER_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation Identifier Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_ID_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation ID Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_HANDLER_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation Handler Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_ON_ERROR_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation On Error Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SCHEDULE_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation Schedule Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GENERAL_FAILURE:
        snprintf(ResultStr, ResultStrLen,
                 "Management Plan-Operation General Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_GENERAL_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Management Plan-General Failure");
        break;

        /* Download File Errors/Status */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-General Error");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_SIGNATURE_MISMATCH:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-File Signature Mismatch");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PROCESSING_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-Processing Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TGZ_CONTENT_TOO_LARGE:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-TGZ Content Too Large");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TGZ_EXPAND_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-TGZ Expansion Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_LOAD_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-OS Load Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAX_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Too Many Scheduled File Downloads");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_TOO_LARGE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-File Too Large");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_TYPE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-Content Type Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_NO_CONTENT_CONSUMER:
        snprintf(ResultStr, ResultStrLen, "Download File-No Content Consumer");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_FILENAME_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Content Filename Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_TIMEOUT:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Content Consumer Timeout");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_CONSUMER_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Content Consumer Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_MEMORY_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-Memory Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_USER_ERROR:
        snprintf(ResultStr, ResultStrLen, "Download File-User Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACE_FAILED:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Failure replacing expired content");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_RECEIVER_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Parameter Receiver Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_PARAM_NAME_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Param File Name Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_UNSUPPORTED_TYPE_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Unsupported Type Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Download File-Maintenance DL Timing Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_APP_APPROVAL_ERROR:
        snprintf(ResultStr, ResultStrLen, "Install File-App Approval Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_APP_PROCESSING_ERROR:
        snprintf(ResultStr, ResultStrLen, "Install File-App Processing Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_OS_AUTHENTICATION_ERROR:
        snprintf(ResultStr, ResultStrLen, "Install Authentication Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_RETRIES_EXPIRED:
        snprintf(ResultStr, ResultStrLen, "Download retries limit exceeded");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DECOMPRESSION_ERROR:
        snprintf(ResultStr, ResultStrLen, "Install File-Decompression Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_DL_LOCATION_FAIL:
        snprintf(ResultStr, ResultStrLen, "Download file-DL location failed");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_NO_PACKAGE:
        snprintf(ResultStr, ResultStrLen, "CP Installer-No Package To Install");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_WARNING:
        snprintf(ResultStr, ResultStrLen,
                 "CP Installer-Package Installed with Warnings");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_ERROR:
        snprintf(ResultStr, ResultStrLen, "CP Installer-ERROR");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_START_ERROR:
        snprintf(ResultStr, ResultStrLen, "CP Installer-Start Failure");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_RESULT_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen, "CP Installer-Result File Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_GENERAL_ERROR:
        snprintf(ResultStr, ResultStrLen, "CP Installer-General Error");
        break;

        /* Get Data Errors */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_MAX_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Get Data-Too Many Get Data Operations");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_APPLICATIONS_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-Applications Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_DEV_PROFILE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-Device Profile Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_FILE_LIST_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-File List Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_KEYS_NOT_SUPPORTED:
        snprintf(ResultStr, ResultStrLen, "Get Data-Keys Not Supported");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_KEYS_TAMPERED:
        snprintf(ResultStr, ResultStrLen, "Get Data-Device is Tampered");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_MEMORY_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-Memory Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_VSR_CERT_TREE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Data-VSR Cert Tree Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_APP_PARAM_ERROR:
        snprintf(ResultStr, ResultStrLen, "Error Getting Parameters");
        break;

        /* Set Data Errors */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_ERROR:
        snprintf(ResultStr, ResultStrLen, "Set Data-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_MAX_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Set Data-Too Many Set Data Operations");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_NAME_SECTION_ERROR:
        snprintf(ResultStr, ResultStrLen, "Set Data-Section Name Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_VALUE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Set Data-Value Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_DATA_SET_ERROR:
        snprintf(ResultStr, ResultStrLen, "Set Data-Error Setting Data");
        break;

        /* Set Server Cert Errors */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_SET_SERV_CERT_ERROR:
        snprintf(ResultStr, ResultStrLen, "Set Server Cert-General Error");
        break;

        /* Terminal Action errors */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_GENERAL_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_REBOOT_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-Reboot Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESET_POS_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-Reset POS Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-Restart APP Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_NO_APP_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Terminal Action-Restart APP no *GO variable Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-Set Clock Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_TS_RECAL_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Terminal Action-Touchscreen Recalibration Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_UNKNOWN_ERROR:
        snprintf(ResultStr, ResultStrLen, "Terminal Action-Unknown Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_SUPERSEDED:
        snprintf(ResultStr, ResultStrLen,
                 "Terminal Action-Set Clock superseded by the same event");
        break;

        /* Upload File errors */
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_GENERAL_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DIR_LIST_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Upload File-Directory Listing Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_SCREEN_CAP_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Screen Capture Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_LOG_FILE_LIST_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Log File List Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_OS_CONFIG_FILES_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-OS Config Files Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_OS_LOG_FILES_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-OS Log Files Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_USR_LOG_FILES_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-User Log Files Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_UPLOAD_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Upload Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_WEB_METHOD_UPLOAD_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Upload File-Web Method Upload Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_DOES_NOT_EXIST:
        snprintf(ResultStr, ResultStrLen, "Upload File-File Does Not Exist");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_PERMISSION_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Permission Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_MAX_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Upload File-Too Many Upload File Operations");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_PARAM_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Param File Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_MEMORY_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Memory Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_COMPRESSION_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-Compression Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_VRK_PUBKEY_ONLY_EXIST_ERROR:
        snprintf(ResultStr, ResultStrLen, "Upload File-ONLY VRKPUBKEY exist");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_UL_FILE_VRK_PUBKEY_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Upload File-VRKPUBKEY extract error ");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DIAG_DATA_ERROR:
        snprintf(ResultStr, ResultStrLen, "Get Diag Data-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DIAG_DATA_MAX_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Get Diag Data-Too Many GetDiagData Operations");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_APP_ACTION_ERROR:
        snprintf(ResultStr, ResultStrLen, "App Action-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_APP_ACTION_UNSUPPORTED_ERROR:
        snprintf(ResultStr, ResultStrLen, "App Action-NOT Supported");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_APP_ACTION_MAX_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "App Action-Too Many AppAction Operations");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_DEL_FILE_ERROR:
        snprintf(ResultStr, ResultStrLen, "Delete File-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DEL_FILE_UNSUPPORTED_ERROR:
        snprintf(ResultStr, ResultStrLen, "Delete File-NOT Supported");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_DEL_FILE_MAX_ERROR:
        snprintf(ResultStr, ResultStrLen,
                 "Delete File-Too Many AppAction Operations");
        break;

      case VHQ_SERVER_MGMT_PLAN_CANCEL_OP_ERROR:
        snprintf(ResultStr, ResultStrLen, "Cancel Op-General Error");
        break;
      case VHQ_SERVER_MGMT_PLAN_CANCEL_OP_PARTIAL:
        snprintf(ResultStr, ResultStrLen, "Cancel Op-Partial Cancel");
        break;
      case VHQ_SERVER_MGMT_PLAN_CANCEL_OP_OP_SET_ID_NOT_FOUND:
        snprintf(ResultStr, ResultStrLen,
                 "Cancel Op-Operation Set ID Not Found");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_CALLBACK_ERROR:
        snprintf(ResultStr, ResultStrLen, "Callback-General Error");
        break;

      case VHQ_API_APP_APPROVAL_ERROR:
        snprintf(ResultStr, ResultStrLen, "App API-App Approval Error");
        break;

      case VHQ_SERVER_MGMT_PLAN_OPERATION_ABORTED_BY_DEPENDENCY_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Aborted-Dependency FAILURE");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_POSTPONED_TOO_LONG_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Failed-Postponed too long");
        break;
      case VHQ_SERVER_MGMT_PLAN_OPERATION_AGENT_WATCHDOG_FAILURE:
        snprintf(ResultStr, ResultStrLen, "Cancelled-Agent Watchdog");
        break;

      case VHQ_API_POSTPONED:
        VHQGetParameterUint32(PARAM_EVENT_POSTPONED_RETRY_DELAY,
                              &postpone_retry_delay, DEFAULT_BASE);
        snprintf(ResultStr, ResultStrLen,
                 "App API-App Postponed Request %d seconds",
                 postpone_retry_delay);
        break;

      default:
        snprintf(ResultStr, ResultStrLen, "Unhandled Error-%d", result);
        break;

    }
  }

  return TRUE;
}

#include "EventScheduler.h"
#define MAX_CID_REFERENCES  20
typedef struct _CommMsgIdPair_t
{
  bool in_use;
  int comm_id;
  uint32 msg_id;
  int references[MAX_CID_REFERENCES];
} CommMsgIdPair_t;

CommMsgIdPair_t comm_msg_id_pair_table[MAX_EVENTS];

uint32 GetCurrentMessageID(int comm_id, uint32 rx_msg_id, int operation_id,
                           bool comm_id_closed)
{
  int i;
  int ref_index;

  dbg_trace("%s: ENTER\n", __FUNCTION__);

  if (comm_id_closed)
  {
    int ref_count;

    if (comm_id <= 0)
    {
      return 0;
    }

    /* Make sure we have the comm_id stored */
    for (i = 0; i < MAX_EVENTS; i++)
    {
      if ((comm_msg_id_pair_table[i].in_use)
          && (comm_msg_id_pair_table[i].comm_id == comm_id))
      {
        dbg_notice("%s: Found comm_id %d at slot %d\n", __FUNCTION__, comm_id,
                   i);
        break;
      }
    }

    /* If we didn't find the comm_id lets find an open slot for it */
    if (i >= MAX_EVENTS)
    {
      dbg_err("%s ERROR: Could not find comm_id %d to close\n", __FUNCTION__,
              comm_id);
      return 0;
    }

    /* If there is an operation ID associated with this, we need to close the reference */
    if (operation_id)
    {
      for (ref_index = 0; ref_index < MAX_CID_REFERENCES; ref_index++)
      {
        if (comm_msg_id_pair_table[i].references[ref_index] == operation_id)
        {
          dbg_notice(
              "%s: Found operation_id %d in reference table at index %d - clearing reference\n",
              __FUNCTION__, operation_id, ref_index);
          comm_msg_id_pair_table[i].references[ref_index] = 0;
          break;
        }
      }

      if (ref_index >= MAX_CID_REFERENCES)
      {
        dbg_err("%s ERROR: Could not find an open reference slot\n",
                __FUNCTION__);
      }
    }

    /* Lets see if there are any more references to this comm_id */
    ref_count = 0;
    for (ref_index = 0; ref_index < MAX_CID_REFERENCES; ref_index++)
    {
      if (comm_msg_id_pair_table[i].references[ref_index] != 0)
      {
        ref_count++;
      }
    }

    /* If there are no more references, we can close this comm id */
    comm_msg_id_pair_table[i].msg_id = rx_msg_id;
    if (ref_count == 0)
    {
      /* If this was an operation just clear in_use since a sibling operation may use this
       comm id later */
      if (operation_id)
      {
        dbg_msg("%s: comm_id %d reference count is 0 - clearing in_use\n",
                __FUNCTION__, comm_id);
        comm_msg_id_pair_table[i].in_use = FALSE;
      }
      else
      {
        dbg_msg(
            "%s: comm_id %d reference count is 0 (no op_id) - clearing entry\n",
            __FUNCTION__, comm_id);
        memset(&comm_msg_id_pair_table[i], 0, sizeof(CommMsgIdPair_t));
      }
    }
    else
    {
      dbg_msg("%s: Couldn't close comm_id %d because reference count is %d\n",
              __FUNCTION__, comm_id, ref_count);
    }

  }
  else
  {

    /* We don't need to keep track of the first comm_id (which will be 0 or negative) */
    if (comm_id <= 0)
    {
      dbg_notice("%s: returning msd_id 1 for comm_id %d\n", __FUNCTION__,
                 comm_id);
      return 1;
    }

    /* Lets see if we already have the comm_id stored */
    for (i = 0; i < MAX_EVENTS; i++)
    {
      if (comm_msg_id_pair_table[i].comm_id == comm_id)
      {
        comm_msg_id_pair_table[i].in_use = TRUE;
        dbg_notice("%s: Found comm_id %d at slot %d\n", __FUNCTION__, comm_id,
                   i);
        break;
      }
    }

    /* If we didn't find the comm_id lets find an open slot for it */
    if (i >= MAX_EVENTS)
    {
      i = 0;

      dbg_notice("%s: comm_id %d not found - searching for an open slot\n",
                 __FUNCTION__, comm_id);
      while (comm_msg_id_pair_table[i].comm_id)
        i++;

      if (i >= MAX_EVENTS)
      {
        i = 0;
        while (comm_msg_id_pair_table[i].in_use)
          i++;

        if (i >= MAX_EVENTS)
        {
          dbg_err("%s ERROR: Could not find an open slot\n", __FUNCTION__);
          return 0;
        }
      }

      dbg_notice("%s: Inserting comm_id %d at slot %d\n", __FUNCTION__, comm_id,
                 i);
      comm_msg_id_pair_table[i].comm_id = comm_id;
      comm_msg_id_pair_table[i].in_use = TRUE;
    }

    /* If we have received a greater message ID, we need to update our stored one */
    if (rx_msg_id && (rx_msg_id > comm_msg_id_pair_table[i].msg_id))
    {
      dbg_notice("%s: Updating message ID to rx_msg_id %d\n", __FUNCTION__,
                 rx_msg_id);
      comm_msg_id_pair_table[i].msg_id = rx_msg_id;
    }

    /* Increment the message ID */
    comm_msg_id_pair_table[i].msg_id++;
    dbg_notice("%s: Incremented comm_id %d to msg id %d\n", __FUNCTION__,
               comm_msg_id_pair_table[i].comm_id,
               comm_msg_id_pair_table[i].msg_id);

    /* Different operation id's can use the same comm_id so we will use them
     as the reference count */
    if (operation_id)
    {
      for (ref_index = 0; ref_index < MAX_CID_REFERENCES; ref_index++)
      {
        if (comm_msg_id_pair_table[i].references[ref_index] == operation_id)
        {
          dbg_notice(
              "%s: operation_id %d already in reference table at index %d\n",
              __FUNCTION__, operation_id, ref_index);
          break;
        }
      }

      if (ref_index >= MAX_CID_REFERENCES)
      {
        ref_index = 0;
        while ((ref_index < MAX_CID_REFERENCES)
            && (comm_msg_id_pair_table[i].references[ref_index] != 0))
          ref_index++;

        if (ref_index >= MAX_CID_REFERENCES)
        {
          dbg_err("%s ERROR: Could not find an open reference slot\n",
                  __FUNCTION__);
          return 0;
        }

        comm_msg_id_pair_table[i].references[ref_index] = operation_id;
        dbg_notice("%s: Inserted operation_id %d at reference slot %d\n",
                   __FUNCTION__, operation_id, ref_index);
      }
    }

    dbg_msg("%s: Returning msg_id %d\n", __FUNCTION__,
            comm_msg_id_pair_table[i].msg_id);
    return (comm_msg_id_pair_table[i].msg_id);

  }

  /* We should not get here but return 0 if we do */
  return 0;
}

event_result_t ConvertVHQResultToEventResult(vhq_result_t vhq_result)
{
  event_result_t event_result = EVENT_FAILURE;

  if ((vhq_result == VHQ_SUCCESS)
      || (vhq_result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_COMPLETED)
      || (vhq_result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED)
      || (vhq_result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_REBOOT_REQUIRED)
      || (vhq_result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_INSTALLED_RESTART_APPS_REQUIRED)
      || (vhq_result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CONTENT_REPLACED)
      || (vhq_result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_CP_INSTALLER_WARNING))
  {
    /* If we get here, VHQ_DOWNLOADER was successful */
    event_result = EVENT_SUCCESS;
    log_notice("%s SUCCESS: returning %d\n", __FUNCTION__, event_result);
  }
  else if ((vhq_result == VHQ_API_POSTPONED)
      || (vhq_result == VHQ_SERVER_MGMT_PLAN_OPERATION_INSTALL_POSTPONE))
  {
    event_result = EVENT_POSTPONED;
    log_notice("%s POSTPONED: returning %d\n", __FUNCTION__, event_result);
  }
  else if ((vhq_result == VHQ_SERVER_POST_PAYLOAD_CURL_CERT_EXPIRED)
      || (vhq_result == VHQ_PUB_KEY_CERT_EXPIRY))
  {
    event_result = EVENT_CRITICAL_FAILURE;
    log_notice("%s Certificate expired, marked as critical failures %d\n",
               __FUNCTION__, event_result);
  }
  else if ((vhq_result == VHQ_SERVER_RESPONSE_SIG_KEY_ID_MISMATCH)
      || (vhq_result == VHQ_SERVER_RESPONSE_INVALID_MSG_SIG))
  {
    event_result = EVENT_CRITICAL_FAILURE;
    log_notice("%s Critical failure: returning %d\n", __FUNCTION__,
               event_result);
  }
  else if ((vhq_result == VHQ_SERVER_RESPONSE_LICENSE_NOT_AVAILABLE)
      || (vhq_result == VHQ_SERVER_RESPONSE_E_LOC_ID_NOT_AVAILABLE))
  {
    event_result = EVENT_CRITICAL_FAILURE;
    log_notice("%s Critical failure: returning %d\n", __FUNCTION__,
               event_result);
  }
  else if ((vhq_result == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_POSTPONE)
      || (vhq_result
          == VHQ_SERVER_MGMT_PLAN_OPERATION_DL_FILE_MAINTENANCE_WINDOW_RESCHEDULE))
  {
    event_result = EVENT_DL_POSTPONED;
    log_notice("%s: returning %d\n", __FUNCTION__, event_result);
  }
  else
  {
    event_result = EVENT_FAILURE;
    log_notice("%s: Event Failure\n", __FUNCTION__);
  }

  return event_result;
}


uint32 FileSize(char *pszName)
{
  struct stat sStat;

  if (stat(pszName, &sStat) == 0)
  {
    if (S_ISREG(sStat.st_mode))
    {
      return sStat.st_size;
    }
  }
  return 0;
}

static
int CopyFileWorker(const char *pszSrc, const char *pszDest, char *pszDestMode)
{
  /* Try to use SVC call, if we fail with it - copy file manually */
  int copy_res = file_copy(pszSrc, pszDest);
  if (copy_res != 0)
  {
    FILE *fpSrc, *fpDst;
    unsigned char buf[8 * 1024];
    int n_read;

    /* If we are copying the file to the same destination, just return */
    if (strcmp(pszSrc, pszDest) == 0)
    {
      /* User is trying to copy the file to itself so we don't need to do anything */
      return 0;
    }

    dbg_msg("Copyfile: copying %s to %s\r\n", pszSrc, pszDest);
    fpSrc = fopen(pszSrc, "r");
    fpDst = fopen(pszDest, pszDestMode);

    // return an error if we can't open source and dest files
    if ((fpSrc == NULL) || (fpDst == NULL))
    {
      if (fpSrc == NULL)
        dbg_err("%s: could not open souce %s\n", __FUNCTION__, pszSrc);
      else
        fclose(fpSrc);

      if (fpDst == NULL)
        dbg_err("%s: could not open dest %s\n", __FUNCTION__, pszDest);
      else
        fclose(fpDst);

      return -1;
    }

    dbg_msg("Copyfile: files opened, src: %lx dst:%lx\r\n", fpSrc, fpDst);
    if (fpSrc != NULL && fpDst != NULL)
    {
      while ((n_read = fread(buf, sizeof(char), sizeof(buf), fpSrc)) > 0)
      {
        if ((uint32) n_read < sizeof(buf) && ferror(fpSrc))
          break;
        if ((fwrite(buf, n_read, 1, fpDst) < 1) && ferror(fpDst))
        {
          log_err("%s: writing to %s failed.\n", __FUNCTION__, pszDest);
          fclose(fpDst);
          fclose(fpSrc);
#if !defined(WIN32)
          {
            char *pszSrcDirName = dirname((char*) pszSrc);
            char *pszDstDirName = dirname((char*) pszDest);
            int RAM_tot, RAM_free;

            if (pszSrcDirName && pszDstDirName)
            {
              struct statfs pathinfo;
              int statfs_ret_val;

              statfs_ret_val = statfs(pszSrcDirName, &pathinfo);
              if (statfs_ret_val == 0)
              {
                unsigned long long freeMem, totalMem;
                freeMem = pathinfo.f_bsize * pathinfo.f_bfree;
                totalMem = pathinfo.f_bsize * pathinfo.f_blocks;
                log_err("%s: source '%s' Free MEM = %llu, Total MEM = %llu\n",
                        __FUNCTION__, pszSrcDirName, freeMem, totalMem);
              }

              statfs_ret_val = statfs(pszDstDirName, &pathinfo);
              if (statfs_ret_val == 0)
              {
                unsigned long long freeMem, totalMem;
                freeMem = pathinfo.f_bsize * pathinfo.f_bfree;
                totalMem = pathinfo.f_bsize * pathinfo.f_blocks;
                log_err(
                    "%s: destination '%s' Free MEM = %llu, Total MEM = %llu\n",
                    __FUNCTION__, pszDstDirName, freeMem, totalMem);
              }
            }

            if (GetRAMData(&RAM_tot, &RAM_free))
              dbg_msg("%s: RAM_tot = %d, RAM_free = %d\n", __FUNCTION__,
                      RAM_tot, RAM_free);
          }
          unlink(pszDest);
#endif
          return -1;
        }
      }
    }

    dbg_msg("Copyfile: closing files\r\n");
    if (fpSrc)
      fclose(fpSrc);
    if (fpDst)
      fclose(fpDst);
    dbg_msg("Copyfile: done\r\n");
    return 0;
  }
  return copy_res;
}

int CopyFile(const char *pszSrc, const char *pszDest)
{
  return CopyFileWorker(pszSrc, pszDest, "w+");
}

int MoveFile(const char *pszSrc, const char *pszDest)
{
  struct stat source;
  int result = -1;

  if (!pszSrc || !pszDest)
    return result;

  /* If we are copying the file to the same destination, just return */
  if (strcmp(pszSrc, pszDest) == 0)
    return 0;

  dbg_msg("%s: move from %s to %s\n", __FUNCTION__, pszSrc, pszDest);

  memset(&source, 0, sizeof(source));
  if (stat(pszSrc, &source) != 0)
  {
    dbg_err("%s: source %s is not available, %s (%d)\n", __FUNCTION__, pszSrc,
            strerror(errno), errno);
    return result;
  }

  if (FileExists(pszDest))
  {
    dbg_msg("%s: destination already present, remove\n", __FUNCTION__, pszDest);
    remove(pszDest);
  }

  result = rename(pszSrc, pszDest);

  if (result == 0)
  {
    struct stat destination;
    int i;

    /* rename success - wait for file move to complete by checking size */
    for (i = 0; i < MAX_RENAME_RETRIES; i++)
    {
      int res;
      memset(&destination, 0, sizeof(destination));
      res = stat(pszDest, &destination);
      if (res == 0 && destination.st_size == source.st_size)
        break;
      sleep(1);
    }

    /* Try to copy below */
    if (i == MAX_RENAME_RETRIES)
      result = -1;
  }

  /* If we can't move from one location to other, more likely source and destinations located on different partitions */
  if (result != 0)
  {
    result = CopyFile(pszSrc, pszDest);
    if (result == 0)
      result = remove(pszSrc);
  }

  return result;
}

int ConcatenateFile(const char *pszSrc, const char *pszDest)
{
  return CopyFileWorker(pszSrc, pszDest, "a+");

}


static void BackupHBResult()
{
#ifdef _VOS2
  // do the renames
  remove(VHQ_HB_LAST_RSLT_BACKUP_3);
  rename(VHQ_HB_LAST_RSLT_BACKUP_2, VHQ_HB_LAST_RSLT_BACKUP_3);
  rename(VHQ_HB_LAST_RSLT_BACKUP_1, VHQ_HB_LAST_RSLT_BACKUP_1);
  rename(VHQ_HB_LAST_RSLT_BACKUP, VHQ_HB_LAST_RSLT_BACKUP_1);
  CopyFile(VHQ_HB_LAST_RESULT_FILE, VHQ_HB_LAST_RSLT_BACKUP);
#endif
}

void openHbResult()
{
  if (tokenHbResult)
    dbg_warn("%s: Output file still in open state. Counter: %d \n",
             __FUNCTION__, tokenHbResult);
  tokenHbResult++;
  /* File has append behavior. Remove it to remove previous messages */
  if (!removeFile(VHQ_HB_LAST_RESULT_FILE))
    dbg_warn("%s: Output file still present after %d attempts.\n", __FUNCTION__,
             RM_FILE_CNT);
}

void closeHbResult()
{
  tokenHbResult--;
  if (tokenHbResult)
    dbg_warn("%s: Output file still in open state. Counter: %d \n",
             __FUNCTION__, tokenHbResult);
  BackupHBResult();
  sync();
  sync();
  sync();
}

void writeHbResult(const char *string, ...)
{
  int res = 0;
  va_list ap;

  if (!tokenHbResult)
    log_err("%s: ERROR. Unauthorized access to output file.\n", __FUNCTION__);

  int iFile = open(VHQ_HB_LAST_RESULT_FILE, O_CREAT | O_APPEND | O_RDWR,
  S_IRWXU);

  if (iFile != -1)
  {
    char szMsg[1024];
    int r;
    va_start(ap, string);
    r = vsprintf(szMsg, string, ap);
    va_end(ap);
    if (r > 0)
    {
      res = write(iFile, szMsg, r);
      if (res == -1)
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
                 "%s:Error in writing HB result into file %s\n", __FUNCTION__,
                 VHQ_HB_LAST_RESULT_FILE);
    }
    close(iFile);

    if (chmod(VHQ_HB_LAST_RESULT_FILE, 0664) != 0)
      dbg_err("%s: errno set in chmod() = %d\n", __FUNCTION__, errno);
  }

}


vhq_result_t EventNotification(int event_mask, char *filename,
                               int notificationDataInteger,
                               vhq_result_t vhq_result,
                               event_set_id_t event_set_id, event_id_t event_id,
                               bool app_approval_required)
{
  return NotifyApps(event_mask, filename, notificationDataInteger, vhq_result,
                    event_set_id, event_id, app_approval_required);
}

bool VHQGetParamFileName(char *receiver, char *filename, char *full_filename,
                         size_t full_filename_len, bool *remove_file)
{
  bool ret_val = FALSE;

  memset(full_filename, 0, full_filename_len);
  if (strcmp(receiver, VHQ_APP_NAME) == 0)
  {
    char InstanceName[256];
    char CfgFileName[512];
#ifdef ADK_SUPPORT
    char InfoSvcCfgFileName[512];
#endif
    param_file_reporting_t reporting_type = GetParamFileReportingType();

    memset(CfgFileName, 0, sizeof(CfgFileName));
#ifdef ADK_SUPPORT
    memset(InfoSvcCfgFileName, 0, sizeof(InfoSvcCfgFileName));
#endif

    switch (reporting_type)
    {
      case PARAM_FILE_REPORTING_CURRENT:
      case PARAM_FILE_REPORTING_CURRENT_PLUS:
      case PARAM_FILE_REPORTING_CURRENT_CONTAINERS:
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG_FILENAME,
                               GetCurrentInstance());
#ifdef ADK_SUPPORT
        GetFileNameForInstance(InfoSvcCfgFileName,
                               (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME,
                               GetCurrentInstance());
#endif
        break;
      case PARAM_FILE_REPORTING_PRIMARY:
      case PARAM_FILE_REPORTING_PRIMARY_OVERRIDE:
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG_FILENAME,
        PRIMARY_SERVER_INSTANCE_NAME);
#ifdef ADK_SUPPORT
        GetFileNameForInstance(InfoSvcCfgFileName,
                               (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME,
                               PRIMARY_SERVER_INSTANCE_NAME);
#endif
        break;
      case PARAM_FILE_REPORTING_ALL:
        GetInstanceFromFilename(filename, InstanceName, sizeof(InstanceName));
        if (strlen(InstanceName))
        {
          GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG_FILENAME,
                                 InstanceName);
#ifdef ADK_SUPPORT
          GetFileNameForInstance(InfoSvcCfgFileName,
                                 (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME,
                                 InstanceName);
#endif
        }
        break;
      case PARAM_FILE_REPORTING_NONE:
      default:
        break;
    }

    /* We are uploading a VHQ parameter file so find the right one */
    if (reporting_type == PARAM_FILE_REPORTING_NONE)
    {
      log_err(
          "%s: %s is an unknown VHQ param file because ParamFileReporting is set to NONE\n",
          __FUNCTION__, filename);
    }
    else if (strcmp(filename, CfgFileName) == 0)
    {
      memset(CfgFileName, 0, sizeof(CfgFileName));
      switch (reporting_type)
      {
        case PARAM_FILE_REPORTING_CURRENT:
        case PARAM_FILE_REPORTING_CURRENT_PLUS:
        case PARAM_FILE_REPORTING_CURRENT_CONTAINERS:
        case PARAM_FILE_REPORTING_PRIMARY_OVERRIDE:
          GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                 GetCurrentInstance());
          break;
        case PARAM_FILE_REPORTING_PRIMARY:
          GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
          PRIMARY_SERVER_INSTANCE_NAME);
          break;
        case PARAM_FILE_REPORTING_ALL:
          GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                                 InstanceName);
          break;
        case PARAM_FILE_REPORTING_NONE:
        default:
          break;

      }

      /* We are uploading VHQ.ini so setup parameters for that file */
      if (full_filename_len > strlen(CfgFileName))
      {
        dbg_msg("%s: setting up full filename with %s\n", __FUNCTION__,
                CfgFileName);
        strcpy(full_filename, CfgFileName);
        *remove_file = FALSE;
        ret_val = TRUE;
      }
      else
        log_err("%s: %s is too long for storage in filename\n", __FUNCTION__,
                CfgFileName);
    }
#ifdef ADK_SUPPORT
    else if (strcmp(filename, InfoSvcCfgFileName) == 0)
    {
      memset(InfoSvcCfgFileName, 0, sizeof(InfoSvcCfgFileName));
      switch (reporting_type)
      {
        case PARAM_FILE_REPORTING_CURRENT:
        case PARAM_FILE_REPORTING_CURRENT_PLUS:
        case PARAM_FILE_REPORTING_CURRENT_CONTAINERS:
        case PARAM_FILE_REPORTING_PRIMARY_OVERRIDE:
          GetFileNameForInstance(InfoSvcCfgFileName,
                                 (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                 GetCurrentInstance());
          break;
        case PARAM_FILE_REPORTING_PRIMARY:
          GetFileNameForInstance(InfoSvcCfgFileName,
                                 (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                 PRIMARY_SERVER_INSTANCE_NAME);
          break;
        case PARAM_FILE_REPORTING_ALL:
          GetFileNameForInstance(InfoSvcCfgFileName,
                                 (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                                 InstanceName);
          break;
        case PARAM_FILE_REPORTING_NONE:
        default:
          break;

      }

      /* We are uploading VHQ Info Svc Parameters so setup parameters for that file */
      if (full_filename_len > strlen(InfoSvcCfgFileName))
      {
        log_dbg("%s: setting up full filename with %s\n", __FUNCTION__,
                InfoSvcCfgFileName);
        if (reporting_type == PARAM_FILE_REPORTING_PRIMARY)
          ExportVHQInfoSvcDB(PRIMARY_SERVER_INSTANCE_NAME, InfoSvcCfgFileName);
        else
          ExportVHQInfoSvcDB(GetCurrentInstance(), InfoSvcCfgFileName);
        strcpy(full_filename, InfoSvcCfgFileName);
        *remove_file = FALSE;
        ret_val = TRUE;
      }
      else
        log_err("%s: %s is too long for storage in filename\n", __FUNCTION__,
                InfoSvcCfgFileName);
    }
#endif
    else if (reporting_type == PARAM_FILE_REPORTING_CURRENT_PLUS)
    {
      /* For Current+ reporting, we have already compared against the current instance so lets compare
       against the primary instance now */
      GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG_FILENAME,
      PRIMARY_SERVER_INSTANCE_NAME);
#ifdef ADK_SUPPORT
      GetFileNameForInstance(InfoSvcCfgFileName,
                             (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME,
                             PRIMARY_SERVER_INSTANCE_NAME);
#endif

      if (strcmp(filename, CfgFileName) == 0)
      {
        memset(CfgFileName, 0, sizeof(CfgFileName));
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
        PRIMARY_SERVER_INSTANCE_NAME);

        /* We are uploading VHQ.ini so setup parameters for that file */
        if (full_filename_len > strlen(CfgFileName))
        {
          dbg_msg("%s: setting up full filename with %s\n", __FUNCTION__,
                  CfgFileName);
          strcpy(full_filename, CfgFileName);
          *remove_file = FALSE;
          ret_val = TRUE;
        }
        else
          log_err("%s: %s is too long for storage in filename\n", __FUNCTION__,
                  CfgFileName);
      }
#ifdef ADK_SUPPORT
      else if (strcmp(filename, InfoSvcCfgFileName) == 0)
      {
        memset(InfoSvcCfgFileName, 0, sizeof(InfoSvcCfgFileName));
        GetFileNameForInstance(InfoSvcCfgFileName,
                               (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                               PRIMARY_SERVER_INSTANCE_NAME);

        /* We are uploading VHQ Info Svc Parameters so setup parameters for that file */
        if (full_filename_len > strlen(InfoSvcCfgFileName))
        {
          dbg_msg("%s: setting up full filename with %s\n", __FUNCTION__,
                  InfoSvcCfgFileName);
          if (reporting_type == PARAM_FILE_REPORTING_PRIMARY)
            ExportVHQInfoSvcDB(PRIMARY_SERVER_INSTANCE_NAME,
                               InfoSvcCfgFileName);
          else
            ExportVHQInfoSvcDB(GetCurrentInstance(), InfoSvcCfgFileName);
          strcpy(full_filename, InfoSvcCfgFileName);
          *remove_file = FALSE;
          ret_val = TRUE;
        }
        else
          log_err("%s: %s is too long for storage in filename\n", __FUNCTION__,
                  InfoSvcCfgFileName);
      }
#endif
    }
    else
      log_err("%s: %s is an unknown VHQ param file\n", __FUNCTION__, filename);
  }
  else
  {
    log_dbg("%s: Checking for param file in registered apps (receiver = %s)\n",
            __FUNCTION__, receiver);
    ret_val = GetAppParameterFileByName(receiver, filename, full_filename,
                                        full_filename_len, remove_file);
    if (ret_val)
    {
      dbg_msg(
          "%s: Succesfully got param file %s from %s - upload file located at %s\n",
          __FUNCTION__, filename, receiver, full_filename);
    }
    else
    {
      log_err("%s: Unable to get param file %s from receiver %s\n",
              __FUNCTION__, filename, receiver);
    }
  }

  log_dbg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

vhq_result_t ProcessAppAction(app_action_content_t *app_action_content)
{
  vhq_result_t result = VHQ_SUCCESS;
  bool app_action_result;

  if (app_action_content->AppAction != APP_ACTION_NONE)
  {
    dbg_msg("%s: Calling AppActionPerform(%d)\n", __FUNCTION__,
            app_action_content->AppAction);
    app_action_result = AppActionPerform(app_action_content->AppAction);

    log_dbg("%s: AppActionPerform(%d) returned %d\n", __FUNCTION__,
            app_action_content->AppAction, app_action_result);
    if (app_action_result)
      result = VHQ_SUCCESS;
    else
      result = VHQ_SERVER_MGMT_PLAN_OPERATION_APP_ACTION_ERROR;
  }
  return result;
}

static uint16 g_eComType;  // All communications whose interface is up
static com_type_t g_eCurrCom = COM_NO_INTERFACE;

bool IsComTypeSet(com_type_t comtype)
{
  return ((g_eComType & (1 << comtype)) ? TRUE : FALSE);
}


com_type_t GetComType(void)
{
  return g_eCurrCom;
}


void SetComType(com_type_t type)
{
  g_eCurrCom = type;
}


const char* get_ComType_name(com_type_t comtype)
{
  if (comtype < COM_TYPE_DIRECT || comtype > COM_NO_INTERFACE)
    comtype = COM_NO_INTERFACE;

  return com_type_string[comtype];
}

int GetIPAddress(char *pszIPAddress, int iIPAddressBufLen)
{
  int iResult = 0;
  uint32 iTimeout = 0;
  time_t exp_time = 0;
  char szIpAddr[IP_ADDR_LEN] = { 0 };

  dbg_trace("%s: +\r\n", __FUNCTION__);
  VHQGetParameterUint32(PARAM_NETWORK_CONFIGURAION_WAIT_TIME, &iTimeout,
                        DEFAULT_BASE);

  exp_time = linux_time(NULL) + iTimeout;

  do
  {
    iResult = CommStatus(NULL, NULL, szIpAddr, NULL);
    if (iResult)
      sleep(1);
  }
  while ((iResult != 0) && (exp_time > linux_time(NULL)));

  if (iResult == 0)
  {
    strncpy(pszIPAddress, szIpAddr, iIPAddressBufLen);
    dbg_msg("%s: Ipaddr is %s\r\n", __FUNCTION__, pszIPAddress);
  }
  else
  {
    memset(pszIPAddress, 0, iIPAddressBufLen);
    dbg_err("%s: Can not get IP address\r\n", __FUNCTION__);
  }

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return iResult;
}

int GetMACAddress(char *pszMACAddress, int iMACAddressBufLen)
{
  dbg_trace("%s: +\r\n", __FUNCTION__);
  memset(pszMACAddress, 0, iMACAddressBufLen);

  {
    char szMacAddr[MAC_ADDR_LEN] = { 0 };
    if (0 == CommStatus(NULL, NULL, NULL, szMacAddr))
    {
      strncpy(pszMACAddress, szMacAddr, iMACAddressBufLen);
      dbg_msg("%s: macaddr is %s\r\n", __FUNCTION__, pszMACAddress);
    }
    else
    {
      memset(pszMACAddress, 0, iMACAddressBufLen);
      log_err("%s: can not get MAC address\r\n", __FUNCTION__);
    }
    return TRUE;
  }

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return 0;
}


/* For parsing VCLDiag Data */
int VCLDiagDataParserGetOneLine(char *input_string, char **nextline)
{
  int result = 1;
  char *temp;

  if (input_string == NULL || nextline == NULL)
  {
    log_err("%s: input error input_string:%p nextline:%p\n", __FUNCTION__,
            input_string, nextline);
    return 0;
  }

  temp = strchr(input_string, '\n');

  if (temp == NULL)
  {
    dbg_msg("%s: no line breaker\n", __FUNCTION__);
  }
  else
  {
    *temp = '\0';
    temp++;

    /* next line is end of buffer */
    if (*temp == '\0')
      temp = NULL;
  }

  *nextline = temp;

  return result;
}

int VCLDiagDataParserGetParam(char *inputline, char **name, char **value)
{
  char *temp;

  if (inputline == NULL || name == NULL || value == NULL)
  {
    log_err("%s: input error inputline:%p name:%p value:%p\n", __FUNCTION__,
            inputline, name, value);
    return 0;
  }

  temp = strchr(inputline, '=');

  if (temp == NULL)
  {
    dbg_msg("%s: no paramter breaker\n", __FUNCTION__);
    return 0;
  }
  *temp = '\0';

  *name = inputline;
  *value = temp + 1;
  return 1;
}


void CreateVHQRebootFile()
{
  int iFile;

  iFile = open(VHQ_REBOOT_REQUEST_FILE, O_TRUNC | O_CREAT | O_RDWR,
  S_IRWXU | S_IRWXG | S_IRWXO);

  if (iFile != -1)
    close(iFile);
  else
    log_err("%s: creating %s failed, errno is %d\n", __FUNCTION__,
            VHQ_REBOOT_REQUEST_FILE, errno);

}

void RemoveVHQRebootFile()
{
  int retries = 3;
  int remove_ret_val;

  /* Give 3 tries at removing the file */
  do
  {
    remove_ret_val = remove(VHQ_REBOOT_REQUEST_FILE);
    retries--;
  }
  while ((remove_ret_val != 0) && retries);
}

bool RequestAppRegistrationDelay()
{
#if EVENT_SCHED_THREAD_MODE
  /* No need to go through the message queue for MX8 until this is supported on MX8 */
  bool ret_val = FALSE;
  int outQid, inQid;
  int rcv_len, expected_len;
  time_t delay_timeout_time;
  VHQRootRequestMsg reqAppRegDelay_request_msg;
  VHQRootResponseMsg reqAppRegDelay_response_msg;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
  // open queues (server will create)
  outQid = msgget((key_t) QUE_VHQ_ROOT_REQUEST, 0666);
  inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);

  if ((-1 != inQid) && (-1 != outQid))
  {
    uint32 app_reg_wait_time;
    struct tm local_time;

    VHQGetParameterUint32(PARAM_APP_REG_WAIT_TIME, &app_reg_wait_time,
                          DEFAULT_BASE);

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Opened Message QUEUES's\n", __FUNCTION__);
    memset(&reqAppRegDelay_request_msg, 0, sizeof(VHQRootRequestMsg));
    memset(&reqAppRegDelay_response_msg, 0, sizeof(VHQRootResponseMsg));

    reqAppRegDelay_request_msg.clientPid = getpid();
    reqAppRegDelay_request_msg.message_type = VHQ_REQUEST_REGISTRATION_DELAY;

    dbg_msg("%s: Sending VHQ_REQUEST_REGISTRATION_DELAY message\n",
            __FUNCTION__);
    SafeMsgSndWrapper(outQid, &reqAppRegDelay_request_msg,
                      sizeof(VHQRootRequestMsg) - sizeof(long), 0);

    delay_timeout_time = linux_time(
    NULL) + app_reg_wait_time + VHQ_REG_DELAY_TIMEOUT_BUFFER;
    linux_localtime(&delay_timeout_time, &local_time);
    log_notice(
        "%s: Waiting for VHQ_REQUEST_REGISTRATION_DELAY response - delay_timeout_time = %s\r\n",
        __FUNCTION__, tmtoa(&local_time));
    do
    {
      expected_len = sizeof(VHQRootResponseMsg) - sizeof(long);
      rcv_len = SafeMsgRcvWrapper(inQid, &reqAppRegDelay_response_msg,
                                  sizeof(VHQRootResponseMsg) - sizeof(long),
                                  reqAppRegDelay_request_msg.clientPid, 0,
                                  FALSE);
      if (rcv_len >= expected_len)
      {
        if (reqAppRegDelay_response_msg.message_type
            == VHQ_REQUEST_REGISTRATION_DELAY)
        {
          dbg_msg(
              "%s: Received VHQ_REQUEST_REGISTRATION_DELAY response - returning\r\n",
              __FUNCTION__);
          ret_val = TRUE;
        }
        else
        {
          dbg_msg(
              "%s: Received %d response - continuing to wait for VHQ_REQUEST_REGISTRATION_DELAY response\r\n",
              __FUNCTION__, reqAppRegDelay_response_msg.message_type);
        }
      }
      else
      {
        log_err(
            "%s SafeMsgRcvWrapper() returned %d - expected %d or greater - waiting for another response\r\n",
            __FUNCTION__, rcv_len, expected_len);
        log_err("\terrno (%d) = %s\r\n", errno, strerror(errno));
        inQid = msgget((key_t) QUE_VHQ_ROOT_RESPONSE, 0666);
        sleep(2);
      }
    }
    while ((ret_val != TRUE) && (linux_time(NULL) < delay_timeout_time));

  }
  else
  {
    log_err("%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid,
            inQid);
  }

  return ret_val;
#else
  WaitForAppRegistration();
  ProcessServerRequests(FALSE);

  return TRUE;
#endif
}

bool BlockAllSignals(bool unblockSIGUSR1)
{
  int res;
  sigset_t block_sig_set;

  sigfillset(&block_sig_set);
  sigdelset(&block_sig_set, SIGKILL);
  sigdelset(&block_sig_set, SIGSTOP);
  if (unblockSIGUSR1)
    sigdelset(&block_sig_set, SIGUSR1);

  dbg_notice("%s: Blocking all signals\n", __FUNCTION__);
  res = pthread_sigmask(SIG_SETMASK, &block_sig_set, NULL);
  if (res != 0)
  {
    log_err(
        "%s: pthread_sigmask() to block all signals failed with error %s (%d)\n",
        __FUNCTION__, strerror(res), res);
    return FALSE;
  }
  else
    return TRUE;
}


static bool checkIPAddressIPv6(const char *ip)
{
  int i = 0;
  int hash_sum = 0;
  int cnt_elem = 0;
  int cnt_dots = 0;
  int dots_detected = 0;
  int double_dots_detected = 0;

  if (!ip)
    return FALSE;

  while (*ip)
  {
    if (isxdigit(*ip))
    {
      if (cnt_dots > 2)
        break;
      if (cnt_dots == 2)
        double_dots_detected++;
      hash_sum += (int) toupper(*ip);
      cnt_elem++;
      cnt_dots = 0;
      i++;
    }
    else
    {
      if (*ip == ':')
      {
        if (i > 4)
          break;
        cnt_dots++;
        dots_detected++;
        i = 0;
      }
      else
      {
        return FALSE;
      }
    }
    ++ip;
  }

  /* reject all zeros and all 0xF */
  if (hash_sum == 0 || cnt_elem == 0
      || (cnt_elem == 24 && hash_sum == ('F' * 24))
      || (hash_sum / cnt_elem == '0'))
  {
    log_warn("%s: WARNING: This format of IPv6 address is prohibited\n",
             __FUNCTION__);
    return FALSE;
  }

  if (i > 4 || cnt_dots > 2)
    return FALSE;

  if (dots_detected == 0 || dots_detected > 7 || double_dots_detected > 1)
    return FALSE;

  return TRUE;
}

bool ISvalidIP(const char *ip)
{
  unsigned int int_ip[4];
  unsigned int i;

  if (!ip)
    return FALSE;

  if (sscanf(ip, "%u.%u.%u.%u", &int_ip[0], &int_ip[1], &int_ip[2], &int_ip[3])
      == 4)
  {
    for (i = 0; i < 4; i++)
    {
      if (int_ip[i] > 255)
      {
        return FALSE;
      }
    }

    /* reject 0.x.x.x and x.x.x.0 and "0.0.0.0" as a result */
    if (int_ip[0] == 0)
    {
      return FALSE;
    }

    //Safety log only
    if (int_ip[3] == 0)
    {
      dbg_warn("%s: This IP address has 0 in the end x.x.x.0, still valid\n",
               __FUNCTION__);
    }

    return TRUE;
  }
  else
  {
    return checkIPAddressIPv6(ip);
  }
}

bool ISvalidMAC(const char *mac)
{
  int i = 0;
  int s = 0;

  while (*mac)
  {
    if (isxdigit(*mac))
    {
      i++;
    }
    else
    {
      if (*mac == ':' || *mac == '-')
      {
        if (i == 0 || i / 2 - 1 != s)
          break;
        ++s;
      }
      else
      {
        s = -1;
      }
    }
    ++mac;
  }
  return (i == 12 && (s == 5 || s == 0));
}

#undef time()

time_t linux_time(time_t *pTime)
{
  return time(pTime);
}
#undef mktime()

time_t linux_mktime(struct tm *t)
{
  return mktime(t);
}
#undef localtime_r()

struct tm* linux_localtime(time_t *pTime, struct tm *local_time)
{
  return localtime_r(pTime, local_time);
}
#undef gmtime_r()

struct tm* linux_gmtime(time_t *pTime, struct tm *local_time)
{
  return gmtime_r(pTime, local_time);
}
#undef timegm()

time_t linux_timegm(struct tm *t)
{
  return timegm(t);
}

/******************************************************************************
 * Function:      convert_tm_to_time_t
 * Description:   similar to mktime() behavior but uses only main fields, no
 *                potential time zone influence
 *
 * Parameters:    tm - pointer to struct tm
 *
 * Return Value:  seconds in Linux format
 *****************************************************************************/
time_t convert_tm_to_time_t(const struct tm *t)
{
  time_t lt = t->tm_sec + t->tm_min * 60 + t->tm_hour * 3600
      + t->tm_yday * 86400 + (t->tm_year - 70) * 31536000
      + ((t->tm_year - 69) / 4) * 86400 - ((t->tm_year - 1) / 100) * 86400
      + ((t->tm_year + 299) / 400) * 86400;

  return lt;
}

static long prev_nonce = 0;


long GenerateNonce(void)
{
  long ret_val = (long) GetRTC();

  dbg_msg("%s: comparing RTC val %ld to last nonce %ld\n", __FUNCTION__,
          ret_val, prev_nonce);
  if (ret_val <= prev_nonce)
  {
    ret_val = prev_nonce + 1;  // make sure it keeps incrementing.  Eventually the RTC will catch up
  }

  prev_nonce = ret_val;
  dbg_msg("%s: returning NONCE %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

bool lowPowerMode()
{
  bool is_mobile = isMobileDevice();
#ifdef _VOS2
  /* Mitch (3-9-2018): ADKTMS-2335 - We have discussed with David C. and all Raptor battery
   powered devices will do power management whether they are docked or not.  So for VOS2
   devices, force the is_docked to FALSE so we only pat attention to the battery/mobile
   device flags */
  bool is_docked = FALSE;
#else
  bool is_docked = isDocked();
#endif

  if (is_mobile && !is_docked)
  {
    /* This is a battery powered mobile device and it is undocked - return TRUE to indicate we are in low power mode */
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s (0x%08x): bat_status = %d, is_mobile = %d, is_docked = %d - returning TRUE\n", __FUNCTION__, pthread_self(), bat_status, is_mobile, is_docked);
    return TRUE;
  }
  else
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s (0x%08x): bat_status = %d, is_mobile = %d, is_docked = %d - returning FALSE\n", __FUNCTION__, pthread_self(), bat_status, is_mobile, is_docked);
    return FALSE;
  }
}

/******************************************************************************
 * Function:      u32subu32
 * Description:   This function is an example how to manipulate with uint32 values
 *                in correct way since result can be 64bit long.
 *                Regular approaches:
 *                        long long int x = a - b;
 *                        long long int x = (long long int)a - (long long int)b;
 *                        fail with int32 result.
 *
 * Parameters:    a
 *                b
 *
 * Return Value:  a - b in 64bit format
 *****************************************************************************/
long long int u32subu32(unsigned int a, unsigned int b)
{
  long long int _a = a;
  long long int _b = b;
  return _a - _b;
}

/******************************************************************************
 * Function:      removeNLS
 * Description:   Function removes new line symbols, \r and \n, if any.
 *
 * Parameters:    input - input buffer which will be modified
 *
 * Return Value:  pointer to buffer with result
 *****************************************************************************/
static char* removeNLS(char *input)
{
  char *ptr = input;

  if (!ptr)
    return ptr;

  for (; *ptr; ptr++)
  {
    if (*ptr == '\r' || *ptr == '\n')
      *ptr = '\0';
  }
  return input;
}

/******************************************************************************
 * Function:      tmtoa, analog of asctime()
 * Description:   Function transfers tm to human readable string.
 *                Do not call more that 8 times inside of single DebugMsg() or xprintf()
 *
 * Parameters:    tm - pointer to struct tm
 *
 * Return Value:  pointer to buffer with converted value
 *****************************************************************************/
#undef asctime()
char* tmtoa(const struct tm *tm)
{
  char *r = NULL;
  char *d = asctime(tm);

  static char b[8][26] = { { } };
  static int buffer_index = 0;

  r = b[buffer_index++ % 8]; /* round robin buffer of 8 elements */
  snprintf(r, 26, "%s", d ? d : "NULL");
  return removeNLS(r);
}

/******************************************************************************
 * Function:      lltoa
 * Description:   Function transfers long long into to string.
 *                Do not call more that 8 times inside of single DebugMsg() or xprintf()
 *
 * Parameters:    i - signed 64 bit integer
 *
 * Return Value:  pointer to buffer with converted value
 *****************************************************************************/
char* lltoa(long long int i)
{
  const char digit[] = "0123456789";
  long long int shifter;
  char *p = NULL;
  char *r = NULL;

  static char b[8][21] = { { } };
  static int buffer_index = 0;

  p = b[buffer_index++ % 8]; /* round robin buffer of 8 elements */
  r = p;

  if (i < 0)
  {
    *p++ = '-';
    i *= -1;
  }
  shifter = i;
  do
  {
    ++p;
    shifter = shifter / 10;
  }
  while (shifter);
  *p = '\0';
  do
  {
    *--p = digit[i % 10];
    i = i / 10;
  }
  while (i);
  return r;
}


bool isValidXMLData(const char *data)
{
  if (!data)
    return FALSE;

  while (*data)
  {
    if (*data < 0x9 || *data == 0xB || *data == 0xC
        || (0xD < *data && *data < 0x20) || 0x7e < *data)  // '\t' 0x9, '\n' 0xA, '\r' 0xD, 0x20...0x7e
      return FALSE;
    data++;
  }
  return TRUE;
}


uint32 GetHBFreq(uint32 *hbFailureRetryThresh, const com_type_t com_type)
{
  uint32 heartbeat_rate = 0;

  if (hbFailureRetryThresh)
  {
    VHQGetParameterUint32(PARAM_HB_FAILURE_RETRY_THRESHOLD,
                          hbFailureRetryThresh, DEFAULT_BASE);
  }

  // Get HB frequency based on communication interface type
  switch (com_type)
  {
    case COM_TYPE_DIRECT:
    case COM_TYPE_ETH:
    case COM_TYPE_ETH_BT:
    case COM_TYPE_ETH_USB:
    case COM_TYPE_NET_BRIDGE:
    case COM_TYPE_USB:
    case COM_TYPE_WIFI:
      dbg_trace("Getting Direct/ETH/Wifi HB Frequency\n");
      VHQConfigGetTimeInterval(PARAM_HEARTBEAT_FREQUENCY, &heartbeat_rate);
      break;
    case COM_TYPE_GPRS:
      dbg_trace("Getting GPRS/3G HB Frequency\n");
      VHQConfigGetTimeInterval(PARAM_HB_GPRS3G_FREQUENCY, &heartbeat_rate);
      break;
    case COM_TYPE_DIAL:
    case COM_TYPE_RAW_DIAL:
      dbg_trace("Getting Dial HB Frequency\n");
      VHQConfigGetTimeInterval(PARAM_HB_DIAL_FREQUENCY, &heartbeat_rate);
      break;
    default:
      log_dbg(
          "No interface present yet. Create initial HeartBeat with Direct HB Frequency\n");
      VHQConfigGetTimeInterval(PARAM_HEARTBEAT_FREQUENCY, &heartbeat_rate);
      break;
  }

  return heartbeat_rate;
}


bool HeartbeatRescheduleRequired(uint32 oldHBFreq,
                                 uint32 oldHBFailureRetryThresh)
{
  uint32 newHBFreq, newHBFailureRetryThresh;

  newHBFreq = GetHBFreq(&newHBFailureRetryThresh, GetComType());

  /* If either of the parameters changed, the HB needs rescheduled */
  if (newHBFreq != oldHBFreq)
  {
    log_alert(
        "%s: HB Frequency changed (old = %d, new = %d) - returning TRUE\n",
        __FUNCTION__, oldHBFreq, newHBFreq);
    return TRUE;
  }
  else if (newHBFailureRetryThresh != oldHBFailureRetryThresh)
  {
    log_alert(
        "%s: HB Failure Retry Threshold changed (old = %d, new = %d) - returning TRUE\n",
        __FUNCTION__, oldHBFailureRetryThresh, newHBFailureRetryThresh);
    return TRUE;
  }

  return FALSE;
}


time_t ConvertServerLocalTimeToDeviceUTC(char *description,
                                         time_t input_loc_time)
{
  /* By default, return the same input time */
  time_t ret_val = input_loc_time;

  if (input_loc_time != 0)
  {
    struct tm *temp_gmtime_p;
    struct tm temp_gmtime;

    /* Server is not providing this as true UTC time so convert the ApplyOnDate
     provided by server as the localtime to a UTC Time */
    temp_gmtime_p = linux_gmtime(&input_loc_time, &temp_gmtime);

    dbg_msg("%s: %d converted to %d-%d-%d @ %02d:%02d:%02d\n", __FUNCTION__,
            input_loc_time, temp_gmtime.tm_mon + 1, temp_gmtime.tm_mday,
            temp_gmtime.tm_year, temp_gmtime.tm_hour, temp_gmtime.tm_min,
            temp_gmtime.tm_sec);

    UNUSED(temp_gmtime_p);

    /* Let mktime deal with determining DST or not */
    temp_gmtime.tm_isdst = -1;
    ret_val = linux_mktime(&temp_gmtime);
    dbg_msg("%s: Extracted %s = %lu - converted to UTC time %lu (DST = %d)\n",
            __FUNCTION__, description, input_loc_time, ret_val,
            temp_gmtime.tm_isdst);
  }

  return ret_val;
}


time_t ConvertDeviceUTCToServerLocalTime(char *description,
                                         time_t input_UTC_time)
{
  /* By default, return the same input time */
  time_t ret_val = input_UTC_time;

  if (input_UTC_time != 0)
  {
    struct tm *temp_localtime_p;
    struct tm temp_localtime;

    /* Server is not providing this as true UTC time so convert the ApplyOnDate
     provided by server as the localtime to a UTC Time */
    temp_localtime_p = linux_localtime(&input_UTC_time, &temp_localtime);

    dbg_msg("%s: %d converted to %d-%d-%d @ %02d:%02d:%02d\n", __FUNCTION__,
            input_UTC_time, temp_localtime.tm_mon + 1, temp_localtime.tm_mday,
            temp_localtime.tm_year, temp_localtime.tm_hour,
            temp_localtime.tm_min, temp_localtime.tm_sec);
    UNUSED(temp_localtime_p);

    /* */
    ret_val = linux_timegm(&temp_localtime);
    dbg_msg("%s: %s = %lu - converted to local time %lu (DST = %d)\n",
            __FUNCTION__, description, input_UTC_time, ret_val,
            temp_localtime.tm_isdst);
  }

  return ret_val;
}

/* This functionality will eventually be enabled for VX also */
#ifdef _VOS2
static void *vfisyspm_wrapper_lib = NULL;

static bool wrapperLibOpen = FALSE;
static bool wrapperLibOpenFailed = FALSE;

static bool _openLibVFiPMWrapperLib()
{

  if (wrapperLibOpen)
  {
    /* Library is already open */
    dbg_msg("%s: wrapper library is already open - returning TRUE\n",
            __FUNCTION__);
    return TRUE;
  }
  else if (wrapperLibOpenFailed)
  {
    /* There is no need to keep trying to open the library if it already failed */
    log_err("%s: wrapperLibOpenFailed is set - returning FALSE\n",
            __FUNCTION__);
    return FALSE;
  }

  ipcSetAppIDwrapper();
  /* Clear existing error */
  dlerror();
  vfisyspm_wrapper_lib = dlopen("./libtms_vfisyspm_wrapper.so",
  RTLD_LAZY | RTLD_GLOBAL);
  if (!vfisyspm_wrapper_lib)
  {
    char *dlopen_error;

    dlopen_error = dlerror();
    log_err(
        "%s: Unable to open libtms_vfisyspm_wrapper.so (dlopen error = %s)\n",
        __FUNCTION__, dlopen_error);

    /* Set wrapperLibOpenFailed so we don't try to do anything with the lib anymore */
    wrapperLibOpenFailed = TRUE;
    return FALSE;
  }
  else
  {
    /* Note that we will never close this shared library once we open it.  We will be using it frequently
     and the library registers callbacks when started so it must remain open the entire run time */
    dbg_msg("%s: Opened libtms_vfisyspm_wrapper.so - returning TRUE\n",
            __FUNCTION__);
    wrapperLibOpen = TRUE;
    return TRUE;
  }
}

int SetTimerCbFunc_Wrapper(void *cbFunc)
{
  int res = 2; /* By deafult, return SYS_PM_ERR_UNSUPPORTED value */
  char *dlsym_error;
  void (*VHQ_vfisyspm_wrapper_lib_RegTimerCb)(TimerCb cbFunc);

  if (!_openLibVFiPMWrapperLib())
  {
    return -2;
  }

  /* Clear existing error */
  dlerror();
  VHQ_vfisyspm_wrapper_lib_RegTimerCb = (void (*)(TimerCb cbFunc)) dlsym(
      vfisyspm_wrapper_lib, "VHQ_vfisyspm_wrapper_lib_RegTimerCb");

  dlsym_error = dlerror();
  if (dlsym_error)
  {
    dbg_err(
        "%s: Error (%s) getting VHQ_vfisyspm_wrapper_lib_RegTimerCb in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__, dlsym_error);
    return res;
  }

  if (VHQ_vfisyspm_wrapper_lib_RegTimerCb)
  {
    res = 0;
    VHQ_vfisyspm_wrapper_lib_RegTimerCb(cbFunc);
    log_alert("%s: setup RegTimerCb = %p\n", __FUNCTION__, cbFunc);
  }
  else
  {
    log_err(
        "%s: Can't find VHQ_vfisyspm_wrapper_lib_RegTimerCb in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__);
  }

  return res;
}


int SetWakeupTime_Wrapper(struct itimerval new_tv, struct tm *wakeup_tm)
{
  int res = 2; /* By deafult, return SYS_PM_ERR_UNSUPPORTED value */
  char *dlsym_error;
  int (*VHQ_vfisyspm_wrapper_lib_SetWakeupTime)(struct itimerval new_tv,
                                                struct tm *wakeup_tm);

  if (!_openLibVFiPMWrapperLib())
  {
    return -2; /* Return SYS_PM_ERR_UNSUPPORTED value*/
  }

  /* Clear existing error */
  dlerror();
  VHQ_vfisyspm_wrapper_lib_SetWakeupTime =
      (int (*)(struct itimerval new_tv, struct tm *wakeup_tm)) dlsym(
          vfisyspm_wrapper_lib, "VHQ_vfisyspm_wrapper_lib_SetWakeupTime");

  dlsym_error = dlerror();
  if (dlsym_error != NULL)
  {
    dbg_err(
        "%s: Error (%s) getting VHQ_vfisyspm_wrapper_lib_SetWakeupTime in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__, dlsym_error);
  }
  else
  {
    if (VHQ_vfisyspm_wrapper_lib_SetWakeupTime)
    {
      dbg_msg("%s: setting wake up time for %d seconds\n", __FUNCTION__,
              new_tv.it_value.tv_sec);
      res = VHQ_vfisyspm_wrapper_lib_SetWakeupTime(new_tv, wakeup_tm);
      if (res != 0)
      {
        dbg_err(
            "%s: ERROR %d from VHQ_vfisyspm_wrapper_lib_SetWakeupTime(%d)\n",
            __FUNCTION__, res, new_tv.it_value.tv_sec);
      }
      else
      {
        dbg_msg(
            "%s: VHQ_vfisyspm_wrapper_lib_SetWakeupTime() for %d seconds SUCCESSFUL\n",
            __FUNCTION__, new_tv.it_value.tv_sec);
      }
    }
    else
    {
      dbg_err(
          "%s: Can't find VHQ_vfisyspm_wrapper_lib_SetWakeupTime in libtms_vfisyspm_wrapper.so\n",
          __FUNCTION__);
    }
  }

  return res;
}

int CriticalSectionEnter_Wrapper(int params)
{
  int res = 2; /* By deafult, return SYS_PM_ERR_UNSUPPORTED value */
  char *dlsym_error;
  int (*VHQ_vfisyspm_wrapper_lib_CritSecEnter)(int params);

  if (!_openLibVFiPMWrapperLib())
  {
    return -2; /* Return SYS_PM_ERR_UNSUPPORTED value*/
  }

  /* Clear existing error */
  dlerror();
  VHQ_vfisyspm_wrapper_lib_CritSecEnter = (int (*)(int params)) dlsym(
      vfisyspm_wrapper_lib, "VHQ_vfisyspm_wrapper_lib_CritSecEnter");

  dlsym_error = dlerror();
  if (dlsym_error != NULL)
  {
    dbg_err(
        "%s: Error (%s) getting VHQ_vfisyspm_wrapper_lib_CritSecEnter in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__, dlsym_error);
  }
  else
  {
    if (VHQ_vfisyspm_wrapper_lib_CritSecEnter)
    {
      res = VHQ_vfisyspm_wrapper_lib_CritSecEnter(params);
      if (res != 0)
      {
        dbg_err("%s: ERROR %d from VHQ_vfisyspm_wrapper_lib_CritSecEnter(%d)\n",
                __FUNCTION__, res, params);
      }
      else
      {
        dbg_msg("%s: VHQ_vfisyspm_wrapper_lib_CritSecEnter() SUCCESSFUL\n",
                __FUNCTION__);
      }
    }
    else
    {
      dbg_err(
          "%s: Can't find VHQ_vfisyspm_wrapper_lib_CritSecEnter in libtms_vfisyspm_wrapper.so\n",
          __FUNCTION__);
    }
  }

  return res;
}


int CriticalSectionExit_Wrapper()
{
  int res = 2; /* By deafult, return SYS_PM_ERR_UNSUPPORTED value */
  char *dlsym_error;
  int (*VHQ_vfisyspm_wrapper_lib_CritSecExit)(void);

  if (!_openLibVFiPMWrapperLib())
  {
    return -2; /* Return SYS_PM_ERR_UNSUPPORTED value*/
  }

  /* Clear existing error */
  dlerror();
  VHQ_vfisyspm_wrapper_lib_CritSecExit = (int (*)(void)) dlsym(
      vfisyspm_wrapper_lib, "VHQ_vfisyspm_wrapper_lib_CritSecExit");

  dlsym_error = dlerror();
  if (dlsym_error != NULL)
  {
    dbg_err(
        "%s: Error (%s) getting VHQ_vfisyspm_wrapper_lib_CritSecExit in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__, dlsym_error);
  }
  else
  {
    if (VHQ_vfisyspm_wrapper_lib_CritSecExit)
    {
      res = VHQ_vfisyspm_wrapper_lib_CritSecExit();
      if (res != 0)
      {
        dbg_err("%s: ERROR %d from VHQ_vfisyspm_wrapper_lib_CritSecExit()\n",
                __FUNCTION__, res);
      }
      else
      {
        dbg_msg("%s: VHQ_vfisyspm_wrapper_lib_CritSecExit() SUCCESSFUL\n",
                __FUNCTION__);
      }
    }
    else
    {
      dbg_err(
          "%s: Can't find VHQ_vfisyspm_wrapper_lib_CritSecExit in libtms_vfisyspm_wrapper.so\n",
          __FUNCTION__);
    }
  }

  return res;
}


int SysPmReboot_Wrapper()
{
  int res = 2; /* By deafult, return SYS_PM_ERR_UNSUPPORTED value */
  char *dlsym_error;
  int (*VHQ_vfisyspm_wrapper_lib_Reboot)(void);

  if (!_openLibVFiPMWrapperLib())
  {
    return -2; /* Return SYS_PM_ERR_UNSUPPORTED value*/
  }

  /* Clear existing error */
  dlerror();
  VHQ_vfisyspm_wrapper_lib_Reboot = (int (*)(void)) dlsym(vfisyspm_wrapper_lib,
                                                          "VHQ_vfisyspm_wrapper_lib_Reboot");

  dlsym_error = dlerror();
  if (dlsym_error != NULL)
  {
    dbg_err(
        "%s: Error (%s) getting VHQ_vfisyspm_wrapper_lib_Reboot in libtms_vfisyspm_wrapper.so\n",
        __FUNCTION__, dlsym_error);
  }
  else
  {
    if (VHQ_vfisyspm_wrapper_lib_Reboot)
    {
      res = VHQ_vfisyspm_wrapper_lib_Reboot();
      if (res != 0)
      {
        dbg_err("%s: ERROR %d from VHQ_vfisyspm_wrapper_lib_Reboot()\n",
                __FUNCTION__, res);
      }
      else
      {
        dbg_msg("%s: VHQ_vfisyspm_wrapper_lib_Reboot() SUCCESSFUL\n",
                __FUNCTION__);
      }
    }
    else
    {
      dbg_err(
          "%s: Can't find VHQ_vfisyspm_wrapper_lib_Reboot in libtms_vfisyspm_wrapper.so\n",
          __FUNCTION__);
    }
  }

  return res;
}

#endif

time_t _agent_boot_time = (time_t) -1;

void SetOSBootTime(time_t boot_time)
{
#ifdef Mx2
  struct sysinfo s_info;
  if (boot_time != (time_t) -1 && sysinfo(&s_info) == 0)
  {
    /* 0 is successful return for sysinfo() */
    log_alert("%s: OS Up Time read SUCCESSFULLY from sysinfo(uptime = %lu)\n",
              __FUNCTION__, s_info.uptime);
    _agent_boot_time = boot_time - s_info.uptime;
    return;
  }
#endif
  _agent_boot_time = boot_time;
}

time_t GetOSBootTime(void)
{
  return _agent_boot_time;
}

#define PCI_REBOOT_GAP 300

bool isPCIreboot(void)
{
  bool retval = FALSE;
  int reboot_24hr_hour = -1;
  int reboot_24hr_minutes = -1;
  int reboot_24hr_seconds = -1;
  char *_24hrreboot = NULL;
  struct utilityGetEnvFile envVar;
  envVar = utility_getenvfile("", "*24hrreboot");
  if (envVar.count > 0)
  {
    _24hrreboot = envVar.value;
    if (_24hrreboot
        && sscanf(_24hrreboot, "%d:%d:%d", &reboot_24hr_hour,
                  &reboot_24hr_minutes, &reboot_24hr_seconds) == 3)
    {
      time_t PCI_reboot_time;
      struct tm tm_boot_time;
      time_t boot_time = GetOSBootTime();

      dbg_msg("%s: *24hrreboot = %d:%d:%d\n", __FUNCTION__, reboot_24hr_hour,
              reboot_24hr_minutes, reboot_24hr_seconds);
      if (linux_localtime(&boot_time, &tm_boot_time))
      {
        tm_boot_time.tm_hour = reboot_24hr_hour;
        tm_boot_time.tm_min = reboot_24hr_minutes;
        tm_boot_time.tm_sec = reboot_24hr_seconds;

        PCI_reboot_time = linux_mktime(&tm_boot_time);
        dbg_msg("%s: *24hrreboot = %lu, boot_time = %lu \n", __FUNCTION__,
                PCI_reboot_time, boot_time);

        if (PCI_reboot_time != (time_t) -1 && boot_time != (time_t) -1)
        {
          long long int diff_time = u32subu32(PCI_reboot_time, boot_time);
          /* Check do we have PCI reboot time stamp inside of PCI_REBOOT_GAP window before current boot-up */
          if ((-PCI_REBOOT_GAP < diff_time) && (diff_time < 0))
            retval = TRUE;
        }
      }
    }
    else
      log_err("%s: ERROR: Unknown *24hrreboot value format = '%s'\n",
              __FUNCTION__, _24hrreboot);
  }
  else
    dbg_msg("%s: *24hrreboot not detected\n", __FUNCTION__);
  return retval;
}

static int LoadDefaultConnectionXmlProfile1(connection_profile_t *cf);
static int CreateConnectionXmlProfile1(char *pLocalNet,
                                       connection_profile_t *pConProf);
static int LoadDefaultLocalNetXml(net_profile_t *nf);
static int CreateLocalNetXml(char *pLocalNet, net_profile_t *profile);

static int LoadDefaultWLANpreconfiguredXml(wlan_preconfigured_t *pf);
static int CreateWLANpreconfiguredXml(char *pLocalNet,
                                      wlan_preconfigured_t *profile);

const char szDialConfig[] = "<CONNECTION_PROFILE>"
    " <NAME>\"RAW_DIAL\"</NAME>"
    " <CONNECTION>"
    "   <TYPE>RAW_MODEM</TYPE>"
    "   <DEVICE_NAME>MDM_INT</DEVICE_NAME>"
    "   <PABX_CODE></PABX_CODE>"
    "   <ADDRESS>%s</ADDRESS>"
    "   <TIMEOUT>60000 </TIMEOUT >"
    "   <DIAL_MODE>async</DIAL_MODE>"
    "   <DIAL_TYPE>tone</DIAL_TYPE>"
    "   <MODULATION>v32bis</MODULATION>"
    "   <BLIND_DIALING>no</BLIND_DIALING>"
    "   <COMPRESSION>auto</COMPRESSION>"
    "   <ERROR_CORRECTION>auto</ERROR_CORRECTION>"
    "   <COUNTRY_CODE>1</COUNTRY_CODE>"
    "   <BAUDRATE>115200</BAUDRATE>"
    " </CONNECTION>"
    " <CONNECTION>"
    "   <TYPE>RAW_MODEM</TYPE>"
    "   <DEVICE_NAME>BT_DUN</DEVICE_NAME>"
    "   <PABX_CODE></PABX_CODE>"
    "   <ADDRESS>%s</ADDRESS>"
    "   <TIMEOUT>60000</TIMEOUT >"
    "   <DIAL_MODE>async</DIAL_MODE>"
    "   <DIAL_TYPE>tone</DIAL_TYPE>"
    "   <MODULATION>v32bis</MODULATION>"
    "   <BLIND_DIALING>no</BLIND_DIALING>"
    "   <COMPRESSION>auto</COMPRESSION>"
    "   <ERROR_CORRECTION>auto</ERROR_CORRECTION>"
    "   <COUNTRY_CODE>1</COUNTRY_CODE>"
    "   <BAUDRATE>115200</BAUDRATE>"
    " </CONNECTION>"
    "</CONNECTION_PROFILE>";

int CreateAdkComDialXmlProfile(char *fullFilename, char *pszPhoneNumber)
{
  FILE *fd;

  if (NULL == pszPhoneNumber || 0 == strlen(pszPhoneNumber))
    return 0;

  fd = fopen(fullFilename, "w+");
  if (fd == NULL)
  {
    log_err("%s(): File %s creation error\n", __FUNCTION__, fullFilename);
    return -1;
  }

  fprintf(fd, szDialConfig, pszPhoneNumber, pszPhoneNumber);

  fflush(fd);
  fclose(fd);

  return 0;
}

int CreateAdkComXmlProfile(char *fullFilename, char *url, char *port,
                           char *type)
{
  char buf[128];
  connection_profile_t *cf = NULL;
  net_profile_t *nf = NULL;
  int ret = -1;

  snprintf(buf, sizeof(buf), "%s%s", VHQ_PRIV_FOLDER, "LOCAL_NET.xml");
  if (!FileExists(buf))
  {
    if ((nf = (net_profile_t*) malloc(sizeof(net_profile_t))) != NULL)
    {
      memset((void*) nf, '\0', sizeof(net_profile_t));
      if ((ret = LoadDefaultLocalNetXml(nf)) != 0)
      {
        free(nf);
        return ret;
      }
      if ((ret = CreateLocalNetXml(buf, nf)) != 0)
      {
        free(nf);
        return ret;
      }
      dbg_msg("%s(): File %s created\n", __FUNCTION__, buf);
      free(nf);
    }
    else
    {
      log_err("%s(): Out of memory!\n", __FUNCTION__, buf);
      return ret;
    }
  }
  else
  {
    dbg_err("%s(): File %s already existed\n", __FUNCTION__, buf);
  }
#if 0
  snprintf(buf, sizeof(buf), "%s%s", VHQ_PRIV_FOLDER, "WLAN_NET_preconfigured.xml");
  if (!FileExists(buf)) {
    if ((pf = (wlan_preconfigured_t *)malloc(sizeof(wlan_preconfigured_t))) != NULL)
    {
      memset((void *)pf, '\0', sizeof(wlan_preconfigured_t));
      if ((ret = LoadDefaultWLANpreconfiguredXml(pf)) != 0)
      {
        free(pf);
        return ret;
      }
      if ((ret = CreateWLANpreconfiguredXml(buf, pf)) != 0)
      {
        free(pf);
        return ret;
      }
      free(pf);
    } else {
      DebugMsg(VHQ_LOGGING_LEVEL_ERROR,"%s(): Out of memory!\n", __FUNCTION__, buf);
      return ret;
    }
  } else {
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s(): File %s already existed\n", __FUNCTION__, buf);
  }
#endif
  if ((cf = (connection_profile_t*) malloc(sizeof(connection_profile_t)))
      != NULL)
  {
    uint32 iHTTPxPort = 0;
    bool ssl = FALSE;
    char url_root[256] = { 0 };
    char host[256] = { 0 };

    memset((void*) cf, '\0', sizeof(connection_profile_t));
    if ((ret = LoadDefaultConnectionXmlProfile1(cf)) != 0)
    {
      free(cf);
      return ret;
    }

    /* Extract host and port */
    if (url == NULL)
      VHQGetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root));
    else
      snprintf(url_root, sizeof(url_root), "%s", url);

    if (strncasecmp(url_root, "https:", 6) == 0)
      ssl = TRUE;

    /* PushEventCallback has no ideas which profile to attach */
    if (ssl)
      VHQSetParameterBool(PARAM_SKIP_CONNECT, TRUE, TRUE);

    sscanf(url_root, "%*[^:]://%[^:]:%d[^/]", host, &iHTTPxPort);
    snprintf(cf->ipa, sizeof(cf->ipa), "%s", host);

    /* Process port */
    if (port != NULL)
    {
      snprintf(cf->port, sizeof(cf->port), "%s", port);
    }

    if (type != NULL)
    {
      snprintf(cf->type, sizeof(cf->type), "%s", type);
    }
    else
    {
      char *cType = "TCP";
      snprintf(cf->type, sizeof(cf->type), "%s", cType);
    }

    if ((ret = CreateConnectionXmlProfile1(fullFilename, cf)) != 0)
    {
      free(cf);
      return ret;
    }
    log_dbg("%s(): File %s created\n", __FUNCTION__, fullFilename);
    free(cf);
  }
  else
  {
    log_err("%s(): Out of memory!\n", __FUNCTION__, fullFilename);
    return ret;
  }

  return 0;
}

static int LoadDefaultConnectionXmlProfile1(connection_profile_t *cf)
{
  if (cf == NULL)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): NULL parameter(s)\n",
             __FUNCTION__);
    return -1;
  }

  strncpy(cf->profileName, CONNECTION_PROFILE1_NAME,
          sizeof(cf->profileName) - 1);   // Connection profile name
  //strncpy(cf->type, CONNECTION_PROFILE1_TYPE, sizeof(cf->type) - 1);            // Transport protocol
  strncpy(cf->netProfile, CONNECTION_PROFILE1_NET_PROFILE,
      sizeof(cf->netProfile) - 1);// Network profile location
  strncpy(cf->ipa, CONNECTION_PROFILE1_ADDRESS, sizeof(cf->ipa) - 1);  // Host address
  //strncpy(cf->port, CONNECTION_PROFILE1_PORT, sizeof(cf->port) - 1);                      // Host port
  strncpy(cf->timeOut, CONNECTION_PROFILE1_TIMEOUT, sizeof(cf->timeOut) - 1);  // Connection timeout in ms
  strncpy(cf->sslVersion, CONNECTION_SSL_PROT_VERSION,
          sizeof(cf->sslVersion) - 1);    // SSL version
  strncpy(cf->sslCertFile, CONNECTION_SSL_CERT_FILE,
      sizeof(cf->sslCertFile) - 1);     // SSL cert file location
  strncpy(cf->sslPolicy, CONNECTION_SSL_POLICY, sizeof(cf->sslPolicy) - 1);  // SSL policy
  return 0;
}

static int CreateConnectionXmlProfile1(char *pLocalNet,
                                       connection_profile_t *pConProf)
{
  FILE *fd;

  if ((pLocalNet == NULL) || (pConProf == NULL))
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): NULL parameter(s)\n",
             __FUNCTION__);
    return -1;
  }

  fd = fopen(pLocalNet, "w+");
  if (fd == NULL)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): File %s creation error\n",
             __FUNCTION__, pLocalNet);
    return -1;
  }

  fprintf(fd, "<CONNECTION_PROFILE>\n");
  fprintf(fd, "<NAME>%s</NAME>\n", pConProf->profileName);  // Connection profile name
  fprintf(fd, "<CONNECTION>\n");
  fprintf(fd, "<TYPE>%s</TYPE>\n", pConProf->type);             // Transport protocol
  fprintf(fd, "<NETWORK>%s</NETWORK>\n", pConProf->netProfile);  // Transport protocol
  fprintf(fd, "<ADDRESS>%s</ADDRESS>\n", pConProf->ipa);                // Host address
  fprintf(fd, "<PORT>%s</PORT>\n", pConProf->port);                                 // Host port
  fprintf(fd, "<TIMEOUT>%s</TIMEOUT>\n", pConProf->timeOut);    // Connection timeout in ms
  fprintf(fd, "<SSL_PROT_VERSION>%s</SSL_PROT_VERSION>\n",
          pConProf->sslVersion);  // SSL version
  fprintf(fd, "<SSL_CERT_FILE>%s</SSL_CERT_FILE>\n", pConProf->sslCertFile);  // SSL cert file location
  fprintf(fd, "<SSL_POLICY>%s</SSL_POLICY>\n", pConProf->sslPolicy);  // SSL policy
  fprintf(fd, "</CONNECTION>\n");
  fprintf(fd, "</CONNECTION_PROFILE>\n");
  fflush(fd);
  fclose(fd);

  return 0;
}

static int LoadDefaultLocalNetXml(net_profile_t *nf)
{
  if (nf == NULL)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): NULL parameter(s)\n",
             __FUNCTION__);
    return -1;
  }

  strncpy(nf->profileName, LOCAL_NET_PROFILE_NAME, sizeof(nf->profileName) - 1);    // Connection profile name
  strncpy(nf->type, LOCAL_NET_PROFILE_TYPE, sizeof(nf->type) - 1);  // Transport protocol
  strncpy(nf->devName, LOCAL_NET_PROFILE_DEVICE_NAME, sizeof(nf->devName) - 1);  // Device name
  strncpy(nf->startup, LOCAL_NET_PROFILE_STARTUP_MODE, sizeof(nf->startup) - 1);    // Start up mode
  strncpy(nf->timeOut, LOCAL_NET_PROFILE_TIMEOUT, sizeof(nf->timeOut) - 1);  // Connection timeout in ms
  strncpy(nf->dhcpEnabled, LOCAL_NET_PROFILE_DHCP_ENABLE,
          sizeof(nf->dhcpEnabled) - 1);  // DHCP enabled
  strncpy(nf->ipa, LOCAL_NET_PROFILE_IP_ADDRESS, sizeof(nf->ipa) - 1);  // Host address
  strncpy(nf->mask, LOCAL_NET_PROFILE_NETMASK, sizeof(nf->mask) - 1);  // Net mask
  strncpy(nf->gateway, LOCAL_NET_PROFILE_GATEWAY, sizeof(nf->gateway) - 1);  // Net gateway
  strncpy(nf->dns, LOCAL_NET_PROFILE_DNS_1, sizeof(nf->dns) - 1);         // DNS

  return 0;
}

static int CreateLocalNetXml(char *pLocalNet, net_profile_t *profile)
{
  FILE *fd;

  if ((pLocalNet == NULL) || (profile == NULL))
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): NULL parameter(s)\n",
             __FUNCTION__);
    return -1;
  }

  fd = fopen(pLocalNet, "w+");
  if (fd == NULL)
  {
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s(): File %s creation error\n",
             __FUNCTION__, profile);
    return -1;
  }

  fprintf(fd, "<NETWORK_PROFILE>\n");
  fprintf(fd, "<NAME>\"%s\"</NAME>\n", profile->profileName);  // Connection profile name
  fprintf(fd, "<TYPE>%s</TYPE>\n", profile->type);              // Transport protocol
  fprintf(fd, "<DEVICE_NAME>%s</DEVICE_NAME>\n", profile->devName);  // Device name
  fprintf(fd, "<STARTUP_MODE>%s</STARTUP_MODE>\n", profile->startup);  // Start up mode
  fprintf(fd, "<TIMEOUT>%s</TIMEOUT>\n", profile->timeOut);  // Connection timeout in ms
  fprintf(fd, "<DHCP_ENABLED>%s</DHCP_ENABLED>\n", profile->dhcpEnabled);  // DHCP enabled
  fprintf(fd, "<IP_ADDRESS>%s</IP_ADDRESS>\n", profile->ipa);   // Host address
  fprintf(fd, "<NETMASK>%s</NETMASK>\n", profile->mask);          // Net mask
  fprintf(fd, "<GATEWAY>%s</GATEWAY>\n", profile->gateway);       // Net gateway
  fprintf(fd, "<DNS_1>%s</DNS_1>\n", profile->dns);             // DNS
  fprintf(fd, "</NETWORK_PROFILE>\n");
  fflush(fd);
  fclose(fd);

  return 0;
}


bool GenerateAppParamUpdateEvent(app_param_update_info_t *updateInfo)
{
  bool ret = FALSE;
  uint32 event_mask = 0;

  dbg_trace("%s: +\n", __FUNCTION__);

  if (updateInfo == NULL)
  {
    if (lrecent_param_update_info == NULL)
    {
      dbg_msg("%s: both lrecent_param_update_info & updateInfo are NULL\n",
              __FUNCTION__);

      return ret;
    }

    updateInfo = lrecent_param_update_info;
  }

  if (VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask,
      DEFAULT_BASE) == FALSE)
  {
    dbg_err("%s: PARAM_ALERT_MASK read error\n", __FUNCTION__);

    return ret;
  }

  dbg_msg("%s: Read Alert Mask 0x%08X from Config\n", __FUNCTION__, event_mask);

  if (event_mask & EVENT_APP_PARAM_UPDATE)
  {
    if (updateInfo)
    {
      device_event_content_t device_event_content;

      memset(&device_event_content, 0, sizeof(device_event_content_t));

      device_event_content.event_mask = EVENT_APP_PARAM_UPDATE;
      device_event_content.event_mask = linux_time(NULL);

      memcpy(&device_event_content.device_event_data.param_update_info,
             updateInfo, sizeof(app_param_update_info_t));

      /* App parameter update events are enabled so we need to schedule this now */
      sendEvents(EVENT_APP_PARAM_UPDATE, &device_event_content);
    }
    else
    {
      sendEvents(EVENT_APP_PARAM_UPDATE, NULL);
    }

    if (lrecent_param_update_info)
    {
      free(lrecent_param_update_info);
      lrecent_param_update_info = NULL;
    }

    ret = TRUE;
  }

  dbg_trace("%s: -\n", __FUNCTION__);

  return ret;
}


int ReqParamUploadRead(char **param_buffer, char *param_update_file_name,
                       int *param_update_count, time_t *param_update_time,
                       size_t *tot_param_update_size)
{
  int parmupdate_file_handle;
  int ret = 0;
  int param_str_size = 0;
  struct stat fileStat;

  dbg_trace("%s: ENTER\n", __FUNCTION__);

  /* Clear the incoming variables if available */
  if (param_update_count)
    *param_update_count = 0;
  if (param_update_time)
    *param_update_time = 0;

  if (!strlen(param_update_file_name))
    return 0;

  stat(param_update_file_name, &fileStat);
  dbg_msg("%s: size of file is %d \n", __FUNCTION__, fileStat.st_size);

  parmupdate_file_handle = open(param_update_file_name, O_RDONLY);
  if (parmupdate_file_handle != -1)
  {
    size_t bytes_read;
    app_param_update_list_file_header_t header;

    log_dbg("%s: reading param update file version from %s\n", __FUNCTION__,
            param_update_file_name);

    /* Read the header */
    bytes_read = read(parmupdate_file_handle, (char*) &header,
                      sizeof(app_param_update_list_file_header_t));
    if (bytes_read != sizeof(app_param_update_list_file_header_t))
    {
      close(parmupdate_file_handle);
      log_err(
          "%s ERROR: read %d bytes for app_param_update_list_file_header_t, expected %d bytes\n",
          __FUNCTION__, bytes_read,
          sizeof(app_param_update_list_file_header_t));
      return 0;
    }

    if (header.version == VHQ_PARAM_UPDATE_FILE_CURRENT_VERSION)
    {
      param_str_size = sizeof(app_param_update);
      ret = header.version;
      dbg_msg("%s Parameter File Version is %d, size = %d \n", __FUNCTION__,
              ret, param_str_size);
    }

    if (header.version == VHQ_PARAM_UPDATE_FILE_V1)
    {
      param_str_size = sizeof(app_param_update_v1);
      ret = header.version;
      dbg_msg("%s Parameter File Version is %d, ssize = %d \n", __FUNCTION__,
              ret, param_str_size);
    }

    *param_update_count = header.param_update_count;
    *param_update_time = header.param_update_time;
    dbg_msg("%s Parameter Update time is %d, count = %d \n", __FUNCTION__,
            *param_update_time, *param_update_count);
    *tot_param_update_size = param_str_size * (*param_update_count);

    /* Read the data */
    *param_buffer = malloc(*tot_param_update_size);

    if (*param_buffer == NULL)
    {
      log_err("%s ERROR: error allocating param buffer\n", __FUNCTION__);
      ret = 0;
    }
    else
    {
      dbg_msg("%s: reading %d bytes of data\n", __FUNCTION__,
              *tot_param_update_size);
      bytes_read = read(parmupdate_file_handle, (char*) *param_buffer,
                        *tot_param_update_size);
      if (bytes_read <= 0)
      {
        free(*param_buffer);
        *param_buffer = NULL;
        log_err(
            "%s ERROR: error reading param_update_list from %s (bytes_read = %d)\n",
            __FUNCTION__, bytes_read);
        ret = 0;
      }
      else
      {
        dbg_msg("%s: read %d bytes for param_update_list\n", __FUNCTION__,
                bytes_read);
      }
    }

    close(parmupdate_file_handle);
  }
  else
  {
    log_err("%s ERROR: unable to open param_update_file %s\n", __FUNCTION__,
            param_update_file_name);
  }
  return ret;
}

void ReadParamUpdateFile(app_param_update *param_update_list,
                         size_t param_update_list_size, int *param_update_count,
                         time_t *param_update_time,
                         char *param_update_file_name)
{
  int parmupdate_file_handle;

  dbg_trace("%s: ENTER\n", __FUNCTION__);

  /* Clear the incoming variables if available */
  if (param_update_count)
    *param_update_count = 0;
  if (param_update_time)
    *param_update_time = 0;

  if ((param_update_list == NULL) || (param_update_count == NULL))
  {
    log_err(
        "%s ERROR: param_update_list (0x%08x) or param_update_count (0x%08x) is NULL - returning\n",
        __FUNCTION__, param_update_list, param_update_count);
    return;
  }

  parmupdate_file_handle = open(param_update_file_name, O_RDONLY);
  if (parmupdate_file_handle != -1)
  {
    size_t bytes_read;
    app_param_update_list_file_header_t header;

    log_dbg("%s: reading param update list from %s\n", __FUNCTION__,
            param_update_file_name);

    /* Read the header */
    bytes_read = read(parmupdate_file_handle, (char*) &header,
                      sizeof(app_param_update_list_file_header_t));
    if (bytes_read != sizeof(app_param_update_list_file_header_t))
    {
      close(parmupdate_file_handle);
      log_err(
          "%s ERROR: read %d bytes for app_param_update_list_file_header_t, expected %d bytes\n",
          __FUNCTION__, bytes_read,
          sizeof(app_param_update_list_file_header_t));
      return;
    }

    if (header.version != VHQ_PARAM_UPDATE_FILE_CURRENT_VERSION)
    {
      close(parmupdate_file_handle);
      log_err(
          "%s ERROR: read version %d from param_update file - expected %d\n",
          __FUNCTION__, header.version, VHQ_PARAM_UPDATE_FILE_CURRENT_VERSION);
      return;
    }

    *param_update_count = header.param_update_count;
    if (param_update_time)
      *param_update_time = header.param_update_time;

    /* Read the data */
    dbg_msg("%s: reading %d bytes of data\n", __FUNCTION__,
            param_update_list_size);
    bytes_read = read(parmupdate_file_handle, (char*) param_update_list,
                      param_update_list_size);
    if (bytes_read <= 0)
    {
      close(parmupdate_file_handle);
      log_err(
          "%s ERROR: error reading param_update_list from %s (bytes_read = %d)\n",
          __FUNCTION__, bytes_read);
      return;
    }
    else
    {
      dbg_msg("%s: read %d bytes for param_update_list\n", __FUNCTION__,
              bytes_read);
    }

    dbg_msg("%s: Closing param_update_file\n", __FUNCTION__);
    close(parmupdate_file_handle);
    if (param_update_file_name)
      removeFile(param_update_file_name);
  }
  else
  {
    log_err("%s ERROR: unable to open param_update_file %s\n", __FUNCTION__,
            param_update_file_name);
    return;
  }

  dbg_trace("%s: returning\n", __FUNCTION__);
  return;
}

static int WriteParamUpdateFile(app_param_update *param_update_list,
                                int param_update_count,
                                time_t param_update_time,
                                char *param_update_file_name,
                                size_t param_update_file_name_size)
{
  int ret = -1;
  size_t snprintf_len;
  int parmupdate_file_handle = 0;
  uint32 parmupdate_file_name_counter;

  dbg_trace("%s: ENTER\n", __FUNCTION__);

  if ((param_update_list == NULL) || (param_update_count <= 0))
  {
    log_err(
        "%s ERROR: param_update_list (0x%08x) or param_update_count (%d) is INVALID - returning\n",
        __FUNCTION__, param_update_list, param_update_count);

    return ret;
  }

  parmupdate_file_name_counter = GetParamUpdateFileNum();
  if (parmupdate_file_name_counter == 0)
  {
    log_err(
        "%s ERROR: PARAM_UPDATE Alert mask parameter not present in Agent config INI\n",
        __FUNCTION__);

    return ret;
  }

#ifdef VFI_PLATFORM_ANDROID
  {
    char temp_argfilename[PATH_MAX];

    snprintf(temp_argfilename, sizeof(temp_argfilename), "param_update_%u", parmupdate_file_name_counter);
    PrependPath(AppPath, temp_argfilename, param_update_file_name, param_update_file_name_size);
    snprintf_len = strlen(param_update_file_name);
  }
#else
  snprintf_len = snprintf(param_update_file_name, param_update_file_name_size,
                          "%sparam_update_%u", VHQ_MAIN_FOLDER,
                          parmupdate_file_name_counter);
#endif

  if (snprintf_len >= param_update_file_name_size)
  {
    log_err(
        "%s ERROR: param_update_file_name_size (%s) is too small - requires %d bytes\n",
        __FUNCTION__, param_update_file_name_size, snprintf_len);

    return ret;
  }

  parmupdate_file_handle = open(param_update_file_name,
  O_RDWR | O_CREAT | O_TRUNC,
                                0666);

  if (parmupdate_file_handle != -1)
  {
    int i;
    size_t bytes_written;
    app_param_update_list_file_header_t header;
#ifndef VFI_PLATFORM_ANDROID
    struct stat param_update_file_stat;
#endif

    log_emerg("%s: writing param update list to %s\n", __FUNCTION__,
              param_update_file_name);

    header.version = VHQ_PARAM_UPDATE_FILE_CURRENT_VERSION;
    header.param_update_count = param_update_count;
    header.param_update_time = param_update_time;

    /* Write the header */
    bytes_written = write(parmupdate_file_handle, (char*) &header,
                          sizeof(app_param_update_list_file_header_t));
    if (bytes_written != sizeof(app_param_update_list_file_header_t))
    {
      log_err(
          "%s ERROR: wrote %d bytes for app_param_update_list_file_header_t, expected %d bytes\n",
          __FUNCTION__, bytes_written,
          sizeof(app_param_update_list_file_header_t));
      close(parmupdate_file_handle);

      return ret;
    }

    for (i = 0; i < param_update_count; i++)
    {
      /* Write the data */
      dbg_msg("%s: writing %d bytes of data\n", __FUNCTION__,
              sizeof(app_param_update));
      bytes_written = write(parmupdate_file_handle,
                            (char*) &param_update_list[i],
                            sizeof(app_param_update));
      if (bytes_written != sizeof(app_param_update))
      {
        log_err(
            "%s ERROR: wrote %d bytes for param_update_list[%d], expected %d bytes\n",
            __FUNCTION__, bytes_written, i, sizeof(app_param_update));
        close(parmupdate_file_handle);

        return ret;
      }

      dbg_msg("%s: wrote %d bytes for param_update_list[%d]\n", __FUNCTION__,
              bytes_written, i);
    }

    dbg_msg("%s: Closing param_update_file\n", __FUNCTION__);

#ifndef VFI_PLATFORM_ANDROID
    /* android-tbd: this call is hanging on android for some reason */
    dbg_msg("%s: checking size of param_update_file\n", __FUNCTION__);
    if (stat(param_update_file_name, &param_update_file_stat) == 0)
    {
      dbg_msg("%s: wrote %d bytes to %s\n", __FUNCTION__,
              param_update_file_stat.st_size, param_update_file_name);
    }
#endif

    close(parmupdate_file_handle);
    ret = 0; /* Success */
  }
  else
  {
    log_err("%s ERROR: unable to open param_update_file %s\n", __FUNCTION__,
            param_update_file_name);
  }

  dbg_trace("%s: returning %d\n", __FUNCTION__, ret);

  return ret;
}

int ProcessAppGeneratedParameterUpdate(char *receiver,
                                       char *param_update_info_file,
                                       int param_update_count,
                                       time_t param_update_time,
                                       bool agentRequested,
                                       char *processedFilename)
{
  int spParamFileName = -1;
  int ret = TMS_STATUS_ERROR;
  app_param_update_info_t updateInfo;
  app_param_update param_update_list[param_update_count];

  /* We are not using receiver for now */
  UNUSED(receiver);

  if (param_update_info_file == NULL)
  {
    dbg_err("%s ERROR: param_update_info_file is NULL\n", __FUNCTION__);
    return TMS_STATUS_FILENAME_ERROR;
  }

  if (param_update_count <= 0)
  {
    dbg_err("%s ERROR: param_update_count is INVALID - %d\n", __FUNCTION__,
            param_update_count);
    return TMS_STATUS_EINVAL;
  }

  dbg_msg("%s: param_update_info_file = %s, param_update_count = %d\n",
          __FUNCTION__, param_update_info_file, param_update_count);

  if (*param_update_info_file)
  {
    spParamFileName = open(param_update_info_file, O_RDONLY, 0666);
  }

  if (spParamFileName != -1)
  {
    char *read_buf;

    dbg_msg("%s: Opened %s - allocating %d bytes to read file into memory\n",
            __FUNCTION__, param_update_info_file,
            FileSize(param_update_info_file) + 1);
    read_buf = malloc(FileSize(param_update_info_file) + 1);

    if (read_buf)
    {
      int read_offset = 0;
      int param_update_counter;

      memset(read_buf, 0, FileSize(param_update_info_file) + 1);
      if (read(spParamFileName, read_buf, FileSize(param_update_info_file)))
      {
        memset(&updateInfo, 0, sizeof(app_param_update_info_t));

        /* update the count and time now that we have read the data from the file */
        updateInfo.param_update_count = param_update_count;
        updateInfo.param_update_time = param_update_time;
        bool VersionFound = FALSE;
        dbg_msg(
            "%s: Read file into memory - going through %d parameter updates\n",
            __FUNCTION__, updateInfo.param_update_count);
        for (param_update_counter = 0;
            param_update_counter < updateInfo.param_update_count;
            param_update_counter++)
        {
          int line_index;
          char line_buf[1408];
          char *app_str_start = NULL;
          char *ver_str_start = NULL;
          char *container_str_start = NULL;
          char *name_str_start = NULL;
          char *value_str_start = NULL;
          char *hash_str_start = NULL;
          char *app_start = NULL;
          char *ver_start = NULL;
          char *container_start = NULL;
          char *name_start = NULL;
          char *value_start = NULL;
          char *hash_start = NULL;

          memset(line_buf, 0, sizeof(line_buf));
          line_index = 0;
          while (((uint32) read_offset < FileSize(param_update_info_file))
              && ((read_buf[read_offset] != '\n')
                  && (read_buf[read_offset] != '\r')))
          {
            line_buf[line_index] = read_buf[read_offset];
            read_offset++;
            line_index++;
          }

          /* Clear the entry */
          memset(&param_update_list[param_update_counter], 0,
                 sizeof(app_param_update));

          /* Find the <app> field */
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s\n", __FUNCTION__, "<app>", line_buf);
          app_str_start = strstr(line_buf, "<app>");
          if (app_str_start)
          {
            app_start = app_str_start + strlen("<app>");
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - app_start set to %s (0x%08x)\n", __FUNCTION__, "<app>", app_str_start, app_str_start, app_start, app_start);
          }
          else
          {
            //dbg_err( "%s: Unable to find %s in %s\n", __FUNCTION__, "<app>", line_buf);
          }

          if (app_start)
          {
            /* Find the <version> field */
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s\n", __FUNCTION__, "<version>", app_start);
            ver_str_start = strstr(app_start, "<version>");
            if (ver_str_start)
            {
              VersionFound = TRUE;
              ver_start = ver_str_start + strlen("<version>");
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - ver_start set to %s (0x%08x)\n", __FUNCTION__, "<version>", ver_str_start, ver_str_start, ver_start, ver_start);
            }
            else
            {
              VersionFound = FALSE;
              dbg_msg("%s: Unable to find %s in %s\n", __FUNCTION__,
                      "<version>", app_start);
            }
          }

          if (ver_start)
          {
            /* Find the <container> field */
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s\n", __FUNCTION__, "<container>", ver_start);
            container_str_start = strstr(ver_start, "<container>");
            if (container_str_start)
            {
              container_start = container_str_start + strlen("<container>");
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - container_start set to %s (0x%08x)\n", __FUNCTION__, "<container>", container_str_start, container_str_start, container_start, container_start);
            }
            else
            {
              dbg_msg("%s: Unable to find %s in %s\n", __FUNCTION__,
                      "<container>", ver_start);
            }
          }
          else if (app_start)
          {
            /* Find the <container> field */
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s\n", __FUNCTION__, "<container>", app_start);
            container_str_start = strstr(app_start, "<container>");
            if (container_str_start)
            {
              container_start = container_str_start + strlen("<container>");
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - container_start set to %s (0x%08x)\n", __FUNCTION__, "<container>", container_str_start, container_str_start, container_start, container_start);
            }
            else
            {
              dbg_msg("%s: Unable to find %s in %s\n", __FUNCTION__,
                      "<container>", app_start);
            }
          }

          if (container_start)
          {
            /* Find the <name> field */
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s\n", __FUNCTION__, "<name>", container_start);
            name_str_start = strstr(container_start, "<name>");
            if (name_str_start)
            {
              name_start = name_str_start + strlen("<name>");
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - name_start set to %s (0x%08x)\n", __FUNCTION__, "<name>", name_str_start, name_str_start, name_start, name_start);
            }
            else
            {
              dbg_err("%s: Unable to find %s in %s\n", __FUNCTION__, "<name>",
                      container_start);
            }
          }

          /* Find the <value> field */
          if (name_start)
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s (line_buf = %s)\n", __FUNCTION__, "<value>", name_start, line_buf);
            value_str_start = strstr(name_start, "<value>");
            if (value_str_start)
            {
              value_start = value_str_start + strlen("<value>");
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s at %s (0x%08x) - value_start set to %s (0x%08x)\n", __FUNCTION__, "<value>", value_str_start, value_str_start, value_start, value_start);
            }
            else
            {
              dbg_err("%s: Unable to find %s in %s\n", __FUNCTION__, "<value>",
                      name_start);
            }
          }

          /* Find the <hash> field */
          if (value_start)
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Searching for %s in %s (line_buf = %s)\n", __FUNCTION__, "<hash>", value_start, line_buf);
            hash_str_start = strstr(value_start, "<hash>");
            if (hash_str_start)
              hash_start = hash_str_start + strlen("<hash>");
            else
              dbg_err("%s: Unable to find %s in %s\n", __FUNCTION__, "<hash>",
                      value_start);
          }

          /* Copy the <app> field */
          if (VersionFound)
          {
            if (app_start && ((ver_str_start - app_start) > 0))
            {
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying app from first %d bytes of %s\n", __FUNCTION__, ver_str_start - app_start, app_start);
              memcpy(param_update_list[param_update_counter].app, app_start,
                     (ver_str_start - app_start));
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: app set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].app) ? param_update_list[param_update_counter].app : "empty");
            }
          }
          else
          {
            if (app_start && ((container_str_start - app_start) > 0))
            {
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying app from first %d bytes of %s\n", __FUNCTION__, container_str_start - app_start, app_start);
              memcpy(param_update_list[param_update_counter].app, app_start,
                     (container_str_start - app_start));
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: app set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].app) ? param_update_list[param_update_counter].app : "empty");
            }
          }

          if (VersionFound)
          {
            /* Copy the <version> field */
            if (ver_start && ((container_str_start - ver_start) > 0))
            {
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying version from first %d bytes of %s\n", __FUNCTION__, ver_str_start - ver_start, ver_start);
              memcpy(param_update_list[param_update_counter].version, ver_start,
                     (container_str_start - ver_start));
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: version set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].version) ? param_update_list[param_update_counter].version : "empty");
            }
          }

          /* Copy the <container> field */
          if (container_start && ((name_str_start - container_start) > 0))
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying container from first %d bytes of %s\n", __FUNCTION__, name_str_start - container_start, container_start);
            memcpy(param_update_list[param_update_counter].container,
                   container_start, (name_str_start - container_start));
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: container set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].container) ? param_update_list[param_update_counter].container : "empty");
          }

          /* Copy the <name> field */
          if (name_start && ((value_str_start - name_start) > 0))
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying name from first %d bytes of %s\n", __FUNCTION__, value_str_start - name_start, name_start);
            memcpy(param_update_list[param_update_counter].name, name_start,
                   (value_str_start - name_start));
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: name set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].name) ? param_update_list[param_update_counter].name : "empty");
          }

          /* Copy the <value> field */
          if (value_start && ((hash_str_start - value_start) > 0))
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying value from first %d bytes of %s\n", __FUNCTION__, hash_str_start - value_start, value_start);
            memcpy(param_update_list[param_update_counter].value, value_start,
                   (hash_str_start - value_start));
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: value set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].value) ? param_update_list[param_update_counter].value : "empty");
          }

          if (hash_start)
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying hash value from %s\n", __FUNCTION__, hash_start);
            snprintf(param_update_list[param_update_counter].hash,
                     sizeof(param_update_list[param_update_counter].hash), "%s",
                     hash_start);
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: hash set to %s\n", __FUNCTION__, strlen(param_update_list[param_update_counter].hash) ? param_update_list[param_update_counter].hash : "empty");
          }

          dbg_msg(
              "\tParameter Update %d: application = %s, version = %s, container = %s, name = %s, value = %s, datetime = %lu, hash = %s\n",
              param_update_counter, param_update_list[param_update_counter].app,
              param_update_list[param_update_counter].version,
              param_update_list[param_update_counter].container,
              param_update_list[param_update_counter].name,
              param_update_list[param_update_counter].value, param_update_time,
              param_update_list[param_update_counter].hash);

          while ((read_buf[read_offset] == '\n')
              || (read_buf[read_offset] == '\r'))
          {
            read_offset++;
          }
        }

        /* This is where we need to write the data to a file */
        dbg_msg("%s: calling WriteParamUpdateFile()\n", __FUNCTION__);

        {
          int ret;

          ret = WriteParamUpdateFile(
              param_update_list, param_update_count, param_update_time,
              updateInfo.param_update_list_filename,
              sizeof(updateInfo.param_update_list_filename));

          /* If write fails, no point in continuiing */
          if (ret != 0)
          {
            /* Close the file */
            close(spParamFileName);

            if (read_buf)
              free(read_buf);

            if (*param_update_info_file)
              remove(param_update_info_file);

            return ret;
          }
        }

        if (agentRequested == FALSE)
        {
          /* We have read the file data - now lets send the event */
          if (GenerateAppParamUpdateEvent(&updateInfo) == FALSE)
          {

            if (lrecent_param_update_info == NULL)
            {
              lrecent_param_update_info = (app_param_update_info_t*) calloc(
                  1, sizeof(app_param_update_info_t));
              if (lrecent_param_update_info == NULL)
              {
                log_err(
                    "%s ERROR: malloc failed for lrecent_param_update_info\n",
                    __FUNCTION__);

                /* Close the file */
                close(spParamFileName);

                if (read_buf)
                  free(read_buf);

                if (*param_update_info_file)
                  remove(param_update_info_file);

                return ret;
              }
            }

            dbg_msg("%s: copying updateInfo to lrecent_param_update_info\n",
                    __FUNCTION__);
            memcpy(lrecent_param_update_info, &updateInfo,
                   sizeof(app_param_update_info_t));
          }
          else
          {
            if (lrecent_param_update_info)
            {
              free(lrecent_param_update_info);
              lrecent_param_update_info = NULL;
            }
          }
        }
        else if (processedFilename)
        {
          strcpy(processedFilename, updateInfo.param_update_list_filename);
          dbg_msg("%s: Processed parameter filename = %s \n", __FUNCTION__,
                  processedFilename);
        }
      }

      ret = TMS_STATUS_SUCCESS;
    }
    else
    {
      log_err("%s ERROR: FAILED allocating %d bytes for read_buf\n",
              __FUNCTION__, FileSize(param_update_info_file) + 1);
    }

    /* Close the file */
    close(spParamFileName);

    if (read_buf)
      free(read_buf);
  }

  if (*param_update_info_file)
    remove(param_update_info_file);

  return ret;
}


char* mallocProcessingStatusFileName(event_id_t event_id)
{
  char *pointer = NULL;
  unsigned int current_index = event_id % 16;
  int size = snprintf(NULL, 0, "%s/processing_status_%u.ini", VHQ_TMP,
                      current_index);

  if (size > 0)
  {
    pointer = malloc(size + 1);
    if (pointer)
      sprintf(pointer, "%s/processing_status_%u.ini", VHQ_TMP, current_index);
  }

  return pointer;
}

int utility_PutenvFilename(const char *file_name, const char *section,
                           const char *param, const char *value)
{
  dictionary *d = NULL;
  FILE *f = NULL;
  int ret = -1;

  if (!file_name || !section || !param || !value)
    return ret;

  if (!FileExists(file_name))
  {
    d = dictionary_new(0);
    f = fopen(file_name, "w");
  }
  else
  {
    d = iniparser_load((char*) file_name);
    f = fopen(file_name, "r+");
  }

  if (d && f)
  {
    ret = iniparser_set(d, (char*) section, NULL);
    if (ret == 0)
    {
      char szNameBuf[70] = { 0 };
      sprintf(szNameBuf, "%.32s:%.32s", section, param);
      ret = iniparser_set(d, szNameBuf, (char*) value);
    }
    iniparser_dump_ini(d, f);
  }

  if (f)
    fclose(f);
  if (d)
    iniparser_freedict(d);

  chmod(file_name, 0664);
  return ret;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
