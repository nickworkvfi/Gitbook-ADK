---
title: tmsagt/src/VHQUtils/VHQUtils_MX.c

---

# tmsagt/src/VHQUtils/VHQUtils_MX.c

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[UNUSED_FILE_INFO](struct_u_n_u_s_e_d___f_i_l_e___i_n_f_o.md)**  |
| struct | **[_proc_data_t](struct__proc__data__t.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(char *pszFormName, int iControlID, void *pData) | **[Event_Callback_Function](_v_h_q_utils___m_x_8c.md#typedef-event-callback-function)**  |
| typedef struct [_proc_data_t](struct__proc__data__t.md) | **[proc_data_t](_v_h_q_utils___m_x_8c.md#typedef-proc-data-t)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[test_encrypt](_v_h_q_utils___m_x_8c.md#function-test-encrypt)**(int , char * , char * , int , char * ) |
| short | **[CMDiag](_v_h_q_utils___m_x_8c.md#function-cmdiag)**(short diagOption, char * data, short * dataLength) |
| bool | **[GetProcessRAMData](_v_h_q_utils___m_x_8c.md#function-getprocessramdata)**(char * process_status_file, int * MemUsed) |
| bool | **[GetPackages](_v_h_q_utils___m_x_8c.md#function-getpackages)**(list_head_t * ApplicationList) |
| bool | **[GetProtectedExtRAM](_v_h_q_utils___m_x_8c.md#function-getprotectedextram)**(memory_profile_t * memProfile) |
| void | **[connectSerialPPP](_v_h_q_utils___m_x_8c.md#function-connectserialppp)**(char * pszPort, char * pszOptions, int iBaud) |
| void | **[CleanupUnusedFiles](_v_h_q_utils___m_x_8c.md#function-cleanupunusedfiles)**(void ) |
| bool | **[GetVclVersion](_v_h_q_utils___m_x_8c.md#function-getvclversion)**(char * filename, char * grep_str, char * header_str, char * version_str, int version_str_length) |
| bool | **[GrepForPCipaddr](_v_h_q_utils___m_x_8c.md#function-grepforpcipaddr)**(char * pszAddr) |
| void | **[_initPackageListArray](_v_h_q_utils___m_x_8c.md#function--initpackagelistarray)**(list_head_t * ApplicationList) |
| int | **[_ipkgFilteredListCb](_v_h_q_utils___m_x_8c.md#function--ipkgfilteredlistcb)**(char * name, char * dest, char * version, char * timestamp, long size, void * userdata) |
| bool | **[IsVCLDiagSupported](_v_h_q_utils___m_x_8c.md#function-isvcldiagsupported)**(const char * versionString) |
| int | **[GetBatteryStatus](_v_h_q_utils___m_x_8c.md#function-getbatterystatus)**(int * voltage) |
| int | **[GetModelNumber](_v_h_q_utils___m_x_8c.md#function-getmodelnumber)**(char * pszModelNum, uint32 iModelNumBufLen) |
| int | **[GetCommonName](_v_h_q_utils___m_x_8c.md#function-getcommonname)**(char * pszCommonName, int iCommonNameBufLen) |
| int | **[getPCipAddr](_v_h_q_utils___m_x_8c.md#function-getpcipaddr)**(char * pszAddr) |
| int | **[internal_GetIPAddress](_v_h_q_utils___m_x_8c.md#function-internal-getipaddress)**(char * pszIPAddress, int iIPAddressBufLen) |
| int | **[internal_GetMACAddress](_v_h_q_utils___m_x_8c.md#function-internal-getmacaddress)**(char * pszMACAddress, int iMACAddressBufLen) |
| void | **[GetNetworkConfig](_v_h_q_utils___m_x_8c.md#function-getnetworkconfig)**(device_profile_t * devProfile) |
| int | **[GetSerialNumber](_v_h_q_utils___m_x_8c.md#function-getserialnumber)**(char * pszSerialNumber) |
| bool | **[GetUsrAppInfo](_v_h_q_utils___m_x_8c.md#function-getusrappinfo)**(list_head_t * UsrAppData) |
| bool | **[GetApplications](_v_h_q_utils___m_x_8c.md#function-getapplications)**(list_head_t * ApplicationList) |
| void | **[CleanApplicationsList](_v_h_q_utils___m_x_8c.md#function-cleanapplicationslist)**(list_head_t * ApplicationList) |
| void * | **[app_main](_v_h_q_utils___m_x_8c.md#function-app-main)**(void * pData) |
| uint8 | **[SetCommTypeInfo](_v_h_q_utils___m_x_8c.md#function-setcommtypeinfo)**(struct comm_s * pComm, char * pszName) |
| bool | **[GetDeviceProfile](_v_h_q_utils___m_x_8c.md#function-getdeviceprofile)**(device_profile_t * dev_profile) |
| bool | **[GetDiagCounters](_v_h_q_utils___m_x_8c.md#function-getdiagcounters)**(diag_counter_t * CountersArray, uint8 ArraySize, uint16 * num_counters) |
| bool | **[GetHandleInfo](_v_h_q_utils___m_x_8c.md#function-gethandleinfo)**(int * OpenHandles, int * MaxHandles) |
| bool | **[ReadProcData](_v_h_q_utils___m_x_8c.md#function-readprocdata)**(char * stat_file, char proc_name[MAX_PROCESS_NAME_LENGTH], unsigned long * utime, long * stime) |
| bool | **[GetProcessInfo](_v_h_q_utils___m_x_8c.md#function-getprocessinfo)**(process_info_t * ProcessArray, uint8 ArraySize, uint16 * num_processes) |
| bool | **[CreateFileListing](_v_h_q_utils___m_x_8c.md#function-createfilelisting)**(char * OutputFileName, char * directory) |
| key_type_t | **[ConvertKeyType](_v_h_q_utils___m_x_8c.md#function-convertkeytype)**(int keys) |
| void | **[ms_keys_check](_v_h_q_utils___m_x_8c.md#function-ms-keys-check)**(key_data_t * KeyArray, struct keyRecord * k_ptr) |
| void | **[ade_dukpt_keys_check](_v_h_q_utils___m_x_8c.md#function-ade-dukpt-keys-check)**(key_data_t * KeyArray, struct keyRecord * k_ptr) |
| void | **[process_keys](_v_h_q_utils___m_x_8c.md#function-process-keys)**(int keys, key_data_t * KeyArray, uint8 * pNum_keys, uint8 MaxKeys, void(*)(key_data_t *KeyArray, struct keyRecord *k_ptr) check_cb) |
| int | **[scan_vss](_v_h_q_utils___m_x_8c.md#function-scan-vss)**(key_data_t * KeyArray, uint8 * pNum_keys, uint8 MaxKeys) |
| vhq_result_t | **[GetKeyDataLegacy](_v_h_q_utils___m_x_8c.md#function-getkeydatalegacy)**(key_data_t * KeyDataArray, uint8 * ArraySize, uint8 MaxKeys) |
| bool | **[GetMemoryProfile](_v_h_q_utils___m_x_8c.md#function-getmemoryprofile)**(memory_profile_t * mem_profile) |
| bool | **[GetRAMData](_v_h_q_utils___m_x_8c.md#function-getramdata)**(int * totalRAM, int * freeRAM) |
| int | **[GetMPCStatus](_v_h_q_utils___m_x_8c.md#function-getmpcstatus)**() |
| vhq_result_t | **[GetVSRCertTree](_v_h_q_utils___m_x_8c.md#function-getvsrcerttree)**(vsr_cert_data_t * VSRCertArray, uint8 * NumVSRCerts) |
| bool | **[GetVCLInfo](_v_h_q_utils___m_x_8c.md#function-getvclinfo)**(vcl_info_t * VCLInfo, bool bDoDiags) |
| bool | **[DailyBatteryCheckReqd](_v_h_q_utils___m_x_8c.md#function-dailybatterycheckreqd)**(void ) |
| bool | **[DailyTSCalLogReqd](_v_h_q_utils___m_x_8c.md#function-dailytscallogreqd)**(void ) |
| void | **[LogTsCalibrationValues](_v_h_q_utils___m_x_8c.md#function-logtscalibrationvalues)**() |
| event_mask_t | **[CheckForEvents](_v_h_q_utils___m_x_8c.md#function-checkforevents)**(event_mask_t event_mask, device_event_content_t * device_event_content) |
| int | **[GenerateInvalidCommID](_v_h_q_utils___m_x_8c.md#function-generateinvalidcommid)**(void ) |
| void | **[WriteResponseToTempFile](_v_h_q_utils___m_x_8c.md#function-writeresponsetotempfile)**(char * file_name, VHQResponseSendMsg * responseMsg) |
| int | **[IsNumeric](_v_h_q_utils___m_x_8c.md#function-isnumeric)**(const char * ccharptr_CharacterList) |
| int | **[strcmp_Wrapper](_v_h_q_utils___m_x_8c.md#function-strcmp-wrapper)**(const char * s1, const char * s2, int intCaseSensitive) |
| int | **[strstr_Wrapper](_v_h_q_utils___m_x_8c.md#function-strstr-wrapper)**(const char * haystack, const char * needle, int intCaseSensitive) |
| pid_t | **[GetPIDbyName](_v_h_q_utils___m_x_8c.md#function-getpidbyname)**(const char * cchrptr_ProcessName, int intCaseSensitiveness, int intExactMatch, int * piCount) |
| void | **[CheckForInstance](_v_h_q_utils___m_x_8c.md#function-checkforinstance)**(char * AppName) |
| uint32 | **[GetMessageID](_v_h_q_utils___m_x_8c.md#function-getmessageid)**(int comm_id, uint32 rx_msg_id, const char * operation_id, bool comm_id_closed) |
| time_t | **[GetRTC](_v_h_q_utils___m_x_8c.md#function-getrtc)**(void ) |
| int | **[RebootDevice](_v_h_q_utils___m_x_8c.md#function-rebootdevice)**(event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| vhq_result_t | **[RestartApp](_v_h_q_utils___m_x_8c.md#function-restartapp)**(event_set_id_t event_set_id, event_id_t event_id, bool app_approval_required) |
| vhq_result_t | **[ProcessAction](_v_h_q_utils___m_x_8c.md#function-processaction)**(term_act_content_t * action_content, int comm_id, int message_id, int op_set_id, char * operation_id, srv_msg_type_t srv_msg_type, srv_op_type_t srv_op_type, event_set_id_t event_set_id, event_id_t event_id, bool continuation_required, bool app_approval_required) |
| vhq_result_t | **[ProcessDelFile](_v_h_q_utils___m_x_8c.md#function-processdelfile)**(del_file_content_t * del_file_content, char * additional_info, uint32 additional_info_size) |
| int | **[CopyFileAsRoot](_v_h_q_utils___m_x_8c.md#function-copyfileasroot)**(const char * pszSrc, const char * pszDest) |
| void | **[TarFiles](_v_h_q_utils___m_x_8c.md#function-tarfiles)**(const char * filesPath, const char * outputFile) |
| bool | **[copyOSConfigFiles](_v_h_q_utils___m_x_8c.md#function-copyosconfigfiles)**(char * outName, int OutFileNameSize) |
| bool | **[copyOSLogs](_v_h_q_utils___m_x_8c.md#function-copyoslogs)**(char * outName, int OutFileNameSize) |
| bool | **[copyUsrLogs](_v_h_q_utils___m_x_8c.md#function-copyusrlogs)**(char * outName, int OutFileNameSize) |
| bool | **[VHQRootGetFileList](_v_h_q_utils___m_x_8c.md#function-vhqrootgetfilelist)**(file_list_t list_type, char * OutFileName, int OutFileNameSize) |
| bool | **[VHQGetFileList](_v_h_q_utils___m_x_8c.md#function-vhqgetfilelist)**(file_list_t list_type, char * OutFileName, int OutFileNameSize) |
| bool | **[VHQScreenCapture](_v_h_q_utils___m_x_8c.md#function-vhqscreencapture)**(char * outfile) |
| bool | **[GetHostName](_v_h_q_utils___m_x_8c.md#function-gethostname)**(char * szStrHost) |
| void | **[VerifyConnection](_v_h_q_utils___m_x_8c.md#function-verifyconnection)**() |
| int | **[check4pppd](_v_h_q_utils___m_x_8c.md#function-check4pppd)**(void ) |
| ssize_t | **[readdata](_v_h_q_utils___m_x_8c.md#function-readdata)**(int sockd, void * vptr, size_t maxlen) |
| int | **[PosAgentResetPeer](_v_h_q_utils___m_x_8c.md#function-posagentresetpeer)**(void ) |
| int | **[PosAgentPeerPingServer](_v_h_q_utils___m_x_8c.md#function-posagentpeerpingserver)**(char * pszIpAddr, char * pszPOSagentVer, char * pszPOSOsVer, int iBufLen) |
| void | **[WaitForAppRegistration](_v_h_q_utils___m_x_8c.md#function-waitforappregistration)**(void ) |
| bool | **[getManfactureDate](_v_h_q_utils___m_x_8c.md#function-getmanfacturedate)**(char * manufacture_date_string, int buf_size) |
| char * | **[os_basename](_v_h_q_utils___m_x_8c.md#function-os-basename)**(const char * path) |
| void | **[crash_cleanup_push](_v_h_q_utils___m_x_8c.md#function-crash-cleanup-push)**(void(*)() routine) |
| void | **[crash_cleanup_pop](_v_h_q_utils___m_x_8c.md#function-crash-cleanup-pop)**(int execute) |
| void | **[crash_cleanup_popall](_v_h_q_utils___m_x_8c.md#function-crash-cleanup-popall)**() |
| uint32 | **[GetParamUpdateFileNum](_v_h_q_utils___m_x_8c.md#function-getparamupdatefilenum)**(void ) |
| void | **[ResetParamUpdateFileSearch](_v_h_q_utils___m_x_8c.md#function-resetparamupdatefilesearch)**(void ) |
| char * | **[GetNextParamUpdateFile](_v_h_q_utils___m_x_8c.md#function-getnextparamupdatefile)**(char * cur_file_name) |
| bool | **[is_temp_dl_file](_v_h_q_utils___m_x_8c.md#function-is-temp-dl-file)**(char * fn) |
| void | **[RemoveFailedMessages](_v_h_q_utils___m_x_8c.md#function-removefailedmessages)**(void ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| VHQPOS_INFO | **[g_sPosInfo](_v_h_q_utils___m_x_8c.md#variable-g-sposinfo)**  |
| bool | **[g_bPosInfoInited](_v_h_q_utils___m_x_8c.md#variable-g-bposinfoinited)**  |
| int | **[meminfo_file_handle](_v_h_q_utils___m_x_8c.md#variable-meminfo-file-handle)**  |
| int | **[handle_file_handle](_v_h_q_utils___m_x_8c.md#variable-handle-file-handle)**  |
| [UNUSED_FILE_INFO](struct_u_n_u_s_e_d___f_i_l_e___i_n_f_o.md)[] | **[unused_files](_v_h_q_utils___m_x_8c.md#variable-unused-files)**  |
| list_head_t * | **[_local_ApplicationList](_v_h_q_utils___m_x_8c.md#variable--local-applicationlist)**  |
| [Event_Callback_Function](_v_h_q_utils___m_x_8c.md#typedef-event-callback-function)[] | **[cb_Functions](_v_h_q_utils___m_x_8c.md#variable-cb-functions)**  |
| pthread_mutex_t | **[vcl_mutex](_v_h_q_utils___m_x_8c.md#variable-vcl-mutex)**  |
| time_t | **[last_battery_check_time](_v_h_q_utils___m_x_8c.md#variable-last-battery-check-time)**  |
| time_t | **[last_ts_cal_log_time](_v_h_q_utils___m_x_8c.md#variable-last-ts-cal-log-time)**  |
| pthread_mutex_t | **[rtc_clock_mutex](_v_h_q_utils___m_x_8c.md#variable-rtc-clock-mutex)**  |
| void(*[MAX_CRASH_CLEANUP_STACK_ENTRIES])() | **[crash_cleanup_stack](_v_h_q_utils___m_x_8c.md#variable-crash-cleanup-stack)**  |
| struct dirent ** | **[param_file_search_filenamelist](_v_h_q_utils___m_x_8c.md#variable-param-file-search-filenamelist)**  |
| int | **[num_param_file_search_files](_v_h_q_utils___m_x_8c.md#variable-num-param-file-search-files)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[_GNU_SOURCE](_v_h_q_utils___m_x_8c.md#define--gnu-source)**  |
|  | **[stricmp](_v_h_q_utils___m_x_8c.md#define-stricmp)**  |
|  | **[IP_ADDR_GREP_OUTFILE](_v_h_q_utils___m_x_8c.md#define-ip-addr-grep-outfile)**  |
|  | **[VCL_PATH](_v_h_q_utils___m_x_8c.md#define-vcl-path)**  |
|  | **[VCL_KMAILMAN_PATH](_v_h_q_utils___m_x_8c.md#define-vcl-kmailman-path)**  |
|  | **[GREP_EXECUTABLE](_v_h_q_utils___m_x_8c.md#define-grep-executable)**  |
|  | **[GUI_MGR_LIB_FILE](_v_h_q_utils___m_x_8c.md#define-gui-mgr-lib-file)**  |
|  | **[DIAG_START_FW_MAJ_VER](_v_h_q_utils___m_x_8c.md#define-diag-start-fw-maj-ver)**  |
|  | **[DIAG_START_FW_MID_VER](_v_h_q_utils___m_x_8c.md#define-diag-start-fw-mid-ver)**  |
|  | **[DIAG_START_FW_MIN_VER](_v_h_q_utils___m_x_8c.md#define-diag-start-fw-min-ver)**  |
|  | **[FILE_LIST_EXECUTABLE](_v_h_q_utils___m_x_8c.md#define-file-list-executable)**  |
|  | **[VCL_VERSION_GREP_OUTFILE](_v_h_q_utils___m_x_8c.md#define-vcl-version-grep-outfile)**  |
|  | **[VCL_VERSION_GREP_STR](_v_h_q_utils___m_x_8c.md#define-vcl-version-grep-str)**  |
|  | **[VCL_VERSION_HEADER_STR](_v_h_q_utils___m_x_8c.md#define-vcl-version-header-str)**  |
|  | **[VCL_GREP_RESULTS_DELAY_SEC](_v_h_q_utils___m_x_8c.md#define-vcl-grep-results-delay-sec)**  |
|  | **[VCL_NAME_STRING](_v_h_q_utils___m_x_8c.md#define-vcl-name-string)**  |
|  | **[VCL_KMAILMAN_VERSION_GREP_STR](_v_h_q_utils___m_x_8c.md#define-vcl-kmailman-version-grep-str)**  |
|  | **[VCL_KMAILMAN_VERSION_HEADER_STR](_v_h_q_utils___m_x_8c.md#define-vcl-kmailman-version-header-str)**  |
|  | **[VCL_KMAILMAN_NAME_STRING](_v_h_q_utils___m_x_8c.md#define-vcl-kmailman-name-string)**  |
|  | **[MEM_FREE_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-mem-free-search-string)**  |
|  | **[MEM_TOTAL_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-mem-total-search-string)**  |
|  | **[MEMORY_FILE](_v_h_q_utils___m_x_8c.md#define-memory-file)**  |
|  | **[HANDLE_FILE](_v_h_q_utils___m_x_8c.md#define-handle-file)**  |
|  | **[GREP_FOR_VCL_INFO](_v_h_q_utils___m_x_8c.md#define-grep-for-vcl-info)**  |
|  | **[GREP_FOR_KMAILMAN_INFO](_v_h_q_utils___m_x_8c.md#define-grep-for-kmailman-info)**  |
|  | **[USB_PERIPH_DEVICE_INFO_MAX_TAG_LEN](_v_h_q_utils___m_x_8c.md#define-usb-periph-device-info-max-tag-len)**  |
|  | **[SEARCH_END](_v_h_q_utils___m_x_8c.md#define-search-end)**  |
|  | **[PTP_host](_v_h_q_utils___m_x_8c.md#define-ptp-host)**  |
|  | **[Mask](_v_h_q_utils___m_x_8c.md#define-mask)**  |
|  | **[PACKAGE_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-package-search-string)**  |
|  | **[PACKAGE_VERSION_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-package-version-search-string)**  |
|  | **[PACKAGE_SECTION_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-package-section-search-string)**  |
|  | **[PACKAGE_SIZE_SEARCH_STRING](_v_h_q_utils___m_x_8c.md#define-package-size-search-string)**  |
|  | **[PACKAGE_FILE](_v_h_q_utils___m_x_8c.md#define-package-file)**  |
|  | **[MX_BRIDGE_PATH](_v_h_q_utils___m_x_8c.md#define-mx-bridge-path)**  |
|  | **[MAXNBSCRIPT](_v_h_q_utils___m_x_8c.md#define-maxnbscript)**  |
|  | **[DF_EXECUTABLE](_v_h_q_utils___m_x_8c.md#define-df-executable)**  |
|  | **[MNT_SRAM](_v_h_q_utils___m_x_8c.md#define-mnt-sram)**  |
|  | **[MNT_SD](_v_h_q_utils___m_x_8c.md#define-mnt-sd)**  |
|  | **[PAGES_TO_KB](_v_h_q_utils___m_x_8c.md#define-pages-to-kb)**(n)  |
|  | **[RPT_FULL](_v_h_q_utils___m_x_8c.md#define-rpt-full)**  |
|  | **[RPT_CONCISE](_v_h_q_utils___m_x_8c.md#define-rpt-concise)**  |
|  | **[RPT_XML](_v_h_q_utils___m_x_8c.md#define-rpt-xml)**  |
|  | **[RPT_ALL](_v_h_q_utils___m_x_8c.md#define-rpt-all)**  |
|  | **[TWENTY_FOUR_HOURS](_v_h_q_utils___m_x_8c.md#define-twenty-four-hours)**  |
|  | **[PROC_DIRECTORY](_v_h_q_utils___m_x_8c.md#define-proc-directory)**  |
|  | **[PROC_CMD_LINE](_v_h_q_utils___m_x_8c.md#define-proc-cmd-line)**  |
|  | **[CASE_SENSITIVE](_v_h_q_utils___m_x_8c.md#define-case-sensitive)**  |
|  | **[CASE_INSENSITIVE](_v_h_q_utils___m_x_8c.md#define-case-insensitive)**  |
|  | **[EXACT_MATCH](_v_h_q_utils___m_x_8c.md#define-exact-match)**  |
|  | **[INEXACT_MATCH](_v_h_q_utils___m_x_8c.md#define-inexact-match)**  |
|  | **[OS_CONFIG_FILE_OUT_NAME](_v_h_q_utils___m_x_8c.md#define-os-config-file-out-name)**  |
|  | **[OS_LOG_FILE_OUT_NAME](_v_h_q_utils___m_x_8c.md#define-os-log-file-out-name)**  |
|  | **[USR_LOG_FILE_OUT_NAME](_v_h_q_utils___m_x_8c.md#define-usr-log-file-out-name)**  |
|  | **[HTTPS_TYPE](_v_h_q_utils___m_x_8c.md#define-https-type)**  |
|  | **[PING_REQ_STR](_v_h_q_utils___m_x_8c.md#define-ping-req-str)**  |
|  | **[RESET_REQ_STR](_v_h_q_utils___m_x_8c.md#define-reset-req-str)**  |
|  | **[MAX_CRASH_CLEANUP_STACK_ENTRIES](_v_h_q_utils___m_x_8c.md#define-max-crash-cleanup-stack-entries)**  |

## Detailed Description


Some platform dependent utility functions 

## Types Documentation

### typedef Event_Callback_Function

```cpp
typedef void(* Event_Callback_Function) (char *pszFormName, int iControlID, void *pData);
```


### typedef proc_data_t

```cpp
typedef struct _proc_data_t proc_data_t;
```



## Functions Documentation

### function test_encrypt

```cpp
int test_encrypt(
    int ,
    char * ,
    char * ,
    int ,
    char * 
)
```


### function CMDiag

```cpp
short CMDiag(
    short diagOption,
    char * data,
    short * dataLength
)
```


### function GetProcessRAMData

```cpp
bool GetProcessRAMData(
    char * process_status_file,
    int * MemUsed
)
```


**Parameters**: 

  * **process_status_file** = process status file name 
  * **MemUsed** = memory used.


**Return**: TRUE if process RAM data gathered successfully, FALSE otherwise 

Function gather RAM data of a process. 


### function GetPackages

```cpp
static bool GetPackages(
    list_head_t * ApplicationList
)
```


### function GetProtectedExtRAM

```cpp
static bool GetProtectedExtRAM(
    memory_profile_t * memProfile
)
```


### function connectSerialPPP

```cpp
void connectSerialPPP(
    char * pszPort,
    char * pszOptions,
    int iBaud
)
```


### function CleanupUnusedFiles

```cpp
void CleanupUnusedFiles(
    void 
)
```


**Return**: void 

This cleans up an unused file in a given location. A file with an exact match or a partial match can be removed.


### function GetVclVersion

```cpp
static bool GetVclVersion(
    char * filename,
    char * grep_str,
    char * header_str,
    char * version_str,
    int version_str_length
)
```


### function GrepForPCipaddr

```cpp
bool GrepForPCipaddr(
    char * pszAddr
)
```


### function _initPackageListArray

```cpp
static void _initPackageListArray(
    list_head_t * ApplicationList
)
```


### function _ipkgFilteredListCb

```cpp
static int _ipkgFilteredListCb(
    char * name,
    char * dest,
    char * version,
    char * timestamp,
    long size,
    void * userdata
)
```


### function IsVCLDiagSupported

```cpp
static bool IsVCLDiagSupported(
    const char * versionString
)
```


### function GetBatteryStatus

```cpp
int GetBatteryStatus(
    int * voltage
)
```


**Parameters**: 

  * **voltage** = voltage


**Return**: battery status 

This function gathers the battery status info to send to server. 


### function GetModelNumber

```cpp
int GetModelNumber(
    char * pszModelNum,
    uint32 iModelNumBufLen
)
```


**Parameters**: 

  * **pszModelNum** = buffer to store model number. 
  * **iModelNumBufLen** = model number buffer length.


**Return**: int 

This function gets the model number. 


### function GetCommonName

```cpp
int GetCommonName(
    char * pszCommonName,
    int iCommonNameBufLen
)
```


**Parameters**: 

  * **pszCommonName** = buffer to store common name. 
  * **iCommonNameBufLen** = length of buffer.


**Return**: length of common name string. 

This function gets a common name with model number and serial number. 


### function getPCipAddr

```cpp
int getPCipAddr(
    char * pszAddr
)
```


### function internal_GetIPAddress

```cpp
int internal_GetIPAddress(
    char * pszIPAddress,
    int iIPAddressBufLen
)
```


**Parameters**: 

  * **pszIPAddress** = pointer to IP address 
  * **iIPAddressBufLen** = IP address buffer length


**Return**: int 0, if success 

Function gather the IP address information. 


### function internal_GetMACAddress

```cpp
int internal_GetMACAddress(
    char * pszMACAddress,
    int iMACAddressBufLen
)
```


**Parameters**: 

  * **pszMACAddress** = pointer to MAC address 
  * **iMACAddressBufLen** = MAC address buffer length


**Return**: int 0,if success 

Function gather the MAC address information. 


### function GetNetworkConfig

```cpp
void GetNetworkConfig(
    device_profile_t * devProfile
)
```


**Parameters**: 

  * **devProfile** = pointer to device profile


**Return**: void 

Function gather the network configuration information according to operating mode. to send to server. 


### function GetSerialNumber

```cpp
int GetSerialNumber(
    char * pszSerialNumber
)
```


**Parameters**: 

  * **pszSerialNumber** = pointer to serial number info.


**Return**: int, length of serial number. 

Function gather the serial number info. 


### function GetUsrAppInfo

```cpp
bool GetUsrAppInfo(
    list_head_t * UsrAppData
)
```


**Parameters**: 

  * **UsrAppData** = pointer to user application details.


**Return**: TRUE, if success. 

Function gather the user application data 


### function GetApplications

```cpp
bool GetApplications(
    list_head_t * ApplicationList
)
```


**Parameters**: 

  * **ApplicationList** = pointer to application data. 
  * **ArraySize** = maximum number of applications 
  * **num_apps** = number of applications


**Return**: TRUE, if success. 

Function gather the application data to send to server. 


### function CleanApplicationsList

```cpp
void CleanApplicationsList(
    list_head_t * ApplicationList
)
```


**Parameters**: 

  * **ApplicationList** = pointer to application data. 
  * **ArraySize** = maximum number of applications


**Return**: TRUE, if success. 

Function clears the application list after sending to server. 


### function app_main

```cpp
void * app_main(
    void * pData
)
```


### function SetCommTypeInfo

```cpp
static uint8 SetCommTypeInfo(
    struct comm_s * pComm,
    char * pszName
)
```


### function GetDeviceProfile

```cpp
bool GetDeviceProfile(
    device_profile_t * dev_profile
)
```


**Parameters**: 

  * **dev_profile** = pointer to dev_profile data


**Return**: TRUE, if success. 

Function gather the device profile details to send to server. 


### function GetDiagCounters

```cpp
bool GetDiagCounters(
    diag_counter_t * CountersArray,
    uint8 ArraySize,
    uint16 * num_counters
)
```


**Parameters**: 

  * **CountersArray** = pointer to diagnostic counters data. 
  * **ArraySize** = maximum number of diagnostic counters 
  * **num_counters** = number of counters


**Return**: TRUE, if success. 

Function gather the diagnostic counter data to send to server. 


### function GetHandleInfo

```cpp
bool GetHandleInfo(
    int * OpenHandles,
    int * MaxHandles
)
```


**Parameters**: 

  * **OpenHandles** = points to number of open file handles 
  * **MaxHandles** = maximum number of handles.


**Return**: TRUE, if success. 

Function gather the file handle information. 


### function ReadProcData

```cpp
bool ReadProcData(
    char * stat_file,
    char proc_name[MAX_PROCESS_NAME_LENGTH],
    unsigned long * utime,
    long * stime
)
```


**Parameters**: 

  * **stat_file** = process data location 
  * **proc_name** = process name 
  * **utime** = utime of Process. 
  * **stime** = stime


**Return**: TRUE, if success. 

Function gather the process data. 


### function GetProcessInfo

```cpp
bool GetProcessInfo(
    process_info_t * ProcessArray,
    uint8 ArraySize,
    uint16 * num_processes
)
```


**Parameters**: 

  * **ProcessArray** = process usage information 
  * **ArraySize** = maximum number of processes 
  * **num_processes** = number of processes


**Return**: TRUE, if success. 

Function gather the process usage data. 


### function CreateFileListing

```cpp
bool CreateFileListing(
    char * OutputFileName,
    char * directory
)
```


**Parameters**: 

  * **OutputFileName** = output filename to which directory files should be copied. 
  * **directory** = name of the directory from where files should be listed.


**Return**: TRUE, if success; FALSE, otherwise. 

This function lists the files in a directory. 


### function ConvertKeyType

```cpp
static key_type_t ConvertKeyType(
    int keys
)
```


### function ms_keys_check

```cpp
static void ms_keys_check(
    key_data_t * KeyArray,
    struct keyRecord * k_ptr
)
```


### function ade_dukpt_keys_check

```cpp
static void ade_dukpt_keys_check(
    key_data_t * KeyArray,
    struct keyRecord * k_ptr
)
```


### function process_keys

```cpp
static void process_keys(
    int keys,
    key_data_t * KeyArray,
    uint8 * pNum_keys,
    uint8 MaxKeys,
    void(*)(key_data_t *KeyArray, struct keyRecord *k_ptr) check_cb
)
```


### function scan_vss

```cpp
static int scan_vss(
    key_data_t * KeyArray,
    uint8 * pNum_keys,
    uint8 MaxKeys
)
```


### function GetKeyDataLegacy

```cpp
vhq_result_t GetKeyDataLegacy(
    key_data_t * KeyDataArray,
    uint8 * ArraySize,
    uint8 MaxKeys
)
```


**Parameters**: 

  * **KeyDataArray** = pointer to key data obtained. 
  * **ArraySize** = number of keys.


**Return**: vhq_result_t 

This function gathers the key data to send to server. 


### function GetMemoryProfile

```cpp
bool GetMemoryProfile(
    memory_profile_t * mem_profile
)
```


**Parameters**: 

  * **mem_profile** = pointer to memory data obtained.


**Return**: TRUE,if success. 

This function gathers the memory profile data to send to server. 


### function GetRAMData

```cpp
bool GetRAMData(
    int * totalRAM,
    int * freeRAM
)
```


**Parameters**: 

  * **totalRAM** = total RAM 
  * **freeRAM** = free RAM.


**Return**: TRUE if file was parsed successfully, FALSE otherwise 

Function gather parses the /proc/meminfo file to find memory information. 


### function GetMPCStatus

```cpp
int GetMPCStatus()
```


### function GetVSRCertTree

```cpp
vhq_result_t GetVSRCertTree(
    vsr_cert_data_t * VSRCertArray,
    uint8 * NumVSRCerts
)
```


### function GetVCLInfo

```cpp
bool GetVCLInfo(
    vcl_info_t * VCLInfo,
    bool bDoDiags
)
```


**Parameters**: 

  * **VCLInfo** = pointer to VCL info 
  * **bDoDiags** = TRUE, to get diag data.


**Return**: TRUE, if VCL info sent. 

Function gathers information about VCL info to send to server. 


### function DailyBatteryCheckReqd

```cpp
bool DailyBatteryCheckReqd(
    void 
)
```


**Return**: TRUE, if battery check done. 

Function logs the daily battery check, each time it is done. 


### function DailyTSCalLogReqd

```cpp
bool DailyTSCalLogReqd(
    void 
)
```


**Return**: TRUE, if TS caliberation done. 

Function logs the TS caliberation time, each time it is done. 


### function LogTsCalibrationValues

```cpp
static void LogTsCalibrationValues()
```


**Return**: event mask 

Function logs the touch screen caliberation values to send to server if enabled. 


### function CheckForEvents

```cpp
event_mask_t CheckForEvents(
    event_mask_t event_mask,
    device_event_content_t * device_event_content
)
```


**Parameters**: 

  * **event_mask** = event mask


**Return**: event mask 

Function checks for different mask values to send the information to server. 


### function GenerateInvalidCommID

```cpp
int GenerateInvalidCommID(
    void 
)
```


### function WriteResponseToTempFile

```cpp
void WriteResponseToTempFile(
    char * file_name,
    VHQResponseSendMsg * responseMsg
)
```


**Parameters**: 

  * **file_name** = filename. 
  * **responseMsg** = pointer to response.


**Return**: void 

This function writes a download and install event result response to a file. 


### function IsNumeric

```cpp
int IsNumeric(
    const char * ccharptr_CharacterList
)
```


### function strcmp_Wrapper

```cpp
int strcmp_Wrapper(
    const char * s1,
    const char * s2,
    int intCaseSensitive
)
```


### function strstr_Wrapper

```cpp
int strstr_Wrapper(
    const char * haystack,
    const char * needle,
    int intCaseSensitive
)
```


### function GetPIDbyName

```cpp
pid_t GetPIDbyName(
    const char * cchrptr_ProcessName,
    int intCaseSensitiveness,
    int intExactMatch,
    int * piCount
)
```


**Parameters**: 

  * **cchrptr_ProcessName** = pointer to process name. 
  * **intCaseSensitiveness** = with/without case sensitivity rule. 
  * **intExactMatch** = search/compare rule definition 
  * **piCount** = pointer to counter of active PIDs with the same process name


**Return**: PID of last founded process Error codes: -1 : process no found -2 : error of procFS processing -3 : incorrect input data 

This Function searches for process PID. The number of instances with same process name is represented by counter. 


### function CheckForInstance

```cpp
void CheckForInstance(
    char * AppName
)
```


**Parameters**: 

  * **AppName** = Application name.


**Return**: void 

This function checks for number of instances with same PID. 


### function GetMessageID

```cpp
uint32 GetMessageID(
    int comm_id,
    uint32 rx_msg_id,
    const char * operation_id,
    bool comm_id_closed
)
```


**Parameters**: 

  * **comm_id** = communication ID 
  * **rx_msg_id** = message ID 
  * **operation_id** = operation ID 
  * **comm_id_closed** = TRUE, if communication ID should be closed.


**Return**: uint32 

This function returns the message id for communication. 


### function GetRTC

```cpp
time_t GetRTC(
    void 
)
```


**Return**: time_t, returns the RTC time 

This function returns the RTC time. 


### function RebootDevice

```cpp
int RebootDevice(
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


### function RestartApp

```cpp
vhq_result_t RestartApp(
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool app_approval_required
)
```


**Parameters**: 

  * **event_set_id** = event set ID of event 
  * **event_id** = event ID 
  * **app_approval_required** = TRUE, if application approval required for event.


**Return**: VHQ_SUCCESS, if success. 

This function unregister and restarts the applications. 


### function ProcessAction

```cpp
vhq_result_t ProcessAction(
    term_act_content_t * action_content,
    int comm_id,
    int message_id,
    int op_set_id,
    char * operation_id,
    srv_msg_type_t srv_msg_type,
    srv_op_type_t srv_op_type,
    event_set_id_t event_set_id,
    event_id_t event_id,
    bool continuation_required,
    bool app_approval_required
)
```


**Parameters**: 

  * **action_content** = terminal action details. 
  * **comm_id** = communication ID 
  * **message_id** = message ID 
  * **op_set_id** = operation set ID. 
  * **operation_id** = operation ID. 
  * **srv_msg_type** = server message type. 
  * **srv_op_type** = server operation type. 
  * **event_set_id** = event set ID of event. 
  * **event_id** = event ID of event 
  * **continuation_required** = TRUE, if need to save the exicuting flag before a reboot. 
  * **app_approval_required** = TRUE, if application approval required.


**Return**: VHQ_SUCCESS, if success. 

This function processes the terminal action events like reboot/set clock. 


### function ProcessDelFile

```cpp
vhq_result_t ProcessDelFile(
    del_file_content_t * del_file_content,
    char * additional_info,
    uint32 additional_info_size
)
```


**Parameters**: 

  * **del_file_content** = pointer to delete file details 
  * **additional_info** = additional info to send to server. 
  * **additional_info_size** = additional info size.


**Return**: VHQ_SUCCESS, if success. 

This function processes the delete file event 


### function CopyFileAsRoot

```cpp
int CopyFileAsRoot(
    const char * pszSrc,
    const char * pszDest
)
```


**Parameters**: 

  * **pszSrc** = source file 
  * **pszDest** = destination file.


**Return**: 0 if copied. 

Function copies a file from source to destination. 


### function TarFiles

```cpp
void TarFiles(
    const char * filesPath,
    const char * outputFile
)
```


### function copyOSConfigFiles

```cpp
static bool copyOSConfigFiles(
    char * outName,
    int OutFileNameSize
)
```


**Parameters**: 

  * **outName** = filename 
  * **OutFileNameSize** = size of filename string.


**Return**: TRUE, if file found. 

This function gets the OS config filename to upload to server. 


### function copyOSLogs

```cpp
static bool copyOSLogs(
    char * outName,
    int OutFileNameSize
)
```


**Parameters**: 

  * **outName** = filename 
  * **OutFileNameSize** = size of filename string.


**Return**: TRUE, if file found. 

This function gets the OS logs filename to upload to server. 


### function copyUsrLogs

```cpp
static bool copyUsrLogs(
    char * outName,
    int OutFileNameSize
)
```


**Parameters**: 

  * **outName** = filename 
  * **OutFileNameSize** = size of filename string.


**Return**: TRUE, if file found. 

This function gets the user logs filename to upload to server. 


### function VHQRootGetFileList

```cpp
bool VHQRootGetFileList(
    file_list_t list_type,
    char * OutFileName,
    int OutFileNameSize
)
```


**Parameters**: 

  * **list_type** = type of file 
  * **OutFileName** = filename 
  * **OutFileNameSize** = size of filename string.


**Return**: TRUE, if file found. 

This function gets the filename to upload to server. 


### function VHQGetFileList

```cpp
bool VHQGetFileList(
    file_list_t list_type,
    char * OutFileName,
    int OutFileNameSize
)
```


**Parameters**: 

  * **list_type** = type of file 
  * **OutFileName** = filename 
  * **OutFileNameSize** = size of filename string.


**Return**: TRUE, if file found. 

This function gets the filename to upload to server. 


### function VHQScreenCapture

```cpp
bool VHQScreenCapture(
    char * outfile
)
```


**Parameters**: 

  * **outName** = filename


**Return**: TRUE, if file found. 

This function captures screen 


### function GetHostName

```cpp
bool GetHostName(
    char * szStrHost
)
```


### function VerifyConnection

```cpp
void VerifyConnection()
```


### function check4pppd

```cpp
int check4pppd(
    void 
)
```


### function readdata

```cpp
static ssize_t readdata(
    int sockd,
    void * vptr,
    size_t maxlen
)
```


### function PosAgentResetPeer

```cpp
int PosAgentResetPeer(
    void 
)
```


### function PosAgentPeerPingServer

```cpp
int PosAgentPeerPingServer(
    char * pszIpAddr,
    char * pszPOSagentVer,
    char * pszPOSOsVer,
    int iBufLen
)
```


### function WaitForAppRegistration

```cpp
void WaitForAppRegistration(
    void 
)
```


**Return**: void 

This function reads the installed users list from SI and wiats for PARAM_APP_REG_WAIT_TIME for the applications to get registered. 


### function getManfactureDate

```cpp
bool getManfactureDate(
    char * manufacture_date_string,
    int buf_size
)
```


**Parameters**: 

  * **manufacture_date_string** = pointer to manufacture date string 
  * **buf_size** = size of manufacture date string.


**Return**: 

  * int
  * TRUE, if found 


This function checks if VRK is installed or not


This function saves the manufacture date string to the buffer. 


### function os_basename

```cpp
char * os_basename(
    const char * path
)
```


### function crash_cleanup_push

```cpp
void crash_cleanup_push(
    void(*)() routine
)
```


**Parameters**: 

  * **routine** = pointer to callback.


**Return**: void 

This function is similar to pthread_cleanup_push() but delivered to register callback which will be processed once application receives SIGSEGV. 


### function crash_cleanup_pop

```cpp
void crash_cleanup_pop(
    int execute
)
```


**Parameters**: 

  * **execute** = if non-zero invokes routine.


**Return**: void 

This function is similar to pthread_cleanup_pop() but delivered to unregister callback which will be processed once application receives SIGSEGV. 


### function crash_cleanup_popall

```cpp
void crash_cleanup_popall()
```


**Return**: void 

This function is similar to pthread_cleanup_pop() but delivered to unregister and invoke all callbacks once application receives SIGSEGV.


### function GetParamUpdateFileNum

```cpp
uint32 GetParamUpdateFileNum(
    void 
)
```


**Return**: 0, if error; The number of param update files otherwise. 

This function reads the number of parameter update files. 


### function ResetParamUpdateFileSearch

```cpp
void ResetParamUpdateFileSearch(
    void 
)
```


**Return**: void 

This function resets the parameter update file details for reading. 


### function GetNextParamUpdateFile

```cpp
char * GetNextParamUpdateFile(
    char * cur_file_name
)
```


**Parameters**: 

  * **cur_file_name** = current filename


**Return**: char*, returns the next parameter filename after current param file. 

This function searches and returns the next parameter update file for reading. 


### function is_temp_dl_file

```cpp
bool is_temp_dl_file(
    char * fn
)
```


**Parameters**: 

  * **fn** = filename to check.


**Return**: TRUE, if filename is a temp download file 

This function checks if the filename given is a partially downloaded file. 


### function RemoveFailedMessages

```cpp
void RemoveFailedMessages(
    void 
)
```



## Attributes Documentation

### variable g_sPosInfo

```cpp
VHQPOS_INFO g_sPosInfo;
```


### variable g_bPosInfoInited

```cpp
bool g_bPosInfoInited = FALSE;
```


### variable meminfo_file_handle

```cpp
static int meminfo_file_handle = -1;
```


### variable handle_file_handle

```cpp
static int handle_file_handle = -1;
```


### variable unused_files

```cpp
UNUSED_FILE_INFO[] unused_files =
{


















  { SEARCH_END, "", FALSE}};
```


### variable _local_ApplicationList

```cpp
list_head_t * _local_ApplicationList;
```


**Parameters**: 

  * **ApplicationList** = pointer to application data. 
  * **ArraySize** = maximum number of applications 
  * **num_apps** = number of applications.


**Return**: void 

This function gathers the kernel info and OS type application info to send to server. 


### variable cb_Functions

```cpp
Event_Callback_Function[] cb_Functions = { 0, };
```


### variable vcl_mutex

```cpp
static pthread_mutex_t vcl_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable last_battery_check_time

```cpp
static time_t last_battery_check_time = 0;
```


### variable last_ts_cal_log_time

```cpp
static time_t last_ts_cal_log_time = 0;
```


### variable rtc_clock_mutex

```cpp
static pthread_mutex_t rtc_clock_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable crash_cleanup_stack

```cpp
static void(*[MAX_CRASH_CLEANUP_STACK_ENTRIES])() crash_cleanup_stack =
{ NULL };
```


### variable param_file_search_filenamelist

```cpp
static struct dirent ** param_file_search_filenamelist = NULL;
```


### variable num_param_file_search_files

```cpp
static int num_param_file_search_files = 0;
```



## Macros Documentation

### define _GNU_SOURCE

```cpp
#define _GNU_SOURCE 
```


### define stricmp

```cpp
#define stricmp strcasecmp
```


### define IP_ADDR_GREP_OUTFILE

```cpp
#define IP_ADDR_GREP_OUTFILE "/var/tmp/pc_ip_addr"
```


### define VCL_PATH

```cpp
#define VCL_PATH "/bin/semtekd"
```


### define VCL_KMAILMAN_PATH

```cpp
#define VCL_KMAILMAN_PATH "/home/usr1/kmailman"
```


### define GREP_EXECUTABLE

```cpp
#define GREP_EXECUTABLE "/bin/grep"
```


### define GUI_MGR_LIB_FILE

```cpp
#define GUI_MGR_LIB_FILE "/home/usr1/lib/libguimgr.so"
```


### define DIAG_START_FW_MAJ_VER

```cpp
#define DIAG_START_FW_MAJ_VER 3
```


### define DIAG_START_FW_MID_VER

```cpp
#define DIAG_START_FW_MID_VER 2
```


### define DIAG_START_FW_MIN_VER

```cpp
#define DIAG_START_FW_MIN_VER "0011"
```


### define FILE_LIST_EXECUTABLE

```cpp
#define FILE_LIST_EXECUTABLE "/bin/ls"
```


### define VCL_VERSION_GREP_OUTFILE

```cpp
#define VCL_VERSION_GREP_OUTFILE "vcl_version_info"
```


### define VCL_VERSION_GREP_STR

```cpp
#define VCL_VERSION_GREP_STR "BUILD DATE"
```


### define VCL_VERSION_HEADER_STR

```cpp
#define VCL_VERSION_HEADER_STR "SEMTEKD"
```


### define VCL_GREP_RESULTS_DELAY_SEC

```cpp
#define VCL_GREP_RESULTS_DELAY_SEC 10
```


### define VCL_NAME_STRING

```cpp
#define VCL_NAME_STRING "Verishield Crypto Library"
```


### define VCL_KMAILMAN_VERSION_GREP_STR

```cpp
#define VCL_KMAILMAN_VERSION_GREP_STR "Remote Key Distribution Client"
```


### define VCL_KMAILMAN_VERSION_HEADER_STR

```cpp
#define VCL_KMAILMAN_VERSION_HEADER_STR "KMAILMAN - Remote Key Distribution Client -"
```


### define VCL_KMAILMAN_NAME_STRING

```cpp
#define VCL_KMAILMAN_NAME_STRING "Verishield Crypto Library - Mailman"
```


### define MEM_FREE_SEARCH_STRING

```cpp
#define MEM_FREE_SEARCH_STRING "MemFree:"
```


### define MEM_TOTAL_SEARCH_STRING

```cpp
#define MEM_TOTAL_SEARCH_STRING "MemTotal:"
```


### define MEMORY_FILE

```cpp
#define MEMORY_FILE "/proc/meminfo"
```


### define HANDLE_FILE

```cpp
#define HANDLE_FILE "/proc/sys/fs/file-nr"
```


### define GREP_FOR_VCL_INFO

```cpp
#define GREP_FOR_VCL_INFO 0
```


### define GREP_FOR_KMAILMAN_INFO

```cpp
#define GREP_FOR_KMAILMAN_INFO 1
```


### define USB_PERIPH_DEVICE_INFO_MAX_TAG_LEN

```cpp
#define USB_PERIPH_DEVICE_INFO_MAX_TAG_LEN 32
```


### define SEARCH_END

```cpp
#define SEARCH_END "SEARCH_END"
```


### define PTP_host

```cpp
#define PTP_host "P-t-P:"
```


### define Mask

```cpp
#define Mask "Mask:"
```


### define PACKAGE_SEARCH_STRING

```cpp
#define PACKAGE_SEARCH_STRING "Package:"
```


### define PACKAGE_VERSION_SEARCH_STRING

```cpp
#define PACKAGE_VERSION_SEARCH_STRING "Version:"
```


### define PACKAGE_SECTION_SEARCH_STRING

```cpp
#define PACKAGE_SECTION_SEARCH_STRING "Section:"
```


### define PACKAGE_SIZE_SEARCH_STRING

```cpp
#define PACKAGE_SIZE_SEARCH_STRING "Size:"
```


### define PACKAGE_FILE

```cpp
#define PACKAGE_FILE "/ipkg/status"
```


### define MX_BRIDGE_PATH

```cpp
#define MX_BRIDGE_PATH "/home/usr1/MXBridge"
```


### define MAXNBSCRIPT

```cpp
#define MAXNBSCRIPT 192
```


### define DF_EXECUTABLE

```cpp
#define DF_EXECUTABLE "/bin/df"
```


### define MNT_SRAM

```cpp
#define MNT_SRAM "/mnt/sram"
```


### define MNT_SD

```cpp
#define MNT_SD "/mnt/SD"
```


### define PAGES_TO_KB

```cpp
#define PAGES_TO_KB(
    n
)
(unsigned long)( (n) << page_to_kb_shift )
```


### define RPT_FULL

```cpp
#define RPT_FULL 0x01
```


### define RPT_CONCISE

```cpp
#define RPT_CONCISE 0x02
```


### define RPT_XML

```cpp
#define RPT_XML 0x04
```


### define RPT_ALL

```cpp
#define RPT_ALL 0xff
```


### define TWENTY_FOUR_HOURS

```cpp
#define TWENTY_FOUR_HOURS (60 * 60 * 24)
```


### define PROC_DIRECTORY

```cpp
#define PROC_DIRECTORY "/proc/"
```


### define PROC_CMD_LINE

```cpp
#define PROC_CMD_LINE "/cmdline"
```


### define CASE_SENSITIVE

```cpp
#define CASE_SENSITIVE 1
```


### define CASE_INSENSITIVE

```cpp
#define CASE_INSENSITIVE 0
```


### define EXACT_MATCH

```cpp
#define EXACT_MATCH 1
```


### define INEXACT_MATCH

```cpp
#define INEXACT_MATCH 0
```


### define OS_CONFIG_FILE_OUT_NAME

```cpp
#define OS_CONFIG_FILE_OUT_NAME "/tmp/OSConfigFiles.tgz"
```


### define OS_LOG_FILE_OUT_NAME

```cpp
#define OS_LOG_FILE_OUT_NAME "/tmp/OSLogs.tgz"
```


### define USR_LOG_FILE_OUT_NAME

```cpp
#define USR_LOG_FILE_OUT_NAME "/tmp/UsrLogs.tgz"
```


### define HTTPS_TYPE

```cpp
#define HTTPS_TYPE "https://"
```


### define PING_REQ_STR

```cpp
#define PING_REQ_STR "ping connection"
```


### define RESET_REQ_STR

```cpp
#define RESET_REQ_STR "reset"
```


### define MAX_CRASH_CLEANUP_STACK_ENTRIES

```cpp
#define MAX_CRASH_CLEANUP_STACK_ENTRIES 10
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#ifndef __cplusplus
#define _GNU_SOURCE
#endif

#include <dirent.h>
#include <dlfcn.h>
#include <fcntl.h>
#include <ippleg.h>
#include <memory.h>
#include <pwd.h>
#ifndef Mx2
#include <RFCRapi.h>
#endif
#include <stdio.h>
#include <string.h>
#include <svc.h>
#include <svcInfoAPI.h>
#include <svcNetwork.h>
#include <svcsec.h>
#include <syslog.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/stat.h>
#include <sys/statfs.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/socket.h>       /*  socket definitions        */
#include <arpa/inet.h>        /*  inet (3) funtions         */
#include <time.h>
#include <unistd.h>
#include <netdb.h>
#include <pthread.h>
#include "com/libcom.h"

#ifdef Mx2
#include <librtc.h>
#include <sys/sysinfo.h>
#include <vault/pedguard.h>
#ifdef _VOS2
#include "verifone/diag_counters.h"
#else
#include <verifone/diag_counters_API.h>
#endif
#include "libsecins.h"
//#include "svcmgr/svc_rfcr.h"
#include "svcmgr/svc_security.h"
#include "svcmgr/svc_sigcap.h"
#include "svcmgr/svc_sysinfo.h"
#include "svcmgr/svc_utility.h"
#include "svcmgr/svc_ux100.h"
#include <svcmgr/svc_net.h>
#include <svcmgr/svc_bluetooth.h>
#include <platforminfo_api.h>
#include <libvoy.h>
#include <svcsec.h>
#include <vault/pedguard.h>
#include "platforminfo_api.h"
#else
#include <libvoy.h>
#include "diag_counters_API.h"
#include "versionInfo.h"
#endif
#include <vficom.h>
#include <ctype.h>
#include "EventScheduler.h"
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQDownloader.h"
#include "VHQFileNames.h"
#include "VHQIo.h"
#include "VHQManager.h"
#include "VHQMessages.h"
#include "VHQUtils.h"
#include "VHQVersion.h"
#include "VHQPosIPC.h"
#include "ComIntf.h"
#define stricmp strcasecmp

VHQPOS_INFO g_sPosInfo;
bool g_bPosInfoInited = FALSE;

#ifndef Mx2
static int meminfo_file_handle = -1;
#endif
static int handle_file_handle = -1;

#ifdef Mx2
#define VCL_PATH                        "/home/sys3/vcl"
#define VCL_KMAILMAN_PATH               "/home/usr1/kmailman"
#define GREP_EXECUTABLE                 "/bin/grep"
#define GUI_MGR_LIB_FILE                "/home/usr1/lib/libguimgr9xx.so"
#define IP_ADDR_GREP_OUTFILE            "/var/tmp/pc_ip_addr"
#else
#define IP_ADDR_GREP_OUTFILE            "/var/tmp/pc_ip_addr"
#define VCL_PATH                        "/bin/semtekd"
#define VCL_KMAILMAN_PATH               "/home/usr1/kmailman"
#define GREP_EXECUTABLE                 "/bin/grep"
#define GUI_MGR_LIB_FILE                "/home/usr1/lib/libguimgr.so"
#endif

#define DIAG_START_FW_MAJ_VER           3
#define DIAG_START_FW_MID_VER           2
#define DIAG_START_FW_MIN_VER           "0011"

#define FILE_LIST_EXECUTABLE            "/bin/ls"

#define VCL_VERSION_GREP_OUTFILE        "vcl_version_info"
#define VCL_VERSION_GREP_STR            "BUILD DATE"
#define VCL_VERSION_HEADER_STR          "SEMTEKD"
#define VCL_GREP_RESULTS_DELAY_SEC      10
#define VCL_NAME_STRING                 "Verishield Crypto Library"

#define VCL_KMAILMAN_VERSION_GREP_STR   "Remote Key Distribution Client"
#define VCL_KMAILMAN_VERSION_HEADER_STR "KMAILMAN - Remote Key Distribution Client -"
#define VCL_KMAILMAN_NAME_STRING        "Verishield Crypto Library - Mailman"

#ifdef Mx2
#define MEM_FREE_SEARCH_STRING "MemFree:"
#define MEM_TOTAL_SEARCH_STRING "MemTotal:"
#else
#define MEM_FREE_SEARCH_STRING "MemFree:"
#define MEM_TOTAL_SEARCH_STRING "MemTotal:"
#endif
#define MEMORY_FILE "/proc/meminfo"
#define HANDLE_FILE "/proc/sys/fs/file-nr"

/* Add these prototypes to avoid warnings */
int test_encrypt(int, char*, char*, int, char*);

#if !defined(Mx2)
short CMDiag(short diagOption, char *data, short *dataLength);
#endif

#ifdef _VOS

#ifndef MAX_ELEM_STRLEN
// using this #define as a hack to determine if the rest is pulled in or not.
#define MAX_ELEM_STRLEN     32  
/*SVC_STRUCT*/

struct certListElem {
    int status;                         
    int level;                          
    char sn[MAX_ELEM_STRLEN];           
    char id[MAX_ELEM_STRLEN];           
    char certName[MAX_ELEM_STRLEN];     
};

/*SVC_STRUCT*/
struct certEntryList {
    int certs_count;                
    struct certListElem *certs;     
};

#pragma weak security_getCertificateList
/*SVC_PROTOTYPE*/ struct certEntryList security_getCertificateList(void);


#pragma weak security_getCertificateList_release
/*SVC_PROTOTYPE*/ void security_getCertificateList_release(struct certEntryList certList);

#endif
#endif

bool GetProcessRAMData(char *process_status_file, int *MemUsed);
static bool GetPackages(list_head_t *ApplicationList);
static bool GetProtectedExtRAM(memory_profile_t *memProfile);
void connectSerialPPP(char *pszPort, char *pszOptions, int iBaud);

#ifdef Mx2
/* For V/OS and Raptor, just let secure installer report VCL and kmailman data.  Don't grep
 for information in /home/sys3 or /home/usr1 since we don't have access to those
 directories on V/OS and Raptor */
#define GREP_FOR_VCL_INFO   0
#define GREP_FOR_KMAILMAN_INFO  0
#else
/* On RFS devices, kmailman is not reported in the packages list, but we have the ability
to grep for the kmailman information in /home/usr1 directory */
#define GREP_FOR_VCL_INFO   0
#define GREP_FOR_KMAILMAN_INFO  1
#endif

#define USB_PERIPH_DEVICE_INFO_MAX_TAG_LEN  32

typedef struct
{
  char path[32];
  char filename[32];
  bool exact_match;
} UNUSED_FILE_INFO;

#define SEARCH_END  "SEARCH_END"

/* Add directory and file name for unused files */
UNUSED_FILE_INFO unused_files[] =
{
#ifdef Mx2
  { VHQ_PRIV_FOLDER, "vhqlog", TRUE}, /* log files(vhqlog,vhqlog1, etc) from old version */
  /* ADKTMS-1073 (Mitch 5-10-2016): With changes for ADKTMS-1073, we will now support resuming
   downloads through power cycles.  So lets not delete .partial files anymore, which will
   allow the download to continue where it left off */
  //{"./flash", PARTIAL_FILE_EXTENSION, FALSE},
  { VHQ_PRIV_FOLDER, AGENT_MAC_KEY_FILENAME TMP_FILE, TRUE},
  {
    VHQ_PRIV_FOLDER, AGENT_ENCR_KEY_FILE TMP_FILE, TRUE},
  {
    VHQ_PRIV_FOLDER, AGENT_PUB_KEY_CERTFILE TMP_FILE, TRUE},
  {
    VHQ_PRIV_FOLDER, AGENT_RSA_KEY_FILE TMP_FILE, TRUE},
  { VHQ_PRIV_FOLDER,
    AGENT_RSA_KEY_PW_FILE TMP_FILE, TRUE},
  { VHQ_PRIV_FOLDER,
    SRV_PUB_KEY_CERTFILE TMP_FILE, TRUE},
#endif
  { SEARCH_END, "", FALSE}};


void CleanupUnusedFiles(void)
{
  DIR *unused_file_dir;
  struct dirent *unused_file;

  int i = 0;

  dbg_msg("%s: Start search for unused file\n", __FUNCTION__);

  while (strcmp(unused_files[i].path, SEARCH_END))
  {
    if ((unused_file_dir = opendir(unused_files[i].path)) == NULL)
    {
      dbg_warn("%s: Can't open %s to search for unused file\n", __FUNCTION__,
               unused_files[i].path);
    }
    else
    {
      dbg_trace("%s: Start search in %s folder\n", __FUNCTION__,
                unused_files[i].path);

      while ((unused_file = readdir(unused_file_dir)) != NULL)
      {
        if (unused_files[i].exact_match)
        {
          if (strncmp(unused_file->d_name, unused_files[i].filename,
                      strlen(unused_files[i].filename)))
          {
            dbg_trace("%s: %s is not exact matched with %s\n", __FUNCTION__,
                      unused_file->d_name, unused_files[i].filename);
          }
          else
          {
            char full_filename[128];
            dbg_trace("%s: %s is exact matched with %s\n", __FUNCTION__,
                      unused_file->d_name, unused_files[i].filename);

            sprintf(full_filename, "%s%s", unused_files[i].path,
                    unused_file->d_name);
            dbg_trace("%s: Deleting %s since it is no longer needed\n",
                      __FUNCTION__, full_filename);
            remove(full_filename);
          }
        }
        else
        {
          if (strstr(unused_file->d_name, unused_files[i].filename))
          {
            char full_filename[128];
            dbg_trace("%s: %s contains %s\n", __FUNCTION__, unused_file->d_name,
                      unused_files[i].filename);

            sprintf(full_filename, "%s%s", unused_files[i].path,
                    unused_file->d_name);
            dbg_trace("%s: Deleting %s since it is no longer needed\n",
                      __FUNCTION__, full_filename);
            remove(full_filename);
          }
          else
          {
            dbg_trace("%s: %s does not contain %s\n", __FUNCTION__,
                      unused_file->d_name, unused_files[i].filename);
          }
        }
      }
      closedir(unused_file_dir);
    }
    i++;
  }

  dbg_msg("%s: End search for unused file\n", __FUNCTION__);
  return;
}

#if (GREP_FOR_VCL_INFO || GREP_FOR_KMAILMAN_INFO)
static bool GetVclVersion(char *filename, char* grep_str, char* header_str, char* version_str, int version_str_length)
{
    bool ret_val = FALSE;
    struct stat vcl_stat;

    /* Clear the version string */
    memset(version_str, 0, version_str_length);

    dbg_msg( "%s: Checking for version of \"%s\"\n", __FUNCTION__, filename);
    if (stat(filename, &vcl_stat) != 0)
        return FALSE;

    if (S_ISREG(vcl_stat.st_mode))
    {
        pid_t sPID;

        /* At least VCL is on the device, we may not be able to read the version though */
        ret_val = TRUE;

        sPID = fork();
        if(sPID < 0)
        {
            dbg_warn( "%s: ERROR to fork process\n", __FUNCTION__);
            return ret_val;
        }

        if (sPID)
        {
            int status;
            pid_t df_child_status = 0;
            struct stat result_file_stat;

            while (df_child_status == 0)
            {
                dbg_msg( "%s: child process still running, sleeping for a second\n", __FUNCTION__);
                sleep(1);
                df_child_status = waitpid(sPID, &status, WNOHANG);
            }

            memset(&result_file_stat, 0, sizeof(result_file_stat));
            stat(VCL_VERSION_GREP_OUTFILE, &result_file_stat);

            /* Make sure results file is there - if not, return TRUE without filling in version */
            if (result_file_stat.st_size == 0)
            {
                dbg_err( "%s ERROR: no grep data written to version grep file %s\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
                return ret_val;
            }

            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Result file is finished - Reading file for VCL version\n", __FUNCTION__);
            if (S_ISREG(result_file_stat.st_mode))
            {
                int ver_file_handle, bytes_read;
                char ver_file_data [256];

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Opening version grep file %s\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
                ver_file_handle = open(VCL_VERSION_GREP_OUTFILE, O_RDONLY);

                if (ver_file_handle == -1)
                {
                    dbg_err( "%s ERROR: Could not open version grep file %s\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
                    return TRUE;
                }

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading VCL version from version grep file %s\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
                memset(ver_file_data, 0, sizeof(ver_file_data));
                bytes_read = read(ver_file_handle, ver_file_data, sizeof(ver_file_data) - 1);
                if (bytes_read)
                {
                    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read:\n[%s\n] from version grep file\n", __FUNCTION__, ver_file_data);

                    if (version_str_length >= 10)
                    {
                        char scanf_str[64];

                        memset(scanf_str, 0, sizeof(scanf_str));
                        sprintf(scanf_str, "%s %%s", header_str);
                        sscanf(ver_file_data, scanf_str, version_str);
                        dbg_msg( "%s: Read version \"%s\" from version grep file\n", __FUNCTION__, version_str);
                    }

                }
                else
                {
                    dbg_err( "%s ERROR: Could not read from version grep file\n", __FUNCTION__);
                }

                close(ver_file_handle);
            }
            else
            {
                dbg_err( "%s ERROR: version grep file %s is not a regular file\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
            }

            remove(VCL_VERSION_GREP_OUTFILE);
        }
        else
        {
            int outfile_fd;

            /* Open the file to redirect grep's STDOUT to */
            remove(VCL_VERSION_GREP_OUTFILE);
            outfile_fd = open(VCL_VERSION_GREP_OUTFILE, O_RDWR | O_CREAT, S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH);

            if(outfile_fd == -1)
            {
                dbg_err( "%s ERROR: could not open %s for grep output\n", __FUNCTION__, VCL_VERSION_GREP_OUTFILE);
                exit(0);    /* Child process, exit in case of error */
            }

            /* Redirect STDOUT to the new file */
            dup2(outfile_fd, STDOUT_FILENO);
            dup2(outfile_fd, STDERR_FILENO);

            /* Close the redirection file */
            close(outfile_fd);

            /* This should not return */
            execl(GREP_EXECUTABLE, GREP_EXECUTABLE, grep_str, filename, (const char*) 0);
            fprintf(stderr, "%s ERROR: execl returned - returning FALSE\n", __FUNCTION__);
            exit(errno);    /* we should never reach this place */
        }
    }

    return ret_val;
}
#endif

bool GrepForPCipaddr(char *pszAddr)
{
  bool ret_val = FALSE;
  int res;
  char szCmd[256];

  if (VHQ_MODE_PROXY != g_sIoProperties.eMode)
  {
    return FALSE;
  }

  /* Clear the version string */
  pszAddr[0] = 0;

  /* /sbin/ifconfig command is executed as usr1/sys6, but output file is created with ownership of
   * root and default permissions of 644; need to change default permissions to 0666 for usr1/sys6
   * to be able to write to the file.  */
  sprintf(szCmd, "umask 111;/sbin/ifconfig | grep P-t-P: > %s",
  IP_ADDR_GREP_OUTFILE);
  res = svcSystem(szCmd);
  (void) (res);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ifconfig command: %s; Result: %d\n", __FUNCTION__, szCmd, res);
  {
    struct stat result_file_stat;
    int delay_remaining = VCL_GREP_RESULTS_DELAY_SEC;

    memset(&result_file_stat, 0, sizeof(result_file_stat));
    stat(IP_ADDR_GREP_OUTFILE, &result_file_stat);
    while ((delay_remaining > 0) && (result_file_stat.st_size == 0))
    {
      delay_remaining -= 1;
      memset(&result_file_stat, 0, sizeof(result_file_stat));
      stat(IP_ADDR_GREP_OUTFILE, &result_file_stat);
    }

    /* Make sure results file is there - if not, return TRUE without filling in version */
    if (result_file_stat.st_size == 0)
    {
      log_err("%s ERROR: no grep data written to ifconfig file %s\n",
              __FUNCTION__, IP_ADDR_GREP_OUTFILE);
      return FALSE;
    }

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Result file is finished - Reading file for PPP info\n", __FUNCTION__);
    if (S_ISREG(result_file_stat.st_mode))
    {
      int ip_addr_file_handle, bytes_read;
      char szIpBuffer[256];

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Opening ip addr grep file %s\n", __FUNCTION__, IP_ADDR_GREP_OUTFILE);
      ip_addr_file_handle = open(IP_ADDR_GREP_OUTFILE, O_RDONLY);

      if (ip_addr_file_handle == -1)
      {
        log_err("%s ERROR: Could not ip addr grep file %s\n", __FUNCTION__,
                IP_ADDR_GREP_OUTFILE);
        return FALSE;
      }

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading ip address from ip addr grep file %s\n", __FUNCTION__, IP_ADDR_GREP_OUTFILE);
      memset(szIpBuffer, 0, sizeof(szIpBuffer));
      bytes_read = read(ip_addr_file_handle, szIpBuffer,
                        sizeof(szIpBuffer) - 1);
      if (bytes_read)
      {
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read:\n[%s\n] from ip addr grep file\n", __FUNCTION__, szIpBuffer);
#define PTP_host "P-t-P:"
#define Mask "Mask:"
        char *pszPtp = strstr(szIpBuffer, PTP_host);
        char *pszMask = strstr(szIpBuffer, Mask);
        if (NULL != pszPtp && NULL != pszMask)
        {
          uint32 i;
          pszMask--;
          pszMask--;
          pszMask[0] = 0;
          strcpy(pszAddr, pszPtp + strlen(PTP_host));

          for (i = 0; i < strlen(pszAddr); i++)
          {
            if (isspace(pszAddr[i]))
              pszAddr[i] = 0;
          }
          dbg_msg("PC IP address is %s\n", pszAddr);
          ret_val = TRUE;
        }
      }
      else
      {
        log_err("%s ERROR: Could not read from ip addr grep file\n",
                __FUNCTION__);
      }

      close(ip_addr_file_handle);
    }
    else
    {
      log_err("%s ERROR: ip addr grep file %s is not a regular file\n",
              __FUNCTION__, IP_ADDR_GREP_OUTFILE);
    }

    remove(IP_ADDR_GREP_OUTFILE);
  }
  return ret_val;
}

#ifdef Mx2
#define PACKAGE_SEARCH_STRING "Package:"
#define PACKAGE_VERSION_SEARCH_STRING "Version:"
#define PACKAGE_SECTION_SEARCH_STRING "Section:"
#define PACKAGE_SIZE_SEARCH_STRING "Size:"
#else
#define PACKAGE_SEARCH_STRING "Package:"
#define PACKAGE_VERSION_SEARCH_STRING "Version:"
#define PACKAGE_SECTION_SEARCH_STRING "Section:"
#define PACKAGE_SIZE_SEARCH_STRING "Size:"
#endif
#define PACKAGE_FILE "/ipkg/status"


#ifdef Mx2
static bool GetMX2OSInfo(list_head_t *ApplicationList)
{
  struct vaultVersion vV;
  struct softwareVersion_s software;
  char tbuf[192];
  int h;
  app_data_t *app_list_obj;

  if (!ApplicationList)
    return FALSE;

  software = sysinfo_software();
  vV = security_getVaultVersion();

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "Vault");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             (char*) vV.vault);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "AppM");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.rfsSecurity_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  // TODO: Use service and libplatforminfo to read these values.
  memset(tbuf, 0, sizeof(tbuf));
  h = open("/etc/sred-version", O_RDONLY);
  if (h > -1)
  {
    int res;
    res = read(h, tbuf, sizeof(tbuf) - 1);
    if (res == -1)
      DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
               "%s: Error reading from /etc/sred-version\n", __FUNCTION__);
    close(h);
  }

  for (h = 0; (uint32) h < sizeof(tbuf); h++)
  {
    if ((tbuf[h] == '\n') || (tbuf[h] == '\r'))
      tbuf[h] = 0;
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "SRED");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", tbuf);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  memset(tbuf, 0, sizeof(tbuf));
  h = open("/etc/openprotocol-version", O_RDONLY);
  if (h > -1)
  {
    int res;
    res = read(h, tbuf, sizeof(tbuf) - 1);
    if (res == -1)
      DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
               "%s: Error reading from /etc/openprotocol-version\n",
               __FUNCTION__);
    close(h);
  }

  for (h = 0; (uint32) h < sizeof(tbuf); h++)
  {
    if ((tbuf[h] == '\n') || (tbuf[h] == '\r'))
      tbuf[h] = 0;
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "Open Protocol");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", tbuf);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "SBI");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.sbi_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "U-Boot");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.uboot_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "Kernel");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.kernel_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "RFS");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.rfs_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
  if (app_list_obj)
  {
    snprintf(app_list_obj->name, sizeof(app_list_obj->name), "Build");
    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
             software.release_version);
    app_list_obj->type = APP_TYPE_OS;
    list_add_tail(&app_list_obj->list, ApplicationList);
  }

  return TRUE;
}
#endif

#ifndef Mx2
list_head_t* _local_ApplicationList;

static void _initPackageListArray(list_head_t* ApplicationList)
{
    _local_ApplicationList = ApplicationList;
}


static int  _ipkgFilteredListCb( char *name, char *dest, char *version, char *timestamp, long size, void *userdata )
{
    if (!_local_ApplicationList)
        return 0;

    app_data_t  *app_list_obj;
    app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
    if(app_list_obj)
    {
        // still room in list, so load it up....
        snprintf(app_list_obj->name,    sizeof(app_list_obj->name),    "%s", name ? name:"NULL");
        snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", version ? version:"NULL");

        if ( dest && memcmp( dest, "root", 4 ) == 0 )
            app_list_obj->type = APP_TYPE_OS;
        else
            app_list_obj->type = APP_TYPE_APPLICATION;

        dbg_msg( "%s: Added Package to array:\n\t\tName: %s\n\t\tVersion: %s\n\t\tDest: %s (type = %d)\n", __FUNCTION__,
                app_list_obj->name,
                app_list_obj->version,
                dest ? dest:"NULL",
                app_list_obj->type);

        list_add_tail(&app_list_obj->list, _local_ApplicationList);
    }

    return 0;
}

#endif

static bool GetPackages(list_head_t *ApplicationList)
{
#ifdef Mx2
  struct packageCollectionExtended_s package;
  struct bundleCollection_s bundle;
  int lp;
  int bundle_counter;
  app_data_t *app_list_obj;

  if (!ApplicationList)
    return FALSE;

  // Read System Packages
  bundle = sysinfo_sysBundles();
  package = sysinfo_sysPackagesExtended();
  for (lp = 0; lp < package.packages_count; lp++)
  {
    app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
    if (app_list_obj)
    {
      snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s",
               package.packages[lp].name);
      snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
               package.packages[lp].version);
      snprintf(app_list_obj->location, sizeof(app_list_obj->location), "%s",
               package.packages[lp].user);
      snprintf(app_list_obj->bundlename, sizeof(app_list_obj->bundlename), "%s",
               package.packages[lp].bundleName);
      snprintf(app_list_obj->bundleversion, sizeof(app_list_obj->bundleversion),
               "%s", package.packages[lp].bundleVersion);
      for (bundle_counter = 0; bundle_counter < bundle.bundles_count;
          bundle_counter++)
      {
        if (strcmp(package.packages[lp].bundleName,
                   bundle.bundles[bundle_counter].name) == 0)
        {
          dbg_msg("%s: Found bundle %s in bundle list - copying options (%s)\n",
                  __FUNCTION__, package.packages[lp].bundleName,
                  bundle.bundles[bundle_counter].option);
          snprintf(app_list_obj->bundleoption,
                   sizeof(app_list_obj->bundleoption), "%s",
                   bundle.bundles[bundle_counter].option);
          break;
        }
      }
      app_list_obj->type = APP_TYPE_OS;

      /* Update Application type */
      if (strcmp(app_list_obj->name, VHQ_APP_NAME) == 0)
      {
        app_list_obj->type = APP_TYPE_AGENT;
      }

      list_add_tail(&app_list_obj->list, ApplicationList);
    }
  }
  free(bundle.bundles);
  free(package.packages);

  // Read RFS Packages
  bundle = sysinfo_rfsBundles();
  package = sysinfo_rfsPackagesExtended();
  for (lp = 0; lp < package.packages_count; lp++)
  {
    app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
    if (app_list_obj)
    {
      snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s",
               package.packages[lp].name);
      snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
               package.packages[lp].version);
      snprintf(app_list_obj->bundlename, sizeof(app_list_obj->bundlename), "%s",
               package.packages[lp].bundleName);
      snprintf(app_list_obj->bundleversion, sizeof(app_list_obj->bundleversion),
               "%s", package.packages[lp].bundleVersion);
      for (bundle_counter = 0; bundle_counter < bundle.bundles_count;
          bundle_counter++)
      {
        if (strcmp(package.packages[lp].bundleName,
                   bundle.bundles[bundle_counter].name) == 0)
        {
          dbg_msg("%s: Found bundle %s in bundle list - copying options (%s)\n",
                  __FUNCTION__, package.packages[lp].bundleName,
                  bundle.bundles[bundle_counter].option);
          snprintf(app_list_obj->bundleoption,
                   sizeof(app_list_obj->bundleoption), "%s",
                   bundle.bundles[bundle_counter].option);
          break;
        }
      }
      app_list_obj->type = APP_TYPE_OS;

      /* Update Application type */
      if (strcmp(app_list_obj->name, VHQ_APP_NAME) == 0)
      {
        app_list_obj->type = APP_TYPE_AGENT;
      }

      list_add_tail(&app_list_obj->list, ApplicationList);
    }
  }
  free(bundle.bundles);
  free(package.packages);

  // Read Application Packages
  bundle = sysinfo_appBundles();
  package = sysinfo_appPackagesExtended();
  for (lp = 0; lp < package.packages_count; lp++)
  {
    app_list_obj = (app_data_t*) calloc(1, sizeof(app_data_t));
    if (app_list_obj)
    {
      snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s",
               package.packages[lp].name);
      snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s",
               package.packages[lp].version);
      snprintf(app_list_obj->bundlename, sizeof(app_list_obj->bundlename), "%s",
               package.packages[lp].bundleName);
      snprintf(app_list_obj->bundleversion, sizeof(app_list_obj->bundleversion),
               "%s", package.packages[lp].bundleVersion);
      for (bundle_counter = 0; bundle_counter < bundle.bundles_count;
          bundle_counter++)
      {
        if (strcmp(package.packages[lp].bundleName,
                   bundle.bundles[bundle_counter].name) == 0)
        {
          dbg_msg("%s: Found bundle %s in bundle list - copying options (%s)\n",
                  __FUNCTION__, package.packages[lp].bundleName,
                  bundle.bundles[bundle_counter].option);
          snprintf(app_list_obj->bundleoption,
                   sizeof(app_list_obj->bundleoption), "%s",
                   bundle.bundles[bundle_counter].option);
          break;
        }
      }

      app_list_obj->type = APP_TYPE_APPLICATION;

      list_add_tail(&app_list_obj->list, ApplicationList);
    }
  }
  free(bundle.bundles);
  free(package.packages);

  return TRUE;
#else
    /* [Mitch 9-6-2012] We were originally told to gather the packages by parsing
    /ipkg/status but that is not how it is done in MX8 system mode and we have had
    issues with this code hanging. So lets do it how sysmode does it */

    _initPackageListArray(ApplicationList);
    installed_packages_version( _ipkgFilteredListCb, NULL, NULL );

    return TRUE;
#endif
}

static bool IsVCLDiagSupported(const char *versionString)
{
  bool bDiagSupported = TRUE;
  int majNum, midNum;
  char minStr[8];

  /* Compare VCL version for VCL Diagnostics Support */
  sscanf("%d.%d.%s", &majNum, &midNum, &minStr, versionString);

  if (DIAG_START_FW_MAJ_VER > majNum)
  {
    bDiagSupported = FALSE;
  }
  else if (DIAG_START_FW_MAJ_VER == majNum)
  {
    if (DIAG_START_FW_MID_VER > midNum)
    {
      bDiagSupported = FALSE;
    }
    else if (DIAG_START_FW_MID_VER == midNum)
    {
      if (strcmp((const char*) minStr, DIAG_START_FW_MIN_VER) < 0)
      {
        bDiagSupported = FALSE;
      }
    }
  }

  return bDiagSupported;
}


int GetBatteryStatus(int *voltage)
{
  int bat_status;

  bat_status = svcInfoPlatform(FEATURE_BATTERY_STATUS);
  *voltage = svcInfoPlatform(FEATURE_BATTERY_VOLTAGE);

  dbg_msg("%s: bat_status = %d, voltage = %d\n", __FUNCTION__, bat_status,
          *voltage);

  return bat_status;
}

#define MX_BRIDGE_PATH      "/home/usr1/MXBridge"


int GetModelNumber(char *pszModelNum, uint32 iModelNumBufLen)
{
#ifdef _VOS2
  uint32 i;

  unsigned long size;
  char model[PI_MIB_MODEL_NUM_SIZE];

  if (platforminfo_get(PI_MIB_MODEL_NUM, model, sizeof(model), &size) == PI_OK)
  {
    memset(pszModelNum, 0, iModelNumBufLen);
    if (strlen(model) < iModelNumBufLen)
      strcpy(pszModelNum, model);
    else
      memcpy(pszModelNum, model, iModelNumBufLen - 1);

    for (i = 0; i < strlen(pszModelNum); i++)
    {
      pszModelNum[i] = toupper(pszModelNum[i]);
    }

    // Trim out trailing space characters, in some cases the model is padded to PI_MIB_MODEL_NUM_SIZE with spaces.
    trim_whitespace(pszModelNum);
  }

  return 0;
#else
#ifdef Mx2
    uint32 i;

#if 0
    unsigned long size;
    char model[PI_CIB_MODEL_ID_SIZE];

    if (platforminfo_get(PI_CIB_MODEL_ID_STR, model, sizeof(model), &size) == PI_OK)
    {
        dbg_msg( "%s: Using platforminfo for Model Number\n", __FUNCTION__);
        memset(pszModelNum, 0, iModelNumBufLen);
        if (strlen(model) < iModelNumBufLen)
            strcpy(pszModelNum, model);
        else
            memcpy(pszModelNum, model, iModelNumBufLen - 1);

        for (i = 0; i < strlen(pszModelNum); i++)
        {
            pszModelNum[i] = toupper(pszModelNum[i]);
        }
    }
    else
#endif
    {
        struct platform_s plat_info = sysinfo_platform();

        memset(pszModelNum, 0, iModelNumBufLen);
        dbg_msg( "%s: Using sysinfo_platform for Model Number (plat_info.model = %s)\n", __FUNCTION__, plat_info.model);

        /* Old OS versions do not return MX part so lets see if this is just the model number */
        if ((stricmp(plat_info.model, "Mx925") == 0) || (stricmp(plat_info.model, "Mx915") == 0))
        {
            //LogMsg(VHQ_LOG_DEBUG, "%s: model %s does not include MX - adding it\n", __FUNCTION__, plat_info.model);
            if (FileExists(MX_BRIDGE_PATH))
            {
                dbg_msg( "%s: find MXbridge at %s, this is a IPoverUSB bridge MX9xx\n", __FUNCTION__, MX_BRIDGE_PATH);
                sprintf(pszModelNum, "%s(Bridge)", plat_info.model);
            } else
            {
                sprintf(pszModelNum, "%s", plat_info.model);
            }

        }
        else
        {

            if (strlen(plat_info.model) < iModelNumBufLen)
                strcpy(pszModelNum, plat_info.model);
            else
                memcpy(pszModelNum, plat_info.model, iModelNumBufLen - 1);
        }

        for (i = 0; i < strlen(pszModelNum); i++)
        {
            pszModelNum[i] = toupper(pszModelNum[i]);
        }
    }

    dbg_msg( "%s: Model number is %s\n", __FUNCTION__, pszModelNum);
    return 0;
#else
    int model_num = svcInfoPlatform(FEATURE_MODEL);

    if (iModelNumBufLen < 6)
    {
        dbg_msg( "%s ERROR: Model number buffer length is too short (%d)\n", __FUNCTION__, iModelNumBufLen);
        return 0;
    }

    memset(pszModelNum, 0, iModelNumBufLen);

    sprintf(pszModelNum, "MX%d", model_num);

    dbg_msg( "%s: Model number is %s\n", __FUNCTION__, pszModelNum);

    return model_num;
#endif
#endif
}

#ifdef _VOS2

bool IsBaseDevice(void)
{
  unsigned long rsize = 0;
  PI_terminal_type_info_st terminal_type;

  memset(&terminal_type, 0, sizeof(PI_terminal_type_info_st));

  return (platforminfo_get(PI_TERMINAL_TYPE_INFO, &terminal_type,
                           sizeof(terminal_type), &rsize) == PI_OK
      && terminal_type.type == PI_MOBILE_TYPE_BASE);
}
#endif


int GetCommonName(char *pszCommonName, int iCommonNameBufLen)
{
  char SerialNum[SERIAL_NUM_LEN];
  char ModelNum[64];

  memset(ModelNum, 0, sizeof(ModelNum));
  GetModelNumber(ModelNum, sizeof(ModelNum));

  memset(pszCommonName, 0, iCommonNameBufLen);

  memset(SerialNum, 0, sizeof(SerialNum));
  svcInfoSerialNum(SerialNum);
  sprintf(pszCommonName, "%s.%s", ModelNum, SerialNum);

  return (strlen(pszCommonName));
}

#if 0
// keep this around in case we need more stuff from PC agent
static ssize_t readdata(int sockd, void *vptr, size_t maxlen)
{
    ssize_t n=0, rc;

    memset(vptr, 0, maxlen);
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "readdata: + %d\n", maxlen);
    do
    {
        rc = read(sockd, vptr, maxlen);
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "rc= %d\n", rc);
        if ( rc == maxlen )
        {
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "readdata: - %d\n", maxlen);
            return maxlen;
        }
        else if ( rc > 0 )
        {
            vptr+=rc;
            maxlen-=rc;
            n+= rc;
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "readdata: got %d...\n", rc);
            continue;
        }
        else if ( rc == 0 )
        {
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "readdata: - 0\n");
            return 0;
        }
        else
        {
            if ( errno == EINTR || errno==EAGAIN)
                continue;
            DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "readdata: - error\n");
            return -1;
        }
    } while (maxlen);

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "readdata: - %d\n", n);
    return n;
}

int getPCipAddr(char *pszAddr)
{
    int       conn_s;                /*  connection socket         */
    short int port;                  /*  port number               */
    struct    sockaddr_in servaddr;  /*  socket address structure  */
    char     *szAddress;             /*  Holds remote IP address   */
    char     *szPort;                /*  Holds remote port         */
    char     *endptr;                /*  for strtol()              */



    /*  Create the listening socket  */

    if ( (conn_s = socket(AF_INET, SOCK_STREAM, 0)) < 0 )
    {
        fprintf(stderr, "getPCipAddr: Error creating listening socket.\n");
        exit(EXIT_FAILURE);
    }


    /*  Set all bytes in socket address structure to
        zero, and fill in the relevant data members   */
    memset(&servaddr, 0, sizeof(servaddr));
    servaddr.sin_family      = AF_INET;
    servaddr.sin_port        = htons(9333);


    /*  Set the remote IP address  */

    if ( inet_aton("10.0.2.2", &servaddr.sin_addr) <= 0 ) // fixed address of host
    {
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "getPCipAddr: Invalid remote IP address.\n");
        return (-1);
    }

    if ( connect(conn_s, (struct sockaddr *) &servaddr, sizeof(servaddr) ) < 0 )
    {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "getPCipAddr: Error calling connect(): %d\n", errno);
        return (-2);
    }

{
    write(conn_s, "012345678901234567890123456789", 30);  // write 1 byte of anything to kick the server
    readdata(conn_s, &g_sPosInfo, sizeof(g_sPosInfo));
}

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "Got %s for remote hostname\n", g_sPosInfo.szName);
    {
        unsigned char *dwIp= &g_sPosInfo.dwIpAddr;
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "Remote IP address= %d.%d.%d.%d\n", dwIp[0], dwIp[1], dwIp[2], dwIp[3]);
    }
    return 0;
}
#endif

int getPCipAddr(char *pszAddr)
{
  bool bResult;
  if (VHQ_MODE_PROXY == g_sIoProperties.eMode)
  {
    bResult = GrepForPCipaddr(pszAddr);

    if (TRUE == bResult)
      return 0;
    else
      return -1;
  }
  return -1;
}
#if 0
int getPCipAddr(char *pszAddr)
{
    FILE *pFile;
    char szIpBuffer[32];
    memset(szIpBuffer, 0, sizeof(szIpBuffer));
    pFile=fopen(VHQ_CONFIG_FOLDER "posagt_ip", "r");
    if (pFile)
    {
        int iLen;
        iLen= fread(&szIpBuffer, 1, sizeof(szIpBuffer), pFile);
        fclose(pFile);
        szIpBuffer[iLen-1]=0;
        strcpy(pszAddr, szIpBuffer);
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "PC IP address is %s\n", pszAddr);
        return 0;
    }
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "Didn't get PC IP Addr\n");
    return -1;
}
#endif

#ifdef Mx2
static int network_getIPaddr(char *pszNet, char *pszIp, int iIPAddressBufLen)
{
  struct netIfconfig status;
  memset(&status, 0, sizeof(struct netIfconfig));
  errno = 0;
  status = net_interfaceStatus(pszNet);
  if (errno == 0)
  {
    if (strlen(status.local_ip))
    {
      if (strlen(status.local_ip) > (uint32) iIPAddressBufLen)
        memcpy(pszIp, status.local_ip, iIPAddressBufLen - 1);
      else
        strcpy(pszIp, status.local_ip);
    }
  }
  return errno;  // i'm sorry, but this just looks wrong.. they should return they result code instead of a struct
}
#endif

int internal_GetIPAddress(char *pszIPAddress, int iIPAddressBufLen)
{
  int i = 0;
  int iRet = 0;
  char szIpAddr[64];

  memset(pszIPAddress, 0, iIPAddressBufLen);
  memset(szIpAddr, 0, sizeof(szIpAddr));

  if (VHQ_MODE_PROXY == g_sIoProperties.eMode)
  {
    iRet = getPCipAddr(szIpAddr);
    if (0 == iRet)
      snprintf(pszIPAddress, iIPAddressBufLen, "%s", szIpAddr);
  }
  else
  {
#ifdef Mx2
    struct netIfconfig status;
    UNUSED(i);
    char *defaultRoute = net_getDefaultRouteInfo();
    if (defaultRoute)
    {
      status = net_interfaceStatus(defaultRoute);
      if (0 == errno)
      {
        snprintf(pszIPAddress, iIPAddressBufLen, "%s", status.local_ip);
        free(defaultRoute);
        return 0;
      }
      free(defaultRoute);
    }

    return -1;
#else
        net_conf_t sNet;
        char szIfConfig[256];

        iRet = netGetConfig(&sNet);
        if (0 == iRet)
        {
            dbg_msg( "%s: IP Address = %s\n", __FUNCTION__, sNet.ipaddr);

            if (strlen(sNet.ipaddr) > iIPAddressBufLen)
                memcpy(pszIPAddress, sNet.ipaddr, iIPAddressBufLen - 1);
            else
                strcpy(pszIPAddress, sNet.ipaddr);
        }
        else
        {
            log_err( "%s: Couldn't retrieve host data from netGetConfig, using IFCONFIG for ipaddress retrieval.\n", __FUNCTION__);
            iRet = getEnvFile("", "*IFCONFIG", szIfConfig, sizeof(szIfConfig));

            if (iRet>6)
            {
                for (i=0; i<sizeof(szIfConfig);i++)
                    if (szIfConfig[i]==' ') szIfConfig[i]=0;

                if (strlen(szIfConfig+5) < iIPAddressBufLen)
                    strcpy(pszIPAddress, szIfConfig+5);
                else
                    memcpy(pszIPAddress, szIfConfig+5, iIPAddressBufLen - 1);
            }
        }
#endif
  }
  return iRet;
}

int internal_GetMACAddress(char *pszMACAddress, int iMACAddressBufLen)
{
#ifdef Mx2
  struct netIfconfig status;
  char *defaultRoute = net_getDefaultRouteInfo();

  memset(pszMACAddress, 0, iMACAddressBufLen);
  memset(&status, 0, sizeof(struct netIfconfig));

  if (defaultRoute)
  {
    status = net_interfaceStatus(defaultRoute);
    if (errno == 0)
    {
      dbg_msg("%s: MAC Address from net_interfaceStatus(%s) = %s\n",
              __FUNCTION__, defaultRoute, status.mac);
      snprintf(pszMACAddress, iMACAddressBufLen, "%s", status.mac);
    }
    free(defaultRoute);
  }
  else
#endif
  {
    net_conf_t sNet;
    int iResult;

    memset(pszMACAddress, 0, iMACAddressBufLen);

    iResult = netGetConfig(&sNet);
    if (0 == iResult)
    {
      dbg_msg("%s: MAC Address = %s\n", __FUNCTION__, sNet.MAC);
      snprintf(pszMACAddress, iMACAddressBufLen, "%s", sNet.MAC);
    }
    else
      log_err("%s: netGetConfig() FAILED - returned %d\n", __FUNCTION__,
              iResult);
  }

  return 0;
}

void GetNetworkConfig(device_profile_t *devProfile)
{
  char szOperatingMode[32];

  // get POS Agent info, if necessary and Last Com Type Used
  VHQGetParameterString(PARAM_OPERATING_MODE, szOperatingMode,
                        sizeof(szOperatingMode));
  dbg_msg("%s: got \"%s\" for operating mode\r\n", __FUNCTION__,
          szOperatingMode);

  devProfile->network_config = GetComType();
  dbg_msg("%s: ComType: %d, ComType String: %s\n", __FUNCTION__,
          devProfile->network_config,
          get_ComType_name(devProfile->network_config));
}

int GetSerialNumber(char *pszSerialNumber)
{
  int sn_len;
  char szSerialNum[SERIAL_NUM_LEN + 1];

  memset(szSerialNum, 0, sizeof(szSerialNum));
  svcInfoSerialNum(szSerialNum);        // this call cannot fail, apparently.

  dbg_msg("%s: Serial number is %s\n", __FUNCTION__, szSerialNum);
  if (strlen(szSerialNum) == 0)
  {
    memset(szSerialNum, 0, sizeof(szSerialNum));
    strcpy(szSerialNum, "123-456-789");
    log_dbg("%s: Replaced missing Serial number with %s\n", __FUNCTION__,
            szSerialNum);
  }

  sn_len = strlen(szSerialNum);
  memcpy(pszSerialNumber, szSerialNum, sn_len + 1);

  return sn_len;
}

bool GetUsrAppInfo(list_head_t *UsrAppData)
{
#ifdef Mx2
  (void) (UsrAppData);
  return FALSE;
#else
    bool ret_val = FALSE;
    int AppNameLen, AppVerLen;
    char AppData[512];
    app_data_t  *app_list_obj;

    if (UsrAppData)
    {
        memset(AppData, 0, sizeof(AppData));
        AppNameLen = getEnvFile("perm", "vpappname", AppData, sizeof(AppData));

        if (AppNameLen > 0)
        {
            app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
            if(app_list_obj)
            {
                snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s", AppData);

                memset(AppData, 0, sizeof(AppData));
                AppVerLen = getEnvFile("perm", "vpappversion", AppData, sizeof(AppData));

                if (AppVerLen > 0)
                {
                    snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", AppData);
                    app_list_obj->type = APP_TYPE_APPLICATION;
                    ret_val = TRUE;
                }
                list_add_tail(&app_list_obj->list, UsrAppData);
            }
        }
    }

    return ret_val;
#endif
}


bool GetApplications(list_head_t *ApplicationList)
{
  bool ret_val = TRUE;
#ifndef Mx2
    int svc_info_ret_val;
    versionStats_t ver_stats;
    app_data_t  *app_list_obj;
#endif
#if (GREP_FOR_VCL_INFO || GREP_FOR_KMAILMAN_INFO)
    char version_str[MAX_VERSION_LENGTH];
#endif

  if (!ApplicationList)
    return FALSE;

  /* Get the Kernel info and put it into slot 0 */
#ifdef Mx2
  GetMX2OSInfo(ApplicationList);
#else
    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoKernel_stats(&ver_stats);
    dbg_msg( "%s: svcInfoKernel_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
        __FUNCTION__, svc_info_ret_val, ver_stats.name, ctime(&ver_stats.timestamp));
    app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
    if(app_list_obj)
    {
        snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s", ver_stats.name);
        app_list_obj->type = APP_TYPE_OS;
        list_add_tail(&app_list_obj->list, ApplicationList);
    }

    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoAltKernel_stats(&ver_stats);
    dbg_msg( "%s: svcInfoAltKernel_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
        __FUNCTION__, svc_info_ret_val, ver_stats.name, ctime(&ver_stats.timestamp));
    app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
    if(app_list_obj)
    {
        snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s", ver_stats.name);
        app_list_obj->type = APP_TYPE_OS;
        list_add_tail(&app_list_obj->list, ApplicationList);
    }

    /* Get the RFS info and put it into slot 1 */
    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoRFS_stats(&ver_stats);
    dbg_msg("%s: svcInfoRFS_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
        __FUNCTION__, svc_info_ret_val, ver_stats.name, ctime(&ver_stats.timestamp));
    app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
    if(app_list_obj)
    {
        snprintf(app_list_obj->name, sizeof(app_list_obj->name), "%s", ver_stats.name);
        app_list_obj->type = APP_TYPE_OS;
        list_add_tail(&app_list_obj->list, ApplicationList);
    }

    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoToolchain_stats(&ver_stats);
    dbg_msg( "%s: svcInfoToolchain_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
        __FUNCTION__, svc_info_ret_val, ver_stats.name, ctime(&ver_stats.timestamp));
    /* no processing */

    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoSDK_stats(&ver_stats);
    dbg_msg( "%s: svcInfoSDK_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
        __FUNCTION__, svc_info_ret_val, ver_stats.name, ctime(&ver_stats.timestamp));
    /* no processing */
#endif

  /* Check if VCL exists */
#if GREP_FOR_VCL_INFO
    dbg_msg( "%s: Checking for VCL Application\n", __FUNCTION__);
    if (GetVclVersion(VCL_PATH, VCL_VERSION_GREP_STR, VCL_VERSION_HEADER_STR, version_str, sizeof(version_str)))
    {
        dbg_msg( "%s: VCL Exists - Adding VCL Application\n", __FUNCTION__);
        /* Put VHQ info into slot 3 if it exists */
        app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
        if(app_list_obj)
        {
            snprintf(app_list_obj->name, sizeof(app_list_obj->.name), VCL_NAME_STRING);
            if (strlen(version_str))
                snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", version_str);
            else
                snprintf(app_list_obj->version, sizeof(app_list_obj->version), "UNKNOWN");
            app_list_obj->type = APP_TYPE_APPLICATION;
            list_add_tail(&app_list_obj->list, ApplicationList);
        }
    }
    else
        log_err( "%s: VCL does not exist on device!!!!!!\n", __FUNCTION__);

#endif

#if GREP_FOR_KMAILMAN_INFO
    /* Check if kmailman exists */
    dbg_msg( "%s: Checking for VCL Kmailman Application\n", __FUNCTION__);
    if (GetVclVersion(VCL_KMAILMAN_PATH, VCL_KMAILMAN_VERSION_GREP_STR, VCL_KMAILMAN_VERSION_HEADER_STR, version_str, sizeof(version_str)))
    {
        dbg_msg( "%s: VCL Kmailman Exists - Adding Kmailman Application\n", __FUNCTION__);
        /* Put VHQ info into slot 3 if it exists */
        app_list_obj = (app_data_t*)calloc(1, sizeof(app_data_t));
        if(app_list_obj)
        {
            snprintf(app_list_obj->name, sizeof(app_list_obj->name), VCL_KMAILMAN_NAME_STRING);
            if (strlen(version_str))
                snprintf(app_list_obj->version, sizeof(app_list_obj->version), "%s", version_str);
            else
                snprintf(app_list_obj->version, sizeof(app_list_obj->version), "UNKNOWN");
            app_list_obj->type = APP_TYPE_APPLICATION;
            list_add_tail(&app_list_obj->list, ApplicationList);
        }
    }
    else
        log_err( "%s: VCL Kmailman does not exist on device!!!!!!\n", __FUNCTION__);
#endif

  dbg_msg("%s: Checking for User Application\n", __FUNCTION__);
  if (GetUsrAppInfo(ApplicationList))
  {
    dbg_msg("%s: User App Exists - Added User Application\n", __FUNCTION__);
  }

  ret_val = GetPackages(ApplicationList);

  return ret_val;
}


void CleanApplicationsList(list_head_t *ApplicationList)
{
  list_head_t *app_list_node;
  list_head_t *app_list_node_tmp;
  app_data_t *app_list_obj;

  if (!ApplicationList)
    return;

  list_for_each_safe(app_list_node, app_list_node_tmp, ApplicationList)
  {
    app_list_obj = list_entry(app_list_node, app_data_t, list);
    list_del(&app_list_obj->list);

    /*CleanUp*/
    if (app_list_obj->pAppFiles)
    {
      free(app_list_obj->pAppFiles);
      app_list_obj->pAppFiles = NULL;
    }
    free(app_list_obj);
    app_list_obj = NULL;
  }
}

/* These are required to dynamically link in the GUI Manager Library to retrieve its
 version info */

typedef void (*Event_Callback_Function)(char *pszFormName, int iControlID,
                                        void *pData);

Event_Callback_Function cb_Functions[] = { 0, };

void* app_main(void *pData)
{
  // Stubbed function to satisfy linker
  return NULL;
}

static uint8 SetCommTypeInfo(struct comm_s *pComm, char *pszName)
{
  uint8 retval = 0;
  dbg_msg(
      "%s: %s: pComm->available=%d, pComm->commType=%d, pComm->connectionStatus=%d\n",
      pszName, __FUNCTION__, pComm->available, pComm->commType,
      pComm->connectionStatus);
//  if (1 == pComm->available)
  {
    if (1 == pComm->available)
      retval |= PORT_STATUS_PRESENT;
    if (pComm->commType == COMMTYPE_RS485)
      retval |= COM_PORT_RS_485;
    if (pComm->connectionStatus == COMMSTATUS_CONNECTED)
      retval |= PORT_STATUS_CONNECTED;
  }
  return retval;
}

#ifdef _VOS2
static char* ConvertSimStatusToString(enum com_SIMStatus status)
{
  switch (status)
  {
    case COM_GPRS_SIM_READY:
      return "SIM Ready";
      break;
    case COM_GPRS_SIM_NEEDS_PIN:
      return "SIM Needs PIN";
      break;
    case COM_GPRS_SIM_NEEDS_PUK:
      return "SIM Needs PUK";
      break;
    case COM_GPRS_SIM_BUSY:
      return "SIM Busy";
      break;
    case COM_GPRS_SIM_NOT_PRESENT:
      return "SIM Not Present";
      break;
    default:
      return "Unknown Status";
      break;
  }

  return "Unknown Status";
}

static char* ConvertRATToString(enum com_RadioACT value)
{
  switch (value)
  {
    case COM_RADIO_ACCESS_TECHNOLOGY_2G:
      return "2G";
      break;
    case COM_RADIO_ACCESS_TECHNOLOGY_3G:
      return "3G";
      break;
    case COM_RADIO_ACCESS_TECHNOLOGY_4G:
      return "4G";
      break;
    default:
      return "Unknown Network Type";
      break;
  }

  return "Unknown Network Type";
}

static void getSimCardProfile(sim_profile_t *simprofile)
{
  int currentSimSlot = 0;
  enum com_ErrorCodes err = COM_ERR_NONE;
  const size_t buflen = 64;
  char buf[buflen];
  int value = -1;

  memset(simprofile, 0, sizeof(sim_profile_t));

  if (com_GetDevicePropertyInt(COM_PROP_SELECT_SIM_SLOT, &currentSimSlot, &err)
      == 0)
  {
    dbg_msg("%s: Current SIM Slot: %d\n", __FUNCTION__, currentSimSlot);
    sprintf(simprofile->slot_index, "%d", currentSimSlot);
  }
  else
  {
    dbg_msg("Error getting current SIM slot err:%d", err);
  }

  (void) memset(buf, 0, buflen);
  if (0
      == com_GetDevicePropertyString(COM_PROP_GSM_PROVIDER_NAME, buf, buflen,
                                     &err))
  {
    dbg_msg("%s: Provider Name: %s\n", __FUNCTION__, buf);
    strncpy(simprofile->sim_operator, buf, SIM_STATUS_ITEM_INFO_LEN - 1);
  }

  (void) memset(buf, 0, buflen);
  if (0 == com_GetDevicePropertyString(COM_PROP_GSM_SIM_ID, buf, buflen, &err))
  {
    dbg_msg("%s: Serial Number: %s\n", __FUNCTION__, buf);
    strncpy(simprofile->sim_serial_number, buf, SIM_STATUS_ITEM_INFO_LEN - 1);
  }

  (void) memset(buf, 0, buflen);
  if (0 == com_GetDevicePropertyString(COM_PROP_GSM_CELL_ID, buf, buflen, &err))
  {
    dbg_msg("%s: Cell Id: %s\n", __FUNCTION__, buf);
    strncpy(simprofile->cell_id, buf, SIM_STATUS_ITEM_INFO_LEN - 1);
  }

  (void) memset(buf, 0, buflen);
  if (0 == com_GetDevicePropertyString(COM_PROP_GSM_IMEI, buf, buflen, &err))
  {
    dbg_msg("%s: IMEI: %s\n", __FUNCTION__, buf);
    strncpy(simprofile->imei, buf, SIM_STATUS_ITEM_INFO_LEN - 1);
  }

  if (0 == com_GetDevicePropertyInt(COM_PROP_GSM_GET_SIM_STATUS, &value, &err))
  {
    strncpy(simprofile->status,
            ConvertSimStatusToString((enum com_SIMStatus) value),
            SIM_STATUS_ITEM_INFO_LEN - 1);
    dbg_msg("%s: SIM Status: %s (%d)\n", __FUNCTION__, simprofile->status,
            value);
  }

  /* Had to hardcode as Agent Lib com version is 2.24.0-244 and below is supported from 2.35.22 & 2.49.0*/
  if (0
      == com_GetDevicePropertyInt(49 /*COM_PROP_GSM_SIGNAL_STRENGTH*/, &value,
                                  &err))
  {
    dbg_msg("%s: Signal Strength: %d\n", __FUNCTION__, value);
    sprintf(simprofile->sim_signal_strength, "%d", value);
  }

  if (0 == com_GetDevicePropertyInt(COM_PROP_RADIO_ACCESS_TECH, &value, &err))
  {
    strncpy(simprofile->sim_network_type,
            ConvertRATToString((enum com_RadioACT) value),
            SIM_STATUS_ITEM_INFO_LEN - 1);
    dbg_msg("%s: Network type: %s (%d)\n", __FUNCTION__,
            simprofile->sim_network_type, value);
  }
}
#endif


bool GetDeviceProfile(device_profile_t *dev_profile)
{
  char *os_ver_str;
  int mpc_cable_status;
  int unit_configuration = svcInfoPlatform(FEATURE_UNIT_CONFIG);
  int module_configuration = svcInfoPlatform(FEATURE_MODULE_CONFIG);
  int com3_fd;
  int stylus_res;
  struct stat gui_mgr_lib_stat;
  char env_val[3];
  int env_val_len = sizeof(env_val);
  com_type_t lastcomm;
  struct platform_s platform;
  uint32 devicemask = 0;
  platform = sysinfo_platform();

  DebugMsgBuffer("Platform = ", (const char*) &platform, sizeof(platform),
                 BUF_TYPE_HEX);
  DebugMsgBuffer("Platform = ", (const char*) &platform, sizeof(platform),
                 BUF_TYPE_CHAR);
  dbg_msg("port1: avail %x, type %x, connected %x\n",
          (int )platform.cable.port1.available,
          (int )platform.cable.port1.commType,
          (int )platform.cable.port1.connectionStatus);
  dbg_msg("port2: avail %x, type %x, connected %x\n",
          (int )platform.cable.port2.available,
          (int )platform.cable.port2.commType,
          (int )platform.cable.port2.connectionStatus);
  dbg_msg("port3: avail %x, type %x, connected %x\n",
          (int )platform.cable.port3.available,
          (int )platform.cable.port3.commType,
          (int )platform.cable.port3.connectionStatus);

#ifdef Mx2
  struct softwareVersion_s software;
#else
    int svc_info_ret_val;
    versionStats_t ver_stats;
#endif

  /* ADKTMS-1586-start */
  /* Last Communication Media Used field set to previous (N-1) Network Configuration field. */
  lastcomm = dev_profile->network_config;
  /* ADKTMS-1586-end */

  /* Clear the profile */
  memset(dev_profile, 0, sizeof(device_profile_t));

  /* ADKTMS-1586 - save last net config */
  dev_profile->lastcomm_media_used = lastcomm;

  if (strlen(VHQ_VERSION_STRING) < 64)
    strcpy(dev_profile->vhq_version, VHQ_VERSION_STRING);
  else
    memcpy(dev_profile->vhq_version, VHQ_VERSION_STRING, 63);

#ifdef Mx2
  software = sysinfo_software();

  dbg_msg("%s: os_version before trim: '%s'\n", __FUNCTION__,
          software.release_version);
  os_ver_str = trim_whitespace(software.release_version);
  dbg_msg("%s: os_version after trim: '%s'\n", __FUNCTION__, os_ver_str);

  if (strlen(os_ver_str) < OS_VER_MAX_LEN)
    strcpy(dev_profile->os_version, os_ver_str);
  else
    memcpy(dev_profile->os_version, os_ver_str, OS_VER_MAX_LEN - 1);

  strcpy(dev_profile->os_name, VOS_OS_NAME);
#else
    /* Get the RFS info and put it into slot 1 */
    memset(&ver_stats, 0, sizeof(ver_stats));
    svc_info_ret_val = svcInfoRFS_stats(&ver_stats);

    dbg_msg( "%s: os_version before trim: '%s'\n", __FUNCTION__, ver_stats.name);
    os_ver_str = trim_whitespace(ver_stats.name);
    dbg_msg( "%s: os_version after trim: '%s'\n", __FUNCTION__, os_ver_str);

    if (strlen(os_ver_str) < OS_VER_MAX_LEN)
        memcpy(dev_profile->os_version, os_ver_str, strlen(os_ver_str));
    else
        memcpy(dev_profile->os_version, os_ver_str, OS_VER_MAX_LEN - 1);

    strcpy(dev_profile->os_name, RFS_OS_NAME);
#endif

  /* Get Coin Cell Battery Status */
  dev_profile->coincell_battery.present = GetBatteryStatus(
      &dev_profile->coincell_battery.voltage);

  /* Get main battery status */
  GetMainBatteryStatus(&dev_profile->batt);

  /* Get the clock setting */
  dev_profile->clock_setting = linux_time(NULL);

  /* Get model and serial number */
  GetModelNumber(dev_profile->model_number, sizeof(dev_profile->model_number));
  GetSerialNumber(dev_profile->ser_num);

  /* Set the last boot time */
  dev_profile->last_boot_time = GetOSBootTime();

#ifndef _VOS2

    /* Get the cable status so we can setup the port status info */
    mpc_cable_status = svcInfoPlatform(FEATURE_MPCABLE_STATUS);
    dbg_msg( "%s: svcInfoPlatform(FEATURE_MPCABLE_STATUS) returned 0x%08x\n", __FUNCTION__, mpc_cable_status);

#ifdef Mx2
    if (0)
#else
    if (!(mpc_cable_status & MPC_TYPE_SPECTRUM))
#endif
    {
        dev_profile->usb_status = 0;
        dev_profile->eth_status = 0;
    }
    else
    {
        dev_profile->usb_status = PORT_STATUS_PRESENT;
        if (mpc_cable_status & MPC_USB_DEVICE)
            dev_profile->usb_status |= USB_PORT_CLIENT;

        dbg_msg( "%s: Ethernet Present - Calling netLinkStatus\n", __FUNCTION__);
        if (netLinkStatus())
            dev_profile->eth_status |= PORT_STATUS_CONNECTED;

    }

    /* Setup Com 1 status */
    dev_profile->com1_status = PORT_STATUS_PRESENT;
    if (mpc_cable_status & MPC_COM1_ATTACHED)
        dev_profile->com1_status |= PORT_STATUS_CONNECTED;
    if (mpc_cable_status & MPC_COM1_RS485)
        dev_profile->com1_status |= COM_PORT_RS_485;

    /* Setup Com 2 status */
    dev_profile->com2_status = PORT_STATUS_PRESENT;
    if (mpc_cable_status & MPC_COM2_ATTACHED)
        dev_profile->com2_status |= PORT_STATUS_CONNECTED;

    /* Setup Com 3 status */
    dev_profile->com3_status = PORT_STATUS_PRESENT;
    if (mpc_cable_status & MPC_COM3_TAILGATE)
        dev_profile->com3_status |= COM_PORT_RS_485;
#else
  // This is all stuff we now get from the ADK
  {
    enum com_ErrorCodes com_errno;
    UNUSED(mpc_cable_status);
    //com_Init(&com_errno);
    // this function should be safe to call anytime:
    DirectADK_init(NULL, NULL, NULL, NULL);
    if (com_GetDevicePropertyInt(
    COM_PROP_SUPP_INTERFACES,
                                 (int*) &devicemask, &com_errno) == 0)
    {
      dbg_msg("%s:  com_GetDevicePropertyInt supp intf= %x, errno = %d\n",
              __FUNCTION__, devicemask, com_errno);

      if (devicemask & COM_SERIAL_1)
      {
        dev_profile->com1_status = PORT_STATUS_PRESENT;
        dbg_msg("%s:  COM1 present\n", __FUNCTION__, devicemask, com_errno);
      }
      if (devicemask & COM_SERIAL_2)
      {
        dev_profile->com2_status = PORT_STATUS_PRESENT;
        dbg_msg("%s:  COM2 present\n", __FUNCTION__, devicemask, com_errno);
      }
      if (devicemask & COM_SERIAL_3)
      {
        dev_profile->com3_status = PORT_STATUS_PRESENT;
        dbg_msg("%s:  COM3 present\n", __FUNCTION__, devicemask, com_errno);
      }
      if (devicemask & COM_RS485)
      {
        dev_profile->com3_status = PORT_STATUS_PRESENT;  // com3 is inherently tailgate
        dev_profile->com3_status |= COM_PORT_RS_485;
      }
      // the following APIs are from VOS2, and they are the only ones that can set wether a port is in use or not.
      dev_profile->com1_status |= SetCommTypeInfo(&platform.cable.port1,
                                                  "COM1");
      dev_profile->com2_status |= SetCommTypeInfo(&platform.cable.port2,
                                                  "COM2");
      dev_profile->com3_status |= SetCommTypeInfo(&platform.cable.port3,
                                                  "COM3");

      /* If this is not a spectrum cable then USB and ethernet are not supported */
      if (devicemask & COM_USB)
      {
        dev_profile->usb_status = PORT_STATUS_PRESENT | USB_PORT_HOST;
      }
      if ((devicemask & COM_USBSER) || (devicemask & COM_SERIAL_USBD))  //  was: || platform.cable.usbType == USBTYPE_BOTH
      {
        dev_profile->usb_status = PORT_STATUS_PRESENT | USB_PORT_CLIENT;
      }

      if ((devicemask & COM_LAN_1) || (devicemask & COM_LAN_2))
      {
        int connection_status = 0;
        dev_profile->eth_status = PORT_STATUS_PRESENT;
        if (com_GetDevicePropertyInt(COM_PROP_ETH_0_LINK_STATUS,
                                     &connection_status, &com_errno) == 0)
        {
          dbg_msg(
              "%s:  com_GetDevicePropertyInt COM_PROP_ETH_0_LINK_STATUS= %x, errno = %d\n",
              __FUNCTION__, connection_status, com_errno);
          if (1 == connection_status)  //1==link up... anything else is link down
            dev_profile->eth_status |= PORT_STATUS_CONNECTED;
        }
        if (com_GetDevicePropertyInt(COM_PROP_ETH_1_LINK_STATUS,
                                     &connection_status, &com_errno) == 0)
        {
          dbg_msg(
              "%s:  com_GetDevicePropertyInt COM_PROP_ETH_1_LINK_STATUS= %x, errno = %d\n",
              __FUNCTION__, connection_status, com_errno);
          if (1 == connection_status)
            dev_profile->eth_status |= PORT_STATUS_CONNECTED;
        }
      }
    }
    else
      dbg_msg("%s:  com_GetDevicePropertyInt error %d\n", __FUNCTION__,
              com_errno);
  }
#endif

#if 1
  dbg_msg("%s: Reading COM3 FW Version\n", __FUNCTION__);

  com3_fd = open("/dev/ttyWR0", O_RDWR | O_NONBLOCK);
  if (com3_fd >= 0)
  {
    if (!svcCom3ReqFirmVers(com3_fd, dev_profile->com3_fw_version))
    {
      if (*dev_profile->com3_fw_version == 0)
        strcpy(dev_profile->com3_fw_version, "UNKNOWN");
    }
    close(com3_fd);
  }

  if (!isValidXMLData(dev_profile->com3_fw_version))
    strcpy(dev_profile->com3_fw_version, "NOT VALID");

  dbg_msg("%s: COM3 FW Version = %s\n", __FUNCTION__,
          dev_profile->com3_fw_version);
#endif

  /* Setup Smartcard information if it exists */
  if (unit_configuration & UNIT_CONFIG_SMARTCARD)
  {
#ifdef Mx2
    int smartcard_ver = svcInfoPlatform(FEATURE_SMARTCARD_VER);

    dev_profile->smartcard_info = SMARTCARD_PRESENT;

    dev_profile->smartcard_ver[0] = 0;
    if (smartcard_ver & 0x1)
      strcpy(dev_profile->smartcard_ver, "Delta 1");
    else if (smartcard_ver & 0x2)
      strcpy(dev_profile->smartcard_ver, "Delta 2");
    else
    {
      unsigned long r;
      PI_smart_card_info_st stSc;

      memset(&stSc, 0, sizeof(PI_smart_card_info_st));
      if (PI_OK
          == platforminfo_get(PI_SMART_CARD_INFO, &stSc, sizeof(stSc), &r))
      {
        dbg_msg(
            "%s: platforminfo_get(SMART_CARD) returned - exist = %d, type = %d, port = %d, reserved = %s\n",
            __FUNCTION__, stSc.exist, stSc.type, stSc.port, stSc.reserved);

        if (stSc.exist)
        {
          int res;
          uint32 dwVoyReader = 0;  //0x01000000;
          char version[MAX_SC_VER_LEN] = { 0 };  // Make it same as current defined size (32) of dev_profile->smartcard_ver[]

          // Get IFM version
          IFD_Set_Capabilities(Tag_Open_SCard_Reader,
                               (unsigned char*) &dwVoyReader);
          dwVoyReader = 0x01000000;
          IFD_Set_Capabilities(Tag_Open_ICC, (BYTE*) &dwVoyReader);
          IFD_Set_Capabilities(Tag_Select_ICC, (BYTE*) &dwVoyReader);
          res = IFD_Get_Capabilities(Tag_Current_IFM_Version, (BYTE*) version);

          if (res == IFD_Success)
          {
            strncpy(dev_profile->smartcard_ver, version,
                    sizeof(dev_profile->smartcard_ver) - 1);
          }
          else
          {
            strcpy(dev_profile->smartcard_ver, "Unknown");
          }
        }
      }
    }
    dev_profile->smartcard_ver[sizeof(dev_profile->smartcard_ver) - 1] = 0;  // Raptor OS isn't capping this string
    dbg_msg("%s: smart card version = %s \n", __FUNCTION__,
            dev_profile->smartcard_ver);
    {
      uint32 i;
      for (i = 0; i < sizeof(dev_profile->smartcard_ver) - 1; i++)
      {
        char *p = dev_profile->smartcard_ver + i;
        if (!(isalnum(*p) || *p == ' ' || *p == '/' || *p == '.'))
          *p = 0;
      }
    }
#else
        unsigned char rx_buff[128];
        int result;
        unsigned short rxLen = 0;

        dev_profile->smartcard_info = SMARTCARD_PRESENT;

        if (IFD_Set_Capabilities(Tag_Open_SCard_Reader,0) != 0)
        {
            dbg_msg( "%s ERROR: IFD_Set_Capabilities(Tag_Open_SCard_Reader) FAILED\n", __FUNCTION__);
            strcpy(dev_profile->smartcard_ver, "Unknown (CP Error)");
        }
        else
        {
            memset(rx_buff, 0, sizeof(rx_buff));
            result=dpd_delta_tx_rx(0,3,0,0,rx_buff,sizeof(rx_buff),&rxLen,sizeof(rxLen));

            dbg_msg( "%s: dpd_delta_tx_rx() rxLen = %d\n", __FUNCTION__, rxLen);
            if (rxLen > 0)
            {
                if (strlen(rx_buff) < MAX_SC_VER_LEN)
                    strcpy(dev_profile->smartcard_ver, rx_buff);
                else
                    memcpy(dev_profile->smartcard_ver, rx_buff, MAX_SC_VER_LEN - 1);
            }
            else
                strcpy(dev_profile->smartcard_ver, "Unknown");
        }
#endif
  }

  /* Setup RFID information if it exists */
  memset(dev_profile->rfid_ver, 0, sizeof(dev_profile->rfid_ver));
  if (module_configuration & MODULE_RFID)
  {
#ifdef Mx2
//#warning "need to add RFCR info to MX9"
//Jira issue ADKTMS-408
#if 0
        int rslt;
        struct rfcrResp rfcrR;
        struct rfcrCmnd scmnd;

        rslt=rfcr_Init();
        if (rslt>=0)
        {
            scmnd.iTimeout=0;
            scmnd.iOption=0;
            scmnd.iCmndSize=0;
            *scmnd.pCmndData=0;
            // Read RFCR library version
            scmnd.iCmnd=NFC_RFCR_LIB_VER;
            rfcrR=rfcr_Command (scmnd);
            if (!rfcrR.iStatus)
            {
                strncpy(dev_profile->rfid_ver,rfcrR.pRespData,sizeof(dev_profile->rfid_ver)-1);
            }
            else
                strcpy(dev_profile->rfid_ver,"UNKNOWN");

            rfcr_Exit();
        }
#endif
#else
        int RFIDinit, rsltRFIDping;

        dbg_msg( "%s: RFID is Present - reading FW version\n", __FUNCTION__);
        RFIDinit = RFCRInit();
        rsltRFIDping = RFCRPing();
        if (!rsltRFIDping)
        {
            dbg_msg( "%s: RFCRPing() returned %d\n", __FUNCTION__, rsltRFIDping);
            RFCRSetIndicator(1, 0);
            RFCRSetAntenna(1);
            RFCRPurge();
        }
        RFCRGetVersion(dev_profile->rfid_ver);
        RFCRGetVersion(dev_profile->rfid_ver);
        dbg_msg( "%s: RFCRGetVersion() returned %s\n", __FUNCTION__, dev_profile->rfid_ver);
        RFCRClose(RFIDinit);
#endif
  }

  GetNetworkConfig(dev_profile);

  /* Get the stylus version */
#ifdef Mx2
  stylus_res = 0;
  {
    void *ts_lib = dlopen("libsvc_sigcap.so", RTLD_LAZY | RTLD_GLOBAL);
    if (!ts_lib)
    {
      log_err("%s: Can't find svc_sigcap.so\n", __FUNCTION__);
    }
    else
    {
      char *dlsym_error;
      int (*getStylus)(void);
      struct version (*sigcap_getVersion)(void);

      dlerror();
      sigcap_getVersion = (struct version (*)(void)) dlsym(ts_lib,
                                                           "sigcap_getVersion");

      dlsym_error = dlerror();
      if (dlsym_error != NULL)
      {
        log_err("%s: Error (%s) getting sigcap_getVersion in svc_sigcap.so\n",
                __FUNCTION__, dlsym_error);
      }
      else
      {
        if (sigcap_getVersion)
        {
          struct version sigcap_version;

          sigcap_version = (*sigcap_getVersion)();

          dbg_msg("%s: Found sigcap_getVersion in svc_sigcap.so - V:%d.%d.%d\n",
                  __FUNCTION__, sigcap_version.major, sigcap_version.minor,
                  sigcap_version.maint);
        }
        else
        {
          log_err("%s: Can't find sigcap_getVersion in svc_sigcap.so\n",
                  __FUNCTION__);
        }
      }

      dlerror(); /* Clear any existing error */
      getStylus = (int (*)(void)) dlsym(ts_lib, "sigcap_getStylus");

      dlsym_error = dlerror();
      if (dlsym_error != NULL)
      {
        log_err("%s: Error (%s) getting sigcap_getStylus in svc_sigcap.so\n",
                __FUNCTION__, dlsym_error);
      }
      else
      {
        if (getStylus)
        {
          /* if stylus is present, gettylus return 1, otherwise return 0 */
          stylus_res = (*getStylus)();
          dbg_msg(
              "%s: Found sigcap_getStylus in svc_sigcap.so - stylus_res:%d\n",
              __FUNCTION__, stylus_res);
        }
        else
        {
          dbg_msg("%s: Can't find sigcap_getStylus in svc_sigcap.so\n",
                  __FUNCTION__);
        }
      }

      dlclose(ts_lib);
    }
  }

  dev_profile->stylus_version = stylus_res;

  //
  // get wifi profile
  // ADKTMS-409
  //
#ifdef _VOS2
  if (devicemask & COM_WIFI)
#else
    if (module_configuration & MODULE_WIFI)
#endif //_VOS2
  {
    struct netWifiInfo netwifi_info;
    int tmperrno, count;
    struct netSiteSurveyList surveyList;

    memset(&dev_profile->wifiprofile, 0, sizeof(wifi_profile_t));
    sprintf(dev_profile->wifiprofile.connection, "%s", "DOWN");
    netwifi_info = net_wifiInfo("wlan0");  //p_iface is for example wlan0
    tmperrno = errno;

    if (tmperrno == 0)
    {

      /* obtain site survey (this may take time... like 30 seconds... */
      surveyList = net_wifiSiteSurvey();
      tmperrno = errno;
      if (tmperrno == 0)
      {

        /* successfully obtained list */
        int index;
        int signalStrength = 0;
        char channelStr[16];
        count = surveyList.siteSurvey_count;
        struct netSiteSurvey *pSiteSurvey;

        log_dbg("%s: WiFi survey count=%d\n", __FUNCTION__, count);
        pSiteSurvey = surveyList.siteSurvey;

        for (index = 0; index < count; index++)
        {

          dbg_msg("SS-ssid: %s, netwifi-ssid: %s\n", pSiteSurvey[index].ssid,
                  netwifi_info.ssid);
          if (strcmp(pSiteSurvey[index].ssid, netwifi_info.ssid) == 0)
          {
            dbg_msg("Found ssid: %s\n", netwifi_info.ssid);
            sprintf(dev_profile->wifiprofile.connection, "%s", "UP");
            strncpy(dev_profile->wifiprofile.ssid, netwifi_info.ssid,
                    strlen(netwifi_info.ssid));
            sprintf(dev_profile->wifiprofile.network_type, "%s",
                    netwifi_info.networkType == 1 ? "managed" : "ad-hoc");

            // net_wifiInfo() can return signal strength < 0 even though documentation states between 0-100.
            dbg_msg("WiFi Signal Strength: %d\n", netwifi_info.signalStrength);
            signalStrength = netwifi_info.signalStrength;

            if (signalStrength < 0)
            {
              signalStrength = 0;
            }
            else if (signalStrength > 100)
            {
              signalStrength = 100;
            }
            dbg_msg("Setting Signal Strength to %d\n", signalStrength);
            dev_profile->wifiprofile.signalstrength = signalStrength;

            sprintf(channelStr, "%d", pSiteSurvey[index].channel);
            strncpy(dev_profile->wifiprofile.channel, channelStr,
                    strlen(channelStr));
            if (strlen(pSiteSurvey[index].encrypType))
            {
              strncpy(dev_profile->wifiprofile.encrypt_type,
                      pSiteSurvey[index].encrypType,
                      strlen(pSiteSurvey[index].encrypType));
            }
            else
            {
              strncpy(dev_profile->wifiprofile.encrypt_type, "--none---",
                      strlen("--none---"));
            }
            if (strlen(pSiteSurvey[index].authMode))
            {
              strncpy(dev_profile->wifiprofile.auth_mode,
                      pSiteSurvey[index].authMode,
                      strlen(pSiteSurvey[index].authMode));
            }
            else
            {
              strncpy(dev_profile->wifiprofile.auth_mode, "--none---",
                      strlen("--none---"));
            }
            dbg_msg(
                "WIFI Info\nConnection: %s\nChannel: %s\nSignal Stength: %d\nEncrypt Type: %s\nAuth Mode: %s\n",
                dev_profile->wifiprofile.connection,
                dev_profile->wifiprofile.channel,
                dev_profile->wifiprofile.signalstrength,
                dev_profile->wifiprofile.encrypt_type,
                dev_profile->wifiprofile.auth_mode);

            break;
          }
        }
        /* done with list, so free */
        free((void*) surveyList.siteSurvey);
      }
      else
      {
        dbg_msg("%s - wifi network is not found! %d\n", __FUNCTION__, tmperrno);
      }

    }
    else
    {
      /* no wifi network found */
      dbg_msg("%s - wifi network is not found! Is wlan0 the route? %d\n",
              __FUNCTION__, tmperrno);
    }
  }

#ifdef _VOS2
  if (devicemask
      & (COM_FEATURE1_GPRS | COM_FEATURE1_UMTS | COM_FEATURE1_ISDN
          | COM_FEATURE1_4G_LTE))
  {
    getSimCardProfile(&dev_profile->simprofile);
  }
  //
  // bluetooth profile, the NET_BTBASE_DEFAULT, which equals to "bt_base0", is used
  //
  {
    struct netBluetoothStatus btStatus = net_bluetoothGetStatus(NULL);

    memset(&dev_profile->btprofile, 0, sizeof(bt_profile_t));
    sprintf(dev_profile->btprofile.connection, "%s", "DOWN");

    if (btStatus.is_paired)
    {
      if (btStatus.is_pan_connected || btStatus.is_dun_connected)
      {
        int rssi, retries;
        /* Time to time net_bluetoothGetRssi() can't reach device.... Try 3 times and giveup */
        for (retries = 3; retries; retries--)
        {
          errno = 0;
          rssi = net_bluetoothGetRssi(NULL);
          if (errno == 0)
            break;
          sleep(1);
        }

        if (errno)
        {
          log_err(
              "%s: Failed to get RSSI, errno = %d. Device may be not connected!!!\n",
              __FUNCTION__, errno);
        }
        else
        {
          dev_profile->btprofile.signalstrength = rssi * -1;  // Range -98 dBm to 0 dBm - from bcm43340 datasheet
        }
        sprintf(dev_profile->btprofile.connection, "%s", "UP");
      }
      else
        dbg_msg("%s - Bluetooth device paired, but not connected\n",
                __FUNCTION__);
    }
    else
      dbg_msg("%s - Bluetooth no paired\n", __FUNCTION__);

    dbg_msg("%s - Bluetooth profile: %s, signalstrength = %d\n", __FUNCTION__,
            dev_profile->btprofile.connection,
            dev_profile->btprofile.signalstrength);
  }
#endif //_VOS2

#else //Mx2
    stylus_res = touchCmd(2, 0);
    dev_profile->stylus_version = (stylus_res & 0x06);
#endif //Mx2
  log_dbg("\n\n%s: touchCmd(2, 0) = 0x%08x\n\n", __FUNCTION__, stylus_res);

  /* Get the GUI Manager Version */
  memset(&gui_mgr_lib_stat, 0, sizeof(gui_mgr_lib_stat));
  if (stat(GUI_MGR_LIB_FILE, &gui_mgr_lib_stat) == 0)
  {
    char *pdlError;                 // Pointer to error string
    void *gui_mgr_lib_handle;
    unsigned char (*get_gui_mgr_ver)(char*, int);

    dbg_msg("%s: GUI Manager Lib is present - Getting Lib Version\n",
            __FUNCTION__);
    gui_mgr_lib_handle = dlopen(GUI_MGR_LIB_FILE, RTLD_LAZY | RTLD_GLOBAL);

    pdlError = dlerror();
    if (gui_mgr_lib_handle == NULL)
    {
      log_err("%s - unable to open [%s] library!, error=[%s]\n", __FUNCTION__,
              GUI_MGR_LIB_FILE, pdlError);
      return -1;
    }
    else
    {
      dbg_msg("%s - loaded [%s] library!\n", __FUNCTION__, GUI_MGR_LIB_FILE);

      get_gui_mgr_ver = dlsym(gui_mgr_lib_handle, "GetGUIManagerVersion");

      if (pdlError || get_gui_mgr_ver == NULL)
      {
        log_err(
            "%s - unable to locate function GetGUIManagerVersion() in [%s] library, error=[%s]\n",
            __FUNCTION__, GUI_MGR_LIB_FILE, pdlError);
      }
      else
      {
        unsigned char iRetVal;

        dbg_msg("%s - obtained GetGUIManagerVersion() function pointer %p!\n",
                __FUNCTION__, get_gui_mgr_ver);
        memset(dev_profile->gui_mgr_version, 0,
               sizeof(dev_profile->gui_mgr_version));
        iRetVal = get_gui_mgr_ver(dev_profile->gui_mgr_version,
                                  sizeof(dev_profile->gui_mgr_version) - 1);
        if (iRetVal > 0)
        {
          dbg_msg("%s - GetGUIManagerVersion() returned [%s]\n", __FUNCTION__,
                  dev_profile->gui_mgr_version);
        }
        else
        {
          dbg_msg("%s - error calling GetGUIManagerVersion()!\n", __FUNCTION__);
        }
      }
    }

    dlclose(gui_mgr_lib_handle);
  }
  else
    log_dbg("%s: GUI Manager Lib is NOT present!!!\n", __FUNCTION__);

  /* Construct the security policy string from environment variables */
  if (getEnvFile("perm", "tty", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcpy(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "telnet", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "ssh", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "dbg", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "nldr", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "bmode1", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "bmode2", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "0");

  if (getEnvFile("perm", "shcount", env_val, env_val_len) > 0)
    strncat(dev_profile->security_policy, env_val, 1);
  else
    strcat(dev_profile->security_policy, "00");

  return TRUE;
}


bool GetDiagCounters(diag_counter_t *CountersArray, uint8 ArraySize,
                     uint16 *num_counters)
{
  bool ret_val;
  int dc_ret_val;
  struct diag_counter_info buff[DIAG_COUNTERS_ALLOCATED];
  int i;

  dbg_trace("%s: +\n", __FUNCTION__);

  /* Clear incoming data */
  memset(CountersArray, 0, ArraySize * sizeof(diag_counter_t));
  *num_counters = 0;

  dc_ret_val = diag_counters_get_info_all(buff);
  if (!dc_ret_val)
  {

    for (i = 0; i < DIAG_COUNTERS_ALLOCATED; i++)
    {
#ifdef Mx2
      if ((!(buff[i].flags & RESERVED)) && (!(buff[i].flags & SECRET)))
#else
            if (!(buff[i].flags & RESERVED))
#endif
      {
        if ((buff[i].flags & HEX))
        {
          dbg_msg("%-16s: value 0x%08X, index %03d\n", buff[i].text,
                  buff[i].value, buff[i].index);
          CountersArray[*num_counters].type = DIAG_COUNTER_TYPE_HEX;
        }
        else if ((buff[i].flags & TIME))
        {
          struct tm result;
          linux_localtime((time_t*) &buff[i].value, &result);

          dbg_msg("%-16s: value 0x%08X, index %03d, (%s %s)\n", buff[i].text,
                  buff[i].value, buff[i].index, tmtoa(&result), result.tm_zone);
          CountersArray[*num_counters].type = DIAG_COUNTER_TYPE_TIME;
        }
        else
        {
          dbg_msg("%-16s: value   %8d, index %03d\n", buff[i].text,
                  buff[i].value, buff[i].index);
          CountersArray[*num_counters].type = DIAG_COUNTER_TYPE_DECIMAL;
        }
        strcpy(CountersArray[*num_counters].name, buff[i].text);
        CountersArray[*num_counters].value = buff[i].value;
        (*num_counters)++;
      }
    }
    ret_val = TRUE;
  }
  else
  {
    log_err(
        "%s: No Diag Counters on board - diag_counters_get_info_all() returned %d\n",
        __FUNCTION__, dc_ret_val);
    ret_val = FALSE;
  }

  dbg_trace("%s: -\n", __FUNCTION__);
  return ret_val;
}


bool GetHandleInfo(int *OpenHandles, int *MaxHandles)
{
  bool ret_val = TRUE;
  char handle_data[256];
  int bytes_read;
  int open_handles = 0;
  int max_handles = 0;

  dbg_msg("%s: Searching for file data in %s\n", __FUNCTION__, HANDLE_FILE);
  if (handle_file_handle == -1
      && (handle_file_handle = open(HANDLE_FILE, O_RDONLY)) == -1)
  {
    log_err("%s ERROR: Could not open %s\n", __FUNCTION__, HANDLE_FILE);
    return FALSE;
  }

  /* We are going to leave mem file open so lets just seek to the beginning each time */
  lseek(handle_file_handle, 0L, SEEK_SET);

  /* Make sure the log_data string is NULL terminated by setting
   the last byte to 0 and reading 1 less character than we have */
  memset(handle_data, 0, sizeof(handle_data));
  bytes_read = read(handle_file_handle, handle_data, sizeof(handle_data) - 1);
  if (bytes_read > 0)
  {
    int temp;

    /* Make sure data is NULL terminated */
    handle_data[bytes_read] = '\0';

    if (sscanf(handle_data, "%d %d %d", &open_handles, &temp, &max_handles)
        == 3)
    {
      dbg_msg("%s: read open_handles = %d, max_handles = %d\n", __FUNCTION__,
              open_handles, max_handles);
    }
    else
    {
      log_err("%s ERROR: could not read open_handles or max_handles\n",
              __FUNCTION__);
      open_handles = 0;
      max_handles = 0;
      ret_val = FALSE;
    }

  }
  else
    ret_val = FALSE;

  //close(handle_file_handle);

  *OpenHandles = open_handles;
  *MaxHandles = max_handles;

  return ret_val;

}

typedef struct _proc_data_t
{
  int pid;
  char name[MAX_PROCESS_NAME_LENGTH];
  unsigned long utime1;
  unsigned long stime1;
  unsigned long utime2;
  unsigned long stime2;
} proc_data_t;


bool ReadProcData(char *stat_file, char proc_name[MAX_PROCESS_NAME_LENGTH],
                  unsigned long *utime, long *stime)
{
  bool ret_val = TRUE;
  char process_data[256];
  int bytes_read;
  int proc_stat_file_handle;
  int pid = 0;
  char state;
  int ppid, pgrp, session, tty_nr, tpgid, flags;
  long minflt, cminflt, majflt, cmajflt;

  dbg_msg("%s: Searching for process data in %s\n", __FUNCTION__, stat_file);
  proc_stat_file_handle = open(stat_file, O_RDONLY);
  if (proc_stat_file_handle == -1)
  {
    log_err("%s ERROR: Could not open %s\n", __FUNCTION__, stat_file);
    return FALSE;
  }

  /* We are going to leave mem file open so lets just seek to the beginning each time */
  lseek(proc_stat_file_handle, 0L, SEEK_SET);

  /* Make sure the log_data string is NULL terminated by setting
   the last byte to 0 and reading 1 less character than we have */
  memset(process_data, 0, sizeof(process_data));
  bytes_read = read(proc_stat_file_handle, process_data,
                    sizeof(process_data) - 1);
  if (bytes_read > 0)
  {

    /* Make sure data is NULL terminated */
    process_data[bytes_read] = '\0';

    if (sscanf(process_data,
               "%d %s %c %d %d %d %d %d %u %lu %lu %lu %lu %lu %lu", &pid,
               proc_name, &state, &ppid, &pgrp, &session, &tty_nr, &tpgid,
               &flags, &minflt, &cminflt, &majflt, &cmajflt, utime, stime)
        == 15)
    {
      dbg_msg("%s: read pid = %d, filename = %s, utime = %lu, stime = %lu\n",
              __FUNCTION__, pid, proc_name, *utime, *stime);
    }
    else
    {
      log_err("%s ERROR: could not read process data from %s\n", __FUNCTION__,
              stat_file);
      ret_val = FALSE;
    }

  }
  else
    ret_val = FALSE;

  close(proc_stat_file_handle);

  return ret_val;

}

bool GetProcessInfo(process_info_t *ProcessArray, uint8 ArraySize,
                    uint16 *num_processes)
{
  bool ret_val = TRUE;
  char proc_stat_filename[256];
  float pcpu, et;
  struct dirent **procnamelist;
  struct timeval oldtimev;
  struct timeval timev;
  struct timezone timez;
  proc_data_t process_data_table[ArraySize];
  int num_proc_dirs, i;
  int totalRAM, freeRAM;
  uint16 temp_num_processes;
  long clk_speed = sysconf(_SC_CLK_TCK);

  *num_processes = 0;
  temp_num_processes = 0;
  memset(process_data_table, 0, ArraySize * sizeof(proc_data_t));
  memset(ProcessArray, 0, ArraySize * sizeof(process_info_t));

  num_proc_dirs = scandir("/proc/", &procnamelist, 0, alphasort);

  if (num_proc_dirs < 0)
  {
    log_err("%s ERROR: scandir failed", __FUNCTION__);
  }
  else
  {
    while (num_proc_dirs--)
    {
      struct stat proc_statfile_stat;
      long pid = 0;

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s in /proc\n", __FUNCTION__, procnamelist[num_proc_dirs]->d_name);
      errno = 0;
      pid = strtol(procnamelist[num_proc_dirs]->d_name, NULL, 10);

      if (errno)
      {
        log_warn(
            "%s: Could not convert %s to integer - moving on to next dir\n",
            __FUNCTION__, procnamelist[num_proc_dirs]->d_name);
        free(procnamelist[num_proc_dirs]);
        procnamelist[num_proc_dirs] = NULL;
        break;
      }
      free(procnamelist[num_proc_dirs]);
      procnamelist[num_proc_dirs] = NULL;

      sprintf(proc_stat_filename, "/proc/%d/stat", (int) pid);

      if (stat(proc_stat_filename, &proc_statfile_stat) == 0)
      {
        /* /proc/<dir>/stat exists - make sure it is a file */
        if (S_ISREG(proc_statfile_stat.st_mode))
        {
          if (temp_num_processes >= ArraySize)
            break;
          else if (ReadProcData(proc_stat_filename,
                                process_data_table[temp_num_processes].name,
                                &process_data_table[temp_num_processes].utime1,
                                &process_data_table[temp_num_processes].stime1))
          {
            dbg_msg(
                "%s: Adding PID %d [name = %s] to process table at slot %d\n\n\n",
                __FUNCTION__, pid, process_data_table[temp_num_processes].name,
                *num_processes);
            process_data_table[temp_num_processes].pid = pid;
            temp_num_processes++;
          }
        }
      }

    }

    free(procnamelist);
  }

  gettimeofday(&oldtimev, &timez);
  sleep(10);
  gettimeofday(&timev, &timez);
  et = (timev.tv_sec - oldtimev.tv_sec)
      + (float) (timev.tv_usec - oldtimev.tv_usec) / 1000000.0;

  GetRAMData(&totalRAM, &freeRAM);

  for (i = 0; i < temp_num_processes; i++)
  {
    int MemUsed;

    sprintf(proc_stat_filename, "/proc/%d/stat", process_data_table[i].pid);

    if (ReadProcData(proc_stat_filename, process_data_table[i].name,
                     &process_data_table[i].utime2,
                     &process_data_table[i].stime2))
    {
      int tics;

      tics = (int) ((unsigned long long) (process_data_table[i].utime2
          + process_data_table[i].stime2)
          - (unsigned long long) (process_data_table[i].utime1
              + process_data_table[i].stime1));

      pcpu = tics * 100.0f / ((float) clk_speed * (float) et);
      if (pcpu > 99.9)
        pcpu = 99.9;

      dbg_msg(
          "\n\n\n%s: Adding PID %d to ProcessArray[%d]: pcpu = %2.1f, et = %f, tics = %d, clk_speed = %d\n",
          __FUNCTION__, process_data_table[i].pid, *num_processes, pcpu, et,
          tics, clk_speed);
      strcpy(ProcessArray[*num_processes].name, process_data_table[i].name);
      ProcessArray[*num_processes].cpu_percent = pcpu * 10;
      ProcessArray[*num_processes].mem_percent = 0;

      sprintf(proc_stat_filename, "/proc/%d/statm", process_data_table[i].pid);

      if (GetProcessRAMData(proc_stat_filename, &MemUsed))
      {
        float pmem;

        pmem = (float) MemUsed * 100.0f / (float) totalRAM;
        if (pmem > 99.9)
          pmem = 99.9;

        ProcessArray[*num_processes].mem_percent = pmem * 10;

      }
      (*num_processes)++;

    }
    else
    {
      log_warn("\n\n\n%s: PID %d (name = %s) no longer found - SKIPPING\n",
               __FUNCTION__, process_data_table[i].pid,
               process_data_table[i].name);
    }

  }

  return ret_val;
}


bool CreateFileListing(char *OutputFileName, char *directory)
{
  char *recursive;
  char ls_dir[256] = { 0 };
  char cmd[256] = { 0 };
  int sys_res;

  if (!OutputFileName || !directory)
    return FALSE;
  dbg_msg("%s: OutputFileName = '%s', directory = '%s'\n", __FUNCTION__,
          OutputFileName, directory);

  recursive = strstr(directory, "*");
  /* This should not return */
  if (recursive)
  {
    memcpy(ls_dir, directory, recursive - directory);
    dbg_msg("%s: Doing recursive listing on %s\n", __FUNCTION__, ls_dir);
  }
  else
  {
    strcpy(ls_dir, directory);
    dbg_msg("%s: Doing non-recursive listing on %s\n", __FUNCTION__, ls_dir);
  }

  if (recursive)
    snprintf(cmd, sizeof(cmd), "ls -alRL %s > %s 2>&1", ls_dir, OutputFileName);
  else
    snprintf(cmd, sizeof(cmd), "ls -alL %s > %s 2>&1", ls_dir, OutputFileName);

  sys_res = system(cmd);
  if (sys_res == -1)
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: system call error\n", __FUNCTION__);

  chmod(OutputFileName,
  S_IRUSR | S_IWUSR | S_IRGRP | S_IWGRP | S_IROTH | S_IWOTH);
  return TRUE;
}

static key_type_t ConvertKeyType(int keys)
{
  key_type_t key_type;

  switch (keys)
  {
    case MASTER_SESSION_KEYS:
      key_type = KEY_TYPE_MS;
      break;
    case DUKPT_KEYS:
      key_type = KEY_TYPE_DUKPT;
      break;
    case USER_KEYS:
      key_type = KEY_TYPE_USER;
      break;
    case RKL_KEYS:
      key_type = KEY_TYPE_RKL;
      break;
    case ADE_KEYS:
      key_type = KEY_TYPE_ADE;
      break;
    default:
      break;
  }

  return key_type;
}

static void ms_keys_check(key_data_t *KeyArray, struct keyRecord *k_ptr)
{
  int length = 0;

  KeyArray->keyPresent = (k_ptr->status == NO_KEY_LOADED) ? FALSE : TRUE;

  switch (k_ptr->status)
  {
    case KEY_PRESENT:
      strcpy(KeyArray->keyInfo, "Non-GISKE Loaded;");
      break;
    case GISKE_KEY_PRESENT:
      strcpy(KeyArray->keyInfo, "GISKE Loaded;");
      break;
    default:
      strcpy(KeyArray->keyInfo, "");
      break;
  }

  length = strlen(KeyArray->keyInfo);

  if (k_ptr->strength != UNKNOWN_STRENGTH)
  {
    snprintf(KeyArray->keyInfo + length, MAX_KEY_INFO - length,
             "%dDES;",
             k_ptr->strength);
    length = strlen(KeyArray->keyInfo);
  }

  if (*k_ptr->EPB)
  {
    snprintf(KeyArray->keyInfo + length, MAX_KEY_INFO - length,
             "EPB:%s;",
             k_ptr->EPB);
  }
}

static void ade_dukpt_keys_check(key_data_t *KeyArray, struct keyRecord *k_ptr)
{
  int length = 0;

  switch (k_ptr->status)
  {
    case NO_KEY_LOADED:
      KeyArray->keyPresent = FALSE;
      break;
    case KEY_PRESENT:
    case GISKE_KEY_PRESENT:
    case DUKPT_EOL:
      KeyArray->keyPresent = TRUE;
      break;
    default:
      KeyArray->keyPresent = FALSE;
      break;
  }

  if (*k_ptr->KSN)
  {
    snprintf(KeyArray->keyInfo, MAX_KEY_INFO, "KSN:%s;",
             k_ptr->KSN);
    length = strlen(KeyArray->keyInfo);
  }

  if (*k_ptr->EPB)
  {
    snprintf(KeyArray->keyInfo + length, MAX_KEY_INFO - length,
             "EPB:%s;", k_ptr->EPB);
  }
}


static void process_keys(
    int keys, key_data_t *KeyArray, uint8 *pNum_keys, uint8 MaxKeys,
    void (*check_cb)(key_data_t *KeyArray, struct keyRecord *k_ptr))
{
  struct keyRecords kr;
  struct keyRecord *k_ptr;
  int base_num = 0;
  int lp;
  int avail_slots = 0;

  kr = security_getKeys(keys);

  base_num = *pNum_keys;
  avail_slots = MaxKeys - base_num;

  dbg_msg("%s: Key type: %d, got %d keys, key slots %d\n", __FUNCTION__, keys,
          kr.keys_count, avail_slots);

  if (avail_slots >= kr.keys_count)
  {
    *pNum_keys += kr.keys_count;

    for (lp = 0, k_ptr = kr.keys; lp < kr.keys_count; lp++, k_ptr++)
    {
      KeyArray[base_num + lp].type = ConvertKeyType(keys);
      KeyArray[base_num + lp].slot = lp;
      check_cb((KeyArray + base_num + lp), k_ptr);
    }
  }

  if (kr.keys)
  {
    free(kr.keys);
  }

  return;
}

/* Max VSS scripts supported */
#define MAXNBSCRIPT    192

static int scan_vss(key_data_t *KeyArray, uint8 *pNum_keys, uint8 MaxKeys)
{
  const unsigned int MAX_NB_SCRIPT = 192;
  const unsigned int VSS_KEYS_NUM = 255;
  const unsigned int AB_SCRIPT_NAME_LEN = 30;
  const int DUKPT_KSN_SIZE = 10;
  char name[AB_SCRIPT_NAME_LEN];
  unsigned char ksn[DUKPT_KSN_SIZE];
  unsigned int i = 0, j = 0;
  int ret = 0;
  unsigned int base_num = 0;
  unsigned int index = 0;
  unsigned int avail_slots = 0;

  base_num = *pNum_keys;
  avail_slots = MaxKeys - base_num;

  for (i = 0; i < MAX_NB_SCRIPT; i++)
  {
    if (avail_slots > 0)
    {
      unsigned int length = 0;
      memset(name, 0, sizeof(name));

      ret = iPS_GetScriptStatus(i, (unsigned char*) name);
      if (ret != 0)
      {
        continue;
      }

      dbg_msg("%s: index: %d, script#: %d, name: %s\n", __FUNCTION__, index, i,
              name);
      KeyArray[base_num + index].type = KEY_TYPE_VSS;
      KeyArray[base_num + index].slot = i;
      KeyArray[base_num + index].keyPresent = TRUE;
      strncpy(KeyArray[base_num + index].name, name, MAX_KEY_NAME - 1);

      ret = iPS_GetVssDukptKsn(i, ksn, sizeof(ksn));
      if (ret == 0)
      {
        snprintf(KeyArray[base_num + index].keyInfo, MAX_KEY_INFO, "KSN:0x");

        length = strlen(KeyArray[base_num + index].keyInfo);

        for (j = 0; j < 10; j++)
        {
          snprintf(KeyArray[base_num + index].keyInfo + length,
                   MAX_KEY_INFO - length, "%02x", ksn[j]);

          length = strlen(KeyArray[base_num + index].keyInfo);
        }
      }
      for (j = 0; j < VSS_KEYS_NUM; j++)
      {
        ret = iPS_CheckMasterKey(i, j, NULL);
        if ((ret == 0) && (length < MAX_KEY_INFO))
        {
          ret = snprintf(KeyArray[base_num + index].keyInfo + length,
                   MAX_KEY_INFO - length, "#%d", j);
          length = strlen(KeyArray[base_num + index].keyInfo);
        }
      }

      index++;
      avail_slots--;
      (*pNum_keys)++;
    }
  }

  return 0;
}


vhq_result_t GetKeyDataLegacy(key_data_t *KeyDataArray, uint8 *ArraySize,
                        uint8 MaxKeys)
{
  vhq_result_t ret_val = VHQ_SUCCESS;
  int svc_info_ret_val;
  versionStats_t ver_stats;
  *ArraySize = 0;

  dbg_msg("%s: Checking if device has been attacked\n", __FUNCTION__);
  if (isAttacked())
  {
    log_alert("%s WARNING: Device has been attacked!!!!!!\n", __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_KEYS_TAMPERED;
  }

  /* We can only get Key status for RFS18 and up */
  memset(&ver_stats, 0, sizeof(ver_stats));
  svc_info_ret_val = svcInfoRFS_stats(&ver_stats);
  dbg_msg("%s: svcInfoRFS_stats() returned %d\n\t\tname = %s, timestamp = %s\n",
          __FUNCTION__, svc_info_ret_val, ver_stats.name,
          ctime(&ver_stats.timestamp));

  process_keys(MASTER_SESSION_KEYS, KeyDataArray, ArraySize, MaxKeys,
               ms_keys_check);
  process_keys(DUKPT_KEYS, KeyDataArray, ArraySize, MaxKeys,
               ade_dukpt_keys_check);
  process_keys(ADE_KEYS, KeyDataArray, ArraySize, MaxKeys,
               ade_dukpt_keys_check);
  scan_vss(KeyDataArray, ArraySize, MaxKeys);

  return ret_val;
}


bool GetMemoryProfile(memory_profile_t *mem_profile)
{
  bool ret_val = TRUE;
  struct flashInformation flash_info;

  memset(mem_profile, 0, sizeof(memory_profile_t));

  if (svcInfoFlash(&flash_info))
    ret_val = FALSE;
  else
  {
    mem_profile->FLASH_free_space = flash_info.free;
    mem_profile->FLASH_size = flash_info.total;
  }

  mem_profile->RAM_size = svcInfoPlatform(FEATURE_SDRAM_SIZE);

  GetRAMData(&mem_profile->RAM_size, &mem_profile->RAM_free_space);

  GetProtectedExtRAM(mem_profile);

  dbg_msg(
      "%s: Memory Profile:\n\t\tRAM_free_space = %d\n\t\tFLASH_free_space = %d\n\t\tExternal_Mem_free_space = %d\n\t\tRAM_protected_size = %d\n\t\tRAM_size = %d\n\t\tFLASH_size = %d\n\t\tExternal_Mem_Size = %d\n",
      __FUNCTION__, mem_profile->RAM_free_space, mem_profile->FLASH_free_space,
      mem_profile->Ext_Mem_free_space, mem_profile->RAM_protected_size,
      mem_profile->RAM_size, mem_profile->FLASH_size,
      mem_profile->Ext_Mem_size);

  return ret_val;
}

#define DF_EXECUTABLE           "/bin/df"
#define MNT_SRAM                "/mnt/sram"
#define MNT_SD                  "/mnt/SD"

static bool GetProtectedExtRAM(memory_profile_t *memProfile)
{
  /* Mitch (4-14-17): We used to fork a process to run "df" command and then read the results of that to obtain
   memory usage for /mnt/sram and /mnt/SD.  It is much quicker to use statfs() OS call. */
#if 0
    pid_t sPID;

    sPID = fork();
    if(sPID < 0)
    {
        dbg_err( "%s: ERROR to fork process\n", __FUNCTION__);
        return FALSE;
    }

    if (sPID)
    {
        int i, ret, status;
        pid_t df_child_status;
        struct stat result_file_stat;

        dbg_msg( "\n\n\n\n\n\n\n\n\n%s: Forked new process to write df command to output file - waiting for result file\n", __FUNCTION__);

        df_child_status = 0;
        while (df_child_status == 0)
        {
            dbg_msg( "%s: child process still running, sleeping for a second\n", __FUNCTION__);
            sleep(1);
            df_child_status = waitpid(sPID, &status, WNOHANG);
        }

        memset(&result_file_stat, 0, sizeof(result_file_stat));

        //stat() the DF output file; if fail, try 3 times
        //Fixes coverity 48881
        ret=-1;
        for (i=0; i<3 && ret!=0; i++) {
            ret = stat(DF_OUTFILE, &result_file_stat);
            sleep(1);
        }

        /* Make sure results file is there - if not, return an ERROR */
        if (result_file_stat.st_size == 0)
        {
            dbg_err( "%s ERROR: file %s size is 0\n", __FUNCTION__, DF_OUTFILE);
            return FALSE;
        }
        else
            dbg_msg( "%s: file %s size is %d\n", __FUNCTION__, DF_OUTFILE, result_file_stat.st_size);

        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Result file is finished - Reading file for VCL version\n", __FUNCTION__);
        if (S_ISREG(result_file_stat.st_mode))
        {
            int df_output_handle, bytes_read;
            char* temp_char_p;
            char *df_data= NULL;

            df_data= malloc(result_file_stat.st_size+1);
            if (NULL==df_data)
            {
                return FALSE;
            }
            memset(df_data, 0, result_file_stat.st_size+1);

            df_output_handle = open(DF_OUTFILE, O_RDONLY);

            if (df_output_handle == -1)
            {
                log_err( "%s ERROR: Could not open df output file %s\n", __FUNCTION__, DF_OUTFILE);
                free(df_data);
                return FALSE;
            }
            bytes_read = read(df_output_handle, df_data, result_file_stat.st_size);
            if (bytes_read == result_file_stat.st_size)
            {
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read:\n[%s\n] from df output file\n", __FUNCTION__, df_data);
            }
            else
            {
                dbg_err( "%s ERROR: Could not read file listing from file\n", __FUNCTION__);
            }

            close(df_output_handle);

            // Get Protected Memory (battery backed SRAM) info - on MX8, this is /mnt/sram area.
            // This should be monitored to make sure never gets full otherwise Mx8 units can stop working.
            // No exposed Protected Memory on MX9 units.
            temp_char_p = strstr(df_data, MNT_SRAM);
            if (temp_char_p)
            {
                int kb_blocks, prot_ram_used, prot_ram_avail;

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found %s in df output at 0x%08x\n", __FUNCTION__, MNT_SRAM, temp_char_p);
                while (((*temp_char_p != '\n') && (*temp_char_p != '\r')) && (temp_char_p >= df_data))
                    temp_char_p--;

                /* Now move forward to the first space and protected RAM should be the integer after */
                while (*temp_char_p != ' ')
                    temp_char_p++;

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found NL or CR at 0x%08x - running sscanf on \n[%s]\n to read mem data\n", __FUNCTION__, temp_char_p, temp_char_p);
                sscanf(temp_char_p, " %d %d %d", &kb_blocks, &prot_ram_used, &prot_ram_avail);

                memProfile->RAM_protected_size = kb_blocks;
                memProfile->RAM_protected_free_space = prot_ram_avail;
                dbg_msg( "%s: Read protected RAM size of %d, free %d\n", __FUNCTION__, memProfile->RAM_protected_size, memProfile->RAM_protected_free_space);
            }
            else {
                // no MNT_SRAM directory found
                memProfile->RAM_protected_size = 0;
                memProfile->RAM_protected_free_space = 0;
                dbg_msg( "%s: No protected RAM found (/mnt/sram)\n", __FUNCTION__);
            }

            // Get External Memory info - SD card on MX9; none on MX8.
            temp_char_p = strstr(df_data, MNT_SD);
            if (temp_char_p)
            {
                int kb_blocks, ext_ram_used, ext_ram_avail;

                while (((*temp_char_p != '\n') && (*temp_char_p != '\r')) && (temp_char_p >= df_data))
                    temp_char_p--;

                /* Now move forward to the first space and protected RAM should be the integer after */
                while (*temp_char_p != ' ')
                    temp_char_p++;

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found NL or CR at 0x%08x - running sscanf on \n[%s]\n to read mem data\n", __FUNCTION__, temp_char_p, temp_char_p);
                sscanf(temp_char_p, " %d %d %d", &kb_blocks, &ext_ram_used, &ext_ram_avail);

                memProfile->Ext_Mem_size = kb_blocks;
                memProfile->Ext_Mem_free_space = ext_ram_avail;
            }
            else {
                // no MNT_SD directory found
                memProfile->Ext_Mem_size = 0;
                memProfile->Ext_Mem_free_space = 0;
            }
            dbg_msg( "%s: Read External Memory size of %d, free %d\n", __FUNCTION__, memProfile->Ext_Mem_size, memProfile->Ext_Mem_free_space);

            free(df_data);

        }
        else
        {
            dbg_err( "%s ERROR: file listing file %s is not a regular file\n", __FUNCTION__, DF_OUTFILE);
        }

        //Remove DF output file; if fail, try 3 times
        //Fixes coverity 48880
        ret=-1;
        for (i=0; i<3 && ret!=0; i++) {
            ret = remove(DF_OUTFILE);
            sleep(1);
        }
    }
    else
    {
        int i, ret, outfile_fd;
        mode_t mode=S_IRUSR|S_IWUSR|S_IRGRP|S_IWGRP|S_IROTH|S_IWOTH;

        //Remove DF output file; if fail, try 3 times
        //Fixes coverity 48880
        ret=-1;
        for (i=0; i<3 && ret!=0; i++) {
            ret = remove(DF_OUTFILE);
            sleep(1);
        }

        /* Open the file to redirect grep's STDOUT to */
        outfile_fd = open(DF_OUTFILE, O_RDWR | O_CREAT, mode);

        if(outfile_fd == -1)
        {
            log_err( "%s ERROR: could not open %s for df output\n", __FUNCTION__, DF_OUTFILE);
            exit(0);    /* Child process, exit in case of error */
        }

        /* Redirect STDOUT and STDERR to the new file */
        dup2(outfile_fd, STDOUT_FILENO);
        dup2(outfile_fd, STDERR_FILENO);

        /* Close the redirection file */
        close(outfile_fd);

        /* This should not return */
        execl(DF_EXECUTABLE, DF_EXECUTABLE, (const char*) 0);
        fprintf(stderr, "%s ERROR: execl returned - returning FALSE\n", __FUNCTION__);
        exit(errno);    /* we should never reach this place */
    }

    return TRUE;
#else
  int statfs_ret_val;
  struct statfs pathinfo;

  statfs_ret_val = statfs(MNT_SRAM, &pathinfo);
  if (statfs_ret_val == 0)
  {
    dbg_msg("%s: statfs(%s) was successful - gathering memory info\n",
            __FUNCTION__, MNT_SRAM);
    dbg_msg("%s: blocksize = %lu, free blocks = %lu, total blocks = %lu\n",
            __FUNCTION__, pathinfo.f_bsize, pathinfo.f_bfree,
            pathinfo.f_blocks);
    memProfile->RAM_protected_free_space = (pathinfo.f_bsize * pathinfo.f_bfree)
        / 1024;
    memProfile->RAM_protected_size = (pathinfo.f_bsize * pathinfo.f_blocks)
        / 1024;
    dbg_msg("%s: Free Protected RAM = %d, Total Protected RAM = %d\n",
            __FUNCTION__, memProfile->RAM_protected_free_space,
            memProfile->RAM_protected_size);
  }
  else
  {
    // no MNT_SRAM directory found
    memProfile->RAM_protected_size = 0;
    memProfile->RAM_protected_free_space = 0;
    dbg_msg("%s: No protected RAM found (/mnt/sram)\n", __FUNCTION__);
  }

  statfs_ret_val = statfs(MNT_SD, &pathinfo);
  if (statfs_ret_val == 0)
  {
    dbg_msg("%s: statfs(%s) was successful - gathering memory info\n",
            __FUNCTION__, MNT_SD);
    dbg_msg("%s: blocksize = %lu, free blocks = %lu, total blocks = %lu\n",
            __FUNCTION__, pathinfo.f_bsize, pathinfo.f_bfree,
            pathinfo.f_blocks);
    memProfile->Ext_Mem_free_space = (pathinfo.f_bsize * pathinfo.f_bfree)
        / 1024;
    memProfile->Ext_Mem_size = (pathinfo.f_bsize * pathinfo.f_blocks) / 1024;
    dbg_msg("%s: Free SD Card MEM = %d, Total SD Card MEM = %d\n", __FUNCTION__,
            memProfile->Ext_Mem_free_space, memProfile->Ext_Mem_size);
  }
  else
  {
    // no MNT_SD directory found
    memProfile->Ext_Mem_size = 0;
    memProfile->Ext_Mem_free_space = 0;
    dbg_msg("%s: No External SD found (/mnt/SD)\n", __FUNCTION__);
  }

  return TRUE;
#endif
}

#define PAGES_TO_KB(n)  (unsigned long)( (n) << page_to_kb_shift )


bool GetProcessRAMData(char *process_status_file, int *MemUsed)
{
  int i, page_size, page_to_kb_shift;
  bool ret_val = TRUE;
  char meminfo_data[4096];
  int bytes_read;
  int proc_meminfo_file_handle = -1;

  *MemUsed = 0;

  page_to_kb_shift = 0;
  page_size = getpagesize();
  i = page_size;
  while (i > 1024)
  {
    i >>= 1;
    page_to_kb_shift++;
  }

  dbg_msg("%s: Searching for memory data in %s\n", __FUNCTION__,
          process_status_file);
  if ((proc_meminfo_file_handle = open(process_status_file, O_RDONLY)) == -1)
  {
    log_err("%s ERROR: Could not open %s\n", __FUNCTION__, process_status_file);
    return FALSE;
  }

  /* We are going to leave mem file open so lets just seek to the beginning each time */
  lseek(proc_meminfo_file_handle, 0L, SEEK_SET);

  /* Make sure the log_data string is NULL terminated by setting
   the last byte to 0 and reading 1 less character than we have */
  memset(meminfo_data, 0, sizeof(meminfo_data));
  bytes_read = read(proc_meminfo_file_handle, meminfo_data,
                    sizeof(meminfo_data) - 1);
  if (bytes_read > 0)
  {
    int num;
    long size, resident, share, trs, lrs, drs, dt;

    /* Make sure data is NULL terminated */
    meminfo_data[bytes_read] = '\0';

    size = resident = share = trs = lrs = drs = dt = 0;

    num = sscanf(meminfo_data, "%ld %ld %ld %ld %ld %ld %ld", &size, &resident,
                 &share, &trs, &lrs, &drs, &dt);

    if (num != 7)
    {
      log_err(
          "%s ERROR: did not read the right number of arguments (expected 7, got %d) from %s\n",
          __FUNCTION__, process_status_file, num);
      ret_val = FALSE;
    }

    *MemUsed = PAGES_TO_KB(resident);

  }
  else
    ret_val = FALSE;

  close(proc_meminfo_file_handle);

  return ret_val;
}


bool GetRAMData(int *totalRAM, int *freeRAM)
{
  bool ret_val = TRUE;
#ifdef Mx2
  struct memoryUsage_s mem = sysinfo_memoryUsage();

  *totalRAM = mem.ram.total / 1024;
  *freeRAM = mem.ram.free / 1024;
#else
    char* memtotal_string_p;
    char* memfree_string_p;
    char meminfo_data[2048];
    int bytes_read;
    int memtotal = 0;
    int memfree = 0;


    dbg_msg( "%s: Searching for memory data in %s\n", __FUNCTION__, MEMORY_FILE);
    if (meminfo_file_handle == -1 && (meminfo_file_handle = open(MEMORY_FILE, O_RDONLY)) == -1)
    {
        log_err( "%s ERROR: Could not open %s\n", __FUNCTION__, MEMORY_FILE);
        return FALSE;
    }

    /* We are going to leave mem file open so lets just seek to the beginning each time */
    lseek(meminfo_file_handle, 0L, SEEK_SET);

    /* Make sure the log_data string is NULL terminated by setting
    the last byte to 0 and reading 1 less character than we have */
    memset(meminfo_data, 0, sizeof(meminfo_data));
    bytes_read = read(meminfo_file_handle, meminfo_data, sizeof(meminfo_data) - 1);
    if (bytes_read > 0)
    {
        /* Make sure data is NULL terminated */
        meminfo_data[bytes_read] = '\0';
        memtotal_string_p = strstr(meminfo_data, MEM_TOTAL_SEARCH_STRING);
        if (memtotal_string_p)
        {
            /* Read the total MEM */
            sscanf(memtotal_string_p + strlen(MEM_TOTAL_SEARCH_STRING), "%d", &memtotal);
            dbg_msg( "%s: Read Total RAM of %d\n", __FUNCTION__, memtotal);
        }

        memfree_string_p = strstr(meminfo_data, MEM_FREE_SEARCH_STRING);
        if (memfree_string_p)
        {
            /* Read the free MEM */
            sscanf(memfree_string_p + strlen(MEM_FREE_SEARCH_STRING), "%d", &memfree);
            dbg_msg( "%s: Read free RAM of %d\n", __FUNCTION__, memfree);
        }
    }

    //close(meminfo_file_handle);

    *totalRAM = memtotal;
    *freeRAM = memfree;
#endif

  return ret_val;
}

int GetMPCStatus()
{
  int ret_val = 0;

  ret_val = svcInfoPlatform(FEATURE_MPCABLE_STATUS);

  return ret_val;
}

#if defined(Mx2)

#define VSHD_SN_LEN         6
#define DN_UID_LEN          6
#define APP_SPONSOR_DN_UID_TEST "\x02\x03\x01\x02\x36\x51"  /* V/OS - TEST */
#define APP_SPONSOR_DN_UID_PRD  "\x02\x03\x20\x08\x21\xC5"  /* V/OS - PROD */
#define APP_SPONSOR_DN_UID_EVO  "\x02\x03\x01\x01\x37\x3b"  /* Verix eVo - PROD*/
#define APP_SPONSOR_DN_UID_TEST_STR "020301023651"  /* V/OS - TEST */
#define APP_SPONSOR_DN_UID_PRD_STR  "0203200821C5"  /* V/OS - PROD */


int GetVSR_sponsor_sn_name_i(char *app_sponsor_dn_uid, unsigned int *namelen,
                             char *certname, unsigned int maxsize)
{
  char buffer[148];
  short buflen = 0;
  char *ptr = 0;
  char *end = 0;
  int reset = 0;
  int sts = 0;
  int sn = 0;
  unsigned int i, len = 0;
  unsigned int snlen = 0;

  dbg_trace("%s: ++\n", __FUNCTION__);

  if (namelen == NULL || certname == NULL || app_sponsor_dn_uid == NULL)
  {
    dbg_msg(
        "%s: parameter error: namelen:0x%08X, certname:0x%08X maxsiz:%d app_sponsor_dn_uid:0x%08X\n",
        __FUNCTION__, namelen, certname, maxsize, app_sponsor_dn_uid);
    dbg_msg("%s: -- return: %d\n", __FUNCTION__, sn);
    return sn;
  }

  for (;;)
  {
    buflen = 0;
    memset(buffer, 0, sizeof(buffer));

    /* Get the first cert */
    sts = CMDiag(4, buffer, &buflen);
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: CMDiag returns %d buferlen:%d\n", __FUNCTION__, sts, buflen);

    /* We reached the end of tree, reset and try again (once). */
    if ((sts == ERR_DIAG_NO_MORE_RECORDS) && (reset == 0))
    {
      buflen = 0;
      memset(buffer, 0, sizeof(buffer));
      sts = CMDiag(4, buffer, &buflen);
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: CMDiag returns %d buferlen:%d\n", __FUNCTION__, sts, buflen);
      reset++;
    }

    /* If we ran out of certificates, break */
    if ((sts != 0) || ((uint32) buflen < sizeof(int)))
    {
      sn = 0;
      break;
    }

    end = buffer + buflen;

    /* Get length of serial number */
    memcpy(&snlen, buffer, sizeof(int));

    /* Not a VCA-issued cert (might be a KRD cert from KGD CA) - Go to next record */
    if (snlen != VSHD_SN_LEN)
      continue;

    /* Point to the next field */
    ptr = buffer + sizeof(int) + snlen;

    /* Inconsistency - Go to next record */
    if ((ptr + sizeof(int)) > end)
      continue;

    /* Get length of uniqueIdentifier */
    memcpy(&len, ptr, sizeof(int));
    ptr += sizeof(int);                     // Point to it

    /* Inconsistency - Go to next record */
    if ((ptr + len) > end)
      continue;

    /* Compare first bytes of the uniqueIdentifier */
    if (memcmp(ptr, app_sponsor_dn_uid, DN_UID_LEN) == 0)
    {
      /* We found the application sponsor cert */
      dbg_msg("%s: found cert \n", __FUNCTION__);

      /* Point to the certificate name field */
      ptr += len;
      len = 0;
      if ((ptr + sizeof(int)) <= end)
      {
        /* Get its length */
        memcpy(&len, ptr, sizeof(int));
        /* Point to the name */
        ptr += sizeof(int);
        if (len != 0)
        {
          /* Inconsistency - Do not read the name */
          if ((ptr + len) > end)
          {
            len = 0;
          }
          else
          {
            if (certname != 0)
            {
              if (maxsize < len)
                len = maxsize;
              memcpy(certname, ptr, len);
            }
          }
        }
      }
      certname[len] = 0;
      *namelen = len;

      /* Return the serial number */
      ptr = buffer + sizeof(int) + snlen;
      for (i = 0; i < snlen; i++)
      {
        /* Decimal digits are in ASCII and it's reversed order */
        sn *= 10;
        sn += (*--ptr & 0x0F);
      }

      dbg_msg("%s: return: %d %s %d--\n", __FUNCTION__, sn, certname, *namelen);
      return sn;
    }
  }

  dbg_msg("%s: -- return: %d\n", __FUNCTION__, sn);
  return sn;
}

#ifdef _VOS

int GetVSR_sponsor_sn_name_i_2(char *app_sponsor_dn_uid, unsigned int *namelen,
                               char *certname, unsigned int maxsize)
{
  (void) (namelen);
  struct certEntryList certList;
  int i;
  int sn = 0;
  log_dbg("%s: Retrieving VeriShield Certificate List\n", __FUNCTION__);
  dbg_msg("%s: Looking for %s\n", __FUNCTION__, app_sponsor_dn_uid);

  if (certname)
    certname[0] = 0;
  certList = security_getCertificateList();
  dbg_msg("%s: certList.certs_count= %d, certList.certs=%x\n", __FUNCTION__,
          certList.certs_count, certList.certs);

  if (NULL != certList.certs)
  {
    for (i = 0; i < certList.certs_count; i++)
    {
      if (memcmp(certList.certs[i].id, app_sponsor_dn_uid,
                 strlen(app_sponsor_dn_uid)) == 0)
      {
        int iLen = min(strlen(certList.certs[i].certName) + 1, maxsize);
        dbg_msg("%s: certList.certs[i].sn= %s, iLen=%d maxsize=%d\n",
                __FUNCTION__, certList.certs[i].sn, iLen, maxsize);

        if (certname && strlen(certList.certs[i].certName))
        {
          strncpy(certname, certList.certs[i].certName, iLen);
        }

        sn = atoi(certList.certs[i].sn);
        break;
      }

    }
  }

  security_getCertificateList_release(certList);
  dbg_msg("\n%s: Retrieved name %s and SN %d\n", __FUNCTION__,
          (certname==NULL) ? "" : certname, sn);
  return sn;
}
#endif


int GetVSR_sponsor_sn_name(unsigned int *namelen, char *certname,
                           unsigned int maxsize)
{
  int sn = 0;

#ifdef _VOS
  if (NULL != security_getCertificateList
      && NULL != security_getCertificateList_release)
  {
    /* Search for PRD device */
    sn = GetVSR_sponsor_sn_name_i_2((char*) APP_SPONSOR_DN_UID_PRD_STR, namelen,
                                    certname, maxsize);

    if (sn == 0)
    {
      /* Search for DEV device */
      dbg_msg("%s: Try it for DEV unit\n", __FUNCTION__);
      sn = GetVSR_sponsor_sn_name_i_2((char*) APP_SPONSOR_DN_UID_TEST_STR,
                                      namelen, certname, maxsize);
    }
  }
  else
#endif
  {
    /* Search for PRD device */
    sn = GetVSR_sponsor_sn_name_i((char*) APP_SPONSOR_DN_UID_PRD, namelen,
                                  certname, maxsize);

    if (sn == 0)
    {
      /* Search for DEV device */
      dbg_msg("%s: Try it for DEV unit\n", __FUNCTION__);
      sn = GetVSR_sponsor_sn_name_i((char*) APP_SPONSOR_DN_UID_TEST, namelen,
                                    certname, maxsize);
    }
  }
  dbg_msg("%s: -- return: %d\n", __FUNCTION__, sn);

  return sn;
}

#endif

#ifdef _VOS
vhq_result_t GetVSRCertTree2(vsr_cert_data_t *VSRCertArray, uint8 *NumVSRCerts)
{
  struct certEntryList certList;
  int i;
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_VSR_CERT_TREE_ERROR;
  log_dbg("%s: Retrieving VeriShield Certificate List\n", __FUNCTION__);

  *NumVSRCerts = 0;

  certList = security_getCertificateList();
  dbg_msg("%s: certList.certs_count= %d, certList.certs=%x\n", __FUNCTION__,
          certList.certs_count, certList.certs);

  if (NULL != certList.certs)
  {
    for (i = 0; i < certList.certs_count; i++)
    {
      memset(&VSRCertArray[*NumVSRCerts], 0,
             sizeof(VSRCertArray[*NumVSRCerts]));
      /* Set the cert type to unknown */
      VSRCertArray[*NumVSRCerts].Type = VSR_CERT_TYPE_UNKNOWN;

      dbg_msg("%s: certList.certs[%d].status= %d\n", __FUNCTION__, i,
              certList.certs[i].status);
      if (1 == certList.certs[i].status)
      {
        dbg_msg("%s: certList.certs[%d].sn= %s\n", __FUNCTION__, i,
                certList.certs[i].sn);
        if (strlen(certList.certs[i].sn))
        {
          // is this reversed like CMDiags output?
          strncpy(VSRCertArray[*NumVSRCerts].SerNum, certList.certs[i].sn,
                  sizeof(VSRCertArray[*NumVSRCerts].SerNum));
        }
        else
          strcpy(VSRCertArray[*NumVSRCerts].SerNum, "No SN");

        dbg_msg("%s: certList.certs[%d].id= %s\n", __FUNCTION__, i,
                certList.certs[i].id);
        if (strlen(certList.certs[i].id))
        {
          strncpy(VSRCertArray[*NumVSRCerts].ID, certList.certs[i].id,
                  sizeof(VSRCertArray[*NumVSRCerts].ID));
          if (memcmp(certList.certs[i].id, APP_SPONSOR_DN_UID_PRD_STR,
          DN_UID_LEN) == 0)
          {
            /* We found the application sponsor cert */
            dbg_msg("Found PROD App Sponsor cert - \n");
            VSRCertArray[*NumVSRCerts].Type = VSR_CERT_TYPE_APP_SPONSOR;
          }
          else if (memcmp(certList.certs[i].id, APP_SPONSOR_DN_UID_TEST_STR,
          DN_UID_LEN) == 0)
          {
            /* We found the application sponsor cert */
            dbg_msg("Found DEV App Sponsor cert - \n");
            VSRCertArray[*NumVSRCerts].Type = VSR_CERT_TYPE_APP_SPONSOR;
          }

        }
        dbg_msg("%s: certList.certs[%d].certName= %s\n", __FUNCTION__, i,
                certList.certs[i].certName);

        if (strlen(certList.certs[i].certName))
        {
          strncpy(VSRCertArray[*NumVSRCerts].Name, certList.certs[i].certName,
                  sizeof(VSRCertArray[*NumVSRCerts].Name));
        }

        *NumVSRCerts = *NumVSRCerts + 1;
      }

    }

    ret_val = VHQ_SUCCESS;
  }
  security_getCertificateList_release(certList);
  log_dbg("\n%s: Retrieved ID and SN for %d certs\n", __FUNCTION__,
          *NumVSRCerts);

  return ret_val;
}
#endif

vhq_result_t GetVSRCertTree(vsr_cert_data_t *VSRCertArray, uint8 *NumVSRCerts)
{
#ifdef Mx2
  int diag_status;
  char idBuffer[148];
  char *ptr, *ptr2;
  char *end = 0;
  unsigned int bufferLen, i;
  char ped_version[32];
  int certDispLine, tab;
  vhq_result_t ret_val =
      VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_VSR_CERT_TREE_ERROR;

#ifdef _VOS

  if (NULL != security_getCertificateList
      && NULL != security_getCertificateList_release)
  {
    return GetVSRCertTree2(VSRCertArray, NumVSRCerts);
  }
#endif

  log_dbg("%s: Retrieving VeriShield Certificate List\n", __FUNCTION__);
  certDispLine = 0;

  *NumVSRCerts = 0;

  /* Make sure we get to the beginning of the CM Diag buffers first*/
  do
  {
    diag_status = CMDiag(4, idBuffer, (short*) &bufferLen);
  }
  while (diag_status != ERR_DIAG_NO_MORE_RECORDS);

  for (;;)
  {
    bufferLen = 0;
    memset(idBuffer, 0, sizeof(idBuffer));

    diag_status = CMDiag(4, idBuffer, (short*) &bufferLen);
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: CMDiag returns %d buferlen:%d\n", __FUNCTION__, diag_status, bufferLen);

    /* If we ran out of certificates, break */
    if ((diag_status != 0) || (bufferLen < sizeof(int)))
    {
      break;
    }

    end = idBuffer + bufferLen;

    /* Set the cert type to unknown */
    VSRCertArray[*NumVSRCerts].Type = VSR_CERT_TYPE_UNKNOWN;

    tab = 1;
    ptr = idBuffer + sizeof(unsigned int);
    memcpy(&bufferLen, idBuffer, sizeof(unsigned int));
    if (bufferLen == 0)
    {
      printf("No Serial Number - ");
      strcpy(VSRCertArray[*NumVSRCerts].SerNum, "No SN");
    }
    else
    {
      /* The serial number is in ASCII and the buffer is reversed */
      if (bufferLen >= sizeof(VSRCertArray[*NumVSRCerts].SerNum))
      {
        log_warn("%s WARNING: SN size too large (%d) - truncating to %d\n",
                 __FUNCTION__, bufferLen,
                 sizeof(VSRCertArray[*NumVSRCerts].SerNum) - 1);
        bufferLen = sizeof(VSRCertArray[*NumVSRCerts].SerNum) - 1;
      }
      ptr2 = ped_version + bufferLen;
      *ptr2-- = '\0';

      for (i = 0; i < bufferLen; i++)
        *ptr2-- = *ptr++;
      printf("SN: %s - ", ped_version);
      strcpy(VSRCertArray[*NumVSRCerts].SerNum, ped_version);
    }

    memcpy(&bufferLen, ptr, sizeof(unsigned int));
    ptr += sizeof(unsigned int);

    if (bufferLen == 0)
    {
      printf("No ID Number\n");
      memset(VSRCertArray[*NumVSRCerts].SerNum, 0,
             sizeof(VSRCertArray[*NumVSRCerts].SerNum));
      strcpy(VSRCertArray[*NumVSRCerts].SerNum, "Unknown");
      strcpy(VSRCertArray[*NumVSRCerts].ID, "No ID Number");
      certDispLine++;
    }
    else
    {
      unsigned int name_len;
      char *app_spon_name_ptr;

      /* Compare first bytes of the uniqueIdentifier */
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Comparing ID to PROD/DEV Sponsor ID\n", __FUNCTION__);
      //DebugMsgBuffer("\tID", ptr, DN_UID_LEN, BUF_TYPE_HEX);
      //DebugMsgBuffer("\tPROD App Sponsor", APP_SPONSOR_DN_UID_PRD, DN_UID_LEN, BUF_TYPE_HEX);
      //DebugMsgBuffer("\tDEV App Sponsor", APP_SPONSOR_DN_UID_TEST, DN_UID_LEN, BUF_TYPE_HEX);
      if ((memcmp(ptr, APP_SPONSOR_DN_UID_PRD, DN_UID_LEN) == 0)
          || (memcmp(ptr, APP_SPONSOR_DN_UID_TEST, DN_UID_LEN) == 0))
      {
        if (memcmp(ptr, APP_SPONSOR_DN_UID_PRD, DN_UID_LEN) == 0)
        {
          /* We found the application sponsor cert */
          printf("Found PROD App Sponsor cert - ");
        }
        else if (memcmp(ptr, APP_SPONSOR_DN_UID_TEST, DN_UID_LEN) == 0)
        {
          /* We found the application sponsor cert */
          printf("Found DEV App Sponsor cert - \n");
        }

        /* Set the type to App Sponsor */
        VSRCertArray[*NumVSRCerts].Type = VSR_CERT_TYPE_APP_SPONSOR;
      }

      /* Point to the certificate name field */
      app_spon_name_ptr = ptr;
      app_spon_name_ptr += bufferLen;
      name_len = 0;
      if ((app_spon_name_ptr + sizeof(int)) <= end)
      {
        /* Get its length */
        memcpy(&name_len, app_spon_name_ptr, sizeof(int));
        /* Point to the name */
        app_spon_name_ptr += sizeof(int);
        if (name_len != 0)
        {
          /* Inconsistency - Do not read the name */
          if ((app_spon_name_ptr + name_len) > end)
          {
            name_len = 0;
          }
          else
          {
            if (sizeof(VSRCertArray[*NumVSRCerts].Name) <= name_len)
              name_len = sizeof(VSRCertArray[*NumVSRCerts].Name) - 1;
            memcpy(VSRCertArray[*NumVSRCerts].Name, app_spon_name_ptr,
                   name_len);
          }
        }
      }
      VSRCertArray[*NumVSRCerts].Name[name_len] = 0;
      printf("Name = '%s' - ", VSRCertArray[*NumVSRCerts].Name);

      /* The ID is binary ... (Not Reversed) */
      ptr2 = ped_version;
      if (ptr[1] > 1)
        tab = ptr[1] - 1;
      for (i = 0; i < bufferLen; i++)
        sprintf(ptr2 + 2 * i, "%02X", (unsigned char) *ptr++);
      *(ptr2 + 2 * i) = 0;
      printf("ID: %s\n", ped_version);
      strcpy(VSRCertArray[*NumVSRCerts].ID, ped_version);
      certDispLine++;

    }
    if (certDispLine/* == 8*/)
    {
      while (tab--)
        printf("\t");
      certDispLine = 0;
    }
    (*NumVSRCerts)++;

#if 0
        /* REVISIT (Mitch 6-7-2012): This part of the certificate retrieval is causing AES to stop working
        on some units */
{
    char aes_test_key[16] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f};
    char aes_input[16] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f};
    char aes_output[16];

    AES(AES128E, aes_test_key, aes_input, aes_output);
    DebugMsgBuffer("AES After Collecting Cert ID/SN", aes_output, 16, BUF_TYPE_HEX);
}

        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Looping through CMDiag(2) to get certificates\n", __FUNCTION__, *NumVSRCerts);
        i = 0;
        while (!CMDiag(2, VSRCertArray[i].certData, &VSRCertArray[i].certDataLen))
        {
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read %d bytes into VSR Cert %d\n", __FUNCTION__, VSRCertArray[i].certDataLen, i);
            i++;
        }

{
    char aes_test_key[16] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f};
    char aes_input[16] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f};
    char aes_output[16];

    memset(aes_output, 0, 16);
    AES(AES128E, aes_test_key, aes_input, aes_output);
    DebugMsgBuffer("AES After Collecting Cert Data", aes_output, 16, BUF_TYPE_HEX);
}
#endif
    ret_val = VHQ_SUCCESS;
  }

  dbg_msg("\n%s: Retrieved ID and SN for %d certs\n", __FUNCTION__,
          *NumVSRCerts);

  return ret_val;
#else
    char idBuffer[148];
    char *ptr, *ptr2;
    unsigned int bufferLen, i;
    char ped_version[32];
    int certDispLine, tab;
    vhq_result_t ret_val = VHQ_SERVER_MGMT_PLAN_OPERATION_GET_DATA_VSR_CERT_TREE_ERROR;

    log_dbg( "%s: Retrieving VeriShield Certificate List\n", __FUNCTION__);
    certDispLine = 0;

    *NumVSRCerts = 0;

    if (CMDiag(3, idBuffer, (short *)&bufferLen))  /* no certificate */
    {
        printf("\tNo Certificate!\n");
    }
    else  /* retrieve cert's info from buffer */
    {
        do
        {
            tab = 1;
            ptr = idBuffer + sizeof(unsigned int);
            memcpy(&bufferLen, idBuffer, sizeof(unsigned int));
            if (bufferLen == 0)
            {
                printf("No Serial Number - ");
                strcpy(VSRCertArray[*NumVSRCerts].SerNum, "No SN");
            }
            else
            {
                /* The serial number is in ASCII and the buffer is reversed */
                if (bufferLen >= sizeof(VSRCertArray[*NumVSRCerts].SerNum))
                {
                    log_warn( "%s WARNING: SN size too large (%d) - truncating to %d\n", __FUNCTION__, bufferLen, sizeof(VSRCertArray[*NumVSRCerts].SerNum) - 1);
                    bufferLen = sizeof(VSRCertArray[*NumVSRCerts].SerNum) - 1;
                }
                ptr2 = ped_version + bufferLen;
                *ptr2-- = '\0';

                for (i = 0; i<bufferLen; i++) *ptr2-- = *ptr++;
                printf("SN: %s - ", ped_version);
                strcpy(VSRCertArray[*NumVSRCerts].SerNum, ped_version);
            }

            memcpy(&bufferLen, ptr, sizeof(unsigned int));
            ptr += sizeof(unsigned int);

            if (bufferLen == 0)
            {
                printf("No ID Number\n");
                memset(VSRCertArray[*NumVSRCerts].SerNum, 0, sizeof(VSRCertArray[*NumVSRCerts].SerNum));
                strcpy(VSRCertArray[*NumVSRCerts].SerNum, "Unknown");
                strcpy(VSRCertArray[*NumVSRCerts].ID, "No ID Number");
                certDispLine++;
            }
            else
            {
                /* The ID is binary ... (Not Reversed) */
                ptr2 = ped_version;
                if (ptr[1]>1) tab = ptr[1] - 1;
                for (i = 0; i<bufferLen; i++)
                    sprintf(ptr2 + 2 * i, "%02X", (unsigned char)*ptr++);
                *(ptr2 + 2 * i) = 0;
                printf("ID: %s\n", ped_version);
                strcpy(VSRCertArray[*NumVSRCerts].ID, ped_version);
                certDispLine++;
            }
            if (certDispLine/* == 8*/)
            {
                while (tab--)
                    printf("\t");
                certDispLine = 0;
            }
            (*NumVSRCerts)++;

        } while (!CMDiag(3, idBuffer, (short *)&bufferLen));

        dbg_msg( "\n%s: Retrieved ID and SN for %d certs, using CMDiag(0) to reset\n", __FUNCTION__, *NumVSRCerts);

#if 0
        /* REVISIT (Mitch 6-7-2012): This part of the certificate retrieval is causing AES to stop working
        on some units */
        {
            char aes_test_key[16] = { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f };
            char aes_input[16] = { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f };
            char aes_output[16];

            AES(AES128E, aes_test_key, aes_input, aes_output);
            DebugMsgBuffer("AES After Collecting Cert ID/SN", aes_output, 16, BUF_TYPE_HEX);
        }

        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Looping through CMDiag(2) to get certificates\n", __FUNCTION__, *NumVSRCerts);
        i = 0;
        while (!CMDiag(2, VSRCertArray[i].certData, &VSRCertArray[i].certDataLen))
        {
            DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read %d bytes into VSR Cert %d\n", __FUNCTION__, VSRCertArray[i].certDataLen, i);
            i++;
        }

    {
        char aes_test_key[16] = { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f };
        char aes_input[16] = { 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f };
        char aes_output[16];

        memset(aes_output, 0, 16);
        AES(AES128E, aes_test_key, aes_input, aes_output);
        DebugMsgBuffer("AES After Collecting Cert Data", aes_output, 16, BUF_TYPE_HEX);
    }
#endif
        ret_val = VHQ_SUCCESS;
    }

    return ret_val;
#endif
}

static pthread_mutex_t vcl_mutex = PTHREAD_MUTEX_INITIALIZER;

bool GetVCLInfo(vcl_info_t *VCLInfo, bool bDoDiags)
{
  HTDesMsg requestMsg, responseMsg;
  int outQid, inQid;
  struct stat vcl_stat;
  static unsigned char saveEncryptEnableState = 0x00;
  static char saveVSPVersionStr[16] = { '\0' };

  /* Clear all of the messages/info structures */
  memset(VCLInfo, 0, sizeof(vcl_info_t));
  memset(&requestMsg, 0, sizeof(HTDesMsg));
  memset(&responseMsg, 0, sizeof(HTDesMsg));

  if (stat(VCL_PATH, &vcl_stat) != 0)
  {
    dbg_msg("%s: VCL does not exist on device\n", __FUNCTION__);
    // if does not exist/wrong path, then make sure values empty.
    VCLInfo->VCLStatus.ucEncryptionEnabled = 0x0f;
    strncpy((char*) (VCLInfo->VCLStatus.ucVersionString), (char*) "N/A", 3);
    VCLInfo->VCLDiagData[0] = 0;

    return FALSE;
  }

  /* Open the VCL message queues */
  outQid = msgget((key_t) QUE_VCL, 0666);
  inQid = msgget((key_t) QUE_VCLRSP, 0666);

  /* Get the status */
  requestMsg.clientPid = getpid();
  requestMsg.message_type = MSG_STATUS_REQUEST;
  {
    int iRet = 0;
    int retries = 5;
    int expected_len = sizeof(HTDesMsg) - sizeof(long);

    pthread_mutex_lock(&vcl_mutex);
    SafeMsgSndWrapper(outQid, &requestMsg, sizeof(HTDesMsg) - sizeof(long), 0);
    do
    {
      iRet = SafeMsgRcvWrapper(inQid, &responseMsg,
                               sizeof(HTDesMsg) - sizeof(long),
                               requestMsg.clientPid, IPC_NOWAIT, FALSE);
      if (iRet >= expected_len)
        break;
      sleep(1);
    }
    while (retries--);

    if (iRet >= expected_len)
    {
      memcpy(&(VCLInfo->VCLStatus), &responseMsg.data.sHTdesStatus,
             sizeof(MSG_HTDES_STATUS));
      // save last values
      saveEncryptEnableState = VCLInfo->VCLStatus.ucEncryptionEnabled;
      strncpy((char*) (&saveVSPVersionStr),
              (char*) (VCLInfo->VCLStatus.ucVersionString),
              sizeof(saveVSPVersionStr));
    }
    else
    {
      // in case of unexpected response, return last saved value
      VCLInfo->VCLStatus.ucEncryptionEnabled = saveEncryptEnableState;
      strncpy((char*) (VCLInfo->VCLStatus.ucVersionString),
              (char*) (&saveVSPVersionStr),
              sizeof(VCLInfo->VCLStatus.ucVersionString));
      VCLInfo->VCLDiagData[0] = 0;
    }
    pthread_mutex_unlock(&vcl_mutex);

    if (iRet < expected_len)
      return FALSE;
  }

  if (TRUE == bDoDiags)
  {
    dbg_msg("%s: Read VCL Status - Version = \"%s\", getting diags\n",
            __FUNCTION__, VCLInfo->VCLStatus.ucVersionString);

    if (TRUE
        == IsVCLDiagSupported((const char*) VCLInfo->VCLStatus.ucVersionString))
    {
      int i;
      /* Read pages 0-3 of diag data */
      for (i = 0; i < 3; i++)
      {
        int iRet = 0;
        int retries = 5;
        int expected_len = sizeof(HTDesMsg) - sizeof(long);

        /* Clear the messages structures to query Diag data - page 1*/
        memset(&requestMsg, 0, sizeof(HTDesMsg));
        memset(&responseMsg, 0, sizeof(HTDesMsg));
        requestMsg.clientPid = getpid();
        requestMsg.message_type = MSG_DIAG_QUERY;
        requestMsg.data.sDiagInfo.ucPageNo = i;
#define RPT_FULL    0x01
#define RPT_CONCISE 0x02
#define RPT_XML     0x04
#define RPT_ALL     0xff
        requestMsg.data.sDiagInfo.ucFmt = RPT_FULL;

        pthread_mutex_lock(&vcl_mutex);
        SafeMsgSndWrapper(outQid, &requestMsg, sizeof(HTDesMsg) - sizeof(long),
                          0);
        do
        {
          iRet = SafeMsgRcvWrapper(inQid, &responseMsg,
                                   sizeof(HTDesMsg) - sizeof(long),
                                   requestMsg.clientPid, IPC_NOWAIT, FALSE);
          if (iRet >= expected_len)
            break;
          sleep(1);
        }
        while (retries--);

        if (iRet >= expected_len)
        {
          if (strlen(VCLInfo->VCLDiagData) == 0)
            sprintf(VCLInfo->VCLDiagData, "%s",
                    responseMsg.data.sDiagInfo.szData);
          else
            strcat(VCLInfo->VCLDiagData, responseMsg.data.sDiagInfo.szData);
        }
        pthread_mutex_unlock(&vcl_mutex);
      }
    }
    else
    {
      VCLInfo->VCLDiagData[0] = 0;
      DebugMsg(
          VHQ_LOGGING_LEVEL_DEBUG,
          "%s: VCLDiags not available with this version- Version = \"%s\"\n",
          __FUNCTION__, VCLInfo->VCLStatus.ucVersionString);
    }
  }
  else
  {
    VCLInfo->VCLDiagData[0] = 0;
  }

  return TRUE;
}

#define TWENTY_FOUR_HOURS (60 * 60 * 24)
static time_t last_battery_check_time = 0;
static time_t last_ts_cal_log_time = 0;

bool DailyBatteryCheckReqd(void)
{
  bool ret_val = FALSE;
  time_t cur_time = linux_time(NULL);

  if ((cur_time - last_battery_check_time) > TWENTY_FOUR_HOURS)
  {
    dbg_msg(
        "%s: %d seconds (24 hours = %d seconds) since last battery check - time to check again\n",
        __FUNCTION__, (cur_time - last_battery_check_time), TWENTY_FOUR_HOURS);
    last_battery_check_time = cur_time;
    ret_val = TRUE;
  }

  return ret_val;
}


bool DailyTSCalLogReqd(void)
{
  bool ret_val = FALSE;
  time_t cur_time = linux_time(NULL);

  if ((cur_time - last_ts_cal_log_time) > TWENTY_FOUR_HOURS)
  {
    dbg_msg(
        "%s: %d seconds (24 hours = %d seconds) since last battery check - time to check again\n",
        __FUNCTION__, (cur_time - last_ts_cal_log_time), TWENTY_FOUR_HOURS);
    last_ts_cal_log_time = cur_time;
    ret_val = TRUE;
  }

  return ret_val;
}


static void LogTsCalibrationValues()
{
  void *ts_lib = dlopen("/usr/local/lib/libcaptouch.so.1",
  RTLD_LAZY | RTLD_GLOBAL);
  if (!ts_lib)
  {
    log_err("%s: Can't find libcaptouch.so - returning\n", __FUNCTION__);
    return;
  }
  else
  {
    char *dlsym_error;
    int (*K2_Log_Data)(const char *fname, const char *mode, const char *caller,
                       int select_mask);

    dlerror(); /* Clear any existing error */
    *(void**) (&K2_Log_Data) = dlsym(ts_lib, "K2_Log_Data");

    dlsym_error = dlerror();
    if (dlsym_error != NULL)
    {
      log_err(
          "%s: Error (%s) getting K2_Log_Data in libcaptouch.so - returning\n",
          __FUNCTION__, dlsym_error);
      return;
    }
    else
    {
      if (K2_Log_Data)
      {
        int log_ret;

        dbg_msg(
            "%s: Found K2_Log_Data in libcaptouch.so - Logging touchscreen cal values\n",
            __FUNCTION__);
        log_ret = (*K2_Log_Data)("/mnt/flash/logs/share/tchcallog", "a+", "VHQ",
                                 0xffffffff);
        if (log_ret < 0)
        {
          dbg_err("%s: Error %s (%d) logging touchscreen cal values\n",
                  __FUNCTION__, strerror(errno), errno);
        }
        else
        {
          dbg_msg(
              "%s: Logged TS Calibration values successfully - new log size is %d bytes\n",
              __FUNCTION__, log_ret);
          last_ts_cal_log_time = linux_time(NULL);
        }
      }
      else
      {
        dbg_err(
            "%s: Can't find K2_Log_Data in libcaptouch.so - returning without logging data\n",
            __FUNCTION__);
        return;
      }
    }

    dlclose(ts_lib);
  }
}

event_mask_t CheckForEvents(event_mask_t event_mask,
                            device_event_content_t *device_event_content)
{
  event_mask_t ret_val = 0;
  static time_t last_processing = 0;

  /* ADKTMS-2726: process status only each 5 minutes (300sec) */
  if ((last_processing + 300) < linux_time(NULL))
  {
    static bool ram_event_set = FALSE;
    static bool flash_event_set = FALSE;
    static bool battery_event_set = FALSE;
    static bool ts_cal_values_logged_this_mw = FALSE;
    static unsigned char saved_vclEncryptionEnabled = 0;
    vcl_info_t vclInfo;
    bool bLogTSCalValues = FALSE;

    last_processing = linux_time(NULL);

    /* ADKTMS-91-EMS-67 - VSP Encryption Status Change Alert - start */
    if (event_mask & EVENT_VSP_STATUS_CHANGE)
    {
        if (GetVCLInfo(&vclInfo, FALSE))
        {
          if (vclInfo.VCLStatus.ucEncryptionEnabled
              != saved_vclEncryptionEnabled)
          {
            DebugMsg(
                VHQ_LOGGING_LEVEL_STANDARD,
                "%s: Detected Encryption Status Change - current:%d; previous:%d\n",
                __FUNCTION__, vclInfo.VCLStatus.ucEncryptionEnabled,
                saved_vclEncryptionEnabled);
            log_alert(
                "%s: Detected Encryption Status Change - current:%d; previous:%d\n",
                __FUNCTION__, vclInfo.VCLStatus.ucEncryptionEnabled,
                saved_vclEncryptionEnabled);
            ret_val |= EVENT_VSP_STATUS_CHANGE;
          }
          saved_vclEncryptionEnabled = vclInfo.VCLStatus.ucEncryptionEnabled;
        }
    }
    /* ADKTMS-91-EMS-67 - VSP Encryption Status Change Alert - end */

    if (event_mask & EVENT_RAM_MEM_LOW)
    {
      int RAM_tot, RAM_free;

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Checking for RAM free event\n", __FUNCTION__);
      if (GetRAMData(&RAM_tot, &RAM_free))
      {
        uint32 free_ram_thresh;

        if (VHQGetParameterUint32(PARAM_FREE_RAM_THRESHOLD, &free_ram_thresh,
                                  DEFAULT_BASE))
        {
          int percent_RAM_free = (RAM_free * 100) / RAM_tot;
          // DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Free RAM = %d (%d%%), threshold = %d\n", __FUNCTION__, RAM_free, percent_RAM_free, free_ram_thresh);
          if (((free_ram_thresh >= 100)
              && ((uint32) RAM_free <= free_ram_thresh))
              || ((free_ram_thresh < 100)
                  && ((uint32) percent_RAM_free <= free_ram_thresh)))
          {
            if (!ram_event_set)
            {
              /* Only set the event flag once */
              ram_event_set = TRUE;
              log_alert("%s: detected Free RAM event - setting event flag\n",
                        __FUNCTION__);
              if (device_event_content)
              {
                device_event_content->event_mask |= EVENT_RAM_MEM_LOW;
                device_event_content->device_event_data.alert_event.ram_data
                    .RAM_free = RAM_free;
                device_event_content->device_event_data.alert_event.ram_data
                    .RAM_tot = RAM_tot;
              }
              ret_val |= EVENT_RAM_MEM_LOW;
            }
          }
          else
            ram_event_set = FALSE;
        }
        else
          log_err("%s ERROR: Could not read Free RAM threshold from config\n",
                  __FUNCTION__);
      }
    }

    if (event_mask & EVENT_FLASH_MEM_LOW)
    {
      struct flashInformation flash_info;

      if (!svcInfoFlash(&flash_info))
      {
        uint32 free_flash_thresh;

        if (VHQGetParameterUint32(PARAM_FREE_FLASH_THRESHOLD,
                                  &free_flash_thresh,
                                  DEFAULT_BASE))
        {
          int percent_free_flash = 100 - flash_info.percentUsed;
          if (((free_flash_thresh >= 100)
              && ((uint32) flash_info.free <= free_flash_thresh))
              || ((free_flash_thresh < 100)
                  && ((uint32) percent_free_flash <= free_flash_thresh)))
          {
            if (!flash_event_set)
            {
              /* Only set the event flag once */
              flash_event_set = TRUE;
              log_dbg("%s: detected Free FLASH event - setting event flag\n",
                      __FUNCTION__);
              if (device_event_content)
              {
                device_event_content->event_mask |= EVENT_FLASH_MEM_LOW;
                device_event_content->device_event_data.alert_event.flash_data
                    .flash_free = flash_info.free;
                device_event_content->device_event_data.alert_event.flash_data
                    .flash_total = flash_info.total;
              }
              ret_val |= EVENT_FLASH_MEM_LOW;
            }
          }
          else
          {
            if (flash_event_set)
            {
              log_dbg("%s: Clearing FLASH event set flag\n", __FUNCTION__);
              flash_event_set = FALSE;
            }
          }
        }
        else
          log_err("%s ERROR: Could not read Free FLASH threshold from config\n",
                  __FUNCTION__);
      }
    }

    if (event_mask & EVENT_BATTERY_LOW)
    {
      int BatteryLevel;

      if (DailyBatteryCheckReqd())
      {
        dbg_notice("%s: Checking for Low Battery event\n", __FUNCTION__);
        if (GetBatteryStatus(&BatteryLevel))
        {
          uint32 low_bat_thresh;

          if (VHQGetParameterUint32(PARAM_LOW_BATTERY_THRESHOLD,
                                    &low_bat_thresh, DEFAULT_BASE))
          {
            dbg_msg("%s: Battery Level = %d, threshold = %d\n", __FUNCTION__,
                    BatteryLevel, low_bat_thresh);
            if ((uint32) BatteryLevel <= low_bat_thresh)
            {
              if (!battery_event_set)
              {
                /* Only set the event flag once */
                battery_event_set = TRUE;
                log_dbg("%s: detected Low Battery event - setting event flag\n",
                        __FUNCTION__);
                if (device_event_content)
                {
                  device_event_content->event_mask |= EVENT_BATTERY_LOW;
                  device_event_content->device_event_data.alert_event
                      .battery_data.battery_present = TRUE;
                  device_event_content->device_event_data.alert_event
                      .battery_data.battery_level = BatteryLevel;
                }
                ret_val |= EVENT_BATTERY_LOW;
              }
            }
            else
              battery_event_set = FALSE;
          }
          else
            log_err(
                "%s ERROR: Could not read Low Battery threshold from config\n",
                __FUNCTION__);
        }
        else
        {
          if (!battery_event_set && device_event_content)
          {
            device_event_content->event_mask |= EVENT_BATTERY_LOW;
            device_event_content->device_event_data.alert_event.battery_data
                .battery_present = FALSE;
            device_event_content->device_event_data.alert_event.battery_data
                .battery_level = 0;

            battery_event_set = TRUE;
          }
          ret_val |= EVENT_BATTERY_LOW;
        }
      }
    }

    VHQGetParameterBool(PARAM_ENABLE_TS_CALIBRATION_LOGGING, &bLogTSCalValues);
    if (bLogTSCalValues)
    {
      bool all_day_MW = FALSE;
      time_t cur_time = linux_time(NULL);

      if (ts_cal_values_logged_this_mw == FALSE)
      {
        if (IsInMaintenanceWindow(cur_time, &all_day_MW))
        {
          dbg_msg(
              "%s: We are in the MW for the first time today - logging calibration values\n",
              __FUNCTION__);
          LogTsCalibrationValues();
          ts_cal_values_logged_this_mw = TRUE;
        }
      }
      else
      {
        if (!IsInMaintenanceWindow(cur_time, &all_day_MW))
        {
          dbg_msg(
              "%s: We are outside of the MW again - clearing ts_cal_values_logged_this_mw\n",
              __FUNCTION__);
          ts_cal_values_logged_this_mw = FALSE;
        }
        else if (all_day_MW)
        {
          if (DailyTSCalLogReqd())
          {
            dbg_msg(
                "%s: MW is all day, but it has been 24 hours since last logging - logging calibration values\n",
                __FUNCTION__);
            LogTsCalibrationValues();
          }
        }
      }
    }
  }
  return ret_val;
}

int GenerateInvalidCommID(void)
{
  int *rand_32_bit_p;
  int ret_val;
  unsigned char random8[8];

  GenerateRandom(random8);

  rand_32_bit_p = (int*) (&random8[0]);
  ret_val = *rand_32_bit_p;
  dbg_msg("%s: Random int = %d\n", __FUNCTION__, ret_val);
  ret_val = ret_val & (0x7fffffff);
  dbg_msg("%s: Random int with sign bit cleared = %d\n", __FUNCTION__, ret_val);
  ret_val = -ret_val;
  dbg_msg("%s: Random Invalid Comm ID = %d\n", __FUNCTION__, ret_val);
  return ret_val;
}


void WriteResponseToTempFile(char *file_name, VHQResponseSendMsg *responseMsg)
{
  int respFile = -1;
  int bytes_written;

  respFile = open(file_name, O_RDWR | O_CREAT | O_TRUNC,
  S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
  if (respFile != -1)
  {
    bytes_written = write(respFile, (char*) responseMsg,
                          sizeof(VHQResponseSendMsg));
    if (bytes_written != sizeof(VHQResponseSendMsg))
    {
      log_err("%s ERROR: wrote %d bytes (should have been %d bytes)\n",
              __FUNCTION__, bytes_written, sizeof(VHQResponseSendMsg));
    }
    close(respFile);
    dbg_msg("%s: wrote %d bytes to temp_file %s\n", __FUNCTION__, bytes_written,
            file_name);

    /* Make sure the file gets flushed to flash */
    sync();
    sync();
    sync();
  }
  else
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR,
             "%s ERROR: Could not open response file\n", __FUNCTION__);
}

#define PROC_DIRECTORY "/proc/"
#define PROC_CMD_LINE  "/cmdline"
#define CASE_SENSITIVE    1
#define CASE_INSENSITIVE  0
#define EXACT_MATCH       1
#define INEXACT_MATCH     0

int IsNumeric(const char *ccharptr_CharacterList)
{
  for (; *ccharptr_CharacterList; ccharptr_CharacterList++)
    if (*ccharptr_CharacterList < '0' || *ccharptr_CharacterList > '9')
      return 0;  // false
  return 1;  // true
}

int strcmp_Wrapper(const char *s1, const char *s2, int intCaseSensitive)
{
  if (intCaseSensitive)
    return !strcmp(s1, s2);
  else
    return !strcasecmp(s1, s2);
}

int strstr_Wrapper(const char *haystack, const char *needle,
                   int intCaseSensitive)
{
  if (intCaseSensitive)
    return (int) strstr(haystack, needle);
  else
    return (int) strcasestr(haystack, needle);
}


pid_t GetPIDbyName(const char *cchrptr_ProcessName, int intCaseSensitiveness,
                   int intExactMatch, int *piCount)
{
  char chrarry_Buffer[300];
  pid_t pid_ProcessIdentifier = (pid_t) -1;
  char *chrptr_StringToCompare = NULL;
  struct dirent *de_DirEntity = NULL;
  DIR *dir_proc = NULL;
  const int filename_limit = sizeof(chrarry_Buffer)
      - strlen(PROC_DIRECTORY PROC_CMD_LINE);

  int (*CompareFunction)(const char*, const char*, int);

  if (!piCount)
    return (pid_t) -3;

  if (intExactMatch)
    CompareFunction = &strcmp_Wrapper;
  else
    CompareFunction = &strstr_Wrapper;

  *piCount = 0;

  dir_proc = opendir(PROC_DIRECTORY);
  if (dir_proc == NULL)
  {
    log_err("Couldn't open the " PROC_DIRECTORY " directory");
    return (pid_t) -2;
  }

  /* Loop while not NULL */
  while ((de_DirEntity = readdir(dir_proc)))
  {
    if (de_DirEntity->d_name && IsNumeric(de_DirEntity->d_name)
        && (int) strlen(de_DirEntity->d_name) < filename_limit)
    {
      strcpy(chrarry_Buffer, PROC_DIRECTORY);
      strcat(chrarry_Buffer, de_DirEntity->d_name);
      strcat(chrarry_Buffer, PROC_CMD_LINE);

      /* Open the file for reading text */
      FILE *fd_CmdLineFile = fopen(chrarry_Buffer, "rt");

      if (fd_CmdLineFile)
      {
        //printf("%s: Read file: %s\n", __FUNCTION__, chrarry_Buffer);
        memset(chrarry_Buffer, 0, sizeof(chrarry_Buffer));

        if (fread(chrarry_Buffer, 1, sizeof(chrarry_Buffer) - 1, fd_CmdLineFile)
            > 0)
        {
          /* Scan process command line to find requested process name */
          if (strrchr(chrarry_Buffer, '/'))
            chrptr_StringToCompare = strrchr(chrarry_Buffer, '/') + 1;
          else
            chrptr_StringToCompare = chrarry_Buffer;

          //printf("%s: Compare string \"%s\" vs \"%s\"\n", __FUNCTION__, chrptr_StringToCompare, cchrptr_ProcessName);
          if (CompareFunction(chrptr_StringToCompare, cchrptr_ProcessName,
                              intCaseSensitiveness))
          {
            //printf("%s: Active process %s found.\n", __FUNCTION__, cchrptr_ProcessName);
            pid_ProcessIdentifier = (pid_t) atoi(de_DirEntity->d_name);
            *piCount += 1;
          }
        }

        fclose(fd_CmdLineFile);
      }
    }
  }

  closedir(dir_proc);
  return pid_ProcessIdentifier;
}

void CheckForInstance(char *AppName)
{
  int iAppCount;
  pid_t pid = GetPIDbyName(AppName, CASE_INSENSITIVE, INEXACT_MATCH,
                           &iAppCount);

  //printf("%s: Found %d instances of %s\n", __FUNCTION__, iAppCount, AppName);
  if (iAppCount > 1)
  {
    printf(
        "Too Many instances of %s (%d now running).  Exiting newest instance (pid = %d).\r\n",
        AppName, iAppCount, pid);
    exit(-1);
  }
}


uint32 GetMessageID(int comm_id, uint32 rx_msg_id, const char *operation_id,
                    bool comm_id_closed)
{
#ifdef Mx2
  int op_id_val;

  if (operation_id)
    op_id_val = atoi(operation_id);
  else
    op_id_val = 0;

  /* REVISIT (Mitch 7-24-2012): We might need to actually send the message to root.
   We would only do it if this is not happening on the main vhq_sys thread. */
  return GetCurrentMessageID(comm_id, rx_msg_id, op_id_val, comm_id_closed);
#else
    int outQid, inQid;
    VHQRootRequestMsg msg_id_request_msg;
    VHQRootResponseMsg msg_id_response_msg;

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
    inQid=msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int op_id_val, exp_len;

        memset(&msg_id_request_msg, 0, sizeof(VHQRootRequestMsg));
        memset(&msg_id_response_msg, 0, sizeof(VHQRootResponseMsg));

        msg_id_request_msg.clientPid = getpid();
        msg_id_request_msg.message_type = VHQ_REQUEST_MESSAGE_ID;

        msg_id_request_msg.data.sMdgIdReqData.comm_id = comm_id;
        msg_id_request_msg.data.sMdgIdReqData.rx_msg_id = rx_msg_id;

        if (operation_id)
            op_id_val = atoi(operation_id);
        else
            op_id_val = 0;
        msg_id_request_msg.data.sMdgIdReqData.operation_id = op_id_val;
        msg_id_request_msg.data.sMdgIdReqData.comm_id_closed = comm_id_closed;

        dbg_msg( "%s: Sending VHQ_REQUEST_MESSAGE_ID message\n", __FUNCTION__);
        SafeMsgSndWrapper(outQid, &msg_id_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &msg_id_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), msg_id_request_msg.clientPid, 0, FALSE) >= exp_len)
            return msg_id_response_msg.data.sMsgIdResp.msg_id;
        else
            return 0;
    }
    else
    {
        log_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        return 0;
    }
#endif
}

static pthread_mutex_t rtc_clock_mutex = PTHREAD_MUTEX_INITIALIZER;

time_t GetRTC(void)
{
  int retries = 10;
  time_t ret_val = 0;

  while ((ret_val == 0) && retries)
  {
#ifdef Mx2
    struct timeval rtc_time;
    int rtc_op_result = 0;
    int rtc_rt_result = 0;

    memset(&rtc_time, 0, sizeof(struct timeval));

    pthread_mutex_lock(&rtc_clock_mutex);
    rtc_op_result = rtc_open();
    if (rtc_op_result >= 0)
    {
      rtc_rt_result = rtc_get_RTC_tm(&rtc_time);
      rtc_close();
    }
    pthread_mutex_unlock(&rtc_clock_mutex);

    if (rtc_op_result < 0)
      log_err("%s: rtc_open() FAILED (returned %d) - use rtc_time set to 0\n",
              __FUNCTION__, rtc_op_result);

    if (rtc_rt_result != 0)
    {
      log_err(
          "%s: rtc_get_RTC_tm() FAILED (returned %d) -  use rtc_time set to 0\n",
          __FUNCTION__, rtc_rt_result);
      memset(&rtc_time, 0, sizeof(struct timeval));
    }

    ret_val = (time_t) rtc_time.tv_sec;
#else
        int outQid, inQid;
        VHQRootRequestMsg rtc_request_msg;
        VHQRootResponseMsg rtc_response_msg;

        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
        // open queues (server will create)
        outQid = msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
        inQid = msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);

        if ((-1 != inQid) && (-1 != outQid))
        {
            int exp_len;

            memset(&rtc_request_msg, 0, sizeof(VHQRootRequestMsg));
            memset(&rtc_response_msg, 0, sizeof(VHQRootResponseMsg));
            //memset(&rtc_time, 0, sizeof(struct timeval));

            rtc_request_msg.clientPid = getpid();
            rtc_request_msg.message_type = VHQ_ROOT_REQUEST_RTC_VAL;

            //rtc_request_msg.data.sRTCtime.rtc_time = &rtc_time;

            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Sending VHQ_REQUEST_MESSAGE_ID message\n", __FUNCTION__);
            SafeMsgSndWrapper(outQid, &rtc_request_msg, sizeof(VHQRootRequestMsg)-sizeof(long), 0);

            exp_len = sizeof(VHQRootResponseMsg)-sizeof(long);
            if (SafeMsgRcvWrapper(inQid, &rtc_response_msg, sizeof(VHQRootResponseMsg)-sizeof(long), rtc_request_msg.clientPid, 0, FALSE) >= exp_len)
            {
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: rtc_response_msg - tv_sec = %d, tv_usec = %d\n", __FUNCTION__,
                //rtc_response_msg.data.sRTCtime.rtc_time.tv_sec, rtc_response_msg.data.sRTCtime.rtc_time.tv_usec);
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: rtc_time (local version) - tv_sec = %d, tv_usec = %d\n", __FUNCTION__,
                //rtc_time.tv_sec, rtc_time.tv_usec);
                ret_val = (time_t)rtc_response_msg.data.sRTCtime.rtc_time.tv_sec;
            }
            else
                ret_val = 0;
        }
        else
        {
            log_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
            ret_val = 0;
        }
#endif
    if (ret_val == 0)
    {
      dbg_msg("%s WARNING: could not read RTC, retrying in 2 seconds\n",
              __FUNCTION__);
      sleep(2);
    }
    retries--;
  }

  if (ret_val == 0)
  {
    log_err("%s ERROR: could not read RTC after 10 retries - returning 0\n",
            __FUNCTION__);
  }
  return ret_val;
}

int RebootDevice(event_set_id_t event_set_id, event_id_t event_id,
                 bool app_approval_required)
{
#if 0
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    #warning "RebootDevice is replaced with an exit() call for DEBUGGING purposes - remove for RELEASES"
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: exiting instead of REBOOTING for DEBUGGING purposes - restart agent in verbose mode to continue debugging\n", __FUNCTION__);
    exit(0);
#endif

#ifdef Mx2
  /* Notify apps if they are registered */
  if (EventNotification(TMS_EVENT_NOTIFY_REBOOT_DEVICE, NULL, 0, VHQ_SUCCESS,
                        event_set_id, event_id, app_approval_required)
      == VHQ_SUCCESS)
  {
    /* MX2 will not have a root process so call the function directly */
    SetApprovalFlag(event_set_id, event_id, REBOOT_PRE_APPROVED);
    CreateVHQRebootFile();
#ifdef _VOS2
    return SysPmReboot_Wrapper();
#else
    return utility_reboot();
#endif
  }
  else
  {
    log_err(
        "%s ERROR: Reboot device approval FAILED - returning without rebooting\n",
        __FUNCTION__);
    return -1;
  }
#else
    int outQid;
    VHQRootRequestMsg reboot_request_msg;

    /* Notify apps if they are registered */
    if (EventNotification(TMS_EVENT_NOTIFY_REBOOT_DEVICE, NULL, 0, VHQ_SUCCESS, event_set_id, event_id, app_approval_required) != VHQ_SUCCESS)
    {
        log_err( "%s ERROR: Reboot device approval FAILED - returning without rebooting\n", __FUNCTION__);
        return -1;
    }

    SetApprovalFlag(event_set_id, event_id, REBOOT_PRE_APPROVED);

    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);

    if (-1 != outQid)
    {
        memset(&reboot_request_msg, 0, sizeof(VHQRootRequestMsg));

        reboot_request_msg.clientPid = getpid();
        reboot_request_msg.message_type = VHQ_ROOT_REQUEST_REBOOT;

        SafeMsgSndWrapper(outQid, &reboot_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        /* If we don't reboot after 10 seconds there was an error */
        sleep(10);
        return -1;
    }
    else
    {
        log_err( "%s ERROR: outQid = %x\r\n", __FUNCTION__, outQid);
        return -1;
    }
#endif
}


vhq_result_t RestartApp(event_set_id_t event_set_id, event_id_t event_id,
                        bool app_approval_required)
{
#ifdef Mx2
  int r;

  /* Notify any registered apps */
  if (EventNotification(TMS_EVENT_NOTIFY_RESTART_APPS, NULL, 0, VHQ_SUCCESS,
                        event_set_id, event_id, app_approval_required)
      != VHQ_SUCCESS)
  {
    log_err(
        "%s ERROR: Restart Apps approval FAILED - returning without restarting apps\n",
        __FUNCTION__);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_ERROR;
  }

  SetApprovalFlag(event_set_id, event_id, RESTART_APPS_PRE_APPROVED);

  /* We'll unregister user applications ourself because they will be killed */
  UnRegisterUserApps();
  // utility_runApplication(NULL) is just a wrapper to Secins_start_user_apps() so calling directly
  r = Secins_start_user_apps();
#ifdef _VOS2
  if (0 == r)
  {
#else
    if (0 == r || 175 == r) {
    // ignore SI 175 error on VOS: "Failed to Read API msg".  This is false error from SI.
#endif
    dbg_msg("%s: RESTART APP SUCCESS! (%d)\n", __FUNCTION__, r);
    return VHQ_SUCCESS;
  }
  else
  {
    log_err("%s: RESTART APP FAILED! error: %d\n", __FUNCTION__, r);
    return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_ERROR;
  }
#else
    char go_value[256], obuf[512];
    int rslt;
    struct stat sinfo;

    /* Notify any registered apps */
    if (EventNotification(TMS_EVENT_NOTIFY_RESTART_APPS, NULL, 0, VHQ_SUCCESS, event_set_id, event_id, app_approval_required) != VHQ_SUCCESS)
    {
        log_err( "%s ERROR: Restart Apps approval FAILED - returning without restarting apps\n", __FUNCTION__);
        return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_ERROR;
    }

    SetApprovalFlag(event_set_id, event_id, RESTART_APPS_PRE_APPROVED);

    strcpy(go_value, "usr1");
    rslt=getEnvFile("", "*GO", go_value, sizeof(go_value));
    if (rslt>0)
    {
        // Help WDE by allowing *GO to be set to a file outside of /home/usr1.
        strcpy(obuf, "/home/usr1/");
        if (*go_value == '/')
        {
            rslt=stat(go_value,&sinfo);
            if (!rslt)
            {
                *obuf=0;
            }
        }
        strcat(obuf, go_value);
        if ( !stat(obuf, &sinfo) ) {

            dbg_msg( "%s: Starting Application...File: %s\n", __FUNCTION__, obuf);
            svcRunApp(obuf, 0);

            /* USR1 apps will get killed so lets wait for that to happen to us */
            while (1) {}

        }
        return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_ERROR;
    }
    return VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESTART_APP_NO_APP_ERROR;
#endif
}


vhq_result_t ProcessAction(term_act_content_t *action_content, int comm_id,
                           int message_id, int op_set_id, char *operation_id,
                           srv_msg_type_t srv_msg_type,
                           srv_op_type_t srv_op_type,
                           event_set_id_t event_set_id, event_id_t event_id,
                           bool continuation_required,
                           bool app_approval_required)
{
  VHQResponseSendMsg response_msg;
  vhq_result_t result = VHQ_SUCCESS;

  switch (action_content->action)
  {
    case TERM_ACTION_NONE:
      log_dbg("%s: No terminal action specified - returning\n", __FUNCTION__);
      break;
    case TERM_ACTION_REBOOT:
    {
      log_dbg("%s: Rebooting device (OpSetID = %d, Op ID = %s)\n", __FUNCTION__,
              op_set_id, operation_id);
      SetCompleteFlag(op_set_id, operation_id, continuation_required, FALSE);
      RebootDevice(event_set_id, event_id, app_approval_required);

      /* Give the device some time to reboot */
      sleep(60);
      /* If we get here then reboot failed */
      log_err(
          "%s ERROR: RebootDevice() returned - returning VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_REBOOT_ERROR\n",
          __FUNCTION__);
      result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_REBOOT_ERROR;
      break;
    }
    case TERM_ACTION_RESET_POS:
      result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_RESET_POS_ERROR;
      break;

    case TERM_ACTION_RESTART_APP:
#ifdef Mx2
      result = RestartApp(event_set_id, event_id, app_approval_required);
      (void) (response_msg);
      (void) (comm_id);
      (void) (message_id);
      (void) (srv_msg_type);
      (void) (srv_op_type);
#else
            memset(&response_msg, 0, sizeof(VHQResponseSendMsg));

            response_msg.clientPid = getpid();
            response_msg.result = VHQ_SUCCESS;
            response_msg.close_comm_id = TRUE;
            response_msg.responseExpected = TRUE;

            response_msg.operation_type = action_content->op_type;
            response_msg.comm_id = comm_id;
            response_msg.message_id = message_id;
            response_msg.operation_set_id = op_set_id;
            strcpy(response_msg.operation_id, operation_id);
            response_msg.srv_msg_type = srv_msg_type;
            response_msg.srv_op_type = srv_op_type;

            WriteResponseToTempFile(VHQ_RESPONSE_MSG_TEMP_FILE, &response_msg);

            dbg_msg( "%s: VHQ_SUCCESS response written to %s before reboot action\n", __FUNCTION__, VHQ_RESPONSE_MSG_TEMP_FILE);
            result = RestartApp(event_set_id, event_id, app_approval_required);

            /* If we get here then reboot failed */
            log_err( "%s ERROR: RestartApp() returned %d - removing %s and returning %d\n",
                __FUNCTION__, result, VHQ_RESPONSE_MSG_TEMP_FILE, result);
            remove(VHQ_RESPONSE_MSG_TEMP_FILE);
#endif
      /* Wait for apps to restart after restart app calls */
      RequestAppRegistrationDelay();
      break;

    case TERM_ACTION_SET_CLOCK:
    {
      struct tm timeinfo;
      struct tm timeinfo_utc;
      time_t run_time_delay;
      time_t set_time_with_offset;
      bool bUseTZfromServer;

      if (!action_content->action_receive_time)
      {
        log_err(
            "%s: SET_CLOCK was superseded by the same event. Skip processing.\n",
            __FUNCTION__);
        result =
            VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_SUPERSEDED;
        break;
      }

      if (EventNotification(TMS_EVENT_NOTIFY_CLOCK_UPDATE, NULL, 0, VHQ_SUCCESS,
                            event_set_id, event_id, TRUE) != VHQ_SUCCESS)
      {
        log_err(
            "%s ERROR: Clock Update approval FAILED - returning without changing clock\n",
            __FUNCTION__);
        return VHQ_API_APP_APPROVAL_ERROR;
      }

      dbg_msg("%s: set_clock_time = %ld, set_clock_utc_time = %ld, tz = %s\n",
              __FUNCTION__, action_content->set_clock_time,
              action_content->set_clock_utc_time, action_content->tz);

      run_time_delay = (linux_time(NULL) - action_content->action_receive_time);
      if (action_content->set_clock_utc_time)
      {
        set_time_with_offset = action_content->set_clock_utc_time
            + run_time_delay;
        dbg_msg(
            "%s: %ld seconds between receiving SET_CLOCK and executing it - set_clock UTC time %ld updated to %ld\n",
            __FUNCTION__, run_time_delay, action_content->set_clock_utc_time,
            set_time_with_offset);
      }
      else
      {
        set_time_with_offset = action_content->set_clock_time + run_time_delay;
        dbg_msg(
            "%s: %ld seconds between receiving SET_CLOCK and executing it - set_clock time %ld updated to %ld\n",
            __FUNCTION__, run_time_delay, action_content->set_clock_time,
            set_time_with_offset);
      }

      /* Process timezone form server */
      VHQGetParameterBool(PARAM_USE_TIMEZONE_FROM_SERVER, &bUseTZfromServer);
      switch (bUseTZfromServer)
      {
        case TRUE:
        {
          char *p_tz = NULL;
          if (strlen(action_content->tz))
            p_tz = action_content->tz;
          else
            p_tz = "UTC";

          linux_localtime(&set_time_with_offset, &timeinfo);
          result = VHQWriteZone(p_tz, timeinfo.tm_year + 1900);
          if (result == VHQ_SUCCESS)
          {
            tzset();
            syslog(LOG_INFO, "%s: Set timezone to %s successfully\n",
                   __FUNCTION__, p_tz);
            log_dbg("%s: Set timezone to %s successfully\n", __FUNCTION__,
                    p_tz);
            break;
          }
          else
          {
            syslog(LOG_INFO, "%s ERROR: Can't set timezone to %s\n",
                   __FUNCTION__, p_tz);
            log_err("%s ERROR: Can't set timezone to %s\n", __FUNCTION__, p_tz);
          }
        }
        case FALSE:
          /* Check do we have UTC timezone. In case if no UTC is used on the device and action_content->set_clock_utc_time not available - device behavior is unpredictable. Print error
           * Process it in case if we fail above also */
        {
          time_t x = linux_time(NULL);
          time_t local, local_utc;
          struct tm local_time;
          struct tm local_time_utc;

          /* Calculate difference between local time and UTC*/
          linux_localtime(&x, &local_time);
          linux_gmtime(&x, &local_time_utc);
          local = convert_tm_to_time_t(&local_time);
          local_utc = convert_tm_to_time_t(&local_time_utc);

          if (local != local_utc)
          {
            /* Device with non UTC time zone */
            if (!action_content->set_clock_utc_time)
            {
              syslog(
                  LOG_WARNING,
                  "%s WARNING: Device may have incorrect time. Check device and server settings in case if system time is incorrect.\n",
                  __FUNCTION__);
              log_err(
                  "%s WARNING: Device may have incorrect time. Check device and server settings in case if system time is incorrect.\n",
                  __FUNCTION__);
            }
            else
              result = VHQ_SUCCESS; /* We don't care here about timezone local settings. We will apply UTC. Value already in set_time_with_offset */
          }
          else
          {
            /* Device with UTC time zone, could have no time zone support. Use set_clock_time */
            set_time_with_offset = action_content->set_clock_time
                + run_time_delay;
            dbg_warn(
                "%s: device has UTC time zone - use set_clock_time %ld updated to %ld by %ld seconds\n",
                __FUNCTION__, action_content->set_clock_time,
                set_time_with_offset, run_time_delay);
            result = VHQ_SUCCESS;
          }
        }
      }

      if (result == VHQ_SUCCESS
          && linux_gmtime(&set_time_with_offset, &timeinfo_utc))
      {
#ifdef Mx2
        int settime_ret_val;
        linux_localtime(&set_time_with_offset, &timeinfo);

        syslog(LOG_INFO,
               "%s: setting DATE/TIME \"%s\" by utility_settime(UTC=%s)\n",
               __FUNCTION__, tmtoa(&timeinfo), tmtoa(&timeinfo_utc));
        log_dbg("%s: setting DATE/TIME \"%s\" by utility_settime(UTC=%s)\n",
                __FUNCTION__, tmtoa(&timeinfo), tmtoa(&timeinfo_utc));

        timeinfo_utc.tm_year += 1900;
        timeinfo_utc.tm_mon += 1;
        settime_ret_val = utility_settime(
            (struct utilityDateTime*) &timeinfo_utc); /* It receives UTC time. Linux calculates offset letter, during reading */
        if (settime_ret_val == 0)
        {
          syslog(LOG_INFO, "%s: utility_settime() was successful\n",
                 __FUNCTION__);
          log_dbg("%s: utility_settime() was successful\n", __FUNCTION__);
          result = VHQ_SUCCESS;
        }
        else
        {
          syslog(LOG_ERR, "%s ERROR: utility_settime() FAILED with %d!!!!!!\n",
                 __FUNCTION__, settime_ret_val);
          log_err("%s ERROR: utility_settime() FAILED with %d!!!!!!\n",
                  __FUNCTION__, settime_ret_val);
          result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;
        }
        SetCompleteFlag(op_set_id, operation_id, continuation_required, FALSE);
#else
                char set_date_str[20];
                /* Format for setDateTime string is MMDDhhmmYYYY.ss

                Where:
                MM = Month
                DD = Day
                hh = Hour
                mm = Minute
                YYYY = Year
                ss = seconds
                */

#error "COMPILER STOPS HERE SINCE THIS PART IS NOT TESTED FOR RFS SYSTEM"

                timeinfo.tm_year += 1900;
                timeinfo.tm_mon += 1;
                memset(set_date_str, 0, sizeof(set_date_str));
                sprintf(set_date_str, "%02d%02d%02d%02d%04d.%02d",
                    timeinfo.tm_mon,
                    timeinfo.tm_mday,
                    timeinfo.tm_hour,
                    timeinfo.tm_min,
                    timeinfo.tm_year,
                    timeinfo.tm_sec);

                dbg_msg( "%s: Calling setDateTime(%s)\n", __FUNCTION__, set_date_str);
                if (setDateTime(set_date_str) == 0)
                {
                    setRTC();
                    result = VHQ_SUCCESS;
                }
                else
                {
                    result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;
                }
#endif
      }
      else
      {
        log_err("%s ERROR: linux_localtime() FAILED!!!!!!\n", __FUNCTION__);
        result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_SET_CLOCK_ERROR;
      }
      break;
    }
    case TERM_ACTION_TS_RECALIBRATION:
      log_dbg("%s: Recalibrating Touchscreen!!!\n", __FUNCTION__);
#ifdef Mx2
      void *ts_lib = dlopen("libsvc_sigcap.so", RTLD_LAZY | RTLD_GLOBAL);
      if (!ts_lib)
      {
        log_err("%s: Can't find svc_sigcap.so - returning TS_RECAL_ERROR\n",
                __FUNCTION__);
        result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_TS_RECAL_ERROR;
      }
      else
      {
        char *dlsym_error;
        int (*recalPtr)(void);

        dlerror(); /* Clear any existing error */
        *(void**) (&recalPtr) = dlsym(ts_lib, "sigcap_recompTouchPanel");

        dlsym_error = dlerror();
        if (dlsym_error != NULL)
        {
          log_err(
              "%s: Error (%s) getting sigcap_recompTouchPanel in svc_sigcap.so - returning TS_RECAL_ERROR\n",
              __FUNCTION__, dlsym_error);
          result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_TS_RECAL_ERROR;
        }
        else
        {
          if (recalPtr)
          {
            dbg_msg(
                "%s: Found sigcap_recompTouchPanel in svc_sigcap.so - recalibrating touchscreen\n",
                __FUNCTION__);
            (*recalPtr)();
            result = VHQ_SUCCESS;
          }
          else
          {
            log_err(
                "%s: Can't find sigcap_recompTouchPanel in svc_sigcap.so - returning TS_RECAL_ERROR\n",
                __FUNCTION__);
            result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_TS_RECAL_ERROR;
          }
        }

        dlclose(ts_lib);
      }
#else
            if (touchCompNSave() == 0)
                result = VHQ_SUCCESS;
            else
                result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_TS_RECAL_ERROR;
#endif
      break;

    default:
      result = VHQ_SERVER_MGMT_PLAN_OPERATION_TERM_ACTION_UNKNOWN_ERROR;
      break;
  }

  return result;
}


vhq_result_t ProcessDelFile(del_file_content_t *del_file_content,
                            char *additional_info, uint32 additional_info_size)
{
  vhq_result_t result = VHQ_SUCCESS;
  bool del_file_result;

  dbg_msg("%s: Calling AppDelFile(%s, %s)\n", __FUNCTION__,
          del_file_content->receiver, del_file_content->file_name);
  del_file_result = AppDelFile(del_file_content->receiver,
                               del_file_content->file_name, additional_info,
                               additional_info_size);

  log_dbg("%s: AppDelFile() returned %d\n", __FUNCTION__, del_file_result);
  if (del_file_result)
    result = VHQ_SUCCESS;
  else
    result = VHQ_SERVER_MGMT_PLAN_OPERATION_DEL_FILE_ERROR;

  return result;
}


int CopyFileAsRoot(const char *pszSrc, const char *pszDest)
{
#ifdef Mx2
  int ret_val;
  ret_val = CopyFile(pszSrc, pszDest);
  if (ret_val != 0)
  {
    dbg_err("%s ERROR: could not copy %s to %s\n", __FUNCTION__, pszSrc,
            pszDest);
  }
  else
  {
    dbg_msg("%s: Copied %s to %s\n", __FUNCTION__, pszSrc, pszDest);
  }
  return ret_val;
#else
    int ret_val = -1;
    int outQid, inQid;
    VHQRootRequestMsg copyfile_request_msg;
    VHQRootResponseMsg copyfile_response_msg;

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
    inQid=msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&copyfile_request_msg, 0, sizeof(VHQRootRequestMsg));
        memset(&copyfile_response_msg, 0, sizeof(VHQRootResponseMsg));
        //memset(&rtc_time, 0, sizeof(struct timeval));

        copyfile_request_msg.clientPid = getpid();
        copyfile_request_msg.message_type = VHQ_ROOT_REQUEST_COPY_FILE;

        if (strlen(pszSrc) >= sizeof(copyfile_request_msg.data.sCopyFiledata.src))
        {
            dbg_err( "%s ERROR: src filename %s is too long (%d) - returning -1\n", __FUNCTION__, pszSrc, strlen(pszSrc));
            return ret_val;
        }
        else
            strcpy(copyfile_request_msg.data.sCopyFiledata.src, pszSrc);

        if (strlen(pszDest) >= sizeof(copyfile_request_msg.data.sCopyFiledata.dest))
        {
            dbg_err( "%s ERROR: dest filename %s is too long (%d) - returning -1\n", __FUNCTION__, pszDest, strlen(pszDest));
            return ret_val;
        }
        else
            strcpy(copyfile_request_msg.data.sCopyFiledata.dest, pszDest);

        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Sending VHQ_REQUEST_MESSAGE_ID message\n", __FUNCTION__);
        SafeMsgSndWrapper(outQid, &copyfile_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &copyfile_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), copyfile_request_msg.clientPid, 0) >= exp_len)
        {
            dbg_msg( "%s: copyfile_response_msg - ret_val = %d\n", __FUNCTION__, copyfile_response_msg.data.sCopyFileResp.ret_val);
            ret_val = copyfile_response_msg.data.sCopyFileResp.ret_val;
        }
        else
            ret_val = -1;
    }
    else
    {
        dbg_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        ret_val = -1;
    }

    return ret_val;
#endif

}

void TarFiles(const char *filesPath, const char *outputFile)
{
  char obuf[2048];
  int i = 0;

  memset(obuf, 0, sizeof(obuf));

  sprintf(obuf, "tar -zcf %s -C %s .", outputFile, filesPath);
  remove(outputFile);

  log_dbg("%s: executing %s\n", __FUNCTION__, obuf);
  svcSystem(obuf);
}

#define OS_CONFIG_FILE_OUT_NAME         "/tmp/OSConfigFiles.tgz"


static bool copyOSConfigFiles(char *outName, int OutFileNameSize)
{
  char obuf[2048];

  memset(obuf, 0, sizeof(obuf));
  if ((uint32) OutFileNameSize > strlen(OS_CONFIG_FILE_OUT_NAME))
    strcpy(outName, OS_CONFIG_FILE_OUT_NAME);
  else
    memcpy(outName, OS_CONFIG_FILE_OUT_NAME, OutFileNameSize - 1);

#ifdef Mx2
  sprintf(
      obuf,
      "tar -zcvhf %s /mnt/flash/config/config.system /mnt/flash/config/config.network /mnt/flash/config/config.usr1 /mnt/flash/config/usrconfig/*",
      outName);
#else
    sprintf(obuf,"tar -zcvf %s /mnt/sram/config.*", outName);
#endif
  remove(outName);
  log_dbg("%s: executing %s\n", __FUNCTION__, obuf);
  svcSystem(obuf);
  log_dbg("%s: Log Files written to %s\n", __FUNCTION__, outName);
  sync();

  chmod(outName, 0666);

  return TRUE;
}

#define OS_LOG_FILE_OUT_NAME            "/tmp/OSLogs.tgz"


static bool copyOSLogs(char *outName, int OutFileNameSize)
{
#ifdef Mx2
  bool ret = TRUE;
  struct utilityDumpLogStatus logdump;
  int result = -1;

  remove(OS_LOG_FILE_OUT_NAME);
  logdump = utility_dumplogs(0);

  if (logdump.status == 0)
  {
    dbg_msg("%s: Dumplogs %s\n", __FUNCTION__, logdump.file_msg);
    result = MoveFile(logdump.file_msg, OS_LOG_FILE_OUT_NAME);
    if (result == 0)
    {
      strncpy(outName, OS_LOG_FILE_OUT_NAME, OutFileNameSize);
    }
    else
    {
      ret = FALSE;
      dbg_err("%s: OS Log error file: %s\n", __FUNCTION__, logdump.file_msg);
    }
  }
  else
  {
    ret = FALSE;
    dbg_err("%s: OS Log error %s\n", __FUNCTION__, logdump.file_msg);
  }

#else
    bool ret = TRUE;
    char obuf[2048];

    memset(obuf, 0, sizeof(obuf));
    if (OutFileNameSize > strlen(OS_LOG_FILE_OUT_NAME))
        strcpy(outName, OS_LOG_FILE_OUT_NAME);
    else
        memcpy(outName, OS_LOG_FILE_OUT_NAME, OutFileNameSize - 1);
    svcSystem("dmesg > /tmp/dmesg");
    sprintf(obuf,"tar -zcvf %s /tmp/dmesg /var/log/messages.* /mnt/sram/messages* /mnt/sram/vhq/vhqlog* /etc/vhq/vhqlog* /etc/vhq/*.xsd /etc/osupgrade.log /etc/*version /etc/vhq/vhqconfig/", outName);
    remove(outName);
    log_dbg(  "%s: executing %s\n", __FUNCTION__, obuf);
    svcSystem(obuf);
    svcSystem("rm /tmp/dmesg");
    log_dbg( "%s: Log Files written to %s\n", __FUNCTION__, outName);
    sync();
#endif
  chmod(outName, 0666);
  return ret;
}

#define USR_LOG_FILE_OUT_NAME           "/tmp/UsrLogs.tgz"


static bool copyUsrLogs(char *outName, int OutFileNameSize)
{
  char obuf[2048];
  int AppLogTempDirLen, AppLogPermDirLen;
  char AppLogTempDir[512];
  char AppLogPermDir[512];

  memset(AppLogTempDir, 0, sizeof(AppLogTempDir));
#ifdef Mx2
  AppLogTempDirLen = getEnvFilename("perm", "applogstemp", AppLogTempDir,
                                    sizeof(AppLogTempDir),
                                    "/mnt/flash/config/config.usr1");
#else
    AppLogTempDirLen = getEnvFile("perm", "applogstemp", AppLogTempDir, sizeof(AppLogTempDir));
#endif

  dbg_msg("%s: AppLogTempDirLen = %d, AppLogTempDir = %s\n", __FUNCTION__,
          AppLogTempDirLen, AppLogTempDir);

  memset(AppLogPermDir, 0, sizeof(AppLogPermDir));
#ifdef Mx2
  AppLogPermDirLen = getEnvFilename("perm", "applogsperm", AppLogPermDir,
                                    sizeof(AppLogPermDir),
                                    "/mnt/flash/config/config.usr1");
#else
    AppLogPermDirLen = getEnvFile("perm", "applogsperm", AppLogPermDir, sizeof(AppLogPermDir));
#endif

  dbg_msg("%s: AppLogPermDirLen = %d, AppLogPermDir = %s\n", __FUNCTION__,
          AppLogPermDirLen, AppLogPermDir);

  memset(obuf, 0, sizeof(obuf));
  if ((uint32) OutFileNameSize > strlen(USR_LOG_FILE_OUT_NAME))
    strcpy(outName, USR_LOG_FILE_OUT_NAME);
  else
    memcpy(outName, USR_LOG_FILE_OUT_NAME, OutFileNameSize - 1);
#ifdef Mx2
  // ADKTMS-240 start
  sprintf(
      obuf,
      "tar -zcvf %s /home/usr1/logs/* /home/usr2/logs/*  /home/usr3/logs/*  /home/usr4/logs/*  /home/usr5/logs/*  /home/usr6/logs/*  /home/usr7/logs/*  /home/usr8/logs/*  /home/usr9/logs/*  /home/usr10/logs/*  /home/usr11/logs/*  /home/usr12/logs/*  /home/usr13/logs/*  /home/usr14/logs/*  /home/usr15/logs/*  /home/usr16/logs/* ",
      outName);
  // ADKTMS-240 end
#else
    sprintf(obuf,"tar -zcvf %s /home/usr1/*.log /home/usr1/messages*", outName);
#endif

  dbg_msg("%s: AppLogTempDirLen = %d\n", __FUNCTION__, AppLogTempDirLen);
  if (AppLogTempDirLen > 0)
  {
    dbg_msg("%s: AppLogTempDir = %s\n", __FUNCTION__, AppLogTempDir);
    strcat(obuf, " ");
    strcat(obuf, AppLogTempDir);
    strcat(obuf, "/*.log");
  }

  dbg_msg("%s: AppLogPermDirLen = %d\n", __FUNCTION__, AppLogPermDirLen);
  if (AppLogPermDirLen > 0)
  {
    dbg_msg("%s: AppLogPermDir = %s\n", __FUNCTION__, AppLogPermDir);
    strcat(obuf, " ");
    strcat(obuf, AppLogPermDir);
    strcat(obuf, "/*.log");
  }

  remove(outName);
  log_dbg("%s: executing %s\n", __FUNCTION__, obuf);
  svcSystem(obuf);
  log_dbg("%s: Log Files written to %s\n", __FUNCTION__, outName);
  sync();

  chmod(outName, 0666);

  return TRUE;
}


bool VHQRootGetFileList(file_list_t list_type, char *OutFileName,
                        int OutFileNameSize)
{
  bool ret_val = FALSE;
  log_dbg("%s: Clearing OutFileName\n", __FUNCTION__);
  memset(OutFileName, 0, OutFileNameSize);
  dbg_msg("%s: OutFileName cleared!\n", __FUNCTION__);

  switch (list_type)
  {
    case FILE_LIST_LOG_FILE_LIST:
      break;

    case FILE_LIST_OS_CONFIG_FILES:
      ret_val = copyOSConfigFiles(OutFileName, OutFileNameSize);
      break;

    case FILE_LIST_OS_LOG_FILES:
      ret_val = copyOSLogs(OutFileName, OutFileNameSize);
      break;

    case FILE_LIST_USR_LOG_FILES:
      ret_val = copyUsrLogs(OutFileName, OutFileNameSize);
      break;
  }

  return ret_val;
}


bool VHQGetFileList(file_list_t list_type, char *OutFileName,
                    int OutFileNameSize)
{
#ifdef Mx2
  /* For Mx2, we can just gather the files as system user */
  return VHQRootGetFileList(list_type, OutFileName, OutFileNameSize);
#else
    /* For MX devices, we need to gather the files as root */
    bool ret_val = FALSE;
    int outQid, inQid;
    VHQRootRequestMsg get_filelist_request_msg;
    VHQRootResponseMsg get_filelist_response_msg;

    // open queues (server will create)
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
    inQid=msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);

    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        memset(&get_filelist_request_msg, 0, sizeof(VHQRootRequestMsg));

        get_filelist_request_msg.clientPid = getpid();
        get_filelist_request_msg.message_type = VHQ_ROOT_REQUEST_FILE_LIST;
        get_filelist_request_msg.data.sFileListData.list_type = list_type;

        SafeMsgSndWrapper(outQid, &get_filelist_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &get_filelist_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), get_filelist_request_msg.clientPid, 0, FALSE) >= exp_len)
        {
            if (OutFileNameSize > strlen(get_filelist_response_msg.data.sFileListResp.OutFileName))
                strcpy(OutFileName, get_filelist_response_msg.data.sFileListResp.OutFileName);
            else
                return FALSE;

            dbg_msg( "%s: get_filelist_response_msg - OutFileName = %s\n", __FUNCTION__, OutFileName);
            ret_val = get_filelist_response_msg.data.sFileListResp.ret_val;


        }
        else
            ret_val = FALSE;
    }
    else
    {
        log_err( "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        ret_val = FALSE;
    }

    return ret_val;
#endif
}

#if 0
bool RequestEventNotificationFromMain(int event_mask, char* filename, int notificationDataInteger)
{
/* No need to go through the message queue for MX8 until this is supported on MX8 */
    int outQid, inQid;
    VHQRootRequestMsg event_notify_request_msg;
    VHQRootResponseMsg event_notify_response_msg;

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: ENTER\n", __FUNCTION__);
    // open queues (server will create)
#ifdef Mx2
    outQid=msgget((key_t)QUE_VHQ_ROOT_REQUEST, 0666);
    inQid=msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);
#else
    outQid = msgget((key_t)QUE_VHQ_APP_IFC_TO_AGENT, 0666);
    inQid = msgget((key_t)QUE_VHQ_ROOT_RESPONSE, 0666);
#endif


    if ((-1 != inQid) && (-1 != outQid))
    {
        int exp_len;

        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Opened Message QUEUES's\n", __FUNCTION__);
        memset(&event_notify_request_msg, 0, sizeof(VHQRootRequestMsg));
        memset(&event_notify_response_msg, 0, sizeof(VHQRootResponseMsg));

        event_notify_request_msg.clientPid = getpid();
        event_notify_request_msg.message_type = VHQ_REQUEST_EVENT_NOTIFICATION;

        event_notify_request_msg.data.sEventNotifyReq.event_mask = event_mask;
        event_notify_request_msg.data.sEventNotifyReq.notificationDataInteger = notificationDataInteger;
        if (filename)
            strcpy(event_notify_request_msg.data.sEventNotifyReq.filename, filename);


        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Sending VHQ_REQUEST_EVENT_NOTIFICATION message\n", __FUNCTION__);
        SafeMsgSndWrapper(outQid, &event_notify_request_msg, sizeof(VHQRootRequestMsg) - sizeof(long), 0) ;

        exp_len = sizeof(VHQRootResponseMsg) - sizeof(long);
        if (SafeMsgRcvWrapper(inQid, &event_notify_response_msg, sizeof(VHQRootResponseMsg) - sizeof(long), event_notify_request_msg.clientPid, 0, FALSE) >= exp_len)
            return event_notify_response_msg.data.sEventNotifyResp.ret_val;
        else
            return FALSE;
    }
    else
    {
        DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: outQid = %x, inQid = %x\r\n", __FUNCTION__, outQid, inQid);
        return FALSE;
    }
}
#endif


bool VHQScreenCapture(char *outfile)
{
  bool ret_val = FALSE;

  if (outfile && (strlen(outfile) > 0))
  {
    char cmd[256] = { 0 };

    /* Remove existing file (if any) */
    removeFile(outfile);

    snprintf(cmd, sizeof(cmd), "/usr/local/bin/fbgrab %s", outfile);
    system(cmd);
    sync();

    /* Check if screen shot is created */
    if (FileExists(outfile))
    {
      dbg_msg("%s: Screenshot saved to %s\n", __FUNCTION__, outfile);
      ret_val = TRUE;
    }
    else
    {
      log_err("%s: Failed to get Screenshot\n", __FUNCTION__);
    }
  }

  return ret_val;
}

#define HTTPS_TYPE "https://"
bool GetHostName(char *szStrHost)
{
  char szUrl[256];
  char *substr;
  szStrHost[0] = 0;
  VHQGetParameterString(PARAM_URL_ROOT, szUrl, sizeof(szUrl));
  if ((substr = strcasestr(szUrl, HTTPS_TYPE)) != NULL)
  {
    if (substr == szUrl)
    {
      int i;
      int iLen = strlen(szUrl);
      // at this point, we know that the first part of the string contains https
      for (i = strlen(HTTPS_TYPE); i < iLen; i++)
        if (szUrl[i] == '/')
          szUrl[i] = 0;
      strcpy(szStrHost, szUrl + strlen(HTTPS_TYPE));
      if (strlen(szUrl) > 0)  //isalpha(szStrHost[0]))
      {
        dbg_msg("%s: hostname extracted is: %s\n", __FUNCTION__, szStrHost);
        return TRUE;
      }
    }
  }
  log_err("%s: could not extract hostname\r", __FUNCTION__);
  return FALSE;
}

void VerifyConnection()
{
  char szIp[256];

  if (GetHostName(szIp))
  {
    struct hostent *pEnt;
    pEnt = gethostbyname(szIp);
    if (NULL == pEnt)
    {
      log_dbg("%s: hostname extracted is: %s\n", __FUNCTION__, szIp);
      sleep(7);
    }
    else
    {
      int i = 0;
      while (pEnt->h_addr_list[i] != NULL)
      {
        dbg_msg(
            "h_addr_list[i]: %s\n",
            inet_ntoa(
                (struct in_addr ) *((struct in_addr* ) pEnt->h_addr_list[i])));
        i++;
      }
    }
  }
  else if (!GrepForPCipaddr(szIp))
  {
    log_err("\n\n\n%s: GrepForPCisaddr returned failure\n", __FUNCTION__);
  }
}

// Quick check to see if a mouse is connected.
// Return > 0 if mouse is connected, <=0 if NO mouse is connected
int check4pppd(void)
{
  char obuf[1024];
  FILE *rfp;
  int result;

  sprintf(obuf, "ps | grep -i pppd");
  if ((rfp = popen(obuf, "r")) == NULL)
  {
    return (-1);        // popen error
  }
  memset(obuf, 0, sizeof(obuf));
  result = fread(obuf, sizeof(char), sizeof(obuf) - 1, rfp);
  pclose(rfp);

  return result;
}

static ssize_t readdata(int sockd, void *vptr, size_t maxlen)
{
  ssize_t n = 0, rc;
  struct timeval timeout;
  time_t t;
  timeout.tv_sec = 1;
  timeout.tv_usec = 0;

  memset(vptr, 0, maxlen);

  setsockopt(sockd, SOL_SOCKET, SO_RCVTIMEO, (char*) &timeout, sizeof(timeout));
  t = linux_time(NULL) + 5;
  do
  {
    rc = read(sockd, vptr, maxlen);
    if (rc == maxlen)
    {
      return maxlen;
    }
    else if (rc > 0)
    {
      vptr += rc;
      maxlen -= rc;
      n += rc;
      continue;
    }
    else if (rc == 0)
    {
      return 0;
    }
    else
    {
      if ( errno == EINTR || errno == EAGAIN)
        continue;
      return -1;
    }
  }
  while (maxlen && t < linux_time(NULL));

  return n;
}
#if 0
#pragma pack(1)
typedef struct _VHQPosInfo
{
    unsigned int dwSize;
    char szName[32];
    char szWindowsVersion[32];
    char szPosAgentVersion[32];
    unsigned int dwIpAddr;
} VHQPOS_INFO;
#pragma pack()
#endif

#define PING_REQ_STR "ping connection"
#define RESET_REQ_STR "reset"

int PosAgentResetPeer(void)
{
  int conn_s; /*  connection socket         */
  struct sockaddr_in servaddr; /*  socket address structure  */
  VHQPOS_INFO sPosInfo;
  char szMsg[32];
  int res;

  /*  Create the listening socket  */
//  createText_line(vhq_container, 0, 3, TLS_SINGLE, TJ_CENTERED, "socket open", TT_BLACK_XL_BOLD, NULL);
  if ((conn_s = socket(AF_INET, SOCK_STREAM, 0)) < 0)
  {
//      fprintf(stderr, "getPCipAddr: Error creating listening socket.\n");
    return -1;
  }

  /*  Set all bytes in socket address structure to
   zero, and fill in the relevant data members   */
  memset(&servaddr, 0, sizeof(servaddr));
  servaddr.sin_family = AF_INET;
  servaddr.sin_port = htons(9333);

  /*  Set the remote IP address  */

  if (inet_aton("10.0.2.2", &servaddr.sin_addr) <= 0)  // fixed address of host
  {
    close(conn_s);
    return (-2);
  }

//  createText_line(vhq_container, 0, 4, TLS_SINGLE, TJ_CENTERED, "socket connect", TT_BLACK_XL_BOLD, NULL);
  if (connect(conn_s, (struct sockaddr*) &servaddr, sizeof(servaddr)) < 0)
  {
    close(conn_s);
    return (-3);
  }

  memset(szMsg, 0, sizeof(szMsg));
  strcpy(szMsg, RESET_REQ_STR);
  res = write(conn_s, szMsg, sizeof(szMsg));  // write 1 byte of anything to kick the server
  if (res < 0)
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: Error writing into socket ",
             __FUNCTION__);
  memset(&sPosInfo, 0, sizeof(sPosInfo));

//  createText_line(vhq_container, 0, 5, TLS_SINGLE, TJ_CENTERED, "reading data", TT_BLACK_XL_BOLD, NULL);

  readdata(conn_s, &sPosInfo, sizeof(sPosInfo));

  close(conn_s);
  return 0;
}

int PosAgentPeerPingServer(char *pszIpAddr, char *pszPOSagentVer,
                           char *pszPOSOsVer, int iBufLen)
{
  int conn_s; /*  connection socket         */
  struct sockaddr_in servaddr; /*  socket address structure  */
  VHQPOS_INFO sPosInfo;
  char szMsg[32];
  int res;

  /*  Create the listening socket  */
//  createText_line(vhq_container, 0, 3, TLS_SINGLE, TJ_CENTERED, "socket open", TT_BLACK_XL_BOLD, NULL);
  if ((conn_s = socket(AF_INET, SOCK_STREAM, 0)) < 0)
  {
//      fprintf(stderr, "getPCipAddr: Error creating listening socket.\n");
    return -1;
  }

  /*  Set all bytes in socket address structure to
   zero, and fill in the relevant data members   */
  memset(&servaddr, 0, sizeof(servaddr));
  servaddr.sin_family = AF_INET;
  servaddr.sin_port = htons(9333);

  /*  Set the remote IP address  */

  if (inet_aton("10.0.2.2", &servaddr.sin_addr) <= 0)  // fixed address of host
  {
    close(conn_s);
    return (-2);
  }

//  createText_line(vhq_container, 0, 4, TLS_SINGLE, TJ_CENTERED, "socket connect", TT_BLACK_XL_BOLD, NULL);
  if (connect(conn_s, (struct sockaddr*) &servaddr, sizeof(servaddr)) < 0)
  {
    close(conn_s);
    return (-3);
  }

  memset(szMsg, 0, sizeof(szMsg));
  strcpy(szMsg, RESET_REQ_STR);
  res = write(conn_s, szMsg, sizeof(szMsg));  // write 1 byte of anything to kick the server
  if (res < 0)
    DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: Error writing into socket ",
             __FUNCTION__);

  memset(&sPosInfo, 0, sizeof(sPosInfo));

//  createText_line(vhq_container, 0, 5, TLS_SINGLE, TJ_CENTERED, "reading data", TT_BLACK_XL_BOLD, NULL);

  readdata(conn_s, &sPosInfo, sizeof(sPosInfo));

#if 1
  {
    unsigned char *dwIp = (unsigned char*) &sPosInfo.dwIpAddr;
    snprintf(pszIpAddr, iBufLen, "%d.%d.%d.%d", dwIp[0], dwIp[1], dwIp[2],
             dwIp[3]);

//      createText_line(vhq_container, 0, 7, TLS_SINGLE, TJ_CENTERED, pszBuffer, TT_BLACK_XL_BOLD, NULL);
    snprintf(pszPOSOsVer, iBufLen, "%s", sPosInfo.szWindowsVersion);
//      createText_line(vhq_container, 0, 8, TLS_SINGLE, TJ_CENTERED, pszBuffer, TT_BLACK_XL_BOLD, NULL);
    snprintf(pszPOSagentVer, iBufLen, "%s", sPosInfo.szPosAgentVersion);
//      createText_line(vhq_container, 0, 9, TLS_SINGLE, TJ_CENTERED, pszBuffer, TT_BLACK_XL_BOLD, NULL);
//      snprintf(pszBuffer, iBufLen, "ComputerName=%s", sPosInfo.szName);
//      createText_line(vhq_container, 0, 10, TLS_SINGLE, TJ_CENTERED, pszBuffer, TT_BLACK_XL_BOLD, NULL);
  }
#endif

  close(conn_s);
  return 0;
}


void WaitForAppRegistration(void)
{
  uint32 app_reg_wait_time;
#ifdef Mx2
  int user_num;
  SecinsPkgInfo pkginfo;
  bool installed_users[16];

  /* Clear the installed user array */
  memset(installed_users, 0, sizeof(installed_users));
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\n\n\n\n\n\nPackage Versions\n");
  // Ensure we're starting from the beginning of the list.
  Secins_close_pkglist();
  while (Secins_read_pkglist_entry(&pkginfo, sizeof(pkginfo)) != NULL)
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s %s %s %s %s %s %s %s\n", pkginfo.signer, pkginfo.user, pkginfo.name, pkginfo.version, pkginfo.type, pkginfo.bundlename, pkginfo.bundleversion, *pkginfo.bundledate ? pkginfo.bundledate : "-");
    if (strcmp(pkginfo.signer, "user") == 0)
    {
      user_num = 0;

      if (sscanf(pkginfo.user, "usr%d", &user_num) == 1)
      {
        dbg_msg("%s: Found a user package for user %s (user_num = %d)\n",
                __FUNCTION__, pkginfo.user, user_num);

        installed_users[user_num - 1] = TRUE;
      }
    }
  }

  for (user_num = 1; user_num < 17; user_num++)
  {
    if (installed_users[user_num - 1])
    {
      int max_retries = 60;
      char dir_str[128];

      memset(dir_str, 0, sizeof(dir_str));
      sprintf(dir_str, "/home/usr%d", user_num);

      dbg_msg("%s: user_num %d is installed - checking for home directory %s\n",
              __FUNCTION__, user_num, dir_str);

      while (max_retries && (!DirExists(dir_str)))
      {
        dbg_msg("%s: waiting for home directory %s to be created\n",
                __FUNCTION__, dir_str);
        max_retries--;
        sleep(1);
      }

      if (DirExists(dir_str))
        dbg_msg(
            "%s: home directory %s exists - moving to next installed user\n",
            __FUNCTION__, dir_str);
      else
        dbg_msg(
            "%s: TIMEOUT waiting for home directory %s to be created - moving to next installed user\n",
            __FUNCTION__, dir_str);
    }
  }

#else
    /* MX8 app registration is not supported yet but when it is, we will need to find a better
    way to figure out that the app has started than just sleeping */
#endif

  VHQGetParameterUint32(PARAM_APP_REG_WAIT_TIME, &app_reg_wait_time,
                        DEFAULT_BASE);
  if (app_reg_wait_time > MAX_APP_REG_WAIT_TIME)
  {
    /* The app reg wait time cannot be more than the maximum allowed */
    log_err(
        "%s: AppRegWaitTime %d is above maximum value - resetting to max (%d)\n",
        __FUNCTION__, app_reg_wait_time, MAX_APP_REG_WAIT_TIME);
    app_reg_wait_time = MAX_APP_REG_WAIT_TIME;
    VHQSetParameterUint32(PARAM_APP_REG_WAIT_TIME, app_reg_wait_time, TRUE);
  }

  dbg_msg(
      "%s: Finished waiting for all user home directories to be created - giving apps %d seconds to register\n",
      __FUNCTION__, app_reg_wait_time);
  while (app_reg_wait_time > 0)
  {
    /* ADKTMS-995 (Mitch 4-21-16): Instead of sleeping the entire wait time, sleep for only 1 second
     at a time and process the registration requests as they come in */
    sleep(1);
    app_reg_wait_time--;
    ProcessServerRequests(FALSE);
  }

}

#ifdef Mx2

static void remove_all_chars(char *str, char c)
{
  char *pr = str, *pw = str;
  while (*pr)
  {
    *pw = *pr++;
    pw += (*pw != c);
  }
  *pw = '\0';
}

void getUx100Info(ux_submodule_info_t *info)
{
  static void *dlUx100 = NULL;

  /* clear the data */
  memset(info, 0, sizeof(ux_submodule_info_t));

  /* checks if UX100 is attached */
  dbg_msg("%s: trying to open libsvc_ux100.so\n", __FUNCTION__);
  dlUx100 = dlopen("libsvc_ux100.so", RTLD_LAZY);
  if (NULL != dlUx100)
  {
    /* UX100 is attached */
    struct ux100ModelNumberStruct modelNo, (*getModelNo)(void) = NULL;
    struct ux100SerialNumberStruct serialNo, (*getSerialNo)(void) = NULL;
    struct ux100SecureVersionStruct FWVersion, (*getFWVersion)(void) = NULL;
    struct ux100PartNumberStruct partNo, (*getPartNo)(void) = NULL;
    struct ux100HardwareVersionStruct HWVersion, (*getHWVersion)(void) = NULL;
    struct ux100SoftwareInfoForVHQStruct SoftwareInfo,
        (*getSoftwareInfo)(void) = NULL;
    int (*infoGetRemSwStatus)(void) = NULL;

    dbg_msg("%s: UX100 shared lib is present - reading ux100 information\n",
            __FUNCTION__);
    info->present = FALSE;
    // function pointer assignment
    getModelNo = (struct ux100ModelNumberStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoGetModelNumber");
    infoGetRemSwStatus = (int (*)(void)) dlsym(dlUx100,
                                               "ux100_infoGetRemSwStatus");
    getSerialNo = (struct ux100SerialNumberStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoGetSerialNumber");

    getFWVersion = (struct ux100SecureVersionStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoGetSecureVersion");
    getPartNo = (struct ux100PartNumberStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoGetPartNumber");
    getHWVersion = (struct ux100HardwareVersionStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoGetHardwareVersion");
    getSoftwareInfo = (struct ux100SoftwareInfoForVHQStruct (*)(void)) dlsym(
        dlUx100, "ux100_infoSoftwareInfoForVHQ");

    //retrieve return values from ux100 library
    if (getModelNo)
    {
      modelNo = getModelNo();
      if (errno == 0)
      {
        dbg_msg(
            "%s: getModelNo SUCCESSFUL - copying Model Num %s to info->model_number\n",
            __FUNCTION__, modelNo.model_number);
        /* Replace newlines with spaces */
        remove_all_chars(modelNo.model_number, '\n');
        strcpy(info->model_number, modelNo.model_number);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getModelNo FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (getSerialNo)
    {
      serialNo = getSerialNo();
      if (errno == 0)
      {
        dbg_msg(
            "%s: getSerialNo SUCCESSFUL - copying Serial Num %s to info->serial_number\n",
            __FUNCTION__, serialNo.serial_number);
        remove_all_chars(serialNo.serial_number, '\n');
        strcpy(info->serial_number, serialNo.serial_number);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getSerialNo FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (getFWVersion)
    {
      FWVersion = getFWVersion();
      if (errno == 0)
      {
        dbg_msg(
            "%s: getFWVersion SUCCESSFUL - copying ID code %s (version = %s, family = %s) to info->fw_version\n",
            __FUNCTION__, FWVersion.id_code, FWVersion.version,
            FWVersion.family);
        remove_all_chars(FWVersion.id_code, '\n');
        strcpy(info->fw_version, FWVersion.id_code);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getFWVersion FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (getPartNo)
    {
      partNo = getPartNo();
      if (errno == 0)
      {
        dbg_msg(
            "%s: getPartNo SUCCESSFUL - copying Part Num %s to info->part_number\n",
            __FUNCTION__, partNo.part_number);
        remove_all_chars(partNo.part_number, '\n');
        strcpy(info->part_number, partNo.part_number);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getPartNo FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (getHWVersion)
    {
      HWVersion = getHWVersion();
      if (errno == 0)
      {
        dbg_msg(
            "%s: getHWVersion SUCCESSFUL - copying HW Version %s to info->hw_version\n",
            __FUNCTION__, HWVersion.hardware_version);
        remove_all_chars(HWVersion.hardware_version, '\n');
        strcpy(info->hw_version, HWVersion.hardware_version);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getHWVersion FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (infoGetRemSwStatus)
    {
      info->infoGetRemSwStatus = infoGetRemSwStatus();
      if (errno != 0)
      {
        log_err("%s: infoGetRemSwStatus FAILED - errno = %d (%s) \n",
                __FUNCTION__, errno, strerror(errno));
        info->infoGetRemSwStatus = 0;
      }
      else
      {
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: infoGetRemSwStatus SUCCESSFUL\n",
                 __FUNCTION__);

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
    }

    if (getSoftwareInfo)
    {
      SoftwareInfo = getSoftwareInfo();
      if (errno == 0)
      {
        dbg_msg("%s: getSoftwareInfo SUCCESSFUL - setting up app_data struct\n",
                __FUNCTION__, modelNo.model_number);

        snprintf(info->app_data.name, sizeof(info->app_data.name), "%s",
                 SoftwareInfo.app_name);
        snprintf(info->app_data.version, sizeof(info->app_data.version), "%s",
                 SoftwareInfo.app_version);
        snprintf(info->app_data.bundlename, sizeof(info->app_data.bundlename),
                 "%s", SoftwareInfo.bundle_name);
        snprintf(info->app_data.bundleversion,
                 sizeof(info->app_data.bundleversion), "%s",
                 SoftwareInfo.bundle_version);
        info->app_data.type = APP_TYPE_OS;

        /* If one of these functions is successful, we can say the UX100 is present*/
        info->present = TRUE;
      }
      else
      {
        log_err("%s: getSoftwareInfo FAILED - errno = %d (%s) \n", __FUNCTION__,
                errno, strerror(errno));
      }
    }

    if (!info->present)
      log_err(
          "%s: All UX100 library calls failed - returning info->present = FALSE (%d)\n",
          __FUNCTION__, info->present);

  }
  else
  {
    dbg_notice("%s: UX100 is NOT present\n", __FUNCTION__);
  }

}

void getUx400Info(ux_submodule_info_t *info)
{
  unsigned long isUX400present;
  unsigned long size;

  /* clear the data */
  memset(info, 0, sizeof(ux_submodule_info_t));

  /* checks if UX400 is attached */
  if (platforminfo_get(PI_UX400_PRESENT, &isUX400present,
                       sizeof(isUX400present), &size) == PI_OK
      && isUX400present == 1)
  {
    dbg_msg("%s: UX400 is present - reading ux400 information\n", __FUNCTION__);
    info->present = TRUE;
    strcpy(info->model_number, "UX400");
  }
  else
  {
    dbg_notice("%s: UX400 is NOT present\n", __FUNCTION__);
  }

}


void getUxMCUInfo(ux_submodule_info_t *info)
{
  void *stbymcuLib = dlopen("libvfiStbymcu.so", RTLD_LAZY);

  /* clear the data */
  memset(info, 0, sizeof(ux_submodule_info_t));

  /* checks if MCU exists */
  // MCU version info (only available on UX!)
  if (stbymcuLib)
  {
    unsigned char tMcuVersion[20];
    int (*stbymcu_open)();
    int (*stbymcu_close)();
    int (*stbymcu_get_fw_version)(unsigned char fw_version[20]);
    stbymcu_open = (int (*)()) dlsym(stbymcuLib, "stbymcu_open");
    stbymcu_get_fw_version = (int (*)(unsigned char[20])) dlsym(
        stbymcuLib, "stbymcu_get_fw_version");
    stbymcu_close = (int (*)()) dlsym(stbymcuLib, "stbymcu_close");

    /* Set present flag and set FWVersion to unknown for now */
    info->present = TRUE;
    strcpy(info->model_number, "MCU");
    strcpy(info->fw_version, "Unknown");

    if (stbymcu_open && stbymcu_get_fw_version && stbymcu_close)
    {
      if (stbymcu_open() != -1)
      {
        if (stbymcu_get_fw_version(tMcuVersion) != -1)
        {
          strcpy(info->fw_version, (char*) tMcuVersion);
        }
        stbymcu_close();
      }
    }
    dlclose(stbymcuLib);
  }
  else
  {
    dbg_msg("%s: Unable to open libvfiStbymcu.so to read MCU\n", __FUNCTION__);
  }

}

typedef enum
{
  USB_PERIPH_INFO_PRODUCT_ID,
  USB_PERIPH_INFO_VENDOR_ID,
  USB_PERIPH_INFO_MANUFACTURER,
  USB_PERIPH_INFO_PRODUCT_NUM,
  USB_PERIPH_INFO_SERIAL_NUM,
} usb_periph_info_file_tag_enum_t;

typedef struct _usb_periph_info_file_tag_conv_t
{
  char tag_name[USB_PERIPH_DEVICE_INFO_MAX_TAG_LEN];
  usb_periph_info_file_tag_enum_t tag_field;

} usb_periph_info_file_tag_conv_t;

static usb_periph_info_file_tag_conv_t usb_peripheral_file_info_tag_data[] = { {
    "USB_PID", USB_PERIPH_INFO_PRODUCT_ID }, { "USB_VID",
    USB_PERIPH_INFO_VENDOR_ID }, { "USB_MANUF", USB_PERIPH_INFO_MANUFACTURER },
    { "USB_PRODUCT", USB_PERIPH_INFO_PRODUCT_NUM }, { "USB_SERIAL",
        USB_PERIPH_INFO_SERIAL_NUM }, };

#undef USB_PERIPH_TESTING
#ifdef USB_PERIPH_TESTING
// this is the compare function used to sort the list with qsort
int peripheral_device_compare(usb_peripheral_device_t *p1,
                              usb_peripheral_device_t *p2)
{
  return strcasecmp(p1->serial_number, p2->serial_number);
}

// this function wraps the qsort function for these USB device lists
void sortPeripheralDeviceList(usb_peripheral_info_t *info)
{
  qsort(info->peripheral_devices, info->num_peripheral_devices,
        sizeof(info->peripheral_devices[0]), (__compar_fn_t) peripheral_device_compare);
}

// This function removes duplicates from the device list
void cleanPeripheralDeviceList(usb_peripheral_info_t *info)
{
  int i;

  for (i = 0; i < (info->num_peripheral_devices - 1); i++)
  {
    dbg_msg(
        "%s:  checking &info->peripheral_devices[i].serial_number = %s, &&info->peripheral_devices[i].part_number = %s\n",
        __FUNCTION__, &info->peripheral_devices[i].serial_number,
        &info->peripheral_devices[i].part_number);
    while (i < (info->num_peripheral_devices - 1)
        && 0
        == strcasecmp(info->peripheral_devices[i].serial_number,
                      info->peripheral_devices[i + 1].serial_number))
    {
      memmove(
          (void*) &(info->peripheral_devices[i]),
          (void*) &(info->peripheral_devices[i + 1]),
          (XSD_NUM_PERIPHERAL_DEVICES - (i + 1))
          * sizeof(info->peripheral_devices[0]));
      info->num_peripheral_devices--;
      dbg_msg("%s:  deleting at position %d\n", __FUNCTION__, i + 1);
    }
  }
}

// static test data for USB peripheral functions
usb_peripheral_info_t usb_test_data =
{
  15,
  {
    { "11ca", "ca11", "Verifone Systems", "275-004-455", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-456", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-457", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-458", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-455", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-459", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-460", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-455", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-452", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-425", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-445", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-455", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "111-222-333", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "375-004-495", "M430 - 003 - 04 - WWA - 4", ""},
    { "11ca", "ca11", "Verifone Systems", "275-004-445", "M430 - 003 - 04 - WWA - 4", ""},
  }
};

// testing function, dumps list of USB peripherals.  Move out of the test section if required
void
DumpPeripherals(char *pszMsg, usb_peripheral_info_t* info)
{
  int i;

  dbg_msg( "%s:  %s  items= %d\r", __FUNCTION__, pszMsg, info->num_peripheral_devices);

  for (i = 0; i < (info->num_peripheral_devices - 1); i++)
  {
    dbg_msg( "%s:  checking &info->peripheral_devices[%d].serial_number = %s, &&info->peripheral_devices[%d].part_number = %s\n", __FUNCTION__, i,
    &info->peripheral_devices[i].serial_number, i, &info->peripheral_devices[i].part_number);
  }
}

#endif

static void readUSBPeripheralCfg(usb_peripheral_info_t *info,
                                 const char *usb_cfg)
{
  int file_handle, bytes_read;
  char full_filename[128];
  char *file_data = NULL;
  struct stat file_stat;

  sprintf(full_filename, "%s%s", USB_PERIPH_DEVICE_INFO_DIRECTORY, usb_cfg);
  dbg_msg("%s: Extracting USB peripheral device info from %s\n", __FUNCTION__,
          full_filename);

  if (stat(full_filename, &file_stat) == 0)
  {
    int file_size = file_stat.st_size + 1;

    if (file_stat.st_size)
      file_data = (char*) malloc(file_size);

    if (file_data != NULL)
    {
      file_handle = open(full_filename, O_RDONLY);

      if (file_handle != -1)
      {
        memset(file_data, 0, file_size);
        bytes_read = read(file_handle, file_data, file_stat.st_size);

        if (bytes_read == file_stat.st_size)
        {
          int tag_num;
          int num_tags = sizeof(usb_peripheral_file_info_tag_data)
              / sizeof(usb_periph_info_file_tag_conv_t);

          for (tag_num = 0; tag_num < num_tags; tag_num++)
          {
            char *temp_tag_str = NULL;
            char *equal_str = NULL;

            temp_tag_str = strcasestr(
                file_data, usb_peripheral_file_info_tag_data[tag_num].tag_name);
            if (temp_tag_str != NULL)
            {
              equal_str = strcasestr(temp_tag_str, "=");
              if ((equal_str) && (equal_str < (file_data + file_stat.st_size)))
              {
                char temp_data[32] = { 0 };
                int device = info->num_peripheral_devices;
                usb_peripheral_device_t *peripheral_device = &info
                    ->peripheral_devices[device];

                equal_str++;

                memset(temp_data, 0, sizeof(temp_data));
                sscanf(equal_str, "%s", temp_data);

                switch (usb_peripheral_file_info_tag_data[tag_num].tag_field)
                {
                  case USB_PERIPH_INFO_PRODUCT_ID:
                    strncpy(peripheral_device->product_id, temp_data,
                            sizeof(peripheral_device->product_id) - 1);
                    break;
                  case USB_PERIPH_INFO_VENDOR_ID:
                    strncpy(peripheral_device->vendor_id, temp_data,
                            sizeof(peripheral_device->vendor_id) - 1);
                    break;
                  case USB_PERIPH_INFO_MANUFACTURER:
                    strncpy(peripheral_device->manufacturer, temp_data,
                            sizeof(peripheral_device->manufacturer) - 1);
                    break;
                  case USB_PERIPH_INFO_PRODUCT_NUM:
                    strncpy(peripheral_device->part_number, temp_data,
                            sizeof(peripheral_device->part_number) - 1);
                    equal_str += strlen(peripheral_device->part_number);

                    /* Get Model Number from Product Number */
                    if (*++equal_str == ' ')
                    {
                      ++equal_str;
                      memset(temp_data, 0, sizeof(temp_data));
                      sscanf(equal_str, "%[^\n]", temp_data);
                      strncpy(peripheral_device->model_number, temp_data,
                              sizeof(peripheral_device->model_number) - 1);
                    }
                    break;
                  case USB_PERIPH_INFO_SERIAL_NUM:
                    strncpy(peripheral_device->serial_number, temp_data,
                            sizeof(peripheral_device->serial_number) - 1);
                    break;
                  default:
                    break;
                }
              }
            }
          }

          // ADKTMS-1674 we're just gonna skip it if it's not a verifone device
          // if this proves to not be enough we might need a list of supported submodules
          if ((0
              == stricmp(
                  info->peripheral_devices[info->num_peripheral_devices]
                      .vendor_id,
                  "11ca"))
              || (0
                  == stricmp(
                      info->peripheral_devices[info->num_peripheral_devices]
                          .manufacturer,
                      "VERIFONE"))
              || (0
                  == stricmp(
                      info->peripheral_devices[info->num_peripheral_devices]
                          .manufacturer,
                      "Verifone Systems")))
          {
            int i = 0;

            for (i = 0; i < info->num_peripheral_devices; i++)
            {
              /* Check if this device already exists in the list */
              if (0
                  == strcmp(
                      info->peripheral_devices[i].serial_number,
                      info->peripheral_devices[info->num_peripheral_devices]
                          .serial_number))
              {
                break;
              }
            }

            if (i == info->num_peripheral_devices)
            {
              info->num_peripheral_devices++;
            }
            else
            {
              /* Clear this entry */
              memset(
                  (void*) &(info->peripheral_devices[info
                      ->num_peripheral_devices]),
                  0, sizeof(usb_peripheral_device_t));
            }
          }
        }
        else
        {
          log_err(
              "%s ERROR: read %d bytes from USB peripheral device info file %s - expected %d\n",
              __FUNCTION__, bytes_read, file_stat.st_size);
        }

        close(file_handle);
      }
      else
      {
        log_err(
            "%s ERROR: Could not open %s to read USB peripheral device info\n",
            __FUNCTION__, full_filename);
      }

      free(file_data);
    }
    else
    {
      log_err(
          "%s ERROR: Could not malloc %d bytes to read USB peripheral device info from %s\n",
          __FUNCTION__, file_stat.st_size, full_filename);
    }
  }
  else
  {
    log_err("%s ERROR: Could not stat %s to read USB peripheral device info\n",
            __FUNCTION__, full_filename);
  }

}


void getUSBPeripheralInfo(usb_peripheral_info_t *info)
{
  DIR *periph_file_dir;
  struct dirent *periph_file;

  if (info == NULL)
    return;

  memset((void*) info, 0, sizeof(usb_peripheral_info_t));

  /* Search for .cfg files in the Peripheral Device Info directory */
  if ((periph_file_dir = opendir(USB_PERIPH_DEVICE_INFO_DIRECTORY)) == NULL)
  {
    log_err("%s: Can't open %s to search for USB peripheral\n", __FUNCTION__,
            USB_PERIPH_DEVICE_INFO_DIRECTORY);
  }
  else
  {
    dbg_msg("%s: Searching %s folder for USB peripheral info files\n",
            __FUNCTION__, USB_PERIPH_DEVICE_INFO_DIRECTORY);

    while ((periph_file = readdir(periph_file_dir)) != NULL)
    {
      if (strcasestr(periph_file->d_name, ".cfg"))
      {
        readUSBPeripheralCfg(info, periph_file->d_name);
      }
    }

    closedir(periph_file_dir);
  }

#ifdef USB_PERIPH_TESTING
    {
        usb_peripheral_info_t test_copy = usb_test_data;
        DumpPeripherals("Before: ", &test_copy);
        sortPeripheralDeviceList(&test_copy);
        DumpPeripherals("Sorted: ", &test_copy);
        cleanPeripheralDeviceList(&test_copy);
        DumpPeripherals("Duplicates removed: ", &test_copy);
    }

  // we need to clean up this data
  // first sort the list
  if (info->num_peripheral_devices > 1)
  {
    sortPeripheralDeviceList(info);
    cleanPeripheralDeviceList(info);
  }
#endif
}

#endif


#ifdef Mx2
int isVRKInstalled(void)
{
  int result = CHECK_VRKPUBKEY_FILE_ERROR;
  struct keyRecords key_recodes;

  key_recodes = security_getKeys(RKL_KEYS);

  dbg_msg("%s:keys_counts: %d status: %d\n", __FUNCTION__,
      key_recodes.keys_count, key_recodes.keys->status);

  if ((key_recodes.keys->status == SECURITY_NO_KEYS_RKL)
      || (key_recodes.keys->status == SECURITY_PRIVATE_KEY_RKL))
  {
    log_err("%s: NO VRK Public key\n", __FUNCTION__);
    result = CHECK_VRKPUBKEY_FILE_NOT_FOUND;
  }
  else if (key_recodes.keys->status != BOTH_KEYS_RKL)
  {
    log_err("%s: NO VRK Private key\n", __FUNCTION__);
    result = CHECK_ONLY_VRKPUBKEY_FILE_FOUND;
  }
  else
  {
    dbg_msg("%s: Both VRK found\n", __FUNCTION__);
    result = CHECK_VRKPUBKEY_FILE_FOUND;
  }

  return result;
}
#endif

bool getManfactureDate(char *manufacture_date_string, int buf_size)
{
  bool result = FALSE;
#if defined(Mx2)
  PI_mib_mfg_date_time_st mib_mfg_date_time;
  int err_code;
  unsigned long read_size;

  if (manufacture_date_string == NULL || buf_size < 16)
  {
    log_err("%s: input error- 0x%08x %d\n", __FUNCTION__,
            manufacture_date_string, buf_size);
    return result;
  }

  memset(&mib_mfg_date_time, 0, sizeof(PI_mib_mfg_date_time_st));
  memset(manufacture_date_string, 0, buf_size);

  err_code = platforminfo_get(PI_MIB_MFG_DATE_TIME, (void*) &mib_mfg_date_time,
                              sizeof(PI_mib_mfg_date_time_st), &read_size);

  dbg_msg("%s: platforminfo_get with PI_MIB_MFG_DATE_TIME return:%s\n",
          __FUNCTION__, PI_ERR_TO_TXT(err_code));

  if (err_code != PI_OK)
  {
    return result;
  }
  else
  {
    sprintf(manufacture_date_string, "%04d/%02d/%02d", mib_mfg_date_time.year,
            mib_mfg_date_time.month, mib_mfg_date_time.day);
    result = TRUE;
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: manufacture date:%s\n", __FUNCTION__,
             manufacture_date_string);
  }
#endif
  return result;
}

char* os_basename(const char *path)
{
  char *s = strrchr(path, '/');
  if (s == NULL)
  {
    return ((char*) path);
  }
  else
  {
    return (s + 1);
  }
}

#define MAX_CRASH_CLEANUP_STACK_ENTRIES 10
static void (*crash_cleanup_stack[MAX_CRASH_CLEANUP_STACK_ENTRIES])() =
{ NULL };


  void crash_cleanup_push(void (*routine)())
  {
    int i;
    for (i = 0; i < MAX_CRASH_CLEANUP_STACK_ENTRIES; i++)
    {
      if (crash_cleanup_stack[i] == NULL)
      {
        crash_cleanup_stack[i] = routine;
        return;
      }
    }
    dbg_msg("%s: stack of callbacks is full\n", __FUNCTION__);
  }


  void crash_cleanup_pop(int execute)
  {
    int i;
    for (i = MAX_CRASH_CLEANUP_STACK_ENTRIES - 1; i >= 0; i--)
    {
      if (crash_cleanup_stack[i] != NULL)
      {
        if (execute)
          (*crash_cleanup_stack[i])();
        crash_cleanup_stack[i] = NULL;
        return;
      }
    }
    dbg_err("%s: stack of callbacks is empty\n", __FUNCTION__);
  }


  void crash_cleanup_popall()
  {
    int i;
    for (i = MAX_CRASH_CLEANUP_STACK_ENTRIES - 1; i >= 0; i--)
    {
      if (crash_cleanup_stack[i] != NULL)
      {
        log_err("%s: invoke crash clean-up callback\n", __FUNCTION__);
        (*crash_cleanup_stack[i])();
        crash_cleanup_stack[i] = NULL;
      }
    }
  }

#ifdef _VOS2

  bool getDTname(char *buf, int buf_size)
  {
    bool ret = FALSE;
    FILE *dtnamefile;

    if (!buf || !buf_size)
    {
      log_err("%s: incorrect input data\n", __FUNCTION__);
      return ret;
    }

    dtnamefile = fopen("/proc/device-tree/dt-name", "r");

    if (!dtnamefile)
    {
      log_err("%s: unable to open /proc/device-tree/dt-name, errno = %s (%d)\n",
              __FUNCTION__, strerror(errno), errno);
      return ret;
    }

    if (fgets(buf, buf_size, dtnamefile) != NULL)
    {
      dbg_msg("%s: obtained dtname: %s\n", __FUNCTION__, buf);
      ret = TRUE;
    }

    fclose(dtnamefile);
    return ret;
  }
#endif

  uint32 GetParamUpdateFileNum(void)
  {
    int i;
    int num_files;
    uint32 ret_val = 1;
    uint32 temp_file_num = 0;
    struct dirent **filenamelist;

    dbg_msg("%s: ENTER\n", __FUNCTION__);

    /* Read the files in alphabetical order since the failed messages should be stored in alphabetical order */
    num_files = scandir(VHQ_MAIN_FOLDER, &filenamelist, NULL, alphasort);
    if (num_files < 0)
    {
      log_err(
          "%s: Can't open %s to search for parameter update files (error = %s - $%d)\n",
          __FUNCTION__, VHQ_MAIN_FOLDER, strerror(errno), errno);
      return ret_val;
    }

    {
      uint32 event_mask = 0;

      if (VHQGetParameterUint32(PARAM_ALERT_MASK, &event_mask,
          DEFAULT_BASE) == FALSE)
      {
        log_err("%s: PARAM_ALERT_MASK read error\n", __FUNCTION__);
        ret_val = 0; /* If config not found in INI, return 0 */
        dbg_msg("%s: Returning %d\n", __FUNCTION__, ret_val);

        return ret_val;
      }

      /*
       * If PARAM_ALERT_MASK is not set we always return 1
       * So that we can avoid creation of lot of param_update_N files where,
       * N being integer suffix
       * This check ensures that if event is not enabled, we always write to
       * param_update_1 file
       */
      if ((event_mask & EVENT_APP_PARAM_UPDATE) == 0)
      {
        dbg_msg("%s: Returning %d\n", __FUNCTION__, ret_val);

        return ret_val;
      }
    }

    for (i = 0; i < num_files; i++)
    {
      char *fname_start;

      /* See if this is a payload file */
//DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Read file %s from %s\n", __FUNCTION__, filenamelist[i]->d_name, VHQ_MAIN_FOLDER);
      fname_start = strstr(filenamelist[i]->d_name, "param_update_");
      if (fname_start)
      {
        dbg_msg("%s: Found %s - reading file number\n", __FUNCTION__,
                filenamelist[i]->d_name);
        if (sscanf(fname_start, "param_update_%u", &temp_file_num) == 1)
        {
          if (temp_file_num >= ret_val)
          {
            ret_val = temp_file_num + 1;
            dbg_msg("%s: Found %s - ret_val set to %d\n", __FUNCTION__,
                    filenamelist[i]->d_name, ret_val);
          }
        }
      }
    }

    /* Cleanup the scandir mallocs */
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing filenamelist @ 0x%08x\n", __FUNCTION__, filenamelist);
    if (filenamelist != NULL)
    {
      for (i = 0; i < num_files; i++)
      {
        if (filenamelist[i] != NULL)
        {
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing filenamelist[%d] @ 0x%08x\n", __FUNCTION__, filenamelist[i]);
          free(filenamelist[i]);
        }
      }
      free(filenamelist);
    }

    dbg_msg("%s: Returning %d\n", __FUNCTION__, ret_val);

    return ret_val;
  }

  static struct dirent **param_file_search_filenamelist = NULL;
  static int num_param_file_search_files = 0;


  void ResetParamUpdateFileSearch(void)
  {
    int i;

    /* Cleanup the scandir mallocs */
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing param_file_search_filenamelist @ 0x%08x\n", __FUNCTION__, param_file_search_filenamelist);
    if (param_file_search_filenamelist != NULL)
    {
      for (i = 0; i < num_param_file_search_files; i++)
      {
        if (param_file_search_filenamelist[i] != NULL)
        {
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing param_file_search_filenamelist[%d] @ 0x%08x\n", __FUNCTION__, param_file_search_filenamelist[i]);
          free(param_file_search_filenamelist[i]);
          param_file_search_filenamelist[i] = NULL;
        }
      }
      free(param_file_search_filenamelist);
      param_file_search_filenamelist = NULL;
    }

    num_param_file_search_files = 0;
    dbg_msg("%s: Returning\n", __FUNCTION__);
    return;
  }


  char* GetNextParamUpdateFile(char *cur_file_name)
  {
    int i;
    static char ret_val[PATH_MAX];

    dbg_msg("%s: ENTER (cur_file_name = %s)\n", __FUNCTION__,
            cur_file_name ? cur_file_name : "NULL");

    /* Read the files in alphabetical order since the failed messages should be stored in alphabetical order */
    if (param_file_search_filenamelist == NULL)
    {
      num_param_file_search_files = scandir(VHQ_MAIN_FOLDER,
                                            &param_file_search_filenamelist,
                                            NULL,
                                            alphasort);
    }

    if ((num_param_file_search_files < 0)
        || (param_file_search_filenamelist == NULL))
    {
      log_err(
          "%s: Can't open %s to search for failed parameter update files (error = %s - $%d)\n",
          __FUNCTION__, VHQ_MAIN_FOLDER, strerror(errno), errno);
      return NULL;
    }

    if ((cur_file_name == NULL) && (num_param_file_search_files > 0))
    {
      dbg_msg("%s: Finding first param_update file\n", __FUNCTION__);
      for (i = 0; i < num_param_file_search_files; i++)
      {
        dbg_msg("%s: Checking if '%s' is a param_update file\n", __FUNCTION__,
                param_file_search_filenamelist[i]->d_name);
        if (strstr(param_file_search_filenamelist[i]->d_name, "param_update_"))
        {
          snprintf(ret_val, sizeof(ret_val), "%s%s", VHQ_MAIN_FOLDER,
                   param_file_search_filenamelist[i]->d_name);
          log_dbg("%s: '%s' is a param_update file - returning %s\n",
                  __FUNCTION__, param_file_search_filenamelist[i]->d_name,
                  ret_val);
          return ret_val;
        }
      }
      return NULL;
    }

    for (i = 0; i < num_param_file_search_files; i++)
    {
      char temp_cur_file[PATH_MAX];

      snprintf(temp_cur_file, sizeof(temp_cur_file), "%s", cur_file_name);
      char *cur_file_base = os_basename(temp_cur_file);
      dbg_msg(
          "%s: Finding '%s' first to continue search - filenamelist[%d] = %s\n",
          __FUNCTION__, cur_file_base, i,
          param_file_search_filenamelist[i]->d_name);
      if (strcmp(param_file_search_filenamelist[i]->d_name, cur_file_base) == 0)
      {
        int j;
        dbg_msg("%s: Found '%s' in slot %d - continuing search\n", __FUNCTION__,
                param_file_search_filenamelist[i]->d_name, i);
        for (j = i + 1; j < num_param_file_search_files; j++)
        {
          dbg_msg("%s: Checking if '%s' is a param_update file\n", __FUNCTION__,
                  param_file_search_filenamelist[j]->d_name);
          if (strstr(param_file_search_filenamelist[j]->d_name,
                     "param_update_"))
          {
            snprintf(ret_val, sizeof(ret_val), "%s%s", VHQ_MAIN_FOLDER,
                     param_file_search_filenamelist[j]->d_name);
            log_dbg("%s: '%s' is the next param_update file - returning %s\n",
                    __FUNCTION__, param_file_search_filenamelist[j]->d_name,
                    ret_val);
            return ret_val;
          }
        }
      }
    }

    log_dbg("%s: no more param_update files found - returning NULL\n",
            __FUNCTION__);
    return NULL;
  }

  bool is_temp_dl_file(char *fn)
  {
    int i;
    int tmp_comm_id;
    int tmp_msg_id;
    int periods_found = 0;
    int num_items_scanned;
    char *fn_extensions_ptr;
    bool partial_file = FALSE;
    char tmp_op_id[64] = { 0 };

    if (strstr(fn, "vhq_fail_payload.") != NULL)
    {
      dbg_msg(
          "%s: FAILED Payload file %s is not a temp dl file - returning FALSE\n",
          __FUNCTION__, fn);
      return FALSE;
    }

    if (strstr(fn, ORIGINAL_SAVE_FILE_EXTENSION) != NULL)
    {
      dbg_msg(
          "%s: Original content file %s is not a temp dl file - returning FALSE\n",
          __FUNCTION__, fn);
      return FALSE;
    }

    if (strstr(fn, PARTIAL_FILE_EXTENSION) != NULL)
    {
      dbg_msg("%s: This IS a partial download file\n", __FUNCTION__);
      partial_file = TRUE;
    }

    for (i = (strlen(fn) - 1); i >= 0; i--)
    {
      if (fn[i] == '.')
        periods_found++;

      if (partial_file)
      {
        if (periods_found == 4)
          break;
      }
      else
      {
        if (periods_found == 3)
          break;
      }
    }

    if (((partial_file) && (periods_found != 4))
        || ((!partial_file) && (periods_found != 3)))
    {
      return FALSE;
    }

    fn_extensions_ptr = &fn[i];

    if (partial_file)
      num_items_scanned = sscanf(fn_extensions_ptr, ".%d.%d.%[^.].",
                                 &tmp_comm_id, &tmp_msg_id, tmp_op_id);
    else
      num_items_scanned = sscanf(fn_extensions_ptr, ".%d.%d.%s", &tmp_comm_id,
                                 &tmp_msg_id, tmp_op_id);

    if (num_items_scanned == 3)
    {
      dbg_msg(
          "%s: File %s is a download file (num_test_scanned = %d, comm_id = %d, msg_id = %d, op_id = %s) - returning TRUE\n",
          __FUNCTION__, fn, num_items_scanned, tmp_comm_id, tmp_msg_id,
          tmp_op_id);
      return TRUE;
    }

    return FALSE;
  }

  void RemoveFailedMessages(void)
  {
    int i;
    int num_files;
    struct dirent **filenamelist;

    /* Read the files in alphabetical order since the failed messages should be stored in alphabetical order */
    num_files = scandir(VHQ_MAIN_FOLDER, &filenamelist, NULL, alphasort);
    if (num_files < 0)
    {
      return;
    }

    for (i = 0; i < num_files; i++)
    {
      /* See if this is a payload file */
      if (strstr(filenamelist[i]->d_name, "vhq_fail_payload."))
      {
        char payloadFullName[256];
        struct stat payloadFileStat;

        sprintf(payloadFullName, "%s%s", VHQ_MAIN_FOLDER,
                filenamelist[i]->d_name);
        dbg_msg("%s: removing %s\n",
                __FUNCTION__, filenamelist[i]->d_name);
        remove(payloadFullName);\
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
  }
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
