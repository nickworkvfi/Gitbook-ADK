---
title: tmsagt/src/inc/svc_tms.h

---

# tmsagt/src/inc/svc_tms.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[version_t](structversion__t.md)**  |
| struct | **[tmsReturn](structtms_return.md)**  |
| struct | **[tmsEventData](structtms_event_data.md)**  |
| struct | **[tmsAppParameter](structtms_app_parameter.md)**  |
| struct | **[tmsAppInfo](structtms_app_info.md)**  |
| struct | **[tmsParamUpdateItemNewStruct](structtms_param_update_item_new_struct.md)**  |
| struct | **[tmsParamUpdateNewStruct](structtms_param_update_new_struct.md)**  |
| struct | **[tmsParamUpdateItemStruct](structtms_param_update_item_struct.md)**  |
| struct | **[tmsParamUpdateStruct](structtms_param_update_struct.md)**  |
| struct | **[tmsCustomAppEventStruct](structtms_custom_app_event_struct.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[_tms_apptype](svc__tms_8h.md#enum--tms-apptype)** { TMS_APP_TYPE_DEFAULT = -1, TMS_APP_TYPE_OS = 0, TMS_APP_TYPE_APPLICATION, TMS_APP_TYPE_SCRIPT, TMS_APP_TYPE_CP_APPLICATION, TMS_APP_TYPE_ADK, TMS_APP_TYPE_PAYMENT_APP, TMS_APP_TYPE_AGENT, TMS_APP_TYPE_VALUE_ADD, TMS_APP_TYPE_CUSTOM} |
| typedef int(*)(struct tmsEventData eventData) | **[tmsEventCallback](svc__tms_8h.md#typedef-tmseventcallback)**  |
| typedef int(*)(struct tmsEventData *eventData, void *data) | **[tmsEventCallback2](svc__tms_8h.md#typedef-tmseventcallback2)**  |
| typedef enum [_tms_apptype](svc__tms_8h.md#enum--tms-apptype) | **[tms_apptype_t](svc__tms_8h.md#typedef-tms-apptype-t)**  |
| typedef int(*)(char *paramName, char *paramValue, size_t paramValueLen) | **[tmsSetAppParamHashCB](svc__tms_8h.md#typedef-tmssetappparamhashcb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [version_t](structversion__t.md) | **[tms_getVersion](svc__tms_8h.md#function-tms-getversion)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) char * | **[tms_GetVersion](svc__tms_8h.md#function-tms-getversion)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [version_t](structversion__t.md) | **[tms_getAgentVersion](svc__tms_8h.md#function-tms-getagentversion)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) char * | **[tms_GetAgentVersion](svc__tms_8h.md#function-tms-getagentversion)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_callServer](svc__tms_8h.md#function-tms-callserver)**(int secondsToWait) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_callServer2](svc__tms_8h.md#function-tms-callserver2)**(int secondsToWait, unsigned int iFlags) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_getConfigLocation](svc__tms_8h.md#function-tms-getconfiglocation)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_setNewConfigAvailable](svc__tms_8h.md#function-tms-setnewconfigavailable)**(const char * newTMSConfig) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_setNewConfigAvailableWithTimeout](svc__tms_8h.md#function-tms-setnewconfigavailablewithtimeout)**(const char * newTMSConfig, int timeout) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_registerApplication](svc__tms_8h.md#function-tms-registerapplication)**(const char * appName, int eventNotifyMask, unsigned int tmsEvtCb) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_registerApplication2](svc__tms_8h.md#function-tms-registerapplication2)**(const char * appName, int eventNotifyMask, [tmsEventCallback2](svc__tms_8h.md#typedef-tmseventcallback2) tmsEvtCb, void * cbData) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_registerApplication3](svc__tms_8h.md#function-tms-registerapplication3)**(const char * appName, const char * appVersion, [tms_apptype_t](svc__tms_8h.md#typedef-tms-apptype-t) appType, const char * appCustomType, const char * additionalInfo, int eventNotifyMask, [tmsEventCallback2](svc__tms_8h.md#typedef-tmseventcallback2) tmsEvtCb, void * cbData) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_unregisterApplication](svc__tms_8h.md#function-tms-unregisterapplication)**(const char * appName) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setApplicationState](svc__tms_8h.md#function-tms-setapplicationstate)**(int handle, int appState) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setApplicationInfo](svc__tms_8h.md#function-tms-setapplicationinfo)**(int handle, struct [tmsAppInfo](structtms_app_info.md) appInfo) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_clearApplicationInfo](svc__tms_8h.md#function-tms-clearapplicationinfo)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setApplicationParameterList](svc__tms_8h.md#function-tms-setapplicationparameterlist)**(int handle, int numParamFiles, const char * paramInfoFile) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setApplicationParameterHash](svc__tms_8h.md#function-tms-setapplicationparameterhash)**(int handle, const char * paramDefFile, [tmsSetAppParamHashCB](svc__tms_8h.md#typedef-tmssetappparamhashcb) paramDataCb) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_sendParameterUpdateCallback](svc__tms_8h.md#function-tms-sendparameterupdatecallback)**(int handle, struct [tmsParamUpdateNewStruct](structtms_param_update_new_struct.md) * parameterUpdates) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_sendParameterUpdate](svc__tms_8h.md#function-tms-sendparameterupdate)**(struct [tmsParamUpdateStruct](structtms_param_update_struct.md) * parameterUpdates) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_getApplicationFileAvailable](svc__tms_8h.md#function-tms-getapplicationfileavailable)**(int handle, int result, const char * fileLocation, unsigned char removeFile) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setFileOperationResult](svc__tms_8h.md#function-tms-setfileoperationresult)**(int handle, int fileOpResult, int fileOpType) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setFileOperationResultWithDescription](svc__tms_8h.md#function-tms-setfileoperationresultwithdescription)**(int handle, int fileOpResult, int fileOpType, char * additional_info) |
| [TMS_API](svc__tms_8h.md#define-tms-api) int | **[tms_setTransactionResult](svc__tms_8h.md#function-tms-settransactionresult)**(int handle, int transactionResult) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_getServerInstance](svc__tms_8h.md#function-tms-getserverinstance)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_lockServerInstance](svc__tms_8h.md#function-tms-lockserverinstance)**(char * instanceId, int mlSecTimeout) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_releaseServerLock](svc__tms_8h.md#function-tms-releaseserverlock)**(char * restoreInstanceId) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_deleteServerInstance](svc__tms_8h.md#function-tms-deleteserverinstance)**(char * deleteInstanceId) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_sendApplicationAlert](svc__tms_8h.md#function-tms-sendapplicationalert)**(char * description, int severity, char * details) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_sendCustomAppEvent](svc__tms_8h.md#function-tms-sendcustomappevent)**(char * appName, char * description, char * details) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_sendCustomAppEvent2](svc__tms_8h.md#function-tms-sendcustomappevent2)**(struct [tmsCustomAppEventStruct](structtms_custom_app_event_struct.md) * appEvent) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_blgetPOSAgetnInfo](svc__tms_8h.md#function-tms-blgetposagetninfo)**(char * buffer, unsigned int size) |
| [TMS_API](svc__tms_8h.md#define-tms-api) bool | **[tms_idsMode](svc__tms_8h.md#function-tms-idsmode)**(void ) |
| [TMS_API](svc__tms_8h.md#define-tms-api) struct [tmsReturn](structtms_return.md) | **[tms_getUpdates](svc__tms_8h.md#function-tms-getupdates)**(const char * updateType, const char * software, const char * reference) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TMS_API](svc__tms_8h.md#define-tms-api)**  |
|  | **[TMS_MAX_APP_NAME_LENGTH](svc__tms_8h.md#define-tms-max-app-name-length)**  |
|  | **[TMS_MAX_APP_PARAMETERS](svc__tms_8h.md#define-tms-max-app-parameters)**  |
|  | **[TMS_MAX_ADDITIONAL_INFO](svc__tms_8h.md#define-tms-max-additional-info)**  |
|  | **[TMS_MAX_STRING_LENGTH](svc__tms_8h.md#define-tms-max-string-length)**  |
|  | **[TMS_STRING_LENGTH_64](svc__tms_8h.md#define-tms-string-length-64)**  |
|  | **[TMS_MAX_REGISTERED_APPS](svc__tms_8h.md#define-tms-max-registered-apps)**  |
|  | **[TMS_REG_TIMEOUT_SECS](svc__tms_8h.md#define-tms-reg-timeout-secs)**  |
|  | **[TMS_STATUS_SUCCESS](svc__tms_8h.md#define-tms-status-success)**  |
|  | **[TMS_STATUS_ERROR](svc__tms_8h.md#define-tms-status-error)**  |
|  | **[TMS_STATUS_UNSUPPORTED_FEATURE](svc__tms_8h.md#define-tms-status-unsupported-feature)**  |
|  | **[TMS_STATUS_CONTENT_AVAILABLE](svc__tms_8h.md#define-tms-status-content-available)**  |
|  | **[TMS_STATUS_NO_CONSUMER](svc__tms_8h.md#define-tms-status-no-consumer)**  |
|  | **[TMS_STATUS_FILENAME_ERROR](svc__tms_8h.md#define-tms-status-filename-error)**  |
|  | **[TMS_STATUS_CONTENT_FAILURE](svc__tms_8h.md#define-tms-status-content-failure)**  |
|  | **[TMS_STATUS_MSGQ_FAILURE](svc__tms_8h.md#define-tms-status-msgq-failure)**  |
|  | **[TMS_STATUS_MSGSND_FAILURE](svc__tms_8h.md#define-tms-status-msgsnd-failure)**  |
|  | **[TMS_STATUS_MSGRCV_FAILURE](svc__tms_8h.md#define-tms-status-msgrcv-failure)**  |
|  | **[TMS_STATUS_APP_EVENT_AVAIL](svc__tms_8h.md#define-tms-status-app-event-avail)**  |
|  | **[TMS_STATUS_REQUESTED](svc__tms_8h.md#define-tms-status-requested)**  |
|  | **[TMS_STATUS_REGISTER_FAIL](svc__tms_8h.md#define-tms-status-register-fail)**  |
|  | **[TMS_STATUS_REGISTER_NAME_TOO_LONG](svc__tms_8h.md#define-tms-status-register-name-too-long)**  |
|  | **[TMS_STATUS_EINVAL](svc__tms_8h.md#define-tms-status-einval)**  |
|  | **[TMS_STATUS_AGENT_NOT_RUNNING](svc__tms_8h.md#define-tms-status-agent-not-running)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_ERROR](svc__tms_8h.md#define-tms-status-server-instance-error)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR](svc__tms_8h.md#define-tms-status-server-instance-lock-error)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR](svc__tms_8h.md#define-tms-status-server-instance-lock-timeout-error)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED](svc__tms_8h.md#define-tms-status-server-instance-already-locked)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED](svc__tms_8h.md#define-tms-status-server-instance-max-lock-req-exceeded)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR](svc__tms_8h.md#define-tms-status-server-instance-unlock-error)**  |
|  | **[TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR](svc__tms_8h.md#define-tms-status-server-instance-config-load-error)**  |
|  | **[TMS_STATUS_AGENT_BUSY_ERROR](svc__tms_8h.md#define-tms-status-agent-busy-error)**  |
|  | **[TMS_STATUS_POSTPONED](svc__tms_8h.md#define-tms-status-postponed)**  |
|  | **[TMS_STATUS_CANCELLED](svc__tms_8h.md#define-tms-status-cancelled)**  |
|  | **[TMS_STATUS_AGENT_CONTACTSRV_ERROR](svc__tms_8h.md#define-tms-status-agent-contactsrv-error)**  |
|  | **[TMS_STATUS_API_SYNC_ERROR](svc__tms_8h.md#define-tms-status-api-sync-error)**  |
|  | **[TMS_STATUS_HASH_GEN_MEMORY_ERROR](svc__tms_8h.md#define-tms-status-hash-gen-memory-error)**  |
|  | **[TMS_STATUS_HASH_GEN_VPDX_ACCESS_ERROR](svc__tms_8h.md#define-tms-status-hash-gen-vpdx-access-error)**  |
|  | **[TMS_STATUS_HASH_GEN_DATA_ACCESS_ERROR](svc__tms_8h.md#define-tms-status-hash-gen-data-access-error)**  |
|  | **[TMS_STATUS_HASH_GEN_FILE_ACCESS_ERROR](svc__tms_8h.md#define-tms-status-hash-gen-file-access-error)**  |
|  | **[TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST](svc__tms_8h.md#define-tms-status-hash-gen-param-doesnt-exist)**  |
|  | **[TMS_STATUS_STRING_TOO_LONG](svc__tms_8h.md#define-tms-status-string-too-long)**  |
|  | **[TMS_STATUS_APP_IPC_FAILURE](svc__tms_8h.md#define-tms-status-app-ipc-failure)**  |
|  | **[MAX_TMS_FILENAME_LENGTH](svc__tms_8h.md#define-max-tms-filename-length)**  |
|  | **[MAX_TRANSACTION_TYPE_STR_LEN](svc__tms_8h.md#define-max-transaction-type-str-len)**  |
|  | **[MAX_SERVER_INSTANCE_NAME_LEN](svc__tms_8h.md#define-max-server-instance-name-len)**  |
|  | **[MAX_SERVER_INSTANCE_LOCK_REQ](svc__tms_8h.md#define-max-server-instance-lock-req)**  |
|  | **[MAX_SERVER_INSTANCES](svc__tms_8h.md#define-max-server-instances)**  |
|  | **[PRIMARY_SERVER_INSTANCE_NAME](svc__tms_8h.md#define-primary-server-instance-name)**  |
|  | **[TMS_EVT_REGISTER_APP_RESPONSE](svc__tms_8h.md#define-tms-evt-register-app-response)**  |
|  | **[TMS_EVT_UNREGISTER_APP_RESPONSE](svc__tms_8h.md#define-tms-evt-unregister-app-response)**  |
|  | **[TMS_EVT_CALL_SERVER_RESPONSE](svc__tms_8h.md#define-tms-evt-call-server-response)**  |
|  | **[TMS_EVT_GET_TMS_CONFIG_RESPONSE](svc__tms_8h.md#define-tms-evt-get-tms-config-response)**  |
|  | **[TMS_EVT_SET_TMS_CONFIG_RESPONSE](svc__tms_8h.md#define-tms-evt-set-tms-config-response)**  |
|  | **[TMS_EVT_SET_APP_STATE](svc__tms_8h.md#define-tms-evt-set-app-state)**  |
|  | **[TMS_EVT_SET_APP_INFO](svc__tms_8h.md#define-tms-evt-set-app-info)**  |
|  | **[TMS_EVT_SET_PARM_LIST](svc__tms_8h.md#define-tms-evt-set-parm-list)**  |
|  | **[TMS_EVT_GET_FILE](svc__tms_8h.md#define-tms-evt-get-file)**  |
|  | **[TMS_EVT_PUT_FILE](svc__tms_8h.md#define-tms-evt-put-file)**  |
|  | **[TMS_EVT_DEL_FILE](svc__tms_8h.md#define-tms-evt-del-file)**  |
|  | **[TMS_EVT_DO_TRANSACTION](svc__tms_8h.md#define-tms-evt-do-transaction)**  |
|  | **[TMS_EVT_NOTIFICATION](svc__tms_8h.md#define-tms-evt-notification)**  |
|  | **[TMS_EVT_GET_SERVER_INSTANCE](svc__tms_8h.md#define-tms-evt-get-server-instance)**  |
|  | **[TMS_EVT_LOCK_SERVER_INSTANCE](svc__tms_8h.md#define-tms-evt-lock-server-instance)**  |
|  | **[TMS_EVT_RELEASE_SERVER_INSTANCE](svc__tms_8h.md#define-tms-evt-release-server-instance)**  |
|  | **[TMS_EVT_APP_ALERT_RESULT](svc__tms_8h.md#define-tms-evt-app-alert-result)**  |
|  | **[TMS_EVT_CLEAR_APP_INFO_RESULT](svc__tms_8h.md#define-tms-evt-clear-app-info-result)**  |
|  | **[TMS_EVT_API_ERRORS](svc__tms_8h.md#define-tms-evt-api-errors)**  |
|  | **[TMS_EVT_DELETE_SERVER_INSTANCE](svc__tms_8h.md#define-tms-evt-delete-server-instance)**  |
|  | **[TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT](svc__tms_8h.md#define-tms-evt-app-generated-param-update-result)**  |
|  | **[TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT](svc__tms_8h.md#define-tms-evt-app-anti-skimming-test-result)**  |
|  | **[TMS_EVT_APP_GET_SW_UPDATE](svc__tms_8h.md#define-tms-evt-app-get-sw-update)**  |
|  | **[TMS_EVT_GET_PARM_FILE](svc__tms_8h.md#define-tms-evt-get-parm-file)**  |
|  | **[TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE](svc__tms_8h.md#define-tms-put-file-type-unsigned-bundle)**  |
|  | **[TMS_PUT_FILE_TYPE_UNSIGNED_FILE](svc__tms_8h.md#define-tms-put-file-type-unsigned-file)**  |
|  | **[TMS_PUT_FILE_TYPE_MIXED_BUNDLE](svc__tms_8h.md#define-tms-put-file-type-mixed-bundle)**  |
|  | **[TMS_PUT_FILE_TYPE_SIGNED_BUNDLE](svc__tms_8h.md#define-tms-put-file-type-signed-bundle)**  |
|  | **[TMS_PUT_FILE_TYPE_FULL_PARAM_FILE](svc__tms_8h.md#define-tms-put-file-type-full-param-file)**  |
|  | **[TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT](svc__tms_8h.md#define-tms-put-file-type-partial-param-file-flat)**  |
|  | **[TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL](svc__tms_8h.md#define-tms-put-file-type-partial-param-file-hierarchical)**  |
|  | **[TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS](svc__tms_8h.md#define-tms-put-file-type-full-param-file-config-sys)**  |
|  | **[TMS_POST_INSTALL_ACTION_NONE](svc__tms_8h.md#define-tms-post-install-action-none)**  |
|  | **[TMS_POST_INSTALL_ACTION_REBOOT](svc__tms_8h.md#define-tms-post-install-action-reboot)**  |
|  | **[TMS_POST_INSTALL_ACTION_RESTART_APPS](svc__tms_8h.md#define-tms-post-install-action-restart-apps)**  |
|  | **[TMS_API_CALL_SERVER_UPDATE_CHECK_ONLY_FLAG](svc__tms_8h.md#define-tms-api-call-server-update-check-only-flag)**  |
|  | **[TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG](svc__tms_8h.md#define-tms-api-call-server-force-maintenance-flag)**  |
|  | **[TMS_EVENT_NOTIFY_REBOOT_DEVICE](svc__tms_8h.md#define-tms-event-notify-reboot-device)**  |
|  | **[TMS_EVENT_NOTIFY_RESTART_APPS](svc__tms_8h.md#define-tms-event-notify-restart-apps)**  |
|  | **[TMS_EVENT_NOTIFY_DOWNLOAD_STARTED](svc__tms_8h.md#define-tms-event-notify-download-started)**  |
|  | **[TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT](svc__tms_8h.md#define-tms-event-notify-download-percent)**  |
|  | **[TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE](svc__tms_8h.md#define-tms-event-notify-download-complete)**  |
|  | **[TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD](svc__tms_8h.md#define-tms-event-notify-install-download)**  |
|  | **[TMS_EVENT_NOTIFY_MAINTENANCE_END](svc__tms_8h.md#define-tms-event-notify-maintenance-end)**  |
|  | **[TMS_EVENT_NOTIFY_HEARTBEAT_RESULT](svc__tms_8h.md#define-tms-event-notify-heartbeat-result)**  |
|  | **[TMS_EVENT_NOTIFY_CONTACT_SERVER_START](svc__tms_8h.md#define-tms-event-notify-contact-server-start)**  |
|  | **[TMS_EVENT_NOTIFY_CONTACT_SERVER_END](svc__tms_8h.md#define-tms-event-notify-contact-server-end)**  |
|  | **[TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL](svc__tms_8h.md#define-tms-event-notify-contact-server-approval)**  |
|  | **[TMS_EVENT_NOTIFY_CONTENT_UPDATES](svc__tms_8h.md#define-tms-event-notify-content-updates)**  |
|  | **[TMS_EVENT_NOTIFY_CLOCK_UPDATE](svc__tms_8h.md#define-tms-event-notify-clock-update)**  |
|  | **[TMS_EVENT_NOTIFY_SERVER_ERRORS](svc__tms_8h.md#define-tms-event-notify-server-errors)**  |
|  | **[TMS_EVENT_NOTIFY_INSTALL_STATUS](svc__tms_8h.md#define-tms-event-notify-install-status)**  |
|  | **[TMS_EVENT_NOTIFY_PROCESSING_STATUS](svc__tms_8h.md#define-tms-event-notify-processing-status)**  |
|  | **[TMS_EVENT_NOTIFY_DOWNLOAD_RETRY](svc__tms_8h.md#define-tms-event-notify-download-retry)**  |
|  | **[TMS_EVENT_NOTIFY_NETWORK_ERROR](svc__tms_8h.md#define-tms-event-notify-network-error)**  |
|  | **[TMS_EVENT_NOTIFY_DOWNLOAD_COUNT](svc__tms_8h.md#define-tms-event-notify-download-count)**  |
|  | **[TMS_EVENT_NOTIFY_GET_SW_UPDATE](svc__tms_8h.md#define-tms-event-notify-get-sw-update)**  |
|  | **[TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT](svc__tms_8h.md#define-tms-event-notify-custom-app-event)**  |
|  | **[APP_STATUS_FREE](svc__tms_8h.md#define-app-status-free)**  |
|  | **[APP_STATUS_BUSY](svc__tms_8h.md#define-app-status-busy)**  |
|  | **[APP_STATUS_POSTPONE](svc__tms_8h.md#define-app-status-postpone)**  |
|  | **[APP_STATUS_CANCEL](svc__tms_8h.md#define-app-status-cancel)**  |
|  | **[TMS_PARAMETER_TYPE_IDENTIFIER](svc__tms_8h.md#define-tms-parameter-type-identifier)**  |
|  | **[TMS_PARAMETER_TYPE_DEVICE_PROFILE](svc__tms_8h.md#define-tms-parameter-type-device-profile)**  |
|  | **[TMS_PARAMETER_TYPE_DIAGNOSTIC](svc__tms_8h.md#define-tms-parameter-type-diagnostic)**  |
|  | **[TMS_PARAMETER_TYPE_VERICENTER](svc__tms_8h.md#define-tms-parameter-type-vericenter)**  |
|  | **[TMS_MAX_PARAM_UPDATE_COUNT](svc__tms_8h.md#define-tms-max-param-update-count)**  |
|  | **[TMS_ALERT_SEVERITY_LOW](svc__tms_8h.md#define-tms-alert-severity-low)**  |
|  | **[TMS_ALERT_SEVERITY_MEDIUM](svc__tms_8h.md#define-tms-alert-severity-medium)**  |
|  | **[TMS_ALERT_SEVERITY_HIGH](svc__tms_8h.md#define-tms-alert-severity-high)**  |

## Types Documentation

### enum _tms_apptype

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TMS_APP_TYPE_DEFAULT | -1|   |
| TMS_APP_TYPE_OS | 0|   |
| TMS_APP_TYPE_APPLICATION | |   |
| TMS_APP_TYPE_SCRIPT | |   |
| TMS_APP_TYPE_CP_APPLICATION | |   |
| TMS_APP_TYPE_ADK | |   |
| TMS_APP_TYPE_PAYMENT_APP | |   |
| TMS_APP_TYPE_AGENT | |   |
| TMS_APP_TYPE_VALUE_ADD | |   |
| TMS_APP_TYPE_CUSTOM | |   |




### typedef tmsEventCallback

```cpp
typedef int(* tmsEventCallback) (struct tmsEventData eventData);
```


### typedef tmsEventCallback2

```cpp
typedef int(* tmsEventCallback2) (struct tmsEventData *eventData, void *data);
```


### typedef tms_apptype_t

```cpp
typedef enum _tms_apptype tms_apptype_t;
```


### typedef tmsSetAppParamHashCB

```cpp
typedef int(* tmsSetAppParamHashCB) (char *paramName, char *paramValue, size_t paramValueLen);
```



## Functions Documentation

### function tms_getVersion

```cpp
TMS_API struct version_t tms_getVersion(
    void 
)
```


**Return**: [version_t](structversion__t.md) structure

This function is used by an application to get the version of TMS library that the application is linked with, or the shared version of the library that the application is using.


IMPORTANT NOTES: This function could return incomplete Maintenance versions 


### function tms_GetVersion

```cpp
TMS_API char * tms_GetVersion(
    void 
)
```


**Return**: version string 

This function is used by an application application to get the version of TMS library that the application is linked with, or the shared version of the library that the application is using.


### function tms_getAgentVersion

```cpp
TMS_API struct version_t tms_getAgentVersion(
    void 
)
```


**Return**: [version_t](structversion__t.md) structure

This function is used by an application to get the version of the ADK TMS Agent that is running on the device.


IMPORTANT NOTES: 

* This function could return incomplete Maintenance versions 
* This function will communicate to the ADK TMS Agent via pipes/message queues so it may block for a short period of time 


### function tms_GetAgentVersion

```cpp
TMS_API char * tms_GetAgentVersion(
    void 
)
```


**Return**: version string

This function is used by an application to get the version of the ADK TMS Agent that is running on the device.


IMPORTANT NOTES: 

* This function will communicate to the ADK TMS Agent via pipes/message queues so it may block for a short period of time 


### function tms_callServer

```cpp
TMS_API struct tmsReturn tms_callServer(
    int secondsToWait
)
```


**Parameters**: 

  * **secondsToWait** = the number of seconds from now to contact the server. This can be used to schedule server contacts for the future. A value of 0 indicates to contact the server right now.


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the contact server request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function is used by the application to call the management server. The app does not need to be registered in order to request a TMS call. If the app is registered, it will get status information about the server communication in its callback.


### function tms_callServer2

```cpp
TMS_API struct tmsReturn tms_callServer2(
    int secondsToWait,
    unsigned int iFlags
)
```


**Parameters**: 

  * **secondsToWait** = the number of seconds from now to contact the server. This can be used to schedule server contacts for the future. A value of 0 indicates to contact the server right now. 
  * **iFlags** = coming in through the API is an int while iFlags in the request_msg structure is only a bool. So once we get more than 8 flags in this API we will need to do handle this


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the contact server request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function is used by the application to call the management server. The app does not need to be registered in order to request a TMS call. If the app is registered, it will get status information about the server communication in its callback.


### function tms_getConfigLocation

```cpp
TMS_API struct tmsReturn tms_getConfigLocation(
    void 
)
```


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the contact server request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function is called by the application to request the location of the VHQ configuration file.


### function tms_setNewConfigAvailable

```cpp
TMS_API struct tmsReturn tms_setNewConfigAvailable(
    const char * newTMSConfig
)
```


**Parameters**: 

  * **newTMSConfig** = the full path to the new TMS configuration file.
**NOTE: The agent must have read permissions on the temporary file for this to work correctly.**


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the contact server request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function can be used by the application to tell the VHQ agent to load and run with a new configuration. When using this function, the application should first call the [tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation) function to get the location of the current VHQ configuration. The application should then make a temporary copy of the current VHQ configuration and edit the temporary copy for any configuration updates the application wants to make. After making the changes to the temporary file, the [tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable) function should be called and the temporary file with the requested changes should be passed to this function. The agent will load the new changes and store them in its permanent configuration. The configuration changes will occur in run-time and no reboot is required. The App does not need to be registered in order to request a TMS config update


### function tms_setNewConfigAvailableWithTimeout

```cpp
TMS_API struct tmsReturn tms_setNewConfigAvailableWithTimeout(
    const char * newTMSConfig,
    int timeout
)
```


**Parameters**: 

  * **newTMSConfig** = the full path to the new TMS configuration file.
**NOTE: The agent must have read permissions on the temporary file for this to work correctly.**
  * **timeout** = time to wait (in seconds) before giving up because the agent might be busy.
**NOTE: This parameter only applies to tms_setNewConfigAvailableWithTimeout API.**


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the contact server request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function can be used by the application to tell the VHQ agent to load and run with a new configuration. When using this function, the application should first call the [tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation) function to get the location of the current VHQ configuration. The application should then make a temporary copy of the current VHQ configuration and edit the temporary copy for any configuration updates the application wants to make. After making the changes to the temporary file, the [tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable) function should be called and the temporary file with the requested changes should be passed to this function. The agent will load the new changes and store them in its permanent configuration. The configuration changes will occur in run-time and no reboot is required. The App does not need to be registered in order to request a TMS config update


### function tms_registerApplication

```cpp
TMS_API struct tmsReturn tms_registerApplication(
    const char * appName,
    int eventNotifyMask,
    unsigned int tmsEvtCb
)
```


**Parameters**: 

  * **appName** = A name used by the VHQ agent to help identify the different applications that are registered. The app name is used for identification purposes, as well as parameter management.The registered app name MUST match the application name specified in Secure Installer bundle for V/OS devices, or the application name specified in Manifest files for VX devices. This name is case sensitive so it must match exactly.
  * **eventNotifyMask** = A mask provided by the application to configure the events that the application wants to be notified of by the VHQ agent. The application can request notification for these types of events:

 o Reboot (0x00000001) = Notify the application before the agent performs a reboot. If registered for this notification, the application will have to approve a reboot which will give the app time to perform any required tasks before the reboot occurs.

 o Restart Applications (0x00000002) = Notify the application before the agent performs a restart of all applications. If registered for this notification, the application will have to approve the application restart which will give the app time to perform any required tasks before the application restarts.

 o Download Started (0x00000004) = Notify the application when the agent begins a download.

 o Download Percent (0x00000008) = Notify the application with updates about the progress of an ongoing download (this is not available in the current version of the VHQ Agent but will be added in future versions).

 o Download Completed (0x00000010) = Notify the application when the agent completes a download.

 o Install Download (0x00000020) = Notify the application before a download is installed by the agent. If registered for this notification, the application will have to approve the install which will give the app time to perform any required tasks before the device is possibly restarted as part of the installation.

 o Maintenance End (0x00000040) = Notify the application when all maintenance activities for a given heartbeat have been completed.

 o Heartbeat Result (0x00000080) = Notify the application with the final result of heartbeat messages to the server

 o Contact Server Start (0x00000100) = Notify the application when contact to the server is beginning.

 o Contact Server End (0x00000200) = Notify the application when all contact to the server for a given session has completed.

 o Contact Server Approval (0x00000400) = When registered for this notification, the application will have to approve the agent contacting the server. This is useful for dial-up connections so that the agent will not try to use the modem while the application is using it.

 o Application Content Update Available (0x00000800) = Notify the application when content is available for the application. This notification must be enabled for the application to support VHQ content management.

 o Clock Update (0x00001000) = Notify the application before the agent performs a clock update. If registered for this notification, the application will have to approve the clock update so the app can adjust any timers, etc.

 o Server Errors (0x00002000) = Notify the application when a communication with the server fails, including an error code.

 o Processing Status (0x00008000) = Notify the application with processing.ini file, this provides device, message and server status after an operation.

 o Download Retry (0x00010000) = Notify the application with the retry count of downloads.

 o Network Error (0x00020000) = Notify the application if there are any network errors.

 o Download Count (0x00040000) - Notify the application with the number of downloads in a MP

 o Get Software Update (0x00080000) - Notify the application if MMS Get Software Update is successful.
  * **tmsEvtCb** = A callback function provided by the application to handle events sent from the agent to the application. The prototype for the callback function is: `int tmsEventCallback(struct tmsEventData eventData);` The following events can be sent from the agent to the application and need to be handled by the application in the callback:
**All registered applications must handle these events**

 o SET_APP_INFO (eventData.evtType = 7) = event used by the agent to request application specific parameters to be sent up in VHQ messages to the VHQ server. The application should call [tms_setApplicationInfo()](svc__tms_8h.md#function-tms-setapplicationinfo) in response to this message. DeviceId would be an example of a parameter passed from the application to the agent

 o SET_PARM_LIST (eventData.evtType = 8) = event used by the agent to request a list of application files that can be managed through VHQ. The application should call [tms_setApplicationParameterList()](svc__tms_8h.md#function-tms-setapplicationparameterlist) in response to this message. The list of files provided is mainly used for parameter management but can be used for more than that. At a minimum, the app should call [tms_setApplicationParameterList()](svc__tms_8h.md#function-tms-setapplicationparameterlist) with numParamFiles=0 and paramInfoFile=NULL
**If the app registers with any of these notification flags set in its register call(TMS_EVENT_NOTIFY_REBOOT_DEVICE, TMS_EVENT_NOTIFY_RESTART_APPS, TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD, TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL or TMS_EVENT_NOTIFY_CLOCK_UPDATE), then it needs to handle this event:**

 o SET_APP_STATE (eventData.evtType = 6) = event used by the agent to request the application state (whether it is busy or free). The application should call [tms_setApplicationState()](svc__tms_8h.md#function-tms-setapplicationstate) in response to this message.
**If content management, parameter management, or being able to upload app files to the server is desired, then these events should be handled:**

 o GET_FILE (eventData.evtType = 9) = event used by the agent to retrieve a file from the application. This event is used for parameter management. The application should call [tms_getApplicationFileAvailable()](svc__tms_8h.md#function-tms-getapplicationfileavailable) with the shared location of the parameter file in response to this message.

 o PUT_FILE (eventData.evtType = 10) = event used by the agent to send a file to the application. This event is used for parameter management and content management. The application should call [tms_setFileOperationResult()](svc__tms_8h.md#function-tms-setfileoperationresult) in response to this message.

 o DEL_FILE (eventData.evtType = 11) = event used by the agent to request the application to delete one of its files. The application should call [tms_setFileOperationResult()](svc__tms_8h.md#function-tms-setfileoperationresult) in response to this message. It is up to the application as to whether it will actually delete the file. For instance, the app should respond with an error if the DEL_FILE event is trying to delete a file that should not be deleted.

 o DO_TRANSACTION (eventData.evtType = 12) = event used by the agent to request the application to do a transaction (such as a daily clearance or diagnostics). The application should call [tms_setTransactionResult()](svc__tms_8h.md#function-tms-settransactionresult) in response to this message.
**These events can be handled by the application if it wants to keep up to date with the status of the TMS Agent, and what it is doing. No response is required from the app for these events**

 o REGISTER_APP_RESPONSE (eventData.evtType = 1) = event to provide the result of the [tms_registerApplication()](svc__tms_8h.md#function-tms-registerapplication) request.

 o UNREGISTER_APP_RESPONSE (eventData.evtType = 2) = event to provide the result of the [tms_unregisterApplication()](svc__tms_8h.md#function-tms-unregisterapplication) request. This event will only get sent if the unregister call fails.

 o CALL_SERVER_RESPONSE (eventData.evtType = 3) = event to provide the result of a [tms_callServer()](svc__tms_8h.md#function-tms-callserver) request.

 o GET_TMS_CONFIG_RESPONSE (eventData.evtType = 4) = event to provide the result of a [tms_getConfigLocation()](svc__tms_8h.md#function-tms-getconfiglocation) request.

 o SET_TMS_CONFIG_RESPONSE (eventData.evtType = 5) = event to provide the result of a [tms_setNewConfigAvailable()](svc__tms_8h.md#function-tms-setnewconfigavailable) request.

 o EVENT_NOTIFICATION (eventData.evtType = 13) = event sent by the agent to notify the application of the different events the app requested notificaction for in its register call.


 *NOTE: For the events that the agent expects a response from, the agent will timeout after 30 seconds of waiting for the response. The events that the agent expects a response from are: SET_APP_INFO, SET_PARM_LIST, GET_FILE, PUT_FILE, DEL_FILE and DO_TRANSACTION. So if the application is not calling response APIs directly in the callback, it must call the response API within 30 seconds of receiving the event in the callback. SET_APP_STATE expects a response as well but the agent will wait 5 minutes for the application to respond to a SET_APP_STATE event.

 *NOTE2: The 30 second timeout and 5 minute timeout are default timeout values. These are configurable via the "AppIfc Event Response Timeout" and "AppIfc SetAppState Timeout" VHQ parameters (respectively).


**Return**: struct [tmsReturn](structtms_return.md) - a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the register request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback

This function is used by the application to register itself with the VHQ agent. When registering, the application provides its name, a mask specifying the types of events the application would like to be notified of, and a callback function for handling events sent to the app from the VHQ agent.


IMPORTANT NOTES: 

* The service will identify the caller of the registration function so no indentification parameters are necessary 


### function tms_registerApplication2

```cpp
TMS_API struct tmsReturn tms_registerApplication2(
    const char * appName,
    int eventNotifyMask,
    tmsEventCallback2 tmsEvtCb,
    void * cbData
)
```


### function tms_registerApplication3

```cpp
TMS_API struct tmsReturn tms_registerApplication3(
    const char * appName,
    const char * appVersion,
    tms_apptype_t appType,
    const char * appCustomType,
    const char * additionalInfo,
    int eventNotifyMask,
    tmsEventCallback2 tmsEvtCb,
    void * cbData
)
```


### function tms_unregisterApplication

```cpp
TMS_API struct tmsReturn tms_unregisterApplication(
    const char * appName
)
```


**Parameters**: 

  * **appName** = The name the app provided in its registration call.


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the unregister request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will only get status messages with this handle only in the case where the unregistration fails. Upon successful unregistration, the only response the application will get is TMS_STATUS_REQUESTED status in response to this call. 

This function is used by an application to unregister itself with the TMS Agent


### function tms_setApplicationState

```cpp
TMS_API int tms_setApplicationState(
    int handle,
    int appState
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. If using this function pre-emtively, the handle should be set to -1. 
  * **appState** = the state of the app. APP_STATUS_FREE if the application is free, or APP_STATUS_BUSY if the application is busy.


**Return**: int - status of the call. TMS_STATUS_REQUESTED indicates the call was successful. All other values indicate a failure. 

The application will call this function in response to a SET_APP_STATE event received in its callback. If the application is not busy, it will respond with a FREE status. If the application is busy, it can respond with a BUSY status which will prevent certain agent operations (like a reboot) from taking place. After the application completes what is causing it to respond with BUSY, it will call this function again with the FREE status. The application will have 5 minutes to respond with the FREE status after responding with the BUSY status. If the application does not respond with a FREE status within 5 minutes of responding with BUSY status, the agent will continue with its planned operation.


 This function can also be called at any time by the app to set its BUSY or FREE state. This will allow the app to pre-emtively cause certain operations (like reboot) from occurring. So if the app sets its state to BUSY without a SET_APP_STATE event being received in the callback, the agent will already know the app is BUSY and wont send the SET_APP_STATE in situations when it normally would (like just before rebooting the terminal). Instead the agent will wait for the app to set its state to FREE before proceeding. For instance, before the app does its daily clearance, it can pre-emtively use this function to set its state to BUSY. When the app is complete with the daily clearance, it can the use this function to set its state to FREE again.

 NOTE: The 5 minute timeout to set FREE status is the default value, but is configurable in the "AppIfc Busy Response Timeout" VHQ parameter.


### function tms_setApplicationInfo

```cpp
TMS_API int tms_setApplicationInfo(
    int handle,
    struct tmsAppInfo appInfo
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **appInfo** = a structure containing all of the application specific parameters that can be sent to the VHQ server. There are 3 types of parameters that can be sent to the server: TMS_PARAMETER_TYPE_IDENTIFIER = IDENTIFIER parameters are included in every message that the agent sends to the server. Examples include "DeviceId" or "StoreId". TMS_PARAMETER_TYPE_DEVICE_PROFILE = DEVICE_PROFILE parameters are not currently sent to the server TMS_PARAMETER_TYPE_DIAGNOSTIC = DIAGNOSTIC parameters are sent to the server in response to a special GetDiagData request made by the server. The server currently makes the special GetDiagData request once per day. Examples would be statistics collected by the application.


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response to a SET_APP_INFO event received in its callback. This will allow the application to send application specific parameters to the agent that can be sent in VHQ messages to the server. There are three types of parameters that the application can send to the agent: IDENTIFIER, DEVICE_PROFILE and DIAGNOSTIC parameters. The eventMask field of the event will contain the mask of the parameters the agent is requesting. The application should provide only the type of parameters requested by the agent in the eventMask field. One example of this would be the Device ID that is controlled by the application. Another example would be the Lane/Store info that is controlled by the POS system , but can be retrieved by the application.


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_SET_APP_INFO request from the agent. 


### function tms_clearApplicationInfo

```cpp
TMS_API struct tmsReturn tms_clearApplicationInfo(
    void 
)
```


**Return**: int = status of the call. TMS_STATUS_REQUESTED indicates the call was successful (but not necessarily the clearing of the cached data). The final result of the call will come in the registered callback handler with TMS_EVT_CLEAR_APP_INFO_RESULT. All other values indicate a failure 

The application can call this function to clear any parameters the app has sent to the agent that the agent has cached. Since the agent will only request application info periodically, this API can be used when the app needs to change a parameter it has already provided to the agent. After calling this API, the agent cached information for the app will be cleared, and the agent will be forced to request the application info the next time it needs it with the TMS_EVT_SET_APP_INFO event


### function tms_setApplicationParameterList

```cpp
TMS_API int tms_setApplicationParameterList(
    int handle,
    int numParamFiles,
    const char * paramInfoFile
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **numParamFiles** = the number of parameter files described in paramInfoFile. 
  * **paramInfoFile** = a file that lists all of the applications parameter files, as well as a hash value for each of the parameter files. this file will contain a line for each paramter file each line will have 3 whitespace separated fields - Name, Hash Algo, Hash i.e. "TMS.ini SHA1 0ad19e6f4424a459b625fb38de402226b012e8d7"


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response to a SET_PARM_LIST event received in its callback. The application can provide a filename that contains a list of parameter files that can be managed through VHQ in its response.


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_SET_PARM_LIST request from the agent 


### function tms_setApplicationParameterHash

```cpp
TMS_API int tms_setApplicationParameterHash(
    int handle,
    const char * paramDefFile,
    tmsSetAppParamHashCB paramDataCb
)
```


### function tms_sendParameterUpdateCallback

```cpp
TMS_API int tms_sendParameterUpdateCallback(
    int handle,
    struct tmsParamUpdateNewStruct * parameterUpdates
)
```


### function tms_sendParameterUpdate

```cpp
TMS_API struct tmsReturn tms_sendParameterUpdate(
    struct tmsParamUpdateStruct * parameterUpdates
)
```


### function tms_getApplicationFileAvailable

```cpp
TMS_API int tms_getApplicationFileAvailable(
    int handle,
    int result,
    const char * fileLocation,
    unsigned char removeFile
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **result** = the status of the application getting the file. If the agent requests a file that the application should not share, the app should respond with an error. TMS_STATUS_SUCCESS indicates getting the file was successful, any other value indicates an error 
  * **fileLocation** = the shared location where the application put the requested file. This only needs to be set if the file retrieval was successful. 
  * **removeFile** = a boolean telling the agent whether it should delete the file when it is finished with it. For cases where the app copies a file from its private area to a shared area, this should be set to TRUE.


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response to a GET_FILE event received in its callback. When the agent requests a file with GET_FILE, the application will put the file in a shared location and use this call to notify the agent that the file is available.
**NOTE: the shared location file must have read permissions for the agent. Also, this is currently only used for parameter management.**


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_GET_FILE request from the agent 


### function tms_setFileOperationResult

```cpp
TMS_API int tms_setFileOperationResult(
    int handle,
    int fileOpResult,
    int fileOpType
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **fileOpResult** = the status of the PUT_FILE or DEL_FILE request. TMS_STATUS_SUCCESS should be used to indicate the operation was successful. Any other status response indicates to the agent that the file operation failed. 
  * **fileOpType** = this should be the same event type provided in the callback event. For PUT_FILE requests, it should be PUT_FILE and for DEL_FILE requests it should be DEL_FILE.


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response to a PUT_FILE or DEL_FILE event received in its callback. When the agent requests a PUT_FILE, the application should copy the file from the location provided by the event, into its own directory (if allowed). When the agent requests a DEL_FILE, the application should delete the specified file (if allowed). If the PUT_FILE or DEL_FILE is trying to operate on a file that should not be operated on, then the app should respond with an error.


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_PUT_FILE or TMS_EVT_DEL_FILE request from the agent 


### function tms_setFileOperationResultWithDescription

```cpp
TMS_API int tms_setFileOperationResultWithDescription(
    int handle,
    int fileOpResult,
    int fileOpType,
    char * additional_info
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **fileOpResult** = the status of the PUT_FILE or DEL_FILE request. TMS_STATUS_SUCCESS should be used to indicate the operation was successful. Any other status response indicates to the agent that the file operation failed. 
  * **fileOpType** = this should be the same event type provided in the callback event. For PUT_FILE requests, it should be PUT_FILE and for DEL_FILE requests it should be DEL_FILE. 
  * **additional_info** = this is a string, mostly used for error cases, that can be relayed to the server with the result. Maximum length of this string should be 256 characters.


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response with description to a PUT_FILE or DEL_FILE event received in its callback. When the agent requests a PUT_FILE, the application should copy the file from the location provided by the event, into its own directory (if allowed). When the agent requests a DEL_FILE, the application should delete the specified file (if allowed). If the PUT_FILE or DEL_FILE is trying to operate on a file that should not be operated on, then the app should respond with an error.


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_PUT_FILE or TMS_EVT_DEL_FILE request from the agent 


### function tms_setTransactionResult

```cpp
TMS_API int tms_setTransactionResult(
    int handle,
    int transactionResult
)
```


**Parameters**: 

  * **handle** = this should be the same handle provided in the callback event. 
  * **transactionResult** = the status of the DO_TRANSACTION request. TMS_STATUS_SUCCESS should be used to indicate the transaction was successful. Any other status response indicates to the agent that the transaction failed.


**Return**: int = status of the call. TMS_STATUS_SUCCESS indicates the call was successful. All other values indicate a failure.

The application will call this function in response to a DO_TRANSACTION event received in its callback function. The application will report the result of the requested transaction in this function call.


IMPORTANT NOTES: This is used by the application to respond to TMS_EVT_DO_TRANSACTION request from the agent 


### function tms_getServerInstance

```cpp
TMS_API struct tmsReturn tms_getServerInstance(
    void 
)
```


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the get server instance request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide further status including the name of the current server instance. 

The application will call this function to get the name of the current server instance being used


### function tms_lockServerInstance

```cpp
TMS_API struct tmsReturn tms_lockServerInstance(
    char * instanceId,
    int mlSecTimeout
)
```


**Parameters**: 

  * **instanceId** = the name of the server instance to set the agent to if the lock is obtained successfully 
  * **mlSecTimeout** = number of milliseconds to wait for the lock. If the lock can't be obtained in the time specified, an error will be returned. A value of 0 for this means to wait forever.


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the lock server instance request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide further status including the status of the lock and the name of the current instanceID.

The application will call this function to lock the server instance to the provided instanceId. A timeout can be provided and if the lock can't be obtained in the time period specified, the call will fail.


IMPORTANT NOTES: The current instanceID being used will be returned in the callback. That name can be used in the [tms_releaseServerLock()](svc__tms_8h.md#function-tms-releaseserverlock) call to restore the instance that was in use before the app requested the lock on the new server 


### function tms_releaseServerLock

```cpp
TMS_API struct tmsReturn tms_releaseServerLock(
    char * restoreInstanceId
)
```


**Parameters**: 

  * **restoreInstanceId** = the name of the server instance to restore when the lock is released (obtained in the callback response to [tms_lockServerInstance()](svc__tms_8h.md#function-tms-lockserverinstance) call)


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the release server lock request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide final status of releasing the lock

The application will call this function to release a lock it has obtained on server instances


IMPORTANT NOTES: If the app wants to restore the previous instance, it can pass the instanceID that was returned from the lock call to this API. The agent will restore the previous instance after the unlock request is processed. 


### function tms_deleteServerInstance

```cpp
TMS_API struct tmsReturn tms_deleteServerInstance(
    char * deleteInstanceId
)
```


**Parameters**: 

  * **deleteInstanceId** = the name of the server instance which should be completely removed from device


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the release server lock request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide final status of releasing the lock

The application will call this function to remove all content of mentioned server instance


IMPORTANT NOTES: App has to unlock instance before it can be deleted. Active and Primary instances can't be removed. 


### function tms_sendApplicationAlert

```cpp
TMS_API struct tmsReturn tms_sendApplicationAlert(
    char * description,
    int severity,
    char * details
)
```


**Parameters**: 

  * **description** = A short description of the alert (MAX 256 characters) 
  * **severity** = The severity of the alert (valid values are TMS_ALERT_SEVERITY_LOW, TMS_ALERT_SEVERITY_MEDIUM or TMS_ALERT_SEVERITY_HIGH) 
  * **details** = Optional string to provide details about the alert to the server (MAX 511 characters)


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the alert request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide further status including the status of sending the alert to the server 

The application can call this function to generate an application based alert on the server


### function tms_sendCustomAppEvent

```cpp
TMS_API struct tmsReturn tms_sendCustomAppEvent(
    char * appName,
    char * description,
    char * details
)
```


**Parameters**: 

  * **appName** = Application Name 
  * **description** = A short description of the event (MAX 256 characters) 
  * **details** = Optional string to provide details about the event to the server (MAX 256 characters)


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the alert request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide further status including the status of sending the event to the server 

The application can call this function to generate an application based custom event on the server


### function tms_sendCustomAppEvent2

```cpp
TMS_API struct tmsReturn tms_sendCustomAppEvent2(
    struct tmsCustomAppEventStruct * appEvent
)
```


**Parameters**: 

  * **[tmsCustomAppEventStruct](structtms_custom_app_event_struct.md)** = Structure to pass the event information appName (Application Name (MAX 32 characters)) eventName (The event name detected by Server (MAX 64 characters)) additional_info (string to provide details about the event to the server (MAX 256 characters))


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the alert request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback will provide further status including the status of sending the event to the server 

The application can call this function to generate an application based custom event on the server


### function tms_blgetPOSAgetnInfo

```cpp
TMS_API struct tmsReturn tms_blgetPOSAgetnInfo(
    char * buffer,
    unsigned int size
)
```


**Parameters**: 

  * **buffer** = pointer to buffer for result 
  * **size** = size of mentioned buffer


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the blocking library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully receive POS Agent information. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback is ignored in this case. 

This function is called by the application to request information about POS Agent information. Has processing only under Verix OS file.


### function tms_idsMode

```cpp
TMS_API bool tms_idsMode(
    void 
)
```


**Parameters**: 

  * **TRUE/FALSE** - IDS mode is TRUE/FALSE 


Called by application to find if device is in IDS mode or not 


### function tms_getUpdates

```cpp
TMS_API struct tmsReturn tms_getUpdates(
    const char * updateType,
    const char * software,
    const char * reference
)
```


**Parameters**: 

  * **updateType** = specified 
  * **software** = reference set name or parent reference set name 
  * **reference** = self or parent


**Return**: struct [tmsReturn](structtms_return.md) = a [tmsReturn](structtms_return.md) structure
[tmsReturn.status](structtms_return.md#variable-status) = the immediate library status response. TMS_STATUS_REQUESTED indicates the library was able to successfully send the update request to the VHQ Agent. All other return values indicate a failure.

[tmsReturn.handle](structtms_return.md#variable-handle) = the handle used for further status tracking in the callback. The callback status events will only be sent to registered applications. 

This function is used by the application to request updates from the management server. The app needs to be registered in order to request a TMS call. The app will get status information about the downloads and it's notifications in its callback.




## Macros Documentation

### define TMS_API

```cpp
#define TMS_API 
```


### define TMS_MAX_APP_NAME_LENGTH

```cpp
#define TMS_MAX_APP_NAME_LENGTH 32
```


### define TMS_MAX_APP_PARAMETERS

```cpp
#define TMS_MAX_APP_PARAMETERS 10000
```


### define TMS_MAX_ADDITIONAL_INFO

```cpp
#define TMS_MAX_ADDITIONAL_INFO 256
```


### define TMS_MAX_STRING_LENGTH

```cpp
#define TMS_MAX_STRING_LENGTH 128
```


### define TMS_STRING_LENGTH_64

```cpp
#define TMS_STRING_LENGTH_64 64
```


### define TMS_MAX_REGISTERED_APPS

```cpp
#define TMS_MAX_REGISTERED_APPS 32
```


### define TMS_REG_TIMEOUT_SECS

```cpp
#define TMS_REG_TIMEOUT_SECS 30
```


### define TMS_STATUS_SUCCESS

```cpp
#define TMS_STATUS_SUCCESS 0
```


successful status 


### define TMS_STATUS_ERROR

```cpp
#define TMS_STATUS_ERROR 5000
```


error status 


### define TMS_STATUS_UNSUPPORTED_FEATURE

```cpp
#define TMS_STATUS_UNSUPPORTED_FEATURE 5001
```


unsupported feature 


### define TMS_STATUS_CONTENT_AVAILABLE

```cpp
#define TMS_STATUS_CONTENT_AVAILABLE 5002
```


content available status 


### define TMS_STATUS_NO_CONSUMER

```cpp
#define TMS_STATUS_NO_CONSUMER 5003
```


no consumer for this content 


### define TMS_STATUS_FILENAME_ERROR

```cpp
#define TMS_STATUS_FILENAME_ERROR 5004
```


filename is too long 


### define TMS_STATUS_CONTENT_FAILURE

```cpp
#define TMS_STATUS_CONTENT_FAILURE 5005
```


content failed to update 


### define TMS_STATUS_MSGQ_FAILURE

```cpp
#define TMS_STATUS_MSGQ_FAILURE 5006
```


message queue failure 


### define TMS_STATUS_MSGSND_FAILURE

```cpp
#define TMS_STATUS_MSGSND_FAILURE 5007
```


sending message to TMS agent failed 


### define TMS_STATUS_MSGRCV_FAILURE

```cpp
#define TMS_STATUS_MSGRCV_FAILURE 5008
```


receiving message from TMS agent failed 


### define TMS_STATUS_APP_EVENT_AVAIL

```cpp
#define TMS_STATUS_APP_EVENT_AVAIL 5009
```


app event is available 


### define TMS_STATUS_REQUESTED

```cpp
#define TMS_STATUS_REQUESTED 5010
```


app event is available 


### define TMS_STATUS_REGISTER_FAIL

```cpp
#define TMS_STATUS_REGISTER_FAIL 5011
```


app registration failure 


### define TMS_STATUS_REGISTER_NAME_TOO_LONG

```cpp
#define TMS_STATUS_REGISTER_NAME_TOO_LONG 5012
```


app registration name too long 


### define TMS_STATUS_EINVAL

```cpp
#define TMS_STATUS_EINVAL 5013
```


error in a parameter value 


### define TMS_STATUS_AGENT_NOT_RUNNING

```cpp
#define TMS_STATUS_AGENT_NOT_RUNNING 5014
```


the agent is not running 


### define TMS_STATUS_SERVER_INSTANCE_ERROR

```cpp
#define TMS_STATUS_SERVER_INSTANCE_ERROR 5015
```


generic error with server instance 


### define TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR

```cpp
#define TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR 5016
```


server instance lock error 


### define TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR

```cpp
#define TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR 5017
```


server instance lock timeout error 


### define TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED

```cpp
#define TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED 5018
```


server instance already locked 


### define TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED

```cpp
#define TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED 5019
```


too many lock requests 


### define TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR

```cpp
#define TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR 5020
```


server instance unlock error 


### define TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR

```cpp
#define TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR 5021
```


error loading server instance config 


### define TMS_STATUS_AGENT_BUSY_ERROR

```cpp
#define TMS_STATUS_AGENT_BUSY_ERROR 5022
```


agent is busy and can't perform request 


### define TMS_STATUS_POSTPONED

```cpp
#define TMS_STATUS_POSTPONED 5023
```


app can use this to postpone a PUT_FILE request 


### define TMS_STATUS_CANCELLED

```cpp
#define TMS_STATUS_CANCELLED 5024
```


vhq got the request to cancel current task 


### define TMS_STATUS_AGENT_CONTACTSRV_ERROR

```cpp
#define TMS_STATUS_AGENT_CONTACTSRV_ERROR 5025
```


vhq server doesn't ready to process requests from device yet 


### define TMS_STATUS_API_SYNC_ERROR

```cpp
#define TMS_STATUS_API_SYNC_ERROR 5026
```


app and Agent lost sync in messages 


### define TMS_STATUS_HASH_GEN_MEMORY_ERROR

```cpp
#define TMS_STATUS_HASH_GEN_MEMORY_ERROR 5027
```


memory error (i.e. malloc failure) occured generating hash values from VPDX 


### define TMS_STATUS_HASH_GEN_VPDX_ACCESS_ERROR

```cpp
#define TMS_STATUS_HASH_GEN_VPDX_ACCESS_ERROR 5028
```


error occured opening or accessing VPDX 


### define TMS_STATUS_HASH_GEN_DATA_ACCESS_ERROR

```cpp
#define TMS_STATUS_HASH_GEN_DATA_ACCESS_ERROR 5029
```


error occured accessing data from app data retrieval callback 


### define TMS_STATUS_HASH_GEN_FILE_ACCESS_ERROR

```cpp
#define TMS_STATUS_HASH_GEN_FILE_ACCESS_ERROR 5030
```


error occured accessing temporary file to store parameter information 


### define TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST

```cpp
#define TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST 5031
```


App will use this to tell agent that a parameter doesn't exist in the container 


### define TMS_STATUS_STRING_TOO_LONG

```cpp
#define TMS_STATUS_STRING_TOO_LONG 5032
```


app description/details string too long 


### define TMS_STATUS_APP_IPC_FAILURE

```cpp
#define TMS_STATUS_APP_IPC_FAILURE 5033
```


Connection interrupted or eof 


### define MAX_TMS_FILENAME_LENGTH

```cpp
#define MAX_TMS_FILENAME_LENGTH 4096
```


### define MAX_TRANSACTION_TYPE_STR_LEN

```cpp
#define MAX_TRANSACTION_TYPE_STR_LEN 128
```


### define MAX_SERVER_INSTANCE_NAME_LEN

```cpp
#define MAX_SERVER_INSTANCE_NAME_LEN 128
```


### define MAX_SERVER_INSTANCE_LOCK_REQ

```cpp
#define MAX_SERVER_INSTANCE_LOCK_REQ 10
```


### define MAX_SERVER_INSTANCES

```cpp
#define MAX_SERVER_INSTANCES 1
```


### define PRIMARY_SERVER_INSTANCE_NAME

```cpp
#define PRIMARY_SERVER_INSTANCE_NAME "primary"
```


### define TMS_EVT_REGISTER_APP_RESPONSE

```cpp
#define TMS_EVT_REGISTER_APP_RESPONSE 1
```


### define TMS_EVT_UNREGISTER_APP_RESPONSE

```cpp
#define TMS_EVT_UNREGISTER_APP_RESPONSE 2
```


### define TMS_EVT_CALL_SERVER_RESPONSE

```cpp
#define TMS_EVT_CALL_SERVER_RESPONSE 3
```


### define TMS_EVT_GET_TMS_CONFIG_RESPONSE

```cpp
#define TMS_EVT_GET_TMS_CONFIG_RESPONSE 4
```


### define TMS_EVT_SET_TMS_CONFIG_RESPONSE

```cpp
#define TMS_EVT_SET_TMS_CONFIG_RESPONSE 5
```


### define TMS_EVT_SET_APP_STATE

```cpp
#define TMS_EVT_SET_APP_STATE 6
```


### define TMS_EVT_SET_APP_INFO

```cpp
#define TMS_EVT_SET_APP_INFO 7
```


### define TMS_EVT_SET_PARM_LIST

```cpp
#define TMS_EVT_SET_PARM_LIST 8
```


### define TMS_EVT_GET_FILE

```cpp
#define TMS_EVT_GET_FILE 9
```


### define TMS_EVT_PUT_FILE

```cpp
#define TMS_EVT_PUT_FILE 10
```


### define TMS_EVT_DEL_FILE

```cpp
#define TMS_EVT_DEL_FILE 11
```


### define TMS_EVT_DO_TRANSACTION

```cpp
#define TMS_EVT_DO_TRANSACTION 12
```


### define TMS_EVT_NOTIFICATION

```cpp
#define TMS_EVT_NOTIFICATION 13
```


### define TMS_EVT_GET_SERVER_INSTANCE

```cpp
#define TMS_EVT_GET_SERVER_INSTANCE 14
```


### define TMS_EVT_LOCK_SERVER_INSTANCE

```cpp
#define TMS_EVT_LOCK_SERVER_INSTANCE 15
```


### define TMS_EVT_RELEASE_SERVER_INSTANCE

```cpp
#define TMS_EVT_RELEASE_SERVER_INSTANCE 16
```


### define TMS_EVT_APP_ALERT_RESULT

```cpp
#define TMS_EVT_APP_ALERT_RESULT 17
```


### define TMS_EVT_CLEAR_APP_INFO_RESULT

```cpp
#define TMS_EVT_CLEAR_APP_INFO_RESULT 18
```


### define TMS_EVT_API_ERRORS

```cpp
#define TMS_EVT_API_ERRORS 19
```


### define TMS_EVT_DELETE_SERVER_INSTANCE

```cpp
#define TMS_EVT_DELETE_SERVER_INSTANCE 20
```


### define TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT

```cpp
#define TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT 21
```


This event is for responses to app parameter updates 


### define TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT

```cpp
#define TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT 22
```


[Event](struct_event.md) sent by the agent to notify the application of Anti-skimming results called using `[tms_sendCustomAppEvent()](svc__tms_8h.md#function-tms-sendcustomappevent)`


### define TMS_EVT_APP_GET_SW_UPDATE

```cpp
#define TMS_EVT_APP_GET_SW_UPDATE 23
```


[Event](struct_event.md) sent by the agent to notify the application if Get Sw Update called using `[tms_getUpdates()](svc__tms_8h.md#function-tms-getupdates)`


### define TMS_EVT_GET_PARM_FILE

```cpp
#define TMS_EVT_GET_PARM_FILE 24
```


### define TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE

```cpp
#define TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE 1
```


an unsigned bundle type 


### define TMS_PUT_FILE_TYPE_UNSIGNED_FILE

```cpp
#define TMS_PUT_FILE_TYPE_UNSIGNED_FILE 2
```


a single unsigned file 


### define TMS_PUT_FILE_TYPE_MIXED_BUNDLE

```cpp
#define TMS_PUT_FILE_TYPE_MIXED_BUNDLE 3
```


a mixed bundle type (unsigned and signed packages) 


### define TMS_PUT_FILE_TYPE_SIGNED_BUNDLE

```cpp
#define TMS_PUT_FILE_TYPE_SIGNED_BUNDLE 4
```


a signed bundle type 


### define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE

```cpp
#define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE 5
```


a full parameter file type 


### define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT

```cpp
#define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT 6
```


a flat partial parameter file type 


### define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL

```cpp
#define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL 7
```


a hierarchical partial parameter file type 


### define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS

```cpp
#define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS 8
```


a full parameter file type, automatically merged into the environment 


### define TMS_POST_INSTALL_ACTION_NONE

```cpp
#define TMS_POST_INSTALL_ACTION_NONE 0
```


### define TMS_POST_INSTALL_ACTION_REBOOT

```cpp
#define TMS_POST_INSTALL_ACTION_REBOOT 1
```


### define TMS_POST_INSTALL_ACTION_RESTART_APPS

```cpp
#define TMS_POST_INSTALL_ACTION_RESTART_APPS 3
```


### define TMS_API_CALL_SERVER_UPDATE_CHECK_ONLY_FLAG

```cpp
#define TMS_API_CALL_SERVER_UPDATE_CHECK_ONLY_FLAG 0x1
```


### define TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG

```cpp
#define TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG 0x2
```


### define TMS_EVENT_NOTIFY_REBOOT_DEVICE

```cpp
#define TMS_EVENT_NOTIFY_REBOOT_DEVICE 0x00000001
```


### define TMS_EVENT_NOTIFY_RESTART_APPS

```cpp
#define TMS_EVENT_NOTIFY_RESTART_APPS 0x00000002
```


### define TMS_EVENT_NOTIFY_DOWNLOAD_STARTED

```cpp
#define TMS_EVENT_NOTIFY_DOWNLOAD_STARTED 0x00000004
```


### define TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT

```cpp
#define TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT 0x00000008
```


### define TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE

```cpp
#define TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE 0x00000010
```


### define TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD

```cpp
#define TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD 0x00000020
```


### define TMS_EVENT_NOTIFY_MAINTENANCE_END

```cpp
#define TMS_EVENT_NOTIFY_MAINTENANCE_END 0x00000040
```


### define TMS_EVENT_NOTIFY_HEARTBEAT_RESULT

```cpp
#define TMS_EVENT_NOTIFY_HEARTBEAT_RESULT 0x00000080
```


### define TMS_EVENT_NOTIFY_CONTACT_SERVER_START

```cpp
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_START 0x00000100
```


### define TMS_EVENT_NOTIFY_CONTACT_SERVER_END

```cpp
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_END 0x00000200
```


### define TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL

```cpp
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL 0x00000400
```


### define TMS_EVENT_NOTIFY_CONTENT_UPDATES

```cpp
#define TMS_EVENT_NOTIFY_CONTENT_UPDATES 0x00000800
```


### define TMS_EVENT_NOTIFY_CLOCK_UPDATE

```cpp
#define TMS_EVENT_NOTIFY_CLOCK_UPDATE 0x00001000
```


### define TMS_EVENT_NOTIFY_SERVER_ERRORS

```cpp
#define TMS_EVENT_NOTIFY_SERVER_ERRORS 0x00002000
```


### define TMS_EVENT_NOTIFY_INSTALL_STATUS

```cpp
#define TMS_EVENT_NOTIFY_INSTALL_STATUS 0x00004000
```


### define TMS_EVENT_NOTIFY_PROCESSING_STATUS

```cpp
#define TMS_EVENT_NOTIFY_PROCESSING_STATUS 0x00008000
```


### define TMS_EVENT_NOTIFY_DOWNLOAD_RETRY

```cpp
#define TMS_EVENT_NOTIFY_DOWNLOAD_RETRY 0x00010000
```


### define TMS_EVENT_NOTIFY_NETWORK_ERROR

```cpp
#define TMS_EVENT_NOTIFY_NETWORK_ERROR 0x00020000
```


### define TMS_EVENT_NOTIFY_DOWNLOAD_COUNT

```cpp
#define TMS_EVENT_NOTIFY_DOWNLOAD_COUNT 0x00040000
```


### define TMS_EVENT_NOTIFY_GET_SW_UPDATE

```cpp
#define TMS_EVENT_NOTIFY_GET_SW_UPDATE 0x00080000
```


### define TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT

```cpp
#define TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT 0x00100000
```


### define APP_STATUS_FREE

```cpp
#define APP_STATUS_FREE 1
```


### define APP_STATUS_BUSY

```cpp
#define APP_STATUS_BUSY 2
```


### define APP_STATUS_POSTPONE

```cpp
#define APP_STATUS_POSTPONE 3
```


### define APP_STATUS_CANCEL

```cpp
#define APP_STATUS_CANCEL 4
```


### define TMS_PARAMETER_TYPE_IDENTIFIER

```cpp
#define TMS_PARAMETER_TYPE_IDENTIFIER 0x01
```


a parameter to send with identifier information 


### define TMS_PARAMETER_TYPE_DEVICE_PROFILE

```cpp
#define TMS_PARAMETER_TYPE_DEVICE_PROFILE 0x02
```


a parameter to send with device profile information 


### define TMS_PARAMETER_TYPE_DIAGNOSTIC

```cpp
#define TMS_PARAMETER_TYPE_DIAGNOSTIC 0x04
```


a parameter to send with diagnostic information 


### define TMS_PARAMETER_TYPE_VERICENTER

```cpp
#define TMS_PARAMETER_TYPE_VERICENTER 0x08
```


a parameter to send with diagnostic information 


### define TMS_MAX_PARAM_UPDATE_COUNT

```cpp
#define TMS_MAX_PARAM_UPDATE_COUNT 200
```


### define TMS_ALERT_SEVERITY_LOW

```cpp
#define TMS_ALERT_SEVERITY_LOW 1
```


### define TMS_ALERT_SEVERITY_MEDIUM

```cpp
#define TMS_ALERT_SEVERITY_MEDIUM 2
```


### define TMS_ALERT_SEVERITY_HIGH

```cpp
#define TMS_ALERT_SEVERITY_HIGH 3
```


## Source code

```cpp
/*
 *  ADK TMS Agent API for application integration with the TMS Agent
 *
 *  Copyright, 2017 VeriFone Inc.
 *  88 W Plumeria Dr
 *  San Jose, CA 95134
 *
 *  All Rights Reserved. No part of this software may be reproduced,
 *  transmitted, transcribed, stored in a retrieval system, or
 *  translated into any language or computer language, in any form
 *  or by any means electronic, mechanical, magnetic, optical,
 *  chemical, manual or otherwise, without the prior permission of
 *  VeriFone Inc.
 */
#ifndef SVC_TMS_H
#define SVC_TMS_H

#include <stdio.h>
#include <stdint.h>

#include "tms_status.h"

struct version_t
{
  int major; 
  int minor; 
  int maint; 
  int hotfix; 
  char build[16]; 
};

#ifdef __cplusplus
extern "C"
{
#endif

/*SVC_SERVICE:tms*/

#if defined _WIN32
#  if   defined TMS_DLL_EXPORT
#    define TMS_API __declspec(dllexport)
#  else
#    define TMS_API
#  endif
#elif defined __GNUC__ && defined TMS_DLL_EXPORT
#  define TMS_API  __attribute__((visibility ("default")))
#else
#  define TMS_API
#endif

#define TMS_MAX_APP_NAME_LENGTH             32
#define TMS_MAX_APP_PARAMETERS              10000

#define TMS_MAX_ADDITIONAL_INFO             256
#define TMS_MAX_STRING_LENGTH               128
#define TMS_STRING_LENGTH_64                64

/* Allow for 32 user registered applications */
#define TMS_MAX_REGISTERED_APPS     32
#define TMS_REG_TIMEOUT_SECS        30

// defines for tms status
#define TMS_STATUS_SUCCESS                              0 
#define TMS_STATUS_ERROR                                5000 
#define TMS_STATUS_UNSUPPORTED_FEATURE                  5001 
#define TMS_STATUS_CONTENT_AVAILABLE                    5002 
#define TMS_STATUS_NO_CONSUMER                          5003 
#define TMS_STATUS_FILENAME_ERROR                       5004 
#define TMS_STATUS_CONTENT_FAILURE                      5005 
#define TMS_STATUS_MSGQ_FAILURE                         5006 
#define TMS_STATUS_MSGSND_FAILURE                       5007 
#define TMS_STATUS_MSGRCV_FAILURE                       5008 
#define TMS_STATUS_APP_EVENT_AVAIL                      5009 
#define TMS_STATUS_REQUESTED                            5010 
#define TMS_STATUS_REGISTER_FAIL                        5011 
#define TMS_STATUS_REGISTER_NAME_TOO_LONG               5012 
#define TMS_STATUS_EINVAL                               5013 
#define TMS_STATUS_AGENT_NOT_RUNNING                    5014 
#define TMS_STATUS_SERVER_INSTANCE_ERROR                5015 
#define TMS_STATUS_SERVER_INSTANCE_LOCK_ERROR           5016 
#define TMS_STATUS_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR   5017 
#define TMS_STATUS_SERVER_INSTANCE_ALREADY_LOCKED       5018 
#define TMS_STATUS_SERVER_INSTANCE_MAX_LOCK_REQ_EXCEEDED    5019 
#define TMS_STATUS_SERVER_INSTANCE_UNLOCK_ERROR         5020 
#define TMS_STATUS_SERVER_INSTANCE_CONFIG_LOAD_ERROR    5021 
#define TMS_STATUS_AGENT_BUSY_ERROR                     5022 
#define TMS_STATUS_POSTPONED                            5023 
#define TMS_STATUS_CANCELLED                            5024 
#define TMS_STATUS_AGENT_CONTACTSRV_ERROR               5025 
#define TMS_STATUS_API_SYNC_ERROR                       5026 
#define TMS_STATUS_HASH_GEN_MEMORY_ERROR                5027 
#define TMS_STATUS_HASH_GEN_VPDX_ACCESS_ERROR           5028 
#define TMS_STATUS_HASH_GEN_DATA_ACCESS_ERROR           5029 
#define TMS_STATUS_HASH_GEN_FILE_ACCESS_ERROR           5030 
#define TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST          5031 
#define TMS_STATUS_STRING_TOO_LONG                      5032 
#define TMS_STATUS_APP_IPC_FAILURE                      5033 
/*SVC_STRUCT*/

struct tmsReturn
{
  int status; 
  int handle; 
};

/* The maximum length for file names or paths */
#define MAX_TMS_FILENAME_LENGTH             4096

/* The maximum length a transaction type string can be */
#define MAX_TRANSACTION_TYPE_STR_LEN        128

/* The maximum length of a server instance name */
#define MAX_SERVER_INSTANCE_NAME_LEN        128

/* The maximum number of lock requests at a time */
#define MAX_SERVER_INSTANCE_LOCK_REQ        10

/* The maximum number of server instances */
#define MAX_SERVER_INSTANCES                1

/* The name of the primary server instance */
#define PRIMARY_SERVER_INSTANCE_NAME    "primary"

/* The RESPONSE events come back from TMS Agent in response to requests from the application (tmsEventData.evtType) */
#define TMS_EVT_REGISTER_APP_RESPONSE           1
#define TMS_EVT_UNREGISTER_APP_RESPONSE         2
#define TMS_EVT_CALL_SERVER_RESPONSE            3
#define TMS_EVT_GET_TMS_CONFIG_RESPONSE         4
#define TMS_EVT_SET_TMS_CONFIG_RESPONSE         5

/* The rest of these events are the TMS Agent notifying the app it needs to do something (tmsEventData.evtType) */
#define TMS_EVT_SET_APP_STATE                   6
#define TMS_EVT_SET_APP_INFO                    7
#define TMS_EVT_SET_PARM_LIST                   8
#define TMS_EVT_GET_FILE                        9
#define TMS_EVT_PUT_FILE                        10
#define TMS_EVT_DEL_FILE                        11
#define TMS_EVT_DO_TRANSACTION                  12

/* This event notifies the app of an event it requested notification for when it registered (tmsEventData.evtType) */
#define TMS_EVT_NOTIFICATION                    13

/* These events are for the app to manage server instances */
#define TMS_EVT_GET_SERVER_INSTANCE             14
#define TMS_EVT_LOCK_SERVER_INSTANCE            15
#define TMS_EVT_RELEASE_SERVER_INSTANCE         16

/* This event is for app generated alerts */
#define TMS_EVT_APP_ALERT_RESULT                17

/* This event provides the final result of tms_clearApplicationInfo() call */
#define TMS_EVT_CLEAR_APP_INFO_RESULT           18

/* This event is for notification app in case of API usage errors */
#define TMS_EVT_API_ERRORS                      19

#define TMS_EVT_DELETE_SERVER_INSTANCE          20

// defines This event is for responses to app parameter updates
#define TMS_EVT_APP_GENERATED_PARAM_UPDATE_RESULT       21      
// defines This is for responses to Anti-skimming send event success/failure
#define TMS_EVT_APP_ANTI_SKIMMING_TEST_RESULT           22      
// This is for response to Get SW Update event success/failure
#define TMS_EVT_APP_GET_SW_UPDATE                       23      
#define TMS_EVT_GET_PARM_FILE         24

// defines for put file type (tmsEventData.putFileType)
#define TMS_PUT_FILE_TYPE_UNSIGNED_BUNDLE                   1 
#define TMS_PUT_FILE_TYPE_UNSIGNED_FILE                     2 
#define TMS_PUT_FILE_TYPE_MIXED_BUNDLE                      3 
#define TMS_PUT_FILE_TYPE_SIGNED_BUNDLE                     4 
#define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE                   5 
#define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_FLAT           6 
#define TMS_PUT_FILE_TYPE_PARTIAL_PARAM_FILE_HIERARCHICAL   7 
#define TMS_PUT_FILE_TYPE_FULL_PARAM_FILE_CONFIG_SYS        8 
// defines for postInstallAction notification data (tmsEventData.notificationData.postInstallAction)
#define TMS_POST_INSTALL_ACTION_NONE                        0
#define TMS_POST_INSTALL_ACTION_REBOOT                      1
#define TMS_POST_INSTALL_ACTION_RESTART_APPS                3

#define TMS_API_CALL_SERVER_UPDATE_CHECK_ONLY_FLAG      0x1
#define TMS_API_CALL_SERVER_FORCE_MAINTENANCE_FLAG      0x2

/*SVC_STRUCT*/
struct tmsEventData
{
  int status; 
  int evtType; 
  int handle; 
  int putFileType; 
  int numFileEntries; 
  unsigned char removeFile; 
  int appStatus; 
  char filename[MAX_TMS_FILENAME_LENGTH]; 
  char filepath[MAX_TMS_FILENAME_LENGTH]; 
  int eventMask; 
  char transactionType[MAX_TRANSACTION_TYPE_STR_LEN]; 
  union
  {
    int downloadPercent; 
    int downloadRetryCnt; 
    int downloadCount; 
    int downloadStartCnt; 
    int downloadCompletedCnt; 
    int installStartCnt; 
    int installCompletedCnt; 
  } notificationData;
};

/***************************************************************************************************
 * These APIs do not require an application to be registered to use
 ****************************************************************************************************/

/*SVC_PROTOTYPE*/TMS_API struct version_t tms_getVersion(void);

/*SVC_PROTOTYPE*/TMS_API char* tms_GetVersion(void);

/*SVC_PROTOTYPE*/TMS_API struct version_t tms_getAgentVersion(void);

/*SVC_PROTOTYPE*/TMS_API char* tms_GetAgentVersion(void);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_callServer(
    int secondsToWait /* 0 */);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_callServer2(
    int secondsToWait /* 0 */, unsigned int iFlags);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_getConfigLocation(void);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_setNewConfigAvailable(
    const char *newTMSConfig /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_setNewConfigAvailableWithTimeout(
    const char *newTMSConfig /*REQ*/, int timeout /* 0 */);

/***************************************************************************************************
 * These APIs involve apps registering with the agent for status notifications, file updates, etc.
 ****************************************************************************************************/

/* These masks can be used in the eventNotifyMask parameter of tms_registerApplication.  These masks should be ORd
 together by the application to tell the TMS Agent which events the application wants to be notified about */
#define TMS_EVENT_NOTIFY_REBOOT_DEVICE              0x00000001
#define TMS_EVENT_NOTIFY_RESTART_APPS               0x00000002
#define TMS_EVENT_NOTIFY_DOWNLOAD_STARTED           0x00000004
#define TMS_EVENT_NOTIFY_DOWNLOAD_PERCENT           0x00000008
#define TMS_EVENT_NOTIFY_DOWNLOAD_COMPLETE          0x00000010
#define TMS_EVENT_NOTIFY_INSTALL_DOWNLOAD           0x00000020
#define TMS_EVENT_NOTIFY_MAINTENANCE_END            0x00000040
#define TMS_EVENT_NOTIFY_HEARTBEAT_RESULT           0x00000080
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_START       0x00000100
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_END         0x00000200
#define TMS_EVENT_NOTIFY_CONTACT_SERVER_APPROVAL    0x00000400
#define TMS_EVENT_NOTIFY_CONTENT_UPDATES            0x00000800
#define TMS_EVENT_NOTIFY_CLOCK_UPDATE               0x00001000
#define TMS_EVENT_NOTIFY_SERVER_ERRORS              0x00002000
#define TMS_EVENT_NOTIFY_INSTALL_STATUS             0x00004000
#define TMS_EVENT_NOTIFY_PROCESSING_STATUS          0x00008000
#define TMS_EVENT_NOTIFY_DOWNLOAD_RETRY             0x00010000
#define TMS_EVENT_NOTIFY_NETWORK_ERROR              0x00020000
#define TMS_EVENT_NOTIFY_DOWNLOAD_COUNT             0x00040000
#define TMS_EVENT_NOTIFY_GET_SW_UPDATE              0x00080000
#define TMS_EVENT_NOTIFY_CUSTOM_APP_EVENT           0x00100000

typedef int (*tmsEventCallback)(struct tmsEventData eventData);
typedef int (*tmsEventCallback2)(struct tmsEventData *eventData, void *data);

typedef enum _tms_apptype
{
  TMS_APP_TYPE_DEFAULT = -1,
  TMS_APP_TYPE_OS = 0,
  TMS_APP_TYPE_APPLICATION,
  TMS_APP_TYPE_SCRIPT,
  TMS_APP_TYPE_CP_APPLICATION,
  TMS_APP_TYPE_ADK,
  TMS_APP_TYPE_PAYMENT_APP,
  TMS_APP_TYPE_AGENT,
  TMS_APP_TYPE_VALUE_ADD,
  TMS_APP_TYPE_CUSTOM,
} tms_apptype_t;

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication(
    const char *appName /*REQ*/, int eventNotifyMask /* 0 */,
    unsigned int tmsEvtCb /* 0 */);
/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication2(
    const char *appName /*REQ*/, int eventNotifyMask /* 0 */,
    tmsEventCallback2 tmsEvtCb /* 0 */, void *cbData /* 0 */);
/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_registerApplication3(
    const char *appName /*REQ*/, const char *appVersion, tms_apptype_t appType,
    const char *appCustomType, const char *additionalInfo,
    int eventNotifyMask /* 0 */, tmsEventCallback2 tmsEvtCb /* 0 */,
    void *cbData /* 0 */);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_unregisterApplication(
    const char *appName /*REQ*/);

/* These defines are used for appState in tms_setAppState() call */
#define APP_STATUS_FREE                         1
#define APP_STATUS_BUSY                         2
#define APP_STATUS_POSTPONE                     3
#define APP_STATUS_CANCEL                       4       // cancel operation in progress if possible (Vericenter modes only for now)

/*SVC_PROTOTYPE*/TMS_API int tms_setApplicationState(int handle /*REQ*/,
                                                     int appState /*REQ*/);

// defines for custom info type (see struct tmsAppParameter)
#define TMS_PARAMETER_TYPE_IDENTIFIER           0x01 
#define TMS_PARAMETER_TYPE_DEVICE_PROFILE       0x02 
#define TMS_PARAMETER_TYPE_DIAGNOSTIC           0x04 
#define TMS_PARAMETER_TYPE_VERICENTER           0x08 
/*SVC_STRUCT*/

struct tmsAppParameter
{
  char parameterName[64]; 
  char parameterValue[256]; 
  int parameterType; 
};

/*SVC_STRUCT*/
struct tmsAppInfo
{
  struct tmsAppParameter *parameterList; 
  int parameterCount; 
};

/*SVC_PROTOTYPE*/TMS_API int tms_setApplicationInfo(
    int handle /*REQ*/, struct tmsAppInfo appInfo /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_clearApplicationInfo(void);

/*SVC_PROTOTYPE*/TMS_API int tms_setApplicationParameterList(
    int handle /*REQ*/, int numParamFiles /*REQ*/,
    const char *paramInfoFile /*REQ*/);

#define TMS_MAX_PARAM_UPDATE_COUNT      200

/*
 * The data - accessor callback function is called to obtain each parameter value that needs to be retrieved for
 * calculating the hash.That is, each parameter listed in the Parameter Definition(VPDX) File.The parameter value
 * must be provided in a UTF - 8 format string if not already in UTF - 8 format.For the most part this means values
 * will be provided in ASCII, but consideration must be taken to ensure that 7bit and other multi - byte formats
 * are converted correctly.
 *
 * @param[in] paramName - Name of the configuration parameter in the same format it is supplied in the parameter
 *                       import file format.For example, where the Parameter Definition(VPDX) File defines a prefix,
 *                       a container and the parameter name it is in the format{ prefix } / {container} / {parameter - name}.
 * @param[in] paramValue - Pointer to return buffer for parameter value in UTF - 8 format.
 * @param[in] paramValueLen - Length of the parameter value in bytes.
 *
 * @return int = Status of the call. TMS_STATUS_SUCCESS indicates the call was successful.
 TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST indicates that the requested parameter doesn't exist
 All other return values indicate the parameter requested was valid, it was just unable to be retrieved
 */
typedef int (*tmsSetAppParamHashCB)(char *paramName, char *paramValue,
                                    size_t paramValueLen);

/*
 *tms_setApplicationParameterHash() - The application will call this function in response to a SET_PARM_LIST event
 *received in its callback.The application will provide the name of the Parameter Definition(VPDX) File defining the
 *configuration parameters being managed by VHQ for this application and the data - accessor callback function.
 *
 * @param[in] handle - This should be the same handle provided in the callback event.
 * @param[in] paramDefFile - Filename of the Parameter Definition(VPDX) File.
 * @param[in] paramDataCb - Function that Agent will use to access the configuration parameter values.
 *
 * @return int = Status of the call.TMS_STATUS_SUCCESS indicates the call was successful.All other values indicate a failure.
 */

/*SVC_PROTOTYPE*/TMS_API int tms_setApplicationParameterHash(
    int handle /*REQ*/, const char *paramDefFile /*REQ*/,
    tmsSetAppParamHashCB paramDataCb /*REQ*/);

/*
 * tms_sendParameterUpdateCallback() - The application will call this function to pass the Agent one or more configuration parameter updates that are to be uploaded to the VHQ Server
 * when application receives a TMS_EVT_GET_PARM_FILE event in the registered callback.
 *
 * @param[in] handle - This should be the same handle provided in the callback event.
 * @param[in] parameterUpdates - A structure containing the parameter updates the the required information to be sent to the VHQ server.
 *
 * @return int - TMS_STATUS_REQUESTED, if success
 */

struct tmsParamUpdateItemNewStruct
{
  char Application[64];
  char version[32];
  char Container[1024];
  char Name[256];
  char Value[256];
  const char *ParamDefFile;
  tmsSetAppParamHashCB ParamDataCb;
};

struct tmsParamUpdateNewStruct
{
  int paramUpdateCount;
  struct tmsParamUpdateItemNewStruct *paramUpdateList;
};

TMS_API int tms_sendParameterUpdateCallback(
    int handle, struct tmsParamUpdateNewStruct *parameterUpdates);

/*
 * tms_sendParameterUpdate() - The application will call this function to pass the Agent one or more configuration parameter updates that are to be uploaded to the VHQ Server.
 *
 * @param[in] parameterUpdates - A structure containing the parameter updates the the required information to be sent to the VHQ server.
 *
 * @return struct tmsReturn = a tmsReturn structure<BR>
 *                  tmsReturn.status = the immediate library status response.  TMS_STATUS_REQUESTED
 *                  indicates the library was able to successfully send the parameter update request
 *                  to the VHQ Agent.  All other return values indicate a failure.<BR><BR>
 *                  tmsReturn.handle = the handle used for further status tracking in the callback.
 *                  The callback will provide further status in the callback
 */

struct tmsParamUpdateItemStruct
{
  char Application[64];
  char Container[1024];
  char Name[256];
  char Value[256];
  const char *ParamDefFile;
  tmsSetAppParamHashCB ParamDataCb;
};

struct tmsParamUpdateStruct
{
  int paramUpdateCount;
  struct tmsParamUpdateItemStruct *paramUpdateList;
};
/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendParameterUpdate(
    struct tmsParamUpdateStruct *parameterUpdates /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API int tms_getApplicationFileAvailable(
    int handle /*REQ*/, int result /*REQ*/, const char *fileLocation /*REQ*/,
    unsigned char removeFile /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API int tms_setFileOperationResult(
    int handle /*REQ*/, int fileOpResult /*REQ*/, int fileOpType /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API int tms_setFileOperationResultWithDescription(
    int handle /*REQ*/, int fileOpResult /*REQ*/, int fileOpType /*REQ*/,
    char *additional_info /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API int tms_setTransactionResult(
    int handle /*REQ*/, int transactionResult /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_getServerInstance(void);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_lockServerInstance(
    char *instanceId /*REQ*/, int mlSecTimeout /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_releaseServerLock(
    char *restoreInstanceId /*REQ*/);

TMS_API struct tmsReturn tms_deleteServerInstance(
    char *deleteInstanceId /*REQ*/);

#define TMS_ALERT_SEVERITY_LOW      1
#define TMS_ALERT_SEVERITY_MEDIUM   2
#define TMS_ALERT_SEVERITY_HIGH     3

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendApplicationAlert(
    char *description /*REQ*/, int severity /*REQ*/, char *details /*REQ*/);

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendCustomAppEvent(
    char *appName /*REQ*/, char *description /*REQ*/,
    char *details /*OPTIONAL*/);

struct tmsCustomAppEventStruct
{
  char appName[TMS_MAX_APP_NAME_LENGTH];
  char eventName[TMS_STRING_LENGTH_64];
  char additional_info[TMS_MAX_ADDITIONAL_INFO];
};

/*SVC_PROTOTYPE*/TMS_API struct tmsReturn tms_sendCustomAppEvent2(
    struct tmsCustomAppEventStruct *appEvent /*REQ*/);

TMS_API struct tmsReturn tms_blgetPOSAgetnInfo(char *buffer, unsigned int size);

TMS_API bool tms_idsMode(void);

TMS_API struct tmsReturn tms_getUpdates(const char *updateType,
                                        const char *software,
                                        const char *reference);

#ifdef __cplusplus
}

#endif
#endif //SVC_TMS_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
