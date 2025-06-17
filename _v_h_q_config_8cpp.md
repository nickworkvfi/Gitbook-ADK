---
title: tmsagt/src/VHQConfig/VHQConfig.cpp

---

# tmsagt/src/VHQConfig/VHQConfig.cpp

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[CreateDefaultConfigFile](_v_h_q_config_8cpp.md#function-createdefaultconfigfile)**()<br>Creates config file with default settings from the included table.  |
| void | **[SyncIniCfgWithInfoSvc](_v_h_q_config_8cpp.md#function-syncinicfgwithinfosvc)**(sync_master_t master) |
| void | **[VHQUpdateConfig](_v_h_q_config_8cpp.md#function-vhqupdateconfig)**(void ) |
| void | **[setSvcDBLock](_v_h_q_config_8cpp.md#function-setsvcdblock)**() |
| void | **[setSvcDBUnLock](_v_h_q_config_8cpp.md#function-setsvcdbunlock)**() |
| bool | **[iniparser_save](_v_h_q_config_8cpp.md#function-iniparser-save)**(char * pszFile, bool sem_locked) |
| bool | **[update_crc](_v_h_q_config_8cpp.md#function-update-crc)**(char * pszFilename, char * pszCrcFile)<br>update CRC file  |
| int | **[iniparser_setstr](_v_h_q_config_8cpp.md#function-iniparser-setstr)**(dictionary * ini, char * entry, char * val) |
| void | **[VHQWaitSemaphore](_v_h_q_config_8cpp.md#function-vhqwaitsemaphore)**() |
| void | **[VHQUnlockSemaphore](_v_h_q_config_8cpp.md#function-vhqunlocksemaphore)**() |
| void | **[CopyFileToInstance](_v_h_q_config_8cpp.md#function-copyfiletoinstance)**(char * fileName, char * instanceName) |
| vhq_result_t | **[LockInstanceSemaphore](_v_h_q_config_8cpp.md#function-lockinstancesemaphore)**() |
| vhq_result_t | **[TestInstanceSemaphore](_v_h_q_config_8cpp.md#function-testinstancesemaphore)**() |
| vhq_result_t | **[WaitInstanceSemaphore](_v_h_q_config_8cpp.md#function-waitinstancesemaphore)**(int mlSecTimeout) |
| vhq_result_t | **[UnlockInstanceSemaphore](_v_h_q_config_8cpp.md#function-unlockinstancesemaphore)**(char * originalInstance) |
| void | **[UpdateLocalMW](_v_h_q_config_8cpp.md#function-updatelocalmw)**(void ) |
| void | **[UpdateLoggingLevel](_v_h_q_config_8cpp.md#function-updatelogginglevel)**(void ) |
| bool | **[_VHQGetParameterBool](_v_h_q_config_8cpp.md#function--vhqgetparameterbool)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, bool * pbData) |
| bool | **[_VHQSetParameterBool](_v_h_q_config_8cpp.md#function--vhqsetparameterbool)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, bool bData, bool bSaveNow) |
| bool | **[_VHQGetParameterUint32](_v_h_q_config_8cpp.md#function--vhqgetparameteruint32)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, uint32 * pdwData, int base) |
| bool | **[_VHQSetParameterUint32](_v_h_q_config_8cpp.md#function--vhqsetparameteruint32)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, uint32 dwData, bool bSaveNow) |
| bool | **[_VHQGetParameterString](_v_h_q_config_8cpp.md#function--vhqgetparameterstring)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, char * pData, uint32 ui32Size) |
| bool | **[_VHQSetParameterString](_v_h_q_config_8cpp.md#function--vhqsetparameterstring)**(const char * FUNC, const unsigned int LINE, uint32 ui32ParameterID, char * pData, uint32 ui32Size, bool bSaveNow) |
| int | **[VHQGetParameter](_v_h_q_config_8cpp.md#function-vhqgetparameter)**(char * pSection, char * pParam, char * pData, uint32 pDataSize) |
| bool | **[VHQGetNameInfo](_v_h_q_config_8cpp.md#function-vhqgetnameinfo)**(char * pName, char * pSection, uint32 * pui32ParameterID, uint32 * pui32ParameterType) |
| bool | **[VerifyFilePermissions](_v_h_q_config_8cpp.md#function-verifyfilepermissions)**(char * pszConfigFile) |
| bool | **[IsSameFile](_v_h_q_config_8cpp.md#function-issamefile)**(const char * file1, const char * file2) |
| bool | **[IsMaintenanceDay](_v_h_q_config_8cpp.md#function-ismaintenanceday)**(int w_day, int m_day)<br>checks to see if requested day is in the list of maintenance days  |
| time_t | **[getMWStart](_v_h_q_config_8cpp.md#function-getmwstart)**(time_t check_time)<br>determinate beginning of MW window regarding to given time  |
| time_t | **[getCurrentMWStart](_v_h_q_config_8cpp.md#function-getcurrentmwstart)**(time_t check_time)<br>determinate beginning of MW window regarding to given time  |
| time_t | **[getNextMWStart](_v_h_q_config_8cpp.md#function-getnextmwstart)**(time_t Time, time_t expiry_time) |
| bool | **[IsInMaintenanceWindow](_v_h_q_config_8cpp.md#function-isinmaintenancewindow)**(time_t Time, bool * MWIsAllDay)<br>checks to see if requested time is in the mainanence window.Time is in UTC, times in config file are local, and tzset for platform.  |
| uint32 | **[VHQRunTimeForDownload](_v_h_q_config_8cpp.md#function-vhqruntimefordownload)**(time_t expiry_time, time_t run_time, uint8 timer_type) |
| int | **[GetSecondsToNextHeartbeat](_v_h_q_config_8cpp.md#function-getsecondstonextheartbeat)**(uint32 hb_rate)<br>checks to see if the heartbeat rate would always fall in the maintenance window  |
| int | **[VHQDataAccessCB](_v_h_q_config_8cpp.md#function-vhqdataaccesscb)**(char * paramName, char * paramValue, size_t paramValueLen) |
| bool | **[VHQMergeConfigFile](_v_h_q_config_8cpp.md#function-vhqmergeconfigfile)**(char * pszConfigFile, CALLBACK_INI_EVENT pfnIniCallback) |
| bool | **[VHQDeleteUnusedConfigItem](_v_h_q_config_8cpp.md#function-vhqdeleteunusedconfigitem)**(void ) |
| bool | **[CheckVHQConfigUpdateDefaults](_v_h_q_config_8cpp.md#function-checkvhqconfigupdatedefaults)**(bool processUpdateFiles, bool * defaultConfig) |
| void | **[VHQConfigUpdateAddMissingDefaults](_v_h_q_config_8cpp.md#function-vhqconfigupdateaddmissingdefaults)**(bool processUpdateFiles) |
| bool | **[CheckAndRepairCorruptINI](_v_h_q_config_8cpp.md#function-checkandrepaircorruptini)**(char * pszConfigFile) |
| void | **[RestoreDefaultCerts](_v_h_q_config_8cpp.md#function-restoredefaultcerts)**()<br>When going back to default config file, we need to revert to the default (VHQ production server) certificates as well so that the device can still communicate with a VHQ server to be restored.  |
| bool | **[VHQLoadConfigDataFromIni](_v_h_q_config_8cpp.md#function-vhqloadconfigdatafromini)**(bool processUpdateFiles, CALLBACK_INI_EVENT pfnIniCallback) |
| bool | **[VHQLoadConfigData](_v_h_q_config_8cpp.md#function-vhqloadconfigdata)**(bool processUpdateFiles, CALLBACK_INI_EVENT pfnIniCallback) |
| vhq_logging_level_t | **[GetLoggingLevel](_v_h_q_config_8cpp.md#function-getlogginglevel)**(void ) |
| uint32 | **[GetLogSize](_v_h_q_config_8cpp.md#function-getlogsize)**(void ) |
| void | **[InstanceRebootEventRequired](_v_h_q_config_8cpp.md#function-instancerebooteventrequired)**(bool sendReboot) |
| device_id_backup_source_t | **[GetDeviceIdBackupSource](_v_h_q_config_8cpp.md#function-getdeviceidbackupsource)**(bool DIDReqdForKeyExch) |
| uint32 | **[VHQConfigGetTimeInterval](_v_h_q_config_8cpp.md#function-vhqconfiggettimeinterval)**(uint32 ui32ParameterID, uint32 * pdwData) |
| char * | **[GetCurrentInstance](_v_h_q_config_8cpp.md#function-getcurrentinstance)**(void ) |
| void | **[VHQReloadConfigData](_v_h_q_config_8cpp.md#function-vhqreloadconfigdata)**(bool syncInfoSvcFirst, bool processUpdateFiles) |
| vhq_result_t | **[DeleteAllInstanceFiles](_v_h_q_config_8cpp.md#function-deleteallinstancefiles)**() |
| vhq_result_t | **[TestLockServerInstance](_v_h_q_config_8cpp.md#function-testlockserverinstance)**(char * serverInstance) |
| vhq_result_t | **[LockServerInstance](_v_h_q_config_8cpp.md#function-lockserverinstance)**(char * serverInstance, int mlsecTimeout, char * currentInstance) |
| vhq_result_t | **[ReleaseServerInstanceLock](_v_h_q_config_8cpp.md#function-releaseserverinstancelock)**(char * originalInstance) |
| vhq_result_t | **[DeleteServerInstance](_v_h_q_config_8cpp.md#function-deleteserverinstance)**(char * deleteInstance, bool force_delete) |
| void | **[GetFileNameForInstance](_v_h_q_config_8cpp.md#function-getfilenameforinstance)**(char * InstanceFileName, char * OrigFileName, const char * InstanceName) |
| param_file_reporting_t | **[GetParamFileReportingType](_v_h_q_config_8cpp.md#function-getparamfilereportingtype)**() |
| void | **[GetServerInstanceList](_v_h_q_config_8cpp.md#function-getserverinstancelist)**(char *** ServerInstances, int * numInstances) |
| void | **[CleanupServerInstanceList](_v_h_q_config_8cpp.md#function-cleanupserverinstancelist)**(char *** ServerInstances, int numInstances) |
| void | **[GetInstanceFromFilename](_v_h_q_config_8cpp.md#function-getinstancefromfilename)**(char * filename, char * InstanceName, int InstanceNameSize) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[configMutex](_v_h_q_config_8cpp.md#variable-configmutex)**  |
| pthread_mutex_t | **[instanceMutex](_v_h_q_config_8cpp.md#variable-instancemutex)**  |
| bool | **[bInstance_rebootEvent](_v_h_q_config_8cpp.md#variable-binstance-rebootevent)**  |
| vhq_logging_level_t | **[loc_logging_level](_v_h_q_config_8cpp.md#variable-loc-logging-level)**  |
| uint32 | **[loc_log_file_size](_v_h_q_config_8cpp.md#variable-loc-log-file-size)**  |
| bool | **[initial_keyexchange](_v_h_q_config_8cpp.md#variable-initial-keyexchange)**  |
| MAINT_WINDOW_T | **[maint_schedule](_v_h_q_config_8cpp.md#variable-maint-schedule)**  |
| dictionary * | **[g_pParameters](_v_h_q_config_8cpp.md#variable-g-pparameters)**  |
| int | **[server_lock_count](_v_h_q_config_8cpp.md#variable-server-lock-count)**  |
| char[256] | **[restore_instance](_v_h_q_config_8cpp.md#variable-restore-instance)**  |
| const int | **[ciNumParams](_v_h_q_config_8cpp.md#variable-cinumparams)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INFO_SVC_NODE_NAME_CONV](_v_h_q_config_8cpp.md#define-info-svc-node-name-conv)**(a, b, c)  |
|  | **[GET_NODE](_v_h_q_config_8cpp.md#define-get-node)**(a, b)  |
|  | **[infosvc_setval](_v_h_q_config_8cpp.md#define-infosvc-setval)**(a, b, c, d, e)  |
|  | **[GetInfoSvcDBLock](_v_h_q_config_8cpp.md#define-getinfosvcdblock)**()  |
|  | **[ReleaseInfoSvcDBLock](_v_h_q_config_8cpp.md#define-releaseinfosvcdblock)**()  |
|  | **[ASCIILINESZ](_v_h_q_config_8cpp.md#define-asciilinesz)**  |
|  | **[VHQ_INI_FILE_BACKUP_EXTENSION](_v_h_q_config_8cpp.md#define-vhq-ini-file-backup-extension)**  |
|  | **[MAX_FILE_SIZE_COMPARE](_v_h_q_config_8cpp.md#define-max-file-size-compare)**  |

## Detailed Description


Some utility functions shared between platforms 


## Functions Documentation

### function CreateDefaultConfigFile

```cpp
static void CreateDefaultConfigFile()
```

Creates config file with default settings from the included table. 

Note: assumes caller has the mutex already 


### function SyncIniCfgWithInfoSvc

```cpp
static void SyncIniCfgWithInfoSvc(
    sync_master_t master
)
```


### function VHQUpdateConfig

```cpp
static void VHQUpdateConfig(
    void 
)
```


This function updates config files from config or sys6 flash 


### function setSvcDBLock

```cpp
void setSvcDBLock()
```


### function setSvcDBUnLock

```cpp
void setSvcDBUnLock()
```


### function iniparser_save

```cpp
static bool iniparser_save(
    char * pszFile,
    bool sem_locked
)
```


**Parameters**: 

  * **pszFile** file to save current config settings to. 
  * **sem_locked** : TRUE, if sem locked.


**Return**: TRUE if file successfully saved/written, FALSE otherwise presumed if the file can be opened for writing, it will all succeed. This may not be a good assumption. 

This function save current ini file. 


### function update_crc

```cpp
static bool update_crc(
    char * pszFilename,
    char * pszCrcFile
)
```

update CRC file 

**Parameters**: 

  * **pszFilename** file to generate CRC for 
  * **pszCrcFile** file to write CRC to 


**Return**: TRUE: success in writing CRC file, FALSE otherwise 

### function iniparser_setstr

```cpp
int iniparser_setstr(
    dictionary * ini,
    char * entry,
    char * val
)
```


### function VHQWaitSemaphore

```cpp
static void VHQWaitSemaphore()
```


### function VHQUnlockSemaphore

```cpp
static void VHQUnlockSemaphore()
```


### function CopyFileToInstance

```cpp
static void CopyFileToInstance(
    char * fileName,
    char * instanceName
)
```


### function LockInstanceSemaphore

```cpp
static vhq_result_t LockInstanceSemaphore()
```


**Return**: vhq_result_t, VHQ_SUCCESS if success. 

This function tries to lock the server instance. 


### function TestInstanceSemaphore

```cpp
static vhq_result_t TestInstanceSemaphore()
```


### function WaitInstanceSemaphore

```cpp
static vhq_result_t WaitInstanceSemaphore(
    int mlSecTimeout
)
```


**Parameters**: 

  * **mlSecTimeout** = timeout to wait for, for locking. 


**Return**: vhq_result_t, VHQ_SUCCESS if success. 

This function tries to lock the server instance by waiting for a timeout if given. 


### function UnlockInstanceSemaphore

```cpp
static vhq_result_t UnlockInstanceSemaphore(
    char * originalInstance
)
```


**Parameters**: 

  * **originalInstance** = server instance to unlock. 


**Return**: vhq_result_t, VHQ_SUCCESS if success. 

This function tries to unlock the server instance. 


### function UpdateLocalMW

```cpp
static void UpdateLocalMW(
    void 
)
```


**Return**: void 

This function updates the local maintenance window with values according to config file loaded.


### function UpdateLoggingLevel

```cpp
static void UpdateLoggingLevel(
    void 
)
```


**Return**: void 

This function updates the logging level with values according to config file loaded.


### function _VHQGetParameterBool

```cpp
bool _VHQGetParameterBool(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    bool * pbData
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **pbData** : buffer to save returned parameter


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This function get a bool type ini parameter value 


### function _VHQSetParameterBool

```cpp
bool _VHQSetParameterBool(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    bool bData,
    bool bSaveNow
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **bData** : bool to save returned parameter 
  * **bSaveNow** : if true, flushed contents of in memory ini file copy to flash storage


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This is setter function for boolean ini file parameters 


### function _VHQGetParameterUint32

```cpp
bool _VHQGetParameterUint32(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    uint32 * pdwData,
    int base
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **pdwData** : buffer to save returned parameter 
  * **base** : base


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This function is getter function for unsigned int ini file parameters 


### function _VHQSetParameterUint32

```cpp
bool _VHQSetParameterUint32(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    uint32 dwData,
    bool bSaveNow
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **dwData** : buffer to save returned parameter 
  * **bSaveNow** : if true, flushed contents of in memory inifile copy to flash storage


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This function is the setter function for unsigned int ini file parameters. 


### function _VHQGetParameterString

```cpp
bool _VHQGetParameterString(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    char * pData,
    uint32 ui32Size
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **pData** : buffer to save returned parameter 
  * **ui32Size** size of string buffer


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This function is the getter function for string based ini file parameters 


### function _VHQSetParameterString

```cpp
bool _VHQSetParameterString(
    const char * FUNC,
    const unsigned int LINE,
    uint32 ui32ParameterID,
    char * pData,
    uint32 ui32Size,
    bool bSaveNow
)
```


**Parameters**: 

  * **FUNC** : function name 
  * **LINE** : line number 
  * **ui32ParameterID** : parameter ID to fetch the value for 
  * **pData** : buffer to save returned parameter 
  * **ui32Size** : size of string buffer 
  * **bSaveNow** : if true, flushed contents of in memory ini file copy to flash storage


**Return**: TRUE indicates parameter found, FALSE indicates unknown parameter 

This function is the setter function for string based ini file parameters 


### function VHQGetParameter

```cpp
int VHQGetParameter(
    char * pSection,
    char * pParam,
    char * pData,
    uint32 pDataSize
)
```


**Parameters**: 

  * **pSection** INI file section 
  * **pParam** parameter name 
  * **pData** buffer to save returned parameter 
  * **pDataSize** size of string buffer


**Return**: 

  * TMS_STATUS_SUCCESS indicates parameter found 
  * TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST indicates unknown parameter 
  * TMS_STATUS_ERROR indicates the parameter was found, but unable to be read 


Gets parameter value by section and parameter as a string. 


### function VHQGetNameInfo

```cpp
bool VHQGetNameInfo(
    char * pName,
    char * pSection,
    uint32 * pui32ParameterID,
    uint32 * pui32ParameterType
)
```


**Parameters**: 

  * **pName** : name of parameter to look up 
  * **pSection** : section name for parameter 
  * **pui32ParameterID** : parameter ID 
  * **pui32ParameterType** : parameter type


**Return**: TRUE indicates parameter found 

This function is the getter function for details about a requested parameter 


### function VerifyFilePermissions

```cpp
bool VerifyFilePermissions(
    char * pszConfigFile
)
```


**Parameters**: 

  * **pszConfigFile** - config file name 


**Return**: TRUE if the permissions seem correct, FALSE if not 

This function verifies the agent has permissions to the file. 


### function IsSameFile

```cpp
static bool IsSameFile(
    const char * file1,
    const char * file2
)
```


**Parameters**: 

  * **file1** = filename 
  * **file2** = filename


**Return**: TRUE, if same 

This function compares and checks if the files are same or not. 


### function IsMaintenanceDay

```cpp
static bool IsMaintenanceDay(
    int w_day,
    int m_day
)
```

checks to see if requested day is in the list of maintenance days 

**Parameters**: 

  * **w_day** - # of days since sunday, as typically returned in sturct *tm returning time functions 


**Return**: None 

### function getMWStart

```cpp
static time_t getMWStart(
    time_t check_time
)
```

determinate beginning of MW window regarding to given time 

**Return**: time stamp in seconds when MW begins 

### function getCurrentMWStart

```cpp
static time_t getCurrentMWStart(
    time_t check_time
)
```

determinate beginning of MW window regarding to given time 

**Return**: time stamp in seconds when MW begins 

### function getNextMWStart

```cpp
static time_t getNextMWStart(
    time_t Time,
    time_t expiry_time
)
```


### function IsInMaintenanceWindow

```cpp
bool IsInMaintenanceWindow(
    time_t Time,
    bool * MWIsAllDay
)
```

checks to see if requested time is in the mainanence window.Time is in UTC, times in config file are local, and tzset for platform. 

**Parameters**: 

  * **Time** - time to check 
  * **MWIsAllDay** - optional flag passed to this function - will get set to true if the MW is 24 hours 


**Return**: 

  * TRUE = in maintanence window 
  * FALSE = not in maintenance window, or error 


### function VHQRunTimeForDownload

```cpp
uint32 VHQRunTimeForDownload(
    time_t expiry_time,
    time_t run_time,
    uint8 timer_type
)
```


**Parameters**: 

  * **expiry_time** = download expiry time 
  * **runtime** = current runtime of the download 
  * **timer_type** = RTC or Date/time


**Return**: new run time. 

This function returns a random time to perform download. 


### function GetSecondsToNextHeartbeat

```cpp
int GetSecondsToNextHeartbeat(
    uint32 hb_rate
)
```

checks to see if the heartbeat rate would always fall in the maintenance window 

**Parameters**: 

  * **hb_rate** - frequency in seconds of the heartbeat 


**Return**: seconds to next heatrbeat to perform at least one inside of maintenance window '0' means that HB can be scheduled any time, since we always will have at least one inside of maintenance window 

### function VHQDataAccessCB

```cpp
int VHQDataAccessCB(
    char * paramName,
    char * paramValue,
    size_t paramValueLen
)
```


### function VHQMergeConfigFile

```cpp
bool VHQMergeConfigFile(
    char * pszConfigFile,
    CALLBACK_INI_EVENT pfnIniCallback
)
```


**Parameters**: 

  * **pszConfigFile** = config file name 
  * **pfnIniCallback** = ini callback 


This function merges data from the Usr config file into the current INI file Assumes the caller has allocated the config mutex, or that we're called when we're the only thread. 


### function VHQDeleteUnusedConfigItem

```cpp
static bool VHQDeleteUnusedConfigItem(
    void 
)
```


**Return**: TRUE, if unused item deleted. 

This functin delete unused item in current VHQ.ini file.This function compare asParams table and VHQ.ini file and if item in VHQ.ini is not in param table consider as obsulte item and delete it.


### function CheckVHQConfigUpdateDefaults

```cpp
static bool CheckVHQConfigUpdateDefaults(
    bool processUpdateFiles,
    bool * defaultConfig
)
```


**Parameters**: 

  * **processUpdateFiles** Flag set by calling funtion whether to update the config. 
  * **defaultConfig** True if default config is being updated


**Return**: TRUE if VHQ [Config](class_config.md) default values can be updated 

This function checks if we need to update the Default values. 


### function VHQConfigUpdateAddMissingDefaults

```cpp
static void VHQConfigUpdateAddMissingDefaults(
    bool processUpdateFiles
)
```


### function CheckAndRepairCorruptINI

```cpp
static bool CheckAndRepairCorruptINI(
    char * pszConfigFile
)
```


**Parameters**: 

  * **pszConfigFile** = config file name


**Return**: TRUE, if modified 

This function checks to see if the INI file has become corrupted and corrects corrupt INI files. assumes caller has the mutex already. 


### function RestoreDefaultCerts

```cpp
static void RestoreDefaultCerts()
```

When going back to default config file, we need to revert to the default (VHQ production server) certificates as well so that the device can still communicate with a VHQ server to be restored. 

### function VHQLoadConfigDataFromIni

```cpp
static bool VHQLoadConfigDataFromIni(
    bool processUpdateFiles,
    CALLBACK_INI_EVENT pfnIniCallback
)
```


**Parameters**: 

  * **processUpdateFiles** = boolean to tell whether updates should be processed when loading the config. 
  * **pfnIniCallback** = callback.


**Return**: TRUE ,if ini file loading success.Varibles would be set to defaults on fail ini load. Follows rules as specified in the agent FRD, except checksum checking is deactivated per CR If the ini file doesn't exist, it looks for an initial configuration file with a signature (MX only) checks it and digests and saves to the internal config file. 

This function updates ADK connections files from config or flashconfig or sys6 flash

This function loads config files. 


### function VHQLoadConfigData

```cpp
bool VHQLoadConfigData(
    bool processUpdateFiles,
    CALLBACK_INI_EVENT pfnIniCallback
)
```


**Parameters**: 

  * **processUpdateFiles** = boolean to tell whether updates should be processed when loading the config. 
  * **pfnIniCallback** = callback.


**Return**: TRUE ,if ini file loading success.Varibles would be set to defaults on fail ini load. 

This function loads config files, set any necessary variables anywhere 


### function GetLoggingLevel

```cpp
vhq_logging_level_t GetLoggingLevel(
    void 
)
```


### function GetLogSize

```cpp
uint32 GetLogSize(
    void 
)
```


### function InstanceRebootEventRequired

```cpp
void InstanceRebootEventRequired(
    bool sendReboot
)
```


### function GetDeviceIdBackupSource

```cpp
device_id_backup_source_t GetDeviceIdBackupSource(
    bool DIDReqdForKeyExch
)
```


**Return**: device_id_backup_source_t device ID source 

This function returns the device ID source if not provided by application. 


### function VHQConfigGetTimeInterval

```cpp
uint32 VHQConfigGetTimeInterval(
    uint32 ui32ParameterID,
    uint32 * pdwData
)
```


**Parameters**: 

  * **ui32ParameterID** = parameter ID in VHQconfig. 
  * **pdwData** = parameter value


**Return**: uint32, returns the parameter value. 

This function returns the config parameter value with a parameter ID. 


### function GetCurrentInstance

```cpp
char * GetCurrentInstance(
    void 
)
```


**Return**: void 

This function returns the current instance.


### function VHQReloadConfigData

```cpp
void VHQReloadConfigData(
    bool syncInfoSvcFirst,
    bool processUpdateFiles
)
```


**Parameters**: 

  * **syncInfoSvcFirst** If the InfoSvc DB was updated, it will need to be synched first 
  * **processUpdateFiles** boolean to tell whether updates should be processed when loading the config.


**Return**: void 

This function reloads the config data when there is a config update from server. 


### function DeleteAllInstanceFiles

```cpp
vhq_result_t DeleteAllInstanceFiles()
```


**Return**: void 

This function deletes all files related to all the instances from agent mnt/flash/system/vhq. 


### function TestLockServerInstance

```cpp
vhq_result_t TestLockServerInstance(
    char * serverInstance
)
```


**Parameters**: 

  * **serverInstance** = pointer to instance name string.


**Return**: VHQ_SUCCESS - in case if we can lock instance VHQ_API_SERVER_INSTANCE_LOCK_ERROR - in case if instance already occupied 

This function is copy of [LockServerInstance()](_v_h_q_config_8cpp.md#function-lockserverinstance) but just test do we have ability to lock mentioned instance or not. 


### function LockServerInstance

```cpp
vhq_result_t LockServerInstance(
    char * serverInstance,
    int mlsecTimeout,
    char * currentInstance
)
```


**Parameters**: 

  * **serverInstance** = server instance to be locked. 
  * **mlsecTimeout** = time out in millisecond 
  * **currentInstance** = current server instance expected to exist.


**Return**: vhq_result_t VHQ_SUCCESS,if success 

This function locks a server instance before processing an event. 


### function ReleaseServerInstanceLock

```cpp
vhq_result_t ReleaseServerInstanceLock(
    char * originalInstance
)
```


**Parameters**: 

  * **originalInstance** = instance to unlock.


**Return**: vhq_result_t VHQ_SUCCESS,if success 

This function unlocks a server instance. 


### function DeleteServerInstance

```cpp
vhq_result_t DeleteServerInstance(
    char * deleteInstance,
    bool force_delete
)
```


**Parameters**: 

  * **receiver** = calling application name. 
  * **deleteInstance** = instance to be deleted.


**Return**: vhq_result_t, VHQ_SUCCESS if success. 

This function deletes a server instance and removes all files belonging to that server instance. 


### function GetFileNameForInstance

```cpp
void GetFileNameForInstance(
    char * InstanceFileName,
    char * OrigFileName,
    const char * InstanceName
)
```


**Parameters**: 

  * **InstanceFileName** = file name according to current instance 
  * **OrigFileName** = original file name for instance 
  * **InstanceName** = current instance


**Return**: void 

This function gets the instance file name for an instance 


### function GetParamFileReportingType

```cpp
param_file_reporting_t GetParamFileReportingType()
```


**Return**: param_file_reporting_t 

This function returns the VHQ parameter file reporting type.


### function GetServerInstanceList

```cpp
void GetServerInstanceList(
    char *** ServerInstances,
    int * numInstances
)
```


**Parameters**: 

  * **ServerInstances** = pointer to list of server instances 
  * **numInstances** = number of server instances found


**Return**: void 

This function gets the list of server instances. 


### function CleanupServerInstanceList

```cpp
void CleanupServerInstanceList(
    char *** ServerInstances,
    int numInstances
)
```


**Parameters**: 

  * **ServerInstances** = pointer to list of server instances. 
  * **numInstances** = number of instances.


**Return**: void 

This function cleans the list of server instances. 


### function GetInstanceFromFilename

```cpp
void GetInstanceFromFilename(
    char * filename,
    char * InstanceName,
    int InstanceNameSize
)
```


**Parameters**: 

  * **filename** = filename 
  * **InstanceName** = instance name 
  * **InstanceNameSize** = size of instance name


**Return**: void 

This function gets the instance from file name. 



## Attributes Documentation

### variable configMutex

```cpp
pthread_mutex_t configMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable instanceMutex

```cpp
pthread_mutex_t instanceMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable bInstance_rebootEvent

```cpp
static bool bInstance_rebootEvent = FALSE;
```


### variable loc_logging_level

```cpp
static vhq_logging_level_t loc_logging_level = VHQ_LOGGING_LEVEL_STANDARD;
```


### variable loc_log_file_size

```cpp
static uint32 loc_log_file_size = 500 * 1024;
```


### variable initial_keyexchange

```cpp
static bool initial_keyexchange = FALSE;
```


### variable maint_schedule

```cpp
MAINT_WINDOW_T maint_schedule;
```


### variable g_pParameters

```cpp
static dictionary * g_pParameters = NULL;
```


### variable server_lock_count

```cpp
static int server_lock_count = 0;
```


### variable restore_instance

```cpp
static char[256] restore_instance;
```


### variable ciNumParams

```cpp
const int ciNumParams = sizeof(asParams) / sizeof(asParams[0]);
```



## Macros Documentation

### define INFO_SVC_NODE_NAME_CONV

```cpp
#define INFO_SVC_NODE_NAME_CONV(
    a,
    b,
    c
)

```


### define GET_NODE

```cpp
#define GET_NODE(
    a,
    b
)

```


### define infosvc_setval

```cpp
#define infosvc_setval(
    a,
    b,
    c,
    d,
    e
)

```


### define GetInfoSvcDBLock

```cpp
#define GetInfoSvcDBLock(
    
)

```


### define ReleaseInfoSvcDBLock

```cpp
#define ReleaseInfoSvcDBLock(
    
)

```


### define ASCIILINESZ

```cpp
#define ASCIILINESZ (1024)
```


### define VHQ_INI_FILE_BACKUP_EXTENSION

```cpp
#define VHQ_INI_FILE_BACKUP_EXTENSION ".bk"
```


### define MAX_FILE_SIZE_COMPARE

```cpp
#define MAX_FILE_SIZE_COMPARE (50 * 1024)
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#undef POS_AGENT_CONFIG_TABLE

#ifdef VHQ_CERT_VERIFIER
    extern "C" {
        #include "VHQCertVerifier.h"
        #include "VHQConfigParameters.h"
    }
#else //VHQ_CERT_VERIFIER

#ifdef MEMWATCH
#include "VHQTypes.h"
#endif

extern "C"
{
#include <stdio.h>
#include <ctype.h>
#ifdef ADK_SUPPORT
#include <inf/infodb.h>
#endif
#include "pthread.h"
#include <errno.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <dirent.h>

#ifndef WIN32
#include <svc.h>
#include <svcsec.h>
#include <fcntl.h>
#else
            #include "stdafx.h"
            #define POS_AGENT_CONFIG_TABLE
        #endif

#include <iniparser.h>
#ifndef MEMWATCH
#include "VHQTypes.h"
#endif
#include "svc_tms.h"
#include "VHQDebug.h"
#include "VHQUtils.h"
#include "VHQIo.h"
#include "VHQManager.h"
#include "VHQConfig.h"
#include "VHQConfigFiles.h"
#include "VHQConfigParameters.h"
#include "VHQSecurity.h"

#ifdef Mx2
#include "libsecins.h"
#include <libxml/tree.h>
#include <libxml/xmlsave.h>
#endif

pthread_mutex_t configMutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t instanceMutex = PTHREAD_MUTEX_INITIALIZER;
}

#endif //VHQ_CERT_VERIFIER

static bool bInstance_rebootEvent = FALSE;
static vhq_logging_level_t loc_logging_level = VHQ_LOGGING_LEVEL_STANDARD;
static uint32 loc_log_file_size = 500 * 1024;

static bool initial_keyexchange = FALSE;

#ifdef ADK_SUPPORT
/* Required for importing/exporting INFO SVC configuration to XML */
#include <inf/inf_util.h>
#ifdef INF_STATIC_BUILD

#include <inf/inf_util/backend_api.h>

REGISTER_STATIC_BACKEND(XMLFileBackend);

REGISTER_STATIC_BACKEND(SQLiteBackend);

#endif

/* We can keep the INFO-SVC DB in sync with the INI file values.  When reading a parameter, a comparison is made
 between INI value and INFO-SVC value and if they were different, the INFO-SVC value can be updated.  You can
 enable or disable this feature with the DEFINE below */
#define KEEP_INFO_SVC_IN_SYNC_ON_READ   0

static pthread_mutex_t infoSvcDbMutex = PTHREAD_MUTEX_INITIALIZER;

static char szISVersion[] = "Version";
static char szISServer[] = "Server";
static char szISVHQ[] = "VHQ";
static char szISProxyAgent[] = "Proxy_Agent";

InfoNode VERSION_NODE;
InfoNode SERVER_NODE;
InfoNode VHQ_NODE;
InfoNode PROXY_AGENT_NODE;

typedef enum _sync_master_t
{
  SYNC_MASTER_INI,
  SYNC_MASTER_INFO_SVC,
} sync_master_t;

static void INFO_SVC_NODE_NAME_CONV(char *orig_string, char *new_string,
                                    uint32 new_string_len);
static InfoNode GET_NODE(InfoDB *pInfSvcHandle, char *SectionName);
static bool infosvc_setval(InfoDB *pInfSvcHandle, uint32 param_type,
                           char *KeyName, char *ValueName, const char *value);

static void GetInfoSvcDBLock();
static void ReleaseInfoSvcDBLock();

#else
#define INFO_SVC_NODE_NAME_CONV(a, b, c)
#define GET_NODE(a, b)
#define infosvc_setval(a, b, c, d, e)

#define GetInfoSvcDBLock()
#define ReleaseInfoSvcDBLock()

#undef KEEP_INFO_SVC_IN_SYNC_ON_READ
#endif

static void CreateDefaultConfigFile();
static void SyncIniCfgWithInfoSvc(sync_master_t master);
static void VHQUpdateConfig(void);

/*
 * ADKTMS-1229 and ADKTMS-1250
 * Ugly fix: prevent configuration modification in case if we have active ADK COM processing
 */
void setSvcDBLock()
{
  GetInfoSvcDBLock();
}
;
void setSvcDBUnLock()
{
  ReleaseInfoSvcDBLock();
}
;

// for event scheduler, moved here so I don't need separate compilation for root vs usr
MAINT_WINDOW_T maint_schedule;

// local functions to save the config file
static bool iniparser_save(char *pszFile, bool sem_locked);
static bool update_crc(char *pszFilename, char *pszCrcFile);

// from iniparser
#if defined(WIN32) || defined(Mx2) || defined(_RFS)
#define iniparser_setstr iniparser_set
//int iniparser_setst(dictionary * ini, char * entry, char * val);
#else
extern "C" {
    int iniparser_setstr(dictionary * ini, char * entry, char * val);
}
#endif

#ifdef WIN32
#define CopyFileAsRoot(x, y)
#define GenerateRandom(x)
#define pthread_mutex_lock(x) (0)
#define pthread_mutex_unlock(x)
#define pthread_mutex_init(x,y) (0)
#endif

#define ASCIILINESZ (1024)

#define VHQ_INI_FILE_BACKUP_EXTENSION       ".bk"

static dictionary *g_pParameters = NULL;
static int server_lock_count = 0;
static char restore_instance[256];

const int ciNumParams = sizeof(asParams) / sizeof(asParams[0]);

static void VHQWaitSemaphore()
{
  if (pthread_mutex_lock(&configMutex) != 0)
  {
    dbg_msg("\n\n%s ERROR: could not lock mutex!!!\n\n", __FUNCTION__);
  }
}

static void VHQUnlockSemaphore()
{
  pthread_mutex_unlock(&configMutex);
}

static void CopyFileToInstance(char *fileName, char *instanceName)
{
  char KeyFileName[512] = { 0 };

  GetFileNameForInstance(KeyFileName, fileName, instanceName);
  CopyFileAsRoot(fileName, (const char*) KeyFileName);

  return;
}

#ifndef VHQ_CERT_VERIFIER

static vhq_result_t LockInstanceSemaphore()
{
  int ret_val;

  ret_val = pthread_mutex_trylock(&instanceMutex);

  if (ret_val == 0)
  {
    server_lock_count++;
    dbg_msg(
        "%s: instance sem was not locked - locked it (server_lock_count = %d)\n",
        __FUNCTION__, server_lock_count);
    return VHQ_SUCCESS;
  }
  else if (ret_val == EBUSY)
  {
    server_lock_count++;
    dbg_msg("%s: instance sem already locked (server_lock_count = %d)\n",
            __FUNCTION__, server_lock_count);
    return VHQ_API_SERVER_INSTANCE_ALREADY_LOCKED;
  }
  else
  {
    dbg_err("\n\n%s ERROR: error (%d)  locking mutex!!!\n\n", __FUNCTION__,
            ret_val);
    return VHQ_API_SERVER_INSTANCE_LOCK_ERROR;
  }
}

/******************************************************************************
 * Function:      TestInstanceSemaphore
 * Description:   Copy of WaitInstanceSemaphore() but just test do we have ability
 *                to lock mutex or not. We may lock mutex here, but we will
 *                release mutex right after it
 *
 * Parameters:    none
 *
 * Return Value:  VHQ_SUCCESS - in case if we can lock instance mutex
 *                VHQ_API_SERVER_INSTANCE_LOCK_ERROR - in case if instance mutex
 *                                                     already occupied
 *****************************************************************************/
static vhq_result_t TestInstanceSemaphore()
{
  int ret_val = pthread_mutex_trylock(&instanceMutex);

  if (ret_val == 0)
  {
//      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: instance mutex can be locked, unlock\n", __FUNCTION__);
    ret_val = pthread_mutex_unlock(&instanceMutex);
//      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: instance mutex unlocked\n", __FUNCTION__);
    return VHQ_SUCCESS;
  }
  else
  {
//      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: instance can't be locked\n", __FUNCTION__);
    return VHQ_API_SERVER_INSTANCE_LOCK_ERROR;
  }
}

static vhq_result_t WaitInstanceSemaphore(int mlSecTimeout)
{
  int ret_val;

  if (mlSecTimeout > 0)
  {
    int secondsToWait = mlSecTimeout / 1000;

    do
    {
      ret_val = pthread_mutex_trylock(&instanceMutex);

      if (ret_val == 0)
      {
        dbg_msg("%s: instance sem was not locked - locked it\n", __FUNCTION__);
        break;
      }
      else if (ret_val == EBUSY)
      {
        dbg_msg("%s: instance locked - waiting 1 second\n", __FUNCTION__);
        sleep(1);
        secondsToWait--;
        if (secondsToWait <= 0)
          ret_val = ETIMEDOUT;
      }
      else
      {
        dbg_err("\n\n%s ERROR: error (%d)  locking mutex!!!\n\n", __FUNCTION__,
                ret_val);
        break;
      }
    }
    while (secondsToWait > 0);
  }
  else
    ret_val = pthread_mutex_lock(&instanceMutex);

  if (ret_val == 0)
  {
    server_lock_count++;
    dbg_msg("%s: locked instance sem (server_lock_count = %d)\n", __FUNCTION__,
            server_lock_count);
    return VHQ_SUCCESS;
  }
  else if (ret_val == ETIMEDOUT)
  {
    dbg_msg("\n\n%s ERROR: timeout locking mutex!!!\n\n", __FUNCTION__);
    return VHQ_API_SERVER_INSTANCE_LOCK_TIMEOUT_ERROR;
  }
  else
  {
    dbg_err("\n\n%s ERROR: error (%d)  locking mutex!!!\n\n", __FUNCTION__,
            ret_val);
    return VHQ_API_SERVER_INSTANCE_LOCK_ERROR;
  }
}

static vhq_result_t UnlockInstanceSemaphore(char *originalInstance)
{
  int ret_val = 0;

  server_lock_count--;
  dbg_msg("%s: server_lock_count is now %d\n", __FUNCTION__, server_lock_count);

  if (server_lock_count == 0)
  {
    if (originalInstance)
    {
      dbg_msg(
          "%s: server_lock_count is %d - restoring '%s' instance if required\n",
          __FUNCTION__, server_lock_count, originalInstance);

      if (strlen(originalInstance) == 0)
      {
        if (strlen(restore_instance) != 0)
        {
          dbg_msg("%s: restoring queued instance %s\n", __FUNCTION__,
                  restore_instance);
          strcpy(szCurrentInstance, restore_instance);
          memset(restore_instance, 0, sizeof(restore_instance));
          dbg_msg("%s: Current Instance restored to %s - reloading config\n",
                  __FUNCTION__, szCurrentInstance);
          VHQLoadConfigData(TRUE, NULL);
          ScheduleRecurringHeartbeat(FALSE);
        }
        else
        {
          dbg_msg("%s: No instance to restore - leaving current instance %s\n",
                  __FUNCTION__, szCurrentInstance);
        }
      }
      else if (strcmp(originalInstance, szCurrentInstance) == 0)
      {
        dbg_msg("%s: Current Instance already set to %s\n", __FUNCTION__,
                szCurrentInstance);
      }
      else
      {
        /* Restore the oringinal instance and load the config data for that instance */
        strcpy(szCurrentInstance, originalInstance);
        log_dbg("%s: Current Instance restored to %s - reloading config\n",
                __FUNCTION__, szCurrentInstance);
        VHQLoadConfigData(TRUE, NULL);
        ScheduleRecurringHeartbeat(FALSE);
      }
    }

    dbg_msg("%s: server_lock_count is %d - calling pthread_mutex_unlock\n",
            __FUNCTION__, server_lock_count);
    ret_val = pthread_mutex_unlock(&instanceMutex);
  }
  else if (strlen(restore_instance) == 0)
  {
    if (originalInstance)
    {
      strncpy(restore_instance, originalInstance, sizeof(restore_instance));
      dbg_msg("%s: Queing instance '%s' for restoration\n", __FUNCTION__,
              restore_instance);
    }
  }

  if (ret_val == 0)
  {
    return VHQ_SUCCESS;
  }
  else
  {
    dbg_err("\n\n%s ERROR: error (%d)  locking mutex!!!\n\n", __FUNCTION__,
            ret_val);
    return VHQ_API_SERVER_INSTANCE_UNLOCK_ERROR;
  }
}

#endif // VHQ_CERT_VERIFIER

#ifdef ADK_SUPPORT
static inline InfoDB* openSvcDB(const char *filename)
{
  InfoDB *pInfSvcHandle = NULL;

  if (filename)
  {
    char InfoSvcCfgFileName[512] = { 0 };

    GetFileNameForInstance(InfoSvcCfgFileName, (char*) filename,
                           GetCurrentInstance());

    /* Open database only if file is present */
    if (FileExists(InfoSvcCfgFileName))
    {
      pInfSvcHandle = info_opendb(InfoSvcCfgFileName, INFO_READ_WRITE);
      if (!pInfSvcHandle)
        log_err("%s ERROR: FAILURE opening INFO SVC database file %s\n",
                __FUNCTION__, InfoSvcCfgFileName);
    }
  }

  return pInfSvcHandle;
}

static inline void closeSvcDB(InfoDB *pInfSvcHandle)
{
  if (pInfSvcHandle)
    info_closedb(pInfSvcHandle);
  pInfSvcHandle = NULL;
}
#endif


static void UpdateLocalMW(void)
{
  uint32 sub_mw = 0;

  // reload the MW information on demand to allow config updates to not require a restart
  VHQGetParameterUint32(PARAM_MAINTENANCE_START, &maint_schedule.start_time,
                        BASE_10);
  VHQGetParameterUint32(PARAM_MAINTENANCE_END, &maint_schedule.end_time,
                        BASE_10);
  VHQGetParameterUint32(PARAM_SUB_MAINT_WINDOW_PERCENT, &sub_mw, BASE_10);

  if (sub_mw == 0)
  {
      sub_mw = 2030;
  }
  else
  {
      uint32 hb_sub_mw = sub_mw / 100;
      uint32 dl_sub_mw = sub_mw % 100;

      if (hb_sub_mw > 30 || hb_sub_mw < 20)
      {
          hb_sub_mw = 20;
      }

      if (dl_sub_mw > 40 || dl_sub_mw < 30)
      {
          dl_sub_mw = 30;
      }

      sub_mw = hb_sub_mw * 100 + dl_sub_mw;
  }

  if (maint_schedule.start_time == maint_schedule.end_time)
  {
    maint_schedule.start_time = 0000;
    maint_schedule.end_time = 2400;
    maint_schedule.length_in_sec = 24 * 60 * 60;
  }
  else
  {
    int start_time_in_seconds = ((maint_schedule.start_time / 100) * 60
        + (maint_schedule.start_time % 100)) * 60;
    int end_time_in_seconds = ((maint_schedule.end_time / 100) * 60
        + (maint_schedule.end_time % 100)) * 60;

    if (start_time_in_seconds > end_time_in_seconds)
      maint_schedule.length_in_sec = (end_time_in_seconds + 24 * 60 * 60)
          - start_time_in_seconds;
    else
      maint_schedule.length_in_sec = end_time_in_seconds
          - start_time_in_seconds;
  }

  maint_schedule.hb_mw_in_sec = maint_schedule.length_in_sec * (sub_mw / 100) / 100;
  maint_schedule.dl_mw_in_sec = maint_schedule.length_in_sec * (sub_mw % 100) / 100;
  VHQGetParameterString(PARAM_MAINTENANCE_DAYS, maint_schedule.days,
                        sizeof(maint_schedule.days));

  dbg_notice("%s: start_time = %lu, end_time = %lu, length_in_sec = %lu\n",
             __FUNCTION__, maint_schedule.start_time, maint_schedule.end_time,
             maint_schedule.length_in_sec);
}


static void UpdateLoggingLevel(void)
{
  char szTempStr[256];
  uint32 uiLogfileSizeKB;

#ifndef VHQ_CERT_VERIFIER
  loc_logging_level = VHQ_LOGGING_LEVEL_STANDARD;

  memset(szTempStr, 0, sizeof(szTempStr));
  VHQGetParameterString(PARAM_AGENT_LOGGING_LEVEL, szTempStr,
                        sizeof(szTempStr));

  //dbg_msg( "%s: Read %s for LOGGING_LEVEL\n", __FUNCTION__, szTempStr);

  if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_ALERT_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_ALERT;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_CRITICAL_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_CRITICAL;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_ERROR_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_ERROR;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_WARNING_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_WARNING;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_NOTICE_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_NOTICE;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_INFO_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_INFO;
  }
  else if (stricmp(szTempStr, VHQ_LOGGING_LEVEL_DEBUG_STRING) == 0)
  {
    loc_logging_level = VHQ_LOGGING_LEVEL_DEBUG;
  }

  /* Read the log file size into loc_log_file_size */
  if (VHQGetParameterUint32(PARAM_AGENT_LOG_FILE_SIZE, &uiLogfileSizeKB,
                            DEFAULT_BASE))
  {
    loc_log_file_size = uiLogfileSizeKB * 1024;
  }
  else
  {
    uiLogfileSizeKB = strtol(VHQ_LOG_FILE_DEFAULT_SIZE, NULL, 0);
    loc_log_file_size = uiLogfileSizeKB * 1024;
  }

  //dbg_msg( "%s: returning\n", __FUNCTION__);
#endif
}

//#define DEBUG_CONFIGURATION

bool _VHQGetParameterBool(const char *FUNC, const unsigned int LINE,
                          uint32 ui32ParameterID, bool *pbData)
{
  int i;

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (!pbData)
  {
    log_err(
        "%s ERROR: Incorrect input parameter (calling from %s(line:%u) for ParameterID = %d)\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      char szNameBuf[70];
      bool pszFoundData;

      bool bDefault = FALSE;
      char cDef;

      /* Process code error */
      if (!asParams[i].szDefaultValue)
      {
        log_err(
            "%s ERROR: szDefaultValue NULL (calling from %s(line:%u) for ParameterID = %d)\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        break;
      }

      /* Read default value */
      cDef = asParams[i].szDefaultValue[0];
      if (cDef == 'y' || cDef == 'Y' || cDef == '1' || cDef == 't'
          || cDef == 'T')
        bDefault = TRUE;
      else
        bDefault = FALSE;

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

      /* Read data from INI file or use default value */
      if (g_pParameters)
      {
        VHQWaitSemaphore();
        pszFoundData =
            iniparser_getboolean(g_pParameters, szNameBuf, bDefault) ?
                TRUE : FALSE;
        VHQUnlockSemaphore();
      }
      else
      {
        log_err(
            "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d). Use default value\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        pszFoundData = bDefault;
      }

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying pszFoundFata(%s) to pData\r\n", __FUNCTION__, pszFoundData ? "TRUE" : "FALSE");
      *pbData = pszFoundData;

#if KEEP_INFO_SVC_IN_SYNC_ON_READ
            char szISKeyNameBuf[128];
            char szISNameBuf[128];
            InfoDB  *pInfSvcHandle = NULL;
            InfoNode IS_node;
            uint32 IS_data = 0;

            GetInfoSvcDBLock();
            pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
            if (pInfSvcHandle != NULL)
            {
                /* We used to sync INFO-SVC to INI file during reads but we can't do that in multi-threaded VX */
                INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf, sizeof(szISKeyNameBuf));
                IS_node = GET_NODE(pInfSvcHandle, szISKeyNameBuf);
                INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf, sizeof(szISNameBuf));
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading %s from INFO SVC - IS_node = %ld\n", __FUNCTION__, szISNameBuf, IS_node);
                info_readInt(pInfSvcHandle, IS_node, szISNameBuf, (int *)&IS_data);

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: comparing INI value %s to INFO_SVC value %u\n", __FUNCTION__, pData, IS_data);
                if ( (bool)IS_data != *pbData )
                {
                    log_warn( "%s: %s DIFFERENCE\n\tINFO SVC DB: %u\n\tINI FILE   : %u\n\tUPDATING Info Svc Val\n", __FUNCTION__, szISNameBuf, IS_data, (uint32)*pbData);
                    infosvc_setval(pInfSvcHandle, PTYPE_BOOL, asParams[i].pszKeyName, asParams[i].szValueName, (char*)((*pbData) ? "True" : "False"));
                }

            } else {
                log_err( "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
            }
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
#endif
      return TRUE;
    }
  }

  /* We don't have this parameter at all, use some common default */
  *pbData = FALSE;

  log_err(
      "%s: ERROR: Couldn't find parameter in table or code error (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}

bool _VHQSetParameterBool(const char *FUNC, const unsigned int LINE,
                          uint32 ui32ParameterID, bool bData, bool bSaveNow)
{
  int i;

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (!g_pParameters)
  {
    log_err(
        "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d)\r\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      char szNameBuf[70];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

#ifdef ADK_SUPPORT
      /* Update data in database */
      GetInfoSvcDBLock();
      InfoDB *pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
      if (pInfSvcHandle != NULL)
        infosvc_setval(pInfSvcHandle, PTYPE_BOOL, asParams[i].pszKeyName,
                       asParams[i].szValueName,
                       (char*) (bData ? "True" : "False"));
      else
        log_err(
            "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);

      closeSvcDB(pInfSvcHandle);
      ReleaseInfoSvcDBLock();
#endif
      /* Update data in INI file */
      VHQWaitSemaphore();
      iniparser_setstr(g_pParameters, szNameBuf,
                       (char*) (bData ? "True" : "False"));
      VHQUnlockSemaphore();

      if (bSaveNow)
      {
        char CfgFileName[512] = { 0 };
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                               GetCurrentInstance());
        iniparser_save(CfgFileName, FALSE);
      }

      return TRUE;
    }
  }
  log_err(
      "%s: ERROR: Couldn't find parameter in table (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}


bool _VHQGetParameterUint32(const char *FUNC, const unsigned int LINE,
                            uint32 ui32ParameterID, uint32 *pdwData, int base)
{
  int i;

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (!pdwData)
  {
    log_err(
        "%s ERROR: Incorrect input parameter (calling from %s(line:%u) for ParameterID = %d)\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      const char *pszFoundData;
      char szNameBuf[70];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

      /* Read data from INI file or use default value */
      if (g_pParameters)
      {
        VHQWaitSemaphore();
        pszFoundData = iniparser_getstring(g_pParameters, szNameBuf,
                                           asParams[i].szDefaultValue);
        VHQUnlockSemaphore();
      }
      else
      {
        dbg_err(
            "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d). Use default value\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        pszFoundData = asParams[i].szDefaultValue;
      }

      /* Process code error */
      if (!pszFoundData)
      {
        dbg_err(
            "%s ERROR: pszFoundData NULL (calling from %s(line:%u) for ParameterID = %d)\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        break;
      }

      /* Mitch (5-30-2012): This is a fix to be able to read HEX values from the INI file.
       The Mx8 implementation of iniparser library is old so iniparser_getint() uses an atoi()
       call on the string returned by iniparser_getstring() call.  This leads to HEX values
       starting with 0x being returned as 0. This code is the equivalent of the current
       version of iniparser_getint() and it uses strtol() instead which will read HEX
       values correctly */

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying pszFoundFata(%s) to pData\r\n", __FUNCTION__, pszFoundData);
      *pdwData = (int) strtoll(pszFoundData, NULL, base);

#if KEEP_INFO_SVC_IN_SYNC_ON_READ
            char szISKeyNameBuf[128];
            char szISNameBuf[128];
            InfoDB  *pInfSvcHandle = NULL;
            InfoNode IS_node;
            uint32 IS_data = 0;

            GetInfoSvcDBLock();
            pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
            if (pInfSvcHandle != NULL)
            {
                /* We used to sync INFO-SVC to INI file during reads but we can't do that in multi-threaded VX */
                INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf, sizeof(szISKeyNameBuf));
                IS_node = GET_NODE(pInfSvcHandle, szISKeyNameBuf);
                INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf, sizeof(szISNameBuf));
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading %s from INFO SVC - IS_node = %ld\n", __FUNCTION__, szISNameBuf, IS_node);
                info_readInt(pInfSvcHandle, IS_node, szISNameBuf, (int *)&IS_data);

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: comparing INI value %s to INFO_SVC value %u\n", __FUNCTION__, pData, IS_data);
                if ( IS_data != *pdwData )
                {
                    char szBuf[32];
                    sprintf(szBuf, "%u", *pdwData);
                    dbg_msg( "%s: %s DIFFERENCE\n\tINFO SVC DB: %u\n\tINI FILE   : %u\n\tUPDATING Info Svc Value\n", __FUNCTION__, szISNameBuf, IS_data, *pdwData);
                    infosvc_setval(pInfSvcHandle, PTYPE_UINT32, asParams[i].pszKeyName, asParams[i].szValueName, szBuf);
                }

            } else {
                log_err( "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
            }
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
#endif
      return TRUE;
    }
  }

  /* We don't have this parameter at all, use some common default */
  *pdwData = 0;

  log_err(
      "%s: ERROR: Couldn't find parameter in table or code error (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}


bool _VHQSetParameterUint32(const char *FUNC, const unsigned int LINE,
                            uint32 ui32ParameterID, uint32 dwData,
                            bool bSaveNow)
{
  int i;

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (!g_pParameters)
  {
    log_err(
        "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d)\r\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      char szBuf[32];
      char szNameBuf[70];

      sprintf(szBuf, "%u", dwData);

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

#ifdef ADK_SUPPORT
      /* Update data in database */
      GetInfoSvcDBLock();
      InfoDB *pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
      if (pInfSvcHandle != NULL)
        infosvc_setval(pInfSvcHandle, PTYPE_UINT32, asParams[i].pszKeyName,
                       asParams[i].szValueName, szBuf);
      else
        log_err(
            "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);

      closeSvcDB(pInfSvcHandle);
      ReleaseInfoSvcDBLock();
#endif
      /* Update data in INI file */
      VHQWaitSemaphore();
      iniparser_setstr(g_pParameters, szNameBuf, szBuf);
      VHQUnlockSemaphore();

      if (bSaveNow)
      {
        char CfgFileName[512] = { 0 };
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                               GetCurrentInstance());
        iniparser_save(CfgFileName, FALSE);
      }

      return TRUE;
    }
  }
  log_err(
      "%s: ERROR: Couldn't find parameter in table (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}


bool _VHQGetParameterString(const char *FUNC, const unsigned int LINE,
                            uint32 ui32ParameterID, char *pData,
                            uint32 ui32Size)
{
  int i;

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (!pData || !ui32Size)
  {
    log_err(
        "%s ERROR: Incorrect input parameter (calling from %s(line:%u) for ParameterID = %d)\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      const char *pszFoundData;
      char szNameBuf[70];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

      /* Read data from INI file or use default value */
      if (g_pParameters)
      {
        VHQWaitSemaphore();
        pszFoundData = iniparser_getstring(g_pParameters, szNameBuf,
                                           asParams[i].szDefaultValue);
        VHQUnlockSemaphore();
      }
      else
      {
        log_err(
            "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d). Use default value\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        pszFoundData = asParams[i].szDefaultValue;
      }

      /* Process code error */
      if (!pszFoundData)
      {
        log_err(
            "%s ERROR: pszFoundData NULL (calling from %s(line:%u) for ParameterID = %d)\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);
        break;
      }

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Copying pszFoundFata(len = %d) to pData(size = %d)\r\n", __FUNCTION__, strlen(pszFoundData), ui32Size);
      snprintf(pData, ui32Size, "%s", pszFoundData);

#if KEEP_INFO_SVC_IN_SYNC_ON_READ
            char szISKeyNameBuf[128];
            char szISNameBuf[128];
            InfoDB  *pInfSvcHandle = NULL;
            InfoNode IS_node;
            char    *IS_data = NULL;

            GetInfoSvcDBLock();
            pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
            if (pInfSvcHandle != NULL)
            {
                /* We used to sync INFO-SVC to INI file during reads but we can't do that in multi-threaded VX */
                INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf, sizeof(szISKeyNameBuf));
                IS_node = GET_NODE(pInfSvcHandle, szISKeyNameBuf);
                INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf, sizeof(szISNameBuf));
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading %s from INFO SVC - IS_node = %ld\n", __FUNCTION__, szISNameBuf, IS_node);
                info_readString(pInfSvcHandle, IS_node, szISNameBuf, &IS_data);

                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: comparing INI value %s to INFO_SVC value %s\n", __FUNCTION__, pData, IS_data ? IS_data : "NULL");
                if ( !IS_data || strcmp(pData , IS_data)!= 0 )
                {
                    log_warn( "%s: %s DIFFERENCE\n\tINFO SVC DB: '%s'\n\tINI FILE   : '%s'\n\tUPDATING Info Svc Value\n", __FUNCTION__, szISNameBuf, IS_data ? IS_data : "NULL", pData);
                    infosvc_setval(pInfSvcHandle, PTYPE_STRING, asParams[i].pszKeyName, asParams[i].szValueName, pData);
                }

            } else {
                log_err( "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
            }
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();

            if (IS_data)
            {
                free(IS_data);
                IS_data = NULL;
            }
#endif
      return TRUE;
    }
  }

  /* We don't have this parameter at all, use some common default */
  memset(pData, 0, ui32Size);

  log_err(
      "%s: ERROR: Couldn't find parameter in table or code error (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}


bool _VHQSetParameterString(const char *FUNC, const unsigned int LINE,
                            uint32 ui32ParameterID, char *pData,
                            uint32 ui32Size, bool bSaveNow)
{
  int i;

  UNUSED(ui32Size);

#ifdef DEBUG_CONFIGURATION
    dbg_msg( "%s: calling from %s(line:%u) for ParameterID = %d \n", __FUNCTION__, FUNC, LINE, ui32ParameterID);
#endif

  if (pData == NULL)
  {
    dbg_err("%s ERROR: NULL data pointer\r\n", __FUNCTION__);
    return FALSE;
  }

  if (!g_pParameters)
  {
    log_err(
        "%s: Config file not loaded (calling from %s(line:%u) for ParameterID = %d)\r\n",
        __FUNCTION__, FUNC, LINE, ui32ParameterID);
    return FALSE;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    if (ui32ParameterID == asParams[i].ID)
    {
      char szNameBuf[70];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);
      if (strlen(szNameBuf) > 64)
        dbg_warn("%s ERROR: szNameBuf strlen = %d\n", __FUNCTION__,
                 strlen(szNameBuf));

#ifdef ADK_SUPPORT
      /* Update data in database */
      GetInfoSvcDBLock();
      InfoDB *pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
      if (pInfSvcHandle != NULL)
        infosvc_setval(pInfSvcHandle, PTYPE_STRING, asParams[i].pszKeyName,
                       asParams[i].szValueName, pData);
      else
        log_err(
            "%s ERROR: FAILURE opening INFO SVC database file(calling from %s(line:%u) for ParameterID = %d)\r\n",
            __FUNCTION__, FUNC, LINE, ui32ParameterID);

      closeSvcDB(pInfSvcHandle);
      ReleaseInfoSvcDBLock();
#endif
      /* Update data in INI file */
      VHQWaitSemaphore();
      iniparser_setstr(g_pParameters, szNameBuf, pData);
      VHQUnlockSemaphore();

      if (bSaveNow)
      {
        char CfgFileName[512] = { 0 };
        GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                               GetCurrentInstance());
        iniparser_save(CfgFileName, FALSE);
      }

      return TRUE;
    }
  }
  log_err(
      "%s: ERROR: Couldn't find parameter in table (calling from %s(line:%u) for ParameterID = %d)\r\n",
      __FUNCTION__, FUNC, LINE, ui32ParameterID);
  return FALSE;
}


int VHQGetParameter(char *pSection, char *pParam, char *pData, uint32 pDataSize)
{
  int i;

  if ((pSection == NULL) || (pParam == NULL))
  {
    log_err(
        "%s ERROR: pSection (0x%08x) or pParam (0x%08x) is NULL - returning TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST\n",
        __FUNCTION__, pSection, pParam);
    return TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST;
  }

  if ((pData == NULL) || (pDataSize == 0))
  {
    log_err(
        "%s ERROR: no buffer to store parameter '%s:%s' - returning TMS_STATUS_ERROR\n",
        __FUNCTION__, pSection, pParam);
    return TMS_STATUS_ERROR;
  }

  for (i = 0; i < ciNumParams; i++)
  {
    char szISKeyNameBuf[128];
    char szISNameBuf[128];

    INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf,
                            sizeof(szISKeyNameBuf));
    INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf,
                            sizeof(szISNameBuf));

    if ((strcmp(pSection, szISKeyNameBuf) == 0)
        && (strcmp(pParam, szISNameBuf) == 0))
    {
      InfoDB *pInfSvcHandle = NULL;
      int value;
      uint32 uintvalue;
      enum InfoResult db_read_res;
      char *IS_data = NULL;

      GetInfoSvcDBLock();
      pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
      if (pInfSvcHandle != NULL)
      {
        /* We used to sync INFO-SVC to INI file during reads but we can't do that in multi-threaded VX */

        switch (asParams[i].type)
        {
          case PTYPE_STRING:
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s (NODE = %s, %d)\n", __FUNCTION__, szISNameBuf, asParams[i].pszKeyName, GET_NODE(pInfSvcHandle, szISKeyNameBuf));
            db_read_res = info_readString(
                pInfSvcHandle, GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                szISNameBuf, &IS_data);
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
            if (db_read_res != INFO_OK || !IS_data)
            {
              log_err(
                  "%s ERROR: error reading param '%s:%s' from InfoSvc - returning TMS_STATUS_ERROR\n",
                  __FUNCTION__, asParams[i].pszKeyName,
                  asParams[i].szValueName);
              return TMS_STATUS_ERROR;
            }
            else
            {
              snprintf(pData, pDataSize, "%s", IS_data);
              dbg_msg("%s: Returning '%s' for parameter '%s:%s'\n",
                      __FUNCTION__, pData, pSection, pParam);
              return TMS_STATUS_SUCCESS;
            }
          case PTYPE_UINT32:
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s\n", __FUNCTION__, szISNameBuf);
            db_read_res = info_readInt(pInfSvcHandle,
                                       GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                                       szISNameBuf, (int*) &uintvalue);
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
            if (db_read_res != INFO_OK)
            {
              log_err(
                  "%s ERROR: error reading param '%s:%s' from InfoSvc - returning TMS_STATUS_ERROR\n",
                  __FUNCTION__, asParams[i].pszKeyName,
                  asParams[i].szValueName);
              return TMS_STATUS_ERROR;
            }
            else
            {
              snprintf(pData, pDataSize, "%u", uintvalue);
              dbg_msg("%s: Returning '%s' for parameter '%s:%s'\n",
                      __FUNCTION__, pData, pSection, pParam);
              return TMS_STATUS_SUCCESS;
            }
          case PTYPE_BOOL:
          case PTYPE_INT32:
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s\n", __FUNCTION__, szISNameBuf);
            db_read_res = info_readInt(pInfSvcHandle,
                                       GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                                       szISNameBuf, &value);
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
            if (db_read_res != INFO_OK)
            {
              log_err(
                  "%s ERROR: error reading param '%s:%s' from InfoSvc - returning TMS_STATUS_ERROR\n",
                  __FUNCTION__, asParams[i].pszKeyName,
                  asParams[i].szValueName);
              return TMS_STATUS_ERROR;
            }
            else
            {
              snprintf(pData, pDataSize, "%d", value);
              dbg_msg("%s: Returning '%s' for parameter '%s:%s'\n",
                      __FUNCTION__, pData, pSection, pParam);
              return TMS_STATUS_SUCCESS;
            }
          default:
            closeSvcDB(pInfSvcHandle);
            ReleaseInfoSvcDBLock();
            log_err("%s ERROR: Unknown Type for %s parameter - type = %d\n",
                    __FUNCTION__, szISNameBuf, asParams[i].type);
            return TMS_STATUS_ERROR;
        }

      }
      else
      {
        log_err("%s ERROR: FAILURE opening INFO SVC database file\r\n",
                __FUNCTION__);
        ReleaseInfoSvcDBLock();
        return TMS_STATUS_ERROR;
      }
    }
  }

  /* We couldn't find the parameter */
  memset(pData, 0, pDataSize);

  log_err(
      "%s: ERROR: Couldn't find parameter'%s:%s' - returning TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST\r\n",
      __FUNCTION__, pSection, pParam);
  return TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST;
}


bool VHQGetNameInfo(char *pName, char *pSection, uint32 *pui32ParameterID,
                    uint32 *pui32ParameterType)
{
  int i;

  *pui32ParameterID = PARAM_INVALID_ID;
  *pui32ParameterType = PTYPE_INVALID;
  for (i = 0; i < ciNumParams; i++)
  {
    if ((strcmp(pName, asParams[i].szValueName) == 0)
        && (strcmp(pSection, asParams[i].pszKeyName) == 0))
    {
      *pui32ParameterID = asParams[i].ID;
      *pui32ParameterType = asParams[i].type;
      return TRUE;
    }
  }
  return FALSE;
}

#ifdef Mx2
static bool update_crc(char *pszFilename, char *pszCrcFile)
{
  char *pszFileBuffer = NULL;  // max config file size
  struct stat sStat;
  int iFile = -1;
  uint32 ui32CRCCalculated = 0;

  iFile = open(pszFilename, O_RDONLY | O_EXCL);
  if (iFile > -1)
  {
    fstat(iFile, &sStat);
    if (S_ISREG(sStat.st_mode))
    {
      pszFileBuffer = (char*) malloc(sStat.st_size);
      if (pszFileBuffer)
      {
        if (sStat.st_size == read(iFile, pszFileBuffer, sStat.st_size))
        {

          ui32CRCCalculated = svcCrcCalc(5, (unsigned char*) pszFileBuffer,
                                         sStat.st_size);
          free(pszFileBuffer);
          pszFileBuffer = NULL;
        }
        else
        {
          dbg_err("VHQ: update_crc: Config file checksum read failure\n");
          free(pszFileBuffer);
          pszFileBuffer = NULL;
          goto error_fail;
        }
      }
      else
      {
        dbg_err("VHQ: update_crc: Unable to malloc to read file\n");
        goto error_fail;
      }
    }
    else
    {
      dbg_err("VHQ: update_crc: Config file checksum file can't be opened\n");
      goto error_fail;
    }

    close(iFile);

    dbg_msg("VHQ: update_crc: creating crc file\n");
    iFile = open(pszCrcFile, O_RDWR | O_TRUNC | O_CREAT,
                 S_IWUSR | S_IRUSR | S_IWOTH | S_IRGRP | S_IWGRP | S_IRGRP);
    if (iFile > -1)
    {
      if (sizeof(ui32CRCCalculated)
          == write(iFile, (char*) &ui32CRCCalculated,
                   sizeof(ui32CRCCalculated)))
      {
        close(iFile);
#if !defined(WIN32)
        sync();
        sync();
        sync();
#endif
        dbg_msg("VHQ: update_crc: Config file checksum correct\n");
        return TRUE;
      }
    }
  }
  else
  {
    dbg_err("VHQ: update_crc: Couldn't open input file\n");
  }

  error_fail: if (iFile > -1)
    close(iFile);

  if (pszFileBuffer)
    free(pszFileBuffer);

//  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "VHQ: update_crc: Config file checksum failed\n");
  return FALSE;
}
#endif

#ifdef Mx2
static bool check_crc(char *pszFilename, char *pszCrcFile)
{
  char *pszFileBuffer = NULL;  // max config file size
  struct stat sStat;
  int iFile = -1;
  uint32 ui32CRCCalculated = 0, ui32ReadCRC = 0;

  iFile = open(pszFilename, O_RDONLY | O_EXCL);
  if (iFile > -1)
  {
    fstat(iFile, &sStat);
    if (S_ISREG(sStat.st_mode))
    {
      pszFileBuffer = (char*) malloc(sStat.st_size);
      if (pszFileBuffer)
      {
        if (sStat.st_size == read(iFile, pszFileBuffer, sStat.st_size))
        {
          ui32CRCCalculated = svcCrcCalc(5, (unsigned char*) pszFileBuffer,
                                         sStat.st_size);
          free(pszFileBuffer);
        }
        else
        {
          free(pszFileBuffer);
          dbg_err("VHQ: Config file checksum read failure\n");
          goto error_fail;
        }
      }
    }
    else
    {
      dbg_err("VHQ: Config file checksum file can't be openedr\n");
      goto error_fail;
    }

    close(iFile);
    iFile = open(pszCrcFile, O_RDONLY | O_EXCL,
                 S_IWUSR | S_IRUSR | S_IWOTH | S_IRGRP | S_IWGRP | S_IRGRP);
    if (iFile > -1)
    {
      if (sizeof(ui32ReadCRC)
          == read(iFile, (char*) &ui32ReadCRC, sizeof(ui32ReadCRC))
          && (ui32ReadCRC == ui32CRCCalculated))
      {
        close(iFile);
        iFile = -1;
        dbg_msg("VHQ: Config file checksum correct\n");
        return TRUE;
      }
      // if file didn't authenticate, still need to close
      dbg_err("VHQ: Config file checksum incorrect, read: %x, calulcated %x\n",
              ui32ReadCRC, ui32CRCCalculated);
      close(iFile);
      iFile = -1;
    }
    else
    {
      log_err("VHQ: Config file checksum file can't be opened\n");
    }

  }
  else
  {
    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "VHQ: Config file can't be opened\n");
  }

  error_fail: if (iFile > -1)
    close(iFile);

  dbg_msg("VHQ: Config file checksum failed\n");
  return FALSE;
}
#endif


static bool iniparser_save(char *pszFile, bool sem_locked)
{
  FILE *pFile = NULL;

  if (!g_pParameters)
  {
    dbg_msg("%s: Config file not loaded. Nothing to save\r\n", __FUNCTION__);
    return FALSE;
  }

  if (!sem_locked)
  {
    VHQWaitSemaphore();
  }

  pFile = fopen(pszFile, "w+");
  if (pFile == NULL)
    return FALSE;
  iniparser_dump_ini(g_pParameters, pFile);
  fclose(pFile);

  chmod(pszFile, 0664);

  if (!sem_locked)
  {
    VHQUnlockSemaphore();
  }

#ifndef WIN32
  sync();
  sync();
  sync();
#endif
  return TRUE;
}

#ifndef VHQ_CERT_VERIFIER


bool VerifyFilePermissions(char *pszConfigFile)
{
#if !defined(WIN32)
  uid_t my_uid = getuid();
  int num_groups;
  gid_t my_gids[64];
  struct stat file_stat;
  char permissions_str[16];

  dbg_msg("%s: checking permissions of %s\n", __FUNCTION__, pszConfigFile);

  /* Make sure the file exists */
  if (stat(pszConfigFile, &file_stat) != 0)
  {
    dbg_msg("%s: %s does not exist - returning FALSE\n", __FUNCTION__,
            pszConfigFile);
    return FALSE;
  }

  if (file_stat.st_mode & S_IROTH)
  {
    dbg_notice("%s: we have 'other' read priveleges - returning TRUE\n",
               __FUNCTION__);
    return TRUE;
  }

  if (file_stat.st_mode & S_IRGRP)
  {
    int i;
    num_groups = getgroups(64, my_gids);

    for (i = 0; i < num_groups; i++)
    {
      if (my_gids[i] == file_stat.st_gid)
      {
        dbg_msg(
            "%s: we have group read priveleges as gid %d - returning TRUE\n",
            __FUNCTION__, my_gids[i]);
        return TRUE;
      }
      dbg_msg(
          "%s: no group read priveleges in gid %d (file gid = %d) - returning TRUE\n",
          __FUNCTION__, my_gids[i], file_stat.st_gid);
    }
  }

  if ((my_uid == file_stat.st_uid) && (file_stat.st_mode & S_IRUSR))
  {
    dbg_msg("%s: we have owner read priveleges - returning TRUE\n",
            __FUNCTION__);
    return TRUE;
  }

  dbg_msg("%s: no read priveleges - setting up permission string\n",
          __FUNCTION__);
  memset(permissions_str, 0, sizeof(permissions_str));

  /* Setup directory */
  if (S_ISDIR(file_stat.st_mode))
    strcpy(permissions_str, "d");
  else
    strcpy(permissions_str, "-");

  /* Setup owner permissions */
  if (file_stat.st_mode & S_IRUSR)
    strcat(permissions_str, "r");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IWUSR)
    strcat(permissions_str, "w");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IXUSR)
    strcat(permissions_str, "x");
  else
    strcat(permissions_str, "-");

  /* Setup group permissions */
  if (file_stat.st_mode & S_IRGRP)
    strcat(permissions_str, "r");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IWGRP)
    strcat(permissions_str, "w");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IXGRP)
    strcat(permissions_str, "x");
  else
    strcat(permissions_str, "-");

  /* Setup other permissions */
  if (file_stat.st_mode & S_IROTH)
    strcat(permissions_str, "r");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IWOTH)
    strcat(permissions_str, "w");
  else
    strcat(permissions_str, "-");
  if (file_stat.st_mode & S_IXOTH)
    strcat(permissions_str, "x");
  else
    strcat(permissions_str, "-");

  log_err("%s: Invalid permissions on %s - %s (Need read priveleges)\n",
          __FUNCTION__, pszConfigFile, permissions_str);
  return FALSE;
#else
    return TRUE;
#endif
}

#ifdef Mx2

static bool CompareProcessedCfgFileCkSum(char *CfgFileUpdateName)
{
  char InitCfgCkSumFile[512] = { 0 };

  GetFileNameForInstance(InitCfgCkSumFile, (char*) VHQ_INITIAL_CFG_CKSUM,
                         GetCurrentInstance());

  return check_crc(CfgFileUpdateName, InitCfgCkSumFile);
}

static void SaveProcessedCfgFileCkSum(char *CfgFileUpdateName)
{
  char InitCfgCkSumFile[512] = { 0 };

  memset(InitCfgCkSumFile, 0, sizeof(InitCfgCkSumFile));
  GetFileNameForInstance(InitCfgCkSumFile, (char*) VHQ_INITIAL_CFG_CKSUM,
                         GetCurrentInstance());

  update_crc(CfgFileUpdateName, InitCfgCkSumFile);
}

static void RemoveProcessedCfgFileCkSum(void)
{
  char InitCfgCkSumFile[512];

  memset(InitCfgCkSumFile, 0, sizeof(InitCfgCkSumFile));
  GetFileNameForInstance(InitCfgCkSumFile, (char*) VHQ_INITIAL_CFG_CKSUM,
                         GetCurrentInstance());

  removeFile(InitCfgCkSumFile);
}

static void SaveProcessedConnProfileFileCkSum(char *profile)
{
  char ConnProfileCkSumFile[512] = { 0 };

  memset(ConnProfileCkSumFile, 0, sizeof(ConnProfileCkSumFile));
  GetFileNameForInstance(ConnProfileCkSumFile,
                         (char*) VHQ_INITIAL_CONN_PROFILE_CKSUM,
                         GetCurrentInstance());
  update_crc(profile, (char*) ConnProfileCkSumFile);
}

static void RemoveProcessedConnProfileFileCkSum(void)
{
  char ConnProfileCkSumFile[512] = { 0 };

  memset(ConnProfileCkSumFile, 0, sizeof(ConnProfileCkSumFile));
  GetFileNameForInstance(ConnProfileCkSumFile,
                         (char*) VHQ_INITIAL_CONN_PROFILE_CKSUM,
                         GetCurrentInstance());
  removeFile(ConnProfileCkSumFile);
}


void DeleteNetworkProfiles(char *InstanceName)
{
  char PrivConnProfileFilename[256] = { 0 };
  GetFileNameForInstance(PrivConnProfileFilename,
                         (char*) VHQ_PRIVATE_CONN_PROFILE, InstanceName);

  if (FileExists(PrivConnProfileFilename))
  {
    xmlDocPtr doc;
    doc = xmlParseFile(PrivConnProfileFilename);
    if (doc)
    {
      xmlNodePtr cur = xmlDocGetRootElement(doc);
      if (cur)
        cur = cur->xmlChildrenNode;
      while (cur != NULL)
      {
        if (!xmlStrcasecmp(cur->name, (const xmlChar*) "CONNECTION"))
        {
          xmlNodePtr section = cur->xmlChildrenNode;
          while (section != NULL)
          {
            if (section->type == XML_ELEMENT_NODE
                && !xmlStrcasecmp(section->name, (const xmlChar*) "NETWORK"))
            {
              char filename[512];
              snprintf(filename, sizeof(filename), "%s.xml",
                       (const char*) xmlNodeGetContent(section));
              log_dbg("%s: file '%s' obsoleted, remove\n", __FUNCTION__,
                      filename);
              if (removeFile(filename) == FALSE)
                log_err("%s: file '%s' failed to remove\n", __FUNCTION__,
                        filename);
            }
            section = section->next;
          }
        }
        cur = cur->next;
      }
      xmlFreeDoc(doc);
      doc = NULL;
    }

    char ConnProfileCkSumFilename[256] = { 0 };
    GetFileNameForInstance(ConnProfileCkSumFilename,
                           (char*) VHQ_INITIAL_CONN_PROFILE_CKSUM,
                           InstanceName);
    if (removeFile(ConnProfileCkSumFilename) == FALSE)
    {
      log_err(
          "%s: Initial connection checksum failed to remove or not present\n",
          __FUNCTION__);
    }

    if (removeFile(PrivConnProfileFilename) == FALSE)
    {
      log_err("%s: Private connection profile failed to remove\n",
              __FUNCTION__);
    }
  }
}
#endif

#define MAX_FILE_SIZE_COMPARE       (50 * 1024)

static bool IsSameFile(const char *file1, const char *file2)
{
  bool ret_val = FALSE;
  struct stat file1_stat;
  struct stat file2_stat;
  char *file1_buf = NULL;
  char *file2_buf = NULL;
  FILE *file1_handle;
  FILE *file2_handle;

  /* If one of the files does not exist then they are not the same */
  if (stat(file1, &file1_stat) != 0)
  {
    dbg_msg("%s: %s does not exist - returning FALSE\n", __FUNCTION__, file1);
    return FALSE;
  }

  if (stat(file2, &file2_stat) != 0)
  {
    dbg_msg("%s: %s does not exist - returning FALSE\n", __FUNCTION__, file2);
    return FALSE;
  }

  /* If the sizes are not the same then the files are not the same */
  if (file1_stat.st_size != file2_stat.st_size)
  {
    dbg_msg("%s: %s size %d does not match %s size %d - returning FALSE\n",
            __FUNCTION__, file1, file1_stat.st_size, file2, file2_stat.st_size);
    return FALSE;
  }

  /* The files exist and are the same size so lets compare them.
   Note that we'll only allow a max file comparison of 50 Kb */
  if ((file1_stat.st_size > MAX_FILE_SIZE_COMPARE)
      || (file2_stat.st_size > MAX_FILE_SIZE_COMPARE))
  {
    log_err("%s: %s size %d is too large for a comparison - returning FALSE\n",
            __FUNCTION__, file1, file1_stat.st_size);
    return FALSE;
  }

  file1_buf = (char*) malloc(file1_stat.st_size);
  if (file1_buf == NULL)
  {
    log_err("%s: couldn't malloc %d bytes for file 1 - returning FALSE\n",
            __FUNCTION__, file1_stat.st_size);
    return FALSE;
  }

  file2_buf = (char*) malloc(file2_stat.st_size);
  if (file2_buf == NULL)
  {
    log_err("%s: couldn't malloc %d bytes for file 2 - returning FALSE\n",
            __FUNCTION__, file2_stat.st_size);
    ret_val = FALSE;
    goto cleanup;
  }

  /* Clear the buffers */
  memset(file1_buf, 0, file1_stat.st_size);
  memset(file2_buf, 0, file2_stat.st_size);

  file1_handle = fopen(file1, "rb");

  if (file1_handle)
  {
    ret_val = fread(file1_buf, 1, file1_stat.st_size, file1_handle);
    fclose(file1_handle);
  }
  else
  {
    ret_val = FALSE;
    goto cleanup;
  }

  file2_handle = fopen(file2, "rb");
  if (file2_handle)
  {
    ret_val = fread(file2_buf, 1, file2_stat.st_size, file2_handle);
    fclose(file2_handle);
  }
  else
  {
    ret_val = FALSE;
    goto cleanup;
  }

  if (memcmp(file1_buf, file2_buf, file1_stat.st_size) == 0)
  {
    dbg_msg("%s: %s and %s are the same\n", __FUNCTION__, file1, file2);
    ret_val = TRUE;
  }
  else
  {
    dbg_msg("%s: %s and %s are different\n", __FUNCTION__, file1, file2);
    ret_val = FALSE;
  }

  cleanup: if (file1_buf)
    free(file1_buf);
  if (file2_buf)
    free(file2_buf);

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

static bool IsMaintenanceDay(int w_day, int m_day)
{
  const char *szDayTable[] = { "Su", "M", "Tu", "W", "Th", "F", "Sa" };

  assert(w_day < 7);
  if (maint_schedule.days[0] == '*')
  {
    return TRUE;
  }
  if (w_day < 7)
  {
    char *day = (char*) szDayTable[w_day];
    char *result;
    dbg_msg("%s: Checking if %s is in maint_schedule.days (%s)\n", __FUNCTION__,
            day, maint_schedule.days);
    result = strstr(maint_schedule.days, day);
    if (result)
    {
      return TRUE;
    }
    dbg_msg(
        "%s: %s is NOT in maint_schedule.days (%s) - checking if month day is a maintenance day\n",
        __FUNCTION__, day, maint_schedule.days);
  }
  if (m_day < 32)
  {
    char day[16];
    char *result;

    sprintf(day, "m%dm", m_day);
    dbg_msg("%s: Checking if %s is in maint_schedule.days (%s)\n", __FUNCTION__,
            day, maint_schedule.days);
    result = strstr(maint_schedule.days, day);
    if (result)
    {
      return TRUE;
    }
    dbg_msg("%s: monthday %s is NOT in maint_schedule.days (%s)\n",
            __FUNCTION__, day, maint_schedule.days);
  }
  return FALSE;
}

static time_t getMWStart(time_t check_time)
{
  time_t ret_val = (time_t) -1;
  struct tm pTM;
  struct tm timeParts;

  if (check_time == (time_t) -1)
    return ret_val;

  if (!linux_localtime(&check_time, &pTM))
    return ret_val;

  if (!IsMaintenanceDay(pTM.tm_wday, pTM.tm_mday))
    return ret_val;

  /* We have day, let's calculate MW start for this day */
  memcpy(&timeParts, &pTM, sizeof(struct tm));

  /* Overwrite hour/min/sec with MW start time. */
  timeParts.tm_sec = 0;
  timeParts.tm_min = maint_schedule.start_time % 100;
  timeParts.tm_hour = maint_schedule.start_time / 100;
  /* convert maint. window start date and time to epoch seconds */
  ret_val = linux_mktime(&timeParts);

  return ret_val;
}

static time_t getCurrentMWStart(time_t check_time)
{
  time_t mw_start = getMWStart(check_time);

  if (maint_schedule.start_time > maint_schedule.end_time)
  {
    if ((mw_start == (time_t) -1) || (check_time < mw_start))
    {
      /* We have MW crossing over midnight:
       *   maintenancedays  = TuW
       *   maintenancestart = 2200
       *   maintenanceend   = 0500
       * For process like (ADKTMS-2713):
       * -----------------------------------------------
       *  |  Mon  |  *Tu*  |   *W*   |   Th   |   Fr  |
       * ---------------(22  5)---(22  5)---------------
       * we need to know possible start of MW inside of previous WM:
       * - if current day is not related to MW  ->  "mw_start == (time_t) -1"
       * - or current time is before MW start   ->  "check_time < mw_start"
       * , check for a "tail"
       */
      dbg_msg("%s: MW crosses midnight, check 'tail' of previous day\n",
              __FUNCTION__);
      check_time -= 24 * 60 * 60;
      mw_start = getMWStart(check_time);
    }
  }

  return mw_start;
}

static time_t getNextMWStart(time_t Time, time_t expiry_time)
{
  int days_in_month = 32;
  time_t check_time = Time;
  time_t mw_start = (time_t) -1;
  time_t mw_end = (time_t) -1;

  /* Search for next one, during one month, if required */
  do
  {
    mw_start = getCurrentMWStart(check_time);

    if (expiry_time > 0 && mw_start > expiry_time)
    {
      mw_start = (time_t) -1;
      break;
    }

    mw_end = mw_start + maint_schedule.length_in_sec - 10 * 60;

    /* Cut WM in case if we have installation time before MW end */
    if (expiry_time > 0 && mw_end > expiry_time)
    {
      mw_end = expiry_time;
    }

    check_time += 24 * 60 * 60;
  }
  while (((mw_start == (time_t) -1) || (mw_end < Time)) && days_in_month--);

  return mw_start;
}
bool IsInMaintenanceWindow(time_t Time, bool *MWIsAllDay)
{
  time_t mw_start = getCurrentMWStart(Time);
  time_t mw_end;

  /* Reset to default */
  if (MWIsAllDay)
    *MWIsAllDay = FALSE;

  /* Check do we can use current MW day */
  if (mw_start != (time_t) -1)
  {
    mw_end = mw_start + maint_schedule.length_in_sec;
    dbg_notice("%s: mw_start = %lu, Time = %lu, mw_end = %lu \n", __FUNCTION__,
               mw_start, Time, mw_end);
    if ((mw_start <= Time) && (Time < mw_end))
    {
      if (MWIsAllDay && maint_schedule.length_in_sec == 24 * 60 * 60)
        *MWIsAllDay = TRUE;
      return TRUE;
    }
  }
  return FALSE;
}

uint32 VHQRunTimeForDownload(time_t expiry_time, time_t run_time,
                             uint8 timer_type)
{
  time_t cur_time = linux_time(NULL);
  time_t mw_start = 0;
  time_t mw_end = 0;
  time_t diffTime;
  uint32 newRunTime = 0;
  struct timeval cur_tv = (struct timeval ) { 0 };
  int random_number = 0;
  bool maint_dl_staggering_enabled = TRUE;

  /* Without expiry time we won't be able to calculate the random time */
  if (expiry_time == 0)
  {
    return 0;
  }

  VHQGetParameterBool(PARAM_AGENT_DOWNLOAD_STAGGERING_ENABLED,
                      &maint_dl_staggering_enabled);

  /* Convert runtime to Date/Time from RTC time */
  if (run_time && timer_type == EVENT_TIMER_RTC)
  {
    time_t offset = linux_time(NULL) - GetRTC();
    run_time = run_time + offset;
    expiry_time = expiry_time + offset;
  }

  /* We need to reschedule DL inside of next MW, use staggering always */
  mw_start = getNextMWStart(cur_time, expiry_time);

  if (mw_start == (time_t) -1)
  {
    return 0;
  }
  else
  {
    if (maint_schedule.hb_mw_in_sec < maint_schedule.length_in_sec)
      mw_start += maint_schedule.hb_mw_in_sec;
  }

  /* MW end for downloads is end of mw_start + mw_dl_start  */
  int mw_dl_offset = maint_schedule.hb_mw_in_sec + maint_schedule.dl_mw_in_sec;

  if (mw_dl_offset < maint_schedule.length_in_sec)
    mw_end = mw_start + mw_dl_offset;
  else
    mw_end = mw_start + maint_schedule.length_in_sec - 10*60;

  if (mw_end <= mw_start)
  {
    return 0;
  }

  /* Cut WM in case if we have installation time before MW end */
  if (expiry_time > 0 && mw_end > expiry_time)
  {
    mw_end = expiry_time;
  }

  if (mw_end < cur_time)
  {
    dbg_err("%s: MW in the past (mw_end = %lu, cur_time = %lu)\n", __FUNCTION__,
            mw_end, cur_time);
    return 0;
  }

  /* Calculate how much time we have before MW end, we need to place our download there */
  if (cur_time < mw_start)
  {
    if (run_time)
      newRunTime = mw_start - run_time;
    else
      newRunTime = mw_start - cur_time;

    cur_time = mw_start;
  }
  else
  {
    if (run_time && cur_time > run_time)
      newRunTime = cur_time - run_time + 1;
  }

  dbg_msg("%s: MW Start Time (after adjust): %lu\n", __FUNCTION__, mw_start);
  dbg_msg("%s: MW End Time (after adjust): %lu\n", __FUNCTION__, mw_end);

  /* If staggering calculate Random time, else report next MW start time */
  if (maint_dl_staggering_enabled)
  {
    /* Calculate how much time we have before MW end, we need to place our download there */
    diffTime = mw_end - cur_time;

    gettimeofday(&cur_tv, NULL);
    srand(cur_tv.tv_usec);
    random_number = rand();

    newRunTime += (uint32) random_number % diffTime;
    dbg_notice(
        "%s: New Random Run Time %u (random_number = %d, diffTime = %lu)\n",
        __FUNCTION__, newRunTime, random_number, diffTime);
  }
  else
  {
    dbg_msg("%s: New Run Time %u \n", __FUNCTION__, newRunTime);
  }

  return newRunTime;
}

int GetSecondsToNextHeartbeat(uint32 hb_rate)
{
  time_t cur_time = linux_time(NULL);
  time_t mw_start = (time_t) -1;
  time_t hb_moment;
  int ret_val = 0;

  if (IsInMaintenanceWindow(cur_time, NULL))
  {
    /* We are in the maintenance window now so return 0 */
    dbg_msg("%s: Currently in maintenance window - returning %d\n",
            __FUNCTION__, ret_val);
    return ret_val;
  }

  /* Device outside of MW but at least one HB should be inside of next MW */
  mw_start = getNextMWStart(cur_time, (time_t) -1);

  /* We have no next MW during next month, return */
  if (mw_start == (time_t) -1)
  {
    dbg_msg("%s: During next month we have no MW, return %d\n", __FUNCTION__,
            ret_val);
    return ret_val;
  }

  /* We need to avoid attempts to communicate at the same moment from a lot of devices when they have the same clock and MW settings */
  {
    unsigned char random[8];
    uint32 *ui32rand_p;
    uint32 HB_offset;

    /* Stagger MHB */
    GenerateRandom(&random[0]);
    ui32rand_p = (uint32*) &random[0];
    HB_offset = *ui32rand_p % maint_schedule.hb_mw_in_sec;

    hb_moment = mw_start + HB_offset;

    dbg_msg(
        "%s: Next available MW is form %lu to %lu, we need to place HB at %lu which is shifted by %d from MW start\n",
        __FUNCTION__, mw_start, mw_start + maint_schedule.length_in_sec,
        hb_moment, HB_offset);
  }

  /* We know where we have to have HB, calculate offset */
  ret_val = (hb_moment - cur_time) % hb_rate;

  dbg_msg("%s: To start HB at %lu we have to shift for %d \n", __FUNCTION__,
          hb_moment, ret_val);
  return ret_val;
}
#endif  // VHQ_CERT_VERIFIER

int VHQDataAccessCB(char *paramName, char *paramValue, size_t paramValueLen)
{
  char *slash_ptr;

  if ((paramName == NULL) || (paramValue == NULL))
  {
    log_err(
        "%s ERROR: paramName (0x%08x) OR paramValue (0x%08x) is NULL - returning TMS_STATUS_EINVAL\n",
        __FUNCTION__, paramName, paramValue);
    return TMS_STATUS_EINVAL;
  }

  //DebugMsg(VHQ_LOGGING_LEVEL_STANDARD, "%s: Searching for parameter %s\n", __FUNCTION__, paramName);

  slash_ptr = strstr(paramName, "/");
  if (slash_ptr)
  {
    char section[512];

    memset(section, 0, sizeof(section));
    if ((uint32) (slash_ptr - paramName) < sizeof(section))
    {
      char param[512];

      memcpy(section, paramName, slash_ptr - paramName);
      snprintf(param, sizeof(param), "%s", slash_ptr + 1);

      //DebugMsg(VHQ_LOGGING_LEVEL_STANDARD, "%s: Retrieving parameter '%s:%s'\n", __FUNCTION__, section, param);
      return VHQGetParameter(section, param, paramValue, paramValueLen);
    }
    else
      dbg_err("%s ERROR: Unable to extract section from %s\n", __FUNCTION__,
              paramName);
  }
  else
  {
    log_err("%s ERROR: Unable to parse parameter %s\n", __FUNCTION__,
            paramName);
  }

  return TMS_STATUS_HASH_GEN_PARAM_DOESNT_EXIST;
}


bool VHQMergeConfigFile(char *pszConfigFile, CALLBACK_INI_EVENT pfnIniCallback)
{
  int i;
  bool priv_config_updated = FALSE;
  dictionary *usrConfigParms = NULL;
  param_file_reporting_t reporting_type = GetParamFileReportingType();
  struct tmsParamUpdateItemStruct update_array[TMS_MAX_PARAM_UPDATE_COUNT];
  struct tmsParamUpdateStruct update_st;
  struct tmsReturn tms_ret_st;

  dbg_trace("%s: +\r\n", __FUNCTION__);

  memset(&update_st, 0, sizeof(update_st));
  memset(&update_array, 0, sizeof(update_array));

  if (!g_pParameters)
  {
    log_err("%s: Config file not loaded\r\n", __FUNCTION__);
    return FALSE;
  }

  usrConfigParms = iniparser_load(pszConfigFile);

  if (!usrConfigParms)
  {
    log_err("%s: Couldn't load config file %s, errno=%d\r\n", __FUNCTION__,
            pszConfigFile, errno);
    return FALSE;
  }

  if (pfnIniCallback)
    pfnIniCallback(INI_EVENT_INITIAL_LOAD, (void*) usrConfigParms);

#ifdef ADK_SUPPORT
  GetInfoSvcDBLock();
  InfoDB *pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
  if (pInfSvcHandle == NULL)
  {
    log_err("%s ERROR: FAILURE opening INFO SVC database file\n", __FUNCTION__);
    ReleaseInfoSvcDBLock();
    /* Free up INI file container */
    iniparser_freedict(usrConfigParms);
    usrConfigParms = NULL;
    return FALSE;
  }
#endif

  for (i = 0; i < ciNumParams; i++)
  {
    const char *pszCurrentData = NULL;
    const char *pszFoundData = NULL;
    char szNameBuf[70];

    sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
            asParams[i].szValueName);

    VHQWaitSemaphore();
    pszCurrentData = iniparser_getstring(g_pParameters, szNameBuf,
                                         asParams[i].szDefaultValue);
    pszFoundData = iniparser_getstring(usrConfigParms, szNameBuf,
                                       pszCurrentData);
    VHQUnlockSemaphore();

    if (NULL != pszFoundData && NULL != pszCurrentData)
    {
      if (strcmp(pszCurrentData, pszFoundData) != 0)
      {
        if ((asParams[i].ID == PARAM_URL_ROOT)
            || (asParams[i].ID == PARAM_CUSTOMER_ID))
        {
          /* Don't remove the keys if the change is just in the case of the name */
          if (stricmp(pszCurrentData, pszFoundData) == 0)
          {
            dbg_notice(
                "%s: URL Root or Customer ID case changed (%s, %s) - storing new value but not removing keys\r\n",
                __FUNCTION__, pszCurrentData, pszFoundData);
          }
          else
          {
            int key_exch_index;

            for (key_exch_index = 0; key_exch_index < ciNumParams;
                key_exch_index++)
            {
              if (asParams[key_exch_index].ID == PARAM_KEYS_EXCHANGED)
              {
                char szKeysExchangedBuf[70];

                sprintf(szKeysExchangedBuf, "%.32s:%.32s",
                        asParams[key_exch_index].pszKeyName,
                        asParams[key_exch_index].szValueName);

                infosvc_setval(pInfSvcHandle, asParams[key_exch_index].type,
                               asParams[key_exch_index].pszKeyName,
                               asParams[key_exch_index].szValueName,
                               (char*) "False");
                VHQWaitSemaphore();
                /* Update value inside of user and private configurations */
                iniparser_setstr(usrConfigParms, szKeysExchangedBuf,
                                 (char*) "False");
                iniparser_setstr(g_pParameters, szKeysExchangedBuf,
                                 (char*) "False");
                VHQUnlockSemaphore();

                log_alert(
                    "%s: URL Root or Customer ID changed - clearing KeysExchanged (%s) and removing keys\r\n",
                    __FUNCTION__, szKeysExchangedBuf);
              }
            }
#ifndef WIN32
            log_alert("%s: Removing Agent Keys\r\n", __FUNCTION__);
            RemoveAgentKeys();
            ClearEventsTable();
#endif
          }
        }

        if ((asParams[i].ID == PARAM_KEYS_EXCHANGED) && initial_keyexchange)
        {
          /* Keyexchange was already done, this is when updating default values */
          initial_keyexchange = FALSE;
          continue;
        }

        dbg_notice(
            "%s: Found [%s]:%s=%s in USR config file - Overwriting %s in private config file\r\n",
            __FUNCTION__, asParams[i].pszKeyName, asParams[i].szValueName,
            pszFoundData, pszCurrentData);

        infosvc_setval(pInfSvcHandle, asParams[i].type, asParams[i].pszKeyName,
                       asParams[i].szValueName, pszFoundData);
        VHQWaitSemaphore();
        iniparser_setstr(g_pParameters, szNameBuf, pszFoundData);
        VHQUnlockSemaphore();

        priv_config_updated = TRUE;

        if (reporting_type == PARAM_FILE_REPORTING_CURRENT_CONTAINERS)
        {
          char szISKeyNameBuf[128] = { 0 };
          char szISNameBuf[128] = { 0 };

          INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf,
                                  sizeof(szISKeyNameBuf));
          INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf,
                                  sizeof(szISNameBuf));

          /* Deal with parameter updates */
          snprintf(update_array[update_st.paramUpdateCount].Application,
                   sizeof(update_array[update_st.paramUpdateCount].Application),
                   "%s", VHQ_APP_NAME);
          snprintf(update_array[update_st.paramUpdateCount].Container,
                   sizeof(update_array[update_st.paramUpdateCount].Container),
                   "%s", szISKeyNameBuf);
          snprintf(update_array[update_st.paramUpdateCount].Name,
                   sizeof(update_array[update_st.paramUpdateCount].Name), "%s",
                   szISNameBuf);
          snprintf(update_array[update_st.paramUpdateCount].Value,
                   sizeof(update_array[update_st.paramUpdateCount].Value), "%s",
                   pszFoundData);
          update_array[update_st.paramUpdateCount].ParamDefFile = VHQ_VPDX_FILE;
          update_array[update_st.paramUpdateCount].ParamDataCb =
              VHQDataAccessCB;
          update_st.paramUpdateCount++;

          if (update_st.paramUpdateCount >= TMS_MAX_PARAM_UPDATE_COUNT)
          {
            /* We can only send TMS_MAX_PARAM_UPDATE_COUNT updates at a time - send the updates now that we have reached the limit */
            dbg_msg(
                "%s: TMS_MAX_PARAM_UPDATE_COUNT (%d) has been reached - sending what we have so far\r\n",
                __FUNCTION__, TMS_MAX_PARAM_UPDATE_COUNT);
            update_st.paramUpdateList = update_array;

            tms_ret_st = tms_sendParameterUpdate(&update_st);
            if (tms_ret_st.status == TMS_STATUS_REQUESTED)
            {
              dbg_msg("%s: parameter update REQUESTED\r\n", __FUNCTION__);
            }
            else
            {
              log_err(
                  "%s ERROR: parameter update request FAILED (returned %d)!!!\n",
                  __FUNCTION__, tms_ret_st.status);
            }

            /* Clear the update data now that it has been requested */
            memset(&update_st, 0, sizeof(update_st));
            memset(&update_array, 0, sizeof(update_array));
          }

        }
      }
    }
  }

#ifdef ADK_SUPPORT
  closeSvcDB(pInfSvcHandle);
  ReleaseInfoSvcDBLock();
#endif

  /* We can free the new config dictionary */
  if (usrConfigParms)
  {
    dbg_msg("%s: Freeing merged dictionary\r\n", __FUNCTION__);
    iniparser_freedict(usrConfigParms);
    usrConfigParms = NULL;
  }

  if (priv_config_updated)
  {
    char CfgFileName[512] = { 0 };

    dbg_notice("%s: Saving merged config file\r\n", __FUNCTION__);
    GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                           GetCurrentInstance());
    iniparser_save(CfgFileName, FALSE);     // does it own mutex
  }
  else
    dbg_msg("%s: No changes need to be saved\r\n", __FUNCTION__);

  /* Update local varibales with new config data */
  UpdateLocalMW();
  UpdateLoggingLevel();

  if (update_st.paramUpdateCount)
  {
    update_st.paramUpdateList = update_array;
    tms_ret_st = tms_sendParameterUpdate(&update_st);
    if (tms_ret_st.status == TMS_STATUS_REQUESTED)
    {
      log_notice("%s: parameter update REQUESTED\r\n", __FUNCTION__);
    }
    else
    {
      log_err("%s ERROR: parameter update request FAILED (returned %d)!!!\n",
              __FUNCTION__, tms_ret_st.status);
    }
  }

  dbg_trace("%s: -\r\n", __FUNCTION__);
  return TRUE;
}


static bool VHQDeleteUnusedConfigItem(void)
{
  int i, j, k, nsec, nkeys;
  char szNameBuf[70];
  const char *SectionName;
  const char **KeyNames;
  bool keyfound = FALSE;
  bool ini_file_update = FALSE;

  if (!g_pParameters)
  {
    dbg_err("%s: Config file not loaded\r\n", __FUNCTION__);
    return FALSE;
  }

  VHQWaitSemaphore();

  nsec = iniparser_getnsec(g_pParameters);

  for (i = 0; i < nsec; i++)
  {
    SectionName = iniparser_getsecname(g_pParameters, i);
    nkeys = iniparser_getsecnkeys(g_pParameters, SectionName);
    const char **keys = (const char**) malloc(nkeys * sizeof(char*));
    KeyNames = iniparser_getseckeys(g_pParameters, SectionName, keys);

    if (KeyNames)
    {
      for (j = 0; j < nkeys; j++)
      {
        keyfound = FALSE;

        for (k = 0; k < ciNumParams; k++)
        {
          sprintf(szNameBuf, "%.32s:%.32s", asParams[k].pszKeyName,
                  asParams[k].szValueName);

          if (!stricmp(KeyNames[j], szNameBuf))
          {
            //DebugMsg("%s:%s is founded\n",__FUNCTION__, KeyNames[j]);
            keyfound = TRUE;
            break;
          }
        }

        if (keyfound == FALSE)
        {
          dbg_notice("%s: %s is not founed, delete it\n", __FUNCTION__,
                     KeyNames[j]);
          iniparser_unset(g_pParameters, KeyNames[j]);
          ini_file_update = TRUE;
        }
      }
      /* Free keyNames array */
      free(KeyNames);
    }
  }

  if (ini_file_update)
  {
    char CfgFileName[512];

    memset(CfgFileName, 0, sizeof(CfgFileName));
    GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                           GetCurrentInstance());

    iniparser_save(CfgFileName, TRUE);
    dbg_msg("%s: ini file is updated\n", __FUNCTION__);
  }

  VHQUnlockSemaphore();

  return ini_file_update;
}


static bool CheckVHQConfigUpdateDefaults(bool processUpdateFiles,
                                         bool *defaultConfig)
{
  bool ret_val = FALSE;
  char CfgFileUpdateName[512] = { 0 };
  char ChecksumFile[512] = { 0 };

  GetFileNameForInstance(CfgFileUpdateName, (char*) VHQ_INITIAL_CFG,
                         GetCurrentInstance());
  GetFileNameForInstance(ChecksumFile, (char*) VHQ_INITIAL_CFG_CKSUM,
                         GetCurrentInstance());

  *defaultConfig = !FileExists(ChecksumFile);

  if ((processUpdateFiles == TRUE) &&  // Make sure if we are going to update the config after this
      ((*defaultConfig) ||  // This is default case where the device didn't use any updated config until now
          (FileExists(CfgFileUpdateName))))  // If update config file is available we can update the default values.
  {
    bool bDeployMode = FALSE;
    VHQGetParameterBool(PARAM_AGENT_DEPLOY_MODE, &bDeployMode);

    /* Check again if we are in Deployment mode, just in case if we got any SetData/User Request after reboot */

    if (bDeployMode == FALSE)
    {
      const char *pszVersion;
      char szVersion[70];

      sprintf(szVersion, "%.32s:%.32s", asParams[0].pszKeyName,
              asParams[0].szValueName);

      VHQWaitSemaphore();
      pszVersion = iniparser_getstring(g_pParameters, szVersion, NULL);
      VHQUnlockSemaphore();

      /* Check for Version in VHQ.ini and any Version Update */
      if ((NULL == pszVersion)
          || ((NULL != pszVersion)
              && (strcmp(pszVersion, VHQ_DEFAULT_CONFIG_VERSION) != 0)))
      {
        ret_val = TRUE;
      }
    }
  }

  return ret_val;
}


static void VHQConfigUpdateAddMissingDefaults(bool processUpdateFiles)
{
  int i;
  bool missing_config_update = FALSE;
  bool priv_config_updated = FALSE;

  dbg_trace("%s: +\r\n", __FUNCTION__);

  if (!g_pParameters)
  {
    dbg_err("%s: Config file not loaded\r\n", __FUNCTION__);
    return;
  }

  /* ADKTMS-5032: First check the Default Config version */
  if (ciNumParams > 0)
  {
    bool defaultConfig = FALSE;

    if (CheckVHQConfigUpdateDefaults(processUpdateFiles, &defaultConfig))
    {
      /* Missing Default config version or Version updated. */
      bool keys_exchanged = FALSE;
      char url_root[256] = { 0 };
      char customer_id[64] = { 0 };
      char CfgFileName[512] = { 0 };
      char terminal_id[64] = { 0 };

      log_notice("%s: Change in Default config version\n", __FUNCTION__);

      GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                             GetCurrentInstance());

      /* No userconfig loaded until now or update config file still exist,
       * update the default file,
       * make sure key exchange is still intact */
      VHQGetParameterBool(PARAM_KEYS_EXCHANGED, &keys_exchanged);

      /* Get URL and Customer ID */
      VHQGetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root));
      VHQGetParameterString(PARAM_CUSTOMER_ID, customer_id,
                            sizeof(customer_id));
      VHQGetParameterString(PARAM_TERMINAL_ID, terminal_id,
                            sizeof(terminal_id));

      if (keys_exchanged)
      {
        /* ADKTMS-5071: Make sure certs are intact and only default cert is updated.
         * If SSL Protocol certificate was updated using userconfig create a copy of
         * Server Protocol certificate, this will be reverted to avoid keyexchange */
        CopyFile(SRV_PUB_KEY_CERTFILE,
                 (const char*) SRV_PUB_KEY_CERTFILE TMP_FILE);

        /* Make sure keys are saved & reverted */
        CopyFile(AGENT_MAC_KEY_FILE, (const char*) AGENT_MAC_KEY_FILE TMP_FILE);
        CopyFile(AGENT_ENCR_KEY_FILE,
                 (const char*) AGENT_ENCR_KEY_FILE TMP_FILE);
        CopyFile(AGENT_PUB_KEY_CERTFILE,
                 (const char*) AGENT_PUB_KEY_CERTFILE TMP_FILE);
        CopyFile(AGENT_RSA_KEY_FILE, (const char*) AGENT_RSA_KEY_FILE TMP_FILE);
        CopyFile(AGENT_RSA_KEY_PW_FILE,
                 (const char*) AGENT_RSA_KEY_PW_FILE TMP_FILE);
      }

      /* Remove old VHQ.ini and create new file with default values */
      if (removeFile(CfgFileName))
      {
        char FileName[512] = { 0 };

        iniparser_freedict(g_pParameters);
        g_pParameters = NULL;

        CreateDefaultConfigFile();

        /* Set Key exchange if required */
        if (keys_exchanged)
        {
          if (defaultConfig)
          {
            /* Default case */
            char new_url_root[256] = { 0 };
            char new_customer_id[64] = { 0 };

            VHQGetParameterString(PARAM_URL_ROOT, new_url_root,
                                  sizeof(new_url_root));
            VHQGetParameterString(PARAM_CUSTOMER_ID, new_customer_id,
                                  sizeof(new_customer_id));

            /* If VHQ Home URL or Customer ID changed or Protocol cert is updated - remove keys */
            if (strcmp(url_root, new_url_root)
                || strcmp(customer_id, new_customer_id)
                || !IsSameFile(SRV_PUB_KEY_CERTFILE TMP_FILE,
                               SRV_PUB_KEY_CERTFILE))
            {
              log_notice(
                  "%s: Default URL Root or Customer ID or Cert changed, remove keys\n",
                  __FUNCTION__);
              RemoveAgentKeys();
            }
            else
            {
              /* Set earlier key state */
              VHQSetParameterBool(PARAM_KEYS_EXCHANGED, TRUE, TRUE);
            }
          }
          else
          {
            char CfgFileUpdateName[512] = { 0 };

            GetFileNameForInstance(CfgFileUpdateName,
                                   (char*) VHQ_INITIAL_FLASH_CFG,
                                   GetCurrentInstance());

            initial_keyexchange = TRUE;

            if (FileExists(CfgFileUpdateName))
            {
              /* If config exists in sys flash update it now itself */
              VHQUpdateConfig();
            }

            VHQSetParameterString(PARAM_URL_ROOT, url_root, sizeof(url_root),
                                  TRUE);
            VHQSetParameterString(PARAM_CUSTOMER_ID, customer_id,
                                  sizeof(customer_id), TRUE);
            VHQSetParameterBool(PARAM_KEYS_EXCHANGED, TRUE, TRUE);
            if(strlen(terminal_id))
              VHQSetParameterString(PARAM_TERMINAL_ID, terminal_id,
                                  sizeof(terminal_id), TRUE);

            /* PEM files are updated later */
            MoveFile((const char*) SRV_PUB_KEY_CERTFILE TMP_FILE,
                     SRV_PUB_KEY_CERTFILE);

            MoveFile((const char*) AGENT_MAC_KEY_FILE TMP_FILE,
                     AGENT_MAC_KEY_FILE);
            MoveFile((const char*) AGENT_ENCR_KEY_FILE TMP_FILE,
                     AGENT_ENCR_KEY_FILE);
            MoveFile((const char*) AGENT_PUB_KEY_CERTFILE TMP_FILE,
                     AGENT_PUB_KEY_CERTFILE);
            MoveFile((const char*) AGENT_RSA_KEY_FILE TMP_FILE,
                     AGENT_RSA_KEY_FILE);
            MoveFile((const char*) AGENT_RSA_KEY_PW_FILE TMP_FILE,
                     AGENT_RSA_KEY_PW_FILE);
          }
        }

#ifdef ADK_SUPPORT
        /* Delete the old DB and XML files and create new one */
        GetFileNameForInstance(FileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                               GetCurrentInstance());
        if (!removeFile(FileName))
        {
          log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
        }

        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG,
                               GetCurrentInstance());
        if (!removeFile(FileName))
        {
          log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
        }

        dbg_msg("%s: Syncing INI file to INFO SVC DB\n", __FUNCTION__);
        SyncIniCfgWithInfoSvc(SYNC_MASTER_INI);
#endif
      }
      else
      {
        log_err("%s: Failed to remove default config file.\n", __FUNCTION__);
        missing_config_update = TRUE;
      }
    }
    else
    {
      /* processUpdateFiles is set to false or
       * Update file missing and vhqconfig.cksum is present,
       * Don't do anything and just log as we might miss user configuration.
       * Update the defaults when user config is being loaded again.
       */
      log_dbg("%s: Skipping check for default values update.\n", __FUNCTION__);
      missing_config_update = TRUE;
    }
  }

  /* Update missing parameters */
  if (missing_config_update)
  {
#ifdef ADK_SUPPORT
    GetInfoSvcDBLock();
    InfoDB *pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
    if (pInfSvcHandle == NULL)
    {
      log_err("%s ERROR: FAILURE opening INFO SVC database file\n",
              __FUNCTION__);
      ReleaseInfoSvcDBLock();
      return;
    }
#endif
    /* Update missing config values */
    for (i = 1; i < ciNumParams; i++)
    {
      const char *pszCurrentData;
      char szNameBuf[70];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);

      VHQWaitSemaphore();
      pszCurrentData = iniparser_getstring(g_pParameters, szNameBuf, NULL);
      VHQUnlockSemaphore();

      if ((NULL == pszCurrentData)
          || ((asParams[i].ID == PARAM_OPERATING_MODE)
              && ((strcmp(pszCurrentData, "") == 0)
                  || (strncasecmp(pszCurrentData, "DisabledComm",
                                  strlen("DisabledComm")) == 0))))
      {
        dbg_notice(
            "%s: Either %s is missing from the INI file, value is blank, or value is already deprecated - adding default value %s\r\n",
            __FUNCTION__, szNameBuf, asParams[i].szDefaultValue);

        infosvc_setval(pInfSvcHandle, asParams[i].type, asParams[i].pszKeyName,
                       asParams[i].szValueName, asParams[i].szDefaultValue);
        VHQWaitSemaphore();
        iniparser_setstr(g_pParameters, szNameBuf, asParams[i].szDefaultValue);
        VHQUnlockSemaphore();
        priv_config_updated = TRUE;
      }
    }
#ifdef ADK_SUPPORT
    closeSvcDB(pInfSvcHandle);
    ReleaseInfoSvcDBLock();
#endif
  }

  if (priv_config_updated)
  {
    char CfgFileName[512] = { 0 };
    dbg_notice("%s: Saving updated config file with defaults\r\n",
               __FUNCTION__);
    GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                           GetCurrentInstance());
    iniparser_save(CfgFileName, FALSE);     // does it own mutex
  }
  else
    dbg_msg("%s: No changes need to be saved\r\n", __FUNCTION__);

  dbg_trace("%s: -\r\n", __FUNCTION__);
}


static bool CheckAndRepairCorruptINI(char *pszConfigFile)
{
  bool ret_val = TRUE;
  int num_ini_sections = 0;

  VHQWaitSemaphore();

  /* Only try and get the number of sections if global dictionary is not NULL */
  if (g_pParameters)
    num_ini_sections = iniparser_getnsec(g_pParameters);

  dbg_msg("%s: num ini sections = %d\n", __FUNCTION__, num_ini_sections);
  if (g_pParameters && num_ini_sections < 1)
  {
    FILE *in;
    FILE *out;

    char line[ASCIILINESZ + 1];
    char section[ASCIILINESZ + 1];
    char key[ASCIILINESZ + 1];
    char val[ASCIILINESZ + 1];
    char temp_file[1024];
    char *line_search_start;

    int last = 0;
    int len;
    int lineno = 0;

    log_alert("%s: INI file has become corrupted - num ini sections = %d\n",
              __FUNCTION__, num_ini_sections);

    log_alert("%s: Freeing global dictionary to repair %s\r\n", __FUNCTION__,
              pszConfigFile);
    iniparser_freedict(g_pParameters);
    g_pParameters = NULL;

    /* This code is mostly taken from iniparser.c - iniparser_load function with some modifications */
    if ((in = fopen(pszConfigFile, "r")) == NULL)
    {
      log_err("%s: cannot open %s\n", __FUNCTION__, pszConfigFile);
      ret_val = FALSE;

      if (FileExists(pszConfigFile))
      {
        log_err(
            "%s: %s exists but we can't open it - probable file handle leak so not attempting to repair INI\n",
            __FUNCTION__, pszConfigFile);
        VHQUnlockSemaphore();
        return TRUE;
      }
    }

    strcpy(temp_file, pszConfigFile);
    strcat(temp_file, ".reconstructed");

    if ((out = fopen(temp_file, "w+")) == NULL)
    {
      log_err("%s: cannot open %s\n", __FUNCTION__, temp_file);
      ret_val = FALSE;
    }

    if (in && out)
    {
      memset(line, 0, ASCIILINESZ);
      memset(section, 0, ASCIILINESZ);
      memset(key, 0, ASCIILINESZ);
      memset(val, 0, ASCIILINESZ);
      last = 0;

      while (fgets(line + last, ASCIILINESZ - last, in) != NULL)
      {

        char *colon_found;

        lineno++;
        len = (int) strlen(line) - 1;
        /* Safety check against buffer overflows */
        if (line[len] != '\n')
        {
          dbg_err("%s: input line too long in %s (%d)\n", __FUNCTION__,
                  pszConfigFile, lineno);
          ret_val = FALSE;
          break;
        }
        /* Get rid of \n and spaces at end of line */
        while ((len >= 0) && ((line[len] == '\n')))
        {
          line[len] = 0;
          len--;
        }
        /* Detect multi-line */
        if (line[len] == '\\')
        {
          /* Multi-line value */
          last = len;
          continue;
        }
        else
        {
          last = 0;
        }

        /* iniparser adds : in front of duplicates so move past any : characters at the beginning of the line */
        line_search_start = &line[0];
        while (*line_search_start == ':')
          line_search_start++;

        colon_found = strchr(line_search_start, ':');
        if (colon_found)
        {
          char *equals_found = strchr(colon_found, '=');

          if (equals_found)
          {
            int res;
            char temp_section[ASCIILINESZ + 1];

            memset(temp_section, 0, ASCIILINESZ);
            strncpy(temp_section, line_search_start,
                    colon_found - line_search_start);

            if (strcmp(temp_section, section) != 0)
            {
              char szBuffer[ASCIILINESZ + 1];

              memset(szBuffer, 0, ASCIILINESZ);
              sprintf(szBuffer, "\n[%s]\n", temp_section);

              dbg_msg("%s: Found different section - %s - adding %s to %s\n",
                      __FUNCTION__, temp_section, szBuffer, temp_file);
              res = fwrite(szBuffer, strlen(szBuffer), 1, out);
              if (res < 1 && ferror(out))
                log_err("%s: Error: writing to %s failed\n", __FUNCTION__,
                        temp_file);

              strcpy(section, temp_section);
            }

            dbg_msg("%s: adding %s to section %s in %s\n", __FUNCTION__,
                    colon_found + 1, section, temp_file);
            res = fwrite(colon_found + 1, strlen(colon_found + 1), 1, out);
            if (res < 1 && ferror(out))
              log_err("%s: Error: writing to %s failed\n", __FUNCTION__,
                      temp_file);
            res = fwrite("\n", strlen("\n"), 1, out);
            if (res < 1 && ferror(out))
              log_err("%s: Error: writing \n to %s failed\n", __FUNCTION__,
                      temp_file);
          }

        }

        memset(line, 0, ASCIILINESZ);
        last = 0;
      }
    }

    if (in)
      fclose(in);
    if (out)
      fclose(out);

    g_pParameters = iniparser_load(temp_file);
    dbg_msg(
        "%s: Global parameters re-read from %s - deleting %s and re-writing\n",
        __FUNCTION__, temp_file, pszConfigFile);
    remove(pszConfigFile);

    /* Let's make sure the repair worked */
    num_ini_sections = 0;
    if (g_pParameters)
      num_ini_sections = iniparser_getnsec(g_pParameters);

    dbg_notice("%s: num ini sections after repair = %d\n", __FUNCTION__,
               num_ini_sections);
    if (g_pParameters && num_ini_sections < 1)
    {
      strcpy(temp_file, pszConfigFile);
      strcat(temp_file, VHQ_INI_FILE_BACKUP_EXTENSION);

      log_alert(
          "%s: repairing INI file failed (num sections = %d) - reading parameters from saved copy (%s)\n",
          __FUNCTION__, num_ini_sections, temp_file);

      log_alert("%s: Freeing global dictionary to read saved INI file %s\r\n",
                __FUNCTION__, temp_file);
      iniparser_freedict(g_pParameters);
      g_pParameters = NULL;

      g_pParameters = iniparser_load(temp_file);
      dbg_msg(
          "%s: Global parameters re-read from %s - deleting %s and re-writing\n",
          __FUNCTION__, temp_file, pszConfigFile);
      remove(pszConfigFile);

      /* Let's make sure the repair worked */
      num_ini_sections = 0;
      if (g_pParameters)
        num_ini_sections = iniparser_getnsec(g_pParameters);

      dbg_notice("%s: num ini sections after repair = %d\n", __FUNCTION__,
                 num_ini_sections);
      if (num_ini_sections < 1)
      {
        log_err(
            "%s: reading INI parameters from saved copy (%s) FAILED (num sections = %d) - returning FALSE\n",
            __FUNCTION__, temp_file, num_ini_sections);
        ret_val = FALSE;
      }
      else
      {
        dbg_notice("%s: INI parameters restored from saved copy (%s)\n",
                   __FUNCTION__, temp_file);
        iniparser_save(pszConfigFile, TRUE);
        ret_val = TRUE;
      }
    }
    else
    {
      dbg_notice("%s: INI parameters reconstructed\n", __FUNCTION__);
      iniparser_save(pszConfigFile, TRUE);
      ret_val = TRUE;
    }

  }

  VHQUnlockSemaphore();

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

static void RestoreDefaultCerts()
{
#ifndef VHQ_CERT_VERIFIER
  char SrvPubKeyName[512];
  char SrvSSLName[512];
  char SrvFTPName[512];
  char DefSrvPubKeyName[512];
  char DefSrvSSLName[512];
  char DefSrvFTPName[512];

  memset(SrvPubKeyName, 0, sizeof(SrvPubKeyName));
  GetFileNameForInstance(SrvPubKeyName, (char*) SRV_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  memset(SrvSSLName, 0, sizeof(SrvSSLName));
  GetFileNameForInstance(SrvSSLName, (char*) SRV_SSL_CERTFILE,
                         GetCurrentInstance());
  memset(SrvFTPName, 0, sizeof(SrvFTPName));
  GetFileNameForInstance(SrvFTPName, (char*) SRV_FTPS_CERTFILE,
                         GetCurrentInstance());

  /* Instance doesn't matter for the default certs - just use the filenames directly */
  memset(DefSrvPubKeyName, 0, sizeof(DefSrvPubKeyName));
  strncpy(DefSrvPubKeyName, VHQ_PROD_SRV_PUB_KEY_CERTFILE,
          sizeof(DefSrvPubKeyName) - 1);
  memset(DefSrvSSLName, 0, sizeof(DefSrvSSLName));
  strncpy(DefSrvSSLName, VHQ_PROD_SRV_SSL_CERTFILE, sizeof(DefSrvSSLName) - 1);
  memset(DefSrvFTPName, 0, sizeof(DefSrvFTPName));
  strncpy(DefSrvFTPName, VHQ_PROD_SRV_FTPS_CERTFILE, sizeof(DefSrvFTPName) - 1);

  /* Restore the default certs if they exist */
  if (FileExists(DefSrvPubKeyName))
  {
    if (!IsSameFile(DefSrvPubKeyName, SrvPubKeyName))
    {
      if (VerifyFilePermissions(DefSrvPubKeyName))
      {
        if (CopyFileAsRoot(DefSrvPubKeyName, SrvPubKeyName) == 0)
        {
          log_notice("%s: Replaced %s with default certificate %s\n",
                     __FUNCTION__, SrvPubKeyName, DefSrvPubKeyName);
        }
        else
          log_err("%s: New cert found - ERROR replacing %s with %s\n",
                  __FUNCTION__, SrvPubKeyName, DefSrvPubKeyName);
      }

    }
    else
      log_dbg("%s: %s is already set to default CERT\n", __FUNCTION__,
              SrvPubKeyName);
  }

  if (FileExists(DefSrvSSLName))
  {
    if (!IsSameFile(DefSrvSSLName, SrvSSLName))
    {
      if (VerifyFilePermissions(DefSrvSSLName))
      {
        if (CopyFileAsRoot(DefSrvSSLName, SrvSSLName) == 0)
        {
          log_notice("%s: Replaced %s with default certificate %s\n",
                     __FUNCTION__, SrvSSLName, DefSrvSSLName);
        }
        else
          log_err("%s: New cert found - ERROR replacing %s with %s\n",
                  __FUNCTION__, SrvSSLName, DefSrvSSLName);
      }

    }
    else
      log_dbg("%s: %s is already set to default CERT\n", __FUNCTION__,
              SrvSSLName);
  }

  if (FileExists(DefSrvFTPName))
  {
    if (!IsSameFile(DefSrvFTPName, SrvFTPName))
    {
      if (VerifyFilePermissions(DefSrvFTPName))
      {
        if (CopyFileAsRoot(DefSrvFTPName, SrvFTPName) == 0)
        {
          log_notice("%s: Replaced %s with default certificate %s\n",
                     __FUNCTION__, SrvFTPName, DefSrvFTPName);
        }
        else
          log_err("%s: New cert found - ERROR replacing %s with %s\n",
                  __FUNCTION__, SrvFTPName, DefSrvFTPName);
      }

    }
    else
      log_dbg("%s: %s is already set to default CERT\n", __FUNCTION__,
              SrvFTPName);
  }
#endif
}

static void CreateDefaultConfigFile()
{
#ifdef VHQ_CERT_VERIFIER
    FILE* iFile = NULL;
#else
  int iFile = -1;
#endif
  char szCurrentSection[64];
  int i;
  char CfgFileName[512];
  char szDefaultMsg[] =
      "# This is the default configuration file file for Verifone's VHQ Estate Management system\n"
          "# Please contact your SE for a more appropriate config file for your situation, if this\n"
          "# configuration does not meet your requirements.\n";

#ifdef Mx2
  // Make sure older network profiles are deleted.
  DeleteNetworkProfiles(GetCurrentInstance());
#endif

  memset(CfgFileName, 0, sizeof(CfgFileName));
  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                         GetCurrentInstance());

  memset(szCurrentSection, 0, sizeof(szCurrentSection));
  iFile = open(CfgFileName, O_RDWR | O_TRUNC | O_CREAT, 0666);

#ifdef VHQ_CERT_VERIFIER
    if (iFile != NULL)
#else
  if (iFile > -1)
#endif
  {
    int bytes_written;

    bytes_written = write(iFile, szDefaultMsg, strlen(szDefaultMsg));
    if (bytes_written == -1)
      LogMsg(VHQ_LOG_ERROR, "%s: ERROR writing to file %s errno= %d\n",
             __FUNCTION__, CfgFileName, errno);

    for (i = 0; i < ciNumParams; i++)
    {
      char szBuffer[256];
      if (0 != strcmp(szCurrentSection, asParams[i].pszKeyName))
      {
        strcpy(szCurrentSection, asParams[i].pszKeyName);
        sprintf(szBuffer, "\n[%s]\n", szCurrentSection);
        bytes_written = write(iFile, szBuffer, strlen(szBuffer));
        if (bytes_written == -1)
          LogMsg(VHQ_LOG_ERROR, "%s: ERROR writing to file %s and errno= %d\n",
                 __FUNCTION__, CfgFileName, errno);

      }
      sprintf(szBuffer, "%s=%s\n", asParams[i].szValueName,
              asParams[i].szDefaultValue);
      bytes_written = write(iFile, szBuffer, strlen(szBuffer));
      if (bytes_written == -1)
        LogMsg(VHQ_LOG_ERROR, "%s: ERROR writing to file %s and errno= %d\n",
               __FUNCTION__, CfgFileName, errno);

    }

    close(iFile);
    chmod(CfgFileName, 0664);
#ifndef WIN32
    sync();
    sync();
    sync();
#endif

    VHQWaitSemaphore();
    if (g_pParameters)
    {
      dbg_msg("%s: Agent already has loaded configuration\n", __FUNCTION__);
      iniparser_freedict(g_pParameters);
      g_pParameters = NULL;
    }
    g_pParameters = iniparser_load(CfgFileName);
    VHQUnlockSemaphore();

    RestoreDefaultCerts();

#ifdef Mx2
    /* Whenever we go back to default on Mx2, delete the checksum file as well.
     That way, if the config/certs are still installed in /etc/config, we can
     re-read them and reconfigure the device without falling back to default
     instance */
    RemoveProcessedCfgFileCkSum();
    RemoveProcessedConnProfileFileCkSum();
#endif
  }
  else
    log_err("Couldn't open config %s file for writing!\n", CfgFileName);
}

#ifdef ADK_SUPPORT

static void GetInfoSvcDBLock(void)
{
  pthread_mutex_lock(&infoSvcDbMutex);
}

static void ReleaseInfoSvcDBLock(void)
{
  pthread_mutex_unlock(&infoSvcDbMutex);
}


static void INFO_SVC_NODE_NAME_CONV(char *orig_string, char *new_string,
                                    uint32 new_string_len)
{
  uint32 i;

  memset(new_string, 0, new_string_len);
  if (new_string_len > strlen(orig_string))
    strcpy(new_string, orig_string);
  else
    memcpy(new_string, orig_string, new_string_len - 1);

  for (i = 0; i < strlen(new_string); i++)
  {
    /* Replace spaces with underscores */
    if (new_string[i] == ' ')
      new_string[i] = '_';
  }

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: orig_string = %s, new_string = %s\n", __FUNCTION__, orig_string, new_string);
}

static InfoNode GET_PARENT_NODE(char *SectionName)
{
  if (strcmp(SectionName, szVersion) == 0)
  {
    return VERSION_NODE;
  }
  else if (strcmp(SectionName, szServer) == 0)
  {
    return SERVER_NODE;
  }
  else if (strcmp(SectionName, szVHQ) == 0)
  {
    return VHQ_NODE;
  }

  /* Return 0 by default - Should not get here */
  assert(0);
  return VHQ_NODE;
}

static InfoNode GET_NODE(InfoDB *pInfSvcHandle, char *SectionName)
{
  InfoNode ret_node;
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: calling info_find(0x%08x, %d, %s)\n", __FUNCTION__, pInfSvcHandle, INFO_ROOT, SectionName);
  ret_node = info_find(pInfSvcHandle, INFO_ROOT, SectionName);
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: info_find returned %ld\n", __FUNCTION__, ret_node);
  return ret_node;
}

/******************************************************************************
 * Function:      infosvc_setval
 * Description:   Interface to interact with DB file.
 *
 * Parameters:    *pInfSvcHandle - pointer to database content
 *                *KeyName - key name
 *                *ValueName - value name
 *                *value - value in string format
 *
 * Return Value:  processing result.
 *****************************************************************************/
static bool infosvc_setval(InfoDB *pInfSvcHandle, uint32 param_type,
                           char *KeyName, char *ValueName, const char *value)
{
  char szISKeyNameBuf[128] = { 0 };
  char szISNameBuf[128] = { 0 };
  InfoNode IS_node;

  if (!pInfSvcHandle || !KeyName || !ValueName || !value)
  {
    log_err("%s ERROR: Incorrect input parameter\n", __FUNCTION__);
    return false;
  }

  INFO_SVC_NODE_NAME_CONV(KeyName, szISKeyNameBuf, sizeof(szISKeyNameBuf));
  IS_node = GET_NODE(pInfSvcHandle, szISKeyNameBuf);
  INFO_SVC_NODE_NAME_CONV(ValueName, szISNameBuf, sizeof(szISNameBuf));

  switch (param_type)
  {
    case PTYPE_STRING:
    {
      dbg_msg("%s: Writing %s=%s to INFO SVC - IS_node = %ld\n", __FUNCTION__,
              szISNameBuf, value ? value : "NULL", IS_node);
      info_writeString(pInfSvcHandle, IS_node, szISNameBuf,
                       value ? value : "NULL");
      break;
    }
    case PTYPE_UINT32:
    case PTYPE_INT32:
    {
      uint32 write_val;

      if (strstr(value, "0x") != NULL)
        write_val = strtoll(value, NULL, 0);
      else
        write_val = strtoll(value, NULL, 10);
      dbg_msg("%s: Writing %s=%d to INFO SVC - IS_node = %ld\n", __FUNCTION__,
              szISNameBuf, write_val, IS_node);
      info_writeInt(pInfSvcHandle, IS_node, szISNameBuf, write_val);
      break;
    }
    case PTYPE_BOOL:
    {
      char cDef = value[0];
      int write_val = 0;

      if (cDef == 'y' || cDef == 'Y' || cDef == '1' || cDef == 't'
          || cDef == 'T')
        write_val = 1;

      dbg_msg("%s: Writing %s=%d to INFO SVC - IS_node = %ld\n", __FUNCTION__,
              szISNameBuf, write_val, IS_node);
      info_writeInt(pInfSvcHandle, IS_node, szISNameBuf, write_val);
      break;
    }
    default:
      break;
  }

  return true;
}

#if KEEP_INFO_SVC_IN_SYNC_ON_READ
/******************************************************************************
 * Function:      CompareInfoSvctoINI
 * Description:   Function reads one by one parameter to allow sync INI content with DB content
 *
 * Parameters:    none
 *
 * Return Value:  none
 *****************************************************************************/
static void CompareInfoSvctoINI()
{
    int i;
    bool bool_data;
    uint32 int_data;
    char string_data[1024];

    for (i = 0; i < ciNumParams; i++)
    {
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Using GetParameter() to update %s\n", __FUNCTION__, asParams[i].szValueName);
        switch (asParams[i].type)
        {
        case PTYPE_STRING:
            VHQGetParameterString(asParams[i].ID, string_data, sizeof(string_data));
            break;
        case PTYPE_UINT32:
        case PTYPE_INT32:
            if ((asParams[i].ID == PARAM_MAINTENANCE_START) || (asParams[i].ID == PARAM_MAINTENANCE_END))
                VHQGetParameterUint32(asParams[i].ID, &int_data, BASE_10);
            else
                VHQGetParameterUint32(asParams[i].ID, &int_data, DEFAULT_BASE);
            break;
        case PTYPE_BOOL:
            VHQGetParameterBool(asParams[i].ID, &bool_data);
            break;
        default:
            log_err( "%s ERROR: Unknown Type for %s parameter - type = %d\n", __FUNCTION__, asParams[i].szValueName, asParams[i].type);
        }
    }
}
#endif

/******************************************************************************
 * Function:      SyncIniCfgWithInfoSvc
 * Description:   Function synchronizes INI content with DB content or vice versa
 *
 * Parameters:    master - the sync_master_t parameter
 *                SYNC_MASTER_INI - function uses INI file as a source
 *                                  The new DB file will be created if absent
 *                SYNC_MASTER_INFO_SVC - function uses DB file as a source
 *                                  Error if DB file is absent
 *
 * Return Value:  none
 *****************************************************************************/
static void SyncIniCfgWithInfoSvc(sync_master_t master)
{
  char CfgFileName[512] = { 0 };
  char InfoSvcCfgFileName[512] = { 0 };
  InfoDB *pInfSvcHandle = NULL;
  enum InfoResult db_write_res;
  int i;

  if (!g_pParameters)
  {
    dbg_err("%s: Config file not loaded\r\n", __FUNCTION__);
    return;
  }

  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                         GetCurrentInstance());
  GetFileNameForInstance(InfoSvcCfgFileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG,
                         GetCurrentInstance());

  if (master == SYNC_MASTER_INI)
  {
    GetInfoSvcDBLock();
    pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
    if (pInfSvcHandle != NULL)
    {
      dbg_msg("%s: Opened %s successfully\n", __FUNCTION__, InfoSvcCfgFileName);
    }
    else
    {
      remove(InfoSvcCfgFileName);
      log_err(
          "%s ERROR: FAILURE opening INFO SVC database file %s - recreating\n",
          __FUNCTION__, InfoSvcCfgFileName);
    }

    /* This used to be an else to the if above, but now if we can't open an existing DB, we will re-create it */
    if (pInfSvcHandle == NULL)
    {
      dbg_err("%s: Opening DB %s\n", __FUNCTION__, InfoSvcCfgFileName);
      /* Call low level function to create file */
      pInfSvcHandle = info_opendb(InfoSvcCfgFileName, INFO_READ_WRITE);
      if (pInfSvcHandle == NULL)
      {
        remove(InfoSvcCfgFileName);
        log_err("%s ERROR: FAILURE opening INFO SVC database file %s\n",
                __FUNCTION__, InfoSvcCfgFileName);
        ReleaseInfoSvcDBLock();
        return;
      }

      dbg_msg(
          "%s: Opened DB %s SUCCESSFULLY - writing Version, SERVER, VHQ and PROXY_AGENT nodes\n",
          __FUNCTION__, InfoSvcCfgFileName);

      dbg_msg("%s: Writing string %s to INFO SVC DB for VERSION_NODE\n",
              __FUNCTION__, szServer);
      db_write_res = info_writeString(pInfSvcHandle, INFO_ROOT, szISVersion,
                                      szISVersion);
      if (db_write_res != INFO_OK)
      {
        log_err(
            "%s ERROR: Writing %s NODE to INFO SVC DB FAILED with error %d!!!\n",
            __FUNCTION__, szISVersion, db_write_res);
      }
      else
      {
        dbg_msg("%s: calling info_find(0x%08x, %d, %s)\n", __FUNCTION__,
                pInfSvcHandle, INFO_ROOT, szISVersion);
        VERSION_NODE = info_find(pInfSvcHandle, INFO_ROOT, szISVersion);
        dbg_msg(
            "%s: Wrote %s NODE to INFO SVC DB successfully - VERSION_NODE = %d\n",
            __FUNCTION__, szISVersion, VERSION_NODE);
      }

      dbg_msg("%s: Writing string %s to INFO SVC DB for SERVER_NODE\n",
              __FUNCTION__, szServer);
      db_write_res = info_writeString(pInfSvcHandle, INFO_ROOT, szISServer,
                                      szISServer);
      if (db_write_res != INFO_OK)
      {
        log_err(
            "%s ERROR: Writing %s NODE to INFO SVC DB FAILED with error %d!!!\n",
            __FUNCTION__, szISServer, db_write_res);
      }
      else
      {
        dbg_msg("%s: calling info_find(0x%08x, %d, %s)\n", __FUNCTION__,
                pInfSvcHandle, INFO_ROOT, szISServer);
        SERVER_NODE = info_find(pInfSvcHandle, INFO_ROOT, szISServer);
        dbg_msg(
            "%s: Wrote %s NODE to INFO SVC DB successfully - SERVER_NODE = %d\n",
            __FUNCTION__, szISServer, SERVER_NODE);
      }

      dbg_msg("%s: Writing string %s to INFO SVC DB for VHQ_NODE\n",
              __FUNCTION__, szISVHQ);
      db_write_res = info_writeString(pInfSvcHandle, INFO_ROOT, szISVHQ,
                                      szISVHQ);
      if (db_write_res != INFO_OK)
      {
        log_err(
            "%s ERROR: Writing %s NODE to INFO SVC DB FAILED with error %d!!!\n",
            __FUNCTION__, szISVHQ, db_write_res);
      }
      else
      {
        dbg_msg("%s: calling info_find(0x%08x, %d, %s)\n", __FUNCTION__,
                pInfSvcHandle, INFO_ROOT, szISVHQ);
        VHQ_NODE = info_find(pInfSvcHandle, INFO_ROOT, szISVHQ);
        dbg_msg(
            "%s: Wrote %s NODE to INFO SVC DB successfully - VHQ_NODE = %d\n",
            __FUNCTION__, szISVHQ, VHQ_NODE);
      }

      dbg_msg("%s: Writing string %s to INFO SVC DB for PROXY_AGENT_NODE\n",
              __FUNCTION__, szISProxyAgent);
      db_write_res = info_writeString(pInfSvcHandle, INFO_ROOT, szISProxyAgent,
                                      szISProxyAgent);
      if (db_write_res != INFO_OK)
      {
        log_err(
            "%s ERROR: Writing %s NODE to INFO SVC DB FAILED with error %d!!!\n",
            __FUNCTION__, szISProxyAgent, db_write_res);
      }
      else
      {
        dbg_msg("%s: calling info_find(0x%08x, %d, %s)\n", __FUNCTION__,
                pInfSvcHandle, INFO_ROOT, szISProxyAgent);
        PROXY_AGENT_NODE = info_find(pInfSvcHandle, INFO_ROOT, szISProxyAgent);
        dbg_msg(
            "%s: Wrote %s NODE to INFO SVC DB successfully - PROXY_AGENT_NODE = %d\n",
            __FUNCTION__, szISProxyAgent, PROXY_AGENT_NODE);
      }
    }

    /* Use INI content to create new DB content (sync if DB already exists). Use default value if INI has no value */
    dbg_notice("%s: Porting INI parameters to DB\n", __FUNCTION__);
    for (i = 0; i < ciNumParams; i++)
    {
      uint32 value;
      char cDef;
      const char *pszCurrentData = NULL;
      char szNameBuf[70];
      char szISNameBuf[128];
      char szDataToWrite[1024];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);

      VHQWaitSemaphore();
      pszCurrentData = iniparser_getstring(g_pParameters, szNameBuf, NULL);
      VHQUnlockSemaphore();

      if (NULL == pszCurrentData)
      {
        dbg_msg(
            "%s: %s is missing from %s - adding default value %s to INFO SVC DB\r\n",
            __FUNCTION__, szNameBuf, CfgFileName, asParams[i].szDefaultValue);
        snprintf(szDataToWrite, sizeof(szDataToWrite), "%s",
                 asParams[i].szDefaultValue);
      }
      else
        snprintf(szDataToWrite, sizeof(szDataToWrite), "%s", pszCurrentData);

      INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf,
                              sizeof(szISNameBuf));
      switch (asParams[i].type)
      {
        case PTYPE_STRING:
          if (asParams[i].ID == PARAM_OPERATING_MODE)
          {
            if (strcmp(szDataToWrite, "") == 0
                || strncasecmp(szDataToWrite, "DisabledComm",
                               strlen("DisabledComm")) == 0)
            {
              DebugMsg(
                  VHQ_LOGGING_LEVEL_DEBUG,
                  "[%s]: Either the Operating Mode was set to blank or its value is already deprecated!\n",
                  __FUNCTION__);
              snprintf(szDataToWrite, sizeof(szDataToWrite), "%s",
                       asParams[i].szDefaultValue);
              DebugMsg(VHQ_LOGGING_LEVEL_DEBUG,
                       "[%s]: New Operating Mode value set to '%s'\n",
                       __FUNCTION__, szDataToWrite);
            }
          }

          dbg_msg(
              "%s: Writing string %s to INFO SVC DB (handle = %d) for parameter %s\n",
              __FUNCTION__, szDataToWrite, pInfSvcHandle, szISNameBuf);
          db_write_res = info_writeString(
              pInfSvcHandle, GET_PARENT_NODE(asParams[i].pszKeyName),
              szISNameBuf, szDataToWrite);
          if (db_write_res != INFO_OK)
          {
            log_err(
                "%s ERROR: Writing %s Parameter to INFO SVC DB FAILED with error %d!!!\n",
                __FUNCTION__, szISNameBuf, db_write_res);
          }
          else
            dbg_msg("%s: Wrote %s Parameter to INFO SVC DB successfully\n",
                    __FUNCTION__, szISNameBuf);
          break;
        case PTYPE_UINT32:
        case PTYPE_INT32:
          if (strcasestr(szDataToWrite, "0x"))
            value = strtoll(szDataToWrite, NULL, 0);
          else
            value = strtoll(szDataToWrite, NULL, 10);
          dbg_msg(
              "%s: Writing int %u (str = %s) to INFO SVC DB (handle = %d) for parameter %s\n",
              __FUNCTION__, value, szDataToWrite, pInfSvcHandle, szISNameBuf);
          db_write_res = info_writeInt(pInfSvcHandle,
                                       GET_PARENT_NODE(asParams[i].pszKeyName),
                                       szISNameBuf, value);
          if (db_write_res != INFO_OK)
          {
            log_err(
                "%s ERROR: Writing %s Parameter to INFO SVC DB FAILED with error %d!!!\n",
                __FUNCTION__, szISNameBuf, db_write_res);
          }
          else
            dbg_msg("%s: Wrote %s Parameter to INFO SVC DB successfully\n",
                    __FUNCTION__, szISNameBuf);
          break;
        case PTYPE_BOOL:
          cDef = szDataToWrite[0];
          if (cDef == 'y' || cDef == 'Y' || cDef == '1' || cDef == 't'
              || cDef == 'T')
            value = 1;
          else
            value = 0;
          dbg_msg(
              "%s: Writing int %d (converted from %s) to INFO SVC DB (handle = %d) for parameter %s\n",
              __FUNCTION__, value, szDataToWrite, pInfSvcHandle, szISNameBuf);
          db_write_res = info_writeInt(pInfSvcHandle,
                                       GET_PARENT_NODE(asParams[i].pszKeyName),
                                       szISNameBuf, value);
          if (db_write_res != INFO_OK)
          {
            log_err(
                "%s ERROR: Writing %s Parameter to INFO SVC DB FAILED with error %d!!!\n",
                __FUNCTION__, szISNameBuf, db_write_res);
          }
          else
            dbg_msg("%s: Wrote %s Parameter to INFO SVC DB successfully\n",
                    __FUNCTION__, szISNameBuf);
          break;
        default:
          log_err("%s ERROR: Unknown Type for %s parameter - type = %d\n",
                  __FUNCTION__, szISNameBuf, asParams[i].type);
      }
    }

    closeSvcDB(pInfSvcHandle);
    ReleaseInfoSvcDBLock();

  }
  else if (master == SYNC_MASTER_INFO_SVC)
  {
    int i;
    enum InfoResult db_read_res;
    bool inifile_updated = FALSE;
    dbg_notice("%s: Porting INFO SVC database file %s to INI file %s\n",
               __FUNCTION__, InfoSvcCfgFileName, CfgFileName);

    GetInfoSvcDBLock();
    pInfSvcHandle = openSvcDB(VHQ_PRIVATE_INFO_SVC_CFG);
    if (pInfSvcHandle != NULL)
    {
      dbg_msg("%s: Opened %s successfully\n", __FUNCTION__, InfoSvcCfgFileName);
    }
    else
    {
      /* This used to be an else to the if above, but now if we can't open an existing DB. We need to re-create it, but not here */
      log_err("%s ERROR: FAILURE opening INFO SVC database file %s\n",
              __FUNCTION__, InfoSvcCfgFileName);
      ReleaseInfoSvcDBLock();
      return;
    }

    dbg_msg("%s: Writing updated parameters to INI file\n", __FUNCTION__);
    for (i = 0; i < ciNumParams; i++)
    {
      uint32 value;
      char cDef;
      char *IS_data = NULL;
      const char *pszCurrentData = NULL;
      char szNameBuf[70];
      char szISNameBuf[128];
      char szISKeyNameBuf[128];
      char szDataToWrite[1024];

      sprintf(szNameBuf, "%.32s:%.32s", asParams[i].pszKeyName,
              asParams[i].szValueName);

      VHQWaitSemaphore();
      pszCurrentData = iniparser_getstring(g_pParameters, szNameBuf, NULL);
      VHQUnlockSemaphore();

      if (NULL == pszCurrentData)
      {
        dbg_msg(
            "%s: %s is missing from %s - use default value %s as data from INI file. Will be used if required\r\n",
            __FUNCTION__, szNameBuf, CfgFileName, asParams[i].szDefaultValue);
        snprintf(szDataToWrite, sizeof(szDataToWrite), "%s",
                 asParams[i].szDefaultValue);
      }
      else
        snprintf(szDataToWrite, sizeof(szDataToWrite), "%s", pszCurrentData);

      INFO_SVC_NODE_NAME_CONV(asParams[i].pszKeyName, szISKeyNameBuf,
                              sizeof(szISKeyNameBuf));
      INFO_SVC_NODE_NAME_CONV(asParams[i].szValueName, szISNameBuf,
                              sizeof(szISNameBuf));
      switch (asParams[i].type)
      {
        case PTYPE_STRING:
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s (NODE = %s, %d)\n", __FUNCTION__, szISNameBuf, asParams[i].pszKeyName, GET_NODE(pInfSvcHandle, szISKeyNameBuf));
          db_read_res = info_readString(pInfSvcHandle,
                                        GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                                        szISNameBuf, &IS_data);
          if (db_read_res != INFO_OK || !IS_data)
          {
            dbg_msg(
                "%s: %s is missing from INFO SVC DB (info_readString() returned %d) - adding INI Value (%s) to INFO SVC\r\n",
                __FUNCTION__, szNameBuf, db_read_res, szDataToWrite);
            infosvc_setval(pInfSvcHandle, asParams[i].type,
                           asParams[i].pszKeyName, asParams[i].szValueName,
                           szDataToWrite);
            continue;
          }
          else
          {
            snprintf(szDataToWrite, sizeof(szDataToWrite), "%s", IS_data);
          }

          dbg_msg(
              "%s: Parameter %s DOES NOT MATCH - writing INFO SVC val [%s] into INI file\n",
              __FUNCTION__, szISNameBuf, szDataToWrite);
          VHQWaitSemaphore();
          iniparser_setstr(g_pParameters, szNameBuf, szDataToWrite);
          VHQUnlockSemaphore();
          inifile_updated = TRUE;
          break;
        case PTYPE_UINT32:
        case PTYPE_INT32:
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s\n", __FUNCTION__, szISNameBuf);
          db_read_res = info_readInt(pInfSvcHandle,
                                     GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                                     szISNameBuf, (int*) &value);
          if (db_read_res != INFO_OK)
          {
            dbg_msg(
                "%s: %s is missing from INFO SVC DB (info_readInt() returned %d) - adding INI Value (%s) to INFO SVC\r\n",
                __FUNCTION__, szNameBuf, db_read_res, szDataToWrite);
            infosvc_setval(pInfSvcHandle, asParams[i].type,
                           asParams[i].pszKeyName, asParams[i].szValueName,
                           szDataToWrite);
            continue;
          }
          else
            snprintf(szDataToWrite, sizeof(szDataToWrite), "%u", value);

          dbg_msg(
              "%s: Parameter %s DOES NOT MATCH - writing INFO SVC val [%s] into INI file\n",
              __FUNCTION__, szISNameBuf, szDataToWrite);
          VHQWaitSemaphore();
          iniparser_setstr(g_pParameters, szNameBuf, szDataToWrite);
          VHQUnlockSemaphore();
          inifile_updated = TRUE;
          break;
        case PTYPE_BOOL:
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Reading from INFO SVC DB for parameter %s\n", __FUNCTION__, szISNameBuf);
          db_read_res = info_readInt(pInfSvcHandle,
                                     GET_NODE(pInfSvcHandle, szISKeyNameBuf),
                                     szISNameBuf, (int*) &value);
          if (db_read_res != INFO_OK)
          {
            cDef = szDataToWrite[0];
            if (cDef == 'y' || cDef == 'Y' || cDef == '1' || cDef == 't'
                || cDef == 'T')
              snprintf(szDataToWrite, sizeof(szDataToWrite), "True");
            else
              snprintf(szDataToWrite, sizeof(szDataToWrite), "False");

            dbg_msg(
                "%s: %s is missing from INFO SVC DB (info_readInt() returned %d) - adding INI Value (%s) to INFO SVC\r\n",
                __FUNCTION__, szNameBuf, db_read_res, szDataToWrite);
            infosvc_setval(pInfSvcHandle, asParams[i].type,
                           asParams[i].pszKeyName, asParams[i].szValueName,
                           szDataToWrite);
            continue;
          }
          else
          {
            if (value)
              snprintf(szDataToWrite, sizeof(szDataToWrite), "True");
            else
              snprintf(szDataToWrite, sizeof(szDataToWrite), "False");
          }

          dbg_msg(
              "%s: Parameter %s DOES NOT MATCH - writing INFO SVC val [%s] into INI file\n",
              __FUNCTION__, szISNameBuf, szDataToWrite);
          VHQWaitSemaphore();
          iniparser_setstr(g_pParameters, szNameBuf, szDataToWrite);
          VHQUnlockSemaphore();
          inifile_updated = TRUE;
          break;
        default:
          log_err("%s ERROR: Unknown Type for %s parameter - type = %d\n",
                  __FUNCTION__, szISNameBuf, asParams[i].type);
      }
    }

    closeSvcDB(pInfSvcHandle);
    ReleaseInfoSvcDBLock();

    if (inifile_updated)
    {
      iniparser_save(CfgFileName, FALSE);
    }
  }
}

#endif


static void VHQUpdateConfig(void)
{
  vhq_config_t vhq_config_type = VHQCONFIG_NONE;
  char CfgFileName[512] = { 0 };
  char CfgFileUpdateName[512] = { 0 };
  char SrvPubKeyName[512] = { 0 };
  char SrvPubKeyUpdateName[512] = { 0 };
  char SrvSSLName[512] = { 0 };
  char SrvSSLUpdateName[512] = { 0 };
  char SrvFTPName[512] = { 0 };
  char SrvFTPUpdateName[512] = { 0 };

  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                         GetCurrentInstance());
  GetFileNameForInstance(SrvPubKeyName, (char*) SRV_PUB_KEY_CERTFILE,
                         GetCurrentInstance());
  GetFileNameForInstance(SrvSSLName, (char*) SRV_SSL_CERTFILE,
                         GetCurrentInstance());
  GetFileNameForInstance(SrvFTPName, (char*) SRV_FTPS_CERTFILE,
                         GetCurrentInstance());

  GetFileNameForInstance(CfgFileUpdateName, (char*) VHQ_INITIAL_FLASH_CFG,
                         GetCurrentInstance());

  /* Get VHQ Config type */
  if (FileExists(CfgFileUpdateName))
  {
    vhq_config_type = VHQCONFIG_SYS_FLASH;
  }
  else
  {
    memset(CfgFileUpdateName, 0, sizeof(CfgFileUpdateName));
    GetFileNameForInstance(CfgFileUpdateName, (char*) VHQ_INITIAL_CFG,
                           GetCurrentInstance());

    if (FileExists(CfgFileUpdateName))
    {
      vhq_config_type = VHQCONFIG_CONFIG;
    }
    else
    {
      vhq_config_type = VHQCONFIG_NONE;
      return;
    }
  }

  if (vhq_config_type == VHQCONFIG_SYS_FLASH)
  {
    GetFileNameForInstance(SrvPubKeyUpdateName,
                           (char*) SRV_PUB_KEY_CERT_FLASH_UPDATE,
                           GetCurrentInstance());
    GetFileNameForInstance(SrvSSLUpdateName, (char*) SRV_SSL_CERT_FLASH_UPDATE,
                           GetCurrentInstance());
    GetFileNameForInstance(SrvFTPUpdateName, (char*) SRV_FTPS_CERT_FLASH_UPDATE,
                           GetCurrentInstance());

    /* Installing config from SYS FLASH so remove cksum created by user config files */
    RemoveProcessedCfgFileCkSum();
  }
  else if (vhq_config_type == VHQCONFIG_CONFIG)
  {
    GetFileNameForInstance(SrvPubKeyUpdateName,
                           (char*) SRV_PUB_KEY_CERTFILE_UPDATE,
                           GetCurrentInstance());
    GetFileNameForInstance(SrvSSLUpdateName, (char*) SRV_SSL_CERTFILE_UPDATE,
                           GetCurrentInstance());
    GetFileNameForInstance(SrvFTPUpdateName, (char*) SRV_FTPS_CERTFILE_UPDATE,
                           GetCurrentInstance());
  }

#ifndef WIN32
  if (TestFileSignature(CfgFileUpdateName))
#endif
  {
    // if a valid config file exists we will overwrite previously loaded parameters
#ifdef Mx2
    /* If the cfgfile checksum matches the stored one, we have processed this already */
    if (CompareProcessedCfgFileCkSum(CfgFileUpdateName))
    {
      dbg_notice("%s: %s file already processed\n", __FUNCTION__,
                 CfgFileUpdateName);
    }
    else
    {
#endif
      dbg_notice(
          "Initial config file found - merging with private config file\n");

      if (VerifyFilePermissions(CfgFileUpdateName))
      {
        VHQMergeConfigFile(CfgFileUpdateName, NULL);
        dbg_msg("Initial config file found - enabling heartbeats\n");
        VHQSetParameterBool(PARAM_HEARTBEATS_ENABLED, TRUE, FALSE);
        iniparser_save(CfgFileName, FALSE);
      }

#ifdef Mx2
      if (vhq_config_type == VHQCONFIG_SYS_FLASH)
      {
        char FileName[512] = { 0 };
        /* Agent has permissions to delete file on SYS FLASH */
        if (removeFile(CfgFileUpdateName) != TRUE)
        {
          log_err("%s: Couldn't remove config file on flash\n", __FUNCTION__);
        }
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) VHQ_INITIAL_SIG1,
                               GetCurrentInstance());
        removeFile(FileName);
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) VHQ_INITIAL_SIG2,
                               GetCurrentInstance());
        removeFile(FileName);
      }
      else
      {
        /* Create cksum file if config is installed from config */
        SaveProcessedCfgFileCkSum(CfgFileUpdateName);
      }
    }
#endif
  }
#ifndef WIN32
  else
    log_err("Initial config file found - INVALID SIGNATURE!!!!!\n");
#endif

  /* Check for updated certificates */
  if (FileExists(SrvPubKeyUpdateName))
  {
    /* Updated server public key for Key Exchange signing */
#ifndef WIN32
    if (TestFileSignature(SrvPubKeyUpdateName))
    {
      if (!IsSameFile(SrvPubKeyUpdateName, SrvPubKeyName))
      {
        if (VerifyFilePermissions(SrvPubKeyUpdateName))
        {
          if (CopyFileAsRoot(SrvPubKeyUpdateName, SrvPubKeyName) == 0)
          {
            log_dbg("%s: New cert found - Replaced %s with %s\n", __FUNCTION__,
                    SrvPubKeyName, SrvPubKeyUpdateName);
            /* We need to set KeysExchanged back to FALSE when updating
             the KeyExchange signing key */
            VHQSetParameterBool(PARAM_KEYS_EXCHANGED, FALSE, FALSE);
            iniparser_save(CfgFileName, FALSE);

            /* Delete agent keys so we generate new keys for the new server */
            RemoveAgentKeys();
          }
          else
            log_err("%s: New cert found - ERROR replacing %s with %s\n",
                    __FUNCTION__, SrvPubKeyName, SrvPubKeyUpdateName);
        }

      }
      else
        dbg_msg("%s: %s CERT update is already loaded\n", __FUNCTION__,
                SrvPubKeyUpdateName);

      if (vhq_config_type == VHQCONFIG_SYS_FLASH)
      {
        char FileName[512] = { 0 };

        if (removeFile(SrvPubKeyUpdateName) == FALSE)
        {
          log_err("%s: Couldn't remove Server Protocol cert on flash\n",
                  __FUNCTION__);
        }
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName,
                               (char*) SRV_PUB_KEY_CERTFILE_UPDATE_SIG1,
                               GetCurrentInstance());
        removeFile(FileName);
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName,
                               (char*) SRV_PUB_KEY_CERTFILE_UPDATE_SIG2,
                               GetCurrentInstance());
        removeFile(FileName);
      }
    }
    else
      log_err("%s: %s CERT signature failure\n", __FUNCTION__,
              SrvPubKeyUpdateName);
#endif
  }

  if (FileExists(SrvSSLUpdateName))
  {
    /* Updated server public key for SSL communications */
#ifndef WIN32
    if (TestFileSignature(SrvSSLUpdateName))
    {
      if (!IsSameFile(SrvSSLUpdateName, SrvSSLName))
      {
        if (VerifyFilePermissions(SrvSSLUpdateName))
        {
          if (CopyFileAsRoot(SrvSSLUpdateName, SrvSSLName) == 0)
            log_dbg("%s: New cert found - Replaced %s with %s\n", __FUNCTION__,
                    SrvSSLName, SrvSSLUpdateName);
          else
            log_err("%s: New cert found - ERROR replacing %s with %s\n",
                    __FUNCTION__, SrvSSLName, SrvSSLUpdateName);
        }
      }
      else
        dbg_msg("%s: %s CERT update is already loaded\n", __FUNCTION__,
                SrvSSLUpdateName);

      if (vhq_config_type == VHQCONFIG_SYS_FLASH)
      {
        char FileName[512] = { 0 };

        if (removeFile(SrvSSLUpdateName) == FALSE)
        {
          log_err("%s: Couldn't remove Server SSL file on flash\n",
                  __FUNCTION__);
        }
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) SRV_SSL_CERTFILE_UPDATE_SIG1,
                               GetCurrentInstance());
        removeFile(FileName);
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) SRV_SSL_CERTFILE_UPDATE_SIG2,
                               GetCurrentInstance());
        removeFile(FileName);
      }
    }
    else
      log_err("%s: %s CERT signature failure\n", __FUNCTION__,
              SrvSSLUpdateName);
#endif
  }

  if (FileExists(SrvFTPUpdateName))
  {
    /* Updated server public key for file downloads */
#ifndef WIN32
    if (TestFileSignature(SrvFTPUpdateName))
    {
      if (!IsSameFile(SrvFTPUpdateName, SrvFTPName))
      {
        if (VerifyFilePermissions(SrvFTPUpdateName))
        {
          if (CopyFileAsRoot(SrvFTPUpdateName, SrvFTPName) == 0)
            log_dbg("%s: New cert found - Replaced %s with %s\n", __FUNCTION__,
                    SrvFTPName, SrvFTPUpdateName);
          else
            log_err("%s: New cert found - ERROR replacing %s with %s\n",
                    __FUNCTION__, SrvFTPName, SrvFTPUpdateName);
        }
      }
      else
        dbg_msg("%s: %s CERT update is already loaded\n", __FUNCTION__,
                SrvFTPUpdateName);

      if (vhq_config_type == VHQCONFIG_SYS_FLASH)
      {
        char FileName[512] = { 0 };

        if (removeFile(SrvFTPUpdateName) == FALSE)
        {
          log_err("%s: Couldn't remove Server FTP file on flash\n",
                  __FUNCTION__);
        }
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) SRV_FTPS_CERTFILE_UPDATE_SIG1,
                               GetCurrentInstance());
        removeFile(FileName);
        memset(FileName, 0, sizeof(FileName));
        GetFileNameForInstance(FileName, (char*) SRV_FTPS_CERTFILE_UPDATE_SIG2,
                               GetCurrentInstance());
        removeFile(FileName);
      }
    }
    else
      log_err("%s: %s CERT signature failure\n", __FUNCTION__,
              SrvFTPUpdateName);
#endif
  }
}


#ifdef Mx2
static void VHQUpdateADKCOM(void)
{
  vhq_adk_com_t vhq_adk_com_type = VHQADKCOM_NONE;
  char conn_profile[256] = { 0 };

  char PrivConfigConnProfile[512] = { 0 };
  memset(PrivConfigConnProfile, 0, sizeof(PrivConfigConnProfile));
  GetFileNameForInstance(PrivConfigConnProfile,
                         (char*) VHQ_PRIVATE_CONN_PROFILE,
                         GetCurrentInstance());

  char ConfigConnProfile[512] = { 0 };
  memset(ConfigConnProfile, 0, sizeof(ConfigConnProfile));
  GetFileNameForInstance(ConfigConnProfile, (char*) VHQ_ADK_PROFILE_CONFIG,
                         GetCurrentInstance());

  char UsrConfigConnProfile[512] = { 0 };
  memset(UsrConfigConnProfile, 0, sizeof(UsrConfigConnProfile));
  GetFileNameForInstance(UsrConfigConnProfile,
                         (char*) VHQ_ADK_PROFILE_FLASH_CONFIG,
                         GetCurrentInstance());

  char ConnProfileCkSumFile[512] = { 0 };
  memset(ConnProfileCkSumFile, 0, sizeof(ConnProfileCkSumFile));
  GetFileNameForInstance(ConnProfileCkSumFile,
                         (char*) VHQ_INITIAL_CONN_PROFILE_CKSUM,
                         GetCurrentInstance());

  /* Get ADK COM profile type */
  if (FileExists(VHQ_ADK_PROFILE_SYS_FLASH))
  {
    vhq_adk_com_type = VHQADKCOM_SYS_FLASH;

    /* Remove existing cksum if the file is being installed from sys flash */
    RemoveProcessedConnProfileFileCkSum();

    strncpy(conn_profile, VHQ_ADK_PROFILE_SYS_FLASH, sizeof(conn_profile) - 1);
    log_dbg("%s: Loading ADK connection profile from sys flash \n",
            __FUNCTION__);
  }
  else if (FileExists(ConfigConnProfile))
  {
    vhq_adk_com_type = VHQADKCOM_CONFIG;

    strncpy(conn_profile, ConfigConnProfile, sizeof(conn_profile) - 1);
    log_dbg("%s: Loading ADK connection profile from config \n", __FUNCTION__);
  }
  else if (FileExists(UsrConfigConnProfile))
  {
    vhq_adk_com_type = VHQADKCOM_FLASH_CONFIG;

    strncpy(conn_profile, UsrConfigConnProfile, sizeof(conn_profile) - 1);
    log_dbg("%s: Loading ADK connection profile from flash config \n",
            __FUNCTION__);
  }
  else if (FileExists(PrivConfigConnProfile))
  {
    vhq_adk_com_type = VHQADKCOM_PRIV_CONFIG;

    log_dbg("%s: Using persistent ADK profiles \n", __FUNCTION__);
  }
  else if (FileExists(VHQ_CONNECTION_DEFAULT))
  {
    vhq_adk_com_type = VHQADKCOM_DEFAULT;
  }
  else
  {
    /* Shouldn't be here */
    vhq_adk_com_type = VHQADKCOM_NONE;
  }

  /* Default case is handled while using the connection profiles and never copied to /mnt/flash/system/vhq */
  if ((vhq_adk_com_type != VHQADKCOM_PRIV_CONFIG)
      && (vhq_adk_com_type != VHQADKCOM_NONE)
      && (vhq_adk_com_type != VHQADKCOM_DEFAULT))
  {
    xmlDocPtr doc;
    /* If the connection profile checksum matches the stored one, we have processed this already */
    if (check_crc(conn_profile, (char*) ConnProfileCkSumFile))
    {
      dbg_msg("%s: %s file already processed\n", __FUNCTION__, conn_profile);
    }
    else
    {
      if ((vhq_adk_com_type == VHQADKCOM_CONFIG)
          || (vhq_adk_com_type == VHQADKCOM_SYS_FLASH))
      {
        /* Now we can remove app defined configuration. Just installed configuration package has higher priority */
        if (DirExists((char*) VHQ_USER_FLASH_CONFIG))
        {
          char szCmd[256];
          dbg_notice("%s: configuration in '%s' obsoleted, removed\n",
                     __FUNCTION__, VHQ_USER_FLASH_CONFIG);
          snprintf(szCmd, sizeof(szCmd), "rm -rf %s/*", VHQ_USER_FLASH_CONFIG);
          svcSystem(szCmd);
        }
      }

      /* Let's remove content which are linked with already processed configuration profile */
      DeleteNetworkProfiles(GetCurrentInstance());

      /* We have to create new private configuration file with new path */
      doc = xmlParseFile(conn_profile);
      if (doc)
      {
        xmlSaveCtxtPtr saveCtxt;
        xmlNodePtr cur = xmlDocGetRootElement(doc);
        if (cur)
          cur = cur->xmlChildrenNode;
        while (cur != NULL)
        {
          if (!xmlStrcasecmp(cur->name, (const xmlChar*) "CONNECTION"))
          {
            xmlNodePtr section = cur->xmlChildrenNode;
            while (section != NULL)
            {
              if (section->type == XML_ELEMENT_NODE
                  && !xmlStrcasecmp(section->name, (const xmlChar*) "NETWORK"))
              {
                char filename[512];
                char original_config[512];
                char local_config_copy[512];

                char *filebase = os_basename(
                    (const char*) xmlNodeGetContent(section));
                snprintf(filename, sizeof(filename), "%s%s", VHQ_PRIV_FOLDER,
                         filebase);

                /* We need to compare content of linked profiles */
                snprintf(original_config, sizeof(original_config), "%s.xml",
                         (const char*) xmlNodeGetContent(section));
                snprintf(local_config_copy, sizeof(local_config_copy), "%s.xml",
                         filename);

                dbg_msg("%s: config file '%s', local copy '%s'\n", __FUNCTION__,
                        original_config, local_config_copy);
                if (FileExists(original_config))
                {
                  if (!IsSameFile(original_config, local_config_copy))
                  {
                    log_dbg("%s: file '%s' updated with '%s' content\n",
                            __FUNCTION__, local_config_copy, original_config);

                    if (vhq_adk_com_type == VHQADKCOM_SYS_FLASH)
                    {
                      /* If the files are from SYS FLASH move it */
                      MoveFile(original_config, local_config_copy);
                    }
                    else
                    {
                      CopyFile(original_config, local_config_copy);
                    }
                  }
                  else
                    dbg_notice("%s: file '%s' is already loaded\n",
                               __FUNCTION__, original_config);
                }

                log_dbg("%s: file '%s' will be processed as '%s'\n",
                        __FUNCTION__, (const char* )xmlNodeGetContent(section),
                        filename);
                xmlNodeSetContent(section->xmlChildrenNode,
                                  (const xmlChar*) filename);
              }
              section = section->next;
            }
          }
          cur = cur->next;
        }

        /* We can save updated configuration profile */
        saveCtxt = xmlSaveToFilename(PrivConfigConnProfile, NULL,
                                     XML_SAVE_NO_DECL);
        if (xmlSaveDoc(saveCtxt, doc) < 0)
        {
          log_err("%s: Unable to save ADK connection profile\n", __FUNCTION__);
        }

        xmlSaveClose(saveCtxt);

        xmlFreeDoc(doc);
        doc = NULL;

        if (vhq_adk_com_type == VHQADKCOM_SYS_FLASH)
        {
          if (removeFile(conn_profile) == FALSE)
          {
            log_err("%s: Couldn't remove ADK connection profile on flash\n",
                    __FUNCTION__);
          }
        }
        else
        {
          /* Now we can mark this file as processed, don't save cksum for file installed using SYS FLASH */
          SaveProcessedConnProfileFileCkSum(conn_profile);
        }
      }
    }
  }
}
#endif


static bool VHQLoadConfigDataFromIni(bool processUpdateFiles,
                                     CALLBACK_INI_EVENT pfnIniCallback)
{
  char CfgFileName[512];
  char CfgFileBackupName[512];

  memset(CfgFileName, 0, sizeof(CfgFileName));
  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_CFG,
                         GetCurrentInstance());

  if (!DirExists((char*) VHQ_PRIV_FOLDER))
  {
    // eventually, this call might need to get moved to a platform independent place,
    // as this is not cross platform like fopen, open, etc
#if !defined(WIN32)
    if (CreateDir(VHQ_PRIV_FOLDER,
                  S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH) == FALSE)
    {
      log_err("%s: Failed to create the folder: %s\n", __FUNCTION__,
              VHQ_PRIV_FOLDER);
    }
#else
        //_mkdir(VHQ_PRIV_FOLDER);
        log_err( "%s: %s does not exist - Creating it with default file\n", __FUNCTION__, VHQ_PRIV_FOLDER);
#endif
    CreateDefaultConfigFile();
  }
  else if (FileExists(CfgFileName))
  {
    VHQWaitSemaphore();
    if (g_pParameters)
    {
      iniparser_freedict(g_pParameters);
      g_pParameters = NULL;
    }
    g_pParameters = iniparser_load(CfgFileName);
    if (pfnIniCallback)
      pfnIniCallback(INI_EVENT_INITIAL_LOAD, (void*) g_pParameters);
    VHQUnlockSemaphore();

    /* If the INI file is corrupt try repairing it.  If that fails, use default INI file */
    if (!CheckAndRepairCorruptINI(CfgFileName))
    {
      log_alert(
          "%s: CheckAndRepairCorruptINI FAILED - re-creating default config file\n",
          __FUNCTION__);
      CreateDefaultConfigFile();
    }
    else
      dbg_msg(
          "%s: Saved Config file successfully loaded - adding missing defaults\r\n",
          __FUNCTION__);
  }
  else
  {
    // otherwise, use in-built defaults to set things.
    log_alert("%s: Saved Config does not exist - Creating default\n",
              __FUNCTION__);
    CreateDefaultConfigFile();
  }

#ifdef ADK_SUPPORT
  dbg_msg("%s: Syncing INI file to INFO SVC DB\n", __FUNCTION__);
  SyncIniCfgWithInfoSvc(SYNC_MASTER_INI);
#endif

#ifndef WIN32
  /* Save a backup copy of our configuration - We have seen cases where INI file becomes corrupted and we can't
   fix it, so on MX8 devices especially, the config goes back to default. The backup copy can be used as a last
   resort if we can't load or repair the INI file */
  strcpy(CfgFileBackupName, CfgFileName);
  strcat(CfgFileBackupName, VHQ_INI_FILE_BACKUP_EXTENSION);
  if (!IsSameFile(CfgFileName, CfgFileBackupName))
  {
    dbg_msg("%s: Saving INI file %s to backup INI file %s\n\n\n", __FUNCTION__,
            CfgFileName, CfgFileBackupName);
    remove(CfgFileBackupName);
    if (CopyFile(CfgFileName, CfgFileBackupName) != 0)
      log_err("%s ERROR: Failure copying %s to %s - error = %s (%d)\n",
              __FUNCTION__, CfgFileName, CfgFileBackupName, strerror(errno),
              errno);
  }
#endif

  /* VHQConfigUpdateAddMissingDefaults() will add to both INI and Info Svc so it MUST be called after SyncIniCfgWithInfoSvc() */
  VHQConfigUpdateAddMissingDefaults(processUpdateFiles);

  VHQDeleteUnusedConfigItem();

#ifdef Mx2
  {
    int chown_ret;

    chown_ret = chown(VHQ_PRIV_FOLDER, getuid(), Secins_system_gid());
    chown_ret = chown("./flash", getuid(), Secins_system_gid());
    chown_ret = chown("./flash/vhqconfig", getuid(), Secins_system_gid());
    chmod(VHQ_PRIV_FOLDER, 0775);
    chmod("./flash", 0775);
    chmod("./flash/vhqconfig", 0775);
  }
#endif

  /* Only try processing the CFG/Cert updates if this flag is set */
  if (processUpdateFiles)
  {
    VHQUpdateConfig();

#ifdef Mx2
    VHQUpdateADKCOM();
#endif
  }

  return TRUE;
}


bool VHQLoadConfigData(bool processUpdateFiles,
                       CALLBACK_INI_EVENT pfnIniCallback)
{
  bool bRet;

  // first, load data from files or defaults
  bRet = VHQLoadConfigDataFromIni(processUpdateFiles, pfnIniCallback);
  VHQWaitSemaphore();
  iniparser_dump(g_pParameters, stdout);
  VHQUnlockSemaphore();

  UpdateLocalMW();

  UpdateLoggingLevel();

  /* The IO reads some parameters into global memory so force IO to re-read those parameters */
  VHQioInitialize();

#ifndef VHQ_CERT_VERIFIER
  /* Since we can be switching server instances, we'll need to re-load security keys from correct files */
  VHQSecurityReloadKeys();
#endif

  return bRet;
}

vhq_logging_level_t GetLoggingLevel(void)
{
  /* Mitch (8-18-2017): This function CAN NOT contain DebugMsg() calls or it will lead
   to an endless recursion as this function may be called in lower level functions
   from DebugMsg() */
  return loc_logging_level;
}

uint32 GetLogSize(void)
{
  return loc_log_file_size;
}

void InstanceRebootEventRequired(bool sendReboot)
{
  log_dbg("%s: setting backupInstance_rebootEvent to %d\n", __FUNCTION__,
          sendReboot);
  bInstance_rebootEvent = sendReboot;
}


device_id_backup_source_t GetDeviceIdBackupSource(bool DIDReqdForKeyExch)
{
  char szTempStr[256];
  device_id_backup_source_t DeviceIDBackupSource =
      DEVICE_ID_BACKUP_SOURCE_DISABLED;

  /* The device ID will come from the app.  If the app doesn't provide the Device ID, we can get it from one of
   the following backup locations: the IP address, the *ZT parameter or the TerminalID parameter of VHQconfig.
   By default, we will not get a backup device ID */

  if (DIDReqdForKeyExch)
    return DEVICE_ID_BACKUP_SOURCE_VHQ_CONFIG;

  memset(szTempStr, 0, sizeof(szTempStr));
  VHQGetParameterString(PARAM_DEVICE_ID_BACKUP_SOURCE, szTempStr,
                        sizeof(szTempStr));
  if (stricmp(szTempStr, DEVICE_ID_BACKUP_SOURCE_IP_ADDRESS_STR) == 0)
  {
    DeviceIDBackupSource = DEVICE_ID_BACKUP_SOURCE_IP_ADDRESS;
  }
  else if (stricmp(szTempStr, DEVICE_ID_BACKUP_SOURCE_ZT_STR) == 0)
  {
    DeviceIDBackupSource = DEVICE_ID_BACKUP_SOURCE_ZT_VAR;
  }
  else if (stricmp(szTempStr, DEVICE_ID_BACKUP_SOURCE_VHQ_CONFIG_STR) == 0)
  {
    DeviceIDBackupSource = DEVICE_ID_BACKUP_SOURCE_VHQ_CONFIG;
  }

  return DeviceIDBackupSource;
}

uint32 VHQConfigGetTimeInterval(uint32 ui32ParameterID, uint32 *pdwData)
{
  char szTimeBuffer[32];
  int iLen;
  uint32 ui32retval = 0;
  szTimeBuffer[0] = 0;
  VHQGetParameterString(ui32ParameterID, szTimeBuffer, sizeof(szTimeBuffer));
  iLen = strlen(szTimeBuffer);

  if (iLen)
  {
    uint32 uiCount = atoi(szTimeBuffer);

    if (tolower(szTimeBuffer[iLen - 1]) == 'd')
    {
      ui32retval = uiCount * 60 * 60 * 24;
      dbg_trace("%s: Found d - ui32retval = %d\n", __FUNCTION__, ui32retval);
    }
    else if (tolower(szTimeBuffer[iLen - 1]) == 'h')
    {
      ui32retval = uiCount * 60 * 60;
      dbg_trace("%s: Found h - ui32retval = %d\n", __FUNCTION__, ui32retval);
    }
    else if (tolower(szTimeBuffer[iLen - 1]) == 'm')
    {
      ui32retval = uiCount * 60;
      dbg_trace("%s: Found m - ui32retval = %d\n", __FUNCTION__, ui32retval);
    }
    else
    {
      ui32retval = uiCount;
      dbg_trace("%s: no string found - ui32retval = %d\n", __FUNCTION__,
                ui32retval);
    }
  }
  if (ui32retval > 0 && ui32retval < MINIMUM_HB_FREQUENCY)
  {
    log_err(
        "%s: HB frequency %d is below minimum value - resetting to min (%d)\n",
        __FUNCTION__, ui32retval, MINIMUM_HB_FREQUENCY);
    ui32retval = MINIMUM_HB_FREQUENCY;
    VHQSetParameterUint32(ui32ParameterID, ui32retval, TRUE);
  }
  dbg_trace("%s: returning %d\n", __FUNCTION__, ui32retval);
  *pdwData = ui32retval;
  return ui32retval;
}

#ifdef ADK_SUPPORT

bool ExportVHQInfoSvcDB(char *instance, char *export_filename)
{
  bool ret_val = TRUE;
  ErrorCode export_result;
  ErrorInfo error_inf;
  char CfgFileName[512];

  GetInfoSvcDBLock();

  memset(CfgFileName, 0, sizeof(CfgFileName));
  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG,
                         instance);

  dbg_msg("%s: Exporting Info SVC DB %s to file %s\n", __FUNCTION__,
          CfgFileName, export_filename);
  export_result = info_export(VHQ_INFO_SVC_XML_SCHEMA, VHQ_INFO_SVC_DB_SCHEMA,
                              CfgFileName, export_filename, &error_inf);
  dbg_msg("%s: Exported InfoSvc Database - result = %d\n", __FUNCTION__,
          export_result);
  if (export_result != INFO_E_OK)
  {
    log_err(
        "%s: Exported InfoSvc Database - result = %d\n\terrorCode = %d\n\tshortMessage = %s\n\tlocation = %s\n\textendedMessage = %s\n",
        __FUNCTION__, export_result, error_inf.errorCode,
        error_inf.shortMessage ? error_inf.shortMessage : "NULL",
        error_inf.location ? error_inf.location : "NULL",
        error_inf.extendedMessage ? error_inf.extendedMessage : "NULL");
    ret_val = FALSE;
  }
  /* free the error info */
  error_info_free(&error_inf);

  ReleaseInfoSvcDBLock();

  return ret_val;
}

bool ImportVHQInfoSvcDB(char *instance, char *import_filename,
                        dl_file_dl_type_t eType)
{
  bool ret_val = TRUE;
  ErrorCode import_result;
  ErrorInfo error_inf;
  char CfgFileName[512];

  GetInfoSvcDBLock();

  memset(CfgFileName, 0, sizeof(CfgFileName));
  GetFileNameForInstance(CfgFileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG,
                         instance);

  if ((eType == DL_FILE_DL_TYPE_PARAMETER_PARTIAL_FLAT)
      || (eType == DL_FILE_DL_TYPE_PARAMETER_PARTIAL_HIERARCHICHAL))
  {
    import_result = info_partial_import(VHQ_INFO_SVC_XML_SCHEMA,
                                        VHQ_INFO_SVC_DB_SCHEMA, CfgFileName,
                                        import_filename, &error_inf);
    dbg_msg("%s: Imported PARTIAL InfoSvc Database - result = %d\n",
            __FUNCTION__, import_result);
  }
  else
  {
    import_result = info_import(VHQ_INFO_SVC_XML_SCHEMA, VHQ_INFO_SVC_DB_SCHEMA,
                                CfgFileName, import_filename, &error_inf);
    dbg_msg("%s: Imported FULL InfoSvc Database - result = %d\n", __FUNCTION__,
            import_result);
  }

  ReleaseInfoSvcDBLock();

  if (import_result != INFO_E_OK)
  {
    log_err(
        "%s: ERROR Importing InfoSvc Database - result = %d\n\terrorCode = %d\n\tshortMessage = %s\n\tlocation = %s\n\textendedMessage = %s\n",
        __FUNCTION__, import_result, error_inf.errorCode,
        error_inf.shortMessage, error_inf.location, error_inf.extendedMessage);
    ret_val = FALSE;
  }
  else
  {
    VHQReloadConfigData(TRUE, FALSE);
  }
  /* free the error info */
  error_info_free(&error_inf);

  return ret_val;
}

#endif


char* GetCurrentInstance(void)
{
  //dbg_msg( "%s: Returning %s\n", __FUNCTION__, szCurrentInstance);
  return szCurrentInstance;
}

#ifndef VHQ_CERT_VERIFIER

void VHQReloadConfigData(bool syncInfoSvcFirst, bool processUpdateFiles)
{
  /* If the InfoSvc DB was updated, it will need to be synched first.  If INI file was updated,
   the synchornization will happen in VHQLoadConfigData() below */
  if (syncInfoSvcFirst)
    SyncIniCfgWithInfoSvc(SYNC_MASTER_INFO_SVC);

  /* Reload the config now and re-schedule HB's */
  VHQLoadConfigData(processUpdateFiles, NULL);
  ScheduleRecurringHeartbeat(FALSE);
}


vhq_result_t DeleteAllInstanceFiles()
{
  char **InstanceList = NULL;
  int num_instances = 0;
  vhq_result_t ret_val = VHQ_SUCCESS;

  GetServerInstanceList(&InstanceList, &num_instances);
  if (InstanceList)
  {
    int instance_counter;
    for (instance_counter = 0; instance_counter < num_instances;
        instance_counter++)
    {
      vhq_result_t instance_result = VHQ_SUCCESS;
      dbg_msg("%s: Removing files related to %s instance\n", __FUNCTION__,
              InstanceList[instance_counter]);
      instance_result = DeleteServerInstance(InstanceList[instance_counter],
                                             TRUE);

      /* return last known error or VHQ_SUCCESS */
      if (instance_result != VHQ_SUCCESS)
      {
        ret_val = instance_result;
      }
    }
  }
  CleanupServerInstanceList(&InstanceList, num_instances);
  dbg_trace("%s: returning after clearing all instance files\n", __FUNCTION__);

  return ret_val;
}

vhq_result_t TestLockServerInstance(char *serverInstance)
{
  vhq_result_t ret_val = VHQ_SUCCESS;

  if (strcmp(serverInstance, szCurrentInstance) == 0)
  {
//      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Instance '%s' already configured so can be locked again\n", __FUNCTION__, serverInstance);
    return VHQ_SUCCESS;
  }

//  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Test for '%s' instance lock\n", __FUNCTION__, serverInstance);
  ret_val = TestInstanceSemaphore();
  if (ret_val != VHQ_SUCCESS)
  {
//      DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Instance '%s' can't be locked\n", __FUNCTION__, serverInstance);
    return ret_val;
  }

//  DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Instance '%s' can be locked\n", __FUNCTION__, serverInstance);
  return VHQ_SUCCESS;

}

vhq_result_t LockServerInstance(char *serverInstance, int mlsecTimeout,
                                char *currentInstance)
{
  vhq_result_t ret_val;

  if (currentInstance)
  {
    strcpy(currentInstance, szCurrentInstance);
    dbg_msg("%s: Returning '%s' for current instance\n", __FUNCTION__,
            currentInstance);
  }

  if (strcmp(serverInstance, szCurrentInstance) == 0)
  {
    dbg_msg(
        "%s: Instance '%s' already configured - getting lock if necessary\n",
        __FUNCTION__, serverInstance);
    ret_val = LockInstanceSemaphore();
    dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
    return ret_val;
  }

  dbg_msg("%s: Waiting for instance lock - timeout = %d ms\n", __FUNCTION__,
          mlsecTimeout);
  ret_val = WaitInstanceSemaphore(mlsecTimeout);
  if (ret_val != VHQ_SUCCESS)
  {
    dbg_err("%s: WaitInstanceSemaphore() failed with error %d\n", __FUNCTION__,
            ret_val);
    return ret_val;
  }

  dbg_msg("%s: Got instance lock\n", __FUNCTION__);

  /* The instance we are waiting for may have been restored while we were waiting so check again.
   If it has been restored already, we don't need to do anything */
  if (strcmp(serverInstance, szCurrentInstance) != 0)
  {
    bool keys_exchanged = FALSE;

    /* Setup the current instance and load the config data for that instance */
    strcpy(szCurrentInstance, serverInstance);
    ResetServerNONCE();
    dbg_msg("%s: Current Instance set to '%s' - reloading config\n",
            __FUNCTION__, szCurrentInstance);

    VHQLoadConfigData(TRUE, NULL);
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
      ScheduleRecurringHeartbeat(FALSE);
    }
    else
    {
      /* Already key exchange and keys are present clear device registration
       * of other server instance
       */
      if (GetDeviceRegistrationMode())
        ClearDeviceRegistrationMode();
      else
        ScheduleRecurringHeartbeat(FALSE);
    }
  }

  dbg_msg("%s: Returning VHQ_SUCCESS\n", __FUNCTION__);
  return VHQ_SUCCESS;
}

vhq_result_t ReleaseServerInstanceLock(char *originalInstance)
{
  vhq_result_t ret_val;

  dbg_msg("%s: Unlocking instance (restore instance = '%s')\n", __FUNCTION__,
          originalInstance);

  ret_val = UnlockInstanceSemaphore(originalInstance);
  if (ret_val != VHQ_SUCCESS)
  {
    dbg_msg("%s: UnlockInstanceSemaphore() failed with error %d\n",
            __FUNCTION__, ret_val);
    return ret_val;
  }

  dbg_msg("%s: Instance Unlocked\n", __FUNCTION__);

  dbg_msg("%s: Returning VHQ_SUCCESS\n", __FUNCTION__);
  return VHQ_SUCCESS;
}

vhq_result_t DeleteServerInstance(char *deleteInstance, bool force_delete)
{
  char FileName[512];

  if (!deleteInstance || !strlen(deleteInstance))
    return VHQ_API_EINVAL;

  if ((force_delete == FALSE)
      && (strcmp(deleteInstance, PRIMARY_SERVER_INSTANCE_NAME) == 0))
  {
    return VHQ_API_EINVAL;
  }

  DeleteHeartBeatEventID(deleteInstance);

  if (strcmp(deleteInstance, GetCurrentInstance()) == 0)
  {
    if (force_delete)
    {
      int retries = 6;

      while ((ReleaseServerInstanceLock(deleteInstance) != VHQ_SUCCESS)
          && retries > 0)
      {
        dbg_warn(
            "%s Releasing server instance lock FAILED - retrying in 5 seconds\n",
            __FUNCTION__);
        retries--;
        sleep(5);
      }
    }
    else
    {
      return VHQ_API_SERVER_INSTANCE_ALREADY_LOCKED;
    }
  }

  dbg_msg("%s: Deleting instance '%s'\n", __FUNCTION__, deleteInstance);

  /* We can remove all events for requested instance, they are no more required */
  if (ClearInstanceEventSetsTable(deleteInstance, FALSE) == FALSE)
  {
    dbg_err("%s: Unable to delete instance '%s', instance still active\n",
            __FUNCTION__, deleteInstance);
    return VHQ_API_AGENT_BUSY_ERROR;
  }

  /* Remove all files which belong to requested instance */
  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_IDS_STATE_FILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_IDS_COMPLETE_FILE,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_IDS_STATE_FILE_BAK,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_IDS_PID_FILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_MAC_KEY_FILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_ENCR_KEY_FILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_PUB_KEY_CERTFILE,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_FILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) AGENT_RSA_KEY_PW_FILE,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_PUB_KEY_CERTFILE,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_SSL_CERTFILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) SRV_FTPS_CERTFILE, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG_XML,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_PRIVATE_INFO_SVC_CFG,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_PRIVATE_CFG, deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName,
                         (char*) VHQ_PRIVATE_CFG VHQ_INI_FILE_BACKUP_EXTENSION,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) VHQ_INITIAL_CFG_CKSUM,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  memset(FileName, 0, sizeof(FileName));
  GetFileNameForInstance(FileName, (char*) IN_PROGRESS_XML_FILE,
                         deleteInstance);
  if (!removeFile(FileName))
  {
    log_err("%s: Error removing file %s\n", __FUNCTION__, FileName);
  }

  DeleteNetworkProfiles(deleteInstance);

  dbg_msg("%s: Returning VHQ_SUCCESS\n", __FUNCTION__);
  return VHQ_SUCCESS;
}
#endif // VHQ_CERT_VERIFIER

void GetFileNameForInstance(char *InstanceFileName, char *OrigFileName,
                            const char *InstanceName)
{
  char localInstanceName[MAX_SERVER_INSTANCE_NAME_LEN];

  if (!InstanceFileName || !OrigFileName || !InstanceName)
    return;

  strcpy(localInstanceName, InstanceName);

  if (strcmp(localInstanceName, PRIMARY_SERVER_INSTANCE_NAME) == 0)
  {
    strcpy(InstanceFileName, OrigFileName);
    return;
  }
  else
  {
    char *extension_p;
    char *folder_p = strstr(OrigFileName, "./");

    if (folder_p)
    {
      extension_p = strstr(folder_p + 2, ".");
    }
    else
      extension_p = strstr(OrigFileName, ".");

    if (extension_p == NULL)
    {
      sprintf(InstanceFileName, "%s_%s", OrigFileName, localInstanceName);
    }
    else
    {
      memcpy(InstanceFileName, OrigFileName, extension_p - OrigFileName);
      strcat(InstanceFileName, "_");
      strcat(InstanceFileName, localInstanceName);
      strcat(InstanceFileName, extension_p);
    }
  }

  return;
}


param_file_reporting_t GetParamFileReportingType()
{
  char szTempStr[512];
  param_file_reporting_t ret_val;

  ret_val = PARAM_FILE_REPORTING_CURRENT;
  memset(szTempStr, 0, sizeof(szTempStr));
  VHQGetParameterString(PARAM_VHQ_PARAM_FILE_REPORTING, szTempStr,
                        sizeof(szTempStr));
  if (stricmp(szTempStr, PARAM_FILE_REPORTING_CURRENT_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_CURRENT;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_CURRENT_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_CURRENT_PLUS_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_CURRENT_PLUS;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_CURRENT_PLUS_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_PRIMARY_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_PRIMARY;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_PRIMARY_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_PRIMARY_OVERRIDE_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_PRIMARY_OVERRIDE;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_PRIMARY_OVERRIDE_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_NONE_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_NONE;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_NONE_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_ALL_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_ALL;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_ALL_STR);
  }
  else if (stricmp(szTempStr, PARAM_FILE_REPORTING_CURRENT_CONTAINERS_STR) == 0)
  {
    ret_val = PARAM_FILE_REPORTING_CURRENT_CONTAINERS;
    dbg_msg("%s: PARAM_VHQ_PARAM_FILE_REPORTING set to %s\n", __FUNCTION__,
            PARAM_FILE_REPORTING_CURRENT_CONTAINERS_STR);
  }

  dbg_msg("%s: returning %d\n", __FUNCTION__, ret_val);
  return ret_val;
}

#ifndef VHQ_CERT_VERIFIER

void GetServerInstanceList(char ***ServerInstances, int *numInstances)
{
  DIR *config_file_dir;
  struct dirent *config_file;
  char **InstanceArrayPtr;
  char *InstancePtr;

  if ((ServerInstances == NULL) || (numInstances == NULL))
  {
    if (numInstances)
    {
      *numInstances = 0;
      dbg_err("%s ERROR: ServerInstances is NULL\n", __FUNCTION__);
    }
    else
      dbg_err("%s ERROR: numInstances is NULL\n", __FUNCTION__);
    return;
  }

  *numInstances = 0;
  InstanceArrayPtr = NULL;

  if ((config_file_dir = opendir(VHQ_PRIV_FOLDER)) == NULL)
  {
    dbg_msg("%s: Can't open %s to search for server instances\n", __FUNCTION__,
            VHQ_PRIV_FOLDER);
  }
  else
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Start search in %s folder - numInstances = %d\n", __FUNCTION__, VHQ_PRIV_FOLDER, *numInstances);
    while ((config_file = readdir(config_file_dir)) != NULL)
    {
      char cfg_compare_name[256];
      char *ini_extension_ptr = strcasestr(config_file->d_name, ".ini");
      char *bk_extension_ptr = strcasestr(config_file->d_name, ".bk");

      strcpy(cfg_compare_name, VHQ_PRIVATE_CFG_FILENAME);
      if (stricmp(config_file->d_name, cfg_compare_name) == 0)
      {
        bool addEntry = TRUE;
        if (InstanceArrayPtr)
        {
          int iReallocRetries = 0;
          char **new_InstanceArrayPtr;

          do
          {
            new_InstanceArrayPtr = (char**) realloc(
                InstanceArrayPtr, ((*numInstances) + 1) * sizeof(char*));
          }
          while (new_InstanceArrayPtr == 0 && errno == EINTR
              && iReallocRetries++ < 10);

          if (new_InstanceArrayPtr)
          {
            InstanceArrayPtr = new_InstanceArrayPtr;
          }
          else
          {
            /* The realloc failed - so don't try and add this entry since we weren't granted the extra space */
            addEntry = FALSE;
          }

        }
        else
          InstanceArrayPtr = (char**) malloc(
              ((*numInstances) + 1) * sizeof(char*));

        if ((InstanceArrayPtr) && (addEntry))
        {
          InstancePtr = (char*) malloc(
              strlen(PRIMARY_SERVER_INSTANCE_NAME) + 1);
          if (InstancePtr)
          {
            memset(InstancePtr, 0, strlen(PRIMARY_SERVER_INSTANCE_NAME) + 1);
            InstanceArrayPtr[*numInstances] = InstancePtr;
            strcpy(InstancePtr, PRIMARY_SERVER_INSTANCE_NAME);
            (*numInstances)++;
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s added to instance list - numInstances = %d\n", __FUNCTION__, config_file->d_name, *numInstances);
          }
        }
      }
      else if ((ini_extension_ptr) && (bk_extension_ptr == NULL))
      {
        char *instance_name_ptr;

        instance_name_ptr = strcasestr(config_file->d_name, "vhq_");
        if (instance_name_ptr)
        {
          instance_name_ptr += strlen("vhq_");

          if (ini_extension_ptr > instance_name_ptr)
          {
            bool addEntry = TRUE;

            if (InstanceArrayPtr)
            {
              int iReallocRetries = 0;
              char **new_InstanceArrayPtr;

              do
              {
                new_InstanceArrayPtr = (char**) realloc(
                    InstanceArrayPtr, ((*numInstances) + 1) * sizeof(char*));
              }
              while (new_InstanceArrayPtr == 0 && errno == EINTR
                  && iReallocRetries++ < 10);

              if (new_InstanceArrayPtr)
              {
                InstanceArrayPtr = new_InstanceArrayPtr;
              }
              else
              {
                /* The realloc failed - so don't try and add this entry since we weren't granted the extra space */
                addEntry = FALSE;
              }

            }
            else
              InstanceArrayPtr = (char**) malloc(
                  ((*numInstances) + 1) * sizeof(char*));

            if ((InstanceArrayPtr) && (addEntry))
            {
              //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: allocating %d bytes for %s instance\n", __FUNCTION__, (ini_extension_ptr - instance_name_ptr) + 1, config_file->d_name);
              InstancePtr = (char*) malloc(
                  (ini_extension_ptr - instance_name_ptr) + 1);
              if (InstancePtr)
              {
                memset(InstancePtr, 0,
                       (ini_extension_ptr - instance_name_ptr) + 1);
                InstanceArrayPtr[*numInstances] = InstancePtr;
                memcpy(InstancePtr, instance_name_ptr,
                       ini_extension_ptr - instance_name_ptr);
                (*numInstances)++;
                //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s added to instance list - numInstances = %d\n", __FUNCTION__, config_file->d_name, *numInstances);
              }
            }

          }
          else
          {
            //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s IS NOT an INI file - moving to next file (cfg_compare_name = %s)\n", __FUNCTION__, config_file->d_name, cfg_compare_name);
          }
        }
        else
        {
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s IS NOT an INI file - moving to next file (cfg_compare_name = %s)\n", __FUNCTION__, config_file->d_name, cfg_compare_name);
        }

      }
      else
      {
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s IS NOT an INI file - moving to next file (cfg_compare_name = %s)\n", __FUNCTION__, config_file->d_name, cfg_compare_name);
      }
    }
    closedir(config_file_dir);
  }

  /* Free any existing instance list that may have been setup previously */
  if (*ServerInstances)
  {
    free(*ServerInstances);
  }

  *ServerInstances = InstanceArrayPtr;
  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Set *ServerInstances to 0x%08x (InstanceArrayPtr = 0x%08x) - returning\n", __FUNCTION__, *ServerInstances, InstanceArrayPtr);

  return;
}


void CleanupServerInstanceList(char ***ServerInstances, int numInstances)
{
  if (ServerInstances == NULL)
  {
    dbg_err("%s ERROR: ServerInstances is NULL\n", __FUNCTION__);
  }
  else
  {
    int instance_counter;
    char **InstanceList = *ServerInstances;

    if (InstanceList)
    {
      for (instance_counter = 0; instance_counter < numInstances;
          instance_counter++)
      {
        if (InstanceList[instance_counter])
        {
          //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing Instance %d memory: %s @ 0x%08x\n", __FUNCTION__, instance_counter, InstanceList[instance_counter], InstanceList[instance_counter]);
          free(InstanceList[instance_counter]);
          InstanceList[instance_counter] = NULL;
        }
      }

      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Freeing Instance List memory @ 0x%08x\n", __FUNCTION__, InstanceList);
      free(InstanceList);
      InstanceList = NULL;
    }

    ServerInstances = NULL;
  }
}

void GetInstanceFromFilename(char *filename, char *InstanceName,
                             int InstanceNameSize)
{
  int num_instances;
  char fileInstance[256];
  char *extension_ptr;
  char *instance_name_ptr;
  char **InstanceList = NULL;

  if (!InstanceName || (InstanceNameSize <= 0))
  {
    dbg_err(
        "%s ERROR: InstanceName is NULL (0x%08x) or InstanceNameSize is INVALID\n",
        __FUNCTION__, InstanceName, InstanceNameSize);
    return;
  }

  memset(InstanceName, 0, InstanceNameSize);
  memset(fileInstance, 0, sizeof(fileInstance));

  if (!filename)
  {
    dbg_err("%s ERROR: filename is NULL (0x%08x)\n", __FUNCTION__, filename);
    return;
  }

  instance_name_ptr = NULL;
  extension_ptr = strrchr(filename, '.');

  if (!extension_ptr)
  {
    dbg_err("%s ERROR: Invalid filename - %s\n", __FUNCTION__, filename);
    return;
  }

  if (stricmp(extension_ptr, ".ini") == 0)
  {
    if (strcasestr(filename, VHQ_PRIVATE_CFG_FILENAME))
    {
      strcpy(fileInstance, PRIMARY_SERVER_INSTANCE_NAME);
    }
    else
    {
      instance_name_ptr = strcasestr(filename, "vhq_");
      if (instance_name_ptr)
        instance_name_ptr += strlen("vhq_");
    }
  }
  else if (stricmp(extension_ptr, ".xml") == 0)
  {
    if (strcasestr(filename, VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME))
    {
      strcpy(fileInstance, PRIMARY_SERVER_INSTANCE_NAME);
    }
    else
    {
      char temp_filename[256];

      snprintf(temp_filename, sizeof(temp_filename), "%s_",
               VHQ_PRIVATE_INFO_SVC_CFG_XML_FILENAME_BASE);
      instance_name_ptr = strcasestr(filename, temp_filename);
      if (instance_name_ptr)
        instance_name_ptr += strlen(temp_filename);
    }
  }
  else
  {
    dbg_err("%s ERROR: Invalid filename - %s\n", __FUNCTION__, filename);
    return;
  }

  if (strlen(fileInstance) == 0)
  {
    if (instance_name_ptr)
    {
      if (extension_ptr > instance_name_ptr)
      {
        strncpy(fileInstance, instance_name_ptr,
                extension_ptr - instance_name_ptr);
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: read instance %s from filename %s\n", __FUNCTION__, fileInstance, filename);
      }
      else
      {
        //DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not read instance from filename %s\n", __FUNCTION__, filename);
      }
    }
    else
    {
      //DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Could not read instance from filename %s\n", __FUNCTION__, filename);
    }
  }

  if (strlen(fileInstance) == 0)
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s ERROR: Unable to find instance in filename %s - returning\n", __FUNCTION__, filename);
    return;
  }

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
      if (stricmp(InstanceList[instance_counter], fileInstance) == 0)
      {
        //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Instance %d (%s) matches filename (%s) instance - %s\n", __FUNCTION__, instance_counter, InstanceList[instance_counter], filename, fileInstance);
        strncpy(InstanceName, InstanceList[instance_counter], InstanceNameSize);
        break;
      }
    }
  }
  CleanupServerInstanceList(&InstanceList, num_instances);

  if (strlen(InstanceName) == 0)
  {
    //DebugMsg(VHQ_LOGGING_LEVEL_ERROR, "%s: Unable to find instance %s in instance list\n", __FUNCTION__, fileInstance);
  }

}

#endif //#ifndef VHQ_CERT_VERIFIER
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
