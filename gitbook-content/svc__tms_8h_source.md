---
hidden: true
title: svc_tms.h
---

<a href="svc__tms_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /*
 2  * ADK TMS Agent API for application integration with the TMS Agent
 3  *
 4  * Copyright, 2017 VeriFone Inc.
 5  * 88 W Plumeria Dr
 6  * San Jose, CA 95134
 7  *
 8  * All Rights Reserved. No part of this software may be reproduced,
 9  * transmitted, transcribed, stored in a retrieval system, or
 10  * translated into any language or computer language, in any form
 11  * or by any means electronic, mechanical, magnetic, optical,
 12  * chemical, manual or otherwise, without the prior permission of
 13  * VeriFone Inc.
 14  */
 15 #ifndef SVC_TMS_H
 16 #define SVC_TMS_H
 17 
 18 #include <stdio.h>
 19 #include <stdint.h>
 20 
 21 #include "tms_status.h"
 22 
 23 struct version_t
 24 {
 25  int major;
 26  int minor;
 27  int maint;
 28  int hotfix;
 29  char build[16];
 30 };
 31 
 32 #ifdef __cplusplus
 33 extern "C"
 34 {
 35 #endif
 36 
 37 /*SVC_SERVICE:tms*/
 38 
 39 #if defined _WIN32
 40 # if defined TMS_DLL_EXPORT
 41 # define TMS_API __declspec(dllexport)
 42 # else
 43 # define TMS_API
 44 # endif
 45 #elif defined __GNUC__ && defined TMS_DLL_EXPORT
 46 # define TMS_API __attribute__((visibility ("default")))
 47 #else
 48 # define TMS_API
 49 #endif
 50 
 51 #define TMS_MAX_APP_NAME_LENGTH 32
 52 #define TMS_MAX_APP_PARAMETERS 10000
 53 
 54 #define TMS_MAX_ADDITIONAL_INFO 256
 55 #define TMS_MAX_STRING_LENGTH 128
 56 #define TMS_STRING_LENGTH_64 64
 57 
 58 /* Allow for 32 user registered applications */
 59 #define TMS_MAX_REGISTERED_APPS 32
 60 #define TMS_REG_TIMEOUT_SECS 30
 61 
 62 // defines for tms status
 63 #define TMS_STATUS_SUCCESS 0 
 64 #define TMS_STATUS_ERROR 5000 
 65 #define TMS_STATUS_UNSUPPORTED_FEATURE 5001 
 66 #define TMS_STATUS_CONTENT_AVAILABLE 5002 
 67 #define TMS_STATUS_NO_CONSUMER 5003 
 68 #define TMS_STATUS_FILENAME_ERROR 5004 
 69 #define TMS_STATUS_CONTENT_FAILURE 5005 
 70 #define TMS_STATUS_MSGQ_FAILURE 5006 
 71 #define TMS_STATUS_MSGSND_FAILURE 5007 
 72 #define TMS_STATUS_MSGRCV_FAILURE 5008 
 73 #define TMS_STATUS_APP_EVENT_AVAIL 5009 
 74 #define TMS_STATUS_REQUESTED 5010 
 75 #define TMS_STATUS_REGISTER_FAIL 5011 
 76 #define TMS_STATUS_REGISTER_NAME_TOO_LONG 5012 
 77 #define TMS_STATUS_EINVAL 5013 
 78 #define TMS_STATUS_AGENT_NOT_RUNNING 5014 
 79 #define TMS_STATUS_SERVER_INSTANCE_ERROR 5015 
 80 #define TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR 5016 
 81 #define TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR 5017 
 82 #define TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED 5018 
 83 #define TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED 5019 
 84 #define TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR 5020 
 85 #define TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR 5021 
 86 #define TMS_STATUS_AGENT_BUSY_ERROR 5022 
 87 #define TMS_STATUS_POSTPONED 5023 
 88 #define TMS_STATUS_CANCELLED 5024 
 89 #define TMS_STATUS_AGENT_CONTACTSRV_ERROR 5025 
 90 #define TMS_STATUS_API_SYNC_ERROR 5026 
 91 #define TMS_STATUS_HASH_GEN_MEMORY_ERROR 5027 
 92 #define TMS_STATUS_HASH_GEN_VPDX_ACCESS_ERROR 5028 
 93 #define TMS_STATUS_HASH_GEN_DATA_ACCESS_ERROR 5029 
 94 #define TMS_STATUS_HASH_GEN_FILE_ACCESS_ERROR 5030 
 95 #define TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST 5031 
 96 #define TMS_STATUS_STRING_TOO_LONG 5032 
 97 #define TMS_STATUS_APP_IPC_FAILURE 5033 
 99 /*SVC_STRUCT*/
 100 
 103 struct tmsReturn
 104 {
 105  int status;
 106  int handle;
 107 };
 108 
 109 /* The maximum length for file names or paths */
 110 #define MAX_TMS_FILENAME_LENGTH 4096
 111 
 112 /* The maximum length a transaction type string can be */
 113 #define MAX_TRANSACTION_TYPE_STR_LEN 128
 114 
 115 /* The maximum length of a server instance name */
 116 #define MAX_SERVER_INSTANCE_NAME_LEN 128
 117 
 118 /* The maximum number of lock requests at a time */
 119 #define MAX_SERVER_INSTANCE_LOCK_REQ 10
 120 
 121 /* The maximum number of server instances */
 122 #define MAX_SERVER_INSTANCES 1
 123 
 124 /* The name of the primary server instance */
 125 #define PRIMARY_SERVER_INSTANCE_NAME "primary"
 126 
 127 /* The RESPONSE events come back from TMS Agent in response to requests from the application (tmsEventData.evtType) */
 128 #define TMS_EVT_REGISTER_APP_RESPONSE 1
 129 #define TMS_EVT_UNREGISTER_APP_RESPONSE 2
 130 #define TMS_EVT_CALL_SERVER_RESPONSE 3
 131 #define TMS_EVT_GET_TMS_CONFIG_RESPONSE 4
 132 #define TMS_EVT_SET_TMS_CONFIG_RESPONSE 5
 133 
 134 /* The rest of these events are the TMS Agent notifying the app it needs to do something (tmsEventData.evtType) */
 135 #define TMS_EVT_SET_APP_STATE 6
 136 #define TMS_EVT_SET_APP_INFO 7
 137 #define TMS_EVT_SET_PARM_LIST 8
 138 #define TMS_EVT_GET_FILE 9
 139 #define TMS_EVT_PUT_FILE 10
 140 #define TMS_EVT_DEL_FILE 11
 141 #define TMS_EVT_DO_TRANSACTION 12
 142 
 143 /* This event notifies the app of an event it requested notification for when it registered (tmsEventData.evtType) */
 144 #define TMS_EVT_NOTIFICATION 13
 145 
 146 /* These events are for the app to manage server instances */
 147 #define TMS_EVT_GET_SERVER_INSTANCE 14
 148 #define TMS_EVT_LOCK_SERVER_INSTANCE 15
 149 #define TMS_EVT_RELEASE_SERVER_INSTANCE 16
 150 
 151 /* This event is for app generated alerts */
 152 #define TMS_EVT_APP_ALERT_RESULT 17
 153 
 154 /* This event provides the final result of tms_clearApplicationInfo() call */
 155 #define TMS_EVT_CLEAR_APP_INFO_RESULT 18
 156 
 157 /* This event is for notification app in case of API usage errors */
 158 #define TMS_EVT_API_ERRORS 19
 159 
 160 #define TMS_EVT_DELETE_SERVER_INSTANCE 20
 161 
 162 // defines This event is for responses to app parameter updates
 163 #define TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT 21 
 165 // defines This is for responses to Anti-skimming send event success/failure
 166 #define TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT 22 
 168 // This is for response to Get SW Update event success/failure
 169 #define TMS_EVT_APP_GET_SW_UPDATE 23 
 171 #define TMS_EVT_GET_PARM_FILE 24
 172 
 173 // defines for put file type (tmsEventData.putFileType)
 174 #define TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE 1 
 175 #define TMS_PUT_FILE_TYPE_UNSIGNED_FILE 2 
 176 #define TMS_PUT_FILE_TYPE_MIXED_BUNDLE 3 
 177 #define TMS_PUT_FILE_TYPE_SIGNED_BUNDLE 4 
 178 #define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE 5 
 179 #define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT 6 
 180 #define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL 7 
 181 #define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS 8 
 183 // defines for postInstallAction notification data (tmsEventData.notificationData.postInstallAction)
 184 #define TMS_POST_INSTALL_ACTION_NONE 0
 185 #define TMS_POST_INSTALL_ACTION_REBOOT 1
 186 #define TMS_POST_INSTALL_ACTION_RESTART_APPS 3
 187 
 188 #define TMS_API_CALL_SERVER_UPDATE_CHECK_ONLY_FLAG 0x1
 189 #define TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG 0x2
 190 
 191 /*SVC_STRUCT*/
 195 struct tmsEventData
 196 {
 197  int status;
 198  int evtType;
 199  int handle;
 200  int putFileType;
 201  int numFileEntries;
 202  unsigned char removeFile;
 203  int appStatus;
 204  char filename[MAX_TMS_FILENAME_LENGTH];
 205  char filepath[MAX_TMS_FILENAME_LENGTH];
 206  int eventMask;
 207  char transactionType[MAX_TRANSACTION_TYPE_STR_LEN];
 208  union
 209  {
 210  int downloadPercent;
 211  int downloadRetryCnt;
 212  int downloadCount;
 213  int downloadStartCnt;
 214  int downloadCompletedCnt;
 215  int installStartCnt;
 216  int installCompletedCnt;
 217  } notificationData;
 218 };
 219 
 220 /***************************************************************************************************
 221  * These APIs do not require an application to be registered to use
 222  ****************************************************************************************************/
 223 
 231 /*SVC_PROTOTYPE*/TMS_API struct version_t tms_getVersion(void);
 232 
 238 /*SVC_PROTOTYPE*/TMS_API char* tms_GetVersion(void);
 239 
 250 /*SVC_PROTOTYPE*/TMS_API struct version_t tms_getAgentVersion(void);
 251 
 261 /*SVC_PROTOTYPE*/TMS_API char* tms_GetAgentVersion(void);
 262 
 279 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_callServer(
 280  int secondsToWait /* 0 */);
 281 
 300 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_callServer2(
 301  int secondsToWait /* 0 */, unsigned int iFlags);
 302 
 314 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_getConfigLocation(void);
 315 
 337 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_setNewConfigAvailable(
 338  const char *newTMSConfig /*REQ*/);
 339 
 363 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_setNewConfigAvailableWithTimeout(
 364  const char *newTMSConfig /*REQ*/, int timeout /* 0 */);
 365 
 366 /***************************************************************************************************
 367  * These APIs involve apps registering with the agent for status notifications, file updates, etc.
 368  ****************************************************************************************************/
 369 
 370 /* These masks can be used in the eventNotifyMask parameter of tms_registerApplication. These masks should be ORd
 371  together by the application to tell the TMS Agent which events the application wants to be notified about */
 372 #define TMS_EVENT_NOTIFY_REBOOT_DEVICE 0x00000001
 373 #define TMS_EVENT_NOTIFY_RESTART_APPS 0x00000002
 374 #define TMS_EVENT_NOTIFY_DOWNLOAD_STARTED 0x00000004
 375 #define TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT 0x00000008
 376 #define TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE 0x00000010
 377 #define TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD 0x00000020
 378 #define TMS_EVENT_NOTIFY_MAINTENANCE_END 0x00000040
 379 #define TMS_EVENT_NOTIFY_HEARTBEAT_RESULT 0x00000080
 380 #define TMS_EVENT_NOTIFY_CONTACT_SERVER_START 0x00000100
 381 #define TMS_EVENT_NOTIFY_CONTACT_SERVER_END 0x00000200
 382 #define TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL 0x00000400
 383 #define TMS_EVENT_NOTIFY_CONTENT_UPDATES 0x00000800
 384 #define TMS_EVENT_NOTIFY_CLOCK_UPDATE 0x00001000
 385 #define TMS_EVENT_NOTIFY_SERVER_ERRORS 0x00002000
 386 #define TMS_EVENT_NOTIFY_INSTALL_STATUS 0x00004000
 387 #define TMS_EVENT_NOTIFY_PROCESSING_STATUS 0x00008000
 388 #define TMS_EVENT_NOTIFY_DOWNLOAD_RETRY 0x00010000
 389 #define TMS_EVENT_NOTIFY_NETWORK_ERROR 0x00020000
 390 #define TMS_EVENT_NOTIFY_DOWNLOAD_COUNT 0x00040000
 391 #define TMS_EVENT_NOTIFY_GET_SW_UPDATE 0x00080000
 392 #define TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT 0x00100000
 393 
 394 typedef int (*tmsEventCallback)(struct tmsEventData eventData);
 395 typedef int (*tmsEventCallback2)(struct tmsEventData *eventData, void *data);
 396 
 397 typedef enum _tms_apptype
 398 {
 399  TMS_APP_TYPE_DEFAULT = -1,
 400  TMS_APP_TYPE_OS = 0,
 401  TMS_APP_TYPE_APPLICATION,
 402  TMS_APP_TYPE_SCRIPT,
 403  TMS_APP_TYPE_CP_APPLICATION,
 404  TMS_APP_TYPE_ADK,
 405  TMS_APP_TYPE_PAYMENT_APP,
 406  TMS_APP_TYPE_AGENT,
 407  TMS_APP_TYPE_VALUE_ADD,
 408  TMS_APP_TYPE_CUSTOM,
 409 } tms_apptype_t;
 410 
 547 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication(
 548  const char *appName /*REQ*/, int eventNotifyMask /* 0 */,
 549  unsigned int tmsEvtCb /* 0 */);
 550 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication2(
 551  const char *appName /*REQ*/, int eventNotifyMask /* 0 */,
 552  tmsEventCallback2 tmsEvtCb /* 0 */, void *cbData /* 0 */);
 553 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication3(
 554  const char *appName /*REQ*/, const char *appVersion, tms_apptype_t appType,
 555  const char *appCustomType, const char *additionalInfo,
 556  int eventNotifyMask /* 0 */, tmsEventCallback2 tmsEvtCb /* 0 */,
 557  void *cbData /* 0 */);
 558 
 573 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_unregisterApplication(
 574  const char *appName /*REQ*/);
 575 
 576 /* These defines are used for appState in tms_setAppState() call */
 577 #define APP_STATUS_FREE 1
 578 #define APP_STATUS_BUSY 2
 579 #define APP_STATUS_POSTPONE 3
 580 #define APP_STATUS_CANCEL 4 // cancel operation in progress if possible (Vericenter modes only for now)
 581 
 607 /*SVC_PROTOTYPE*/TMS_API int tms_setApplicationState(int handle /*REQ*/,
 608  int appState /*REQ*/);
 609 
 610 // defines for custom info type (see struct tmsAppParameter)
 611 #define TMS_PARAMETER_TYPE_IDENTIFIER 0x01 
 612 #define TMS_PARAMETER_TYPE_DEVICE_PROFILE 0x02 
 613 #define TMS_PARAMETER_TYPE_DIAGNOSTIC 0x04 
 614 #define TMS_PARAMETER_TYPE_VERICENTER 0x08 
 616 /*SVC_STRUCT*/
 617 
 623 struct tmsAppParameter
 624 {
 625  char parameterName[64];
 626  char parameterValue[256];
 627  int parameterType;
 628 };
 629 
 630 /*SVC_STRUCT*/
 634 struct tmsAppInfo
 635 {
 636  struct tmsAppParameter *parameterList;
 637  int parameterCount;
 638 };
 639 
 667 /*SVC_PROTOTYPE*/TMS_API int tms_setApplicationInfo(
 668  int handle /*REQ*/, struct tmsAppInfo appInfo /*REQ*/);
 669 
 683 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_clearApplicationInfo(void);
 684 
 701 /*SVC_PROTOTYPE*/TMS_API int tms_setApplicationParameterList(
 702  int handle /*REQ*/, int numParamFiles /*REQ*/,
 703  const char *paramInfoFile /*REQ*/);
 704 
 705 #define TMS_MAX_PARAM_UPDATE_COUNT 200
 706 
 707 /*
 708  * The data - accessor callback function is called to obtain each parameter value that needs to be retrieved for
 709  * calculating the hash.That is, each parameter listed in the Parameter Definition(VPDX) File.The parameter value
 710  * must be provided in a UTF - 8 format string if not already in UTF - 8 format.For the most part this means values
 711  * will be provided in ASCII, but consideration must be taken to ensure that 7bit and other multi - byte formats
 712  * are converted correctly.
 713  *
 714  * @param[in] paramName - Name of the configuration parameter in the same format it is supplied in the parameter
 715  * import file format.For example, where the Parameter Definition(VPDX) File defines a prefix,
 716  * a container and the parameter name it is in the format{ prefix } / {container} / {parameter - name}.
 717  * @param[in] paramValue - Pointer to return buffer for parameter value in UTF - 8 format.
 718  * @param[in] paramValueLen - Length of the parameter value in bytes.
 719  *
 720  * @return int = Status of the call. TMS_STATUS_SUCCESS indicates the call was successful.
 721  TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST indicates that the requested parameter doesn't exist
 722  All other return values indicate the parameter requested was valid, it was just unable to be retrieved
 723  */
 724 typedef int (*tmsSetAppParamHashCB)(char *paramName, char *paramValue,
 725  size_t paramValueLen);
 726 
 727 /*
 728  *tms_setApplicationParameterHash() - The application will call this function in response to a SET_PARM_LIST event
 729  *received in its callback.The application will provide the name of the Parameter Definition(VPDX) File defining the
 730  *configuration parameters being managed by VHQ for this application and the data - accessor callback function.
 731  *
 732  * @param[in] handle - This should be the same handle provided in the callback event.
 733  * @param[in] paramDefFile - Filename of the Parameter Definition(VPDX) File.
 734  * @param[in] paramDataCb - Function that Agent will use to access the configuration parameter values.
 735  *
 736  * @return int = Status of the call.TMS_STATUS_SUCCESS indicates the call was successful.All other values indicate a failure.
 737  */
 738 
 739 /*SVC_PROTOTYPE*/TMS_API int tms_setApplicationParameterHash(
 740  int handle /*REQ*/, const char *paramDefFile /*REQ*/,
 741  tmsSetAppParamHashCB paramDataCb /*REQ*/);
 742 
 743 /*
 744  * tms_sendParameterUpdateCallback() - The application will call this function to pass the Agent one or more configuration parameter updates that are to be uploaded to the VHQ Server
 745  * when application receives a TMS_EVT_GET_PARM_FILE event in the registered callback.
 746  *
 747  * @param[in] handle - This should be the same handle provided in the callback event.
 748  * @param[in] parameterUpdates - A structure containing the parameter updates the the required information to be sent to the VHQ server.
 749  *
 750  * @return int - TMS_STATUS_REQUESTED, if success
 751  */
 752 
 753 struct tmsParamUpdateItemNewStruct
 754 {
 755  char Application[64];
 756  char version[32];
 757  char Container[1024];
 758  char Name[256];
 759  char Value[256];
 760  const char *ParamDefFile;
 761  tmsSetAppParamHashCB ParamDataCb;
 762 };
 763 
 764 struct tmsParamUpdateNewStruct
 765 {
 766  int paramUpdateCount;
 767  struct tmsParamUpdateItemNewStruct *paramUpdateList;
 768 };
 769 
 770 TMS_API int tms_sendParameterUpdateCallback(
 771  int handle, struct tmsParamUpdateNewStruct *parameterUpdates);
 772 
 773 /*
 774  * tms_sendParameterUpdate() - The application will call this function to pass the Agent one or more configuration parameter updates that are to be uploaded to the VHQ Server.
 775  *
 776  * @param[in] parameterUpdates - A structure containing the parameter updates the the required information to be sent to the VHQ server.
 777  *
 778  * @return struct tmsReturn = a tmsReturn structure<BR>
 779  * tmsReturn.status = the immediate library status response. TMS_STATUS_REQUESTED
 780  * indicates the library was able to successfully send the parameter update request
 781  * to the VHQ Agent. All other return values indicate a failure.<BR><BR>
 782  * tmsReturn.handle = the handle used for further status tracking in the callback.
 783  * The callback will provide further status in the callback
 784  */
 785 
 786 struct tmsParamUpdateItemStruct
 787 {
 788  char Application[64];
 789  char Container[1024];
 790  char Name[256];
 791  char Value[256];
 792  const char *ParamDefFile;
 793  tmsSetAppParamHashCB ParamDataCb;
 794 };
 795 
 796 struct tmsParamUpdateStruct
 797 {
 798  int paramUpdateCount;
 799  struct tmsParamUpdateItemStruct *paramUpdateList;
 800 };
 801 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendParameterUpdate(
 802  struct tmsParamUpdateStruct *parameterUpdates /*REQ*/);
 803 
 828 /*SVC_PROTOTYPE*/TMS_API int tms_getApplicationFileAvailable(
 829  int handle /*REQ*/, int result /*REQ*/, const char *fileLocation /*REQ*/,
 830  unsigned char removeFile /*REQ*/);
 831 
 850 /*SVC_PROTOTYPE*/TMS_API int tms_setFileOperationResult(
 851  int handle /*REQ*/, int fileOpResult /*REQ*/, int fileOpType /*REQ*/);
 852 
 873 /*SVC_PROTOTYPE*/TMS_API int tms_setFileOperationResultWithDescription(
 874  int handle /*REQ*/, int fileOpResult /*REQ*/, int fileOpType /*REQ*/,
 875  char *additional_info /*REQ*/);
 876 
 890 /*SVC_PROTOTYPE*/TMS_API int tms_setTransactionResult(
 891  int handle /*REQ*/, int transactionResult /*REQ*/);
 892 
 905 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_getServerInstance(void);
 906 
 925 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_lockServerInstance(
 926  char *instanceId /*REQ*/, int mlSecTimeout /*REQ*/);
 927 
 944 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_releaseServerLock(
 945  char *restoreInstanceId /*REQ*/);
 946 
 961 TMS_API struct tmsReturn tms_deleteServerInstance(
 962  char *deleteInstanceId /*REQ*/);
 963 
 964 #define TMS_ALERT_SEVERITY_LOW 1
 965 #define TMS_ALERT_SEVERITY_MEDIUM 2
 966 #define TMS_ALERT_SEVERITY_HIGH 3
 967 
 982 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendApplicationAlert(
 983  char *description /*REQ*/, int severity /*REQ*/, char *details /*REQ*/);
 984 
 999 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendCustomAppEvent(
 1000  char *appName /*REQ*/, char *description /*REQ*/,
 1001  char *details /*OPTIONAL*/);
 1002 
 1003 struct tmsCustomAppEventStruct
 1004 {
 1005  char appName[TMS_MAX_APP_NAME_LENGTH];
 1006  char eventName[TMS_STRING_LENGTH_64];
 1007  char additional_info[TMS_MAX_ADDITIONAL_INFO];
 1008 };
 1009 
 1025 /*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendCustomAppEvent2(
 1026  struct tmsCustomAppEventStruct *appEvent /*REQ*/);
 1027 
 1042 TMS_API struct tmsReturn tms_blgetPOSAgetnInfo(char *buffer, unsigned int size);
 1043 
 1047 TMS_API bool tms_idsMode(void);
 1048 
 1065 TMS_API struct tmsReturn tms_getUpdates(const char *updateType,
 1066  const char *software,
 1067  const char *reference);
 1068 
 1069 #ifdef __cplusplus
 1070 }
 1071 
 1072 #endif
 1073 #endif //SVC_TMS_H
```
