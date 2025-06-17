---
title: sdi/src/sys.cpp

---

# sdi/src/sys.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[UpdateContext](struct_update_context.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[sysCheckForUpdate](sys_8cpp.md#function-syscheckforupdate)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysSyncTurnOn](sys_8cpp.md#function-syssyncturnon)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysTurnOff](sys_8cpp.md#function-systurnoff)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysGetConfig](sys_8cpp.md#function-sysgetconfig)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysGetStatus](sys_8cpp.md#function-sysgetstatus)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysSelftest](sys_8cpp.md#function-sysselftest)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysSetStatus](sys_8cpp.md#function-syssetstatus)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysAuth](sys_8cpp.md#function-sysauth)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysSetIdleText](sys_8cpp.md#function-syssetidletext)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysGetLastInstallError](sys_8cpp.md#function-sysgetlastinstallerror)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysInstallSponsorCert](sys_8cpp.md#function-sysinstallsponsorcert)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysExtButton](sys_8cpp.md#function-sysextbutton)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysEppEnable](sys_8cpp.md#function-syseppenable)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysUploadStart](sys_8cpp.md#function-sysuploadstart)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysUploadTransfer](sys_8cpp.md#function-sysuploadtransfer)**(unsigned long msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysUploadFinalize](sys_8cpp.md#function-sysuploadfinalize)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[checkFileChecksum](sys_8cpp.md#function-checkfilechecksum)**(const char * filename, unsigned char * checkSum) |
| void | **[sysSetProperty](sys_8cpp.md#function-syssetproperty)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysGetProperty](sys_8cpp.md#function-sysgetproperty)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysGetVersionInfo](sys_8cpp.md#function-sysgetversioninfo)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysFactoryReset](sys_8cpp.md#function-sysfactoryreset)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysReadCertificate](sys_8cpp.md#function-sysreadcertificate)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[sysForceCurrAbbr](sys_8cpp.md#function-sysforcecurrabbr)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[setSW1SW2](sys_8cpp.md#function-setsw1sw2)**(int result, unsigned char * rsp) |
| bool | **[sys_internal_android](sys_8cpp.md#function-sys-internal-android)**() |
| bool | **[vos_sys8](sys_8cpp.md#function-vos-sys8)**() |
| bool | **[isHwModelName](sys_8cpp.md#function-ishwmodelname)**(const char * targetHwModelName) |
| bool | **[checkBundleInstalled](sys_8cpp.md#function-checkbundleinstalled)**(const char * bdlname) |
| bool | **[handleSystemCmd](sys_8cpp.md#function-handlesystemcmd)**(unsigned long msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[check4Interrupt](sys_8cpp.md#function-check4interrupt)**(void ) |
| void | **[setInterrupt](sys_8cpp.md#function-setinterrupt)**(enum [ExtserverResult](sys_8h.md#enum-extserverresult) reason) |
| int | **[isCardRemoved](sys_8cpp.md#function-iscardremoved)**(void ) |
| const char * | **[errText](sys_8cpp.md#function-errtext)**(int err) |
| void | **[setDevice2Idle](sys_8cpp.md#function-setdevice2idle)**(void ) |
| int | **[sysGetConfigParam](sys_8cpp.md#function-sysgetconfigparam)**(unsigned char tag, unsigned char tagSize, unsigned char tagFormat, unsigned char * tagValue, unsigned short * tagValueSize) |
| int | **[sysGetStatusParam](sys_8cpp.md#function-sysgetstatusparam)**(unsigned char tag, unsigned char tagSize, unsigned char tagFormat, unsigned char * tagValue, unsigned char * tagValueSize) |
| void | **[sysDisplayIdleScreen](sys_8cpp.md#function-sysdisplayidlescreen)**(unsigned mode =[Idle_Normal](sys_8h.md#enumvalue-idle-normal), const char * idletext =0) |
| bool | **[sysSetIdleScreenFinished](sys_8cpp.md#function-syssetidlescreenfinished)**(unsigned long id) |
| void | **[sysSetIdleScreenAdminMenu](sys_8cpp.md#function-syssetidlescreenadminmenu)**(bool on) |
| bool | **[sysSetIdleScreenLocked](sys_8cpp.md#function-syssetidlescreenlocked)**(bool lock =true, bool update_screen =true) |
| enum [IdleLockType](sys_8h.md#enum-idlelocktype) | **[sysGetIdleScreenLocked](sys_8cpp.md#function-sysgetidlescreenlocked)**() |
| void | **[sysResetUpdateContext](sys_8cpp.md#function-sysresetupdatecontext)**(void * handle) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[update_mutex](sys_8cpp.md#variable-update-mutex)**  |
| [UpdateContext](struct_update_context.md) * | **[update_ctx](sys_8cpp.md#variable-update-ctx)**  |
| pthread_mutex_t | **[idle_mutex](sys_8cpp.md#variable-idle-mutex)**  |
| unsigned long | **[idle_screen_id](sys_8cpp.md#variable-idle-screen-id)**  |
| unsigned | **[idle_last_mode](sys_8cpp.md#variable-idle-last-mode)**  |
| bool | **[idle_screen_locked](sys_8cpp.md#variable-idle-screen-locked)**  |
| [sdi::Timer](classsdi_1_1_timer.md) | **[idle_admin_timer](sys_8cpp.md#variable-idle-admin-timer)**  |
| bool | **[idle_admin_menu_flag](sys_8cpp.md#variable-idle-admin-menu-flag)**  |
| unsigned long | **[idle_last_admin_screen_id](sys_8cpp.md#variable-idle-last-admin-screen-id)**  |
| enum [ExtserverResult](sys_8h.md#enum-extserverresult) | **[gResult](sys_8cpp.md#variable-gresult)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SECINS_FORCE_INSTALL](sys_8cpp.md#define-secins-force-install)**  |
|  | **[SECINS_FORCE_REBOOT](sys_8cpp.md#define-secins-force-reboot)**  |
|  | **[SET_RESULT](sys_8cpp.md#define-set-result)**(sw1, sw2)  |
|  | **[MAX_UPLOAD_FILE_SIZE](sys_8cpp.md#define-max-upload-file-size)**  |


## Functions Documentation

### function sysCheckForUpdate

```cpp
static void sysCheckForUpdate(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Check for updates (Android only) 


### function sysSyncTurnOn

```cpp
static void sysSyncTurnOn(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: Turning on the e3xx device is not necessary at all. 

Turn on the device and negotiate the basic parameters of the channel 


### function sysTurnOff

```cpp
static void sysTurnOff(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: Turning off the e3xx device is not necessary at all. 

Turn off the device 


### function sysGetConfig

```cpp
static void sysGetConfig(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: The configuration data can be requested in DOL or COL format. 

Get device configuration 


### function sysGetStatus

```cpp
static void sysGetStatus(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: The device status info can be requested in DOL or COL format. 

Get device status information 


### function sysSelftest

```cpp
static void sysSelftest(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Perform a selftest of the device 


### function sysSetStatus

```cpp
static void sysSetStatus(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: Actually only the setting of the system date and time is supported. 

Set device status information 


### function sysAuth

```cpp
static void sysAuth(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Request authentication of data by the e3xx 


### function sysSetIdleText

```cpp
static void sysSetIdleText(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Set/Delete the text displayed in the idle screen (instead the text "Welcome") 


### function sysGetLastInstallError

```cpp
static void sysGetLastInstallError(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Get last install error from secure installer and reset the error 


### function sysInstallSponsorCert

```cpp
static void sysInstallSponsorCert(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Check and Install Sponsor Cert 


### function sysExtButton

```cpp
static void sysExtButton(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


**Note**: This command should be used only when PIN entry in navigator mode is active for touch only devices to confirm a button press 

External button pressed 


### function sysEppEnable

```cpp
static void sysEppEnable(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Enable/Disable EPP 


### function sysUploadStart

```cpp
static void sysUploadStart(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Start the software/configuration upload 


### function sysUploadTransfer

```cpp
static void sysUploadTransfer(
    unsigned long msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Transfer the software/configuration update data 


### function sysUploadFinalize

```cpp
static void sysUploadFinalize(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


Finalize the software upload 


### function checkFileChecksum

```cpp
static int checkFileChecksum(
    const char * filename,
    unsigned char * checkSum
)
```


**Parameters**: 

  * **filename** pointer filename 
  * **checkSum** pointer checksum 


**Return**: : 1 if checksum match, otherwise -1 

Helper function checkFileChecksum() is required for SW Update by commands 20-14 (SW Upload Start), 20-15 (Upload Transfer), 20-16 (SW Upload Finalize). These commands are not used to install SW on this platform, command 20-1D (Check For Update) is used instead.

Calculates MD5 for file and checks with the provided one. Required for SW Update by commands 20-14 (SW Upload Start), 20-15 (Upload Transfer), 20-16 (SW Upload Finalize). These commands are not used to install SW on this platform, command 20-1D (Check For Update) is used instead. 


### function sysSetProperty

```cpp
static void sysSetProperty(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Set Property 


### function sysGetProperty

```cpp
static void sysGetProperty(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Get Property 


### function sysGetVersionInfo

```cpp
static void sysGetVersionInfo(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Get version information of SDI server software components 


### function sysFactoryReset

```cpp
static void sysFactoryReset(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function sysReadCertificate

```cpp
static void sysReadCertificate(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function sysForceCurrAbbr

```cpp
static void sysForceCurrAbbr(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function setSW1SW2

```cpp
void setSW1SW2(
    int result,
    unsigned char * rsp
)
```


**Parameters**: 

  * **result** SDI result code 
  * **rsp** pointer to the response buffer 


Map result to SW1/SW2 


### function sys_internal_android

```cpp
bool sys_internal_android()
```


**Return**: true for internal android with payment application 

checks for device types, which run SDI server on Engage and the payment application on the internal Android device. A special internal network is used to connect both devices. Recently these are CM5, M440 and M424. Others like X10 or X8 shall not match, since payment application runs on Engage here. 


### function vos_sys8

```cpp
bool vos_sys8()
```


**Return**: true if running as sys8 user 

returns true, if SDI server runs on V/OS as system user sys8 


### function isHwModelName

```cpp
bool isHwModelName(
    const char * targetHwModelName
)
```


**Parameters**: 

  * **targetHwModelName** target Hardware Model Name 


**Return**: true if the Hardware Model Name matches, false if the Hardware Model Name doesn't match 

Check the Hardware Model Name of the device 


### function checkBundleInstalled

```cpp
bool checkBundleInstalled(
    const char * bdlname
)
```


**Parameters**: 

  * **bdlname** name of the bundle (or regex) 


**Return**: true if the bundle is installed, false in case that `bdlname` does not match an installed bundle 

**Note**: This function works for VOS/VOS2 only. If invoked on other platforms it returns always false. 

check for installed bundle with name `bdlname`. String `bdlname` can be a regular expression. 


### function handleSystemCmd

```cpp
bool handleSystemCmd(
    unsigned long msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


**Return**: true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command. 

Dispatch function to handle different system commands 


### function check4Interrupt

```cpp
int check4Interrupt(
    void 
)
```


**Return**: RESULT_MOBILE_ABORT if a SysAbort is received, RESULT_NO_LINK in case of link interrupt, else RESULT_OK 

Check if a SysAbort command is received or a Link interruption occurred 


### function setInterrupt

```cpp
void setInterrupt(
    enum ExtserverResult reason
)
```


Make the check4Interrupt return not RESULT_OK once. 


### function isCardRemoved

```cpp
int isCardRemoved(
    void 
)
```


**Return**: 0 = Card inserted, 1 = Card removed 

Check if a Chip Card is removed 


### function errText

```cpp
const char * errText(
    int err
)
```


**Return**: C-String with error name, "UNKNOWN" for unknown error codes 

Return C-String of error ExtserverResult 


### function setDevice2Idle

```cpp
void setDevice2Idle(
    void 
)
```


Set the device into idle mode 


### function sysGetConfigParam

```cpp
static int sysGetConfigParam(
    unsigned char tag,
    unsigned char tagSize,
    unsigned char tagFormat,
    unsigned char * tagValue,
    unsigned short * tagValueSize
)
```


**Parameters**: 

  * **tag** parameter tag 
  * **tagSize** parameter tag size (must be at least 2!) 
  * **tagFormat** DOL or COL request 
  * **tagValue** pointer to the tag value buffer 
  * **tagValueSize** pointer to the tag value size 


**Return**: 0 in case of Success, else -1 

Get device configuration parameter 


### function sysGetStatusParam

```cpp
static int sysGetStatusParam(
    unsigned char tag,
    unsigned char tagSize,
    unsigned char tagFormat,
    unsigned char * tagValue,
    unsigned char * tagValueSize
)
```


**Parameters**: 

  * **tag** parameter tag 
  * **tagSize** parameter tag size 
  * **tagFormat** DOL or COL request 
  * **tagValue** pointer to the tag value buffer 
  * **tagValueSize** pointer to the tag value size 


**Return**: 0 in case of Success, else -1 

Get device status parameter 


### function sysDisplayIdleScreen

```cpp
void sysDisplayIdleScreen(
    unsigned mode =Idle_Normal,
    const char * idletext =0
)
```


**Parameters**: 

  * **mode** idle screen mode bit mask, see enum IdleScreenMode 
  * **idletext** optional text used in favor of standard or customer text 


Display idle screen 


### function sysSetIdleScreenFinished

```cpp
bool sysSetIdleScreenFinished(
    unsigned long id
)
```


**Parameters**: 

  * **id** idlescreen ID forwarded by idlescreen callback 


**Return**: true, if the last idle screen has display the admin menu, (for active admin mode) else false is returned. 

Function called by idlescreen callback to signal the return of idlescreen 


### function sysSetIdleScreenAdminMenu

```cpp
void sysSetIdleScreenAdminMenu(
    bool on
)
```


**Note**: This function has no effect, if admin mode is disabled (not enabled by config). 

Turn on the admin menu, if this was locked by admin mode (enabled by config). Next call of [sysDisplayIdleScreen()](sys_8h.md#function-sysdisplayidlescreen) with mode Idle_MenuEnabled then will display idle screen with menu/info softkey/keyhelpers. 


### function sysSetIdleScreenLocked

```cpp
bool sysSetIdleScreenLocked(
    bool lock =true,
    bool update_screen =true
)
```


**Parameters**: 

  * **lock** new lock state: true/false to lock/unlock the idle screen 
  * **update_screen** update an existing idle screen and enable/disable menu according new lock state 


**Return**: old lock state (before this function was called): true, if the idlescreen was already locked false, if the idlescreen was already unlocked 

**Note**: This function does nothing, if SDI admin mode was enabled by configuration. The admin mode defines another behavior for locking the idle screen (e.g. it must be always unlocked by key combination or touch. Thus, internal calls of this function, will be ignored 

Lock/Unlock the idle screen and disable/enable softkeys/keyhelpers to access the menu. If locked, further subsequent calls of `[sysDisplayIdleScreen()](sys_8h.md#function-sysdisplayidlescreen)` with mode `Idle_MenuEnabled` are suppressed and idle screen is displayed without softkeys/keyhelpers. Parameter `update_screen` (set to true) will replace an existing idle screen by a default idle screen by invoking function [sysDisplayIdleScreen()](sys_8h.md#function-sysdisplayidlescreen) with or without option Idle_MenuEnabled depending on the new lock state `lock`. 


### function sysGetIdleScreenLocked

```cpp
enum IdleLockType sysGetIdleScreenLocked()
```


**Return**: true, if idle screen is locked, else false 

Returns true, if idle screen was locked either by [sysSetIdleScreenLocked()](sys_8h.md#function-syssetidlescreenlocked) or admin mode w/o admin menu was turned on by [sysSetIdleScreenAdminMenu()](sys_8h.md#function-syssetidlescreenadminmenu)


### function sysResetUpdateContext

```cpp
void sysResetUpdateContext(
    void * handle
)
```


**Parameters**: 

  * **handle** handle of the terminating connection 


Reset update context allocated for SW update with 20-14, 20-15, 20-16. The function is invoked by a thread at connection termination to abort a pending update which was started by command 20-14, but not completed with 20-15 and 20-16. SDI server supports multiple connections, which can use the update interface. With a started update with command 20-14 on one connection, the interface is locked for other connections. If a connection terminates, which obtains the update context (lock), the interface would be unaccessable for other connections. Therfore, this function will abort the started update and unlock the update interface, if the connection disturbes so that it can be used by other connection again. 



## Attributes Documentation

### variable update_mutex

```cpp
static pthread_mutex_t update_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable update_ctx

```cpp
static UpdateContext * update_ctx = 0;
```


### variable idle_mutex

```cpp
static pthread_mutex_t idle_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable idle_screen_id

```cpp
static unsigned long idle_screen_id = 0;
```


### variable idle_last_mode

```cpp
static unsigned idle_last_mode = Idle_Normal;
```


### variable idle_screen_locked

```cpp
static bool idle_screen_locked = false;
```


### variable idle_admin_timer

```cpp
static sdi::Timer idle_admin_timer;
```


### variable idle_admin_menu_flag

```cpp
static bool idle_admin_menu_flag;
```


### variable idle_last_admin_screen_id

```cpp
static unsigned long idle_last_admin_screen_id = 0;
```


### variable gResult

```cpp
static enum ExtserverResult gResult = RESULT_OK;
```



## Macros Documentation

### define SECINS_FORCE_INSTALL

```cpp
#define SECINS_FORCE_INSTALL SECINS_BIT(0)
```


Ignore critical section and proceed with the install after killing the user apps. 


### define SECINS_FORCE_REBOOT

```cpp
#define SECINS_FORCE_REBOOT SECINS_BIT(2)
```


Directive from caller to reboot system. This directive is ignored in case of errors. 


### define SET_RESULT

```cpp
#define SET_RESULT(
    sw1,
    sw2
)
{ rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }
```


### define MAX_UPLOAD_FILE_SIZE

```cpp
#define MAX_UPLOAD_FILE_SIZE 255
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <pthread.h>
#include <vector>
#ifndef HEADLESS
  #include <html/gui.h>
  #include <sysinfo/mac.h>
#endif
#include <string>

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <pwd.h>

#if !defined(__ANDROID__) && !defined(_VOS3) && !defined(_STM32)
  #include <dlfcn.h>
  #include <libsecins.h>
  // definitions of SECINS_FORCE_INSTALL and SECINS_FORCE_REBOOT can be removed once available with newer ADKs
  #ifndef SECINS_FORCE_INSTALL
    #define SECINS_FORCE_INSTALL SECINS_BIT(0) 
  #endif
  #ifndef SECINS_FORCE_REBOOT
    #define SECINS_FORCE_REBOOT SECINS_BIT(2) 
  #endif
  #include <svcmgr/svc_utility.h>
#endif

#include "sec.h"
#include "csd.h"
#include "csd-version.h"

#ifdef _STM32
  #define htonl(_x) __htonl(_x)
  #include <machine/endian.h>
  #include "secins.h"
#else
  #include <netinet/in.h>
#endif
#include "epp/counterTop.h"
#include <dirent.h>

#if defined (__ANDROID__) || defined(_VOS3)
  #include "pal/debug.h"
#endif

#if defined(__ANDROID__) || defined(_STM32)
  #include "pal/update.h"
#endif // __ANDROID__

#ifdef __cplusplus
extern "C" {
#endif

#include <svcsec.h>

#if defined (_VOS) // VOS/VOS2
#include "vault/pedguard.h"
#elif defined (_x86)
# ifndef ERR_DUPLICATE_CERT
#  define ERR_DUPLICATE_CERT -509
# endif
#endif

#ifdef __cplusplus
} // extern C
#endif

#include "sysinfo/sysinfo.h"
#include "sysinfo/vfisyspm.h"
#include "sys.h"
#include "ped.h"
#include "emv/EMV_CT_Interface.h"
#include "emv/EMV_CT_SerInterface.h"
#include "emv/E2E_EMV_CT_Serialize.h"
#include "emv/EMV_CTLS_Interface.h"
#include "emv/EMV_CTLS_SerInterface.h"
#include "emv/E2E_EMV_CTLS_Serialize.h"
#include "btlv_helper.h"
#include "emv.h"
#include "emv_ctls.h"
#include "unistd.h"
#include "version.h"
#include "_logf.h"
#include "disp.h"
#include "msr.h"
#include "msr/msr.h"
#include "ui.h"
#include "sec/libsec.h"
#include "config.h"
#include "config/sdi_sysconfig.h"
#include "sdi_tags.h"
#include "data.h"
#include "crypt.h"
#include "loadplugin.h"
#include "common/respVal.h"
#include "main.h"
#include "madk_pp_protocol.h"
#include "pthreadutil.h" // MutexLock
#include "filesystem.h"
#include "pathutil.h"
#include "hexutil.h"
#include "util.h"

#ifdef _STM32
  #include "pal/rsa.h" // pal::keystore_read_cert(), usually provided by sdikeyservice.h
#else
  #include "sdikeyservice.h"
#endif

#include "cardranges.h"
#include "filterconfig.h"
#include "sdi_timer.h"
#include "sdi_lang.h"

using namespace com_verifone_seccmd;
using namespace com_adksec_cmd;

using namespace vfisysinfo;
using namespace vfisyspm;

using namespace std;
using namespace config;

#define SET_RESULT(sw1, sw2) { rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }

#if !defined(_VOS) && !defined(_VOS3) && !defined(_STM32) // __ANDROID__ and _x86
  static void sysCheckForUpdate(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
#endif
static void sysSyncTurnOn(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysTurnOff(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysGetConfig(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysGetStatus(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysSelftest(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysSetStatus(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
#if !defined(_STM32)
  static void sysAuth(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
  static void sysSetIdleText(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
  static void sysGetLastInstallError(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
  static void sysInstallSponsorCert(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
  static void sysExtButton(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
  static void sysEppEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
#endif
static void sysUploadStart(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysUploadTransfer(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysUploadFinalize(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

// mutex protecting update context
static pthread_mutex_t update_mutex = PTHREAD_MUTEX_INITIALIZER;
// update context used for SW update with sysUploadStart, sysUploadTransfer, sysUploadFinalize
struct UpdateContext
{
    unsigned char uploadType; 
    unsigned int paketNbr; 
    void *handle; 
    mADK_PP_ProtBusyLock *busy_lock; 
    string file; 
    string dest; 
    UpdateContext() : uploadType(UPLOAD_TYPE_SOFTWARE_UPDATE), paketNbr(0)
    {
      handle = mADK_PP_Prot::getInstance()->get_handle();
      busy_lock = new mADK_PP_ProtBusyLock;

      if (!busy_lock->locked())
      {
        delete busy_lock;
        busy_lock = 0;
      }
    }
    virtual ~UpdateContext()
    {
      if (busy_lock)
      {
        delete busy_lock; // resets the busy lock
      }

      if (!file.empty())
      {
        struct stat s;

        if (stat(file.c_str(), &s) == 0 && S_ISREG(s.st_mode))
        {
          unlink(file.c_str());
        }
      }
    }

  private:
    // disable copy constructor and assign operator
    UpdateContext(const UpdateContext&);
    UpdateContext& operator=(const UpdateContext&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    UpdateContext(const UpdateContext&&);
    UpdateContext& operator=(UpdateContext&&);
#endif
};

static UpdateContext *update_ctx = 0;

#define MAX_UPLOAD_FILE_SIZE 255


#if !defined(__ANDROID__)  && !defined (_STM32) // for VOS/VOS2/VOS3 (and _x86 for testing)

  static int checkFileChecksum(const char *filename, unsigned char *checkSum);
#endif

#ifdef _VOS
  //static libraryHandle = 0;
  static int (*_Secins_install_software_extended)(const char **dlfilepaths, int nbdlfiles, int inflags) = 0;
  static int (*_Secins_precheck_software)(const char **dlfilepaths, int nbdlfiles, int *outflags, int inflags) = 0;

  static int (*_Secins_get_install_status)(char **json_str_buf) = 0;
  static void (*_Secins_get_last_error_info)(SECINS_ERROR_INFO *info) = 0;
  static void (*_Secins_clear_last_error_info)() = 0;
  #define LIBSECINS "/usr/local/lib/libsecins.so.1"
#endif


#if defined (_VOS) || defined (_VOS3) || defined (__ANDROID__) || defined (_STM32)
  static void sysShutdownRebootSleep(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
#endif
#if defined (_VOS) || defined (_VOS3)
  static void sysMACShowDesktop(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
#endif

static void sysSetProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysGetProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysGetVersionInfo(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysFactoryReset(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysReadCertificate(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void sysForceCurrAbbr(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

// variables for idlescreen handling
static pthread_mutex_t idle_mutex = PTHREAD_MUTEX_INITIALIZER; // protects idle_ variables
static unsigned long idle_screen_id = 0; // 0 means no idle screen active
static unsigned idle_last_mode = Idle_Normal;
static bool idle_screen_locked = false; // true, if menu access is disabled by sysSetIdleScreenLocked()
static sdi::Timer idle_admin_timer;     // timer used for admin mode to unlock idle screen
static bool idle_admin_menu_flag;     // flag to enable menu/info softkey/keyhelpers with next sysDisplayIdleScreen() in admin mode
static unsigned long idle_last_admin_screen_id = 0; // 0 means no idle screen with admin_menu active

#ifdef _VOS
static void initLibsecins(void)
{
  static bool initialized = false; // Not initialized

  if (!initialized) // libsecins not yet initialzed
  {
    void *libraryHandle;

    dlerror();
    libraryHandle = dlopen(LIBSECINS, RTLD_LAZY);

    if (libraryHandle)
    {
      _Secins_install_software_extended = (int(*)(const char **, int, int))dlsym(libraryHandle, "Secins_install_software_extended");

      if (!_Secins_install_software_extended)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_install_software_extended = 0;
      }

      _Secins_precheck_software = (int(*)(const char **, int, int *, int))dlsym(libraryHandle, "Secins_precheck_software");

      if (!_Secins_precheck_software)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_precheck_software = 0;
      }

      _Secins_get_last_error_info = (void(*)(SECINS_ERROR_INFO *))dlsym(libraryHandle, "Secins_get_last_error_info");

      if (!_Secins_get_last_error_info)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_get_last_error_info = 0;
      }

      _Secins_get_install_status = (int(*)(char **))dlsym(libraryHandle, "Secins_get_install_status");

      if (!_Secins_get_install_status)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_get_install_status = 0;
      }

      _Secins_clear_last_error_info = (void(*)())dlsym(libraryHandle, "_Secins_clear_last_error_info");

      if (!_Secins_clear_last_error_info)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_clear_last_error_info = 0;
      }

      if (!_Secins_install_software_extended && !_Secins_precheck_software && !_Secins_get_last_error_info && !_Secins_clear_last_error_info && !_Secins_get_install_status)
      {
        const char* error = dlerror();

        _LOGF_WARN("%s: dlsym: %s\n", __FUNCTION__, error ? error : "unknown error");
        _Secins_install_software_extended = 0;
        _Secins_precheck_software = 0;
        _Secins_get_last_error_info = 0;
        _Secins_get_install_status = 0;
        _Secins_clear_last_error_info = 0;
        dlclose(libraryHandle);
      }
    }
    else
    {
      _LOGF_ERROR("%s: dlopen to libsecins failed", __FUNCTION__);
    }
  }

  initialized = true;
  return;
}
#endif

void setSW1SW2(int result, unsigned char *rsp)
{
  if (RESULT_OK == result)
  {
    // Everything OK
    rsp[0] = 0x90;
    rsp[1] = 0x00;
  }
  else
  {
    // Execution error
    rsp[0] = 0x64;
    rsp[1] = 0x00;
  }
}

bool sys_internal_android()
{
#ifdef _VOS2 // SDI server must run on Engage
  static int inited = -1;

  if (inited >= 0)
  {
    return (inited == 1);
  }

  std::string model;

  int ret = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_MODEL_NAME, model);

  if (ret != vfisysinfo::SYS_ERR_OK)
  {
    _LOGF_ERROR("%s: sysGetPropertyString(SYS_PROP_HW_MODEL_NAME) failed with %d", __FUNCTION__, ret);
    return false;
  }

  _LOGF_INFO("%s: sysGetPropertyString(SYS_PROP_HW_MODEL_NAME) detected model '%s'", __FUNCTION__, model.c_str());

  if (!strncasecmp(model.c_str(), "CM5", 3))
  {
    inited = 1;
  }
  else if (!strncasecmp(model.c_str(), "M440", 4))
  {
    inited = 1;
  }
  else if (!strncasecmp(model.c_str(), "M424", 4))
  {
    inited = 1;
  }
  else
  {
    inited = 0;
  }

  return (inited == 1);
#else
  return false;
#endif
}

bool vos_sys8()
{
#ifdef _VOS
  uid_t uid = geteuid();
  struct passwd *pw = getpwuid(uid);

  if (pw && strcmp(pw->pw_name, "sys8") == 0)
  {
    return true;
  }

#endif
  return false;
}

bool isHwModelName(const char *targetHwModelName)
{
  if (! targetHwModelName)
  {
    return false;
  }

  string hwModelName;

  if (sysGetPropertyString(SYS_PROP_HW_MODEL_NAME, hwModelName) == SYS_ERR_OK)
  {
    if (hwModelName.find(targetHwModelName) != string::npos)
    {
      return true;
    }
  }

  return false;
}

bool checkBundleInstalled(const char *bdlname)
{
#ifdef _VOS
  bool ret = false;

  if (!bdlname)
  {
    return false;
  }

  Secins_close_bdllist(); // Sysmode also calls close first
  SecinsBdlInfo bdl;

  while (Secins_read_bdllist_entry(&bdl, sizeof(bdl)))
  {
    if (matchRegex(bdl.name, bdlname))
    {
      ret = true;
      _LOGF_INFO("checkBundleInstalled(): Bundle '%s' is installed (pattern '%s')", bdl.name, bdlname);
      break;
    }
  }

  Secins_close_bdllist();

  if (!ret)
  {
    _LOGF_INFO("checkBundleInstalled(): No bundle installed for pattern '%s'", bdlname);
  }

  return ret;
#else
  (void) bdlname;
  return false;
#endif
}

//**************************************
//* handleSystemCmd                    *
//* documentation see sys.h            *
//**************************************
bool handleSystemCmd(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  // only some commands can be used from a side connection in parallel
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  if (proto->isConnectionThread()
      && msg[1] != INS_SYS_EXT_BUTTON
      && msg[1] != INS_SYS_SW_UPLOAD_START
      && msg[1] != INS_SYS_SW_UPLOAD_TRANSFER
      && msg[1] != INS_SYS_SW_UPLOAD_FINALIZE
      && msg[1] != INS_SYS_SW_GET_LAST_INSTALL_ERROR
      && msg[1] != INS_SYS_CHECK_FOR_UPDATE
      && msg[1] != INS_SYS_INSTALL_SPONSOR_CERT
      && msg[1] != INS_SYS_FACTORY_RESET
      && msg[1] != INS_SYS_GET_PROPERTY
      && msg[1] != INS_SYS_SET_PROPERTY
      && msg[1] != INS_SYS_GET_CONFIG
      && msg[1] != INS_SYS_GET_VERSION_INFO
      && msg[1] != INS_SYS_SHUTDOWN_REBOOT_SLEEP
      && msg[1] != INS_SYS_READ_CERTIFICATE
     )
  {
    _LOGF_INFO("handleSystemCmd(): command [%02x%02x] not allowed as side command (handle=%p)", msg[0], msg[1], proto->get_handle());
    *rspSize = 0;
    return false; // not executed
  }

  switch (msg[1])
  {

    case INS_SYS_SYNC_TURN_ON:
    {
      sysSyncTurnOn(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_TURN_OFF:
    {
      sysTurnOff(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_ABORT:
    {
      /* Note: This code shouldn't be reached, since the command was already processed
       * by mADK_PP_Prot::set_command() and is not allowed as side command (check above). */
      _LOGF_ERROR("%s: sysAbort (20-02) execution failed!", __FUNCTION__);
      rsp[0] = 0x64; // execution error
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case INS_SYS_GET_CONFIG:
    {
      sysGetConfig(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_GET_STATUS:
    {
      sysGetStatus(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_SELFTEST:
    {
      sysSelftest(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_LOCK_PAYMENT:
    {
      /* Note: This code shouldn't be reached, since the command was already processed
       * by mADK_PP_Prot::set_command() and is not allowed as side command (check above). */
      _LOGF_ERROR("%s: LockPayment (20-06) execution failed!", __FUNCTION__);
      rsp[0] = 0x64; // execution error
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case INS_SYS_SET_STATUS:
    {
      sysSetStatus(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#if !defined(_STM32)

    case INS_SYS_AUTH:
    {
      sysAuth(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_SET_IDLE_TEXT:
    {
      sysSetIdleText(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_SW_GET_LAST_INSTALL_ERROR:
    {
      sysGetLastInstallError(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_INSTALL_SPONSOR_CERT:
    {
      sysInstallSponsorCert(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_EXT_BUTTON:
    {
      sysExtButton(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_EPP_ENABLE:
    {
      sysEppEnable(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#endif

    case INS_SYS_SW_UPLOAD_START:
    {
      sysUploadStart(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_SW_UPLOAD_TRANSFER:
    {
      sysUploadTransfer(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_SW_UPLOAD_FINALIZE:
    {
      sysUploadFinalize(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#if defined (_VOS) || defined (_VOS3) || defined (__ANDROID__) || defined (_STM32)

    case INS_SYS_SHUTDOWN_REBOOT_SLEEP:
    {
      sysShutdownRebootSleep(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#endif

#if defined (_VOS) || defined (_VOS3)

    case INS_SYS_MAC_SHOW_DESKTOP:
    {
      sysMACShowDesktop(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#endif

    case INS_SYS_SET_PROPERTY:
    {
      sysSetProperty(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_GET_PROPERTY:
    {
      sysGetProperty(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_GET_VERSION_INFO:
    {
      sysGetVersionInfo(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_FACTORY_RESET:
    {
      sysFactoryReset(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_READ_CERTIFICATE:
    {
      sysReadCertificate(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_SYS_FORCE_CURR_ABBR:
    {
      sysForceCurrAbbr(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#if !defined(_VOS) && !defined(_VOS3) && !defined(_STM32) // __ANDROID__ and _x86

    case INS_SYS_CHECK_FOR_UPDATE:
      sysCheckForUpdate(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
#endif

    default:
    {
      // unknown INS
      rsp[0] = 0x6D;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }

  return true;
}

static enum ExtserverResult gResult = RESULT_OK;

//**************************************
//* check4Interrupt                    *
//* documentation see sys.h            *
//**************************************
int check4Interrupt(void)
{
  if (gResult != RESULT_OK)
  {
    enum ExtserverResult lResult = gResult;
    gResult = RESULT_OK;
    return lResult;
  }

  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  if (!proto->connected())
  {
    _LOGF_INFO("check4Interrupt returns RESULT_NO_LINK");
    return RESULT_NO_LINK;
  }

  if (proto->check_abort())
  {
    _LOGF_INFO("check4Interrupt returns RESULT_MOBILE_ABORT");
    return RESULT_MOBILE_ABORT;
  }

  return RESULT_OK;
}

void setInterrupt(enum ExtserverResult r)
{
  gResult = r; // TODO do we need thread synchronisation here?
}

//**************************************
//* isCardRemoved                      *
//* documentation see sys.h            *
//**************************************
int isCardRemoved(void)
{
  unsigned char  msgBuf[20]; // Internal command/response buffer
  unsigned short msgSize;    // Internal command size

  // #####################
  // # Smart Card Detect #
  // #####################

  memcpy(msgBuf, "\x41\x01\x00\x00\xF0\x04\xDF\x06\x01\x00", 10); // DF06: Card Slot
  msgSize = 10;
  EMV_CT_SerInterface(msgBuf, msgSize, msgBuf, &msgSize);

  _LOGF_INFO("%s %02X%02X", "isCardRemoved: Smart Card Detect SW1/2 =", msgBuf[0], msgBuf[1]);

  if (memcmp(msgBuf, "\x90\x00", 2) == 0)
  {
    // Smart Card still inserted
    return 0;
  }

  return 1;
}

//**************************************
//* errText                            *
//* documentation see sys.h            *
//**************************************
const char *errText(int err)
{
  switch (err)
  {
    case RESULT_OK          :
      return "RESULT_OK"           ;

    case RESULT_FAIL        :
      return "RESULT_FAIL"         ;

    case RESULT_TIMEOUT     :
      return "RESULT_TIMEOUT"      ;

    case RESULT_USER_CANCEL :
      return "RESULT_USER_CANCEL"  ;

    case RESULT_MOBILE_ABORT:
      return "RESULT_MOBILE_ABORT" ;

    case RESULT_NO_LINK     :
      return "RESULT_NO_LINK"      ;

    case RESULT_CLEAR_BUTTON:
      return "RESULT_CLEAR_BUTTON" ;

    default:
      break                        ;
  }

  return "UNKNOWN";
}


//**************************************
//* setDevice2Idle                     *
//* documentation see sys.h            *
//**************************************
void setDevice2Idle(void)
{
  unsigned char command[MAX_MESSAGE_SIZE] = {0};
  unsigned char response[MAX_MESSAGE_SIZE] = {0};
  unsigned short rspSize = 0;

#ifndef HEADLESS
  // Disable the display device
  command[0] = CLA_DISP;
  command[1] = INS_DISP_ENABLE;
  command[2] = 0x00;
  command[3] = 0x01; // Disable
  handleDispCmd(sizeof(command), command, 4, sizeof(response), response, &rspSize);
#endif // ! HEADLESS

  // Disable the msr device
  MSR_Deactivate();
  command[0] = CLA_MSR;
  command[1] = 0x00;
  command[2] = 0x00;
  command[3] = 0x01; // Disable
  handleMsr(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Deactivate the smart card reader device

  // Workarround until ADKEMV-713 is solved
  command[0] = CLA_CRD;
  command[1] = INS_ICC_DETECT;
  command[2] = 0x00;
  command[3] = 0x00;
  handleEmv(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Check if a smart card is inserted
  if ((rspSize >= 2) &&
      (memcmp(response, "\x90\x00", 2) == 0))
  {
    // A smart card is inserted
    // Perform a smart card activate command before calling the deactivate command to avoid system crashes in special scenarios
    command[0] = CLA_CRD;
    command[1] = INS_ICC_RESET;
    command[2] = 0x00;
    command[3] = 0x00;
    handleEmv(sizeof(command), command, 4, sizeof(response), response, &rspSize);

    if ((rspSize >= 2) &&
        (memcmp(response, "\x90\x00", 2) == 0))
    {
      // Smart card succesfully activated, deactivate the card
      command[0] = CLA_CRD;
      command[1] = INS_ICC_OFF;
      command[2] = 0x00;
      command[3] = 0x00;
      handleEmv(sizeof(command), command, 4, sizeof(response), response, &rspSize);
    }
  }

  // Disable the smart card reader device
  command[0] = CLA_CRD;
  command[1] = 0x00;
  command[2] = 0x00;
  command[3] = 0x01; // Disable
  handleEmv(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Disable the EMV framework
  command[0] = CLA_EMV;
  command[1] = 0x00;
  command[2] = 0x00;
  command[3] = 0x01;
  handleEmv(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Disable the CTLS EMV framework
  command[0] = CLA_EMV_ALT;
  command[1] = 0x00;
  command[2] = 0x00;
  command[3] = 0x01;
  handleEmvCTLS(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Disable the PED device
  command[0] = CLA_PED;
  command[1] = INS_PED_ENABLE;
  command[2] = 0x00;
  command[3] = 0x01; // Disable
  (void) handlePedCmd(sizeof(command), command, 4, sizeof(response), response, &rspSize);

  // Clear the display and show idle text
  sysDisplayIdleScreen();
}

static void sysSyncTurnOn(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;
  // Turn on of e3xx device not necessary
  // ToDo: Read and store optionally received Rx Max Size and Trx Timeout!!!
  // ToDo: Return Rx Max Size and Trx Timeout used by the e3xx!!!
#if defined(__ANDROID__) || defined(_VOS3)
  _LOGF_ERROR("%s: Switch on K81 library logging!", __FUNCTION__);
  setDebugMode(true);
#endif
  rsp[0] = 0x90;
  rsp[1] = 0x00;
  rsp[2] = 0x02;
  rsp[3] = 0x10; // Max message size is limited to 4096 bytes as long as blocking if the messages is not implemented
  rsp[4] = 0x00;
  *rspSize = 5;
}

static void sysTurnOff(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;

  // Display the idle screen
  sysDisplayIdleScreen();
#ifdef __ANDROID__
  setDebugMode(false);
  _LOGF_ERROR("%s: Switch off K81 library logging!", __FUNCTION__);
#endif
  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize = 2;
}

static int sysGetConfigParam(unsigned char tag, unsigned char tagSize, unsigned char tagFormat, unsigned char *tagValue, unsigned short *tagValueSize)
{
  int retVal = 0;

  // Check if the response buffer size is big enougth
  if ((tagFormat == 0xF1 && *tagValueSize < tagSize) ||
      (*tagValueSize < tagSize + 3))
  {
    // Response buffer size to small
    _LOGF_ERROR("sysGetConfigParam: Response buffer size to small");

    tagValue[0] = 0x64; // Execution error
    tagValue[1] = 0x00;
    *tagValueSize = 2;

    return -1;
  }

  // init tag buffer, since data below does not always fill it completely
  memset(tagValue, 0, tagSize + (tagFormat == 0xF1 ? 0 : 3));

  switch (tag) // Config Tag to read
  {
    case 0xC0: // CPU Unique Id
    {
      if (tagSize < 0x14 ||
          tagSize > *tagValueSize - 2)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the CPU Unique Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        std::string cpuUniqueId;
        std::string help;

        //ToDo: Further information necessary what CPU Unique Id contains
        //      and how to get this information on e3xx
        sysGetPropertyString(SYS_PROP_HW_VARIANT_NAME, help);
        cpuUniqueId = help + ";";
        sysGetPropertyString(SYS_PROP_HW_PART_NO, help);
        cpuUniqueId += (help + ";");
        sysGetPropertyString(SYS_PROP_HW_VERSION, help);
        cpuUniqueId += (help + ";");
        sysGetPropertyString(SYS_PROP_HW_LOT_NO, help);
        cpuUniqueId += help;

        _LOGF_INFO("%s %s", "sysGetConfig: CPU Unique Id:", cpuUniqueId.c_str());

        if (tagFormat == 0xF1) // DOL request
        {
          memset(tagValue, 0x00, tagSize);
          memcpy(tagValue, cpuUniqueId.data(), MIN(cpuUniqueId.length(), tagSize));
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          memset(tagValue, 0x00, tagSize + 2);
          tagValue[0] = 0xC0; // CPU Unique Id

          if (tagSize < 128)
          {
            tagValue[1] = tagSize;
            memcpy(&tagValue[2], cpuUniqueId.data(), MIN(cpuUniqueId.length(), tagSize));
            *tagValueSize = tagSize + 2;
          }
          else
          {
            tagValue[1] = 0x81;
            tagValue[2] = tagSize;
            memcpy(&tagValue[3], cpuUniqueId.data(), MIN(cpuUniqueId.length(), tagSize));
            *tagValueSize = tagSize + 3;
          }
        }
      }

      break;
    }

    case 0xC1: // Serial number
    {
      char serNumber[12] = {0};

      if (tagSize != 0x0C)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the serial number");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else if (sysGetPropertyString(SYS_PROP_HW_SERIALNO, serNumber, sizeof(serNumber)) != SYS_ERR_OK) // Read serial number
      {
        // Not possible to read the serial number
        _LOGF_ERROR("sysGetConfig: Not possible to read the serial number");

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s %s", "sysGetConfig: serial number:", serNumber);

        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(tagValue, serNumber, sizeof(serNumber));
          *tagValueSize = 0x0C;
        }
        else // COL request
        {
          tagValue[0] = 0xC1; // Serial number
          tagValue[1] = 0x0C;
          memcpy(&tagValue[2], serNumber, sizeof(serNumber));
          *tagValueSize = 0x0E;
        }
      }

      break;
    }

    case 0xC2: // Boot SW Id
    {
      if (tagSize != 0x24)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the Boot SW Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        // fetch firmware version
        string bootVerBuf;

        if (sysGetPropertyString(SYS_PROP_BOOT_VERSION, bootVerBuf) != SYS_ERR_OK)
        {
          bootVerBuf.clear();
        }

        // fetch OS version
        string osVerBuf;

        if (sysGetPropertyString(SYS_PROP_OS_VERSION, osVerBuf) != SYS_ERR_OK)
        {
          osVerBuf.clear();
        }

        // concat versions to max allowed length 0x24 + 1 for snprintf string termination '\0'
        std::vector<char> bootSwId(0x25, 0);
        snprintf(&bootSwId[0], 0x25, "%s %s", bootVerBuf.c_str(), osVerBuf.c_str());

        _LOGF_INFO("%s %s", "sysGetConfig: Boot SW Id:", &bootSwId[0]);

        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(tagValue, &bootSwId[0], 0x24);
          *tagValueSize = 0x24;
        }
        else // COL request
        {
          tagValue[0] = 0xC2; // Boot SW Id
          tagValue[1] = 0x24;
          memcpy(&tagValue[2], &bootSwId[0], 0x24);
          *tagValueSize = 0x26;
        }
      }

      break;
    }

    case 0xC3: // App SW Id
    {
      if (tagSize != 0x24)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the App SW Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        char appSwId[36] = {0};

        // Fill App SW Id
        strcpy(appSwId, SDI_APP_NAME);
        strcat(appSwId, " v");
        strcat(appSwId, SDI_VERSION);

        _LOGF_INFO("%s %s", "sysGetConfig: App SW Id:", appSwId);

        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(tagValue, appSwId, sizeof(appSwId));
          *tagValueSize = 0x24;
        }
        else // COL request
        {
          tagValue[0] = 0xC3; // App SW Id
          tagValue[1] = 0x24;
          memcpy(&tagValue[2], appSwId, sizeof(appSwId));
          *tagValueSize = 0x26;
        }
      }

      break;
    }

    case 0xC4: // HW Ident
    {
      char hwVersion[32] = {0};

      if (tagSize < 0x04 || tagSize > 0x20)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the HW Ident");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else if (sysGetPropertyString(SYS_PROP_HW_MODEL_NAME, hwVersion, sizeof(hwVersion)) != SYS_ERR_OK) // Read Model number
      {
        // Not possible to read the HW version
        _LOGF_ERROR("sysGetConfig: Not possible to read the Model Number");

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s %s", "sysGetConfig: Model Number:", hwVersion);

        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(tagValue, hwVersion, tagSize);
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xC4; // HW Ident
          tagValue[1] = tagSize;
          memcpy(&tagValue[2], hwVersion, tagSize);
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xC5: // IFM Id
    {
      if (tagSize != 0x10)
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the IFM Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        char ifmId[0x10] = {0};

        //ToDo: Further information necessary what IFM Id contains
        //      and how to get this information on e3xx

        // Fill IFM Id with default values
        memset(ifmId, 0x00, sizeof(ifmId));

        _LOGF_INFO("%s %s", "sysGetConfig: IFM Id:", ifmId);

        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(&tagValue[0], ifmId, sizeof(ifmId));
          *tagValueSize = 0x10;
        }
        else // COL request
        {
          tagValue[0] = 0xC5; // IFM Id
          tagValue[1] = 0x10;
          memcpy(&tagValue[2], ifmId, sizeof(ifmId));
          *tagValueSize = 0x12;
        }
      }

      break;
    }

    case 0xC6: // EMV L2 Id
    {
      if ((tagSize < 0x08) ||
          (tagSize > 0x80))
      {
        // Wrong Tag length
        _LOGF_ERROR("sysGetConfig: Wrong Tag length to read the EMV L2 Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;

        retVal = -1;
        break;
      }

      string kv;

      if (!EmvInfoCache::instance()->getTag(TAG_KERNEL_VERSION, kv) || kv.empty())
      {
        // Not possible to read the EMV kernel version
        _LOGF_ERROR("sysGetConfig: Not possible to read the EMV kernel version");

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
        break;
      }

      /* command only returns CT kernel version, but EMV info cache also contains CTLS kernel versions,
       * which are appended to CT kernel version as first entry. Entries are sepreated by ';'. */
      size_t pos = kv.find(";");

      if (pos != string::npos)
      {
        kv.erase(pos); // remove CTLS kernel versions
      } // else data is considered containing CT kernel version only

      if (tagSize < kv.length())
      {
        _LOGF_ERROR("sysGetConfig: Received Tag length to small to fill complete EMV L2 Id");

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;

        retVal = -1;
        break;
      }

      if (tagFormat == 0xF1) // DOL request
      {
        memcpy(tagValue, kv.c_str(), kv.length());
        *tagValueSize = tagSize;
      }
      else // COL request
      {
        tagValue[0] = 0xC6; // EMV L2 Id

        if (tagSize < 128)
        {
          tagValue[1] = tagSize;
          memcpy(&tagValue[2], kv.c_str(), kv.length());
          *tagValueSize = tagSize + 2;
        }
        else
        {
          tagValue[1] = 0x81;
          tagValue[2] = tagSize;
          memcpy(&tagValue[3], kv.c_str(), kv.length());
          *tagValueSize = tagSize + 3;
        }
      }

      break;
    }

    default:
    {
      tagValue[0] = 0x62; // Tag error
      tagValue[1] = 0x00;
      *tagValueSize = 2;
      retVal = -1;
    }
  }

  return retVal;
}

static void sysGetConfig(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  int i = 0;
  int rspBufPos = 6;
  unsigned short rspParamSize = 0;
  unsigned short length = 0;
  unsigned short lenTagLen = 1; // At least one byte length information must be received
  unsigned tagLen = 0;
  unsigned char len = 0;

  // Check for DOL or COL request
  if ((msg[4] != 0xF1) &&
      (msg[4] != 0xF3))
  {
    rsp[0] = 0x62; // Tag Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  len = msg[5];

  if (len == 0x80)
  {
    // Invalid Tag length
    rsp[0] = 0x63; // Tag Len Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }
  else if ((len & 0x80) == 0)
  {
    // Tag length received in one byte
    tagLen = len;
  }
  else
  {
    unsigned char *pucTagLen = msg + 6;

    // Tag length received in more than one byte
    len &= ~0x80;

    while (len--)
    {
      tagLen = (tagLen << 8) + *pucTagLen++;
      lenTagLen ++;
    }
  }

  if (tagLen != (unsigned)(msgSize - 5 - lenTagLen))
  {
    rsp[0] = 0x63; // Tag Len Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  memcpy(rsp, "\x90\x00", 2);

  rsp[2] = (msg[4] == 0xF1) ? 0xF2 : 0xF0;

  *rspSize = 6;

  for (i = 0; i < (int)tagLen; i += 2)
  {
    rspParamSize = rspBufSize - *rspSize;

    // response buffer to small
    if (rspParamSize < 2)
    {
      rsp[0] = 0x64; // execution error
      rsp[1] = 0x00;
      *rspSize = 2;
      return;
    }

    if (sysGetConfigParam(msg[i + 5 + lenTagLen], msg[i + 5 + lenTagLen + 1], msg[4], &rsp[rspBufPos], &rspParamSize) == 0)
    {
      rspBufPos += rspParamSize;
      length += rspParamSize;
      *rspSize += rspParamSize;
    }
    else
    {
      memmove(rsp, &rsp[rspBufPos], rspParamSize);
      *rspSize = rspParamSize;

      return;
    }
  }

  // Calculate the Length field content for the response
  if (length <= 127)
  {
    rsp[3] = length;
    memmove(&rsp[4], &rsp[6], length);
    *rspSize -= 2;
  }
  else if (length >= 128 && length <= 255)
  {
    rsp[3] = 0x81;
    rsp[4] = length;
    memmove(&rsp[5], &rsp[6], length);
    *rspSize -= 1;
  }
  else
  {
    rsp[3] = 0x82;
    rsp[4] = length / 256; // High byte
    rsp[5] = length % 256; // Low byte
  }
}

static int sysGetStatusParam(unsigned char tag, unsigned char tagSize, unsigned char tagFormat, unsigned char *tagValue, unsigned char *tagValueSize)
{
  int retVal = 0;

  switch (tag) // Status Tag to read
  {
    case 0xD0: // Sys Time Date
    {
      string dt;

      if (tagSize != 0x07)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the sytem date and time", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      // Read system date and time: "YYYY-MM-ddTHH:mm:ss.SSSzzz"
      else if (sysGetPropertyString(SYS_PROP_TIME_ISO8601, dt) != SYS_ERR_OK || dt.length() < 19)
      {
        // Not possible to read the system date and time
        _LOGF_ERROR("%s: Not possible to read the system date and time", __FUNCTION__);

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s: system date and time: %s", __FUNCTION__, dt.c_str());

        //          0123456789012345678      01234567890123
        // convert "YYYY-MM-ddTHH:mm:ss" to "yyyymmddhhmmss"
        for (unsigned i = 0, j = 0; i < 19; i++)
        {
          if (dt[i] < '0' || dt[i] > '9')
          {
            continue;
          }

          dt[j++] = dt[i];
        }

        unsigned char *tagval;

        if (tagFormat == 0xF1) // DOL request
        {
          tagval = tagValue;
          *tagValueSize = 0x07;
        }
        else // COL request
        {
          tagValue[0] = 0xD0; // system date and time
          tagValue[1] = 0x07;
          tagval = &tagValue[2];
          *tagValueSize = 0x09;
        }

        // pack 2 bytes to 1 byte (bin) so that "2023" becomes "\x14\x17"
        for (unsigned i = 0; i < 7; i++)
        {
          tagval[i] = (dt[i * 2] - '0') * 10 + (dt[i * 2 + 1] - '0');
        }

        string title = string(__FUNCTION__) + ": system date and time BIN: ";
        _LOGAPI_HEXDUMP_INFO(title.c_str(), tagval, 7);
      }

      break;
    }

    case 0xD2: // Tamper Status
    {
      if (tagSize != 0x09)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the tamper status", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        unsigned char tamperStatus[20];

        // Initialize the tamper status
        memset(tamperStatus, 0x00, sizeof(tamperStatus));

        // set default values as long as information are missing
        if (tagFormat == 0xF1) // DOL request
        {
          memcpy(tagValue, tamperStatus, tagSize);
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD2; // tamper status
          tagValue[1] = tagSize;
          memcpy(&tagValue[2], tamperStatus, tagSize);
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xD4: // Battery Charge + Charging Status
    {
      int chargePercentage = 0;
      int chargingStatus = 0;

      if (tagSize != 0x02)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the battery charge and charging status", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else if (sysGetPropertyInt(SYS_PROP_BATTERY_CHARGE_LEVEL, &chargePercentage) != SYS_ERR_OK ||
               sysGetPropertyInt(SYS_PROP_BATTERY_STATUS_OK, &chargingStatus) != SYS_ERR_OK)
      {
        // Not possible to read the battery charge and charging status
        _LOGF_ERROR("%s: Not possible to read the battery charge and charging status", __FUNCTION__);

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        if (tagFormat == 0xF1) // DOL request
        {
          tagValue[0] = chargePercentage;
          tagValue[1] = chargingStatus;
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD4; // battery charge and charging status
          tagValue[1] = tagSize;
          tagValue[2] = chargePercentage;
          tagValue[3] = chargingStatus;
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xD5: // Battery Voltage
    {
      int batteryVoltage = 0;

      if (tagSize != 0x04)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the battery voltage", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else if (sysGetPropertyInt(SYS_PROP_BATTERY_VOLTAGE, &batteryVoltage) != SYS_ERR_OK)
      {
        // Not possible to read the battery voltage
        _LOGF_ERROR("%s: Not possible to read the battery voltage", __FUNCTION__);

        tagValue[0] = 0x64; // Execution error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s: battery voltage = %d", __FUNCTION__, batteryVoltage);

        if (tagFormat == 0xF1) // DOL request
        {
          tagValue[0] = (short)batteryVoltage / 256;
          tagValue[1] = (short)batteryVoltage % 256;
          memset(&tagValue[2], 0x00, 2); // No access to Coin battery in e3xx
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD5; // battery voltage
          tagValue[1] = tagSize;
          tagValue[2] = (short)batteryVoltage / 256;
          tagValue[3] = (short)batteryVoltage % 256;
          memset(&tagValue[4], 0x00, 2); // No access to Coin battery in e3xx
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xD6: // Sys Language Id
    {
      if (tagSize != 0x01)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the sytem languade Id", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        sdi::Language lang = SdiSysConfig::instance().getLanguageId();

        _LOGF_INFO("%s: system language ID: 0x%02X", __FUNCTION__, lang);

        if (tagFormat == 0xF1) // DOL request
        {
          tagValue[0] = (unsigned char)lang;
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD6; // system language Id
          tagValue[1] = tagSize;
          tagValue[2] = (unsigned char)lang;
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xD7: // Sys Card Entry Value deactivation
    {
      if (tagSize != 0x01)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the sytem Card Entry Value deactivation", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s: system Card Entry Value deactivation: %d",
                   __FUNCTION__, SdiSysConfig::instance().getCardEntryValueDeactivate());

        if (tagFormat == 0xF1) // DOL request
        {
          tagValue[0] = SdiSysConfig::instance().getCardEntryValueDeactivate();
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD7; // system language Id
          tagValue[1] = tagSize;
          tagValue[2] = SdiSysConfig::instance().getCardEntryValueDeactivate();
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    case 0xD8: // Sys Card Entry Mode
    {
      if (tagSize != 0x01)
      {
        // Wrong Tag length
        _LOGF_ERROR("%s: Wrong Tag length to read the sytem card entry mode", __FUNCTION__);

        tagValue[0] = 0x63; // Tag length error
        tagValue[1] = 0x00;
        *tagValueSize = 2;
        retVal = -1;
      }
      else
      {
        _LOGF_INFO("%s: system card entry mode: %d",
                   __FUNCTION__, SdiSysConfig::instance().getCardEntryMode());

        if (tagFormat == 0xF1) // DOL request
        {
          tagValue[0] = SdiSysConfig::instance().getCardEntryMode();
          *tagValueSize = tagSize;
        }
        else // COL request
        {
          tagValue[0] = 0xD8; // system language Id
          tagValue[1] = tagSize;
          tagValue[2] = SdiSysConfig::instance().getCardEntryMode();
          *tagValueSize = tagSize + 2;
        }
      }

      break;
    }

    default:
    {
      tagValue[0] = 0x62; // Tag error
      tagValue[1] = 0x00;
      *tagValueSize = 2;
      retVal = -1;
    }
  }

  return retVal;
}

static void sysGetStatus(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  int i = 0;
  int rspBufPos = 4;
  unsigned char rspParamSize = 0;
  unsigned short lenTagLen = 1; // At least one byte length information must be received
  unsigned tagLen = 0;
  unsigned char len = 0;

  // Check for DOL or COL request
  if ((msg[4] != 0xF1) &&
      (msg[4] != 0xF3))
  {
    rsp[0] = 0x62; // Tag Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  len = msg[5];

  if (len == 0x80)
  {
    // Invalid Tag length
    rsp[0] = 0x63; // Tag Len Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }
  else if ((len & 0x80) == 0)
  {
    // Tag length received in one byte
    tagLen = len;
  }
  else
  {
    unsigned char *pucTagLen = msg + 6;

    // Tag length received in more than one byte
    len &= ~0x80;

    while (len--)
    {
      tagLen = (tagLen << 8) + *pucTagLen++;
      lenTagLen ++;
    }
  }

  if (tagLen != (unsigned)(msgSize - 5 - lenTagLen))
  {
    rsp[0] = 0x63; // Tag Len Error
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  memcpy(rsp, "\x90\x00", 2);

  rsp[2] = (msg[4] == 0xF1) ? 0xF2 : 0xF0;

  *rspSize = 4;

  for (i = 0; i < (int)tagLen; i += 2)
  {
    if (sysGetStatusParam(msg[i + 5 + lenTagLen], msg[i + 5 + lenTagLen + 1], msg[4], &rsp[rspBufPos], &rspParamSize) == 0)
    {
      rspBufPos += rspParamSize;
      rsp[3] += rspParamSize;
      *rspSize += rspParamSize;
    }
    else
    {
      memmove(rsp, &rsp[rspBufPos], rspParamSize);
      *rspSize = rspParamSize;
      break;
    }
  }
}

static void sysSelftest(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;

  // ToDo: Perform test of devices accoring to e105 self test
  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize = 2;
}

static void sysSetStatus(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;
  int retVal;

  if (msgSize >= 6)
  {
    struct BTLVRootNode xBtlv;
    struct BTLVNode *node = NULL;

    if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
    {
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_D0_SYS_TIME_DATE))) != NULL)
      {
        // Set datetime with 7 byte format yyyymmddhhmmss (2 bytes packed to 1 byte BIN)
        if (node->uSize != 0x07)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the sytem tag %s", __FUNCTION__, SDI_TAG_D0_SYS_TIME_DATE);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
        }
        else
        {
          char dt[32] = {0}; // ISO8601 datetime format: "YYYY-MM-ddTHH:mm:ss"
          sprintf(dt, "%02u%02u-%02u-%02uT%02u:%02u:%02u", node->pucData[0], node->pucData[1], node->pucData[2], node->pucData[3],
                  node->pucData[4],  node->pucData[5],  node->pucData[6]);
          retVal = sysSetPropertyString(SYS_PROP_TIME_ISO8601, dt);

          if (retVal == SYS_ERR_OK)
          {
            _LOGF_INFO("%s: set datetime to '%s' successfully", __FUNCTION__, dt);
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else
          {
            _LOGF_ERROR("%s: Not possible to set datetime to '%s', sysSetPropertyString() returned %d",
                        __FUNCTION__, dt, retVal);
            rsp[0] = 0x64; // Execution error
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_D6_LANGUAGE_ID))) != NULL)
      {
        // Sys Language Id
        if (node->uSize != 0x01)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the system tag %s", __FUNCTION__, SDI_TAG_D6_LANGUAGE_ID);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        sdi::Language lang = sdi::languageSupported(node->pucData[0]);

        if (lang == sdi::LANG_NO_LANG)
        {
          _LOGF_ERROR("%s: Invalid language ID: 0x%02X", __FUNCTION__, node->pucData[0]);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        _LOGF_INFO("%s: system language Id = 0x%02X", __FUNCTION__, lang);

        if (!SdiSysConfig::instance().setLanguageId(lang))
        {
          _LOGF_ERROR("%s: SdiSysConfig::setLanguageId() with 0x%02X failed", __FUNCTION__, lang);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

#ifndef HEADLESS

        if (ui_enabled())
        {
          // select internal SDI default catalog corresponding to system language
          UICatalog syslang;

          if (!syslang.setUIGlobal(UICatalog::Intern, false)) // set global and keep this catalog for UI after deletion
          {
            _LOGF_ERROR("%s: UI catalog cannot be applied: %s", __FUNCTION__, syslang.error().c_str());
            rsp[0] = 0x64; // Execution error
            rsp[1] = 0x00;
            *rspSize = 2;
            return;
          }
        }

#endif
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_D7_CARD_ENTRY_VALUE_DEACTIVATION))) != NULL)
      {
        // Sys Card Entry Value deactivation
        if (node->uSize != 0x01)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the system tag %s", __FUNCTION__, SDI_TAG_D7_CARD_ENTRY_VALUE_DEACTIVATION);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        if (node->pucData[0] <= 0x02 || node->pucData[0] == 0x04)
        {
          unsigned char cardEntryValueDeactivation = node->pucData[0];

          if (!SdiSysConfig::instance().setCardEntryValueDeactivate(cardEntryValueDeactivation))
          {
            _LOGF_ERROR("%s: SdiSysConfig::setCardEntryValueDeactivate() with %d failed",
                        __FUNCTION__, cardEntryValueDeactivation);
            rsp[0] = 0x64; // Execution error
            rsp[1] = 0x00;
            *rspSize = 2;
            return;
          }

          _LOGF_INFO("%s: system Card Entry Value deactivation = %d",
                     __FUNCTION__, cardEntryValueDeactivation);
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
        else
        {
          _LOGF_ERROR("%s: Invalid CardEntryValueDeactivate value: %d", __FUNCTION__, node->pucData[0]);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_D8_CARD_ENTRY_MODE))) != NULL)
      {
        // Sys card entry mode
        if (node->uSize != 0x01)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the system tag %s", __FUNCTION__, SDI_TAG_D8_CARD_ENTRY_MODE);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        if (node->pucData[0] <= 0x01)
        {
          unsigned char cardEntryMode = node->pucData[0];
          _LOGF_INFO("%s: system card entry mode = %d", __FUNCTION__, cardEntryMode);

          if (!SdiSysConfig::instance().setCardEntryMode(cardEntryMode))
          {
            _LOGF_ERROR("%s: SdiSysConfig::setCardEntryMode() with %d failed", __FUNCTION__, cardEntryMode);
            rsp[0] = 0x64; // Execution error
            rsp[1] = 0x00;
            *rspSize = 2;
            return;
          }

          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
        else
        {
          _LOGF_ERROR("%s: Invalid cardEntryMode value: %d", __FUNCTION__, node->pucData[0]);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DC_DISPLAY_BACKLIGHT))) != NULL)
      {
        // Display backlight
        if (node->uSize != 0x01)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the system tag %s", __FUNCTION__, SDI_TAG_DC_DISPLAY_BACKLIGHT);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        if (node->pucData[0] <= 0x64) // Maximum value is 100
        {
          _LOGF_INFO("%s: Set Property Display Backlight %hhu", __FUNCTION__, node->pucData[0]);
          retVal = sysSetPropertyInt(SYS_PROP_DISP_BACKLIGHT, (int)node->pucData[0]);

          if (retVal == SYS_ERR_OK)
          {
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else if (retVal == SYS_ERR_PROP_UNSUPPORTED)
          {
            _LOGF_ERROR("%s: Set Property Display Backlight %hhu errcode:%d", __FUNCTION__, node->pucData[0], retVal);
            rsp[0] = 0x6D;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else
          {
            _LOGF_ERROR("%s: Set Property Display Backlight %hhu errcode:%d", __FUNCTION__, node->pucData[0], retVal);
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else
        {
          _LOGF_ERROR("%s: Invalid display backlight value: %d", __FUNCTION__, node->pucData[0]);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DD_DISPLAY_CONTRAST))) != NULL)
      {
        // Display contrast
        if (node->uSize != 0x01)
        {
          // Wrong Tag length
          _LOGF_ERROR("%s: Wrong Tag length to write the system tag %s", __FUNCTION__, SDI_TAG_DD_DISPLAY_CONTRAST);

          rsp[0] = 0x63; // Tag length error
          rsp[1] = 0x00;
          *rspSize = 2;
          return;
        }

        if (node->pucData[0] <= 0x64) // Maximum, value is 100
        {
          _LOGF_INFO("%s: Set Property Display Contrast %hhu", __FUNCTION__, node->pucData[0]);
          retVal = sysSetPropertyInt(SYS_PROP_DISP_CONTRAST, (int)node->pucData[0]);

          if (retVal == SYS_ERR_OK)
          {
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else if (retVal == SYS_ERR_PROP_UNSUPPORTED)
          {
            _LOGF_ERROR("%s: Set Property Display Contrast %hhu errcode:%d", __FUNCTION__, node->pucData[0], retVal);
            rsp[0] = 0x6D;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else
          {
            _LOGF_ERROR("%s: %hhu Set Property Display Contrast errcode:%d", __FUNCTION__, node->pucData[0], retVal);
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else
        {
          _LOGF_ERROR("%s: Invalid display contrast value: %d", __FUNCTION__, node->pucData[0]);
          rsp[0] = 0x64; // Execution error
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DE_AUDIO_VOLUME))) != NULL)
      {
        // Audio volume
        //Not implemented
        rsp[0] = 0x64;
        rsp[1] = 0x00;
        *rspSize = 2;
      }
      else
      {
        // No valid Tag received
        _LOGF_INFO("%s: No  valid tag is received!", __FUNCTION__);

        rsp[0] = 0x62; // Tag error
        rsp[1] = 0x00;
        *rspSize = 2;
      }
    }
    else
    {
      // Sys Set Status command is not TLV constructed (F0)
      _LOGF_INFO("%s: command is not TLV constructed(F0)!", __FUNCTION__);

      rsp[0] = 0x62; // Tag error
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }
  else
  {
    rsp[0] = 0x67; // Msg length error
    rsp[1] = 0x00;
    *rspSize = 2;
  }
}

#if !defined(_STM32)

static void sysAuth(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void)msgBufSize;

  enum AuthStep as;

  if (!msg || msgSize < 4 || !rsp)
  {
    _LOGF_ERROR("sysAuth: invalid buffers or input data size");
    goto failed;
  }

  // authentication step 1
  if (msg[3] == 0x01)
  {
    // msg: 2 (CLS/INS) + 2 (P1/P2) + 16 (Server random)
    // rsp: 2 (CLS/INS) + 32 (enc. datablock: 16 (E105 token) + 16 (E105 random)) + 10 (KSN)
    if (msgSize != 20 || rspBufSize < 44)
    {
      _LOGF_ERROR("sysAuth: invalid size parameters for step 1 (%hu!=20 or %hu<44)", msgSize, rspBufSize);
      goto failed;
    }

    as = AuthStep_1;
  }
  // authentication step 2
  else if (msg[3] == 0x02)
  {
    // msg: 2 (CLS/INS) + 2 (P1/P2) + 32 (enc. datablock: 16 (E105 token), 16 (Server token))
    // rsp: 2 (CLS/INS) + 32 (enc. datablock: 16 (Server token), 16 (E105 serial number))
    if (msgSize != 36 || rspBufSize < 34)
    {
      _LOGF_ERROR("sysAuth: invalid size parameters for step 2 (%hu!=36 or %hu<34)", msgSize, rspBufSize);
      goto failed;
    }

    as = AuthStep_2;
  }
  else
  {
    _LOGF_ERROR("sysAuth: invalid auth. step value in P2 field (0x%02x)", msg[3]);
    goto failed;
  }

  *rspSize = rspBufSize - 2; // in: max. buffer size, out: result data size

  if (system_Auth(as, msg + 4, msgSize - 4, rsp + 2, rspSize) != RESULT_OK)
  {
    _LOGF_ERROR("sysAuth: system_Auth() for step %d FAILED", (as == AuthStep_1 ? 1 : 2));
    goto failed;
  }

  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize += 2;
  _LOGF_INFO("sysAuth: system_Auth() for step %d PASSED", (as == AuthStep_1 ? 1 : 2));
  return;

failed:

  if (rsp && rspBufSize >= 2)
  {
    rsp[0] = 0x64; // Execution error
    rsp[1] = 0x00;
    *rspSize = 2;
  }
}

static void sysSetIdleText(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
#ifndef HEADLESS

  if (ui_enabled())
  {
    if ((msgBufSize > 0) &&
        (msg != NULL) &&
        (msgSize > 0) &&
        (rspBufSize > 0) &&
        (rsp != NULL) &&
        (rspSize != NULL))
    {
      string idle_text_file = sdi::filesystem::home_flash_file(IDLETEXT_CFG_FILE);

      if (msg[3] == 0x00) // Set idle text
      {
        struct BTLVRootNode xBtlv;

        if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
        {
          struct BTLVNode *node = NULL;

          // Determine the text to set
          if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA001_IDLE_TEXT))) != NULL)
          {
            char *idleText = NULL;

            // Allocate text length plus one bytes and append a zero to the text
            if ((idleText = (char *)malloc(node->uSize + 1)) != NULL)
            {
              MutexLock m(&idle_mutex);
              memcpy(idleText, node->pucData, node->uSize);
              idleText[node->uSize] = 0x00;

              // Open idle text file to write
              int fileHdl = open(idle_text_file.c_str(), O_CREAT | O_TRUNC | O_WRONLY, S_IRUSR | S_IWUSR);

              if (fileHdl >= 0)
              {
                // Write the zero terminated idle text to the file
                if (write(fileHdl, idleText, strlen(idleText) + 1) >= 0)
                {
                  rsp[0] = 0x90;
                  rsp[1] = 0x00;
                  *rspSize = 2;
                }
                else
                {
                  _LOGF_ERROR("sysSetIdleText: File write failed!");
                  rsp[0] = 0x64;
                  rsp[1] = 0x00;
                  *rspSize = 2;
                }

                // Close the idle text file
                fsync(fileHdl);
                close(fileHdl);
              }
              else
              {
                _LOGF_ERROR("sysSetIdleText: No file access!");
                rsp[0] = 0x64;
                rsp[1] = 0x00;
                *rspSize = 2;
              }

              free(idleText);
            }
            else
            {
              _LOGF_ERROR("sysSetIdleText: No memory available!");
              rsp[0] = 0x64;
              rsp[1] = 0x00;
              *rspSize = 2;
            }
          }
          else
          {
            _LOGF_ERROR("sysSetIdleText: Mandatory tag/data missing!");
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else
        {
          _LOGF_ERROR("sysSetIdleText: TLV import failed!");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else if (msg[3] == 0x01) // Delete idle text (and use the welcome text)
      {
        MutexLock m(&idle_mutex);
        struct stat s;

        // if idle text file exists
        if (stat(idle_text_file.c_str(), &s) == 0 && S_ISREG(s.st_mode))
        {
          if (unlink(idle_text_file.c_str()) == 0)
          {
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
          else
          {
            _LOGF_ERROR("sysSetIdleText: File deletion failed!");
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else // Idle text file don't exists
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else
      {
        _LOGF_ERROR("sysSetIdleText: P2 not supported!");
        rsp[0] = 0x64;
        rsp[1] = 0x00;
        *rspSize = 2;
      }
    }
    else if (rsp != NULL && rspSize != NULL)
    {
      _LOGF_ERROR("sysSetIdleText: Parameter error!");
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      *rspSize = 2;
    }

    sysDisplayIdleScreen();
  }
  else
  {
    _LOGF_ERROR("sysSetIdleText: Idle text in headless mode not supported!");
    rsp[0] = 0x64;
    rsp[1] = 0x00;
    *rspSize = 2;
  }

#else
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;

  _LOGF_ERROR("sysSetIdleText: Idle text in headless mode not supported!");
  rsp[0] = 0x64;
  rsp[1] = 0x00;
  *rspSize = 2;
#endif // HEADLESS
}

static void sysGetLastInstallError(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msg;
  (void) msgBufSize;
  (void) rspBufSize;

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: message length error!", __FUNCTION__);
    SET_RESULT(0x67, 0x00); // Msg length error
    return;
  }

#ifdef _VOS
  // Initialize the libsecins
  initLibsecins();

  // BTLV structs generation of response message
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int exportSize = 0;

  // check that secins lib has been loaded
  if (_Secins_install_software_extended && _Secins_precheck_software && _Secins_get_install_status)
  {
    char *jsonInfo = NULL;

    // request last install status
    int checkInstallStatus = _Secins_get_install_status(&jsonInfo);
    // check that info isn't empty
    _LOGF_INFO("%s (%i)[%s]", __FUNCTION__, checkInstallStatus, jsonInfo);
    // set status of message
    SET_RESULT(0x90, 0x00);
    // add json install information to response
    // Write the string value to the TLV structure and build the response
    node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);
    pxBTLVAppendTag(node, SDI_TAG_DFA148_SOFTWARE_STATUS_JSON, (unsigned char *)jsonInfo, strlen(jsonInfo));

    // cleanup allocated memory
    free(jsonInfo);
  }
  else if (_Secins_get_last_error_info)
  {
    SECINS_ERROR_INFO info;

    _Secins_get_last_error_info(&info);
    _LOGF_INFO("%s: [%s] [%s]",
               __FUNCTION__,
               strlen(info.bundle_name) > 0 ? info.bundle_name : "no bundle name found",
               strlen(info.package_name) > 0 ? info.package_name : "no package name found");
    _LOGF_INFO("%s: [%zu] [%zu]",
               __FUNCTION__,
               strlen(info.bundle_name),
               strlen(info.package_name));
    // check that info isn't empty
    SET_RESULT(0x90, 0x00);

    if (strlen(info.bundle_name) > 0)
    {
      if (NULL == node)
      {
        node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);
      }

      pxBTLVAppendTag(node, SDI_TAG_DFA149_SOFTWARE_STATUS_BNDL_NAME, (unsigned char *)info.bundle_name, strlen(info.bundle_name));
    }

    if (strlen(info.package_name) > 0)
    {
      if (NULL == node)
      {
        node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);
      }

      pxBTLVAppendTag(node, SDI_TAG_DFA151_SOFTWARE_STATUS_PKG_NAME, (unsigned char *)info.package_name, strlen(info.package_name));
    }

    // finally clear the error output
    if (_Secins_clear_last_error_info)
    {
      _Secins_clear_last_error_info();
    }
  }

  // build respose msg
  if ((exportSize = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
  {
    *rspSize = 2 + exportSize;
  }

  // check that answer could be successful exported
  if (2 >= *rspSize)
  {
    _LOGF_ERROR("%s: no valid return from install status", __FUNCTION__);
    SET_RESULT(0x64, 0x00);
  }

#else
  SET_RESULT(0x64, 0xF9);
#endif
}

static void sysInstallSponsorCert(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: invalid message size (%d)", __FUNCTION__, msgSize);
    SET_RESULT(0x67, 0x00);
    return;
  }

  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00); // Tag Error
    return;
  }

  struct BTLVNode *node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA12F_SPONSOR_CERT));

  if (!node)
  {
    _LOGF_ERROR("%s: tag F0/DFA12F missing!", __FUNCTION__);
    SET_RESULT(0x64, 0xFE); // parameter error
    return;
  }

  /* PWMADK-2303: only allow SW update, if no other SDI command is active and
   * decline other connections with busy as long as the update is processed */
  mADK_PP_ProtBusyLock bl;

  if (!bl.locked())
  {
    _LOGF_ERROR("%s: Installation of sponsor certificate not possible, since other SDI command(s) active (SDI server busy)", __func__);
    SET_RESULT(0x64, 0x0A);
    return;
  }

  string certfile = pathcat(sdi::filesystem::upload_install_dir(), "cert.crt"); /* DER-encoded X.509 certificate file from VeriShield CA */

  int ret;
  // store Cert.crt
  int certFileHdl = open(certfile.c_str(), O_CREAT | O_WRONLY | O_TRUNC, S_IRUSR | S_IWUSR);

  if (certFileHdl < 0)
  {
    _LOGF_ERROR("%s: Cannot create file '%s' !", __FUNCTION__, certfile.c_str());
    SET_RESULT(0x64, 0x00); // Execution error
    return;
  }

#if defined (__ANDROID__)
  // extended error info
  int eei;
#endif

  if (write(certFileHdl, (char *)node->pucData, node->uSize) != (ssize_t)node->uSize)
  {
    close(certFileHdl);
    _LOGF_ERROR("%s: write error on file '%s' !", __FUNCTION__, certfile.c_str());
    SET_RESULT(0x64, 0x00); // Execution error
    goto done;
  }

  fsync(certFileHdl);
  close(certFileHdl);

#if defined(__ANDROID__)
  ret = pal::update::installSponsor(certfile, eei);

  if (ret != 0)
  {
    _LOGF_ERROR("%s: ERROR: sys_add_cert() returned %d\n", __FUNCTION__, ret);
    SET_RESULT(0x64, 0x00); // Execution error
    goto done;
  }

#elif defined(_VOS3) || defined(_STM32)
#warning "TODO: IMPLEMENT SECURE INSTALLER INSTALLATION OF CERTIFICATE"
  _LOGF_ERROR("%s: ERROR: TODO: IMPLEMENT SECURE INSTALLER INSTALLATION OF CERTIFICATE\n", __FUNCTION__);
  SET_RESULT(0x64, 0x00); // Execution error
  (void)(ret);
  goto done;
#else
  ret = Secins_add_cert(certfile.c_str());

  if (ret == ERR_DUPLICATE_CERT)
  {
    _LOGF_INFO("%s: SUCCESS: Certificate already installed!\n", __FUNCTION__);
    SET_RESULT(0x90, 0x00);
    goto done;
  }

  if (ret != 0)
  {
    _LOGF_ERROR("%s: ERROR: Secins_add_cert() returned %d (%08Xh)\n", __FUNCTION__, ret, ret);
    SET_RESULT(0x64, 0x00); // Execution error
    goto done;
  }

#endif

  _LOGF_INFO("%s: SUCCESS: New certificate installed!\n", __FUNCTION__);
  SET_RESULT(0x90, 0x00);

done:
  // remove temporary certificate file
  unlink(certfile.c_str());
}

static void sysExtButton(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;

  if (pedSetExtButton())
  {
    rsp[0] = 0x90;
    rsp[1] = 0x00;
    *rspSize = 2;
  }
  else
  {
    rsp[0] = 0x64;
    rsp[1] = 0xFD; // Logic error, command should not be used in that state
    *rspSize = 2;
  }

  // PWMADK-3450: ignore suppress response flag in P2 for protocol type D
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  if (proto->get_protocol_type() != 'D' && msgSize > 3 && msg[3] == 0x01)
  {
    _LOGF_INFO("sysExtButton: Suppress response");

    rsp[0] = 0xFF;
    rsp[1] = 0xFF;
    *rspSize = 2;
  }
}

static void sysEppEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  vfiepm::CounterTop& ctp = vfiepm::CounterTop::getInstance();

  if (ctp.isCounterTop())
  {
    if (msg[3] == 0x00)
    {
      vfiepm::EppConnectionState eppConnState;

      // Enable EPP
      if (ctp.enableEpp(eppConnState))
      {
        // EPP successfully enabled
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;
      }
      else
      {
        int size = 0;

        _LOGF_ERROR("sysEppEnable: Enable EPP not successful, add EPP connection state to the response");

        // Add connection state to response
        common::appendRespVal((int)eppConnState, rspBufSize - 2, &rsp[2], &size);

        rsp[0] = 0x69;
        rsp[1] = 0x00;
        *rspSize = 2 + size;
      }
    }
    else if (msg[3] == 0x01)
    {
      // Disable EPP
      ctp.disableEpp();

      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
    else
    {
      rsp[0] = 0x64;
      rsp[1] = 0xFE; // Parameter error
      *rspSize = 2;
    }
  }
  else
  {
    rsp[0] = 0x69;
    rsp[1] = 0x00;
    *rspSize = 2;
  }
}
#endif

//**************************************
//* sysDisplayIdleScreen                  *
//* documentation see sys.h            *
//**************************************
void sysDisplayIdleScreen(unsigned mode, const char *idletext)
{
#ifdef HEADLESS
  (void) mode;
  (void) idletext;
#else

  if (!ui_enabled())
  {
    return;
  }

  MutexLock m(&idle_mutex);

  std::string text;

  if (idletext)
  {
    text.assign(idletext);
  }
  else
  {
    string idle_text_file = sdi::filesystem::home_flash_file(IDLETEXT_CFG_FILE);

    if (sdi::filesystem::read_file(idle_text_file.c_str(), text))
    {
      _LOGF_INFO("sysDisplayIdleScreen: use idle text from file '%s'", idle_text_file.c_str());
    }
  }

  int options = IDLE_DisplayOnly; // 0
  int timeout = 0;

  // PWMADK-3023: admin mode for idlescreen (on standalone with standard mode only)
  unsigned admin_tout;
  bool admin_menu = false;

  if (!(mode & Idle_NoAdminMode) &&
      vfiepm::CounterTop::getInstance().isCounterTop() &&
      Config::getInstance().adminMode(&admin_tout))
  {
    // enable menu, if requested by option only
    if (mode & Idle_MenuEnabled)
    {
      if (admin_tout > 0 && idle_admin_menu_flag)
      {
        idle_admin_timer.set(admin_tout * 1000);
        timeout = admin_tout; // adjust dialog timeout
        idle_admin_menu_flag = false;
        admin_menu = true;
      }
      else if (idle_admin_timer.isEnabled())
      {
        timeout = (int)(idle_admin_timer.getRemainingTimeInMs() / 1000);
        admin_menu = (timeout > 0); // no admin menu, if timeout occured
      }
    }

    if (!admin_menu)
    {
      // disable menu
      mode &= ~Idle_MenuEnabled;
      /* enable admin mode for idlescreen triggered by key
       * combination 2-5-8/touch sequence (4 display corners) */
      options |= IDLE_AdminMode;
      // use infinite timeout
      timeout = -1;
      // disable admin menu timer, if active
      idle_admin_timer.disable();
    }
  }
  else if (idle_screen_locked)
  {
    mode &= ~Idle_MenuEnabled;
  }

  if (mode & Idle_MenuEnabled)
  {
    options |= (IDLE_MenuKey | IDLE_InfoKey);

    if (timeout == 0)
    {
      timeout = -1;
    }

    if (vfiepm::CounterTop::getInstance().isEpp())
    {
      // in EPP mode, never display menu
      options &= ~IDLE_MenuKey;
    }
  }

  if (mode & Idle_WaitLogo)
  {
    options |= IDLE_WaitLogo;
  }

  // increase the idlescreen ID and remember the idlescreen mode
  idle_screen_id++;
  idle_last_mode = mode;
  // remember ID of idlescreen displaying admin menu
  idle_last_admin_screen_id = (admin_menu ? idle_screen_id : 0);
  // display the idlescreen
  (void)ui_idlescreen(text, options, timeout, (void *)idle_screen_id);
#endif
}

bool sysSetIdleScreenFinished(unsigned long id)
{
  MutexLock m(&idle_mutex);

  if (id == idle_screen_id)
  {
    // no idlescreen running
    idle_screen_id = 0;
  }

  return (id == idle_last_admin_screen_id);
}

void sysSetIdleScreenAdminMenu(bool on)
{
  MutexLock m(&idle_mutex);
  idle_admin_menu_flag = on;

  if (!on)
  {
    idle_admin_timer.disable();
  }
}

bool sysSetIdleScreenLocked(bool lock, bool update_screen)
{
  MutexLock m(&idle_mutex);
  bool already_locked = idle_screen_locked;
  idle_screen_locked = lock;

  // if idle screen is running with menu buttons, disable the buttons
  if (update_screen && idle_screen_id > 0)
  {
    if ((lock && (idle_last_mode & Idle_MenuEnabled)) || (!lock && !(idle_last_mode & Idle_MenuEnabled)))
    {
      m.unlock();
      sysDisplayIdleScreen(lock ? Idle_Normal : Idle_MenuEnabled);
    }
  }

  return already_locked;
}

enum IdleLockType sysGetIdleScreenLocked()
{
  if (vfiepm::CounterTop::getInstance().isCounterTop() &&
      Config::getInstance().adminMode() &&
      !idle_admin_timer.isEnabled())
  {
    return ILT_AdminLock;
  }

  return (idle_screen_locked ? ILT_ApiLock : ILT_NoLock);
}

static void sysUploadStart(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  if (msgSize < 6)
  {
    _LOGF_ERROR("%s: message length error!", __FUNCTION__);
    SET_RESULT(0x67, 0x00); // Msg length error
    return;
  }

  struct BTLVRootNode xBtlv;

  struct BTLVNode *node = NULL;

  int fileHdl = -1;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00); // Tag error
    return;
  }

  MutexLock ml(&update_mutex);

  // Update already started with 20-14, but not finalized with 20-15, 20-16 yet
  if (update_ctx)
  {
    //  Note: Only this connection is able to reach this code here due to busy flag
    _LOGF_ERROR("%s: Update not possible, since already started by this connection (handle=%p), but not finalized yet!",
                __FUNCTION__, update_ctx->handle);
    SET_RESULT(0x64, 0xFD); // Logic error (wrong command order)
    return;
  }

  // create the update context
  update_ctx = new UpdateContext;

  /* PWMADK-2303: only allow SW update, if no other SDI command is active and
   * decline other connections with busy as long as the update is processed */
  if (!update_ctx->busy_lock)
  {
    _LOGF_ERROR("%s: Update not possible, since other SDI command(s) active (SDI server busy)", __FUNCTION__);
    SET_RESULT(0x64, 0x0A); // busy
    goto fail;
  }

  // read upload type (optional), default is UPLOAD_TYPE_SOFTWARE_UPDATE
  if (((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA01E_CONFIG_UPLOAD_TYPE))) != NULL))
  {
    if (node->uSize != 1)
    {
      _LOGF_ERROR("%s: Invalid tag length DFA01E", __FUNCTION__);
      SET_RESULT(0x63, 0x00); // Tag length error
      goto fail;
    }

    if (*node->pucData == UPLOAD_TYPE_CONFIG_WHITELIST && isHwModelName("VR1"))
    {
      _LOGF_ERROR("%s: Upload Type (%02X) not supported", __FUNCTION__, *node->pucData);
      SET_RESULT(0x64, 0x00); // Execution error
      goto fail;
    }

    /* Check if tag DFA01E contains invalid value for SW upload 20-14/20-15/20-16,
     * since upload types are shared with command check for update 20-1D.
     * Note: Upload type is checked below again, if it is supported on this platfrom. */
    if (*node->pucData > UPLOAD_TYPE_CONFIG_CARD_RANGES
        && *node->pucData != UPLOAD_TYPE_EMV_CONFIG_PACKAGE
        && *node->pucData != UPLOAD_TYPE_CP_PACKAGE
        && *node->pucData != UPLOAD_TYPE_UVRK_PACKAGE
       )
    {
      _LOGF_ERROR("%s: Invalid tag value DFA01E", __FUNCTION__);
      SET_RESULT(0x62, 0x00); // Tag error
      goto fail;
    }

    // take over upload type to context
    update_ctx->uploadType = *node->pucData;
  }

  if (update_ctx->uploadType == UPLOAD_TYPE_SOFTWARE_UPDATE)
  {
#if defined (_VOS) || defined (_STM32) // support platforms: VOS/VOS2/Titus
    _LOGF_INFO("%s: Upload type Software", __FUNCTION__);

    // read filename
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA020_SOFTWARE_UPLOAD_FILENAME))) != NULL)
    {
      if (!node->pucData || node->uSize == 0 || node->uSize > MAX_UPLOAD_FILE_SIZE)
      {
        _LOGF_ERROR("%s: invalid upload filename!", __FUNCTION__);
        SET_RESULT(0x62, 0x00); // Tag error
        goto fail;
      }

      string file((const char *)node->pucData, node->uSize);

#ifdef _VOS // VOS/VOS2

      // only allow tar or tgz file w/o path prefix
      if (!matchRegex(file.c_str(), "^[^\\/\\\\]*\\.(tgz|tar)$"))
      {
        _LOGF_ERROR("%s: File name '%s' not allowed!", __FUNCTION__, file.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto fail;
      }

      // Initialize the libsecins
      initLibsecins();

      /* check if new Secure Installer APIs are available
       * In this case we store the upload file to flash folder to reduce RAM usage.
       * Old APIs must use system location (RAM disk). */
      bool use_flash = (_Secins_precheck_software && _Secins_install_software_extended && _Secins_get_last_error_info);

      // take over upload filename to context
      update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(use_flash), file);
#else // _STM32

      // Titus: just check file extension, but ignore incoming filename due to name length restrictions of FS (see below)
      if (!matchRegex(file.c_str(), "^[^\\/\\\\]*\\.tar$"))
      {
        _LOGF_ERROR("%s: File name '%s' not allowed!", __FUNCTION__, file.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto fail;
      }

#endif
    }

#ifdef _VOS // VOS/VOS2

    // check for mandatory filename on VOS/VOS2
    if (update_ctx->file.empty())
    {
      _LOGF_ERROR("%s: Tag DFA020 (filename missing)", __FUNCTION__);
      SET_RESULT(0x62, 0x00); // Tag error
      goto fail;
    }

#else // _STM32
    // Titus: filename is optional, always use update.tar
    update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), STM32_DL_FILENAME);
#endif

#else // not support platforms
    // "Software Update" not supported on this platform
    _LOGF_ERROR("%s: Upload type Software Update 00 supported on VOS/VOS2/VOS3 and Titus only.", __FUNCTION__);
    SET_RESULT(0x64, 0x00); // Execution error
    goto fail;
#endif
  }

  else if (update_ctx->uploadType == UPLOAD_TYPE_CP_PACKAGE)
  {
#ifdef _VOS2 // supported platforms: VOS2 only
    _LOGF_INFO("%s: Upload type CP package", __FUNCTION__);

    // read filename
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA020_SOFTWARE_UPLOAD_FILENAME))) != NULL)
    {
      if (!node->pucData || node->uSize == 0 || node->uSize > MAX_UPLOAD_FILE_SIZE)
      {
        _LOGF_ERROR("%s: invalid upload filename!", __FUNCTION__);
        SET_RESULT(0x62, 0x00); // Tag error
        goto fail;
      }

      string file((const char *)node->pucData, node->uSize);

      // only allow zip file w/o path prefix
      if (!matchRegex(file.c_str(), "^[^\\/\\\\]*\\.zip$"))
      {
        _LOGF_ERROR("%s: File name '%s' not allowed!", __FUNCTION__, file.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto fail;
      }

      // take over upload filename to context
      update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), file);
      update_ctx->dest = pathcat(sdi::filesystem::tmp_dir(), file);
    }
    else
    {
      // filename is mandatory
      _LOGF_ERROR("%s: Tag DFA020 (filename missing)", __FUNCTION__);
      SET_RESULT(0x62, 0x00); // Tag error
      goto fail;
    }

#else
    // "Install CP package" not supported on this platform
    _LOGF_ERROR("%s: Upload type CP package 0B supported on VOS2 only.", __FUNCTION__);
    SET_RESULT(0x64, 0x00); // Execution error
    goto fail;
#endif
  }

  else if (update_ctx->uploadType == UPLOAD_TYPE_UVRK_PACKAGE)
  {
#ifdef _STM32 // supported platforms: Titus only
    _LOGF_INFO("%s: Upload type UVRK package", __FUNCTION__);

    // read filename (optional), do same as for UPLOAD_TYPE_SOFTWARE_UPDATE and just check file extension
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA020_SOFTWARE_UPLOAD_FILENAME))) != NULL)
    {
      if (!node->pucData || node->uSize == 0 || node->uSize > MAX_UPLOAD_FILE_SIZE)
      {
        _LOGF_ERROR("%s: invalid upload filename!", __FUNCTION__);
        SET_RESULT(0x62, 0x00); // Tag error
        goto fail;
      }

      string file((const char *)node->pucData, node->uSize);

      // just check file extension, but ignore incoming filename due to name length restrictions of FS (see below)
      if (!matchRegex(file.c_str(), "^[^\\/\\\\]*\\.uvrk\\.tar$"))
      {
        _LOGF_ERROR("%s: File name '%s' not allowed!", __FUNCTION__, file.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto fail;
      }
    }

    // ignore SDI_TAG_DFA020_SOFTWARE_UPLOAD_FILENAME, always use vrkpkg.tar as filename
    update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), STM32_UVRK_FILENAME);
#else
    // "Install UVRK package" not supported on this platform
    _LOGF_ERROR("%s: Upload type UVRK package 0D supported on Titus only.", __FUNCTION__);
    SET_RESULT(0x64, 0x00); // Execution error
    goto fail;
#endif
  }

  else // Secured Configuration Upload: 01 (whitelist), 02 (sensitive tags), 03 (cardranges), 0C (EMV config package)
  {
#ifndef _STM32 // configuration upload not supported on Titus
    _LOGF_INFO("%s: Upload type Configuration: %02x", __FUNCTION__, update_ctx->uploadType);

    if (vfiepm::CounterTop::getInstance().isEpp())
    {
      _LOGF_WARN("%s: Upload type Configuration %02x not allowed on EPP", __FUNCTION__, update_ctx->uploadType);
      SET_RESULT(0x64, 0xF9); // Command not allowed
      goto fail;
    }

    // take over upload filename (and its destination) to the context
    switch (update_ctx->uploadType)
    {
      case UPLOAD_TYPE_CONFIG_WHITELIST:
        update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), WHITELIST_FILE);
        update_ctx->dest = sdi::filesystem::home_flash_file(WHITELIST_FILE);
        break;

      case UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS:
        update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), SENSITIVE_TAGS_FILE);
        update_ctx->dest = sdi::filesystem::home_flash_file(SENSITIVE_TAGS_FILE);
        break;

      case UPLOAD_TYPE_CONFIG_CARD_RANGES:
        update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), CARD_RANGES_FILE);
        update_ctx->dest = sdi::filesystem::home_flash_file(CARD_RANGES_FILE);
        break;

      case UPLOAD_TYPE_EMV_CONFIG_PACKAGE:
        update_ctx->file = pathcat(sdi::filesystem::upload_install_dir(), EMV_CONFIG_TARBALL);
        update_ctx->dest = sdi::filesystem::emv_flash_dir(); // set even un-used
        break;

      default:
        _LOGF_ERROR("%s: Invalid uploadType (%d) !", __FUNCTION__, update_ctx->uploadType);
        SET_RESULT(0x64, 0x00); // Execution error
        goto fail;
    }

#else // _STM32
    // "Configuration upload" not supported on this platform
    _LOGF_ERROR("%s: Configuration upload type %02x not supported on Titus.", __FUNCTION__, update_ctx->uploadType);
    SET_RESULT(0x64, 0x00); // Execution error
    goto fail;
#endif
  }

  // create the upload file
  fileHdl = open(update_ctx->file.c_str(), O_WRONLY | O_CREAT | O_TRUNC, S_IRUSR | S_IWUSR);

  if (fileHdl < 0)
  {
    _LOGF_ERROR("%s: Cannot create file '%s' !", __FUNCTION__, update_ctx->file.c_str());
    SET_RESULT(0x64, 0x00); // Execution error
    goto fail;
  }

  close(fileHdl);
  SET_RESULT(0x90, 0x00);  // Success

  _LOGF_INFO("%s: success (upload file: %s)", __FUNCTION__, update_ctx->file.c_str());

  return;

fail:
  delete update_ctx;
  update_ctx = 0;
}

static void sysUploadTransfer(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  MutexLock ml(&update_mutex);

  if (!update_ctx)
  {
    _LOGF_ERROR("%s: No update started, run command SW Upload Start at first!", __FUNCTION__);
    SET_RESULT(0x64, 0x00);  // Execution error
    return;
  }

  struct BTLVRootNode xBtlv;

  int fileHdl = -1;

  unsigned int rcvPaketNbr = 0;

  struct BTLVNode *node = NULL;

  if (msgSize < 6)
  {
    _LOGF_ERROR("%s: message length error!", __FUNCTION__);
    SET_RESULT(0x67, 0x00);  // Msg length error
    goto fail;
  }

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00);  // Tag error
    goto fail;
  }

  // read the package number
  node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA022_SOFTWARE_UPLOAD_PACKET_NBR));

  if (!node)
  {
    _LOGF_ERROR("%s: paket number not available!", __FUNCTION__);
    SET_RESULT(0x64, 0xFE); // parameter error
    goto fail;
  }

  if ((node->uSize == 0) || (node->uSize > 4))
  {
    _LOGF_ERROR("%s: Packet Number exceeded maximum size!", __FUNCTION__);
    SET_RESULT(0x63, 0x00); // Tag length error
    goto fail;
  }

  switch (node->uSize)
  {
    case 1:
      rcvPaketNbr = node->pucData[0];
      break;

    case 2:
      rcvPaketNbr = node->pucData[0] * 256 + node->pucData[1];
      break;

    case 3:
      rcvPaketNbr = node->pucData[0] * 65536 +  node->pucData[1] * 256 + node->pucData[2];
      break;

    case 4:
      rcvPaketNbr = node->pucData[0] * 16777216 +  node->pucData[1] * 65536 +  node->pucData[2] * 256 + node->pucData[3];
      break;

    default:
      rcvPaketNbr = 0;
      break;
  }

  // check package number
  if (rcvPaketNbr == 0)
  {
    _LOGF_ERROR("%s: Invalid package number 0!", __FUNCTION__);
    SET_RESULT(0x64, 0xFE);  // Parameter error
    goto fail;
  }

  if (update_ctx->paketNbr == rcvPaketNbr)
  {
    _LOGF_INFO("%s: Package already processed, nothing to do!", __FUNCTION__);
    SET_RESULT(0x90, 0x00);  // package already processed, ignore it and expect the next package
    // keep update context for next upload transfer command
    return;
  }

  // check package number increased by one
  if (update_ctx->paketNbr + 1 != rcvPaketNbr)
  {
    _LOGF_ERROR("%s: Invalid package number, expected %u but received %u!",
                __FUNCTION__, update_ctx->paketNbr + 1, rcvPaketNbr);
    SET_RESULT(0x64, 0x00);  // Execution error
    goto fail;
  }

  // read record data
  node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA021_SOFTWARE_UPLOAD_RECORD_DATA));

  if (!node)
  {
    _LOGF_ERROR("%s: Read record data failed!", __FUNCTION__);
    SET_RESULT(0x64, 0x00);  // Execution error
    goto fail;
  }

  // open upload file in append mode
  fileHdl = open(update_ctx->file.c_str(), O_WRONLY | O_APPEND);

  if (fileHdl < 0)
  {
    _LOGF_ERROR("%s: Cannot open upload file '%s' !", __FUNCTION__, update_ctx->file.c_str());
    SET_RESULT(0x64, 0x00);  // Execution error
    goto fail;
  }

  // write the data to file
  if (write(fileHdl, (char *)node->pucData, node->uSize) != (ssize_t)node->uSize)
  {
    _LOGF_ERROR("%s: Write error with file '%s' (size=%d)!", __FUNCTION__, update_ctx->file.c_str(), node->uSize);
    SET_RESULT(0x64, 0x00);  // Execution error
    close(fileHdl);
    goto fail;
  }

  fsync(fileHdl);
  close(fileHdl);

  // increase package number
  update_ctx->paketNbr += 1;

  SET_RESULT(0x90, 0x00);  // success

  _LOGF_INFO("%s: success (package %u with %u bytes stored in upload file: %s)",
             __FUNCTION__, update_ctx->paketNbr, node->uSize, update_ctx->file.c_str());
  return;

fail:
  delete update_ctx;
  update_ctx = 0;
}

static void sysUploadFinalize(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  MutexLock ml(&update_mutex);

  if (!update_ctx)
  {
    _LOGF_ERROR("%s: No update started, run command SW Upload Start first!", __FUNCTION__);
    SET_RESULT(0x64, 0x00);  // Execution error
    return;
  }

  if (update_ctx->paketNbr == 0)
  {
    _LOGF_ERROR("%s: No update file uploaded, run command SW Upload Transfer first!", __FUNCTION__);
    SET_RESULT(0x64, 0x00);  // Execution error
    goto done;
  }

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: message length error!", __FUNCTION__);
    SET_RESULT(0x67, 0x00);  // Msg length error
    goto done;
  }

  if (update_ctx->uploadType == UPLOAD_TYPE_SOFTWARE_UPDATE)
  {
#ifdef _VOS // VOS/VOS2
    int retval = 1; // checksum valid

    // read MD5 checksum (optional)
    struct BTLVRootNode xBtlv;

    if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
    {
      // read checksum
      struct BTLVNode *node;

      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA023_SOFTWARE_UPLOAD_MD5))) != NULL)
      {
        if (node->uSize != 16)
        {
          _LOGF_ERROR("%s: Invalid checksum length (%u!=16)", __FUNCTION__, node->uSize);
          SET_RESULT(0x63, 0x00); // Tag length error
          goto done;
        }

        // validate checksum
        retval = checkFileChecksum(update_ctx->file.c_str(), node->pucData);
      }
    }

    if (retval != 1)
    {
      _LOGF_ERROR("%s: Wrong file checksum!", __FUNCTION__);
      SET_RESULT(0x64, 0x00); // Execution error
      goto done;
    }

    // check if new Secure Installer APIs are available
    if (_Secins_precheck_software && _Secins_install_software_extended)
    {
      const char *filePathList[1];

      filePathList[0] = update_ctx->file.c_str();

      // Call the new Secure Installer API
      int outflags = 0;

      if (_Secins_precheck_software(filePathList, 1, &outflags, 0) != 0)
      {
        _LOGF_ERROR("%s: Secins_precheck_software() with file '%s' failed!",
                    __FUNCTION__, update_ctx->file.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto done;
      }

      _LOGF_INFO("%s: Secins_precheck_software() with file '%s' successful (outflags=%d)",
                 __FUNCTION__, update_ctx->file.c_str(), outflags);
      SET_RESULT(0x90, 0x00); // success

      int size = 0;
      // Append post installation activities
      common::appendRespVal(outflags, rspBufSize - 2, &rsp[2], &size);
      *rspSize += size;

      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
      proto->send(rsp, *rspSize);
      // avoid dispatch()/process_side_command() to send a response (in case of reboot fails below)
      *rspSize = 0;
      sleep(3);

      // Leave the critical section for power management
      pm_setCriticalSection(false);

      /* Install the software and perform a required reboot afterwards.
       * The upload file is deleted with next startup of SDI server or with
       * cleanup of update context, if the update/reboot fails (see below) */
      _Secins_install_software_extended(filePathList, 1, SECINS_FORCE_INSTALL);

      goto done; // if reboot fails, cleanup update context
    }
    else // use old Secure Installer APIs
    {
      int outflags = 0;

      if (Secins_install_software(&outflags, 0) != 0)
      {
        _LOGF_ERROR("%s: Secins_install_software() failed!", __FUNCTION__);
        SET_RESULT(0x64, 0x00); // Execution error
        goto done;
      }

      _LOGF_INFO("%s; Secins_install_software() successful: %d", __FUNCTION__, outflags);
      SET_RESULT(0x90, 0x00); // success
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
      proto->send(rsp, *rspSize);
      // avoid dispatch()/process_side_command() to send a response (in case of reboot fails below)
      *rspSize = 0;
      sleep(3);

      /* Perform a reboot in any case because Secins_start_user_apps()
       * doesn't restart all necessary apps like MAC.
       * The upload file is deleted with next terminal startup, since the file is located on RAM disk.
       * If reboot fails, the upload file is deleted with cleanup of update context (see below) */
      Secins_reboot();

      goto done; // if reboot fails, cleanup update context
    }

#elif defined (_STM32)
    // Titus: ignore MD5 checksum, since packages itself use sha-256/sha-512 checksums checked by preinstall_package()

    // validate the package
    SiResult ret = preinstall_package(update_ctx->file.c_str());

    if (ret != SI_SUCCESS)
    {
      _LOGF_ERROR("%s: preinstall_package() with file '%s' failed with error 0x%x!",
                  __FUNCTION__, update_ctx->file.c_str(), ret);
      SET_RESULT(0x64, 0x00); // Execution error
      goto done;
    }

    _LOGF_INFO("%s: preinstall_package() with file '%s' successful",
               __FUNCTION__, update_ctx->file.c_str());
    SET_RESULT(0x90, 0x00); // success

    mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
    proto->send(rsp, *rspSize);
    // avoid dispatch()/process_side_command() to send a response (in case of reboot fails below)
    *rspSize = 0;
    sleep(3);
    (void)sys_Reboot();
    goto done; // if reboot fails, cleanup update context
#else
# ifdef _VOS3
#  warning "TODO: IMPLEMENT SECURE INSTALLER INSTALLATION OF CERTIFICATE"
    _LOGF_ERROR("%s: Upload type Software not yet supported on VOS3", __FUNCTION__);
# else
    /* Software update not supported on this platform
    * (shouldn't happen, since upload_file should stay empty for SW update on this platform) */
    _LOGF_ERROR("%s: Upload type Software not supported on this platform", __FUNCTION__);
# endif
    SET_RESULT(0x64, 0x00); // Execution error
    goto done;
#endif
  }

#ifdef _VOS2
  else if (update_ctx->uploadType == UPLOAD_TYPE_CP_PACKAGE)
  {
    if (!sdi::filesystem::move_file(update_ctx->file, update_ctx->dest) ||
        chmod(update_ctx->dest.c_str(), S_IRUSR | S_IWUSR | S_IRGRP | S_IWGRP  | S_IROTH))
    {
      _LOGF_ERROR("%s: failed to move %s to %s", __FUNCTION__, update_ctx->file.c_str(), update_ctx->dest.c_str());
      SET_RESULT(0x64, 0x00); // Execution error
      goto done;
    }

    vfimac::macError res = vfimac::sysInstallCPApp(update_ctx->dest);

    if (res == vfimac::MAC_ERR_OK)
    {
      vfimac::sysScanManifests();
      _LOGF_INFO("%s; CP apps installed()", __FUNCTION__);
      SET_RESULT(0x90, 0x00); // Success
    }
    else
    {
      _LOGF_ERROR("%s: failed to install CP apps: %d", __FUNCTION__, (int)res);
      SET_RESULT(0x64, 0x00); // Execution error
    }

    remove(update_ctx->dest.c_str());
  }

#endif

#ifdef _STM32
  else if (update_ctx->uploadType == UPLOAD_TYPE_UVRK_PACKAGE)
  {
    // wipe SDI update directory before extraction
    sdi::filesystem::remove_dir(sdi::filesystem::sdi_update_dir(), sdi::filesystem::FM_KeepTopDir);
    // extract files *.vrk2.json on top level of tar
    int cnt = sdi::filesystem::extract_tar(update_ctx->file, sdi::filesystem::sdi_update_dir(), "^[^\\/]*\\.vrk2\\.json$");

    if (cnt <= 0)
    {
      _LOGF_ERROR("%s: Installation of UVRK package failed, extract_tar(%s) returned %d",
                  __FUNCTION__, update_ctx->file.c_str(), cnt);
      SET_RESULT(0x64, 0x00); // Execution error
      goto done;
    }

    // install uvrk payloads
    int eei;
    enum pal_ReturnCodes ret = pal::update::doKeyLoad(eei, sdi::filesystem::sdi_update_dir());

    // cleanup SDI update directory after key installation
    sdi::filesystem::remove_dir(sdi::filesystem::sdi_update_dir(), sdi::filesystem::FM_KeepTopDir);

    if (ret == PAL_OK)
    {
      _LOGF_INFO("%s: Installation of UVRK package successful (%d files installed)", __FUNCTION__, cnt);
    }
    else
    {
      _LOGF_ERROR("%s: Installation of UVRK package failed, doKeyLoad() returned %d", __FUNCTION__, ret);
    }

    // map PAL error code to SDI result
    switch (ret)
    {
      case PAL_OK:
        SET_RESULT(0x90, 0x00);
        break;

      case PAL_ACCESS_DENIED:
        SET_RESULT(0x64, 0xFC);
        break;

      case PAL_LOGIC_ERROR:
        SET_RESULT(0x64, 0xFD);
        break;

      case PAL_ERROR: // fall through
      default:
        SET_RESULT(0x64, 0x00);
        break;
    }

    // add sproc error information to TLV tag DFA000 (additional error code)
    if (eei != 0)
    {
      int size = 0;
      common::appendRespVal(eei, rspBufSize - 2, &rsp[2], &size);
      *rspSize = 2 + size;
    }
  }

#endif
  else // Configuration file(s): Secured by CMACed, plugin or with trusted connection only
  {
#ifndef _STM32 // not supported on Titus
    bool authentic = false;

    // check if an SDI config plugin is installed/loaded to authenticate SDI config file(s) in upload directory
    if (pluginInstalledForTrigger(SDIPlugin::SDITrigger_SDIConfig))
    {
      // check of plugin, which allows to install configuration files without MAC
      if (executeSingleTrigger(SDIPlugin::SDITrigger_SDIConfig, msg, msgSize, 0, NULL, NULL) != 0x9000)
      {
        // if an existing plugin has declined the SDI configuration request, we must abort
        _LOGF_ERROR("%s: Configuration file declined by authentication check of plugin", __FUNCTION__);
        SET_RESULT(0x68, 0x02); // invalid plugin result
        goto done;
      }

      _LOGF_INFO("%s: Configuration file authenticated through a plugin", __FUNCTION__);
      authentic = true;
    }

    if (!authentic)
    {
      // PWMADK-2446: allow EMV configuration for local/trusted connection
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

      if (proto->trusted_connection())
      {
        _LOGF_INFO("%s: Configuration file considered authentic for trusted connection", __FUNCTION__);
        authentic = true;
      }
    }

    if (!authentic)
    {
      struct BTLVRootNode xBtlv;

      if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
      {
        _LOGF_ERROR("%s: Invalid BTLV data in command!", __FUNCTION__);
        SET_RESULT(0x62, 0x00); // Tag Error
        goto done;
      }

      // read MAC from the input message
      struct BTLVNode *node;

      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA01F_CONFIG_UPLOAD_MAC))) == NULL)
      {
        _LOGF_ERROR("%s: CMAC missing in command!", __FUNCTION__);
        SET_RESULT(0x6F, 0xB2); // CMAC Missing Error
        goto done;
      }

      if (node->uSize != 8)
      {
        _LOGF_ERROR("%s: Invalid CMAC length %d, expected 8!", __FUNCTION__, node->uSize);
        SET_RESULT(0x6F, 0xB1); // CMAC Length Error
        goto done;
      }

      // validate the MAC
      if (check_CMAC(INPUT_TYPE_FILE, update_ctx->file.c_str(), NULL, 0, node->pucData) != RESULT_OK)
      {
        _LOGF_ERROR("%s: Invalid CMAC!", __FUNCTION__);
        SET_RESULT(0x6F, 0xB0); // CMAC Error
        goto done;
      }

      _LOGF_INFO("%s: Configuration file authenticated through valid MAC", __FUNCTION__);
    }

    // single upload file
    if (update_ctx->uploadType >= UPLOAD_TYPE_CONFIG_WHITELIST && update_ctx->uploadType <= UPLOAD_TYPE_CONFIG_CARD_RANGES)
    {
      /* upload file is authentic, either through the MAC authentication or through the plugin trigger.
       * Thus, copy upload file to its destination (upload file removed with deletion of update context). */
      if (!sdi::filesystem::copy_file(update_ctx->file, update_ctx->dest))
      {
        _LOGF_ERROR("%s: Failed to copy upload file '%s' to '%s'!", __FUNCTION__, update_ctx->file.c_str(), update_ctx->dest.c_str());
        SET_RESULT(0x64, 0x00); // Execution error
        goto done;
      }

      // rebuild cache for card ranges configuration
      if (update_ctx->uploadType == UPLOAD_TYPE_CONFIG_CARD_RANGES)
      {
        CardRanges &cr = CardRanges::getInstance();
        CardRanges::Error status = cr.load(update_ctx->dest.c_str());

        if (status != CardRanges::ERR_NONE)
        {
          _LOGF_ERROR("%s: Failed to load cardranges file '%s'!", __FUNCTION__, update_ctx->dest.c_str());
          SET_RESULT(0x64, 0xFB); // invalid file content
          goto done;
        }
      }

      // rebuild cache for white lists configuration
      if (update_ctx->uploadType == UPLOAD_TYPE_CONFIG_WHITELIST)
      {
        Whitelist &wl = Whitelist::getInstance();
        Whitelist::Error status = wl.load(update_ctx->dest.c_str());

        if (status != Whitelist::ERR_NONE)
        {
          _LOGF_ERROR("%s: Failed to load whitelist file '%s'!", __FUNCTION__, update_ctx->dest.c_str());
          SET_RESULT(0x64, 0xFB); // invalid file content
          goto done;
        }
      }

      _LOGF_INFO("%s: Successfully updated file '%s'", __FUNCTION__, update_ctx->dest.c_str());
    }
    // EMV configuratin package (TAR archive)
    else if (update_ctx->uploadType == UPLOAD_TYPE_EMV_CONFIG_PACKAGE)
    {
      unsigned short ret = sdi::filesystem::install_emv_config_package(update_ctx->file);

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: install_emv_config_package(%s) failed with 0x%hx",
                    __FUNCTION__, update_ctx->file.c_str(), ret);
        SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
        goto done;
      }

      _LOGF_INFO("%s: Update of EMV config package (upload type %d) successful", __FUNCTION__, update_ctx->uploadType);
    }
    else
    {
      // shouldn't happen
      _LOGF_ERROR("%s: unknown upload type %d", __FUNCTION__, update_ctx->uploadType);
      SET_RESULT(0x64, 0x00); // Execution error
      goto done;
    }

    SET_RESULT(0x90, 0x00); // success
#else //  #ifndef _STM32
    // Configuration file(s), CMACed (not supported on Titus)
    _LOGF_ERROR("%s: upload type %d not supported on this platform", __FUNCTION__, update_ctx->uploadType);
    SET_RESULT(0x64, 0x00); // Execution error
    goto done;
#endif
  }

done:
  delete update_ctx;
  update_ctx = 0;
}

void sysResetUpdateContext(void *handle)
{
  MutexLock ml(&update_mutex);

  // free old context, e.g. from abort or connection lost
  if (update_ctx && update_ctx->handle == handle)
  {
    delete update_ctx;
    update_ctx = 0;
  }
}

#if !defined (__ANDROID__) &&  !defined (_STM32) // VOS/VOS2/VOS3 (and _x86)

static int checkFileChecksum(const char *filename, unsigned char *checkSum)
{
  unsigned char digest[16];

  if (!calculate_MD5(filename, digest))
  {
    _LOGF_ERROR("checkFileChecksum: Cannot calculate MD5 from file '%s'", filename);
    return -1;
  }

  if (memcmp(digest, checkSum, 16) != 0)
  {
    string cs, ds;
    sdi::bintohexstring(cs, checkSum, 16);
    sdi::bintohexstring(ds, digest, 16);
    _LOGF_ERROR("checkFileChecksum: File '%s' checksum invalid (%s != %s)", filename, cs.c_str(), ds.c_str());
    return -1;
  }

  return 1;
}
#endif // #ifndef __ANDROID__

#if defined (_VOS) || defined (_VOS3) || defined (__ANDROID__) || defined (_STM32)

static void sysShutdownRebootSleep(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  vfisyspmError errCode = SYS_PM_ERR_FAIL;
  int result = RESULT_FAIL;
  int size = 0;

  (void) msgBufSize;
  (void) msgSize;

  /* PWMADK-2417: command only allowed, if no other SDI command
   *              is active. Decline other connections with busy */
  mADK_PP_ProtBusyLock bl;

  if (!bl.locked())
  {
    _LOGF_ERROR("%s: Command not possible, since other SDI command(s) active (SDI server busy)", __FUNCTION__);
    SET_RESULT(0x64, 0x0A);
    return;
  }

  if (msg[2] == 0)
  {
    // Leave the critical section for power management
    pm_setCriticalSection(false);

    switch (msg[3])
    {
      case 0:
      {
        _LOGF_INFO("%s: Shutdown terminal!", __FUNCTION__);

        errCode = sys_Shutdown(PM_SUPPRESS_ALL);

        break;
      }

      case 1:
      {
        _LOGF_INFO("%s: Reboot terminal!", __FUNCTION__);

        errCode = sys_Reboot(PM_SUPPRESS_ALL);

        break;
      }

#ifdef _VOS

      case 2:
      {
        _LOGF_INFO("%s: Go to Sleep!", __FUNCTION__);

        errCode = sys_Sleep(PM_SUPPRESS_ALL);

        break;
      }

      case 3:
      {
        _LOGF_INFO("%s: Go to Hibernate!", __FUNCTION__);

        errCode = sys_Hibernate(PM_SUPPRESS_ALL);

        break;
      }

#endif // #ifdef _VOS

      default:
      {
        errCode = SYS_PM_ERR_UNSUPPORTED;
        _LOGF_ERROR("%s: Unknown P2 data", __FUNCTION__);
        break;
      }
    }
  }
  else
  {
    _LOGF_ERROR("%s: Unknown P1 data", __FUNCTION__);
  }

  if (errCode == SYS_PM_ERR_OK)
  {
    result = RESULT_OK;
  }
  else
  {
    _LOGF_ERROR("%s: sys_... returned an error (%d)", __FUNCTION__, errCode);
    result = common::appendRespVal(errCode, rspBufSize - 2, &rsp[2], &size);
  }

  if (rspBufSize >= 2)
  {
    setSW1SW2(result, rsp);

    *rspSize = 2 + size;
  }

}
#endif // #if defined (_VOS) || defined (__ANDROID__)

#if defined (_VOS) || defined (_VOS3)

static void sysMACShowDesktop(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msgSize;
  (void) msg;

  int size = 0;
  int result = RESULT_FAIL;

  vfimac::macError macerr = vfimac::sysShowDesktop();

  if (macerr == vfimac::MAC_ERR_OK)
  {
    result = RESULT_OK;
  }
  else
  {
    _LOGF_ERROR("sysShowDesktop() returns: %d", (int)macerr);
    result = common::appendRespVal(macerr, rspBufSize - 2, &rsp[2], &size);
  }

  if (rspBufSize >= 2)
  {
    setSW1SW2(result, rsp);

    *rspSize = 2 + size;
  }

}
#endif // #if defined (_VOS) || defined (_VOS3)

static void sysSetProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int             property = 0;
  int             valueInt = 0;
  int             sysret = SYS_ERR_OK;
  std::string     valueString;

  (void) msgBufSize;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    // Determine the Property
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID))) != NULL)
    {
      if (node->uSize > sizeof(property))
      {
        _LOGF_ERROR("sysSetProperty: Tag DFBC01 has wrong length");
        rsp[0] = 0x63;
        rsp[1] = 0x00;
        *rspSize = 2;
        sysret = SYS_ERR_FAIL;
      }
      else
      {
        unsigned int i;

        for (i = 0; i < node->uSize; i++)
        {
          if (i > 0)
          {
            property = property << 8;
          }

          property += node->pucData[i];
        }

        // Determine the Value
        if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE))) != NULL)
        {
          if (msg[3] == 0x00) // Property to set is an int
          {
            if (node->uSize > sizeof(valueInt))
            {
              _LOGF_ERROR("sysSetProperty: Tag DFBC02 has wrong length");
              rsp[0] = 0x63;
              rsp[1] = 0x00;
              *rspSize = 2;
              sysret = SYS_ERR_FAIL;
            }
            else
            {
              for (i = 0; i < node->uSize; i++)
              {
                if (i > 0)
                {
                  valueInt = valueInt << 8;
                }

                valueInt += node->pucData[i];
              }
            }
          }
          else // Property to set is a string
          {
            valueString.assign((char *)node->pucData, node->uSize);
          }
        }
        else
        {
          _LOGF_ERROR("sysSetProperty: Tag DFBC02 not available");
          rsp[0] = 0x62;
          rsp[1] = 0x00;
          *rspSize = 2;
          sysret = SYS_ERR_FAIL;
        }
      }
    }
    else
    {
      _LOGF_ERROR("sysSetProperty: Tag DFBC01 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      sysret = SYS_ERR_FAIL;
    }
  }
  else
  {
    _LOGF_ERROR("sysSetProperty: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    sysret = SYS_ERR_FAIL;
  }

  if (sysret == SYS_ERR_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

    if (msg[3] == 0x00) // Property to set is an int
    {
      _LOGF_INFO("%s %d%s %d", "sysSetProperty: Property =", property, ", Value =", valueInt);

      sysret = sysSetPropertyInt((SYSPropertyInt)property, valueInt);

      if (sysret == SYS_ERR_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d", "sys_setPropertyInt: Failed: ", sysret);
        result = common::appendRespVal(sysret, rspBufSize - 2, &rsp[2], &size);
      }
    }
    else // Property to set is a string
    {
      _LOGF_INFO("%s %d%s %s", "sysSetProperty: Property =", property, ", Value =", valueString.c_str());

      sysret = sysSetPropertyString((SYSPropertyString)property, valueString);

      if (sysret == SYS_ERR_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d", "sysSetProperty String: Failed: ", sysret);
        result = common::appendRespVal(sysret, rspBufSize - 2, &rsp[2], &size);
      }
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }
}

static void sysGetProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int             property = 0;
  int             valueInt = 0;
  std::string     valueString;
  int             sysret = SYS_ERR_OK;
  unsigned int    i;

  (void) msgBufSize;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    // Determine the Property
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID))) != NULL)
    {
      if (node->uSize > sizeof(property))
      {
        _LOGF_ERROR("sysGetProperty: Tag DFBC01 has wrong length");
        rsp[0] = 0x63;
        rsp[1] = 0x00;
        *rspSize = 2;
        sysret = SYS_ERR_FAIL;
      }
      else
      {
        for (i = 0; i < node->uSize; i++)
        {
          if (i > 0)
          {
            property = property << 8;
          }

          property += node->pucData[i];
        }
      }
    }
    else
    {
      _LOGF_ERROR("sysGetProperty: Tag DFBC01 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      sysret = SYS_ERR_FAIL;
    }
  }
  else
  {
    _LOGF_ERROR("sysGetProperty: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    sysret = SYS_ERR_FAIL;
  }

  if (sysret == SYS_ERR_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

    if (msg[3] == 0x00) // Property to get is an int
    {
      if ((sysret = sysGetPropertyInt((SYSPropertyInt)property, &valueInt)) != SYS_ERR_OK)
      {
        _LOGF_ERROR("%s %d %s %d", "sysGetProperty: Get Int failed: ", sysret, ", Property =", property);
        result = common::appendRespVal(sysret, rspBufSize - 2, &rsp[2], &size);
      }
    }
    else // Property to get is a string
    {
      if ((sysret = sysGetPropertyString((SYSPropertyString)property, valueString)) != SYS_ERR_OK)
      {
        _LOGF_ERROR("%s %d %s %d", "sysGetProperty: Get String failed: ", sysret, ", Property =", property);
        result = common::appendRespVal(sysret, rspBufSize - 2, &rsp[2], &size);
      }
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }

  if (sysret == SYS_ERR_OK)
  {
    _LOGF_INFO("%s %d", "sysGetProperty: Property =", property);

    vBTLVClear(&xBtlv);

    i = 3; // To avoid 4 byte Tag if property is zero

    if (property != 0x00000000)
    {
      // Determine the leading zero bytes
      for (i = 0; i < sizeof(property); i++)
      {
        if ((property & 0xFF000000) == 0x00000000)
        {
          property = property << 8;
        }
        else
        {
          break;
        }
      }
    }

    property = htonl(property);

    // Write the property without leading zero bytes to the TLV stucture
    if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID), (unsigned char *)&property, sizeof(property) - i) != NULL)
    {
      int size;

      if (msg[3] == 0x00) // Property to get is an int
      {
        i = 3; // To avoid 4 byte Tag if valueInt is zero

        if (valueInt != 0x00000000)
        {
          // Determine the leading zero bytes
          for (i = 0; i < sizeof(valueInt); i++)
          {
            if ((valueInt & 0xFF000000) == 0x00000000)
            {
              valueInt = valueInt << 8;
            }
            else
            {
              break;
            }
          }
        }

        valueInt = htonl(valueInt);

        // Write the int value without leading zero bytes to the TLV structure and build the response
        if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE), (unsigned char *)&valueInt, sizeof(valueInt) - i) != NULL &&
            (size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("sysGetProperty: Write/Export Int Error");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else // Property to get is a string
      {
        // Write the string value to the TLV structure and build the response
        if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE), (unsigned char *)valueString.c_str(), valueString.size()) != NULL &&
            (size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("sysGetProperty: Write/Export String Error");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
    }
    else
    {
      _LOGF_ERROR("sysGetProperty: Write Error");
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }
}

static void sysGetVersionInfo(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;

  if (!rsp || !rspSize || rspBufSize < 2)
  {
    return;  // parameter error (shouldn't happen)
  }

  int size;
  char err_buf[128] = {0};
  const char *err = err_buf;
  const char *csd_version = csd::csd_GetVersion();
  struct BTLVNode *f0, *node;
  struct BTLVRootNode xBtlv;
  string str;

#ifndef NO_PLUGINS
  /* Note: We are allowed to access const plugin vector from side connection threads (read-only)
   *       from multiple side connection threads, since this vector is modified during SW update
   *       (and startup) only. This function is not invoked during SW update, because all SDI commands
   *       are declined while SW update is active (busy lock mechanism). Therefore, we are thread-safe. */
  const vector<SDIPluginCtx *> &plugins = getLoadedPlugins();
#endif

  f0 = pxBTLVWriteTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, 0, 0);

  if (!f0)
  {
    err = "cannot create tag F0";
    goto failed;
  }

  // write SDI server version
  node = pxBTLVAppendTag(f0, SDI_TAG_FFA103_SDI_COMPONENT, 0, 0);

  if (!node)
  {
    err = "cannot create tag F0/FFA103 (component SDI server)";
    goto failed;
  }

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00E_NAME,
                      (const unsigned char *)SDI_APP_NAME, strlen(SDI_APP_NAME)))
  {
    err = "cannot create tag F0/FFA103/DFA00E (SDI server name)";
    goto failed;
  }

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00F_VERSION,
                      (const unsigned char *)SDI_VERSION, strlen(SDI_VERSION)))
  {
    err = "cannot create tag F0/FFA103/DFA00F (SDI server version)";
    goto failed;
  }

  // write libsdicsd version
  node = pxBTLVAppendTag(f0, SDI_TAG_FFA103_SDI_COMPONENT, 0, 0);

  if (!node)
  {
    err = "cannot create tag F0/FFA103 (component libsdicsd)";
    goto failed;
  }

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00E_NAME,
                      (const unsigned char *)CSD_LIBNAME, strlen(CSD_LIBNAME)))
  {
    err = "cannot create tag F0/FFA103/DFA00E (libsdicsd name)";
    goto failed;
  }

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00F_VERSION,
                      (const unsigned char *)csd_version, strlen(csd_version)))
  {
    err = "cannot create tag F0/FFA103/DFA00F (libsdicsd version)";
    goto failed;
  }

  // write libsdikeyservice version
  node = pxBTLVAppendTag(f0, SDI_TAG_FFA103_SDI_COMPONENT, 0, 0);

  if (!node)
  {
    err = "cannot create tag F0/FFA103 (component libsdikeyservice)";
    goto failed;
  }

#ifndef _STM32
  str = keyservice_get_libname();

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00E_NAME, (const unsigned char *)str.c_str(), str.length()))
  {
    err = "cannot create tag F0/FFA103/DFA00E (libsdikeyservice name)";
    goto failed;
  }

  str = keyservice_get_version();

  if (!pxBTLVWriteTag(node, SDI_TAG_DFA00F_VERSION, (const unsigned char *)str.c_str(), str.length()))
  {
    err = "cannot create tag F0/FFA103/DFA00F (libsdikeyservice version)";
    goto failed;
  }

  // write version info for SDI plugins
  for (unsigned i = 0; i < plugins.size(); i++)
  {
    node = pxBTLVAppendTag(f0, SDI_TAG_FFA103_SDI_COMPONENT, 0, 0);

    if (!node)
    {
      snprintf(err_buf, sizeof(err_buf), "cannot create tag F0/FFA103 (%s component)", plugins[i]->getName().c_str());
      goto failed;
    }

    if (!pxBTLVWriteTag(node, SDI_TAG_DFA00E_NAME,
                        (const unsigned char *)plugins[i]->getName().c_str(), plugins[i]->getName().length()))
    {
      snprintf(err_buf, sizeof(err_buf), "cannot create tag F0/FFA103 (%s name)", plugins[i]->getName().c_str());
      goto failed;
    }

    if (!pxBTLVWriteTag(node, SDI_TAG_DFA00F_VERSION,
                        (const unsigned char *)plugins[i]->getVersion().c_str(), plugins[i]->getVersion().length()))
    {
      snprintf(err_buf, sizeof(err_buf), "cannot create tag F0/FFA103 (%s version)", plugins[i]->getName().c_str());
      goto failed;
    }
  }

#endif

  if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) <= 0)
  {
    sprintf(err_buf, "iBTLVExport() failed with %d (buffer size=%hu)", size, (unsigned short)(rspBufSize - 2));
    goto failed;
  }

  _LOGF_INFO("sysGetVersionInfo: SUCCESS (%d bytes returned)\n", size + 2);
  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize = size + 2;
  return;

failed:
  _LOGF_ERROR("sysGetVersionInfo: error => %s", err);
  rsp[0] = 0x64;
  rsp[1] = 0x00;
  *rspSize = 2;
}

static void sysFactoryReset(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msg;
  (void) msgSize;
  (void) rspBufSize;

  /* PWMADK-2303: only allow Factory Reset, if no other SDI command is active and
   * decline other connections with busy as long as the update is processed */
  mADK_PP_ProtBusyLock bl;

  if (!bl.locked())
  {
    _LOGF_ERROR("%s: Factory Reset not possible, since other SDI command(s) active (SDI server busy)", __FUNCTION__);
    SET_RESULT(0x64, 0x0A);
    return;
  }

  // reset the filesystem
  sdi::filesystem::factory_reset();
  _LOGF_INFO("%s: filesystem reset, done.", __FUNCTION__);

#ifndef HEADLESS

  if (ui_enabled())
  {
    // unlock the idle screen to enable info/menu button
    sysSetIdleScreenLocked(false, false);
    // switch internal SDI catalog back to default system language
    UICatalog syslang;

    if (!syslang.setUIGlobal(UICatalog::Intern, false)) // set global and keep this catalog for UI after deletion
    {
      _LOGF_ERROR("%s: UI catalog cannot be applied: %s", __FUNCTION__, syslang.error().c_str());
      SET_RESULT(0x64, 0x00);
      return;
    }

    _LOGF_INFO("%s: UI reinitialization, done.", __FUNCTION__);
  }

#endif

#ifndef NO_PLUGINS
  // send trigger "Factory Reset" to all loaded plugins, which support this trigger
  csd_data message; // empty
  vector<struct bcTriggerResult> results;
  broadcastTrigger(SDIPlugin::SDITrigger_FactoryReset, message, results);

  for (unsigned i = 0; i < results.size(); i++)
  {
    _LOGF_INFO("%s: Trigger FactoryReset executed on plugin id %d (result=0x%.4X), done.",
               __FUNCTION__, results[i].id, results[i].retval);
  }

#endif

  // Disable the EPP if enabled. On a following enable EPP command
  // the EMV/NFC/SDI configuration will be synchronized to the EPP
  vfiepm::CounterTop& ctp = vfiepm::CounterTop::getInstance();

  if (ctp.isCounterTopMode() && ctp.isEppEnabled())
  {
    // Disable EPP
    ctp.disableEpp();
  }

  // send response and reset the protocol
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
  unsigned char resp[] = {0x90, 0x00};
  _LOGF_INFO("%s: send result (size=2):\n9000", __FUNCTION__);
  proto->send(resp, 2);
  // avoid dispatch()/process_side_command() to send a response
  *rspSize = 0;
  sleep(2);
  // close all connections and abort the protocol
  proto->reset();
  _LOGF_INFO("%s: mADK PP protocol reset, done.", __FUNCTION__);
}

void sysReadCertificate(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  if (!rsp || !rspSize || rspBufSize < 2)
  {
    return;  // parameter error (shouldn't happen)
  }

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: invalid message size (%d)", __FUNCTION__, msgSize);
    SET_RESULT(0x67, 0x00);
    return;
  }

  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00); // Tag Error
    return;
  }

  struct BTLVNode *node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA500_KEY_REFERENCE));

  if (!node || node->uSize == 0)
  {
    _LOGF_ERROR("%s: tag F0/DFA500 (key/certificate reference) missing!", __FUNCTION__);
    SET_RESULT(0x64, 0xFE); // parameter error
    return;
  }

  vector<unsigned char> certificate;
  string refname((const char *)node->pucData, node->uSize);

#ifdef _STM32

  /* call PAL directly since sdikeyservice is not available on Titus.
   * Finally, LocalKeyServiceK81::readCertificate() would do the same. */
  if (!pal::keystore_read_cert(refname, certificate))
  {
    _LOGF_ERROR("%s: pal::keystore_read_cert() with refname '%s' failed",
                __FUNCTION__, refname.c_str());
    SET_RESULT(0x64, 0x00); // execution error
    return;
  }

  if (certificate.size() == 0)
  {
    _LOGF_ERROR("%s: pal::keystore_read_cert() with refname '%s' returned empty data",
                __FUNCTION__, refname.c_str());
    SET_RESULT(0x64, 0x00); // execution error
    return;
  }

#else
  // read the certificate from libsdikeyservice for provided reference name
  unsigned short ret = keyservice_read_certificate(refname, certificate);

  if (ret != 0x9000)
  {
    _LOGF_ERROR("%s: keyservice_read_certificate() with refname '%s' failed with error 0x%04hX",
                __FUNCTION__, refname.c_str(), ret);
    SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
    return;
  }

  // shouldn't happen
  if (certificate.size() == 0)
  {
    _LOGF_ERROR("%s: keyservice_read_certificate() with refname '%s' returned empty data",
                __FUNCTION__, refname.c_str());
    SET_RESULT(0x64, 0x00); // execution error
    return;
  }

#endif

  // export the certificate to TLV buffer
  int size = 0;
  vBTLVClear(&xBtlv);

  if (!pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA501_CERTIFICATE), &certificate[0], certificate.size())
      || (size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) <= 0)
  {
    _LOGF_ERROR("%s: write/export certificate to TLV buffer failed (size=%d)", __FUNCTION__, size);
    SET_RESULT(0x64, 0x00); // execution error
    return;
  }

  // read certificate successful
  SET_RESULT(0x90, 0x00);
  *rspSize += size;
}

void sysForceCurrAbbr(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  if (!rsp || !rspSize || rspBufSize < 2)
  {
    return;  // parameter error (shouldn't happen)
  }

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: invalid message size (%d)", __FUNCTION__, msgSize);
    SET_RESULT(0x67, 0x00);
    return;
  }

  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00); // Tag Error
    return;
  }

  struct BTLVNode *node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2A"));

  if (!node || node->uSize == 0 || node->uSize != 2 || msg[3] > 0x01)
  {
    _LOGF_ERROR("%s: tag F0/5F2A (currency) missing!", __FUNCTION__);
    SET_RESULT(0x64, 0xFE); // parameter error
    return;
  }

  unsigned short curr = node->pucData[0] * 256 + node->pucData[1];

  bool currValid = false;

  // Check whether the currency has a valid currency symbol
  for (unsigned int i = 0; i < (unsigned int)(sizeof(currSymbolTable) / sizeof(CurrMapTable)); i++)
  {
    if (curr == currSymbolTable[i].code)
    {
      currValid = true;
      break;
    }
  }

  if (currValid)
  {
    std::string forcedCurrAbbr = SdiSysConfig::instance().getForcedAbbrCurrs();
    char help[5] = {0};
    std::string currStr;
    sprintf(help, "%04X", curr);
    currStr = help;
    std::string forceAbbrCurrs = forcedCurrAbbr;

    if (msg[3] == 0x01) // Set Force Currency Abbreviation
    {
      if (forceAbbrCurrs.find(currStr) == string::npos)
      {
        // Add currency to list
        forceAbbrCurrs.append(currStr);
        SdiSysConfig::instance().setForcedAbbrCurrs(forceAbbrCurrs, true);
      }
    }
    else
    {
      size_t pos = forceAbbrCurrs.find(currStr);

      if (pos != string::npos)
      {
        // Remove currency from list
        forceAbbrCurrs.replace(pos, 4, "");
        SdiSysConfig::instance().setForcedAbbrCurrs(forceAbbrCurrs, true);
      }
    }
  }

  // read certificate successful
  SET_RESULT(0x90, 0x00);
}

#if !defined(_VOS) && !defined(_VOS3) && !defined(_STM32) // __ANDROID__ and _x86

static void sysCheckForUpdate(unsigned short msgBufSize, unsigned char *msg,
                              unsigned short msgSize, unsigned short rspBufSize,
                              unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  if (msgSize < 4)
  {
    _LOGF_ERROR("%s: invalid message size (%d)", __FUNCTION__, msgSize);
    SET_RESULT(0x67, 0x00);
    return;
  }

  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: command is not TLV constructed (F0)!", __FUNCTION__);
    SET_RESULT(0x62, 0x00); // Tag Error
    return;
  }

  struct BTLVNode *node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA01E_CONFIG_UPLOAD_TYPE));

  if (!node)
  {
    _LOGF_ERROR("%s: Tag F0/DFA01E missing", __FUNCTION__);
    SET_RESULT(0x64, 0xFE); // parameter error
    return;
  }

  if (node->uSize != 1)
  {
    _LOGF_ERROR("%s: Invalid tag length DFA01E", __FUNCTION__);
    SET_RESULT(0x63, 0x00);
    return;
  }

  unsigned char upload_type = *node->pucData;

  if (upload_type >= UPLOAD_TYPE_MAX)
  {
    _LOGF_ERROR("%s: Invalid tag value DFA01E", __FUNCTION__);
    SET_RESULT(0x62, 0x00);
    return;
  }

  /* PWMADK-2303: only allow SW update, if no other SDI command is active and
   * decline other connections with busy as long as the update is processed */
  mADK_PP_ProtBusyLock bl;

  if (!bl.locked())
  {
    _LOGF_ERROR("%s: Update not possible, since other SDI command(s) active (SDI server busy)", __FUNCTION__);
    SET_RESULT(0x64, 0x0A);
    return;
  }

  const char *sdi_file = 0;

  switch (upload_type)
  {
#ifdef __ANDROID__

    // update firmware
    case UPLOAD_TYPE_FIRMWARE_UPDATE:
    {
      _LOGF_INFO("%s: Upload type FIRMWARE_UPDATE (%d)", __FUNCTION__, upload_type);
      int eei;
      enum pal_ReturnCodes ret = pal::update::doFirmwareUpdate(eei);

      switch (ret)
      {
        case PAL_OK:
          SET_RESULT(0x90, 0x00);
          break;

        case PAL_ACCESS_DENIED:
          SET_RESULT(0x64, 0xFC);
          break;

        case PAL_LOGIC_ERROR:
          SET_RESULT(0x64, 0xFD);
          break;

        case PAL_ERROR: // fall through
        default:
          SET_RESULT(0x64, 0x00);
          break;
      }

      if (eei != 0)
      {
        int size = 0;
        common::appendRespVal(eei, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
      }

      break;
    }

    // update keys
    case UPLOAD_TYPE_KEYS:
    {
      _LOGF_INFO("%s: Upload type KEYS (%d)", __FUNCTION__, upload_type);
      int eei;
      enum pal_ReturnCodes ret = pal::update::doKeyLoad(eei);

      switch (ret)
      {
        case PAL_OK:
          SET_RESULT(0x90, 0x00);
          break;

        case PAL_ACCESS_DENIED:
          SET_RESULT(0x64, 0xFC);
          break;

        case PAL_LOGIC_ERROR:
          SET_RESULT(0x64, 0xFD);
          break;

        case PAL_ERROR: // fall through
        default:
          SET_RESULT(0x64, 0x00);
          break;
      }

      if (eei != 0)
      {
        int size = 0;
        common::appendRespVal(eei, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
      }

      break;
    }

#endif // #ifdef __ANDROID__

    // update SDI file
    case UPLOAD_TYPE_CONFIG_CARD_RANGES:
      if (!sdi_file)
      {
        sdi_file = CARD_RANGES_FILE;
      }

    // fall through
    case UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS:
      if (!sdi_file)
      {
        sdi_file = SENSITIVE_TAGS_FILE;
      }

    // fall through
    case UPLOAD_TYPE_CONFIG_WHITELIST:
    {
      if (!sdi_file)
      {
        sdi_file = WHITELIST_FILE;
      }

      _LOGF_INFO("%s: Upload file '%s' (type %d)", __FUNCTION__, sdi_file, upload_type);
      std::string input_file = pathcat(sdi::filesystem::sdi_update_dir(), sdi_file);
      std::string output_file = sdi::filesystem::home_flash_file(sdi_file);
      std::string output_file2 = pathcat(sdi::filesystem::sdi_persist_dir(), sdi_file);

      if (!sdi::filesystem::copy_file(input_file, output_file))
      {
        SET_RESULT(0x64, 0xFC); // file access error
        break;
      }

      /* PWMADK-2233: store files to persistent partition to make files
       *              recoverable with command (2022) factory reset */
      if (!sdi::filesystem::copy_file(input_file, output_file2))
      {
        SET_RESULT(0x64, 0xFC); // file access error
        break;
      }

      // rebuild cache for card ranges configuration
      if (upload_type == UPLOAD_TYPE_CONFIG_CARD_RANGES)
      {
        CardRanges &cr = CardRanges::getInstance();
        cr.load(output_file.c_str());
      }

      SET_RESULT(0x90, 0x00);
      break;
    }

    case UPLOAD_TYPE_CONFIG_SDIEMV: // install user configuration files
    {
      _LOGF_INFO("%s: Install user config SDIEMV (upload type %d)", __FUNCTION__, upload_type);
      unsigned short ret = sdi::filesystem::install_user_configuration();

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: install_user_configuration() failed with 0x%hx", __FUNCTION__, ret);
      }

      SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
      break;
    }

#ifdef __ANDROID__

    case UPLOAD_TYPE_REMOVE_SPONSOR:
    {
      string dir = sdi::filesystem::sys_remove_sponsor_dir();
      int eei;
      const enum pal_ReturnCodes ret = pal::update::removeSponsor(dir, eei);

      switch (ret)
      {
        case PAL_OK:
          SET_RESULT(0x90, 0x00);
          break;

        case PAL_ACCESS_DENIED:
          SET_RESULT(0x64, 0xFC);
          break;

        case PAL_LOGIC_ERROR:
          SET_RESULT(0x64, 0xFD);
          break;

        case PAL_SPONSOR_MISSING: // fall through
        case PAL_ERROR:           // fall through
        default:
          SET_RESULT(0x64, 0x00);
          break;
      }

      if (eei != 0)
      {
        int size = 0;
        common::appendRespVal(eei, rspBufSize - 2, &rsp[2], &size);
        *rspSize = 2 + size;
      }

      break;
    }

#endif // #ifdef __ANDROID__

    case UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV: // remove user configuration files
    {
      _LOGF_INFO("%s: Remove user config SDIEMV (upload type %d)", __FUNCTION__, upload_type);
      unsigned short ret = sdi::filesystem::remove_user_configuration();
      SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
      break;
    }

    case UPLOAD_TYPE_PLUGIN: // install SDI plugins
    {
      _LOGF_INFO("%s: Install SDI plugins (upload type %d)", __FUNCTION__, upload_type);
      unsigned short ret = sdi::filesystem::install_sdi_plugins();

      if (ret != 0x9000)
      {
        _LOGF_ERROR("%s: install_sdi_plugins() failed with 0x%hx", __FUNCTION__, ret);
      }

      SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
      break;
    }

    case UPLOAD_TYPE_REMOVE_PLUGIN: // remove SDI plugins
    {
      _LOGF_INFO("%s: Remove SDI plugins (upload type %d)", __FUNCTION__, upload_type);
      unsigned short ret = sdi::filesystem::remove_sdi_plugins();
      SET_RESULT((unsigned char)(ret >> 8), (unsigned char)(ret));
      break;
    }

    default:
      _LOGF_ERROR("%s: Unknown upload type (%d)", __FUNCTION__, upload_type);
      SET_RESULT(0x64, 0x00);
      break;
  }
}
#endif // #if !defined(_VOS) && !defined(_VOS3)
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
